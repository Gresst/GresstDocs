# Cómo funciona Gresst

## Cuentas

Cada empresa tiene su **cuenta**: sus usuarios, instalaciones, vehículos, catálogo de residuos, inventario y certificados. Ninguna otra cuenta ve ni cambia esos datos. Cada cuenta nombra sus residuos y sus sedes a su manera; quien recibe confirma a qué tipo y a qué sede suyos corresponden.

Una cuenta también puede ser **subcuenta**: la cuenta de un cliente que su proveedor crea y administra. Tiene sus propios datos, pero usa el catálogo de tipos de residuo y tratamientos de su proveedor ([Subcuentas](guia_subcuentas.md)).

Lo que una cuenta puede hacer depende de las **operaciones que tiene habilitadas** (recepción, transporte, tratamiento, transferencia, disposición, …). Una misma cuenta puede generar residuos, recogerlos, tratarlos y entregarlos a otra.

## Terceros

En **Terceros** cada cuenta registra a las empresas con las que trabaja: clientes y proveedores, en una sola ficha por empresa. Con un tercero se programan recolecciones, se reciben o entregan residuos y se emiten certificados.

Detrás de las fichas de todas las cuentas, cada empresa tiene una sola **entidad legal** (país + tipo y número de documento). Ver [Empresas e identidad](identidad.md).

## Conexiones

Si el tercero también tiene cuenta en Gresst, las dos cuentas pueden **conectarse**. La conexión no mezcla datos: cada una conserva los suyos. Lo que se comparte son los documentos entre las dos:

| Documento | Lo envía | Lo recibe |
|-----------|----------|-----------|
| **Solicitud de servicio** | El cliente, o el proveedor a nombre del cliente (con aprobación del cliente) | La otra cuenta |
| **Entrega de residuos** | Quien transfiere el residuo | Quien lo recibe (y, si lo hay, el transportador) |
| **Certificado** | Quien presta el servicio | El cliente |

Si el tercero no tiene cuenta, o no están conectados, la cuenta que sí la tiene registra todo por su lado.

Detalle: [Trabajar conectados](guia_conexiones.md).

### Cuentas conectadas y subcuentas

Hay dos formas de relacionar cuentas: **cuentas independientes que se conectan**, y **subcuentas que un proveedor administra**.

| | Cuentas conectadas | Subcuenta y su proveedor |
|---|---|---|
| Cómo se relacionan | Por una **conexión**: una invita y la otra acepta | Por un **vínculo** que nace cuando el proveedor crea la subcuenta |
| Tipos de residuo y tratamientos | Cada cuenta tiene los suyos | Los del proveedor, en solo lectura para la subcuenta |
| Correspondencias | Sí: las confirma quien recibe | No: el residuo se llama igual para las dos |
| Proveedores | Una conexión con cada proveedor | Uno solo |
| ¿Puede dejar de serlo? | Sí: cualquiera de las dos se desconecta | Sí, si el proveedor la hace independiente; queda conectada con él |

Detalle: [Subcuentas](guia_subcuentas.md).

## Recorrido habitual de un residuo

1. Si el tipo lleva inventario, el cliente **registra la generación** del residuo en su instalación.
2. El cliente **pide** el servicio sobre ese residuo (WebApp, vista Tercerización) o el proveedor lo registra a su nombre.
3. El proveedor **programa** la recolección o la recepción (WebApp, vista Operaciones).
4. El conductor **recoge** en la **App**, también sin señal.
5. La planta **recibe**, **trata**, **transfiere** o **dispone** (WebApp).
6. El proveedor **emite el certificado** y el cliente lo ve en su cuenta, ligado a su residuo.
7. Si el residuo pasa a otra cuenta conectada, cada una ve el **recorrido** de su residuo entre empresas.

Cada paso es una [operación](operaciones.md); el sistema registra lo que le pasó a cada residuo y con eso arma su [trazabilidad](trazabilidad.md). Los residuos se clasifican con los códigos internacionales ([Residuos y clasificación](residuos.md)).

Quién registra y firma cada paso: [Casos por operación](casos_entrada_salida_residuos.md). Cómo se piden los servicios: [Solicitudes](solicitudes.md). Qué documentos se emiten: [Certificados y documentos](certificados.md).
