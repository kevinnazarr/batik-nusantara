# 32. Logging, Metrics & Observability

## Application logs

Structured JSON logs with:

- `request_id`
- route
- actor/user ID when available
- outcome
- latency
- error code

Never log passwords, session cookies, payment secrets, full card data, or unnecessary PII.

## Business metrics

Track:

- orders created
- successful payments
- payment failure rate
- checkout conversion
- average order value
- out-of-stock attempts
- shipment creation success/failure
- webhook failures

## Health checks

- API readiness
- database connectivity
- Redis connectivity
- queue worker liveness
- storage/provider configuration
