# 14 — Design System Brief

## Brand direction

Batik-Nusantara sebaiknya terasa:

- refined;
- authentic;
- warm;
- contemporary;
- premium tetapi tidak eksklusif secara berlebihan.

Hindari tampilan "template toko online" dan juga hindari museum-like yang terlalu formal.

## Visual hierarchy

Prioritas:

1. Product photography.
2. Product name/price.
3. Clear CTA.
4. Supporting cultural story.
5. Secondary navigation.

## Typography

Gunakan pairing maksimal dua family:

- display serif untuk heading/story;
- sans-serif untuk UI/body.

Jaga readability untuk customer mobile.

## Color strategy

Gunakan neutral warm base + one strong brand accent yang terinspirasi material/dye, bukan banyak warna dekoratif.

## Spacing

Gunakan token konsisten berbasis 4/8 px rhythm.

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

Gunakan Tailwind defaults/semantic aliases yang konsisten. Mobile checkout menjadi baseline.

## Accessibility checklist

- Focus visible.
- Skip link.
- Modal focus trap.
- Alt text.
- Button/anchor semantics.
- Contrast.
- Reduced motion.
