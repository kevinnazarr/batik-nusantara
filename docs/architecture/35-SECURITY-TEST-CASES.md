# 35. Security Test Cases

| ID | Case | Expected |
|---|---|---|
| SEC-01 | Guest requests another order by changing order number | Denied |
| SEC-02 | Customer accesses another customer's order | 403/404 |
| SEC-03 | Admin endpoint called as customer | Denied |
| SEC-04 | Invalid Midtrans signature | Webhook rejected |
| SEC-05 | Duplicate webhook | No duplicate state transition |
| SEC-06 | Oversell race | Inventory never negative |
| SEC-07 | Upload disallowed file type | Rejected |
| SEC-08 | Massive upload | Size limit enforced |
| SEC-09 | SQL/HTML injection input | Safely handled |
| SEC-10 | Login brute force | Rate limited |
| SEC-11 | Expired session | Auth denied |
| SEC-12 | Coupon replay | Usage rule enforced |

Also perform dependency scanning, secret scanning, and periodic production configuration review.
