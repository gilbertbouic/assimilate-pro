# Picture guide — visual system

Shared by the site and the phone app.

## Principle

The picture comes first. Cyan marks the path. Green means yes. Amber means slow down. Red means no. Body text is large and plain.

## Color

| Token | Hex | Role |
|---|---|---|
| void | `#08080c` | Ground, splash, status bar, plate background |
| surface | `#101018` | Panels |
| raised | `#16161f` | Chips, bids, nodes |
| line | `#2a3140` | Resting borders |
| paper | `#e7eef2` | Body text |
| mute | `#8b97a3` | Captions |
| cyan | `#00e5ff` | Selection, official door, kickers |
| green | `#3dff9a` | Lawful part, accepted bid, Do |
| amber | `#e07030` | Caution, fee-before-seen, waiting |
| crimson | `#ff3b4e` | Rejected bid, Don’t, false panel |

Retired: `#4A90E2`, `#1a56a8`, `#0f172a`, Material teal, launcher `#F4F4F2`, and rose as decoration. Rose is not a signal.

Cyan is never body copy and never a success color. Green is never a link color.

## Type

- Orbitron 700 for titles, 500 for kickers, stage chips, and the 100/30 stamp. Kicker tracking `0.18em`, uppercase. Titles tracking `0.04em`.
- Share Tech Mono for briefs, bids, explanations, and ledger lines. 16px explanations, 14px captions, line-height 1.45.
- Do not set explanations in Orbitron.

## Shape

- Panel radius 12px. Control radius 8px. The old 24px radius is retired.
- Elevation is a 1px border at 26% cyan plus a 40px black shadow at 45%. No Material elevation.
- Touch target 44px. Phone is one column: plate, then action.

## Plates

Orthographic three-quarter on void, readable face toward −Y, ground plane always. 1600×1000. No type in the PNG. At most four materials. Green marks the lawful part, crimson the false part, amber the trap on the ground. `field.png` is the only multi-object plate, and only on the boot card.

## Motion

Grid drift is ambient. State changes take 160ms, no bounce, no particles. `prefers-reduced-motion` freezes the grid and the node pulse and keeps the color change.

## Shell

Android `windowBackground`, splash, status bar, and navigation bar are void. `colorPrimary` is cyan, `colorOnPrimary` is void. Web manifest `theme_color` and `background_color` are void.
