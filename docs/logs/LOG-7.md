# LOG-7 — Footer redesign + Lenis smooth scroll + Tailwind canonical fixes

## Metadata
- Tanggal: 2026-09-08
- Agent: Buffy (Codebuff)
- Branch: main
- Commit: belum (menunggu user)
- Scope: `apps/web/src/components/layout/footer/**`, `apps/web/src/data/components/footer/**`, `apps/web/src/components/providers/smooth-scroll.tsx`, `apps/web/src/app/layout.tsx`

## Tujuan
1. Perbaiki Tailwind CSS canonical class warnings di footer
2. Redesign footer mengikuti referensi desain BelArosa Chalet (3 kolom: Contact | Navigation | Newsletter)
3. Ganti brand "Serat Batik Atelier" → "Batik Nusantara" di seluruh footer
4. Implementasikan Lenis smooth scrolling secara global
5. Tambahkan logo `logo-batik-nusantara-footer.webp` di footer

## Perubahan

### 1. Tailwind canonical class fixes (`footer/index.tsx`)
- `max-w-[1200px]` → `max-w-300`
- `max-w-[280px]` → `max-w-70`
- `tracking-[0.05em]` → `tracking-wider`
- Catatan: `pt-30` → `pt-120` TIDAK diterapkan karena menghasilkan nilai berbeda (120px vs 480px)

### 2. Footer redesign — layout BelArosa style
- **Sebelum**: Logo kiri + deskripsi + 4 kolom navigasi (Shop, Collections, Story, About)
- **Sesudah**: Logo center + tagline center di atas, 3 kolom di bawah (Contact, Navigation 2 sub-kolom, Newsletter form)
- Grid: `lg:grid-cols-3` (dari `lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]`)
- Bottom bar: Social icons kiri, links tengah, copyright kanan

### 3. Brand update
- Copyright: `© 2026 Serat Batik Atelier · Yogyakarta, Indonesia` → `© 2026 Batik Nusantara`
- FOOTER_BRAND dihapus dari data, diganti dengan FOOTER_CONTACT + FOOTER_NEWSLETTER

### 4. Logo footer
- Tambah `logo-batik-nusantara-footer.webp` di section atas center
- Height: `h-20` (80px)

### 5. Lenis smooth scroll global
- `components/providers/smooth-scroll.tsx` — ReactLenis dari `lenis/react` dengan `root` + `autoRaf: true`
- Import `lenis/dist/lenis.css`
- Di-wrap di `app/layout.tsx` mengelilingi Navigation + children + Footer

### 6. Footer spacing optimization
- Top section: `py-16` → `py-24`
- Middle section: `py-16 gap-12` → `py-20 gap-16`
- Heading margin: `mb-6` → `mb-8`
- Navigation gap: `gap-y-3` → `gap-y-5`
- Form gap: `gap-4` → `gap-6`, input `pb-2` → `pb-3`, button `mt-2 py-2.5` → `mt-4 py-3`
- Bottom bar: `py-6` → `py-8`

## File yang Diubah
- `apps/web/src/components/layout/footer/index.tsx` — M (rewrite total)
- `apps/web/src/components/layout/footer/newsletter-form.tsx` — A (baru, Client Component)
- `apps/web/src/data/components/footer/index.ts` — M (rewrite data structure)
- `apps/web/src/data/components/footer/__tests__/footer.test.ts` — M (update test)
- `apps/web/src/components/providers/smooth-scroll.tsx` — A (baru)
- `apps/web/src/app/layout.tsx` — M (tambah SmoothScroll wrapper)

## TDD
- Footer test di-update: `FOOTER_BRAND` → `FOOTER_CONTACT`, `FOOTER_COLUMNS` → `FOOTER_NAV_COLUMNS`, tambah `FOOTER_NEWSLETTER` assertions
- Semua test PASS

## Validasi
- `npm run lint` → PASS
- `npm run build` → PASS
- `tsc --noEmit` → PASS

## Documentation
- Tidak ada perubahan docs selain log ini

## Obsidian
- Obsidian: NOT CONFIGURED (`OBSIDIAN_VAULT_PATH` tidak ditemukan)

## Known Issues
- Form newsletter belum terkoneksi ke backend/API ( hanya UI )
- Data kontak (alamat, telepon, email) masih placeholder

## Next Step
- Hubungkan form newsletter ke backend/API
- Isi data kontak yang sebenarnya
- Implementasikan ScrollToTop component (seperti vinndeev)
