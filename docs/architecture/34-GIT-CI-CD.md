# 34. Git, Code Review & CI/CD

## Branching

Prefer short-lived branches:

- `main` = production-ready
- `feat/*`
- `fix/*`
- `chore/*`

## Commit style

Use Conventional Commits:

- `feat:`
- `fix:`
- `refactor:`
- `test:`
- `docs:`
- `chore:`

## Pull request gates

- lint
- typecheck
- unit/integration tests
- build
- migration safety review when schema changes
- security-sensitive review for auth/payment/webhook changes

## Deployment

Merge to `main` → CI → build images/artifacts → deploy → health check → smoke test → rollback on failed health check.
