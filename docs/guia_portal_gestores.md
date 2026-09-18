# Guía del Portal de Gestores (Legacy)

> **Este no es el WebApp.** Documenta el portal de producción **Gestor** (`https://gestor.gresst.com`), en migración (strangler). Cuentas ya migradas: [Guía de Usuario — WebApp](guia_webapp.md). Generadores: [Guía del Portal de Generadores](guia_generador.md).

Esta página es un **mapa de menú**, no un recorre-pantallas. El detalle de grillas DevExpress sigue en el producto.

## Acceso

URL: `https://gestor.gresst.com` (no `gestores.gresst.com`). Usuario y clave de la cuenta gestora. Gestor y WebApp pueden compartir sesión (cookie `refresh_token` en el dominio de la cuenta) mientras conviven pantallas.

![Pantalla de Login del Portal de Gestores](./images/login_gestor.png)

## Cómo se ve

Cabecera, menú izquierdo y área de trabajo. Los divisores y nombres exactos dependen de permisos de la cuenta.

![Layout del Portal de Gestores](./images/layout_gestor.png)

## Menú (producción)

| Área | Opciones típicas |
|------|------------------|
| **Operación** | Entrada, Recolección, Recepción, Clasificación, Tratamiento, Transferencia, Disposición, Salida |
| **Solicitudes** | Listado y formulario (activas / históricas en el Gestor; no es Abiertas/Cerradas del WebApp) |
| **Administración** | Personas, instalaciones, vehículos, catálogos de materiales y servicios |
| **Consultas** | Residuos, certificados, documentos, referencias |
| **Configuración** | Cuenta, usuarios, parámetros, integraciones |

Flujo clásico de recolección en este portal: **listado → planear → ejecutar**. En WebApp, Transporte y Recepción usan **Abiertas / Cerradas**.

![Vista de Solicitudes Activas](./images/solicitudes_activas_gestor.png)

![Formulario de Solicitud](./images/solicitud_gestor_edit.png)

![Transportes Pendientes](./images/Transportes_pendientes_gestor.png)

## Qué no esperar aquí

- No es el menú Entrada / Logística / Transformación del WebApp.
- El conductor no opera este portal: usa la [App](guia_app.md). La descarga en depósito **propio** la cierra **Recepción** en planta ([caso 1.2.a](casos_entrada_salida_residuos.md)).
- Contratos GraphQL y SSO: repositorio API (`docs/AUTHENTICATION.md`).

Casos de dominio: [Casos de entrada y salida](casos_entrada_salida_residuos.md). Arquitectura de superficies: [Arquitectura del Sistema](arquitectura.md). Soporte: [Procesos operativos](procesos_operativos.md).
