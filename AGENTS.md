# AGENTS.md

Dokumen ini adalah aturan kerja utama untuk AI coding agents yang bekerja pada repository **Batik-Nusantara**.

Agent WAJIB membaca dan mengikuti seluruh aturan dalam dokumen ini sebelum membuat atau mengubah codebase.

---

# 1. PROJECT IDENTITY

Nama project:

**Batik-Nusantara**

Jenis project:

**Single-store ecommerce platform untuk toko batik Indonesia.**

Batik-Nusantara menjual berbagai produk olahan batik seperti:

* Kemeja
* Dress
* Blouse
* Outer
* Kain
* Sarung
* Tas
* Dompet
* Scarf
* Produk batik lainnya

Project memiliki dua tujuan utama:

1. Menjadi ecommerce yang realistis dan production-ready.
2. Menjadi portfolio fullstack profesional sekaligus contoh kemampuan development untuk jasa pembuatan website.

---

# 2. CORE ARCHITECTURE

Repository menggunakan satu Git repository dengan struktur utama:

```text
batik-nusantara/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Laravel REST API
│
├── docs/
├── infra/
├── scripts/
├── .github/
├── compose.yaml
├── README.md
├── AGENTS.md
├── .gitignore
└── .editorconfig
```

## Frontend

Lokasi:

```text
apps/web/
```

Stack:

* Next.js
* React
* TypeScript
* Tailwind CSS
* GSAP
* Motion
* Lenis

## Backend

Lokasi:

```text
apps/api/
```

Stack:

* Laravel
* PHP
* REST API
* Laravel Sanctum
* PostgreSQL
* Redis

## External Services

* Midtrans
* Biteship
* Cloudflare R2
* Google OAuth
* Cloudflare

---

# 3. PHILOSOPHY

Agent harus memprioritaskan:

```text
Correctness
↓
Maintainability
↓
Security
↓
Performance
↓
Developer Experience
↓
Visual polish
```

Jangan mengejar kompleksitas arsitektur hanya agar terlihat canggih.

Gunakan prinsip:

> Simple until complexity is justified.

Jangan memperkenalkan:

* Microservices
* Event-driven architecture yang berlebihan
* Kubernetes
* Turborepo
* Nx
* Shared packages
* Service mesh
* CQRS penuh
* Repository pattern yang tidak diperlukan
* Abstraction layer berlapis-lapis

kecuali ada kebutuhan nyata dan alasan teknis yang terdokumentasi.

---

# 4. SOURCE OF TRUTH

Gunakan hirarki berikut:

```text
1. Product/business decision
2. Architecture decision
3. Existing implementation
4. Documentation
5. Agent inference
```

Namun agent TIDAK BOLEH diam-diam mengambil keputusan yang mengubah architecture atau business rule hanya berdasarkan inference.

Jika menemukan konflik antara:

```text
code
documentation
architecture
business requirement
```

agent harus:

1. Mendeteksi konflik.
2. Menentukan dampak.
3. Tidak melakukan perubahan besar secara diam-diam.
4. Mencatat konflik tersebut.
5. Menjelaskan konflik dalam final report.

Jika keputusan harus dibuat untuk melanjutkan pekerjaan, keputusan tersebut harus dicatat di:

```text
docs/decisions/
```

menggunakan format ADR.

---

# 5. MANDATORY INITIAL INSPECTION

Sebelum mengubah codebase, agent WAJIB memeriksa:

```text
AGENTS.md
README.md
docs/
apps/web/package.json
apps/api/composer.json
apps/api/routes/
apps/api/app/
database/migrations/
compose.yaml
.github/
```

Agent juga harus mendeteksi:

* versi Node.js
* versi npm
* versi PHP
* versi Composer
* versi Laravel
* versi Next.js
* versi dependency utama

Jangan mengasumsikan versi framework.

Gunakan versi yang benar-benar terpasang di repository.

---

# 6. DO NOT DESTROY EXISTING WORK

Agent DILARANG:

