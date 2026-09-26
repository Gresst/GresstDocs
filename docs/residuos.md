# Residuos y clasificación

## Tipo de residuo y residuo

- El **tipo de residuo** es la entrada del catálogo (Configuración → **Residuos**): "Aceite usado", "Luminarias", "Lodos de PTAR"… Cada cuenta tiene su propio catálogo.
- El **residuo** es una cantidad concreta de un tipo, en un lugar y con un dueño: lo que se recoge, se recibe, se trata y se certifica. Cada residuo tiene su propio historial ([Trazabilidad](trazabilidad.md)).

### Qué tiene un tipo de residuo

| Dato | Para qué sirve |
|------|----------------|
| **Nombre** y estado activo | Identificarlo en todas las pantallas |
| **Residuo o material** | Ver abajo |
| **Medida principal** | Unidades, kg o m³: la cifra que manda para ese tipo |
| **Peso y volumen de referencia** | Convertir un conteo en peso o volumen estimado |
| **Precios** | De compra y de servicio, por tercero y por instalación, con vigencia ([Catálogos](catalogos.md#residuos-y-precios-por-instalación)) |
| **Clasificación** | Códigos internacionales de identificación y operación, y etiquetas |
| **Características** | Peligrosidad, SGA/GHS y estado físico por defecto |
| **Tratamientos** | Qué tratamientos admite |
| **Transformaciones** | En qué se convierte con cada tratamiento |

### Residuo o material

Un tipo es **residuo** o **material aprovechable**: un producto que sale de un tratamiento y tiene valor comercial (pellet, compost, aceite re-refinado). Por eso el catálogo y el inventario tienen dos vistas, **Residuos** y **Materiales**. Pasar un tipo de una a otra es una acción explícita del menú de la fila (**Convertir a material / residuo**).

Un material no lleva códigos de identificación de residuo ni transformaciones, porque es el resultado de un tratamiento, no algo que se trata. Sí puede tener características, por ejemplo si es peligroso.

### Transformaciones

En cada tipo de residuo se indica **en qué se convierte con cada tratamiento**: uno o varios tipos de destino, cada uno con el porcentaje de lo que entra o una cantidad fija. El destino puede ser el mismo tipo (una limpieza que solo reduce la cantidad) o un material.

Ejemplo: 100 kg de *aceite usado* con *re-refinación* → 70 % *aceite base* (material) + 30 % *fondos de destilación* (residuo).

---

## Clasificación internacional

Gresst clasifica cada tipo de residuo con los sistemas internacionales, que responden a tres preguntas distintas:

| Pregunta | Sistemas |
|----------|----------|
| **¿Qué es?** — identificación | LER · Convenio de Basilea: códigos Y y listas A/B · número UN · RAEE · código propio |
| **¿Qué riesgo tiene?** — características | Peligrosidad CRETI + infeccioso · SGA/GHS · clases de transporte UN · estado físico |
| **¿Qué se hace con él?** — operación | Convenio de Basilea: D1–D15 y R1–R13 |

Además hay **etiquetas descriptivas** (origen y composición), que ayudan a buscar y agrupar pero no cambian ninguna marca.

Los códigos se asignan en **Configuración → Residuos**: en la ficha del tipo (pestañas Clasificación, Características y Tratamientos) o directamente desde las columnas de la grilla. Al buscar un código se puede escribir parte del número o de la descripción.

### LER — Lista Europea de Residuos

Unos 840 códigos de seis dígitos (`capítulo subcapítulo código`, por ejemplo `13 02 05*`). Los **terminados en \*** son peligrosos. Capítulos:

| Cap. | Origen del residuo |
|------|--------------------|
| 01 | Exploración, extracción y tratamiento de minerales |
| 02 | Agricultura, horticultura, acuicultura, silvicultura, caza, pesca y alimentos |
| 03 | Transformación de la madera y producción de papel, cartón y muebles |
| 04 | Industrias del cuero, la piel y textil |
| 05 | Refino de petróleo, purificación de gas natural y tratamiento pirolítico del carbón |
| 06 | Procesos químicos inorgánicos |
| 07 | Procesos químicos orgánicos |
| 08 | Revestimientos (pinturas, barnices, esmaltes), adhesivos, sellantes y tintas |
| 09 | Industria fotográfica |
| 10 | Procesos térmicos |
| 11 | Tratamiento químico de superficie y recubrimiento de metales; hidrometalurgia no férrea |
| 12 | Moldeado y tratamiento físico y mecánico de superficie de metales y plásticos |
| 13 | Aceites y combustibles líquidos (excepto aceites comestibles) |
| 14 | Disolventes, refrigerantes y propelentes orgánicos |
| 15 | Envases; absorbentes, trapos de limpieza, materiales de filtración y ropas de protección |
| 16 | No especificados en otro capítulo (vehículos, RAEE, baterías, catalizadores…) |
| 17 | Construcción y demolición |
| 18 | Servicios médicos o veterinarios e investigación asociada |
| 19 | Instalaciones de tratamiento de residuos, depuradoras y potabilización |
| 20 | Residuos municipales, incluidas las fracciones recogidas selectivamente |

### Convenio de Basilea — códigos Y (Anexo I)

Corrientes de desechos (Y1–Y18) y constituyentes (Y19–Y45) que hacen peligroso un residuo; Y46 e Y47 son residuos domésticos.

| Código | Descripción |
|--------|-------------|
| Y1 | Desechos clínicos de hospitales, centros médicos y clínicas |
| Y2 | Desechos de la producción y preparación de productos farmacéuticos |
| Y3 | Desechos de medicamentos y productos farmacéuticos |
| Y4 | Desechos de la producción, preparación y utilización de biocidas y productos fitosanitarios |
| Y5 | Desechos de la fabricación, preparación y utilización de productos químicos para la preservación de la madera |
| Y6 | Desechos de la producción, preparación y utilización de disolventes orgánicos |
| Y7 | Desechos que contengan cianuros, del tratamiento térmico y las operaciones de temple |
| Y8 | Desechos de aceites minerales no aptos para el uso a que estaban destinados |
| Y9 | Mezclas y emulsiones de desechos de aceite y agua o de hidrocarburos y agua |
| Y10 | Desechos que contengan o estén contaminados por PCB, PCT o PBB |
| Y11 | Residuos alquitranados de la refinación, destilación o tratamiento pirolítico |
| Y12 | Desechos de tintas, colorantes, pigmentos, pinturas, lacas o barnices |
| Y13 | Desechos de resinas, látex, plastificantes o colas y adhesivos |
| Y14 | Sustancias químicas de desecho no identificadas o nuevas (investigación o enseñanza) de efectos desconocidos |
| Y15 | Desechos de carácter explosivo no sometidos a una legislación diferente |
| Y16 | Desechos de productos químicos y materiales para fines fotográficos |
| Y17 | Desechos del tratamiento de superficie de metales y plásticos |
| Y18 | Residuos de las operaciones de eliminación de desechos industriales |
| Y19 | Metales carbonilos |
| Y20 | Berilio, compuestos de berilio |
| Y21 | Compuestos de cromo hexavalente |
| Y22 | Compuestos de cobre |
| Y23 | Compuestos de zinc |
| Y24 | Arsénico, compuestos de arsénico |
| Y25 | Selenio, compuestos de selenio |
| Y26 | Cadmio, compuestos de cadmio |
| Y27 | Antimonio, compuestos de antimonio |
| Y28 | Telurio, compuestos de telurio |
| Y29 | Mercurio, compuestos de mercurio |
| Y30 | Talio, compuestos de talio |
| Y31 | Plomo, compuestos de plomo |
| Y32 | Compuestos inorgánicos de flúor, excepto el fluoruro cálcico |
| Y33 | Cianuros inorgánicos |
| Y34 | Soluciones ácidas o ácidos en forma sólida |
| Y35 | Soluciones básicas o bases en forma sólida |
| Y36 | Amianto (polvo y fibras) |
| Y37 | Compuestos orgánicos de fósforo |
| Y38 | Cianuros orgánicos |
| Y39 | Fenoles, compuestos fenólicos, incluidos los clorofenoles |
| Y40 | Éteres |
| Y41 | Disolventes orgánicos halogenados |
| Y42 | Disolventes orgánicos, excepto los halogenados |
| Y43 | Sustancias del grupo de los dibenzofuranos policlorados |
| Y44 | Sustancias del grupo de las dibenzoparadioxinas policloradas |
| Y45 | Compuestos organohalogenados distintos de los anteriores |
| Y46 | Desechos recogidos de los hogares |
| Y47 | Residuos de la incineración de los desechos de los hogares |

### Convenio de Basilea — listas A y B

- **Lista A** (Anexo VIII): desechos que se consideran **peligrosos** (por ejemplo, A1160 baterías de plomo ácido, A3020 aceites minerales de desecho).
- **Lista B** (Anexo IX): desechos que **no** se consideran peligrosos salvo que contengan materiales del Anexo I en cantidad suficiente (por ejemplo, B1010 chatarra metálica, B3010 plásticos no halogenados).

### Número UN

Número ONU de cuatro dígitos para el transporte de mercancías peligrosas (por ejemplo, UN1203 gasolina, UN2794 baterías húmedas de ácido). Tener número UN marca el tipo como **mercancía peligrosa**. Las mercancías se agrupan en nueve clases:

| Clase | Mercancía |
|-------|-----------|
| 1 | Explosivos |
| 2 | Gases |
| 3 | Líquidos inflamables |
| 4 | Sólidos inflamables, sustancias que pueden experimentar combustión espontánea y que en contacto con el agua desprenden gases inflamables |
| 5 | Sustancias comburentes y peróxidos orgánicos |
| 6 | Sustancias tóxicas e infecciosas |
| 7 | Material radiactivo |
| 8 | Sustancias corrosivas |
| 9 | Sustancias y objetos peligrosos varios |

### RAEE — aparatos eléctricos y electrónicos

| Categoría | Aparatos |
|-----------|----------|
| RAEE 1 | Aparatos de intercambio de temperatura |
| RAEE 2 | Monitores, pantallas y aparatos con pantalla de más de 100 cm² |
| RAEE 3 | Lámparas |
| RAEE 4 | Grandes aparatos (alguna dimensión exterior de más de 50 cm) |
| RAEE 5 | Pequeños aparatos (ninguna dimensión exterior de más de 50 cm) |
| RAEE 6 | Pequeños aparatos de informática y telecomunicaciones |

### Código propio

El código interno que use tu empresa. Sirve para buscar y para tus reportes; no cambia ninguna marca.

---

## Características

### Peligrosidad (CRETI + infeccioso)

| Letra | Característica |
|-------|----------------|
| C | Corrosivo |
| R | Reactivo |
| E | Explosivo |
| T | Tóxico |
| I | Inflamable |
| — | Infeccioso (biológico) |

### SGA / GHS

El Sistema Globalmente Armonizado describe los peligros con **clases de peligro**, **frases H** (de peligro) y **P** (de prudencia) y **pictogramas**: explosivo, inflamable, comburente, gas a presión, corrosivo, toxicidad aguda, irritante o nocivo, peligro para la salud y peligro para el medio ambiente.

### Estado físico

Sólido, líquido, gas, lodo o pasta. El tipo de residuo tiene un estado **por defecto**; cada residuo tiene luego el suyo, que puede cambiar con un **Procesamiento** (un lodo que se seca pasa a sólido).

Las características describen el residuo y se muestran en las pantallas y los certificados; no cambian las marcas que calcula Gresst.

---

## Operaciones D y R (Anexo IV de Basilea)

Dicen **qué se hace** con el residuo. Un código **R** marca el tipo como **aprovechable**.

### Eliminación (D)

| Código | Operación |
|--------|-----------|
| D1 | Depósito en el suelo o en su interior (por ejemplo, relleno) |
| D2 | Tratamiento en el medio terrestre (biodegradación de líquidos o lodos en suelos) |
| D3 | Inyección profunda (en pozos, domos salinos o fallas geológicas) |
| D4 | Embalse superficial (en pozos, estanques o lagunas) |
| D5 | Rellenos especialmente diseñados (celda de seguridad) |
| D6 | Vertido en una masa de agua, salvo mares y océanos |
| D7 | Vertido en mares y océanos |
| D8 | Tratamiento biológico que produce compuestos eliminados por D1–D12 |
| D9 | Tratamiento fisicoquímico (evaporación, secado, calcinación, neutralización, precipitación) |
| D10 | Incineración en tierra sin recuperación de energía |
| D11 | Incineración en el mar |
| D12 | Depósito permanente (confinamiento definitivo) |
| D13 | Combinación o mezcla previa a D1–D12 |
| D14 | Reenvasado previo a D1–D13 |
| D15 | Almacenamiento previo a D1–D14 |

### Recuperación (R)

| Código | Operación |
|--------|-----------|
| R1 | Uso como combustible o para generar energía (coprocesamiento) |
| R2 | Recuperación o regeneración de disolventes |
| R3 | Reciclado de sustancias orgánicas no usadas como disolventes (incluye compostaje y digestión) |
| R4 | Reciclado de metales y compuestos metálicos |
| R5 | Reciclado de otras materias inorgánicas |
| R6 | Regeneración de ácidos o bases |
| R7 | Recuperación de componentes usados para reducir la contaminación |
| R8 | Recuperación de componentes de catalizadores |
| R9 | Regeneración u otro nuevo empleo de aceites usados |
| R10 | Tratamiento de suelos en beneficio de la agricultura o la mejora ecológica |
| R11 | Utilización de materiales resultantes de R1–R10 |
| R12 | Intercambio para someterlos a R1–R11 (clasificación, mezcla, reenvasado) |
| R13 | Acumulación de materiales destinados a R1–R12 |

### Relación con las operaciones de Gresst

| Operación | Códigos habituales |
|-----------|--------------------|
| Disposición | D1, D5, D9, D10 |
| Confinamiento | D12 (o D5) |
| Acopio | R13 o D15, según el destino final |
| Aprovechamiento | R1–R11 |
| Refinación | R2, R6, R9 |
| Digestión | R3 |
| Tratamiento y Procesamiento | D8, D9 o R2–R8 |
| Segregación y Consolidación | D13, D14 o R12 |

Transporte, Recolección, Retorno, Generación, Recepción, Transferencia y Ajuste no tienen código D/R: son logística o registro.

---

## Marcas que calcula Gresst

Con los códigos asignados, Gresst marca cada tipo de residuo sin que nadie lo tenga que indicar a mano. Las marcas se ven en el catálogo y en todas las pantallas que muestran el residuo.

| Marca | Cuándo aparece |
|-------|----------------|
| **Peligroso** (RESPEL) | Tiene un código de la **Lista A**, un **Y1–Y45** (Y46 e Y47 no cuentan) o un **LER con \***. Un código de la Lista B nunca lo marca peligroso. Requiere manifiesto y gestor autorizado. |
| **Aprovechable** | Tiene un código de recuperación **R1–R13**. Los códigos D no cuentan. |
| **Mercancía peligrosa** | Tiene **número UN**: el transporte exige vehículo y conductor habilitados, rotulado y tarjeta de emergencia. |
| **RAEE** | Tiene categoría RAEE o un LER de aparatos eléctricos y electrónicos (capítulo 16 02, o 20 01 35 / 20 01 36). Aplica el programa posconsumo. |
| **Sin clasificar** | No tiene ningún código de identificación (LER, Y, A o B). Es un aviso para completar la clasificación. |

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

El LER y los códigos HP europeos se usan como referencia; no son obligatorios en Colombia.
