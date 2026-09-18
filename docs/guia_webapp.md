# Guía de Usuario — WebApp

El cliente web nuevo de Gresst (**WebApp**) reemplaza de a poco al portal **Gestor**. Si tu cuenta todavía entra por `https://gestor.gresst.com`, usa la [Guía del Portal de Gestores (Legacy)](guia_portal_gestores.md).

Esta guía describe lo que ves en WebApp **hoy**: menú por proceso (Entrada, Logística, …) y, en Transporte y Recepción, captura con pestañas **Abiertas / Cerradas**. No es el flujo antiguo de *Listado → Planear → Ejecutar* del Gestor.

Casos de negocio (quién firma, dominio, descarga en depósito propio): [Casos de entrada y salida](casos_entrada_salida_residuos.md).

## Acceso

La pantalla de inicio pide **usuario o correo** y **claveave**. Hay **¿Olvidó su clave?** y **Regístrese ahora** si tu empresa aún no tiene cuenta.

Lo que ves en el menú depende de los **permisos** de tu usuario. Algunas pestañas de proceso (por ejemplo Retorno o Donación) muestran el mismo tipo de pantalla pero vacía hasta que ese proceso esté migrado.

Desde el menú de usuario (no el lateral) abres **Configuración de la cuenta**: Cuenta, Usuarios, Roles, Parámetros, Módulos, Integraciones.

---

## Menú lateral (objetivo actual)

Los divisores entre grupos no llevan título visible; agrupan opciones.

| Área | Opciones | Qué verás al entrar |
|------|----------|---------------------|
| Inicio | Inicio | Home |
| Operaciones | **Solicitudes** | Subproceso Transporte / Recepción (si el tenant tiene ambos). Luego **Abiertas** / **Cerradas** |
| Operaciones | **Entrada** | Generación · **Recepción**. Recepción usa **Abiertas / Cerradas** |
| Operaciones | **Logística** | Recolección · **Transporte** · Retorno. Transporte (y Recolección cuando aplica) usan **Abiertas / Cerradas** |
| Operaciones | **Transformación** | Procesamiento · Tratamiento · Segregación · Consolidación · Refinación · Digestión |
| Operaciones | **Custodia** | Acopio · Ajuste |
| Operaciones | **Salida / Destino final** | Transferencia · Donación · Aprovechamiento · Disposición · Confinamiento. Transferencia / Disposición / Confinamiento: **Abiertas / Cerradas** |
| Inventario | **Residuos** · **Materiales** | Inventario de residuos vs materiales aprovechables |
| Documentos | **Certificados** · **Documentos** | Certificados por tipo de operación (Pendientes / Emitidos). Documentos: manifiestos |
| Integraciones | **Enviar** | Pendientes / Enviados (p. ej. SIESA) |
| Analítica | **Tableros** · **Reportes** | Indicadores y reportes |
| Catálogos | **Red operativa** | Empleados · Instalaciones · Vehículos |
| Catálogos | **Residuos** | Residuos · Materiales · Embalajes · Insumos |
| Catálogos | **Servicios** | Servicios · Tratamientos |
| Catálogos | **Terceros** | Listado y ficha del tercero (instalaciones anidadas) |

Hoy tienen operación real detrás, entre otras: **Recepción**, **Transporte**, **Recolección**, **Tratamiento**, **Transferencia**, **Disposición**. El resto de hojas de Operaciones puede verse como pantalla completa en ceros (no un simple “próximamente”).

---

## Cómo se trabaja Transporte y Recepción

Misma idea en **Logística → Transporte** y **Entrada → Recepción**:

