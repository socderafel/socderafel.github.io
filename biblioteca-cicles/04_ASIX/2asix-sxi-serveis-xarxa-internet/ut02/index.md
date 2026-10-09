---
layout: default
title: "UT2 — Unit 2 - DNS — Serveis de Xarxa i Internet | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT2 Completa"
prev_url: "../ut01/ut01actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT1"
next_url: "../ut02/ut0201.html"
next_label: "2.1 U2 DNS ➡️"
---

# 📘 UT2 — Unit 2 - DNS (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**2.1 U2 DNS**](#ut0201) (o [obrir en pàgina individual ➡️](./ut0201.md) )
> - [**2.2 U2 P1**](#ut0202) (o [obrir en pàgina individual ➡️](./ut0202.md) )
> - [**2.3 U2 P2**](#ut0203) (o [obrir en pàgina individual ➡️](./ut0203.md) )
> - [**✍️ Activitats pràctiques UT2**](#ut02actividades) (o [obrir en pàgina individual ➡️](./ut02actividades.md) )

---

## 2.1 U2 DNS

> **📌 🏷️ Apunt de la Unitat**
> #### **Resources**

> **📌 🏷️ Apunt de la Unitat**
> #### **Tasks**

> **📌 🏷️ Apunt de la Unitat**
> #### **Practices**

---

SXI / NSI - UNIT 2 - DNS 2nd ASIX

2 ASIX - SXI Why do we need DNS?

- IP’s are used to identify machines in TCP/IP networks.
- Is not easy to memorize the IP’s of all the machines
- From your local network
- From all around Internet
- We can assign a name to our machine
- Then we need a mechanism to map from the name to the IP.
- The most important (and more used) mechanism is DNS.

2 ASIX - SXI Why do we need DNS?

- DNS service provides independency of the name from possible

changes in the IP Address of the machine.

- Even it’s possible to map a name to more than one IP’s.
- Geolocating
- In case of failure
- Load balancing
- We can check the IP of a URL by ping it through a terminal.

2 ASIX - SXI Why do we need DNS?

- In ARPANET already existed a mechanism to identify machines in the

network through a centralized file with all the machine names and their identifications.

- This file was hosts.txt, already known in GNU/Linux systems as

/etc/hosts

2 ASIX - SXI Why do we need DNS?

- This is useful for a specific machine, but if we need it in all our

network, we’d need to copy the file in every machine.

- Difficult to maintain. Not even possible for Internet.
- In Microsoft, also exists NetBIOS.

2 ASIX - SXI What is DNS?

- DNS is a service born in 1983.
- Contains associations between hosts (machines) names to IP

addresses.

- Client-Server model
- Server contains the service (or app) to resolve the name. Name server.
- Client usually doesn’t need a specific app.
- Dialog through DNS protocol.

2 ASIX - SXI What is DNS?

- Is a distributed database
- Info not in central repository, distributed through different DNS servers.
- Is hierarchical.
- Organized in a domain structures, which can be composed by subdomains,

which can also be composed by more subdomains and so until 127 levels.

- Each domain is managed by a DNS server (in charge of a zone)
- miPc.aula3.vicentFerrer.algemesi

2 ASIX - SXI What can resolve DNS?

- Local hosts
- We used to connect other machines through their names: pcGames, pcMaria,

impresoraEpson…

- Local domains (not in Internet)
- aula34, ficheros.servidorEmpresa…
- Internet domains
- gmail.com, youtube.com…

2 ASIX - SXI What types of DNS exist?

- Local DNS
- It’s in our local network. As DNS servers have a cache with previous queries,

can avoid traffic to outside our local network.

- Remote DNS
- When your Local DNS doesn’t have the resolution of the name, you can

access to remote DNS.

2 ASIX - SXI What types of DNS exist?

- The fastest we can resolve a name, the fastest Internet is.

2 ASIX - SXI DNS components

- Resolver: Client part. It sends the request through UDP, if doesn’t get

answer, it sends it through TCP.

- Name Server: Server part. It processes the requests of the resolvers and

returns the IP, a pointer to other server or an error. It has the DB.

- Domain Namespace: Set of names which can be used to identify machines.
- DNS protocol: Set of rules used by client and server to negotiate.

2 ASIX - SXI Domain Namespace

- Distributed DNS database consists in domain names.
- Each domain name is a inverted tree named domain namespace.
- Hierarchical names are composed by different values.
- The “tree” of names is very similar to a filesystem tree.

2 ASIX - SXI Domain Namespace

2 ASIX - SXI Domain Namespace

- Tree has a unique root node, represented by ”.”
- Each node of the tree can be ramified in any number of nodes in the lower

levels.

- Tree depth is limited to 127 levels. Normal is 5.
- Each tree, 63 chars. All domain, 255.
- Examples: google.com, pc01.xarxes.asix.es…

2 ASIX - SXI Domain Namespace

2 ASIX - SXI Domain Namespace

2 ASIX - SXI Domain Namespace

- This way, each node specifies unambiguously its location at the

hierarchy.

- This absolute domain name is called FQDN (Fully Qualified Domain

Name).

- All FQDN includes a . at the end (root node). If not, we are writing a

relative domain. pc22.asix.iesvf.com.

2 ASIX - SXI Domain Namespace

2 ASIX - SXI What’s a domain?

- Any subtree of the domain namespace. Each domain, can contain

more domains.

- iesvf.com is a domain and can contain subdomains asix, daw and

these can contain the hosts pc11,pc22, etc.

- These names are stored in resources registers, inside DNS servers

2 ASIX - SXI How is organized?

- Root domain: Represented by the . All domain names starts in here.
- Top Level domain (TLD): Direct descendants of the root. .com, .es,

.org, etc.

- ICANN is the organization in charge of the management of TLD and

root domains. In Spain, ESNIC.

2 ASIX - SXI How is organized?

2 ASIX - SXI How is organized?

- Second Level: Descendants of TLD.
- google.com, iesvf.es, etc.
- Others: From here, each level can generate as many levels as it needs.
- mail.google.com , maps.google.com, asix.iesvf.es, etc.
- At the end of the tree, usually we find the hosts that offer a service

like WWW, FTP or SMTFP. www.google.com

2 ASIX - SXI What’s delegation?

- One of the main objectives of DNS is the decentralized management.

We need to delegate to achieve it.

- A domain can be delegate or not.
- If a domain is delegated, is its responsibility to maintain updated the

data (resource registers) of the subdomain/s

2 ASIX - SXI What’s delegation?

- asix.iesvf.es
- .es domain is managed by an entity (ICAAN).
- This domain contain subdomain iesvf.es and it has delegated the

management to iesvf.

- iesvf can also delegate the management of the domain asix.iesvf.es

2 ASIX - SXI What’s delegation?

- Delegation does not mean independence but coordination.
- If a superior level is queried about one of its subdomains, this has the

task of query its subdomains.

- > delegate, > efficient, > speed.

2 ASIX - SXI What’s delegation?

2 ASIX - SXI What’s delegation?

- Delegation does not mean independence but coordination.
- If a superior level is queried about one of its subdomains, this has the

task of query its subdomains.

- > delegate, > efficient, > speed.

2 ASIX - SXI What’s a zone?

- Part of the domain namespace managed by one or more DNS servers.
- When a DNS server contains a zone its called authoritative for that

zone.

- Authoritative zone is the part of the domain namespace where a DNS

server is responsible. At least a domain and can include subdomains, but it’s better to delegate in other servers.

2 ASIX - SXI What’s a zone?

- 4 zones, 14 domains.

2 ASIX - SXI What’s a zone?

- A DNS server can has zones
- Primary: Read and write
- Secondary: Read
- Integrated in AD. Any DNS server can work as primary or secondary.

2 ASIX - SXI What’s a zone?

- Integrated zones in AD
- We “only” need a primary DNS server. Info is replied in AD.
- Everything act as a primary DNS server.

2 ASIX - SXI Standard zone vs integrated zone

2 ASIX - SXI Recap

- A domain is the tree of name space that include a node and its

descendants.

- A zone is the part of the tree managed by a DNS server.
- Zone database consist of files storing infor about machines of the zone.
- Delegation means to delegate the task of manage a subdomain to other

DNS.

2 ASIX - SXI Recap

2 ASIX - SXI Primary and secondary name servers

- DNS standard stablish a minimum of two authoritative servers per zone.
- Their names are primary server and secondary server.
- The reason is to provide redundancy, robustness, performance and backup.
- A server can be at the same time primary for a zone and secondary for

another zone.

2 ASIX - SXI Primary name servers

- Also called master server.
- Store information about its zone in a local database
- Are responsible of keep the info updated and any change has to be notified to

this server

- If a client or other DNS server ask about a domain that he is authoritative, he’ll

check the files and will answer. If he doesn’t know about it, will have to look for the info in other servers (or return null).

2 ASIX - SXI Secondary name servers

- Also called slave servers
- The main difference with the primary if that he gets the zone files from another

server through a process called zone transfer.

- Zone transfer is the process through which DNS interact to maintain and

synchronize data. Incremental or complete.

- These files in the secondary are read-only. Modification will be done in the

primary server.

2 ASIX - SXI Caching-only servers

- No authoritative.
- Only connect to other servers to resolve the client DNS request.
- Store a cache with previous request during a period of time (TTL)

2 ASIX - SXI DNS protocol

- Application level
- Usually use UDP but if the information is large, will use TCP.
- Port 53

2 ASIX - SXI DNS dabatase

- The “database” in the DNS server is just a file text.
- To resolve names, DNS servers check the zones, where they have the

RR (resource registers).

- Each RR describes the DNS domain.

2 ASIX - SXI DNS dabatase

- Each RR has the following format
- Owner [TTL] Class Type Rdata

obelix.asir.es 7200 IN A 193.100.200.101

- Owner: can be the name of the machine/domain, the @ symbol

(representing the zone) or a empty string meaning is the same than the previous RR.

2 ASIX - SXI DNS dabatase

- TTL: optional fields. Indicates how many time a register can be stored

in the cache. Can be expressed in days (d), hours (h), minutes(m) or seconds (s). If not, in seconds.

- Class: Define the family of protocols in use. Always ”IN” (Internet)

representing TCP/IP network.

2 ASIX - SXI DNS dabatase

- Type: Identifies the register type. Most common are
- SOA, NS, A, PTR, MX, CNAME…
- RDATA: Specific information of the resource type. It depends on the

type.

- i.e. A IN register with type A, this fields specifies the IP address.

2 ASIX - SXI Register types in RR: SOA

- Start Of Authority
- Identifies the authoritative server in the zone and its configuration

parameters.

- Configuration in each zone begins with this RR.

2 ASIX - SXI Register types in RR: SOA

- Fields in this type of register are
- MNAME: FQDN of the master server of the domain.
- RNAME of contact: mail of the responsible. Uses . instead of @
- Serial: Version of the zone file. This is the field queried by secondary servers

for checking if the zone has changed to begin with the zone transfer.

- Refresh: Time between queries from the secondary server.
- Retry: If the zone transfer has failed, time to wait until next try.
- Expire: If the secondary does not get a response from primary for this amount

of time, it should stop responding queries for the zone.

- TTL: Number of seconds a register is stored in the cache.

2 ASIX - SXI Register types in RR: SOA @ uses the zone name or the declared in the $origin var

2 ASIX - SXI Register types in RR: SOA

2 ASIX - SXI Register types in RR: SOA

2 ASIX - SXI Register types in RR: NS

- Name Server.
- Define the authoritative name servers for a zone.
- Each zone has to have, at least, one NS register.

2 ASIX - SXI Register types in RR: NS

- Are also used to indicate which are the authoritative name servers in

delegate subdomains so each zone will have at least one NS register per delegate subdomain.

2 ASIX - SXI Register types in RR: A

- Adress
- Assign an IP address to a FQDN.

2 ASIX - SXI Register types in RR: PTR

- PoinTeR
- Contrary to A. Assign a FQDN to an IP address

2 ASIX - SXI Register types in RR: CNAME

- Canonical Name.
- Allows us to create alias for domains specified in A registers.

2 ASIX - SXI Register types in RR: MX

- Mail eXchange
- We can add a MX register per mail server but is not mandatory.
- Are used by transport agents as SMTP.
- As a domain can has many mail servers, we can also include a numeric value

to indicate the order of “priority”

2 ASIX - SXI DNS queries

- As we’ve studied, both clients and servers asks (query) other server so resolve name

domains.

- Clients (resolvers) ask servers and server response with the IP (and we don’t mind

how he has got that IP) in a transparent way.

- Server not only has the power of resolve domains in its zone but also can resolve

queries about others zones where he is not authoritative

- Different types of queries.
- By query mode: iterative or recursive
- By query type: direct or reverse

2 ASIX - SXI Query types - By mode - Recursive

- A client queries something and when it does, in the query includes which

mode want to use.

- If the server hasn’t got the response in local cache or in RR, he will ask to

other DNS servers until it gets a response.

- At the end, it will always give a positive or negative response.

2 ASIX - SXI Query types - By mode - Recursive

- Example: a client queries the domain www.inf.iesvf.com
- If the first server does not know the domain, it will try to contact with the inf.iesvf.com

server name.

- If inf.iesvf.com does not know the domain, it will try to contact with iesvf.com domain

name server.

- If iesvf.com does not know the domain, it will try to contact with .com domain name

server.

- If .com does not know the domain, it will try to contact with root name servers. Once

there, it will try to search for them descending through the domain tree

2 ASIX - SXI Query types - By mode - Iterative

- When a client queries something, the server tries to find the response in its

local info (RR and cache).

- It never asks more servers. Returns a positive response with the info, a

negative response or a list of servers

- Usually, recursive and iterative modes are used together.
- Client to server recursive and server to server iterative.
- Avoid many queries in root nodes.

2 ASIX - SXI Query types - By type - Direct

- Client ask for a IP resolution from an URL (FQDN)

2 ASIX - SXI Query types - By type - Reverse

- From an IP, get a FQDN.
- Used to resolve network problems, detect spam in mail servers, look for the

trace of an attack, etc.

2 ASIX - SXI DDNS

- Dynamic DNS
- Until now, DNS registers are not supposed to change but now, DHCP is used

even in servers.

- What happens when a machine changes its IP?
- We’d need to update all RR with the new value
- DDNS is a service that synchronize DHCP and DNS

2 ASIX - SXI DDNS

2 ASIX - SXI Questions?

---

## 2.2 U2 P1

DNS Service Practices Primary DNS Service Configuration (MS Windows 2016). Observations – We continue with the same virtual machine. Disable the Windows Firewall. – The machine must be in bridge mode – First you must see the ip the dhcp offers you, and then put it manually in the server, to be able to navigate and to receive external requests. You can use the same ip address you used in Ubuntu.

If you are using the same virtual machine as in Unit 1, you must stop de dhcp service. Go to local services, click on “DHCP service” and select “Start type: manual” Network Services

DNS Service Practices Installation To install DNS in Windows 2016 server you must follow the steps in the Webpage: • https://www.tactig.com/install-dns-server-on-windows-server-2016/ Configuration To configure DNS Server follow Step by Step • https://www.tactig.com/configure-dns-server-windows-server/ CREATION OF THE FORWARD LOOKUP ZONE. Steps 1 to 8.

You’ll see three kinds of available zones: • Primary zone:is rewritten zone that is not copied from somewhere. • Secondary zone: is the copy of another zone, when you create a secondary zone you should copy the records from another source. • Stub zone: is providing information whatever server holds a special zone. We want to create a primary zone, then click on that then hit Next.

Create a new primary Forward lookup zone and name it “aula51yourname.com “ You will be asked about replication method. • The first option, (To all DNS servers running on domain controller in this forest: <domain name> is used when you want to replicate with the domains and subdomains in the forest but that increases the network traffic.

• The second option, (To all DNS servers running on domain controllers in the domain: <domain name> is used when you want your DNS server replicate with all DNS servers in in your own domain. Network Services

DNS Service Practices • The third option, (To all domain controllers in this domain (for Windows 2000 compatibility): <domain name> is used when you want your server replicate with only domain controllers in your own domain. Select the 2nd option. Hit Next. Be careful: In the next screen make sure the option “No admitir actualizaciones dinámicas” is checked.

The new zone: Right click on the name of the zone and select the option "Nuevo host A or AAAA" Network Services

DNS Service Practices NOTE: The PTR record can't be created in this moment because you don't have created the reverse lookup zone. So don't select it. • We already have the main information of the zone

- SOA record with the name of the zone and its configuration parameters
- NS record with the name of the primary server that manages the zone
- A record with the IP of the primary server .

Create an alias CNAME for the primary DNS. www.aula51name.com Now you can check the operation of your DNS server by using the "nslookup" command. CREATION OF THE REVERSE SEARCH ZONE. Network Services

DNS Service Practices Go to the step

- It is created the same as primary and secondary zones ...

until

- Refresh the Forward Reverse Zone node...
- Right-click “zonas de búsqueda inversa” and select “Zona Nueva” option.

### 2. Select “Zona principal” option

- Select IPv4 option and Siguiente.

Network Services

DNS Service Practices

### 4. Type the network prefix and 'Siguiente'

- Leave the default file, to save the database.
- Select “No admitir actualizaciones dinámicas” option and Siguiente.

Network Services

DNS Service Practices

- A summary of the configuration will be displayed. Make sure everything is set correctly and

click Finish.

### 8. At the moment we have the SOA and the NS record created, which indicates which

computer is the primary DNS server for the reverse zone. Now you have to associate an IP with the primary server, this is done through a PTR record. Right click on the name of the zone and select the "New pointer (PTR)" option. Network Services

DNS Service Practices Network Services

DNS Service Practices Secondary DNS Service Configuration (MS Windows 2016). Observations

- You must do this practice in another virtual machine with Windows 2016 installed.
- This machine must have the DNS installed, a fixed IP assigned and as the primary DNS server, the

IP of your primary server you have configured in the previous practice. Installation and Configuration FORWARD LOOKUP ZONE: Go to the step

- Now we’ll work on tactig-dns02 server...

until 11.Refresh the page clicking on the Refresh button ..

- Right-click on “Zona de búsqueda directa” - “Nueva Zona”.

### 2. The wizard will be displayed to create the new zone

Network Services

DNS Service Practices

- Select “Zona secundaria” option and Siguiente.

### 4. En zone name type the same name you type in the primary DNS server, that is,

“aula52<your_name>.com”.

- Then you must indicate the (FQDN) or the IP of your primary DNS server and Siguiente.

Network Services

DNS Service Practices

- Finally you will see a summary of the configuration. If it is correct press the "Finalizar"

button.

- At the moment the zone transfer fails, since we have not assigned in the primary DNS server

nor the secondary name server (NS record) nor its IP (A Record). To solve it go to the primary DNS server. Double-click on the SOA record and select the "Servidor de nombres" tab and the "Agregar" button. Type the name of the PC that acts as the secondary DNS and click on the "Resolver" button and "Aceptar" button twice.

Network Services

DNS Service Practices Now add the A record. To do this on the forward lookup zone, select the "Host Nuevo (A or AAAA)" option. Enter the host name that acts as the secondary DNS server and its IP address. And click on “Agregar host”.

- Click on “Actualizar zona”.
- Finally from the primary server we must allow zone transfer.

Network Services

DNS Service Practices • Go to the forward lookup zone and over the corresponding zone click the right button and choose Properties. • Click the Zone Transfers tab. • Select the “Permitir transferencias de zona” check box, and then click on the first option. • A cualquier servidor • Sólo a los servidores nombrados en la ficha Servidores de nombres • Sólo a los siguientes servidores.

10.In the secondary DNS server, go to the name of the zone and right-click on “Transferir desde el principal” option. Now the primary DNS records have been transferred to the secondary. Something similar to the following image is displayed. REVERSE LOOKUP ZONE

### 1. Right-click on “Zona de búsqueda inversa” - “Nueva Zona” option. The wizard will be

displayed to create the new zone. Network Services

DNS Service Practices

- Select the “Zona secundaria” option and Siguiente.
- Select IPv4 and Siguiente.

### 4. In the “identificador de red” field, type the prefix of your Network and Siguiente

Network Services

DNS Service Practices

### 5. Type the Primary DNS Server name or IP

- Finally the configuration summary will be displayed. If it is correct, click on the "Finalizar”

button.

- At the moment the zone transfer fails, since we have not assigned in the primary DNS server

nor the secondary name server (NS record) nor its pointer (PTR Record). To solve it go to the primary DNS server. Double-click on the SOA record and select the "Servidor de nombres" tab and the "Agregar" button. Type the name of the PC that acts as the secondary DNS and click on the "Resolver" button and "Aceptar" button twice.

Network Services

DNS Service Practices

- Now add the PTR record. To do this on the reverse lookup zone, select the “Nuevo puntero

(PTR)...” option. Enter the secondary DNS Server IP and its FQDN Network Services

DNS Service Practices

### 9. Finally, the configuration must be similar to the following image

10.To save the changes go to the server name and Click right button on “Actualizar”option. 11.Check the transfer zone. You must be something similar to the following image. 12.Finally, you must configure the client with the IP of the primary DNS and secondary DNS.

Network Services

---

## 2.3 U2 P2

DNS Service Practices

```bash
Service DNS Installation (Ubuntu 18.04)
```

Observations: – DNS service in Ubuntu is named Bind9 – The machine must be in bridge mode – First you must see the ip the dhcp offers you, and then put it manually in the server, to be able to navigate and to receive external requests – The configuration files for this service are in: /etc/bind (/ slash and \ back slash ) Change DNS in Ubuntu and Derivatives Important note about DNS in Ubuntu

Until 16 version: Source: http://sobrebits.com/cambiar-dns-en-ubuntu-12-04-y-posteriores/ In Ubuntu from version 12.04 if we try to make changes to our DNS configuration we will see how they are reversed after a while, always assigning us a DNS: 127.0.0.1 (for 12.04 and derived versions) or 127.0.1.1 (for 12.10 and derived versions).

Why can not we change

DNS

in Ubuntu and derivatives? This is not an error, that is obvious, since we can navigate perfectly, so down there is something resolving names. This is dnsmasq a lightweight DNS server managed by Network Manager (the connection manager that incorporates the distribution). It is for this reason that our DNS configuration will point to our own machine, because we ourselves are "resolving" names.

This is fine, for the home user should not have more inconvenience, in fact this function was implemented to improve the speeds in name resolution VPN connections, since traffic is saved by that channel, which can be reduced width band. The problem comes when in our local network there is a DNS server that we want / must use.

Network Manager will automatically overwrite the DHCP-assigned DNS configuration or manually by the addresses 127.0.0.1 or 127.0.1.1. If we want to use another DNS server before we must make Network Manager no longer use their own. Disable dnsmasq in

Network

Manager After the theory we go to the practical part, which is very simple. Network Services

DNS Service Practices To change the DNS in Ubuntu 12.04 and later we must edit the Network Manager configuration file

```bash
$ sudo nano /etc/NetworkManager/NetworkManager.conf
```

And comment on the corresponding line

```bash
# dns=dnsmasq
```

Ctrl + O to save changes and Ctrl + X to exit Now, we must restart the PC or restart the Network Manager

```bash
$ sudo restart network-manager
```

Once this is done, our system will start receiving the DNS in the usual way. Ubuntu 18 version: Step 1: Install a package resolvconf, which will modify the way /etc/resolv.conf is built up at system boot.

```bash
sudo apt install resolvconf
```

Create or modify a file with tail name

```bash
sudo nano /etc/resolvconf/resolv.conf.d/tail
```

Write this line: nameserver 8.8.8.8 Then this line will be added at the end of /run/resolvconf/resolv.conf at boot. /etc/resolv.conf will now be a symbolic link to this file. Step 2: in /etc/systemd/resolved.conf setting DNSStubListener=no and then restart the systemd- resolved service. It will then start without binding to port 53, allowing dnsmasq to bind instead.

Network Services

DNS Service Practices Server Installation

- Make sure you have the updated package database.

```bash
# sudo apt-get update
```

- Install DNS service in your virtual machine.

```bash
# sudo apt-get install bind9
```

#### 3) To start the service execute the command

```bash
# sudo /etc/init.d/bind9 start
```

With Stop or Restart you can start or restart NOTE: Actually you don't have the service configurated. It's only installed. Network Services

DNS Service Practices Primary DNS Service Configuration (Ubuntu 16.04). Install WEBMIN tool – Source: http://www.unixmen.com/install-webmin-ubuntu-14-04/ – Definition: Webmin is an open source, web based system administration tool for Unix/Linux. Using Webmin, you can setup and configure all services such as DNS, DHCP, Apache, NFS, and Samba etc via any modern web browsers. So, you don’t have to remember all commands or edit any configuration files manually.

Installation Add the webmin official repository: Edit file /etc/apt/sources.list,

```bash
sudo nano /etc/apt/sources.list
```

Add the following lines: deb http://download.webmin.com/download/repository sarge contrib deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib – Add the GPG key

```bash
sudo wget http://www.webmin.com/jcameron-key.asc
sudo apt-key add jcameron-key.asc
```

Update the sources list

```bash
sudo apt-get update
```

Install webmin using the following command

```bash
sudo apt-get install webmin
```

Allow the webmin default port “10000” via firewall, if you want to access the webmin console from a remote system.

```bash
sudo ufw allow 10000
```

Access webmin: Open up your browser and navigate to the URL https://your-ip-address:10000 (or localhost) Network Services

DNS Service Practices If you want to change Language to Spanish: You should click “Configuration Language” Button, “Change Language” and Refresh Browser. Primary server configuration In the left menu you see "Servers". There must be access to the DNS server. If it is not displayed press the "Refresh Modules" option.

In the left menu of the screen select "DNS Server Bind". It should show something similar to the following image. Network Services

DNS Service Practices From the main screen, select the "Create a new master zone" option.

- Make sure the "Forwarding (Names to addresses)" option is selected.
- Set it as the name of the zone "aula52<your_name>.com”.
- In "Master Server" type the name of your PC followed by the domain name.
- “Mail address”, write for example: admin@ aula52<your_name>.com

Once you have entered the correct configuration, click on the "Create" button. The following screen shows the configuration records for the DNS server forward lookup zone. Network Services

DNS Service Practices Note that we have already configured the SOA record and the NS record. To see the configuration information make click on “Edit DNS Records File”. In order for the DNS server to work, we need at least to add a record A to have the association Computer name -> IP address. Select 'Add records to zones'

Select "Address" and complete the fields with the name of your computer followed by the domain you are configuring and the static IP assigned to your machine. The end point is added only if you forget it. Click on the button “Crear”. Network Services

DNS Service Practices On the primary server we will create a CNAME record to include the alias of the computer "profesr_VirtualBox".

- Click on “Alias de Nombre”.
- As we want the name of the computer that is shown on the Internet is "www", in "Alias

name" we will write: "www. aula52 <your_name> .com ". The DNS configuration file should contain information similar to the one shown in the following image. After the creation of the zone, apply the changes. Note: Change in the “tail” file the name server with your IP Address You only need to verify the operation of the zone by executing the command dig, for example: (for more information on commands see annexe at the end of the Unit)

dig google.es dig @192.168.1.99 google.es where @192.168.1.99 indicates the DNS server IP Network Services

DNS Service Practices Or the command “nslookup”, for instance: nslookup google.es nslookup google.es 192.168.1.99 where @192.168.1.99 indicates the DNS server IP Create reverse lookup zone

- Set PTR record for reverse resolution.

First create the reverse resolution zone by selecting the "Create a new master zone" option from the main menu of the DNS server. When creating the reverse zone you must select the option "Reverse (Addresses to Names)". Note that in this case we no longer indicate the domain name but the network.

Once completed the fields click on "Create". A new zone has been created, but now it will resolved from IP to name. Network Services

DNS Service Practices If you click on "Name Servers" of the registers of the reverse resolution zone, you can see something similar to... Now add the address registers for the reverse resolution by selecting the "Reverse address" option from the reverse resolution zone registers, to add the DNS server address.

The following register will be created. In case of having more servers in our network, we would add their IP address and computer name. When configuring the reverse zone, the file for this zone has been created, /var/lib/bind/192.168.1.rev, with the following information

Network Services

DNS Service Practices Now, you must apply changes. To verify the operation of the zone, you can execute the command dig, for example: dig -x google.es Choose one of the addresses shown, for example, 173.194.45.163 and run the following command: host 173.194.45.163 Where 173.194.45.163 is the IP address we want to solve, You should see something similar to the following image

In case of error, you should check that the DNS server is active, to do this

- You can verify that it is running. You should get a result like the following

profesr@profesr-VirtualBox:~$ sudo /etc/init.d/bind9 status [sudo] password for profesr

- bind9 is running
- Or check that you are listening for the correct port, that is, port 53. To do this use the following

command and look the first line. Network Services

DNS Service Practices Note that the result indicates that the server is listening on port 53 and is therefore active. Network Services

DNS Service Practices Secondary DNS Server Configuration (Ubuntu 18.04). Observations – You can work on your computer with your domain and cloning the machine that contains the primary domain: • /etc/resolv.conf in the Primary DNS server must be the ip address of the Primary machine • /etc/resolv.conf in the Secondary DNS server must be the ip address of the Primary machine. And the static IP address configuration must include the ip address of the Primary machine as the DNS – Change the IP address in the secondary and Delete both primary zones: forward and reverse.

Change the computer name Secondary server configuration

#### 1) Access to webmin in the secondary server computer

- First of all create slave zone.

Select option “Crear una nueva zona subordinada”: Network Services

DNS Service Practices You can check the file /etc/bind/named.conf.local where the secondary zone has been added.

#### 3) Get on the PC that acts as primary DNS server

In the "/etc/bind/named.conf.options" file on the primary server, add the line: allow-transfer { Secondary_DNS_Server_IP; }; before the last symbol “}” For instance: allow-transfer { 192.168.1.98; };

#### 4) Add in the primary server, the secondary server as a name server

#### 5) Add in the primary server, the secondary DNS server IP(as an address)

Network Services

DNS Service Practices

- Apply changes in both servers and restart service.

```bash
sudo service bind9 restart
```

- In the secondary server click “Realizar test de transferencia de zona”.

Note the registers from the primary zone are tranfered to the secondary zone

- Check the operation of the secondary server using the command dig or nslookup.

dig @192.168.1.98 google.es NOTE: Replace the IP of the example, by the IP of the secondary DNS server.

- Configure a client to use the primary and secondary server. Make sure it has an Internet

connection. Network Services

DNS Service Practices EXERCISE: Do the same to create a new reverse slave zone. In this case, you have to create two records in the primary reverse zone: a NS record and a PTR record, corresponding to the secondary server. Network Services

DNS Service Practices COMMANDS DNS ANNEX dig It is a very useful name resolution tool in Linux environments. For ex: Dig google.es In this case we are performing a recursive query of the domain google.es, so the server will forward the query, and then collect the information and show it.

You can see in the following image the addresses of the servers that have been used to consult the desired information about the domain name "google.es". And at the end you can also see the address of the server that responds with the information obtained after forwarding the query (192.168.1.94).

dig -x 192.168.1.220 With this we get the reverse resolution. That is, we will resolve the domain name from the IP. I remind you that the queries are by default recursive (the server asks the DNS and returns the desired information). But with this command: Network Services

DNS Service Practices -dig google.es +trace We can observe an example of an iterative query, that is, it returns the available information about our query and a list of servers that can complete the desired information. Network Services

DNS Service Practices nslookup It also allows queries about DNS. It has 2 modes: Interactive mode and non-interactive mode. The non-interactive mode is executed like this: nslookup nombre_de_dominio for instance: nslookup google.es nslookup eltallerdelbit.com The result of a query will be something like

The interactive mode consists in execute: nslookup And then the cursor will change and we can enter domain names and ip's one after another. Network Services

---

## ✍️ Activitats pràctiques UT2

> **✍️ Activitat Pràctica 2.1 — U2 A1**
> Unit 2 – DNS
>
> U2 – A1
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Using your Linux machine terminal, make a ping to www.bing.com. Add
>
> the screenshot and circle where you can find the “real” ip of the site.
>
> ### 2. Search on the Internet at least 3 applications used to manage the DNS
>
> server and write the main differences between them.
>
> ### 3. What’s the nslookup command for? What’s its syntax?
>
> ### 4. Use the nslookup syntax to www.yahoo.es and add a screenshot of the
>
> result. What’s the meaning of the two first lines? And the others?
>
> ### 5. Create in Packet Tracer a network with 2 computers and a server
>
> connected through a router. Turn on the DNS service and add a screenshot of the service turned on and working (not has to be configured yet).

> **✍️ Activitat Pràctica 2.2 — U2 A2**
> Unit 2 – DNS
>
> U2 – A2
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Using Wireshark, start capturing packets with Wireshark while accessing
>
> to www.google.com.
>
> - What’s the flags status?
> - What’s the response?
> - Do the same by accessing to an URL that does not exist.
> - Study and compare the results with the previous data.
>
> ### 2. Using you name and surnames, look for the domain in three different
>
> agents and
>
> - Check if its available
> - Compare three prices and conditions
> - Choose one and complete all the steps until the payment step.
>
> Add screenshots of every step.
>
> ### 3. There are many applications and software to provide DNS service (apart
>
> from Windows Server). Search on the Internet software for Linux that works as DNS server and write the remarkable features (at least 3).
>
> ### 4. What is the host command used for in Linux? Explain with detail each part
>
> of the response of using host -a uoc.edu and add a screenshot.
>
> ### 5. What is webmin? Explain the main functionalities and how it works. Is it
>
> possible to include some of the applications found in the U2A1? Which one? How?

> **✍️ Activitat Pràctica 2.3 — U2 A3**
> Unit 2 – DNS
>
> U2 – A3
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. In a Linux machine with access to Internet, run the following command
>
> dig @8.8.8.8 www.garceta.es +trace
>
> - What’s this command used for? Explain each part of the command.
> - Add a screenshot of the result
> - Analyze the result.
>
> ### 2. In a Linux machine with access to Internet, run the following command
>
> dig @8.8.8.8 www.google.es SOA
>
> - What’s this command used for? Explain each part of the command.
> - Add a screenshot of the result
> - Analyze the result.
> - What’s the update time for secondary servers in google.es zone?
>
> ### 3. In a Linux machine with access to Internet, run the following command
>
> dig @8.8.8.8 www.google.es NS
>
> - What’s this command used for? Explain each part of the command.
> - Add a screenshot of the result
> - Analyze the result.
> - Is there any authoritative servers for google.es domain which DNS
>
> name is not in the domain?
>
> ### 4. In a Windows machine with access to Internet, run the following command
>
> tracert -d www.google.es.
>
> - What’s this command used for? Explain each part of the command.
> - Add a screenshot of the result
> - Analyze the result.
> - Now use the command without the -d option. What’ve changed?
>
> Unit 2 – DNS

> **✍️ Activitat Pràctica 2.4 — U2 A4**
> Unit 2 – DNS
>
> U2 – A4
>
> Instructions
>
> - Remember to copy both, questions and answers.
> - Deliver the document in .pdf
> - Send the document through the task in Aules.
>
> ### 1. Search in Internet at least 2 recent DNS attacks news. Read, add the links
>
> and explain the new with your own words (3-4 lines each one).
>
> - What is a Pharming attack? Explain it with your own words.
>
> ### 3. What is footprinting in DNS and how it works?
>
> ### 4. Explain with your own words what’s the difference between primary and
>
> secondary servers.
>
> ### 5. Explain with your own words what’s the difference between iterative and
>
> recursive queries.
>
> ### 6. Explain with your own words what’s the difference between direct and
>
> reverse queries.
