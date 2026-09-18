# Qué documenta cada repo

Una sola fuente por tema. Si el texto ya existe en el dueño, **enlaza**; no copies.

| Tema | Dueño | Ejemplos |
|------|--------|----------|
| Producto (humanos) | **Este repo** (`GresstDocs/docs/`) | Actores, glosario, guías de usuario, [casos de entrada/salida](casos_entrada_salida_residuos.md) |
| Contratos y dominio | `API/docs/` | GraphQL, REST, auth, homologación, RBAC, `DOMAIN.md` |
| Cliente web | `WebApp/docs/` | Feature-driven, design system, IA del menú, capture UX, ADRs |
| Cliente móvil | `App/docs/` | Checklist de auth móvil, outbox, ejemplos GraphQL que la App llama |
| Agentes | `CLAUDE.md` + `.claude/rules/` de cada repo | Comandos y gotchas |
| Legacy (lectura) | `Legacy/` | Cómo leer Gestor/Servicios/SQL al homologar |

Mapa corto del workspace: `../CLAUDE.md` (carpeta `Gresst/Gresst`). Arquitectura de sistema para lectores de producto: [Arquitectura del Sistema](arquitectura.md).
