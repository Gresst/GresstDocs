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
- **La ruta al cambiar de día.** Una ruta cuyas paradas ya están todas cerradas, pero que nadie finalizó, se cierra cuando termina su día. El día es el de la **zona horaria de la cuenta**: en Colombia, una ruta de hoy sigue abierta a las 8 de la noche. Si alguna de sus paradas venció, la ruta se cierra como *Vencida*, no como *Completada*.
- **Las paradas y rutas de transporte que nadie cerró.** Una parada que nadie atendió vence por plazo, y su ruta se cierra con ella. Es la regla de [Paradas y rutas de transporte](#paradas-y-rutas-de-transporte), abajo; vale igual para Transporte, Recolección y Retorno.
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

### Paradas y rutas de transporte

Una parada o una ruta que nadie cierra no se queda abierta para siempre: eso mantenía abiertas también las solicitudes que dependían de ella.

**Cuándo vence una parada.** Cuando termina el día siguiente al **día de referencia** de su ruta. Ese día es el más reciente entre:

- el último día planeado de la ruta,
- el día en que se inició,
- el día de su última captura (así, una jornada que pasó de medianoche no se corta a la mitad), y
- el día en que se reabrió, si se reabrió.

Una ruta planeada para un día futuro nunca vence antes de su día, aunque se haya iniciado antes. Una parada reabierta empieza a contar desde el día de la reapertura.

**Qué pasa con lo que había en la parada al vencer.** La parada se cierra como *Vencida* y por *Sistema*.

- **Lo que no se recogió** se marca como no ejecutado (**No recogido**) y no mueve inventario. Según la configuración de la cuenta, pasa a una **solicitud nueva por programar**, o queda solo como no recogido. La solicitud nueva es una por cada solicitud afectada en cada cierre, con todo lo que esa solicitud dejó sin recoger en las paradas de la ruta que vencen juntas. Si la solicitud original no está activa, lo no recogido no genera otra. Detalle de cómo nace y se enlaza: [Qué pasa con lo no ejecutado](#qué-pasa-con-lo-no-ejecutado).
- **Lo ya cargado y no entregado no se toca.** Sigue en el inventario del vehículo y su solicitud sigue activa; se entrega donde corresponda (en la recepción de la planta propia o reabriendo la parada, si la entrega es a un tercero).
- **Una parada de carga con residuos recogidos** emite su manifiesto de carga al vencer, igual que cuando el conductor la cierra. Lo que pasó a una solicitud nueva no aparece en él.
- **Una parada de entrega en una instalación propia** no vence por sí sola ni se anuncia: el conductor no captura esa descarga (la hace Recepción). Se cierra, como *Completada*, junto con su ruta.
- **Lo que alguien ya cerró** (el conductor, un supervisor o el cierre automático al resolver el último residuo) no se vuelve a tocar por plazo. Lo cancelado o rechazado es definitivo.

**La ruta se cierra como consecuencia de sus paradas**, en la misma revisión en que se cierra la última abierta. No tiene un plazo propio:

| Situación de la ruta | Cómo se cierra |
|----------------------|----------------|
| Alguna de sus paradas venció | *Vencida* |
| El conductor terminó todas sus paradas | *Completada*, al terminar su día |
| Nunca se inició y su plazo pasó | *Vencida*: cada parada queda vencida con lo pendiente como no recogido, y la ruta no se cancela |

Una ruta sin paradas no se cierra por tiempo, y una ruta que ya tiene alguna parada abierta no se cierra solo porque se planee otra para el mismo vehículo en un día posterior.

**Plazos por defecto.** La parada vence **un día después** de terminar el día de referencia; el aviso aparece **12 horas antes**; lo no recogido pasa a una solicitud nueva; y la ruta con todas sus paradas cerradas se completa al terminar su día. Cada cuenta puede ajustarlos en **Administración → Módulos → Transporte → Cierre de paradas y rutas** (vale también para Recolección y Retorno):

- **Cuando la parada vence:** cerrarla y dejar lo no recogido en una solicitud nueva, cerrarla y marcar lo no recogido como no ejecutado sin solicitud nueva, o que **no venza** (sigue abierta hasta que se atienda o se cierre a mano).
- **Plazo para vencer la parada:** cuántos días después de terminar el día de la parada.
- **Avisar antes de vencer la parada:** con cuántas horas de anticipación aparece en la bandeja de cierres.
- **Cuando todas las paradas de la ruta se cierran:** completar la ruta al terminar el día, o no completarla sola (la completa un supervisor).

**Se enciende por etapas, sin sorpresas.** La regla se activa cuenta por cuenta. Desde su activación solo vence sola una parada cuyo plazo cae después del momento de activación más el tiempo de aviso: **nada se cierra por tiempo sin haber aparecido antes en *Por vencer***. Las paradas y rutas atascadas de antes quedan como están hasta que soporte las limpie con un cierre masivo; ese cierre las marca *Vencida* con su motivo y **no** crea solicitudes nuevas, porque es una limpieza y no trabajo nuevo. Si la regla se apaga y se vuelve a encender, se abre una activación nueva. Cambiar un plazo no reabre nada; si lo acortas, la parada vence como pronto cuando pase el tiempo de aviso desde el cambio.

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
- Lo mismo ocurre cuando una parada vence por plazo y la cuenta lo tiene configurado así ([Paradas y rutas de transporte](#paradas-y-rutas-de-transporte)). Si la continuación **aún no se programó** y se reabre una sola parada, vuelven a ella solo las líneas de esa parada.
- Cuando lo no recogido de una solicitud pasa a una continuación, la solicitud original puede cerrarse como *Completada*; si queda no ejecutado sin continuación, se cierra como *Vencida*.

---

## Reabrir

Lo cerrado se puede reabrir mientras **no esté consolidado**. La reapertura queda en el historial.

| Quién reabre | Qué pide |
|--------------|----------|
| La misma persona que lo cerró como *Completada* (por ejemplo, el conductor que cerró su parada y olvidó un residuo, o el operador que reabre su recepción) | Su permiso de captura. El motivo es opcional. |
| Cualquier otro caso: lo cerró el sistema, un supervisor u otra persona, o su motivo es *Desconocido* | Un **motivo** y permiso para **supervisar** el módulo. |

- Primero se reabre la ruta o la recepción, y luego la parada o el cliente. Reabrir la ruta no reabre sus paradas.
- Una parada o ruta que **venció sin haberse iniciado** vuelve a quedar **programada**, no en curso. Una captura tardía, en cambio, la deja en curso.
- Si una ruta cerrada por plazo tenía una parada que el conductor cerró como *Completada*, para reabrirla primero hay que reabrir la ruta (con motivo y permiso de supervisión); con la ruta abierta, el conductor reabre su parada sin motivo.
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

**Paradas de transporte.** En **Por vencer** aparece **una fila por parada** que vencerá dentro del tiempo de aviso, con el cierre previsto, la ruta, el vehículo y la sede. En el WebApp las paradas se agrupan por ruta y al abrir una fila se llega a esa parada. La ruta no se anuncia aparte: su cierre sigue al de sus paradas. Las paradas de entrega en instalación propia no aparecen. En **Vencidos** se listan las paradas y rutas que el sistema cerró *Vencida* en los últimos 7 días.

Además, mientras una ruta o una parada abierta esté dentro del tiempo de aviso, su encabezado muestra **«Se cerrará el…»** con la fecha y hora, sin depender de la bandeja ni de ningún aviso externo.

La ven los usuarios que pueden ejecutar o supervisar ese módulo. El correo diario de resumen a supervisores se envía cuando soporte activa la tarea de mantenimiento de la cuenta; sin nada que reportar, no se envía. Incluye las solicitudes que vencen en las próximas 24 horas y las que se cerraron por plazo; lo reciben los supervisores del módulo y el responsable de la solicitud.

Para el transporte, el correo incluye las paradas que vencen en las próximas 24 horas y las paradas y rutas cerradas por plazo desde el resumen anterior (una parada aparece una sola vez aunque agrupe varias solicitudes). Lo reciben los supervisores del módulo de **cada ruta** (Transporte, Recolección o Retorno) y el responsable de la ruta. Un cierre como *Completada* no se anuncia.

**Aviso en el teléfono.** Cuando la cuenta tenga activados los avisos en la App, el responsable de la parada (o, si no tiene, el de la ruta) recibe un aviso cuando su parada entra en *Por vencer* (una vez por parada) y cuando el sistema la cierra por plazo; si se cierran varias paradas de una ruta juntas, recibe un solo aviso por ruta que dice cuántas fueron. Este aviso depende de que la App lo tenga disponible: mientras no sea así, la fecha de cierre se consulta en la bandeja, en el correo y en el «Se cerrará el…» de la ruta y la parada.

**Limitación vigente.** Quien solo supervisa Recolección o Retorno recibe el correo, pero no ve en la bandeja de Transporte las filas de las rutas de ese módulo: esa bandeja exige permiso de ejecución o supervisión de Transporte.
