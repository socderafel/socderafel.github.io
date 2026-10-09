---
layout: default
title: "UD8 — VLAN · Temari Complet"
course_root: ".."
badge: "1r ASIX · Grau Superior · UD8 — VLAN"
prev_url: "../ut07/ut0702.html"
prev_label: "⬅️ 7.2 Cisco IOS"
next_url: "../ut08/ut0801.html"
next_label: "8.1 U8 VLAN ➡️"
---

# 📘 UD8 — VLAN (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**8.1 U8 VLAN**](./ut0801.md)
- [**8.2 Comandos Cisco VLAN**](./ut0802.md)
- [**8.3 VTP, DTP i Capa 3**](./ut0803.md)

---

# 8.1 U8 VLAN

---

PAX - U8 – VLAN 1er ASIX

1 ASIX - PAX Concepte de VLAN

- Domini de col·lisió
- Conjunt d’equipts conectat mitjançant hubs o cables directes.

1 ASIX - PAX Concepte de VLAN

- Domini de difusió
- Conjunt d’equips connectats mitjançant hubs, ponts i switch.
- Els routers segmenten dominis de difusió, perquè no permeten passar

missatges de difusió.

1 ASIX - PAX Concepte de VLAN

- La utilització de switch va millorar el rendiment de les xarxes al crear

els dominis de difusió però seguia existint el problema de que el switch reenvía el paquet per tots els ports menys pel que ha rebut la informació.

- En xarxes gran, genera tràfic innecessari. 2 opcions
- Utilitzar routers que separen cada subxarxa
- Utilitzar switch amb capacitat de crear VLAN

1 ASIX - PAX Concepte de VLAN

- VLAN es un mecanisme que permet als switch gestionables

segmentar la xarxa en dominis de difusió, sense necessitat d’usar routers (que són més lents).

- Cada VLAN està formada per un subconjunt qualsevol d’equips, que

poden estar físicament en el mateix segment o en diferents segments de xarxa.

1 ASIX - PAX Concepte de VLAN

- En la següent imatge es mostren dos VLAN
- VLAN ADM i VLAN INF
- Cada VLAN és un domini de difusió diferente. Cada missatge enviat per

difusió, sols aplega als equips de la VLAN.

1 ASIX - PAX Concepte de VLAN

- Cal tindre en compte també que els equips d’una VLAN no tenen

perquè estar en el mateix segment de xarxa de forma obligada.

1 ASIX - PAX Trama VLAN

- El mecanisme que tenen les VLAN per saber si un paquet l’envia a una

VLAN o altra es afegir dos nous camps a la trama Ethernet.

- Trama IEEE 802.1q. DOT1Q.

1 ASIX - PAX Tipus de VLAN

- VLAN predeterminada
- S’assignen tots els ports del switch quan el dispositiu inicia. En Cisco es la VLAN 1. No

es pot canviar el nom ni eliminar. Swtich antic o tràfic sense etiqueta..

- VLAN de dades
- Està configurada sols per enviar tràfic generat per l’usuari. També anomenada VLAN

d’usuari.

- VLAN d’administració
- La utilitza el administrador per realitzar tasques de gestió. Convenient canviar-la per

la VLAN 99.

1 ASIX - PAX Tipus de VLAN

- VLAN nativa
- Sols s’utilitza per enllaços

troncals (trunks)

- VLAN de veu
- Requereix d’una VLAN

separada perquè el tràfic de veu requereix alta prioritat.

1 ASIX - PAX VLAN dinàmiques

- Protocol VTP – VLAN trunking protocol. Serveix per assignar a

múltiples switch la configuració de VLAN des d’un switch que actua com a servidor. Aixo permet l’administració centralitzada des d’un sol switch. En Cisco existeix DTP (Dynamic troncal protocol)

1 ASIX - PAX Dubtes?

---

# 8.2 Comandos Cisco VLAN

