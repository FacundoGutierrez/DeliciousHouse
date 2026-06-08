# DeliciousHouse — Application architecture

Layered feature-sliced SPA for a bilingual marketing site. Dependencies flow **inward** only.

## Layers

| Layer | Path | Responsibility | May import from |
|-------|------|----------------|-----------------|
| **Shell** | `app.ts`, `app.html` | Layout, `router-outlet`, global providers | `shared`, `core` (minimal) |
| **Features** | `features/*/` | One route = one folder; page logic, composition | `shared`, `core` |
| **Shared** | `shared/` | Presentational UI; no business API calls | `core` types/pipes only |
| **Core** | `core/` | Models, services, i18n, config, data access | nothing from `features` or `shared` |

**Never** import a feature from `core` or `shared`.

## Patterns

### Standalone components

Every component, pipe, and route entry is standalone (`imports: [...]`). No app `NgModule`.

### Smart vs presentational

| Type | Naming | Does | Does not |
|------|--------|------|----------|
| Smart (container) | `*.page.ts` | `inject()` services, fetch data, compose UI | Embed catalog HTTP/mock logic |
| Presentational | `*.component.ts` | `@Input()` / `@Output()`, templates | Call `ProductService` or HTTP |

Use `ChangeDetectionStrategy.OnPush` on presentational components.

### Dependency injection

- Singletons: `providedIn: 'root'` (`ProductService`, future `TranslationService`).
- Swappable implementations: `InjectionToken` + `providers` in `app.config.ts` (e.g. `PRODUCT_REPOSITORY`).

Prefer `inject()` over constructor injection in components and services.

### Facade service (catalog)

`ProductService` is the **only** entry point for features that need the catalog. It hides the repository and owns signal state (`products`, `isLoading`, `cookies`, `budines`).

### Repository + data source (strategy)

```
MenuPage → ProductService → ProductRepository ← MockProductDataSource
                                              ← HttpProductDataSource (future)
```

Components never import `MockProductDataSource` or `HttpClient` for catalog data.

### Configuration

Business constants (phone, WhatsApp, hours, etc.) live in `core/config/`. Features use `inject(APP_CONFIG)`.

### Routing

Feature routes are **lazy-loaded** standalone components via `loadComponent` in `app.routes.ts`. The shell (`App`) holds header/footer and a single `router-outlet`.

### State (v1)

Signals in services; no NgRx. URL state via the Angular router.

### i18n (planned)

- UI chrome: JSON + `TranslationService` + `translate` pipe.
- Product copy: `LocalizedString` on models + `localized` pipe.

## Folder map

```
src/app/
  ARCHITECTURE.md          ← this file
  app.ts / app.routes.ts / app.config.ts
  core/
    config/                APP_CONFIG, business constants
    data/                  ProductRepository, mock/HTTP sources
    i18n/                  (TranslationService, pipes — later)
    models/
    services/              ProductService facade
  shared/
    layout/                SiteHeader, SiteFooter
    ui/                    Button, ProductCard, Skeleton
  features/
    home/                  HomePage
    menu/                  MenuPage
    about/                 AboutPage
    contact/               ContactPage
```

## Testing

| Layer | Focus |
|-------|--------|
| Pipes | Key lookup, language switch |
| `ProductService` | Fake repository → signals update |
| Presentational | Inputs/outputs, shallow template |
| Pages | Light smoke optional |

Prefer unit tests on services and pipes over full E2E in v1.