* Menghapus pekerjaan existing tanpa alasan.
* Mengganti konfigurasi penting secara massal.
* Melakukan reset Git.
* Melakukan `git reset --hard`.
* Melakukan `git clean -fd`.
* Menghapus database.
* Menghapus migration.
* Menghapus dokumentasi.
* Menghapus file user tanpa izin eksplisit.

Kecuali tindakan tersebut secara eksplisit diminta oleh user.

Jika sebuah file perlu diganti secara besar-besaran, jelaskan alasannya.

---

# 7. DEVELOPMENT WORKFLOW

Setiap task harus mengikuti workflow:

```text
Inspect
↓
Understand
↓
Plan
↓
Implement
↓
Validate
↓
Update documentation
↓
Write LOG
↓
Sync Obsidian
↓
Review diff
↓
Report
```

Agent tidak boleh langsung coding sebelum memahami existing implementation.

---

# 8. SMALL CHANGES FIRST

Untuk task yang kompleks:

Jangan mengubah puluhan file sekaligus jika bisa dilakukan bertahap.

Prioritaskan:

```text
small change
↓
test
↓
review
↓
next change
```

Setiap perubahan besar harus memiliki alasan yang jelas.

---

# 9. FRONTEND RULES

Frontend menggunakan:

```text
Next.js
React
TypeScript
Tailwind CSS
```

## General

Gunakan:

* Server Components secara default.
* Client Components hanya jika memang membutuhkan browser API, state interaktif, event handler, animation, atau interaksi client-side.
* TypeScript strict.
* Reusable components.
* Semantic HTML.
* Accessible UI.

Hindari:

* `"use client"` tanpa alasan.
* Global state tanpa kebutuhan.
* Duplicate API calls.
* Fetch logic tersebar di banyak component.
* Business logic berat di JSX.
* Component raksasa.

## Animation

Gunakan:

```text
GSAP
Motion
Lenis
```

dengan pembagian:

```text
Complex / timeline / scroll animation
→ GSAP

UI interaction / micro interaction
→ Motion

Smooth scrolling
→ Lenis
```

Jangan menggunakan ketiganya untuk satu animasi sederhana.

Animation tidak boleh:

* Menghambat accessibility.
* Menghambat page performance.
* Menghilangkan content dari SEO.
* Membuat UX terasa berlebihan.

Pertimbangkan reduced-motion preference.

---

# 10. BACKEND RULES

Backend menggunakan:

```text
Laravel REST API
```

Gunakan Laravel convention terlebih dahulu.

Prefer:

```text
Controllers
Requests
Resources
Models
Policies
Jobs
Events
Listeners
Actions
Services
Enums
```

## Controllers

Controller harus tipis.

Business logic kompleks sebaiknya berada di:

```text
Actions/
Services/
Jobs/
```

## Validation

Gunakan:

```text
Form Request
```

untuk validasi request yang kompleks.

Jangan menaruh validasi panjang langsung di controller.

## Authorization

Gunakan:

```text
Policies
Middleware
```

Jangan hanya mengandalkan frontend untuk authorization.

## Responses

Gunakan API Resources ketika response membutuhkan transformasi atau struktur API yang konsisten.

---

# 11. DATABASE RULES

Database utama:

```text
PostgreSQL
```

Gunakan migration sebagai source of truth struktur database.

Jangan mengubah database production secara manual tanpa migration yang sesuai.

Untuk data transaksi, prioritaskan historical integrity.

Order harus menyimpan snapshot informasi penting seperti:

* nama product
* SKU
* harga
* customer information
* shipping address
* shipping information

Jangan membuat order lama ikut berubah hanya karena data master berubah.

---

# 12. ECOMMERCE DOMAIN RULES

Model product utama:

```text
Product
↓
Product Variant
↓
SKU
↓
Inventory
```

Jangan membuat sistem product hanya menggunakan:

```text
product.size
product.color
product.stock
```

karena Batik-Nusantara menjual berbagai tipe produk.

Variant harus dapat mendukung kombinasi option.

Contoh:

```text
Size
Color
Material
Length
```

Status berikut harus tetap terpisah:

