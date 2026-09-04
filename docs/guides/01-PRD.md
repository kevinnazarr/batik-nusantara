# 01 — Product Requirements Document

## 1. Product overview

**Batik-Nusantara** adalah website ecommerce single-store untuk toko batik Indonesia dengan katalog produk beragam. Produk dapat berupa pakaian, kain, aksesoris, dan produk olahan batik lain.

Website berfungsi sebagai:

- storefront untuk customer;
- mesin checkout dan order;
- pusat content/storytelling tentang batik;
- admin dashboard untuk operasional toko;
- fondasi portfolio fullstack production-oriented.

## 2. Problem statement

UMKM/toko batik membutuhkan kanal penjualan digital yang:

- mudah dipakai customer tanpa wajib membuat akun;
- mendukung katalog produk dengan variant/SKU fleksibel;
- menerima pembayaran online;
- menghitung/memilih pengiriman multi-courier;
- memberi admin kendali atas katalog, stok, order, promosi, dan konten;
- tetap cepat, mudah dipelihara, dan menarik secara visual.

## 3. Goals

### Business goals

- Menjual berbagai produk batik melalui satu storefront.
- Meningkatkan kepercayaan melalui product storytelling dan detail produk.
- Mengurangi friksi checkout.
- Menyediakan fondasi yang cukup untuk digunakan UMKM nyata.

### Product goals

- Guest checkout tersedia.
- Registered customer dapat menggunakan email/password atau Google.
- Product variant dan inventory mendukung berbagai tipe produk.
- Payment menggunakan Midtrans.
- Shipping memakai aggregator multi-courier.
- Admin dapat mengoperasikan toko tanpa coding.

### Portfolio goals

Project harus dapat mendemonstrasikan kompetensi:

- modern React/Next.js;
- REST API Laravel;
- PostgreSQL relational modeling;
- authentication/authorization;
- payment gateway + webhook;
- shipping integration;
- object storage;
- Docker/VPS deployment;
- UX, SEO, performance, testing, dan security.

## 4. Target users

### Primary customer

Pembeli umum Indonesia yang mencari:

- pakaian batik;
- kain batik;
- aksesoris batik;
- hadiah/oleh-oleh;
- produk batik untuk kebutuhan formal maupun casual.

### Admin

Pemilik toko atau operator yang mengelola produk, stok, order, promo, banner, dan content.

## 5. Personas

### Persona A — Guest shopper

Mencari produk melalui Google/social media, ingin cepat melihat produk, mengetahui harga dan ongkir, lalu membeli tanpa membuat akun.

### Persona B — Returning shopper

Sudah pernah membeli. Menginginkan riwayat order, alamat tersimpan, dan wishlist.

### Persona C — Store admin

Ingin mengubah produk, stok, harga, status order, dan konten tanpa bantuan developer.

## 6. Core value proposition

> **Satu toko, berbagai olahan batik Nusantara — mudah ditemukan, mudah dibeli, dan jelas ceritanya.**

## 7. Product principles

1. **Commerce first** — jalur browse → product → cart → checkout harus selalu jelas.
2. **Guest-friendly** — akun adalah convenience, bukan barrier.
3. **Product truth** — harga/stok berasal dari server.
4. **Cultural storytelling** — konten mendukung pemahaman produk, bukan sekadar dekorasi.
5. **Operational simplicity** — admin workflow harus sederhana untuk UMKM.
6. **Progressive enhancement** — animasi memperkuat pengalaman tanpa mengganggu aksesibilitas/performance.

## 8. Functional requirements

### Customer

- Homepage.
- Product listing.
- Search.
- Category/filter/sort.
- Product detail.
- Variant selection.
- Cart.
- Guest checkout.
- Registered checkout.
- Shipping rate selection.
- Midtrans payment.
- Order confirmation.
- Order tracking.
- Order history.
- Profile.
- Address book.
- Wishlist.
- Basic promotion/coupon.

### Admin

- Dashboard.
- Product CRUD.
- Category CRUD.
- Product option/variant/SKU management.
- Inventory management.
- Order management.
- Customer management.
- Promotion/coupon.
- Banner.
- Story/content.
- Audit log.

## 9. Business rules

- Customer tidak wajib login untuk checkout.
- Setiap variant yang dijual memiliki SKU unik.
- Stok divalidasi kembali saat checkout di backend.
- Harga order item disimpan sebagai snapshot.
- Customer/address pada order disimpan sebagai snapshot transaksi.
- Payment status tidak boleh ditentukan hanya dari frontend.
- Webhook provider harus diverifikasi dan idempotent.
- Order number harus unik dan tidak menjadi satu-satunya rahasia akses guest order.
- Produk draft/archived tidak boleh dibeli.
- Quantity tidak boleh melebihi stock/sellable quantity.

## 10. Success metrics

### Product metrics

- Product detail → add to cart rate.
- Cart → checkout start rate.
- Checkout → payment success rate.
- Guest checkout completion rate.
- Order cancellation rate.
- Repeat purchase rate.

### Technical metrics

- Core Web Vitals sehat untuk halaman customer.
- API error rate rendah.
- Webhook processing success rate tinggi.
- Zero duplicate charge/order effect dari webhook retry.
- Backup database berhasil.

## 11. MVP acceptance

MVP dianggap layak demo/soft launch ketika:

- customer dapat menemukan produk;
- customer dapat memilih variant;
- customer dapat checkout sebagai guest;
- shipping rate dapat dihitung;
- payment Midtrans dapat dilakukan di environment target;
- webhook mengubah payment/order state dengan benar;
- admin dapat memproses order;
- admin dapat mengubah stok dan catalog;
- customer dapat memperoleh status/tracking order;
- deployment dapat diulang dari repository.
