# AGENTS.md

## Critical Rules

1. Baca `README.md`, `AGENTS.md`, dan dokumentasi yang relevan sebelum mengubah code.
2. Gunakan implementation dan konfigurasi repository sebagai sumber fakta; jangan mengarang version, endpoint, schema, command, atau test result.
3. Pertahankan architecture yang ada. Jangan menambah framework, package, service, atau abstraction besar tanpa kebutuhan yang jelas.
4. Jangan melakukan operasi destructive (`git reset --hard`, `git clean -fd`, drop database, destructive migration, force push) tanpa instruksi eksplisit.
5. Gunakan **TDD** untuk feature, bug fix, dan perubahan behavior: **RED → GREEN → REFACTOR → VALIDATE**.
6. **Jangan commit sebelum seluruh test yang relevan, lint, type-check, dan build yang applicable berstatus PASS.**
7. Jangan bypass test dengan menghapus assertion, skip, `.only`, atau melemahkan coverage hanya agar CI hijau.
8. Setelah task selesai, perbarui dokumentasi yang terdampak, buat `docs/logs/LOG-N.md`, dan sinkronkan Obsidian bila path/access tersedia.
9. Jangan memasukkan secret, credential, `.env`, private key, atau data sensitif ke Git.
10. Jangan melakukan commit/push otomatis kecuali workflow/user mengizinkannya. Sebelum meminta konfirmasi commit, quality gate harus GREEN.

## Project Overview

Batik-Nusantara adalah single-store ecommerce platform untuk toko batik Indonesia dengan tujuan production-ready sekaligus portfolio fullstack.

Architecture:

```text
apps/web  → Next.js + React + TypeScript
apps/api  → Laravel REST API
database  → PostgreSQL
cache     → Redis
storage   → Cloudflare R2
payment   → Midtrans
shipping  → Biteship
auth      → Laravel Sanctum + Google OAuth
```

Current baseline:

* Laravel: 13.x (versi aktual ditentukan oleh `apps/api/composer.lock`)
* Next.js: versi aktual ditentukan oleh `apps/web/package.json`
* Node/npm/PHP/Composer: gunakan versi yang tersedia dan kompatibel dengan lockfile/project config

## Commands

Run commands from the directory indicated.

### Frontend

```bash
cd apps/web
npm install
npm run dev
npm run lint
npm run build
```

Gunakan script yang benar-benar tersedia di `apps/web/package.json`. Jalankan `npm run` sebelum mengarang command lain.

### Backend

```bash
cd apps/api
composer install
php artisan about
php artisan route:list
php artisan test
```

Untuk database/configuration, ikuti `.env.example` dan dokumentasi infrastructure.

### Infrastructure

```bash
docker compose up -d
docker compose ps
docker compose down
```

Jangan mengasumsikan service selain yang didefinisikan pada `compose.yaml`.

## Project Structure

```text
batik-nusantara/
├── apps/
│   ├── web/          # Next.js
│   └── api/          # Laravel
├── docs/             # Product, design, architecture, API, DB, operations, logs
├── infra/            # Infrastructure/deployment
├── scripts/          # Project automation
└── .github/          # CI/workflows/templates
```

Pertahankan framework-native structure di dalam `apps/web` dan `apps/api` kecuali ada alasan yang terdokumentasi.

## Architecture & Conventions

### Frontend

* Gunakan Server Components secara default.
* Gunakan Client Components hanya untuk state/interaksi/browser API/animation.
* Pusatkan API access di `apps/web/src/lib/api/`.
* Gunakan reusable components; hindari component raksasa dan abstraction prematur.
* Gunakan Tailwind sebagai styling utama.

Animation:

* `GSAP` untuk timeline/complex/scroll animation.
* `Motion` untuk UI interaction/micro-interaction.
* `Lenis` untuk smooth scrolling.
* Hormati `prefers-reduced-motion`.

### Backend

Gunakan Laravel conventions dan struktur native.

Prefer:

```text
Http/
Models/
Requests/
Resources/
Policies/
Actions/
Services/
Jobs/
Events/
Listeners/
Enums/
```

* Controller tetap tipis.
* Validasi request kompleks menggunakan Form Request.
* Authorization dilakukan di backend menggunakan middleware/policy.
* Gunakan API Resources untuk response transformation yang membutuhkan standardisasi.
* Gunakan Jobs untuk pekerjaan asynchronous yang memang diperlukan.

### Domain Rules

```text
Product
→ Product Variant
→ SKU
→ Inventory
```

