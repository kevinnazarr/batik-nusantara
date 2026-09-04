# 30. PostgreSQL Migration Specification

## Conventions

- UUID/ULID identifiers are preferred if the project values non-sequential public IDs; internal integer IDs are acceptable when simplicity wins. Choose one and use it consistently.
- Timestamps in UTC.
- Money stored as integer minor units (`*_amount`) in the smallest currency unit, or `numeric(12,2)` consistently. Recommendation: integer IDR whole rupiah amounts for this project.
- Use `jsonb` only for snapshots/provider payloads, not core relational data.
- Foreign keys explicitly define delete behavior.
- Slugs and business keys have unique indexes.

## Required indexes

- `products.slug`
- `products.status, category_id`
- `product_variants.sku`
- `orders.order_number`
- `orders.user_id, created_at`
- `payments.transaction_id`
- `shipments.tracking_number`
- `promotion_usages.promotion_id, order_id`

## Transaction boundaries

Order creation, stock reservation/decrement, and order-item creation must be atomic. Webhook processing must use a transaction around state updates and idempotency recording.
