# 06 — ERD & Data Model

## 1. Mermaid ERD

```mermaid
erDiagram
  USERS ||--o{ ADDRESSES : has
  USERS ||--o{ ORDERS : places
  USERS ||--o| CARTS : owns
  USERS ||--o{ WISHLISTS : saves

  CATEGORIES ||--o{ PRODUCTS : contains
  PRODUCTS ||--o{ PRODUCT_IMAGES : has
  PRODUCTS ||--o{ PRODUCT_OPTIONS : has
  PRODUCT_OPTIONS ||--o{ PRODUCT_OPTION_VALUES : has
  PRODUCTS ||--o{ PRODUCT_VARIANTS : has
  PRODUCT_VARIANTS ||--o{ VARIANT_OPTION_VALUES : maps
  PRODUCT_OPTION_VALUES ||--o{ VARIANT_OPTION_VALUES : maps
  PRODUCT_VARIANTS ||--o{ INVENTORY_MOVEMENTS : changes

  CARTS ||--o{ CART_ITEMS : contains
  PRODUCT_VARIANTS ||--o{ CART_ITEMS : selected

  ORDERS ||--o{ ORDER_ITEMS : contains
  PRODUCT_VARIANTS ||--o{ ORDER_ITEMS : snapshots_from
  ORDERS ||--o{ PAYMENTS : has
  ORDERS ||--o| SHIPMENTS : has

  PROMOTIONS ||--o{ PROMOTION_USAGES : used_by
  ORDERS ||--o{ PROMOTION_USAGES : applies

  STORIES ||--o{ STORY_PRODUCTS : features
  PRODUCTS ||--o{ STORY_PRODUCTS : appears_in

  USERS ||--o{ AUDIT_LOGS : performs

  USERS {
    bigint id PK
    string name
    string username UK
    string email UK
    string password
    string google_id
    string avatar_url
    string phone
    string role
    timestamp email_verified_at
  }

  CATEGORIES {
    bigint id PK
    bigint parent_id FK
    string name
    string slug UK
    string description
    string image
    boolean is_active
    int sort_order
  }

  PRODUCTS {
    bigint id PK
    bigint category_id FK
    string name
    string slug UK
    text description
    text short_description
    string status
    string brand
  }

  PRODUCT_VARIANTS {
    bigint id PK
    bigint product_id FK
    string sku UK
    numeric price
    numeric compare_at_price
    int stock
    int weight_grams
    boolean is_active
  }

  ORDERS {
    bigint id PK
    bigint user_id FK
    string order_number UK
    string customer_name
    string customer_email
    string customer_phone
    numeric subtotal
    numeric discount_amount
    numeric shipping_amount
    numeric tax_amount
    numeric total_amount
    string status
    jsonb shipping_address_snapshot
    jsonb billing_address_snapshot
    timestamp placed_at
  }

  ORDER_ITEMS {
    bigint id PK
    bigint order_id FK
    bigint product_variant_id FK
    string product_name
    string sku
    string variant_name
    numeric unit_price
    int quantity
    numeric subtotal
    jsonb metadata
  }

## 2. Data modeling decisions

### Money

Simpan nominal sebagai `numeric(12,2)` atau integer minor-unit sesuai konvensi aplikasi. Pilih satu convention dan konsisten di seluruh service.

### Timestamps

Gunakan UTC di persistence layer bila memungkinkan, tampilkan timezone lokal di UI.

### JSONB

Gunakan `jsonb` untuk snapshot/flexible provider payload, bukan untuk menggantikan relational model inti.

### Soft delete

Gunakan secara selektif untuk resource administratif jika historical reference harus dipertahankan. Jangan otomatis soft-delete semua tabel.

## 3. Important constraints

- `users.email` unique.
- `users.username` unique ketika ada.
- `products.slug` unique.
- `product_variants.sku` unique.
- `orders.order_number` unique.
- `wishlist(user_id, product_id)` unique.
- One default address per user.
- Variant belongs to exactly one product.
- Order item price is immutable snapshot after order creation.

## 4. Stock model

Baseline MVP: `product_variants.stock` sebagai sellable stock.

Production enhancement: reservation table/fields dapat ditambahkan jika diperlukan oleh traffic dan payment expiry pattern.

Konsep:

```text
sellable = on_hand - reserved
```

Expired/pending reservation harus dilepas oleh scheduled job.
