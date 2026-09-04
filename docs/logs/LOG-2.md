# LOG-2 — Preview Halaman Utama (static single-file)

## Metadata

- Tanggal: 2026-09-04
- Agent: Sisyphus (OhMyOpenCode)
- Branch: main
- Commit: belum (menunggu user — file untracked)
- Scope: root `index.html` (preview statis, bukan implementasi Next.js)

## Tujuan

File preview HTML + Tailwind (CDN) + JS satu halaman di root, agar user mendapatkan gambaran visual desain halaman utama yang jelas sebelum implementasi utama di `apps/web`.

## Perubahan

- `index.html` (root, ±557 baris) — homepage Batik-Nusantara:
  - **DESIGN.md tokens penuh** (ADR-001): Inter Display 400–500 (tidak pernah bold), ink `#181d26` primary, canvas putih, surface `#f8fafc`/`#e0e2e6`, link blue `#1b61c9` khusus text-link, signature cards coral/cream full-bleed, band gelap `#181d26`, radius xs 2/sm 6/md 10/lg 12, spacing 4px base + band 96px (64px mobile), max-width 1280px.
  - **Band rhythm**: putih (hero) → coral (signature) → putih (grid produk 3-up) → cream (callout cerita motif) → gelap (newsletter) → putih (footer 6-kolom).
  - **Placeholder motif SVG**: Parang, Megamendung, Truntum, Kawung, Lasem, Sidomukti — digambar via `<pattern>`, bukan foto stok.
  - **JS**: mobile nav sheet (Esc close, focus management), tahun footer. Tanpa framework.
  - **A11y**: focus-visible ring, aria-label, role list/listitem, sr-only labels, min target 48px, input 44px, `prefers-reduced-motion`.
  - **Honest copy**: nama motif/kota nyata; harga placeholder konsisten (bukan klaim); disclaimer "Preview desain — bukan toko aktif".

## File yang Diubah

- `index.html` (baru, root)
- `docs/logs/LOG-2.md` (log ini)

## TDD

- Tidak applicable — file presentasi statis tanpa logic bisnis. Validasi via skrip node (syntax JS, keseimbangan tag, aturan token).

## Validasi

- `tailwind.config` JS syntax: OK
- Page JS syntax: OK
- Primary button markup: 1 (satu per viewport) ✓
- Inline hex background utilities: 0 (semua via token) ✓
- `overflow-x: clip` pada html/body ✓
- Tag balance: OK (p/input mismatch = false positive dari self-closing `<path/>` SVG dan `<input>` void)
- Rujukan id JS (`nav-toggle`, `mobile-nav`, `nav-close`, `year`): lengkap ✓
- Italic heading, bold display, metric mengada-ada: tidak ada ✓

## Known Issues

- `index.html` di root — preview-only; harus TIDAK ikut ke production. Saat implementasi Next.js, pindahkan token ke `apps/web` (globals.css/Tailwind config) lalu hapus file ini.
- Tailwind CDN — hanya untuk preview, bukan production build.
- Harga & produk = konten contoh, bukan data nyata.
- Hover states: DESIGN.md tidak mendokumentasikan hover → hanya Default + Active/Pressed (sesuai sumber).
- Warning/danger hex belum dari DESIGN.md (known gap) — tidak dipakai di halaman ini.

## Obsidian

- Session log di-update (Update 3 — preview homepage).

## Codebase-Memory

- Tidak di-re-index — file preview statis, bukan kode apps; `index.html` root bukan bagian index (docs/preview di luar cakupan kode).

## Next Step

- Review visual user (`buka index.html` di browser).
- Implementasi Next.js: token DESIGN.md → `apps/web`, homepage nyata + konten dinamis dari API.
