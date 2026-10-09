---
layout: default
title: "UD2 — Assignació Dinàmica d'Adreces (DHCP) · Temari Complet"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UD2 — Assignació Dinàmica d'Adreces (DHCP)"
prev_url: "../ut01/ut0101.html"
prev_label: "⬅️ 1.1 Repàs Interconnexió de Xarxes"
next_url: "../ut02/ut0201.html"
next_label: "2.1 presentació DHCP ➡️"
---

# 📘 UD2 — Assignació Dinàmica d'Adreces (DHCP) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 presentació DHCP**](./ut0201.md)
- [**2.2 Presentació DHCP. Visió general**](./ut0202.md)
- [**2.3 Servei DHCP**](./ut0203.md)
- [**2.4 Servidor DHCP**](./ut0204.md)

---

# 2.1 presentació DHCP

> **🔗 Recurs Web: Carpeta Drive: U1-DHCP**
> [**🌐 Obrir recurs extern (https://drive.google.com/drive/folders/1wjOGrwCN9aAbw9nrx2x_OVahJH687otP?usp=sharing) ↗️**](https://drive.google.com/drive/folders/1wjOGrwCN9aAbw9nrx2x_OVahJH687otP?usp=sharing)

> **🔗 Recurs Web: 3.0-Introduccion-DHCP**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/0B4LlvGqxqWsOaGpjRlZQbTI4U0U/view?usp=sharing) ↗️**](https://drive.google.com/file/d/0B4LlvGqxqWsOaGpjRlZQbTI4U0U/view?usp=sharing)

> **🔗 Recurs Web: 3.1-dhcp3-server-options**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/0B4LlvGqxqWsOcFVPbGcxWHQ3Qlk/view?usp=sharing) ↗️**](https://drive.google.com/file/d/0B4LlvGqxqWsOcFVPbGcxWHQ3Qlk/view?usp=sharing)

---

presentació DHCP

SINTESIS DHCP 2º SMR SERVICIOS EN RED Tema 3: Servicio DHCP

DHCP Servicio TCP/IP que asigna direcciones IP de forma dinámica a los equipos conectados a una red. RFC2131 v4 Cliente DHCP RFC2132 v4 Servidor DHCP RFC3315 v6 Servicio DHCP

ASIGNACION IP Los valores TCP/IP han de introducirse en cada equipo previamente, uno a uno. Existe posibilidad de equivocación y tener que volver a reconfigurar los valores TCP/IP. Habrá que dedicar más tiempo (configuración manual) y podrá tener más fallos la red.

Debe cambiarse la IP de forma manual cada vez que se reubica un equipo. MANUAL

ASIGNACION IP Los valores TCP/IP son asignados cuando arranca el cliente sin necesidad de intervención del administrador. Se centraliza la información de manera que una vez configurado y probado, no puede haber equivocaciones. Se ahorra tiempo y esfuerzo de administración.

En una red permite la movilidad de los equipos entre sus diferentes subredes. Se evitan colisiones de dirs IP y se optimiza el consumo de éstas. AUTOMATICA O DINAMICA

Elementos del servicio Cliente (puerto 68 UDP) Servidor (puerto 67 UDP) El servidor DHCP permite configurar de forma automática: Dirección IP Máscara subred Tiempo de concesión (lease time) Tiempo de renovación (renewal time) Tiempo de reconexión (rebinding time)

Elementos del servicio (2) De forma opcional puede configurar: Puerta enlace Servidores DNS Nombre del dominio DNS En redes Windows (Tipo de nodo WINS y servidor WINS).

Tipos de asignación Dinámica e ilimitada. Asigna una IP de forma permanente a una máquina cliente la primera vez que hace la solicitud al servidor DHCP y hasta que el cliente la libera. Se usa cuando el nº clientes no varia demasiado. Dinámica y limitada: se cede una IP libre de manera temporal, como si se racionase su uso.

Tiempo: 10 a 15 minutos. Es habitual en compañías proveedoras de acceso a internet. Dinámica con reserva: asigna la misma IP a un ordenador concreto, en función de su MAC. Ej: servidores.

PROTOCOLO DHCP: Función Este protocolo regula la manera como un cliente DHCP obtiene una configuración IP válida y el orden en qué debe hacerlo. Cada red debe tener un servidor DHCP configurado y activo para atender las solicitudes de los clientes, ofreciéndoles una IP válida durante un tiempo determinado (tiempo de concesión).

Cuando el cliente libera esa conexión, se lo comunica al servidor y la IP quedará libre para cualquier otro dispositivo que la necesite.

PROTOCOLO DHCP: Elementos Cliente configurado de forma automática. Servidor configurado correctamente. Escenario: CLIENTE UDP 68 SERVIDOR UDP 67 1 DHCP Discover 2 DHCP Offer 3 DHCP Request 7 DHCP Release 4 DHCP ACK 5 DHCP Renew 6 DHCP ACK

PROTOCOLO DHCP: Ordenes CLIENTE DHCP DISCOVER DHCP REQUEST DHCP DECLINE DHCP RELEASE DHCP INFORM DHCP RENEW SERVER DHCP OFFER DHCP ACK DHCP NAK

PROTOCOLO DHCP: Negociación Negociación = orden en el que se envían los mensajes anteriores y su contenido

- Hay un servidor DHCP configurado y esperando a recibir peticiones.

#### 2) Cuando un cliente DHCP se conecta a la red, envía un mensaje de broadcast

#### 3) Todos los servidores DHCP que han recibido la solicitud responden al cliente

proponiéndole una IP.

- El cliente acepta una de ellas y se lo comunica al servidor elegido.

#### 5) El servidor le contesta con un mensaje que incluye la MAC de cli, la IP y máscara

de subred asignadas, la IP del servidor y el período de validez de la dirección IP.

#### 6) Esta información permanece asociada al cliente mientras éste no desactive su

interfaz de red o finalice el plazo del ”contrato”. NOTA: El plazo del contrato o alquiler es el tiempo en que un cliente DHCP mantiene como propios los datos que le asignó un servidor.

PROTOCOLO DHCP: Negociación

#### 7) Una vez vencido el plazo del contrato, el servidor puede

- renovar la información del cliente (la dir. IP), y asignarle otra nueva
- ampliar el plazo (manteniendo la misma información).

#### 8) Antes de que sea consumido el período de validez, el cliente envía una

solicitud de renovación al servidor, que será atendida o no.

#### 9) Si llega a expirar completamente el tiempo de validez, tiene que pedir

una nueva. NOTA: El cliente sabe que una respuesta es para él, por la MAC que lleva incorporada el mensaje del servidor y le contesta.

DHCP: Proceso de asignación de IPs Es necesario conocer dos conceptos: Direcciones disponibles: rangos de direcciones a asignar a los clientes y que está configurado en el servidor DHCP. Intervalo de exclusión: Algunas direcciones que no se desea que sean asignadas a clientes, ejemplo: direcciones de servidores, que son estáticas.

Se van concediendo direcciones del rango que tiene configurado hasta que se agotan, si alguna es liberada, pasa a estar disponible.

CLIENTE DHCP Función → obtener IP automáticamente Negociación de órdenes → Ver mensajes anteriores Configuración del cliente → Windows / Ubuntu

- Cambiar las propiedades de la interfaz: Manual

por Configurar de forma automática (DHCP).

- Desactivar y activar el interfaz para que nos

concedan una nueva dirección.

SERVIDOR DHCP Definición: proporciona un mecanismo rápido de configuración de red para el cliente. Función: optimizar proceso asignación. Estructura del archivo de configuración Archivo de texto que recoge una serie de entradas (# comentarios) compuestas por Parametros y declaraciones.

Ej: [option] <nombre_parámetro> [valores]; Dispositivos que ofrecen el servicio DHCP (routers o servidores) Problemas del servicio DHCP (más de un servidor DHCP activo, falten direcciones, etc.)

---

# 2.2 Presentació DHCP. Visió general

De Cristian i Robert

### 3. SERVICIO

DHCP 1. ¿Qué es el servicio DHCP? 2. ¿Se puede trabajar sin el servicio DHCP? 2.1. Características generales del servicio DHCP. 2.2. Funcionamiento del protocolo DHCP. 2.3. Conﬁguración del cliente DHCP. 2.4. Autoconﬁguración de red sin DHCP. 2.5. Conﬁguración del servidor DHCP.

Cristian Castelblanque Roberto Brines 2º SMX-B

¿Qué es el servicio DHCP? El DHCP, protocolo que permite obtener a un equipo/cliente una IP de forma dinámica.

¿Se puede trabajar sin el servicio DHCP? Sí, con la configuración manual

Características generales del servicio DHCP. -Asignación automática e ilimitada. -Asignación dinámica y limitada. -Asignación manual o estática con reserva.

Funcionamiento del protocolo DHCP En una comunicación DHCP, Se dan 4 fases.

Conﬁguración del Cliente DHCP WINDOWS 7

UBUNTU

Autoconﬁguración de red sin DHCP APIPA, permite configuración dinámica de IP de enlace local

Conﬁguración del Servidor DHCP

---

# 2.3 Servei DHCP

SINTESIS DHCP 2º SMR SERVICIOS EN RED Tema 3: Servicio DHCP

DHCP Servicio TCP/IP que asigna direcciones IP de forma dinámica a los equipos conectados a una red. RFC2131 v4 Cliente DHCP RFC2132 v4 Servidor DHCP RFC3315 v6 Servicio DHCP

ASIGNACION IP Los valores TCP/IP han de introducirse en cada equipo previamente, uno a uno. Existe posibilidad de equivocación y tener que volver a reconfigurar los valores TCP/IP. Habrá que dedicar más tiempo (configuración manual) y podrá tener más fallos la red.

Debe cambiarse la IP de forma manual cada vez que se reubica un equipo. MANUAL

ASIGNACION IP Los valores TCP/IP son asignados cuando arranca el cliente sin necesidad de intervención del administrador. Se centraliza la información de manera que una vez configurado y probado, no puede haber equivocaciones. Se ahorra tiempo y esfuerzo de administración.

En una red permite la movilidad de los equipos entre sus diferentes subredes. Se evitan colisiones de dirs IP y se optimiza el consumo de éstas. AUTOMATICA O DINAMICA

Elementos del servicio Cliente (puerto 68 UDP) Servidor (puerto 67 UDP) El servidor DHCP permite configurar de forma automática: Dirección IP Máscara subred Tiempo de concesión (lease time) Tiempo de renovación (renewal time) Tiempo de reconexión (rebinding time)

Elementos del servicio (2) De forma opcional puede configurar: Puerta enlace Servidores DNS Nombre del dominio DNS En redes Windows (Tipo de nodo WINS y servidor WINS).

Tipos de asignación Dinámica e ilimitada. Asigna una IP de forma permanente a una máquina cliente la primera vez que hace la solicitud al servidor DHCP y hasta que el cliente la libera. Se usa cuando el nº clientes no varia demasiado. Dinámica y limitada: se cede una IP libre de manera temporal, como si se racionase su uso.

Tiempo: 10 a 15 minutos. Es habitual en compañías proveedoras de acceso a internet. Dinámica con reserva: asigna la misma IP a un ordenador concreto, en función de su MAC. Ej: servidores.

PROTOCOLO DHCP: Función Este protocolo regula la manera como un cliente DHCP obtiene una configuración IP válida y el orden en qué debe hacerlo. Cada red debe tener un servidor DHCP configurado y activo para atender las solicitudes de los clientes, ofreciéndoles una IP válida durante un tiempo determinado (tiempo de concesión).

Cuando el cliente libera esa conexión, se lo comunica al servidor y la IP quedará libre para cualquier otro dispositivo que la necesite.

PROTOCOLO DHCP: Elementos Cliente configurado de forma automática. Servidor configurado correctamente. Escenario: CLIENTE UDP 68 SERVIDOR UDP 67 1 DHCP Discover 2 DHCP Offer 3 DHCP Request 7 DHCP Release 4 DHCP ACK 5 DHCP Renew 6 DHCP ACK

PROTOCOLO DHCP: Ordenes CLIENTE DHCP DISCOVER DHCP REQUEST DHCP DECLINE DHCP RELEASE DHCP INFORM DHCP RENEW SERVER DHCP OFFER DHCP ACK DHCP NAK

PROTOCOLO DHCP: Negociación Negociación = orden en el que se envían los mensajes anteriores y su contenido

- Hay un servidor DHCP configurado y esperando a recibir peticiones.

#### 2) Cuando un cliente DHCP se conecta a la red, envía un mensaje de broadcast

#### 3) Todos los servidores DHCP que han recibido la solicitud responden al cliente

proponiéndole una IP.

- El cliente acepta una de ellas y se lo comunica al servidor elegido.

#### 5) El servidor le contesta con un mensaje que incluye la MAC de cli, la IP y máscara

de subred asignadas, la IP del servidor y el período de validez de la dirección IP.

#### 6) Esta información permanece asociada al cliente mientras éste no desactive su

interfaz de red o finalice el plazo del ”contrato”. NOTA: El plazo del contrato o alquiler es el tiempo en que un cliente DHCP mantiene como propios los datos que le asignó un servidor.

PROTOCOLO DHCP: Negociación

#### 7) Una vez vencido el plazo del contrato, el servidor puede

- renovar la información del cliente (la dir. IP), y asignarle otra nueva
- ampliar el plazo (manteniendo la misma información).

#### 8) Antes de que sea consumido el período de validez, el cliente envía una

solicitud de renovación al servidor, que será atendida o no.

#### 9) Si llega a expirar completamente el tiempo de validez, tiene que pedir

una nueva. NOTA: El cliente sabe que una respuesta es para él, por la MAC que lleva incorporada el mensaje del servidor y le contesta.

DHCP: Proceso de asignación de IPs Es necesario conocer dos conceptos: Direcciones disponibles: rangos de direcciones a asignar a los clientes y que está configurado en el servidor DHCP. Intervalo de exclusión: Algunas direcciones que no se desea que sean asignadas a clientes, ejemplo: direcciones de servidores, que son estáticas.

Se van concediendo direcciones del rango que tiene configurado hasta que se agotan, si alguna es liberada, pasa a estar disponible.

CLIENTE DHCP Función → obtener IP automáticamente Negociación de órdenes → Ver mensajes anteriores Configuración del cliente → Windows / Ubuntu

- Cambiar las propiedades de la interfaz: Manual

por Configurar de forma automática (DHCP).

- Desactivar y activar el interfaz para que nos

concedan una nueva dirección.

SERVIDOR DHCP Definición: proporciona un mecanismo rápido de configuración de red para el cliente. Función: optimizar proceso asignación. Estructura del archivo de configuración Archivo de texto que recoge una serie de entradas (# comentarios) compuestas por Parametros y declaraciones.

Ej: [option] <nombre_parámetro> [valores]; Dispositivos que ofrecen el servicio DHCP (routers o servidores) Problemas del servicio DHCP (más de un servidor DHCP activo, falten direcciones, etc.)

---

# 2.4 Servidor DHCP

Instalación del servidor DHCP ●Podemos hacerlo desde la línea de comandos con derechos de administrador: # apt­get install dhcp3­server ●o bien desde Synaptic buscando dhcp3­server

Instalación del servidor DHCP ●Tras la instalación obtendremos un mensaje de error similar al siguiente debido a que aún no hemos realizado la configuración pertinente del servidor.

Configuración del servidor DHCP ●El servidor DHCP deberá saber: – Rangos de direcciones IP que puede conceder – Parámetros adicionales (puerta de enlace, servidores DNS, etc...). ●Una configuración TCP/IP mínima debe contener: – la dirección IP – la máscara de subred

Configuración del servidor DHCP ●Otros parámetros: – Dirección IP – Máscara de subred – Dirección de difusión o broadcast (192.168.0.255) – Puerta de enlace – Servidores DNS – etc...

Configuración del servidor DHCP ●Condiciones de concesión: – Tiempo de cesión por defecto – Tiempo de cesión máximo – Otros parametros más. ●Esta información compone la configuración del servidor DHCP.

Configuración del servidor DHCP ●Archivo de configuración del servidor DHCP /etc/dhcp/dhcpd.conf ●Consta de: – Parte principal (valores por defecto) ●especifica los parámetros generales que definen la concesión y los parámetros adicionales que se proporcionarán al cliente.

Secciones (concretan a la principal) ●Subnet – Especifican rangos de direcciones IPs que serán cedidas a los clientes que lo soliciten. ●Host – Especificaciones concretas de equipos.

Configuración del servidor DHCP ●Notación IP – Subred 192.168.0.0/24 es equivalente a: ●DS: 192.168.0.0 ●MS: 255.255.255.0 (24 bits a 1) ●Sección Subnet ejemplo: // Rango de cesión subnet 192.168.0.0 netmask 255.255.255.0 { range 192.168.0.60 192.168.0.90; } // Rango de cesión y parámetros adicionales subnet 192.168.0.0 netmask 255.255.255.0 { option routers 192.168.0.254; option domain­name­servers 80.58.0.33, 80.58.32.97; range 192.168.0.60 192.168.0.90; }

Configuración del servidor DHCP ●Configuración concreta a cliente concreto identificándolo por la dirección MAC de su tarjeta de red. – La dirección MAC (MAC address) es un número único, formado por 6 octetos, grabado en la memoria ROM de las tarjetas de red ethernet fijado de fábrica.

Se escriben los 6 octetos en hexadecimal separados por dos puntos ':'. ●Los tres primeros octetos indican el fabricante y los tres siguientes el número de serie en fabricación.

Configuración del servidor DHCP ●Comandos: – ifconfig, ipconfig, winipconfig

Configuración del servidor DHCP ●Sección Host ejemplo: // Crear una reserva de dirección IP host Profesor5 { hardware ethernet 00:0c:29:c9:46:80; fixed­address 192.168.0.50; option routers 192.168.0.213; option domain.name "iesromerovargas.net"; option netbios­name­servers 192.168.0.250; }

// Ejemplo de archivo dhcp.conf # Sample configuration file for ISC dhcpd for Debian # $Id: dhcpd.conf,v 1.4.2.2/10 03:50:33 peloy Exp $ # Opciones de cliente y de dhcp aplicables por defecto a todas las secciones # Estas opciones pueden ser sobreescritas por otras en cada sección option domain­name­servers 195.53.123.57; # DNS para los clientes (atenea) option domain­name "iesromerovargas.net"; # Nombre de dominio para los clientes option subnet­mask 255.255.255.0; # Máscara por defecto para los clientes default­lease­time 600; # Tiempo en segundos del 'alquiler' max­lease­time 7200; # Máximo tiempo en segundos que durará la concesión # Especificación de un rango subnet 192.168.0.0 netmask 255.255.255.0 { range 192.168.0.60 192.168.0.80; # Rango de la 60 a la 80 inclusive option broadcast­address 192.168.0.255; # Dirección de difusión option routers 192.168.0.254; # Puerta de enlace option domain­name­servers 80.58.0.33; # DNS (ej: el de telefónica) default­lease­time 6000; # Tiempo en segundos que durará la concesión } # Configuración particular para un equipo host aula5pc6 { hardware ethernet 00:0c:29:1e:88:1d; # Dirección MAC en cuestión fixed­address 192.168.0.66; # IP a asignar (siempre la misma) }

Arranque y parada manual del servidor DHCP ●El servidor DHCP, al igual que todos los servicios en Debian, dispone de un script de arranque y parada en la carpeta /etc/init.d. – Arrancar el servidor DHCP

```bash
sudo /etc/init.d/dhcp3­server start
```

Parar el servidor DHCP

```bash
sudo /etc/init.d/dhcp3­server stop
```

Reiniciar el servidor DHCP

```bash
sudo /etc/init.d/dhcp­server restart
```

---
