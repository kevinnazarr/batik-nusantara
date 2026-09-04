# 08 — State Machines

## 1. Order

```text
PENDING
  |
  v
CONFIRMED
  |
  v
PROCESSING
  |
  v
PACKED
  |
  v
SHIPPED
  |
  v
COMPLETED
```

Cancellation path:

```text
PENDING / CONFIRMED / PROCESSING
              |
              v
          CANCELLED
```

## 2. Payment

```text
PENDING
  +--> PAID
  +--> FAILED
  +--> EXPIRED
  +--> CANCELLED

PAID --> REFUNDED
```

## 3. Shipment

```text
PENDING
  |
  v
PROCESSING
  |
  v
SHIPPED
  |
  v
IN_TRANSIT
  |
  v
DELIVERED
```

Failure path:

```text
PROCESSING / SHIPPED / IN_TRANSIT
             |
             v
           FAILED
```

## 4. Allowed transition principles

- Transition hanya lewat domain action/service.
- Jangan membebaskan frontend mengirim arbitrary status.
- Setiap transition penting tercatat di audit/event log.
- Provider status dipetakan ke internal canonical state.

## 5. Typical lifecycle

```text
Order PENDING
Payment PENDING
        |
        v
Midtrans callback: PAID
        |
        v
Order CONFIRMED
        |
        v
Admin PROCESSING
        |
        v
PACKED
        |
        v
Shipment created
        |
        v
SHIPPED -> IN_TRANSIT -> DELIVERED
        |
        v
Order COMPLETED
```
