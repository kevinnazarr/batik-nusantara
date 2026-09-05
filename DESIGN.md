# Batik Nusantara — Style Reference
> warisan yang dipakai hari ini · heritage woven into everyday

**Theme:** editorial

Batik Nusantara adalah single-store ecommerce untuk batik Indonesia — kemeja, dress, blouse, kain, sarung, tas, dan produk turunan batik. Sistem visualnya meminjam logika editorial Airtable: kanvas putih bersih, tipografi near-black yang tegas, whitespace yang sangat generus, dan signature cards full-bleed sebagai brand voltage yang memecah scroll panjang. Batik hadir bukan sebagai ornamen ramai, melainkan sebagai tekstur — close-up canting, serat katun, dan motif yang di-crop ketat seperti material story, bukan kostum. Kesan yang dikejar: refined, contemporary, premium yang approachable — majalah fashion artisan, bukan katalog grosir dan bukan museum yang kaku.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Near-Black | `#181d26` | `--color-ink` | Primary absolut — teks utama, header, tombol primary, icon fill, dan dark surface. Near-black adalah brand color, bukan aksen |
| Ink Active | `#0d1218` | `--color-ink-active` | Pressed/active state untuk primary button dan interactive dark element. Sedikit lebih pekat dari Ink |
| Snow White | `#ffffff` | `--color-snow-white` | Canvas utama, header bar, card background, dan negative space dominan |
| Surface Soft | `#f8fafc` | `--color-surface-soft` | Alternating band yang sangat lembut — katalog grid, filter bar, dan section pemisah yang hampir putih |
| Surface Strong | `#e0e2e6` | `--color-surface-strong` | Border hairline yang sedikit lebih gelap, divider, dan surface sekunder untuk skeleton/placeholder |
| Stone Gray | `#9297a0` | `--color-stone-gray` | Border strong, secondary text, metadata, dan muted UI elements |
| Body Gray | `#333840` | `--color-body` | Body copy utama di atas putih — sedikit lebih lunak dari Ink untuk readability panjang |
| Muted | `#41454d` | `--color-muted` | Caption, helper text, dan secondary label |
| Hairline | `#dddddd` | `--color-hairline` | Hairline border default untuk card, input, dan table row divider |
| Link Blue | `#1b61c9` | `--color-link` | Hanya untuk text link inline — JANGAN dipakai sebagai warna tombol primary (kesalahan umum) |
| Link Active | `#1a3866` | `--color-link-active` | Hover/active state untuk text link |
| Success | `#006400` | `--color-success` | Stok tersedia, badge berhasil, dan status completed |
| Warning | `#d97706` | `--color-warning` | Stok menipis, peringatan checkout |
| Danger | `#dc2626` | `--color-danger` | Error, stok habis, validasi gagal |
| Coral Signature | `#aa2d00` | `--color-coral` | Signature card full-bleed #1 — brand voltage untuk promo, editorial highlight, dan campaign band (jangan dipakai sebagai accent kecil) |
| Forest Signature | `#0a2e0e` | `--color-forest` | Signature card full-bleed #2 — deep green untuk koleksi premium / heritage story |
| Cream Signature | `#f5e9d4` | `--color-cream` | Signature card full-bleed #3 — warm cream untuk story/cultural band, kontras lembut terhadap putih |
| Peach | `#fcab79` | `--color-peach` | Pastel extension — hanya di dalam signature card system, tidak untuk CTA |
| Mint | `#a8d8c4` | `--color-mint` | Pastel extension — sama seperti Peach |
| Yellow | `#f4d35e` | `--color-yellow` | Pastel extension |
| Mustard | `#d9a441` | `--color-mustard` | Pastel extension |

> Signature palette (coral, forest, cream + peach/mint/yellow/mustard) hanya untuk full-bleed brand voltage bands. Jangan pakai sebagai warna badge kecil, icon, atau button fill.

## Tokens — Typography

Sistem ini memakai **satu family saja** — Haas Grotesk / Haas Grotesk Display (berlisensi), dengan substitusi open-source **Inter Display variable** (line-height −5%). Tidak ada pairing serif+sans. Kontras diciptakan dari weight, size, dan whitespace, bukan pergantian family. Ini yang membedakan dari sistem hotel sebelumnya (Avenir + ITC Giovanni).

### Inter Display Variable — Semua peran: display, UI, navigation, body, price, label

