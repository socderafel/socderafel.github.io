---
layout: default
title: "UD6 — ADMINISTRACIÓ DEL ACCÉS AL DOMINI · Temari Complet"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut0408.html"
prev_label: "⬅️ 5.8 TEORIA UNITAT 5 PART 7"
next_url: "../ut05/ut0501.html"
next_label: "6.1 TEORIA UNITAT 6 PART 1 ➡️"
---

# 📘 UD6 — ADMINISTRACIÓ DEL ACCÉS AL DOMINI (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**6.1 TEORIA UNITAT 6 PART 1**](./ut0501.md)
- [**6.2 TEORIA UNITAT 6 PART 2**](./ut0502.md)
- [**6.3 TEORIA UNITAT 6 PART 3**](./ut0503.md)

---

# 6.1 TEORIA UNITAT 6 PART 1

> **📌 🏷️ Apunt de la Unitat**
> #### APUNTS I FÒRUM

> **📌 🏷️ Apunt de la Unitat**
> ##### ACTIVITATS EVALUABLES

> **📌 🏷️ Apunt de la Unitat**
> ##### ACTIVITATS NO EVALUABLES

> **📌 🏷️ Apunt de la Unitat**
> ##### ACTIVITATS DE REFORÇ

---

Unidad 6: Administración del acceso al dominio

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

- Términos de Active Directory que se deben de entender para una correcta administración de un dominio.

• Active Directory (AD): Es un servicio de directorio que gestiona una base de datos organizada de modo jerárquico con el objetivo de administrar de una manera sencilla los recursos de una red, almacenando información de cada elemento de la red de manera estructurada, lo que permite facilitar el proceso de búsqueda de los recursos y de autenticación dentro de la red.

• Objetos del Directorio Activo: El Directorio Activo es una implementación concreta del protocolo LDAP. Este protocolo trata los elementos de la red como objetos. Los tipos de objetos básicos que existen en el Directorio Activo son: Usuarios, Grupos, Equipos, Impresoras, Unidades Organizativas.

• LDAP: Son las siglas de Protocolo Ligero de Acceso a Directorio. Se trata de un conjunto de protocolos de licencia abierta que son utilizados para acceder a la información que está almacenada de forma centralizada en una red. Se usa junto con AD. • En resumen : LDAP es un protocolo de acceso a la información, permitiendo autenticar y autorizar el acceso granular a los recursos de TI, mientras que Active Directory es una base de datos de información de usuarios y grupos.

• Un esquema de Active Directory sería como se muestra a continuación: Todas las relaciones que se establecen entre el AD y los objetos que forman parte de AD se basan en LDAP.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Dominio de Windows: un Dominio Windows es una forma de administración centralizada de los distintos recursos disponibles en una red (usuarios, equipos, servidores, impresoras, etc.).

• Controlador de dominio: Un controlador de dominio es un ordenador (Equipo o PC) que tiene instalado un S.O. Windows Server, que cuenta con la función de servidor de dominio instalada. Cada controlador de dominio almacena una copia de la base de datos de Active Directory, que contiene información sobre todos los objetos dentro del mismo dominio, por tanto es el equipo que tiene instalado el servicio de directorio activo.

• Nombre Dominio: es lo que permite identificar y agrupar todos los recursos de una red Windows. • Servicio DNS: es un servicio de Internet y de red local Windows que traduce los nombres de los dominios en direcciones IP. • Árbol de dominios: Es una agrupación lógica de un conjunto de dominios. Por ejemplo: Dominio Principal instituto.ies, subdominios secretaria.instituto.ies y departamentos.instituto.ies • Bosque de dominios: Es una agrupación lógica de árboles de dominios. A lo anterior se le añade un nuevo árbol de dominio. Por ejemplo: extensión.ies y clases.extension.ies.

