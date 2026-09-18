# CLAUDE.md — GresstDocs

Product documentation site (Docsify). **Not** engineering onboarding.

## What this repo owns

- Business cases (`docs/casos_entrada_salida_residuos.md`, including 1.2.a).
- User guides (Gestor, Generador, WebApp, App).
- Product architecture (`docs/arquitectura.md`).
- Support / dual Jira (`docs/procesos_operativos.md`).

Engineering (clone, deploy, contracts): sibling **`../API/docs/SOLUTION.md`**. `docs/guia_tecnica.md` is only a pointer there.

Do **not** paste GraphQL catalogs, EF mappers, npm scripts, or ADRs here.

## Local preview

```bash
python3 -m http.server 3000   # from this repo root, then open http://localhost:3000
```

Add a page: create `docs/<name>.md` and link it from `docs/_sidebar.md`.

## Jira

Component **GresstDocs** on `gresst.atlassian.net` / project **GRE**.
