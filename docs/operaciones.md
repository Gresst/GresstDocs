# Operaciones y cambios del residuo

## La idea

- Lo que el usuario registra es una **operación**: un trabajo hecho sobre uno o varios residuos (recogerlos, recibirlos, tratarlos, entregarlos…).
- Al cerrar la operación —o cada parada, en una ruta— el sistema registra los **cambios** que esa operación produjo en cada residuo: dónde está, de quién es, qué es, cuánto hay.
- Los cambios **nunca los captura el usuario**, **no se editan y no se borran**: se acumulan en el historial del residuo y son la base de la [trazabilidad](trazabilidad.md). Si una cifra quedó mal, se corrige con un **Ajuste**, que queda registrado como un cambio más.

Cada cuenta habilita las operaciones que realmente presta (Configuración → Operaciones); el menú solo muestra las habilitadas. Cada operación trabaja en instalaciones con la [capacidad](catalogos.md#capacidades) que necesita.

---

## Las 18 operaciones

Se agrupan por fase. En el WebApp todas están en la vista **Operaciones**, en este mismo orden.

### Entrada — el residuo entra a tu cuenta

| Operación | Qué es | Cambios que produce | Dónde se captura |
|-----------|--------|---------------------|------------------|
| **Generación** | Declarar un residuo que ya está en tu instalación. No hay solicitud previa ni firma de contraparte. | Se crea el residuo. | WebApp · App |
| **Recepción** | Recibir residuos en una instalación propia: de tu camión, de un tercero que los trae o de una cuenta conectada que te los entrega. | Si no existía, se crea; si viene de tu camión, se confirman cantidades. Cambia de ubicación y, si era de un tercero, de dueño. | WebApp · App |

### Logística — el residuo se mueve

| Operación | Qué es | Cambios que produce | Dónde se captura |
|-----------|--------|---------------------|------------------|
| **Recolección** | Ronda de recogida con varias paradas, normalmente dentro de tus propias sedes, para concentrar residuos en un almacenamiento. | Cambia de ubicación; queda almacenado. | WebApp · App |
| **Transporte** | Ruta de un transportador: recoge en unas paradas y entrega en otras. El camión cuenta como un depósito mientras el residuo va a bordo. | Al cargar de un tercero: se crea y cambia de dueño. Al cargar lo propio: cambia de ubicación. | WebApp · App |
| **Retorno** | Devolver al origen, o a otro destino, un residuo rechazado. | Cambia de ubicación y de dueño. | En preparación |

### Transformación — el residuo cambia

| Operación | Qué es | Cambios que produce | Dónde se captura |
|-----------|--------|---------------------|------------------|
| **Procesamiento** | Cambio **físico**: triturar, compactar, filtrar, lavar, secar. Sigue siendo el mismo material y es reversible. Puede cambiar el estado físico (un lodo seco pasa a sólido). | Cambia la forma. | WebApp · App |
| **Tratamiento** | Cambio **químico o biológico**: compostaje, re-refinación… El material puede ser otro y no hay vuelta atrás. | Cambia la naturaleza (1 residuo → 1 residuo nuevo). | WebApp · App |
| **Segregación** | Separar un residuo compuesto en sus componentes (por ejemplo, desensamble de RAEE). | Se divide (1 → varios). El original queda en cero, para la trazabilidad. | WebApp |
| **Consolidación** | Juntar varios residuos compatibles en uno (por ejemplo, mezclar aceites antes de re-refinarlos). | Se unen (varios → 1). Los originales quedan en cero. | WebApp |
| **Refinación** | Procesamiento físico seguido de transformación química. | Cambian la forma y la naturaleza. | WebApp |
| **Digestión** | Digestión anaerobia de orgánicos: produce biogás y digestato. | Se divide y se transforma. | WebApp |

### Custodia — el residuo espera o se corrige

| Operación | Qué es | Cambios que produce | Dónde se captura |
|-----------|--------|---------------------|------------------|
| **Acopio** | Guardar temporalmente en un sitio; el residuo se volverá a mover. | Queda almacenado. | WebApp |
| **Ajuste** | Corregir cantidades registradas: conteo físico, pérdida, derrame. Es lo único que puede reactivar un residuo que había quedado en cero. | Se ajusta la cantidad. | WebApp |

### Salida — el residuo sale de tu cuenta

| Operación | Qué es | Cambios que produce | Dónde se captura |
|-----------|--------|---------------------|------------------|
| **Transferencia** | Entregar residuos a un tercero, que pasa a ser su dueño. Si el tercero es una [cuenta conectada](guia_conexiones.md), le llega como entrega y él registra su propia Recepción. | Cambia de ubicación y de dueño. | WebApp · App |
| **Donación** | Entregar sin valor comercial a una organización (ropa a una fundación, equipos a un colegio). | Sale como donación y cambia de dueño. | WebApp |
| **Aprovechamiento** | El residuo sale como producto con valor comercial (pellet de PET, compost, aceite re-refinado). | Sale como aprovechado. | WebApp |
| **Disposición** | Eliminación definitiva en un sitio autorizado. | Deja de existir operativamente. | WebApp · App |
| **Confinamiento** | Encierro permanente de lo que no se puede tratar ni disponer (relleno de seguridad, celda). | Queda confinado; no se volverá a mover. | WebApp |

Con **"App"** se indica que el conductor o el personal de planta también la capturan en el teléfono ([Guía App](guia_app.md)): Transporte y Recolección en *Jornada*; Recepción, Transferencia, Disposición, Tratamiento y Procesamiento (clasificación) en *En instalación*; Generación desde el menú.

---

## Los cambios que el sistema registra

Cada cambio responde a una sola pregunta sobre el residuo:

| Cambio | Qué pregunta responde | Lo producen |
|--------|-----------------------|-------------|
| **Creación** | ¿Desde cuándo existe? | Generación, Recepción, Transporte (carga de un tercero) |
| **Reubicación** | ¿Dónde está? | Casi todas las operaciones |
| **Cambio de dueño** | ¿Quién lo tiene legalmente? Quien lo generó nunca cambia; cambia quien lo custodia. | Recepción, Transporte, Transferencia, Retorno, Donación, Ajuste |
| **Cambio de forma** | ¿Cómo se presenta? | Procesamiento, Refinación |
| **Transformación** | ¿Qué es? | Tratamiento, Refinación, Digestión |
| **División** | ¿En qué se separó? | Segregación, Digestión |
| **Unión** | ¿Con qué se juntó? | Consolidación |
| **Almacenamiento** | ¿Está esperando para volver a moverse? | Recolección, Transporte, Acopio |
| **Confinamiento** | ¿Quedó encerrado para siempre? | Confinamiento |
| **Ajuste** | ¿Por qué cambió la cifra? | Ajuste |
| **Disposición** | ¿Dejó de existir? | Disposición |
| **Aprovechamiento** | ¿Salió como producto? | Aprovechamiento, Tratamiento, Refinación, Digestión |
| **Donación** | ¿Salió donado? | Donación |

Cada cambio guarda también el **estado físico** antes y después (sólido, líquido, gas, lodo, pasta), así que el estado actual de un residuo es el del último cambio.

Quién registra y firma cada operación, qué instalación necesita y qué documento sale: [Casos por operación](casos_entrada_salida_residuos.md).
