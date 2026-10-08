"""A bench, a written plate, and a cash wedge left off the plate."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import boot

style, parts = boot.modules()
doc = style.new_document("work")
parts.plinth(doc, "Plinth", -48, -58, 104, 84)
base = Part.makeBox(62, 30, 22, App.Vector(-34, -8, 2))
top = Part.makeBox(74, 38, 4, App.Vector(-40, -16, 24))
contract = Part.makeBox(26, 2.2, 18, App.Vector(-14, -18.2, 28))
style.add(doc, "Base", base, style.BODY, style.BODY_EDGE)
style.add(doc, "Top", top, style.BODY, style.BODY_EDGE)
style.add(doc, "Contract", contract, style.PAPER, style.PAPER, mode="Shaded")
for index, height in enumerate((32, 36, 40)):
    width = 16 if index < 2 else 10
    line = Part.makeBox(width, 1.1, 1.3, App.Vector(-9, -19.3, height))
    style.add(doc, "Line%d" % index, line, style.BODY, style.BODY, mode="Shaded")
cash = Part.makeBox(18, 10, 4, App.Vector(18, -46, 2))
style.add(doc, "Cash", cash, style.AMBER, style.AMBER, mode="Shaded")
result = style.export_plate(doc, "work.png")
style.close_document(doc)