- **Substitute:** Inter Display variable → Inter → system-ui
- **Weights:** 400 (regular), 475 (price), 500 (medium), 600/700 hanya untuk legal 13.12px
- **Features:** tabular numerals untuk harga, `font-variant-numeric: tabular-nums`
- **Role:** Satu family untuk seluruh interface. Display headline terasa editorial karena tracking dan whitespace, bukan karena serif.

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing | Token | Penggunaan |
|------|------|--------|-------------|----------------|-------|------------|
| legal | 13.12px | 600 | 1.2 | — | `--text-legal` | Footnote legal, disclaimer kecil |
| caption | 14px | 500 | 1.35 | — | `--text-caption` | Eyebrow, kategori kecil uppercase tracked, metadata produk |
| body | 14px | 400 | 1.25 | — | `--text-body` | Body default, deskripsi produk ringkas |
| label | 16px | 500 | 1.4 | — | `--text-label` | Label form, filter, nav item, button text |
| title-sm | 18px | 500 | 1.4 | — | `--text-title-sm` | Nama produk di card, sub-section title |
| title-md | 20px | 400 | 1.5 | — | `--text-title-md` | Section heading kecil, drawer title |
| title-lg | 24px | 400 | 1.35 | — | `--text-title-lg` | Section heading, cart/drawer heading |
| display-md | 32px | 400 | 1.2 | — | `--text-display-md` | Product detail title, collection heading |
| display-lg | 40px | 400 | 1.2 | — | `--text-display-lg` | Hero headline di light canvas |
| display-xl | 48px | 500 | 1.1 | — | `--text-display-xl` | Hero display besar — trust/heritage statement |
| price | 16–20px | 475 | 1.2 | — | `--text-price` | Harga produk, selalu tabular-nums, weight 475 |

> Display weights **400–500 saja**. Jangan pakai 600/700 untuk headline (hanya legal). Pricing selalu 475 + tabular-nums agar angka sejajar saat scan katalog.

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable — editorial breathing, bukan dense marketplace

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 96 | 96px | `--spacing-96` |

Section band rhythm: **96px** vertikal antar band besar. Horizontal breathing: **48px** di dalam container. Card padding: 48px (signature card), 32px (feature), 24px (cream band), 16px (demo grid).

### Border Radius

| Element | Value | Token |
|---------|-------|-------|
| legal / tag kecil | 2px | `--radius-xs` |
| inputs, select, filter | 6px | `--radius-sm` |
| content cards, ProductCard | 10px | `--radius-md` |
| primary CTA, signature cards | 12px | `--radius-lg` |
| pricing pill | 9999px | `--radius-pill` |
| avatar, icon button circular | 9999px | `--radius-full` |

> Konvensi tombol: satu primary (near-black) per viewport. Secondary = white outline hairline di atas dark, atau ghost di atas putih. Radius pill **hanya untuk pricing/badge harga** — tombol utama tetap 12px.

### Layout

- **Page max-width:** 1280px centered
- **Horizontal breathing:** 48px (16px di mobile)
- **Section gap:** 96px antar band
- **Grid katalog:** 2 col mobile → 3 col tablet → 4 col desktop, gap 16–24px
- **Element gap:** 12–24px
- **Touch target:** button min 48×48, input 44px height

## Components

### Header / Navigation Bar
**Role:** Site-wide top bar — wayfinding + commerce actions

Putih `#ffffff`, sticky, hairline border bottom `#dddddd`, tanpa shadow. Kiri: wordmark "BATIK NUSANTARA" Inter 14px medium, tracking 0.08em, `#181d26` + hamburger di mobile. Tengah: nav link Katalog · Koleksi · Cerita · Tentang (Inter 14px 400, `#333840`, hover `#181d26`). Kanan: search icon, akun, wishlist, cart dengan quantity badge (pill, `#181d26` bg, putih text, 18px circle). Cart badge hanya muncul jika >0.

### ProductCard
**Role:** Unit katalog — foto + info + harga

Background putih, border 1px `#dddddd`, radius 10px, overflow hidden. Image 4:5, object-cover, hover scale 1.02 (transform only, 240ms). Body padding 12–16px. Title: Inter 18px 500 `#181d26`, 1 baris clamp. Motif/meta: Inter 14px 400 `#41454d`. Price: Inter 16px 475 tabular-nums `#181d26` + strikethrough compare-at `#9297a0` jika diskon. Badge stok: "Tersedia" `#006400` / "Menipis" `#d97706` / "Habis" `#dc2626` — pill kecil 2px radius tidak, tapi 6px. Hover: border menjadi `#9297a0`. Tidak ada shadow.

