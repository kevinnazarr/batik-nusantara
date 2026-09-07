# Proto — Serat Batik Atelier (32 halaman)

Semua halaman adalah **1 file HTML self-contained** (HTML+CSS+JS inline), style persis `proto` awal — mountain-slate #193741, honey-gold #eac486, Mulish + Playfair Display. Buka langsung di browser tanpa build.

## Struktur

- **Flat (32):** `proto/*.html` — untuk preview cepat & link absolut
- **`proto/user/` (19):** semua customer-facing = storefront + auth + account
  - `index.html` (Home `/`), `shop.html` (`/shop`), `category.html` (`/category/[slug]`), `product.html` (`/product/[slug]`), `search.html`, `cart.html`, `checkout.html`, `order-tracking.html` (`/order/[orderNumber]`), `order-success.html`, `stories.html`, `story-detail.html`, `login.html`, `register.html`, `forgot-password.html`, `account.html`, `account-orders.html`, `account-order-detail.html`, `account-addresses.html`, `account-wishlist.html`
- **`proto/admin/` (13):** `admin.html` (`/admin`), `admin-orders.html`, `admin-order-detail.html`, `admin-products.html`, `admin-product-create.html`, `admin-product-edit.html`, `admin-categories.html`, `admin-inventory.html`, `admin-customers.html`, `admin-promotions.html`, `admin-banners.html`, `admin-stories.html`, `admin-settings.html`

## Duplikasi `apps/web`

Setiap `apps/web/src/app/**/prototype.html` (32 file) diduplikasi ke `proto/` flat + `proto/user|admin/` — jadi ada di **dua tempat sinkron**: `apps/web` untuk referensi Next.js, `proto` untuk showcase. Total `proto` = 32 flat + 19 user + 13 admin = 64 file (duplikat terorganisir).

## Cara buka

```bash
open proto/index.html
open proto/user/checkout.html
open proto/admin/admin-products.html
```

Semua interaktif: drawer, wishlist/cart badge (localStorage), toast, variant/shipping/payment selector, voucher, modal alamat.
