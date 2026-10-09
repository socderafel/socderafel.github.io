---
layout: default
title: "UT2 — ADMINISTRACIÓ DE PROGRAMARI DE BASE LLIURE — Sistemes Informàtics | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut01actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT1"
next_url: "../ut02/ut0201.html"
next_label: "2.1 LA SHELL DE LINUX ➡️"
---

# 📘 UT2 — ADMINISTRACIÓ DE PROGRAMARI DE BASE LLIURE (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**2.1 LA SHELL DE LINUX**](#ut0201) (o [obrir en pàgina individual ➡️](./ut0201.md) )
> - [**2.2 CONFIGURANT LA XARXA AMB NETPLAN. INSTRUCCIONS D**](#ut0202) (o [obrir en pàgina individual ➡️](./ut0202.md) )
> - [**2.3 ENLLAÇOS DURS I SIMBÓLICS**](#ut0203) (o [obrir en pàgina individual ➡️](./ut0203.md) )
> - [**✍️ Activitats pràctiques UT2**](#ut02actividades) (o [obrir en pàgina individual ➡️](./ut02actividades.md) )

---

## 2.1 LA SHELL DE LINUX

La Shell de Unix y de Linux La shell de Unix es el término usado en informática para referirse al intérprete de comandos de los sistemas operativos basados en Unix y similares, como GNU/Linux, y que es su interfaz de usuario tradicional. Mediante las instrucciones que aporta el intérprete, el usuario puede comunicarse con el núcleo y por extensión, ejecutar dichas órdenes, así como herramientas que le permiten controlar el funcionamiento de la computadora. Por ello, en inglés se le denominó así, shell, que puede ser traducido como «cáscara», porque es la envoltura visible del sistema informático.

Los comandos que aportan los intérpretes, pueden usarse a modo de guion si se escriben en ficheros ejecutables denominados shell-scripts, de este modo, cuando el usuario necesita hacer uso de varios comandos o combinados de comandos con herramientas, escribe en un fichero de texto, marcado como ejecutable, las operaciones que posteriormente, línea por línea, el intérprete traducirá al núcleo para que las realice. Sin ser un shell estrictamente un lenguaje de programación, al proceso de crear scripts de shell se le denomina programación shell o en inglés, shell programming o shell scripting.

Los usuarios de Unix y similares, pueden elegir entre distintos shells (programa que se debería ejecutar cuando inician la sesión, véase bash, ash, csh, Zsh, ksh, tcsh). Las interfaces de usuario gráficas para Unix, como son GNOME, KDE y Xfce pueden ser llamadas shells visuales o shells gráficas. Por sí mismo, el término shell es asociado usualmente con la línea de comandos. En Unix, cualquier programa puede ser un shell de usuario. Los usuarios que desean utilizar una sintaxis diferente para redactar comandos, pueden especificar un intérprete diferente como su shell de usuario.

El sistema de ficheros ext4 es la última versión de la familia de sistemas de ficheros ext y son los más utilizados por las distribuciones Linux. Sus principales ventajas radican en su eficiencia (menor uso de CPU, mejoras en la velocidad de lectura y escritura) y en la ampliación de los límites de tamaño de los ficheros, ahora de hasta 16TB.

Cuando instalamos un sistema operativo Linux, se establecen los siguientes directorios

Vamos a ver ahora como nos podemos mover por la Shell de Linux usando diferentes comandos: Cuando arrancas la consola en tu ordenador con tu distribución de Linux, siempre aparece del siguiente modo

[usuario@linuxbox ~ ]$

- usuario: hace mención al usuario logado y linuxbox especifica el nombre de la máquina.
- Cuando indica (~) quiere decir que el usuario ahora mismo se encuentra en su directorio

/home/usuario.

- Cabe tener en cuenta que el signo dólar ($) cambia a # cuando nos logamos con permisos de

administrador. Para ello, se puede usar su -, o sudo -s o sudo su –.

### 1. Listar, visualizar y desplazarte por las diferentes carpetas o directorios

Para obtener un listado completo de los directorios que cuelgan de raíz puedes usar el comando cd para situarte en el directorio raíz y con ls podrás visualizar todos los archivos y carpetas contenidos en él.

```bash
$ cd /
$ ls
```

También puedes jugar un poco con el comando ls, añadiendo ciertos parámetros para obtener listados más detallados. Una opción muy útil, por ejemplo, es ls -l, con la que obtendrás los diferentes directorios en forma de lista, junto con los permisos de lectura, escritura y ejecución asociados a cada una de ellos.

El comando pwd te indica la ruta completa del directorio de trabajo en el que se encuentra tu usuario. Su función es meramente informativa, peor muy útil en ciertas ocasiones, como, por ejemplo, conocer el nombre del directorio de trabajo actual.

```bash
$ pwd
```

El comando cd te permite cambiar de directorio de trabajo. Sería el equivalente a ingresar o entrar en la carpeta, pero desde la consola. Básicamente requiere indicar el nombre del directorio en el que deseas moverte. Acepta rutas absolutas y relativas.

```bash
$ cd /home/usuario/Documentos
```

El comando de arriba te llevará al directorio Documentos dentro de la carpeta personal del usuario llamado usuario. En este caso he utilizado una ruta absoluta, empezando por el directorio raíz /, e indicando el camino completo hasta situarme a Documentos. La instrucción cd la puedes utilizar siempre que quieras volver a situarte al directorio principal de usuario, que en este caso sería en /home/usuario. Muy interesante siempre que queramos volver al punto de partida (ojo, no confundir eso con ir al directorio raíz, que sería el directorio /)

```bash
$ cd
```

Situados ahora en /home/usuario, si queremos ir al directorio Documentos, usando la ruta relativa sería

```bash
$ cd Documentos
```

Cuando se dice relativa significa que se indica la ruta relativa a la posición en la que me encuentro en ese momento. (/home/usuario) Siguiendo con esta nueva instrucción

```bash
$ cd ..
```

Con esta instrucción subes un directorio. Si te encontrabas en /home/usuario/Documentos, ahora te encuentras en /home/usuario. Y con esta instrucción

```bash
$ cd ../..
```

Saltas dos directorios hacia arriba, situándote en el directorio raíz. Hasta aquí, tienes algunos usos simples para moverte a través de las diferentes carpetas. A continuación, y teniendo claro lo anterior, podemos pasar a aprender a listar archivos y directorios.

podrás listar los diferentes archivos y directorios de la carpeta de trabajo en la que te encuentres. El comando acepta multitud de opciones, algunas de las cuales te mostraré a continuación.

### 2. Listar directorios

El comando ls es el uso más simple del comando ls. Si no le indicas ninguna opción, te enumerará todos los archivos y directorios que se encuentran en la carpeta de trabajo actual, sin tener en cuenta archivos ocultos.

```bash
$ ls -a
```

Con esta opción, el comando te mostrará, en forma de lista, todo el contenido que se encuentre dentro del directorio de trabajo, incluyendo, además, archivos y carpetas ocultos.

```bash
$ ls -l
```

Esta opción es similar al primer caso, pero muestra el contenido en forma de lista e incluye información referente a cada elemento. Se usa muchísimo y es especialmente útil a la hora de conocer el propietario y los permisos de cada fichero. Estas son sólo algunas de las muchísimas posibilidades de las que disponemos para nombrar o listar el contenido de un directorio, desde la terminal de Linux. Existen muchas opciones más, las cuales puedes explorar en todo momento haciendo uso del comando man ls.

El comando find es muy similar en su función básica a ls, ya que de entrada sirve para listar todo el contenido de un directorio. La diferencia es que, aplicando filtros, te puede servir para buscar archivos de forma más precisa.

```bash
$ find
```

La sentencia más básica te listará todo el contenido del directorio de trabajo actual de forma recursiva. La diferencia respecto a ls es justamente que find no se limita a mostrar los archivos y directorios de primer nivel, sino que también te mostrará el contenido de estos, y así recursivamente hasta recorrer todos los niveles hacía abajo.

```bash
$ find ./Documentos
```

Con esta opción, find te listará todo el contenido del directorio Documentos (dentro del directorio de trabajo actual) también de forma recursiva, recorriendo todos los niveles hacía abajo.

```bash
$ find ./Documentos -name archivo.txt
```

Si quieres empezar a establecer filtros por nombre, puedes añadir el parámetro -name. En este ejemplo, estamos intentando localizar un archivo concreto dentro de Documentos que su nombre corresponda a archivo.txt.

```bash
$ find ./Documentos -name *.pdf
```

Incluso puedes hacer filtros más concretos gracias al uso de comodines. En el caso de arriba, por ejemplo, estamos buscando en la carpeta Documentos todos los archivos que con la extensión .pdf, al igual que puedes hacerlo con cualquier otro tipo de extensión. El comando locate es una alternativa útil a find la hora de localizar archivos o directorios que no recuerdas donde tienes. Aquí tiene algunos ejemplos que te pueden ser de gran utilidad

```bash
$ locate archivo1.txt
```

En este caso tienes un claro ejemplo de cómo realizar una búsqueda simple del archivo archivo1.txt directamente por su nombre. Es útil solo si sabes el nombre exacto del elemento que estás buscando.

### 3. Crear, borrar, copiar y mover archivos y directorios

En esta parte conocerás algunos comandos necesarios a la hora de realizar acciones tales como: crear un nuevo directorio, copiar un archivo y pegarlo en otra ubicación, mover ficheros de una ubicación en otra, etc. El comando mkdir te permitirá crear un directorio con el nombre y la ruta que especifiques. Si no le indicas ninguna ruta, por defecto, te creará la carpeta dentro del directorio de trabajo en el que te encuentres. A continuación, tienes algunos ejemplos sencillos.

```bash
$ mkdir /home/usuario1/directorio1
```

En el caso de arria, mkdir te creará el directorio de nombre directorio1, en la ruta que le hayas especificado, en este caso dentro de la carpeta principal de usuario.

```bash
$ mkdir directorio2
```

Con esta sintaxis, el comando te creará una carpeta de nombre directorio2 dentro del directorio de trabajo en la que te encuentres (recuerda utilizar pwd para saber dónde estás).

Estos son las dos principales maneras de crear carpetas en Linux desde la consola. Asimismo, si quieres profundizar más en el uso de este comando, puedas explorar otras muchas opciones a través del comando man mkdir. El comando rmdir te permite eliminar el directorio que le especifiques. Para poder utilizar este comando, el directorio a borrar debe estar vacío. A continuación, tienes un par de ejemplos.

```bash
$ rmdir /home/usuario1/directorio1
```

En este caso, rmdir borrará el directorio de nombre directorio1, que se encuentra en la ruta especificada, en este caso dentro de la carpeta de usuario.

```bash
$ rmdir directorio2
```

En este otro ejemplo, el rmdir eliminará el directorio de nombre directorio2, el cual debe encontrarse dentro de la carpeta en el que te encuentres. De lo contrario, indicará que el directorio no existe. Se está utilizando una ruta relativa. El comando rm te permite eliminar archivos sueltos y directorios que no se encuentren vacíos.

A continuación, tienes algunos de los usos principales del comando.

```bash
$ rm /home/usuario1/archivo1.txt
```

En este caso, rm te borrará el archivo de texto archivo1.txt, que se encuentra en la ruta especificada, para este caso dentro de la carpeta de usuario. Aquí se está utilizando una ruta absoluta.

```bash
$ rm -r /home/usuario1/directorio1
```

Con esta opción, rm borrará el directorio directorio1 de forma recursiva. Esto significa, incluyendo todos los archivos y subdirectorios que se encuentren dentro de él (pidiéndote, eso si, confirmación para cada archivo). rm -rf /home/usuario1/directorio1 Si te quieres saltar el paso de tener que confirmar archivo por archivo que realmente deseas borrarlo, con este comando borrarás todo el contenido del directorio sin advertencias.

Eso si, hay que tener cuidado con rm, puesto que dependiendo de cómo lo uses, puede dar cabida a situaciones como esta. Se trata de ser consciente de cómo funciona y de los parámetros que estas introduciendo en cada momento. Usando el comando cp, serás capaz de copiar archivos y directorios, así como ubicarlos en otras rutas. A continuación, tienes un par de ejemplos de cómo se puede utilizar.

```bash
$ cp archivo1.txt archivo2.txt
```

Este es posiblemente el uso más simple de cp. Con esta forma, crearás una copia del archivo archivo1.txt la cual se guardará con el nombre archivo2.txt. En este caso, el archivo de partida debe encontrarse dentro del directorio de trabajo en el que estés.

```bash
$ cp /home/usuario1/archivo1.txt /tmp/archivo2.txt
```

Como en todos los casos, puedes explorar muchas más opciones tecleando man cp en la consola. El comando mv te servirá para mover archivos desde la consola. Sería lo equivalente a arrastrar un archivo desde una ubicación a otra. La sintaxis es muy sencilla, solamente debes especificar la ubicación de inicio, incluyendo el nombre del archivo, y la ubicación de destino. También puedes modificar el nombre del archivo en su ubicación de destino.

mv /home/usuario1/Descargas/archivo1.txt /home/usuario1/Documentos/archivo1.txt En este ejemplo de arriba estamos moviendo el archivo de nombre archivo1.txt desde la carpeta Descargas hacía la carpeta Documentos. Para ello hemos utilizado rutas absolutas. mv Descargas/archivo1.txt Documentos/archivo1.txt En este otro ejemplo he hecho exactamente lo mismo, pero utilizando una ruta relativa, suponiendo que nos encontramos en la carpeta de usuario dentro de la Home.

---

## 2.2 CONFIGURANT LA XARXA AMB NETPLAN. INSTRUCCIONS D

UD3: ADMINISTRACIÓ DE PROGRAMARI LLIURE Netplan: Configurar la red en Ubuntu 20.04

### 1. Introducción

En las últimas versiones de Ubuntu, a partir de Ubuntu17, la configuración de red se trabaja con la herramienta Netplan. Netplan es una nueva utilidad de configuración de red, de línea de comandos, que se introdujo por primera vez en Ubuntu 17.10, para administrar y configurar los ajustes de red, de forma fácil. Permite configurar al usuario una interfaz de red utilizando el formato YAML. Funciona junto a los daemon de red como NetworkManager y systemd-networkd, como interfaces para el kernel.

Netplan se encarga de leer la configuración indicada en los ficheros de la carpeta /etc/netplan/*.yaml y puede almacenar las configuraciones para todas las interfaces de red en estos archivos.

### 2. Conocer la ip actual en Ubuntu 20.04, desactivar interfaces

Se puede visualizar la ip mediante el comando

```bash
$ ip addr
$ ip address show
$ ip address list
```

El comando ifconfig ya se ha quedado obsoleto, aunque todavía se puede utilizar, pero el comando ip, que pertenece a la iproute2 suit, parece ser el sustituto de ifconfig. Si queremos visualizar información de red, pero de capa 2

```bash
$ ip link show
```

Para desactivar interfaces o activarlos, se puede usar

```bash
$ ip link set nombre_interfaz down
$ ip link set nombre_interfaz up
```

Para configurar una ip para una interfaz

```bash
$ ip addr add ip/mascara broadcast ip_broadcast dev interfaz
```

Y para eliminarla

```bash
$ ip addr del ip/mascara broadcast ip_broadcast dev interfaz
```

### 3. Configurar una ip estática

A partir de esta versión se utiliza la herramienta de administración de red llamada Netplan y es muy útil en casos donde no queremos dejar configurada una ip dinámica y vemos necesaria ajutstar una ip estática a la máquina. Su archivo de configuración se encuentra en el

directocio /etc/netplan. Si queremos saber cómo se llama el fichero de configuración de nuestro equipo para empezar a trabajar, solo hemos de lanzar un ls al directorio /etc/netplan.

```bash
$ ls /etc/netplan
```

01-network-manager-all.yaml Primero, antes de modificar nada y como medida de seguriada, habrá que guardar este fichero haciendo un backup por si al realizar cualquier modificación, necesitamos hacer una marcha atrás y poder restituir el fichero como estaba. $sudo cp /etc/netplan/01-network-manager-all.yaml /etc/netplan/01-network-manager- all.yaml.original Una vez ya tenemos el backup del fichero, procedemos a modificarlo. Aquí os muestro una configuración estándar y debemos de ser conscientes de que debemos de tener una ip estática, conocer la ip del Gateway o pasarela y conocer algún servidor dns si necesitamos cambiarlo.

Guardamos el fichero y después ejecutamos el fichero con los siguientes comandos para comprobar que está bien editado (try) y que se puede aplicar: $sudo netplan try $sudo netplan apply (HAY QUE TENER CUIDADO A LA HORA DE EDITAR EL FICHERO. NO TECLEAR LA TECLA PARA TABULAR PORQUE APARECERÁN ERRORES PARA PODERLO APLICAR)

### 4. Comprobar cómo funciona el servicio DNS

El servicio DNS nos permite por ejemplo, navegar por Internet, ya que resuelve los nombres a direcciones ip. Esta resolución de nombres la hace mediante el fichero /etc/resolv.conf podemos ver de qué modo resuelve las direcciones tu pc con sistema operativo Linux Ubuntu.

Al ver el fichero /etc/resolv.conf verás la ip 127.0.0.53 que es el DNS local de systemd-resolved que escucha en esta ip. Es decir, cualquier consulta que realiza el ordenador la tramita esta ip y la manda a los dns superiores que tenga configurados. Si ejecutamos la instrucción

$resolvectl status

Podrás ver a que servidor dns lo transmite.

### 5. El fichero hosts

Es el fichero que almacena información sobre ip’s locales de la red. Puedes visualizarlo mediante un: $cat /etc/hosts Y podrás añadir entradas como te interese.

---

## 2.3 ENLLAÇOS DURS I SIMBÓLICS

UD3: ADMINISTRACIÓ DE PROGRAMARI LLIURE Enlaces duros y blandos

Existen dos tipos de enlaces, los enlaces duros y los enlaces simbólicos. En los siguientes apartados explicaremos y veremos en detalle que son y para que podemos usar cada uno de los tipos de enlaces que acabamos de citar.

### 2. Enlaces duros

Para entender lo que es un enlace duro, lo primero que tenemos que saber es que en Linux cada fichero y cada carpeta del sistema operativo tienen asignado un número entero llamado inodo.

Este inodo es único para cada uno de los archivos y cada una de las carpetas. La información que almacena cada uno de los inodos de los distintos archivos y carpetas es la siguiente

Los permisos del archivo o carpeta. El propietario del fichero y carpeta. La posición/ubicación del archivo o de la carpeta dentro de nuestro disco duro. La fecha de creación del archivo o directorio, etc. Una vez comprendido esto, podemos decir que un enlace duro es un archivo que apunta al mismo contenido almacenado en disco que el archivo original.

Por lo tanto, los archivos originales y los enlaces duros dispondrán del mismo inodo y consecuentemente ambos estarán apuntando hacia el mismo contenido almacenado en el disco duro. De este modo, tal y como se puede ver representado en la imagen, un enlace duro no es más que una forma de identificar un contenido almacenado en el disco duro con un nombre distinto al del archivo original.

Se podrá realizar un enlace duro de un archivo siempre y cuando el archivo esté en la misma partición del disco duro que pretendemos crear el enlace. Esto es forzosamente así porque cada partición de nuestro disco duro dispone de su propia tabla de inodos, y se tiene que

evitar la posibilidad de que un mismo número de inodo esté apuntado a dos ubicaciones distintas de nuestro disco duro. ¿Cómo podremos crear un enlace duro? Generando un enlace duro podremos asimilar mucho mejor lo que acabamos de explicar en el apartado anterior. Para comprender bien lo que es un enlace duro crearemos un archivo de texto ejecutando el siguiente comando en la terminal

touch alumno.txt Una vez creado el archivo vamos o consultar su número de inodo ejecutando el siguiente comando en la terminal

```bash
ls -li alumno.txt
```

El resultado obtenido en mi caso es el siguiente: 1341693 -rw-r--r-- 1 user user 0 nov 17 22:50 alumno.txt Por lo tanto, el inodo del archivo que acabamos de crear es el 1341693. También vemos que actualmente solo hay 1 archivo/entrada en el sistema que esté apuntando al mismo inodo.

Una vez creado el archivo crearemos un enlace duro hacia el archivo que acabamos de crear introduciendo el siguiente comando en la terminal: ln alumno.txt enlacealumno.txt Cada una de las partes del comando para crear el enlace duro tienen el siguiente significado

ln: Es el comando encargado de realizar enlaces entre ficheros. alumno.txt: Es la ruta o nombre del archivo original que tenemos en nuestro disco duro. enlacealumno.txt: Corresponde a la ruta o nombre del enlace duro que vamos a crear. Una vez ejecutado el comando se habrá realizado el enlace duro.

Una vez creado el enlace volveremos a comprobar el número de inodo del archivo original ejecutando de nuevo el siguiente comando en la terminal

```bash
ls -li alumno.txt
```

Ahora el resultado obtenido es el siguiente: 1341693 -rw-r--r—2 user user 0 nov 17 22:50 alumno.txt Como se puede ver el número de inodo sigue siendo el mismo que antes, pero ahora hay 2 archivos/entradas apuntando hacia el mismo inodo. Estos 2 archivos/entradas son el archivo original más el enlace duro que acabamos de crear.

Seguidamente comprobaremos el número de inodo del enlace duro que hemos creado ejecutando el siguiente comando en la terminal

```bash
ls -li enlacealumno.txt
```

El resultado obtenido es

1341693 -rw-r--r-- 2 user user 0 nov 17 22:50 enlacealumno.txt Por lo tanto, se puede observar que tanto el enlace duro como el archivo que hemos creado apuntan al mismo inodo, y consecuentemente apuntan hacia la misma información almacenada en nuestro disco duro. Además, tanto el enlace duro como el archivo original disponen de los mismos permisos, del mismo propietario y forman parte del mismo grupo.

Crear enlaces duros recursivos de todo un directorio Acabamos de ver cómo crear un enlace duro de un único archivo. En el caso que queramos crear enlaces duros en masa de la totalidad de contenido almacenado en un directorio también lo podemos realizar muy fácilmente.

Imaginemos que en la ubicación /home/user/vacances dispongo de una serie de fotos y quiero crear un enlace duro de la totalidad de fotos de esta carpeta en mi escritorio. Para conseguir mi objetivo tan solo hay que ejecutar el siguiente comando en la terminal

cp -rl /home/user/vacaciones /home/user/Escritorio/vacaciones/ Cada una de las partes del comando usado para crear los enlaces duros recursivos tienen el siguiente significado: cp: Se refiere al comando copy que es el que usamos para crear los enlaces duros de forma masiva.

rl: La letra r hace referencia a recursivo y la letra l hace referencia a enlace duro. Por lo tanto añadiendo estas 2 opciones hacemos que se copien la totalidad de archivos de una carpeta a otra mediante la creación de enlaces duros. /home/user/vacaciones: Es la ruta de la carpeta que contiene las fotos originales.

/home/user/Escritorio/vacaciones: Es la ruta de la carpeta en la que queremos crear los enlaces duros. Una vez ejecutado este comando, habremos creado multitud de enlaces duros sin ningún tipo de esfuerzo. Propiedades y particularidades de los enlaces duros 1- Cualquier cambio que se introduzca en el archivo original o en el enlace duro, afecta a los dos por igual.

2- En el caso de borrar el archivo original alumno.txt aún podemos tener acceso al contenido a través de su enlace duro enlacealumno.txt. 3- No se pueden crear enlaces duros de carpetas.

#### 4- El acceso al contenido a través de un enlace duro es más rápido que en los enlaces

simbólico. Esto es así porque mientras el enlace duro apunta directamente a un contenido almacenado en nuestro disco duro, el enlace simbólico apunta al nombre de un archivo y posteriormente el archivo apunta a un contenido almacenado en nuestro disco duro.

5- Los enlaces duros únicamente se pueden usar en la partición en la que los hemos creado. Por lo tanto si creamos un enlace duro en la partición /home, no lo podremos usar en la partición /root. 6- Si cambiamos de ubicación el archivo original el enlace duro no se rompe y lo podemos usar sin ningún tipo de problema.

7- Los permisos, el propietario y el grupo del enlace duro serán los mismos que el del archivo original. Esto es así porque, como hemos visto anteriormente, el enlace duro y el archivo original tienen el mismo inodo, y por lo tanto forzosamente siempre tendrán las mismas propiedades. Un enlace duro no es más que una copia del archivo original.

Utilidades y ventajas de los enlaces duros

### 1. Realizar copias de seguridad incrementales ahorrando espacio en disco duro y un

tiempo considerable ya que los enlaces duros permiten realizar una copia de seguridad de un archivo sin realmente realizar la copia.

### 2. Cuando copiamos un archivo de gran tamaño de un sitio a otro tardamos una cantidad

importante de tiempo. Usando un enlace duro podemos evitar esta espera y de paso ahorraremos espacio en nuestro disco duro.

- El enlace duro es una muy buena opción para tener un archivo en varias ubicaciones.

Usando enlaces duros para este fin evita que se generen enlaces simbólicos rotos. Si usamos enlaces simbólicos para disponer de un archivo en varias ubicaciones, es posible que cuando se elimine el archivo original nos olvidemos que en el pasado generamos enlaces simbólicos hacia este archivo generándose enlaces rotos.

### 3. Enlaces simbólicos o blandos

Los enlaces simbólicos son parecidos a los accesos directos en Windows y son los enlaces que todos los usuarios comunes acostumbran a usar de forma habitual. Acabamos de ver que los enlaces duros apuntan a un archivo almacenado en nuestro disco duro. En contraposición, tal y como se puede ver representado en la imagen, los enlaces simbólicos apuntan al nombre de un archivo y posteriormente el archivo apunta a un contenido almacenado en nuestro disco duro.

A diferencia del caso anterior, cada enlace simbólico dispone de su propio número de inodo y es diferente al del archivo original. Por lo tanto, podremos crear enlaces simbólicos de archivos y de carpetas, aunque estén en discos duros diferentes o en particiones diferentes.

¿Cómo podemos crear un enlace simbólico o soft link? Creando un enlace simbólico podremos ver y entender más fácilmente lo que acabamos de explicar en el apartado anterior.

Para comprender bien lo que es un enlace simbólico crearemos un archivo de texto ejecutando el siguiente comando en la terminal

touch nombre.txt Una vez creado el archivo vamos o consultar su número de inodo ejecutando el siguiente comando en la terminal

```bash
ls -li nombre.txt
```

El resultado obtenido es

1334792 -rw-r--r-- 1 user user 0 nov 29 10:03 nombre.txt Por lo tanto, el inodo del archivo que acabamos de crear es el 1334792. También vemos que actualmente solo hay 1 archivo/entrada en el sistema que esté apuntando al mismo inodo.

Una vez creado el archivo crearemos un enlace simbólico hacia el archivo que acabamos de crear ejecutando el siguiente comando en la terminal

ln -s /home/user/nombre.txt /home/user/Escritorio/enlacenombre.txt Cada una de las partes del comando usado para crear el enlace simbólico tienen el siguiente significado

ln: Es el comando encargado de realizar enlaces entre ficheros o carpetas.

s: Es la parte del comando que indica que el tipo de enlace que queremos crear es un enlace simbólico.

/home/user/nombre.txt: Es la ruta y nombre del archivo original que tenemos en nuestro disco duro.

/home/user/Escritorio/enlacenombre.txt: Corresponde a la ruta y el nombre del enlace simbólico que vamos a crear. Una vez creado el enlace simbólico volveremos a comprobar el número de inodo del archivo original ejecutando de nuevo el siguiente comando en la terminal

```bash
ls -li nombre.txt
```

Ahora el resultado obtenido es el siguiente

1334792 -rw-r--r-- 1 user user 0 nov 29 10:03 user.txt Como se puede ver, el número de inodo sigue siendo el mismo que antes pero, a diferencia del caso anterior, a pesar de crear el enlace simbólico sigue habiendo únicamente 1 archivo/entrada apuntando hacia el mismo inodo.

Seguidamente comprobaremos el número de inodo del enlace duro que hemos creado ejecutando el siguiente comando en la terminal

```bash
ls -li /home/user/Escritorio/enlacenombre.txt
```

El resultado obtenido es el siguiente

1339963 lrwxrwxrwx 1 user user 23 nov 29 10:03 /home/user/Escritorio/enlacenombre.txt-> /home/user/nombre.txt Después de estudiar los resultados vemos que el archivo original y el enlace que hemos creado tienen un inodo diferente. Por lo tanto no están apuntando hacia el mismo contenido ya que el archivo original nombre.txt está apuntando hacia un contenido almacenado en nuestro disco duro, y el enlace simbólico está apuntado hacia el nombre del archivo original.

Crear enlaces simbólicos recursivos de todo un directorio

Acabamos de ver cómo crear un enlace simbólico de un único archivo. En el caso que queramos crear enlaces simbólicos en masa de la totalidad de contenido almacenado en un directorio también lo podemos realizar muy fácilmente.

Imaginemos que en la ubicación /home/user/vacaciones dispongo de una serie de fotos y quiero crear un enlace simbólico de la totalidad de fotos de esta carpeta en mi escritorio. Para conseguir mi objetivo tan solo hay que ejecutar el siguiente comando en la terminal

cp -rs /home/user/vacaciones /home/user/Escritorio/vacaciones/ Cada una de las partes del comando usado para crear los enlaces simbólicos recursivos tienen el siguiente significado

cp: Se refiere al comando copy que es el que usaremos para crear los enlaces simbólicos de forma masiva.

rs: La letra r hace referencia a recursivo y la letra s hace referencia a enlace simbólico. Por lo tanto añadiendo estas 2 opciones hacemos que se copien la totalidad de archivos de una carpeta a otra mediante la creación de varios enlaces simbólicos.

/home/user/vacaciones: Es la ruta de la carpeta que contiene las fotos originales.

/home/user/Escritorio/vacaciones: Es la ruta de la carpeta en la que queremos crear los enlaces simbólicos.

Una vez ejecutado este comando habremos creado multitud de enlaces simbólicos sin ningún tipo de esfuerzo.

Propiedades de los enlaces simbólicos

### 1. Cualquier cambio que se introduzca en el archivo original o en el enlace simbólico

afecta a los dos por igual.

### 2. En el caso de borrar el archivo original nombre.txt se borra completamente el archivo

y no podremos volver a acceder a él nunca más.

### 3. Si por lo contrario borramos el enlace simbólico, aun podremos seguir accediendo al

contenido mediante el archivo original.

### 4. En contraposición con los enlaces duros, podemos crear enlaces simbólicos de

carpetas sin ningún tipo de problema. De esta forma podremos usar los enlaces simbólicos como un atajo para acceder a un directorio determinado.

### 5. Los enlaces simbólicos se pueden usar en cualquier ubicación, partición y sistema de

archivos de nuestro disco duro. Por lo tanto a diferencia de los enlaces duros, los enlaces simbólicos funcionarán en todos los sistemas de archivos sea cual sea su ubicación.

- Si cambiamos de ubicación el archivo original se romperá el enlace simbólico.

- Eliminar enlaces duros y blandos.

Si en algún momento precisamos eliminar alguno de los enlaces que hemos creado lo podemos hacer de forma muy fácil. Así por ejemplo si queremos eliminar el enlace simbólico que creamos anteriormente tan solo tenemos que ejecutar el siguiente comando en la terminal

unlink /home/user/Escritorio/enlacenombre.txt Cada una de las partes usadas en el comando para eliminar enlaces tiene el siguiente significado unlink: Es la parte del comando encargada de eliminar el enlace. /home/user/Escritorio/enlacenombre.txt: Es la ruta y nombre del enlace que queremos eliminar.

### 5. Ejercicios para trabajar lo aprendido en esta sección

### 1. En el directorio home/usuario crea un directorio llamado enlaces. Dentro de este

directorio creas un directorio llamado eduros.

- Configura tres ficheros llamados enla1.txt, enla2.txt, enla3.txt.

### 3. Crea un enlace duro en un directorio creado en el escritorio llamado repos. Indica

el número de inodo que aparece en el enlace duro y que conclusiones extraes.

- ¿Cómo puedes crear con usa sola instrucción todos los enlaces duros desde la

carpeta eduros a repos?

### 5. En el directorio home/usuario crea un directorio llamado enlaces. Dentro de este

directorio creas un directorio llamado eblandos.

- Configura tres ficheros llamados enla4.txt, enla5.txt, enla6.txt.

- Crea un enlace blando en un directorio creado en el escritorio llamado repos2.

Indica el número de inodo que aparece en el enlace blando y que conclusiones extraes.

- ¿Cómo puedes crear con usa sola instrucción todos los enlaces blandos desde la

carpeta eblandos a repos2?

---

## ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — EJERCICIOS SHELL LINUX I**
> UD3: ADMINISTRACIÓ DE PROGRAMARI LLIURE
>
> La Shell de Unix y de Linux
>
> EJERCICIOS
>
> - ¿Cómo compruebas en que directorio estas?
>
> - ¿Cómo puedes listar todos los elementos del directorio /home?
>
> - ¿Cómo puedes copiar el directorio mp3 dentro del directorio mp4?
>
> - Si te posicionas en /home/usuario/Descargas/mp3, ¿cómo te cambiarias al directorio /bin?
>
> - ¿Cómo borras el directorio mp3 que se encuentra dentro del directorio mp4?
>
> - ¿Cómo moverías el fichero alice.jpg del directorio mp3 al mp4?
>
> - ¿Cómo moverías la carpeta Pearl de mp3 a mp4?
>
> - Listar todos los archivos del directorio bin.
>
> - Listar todos los archivos del directorio tmp.
>
> - Listar todos los archivos del directorio etc que empiecen por t en orden inverso.
>
> - Listar todos los archivos del directorio dev que empiecen por tty y tengan 5 caracteres.
>
> - Listar todos los archivos del directorio dev que empiecen por tty y acaben en 1,2,3 ó 4.
>
> - Listar todos los archivos del directorio dev que empiecen por t y acaben en C1.
>
> - Listar todos los archivos, incluidos los ocultos, del directorio raíz.
>
> - Listar todos los archivos del directorio etc que no empiecen por t.
>
> - Listar todos los archivos del directorio usr y sus subdirectorios.
>
> - Cambiarse al directorio tmp, crear directorio PRUEBA. (en dos pasos)
>
> - Mostrar el día y la hora actual.
>
> - Con un solo comando posicionarse en el directorio $HOME.
>
> - Listar todos los ficheros del directorio HOME mostrando su número de inodo.
>
> - Crear los directorios dir1, dir2 y dir3 en el directorio PRUEBA. Dentro de dir1 crear el directorio dir11. Dentro del directorio dir3 crear el directorio dir31. Dentro del directorio dir31, crear los directorios dir311 y dir312.
>
> - Convierte el fichero alice.jpg en oculto.

> **✍️ Activitat Pràctica 2.2 — EJERCICIOS PARA EL APRENDIZAJE DE LA UNIDAD3**
> UD3: ADMINISTRACIÓ DE PROGRAMARI LLIURE
>
> EJERCICIOS PARA REALIZAR MIENTRAS SE LEE EL PDF DE LA UD3
>
> - Indica como es el sistema operativo GNU/Linux y justifica tu respuesta (monousuario/multiusuario)
>
> - Indica los dos modos básicos de funcionamiento de Linux y haz una pequeña descripción.
>
> - ¿Por qué se considera una mala idea conectarse gráficamente utilizando el nombre de usuario root?
>
> - ¿Como podemos acceder a una consola como usuario root?
>
> - Indica como abrir la ventana de terminal o xterm. Muéstralo con una captura de pantalla, e indica para que sirve.
>
> - ¿Qué información muestra el intérprete de ordenes?
>
> - Diferencia entre ordenes internas y órdenes externes y pon algún ejemplo.
>
> - Teniendo en cuenta la definición de opciones (p.13), indica algún ejemplo.
>
> - ¿Qué son los parámetros? Indica algún ejemplo de orden con un parámetro.
>
> - ¿Se pueden combinar las opciones y parámetros en un orden determinado? Indica un ejemplo.
>
> - Indica el contenido del archivo etc/passwd
>
> - Indica si es viable guardar las contraseñas en el archivo etc/passwd, justifica la respuesta e indica dónde se deben guardar.
>
> - Indica una contraseña que sea considerada buena, atendiendo a lo descrito en la página 16.
>
> - Indica el archivo con información de grupos.
>
> - Indica qué usuario puede administrar las cuentas de usuarios y grupos, creándolas de nuevo, borrando...
>
> - Indica la sintaxis que se emplea para añadir usuarios al sistema.
>
> - Indica la sintaxis que se emplea para eliminar usuarios del sistema
>
> - ¿Existe alguna forma de deshabilitar temporalmente una cuenta sin tener que borrarla?
>
> - Indica como crearías un grupo de usuarios llamado alumnos.
>
> - Creus que un usuario puede pertenecer a más de un grupo?
>
> - Indica cómo cambiar el grupo primario de un usuario después de haberlo creado.
>
> - ¿Cómo puedo saber qué usuarios están autentificados?
>
> - ¿Y el tiempo de conexión de un usuario?
>
> - Vamos a acceder a las herramientas de administración de usuarios y grupos, tal y como se indica en la Fig 1.2 (p.22) haz una captura de pantalla, así como otra captura de la contraseña de usuario para hacer estas tareas de administración.
>
> - Vamos a crear un usuario nuevo, fíjate en la Fig.1.8 y a continuación modifica el nombre corto según la Fig. 1.9. Fíjate que te pide la contraseña del usuario con el que hemos iniciado sesión para llevar el alta del usuario en el sistema (mira Fig. 1.10).
>
> 26. Volveremos a la pantalla inicial de la herramienta de administración de usuarios y grupos, pero ahora, en la lista nos aparecerá un usuario adicional, como puede ver en la figura 1.11.
>
> 27. Da de alta a otro usuario y a continuación realiza una captura de pantalla indicando que la has suprimido, fíjate en la Fig. 1.12. Verás que podemos escoger no suprimir la cuenta, suprimir el usuario manteniendo sus archivos, o suprimir el usuario y sus archivos
>
> 28. En cuanto a la gestión de los grupos, para acceder a ellos es necesario pulsar el botón Gestiona los grupos, desde la ventana principal de la aplicación de gestión de usuarios y grupos. Aparecerá el cuadro de diálogo de la figura 1.13. Realiza una captura de pantalla.
>
> 29. Si seleccionamos uno de los grupos de la lista y hacemos clic en Propiedades, aparece un cuadro de diálogo en el que podemos asignar usuarios al grupo seleccionado. Lo puedes ver en la figura 1.14. Si hacemos un clic en el cuadro de confirmación junto al nombre del usuario, haremos que éste pertenezca al grupo en cuestión. Podemos asignar tantos usuarios como queramos a un grupo determinado. Haz una captura.
>
> 30. Fíjate en que, por defecto, por cada usuario que creamos en el sistema, se crea un grupo con el mismo nombre. Esto no es muy conveniente, y es más adecuado agrupar a todos los usuarios similares en un solo grupo. Haz captura tal y como aparece en 1.15 de la supresión de grupos

> **✍️ Activitat Pràctica 2.3 — SI CONFIGURACIÓN DE RED CON NETPLAN Y LA SUITE IPROUTE2**
> UD3: ADMINISTRACIÓ DE PROGRAMARI LLIURE
>
> CONFIGURACIÓN DE LA RED
>
> EJERCICIOS
>
> - Introducción
>
> El paquete net-tools al que pertenece ifconfig, es un conjunto de comandos para la configuración del subsistema de red del núcleo Linux y, aunque siguen presentes en algunas distribuciones de Linux, otras como Debian 9 stretch consideran que net-tools es un paquete obsoleto (deprecated) y optan por sustituirlo por el paquete iproute2 suite.
>
> La suite iproute2 es una herramienta mucho más completa y moderna que net-tools, por lo que se recomienda su uso para la gestión del del subsistema de red. Con iproute2 suite podemos hacer lo mismo que con net-tools y, al ser una suite más completa, podremos configurar más parámetros que con net-tools. La suite iproute2 incluye todas las funcionalidades que podemos llevar a cabo con los comandos del paquete net-tools. El paquete net-tools se compone de los siguientes comandos: netstat, ifconfig, ipmaddr, iptunnel, mii-tool, nameif, pliconfig, rarp, route, slattach y arp.
>
> El propósito de la suite iproute2 es reemplazar el conjunto de herramientas que componen las net-tools y encargarse de configurar las interfaces de red, la tabla de enrutamiento y gestionar la tabla ARP.
>
> La suite iproute2 tiene la misma funcionalidad que net-tools y, añade otras funcionalidades que convierten a GNU/Linux en un sistema de enrutamiento avanzado. Las herramientas que se incluyen en el paquete iproute2 suite son: bridge, devlink, ip, rtacct, rtmon, tc, tipc, ctstat, lnstat, nstat, routef, routel, rtstat, arpd y genl. Algunas de sus funcionalidades son: enrutamiento por origen, balanceo de carga, tunneling, gestión del ancho de banda, QoS (Quality of Service), VLAN switching, bridging, etc.
>
> Ejercicios para trabajar la configuración de red en Linux Ubuntu
>
> Nota1: en todos los ejercicios debes de indicar que comando has utilizado.
>
> Nota2: se deben usar instrucciones de la suite iproute2.
>
> - Asigna una dirección ipv4 a tu interfaz cableada y especifica donde se ha aplicado.
>
> - Borra una de las dos direcciones que tienes configurada en la interfaz cableada.
>
> - Indica el comando para ver la información en capa2 del modelo OSI.
>
> - Muestra las direcciones ipv4 que tienes configurado en tu interfaz cableada.
>
> - Deshabilita la interfaz cableada, muestra que se ha deshabilitado y vuélvela a activar.
>
> - Visualiza la tabla de rutas.
>
> - Visualiza la tabla ARP. Indica para que sirve esta tabla.
>
> - Configura una ip estática usando la herramienta NETPLAN.
>
> - Imagina que debes configurar un servidor con una ip estática. Para ello, puedes utilizar la herramienta NETPLAN. Haz uso de ella, indicando en cada caso, las ip’s que vas a utilizar para hacer la configuración y que estudio has realizado para ponerlas.
>
> - Indica con una imagen la configuración que has establecido.
>
> INFORMACIÓN SOBRE LA ENTREGA
>
> ENTREGAR LA INFORMACIÓN EN FORMATO ODT, DOC O EN FORMATO PDF. INDICAR SIEMPRE VUESTRO NOMBRE Y APELLIDOS.

> **✍️ Activitat Pràctica 2.4 — EJERCICIOS LINUX DE RECOPILACIÓN DE LA UD3**
> UD3: ADMINISTRACIÓ DE PROGRAMARI LLIURE
>
> La Shell de Unix y de Linux
>
> EJERCICIOS DE RECOPILACIÓN DE LA UNIDAD
>
> EJERCICIO DE ENLACES DEL PDF DE TEORÍA
>
> En estos ejercicios debes indicar la instrucción que has puesto para resolver el ejercicio.
>
> - Crea 1 directorio desde /home/usuario en el escritorio que se llamen dir1 usando rutas relativas con una sola instrucción.
>
> - En el directorio dir1 crea tres ficheros que se llamen cara1, cara2, cara3, pie1, pie2, pie3, pomulo1, pomulo2, pomulo3 desde /home/usuario y usando una sola instrucción.
>
> - Cambia al directorio / (raíz) usando rutas relativas y comprueba donde estás.
>
> - Vuelve al directorio /home/user de la manera más breve posible. Es decir, usando el mínimo de caracteres.
>
> - Lista los ficheros de dir1 que empiezan por po.(usa el filtrado con grep)
>
> - Edita los ficheros cara1, cara2 y cara3 añadiendo algo de contenido en cada uno de ellos. Hazlo con una sola instrucción.
>
> - Crea dentro de dir1 un directorio llamado dir2 con tres ficheros dentro que se llamen mano1, mano2, mano3.
>
> - Lista el contenido de todo el directorio dir1 de manera recursiva. (cuando indico recursivo me refiero a que se muestre todo el contenido de ese directorio y los subyacentes)
>
> - Busca los ficheros el directorio dir1 que contengan la palabra pie.
>
> - Crea una carpeta que se llame dir3 en el escritorio y copia el fichero cara1 dentro del directorio dir3.
>
> - Comprueba la umask que tienes en este momento
>
> - Lista los permisos que dispone ahora mismo el fichero cara1 del directorio dir3. Explica que permisos tiene asignado este fichero con relación a la umask.
>
> - Asigna con el comando chmod permisos de ejecución tanto al usuario, grupo y a otros.
