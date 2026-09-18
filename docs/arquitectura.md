# Arquitectura del Sistema

## Visión General

Gresst es una plataforma SaaS multitenant de gestión de residuos que conecta **Generadores** (empresas que producen residuos) y **Gestores** (empresas gestoras/transportadoras que los recolectan, tratan y disponen), incluyendo operadores logísticos que interconectan parte del proceso. Cubre generación, inventario, logística de transporte, procesamiento y disposición/almacenamiento final.

El sistema está en **migración activa** (patrón *strangler fig*): un monolito .NET Framework 4.8 (**Legacy**) sigue en producción atendiendo `gestor.gresst.com` y `generador.gresst.com`, mientras una nueva **API** en Clean Architecture (.NET) y dos clientes nuevos (**App** móvil, **WebApp** web) lo van reemplazando función por función. Los clientes nuevos **solo hablan con la API nueva** — nunca con el API legacy. Ambos stacks comparten la misma base de datos **SQL Server**.

---

## Repositorios activos

| Repo | Rol | Stack |
|---|---|---|
| `Legacy/` | Sistema en producción, en migración (Gestor + Generador) | .NET Framework 4.8, WebForms + DevExpress |
| `API/` | Backend nuevo, fuente de verdad del stack objetivo | .NET, Clean Architecture |
| `App/` | Cliente móvil (personal de campo / conductores) | Expo + React Native + TypeScript |
| `WebApp/` | Cliente web nuevo (reemplaza gradualmente a Gestor/Generador) | React 18 + Vite 6 + TypeScript |
| `GresstDocs/` | Documentación de producto (este sitio) | Docsify |
| `DB/` | Scripts SQL Server compartidos (funciones, procedimientos, tipos) | T-SQL |

Cada repo tiene su propio `CLAUDE.md` con el detalle completo; este documento resume cómo encajan entre sí.

---

## Arquitectura de Alto Nivel

```
┌───────────────────────────────┐        ┌─────────────────────────────────┐
│         CLIENTES NUEVOS        │        │      LEGACY (.NET FW 4.8)        │
│                                 │        │                                   │
│   App (Expo/RN)   WebApp (Vite)│        │   Gestor (WebForms+DevExpress)   │
│         │               │      │        │   Generador (WebForms+DevExpress)│
└─────────┼───────────────┼──────┘        │         │             │          │
          │               │               └─────────┼─────────────┼──────────┘
          │  REST /api/v1 │                          │             │
          │  GraphQL      │                          │ Servicios/  │ (lógica
          │               │                          │ Dominio     │  duplicada
          └───────┬───────┘                          │ (parcial)   │  en parte)
                  │                                  │             │
          ┌───────▼────────┐                         │             │
          │   API (.NET)    │◄────SSO refresh_token───┘             │
          │ Clean Architecture│    (cookie compartida .residuario.com)
          └───────┬────────┘                                       │
                  │                                                 │
                  └──────────────────┬──────────────────────────────┘
                                     │
                            ┌────────▼────────┐
                            │   SQL Server     │
                            │ (esquema legado, │
                            │  español)        │
                            └─────────────────┘
```

**Puntos clave de esta arquitectura:**
- **API** adapta el esquema legacy en español (`Orden`, `Residuo`, `Deposito`, `Gestion`, `Persona`, …) a un dominio en inglés vía `LegacyDbContext` y mappers — nunca se renombran columnas legacy.
- **Gestor** y **API** comparten SSO: una cookie `refresh_token` (HttpOnly, dominio `.residuario.com`) permite que un usuario autenticado en uno navegue al otro sin volver a iniciar sesión, mientras Gestor migra pantallas hacia WebApp (`Site.Master.cs` resuelve dinámicamente qué ítems de menú ya están migrados y redirige a `WebAppBaseUrl`).
- **Generador**, en cambio, no consume la API nueva — accede directo a SQL Server vía EF6 + SQL embebido, y duplica lógica de negocio propia en vez de reusar `Servicios` (confirmado: ningún `.aspx.cs` de Generador referencia el namespace `Servicios`).
- Multitenancy: todo está acotado por cuenta (`IdCuenta` / JWT `AccountId`).

---

## Componentes

### 1. API — Backend nuevo

**Rol:** fuente de verdad del stack objetivo, Clean Architecture (.NET): `Domain → Application → Infrastructure → API`, organización feature-driven, Minimal APIs en `/api/v1/...`, GraphQL en `/graphql` para operaciones/rutas. Auth JWT Bearer con refresh vía cookie HttpOnly (clientes web) o SecureStore (móvil).