### ProductGallery
**Role:** PDP image viewer

Desktop: 2-column — thumbnail vertikal kiri (64px), main image kanan 4:5, radius 10px. Mobile: swipe horizontal dengan dot indicator. Zoom on click: dialog full-bleed dengan pan. Alt text wajib (motif + warna + bahan). Image optimization Next.js + R2.

### VariantSelector
**Role:** Pilih varian SKU (ukuran, warna, motif)

Segmented pill group untuk ukuran (S/M/L) — pill radius 9999px hanya di sini untuk variant chips? Tidak, variant chips pakai 6px agar konsisten. Selected: bg `#181d26` text putih, border `#181d26`. Unselected: bg putih border `#dddddd` text `#333840`. Disabled (stok 0): opacity 0.4 + strikethrough, tidak bisa klik. Warna: swatch 32px circle dengan ring 1.5px `#181d26` saat selected, plus label motif di bawah.

### Price
**Role:** Display harga konsisten

Inter 500/475 tabular-nums. Format: `Rp 399.000`. Jika ada diskon: harga aktif `#181d26` + harga coret `#9297a0` 14px + badge diskon pill putih di atas signature? Badge diskon: bg `#181d26` text putih, radius pill 9999px, padding 4px 8px, Inter 12px 500. Harga tidak pernah pakai warna link blue.

### QuantitySelector
**Role:** Stepper jumlah item

Border 1px `#dddddd`, radius 6px, height 44px. Button 44×44, Inter 16px, hover bg `#f8fafc`. Input center 48px wide, text center, tabular-nums. Min 1, max = stok varian. Jika stok <5, tampilkan helper "Sisa 3" warna `#d97706`.

### AddToCartButton (Primary CTA)
**Role:** Primary action — satu per viewport PDP

Background `#181d26`, text putih, Inter 16px 500, radius 12px, padding 14px 24px, width full di mobile / auto di desktop, height 48px. Hover: `#0d1218`. Active/pressed: `#0d1218` + scale 0.98. Disabled: bg `#e0e2e6` text `#9297a0` + cursor not-allowed. Tidak menunggu animasi. Secondary action (Wishlist) = outline hairline `#dddddd`, bg putih, text `#181d26`.

### CartDrawer
**Role:** Slide-over keranjang (Framer Motion)

Drawer kanan 420px (100vw di mobile), bg putih, border kiri 1px `#dddddd`. Header: "Keranjang (3)" Inter 20px 400 + close. List CartItem dengan divider `#dddddd`. Footer sticky: subtotal (Inter 16px 475 tabular-nums), shipping note, primary CTA "Checkout" full-width `#181d26`. EmptyState: ilustrasi + "Keranjang kosong" + CTA "Mulai Belanja".

### CartItem
**Role:** Row di drawer/cart page

Layout: image 80×100 radius 6px kiri, detail tengah (title 14px 500, variant meta 12px `#41454d`, price 14px 475), stepper + remove kanan. Remove = text link `#9297a0` hover `#dc2626` (text-only, bukan button danger). Divider 1px `#dddddd` antar item. Skeleton saat update quantity (optimistic UI).

### CouponInput
**Role:** Input kode voucher di cart/checkout

Input 44px height, border 1px `#dddddd` radius 6px, placeholder `#9297a0`. Button "Pakai" di dalam (suffix) — Inter 14px 500 `#181d26` outline. Success: border `#006400` + message hijau. Error: border `#dc2626` + message merah. Applied coupon ditampilkan sebagai pill removable: bg `#f8fafc` border `#dddddd`, label kode + diskon, × remove.

### ShippingRateCard
**Role:** Pilihan kurir (Biteship abstraction)

Card border 1px `#dddddd` radius 10px, padding 16px. Selected: border `#181d26` 1.5px + bg `#f8fafc` subtle. Isi: logo kurir 32px, nama layanan, ETA ("1–2 hari"), harga tabular-nums `#181d26`. Radio di kanan. List di dalam checkout step — mobile stack 1 col, desktop 1 col juga (jangan grid).

