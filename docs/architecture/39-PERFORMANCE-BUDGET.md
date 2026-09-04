# 39. Performance Budget

Targets are engineering goals, not guaranteed universal scores.

## Frontend

- LCP target: <= 2.5s on a realistic mobile connection.
- CLS target: <= 0.1.
- INP target: <= 200ms where practical.
- Avoid shipping large animation libraries to routes that do not use them.
- Images served in responsive formats and sizes.

## API

- p95 catalog reads target: < 400ms under expected MVP load.
- p95 common writes target: < 800ms excluding third-party provider latency.

## Database

- Index all hot lookup paths.
- Avoid N+1 queries.
- Paginate admin/customer lists.
