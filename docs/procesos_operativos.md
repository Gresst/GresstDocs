# Soporte

## Reportar un problema o pedir un cambio

Las incidencias y solicitudes de producto se registran en Jira: `gresst.atlassian.net`, proyecto **GRE**, con el componente de la superficie afectada (**WebApp**, **App**, **API** o **GresstDocs**).

Incluye la cuenta, el usuario, la pantalla, qué esperabas y qué pasó, y una captura si la tienes.

## Preguntas frecuentes

**La invitación a una subcuenta no llegó.** Si el correo no salió al crearla, el proveedor recibió el enlace de invitación: el propietario debe pedírselo. Ver [Subcuentas](guia_subcuentas.md#crear-una-subcuenta).

**No puedo crear un tipo de residuo.** Tu cuenta es una subcuenta: los tipos de residuo y los tratamientos los administra tu proveedor y se ven en solo lectura. Pídele que cree el que necesitas.

**¿Por qué no me dejan invitar ni conectar a esta cuenta?** Es una subcuenta tuya, o tú eres su subcuenta: ya están relacionadas y no necesitan conexión. Otros proveedores sí pueden invitar a una subcuenta. Ver [Subcuentas](guia_subcuentas.md).

**No veo las solicitudes o los certificados de uno de mis proveedores.** Tu subcuenta trabaja con un proveedor a la vez. Cámbialo en el menú de usuario. Ver [Trabajar con varios proveedores](guia_subcuentas.md#trabajar-con-varios-proveedores).

Más preguntas: [Trabajar conectados](guia_conexiones.md#preguntas-frecuentes) y [Subcuentas](guia_subcuentas.md#preguntas-frecuentes).

**Mi correo dice que ya está en uso.** Pertenece a un usuario activo, o a uno inactivo. Si es tuyo, confirma que eres su dueño al registrarte (enlace mágico, Google o Microsoft) y Gresst te lo asigna. Si es de un usuario inactivo de tu cuenta, el administrador puede [liberarlo](guia_webapp.md#usuarios-inactivos-y-correos).

**El documento de una empresa ya está registrado y esa cuenta no se usa.** Si la cuenta está inactiva y no volverá a usarse, pide su anonimización: el documento queda libre para registrarse de nuevo.

## Anonimizar una cuenta o un usuario

Solo lo hace soporte, sobre cuentas o usuarios **inactivos**, y pide un **motivo** que queda registrado con la fecha y quien lo hizo. Es **definitivo**: no se puede reactivar.

- **Usuario:** pierde nombre, correo, contacto, contraseña, roles e invitación, y pasa a llamarse *Usuario anonimizado*.
- **Cuenta:** pierde nombre, contacto, firma e identificación (tipo, número y dígito de verificación) —también los de sus usuarios— y pasa a llamarse *Cuenta anonimizada*. Esa identificación queda libre para registrarla de nuevo.
- **Propietario:** se anonimiza junto con su cuenta, no por separado.
- Las operaciones y los certificados **se conservan**.

Si solo necesitas reutilizar un correo, no hace falta anonimizar: basta con [liberarlo](guia_webapp.md#usuarios-inactivos-y-correos).

## Versiones

| Superficie | Cómo le llegan los cambios al usuario |
|------------|---------------------------------------|
| **WebApp** | Se publica primero en el entorno de pruebas (staging) y luego en producción. Basta con recargar la página. |
| **App** | Por las tiendas (iOS / Android). Si la versión instalada es muy antigua, la App pide actualizarla antes de continuar. |

Cómo se construye y despliega cada repositorio lo documenta ingeniería: [Documentación de ingeniería](guia_tecnica.md).
