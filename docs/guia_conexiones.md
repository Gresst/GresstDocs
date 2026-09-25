# Guía — Trabajar conectados en Gresst

Cuando un **cliente** (generador) y su **gestor** tienen cuenta en Gresst, pueden **conectarse**: el cliente pide servicios, aprueba lo que el gestor registra a su nombre y consulta sus certificados sin volver a digitar nada. Si una de las dos empresas no tiene cuenta, todo sigue funcionando como hoy: el que tiene cuenta registra solo.

Esta guía reemplaza, para los clientes, al [Portal de Generadores (Legacy)](guia_generador.md). Todo ocurre en el **WebApp** ([guía general](guia_webapp.md)).

---

## Qué es una conexión

- Es un acuerdo **entre dos cuentas**, no entre dos usuarios. Se hace una sola vez.
- Cada empresa **conserva sus propios datos**. Conectarse no mezcla catálogos ni inventarios: lo que se comparte son las **solicitudes**, las **entregas** y los **certificados** entre las dos.
- Al conectarse, cada una ve **en modo lectura** el historial que la otra ya tiene sobre su empresa (solicitudes y certificados anteriores).
- **Relaciones traídas del sistema anterior:** si ya trabajabas con tu gestor en el portal de Generadores, la conexión ya existe. En Terceros la verás como *Conectado* y, en el detalle, "Relación traída del sistema anterior".

---

## Para clientes

Entra al WebApp y elige la vista **Tercerización** (arriba, junto a Configuración, Operaciones y Control). Ahí está todo lo que tiene que ver con tus proveedores.

### Ver a mis proveedores conectados

**Terceros** muestra tus terceros con una columna **Gresst**:

| Estado | Qué significa |
|--------|---------------|
| **Conectado** | Trabajan conectados. |
| **Invitación enviada** | Invitaste a esa empresa y aún no responde. |
| **Por responder** | Esa empresa te invitó; acepta o rechaza desde el menú **⋮** de la fila. |
| **No conectado** | Sin conexión. Puedes **Invitar a Gresst** desde el menú **⋮**. |

Si te invita una empresa que todavía no tienes como tercero, la invitación aparece **encima de la lista** con **Aceptar** y **Rechazar**. Al aceptar, se agrega a tus terceros.

En la ficha de un proveedor conectado:

- El **nombre y la identificación** no se editan: vienen de su cuenta en Gresst ("Conectado en Gresst como …").
- Solo verás **Resumen** y **Contactos**. Sus sedes, vehículos y catálogo los administra el proveedor en su cuenta.

### Pedir un servicio

1. **Tercerización → Solicitudes a proveedores → Nueva solicitud.**
2. **Proveedor (destinatario):** elige tu gestor (aparece con el nombre de su cuenta).
3. **Punto de recolección:** tus sedes tal como el gestor las tiene registradas.
4. **Punto de recepción:** en transporte es **opcional**; el gestor elige su planta cuando programa la recolección. En recepción (tú llevas el residuo) es obligatorio.
5. **Ítems:** los materiales y tratamientos son **los del gestor**. No se piden precios: los fija el gestor.
6. Guarda o confirma. La solicitud llega a tu gestor como **borrador** para que la revise; tú la sigues en *Solicitudes a proveedores*.

¿Falta una sede o un material? Revisa **Tercerización → Lo que mis proveedores tienen de mí** (siguiente sección) y pídele a tu gestor que lo agregue.

### Aprobar lo que el gestor registra a mi nombre

Cuando tu gestor crea una solicitud a nombre de tu empresa, **no se ejecuta hasta que la apruebes**:

- Te llega un **correo** ("… te pide aprobar la solicitud N") al dueño de la cuenta.
- En el menú, **Solicitudes a proveedores** muestra un **contador** con las pendientes.
- En la lista, la solicitud aparece como **Por aprobar**, con la columna **Responder antes de**.
- Desde el menú **⋮** de la fila: **Aprobar** (queda activa y el gestor puede ejecutarla) o **Rechazar**.

Tienes **3 días hábiles** (lunes a viernes). Si no respondes, la solicitud **se cancela**; nunca se aprueba sola.

Aprobar y rechazar requiere permiso de gestionar solicitudes a proveedores; ver la lista requiere el de consultarlas.

### Consultar lo que mi proveedor tiene de mí

**Tercerización → Lo que mis proveedores tienen de mí.** Eliges el proveedor y ves, en modo lectura, lo que él tiene registrado de tu empresa: **Sedes**, **Residuos**, **Materiales**, **Vehículos** y **Contactos**. Es exactamente lo que el formulario de solicitud te deja elegir.

### Certificados

**Tercerización → Certificados recibidos:** los certificados que tus proveedores conectados te publicaron, con enlace al PDF. Un certificado publicado no se modifica; si el proveedor lo anula, lo verás como *Anulado*.

---

## Para gestores

### Invitar a un cliente

- Al **crear un tercero**, Gresst pregunta una sola vez si quieres invitarlo a trabajar conectados. **No se envía nada** si respondes *No, gracias*.
- Después puedes invitarlo desde **Terceros → ⋮ → Invitar a Gresst** o desde la tarjeta *Conexión Gresst* de su ficha.
- La pregunta es la misma tenga o no cuenta tu cliente: si la tiene, recibe la invitación en su WebApp; si no, un correo para crear su cuenta.
- Para invitar, el tercero necesita su **identificación** (NIT o documento).

### Registrar una solicitud a nombre de un cliente conectado

Cuando confirmas en el WebApp una solicitud para un cliente conectado:

- Queda **Esperando aprobación del cliente** y **no se puede ejecutar** (tampoco desde el portal Gestor clásico).
- El cliente recibe un correo y tiene **3 días hábiles** para aprobarla o rechazarla. Si no responde, se cancela.
- Las solicitudes que el propio cliente te envía llegan como **borrador** a tu lista: no necesitan su aprobación.
- Las solicitudes que creas en el portal Gestor clásico siguen llegando activas, como hoy.

Con clientes **sin cuenta** (o no conectados) nada cambia: la solicitud queda activa al confirmarla.

### La ficha de un cliente conectado

- El **nombre y la identificación** no se editan: vienen de la cuenta del cliente.
- Sus **sedes, materiales y precios** siguen siendo **tuyos** y se editan como siempre: con ellos operas tus rutas, recepciones y certificados, y son lo que el cliente ve en *Lo que mis proveedores tienen de mí*.

---

## Desconectarse

Desde **Terceros → ⋮ → Desconectar** (cualquiera de las dos empresas). Dejan de intercambiar documentos nuevos; lo que ya compartieron sigue visible para ambos.

---

## Preguntas frecuentes

**No veo a mi gestor como receptor al pedir un servicio.** Revisa en **Terceros** que aparezca como *Conectado*. Si está *No conectado*, invítalo o pídele que te invite.

**No puedo cambiar el nombre de mi proveedor.** Está conectado: su nombre viene de su cuenta en Gresst.

**Mi sede no aparece en el punto de recolección.** El formulario muestra tus sedes como las registró el gestor. Míralo en *Lo que mis proveedores tienen de mí* y pídele que la agregue.

**Una solicitud desapareció de "Por aprobar".** Si pasaron los 3 días hábiles, se canceló. Pídele al gestor que la registre de nuevo.

Casos de negocio de entrada y salida de residuos: [Casos de entrada y salida](casos_entrada_salida_residuos.md).
