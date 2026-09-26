# Casos por operación

Esta página explica, para cada una de las 18 operaciones, **quién la registra, quién firma, qué pasa con el dueño del residuo, si el residuo se crea, cambia o termina, qué instalación se necesita y qué documento sale**. Qué cambios deja cada operación en el historial del residuo: [Operaciones y cambios del residuo](operaciones.md).

## Índice

| Fase | Operaciones |
|------|-------------|
| Logística | [1. Transporte](#_1-transporte) · [5. Recolección](#_5-recolección) · [6. Retorno](#_6-retorno) |
| Entrada | [2. Recepción](#_2-recepción) · [4. Generación](#_4-generación) |
| Transformación | [7. Procesamiento](#_7-procesamiento) · [8. Tratamiento](#_8-tratamiento) · [9. Segregación](#_9-segregación) · [10. Consolidación](#_10-consolidación) · [11. Refinación](#_11-refinación) · [12. Digestión](#_12-digestión) |
| Custodia | [13. Acopio](#_13-acopio) · [14. Ajuste](#_14-ajuste) |
| Salida | [3. Transferencia](#_3-transferencia) · [15. Donación](#_15-donación) · [16. Aprovechamiento](#_16-aprovechamiento) · [17. Disposición](#_17-disposición) · [18. Confinamiento](#_18-confinamiento) |

Al final hay una [tabla resumen](#resumen) con las 18.

## Cómo se registran las operaciones

Hay dos formas:

- **Con orden del día** (Transporte, Recolección, Recepción, Transferencia, Donación, Tratamiento, Procesamiento, Aprovechamiento, Disposición, Confinamiento). Los residuos se **programan** a una instalación y una fecha; el sistema arma una orden por instalación y día. Luego se **inician** (opcional, con firma), se **ejecutan** residuo por residuo con las cantidades reales y se **cierran**. Programar no siempre es obligatorio: desde el menú **⋮** de cada residuo se puede programar y ejecutar en un solo paso.
- **En un solo paso** (Generación, Segregación, Consolidación, Refinación, Digestión, Acopio, Ajuste). Se elige el residuo en el inventario, se indica el resultado y queda registrado de inmediato, sin orden ni cierre.

Las cantidades se registran siempre en **unidades, kg y m³**. Al ejecutar no se puede usar más de lo que el residuo tiene en esa instalación.

Cada instalación declara lo que puede hacer (ver [Instalaciones, vehículos y catálogos](catalogos.md#instalaciones)); cada operación solo ofrece las instalaciones con la capacidad que necesita.

---

## Logística

### 1. Transporte

**Punto de vista del transportador.** Una ruta con paradas: en unas carga y en otras descarga. Mientras el residuo va a bordo, el vehículo cuenta como un depósito.

- **Se registra:** en la App (*Jornada*) o en el WebApp (Operaciones → Transporte). Se inicia la ruta, se trabaja parada por parada y se finaliza la ruta.
- **Programación:** según la configuración de la cuenta, la carga exige una solicitud programada o se puede registrar directamente (**transporte directo**); en ese caso el sistema crea la solicitud y la orden por debajo.
- **Firma:** al iniciar la ruta (firmante, identificación, cargo, kilometraje y firma), al cerrar cada parada (quien entrega o recibe en el sitio) y al finalizar la ruta (el transportador).
- **Documentos:** **manifiesto de carga** por cada solicitud al cerrar una parada de carga (la cuenta decide si se emite y si se envía por correo al cliente), **manifiesto de recepción** y **certificado de transporte**.

#### 1.1 Carga en el camión

El origen de lo que se carga determina qué pasa con el dueño.

##### 1.1.a Carga de residuo de un tercero (recolección)

- El tercero entrega un residuo que hasta ese momento era suyo.
- Al cargarlo, entra al inventario del vehículo **y cambia de dueño** a favor del transportador.
- El residuo **se crea** en el sistema en ese momento.
- **Firma:** el tercero que entrega.

##### 1.1.b Carga de residuo propio (reubicación)

- Se carga un residuo propio para moverlo entre depósitos o para entregarlo después a un tercero.
- El dueño **no cambia**; el residuo ya existía y solo cambia de ubicación (del depósito al vehículo).

##### Reglas comunes a la carga

- Se pueden agregar residuos y paradas no planeados; cada parada nueva genera automáticamente una solicitud.
- Las cantidades se actualizan a lo registrado al cargar; lo que se había solicitado queda guardado.
- Cada residuo cargado se puede **confirmar** o **rechazar**, con fotos y notas.
- **Recepción al cargar:** según la configuración de la cuenta, lo cargado queda recibido de inmediato o queda **pendiente** para que la planta lo confirme en Recepción.

#### 1.2 Descarga del vehículo (entrega)

Lo que hace el transportador depende del destino.

##### 1.2.a Descarga en depósito propio

- El destino es un **depósito de la propia cuenta** (su dueño es la misma empresa). Lo que decide es el dueño del depósito, no sus capacidades ni los permisos del conductor.
- **El conductor no registra la descarga** en esa parada: no aparece en su lista y no puede confirmar ni rechazar la descarga.
- El cierre lo hace el operador de planta con **Recepción** (sección 2), como operación independiente.

##### 1.2.b Descarga en depósito de un tercero

- El transportador entrega y cierra la parada (ver 1.3): cantidades, fotos y la firma de quien recibe.
- Ese cierre es logístico. El cambio de dueño lo formaliza la **Transferencia** (sección 3), de forma independiente.
- Si el tercero es una cuenta **conectada**, además recibe la entrega en su cuenta y la registra con su propia Recepción (ver 3.3).

#### 1.3 Cierre de cada parada y de la ruta

- **Finalización de parada:** cada carga y cada descarga en un tercero (1.2.b) se cierra con firma, en web o en la App. Una parada se puede **rechazar** o **reabrir**.
- **Finalización de ruta:** al terminar todas las paradas se cierra la operación completa; firma el transportador. También se puede rechazar la ruta entera.
- Estos cierres son logísticos. No reemplazan el cierre de negocio de Recepción o Transferencia.

### 5. Recolección

Ronda con varias paradas, normalmente entre las **propias sedes** de la cuenta, para concentrar residuos en un sitio de acopio.

- **Se registra:** igual que el Transporte (ruta → paradas → residuos), en el WebApp (Operaciones → Recolección) y en la App.
- **Instalaciones:** los puntos de recolección son instalaciones con capacidad de **acopio**.
- **Dueño:** no cambia; el residuo solo se mueve y queda almacenado.
- **Firma y documentos:** los mismos que en Transporte.

### 6. Retorno

Devolver un residuo rechazado a su origen o a otro destino: un transporte en sentido inverso, con su propio manifiesto.

- **Instalación de destino:** con capacidad de **recepción**.
- **Dueño:** vuelve a quien corresponda el destino.
- **Estado:** la operación está definida, pero todavía no tiene captura; la pantalla aparece vacía si la cuenta la tiene habilitada. Cuando una **entrega entre cuentas conectadas** se rechaza, quien la envió registra la devolución desde la Transferencia (ver 3.3).

---

## Entrada

### 2. Recepción

**Punto de vista del operador de planta.** Formaliza que un residuo llegó a un depósito propio. Se registra en el WebApp (Operaciones → Recepción) y en la App (*En instalación*).

La pantalla agrupa por **cliente + fecha + punto de recepción**, con los residuos en el detalle.

- **Iniciar la operación** del día (opcional): firmante y notas. Se puede editar después.
- **Iniciar un cliente** (opcional): firma de quien entrega. Si no se inicia, el primer residuo que se registra lo abre.
- **Recibir** cada residuo con las cantidades reales, fotos y notas.
- **Rechazar** un residuo con su **causa de rechazo** (lista de la cuenta), notas y fotos. Nada entra al inventario.
- **Agregar** un residuo que llegó sin estar en la solicitud.
- **Finalizar el cliente:** cuando todos sus residuos están recibidos o rechazados; firma el tercero (nombre, identificación, cargo, observaciones).
- **Finalizar la operación:** cuando todos los clientes están finalizados.
- **Programación:** según la configuración de la cuenta, la recepción de un tercero exige estar programada o se puede registrar directamente (**recepción directa**); el sistema crea la solicitud y la orden por debajo. Lo que llega en el vehículo propio nunca requiere programación.
- **Instalación:** con capacidad de **recepción**.
- **Documentos:** **certificado de recepción** y **manifiesto de recepción**.

La regla clave es si el residuo ya existe o hay que crearlo:

#### 2.1 El residuo viene del vehículo propio

- Ya pasó por el Transporte (1.1.a o 1.1.b), así que **el residuo ya existe**.
- Recepción **ajusta las cantidades** y lo pasa al inventario de la planta; no crea otro residuo.

#### 2.2 El residuo no viene del vehículo propio

- Un tercero lo trae directamente a la planta.
- El residuo **no existe todavía**: Recepción **lo crea** y lo suma al inventario de la planta. El residuo queda a nombre de quien lo solicitó.
- **Firma:** el tercero que entrega (al finalizar el cliente).

#### 2.3 El residuo llega de una cuenta conectada

- La entrega aparece en **Recepción → Abiertas → Entregas por recibir**.
- Al recibirla se elige el punto de recepción y, por cada residuo, **el tipo de residuo propio** y lo que realmente llegó. Se crea un residuo nuevo; las cifras declaradas y las recibidas quedan guardadas.
- Si el residuo llega marcado como **peligroso** y se elige un tipo que no lo es, se exige una justificación.
- Se puede **rechazar** con un motivo. Hay 5 días hábiles para responder. Detalle: [Trabajar conectados](guia_conexiones.md#entregas-entre-cuentas-conectadas).

Puede tratarse de residuos programados o no programados en todos los casos.

### 4. Generación

**Punto de vista de quien genera.** La Generación **es** el origen del residuo, así que siempre lo crea. No hay solicitud previa: la cuenta declara un residuo que ya está físicamente en su instalación.

- **Se registra en un solo paso**, en el WebApp (Operaciones → Generación) y en la App: instalación, tipo de residuo, cantidades, fecha de generación, fotos, adjuntos y observaciones.
- **Instalación:** propia, con capacidad de **acopio**.
- **Dueño:** la propia cuenta.
- **Firma:** ninguna; no hay contraparte que entregue o reciba.

El caso más cercano es 2.2 (Recepción crea el residuo porque no existe), pero 2.2 es la planta **recibiendo** de un tercero; aquí es **quien genera declarando su propio residuo**.

---

## Transformación

En todas las transformaciones el residuo sigue siendo del **mismo dueño** y se trabaja en instalaciones propias con capacidad de **tratamiento**. Los residuos de origen que se consumen quedan en cero y enlazados con los resultantes (ver [Trazabilidad](trazabilidad.md)).

### 7. Procesamiento

Cambio **físico**: triturar, compactar, filtrar, lavar, secar. Sigue siendo el mismo material y el cambio es reversible.

- **Se registra con orden del día:** programar (planta + fecha), iniciar, ejecutar cada residuo y finalizar. En la App está en *En instalación* como **clasificación**.
- **Qué cambia:** cantidades y, si aplica, el **estado físico** (un lodo que se seca pasa a sólido).
- **Resultado en componentes:** si el residuo se separa en varios, queda registrado como una división (igual que una Segregación); si da un solo residuo de otro tipo, como un Tratamiento.
- **Residuo no procesado:** se registra como un ajuste.
- **Documento:** **certificado de clasificación**.

### 8. Tratamiento

Cambio **químico o biológico**: compostaje, neutralización, re-refinación… El material resultante puede ser otro y no hay vuelta atrás.

- **Se registra con orden del día:** programar (planta + fecha) y ejecutar. Al ejecutar se indica la **composición** del resultado: uno o varios residuos de salida con sus cantidades. El sistema propone la composición definida en el catálogo.
- **Residuo:** el de origen se cierra y se crean los de salida en el inventario de la planta.
- **Documento:** **certificado de tratamiento**.

### 9. Segregación

Separar un residuo compuesto en sus componentes (por ejemplo, desensamble de RAEE).

- **En un solo paso:** se elige el residuo en el inventario y se indican los residuos resultantes (tipo, cantidades y, si se quiere, otra instalación propia de destino).
- **Residuo:** el de origen queda en cero; los resultantes son nuevos y pueden tener otra clasificación.
- **Documento:** **certificado de clasificación**.

### 10. Consolidación

Juntar varios residuos compatibles en uno (por ejemplo, aceites antes de re-refinarlos, o vidrio).

- **En un solo paso:** se eligen **dos o más** residuos, el tipo del resultado, sus cantidades y la instalación de destino.
- **Residuo:** los de origen quedan en cero; el resultante es nuevo.
- **Dueño del resultado:** *por definir.* Hoy, si se consolidan residuos de dueños distintos, el resultado queda a nombre del dueño del primero que se eligió.

### 11. Refinación

Procesamiento físico seguido de transformación química (por ejemplo, re-refinación de aceites o regeneración de disolventes).

- **En un solo paso:** un residuo de origen → un residuo resultante de otro tipo, con sus cantidades e instalación de destino.
- **Documento:** **certificado de tratamiento**.

### 12. Digestión

Digestión anaerobia de residuos orgánicos, que produce biogás y digestato.

- **En un solo paso:** un residuo de origen → varios resultantes (por ejemplo, biogás y digestato), cada uno con su tipo y cantidades.
- **Documento:** **certificado de tratamiento**.

---

## Custodia

### 13. Acopio

Guardar temporalmente un residuo en un sitio; se volverá a mover.

- **En un solo paso:** se elige el residuo, la cantidad y una instalación propia con capacidad de **acopio** como destino.
- **Dueño:** no cambia.

### 14. Ajuste

Corregir las cantidades registradas: conteo físico, pérdida, derrame, error de digitación.

- **En un solo paso:** se elige el residuo en una instalación y se escriben las cantidades correctas, con notas.
- **Mover a otra instalación:** el mismo ajuste puede pasar parte o todo el residuo a otra instalación propia.
- Es la única operación que puede **reactivar** un residuo que había quedado en cero.
- **Firma:** ninguna. El ajuste queda en el historial; no borra lo anterior.

---

## Salida

### 3. Transferencia

**Punto de vista del operador.** El residuo sale hacia un tercero y cambia de dueño. Se registra en el WebApp (Operaciones → Transferencia) y en la App (*En instalación*).

- **Con orden del día:** programar el residuo a la **planta del tercero** y una fecha (vehículo opcional), y ejecutar con las cantidades reales. Un residuo programado se puede **quitar de la programación**.
- **Instalación de destino:** de un tercero, con capacidad de recepción o de entrega.
- **Dueño:** pasa al dueño de la instalación de destino.
- **Documento:** **certificado de transferencia** (y manifiesto de transferencia).

La regla clave, igual que en Recepción, es si el residuo viene o no en el vehículo propio:

#### 3.1 El residuo viene en el vehículo propio

- El vehículo descarga en el depósito del tercero: ese es el cierre logístico de la parada (1.2.b / 1.3), con firma de quien recibe.
- La Transferencia formaliza el cambio de dueño de forma independiente.

#### 3.2 El residuo no viene en el vehículo propio

- Se entrega desde un depósito propio directamente al tercero, sin vehículo de por medio.
- Lo registra el operador o el responsable del depósito.

En ambos casos el residuo sale del inventario y pasa al tercero. No se crea un residuo nuevo: es el mismo residuo cambiando de dueño.

#### 3.3 El tercero es una cuenta conectada

- La Transferencia **solo saca el residuo del inventario** y le envía una **entrega**.
- Nada entra a su inventario hasta que **esa cuenta** registre la Recepción: ahí crea **su propio residuo**, con su tipo y las cantidades recibidas. Las cantidades declaradas y las recibidas quedan guardadas.
- Se puede elegir un **transportador conectado**, que registra la recogida y la entrega sin que cambie su inventario.
- Tiene 5 días hábiles para recibirla o rechazarla. Si la rechaza, quien envió registra la devolución y los residuos vuelven a su inventario. Si no responde, se puede **cerrar sin confirmación**.
- Si el tercero no tiene cuenta o no están conectados, aplica 3.1 / 3.2.

### 15. Donación

Entregar residuos o materiales **sin valor comercial** a una organización (ropa a una fundación, equipos a un colegio).

- **Con orden del día:** programar a la instalación de la organización y una fecha, y ejecutar con las cantidades.
- **Qué se puede donar:** cualquier residuo o material con saldo en una instalación propia.
- **Instalación de destino:** de un tercero, con capacidad de recepción o de entrega.
- **Dueño:** pasa a la organización que recibe.

### 16. Aprovechamiento

El residuo sale como **producto con valor comercial** (pellet de PET, compost, aceite re-refinado).

- **Con orden del día:** programar (planta + fecha), iniciar (opcional, con firma), ejecutar cada residuo con las cantidades.
- **Instalación:** propia, con capacidad de **tratamiento**.
- **Residuo:** sale del inventario como aprovechado.

### 17. Disposición

Eliminación definitiva en un sitio autorizado (relleno, incineración…).

- **Con orden del día:** programar (planta + fecha), **iniciar** (opcional; firmante y notas; si no, el primer residuo ejecutado la abre) y ejecutar residuo por residuo. Ejecutar un residuo no cierra el día: los demás siguen disponibles. El día se cierra solo cuando se programa o ejecuta un día posterior en esa planta.
- **Qué residuos aparecen:** los que ya terminaron su recepción, cuyo tratamiento corresponde a disposición y que la cuenta maneja.
- **Instalación:** con capacidad de **disposición**.
- **Residuo:** se descuenta del inventario y deja de existir operativamente.
- **Documento:** **certificado de disposición**. Al programar y al ejecutar se envía aviso por correo.

### 18. Confinamiento

Encierro **permanente** de lo que no se puede tratar ni disponer (celda de seguridad, relleno de seguridad).

- **Con orden del día**, igual que la Disposición: programar, iniciar, ejecutar.
- **Instalación de destino:** con capacidad de **almacenamiento permanente**.
- **Residuo:** pasa a la planta de confinamiento y queda allí; no se volverá a mover. Se consulta en el inventario de confinamiento.

---

## Resumen

| Operación | Cómo se registra | Firma | ¿Cambia el dueño? | ¿Qué pasa con el residuo? | Instalación | Documento |
|-----------|------------------|-------|-------------------|---------------------------|-------------|-----------|
| 1. Transporte — carga de un tercero (1.1.a) | Ruta | Tercero que entrega | Sí, a mi favor | Se crea | Vehículo | Manifiesto de carga |
| 1. Transporte — carga propia (1.1.b) | Ruta | — | No | Se mueve | Vehículo | Manifiesto de carga |
| 1. Transporte — descarga propia (1.2.a) | La cierra Recepción | — | — | — | — | — |
| 1. Transporte — descarga en tercero (1.2.b) | Ruta | Quien recibe | Lo formaliza Transferencia | — | — | — |
| 1. Transporte — fin de ruta (1.3) | Ruta | Transportador | — | — | — | Certificado de transporte |
| 5. Recolección | Ruta | Como Transporte | No | Se mueve y queda almacenado | Acopio | Como Transporte |
| 6. Retorno | Ruta (sin captura aún) | Como Transporte | Sí | Se mueve | Recepción | Certificado de transporte |
| 2.1 Recepción — de mi vehículo | Orden del día | Inicio de operación (opcional) | No | Se ajusta | Recepción | Certificado y manifiesto de recepción |
| 2.2 Recepción — lo trae un tercero | Orden del día | Tercero que entrega | Sí, a mi favor | Se crea | Recepción | Certificado y manifiesto de recepción |
| 2.3 Recepción — de cuenta conectada | Bandeja de entregas | — | Nace mío | Se crea (mi tipo) | Recepción | — |
| 4. Generación | Un paso | — | Nace mío | Se crea | Acopio | — |
| 7. Procesamiento | Orden del día | Inicio (opcional) | No | Cambia forma o estado | Tratamiento | Certificado de clasificación |
| 8. Tratamiento | Orden del día | — | No | Se cierra; nacen los resultantes | Tratamiento | Certificado de tratamiento |
| 9. Segregación | Un paso | — | No | 1 → varios | Tratamiento | Certificado de clasificación |
| 10. Consolidación | Un paso | — | Por definir | Varios → 1 | Tratamiento | — |
| 11. Refinación | Un paso | — | No | 1 → 1 de otro tipo | Tratamiento | Certificado de tratamiento |
| 12. Digestión | Un paso | — | No | 1 → varios | Tratamiento | Certificado de tratamiento |
| 13. Acopio | Un paso | — | No | Se mueve y queda almacenado | Acopio | — |
| 14. Ajuste | Un paso | — | No | Se corrige la cantidad | Cualquiera | — |
| 3. Transferencia | Orden del día | Quien recibe (en la parada) | Sí, al tercero | Sale del inventario | Del tercero | Certificado de transferencia |
| 3.3 Transferencia a cuenta conectada | Orden del día + entrega | — | Cada cuenta tiene el suyo | Sale; el otro crea el suyo | Del tercero | — |
| 15. Donación | Orden del día | — | Sí, a quien recibe | Sale del inventario | Del tercero | — |
| 16. Aprovechamiento | Orden del día | Inicio (opcional) | — | Sale como producto | Tratamiento | — |
| 17. Disposición | Orden del día | Inicio (opcional) | — | Deja de existir | Disposición | Certificado de disposición |
| 18. Confinamiento | Orden del día | Inicio (opcional) | — | Queda confinado | Almacenamiento permanente | — |

Qué certificado corresponde a cada operación y cómo se emite: [Certificados y documentos](certificados.md).
