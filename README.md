# Assimilate Pro

A picture guide for a new home in the West.

| | |
|---|---|
| **Site** | https://gilbertbouic.github.io/assimilate-pro/ |
| **Code** | https://github.com/gilbertbouic/assimilate-pro |
| **Phone app** | [Releases](https://github.com/gilbertbouic/assimilate-pro/releases) |

## How to use it

1. Pick who you are.
2. Pick the place.
3. Read the picture and the short lines.
4. Answer the quiz. The right answer is 100. The wrong answer is 30.
5. Mark Do and Don't.

Your score stays on the phone.

SHA-256 for Assimilate-Pro-2.3.1.apk

`1b0ea6afb1fed64549387edcb9e545771298512620d017fce78ccefba094e212`

## Pictures

The pictures live in `assets/figures/`. The same file is used on a computer and on a phone.

## Android app

The phone app is the same pages, saved inside the app so it works offline.

```bash
./scripts/sync-web-to-android.sh
./gradlew assembleRelease
```

## License

See [LICENSE](LICENSE).
