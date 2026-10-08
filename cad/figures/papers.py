"""Three sheets on a clip. A paper trail, not a verdict."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import boot

style, parts = boot.modules()
doc = style.new_document("papers")
parts.plinth(doc, "Plinth", -40, -46, 80, 78)
for index, (angle, dx, dy) in enumerate(((-12, -6, -4), (0, 0, 0), (11, 6, 2))):
    sheet = Part.makeBox(34, 46, 1.2, App.Vector(-17, -23, 0))
    sheet.rotate(App.Vector(0, 0, 0), App.Vector(0, 0, 1), angle)
    sheet.translate(App.Vector(dx, dy, 2 + index * 1.5))
    style.add(doc, "Sheet%d" % index, sheet, style.PAPER, style.PAPER, mode="Shaded")
clip = Part.makeBox(22, 8, 3, App.Vector(-11, -16, 7))
style.add(doc, "Clip", clip, style.BODY, style.BODY_EDGE)
result = style.export_plate(doc, "papers.png")
style.close_document(doc)
