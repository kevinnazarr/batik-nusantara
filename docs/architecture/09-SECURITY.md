# 09 — Security Baseline

## Authentication

- Password hash dengan Laravel-supported secure hasher.
- Sanctum untuk first-party SPA/session flow.
- OAuth state/PKCE/redirect validation sesuai provider implementation.
- Email verification untuk account features sensitif.

## Authorization

- Role middleware/policy untuk admin.
- Object-level authorization untuk addresses/orders.
- Guest order access menggunakan token/secret terpisah dari order number.

## API security

- HTTPS only.
- CSRF protection sesuai auth mode.
- Rate limit login, registration, password reset, checkout, webhook.
- Request validation via Form Requests.
- Mass-assignment protected.
- Sensitive fields tidak diekspos di API response.

## Payment security

- Secret Midtrans hanya di backend.
- Signature/notification validation wajib.
- Frontend tidak menjadi source of truth pembayaran.
- Webhook idempotency.
- Simpan provider response seperlunya, minimalkan PII.

## Storage security

- Bucket R2 private secara default untuk upload source.
- Upload memakai presigned flow.
- Restrict MIME type, extension, size.
- Generate filenames; jangan percaya filename user.
- Delete/replace image lifecycle dikelola backend.

## Database

- Least privilege DB user.
- Backups terenkripsi.
- Secrets tidak disimpan di repository.
- Foreign keys dan unique constraints wajib.

## Web security

- CSP dievaluasi untuk production.
- Security headers.
- CORS hanya domain yang dibutuhkan.
- Cookie Secure + HttpOnly + SameSite sesuai deployment topology.

## Privacy

- PII order hanya ditampilkan ke pihak berwenang.
- Logging tidak boleh memasukkan password, token, card data, webhook secret, atau full sensitive credentials.
- Retention policy untuk audit/log perlu ditentukan ketika production.

## Threat model minimum

### Credential stuffing
Mitigasi: rate limit, strong password policy, monitoring.

### Coupon abuse
Mitigasi: server-side validation, usage constraint, atomic increment.

### Overselling
Mitigasi: transaction/locking/reservation sesuai load.

### Duplicate webhook
Mitigasi: idempotency key/event record.

### Insecure direct object reference
Mitigasi: policy + ownership checks.
