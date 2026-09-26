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

### Residuos y precios por instalación

En la ficha de una instalación de un tercero se indica qué residuos y materiales se manejan allí y sus **precios de compra y de servicio**, con **fecha de vigencia**. Un precio nuevo cierra el anterior en esa fecha; el historial de precios se conserva.

---

## Vehículos

- Se identifican por su **placa**. Datos: tipo de vehículo, descripción, modelo, año, capacidad y unidad.
- Pueden ser propios o de un tercero (transportador).
- Cada vehículo funciona también como **depósito**: mientras un residuo va a bordo, está en el inventario del vehículo.

## Empleados

Las personas de la cuenta que operan: conductores, operadores de planta, responsables. Una misma persona puede ser a la vez empleado y cliente. Un empleado con usuario activo en Gresst no se puede desactivar.

---

## Residuos y materiales

El catálogo de tipos de residuo, con su clasificación internacional, características, tratamientos y transformaciones. Detalle en [Residuos y clasificación](residuos.md).

- A un **tercero** se le asignan tipos de residuo de tu catálogo, con un **alias** si él los llama distinto. Es lo que tu cliente conectado ve en *Lo que mis proveedores tienen de mí*.

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
