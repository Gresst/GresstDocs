# Solicitudes

Una **solicitud** es el pedido de un servicio sobre uno o varios residuos: recogerlos (transporte) o recibirlos en planta (recepción). Cada residuo de la solicitud es un **ítem**, con su material, tratamiento, cantidades, embalaje, precios y notas.

## Dónde se ven

| Vista | Qué solicitudes | Menú |
|-------|-----------------|------|
| **Operaciones** | Las que te piden tus clientes | Solicitudes de transporte · Solicitudes de recepción |
| **Tercerización** | Las que tú pides a tus proveedores | Solicitudes a proveedores |

Todas las listas tienen pestañas **Abiertas / Cerradas**. Cada solicitud aparece en una sola:

| Pestaña | Qué trae |
|---------|----------|
| **Abiertas** | Borradores, pendientes de confirmar, activas y las que esperan la aprobación del cliente |
| **Cerradas** | Las terminadas, las vencidas, las cerradas por un supervisor, las rechazadas y las anuladas |

En **Cerradas** puedes filtrar por motivo del cierre (por ejemplo, ver solo lo vencido). Cómo se leen esos motivos: [Cierres y vencimientos](guia_cierres.md#el-motivo-de-cada-cierre).

## Tipos

- **Transporte:** el proveedor recoge los residuos en las sedes del cliente y los lleva a su planta.
- **Recepción:** el cliente lleva los residuos a la planta del proveedor.

La cuenta solo ve los tipos de las operaciones que tiene habilitadas.

## El tipo de cada ítem

Cada ítem usa un tipo de **tu catálogo**.

- Si el tipo **lleva inventario**, el ítem señala un residuo que registraste en Generación y **reserva** una cantidad. El inventario no baja al pedir: baja al entregar. La suma reservada en solicitudes abiertas no supera lo disponible, así que el mismo residuo no se pide dos veces.
- Si no lleva inventario, el ítem solo lleva una cantidad estimada. Nada se descuenta; las cifras del certificado quedan como referencia.

Al pedir indicas a qué tipo del proveedor corresponde el tuyo, si esa correspondencia aún no está confirmada. Si tomaste el tipo del catálogo del proveedor, nace confirmada: es el tipo de él. Él confirma o corrige la que propones. Sin un tipo equivalente de él, esa línea no se puede enviar; el formulario lo dice y ofrece **avisarle** por correo con los datos del tipo.

La solicitud le llega en **sus** términos: su tipo y su registro de tu sede. Tú sigues viendo tus nombres. Él ve los suyos y el tuyo como referencia: *Aceites minerales usados · Cliente: Aceite usado – Planta norte*. Esa referencia queda fija en la solicitud y en cada documento. Renombrar el tipo o la sede cambia los documentos nuevos y no la correspondencia.

Cancelar la solicitud libera lo reservado.

### Cantidades

| Momento | Cifra | Inventario de quien pide |
|---------|-------|--------------------------|
| Generación | La que registra | Entra |
| Solicitud | Estimada; **reservada** del residuo | Igual (queda reservada) |
| Entrega | La que declara quien entrega | Sale, por lo declarado |
| Recepción | La que pesa el proveedor | Igual; la diferencia queda como ajuste |
| Certificado | La recibida por el proveedor | Se muestra en el residuo de quien pidió |

- En la entrega, si declaras menos de lo reservado, el resto queda disponible. Si declaras más, puedes hasta lo disponible; por encima, primero corriges la generación.
- Puedes marcar tu cifra como **estimada** (no pesas). Cuando el proveedor recibe, te ofrece *El proveedor recibió 118 kg — ¿ajustas tu inventario?* y ese ajuste lo registras tú. Si no la marcaste estimada, la diferencia solo queda registrada.
- Las cifras van en unidades fijas (kg, m³, unidades): lo declarado en tu medida principal y lo recibido en la del proveedor. No hay conversión.
- Quien recibe puede **rechazar un ítem** con un motivo (devuelve ese residuo, por ejemplo un tambor no conforme) y recibir el resto. Una diferencia dentro del ítem es medición, no rechazo.

Correspondencias, sedes y vehículos: [Instalaciones, vehículos y catálogos](catalogos.md#correspondencia-con-otra-cuenta) y [Trabajar conectados](guia_conexiones.md).

## Cuándo se cierra una solicitud

Una solicitud activa se cierra sola en dos casos. Cada uno queda con su motivo, con **Sistema** como autor (ver [Cierres y vencimientos](guia_cierres.md)).

- **Completada.** Cuando todos sus residuos terminaron su ciclo en tu cuenta: se recogieron o recibieron y ya no queda nada en tus instalaciones (se trató, se dispuso o se entregó a un tercero), o se rechazaron o anularon. Gresst la cierra **al final del día** de la última actividad. Si el residuo sigue en la planta esperando su tratamiento, la solicitud sigue abierta.
- **Vencida.** Cuando pasaron **30 días** desde el último día solicitado sin que se ejecutara lo pendiente. Es el plazo por defecto y la cuenta puede cambiarlo ([plazos](guia_cierres.md#plazos-de-la-solicitud)).

### Lo pendiente al vencer

Lo que no se ejecutó queda como **no ejecutado**: no se recibe ni se rechaza, y no mueve inventario. Por defecto **no se genera otra solicitud** con esos residuos: si el servicio todavía hace falta, se pide de nuevo o se reabre la solicitud. La cuenta puede elegir que lo pendiente pase a una solicitud nueva ([plazos](guia_cierres.md#plazos-de-la-solicitud)).

### Cuándo no se cierra

- Mientras alguno de sus residuos esté en una **operación abierta** (una ruta o una recepción programada o en curso): primero se cierra la operación.
- Mientras algún residuo suyo **siga en tu planta**: espera a que termine su ciclo.
- Las **plantillas de recurrencia** no vencen; se cierran como terminadas cuando termina su serie. Cada solicitud que genera sí vence como cualquier otra: una de hace tres meses que nadie programó aparece como vencida.
- Los **borradores**, las pendientes de confirmar y las que esperan la aprobación del cliente no se cierran por plazo.

### Por vencer

Antes de vencer, la solicitud aparece en la bandeja **Por vencer** con la fecha en que vencerá (2 días antes, por defecto), y también en el correo diario de resumen. Ninguna solicitud vence sin haber pasado por ahí. Ver [Cierres y vencimientos](guia_cierres.md#por-vencer-y-vencidos).

### Reabrir y cerrar a mano

Un usuario con permiso para **supervisar** el módulo (Transporte, Recolección o Recepción, según el servicio) puede:

- **Reabrir** una solicitud cerrada, con un **motivo**, mientras **no esté facturada**. Vuelve a estar activa y editable; lo que su cierre dejó no ejecutado vuelve a pendiente y los plazos corren desde el día de la reapertura. Si es una solicitud a un proveedor conectado, hay que contar otra vez con la reserva: si el saldo no alcanza, Gresst dice qué residuo falta. Lo anulado no se reabre.
- **Cerrar a mano** una solicitud activa, con un **motivo**. Lo pendiente queda no ejecutado, sin solicitud nueva. Si un residuo de la solicitud sigue en tu planta, no se puede cerrar a mano: primero debe terminar su ciclo.

Si una parada o una recepción de una solicitud cerrada se reabre, la solicitud se reabre con ella.

### Anular

Solo se anulan solicitudes **abiertas**. Una solicitud cerrada primero se reabre y luego, si hace falta, se anula. La anulación queda en el historial de cierre con quién la hizo.

## Quiénes participan

Una solicitud tiene **origen** (quién genera y dónde), **transportador** (empresa y vehículo) y **destino** (proveedor y planta). Según la configuración de la cuenta (Administración → Módulos), cada uno puede ser uno o varios:

| Participante | Opciones |
|--------------|----------|
| **Origen** | Un solo generador con una sede, un generador con varias sedes o varios generadores |
| **Transportador** | Un transportador con un vehículo, un transportador con varios vehículos o varios transportadores |
| **Destino** | Un proveedor con una planta, un proveedor con varias plantas o varios proveedores |

Además:

- **Modo directo o indirecto:** directo cuando quien pide es el mismo que genera; indirecto cuando la pide alguien a nombre de uno o varios generadores.
- **Recurrencia:** la cuenta decide si se permiten solicitudes recurrentes.

Si la cuenta no configuró nada, el formulario ofrece todas las opciones.

## ¿Hay que programar antes de ejecutar?

La cuenta decide, por separado para transporte y para recepción, si un residuo tiene que estar en una solicitud programada antes de cargarlo o recibirlo:

- **No hace falta programar** (predeterminado): se puede registrar la carga (**transporte directo**) o la recepción (**recepción directa**) y Gresst crea la solicitud y la orden por debajo.
- **Hay que programar:** primero la solicitud, luego la programación y luego la ejecución.

Lo que llega a la planta en el vehículo propio nunca requiere programación.

### Otras reglas del transporte

- **Recepción al cargar:** lo cargado queda recibido de inmediato o queda pendiente para que la planta lo confirme en Recepción.
- **Manifiesto de carga:** se emite al cerrar cada parada de carga, uno por solicitud. La cuenta decide si se emite y si se envía por correo al cliente.

## Estado de cada residuo

Cada ítem de la solicitud muestra en qué punto va su residuo:

| Estado | Significa |
|--------|-----------|
| **Recolección solicitada** | Se pidió el servicio |
| **Recolección confirmada** | Está programado |
| **Observado** | Tiene una observación pendiente |
| **En tránsito** | Va en el vehículo |
| **En almacenamiento temporal** | Llegó y espera en recepción |
| **Recibido** | Ya está en la planta |
| **En tratamiento / Tratado** | Procesamiento en curso / terminado |
| **En transformación / Transformado** | Tratamiento en curso / terminado |
| **En transferencia / Transferido** | Entrega a un tercero en curso / terminada |
| **En disposición / Dispuesto** | Disposición en curso / terminada |
| **En confinamiento / Confinado** | Confinamiento en curso / terminado |
| **Cerrado** | Terminó su ciclo |
| **Rechazado** | No se aceptó |

## Solicitudes entre cuentas conectadas

- Las que el cliente envía llegan al proveedor como **borrador**.
- Las que el proveedor registra a nombre de un cliente conectado esperan **3 días hábiles** su aprobación.
- Entre una [subcuenta](guia_subcuentas.md) y su proveedor no se escogen correspondencias: los ítems llevan el mismo tipo de residuo para las dos cuentas.

Cuando una solicitud a tu proveedor se cierra, ves por qué y cuándo (ver [Trabajar conectados](guia_conexiones.md#cuando-tu-solicitud-se-cierra)). Al cerrarse, lo que quedó sin ejecutar libera su reserva en ese momento.

Detalle: [Trabajar conectados](guia_conexiones.md).
