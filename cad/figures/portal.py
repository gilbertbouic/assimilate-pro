"""One official kiosk. One lit slot."""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import boot

style, parts = boot.modules()
doc = style.new_document("portal")
parts.kiosk(doc)
result = style.export_plate(doc, "portal.png")
style.close_document(doc)
