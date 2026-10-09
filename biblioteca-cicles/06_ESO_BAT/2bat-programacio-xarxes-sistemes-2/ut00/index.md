---
layout: default
title: "UD1 — Introducció a Python · Temari Complet"
course_root: ".."
badge: "2n Batxillerat · UT0 Completa"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut00/ut0001.html"
next_label: "1.1 Introducció a Python ➡️"
---

# 📘 UD1 — Introducció a Python (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Introducció a Python**](./ut0001.md)
- [**1.2 Elementos de un programa**](./ut0002.md)
- [**1.3 Tipos de datos**](./ut0003.md)
- [**1.4 Funciones integradas**](./ut0004.md)
- [**1.5 Módulos, paquetes y namespaces**](./ut0005.md)
- [**1.6 Estructuras de control**](./ut0006.md)
- [**1.7 Tipos de datos complejos**](./ut0007.md)
- [**1.8 Funciones**](./ut0008.md)
- [**1.9 Errores y excepciones**](./ut0009.md)
- [**1.10 Ficheros**](./ut0010.md)

---

# 1.1 Introducció a Python

> **🔗 Recurs Web: Link Live Share (Visual Studio)**
> [**🌐 Obrir recurs extern (https://prod.liveshare.vsengsaas.visualstudio.com/join?5C6C46257593E3A0BC1B4F43C334F53944A4) ↗️**](https://prod.liveshare.vsengsaas.visualstudio.com/join?5C6C46257593E3A0BC1B4F43C334F53944A4)

> **📌 🏷️ Apunt de la Unitat**
> #### PROGRAMACIÓ DE VIDEOJOCS

> **🔗 Recurs Web: Curs de Pygame**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=5v_Jl6tMU68&list=PLVzwufPir356RMxSsOccc38jmxfxqfBdp) ↗️**](https://www.youtube.com/watch?v=5v_Jl6tMU68&list=PLVzwufPir356RMxSsOccc38jmxfxqfBdp)

> **🔗 Recurs Web: Projecte: Joc avió**
> [**🌐 Obrir recurs extern (https://realpython-com.translate.goog/pygame-a-primer/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp) ↗️**](https://realpython-com.translate.goog/pygame-a-primer/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp)
>
> - Has de seguir pas a pas el tutorial per desenvolupar el joc.
> - Modificar el joc base per adaptarlo al teu gust.
> - Mostrarás al professor/a el resultat del teu joc.

---

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Introducción al lenguaje de programación Python Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Introducción al lenguaje de programación Python CONTENIDO

- Introducción.....................................................................................................................................2

1.1. Principales características de Python.......................................................................................2 1.2. Versiones de Python.................................................................................................................3

- Cómo trabajar con Python...............................................................................................................4

2.1. El intérprete de comandos........................................................................................................4 2.1.1. IPython3: un intérprete de comandos avanzado...............................................................5 2.2. Editores de texto......................................................................................................................6 2.3. Entornos de desarrollo integrados............................................................................................7 2.4. Editores on-line........................................................................................................................8 2.4.1. Ejemplo de uso del editor “OnlineGDB”.........................................................................9

- Instalación de Python....................................................................................................................15

3.1. Lliurex....................................................................................................................................15 3.1.1. Cómo ejecutar una versión de Python............................................................................15 3.1.2. Instalar una nueva versión de Python.............................................................................16 3.1.3. Instalar el intérprete IPython3........................................................................................18 3.2. Windows y Mac OS...............................................................................................................19 3.3. Otros sistemas operativos......................................................................................................19

- Mi primer programa en Python.....................................................................................................19
- Fuentes de información.................................................................................................................20

Escuela de programación - Python Introducción al lenguaje de programación Python

### 1. Introducción

```python
Python es un lenguaje de programación que fue creado a finales de
```

los ochenta por Guido van Rossum en el Centro para las Matemáticas y la Informática (CWI, Centrum Wiskunde & Informatica) de los Países Bajos. Guido es un gran admirador del grupo humorístico británico Monty

```python
Python y decidió bautizar al nuevo lenguaje inspirándose en el
```

nombre de dicho grupo. Según su página oficial (https://www.python.org/), “Python es un lenguaje de programación que te permite trabajar rápido e integrar sistemas de una manera más efectiva”. Lo cierto es que Python tiene fama de ser fácil de leer y de aprender. Y es uno de los lenguajes de programación más populares en los últimos tiempos1.

Pero, ¿qué otras características tiene Python?

#### 1.1. Principales características de Python

• Es un lenguaje de alto nivel ya que se encuentra más cercano al lenguaje natural, la manera en la que hablamos los humanos, que al lenguaje máquina. • Se trata de un lenguaje multiparadigma porque soporta programación imperativa, programación orientada a objetos y programación funcional.

• Es un lenguaje interpretado ya que no necesita un proceso de compilación para generar el código ejecutable. • Se trata de un lenguaje multiplataforma porque el mismo código fuente, sin ninguna adaptación especial, puede ser ejecutado en distintos sistemas operativos.

• Es fácilmente extensible ya que permite utilizar módulos nuevos creados en

```python
Python e incluso en C y C++.
```

Fuente: https://cipsa.net/lenguajes-programacion-mas-populares--ranking-tiobe/ El intérprete de Python traduce a código máquina las instrucciones que va necesitando en tiempo de ejecución, sólo ellas, y no como lo haría un compilador que traduciría el código fuente completo a código ejecutable, tanto si se van a ejecutar todas las instrucciones como si no.

Escuela de programación - Python Introducción al lenguaje de programación Python

#### 1.2. Versiones de Python

A día de hoy disponemos de la versión 3.9.1 de Python tanto para Linux/Unix como para Windows o Mac OS. Este documento está basado en la versión 3.8.5. En su página oficial (https://www.python.org/downloads/) podemos encontrar esta versión e incluso versiones anteriores o versiones específicas para otras plataformas como AIX, IBM i, iOS, iPadOS, Solaris, etc .

Es importante resaltar que entre la versión 2 y la 3 existen diferencias sustanciales y podemos encontrar algunas incompatibilidades entre versiones. Para saber un poco más, puedes visitar la página web: https://www.programaenpython.com/miscelanea/diferencias- entre-python-2-y-3/ En este curso nos centraremos en el aprendizaje de Python 3.

Escuela de programación - Python Introducción al lenguaje de programación Python

### 2. Cómo trabajar con Python

Existen multitud de formas para crear y probar programas en Python. Desde utilizar el intérprete de comandos que incorpora la instalación básica del lenguaje hasta usar plataformas on-line donde podemos olvidarnos completamente de cualquier tarea de instalación. Cada opción tiene sus ventajas e inconvenientes, así que la elección de una u otra dependerá de tus necesidades y recursos. Para ayudarte a elegir, aquí te contamos algunas de ellas.

#### 2.1. El intérprete de comandos

Cuando instalamos Python 3 en nuestra máquina (en el apartado siguiente se indica cómo) podemos utilizar el intérprete de comandos que lleva incorporado para probar instrucciones de programas sueltas o, incluso, ejecutar programas escritos en ficheros con extensión “.py”.

Figura 1: El intérprete de comandos de Python 3 ejecutado en Windows Figura 2: El intérprete de comandos de Python 3 ejecutado en Lliurex En el caso de Lliurex, debemos escribir el nombre de la versión porque el sistema operativo lleva preinstalada la versión 2 de Python y se ejecutaría dicha versión, cosa que no nos interesa porque ya hemos explicado anteriormente que tienen ciertas incompatibilidades.

> **💡 Apunt Tècnic**
> Ejemplo: En la siguiente imagen se puede ver el uso del intérprete para calcular la suma de dos valores enteros. Figura 3: Ejemplo Para ejecutar una instrucción, pulsamos la tecla Intro/Enter. Cuando queramos salir del intérprete, pulsaremos las teclas Control + Z y volveremos al prompt del sistema operativo.

Escuela de programación - Python Introducción al lenguaje de programación Python

#### 2.1.1. IPython3: un intérprete de comandos avanzado

Existe un intérprete de comandos más potente para Python 3 llamado IPython 3 que añade funcionalidad extra al intérprete básico que incluye Python, como el resaltado de errores. Lo primero que llama la atención al abrirlo es que IPython numera las líneas de instrucciones que vamos escribiendo y que utiliza colores para diferenciar las líneas que introduce el usuario de las que muestran los resultados.

Figura 4: Intérprete IPython 3 ejecutado en Lliurex Además de esto, permite ejecutar comandos del sistema operativo sin salir del intérprete. Algo que puede ser muy útil en determinados momentos. Figura 5: Ejecución de comandos del sistema operativo en IPython 3 También podemos utilizar el tabulador para autocompletar el nombre de variables u otros elementos del sistema, así como conocer las funciones y/o métodos que puedan utilizarse con él.

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 6: Lista de funciones que podemos utilizar para el elemento "numeros" Esta utilidad era exclusiva del editor avanzado pero la última versión del intérprete de comandos básico también lo incorpora.

#### 2.2. Editores de texto

Cuando nos surge la necesidad de escribir un programa de cierta envergadura el uso del intérprete puede ser un poco incómodo, así que podemos pasar a utilizar editores de texto plano. Cualquier editor de texto plano que utilices habitualmente te servirá para editar programas en Python. Ejemplos: Bloc de notas o Notepad++ en Windows, Pluma o Gedit en Lliurex.

La mayoría de editores de texto plano reconocen la sintaxis del lenguaje Python y colorean las instrucciones para que sea más sencilla la lectura del programa. Además, suelen numerar las líneas para que resulte más sencillo detectar los errores. Pulsando la tecla TABULADOR después del punto, podremos ver la lista de funciones disponibles para el elemento correspondiente.

Utilizar cualquiera de estos intérpretes es muy útil y recomendable cuando estamos empezando con Python ya que, de una manera sencilla, podemos probar el efecto de determinadas instrucciones y puede ayudarnos a resolver dudas básicas.

Escuela de programación - Python Introducción al lenguaje de programación Python Puedes ver una lista de los editores reconocidos por la organización de Python en el siguiente enlace: https://wiki.python.org/moin/PythonEditors También puedes visitar esta página web para ver una descripción (en castellano) de algunos de ellos: https://python3.es/ide-y-editores-de-codigo-en-pyhton-guia

#### 2.3. Entornos de desarrollo integrados

¿Y si necesito algo más? ¿Y si un editor de texto no es suficiente para mí? Entonces puedes elegir un Entorno de Desarrollo Integrado o IDE (Integrated Development Environment en inglés). Figura 7: Programa Python abierto con el editor “Pluma” de Lliurex Si vas a utilizar Windows puede ser una buena idea que instales el editor gratuito Notepad++ ya que el Bloc de notas muestra todo el código en color negro.

Escuela de programación - Python Introducción al lenguaje de programación Python Un IDE es una aplicación pensada para facilitar el trabajo de los programadores o desarrolladores de software. Estas aplicaciones suelen incluir editores de texto plano potentes, autocompletado inteligente de código, depurador y compiladores/intérpretes de distintos lenguajes de programación.

Existen algunos IDE completamente gratuitos y otros en los que hay que pagar una cuota según el plan de uso seleccionado. Para saber más sobre los IDEs disponibles para programar con Python, puedes visitar la siguiente página web: https://wiki.python.org/moin/IntegratedDevelopmentEnvironments También puedes visitar esta página web para ver una descripción (en castellano) de algunos de ellos: https://python3.es/ide-y-editores-de-codigo-en-pyhton-guia

#### 2.4. Editores on-line

Otra opción para trabajar con Python puede ser utilizar un editor on-line pero hay que tener cuidado porque no todos ofrecen la misma funcionalidad. En la siguiente tabla se pueden ver algunos ejemplos. Editor on-line Descripción

```python
Python Shell
```

(https://www.python.org/shell/) Se trata de una versión del intérprete de comandos de Python. Puede ser útil para empezar con Python sin tener que instalarlo en nuestro ordenador pero no permite importar módulos creados por nosotros mismos. Pynative (https://pynative.com/online- python-code-editor-to-execute- python-code/) Permite subir y descargar programas desde/hacia tu ordenador.

La principal pega es que si el programa solicita datos al usuario, hay que introducirlos todos previamente y no de forma interactiva como sucedería con una ejecución “normal” del programa. Puede ser útil para probar programas científicos que no requieren mucha interacción con el usuario.

OnlineGDB (https://www.onlinegdb.com/ online_python_compiler) Permite ejecutar programas de muchos lenguajes de programación, entre ellos, Python. Así que si ya lo has utilizado alguna vez, puede ser una buena opción. Permite subir y descargar programas desde/hacia tu ordenador y Aprender a utilizar un IDE puede requerir más tiempo que manejarse con un editor de texto. Así que, a no ser que vayas a embarcarte en proyectos más complejos, es una buena idea empezar a crear programas con un editor más sencillo para que puedas concentrar todos tus esfuerzos en aprender Python.

Escuela de programación - Python Introducción al lenguaje de programación Python es adecuado para programas que interaccionan con el usuario. Un inconveniente de esta opción es que no puedes ejecutar tus programas directamente sino que hay que importarlos desde el programa main() que ofrece el editor. En el siguiente apartado se puede ver cómo solventar este pequeño obstáculo.

#### 2.4.1. Ejemplo de uso del editor “OnlineGDB”

En este apartado se explican los pasos que se deberían seguir para ejecutar un programa subido desde nuestro ordenador.

### 1. Abre tu navegador web favorito y conéctate a la página del editor

https://www.onlinegdb.com/online_python_compiler. Aparecerá esta ventana: Figura 8: Ventana principal del editor "onlinegdb"

### 2. Por defecto se muestra un programa llamado “main.py” que imprime el famoso

saludo “Hello word”.

### 3. A la izquierda puedes ver un menú con opciones. Si queremos disponer de más

espacio para el código, podemos plegar el menú presionando el elemento “<” marcada por la flecha amarilla.

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 9: Plegar el menú izquierdo El aspecto final sería el siguiente: Figura 10: Menú plegado Para volver a ver el menú desplegado, simplemente hay que pulsar el icono del rayo que hay arriba a la izquierda de la ventana.

- Asegúrate de que el lenguaje seleccionado en el campo “Language” es “Python 3”.

Si no es así, selecciona la flecha de su derecha y elige la opción correcta.

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 11: Elegir el lenguaje "Python 3" para trabajar

### 5. El editor siempre muestra un programa principal llamado “main.py”. Este programa

no se puede eliminar, así que tenemos dos opciones

- Borrar el contenido del programa “main.py” y sustituirlo por nuestro código.

Esto puede venir bien para poder hacer algunas pruebas pero, a la larga, puede ser un engorro.

- Subir nuestros programas y ejecutarlos desde el programa “main.py”. Esta

opción es mucho más cómoda ya que podremos descargar nuevas versiones de nuestros programas sin estar copiando y pegando en “main.py”.

- Para subir un programa al editor, pulsa el icono de la nube.

Figura 12: Subir fichero desde el ordenador

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 13: Programa subido desde el ordenador

### 7. Selecciona el programa que quieres subir al editor. Aparecerá una pestaña nueva

con el código de tu programa.

### 8. Selecciona la pestaña “main.py” e importa tu programa. Esto se hace utilizando la

instrucción import nombre_programa donde nombre_programa no debe incluir la extensión “.py”. Figura 14: Importamos el programa que queremos probar

- Cuando pulsemos el botón “Run” se ejecutará el código de nuestro programa.

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 15: Ejecución del programa Lo habitual será importar sólo un programa cada vez pero si necesitamos concatenar la ejecución de varios programas o incluso seleccionar entre varios programas dependiendo de una elección del usuario, podremos adaptar el programa “main.py” para ello.

Escuela de programación - Python Introducción al lenguaje de programación Python Ejemplo 1: Concatenar la ejecución de varios programas. Figura 16: Ejemplo de concatenar ejecuciones de programas Ejemplo 2: El usuario selecciona qué programa quiere ejecutar. Figura 17: Ejemplo de selección de programas según selección del usuario

Escuela de programación - Python Introducción al lenguaje de programación Python

### 3. Instalación de Python

En este apartado tienes algunas orientaciones para poder instalar Python en distintos sistemas operativos. Si, finalmente, has decidido utilizar una versión on-line para trabajar, no será necesario que realices ninguna de las tareas que te contamos aquí.

#### 3.1. Lliurex

La versión 16 de Lliurex y otras distribuciones de Linux ya vienen con Python preinstalado, tanto la versión 2.7 como la 3.5. De hecho, se suelen tener varias versiones de Python instaladas porque algunas aplicaciones requieren una versión específica del mismo. En este apartado te explicamos cómo averiguar las versiones de Python que tienes instaladas en Lliurex, cómo ejecutar cada una de ellas y cómo instalar una nueva versión.

#### 3.1.1. Cómo ejecutar una versión de Python

Para conocer las versiones de Python que tienes instaladas en tu ordenador, abre un terminal de comandos y ejecuta el siguiente comando: ls -l /usr/bin/python* Después de ejecutar el comando, obtendremos una lista similar a la siguiente: En este caso tenemos instaladas las versiones 2.7 y 3.5. Fíjate que para ejecutar distintas versiones de Python deberemos ejecutar distintos comandos o enlaces simbólicos

• Si ejecutamos python o python2, estaremos arrancando la versión 2.7 de Python. • Si ejecutamos python3 estaremos ejecutando la versión 3.5 de Python. Figura 18: Versiones de Python instaladas en Lliurex Para abrir el terminal de comandos, tienes varias opciones

- Pulsar la combinación de teclas Control + Alt + T
- Pulsar el botón derecho del ratón sobre el escritorio y elegir la opción Abrir en el terminal
- Seleccionar la opción del menú principal de Lliurex Accesorios / Terminal del MATE

Escuela de programación - Python Introducción al lenguaje de programación Python • Y, evidentemente, si ejecutamos los comandos python2.7 y python3.5 estaremos arrancando las versiones 2.7 y 3.5 respectivamente. Podemos comprobarlo en la siguiente imagen: Figura 19: Ejecución de distintas versiones de Python en Lliurex Por último, para conocer la información completa de una versión instalada, podemos ejecutar el comando pythonX.X -V con cada una de las versiones.

Figura 20: Subversiones de Python

#### 3.1.2. Instalar una nueva versión de Python

Para seguir este curso es suficiente con utilizar la versión 3.5 preinstalada en Lliurex pero si quieres tener la última versión de Python, aquí te contamos cómo conseguirlo.

Escuela de programación - Python Introducción al lenguaje de programación Python

### 1. Antes de nada, asegúrate de tener actualizada tu versión de Lliurex para evitar

posibles problemas. En la Wiki de Lliurex (http://wiki.lliurex.net/tiki-index.php? page=Lliurex+Up+en+LliureX+16) puedes encontrar una explicación de cómo hacerlo.

### 2. Actualizamos la lista de paquetes e instalamos los prerrequisitos

```python
$ sudo apt update
$ sudo apt install software-properties-common
```

### 3. El paquete python3.8 no se encuentra en los repositorios estándar de Lliurex ni

Ubuntu, así que hay que añadir el repositorio deadsnakes a la lista de repositorios del sistema ex profeso

```python
$ sudo add-apt-repository ppa:deadsnakes/ppa
```

Pulsa la tecla Intro/Enter cuando te lo soliciten, así confirmaremos la inserción del repositorio.

### 4. Actualiza otra vez la lista de paquetes para asegurarnos de que el repositorio se

activa correctamente

```python
$ sudo apt update
```

### 5. Instalamos el paquete python3.8

```python
$ sudo apt install python3.8
```

Comprueba las versiones de Python instaladas en el equipo. Debería aparecer una más: Figura 21: python3.8 ya está instalado Para ejecutar esta versión, deberás utilizar su nombre completo: python3.8

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 22: Ejecutar python3.8

#### 3.1.3. Instalar el intérprete IPython3

Existen versiones del intérprete IPython tanto para Python 2 como para Python 3. En este apartado vamos a explicar la instalación del último de ellos: IPython3.

### 1. Primero debemos asegurarnos de que tenemos activo el repositorio universe y

actualizar el índice de paquetes del mismo

```python
$ sudo add-apt-repository universe
$ sudo apt update
```

### 2. Instalaremos el paquete de IPython3

```python
$ sudo apt-get install ipython3
```

Para ejecutar el intérprete recién instalado sólo hay que ejecutar el comando ipython3, tal y como se puede ver a continuación: Figura 23: Ejecución del intérprete IPython3 Para salir del intérprete de comandos, deberemos ejecutar la combinación de teclas Control + Z.

Escuela de programación - Python Introducción al lenguaje de programación Python

#### 3.2. Windows y Mac OS

Las versiones de Windows no suelen traer instalada ninguna veresión de Python. Sin embargo, los ordenadores con Mac OS sí suelen tener alguna versión, aunque no suele ser la más nueva. A continuación tienes el enlace a un tutorial donde se explica cómo instalar Python 3 en estos sistemas operativos. Aunque en el tutorial se habla de la versión 3.7.1, puedes seguir los mismos pasos teniendo en cuenta que tú deberás instalar la versión 3.8.5.

https://justcodeit.io/aprende-a-instalar-python-en-tu-ordenador/

#### 3.3. Otros sistemas operativos

Si dispones de un sistema operativo distinto de los vistos anteriormente, puedes buscar información de cómo instalar Python 3 en la siguiente página web: https://tutorial.djangogirls.org/es/python_installation/#instalación-de-python

### 4. Mi primer programa en Python

Para crear un programa en Python podemos utilizar cualquier de los editores que hemos visto en este documento y tener en cuenta lo siguiente: Para ejecutar un programa de Python puedes seguir alguna de estas alternativas

- Ejecutar en un editor on-line: En el apartado 2.4.1Ejemplo de uso del editor

“OnlineGDB” tienes un ejemplo de uso explicado paso a paso.

- Ejecutar desde la línea de comandos de tu sistema operativo

Simplemente, escribe el nombre de intérprete de Python, tal y como hemos visto en el apartado 3.1.2 Instalar una nueva versión de Python seguido del nombre del programa. Figura 24: Ejecutar programa desde línea de comandos Si el programa se encuentra en una carpeta diferente, deberás escribir la ruta para acceder hasta él.

Todos los programas de Python se almacenan en ficheros de texto plano con extensión .py.

Escuela de programación - Python Introducción al lenguaje de programación Python Figura 25: Usando la ruta del programa

### 5. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Descargas en la página oficial de Python: https://www.python.org/downloads/ • Qué es Python: https://es.wikipedia.org/wiki/Python • Programar en Python: https://www.programaenpython.com/ •

```python
Python tutorials: https://www.tutorialsteacher.com/python
```

• Instalación de Python: https://linuxize.com/post/how-to-install-python-3-8-on- ubuntu-18-04/ • «Curso de Programación en Python», José Luis Tomás Navarro.

---

# 1.2 Elementos de un programa

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Elementos de un programa Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Elementos de un programa CONTENIDO

- Estructura de un programa...............................................................................................................2
- Comentarios.....................................................................................................................................3
- Palabras reservadas..........................................................................................................................4
- Identificadores.................................................................................................................................4
- Literales, variables y expresiones....................................................................................................5

5.1. Literales...................................................................................................................................5 5.2. Variables...................................................................................................................................8 5.3. Expresiones............................................................................................................................10 5.3.1. Operadores.....................................................................................................................11

- Fuentes de información.................................................................................................................12

Escuela de programación - Python Elementos de un programa

### 1. Estructura de un programa

En este documento presentaremos las características básicas de los programas escritos en el lenguaje de programación Python. • Un programa Python, como en la mayoría de lenguajes de programación, está compuesto por líneas. • Cada línea suele corresponder a una instrucción que acaba con un salto de línea y nada más. Es decir, no existe un símbolo especial que indique el final de una instrucción como en otros lenguajes de programación.

• Si una instrucción es muy larga, podemos separarla en varias líneas incluyendo un símbolo «\» al final. suma = 1111 + 222 + 333 + 4444444 + \ 55555 + 6666 + 7777 • Dentro de una misma línea podemos escribir varias instrucciones separadas por «;» pero esto puede restar legibilidad al programa así que su uso no se recomienda, excepto en casos especiales.

mes = 4; print(mes) • Es recomendable separar los elementos de las expresiones por un espacio, para que sean más sencillas de leer. suma = numero + 10 • Habitualmente, las instrucciones empiezan en la primera columna (sin dejar espacios) excepto que formen parte del cuerpo de otra instrucción como pueden ser las estructuras de control, funciones, definiciones de clases, etc. En ese caso, hay que indentarlas con un tabulador o un conjunto de espacios.

◦En un mismo programa no se puede mezclar el uso de los tabuladores y espacios para indentar líneas. Hay que elegir sólo uno de ellos. if valor1 == valor2: print(“iguales”) else: print(“distintas”)

Escuela de programación - Python Elementos de un programa • Un error muy típico al escribir programas en Python son los errores de indentación: Figura 1: Error de indentación Si te interesa conocer la guía de estilo de los programas Python, puedes visitar las siguientes páginas web

• Página oficial (en inglés): https://www.python.org/dev/peps/pep-0008/ • Recursos Python (en castellano): http://recursospython.com/pep8es.pdf

### 2. Comentarios

Para facilitar la lectura de los programas es recomendable incluir comentarios que faciliten la comprensión del código, sin abusar de su uso. El símbolo «#» es el encargado de marcar un comentario en Python. Lo podemos utilizar al principio de una línea, enmedio o al final. En cualquier caso, el intérprete de Python ignorará el contenido que aparezca a la derecha del «#».

Figura 2: Uso de comentarios La indentación es uno de los aspectos más importantes a tener en cuenta en Python, ya que es el mecanismo por el que se determina la estructura de los programas y la relación de sus elementos entre sí.

Escuela de programación - Python Elementos de un programa

### 3. Palabras reservadas

Las palabras reservadas son aquellas que no pueden utilizarse para nombrar otros elementos del programa porque ya tienen un significado y utilidad definidos en Python. Para acceder a la lista actualizada de palabras reservadas de Python, sigue estos pasos

### 1. Abre el intérprete de comandos de Python. Por ejemplo el online

https://www.python.org/shell/

### 2. Ejecuta el comando help y podrás acceder al manual de ayuda incluido en el

intérprete de Python.

- Ejecuta el comando keywords.

Figura 3: Palabras reservadas de Python Todas las palabras reservadas deben escribirse tal cual aparecen en el listado anterior, ya que Python tiene en cuenta las diferencias entre mayúsculas y minúsculas.

### 4. Identificadores

Un identificador es un nombre definido por un/a programador/a para representar un elemento nuevo. Por ejemplo, una variable, una función, una clase, un módulo, etc. A la hora de crear identificadores, debemos seguir unas normas básicas: • Puedes utilizar letras mayúsculas y minúsculas, números y el guión bajo (_).

◦No se pueden utilizar símbolos especiales: [‘.’, ‘!’, ‘@’, ‘#’, ‘$’, ‘%’] • Los identificadores no pueden empezar por un número. • Los identificadores pueden empezar por un guión bajo (_) pero es recomendable reservar esta característica para la programación orientada a objetos, ya que tienen un uso muy característico en dicho caso.

• No se pueden utilizar las palabras reservadas como identificadores.

Escuela de programación - Python Elementos de un programa • Las variables suelen nombrarse en minúsculas y las constantes en mayúsculas. Para comprobar si un nombre es adecuado debemos hacer dos cosas

### 1. Asegurarnos de que no se trata de una palabra reservada utilizando la función

keyword.iskeyword(“nombre_identificador”) así: Figura 4: Preguntando si es una palabra reservada

- Comprobar si el nombre del identificador cumple con las restricciones de Python.

Para ello utilizaremos la función str.isidentifier() como en los siguientes ejemplos: Figura 5: Preguntando si cumple las normas

### 5. Literales, variables y expresiones

Los literales, variables y expresiones son los elementos básicos con los que podemos empezar a construir instrucciones en Python. Veámoslos con detalle.

#### 5.1. Literales

Un literal o constante es la representación de un valor que no cambia con el tiempo. El número 5 es un literal que siempre valdrá 5 y la palabra “hola” siempre tendrá el mismo valor. Existen distintos tipos de literales: Necesitamos importar el módulo keyword, ya que iskeyword() es una de sus funciones. Más adelante hablaremos de esto.

Escribimos entre comillas y paréntesis el nombre que queremos comprobar. Escribimos el nombre entre comillas (dobles o simples) seguida de la llamada a la función. Lo veremos con más detalle más adelante. El nombre “try” está bien construido aunque se trate de una palabra reservada.

Escuela de programación - Python Elementos de un programa • Literales numéricos

◦Podemos representar números enteros en representación decimal, binaria (anteponiendo un 0b), octal (anteponiendo un 0o) o hexadecimal (anteponiendo un 0x). Por ejemplo: 345, 0b101001001, 0o546, 0xf9af9d. ◦Podemos representar números reales (con decimales) separando la parte entera de la parte decimal con un punto “.”. Por ejemplo: 123.50, 0.56 o .56, 12. o 12.00.

◦También podemos representar números complejos (con parte real y parte imaginaria) acabando el número con una “j” o una “J”, indistintamente. Por ejemplo: 1+2j, 8+15J. • Literales textuales o cadenas

permiten representar texto que puede contener números y caracteres especiales. ◦Las cadenas deben escribirse entre comillas simples, dobles o triples. ◦Las comillas triples sirven para construir cadenas que contienen saltos de línea. Un salto de línea en Python se representa con el carácter \n. Este tipo de comillas suele utilizarse para documentar funciones, clases, métodos y módulos en un programa.

Figura 6: Escribiendo cadenas de texto Podemos incluir números que se considerarán caracteres de texto. Podemos utilizar comillas simples o dobles para representar cadenas. Usaremos triples comillas dobles o triples comillas simples para crear cadenas multilíneas (con saltos de línea).

Podemos incluir unos tipos de comillas dentro de otras.

Escuela de programación - Python Elementos de un programa ◦Podemos incluir caracteres especiales en las cadenas utilizando el símbolo “\”, similar a como ocurre con el carácter de salto de línea. Se les conoce con el nombre de secuencias de escape y a continuación se recogen algunos de ellos.

En los ejemplos utilizamos la función predefinida print() para mostrar por pantalla el valor de la cadena. La estudiaremos con detalle más adelante. Secuencia Descripción Ejemplo \\ Barra invertida \’ Comilla simple \” Comilla doble \b Retroceso (borramos el carácter anterior) \t Tabulador horizontal \v Tabulador vertical El identificador de un elemento/objeto se puede obtener utilizando la función predefinida id(). Veamos algunos ejemplos

Figura 7: Identificadores para literales En Python todos los elementos son objetos, incluso los literales. Así que cuando vamos a utilizar un literal en un programa, Python crea un objeto al que asocia un identificador único, un tipo y un valor. Podemos ver que todos los valores tienen identificadores diferentes.

Escuela de programación - Python Elementos de un programa

#### 5.2. Variables

Una variable representa una entidad que puede cambiar de valor a lo largo del tiempo. Con otras palabras, una variable referencia a un valor en un momento determinado de la ejecución de un programa pero puede referenciar a otro valor distinto en otro momento. Incluso, distintas variables pueden referenciar al mismo valor en el mismo momento.

Algunas características de las variables en Python son las siguientes: • Para que una variable referencie un valor, se utiliza un operador de asignación como “=” u otros similares que veremos más adelante. • No es necesario declararlas ya que el tipo de la variable se determina en tiempo de ejecución, según el tipo del valor al que está referenciando.

◦Ejemplos de tipos de datos: int (enteros), float (reales), bool (lógicos), cadenas de texto (str). ◦La función predefinida type() nos indica el tipo de un elemento. Figura 8: Tipo variable "numero" Figura 9: Tipo variable "otra" • A lo largo del tiempo, la misma variable puede referenciar a distintos tipos de datos.

Por ejemplo, primero a un número y luego a una cadena de texto. tiempo = 2 numero digito numero tiempo = 1 digito tiempo = 2 hola numero hola numero tiempo = 1 hola numero otra La variable numero será de tipo int. La variable otra será de tipo str.

Escuela de programación - Python Elementos de un programa Figura 10: Cambia el tipo • Una variable debe referenciar a un valor antes de ser utilizada o Python dará error. Figura 11: Informar valor antes de utilizar una variable Para que nos resulte más fácil de entender, podemos ver una variable como una etiqueta que hace referencia a un valor o como una etiqueta que “guarda” la referencia a un objeto (valor) y no el valor en sí mismo.

Así, cuando asociamos un valor a una variable, ¿qué es lo que está pasando?

- Python crea un objeto para el valor y le asigna un identificador.
- Si la variable (etiqueta) aún no existe, la crea.

### 3. Python asocia la variable al objeto creado, es decir, “guarda” el identificador del

valor en la variable. Figura 12: Variable y valor Vamos a ver algunos ejemplos para intentar clarificar estos conceptos. Podemos pensar que guardamos el número 5 en la variable numero, pero lo cierto es que... … realmente, el objeto 5 está almacenado en la dirección de memoria 10915872 y el identificador de la variable numero es exactamente el del objeto al que hace referencia.

Como vemos, el tipado de las variables es dinámico y depende del tipo de valor al que referencian.

Escuela de programación - Python Elementos de un programa Ejemplo 1: Si dos variables tienen el mismo valor (referencian al mismo objeto), la función id() nos devolverá el mismo valor ya que se corresponderá con el identificador del objeto al que referencian. Figura 13: Dos variables referencian a un mismo valor Ejemplo 2: Si cambia el valor de una variable (referenciamos a otro objeto), el identificador de la variable cambiará porque será el del nuevo objeto al que referencia.

Figura 14: Cambiamos el valor Existen más peculiaridades de las variables relacionadas con tipos de datos mutables, aquellos que pueden cambiar a lo largo de tiempo, pero lo veremos con detalle en su momento.

#### 5.3. Expresiones

Una expresión es una combinación de números, cadenas de texto, funciones, otros objetos y operadores que al evaluarla devuelve un valor de un tipo determinado. Para crear una expresión podemos valernos del uso de literales y/o variables. ((5 + 70) * 30) / (2 * numero) El número 5 sigue almacenado en la misma dirección de memoria.

La variable numero ahora hace referencia al objeto 6. Las variables numero y digito hacen referencia al objeto creado para almacenar el valor 5.

Escuela de programación - Python Elementos de un programa La función predefinida eval() evalúa una expresión y obtiene su valor. Figura 15: Ejemplo de uso de eval()

#### 5.3.1. Operadores

Los operadores, al igual que en matemáticas, son símbolos del lenguaje que nos permiten realizar operaciones con uno o más datos. Existen distintos tipos de operadores con los que podemos trabajar. Utilizar unos u otros dependerá del tipo de los datos con los que vayamos a operar.

Figura 16: Ejemplo del uso de operadores Aquí puedes ver una lista de los tipos de operadores de Python: • Operadores aritméticos. Ejemplos: +, -, *, /. • Operadores de asignación. Ejemplos: =, +=, *=. • Operadores de comparación. Ejemplos: >, >=, <=, !=. • Operadores lógicos o booleanos. Ejemplos: and, or, not.

• Operadores de cadenas. Ejemplos: +, -, *. • Operadores a nivel de bit: >>, xor. • Operadores de pertenencia: in, not in. • Operadores de identidad: is, is not. A lo largo del curso iremos conociendo muchos de los operadores que ofrece Python. Por último, cabe resaltar que ciertas expresiones pueden resultar ambiguas, por ello existe un orden de precedencia entre los tipos de operadores que indica qué operación debe ser evaluada antes que el resto.

Escuela de programación - Python Elementos de un programa De mayor a menor precedencia encontramos el siguiente orden: operadores aritméticos, operadores a nivel de bit, operadores de pertenencia, operadores de identidad, operadores de comparación, operadores booleanos y operadores de asignación.

Dentro de cada tipo de operadores también existe un orden de precedencia con respecto a sus operadores.

### 6. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Curso de Python de Teachbeamers: https://www.techbeamers.com/ • Introducción a la programación con Python de Bartolomé Sintes Marco

https://www.mclibre.org/consultar/python • Tipos de operadores en Python: https://j2logo.com/python/tutorial/operadores-en- python/ • «Curso de Programación en Python», José Luis Tomás Navarro.

---

# 1.3 Tipos de datos

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Tipos de datos Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Tipos de datos CONTENIDO

- Introducción.....................................................................................................................................2
- Tipos de datos..................................................................................................................................3

2.1. Números...................................................................................................................................4 2.1.1. Números enteros..............................................................................................................4 2.1.2. Números reales.................................................................................................................5 2.1.3. Números complejos..........................................................................................................7 2.2. Booleanos.................................................................................................................................8 2.3. Cadenas de texto......................................................................................................................8

- Operadores.....................................................................................................................................10

3.1. Operadores aritméticos..........................................................................................................10 3.2. Operadores de comparación...................................................................................................11 3.3. Operadores de asignación......................................................................................................12 3.4. Operadores booleanos............................................................................................................14 3.5. Operadores de identidad........................................................................................................15 3.6. Operaciones sobre cadenas....................................................................................................17 3.6.1. Acceso a los elementos de una cadena...........................................................................17 3.6.2. Comparación de cadenas................................................................................................19 3.6.3. Concatenando cadenas...................................................................................................20 3.6.4. Repitiendo cadenas.........................................................................................................20 3.6.5. Operador de pertenencia................................................................................................21

- Conversión de tipos.......................................................................................................................22
- Fuentes de información.................................................................................................................24

Escuela de programación - Python Tipos de datos

### 1. Introducción

En este documento hablaremos de los tipos de datos en Python y presentaremos las características de los más usuales y sencillos: números enteros, números reales y booleanos. Como ya dijimos anteriormente, en Python las variables no hace falta declararlas antes de ser utilizadas. Es decir, no hace falta indicar el tipo de dato que van a contener antes de asignarles un valor.

A este mecanismo se le conoce como tipado dinámico ya que es en el momento de ejecución del programa cuando se conoce el tipo de dato que guarda cada variable y los operadores y funciones que se le pueden aplicar. Por ejemplo: si una variable contiene un número entero podré utilizarlo para realizar una operación matemática pero si contiene una cadena de texto entonces podré concatenarla con otra de ellas.

Además, en Python todos los elementos son objetos, realmente, instancias de una clase determinada. Así, una variable de tipo entero será una variable que referenciará a un objeto de tipo entero o una variable de tipo cadena de texto será una variable que referenciará a un objeto de tipo cadena de texto.

Una clase, o un tipo, definirá el rango de valores que puede tomar un objeto de dicha clase y las operaciones (métodos) que se pueden realizar sobre él. “hola” “ y “ “adiós” Figura 2: Operaciones con enteros Figura 1: Operaciones con cadenas de texto

Escuela de programación - Python Tipos de datos

### 2. Tipos de datos

En un documento anterior ya presentamos algunos tipos de datos existentes en este lenguaje de programación. En la siguiente tabla se recogen los tipos de datos más usuales en Python y el nombre exacto que reciben. Clasificación Clase en Python Descripción Números int Número entero. Ejemplos: 3, 55, 1948.

float Número real. Ejemplos: 10.3348, .98344, 193., 1.9. complex Número complejo con parte real y parte imaginaria. Ejemplos: 3.2+6j, 0.1+4.55J Booleanos bool Presentan dos valores: True y False equivalentes a los valores verdadero o falso de la lógica. Secuencias str Cadenas de texto o secuencias de caracteres.

> **💡 Apunt Tècnic**
> Ejemplo: “Buenos días” list Listas de elementos de cualquier tipo que pueden ser modificables. Ejemplos: [1, “ya”, True], [‘lunes’, ‘jueves’, ‘viernes, ‘domingo’] tuple Las tuplas son listas que no se pueden modificar. Se crean con unos valores y no pueden cambiarse. Ejemplos: (1, “ya”, True), (‘lunes’, ‘jueves’, ‘viernes, ‘domingo’) bytes Secuencias de enteros que representa códigos ASCII y que no se pueden modificar. Ejemplos

b'Python is interesting.', b'\x00\x00\x00\x00\x00'. bytearray Similar a bytes pero sí se pueden modificar. Conjuntos set Conjuntos de datos desordenados pero sin repeticiones de elementos. Se pueden modificar. Ejemplos: {3, 5, 1, 7, 4, 10}, {‘lunes’, ‘jueves’} frozenset Similar a set pero no se puede modificar.

Diccionarios dict Permiten almacenar valores a los que se asigna una clave única para acceder. Ejemplos: {'one': 1, 'two': 2, 'three': 3} En este documento nos centraremos en los tipos de datos básicos: números, booleanos y cadenas de texto. En la siguiente unidad podrás conocer el uso de otros tipos de datos como las listas y los diccionarios. Pero si quieres conocer todos los tipos de datos existentes en Python te recomiendo que visites las siguientes páginas web

Escuela de programación - Python Tipos de datos • Tipos de datos (en inglés): https://www.techbeamers.com/python-data-types-learn- basic-advanced • Tipos de datos (en castellano): https://j2logo.com/tag/tiposdatos/

#### 2.1. Números

```python
Python permite representar tres tipos de datos numéricos: enteros, reales y complejos.
```

De hecho, permite operar con tipos distintos de números. Cuando esto ocurre, Python convierte los operandos a uno de los tipos utilizados y realiza el cálculo: • Si hay algún número complejo involucrado, hará las conversiones a este tipo. • Si no hay ningún número complejo pero sí alguno real, hará la conversiones al tipo real.

• Si sólo hay números enteros, no realizará conversiones de tipos.

#### 2.1.1. Números enteros

Los números enteros (int) son aquellos que no tienen parte decimal y pueden expresarse en formato decimal, binario, octal o hexadecimal. En Python no existe una limitación para representar los números enteros, así que, podríamos decir que podemos utilizar cualquier número entero posible en nuestros programas Python. Esto solamente es cierto en la teoría porque en la práctica sí existen limitaciones a la hora de representar números enteros y vienen impuestas por la capacidad del sistema informático que estemos utilizando.

Figura 3: Números enteros decimales Los números binarios, que son secuencias de ceros y unos, se representan anteponiendo un “0b” al número.

Escuela de programación - Python Tipos de datos Figura 4: Números binarios Los números octales, que son secuencias de números del 0 al 7, se representan anteponiendo un “0o” al número. Figura 5: Números octales Los números hexadecimales, que son secuencias de digitos del 0 al 9 y de la letra A a la F, se representan anteponiendo un “0x” al número.

Figura 6: Números hexadecimales

#### 2.1.2. Números reales

Los números reales (float) pueden ser representados en Python con una precisión de hasta 15 decimales. Por defecto, el intérprete convierte los números binarios a su representación decimal. Por defecto, el intérprete convierte los números octales a su representación decimal. Por defecto, el intérprete convierte los números hexadecimales a su representación decimal.

Escuela de programación - Python Tipos de datos Figura 7: Números reales También es posible representar los números reales siguiendo la notación científica. Para ello utilizaremos la letra e o E delante del exponente. Veamos algún ejemplo: Figura 8: Notación científica Cuando expliquemos las funciones de entrada/salida de Python, veremos que es posible mostrar números reales con un determinado número de posiciones decimales. A continuación se puede algún ejemplo

Figura 9: Imprimiendo números reales redondeados En la mayoría de los casos será suficiente trabajar con este tipo de datos pero si necesitamos una mayor precisión, por ejemplo en programación científica u otros ámbitos Separamos la parte entera de la parte decimal con el punto.

Podemos utilizar la e minúscula o mayúscula para indicar el exponente.

Escuela de programación - Python Tipos de datos donde se requiera una representación más fiel de determinadas fracciones de números, podemos utilizar un nuevo tipo disponible a partir de Python 2.4 llamado Decimal. Para saber más sobre el tipo de datos Decimal, te invito a visitar estas páginas web

• Decimal fixed point and floating point arithmetic (en inglés): https://docs.python.org/2/library/decimal.html • Tipo de dato Decimal (en castellano): http://pyspanishdoc.sourceforge.net/whatsnew/node9.html

#### 2.1.3. Números complejos

Los números complejos (complex) en Python son una extensión de los números reales. De hecho, un número complejo es aquel que tiene una parte real y una parte imaginaria y las dos partes en Python son representadas con números reales. Este tipo de números suelen utilizarse en ámbitos científicos y de ingeniería.

Para crear un número complejo en Python podemos utilizar uno de estos procedimientos

- Utilizar la forma parte_real + parte_imaginariaJ. La letra j puede ir en mayúsculas

o minúsculas: Figura 10: Números complejos

- Utilizar el constructor complex(parte_real, parte_imaginaria)

Figura 11: Números complejos

Escuela de programación - Python Tipos de datos Una vez creado un número complejo, podemos acceder de forma independiente a cada una de sus partes utilizando los atributos real e imag, tal y como se ve a continuación: Figura 12: Obtener partes de número complejo

#### 2.2. Booleanos

El tipo de datos booleano (bool) o lógico es aquel que permite representar los valores VERDADERO y FALSO de la lógica binaria. En Python admite dos valores: True y False, equivalentes a VERDADERO y FALSO respectivamente. Realmente, este tipo de datos es un subconjunto del tipo de datos int. El valor True correspondería al número 1 y el valor False correspondería al número 0.

De hecho, todos los objetos de Python son capaces de devolver un valor booleano. Más concretamente, podemos decir que todos los objetos de Python devuelven el valor True excepto en los siguientes casos donde devolverían un valor False: • El objeto False, evidentemente.

• El objeto None que corresponde a un valor nulo, sin asignar. • El valor cero de cualquier tipo de números. • Las secuencias y colecciones vacías, es decir, que no contienen elementos. • Los objetos que implementen el método __bool__() y devuelvan un valor False. • Los objetos que implementen el método __len__() y devuelvan un valor cero.

#### 2.3. Cadenas de texto

El tipo de datos cadena de texto o string (str) se utiliza para representar literales compuestos por caracteres Unicode. Estamos creando la variable “complejo” y asignando el valor del número 12.25+3.8j

Escuela de programación - Python Tipos de datos Al igual que ASCII, Unicode es un estándar de codificación de caracteres. La diferencia fundamental es que ASCII puede representar hasta 27 caracteres mientras que Unicode puede representar hasta 221. De hecho, los 27 primeros caracteres de Unicode se corresponden con los códigos ASCII, así que podríamos decir que Unicode es un supergrupo de ASCII.

Una de las representaciones más comunes de Unicode es UTF-8, aunque existen algunas más. Si quieres saber más sobre este asunto, puedes visitar las siguientes páginas web: • Unicode: https://es.wikipedia.org/wiki/Unicode • UTF-8: https://es.wikipedia.org/wiki/UTF-8 Como ya vimos anteriormente, para representar literales de texto debemos utilizar comillas simples, dobles o triples.

Si consultamos el tipo de datos de una cadena de caracteres, Python nos indica que es str. Figura 13: Ejemplos de "str"

Escuela de programación - Python Tipos de datos

### 3. Operadores

Como ya vimos en un documento anterior, los operadores son símbolos que nos permiten realizar operaciones con objetos de un programa. Dependiendo de la clase a la que pertenezcan dichos objetos, podremos utilizar unos operadores u otros.

#### 3.1. Operadores aritméticos

Los operadores aritméticos permiten realizar las operaciones básicas con números. Operador Descripción Ejemplo + Suma de dos números - Resta de dos números * Multiplicación de dos números / División real (con decimales). // División entera (sin decimales). % Módulo. Calcula el resto de realizar la división entera de dos números.

** Potencia. Toma como base el operando de la izquierda y como exponente el de la derecha.

Escuela de programación - Python Tipos de datos +, - Operadores unarios que representan el signo de un número. El orden de precedencia de estos operadores (de mayor a menor) es el siguiente: • Potencia: ** • Negación: - • Multiplicación, división, división entera y módulo: *, /, //, % • Suma y resta: +, - No obstante, podemos alterar este orden si utilizamos paréntesis. En ese caso, las operaciones de dentro del paréntesis tendrían prioridad sobre el resto. Además, podemos anidarlos y los paréntesis internos se evaluarían antes que los paréntesis externos.

Figura 14: Alteración de la precedencia en operadores aritméticos

#### 3.2. Operadores de comparación

Los operadores de comparación sirven para comparar dos valores entre sí (de cualquier tipo) y siempre devuelven un valor booleano (True o False). Se recogen en la siguiente tabla: Operador Descripción Ejemplo == Igualdad. Devuelve True si los operandos son iguales. != Desigualdad. Devuelve True si los operandos son distintos.

Escuela de programación - Python Tipos de datos > Mayor. Devuelve True si el operando de la izquierda es mayor que el de la derecha. >= Mayor o igual. Devuelve True si el operando de la izquierda es mayor que el de la derecha o son iguales. < Menor. Devuelve True si el operando de la izquierda es menor que el de la derecha.

<= Menor o igual. Devuelve True si el operando de la izquierda es menor que el de la derecha o son iguales. Los operadores de comparación tienen todos el mismo nivel de precedencia, así que se evalúan de izquierda a derecha. Figura 15: Precedencia relacionales

#### 3.3. Operadores de asignación

El operador de asignación por excelencia es el = y se utiliza para asignar a la variable de la izquierda el valor de la derecha. Figura 16: Operador de asignación "=" hola mundo numero texto

Escuela de programación - Python Tipos de datos Este operador no hay que confundirlo con el = de Matemáticas que se utiliza pa ra comparar dos valores. Para ello, disponemos en Python del operador ==, como ya vimos anteriormente. Figura 17: = versus == Existen otros operadores de asignación que permiten realizar una operación aritmética utilizando como operando el valor de la variable y después asignarle el valor del resultado de la operación a la misma variable. De esa manera podemos realizar dos operaciones en una: una operación aritmética y una operación de asignación.

En la siguiente tabla se recogen algunos de estos operadores y su equivalencia: Operador Equivalencia Ejemplo += Dada la instrucción: x += 1 su equivalencia sería: x = x + 1 -= Dada la instrucción: x -= 1 su equivalencia sería: x = x - 1 *= Dada la instrucción: x *= 1 su equivalencia sería: x = x * 1 /= Dada la instrucción: x /= 1 su equivalencia sería: x = x / 1 //= Dada la instrucción: x //= 1 su equivalencia sería: x = x // 1 %= Dada la instrucción: x %= 1 su equivalencia sería: x = x % 1 **= Dada la instrucción: x **= 1 su equivalencia sería: x = x ** 1

Para entender los ejemplos anteriores, recuerda que el símbolo “;” se puede utilizar para escribir varias instrucciones de Python en la misma línea.

Escuela de programación - Python Tipos de datos Por último, hablaremos de la asignación múltiple. Python permite realizar varias asignaciones de valores en una misma operación. Esto se consigue escribiendo una lista de variables a la izquierda del operador y una lista de valores a su derecha. La asociación variable-valor se realiza por posición. Es decir, la primera variable recibe el primer valor, la segunda variable recibe el segundo y así consecutivamente.

Figura 18: Asignaciones múltiples

#### 3.4. Operadores booleanos

Los operadores booleanos se utilizan sobre valores o expresiones booleanas y sólo son tres: and (y lógico), or (o lógico), not (negación lógica). La primera idea sería pensar que estos operadores siempre devuelven valores lógicos, es decir, True o False. Pero lo cierto es que no funcionan exactamente así. Puedes verlo en la siguiente tabla.

Operador Descripción Ejemplo and Dada la expresión: op1 and op2 Si op1 es False entonces devuelve op1 sino devuelve op2. Sólo se evalúa op2 si op1 es True. En este caso las tres variables serán de tipo int. En este caso la primera variable será de tipo str y la segunda de tipo int.

Escuela de programación - Python Tipos de datos or Dada la expresión: op1 or op2 Si op1 es False entonces devuelve op2 sino devuelve op1. Sólo se evalúa op2 si op1 es False. not Dada la expresión: not op1 Si op1 es True entonces devuelve False sino devuelve True. Dentro de los operadores booleanos, el orden de precedencia de mayor a menor es el siguiente: not, and, or.

Al igual que con los operadores aritméticos, los paréntesis pueden alterar la asociatividad de los operadores booleanos. Figura 19: Alteración precedencia de los operadores booleanos

#### 3.5. Operadores de identidad

Los operadores de identidad comprueban si dos variables referencian al mismo objeto o no y son dos: is, is not. No hay que confundir el operador de pertenencia is con el operador de comparación ==. Mientras el primero comprueba si dos variables referencian al mismo objeto, el segundo comprueba si el valor de los objetos referenciados es el mismo. Para entenderlo mejor,

Escuela de programación - Python Tipos de datos podríamos decir que el operador is se basa en la identidad del objeto (función id()) mientras que el operador == se basa en el valor que contiene. Veamos algunos ejemplos. Ejemplo 1: Si dos variables referencian al mismo valor numérico, su identidad es la misma y coinciden los resultados de los operadores == e is.

Figura 20: Comparamos "is" y "=="

Ejemplo 2: De igual forma, si dos variables referencian a la misma lista de elementos (conjuntos ordenados de elementos homogéneos o heterogéneos) entonces sus valores e identidades coincidirán. Figura 21: Comparamos "is" y "==" Ejemplo 3: Pero si dos variables referencian a distintas listas que contienen los mismos valores, los objetos creados son distintos, así que los valores serán los mismos pero las identidades no.

Las dos variables almacenan el mismo valor. Las dos variables referencian al mismo objeto. Las dos variables referencian al mismo objeto, así que contienen los mismos elementos. Los valores son iguales y la identidad también. De hecho, si cambiamos un elemento de la lista a, cambia la lista b.

Escuela de programación - Python Tipos de datos Figura 22: Comparamos “is” y “==”

#### 3.6. Operaciones sobre cadenas

En este apartado veremos algunas operaciones específicas que se pueden realizar sobre las cadenas de texto.

#### 3.6.1. Acceso a los elementos de una cadena

Como ya hemos dicho, las cadenas son una secuencia de caracteres que están ordenados. Dichos caracteres ocupan las posiciones 0, 1, 2,…, longitud-1. La cadena “HOLA MUNDO” tiene 10 caracteres y la posición de cada uno de ellos se puede ver la siguiente tabla: H O L A M U N D O A la posición de un elemento dentro de una cadena se le suele conoce como índice y podemos acceder a cada carácter utilizando dicho índice y el operador [].

De hecho, si cambiamos un elemento de la lista a, no cambia la lista b. Cada variable referencia a un objeto distinto, aunque contengan los mismos elementos. Los valores son iguales pero la identidad no.

Escuela de programación - Python Tipos de datos Figura 23: Accediendo a los elementos de una cadena Hasta ahora hemos visto como acceder a los elementos de una cadena de forma individual pero también podemos extraer una porción de la misma. Es lo que se conoce como una rebanada o slice.

Para ello utilizamos una expresión similar a nombre_cadena[inicio : fin+1] donde inicio será el índice del primer carácter que queremos extraer y fin será el índice del último carácter que queremos extraer. Veamos algunos ejemplos con la siguiente cadena: “Buenos días”.

B u e n o s d í a s Figura 24: Extrayendo subcadenas Si utilizamos un índice incorrecto, se produce un error. Queremos los caracteres desde el 3 hasta el 5 (= 6-1). Si no indicamos inicio se entiende que es 0. Si no indicamos fin se entiende que es el último elemento. Queremos todos los elementos de la cadena.

Escuela de programación - Python Tipos de datos Podemos ir un paso más allá y extraer elementos saltándonos algunos de ellos. En ese caso utilizamos la expresión nombre_cadena[inicio : fin+1 : salto] donde salto será el número que le sumaremos al índice actual para obtener el siguiente elemento.

Figura 25: Saltando caracteres

#### 3.6.2. Comparación de cadenas

Gracias a que los caracteres siguen una codificación, podemos establecer un orden entre ellos. Los que tienen una codificación con un número menor en Unicode se entiende que son más pequeños que los que tienen asignado un número mayor. La función predefinida ord() nos devuelve el número Unicode de un carácter.

Utilizando los operadores de comparación podemos saber si una cadena de caracteres es más pequeña que otra. Para ello tenemos que tener en cuenta los siguientes puntos: • Se comparan entre sí los caracteres que ocupan la misma posición y empezando desde el 0 hasta el final de las cadenas.

• El carácter cuyo valor devuelto por ord() es menor, se entiende que es el menor. • Si todos los caracteres coinciden, la cadena más corta es la menor. Veamos algunos ejemplos. Ejemplo 1: La función ord() decide quién es menor. Figura 26: Comparando caracteres En Unicode, las mayúsculas son más pequeñas que las minúsculas.

Otra forma de extraer todos los elementos de una cadena.

Escuela de programación - Python Tipos de datos Ejemplo 2: La cadena más corta es la menor. Figura 27: Comparando cadenas Ejemplo 3: “Rocío Jurado” es... la más grande. Figura 28: Quién es la más grande

#### 3.6.3. Concatenando cadenas

El operador + permite concatenar dos cadenas entre sí. Así, dadas dos cadenas, podremos obtener una cadena compuesta por los elementos ordenados de la primera cadena seguidos de los elementos ordenados de la segunda. Figura 29: Concatenando dos cadenas Figura 30: Concatenando tres cadenas

#### 3.6.4. Repitiendo cadenas

Con el operador * podemos repetir la misma cadena tantas veces como queramos.

Escuela de programación - Python Tipos de datos Figura 31: Repitiendo una cadena

#### 3.6.5. Operador de pertenencia

Si queremos saber si una cadena forma parte de otra, podemos utilizar el operador de pertenencia in. Figura 32: Subcadenas Podemos buscar un carácter o varios. Podemos buscarlos desde el principio o por el medio.

Escuela de programación - Python Tipos de datos

### 4. Conversión de tipos

Muchas clases en Python permiten realizar conversiones entre distintos tipos de datos. Por ejemplo, la clase int permite utilizar su constructor para convertir cadenas de texto o reales a enteros. Ejemplo 1: Convertimos de otros tipos a tipo int. Figura 33: De "str" a "int"

Figura 34: De "float" a "int" De la misma manera podemos convertir cadena a números reales (siempre que estén bien formadas), o incluso números y cadenas a valores lógicos. Ejemplo 2: Convertimos una cadena de texto que contiene un número real a float. Figura 35: De "str" a "float"

Si la cadena no contuviese un número bien formado, la conversión de tipos daría un error.

Escuela de programación - Python Tipos de datos Ejemplo 3: Convertimos dos números a valores lógicos. Figura 36: Es un cero

Figura 37: No es un cero Esto es sólo una pequeña introducción a la conversión de tipos. Si quieres ampliar la información, puedes visitar las siguientes páginas web: • Type conversión and casting (en inglés): https://www.programiz.com/python- programming/type-conversion-and-casting

Escuela de programación - Python Tipos de datos

### 5. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Curso de Python de Teachbeamers: https://www.techbeamers.com/ • Tipos de operadores en Python: https://j2logo.com/python/tutorial/operadores-en- python/ • Programación en Python: https://entrenamiento-python-basico.readthedocs.io • «Curso de Programación en Python», José Luis Tomás Navarro.

---

# 1.4 Funciones integradas

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Funciones integradas Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Funciones integradas CONTENIDO

- Introducción.....................................................................................................................................2
- Operaciones con números................................................................................................................3

2.1. Valor absoluto: abs()................................................................................................................3 2.2. División y módulo de la división entera: divmod().................................................................3 2.3. Potencia de un número: pow().................................................................................................4 2.4. Redondeando números: round()...............................................................................................4

- Valor mínimo y máximo: min() y max().........................................................................................5
- Conversiones entre sistemas numéricos..........................................................................................6
- Longitud de un objeto......................................................................................................................7
- Funciones de entrada/salida.............................................................................................................7

6.1. Función de entrada de datos: input()........................................................................................7 6.1.1. Funciones lower() y upper().............................................................................................8 6.2. Función de salida de datos: print()...........................................................................................9 6.2.1. Uso del operador %........................................................................................................10 6.2.2. Formatear cadenas con format().....................................................................................11 6.2.3. Uso de las f-cadenas.......................................................................................................13

- Fuentes de información.................................................................................................................13

Escuela de programación - Python Funciones integradas

### 1. Introducción

El intérprete de Python dispone de funciones integradas o predefinidas que podemos utilizar en cualquiera de nuestros programas y sin necesidad de importar ningún módulo extra. En inglés se les conoce como “Built-in Functions” y son las que aparecen en la siguiente tabla

Figura 1: Font: https://docs.python.org/3/library/functions.html Estas funciones y otros identificadores predefinidos de Python puedes encontrarlos en el módulo builtins aunque no suele ser habitual importar este módulo en los programas ya que se puede acceder a sus elementos directamente.

Entre las funciones anteriores podemos encontrar funciones matemáticas (como abs, divmod, hex, max, pow o round), funciones de conversión de tipos (bool, dict, float, int, list, str), funciones de caracteres (ascii, chr, format, repr, ord), funciones de entrada/salida (input, print) y otras específicas de determinados elementos (map, zip, super).

Algunas de estas funciones ya las hemos visto durante el curso, otras las iremos explicando conforme vayamos conociendo los distintos elementos del lenguaje.

Escuela de programación - Python Funciones integradas En este documento presentaremos algunas de las funciones generales que pueden ser más útiles o interesantes.

### 2. Operaciones con números

Aunque ya hemos visto que existen operadores para trabajar con números, Python también nos ofrece algunas funciones predefinidas para trabajar con números.

#### 2.1. Valor absoluto: abs

La función abs() devuelve el valor absoluto de un número entero o real. Si se pasa un número complejo entonces la función devolverá la magnitud1 del mismo. Figura 2: Valor absoluto de enteros y reales Figura 3: Valor absoluto de números complejos

#### 2.2. División y módulo de la división entera: divmod

La función divmod() nos permite obtener la división entera y el resto de una división entre números enteros o reales. El resultado es una tupla que contiene los dos elementos calculados. Fórmula de la magnitud, módulo o valor absoluto de un número complejo: Una tupla es una lista de elementos de cualquier tipo que es inmutable. Es decir, una vez que se ha creado, no se puede modificar. Un uso muy común es como mecanismo de devolución de valores por parte de una función, como en este caso.

Las tuplas tienen el formato (elem1, elem2, elem3) donde elem1, elem2 y elem3 son los elementos que la componen. Para saber más sobre tuplas, puedes visitar las siguientes páginas web

- Python Tuples (inglés): https://realpython.com/python-lists-tuples/#python-tuples
- Tuplas en Python (castellano): https://j2logo.com/python/tutorial/tipo-tuple-python/

Escuela de programación - Python Funciones integradas El uso de la función divmod(a, b) es similar a la siguiente expresión: (a // b, a % b). Veamos varios ejemplos: Figura 4: Uso de divmod para enteros

Figura 5: Uso de divmod() para reales

#### 2.3. Potencia de un número: pow

La función predefinida pow() tiene dos comportamientos ligeramente diferentes según el número de parámetros que le pasemos: • pow(base, exponente) es equivalente a base ** exponente. • pow(base, exp, módulo) es equivalente a la expresión (base ** exp) % módulo. Figura 6: Potencia de un número Figura 7: Módulo de la potencia

#### 2.4. Redondeando números: round

La función round() se utiliza para redondear un número real a un número de decimales determinado. El formato es el siguiente: round(número [, precisión]) Hay que tener en cuenta los siguientes puntos: • Si no se especifica la precisión, el número se redondea al entero más próximo.

• El redondeo se realiza al digito más próximo pero si se trata de un 5 entonces se redondea al digito par más próximo. Esto es así en teoría, pero en determinados casos no se cumple esta regla debido a que determinadas fracciones no se pueden representar exactamente en Python sino como una aproximación.

Escuela de programación - Python Funciones integradas Figura 8: Redondeo por defecto Figura 9: Redondeo con precisión

### 3. Valor mínimo y máximo: min y max

Las funciones min() y max() devuelven el elemento menor y mayor, respectivamente, de una lista de elementos numéricos o de otro tipo. Dicha lista de elementos se puede especificar directamente en los argumentos de la función o pasando un objeto de tipo secuencia, por ejemplo: cadenas de texto, tuplas o listas.

Una lista es similar a una tupla, con la diferencia de que las listas sí son modificables. Es decir, una vez creadas, podemos añadirles y borrarles elementos. Las listas tienen el formato [elem1, elem2, elem3] donde elem1, elem2 y elem3 son los elementos que la componen. Veremos más cosas sobre las listas en una unidad posterior.

Escuela de programación - Python Funciones integradas Figura 10: Ejemplos de uso min()

Figura 11: Ejemplo de uso max()

### 4. Conversiones entre sistemas numéricos

Existen tres funciones predefinidas que nos permiten convertir un número entero a formato hexadecimal, octal o binario. Son hex(), oct() y bin() respectivamente. El uso básico es muy sencillo. Simplemente hay que pasar como argumento el número entero que queremos convertir y la función devolverá la cadena de texto equivalente.

Figura 12: Conversiones del 255 Figura 13: Conversiones del nº 45

Podemos indicar a las funciones el formato de salida del número. Por ejemplo, si queremos que aparezca o no el indicativo ‘0b’, ‘0o’ o ‘0x’ o, incluso, si queremos que las letras de los dígitos aparezcan en mayúsculas. A continuación puedes ver algunos ejemplos.

Escuela de programación - Python Funciones integradas Figura 14: Uso de “format” para la conversión numérica Para conocer las posibilidades del formateo de funciones puedes visitar la siguiente página web: https://python-docs-es.readthedocs.io/es/3.8/library/functions.html#format

### 5. Longitud de un objeto

Cuando queremos conocer el número de elementos de un objeto o longitud podemos utilizar la función len(). A esta función se le puede pasar una secuencia (por ejemplo: una cadena, una lista o una tupla) o una colección de elementos (por ejemplo: un diccionario o un conjunto de datos).

Figura 15: Uso de la función len()

### 6. Funciones de entrada/salida

#### 6.1. Función de entrada de datos: input

Para solicitar datos por teclado al usuario podemos utilizar la función input(). Cuando se ejecuta esta función, el programa queda esperando que el usuario introduzca una cadena de texto por teclado y pulse la tecla Intro/Enter.

Escuela de programación - Python Funciones integradas Figura 16: Uso básico de input() Es muy usual pasar un parámetro a la función input() con un texto indicativo del valor que estamos esperando que introduzca el usuario. Figura 17: Uso de input() con enunciado ¿Y si queremos leer datos distintos de cadenas de texto? ¿Cómo pedimos números al usuario? En ese caso, debemos hacer uso de las funciones de conversión de tipos y convertir el texto leído por input() al tipo que necesitemos.

Figura 18: Petición de números por teclado Si se pide un número de un tipo determinado y se introduce otro tipo, la función de conversión dará un error. Figura 19: Error en el tipo de dato introducido

#### 6.1.1. Funciones lower y upper

Estas dos funciones (lower y upper) no forman parte de las funciones integradas de

```python
Python pero sí pertenecen al tipo de datos str y pueden ser muy útiles cuando queremos
```

El usuario introduce un texto y pulsa la tecla Intro/Enter. Dicho texto se asigna a la variable de la izquierda.

Escuela de programación - Python Funciones integradas pedir datos por pantalla al usuario porque convierten toda una cadena de texto a minúsculas o mayúsculas, respectivamente. Figura 20: Uso de las funciones lower() y upper()

#### 6.2. Función de salida de datos: print

La función print() permite mostrar información por pantalla al usuario. Podemos imprimir cadenas de texto, números, valores lógicos, etc. Figura 21: Uso básico print() Si queremos imprimir más de un dato por pantalla, podemos indicarlos en orden y separados por una “,”.

Figura 22: Imprimir varios datos Podemos combinar cadenas de texto con números separándolos por comas o componiendo la cadena de texto completa haciendo uso del operador de concatenación + y la función de conversión str(). Fíjate que en el primer caso no es necesario incluir los espacios que separan elementos porque lo hace la función print() automáticamente pero en el segundo caso sí debemos incluirlos.

La función print() introduce un salto de línea después del texto mostrado. Si no queremos que actúe así, debemos incluir el argumento end=””. Por defecto, se separa cada dato por un espacio. Si queremos indicar el texto de separación entre elementos, debemos utilizar sep=”separación”.

Escuela de programación - Python Funciones integradas Figura 23: ddd Aunque hemos visto que por defecto la función print() imprime los datos por pantalla, lo cierto es que también permite seleccionar otro flujo de texto (por ejemplo, un fichero de texto) e incluso seleccionar si queremos que la salida sea en buffer o no. De hecho, la sintaxis completa de la función es la que se muestra a continuación

print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) Para saber más sobre las posibilidades de print() puedes visitar esta página web: https://python-docs-es.readthedocs.io/es/3.8/library/functions.html#print Podemos dar un paso más y dar formato personalizado a los datos que queremos mostrar con print(). Por ejemplo, puede venir muy bien cuando queremos mostrar números reales indicando el nivel de precisión o queremos alinear los datos en pantalla.

Aquí veremos varias maneras de formatear la salida, pero puedes profundizar en este punto visitando las siguientes páginas web: •

```python
Python String Formatting Best Practices (en inglés): https://realpython.com/python-
```

string-formatting/#1-old-style-string-formatting-operator • Entrada y salida (en castellano): https://docs.python.org/es/3/tutorial/inputoutput.html#the-string-format-method

#### 6.2.1. Uso del operador %

Con el operador % podemos crear cadenas de texto donde colocaremos caracteres especiales que se sustituirán automáticamente por valores. Habrá que pasar tantos valores como caracteres de sustitución hayamos incluido en la cadena de texto. Figura 24: Uso básico del operador %

Escuela de programación - Python Funciones integradas Para entender los ejemplos anteriores hay que tener en cuenta lo siguiente: • El símbolo %s se sustituirá por una cadena de texto. • El símbolo %d se sustituirá por un número entero. • El símbolo %.2f se sustituirá por un número real que mostrará sólo dos decimales.

• Después de la cadena de texto del print() escribimos el símbolo % seguido de una tupla con tantos valores como símbolos de sustitución hayamos incluido. Se asignará el primer valor de la tupla al primer carácter de sustitución y así sucesivamente. ◦Si sólo se ha de pasar un valor, se pueden omitir los paréntesis de la tupla y pasar el valor directamente.

Figura 25: Paso de un solo valor También podemos realizar las sustituciones por nombre y no por posición dentro de la cadena. Fíjate que detrás de cada símbolo % aparece el nombre del valor entre paréntesis. Figura 26: Usando % con nombres A este tipo de formateo de cadenas se le conoce como estilo antiguo ya que en las nuevas versiones de Python han aparecido maneras diferentes de realizar estas tareas.

No obstante, si quieres conocer toda la potencialidad de este operador, puedes visitar la siguiente página web: • String formatting operations (en inglés): https://docs.python.org/2/library/stdtypes.html#string-formatting

#### 6.2.2. Formatear cadenas con format

En Python 3, tanto la función predefinida format() como el método format() de la clase str se pueden utilizar para dar formato a las cadenas de texto de print(). De hecho, ésta es

Escuela de programación - Python Funciones integradas la forma recomendada por el equipo de desarrolladores de Python para el formateo de cadenas frente al estilo antiguo visto en el apartado anterior. En este apartado nos centraremos en el método format() de la clase str.

La diferencia fundamental entre el % y la nueva forma es que ahora utilizamos {} para indicar las cadenas de sustitución y estas incluyen las opciones de formateo dentro. Con el nuevo estilo se pueden realizar las mismas tareas que con el antiguo, como se puede ver en el siguiente ejemplo

Figura 27: Uso básico de {} Además, podemos indicar el número de orden de aparición de los valores (incluso de forma desordenada), así como repetirlos varias veces. Figura 28: Utilizando el orden de aparición Y también podemos realizar sustituciones por nombre, como se puede ver en el siguiente ejemplo

Figura 29: Sustitución de valores por nombre Para aprender más posibilidades de este tipo de formateo, te invito a visitar la siguiente páginas web: • Formateo de cadenas especializado (en castellano): https://docs.python.org/es/3/library/string.html#string-formatting

Escuela de programación - Python Funciones integradas

#### 6.2.3. Uso de las f-cadenas

A partir de la versión 3.6 de Python disponemos del uso de las f-cadenas (f-strings en inglés) que permiten incluir expresiones de Python dentro de cadenas de texto utilizando el formato {expresión}. Las f-cadenas deben ir precedidas de la letra f o F. Figura 30: Uso básico de f-cadenas Dentro de las mismas se pueden incluir indicaciones de formato, de la forma habitual.

Figura 31: Indicamos el formato del número real Para conocer más sobre este tipo de formateo, puedes visitar las siguientes páginas web: • f-cadenas (en castellano): https://docs.python.org/es/3/tutorial/inputoutput.html#formatted-string-literals • f-strings (en inglés): https://realpython.com/python-string-formatting/#3-string- interpolation-f-strings-python-36

### 7. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Real Python: https://realpython.com/

---

# 1.5 Módulos, paquetes y namespaces

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Módulos, paquetes y namespaces Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Módulos, paquetes y namespaces CONTENIDO

- Módulos y paquetes.........................................................................................................................2
- Cómo importar un módulo completo..............................................................................................2

2.1. El módulo “this”......................................................................................................................4 2.2. Importar módulos en el intérprete de Python...........................................................................5

- Namespaces y alias..........................................................................................................................5
- Importar elementos sueltos de un módulo.......................................................................................7
- Importar todos los elementos sin namespace..................................................................................8
- Fuentes de información...................................................................................................................8

Escuela de programación - Python Módulos, paquetes y namespaces

### 1. Módulos y paquetes

Cuando queremos crear un programa en Python, tenemos que crear un fichero de texto plano con extensión .py. Cada uno de estos ficheros es considerado un módulo en Python. Para organizar nuestros módulos podemos crear paquetes. Un paquete no es más que una carpeta donde tenemos almacenados ficheros .py y un fichero de inicio llamado __init__.py (__ con dos guiones bajos seguidos). Dicho fichero de inicio puede estar vacío.

Los paquetes, a su vez, pueden contener otros paquetes en su interior. En ese caso les llamaremos subpaquetes. Aún así, pueden existir módulos que no pertenezcan a ningún paquete. En la siguiente imagen podemos ver una posible organización de módulos y paquetes: Figura 1: Ejemplo jerarquía de módulos

### 2. Cómo importar un módulo completo

Todos los elementos (variables, funciones, clases, etc.) que contiene un módulo pueden ser importados desde otros módulos o desde el intérprete. De esta forma podremos utilizarlos sin necesidad de definirlos de nuevo. El nombre que utilizaremos para importar los elementos de un módulo será el nombre del fichero .py sin la extensión.

Para importar un módulo debemos utilizar la palabra reservada import seguida del nombre del módulo y de la jerarquía de paquetes a la que pertenezca

Escuela de programación - Python Módulos, paquetes y namespaces import nombre_modulo import paquete.nombre_modulo import paquete.subpaquete.nombre_modulo El módulo debe encontrarse en la misma carpeta desde la que estemos ejecutando el comando anterior o Python dará un error.

Figura 2: Error porque no se encuentra el módulo del "import" Dada la jerarquía de paquetes vista arriba, veamos cómo podríamos importar distintos módulos: import modulo1 import paquete1.modulo1.2 import paquete1.subpaquete1.modulo1.1.2 Si estamos importando un módulo desde el intérprete de Python, podemos utilizar la función dir() para averiguar los elementos que contiene.

Figura 3: Entramos en la carpeta adecuada Figura 4: Importamos el módulo Nos posicionamos en la carpeta que contiene el módulo a importar. Recuerda que desde el intérprete IPython3 podemos ejecutar comandos del sistema operativo. Importamos el módulo.

Escuela de programación - Python Módulos, paquetes y namespaces Figura 5: Uso de la función dir()

#### 2.1. El módulo “this”

Si entramos en el intérprete de Python y ejecutamos la instrucción import this, podremos leer (en inglés) “The Zen of Python” by Tim Peters. Tim Peters es uno de los desarrolladores más importantes del lenguaje Python y en este texto ser recogen 19 de los principios para escribir código en Python.

Figura 6: The Zen of Python, by Tim Peters La función dir() muestra todos los elementos del módulo. Los que aparecen al final son los definidos por el programador.

Escuela de programación - Python Módulos, paquetes y namespaces Algunos de los principios que podemos resaltar son los siguientes: • Bello es mejor que feo • Explícito es mejor que implícito • Simple es mejor que complejo • La legibilidad cuenta • Los errores nunca deberían dejarse pasar silenciosamente • Los namespaces son una gran idea. ¡Hagamos más de estas cosas!

Te recomiendo que dediques unos minutos a leer todos los principios y a entender su significado porque encierra unas recomendaciones generales de buenas prácticas en Python. Para ello, puedes leer la siguiente página web donde se explican (en castellano) uno a uno estos principios acompañados de ejemplos: https://pybaq.co/blog/el-zen-de- python-explicado/

#### 2.2. Importar módulos en el intérprete de Python

Hay que tener en cuenta que cada vez que se sale del intérprete de comandos de Python y se vuelve a entrar en él, debemos volver a importar todos los módulos que necesitemos. Además, si hemos importado un módulo que ha sido modificado después, por ejemplo porque sea un módulo que estamos desarrollando nosotros, tenemos dos opciones para recargar la nueva versión

- Salir y volver del intérprete. Realizar otra vez el import del módulo. Esto supondría

perder el import del resto de módulos que estemos utilizando en esto momentos.

- Ejecutar la siguiente línea de instrucciones que utiliza un comando de la librería

importlib y nos permite recargar un módulo: import importlib; importlib.reload(nombre_modulo) Figura 7: Recargamos el módulo "paquete1.modulo11"

### 3. Namespaces y alias

Cuando hemos importado un módulo y queremos utilizar algún elemento del mismo, debemos utilizar su namespace seguido de un punto y el nombre del elemento que

Escuela de programación - Python Módulos, paquetes y namespaces queremos utilizar. El namespace no es más que el nombre que hemos indicado después del import. Figura 8: Uso del namespace Si el nombre del namespace es muy largo, como en el caso anterior, puede ser incómodo de utilizar. En ese caso, podemos definir un alias para utilizarlo en su lugar. Así, cada vez que queramos acceder a un elemento del namespace podemos anteponer el nombre del alias en lugar del nombre del namespace completo. El efecto es el mismo.

Para definir un alias debemos utilizar la palabra as seguida del nombre elegido al final del comando import. import nombre_modulo as alias Figura 9: Utilizar un "alias" para un "namespace" El namespace es paquete1.modulo11 y la función resta() es el elemento que queremos utilizar.

Escuela de programación - Python Módulos, paquetes y namespaces

### 4. Importar elementos sueltos de un módulo

En algunas ocasiones nos puede interesar importar sólo algunos elementos de un módulo y no el módulo completo. En ese caso, debemos indicar el elemento a importar o una lista de elementos separados por coma, tal y como se muestra a continuación

```python
from nombre_modulo import elemento
from nombre_modulo import elemento1, elemento2, …, elementon
```

A partir de entonces, podemos utilizar al nombre del elemento directamente en el programa sin necesidad de anteponer el namespace correspondiente. Figura 10: Uso de "from" en un "import" Esto puede suponer un problema si varios elementos de módulos distintos tienen el mismo nombre.

Figura 11: Elemento del paquete1.modulo11 Figura 12: Elemento del paquete2.modulo21 La solución pasa por definir un alias a los elementos para poder diferenciarlos entre sí.

Escuela de programación - Python Módulos, paquetes y namespaces Figura 13: Definir alias para elementos de un módulo

### 5. Importar todos los elementos sin namespace

También es posible importar todos los elementos de un módulo sin necesidad de tener que utilizar el namespace, utilizando la siguiente sintaxis: from nombre_modulo import * Ejemplo: Figura 14: Ejemplo de import * Esto que, a priori, puede parecer muy cómodo también puede llegar a hacer ilegible el programa porque no tenemos la certeza de en qué módulo se encuentra cada elemento.

No obstante, puede ser muy útil a la hora de hacer pruebas de funciones u otros elementos de un módulo desde el intérprete de Python. Para conocer más sobre los módulos, paquetes y namespaces, puedes visitar la siguiente página web: https://docs.python.org/3/tutorial/modules.html ç

### 6. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Módulos: https://docs.python.org/3/tutorial/modules.html • Módulos, paquetes y namespaces: https://uniwebsidad.com/libros/python/capitulo

Escuela de programación - Python Módulos, paquetes y namespaces • El Zen de Python explicado: https://pybaq.co/blog/el-zen-de-python-explicado/ • «Curso de Programación en Python», José Luis Tomás Navarro.

---

# 1.6 Estructuras de control

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Estructuras de control Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Estructuras de control CONTENIDO

- Introducción.....................................................................................................................................2
- Instrucciones alternativas: if, else, elif............................................................................................3

2.1. Instrucciones if anidadas..........................................................................................................4 2.2. Uso de la sentencia elif............................................................................................................6

- Instrucciones repetitivas: while, for................................................................................................7

3.1. Bucle while..............................................................................................................................8 3.2. Bucle for..................................................................................................................................9 3.2.1. Función range()..............................................................................................................10 3.2.2. Función zip()..................................................................................................................11

- Otras instrucciones: break, continue, pass.....................................................................................12
- Anidación de sentencias................................................................................................................13
- Fuentes de información.................................................................................................................14

Escuela de programación - Python Estructuras de control

### 1. Introducción

Hasta el momento hemos estado trabajando con bloques de instrucciones que se ejecutaban todas y cada una de ellas y, además, en el mismo orden en el que estaban escritas.

### 1. Instrucción 1

### 2. Instrucción 2

### 3. Instrucción 3

Pero, ¿y si no queremos ejecutar siempre las mismas instrucciones? ¿Y si queremos ejecutar el mismo bloque de instrucciones más de una vez? Para dar respuestas a estas necesidades aparecen las instrucciones alternativas y las instrucciones repetitivas. Todas las instrucciones que hemos ido presentando hasta ahora son instrucciones simples pero las que veremos a continuación son instrucciones compuestas ya que contienen otras instrucciones (simples o compuestas) en su interior. Veamos un ejemplo

SI HOY ES DOMINGO: NO SUENA EL DESPERTADOR DESAYUNO CHOCOLATE CON BUNYOLS PASEO POR LA PLAYA SINO: SUENA EL DESPERTADOR VOY AL TRABAJO El bloque de instrucciones del interior de una instrucción compuesta se conoce como cuerpo y la sentencia o cláusula que indica cuando se ejecutará el cuerpo de instrucciones se conoce como encabezado.

SI HOY ES DOMINGO: NO SUENA EL DESPERTADOR DESAYUNO CHOCOLATE CON BUNYOLS PASEO POR LA PLAYA Las instrucciones del interior de la instrucción compuesta deben aparecer indentadas a la derecha. Las instrucciones del interior de la instrucción compuesta deben aparecer indentadas a la derecha.

Instrucción compuesta ENCABEZADO CUERPO

Escuela de programación - Python Estructuras de control

### 2. Instrucciones alternativas: if, else, elif

Las instrucciones alternativas permiten ejecutar un bloque de instrucciones una sola vez siempre y cuando se cumpla una determinada condición. Para indicar cuál es la condición que se debe cumplir, utilizaremos una expresión lógica, es decir, una instrucción que devolverá verdadero o falso al ser evaluada.

Las instrucciones alternativas comienzan por la palabra if (si en castellano). A continuación podemos ver su estructura más sencilla: if condición: instrucción₁ instrucción₂ ... instrucciónn Figura 1: Ejemplos de uso básico de "if" Cuando la condición es una variable booleana, no siempre es necesario escribir la comparación con el valor lógico True. Los siguientes bloques de instrucciones serían equivalentes

Figura 2: Comparando con el valor “True”

Figura 3: Sin comparar con el valor “True” Los : son obligatorios después de la condición o expresión lógica. Si la condición se evalúa a True, se ejecutarán todas las instrucciones del cuerpo. En otro caso, no se ejecutará ninguna. Condiciones que deben cumplirse para que se ejecute el bloque de instrucciones del cuerpo.

Escuela de programación - Python Estructuras de control En los casos anteriores sólo hemos indicado qué hacer cuando una condición es cierta. Pero, ¿y si queremos indicar qué hacer cuando no se cumpla dicha condición? En ese caso, añadiremos una cláusula else (si no en castellano).

if condición: instrucción1.1 ... instrucción1.n else: instrucción2.1 ... instrucción2.m Figura 4: Ejemplo usos básicos de if-else Hasta ahora hemos utilizado instrucciones alternativas con sólo dos caminos posibles, pero ¿y si necesitásemos construir una instrucción alternativa con muchos más caminos? En ese caso podemos construir una estructura compleja con varias instrucciones if anidadas o hacer uso de la cláusula elif. Veamos cada caso.

#### 2.1. Instrucciones if anidadas

Las instrucciones alternativas pueden anidarse, es decir, podemos incluir nuevas instrucciones alternativas dentro del cuerpo de otra instrucción alternativa. Los : son obligatorios después de la palabra else. Si la condición se evalúa a True, se ejecutarán todas las instrucciones del cuerpo de este bloque.

Si la condición se evalúa a False, se ejecutarán todas las instrucciones de este bloque. Cuando seguir == ‘N’ Cuando num >= 5

Escuela de programación - Python Estructuras de control En el siguiente ejemplo se puede ver cómo utilizar sentencias if anidadas para traducir a texto la nota numérica obtenida en un ejercicio. A la izquierda se muestra el código y a la derecha el resultado de algunas ejecuciones del programa.

Figura 5: Uso de if anidadas EJECUCIONES PROGRAMA: No siempre es necesario utilizar la cláusula else en todas las sentencias if anidadas. Figura 6: Ejemplo “if” anidadas sin todos los “else” EJECUCIONES PROGRAMA

Escuela de programación - Python Estructuras de control

#### 2.2. Uso de la sentencia elif

La palabra reservada elif es una contracción de las palabras else if y se utiliza para construir sentencias if que permitan múltiples camino. La ventaja con respecto a las sentencias if anidadas, vistas en el apartado anterior, es que conseguimos un código mucho más compacto.

if condición1: instrucción1.1 ... instrucción1.n elif condición2: instrucción2.1 ... instrucción2.m ... elif condiciónp: instrucciónp.1 ... instrucciónp.q Podemos reescribir el ejemplo de la Figura 5 y la ejecución del programa no cambiaría. Figura 7: Uso de cláusulas elif EJECUCIONES PROGRAMA

La cláusula elif va seguida de una nueva condición. Puede haber tantas cláusulas elif como sea necesario. En este tipo de estructura, sólo se ejecutará un bloque de instrucciones o ninguno de ellos (si no se cumple ninguna condición).

Escuela de programación - Python Estructuras de control Después de ver todas las cláusulas posibles de las sentencias alternativas, podemos concluir que la estructura completa de una instrucción if es la siguiente: if condición1: instrucción1.1 ... instrucción1.n [elif condición2

instrucción2.1 ... instrucción2.m ... elif condiciónp: instrucciónp.1 ... instrucciónp.q] [else: instrucciónr.1 ... instrucciónr.s]

### 3. Instrucciones repetitivas: while, for

Las instrucciones repetitivas permiten ejecutar un bloque de instrucciones un número determinado de veces o mientras se cumpla una determinada condición en el programa, según el tipo de bucle que vayamos a utilizar (while, for). A este tipo de instrucciones se las conoce como bucles y cada vez que se ejecuta el bloque de instrucciones que contienen en su interior se dice que se ha ejecutado una iteración del bucle.

Puede que la sentencia presente una, varias o ninguna cláusula elif. Puede que la sentencia presente una o ninguna cláusula else.

Escuela de programación - Python Estructuras de control MIENTRAS SEA AGOSTO: NO SUENA EL DESPERTADOR DESAYUNO CHOCOLATE CON BUÑUELOS PASEO POR LA PLAYA Veamos a continuación cada tipo de bucle.

#### 3.1. Bucle while

La sentencia while permite ejecutar un bloque de instrucciones siempre y cuando se cumpla la condición que la acompaña. while condición: instrucción1.1 ... instrucción1.n En distintas ejecuciones del programa, las instrucciones del cuerpo del bucle pueden ejecutarse una, varias o ninguna vez.

> **💡 Apunt Tècnic**
> Ejemplo: En el siguiente bloque de código pedimos al usuario que indique si quiere seguir con el programa o no. Utilizamos un bucle while para validar la opción introducida por teclado. Cuando estemos seguros de que la opción es correcta, seguiremos con la ejecución del programa.

Figura 8: Uso de "while" para validar un dato introducido por teclado EXECUCIONS DEL PROGRAMA: ENCABEZADO CUERPO Mientras la condición se evalúe a True, se ejecutarán todas las instrucciones del cuerpo. Cuando la condición se evalúe a False entonces las instrucciones no se ejecutarán y el bucle acabará.

Escuela de programación - Python Estructuras de control En Python, el bucle while puede contener una cláusula else con un bloque de instrucciones que se ejecutarán en el momento en el que acabe la ejecución del bucle. Figura 9: Cláusula "else" en un bucle "while" EJECUCIÓN DEL PROGRAMA

Si la condición del bucle siempre es cierta, estaremos frente a un bucle infinito. A veces este tipo de bucles puede ser útil y puede combinarse o no con la sentencia break que veremos más adelante. Para conocer más sobre el bucle while puedes visitar esta página web

https://www.mclibre.org/consultar/python/lecciones/python-while.html

#### 3.2. Bucle for

El bucle for en Python se utiliza para crear bucles que se ejecutan un número determinado de veces pero difiere un poco del uso en otros lenguajes de programación. En este caso, el bucle for itera sobre los elementos de cualquier secuencia, por ejemplo: los caracteres de una cadena, los elementos de una lista o los números de un rango.

for elemento in secuencia: instrucción1.1 ... instrucción1.n Figura 10: Uso básico "for" EJECUCIÓN PROGRAMA: Por cada uno de los elementos que contenga la secuencia se ejecutará el bloque de instrucciones del cuerpo del bucle. Así que, el número de iteraciones del bucle coincidirá con el número de elementos de la secuencia.

Escuela de programación - Python Estructuras de control Al igual que con el bucle while, el bucle for también puede contener una cláusula else con un bloque de instrucciones que se ejecutarán en el momento en el que acabe la ejecución del mismo. Figura 11: Cláusula "else" del bucle "for" EJECUCIÓN PROGRAMA

Para conocer más sobre el bucle for, puedes visitar la siguiente página web: • https://docs.python.org/es/3/tutorial/controlflow.html?highlight=elif%20else#for

statements

#### 3.2.1. Función range

Si queremos utilizar el bucle for sobre una secuencia de números, podemos ayudarnos de la función range() de la siguiente manera: Figura 12: Uso básico range() EJECUCIÓN PROGRAMA: La sintaxis completa de la función es la siguiente: range(inicio, fin, paso) Vamos a ver más ejemplos de uso de range() con el bucle for.

range() devuelve una secuencia de números desde 0 hasta el número anterior al del argumento. Inicio indica el primer número de la secuencia. Por defecto es 0. Inicio es obligatorio e indica el límite de la secuencia. Se generarán desde inicio hasta el anterior a fin.

Paso indica la distancia entre los números consecutivos de la secuencia. Por defecto es 1.

num recorrerá la primera secuencia y vocal recorrerá la segunda. Escuela de programación - Python Estructuras de control Ejemplo 1: Contamos desde el 1 de dos en dos y sin llegar al 10. Figura 13: Ejemplo 1 de range() EJECUCIÓN PROGRAMA: Ejemplo 2: Contamos desde el 2 de dos en dos y sin llegar al 10.

Figura 14: Ejemplo 2 de range() EJECUCIÓN PROGRAMA: Incluso podemos iterar sobre el número de elementos (función len()) de una secuencia: Figura 15: Iterando sobre una secuencia EJECUCIÓN PROGRAMA: Para conocer más sobre la función range(), puedes visitar la siguiente página web

• https://docs.python.org/es/3/tutorial/controlflow.html?highlight=elif%20else#the

range-function

#### 3.2.2. Función zip

Podemos utilizar, de forma simultánea, el mismo bucle for sobre distintas secuencias. Para ello debemos ayudarnos de la función zip() que funciona así: dadas varias secuencias u objetos iterables (aquellos que se pueden recorrer) devuelve un único objeto iterable. Si las secuencias/iteradores no son del mismo tamaño, el iterador tiene el tamaño de la menor de ellas.

Figura 16: Bucle "for" con varias secuencias EJECUCIÓN PROGRAMA: Pasamos las dos secuencias como argumentos de la función zip().

Escuela de programación - Python Estructuras de control Para conocer más sobre la función zip(), puedes visitar la siguiente página web: • https://docs.python.org/es/3/library/functions.html#zip

### 4. Otras instrucciones: break, continue, pass

```python
Python dispone de dos sentencias que permiten alterar el funcionamiento normal de un
```

bucle: break y continue. Existe cierto debate sobre la corrección o no del uso de estas sentencias pero, como nos las ofrece el lenguaje de programación, debemos conocerlas tanto si decidimos usarlas como si no. Cuando se utiliza la sentencia break dentro de un bucle provoca la finalización del mismo sin hacer caso de la condición del while o del iterador del for. En cuyo caso tampoco se ejecutará la cláusula else, si la hubiere. Es como un atajo para acabar antes de tiempo un bucle.

Figura 17: Uso de "break" en un bucle En la primera ejecución del programa sí se ejecuta la sentencia break porque la palabra “HOLA” incluye una letra ‘L’ pero no es así en la segunda ejecución. EJECUCIONES DEL PROGRAMA

Por su parte, la sentencia continue da por finaliza la iteración actual y pasa a la siguiente aunque no provoca el fin del bucle completo.

Escuela de programación - Python Estructuras de control Figura 18: Uso de "continue" en un bucle En la primera ejecución del programa sí se ejecuta la sentencia continue porque la palabra “HOLA” incluye una letra ‘L’ pero no es así en la segunda ejecución. EJECUCIONES DEL PROGRAMA

Si quieres conocer algo más sobre las sentecias break o continue puedes visitar esta web: • https://docs.python.org/es/3/tutorial/controlflow.html?highlight=elif%20else#the

range-function La sentencia pass es una sentencia vacía, es decir, no hace nada. Suele utilizarse cuando se está estructurando un programa pero aún no se ha implementado un conjunto de instrucciones que son necesarias para que el programa no dé error de sintaxis. Figura 19: Ejemplo uso de "pass" Si quieres conocer algo más sobre la sentencia pass, puedes visitar esta página web

• https://docs.python.org/es/3/tutorial/controlflow.html?highlight=elif%20else#pass

statements

### 5. Anidación de sentencias

Las sentencias alternativas y repetitivas pueden anidarse entre sí tantas veces como sea necesario.

Escuela de programación - Python Estructuras de control Hay que tener en cuenta que si anidamos un bucle dentro de otro, hasta que no acabe el bucle interno no acabará la iteración del bucle externo. Vamos a ver algunos ejemplos: Figura 20: Bucle "for" anidado en un bucle "for" EJECUCIÓN DEL PROGRAMA

EJECUCIÓN DEL PROGRAMA

### 6. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Sentencias compuestas: https://docs.python.org/es/3/reference/compound_stmts.html • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • «Curso de Programación en Python», José Luis Tomás Navarro.

Figura 21: Sentencia "if" anidada dentro de un "while"

---

# 1.7 Tipos de datos complejos

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Tipos de datos complejos Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Tipos de datos complejos CONTENIDO

- Introducción.....................................................................................................................................2
- Mutabilidad e inmutabilidad............................................................................................................2
- Tipo de datos: LISTAS....................................................................................................................4

3.1. Acceso a los elementos de una lista.........................................................................................5 3.2. Funciones predefinidas que trabajan con listas........................................................................6 3.3. Recorrido de listas...................................................................................................................7 3.4. Trabajar con sublistas...............................................................................................................8 3.5. Operadores de pertenencia.......................................................................................................9 3.6. Añadir elementos a una lista..................................................................................................10 3.7. Borrar elementos de una lista.................................................................................................10 3.8. Repetición de listas con *......................................................................................................12 3.9. Comparación de listas............................................................................................................12 3.10. Copiar listas.........................................................................................................................13 3.11. Listas multidimensionales....................................................................................................14

- Tipo de datos: DICCIONARIO.....................................................................................................16

4.1. Acceder a los elementos de un diccionario............................................................................17 4.2. Uso de funciones y métodos con diccionarios.......................................................................18 4.3. Recorrer los elementos de un diccionario..............................................................................21 4.4. Operadores de pertenencia.....................................................................................................22 4.5. Borrar elementos de un diccionario.......................................................................................22 4.6. Comparación de diccionarios.................................................................................................24 4.7. Copiar diccionarios................................................................................................................25

- Fuentes de información.................................................................................................................26

Escuela de programación - Python Tipos de datos complejos

### 1. Introducción

Hasta el momento hemos estado trabajando con tipos de datos básicos como los números, los valores booleanos/lógicos y las cadenas de texto pero existen tipos de datos más complejos que aportan mayor funcionalidad al lenguaje. En este documento nos centraremos en dos de ellos: las listas y los diccionarios. El primero de ellos pertenece a los tipos de datos secuencia y el segundo a los tipos de datos mapa.

La diferencia fundamental entre los tipos de datos vistos en la unidad anterior y los que vamos a ver a continuación es que los tipos de datos básicos son inmutables mientras que estos no lo son.

### 2. Mutabilidad e inmutabilidad

La mutabilidad o inmutabilidad de un objeto hace referencia a la capacidad de poder modificar su contenido o no, una vez que ha sido creado. Por ejemplo, una cadena de texto es un objeto inmutable. Puedo acceder a sus elementos individualmente para utilizarlos pero no para modificarlos.

Figura 1: Acceso a elementos de una cadena de texto Sin embargo, sí podemos añadir nuevos caracteres a una cadena de texto utilizando la operación de concatenación. ¿Esto no es una incongruencia? Lo cierto es que no porque, realmente, no estamos modificando los elementos de la misma cadena de texto sino que estamos creando una nueva con el resultado de la concatenación.

Escuela de programación - Python Tipos de datos complejos Figura 2: Concatenando dos cadenas Veamos ahora un ejemplo con una lista, que sí es un objeto mutable: Figura 3: Modificamos un elemento de una lista Esta propiedad, que puede parecer muy apetecible a priori, puede darnos algún que otro susto si no manejamos los tipos de datos mutables con cuidado. Podemos verlo en el siguiente ejemplo

Figura 4: Problema mutabilidad en objetos En el apartado 3.10 Copiar listas veremos cómo se puede solucionar este problema. El identificador cambia, lo que significa que la variable frase está referenciando a un objeto nuevo. Sin embargo, el número del identificador se mantiene, así que la variable numeros sigue apuntando al mismo objeto.

Hemos podido modificar el primer elemento de la lista. Al asignar la lista numeros a la variable copia, no estamos creando una nueva lista sino copiando sólo la referencia al objeto. Por eso coinciden las id() de las variables numeros y copia. Si cambiamos un elemento de una de las listas, se reflejará el cambio en la otra porque, realmente, estamos trabajando con la misma lista aunque tenga dos nombres distintos.

Escuela de programación - Python Tipos de datos complejos

### 3. Tipo de datos: LISTAS

Las listas son un tipo de datos secuencia mutable que permite almacenar elementos ordenados de cualquier tipo. Para crear una lista, podemos hacerlo de dos formas

- Encerrando entre corchetes una lista de elementos separados por comas.

Figura 5: Creación de listas con [ y ] Elementos de la lista “numeros”: Elementos de la lista “vocales”: ‘a’ ‘e’ ‘i’ ‘o’ ‘u’

- A partir de un tipo secuencia, como una cadena de texto u otra lista, mediante el

uso del constructor list(). Figura 6: Uso del constructor list() Podemos crear una lista con todos los elementos del mismo tipo o crear una lista con elementos heterogéneos.

Escuela de programación - Python Tipos de datos complejos Figura 7: Lista con elementos heterogéneos Dentro de una lista puede haber elementos repetidos, como se puede ver a continuación: Figura 8: Elementos repetidos Muchas de las operaciones que hacíamos con las cadenas de texto podemos hacerlas con las listas, ya que los dos tipos de datos son secuencias y comparten algunas características.

Sin embargo, otras operaciones son específicas de las listas al ser objetos mutables. Veremos las más importantes en los siguientes apartados.

#### 3.1. Acceso a los elementos de una lista

Para acceder a los elementos de una lista, igual que con las cadenas, utilizamos el índice correspondiente, teniendo en cuenta que el primer índice corresponde al número 0. Elementos de la lista “colores”: ‘rojo’ ‘verde’ ‘azul’ ‘rojo’ ‘azul’ La diferencia con las cadenas de texto es que los elementos de las listas sí pueden modificarse.

Figura 9: Acceso por índice a los elementos de una lista

Escuela de programación - Python Tipos de datos complejos Figura 10: Modificación de elementos en una lista

#### 3.2. Funciones predefinidas que trabajan con listas

En este apartado veremos cómo trabajan algunas funciones predefinidas con las listas. • Si estamos trabajando con una lista de números, podemos sumarlos con la función sum(): Figura 11: Sumar números de una lista • Podemos calcular la longitud de una lista, es decir, el número de elementos que contiene, con la función len()

Figura 12: Longitud de una lista • Podemos calcular el elemento máximo y el elemento mínimo de la lista utilizando las funciones max() y min(), respectivamente: Figura 13: Máximo y mínimo de números

Figura 14: Máximo y mínimo de cadenas de texto

Escuela de programación - Python Tipos de datos complejos • También podemos ordenar los elementos de una lista con la función sorted(). Por defecto se ordenan de forma ascendente pero se puede cambiar el sentido e, incluso, indicar una función para decidir el criterio de ordenación.

Figura 15: Ordenar números de forma ascendente Figura 16: Ordenar texto de forma descendente

#### 3.3. Recorrido de listas

Al igual que con las cadenas de texto, podemos utilizar bucles for para recorrer los elementos de una lista. A continuación podemos ver dos formas de recorrer listas

- Acceder a los elementos directamente

Figura 17: Recorremos los elementos de una lista

- Acceder a los elementos controlando el índice

La función sorted() devuelve una lista nueva ordenada pero no modifica la lista original. Con el argumento reverse podemos indicar si queremos que se ordene de forma ascendente (True) o descendente (False). Por defecto vale False. La variable color contendrá el elemento actual de la lista.

Escuela de programación - Python Tipos de datos complejos Figura 18: Usando el índice para recorrer listas

#### 3.4. Trabajar con sublistas

Al igual que con las cadenas de texto, puedo obtener una parte de los elementos de una lista utilizando una expresión similar a la siguiente: nombre_lista[inicio : fin+1: salto] Donde: • inicio será el índice del primer elemento que queremos extraer • fin será el índice del último elemento que queremos extraer • salto será el número que le sumaremos al índice actual para obtener el siguiente elemento.

Veamos algunos ejemplos: Figura 19: Extraer elementos de una lista sin salto range(len(numeros)) genera una secuencia con los índices de la lista numeros. Es decir: 0, 1, 2, 3, 4. La variable i contendrá el número de índice del elemento actual de la lista. Extraemos los elementos desde el principio hasta el 3 (= 4-1).

Extraemos los elementos desde el 5 hasta el final. Extraemos los elementos desde el 3 hasta el 5 (= 6-1). Extraemos todos los elementos.

Escuela de programación - Python Tipos de datos complejos Figura 20: Extraer elementos de la lista con salto Estas operaciones generan una nueva lista que podríamos asignar a una variable. Todos los cambios que hagamos a la nueva lista, no afectarán a la lista original.

Figura 21: Uso de una sublista A no ser que la sublista aparezca en la parte izquierda de una operación de asignación. En cuyo caso, estaremos modificando la lista original. Figura 22: Modificación de los elementos de una sublista

#### 3.5. Operadores de pertenencia

El operador de pertenencia in nos permite conocer si un elemento pertenece a una lista (True) o no (False). Si utilizamos la variante not in entonces el resultado será el opuesto, como se puede ver en los siguientes ejemplos. Extraemos los elementos desde el 0 hasta el 3 (= 4-1) y dando saltos de dos números.

Extraemos todos los elementos dando saltos de dos números. Extraemos todos los elementos. Debemos asignar una lista con tantos elementos como tenga la sublista.

Escuela de programación - Python Tipos de datos complejos Figura 23: Uso del operador "in"

Figura 24: Uso del operador "not in"

#### 3.6. Añadir elementos a una lista

Una vez que tenemos creada una lista, podemos añadir elementos nuevos a la misma de varias maneras. Aquí vamos a ver dos de ellas

- Utilizar la función append() para añadir el elemento al final de la lista

Figura 25: Uso de la función append()

- Utilizar el operador + para concatenar varias listas

Figura 26: Concatenar listas con "+"

#### 3.7. Borrar elementos de una lista

Disponemos de dos maneras para borrar elementos de una lista: pop(), remove() y del. El método pop() borra el elemento ubicado en la posición que se pasa como argumento y, además, devuelve el elemento recién borrado. Si no se especifica ningún argumento entonces borrará el último de la lista.

Si pasásemos como argumento una lista de números, añadiría la lista como elemento y no los números directamente. Sólo podemos añadir los elementos de uno en uno. Podemos añadir elementos al final de la lista... ...y también podemos añadir elementos al principio.

Escuela de programación - Python Tipos de datos complejos Figura 27: Uso del método pop() Si pasamos un número de posición que no existe, provocará un error: Figura 28: Error uso de pop() El método remove() borra la primera ocurrencia de un elemento en una lista. Si el valor que se pasa como argumento no existe en la lista, se produce un error.

Figura 29: Uso de remove() para borrar elementos en una lista Por último, presentaremos la instrucción del que permite borrar cualquier objeto de un programa, así que también podemos utilizarla para trabajar con objetos de tipo lista. Según cómo la utilicemos podremos borrar un elemento, una secuencia de elementos o, incluso, la lista completa.

Borramos el último elemento de la lista. Es equivalente a ejecutar pop(-1) Borramos el elemento que ocupa la posición 0. Borra la primera aparición del valor 3. El valor 99 no existe en la lista, así que da ERROR.

Escuela de programación - Python Tipos de datos complejos Figura 30: Borrado de elementos con "del" Si borramos la lista completa con del entonces ya no podremos utilizar la lista porque el objeto no existirá. En el siguiente ejemplo se puede ver este caso: Figura 31: Borramos una lista completa con "del"

#### 3.8. Repetición de listas con *

Al igual que sucedía en las cadenas de texto, el operador * permite repetir listas tantas veces como sea necesario. Figura 32: Repetición de listas con "*"

#### 3.9. Comparación de listas

Podemos utilizar los operadores de comparación con las listas para saber cuál es menor que cuál o si dos listas son iguales. Borramos el elemento de la posición 0. Borramos los elementos desde la posición 4 hasta el final.

Escuela de programación - Python Tipos de datos complejos Figura 33: Comparación de listas Fíjate que al comparar las listas num1 y num3 nos indica que no son iguales aunque las dos listas contengan los mismos elementos. Esto se debe a que en las listas el orden de sus elementos es relevante y, por lo tanto, no es lo mismo [1, 2, 3] que [3, 2, 1].

#### 3.10. Copiar listas

Cuando hablamos de la mutabilidad de las listas, vimos un problema que surgía al asignar una lista a dos variables distintas ya que podía dar la sensación de que teníamos dos listas independientes. Eso no era así porque si realizábamos una modificación en una de ellas, se reflejaba el cambio en la otra, como se puede ver en este ejemplo

Figura 34: Asignación de una lista a otra variable Figura 35: Apuntan al mismo objeto ¿Cómo podemos solucionar este problema? La respuesta pasa por realizar copias de listas con algunos de los siguientes procedimientos

- Uso de [:] para realizar la copia

Se comparan los elementos uno a uno hasta que se encuentra una diferencia o acaban los elementos de una lista. El primer elemento de num3 es mayor, así que num2 es menor que num3. Esto ocurre porque las dos variables hacen referencia al mismo objeto.

Escuela de programación - Python Tipos de datos complejos Figura 36: Copia de listas con [:] Figura 37: Apuntan a objetos distintos

- Uso de la función list()

Figura 38: Copia de listas con list() Figura 39: Apuntan a distintos objetos

- Uso del método copy()

Figura 40: Copia de listas con copy() Figura 41: Apuntan a objetos distintos

#### 3.11. Listas multidimensionales

Hasta ahora hemos estado trabajando con listas de una sola dimensión pero podemos crear listas que contengan otras listas como elementos. Las listas son independientes entre sí porque son objetos distintos. Las listas son independientes entre sí porque son objetos distintos.

Las listas son independientes entre sí porque son objetos distintos.

Escuela de programación - Python Tipos de datos complejos Figura 42: Uso de listas multidimensionales A continuación se puede ver un ejemplo de creación de una matriz de números y recorrido de la misma de dos formas distintas: Figura 43: Creación y recorrido de una matriz de números Para conocer más sobre las operaciones que se pueden realizar con las listas, puedes visitar las siguientes páginas web

• Listas en Python (en castellano): https://j2logo.com/python/tutorial/tipo-list-python/ • Lists and Tuples in Python (en inglés): https://realpython.com/python-lists-tuples/ El segundo elemento es una lista. Para acceder a un elemento de la lista interna deberé utilizar varios índices: el primero para acceder a la lista interna y el segundo para acceder al elemento correspondiente de dicha lista interna.

La variable m es una lista de listas (matriz) de números enteros. Recorremos los elementos de la matriz: el primer for accede a las listas y el segundo a los números de las listas. Modificamos el contenido de la matriz: fila toma los valores de las filas de la matriz y col toma los valores de las columnas. Así m[fila][col] corresponde al número que hay en la fila fila y columna col.

Escuela de programación - Python Tipos de datos complejos

### 4. Tipo de datos: DICCIONARIO

Un diccionario es un tipo de dato mapa que está compuesto por pares clave : valor donde clave puede ser cualquier tipo inmutable, habitualmente cadenas de texto o números. En cuanto a los valores, pueden ser de cualquier tipo de datos. Una característica que los diferencia de las listas es que, en este caso, sus elementos no guardan ningún orden.

Las claves deben ser únicas ya que son el mecanismo por el que se indexan los elementos del diccionario en lugar de por números de posición como ocurría en las listas. Sin embargo, los valores pueden repetirse, si están asociados a claves distintas. Los diccionarios muestran su lista de pares clave:valor separadas por comas y encerradas dentro de { }

Figura 44: Contenido de un diccionario Podemos crear un diccionario de varias formas

- Utilizando la estructura descrita en la figura anterior con { }

Figura 45: Crear un diccionario usando { }

- Utilizando el constructor dict() y pasándole los pares clave:valor correspondientes

Figura 46: Uso de dict() con asignaciones clave=valor Figura 47: Uso de dict() con secuencias de (clave, valor)

- Creando un diccionario vacío y, después, utilizando el operador de asignación para

cada uno de los pares clave:valor que queremos añadir

Escuela de programación - Python Tipos de datos complejos Figura 48: Creación de un diccionario Cuando indexamos por clave, pueden darse dos situaciones

- Que no exista la clave en el diccionario en cuyo caso se creará la clave y se asignará

el valor pasado. Podemos verlo en el ejemplo anterior.

- Que ya existe la clave en el diccionario en cuyo caso se modificará el valor existente

en el diccionario con el nuevo valor pasado. Figura 49: Modificación del valor asociado a una clave

#### 4.1. Acceder a los elementos de un diccionario

Como se puede deducir del ejemplo anterior, para acceder al valor asociado a una clave debemos utilizar los corchetes [ ] de la siguiente forma: nombre_diccionario[clave] Figura 50: Accediendo a los elementos de un diccionario Así se puede crear un diccionario vacío.

Si la clave no existe, se produce un error.

Escuela de programación - Python Tipos de datos complejos

#### 4.2. Uso de funciones y métodos con diccionarios

En este apartado vamos a ver algunas funciones predefinidas y métodos para trabajar con los diccionarios. La función len() nos permite conocer el número de elementos que contiene un diccionario. Figura 51: Uso de la función len() Para recuperar el valor asociado a una clave podemos utilizar el método get() al cual se le pasa como argumento una clave. Si la clave existe, devolverá el valor asociado. Si no existe entonces devolverá un objeto nulo (None).

Figura 52: Uso del método get() Puede que en algún momento necesitemos conocer todas las claves que existen en un diccionario. En esos casos, podemos hacer uso del método keys() que devuelve una vista con todas las claves de un diccionario. Figura 53: Vista de las claves de un diccionario Si modificamos las claves en el diccionario, los cambios se reflejarán en dicha vista.

Figura 54: La vista keys() se actualiza automáticamente Como la clave no existe, devuelve un objeto None.

Escuela de programación - Python Tipos de datos complejos También puede ser útil recuperar todos los valores presentes en un diccionario. Para ello tenemos a nuestra disposición el método values() que devuelve una vista con todos los valores utilizados en el diccionario. Hay que recordar que los valores pueden repetirse en un diccionario, así que la lista resultante podrá contener también valores repetidos.

Figura 55: Uso del método values() Al igual que sucede con el método keys(), si se modifican los valores del diccionario entonces los cambios se reflejarán en la vista values(). Figura 56: La vista values() se actualiza automáticamente Un método parecido a los dos anteriores es el método items() que devuelve una vista de todos los elementos de un diccionario.

Figura 57: Uso del método items() Como sucedía con los dos métodos anteriores, si se modifican los elementos del diccionario entonces los cambios se ven reflejados en la vista items(). Figura 58: La vista items() se actualiza automáticamente A la hora de actualizar los elementos de un diccionario podemos hacer uso del método setdefault() que realiza una inserción condicionada.

La sintaxis es la siguiente: nom_diccionario.setdefault(clave, valor_defecto)

Escuela de programación - Python Tipos de datos complejos Donde: • El primer argumento (clave) es obligatorio e indica la clave que estamos buscando en el diccionario. • El segundo argumento (valor_defecto) es opcional y, dependiendo de si está informado o no, el método reaccionará de una forma u otra.

¿Cómo funciona este método? Lo primero que hace es buscar la clave en el diccionario y..

- Si existe, devuelve el valor asociado.
- Si no existe…
- Si no se ha informado el valor_defecto entonces no devolverá ningún valor.
- Si se ha informado

valor_defecto entonces añadirá un nuevo par (clave:valor_defecto) al diccionario y devolverá valor_defecto. A continuación se puede ver un ejemplo con los tres casos descritos. Figura 59: Uso de setdefault() Por último, hablaremos del método update() que permite actualizar los elementos de un diccionario a partir de otro diccionario o un objeto iterable de pares clave:valor. Este método no devuelve ningún valor cuando acaba.

La clave nombre existe, devuelve el valor . La clave altura no existe y no hay valor por defecto, así que no devuelve nada. La clave peso no existe y hay valor por defecto, así que devuelve el valor por defecto y añade el nuevo elemento.

Escuela de programación - Python Tipos de datos complejos Figura 60: Uso básico de update() Si alguna clave del diccionario a actualizar ya existe, se actualizará su valor. Las claves que no existan se añadirán tal cual. Figura 61: Uso de update() con claves coincidentes

#### 4.3. Recorrer los elementos de un diccionario

Los elementos de un diccionario se pueden recorrer de varias formas

- Utilizando el método keys() para recorrer solamente las claves

Figura 62: Recorrer las claves utilizando el método keys() Si implementamos el bucle anterior utilizando directamente dic1, también recorre sólo las claves del diccionario. Figura 63: Recorrido estándar de un diccionario

Escuela de programación - Python Tipos de datos complejos

- Recorriendo solo los valores haciendo uso del método values()

Figura 64: Recorrer los valores utilizando el método values()

- Utilizando el método items() para recorrer tanto las claves como los valores

Figura 65: Recorrido de un diccionario usando items()

#### 4.4. Operadores de pertenencia

Podemos utilizar los operadores in y not in para comprobar si una clave pertenece o no, respectivamente, a un diccionario. Figura 66: Uso de los operadores "in" y "not in"

#### 4.5. Borrar elementos de un diccionario

En este apartado conoceremos varias formas de eliminar elementos de un diccionario: pop(), clear() y del. El método pop() borra el elemento correspondiente a la clave que se pasa como argumento. Su sintaxis es la siguiente: pop(clave[,valor_defecto]] La variable k recorre las claves y la variable v recorre los valores.

Escuela de programación - Python Tipos de datos complejos Donde: • clave es un valor obligatorio y se corresponde con la clave del elemento que queremos borrar. • valor_defecto es opcional y se utiliza cuando no se encuentra la clave especificada. ¿Cómo funciona? Lo primero que hace el método es buscar la clave en el diccionario.

• Si existe, borra el elemento correspondiente y devuelve el valor asociado. • Si no existe... ◦Si el valor_defecto está especificado, devuelve dicho valor. ◦Si el valor_defecto no está especificado, devuelve un error. Figura 67: Uso del método pop() Otro método que podemos utilizar con los diccionarios es el método clear(). Su cometido es eliminar todos los elementos de un diccionario pero sin borrarlo. Es decir, vacía el contenido pero queda el continente como un diccionario vacío.

Figura 68: Uso del método clear() La clave “odia” existe, así que devuelve el valor asociado y borra el elemento. La clave “no_existo” no existe, así que devuelve el valor por defecto (si está especificado) o da error. Ahora dic1 es un diccionario vacío.

Escuela de programación - Python Tipos de datos complejos Por último, disponemos de la instrucción del que permite borrar cualquier objeto de un programa, así que también podemos utilizarla para trabajar con diccionarios. Según cómo la utilicemos podremos eliminar un elemento o el diccionario completo.

Figura 69: Borrado de un elemento con el comando “del” Si borramos la lista completa con del entonces ya no podremos utilizar la lista porque el objeto no existirá. En el siguiente ejemplo se puede ver este caso

#### 4.6. Comparación de diccionarios

Los diccionarios no pueden ordenarse, es decir, no podemos saber si un diccionario es menor que otro. Figura 71: ¿Qué diccionario es más pequeño? Figura 70: Borramos un diccionario con "del"

Escuela de programación - Python Tipos de datos complejos Pero sí pueden compararse, o lo que es lo mismo, saber si dos diccionarios contienen los mismos pares clave:valor o no. Figura 72: Comparar dos diccionarios con los mismos elementos Figura 73: Comparar dos elementos con distintos elementos

#### 4.7. Copiar diccionarios

Como ya hemos visto, los diccionarios son mutables al igual que las listas. Así que presentan el mismo problema a la hora de asignar a dos variables el mismo diccionario, es decir, que están haciendo referencia al mismo objeto y cualquier cambio en una de ellas afecta a la otra.

Figura 74: Dos variables distintas referencian al mismo diccionario

Escuela de programación - Python Tipos de datos complejos La solución pasa por utilizar el método copy() cuando necesitemos tener dos diccionarios independientes. Figura 75: Uso de la función copy() para crear dos copias independientes de un diccionario Para conocer más sobre la operaciones que se pueden realizar con diccionarios, puedes visitar las siguientes páginas web

• Diccionarios en Python (en castellano): https://j2logo.com/python/tutorial/tipo-dict- python/ • Tipo diccionarios (en castellano): https://entrenamiento-python-basico.readthedocs.io/es/latest/leccion3/ tipo_diccionarios.html

### 5. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Lists and tuples in Python: https://realpython.com/python-lists-tuples/ • Diccionarios: https://docs.python.org/es/3/tutorial/datastructures.html#dictionaries • Diccionarios en Python: https://j2logo.com/python/tutorial/tipo-dict-python/ • Tipo diccionarios

https://entrenamiento-python-basico.readthedocs.io/es/latest/leccion3/ tipo_diccionarios.html • «Curso de Programación en Python», José Luis Tomás Navarro.

---

# 1.8 Funciones

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Funciones Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Funciones CONTENIDO

- Introducción.....................................................................................................................................2
- Qué es una función..........................................................................................................................2
- Definición de funciones...................................................................................................................3

3.1. Llamada a una función.............................................................................................................5

- Ámbito de las variables...................................................................................................................6
- Parámetros de una función..............................................................................................................9

5.1. Tipos de parámetros...............................................................................................................11 5.2. Valores por defecto................................................................................................................12

- Return de varios valores................................................................................................................13
- Tipos de funciones.........................................................................................................................14
- Fuentes de información.................................................................................................................15

Escuela de programación - Python Funciones

### 1. Introducción

Hasta el momento hemos estado creando módulos (ficheros .py) que utilizaban tres estructuras básicas de control: secuencias de instrucciones, sentencias alternativas (if) y sentencias repetitivas (while, for). Además, hemos utilizado funciones estándar de Python, o creadas por terceros, que realizaban tareas concretas por nosotros.

Esta forma de trabajar sigue los principios de la Programación estructurada, un paradigma de programación que persigue el desarrollo de programas más fáciles de entender, más rápidos de desarrollar y más sencillos de mantener. Y, siguiendo con esta línea, podemos ir un paso más allá y crear nuestras propias funciones en Python. De esta forma contribuiremos a la reutilización de código y aumentaremos la calidad de nuestros desarrollos.

### 2. Qué es una función

Una función es un bloque de código que recibe un nombre y realiza una tarea concreta dentro de un programa. Por ejemplo: calcular el máximo común divisor entre dos números o imprimir el contenido de un diccionario. Una función se crea una vez pero puede ser llamada tantas veces como sea necesario, tal y como se muestra a continuación.

PROGRAMA ORIGINAL: instrucción 1 instrucción 2 instrucción 3 instrucción 4 instrucción 5 instrucción 2 instrucción 3 instrucción 4 instrucción 6 instrucción 7 instrucción 2 instrucción 3 instrucción 4 DEFINICIÓN DE LA FUNCIÓN inst234 instrucción 2 instrucción 3 instrucción 4 PROGRAMA USANDO LA FUNCIÓN

instrucción 1 inst234 instrucción 5 inst234 instrucción 6 instrucción 7 inst234 Definimos la función una vez Llamamos a la función tantas veces como necesitemos

Escuela de programación - Python Funciones Una función puede recibir valores de entrada o no y puede devolver uno, varios o ningún valor de salida, dependiendo de la naturaleza de la misma. En cada ejecución de la función puede ser llamada con valores de entrada distintos y desde diferentes puntos de un programa (o de módulos distintos).

Dependiendo de los valores de entrada que reciba podrá devolver los mismos resultados o no en cada llamada, como puede verse en los siguiente ejemplos. Figura 1: Uso de la función max()

Figura 2: Uso de la función len()

### 3. Definición de funciones

Las funciones se definen con la siguiente sintaxis

```python
def nombre_función(param1, … , paramn):
# instrucciones del cuerpo de la función
```

return valor Debemos tener en cuenta: • La definición de una función empieza con la palabra reservada def seguida del nombre de la función.

• Los parámetros se escriben entre paréntesis y separados por comas. ◦Si la función no tiene parámetros, también se escriben los paréntesis. ◦No hay que escribir el tipo del parámetro, sólo el nombre que se utilizará dentro de la función. • La cabecera de la función acaba con

La recomendación recogida en PEP 8 indica que los nombres de las funciones deberían seguir el formato minúsculas_separadas_por_guiones_bajos. Por ejemplo: maximo_comun_divisor, imprimir_diccionario, calcular_renta.

Escuela de programación - Python Funciones • Las instrucciones del cuerpo de la función deben aparecer indentadas, tal y como sucedía con las instrucciones del cuerpo de if, for y while. • La palabra return permite indicar el valor que devuelve la función. No es obligatorio utilizarla. Si la función realiza una tarea pero no devuelve un valor, se omite.

• El valor puede ser de cualquier tipo: numérico, booleano, cadena de texto, listas, tuplas. De hecho, cuando queremos devolver más de un valor se suele devolver una tupla con todos los valores. Ejemplos: La función calculadora recibe dos valores y no devuelve ninguno, la función suma recibe dos valores y devuelve un valor y, por último, la función lee_opcion_menu no recibe ningún parámetro y devuelve un valor.

Figura 3: Función que realiza operaciones básicas

Figura 4: Función que suma dos números Figura 5: Función que gestionar un menú Fíjate que en las tres funciones anteriores la primera línea es un comentario de triples comillas. Es lo que se conoce como docstring y se utiliza para documentar las funciones (y otros objetos del programa).

Podemos comprobar su funcionamiento utilizando la función predefinida help(), de la siguiente manera

Escuela de programación - Python Funciones Figura 6: Uso de help()

Figura 7: Ayuda de la función "suma"

#### 3.1. Llamada a una función

La llamada a una función dependerá del número de parámetros de entrada que tenga y los valores que devuelva. Veamos algunos ejemplos: Ejemplo 1: La función calculadora tiene dos parámetros pero no devuelve ningún valor. Figura 8: Función que realiza operaciones básicas Figura 9: Llamadas a la función "calculadora" Ejemplo 2: La función suma tiene dos parámetros y devuelve un valor.

Figura 10: Función que suma dos números

Figura 11: Llamadas a la función "suma" Para salir del documento de ayuda, pulsamos las teclas :q y, después, la tecla Intro/Enter. Los valores de los parámetros se pueden pasar directamente, como en la llamada 1 que se pasan números, o utilizando expresiones que devuelven valores, como en la llamada 2 que se utilizan variables u otras expresiones más complejas.

Aquí llamamos directamente a la función como parámetro de la función print().

Escuela de programación - Python Funciones Ejemplo 3: La función lee_opcion_menu no recibe ningún parámetro y devuelve un valor. Figura 12: Función que gestionar un menú

Figura 13: Llamada a la función "lee_opcion_menu"

### 4. Ámbito de las variables

El ámbito de una variable se refiere a la parte de código de un módulo donde es conocida y tiene sentido su uso. Si intentamos utilizar una variable fuera de su ámbito entonces se produce un error, como en el siguiente caso: Figura 14: Uso de la variable "a" fuera de su ámbito Una variable puede ser considerada local o global, teniendo en cuenta lo siguiente

• Los parámetros y variables definidos en una función tienen carácter local y solo pueden utilizarse dentro de dicha función. • Si dentro de una función queremos modificar el valor de una variable que se ha declarado fuera de ella, hay que declararla global así: global NOM_VARIABLE Llamamos a la función sin pasar ningún parámetro.

Fíjate que es obligatorio escribir los ().

Escuela de programación - Python Funciones • Es recomendable escribir las variables globales en mayúsculas para distinguirlas de las variables locales. Veamos algunos ejemplos para dejar claros estos puntos. Ejemplo 1: Una variable local a una función sólo tiene sentido dentro de ella pero las variables globales sí se pueden ver dentro de la función.

Figura 15: Ejemplo 1. Uso variables Figura 16: Ejecución ejemplo 1 Ejemplo 2: Una variable del programa principal es visible dentro de una función a no ser que haya declarada otra variable local a la función con el mismo nombre. Figura 17: Ejemplo 2

Figura 18: Ejecución ejemplo 2 Ejemplo 3: Si queremos modificar una variable global, debemos definirla como tal dentro de la función. Desde dentro de la función podemos usar todas las variables (locales y globales) pero desde fuera no. Dentro de la función prima el valor de la variable local sobre la global.

Escuela de programación - Python Funciones Figura 19: Sin declarar como "global" Figura 20: Ejecución sin declarar "global" Figura 21: Declarada como "global"

Figura 22: Ejecución con "global"

Un uso justificado del uso de una variable global podría ser del siguiente ejemplo: No es recomendable el uso de variables globales, excepto en casos muy puntuales, ya que restan legibilidad al programa. Es preferible añadir parámetros a las funciones para recoger el valor de las variables globales con las que queramos trabajar.

Si intentamos modificar el contenido de la variable global sin declararla como tal, da error. Cuando declaramos la variable como global, ya podemos modificar su valor dentro de la función.

Escuela de programación - Python Funciones Figura 23: Uso de la variable global PI

Figura 24: Ejecución del programa

### 5. Parámetros de una función

Anteriormente, ya hemos adelantado que una función puede tener uno, varios o ningún parámetro en su cabecera. Ello dependerá de la información externa que necesite la función para realizar su cometido. Llegados a este punto debemos introducir los conceptos de parámetros formales y parámetros reales de una función

• Los parámetros formales son los que se definen en la cabecera de la función, dentro de los paréntesis, y se utilizan como variables locales dentro de la misma. • Los parámetros reales son las expresiones que se pasan a la función a la hora de llamarla y sus valores son copiados a los parámetros formales.

Figura 25: Parámetros formales y reales Si conoces otros lenguajes de programación puede que te estés preguntando si el pase de parámetros en Python se realiza por valor o por referencia. Teniendo en cuenta que en Python todos los elementos de un programa se consideran referencias, podíamos deducir que el pase de parámetros en Python se realiza por Recuerda que es recomendable escribir las variables globales en mayúsculas.

a y b son los parámetros formales de la función suma. 10 y 3 son los parámetros reales en esta llamada a la función suma. 20 y 4 son los parámetros reales en esta llamada a la función suma.

Escuela de programación - Python Funciones referencia ya que estamos pasando referencias a objetos y no valores propiamente dichos. Pero, lo cierto es que Python realiza un pase de argumentos algo más sofisticado que otros lenguajes de programación y no es fácilmente clasificable. Así que nos centraremos en conocer las consecuencias del uso de este tipo de pase de argumentos sin perdernos en demasiados tecnicismos.

Características del pase de parámetros en Python: • Si pasamos como argumento un objeto inmutable (números, booleanos, cadenas de texto o tuplas) los cambios realizados dentro de la función no se mantendrán. Figura 26: Paso un objeto inmutable • Sin embargo, si pasamos como argumento un objeto mutable (listas, dicionarios) los cambios realizados dentro de la función sí se mantendrán.

Figura 27: Paso un objeto mutable Hay que tener cuidado con este tipo de situaciones. De hecho, no es recomendable cambiar directamente los parámetros reales sino mantenerlos con los valores originales y devolver con un return el objeto nuevo modificado. Cuando acaba la función, la variable num sigue manteniendo su valor.

En este caso, la lista sí mantiene los cambios realizados dentro de la función.

Escuela de programación - Python Funciones Podríamos mejorar el ejemplo anterior de la siguiente forma: Figura 28: Mejora del ejemplo anterior

#### 5.1. Tipos de parámetros

Existen dos tipos de parámetros en las funciones de Python: los parámetros posicionales y los parámetros con clave. • Los parámetros posicionales son los que hemos estado utilizando hasta el momento. Cuando se realiza la llamada a la función, los parámetros reales se asignan a los parámetros formales en el mismo orden en el que están declarados en la cabecera de la función.

Figura 29: Llamada a la función “suma”

Figura 30: Función que suma dos números • Los parámetros con clave son aquellos que indican el nombre del parámetro y su valor en la llamada a la función y, por lo tanto, no hace falta que aparezcan en la misma posición que en la cabecera de la función. ◦Un parámetro puede actuar como posicional en una llamada a la función y como clave en otro, según si se especifica el nombre del parámetro o no.

◦Es obligatorio que los parámetros con clave aparezcan detrás de todos los parámetros posicionales. En este caso, la lista mantiene los datos originales pero tenemos una nueva lista con las modificaciones realizadas por la función. a = 10 b = 3

Escuela de programación - Python Funciones Figura 31: Parámetros con clave

#### 5.2. Valores por defecto

En algunas funciones puede resultar útil definir valores por defecto para algunos de sus parámetros. Para ello, se utiliza la siguiente sintaxis

```python
def nombre_funcion(parametro1, parametro2 = valor2, …, parametron = valorn):
# instrucciones del cuerpo
```

Los parámetros que no tienen asignado un valor por defecto son obligatorios y deben estar declarados antes que los parámetros con valor por defecto. La llamada a la función se puede realizar de varias formas: • Informando solo el valor de los parámetros obligatorios (sin valor por defecto).

• Informar el valor de los parámetros obligatorios y de algunos parámetros opcionales (con valor por defecto). • Informar el valor de todos los parámetros obligatorios y opcionales. Ejemplo: Distintas llamadas a una función con valores por defecto. La función imprime por pantalla los valores recibidos como parámetros reales.

Figura 32: Funciones con valores por defecto Figura 33: Llamadas a la función con valores por defecto

Figura 34: Ejecuciones Existen más posibilidades a la hora de trabajar con parámetros en Python. Te recomiendo que visites la siguiente página web si quieres conocer más opciones: Como el primer parámetro es con clave, el segundo también debe serlo. Los parámetros por clave pueden aparecer desordenados.

Escuela de programación - Python Funciones • https://docs.python.org/es/3/tutorial/controlflow.html#special-parameters

### 6. Return de varios valores

Hasta ahora hemos utilizado funciones que no tenían return o que devolvían un único valor. Pero, como hemos dicho anteriormente, podemos utilizar el return para devolver más de un valor al acabar la función.

```python
def nombre_función(param1, … , paramn):
# instrucciones del cuerpo de la función
```

return (elem1, elem2, … , elemn) #devuelve una tupla Vamos a ver un ejemplo para entender mejor cómo utilizar el return de varios valores. Figura 35: Return de varios valores

Figura 36: Ejecución del programa Una tupla es una lista de elementos de cualquier tipo que es inmutable. Es decir, una vez que se ha creado, no se puede modificar. Las tuplas tienen el formato (elem1, … , elemn) donde elem1, ... y elemn son los elementos que la componen.

Para saber más sobre tuplas, puedes visitar las siguientes páginas web

- Python Tuples (inglés): https://realpython.com/python-lists-tuples/#python-tuples
- Tuplas en Python (castellano): https://j2logo.com/python/tutorial/tipo-tuple-python/

Recorremos las tuplas como las listas. La única diferencia es que no podemos modificar sus elementos una vez que están creadas.

Escuela de programación - Python Funciones

### 7. Tipos de funciones

```python
Python permite trabajar con distintos tipos de funciones. A título informativo,
```

nombraremos algunas de ellas: • Recursivas

, que permiten realizarse llamadas a sí mismas para resolver un problema. ◦Todas las funciones recursivas deben incluir un caso base que finalice la recursión o estarían ejecutándose eternamente. • Lambda

, que permiten crear funciones anónimas (sin nombre) en una sola línea. • Decoradoras

, que reciben como parámetro una función y devuelven como resultado la misma función con una envoltura que extiende su comportamiento. • Generadoras

, como range(), lo que hacen es guardarse el último índice en el que nos encontramos e ir avanzando un paso a cada ejecución de la misma. • Especiales

, que permiten aplicar funciones a objetos de una manera más sofisticada. Por ejemplo: ◦filter() permite filtrar los elementos de una lista ejecutando sobre ellos una función que realiza una comprobación y devuelve un valor lógico True/False. ◦map() permite aplicar una función a una lista de elementos y devuelve como resultado un objeto iterable de tipo mapa.

Veremos un ejemplo típico de una función recursiva y un ejemplo de uso de la función filter(). Ejemplo 1: Función recursiva que calcula el factorial de un número. Esta función tiene dos casos base: que el número sea 0 o 1. Figura 37: Función recursiva

Figura 38: Ejecuciones función

Escuela de programación - Python Funciones Ejemplo 2: Uso de la función filter() para saber qué números de una lista son pares. Figura 39: Uso de la función filter() Si quieres ampliar la información sobre funciones, puedes visitar la siguiente página web: • https://docs.python.org/es/3/tutorial/controlflow.html#more-on-defining-functions

### 8. Fuentes de información

• Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Programación estructurada: https://entrenamiento-python-basico.readthedocs.io/es/latest/leccion5/ programacion_estructurada.html • Definición de funciones: https://docs.python.org/es/3/tutorial/controlflow.html#defining-functions • «Curso de Programación en Python», José Luis Tomás Navarro.

La función filter() devuelve un objeto de tipo filtro, así que lo convertimos a una lista para verlo mejor.

---

# 1.9 Errores y excepciones

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Errores y excepciones Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Errores y excepciones CONTENIDO

- Introducción.....................................................................................................................................2
- Excepciones en Python....................................................................................................................3

2.1. Tipos de excepciones...............................................................................................................5 2.2. Más sobre excepciones............................................................................................................7

- Fuentes de información...................................................................................................................7

Escuela de programación - Python Errores y excepciones

### 1. Introducción

Existen varios puntos en la vida de un programa en los que se pueden producir errores. Por ejemplo: • En la fase de análisis del problema si no hemos sido capaces de entender los requisitos necesarios para su resolución. Podríamos llegar a resolver correctamente un problema equivocado.

• En la fase de codificación (al escribir el programa) si no seguimos las reglas sintácticas y semánticas del lenguaje de programación utilizado. O, dicho con otras palabras, si escribimos incorrectamente el programa. Pero, aunque el programa esté correctamente escrito y cumpla con las necesidades del usuario, pueden aparecer nuevos errores en la ejecución del mismo.

Fíjate en el siguiente programa que intenta averiguar si un número es par o impar: Figura 1: Programa que averigua si un número es par/impar EJECUCIONES DEL PROGRAMA En principio parece claro que el usuario debe incluir un número pero, ¿y si el usuario se equivoca e introduce un texto? ¿Cómo reaccionará el programa?

Figura 2: Error de ejecución ¿Cómo podemos detectar y reaccionar frente a estos errores? Existen varias formas: unas más rudimentarias y otras más sofisticadas. Una posible solución podría ser utilizar la función isdigit() que comprueba si una cadena de texto está formada sólo por dígitos numéricos (devolverá True) o no (devolverá False).

Así, podríamos modificar el programa para que incluyese esta comprobación

Escuela de programación - Python Errores y excepciones Figura 3: Uso de digit() para comprobar datos númericos Sin embargo, esta solución sólo nos sirve para controlar este tipo de errores. Deberíamos inventar soluciones creativas para todos los posibles errores que pudiesen suceder y esto podría hacer que nuestros programas se complicaran demasiado.

Existe una solución más sofisticada y potente que pasa por gestionar las excepciones de un programa.

### 2. Excepciones en Python

Una excepción se produce cuando ocurre un error de ejecución en un programa. En ese momento, el programa acaba y Python muestra un mensaje de error. Figura 4: Mensaje de error de Python En la imagen anterior aparece el tipo de excepción que se ha producido (ValueError) y el mensaje por defecto de Python (invalid literal for int() with base 10: ‘hola’).

Nosotr@s, como programador@s, podemos manejar las excepciones que se producen en la ejecución de un programa y dar una respuesta personalizada.

Escuela de programación - Python Errores y excepciones Para ello debemos utilizar el bloque try...except. Su sintaxis es la siguiente: try: instrucciones que pueden provocar una excepción except: instrucciones que se ejecutarán cuando se produzca una excepción else: instrucciones que se ejecutarán cuando no se produzca una excepción finally

instrucciones que se ejecutarán al final del bloque Aquí puedes ver un diagrama de flujo con el funcionamiento del bloque try...except y una explicación detallada de cada apartado: Figura 5: Funcionamiento try...except

- En el apartado

try incluiremos aquellas instrucciones susceptibles de provocar alguna excepción. Realmente serán las instrucciones normales del programa, sin nada adicional.

- En el apartado

except se incluirán las instrucciones que se deban ejecutar cuando se produzca una excepción en el apartado try . Por ejemplo: mostrar un mensaje de error específico al usuario o hacer algún cálculo adicional.

- En el apartado else (es opcional) incluiremos

aquellas instrucciones que se ejecutarán después de las instrucciones del apartado try, siempre y cuando no se haya producido ninguna excepción.

- En el apartado finally (es opcional) se ubican

aquellas instrucciones que hay que ejecutar al final, tanto si se ha producido una excepción como si el programa ha funcionado correctamente. Vamos a ver cómo podríamos resolver el ejercicio anterior incluyendo el manejo de excepciones.

Escuela de programación - Python Errores y excepciones Figura 6: Uso de try...except EJECUCIONES DEL PROGRAMA

#### 2.1. Tipos de excepciones

Las excepciones en Python se agrupan por categorías. Si conocemos la categoría de una excepción, podemos incluir su nombre en el bloque try...except para ser más específicos a la hora de tratar los errores. try: instrucciones que pueden provocar una excepción except nombre_excepción1

instrucciones para el tipo de excepción 1 except nombre_excepción2: instrucciones para el tipo de excepción 2 … except nombre_excepciónn: instrucciones para el tipo de excepción n except: instrucciones para otras excepciones Si ponemos un nombre de excepción al lado de la palabra except, Python sólo entrará en ese apartado cuando se haya producido ese tipo de excepción.

Si se produce una excepción y no se recoge en ningún except específico entonces el programa entrará en el apartado genérico except (sin nombre).

Escuela de programación - Python Errores y excepciones A continuación podemos ver un ejemplo: Figura 7: Especificamos varios tipos de excepciones y el general EJECUCIONES DEL PROGRAMA: Figura 8: El usuario introduce el nº "5"

Figura 9: El usuario introduce el número "0" Figura 10: El usuario introduce el texto "hola"

Figura 11: El usuario pulsa Ctrl + C Para conocer más nombres de excepciones que se pueden capturar en Python se puede visitar esta página web: https://docs.python.org/3/library/exceptions.html#concrete- exceptions

Escuela de programación - Python Errores y excepciones

#### 2.2. Más sobre excepciones

Existen más peculiaridades en el manejo de excepciones, como la propagación de excepciones con la palabra raise o el uso de los argumentos de la excepción, que no vamos a poder tratar en este curso. No obstante, con lo visto en este documento vamos a poder manejar las situaciones más comunes que se nos puedan presentar en clase.

Si quieres ampliar la información sobre excepciones, puedes visitar la siguiente página web: • https://docs.python.org/es/3/tutorial/errors.html

### 3. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Errores y excepciones: https://docs.python.org/es/3/tutorial/errors.html

---

# 1.10 Ficheros

ESCUELA DE PROGRAMACIÓN (20CT47ES006 – CEFIRE CTEM) PYTHON Ficheros Esta obra está sujeta a la licencia Reconocimiento-NoComercial- CompartirIgual 4.0 Internacional de Creative Commons. Para ver una copia de esta licencia, visitad http://creativecommons.org/licenses/by-nc-sa/4.0/.

Autora: María Paz Segura Valero (mpazprofe@gmail.com)

Escuela de programación - Python Ficheros CONTENIDO

- Introducción.....................................................................................................................................2
- Qué es un fichero.............................................................................................................................2
- Tipos de ficheros..............................................................................................................................3
- Puntero de un fichero.......................................................................................................................4
- Operaciones con ficheros................................................................................................................4

5.1. Abrir y cerrar ficheros..............................................................................................................4 5.2. Lectura de datos.......................................................................................................................7 5.2.1. Recorrido de ficheros.....................................................................................................10 5.3. Escritura de datos...................................................................................................................12 5.4. Manejo del puntero del fichero..............................................................................................13

- Tratamiento de errores...................................................................................................................15
- Fuentes de información.................................................................................................................15

Escuela de programación - Python Ficheros

### 1. Introducción

Hasta el momento todos los datos que manejábamos en nuestros programas desaparecían una vez que acababa su ejecución. Dicho con otras palabras, cuando volvíamos a ejecutar el programa no quedaba ni rastro de las modificaciones que había hecho el usuario. Conforme vayamos haciendo programas más complejos, lo habitual será que nos interese almacenar de forma persistente los cálculos que hacemos para utilizarlos en otro momento. Es decir, almacenar la información que generan nuestros programas en el disco duro del ordenador, móvil, etc.

Tradicionalmente han existidos dos sistemas de almacenamiento de información: los ficheros y las bases de datos. Aunque las bases de datos ofrecen mayores prestaciones para almacenar gran cantidad de datos relacionados entre sí, nosotros nos centraremos en la manipulación de ficheros con

```python
Python ya que es bastante más sencilla. Cuando domines este sistema de almacenamiento
```

podrás dar el salto y aprender a trabajar con bases de datos.

### 2. Qué es un fichero

Un fichero o archivo es una unidad lógica de almacenamiento de información que nos permite guardar de manera persistente una gran cantidad de información en una máquina. Todos los ficheros disponen de un nombre y una extensión y se almacenan en una carpeta/directorio de una máquina.

• El nombre suele darnos una idea de la información que contiene. Por ejemplo: lista_alumnos, notas_4eso, receta_cocina. • La extensión se compone de 3 o cuatro letras que indican el formato o tipo de información que contiene el fichero. Por ejemplo: .jpg para imágenes, .txt para documentos de texto plano, .py para programas de Python, etc.

◦El nombre y la extensión están separados entre sí por un punto. Por ejemplo: calculadora.py, lista_alumnos.txt, logotipo.jpg. Figura 1: Imagen de Jan Vašek en Pixabay

Escuela de programación - Python Ficheros • Como hemos dicho, los ficheros se almacenan en carpetas o directorios y para poder acceder a ellos debemos conocer la ruta o secuencia de carpetas que debemos visitar para llegar hasta ellos. Dependiendo del sistema operativo en el que nos encontremos la especificación de la ruta se hará de una manera o de otra.

Por

> **💡 Apunt Tècnic**
> ejemplo

C:\cursos\python\presentacion.pdf

en

Windows

o /home/cursos/python/presentacion.pdf en Lliurex. Además, los ficheros están organizados internamiento como registros, es decir, están formados por un conjunto de registros que almacenan datos de todo tipo. registro1 registro2 ... registron Podríamos entender un registro como la unidad básica de trasvase de información entre un fichero y un programa.

### 3. Tipos de ficheros

Los ficheros son de dos tipos: • Ficheros de texto

, que están compuestos por texto plano, sin inclusión de ningún código para dar formato al mismo. Ejemplo de ficheros de texto plano son los .py o los .csv. ◦Estos ficheros se pueden abrir con cualquier editor de texto plano como el Bloc de Notas de Windows o el Pluma de Lliurex.

◦Dependiendo de la codificación de caracteres utilizada, a cada carácter del texto se le asocia un byte o un grupo de bytes. Ejemplos de codificación: ASCII, UTF-8. FICHERO FICHERO Escribo registro3 Leo registro1

Escuela de programación - Python Ficheros • Ficheros binarios

, son aquellos que no contienen texto plano. El formato o la estructura de cada registro del fichero estará determinada por el programa que lo haya creado. Por ejemplo: los ficheros .doc o .ods sólo pueden abrirse con procesadores de texto. Si los abrimos con un editor de texto plano, aparecen caracteres “extraños” que no reconoce.

En este curso nos centraremos en el tratamiento de ficheros de texto.

### 4. Puntero de un fichero

A todo fichero que se abre con un programa Python se le asocia un puntero que indica la posición del fichero en la que nos encontramos actualmente. Por ejemplo: si hemos leído el primer registro del fichero, el puntero se situará detrás de dicho registro y, tanto si la siguiente instrucción es para leer como si es para escribir, se realizará justo donde esté apuntando el puntero.

registro1 registro2 ... registron Cuando se han leído todos los registros del fichero y el puntero se posiciona después del último registro, se dice que ha alcanzado la marca EOF (End Of File).

### 5. Operaciones con ficheros

Siempre que se trabaja con ficheros en Python se sigue la siguiente estructura de programa

- Abrir el fichero en el modo adecuado.
- Realizar operaciones de lectura y/o escritura con él.
- Cerrar el fichero con el que estamos trabajando.

Veamos los métodos e instrucciones que nos ofrece Python para realizar estas tareas.

#### 5.1. Abrir y cerrar ficheros

Para abrir un fichero debemos ejecutar el método open() de la siguiente forma: mi_fichero = open(ruta_fichero, modo_apertura) FICHERO Leemos registro1 puntero

Escuela de programación - Python Ficheros Donde… • mi_fichero será el nombre del objeto fichero que manejará el programa. Podemos verlo como el alias que tendrá el fichero físico dentro del programa. • ruta_fichero será una cadena de texto con la ruta de acceso al fichero, el nombre y la extensión. Puede tratarse de una ruta absoluta o una ruta relativa (desde la carpeta en la que nos encontramos actualmente). El formato dependerá del sistema operativo en el que estemos trabajando.

◦Ejemplos en Windows: “C:\cursos\python\datos.txt” sería un ruta absoluta y “datos.txt“ o “..\python\datos.txt” serían dos rutas relativas que podría utilizar, según la carpeta en la que nos encontrásemos en ese momento. ◦Ejemplo en Lliurex: “/home/cursos/python/datos.txt” sería un ruta absoluta y “datos.txt“ o “../python/datos.txt” serían dos rutas relativas que podría utilizar, según la carpeta en la que nos encontrásemos en ese momento.

• modo_apertura indica el propósito de apertura del fichero (leer, escribir, añadir) y el tipo de fichero (texto, binario). Si no se indica, se entiende que estamos abriendo un fichero de texto para lectura. A continuación puedes ver más modos de apertura: Modo Descripción r Modo de lectura. El fichero debe existir o se producirá un error.

w Modo de escritura. Si el fichero existe, se sobreescribirá su contenido. a Modo de escritura. Se añaden datos al final del contenido existente en el fichero. El fichero debe existir o se producirá un error. r+ Modo de lectura y escritura. El fichero debe existir o se producirá un error.

Los modos recogidos en la tabla anterior son los más habituales para trabajar con ficheros de texto pero puedes ver la lista completa en el siguiente enlace web: https://docs.python.org/3/library/functions.html#open Si vas a probar los siguientes programas en el editor on-line OnlineGBD, fíjate que cuando un programa cree un fichero de texto, se creará una pestaña nueva en el editor con su contenido y si el programa va a leer un fichero entonces deberás subirlo previamente a una pestaña para que lo encuentre.

Escuela de programación - Python Ficheros Ejemplo 1: Diferentes formas de abrir un fichero para leer su contenido. Figura 2: Abrir fichero para lectura Ejemplo 2: Diferentes modos de abrir un fichero para escribir. Figura 3: Abrir fichero para escribir Por defecto el juego de caracteres (codificación) que se utiliza para representar el contenido del fichero viene determinado por la codificación que está configurada en el sistema operativo. Para saber cuál es dicha codificación puedes ejecutar el siguiente bloque de instrucciones

import locale print(locale.getpreferredencoding(False)) Ejemplo: ejecución de las instrucciones anteriores en Windows y Lliurex. Figura 4: Codificación de caracteres en Windows Figura 5: Codificación de caracteres en Lliurex Si queremos asegurarnos de que la codificación que se utiliza en los ficheros que utilizan nuestros programas en Python es siempre la misma, por ejemplo: UTF-8, podemos indicarlo en el modo de apertura del fichero.

Escuela de programación - Python Ficheros Su sintaxis es la siguiente: mi_fichero = open(ruta_fichero, modo_apertura, encoding = codificación) Donde… • codificación es una cadena de texto que especifica el juego de caracteres. Figura 6: Uso del parámetro "encoding" Cuando ya hayamos acabado de trabajar con nuestro fichero, debemos asegurarnos de cerrarlo para evitar pérdidas de información y malgasto de recursos del sistema. Esta operación se realiza con el método close() del objeto fichero.

mi_fichero.close() Una forma de realizar el cierre de un fichero de forma automática es utilizar la siguiente estructura para trabajar con los ficheros: with open(nombre_fichero) as mi_fichero: #instrucciones de manejo del fichero La instrucción with se encarga de cerrar el fichero cuando acaba de ejecutarse dicho bloque, incluso cuando se haya producido un error. Es recomendable utilizar esta instrucción, cuando sea posible.

> **💡 Apunt Tècnic**
> Ejemplo: Abrimos un fichero y lo cerramos después de tratar su contenido. Figura 7: Uso de "with"

#### 5.2. Lectura de datos

El objeto fichero dispone de tres métodos que permiten realizar la lectura del contenido de un fichero de texto: read(), readline() y readlines().

Escuela de programación - Python Ficheros El método read() permite leer el contenido completo de un fichero y volcarlo en una variable de tipo cadena de texto. Su sintaxis es: mi_fichero.read() Este método devuelve una cadena de texto, así que podemos asignarlo a una variable para trabajar con ella.

> **💡 Apunt Tècnic**
> Ejemplo: Leemos el fichero con read() y comprobamos que devuelve un tipo str. Figura 8: Uso del método "read()" Fíjate que las líneas de texto acaban con un carácter “\n” para indicar el salto de línea entre una y otra. Por lo tanto, en el ejemplo anterior, hemos leído un fichero que tiene tres líneas de texto. Cada una de estas líneas se correspondería con un registro del fichero.

El método readline() lee una línea completa de un fichero de texto. Cada vez que se ejecuta mueve el puntero del fichero a la línea siguiente. Fichero “datos.txt” Estoy escribiendo algunas líneas en un fichero. tiempo = 0 #ejecutamos readline() Fichero “datos.txt” Estoy escribiendo algunas líneas en un fichero.

tiempo = 1 Su sintaxis es la siguiente: mi_fichero.readline() Al igual que con el método anterior, readline() devuelve una cadena de texto, así que podemos asignarla a una variable para trabajar con ella. puntero puntero

Escuela de programación - Python Ficheros Figura 9: Uso del método "readline()” Por último, el método readlines() lee todas las líneas de texto del fichero y las asigna a una lista donde cada elemento contiene el texto de una de las líneas del fichero. Su sintaxis es

mi_lista = mi_fichero.readlines() Figura 10: Uso del método “readlines()” Como hemos visto, los tres métodos anteriores, devuelven el carácter de fin de línea (“\n”) al final del texto de cada línea. Si queremos deshacernos de él podemos utilizar el método rstrip(“\n”) que elimina del final de una cadena de texto el carácter especificado como argumento.

A continuación podemos ver un programa donde se realiza la lectura de cada línea de un fichero de texto eliminando el carácter de fin de línea. Cuando llegamos al EOF, devuelve una cadena vacía.

Escuela de programación - Python Ficheros Figura 11: Uso del método "rstrip()" en una cadena de texto Ahora que ya sabemos cómo utilizar los métodos anteriores, vamos a ver cómo utilizar bucles para procesar el contenido de un fichero de texto.

#### 5.2.1. Recorrido de ficheros

A la hora de tratar el contenido de las líneas de un fichero de texto podemos apoyarnos en el uso de bucles for o while, según el caso. Además, como hemos visto, podemos utilizar la instrucción with para tratar los ficheros. Ejemplo 1: Lectura de las líneas de un fichero de texto sin utilizar ningún método de lectura, simplemente usando un bucle for.

Figura 12: Lectura con un bucle "for"

Figura 13: Ejecución Ejemplo 2: Similar al ejemplo anterior pero utilizando la instrucción with. Figura 14: Uso de "with" sin métodos de lectura.

Figura 15: Ejecución

Escuela de programación - Python Ficheros Ejemplo 3: Utilizamos un while que llama al método readline() hasta que encuentra el fin de fichero o EOF (equivalente a una cadena de texto vacía). Figura 16: Uso de "while" y "readline"

Figura 17: Ejecución Ejemplo 4: Similar al ejemplo anterior pero utilizando la instrucción with. Figura 18: Uso de "with" y "readline"

Figura 19: Ejecución Ejemplo 5: Como el método readlines() devuelve una lista de líneas, podemos utilizar un bucle for para procesarlas. Figura 20: Uso de "for" y "readlines"

Figura 21: Ejecución Ejemplo 6: Similar al ejemplo anterior pero utilizando la instrucción with. Figura 22: Uso de "with" con readlines()

Figura 23: Ejecución

Escuela de programación - Python Ficheros

#### 5.3. Escritura de datos

El objeto fichero dispone de dos métodos que permiten realizar la lectura del contenido de un fichero de texto: write(), y writelines(). Ninguno de los métodos de escritura que vamos a ver a continuación incluyen al final de cada línea el carácter ‘\n’ de forma automática, así que será tarea nuestra ocuparnos de ello.

Recordemos que si utilizamos un modo de lectura ‘a’, el puntero se posicionará al final del contenido para seguir escribiendo. En otro caso, se posicionará al principio del fichero. El método write() permite escribir una cadena de texto en un fichero y su sintaxis es la siguiente: mi_fichero.write(linea) Figura 24: Uso del método "write()" A continuación se puede ver una ejecución del programa y el contenido final del fichero.

Figura 25: Ejecución del programa

Figura 26: Contenido del fichero El método writelines(), por su parte, recibe como parámetro una lista de cadenas y las guardar en el fichero correspondiente. Su sintaxis es la siguiente: mi_fichero.writelines(lista) Figura 27: Uso del método "writelines()" Insertamos el carácter de fin de línea antes de escribir la cadena en el fichero.

Añadimos el carácter de fin de línea a cada cadena de la lista que queremos escribir en el fichero.

Escuela de programación - Python Ficheros A continuación se puede ver una ejecución del programa y el contenido final del fichero. Figura 28: Ejecución del programa

Figura 29: Contenido del fichero

#### 5.4. Manejo del puntero del fichero

En algún momento puede ser de utilidad conocer la posición del puntero en el fichero o ubicarlo al principio o al final del fichero. Para llevar a cabo estas tareas disponemos de dos métodos en los ficheros: tell() y seek(). El método tell() devuelve un número entero que indica la posición del puntero desde el principio del fichero. Su sintaxis es la siguiente: mi_fichero.tell() Figura 30: Uso de tell() Este programa lee un fichero de texto línea a línea e indica la posición en la que se encuentra el puntero en cada momento.

Utilizamos la función ljust(número) que permite alinear una cadena de texto a su izquierda. El número que se pasa como argumento es el número de posiciones que se reservan para escribir la cadena de texto. Figura 31: Ejecución programa Por su parte, el método seek() permite mover el puntero del fichero a una posición determinada.

Su sintaxis es la siguiente: mi_fichero.seek(desplazamiento, origen) Si calculamos la longitud de la cadena veremos que en la tercera línea la posición del puntero no coincide con nuestros cálculos. Esto se debe a que el carácter á no ocupa los mismos bytes que una letra no acentuada.

Escuela de programación - Python Ficheros Donde: • desplazamiento es el número de bytes que vamos a movernos desde origen. • origen es la posición desde la que partimos. En los ficheros de texto sólo es posible realizar los siguientes movimientos: • Un desplazamiento desde el principio del fichero teniendo en cuenta que los desplazamientos deben basarse en un valor devuelto por el método tell().

• Ir directamente al final del fichero. Fichero “datos.txt” Estoy escribiendo algunas líneas en un fichero. A continuación se puede ver el ejemplo anterior ampliado donde utiliza el método seek() para desplazarse al principio del fichero, al final de la segunda línea y al final del fichero.

Para conocer la posición exacta del final de la segunda línea, debemos utilizar el método tell() cuando acabamos de leerla y guardarlo en la variable desplazamiento. Figura 32: Uso del método seek() origen desplazamiento destino

Escuela de programación - Python Ficheros

### 6. Tratamiento de errores

Si, en lugar de utilizar la instrucción with, preferimos encargarnos de abrir y cerrar los ficheros nosotros mismos, debemos asegurarnos de que los ficheros quedan cerrados, incluso cuando se produce algún error. Por eso, deberíamos utilizar una instrucción try...finally con la siguiente sintaxis

mi_fichero.open(nombre_fichero, modo) try: #instrucciones de lectura/escritura finally: mi_fichero.close() A continuación se puede ver un ejemplo de uso: Figura 33: Uso de try...finally Si quieres ampliar la información sobre ficheros, puedes visitar las siguientes páginas web

• Leyendo y escribiendo ficheros (en castellano): https://docs.python.org/es/3/tutorial/inputoutput.html#reading-and-writing-files • Reading and writing files in Python: https://realpython.com/read-write-files- python/

### 7. Fuentes de información

• Página oficial del lenguaje Python: https://www.python.org/ • Reading and writing files in Python: https://realpython.com/read-write-files-python/

Escuela de programación - Python Ficheros • Curso de Python 3 de José Domingo Muñoz: https://plataforma.josedomingo.org/pledin/cursos/python3/ • Manejo de ficheros de Hektor Profe: https://docs.hektorprofe.net/python/manejo- de-ficheros/ • «Curso de Programación en Python», José Luis Tomás Navarro.

---
