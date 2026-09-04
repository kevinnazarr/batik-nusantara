# 00. Implementation Guide

## Recommended execution order

1. Confirm product decisions and brand/content inputs.
2. Scaffold monorepo/repositories and environments.
3. Implement database/migrations.
4. Implement Laravel domain/API contracts.
5. Implement auth/session.
6. Implement catalog UI + API.
7. Implement cart/checkout/order.
8. Integrate Midtrans and Biteship.
9. Build admin operations.
10. Hardening, QA, deployment, launch.

## Non-negotiable boundaries

- Frontend does not own business truth for price, stock, payment, or shipment status.
- Third-party webhooks are treated as untrusted input until verified.
- Public IDs/order access must not disclose other customers' data.
- Provider integrations sit behind service interfaces so they can be replaced without rewriting order logic.

## Suggested repository

```text
batik-nusantara/
├── apps/
│   ├── web/        # Next.js customer + admin shell
│   └── api/        # Laravel API
├── docs/           # This documentation package
├── infra/          # Docker, deployment, scripts
└── .github/        # CI/CD + issue/PR templates
```

A split repository is also valid; choose based on deployment/team needs. For a solo portfolio project, monorepo simplifies shared documentation and change visibility.