```text
Order Status
Payment Status
Shipment Status
```

Jangan menyatukan ketiganya menjadi satu status.

---

# 13. CHECKOUT RULES

Guest checkout adalah fitur utama.

Customer tidak boleh dipaksa membuat account sebelum checkout.

Flow:

```text
Product
↓
Cart
↓
Checkout
↓
Guest / Registered
↓
Shipping
↓
Payment
↓
Order
```

Backend adalah source of truth untuk:

* harga
* stock
* discount
* shipping
* order total
* payment status

Frontend tidak boleh menjadi sumber kebenaran transaksi.

---

# 14. PAYMENT RULES

Payment:

```text
Midtrans
```

Webhook harus:

* divalidasi
* aman
* idempotent
* dicatat
* tidak diproses berulang

Jangan menganggap:

```text
frontend payment callback = payment final
```

Status payment harus ditentukan berdasarkan backend/provider confirmation.

---

# 15. SHIPPING RULES

Shipping utama:

```text
Biteship
```

Biteship diperlakukan sebagai abstraction terhadap beberapa courier.

Jangan membuat domain shipping terikat pada satu courier.

Contoh:

```text
Shipping Provider
├── J&T
├── JNE
├── SiCepat
└── lainnya
```

---

# 16. STORAGE RULES

Object storage:

```text
Cloudflare R2
```

Jangan menyimpan binary image product di PostgreSQL.

Database hanya menyimpan metadata/path/URL yang diperlukan.

Secret R2 TIDAK BOLEH berada di source code.

---

# 17. SECURITY RULES

DILARANG commit:

```text
.env
.env.local
API keys
OAuth secrets
Midtrans credentials
Biteship credentials
R2 credentials
private keys
certificates
```

Gunakan:

```text
.env.example
```

untuk dokumentasi environment.

Sebelum commit, periksa:

```bash
git diff
git status
```

Pastikan tidak ada credential.

---

# 18. TESTING RULES

Setiap perubahan behavior penting harus memiliki validasi.

Minimal pertimbangkan:

```text
Lint
Type check
Unit test
Feature test
E2E test
```

sesuai area perubahan.

Untuk ecommerce, test kritikal meliputi:

* checkout
* price calculation
* discount
* stock
* authentication
* authorization
* payment webhook
* shipping webhook
* order state transition

Jangan menghapus test hanya agar CI lulus.

---

# 19. DOCUMENTATION RULE

Setiap perubahan yang mengubah:

* Architecture
* API
* Database
* Domain behavior
* Business logic
* Environment
* Deployment
* Development workflow

WAJIB diikuti update dokumentasi yang relevan.

Contoh:

```text
API change
→ docs/api/

Database change
→ docs/database/

Architecture change
→ docs/architecture/

Decision
→ docs/decisions/
```

Dokumentasi bukan pekerjaan opsional.

---

# 20. MANDATORY CHANGE LOG

Setiap task yang mengubah codebase WAJIB membuat atau memperbarui log berbentuk Markdown.

Lokasi:

```text
docs/logs/
```

Format filename:

```text
LOG-1.md
LOG-2.md
LOG-3.md
...
```

Nomor harus berurutan.

Jangan membuat:

```text
LOG-final.md
LOG-latest.md
LOG-temp.md
LOG-update.md
```

Format wajib:

```text
LOG-N.md
```

## Cara menentukan nomor

Agent harus membaca:

```text
docs/logs/
```

dan mencari LOG dengan nomor terbesar.

Contoh:

```text
LOG-1.md
LOG-2.md
LOG-3.md
```

maka log berikutnya:

```text
LOG-4.md
```

Jika belum ada log:

```text
LOG-1.md
```

Jangan mengubah nomor log yang sudah ada.

---

# 21. LOG FORMAT

Setiap `LOG-N.md` minimal harus mempunyai:

````md
# LOG-N — <judul perubahan>

## Metadata

- Tanggal:
- Agent:
- Branch:
- Commit:
- Scope:
- Status:

## Tujuan

Jelaskan tujuan perubahan.

## Perubahan

