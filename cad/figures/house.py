"""Housing plate: a small house, a lawful door, and a fee-coin that does not fit the lock."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import importlib

import style

importlib.reload(style)

doc = style.new_document("house")

body = Part.makeBox(78, 52, 40, App.Vector(-39, -26, 2))
roof = Part.Face(
    Part.makePolygon(
        [
            App.Vector(-48, -32, 42),
            App.Vector(48, -32, 42),
            App.Vector(0, -32, 74),
            App.Vector(-48, -32, 42),
        ]
    )
).extrude(App.Vector(0, 64, 0))
# The isometric camera sits on -Y, so the readable face is the near (-Y) side.
door = Part.makeBox(20, 4, 28, App.Vector(-10, -30, 2))
slot = Part.makeBox(5, 1.6, 7, App.Vector(4, -31.4, 15))
coin = Part.makeCylinder(9, 3.4, App.Vector(26, -50, 2))
ground = Part.makeBox(112, 108, 2, App.Vector(-52, -72, 0))

style.add(doc, "Ground", ground, style.GROUND, style.GROUND, mode="Shaded")
style.add(doc, "Body", body, style.BODY, style.BODY_EDGE)
style.add(doc, "Roof", roof, style.BODY, style.BODY_EDGE)
style.add(doc, "Door", door, style.GREEN, style.GREEN, mode="Shaded")
style.add(doc, "Slot", slot, style.SLOT, style.BODY_EDGE)
style.add(doc, "Coin", coin, style.AMBER, style.AMBER, mode="Shaded")

result = style.export_plate(doc, "house.png")
style.close_document(doc)
