# 04 — UX Flows

## 1. Information architecture

```mermaid
flowchart TD
  HOME[Home] --> SHOP[Shop]
  HOME --> STORIES[Stories]
  HOME --> CATEGORY[Category]
  SHOP --> LIST[Product Listing]
  CATEGORY --> LIST
  LIST --> DETAIL[Product Detail]
  DETAIL --> CART[Cart]
  CART --> CHECKOUT[Checkout]
  CHECKOUT --> PAYMENT[Payment]
  PAYMENT --> SUCCESS[Order Success]
  SUCCESS --> TRACK[Track Order]
  STORIES --> STORY[Story Detail]
  STORY --> DETAIL
```

## 2. Guest checkout

```mermaid
flowchart TD
  A[Product] --> B[Add to Cart]
  B --> C[Cart]
  C --> D[Checkout]
  D --> E[Customer Info]
  E --> F[Address]
  F --> G[Shipping Rate]
  G --> H[Order Review]
  H --> I[Create Order]
  I --> J[Create Midtrans Transaction]
  J --> K[Payment]
  K --> L{Payment Result}
  L -->|Success| M[Order Confirmation]
  L -->|Pending| N[Payment Pending]
  L -->|Failed/Expired| O[Payment Failed]
```

## 3. Registered checkout

```mermaid
flowchart TD
  A[Login / Existing Session] --> B[Cart]
  B --> C[Checkout]
  C --> D[Select Saved Address]
  D --> E[Shipping]
  E --> F[Review]
  F --> G[Create Order]
  G --> H[Midtrans]
```

## 4. Admin order flow

```mermaid
flowchart TD
  A[New Order] --> B{Payment?}
  B -->|Pending| C[Wait]
  B -->|Paid| D[Processing]
  D --> E[Packing]
  E --> F[Create Shipment]
  F --> G[Shipped]
  G --> H[Tracking]
  H --> I[Delivered]
  I --> J[Completed]
```

## 5. UX rules

- CTA utama harus terlihat tanpa interaksi rumit.
- Guest checkout tidak disembunyikan di belakang login.
- Error checkout bersifat actionable.
- Loading state tidak menghilangkan context.
- Mobile first untuk checkout.
- Animation harus menghormati `prefers-reduced-motion`.
- Form address menggunakan field terstruktur untuk kebutuhan shipping API.

## 6. Checkout screens

1. Cart summary.
2. Contact information.
3. Shipping address.
4. Shipping method.
5. Order summary.
6. Payment.
7. Order success.
8. Track order.
