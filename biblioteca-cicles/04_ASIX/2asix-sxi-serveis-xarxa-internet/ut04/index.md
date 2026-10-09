---
layout: default
title: "UT4 — Unit 4 - FTP — Serveis de Xarxa i Internet | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT4 Completa"
prev_url: "../ut03/ut03actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT3"
next_url: "../ut04/ut0401.html"
next_label: "4.1 U4 FTP ➡️"
---

# 📘 UT4 — Unit 4 - FTP (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**4.1 U4 FTP**](#ut0401) (o [obrir en pàgina individual ➡️](./ut0401.md) )
> - [**4.2 Grups**](#ut0402) (o [obrir en pàgina individual ➡️](./ut0402.md) )
> - [**4.3 U4 P1**](#ut0403) (o [obrir en pàgina individual ➡️](./ut0403.md) )
> - [**4.4 U4 P2**](#ut0404) (o [obrir en pàgina individual ➡️](./ut0404.md) )
> - [**✍️ Activitats pràctiques UT4**](#ut04actividades) (o [obrir en pàgina individual ➡️](./ut04actividades.md) )

---

## 4.1 U4 FTP

> **📌 🏷️ Apunt de la Unitat**
> #### **Resources**

> **📌 🏷️ Apunt de la Unitat**
> #### **Tasks**

> **📌 🏷️ Apunt de la Unitat**
> #### **Practices**

---

SXI / NSI - UNIT 4 – FTP 2nd ASIX

2 ASIX - SXI Why do we need FTP?

- One of the main advantages of TCP/IP based networks is the possibility of

transfer information between machines.

- There are multiple service that allow us to share files between machines

(email, web, P2P, SMB, etc).

- These are not specifically designed to transfer files so are not optimized.
- FTP: File Transfer Protocol

2 ASIX - SXI FTP

- Is a service.
- Application level.
- Client-server model.
- Uses TCP protocol.
- Transfer standard for files between machines in TCP/IP networks.
- One of the oldest service (2001) used to transfer files and yet the main service used for it

in Internet and corporative systems.

2 ASIX - SXI FTP Protocol

- Connection oriented designed for fast transmission, bidirectional and

efficiently between clients and servers.

- The way FTP stores data in the server is transparent for the client, using

formats understandable for both parts. This is standardized by RFC 959.

- Most used formats are
- ASCII: Most common. Text files.
- Image: For binary files
- EBCDIC: Extended binary files.

2 ASIX - SXI FTP Protocol

- Using these formats, the filesystem is independent. Client can use NTFS and

server can use ext3 and yet working.

- FTP needs two types of connections
- Control connection: for running commands to interact with the server. This

control requests are received by the server in the port 21.

- Data connection: used for the data transfer. Server is listening requests, by

default, in port 20.

- We can use the protocol through commands and through graphical clients

2 ASIX - SXI FTP Protocol

2 ASIX - SXI FTP Protocol

- FTP Server: Access to the filesystem of the machine where these are

installed, manage the clients connections and depending on the privileges defined, allow the download and/or upload of files.

- FTP Client: Access to the filesystem of the machine where these are

installed and establish connections with FTP servers to upload or download files.

2 ASIX - SXI FTP Protocol

- SPI (Server Protocol Interpreter): Interpreter process that is always listening

for requests and commands from a client.

- SDTP (Server Data Transfer Process): Intern process listening for requests.

In charge of preparing data before sending them.

- CPI (Client Protocol Interpreter): user process that starts the connection

with SPI to run control commands.

- CDTP (Client Data Transfer Profess): Process waiting a connection from

SDTP to begin the transfer.

2 ASIX - SXI FTP Protocol

- When a CPI is going to start a transfer, the SPI says to the SDTP that

he has to start a connection with the CDTP to negotiate the ports and transfer the data.

- CPI is who indicates the transfer mode and the transmission

characteristics.

- When an operation is going to be executed from CPI, each operation

is identified by a command. Some commands are often the names of the operation.

2 ASIX - SXI FTP Protocol

2 ASIX - SXI FTP Protocol

2 ASIX - SXI TFTP

- Trivial FTP.
- Simplified variant of FTP designed to read/write from/to a server fast, without complex

operation nor authentication.

- Based on UDP protocol.
- Port 69 UDP
- Can’t do complex operations like create, delete or list directories.
- Used for transfer file configurations, boot files, etc.

2 ASIX - SXI FTP TLS/SSL AND SFTP

- In the original FTP protocol, data go trough the network in plain text. No

security at all.

- We need to cypher them.
- FTP over TLS or SSL (also called FTPS) adds a layer of encryptation below

the application layer of the packets.

- SFTP (SSH File Transfer Protocol) offers FTP through SSH. First a SSH session

is stablished and then the files are transferred. Port 22 (same as SSH)

2 ASIX - SXI FTP Service

- In the server, the processes in charge of serving the FTP requests are

called daemons.

- Most used is vsFTPd (Very Security FTP Daemon)
- It’s not installed by default.
- Once installed, configuration is made using directives in

/etc/vsftpd.conf.

2 ASIX - SXI FTP access modes: Terminal

- For accessing to the data, users can use a terminal (commands) or

using a graphical interface.

- Using the terminal involves less resources and can be used from any

OS, even those without graphical interface.

- Very important know how to use them. Same commands in every OS.
- Session is started by typing ftp name_server_or_ip

2 ASIX - SXI FTP access modes: Terminal

2 ASIX - SXI FTP access modes: Terminal

2 ASIX - SXI FTP access modes: Terminal

2 ASIX - SXI FTP access modes: Terminal

2 ASIX - SXI FTP access modes: Terminal

2 ASIX - SXI FTP access modes: Graphical

- Main advantage is the comfort.
- Three ways
- Through file explorer
- Through web browser
- Through FTP client (WinSCP, FireFTP, Filezilla Client)

2 ASIX - SXI FTP: anonymous user

- User by default for connecting a FTP.
- Usually with restricted access to operations and some directories. By

default only read access.

- Can be enabled or disabled.
- anonymous_enable=yes
- Once a anonymous user is “logged in”, the directory specified in the

directive anon_root will be shown.

2 ASIX - SXI FTP: local machine users

- One of the options provided by vsFTPd I that allows to connect using

the users created in the OS.

- Doing this, it can be configured for working in its directory and restrict

the others. This is called cage the users.

- chroot_local_user=yes
- We can exclude some users from being cage by adding them to the

file /etc/vsftpd.chroot_list.

2 ASIX - SXI FTP connection modes: active

- In old versions (and some now), default connection mode.
- We can change the mode using the commands passive and active.
- When a client connects to the server, is the client who set the port to

use in the data transfer.

- Server receive in port 20
- Client in the port he has specified

2 ASIX - SXI FTP connection modes: active

- 1- Client sends a packet to the port 21

of the server from a port > 1024.

- The content of this packet is the

command PORT and the number that the client will use to transfer the data.

- 2- When the server receives it, if

agrees, sends an ACK to the client and then the transfer can begin.

2 ASIX - SXI FTP connection modes: passive

- Is the server who sets the port so the port 20 is not used by default.

2 ASIX - SXI FTP connection modes: active

- The command send at the beginning of the communication is PASV to

the port 21.

- In response, the server sets the port to be used for the data transfer

(>1024)

- The transfer begins.

2 ASIX - SXI Questions?

---

## 4.2 Grups

Raga Attila Sergi

Quique Ana Mompo

Alexis Gvidas Arce

Vicent Alex Francisco

Abel Dani

---

## 4.3 U4 P1

Unit 4 – FTP

U4 – P1

As we already have installed a server and a client and we are able to connect them (if not, you need to do this first), now is time for modify some directives in order to a better understanding of the configuration file and the FTP service

Limit the number of connections from the same IP to 3 simultaneous connections. Check it.

Limit logged users to connect only to their home directory. Check it.

Allow anonymous users to upload files. Check it.

---

## 4.4 U4 P2

Install IIS and FTP Server using Server Manager Go to Server Manager, and then select Add roles and features: Click Next, then, we'll have "Select installation type" dialog

Next

Click "Install"

Click "Close" after successful installation.

Now, we may want to check if IIS has been successfully installed. Go "IIS Manager" under "Tools" of "Server Manager"

Creating ftp users Let's create a user who can use ftp service. "Administrative Tools" => "Computer Management"

Click "Create" and then "Close", then we can see a new user has been created

Repeat the process to create ftpuser1 and ftpuser2. Next, create a local user group called FTPUsers and add the 3 user accounts. Add this group to the NTFS permissions of c:\ftp (First, create the directory)

Configuring ftp site via IIS Manager Now we need to configure FTP server. Select "Add FTP ..." under IIS Manager

Specify your IP address in the field: FTP site name

In the next screen select All Unassigned IP Address and Port 21. And, by the moment, No SSL

If you want Anonymous access, you have to select it.

For this practice, we will work only with Basic Authentication. Allow access and check it

- to individual users separating by comas
- to the group FTPUsers

Click "Finish", and we can see we've just created a FTP site: Now, we may want to check Firewall settings for Inbound traffic

Note the port settings for the FTPs

Checking connection to the server

Testing with ftp from terminal

```bash
$ ftp your_ip_address
```

Upload a file and Check the transfer is ok

If you have an alias in the DNS service like ftp.aula51name.com, you can use it to access your FTP site

```bash
$ ftp ftp.aula51name.com
```

Configure FTP User Isolation FTP User Isolation is one of the best ways to secure your IIS 8 FTP site and prevent users from accessing restricted content. This is especially helpful for web servers that only have a few IP addresses and have multiple users who require FTP access. In this scenario, you would create one main FTP site with multiple directories for the various users.

Create a directory with the name LocalUser (the name must be the same, it’s very important!!!) in the folder C:\ftp. Then make three directories under with the same names as the users: ftpuser, ftpuser1 and ftpuser2 in the folder C:\ftp\LocalUser.

On the Features view of the FTP site, click on FTP User Isolation.

Options of user isolation

- User name directory (disable global virtual directories) suggests that the ftp session of a

user is isolated in a physical/virtual directory that has the same name as the ftp user. Users see only their own directory (it is their root ftp-directory) and cannot go beyond it (to the

```bash
upper directory of the FTP tree). Any global virtual directories are ignored;
```

- User name physical directory (enable global virtual directories) suggests that the ftp

session of a user is isolated in a physical directory that has the same name as the name of the ftp user account. A user cannot go above its directory. However, all created global virtual directories are available to the user;

- FTP home directory configured in Active Directory – an FTP user is isolated within his

home directory specified in the settings of his Active Directory account (FTPRoot and FTPDir properties).

Select the second option to isolate ftp users. Test your ftp client: Now that we’ve finished configuring the FTP server, we can try connecting to it with an FTP client by trying to change the path of my FTP client to the root directory of one of the other FTP users, or by simply going up to a parent folder.

---

## ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — U4 A1**
> Unit 4 – FTP
>
> U4 – A1
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Search on the Internet a definition of anonymous ftp server, and explain in
>
> with your own words. Then search 5 anonymous servers on the Internet and copy their addresses.
>
> ### 2. Choose one of them and access through the terminal using the following
>
> command: ftp yourAnonymousftpserver. For example: ftp ftp.rediris.es (you can not use this for this example).
>
> Once logged in, use the command ls to list the content of the directory where you have accesed and paste a screenshot.
>
> Now access to the same server using the browser. For the same example as before the address will be: ftp://ftp.rediris.es and add a screenshot of the files inside of it.
>
> Is the same directory? Why?
>
> ### 3. Search on the Internet five software applications of the TFTP server and
>
> explain what are they used for.

> **✍️ Activitat Pràctica 4.2 — U4 A2**
> Unit 4 – FTP
>
> U4 – A2
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Install the vsFTPd program in your Ubuntu server. Once installed, run the
>
> following command service vsftpd status and add a screenshot of the
>
> ```bash
> service running.
> ```
>
> ### 2. As you know, the vsFTPd configuration is made at /etc/vsftpd.conf using
>
> directives. Search on the Internet the following directives, understand them and explain with your own words what they do with an example.
>
> - anonymous_enable
> - local_enable
> - write_enable
> - local_unmask
> - anon_upload_enable
> - download_enable
> - xferlog_enable
> - local_max_rate
> - max_per_ip
>
> ### 3. Search on the Internet 3 FTP servers for Windows and 3 FTP servers for
>
> Linux.

> **✍️ Activitat Pràctica 4.3 — U4 A3**
> Unit 4 – FTP
>
> U4 – A3
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Install Filezilla in Linux and WinSCP in Windows and connect to the FTP
>
> server configured in the U4A2. Add screenshots of the successful connection and a file being transferred (upload or download).
>
> ### 2. Using the anonymous FTP found in the previos tasks, connect to them
>
> using the three different graphical modes studied in class. Add screenshots of your successful connection.
>
> - Analyze advantages and disadvantages of each graphical access.

> **✍️ Activitat Pràctica 4.4 — U4 A4 Group**
> Unit 3 – HTTP
>
> U4 – A4
>
> In groups, prepare a presentation about “Installing a Secure FTP Server in Windows using IIS”.
>
> Each group have to prepare a presentation to explain its topic. Each group can use as many tools as needed during the presentation.
>
> The duration of the presentation will be 10 minutes as maximum.
>
> Questions at the end can be asked to any member of the group, regardless the part of presentation he/she has presented.
>
> Each group will be evaluated by the other groups.
>
> The following rubric will be used to evaluate
>
> EXCEL·LENT MOLT BÉ SUFICIENT INSUFICIENT
>
> ### 1. Presentació del
>
> projecte El ponent es presenta, planteja el tema del projecte i les parts que desenvoluparà. Resumeix les diferents parts del treball. El ponent es presenta, però no desenvolupa completament la resta d’aspectes. No es presenten el ponent o el projecte, ni es fa un resum de les diferents parts del treball.
>
> Es presenta de manera inadequada. 2.- Veu El volum i l’entonació són els adequats, la veu clara i la vocalització bona. El volum és prou alt bona part bona part del temps, la veu clara i la vocalització bona. Costa entendre alguns fragments, i el nivell és baix en la claredat o vocalització.
>
> El volum és dèbil com per a ser escoltat per tota la classe. Molts fragments no s’entenen.
>
> ### 3. Postura del cos,
>
> gestualitat i contacte visual Té bona postura i els moviments que fa són naturals. Realitza gestos per a facilitar la comprensió del discurs. Estableix contacte visual amb la resta de companys. En general té bona, realitza gestos per a facilitar la comprensió del discurs i estableix contacte visual amb la resta de companys.
>
> En moltes ocasions els moviments que fa no són naturals, no realitza gestos o no en fa amb la finalitat adequada i no estableix contacte visual. Té una postura rígida. No usa gestos adequats. No estableix contacte visual amb la resta de l’alumnat durant la presentació.
>
> Unit 3 – HTTP
>
> ### 4. Discurs i
>
> vocabulari El seu discurs és molt clar, sense incorreccions gramaticals, amb un lèxic ric i s’ajusta al tema. Adequa el seu registre a la situació comunicativa. El seu discurs és correcte¡ i té cura de tots els aspectes. Utilitza paraules pròpies sense barbarismes. Parla sense abusar de repeticions i/o tics lingüístics.
>
> Respecta el registre. El seu discurs presenta bastants incorreccions, però en general el llenguatge és clar i usa un lèxic adequat al tema. No respecta en tot moment el registre. Discurs pobre. Ple d’incorreccions. El lèxic no és l’adequat al tema. Usa un registre inapropiat.
>
> ### 5. Temps
>
> La durada de la intervenció és l’adequada al contingut exposat.
>
> La durada de la intervenció és quasi l’adequada al contingut exposat.
>
> La durada de la intervenció és excessivament llarga o ha faltat temps. Ha acabat molt ràpidament o ha utilitzat molt més temps del previst.
>
> ### 6. Atenció i interés
>
> Capta l’atenció en tot moment. Quasi sempre capta l’atenció. Quasi mai capta l’atenció. No capta l’atenció de l’alumnat.
>
> ### 7. Preparació prèvia
>
> S’ho ha preparat molt bé. No necessita llegir el suport material que l’acompanya.
>
> Bastant preparat. Algunes vegades llegeix l’esquema.
>
> En alguns moments no llegeix, es nota que algunes parts les porta més preparades. No és capaç d’exposar sense llegir el paper.
>
> ### 8. Contingut
>
> Entén el que explica. El contingut és ampli.
>
> Quasi sempre entén el que explica. El contingut està treballat.
>
> En moltes ocasions no entén el que explica. Apareixen contingutssobrers i inadequats o en falten. No entén el que explica. El contingut no està treballat
>
> ### 9. Material de suport
>
> El material de suport (pòsters, murals, vídeos, etc.) és creatiu i útil per a la comprensió de l’exposició.
>
> En general el material de suport acompleix els requisits i ajuda a la comprensió de l’exposició.
>
> El material de suport no és creatiu,però ajuda a la comprensió de l’exposició.
>
> Ni la creativitat del material de suport és l’adequada ni aconsegueix l’objectiu d’ajudar en la comprensió de l’exposició.
>
> ### 10. Domini del tema
>
> (i resolució de dubtes) Respon les preguntes que li plantegen després de l’exposició, resol dubtes. Respon quasi totes les preguntes plantejades. Respon alguna pregunta, no domina suficientment el tema. No sap respondre les preguntes plantejades, no té domini del tema.