• Nombre NetBios: El nombre NetBIOS es un valor único dado al equipo o computadora. El nombre de dominio NetBIOS es el subdominio del nombre de dominio DNS. Por ejemplo en el dominio instituto.ies, el nombre netbios es instituto. • Usuarios locales: Son los que forman parte de los equipos de forma independiente y se usan para administrar y proteger estos equipos, no forman parte del dominio, suelen estar en los equipos clientes.

• Usuarios del dominio: Son los usuarios creados en el servidor en el directorio activo, registran toda la información necesaria para la definición de los datos propios incluyendo su nombre de usuario y contraseña.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

- Añadir máquinas cliente al dominio.

• Para incluir en el dominio los equipos que actuarán como cliente hay que configurar las propiedades de TCP/IP de cada una de las máquinas que vamos a unir al dominio, teniendo en cuenta que: • La dirección del controlador de dominio (que implementa funciones de DNS) es la del servidor de dominio.

• Una vez te logas con un usuario configurado en AD ya te aparecerá en los equipos del dominio. • Para poder conectar un equipo al dominio, te debe contestar el ping al dominio creado en el controlador de dominio. • Si responde al ping, ya podremos unir el la máquina al dominio usando la cuenta de Administrador del AD o bien, un usuario configurado en el dominio.

• En las propiedades del equipo podremos comprobar que estamos adheridos al dominio.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • También, desde el servidor, si accedemos a : Servidor –Herramientas – Usuarios y equipos de AD

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Accediendo al dominio y a “Computers”, aparecerá el equipo.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

- Eliminar clientes de un dominio.

• Desde el equipo que estamos conectados al dominio, entramos con la cuenta de administrador del dominio, y encontraremos la opción de “Desconectar del dominio”.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 4. Crear y configurar usuarios por la interfaz gráfica

• Desde la misma utilidad “Usuarios y equipos de AD” podemos: • Crear usuarios

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Desde la misma utilidad “Usuarios y equipos de AD” podemos: • Eliminar/Deshabilitar cuentas de usuario: cada cuenta de usuario asocia un SID (identificador de seguridad). Si eliminamos la cuenta, y después volvemos a crearla, el identificador SID será diferente. Por ello, no se podrán recuperar los permisos y privilegios de la cuenta eliminada.

• Si creemos que volveremos a necesitar la cuenta, es mejor deshabilitarla. Si no la volveremos a usar, mejor eliminarla. • Se puede visualizar en la propia herramienta, con el símbolo de usuario con una flecha hacia abajo, si está deshabilitado.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Desde la misma utilidad “Usuarios y equipos de AD” podemos: • Configurar la cuenta de usuarios: las propiedades más importantes a tener en cuenta son • General: Se puede modificar el Nombre, Apellido, etc. y además modificar información administrativa como la descripción, oficina, teléfono, email y página web.

• Cuenta: Se puede configurar algunas características de la contraseña de usuario, las horas de inicio de sesión, la caducidad de la cuenta, desbloquear cuenta, etc. • Perfil: En esta ficha se pueden editar aspectos importantes como son la ubicación física del perfil del usuario y el fichero de comandos de inicio de sesión.

• Miembro de: Se muestra el listado de grupos a los que el usuario pertenece.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 5. Crear y configurar grupos por la interfaz gráfica

• Desde la misma utilidad “Usuarios y equipos de AD” podemos: • Grupos en AD. • Los grupos son un tipo de contenedor que permiten definir conjuntos de usuarios y definir permisos basándonos en esa pertenencia al grupo, en lugar de hacerlo de modo individual, usuario por usuario, facilitando la administración.

• Existen dos grandes tipos de grupos en el Directorio Activo de Windows: • Grupos de seguridad: este tipo de grupos permite definir permisos para recursos del dominio. Son los utilizados en las listas de control de accesos (ACLs) . Este tipo de grupos son los que se utilizarán en la administración de la red.

• Grupos de distribución: no poseen características de seguridad, únicamente son un listado de usuarios para mensajería. • Dentro de los grupos de seguridad existen: • Grupo Universal: es un grupo cuyos permisos se extienden a diversos dominios. Además este tipo de grupos puede estar formado por usuarios o grupos de usuarios de diferentes dominios.