### 2. App — Aplicación móvil (Expo/React Native)

**Propósito:** ejecución y documentación en campo de operaciones de recolección/transporte/entrega de residuos.

**Stack:** Expo `^57`, React Native `0.86`, React `19`, TypeScript `~6`. Navegación con `@react-navigation` v7, mapas con `react-native-maps` (requiere dev build, no funciona en Expo Go), i18n con `i18next`/`react-i18next`, tests con Jest + React Native Testing Library.

**Arquitectura:** Clean Architecture feature-based bajo `src/lib/` (`core`, `domain`, `application`, `infrastructure`, `features`, `shared`). Features reales hoy: `account`, `activities`, `auth`, `developer`, `facilities`, `facility`, `home`, `inventory`, `map`, `operations`, `packagings`, `parties`, `plantProcesses`, `profile`, `route`, `search`, `subprocesses`, `tasks`, `wasteTypes`.

**Auth y API:** login contra `POST /api/v1/authentication/login` (`client: "mobile"`); token de acceso y usuario persistidos en `expo-secure-store`, con refresh y restauración de sesión al arrancar. Dominios CRUD estándar vía repositorios REST; **operaciones de transporte** (con impacto en inventario) vía una capa GraphQL dedicada con auditoría propia. Offline-first: mutaciones de transporte se encolan en un **Outbox** local cuando no hay red y se reenvían al reconectar.

**Build:** iOS/Android nativos vía EAS Build (perfiles development/preview/production); soporte web experimental con proxy CORS local.

### 3. WebApp — Cliente web nuevo

**Propósito:** reemplazo gradual de los portales legacy Gestor/Generador para operación web (recepción, clasificación, tratamiento, disposición, transferencia/handover, solicitudes, catálogos).

**Stack:** React 18 + Vite 6 + TypeScript estricto (sin `any`). Routing `react-router-dom` v7, grid principal `ag-grid-community`/`ag-grid-react`, mapas `@vis.gl/react-google-maps`. Sin Apollo/axios/Redux/React Query por convención — `fetch` propio + `executeGraphql` propio. Tests con Vitest + Testing Library.

**Arquitectura:** Feature-Driven obligatorio bajo `src/features/<name>/` (`components`, `hooks`, `services`, `types`, `tests`); `src/shared/` solo UI/utils sin lógica de negocio, `src/core/` config global/auth/http/routing. Features reales: auth y cuenta (`auth`, `home`, `account-settings`, `change-password`, `user-profile`), maestros/catálogos (`facility-list`, `party-list`, `vehicle-list`, `packaging-list`, `service-list`, `supply-list`, `waste-class-list`, `waste-type-list`, `treatment-list`), solicitudes (`request-form`, `request-list`), y operaciones por etapa de proceso (`operation-dashboard`, `operation-reception`, `operation-classification`, `operation-transport`, `operation-handover`, `operation-disposal`, `operation-treatment`, `plant-backlog`).

**Auth y API:** JWT de acceso en memoria (nunca localStorage), refresh vía cookie `HttpOnly + Secure + SameSite=Lax` (`refresh_token`, compartida con Gestor para SSO). REST `/api/v1/*` (kebab-case) para auth y maestros; GraphQL `/graphql` (enums `SCREAMING_SNAKE_CASE`) para operaciones/rutas.

**Deploy:** dev local con proxy Vite; **staging** se despliega automáticamente a Azure Static Web Apps al hacer push a la rama `staging`; **producción** se buildea en CI (`main`) y se copia por SSH/SCP a un servidor Windows con IIS, con backup automático y rollback manual.

### 4. Legacy/Gestor — Portal de gestores (en migración)

**Propósito:** portal web para empresas gestoras — hoy en `gestor.gresst.com`, siendo reemplazado gradualmente por WebApp.

**Stack:** .NET Framework 4.8, mayormente ASP.NET WebForms (`.aspx`/`.aspx.cs`) con DevExpress v19.2 (`ASPxTreeList`, `ASPxScheduler`, `ASPxPivotGrid`, `XtraReports`, etc.) como UI; algunos fragmentos MVC puntuales. Acceso a datos con EF6 Database-First + SQL embebido directo (`Aranea.Data.Sql`) para lógica que no pasa por `Servicios`.

