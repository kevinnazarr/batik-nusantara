# 20 — Release Checklist

## Product

- [ ] MVP stories accepted.
- [ ] Product catalog seeded with realistic data.
- [ ] Category navigation validated.
- [ ] Guest checkout tested on mobile.
- [ ] Customer account tested.

## Payment

- [ ] Midtrans sandbox tested.
- [ ] Production credential configured separately.
- [ ] Webhook endpoint reachable over HTTPS.
- [ ] Signature/notification verification tested.
- [ ] Duplicate webhook scenario tested.

## Shipping

- [ ] Biteship sandbox/test flow verified.
- [ ] Origin address correct.
- [ ] Weight data present for all sellable variants.
- [ ] Shipping rates verified for representative destinations.
- [ ] Tracking webhook tested.

## Security

- [ ] CORS restricted.
- [ ] Rate limits active.
- [ ] Secrets not in Git history.
- [ ] Debug mode disabled in production.
- [ ] Secure cookies enabled where applicable.
- [ ] Admin authorization tested.
- [ ] Guest order access protected by secret/token.

## Infrastructure

- [ ] HTTPS.
- [ ] DNS/Cloudflare configured.
- [ ] PostgreSQL backup working.
- [ ] Restore drill completed.
- [ ] Queue worker running.
- [ ] Scheduler running.
- [ ] Logs rotating.
- [ ] Health checks available.

## Frontend quality

- [ ] Responsive at mobile/tablet/desktop.
- [ ] Empty/loading/error states.
- [ ] Keyboard navigation.
- [ ] Reduced-motion behavior.
- [ ] Image optimization.
- [ ] SEO metadata.
- [ ] Sitemap/robots.

## Portfolio

- [ ] README includes architecture.
- [ ] Screenshots captured.
- [ ] Live demo URL documented.
- [ ] Seed/admin demo account documented without real credentials.
- [ ] Case study prepared.
