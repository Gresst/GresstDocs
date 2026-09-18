# Guía Técnica

Esta guía está dirigida a desarrolladores, personal técnico y administradores del sistema Gresst.

Para el panorama completo de componentes y cómo encajan entre sí, consulta primero la [Arquitectura del Sistema](arquitectura.md). La plataforma consta de **cinco repositorios**: `API` (backend nuevo), `App` (móvil), `WebApp` (web nuevo), `Legacy` (Gestor + Generador, en migración) y `DB` (scripts SQL Server compartidos).

---

## Requerimientos por repositorio

### App (Expo / React Native)
- Node.js compatible con Expo `^57` (LTS recomendado).
- Expo CLI (`npx expo`), simulador iOS (Xcode) y/o emulador Android para desarrollo nativo — Expo Go **no** soporta mapas (`react-native-maps`), se necesita un dev build.
- Cuenta EAS para builds de producción (perfiles `development` / `preview` / `production`).

### WebApp (React / Vite)
- Node.js **≥ 22**.
- Navegador moderno (Chrome/Edge/Firefox/Safari recientes) para desarrollo y pruebas.

### Legacy (Gestor / Generador)
- Windows Server con IIS, .NET Framework **4.8**.
- Visual Studio con soporte DevExpress **v19.2** instalado localmente (las referencias de proyecto apuntan a `C:\Program Files (x86)\DevExpress 19.2\...`, no vienen de NuGet).
- SQL Server (esquema legacy en español, compartido con API).

### API
- .NET SDK (ver `API/CLAUDE.md` para la versión exacta), acceso a SQL Server.

### DB
- SQL Server Management Studio o similar para ejecutar `DB/GresstScripts.sql` (funciones, procedimientos, tipos).

---

## Puesta en marcha (desarrollo local)

### App

```bash
npm install                     # también instala hooks de Husky vía `prepare`
cp .env.example .env            # define EXPO_PUBLIC_API_URL (ej. https://qa.api.gresst.com)
npx expo start                  # presiona i/a para iOS/Android, o escanea el QR
npm run ios / npm run android / npm run web
```

Si el backend no permite CORS desde `http://localhost:8081` (modo web), levanta el proxy local:

```bash
npm run proxy                   # y apunta EXPO_PUBLIC_API_URL a http://localhost:3001
```

### WebApp

```bash
npm install                      # también instala hooks de Husky vía `prepare`
cp .env.example .env             # define VITE_API_BASE_URL y VITE_GOOGLE_MAPS_API_KEY
npm run dev
```

Si `VITE_API_BASE_URL` está definido, Vite usa URLs relativas y proxea `/api` y `/login.aspx` en desarrollo — no hace falta configurar CORS.

### Legacy (Gestor / Generador)

Se abre la solución en Visual Studio (con DevExpress 19.2 instalado) y se ejecuta contra IIS Express o un IIS local; la cadena de conexión a SQL Server vive en `Web.config` de cada proyecto. No hay build vía npm/Node — es un proyecto .NET Framework clásico.

---

## Build y despliegue

### App
Build de producción con **EAS Build**:

```bash
node scripts/bump-app-version.js   # sube versión antes de un release
# build y submit gestionados vía EAS (perfiles development/preview/production)
```

Variables `EXPO_PUBLIC_API_URL` y `EXPO_PUBLIC_GOOGLE_MAPS_API_KEY` se gestionan como secrets en EAS. Al cambiar contratos consumidos por la App, revisar la política de versión mínima (`API/docs/APP-VERSION-POLICY.md`).

### WebApp

```bash
npm run build            # tsc -b && vite build — usa .env.production, deploy desde main
npm run build:staging    # usa .env.staging, deploy desde la rama staging
```

- **Staging:** GitHub Actions despliega automáticamente a **Azure Static Web Apps** en cada push a `staging`.
- **Producción:** CI (`build.yml`: lint + test + build) corre en push/PR a `main`; luego `deploy.yml` copia el artefacto por SSH/SCP a un **servidor Windows con IIS**, con backup automático del sitio anterior y `rollback.yml` para restaurarlo manualmente.
- `VITE_GOOGLE_MAPS_API_KEY` se inyecta en build time desde un secret de GitHub Actions (origen: Azure Key Vault) — Vite la embebe en el bundle, por lo que la key de Maps debe estar restringida por referrer HTTP.

