# Core layer

Domain models, app-wide services, configuration, and data access. Must not import from `features/` or `shared/`.

- `config/` — `APP_CONFIG` business constants
- `data/` — `ProductRepository`, mock/HTTP data sources
- `models/` — `Product`, etc.
- `services/` — facades (`ProductService`)
- `i18n/` — translation (planned)

See [`../ARCHITECTURE.md`](../ARCHITECTURE.md).
