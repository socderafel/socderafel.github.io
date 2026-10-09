---
layout: default
title: "UT2 — U6: Servicio de Transferencia de ficheros (FTP) — Serveis en Xarxa | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT2 Completa"
prev_url: "../ut01/ut01actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT1"
next_url: "../ut02/ut0201.html"
next_label: "2.1 FTP ➡️"
---

# 📘 UT2 — U6: Servicio de Transferencia de ficheros (FTP) (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**2.1 FTP**](#ut0201) (o [obrir en pàgina individual ➡️](./ut0201.md) )
> - [**✍️ Activitats pràctiques UT2**](#ut02actividades) (o [obrir en pàgina individual ➡️](./ut02actividades.md) )

---

## 2.1 FTP

> **📌 🏷️ Apunt de la Unitat**
> ### **U6: Servicio de Transferencia de ficheros (FTP)**
>
> **Duración**
>
> :
>
> **Guía de estudio**
>
> :
>
> En esta ocasión nos vamos a ocupar del conocido servicio de FTP, cuyo aprendizaje realizaremos una vez más sobre la base del escenario que venimos manejando a lo largo del curso. La implementación la haremos basándonos en CentOS, a través de las diferentes versiones existentes de este servicio.
>
> **Organización las sesiones:**
>
> | Sesión | Contenido |
> | --- | --- |
> | 7 | Autoevaluación inicialIntroducción al servicio en la pizarra (15 min.)Estudio enunciado del escenario + Organización grupalEntrega acta inicial |
> | 11 | Trabajo individual |
> | 12 | Trabajo individual |
> | 14 | Reunión grupal de seguimientoEntrega acta de seguimiento |
> | 18 | Trabajo individual |
> | 19 | Trabajo individual |
> | 21 | Reunión grupal de seguimientoEntrega acta de seguimiento |
> | 25 | Trabajo individual |
> | 26 | Estudio en equipo del escenarioCorrección cuestionario por pares |
> | 28 | Test de conocimientosEvaluación compañerosEntrega documentación |
> Recursos

> **🔗 Recurs Web: Enunciado Caso Práctico**
> [**🌐 Obrir recurs extern (https://docs.google.com/document/d/10dWqO8_LV_JhO5Zloe4pWmOTCqacC5bjP-Va_MWjchs/pub) ↗️**](https://docs.google.com/document/d/10dWqO8_LV_JhO5Zloe4pWmOTCqacC5bjP-Va_MWjchs/pub)

📎 **Material de laboratori (Modelo actas equipo):** `Acta_Planificacion_Inicial_U6.rtf`, `Acta_seguimiento_semanal_U6.rtf`

---

FTP

2 SMX – Servicios en Red 2 SMX – Servicios en Red Tema 6: Tema 6: Servicio FTP Servicio FTP

Tema 6: Servicio FTP

### 1. Introducción

### 2. Servidores FTP

### 3. Estructura

### 4. Modos de Conexión

4.1.Modo Activo 4.2.Modo Pasivo

### 5. Tipos de Archivos

### 6. Tipos de Usuario

### 7. Cuotas de Usuario

Índice

Tema 6: Servicio FTP El Protocolo FTP (File Transfer Protocol) es uno de los primeros que se empezó a explotar en redes TCP/IP. Aporta la funcionalidad de conectarse de forma remota a un servidor FTP y realizar con él intercambio de ficheros. Al principio de la era Internet, era un protocolo muy utilizado, pero hoy en día, no es así, pues existen otros protocolos más jóvenes (como el http), con los que se puede realizar la función de la transferencia de ficheros, de forma sencilla y segura. Aún así, actualmente, FTP es muy útil en determinados escenarios de uso, como el de “almacén público de datos”.

Un problema básico de FTP es que está pensado para ofrecer la máxima velocidad en la conexión, pero no la máxima seguridad, ya que todo el intercambio de información, desde el login y password del usuario en el servidor hasta la transferencia de cualquier archivo, se realiza en texto plano sin ningún tipo de cifrado 1.- Introducción

Tema 6: Servicio FTP Esto hace que sea posible el sniffing de los mismos, provocando un agujero de seguridad en el servidor. Para solucionar este problema son de gran utilidad aplicaciones como scp y sftp, incluidas en el paquete SSH, que permiten transferir archivos pero cifrando todo el tráfico.

Existe otro protocolo similar, llamado TFTP (Trivial File Transfer Protocol), que está pensado para su uso dentro de redes locales fiables. Este último utiliza un sistema de control más sencillo y usa UDP como protocolo de transporte, que no implementa control de errores.

1.- Introducción

Tema 6: Servicio FTP Existe una gran diversidad de servidores FTP para UNIX/Linux. Cabe destacar dos servicios: ProFTPD: Puede incorporar cifrado. Es muy recomendable y está constantemente actualizado y revisado. – http://www.proftpd.org/goals.html VSFTPD (Very Safe FTPD): Compatible con IPv6, cifrado SSL, multihilo... Es muy moderno, hace especial hincapié en la seguridad y es muy eficiente y muy rápido.

https://security.appspot.com/vsftpd.html 2.- Servidores FTP

Tema 6: Servicio FTP Aunque la transferencia de archivos de un sistema a otro parece simple y sencilla, se deben resolver algunos problemas. Por ejemplo, dos sistemas pueden utilizar convenciones diferentes para los nombres de los archivos. Dos sistemas pueden tener diferentes formas de representar texto y datos. Dos sistemas pueden tener diferentes estructuras de directorios. Todos estos problemas han sido resueltos por FTP utilizando un enfoque muy sencillo y elegante.

FTP difiere de otras aplicaciones cliente-servidor en que establece dos conexiones entre las estaciones. Una conexión se utiliza para la transferencia de datos y la otra para información de control (órdenes y respuestas). La separación de las órdenes de la transferencia de datos hace que FTP sea más eficiente.

3.- Estructura

Tema 6: Servicio FTP La conexión de control utiliza reglas muy simples de conexión. Se necesita transferir una línea de orden o una línea de respuesta en cada instante de tiempo. La conexión de datos, por otro lado, necesita reglas más complejas debido a la variedad de tipos de datos transferidos.

FTP utiliza dos puertos TCP bien conocidos: el puerto 21 se utiliza para la conexión de control y el puerto 20 para la conexión de datos. La figura siguiente muestra el modelo básico de FTP. El cliente tiene tres componentes: la interfaz de usuario, el proceso del control del cliente y el proceso de transferencia del cliente. La conexión de control permanece abierta durante toda la sesión FTP interactiva. La conexión de datos se abre y se cierra para cada archivo a transferir.

3.- Estructura

Tema 6: Servicio FTP 3.- Estructura

Tema 6: Servicio FTP 3.- Estructura

Tema 6: Servicio FTP Servidor FTP: Las aplicaciones más comunes de los servidores FTP suelen ser el alojamiento web, en el que sus clientes utilizan el servicio para subir sus páginas web y sus archivos correspondientes; o como servidor de backup (copia de seguridad) de los archivos importantes que pueda tener una empresa. Para ello, existen protocolos de comunicación FTP para que los datos se transmitan cifrados, como el SFTP (Secure File Transfer Protocol).

Cliente FTP: Un usuario se conecta a un servidor FTP mediante un cliente FTP. – Navegadores que incluyen una función FTP: permiten conectarse a un servidor FTP mediante una URL que comienza por ftp:// . (no es la mejor opción de seguridad) – Clientes de FTP básicos en modo consola integrados en los sistemas operativos – Clientes con opciones añadidas e interfaz gráfica.

3.- Estructura

Tema 6: Servicio FTP Modo Activo: Se establece una conexión desde el cliente hacia el puerto 21 del servidor. En esa conexión se comunica al servidor qué puerto utiliza el cliente para la recepción de datos. El servidor inicia la conexión abriendo el puerto 20 y abre el puerto indicado en el cliente para la transmisión de datos.

4.- Modos de conexión: Servidor Activo y Pasivo

Tema 6: Servicio FTP 4.- Modos de conexión: Servidor Activo y Pasivo

Tema 6: Servicio FTP Modo Pasivo: La conexión la comienza el cliente hacia el puerto 21 en el servidor FTP. Para la transferencia de datos, el cliente solicita un puerto abierto superior al 1024 en el servidor. Cuando recibe la contestación, establece la conexión con el servidor para la transferencia de datos. El cliente siempre es el que inicia las conexiones.

4.- Modos de conexión: Servidor Activo y Pasivo

Tema 6: Servicio FTP 4.- Modos de conexión: Servidor Activo y Pasivo

Tema 6: Servicio FTP Problema en Modo Activo: ●El problema en este modo es que se abre una conexión para datos desde el servidor a la maquina cliente, esto es, una conexión de fuera a dentro.. Si la maquina cliente está protegida por un firewall, es posible que filtre o bloquee la conexión entrante, al ser un proceso desconocido.

●En el modo pasivo es el cliente el que inicia ambas conexiones, de control y de datos, con lo cual el firewall no tiene ninguna conexión entrante que filtrar. 4.- Modos de conexión: Servidor Activo y Pasivo

Tema 6: Servicio FTP Desde el punto de vista de FTP, los archivos se agrupan en dos tipos: Archivos ASCII: son archivos de texto plano. Archivos binarios: todo lo que no son archivos de texto: ejecutables (.exe), imágenes, archivos de audio, vídeo, archivos comprimidos, etc.

A la hora de descargar o subir un archivo del servidor hay que indicar el tipo, ya que si no la información del archivo puede destruirse. Afortunadamente, los clientes FTP suelen detectar el tipo de archivo que se transfiere para establecerlo automáticamente. 5.- Tipos de Archivos

Tema 6: Servicio FTP La conexión de un usuario al servidor FTP puede hacerse como inicio de una sesión de un usuario que existe en el sistema, o como un usuario genérico llamado anónimo. El acceso al sistema de archivos del servidor está limitado, según el tipo de usuario que se conecta.

Una vez establecida la conexión con el servidor, el usuario tiene disponible un conjunto de órdenes que permiten al usuario subir o bajar archivos del servidor. 6.- Tipos de Usuario

Tema 6: Servicio FTP Usuarios locales FTP: aquellos que disponen de una cuenta en la máquina que ofrece el servicio FTP. Usuarios virtuales FTP: no existen en el sistema, únicamente se crean para el acceso a través de FTP. 6.- Tipos de Usuario

Tema 6: Servicio FTP Usuarios anónimos: usuarios cualesquiera que, al conectarse al servidor FTP teclean la palabra «anonymous». Solamente con eso se consigue acceso a los archivos del FTP, aunque con menos privilegios que un usuario normal. Normalmente tienen acceso limitado y solo se puede leer y copiar archivos que sean públicos.

Es la forma más cómoda fuera del servicio web de permitir que todo el mundo tenga acceso a cierta información sin que para ello el administrador de un sistema tenga que crear una cuenta para cada usuario. 6.- Tipos de Usuario

Tema 6: Servicio FTP Vsftpd tiene la posibilidad de establecer cuotas de disco para los usuarios del servicio, siendo necesario gestionarlas desde el sistema operativo, y requiriendo la instalación del paquete quota. Asignación de cuotas a usuarios o grupos A la hora de asignar cuotas, tienes varias opciones para imponer límites en el espacio de disco que un usuario o grupo puede ocupar, y cuántos ficheros pueden crear.

Puedes limitar el uso de disco basándote en el espacio en disco (cuotas de bloque) o en el número de ficheros (cuotas de inodo) o una combinación de ambas. Cada uno de estos límites a su vez se divide en dos categorías: límites suaves (soft) y límites duros (hard).

7.- Cuotas de Usuario

Tema 6: Servicio FTP Límites suaves (soft): Pueden excederse por un período de tiempo llamado periodo de gracia, que por defecto es una semana. Si un usuario sobrepasa su período de gracia, el límite suave se convertirá en un límite duro y no se permitirán usos de disco adicionales. Cuando el usuario devuelve su cuota de uso de recursos a un punto por debajo de su límite suave, el período de gracia se reinicia al valor por defecto del sistema. Este tiempo de gracia se puede ajustar para cada usuario individual o para todos los usuarios globalmente Un límite duro (hard) especifica el límite absoluto, que no puede ser excedido nunca. Una vez que un usuario alcanza su límite duro no puede realizar más ubicaciones en el sistema de ficheros en cuestión. Por ejemplo, si el usuario tiene un límite duro de 500 kb y está utilizando 490 kb, el usuario solo puede ocupar otros 10 kb. Un intento de ocupar 11 kb más fallará.

7.- Cuotas de Usuario

---

## ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — Prova Validació FTP**
> Prova Validació FTP

> **✍️ Activitat Pràctica 2.2 — Presentació FTP**
> Presentació PDF

> **✍️ Activitat Pràctica 2.3 — Memoria FTP**
> Memoria FTP en PDF