### Legacy
Despliegue manual/IIS sobre `gestor.gresst.com` y `generador.gresst.com` — no hay pipeline CI/CD versionado en el repo para este stack (a diferencia de WebApp).

---

## Autenticación

| Cliente | Access token | Refresh |
|---|---|---|
| App | Bearer JWT, `client: "mobile"` | `expo-secure-store` |
| WebApp | Bearer JWT en memoria (nunca localStorage) | Cookie `HttpOnly + Secure + SameSite=Lax` (`refresh_token`) |
| Legacy/Gestor | Sesión InProc clásica **+** SSO nuevo (`AuthSsoService`) que valida/rota el mismo `refresh_token` | Cookie compartida con API/WebApp en dominio `.residuario.com` |
| Legacy/Generador | Sesión InProc propia, validada contra SQL directo | No aplica (sin SSO ni API nueva) |

El SSO entre Gestor y el stack nuevo permite que un usuario autenticado navegue entre Gestor y WebApp sin volver a iniciar sesión, mientras se migran pantallas gradualmente (`Site.Master.cs` en Gestor resuelve dinámicamente qué rutas ya están migradas a WebApp).

Contratos REST usan `/api/v1/*` en kebab-case; GraphQL usa `/graphql` con enums en `SCREAMING_SNAKE_CASE`. Cualquier cambio de contrato debe actualizarse en `API/docs/` y en los consumidores (App/WebApp) en el mismo cambio.

---

## Testing

| Repo | Framework | Comandos |
|---|---|---|
| App | Jest + React Native Testing Library | `npm test`, `npm run test:watch`, `npm run test:coverage` |
| WebApp | Vitest + Testing Library | `npm run test` (watch), `npm run test:run` (una vez), `npm run test:coverage` (umbral 70%, `test:coverage:strict` 80%) |
| Legacy | Sin suite automatizada versionada en el repo | — |

---

## Convenciones de código y commits

- **Conventional Commits** en todos los repos (`feat`, `fix`, `feat!`, …), header ≤ 100 caracteres.
- **App / WebApp:** hooks de Husky + commitlint instalados automáticamente por `npm install` (`prepare`).
- **API / Legacy:** hooks instalados manualmente una vez con `sh scripts/install-git-hooks.sh` (shell, sin Node).
- **App:** TypeScript estricto, sin `any`; componentes funcionales + hooks; naming `*Screen`/`*Service`/`use*`; i18n con `react-i18next` (`assets/i18n/{en,es}.json`).
- **WebApp:** TypeScript estricto, sin `any`; Feature-Driven obligatorio (`src/features/<name>/`); componentes de UI presentacionales, lógica en `hooks`/`services`; sin Apollo/axios/Redux/React Query — `fetch` propio.
- **Legacy:** capas desiguales por herencia del monolito — `Api`/`Gestor` llaman a `Servicios`; `Generador`/`SuperUser` a veces duplican lógica en vez de reusarla. No renombrar columnas/contratos de la base de datos legacy sin un proyecto de migración explícito.

---

## Documentación complementaria por repo

| Doc | Dónde |
|---|---|
| Qué vive en cada repo | [ownership.md](ownership.md) |
| Arquitectura Feature-Driven de WebApp | `WebApp/docs/ARCHITECTURE.md` |
| HTTP client (WebApp) | `WebApp/.claude/rules/http-client.md` |
| Auth — contrato | `API/docs/AUTHENTICATION.md` |
| Auth — checklist WebApp | `WebApp/docs/AUTHENTICATION.md` |
| Setup completo, i18n, mapas/rutas, EAS build (App) | `App/README.md` |
| Arquitectura, dominio, GraphQL, homologación legacy (API) | `API/docs/` |
| Casos canónicos de entrada/salida de residuos | [Casos de Entrada y Salida de Residuos](casos_entrada_salida_residuos.md) |

---

¿Dudas sobre la arquitectura general? Consulta [Arquitectura del Sistema](arquitectura.md).
