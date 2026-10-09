---
layout: default
title: "UT2 — Control de versiones — Entorns de Desenvolupament | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut01actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT1"
next_url: "../ut02/ut0201.html"
next_label: "2.1 U3 - Control de versiones ➡️"
---

# 📘 UT2 — Control de versiones (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**2.1 U3 - Control de versiones**](#ut0201) (o [obrir en pàgina individual ➡️](./ut0201.md) )
> - [**2.2 Git Cheat Sheet**](#ut0202) (o [obrir en pàgina individual ➡️](./ut0202.md) )
> - [**2.3 Crear alias para log con ramas**](#ut0203) (o [obrir en pàgina individual ➡️](./ut0203.md) )
> - [**2.4 Material-Heroes**](#ut0204) (o [obrir en pàgina individual ➡️](./ut0204.md) )
> - [**2.5 Actividades de clase**](#ut0205) (o [obrir en pàgina individual ➡️](./ut0205.md) )
> - [**✍️ Activitats pràctiques UT2**](#ut02actividades) (o [obrir en pàgina individual ➡️](./ut02actividades.md) )

---

## 2.1 U3 - Control de versiones

> **🔗 Recurs Web: Git download**
> [**🌐 Obrir recurs extern (https://git-scm.com/downloads) ↗️**](https://git-scm.com/downloads)

> **🔗 Recurs Web: Oh my Git!**
> [**🌐 Obrir recurs extern (https://ohmygit.org/) ↗️**](https://ohmygit.org/)

> **🔗 Recurs Web: Web structure generator (initializr.com)**
> [**🌐 Obrir recurs extern (http://www.initializr.com/) ↗️**](http://www.initializr.com/)

---

U3 - Control de versiones. Git. 1º DAW - Entornos de Desarrollo

1DAW - ED ¿Qué es un control de versiones?

- Herramienta de ayuda al desarrollo de código que almacena la

situación del código fuente en momentos determinados.

- Por analogía, se puede ver como ”una foto” del código en un

momento determinado.

1DAW - ED ¿Qué es un control de versiones?

- Cuando yo era joven…

1DAW - ED ¿Qué es un control de versiones?

- Con la forma de trabajar anterior, si un desarrollador sube un fichero

al servidor o al repositorio donde se almacena el código mientras otro desarrollador está trabajando en alguna funcionalidad del mismo fichero en su ordenador, cuando éste vaya a dejar su versión, se eliminará la del desarrollador anterior, y con él todo el trabajo realizado.

1DAW - ED ¿Qué es un control de versiones?

- Con un sistema de control de

versiones, esto no hubiese ocurrido ya que ambas versiones se hubiesen “mergeado” previamente, eliminando así posibles conflictos y los cambios de todos los desarrolladores, hubiesen quedado en el fichero.

1DAW - ED ¿Qué es un control de versiones?

- Además, cuando utilizamos un

control de versiones nuestro equipo se convierte en una especie de máquina del tiempo en la que podemos volver al punto de la historia del fichero que deseemos

1DAW - ED ¿Qué es un control de versiones? Equipo Proyecto The Boss Equipo!! Necesito que cambiéis el diseño del proyecto ¿Sabéis qué? Vamos a dejar la versión anterior que quedaba mejor. ¿La fuente era esa? Quedaría más modernita con Arial Uy no no, mejor la que teníamos antes.

¿PERO QUE HABÉIS HECHO? TODO HA DEJADO DE FUNCIONAR CON TANTO CAMBIO

1DAW - ED ¿Qué es un control de versiones?

- Trabajando con control de versiones estos cambios que se van

introduciendo y estas “vueltas a versiones anteriores” es algo tan fácil como restaurar una versión determinada.

- Sin GIT, tendríamos que ir con mucho cuidado con las modificaciones

sobre un fichero ya que sino, las versiones anteriores se perderían.

1DAW - ED ¿Qué es un control de versiones?

1DAW - ED ¿Qué es un control de versiones?

- El control de versiones no sólo sirve para desarrolladores y código

fuente.

- Podemos versionar cualquier fichero (documentos de texto, hojas de

cálculo, documentos de imagen, de vídeo…).

- Mejor mantenimiento, más seguridad…

1DAW - ED ¿Qué es git?

- Git es un sistema de control de versiones distribuido.
- Distribuido significa que tenemos un repositorio central y copias localmente de éste.
- Repositorio se define como espacio donde se almacena, organiza y mantiene

información digital.

- Es el más utilizado en la actualidad.
- Es de código abierto, multiplataforma y gratuito.
- Fue creado por Linux Torvalds para un mejor mantenimiento y

colaboración en el código fuente de Linux.

- Actualmente, el código de Linux se puede encontrar en GitHub.

1DAW - ED ¿Qué es git?

- Git viene preinstalado en muchas distribuciones Linux y en los MAC.
- En Windows, sin embargo, es necesario instalarlo.
- https://git-scm.com/downloads
- Las instrucciones también son multiplataforma, es decir, son las mismas

independientemente del SO en el que se ejecuten.

- Una vez instalado, estará disponible en nuestro ordenador. Podemos comprobar

que está correctamente instalado ejecutando en consola la siguiente instrucción

```java
git --version
```

1DAW - ED Repositorio central

- Esta forma de trabajar ha quedado

anticuada.

- Todo el equipo trabaja sobre el

mismo repositorio.

- Backups, accesibilidad, etc.

1DAW - ED Repositorio distribuido

- Forma de trabajo de git.
- Todo el equipo trabaja tiene una

copia (repositorio local) del repositorio principal (repositorio remoto)

- Mejor seguridad, escalabilidad,

accesibilidad…

1DAW - ED ¿Y qué papel tiene Github en todo esto?

- Github es una página web que permite

almacenar los repositorios remotos, de forma que aunque los desarrolladores no estén en la misma localización, puedan todos acceder al mismo repositorio remoto para así hacer una copia de su repositorio local.

- Se estudiará más adelante.

Repositorio remoto (Github) Repositorio local (Cada PC de cada desarrollador)

1DAW - ED Comandos importantes

- git --version
- Utilizado para conocer la versión de git que se está utilizando.
- git help
- Se puede ver qué instrucciones hay disponibles (las más importantes)
- Si se utiliza seguido de la instrucción, muestra qué realiza ésta así como los

argumentos que espera.

- git help commit

1DAW - ED Comandos importantes

- Comandos de configuración necesarios para el correcto

funcionamiento de git

- git config --global user.name “Juanra”
- Indica cual es el nombre del usuario que va a utilizar git.
- git global --global user.email “”
- Lo mismo pero per indicar el correo eléctronico
- git config --global -e
- Accedemos a ver el fichero de configuración de git.

1DAW - ED Inicializando repositorio local

- Llamaremos repositorio a la carpeta

de contiene los ficheros y carpetas que queremos versionar.

- Como ya hemos estudiado,

dispondremos de un repositorio local (en nuestro ordenador), y uno remoto (en GitHub).

- Es necesario tener primero el local

para trabajar con el remoto. Al revés es imposible.

1DAW - ED Inicializando repositorio local

- Para inicializar un repositorio, es necesario situarse mediante la

terminal en la carpeta que se desee.

- git init
- Crea/inicializa un nuevo repositorio en la carpeta en la que se encuentra.
- git status
- Ver el estado de los ficheros

1DAW - ED Inicializando repositorio local

- Para ello, mediante la terminal, se ejecutan las instrucciones

necesarias para llegar ala carpeta que se desea versionar (la que contiene todos los ficheros)

1DAW - ED Inicializando repositorio local

- Inicializar el repositorio

1DAW - ED Inicializando repositorio local

- Como se puede observar, al inicializar el repositorio se crea una

carpeta oculta llamada .git

- Si en algún momento se necesita “desversionar” el proyecto, solo solo

haría falta borrar la carpeta .git

1DAW - ED

```java
git status
```

- Se ejecuta git status para que sea git quién cuente cual es el estado

actual del repositorio

1DAW - ED

```java
git status
```

- Vayamos por partes…
- ”En la rama master”
- El concepto de rama se introduce más adelante en el tema. De momento

destacar que un repositorio puede tener varias ramas y a la principal se le llama rama master.

- Por tanto, esta información indica en qué rama se está trabajando

actualmente.

1DAW - ED

```java
git status
```

- “No hay commits todavía”
- El concepto de commit se introducirá más adelante. Es el proceso mediante el

cual los ficheros/carpetas se “compromete” al repositorio local. Sería algo parecido a “confirmar la subida” de estos ficheros al repositorio local.

- De momento, indica que no existe nada pendiente de “commitear” ni se

conoce ningún commit realizado.

1DAW - ED

```java
git status
```

- ”Archivos sin seguimiento”
- Como se puede observar, se indica que los ficheros/carpetas están sin

seguimiento. Esto significa que están dentro de la carpeta en la que se encuentra el repositorio pero no están siendo “seguidos” todavía por éste. En inglés serían untracked.

- Además, se indica la instrucción que se debería ejecutar para que estos

ficheros dejen de estar sin seguimiento.

- Aparecen en rojo en el terminal

1DAW - ED

```java
git status
```

1DAW - ED Estados de los ficheros

- Como se ha estudiado visto, al inicializar el repositorio, los ficheros y

carpetas se encuentran untracked.

- Una vez pasan a tener seguimiento (tracked) pasan por diferentes

estados antes de estar “commiteados” en nuestro repositorio local.

- Mediante diferentes comandos, irán pasándol de un estado a otro

hasta el final.

1DAW - ED Estados de los ficheros

1DAW - ED Working directory (WD)

- Estado donde se encuentran los ficheros que no tienen seguimiento

todavía o aquellas ya tienen seguimiento (previamente han sido “committeados”) pero han sido modificados, y por tanto, es necesario volver a ”commitearlos”.

- Para pasar del working directory al repositorio (“commiteado”), es

necesario pasar previamente por el estado ”staged”.

1DAW - ED Working directory (WD)

- Para pasar ficheros del working directory a stage se utilizará el

comando git add

- git add rutaFichero
- Después de ejecutar el comando, se puede decir que los ficheros

están en stage.

1DAW - ED Working directory (WD)

- Existen diferentes comodines para añadir ficheros sin ir fichero a

fichero

- git add .
- Más utilizado. Añade todo el contenido de la carpeta actual
- git add *.png
- git add pdf/*.pdf
- git add index.html
- Para más información sobre el comando: git help add

1DAW - ED Working directory (WD)

1DAW - ED Staging Area

- Fase donde nuestros ficheros y carpetas se encuentran “preparados”

para ser “committeados” al repositorio local.

- Desde aquí podríamos tanto pasarlos al repositorio como devolver el

fichero al working directory en caso que así lo decidamos.

- Para pasar los ficheros del stage al repositorio local, es necesario

ejecutar la orden git commit

1DAW - ED Staging area

- El commit siempre se realiza acompañado del argumento “-m”, seguido del

comentario del desarrollador que indique qué es lo que se va a “commitear” al repositorio local.

- En caso de no indicarse, la propia consola ejecutará un proceso interactivo

para que indiquemos un comentario.

- Es muy importante el mensaje ya que es necesario por si en algún

momento deseamos volver a un punto determinado o saber en qué fecha se realizó alguna tarea.

1DAW - ED Staging area

1DAW - ED Repositorio o Comiteado

- Una vez los ficheros se encuentran en el repositorio local correctamente

”commiteados”, el git status indica que no hay nada pendiente ni en working directory ni en stage.

- El flujo continuariía en el repositorio remoto (GitHub). Se estudiará más

adelante.

1DAW - ED Log

- Para poder ver un registro de todos los commits que se han realizado

en el repositorio se utilizara el comando git log.

- En éste, además, se podrán visualizar las diferentes ramas existentes y

entender de una forma más visual los diferentes estados por los que ha pasado el repositorio.

- git log --oneline

1DAW - ED Log

- Por defecto, el log se muestra en terminal de una forma muy sencilla

pero esta puede ser modificada para que tenga una apariencia más visual y entendible.

1DAW - ED Deshaciendo cambios - Reset

- La orden reset es la que utilizaremos para recuperar versiones

anteriores.

- Es decir, nos permitirá viajar en el tiempo para volver a código ya

commiteado con anterioridad.

1DAW - ED Deshaciendo cambios - Reset

- Imaginemos un proyecto con los commits tal y como se ven en la siguiente

imagen

- El código que aparece a la izquierda del log, es el código que identifica cada

uno de los commits.

1DAW - ED Deshaciendo cambios - Reset

- git reset -- soft HEAD^ (o el hash)
- Es el menos destructivo de todos. Va a quitar el fichero del commit pero va a

dejar los ficheros con las modificaciones en el área de stage.

- git reset --mixed 860c6c2
- Es lo que se hace por defecto. si solo hacemos un reset.
- Se lleva tanto del commit como del área de stage pero se mantienen las

modificaciones al "working directory", es decir, a nuestros ficheros.

- git reset --hard 850c22
- Para ir a un punto determinado, destruye todo lo que tenía después.

1DAW - ED Deshaciendo cambios - Stage

- En el caso que se quiera descartar un fichero que ya tenemos en stage

(es decir, hemos hecho previamente un add), la operativa sería igual que en el caso anterior

- git reset --hard

1DAW - ED Deshaciendo cambios - WD

- En el caso que se modifique algún fichero de forma local (Working

directory) y, tras arrepentirse, se desee volver a la versión que existe en la rama (la comiteada), se puede utilizar el comando git checkout.

- git checkout -- index.html
- Este comando eliminará los cambios que se hayan realizado en el WD dejando

la última versión que existía en la rama.

1DAW - ED Eliminar fichero

- Cuando eliminamos un fichero, éste se queda con una marca D

(deleted).

- La instrucción que usaremos para añadir al stage todas las

actualizaciones hechas en nuestro WD será

- git add -u

1DAW - ED Renombrar fichero

- ¿Qué ocurre si renombramos un fichero que ya tenemos

committeado?

- Para GIT, es como haber borrado un fichero y haber creado uno

nuevo por tanto será necesario comunicarle el borrado y la nueva inserción

- git add -u
- git add . (también se puede utilizar git add -A que solo añade lo nuevo)
- Ya solo faltaría realizar un commit normal.

1DAW - ED Ignorando fichero que no queremos

- En ocasiones, existen ficheros en la carpeta donde se encuentra el

repositorio que no queremos que sean “versionados”.

- logs
- ficheros temporales
- ficheros que incluyen contraseñas
- carpetas con datos de librerías
- etc
- Podemos indicarle a git que los ignore creando en la raíz de nuestro

repositorio un fichero llamado .gitignore

1DAW - ED .gitignore

- Cada una de las líneas que existe en este fichero es un patrón del

fichero que ha de ser excluido.

- Se puede indicar directamente el fichero o carpeta que deseamos

excluir o bien utilizar patrones. Aquí algunos ejemplos

- herois.txt
- node_modules/
- *.log
- tmp_*

1DAW - ED Ramas

- Las ramas son líneas temporales alternativas (con sus commits) a la

rama principal las cuales se pueden modificar sin afectar a la rama principal.

- Se utiliza para mantener diferentes versiones del mismo producto.
- Las ramas pueden cruzarse y juntarse en un momento determinado.

1DAW - ED Ramas Rama Master Commit inicial Readme Otro commit Rama per a una nova funcionalitat

1DAW - ED Ramas

- En muchos proyectos, por cada funcionalidad nueva se crea una

nueva rama.

- Una vez se da por finalizada la funcionalidad, se integra con la rama

master.

- Con esto evitamos que los cambios que puedan realizarse en la rama

de la nueva funcionalidad durante su desarrollo afecten a la rama principal y a su funcionamiento normal.

1DAW - ED Ramas

- También se utiliza para tener diferentes versiones del mismo

producto en funcionamiento.

- Rama 2.0, Rama 3.0, etc.

1DAW - ED Ramas

- Para ver qué ramas existentes en nuestro repositorio local

ejecutaremos la siguiente instrucción

- git branch
- En verde aparece la rama sobre la que estamos trabajando

actualmente. Esto es muy importante comprobarlo cuando tengamos varias

1DAW - ED Creación de ramas

- Para crear una rama nueva en nuestro repositorio local utilizaremos la

instrucción

- git branch nombreRamaNueva

1DAW - ED Creación de ramas

- La nueva rama siempre se creará a partir de la última versión que

tiene en el repositorio local (último commit).

- Al último commit, recordemos, también se le llama el HEAD de la

rama.

- Si deseáramos crear la rama desde otro commit habría que indicarle

el código del commit.

- git branch nombreRamaNueva versionCommit
- git branch responsive 0b7u1su2i

1DAW - ED Moverse entre ramas

- Ahora que ya sabemos crear ramas, vamos a movernos entre ellas.
- Para movernos de una rama a otra utilizaremos la instrucción git

checkout

- git checkout nombrerama
- No hay que confundirlo con git checkout
- Cuando nos movemos de rama, los commits que realizamos pasan de

ir al final de la rama master a ir al final de la rama que nos hemos movido.

1DAW - ED Eliminar ramas

- Para eliminar una rama existente
- git branch -d nombreRama
- Cuando borramos una rama hemos de asegurarnos que
- No estamos situados en la rama que queremos borrar
- Nos podemos mover mediante git checkout nombreOtraRama
- No existen commits pendientes de realizar en la rama que deseamos borrar.

Tenemos dos opciones.

- Hacemos los commits y borramos
- Utilizamos la orden que fuerza la eliminación git branch -D nombreRama

1DAW - ED Unir ramas

- Llegará un momento que la rama que hemos creado puede que

queramos volver a unirla con la rama master.

- Porque hemos finalizado de arreglar un error.
- Hemos finalizado de desarrollar una funcionalidad nueva.
- Etc.

1DAW - ED Unir ramas

- Cuando trabajamos con ramas, lo lógico es ir “cerrando” ramas. Para ello

hemos de unir la rama creada con la principal (master).

- Para ver las diferencias entre una rama y otra ejecutaremos la siguiente instrucción.
- git diff ramaNueva master
- A estas uniones se les llama comúnmente merge ya que todas se ejecutan

mediante esta instrucción.

- git merge rama
- Los merges siempre se realizan desde la rama a la cual queremos unir los

cambios.

1DAW - ED Unir ramas

- Escenario: Tenemos la rama fixError y la rama master. Hemos finalizado con la

rama fixError y queremos unirla a la rama master.

- Hemos de situarnos en la rama master.
- git checkout master
- Desde la rama master ejecutaremos la instrucción para unir ambas ramas
- git merge fixError
- Una vez unida, podemos borrarla ya que los cambios de ésta ya están en la master.

•

```java
git branch -d fixError
```

- Existen tres mecanismos para realizar los merges
- Fast-Forward
- Unión automática
- Unión manual

1DAW - ED Fast-Forward

- Se realiza este tipo de merge cuando no hay ningún cambio en la

rama a la que queremos unirnos y los cambios pueden ser reintegrados de forma transparente.

- Cada uno de los cambios realizados en la rama que hemos unido,

formará parte de la rama a la que nos hemos unido como si nunca se hubiesen separado.

1DAW - ED Unión automática

- Git detecta que en la rama principal hay algún cambio que la rama

secundaria no tiene pero aún así realiza el merge sin conflictos.

- Esto se debe a que los cambios en la rama principal y la rama

secundaria no son sobre los mismos ficheros/líneas.

1DAW - ED Unión manual

- La unión manual se realiza cuando existen conflictos al intentar unir

las dos ramas y git no puede resolverlo de forma automática.

- Esto ocurre cuando modificamos las mismas líneas de los mismos

ficheros, por ejemplo. Git no es capaz (y hace bien) de decidir qué versión es la correcta.

1DAW - ED Unión manual

- En este caso nos mostrará un error por consola.
- Tendremos que ir a los ficheros que han dado el error y solucionar los

conflictos que ha encontrado.

- Una vez solucionado, se subirían los ficheros a la rama principal y el

merge habría finalizado.

1DAW - ED Repositorio remoto

1DAW - ED Repositorio remoto

- Hasta el momento, hemos estado trabajando solos y sobre un mismo

PC.

- Git, como ya hemos estudiado, está diseñado para trabajar de forma

colaborativa con equipos de personas deslocalizadas.

- También, hemos estudiado que GIT es un repositorio distribuido, y de

momento solo hemos trabajado sobre un PC. Esto cambia ahora.

1DAW - ED Repositorio remoto

- Github es una plataforma de desarrollo colaborativo de software que

permite alojar nuestros repositorios.

- Usada por Apple, Google, la Nasa, Linux, Microsoft, Python, etc.
- Gratuita con ciertas limitaciones.
- Permite además acceder a estadísticas, wikis, etc.

1DAW - ED Repositorio remoto

- De forma general, tendremos un repositorio remoto por proyecto.
- Este repositorio remoto será creado solo una vez en Github y cada

uno de los desarrolladores clonará el repositorio remoto en su repositorio local (clone).

- Para crear el proyecto en Github seguiremos los siguientes pasos (con

la sesión ya iniciada en Github).

1DAW - ED Repositorio remoto

- De forma general, tendremos

que buscar la opción para crear un nuevo repositorio.

- Podemos definir si queremos que

nuestro repositorio remoto sea público o privado.

1DAW - ED Repositorio remoto

- Una vez lo creamos, nos redirige a una vista donde nos ofrece

información muy útil sobre como enlazar el repositorio remoto que acabamos de crear en Github. URL del repositorio remoto

1DAW - ED Enlazar repositorio remoto a local

- Como vemos en la captura anterior, una de las opciones más comunes es

enlazar un repositorio ya existente de forma local con el repositorio remoto recién creado.

- git remote add aliasRepositorioRemoto urlRepositorioRemoto
- git remote add origin https://github.com/JuanraCollado/mirepositorioed.git
- Hemos añadido a nuestro repositorio local el repositorio remoto recién

creado. A partir de ahora, para hacer referencia a él, se hará mediante el alias asignado origin. Se usa origin al primer repositorio remoto enlazado por convención.

1DAW - ED Enlazar repositorio remoto a local

- Para ver los repositorios remotos enlazados a un repositorio local, hay

que ejecutar la instrucción

- git remote

1DAW - ED Trabajando con el repositorio remoto

- Con el repositorio remoto correctamente enlazado al repositorio local

podemos empezar a trabajar de forma distribuida.

- Para ello, vamos a ver 2 operaciones básicas
- Pull
- Push

1DAW - ED

```java
git push
```

- Sube todos los cambios del proyecto que tenemos en nuestro

repositorio local (nuestro ordenador) al repositorio remoto (Github).

- git push aliasRepositorioRemoto ramaorigen:ramadestino
- En el caso que la rama origen y destino sean las mismas, se puede omitir uno

de los dos parámetros

- git push origin master

1DAW - ED

```java
git pull
```

- Descarga la última versión que hay del proyecto del repositorio

remoto (Github) al repositorio local (nuestro ordenador).

- Cuando trabajamos con repositorios remotos y de forma distribuido,

es una buena práctica siempre realizar un pull antes de realizar un push.

- git pull

1DAW - ED Autenticar en Github por terminal

- Github desactivó la autenticación por usuario y contraseña “normal”

hace unos años para mejorar su seguridad.

- Como consecuencia de ello, aunque estemos autorizados a hacer

push y pull sobre el repositorio remoto, la seguridad del sistema nos lo impide

1DAW - ED Autenticar en Github por terminal

- Para solucionarlo, desde Github accederemos a la opción Settings del

menú de usuario (sobre la imagen de perfil).

- Posteriormente, seleccionaremos en el menú la opción Developer

settings.

- Finalmente, seleccionamos

Personal Access Tokens -> Tokens (classic)

1DAW - ED Autenticar en Github por terminal

- Tan solo falta generar un nuevo token pulsando Generate new token

(classic).

- Marcaremos la fecha de expiración del token.
- El token generado será nuestra contraseña para loguearse por

terminal y no debemos perderla sino perderemos el acceso con ese token y será necesario generar uno nuevo.

1DAW - ED Autenticar en Github por terminal

- Y seleccionaremos para qué

queremos que nos sirva el token (lo marcamos todo).

- Y pulsamos en generar nuevo token.

1DAW - ED Autenticar en Github por terminal

- Copiamos el token y nos aseguramos de almacenarlo en algún lugar

seguro y que no se pierda.

- NO PUEDE SER CONSULTADO EN LA WEB DE GITHUB.
- Ya podemos acceder por terminal.

> **💡 📚 Document extens (85 pàgines)**
> S'han mostrat les primeres 80 pàgines completes del manual.

---

## 2.2 Git Cheat Sheet

```java
GIT CHEAT SHEET
```

STAGE & SNAPSHOT Working with snapshots and the Git staging area

```java
git status
```

show modiﬁed ﬁles in working directory, staged for your next commit

```java
git add [file]
```

add a ﬁle as it looks now to your next commit (stage)

```java
git reset [file]
```

unstage a ﬁle while retaining the changes in working directory

```java
git diff
```

diﬀ of what is changed but not staged

```java
git diff --staged
```

diﬀ of what is staged but not yet committed

```java
git commit -m “[descriptive message]”
```

commit your staged content as a new commit snapshot SETUP Conﬁguring user information used across all local repositories

```java
git config --global user.name “[firstname lastname]”
```

set a name that is identiﬁable for credit when review version history

```java
git config --global user.email “[valid-email]”
```

set an email address that will be associated with each history marker

```java
git config --global color.ui auto
```

set automatic command line coloring for Git for easy reviewing SETUP & INIT Conﬁguring user information, initializing and cloning repositories

```java
git init
```

initialize an existing directory as a Git repository

```java
git clone [url]
```

retrieve an entire repository from a hosted location via URL BRANCH & MERGE Isolating work in branches, changing context, and integrating changes

```java
git branch
```

list your branches. a * will appear next to the currently active branch

```java
git branch [branch-name]
```

create a new branch at the current commit

```java
git checkout
```

switch to another branch and check it out into your working directory

```java
git merge [branch]
```

merge the speciﬁed branch’s history into the current one

```java
git log
```

show all commits in the current branch’s history

```java
Git is the free and open source distributed version control system that's responsible for everything GitHub
```

related that happens locally on your computer. This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS With platform speciﬁc installers for Git, GitHub also provides the ease of staying up-to-date with the latest releases of the command line tool while providing a graphical user interface for day-to-day interaction, review, and repository synchronization.

GitHub for Windows https://windows.github.com GitHub for Mac https://mac.github.com For Linux and Solaris platforms, the latest release is available on the oﬃcial Git web site.

```java
Git for All Platforms
```

http://git-scm.com

education@github.com education.github.com Education Teach and learn better, together. GitHub is free for students and teach- ers. Discounts available for other educational uses. SHARE & UPDATE Retrieving updates from another repository and updating local repos

```java
git remote add [alias] [url]
```

add a git URL as an alias

```java
git fetch [alias]
```

fetch down all the branches from that Git remote

```java
git merge [alias]/[branch]
```

merge a remote branch into your current branch to bring it up to date

```java
git push [alias] [branch]
```

Transmit local branch commits to the remote repository branch

```java
git pull
```

fetch and merge any commits from the tracking remote branch TRACKING PATH CHANGES Versioning ﬁle removes and path changes

```java
git rm [file]
```

delete the ﬁle from project and stage the removal for commit

```java
git mv [existing-path] [new-path]
```

change an existing ﬁle path and stage the move

```java
git log --stat -M
```

show all commit logs with indication of any paths that moved TEMPORARY COMMITS Temporarily store modiﬁed, tracked ﬁles in order to change branches

```java
git stash
```

Save modiﬁed and staged changes

```java
git stash list
```

list stack-order of stashed ﬁle changes

```java
git stash pop
```

write working from top of stash stack

```java
git stash drop
```

discard the changes from top of stash stack REWRITE HISTORY Rewriting branches, updating commits and clearing history

```java
git rebase [branch]
```

apply any commits of current branch ahead of speciﬁed one

```java
git reset --hard [commit]
```

clear staging area, rewrite working tree from speciﬁed commit INSPECT & COMPARE Examining logs, diﬀs and object information

```java
git log
```

show the commit history for the currently active branch

```java
git log branchB..branchA
```

show the commits on branchA that are not on branchB

```java
git log --follow [file]
```

show the commits that changed ﬁle, even across renames

```java
git diff branchB...branchA
```

show the diﬀ of what is in branchA that is not in branchB

```java
git show [SHA]
```

show any object in Git in human-readable format IGNORING PATTERNS Preventing unintentional staging or commiting of ﬁles

```java
git config --global core.excludesfile [file]
```

system wide ignore pattern for all local repositories logs/ *.notes pattern*/ Save a ﬁle with desired patterns as .gitignore with either direct string matches or wildcard globs.

---

## 2.3 Crear alias para log con ramas

```java
git config --global alias.lgb "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset%n' --abbrev-commit --date=relative --branches" git lgb
```

---

## 2.4 Material-Heroes

#### 📦 ciudades.md

```java
# Ciudades
```

### 1. Ciudad Gótica

### 2. Metrópolis

### 3. Hell's Kitchen

---

#### 📦 heroes.md

```java
# Heroes
```

- Superman
- Batman
- Daredevil
- Aquaman
- Mujer Maravilla

---

#### 📦 batman.historia.md

```java
# Batman
```

Batman (conocido inicialmente como The Bat-Man) es un personaje creado por los estadounidenses Bob Kane y Bill Finger, y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics n.º 27, lanzada por la editorial National Publications en mayo de 1939.

La identidad secreta de Batman es Bruce Wayne (Bruno Díaz, en algunos países de habla hispana),2 3 4 un empresario multimillonario y filántropo de Gotham City. Después de ser testigo del asesinato de sus padres en un violento y fallido asalto cuando era niño, jura vengarse y combatir la delincuencia para lo cual se somete a un riguroso entrenamiento físico y mental. Adopta el diseño de un murciélago para su vestimenta, sus utensilios de combate y sus vehículos. A diferencia de los superhéroes, no tiene superpoderes: recurre a su intelecto, así como a aplicaciones científicas y tecnológicas para crear armas y herramientas con las cuales lleva a cabo sus actividades. Vive en la mansión Wayne, en cuyos subterráneos se encuentra la Batcave, el centro de operaciones de Batman. Recibe la ayuda constante de otros aliados, entre los cuales pueden mencionarse Robin, Batgirl (posteriormente Oráculo), Nightwing, el comisionado de la policía local, James Gordon y su mayordomo Alfred Pennyworth.

---

#### 📦 superman.historia.md

```java
# Superman
```

Superman (cuyo nombre kryptoniano es Kal-El y su nombre terrestre es Clark Kent) es un personaje ficticio, un superhéroe de los cómics que aparece en las publicaciones de DC Comics.1 2 3 4 Creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio; lo vendieron a Detective Comics, Inc. en 1938 por USD 1305 y la primera aventura del personaje fue publicada en Action Comics #1 (junio de 1938), para luego aparecer en varios seriales de radio, programas de televisión, películas, tiras periódicas y videojuegos. Con el éxito de sus aventuras, Superman ayudó a crear el género del superhéroe y estableció su primacía dentro del cómic estadounidense.1 La apariencia del personaje es distintiva e icónica: un traje azul y rojo, con una capa y un escudo de “S” estilizado en su pecho,6 7 8 escudo que se ha convertido en un símbolo del personaje en todo tipo de medios de comunicación.9

La historia original de Superman relata que nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral. El joven Kent comenzó a mostrar habilidades superhumanas, las mismas que al llegar a su madurez decidiría usar para el beneficio de la humanidad.

Aunque denominado, algunas veces, de manera poco halagadora, como «el gran Boy Scout azul» por otros superhéroes, Superman también es conocido como «El Hombre de Acero», «El Hombre del Mañana» y «El Último Hijo de Krypton» por el público general de los cómics. Bajo la identidad de Clark Kent, Superman vive en medio de los humanos como un «tímido reportero» del diario Daily Planet de Metrópolis. Ahí trabaja junto a la reportera Lois Lane, con la cual ha sido vinculado románticamente.

---

#### 📦 misiones.md

```java
# Misiones
```

### 1. Acabar con el plan de Lex Luthor

### 2. Crear la liga de la justicia

### 3. Buscar nuevos miembros

---

## 2.5 Actividades de clase

#### 9/11

Modifica el fichero2.txt dejándolo en blanco y sube los cambios a stage.
Modifica el nombre de ficherocarpeta1.txt a ficherocarpeta.txt y sube los cambios a stage.
Sube todo los cambios que tienes en stage al repositorio local.
Modifica el fichero2.txt añadiendo el nombre de tu ciudad y sube los cambios al repositorio local.

#### 1/12

Crea una rama nuevaCaracterisitca y añade unos commits. - Realiza un par de commits en la rama master asegurándote de añadir conflictos con los cambios que existen en la rama nuevaCaracteristica. - Fusiona ambas ramas resolviendo los conflictos. Al finalizar, borra la rama nuevaCaracteristica.

#### 7/12

- Crea un nuevo repositorio remoto con el nombre "MiProyecto"
- Crea un nuevo repositorio local. El contenido será un proyecto de initializr (web que crea estructura de webs).
- Enlaza el repositorio remoto con el repositorio local.
- Crea una nueva rama llamada "feature-nueva-funcionalidad" y cámbiate a ella

- Realiza algunos cambios en un archivo css.

- Confirma los cambios en la nueva rama

- Vuelve a la rama principal y realiza nuevos cambios en un fichero html.

- Junta las dos ramas.

- Elimina la rama nueva funcionalidad.

- Sube los cambios al repositorio remoto.

---

## ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — U3 A1**
> Unidad 3 – Control de versiones
>
> U3 – A1
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - No copies y pegues. Utiliza tus palabras
>
> - ¿Qué es un sistema de control de versiones? Explícalo con tus palabras.
>
> ### 2. Además de *GIT, ¿cuáles son los sistemas de control de versiones más utilizados?
>
> ### 3. Ya hemos comentado en clase como lo hacen gastar los programadores, pero, ¿le
>
> ves utilidad por otro tipo de perfil? ¿Qué? Explícalo.
>
> - Enumera ventajas y desventajas del control de versiones.
> - ¿Cuántos repositorios podemos tener a una máquina?
> - Explica qué papel crees que va a hacer GitHub en el tema de control de versiones.
>
> ### 7. Investiga cuando se creó GitHub y escribe con tus palabras y un máximo de 3 líneas
>
> su historia.
>
> ### 8. Busca en Internet una noticia de un caso de éxito de implantación del sistema de
>
> control de versiones. Pega el enlace y comenta brevemente la noticia (máx. 5 líneas)

> **✍️ Activitat Pràctica 2.2 — U3 A2**
> Unidad 3 – Control de versiones
>
> U3 – A2
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - En cada paso, adjunta una captura de pantalla de la terminal donde
>
> se vea la instrucción ejecutada y el resultado obtenido.
>
> - Asegúrate que la imagen se vea correctamente.
> - No copies y pegues. Utiliza tus palabras
>
> 1. Descarga de la siguiente web http://www.initialitzr.com la estructura de una página bootstrap y guardala a la ruta /home/tuusuario/ed con el nombre A2_tunombre (tunombre es pera que pongas tu nombre)
>
> 2. Inicializa un repositorio dentro de la ruta /home/ tuusuario /ed/A2_tunombre
>
> 3. Añade al stage todos los ficheros.
>
> 4. Haz un commit de todos los ficheros. Añade como comentario "Primera versión ficheros".
>
> 5. Modifica el index.html para añadir como <title> tu nombre y apellido y guarda los cambios. Restaura el fichero index.html con la última versión que se encuentra en tu repositorio.
>
> 6. Crea tres nuevos ficheros en la raíz del repositorio llamados contacto.html, quienessomos.html y datos.xml. Añade solo los ficheros HTML al stage.
>
> 7. Busca y explica todas las formas (comodines, patrones...) que existen de agregar ficheros al stage.
>
> 8. Quita del stage el fichero contacto.html
>
> 9. Vuelve a añadirlo.
>
> 10. Explica con tus palabras a que nos referimos cuando decimos que un fichero está en el "working directory", en "stage" y "en el repositorio o committeado".
>
> 11. ¿Es obligatorio que un commit tenga un comentario? ¿Por qué crees que es tan importante?

> **✍️ Activitat Pràctica 2.3 — U3 A3**
> ### 📄 A3TuNombre.zip
>
> #### 📦 f3.pdf
>
> *No s'ha pogut processar el PDF (f3.pdf): Cannot open empty stream.*
>
> ### 📄 U3_A3.pdf
>
> Unidad 3 – Control de versiones
>
> U3 – A3
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - En cada paso, adjunta una captura de pantalla de la terminal donde
>
> se vea la instrucción ejecutada y el resultado obtenido.
>
> - Asegúrate que la imagen se vea correctamente.
> - No copies y pegues. Utiliza tus palabras
>
> 1. Descarga de la tarea de Aules el fichero llamado A3Tunombre.zip y descomprímelo en la carpeta /hombre/tuusuario/ed. Cambia el nombre de la carpeta para que "TuNombre" sea tu nombre e inicializa un repositorio dentro de ella.
>
> 2. Buscar información sobre qué es un alias para una instrucción en git. Explica qué es, como funciona y qué ventajas le encuentras.
>
> 3. Crea un alias para la instrucción git add –A. La instrucción se ejecutará al ejecutar por terminal git aa.
>
> 4. Existe una forma de indicarle al gitignore que para una carpeta determinada excluya cierta regla. Investiga cómo se realiza y añade la siguiente regla: Los ficheros con extensión .log no tienen que ser versionados, excepto los que se encuentran en la carpeta c3
>
> 5. Añade a la rama (al repositorio) todos los ficheros
>
> 6. Modifica el fichero c1/f1.js y añade el siguiente texto: "El año que viene voy a triunfar con PHP". Sube los cambios en la rama con el comentario "Triunfaré con PHP"
>
> 7. Añade al fichero c1/f1.js una línea nueva que diga "Y también con JavaScript". Guarda los cambios en el Working Directory.
>
> 8. Como parece que te has venido un poco arriba con el de PHP, recupera en el Working Directory la última versión del fichero c1/f1.js que tenemos en la rama.
>
> 9. Elimina el fichero c2/f1.js y sube los cambios a la rama con el comentario "Eliminar c2/f1".
>
> Unidad 3 – Control de versiones 10. Modifica el fichero c3/f1.js y añade una línea que diga "Con Laravel también voy a triunfar". Sube los cambios en la rama con el comentario "Triunfare con Laravel"
>
> 11. Haz los cambios necesarios para que el fichero c1/c1f4.readme deja de tener seguimiento al repositorio.
>
> 12. Nos acabamos de dar cuenta de que no vamos a triunfar con Laravel pero ya lo tenemos en la rama. Haz los cambios necesarios para que la rama vuelva al commit "Eliminar c2/f1". Lo que hemos eliminado de la rama se debe a quedar en el stage.
>
> 13. Saca del stage los ficheros que quedan.

> **✍️ Activitat Pràctica 2.4 — U3 A4 - Grupal**
> ### 📄 Material-Heroes.zip
>
> ```java
> # Ciudades
> ```
>
> ---
>
> ```java
> # Heroes
> ```
>
> - Superman
> - Batman
> - Daredevil
> - Aquaman
> - Mujer Maravilla
>
> ---
>
> ```java
> # Batman
> ```
>
> Batman (conocido inicialmente como The Bat-Man) es un personaje creado por los estadounidenses Bob Kane y Bill Finger, y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics n.º 27, lanzada por la editorial National Publications en mayo de 1939.
>
> La identidad secreta de Batman es Bruce Wayne (Bruno Díaz, en algunos países de habla hispana),2 3 4 un empresario multimillonario y filántropo de Gotham City. Después de ser testigo del asesinato de sus padres en un violento y fallido asalto cuando era niño, jura vengarse y combatir la delincuencia para lo cual se somete a un riguroso entrenamiento físico y mental. Adopta el diseño de un murciélago para su vestimenta, sus utensilios de combate y sus vehículos. A diferencia de los superhéroes, no tiene superpoderes: recurre a su intelecto, así como a aplicaciones científicas y tecnológicas para crear armas y herramientas con las cuales lleva a cabo sus actividades. Vive en la mansión Wayne, en cuyos subterráneos se encuentra la Batcave, el centro de operaciones de Batman. Recibe la ayuda constante de otros aliados, entre los cuales pueden mencionarse Robin, Batgirl (posteriormente Oráculo), Nightwing, el comisionado de la policía local, James Gordon y su mayordomo Alfred Pennyworth.
>
> ---
>
> ```java
> # Superman
> ```
>
> Superman (cuyo nombre kryptoniano es Kal-El y su nombre terrestre es Clark Kent) es un personaje ficticio, un superhéroe de los cómics que aparece en las publicaciones de DC Comics.1 2 3 4 Creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio; lo vendieron a Detective Comics, Inc. en 1938 por USD 1305 y la primera aventura del personaje fue publicada en Action Comics #1 (junio de 1938), para luego aparecer en varios seriales de radio, programas de televisión, películas, tiras periódicas y videojuegos. Con el éxito de sus aventuras, Superman ayudó a crear el género del superhéroe y estableció su primacía dentro del cómic estadounidense.1 La apariencia del personaje es distintiva e icónica: un traje azul y rojo, con una capa y un escudo de “S” estilizado en su pecho,6 7 8 escudo que se ha convertido en un símbolo del personaje en todo tipo de medios de comunicación.9
>
> La historia original de Superman relata que nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral. El joven Kent comenzó a mostrar habilidades superhumanas, las mismas que al llegar a su madurez decidiría usar para el beneficio de la humanidad.
>
> Aunque denominado, algunas veces, de manera poco halagadora, como «el gran Boy Scout azul» por otros superhéroes, Superman también es conocido como «El Hombre de Acero», «El Hombre del Mañana» y «El Último Hijo de Krypton» por el público general de los cómics. Bajo la identidad de Clark Kent, Superman vive en medio de los humanos como un «tímido reportero» del diario Daily Planet de Metrópolis. Ahí trabaja junto a la reportera Lois Lane, con la cual ha sido vinculado románticamente.
>
> ---
>
> ```java
> # Misiones
> ```
>
> ### 📄 U3_A4_grupal.pdf
>
> Unidad 3 – Control de versiones h
>
> U3 – A4 - Colaborativo
>
> Instrucciones
>
> - El ejercicio se realiza en grupo, ejecutando cada miembro las
>
> instrucciones en su ordenador, pero viendo todos el resultado.
>
> - Solo un miembro del grupo deberá subir el documento final en formato
>
> pdf.
>
> - En cada paso, adjunta una captura de pantalla de la terminal donde
>
> se vea la instrucción ejecutada y el resultado obtenido.
>
> - Deberá contener las capturas realizadas en los diferentes
>
> ordenadores.
>
> - Asegúrate que la imagen se vea correctamente.
> - Recuerda que SIEMPRE, antes de trabajar con el repositorio remoto,
>
> es aconsejable traerse los últimos cambios que existen allí (pull).
>
> 1. Dev1: Descarga de Aules el fichero comprimido Material Heroes y descomprímelo. Inicializa un repositorio en la carpeta del proyecto y súbelo todo al repositorio local.
>
> 2. Dev1: Crea un repositorio remoto y enlázalo al repositorio local. Añade a Dev2 y Dev3 como colaboradores.
>
> 3. Dev1: Sube todos los cambios al repositorio remoto.
>
> 4. Dev2-Dev3: Clona el repositorio remoto en tu ordenador.
>
> 5. Dev1-Dev2-Dev3: Crea una rama con tu nombre. En esta rama, crea un fichero con tu nombre y súbelo al repositorio remoto.
>
> 6. Dev1: Sobre la rama master, modifica el fichero héroes.md sustituyendo la línea 3 por Spiderman. Sube los cambios al repositorio remoto.
>
> 7. Dev2: Sobre la rama master, modifica el fichero héroes.md sustituyendo la línea 4 por Spidercerdo. Sube los cambios al repositorio remoto.
>
> 8. Dev3: Sobre la rama master, modifica el fichero héroes.md sustituyendo la línea 3 por Superwoman. Sube los cambios al repositorio remoto.
>
> 9. Dev3: El fichero README.md ha de tener seguimiento. Sube los cambios al repositorio remoto.
>
> 10. Dev1-Dev2-Dev3: Une la rama que habías creado con la rama principal. Sube los cambios al repositorio remoto.
>
> Unidad 3 – Control de versiones
>
> 11. Dev2: Crea una tag llamada 1.0.0 y súbela al repositorio remoto.
>
> 12. Dev1: Ejecuta la instrucción de log (la bonita) y muestra una captura.
>
> 13. Dev1-Dev2-Dev3: Actualiza todos los repositorios locales para tener las últimas versiones que hay en el remoto.

> **✍️ Activitat Pràctica 2.5 — U3 A5**
> Unidad 3 – Control de versiones
>
> U3 – A6
>
> Instrucciones
>
> - Entrega el documento en formato PDF a la tarea de Aules creada para
>
> tal fin.
>
> - En cada paso, adjunta una captura de pantalla de la terminal donde
>
> se vea la instrucción ejecutada y el resultado obtenido.
>
> - Asegúrate que la imagen se vea correctamente.
> - No copies y pegues. Utiliza tus palabras
>
> 1. Clona el siguiente repositorio remoto ya existente en Github en tu ordenador. https://github.com/rampatra/wedding-website.git
>
> 2. Modifica el fichero README.md y añade tu nombre en la parte superior. Sube los cambios al repositorio local.
>
> 3. ¿Tienes algún repositorio remoto enlazado? ¿Por qué crees que es así?
>
> 4. Sube los cambios realizados al repositorio remoto. ¿Qué ha ocurrido? ¿Por qué crees que es así? ¿Qué deberíamos hacer para solucionarlo?
>
> 5. Crea un nuevo repositorio remoto en Github llamado Wedding y enlázalo con el repositorio local.
>
> 6. Elimina el resto de repositorios remotos que están enlazados al repositorio local.
>
> 7. Sube el contenido de tu repositorio local al repositorio remoto.
>
> 8. Crea una nueva rama con el nombre “arreglando2” y sobre ésta, modifica el fichero manifest.json. Sube los cambios al repositorio remoto.
>
> 9. Vuelve a modificar el mismo fichero y súbelo a la rama.
>
> 10. Queremos deshacer los últimos dos cambios realizados sobre el manifest.json. Ejecuta la orden para no dejar rastro de lo que hemos hecho en éste fichero.
>
> 11. Elimina la rama arreglando 2.
>
> 12. Crea una nueva tag llamada “v2.0” y súbela al repositorio remoto.
