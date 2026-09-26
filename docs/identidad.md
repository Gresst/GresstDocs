# Empresas e identidad

## Dos cosas distintas: la ficha y la entidad legal

- **La ficha** es lo que cada cuenta registra sobre una empresa o persona con la que trabaja: nombre, contactos, sedes, materiales, precios. Es de esa cuenta y solo ella la ve y la edita. En **Configuración → Terceros** hay **una sola ficha por empresa**, aunque sea a la vez tu cliente y tu proveedor.
- **La entidad legal** es la identidad real de esa empresa o persona en toda la plataforma: **país + tipo de documento + número**. Es única: la misma empresa registrada por diez cuentas distintas son diez fichas, pero una sola entidad legal.

Gresst enlaza cada ficha con su entidad legal a partir de la identificación. Así sabe que el "Reciclajes del Norte S.A.S." de una cuenta y el "RECICLAJES DEL NORTE" de otra son la misma empresa, aunque cada cuenta la llame distinto.

## La identificación

- El número se **normaliza**: sin puntos, guiones ni espacios, y con el dígito de verificación aparte. "800.123.456-7" y "800123456" son el mismo NIT.
- Se valida el dígito de verificación del **NIT** (Colombia) y del **CUIT** (Argentina).
- Se puede **corregir** un número mal digitado sin perder nada: la ficha pasa a la entidad legal correcta y toda su historia (solicitudes, residuos, certificados) sigue en su lugar.
- Una ficha sin identificación funciona, pero no se puede enlazar con otras cuentas ni invitar a conectarse.

## La cuenta y su verificación

Cada cuenta representa a una empresa, su **organización**, que también es una entidad legal. Para que otras cuentas confíen en que es quien dice ser, esa identidad se **verifica**:

- Si Gresst crea la cuenta, la identidad se comprueba contra el registro oficial del país y la cuenta nace **verificada**.
- Si la empresa se registra por su cuenta, o cambia después su documento, la cuenta queda **pendiente de verificación** hasta que Gresst la valida. Mientras tanto no puede iniciar sesión.
- Solo puede haber **una cuenta verificada por entidad legal**. Gresst puede autorizar excepciones, por ejemplo filiales de un mismo grupo.

## Para qué sirve

- **Conectarse:** una invitación se dirige a la **entidad legal** del tercero, no a una cuenta ni a un usuario. La recibe la cuenta verificada de esa empresa. Una cuenta no verificada no puede conectarse ("Tu cuenta debe estar verificada para conectarte con otras cuentas").
- **Nombre e identificación de las cuentas conectadas:** mientras dos cuentas están conectadas, el nombre y la identificación del otro vienen de **su** cuenta y no se editan en tu ficha. El resto de la ficha sigue siendo tuyo.
- **Seguridad:** escribir el NIT de otra empresa en una ficha **no da acceso** a nada suyo. Para compartir información hace falta una conexión aceptada por las dos cuentas.

Ver [Trabajar conectados](guia_conexiones.md).
