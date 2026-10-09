---
layout: default
title: "UT3 — Unit 3: Deploying a web server — Aplicacions Web | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 Resources: Reference Links ➡️"
---

# 📘 UT3 — Unit 3: Deploying a web server (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 Resources: Reference Links**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 Taller AWS-ASIX2023**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 Resources: Reference Links

> **🔗 Recurs Web: EN Video - Cpanel Tutorial - Cpanel help for beginners**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=QgmsoIGAeiM) ↗️**](https://www.youtube.com/watch?v=QgmsoIGAeiM)

> **🔗 Recurs Web: EN Video - cPanel beginner tutorial 2 - introduction to cPanel**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=yM733VRy87s) ↗️**](https://www.youtube.com/watch?v=yM733VRy87s)

---

04 - Recursos: Referencias

Apache - [http://httpd.apache.org](http://httpd.apache.org)
Internet Information Services -[http://www.iis.net](http://www.iis.net)
Lighttpd - [http://www.lighttpd.net](http://www.lighttpd.net)
nginx - [http://nginx.org](http://nginx.org)
Apache Tomcat - [http://tomcat.apache.org](http://tomcat.apache.org)
cPanel - [https://cpanel.net/](https://cpanel.net/)
Fantastico - [https://netenberg.com/fantastico.php](https://netenberg.com/fantastico.php)
ISPConfig - [http://www.ispconfig.org/](http://www.ispconfig.org/)
1&1 - [http://www.1and1.es/](http://www.1and1.es/)
Aruba - [http://hosting.aruba.it/index.asp?Lang=ES](http://hosting.aruba.it/index.asp?Lang=ES)
OVH - [http://www.ovh.es/](http://www.ovh.es/)
XAMPP - [http://www.apachefriends.org/es/xampp.html](http://www.apachefriends.org/es/xampp.html)
Bitnami- [http://bitnami.com](http://bitnami.com)

---

## 3.2 Taller AWS-ASIX2023

Taller AWS: WebServer 1R ASIX - 2023

Infraestructura TI vs AWS

Infraestructura https://aws.amazon.com/es/about-aws/global-infrastructure/?hp=tile&tile=map Administrar AWS •Consola (web) •AWS CLI (terminal) •SDK Características •Elástica y escalable •Tolerancia a errores •Alta disponibilidad

EC2 Elastic Compute Cloud Imagen de Amazon Machine (AMI) proporciona la información necesaria para lanzar una instancia EC2

- Capacidad para aumentar o reducir

fácilmente la cantidad de servidores y sus recursos Elastic

- Alojar aplicaciones en ejecución o

procesar datos CPU + RAM Compute

- Las instancias EC2 ejecutadas se alojan

en la nube Cloud

AWS Learner Lab SSH Keys (PEM + PPK) AWS Console (GUI web) EC2

AWS Web Console

Servicio SSH Accessing EC2 Instances When launching EC2 instances in the default us-east-1 Region in this environment, choose the option to use the existing key pair named vockey at the time of launch. Then: Choose the AWS Details link above these instructions. ◦ If you are using a Windows desktop or laptop, choose the Download PPK button and save the labsuser.ppk file. You can use this file to connect via SSH to a Linux EC2 instance or Windows EC2 instance, typically using a tool such as PuTTY.

◦ If you are using a MacOS desktop or laptop, choose the Download PEM button and save the labsuser.pem file. You can use this file to connect via SSH to a Linux EC2 instance or Windows EC2 instance, typically using a terminal window. ◦ To connect using SSH to a Linux instance  SSH access to an EC2 Instance you launch  The steps below describe how to use the SSH key to connect to your instance.

 Tip: Assuming you launched the instance with the vockey key pair, and that you have opened TCP port 22 in the instance's security group, you can also SSH to an EC2 instance by using the terminal to the side of these instructions. The terminal already has the key pair available to it. Simply enter the command  ssh -i ~/.ssh/labsuser.pem ec2-user@<public-ip> where <public-ip> is the actual IPv4 public address of the instance.

Crear instancia EC2 + IP elástica 1. Red y Seguridad – Direcciones IP Elásticas – Asignar la dirección IP Elástica – Asignar ◦ Name: IP-WebServer-ASIX 2. Instancias - Lanzar una instancia ◦ Name: WebServer-ASIX ◦ Amazon Machine Image: Ubuntu – Ubuntu Server 22.04 LTS -64 bits x86 ◦ Tipo de instancia: t2.micro ◦ Par de claves: vockey ◦ Configuraciones de red – Crear grupo de seguridad – Firewall  Permitir SSH desde Cualquier lugar  Permitir HTTPS desde Internet  Permitir HTTP desde Internet ◦ Configurar almacenamiento  1x 8GiB gp2 3.

Instancias – Estado de la instancia – Detener 4. Panel de EC2 – Direcciones IP Elásticas – Seleccionar IP – Acciones – Asociar la dirección IP 4 Elástica  Instancias – Elegir WebServer-ASIX 5. Instancias – Estado de la instancia – Iniciar 6. Credenciales SSH – AWS Details – Descargar PEM ◦

```html
chmod 400 labsuser.pem
```

◦ ssh -i labsuser.pem ubuntu@<public-ip> 7. Instalar servicio web ◦

```html
sudo apt update –y
```

◦

```html
sudo apt install apache2
```

◦

```html
sudo apt install unzip
```

◦

```html
sudo apt install mc
```

◦

```html
sudo systemctl enable apache2
```

8. Copiar información ◦ scp -i myAmazonKey.pem filetoupload ubuntu@<public-ip>:~/. ◦

```html
sudo cp -R /home/ubuntu/filetoupload /var/www/html
```

◦

```html
sudo chown -R www-data:www-data /var/www/html
```

44.215.86.116 IP Elástica Instancia EC2 Asociar IP Conectar SSH Instalación Copiar Info Preparar màquina en el Cloud Gestionar e instalar servicios https://html5up.net/paradigm-shift/download

---

## ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — 03.01 - Activity: Initial Concepts**
> Una empresa necesita implantar un servidor web y un sistema gestor de base de datos para dar soporte a un software específico quecontrole y dinamice los diferentes grupos de trabajo con los que cuenta. Tras consultar con un Técnico en Sistemas Microinformáticos y Redes, se plantean tres opciones diferentes:
>
> - Realizar una instalación sobre Windows Server, dónde el servidor web sería IIS y el gestor de base de datos SQLServer.
> - Realizar una instalación sobre Ubuntu Server, dónde el servidor web sería Apache y el gestor de base de datos MySQL.
> - Realizar una instalación con una aplicación de instalación integrada llamado XAMPP sobre Windows que incluye PHP, Apache y MySQL.
>
> 1. ¿Qué es un servidor web?
>
> 2. ¿Qué servidor web podemos instalar en un sistema operativo libre y en uno propietario?
>
> 3. ¿Qué es Apache?
>
> 4. ¿Qué es IIS?
>
> 5. ¿Cómo se instala un servidor web?
>
> 6. ¿Qué es un sistema gestor de bases de datos?
>
> 7. ¿Cómo se instala un sistema gestor de bases de datos?
>
> 8. ¿Qué es MySQL?
>
> 9. ¿Qué son las aplicaciones de instalación integrada?
>
> 10. ¿Qué ventajas tiene utilizar aplicaciones de instalación integrada?

> **✍️ Activitat Pràctica 3.2 — 03.02 - Activity: Glossary**
> Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: Servlet, Apache, IIS, Tomcat, Nginx, Lighttpd, GNU GPL, Licencia Apache, Licencia BSD, cPanel, Fantastico, ISPConfig, XAMPP, Bitnami.

> **✍️ Activitat Pràctica 3.3 — 03.03 - Activity: Review Content**
> 1. Realiza una clasificación de servidores web en función del tipo de licencia.
> 2. Enumera y explica las principales funciones de las aplicaciones de gestión de Hosting.
> 3. Expón la funcionalidad y principales componentes del paquete XAMPP

> **✍️ Activitat Pràctica 3.4 — 03.04 - Activity: Press Article**
> ## Bitnami facilita la instalación de programas a la pyme
>
> Publicada el 14-08-2009, por C.R. Cabello
>
> http://www.tecnologiapyme.com/software/bitnami-facilita-la-instalacion-de-programas-a-la-pyme
>
> Muchas pymes carecen de servicios técnicos en su plantilla y sólo acuden a ellos en caso de que algo deje de funcionar. Cuando proponemos la instalación de algún software de código libre muchas desestiman su adopción porque consideran complicado el proceso. Afortunadamente existen proyectos como Bitnami que facilita la instalación de programas a las pymes, sobre todo aquellos de código abierto.
>
> Bitnami facilita la instalación de programas ya sea en nuestros sistema operativo, Windows, Mac o Linux pero también nos ofrece instaladores para realizarlo en entornos virtuales, en este caso para VMWare o Virtual Box, o en la nube integrada dentro de los servicios de Amazon EC2 en un futuro próximo. Por lo tanto cumple la función de realizar la instalación en entorno real, virtual o en la nube.
>
> Los principales programas de código libre tienen su instalador para poder ejecutarlo e comenzar a utilizarlo sin problemas. Como muchos de estos productos están basados en plataformas de Apache, MySQL y PHP también nos facilitan instaladores para estos programas que serán necesarios para poder instalar nuestro CRM o nuestro Wiki para mejorar y optimizar la productividad de nuestra empresa.
>
> [...]
>
> De todas formas lo más interesante me parece quizás las opciones para instalar en entornos virtualizados con VMWare o en entornos en la nube de Amazon para un futuro próximo. De todas formas podríamos instalar una aplicación de este tipo en cualquier alojamiento web que tuviéramos contratados ya que por lo general tienen ya instalados el soporte que necesitan para funcionar, lo cual nos permitiría llevarnos nuestro CRM o Wiki a la nube sin ningún problema.
>
> Pero de todas formas este tipo de instaladores suele gustar más a usuarios acostumbrados a instalar sofware bajo entornos Windows que es bastante sencillo y simplemente tienes que elegir determinadas opciones. Por lo tanto es adecuado para pymes sin servicio técnico que quieran probar este tipo de sofware sin complicarse demasiado en las instalaciones.
>
> 1. ¿Crees que Bitnami facilita la instalación de programas? ¿Por qué?
> 2. ¿Qué ventajas tiene utilizar Bitnami?
> 3. Busca información sobre Bitnami.

> **✍️ Activitat Pràctica 3.5 — 03.05 - Practice: Installing Wordpress over XAMPP *****
> Instala el paquete integrado XAMPP y posteriormente, sobre dicho Stack agrega el paquete de Wordpress.

> **✍️ Activitat Pràctica 3.6 — 03.06 - Practice: Ubuntu Server LAMP + Wordpress**
> Realiza la instalación de Wordpress sobre un servidor Ubuntu a través de comandos. Utiliza como guía los siguientes recursos
>
> - [How to Install WordPress on Linux Distributions (cloudways.com)](https://www.cloudways.com/blog/install-wordpress-on-linux/)
> - [https://linuxconfig.org/how-to-install-wordpress-on-debian-9-stretch-linux](https://linuxconfig.org/how-to-install-wordpress-on-debian-9-stretch-linux)
> - [https://www.addictivetips.com/ubuntu-linux-tips/install-wordpress-on-ubuntu-server/](https://www.addictivetips.com/ubuntu-linux-tips/install-wordpress-on-ubuntu-server/)
> - [https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-16-04)
> - [https://linuxconfig.org/how-to-install-a-lamp-server-on-debian-9-stretch-linux](https://linuxconfig.org/how-to-install-a-lamp-server-on-debian-9-stretch-linux)
> - [https://www.linode.com/docs/web-servers/lamp/install-lamp-stack-on-ubuntu-18-04/](https://www.linode.com/docs/web-servers/lamp/install-lamp-stack-on-ubuntu-18-04/)

> **✍️ Activitat Pràctica 3.7 — AWS Lab 3 EC2 *****
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 3.8 — AWS Lab 4 S3 *****
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 3.9 — AWS Persistent Lab: Web Server Bitnami WP *****
> [WordPress Installation on the AWS Ubuntu 20.04 Instanc](https://engr-syedusmanahmad.medium.com/wordpress-installation-on-the-aws-ubuntu-20-04-instance-5d9eeca96e6c)e

> **✍️ Activitat Pràctica 3.10 — Validation Exam AWS**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
