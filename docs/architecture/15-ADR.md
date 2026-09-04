# 15 — Architecture Decision Records

## ADR-001 — Next.js over React SPA only

**Decision:** Gunakan Next.js sebagai framework React.

**Reason:** SEO, rendering strategy, routing, metadata, performance, dan portfolio value lebih cocok untuk ecommerce.

**Trade-off:** deployment dan data-fetching strategy sedikit lebih kompleks daripada Vite SPA.

## ADR-002 — Laravel as REST API

**Decision:** Laravel menjadi source of truth dan backend API.

**Reason:** kuat untuk auth, validation, transactions, queues, jobs, integrations, dan admin business logic.

## ADR-003 — PostgreSQL

**Decision:** PostgreSQL.

**Reason:** relational integrity kuat, JSONB untuk snapshot/provider payload, constraint/indexing matang.

## ADR-004 — Guest checkout first-class

**Decision:** customer tidak wajib login.

**Reason:** mengurangi friction dan sesuai model toko retail.

## ADR-005 — Biteship abstraction for shipping

**Decision:** integrasikan melalui shipping provider abstraction dan gunakan Biteship sebagai adapter pertama.

**Reason:** multi-courier, rate, shipment, tracking, webhook tanpa coupling langsung ke satu kurir.

## ADR-006 — Cloudflare R2

**Decision:** R2 sebagai S3-compatible object storage.

**Reason:** cocok untuk media produk dan dapat dipadukan dengan CDN/domain.

## ADR-007 — Modular monolith

**Decision:** satu Laravel app dengan module/domain boundaries.

**Reason:** kebutuhan UMKM belum membutuhkan distributed system; kompleksitas operasional microservices tidak justified.

## ADR-008 — Snapshot order data

**Decision:** simpan product/customer/address transaction snapshot di order.

**Reason:** histori transaksi harus stabil meskipun master data berubah.

## ADR-009 — Separate order/payment/shipment states

**Decision:** state machine terpisah.

**Reason:** status domain tidak identik dan perlu diintegrasikan dengan provider.
