# 27. Motion & Interaction Specification

## Principles

1. Motion explains hierarchy or feedback; it is not decoration by default.
2. First interaction should remain usable if animation is disabled.
3. Respect `prefers-reduced-motion`.
4. Avoid layout-thrashing animations; prefer transform/opacity.

## Libraries

- GSAP: scroll-driven, staged hero, image reveals, complex timelines.
- Framer Motion: component state, dialogs, drawers, micro-interactions.
- Lenis: smooth scrolling where it does not conflict with accessibility or browser expectations.

## Signature interactions

- Home hero: restrained entrance sequence.
- Product cards: subtle image/metadata reveal.
- Product page: image transition when selecting variant.
- Cart drawer: slide/fade with immediate focus management.
- Order timeline: state reveal only when status changes.

No animation may block checkout, keyboard navigation, or content access.
