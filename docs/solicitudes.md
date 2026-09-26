# Solicitudes

Una **solicitud** es el pedido de un servicio sobre uno o varios residuos: recogerlos (transporte) o recibirlos en planta (recepción). Cada residuo de la solicitud es un **ítem**, con su material, tratamiento, cantidades, embalaje, precios y notas.

## Dónde se ven

| Vista | Qué solicitudes | Menú |
|-------|-----------------|------|
| **Operaciones** | Las que te piden tus clientes | Solicitudes de transporte · Solicitudes de recepción |
| **Tercerización** | Las que tú pides a tus proveedores | Solicitudes a proveedores |

Todas las listas tienen pestañas **Abiertas / Cerradas**.

## Tipos

- **Transporte:** el proveedor recoge los residuos en las sedes del cliente y los lleva a su planta.
- **Recepción:** el cliente lleva los residuos a la planta del proveedor.

La cuenta solo ve los tipos de las operaciones que tiene habilitadas.

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

Detalle: [Trabajar conectados](guia_conexiones.md).
