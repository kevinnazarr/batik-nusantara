# 33. SEO & Analytics Specification

## SEO

Every indexable product/category/story page needs:

- unique title
- meta description
- canonical URL
- Open Graph metadata
- descriptive image alt text
- structured data where appropriate (Product, BreadcrumbList, Article)

Generate sitemap and robots directives from backend/frontend route inventory.

## Analytics events

Core events:

- `view_item`
- `view_item_list`
- `search`
- `add_to_cart`
- `remove_from_cart`
- `begin_checkout`
- `add_shipping_info`
- `add_payment_info`
- `purchase`
- `view_order`

Analytics IDs/configuration must be environment driven. Consent/privacy policy requirements must be respected.
