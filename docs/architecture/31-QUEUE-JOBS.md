# 31. Queue & Background Job Architecture

## Queue-worthy jobs

- Send order confirmation email.
- Send payment confirmation email.
- Send shipment notification.
- Process tracking/provider webhook side effects.
- Generate heavy image variants if introduced later.
- Expire unpaid order reservations.
- Cleanup abandoned carts/sessions.

## Principles

Use Redis-backed Laravel queues. Jobs must be retryable and idempotent. Provider calls require bounded retries with backoff. Poison messages go to a failed-job path and must be observable.
