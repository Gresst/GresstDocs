# Guía App móvil

> Esta guía describe la app móvil de Gresst para conductores y personal de campo (iOS/Android).

## Acceso al sistema

La pantalla de inicio de sesión pide **correo** y **contraseña**. Si olvidaste tu clave, el enlace **"¿Olvidaste tu contraseña?"** te guía por 3 pasos: ingresar tu correo → ingresar el código que te llega por email → definir una nueva clave.

---

## Navegación principal

Al abrir la app con sesión iniciada, verás dos pestañas en la parte inferior:

- **Jornada** — tus operaciones del día (con selector de fecha).
- **Inventarios** — el inventario actual de tu camión.

Desde **Jornada** navegas hacia el detalle de tu trabajo:

```
Jornada → Operación → Paradas → Residuos de la parada → Confirmar/Rechazar residuo
```

---

## Iniciar una operación de transporte

Antes de ver las paradas de una operación de transporte que aún no has iniciado, la app te pide completar una pantalla de inicio:

- Nombre del firmante
- Identificación
- Rol
- Kilometraje
- **Firma dibujada en pantalla**

Una vez firmado, pasas a la lista de paradas.

---

## Paradas de la operación

Cada tarjeta de parada muestra el tercero/instalación, la dirección y un resumen de los residuos a recoger o entregar. Desde esta pantalla puedes:

- Tocar una parada para ver sus residuos.
- Agregar una **parada no planeada** con el botón **"+"** (eligiendo instalación de recolección y de entrega).
- Abrir el mapa desde el encabezado.
- Tocar **"Completar transporte"** cuando ya resolviste todas las paradas.

---

## Residuos de una parada

Cada línea de residuo se puede confirmar rápido (cantidades + botones Cancelar/Editar/Confirmar) o, si hace falta más detalle, abre una pantalla de recepción donde puedes:

- Editar la **cantidad** (conteo, peso o volumen — el peso se calcula automáticamente según el tipo de residuo).
- Elegir el **empaque**.
- **Tomar fotos** (cámara o galería, con límite de cantidad y tamaño).
- **Confirmar** o **Rechazar** el residuo.

También puedes agregar un **residuo no planeado** con el botón "+". Al terminar con todos los residuos de la parada, el botón del pie de pantalla cambia entre **"Rechazar parada"** y **"Finalizar parada"** (este último abre la pantalla de aprobación: firmante, identificación, rol, firma y, opcionalmente, métricas del vehículo).

---

## Mapa y ruta

El mapa muestra cada parada como un pin (con color según su estado) y la ruta calculada desde tu ubicación actual hasta las paradas pendientes. Tocar un pin abre los residuos de esa parada; también puedes agregar una parada no planeada desde aquí.

**Importante:** si usas la app en **Expo Go** (sin instalación nativa completa) o en la **versión web**, el mapa no está disponible — verás un mensaje indicándolo en vez del mapa real. Para tener mapa y GPS necesitas la versión instalada de la app (build nativa).

---

## Inventario del camión

La pestaña **Inventarios** muestra lo que llevas cargado: tipo de residuo, tercero/instalación de origen y cantidades. Tiene buscador y puedes deslizar hacia abajo para actualizar ("pull to refresh").

---

## Modo sin conexión

Si te quedas sin señal, verás un aviso **"Sin conexión a internet"** en la parte superior. Puedes seguir confirmando o rechazando residuos y cerrando paradas con normalidad — la app no te bloquea. Cada acción sin conexión se guarda localmente con el aviso **"Guardado sin conexión. Se sincronizará cuando vuelvas a estar en línea"**, y verás un contador de envíos pendientes en el encabezado (puedes tocarlo para reintentar el envío manualmente). Al recuperar señal, la app sincroniza automáticamente lo pendiente.

---

## Otras pantallas útiles

- **Catálogos** (desde el menú del encabezado): instalaciones, tipos de residuo, terceros y empaques, con buscador.
- **Tareas:** lista de tareas asignadas, con detalle y opción de actualizar.
- **Buscar:** búsqueda de certificados por texto.
- **Perfil:** tu nombre, correo y rol (solo lectura).
- El mismo menú: sincronización manual, idioma, cierre de sesión y **En instalación**.

---

## En instalación (planta)

Ese nombre **solo existe en la App** (`En instalación` / `At facility`). En el WebApp las mismas operaciones están en la vista **Operaciones**.

Desde el menú del encabezado abres recepción, transferencia, disposición, tratamiento (y clasificación si tu cuenta la tiene). No es una ruta con paradas:

1. Ves las **órdenes** de ese proceso (planta + fecha).
2. Si hace falta, **planeas** líneas sueltas a una planta y un día.
3. **Capturas** cantidades (y composición en tratamiento/clasificación) en el teléfono, también **sin red**.
4. **Cierras** la orden de una vez (todas las líneas capturadas); no se cierra residuo a residuo como el transporte.

La descarga en un depósito propio **no** se hace aquí ni en Jornada: la cierra **Recepción** de planta en WebApp ([§1.2.a](casos_entrada_salida_residuos.md)).

---

## Descarga en depósito propio (1.2.a)

Si la parada es un **depósito de tu propia cuenta**, **no capturas la descarga** en la App: esa parada no aparece para unload. El cierre lo hace planta con **Recepción** en WebApp. Detalle: [Casos por operación](casos_entrada_salida_residuos.md) §1.2.a.

---

Coordinación, planta y administración trabajan en el WebApp: [Guía WebApp](guia_webapp.md).