VLAN

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 3 Configuración de VLAN

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Configuración de VLAN Rangos de VLAN en switches Catalyst Los switches Catalyst 2960 y 3650 admiten más de 4000 VLAN. Rango normal VLAN 1 - 1005 Rango extendido VLAN 1006 - 4095 Utilizado en pequeñas y medianas empresas Usado por los proveedores de servicios 1002 — 1005 están reservados para VLAN heredadas Están en Running-Config 1, 1002 — 1005 se crean automáticamente y no se pueden eliminar Admite menos funciones de VLAN Almacenado en el archivo vlan.dat en flash Requiere configuraciones de VTP VTP puede sincronizar entre conmutadores

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Comandos de creación deVLANde configuración de VLAN Los detalles de la VLAN se almacenan en el archivo vlan.dat. Crea VLAN en el modo de configuración global. Tarea Comando de IOS Ingresa al modo de configuración global.

```bash
Switch# configure terminal
```

Cree una VLAN con un número de identificación válido.

```bash
Switch(config)# vlan vlan-id
```

Especificar un nombre único para identificar la VLAN.

```bash
Switch(config-vlan)# name vlan-name
```

Vuelva al modo EXEC con privilegios. Conmutador (config-vlan) # final Ingresa al modo de configuración global.

```bash
Switch# configure terminal
```

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Configuración de VLAN Ejemplo de creación de VLAN

- Si el Student PC va a estar en VLAN

20, primero crearemos la VLAN y luego la nombraremos.

- Si no lo nombra, Cisco IOS le dará un

nombre predeterminado de vlan y el número de cuatro dígitos de la VLAN. Por ejemplo, vlan0020 para VLAN 20. Indicador Comando S1# Configure terminal S1(config)# vlan 20 S1(config-vlan)# name student S1(config-vlan)# finalizar

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Comandos de asignación de puertos deVLANde configuración de VLAN Una vez creada la VLAN, podemos asignarla a las interfaces correctas. Tarea Comando Ingresa al modo de configuración global.

```bash
Switch# configure terminal
```

Ingrese el modo de configuración de interfaz.

```bash
Switch(config)# interface interface-id
```

Establezca el puerto en modo de acceso.

```bash
Switch(config-if)# switchport mode access
```

Asigne el puerto a una VLAN.

```bash
Switch(config-if)# switchport access vlan vlan-id
```

Vuelva al modo EXEC con privilegios.

```bash
Switch(config-if)# end
```

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Configuración de VLAN Ejemplo de asignación de puerto VLAN Podemos asignar la VLAN a la interfaz del puerto.

- Una vez que el dispositivo se asigna

la VLAN, el dispositivo final necesitará la información de dirección IP para esa VLAN

- Aquí, Student PC recibe 172.17.20.22

Indicador Comando S1# Configure terminal S1(config)# Interfaz fa0/18 S1(config-if)# Switchport mode access S1(config-if)# Switchport access vlan 20 S1(config-if)# finalizar

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Datos de configuración de VLAN y VLAN de voz Un puerto de acceso solo se puede asignar a una VLAN de datos. Sin embargo, también se puede asignar a una VLAN de voz para cuando un teléfono y un dispositivo final estén fuera del mismo puerto de conmutación.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Ejemplo de VLAN de voz ydatos de configuración de VLAN

- Queremos crear y nombrar VLAN de voz y

datos.

- Además de asignar la VLAN de datos,

también asignaremos la VLAN de voz y activaremos QoS para el tráfico de voz a la interfaz.

- El switch catalizador más reciente creará

automáticamente la VLAN, si aún no existe, cuando se asigne a una interfaz. Nota: QoS está más allá del alcance de este curso. Aquí mostramos el uso del comando mls qos trust [cos | device cisco-phone | dscp | ip-precedence].

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Configuración de VLAN Verifique la información de VLAN Use el comando show vlan . La sintaxis completa es: show vlan [brief | id vlan-id | name vlan-name | summary] Tarea Opción de comando Muestra el nombre, el estado y sus puertos de la VLAN, una VLAN por línea.

breve Muestra información sobre el número de ID de VLAN identificado. id vlan-id Muestra información sobre el número de ID de VLAN identificado. El nombre de vlane es una cadena ASCII de 1 a 32 caracteres. name vlan-name Mostrar el resumen de información de la VLAN. resumen

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Configuración de VLAN Cambiar pertenencia al puerto VLAN Hay varias formas de cambiar la membresía de VLAN

- Vuelva a ingresar el comando switchport

access vlan vlan-id

- use la vlan de acceso sin puerto de