**Menú real** (confirmado en `Site.Master.cs`), organizado por proceso de residuo más consultas/configuración:
- **Operación:** Entrada, Recolección, Recepción, Clasificación, Tratamiento, Transferencia, Disposición, Salida.
- **Administración:** Certificados, Integraciones, Inventarios, Solicitudes.
- **Consultas:** Certificados, Residuos, Solicitudes, Órdenes, Documentos, Reportes, KPI.
- **Configuración:** Personas, Localizaciones, Vehículos, Servicios, Materiales.

**Auth:** modelo híbrido — sesión clásica InProc para el login tradicional, más un SSO nuevo (`AuthSsoService`) que valida y rota el `refresh_token` compartido con API/WebApp, y un JWT legacy propio (`ApiManager` → `Api` legacy) para integraciones internas.

**Integraciones:** SQL Server (EF6), API nueva (SSO), API legacy (JWT propio), filesystem compartido para soportes/certificados, PayU (pagos en línea), Ecopositiva (integración sectorial externa).

### 5. Legacy/Generador — Portal de generadores (en migración)

**Propósito:** portal web para empresas generadoras — hoy en `generador.gresst.com`.

**Stack:** .NET Framework 4.8, WebForms (`.aspx` en raíz del proyecto) con DevExpress v19.2; carpetas `Controllers/Models/Views` de MVC presentes pero WebForms predomina. Auth propia (no Forms Authentication): validación de usuario/clave contra SQL directo, estado en `Session`.

**Menú real:**
- **Procesos:** Almacenamiento, Tratamiento, Solicitud/Salida, Entrega.
- **Banco de residuos:** Publicar, Consultar.
- **Consultas:** Certificados, Residuos/Saldos, Tránsito, Movimientos, Trazabilidad, Solicitudes, Documentos.
- **Reportes:** Solicitudes.
- **Configuración:** Personas, Localizaciones, Vehículos, Clasificación de materiales.

**Particularidad importante:** Generador **no llama a `Servicios`** — tiene sus propios managers (`AccountManager`, `SolicitudManager`, `MasterManager`) con las mismas firmas que sus equivalentes en `Servicios`/`Gestor`/`SuperUser`, pero implementados de forma independiente (lógica duplicada, no compartida). Tampoco consume la API nueva ni la legacy — accede directo a SQL Server.

**Integraciones:** SQL Server (EF6 + SQL directo), PayU (pagos en línea).

---

## Flujo típico de operación

1. **Solicitud:** el Generador crea una solicitud de recolección (Legacy/Generador o, a futuro, WebApp).
2. **Asignación:** el Gestor recibe y planifica la recolección/ruta (Legacy/Gestor o WebApp).
3. **Ejecución en campo:** el conductor recibe la operación en la **App**, navega, ejecuta las paradas y registra evidencia; las mutaciones de transporte quedan en el Outbox si no hay red.
4. **Sincronización:** al reconectar, la App envía las mutaciones vía GraphQL a la **API**, que actualiza inventario y estados sobre SQL Server.
5. **Documentación:** se generan certificados/manifiestos (hoy vía DevExpress/XtraReports en Legacy; en migración hacia API).
6. **Consulta:** Generador y Gestor consultan el estado, historial y certificados desde su portal (Legacy o WebApp, según qué tanto se haya migrado esa cuenta/flujo).

---

## Seguridad y multitenancy

- **Multitenancy:** todo el sistema está acotado por cuenta (`IdCuenta` en Legacy / JWT `AccountId` en API), vía Bearer tokens en los clientes nuevos.
- **SSO entre Legacy y stack nuevo:** cookie `refresh_token` HttpOnly compartida en el dominio `.residuario.com` entre Gestor, WebApp y API — permite migrar pantallas sin forzar un nuevo login.
- **Auth por cliente:** App usa Bearer + refresh en SecureStore; WebApp usa Bearer en memoria + refresh en cookie HttpOnly; Legacy/Gestor combina sesión InProc clásica + el SSO nuevo + un JWT legacy propio para integraciones; Legacy/Generador usa solo sesión propia validada contra SQL directo.
- **Secretos:** se prioriza Azure Key Vault cuando está configurado (orden de resolución: `appsettings → user secrets → Key Vault → variables de entorno`).

---

¿Dudas técnicas de instalación/despliegue por repo? Consulta la [Guía Técnica](guia_tecnica.md). Para el detalle de casos de negocio de entrada/salida de residuos, ve a [Casos de Entrada y Salida de Residuos](casos_entrada_salida_residuos.md).
