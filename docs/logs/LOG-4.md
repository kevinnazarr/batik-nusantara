# LOG-4 — Refactor Per-Page: Satu Page = Satu File HTML Mandiri (CSS + JS Inlined)

## Metadata

- Tanggal: 2026-09-05
- Agent: Buffy (Freebuff)
- Branch: main
- Commit: belum (menunggu user)
- Scope: root `index.html`, `shop.html`, `product.html`, `cart.html` (preview statis, bukan implementasi Next.js)

## Tujuan

Refactor struktur code dari **satu file HTML besar dengan hash-based routing SPA** (`index.html` ±5.438 baris, semua page, CSS, dan JS tercampur) menjadi **satu page = satu file HTML mandiri**, sesuai brief user:

- HTML + CSS + JS page berada dalam **satu file HTML** yang sama.
- CSS/JS page A tidak mengotori page B.
- Fungsionalitas global (navbar, drawer, modal wishlist, cookie banner, toast, footer, store/cart data) tetap konsisten tanpa duplikasi yang tidak perlu.
- Tidak mengubah desain atau behavior yang sudah ada.

## Perubahan

### 1. Routing SPA (hash) → Multi-page (file)

| Route lama | File baru | Keterangan |
|---|---|---|
| `index.html#/` | `index.html` | Home (termasuk section `#story` via anchor) |
| `index.html#/shop` | `shop.html` | Collection + filter/search/sort |
| `index.html#/product/3` | `product.html?id=3` | Product detail |
| `index.html#/cart` | `cart.html` | Cart + checkout demo |

- Semua link internal dikonversi ke href file nyata (`shop.html`, `product.html?id=`, `cart.html`).
- Redirect polyfill kecil di `global.js` untuk link lama `#/...` agar bookmark lama tetap jalan.
- `#story` dipertahankan sebagai anchor di home; subnav "The Story" tetap aktif saat di home.

### 2. Pemecahan file

- `index.html` (home): markup statis + CSS home + JS home inlined.
- `shop.html`: markup statis + CSS shop + JS shop inlined.
- `product.html`: kerangka + konten dirender dari `?id=` oleh JS page inlined.
- `cart.html`: kerangka + konten dirender dari store oleh JS page inlined.

### 3. Kode global (dipakai semua page)

Bagian yang benar-benar shared dipindah ke blok "GLOBAL" yang **di-inline ke setiap page** (tidak ada file eksternal):

- **CSS GLOBAL**: design tokens (`:root`), base/reset, typography, komponen chrome (header, drawer, modal, toast, cookie banner, footer, product card, rating, form primitives, `.shop-empty`, `.page-head`), responsive global.
- **JS GLOBAL**: data produk/kategori, cart store + wishlist store (localStorage), renderer product card, chrome logic (scrolling header, menu drawer, language switcher, wishlist modal, cookie banner, toast), redirect polyfill `#/`.
- Beberapa komponen CSS yang semula page-only dipromosikan ke global karena dipakai lintas page (contoh: `.shop-empty` dipakai shop + product not-found).

Evolusi: versi pertama refactor memakai `assets/global.css` + `assets/global.js` (satu file eksternal shared), lalu sesuai arahan lanjutan user seluruh isinya **di-inline langsung ke setiap HTML** sehingga setiap file HTML 100% self-contained; `assets/` dihapus.

### 4. Sticky Shop subnav

Behavior dipertahankan: subnav di-flow dalam section 2, dipromosikan `position: fixed` saat menyentuh navbar (via JS di shop.html), placeholder menjaga ruang flow, kembali normal saat scroll ke atas.

### 5. Search

Search tetap berada di Shop page (`.shop-search`), tidak dipindah ke navbar global.

## File yang Diubah

- `index.html` — rewrite: home page mandiri (global inlined + home CSS/JS)
- `shop.html` — baru: shop page mandiri (global inlined + shop CSS/JS)
- `product.html` — baru: product page mandiri (global inlined + product CSS/JS)
- `cart.html` — baru: cart page mandiri (global inlined + cart CSS/JS)
- `scripts/validate-pages.mjs` — baru: validasi statis seluruh page (sintaks JS, brace balance CSS, chrome IDs, internal links + anchors, getElementById targets, class coverage, isolasi CSS per-page)
- `docs/logs/LOG-4.md` — log ini

Dihapus: `assets/global.css`, `assets/global.js` (di-inline ke setiap page), `scripts/inline-global.mjs` (script migrasi one-off).

## TDD

- Tidak applicable secara formal (file presentasi statis). Menggantinya dengan **validation gate** (`scripts/validate-pages.mjs`) — RED/GREEN-style: validator menolak file yang tidak lulus.
- Saat `assets/global.js` masih dipakai, validator BENAR-BENAR menemukan 3 failure (template interpolation dibaca sebagai class markup + `.shop-empty` salah ekspektasi) → diperbaiki dulu sampai GREEN.

## Validasi

`node scripts/validate-pages.mjs` → **VALIDATION PASSED — all checks green**:

```
[1] JavaScript syntax      ✓ keempat page (inline script OK)
[2] Style brace balance    ✓ index 359 / shop 270 / product 296 / cart 266
[3] Shared chrome          ✓ keempat page (header, drawer, modal, toast, footer ids)
[4] Internal links         ✓ 10/13/14/17 link + anchors, tanpa legacy #/ links
[5] getElementById targets ✓ semua resolve
[6] CSS class coverage     ✓ semua class markup punya CSS
[7] Page CSS isolation     ✓ blok CSS page-only hadir di page yang benar
```

Plus **runtime smoke test** (node + DOM stub minimal): keempat page menjalankan init script-nya tanpa ReferenceError/TypeError → semua script ter-inline aman dieksekusi berurutan dalam satu `<script>`.

Belum diverifikasi di browser nyata (user harus membuka file-nya) — direncanakan sebagai review berikutnya.

## Documentation

- Brief user diikuti penuh (modular per page, self-contained, tanpa migrasi framework).
- Tidak ada perubahan pada DESIGN.md/README (struktur preview root tetap inline HTML).

## Obsidian

- Obsidian: NOT CONFIGURED (`OBSIDIAN_VAULT_PATH` tidak ditemukan di environment/config project).

## Known Issues

- Preview masih konten contoh (harga/produk demo, URL Unsplash).
- `product.html` diakses langsung tanpa `?id=` menampilkan not-found state (perilaku yang diinginkan).
- Duplikasi "GLOBAL" CSS/JS ada di setiap file secara fisik (~1.700 baris CSS + ~530 baris JS per page) — ini konsekuensi yang diminta (self-contained), bukan drif; konsistensi dijaga karena blok disalin verbatim dari satu sumber.
- Belum ada E2E browser (tidak ada test runner di project ini, hanya static script).

## Next Step

- Review visual + interaksi di browser (semua page, navbar, drawer, language switcher, sticky subnav, search, add-to-cart, wishlist, toast, cookie banner).
- Setelah disetujui user: commit per-page refactor (menunggu instruksi explicit).