conmutación para volver a colocar la interfaz en la VLAN 1 Utilice los comandos show vlan brief o show interface fa0/18 switchport para verificar la asociación correcta de VLAN.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Configuración de VLAN Eliminar VLAN Elimine las VLAN con el comando no vlan vlan-id . Precaución: antes de eliminar una VLAN, reasigne todos los puertos miembros a una VLAN diferente..

- Elimine todas las VLAN con los comandos delete flash:vlan.dat o delete vlan.dat .
- Vuelva a cargar el switch al eliminar todas las VLAN.

> **⚠️ Nota: Para restaurar el valor predeterminado de fábrica...**
> Nota: Para restaurar el valor predeterminado de fábrica, desconecte todos los cables de datos, borre la configuración de inicio y elimine el archivo vlan.dat y, a continuación, vuelva a cargar el dispositivo.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 4 Troncales VLAN

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Comandos de configuracióntroncal deVLAN Configure y verifique las troncales VLAN. Los troncos son capa 2 y transportan tráfico para todas las VLAN. Tarea Comando de IOS Ingresa al modo de configuración global.

```bash
Switch# configure terminal
```

Ingrese el modo de configuración de interfaz.

```bash
Switch(config)# interface interface-id
```

Establezca el puerto en modo de enlace permanente. Conmutador(config-if) # troncaldemodo de puerto de conmutación Cambie la configuración de la VLAN nativa a otra opción que no sea VLAN 1.

```bash
Switch(config-if)# switchport trunk native vlan
```

vlan-id Especificar la lista de VLAN que se permitirán en el enlace troncal.

```bash
Switch(config-if)# switchport trunk allowed
```

vlan vlan-list Vuelva al modo EXEC con privilegios.

```bash
Switch(config-if)# end
```

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Ejemplo de Configuración de Troncales Troncales de VLAN Las subredes asociadas a cada VLAN son

- VLAN 10 - Faculty/Staff - 172.17.10.0/24
- VLAN 20 - Students - 172.17.20.0/24
- VLAN 30 - Guests - 172.17.30.0/24
- VLAN 99 - Native - 172.17.99.0/24

F0/1 port on S1 is configured as a trunk port. Nota: Esto supone un conmutador 2960 que utiliza el etiquetado 802.1q. Los switches de capa 3 requieren que la encapsulación se configure antes del modo troncal. Indicador Comando S1(config)# Interfaz fa0/1 S1(config-if)# Switchport mode trunk S1(config-if)# Switchport trunk native vlan 99 S1(config-if)# Switchport trunk allowed vlan 10,20,30,99 S1(config-if)# finalizar

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Troncales de VLAN Verifique la configuración de troncales Establezca el modo troncal y la vlan nativa. Observe el comando sh int fa0/1 switchport

- Se establece en troncal administrativamente
- Se establece como troncal

operacionalmente (en funcionamiento)

- La encapsulación es dot1q
- VLAN nativa establecida en VLAN 99
- Todas las VLAN creadas en el switch

pasarán tráfico en este tronco

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Troncales de VLAN Restablezca el tronco al estado predeterminado

- Restablezca la configuración

predeterminada del tronco con el comando no.

- Todas las VLAN permitidas para pasar

tráfico

- VLAN nativa = VLAN 1
- Verifique la configuración

predeterminada con un comando sh int fa0/1 switchport .

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Troncales de VLAN Restablezca el tronco al estado predeterminado (Cont.) Restablezca el tronco a un modo de acceso con el comando switchport mode access

- Se establece en una interfaz de acceso

administrativamente

- Se establece como una interfaz de acceso

operacionalmente (en funcionamiento)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco 5 Dynamic Trunking ProtocolProtocolo de enlace dinámico

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Protocolo de enlace dinámico Introduction to DTP El Protocolo de enlace troncal dinámico (DTP) es un protocolo propietario de Cisco. Las características de DTP son las siguientes

- Activado de forma predeterminada en switches Catalyst 2960 y 2950
- Dynamic-Auto es el valor predeterminado en los conmutadores 2960 y 2950
- Puede desactivarse con el comando nonegotiate
- Puede volver a activarse configurando la interfaz en dinámico automático
- Establecer un conmutador en un tronco estático o acceso estático evitará problemas de