• Grupo Global: es muy similar a los grupos universales, es decir pueden permitir el acceso a recursos de cualquiera de los dominios del árbol del Directorio Activo, pero con la salvedad de que todos los miembros del grupo deben pertenecer al mismo dominio. • Grupo Local del Dominio: es un grupo creado en un dominio con miembros que pueden provenir de otros dominios y que únicamente puede tener acceso a recursos dentro de su dominio.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Grupos predefinidos: • Los grupos predefinidos son grupos que ya están generados previamente por el sistema y no por los administradores y disponen de unos permisos acordes a las funciones asignadas.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Crear grupos usando la interfaz gráfica. • Por defecto, globales y de seguridad. • Se pueden añadir usuarios a los grupos, añadiéndoles como miembros del grupo.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 6. Crear y configurar unidades organizativas

• Una unidad organizativa es un contenedor de objetos(usuarios, grupos, equipos, etc) pertenecientes a un mismo dominio. • Son útiles para reproducir la estructura de la empresa donde se halle el dominio. Si por ejemplo, tenemos 3 departamentos en una empresa, es útil, crear una unidad por departamento.

• Se usa para dos aspectos fundamentales: • Para establecer directivas de seguridad. • Dentro de una unidad organizativa, se pueden incluir otras unidades organizativas. Y sin hacer falta crear más dominios o subdominios. • Se crea una unidad organizativa: • Se pueden añadir elementos como usuarios y grupos, simplemente, arrastrando los elementos a la unidad organizativa.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Para eliminar unidades organizativas, habrá que ir a Ver -> características avanzadas. • Y desmarcar la opción “Proteger objecto contra eliminación accidental”

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 7. Búsquedas y consultas de objetos en Windows Server

• Permite buscar todo tipo de objeto: cuentas de usuario, impresoras, equipos, incluso carpetas compartidas.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Búsquedas mediante consultas comunes: • Las opciones avanzadas de las consultas comunes te abren un abanico de posibilidades buscando por usuario, grupo o contacto.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Uso de consultas guardadas: • Usuarios y equipos de Active Directory cuenta con una carpeta Consultas guardadas en la que puede crear, editar, guardar y organizar consultas guardadas.

• Las consultas guardadas utilizan cadenas LDAP predefinidas para buscar sólo en las particiones de dominio especificadas

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 8. Permisos en Windows Server

• Los sistemas operativos de la familia Windows poseen dos niveles de permisos para los recursos compartidos. • Permisos para carpetas compartidas: se aplican cada vez que un usuario quiere acceder a un archivo o carpeta de la red. • Permisos para archivos y carpetas (NTFS): se aplican sobre dispositivos con formato NTFS parar definir en mayor detalle las acciones permitidas.

• De este modo, cuando accedemos en modo local a los archivos o carpetas sólo intervienen los permisos asociados al sistema de ficheros, en este caso NTFS. • Si se accede a través de la red se aplican los dos niveles de permiso. • En caso de conflicto o que hayan inconsistencias entre los permisos de cada tipo, se aplicarán los más restrictivos.

• ¿Qué pasaría si el volumen estuviera formateado en FAT? Solo se aplican los permisos definidos para las carpetas compartidas en caso de que fuera compartido en red. Si hubiese que acceder en local, no habría ninguna restric- ción. Es decir, no se podría permitir o denegar el acceso.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 9. Permisos de recursos compartidos

• En Windows server 2019, disponemos de la consola de administración del servidor, donde podemos encontrar el acceso a los recursos compartidos. • Para visualizar los permisos de cada recurso compartido, se debe hacer clic con el botón secundario del ratón y seleccionando propiedades.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Si pulsamos sobre “Personalizar permisos” accedemos permisos tanto NTFS (locales) como permisos de compartir.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • En la segunda pestaña se encuentran los permisos de “Recursos compartidos” y los asignados. • Si pulsamos sobre el botón “Editar” veremos que pueden “Permitir” o “Denegar” con el siguiente detalle: Control Total(cambiar, leer, modificar permisos sobre el recurso compartido), cambiar(crear carpetas y archivos además de modificar y borrar los archivos y directorios existentes), leer (lectura de archivos y la ejecución de archivos ejecutables que se hallen dentro del recurso compartido).

