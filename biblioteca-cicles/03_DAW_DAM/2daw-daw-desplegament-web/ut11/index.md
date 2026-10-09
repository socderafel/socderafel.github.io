---
layout: default
title: "UD1 — Serveis de Xarxa Implicats en el Desplegament (DNS i LDAP) · Unitat Completa"
course_root: ".."
badge: "2n DAW · Grau Superior · UT11 Completa"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut11/ut1101.html"
next_label: "11.1 UT 1.3 Preparación del servidor de directorios L ➡️"
---

# 📘 UD1 — Serveis de Xarxa Implicats en el Desplegament (DNS i LDAP) (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**11.1 UT 1.3 Preparación del servidor de directorios L**](./ut1101.md)
- [**11.2 UT 1.2 Servicio de directorios LDAP**](./ut1102.md)
- [**11.3 UT 1.1 Servicios de Red**](./ut1103.md)

---

# 11.1 UT 1.3 Preparación del servidor de directorios L

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 25/09/23 al 08/10/23

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 11/09/23 al 24/09/23

---

DAW: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### UT 1.3 SERVICIOS EN RED

Preparación del servidor de directorios para el despliegue. Despliegue de Aplicaciones Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web Taula de continguts

- Introducción..........................................................................................................................................3
- Configuración básica del servicio de directorio....................................................................................3
- Creando grupos y nuevos usuarios........................................................................................................5

2 / 8

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

- INTRODUCCIÓN.

En esta unidad empezaremos a crear la estructura jerárquica del árbol DIT (Directory Information Tree). Usaremos archivos LDIF (LDAP Data Interchange Format) que, básicamente, son archivos de texto plano, creados con un formato específico, el cual deberemos respetar para crearlos de forma correcta.

Crearemos una plantilla con la que crearemos una Unidad organizativa (ou). Esta será el elemento lógico que agrupará al resto de los objetos que creemos en el directorio (usuarios, servicios, dominios..).

- CONFIGURACIÓN BÁSICA DEL SERVICIO DE DIRECTORIO.

 Abrir un editor de texto (nano)

```html
sudo nano ou.ldif
```

Escribir el siguiente contenido: Como se puede ver, el objeto se llama unidad, se encuentra en la parte superior de la jerarquía y es una unidad organizativa (ou).  Añadir información del administrador al fichero

```html
sudo ldapadd -x -D cn=admin,dc=javier,dc=local -W -f ou.ldif
```

La salida del comando nos informará si se ha producido algún error. 3 / 8

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web  Ejecutamos slapcat para comprobar posibles errores.

```html
sudo slapcat
```

4 / 8

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### 3. CREANDO GRUPOS Y NUEVOS USUARIOS

En este apartado seguiremos completando el archivo ou.ldat con los usuarios que podrán así como de los diferentes grupos de la organización. Crearemos un nuevo archivo ldif y lo integraremos en la base de datos con el comando ldapadd. Como es lógico primero crearemos un grupo y luego, un usuario que forme parte de ese grupo. De ese modo también se respeta el orden que establece la jerarquía de los objetos de la base de datos.

 Creación de un grupo de usuarios.

```html
sudo nano grp.ldif
```

Dentro del cual ponemos la siguiente información. dn: cn=grupo,ou=unidad,dc=javier,dc=local objectClass: top objectClass: posixGroup gidNumber: 10000 cn: grupo Nota: Por convención los UID (user id) de los grupos empiezan a partir del valor 10000 (gidNumber: 10000). Así pues, los siguientes grupos creados de forma manual, adoptarán los valores 10001, 10002… 5 / 8

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

```html
sudo ldapadd -x -D cn=admin,dc=javier,dc=local -W -f grup.ldif
```

 Ejecutar slapcat para comprobar la entrada a la BBDD.  Crear manualmente un usuario. Para añadir un usuario debemos tener en cuenta que no podemos almacenar la contraseña sin cifrar. Para ello, usaremos slappasswd. Genera un hash utilizando el algoritmo SHA-1 de la contraseña original (se puede cambiar el algoritmo que se aplique usando el argumento -h).

