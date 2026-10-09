# Route Map - visual system

Used by the website and the Android app (the app shows the same pages).

## Idea

Settling in is a route with five stops. Each stop has one colour. Finished stops get a tick. There is one main button: **Continue**.

## Colours

| Name | Hex | Use |
|---|---|---|
| Charcoal | `#1F2328` | Top bar, footer, text, Android status and navigation bars, splash |
| White | `#FFFFFF` | Page background |
| Light grey | `#F4F5F2` | Sign panel, hint boxes |
| Blue | `#0057B8` | Stop 1 - Papers and ID; links; focus ring |
| Green | `#00875A` | Stop 2 - A place to live; "Do" and right answers |
| Purple | `#6A4C93` | Stop 3 - Work and language |
| Orange | `#E07A00` | Stop 4 - Doctor and bank (lines and fills only) |
| Red | `#D62828` | Stop 5 - Scams to avoid; "Don't" and wrong answers |

Orange is too light for text on white. Use `#8F4E00` for orange text, and charcoal text on an orange fill.

## Type

- Lexend (variable, weights 300-700), self-hosted in `fonts/lexend-variable.woff2` (Latin subset, SIL Open Font License, see `fonts/OFL.txt`). No font is loaded from the internet.
- Base size 18px. The **A+** button raises it to 21px.
- Line height 1.55. Short lines. Weight 600 for titles.

## Shape and touch

- Buttons and rows are at least 52px high; small controls at least 44px.
- Radius 8-12px. Borders instead of shadows.
- Every control has a visible 3px focus ring.

## Layout

- Phone: one column. Sign panel, then the route, then Continue, then the open stop.
- Wide screens (960px and up): the route on the left, the open stop on the right.
