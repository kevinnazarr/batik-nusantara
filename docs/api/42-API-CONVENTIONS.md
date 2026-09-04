# 42. API Conventions

- Prefix: `/api/v1`.
- JSON request/response bodies.
- Pagination uses `data`, `meta`, and optional `links`.
- Dates are ISO 8601 UTC.
- Money is integer IDR rupiah amounts in API payloads.
- Resource URLs use stable identifiers/slugs.
- Use nouns for resources and explicit action endpoints only for business transitions.
- Support a request ID in every response header/log context.
- Avoid leaking provider-specific response structures directly to frontend.
