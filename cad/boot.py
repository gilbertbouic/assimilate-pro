"""Reload figure helpers inside the long-lived VibeCAD process."""

import importlib
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

import parts
import style


def modules():
    return importlib.reload(style), importlib.reload(parts)
