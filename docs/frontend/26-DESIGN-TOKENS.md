# 26. Design Tokens

Tokens are implementation-agnostic first; map them into CSS variables/Tailwind utilities.

## Color roles

Use semantic roles rather than direct hex values in component code:

- `background`
- `surface`
- `foreground`
- `muted`
- `border`
- `primary`
- `primary-foreground`
- `accent`
- `success`
- `warning`
- `danger`

Brand palette should evoke Indonesian textile craft without making every surface brown/gold. Reserve strong accent color for action and cultural highlights.

## Typography

- Display: editorial serif or high-character display face.
- UI/body: highly legible sans-serif.
- Product pricing and operational tables use tabular numerals.

## Spacing

Base spacing unit: 4px. Prefer a limited scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120.

## Radius

Use a restrained system: `sm`, `md`, `lg`, `pill`. Avoid excessive rounded UI; product/editorial presentation should feel premium.

## Motion

Use short UI transitions (120-240ms), content reveals (300-600ms), and longer editorial sequences only where they add meaning.