6 / 8

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web Creamos el archivo ldif para el nuevo usuario.

```html
sudo nano usr.ldif
```

Escribimos los detalles del nuevo usuario Nota: Por convención los UID (user id) de los usuarios empiezan a partir del valor 2000 (uidNumber: 2000). Así pues, los siguientes usuarios creados de forma manual, adoptarán los valores 2001, 2002…  Añadir manualmente un usuario.

Escribir el siguiente comando

```html
sudo ldapadd -x -D cn=admin,dc=somebooks,dc=local -W -f usr.ldif
```

si el nuevo usuario se ha añadido correctamente: 7 / 8

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web  Comprobar las entradas al directorio con slapcat. 8 / 8

---

# 11.2 UT 1.2 Servicio de directorios LDAP

DAW: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### UT 1.2 SERVICIOS EN RED

Servicio LDAP Despliegue de Aplicaciones Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web Taula de continguts

- Servicio de directorio............................................................................................................................3
- Organización del LDAP........................................................................................................................3

2.1. Organización..................................................................................................................................3 2.2. Características de un servicio de directorio LDAP.......................................................................4 2.3. Estructura de un servicio de directorio LDAP..............................................................................4 2.3.1. Estructura de DN...................................................................................................................4 2.3.2. Atributos................................................................................................................................5

- Instalación de OpenLDAP en SO LINUX:...........................................................................................6

3.1. Configuración inicial del servidor:................................................................................................6 3.2. Instalación del servicio LDAP:.....................................................................................................7 3.3. Marcha paro del servicio:............................................................................................................10 3.4. Otros comandos:..........................................................................................................................10 2 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

- SERVICIO DE DIRECTORIO.

Un servicio de directorio es una aplicación (o un conjunto de aplicaciones) que almacena y organiza la información sobre los usuarios de una red, los recursos de red y permite a los administradores gestionar el acceso de usuarios a los recursos sobre dicha red (control de seguridad).

Las aplicaciones que acceden a los servicios de directorio son muy diversas, desde aplicaciones web, pasando por el correo electrónico, acceso a edificios, sistemas operativos etc. Para la creación de un servicio de directorio, nos centraremos en el LDAP (Lightweight Directory Access Protocol / basado en el servicio de directorio X.500), dado que es actualmente el estándar más usado.

### 2. ORGANIZACIÓN DEL LDAP

#### 2.1. Organización

La organización de este tipo de directorios puede estar centralizada o distribuida (según interese el diseño). ➢Centralizado: Todas las consultas se canalizan a un único servidor (y respondidas por él). La ventaja principal es que no hay que sincronizarlo a otros servidores y el principal inconveniente es que la caída del servidor hace que la red se quede sin validación.

➢Distribuido: La información está dividida entre varios servidores. Los datos pueden estar fraccionados o replicados. Para la integridad y la calidad del servicio, la configuración más optima consiste en una mezcla de las anteriores opciones. 3 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

#### 2.2. Características de un servicio de directorio LDAP

LDAP es un estándar es decir no es un hardware o un software que se pueda comprar. Lo que se instala en el equipo cliente o servidor es la implementación de este protocolo. En el modelo cliente-servidor de LDAP, una consulta del cliente es respondida por el servidor con la información solicitada. La respuesta puede ser la información solicitada o un puntero que indica dónde se encuentra disponible esa información.

Como ya comentado, se puede aumentar la disponibilidad y la fiabilidad del directorio utilizando más de un servidor LDAP para mantener la información. El LDAP se implementa en el protocolo TCP/IP y es un protocolo orientado a mensajes. Es decir en cuanto el mensaje ha llegado al receptor, la operación de recepción ha terminado.

El formato de intercambio de datos (mensaje en el que se muestran los atributos de los nodos/usuarios) se denomina LDIF (LDAP Data Interchange Format). El proceso es el siguiente: ➢El cliente LDAP envía una solicitud al servidor LDAP. ➢El servidor ejecuta una o varias operaciones (según lo que se especifique en la solicitud).

