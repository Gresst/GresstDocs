# Instalaciones, vehículos y catálogos

Los catálogos están en la vista **Configuración** del WebApp. Cada cuenta tiene los suyos; de un [tercero](identidad.md) se registran sus instalaciones, vehículos y los residuos con los que trabaja contigo.

| Grupo | Catálogos |
|-------|-----------|
| Red operativa | Empleados · Instalaciones · Vehículos |
| Residuos | Residuos · Materiales · Embalajes · Insumos |
| Servicios | Operaciones · Tratamientos · Licencias |
| Relaciones | Terceros |

Los registros no se borran: se **desactivan** y quedan en la pestaña de eliminados, para no romper la historia de los residuos.

---

## Instalaciones

Una instalación es cualquier lugar donde puede estar un residuo: una sede, una planta, una bodega, una celda, un contenedor dentro de una bodega.

- Se organizan en **árbol**: una sede contiene instalaciones y una instalación puede contener otras (por ejemplo, contenedores dentro de una bodega), sin límite de niveles.
- Cada instalación tiene dueño (la cuenta o un tercero), dirección, ubicación en el mapa, contactos y estado activo.

### Capacidades

Cada instalación declara qué se puede hacer en ella. Las operaciones solo ofrecen las instalaciones con la capacidad que necesitan:

| Capacidad | Qué significa | La usan |
|-----------|---------------|---------|
| **Acopio** | Guardar temporalmente antes de que el residuo siga su camino | Generación, Recolección, Acopio |
| **Recepción** | Recibir residuos de terceros | Recepción, Retorno |
| **Tratamiento** | Transformar residuos | Procesamiento, Tratamiento, Segregación, Consolidación, Refinación, Digestión, Aprovechamiento |
| **Disposición** | Eliminación definitiva | Disposición |
| **Almacenamiento permanente** | Confinamiento final | Confinamiento |
| **Entrega** | Entregar residuos a un tercero | Transferencia, Donación |

- Una instalación **sin ninguna capacidad** es **administrativa** (oficinas, bodega de insumos): no aparece en ninguna operación con residuos.
- El **Transporte** y el **Ajuste** no necesitan capacidad: el transporte mueve entre dos sitios que ya la tienen y el ajuste corrige donde el residuo ya está.
- En la instalación de un **tercero** solo importan dos capacidades, vistas desde tu lado: donde él **entrega** es para ti un punto de **recolección**; donde él **recibe** es para ti un punto de **recepción**.

### Sedes entre cuentas conectadas

La sede de recolección es de quien pide el servicio. Quien recoge guarda su propio registro de esa sede y confirma que es la misma: Gresst la sugiere por **dirección y ubicación**. Si no tiene ninguna, crea el registro con el nombre, la dirección y la ubicación que le llegan. Si tomas una sede que tu proveedor ya tiene de ti, se copia como sede tuya; cuando hay una cerca, Gresst pregunta si es la misma (*¿Es tu sede Planta norte?*).

Cambiar la dirección o la ubicación deja esa correspondencia **por confirmar** y avisa al proveedor. Los puntos de recepción son las plantas del proveedor: se eligen de su lista, sin correspondencia.

### Residuos y precios por instalación

En la ficha de una instalación de un tercero se indica qué residuos y materiales se manejan allí y sus **precios de compra y de servicio**, con **fecha de vigencia**. Un precio nuevo cierra el anterior en esa fecha; el historial de precios se conserva.

---

## Vehículos

La **placa** identifica al vehículo en todo Gresst (letras y dígitos, sin espacios ni guiones). No puede haber dos vehículos con la misma placa: una placa nueva es otro vehículo.

Hay dos capas, y no se mezclan:

| Capa | Qué incluye | Quién la administra |
|------|-------------|---------------------|
| **Datos del vehículo** | Tipo, carrocería, capacidades, dimensiones, SOAT, revisión técnico-mecánica y foto | La cuenta **propietaria**, una vez verificado su reclamo. Las cuentas conectadas con ella los ven en solo lectura |
| **Uso en mi cuenta** | Si está activo para mí, alias interno, cuál de mis empresas o personas es propietaria y cuáles lo arriendan, conductores asignados y mi depósito del vehículo | Cada cuenta, siempre |

- Dentro de tu cuenta, una de tus empresas o personas es la **propietaria** y las demás lo **arriendan**. El primer vínculo queda como propietaria, salvo que ya haya otra; al cambiar de propietaria, la anterior pasa a arrendataria.
- Si tu organización es la propietaria de la placa, puedes **reclamarla** y respaldar el reclamo con la licencia de tránsito. Gresst lo verifica igual que la identidad de la cuenta. Hay un solo propietario verificado por placa. Una venta es un reclamo nuevo: al verificarlo, el anterior deja de serlo.
- Una cuenta conectada con el propietario ve el vehículo como *arrendado de [propietario]* y no edita los datos técnicos. Conserva su propia versión, sin usarla, como historia.
- Quien no está conectado con el propietario conserva y edita su propia versión, igual que si no hubiera propietario, y no se le informa que existe. Si la conexión se corta o el reclamo deja de estar vigente, vuelve a su versión, actualizada con los datos que estaba viendo, para no perderlos.
- El propietario no ve quién más usa la placa fuera de sus conexiones, ni el alias, los conductores ni el depósito de las otras cuentas.
- Cada cuenta que usa el vehículo tiene **su propio depósito**: lo que va a bordo está en el inventario de esa cuenta. Dos cuentas pueden llevar residuos en el mismo camión; cada una los tiene en su inventario, enlazados por la entrega, no por un depósito compartido. Que una cuenta sea la propietaria no cambia la custodia.
- Entre cuentas conectadas, la misma placa es el mismo vehículo: no hay una correspondencia aparte. Si el proveedor no tiene ese vehículo vinculado a tu empresa, se crea con tus datos. Los conductores que llevas se corresponden por **número de identificación**, del mismo modo.

