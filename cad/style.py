"""Shared plate style for Assimilate Pro figures.

Runs inside VibeCAD. Colors match the Optimus HUD. The browser never imports this module.
"""

from pathlib import Path

VOID = "#08080c"
BODY = (0.22, 0.28, 0.36)
BODY_EDGE = (0.0, 0.898, 1.0)      # #00e5ff
GREEN = (0.239, 1.0, 0.604)        # #3dff9a
AMBER = (0.878, 0.439, 0.188)      # #e07030
CRIMSON = (1.0, 0.231, 0.306)      # #ff3b4e
PAPER = (0.906, 0.933, 0.949)      # #e7eef2
GROUND = (0.12, 0.14, 0.17)
SLOT = (0.04, 0.045, 0.06)

PLATE_W = 1600
PLATE_H = 1000


def repo_root():
    return Path(__file__).resolve().parents[1]


def plate_path(name):
    folder = repo_root() / "assets" / "figures"
    folder.mkdir(parents=True, exist_ok=True)
    return folder / name


def add(doc, name, shape, rgb, edge=None, mode="Flat Lines"):
    obj = doc.addObject("Part::Feature", name)
    obj.Shape = shape
    view = obj.ViewObject
    view.ShapeColor = rgb
    view.LineColor = edge if edge is not None else rgb
    view.LineWidth = 2.0
    view.PointColor = view.LineColor
    view.DisplayMode = mode
    return obj


def _active_view(doc):
    import FreeCADGui as Gui
    from PySide import QtWidgets

    Gui.setActiveDocument(doc.Name)
    main = Gui.getMainWindow()
    mdi = main.findChild(QtWidgets.QMdiArea) if main is not None else None
    if mdi is not None:
        for window in mdi.subWindowList():
            if str(window.windowTitle()).startswith(doc.Name):
                mdi.setActiveSubWindow(window)
                break
    QtWidgets.QApplication.processEvents()
    gui_doc = Gui.getDocument(doc.Name)
    if gui_doc is None:
        raise RuntimeError("VibeCAD has no 3D view. Open the VibeCAD window and rerun.")
    view = gui_doc.activeView()
    if view is None:
        raise RuntimeError("VibeCAD has no 3D view. Open the VibeCAD window and rerun.")
    return view


def _quiet_chrome(view):
    """Hide the grid and nav cube for the capture, and return a restore callback.

    The callback puts the Draft grid preference and the nav-cube preference back.
    It does not try to reconstruct a grid tracker that was never visible.
    """
    import FreeCAD as App
    import VibeCADGrid

    grid_was = VibeCADGrid.is_grid_visible()
    prefs = App.ParamGet("User parameter:BaseApp/Preferences/View")
    navi_was = prefs.GetBool("ShowNaviCube", True)
    try:
        view.setAxisCross(False)
    except Exception:
        pass
    prefs.SetBool("ShowAxisCross", False)
    prefs.SetBool("ShowNaviCube", False)
    VibeCADGrid.toggle_grid(False)

    def restore():
        prefs.SetBool("ShowNaviCube", bool(navi_was))
        if grid_was:
            VibeCADGrid.toggle_grid(True)

    return restore


def frame(doc, mode="iso"):
    """Orthographic three-quarter (iso) or a shallow front view for a left-to-right row."""
    import FreeCADGui as Gui

    doc.recompute()
    view = _active_view(doc)
    restore = _quiet_chrome(view)
    Gui.updateGui()
    view.setCameraType("Orthographic")
    if mode == "row":
        view.viewFront()
        from pivy import coin

        cam = view.getCameraNode()
        tilt = coin.SbRotation(coin.SbVec3f(1, 0, 0), -0.55)
        cam.orientation.setValue(tilt * cam.orientation.getValue())
    else:
        view.viewIsometric()
    view.fitAll()
    cam = view.getCameraNode()
    try:
        cam.height.setValue(cam.height.getValue() * 1.12)
    except Exception:
        pass
    Gui.updateGui()
    view.redraw()
    return view, restore


def _flatten_on_void(path, crop=False):
    """saveImage('#rrggbb') drops the solids. Capture transparent and composite."""
    from PIL import Image, ImageChops

    image = Image.open(path).convert("RGBA")
    alpha = image.getchannel("A")
    opaque = sum(count for count, value in (alpha.getcolors(PLATE_W * PLATE_H) or []) if value > 16)
    if opaque < 1000:
        raise RuntimeError("VibeCAD captured an empty plate. Leave the 3D view visible and rerun.")
    plate = Image.new("RGB", image.size, (8, 8, 12))
    plate.paste(image, mask=alpha)
    if crop:
        background = Image.new("RGB", plate.size, (8, 8, 12))
        difference = ImageChops.difference(plate, background).convert("L")
        bounds = difference.point(lambda value: 255 if value > 6 else 0).getbbox()
        if bounds:
            pad = 28
            plate = plate.crop(
                (
                    max(0, bounds[0] - pad),
                    max(0, bounds[1] - pad),
                    min(plate.width, bounds[2] + pad),
                    min(plate.height, bounds[3] + pad),
                )
            )
    plate.save(path, "PNG", optimize=True)
    return opaque, plate.size


def export_plate(doc, filename, mode="iso"):
    import hashlib

    from PySide import QtWidgets

    path = plate_path(filename)
    view, restore = frame(doc, mode=mode)
    try:
        QtWidgets.QApplication.processEvents()
        view.redraw()
        # A solid background color makes saveImage drop the geometry. Transparent keeps it.
        view.saveImage(str(path), PLATE_W, PLATE_H, "Transparent")
        opaque, size = _flatten_on_void(path, crop=(mode == "row"))
    finally:
        restore()
    data = path.read_bytes()
    if not data.startswith(b"\x89PNG"):
        raise RuntimeError("VibeCAD did not write a PNG to %s" % path)
    return {
        "file": "assets/figures/" + filename,
        "bytes": len(data),
        "sha256": hashlib.sha256(data).hexdigest(),
        "width": size[0],
        "height": size[1],
        "opaque_pixels": opaque,
    }


def new_document(name):
    import FreeCAD as App

    if name in [doc.Name for doc in App.listDocuments().values()]:
        App.closeDocument(name)
    return App.newDocument(name)


def close_document(doc):
    import FreeCAD as App

    App.closeDocument(doc.Name)
