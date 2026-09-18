# CLAUDE.md — GresstDocs

Product documentation site (Docsify). **Not** the place for API contracts, Clean Architecture, or client ADRs.

## What this repo owns

- Business cases and glossary (`docs/casos_entrada_salida_residuos.md` is canonical for entrada/salida, including 1.2.a).
- User guides (Gestor legacy, Generador legacy, WebApp, App).
- High-level system map for humans (`docs/arquitectura.md`) — point to `API/docs/` and client `docs/` for implementation detail.
- Ownership map: `docs/ownership.md`.

Do **not** duplicate `API/docs/AUTHENTICATION.md`, GraphQL catalogs, or WebApp design-system/IA here. Link those files.

When adding a page: if it is **how a person uses the product** or a **business case**, it belongs here. If it is an endpoint, EF mapper, or React folder convention, put it in the code repo and link from [ownership.md](docs/ownership.md).

## Local preview

```bash
python3 -m http.server 3000   # from this repo root, then open http://localhost:3000
```

Add a page: create `docs/<name>.md` and link it from `docs/_sidebar.md`.

## Jira

Component **GresstDocs** on `gresst.atlassian.net` / project **GRE**.
