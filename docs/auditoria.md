# Historial de cambios de datos maestros

Gresst registra **quién cambió qué y cuándo** en los datos con los que trabaja tu cuenta: terceros, instalaciones, materiales, vehículos, embalajes y tratamientos. Es distinto de la [trazabilidad](trazabilidad.md), que cuenta la historia de **cada residuo**; aquí se cuenta la historia de **cada ficha**.

## Qué se registra

Cada vez que alguien crea, modifica, desactiva, reactiva o elimina una ficha, se guarda una línea con:

| Dato | Qué muestra |
|------|-------------|
| **Fecha** | Cuándo se hizo el cambio. |
| **Usuario** | Quién lo hizo. Si el cambio lo hizo soporte actuando en nombre del usuario, se indica *suplantado por [nombre]*. Si no hubo una persona (un proceso automático), aparece *Sistema*. |
| **Acción** | Creación, Modificación, Desactivación, Reactivación o Eliminación. |
| **Cambios** | Cada campo que cambió, con su valor **anterior → nuevo**. Solo aparecen los campos que cambiaron. |

Reglas:

- El historial **solo crece**: no se edita ni se borra desde la aplicación.
- Una modificación que no cambia ningún dato **no deja registro**.
- **Cada cuenta ve solo el suyo.** Nadie ve los cambios de otra cuenta.
- Si el registro del historial fallara, **tu cambio se guarda igual**: el historial nunca impide trabajar.
- No se guardan firmas, fotos ni campos de texto libre adicionales.

## Qué fichas se auditan

| Ficha | Dónde está |
|-------|------------|
| Terceros (clientes y proveedores) | Configuración → Terceros |
| Instalaciones | Configuración → Instalaciones |
| Materiales y tipos de residuo | Configuración → Residuos |
| Vehículos | Configuración → Vehículos |
| Embalajes | Configuración |
| Tratamientos | Configuración → Tratamientos |

El historial de la identidad de una empresa (nombre, identificación) también se registra; lo ve quien revisa o reclama esa identidad. Ver [Empresas e identidad](identidad.md).

## Dónde se consulta

- **Terceros e instalaciones:** abre la ficha y entra en la pestaña **Historial**. Ves una tabla con *Fecha, Usuario, Acción y Cambios*, la más reciente primero; usa **Ver más** para ir hacia atrás.
- **Materiales, vehículos, embalajes y tratamientos:** el registro ya se guarda, pero la pestaña **Historial** aún no está en esas pantallas. Mientras tanto, pídelo a soporte.

## Quién puede verlo

El **propietario** de la cuenta y los **administradores**. Para otros usuarios, el permiso se da por rol: en **Administración → Roles**, activa **Auditoría → Ver**. Por defecto lo trae solo el rol Administrador.

## Qué no cubre

- Los cambios que **no** pasan por Gresst (por ejemplo, correcciones hechas directamente en la base de datos por soporte) no quedan en este historial.
- Las operaciones y sus cambios sobre el residuo tienen su propio historial: ver [Operaciones y cambios del residuo](operaciones.md) y [Trazabilidad](trazabilidad.md).

## Conservación y datos personales

El historial guarda el nombre de quien hizo el cambio y los valores anteriores, que pueden incluir datos personales. Por eso:

- **No se borra por defecto.** La cuenta no tiene un plazo de conservación activo; definir uno es una decisión legal pendiente (protección de datos personales y obligaciones contractuales).
- Si una persona pide que se borren sus datos, soporte [anonimiza al usuario](procesos_operativos.md#anonimizar-una-cuenta-o-un-usuario); el tratamiento del historial ya escrito es parte de esa decisión pendiente.

## Para soporte: seguir un cambio en los registros técnicos

Además del historial de datos, la aplicación escribe **registros técnicos** (logs) para diagnosticar fallas. Son otra cosa: se rotan por día, mezclan todas las cuentas y **no** son el historial de cambios.

Cada solicitud tiene un **identificador de correlación**. Sirve para unir un problema reportado con su rastro:

1. Pide al usuario la **hora aproximada**, la cuenta y la pantalla (ver [Soporte](procesos_operativos.md#reportar-un-problema-o-pedir-un-cambio)).
2. Si la respuesta del error trae el identificador (cabecera `X-Correlation-Id`), anótalo.
3. Cada línea de los registros técnicos lleva ese identificador junto con la **cuenta** y el **usuario**; el mismo identificador aparece en la línea del historial de cambios del mismo guardado.

Los detalles técnicos (esquema, consultas, retención) están en [Documentación de ingeniería](guia_tecnica.md).
