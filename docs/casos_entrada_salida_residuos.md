# Casos de Entrada y Salida de Residuos

## 1. Operación de Transporte (punto de vista del transportador)

### 1.1 Carga en el camión

El camión actúa como instalación/depósito para efectos de inventario mientras el residuo está a bordo. Lo que se carga puede ser de dos orígenes distintos, y eso determina qué pasa con el dominio:

#### 1.1.a Carga de residuo de un tercero (recolección)

- El tercero me entrega un residuo que hasta ese momento era suyo.
- Al cargarlo, entra a mi inventario (camión) **y a mi dominio** (cambia de dueño).
- Se crea el residuo como tal en el sistema en este momento.
- **Firma:** el tercero que entrega.

#### 1.1.b Carga de residuo propio (reubicación)

- Cargo un residuo que ya era mío, para moverlo entre depósitos o para entregarlo posteriormente a un tercero.
- El dominio **no cambia**; el residuo ya existía en el sistema y solo cambia de ubicación (de un depósito propio al camión).

#### Reglas comunes a ambos (planeado y no planeado)

- Se pueden agregar residuos no planeados originalmente.
- Se pueden agregar paradas adicionales; cada parada nueva genera automáticamente una solicitud de recolección en el sistema.
- Las cantidades, pesos y volúmenes se actualizan a los valores registrados en pantalla en el momento de la carga, pero se conserva el historial de los valores originalmente planeados en la solicitud.

### 1.2 Descarga del camión (entrega)

Lo que hace el transportador en este paso depende por completo del destino:

#### 1.2.a Descarga en depósito propio

- El destino es un **punto del gestor** (dueño del depósito = persona de la cuenta, vía `Persona_Localizacion_Deposito` PR). No se usa `Deposito.Recepcion` / `Entrega` ni el permiso `UNLOAD` para decidir esto.
- **El conductor no captura descarga** en esa parada: no aparece en la lista de paradas de la app y no se habilitan confirm/rechazo de unload.
- El cierre de negocio lo hace el operador de planta con **Recepción** (sección 2), como proceso independiente.

#### 1.2.b Descarga en depósito de un tercero

- El transportador entrega el residuo y registra el cierre de esa parada (ver 1.3): captura cantidades, evidencia fotográfica y la firma de quien recibe en el sitio.
- Ese cierre también es logístico, del lado del transporte. El cambio formal de dominio lo formaliza la Operación de Transferencia (sección 3), de forma independiente — igual que Recepción.

### 1.3 Cierre de cada parada y de la ruta

- **Finalización de parada:** cada punto de **carga** y cada **descarga en tercero** (1.2.b) tiene registro de cierre en web y móvil. Las descargas en depósito propio (1.2.a) no se cierran con el conductor.
- **Finalización de ruta:** al terminar todas las paradas, hay un registro adicional que cierra toda la Operación de Transporte. Aquí firma el transportador.
- Estos dos cierres son del lado logístico del transporte. No sustituyen ni adelantan el cierre de negocio de Recepción o Transferencia, que siguen siendo operaciones independientes (secciones 2 y 3).

---

## 2. Operación de Recepción (punto de vista del operador)

**Proceso independiente**, disponible tanto en la aplicación web como en la app móvil. Formaliza que un residuo llegó a un depósito propio. La regla clave es si el residuo ya existe o hay que crearlo:

### 2.1 El residuo viene de mi camión

- Ya pasó por la Operación de Transporte (1.1.a o 1.1.b), así que **el residuo ya existe** en el sistema.
- Recepción **ajusta cantidades e inventario** — no crea el residuo, solo confirma y actualiza lo que ya estaba registrado desde la carga.

### 2.2 El residuo no viene de mi camión

- Un tercero lo trae directamente a la planta, sin pasar por mi Operación de Transporte.
- El residuo **no existe todavía** en el sistema.
- Recepción **crea el residuo** y lo acredita en el inventario de la planta.
- **Firma:** el tercero que entrega.

Puede tratarse de residuos planeados o no planeados en ambos casos.