Jelaskan perubahan codebase.

## File yang Diubah

- `path/to/file`
- `path/to/file`

## Technical Notes

Jelaskan keputusan teknis penting.

## Validation

Jelaskan command/test yang dijalankan.

Contoh:

```bash
npm run lint
npm run build
php artisan test
````

## Result

Jelaskan hasil validation.

## Documentation

Jelaskan dokumentasi apa yang diperbarui.

## Obsidian

Jelaskan note Obsidian yang diperbarui/disinkronkan.

## Known Issues

Tuliskan issue yang masih ada.

## Next Step

Tuliskan langkah berikutnya.

````

Log harus berisi fakta aktual.

Jangan membuat hasil test palsu.

---

# 22. LOG MUST BE CREATED AFTER IMPLEMENTATION

Urutan:

```text
Implement
↓
Validate
↓
Review changes
↓
Create LOG-N.md
````

Jangan menulis log sebagai rencana sebelum pekerjaan dilakukan.

Log adalah **historical record**, bukan TODO.

---

# 23. ALWAYS UPDATE CODEBASE DOCUMENTATION

Jika perubahan code membuat dokumentasi existing menjadi tidak akurat, agent WAJIB memperbaruinya.

Contoh:

Jika endpoint berubah:

```text
code
+
docs/api/
+
OpenAPI
```

Jika schema berubah:

```text
migration
+
ERD
+
data dictionary
```

Jika architecture berubah:

```text
architecture docs
+
ADR
+
diagram
```

Dokumentasi yang outdated dianggap technical debt dan harus diperbaiki ketika ditemukan dalam scope task.

---

# 24. OBSIDIAN SYNCHRONIZATION

Batik-Nusantara menggunakan Obsidian sebagai knowledge/documentation workspace.

Agent WAJIB menjaga sinkronisasi antara:

```text
Repository docs
↔
Obsidian
```

Namun agent DILARANG mengarang lokasi vault.

## Sebelum sinkronisasi

Agent harus mencari konfigurasi/path Obsidian yang tersedia.

Contoh kemungkinan:

```text
OBSIDIAN_VAULT_PATH
```

atau konfigurasi project lain.

Jika path Obsidian belum dikonfigurasi, agent harus:

1. Tetap memperbarui repository documentation.
2. Mencatat pada `LOG-N.md` bahwa Obsidian sync belum dilakukan.
3. Tidak membuat path palsu.
4. Tidak menyalin file ke lokasi yang tidak diketahui.

Jika path Obsidian tersedia dan agent memiliki akses:

```text
Repository docs
↓
Update corresponding Obsidian notes
↓
Verify
↓
Record sync in LOG-N.md
```

---

# 25. OBSIDIAN ORGANIZATION

Jika struktur vault tersedia, pertahankan struktur existing.

Jangan merombak seluruh vault hanya untuk satu task.

Minimal konsep dokumentasi:

```text
Batik-Nusantara/
├── Product/
├── Design/
├── Architecture/
├── API/
├── Database/
├── Operations/
├── Decisions/
└── Logs/
```

Jika struktur aktual berbeda, ikuti struktur vault yang ada.

---

# 26. OBSIDIAN NOTE RULES

Ketika memperbarui note Obsidian:

* Pertahankan terminology project.
* Jangan menghapus informasi lama tanpa alasan.
* Perbarui bagian yang outdated.
* Gunakan internal links jika memang sudah digunakan oleh vault.
* Jangan membuat duplicate note jika note yang sesuai sudah ada.
* Jangan membuat banyak note kecil yang tidak perlu.

Gunakan Obsidian sebagai knowledge base, bukan hanya mirror filesystem.

---

# 27. CODE + DOCS + OBSIDIAN CONSISTENCY

Setelah task selesai, agent WAJIB memastikan:

```text
Code
  ↓
Documentation
  ↓
Obsidian
```

tidak memiliki konflik.

Contoh:

Jika code menggunakan:

```text
POST /api/v1/orders
```

maka dokumentasi tidak boleh masih menyebut:

```text
POST /api/orders
```

