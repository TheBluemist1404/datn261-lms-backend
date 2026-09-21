# Contributing

This template favors small, reviewable changes and conventional NestJS structure.

## Start From an Issue

For non-trivial work, create or claim an issue with scope, acceptance criteria, and verification expectations.

## Branch From `main`

Keep `main` current before branching:

```bash
git switch main
git pull --ff-only
git switch -c feat/42-example-feature
```

Recommended branch prefixes:

```text
feat/
fix/
refactor/
test/
docs/
chore/
```

## Follow NestJS Boundaries

Prefer cohesive domain modules rather than global technical-layer folders.

A domain may contain its own controller, service/providers, DTOs, guards, interceptors, and domain-specific helpers. Keep controllers focused on transport concerns and put application behavior in providers/services.

Do not introduce repository interfaces, ports/adapters, or other abstraction layers until the project has a concrete need for them.

Persistence is intentionally not part of this template. Database and ORM choices belong to the project created from the template.

## Commit Cleanly

Use Conventional Commits:

```text
feat: add account module
fix: validate empty display name
test: cover health endpoint
refactor: extract token parser
docs: clarify local setup
chore: update CI configuration
```

Husky runs staged-file checks and a TypeScript typecheck before commits. Commit messages are validated by commitlint.

Do not bypass hooks with `--no-verify` to land broken code.

## Test the Change

Use unit tests for isolated behavior and E2E tests for HTTP/application boundaries.

Before opening a pull request:

```bash
pnpm ci
```

This runs Biome checks, TypeScript, unit tests, E2E tests, and the production build.

## Pull Requests

Keep PRs focused. A good PR:

- links the relevant issue;
- explains behavior or architectural changes;
- includes appropriate test evidence;
- avoids unrelated cleanup;
- documents new environment variables or setup steps;
- calls out follow-up work or limitations.

## Dependencies

Do not add dependencies simply to save a few lines of code. A new dependency should solve a concrete problem and fit the project's maintenance/security expectations.

Database clients, ORMs, authentication packages, queues, caches, storage SDKs, and similar infrastructure should be introduced by the consuming project when required.
