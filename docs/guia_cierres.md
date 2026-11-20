# Cierres y vencimientos

Toda parada, ruta, recepción, cliente de recepción u orden de planta que se cierra en Gresst guarda **por qué** se cerró, **quién** lo hizo y **cuándo**. Esta guía explica cómo leer esos cierres, cuándo se cierra algo sin que nadie lo haga y cómo se reabre.

Las reglas exactas las aplica Gresst; las pantallas solo muestran lo que se puede hacer.

---

## El motivo de cada cierre

Lo cerrado lleva una insignia con su motivo. Al pasar el cursor (o tocar la insignia) se ve quién lo cerró y cuándo.

| Motivo | Qué significa |
|--------|---------------|
| **Completada** | Se terminó el trabajo: alguien la cerró, o se cerró sola al resolverse su último residuo. |
| **Vencida** | Se cerró por plazo, sin que nadie la cerrara. Se distingue a simple vista de *Completada*. |
| **Cerrada por supervisor** | Un supervisor la cerró a mano, con un motivo. |
| **Cancelada** | Se rechazó o se anuló. Es definitiva: no se reabre. |
| **Desconocido** | Se cerró sin que quedara registrado el motivo. Se reabre como cualquier cierre que no hiciste tú. |

Cuando el cierre lo hace Gresst y no una persona, en *quién* aparece **Sistema**.

En las pestañas **Cerradas** de Solicitudes, Transporte y Recepción se puede **filtrar por motivo**, por ejemplo para ver solo lo vencido.

El detalle de una ruta, de una solicitud o de una recepción (en su menú ⋮) muestra el **historial de cierre**: cada cierre y cada reapertura, en orden, con autor, motivo y notas. Nada de ese historial se borra.

---

## Lo que se cierra solo

- **Al resolver el último residuo.** Según cómo esté configurado cada módulo (*Configuración de cuenta → Personalizaciones*), una parada o un cliente se cierra en cuanto no le queda nada pendiente. Ese cierre es *Completada*.
- **La ruta al cambiar de día.** Una ruta cuyas paradas ya están todas cerradas, pero que nadie finalizó, se cierra cuando termina su día. El día es el de la **zona horaria de la cuenta**: en Colombia, una ruta de hoy sigue abierta a las 8 de la noche.
- **Las órdenes de planta de un día pasado.** Una orden de disposición, contención o valorización de un día que ya pasó se cierra cuando la misma planta ya tiene la orden de un día posterior. Planear la orden de mañana no cierra la de hoy.

