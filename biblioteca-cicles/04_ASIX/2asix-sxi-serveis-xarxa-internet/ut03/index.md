---
layout: default
title: "UT3 — Unit 3 - HTTP — Serveis de Xarxa i Internet | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT3 Completa"
prev_url: "../ut02/ut02actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT2"
next_url: "../ut03/ut0301.html"
next_label: "3.1 U3 HTTP ➡️"
---

# 📘 UT3 — Unit 3 - HTTP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**3.1 U3 HTTP**](#ut0301) (o [obrir en pàgina individual ➡️](./ut0301.md) )
> - [**3.2 Grups Treball**](#ut0302) (o [obrir en pàgina individual ➡️](./ut0302.md) )
> - [**3.3 U3 A3 Windows Group**](#ut0303) (o [obrir en pàgina individual ➡️](./ut0303.md) )
> - [**3.4 U3 P1**](#ut0304) (o [obrir en pàgina individual ➡️](./ut0304.md) )
> - [**3.5 U3 P2**](#ut0305) (o [obrir en pàgina individual ➡️](./ut0305.md) )
> - [**3.6 U3 P3**](#ut0306) (o [obrir en pàgina individual ➡️](./ut0306.md) )
> - [**3.7 U3 P4**](#ut0307) (o [obrir en pàgina individual ➡️](./ut0307.md) )
> - [**✍️ Activitats pràctiques UT3**](#ut03actividades) (o [obrir en pàgina individual ➡️](./ut03actividades.md) )

---

## 3.1 U3 HTTP

> **📌 🏷️ Apunt de la Unitat**
> #### **Resources**

> **📌 🏷️ Apunt de la Unitat**
> #### **Tasks**

> **📌 🏷️ Apunt de la Unitat**
> #### **Practices**

---

SXI / NSI - UNIT 3 - HTTP 2nd ASIX

2 ASIX - SXI Why do we need HTTP?

- Most common method in Internet to share information.
- One of the first Internet services designed.
- Offer the possibility of view information hosted in servers around the world in a friendly

manner.

- This information, known as Webpages, is usually formatted using markup language in

conjunction with a script language programming.

- Hypertext Transfer Protocol. Created in 1990 in the CERN (Conseil Européen pour la

Recherche Nucléaire) as a way of sharing scientific data around the world quickly and cheap.

2 ASIX - SXI What is HTTP?

- Hypertext is the content of the webpages. HTML (HyperText Markup

Language).

- World Wide Web (www) allow to visualize hypertext, multimedia and more

data. Also developed by CERN and standardized by W3C.

- There is a secure version of HTTP named HTTPS that allows to cypher the

information between client and server (if both allows).

- Transfer protocol is the set of rules through request are sent for accessing a

web and the consequent response.

2 ASIX - SXI HTTP protocol

- Application layer protocol designed to transfer information through the

network.

- Client-Server model.
- Stateless protocol and not-connection oriented. Packets are processed in

the client as individual elements. Each request, connection is opened and closed.

- Communications through port 80 and using TCP.

2 ASIX - SXI Concepts: URI. Uniform Resource Identifier

- Text string that identifies a network resource (text file, audio,

webpage, etc).

- Protocol://HostName/DirectoryName/FileName
- When accessing through URI, some values can be optionals.

2 ASIX - SXI Concepts: URL. Uniform Resource Locator

- Text string that identifies the location of a resource in Internet.
- Type of URI but with no optional values.
- If some value is omitted, default value is taken.

2 ASIX - SXI Concepts: URN. Uniform Resource Name

- Text string that identifies a resource but without specify where is

hosted.

2 ASIX - SXI HTTP protocol. How it works?

- Request-Response paradigm.
- Client sends a request to the server and server responses with a

status code with the result and, optionally, the info with it (HTML webpage, txt document, audio, etc).

- We know the type of info attached because of the specification

MIME.

2 ASIX - SXI HTTP protocol. How it works?

- After accessing through the web client (browser) to a URL, a DNS

query is carried using UDP protocol to resolve the destination IP.

- Once resolved, the protocol starts with a TCP connection to ask the

resource. This is called a handshake where origin and destination ports are negotiated. Once established, this connection is named Socket.

- Once the connection is established, the information swapping begins

and when is finished the connection will close.

2 ASIX - SXI HTTP protocol. How it works?

2 ASIX - SXI HTTP protocol. How it works?

- If we need more than a resource, all steps from 4 will be repeated.
- Nowadays, there is a parameter named http keep alive that allows to

keep the connection opened to transfer more than a single file in each connection.

- This has to be configured in the server.

2 ASIX - SXI HTTP Request

- Message formed by: Command, Header and Body
- Different command methods. Most used
- GET: used to request the server to send a web resource to the client.
- POST: used to send to the server data collected in the client (through a form,

for example).

- We also indicate in the same line the resource and the version of http

to be used.

2 ASIX - SXI HTTP Request

- Header: Expressed in parameter:value pairs. We have different

categories of headers with different type of information.

- Body: Usually, with get there is no body and with POST the body are

the values sent.

2 ASIX - SXI HTTP response

- Response message is formed by: status line, header and body.
- Status line has the protocol version and the code of the response.
- The code is formed by a integer number and its value says the type of

response the server has returned..

- 1XX: Informative messages. Not used (yet).
- 2XX: OK messages.
- 3XX: Redirection messages.
- 4XX: Client errors.
- 5XX: Server errors

2 ASIX - SXI HTTP response

2 ASIX - SXI HTTP response

- The header contains info useful for the client.
- The body contains the response itself (like the webpage)

2 ASIX - SXI Web Server

- Web service used the client-server model.

2 ASIX - SXI Web Server

2 ASIX - SXI Web Server

- Most important web servers are Apache and Internet Information

Server (IIS) de Microsoft.

- Others: Tomcat, nginx, AOLServer, SunOne, Zeus, etc.
- Apache: market leader. Open source.
- SO: All.
- Advantages: cheap, powerful, secure, robust, modular, etc.
- Disadvantages: Maintenance, not so easy as IIS

2 ASIX - SXI Web Server

- IIS: Internet Information Server
- SO: Windows Server
- Advantages: Easy management, powerful, robust, lots of monitoring tools, etc
- Disadvantages: Only Windows, not cheap.

2 ASIX - SXI Apache files

- After installing Apache, you will find the important directories and

files in /etc/apache2.

- apache2.conf is one of the most important files. Is where the

configuration directives are.

- Some of them are commented and others are not included.

2 ASIX - SXI apache2.conf

- ServerRoot: main directory where all the service, errors and log files are

stored.

- Timeout: limit time in seconds between client request and server response.
- KeepAlive: maintain TCP connections opened.
- ErrorLog: file where the log is stored.
- LogLevel: especifies the severity of events that will be logged.
- Include: used to include content from another files. i.e. if we include

ports.conf, it’s like we have include all the content from the file.

- LogFormat: defines the format in the log file.
- ErrorDocument: define personalized webpage for error messages.

2 ASIX - SXI Apache configuration

- By default, after installation, Apache is configured for working with a single

site.

- And the configuration file for this default site is located in /etc/apache2/sites

available/000-default.conf

- This file defines several directives. Most important are
- ServerName: FQDN used by visitors to visit web resources.
- ServerAdmin: webmaster mail.
- DocumentRoot: directory where resources are stored. By default /var/www/html/
- But usually, we need more than a site in a single server.
- This will be done using virtual hosts where each virtual host will represent

a site, with independent configuration.

2 ASIX - SXI Apache modules

- Apache includes a set of modules to increase the functionality of the

web service.

- These are called modules and some of them are included and

disabled by default.

- They are located in /etc/apache2/mods-available

2 ASIX - SXI Virtual Hosts

- If we need different sites (with different index) in a single server, we’d

need to create different directories per each site and then generate the files in each directory.

2 ASIX - SXI Virtual Hosts

- Using this, different sites will be stored in the same physical server

but giving the sensation of being in different servers.

- There are also virtual host based on IP. The server has different IP

addresses and each virtual host will attend request in a different IP.

- We need different network cards (one per IP) or assign virtual

interfaces to our network card.

2 ASIX - SXI Authentication and access control

- Consists in limit the access to the subdirectories included under the public

directory /var/www/html of the Apache Server.

- If the resource is requested, a emergent prompt will be shown to login.
- Very used at the beginning but very limited now. Passwords are encrypted

but when the users log in, the credentials are sent in plain text.

- One of the modules in charge of the authentication is auth_basic and it’s

necessary to enable it.

2 ASIX - SXI Authentication and access control

- On of the tools for management the module is htpasswd.
- Htpasswd –c <user/password file> <user> : This option creates the file with

the name specified in the first parameters and includes the user specified in the second parameter. Password will be set afterwards.

- Htpasswd -D<user/password file> <user> : This option deletes the user from

the file

- sudo a2enmod auth_basic
- sudo htpasswd –c credenciales.htpasswd sistemas

2 ASIX - SXI Authentication and access control

- Once the credentials are created (authentication), we must configure

the directory (or file) to be protected (access control).

- We need to modify the config file for the virtual host

(/etc/apache2/sites-available), including the Location directive.

2 ASIX - SXI Authentication and access control

- Where
- Location: subdirectory into the DocumentRoot we want to protect.
- AuthType: authentication type
- AuthName: Name for the prompt
- AuthUserFile: File where the credentials have been created
- Require can be used to indicate which users can access
- Require user valid-user à a logged user
- Require user <user1><user2><usern> à one of the users
- Remember ALWAYS to restart the server when a config file is modified.

2 ASIX - SXI Questions?

---

## 3.2 Grups Treball

GRUP 1 6 - Ana 8 - Mompo

#### 12- Sergi

GRUP 2 2 - Arce

#### 11- Vicent

#### 10- Raga

Quique

GRUP 3 1 - Alexis

#### 13- Abel

4 - Francisco

GRUP 4 7 - Gvidas 5 - Alex 9 - Attila

- Dani

---

## 3.3 U3 A3 Windows Group

Unit 3 – HTTP

U3 – A3

In groups, prepare a presentation of one of these topics about IIS

- How to install and configure SSL certificate and use it in IIS.
- How to create virtual hosts in IIS.

### 3. IIS AD Group permission – Setting it up in Windows Server

### 4. How to allow/restrict connections from an IP address to a website in IIS

on Windows Server.

Each group have to prepare a presentation to explain its topic. Each group can use as many tools as needed during the presentation.

The duration of the presentation will be 10 minutes as maximum.

Questions at the end can be asked to any member of the group, regardless the part of presentation he/she has presented.

The following rubric will be used to evaluate

EXCEL·LENT MOLT BÉ SUFICIENT INSUFICIENT

### 1. Presentació del

projecte El ponent es presenta, planteja el tema del projecte i les parts que desenvoluparà. Resumeix les diferents parts del treball. El ponent es presenta, però no desenvolupa completament la resta d’aspectes. No es presenten el ponent o el projecte, ni es fa un resum de les diferents parts del treball.

Es presenta de manera inadequada. 2.- Veu El volum i l’entonació són els adequats, la veu clara i la vocalització bona. El volum és prou alt bona part bona part del temps, la veu clara i la vocalització bona. Costa entendre alguns fragments, i el nivell és baix en la claredat o vocalització.

El volum és dèbil com per a ser escoltat per tota la classe. Molts fragments no s’entenen.

### 3. Postura del cos,

gestualitat i contacte visual Té bona postura i els moviments que fa són naturals. Realitza gestos per a facilitar la comprensió del discurs. Estableix contacte visual amb la resta de companys. En general té bona, realitza gestos per a facilitar la comprensió del discurs i estableix contacte visual amb la resta de companys.

En moltes ocasions els moviments que fa no són naturals, no realitza gestos o no en fa amb la finalitat adequada i no estableix contacte visual. Té una postura rígida. No usa gestos adequats. No estableix contacte visual amb la resta de l’alumnat durant la presentació.

Unit 3 – HTTP

### 4. Discurs i

vocabulari El seu discurs és molt clar, sense incorreccions gramaticals, amb un lèxic ric i s’ajusta al tema. Adequa el seu registre a la situació comunicativa. El seu discurs és correcte¡ i té cura de tots els aspectes. Utilitza paraules pròpies sense barbarismes. Parla sense abusar de repeticions i/o tics lingüístics.

Respecta el registre. El seu discurs presenta bastants incorreccions, però en general el llenguatge és clar i usa un lèxic adequat al tema. No respecta en tot moment el registre. Discurs pobre. Ple d’incorreccions. El lèxic no és l’adequat al tema. Usa un registre inapropiat.

### 5. Temps

La durada de la intervenció és l’adequada al contingut exposat.

La durada de la intervenció és quasi l’adequada al contingut exposat.

La durada de la intervenció és excessivament llarga o ha faltat temps. Ha acabat molt ràpidament o ha utilitzat molt més temps del previst.

### 6. Atenció i interés

Capta l’atenció en tot moment. Quasi sempre capta l’atenció. Quasi mai capta l’atenció. No capta l’atenció de l’alumnat.

### 7. Preparació prèvia

S’ho ha preparat molt bé. No necessita llegir el suport material que l’acompanya.

Bastant preparat. Algunes vegades llegeix l’esquema.

En alguns moments no llegeix, es nota que algunes parts les porta més preparades. No és capaç d’exposar sense llegir el paper.

### 8. Contingut

Entén el que explica. El contingut és ampli.

Quasi sempre entén el que explica. El contingut està treballat.

En moltes ocasions no entén el que explica. Apareixen contingutssobrers i inadequats o en falten. No entén el que explica. El contingut no està treballat

### 9. Material de suport

El material de suport (pòsters, murals, vídeos, etc.) és creatiu i útil per a la comprensió de l’exposició.

En general el material de suport acompleix els requisits i ajuda a la comprensió de l’exposició.

El material de suport no és creatiu,però ajuda a la comprensió de l’exposició.

Ni la creativitat del material de suport és l’adequada ni aconsegueix l’objectiu d’ajudar en la comprensió de l’exposició.

### 10. Domini del tema

(i resolució de dubtes) Respon les preguntes que li plantegen després de l’exposició, resol dubtes. Respon quasi totes les preguntes plantejades. Respon alguna pregunta, no domina suficientment el tema. No sap respondre les preguntes plantejades, no té domini del tema.

---

## 3.4 U3 P1

Unit 3 – HTTP

U3 – P1

Instructions

- Remember to copy both, questions and answers.
- Deliver the document in .pdf
- Send the document through the task in Aules.

Installing and configuring Apache

First of all, we need install apache using apt.

```bash
apt-get update
apt-get install apache2
```

We’ll use the following command to start/stop the apache service

/etc/init.d/apache2 {start|stop|restart|status}

We must check if the server is up and running using the following command

/etc/init.d/apache2 status

We can also use

```bash
service apache2 status
```

And something like this must be shown

Unit 3 – HTTP

You can also check if the server is up and running by accessing through the browser to

http://localhost

And the default apache webpage should be displayed.

Add a screenshot of the result of status command and a screenshot of the webpage working on your browser

Now, go to /etc/apache2 and explain with your own words what’s the content or purpose of each directory.

---

## 3.5 U3 P2

Unit 3 – HTTP

U3 – P2

Changing the default webpage

As we’ve studied, default webpage in our Apache server is a file named index.html or index.php in /var/www/html.

You must modify it and leave it like follows

```bash
<html>
    <head>
        <title>Main webpage</title>
    </head>
    <body>
        <h1>Main webpage</h1>
        <p>Your name and surname</p>
    </body>
```

</html>

You can check if everything is right by accessing through the browser to

http://localhost

Now, we are going to change the name to indice.html and try to access again

http://localhost

As you can see, now the webpage is not displayed because the server is configured to have the default webpage as index.html.

Modify the apache configuration (apache2.conf) to change the default webpage for this server. Remember to restart the server after apply the changes to the configuration file.

Unit 3 – HTTP

Changing the default error webpages

If we try to access to a non-existent webpage, a default 404 error webpage will be displayed.

As you know, we can personalize these error webpages by creating our own html webpage and modifying the apache2.conf.

Create a file in /var/www/html/ named miError404.html and add a your name and an image that represents “not found”.

Now we need to add the ErrorDocument directive into apache2.conf like follows.

ErrorDocument 404 /miError404.html

After restarting, this webpage must be displayed in every 404 error.

Create your own file for the error 500 and configure it in the server.

Installing new modules

As we’ve studied, Apache offers us the possibility of installing new modules to increase the functionality of the server. One of the most popular modules to install the php and mysql module that allow the server to work with php and mysql in conjunction.

To install the modules we’ll follow these steps

```bash
apt install php libapache2-mod-php
apt install php-cli
apt install php-cgi
apt install php-mysql
```

Once everything is successfully installed create a file named myphp.php file into the /var/www/html with the following content

```bash
<?php
phpinfo();
?>
```

And when accessing to http://localhost/myphp.php a table with information about the php version should be displayed.

---

## 3.6 U3 P3

Unit 3 – HTTP

U3 – P3

Configuring virtualhosts by name

In a server, we can host different webpages, not only one. In order to do that, we need to configure different virtual host.

We are going to need to host these 3 different webpages

- www.namesurname1.com
- www.namesurname2.com
- www.namesurname3.com

As we don’t have a DNS server working (nor Internet), we need to modify our local file /etc/hosts to map the domains to our server.

10.10.0.1 www.namesurname1.com www.namesurname2.com www.namesurname3.com

Create in the following paths the index.html of each webpage

- /var/www/html/name1/
- /var/www/html/name2/
- /var/www/html/name3/

And the content of each index file will be as follows

```bash
<html>
    <head>
        <title>Main webpage X</title>
    </head>
    <body>
        <h1>Main webpage X</h1>
        <p>Your name and surname X</p>
    </body>
```

</html> Where X is the number.

Unit 3 – HTTP

Then we need to create an individual config file for each webpage

- /etc/apache2/sites-available/name1.conf
- /etc/apache2/sites-available/name2.conf
- /etc/apache2/sites-available/name3.conf

And the content of each file will be as follows

<VirtualHost *:80> ServerName www.namesurname1.com DocumentRoot /var/www/html/name1 </VirtualHost>

Now we only need to enable the virtualhosts by using the a2ensite command.

a2ensite [nameOfConfigFile]

For example, for the first virtualhost we’ll use

a2ensite name1

Every time we change a conf file, we need to restart the server to apply the changes successfully.

a2ensite command is used to enable the virtualhosts. If we need to disable, we just need to use the command a2dissite.

Create two more virtual hosts as practicaNombreApellidos1.com and practicaNombreApellidos2.com

Create the users professor alumne1 and alumne2 and set them the passwords.

Create the folder privado into the practicaNombreApellidos1 site. This folder be accessed only by professor and alumne1.

---

## 3.7 U3 P4

IIS on WINDOWS SERVER 2016 Previously: – Virtual machine with Microsoft’s Windows Server 2016 operating system. – DNS Service installed – Primary Forward lookup zone created with a Host and an Alias, for your domain. How to Install IIS on Windows Server 2016 https://www.rootusers.com/how-to-install-iis-in-windows-server-2016/ Objectives

How to install the Internet Information Services (IIS) web server version 10.0 in Microsoft’s Windows Server 2016 operating system. If your server has the graphical user interface component installed you can also install IIS by following these steps.

- Open Server Manager, this can be found in the start menu. If it’s not there simply type

“Server Manager” with the start menu open and it should be found in the search.

- Click the “Add roles and features” text.
- On the “Before you begin” window, simply click the Next button.

- On the “Select installation type” window, leave “Role-based or feature-based installation”

selected and click Next.

- As we’re installing to our local machine, leave “Select a server from the server pool” with

the current machine selected and click Next. Alternatively you can select another server that you are managing from here, or a VHD.

- From the “Select server roles” window, check the box next to “Web Server (IIS)”. Doing this

may open up a new window advising that additional features are required, simply click the “Add Features” button to install these as well. Click Next back on the Select server roles menu once this is complete.

- We will not be installing any additional features at this stage, so simply click Next on the

“Select features” window.

- Click Next on the “Web Server Role (IIS)” window after reading the information provided.
- At this point on the “Select role services” window you can install additional services for IIS

if required. You don’t have to worry about this now as you can always come back and add more later, so just click Next for now to install the defaults.

10.Finally on the “Confirm installation selections” window , review the items that are to be installed and click Install when you’re ready to proceed with installing the IIS web server. No reboot should be required with a standard IIS installation, however if you remove the role a reboot will be needed.

11.Once the installation has succeeded, click the close button. At this point IIS should be running on port 80 by default with the firewall rule “World Wide Web Services (HTTP Traffic-In)” enabled in Windows firewall automatically. 12.We can perform a simple test by opening up a web browser and browsing to the server that we have installed IIS on. You should see the default IIS page.

As you can hopefully see, it’s quite a lot faster to use PowerShell to perform the same task.

How to create website on IIS in Windows Server 2016 Previously: Create your website on C:/inetpub/wwwroot/ In left side base expand the tree and select Sites option. Right click on sites and select Add Website… option like the following image.

This will open a popup to input new website details. Input the following details in pop-up box. • Site name: Name of website to be appeared in IIS listing. • Application pool: Select an application pool or keep is the default to create new application pool same name as sitename.

• Physical path: Enter the location of website pages on system. • Binding: • Type: Select protocol to configure (eg: http or https) •

```bash
IP address: Select ip address from drop list to set dedicated ip for site or keep is the
```

default to use shared ip. • Port: Enter port on which site will be accessible for users. • Host name: Enter the alias for the domain name: www.tecadmin.net • IMPORTANT: Physical path: Enter the location of website pages on system: C:/inetpub/wwwroot/ • Start Website immediately: keep this box checked to start site.

Step 4 – Verify Configuration To verify configuration you can simply access the site in a web browser. If your domain is not pointed to this server do host file entry and check.

---

## ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — U3 A1**
> Unit 3 – HTTP
>
> U3 – A1
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Using Wireshark and a browser, capture the request and the response of
>
> accessing to the following URL.
>
> - www.comillas.com
> - www.iana.org
> - www.google.com
> - www.google2.com
> - www.uca.es/myindex.html
>
> Use the “http” filter to catch the dialog between client and server and write the response codes for each webpage.
>
> ### 2. Complete the practice 1. The activity inside the practice will count to
>
> calculate the mark of this activity.

> **✍️ Activitat Pràctica 3.2 — U3 A2**
> Unit 3 – HTTP
>
> U3 – A2
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. In case we need to check the Apache logs. Where are these stored?
>
> Explain how we can configure it. What is the main problem of logging every event in the server? Where is it useful to do it?
>
> ### 2. Go to OpenWebinars and access to the “Apache Web Server” course
>
> (https://openwebinars.net/academia/portada/servidor-apache/). Go to section “Seguridad” and after watching the videos, write a “Tutorial” with text and images with at least the following points
>
> - What’s HTTPS?
> - Certificates in HTTPS
> - Configuring HTTPS

> **✍️ Activitat Pràctica 3.3 — Presentacions treball**
> juanraprofesor@gmail.com
