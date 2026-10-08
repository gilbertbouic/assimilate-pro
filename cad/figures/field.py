"""Five stations in a row: Gate, Brief, Drill, Scene, Ledger."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import boot

style, parts = boot.modules()
doc = style.new_document("field")
parts.plinth(doc, "Plinth", -120, -24, 240, 48)

stations = (-88, -44, 0, 44, 88)

# Gate: two posts and a lintel.
left, right = stations[0] - 8, stations[0] + 8
for name, x in (("GateL", left), ("GateR", right)):
    style.add(doc, name, Part.makeBox(4, 4, 28, App.Vector(x, -2, 2)), style.BODY, style.BODY_EDGE)
style.add(doc, "Lintel", Part.makeBox(24, 4, 4, App.Vector(stations[0] - 12, -2, 30)), style.GREEN, style.GREEN, mode="Shaded")

# Brief: a board on a stand.
style.add(doc, "BriefPost", Part.makeBox(4, 4, 16, App.Vector(stations[1] - 2, -2, 2)), style.BODY, style.BODY_EDGE)
style.add(doc, "Board", Part.makeBox(18, 2.4, 16, App.Vector(stations[1] - 9, -4, 16)), style.PAPER, style.PAPER, mode="Shaded")

# Drill: a lawful block and a rejected block.
style.add(doc, "Good", Part.makeBox(8, 8, 8, App.Vector(stations[2] - 12, -4, 2)), style.GREEN, style.GREEN, mode="Shaded")
style.add(doc, "Bad", Part.makeBox(8, 8, 8, App.Vector(stations[2] + 4, -4, 2)), style.CRIMSON, style.CRIMSON, mode="Shaded")

# Scene: a small house.
hx = stations[3]
style.add(doc, "Home", Part.makeBox(16, 12, 12, App.Vector(hx - 8, -6, 2)), style.BODY, style.BODY_EDGE)
roof = Part.Face(
    Part.makePolygon(
        [
            App.Vector(hx - 11, -8, 14),
            App.Vector(hx + 11, -8, 14),
            App.Vector(hx, -8, 24),
            App.Vector(hx - 11, -8, 14),
        ]
    )
).extrude(App.Vector(0, 16, 0))
style.add(doc, "HomeRoof", roof, style.BODY, style.BODY_EDGE)

# Ledger: a clip of sheets.
for index in range(3):
    sheet = Part.makeBox(14, 18, 1, App.Vector(stations[4] - 7 + index * 1.2, -9, 2 + index * 1.2))
    style.add(doc, "Page%d" % index, sheet, style.PAPER, style.PAPER, mode="Shaded")
style.add(doc, "LedgerClip", Part.makeBox(12, 4, 2, App.Vector(stations[4] - 5, -6, 6)), style.BODY, style.BODY_EDGE)

result = style.export_plate(doc, "field.png", mode="row")
style.close_document(doc)
