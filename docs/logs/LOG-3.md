# LOG-3 — Upgrade v2 Preview Halaman Utama (motion layer + ritme band lengkap)

## Metadata

- Tanggal: 2026-09-04
- Agent: Buffy (Freebuff)
- Branch: main
- Commit: belum (menunggu user)
- Scope: root `index.html` (preview statis, bukan implementasi Next.js)

## Tujuan

Upgrade `index.html` (hasil LOG-2) sesuai brief desain: tampilan lebih rapi/modern/profesional dengan animasi smooth, tetap setia pada DESIGN.md (ADR-001) dan konteks produk Batik-Nusantara. PRD.md tidak ditemukan di repo (`glob **/PRD*` kosong) — konteks produk diambil dari brief user.

## Perubahan

- **Motion layer baru** (progressive enhancement):
  - Scroll-triggered reveal: `[data-reveal]` fade-in + translateY(16px), durasi 0.7s, ease-out eksponensial `cubic-bezier(0.22,1,0.36,1)`, via IntersectionObserver (threshold 0.15, unobserve setelah reveal).
  - Stagger: container `[data-stagger]` → delay bertingkat 60ms/item (cap 300ms) dihitung JS sebagai `--reveal-delay`.
  - No-JS fallback: elemen disembunyikan hanya bila `html.js` ada; tanpa JS semua konten langsung terlihat.
  - `prefers-reduced-motion`: reveal langsung tampil + global `transition/animation-duration 0.01ms`.
  - Hover micro-interaction halus: product card `translateY(-2px)` + shadow subtle + motif zoom 1.02 (600ms), button primary/secondary lift ringan, nav link underline `scaleX`, icon button surface shift.
  - `scroll-behavior: smooth` + `scroll-padding-top: 88px` untuk anchor di bawah nav sticky.
- **Top nav**: `fixed` → `sticky` (sesuai brief), 64px, underline hairline, hover underline editorial.
- **Mobile nav sheet**: kini slide dari kanan (transform/opacity/visibility) + stagger link 80/140/200ms, scroll-lock body, atribut `inert` saat tertutup.
- **Product cards**: tile pastel non-uniform (peach/mint/cream/yellow/mustard — token DESIGN.md) dengan aspect ratio bervariasi (4/5, 1/1, 3/4) agar tidak terasa "spec sheet"; motif SVG disesuaikan fill pastel, stroke ink dipertahankan.
- **Ritme band dilengkapi**: ... white → coral → white (grid produk) → cream → dark (newsletter) → **light-gray CTA baru (`surface-strong`)** → footer. Tidak ada dua band putih berurutan.
- **Token CSS**: semua warna/radius/spacing kini juga sebagai CSS custom properties (`--ink`, `--coral`, `--hairline`, dll.) di samping Tailwind config; 0 hex inline di `style` attr markup.
- Copy, struktur semantic, aria labels, focus-visible, dan fungsionalitas dari LOG-2 dipertahankan utuh.

## File yang Diubah

- `index.html` (root, ±690 baris) — upgrade v2
- `docs/logs/LOG-3.md` (log ini)

## TDD

- Tidak applicable — file presentasi statis tanpa logic bisnis. Validasi via script node ad-hoc (syntax JS, tag balance, integritas motion system).

## Validasi

Script node (node v24):

```
script blocks: 2 → syntax OK (tailwind config + page JS)
unclosed tags: none
data-reveal: 22 elemen, data-stagger: 2 container markup (hero, product grid)
id references (nav-toggle, mobile-nav, nav-close, year, email-input): OK
inline hex di style attr markup: 0 (semua via token)
pastel tiles: 6 ✓
```

Cek manual logika:
- Reduced motion → reveal langsung tampil (CSS media query + JS matchMedia guard).
- Tanpa JS → `html.js` tidak ada → semua `[data-reveal]` terlihat (progressive enhancement).
- Hero padding-top deterministik via `.hero-top` (128px) — tidak bergantung urutan CSS Tailwind CDN.

## Documentation

- Brief desain diterapkan penuh; tidak ada konflik dengan DESIGN.md (tidak ada gradient hero, display tidak bold, primary button near-black, pill radius tidak dipakai di luar pricing).
- PRD.md tidak ada di repo — konteks produk dari brief (dicatat, bukan mengarang).

## Obsidian

- Obsidian: NOT CONFIGURED (`OBSIDIAN_VAULT_PATH` tidak ditemukan di environment/config project).

## Known Issues

- `index.html` root preview-only; token harus dipindah ke `apps/web` (globals.css/Tailwind config) saat implementasi Next.js, lalu file dihapus.
- Tailwind CDN tetap hanya untuk preview, bukan production build.
- Harga & produk = konten contoh, bukan data nyata.
- Hover states tetap minimal (DESIGN.md tidak mendokumentasikan hover; brief meminta subtle).
- Signature forest belum dipakai di halaman ini (ritme band diisi coral sebagai momen brand utama; forest tersedia untuk halaman lain).

## Next Step

- Review visual user di browser (`buka index.html`).
- Implementasi Next.js: token DESIGN.md → `apps/web`, homepage nyata + konten dinamis dari API.