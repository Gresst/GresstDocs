# Procesos operativos

## Soporte

Hay **dos Jira** con la misma clave `GRE`; el sitio define el tablero:

| Qué | Dónde |
|-----|--------|
| Incidentes de **Gestor, Generador y Móvil** | `araneasoftware.atlassian.net` — Gresst Incidencias |
| Trabajo de producto (**API, WebApp, App, GresstDocs**) | `gresst.atlassian.net` — Gresst Solution |

No uses solo la clave `GRE` para saber de qué tablero se trata.

## Liberación (vista de producto)

| Superficie | Qué ve el usuario |
|------------|-------------------|
| **WebApp** | Entorno de pruebas (staging) y luego producción |
| **App** | Actualización por tiendas; a veces la API exige una versión mínima |
| **Gestor / Generador** | `gestor.gresst.com` / `generador.gresst.com` |

Cómo se construye y despliega cada repo lo documenta ingeniería en `API/docs/SOLUTION.md`.
