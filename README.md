# NestJS Template

Reusable, database-agnostic NestJS starter for TypeScript backend projects.

The template stays close to NestJS conventions while adding a consistent development workflow shared with the rest of the stack: pnpm, Biome, Vitest, Conventional Commits, GitHub Actions, environment validation, OpenAPI bootstrap, and a basic health endpoint.

## Principles

- Follow NestJS conventions first.
- Organize application code by domain/module, not by global controller/service/repository folders.
- Keep controllers thin; application behavior belongs in providers/services.
- Keep infrastructure generic until a project actually needs it.
- Do **not** assume an ORM, database, authentication system, queue, cache, or cloud provider.
- Add abstractions when concrete complexity justifies them, not preemptively.

## Included

- NestJS 12 + TypeScript
- pnpm
- Biome formatting/linting
- Vitest unit and E2E testing
- `@nestjs/config` with environment validation
- Global `ValidationPipe`
- Swagger/OpenAPI at `/docs`
- Health endpoint at `/health`
- Graceful shutdown hooks
- Husky + lint-staged + commitlint
- GitHub Actions CI

## Project Structure

```text
src/
├── main.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
├── config/
│   └── env.validation.ts
└── health/
    ├── health.controller.ts
    ├── health.controller.spec.ts
    └── health.module.ts

test/
└── app.e2e-spec.ts
```

When application domains are introduced, prefer cohesive modules:

```text
src/
└── modules/
    ├── auth/
    ├── users/
    └── courses/
```

Each module owns its controllers, providers/services, DTOs, guards, and other domain-specific code. Shared cross-cutting infrastructure belongs in clearly named shared locations only when it is genuinely reused.

## Requirements

- Node.js **22.12+**
- pnpm **12** (the expected version is pinned through `packageManager`)

Enable Corepack if needed:

```bash
corepack enable
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Create a local environment file:

```bash
cp .env.example .env
```

PowerShell:

```powershell
Copy-Item .env.example .env
```

Start the development server:

```bash
pnpm start:dev
```

Default endpoints:

- API root: `http://localhost:3000`
- Health: `http://localhost:3000/health`
- Swagger: `http://localhost:3000/docs`

## Environment Variables

```env
NODE_ENV=development
PORT=3000
CORS_ORIGIN=http://localhost:5173
SWAGGER_ENABLED=true
```

`CORS_ORIGIN` accepts a comma-separated list. Use `*` only when that behavior is actually appropriate for the project.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm start` | Start the application |
| `pnpm start:dev` | Start in watch mode |
| `pnpm start:debug` | Start in debug/watch mode |
| `pnpm build` | Compile the application |
| `pnpm start:prod` | Run the compiled application |
| `pnpm typecheck` | Run TypeScript without emitting |
| `pnpm test` | Run unit tests |
| `pnpm test:watch` | Run unit tests in watch mode |
| `pnpm test:cov` | Run unit tests with coverage |
| `pnpm test:e2e` | Run E2E tests |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |
| `pnpm check` | Run Biome checks |
| `pnpm check:fix` | Apply safe Biome fixes |
| `pnpm ci` | Run the local CI-equivalent gate |

## Using This Template

After creating a project from this repository:

1. Rename the package in `package.json`.
2. Replace this README with project-specific product/setup documentation.
3. Keep or adapt `RULESET.md` and `CONTRIBUTING.md`.
4. Add persistence, authentication, messaging, storage, and other infrastructure **at project level**.
5. Introduce domain modules only when implementation begins; do not scaffold empty feature trees.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for branch, commit, testing, and pull-request conventions.

See [RULESET.md](RULESET.md) for architectural and repository rules.
