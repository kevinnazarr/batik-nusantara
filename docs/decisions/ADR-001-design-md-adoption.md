# ADR: Adopsi penuh DESIGN.md (DNA Airtable editorial) sebagai design system frontend

## Status

Accepted

## Context

Repository memiliki dua sumber design yang saling bertentangan:

1. `DESIGN.md` (root) — hasil ekstraksi DNA antarmuka Airtable: white canvas, ink near-black `#181d26` sebagai primary, Inter Display/Haas Grotesk weights 400-500, signature cards coral/forest/cream, tanpa hover states.
2. `docs/frontend/14-DESIGN-SYSTEM.md` + `docs/frontend/26-DESIGN-TOKENS.md` — brief asli: display serif + sans pairing, warm neutrals, satu aksen terinspirasi dye batik Indonesia.

Keduanya tidak bisa berlaku bersamaan. Sesuai AGENTS.md §4 (Source of Truth), konflik diselesaikan oleh keputusan user.

## Decision

DESIGN.md **diadopsi penuh** sebagai design system frontend Batik-Nusantara (opsi "adopsi penuh" dari tiga alternatif yang diusulkan). Estetika warm-batik (serif, warm neutrals, aksen dye) ditinggalkan. `docs/frontend/14-DESIGN-SYSTEM.md` dan `docs/frontend/26-DESIGN-TOKENS.md` direvisi agar konsisten dengan DESIGN.md.

## Consequences

- Semua implementasi UI frontend mengikuti token/komponen/aturan DESIGN.md.
- Look & feel menjadi editorial putih-polos ala Airtable, bukan warm-craft batik.
- Brand voltage dari batik (warna coral/forest/cream signature cards) tidak lagi mengacu pada dye tradisional — hanya nama warna yang kebetulan cocok.
- Revision terbatas pada 2 file docs tersebut; docs frontend lain (MOTION-SPEC, RESPONSIVE-SPEC, ACCESSIBILITY-QA) sudah kompatibel, tidak diubah.
- Known gaps DESIGN.md (hex pastel pixel-inferred, hover tidak terdokumentasi, form error/success states) diwarisi — diselesaikan saat implementasi komponen.

## Alternatives considered

1. Brief docs menang — DESIGN.md hanya referensi struktural. Ditolak: user memilih adopsi penuh.
2. Fusi — struktur/spacing/typography dari DESIGN.md, warna/brand dari brief batik. Ditolak: user memilih adopsi penuh.
3. Adopsi penuh DESIGN.md — dipilih.
