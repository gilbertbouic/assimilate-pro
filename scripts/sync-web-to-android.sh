#!/usr/bin/env bash
# Copy canonical website content into the Android WebView assets package.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="$ROOT/app/src/main/assets"

mkdir -p "$ASSETS/scripts/core" "$ASSETS/scripts/regions" "$ASSETS/scripts/scenarios" "$ASSETS/styles"

cp -f "$ROOT/index.html" "$ASSETS/index.html"
cp -f "$ROOT/PRIVACY.md" "$ASSETS/PRIVACY.md"
cp -f "$ROOT/styles/"*.css "$ASSETS/styles/"
cp -f "$ROOT/scripts/app.js" "$ASSETS/scripts/"
cp -f "$ROOT/scripts/i18n.js" "$ASSETS/scripts/"
cp -f "$ROOT/scripts/navigation.js" "$ASSETS/scripts/"
cp -f "$ROOT/scripts/interactive.js" "$ASSETS/scripts/"
cp -f "$ROOT/scripts/core/"*.js "$ASSETS/scripts/core/"
cp -f "$ROOT/scripts/regions/"*.js "$ASSETS/scripts/regions/"
cp -f "$ROOT/scripts/scenarios/"*.js "$ASSETS/scripts/scenarios/"

# Service worker is not required inside file:// WebView; keep optional copy
cp -f "$ROOT/sw.js" "$ASSETS/scripts/sw.js" 2>/dev/null || true

echo "Synced website → $ASSETS"
