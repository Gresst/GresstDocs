# Auditoría de cambios

Gresst registra **quién cambió qué y cuándo** en la información maestra de tu cuenta: las empresas, instalaciones, materiales, vehículos, embalajes y tratamientos. Sirve para responder preguntas como *¿quién cambió el nombre de esta instalación?* o *¿cuándo se desactivó este vehículo?*

No confundir con la [trazabilidad](trazabilidad.md): la trazabilidad cuenta la historia de **cada residuo**; la auditoría cuenta la historia de **los datos con los que configuras tu cuenta**.

## Qué se registra

| Se audita | Dónde se ve |
|-----------|-------------|
| Empresas (terceros) y su identidad | Detalle del tercero, pestaña **Historial** |
| Instalaciones | Detalle de la instalación, pestaña **Historial** |
| Materiales | Lista de materiales, menú **⋮** de la fila → **Historial** |
| Vehículos | Lista de vehículos, menú **⋮** de la fila → **Historial** |
| Embalajes | Lista de embalajes, menú **⋮** de la fila → **Historial** |
| Tratamientos | Lista de tratamientos, menú **⋮** de la fila → **Historial** |

Cada cambio guarda:

- **Fecha y hora** del cambio.
- **Usuario** que lo hizo. Si lo hizo el sistema, aparece como *Sistema*. Si alguien entró en nombre de ese usuario, se indica *suplantado por* y su nombre.
- **Acción:** Creación, Modificación, Eliminación, Desactivación o Reactivación.
- **Cambios:** cada campo que se modificó, con su valor anterior y su valor nuevo. Un campo vacío se muestra como **—**.

Solo aparecen los campos que realmente cambiaron. Guardar un registro sin modificar nada no deja rastro.

## Qué no se registra

- **Firmas, fotos y datos libres** de los registros: no se guardan en el historial, porque no aportan al "quién cambió qué" y pueden contener información sensible.
- **Cambios en operaciones y residuos:** eso es la [trazabilidad](trazabilidad.md).
- **Cambios hechos fuera de Gresst**, por ejemplo directamente en la base de datos: solo se audita lo que se hace desde la WebApp, la App o la API.
- **Otros catálogos** que aún no están en la lista de arriba (por ejemplo, las relaciones entre una empresa y sus materiales o tratamientos).

## Quién puede verlo

- El **dueño de la cuenta** siempre.
- Los usuarios con un rol que incluya el permiso de ver el historial de cambios (módulo Administración). Por defecto lo tiene el rol **Admin**; puedes dárselo a otros roles desde **Administración → Roles**.

Cada cuenta ve **solo su propio historial**. Una cuenta conectada no ve los cambios que hace la otra, aunque comparta la empresa o el vehículo.

## Cómo se consulta

1. Entra al registro que quieres revisar (detalle de un tercero o de una instalación) y abre la pestaña **Historial**; en materiales, vehículos, embalajes y tratamientos usa **⋮ → Historial**.
2. Los cambios aparecen del **más reciente al más antiguo**.
3. Si hay muchos, usa **Ver más** para cargar los anteriores.

Si el registro no tiene cambios, verás *Aún no hay cambios registrados para este registro*.

## Características

- **Solo crece:** el historial no se edita ni se borra desde la aplicación.
- **No bloquea tu trabajo:** si por una falla el cambio no pudo quedar en el historial, tu guardado se hace igual.
- **Conservación:** por ahora no se elimina automáticamente ningún registro del historial.

## Para soporte

Si alguien reporta que "un dato cambió solo", revisa primero la pestaña **Historial** del registro: indica el usuario, la fecha y el valor anterior. Si el cambio aparece como *Sistema* o no aparece, puede venir de una operación automática o de un cambio hecho fuera de Gresst; escálalo a ingeniería con el registro y la fecha aproximada.
