# 29. API Error Contract

All API errors should have a predictable envelope.

```json
{
  "message": "Validation failed",
  "code": "VALIDATION_ERROR",
  "errors": {
    "email": ["The email field is invalid."]
  },
  "request_id": "req_01..."
}
```

## Suggested codes

- `AUTHENTICATION_REQUIRED`
- `FORBIDDEN`
- `NOT_FOUND`
- `VALIDATION_ERROR`
- `CONFLICT`
- `OUT_OF_STOCK`
- `PAYMENT_REQUIRED`
- `PAYMENT_FAILED`
- `SHIPPING_UNAVAILABLE`
- `RATE_LIMITED`
- `IDEMPOTENCY_CONFLICT`
- `INTERNAL_ERROR`

HTTP status must remain semantically useful. Never expose stack traces, SQL, provider secrets, or raw internal exceptions to clients.
