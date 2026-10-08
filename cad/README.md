# Figures

These scripts are the source for the pictures in the browser guide. VibeCAD runs them. The site only loads the PNGs in `assets/figures/`.

Open the VibeCAD window, then from the repo root:

```bash
python3 scripts/render-figures.py          # every plate
python3 scripts/render-figures.py house    # one plate
```

The script reads the local agent token at `~/.local/share/VibeCAD/agent/`. It does not print the token. If VibeCAD is closed, the script stops.

Each plate is an orthographic three-quarter view on `#08080c`, except `field.png`, which is a left-to-right row for the boot card. The readable face of an object points toward -Y. Colors are the Optimus HUD: cyan edges, green for the lawful part, amber for caution, crimson for reject.

`manifest.json` is rewritten with size and sha256 after a successful render.