➢En el caso de una transmisión correcta, el servidor envía los resultados. En caso de error se envía al cliente el código de error correspondiente.

#### 2.3. Estructura de un servicio de directorio LDAP

La estructura básica de LDAP es un árbol de nodos llamado Directory Information Tree (DIT) donde cada nodo es una entrada. Cada entrada se define por un DN (Distinguished Name) y contiene un conjunto de atributos (pares nombre/valor). Este DN es una cadena que indica la ruta en el árbol de dicha entrada y será único en todo el árbol.

Un directorio LDAP está concebido para favorecer las peticiones de lectura sobre las de escritura, de modo que las lecturas serán muy rápidas y se penalizarán las operaciones de escritura. Con esta premisa en mente, los datos de un directorio LDAP deberán estar estructurados para cambiar lo menos posible.

#### 2.3.1. Estructura de DN

Un DN tiene una estructura similar a la ruta de un fichero, solo que en orden inverso. Esto es, los nodos de la ruta se muestran de hoja a raíz. Un ejemplo del aspecto que ofrece un DN: cn=usuario1, ou=people, ou=division1, dc=miorg, dc=es Puede verse que cada componente se muestra como un par “atributo=valor” donde el atributo es una abreviatura o mnemónico usado por LDAP.

4 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web En el ejemplo, desde la raiz dc=miorg,dc=es la estructura representada es dc=miorg,dc=es ou=division1 ou=people cn=usuario1

#### 2.3.2. Atributos

Como se ha visto, cada entrada de LDAP contiene un conjunto de atributos que viene dado por la naturaleza del propio nodo. Este conjunto se forma a partir de otros conjuntos ya predefinidos en el LDAP llamados clases. Cuando se crea una entrada en el LDAP, se especifica qué clases incorporará. Además, estas clases permiten herencia, de modo que hay clases que pueden incorporar muchos atributos, pero que en realidad son heredados de otras clases.

Los atributos en LDAP suelen tener un nombre abreviado o mnemónico. Por ejemplo, es normal que una entrada aparezca como cn=usuariox, siendo algunos de sus atributos cn, sn, ou… Algunos ejemplos de atributos: Atributo Significado cn “common name”, nombre sn “surname”, apellido uid “userid”, nombre de usuario mail e-mail ou “organizational unit”, unidad organizativa telephoneNumber Número de teléfono Una característica peculiar de los atributos de LDAP es que estos son multivaluados. Es decir, que una consulta al valor de un atributo en realidad devuelve una colección de valores, aunque normalmente solo exista un valor a devolver.

5 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### 3. INSTALACIÓN DE OPENLDAP EN SO LINUX

#### 3.1. Configuración inicial del servidor

Al igual que para el servidor DNS es muy recomendable tener una IP fija. Si el servidor DHCP asigna una IP aleatoria, los clientes de la red local perderán el acceso a nuestro servidor que asegura el servicio LDAP. ➢Configurar el Static DHCP en el router/firewall que tengamos.

➢Configurar la dirección IP estática en nuestro servidor Linux. El servidor DHCP del router/firewall debería tener un rango de DHCP que esté fuera de nuestra dirección IP privada que pongamos fija.

#### 3.2. Instalación del servicio LDAP

La máquina en la que instalaremos el servicio de LDAP tendrá como sistema operativo Ubuntu Server 20.04 LTS.  Antes de nada debemos asegurarnos de que el sistema se encuentra completamente actualizado. Para ello, basta con ejecutar en la terminal el comando

```html
sudo apt update -y && sudo apt upgrade -y && sudo apt dist-upgrade -y
```

 Una vez completada la actualización, pasamos a la instalación propiamente dicha. Como los dos paquetes que necesitamos se encuentran en los repositorios oficiales de Ubuntu 20.04 LTS, sólo tenemos que escribir en la terminal la siguiente orden

```html
sudo apt install slapd ldap-utils -y
```