• Los permisos de recursos compartidos solamente se pueden aplicar sobre carpetas, no sobre ficheros.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 10. Permisos NTFS

• Los permisos NTFS complementan y amplían los permisos de recursos compartidos, siendo efectivo el más restrictivo. • Todos los archivos y carpetas de un volumen NTFS tienen asociada una ACL o lista de control de acceso que fija el nivel de acceso de un usuario o grupo que pretenda acceder al recurso.

• Los permisos NTFS pueden ser aplicados a nivel de archivo, a diferencia de los permisos de recursos compartidos, los cuales únicamente pueden aplicarse a nivel de carpeta. • Al aplicar los permisos NTFS aparece un concepto: la herencia, la cual determina los permisos que se reciben sobre un determinado recurso provenientes de un nivel superior.

• Se gestionan seleccionando el archivo o carpeta, y botón derecho, Propiedades, y seleccionando la pestaña “Seguridad”. • Los permisos que se pueden aplicar son: • Control total. • Cambiar. • Leer y ejecutar. • Mostrar el contenido de la carpeta. • Leer. • Escribir. • Lo que significa cada permiso queda más detallado en la siguiente imagen.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Los permisos específicos que aparecen en la primera columna, pueden editarse/consultarse individualmente. • Es importante entender que los permisos predeterminados, en realidad corresponden a unas combinaciones de permisos específicos, siendo estos últimos con lo que se trabaja, cuando se gestionan listas de control de acceso por línea de comandos.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Asignación de permisos NTFS • Al definir un permiso este puede ser permitido o denegado. • ¿Qué significa que los permisos son ACUMULATIVOS? Se evalúan los permisos otorgados al usuario y los otorgados a los grupos a los que pertenece el usuario. Si hay alguna incompatibilidad, prevalecerá la opción más restrictiva: Denegar (si está definido expli- citamente).

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Después tenemos que darle a la opción “Editar” y pestaña “Seguridad” del recurso compartido.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Permisos explícitos e implícitos ¿Qué es un permiso explícito? En la imagen siguiente, el grupo Ventas no tiene definidos permisos de escritura. A eso se denomina que el permiso de escritura está denegado implícitamente.

El error que aparecería si un usuario del grupo Ventas quisiera crear un archivo en la carpeta

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Sin embargo, si añadimos un un usuario en la ficha permisos y le otorgamos el permiso explícito de escritura veremos que efectivamente puede escribir en el recurso , ya que la definición explícita del permiso para escribir prevalece sobre la denegación implícita del permiso escribir.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Si explicitamos la denegación del permiso de escritura para el usuario, podremos comprobar que efectivamente no puede escribir en la carpeta. • Se recomienda evitar el uso explícito de la denegación de permisos salvo que se considere que no existe otro modo para obtener un nivel específico de permiso para un determinado grupo.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 11. Herencia

• Al crear un archivo o carpeta en un volumen NTFS ese objeto hereda automáticamente los permisos de su carpeta contenedora, y a la inversa: cuando asignamos permisos a una carpeta contenedora, los permisos se propagan automáticamente hacia los archivos y subcarpetas contenidas en el recurso.

• La utilidad de la herencia de permisos radica en: • el administrador no tiene que asignar manualmente los permisos a los archivos y subcarpetas que haya contenidas dentro del recurso principal, y que fácilmente pueden ser miles. • el aumento de la seguridad al descartar posibles errores de asignación de permisos realizados manualmente.

