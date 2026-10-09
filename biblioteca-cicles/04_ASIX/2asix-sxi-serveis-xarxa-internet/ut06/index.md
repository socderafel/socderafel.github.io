---
layout: default
title: "UT6 — Unit 6 - Email — Serveis de Xarxa i Internet | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT6 Completa"
prev_url: "../ut05/ut0503.html"
prev_label: "⬅️ 5.3 U5 P2"
next_url: "../ut06/ut0601.html"
next_label: "6.1 U6 Email ➡️"
---

# 📘 UT6 — Unit 6 - Email (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**6.1 U6 Email**](#ut0601) (o [obrir en pàgina individual ➡️](./ut0601.md) )
> - [**6.2 U6P1**](#ut0602) (o [obrir en pàgina individual ➡️](./ut0602.md) )
> - [**✍️ Activitats pràctiques UT6**](#ut06actividades) (o [obrir en pàgina individual ➡️](./ut06actividades.md) )

---

## 6.1 U6 Email

> **📌 🏷️ Apunt de la Unitat**
> #### **Resources**

> **📌 🏷️ Apunt de la Unitat**
> #### **Tasks**

> **📌 🏷️ Apunt de la Unitat**
> #### **Practices**

📎 **Material de laboratori (U6P1):** `U6P1.png`

---

SXI / NSI - UNIT 6 – MAIL 2nd ASIX

2 ASIX - SXI Email Service

- Set of tools that allow sending and receiving message through the network in an efficient

way.

- Using this service, users are able to send and manage their own mails.
- One of the most important services nowadays. Everywhere, everyone.
- Easy to use and to manage.
- Not usual to manage a mail server. Nowadays is delegated in 3rd parties.
- 319.000 millions of mails where sent in 2021

2 ASIX - SXI How does it work?

- In ordinary mail, when someone need to send a mail there are many

agents implied in the process.

- When a person needs to send a mail, he puts it into the mailbox.
- Then the postman will bring it to the mail building in the city. There an agent

will check the city of the recipient.

- If is the same city, a postman will bring the mail to the recipient.
- If not, it will send to the city of the recipient and another agent to the

recipient mailbox.

- All these is established by a set of specific rules.

2 ASIX - SXI How does it work?

- As in ordinary mail, when speaking about email, there are multiple

agents in charge of the service.

- MUA (Mail User Agent) -> Client software properly configured for

contacting the server and used to write, send, receive and organize emails. Thunderbird, Outlook, Mailbird, Apple Mail, etc.

2 ASIX - SXI How does it work?

- MTA (Mail Transfer Agent) -> in charge of manage the emails sent by

the MUA and, if necessary, redirect them to their recipient. Sometimes is the server daemos. Usually MTA receive requests in the port 25 (SMTP). Postfix, Sendmail, Microsoft Exchange server.

- MDA (Mail Delivery Agent) -> element able to manage the mailboxes

and listening the requests of query the inboxes through the MUA. Usually un ports 110 (POP) or 143 (IMAP). Dovecot, Procmail.

2 ASIX - SXI How does it work?

2 ASIX - SXI How does it work?

- Each client has an account in the server with space assigned.
- Each mail server is enabled to manage a domain name. If an email is sent

outside this domain, the DNS is queried.

- Between MTA and MDA usually there is a firewall or antispam element.
- Check MTA in GMAIL.

2 ASIX - SXI MUA – Email clients

- Client software with two main functionalities
- Request the server for sending of an email.
- Request the server for receiving emails.
- It can also has other functionalities
- Manage messages
- Rules
- Contact book
- Searches
- Etc.

2 ASIX - SXI MUA – Email clients

- For configuring a MUA it’s needed, at least
- User: name given in the service, followed by @domainname
- Password
- SMTP server: FQDN of the SMTP server. i.e. smtp.gmail.com
- POP/IMAP server: FQDN of the POP/IMAP server. i.e. pop.gmail.com

2 ASIX - SXI MUA – Email clients

- Two types of clients
- Installed apps: in laptops, computers, mobile phones, etc
- Webmail: in this case, the software is a webpage. The user accesses through

an URL and its credentials. The server has to be configured for accepting this type of access.

2 ASIX - SXI SMTP Protocol

- Simple Mail Transfer Protocol
- Set of rules defined for sending an email in an efficient way.
- Independent of the transmission medium, so only need a TCP

communications with a SMTP server.

- Ruled by RFC 5231.

2 ASIX - SXI SMTP Protocol

- SMTP can forward emails from different networks, so the message can go

through different servers until their recipient.

- SMTP server listen at port 25 TCP.
- First SMTP email was sent in 1971 in ARPANET by Ray Tomlinson
- As previous services, there is a dialog between client and server where

requests and responses indicates actions to be done.

2 ASIX - SXI SMTP Protocol: How does it work?

2 ASIX - SXI SMTP Protocol: How does it work?

- After every client interact, if accepted, a 220 code will be returned.
- Client starts the connection with the server.
- Client sends EHLO command to the server with its identification and the

domain.

- Client sends MAIL FROM to identify the sender. Server check if the user is

OK.

- Client sends RCPT to identify the recipient. This command is repeated as

many times as recipients has the email.

- Client sends DATA with the content of the email.
- When finished, client sends QUIT

2 ASIX - SXI SMTP Protocol: How does it work?

- Check with Whireshark a SMTP dialog.

2 ASIX - SXI POP Protocol

- Also known as POP3, due to the version is the third.
- Designed to be used in machines with few resources.
- Light, simple and few functionalities.
- Listening port by default is the 110 TCP.
- If we need a client to use the POP3 protocol, the server has to be

prepared and configured to use it too.

- Offline mode. When locally downloaded a email from the server, it’s

deleted from it.

2 ASIX - SXI POP Protocol: How does it work?

- 3 phases.
- Stablishing TCP connection.
- Authorization. The commands used are USER and PASS or

APOP/AUTH, being the last more secure thanks to MD5.

- Transaction. Once authorized, the client can run commands as

recovery, delete, or manage messages.

2 ASIX - SXI POP Protocol: How does it work?

2 ASIX - SXI IMAP Protocol

- Also known as IMAP4.
- More complex operations than POP.
- More resources needed.
- The listening port is 143 TCP
- Can create folders as mailboxes and manage our messages in

mailboxes.

- Online mode, so messages are not deleted from the server when

downloaded.

2 ASIX - SXI IMAP Protocol

- The dialog is far more complex than POP3.
- Once the connection is stablished, many commands can be sent

separated by lines.

- Responses are preceded by an *
- Check IMAP in Wireshark.

2 ASIX - SXI Email security

- It’s more and more important the security in our emails, specially in

corporate environments.

- Not only we need to assure that the sender is who he says, but also

for encrypting the content of the email.

- For this purpose, we can sign the email with the digital signature.
- Spam (relay servers), phishing, etc

2 ASIX - SXI Questions?

---

## 6.2 U6P1

$ttl 38400 aula51alvaro.com. IN SOA user-VirtualBox.aula51alvaro.com. admin.aula51alvaro.com. ( 1570110793 10800 3600 604800 38400 ) aula51alvaro.com. IN NS user-VirtualBox.aula51alvaro.com. user-VirtualBox.aula51alvaro.com. IN A 10.0.51.90 mail.aula51alvaro.com. IN A 10.0.51.90 aula51alvaro.com. IN MX 0 mail.aula51alvaro.com.

Server Installation (Ubuntu)

To install our mail server, we will have to create the following records in the DNS

- An A record that points to the address of the mail server.
- A PTR record, so that the reverse resolution works (required by some systems to control the

sending of SPAMs by SMTP servers).

- An MX record with the priority we want, and with the IP address of our mail server.

Example

MTA Installation (Postfix)

Postfix is a free/open source mail server, a computer program for routing and sending email, created for being a faster, easier to manage and secure alternative to the widely used Sendmail. Postfix is the default transport agent for several Linux distributions. To install you must use

```bash
apt-get install postfix
```

During the installation, postfix will ask us some questions like the server model we want for Postfix. We will select Internet Site. In the next window, we will ask for the name of the mail system (Write the domain name: aula51.com) To restart the Postfix server, we will do it with the command

```bash
service postfix restart
```

Files: • Configuration file: /etc/postfix/main.cf • Log file: /var/log/mail.log

We will edit the postfix configuration file

```bash
sudo nano /etc/postfix/main.cf
```

And we will add this line to put the address of our network with the mask. Be careful because you have to write your network, not your server ip address mynetworks=10.0.51.0/24

Server Mail Installation

Don't delete this line

mynetworks = 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128

We edit the file /etc/mailname, to write the name of the domain that we want to appear by default in the mails

```bash
nano /etc/mailname
```

It must contain something like: aula51.com

We will save and restart the service

```bash
service postfix restart
```

How to send e-mail from the command line (in localhost).

We will install the mailutils mail tool.

```bash
apt-get install mailutils
```

Now we create the users that will connect to the mail server. (If you don't have any user) adduser usuario_de_correo

Now we log in with a user created. login usuario_de_correo

Once logged in we send an email as follows: mail usuario_de_correo@aula51.com

CC: Intro subject: (Type subject). + Intro (Write message) + Intro Clic CTRL+D to finish. Now we log in with the user to whom we send the email and we will get a message "You have new mail". To see it we will write the following: mail

And the user's inbox will appear.

"/var/mail/usuario": 3 messages 3 new >N 1 marta@aula51.com Thu Jan 26 12:46

14/489

hola N 2 marta@aula51.com Thu Jan 26 12:46 14/498 Saludos N 3 marta@aula51.com Thu Jan 26 12:47 14/505 Tercer correo de prueba

To open the message, we can see there is a number in the left part of the line of the received mail. You have to enter that number and it will show you that message.

The administrator can see the email sent between clients by typing

```bash
ls -l /var/mail
```

postfix logs and errors: tail /var/log/mail.log

Dovecot Server Installation

Dovecot is an open source IMAP and POP3 server for GNU / Linux systems. It is written mainly thinking in security. Dovecot aims to be a lightweight, fast, easy to install and secure, open source mail server. We will install Dovecot service.

```bash
apt-get install dovecot-pop3d dovecot-imapd
```

Once installed we will edit the configuration file

```bash
nano /etc/dovecot/dovecot.conf
```

Listen=* to listen from all addresses mail_location=mbox:~/mail:INBOX=/var/mail/%u

The storage of the mails is something important that we must take into account, since it will determine how our mails will be stored and how will be the process of both reading and writing of it. The main types of mail storage are Maildir and Mailbox. These types of storage will be linked to the Imap or Pop mail server that we use.

Dovecot is a system based on Mailbox since the messages are stored in a single file queuing as they arrive in the mailbox. Using Mailbox all messages are stored in /var/mail creating a file for each user where all their messages are stored. To do this we look for the "mail_location" directive and we uncomment it and assign the directive from above as you can see in the following image

UnCommented: mail_location = maildir:~/Maildir And type this: mail_location = mbox:~/mail:INBOX=/var/mail/%u

If you need to allow the authentication of users without SSL / TLS - something unwise on servers in production, but perfect for simple authentication tests - edit the file

```bash
nano /etc/dovecot/conf.d/10-auth.conf:
```

You must disable login command and all other unsecured authentication unless you have SSL / TLS enabled. disable_plaintext_auth=no

### 4. Testing SMTP, POP3 and IMAP Servers with Telnet

Many times we must manually test if an SMTP server or POP3 or IMAP is responding or working properly.

Trying ip... Connected to xxx. Escape character is '^]'. 220 Mensaje de Bienvenida del Servidor (Version del Servidor SMTP) mail from: miguel@aula51.com (we are the sender) 250 Ok rcpt to: pepe@aula51.com 250 Ok data 354 End data with "." Este es el cuerpo del mail. The most effective, quick and simple test, is to connect by Telnet with the mail server and type interactive commands from terminal.

As telnet does not encrypt the data, passwords are transmitted without security. To avoid, it is convenient to create an account on the server and make the Telnet connection with that user. Later, we should delete it to not compromise the server. Another utilities could be

• to see a list of all new messages on the server, before downloading them • to delete them there without downloading them • to consult the mail from any computer, without having to configure the mail program. Although we must not forget that telnet does not encrypt the data.

The basic steps and commands are summarized below.

### 1. SMTP Server

We make the connection to the server: telnet correo.aula51.com 25

If there is connectivity, the server will answer something like

The welcome message may vary depending on the server in question or its configuration, but the most important thing is the numeric code that we have received (in this case 220). This tells us that the SMTP server is ready to answer our requests. The next thing we need to do is identify ourselves

helo name-of-my-host

Where name-of-my-host is the name of the local computer from which we are accessing. The server will respond with the code 250 another message. This numeric code indicates that the command was successfully registered. 250 HELO accepted.

Because we are emulating the communication between two SMTP servers that are going to exchange mail, below we indicate who is the sender and the receiver

Note that for each command the server returns an Ok (250 code). To write the body of the mail we type the command DATA. We can write several lines, ending with one point.

telnet correo.aula51.com 110

Trying ip Connected to pop3.server.ficticio.com. Escape character is '^]'. +OK <Some personalized message> user mail_user (without @aula51.com) +OK pass Password +OK telnet correo.aula51.com 143 Trying IP... Connected to localhost. Escape character is '^]'.

- OK Dovecot ready.

Once we finish the body, the email is accepted and queued for later send. This way we have successfully tested our SMTP server. Quit to exit

### 2. POP3 Server

Now we will test the POP3 server. First we test connectivity and, once connected, the mail (for which we must have adequate credentials). The methodology is very similar, so we go directly to the commands

Once connected we type the corresponding user and password to access a mailbox

From now we can type different commands to list or delete the messages that are in the mailbox

- STAT Returns the number of messages and the number of bytes they use in the mailbox.
- LIST Returns the number of messages and, in the next line, the message number and the

number of bytes of every message.

- DELE Delete the indicated message. This is very useful if we are accessing to free the

queue of the mailbox.

- RETR <message_number>: To read a message from the server
- QUIT: Exit

### 3. IMAP Server

First of all we must telnet to the IMAP port (143)

Then we respond to the server with ". LOGIN " followed by the username and password: (if done from remote put a, b, c, d ..... instead of ".") Como veran puedo utilizar varias líneas. . 250 Ok: queued as 20E73D85D6

a login pepe pepe (user password) b select inbox c logout . login pepe pepe . OK Logged in. . list "" "*"

- LIST (\HasNoChildren) "." "INBOX"

. OK List completed. Example from remote

Example from localhost

Then we can list all the folders with the command “. LIST“

Next you can see the total number of messages that are in the INBOX folder, with “. STATUS INBOX (messages)“ command: . status INBOX (messages)

- STATUS "INBOX" (MESSAGES 1351)

. OK Status completed.

And with “. STATUS INBOX (unseen)“ the unread ones: . STATUS INBOX (unseen)

- STATUS "INBOX" (UNSEEN 1)

. OK Status completed.

To recover a message first of all we must select the folder IMAP: . SELECT INBOX

- FLAGS (\Answered \Flagged \Deleted \Seen \Draft NonJunk Junk $Forwarded)
- OK [PERMANENTFLAGS (\Answered \Flagged \Deleted \Seen \Draft NonJunk Junk

$Forwarded \*)] Flags permitted.

- 1352 EXISTS
- 0 RECENT
- OK [UNSEEN 1331] First unseen.
- OK [UIDVALIDITY 1222331858] UIDs valid
- OK [UIDNEXT 1620] Predicted next UID

. OK [READ-WRITE] Select completed.

Then with “. FETCH <primero>:<ultimo> FLAGS” we can get a list of the messages and their flags: . FETCH 1:3 FLAGS

- 1 FETCH (FLAGS (\Seen NonJunk))
- 2 FETCH (FLAGS (\Seen))
- 3 FETCH (FLAGS ())

. OK Fetch completed.

Now if we are interested in reading the subject of the 3d message (which is unread), we can use the following command: . FETCH 3 (body[header.fields (subject)])

```bash
* 3 FETCH (FLAGS (\Seen) BODY[HEADER.FIELDS (SUBJECT)] {16}
```

Subject: prueba IMAP

)

```bash
apt-get install apache2
```

```bash
apt-get install php
```

https://dungeonofbits.com/instalar-y-configurar-un-servidor-de- correo-electronico-con-postfix-y-squirrelmail-en-linux.html . OK Fetch completed.

And to read the body: . FETCH 1 BODY [text]

- MUA web installation (Squirrelmail).

Before installing Squirrel Web Mail, we have to make sure we have installed apache2 with PHP support

Follow the steps of this link

Squirrelmail is not in the Ubuntu repository so you will have to download it. In the example, version 1.4.22 is downloaded, unzipped and saved in /var/www/html/squirrelmail The directory owner is also changed to www-data so that Squirrelmail can write the mails there.

wget https://sourceforge.net/projects/squirrelmail/files/stable/1.4.22/squirrelmail- webmail-1.4.22.zip unzip squirrelmail-webmail-1.4.22.zip

```bash
sudo mv squirrelmail-webmail-1.4.22 /var/www/html/
sudo chown -R www-data:www-data /var/www/html/squirrelmail-webmail-1.4.22/
sudo chmod 755 -R /var/www/html/squirrelmail-webmail-1.4.22/
sudo mv /var/www/html/squirrelmail-webmail-1.4.22/ /var/www/html/squirrelmail
```

Then you will have to configure SquirrelMail with the following command

```bash
sudo perl /var/www/html/squirrelmail/config/conf.pl
```

Select 2. Server Settings.

Select 1 Domain and enter the domain you used in the postfix installation. In this example dungeonofbits.com. Then select R to save and

- General Options to configure some options.

You must modify the points marked in the image: 1,2 y 11. Now you can access the server through the browser by entering the URL localhost/squirrelmail or, as in the example: dungeonofbits.com/squirrelmail.

Create email users

E-mail users must be system users, so you must create a user on the computer, for example you can create the user 'legolas'.

```bash
sudo adduser legolas
```

And create a home directory to receive the mails

```bash
sudo usermod -m -d /var/www/html/legolas legolas
sudo mkdir -p /var/www/html/legolas
sudo chown legolas:legolas legolas
```

Now you can test this new user in Squirrelmail, for example by sending an email to another account

---

## ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — U6 A1**
> Unit 6 – Mail
>
> U6 – A1
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Check the following screenshot and, using the tool Geobytes IP Locator,
>
> find from where the mail has been sent.
>
> ### 2. For this exercise you will need a Gmail account and another account
>
> different than Gmail (Outlook, edu.gva, etc). Send and email from one to another and viceversa. Inspect the original mail in both an write the name of the MTA in charge of sending the email.

> **✍️ Activitat Pràctica 6.2 — U6 A2**
> Unit 6 – Mail
>
> U6 – A2
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. In a Windows client, configure a Gmail account in the Outlook app. Explain
>
> with your own words all the process. You can use also screenshots.
>
> ### 2. Send an email using your Outlook app and capture the traffic generated
>
> with Wireshark. Add a screenshot of the packets captured and answer the following questions.
>
> - What are the status codes returned by the server for each SMTP
>
> command?
>
> - What are the ports used?
>
> ### 3. Describe the differences between POP and Webmail and their advantages
>
> and disadvantages.
>
> - Search and explain what are the main security issues in POP3 and IMAP.
