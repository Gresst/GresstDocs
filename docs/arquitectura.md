# Arquitectura del Sistema

Gresst conecta **generadores** (empresas que producen residuos) y **gestores** (quienes recolectan, tratan y disponen), más operadores logísticos. Cubre generación, inventario, transporte, planta y disposición.

La plataforma está **en migración**: el portal clásico sigue en producción mientras el cliente web nuevo y la app de campo lo van sustituyendo.

## Superficies que usa la gente

| Superficie | URL / canal | Guía |
|------------|-------------|------|
| **WebApp** | Cliente web nuevo (gestoras, según cuenta migrada) | [Guía WebApp](guia_webapp.md) |
| **Portal de Gestores** | `https://gestor.gresst.com` | [Guía Gestor](guia_portal_gestores.md) |
| **Portal de Generadores** | `https://generador.gresst.com` | [Guía Generador](guia_generador.md) |
| **App móvil** | iOS/Android, conductores y campo | [Guía App](guia_app.md) |

WebApp y App **no** usan el API del portal clásico: hablan con el backend nuevo. Generador sigue en su propio portal (SQL directo). Gestor y WebApp pueden compartir sesión mientras se migran pantallas.

## Flujo habitual

1. El **generador** pide recolección (portal Generador o, más adelante, WebApp).
2. El **gestor** asigna ruta o recepción (Gestor o WebApp).
3. El **conductor** ejecuta en la **App** (con trabajo offline si no hay red).
4. Planta registra **recepción** y procesos en instalación (WebApp; en App, menú En instalación).
5. Se emiten **certificados** y se consultan desde el portal que use esa cuenta.

Reglas de negocio (quién firma, dominio, descarga en depósito propio): [Casos de entrada y salida](casos_entrada_salida_residuos.md).

## Menús legacy (producción)

**Gestor:** Operación (Entrada, Recolección, Recepción, Clasificación, Tratamiento, Transferencia, Disposición, Salida); Administración; Consultas; Configuración.

**Generador:** Procesos (Almacenamiento, Tratamiento, Solicitud/Salida, Entrega); Banco de residuos; Consultas; Reportes; Configuración.

El menú del **WebApp** es otro (Entrada, Logística, Transformación, …): [guía WebApp](guia_webapp.md).

Soporte: [Procesos operativos](procesos_operativos.md).
