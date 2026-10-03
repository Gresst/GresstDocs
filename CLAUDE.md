# CLAUDE.md — GresstDocs

Product documentation site (Docsify). **Not** engineering onboarding.

## What this repo owns

- Business cases for all 18 operations (`docs/casos_entrada_salida_residuos.md`, titled *Casos por operación*; keep the file name and the §1–4 numbering, including 1.2.a / 2.2 / 3.3 — API and App link to them).
- User guides for **WebApp** and **App** only, plus connected accounts (`docs/guia_conexiones.md`).
- How Gresst works for users (`docs/arquitectura.md`: accounts, parties, connections), party identity (`identidad.md`), operations and waste changes (`operaciones.md`), waste classification (`residuos.md`), traceability (`trazabilidad.md`), catalogs and facility capabilities (`catalogos.md`), requests (`solicitudes.md`), certificates (`certificados.md`). Engineering sources: `../API/docs/DOMAIN.md`, `WASTE-CLASSIFICATION.md`, `EXCHANGES.md`, ADR-0002/0003.
- Support (`docs/procesos_operativos.md`).

Engineering (clone, deploy, contracts): sibling **`../API/docs/SOLUTION.md`**. `docs/guia_tecnica.md` is only a pointer there.

Do **not** paste GraphQL catalogs, EF mappers, npm scripts, or ADRs here. Wording rules for `docs/`: `.claude/rules/lenguaje-producto.md` (loads when editing docs).

## Local preview

```bash
python3 -m http.server 3000   # from this repo root, then open http://localhost:3000
```

Add a page: create `docs/<name>.md` and link it from `docs/_sidebar.md`.

## Screenshots

Save them in `docs/img/` (lowercase, hyphens, PNG/WebP, under ~300 KB) and embed with a path relative to `docs/`: `![Alt text](img/webapp-nueva-operacion.png)`. Click-to-zoom is already enabled in `index.html`. Use test-account data only, and only in WebApp/App guides (not in *Casos por operación*).

## Jira

Component **GresstDocs** on `gresst.atlassian.net` / project **GRE**.
