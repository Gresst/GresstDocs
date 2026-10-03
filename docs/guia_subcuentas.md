# Subcuentas

Una **subcuenta** es la cuenta de un cliente que su proveedor crea y administra. Es una cuenta propia: tiene sus usuarios, sus sedes, sus residuos e inventario, sus solicitudes y sus certificados. Lo que cambia es el catálogo: usa los **tipos de residuo y los tratamientos de su proveedor**.

Por eso una subcuenta y su proveedor **no necesitan conectarse** ni **corresponder** nada: el residuo se llama igual para las dos cuentas.

Una subcuenta la administra **un solo proveedor**, y su catálogo es el de ese proveedor. Otros proveedores también pueden trabajar con ella conectándose, como con cualquier cliente ([Trabajar con varios proveedores](#trabajar-con-varios-proveedores)). Comparación de las dos formas: [Cómo funciona Gresst](arquitectura.md#cuentas-conectadas-y-subcuentas).

---

## Si eres el proveedor

### Crear una subcuenta

Solo un **Administrador** de la cuenta puede crear o convertir subcuentas.

1. **Configuración → Terceros → Nueva subcuenta.**
2. Datos de la cuenta: nombre, tipo de persona, tipo y número de identificación, ciudad, dirección y teléfono.
3. **Propietario de la cuenta:** nombre, apellido y correo.
4. **Crear subcuenta.** El propietario recibe una invitación por correo para activar su cuenta. Si el correo no sale, Gresst te muestra el **Enlace de invitación** para que se lo entregues (**Copiar enlace**).

La identificación de la subcuenta queda **verificada** porque la crea su proveedor. Si otra cuenta ya está verificada con ese documento, la subcuenta no se crea: revisa los datos o contacta a [soporte](procesos_operativos.md).

### Convertir un tercero en subcuenta

Si el cliente ya está en tus **Terceros**, no hace falta crearlo de nuevo: en su fila, **⋮ → Convertir en subcuenta**. Solo pide el **propietario** de la cuenta (nombre, apellido y correo); la invitación funciona igual que al crear.

- Sus sedes, vehículos e historial se conservan y pasan a ser de la subcuenta.
- Desde ese momento no puedes editar su nombre ni su identificación: son de su cuenta.
- No se puede convertir un tercero que ya está conectado contigo o tiene una invitación pendiente, ni uno sin identificación.

### Cómo la ves

- En **Terceros** aparece como tu cliente; la columna **Gresst** dice **Subcuenta**. No se ofrece **Invitar a Gresst**: ya están relacionadas.
- Su ficha es **de solo lectura**: la identidad y las sedes son de la subcuenta. En **Resumen**, la tarjeta **Subcuenta** muestra si está activa y que usa tu catálogo, con los botones **Hacer independiente** y **Desactivar**. En la pestaña **Homologaciones** solo verás que no las necesita: usa tu catálogo.
- Sus sedes te sirven como **punto de recolección**, sin correspondencias.
- Ves solo lo compartido: las solicitudes y entregas dirigidas a ti y los certificados que tú emites. El resto de su inventario no.

### Tu catálogo y la subcuenta

- La subcuenta trabaja con tus tipos de residuo y tus tratamientos.
- No puedes **desactivar** un tipo que la subcuenta todavía usa: residuos en su inventario o ítems en solicitudes abiertas.
- Si cambias los **códigos de identificación** de un tipo o si es **peligroso**, Gresst avisa por correo al propietario de cada subcuenta que lo usa, porque cambia cómo debe almacenarlo y declararlo.

### Desactivarla

En la tarjeta **Subcuenta**, **Desactivar** y confirma.

- Sus usuarios pierden el acceso.
- Sus correos **siguen reservados**; el nombre y la identificación también se conservan. Para reutilizar un correo, su dueño puede confirmarlo al registrarse, o puedes pedir a [soporte](procesos_operativos.md) que lo libere.
- Su historial se conserva y la tarjeta la muestra como **Inactiva**.

Para reactivarla, contacta a [soporte](procesos_operativos.md). Si la cuenta no volverá a usarse, soporte puede **anonimizarla**: es definitivo y no se puede reactivar (ver [Soporte](procesos_operativos.md#anonimizar-una-cuenta-o-un-usuario)).

### Hacerla independiente

En la tarjeta **Subcuenta** (o en su fila de **Terceros**, **⋮ → Hacer independiente**), **Hacer independiente** y confirma.

- Se copian a su catálogo los tipos de residuo que ha usado. Sus residuos y su historial siguen igual.
- Queda **conectada** contigo, con las correspondencias ya confirmadas: sus solicitudes y entregas siguen sin que nadie tenga que confirmar nada.
- Dejas de administrarla: desde entonces es un [cliente conectado](guia_conexiones.md) más. Tu catálogo no cambia.

Las dos cuentas necesitan su identificación verificada. Si algo falla, puedes intentarlo de nuevo. Es un paso de **una sola vía**: una cuenta independiente no vuelve a ser subcuenta.

---

## Si eres la subcuenta

Tu menú muestra lo que necesitas para trabajar con tus proveedores: almacenamiento, tratamiento, solicitudes y entregas; consultas de certificados, residuos, trazabilidad y documentos; reportes de solicitudes; y en **Configuración**, terceros, instalaciones, vehículos y tipos de residuo. En **Administración**, el propietario ve los datos de la cuenta, el propietario y los usuarios.

- En **Configuración**, los **tipos de residuo** son los de tu proveedor, en solo lectura, con un aviso de que los administra él; los tratamientos también son los suyos. No puedes crear ni cambiar tipos ni tratamientos: pídele a tu proveedor el que te falte.
- Tu proveedor aparece como tu proveedor. Le pides servicios desde tus residuos y le haces entregas **sin escoger correspondencias**; él recibe con el mismo tipo de residuo.
- Con tu proveedor no hay nada que homologar.
- Los certificados que te publica los consultas en **Certificados** y quedan en tu cuenta como tu registro.
- Si tu proveedor cambia la clasificación de un tipo que usas, te llega un correo.
- Lo demás es tuyo y lo administras tú: usuarios, roles, sedes, vehículos, conductores y contactos.

### Trabajar con varios proveedores

- Otro proveedor puede **conectarse** con tu subcuenta: te invita, como a cualquier cuenta. Tu proveedor principal sigue administrando tu cuenta y tu catálogo.
- Con ese otro proveedor trabajas como un [cliente conectado](guia_conexiones.md): tus tipos de residuo (los de tu proveedor principal) se corresponden con los suyos, y esa correspondencia la confirma él, que recibe.
- Si tienes varios proveedores, al entrar Gresst te pide **elegir con cuál trabajas**. Lo que cada proveedor tiene de ti (solicitudes, entregas, certificados y sus registros de tu empresa) solo se ve mientras trabajas con él; tus propios datos se ven siempre.
- Para cambiar de proveedor, elígelo en el **menú de usuario**: la aplicación se recarga con el nuevo.
- Debajo del encabezado verás *Conectado a [proveedor]*: el proveedor con el que trabajas en esa sesión.

---

## Preguntas frecuentes

**La invitación al propietario no llegó.** Al crear la subcuenta, si el correo no salió, el proveedor recibió el enlace de invitación. Pídeselo.

**No puedo crear un tipo de residuo.** Tu cuenta es una subcuenta: el catálogo lo administra tu proveedor. Pídele que lo cree; lo verás de inmediato.

**No puedo desactivar un tipo de residuo.** Una subcuenta tuya todavía lo usa (residuos en inventario o ítems en solicitudes abiertas).

**¿Por qué no puedo invitar ni conectar a esta cuenta?** Es tu subcuenta: ya están relacionadas y no necesitan conexión.

**¿Mi proveedor ve todo mi inventario?** No. Ve las solicitudes y entregas que le diriges, los certificados que él emite y tus sedes.

**Quiero trabajar con otro proveedor.** Ese proveedor puede invitar a tu cuenta y conectarse contigo; tu proveedor principal sigue administrándola. Si prefieres llevar tu propio catálogo, pídele a tu proveedor principal que la haga independiente.

**No veo las solicitudes o los certificados de uno de mis proveedores.** Estás trabajando con otro. Cambia de proveedor en el menú de usuario.
