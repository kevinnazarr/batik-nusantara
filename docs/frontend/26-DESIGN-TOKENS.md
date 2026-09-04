# 26. Design Tokens

Tokens are implementation-agnostic first; map them into CSS variables/Tailwind utilities.

> Source of truth: `DESIGN.md` (full Airtable DNA adoption, ADR-001).

## Color roles

Use semantic roles rather than direct hex values in component code:

| Role | Value |
|---|---|
| `background` (canvas) | `#ffffff` |
| `surface` (soft) | `#f8fafc` |
| `surface` (strong) | `#e0e2e6` |
| `surface` (dark) | `#181d26` |
| `foreground` (ink) | `#181d26` |
| `foreground` (body) | `#333840` |
| `muted` | `#41454d` |
| `border` (hairline) | `#dddddd` |
| `border` (strong) | `#9297a0` |
| `primary` (near-black) | `#181d26` |
| `primary-active` | `#0d1218` |
| `primary-foreground` | `#ffffff` |
| `link` | `#1b61c9` |
| `link-active` | `#1a3866` |
| `success` | `#006400` |
| `warning` | `#d97706` |
| `danger` | `#dc2626` |

Signature card surfaces (full-bleed brand voltage, never small accents): coral `#aa2d00`, forest `#0a2e0e`, cream `#f5e9d4` (+ peach `#fcab79`, mint `#a8d8c4`, yellow `#f4d35e`, mustard `#d9a441`).

Warning/danger hex tidak diekstrak dari DESIGN.md (known gaps) — nilai Tailwind default di atas, sesuaikan saat implementasi jika perlu.

## Typography

- Display/UI/body: Inter Display variable (substitute open-source untuk Haas Grotesk; line-height −5%).
- Display weights 400–500 only; bold (600/700) hanya legal 13.12px.
- Product pricing: weight 475, tabular numerals.
- Scale: display-xl 48/500/1.1 · display-lg 40/400/1.2 · display-md 32/400/1.2 · title-lg 24/400/1.35 · title-md 20/400/1.5 · title-sm 18/500/1.4 · label 16/500/1.4 · body 14/400/1.25 · caption 14/500/1.35 · legal 13.12/600/1.2.

## Spacing

Base unit 4px. Scale: 4, 8, 12, 16, 24, 32, 48. Section band: 96px. Card padding: 48 signature / 32 feature / 24 cream / 16 demo-grid. Max width ~1280px, 48px horizontal breathing.

## Radius

`xs` 2px (legal) · `sm` 6px (inputs) · `md` 10px (content cards) · `lg` 12px (primary CTA, signature cards) · `pill` 9999px (pricing ONLY) · `full` (circular icon buttons, avatars).

## Motion

Use short UI transitions (120-240ms), content reveals (300-600ms), and longer editorial sequences only where they add meaning. No hover states documented in DESIGN.md — Default + Active/Pressed only.
