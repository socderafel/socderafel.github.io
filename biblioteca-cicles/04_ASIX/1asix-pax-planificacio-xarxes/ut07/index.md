---
layout: default
title: "UD7 — El switch · Temari Complet"
course_root: ".."
badge: "1r ASIX · Grau Superior · UD7 — El switch"
prev_url: "../ut06/ut0601.html"
prev_label: "⬅️ 6.1 Nivell d'enllaç"
next_url: "../ut07/ut0701.html"
next_label: "7.1 U7 El switch ➡️"
---

# 📘 UD7 — El switch (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 U7 El switch**](./ut0701.md)
- [**7.2 Cisco IOS**](./ut0702.md)

---

# 7.1 U7 El switch

> **🔗 Recurs Web: Switch - Reenvío de tramas**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=paKw3cIk2eU) ↗️**](https://www.youtube.com/watch?v=paKw3cIk2eU)

---

PAX - U7 – El switch 1er ASIX

1 ASIX - PAX Història

- Per interconnectar equips a les xarxes locals,

incialmente es gastava un concentrador (hub)

- Regenerava la senyal que li aplegava i ho enviava

a tots.

- Moltes col·lisions.
- Molta congestió i problemes de rendiment.
- Topologia física en estrella i lògica en bus.

1 ASIX - PAX Història

1 ASIX - PAX Història

- Per a solucionar els problemes del hub, van

aparèixer els ponts (bridge).

- Dispositius amb dos ports capaços de filtrar les

trames que apleguen d’un port i enviar-les per altre en funció de la MAC destí.

- Redueix les col·lisions al poder retindré una trama

fins que el segment destí estiga lliure.

- Molt útil per dividir la xarxa en segments més

xicotets per evitar col·lisions i no dividir l’ample de banda,

1 ASIX - PAX Història

1 ASIX - PAX Switch

- Es tracta bàsicament d’un pont multiport amb millores en les

tècniques de filtrat.

- Processen diversos milions de trames per segon.
- La topologia física seguix sent en estrella i la lògica punt a punt.
- No generen tràfic innecessari.

1 ASIX - PAX Switch

1 ASIX - PAX Switch

- L’ús del switch permet dividir la xarxa en segments més xicotets

anomenats dominis de col·lisió, un per cada port.

- Aquest procés es coneix com segmentació de la xarxa i resulta

imprescindible, per evitar que la xarxa es congestione per col·lisions quan hi ha molt de tràfic.

1 ASIX - PAX Funcionament

- El switch realitza les següents tasques
- Aprenentatge de direccions MAC
- Inundació de trames
- Actualització de direccions MAC
- Reenviament selectiu de trames
- Filtrat de trames
- Evitar els bucles amb altres switch (STP)

1 ASIX - PAX Característiques

- Rendiment de la xarxa
- Una vegada que sap la situació de tots els equips, sols reenvia les trames al

seu destinatari (reenviament selectiu), reduint així el tràfic i mantenint el mateix ample de banda per a cada port.

- Alta tassa de reenviament, que permet processar milions de trames per

segon.

- Funciona full-dúplex. Enviar i rep simultàniament pel mateix cable.

1 ASIX - PAX Característiques

- Seguretat de la xarxa
- El reenviament selectiu redueix el nombre de trames que poden ser captades

per un sniffer de xarxa.

- Funcionalitat
- Detecta la velocitat de cada equip connectat i pot treballar a diferent velocitat

en cada port.

- Gestió remota via web
- Alguns permeten crear VLANS per segmentar la xarxa.
- PoE
- ACL (llistes de control d’accés), que permeten impedir tràfic no desitjat.

1 ASIX - PAX Tècniques de reenviament: Store and forward (emmagatzemar i reenviar)

- Els switch guarden cada trama completa en una memòria RAM abans de reenviar

la.

- Després, el switch comprova el tamany de la trama i si es <64 bytes (runts) o >

1518 (giants) es considera una trama corrupta i per tant es descartada.

- També comproba el CRC (bits de redundància)
- Amb aquest mètode s’evita la retransmissió de trames no vàlides però el temps

utilitzat per guardar i comprovar cada trama afegeix un retard important en el seu processament. Aquest retard afecta directament el rendiment de la xarxa.

1 ASIX - PAX Tècniques de reenviament: Cut-throgh (tallar i enviar)

- Disenyats per reduir la latència.
- Llegeix sols els 6 primers bytes que contenen la direcció MAC de destí

per reenviar pel port adequat.

- No detecta trames corruptes.

1 ASIX - PAX Tècniques de reenviament: Adaptative switching (commutació adaptativa)

- Capaços de processar trames tant amb la tècnica Store and forward

com amb cut-through.

- Activat per administrador o triat pel propi switch en base al nombre

d’errors que passen pels ports.

1 ASIX - PAX Tipus de switch segons HW: Configuració fixa

- El nombre de ports es fixe i no es pot agregar cap més.
- Poden tenir 5,8,16,24 i 48 ports.

1 ASIX - PAX Tipus de switch segons HW : Apilable

- Switch de configuració fixa amb un port especial d’alta velocitat que

permet connectar amb altres switch, donant com a resultat un único switch amb la suma de tots els ports.

- No confundir amb la connexió de switch en cascada, on es gasta un

port normal. (topologia arbre)

1 ASIX - PAX Tipus de switch segons HW : Modular

- Xasi metàl·lic de tamany variable que permet la instal·lació de

diferents mòduls amb un nombre variable de ports.

1 ASIX - PAX Tipus de switch segons SW : Switch de capa 2

- El més habitual.
- No permet gestió per part del administrador.
- Més econòmic que els gestionables.

1 ASIX - PAX Tipus de switch segons SW : Switch de capa 2 gestionable

- Permet configurar diferents opcions per part del administrador via un

port de consola o via web.

- Sol disposar d’un sistema operatiu lleuger que dona una interfície a

l’usuari. El més famós es Cisco IOS.

1 ASIX - PAX Tipus de switch segons SW : Switch multicapa

- Switch gestionable que pot realitzar funcions de capes superiors, com

per exemple l’enrutament basat en direccions IP.

- Els converteix en dispositius molt similars als routers, però amb major

velocitat de processament de paquets.

- Més cars.

1 ASIX - PAX Dubtes?

---

# 7.2 Cisco IOS

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 1 Entrenamiento intensivo sobre IOS

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Todos los dispositivos electrónicos necesitan un sistema operativo. • Windows, Mac y Linux para PC y computadoras portátiles • Apple iOS y Android para smartphones y tablets • Cisco IOS para los dispositivos de red (p. ej., switches, routers, puntos de acceso inalámbricos, firewall).

Cisco IOS Sistema operativo Shell del SO

- El shell del SO es una interfaz de línea de comandos (CLI) o una

interfaz gráfica de usuario (GUI) y permite que un usuario se interconecte con aplicaciones. Núcleo del SO

- El núcleo del SO se comunica directamente con el hardware y

administra la forma en que los recursos de hardware se utilizan para satisfacer requisitos de software. Hardware

- la parte física de una computadora, incluida la electrónica

subyacente. Los dispositivos Cisco utilizan el sistema operativo de Interwork (IOS) de Cisco.

- Aunque es utilizada por Apple, iOS es una marca registrada de Cisco en los EE. UU. y otros

países y es utilizada por Apple en virtud de una licencia.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Cisco IOS Propósito de los SO § Mediante la utilización de una GUI, el usuario podrá hacer lo siguiente: • Utilice un mouse para hacer selecciones y ejecutar programas. • Introduzca texto y comandos de texto.

§ Mediante la utilización de una CLI en un switch o router de Cisco IOS, el técnico en redes podrá hacer lo siguiente: • Utilice un teclado para ejecutar programas de red basados en la CLI. • Utilice un teclado para introducir texto y comandos basados en texto. § Existen muchas variaciones distintas de Cisco IOS

• IOS para switches, routers y otros dispositivos de red Cisco • Versiones numeradas de IOS para un dispositivo de red Cisco determinado

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Cisco IOS Propósito de los SO (continuación) § Todos los dispositivos cuentan con un IOS predeterminado y conjunto de características. Es posible cambiar la versión o el conjunto de características del IOS.

§ Los IOS pueden descargarse de cisco.com. Sin embargo, es necesario contar con una cuenta Cisco Connection Online (CCO). Nota: El presente curso se centrará en Cisco IOS versión 15.x.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Acceso a Cisco IOS Métodos de acceso § Las tres formas más comunes de acceder al IOS son las siguientes

- Puerto de consola: puerto serial fuera de banda que se utiliza principalmente

para propósitos de gestión como la configuración inicial del router.

- Shell seguro (SSH): método en banda para establecer en forma remota y segura

una sesión de CLI en una red. Se cifran la autenticación de usuario, las contraseñas y los comandos que se envían por la red. Se recomienda utilizar el protocolo SSH en lugar de Telnet, siempre que sea posible.

- Telnet: interfaces en banda para establecer una sesión CLI de manera remota a

través de una interfaz virtual por medio de una red. La autenticación de usuario, las contraseñas y los comandos se envían por la red en texto no cifrado. Nota: El puerto AUX es un método más antiguo de establecer una sesión CLI en forma remota a través de una conexión por acceso telefónico a través de un módem.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Acceso a Cisco IOS Programa de emulación de terminal Tera Term § Independientemente del método de acceso, se requerirá un programa de emulación de terminal. Entre los programas de emulación de terminal populares, se incluyen PuTTY, Tera Term, SecureCRT y OS X Terminal.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Los modos Cisco IOS utilizan una estructura de mando jerárquica. § Cada modo tiene una petición de entrada distinta y se utiliza para realizar tareas determinadas con un conjunto específico de comandos que están disponibles solo para el modo en cuestión.

Navegar por el IOS Modos de funcionamiento de Cisco IOS

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § El modo EXEC del usuario permite solo una cantidad limitada de comandos de monitoreo básicos. • A menudo, se lo describe como un modo de “visualización solamente”. • En forma predeterminada, no se requiere autenticación para acceder al modo EXEC, pero debería obtenerse.

§ El modo EXEC con privilegios permite la ejecución de comandos de administración y configuración. • A menudo, se lo describe como "modo enable" porque requiere el comando EXEC de usuario enable. • En forma predeterminada, no se requiere autenticación para acceder al modo EXEC, pero debería obtenerse.

Navegar por el IOS Modos de comando principales

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § El modo de configuración principal recibe el nombre de configuración global o, simplemente, global config. • Utilice el comando configure terminal para acceder. • Los cambios realizados afectan el funcionamiento del dispositivo.

§ Desde el modo de configuración global, se puede acceder a modos de subconfiguración específicos. Cada uno de estos modos permite la configuración de una parte o función específica del dispositivo IOS. • Modo de interfaz: para configurar una de las interfaces de red.

• Modo de línea: para configurar la consola, AUX, Telnet o el acceso SSH. Navegar por el IOS Modos de comandos de configuración

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Navegar por el IOS Navegación entre los modos de IOS § Se utilizan varios comandos para pasar dentro o fuera de los comandos de petición de entrada: • Para pasar del modo EXEC del usuario al modo EXEC con privilegios, ingrese el comando enable.

• Para regresar al modo EXEC del usuario, use el comando disable. § Pueden utilizarse diversos métodos para salir/abandonar los modos de configuración: • Salida: se utiliza para pasar de un modo específico al modo anterior más general, como del modo de interfaz al de global config.

• Final: se puede utilizar para salir del modo de configuración global independientemente del modo de configuración en el que se encuentre. • ^ z: funciona igual que final.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Navegar por el IOS Navegación entre los modos de IOS (continuación) § A continuación, encontrará un ejemplo de la navegación entre los modos de IOS: • Ingrese en el modo EXEC con privilegios con el comando enable.

• Ingrese al modo global config mediante el comando configure terminal. • Ingrese al modo de sub-configuración de interfaz mediante el comando interface fa0/1. • Salga de cada modo mediante el comando exit. • El resto de la configuración muestra cómo puede salir de un modo de subconfiguración y regresar al modo EXEC con privilegios con la combinación de teclas final o ^Z.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Los dispositivos Cisco IOS admiten muchos comandos. Cada comando de IOS tiene una sintaxis o formato específico y puede ejecutarse solamente en el modo adecuado. La estructura de comandos Estructura básica de comandos de IOS § La sintaxis para un comando es el comando seguido de las palabras clave y los argumentos correspondientes.

• Palabra clave: un parámetro específico que se define en el sistema operativo (en la figura ip protocols) • Argumento: no está predefinido; es un valor o variable definido por el usuario, (en la figura, 192.168.10.5) § Después de ingresar cada comando completo, incluso cualquier palabra clave y argumento, presione la tecla Enter (Introducir) para enviar el comando al intérprete de comandos.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Para determinar cuáles son las palabras clave y los argumentos requeridos para un comando, consulte la sintaxis de comandos • Consulte la tabla siguiente cuando analice la sintaxis de comandos.

§ Ejemplos: • Descripción cadena: se utiliza el comando para agregar una descripción a la interfaz. El argumento de cadena es texto ingresado por el administrador como descripción Se conecta al switch de la oficina de la sede principal. •

```bash
ping dirección-ip: el comando es ping y el argumento definido por el usuario es la dirección IP del dispositivo de destino,
```

como en el ping 10.10.10.5. La estructura de comandos Sintaxis de los comandos IOS

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Ayuda contextual de IOS • La ayuda contextual proporciona una lista de comandos y los argumentos asociados con esos comandos en el contexto del modo actual. • Para acceder a la ayuda contextual, introduzca un signo de interrogación, ?, en cualquier petición de entrada.

La estructura de comandos Funciones de ayuda de IOS

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Verificación de la sintaxis de los comandos IOS

- El intérprete de la línea de comando comprueba el comando ingresado de izquierda a derecha

para establecer qué acción se solicita.

- Si el intérprete comprende el comando, la acción requerida se ejecuta y la CLI vuelve a la

petición de entrada correspondiente.

- Si el intérprete encuentra un error, el IOS, en general, proporciona comentarios como "comando

ambiguo", "comando incompleto" o "comando incorrecto". La estructura de comandos Funciones de ayuda de IOS (continuación)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. La estructura de comandos Teclas de acceso rápido y métodos abreviados § Los comandos y las palabras clave pueden acortarse a la cantidad mínima de caracteres que identifica a una selección única.

§ Por ejemplo, el comando configure puede acortarse a conf, ya que configure es el único comando que empieza con conf. • Una versión más breve, como con, no dará resultado, ya que hay más de un comando que empieza con con. • Las palabras clave también pueden acortarse.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. La estructura de comandos Demostración en vídeo: Teclas de acceso rápido y métodos abreviados La CLI de IOS admite los siguientes métodos abreviados: § Fecha hacia abajo: permite al usuario desplazarse por el historial de comandos.

§ Flecha hacia arriba: permite al usuario desplazarse hacia atrás a través de los comandos. § Tab: completa el resto del comando ingresado parcialmente. § Ctrl-A: se traslada al comienzo de la línea. § Ctrl-E: se traslada al final de la línea. § Ctrl-R: vuelve a mostrar una línea.

§ Ctrl-Z: sale del modo de configuración y vuelve al modo EXEC del usuario. § Ctrl-C: sale del modo de configuración o cancela el comando actual. § Ctrl-Shift-6: permite que el usuario interrumpa un proceso IOS (p. ej., ping).

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. La estructura de comandos Packet Tracer: Comandos iniciales

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 2 Configuración básica de dispositivos

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § El primer paso cuando se configura un switch es asignarle un nombre de dispositivo único o nombre de host. • Los nombres de host aparecen en las peticiones de entrada de la CLI, pueden utilizarse en varios procesos de autenticación entre dispositivos y deben utilizarse en los diagramas de topologías.

• Sin nombre del host, es difícil identificar dispositivos de red para propósitos de configuración. Nombres del host Nombres de dispositivos Los nombres de host permiten al administrador darle un nombre a un dispositivo, lo que facilita su identificación en una red.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Una vez que se ha identificado la convención de denominación, el próximo paso es aplicar los nombres a los dispositivos usando la CLI. § El comando de configuración global name del nombre de host se utiliza para asignar un nombre.

Nombres del host Configuración de nombres del host

```bash
Switch>
Switch> enable
Switch#
Switch# configure terminal
Switch(config)# hostname Sw-Floor-1
```

Sw-Piso-1(config)#

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Paso 1: Proteja los dispositivos de red para limitar físicamente su acceso; para ello, colóquelos en armarios de cableado y estantes bloqueados. § Paso 2: Exija el uso de contraseñas seguras, dado que son la primera línea de defensa contra el acceso no autorizado a dispositivos de red.

Limitar el acceso a las configuraciones de dispositivos Limitación del acceso a los dispositivos § Limite el acceso administrativo de la siguiente manera. § Utilice contraseñas fuertes de la manera recomendada. Para mayor comodidad, la mayor parte de las actividades de laboratorio y ejemplos en este curso usan las contraseñas simples pero débiles cisco o class.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Limitar el acceso a las configuraciones de dispositivos Configuración de contraseñas § Para proteger el acceso a EXEC con privilegios, utilice el comando de configuración global enable secret password.

§ Para proteger el acceso a EXEC del usuario, configure la línea de consola de la siguiente manera: § Para proteger el acceso remoto a Telnet o SSH, configure la terminal virtual (VTY) de la siguiente manera: Proteger el modo EXEC del usuario Descripción

```bash
Switch(config)# line console 0
```

El comando ingresa el modo de configuración de la línea de consola

```bash
Switch(config-line)# contraseña contraseña
```

El comando especifica la contraseña de la línea de consola.

```bash
Switch(config-line)# login
```

El comando hace que el switch solicite la contraseña. Cómo proteger el acceso remoto Descripción

```bash
Switch(config)# line vty 0 15
```

Los switches de Cisco en general admiten hasta 16 líneas VTY entrantes numeradas de 0 a 15.

```bash
Switch(config-line)# contraseña contraseña
```

El comando especifica la contraseña de la línea VTY.

```bash
Switch(config-line)# login
```

El comando hace que el switch solicite la contraseña.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Limitar el acceso a las configuraciones de dispositivos Configuración de contraseñas (continuación) Proteger EXEC con privilegios Sw-Floor-1(config)# enable secret class Sw-Floor-1(config)# exit Sw-Floor-1# Sw-Floor-1# disable Sw-Floor-1> enable Password

Sw-Floor-1# Proteger EXEC del usuario Sw-Floor-1(config)# line console 0 Sw-Floor-1(config-line)# password cisco Sw-Floor-1(config-line)# login Sw-Floor-1(config-line)# exit Sw-Piso-1(config)# Cómo proteger el acceso remoto Sw-Floor-1(config)# line vty 0 15 Sw-Floor-1(config-line)# password cisco Sw-Floor-1(config-line)# login SW-Piso-1(config-line)#

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Limitar el acceso a las configuraciones de dispositivos Cifrado de contraseñas § Los archivos startup-config y running-config muestran la mayor parte de las contraseñas en texto no cifrado. Esta es una amenaza de seguridad dado que cualquier persona puede ver las contraseñas si tiene acceso a estos archivos.

Sw-Floor-1(config)# service password-encryption S1(config)# exit S1# show running-config <se omitió el resultado>

```bash
service password-encryption
```

! hostname S1 ! enable secret 5 $1$mERr$9cTjUIEqNGurQiFU.ZeCi1 ! <Se omitieron resultados> línea con 0 password 7 0822455D0A16 login ! line vty 0 4 password 7 0822455D0A16 login line vty 5 15 password 7 0822455D0A16 login! § Utilice el comando de global config service password-encryption para cifrar todas las contraseñas.

• El comando aplica un cifrado débil a todas las contraseñas no cifradas. • Sin embargo, detiene "mirar por encima del hombro".

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Los avisos son mensajes que se muestran cuando alguien intenta acceder a un dispositivo. Los avisos son una parte importante en un proceso legal en el caso de una demanda por el ingreso no autorizado a un dispositivo.

Limitar el acceso a las configuraciones de dispositivos Mensajes de aviso § Configurado mediante el comando banner motd delimiter message delimiter del modo de configuración global. El carácter delimitador puede ser cualquier carácter siempre que sea único y no aparezca en el mensaje (p. ej., #$%^&*).

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Limitar el acceso a las configuraciones de dispositivos Syntax Checker: Limitación del acceso a un switch Cifre todas las contraseñas. Sw-Floor-1(config)# service password-encryption Sw-Piso-1(config)# Proteja el acceso a EXEC con privilegios con la contraseña Cla55.

Sw-Floor-1(config)# enable secret Cla55 Sw-Piso-1(config)# Proteja la línea de la consola. Utilice la contraseña Cisc0 y permita el inicio de sesión. Sw-Floor-1(config)# line console 0 Sw-Floor-1(config-line)# password Cisc0 Sw-Floor-1(config-line)# login SW-Floor-1(config-line)# exit Sw-Piso-1(config)# Proteja las primeras 16 líneas VTY. Utilice la contraseña Cisc0 y permita el inicio de sesión.

Sw-Floor-1(config)# line vty 0 15 Sw-Floor-1(config-line)# password Cisc0 Sw-Floor-1(config-line)# login Sw-Floor-1(config-line)# end Sw-Floor-1#

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Los dispositivos Cisco usan un archivo de configuración en ejecución y un archivo de configuración de inicio. Guardar configuraciones Guardar el archivo de configuración en ejecución § El archivo de configuración en ejecución se almacena en la RAM y contiene la configuración actual de un dispositivo Cisco IOS.

• Los cambios de configuración se almacenan en este archivo. • Si se interrumpe la alimentación, se pierde la configuración en ejecución. • Utilice el comando show startup-config para mostrar el contenido. § El archivo de configuración de inicio se almacena en la NVRAM y contiene la configuración que utilizará el dispositivo al reiniciar.

• En general, la configuración en ejecución se guarda como la configuración de inicio. • Si se interrumpe la alimentación, no se pierde o borra. • Utilice el comando show running-config para mostrar el contenido. § Utilice el comando copy running-config startup-config para guardar la nueva configuración en ejecución.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Si los cambios en la configuración no tienen el efecto deseado, pueden quitarse individualmente o el dispositivo puede reiniciarse a la última configuración guardada; para ello, utilice el comando del modo EXEC con privilegios reload.

• El comando restaura la configuración de inicio. • Aparecerá una petición de entrada para preguntar si se desean guardar los cambios. Para descartar los cambios, ingrese n o no. § Como alternativa, si se guardaron cambios no deseados en la configuración de inicio, es posible que deba borrar todas las configuraciones mediante el comando del modo EXEC con privilegios erase startup-config.

Guardar configuraciones Modificación de la configuración en ejecución

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conéctese al switch mediante PuTTY o Tera Term. Habilite el inicio de sesión y asigne un nombre y ubicación de archivo donde guardar el archivo de registro. Genere el texto que se capturará dado que el texto que aparece en la ventana del terminal se colocará en el archivo elegido.

Desactive el inicio de sesión en el software del terminal; para ello, seleccione None (Ninguno) en la opción de inicio de sesión. § Los archivos de configuración también pueden guardarse y archivarse en un documento de texto para su posterior edición o reutilización. Por ejemplo, suponga que se configuró un switch y que se guardó la configuración en ejecución.

Guardar configuraciones Captura de la configuración en un archivo de texto Ejecute el comando show running-config o show startup-config ante la petición de entrada de EXEC con privilegios.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § El archivo de texto creado se puede utilizar como registro de cómo se implementa actualmente el dispositivo y puede utilizarse para restaurar la configuración. El archivo requerirá edición antes de poder utilizarse para restaurar una configuración guardada a un dispositivo.

§ Para restaurar un archivo de configuración a un dispositivo: • Ingrese al modo de configuración global en el dispositivo. • Copie y pegue el archivo de texto en la ventana del terminal conectada al switch. § El texto en el archivo estará aplicado como comandos en la CLI y pasará a ser la configuración en ejecución en el dispositivo.

Guardar configuraciones Captura de la configuración en un archivo de texto (continuación)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Guardar configuraciones Packet Tracer: Primera configuración switch

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 3 Esquemas de direcciones

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Puertos y direcciones Descripción general de direcciones IP § Cada terminal de una red (p. ej., PC, computadoras portátiles, servidores, impresoras, teléfonos VoIP, cámaras de seguridad) requieren una configuración IP que conste de lo siguiente

•

```bash
IP Address (Dirección IP)
```

• Máscara de subred • Gateway predeterminado (opcional para algunos dispositivos) § Las direcciones IPv4 se muestran en formato decimal punteado que consta de lo siguiente: • 4 números decimales 0 y 255 • Separados por puntos decimales • P. ej., 192.168.1.10, 255.255.255.0, 192.168.1.1

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Puertos y direcciones Interfaces y puertos § Los switches de la capa 2 de Cisco IOS cuentan con puertos físicos para conectar dispositivos. Sin embargo, estos puertos no son compatibles con las direcciones IP de la capa 3.

§ Para conectarse en forma remota y administrar el switch de capa 2, debe configurarse con una interfaz virtual de switch (SVI) o más. § Cada switch cuenta con una SVI de VLAN 1 predeterminada. Nota: Un switch de capa 2 no necesita una dirección IP para funcionar. La dirección IP de la SVI solo se utiliza para la administración remota del switch.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Abra el Control Panel (Panel de control) > Network Sharing Center (Centro de compartición de redes) > Change adapter settings (Configuración del adaptador de cambios) y haga clic en el adaptador.

Configure la información de la dirección IPv4, la máscara de subred y el gateway predeterminado, y luego haga clic en OK (Aceptar). § Para configurar manualmente una dirección IP en un host de Windows: Configurar direccionamiento IP Configuración manual de direcciones IP para terminales Haga clic con el botón derecho en el adaptador y seleccione Properties (Propiedades) para mostrar la ventana Local Area Connection Properties (Propiedades de conexión de área local).

Resalte el protocolo de Internet versión 4 (TCP/IPv4) y haga clic en Properties (Propiedades) para abrir la ventana Protocol Version 4 (TCP/IPv4) Properties (Propiedades del protocolo de Internet versión 4 [TCP/IPv4]). Nota: La configuración manual de IPv4 de Windows 10 se proporciona como material suplementario al final de esta presentación.

Haga clic en Use the following IP address (Utilizar la dirección IP) para configurar manualmente la configuración de la dirección IPv4.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § Para asignar la configuración IP mediante el protocolo de configuración dinámica de host (DHCP): Configurar direccionamiento IP Configuración automática de direcciones IP para terminales Abra el Control Panel (Panel de control) > Network Sharing Center (Centro de compartición de redes) > Change adapter settings (Configuración del adaptador de cambios) y haga clic en el adaptador.

Haga clic en Obtain an IP address automatically (Obtener una dirección IP automáticamente) y haga clic en OK (Aceptar). Haga clic con el botón derecho en el adaptador y seleccione Properties (Propiedades) para mostrar la ventana Local Area Connection Properties (Propiedades de conexión de área local).

Resalte el protocolo de Internet versión 4 (TCP/IPv4) y haga clic en Properties (Propiedades) para abrir la ventana Protocol Version 4 (TCP/IPv4) Properties (Propiedades del protocolo de Internet versión 4 [TCP/IPv4]). Use el comando de petición de ingreso de comando de Windows ipconfig para verificar una dirección IP de host.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configurar direccionamiento IP Interfaz virtual de switch § Para administrar de forma remota un switch, también debe configurarse con una configuración IP: • Sin embargo, el switch no cuenta con una interfaz física de Ethernet que pueda configurarse.

• En su lugar, debe configurar la interfaz virtual de switch (SVI) de VLAN 1. § La SVI de VLAN 1 debe configurarse con lo siguiente: • Dirección IP: identifica únicamente al switch en la red. • Máscara de subred: identifica la porción de red y del host de la dirección IP.

• Enabled: con el comando no shutdown. Utilice el comando EXEC con privilegios show ip interface brief para verificar.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configurar direccionamiento IP Packet Tracer: Conectando el switch

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Verificar conectividad Verificación del direccionamiento de la interfaz § Se verifica la configuración de IP en un host de Windows mediante el comando ipconfig. § Para verificar los ajustes de las direcciones y las interfaces de dispositivos intermedios como switches y routers, utilice el comando EXEC con privilegios show ip interface brief.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Verificar conectividad Prueba de conectividad integral § El comando ping puede utilizarse para probar la conectividad de otro dispositivo en la red o un sitio web en Internet.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 4 Reenvío de tramas (Frame Forwarding)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de Tramas Conmutación en redes Se asocian dos términos con marcos que entran o salen de una interfaz

- Entrada — entrar en la interfaz
- Salida : salida de la interfaz

Un switch reenvía basado en la interfaz de entrada y la dirección MAC de destino. Un switch Ethernet de capa 2 utiliza direcciones MAC para tomar decisiones de reenvío. Nota: Un switch nunca permitirá que el tráfico se reenvíe fuera de la interfaz en la que recibió el tráfico.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de Tramas Tabla de direcciones MAC del switch Un switch utilizará la dirección MAC de destino para determinar la interfaz de salida. Antes de que un switch pueda tomar esta decisión, debe saber qué interfaz se encuentra el destino.

Un switch crea una tabla de direcciones MAC, también conocida como tabla de memoria direccionable por contenido (CAM), grabando la dirección MAC de origen en la tabla junto con el puerto en el que se recibió.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de tramas El método de aprendizaje y reenvío del switch El switch utiliza un proceso de dos pasos: Paso 1. Explora– Examinar la dirección MAC de origen

- Agrega el MAC de origen si no está en la tabla
- Restablece la configuración de tiempo de espera de nuevo a 5 minutos si el origen está

en la tabla Paso 2. Reenvía – Examinar la dirección MAC de destino

- Si la dirección MAC de destino está en la tabla, reenvía la trama por el puerto

especificado.

- Si un MAC de destino no está en la tabla, se saturan todas las interfaces excepto la que

se recibió.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de tramas Vídeo: Tablas de direcciones MAC en switches conectados Este video cubrirá lo siguiente

- Cómo los switches crean tablas de direcciones MAC
- Cómo conmutan las tramas hacia adelante en función del contenido de sus tablas

de direcciones MAC • https://www.youtube.com/watch?v=paKw3cIk2eU

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de tramas Métodos de reenvío de un switch Los switches utilizan software en circuitos integrados específicos de la aplicación (ASIC) para tomar decisiones muy rápidas.

Un switch utilizará uno de estos dos métodos para tomar decisiones de reenvío después de recibir un frame

- Conmutación de almacenamiento y reenvío : recibe toda la trama y garantiza

que la trama es válida. Conmutación de almacenamiento y reenvío es el método principal de switching LAN de Cisco.

- Conmutación de corte : reenvía la trama inmediatamente después de determinar

la dirección MAC de destino de una trama entrante y el puerto de salida.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de tramas Conmutación de almacenamiento y reenvío Almacenamiento y envío tienen dos características principales

- Comprobación de errores - El switch comprobará si hay errores CRC en la secuencia de

comprobación de cuadros (FCS). Las tramas defectuosas se descartarán.

- Almacenamiento en búfer - La interfaz de entrada almacenará en búfer la trama mientras

comprueba el FCS. Esto también permite que el switch se ajuste a una diferencia potencial en velocidades entre los puertos de entrada y salida.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Reenvío de tramas Switching de almacenamiento y reenvío

- El corte reenvía el marco inmediatamente después

de determinar el MAC de destino.

- El método Fragment (Frag) Free comprobará el

destino y se asegurará de que el marco sea de al menos 64 Bytes. Esto eliminará a los runts. Conceptos de switching por método de corte: • Es apropiado para los switches que necesitan latencia de menos de 10 microsegundos. • No comprueba el FCS, por lo que puede propagar errores.

• Puede provocar problemas de ancho de banda si el switch propaga demasiados errores. • No es compatible con puertos con velocidades diferentes que van desde la entrada hasta la salida.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 5 Dominios de switching

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Dominios de switching Dominios de colisiones Los switch eliminan los dominios de colisión y reducen la congestión.

- Cuando hay dúplex completo en el enlace, se

eliminan los dominios de colisión.

- Cuando hay uno o más dispositivos en

semidúplex, ahora habrá un dominio de colisión.

- Ahora habrá contención por el ancho de

banda.

- Las colisiones son ahora posibles.
- La mayoría de los dispositivos, incluidos Cisco

y Microsoft, utilizan la negociación automática como configuración predeterminada para dúplex y velocidad.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Dominios de switching Dominios de Difusión (Broadcast Domains)

- Un dominio de difusión se extiende a todos los

dispositivos de Capa 1 o Capa 2 de una LAN. • Sólo un dispositivo de capa 3 (enrutador) romperá el dominio de difusión, también llamado dominio de difusión MAC. • El dominio de difusión consta de todos los dispositivos en la LAN que reciben el tráfico de difusión.

- Cuando el switch de capa 2 recibe la difusión,

saturará todas las interfaces excepto la interfaz de entrada.

- Demasiadas emisiones pueden causar congestión y

un rendimiento deficiente de la red.

- El aumento de los dispositivos en la capa 1 o en la

capa 2 hará que el dominio de difusión se expanda.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Dominios de switching Alivio de la congestión en la red Los switch utilizan la tabla de direcciones MAC y dúplex completo para eliminar colisiones y evitar la congestión.

Las características del interruptor que alivian la congestión son las siguientes: Protocolo Función Velocidades de puertos rápidos Dependiendo del modelo, los switch pueden tener velocidades de puerto de hasta 100 Gbps. Switching interno rápido Esto utiliza un bus interno rápido o memoria compartida para mejorar el rendimiento.

Búferes para tramas grandes Esto permite el almacenamiento temporal mientras se procesan grandes cantidades de tramas. Alta densidad del puerto Esto proporciona muchos puertos para que los dispositivos se conecten a LAN con menos costo. Esto también proporciona más tráfico local con menos congestión.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 6 Propósito de STP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Redundancia en redes conmutadas de capa 2 • En este tema se tratan las causas de los bucles en una red de capa 2 y se explica brevemente cómo funciona el protocolo de árbol de expansión. La redundancia es una parte importante del diseño jerárquico para eliminar puntos únicos de falla y prevenir la interrupción de los servicios de red para los usuarios. Las redes redundantes requieren la adición de rutas físicas, pero la redundancia lógica también debe formar parte del diseño. Tener rutas físicas alternativas para que los datos atraviesen la red permite que los usuarios accedan a los recursos de red, a pesar de las interrupciones de la ruta. Sin embargo, las rutas redundantes en una red Ethernet conmutada pueden causar bucles físicos y lógicos en la capa 2.

• Las LAN Ethernet requieren una topología sin bucles con una única ruta entre dos dispositivos. Un bucle en una LAN Ethernet puede provocar una propagación continua de tramas Ethernet hasta que un enlace se interrumpe y interrumpa el bucle.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Protocolo de árbol de expansión (Spanning Tree Protocol, STP) • El protocolo de árbol de expansión (STP) es un protocolo de red de prevención de bucles que permite redundancia mientras crea una topología de capa 2 sin bucles.

• STP bloquea lógicamente los bucles físicos en una red de Capa 2, evitando que las tramas circulen por la red para siempre.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Recálculo STP STP compensa un error en la red al volver a calcular y abrir los puertos previamente bloqueados.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Problemas con vínculos de switch redundantes • La redundancia de ruta proporciona múltiples servicios de red al eliminar la posibilidad de un solo punto de falla. Cuando existen múltiples rutas entre dos dispositivos en una red Ethernet, y no hay implementación de árbol de expansión en los switch, se produce un bucle de capa 2. Un bucle de capa 2 puede provocar inestabilidad en la tabla de direcciones MAC, saturación de enlaces y alta utilización de CPU en switch y dispositivos finales, lo que hace que la red se vuelva inutilizable.

• La capa 2 Ethernet no incluye un mecanismo para reconocer y eliminar tramas de bucle sin fin. Tanto IPv4 como IPv6 incluyen un mecanismo que limita la cantidad de veces que un dispositivo de red de Capa 3 puede retransmitir un paquete. Un router disminuirá el TTL (Tiempo de vida) en cada paquete IPv4 y el campo Límite de saltos en cada paquete IPv6. Cuando estos campos se reducen a 0, un router dejará caer el paquete. Los switch Ethernet y Ethernet no tienen un mecanismo comparable para limitar el número de veces que un switch retransmite una trama de Capa 2. STP fue desarrollado específicamente como un mecanismo de prevención de bucles para Ethernet de Capa 2.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Bucles de Capa 2 • Sin STP habilitado, se pueden formar bucles de capa 2, lo que hace que las tramas de difusión, multidifusión y unidifusión desconocidos se reproduzcan sin fin. Esto puede derribar una red rápidamente.

• Cuando se produce un bucle, la tabla de direcciones MAC en un switch cambiará constantemente con las actualizaciones de las tramas de difusión, lo que resulta en la inestabilidad de la base de datos MAC. Esto puede causar una alta utilización de la CPU, lo que hace que el switch no pueda reenviar tramas.

• Una trama de unidifusión desconocida se produce cuando el switch no tiene la dirección MAC de destino en la tabla de direcciones MAC y debe reenviar la trama a todos los puertos, excepto el puerto de ingreso.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Tormenta de difusión (Broadcast Storm) • Una tormenta de difusión es un número anormalmente alto de emisiones que abruman la red durante un período específico de tiempo. Las tormentas de difusión pueden deshabilitar una red en cuestión de segundos al abrumar los switch y los dispositivos finales. Las tormentas de difusión pueden deberse a un problema de hardware como una NIC defectuosa o a un bucle de capa 2 en la red.

• Las emisiones de capa 2 en una red, como las solicitudes ARP, son muy comunes. Las multidifusión de capa 2 normalmente se reenvían de la misma manera que una difusión por el switch. Los paquetes IPv6 nunca se reenvían como una difusión de Capa 2, ICMPv6 Neighbor Discovery utiliza multidifusión de Capa 2.

• Un host atrapado en un bucle de capa 2 no está accesible para otros hosts en la red. Además, debido a los constantes cambios en su tabla de direcciones MAC, el switch no sabe desde qué puerto reenviar las tramas de unidifusión. • Para evitar que ocurran estos problemas en una red redundante, se debe habilitar algún tipo de árbol de expansión en los switch. De manera predeterminada, el árbol de expansión está habilitado en los switch Cisco para prevenir que ocurran bucles en la capa 2.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP El algoritmo de árbol de expansión (Spanning Tree) • STP se basa en un algoritmo inventado por Radia Perlman mientras trabajaba para Digital Equipment Corporation, y publicado en el artículo de 1985 "Un algoritmo para la computación distribuida de un árbol de expansión en una LAN extendida". Su algoritmo de árbol de expansión (STA) crea una topología sin bucles al seleccionar un único puente raíz donde todos los demás switch determinan una única ruta de menor costo.

• STP evita que ocurran bucles mediante la configuración de una ruta sin bucles a través de la red, con puertos “en estado de bloqueo” ubicados estratégicamente. Los switch que ejecutan STP pueden compensar las fallas mediante el desbloqueo dinámico de los puertos bloqueados anteriormente y el permiso para que el tráfico se transmita por las rutas alternativas.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP El algoritmo de árbol de expansión (cont.) ¿Cómo crea STA una topología sin bucles? • Selección de un puente raíz: Este puente (switch) es el punto de referencia para que toda la red cree un árbol de expansión alrededor.

• Bloquear rutas redundantes: STP garantiza que solo haya una ruta lógica entre todos los destinos de la red al bloquear intencionalmente las rutas redundantes que podrían causar un bucle. Cuando se bloquea un puerto, se impide que los datos del usuario entren o salgan de ese puerto.

• Crear una topología sin bucle: un puerto bloqueado tiene el efecto de convertir ese vínculo en un vínculo no reenvío entre los dos switch. Esto crea una topología en la que cada switch tiene una única ruta al puente raíz, similar a las ramas de un árbol que se conectan a la raíz del árbol.

• Vuelva a calcular en caso de falla de enlace: las rutas físicas todavía existen para proporcionar redundancia, pero estas rutas están deshabilitadas para evitar que ocurran los bucles. Si alguna vez la ruta es necesaria para compensar la falla de un cable de red o de un switch, STP vuelve a calcular las rutas y desbloquea los puertos necesarios para permitir que la ruta redundante se active. Los recálculos STP también pueden ocurrir cada vez que se agrega un nuevo switch o un nuevo vínculo entre switches a la red.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Packet Tracer: Investigar la prevención de bucles STP Este vídeo muestra el uso de STP en un entorno de red. https://www.youtube.com/watch?v=NUrbfsIsWgM

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Propósito del STP Packet Tracer: Investigar la prevención de bucles STP En esta actividad de Packet Tracer, completará los siguientes objetivos: • Cree y configure una red simple de tres switch con STP.

• Ver la operación STP. • Desactive STP y vuelva a ver la operación.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 7 Administración Avanzada de un switch

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Comunicación en dúplex

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Configurar los puertos de un switch en la capa física

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Auto-MDIX § Antes se requerían determinados tipos de cable (cruzados o directos) para conectar dispositivos. § La característica de interfaz cruzada automática dependiente del medio (auto-MDIX) elimina este problema.

§ Cuando se habilita auto-MDIX, la interfaz detecta automáticamente la conexión y la configura como corresponde. § Cuando se usa auto-MDIX en una interfaz, la velocidad y el modo dúplex de la interfaz se deben establecer en automático.

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Auto-MDIX (continuación)

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Auto-MDIX (continuación)

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Problema en la capa de acceso a la red

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Problema en la capa de acceso a la red (continuación)

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Configurar los puertos de un switch Solucionar problema en la capa de acceso a la red

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 8 – SSH

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Acceso remoto seguro Funcionamiento de SSH § Shell seguro (SSH) es un protocolo que proporciona una conexión segura (cifrada) a un dispositivo remoto basada en la línea de comandos.

§ SSH debería reemplazar a Telnet para las conexiones de administración, debido a sus sólidas características de cifrado. § SSH utiliza el puerto TCP 22 de manera predeterminada. § Telnet utiliza el puerto TCP 23. § Para habilitar SSH en switches Catalyst 2960, se requiere una versión del software de IOS que incluya características y capacidades criptográficas (cifradas).

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Acceso remoto seguro Configuración de SSH 1. Verificar la compatibilidad con SHH: show ip ssh. 1. Configurar el dominio IP 1. Generar pares de claves RSA 1. Configurar la autenticación de usuario 1.

Configurar las líneas vty

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Acceso remoto seguro Verificación de SSH

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Acceso remoto seguro Verificación de SSH (continuación)

Presentation_ID © 2008 Cisco Systems, Inc. Todos los derechos reservados. Información confidencial de Cisco Packet Tracer - SSH

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 9 – Implementar Seguridad de Puertos (Port Security)

---
