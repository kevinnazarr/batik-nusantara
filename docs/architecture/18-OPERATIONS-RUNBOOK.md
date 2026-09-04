# 18 — Operations Runbook

## Daily/regular checks

- Failed queue jobs.
- Payment webhook failures.
- Shipping webhook failures.
- Disk utilization.
- PostgreSQL backup success.
- Error rate.

## Incident: payment marked wrong

1. Open order.
2. Inspect payment transaction ID.
3. Inspect webhook event.
4. Compare provider status with internal payment state.
5. Replay only after confirming idempotency.
6. Audit final state.

## Incident: order not shipped

1. Check order status.
2. Check shipment record.
3. Check provider response/tracking.
4. Retry shipment creation only after verifying no active shipment exists.

## Incident: stock mismatch

1. Inspect current variant stock.
2. Inspect inventory movements.
3. Inspect recent orders.
4. Determine whether reservation/adjustment bug occurred.
5. Create controlled stock adjustment with reason.

## Deployment rollback

Preferred strategy:

- identify bad release;
- stop promotion of release;
- deploy previous known-good version;
- do not blindly rollback irreversible DB migrations;
- assess forward-fix vs restore.

## Database restore drill

At least periodically verify:

- backup file is readable;
- restore works in isolated environment;
- application can boot against restored DB;
- critical order/payment queries work.

## Security incident

Immediately rotate affected secret, preserve logs/evidence, revoke sessions where appropriate, and patch the vulnerability. Do not paste secrets into issue tracker/chat.
