# Trazabilidad

Gresst guarda la historia completa de cada residuo: de dónde salió, por qué manos pasó, en qué se convirtió y cómo terminó. Esa historia la arma el sistema a partir de las [operaciones](operaciones.md): nadie la escribe a mano.

## Cómo se construye

- Cada operación cerrada deja registrados sus **cambios** sobre cada residuo: creación, reubicación, cambio de dueño, transformación, división, unión, disposición…
- El historial **solo crece**: no se edita ni se borra. Una corrección es un **Ajuste**, que queda registrado como un cambio más.
- Cada cambio guarda la fecha, la operación, el documento que la respalda, las personas y responsables, quién la registró, las cantidades (unidades, kg, m³) y el estado físico antes y después.
- Cuando un residuo se **divide** (Segregación) o se **une** con otros (Consolidación), los residuos de origen no desaparecen: quedan **en cero** y enlazados con los nuevos. Así siempre se puede ir hacia atrás.
- **Quien generó** el residuo nunca cambia. Lo que cambia es quién lo tiene bajo su custodia.

## Dónde se consulta

- **Control → Inventario:** en el menú **⋮** de un residuo, **Ver trazabilidad**.
- **Control → Reportes → Trazabilidad:** eliges el residuo y ves, en orden, cada acción con su documento, persona, responsables, fecha, cantidad, peso, volumen y usuario.

## Entre cuentas conectadas

Cada cuenta conoce un residuo por **su propio identificador**, con su tipo, sus cifras y su historia. No hay un identificador único compartido, y es a propósito:

- Las dos partes pueden tener cifras distintas (lo que se despachó frente a lo que llegó), y ambas quedan guardadas.
- Quien recibe puede dividir, consolidar o transformar el residuo; un residuo consolidado mezcla varios orígenes y ya no es "el mismo".
- Ninguna cuenta puede cambiar la historia de otra.

Lo que une las dos historias es la **entrega**: cada línea de una entrega recibida enlaza el residuo de quien envía con el residuo nuevo de quien recibe. Con esos enlaces, y con las divisiones, uniones y transformaciones dentro de cada cuenta, Gresst arma el recorrido completo. Por ejemplo: quien generó → primer gestor → segundo gestor → certificado de disposición final.

En **Control → Reportes → Trazabilidad**, un residuo que pasó por cuentas conectadas muestra además **Recorrido entre empresas**, en dos partes:

- **De dónde vino:** los pasos anteriores, aunque hayan ocurrido en otras cuentas.
- **A dónde fue:** lo que pasó después, aunque ocurra en otras cuentas.

Cada paso muestra la empresa, el tipo de residuo y sus códigos, las fechas, la operación, la planta y ciudad, y las cantidades.

### Qué no se muestra

- **Precios, facturación ni notas internas** de ninguna cuenta.
- **Residuos ajenos:** si tu residuo se consolidó con el de otros clientes, ves el residuo resultante y lo que le pasó después, pero no los residuos de los otros clientes.
- **Más allá de una empresa sin cuenta:** si el residuo pasó a un tercero que no está en Gresst, el recorrido termina ahí, con lo que registró la última cuenta (nombre y firma de quien recibió).

Cómo conectar cuentas y entregar residuos: [Trabajar conectados](guia_conexiones.md).
