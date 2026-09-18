# Procesos operativos

Cómo se opera el producto y el software. El detalle de pipelines y comandos vive en cada repo (`CLAUDE.md`, `.github/workflows/`, EAS).

## Soporte

Hay **dos Jira** con la misma key `GRE`; el sitio define el tablero:

| Qué | Dónde |
|-----|--------|
| Incidencias de **Gestor, Generador y Móvil** (producción legacy / app de campo) | `araneasoftware.atlassian.net` — Gresst Incidencias |
| Trabajo de producto en **API, WebApp, App, GresstDocs** | `gresst.atlassian.net` — Gresst Solution (component = repo) |

No uses solo la key `GRE` para saber de qué tablero se trata.

## Liberación (stack nuevo)

| Superficie | Cómo sale |
|------------|-----------|
| **WebApp** | `staging` → Azure Static Web Apps. `main` → build en CI y copia a IIS (backup + rollback). |
| **API** | Contratos en `API/docs/`. Si cambia lo que consume la App, política de versión mínima: `API/docs/APP-VERSION-POLICY.md`. |
| **App** | EAS (`development` / `preview` / `production`). El hook de commit puede subir `package.json` en cada commit. |
| **GresstDocs** | Docsify / GitHub Pages; no despliega el producto. |
| **Gestor / Generador** | IIS en `gestor.gresst.com` / `generador.gresst.com`; sin el mismo pipeline que WebApp. |

Comunicación a clientes: fuera de este repo (no hay plantilla aquí).

## Dónde se documenta un cambio

No “todo en GresstDocs”. Una fuente por tema ([ownership](ownership.md)):

- Comportamiento de negocio / guía de usuario → este repo.
- Contrato GraphQL/REST/auth → `API/docs/`.
- Menú y captura WebApp → `WebApp/docs/`.
- Qué llama la App y outbox → `App/docs/`.