Introducir y confirmar constraseña de administrador. 6 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web  Realizar la configuración básica. Una vez concluida la instalación, debemos realizar la configuración.

```html
sudo dpkg-reconfigure slapd
```

Al omitir la opción -y, conseguiremos que se inicie de nuevo el asistente de configuración, pero esta vez pidiendo todos los datos. Lo primero que nos pregunta el asistente es si queremos omitir la configuración de OpenLDAP. Introducir el nombre del dominio, es este caso javier.local A continuación, deberemos escribir el nombre de la empresa o entidad en la que estemos realizando la instalación. En este caso: javier 7 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web Introducir y confirmar contraseña del administrador Confirmar el borrado de la BBDD inicial (vacía al ser nuevo el servicio de LDAP). El asistente avisa que aún quedan archivos en la carpeta de LDAP que pueden estropear el proceso de configuración y pide autorización para retirarlos antes de crear la nueva base de datos.

8 / 9

DAM: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web  Comprobar la instalación Con el comando slapcat, comprobar que la instalación se ha realizado correctamente.

```html
sudo slapcat
```

#### 3.3. Marcha paro del servicio

Ya tenemos instalado el servicio de directorio LDAP. Para iniciarlo o pararlo, escribir en la terminal: ➢sudo service slapd start ➢sudo service slapd stop Una vez el servicio iniciado, el servidor LDAP escuchará el puerto 389 de los protocolos TCP y UDP. Si la conexiones se hace con sockets seguros SSL el puerto será el 636.

#### 3.4. Otros comandos

➢# service slapd reload, recarga la configuración sin reiniciar el servicio. ➢# service slapd restart, reinicia el servicio. ➢# service slapd status, comprueba si el servicio está activo o iniactivo. 9 / 9

---

# 11.3 UT 1.1 Servicios de Red

DAW: Desarrollo de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### UT 1.1 SERVICIOS EN RED

Servicio DNS Despliegue de Aplicaciones Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web Taula de continguts

- INTRODUCCIÓN................................................................................................................................3
- Sistema de nombre de dominio.............................................................................................................3

2.1. Resolución.....................................................................................................................................3 2.2. Nombre de dominio.......................................................................................................................3 2.3. Niveles de dominio........................................................................................................................4 2.4. Zonas de búsquedas.......................................................................................................................4

- Tipos de servidores DNS y registros:....................................................................................................5

3.1. Tipos de servidores DNS:..............................................................................................................5 3.2. Registros DNS:..............................................................................................................................6

- Funcionamiento del servicio DNS y tipos de consultas:.......................................................................7

4.1. Resolución recursiva:....................................................................................................................7 4.2. Resolución iterativa:......................................................................................................................7 4.3. Resolución inversa:.......................................................................................................................7

- Instalación y configuración de un servidor DNS local en SO linux:....................................................7

5.1. Configuración de la máquina en la que se instalará el paquete Bind9:.........................................8 5.2. Instalación de Bind:.......................................................................................................................9 2 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

- INTRODUCCIÓN.

Una aplicación web necesita de servicios de red para poder funcionar de forma correcta y coherente. Estos servicios son el servicio DNS y el servicio de directorio LDAP. El servicio DNS, o sistema de nombres de dominio, traduce los nombres de dominios aptos para lectura humana (por ejemplo, www.IES_Sant_Vicente.com) a direcciones IP aptas para lectura por parte de máquinas (por ejemplo, 192.0.2.44).

El servicio LDAP (Lightweight Directory Access Protocol), es uno de los principales protocolos de autenticación que se desarrolló por los servicios de directorio. Cuando tenemos decenas de ordenadores en una red, es necesario organizar los datos correctamente y también las credenciales de los diferentes usuarios. Para poder crear una estructura jerárquica es muy importante contar con un sistema como LDAP, el cual permitirá almacenar, administrar y proteger la información de todos los equipos adecuadamente, y también se encargará de gestionar todos los usuarios y activos.

### 2. SISTEMA DE NOMBRE DE DOMINIO

