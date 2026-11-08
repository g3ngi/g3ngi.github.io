# Design research & rebuild notes

## Read this

`design-references.html` — open in a browser. Self-contained, no network needed.

## What's here

| File | Contents |
|---|---|
| `design-references.html` | The report: 8 reference sites, measured |
| `raw-data.json` | Raw computed-style extraction per site |
| `screenshots/` | Full-page captures at 1440px (`g3ngi-new.png` = rebuild) |

## Method

Chrome DevTools Protocol, 1440×1000 viewport, real page load (4s settle),
then `getComputedStyle` across every visible element.

Two metrics are reported because the first one was wrong:

- **boxes %** — elements with a border on 3+ sides (a real card / container)
- **rules %** — elements with a border on 1 side (a hairline separator)

Conflating these is what made an early version of this report misleading:
it scored a single row divider the same as a 4-sided card.

## Final numbers

| site | height | boxes | rules | rounded | shadow |
|---|---|---|---|---|---|
| brittanychiang | 3,798px | 1.9% | 0% | 17.4% | 0% |
| samczsun | 5,008px | 0% | 13.4% | 0.5% | 0% |
| paco.me | 1,424px | 1.1% | 1.1% | 4.3% | 0% |
| emilkowal.ski | 1,854px | 0% | 0% | 20% | 0% |
| theori.io | 9,684px | 5% | 0.6% | 0.4% | 0% |
| wijen.dev | 11,396px | 1.1% | 3.9% | 1.1% | 0.6% |
| **g3ngi (original)** | **7,560px** | **~12%** | — | — | — |
| **g3ngi (rebuild)** | **5,305px** | **0.3%** | **16.3%** | **3.5%** | **0.3%** |
| **g3ngi (cream, current)** | **5,254px** | **0.3%** | **8.3%** | **9.8%** | — |

## Constraints followed in the rebuild

