# 00 — Project Brief

## Name

**Batik-Nusantara**

## Type

Single-store ecommerce for a batik UMKM/store.

## Product model

One store can sell many batik-derived products, including clothing, fabric, accessories, and other craft/fashion products.

## Goal

Build a production-oriented portfolio project that can later be handed to a real UMKM as a usable ecommerce foundation.

## Core differentiators

- Guest-first checkout.
- Flexible product variant/SKU engine.
- Multi-courier shipping abstraction.
- Payment webhook reliability.
- Cultural product storytelling.
- Custom admin operations dashboard.
- Modern, performant, animation-aware storefront.

## Primary stack

Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, GSAP, Framer Motion, Lenis, Laravel, PostgreSQL, Redis, Cloudflare R2, Midtrans, Biteship, Docker, VPS, Cloudflare.

## Architecture position

Modular monolith Laravel API + separate Next.js frontend. No microservices unless future measured scale makes them necessary.

## Current known open decisions

- Exact domain/brand assets.
- Final courier/service coverage and commercial account details.
- Email provider.
- VPS provider and resource limits.
- Final auth cookie topology between frontend/API domains.
- Tax/invoice requirements for the real business.
- Exact product attributes and variant policies.
