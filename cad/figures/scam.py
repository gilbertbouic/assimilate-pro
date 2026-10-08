"""The same kiosk with one crimson panel, and a gift-card that does not seat."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import boot

style, parts = boot.modules()
doc = style.new_document("scam")
panel = Part.makeBox(12, 2.6, 32, App.Vector(4, -15.6, 20))
parts.kiosk(doc, panel=panel)
card = Part.makeBox(22, 14, 2.6, App.Vector(2, -42, 2))
style.add(doc, "GiftCard", card, style.AMBER, style.AMBER, mode="Shaded")
result = style.export_plate(doc, "scam.png")
style.close_document(doc)
