# Documentación Gresst

Bienvenido a la documentación del sistema de gestión y logística de residuos **Gresst**.  
Aquí encontrarás cómo usar Gresst, los portales y los casos de negocio. El mapa de ingeniería está en la API: [SOLUTION.md](https://github.com/Gresst/GresstAPI/blob/main/docs/SOLUTION.md).

---

## ¿Qué es Gresst?

Gresst es una **plataforma integral** para la gestión y logística de residuos que conecta a generadores de residuos con gestores especializados, facilitando el cumplimiento normativo y la trazabilidad completa del proceso.

---

## Componentes de la Plataforma

Hoy conviven el stack **legacy** (Gestor, Generador) y el stack **nuevo** (API + WebApp + App). El WebApp reemplaza de a poco al Gestor; la App de campo habla solo con la API nueva.

| Superficie | Rol |
|------------|-----|
| [WebApp](guia_webapp.md) | Cliente web nuevo (operación, catálogos, certificados) |
| [Portal de Gestores](guia_portal_gestores.md) | Gestor legacy — `gestor.gresst.com` |
| [Portal de Generadores](guia_generador.md) | Legacy — `generador.gresst.com` |
| [App móvil](guia_app.md) | Conductores y personal de campo |

---

## Estructura de la documentación
- [Arquitectura del Sistema](arquitectura.md)
- [Guía Portal de Gestores (Legacy)](guia_portal_gestores.md)
- [Guía Portal de Generadores (Legacy)](guia_generador.md)
- [Guía de usuario](guia_usuarios.md)
- [Guía de Usuario — WebApp](guia_webapp.md)
- [Guía de Usuario — App Móvil](guia_app.md)
- [Procesos operativos](procesos_operativos.md)
- [Casos de Entrada y Salida de Residuos](casos_entrada_salida_residuos.md)
- [Qué cubre este sitio](ownership.md)
- [Documentación de ingeniería](guia_tecnica.md)

---
**Versión:** 1.0  
**Última actualización:** septiembre 2026
