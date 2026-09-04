# 12 — Deployment Plan

## Target topology

```text
                Internet
                   |
               Cloudflare
                   |
        +----------+----------+
        |                     |
   Next.js app          Laravel API
        |                     |
        |               +-----+-----+
        |               |           |
        |           PostgreSQL    Redis
        |                           |
        |                         Queue
        |
        +-------------------------------+
                                        |
                                   Cloudflare R2

External:
- Midtrans
- Biteship
- Google OAuth
```

## VPS baseline

- Linux LTS.
- Docker + Docker Compose.
- Reverse proxy Nginx/Caddy.
- Firewall.
- SSH key auth.
- Automatic security updates jika feasible.
- Monitoring/log rotation.

## Container services

```text
app        Laravel web/API
worker     Laravel queue worker
scheduler  Laravel scheduler
proxy      Nginx/Caddy
redis      Redis
postgres   PostgreSQL (atau managed DB jika tersedia)
```

Next.js dapat berjalan di Vercel atau container terpisah. Untuk target VPS-only, Next.js juga dapat di-container-kan, tetapi keputusan akhir mengikuti resource VPS.

## CI/CD

On push/PR:

- lint;
- typecheck;
- unit/feature tests;
- build.

On deploy:

1. Pull immutable commit/image.
2. Run migration with backup policy.
3. Restart workers gracefully.
4. Health check.
5. Smoke test.

## Backup

Minimum:

- automated PostgreSQL backup;
- retention policy;
- R2 object retention/backup strategy;
- periodic restore test.

## Environment separation

- local
- staging
- production

Jangan memakai credential production untuk local development.

## Domain

Suggested:

- `batik-nusantara.id` — storefront
- `api.batik-nusantara.id` — API
- `admin.batik-nusantara.id` atau `/admin` — admin surface

Topologi final dapat berubah, tetapi origin dan cookie/CORS strategy harus konsisten.
