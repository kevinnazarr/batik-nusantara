# LOG-6 — Reset Home Page ke fondasi minimal

## Metadata
- Tanggal: 2026-09-08
- Agent: muse-spark
- Branch: main
- Commit: belum (menunggu user)
- Scope: `apps/web/src/app/page.tsx`, `apps/web/src/components/page/home/**`, `apps/web/src/data/home/**`

## Tujuan
Reset total UI Home Page (`/`) ke fondasi minimal yang bersih tanpa mengubah konfigurasi dan fungsionalitas esensial. Header/Footer/Layout tetap dipertahankan.

## Perubahan
### 1. apps/web/src/app/page.tsx — rewrite minimal
- Dari 10 section imports (Hero, FeaturedTiles, CategoryTiles, BestSellers, StoryBand, MotifCards, PromoBanner, ArtisanSteps, Testimonials, Newsletter) + data `home/*` → menjadi Server Component kosong:
  ```tsx
  export default function HomePage() {
    return <main className="flex-1" aria-label="Home" />;
  }
  ```
- `layout.tsx` tidak diubah: tetap `SiteHeader` + `SiteFooter` + `MobileDrawer` + `RevealObserver` + fonts Playfair/Mulish.

### 2. Penghapusan terisolasi
- Hapus `apps/web/src/components/page/home/**` (10 file: hero, featured, categories, best-sellers, story, motifs, promo, artisans, testimonials, newsletter)
- Hapus `apps/web/src/data/home/**` (13 file: hero, featured, categories, best-sellers, story, motifs, promo, artisans, testimonials, newsletter, shared, index, dll)
- Verifikasi grep: semua section hanya di-import dari `page.tsx`, tidak ada consumer lain — aman dihapus tanpa dead code.
- Bersihkan direktori kosong `src/components/page` dan `src/data` yang tertinggal.

### 3. Koreksi insidental
- `git status` sempat menampilkan `D apps/api/AGENTS.md` dan `D apps/web/AGENTS.md` akibat hapus direktori yang salah — dipulihkan via `git restore`.

## File yang Diubah
- `apps/web/src/app/page.tsx` — M (rewrite 33 baris → 3 baris)
- `apps/web/src/components/page/home/**` — D (10 file)
- `apps/web/src/data/home/**` — D (13 file)

## TDD
- Tidak ada test fungsional baru — perubahan adalah penghapusan UI. Gate diganti dengan validasi build/lint/type.

## Validasi
- `npm run lint` → PASS (exit 0; hanya 3 error pre-existing `@next/no-html-link-for-pages` di route lain, bukan dari perubahan ini)
- `npm run build` → PASS (✓ Compiled successfully in 7.2s, 28/28 static pages generated termasuk `/` sebagai ○ static)
- `git diff --stat` → 1 M + 23 D, tidak ada perubahan di `layout.tsx`
- Manual check: `layout.tsx` header/footer utuh, `/` render `<main>` kosong tanpa error.

## Documentation
- Tidak ada perubahan `docs/` selain log ini. Sitemap/screen inventory tetap valid — hanya implementasi Home yang di-reset.

## Obsidian
- Obsidian: NOT CONFIGURED (`OBSIDIAN_VAULT_PATH` tidak ditemukan). Dokumentasi repo tetap di `docs/logs/`.

## Known Issues
- Home kini kosong — siap untuk desain ulang dari nol. Section lama tidak diarsipkan (Git history sebagai arsip).
- 3 lint error pre-existing di `/stories`, `/account/wishlist`, `/product/[slug]` terkait `<a>` vs `<Link>` — di luar scope.

## Next Step
- Desain ulang Home dari fondasi: tentukan IA/section baru berdasarkan `DESIGN.md` + `docs/frontend/14-DESIGN-SYSTEM.md`, lalu implement bertahap per section dengan TDD.