2.1. Resolución. Para poderte conectarse al servidor o host remoto sin disponer de la IP, es necesario resolver el nombre de dominio. Existen básicamente dos formas para que el dispositivo resuelva el nombre de dominio requerido: ➢Consulta del fichero /etc/hosts en la ruta de cualquier SO Linux y \Windows\ System32\drivers\etc para Windows.

➢Servidores DNS, definidos en la configuración de la tarjeta de red o por obtención automática. La más habitual es la segunda. 2.2. Nombre de dominio. Es la dirección de una empresa, organización, asociación, persona o grupos de personas en Internet. Permite que su información, sus productos y/o servicios sean accesibles en todo el mundo a través de la Red de redes.

3 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web 2.3. Niveles de dominio. Existen tres niveles de dominios en Internet

- Primer nivel: Terminan en .com, .gob, .org, ... Son asignados por el ICANN

(Internet Corporation for Assigned Names and Numbers).

- Segundo nivel: Tienen relación con el país donde se dan de alta. En España

son asignados por Red.es.

- Tercer nivel: Terminan en .com.es, .nom.es, .org.es, .gob.es, .edu.es. A

diferencia de los anteriores se asignan seguiendo criterios otros que el primera solicitud. Tambien tienen que seguir unas normas de sintaxis. 2.4. Zonas de búsquedas. Normalmente, los servidores DNS se componen de zonas que son las encargadas de contener los diferentes tipos de registros (por ejemplo la IP de un servidor de correo de un servidor web, ...).

El servicio de servidor DNS admite los siguientes tipos de zona: ➢Zona principal (o directa). Permite traducir el nombre de dominio a la dirección IP del recurso solicitado. ➢Zona secundaria. Es la copia de solo lectura de una zona principal. ➢Zona de rutas internas.

Una zona de rutas internas solo contiene información sobre los servidores de nombres autoritativos de la zona. ➢Zona de búsqueda inversa. Los registros que se definen en esta zona permiten obtener un nombre de un dominio a partir de una dirección IP. El servicio DNS se utiliza tanto en Internet como en redes locales. Depende del administrador del sistema que los nombres de DNS se conozcan en Internet o no.

4 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### 3. TIPOS DE SERVIDORES DNS Y REGISTROS

#### 3.1. Tipos de servidores DNS

➢Servidor primario (maestro): Guardan la información relacionada con las zonas de las que son autorizados. ➢Servidor secundario (esclavo): Contiene una copia de solo lectura de los archivos de zona. ➢Servidor caché: No tiene autoridad sobre ninguna zona y se utiliza para acelerar las consultas, almacenando las últimas realizadas.

➢Servidor reenviador: Cuando un servidor DNS no tiene la respuesta a una consulta, puede acudir a este tipo de servidores para reducir el tráfico y las consultas DNS, ya que resuelven completamente la consulta y se comparte su caché. ➢Servidor solo autorizado: Están autorizado en una o varias zonas, como primario o secundario, pero no preguntan a otros servidores para resolver la petición.

➢Servidores raíz (root servers): Contienen el fichero de la zona que contiene información sobre los servidores DNS autorizados para cada uno de los dominios. Son el primer paso en la resolución de los nombres que se utilizan en la comunicación entre los hosts de Internet.

5 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

#### 3.2. Registros DNS

Los registros DNS proporcionan información sobre un dominio, como la dirección IP asociada y proporcionan información sobre cómo gestionar solicitudes dirigidas a dicho dominio. Tipo Nombre Función Definición Zona SOA Start Of Authority Define una zona representativa del DNS NS Name Server Identifica los servidores de zona, delega subdominios Básicos A Dirección IPv4 Traducción de nombre a dirección AAAA Dirección IPv6 original Actualmente obsoleto A6 Dirección IPv6 Traducción de nombre a dirección IPv6 PTR Puntero Traducción de dirección a nombre DNAME Redirección Redirección para las traducciones inversas IPv6 MX Mail eXchanger Controla el enrutado del correo Seguridad KEY Clave pública Clave pública para un nombre de DNS NXT Next Se usa junto a DNSSEC para las respuestas negativas SIG Signature Zona autenticada/firmada Opcionales CNAME Canonical Name Nicks o alias para un dominio LOC Localización Localización geográfica y extensión RP Persona responsable Especifica la persona de contacto de cada host SRV Servicios Proporciona la localización de servicios conocidos TXT Texto Comentarios o información sin cifrar 6 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