Jika database menggunakan:

```text
product_variants
```

maka ERD/data dictionary tidak boleh menggunakan nama berbeda tanpa penjelasan.

---

# 28. GIT RULES

Gunakan Conventional Commits jika project telah mengaktifkannya.

Contoh:

```text
feat: add product catalog
fix: prevent duplicate payment webhook
refactor: simplify order service
docs: update checkout flow
test: add order feature tests
chore: update development tooling
```

Branch naming:

```text
feat/...
fix/...
refactor/...
docs/...
chore/...
test/...
```

Jangan membuat commit yang mencampur banyak concern tidak terkait.

---

# 29. BEFORE COMMIT

Sebelum commit:

```bash
git status
git diff
```

Periksa:

* Tidak ada `.env`.
* Tidak ada credentials.
* Tidak ada generated dump.
* Tidak ada node_modules.
* Tidak ada vendor.
* Tidak ada file temporary.
* Tidak ada debug output.
* Tidak ada secret.
* Tidak ada perubahan tidak terkait.

---

# 30. AFTER IMPLEMENTATION

Setelah implementation:

1. Jalankan test yang relevan.
2. Review git diff.
3. Perbarui documentation.
4. Buat `docs/logs/LOG-N.md`.
5. Sinkronkan Obsidian jika tersedia.
6. Review ulang consistency.
7. Berikan final report.

---

# 31. FINAL REPORT

Setiap task harus menghasilkan laporan ringkas:

```text
## Summary

<what was changed>

## Files Changed

- ...
- ...

## Validation

- ...
- ...

## Documentation

- ...

## Log

docs/logs/LOG-N.md

## Obsidian

Updated:
- ...

Not updated:
- <reason>

## Known Issues

- ...

## Next Step

- ...
```

Jangan menyatakan sesuatu selesai jika belum diverifikasi.

---

# 32. ERROR HANDLING

Jika command gagal:

Jangan menyembunyikannya.

Catat:

```text
Command
Error
Possible cause
Action taken
Result
```

Jika masalah belum selesai:

```text
Status: unresolved
```

bukan:

```text
Status: completed
```

---

# 33. NO FABRICATION

Agent DILARANG mengarang:

* API endpoint
* database schema
* package
* version
* environment variable
* test result
* deployment result
* screenshot
* URL
* credential
* business requirement
* documentation link

Jika informasi tidak diketahui:

```text
Unknown / Not configured / Not available
```

lebih baik daripada membuat asumsi yang terlihat meyakinkan.

---

# 34. DEPENDENCY RULES

Sebelum menambahkan dependency:

1. Pastikan memang diperlukan.
2. Periksa dependency existing.
3. Gunakan package yang established.
4. Hindari duplicate package.
5. Periksa compatibility dengan framework version.
6. Update package lock.
7. Dokumentasikan dependency jika signifikan.

Jangan menambahkan library hanya untuk menyelesaikan masalah yang sudah dapat diselesaikan oleh framework atau CSS/utility existing.

---

# 35. DATABASE MIGRATION RULES

Migration harus:

* Deterministic
* Reversible jika memungkinkan
* Memiliki nama yang jelas
* Tidak mengandung data production
* Tidak destructive tanpa alasan

Jika migration bersifat destructive:

```text
DROP
DELETE
ALTER destructive
```

agent harus:

1. Menilai dampak.
2. Menjelaskan risiko.
3. Mencatat keputusan.
4. Tidak menjalankan terhadap production tanpa explicit authorization.

---

# 36. API DESIGN RULES

API harus menggunakan versioning.

Target:

```text
/api/v1
```

Response harus konsisten.

Endpoint harus:

* RESTful
* predictable
* authenticated jika diperlukan
* authorized
* documented

Perubahan API yang breaking wajib diperbarui pada:

```text
OpenAPI
API docs
tests
frontend client
LOG-N.md
Obsidian
```

---

# 37. PERFORMANCE

Jangan melakukan premature optimization.

Namun jangan mengabaikan:

* image optimization
* bundle size
* unnecessary client components
* unnecessary database queries
* N+1 queries
* excessive API calls
* unbounded list endpoints
* large payloads

Untuk frontend, prioritaskan Core Web Vitals dan accessibility.

Untuk backend, prioritaskan query correctness dan pagination.

---

# 38. ACCESSIBILITY

Frontend harus mempertimbangkan:

* semantic HTML
* keyboard navigation
* focus state
* aria labels bila diperlukan
* contrast
* form labels
* error messages
* reduced motion

Jangan membuat interaksi yang hanya dapat digunakan dengan mouse.

---

# 39. SEO

Untuk storefront:

* gunakan semantic metadata
* title
* description
* canonical
* Open Graph bila relevan
* structured data ketika fitur telah diimplementasikan
* SEO-friendly URLs

Jangan memasukkan data SEO palsu.

---

# 40. ADMIN SECURITY

Admin functionality harus selalu dilindungi oleh backend authorization.

Frontend hiding:

```text
if admin show menu
```

BUKAN security.

Backend harus tetap memverifikasi:

```text
authenticated
+
authorized
```

pada setiap admin endpoint.

---

# 41. ENVIRONMENT SEPARATION

Bedakan:

```text
local
testing
staging
production
```

Jangan menggunakan production credential pada local development.

Jangan commit environment secret.

Jika environment baru diperkenalkan, update:

```text
.env.example
documentation
LOG-N.md
Obsidian
```

---

# 42. DECISION RECORDS

Keputusan architecture yang memiliki dampak jangka panjang harus dicatat sebagai ADR.

Lokasi:

```text
docs/decisions/
```

Contoh:

```text
ADR-001-nextjs-frontend.md
ADR-002-laravel-api.md
ADR-003-postgresql.md
ADR-004-payment-midtrans.md
```

Gunakan ADR untuk:

* Architecture
* major technology choice
* data design
* authentication strategy
* infrastructure decision
* major trade-off

Jangan membuat ADR untuk perubahan kecil.

---

# 43. TASK BOUNDARIES

Agent harus bekerja sesuai scope task.

Jika menemukan masalah unrelated:

```text
DO NOT silently expand scope
```

Catat:

```text
Out of scope
```

pada final report atau `LOG-N.md`.

Lakukan perbaikan tambahan hanya jika:

* Dibutuhkan agar task utama dapat bekerja.
* Security issue kritis ditemukan.
* Broken configuration langsung menghambat task.

---

# 44. WHEN UNCERTAIN

Jika ada ketidakpastian teknis:

1. Inspect existing code.
2. Inspect documentation.
3. Check package/framework behavior.
4. Prefer established project convention.
5. Choose the smallest safe change.

Jangan memperkenalkan architecture baru hanya karena itu lebih menarik.

---

# 45. DEFINITION OF DONE

Task hanya dianggap selesai jika:

```text
Code implemented
+
Relevant tests passed
+
No obvious regression
+
Documentation updated
+
LOG-N.md created
+
Obsidian synced when available
+
Git diff reviewed
```

Jika salah satu belum dapat dilakukan:

jelaskan alasannya.

---

# 46. FINAL PRINCIPLE

AI agent bekerja sebagai maintainer project, bukan hanya code generator.

Setiap perubahan harus menjaga tiga hal:

```text
                BATIK-NUSANTARA
                       │
          ┌────────────┼────────────┐
          │            │            │
        CODE         DOCS        KNOWLEDGE
          │            │            │
          └────────────┴────────────┘
                       │
                    CONSISTENT
```

Kode yang bagus tetapi dokumentasinya outdated dianggap incomplete.

Dokumentasi yang bagus tetapi implementation-nya berbeda dianggap incomplete.

Knowledge yang tidak dicatat akan menyebabkan context hilang pada pekerjaan berikutnya.

Karena itu setiap perubahan yang berarti harus meninggalkan **jejak yang dapat dipahami oleh developer berikutnya**, baik melalui code, documentation, `LOG-N.md`, maupun Obsidian.

**Prioritas utama: correctness, maintainability, traceability, dan consistency.**