1. Sticky left rail (name, role, nav) + scrolling right column — from brittanychiang
2. Border budget under 3% — boxiness eliminated, line work instead
3. Length discipline — down from 7,560px to 5,305px
4. Plain lists for awards / repos / kit instead of card grids
5. Then revised on request: serif throughout (Newsreader + Instrument Serif),
   cream paper palette (#f7f3ea), rounded cards (12px / 20px radii)

## Caveats

- Single viewport width per measurement (1440, plus checks at 1024/768/390)
- "Rules" counts every hairline, so a table with row dividers scores high
- These sites change; re-run before trusting numbers long-term
- `leerob.com` excluded — renders client-side, nothing measurable at load


---

## Palette revision — dark blue monochrome + Keppel mint

Requested: Atlas Grotesk, and the palette from the Awwwards "Margaux Leroy"
treatment — Keppel / Gunmetal / Outer Space / Arsenic / Rhythm.

Resolved to canonical values via the color-name-list dataset:

| name | hex | role |
|---|---|---|
| Keppel | `#5FB69C` | the only bright thing — accent, CTAs, active nav |
| Gunmetal | `#536267` | dividers, quiet rules |
| Outer Space | `#314E64` | inline code, tag backgrounds |
| Arsenic | `#3B444B` | table header rules |
| Rhythm | `#767194` | tertiary / dusk — negative states, code numerals |

Derived floor (the named five are all too close together in luminance to
build a page from):

| token | hex | role |
|---|---|---|
| void | `#0B1116` | page background |
| void-2 | `#0F161C` | card |
| void-3 | `#141D24` | card hover |

Text: `#E8EDEA` primary / `#A9B6BA` body / `#6E7C82` labels.

Contrast check against `#0B1116`:

- Keppel 7.83:1 — passes AA for body, AAA for large text
- Rhythm 4.12:1 — passes AA
- Gunmetal 2.99:1 — **decorative only, never text**
- Outer Space 2.17:1 — surfaces only
- Arsenic 1.91:1 — borders only

Measured result: page renders `#0b1116` at 62%, `#0f161c` at 29%, mint at
0.6% of total pixels — the accent stays an accent.


---

## Neo-futurism — research notes and result

### What the Awwwards neo-futurism corpus actually contains

Sampled the collection and three of its sites. The movement is **light, not dark** —
this was the surprise, and the reason a dark palette was the wrong instinct.

| signal | observed |
|---|---|
| background | `#ededed` / `#f1f1f1` / `#fcfcfc` — all light greys |
| type | Inter Tight (tight, tall), PP Eiko (display serif) |
| accent | exactly one saturated signal — `#f12a2d` red, `#FF9667` orange |
| metrics | fixed mechanical units: `--nf-height: 54px`, `--nf-container-pad: 6px` |
| corners | sharp — 11 `border-radius: 0` declarations on one site |
| ornament | tracked-out words: `W e l c o m e` used as a graphic device |
| structure | 25 CSS grid declarations, 8 clip-path uses |

### What was implemented

- Light industrial ramp: `#EDEDED` page, `#F8F8F8` panel, `#FFFFFF` surface, `#E2E2E2` recess
- Single signal `#F12A2D` — used for exactly: the active nav, first-place ranks,
  the hero's surname, the progress bar, and the contact CTA
- **Sharp corners everywhere** — measured: 433 elements, 0 with any radius
- 64px mechanical grid drawn across the page body
- Clip-path corner notches on panels
- Tracked-caps ornament (`PORTFOLIO` at 0.42em) above the hero
- Hairline `gap: 1px` grids for the readout strip, repo grid and cert grid
- Mono spec-row rail (LOC / EDU / FOCUS / YEAR), like a control plate

### Measured

```
1440px  4,719px   100% sharp   0% rounded   no overflow
1024px  4,614px   ─ same ─
 768px  4,894px   ─ same ─
 390px  6,164px   ─ same ─
```

Pixel audit: `#ededed` 60%, `#ffffff` 29%, ink `#141414` 3.6%, signal red **0.6%**.
Red stays an accent rather than a wash.

Shortest build yet — 4,719px, versus 7,560px for the original.


### Revision: neo-futurism + the mint palette

The first neo-futurist pass used the corpus's own red signal (`#F12A2D`) on a
light grey. The palette requested was Keppel/Gunmetal/Outer Space/Arsenic/Rhythm,
so the signal became Keppel and the surface ramp was inverted to dark blue.

Structure is unchanged — sharp corners, mechanical grid, hairline `gap:1px`
grids, mono spec rows, clip-path notches, tracked caps. Only the colours moved.

| token | hex | contrast vs `#0C1216` | use |
|---|---|---|---|
| Keppel | `#5FB69C` | 7.77:1 AAA | the signal |
| ink-1 | `#E4EAE7` | 15.46:1 AAA | headlines |
| ink-2 | `#A7B4B8` | 8.86:1 AAA | body |
| ink-3 | `#6D7C82` | 4.36:1 AA-large | labels |
| Rhythm | `#767194` | 4.09:1 AA-large | negative, code numerals |
| Gunmetal | `#536267` | 2.97:1 decor | quiet rules |
| Outer Space | `#314E64` | 2.16:1 decor | mid surfaces |
| Arsenic | `#3B444B` | 1.90:1 decor | borders |

Surfaces: page `#0C1216`, panel `#131A1F`, surface `#101720`, recess `#1B242B`.

Measured: page 60%, surface 29%, ink 0.9%, **mint 0.7% of total pixels**.
Mint concentrates at the hero (8.6% in that band), the CTA, the progress bar and
the 1st-place ranks — it stays a signal, not a wash.


---

## Landing page — rail removed

The sticky left rail (avatar, name, role, nav, socials) was removed entirely.
Its content became a full-viewport landing page: name, portrait, slogan.

### Reverse-engineered from reference_1 copy.jpg (right panel, 464x1321)

Measured structure, top to bottom:

| band | y | height | colour | reading |
|---|---|---|---|---|
| 1 | 46–301 | 255px | `#CC4848` red at **31% fill inside its bbox** | filled display type / block |
| 2 | 375–413 | 38px | `#6C6C6C` grey | small mono strip |
| 3 | 487–820 | 333px | `#CCB490` bone | large body text |
| 4 | 853–1259 | 406px | `#CCB490` bone | longer text block |

Other signals: accent coverage **5.8%** of panel, mean luminance 70, dark<60 at
50%, content blocks separated by roughly 70px gaps, panel is portrait (1:2.85).

### Built to match

- Name in accent red at `clamp(2.9rem, 9.4vw, 7.2rem)` — huge, tight tracking
- Portrait as a large soft-masked plate (radial mask, accent glow at top)
- Slogan in bone, accent on the key phrase
- Meta row in mono: role / city / school + year
- Grain + spotlight + counters retained

### Measured result

```
1440px  landing 1000px = exactly 1 viewport, name 115px, photo 380px
1024px  landing 1000px,  name 96px
 768px  landing 1000px,  name 72px
 390px  landing 1000px,  name 46px
```

Mean luminance 66.5 vs reference 70.1. Dark<60: 51.6% vs 50.4%.

Accent coverage is lower than the reference (1.17% vs 5.83%) — the reference
uses an accent block, mine only uses accent type.


---

## Industrial / Japanese sci-fi treatment

Palette deliberately unchanged — `#1A1F1B` / `#D6C7A6` / `#D95E62` / `#5A8A59`.
Only the *vocabulary* changed. Tonal match held: mean luminance 67.6 vs the
reference's 73.7, dark<60 at 48.7% vs 47.7%.

### What was added

| element | detail |
|---|---|
| Panel frames | `.plate` — 1px frame at 16% bone + L-shaped corner registration ticks in accent |
| HUD section bars | number + English + kanji, hairline fill, small indicator dots |
| Kanji gutter labels | 経歴 受賞 案件 技術 学歴 装備 試験 連絡 on each section |
| Vertical writing | `writing-mode: vertical-rl` gutters at ≥1100px: 技術仕様 / 記録 / 二〇二六 / 逆解析 |
| Name block | 氏名 set vertically beside the name |
| Barcode | 16-bar generated rule in the landing top strip |
| Photo frame | corner ticks + scanline overlay (`repeating-linear-gradient` at 1px/3px) |
| Entrance | `clip-path: inset()` wipe instead of a fade |
| Detail marks | `▸` on dates, `▪` on case field labels, dotted-entry rules, tick marks on kit rows |
| Footer | closed with 終 |

### Verified

- CJK resolves: `Hiragino Kaku Gothic ProN` (13px glyphs measured 39x16 — not tofu)
- `writing-mode: vertical-rl` confirmed on gutters, auto-hidden below 1100px
- 4 corner ticks, 6 `.plate` frames, clip-path reveal active
- Case toggles, TP-01 solve, print all still work
- 7 print pages, kanji present in the PDF
