# Proto — Serat Batik Atelier (32 halaman)

Semua halaman **1 file HTML self-contained** (HTML+CSS+JS inline), style Serat — mountain-slate #193741, honey-gold #eac486, Mulish + Playfair. Buka langsung tanpa build. Tidak ada duplikasi.

## Struktur — 2 folder saja

- `proto/user/` (19) — customer:
  `index.html` (Home `/`), `shop.html`, `category.html`, `product.html`, `search.html`, `cart.html`, `checkout.html`, `order-tracking.html`, `order-success.html`, `stories.html`, `story-detail.html`, `login.html`, `register.html`, `forgot-password.html`, `account.html`, `account-orders.html`, `account-order-detail.html`, `account-addresses.html`, `account-wishlist.html`
- `proto/admin/` (13) — admin:
  `admin.html` (`/admin`), `admin-orders.html`, `admin-order-detail.html`, `admin-products.html`, `admin-product-create.html`, `admin-product-edit.html`, `admin-categories.html`, `admin-inventory.html`, `admin-customers.html`, `admin-promotions.html`, `admin-banners.html`, `admin-stories.html`, `admin-settings.html`

`apps/web/src/app` **tidak ada** `prototype.html` lagi — semua sudah dipindah ke `proto/user|admin`.

```bash
open proto/user/index.html
open proto/user/checkout.html
open proto/admin/admin.html
```
