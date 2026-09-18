# Guía de Usuario — Portal de Generadores (Legacy)

> **Este no es el WebApp.** El portal de **Generadores** está en producción en `https://generador.gresst.com` (.NET Framework, WebForms). No usa la API nueva: lee y escribe SQL Server por su cuenta. Si tu empresa gestora ya opera en WebApp, usa la [Guía de Usuario — WebApp](guia_webapp.md). Gestores en el portal clásico: [Guía del Portal de Gestores](guia_portal_gestores.md).

Esta página es un mapa de menú, no un recorre-pantallas. El detalle de pantallas DevExpress sigue en el producto.

## Acceso

URL: `https://generador.gresst.com`. Usuario y clave de la cuenta generadora (sesión propia; **no** el SSO cookie de Gestor/WebApp/API).

## Menú (producción)

Confirmado en el portal Generador:

| Área | Opciones típicas |
|------|------------------|
| **Procesos** | Almacenamiento, Tratamiento, Solicitud/Salida, Entrega |
| **Banco de residuos** | Publicar, Consultar |
| **Consultas** | Certificados, Residuos/Saldos, Tránsito, Movimientos, Trazabilidad, Solicitudes, Documentos |
| **Reportes** | Solicitudes |
| **Configuración** | Personas, Localizaciones, Vehículos, Clasificación de materiales |

## Qué no esperar aquí

- No hay cliente GraphQL ni login `client: "web"` de la API nueva.
- La lógica no se comparte con `Servicios` de Gestor: Generador tiene managers propios.
- Cómo encaja en el strangler: [Arquitectura del Sistema](arquitectura.md) § Legacy/Generador.

Casos de dominio (carga, descarga, cambio de dueño): [Casos de entrada y salida](casos_entrada_salida_residuos.md).