### OrderTimeline / OrderStatus
**Role:** Status tracking pesanan (terpisah: order / payment / shipment)

Vertical stepper, dot 12px + line 1px `#dddddd`. Active dot: bg `#181d26` border 2px putih + ring `#181d26`. Completed: bg `#006400`. Pending: bg `#e0e2e6`. Label: Inter 14px 500 `#181d26` + timestamp 12px `#41454d`. StatusBadge: pill 6px radius, padding 4px 10px, Inter 12px 500 uppercase tracked 0.06em — "Diproses" `#d97706` bg `#fef3c7`, "Dikirim" `#1b61c9` bg `#eff6ff`, "Selesai" `#006400` bg `#dcfce7`, "Batal" `#dc2626` bg `#fee2e2`.

### Breadcrumb
**Role:** Navigasi hierarki katalog

Inter 14px 400 `#41454d`, separator `/` atau `·` (`#9297a0`). Current page `#181d26` 500. Link hover `#1b61c9` (satu-satunya tempat link blue muncul sebagai interactive text). Mobile: truncate atau hidden, ganti dengan "← Kembali".

### FilterBar & Search
**Role:** Filter katalog — kategori, harga, ukuran, warna, motif

Bar horizontal sticky di bawah header pada katalog, bg `#ffffff` dengan border bottom `#dddddd`. Chips filter: Inter 14px 400, border 1px `#dddddd` radius 6px, padding 8px 14px. Active chip: bg `#181d26` text putih. Mobile: drawer bottom-sheet (Framer Motion) dengan apply/reset. Search input: 44px height, border `#dddddd`, focus ring 2px `#181d26` (bukan blue), clear button × di suffix.

### EmptyState / ErrorState / Skeleton
**Role:** Feedback pattern

EmptyState: centered, icon 48px `#9297a0`, title Inter 20px 400 `#181d26`, body 14px `#41454d`, CTA primary. ErrorState: icon `#dc2626` + message + retry button. Skeleton: bg `#e0e2e6` shimmer, radius sesuai komponen (card 10px, text 6px). Jangan pakai spinner besar — skeleton adalah default loading.

### Signature Card (Brand Voltage)
**Role:** Full-bleed editorial break — bukan komponen commerce reguler

Full-bleed (100vw), padding 48px (mobile) / 80–96px (desktop), radius 12px jika inset, atau 0 jika edge-to-edge. Varian: Coral `#aa2d00` putih text, Forest `#0a2e0e` putih text, Cream `#f5e9d4` Ink text. Isi: eyebrow 12px 500 uppercase tracked 0.12em + headline 40–48px 400 + body 16px + CTA (pill putih jika di atas dark, near-black jika di atas cream). Dipakai untuk: campaign koleksi baru, cerita pengrajin, atau editorial "Mengenal Motif Parang". Jangan pakai signature color untuk badge kecil.

### Footer
**Role:** Navigasi sekunder + trust signals

Bg `#181d26`, text `#f8fafc` / muted `#9297a0`. 4 kolom desktop: Brand + tagline, Bantuan, Koleksi, Kontak. Newsletter input dark: bg `#0d1218` border `#41454d` text putih, button putih text `#181d26`. Divider 1px `#41454d`. Bottom bar: © + link legal 13.12px 600 + payment icons + social. Mobile stack 1 col, accordion untuk nav groups.

## Do's and Don'ts

### Do
- Gunakan satu family Inter Display untuk semua — headline besar terasa editorial karena **whitespace & tracking**, bukan karena ganti serif
- Pakai near-black `#181d26` sebagai primary untuk **semua tombol utama** — satu primary per viewport, secondary selalu hairline outline
- Jaga section rhythm **putih → signature card → putih → cream → dark → putih** — jangan dua surface sama berturut-turut
- Pertahankan 96px gap antar band besar dan 48px horizontal breathing — biar katalog yang padat tetap breathable
- Pakai tabular-nums + weight 475 untuk **semua harga** agar scan vertikal di grid rata
- Perlakukan batik sebagai **material story**: crop ketat motif, macro canting/wax, foto on-model yang natural — bukan pattern fill yang ramai
- Gunakan radius **12px untuk CTA/signature, 10px untuk card produk, 6px untuk input, pill hanya untuk harga/badge** — jangan random
- Fokus visual hierarchy: 1) foto produk → 2) nama/harga → 3) CTA → 4) cerita budaya → 5) navigasi sekunder
- Verifikasi stok/harga/diskon di backend — frontend hanya display, bukan source of truth

