# Trabajar conectados

Cuando dos empresas que trabajan juntas tienen cuenta en Gresst —un **cliente** que contrata servicios y un **proveedor** que los presta— pueden **conectar sus cuentas**. El cliente pide servicios, aprueba lo que el proveedor registra a su nombre y recibe sus certificados; los residuos que una transfiere le llegan a la otra como entrega. Nadie vuelve a digitar lo que ya registró la otra cuenta.

Si una de las dos empresas no tiene cuenta, o no están conectadas, todo sigue funcionando: la cuenta que sí está en Gresst registra por su lado.

---

## Qué es una conexión

- Es un acuerdo **entre dos cuentas**, no entre dos usuarios. Se hace una sola vez.
- Cada cuenta **conserva sus propios datos**. Conectarse no mezcla catálogos ni inventarios: lo que se comparte son las **solicitudes**, las **entregas** y los **certificados** entre las dos.
- Al conectarse, cada una ve **en modo lectura** el historial que la otra ya tiene sobre su empresa (solicitudes y certificados anteriores).
- Una misma empresa puede ser tu cliente y tu proveedor a la vez: la conexión es una sola.

---

## Conectarse

**Configuración → Terceros** muestra tus terceros con una columna **Gresst**:

| Estado | Qué significa |
|--------|---------------|
| **Conectado** | Trabajan conectados. |
| **Invitación enviada** | Invitaste a esa empresa y aún no responde. |
| **Por responder** | Esa empresa te invitó; acepta o rechaza desde el menú **⋮** de la fila. |
| **No conectado** | Sin conexión. Puedes **Invitar a Gresst** desde el menú **⋮**. |

- Al **crear un tercero**, Gresst pregunta una sola vez si quieres invitarlo. **No se envía nada** si respondes *No, gracias*.
- Después puedes invitarlo desde **⋮ → Invitar a Gresst** o desde la tarjeta *Conexión Gresst* de su ficha.
- Si tiene cuenta, recibe la invitación en su WebApp; si no, un correo para crear su cuenta.
- Para invitar, el tercero necesita su **identificación** (NIT o documento).
- Si te invita una empresa que todavía no tienes como tercero, la invitación aparece **encima de la lista** con **Aceptar** y **Rechazar**. Al aceptar, se agrega a tus terceros.

**La ficha de un tercero conectado:** el **nombre y la identificación** no se editan; vienen de su cuenta ("Conectado en Gresst como …").

- Si es tu **proveedor**, solo verás **Resumen** y **Contactos**: sus sedes, vehículos y catálogo los administra él en su cuenta.
- Si es tu **cliente**, sus **sedes, materiales y precios** siguen siendo **tuyos** y se editan como siempre: con ellos operas tus rutas, recepciones y certificados, y son lo que el cliente ve en *Lo que mis proveedores tienen de mí*.

---

## Si contratas servicios

Trabajas en la vista **Tercerización**.

### Pedir un servicio

1. **Tercerización → Solicitudes a proveedores → Nueva solicitud.**
2. **Proveedor (destinatario):** elige tu proveedor (aparece con el nombre de su cuenta).
3. **Punto de recolección:** tus sedes tal como el proveedor las tiene registradas.
4. **Punto de recepción:** en transporte es **opcional**; el proveedor elige su planta cuando programa la recolección. En recepción (tú llevas el residuo) es obligatorio.
5. **Ítems:** los materiales y tratamientos son **los del proveedor**. No se piden precios: los fija el proveedor.
6. Guarda o confirma. La solicitud le llega a tu proveedor como **borrador** para que la revise; tú la sigues en *Solicitudes a proveedores*.

¿Falta una sede o un material? Revisa **Lo que mis proveedores tienen de mí** y pídele a tu proveedor que lo agregue.

### Aprobar lo que el proveedor registra a tu nombre

Cuando tu proveedor crea una solicitud a nombre de tu empresa, **no se ejecuta hasta que la apruebes**:

- Al propietario de tu cuenta le llega un **correo** ("… te pide aprobar la solicitud N").
- En el menú, **Solicitudes a proveedores** muestra un **contador** con las pendientes.
- En la lista, la solicitud aparece como **Por aprobar**, con la columna **Responder antes de**.
- Desde el menú **⋮** de la fila: **Aprobar** (queda activa y el proveedor puede ejecutarla) o **Rechazar**.

Tienes **3 días hábiles** (lunes a viernes). Si no respondes, la solicitud **se cancela**; nunca se aprueba sola.

Aprobar y rechazar requiere el permiso de gestionar solicitudes a proveedores; ver la lista, el de consultarlas.

### Lo que tu proveedor tiene de ti

