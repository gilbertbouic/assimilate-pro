"""Three posts and a rope. The last post is the lawful turn."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import FreeCAD as App
import Part

import boot

style, parts = boot.modules()
doc = style.new_document("queue")
parts.plinth(doc, "Plinth", -52, -28, 104, 56)
for index, x in enumerate((-30, 0, 30)):
    post = Part.makeCylinder(3.4, 34, App.Vector(x, 0, 2))
    color = style.GREEN if index == 2 else style.BODY
    edge = style.GREEN if index == 2 else style.BODY_EDGE
    style.add(doc, "Post%d" % index, post, color, edge)
rope = Part.makeBox(66, 2.2, 2.2, App.Vector(-33, -1.1, 22))
style.add(doc, "Rope", rope, style.AMBER, style.AMBER, mode="Shaded")
result = style.export_plate(doc, "queue.png")
style.close_document(doc)
