# 03 — User Stories & Acceptance Criteria

## Epic A — Discovery

### US-A01 — Browse catalog

**Sebagai** customer, **saya ingin** melihat daftar produk dan category agar dapat menemukan barang yang relevan.

Acceptance:

- List memiliki pagination/infinite strategy yang konsisten.
- Product card menampilkan image, name, price, badge bila ada.
- Category dapat membuka product listing terkait.

### US-A02 — Search product

**Sebagai** customer, **saya ingin** mencari produk berdasarkan nama/keyword.

Acceptance:

- Search mengembalikan hasil relevan.
- Empty state jelas.
- Query dapat diproses aman melalui API.

### US-A03 — View product detail

Acceptance:

- Gallery tampil dengan baik.
- Variant wajib dipilih jika product memiliki variant wajib.
- Harga, stok, SKU/attribute relevan ditampilkan.
- Add to cart tidak dapat melampaui stock.

## Epic B — Cart & Checkout

### US-B01 — Guest checkout

Customer dapat menyelesaikan pembelian tanpa membuat akun.

Acceptance:

- Checkout tidak memaksa login.
- Guest mengisi contact + shipping address.
- Guest dapat memilih shipping service.
- Guest dapat membayar.
- Guest mendapat secure order access/tracking.

### US-B02 — Authenticated checkout

Customer login dapat menggunakan alamat tersimpan.

Acceptance:

- Default address dapat digunakan.
- Order tertaut ke user.
- Order muncul di order history.

### US-B03 — Apply coupon

Acceptance:

- Coupon tervalidasi di backend.
- Minimum purchase, expiry, usage limit diperiksa.
- Discount tidak dapat dimanipulasi dari frontend.

## Epic C — Account

### US-C01 — Register/login email

Acceptance:

- Email unik.
- Password disimpan dalam hash aman.
- Verifikasi email mendukung flow production.

### US-C02 — Google login

Acceptance:

- OAuth callback diverifikasi.
- User existing dapat di-link ke identity yang benar.
- Tidak membuat duplicate account secara sembarang.

### US-C03 — Address book

Acceptance:

- Create/edit/delete.
- Satu default address per user.

## Epic D — Order

### US-D01 — Track order

Acceptance:

- Guest menggunakan order number + secure token.
- Customer authenticated dapat mengakses dari account.
- Payment dan shipment status tidak tercampur.

## Epic E — Admin

### US-E01 — Manage products

Acceptance:

- CRUD.
- Draft/active/archived.
- Gallery.
- Variants/SKU.
- Pricing.
- Weight.

### US-E02 — Manage stock

Acceptance:

- Admin dapat melihat sellable stock.
- Movement dicatat.
- Adjustment memerlukan alasan.

### US-E03 — Process order

Acceptance:

- Admin melihat payment status.
- Admin memproses/packing/shipping.
- Shipment dapat dibuat.
- Tracking number terlihat.

### US-E04 — Manage content

Acceptance:

- Admin dapat membuat/edit/publish story.
- Story dapat terkait dengan product.

## Epic F — Integrations

### US-F01 — Midtrans webhook

Acceptance:

- Signature/notification diverifikasi.
- Event idempotent.
- Payment state diperbarui hanya melalui server logic.

### US-F02 — Shipping webhook

Acceptance:

- Tracking/status provider dipetakan ke internal state.
- Duplicate event tidak menimbulkan duplicate side effect.