• Ejemplo de cambio de permisos de un objeto hijo: • En primer lugar vamos a modificar los permisos de seguridad de la carpeta “compartir” asignándole al grupo alumnos específicamente el permiso de modificar.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • A continuación, creamos una subcarpeta en “Compartir” • Si observamos los permisos de un objeto que está heredando permisos, veremos que las casillas de verificación están (completa o parcialmente) inaccesibles. En este caso la subcarpeta que hereda los permisos, hereda también los permisos del grupo alumnos

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Como primer método para deshabilitar la herencia, se puede denegar explícitamente los permisos. Si el permiso heredado es de concesión, la denegación está habilitada. Para este caso, podemos denegar el permiso heredado de escritura.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW • Como segundo método, se puede eliminar la herencia del recurso del nivel superior. • En este caso, vemos que la carpeta C:\compartir hereda los permiso de C:\. • Para eliminar la herencia, debemos hacer clic en “Deshabilitar herencia” y nos aparecerá un diálogo para dejar los permisos explícitos o bien para eliminar todos los permisos.

• Como norma general, elegiremos la primera opción: convertirlos en permisos explícitos.

---

# 6.2 TEORIA UNITAT 6 PART 2

Unidad 6: Administración del acceso al dominio

Índice de la unidad 1ª Parte 1. Términos de AD que se deben entender para una buena administración. 2. Añadir máquinas cliente al dominio. 3. Eliminar clientes de un dominio. 4. Crear y configurara usuarios por la interfaz gráfica. 5. Crear y configurar grupos por la interfaz gráfica.

6. Crear y configurar unidades organizativas. 7. Búsquedas y consultas de objetos en Active Directory. 8. Permisos en Windows Server. 9. Permisos de recursos compartidos.

- Permisos NTFS.
- Herencia.

2ª Parte

- Directivas de grupo.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

### 11. Directivas de grupo

• Las directivas de grupo (Group Policy Object) son una serie de configuraciones creadas por el administrador que se aplican a objetos del dominio. • El administrador controla los entornos de trabajo de los usuarios del dominio, los equipos y el comportamiento de distintos objetos.

• Son un conjunto de reglas que facilitan las labores de administración de los usuarios y equipos. • Algunos de los aspectos más útiles que se pueden definir por parte del administrador mediante las directivas son: • Los comandos de inicio de sesión. • Características de las directivas de seguridad de las cuentas de usuario.

• Configuración de la apariencia de la sesión de usuario. • Redirección del acceso a ciertas carpetas o archivos centralizados • Distribución de software a los equipos clientes. • Permisos otorgados a las cuentas de usuarios y grupos, etc. • Cuando se pone en marcha un dominio, se crean dos directivas de grupo llamadas

• Default Domain Controllers: referenciada a la unidad organizativa Domain Controllers. • Default Domain Policy:referenciada al dominio. Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

• Si elegimos la Directiva “Default Domain Policy” y damos al botón derecho “Editar”, nos saldrá una serie de opciones pudiendo llegar hasta: Configuracion de Equipo – Configuración de Windows – Configuración de Seguridad – Directivas Locales – Asignación de derechos de usuario.

• Aquí se nos presentan muchas opciones. Supongamos, que queramos cambiar la directiva para apagar el equipo. • Cuando la seleccionamos, no está habilitada. Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

• Si por ejemplo, asignamos solamente permisos a los administradores del dominio, comprobaremos que solamente la pueden apagar los administradores. • Escribiendo en la consola CMD: gpupdate /force se aplican las directivas. • Hay infinidad de configuraciones diferentes a implementar.

• También se pueden implementar directivas de grupo directamente sobre unidades organizativas. Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

---

# 6.3 TEORIA UNITAT 6 PART 3

Unidad 6: Administración del acceso al dominio

Índice de la unidad 1ª Parte 1. Términos de AD que se deben entender para una buena administración. 2. Añadir máquinas cliente al dominio. 3. Eliminar clientes de un dominio. 4. Crear y configurara usuarios por la interfaz gráfica. 5. Crear y configurar grupos por la interfaz gráfica.

6. Crear y configurar unidades organizativas. 7. Búsquedas y consultas de objetos en Active Directory. 8. Permisos en Windows Server. 9. Permisos de recursos compartidos.

