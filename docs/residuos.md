# Residuos y clasificación

## Tipo de residuo y residuo

- El **tipo de residuo** es la entrada del catálogo (Configuración → **Residuos**): "Aceite usado", "Luminarias", "Lodos de PTAR"… Cada cuenta tiene su propio catálogo.
- El **residuo** es una cantidad concreta de un tipo, en un lugar y con un dueño: lo que se recoge, se recibe, se trata y se certifica. Cada residuo tiene su propio historial ([Trazabilidad](trazabilidad.md)).

### Residuo o material

Un tipo es **residuo** o **material aprovechable**: un producto que sale de un tratamiento y tiene valor comercial (pellet, compost, aceite re-refinado). Por eso el catálogo y el inventario tienen dos vistas, **Residuos** y **Materiales**. Pasar un tipo de una a otra es una acción explícita del menú de la fila (**Convertir a material / residuo**).

Un material no lleva códigos de identificación de residuo ni transformaciones, porque es el resultado de un tratamiento, no algo que se trata. Sí puede tener características, por ejemplo si es peligroso.

### Transformaciones

En cada tipo de residuo se indica **en qué se convierte con cada tratamiento**: uno o varios tipos de destino, cada uno con el porcentaje de lo que entra. Por ejemplo, 100 kg de aceite usado re-refinado → 70 % aceite base + 30 % residuo de fondo.

---

## Clasificación internacional

Gresst clasifica cada tipo de residuo con los sistemas internacionales, que responden a tres preguntas distintas:

### 1. ¿Qué es? — identificación

| Sistema | Qué es |
|---------|--------|
| **LER** | Lista Europea de Residuos (≈ 840 códigos de 6 dígitos, por capítulos). Los códigos marcados con **\*** son peligrosos. |
| **Código Y** | Convenio de Basilea, Anexo I: corrientes de residuos (Y1–Y47). |
| **Lista A / Lista B** | Convenio de Basilea, Anexos VIII (peligrosos) y IX (no peligrosos). |
| **Número UN** | Número ONU de transporte de mercancías peligrosas (≈ 3 500). |
| **RAEE** | Categoría de residuo de aparato eléctrico y electrónico. |
| **Código propio** | El código interno que use tu cuenta. |

### 2. ¿Qué riesgo tiene? — características

- **Peligrosidad CRETI + infeccioso:** corrosivo, reactivo, explosivo, tóxico, inflamable, infeccioso.
- **SGA / GHS:** clases de peligro, frases H y P y pictogramas.
- **Estado físico** por defecto: sólido, líquido, gas, lodo o pasta. Cada residuo tiene luego el suyo, que puede cambiar con un Procesamiento (un lodo que se seca pasa a sólido).

Las características describen el residuo; son informativas.

### 3. ¿Qué se hace con él? — operación

Convenio de Basilea, Anexo IV: **D1–D15** (eliminación) y **R1–R13** (recuperación o aprovechamiento).

Además hay **etiquetas descriptivas** (origen, composición), que ayudan a buscar y agrupar pero no cambian ninguna marca.

---

## Marcas que calcula Gresst

Con los códigos asignados, Gresst marca cada tipo de residuo sin que nadie lo tenga que indicar a mano. Las marcas se ven en el catálogo y en todas las pantallas que muestran el residuo.

| Marca | Cuándo aparece |
|-------|----------------|
| **Peligroso** (RESPEL) | Tiene un código de la **Lista A**, un **Y1–Y45** (Y46 e Y47, residuos domésticos, no cuentan) o un **LER con \***. Un código de la Lista B nunca lo marca peligroso. |
| **Aprovechable** | Tiene un código de recuperación **R1–R13**. Los códigos D no cuentan. |
| **Mercancía peligrosa** | Tiene **número UN**: el transporte exige vehículo y conductor habilitados, rotulado y tarjeta de emergencia. |
| **RAEE** | Tiene categoría RAEE o un LER de aparatos eléctricos y electrónicos (capítulo 16 02, o 20 01 35 / 20 01 36). Aplica el programa posconsumo. |
| **Sin clasificar** | No tiene ningún código de identificación (LER, Y, A o B). Es un aviso para completar la clasificación. |

Los códigos se asignan en **Configuración → Residuos**: en la ficha del tipo (pestañas Clasificación, Características y Tratamientos) o directamente desde las columnas de la grilla.

### Entre cuentas conectadas

Cuando otra cuenta te entrega residuos, tú los recibes con **tu propio tipo de residuo**. Gresst te sugiere el tipo que comparte los mismos códigos (LER, Y, A/B, UN) y recuerda la elección para la próxima vez. Si el residuo llega marcado como peligroso y eliges un tipo que no lo es, Gresst lo bloquea: solo se permite con una justificación explícita, que queda registrada. Ver [Trabajar conectados](guia_conexiones.md#entregas-entre-cuentas-conectadas).

---

## Unidades

Las cantidades usan siempre las mismas unidades, en todas las cuentas: **unidades** (conteo), **kg** (peso) y **m³** (volumen). No se configuran ni se convierten. Cada tipo de residuo indica cuál de las tres es su medida principal.

---

## Marco normativo en Colombia

| Tema | Norma |
|------|-------|
| Residuos peligrosos (Basilea: Y, A/B, características) | Decreto 1076 de 2015 (compila el Decreto 4741 de 2005) |
| RAEE | Ley 1672 de 2013 y Resolución 851 de 2022 |
| Transporte de mercancías peligrosas (UN) | Decreto 1609 de 2002 |
| SGA / GHS | Decreto 1496 de 2018 |
| Residuos de atención en salud | Decreto 780 de 2016 |

El LER y los códigos HP europeos se usan como referencia, no son obligatorios en Colombia.