negociación con los comandos switchport mode trunk o switchport mode access .

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Protocolo de enlace dinámico Modos de interfaz negociados El comando switchport mode tiene opciones adicionales. Utilice el comando switchport nonegotiate interface configuration para detener la negociación DTP.

Opción Descripción Acceso Modo de acceso permanente y negocia para convertir el vínculo vecino en un vínculo de acceso Dinámico automático Will se convierte en una interfaz troncal si la interfaz vecina se configura en modo troncal o deseable Dinámico deseable Busca activamente convertirse en un tronco negociando con otras interfaces automáticas o deseables Enlace troncal Modo de enlace permanente y negocia para convertir el enlace vecino en un enlace troncal

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Resultados del protocolo de enlace troncal dinámico de una configuración DTP Las opciones de configuración de DTP son las siguientes: Dinámico automático Dinámico deseado Troncal Acceso Dinámico automático Acceso Troncal Troncal Acceso Dinámico deseado Troncal Troncal Troncal Acceso Troncal Troncal Troncal Troncal Conectividad limitada Acceso Acceso Acceso Conectividad limitada Acceso

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco Protocolo de enlace dinámico Verifique el modo DTP La configuración predeterminada de DTP depende de la versión y plataforma del IOS de Cisco. § Utilice el comando show dtp interface para determinar el modo DTP actual.

§ La práctica recomendada recomienda que las interfaces se configuren para acceder o troncal y para desconectarse DTP

---

# 8.3 VTP, DTP i Capa 3

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Escalamiento de VLAN

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 1 VTP, VLAN extendidas y DTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. § El protocolo de troncal VLAN (VTP) permite que un administrador de redes maneje las VLAN en un switch configurado como servidor VTP. § El servidor VTP distribuye y sincroniza la información de la VLAN en los enlaces troncales a los switches habilitados por el VTP en toda la red conmutada.

Conceptos y funcionamiento del VTP Descripción general del VTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Modos del VTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Modos del VTP (cont.)

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Publicidad del VTP § Tres tipos de anuncios del VTP: • Publicaciones de resumen: contienen el nombre del dominio del VTP y el número de revisión de la configuración.

• Solicitud de publicación: responde a un mensaje de publicación de resumen cuando la publicación de resumen contiene un número de revisión de configuración más alto que el valor actual. • Publicaciones de subgrupos: contienen información de VLAN, incluido cualquier cambio.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Versiones del VTP § Los switches en el mismo dominio VTP deben utilizar la misma versión de VTP. Nota: La última versión del VTP es la versión 3, que va más allá del alcance de este curso.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Configuración predeterminada del VTP § El comando show vtp status muestra el estado del VTP que incluye lo siguiente: • Versión de VTP que se puede ejecutar y que se está ejecutando • Nombre de dominio del VTP • Modo de depuración del VTP • Generación de traps del VTP • ID del dispositivo • Última modificación de la configuración • Modo operativo del VTP • Cantidad máxima de VLAN admitidas localmente • Cantidad de VLAN existentes • Revisión de la configuración • MD5 Digest Verificar el estado predeterminado del protocolo VTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Advertencias del VTP § El número de revisión de configuración del VTP se almacena en la NVRAM. § Para restablecer el número de revisión de configuración del VTP a cero

• Cambie el dominio VTP del switch a un dominio VTP inexistente y luego vuelva a cambiar el dominio al nombre original. • Cambie al modo VTP del switch al modo transparente y luego vuelva al modo anterior del VTP.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Conceptos y funcionamiento del VTP Advertencias del VTP (cont.) § Consulte el gráfico: • Se agrega el S4. La configuración de inicio no se ha borrado y el archivo VLAN.DAT en el S4 no se ha eliminado. El S4 tiene el mismo nombre de dominio VTP configurado que los otros dos switches pero su número de revisión es 35, que es un número más alto que el número de revisión en los otros dos switches.

• El S4 tiene la VLAN 1 y se configura con la VLAN 30 y

### 40. Pero el S4 no tiene las VLAN 10 y 20 en la base

de datos. Debido a que el S4 tiene un número de revisión más alto, el resto de los switches en el dominio se sincronizarán con la revisión del S4. • Como consecuencia, las VLAN 10 y 20 no existirán más en los switches, lo que deja sin conectividad a los clientes que están conectados a los puertos que pertenecen a VLAN no existentes.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configuración del VTP Descripción general de la configuración del VTP § Pasos para configurar el VTP

