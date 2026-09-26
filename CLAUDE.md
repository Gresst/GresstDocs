# CLAUDE.md — GresstDocs

Product documentation site (Docsify). **Not** engineering onboarding.

## What this repo owns

- Business cases (`docs/casos_entrada_salida_residuos.md`, including 1.2.a).
- User guides for **WebApp** and **App** only, plus connected accounts (`docs/guia_conexiones.md`). Write about Gresst as one product: never mention Legacy, the portals, migration, "sistema anterior", or "new vs old" (no "ya no", "reemplaza", "antes era"). Say *cuenta*, *cliente*, *proveedor*, never *tenant*, *gestor* or *generador* as account kinds.
- How Gresst works for users (`docs/arquitectura.md`: accounts, parties, connections), party identity (`identidad.md`), operations and waste changes (`operaciones.md`), waste classification (`residuos.md`), traceability (`trazabilidad.md`). Engineering sources: `../API/docs/DOMAIN.md`, `WASTE-CLASSIFICATION.md`, `EXCHANGES.md`, ADR-0002/0003 — keep these pages in business language, no enum or table names.
- Support (`docs/procesos_operativos.md`).

Engineering (clone, deploy, contracts): sibling **`../API/docs/SOLUTION.md`**. `docs/guia_tecnica.md` is only a pointer there.

Do **not** paste GraphQL catalogs, EF mappers, npm scripts, or ADRs here.

## Local preview

```bash
python3 -m http.server 3000   # from this repo root, then open http://localhost:3000
```

Add a page: create `docs/<name>.md` and link it from `docs/_sidebar.md`.

## Jira

Component **GresstDocs** on `gresst.atlassian.net` / project **GRE**.
