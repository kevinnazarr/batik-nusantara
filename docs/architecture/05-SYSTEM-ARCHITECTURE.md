# 05 — System Architecture

## 1. Architecture style

**Modular monolith backend + separate Next.js frontend.**

Tujuan: sederhana untuk satu developer/UMKM, tetapi domain boundary tetap jelas.

```text
Internet
   |
Cloudflare
   |
   +---------------------------+
   |                           |
Next.js                      Laravel API
   |                           |
   |            +--------------+-------------+
   |            |              |             |
   |        PostgreSQL       Redis       R2 Storage
   |            |
   |      +-----+------+------+ 
   |      |     |      |      |
   |   Catalog Order Customer Content
   |             |
   |        Payment/Shipping
   |
   +---- Midtrans / Biteship / Google OAuth
```

## 2. Frontend responsibilities

Next.js bertanggung jawab atas:

- route/page rendering;
- SEO metadata;
- customer UI;
- local guest cart/session state;
- form UX;
- animation;
- calling REST API;
- payment UI handoff.

Business truth tidak boleh berada hanya di frontend.

## 3. Laravel responsibilities

- Authentication.
- Authorization.
- Product/catalog business rules.
- Cart/checkout validation.
- Pricing/discount calculation.
- Inventory.
- Order lifecycle.
- Payment integration.
- Shipping integration.
- Webhooks.
- Admin APIs.

## 4. Backend modules

```text
app/
  Actions/
    Cart/
    Checkout/
    Orders/
    Payments/
    Shipping/
  Domain/
    Catalog/
    Customer/
    Commerce/
    Payment/
    Shipping/
    Content/
  Http/
    Controllers/
    Requests/
    Resources/
  Jobs/
  Events/
  Listeners/
  Policies/
  Services/
```

Tidak wajib mengikuti struktur ini secara literal. Prinsipnya adalah business logic tidak menumpuk di controller.

## 5. Integration boundaries

### Payment

`PaymentGatewayInterface`

- `createTransaction()`
- `getTransactionStatus()`
- `handleNotification()`

Implementation awal: `MidtransPaymentGateway`.

### Shipping

`ShippingProviderInterface`

- `calculateRates()`
- `createShipment()`
- `getTracking()`
- `handleWebhook()`

Implementation awal: `BiteshipShippingProvider`.

### Storage

`MediaStorageInterface`

- `put()`
- `delete()`
- `temporaryUrl()`

Implementation awal: S3-compatible Cloudflare R2.

## 6. Async jobs

Gunakan queue untuk pekerjaan yang tidak perlu blocking request:

- email notification;
- image processing;
- webhook side effects;
- shipment sync;
- cleanup expired reservation.

## 7. Caching

Candidate cache:

- categories;
- active banners;
- product listing query yang sesuai strategi cache;
- public story pages.

Jangan cache data inventory/order tanpa strategi invalidation yang jelas.

## 8. Observability

Minimum:

- structured application logs;
- request ID/correlation ID;
- error tracking;
- queue failure visibility;
- payment/shipping webhook audit.