### Don't
- Jangan pakai link blue `#1b61c9` untuk tombol — hanya untuk text link inline
- Jangan pakai coral/forest/cream sebagai fill tombol atau badge kecil — signature colors hanya untuk full-bleed bands
- Jangan pakai drop shadow tebal — depth dari border 1px `#dddddd` dan kontras surface saja; shadow hanya `0 1px 2px rgba(24,29,38,0.06)` jika benar-benar perlu di atas putih
- Jangan bold headline (600/700) — display tetap 400–500, bold hanya untuk legal 13.12px
- Jangan compress section padding di bawah 48px atau grid gap di bawah 12px — density yang padat membunuh kesan premium
- Jangan pakai motif batik sebagai background tile yang berulang di seluruh page — motif dipakai sebagai **hero image yang di-crop**, bukan wallpaper
- Jangan campur banyak radius dalam satu view — konsistensi radius adalah sinyal kematangan
- Jangan buat guest checkout second-class — flow tanpa login harus sama mulusnya dengan yang login
- Jangan percaya status pembayaran dari frontend — Midtrans webhook adalah source of truth

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Snow White Canvas | `#ffffff` | Canvas utama, header, ProductCard, cart drawer, PDP |
| 1 | Soft Surface | `#f8fafc` | Alternating band lembut, filter bar, skeleton base, selected card tint |
| 2 | Strong Surface | `#e0e2e6` | Divider kuat, disabled button bg, placeholder, skeleton shimmer |
| 3 | Ink Surface | `#181d26` | Dark footer, primary button, cart badge, selected variant, signature dark band |
| 4 | Ink Active | `#0d1218` | Pressed state untuk dark surface, newsletter input bg di footer |
| — | Coral Signature | `#aa2d00` | Full-bleed campaign band — teks putih |
| — | Forest Signature | `#0a2e0e` | Full-bleed heritage band — teks putih |
| — | Cream Signature | `#f5e9d4` | Full-bleed story band — teks Ink |

## Elevation

Hampir flat — depth dari kontras dan hairline border, bukan shadow. Jika butuh separasi di atas putih (mis. sticky header, drawer, dropdown), pakai maksimal `shadow: 0 1px 2px rgba(24,29,38,0.06)` + border `1px solid #dddddd`. ProductCard, CartItem, Filter chips: **tanpa shadow**, hanya border. Drawer/modal: border + shadow halus tersebut. Jangan pakai shadow besar/blur — rasa editorial datang dari whitespace, bukan elevasi.

## Imagery

Fotografi adalah 50–60% dari visual weight — seperti majalah fashion artisan, bukan marketplace generik.

- **Product hero:** on-model natural light, background putih/soft `#f8fafc`, pose relaxed, crop 4:5 — jangan studio glossy yang over-retouch
- **Detail/texture:** macro canting, malam wax, weave katun/sutra, close-up motif Parang/Megamendung/Kawung yang di-crop ketat — dipakai sebagai material story di PDP tab "Cerita Motif"
- **Lifestyle:** aktivitas harian — kemeja batik di kafe, dress di pasar, kain di among keluarga — warm, human, tidak staged berlebihan
- **Flat lay:** kain digelar, tas/dompet dari atas, shadow sangat halus — untuk varian warna/motif
- **Treatment:** full color, warm white balance, tidak ada overlay teal/monochrome. Motif tidak di-recolor — warna asli batik adalah hero. Icon style: line icon 1.5px stroke, `#181d26` atau putih, 20–24px, jangan filled icon
- **Jangan:** ilustrasi generik, vector batik clip-art, stock photo yang tidak relevan, atau product screenshot

## Layout

Katalog-first, bukan hero-first seperti hotel. Struktur halaman tipikal:

- **Header sticky** (64px) + **FilterBar** (opsional, 52px) di katalog
- **Hero editorial** hanya di homepage: headline 48px di kiri (max 640px), visual kain/model di kanan — 50/50 di desktop, stack di mobile. Tinggi hero tidak full-viewport agar katalog terlihat di fold (ecommerce signal)
- **Section rhythm:** putih (katalog/grid) → signature card full-bleed (campaign/cerita) → putih (koleksi curated 3–4 items) → cream (testimoni/pengrajin) → dark footer. Jarak 96px antar band, 48px breathing horizontal (16px mobile)
- **Grid katalog:** 2 col @ 375px → 3 col @ 768px → 4 col @ 1280px, gap 16px mobile / 24px desktop. ProductCard konsisten 4:5, tidak ada masonry
- **PDP:** gallery kiri (50%) + info sticky kanan (50%) di desktop; stack di mobile dengan CTA sticky bottom bar (48px height, bg putih + border top, shadow halus)
- **Checkout:** single column 640px centered, stepper horizontal (Keranjang → Informasi → Pengiriman → Pembayaran), card putih border `#dddddd` radius 10px, gap 24px antar card. Guest checkout toggle di paling atas — tidak disembunyikan
- **Densitas:** breathable — jangan information-dense. Whitespace adalah kemewahan yang membuat produk batik terasa premium dan approachable

## Agent Prompt Guide

**Quick Color Reference**
- text: #181d26
- text-body: #333840
- background: #ffffff
- surface-soft: #f8fafc
- border: #dddddd
- border-strong: #9297a0
- primary: #181d26 (tombol utama)
- primary-active: #0d1218
- link: #1b61c9 (hanya text link)
- accent brand voltage: #aa2d00 / #0a2e0e / #f5e9d4 (hanya full-bleed)

**3 Example Component Prompts**

1. Create a catalog ProductCard: container 4:5, bg #ffffff, border 1px #dddddd, radius 10px, overflow hidden. Image 4:5 object-cover, hover scale 1.02 transform 240ms. Body padding 12px. Title Inter 18px 500 #181d26 clamp 1 line. Meta Inter 14px 400 #41454d: "Kawung · Katun Primis". Price Inter 16px 475 tabular-nums #181d26 "Rp 399.000" + compare-at 14px #9297a0 strikethrough if discounted. Badge "Tersedia" 12px 500 bg #dcfce7 text #006400 radius 6px. No shadow.

2. Create a PDP hero: two-column 50/50. Left: ProductGallery — thumbnails 64px vertical + main 4:5 radius 10px, border 1px #dddddd. Right: sticky info. Eyebrow Inter 12px 500 uppercase tracked 0.12em #41454d "KOLEKSI MEGAMENDUNG". Title Inter 32px 400 #181d26 line-height 1.2. Price Inter 20px 475 tabular-nums #181d26. VariantSelector chips 6px radius, selected bg #181d26 text white. QuantitySelector 44px height border #dddddd. Primary CTA full-width bg #181d26 text white Inter 16px 500 radius 12px height 48px, hover #0d1218. Trust row below: icon + "Pengiriman Biteship · Pembayaran Midtrans" 12px #41454d.

3. Create a signature campaign band: full-bleed 100vw bg #aa2d00, padding 80px vertical 48px horizontal. Eyebrow Inter 12px 500 uppercase tracked 0.12em white 0.9 opacity "KOLEKSI BARU". Headline Inter 48px 500 white line-height 1.1 "Parang Kusumo, ditulis ulang". Body Inter 16px 400 white 0.9, max 560px. CTA pill white bg #ffffff text #181d26 Inter 14px 500 radius 12px padding 12px 24px "Lihat Koleksi". Right visual: kain flat-lay 4:3 radius 12px, no border. Section gap 96px before/after.

## Similar Brands

