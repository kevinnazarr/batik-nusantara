# 11 — Test Plan

## Test pyramid

```text
             E2E
            /   \
        Integration
          /       \
       Unit      Contract
```

## Unit tests

Fokus:

- price calculation;
- coupon rules;
- stock calculation;
- order state transition;
- payment state mapping;
- shipping state mapping.

## Feature/integration tests Laravel

- Register/login.
- Product API.
- Cart.
- Checkout.
- Order creation.
- Inventory transaction.
- Webhook Midtrans.
- Webhook Biteship.
- Admin authorization.

## Contract/API tests

Pastikan schema response tidak berubah tanpa disadari frontend.

## E2E tests

Critical paths:

1. Guest product → checkout → mocked payment success → order success.
2. Authenticated customer → saved address → checkout.
3. Admin → create product → create variant → publish.
4. Admin → process paid order → create shipment.
5. Webhook retry → only one side effect.

## Negative tests

- Invalid coupon.
- Expired coupon.
- Out of stock.
- Invalid shipping method.
- Tampered total price.
- Duplicate webhook.
- Unauthorized order access.
- Unauthorized admin access.

## Performance checks

- Product listing with realistic seed volume.
- Search.
- Product detail.
- Checkout endpoints.

## Release gate

Sebelum production:

- unit pass;
- feature pass;
- critical E2E pass;
- lint/typecheck pass;
- build pass;
- migration tested;
- backup verified;
- webhook test verified;
- rollback procedure documented.
