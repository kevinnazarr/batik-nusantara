# 17 — Webhooks & Idempotency

## General webhook pipeline

```text
Provider
  |
  v
Webhook endpoint
  |
Verify authenticity
  |
Normalize payload
  |
Find/create provider event record
  |
Check processed status
  |
Dispatch domain action/job
  |
Persist result
  |
Return 2xx
```

## Provider event storage

Recommended table:

```text
webhook_events
- id
- provider
- external_event_id nullable
- event_type
- payload jsonb
- status
- received_at
- processed_at
- error_message nullable
```

Unique constraint dapat diberlakukan pada kombinasi yang stabil seperti provider + external event ID bila provider menjamin ID tersebut.

## Midtrans

Internal goals:

- validate notification/signature per official integration method;
- map provider transaction status to internal payment state;
- update order/payment atomically where appropriate;
- do not trust browser return page as final payment state.

## Biteship

Internal goals:

- map shipping status to canonical shipment state;
- update tracking number/provider fields;
- avoid duplicate shipping side effects;
- preserve raw provider payload for troubleshooting with PII minimization.

## Retry strategy

- Fast acknowledgement setelah authenticity check bila processing dibuat async.
- Queue retries with backoff.
- Failed webhook visible in admin/ops.
- Manual replay only after idempotency is guaranteed.

## Failure scenarios

### Webhook arrives before local order update

Use correlation/reference and retry-safe transition.

### Same webhook arrives multiple times

No duplicate stock/order shipment side effect.

### Provider sends unknown status

Persist event, mark for review; do not silently guess.
