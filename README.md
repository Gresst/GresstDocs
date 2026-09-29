# GresstDocs

Documentación de **producto** del software de logística de residuos (Docsify): casos de negocio, guías de usuario y cómo funciona Gresst. Qué vive aquí y qué no: [docs/ownership.md](docs/ownership.md).

Contratos y onboarding de ingeniería: [API/docs/SOLUTION.md](https://github.com/Gresst/GresstAPI/blob/main/docs/SOLUTION.md).

Publicado en **https://docs.gresst.com** (GitHub Pages desde `main`, carpeta raíz).

## Vista previa local

```bash
python3 -m http.server 3000
```

Luego abre `http://localhost:3000`. No requiere Node: Docsify y sus plugins se cargan desde CDN (`index.html`).

## Estructura

- `index.html`: configuración de Docsify.
- `docs/README.md`: página de inicio; `docs/_sidebar.md`: menú lateral.
- `docs/*.md`: una página por tema (conceptos, operaciones, casos, guías de WebApp y App, soporte).

Para agregar una página: crea `docs/<nombre>.md` y enlázala desde `docs/_sidebar.md`.