Gunakan variant/SKU untuk stock dan pricing; jangan hard-code `size`, `color`, atau attribute tertentu pada `products`.

Pisahkan:

```text
Order Status
Payment Status
Shipment Status
```

Order harus mempertahankan snapshot data transaksi penting.

Backend adalah source of truth untuk:

```text
price
stock
discount
shipping
order total
payment state
```

Guest checkout adalah first-class flow dan tidak memerlukan login.

## TDD & Quality Gates

Untuk feature atau behavior change:

```text
Requirement
↓
RED: write failing test
↓
GREEN: minimal implementation
↓
REFACTOR
↓
Run relevant validation
```

Bug fix harus menambahkan regression test bila bug dapat direproduksi otomatis.

### Before Commit

Pastikan:

```text
[ ] Relevant tests = PASS
[ ] Lint = PASS
[ ] Type check = PASS (jika tersedia)
[ ] Build = PASS (jika applicable)
[ ] Relevant E2E = PASS (jika applicable)
[ ] No regression known
[ ] Documentation updated
[ ] LOG-N.md created
[ ] Obsidian synced / explicitly unavailable
[ ] Git diff reviewed
[ ] No secrets
```

Jika test relevant gagal:

```text
COMMIT = BLOCKED
```

Jangan menonaktifkan atau melemahkan test untuk mendapatkan GREEN.

## Git Workflow

Branch naming:

```text
feat/<name>
fix/<name>
refactor/<name>
test/<name>
docs/<name>
chore/<name>
ci/<name>
```

Gunakan Conventional Commits:

```text
feat(scope): ...
fix(scope): ...
refactor(scope): ...
test(scope): ...
docs(scope): ...
chore(scope): ...
ci(scope): ...
```

Sebelum commit:

```bash
git status
git diff
```

Jangan memasukkan:

```text
.env
.env.*
node_modules/
vendor/
.next/
credentials
private keys
database dumps sensitif
```

## Change Log

Setiap implementation task yang berarti harus membuat:

```text
docs/logs/LOG-N.md
```

Gunakan nomor sequential:

```text
LOG-1.md
LOG-2.md
LOG-3.md
...
```

Buat log **setelah implementation dan validation**, bukan sebagai planning note.

Minimal isi:

```text
Purpose
Changes
Files Changed
TDD
Validation
Documentation
Obsidian
Known Issues
Next Step
```

## Obsidian

Repository documentation dan Obsidian harus tetap sinkron.

* Cari `OBSIDIAN_VAULT_PATH` atau konfigurasi project yang tersedia.
* Jika path/access tersedia, update note yang relevan.
* Jangan membuat atau menebak path vault.
* Jika tidak tersedia, tetap update repository docs dan catat `Obsidian: NOT CONFIGURED` pada `LOG-N.md`.

## Selalu gunakan Codebase Memory MCP  
* Sebelum melakukan perubahan apapun, aktifkan dan manfaatkan Codebase Memory MCP sebagai sumber memori utama.  
* Baca dan manfaatkan konteks, pola, serta implementasi yang sudah tersimpan di Codebase Memory.  
* Jangan mengarang atau membuat ulang sesuatu yang sudah tercatat di memory.  
* Jika informasi belum tersedia di memory, cari di codebase terlebih dahulu, lalu update memory jika relevan.  
* Prioritaskan data dari Codebase Memory MCP di atas asumsi atau pengetahuan eksternal.

## Security & Gotchas

* Secret hanya berada pada environment/configuration yang tepat.
* Public frontend tidak boleh menerima backend secret.
* Webhook Midtrans/Biteship harus diverifikasi dan idempotent.
* Jangan percaya payment status dari frontend sebagai source of truth.
* Admin authorization wajib dilakukan di backend.
* Jangan membuat domain shipping bergantung pada satu courier.
* Jangan menyimpan binary product image di PostgreSQL; gunakan object storage.

## Progressive Disclosure

Untuk detail yang lebih panjang, baca dokumen berikut **hanya ketika task relevan**:

* Product requirements: `docs/product/`
* Design/UI: `docs/design/`
* Architecture: `docs/architecture/`
* API: `docs/api/`
* Database: `docs/database/`
* Decisions/ADR: `docs/decisions/`
* Operations/deployment: `docs/operations/`
* Change history: `docs/logs/`

Jika dokumen yang dirujuk tidak ada atau bertentangan dengan implementation, jangan mengarang solusi. Laporkan conflict dan gunakan source of truth yang lebih tinggi.
