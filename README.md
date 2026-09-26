# GresstDocs

Documentación de **producto** del software de logística de residuos (Docsify): casos de negocio, guías de usuario y mapa de sistema para humanos.

Contratos y onboarding de ingeniería: [API/docs/SOLUTION.md](https://github.com/Gresst/GresstAPI/blob/main/docs/SOLUTION.md). Este sitio es producto: [docs/ownership.md](docs/ownership.md).

Publicado en **https://docs.gresst.com** (GitHub Pages de [Gresst/GresstDocs](https://github.com/Gresst/GresstDocs), rama `main`, carpeta raíz; dominio verificado en la organización).

Construida con [Docsify](https://docsify.js.org/).

## 🌐 Publicación en GitHub Pages

1. Sube este repositorio a GitHub
2. Ve a **Settings** → **Pages**
3. En **Source**, selecciona la rama principal (main/master)
4. En **Folder**, selecciona **/ (root)**
5. Click en **Save**
6. GitHub Pages generará automáticamente la URL de tu documentación

## 💻 Desarrollo Local

Para ver la documentación localmente antes de subirla, usa cualquiera de estas opciones:

### Opción 1: Python (viene preinstalado en Mac)
```bash
python3 -m http.server 3000
```

### Opción 2: PHP (viene preinstalado en Mac)
```bash
php -S localhost:3000
```

### Opción 3: Extensión de VS Code
1. Instala la extensión **"Live Server"** en VS Code
2. Click derecho en `index.html` → **"Open with Live Server"**

Luego abre `http://localhost:3000` en tu navegador.

## 📁 Estructura del Proyecto (Estándar Docsify)

```
GresstDocs/
├── CLAUDE.md                 # Guía para agentes (producto, no contratos)
├── index.html                # Configuración de Docsify (raíz)
├── .nojekyll                 # Para GitHub Pages (raíz)
├── .gitignore
├── README.md                 # Este archivo
└── docs/                     # Archivos de documentación
    ├── README.md             # Página de inicio
    ├── _sidebar.md           # Menú lateral
    ├── ownership.md          # Qué vive aquí vs cada repo de código
    ├── arquitectura.md          # Cómo funciona Gresst (cuentas, terceros, conexiones)
    ├── identidad.md             # Ficha vs entidad legal, verificación de cuentas
    ├── catalogos.md             # Instalaciones y capacidades, vehículos, catálogos
    ├── solicitudes.md           # Tipos, participantes, programación, estados
    ├── certificados.md          # Certificados, manifiestos, emisión y verificación
    ├── operaciones.md           # Las 18 operaciones y los cambios del residuo
    ├── residuos.md              # Clasificación LER / Y / A-B / UN / D-R y marcas
    ├── trazabilidad.md          # Historial y recorrido entre cuentas
    ├── guia_webapp.md
    ├── guia_app.md
    ├── guia_conexiones.md       # Trabajar conectados entre cuentas
    ├── casos_entrada_salida_residuos.md  # Casos por operación (las 18)
    ├── procesos_operativos.md   # Soporte
    └── guia_tecnica.md          # Puntero a API/docs/SOLUTION.md
```

## 📝 Agregar Nueva Documentación

1. Crea un nuevo archivo `.md` en la carpeta `docs/`
2. Agrega un enlace en `docs/_sidebar.md`
3. Los cambios se verán reflejados automáticamente

## 🎨 Características

- ✅ Búsqueda en tiempo real
- ✅ Menú lateral navegable
- ✅ Paginación entre páginas
- ✅ Copiar código con un click
- ✅ Zoom en imágenes
- ✅ Resaltado de sintaxis
- ✅ Soporte para tabs
- ✅ Emojis
- ✅ Diseño responsive
- ✅ Sin dependencias de Node.js - funciona 100% desde CDN

## 📚 Más Información

Para personalizar y extender esta documentación:
- [Docsify Documentation](https://docsify.js.org/)
- [Docsify Plugins](https://docsify.js.org/#/plugins)

## 📄 Licencia

MIT
