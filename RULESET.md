# Repository Rules

These rules define the default engineering boundaries for repositories created from this template.

## 1. Follow NestJS Conventions First

Use Nest modules, controllers, providers/services, guards, pipes, interceptors, and decorators according to their intended framework roles.

Do not build a parallel framework inside NestJS.

## 2. Organize by Domain

As the application grows, prefer:

```text
src/
└── modules/
    └── <domain>/
        ├── <domain>.module.ts
        ├── <domain>.controller.ts
        ├── <domain>.service.ts
        └── dto/
```

Do not create global `controllers/`, `services/`, `repositories/`, or `dto/` folders that scatter one domain across the repository.

Small applications may keep modules directly under `src/`; consistency inside the consuming project matters more than forcing empty folders.

## 3. Keep Controllers Thin

Controllers handle transport concerns: routing, request extraction, status codes, and delegation.

Business/application behavior belongs in injectable providers/services.

## 4. Avoid Premature Architecture

Do not introduce Clean Architecture, Hexagonal Architecture, repository ports, use-case classes, mapping layers, or domain wrappers by default.

Add an abstraction when it provides a concrete boundary, enables meaningful substitution/testing, or resolves demonstrated complexity.

## 5. Persistence Is Project-Level

This template is database-agnostic.

Do **not** add Prisma, TypeORM, MikroORM, Sequelize, Mongoose, database drivers, migrations, or persistence-specific base classes to the template unless the template's scope is explicitly changed.

A consuming project chooses and configures its own persistence layer.

## 6. Configuration

- Environment variables must be declared in `.env.example`.
- Validate environment values at startup.
- Never commit secrets or local `.env` files.
- Project-specific configuration should be added deliberately rather than growing one catch-all config file.

## 7. Validation and API Boundaries

Use DTOs plus Nest validation for external input.

Do not trust client-side validation for security or correctness.

Swagger/OpenAPI should describe public HTTP contracts when enabled.

## 8. Testing

- Unit-test meaningful provider/controller behavior.
- Use E2E tests for important HTTP/application boundaries.
- Keep tests deterministic and independent from developer machines.
- Project-level infrastructure tests may use real services/containers when the project introduces them.

Run `pnpm ci` before opening a PR.

## 9. Dependencies

Prefer Nest/platform capabilities already in the project before adding another library.

Infrastructure dependencies such as databases, auth providers, queues, caches, object storage, observability vendors, and cloud SDKs belong at project level unless they become part of the template's explicit scope.

## 10. Workflow

Use issue → branch → focused commits → pull request → CI/review → `main`.

Use Conventional Commits and keep commits meaningful.

## Template Adoption Checklist

When creating a new repository from this template:

1. Rename the package in `package.json`.
2. Replace template branding/documentation with project-specific information.
3. Review `.env.example` and remove defaults the project does not need.
4. Choose project-level infrastructure explicitly.
5. Add domain modules only when implementation begins.
6. Keep `RULESET.md` updated if the project intentionally diverges from these defaults.
