---
layout: default
title: "UD3 — HTTP · Temari Complet"
course_root: ".."
badge: "2n ASIX · Grau Superior · UD3 — HTTP"
prev_url: "../ut02/ut0201.html"
prev_label: "⬅️ 2.1 U2 DNS"
next_url: "../ut03/ut0301.html"
next_label: "3.1 U3 HTTP ➡️"
---

# 📘 UD3 — HTTP (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 U3 HTTP**](./ut0301.md)

---

# 3.1 U3 HTTP

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
