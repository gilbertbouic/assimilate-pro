"""A counter with a cross, and a side hatch for emergencies only."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import boot

style, parts = boot.modules()
doc = style.new_document("clinic")
parts.plinth(doc, "Plinth", -52, -48, 118, 74)
counter = Part.makeBox(68, 28, 26, App.Vector(-46, -10, 2))
top = Part.makeBox(74, 34, 4, App.Vector(-50, -16, 28))
upright = Part.makeBox(5, 2.4, 20, App.Vector(-22, -18.4, 34))
bar = Part.makeBox(16, 2.4, 5, App.Vector(-27.5, -18.4, 41))
hatch = Part.makeBox(18, 16, 24, App.Vector(30, -12, 2))
opening = Part.makeBox(10, 3, 14, App.Vector(34, -15, 6))
style.add(doc, "Counter", counter, style.BODY, style.BODY_EDGE)
style.add(doc, "Top", top, style.BODY, style.BODY_EDGE)
style.add(doc, "CrossUp", upright, style.GREEN, style.GREEN, mode="Shaded")
style.add(doc, "CrossBar", bar, style.GREEN, style.GREEN, mode="Shaded")
style.add(doc, "Hatch", hatch, style.AMBER, style.AMBER, mode="Shaded")
style.add(doc, "Opening", opening, style.SLOT, style.SLOT, mode="Shaded")
result = style.export_plate(doc, "clinic.png")
style.close_document(doc)
