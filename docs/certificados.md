# Certificados y documentos

Gresst emite en PDF los certificados y manifiestos que respaldan cada operación. Se generan en **Control → Certificados**.

## Tipos

| Documento | Respalda | Operaciones |
|-----------|----------|-------------|
| **Certificado de recepción** | Que la planta recibió los residuos | Recepción |
| **Manifiesto de recepción** | El detalle de lo recibido | Recepción |
| **Certificado de transporte** | El transporte completo | Transporte, Retorno |
| **Manifiesto de carga** | Lo cargado en una parada, con vehículo, conductor y ruta | Transporte |
| **Certificado de clasificación** | La separación o el procesamiento físico | Procesamiento, Segregación |
| **Certificado de tratamiento** | La transformación del residuo | Tratamiento, Refinación, Digestión |
| **Certificado de transferencia** | La entrega a un tercero | Transferencia |
| **Certificado de disposición** | La eliminación definitiva | Disposición |
| **Certificado externo** | Un documento de otra empresa que cierra residuos de cualquier operación | Cualquiera |

Además hay documentos de la orden: **manifiesto de transferencia**, **guía de despacho** y **hoja de ruta**.

## Pantalla de certificados

Una pestaña por tipo; dentro, **Pendientes** y **Emitidos**.

### Pendientes → emitir

Los residuos que ya terminaron la operación y aún no tienen certificado. Se seleccionan y se emite con una de estas modalidades:

| Modalidad | Resultado |
|-----------|-----------|
| **Individual** | Un certificado por residuo |
| **Agrupado** | Un certificado por generador, con todos sus residuos seleccionados |
| **Acumulado** | Igual que agrupado; el certificado queda marcado como acumulado |
| **Externo** | Se adjunta el documento de otra empresa, con referencia y notas, y los residuos quedan cerrados |

Al emitir se pueden agregar notas, responsable, **licencias** vigentes y soportes. El manifiesto de carga se agrupa por orden (un vehículo y una ruta), no por generador.

### Emitidos

- **Publicar:** el certificado queda visible para el cliente conectado en su cuenta (Tercerización → Certificados).
- **Reemitir:** vuelve a generar el PDF.
- **Anular:** el certificado queda anulado, a la vista del cliente. Un certificado publicado nunca se modifica ni se borra.

La pestaña muestra, por tipo: emitidos, anulados, publicados, clientes y residuos certificados.

## Verificación

Cada PDF lleva un **código QR**. Al escanearlo, cualquiera puede comprobar en Gresst que el certificado es auténtico, sin iniciar sesión.

## Certificados recibidos

Si tus proveedores están conectados contigo, los certificados que te publican aparecen en **Tercerización → Certificados**, con filtro por tipo y enlace al PDF. Ver [Trabajar conectados](guia_conexiones.md#certificados).
