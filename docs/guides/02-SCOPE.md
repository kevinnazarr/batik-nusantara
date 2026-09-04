# 02 — Scope & Feature Strategy

## In scope: MVP

### Commerce

- Catalog, category, search, filters.
- Product detail dan variants.
- Cart guest/authenticated.
- Guest checkout.
- Customer account.
- Address book.
- Shipping calculation.
- Midtrans payment.
- Order lifecycle.
- Tracking.

### Admin

- Dashboard.
- Catalog management.
- Variant/SKU.
- Inventory.
- Order management.
- Customers.
- Promotions basic.
- Banners.
- Stories/content.
- Audit log.

### Platform

- Google OAuth.
- Cloudflare R2.
- Redis queue/cache.
- Docker.
- CI/CD.
- Backup.
- Security baseline.
- Logging.

## MVP+

- Wishlist.
- Product reviews.
- Recently viewed.
- Abandoned cart analytics.
- Advanced reporting.
- Email marketing segmentation.

## Out of scope initially

- Marketplace multi-vendor.
- Loyalty points.
- Affiliate program.
- Referral engine.
- Live shopping.
- Chat real-time.
- Multi-warehouse.
- Subscription.
- Gift card.
- Complex tax engine.
- AI recommendation engine.

## Scope decision rule

Sebuah fitur hanya masuk MVP jika minimal memenuhi satu dari tiga kondisi:

1. Dibutuhkan agar transaksi inti berjalan.
2. Dibutuhkan agar admin dapat mengoperasikan toko.
3. Memberikan bukti kompetensi teknis yang relevan dengan tujuan portfolio.

Jika tidak memenuhi, fitur diprioritaskan setelah MVP.
