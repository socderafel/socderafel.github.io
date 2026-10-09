---
layout: default
title: "UT5 — Unit 5 - SSH — Serveis de Xarxa i Internet | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut04actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT4"
next_url: "../ut05/ut0501.html"
next_label: "5.1 U5 SSH ➡️"
---

# 📘 UT5 — Unit 5 - SSH (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**5.1 U5 SSH**](#ut0501) (o [obrir en pàgina individual ➡️](./ut0501.md) )
> - [**5.2 U5 P1**](#ut0502) (o [obrir en pàgina individual ➡️](./ut0502.md) )
> - [**5.3 U5 P2**](#ut0503) (o [obrir en pàgina individual ➡️](./ut0503.md) )

---

## 5.1 U5 SSH

> **📌 🏷️ Apunt de la Unitat**
> #### **Resources**

> **📌 🏷️ Apunt de la Unitat**
> #### **Practices**

---

SXI / NSI - UNIT 5 – SSH 2nd ASIX

2 ASIX - SXI Why do we need SSH?

- Sometimes, we need to connect from a computer to another computer for

running commands.

- Telnet was the first “service” used in Unix for this purpose.
- It avoids the need of having I/O peripherical for each computer.
- Telnet is not currently in use due to security problems.
- Current service used is SSH.

2 ASIX - SXI SSH – Secure Shell

- For UNIX, Windows and MacOS systems.
- Born as open source
- In 1999 OpenSSH for Linux was released.
- OpenSSH allows the remote connection to a computer for running commands, as used to

do Telnet, but cyphering the information.

- SSH is also used to stablish secure connections with mail servers, ftp servers, etc through

SSH tunnels.

2 ASIX - SXI SSH – Features

- Telnet port 23. SSH port 22.
- Uses public and private key ciphering techniques.
- Allows user authentication by
- Password
- Keys system
- 2 protocol versions
- ssh1 and ssh2
- It’s been aimed by several attacks
- https://www.openssh.com/security.html

2 ASIX - SXI SSH – Features

- SSH1
- It has a security hole that allows a intruder to insert data into de

communication transmission.

- Requires 2 keys: public key and one randomly generated at the session start.
- SSH2
- More security
- Not compatible with ssh1 (from now on, when speaking about ssh it will refer

to ssh2)

- Supports RSA and DSA
- OpenSSH supports both versions.

2 ASIX - SXI Protocol structure

- SSH is structured in 3 layers.
- Transport layer: Its purpose is to provide a secure connection between two

computers during the authentication (and the rest of the communication).

- Authentication layer: waits until the transport layer creates a secure

tunnel and then establish the authentication methods supported.

- Connection layer: Allows multiple channels of secure communications.

2 ASIX - SXI How it works?

- Client opens a TCP connection to the port 22 of the server.
- Server sends its public key to the client.
- Client generates a random session key and selects the symmetric

ciphering algorithm that will be sent to the server and will be used in the rest of the communication.

- The user authentication is done, through certificate or password and

the interactive session start.

2 ASIX - SXI How it works?

2 ASIX - SXI Authentication methods

- Password
- Simple Method. User and password.
- Server checks /etc/passwd and /etc/shadow files
- Public key
- User generates the key pair public/private
- Public key is also stored in the server
- Digital certificates and others

2 ASIX - SXI Authentication methods: password

- Important points when using password as authentication method
- Strong password
- Change the default port of ssh.
- Deactivate root access by changing the root name.
- Limit the number of login attempts using the directive MaxAuthTries.
- Not use password.

2 ASIX - SXI Authentication methods: public key

- We can connect to the server using the public key.
- Based on two keys (generally RSA), one public and one private.
- Private key includes data included in the public key. The public key

allows to know if the private key is their pair by comparing this data.

- Steps
- 1- Generate keys in the client
- 2- Copy and add the public key to the server.
- 3- Stablish connection with the SSH server using our private key

2 ASIX - SXI Installing OpenSSH

- Installation and configuration
- Official web: https://www.openssh.com
- apt-get install openssh-server
- SSH daemon
- sshd
- Started when the system boots.

2 ASIX - SXI Configuration files

- /etc/ssh/sshd_config
- SSH server configuration
- Can set listen port, version, private key location
- /etc/ssh/ssh_config
- SSH client configuration
- We can create different configurations depending on the server.
- Using the word “host” we can indicate a new section.
- In each section you can set the port, version, location of the keys, etc.

2 ASIX - SXI Configuration files

- /etc/ssh à Key server files
- ssh_host_rsa_key
- ssh_host_rsa_key.pub
- authorized_keys: Contain a list of authorized public keys.
- ~/.ssh/
- id_rsa e id_rsa.pub
- Known_hosts: Contains the public keys of the servers that the user

has already accessed.

2 ASIX - SXI ssh launch

- When installing openssh-server, the key-pair are created. If you need

to reconfigure them

- dpkg-reconfigure openssh-server
- Starting the service
- service ssh start
- /etc/init.d/ssh start

2 ASIX - SXI ssh use

- From the client
- Ssh [username@]host
- If the username match with the client username, you can omit it.
- We can connect to a different port using the option –p
- Ssh –p 4440 nombre_usuario@host
- The first time the folder .ssh will be created and in it the file known_hosts,

containing the public key of the server previously connected.

- In future connections, it will compare the received and the stored. If not

the same, it assumes that the server is different (avoiding man in the middle). We’d need to delete the key and accept it again.

2 ASIX - SXI ssh use

2 ASIX - SXI Server configuration

- Port
- Default listening port for SSH service. By default 22.
- Port 523421
- PermitRootLogin
- Set if root can connect through ssh to the server. By default “yes”
- PasswordAuthentication
- Allow authentication through password. Default yes.
- PermitEmptyPasswords
- PubKeyAuthentication

2 ASIX - SXI Server configuration

- Options for accept/deny users
- DenyUsers/DenyGroups: users that can not connect to the server
- AllowUsers/AllowGroups: users that can connect to the server.
- We can use these directives with patterns like
- AllowUsers user1@10.1.1.1 user2@10.1.1.1 user1@10.2.2.1
- ?: any character
- *: any sequence of chars
- !: negative

2 ASIX - SXI Server configuration

- Use examples
- AllowUsers root ventas?
- DenyUsers *
- AllowUsers ventas*
- DenyUsers ![ventas*]

2 ASIX - SXI SCP

- Secure copy. Allow copy files between computers using a secure

connection.

- Uses port 22 through a ssh ciphered link.
- Multi OS.
- scp /ruta/archivo_origen usuario@IP-servidor-ssh:/ruta/directorio_destino

2 ASIX - SXI SSH tunnels

- Protocols as telnet, FTP, POP3 are insecure protocols, as they don’t

guarantee the confidentiality of the info transmitted.

- We can use the SSH protocol to apply security to these insecure

protocols using SSH tunnels.

2 ASIX - SXI SCP

- Secure copy. Allow copy files between computers using a secure

connection.

- Uses port 22 through a ssh ciphered link.
- Multi OS.
- scp /ruta/archivo_origen usuario@IP-servidor-ssh:/ruta/directorio_destino

2 ASIX - SXI Questions?

---

## 5.2 U5 P1

Previously

Open the 22 port

```bash
sudo ufw allow 22/tcp
```

Server Installation

```bash
sudo apt-get install openssh-server
```

Normally, you do not need to install the SSH client because it is already installed by default on most GNU / Linux distributions. To verify that the SSH server has been installed correctly, we can establish connection from the machine where the server is as follows

ssh usuario@127.0.0.1

or

ssh usuario@localhost

To restart the service

```bash
sudo service ssh restart
```

To exit the connection SSH Exit

Server Configuration

The configuration file is: /etc/ssh/sshd_config Before modifying it, it is important to save a copy of the configuration file

```bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bkp
```

We will modify the following directives to give more security to the SSH server

- Port 268 Port where SSH service will be available. Open the port in the firewall.

```bash
sudo ufw allow 268/tcp
```

- PermitRootLogin no We deny root user access via SSH

PermitRootLogin Specifies whether root can log in using ssh. The argument must be yes, prohibit-password, forced-commands-only, or no. SSH Installation

The default is prohibit-password.

If this option is set to prohibit-password (or its deprecated alias, without-password), password and keyboard-interactive au‐ thentication are disabled for root.

If this option is set to forced-commands-only, root login with public key authentication will be allowed, but only if the command option has been specified (which may be useful for tak‐ ing remote backups even if root login is normally not allowed). All other authentication methods are disabled for root.

If this option is set to no, root is not allowed to log in.

- MaxAuthTries 2 Number of consecutive failed login attempts
- MaxStartups 3 Number of simultaneous login connections that will allow sshd per ip.

There are attacks that divide the attack on many login connections. With this directive we limit to only 3 login screens. Make it clear, once logged in the system, it is possible to have more than 3 ssh terminals, it refers exclusively to login screens.

- MaxSessions Specifies the maximum number of open shell permitted per network

connection. Multiple sessions may be established by clients that support connection multiplexing. Setting MaxSessions to 1 will effectively disable session multiplexing.The default is 10.

- AllowUsers user1: Users with permission to access via SSH (separated by space '').

✔ From IP: if we only want the user can access from a particular machine, we must specify the IP as follows: AllowUsers user1 @ ip (put the ip of your client)

Restart the service and Check after configuration

- ssh usuario@10.0.51.110

Do not let enter because the port is not the default port as we have changed it.

- ssh -p 268 root@10.0.51.110

Do not let root enter because we have put PermitRootLogin = no

- ssh -p 268 usuario@10.0.51.110

Enter perfectly

Error man-in-the-middle Your partner (you in another machine) changes the IP address of the server with your IP address and you connect from your client to his server. You should obtain

You must delete the key from your known_hosts client file and accept it again

AUTHENTICATION WITH PUBLIC KEY: NO PASSWORD WITH NULL PASSPHRASE

Note: By de moment work with the default port 22 and PasswordAuthentication yes

- You must create the same user in both machines, client and server.

```bash
sudo adduser juan
```

- From the client login with 'juan' and generate a pair of RSA keys (Put passphrase null, we do

not sign the key)

ssh-keygen -t rsa

### 3. Check that two files have been created in

private: /home/juan/.ssh/id_rsa public: /home/juan/.ssh/id_rsa.pub

### 4. Add our public key to the allowed public keys of the SSH server

(Copy this key to the server (-p 268)) ssh-copy-id IP_servidor_SSH ssh-copy-id juan@10.0.51.110 This command add the key to the user's allowed key file (authorized_keys) in the server. Finally in the server we should uncommented, in the file / etc / ssh / sshd_config the following line

AuthorizedKeysFile .ssh/authorized_keys

and disable SSH access with password

PasswordAuthentication no

For more security, give SSH access only to users who need it, and not to all

AllowUsers juan pepe

From the client, we try again to connect and we verify that it does not ask password

To check its operation (from terminal) ~ eval `ssh-agent`

pid 3456

exec ssh-agent bash

Add your SSH private key to the ssh-agent. ~ ssh-add .ssh/id_rda

Enter passphrase for .ssh/is_rsa -------- Type the passphrase Identity added

Note: Keep in mind that ssh-agent is an additional process and if it dies it is necessary to restart it and type the keys again.

You can add it to the / etc / profile file so that it runs every time you start session

```bash
# echo 'eval `ssh-agent`' >> /etc/profile
```

ssh juan@10.0.51.110

AUTHENTICATION WITH PUBLIC KEY: NO PASSWORD WITH NOT NULL PASSPHRASE

Re-generate a pair of keys, this time sign them with a password and repeat what you did in the previous section. Important: You should delete first authorized_keys and create again.

Now establish connection again: 'ssh localhost'

What happens? We see that he asks us to introduce our passphrase. After entering, the connection is established successfully.

USING SSH-AGENT: We have seen in the previous section that again the uncomfortable issue of entering a password. To avoid this we must make use of the ssh-agent utility. This command starts a daemon process that will help the user with the keys. Normally the user type the password once and from that moment the ssh-agent will be in charge of transmitting the credentials between the machines.

Modify the configuration of the ssh client on your machine to allow the use of ssh-Agent. Using the / etc / ssh / ssh_config file, indicatingForwardAgent yes

Connected from terminal with the SSH user (ex. Juan)

USERS PRACTICE

PasswordAuthentication yes

```bash
Create user Pepe on the server (only on the server, because the connection is by password, no keys)
```

AllowUsers and DenyUsers juan Juan and Pepe: group asix2 addgroup asix2 Add an existing user to an existing group usermod -a -G asix2 juan

Allowgroups and DenyGroups

SCP PRACTICE (change the port with -P)

- upload a file from the client to the server
- upload a folder from the client to the server
- download a file from the server

Link on the screen that saves the passphrase https://www.linuxbabe.com/linux-server/setup-passwordless-ssh-login

---

## 5.3 U5 P2

FREESSH WINDOWS SERVER

### 1. First authentication with user/password pair

http://techgenix.com/install-ssh-server-windows-server-2008/ https://www.redeszone.net/windows/freesshd-para-windows-instalacion-y-manual-de- configuracion-de-freesshd-para-windows-servidor-ssh-y-sftp/ Conexión al servidor SSH FreeSSHd Descargamos Putty desde su web oficial.

Metemos la IP del servidor y el puerto 22 o el que tenga escuchando el servidor ssh. Podemos guardar las sesiones y ejecutarlas con un doble click. Al darle a Open nos pide login y password.

Ya dentro del servidor compruebo que estoy en el haciendo un ipconfig. Ya tendríamos acceso completo con la consola al servidor ssh.

### 2. Public/private SSH keys for authentication instead of the

user/password pair. In the Client Machine download and install Puttygen Download the PuTTY installation package. Running PuTTYgen Go to Windows Start menu → All Programs → PuTTY→ PuTTYgen.

Creating a new key pair for authentication To create a new key pair, select the type of key to generate from the bottom of the screen (using SSH-2 RSA with 2048 bit key size is good for most people; another good well-known alternative is ECDSA). Then click Generate, and start moving the mouse within the Window. Putty uses mouse movements to collect randomness. The exact way you are going to move your mouse cannot be predicted by an external attacker. You may need to move the mouse for some time, depending on the size of your key. As you move it, the green progress bar should advance.

Once the progress bar becomes full, the actual key generation computation takes place. This may take from several seconds to several minutes. When complete, the public key should appear in the Window. You can now specify a passphrase for the key. You should save at least the private key by clicking Save private key.

We strongly recommended using a passphrase be for private key files intended for interactive use. . Copy the content of the public key to paste in the server. And go to the Server Machine. Configuring freeSSHd for use with SSH In the server Machine

- Open an instance of freeSSHd and go to the Users tab. Add or Change a login to use Public

Key (SSH only) authorization and enable Shell access

### 2. Navigate to the

Authentication tab. There you'll find the path to the folder in which to deposit your public keys Disable Password authentication and Require Public key authentication.

- Open the public key folder in Windows Explorer and create a new empty text file there by

the name of the login you've set up in step 1. Make sure the file name is exactly the same as the name of the user and don't add any file extension to it. This is where we'll be pasting the content of the SSH public key copied before: Connect from Putty: A continuación tengo que configurar Putty. Lo ejecuto.

En la sección Session introduzco los datos del servidor remoto: IP o host (campo «Host Name (or

```bash
IP address)«) y puerto (campo «Port«).
```

En la sección Connection -> Data introduzco el nombre de usuario (campo «Auto-login username») en el servidor remoto para el que estoy configurando las claves. En la sección Connection -> SSH -> Auth le indico la ubicación de la clave privada (extensión

.ppk) creada previamente. Ya solo me queda guardar la sesión con un nombre determinado, que en este caso será la IP del servidor al que me quiero conectar, ya que es un servidor de la red local y lo identifico fácilmente. Para ello voy a la sección Session, selecciono una sesión existente (o creo una nueva introduciendo el nombre en el campo «Saved Sessions«) y hago clic en el botón «Save«.

Ya tengo todo configurado. Para conectarme automáticamente al servidor bastará con que haga doble clic sobre la sesión guardada.

Connect from WinSCP To check it, In the Client machine install WinSCP. In the WinSCP Login screen go to SSH- Authentication and select the private_key file.
