"""Solids shared by more than one plate. The readable face points toward -Y."""

import FreeCAD as App
import Part

import style


def plinth(doc, name, x, y, sx, sy, z=2):
    shape = Part.makeBox(sx, sy, z, App.Vector(x, y, 0))
    return style.add(doc, name, shape, style.GROUND, style.GROUND, mode="Shaded")


def kiosk(doc, panel=None):
    """Official kiosk. Pass a crimson panel solid to turn it into the scam tell."""
    plinth(doc, "Plinth", -34, -48, 78, 70)
    body = Part.makeBox(36, 26, 62, App.Vector(-18, -13, 2))
    cap = Part.makeBox(44, 32, 8, App.Vector(-22, -16, 64))
    slot = Part.makeBox(14, 3.2, 18, App.Vector(-12, -16.2, 28))
    style.add(doc, "Body", body, style.BODY, style.BODY_EDGE)
    style.add(doc, "Cap", cap, style.BODY, style.BODY_EDGE)
    style.add(doc, "Slot", slot, style.GREEN, style.GREEN, mode="Shaded")
    if panel is not None:
        style.add(doc, "BadPanel", panel, style.CRIMSON, style.CRIMSON, mode="Shaded")
    return doc