- Paso 1: configure el servidor VTP.
- Paso 2: configure el nombre de

dominio y la contraseña del VTP.

- Paso 3: configure los clientes VTP.
- Paso 4: configure las VLAN en el

servidor VTP.

- Paso 5: verifique que los clientes

VTP hayan recibido la nueva información de la VLAN.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configuración del VTP Paso 1: configure el servidor VTP § Utilice el comando vtp mode server para configurar un switch como servidor VTP. • Confirme que todos los switches estén configurados con la configuración predeterminada antes de emitir este comando para evitar problemas con los números de revisión de configuración.

§ Utilice show vtp status para verificar. • Observe que el número de revisión de configuración todavía esté configurado en 0 y la cantidad de VLAN existentes sea 5. • Las 5 VLAN son la VLAN 1 predeterminada y las VLAN 1002-1005.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configuración del VTP Paso 2: configure el nombre de dominio y la contraseña del VTP § Utilice el comando dominio vtp domain-name para configurar el nombre de dominio. • El cliente VTP debe tener el mismo nombre de dominio que el servidor VTP antes de que acepte las publicaciones del VTP.

§ Configure una contraseña con el comando vtp password password. • Use el comando show vtp password para verificar.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configuración del VTP Paso 3: configure los clientes VTP § Use el comando vtp mode client para configurar los clientes VTP. § Utilice el mismo nombre de dominio y contraseña como servidor VTP.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configuración del VTP Paso 4: configure las VLAN en el servidor VTP § Use el comando vlan vlan-number para crear las VLAN. § Use show vlan brief para verificar las VLAN.

§ Use show vtp status para verificar el estado del servidor. • Cada vez que se agrega una VLAN, se incrementa el registro de configuración.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Configuración del VTP Paso 5: verifique que los clientes VTP hayan recibido la nueva información de la VLAN § Utilice el comando show vlan brief para verificar que el cliente haya recibido la nueva información de la VLAN.

§ Verifique el estado del cliente con el comando show vtp status.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. VLAN extendidas Rangos de VLAN en los switches Catalyst § Los switches Catalyst de las series 2960 y 3560 admiten más de 4000 VLAN. § El rango normal de las VLAN se enumera del 1 al 1005.

• Se almacena en el archivo vlan.dat. § El rango extendido de las VLAN se enumera del 1006 al 4094. • No se almacena en el archivo vlan. dat. • El VTP no detecta.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. VLAN extendidas Creación de una VLAN § El rango normal de VLAN se almacena en la memoria flash en vlan.dat. § Use vlan vlan-id para crear una VLAN. • Use name vlan-name to name the VLAN.

• Se recomienda asignarle un nombre a cada VLAN en la configuración de un switch. § Para configurar varias VLAN, se puede introducir una serie de ID de VLAN separadas por comas o un rango de ID de VLAN separado por guiones. • vlan 100,102,105-107

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. VLAN extendidas Asignación de puertos a las VLAN § Un puerto de acceso puede pertenecer a solo una VLAN por vez. • La única excepción es cuando un teléfono IP se conecta al puerto.

Hay dos VLAN asociadas al puerto: una para voz y otra para datos. Nota: utilice el comando interface range para configurar varias interfaces simultáneamente.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. VLAN extendidas Verificación de la información de la VLAN § Comandos para verificar las VLAN: • show vlan • show interfaces • show vlan name vlan-name • show vlan brief • show vlan summary • show interfaces vlan vlan-id

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. VLAN extendidas Configuración de las VLAN extendidas § Las VLAN de rango extendido se identifican por medio de una ID de VLAN que puede ir de 1006 a 4094. § Para configurar una red VLAN extendida en un switch 2960, se debe establecer en el modo VTP transparente. (De manera predeterminada, los switches 2960 no admiten VLAN de rango extendido).

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Protocolo de enlace troncal dinámico Introducción al DTP § Las negociaciones troncales se administran mediante el protocolo de enlace troncal dinámico (DTP). • El DTP es un protocolo patentado por Cisco • que se habilita automáticamente en los switches Catalyst de las series 2960 y 3560.