**Tercerización → Lo que mis proveedores tienen de mí.** Eliges el proveedor y ves, en modo lectura, lo que él tiene registrado de tu empresa: **Sedes**, **Residuos**, **Materiales**, **Vehículos** y **Contactos**. Es exactamente lo que el formulario de solicitud te deja elegir.

### Certificados

**Tercerización → Certificados:** los certificados que tus proveedores te publicaron, con enlace al PDF. Un certificado publicado no se modifica; si el proveedor lo anula, lo verás como *Anulado*.

---

## Si prestas servicios

### Registrar una solicitud a nombre de un cliente conectado

Cuando confirmas una solicitud para un cliente conectado:

- Queda **Esperando aprobación del cliente** y **no se puede ejecutar**.
- El cliente recibe un correo y tiene **3 días hábiles** para aprobarla o rechazarla. Si no responde, se cancela.
- Las solicitudes que el propio cliente te envía llegan como **borrador** a tu lista: no necesitan su aprobación.

Con clientes **sin cuenta** o no conectados, la solicitud queda activa al confirmarla.

### Publicar certificados

En **Control → Certificados → Emitidos**, **Publicar** deja el certificado visible en la cuenta de tu cliente conectado.

---

## Entregas entre cuentas conectadas

Cuando le **transfieres** residuos a una cuenta conectada contigo:

- **Quien envía:** la Transferencia saca el residuo de tu inventario y le envía una **entrega**. En tu lista de Transferencias verás su estado: *Enviada al receptor*, *Sin respuesta del receptor*, *Recibida*, *Rechazada* o *Cerrada sin confirmar*.
- **Quien recibe:** le llega un correo y la ve en **Operaciones → Recepción**, pestaña **Abiertas**, en *Entregas por recibir* (el menú muestra cuántas hay).
  - **Recibir:** eliges tu punto de recepción y, por cada residuo, **tu propio tipo de residuo** y lo que realmente llegó (viene prellenado con lo declarado). Se crea un residuo nuevo en tu inventario; lo que declaró quien envía no cambia y las dos cifras quedan guardadas.
  - **Rechazar:** con un motivo. Nada entra a tu inventario y quien envía registra la devolución.
- **Transportador conectado (opcional):** al hacer la Transferencia, quien envía puede elegir un **Transportador** entre sus cuentas conectadas. El transportador recibe un correo y ve la entrega en **Operaciones → Transporte**, pestaña **Abiertas**, en *Entregas a transportar*: registra la **recogida** y luego la **entrega** (fecha, vehículo y conductor). Su inventario no cambia. Quien recibe ve en su bandeja quién transporta y cuándo se recogió y entregó.
- Quien recibe tiene **5 días hábiles** para responder.
- **Si no responde a tiempo**, quien envía puede usar **⋮ → Cerrar sin confirmación** en la Transferencia. Queda marcada así para las dos cuentas; si quien recibe la registra después, igual se enlaza.
- **Si la rechaza**, quien envía usa **⋮ → Registrar devolución**: los residuos vuelven a su inventario, en el depósito de donde salieron, con las cantidades declaradas.

Si la otra empresa no tiene cuenta o no están conectadas, la Transferencia saca el residuo de tu inventario y lo pasa a ese tercero, sin entrega.

### Ver el recorrido de un residuo

En **Control → Reportes → Trazabilidad**, al elegir un residuo que pasó por cuentas conectadas aparece **Recorrido entre empresas**: *de dónde vino* y *a dónde fue*, con la empresa, el tipo de residuo, las fechas, las operaciones, la planta y las cantidades de cada paso. Nunca se muestran precios ni notas internas. Si tu residuo se consolidó con el de otros clientes, ves el resultado y lo que pasó después, pero no los residuos de los otros clientes.

---

## Desconectarse

Desde **Terceros → ⋮ → Desconectar** (cualquiera de las dos cuentas). Dejan de intercambiar documentos nuevos; lo que ya compartieron sigue visible para ambas.

---

## Preguntas frecuentes

**No veo a mi proveedor al pedir un servicio.** Revisa en **Terceros** que aparezca como *Conectado*. Si está *No conectado*, invítalo o pídele que te invite.

**No puedo cambiar el nombre de un tercero.** Está conectado: su nombre viene de su cuenta en Gresst.

**Mi sede no aparece en el punto de recolección.** El formulario muestra tus sedes como las registró el proveedor. Míralo en *Lo que mis proveedores tienen de mí* y pídele que la agregue.

**Una solicitud desapareció de "Por aprobar".** Si pasaron los 3 días hábiles, se canceló. Pídele al proveedor que la registre de nuevo.

Reglas de cada operación: [Casos por operación](casos_entrada_salida_residuos.md).
