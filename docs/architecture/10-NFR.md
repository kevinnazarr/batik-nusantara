# 10 — Non-Functional Requirements

## Performance

Target awal:

- Mobile-first.
- Fast initial render untuk landing/category/product.
- Image optimization wajib.
- Lazy loading untuk media non-critical.
- Animation tidak boleh memblokir interaction.
- API p95 target awal < 500 ms untuk read endpoint sederhana pada production-like environment; ukur nyata dan revisi target berdasarkan workload.

## Availability

Untuk MVP UMKM, target realistis 99.5% monthly availability setelah deployment stabil.

## Scalability

Scale-up path:

1. Optimize query/index.
2. Add cache.
3. Queue expensive jobs.
4. CDN/media optimization.
5. Increase VPS resources.
6. Separate DB/worker if required.

Tidak perlu microservices sebelum bottleneck terbukti.

## Accessibility

- Semantic HTML.
- Keyboard navigable.
- Visible focus state.
- Alt text.
- Form label/error association.
- `prefers-reduced-motion`.
- Contrast yang memadai.

## SEO

- SSR/metadata melalui Next.js.
- Canonical URL.
- Product structured data.
- Open Graph.
- Sitemap.
- Robots.
- Clean slug.
- Indexable category/product/story.

## Reliability

- DB transaction untuk checkout critical section.
- Queue retry policy.
- Dead-letter/failed jobs visibility.
- Webhook replay-safe.
- Backup + restore test.

## Maintainability

- TypeScript strict.
- Laravel coding standards.
- Automated tests untuk domain-critical behavior.
- CI lint/test/build.
- API versioning.
- ADR untuk keputusan arsitektur besar.

## Browser/device

Prioritas:

- Modern Chromium.
- Safari iOS/iPadOS.
- Firefox.

Mobile viewport harus menjadi acceptance target pertama untuk checkout.