- Permisos NTFS.
- Herencia.

2ª Parte

- Directivas de grupo.

3ª Parte

### 13. Perfiles de usuario

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

• Podemos definir un perfil como aquellos aspectos de configuración del equipo y del entorno de trabajo propios del usuario y que además, son exportables a otras máquinas de manera transparente al mismo. • Conseguimos que el usuario, independientemente del equipo en el que se inicie la sesión, disponga de un entorno de trabajo similar.

• Existen 3 tipos de perfiles: • Perfiles locales: se almacenan en el equipo y configura el entorno de trabajo de cada usuario. No se tratan en esta unidad ya que no se tratan a nivel de dominio. • Perfil móvil: el usuario configura el entorno de trabajo a su gusto en un equipo y al iniciar sesión en cualquier otra estación de trabajo, la configuración se importa y aplica en ese nuevo equipo.

• Perfil obligatorio: un usuario con permisos de administración define la configuración del entorno de trabajo, y se aplica a los usuarios del dominio. Los usuarios pueden modificarla durante la sesión, pero al iniciar otra sesión, se vuelve a cargar la configuración del perfil obligatorio.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

Perfiles móviles • Consiste en una serie de ficheros de configuración del entorno de trabajo, que se aplican a todos los equipos de la red desde donde pueda comenzar sesión el usuario. • Estos ficheros de configuración, deben almacenarse en una ubicación accesible por los equipos clientes, como por ejemplo, en el controlador de dominio.

• Vamos a ver un ejemplo sobre como configurarlo. • Crearemos una carpeta, por ejemplo, en C:\ , donde se almacenen los perfiles. La carpeta se llama “perfiles”. • Le asignaremos permisos para compartir con control total a Todos o permisos para Cambiar y Leer. • También asignaremos al grupo Usuarios del dominio permisos NTFS para permitir el Control Total.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

Perfiles móviles • Una vez creada la carpeta donde se almacenan los perfiles, en los usuarios que queramos crear perfiles: • Hay que crear en la pestaña Perfiles, la ruta de acceso al perfil. Se debe especificar la ruta añadiendo la variable %username% que permitirá configurar un perfil para cada usuario creado.

• Al configurar el anterior paso, creará una carpeta llamada “nombre del usuario.V6”, con todo el perfil configurado. Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

Perfiles móviles • Para comprobar que efectivamente, funciona, puedes entrar en un equipo del dominio y configurar un acceso directo en el escritorio, y después, cerrar la sesión. • Si posteriormente al paso anterior, inicias sesión en otro equipo del dominio, te debería aparecer el acceso directo configurado en el escritorio.

Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

Perfiles obligatorios • Un perfil obligatorio se configura del mismo modo que un Perfil Movil. • Una vez configurado el perfil obligatorio, debemos acceder a él, y modificar el archivo NTUSER.DAT a NTUSER.MAN. • Si no te da permisos para modificar el nombre del fichero en el paso anterior, asigna permisos NTFS al fichero para el grupo Administradores y ya podrás modificar la extensión del archivo.

• Una vez cambiado el nombre, ya sabe el sistema, que no debe almacenar los cambios realizados en el perfil. Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

Carpetas personales • Tanto en los perfiles móviles como en los obligatorios, es muy usual configurar carpetas personales a las que únicamente tiene el usuario acceso. • Para configurarlo, basta crear una carpeta a la que se tenga acceso desde la red. Un sitio interesante para configurarlo en una empresa, sería configurándola en un NAS, un dispositivo de almacenamiento que se puede acceder desde cualquier equipo conectado a la red.

• Para no tener que añadir manualmente la carpeta personal usuario por usuario, se puede usar la variable %username%, como ya hemos visto anteriormente. Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

• Se configuraría con la ruta generada en la pestaña “Compartir” y se añadiría %username%. ejemplo: \\DC01\carpetapersonal\%username% Unidad 6: Administración del acceso al dominio Sistemes Informàtics: 1er DAW

---