## Empleados

Las personas de la cuenta que operan: conductores, operadores de planta, responsables. Una misma persona puede ser a la vez empleado y cliente. Un empleado con usuario activo en Gresst no se puede desactivar.

---

## Residuos y materiales

El catálogo de tipos de residuo, con su clasificación internacional, características, tratamientos y transformaciones. Detalle en [Residuos y clasificación](residuos.md).

### Cómo crece el catálogo

Cada cuenta usa el suyo. El catálogo crece al usarlo, sin un paso de configuración previo.

Al elegir un tipo —en una solicitud o en una generación— el selector muestra **Mis materiales** y, debajo, **Del catálogo de [proveedor]** (lo que ese proveedor configuró para ti). Elegir uno del proveedor crea en silencio tu propia copia (nombre, códigos y medida principal), con la correspondencia ya confirmada. En Generación también puedes *Buscar en los catálogos de mis proveedores* y *Crear nuevo*.

Si ya tienes un tipo con los mismos códigos (por ejemplo el mismo LER), Gresst pregunta *¿Es tu "Aceite usado"?*: sí registra la correspondencia sobre el que ya tienes, en lugar de copiarlo. Los duplicados se pueden fusionar después.

La copia es tuya: puedes renombrarla, agregarle códigos o decidir si lleva inventario. Un tipo que creas es privado hasta que lo usas en una solicitud.

Fusionar duplicados no reescribe los residuos: siguen con su historia y, a partir de la fusión, se leen como el tipo que queda. El fusionado sale del catálogo y sus correspondencias pasan al que queda; si dos chocan con el mismo proveedor, quedan por confirmar. No se fusiona un tipo peligroso con uno que no lo es, ni dos tipos con distinta medida principal.

No se desactiva un tipo que tenga residuos en inventario o ítems en solicitudes abiertas. Al desactivarlo, sus correspondencias se desactivan con él y quedan como historia; los documentos del proveedor conservan el nombre que tenían.

### Correspondencia con otra cuenta

Una correspondencia dice *este tipo de quien envía es aquel tipo de quien recibe*, para una conexión y un sentido. La confirma **quien recibe**: decide cómo lo recibe, lo trata y lo certifica. Quien envía puede proponerla; quien recibe la confirma o la corrige.

- Cada tipo tuyo tiene una correspondencia por proveedor. Varios tipos tuyos pueden apuntar al mismo tipo del proveedor.
- Tú ves cómo lo llama cada proveedor (*A: Aceites minerales usados · B: Aceite lubricante usado*). El proveedor ve el suyo, y el tuyo como referencia del cliente.
- Renombrar no la cambia. Cambiar los códigos de tu tipo la deja **por confirmar**: quien recibe la confirma de nuevo, también en las entregas. Si el residuo llega marcado como peligroso y el tipo elegido no lo es, hace falta una justificación.
- Si el proveedor desactiva su tipo, o deja de ofrecértelo, la correspondencia queda por confirmar. Las solicitudes abiertas siguen igual y tu copia se queda.
- Si el proveedor cambia los códigos del suyo, la correspondencia se mantiene. Si con eso cambia si es peligroso, te avisa: afecta cómo debes almacenarlo y declararlo.
- Una medida principal distinta (unidades frente a kg) se advierte al corresponder. No hay conversión de unidades.
- Al desconectarse, las correspondencias quedan inactivas. Una conexión nueva entre las mismas cuentas las ofrece otra vez por confirmar.

El mismo criterio vale para las sedes (por dirección y ubicación, en lugar de códigos) y, en el otro sentido de la conexión, al revés: cada sentido tiene las suyas. La correspondencia inversa se sugiere primero y se confirma sola solo cuando es única y nació de una elección explícita de quien ahora recibe.

- A un **cliente** le asignas tipos de tu catálogo. Es lo que ve en *Lo que mis proveedores tienen de mí* y lo que puede adoptar como tipo propio, con la correspondencia ya confirmada.

## Embalajes

Cómo viene empacado el residuo: tambor, caneca, bolsa, estiba, granel… Se elige al registrar un residuo en una solicitud o una recepción.

## Insumos

Lo que la cuenta entrega o consume en el servicio (bolsas, canecas, absorbentes…), cada uno con su unidad de medida. Hay un reporte de insumos entregados.

---

## Operaciones

Las [operaciones](operaciones.md) que la cuenta presta. Solo las habilitadas aparecen en el menú, en las solicitudes y en los certificados.

## Tratamientos

Los tratamientos que ofrece la cuenta (por ejemplo "Incineración", "Compostaje", "Re-refinación"), cada uno asociado a la **operación** que lo realiza. Se organizan en árbol: un tratamiento puede agrupar variantes.

En cada tipo de residuo se indica qué tratamientos admite y en qué se transforma con cada uno (ver [Transformaciones](residuos.md#transformaciones)).

## Licencias

Las **licencias ambientales** de la cuenta: número, descripción, texto, vigencia (inicio y fin), instalación y tratamiento que autorizan. Las licencias vigentes se pueden incluir en los certificados, y el tablero avisa cuando una está por vencer.

---

## Terceros

Las empresas y personas con las que trabaja la cuenta: clientes, proveedores y transportadores, en una sola ficha por empresa. La ficha tiene su resumen, contactos, instalaciones, vehículos, residuos y materiales, y muestra si la empresa está **conectada** contigo.

- Identidad y verificación: [Empresas e identidad](identidad.md).
- Conexiones: [Trabajar conectados](guia_conexiones.md).
