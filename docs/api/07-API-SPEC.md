# 07 — REST API Specification

Base URL:

```text
/api/v1
```

## 1. Public catalog

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/products` | List/search/filter products |
| GET | `/products/{slug}` | Product detail |
| GET | `/products/{id}/related` | Related products |
| GET | `/categories` | Category tree |
| GET | `/categories/{slug}` | Category detail/products |
| GET | `/stories` | Published stories |
| GET | `/stories/{slug}` | Story detail |
| GET | `/banners` | Active banners |

## 2. Auth

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/register` | Register |
| POST | `/auth/login` | Login |
| POST | `/auth/logout` | Logout |
| GET | `/auth/me` | Current user |
| GET | `/auth/google/redirect` | OAuth redirect |
| GET | `/auth/google/callback` | OAuth callback |

## 3. Customer

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/me` | Profile |
| PATCH | `/me` | Update profile |
| GET | `/me/addresses` | List address |
| POST | `/me/addresses` | Create address |
| PATCH | `/me/addresses/{id}` | Update address |
| DELETE | `/me/addresses/{id}` | Delete address |
| GET | `/me/orders` | Order history |
| GET | `/me/orders/{orderNumber}` | Order detail |
| GET | `/me/wishlist` | Wishlist |
| POST | `/me/wishlist` | Save product |
| DELETE | `/me/wishlist/{productId}` | Remove product |

## 4. Cart

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/cart` | Current cart |
| POST | `/cart/items` | Add item |
| PATCH | `/cart/items/{id}` | Change quantity |
| DELETE | `/cart/items/{id}` | Remove item |
| DELETE | `/cart` | Clear cart |

## 5. Checkout

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/checkout/validate` | Validate cart/stock |
| POST | `/checkout/shipping-rates` | Calculate shipping options |
| POST | `/checkout/create-order` | Create order snapshot |
| POST | `/checkout/payment` | Create provider transaction |

### Create order request example

```json
{
  "customer": {
    "name": "Budi Santoso",
    "email": "budi@example.com",
    "phone": "081234567890"
  },
  "shipping_address": {
    "recipient_name": "Budi Santoso",
    "phone": "081234567890",
    "province": "DKI Jakarta",
    "city": "Jakarta Selatan",
    "postal_code": "12345",
    "address_line": "Jl. Contoh No. 1"
  },
  "shipping": {
    "provider": "biteship",
    "courier": "jnt",
    "service": "standard"
  },
  "promotion_code": "BATIK10"
}
```

## 6. Order

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/orders/{orderNumber}` | Guest secure tracking |
| POST | `/orders/{orderNumber}/cancel` | Cancel when allowed |

Guest endpoint wajib membutuhkan secret/access token atau equivalent secure mechanism.

## 7. Webhook

| Method | Endpoint |
|---|---|
| POST | `/webhooks/midtrans` |
| POST | `/webhooks/biteship` |

## 8. Admin

Prefix:

```text
/admin
```

Representative endpoints:

```text
GET    /admin/dashboard
GET    /admin/products
POST   /admin/products
GET    /admin/products/{id}
PATCH  /admin/products/{id}
DELETE /admin/products/{id}

GET    /admin/categories
POST   /admin/categories
PATCH  /admin/categories/{id}
DELETE /admin/categories/{id}

GET    /admin/orders
GET    /admin/orders/{id}
PATCH  /admin/orders/{id}/status
POST   /admin/orders/{id}/shipment

GET    /admin/customers
GET    /admin/inventory
GET    /admin/promotions
POST   /admin/promotions
GET    /admin/stories
POST   /admin/stories
GET    /admin/banners
POST   /admin/banners
GET    /admin/audit-logs
```

## 9. Response convention

Success:

```json
{
  "data": {},
  "meta": {}
}
```

Error:

```json
{
  "message": "Human readable message",
  "errors": {
    "field": ["Validation message"]
  }
}
```

## 10. API rules

- Version API sejak awal.
- Validate request dengan Form Request.
- Gunakan Resource/DTO untuk response contract.
- Pagination konsisten.
- Error code internal boleh ditambahkan.
- Jangan expose raw provider secrets.
- Semua endpoint sensitif dilindungi authorization.
