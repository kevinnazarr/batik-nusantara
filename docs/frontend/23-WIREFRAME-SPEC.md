# 23. Wireframe Specification

## Global layout

- Max content width: 1200-1280px.
- Desktop gutters: 32px minimum.
- Tablet gutters: 24px.
- Mobile gutters: 16px.
- Header has compact and expanded variants.
- Footer contains catalog links, customer service, policies, and social links.

## Home

Order: announcement bar → header → hero → featured categories → featured products → batik story/editorial → promotional banner → trust/service points → footer.

Hero CTA should drive directly to a curated collection, not a generic "Learn more" destination.

## Product detail

Desktop: gallery left, purchase panel right. Mobile: gallery → title/price → variant selector → stock state → add-to-cart CTA → description → shipping estimate → story/context → related products.

Primary CTA remains visible or easily reachable on mobile.

## Cart

Items → quantity controls → subtotal → promo code → shipping estimate → total → checkout CTA. Empty cart should guide back to shop.

## Checkout

Single-page or short multi-step flow with clear progress. Guest path is primary. Logged-in users can select saved addresses. Payment should not be exposed until address and shipping are valid.

## Admin product editor

Use sections/tabs: General, Media, Options & Variants, Inventory, SEO, Publish. Autosave is not required for MVP; explicit Save Draft/Publish is safer.
