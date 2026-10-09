---
layout: default
title: "U3 — Sistema de Noms de Domini (DNS) · Unitat Completa"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT5 Completa"
prev_url: "../ut06/ut06actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT6"
next_url: "../ut05/ut0501.html"
next_label: "5.1 UD3 Servidor de Nombres de Dominio SMX ➡️"
---

# 📘 U3 — Sistema de Noms de Domini (DNS) (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**5.1 UD3 Servidor de Nombres de Dominio SMX**](./ut0501.md)
- [**✍️ Activitats pràctiques UT5**](./ut05actividades.md)

---

# 5.1 UD3 Servidor de Nombres de Dominio SMX

> **📌 Introducció de la Unitat**
> **Guia d'estudi**
>
> :
>
> **El servei de 'Resolució de noms” (DNS) s'ha de conèixer del curs passat al haver abordat el mòdul de “Xarxes d'Àrea Local” (XAL). En aquesta unitat didàctica anem a profunditzar en les peculiaritats de la seua configuració i funcionament, principalment en sistemes oberts basats en GNU/Linux, però també privatius com Windows.**
>
> **Organització las sessions (cada grup les adaptarà al seu ritme):**
>
> **Sessió Contingut
> Estudi enunciat de l'escenari + Organització grupal
> Treball individual i amb l'equip
>
> ****Treball individual i amb l'equip****
>
> Treball individual i amb l'equipReunió grupal de seguiment + Entrega acta
> Trabajo individual
> Trabajo individual
> Reunión grupal de seguimiento + Entrega actaTrabajo individual
> Trabajo individual**Preparación en equipo de la presentación**
>
> Trabajo individualCorrección cuestionario por paresEvaluación compañerosAutoevaluación final
>
> Objetivos:
> ****conocer los fundamentos y peculiaridades generales asociadas al funcionamiento del servicio DNS.
>
> aprender a instalar y configurar el servicio DNS tanto sistemas libres como en propietarios.
>
> desarrollar habilidades de búsqueda y obtención de información específica para su posterior aplicación a situaciones diversas.
>
> participar en la resolución de problemas técnicos.
> **desarrollar destrezas de exposición pública de ideas y conceptos.**
> **desarrollar habilidades de responsabilidad hacia el trabajo y coordinación de tareas en grupo.********

> **📌 🏷️ Apunt de la Unitat**
> Videotutorial que dóna una "Explicació sobre els Nivells principals de Domini, en anglès TLD (Top Level Domain), els seus tipus i usos"
>
> https://youtu.be/9Li57mp7tr4

