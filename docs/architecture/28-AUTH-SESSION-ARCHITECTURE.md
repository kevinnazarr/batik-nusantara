# 28. Authentication & Session Architecture

## Target

First-party Next.js frontend consuming Laravel API. Use Laravel Sanctum for authenticated application sessions, with Google OAuth as a login provider.

## Customer modes

- Guest: cart/session + secure order access token.
- Authenticated: session-backed account with addresses/orders/wishlist.

## OAuth flow

1. Customer chooses Google.
2. Browser is redirected to backend OAuth endpoint.
3. Backend validates Google callback.
4. Backend finds or creates user.
5. Backend establishes authenticated session.
6. Browser is redirected to frontend account/checkout destination.

## Security requirements

- Secure, HttpOnly, SameSite-aware session cookies.
- HTTPS in every non-local environment.
- CSRF protection according to Sanctum SPA configuration.
- Never put access tokens or secrets in localStorage.
- Rate-limit login, password reset, and OAuth initiation endpoints.
- Verify email where business policy requires it.