### 4. FUNCIONAMIENTO DEL SERVICIO DNS Y TIPOS DE CONSULTAS

#### 4.1. Resolución recursiva

El servidor local se encargará de dar una respuesta COMPLETA al cliente y consultará a los servidores DNS intermedios que necesite en su nombre.

#### 4.2. Resolución iterativa

El servidor DNS local devuelve la mejor respuesta que puede ofrecer al cliente. Si no dispone de la información solicitada, indicará la IP del siguiente servidor de nombres autorizado.

#### 4.3. Resolución inversa

Es una petición que se realiza cuando un PC o dispositivo quiere saber el nombre del dominio al que pertenece un registro en particular (obsoleto).

### 5. INSTALACIÓN Y CONFIGURACIÓN DE UN SERVIDOR DNS LOCAL EN SO

LINUX: La instalación que se va a realizar es del servicio bind9 bajo SO Linux (Debían). Para las prácticas, la instalación se puede realizar en una máquina virtual o en una máquina física. Bind (Berkeley Internet Name Domain), es un software que se encarga de realizar la tarea de servidor DNS. Bind es actualmente un estándar, y es utilizado ampliamente en sistemas operativos Linux.

Bind no sustituye a servidores DNS públicos como Google (8.8.8.8), Cloudflare (1.1.1.1) u otros, sino que se complementa con ellos. Los clientes de la red local tendrán como servidor DNS el servidor Bind. Si un cliente de la red local, realiza una petición DNS a una web de Internet, el servidor con Bind reenviará la petición a servidores DNS públicos devolviéndola al cliente.

La finalidad de montar un servidor de DNS local, es debida a la necesidad de acceder a diferentes equipos de la red local a través de un nombre de dominio. Cualquier empresa de cierto tamaño necesitará instalar un servidor DNS para acceder a los diferentes ordenadores, ya sea para compartir archivos e incluso para acceder a la intranet de la propia empresa.

7 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

#### 5.1. Configuración de la máquina en la que se instalará el paquete Bind9

Es muy recomendable tener una IP fija en nuestro servidor DNS. Si el servidor DHCP asigna una IP aleatoria, los clientes de la red local perderán el acceso a nuestro servidor DNS. ➢Configurar el Static DHCP en el router/firewall que tengamos. ➢Configurar la dirección IP estática en nuestro servidor Linux. El servidor DHCP del router/firewall debería tener un rango de DHCP que esté fuera de nuestra dirección IP privada que pongamos fija.

Ejemplos de comandos para configurar las opciones de red: Comando Descripción #ifconfig Muestra y modifica la configuración de la red. #ifconfig eth0 Visualiza la configuración de la interfaz eth0. #ifconfig eth0 down/up Activa y desactiva la interfaz eth0. #ifconfig eth0 add 192.168.1.10 Configura la IP para la interfaz eth0.

#ifconfig eth0 mask 255.255.255.0 Configura la máscara para la interfaz eth0. #ifconfig eth0 promisc Activa el modo promiscuo. #ifconfig eth0 —promisc Desactiva el modo promiscuo. #ifconfig eth0 hw ether XX:XX:XX:XX:XX:XX Cambia la MAC de la tarjeta de red. También se puede configurar de forma estática la dirección IP (en Linux) editando el archivo de configuración /etc/network/interfaces con cualquier editor de texto y añadiendo lo siguiente

Luego debemos reiniciar el servicio: 8 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web

#### 5.2. Instalación de Bind

➢Escribir en la consola: ➢Para comprobar que el servicio DNS se ejecuta correctamente escribimos en la consola

