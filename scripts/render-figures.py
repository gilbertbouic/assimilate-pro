#!/usr/bin/env python3
"""Render cad/figures through the running VibeCAD window.

Open VibeCAD first. This script reads the local agent token and does not print it.
Pass figure names to render a subset: scripts/render-figures.py house
"""

import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIGURES = ROOT / "cad" / "figures"
MANIFEST = ROOT / "cad" / "manifest.json"
ENDPOINT = Path.home() / ".local/share/VibeCAD/agent/endpoint.json"
OPEN_HINT = "Open VibeCAD and leave its window running, then rerun scripts/render-figures.py."


def fail(message):
    print(message, file=sys.stderr)
    raise SystemExit(1)


def endpoint():
    if not ENDPOINT.is_file():
        fail(OPEN_HINT)
    data = json.loads(ENDPOINT.read_text(encoding="utf-8"))
    token_path = Path(data["token_path"])
    if not token_path.is_file():
        fail(OPEN_HINT)
    token = token_path.read_text(encoding="utf-8").strip()
    if not token:
        fail(OPEN_HINT)
    return data["base_url"].rstrip("/"), token


def request(method, url, token, payload=None):
    body = None if payload is None else json.dumps(payload).encode("utf-8")
    headers = {"Authorization": "Bearer " + token}
    if body is not None:
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=120) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.URLError as exc:
        reason = getattr(exc, "reason", exc)
        fail("%s (%s)" % (OPEN_HINT, reason))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        fail("VibeCAD returned HTTP %s for %s\n%s" % (exc.code, url, detail[:1500]))


def run_python(base, token, source):
    outcome = request("POST", base + "/v1/run", token, {"python": source, "recompute": False})
    if not outcome.get("ok"):
        fail(outcome.get("error") or outcome.get("failure_code") or "VibeCAD python call failed")
    return outcome.get("result")


def chrome_snapshot(base, token):
    return run_python(
        base,
        token,
        "import FreeCAD as App\n"
        "import VibeCADGrid\n"
        "prefs = App.ParamGet('User parameter:BaseApp/Preferences/View')\n"
        "result = {'navi': bool(prefs.GetBool('ShowNaviCube', True)),"
        " 'grid': bool(VibeCADGrid.is_grid_visible())}\n",
    )


def chrome_restore(base, token, snapshot):
    if not isinstance(snapshot, dict):
        return
    navi = "True" if snapshot.get("navi") else "False"
    grid = "True" if snapshot.get("grid") else "False"
    run_python(
        base,
        token,
        "import FreeCAD as App\n"
        "import VibeCADGrid\n"
        "prefs = App.ParamGet('User parameter:BaseApp/Preferences/View')\n"
        "prefs.SetBool('ShowNaviCube', %s)\n"
        "VibeCADGrid.toggle_grid(%s)\n"
        "result = 'restored'\n" % (navi, grid),
    )


def main(names):
    base, token = endpoint()
    status = request("GET", base + "/v1/status", token)
    if not status.get("ok"):
        fail(OPEN_HINT)
    if not status.get("gui_up"):
        fail("VibeCAD is listening without a 3D window. Open the VibeCAD window and rerun.")
    chrome = chrome_snapshot(base, token)

    try:
        _render_scripts(base, token, names)
    finally:
        chrome_restore(base, token, chrome)


def _render_scripts(base, token, names):
    scripts = []
    if names:
        for name in names:
            path = FIGURES / (name if name.endswith(".py") else name + ".py")
            if not path.is_file():
                fail("No figure script at %s" % path)
            scripts.append(path)
    else:
        scripts = sorted(FIGURES.glob("*.py"))
    if not scripts:
        fail("No figure scripts in cad/figures.")

    plates = []
    if MANIFEST.is_file() and names:
        try:
            previous = json.loads(MANIFEST.read_text(encoding="utf-8"))
            plates = [item for item in previous.get("plates", []) if item.get("file")]
        except json.JSONDecodeError:
            plates = []

    for script in scripts:
        print("Rendering %s" % script.name, flush=True)
        outcome = request(
            "POST",
            base + "/v1/run",
            token,
            {"script": str(script.resolve()), "recompute": True},
        )
        if not outcome.get("ok"):
            fail(
                "%s failed: %s\n%s\n%s"
                % (
                    script.name,
                    outcome.get("failure_code") or outcome.get("error"),
                    (outcome.get("stderr") or "")[:2000],
                    (outcome.get("stdout") or "")[:500],
                )
            )
        info = outcome.get("result")
        if not isinstance(info, dict) or not info.get("file"):
            fail("%s did not return a plate record.\n%s" % (script.name, outcome.get("stdout")))
        plates = [item for item in plates if item.get("file") != info["file"]]
        plates.append(info)
        print("  %s  %s bytes" % (info["file"], info.get("bytes")), flush=True)

    plates.sort(key=lambda item: item["file"])
    MANIFEST.write_text(json.dumps({"plates": plates}, indent=2) + "\n", encoding="utf-8")
    print("Wrote %s" % MANIFEST.relative_to(ROOT))


if __name__ == "__main__":
    main(sys.argv[1:])