1. **Abiertas** — todavía se puede modificar. **Cerradas** — finalizadas, solo lectura.
2. Una ruta (transporte) o un día de recepción **no se parte** entre las dos pestañas. Si una parada o un cliente ya cerró pero la operación sigue abierta, la fila permanece en **Abiertas** (con badge de finalizada en ese nodo).
3. La **fecha** de la fila es la fecha operacional: cuándo se cargó/recibió de verdad; si aún no, la programada; si nunca se programó, la solicitada.
4. Puedes **planear** (asignar cuándo y con qué vehículo/punto) cuando tu rol lo permite. La planeación **no es un paso obligatorio** para todas las cuentas: si el tenant no exige plan, puedes **registrar carga o recepción** y el sistema arma solicitud, orden e inicio por debajo.
5. El trabajo se cierra **por parada** (transporte) o **por cliente en un punto** (recepción): todos los residuos de ese grupo quedan con la misma fecha; no hay cierre a medias.
6. En una fecha futura el registro se ve, pero al recibir/cargar el sistema avisa que se guardará **con la fecha de hoy**.

Detalle de acciones y permisos (producto técnico): `WebApp/docs/OPERATIONS-CAPTURE-MODEL.md`.

### Transporte (árbol)

Ruta → paradas → residuos. En Abiertas pueden aparecer solicitudes **aún no armadas como ruta** (según permiso). Acciones típicas del menú de fila: iniciar, reprogramar, recoger o rechazar, agregar residuo o parada, finalizar la ruta. Hay vista de **mapa** de la operación (placa, paradas, captura en panel).

### Recepción (maestro–detalle)

Maestro: cliente + fecha + punto de recepción. Detalle: residuos. La “orden del día” no se opera a mano: se abre y cierra al trabajar los clientes.

---

## Solicitudes

Pide recolección o recepción (y tipos que el tenant tenga activos). El listado usa **Abiertas / Cerradas** (ciclo de la solicitud), no las pestañas Activas/Históricas del Gestor.

El formulario cubre tipo, quiénes participan (generador, transportador, receptor), periodo, recurrencia opcional, soportes de ruta cuando hay varios actores, e ítems de residuo (material, tratamiento, cantidades, embalaje, precios, notas).

---

## Otras operaciones de planta

**Tratamiento**, **Transferencia** y **Disposición** (y hojas similares) viven bajo Transformación o Salida, no bajo un menú llamado “En instalación”.

| Proceso | Para qué sirve |
|---------|----------------|
| **Recepción** | Registrar lo que llega a la instalación (tercero o vehículo propio). |
| **Tratamiento** | Transformar residuos en planta. |
| **Disposición** | Confirmar cantidades a disponer y descontar inventario. |
| **Transferencia** | Entregar a un tercero: cambia de dueño y sale de tu inventario. |
| **Generación** | Declarar residuo que ya existe en sitio (sin solicitud previa). |

---

## Catálogos

Red operativa, residuos, servicios y terceros: selector de propietario si aplica, búsqueda, grilla y alta/edición.

**Residuos vs materiales:** un tipo puede ser residuo o material aprovechable; en inventario y en catálogo van en vistas paralelas. Convertir uno en el otro es una acción explícita del menú de la fila, no un interruptor silencioso.

**Instalaciones (ejemplo de ficha):** nombre, instalación padre, dirección, contactos, capacidades (recolectar, almacenar, disponer, entregar, recibir, tratar) y activo.

---

## Certificados y envíos

**Certificados:** una pestaña por tipo de operación; dentro, **Pendientes** y **Emitidos**. Solo algunos tipos (recepción, transporte, disposición, tratamiento, transferencia, procesamiento) tienen datos reales del legacy; el resto usa la misma pantalla en ceros.

**Enviar (SIESA u otras):** Pendientes / Enviados. Las credenciales se editan en **Cuenta → Integraciones**, no en esta pantalla.

---

## App de campo

Conductores: [Guía de Usuario — App Móvil](guia_app.md). La descarga en un depósito **propio** del gestor no la cierra el conductor; la cierra **Recepción** en planta ([caso 1.2.a](casos_entrada_salida_residuos.md)).

Instalación y entornos: [Guía técnica](guia_tecnica.md).