§ Para habilitar los enlaces troncales desde un switch Cisco hacia un dispositivo que no admite el DTP, utilice switchport mode trunk y switchport nonegotiate.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Protocolo de enlace troncal dinámico Modos de interfaz negociados § Diferentes modos de enlaces troncales: • Switchport mode access: la interfaz se convierte en una interfaz no troncal.

• Switchport mode dynamic auto: la interfaz se convierte en troncal si la interfaz vecina se establece en modo de enlace troncal o deseado. • Switchport mode dynamic desirable: la interfaz se convierte en troncal si la interfaz vecina se establece en modo de enlace troncal, deseado o dinámico automático.

• Switchport mode trunk: la interfaz se convierte en troncal, incluso si la interfaz vecina no es una interfaz de enlace troncal. • Switchport nonegotiate: evita que la interfaz genere tramas DTP. § Configure los enlaces troncales estáticamente siempre que sea posible. § Use show dtp interface para comprobar el DTP.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Protocolo de enlace troncal dinámico Packet Tracer: configuración del VTP y el DTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 2 Solución de problemas de VLAN múltiple

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de configuración entre VLAN Eliminación de VLAN § Eliminar una VLAN de un switch que está en el modo de servidor VTP elimina la VLAN de todos los switches del dominio VTP.

