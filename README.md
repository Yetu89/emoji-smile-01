# emoji-smile-01 — One Emoji, One Smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Yetu89/emoji-smile-01/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/Yetu89/emoji-smile-01/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on make.fun ($5 in USDC, top 10).

The program writes exactly one emoji — 🫶 Heart Hands (U+1FAF6) — to `/output/entry.txt`, with no words, no caption, and no trailing newline. Heart Hands was chosen because it reads as warm, open friendliness from any stranger: instantly universal, intentionally chosen rather than the default smiley, and free of intimacy, sarcasm, or flirtation that would read oddly from someone unknown.

## How to run

Requires Node 22 or later (stdlib only, no dependencies):

```sh
node main.ts
```

This writes `/output/entry.txt`. To write elsewhere (for local testing), set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/emoji-smile-out node main.ts
```

The program validates the entry before writing: it must be 1–8 code points, contain no whitespace, and is written with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
