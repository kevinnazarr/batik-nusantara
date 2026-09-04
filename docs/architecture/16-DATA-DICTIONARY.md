# 16 — Data Dictionary

## users

| Field | Type | Rule | Description |
|---|---|---|---|
| id | bigint | PK | User identity |
| name | varchar | required | Display/real name |
| username | varchar | unique nullable | Public account handle |
| email | varchar | unique | Login/contact |
| password | varchar | nullable | Null for pure OAuth account if policy allows |
| google_id | varchar | unique nullable | Google identity |
| phone | varchar | nullable | Customer phone |
| role | enum/string | required | customer/admin |

## categories

| Field | Type | Rule | Description |
|---|---|---|---|
| id | bigint | PK | Category |
| parent_id | bigint | FK nullable | Hierarchy |
| name | varchar | required | Display name |
| slug | varchar | unique | URL slug |
| status | boolean | required | Active/inactive |

## products

| Field | Type | Rule | Description |
|---|---|---|---|
| id | bigint | PK | Product |
| category_id | bigint | FK | Primary category |
| name | varchar | required | Product name |
| slug | varchar | unique | SEO URL |
| status | enum | required | draft/active/archived |

## product_variants

| Field | Type | Rule | Description |
|---|---|---|---|
| id | bigint | PK | Variant |
| product_id | bigint | FK | Parent product |
| sku | varchar | unique | Sellable SKU |
| price | numeric | >= 0 | Current sell price |
| stock | integer | >= 0 | Sellable stock baseline |
| weight_grams | integer | > 0 | Shipping weight |

## orders

| Field | Type | Rule | Description |
|---|---|---|---|
| id | bigint | PK | Internal order ID |
| order_number | varchar | unique | Public reference |
| user_id | bigint | FK nullable | Null for guest |
| customer_email | varchar | required | Transaction contact snapshot |
| subtotal | numeric | >= 0 | Item subtotal |
| discount_amount | numeric | >= 0 | Discount |
| shipping_amount | numeric | >= 0 | Shipping fee |
| total_amount | numeric | >= 0 | Final total |
| status | enum/string | required | Canonical order state |
| shipping_address_snapshot | jsonb | required | Transaction snapshot |

## payments

- provider
- transaction_id
- amount
- payment_type
- status
- timestamps
- raw_response (jsonb, minimized)

## shipments

- provider
- courier
- service
- tracking_number
- shipping_cost
- status
- timestamps
- raw_response (jsonb, minimized)

## inventory_movements

- type: restock/sale/adjustment/return/reservation_release
- quantity: signed or convention-defined
- reference_type/id: source transaction
- note: human explanation
