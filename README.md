<h1 align="center">Batik Nusantara</h1>

<p align="center">
  Platform e-commerce <strong>single-store</strong> untuk toko batik Indonesia.
  Dibangun dengan fokus pada performa, SEO, dan pengalaman pengguna.
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"></a>
  <a href="https://laravel.com"><img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel"></a>
  <a href="https://www.postgresql.org"><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL"></a>
  <a href="https://redis.io"><img src="https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white" alt="Redis"></a>
  <a href="https://www.docker.com"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"></a>
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=for-the-badge" alt="Status In Development">
</p>

---

## 📖 Overview

**Batik Nusantara** adalah platform e-commerce **single-store** untuk toko batik Indonesia — menjual kemeja, dress, blouse, kain batik, sarung, tas, dompet, dan produk batik lainnya.

Proyek dibangun sebagai aplikasi fullstack yang realistis dan siap dikembangkan menuju production, sekaligus menjadi project portfolio. Frontend **Next.js** di `apps/web`, backend **Laravel** di `apps/api`, dan dikembangkan secara *docs-driven* dengan dokumentasi lengkap di `batik-nusantara-docs/`.

## ✨ Features

- [ ] Katalog produk batik — pencarian, filter, dan halaman detail
- [ ] Varian & SKU produk (ukuran, warna, motif)
- [ ] Keranjang belanja & guest checkout
- [ ] Autentikasi (email/password & Google OAuth)
- [ ] Pembayaran melalui Midtrans
- [ ] Pengiriman multi-courier melalui Biteship
- [ ] Panel admin — manajemen produk, pesanan, dan pelanggan
- [ ] **Responsive** — mobile-first, nyaman di semua perangkat
- [ ] **Docs-driven** — seluruh requirement terdokumentasi di `batik-nusantara-docs/`

## 🛠 Tech Stack

### Frontend

| Technology | Deskripsi |
| ---------- | --------- |
| [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org) | React framework — App Router & Server Components. |
| [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev) | Library untuk membangun user interface. |
| [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org) | Type-safe JavaScript untuk kode yang lebih aman. |
| [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com) | Utility-first CSS framework. |
| [![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=black)](https://gsap.com) | Library animasi untuk pengalaman interaktif. |
| [![Motion](https://img.shields.io/badge/Motion-7C3AED?style=for-the-badge)](https://motion.dev) | Library animasi modern. |
| [![Lenis](https://img.shields.io/badge/Lenis-000000?style=for-the-badge)](https://lenis.darkroom.engineering) | Smooth scrolling yang natural. |

### Backend

| Technology | Deskripsi |
| ---------- | --------- |
| [![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com) | REST API utama — produk, pesanan, pembayaran, dan admin. |
| [![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net) | Bahasa pemrograman backend. |
| [![Laravel Sanctum](https://img.shields.io/badge/Laravel_Sanctum-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/docs/sanctum) | Authentication untuk SPA & token. |

### Database & Cache

| Technology | Deskripsi |
| ---------- | --------- |
| [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org) | Database utama untuk data transaksional. |
| [![Redis](https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io) | Cache dan queue (antrian job). |

### Infrastructure

| Technology | Deskripsi |
| ---------- | --------- |
| [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com) | Containerization — PostgreSQL & Redis untuk development. |
| [![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com) | CDN & DNS. |
| [![VPS](https://img.shields.io/badge/VPS-57606A?style=for-the-badge)](#) | Server deployment. |

### Payment, Shipping & Storage

| Technology | Deskripsi |
| ---------- | --------- |
| [![Midtrans](https://img.shields.io/badge/Midtrans-008DFF?style=for-the-badge)](https://midtrans.com) | Payment gateway untuk memproses pembayaran. |
| [![Biteship](https://img.shields.io/badge/Biteship-1B2430?style=for-the-badge)](https://biteship.com) | Shipping aggregator multi-courier. |
| [![Cloudflare R2](https://img.shields.io/badge/Cloudflare_R2-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/r2/) | Object storage S3-compatible. |

## 📁 Project Structure

```
batik-nusantara/
├── apps/
│   ├── web/              # Frontend Next.js (App Router)
│   └── api/              # Backend Laravel REST API
├── batik-nusantara-docs/ # Dokumentasi lengkap project
├── docs/                 # Dokumentasi pendukung
├── infra/                # Konfigurasi infrastruktur & deployment
├── scripts/              # Script otomasi development
├── .github/              # Workflow CI/CD
└── compose.yaml          # PostgreSQL 16 + Redis 7 (development)
```

## 🚀 Getting Started

Clone repository:

```bash
git clone git@github.com:kevinnazarr/batik-nusantara.git
cd batik-nusantara
```

Jalankan database & cache (Docker):

```bash
docker compose up -d
```

## 📚 Documentation

Dokumentasi lengkap project tersedia di [`batik-nusantara-docs/`](batik-nusantara-docs/docs/README.md) — berisi PRD, arsitektur, API spec, ERD, state machine, dan panduan pengembangan.

`README.md` ini hanyalah *entry point*. Seluruh keputusan arsitektur, requirement, dan standar pengembangan dijelaskan di dalam dokumentasi.

## 👤 Author

<div align="center">
  <a href="https://github.com/kevinnazarr">
    <img src="https://img.shields.io/badge/GitHub-kevinnazarr-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub kevinnazarr">
  </a>
  <br><br>
  <a href="https://github.com/kevinnazarr">
    <img src="https://github-readme-stats.vercel.app/api?username=kevinnazarr&show_icons=true&theme=default" alt="Profil GitHub kevinnazarr">
  </a>
</div>

## 📄 License

> Belum ditentukan — lisensi resmi belum ditetapkan.

---

<p align="center">
  Dibuat oleh <strong><a href="https://github.com/kevinnazarr">kevinnazarr</a></strong>
</p>