> **🔗 Recurs Web: Enunciado Caso Práctico**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/0B-luGGz2bmtdakxINUc1bGpPVzhuNVZBR3VSOEw1a2ZVdmRN/view?usp=sharing) ↗️**](https://drive.google.com/file/d/0B-luGGz2bmtdakxINUc1bGpPVzhuNVZBR3VSOEw1a2ZVdmRN/view?usp=sharing)

> **📌 🏷️ Apunt de la Unitat**
> Ajuda [dig](https://www.hostinger.es/tutoriales/comando-dig-linux/)

---

UD3 Servidor de Nombres de Dominio SMX

Sistemas microinformáticos y redes Servicios en Red U2. Servidores de Nombre de Dominio. U2. Servidores de Nombre de Dominio.

........................................................................................................

1.

Introducción

.....................................................................................................................................

2.

Sistemas de nombres planos y jerárquicos

......................................................................................

3.

Espacio de nombres de dominio DNS

.............................................................................................

4.

Resolución de un nombre de dominio

.............................................................................................

5.

Transferencias de Zona

..................................................................................................................

6.

Registros de recursos DNS

.............................................................................................................

7.

Reenviadores.

................................................................................................................................

8.

Referencias.

...................................................................................................................................

Sistemas microinformáticos y redes Servicios en Red

### 1. Introducción

El Servicio de Nombres de Dominio (DNS) es una forma sencilla de localizar un ordenador en Internet. Todo ordenador conectado a Internet se identifica por su dirección IP: una serie de cuatro números de hasta tres cifras separa- das por puntos. Sin embargo, como a las personas les resulta más fácil acor- darse de nombres que de números, se inventó un sistema (DNS - Domain Name Server) capaz de convertir esos largos y complicados números, difíciles de recordar, en un sencillo nombre.

En realidad el servicio de nombres de dominio tiene más usos y mucho más importantes que el anterior. Por ejemplo, este servicio es fundamental para que el servicio de correo electrónico funcione. Un Servidor de Nombres de Dominio es una máquina cuyo cometido es buscar a partir del nombre de un ordenador la dirección IP de ese ordenador; y viceversa, encontrar su nombre a partir de la dirección IP

### 2. Sistemas de nombres planos y jerárquicos

En un sistema de nombres planos, todos los nombres deben ser absoluta- mente únicos: no puede haber 2 máquinas con el mismo nombre. Para organi- zaciones grandes, esto no sirve, pues podría haber conflictos de nombres, to- dos los Administradores tendrían que conocer todos los nombres usados en toda la red.

En un sistema de nombres jerárquicos existe una jerarquía de nombres que establece la manera de construir el nombre de un host. El propio nombre aporta información de la pertenencia del host a determinada categoría El sistema de nombres DNS es un sistema jerárquico, es decir, tiene estructura de árbol de forma que cada nodo del árbol tiene un significado.

### 3. Espacio de nombres de dominio DNS

El espacio de nombres de dominio DNS, como se muestra en la ilustración si- guiente, se basa en el concepto de un árbol de dominios con nombre. Cada ni- vel del árbol puede representar una rama o una hoja del mismo. Una rama es un nivel donde se utiliza más de un nombre para identificar un grupo de re- cursos con nombre. Una hoja representa un nombre único que se utiliza una vez en ese nivel para indicar un recurso específico.

Sistemas microinformáticos y redes Servicios en Red Cualquier nombre de dominio DNS que se utiliza en el árbol es, técnicamente, un dominio. Sin embargo, la mayor parte de las explicaciones de DNS identifi- ca los nombres de una de las cinco formas posibles, según el nivel y la forma en que se utiliza normalmente un nombre. Por ejemplo, el nombre de dominio DNS registrado para Microsoft (microsoft.com.) se conoce como un dominio de segundo nivel. Esto se debe a que el nombre tiene dos partes (llamadas eti- quetas) que indican que se encuentra dos niveles por debajo de la raíz o la parte superior del árbol. La mayor parte de los nombres de dominio DNS tie- nen dos etiquetas o más, cada una de las cuales indica un nuevo nivel en el ár- bol. En los nombres se utilizan puntos para separar las etiquetas.

Además de los dominios de segundo nivel, en la siguiente tabla se describen otros términos que se utilizan para describir los nombres de dominio DNS se- gún su función en el espacio de nombres.

Sistemas microinformáticos y redes Servicios en Red Tipo de nom- bre Descripción Ejemplo Dominio raíz Parte superior del árbol que representa un ni- vel sin nombre; a veces, se muestra como dos comillas vacías (""), que indican un valor nulo. Cuando se utiliza en un nombre de do- minio DNS, empieza con un punto (.) para de- signar que el nombre se encuentra en la raíz o en el nivel más alto de la jerarquía del do- minio. En este caso, el nombre de dominio DNS se considera completo e indica una ubi- cación exacta en el árbol de nombres. Los nombres indicados de esta forma se llaman nombres de dominio completos (FQDN, Fully Qualified Domain Names).

Un sólo punto (.) o un punto usado al final del nombre, como "ejemplo.microsoft.- com.". Dominio de ni- vel superior Nombre de dos o tres letras que se utiliza para indicar un país, una región o el tipo de organización que usa un nombre. Para obte- ner más información. ".com", que indica un nombre registrado para usos comerciales o empresariales en Internet.

Dominio de segundo nivel Nombres de longitud variable registrados que un individuo u organización utiliza en Internet. Estos nombres siempre se basan en un dominio de nivel superior apropiado, según el tipo de organización o ubicación geográfica donde se utiliza el nombre.

"microsoft.com.", que es el nombre de dominio de segundo nivel registrado para Microsoft por el registrador de nombres de dominio DNS de Internet. Subdominio Nombres adicionales que puede crear una organización derivados del nombre de dominio registrado de segundo nivel. Incluyen los nombres agregados para desarrollar el árbol de nombres de DNS en una organización y que la dividen en departamentos o ubicaciones geográficas.

"ejemplo.microsoft.c om.", que es un subdominio ficticio asignado por Microsoft para utilizarlo en nombres de ejemplo de documentación. Nombre de recurso o de host Nombres que representan una hoja en el árbol DNS de nombres e identifican un recurso específico. Normalmente, la etiqueta situada más a la izquierda de un nombre de dominio DNS identifica un equipo específico en la red. Por ejemplo, si un nombre de este nivel se utiliza en un RR de host (A), éste se utiliza para buscar la dirección IP del equipo según su nombre de host.

"host- a.ejemplo.microsoft.c om.", donde la primera etiqueta ("host-a") es el nombre de host DNS de un equipo específico en la red.

Sistemas microinformáticos y redes Servicios en Red Dominio Raíz (Root Name Servers, RNS) Los RNS saben que servidores de nombres tienen autoridad para los dominios superiores. Si se les hace una pregunta acerca de un subdominio, los servido- res raíz maestros pueden al menos proveer los nombres y direcciones de los servidores de nombres con autoridad para el segundo nivel de dominios a los cuales un dominio pertenece. Cada servidor interrogado da, al que pregunta, información de cómo “estar más cerca” de la respuesta que está buscando o provee él mismo una respuesta. Lo que hacen los RNS es proveer punteros desde los dominios superiores a los servidores de nombres de los dominios inferiores. Por ejemplo para conseguir el servidor de nombres del dominio ve.

se debe interrogar a los servidores raíz. Los RNS (http://root-servers.org/ http://public-root.com ), así como los NS normales, son muy importantes en la resolución de un nombre dentro de un dominio particular. Debido a que son tan importantes, DNS provee me- canismos para asegurar siempre el servicio utilizando redundancia (servi- dores secundarios) o aliviando la carga de los servidores primarios y root (usando caching). Sin embargo, en ausencia de mecanismos como el caching, la resolución debe empezar en los servidores de raíz maestros.

Dominio de Nivel Superior Un dominio de nivel superior o TLD (del inglés top-level domain) es la más alta categoría de las FQDN que es traducida a direcciones IP por los DNS oficiales de Internet. La ICANN clasifica los dominios de nivel superior en tres tipos

### 1. Dominios de nivel superior geográficos

(ccTLD): Usados por un país o un territorio dependiente. Tienen dos letras de largo, por ejemplo es para España, mx para México , gt para Guatemala, sv para El Sal- vador o ar para Argentina.

### 2. Dominios de nivel superior genéricos

(gTLD): Usado (al menos en teoría) por una clase particular de organizaciones (por ejemplo, com para organizaciones comerciales). Tiene tres o más letras de largo. La mayoría de los gTLDs están disponibles para el uso mundial, pero por razones históricas mil (militares) y gov (gubernamental) están restringidos para el uso por las respectivas autoridades estadouni- denses. Los gTLDs se clasifican, a su vez en

- Dominios de nivel superior patrocinados

(sTLD): Ej. .aero, .coop, .cat y .museum

- Dominios de nivel superior no patrocinados

(uTLD): Ej. .biz, .info, .name y .pro.

Sistemas microinformáticos y redes Servicios en Red

### 3. Dominios de nivel superior de infraestructura: El dominio de nivel

superior arpa es el único confirmado. Los pseudodominios de nivel superior son términos usados para identificar redes de computadores que no participan en el sistema oficial del sistema de nombres de dominio (DNS) pero que usan una jerarquía de nombres si- milar. Ejemplos .bitnet, .onion, .garlic y .uucp.

### 4. Resolución de un nombre de dominio

El mecanismo que consiste en encontrar la dirección IP relacionada al nombre de un ordenador se conoce como "resolución del nombre de dominio". La aplicación que permite realizar esta operación (por lo general, integrada en el sistema operativo se llama "resolución".

El resolver o cliente DNS es la parte del sistema operativo encargada de resol- ver nombres de dominio cuando otros clientes (clientes web, clientes de co- rreo, herramientas de red, etc.) así se lo solicitan. La resolución de un nombre de dominio es la traducción de un FQDN a su co- rrespondiente dirección IP.

El proceso de resolución sería el siguiente

### 1. En un programa del equipo local el usuario utiliza un nombre de dominio

totalmente cualificado (FQDN).

- A continuación, el programa solicita al resolver la resolución de ese nombre.

Su modo de actuación depende del sistema operativo: GNU/Linux

### 1. El resolver compara el nombre solicitado con el del propio host. Si es

el mismo, el nombre queda resuelto a la IP local. Para ello utiliza la in- formación que encuentra en el archivo /etc/hostname (que le informa del nombre de máquina local) y la concatena con la indicada en la direc- tiva domain del archivo /etc/resolv.conf si la hubiera.

### 2. En caso de no haber resuelto el nombre, el resolver consulta los da

tos del archivo /etc/hosts. Se trata de un archivo de texto que contiene por cada línea una dirección IP y su correspondiente nombre de domi

Sistemas microinformáticos y redes Servicios en Red nio separados por un espacio o más (las líneas que empiezan con el ca- rácter 'almohadilla' son comentarios y no son tenidas en cuenta). Si el resolver encuentra aquí la respuesta a su consulta detiene el proceso.

### 3. En caso contrario, el resolver comprueba que en la caché del resolver

no está la respuesta a la consulta en cuestión. Si está presente en ella, el resolver ofrece este dato a la aplicación que lo solicitó y termina el proceso.

### 4. Finalmente, si aún no se ha resuelto el nombre, el resolver procede a

consultar al primer servidor DNS que figure en el archivo /etc/resolv.- conf. Windows

el mismo, el nombre queda resuelto a la IP local.

### 2. Se carga en la caché del resolver el contenido del archivo hosts. Este

archivo de Windows es un archivo de texto idéntico al utilizado por GNU/Linux.

### 3. Se intenta resolver el nombre utilizando la caché del resolver (que,

aparte del contenido del archivo host, incluirá también las respuestas a consultas DNS realizadas anteriormente). Si la consulta no coincide con una entrada de la caché, el proceso de resolución continúa.

### 4. El resolver consultará al servidor DNS preferido (establecido de ma

nera gráfica por el usuario) tal y como se especifica a continuación.

### 3. Cuando el servidor DNS recibe la consulta del resolver, primero comprueba

su archivo de zona (en caso de que lo tenga). Si el nombre consultado coincide con algún registro de su archivo de zona, el servidor DNS responde al resolver con autoridad.

### 4. Si no existe ninguna información en la zona para el nombre consultado, a

continuación el servidor comprueba si puede resolver el nombre mediante la información almacenada en su caché local (que contendrá resultados de con- sultas anteriores). Si aquí se encuentra una coincidencia, el servidor responde con esta información. Si aun no se ha conseguido una respuesta a la consulta, lo más normal es que el servidor DNS siga intentando por todos los medios re- solverla, bien preguntando a otros servidores DNS que tenga configurados (denominados forwarders) o bien preguntando directamente a los servidores raiz.

Sistemas microinformáticos y redes Servicios en Red

### 5. Finalmente, cuando el servidor DNS obtiene por uno de los dos medios la

respuesta la envía al resolver. La respuesta se almacena tanto en la caché del servidor DNS consultado como en la caché local del resolver.

### 5. Transferencias de Zona

Una transferencia de zona es el término utilizado para hacer referencia al proceso mediante el que el contenido de un archivo de zona DNS se copia desde un servidor DNS principal a un servidor DNS secundario. Se produci- rá una transferencia de zona durante cualquiera de los siguientes escena- rios

 Al iniciar el servicio DNS en el servidor DNS secundario.  Cuando caduca el tiempo de actualización.  Cuando se guardan los cambios en el archivo de zona principal y hay una notificación lista. Transferencias de zona siempre se inician por el servidor DNS secundario.

El servidor DNS principal simplemente responderá a la petición para una transferencia de zona. Debido al importante papel que desempeñan las zonas en DNS, se preten- de que éstas estén disponibles desde varios servidores DNS en la red para proporcionar disponibilidad y tolerancia a errores al resolver consultas de nombres.

### 6. Registros de recursos DNS

Cada servidor DNS primario mantiene un archivo de zona para resolución directa (de un nombre de dominio se obtiene la IP asociada) de la zona so

Sistemas microinformáticos y redes Servicios en Red bre la que tiene autoridad y, en algunos casos, otro archivo de zona inver- so para la resolución inversa. Ambos archivos son siempre archivos de texto plano, tanto si el servidor DNS corre en GNU/Linux o en Windows.

Cada archivo de zona contiene lo que ya conocemos como registros de re- cursos Los principales tipos de registros de recursos son los siguientes. $TTL La primera línea que hemos de indicar en un archivo de zona debe estable- cer el valor Time to Live (TTL) (Tiempo de vida). Su sintaxis es

$TTL tiempo donde tiempo es el tiempo que cualquier registro de recurso de este archi- vo puede permanecer en la caché de otro servidor DNS. Si un registro de recurso especifica su propio valor TTL, esta directiva se ig- nora para dicho recurso. Si solo aparece un número (por ejemplo, $TTL 3600), se interpreta como segundos, pero para dar mayor claridad, se pueden usar semanas ($TTL 1w), días ($TTL 7d), horas ($TTL 168h) o minutos ($TTL 10080m).

SOA El registro SOA (Start of Authority) es el segundo registro que nos en- contramos en un archivo de zona. Debe haber uno (y solo uno) por cada ar- chivo de zona directo o inverso que creemos. Su sintaxis es: zona IN SOA nombreDNSprimario emailAdministrador ( numeroSerie actualizacion reintento

Sistemas microinformáticos y redes Servicios en Red caducidad TTLminimo ) donde:  zona es o bien el nombre de la zona (¡terminado en punto!) o bien la letra @.  nombreDNSprimario indica el FQDN del servidor donde esta almace- nado el archivo de zona (¡terminado en un punto!).

 emailAdministrador es la dirección de email de la persona responsa- ble de este dominio (la arroba se remplaza con un punto y la direc- ción entera también termina con un punto).  numeroSerie indica el número de version del archivo de zona. Sirve de referencia a los servidores DNS secundarios para saber cuando deben hacer una transferencia de zona. Si el numero de serie del er- vidor secundario es menor que el número de serie del primario sig- nifica que este ha cambiado su información. Este número debe ser incrementado de forma manual por el administrador de red cada vez que realiza un cambio en el archivo de zona. Una costumbre es la de escribir los número de serie como AAAAMMDDNN, es decir 4 ci- fras para el año, 2 para el mes, 2 para el día y una o dos para el nu- mero de revisión dentro de ese día (01, 02, etc.).

 actualizacion es el intervalo, en segundos, tras el cual los servidores secundarios deben comprobar el registro SOA del servidor primario, con el fin de verificar si la información del dominio ha cambiado. El valor típico es de una hora (3600).  reintento especifica el tiempo que el servidor secundario espera an- tes de volver a intentar una transferencia de zona que haya fallado.

 caducidad es el tiempo en segundos tras el cual un servidor DNS se- cundario que no haya podido realizar transferencias de zona en todo ese tiempo descartará los datos que posee. El valor típico es de 42 días, o sea 3600000.  TTLminimo antiguamente (en versiones 8.3 de BIND y anteriores) es- tablecía el tiempo de validez en segundos para permanecer en ca- chés de otros servidores o de resolvers. En la actualidad esto se con- sigue con la directiva $TTL, por lo que el valor indicado en este cam- po se ignora. Los números especificados en este registro indican se- gundos.

NS

Sistemas microinformáticos y redes Servicios en Red Este tipo de registro representa o indica quienes son los servidores DNS con autoridad sobre esa zona, tanto maestros como secundarios. Por tan- to, cada archivo de zona debe contener, como mínimo, un registro NS.

Su sintaxis es: dominio IN NS FQDNservidorDNS donde:  dominio es el nombre de dominio completamente cualificado de la zona sobra la que tiene autoridad el servidor DNS que estemos espe- cificando. Si esta zona coincide con la zona que se está definiendo en el archivo de zona, puede dejarse en blanco o escribir una @.

 FQDNservidorDNS es el nombre de dominio completamente cualifi- cado del servidor DNS que estamos especificando. A El registro A establece una correspondencia entre un nombre de dominio completamente cualificado y una dirección IP. Su sintaxis es: nombreHost IN A IPcompleta donde

 nombreHost es únicamente el nombre de un host de nuestro domi- nio.  IPcompleta es la dirección IP de ese host. nombreHost puede ser omitido en el registro A para indicar que estamos asociando una IP al nombre de la zona. Así, si consideramos un archivo de zona de ejemplo para la zona example.local que contenga

IN A 10.0.1.3 server1 IN A 10.0.1.5 Las peticiones de resolución para example.local son resueltas a la 10.0.1.3, mientras que las solicitudes para server1.example.local son resueltas a la 10.0.1.5.

Sistemas microinformáticos y redes Servicios en Red Es recomendable que exista sólo un registro IN A por cada dirección IP. CNAME El registro CNAME (Canonical NAME) crea un alias (un sinónimo) para el nombre de dominio especificado. Su sintaxis es: alias IN CNAME nombreHost donde

 alias es únicamente un nombre de host.  nombreHost es únicamente el nombre de host indicado anterior- mente en un registro A. En el ejemplo siguiente, un registro A vincula un nombre de host a una di- rección IP, mientras que un registro CNAME apunta al nombre host co- múnmente usado www para este.

server1 IN A 10.0.1.5 www IN CNAME server1 PTR El registro de recursos PTR (PoinTeR) o puntero, realiza la acción contraria al registro de tipo A, es decir, asigna un nombre de dominio completamen- te cualificado a una dirección IP. Este tipo de recursos se utiliza únicamente para resolución inversa.

Su sintaxis es: IPsinParteDeRed IN PTR FQDNhost donde:  IPsinParteDeRed es la parte de host de la dirección IP de la máquina escrita al reves.  FQDNhost es el nombre de dominio totalmente cualificado del host (¡terminado en punto!). MX

Sistemas microinformáticos y redes Servicios en Red Este registro permite indicar cuáles son los servidores de correo de nues- tro dominio. Además permite, en caso de tener varios servidores, estable- cer el orden de consulta o de preferencia. Este orden establece que los va- lores menores tienen más prioridad.

Su sintaxis es: dominio IN MX prioridad FQDNhost donde:  dominio puede dejarse en blanco o usar la letra @.  prioridad es un numero entero que puede omitirse.  FQDN-host es el nombre completamente cualificado del host que hara las funciones de servidor de correo para la zona que estamos definiendo.

- Reenviadores.

Servidor DNS designado por otros servidores DNS para ser invocado en consultas de resolución de recursos que se encuentran ubicados en domi- nios que no son gestionados por el DNS local.

- Referencias.

Basado en los apuntes de: http://vgg.uma.es/redes/servicio.html https://jesusg289.files.wordpress.com http://smr.iesharia.org/wiki/doku.php/src:inicio http://www.portaleso.com/usuarios/Toni/web_redes/unidad_redes_infor- maticas_indice.html#protocolo http://es.ccm.net/contents/262-dns-sistema-de-nombre-de-dominio https://es.wikipedia.org/wiki/Dominio_de_nivel_superior

---

# ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — Entrega Acta Inicial**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 5.2 — Entrega Acta Final**
> Entrega Acta Final

> **✍️ 📋 Exercici / Qüestionari 5.3 — Qüestionari d'avaluació U3**
> Qüestionari d'avaluació U3
>
> [plantilla UD_3](https://drive.google.com/file/d/1Sxd1t-cJFtxp0TcQKT1b4m5jtUa1D5Z5/view?usp=sharing)

> **✍️ Activitat Pràctica 5.4 — Entrega Memoria**
> Entrega Memoria

---