- **COS** — Editorial minimal dengan near-black primary, palette sangat restrained, whitespace generus, dan product photography yang membiarkan material berbicara — referensi utama untuk katalog premium yang tenang.
- **ARKET** — Skandinavia artisan: grid produk yang breathable, detail material/asal-usul sebagai story layer, dan signature bands yang memecah katalog tanpa mengganggu scanability.
- **Sejauh Mata Memandang** — Referensi lokal: batik/textile yang diangkat sebagai fashion contemporary, bukan kostum — storytelling motif + sustainability yang relevan untuk heritage positioning Batik Nusantara.
- **Aritzia** — PDP pattern yang kuat: gallery + sticky info + variant swatch yang jelas, dengan CTA hierarchy yang sangat disiplin (satu primary per viewport).
- **Everlane** — Transparansi dan editorial copy yang jujur — pendekatan "cerita di balik produk" yang cocok untuk mengangkat pengrajin dan proses tulis/cap batik tanpa kesan museum.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors — Core */
  --color-ink: #181d26;
  --color-ink-active: #0d1218;
  --color-snow-white: #ffffff;
  --color-surface-soft: #f8fafc;
  --color-surface-strong: #e0e2e6;
  --color-stone-gray: #9297a0;
  --color-body: #333840;
  --color-muted: #41454d;
  --color-hairline: #dddddd;
  --color-link: #1b61c9;
  --color-link-active: #1a3866;
  --color-success: #006400;
  --color-warning: #d97706;
  --color-danger: #dc2626;

  /* Colors — Signature (full-bleed only) */
  --color-coral: #aa2d00;
  --color-forest: #0a2e0e;
  --color-cream: #f5e9d4;
  --color-peach: #fcab79;
  --color-mint: #a8d8c4;
  --color-yellow: #f4d35e;
  --color-mustard: #d9a441;

  /* Typography — Family (single family) */
  --font-display: 'Inter Display', Inter, ui-sans-serif, system-ui, sans-serif;

  /* Typography — Scale */
  --text-legal: 13.12px;
  --leading-legal: 1.2;
  --text-caption: 14px;
  --leading-caption: 1.35;
  --text-body: 14px;
  --leading-body: 1.25;
  --text-label: 16px;
  --leading-label: 1.4;
  --text-title-sm: 18px;
  --leading-title-sm: 1.4;
  --text-title-md: 20px;
  --leading-title-md: 1.5;
  --text-title-lg: 24px;
  --leading-title-lg: 1.35;
  --text-display-md: 32px;
  --leading-display-md: 1.2;
  --text-display-lg: 40px;
  --leading-display-lg: 1.2;
  --text-display-xl: 48px;
  --leading-display-xl: 1.1;
  --text-price: 16px;
  --leading-price: 1.2;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-price: 475;
  --font-weight-medium: 500;
  --font-weight-bold: 600;

  /* Spacing — 4px base */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-96: 96px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96px;
  --card-padding: 32px;
  --element-gap: 24px;
  --horizontal-breathing: 48px;

  /* Border Radius */
  --radius-xs: 2px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-pill: 9999px;
  --radius-full: 9999px;

  /* Surfaces */
  --surface-canvas: #ffffff;
  --surface-soft: #f8fafc;
  --surface-strong: #e0e2e6;
  --surface-ink: #181d26;
  --surface-ink-active: #0d1218;
  --surface-coral: #aa2d00;
  --surface-forest: #0a2e0e;
  --surface-cream: #f5e9d4;
}
```

### Tailwind v4

```css
@theme {
  /* Colors — Core */
  --color-ink: #181d26;
  --color-ink-active: #0d1218;
  --color-snow-white: #ffffff;
  --color-surface-soft: #f8fafc;
  --color-surface-strong: #e0e2e6;
  --color-stone-gray: #9297a0;
  --color-body: #333840;
  --color-muted: #41454d;
  --color-hairline: #dddddd;
  --color-link: #1b61c9;
  --color-link-active: #1a3866;
  --color-success: #006400;
  --color-warning: #d97706;
  --color-danger: #dc2626;

  /* Colors — Signature */
  --color-coral: #aa2d00;
  --color-forest: #0a2e0e;
  --color-cream: #f5e9d4;
  --color-peach: #fcab79;
  --color-mint: #a8d8c4;
  --color-yellow: #f4d35e;
  --color-mustard: #d9a441;

  /* Typography */
  --font-display: 'Inter Display', Inter, ui-sans-serif, system-ui, sans-serif;

  --text-legal: 13.12px;
  --leading-legal: 1.2;
  --text-caption: 14px;
  --leading-caption: 1.35;
  --text-body: 14px;
  --leading-body: 1.25;
  --text-label: 16px;
  --leading-label: 1.4;
  --text-title-sm: 18px;
  --leading-title-sm: 1.4;
  --text-title-md: 20px;
  --leading-title-md: 1.5;
  --text-title-lg: 24px;
  --leading-title-lg: 1.35;
  --text-display-md: 32px;
  --leading-display-md: 1.2;
  --text-display-lg: 40px;
  --leading-display-lg: 1.2;
  --text-display-xl: 48px;
  --leading-display-xl: 1.1;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-96: 96px;

  /* Border Radius */
  --radius-xs: 2px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-pill: 9999px;
  --radius-full: 9999px;
}
```
