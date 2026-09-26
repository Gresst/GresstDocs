# Cómo funciona Gresst

## Cuentas

Cada empresa tiene su **cuenta**: sus usuarios, instalaciones, vehículos, catálogo de residuos, inventario y certificados. Ninguna otra cuenta ve ni cambia esos datos.

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

## Recorrido habitual de un residuo

1. El cliente **pide** el servicio (WebApp, vista Tercerización) o el proveedor lo registra a su nombre.
2. El proveedor **programa** la recolección o la recepción (WebApp, vista Operaciones).
3. El conductor **recoge** en la **App**, también sin señal.
4. La planta **recibe**, **trata**, **transfiere** o **dispone** (WebApp).
5. El proveedor **emite el certificado** y el cliente lo ve en su cuenta.
6. Si el residuo pasa a otra cuenta conectada, cada una ve el **recorrido** de su residuo entre empresas.

Cada paso es una [operación](operaciones.md); el sistema registra lo que le pasó a cada residuo y con eso arma su [trazabilidad](trazabilidad.md). Los residuos se clasifican con los códigos internacionales ([Residuos y clasificación](residuos.md)).

Quién registra y firma cada paso: [Casos por operación](casos_entrada_salida_residuos.md). Cómo se piden los servicios: [Solicitudes](solicitudes.md). Qué documentos se emiten: [Certificados y documentos](certificados.md).