> **⚠️ Nota: No puede eliminar VLAN predeterminadas (es decir,...**
> Nota: No puede eliminar VLAN predeterminadas (es decir, VLAN 1, 1002 a 1005). § Use el comando de modo de configuración global no vlan vlan-id para borrar una VLAN. § Cualquier puerto asignado a esa VLAN queda inactivo. Permanece inactivo hasta que se asigna a una nueva VLAN.

Suponga que el S1 tiene las VLAN 10, 20 y 99 configuradas y la VLAN 99 está asignada a los puertos Fa0/18 a Fa0/24.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de configuración entre VLAN Problemas en los puertos de switch § Al utilizar el modelo de routing antiguo para el routing entre VLAN, los puertos del switch que se conectan a las interfaces del router deben estar configurados en las VLAN correctas.

- La F0/4 del S1 está en la

VLAN incorrecta.

- Debe estar en el modo de

acceso de la VLAN 10.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de configuración entre VLAN Problemas en los puertos de switch (cont.) § Al utilizar el modelo de routing de router-on-a-stick, la interfaz en el switch conectado al router se debe configurar como puerto de enlace troncal.

INCORRECTO

- La interfaz F0/5 en el

switch S1 no está configurada como enlace troncal y queda en la VLAN predeterminada para el puerto.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de configuración entre VLAN Verificación de la configuración del switch § Comandos para verificar la configuración del switch

- show interfaces interface-id switchport
- show running-config

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de configuración entre VLAN Problemas en las interfaces § Al habilitar el routing entre VLAN en un router, uno de los errores de configuración más comunes es conectar la interfaz física del router al puerto de switch incorrecto.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de configuración entre VLAN Verificación de la configuración del routing § Con configuraciones de router-on-a-stick, un problema común es asignar una ID de VLAN incorrecta a la subinterfaz.

§ Uso de los comandos show interfaces y show running-config para verificar las configuraciones del routing.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de direccionamiento IP Errores relacionados con direcciones IP y máscaras de subred § Para que el routing entre VLAN funcione, es necesario conectar un router a todas las VLAN, ya sea por medio de interfaces físicas separadas o subinterfaces.

§ A cada interfaz o subinterfaz se le debe asignar una dirección IP que corresponda a la subred a la cual está conectada. § Cada PC debe configurarse con una dirección IP dentro de la VLAN a la que se asigna. Dirección IP incorrecta

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de direccionamiento IP Verificación de problemas de configuración de direcciones IP y máscaras de subred § Un error común es configurar incorrectamente una dirección IP para una subinterfaz.

- Use show run y show ip interface para verificar la asignación de direcciones IP.

§ Otro error es el direccionamiento incorrecto del terminal.

- Use ipconfig para verificar la dirección en una PC con Windows.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas de asignación de direcciones IP Packet Tracer: resolución de problemas de routing entre VLAN

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas con el VTP y el DTP Solución de problemas del VTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas con el VTP y el DTP Solución de problemas del DTP Problemas comunes con enlaces troncales

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Problemas con el VTP y el DTP Packet Tracer: solución de problemas del VTP y el DTP

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. 3 Switching de capa 3

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Funcionamiento y configuración del switching de capa 3 Introducción al switching de capa 3 § Los switches multicapa proporcionan velocidades de procesamiento de paquetes con switching basado en hardware.

§ Los switches multicapas de Catalyst admiten los siguientes tipos de interfaces de capa 3: • Puerto enrutado: una interfaz de capa 3. • Interfaz virtual de switch (SVI): interfaz virtual para el routing entre VLAN. § Todos los switches Cisco Catalyst de capa 3 admiten protocolos de routing, pero varios modelos requieren un software mejorado para admitir características específicas de protocolos de routing.

§ Los switches Catalyst de la serie 2960 que ejecutan IOS 12.2(55) o posterior admiten el routing estático.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Funcionamiento y configuración del switching de capa 3 Routing entre VLAN con interfaces virtuales de switch § En los comienzos de las redes conmutadas, el switching era rápido y el routing lento.

Por eso, la parte de switching de capa 2 se extendió tanto como se pudo a la red. § Ahora el routing puede realizarse a la velocidad del cable, tanto en la capa de distribución como en la capa principal. § Los switches de distribución se configuran como gateways de capa 3 con interfaces virtuales de switch (SVI) o puertos enrutados.

§ Los puertos enrutados se suelen implementar entre la capa de distribución y la capa principal.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Funcionamiento y configuración del switching de capa 3 Routing entre VLAN con interfaces virtuales de switch (cont.) § Una SVI es una interfaz virtual configurada en un switch multicapa

• Para proporcionar un gateway a una VLAN a fin de poder enrutar el tráfico dentro o fuera de esa VLAN. • Para proporcionar conectividad IP de capa 3 al switch. • Para admitir las configuraciones de puente y protocolo de routing. § Ventajas de las SVI: • Son más rápidas que el router-on-a-stick.

• El routing no requiere enlaces externos del switch al router. • No se limita a un solo enlace. Se pueden utilizar EtherChannels de capa 2 para obtener más ancho de banda.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Funcionamiento y configuración del switching de capa 3 Routing entre VLAN con puertos enrutados § Un puerto enrutado es un puerto físico que funciona de manera similar a una interfaz en un router

• No está relacionado con una VLAN determinada. • No admite subinterfaces. § Los puertos enrutados principalmente se configuran entre los switches de las capas de núcleo y distribución. § Utilice el comando no switchport interface en el puerto apropiado para configurar un puerto enrutado.

> **⚠️ Nota: los switches de la serie Catalyst 2960 no admiten...**
> Nota: los switches de la serie Catalyst 2960 no admiten puertos enrutados.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Funcionamiento y configuración del switching de capa 3 Packet Tracer: configuración del switching de capa 3 y routing entre redes VLAN

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Solución de problemas de switching de capa 3 Problemas de configuración de switch de capa 3 § Para solucionar problemas de switching de capa 3, compruebe lo siguiente: • VLAN: verifique la configuración correcta.

• SVI: verifique la dirección IP correcta, la máscara de subred y el número de VLAN. • Routing: verifique que el routing estático o dinámico esté correctamente configurado y habilitado. • Hosts: verifique la dirección IP correcta, la máscara de subred y el gateway predeterminado.

© 2016 Cisco y/o sus filiales. Todos los derechos reservados. Información confidencial de Cisco. Solución de problemas de switching de capa 3 Ejemplo: solución de problemas de switching de capa 3 § Hay cuatro pasos para implementar una nueva VLAN

- Paso 1. Cree y nombre una nueva VLAN 500 en el switch del quinto

piso y en los switches de distribución.

- Paso 2. Agregue puertos a la VLAN 500 y asegúrese de que el

enlace troncal esté configurado entre los switches de distribución.

- Paso 3. Cree una interfaz SVI en los switches de distribución y

asegúrese de que las direcciones IP estén asignadas.

- Paso 4. Verificar la conectividad

§ El plan de solución de problemas consta de los siguientes pasos de control

- Paso 1. Verifique que se hayan creado todas las VLAN.
- Paso 2. Asegúrese de que los puertos estén en la VLAN adecuada y

de que el enlace troncal esté funcionando como se espera.

- Paso 3. Compruebe la configuración de la SVI.

---