```html
# service bind9 start
# service bind9 status
```

➢Ir al directorio del Bind y configurar los archivos que necesitan ser configurados. Cambio de directorio. ➢Listar los archivos del directorio con el comando ls-l. Nota: Se recomienda realizar una copia de seguridad antes de modificar ningún archivo con el siguiente comando

9 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web ➢Editar el archivo “named.conf.options”: En ese fichero se define la caché de nuestro DNS, y la configuración genérica del servidor, como puede ser la transferencia de zonas, forwarders, etc. Añadimos los forwarders siguientes para poder resolver dominios fuero de nuestra red.

Quedando de la siguiente forma: ➢Reiniciamos el servicio para comprobar que no hay errores de ejecución. ➢Ejecutamos (por ejemplo) el comando “nslookup www.portal.edu.gva.es/iessantvicent/ Si el forward funciona correctamente, el dominio deberia resolverse y ir acompañado de la IP.

10 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web ➢Configuración de Bind para resoluciones locales. Nota: Realizar copia de seguridad del archivo “named.conf.local antes de modificar el archivo. Editar el archivo y añadirle la zona y el archivo de configuración de Bind con todas las configuraciones. En el ejemplo llamaremos a la zona “redlocal.com” ➢Copiar la base de datos “db.local” y darle el nombre de “db.redlocal”.

➢Editar el archivo “db.redlocal”. Detalle de las diferentes opciones que posee el fichero de zona directa: ✔ $TTL (Time to Live): indica la duración en segundos que se conservarán los datos en memoria caché. ✔ Nombre_zona: FQDN de la zona administrada por este archivo, los nombres de zona deben acabar en punto, de lo contrario dará error en el chequeo de los archivos.

Usualmente se pone @ para no cargar demasiado al archivo. Es necesario declarar el registro NS y A para que la zona conozca tanto el dominio como la IP del servidor DNS que suministra la zona. 11 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web ✔ IN: obsoleto pero es la única que se puede usar hasta la fecha. Es la clase de Internet. ✔ SOA (Start of Authority): registro obligatorio para indicar que el servidor actual es el propietario y legítimo de esta zona.

✔ Serial: número de serie del archivo, se usa cuando la zona se replica a otros servi- dores. ✔ Refresh: valor numérico que se utiliza cuando la zona se replica a un servidor esclavo, y el intervalo con el que se comprueba la validez. ✔ Retry: valor numérico que indica el tiempo que pasa hasta que contacta el servidor esclavo con el servidor maestro.

✔ Expire: es otro valor numérico que indica cuántos segundos como máximo el servidor retendrá los registros antes de expirarlos. ✔ Negative: indica cuánto tiempo el servidor debe conservar en su caché la repuesta negativa. ✔ NS: registro que indica cuál es el servidor de nombres para esta zona.

➢Comprobar que la sintaxis es correcta: ➢Reiniciamos el servicio Bind y comprobamos que no se generan errores. ➢Comprobamos que todo funciona correctamente. El resultado será la IP del router. ➢Comprobamos que podemos resolver los dominios locales correctamente: Escribimos la linea de comando: # ping router.redlocal.com.

Si time es diferente de timeout, significa que hemos resuelto correctamente los dominios locales. 12 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web ➢Configuración para la resolución a la inversa de los dominios: Permitirá al usuario conocer el nombre del dominio si solo dispone de la IP. Añadimos al fichero /etc/bind/named.conf.local ➢Configuración del archivo de configuración por defecto

Copiamos el archivo db.127 y creamos el db.192. Una vez creado el archivo db.192 lo editamos con la siguiente informacion: ➢Verificamos la sintaxis del archivo db.192 (En el ejemplo la IP del servidor DNS es 192.168.231.130). 13 / 14

DAM: Diseño de Aplicaciones Web Módulo: Despliegue de Aplicaciones Web ➢Reiniciamos el servidor DNS con Bind: ➢Si la ejecución del servicio es correcta, la respuesta debería ser: 14 / 14

---
