# LOG-5 — 32 Prototype HTML Self-Contained + Sinkron Proto & App

## Metadata
- Tanggal: 2026-09-07
- Agent: Sisyphus
- Branch: main
- Commit: belum (menunggu user)
- Scope: `DESIGN.md`, `proto/*.html` (32 file), `apps/web/src/app/**/prototype.html` (32 file)

## Tujuan
1. Sesuaikan `DESIGN.md` dari hotel BelArosa Chalet ke e-commerce Batik Nusantara.
2. Jawab jumlah page ideal project.
3. Buat semua 32 page sebagai 1 file HTML self-contained (HTML+CSS+JS inline) dengan style persis `proto` (Serat Batik Atelier — mountain-slate #193741, honey-gold #eac486, Mulish+Playfair) dan simpan di folder page masing-masing, lalu pindahkan/duplikasi ke `proto/` flat.

## Perubahan
### 1. DESIGN.md
- Rewrite total 359 baris BelArosa → 420+ baris Batik Nusantara.
- Token: Ink #181d26, surface #f8fafc/#e0e2e6, link #1b61c9, signature coral #aa2d00 / forest #0a2e0e / cream #f5e9d4 (+ peach/mint/yellow/mustard) — hanya full-bleed.
- Tipografi: satu family Inter Display variable (Haas Grotesk substitute), weight 400-500, price 475 tabular-nums — ganti pairing Avenir+ITC Giovanni.
- Spacing 4px base, section 96px, radius 12/10/6/pill.
- Komponen diganti hotel → commerce: ProductCard 4:5, ProductGallery, VariantSelector, Price, QuantitySelector, AddToCart, CartDrawer, ShippingRateCard (Biteship), OrderTimeline, FilterBar, Signature Card dll.
- Layout katalog-first, PDP gallery+sticky, checkout 640px guest-first.

### 2. Jumlah page
- `docs/frontend/21-SITEMAP.md` = 32 route (19 storefront/auth + 13 admin).
- `docs/frontend/22-SCREEN-INVENTORY.md` = 27 screen (15 customer + 12 admin, MVP kecuali wishlist & stories MVP+).
- Verifikasi: `apps/web/src/app/**/page.tsx` = 32 file — sudah 1:1.

### 3. Prototype HTML (32 file)
- Awal `proto/` hanya 4: index, shop, product, cart.
- Dibuat 28 baru + 1 checkout khusus (49KB) + 4 copy — total `apps/web/src/app/**/prototype.html` = 32 (2.9M) dan `proto/*.html` = 32 (2.9M) — duplikat flat.
- Setiap file self-contained: inline `<style>` global (~1.700 baris) + page CSS + inline `<script>` (drawer, wishlist/cart localStorage, toast, page interaction). Responsive 3→2 cols, no external deps.
- Daftar proto flat:
  - Storefront: index, shop, product, cart, category, search, checkout, order-tracking, order-success, stories, story-detail
  - Auth/Account: login, register, forgot-password, account, account-orders, account-order-detail, account-addresses, account-wishlist
  - Admin: admin, admin-orders, admin-order-detail, admin-products, admin-product-create, admin-product-edit, admin-categories, admin-inventory, admin-customers, admin-promotions, admin-banners, admin-stories, admin-settings

### 4. Sinkron proto & app
- `cp apps/web/src/app/**/prototype.html → proto/*.html` — nama flat deskriptif (contoh `account-orders.html`, `admin-product-create.html`).

## File yang Diubah
- `DESIGN.md` — rewrite total
- `proto/*.html` — 28 baru + 4 overwrite (32 total)
- `apps/web/src/app/**/prototype.html` — 32 baru (di semua page.tsx folder)
- `apps/web/src/app/(storefront)/checkout/prototype.html` — dibuat pertama sebagai demo sebelum batch

## TDD
- Tidak formal (static HTML). Gate: `ls -lh` tiap file >80KB, `find ... | wc -l = 32`, buka di browser manual (header, drawer, toast, variant/shipping/payment interaction jalan).

## Validasi
- `find proto -name "*.html" | wc -l` → 32
- `find apps/web/src/app -name "prototype.html" | wc -l` → 32
- `ls -lh proto` → 2.9M total, tiap file 89-114KB
- Checkout: shipping card ganti total live, voucher SERAT10 −50rb, Midtrans mock redirect ke order-success

## Documentation
- DESIGN.md sinkron dengan `docs/frontend/14-DESIGN-SYSTEM.md` & `26-DESIGN-TOKENS.md`
- Sitemap/Screen inventory tetap source of truth untuk jumlah page

## Obsidian
- Obsidian: NOT CONFIGURED (`OBSIDIAN_VAULT_PATH` tidak ditemukan — seperti LOG-4). Vault tidak ditemukan di ~/vault. Dokumentasi repo tetap di `docs/logs/`.

## Known Issues
- Konten masih mock (Unsplash, harga demo).
- Duplikasi global CSS ~1.700 baris per file — by design (self-contained).
- Belum ada validasi `scripts/validate-pages.mjs` untuk 32 file baru (perlu diperluas dari 4 ke 32).

## Next Step
- Perluas `scripts/validate-pages.mjs` untuk 32 proto + browser smoke test.
- Setelah approve: lanjut implementasi Next.js (ganti page.tsx placeholder dengan komponen beneran pakai token DESIGN.md) + Laravel API.