- **Las solicitudes.** Una solicitud se cierra como *Completada* al final del día en que todo su contenido terminó, y como *Vencida* cuando pasa su plazo sin que se ejecute lo pendiente. Las reglas están en [Solicitudes](solicitudes.md#cuándo-se-cierra-una-solicitud); los plazos, abajo.

Un cierre automático **nunca inventa trabajo**: no recibe ni rechaza nada por su cuenta.

### Plazos de la solicitud

Por defecto, una solicitud se cierra como completada **al final del día** de su última actividad, vence a los **30 días** del último día solicitado y avisa **2 días antes**. Lo pendiente al vencer queda no ejecutado, sin generar otra solicitud.

Cada cuenta puede cambiarlos para Transporte (que incluye Recolección) y para Recepción en **Administración → Módulos → Transporte / Recepción → Cierre de solicitudes**:

- cuándo se cierra al completarse (en cuanto termina, al final del día o nunca),
- cuántos días pasan hasta que vence, o que nunca venza,
- si lo pendiente al vencer queda no ejecutado o pasa a una solicitud nueva,
- con cuánta anticipación aparece en *Por vencer*.

Cambiar un plazo no reabre ni cierra nada ya hecho. Si lo acortas, el aviso vuelve a darse antes de cerrar.

---

## Cerrar como supervisor

Un usuario con permiso para **supervisar** el módulo puede cerrar una parada, una ruta, un cliente o una recepción **aunque tenga residuos pendientes**, desde el menú ⋮ → **Cerrar (supervisor)**. El motivo es obligatorio.

- Cerrar una ruta o una recepción cierra también sus paradas o clientes abiertos.
- Los residuos pendientes quedan **no ejecutados**: se muestran como **No recogido** (transporte), **No recibido** (recepción) o **No ejecutado** (solicitud). No se reciben ni se rechazan, y no mueven inventario.

### Qué pasa con lo no ejecutado

Si la solicitud de esos residuos sigue activa, Gresst crea una **solicitud de continuación**:

- Es una solicitud nueva, con su propio número y los mismos datos de cliente, sedes, transportador y proveedor.
- Recibe todos los residuos no ejecutados de esa solicitud en ese cierre, y queda **por programar** como cualquier solicitud.
- La solicitud original muestra el residuo como no ejecutado, con un enlace a su continuación. La continuación muestra de qué solicitud viene.
- Si la solicitud era a un proveedor conectado, la reserva de esos residuos pasa a la continuación.

---

## Reabrir

Lo cerrado se puede reabrir mientras **no esté consolidado**. La reapertura queda en el historial.

| Quién reabre | Qué pide |
|--------------|----------|
| La misma persona que lo cerró como *Completada* (por ejemplo, el conductor que cerró su parada y olvidó un residuo, o el operador que reabre su recepción) | Su permiso de captura. El motivo es opcional. |
| Cualquier otro caso: lo cerró el sistema, un supervisor u otra persona, o su motivo es *Desconocido* | Un **motivo** y permiso para **supervisar** el módulo. |

- Primero se reabre la ruta o la recepción, y luego la parada o el cliente.
- Si un supervisor reabre algo cuya continuación **aún no se ha programado**, los residuos vuelven a la solicitud original y la continuación se anula. Si ya se programó, los residuos siguen en la continuación.
- Si al reabrir una solicitud a un proveedor conectado el saldo de algún residuo no alcanza, la reapertura no se hace y Gresst dice cuál falta.

### Lo consolidado no se reabre

Un residuo queda **consolidado** cuando:

- un **certificado** emitido lo cubre,
- se **envió a SIESA**, o
- su solicitud está **marcada facturada**.

Lo consolidado se corrige con un documento de ajuste, no reabriendo. Al intentarlo, Gresst dice qué residuo lo impide y por qué. Un **manifiesto** no consolida: una parada con manifiesto emitido se puede reabrir, y el manifiesto se emite de nuevo al cerrarla.

---

## Capturas de la App que llegan tarde

La App funciona sin conexión y envía lo capturado al recuperar la señal (ver [App móvil](guia_app.md)). Si mientras tanto el sistema o un supervisor cerró la parada:

- **Se capturó antes del cierre:** Gresst la acepta, reabre la parada (y la ruta si hace falta) y lo registra en el historial como *captura tardía*.
- **Se capturó después del cierre:** Gresst no la acepta. La captura se queda en el teléfono como **no aceptada**, con el motivo, para que un supervisor decida.

La hora que cuenta es la de la captura en el teléfono, no la de envío.

En la App, una parada cerrada muestra su motivo, y los residuos no ejecutados se ven como **No recogido**: no se pueden capturar ni cuentan como pendientes.

---

## Por vencer y vencidos

Desde el acceso de notificaciones de la página de inicio, la bandeja **Cierres** muestra, por módulo:

- **Por vencer:** lo que el sistema cerrará pronto, con la fecha y hora del cierre. Las solicitudes aparecen con la fecha en que vencerán; lo que se cerrará por estar completo no se anuncia.
- **Vencidos:** lo que el sistema cerró en los últimos 7 días. Las solicitudes completadas no se listan.

La ven los usuarios que pueden ejecutar o supervisar ese módulo. El correo diario de resumen a supervisores se envía cuando soporte activa la tarea de mantenimiento de la cuenta; sin nada que reportar, no se envía. Incluye las solicitudes que vencen en las próximas 24 horas y las que se cerraron por plazo; lo reciben los supervisores del módulo y el responsable de la solicitud.

