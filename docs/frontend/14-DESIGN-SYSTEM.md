# 14 — Design System Brief

> Sumber kebenaran: `DESIGN.md` (DNA Airtable editorial) — diadopsi penuh via ADR-001. Brief ini merangkum penerapannya untuk Batik-Nusantara.

## Brand direction

Batik-Nusantara sebaiknya terasa:

- refined;
- editorial;
- contemporary;
- premium tetapi tidak eksklusif secara berlebihan.

Look: white canvas + dark ink type + whitespace generus, rasa magazine editorial. Tanpa gradient/mesh/atmosphere pada hero. Brand voltage datang dari signature cards full-bleed yang memecah scroll panjang.

Hindari tampilan "template toko online" dan juga museum-like yang terlalu formal.

## Visual hierarchy

Prioritas:

1. Product photography.
2. Product name/price.
3. Clear CTA.
4. Supporting cultural story.
5. Secondary navigation.

## Typography

- Family: Haas Grotesk / Haas Grotesk Display (berlisensi). Substitusi open-source: **Inter Display variable** (line-height −5%).
- Display weights **400–500 saja — jangan bold** (600/700 hanya untuk legal 13.12px).
- Satu family saja — bukan pairing serif+sans.
- Product pricing: weight 475, tabular numerals.
- Jaga readability untuk customer mobile.

## Color strategy

- Primary = ink near-black `#181d26`. Near-black adalah primary, bukan warna aksen.
- Canvas putih `#ffffff`, surface lembut `#f8fafc` / `#e0e2e6`.
- Link blue `#1b61c9` khusus text link — **BUKAN warna tombol primary** (kesalahan umum).
- Signature cards (brand voltage, full-bleed saja): coral `#aa2d00`, forest `#0a2e0e`, cream `#f5e9d4` (+ peach/mint/yellow/mustard pastel).
- Section rhythm: putih → signature card → putih → cream → dark → putih. Jangan dua surface sama berturut-turut.

## Spacing

- Base 4px; scale 4/8/12/16/24/32/48.
- Section band rhythm **96px**.
- Max width ~1280px centered, breathing 48px horizontal.

## Components

Core components:

- Button.
- Link.
- Input.
- Select.
- Checkbox.
- Radio.
- Badge.
- Dialog.
- Drawer.
- Toast.
- ProductCard.
- ProductGallery.
- Price.
- VariantSelector.
- QuantitySelector.
- CartItem.
- OrderStatus.
- Breadcrumb.
- Pagination.
- EmptyState.
- ErrorState.
- Skeleton.

Konvensi tombol: satu primary (near-black) per viewport; secondary = white outline hairline; pill radius **khusus pricing**; tombol pricing = white pill. Radius: xs 2px (legal), sm 6px (input), md 10px (content cards), lg 12px (CTA/signature cards).

## Motion system

### GSAP

- hero reveal;
- page section reveal;
- image/product storytelling;
- scroll-linked experience;
- marquee hanya bila benar-benar membantu.

### Framer Motion

- modal/drawer;
- micro-interactions;
- layout transitions;
- feedback states.

### Lenis

- smooth scrolling pada public marketing/storefront pages;
- jangan menghambat focus/keyboard/native expectations.

## Motion constraints

- Tidak memakai motion sebagai pengganti information hierarchy.
- Respect `prefers-reduced-motion`.
- Avoid layout thrashing.
- Animate transform/opacity bila memungkinkan.
- Critical CTA tidak menunggu animation selesai.

## Responsive breakpoints

Gunakan Tailwind defaults/semantic aliases yang konsisten. Mobile checkout menjadi baseline. Touch target: tombol min 48x48, input 44px.

## Accessibility checklist

- Focus visible.
- Skip link.
- Modal focus trap.
- Alt text.
- Button/anchor semantics.
- Contrast.
- Reduced motion.
