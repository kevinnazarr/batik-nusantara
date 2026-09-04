# 24. Responsive & Accessibility Specification

## Breakpoints

Use Tailwind defaults as the starting point; design primarily around three behavior bands:

- Mobile: < 640px
- Tablet: 640-1023px
- Desktop: >= 1024px

Avoid designing every component for exact pixel widths. Components should fluidly adapt between breakpoints.

## Responsive behavior

- Product grids: 2 columns mobile, 2-3 tablet, 4 desktop.
- Product detail: stacked mobile, split layout desktop.
- Filter controls: bottom sheet/drawer mobile, sidebar desktop.
- Admin tables: horizontal scroll or card transformation on narrow screens.
- Checkout: stacked mobile, two-column summary layout desktop.

## Accessibility

- Keyboard navigation for every interactive control.
- Visible focus state.
- Semantic headings.
- Form labels and error associations.
- Alt text for product and editorial imagery.
- Reduced-motion mode for animation-heavy sections.
- Contrast must meet WCAG AA targets.