---

## 3. Operación de Transferencia (punto de vista del operador)

**Proceso independiente**, contraparte de Recepción para cuando el residuo sale hacia un tercero. Formaliza el cambio de dominio, y corre tanto en web como en móvil, igual que Recepción. La regla clave, igual que en Recepción, es si el residuo viene o no en mi camión:

### 3.1 El residuo viene de mi camión

- El camión descarga en un depósito de un tercero — ese es el cierre logístico de la parada (1.2.b / 1.3), con firma de quien recibe.
- La Operación de Transferencia formaliza el cambio de dominio de forma independiente, como cierre de negocio — igual que Recepción hace del lado de entrada.

### 3.2 El residuo no viene de mi camión

- Entrego residuos desde un depósito propio directamente a un tercero, sin que medie el camión.
- No hay transportador involucrado; alguien más (operador o responsable del depósito) ejecuta la Transferencia directamente.

En ambos casos la propiedad pasa al tercero y el residuo sale de mi inventario. No se crea un residuo nuevo — es el mismo residuo cambiando de dueño.

---

## 4. Operación de Generación (punto de vista del Generador)

**Proceso independiente**, disponible en web y en app móvil. A diferencia de Recepción (sección 2) y
Transferencia (sección 3), no hay dos variantes según si el residuo viene o no de un camión — la
Generación **es** el punto de origen del residuo, así que siempre lo crea. Tampoco hay Solicitud
previa que homologar: el Generador declara un residuo que ya está físicamente en su instalación, no
está pidiendo ni recibiendo nada de un tercero.

- El Generador indica dónde está el residuo (instalación propia), qué tipo de residuo es, cantidades
  (cantidad/peso/volumen), fecha en que se generó, fotos, adjuntos y observaciones.
- Se crea el residuo en el sistema en este momento y se acredita en el inventario de esa instalación.
- **Firma:** ninguna — a diferencia de Recepción/Transferencia no hay una contraparte (tercero) que
  entregue o reciba; el propio Generador es quien declara.

El caso más cercano hoy es 2.2 (Recepción crea el residuo porque no existe aún), pero 2.2 está escrito
desde la óptica del **operador de planta que recibe** de un tercero — aquí es el **Generador
declarando su propio residuo**, sin que medie entrega de nadie más.

---

## Resumen comparativo

| Paso | Operación | Actor | ¿Quién lo registra? | ¿Cambia dominio? | ¿Se crea el residuo? |
|---|---|---|---|---|---|
| 1.1.a Carga de residuo de un tercero | Transporte | Transportador | Transportador (firma el tercero que entrega) | Sí (a mi favor) | Sí, al cargar |
| 1.1.b Carga de residuo propio | Transporte | Transportador | Transportador | No | No |
| 1.2.a Descarga en depósito propio | Transporte | Operador de planta (Recepción) | El conductor no captura; Recepción cierra el negocio | — | No |
| 1.2.b Descarga en depósito de tercero | Transporte | Transportador | Transportador (finalización de parada) — el cambio de dominio lo formaliza Transferencia | — | No |
| 1.3 Finalización de ruta | Transporte | Transportador | Transportador — cierra toda la operación de transporte | — | No |
| 2.1 Recepción — viene de mi camión | Recepción | Operador de planta | Operador de planta, después y aparte | No (ya era mío) | No, solo ajusta |
| 2.2 Recepción — tercero lo trae directo | Recepción | Operador de planta | Operador de planta (firma el tercero que entrega) | Sí (a mi favor) | Sí, al recibir |
| 3.1 Transferencia — viene de mi camión | Transferencia | Operador / quien formaliza la transferencia | Independiente del cierre logístico de 1.2.b | Sí (a favor del tercero) | No |
| 3.2 Transferencia — no viene de mi camión | Transferencia | Operador / responsable del depósito | Quien ejecuta la entrega directa | Sí (a favor del tercero) | No |
| 4. Generación | Generación | Generador | El propio Generador (sin firma de contraparte) | No aplica (nace mío) | Sí, al generar |
