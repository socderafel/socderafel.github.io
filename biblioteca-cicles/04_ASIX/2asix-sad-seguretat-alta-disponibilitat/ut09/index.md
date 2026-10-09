---
layout: default
title: "UT9 — Setmanes Del 8 al 21 de Gener — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT9 Completa"
prev_url: "../ut08/ut08actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT8"
next_url: "../ut09/ut0901.html"
next_label: "9.1 Firewall_i_Proxy ➡️"
---

# 📘 UT9 — Setmanes Del 8 al 21 de Gener (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**9.1 Firewall_i_Proxy**](#ut0901) (o [obrir en pàgina individual ➡️](./ut0901.md) )
> - [**9.2 HA - Alta_Disponibilitat**](#ut0902) (o [obrir en pàgina individual ➡️](./ut0902.md) )
> - [**✍️ Activitats pràctiques UT9**](#ut09actividades) (o [obrir en pàgina individual ➡️](./ut09actividades.md) )

---

## 9.1 Firewall_i_Proxy

> **📌 🏷️ Apunt de la Unitat**
> #### UD 7 Firewall i Proxy

> **📌 🏷️ Apunt de la Unitat**
> #### UD 8 Alta Disponibilitat

---

FIREWALL I PROXY

Tallafocs Un firewall, o també conegut com a tallafocs, és un sistema maquinari i/o programari que s'encarrega de monitorar totes les connexions entrants i eixints de diferents xarxes, amb l'objectiu de permetre o denegar el trànsit entre les diferents xarxes. Tipus de Firewall (funcionalitat) Stateless cortafuegos-con-estado-vs-sin-estado Stateful Aplication Level Gateway ALG Next Generation Firewall ngfw

Tipus de Firewall (abast) Personal: ufw gufw tinywall zone alarm firewall de Windows Domèstic: Router SOHO Corporatiu: ●Per HW ( CISCO, Sophos, WatchGuard, Fortinet, PaloAlto, ..) ●Per SW Distribucions especialitzades. IPCop, IPFIRE, pfSense ●WAF - Web Application Firewall (protegix de SQLi, XSS, DoS(web), CSRF) Dispositius UTM utm-firewall-ha-ido-al-gimnasio «Unified Threat Management» o Gestión Unificada de Amenazas

Firewall Personal El Firewall personal és una programa o servei instal·lat en l'ordinador a protegir

Firewall Corporatiu El Firewall corporatiu és una maquina amb almenys dues interfícies de xarxa. Protegeix una xarxa.

Tipus de Firewall Corporatiu Host Controlat La DMZ és un sol Host, i està desviada per el router de l’ISP Host Dual-Homed El Firewall és una màquina amb DOS interfícies

Tipus de Firewall Corporatiu Screened Host La DMZ està apantallada per un host (màquina) Screened Subnet La DMZ està apantallada per una xarxa

Firewall Corporatiu (amb DMZ) El Firewall Screened Host té almenys tres interfícies de xarxa. ● Roja -> Internet / Wan ● Verda -> LAN / nostra xarxa local ● Taronja -> DMZ / servidors exposats

Firewall Pràctica: Instal·lar gufw en Ubuntu

Instal·lar tinywall en Windows

Instal·lar ZoneAlarm en Windows Pràctica: Instal·lar IPCop (fer màquina virtual ) Instal·lar IPFIRE (fer màquina virtual) Instal·lar pfsense (fer màquina virtual)

Firewall Pràctica: Busca informació i investiga com funciona iptables

Honeypot Un Honeypot (pot de mel) es refereix a una eina de seguretat (normalment un PC, o diversos PCs amb un cert programari) usat com a sistema de detecció i registre de dades d'atacs informàtics en una xarxa. Hi ha xarxes completes de honeypots interconnectades i dedicades en exclusiva per a ser potencials objectius d'atacs. A aquestes xarxes se les denomina Honeynets.

Honeypot Hi ha principalment dos diferents tipus de Honeypots depenent de la seva funció: ➔els de baixa interacció: El programari del honeypot simula el sistema operatiu amb les seves vulnerabilitats, solen usar-se com a mesura de prevenció i alerta. La seva principal funció és alertar quan es produeix un atac a una xarxa o un sistema, disposant diverses solucions per a impedir que l'atacant prengui algun control sobre aquest.

➔i els d'alta interacció: El sistema operatiu és real però no manté cap procés de producció real, solen usar-se com a mètode de recerca, recaptant dades com que tipus d'arxius són els més buscats per un atacant, activitats dins del sistema, eines usades, possibles danys en el sistema, adreça IP de l'atacant, etc...

Honeypot Detecció d’atacs en un honeypot ➔La detecció de trànsit d'entrada significatiu és ja un senyal d'atac ➔Si es detecta trànsit de sortida => el honeypot ha estat compromès i està sent usat per l'atacant ➔Alguns honeypots fan creure a l'atacant que ha aconseguit comprometre el sistema ➔El honeypot és un complement de seguretat que permet detectar patrons per als quals encara no hi ha una signatura per al IDS ➔Un honeypot també pot usar-se per a la detecció de l'activitat de cucs i altres malware que fan un alt ús de la xarxa amb la finalitat d'explotar vulnerabilitats que no han estat posades pegats

Honeypot Avantatges d’un honeypot ➔Les dades que ofereixen sempre procedeixen d'atacs pel que tenen menys falsos positius que els IDS ➔Requereixen pocs recursos i capturen poques dades ➔Són sistemes simples, no requereixen ni actualitzacions ni manteniment significatiu Desavantatges d’un honeypot ➔Només veuen els atacs en contra seva, per tant no detecten altres atacs a la xarxa ➔Poden ser detectats pels atacants i enganyar l'administrador perquè pensés que la seva xarxa està sent atacada ➔Poden ser utilitzats com a plataforma per a atacar a la xarxa

Honeypot El honeypot no ajuda a la prevenció, però si ajuda a la detecció d'atacs Proporciona ajuda a l'administrador per a triar les eines adequades per a contrarestar atacs http://www.elladodelmal.com//t-pot-una-colmena-de-honeypots-para.html

Honeypot Alguns Honeypots ●Cowrie ●Honeytrap ●Tanner ●Dionaea ●Adbhoney ●Redishoneypot ●Ciscoasa ●Heralding ●ConPot ●CitrixHoneypot ●.....

Proxy Definició Un proxy és un equip informàtic que fa d'intermediari entre les connexions d'un client i un servidor de destí, filtrant tots els paquets entre tots dos La pàgina que es visita no sabrà la IP origen sinó la del proxy, i podràs fer-te passar per un internauta d'un altre país diferent al teu

Proxy Tipus Proxy Web Proxy Cau Proxy Invers Proxy Transparent

https://hide.me/es/proxy https://www.vpnbook.com/webproxy Configurar client Windows 10 – configuració – red – proxy On aconseguir adreces de proxy https://hidemy.name/es/proxy-list/

Proxy Instal·lació Servidor Servidor proxy squid Suporta, entre altres, els protocols HTTP, HTTP/2, HTTPS y FTP Funciona en Linux, macOS y Windows Configuració de filtres Configuració de cau

```bash
sudo apt-get update
sudo apt-get install squid
```

Consells finals Protegir la xarxa. STP, Link Aggregation, Port Security, VLAN, ... Instal·lar i configurar tallafocs. Fer un bon disseny perimetral. Activar comunicacions xifrades sempre que es puga (https, sftp, ssh, etc..) Tancar ports (serveis) no utilitzats Instal·lar un IDS Configurar ACL’s en Encaminadors i Seguretat de ports en Switch Actualitzar microprogramari (firmware) dels equips de xarxa Utilitzar eines de detecció de bootnets (OSI) Davant un incident -> CERT

---

## 9.2 HA - Alta_Disponibilitat

ALTA DISPONIBILITAT

DEFINICIONS HA (High Availability): És un protocol de disseny del sistema que assegura un cert elevat grau de continuïtat operacional durant un període de mesurament donat L'alta disponibilitat és la capacitat que té un sistema de T.I. per a ser accessible i de confiança quasi tot el temps, la qual cosa elimina o disminueix el temps d'inactivitat Conceptes

Fallada, error, avaria Downtime, Uptime MTBF ( temps mitjà entre fallades ) , MTTR (.. entre reparació) SPoF (Punt únic de fallada) -> redundància

DEFINICIONS HA (High Availability): AD (Alta Disponibilitat) Exemples d’elements d’AD

DEFINICIONS Càlcul de disponibilitat: S'expressa com el percentatge de minuts de funcionament sobre el total d'un any, segons la següent expressió: Tdisponible = Hores compromeses de disponibilitat. Tinactivo = Nombre d'hores fora de línia (correspon a les hores de "caiguda del sistema" durant el temps de disponibilitat compromés).

Per a sistemes altament disponibles, la disponibilitat es categoritza com a número de nous (9) de la ràtio obtinguda: “tres nous”, “quatre nous”, “cinc nous” SLA Disponibilitat (%)= Tdisponible Tdisponible +Tinactiu x 100

DEFINICIONS • 99,9% = 43 minuts/mes o 8,76 hores/any ("tres nous") de sistema no disponible. • 99,99% = 4,4 minuts/mes o 32,6 minuts/any ("quatre nous") de sistema no disponible. • 99.999% = 0,4 minuts/mes o 5,3 minuts/any ("cinc nous") de sistema no disponible. La disponibilitat ha de ser monitorada amb eines especials.

Acords SLA (Acords de nivell de servei)

```bash
Service Level Agreement
```

Disponibilitat (%)= Tdisponible Tdisponible +Tinactiu x 100

COMPONENTS D’UN SISTEMA DE HA 1. Elements de l'entorn. a. Alimentació. b. Humitat i temperatura. c. Seguretat d'accés. 2. Equipaments de processament de dades. a. Redundància. b. Configuració del programari. 3. Equipaments d'emmagatzematge, a. DAS, NAS, SAN. b. RAID, cintes, etc. c. Equips de còpia de seguretat (suport de dades).

4. Xarxa a. Cablejat estructurat. b. Redundància i balanceadores de càrrega. c. Firewalls i IDS. 5. Sistemes de monitoratge, alertes i gestió d'acords SLA. 6. Redundància del CPD 7. Aliances amb proveïdors d'equips i serveis. 8. Polítiques internes. 9. Equips humans d'atenció i suport.

- Directives empresarials.

PRINCIPIS BÀSICS DE DISSENY DE HA

### 1. REDUNDÀNCIA

### 2. RECUPERACIÓ

### 3. MINIMITZACIÓ DEL MTTR (Mean Time To Repair)

### 4. PREDICCIÓ I PREVENCIÓ DE FALLADES

SISTEMES TOLERANTS A FALLADES FAULT-TOLERANT Capacitat de continuar donant servei després d'una fallada FAILOVER (canvi a suport davant fallada) Temps de failover TOLERÀNCIA PER REPLICACIÓ (Actiu / Actiu) TOLERÀNCIA PER REDUNDÀNCIA (Actiu / Passiu ) Configuració actiu/passiu (A/P) (Existeix un node passiu, que s'activa en produir-se fallada) Configuració actiu/actiu (A/A) (load balancer) RECUPERACIÓ DE DESASTRES

SISTEMES TOLERANTS A FALLADES

- ELEMENTS

Fonts d’alimentació redundants SAI / UPS redundants amb línies d’electricitat redundants Grups electrògens Equip humà de resposta 24/7 Connexions a xarxa elèctrica redundants (amb diferents proveïdors) Connexions a xarxa INTERNET redundants ( amb diferents ISP) Balancejadors Sistemes en Clusters

BALANCEJADORS DE CÀRREGA Dispositiu Hw o Sw que es posa al capdavant d'un conjunt de servidors que suporten una aplicació i que assigna o balanceja les sol·licituds dels clients Afinitat del balancejador: Prendre el control de les sessions/connexions per a accedir al servidor adequat

SISTEMES EN CLUSTER ELEMENTS Nodes Interconnexió dels nodes ( xarxa privada) Sistema d'emmagatzematge Connexió a xarxes externes al clúster Gestor de clúster ( Clúster Manager)

SISTEMES EN CLUSTER ELEMENTS Nodes Interconnexió dels nodes ( xarxa privada) Sistema d'emmagatzematge Connexió a xarxes externes al clúster Gestor de clúster ( Clúster Manager)

SISTEMES EN CLUSTER DAS NAS SAN DAS - Direct Attached Storage NAS - Network Attached Storage SAN - Storage Area Network

DAS - Direct Attached Storage .

NAS - Network Attached Storage .

SAN - Storage Area Network

SAN - Storage Area Network Elements: Fibre Channel Switch: dissenyat per a xarxes d'àrea d'emmagatzematge (SAN), és una tecnologia de xarxa d'alta velocitat que s'utilitza per a connectar l'emmagatzematge de dades de la computadora als servidors, proporcionant interfícies punt a punt, commutades i en bucle per a lliurar les dades en brut sense pèrdues i en ordre.

HBA: (adaptador de bus del host) , connecta un sistema servidor (computadora) a una xarxa de computadores i dispositius o unitats d'emmagatzematge.

SAN - Storage Area Network Tecnologies per a xarxes SAN

- Xarxes Fibre Channel o FC

◦ FC-P2P ◦ FC-AL (arbitrari) ◦ FC-SW (fabric)

- Xarxes iSCSI
- Xarxes FCoE

SAN - Storage Area Network Tecnologies per a xarxes SAN

- Xarxes Fibre Channel o FC

◦ FC-AL ◦ FC-SW

- Xarxes iSCSI
- Xarxes FCoE

SISTEMES EN CLUSTER (conceptes) ELEMENTS Failover Heartbeat Split brain Quòrum Recurs Agent del recurs El CM (Clúster Manager) actua Designa un node principal, que serà la cara a l'exterior Detectar caiguda de nodes i failover Si la caiguda és del node primari, designar un nou node primari

SISTEMES EN CLUSTER (middleware) SOFTWARE QUE RESIDEIX EN CADA NODE o Single System Image SSI o Service Availability

TOPOLOGIES BÀSIQUES DE CLUSTER

- TOPOLOGIA DE PARELLS CLUSTERITZATS
- TOPOLOGIA DE CLÚSTER N+1
- TOPOLOGIA DE CLÚSTER PARELL+N

TIPUS BÀSICS DE CLUSTERS • ALTA DISPONIBILITAT (Cluster HA High Availability) • ALTA EFICIÈNCIA (Clusters HT, High Throughput ) • ELEVADA CAPACITAT DE CÁLCUL (Clusters HPC) Cluster failover (HA). Mecanisme failback Cluster Load-Balancing (HA) Cluster High Performance Computing (HPC) Clusters Científics Clusters IT

SPLIT BRAIN Situació pel qual 2 o més nodes del clúster prenen el control en quedar-se aïllats. Això provoca corrupció de dades i dessincronització Solució: Quòrum (Recurs compartit i accessible per tots els nodes del clúster) Fencing: Node actiu que ha deixat de pertànyer al clúster fins que se solucionin els problemes

RECURSOS COMPARTITS DEL CLUSTER SAN Utilització de Dispositius de blocs DRDB (Replicació de dades en recursos locals, Linux ) Clusters de Balanceig de Càrrega ( sense dades compartides )

TECNOLOGIA GRID COMPUTING Un grid és una malla d'ordinadors interconnectats entre si a través d'Internet amb capacitat de procés paral·lel. Utilitzen programari específicament preparat per a ser usat en el grid. Són molt utilitzats en computació científica. Els nodes que componen un grid estan feblement acoblats entre si i són essencialment heterogenis, a diferència dels quals componen un clúster que han de ser bastant homogenis i amb configuracions semblants quan no idèntiques.

GRID COMPUTING – COMPUTACIÓN EN MALLA En la computació grid, les xarxes poden ser vistes com una forma de computació distribuïda on un “supercomputador virtual” està compost per una sèrie de computadors agrupats per a fer grans tasques Podem trobar projectes en els quals formar part de manera voluntària en diferents pàgines. Una d'elles BOINC, ofereix la participació en diferents projectes.

https://boinc.berkeley.edu/ Exemple de Projecte: PROYECTOS A LOS QUE PUEDES DONAR PROCESAMIENTO

VIRTUALITZACIÓ Per virtualització s'entén l'abstracció dels recursos d'un sistema, anomenada Hypervisor o VMM (Virtual Machine Monitor) que crea un embolcall de programari (capa d'abstracció) entre el maquinari de la màquina física (host) i el sistema operatiu de la màquina virtual (virtual machine, guest).

Virtualització assistida per maquinari: Intel-VT AMD-V Màquina virtual de maquinari o de sistema: Són les que corren sobre una màquina física amfitrió o host. Propietats: • Particionament. Múltiples màquines virtuals es poden executar en el mateix equip físic, aprofitant millor els recursos de maquinari.

• Aïllament. La virtualització assigna espais independents per al maquinari virtual de cada màquina virtual, controlant l'assignació de recursos, per la qual cosa cada màquina virtual corre aïlladament encara que comparteixin maquinari físic. • Encapsulació. Les màquines virtuals es gestionen com a arxius, per la qual cosa salvar un sistema és salvar un conjunt de fitxers.

VIRTUALITZACIÓ - Tipus Màquina virtual de procés o de aplicació: S'executa com un procés més del sistema. El seu objectiu fonamental és proporcionar un entorn d'execució independent del maquinari i del propi sistema operatiu per a les aplicacions que executaran • JVM (java) • CLR (.NET) Hipervisor: És un petit monitor (capa de programari per a l'abstracció del maquinari o capa de virtualització) de baix nivell per a les màquines virtuals que s'inicia durant l'arrencada • Tipus 1, Nadiu, bare-metal o sense amfitrió. Corren directament sobre el maquinari. Alguns productes comercials que virtualitzen d'aquesta manera són VMware ESX Server, Citrix XEN Server o Microsoft _Hyper-V.

• Tipus 2, Hosted. Corren sobre el sistema operatiu del host. Alguns productes que usen aquest model són VMware Workstation, Oracle VirtualBox o Parallels Workstation. • Tipus Híbrid. En aquest model tant el sistema operatiu amfitrió com el hipervisor interactuen directament amb el maquinari físic. Les màquines virtuals s'executen en un tercer nivell respecte al maquinari, per sobre del hipervisor, però també interactuen directament amb el sistema operatiu amfitrió.

VIRTUALITZACIÓ – Tipus d’hipervisors

VIRTUALITZACIÓ – Tipus d’hipervisors VirtualBox VMware Workstation Parallels Desktop QEMU Bhyve

VIRTUALITZACIÓ – Tipus d’hipervisors TIPUS 1

VMware ESXi Microsoft Hyper-V KVM Xen Proxmox VE Oracle VM Server VIRTUALITZACIÓ – Tipus d’hipervisors

RECURSOS VIRTUALITZABLES  Plataforma  Recursos ●Xarxes ●Emmagatzematge ●Dades  Aplicacions  Escritori PRACTICA: Instalación de un Hipervisor bare-metal (proxmox) proxmox

ALTA DISPONIBILITAT VIRTUALITZADA  Resposta enfront de fallades més eficaç  Integració de conjunt d'eines d'administració  Desplegament de nous servidors virtuals en molt poc temps, donant resposta ràpida  Estalvi de costos de manteniment i energètics  Gestió de l'espai d'emmagatzematge  Arrencada i parada de màquines virtuals  Gestió de còpies de seguretat de màquines virtuals  Trasllat de màquines virtuals entre sistemes ( en fred o en calent) vMotion  Trasllat de recursos virtuals entre sistemes ( en fred o en calent) svMotion  Monitoratge de recursos per a la presa de decisions

ALTA DISPONIBILITAT VIRTUALITZADA Estalvi de temps de recuperació i continuïtat del treball (min MTTR)

vMotion - video -- Storage vMotion -- ALTA DISPONIBILITAT VIRTUALITZADA -- vSphere vMotion

https://www.youtube.com/watch?v=vcPzrnrnYCU ALTA DISPONIBILITAT VIRTUALITZADA

Monitorització de recursos ALTA DISPONIBILITAT VIRTUALITZADA

Monitorització de recursos ALTA DISPONIBILITAT VIRTUALITZADA

Monitorització de recursos ALTA DISPONIBILITAT VIRTUALITZADA

Estalvi de costos ALTA DISPONIBILITAT VIRTUALITZADA

HIPER-CONVERGÈNCIA És un marc de T.I. que combina emmagatzematge, computació i xarxes en un únic sistema en un esforç per reduir la complexitat del centre de dades i augmentar l'escalabilitat. Exemples de sistemes HC NUTANIX VMware VSAN Simplivity Dell DMC CISCO Hyperflex

HIPER-CONVERGÈNCIA DATA TIERING

HIPER-CONVERGÈNCIA DEDUPLICACIÓ https://www.redeszone.net/tutoriales/servidores/sistema-archivos-zfs-servidores/ INCONVENIENTS

- Ús de molta memòria i

processador AVANTATGES

- Millor aprofitament de

l'espai

- Menor cost d'electricitat i

amplada de banda

- Millora en la creació de CS

On trobem ALTA DISPONIBILITAT FD : Failure Domain CPD - Cloud

On trobem ALTA DISPONIBILITAT

---

## ✍️ Activitats pràctiques UT9

> **✍️ Activitat Pràctica 9.1 — (SAD) Activitat: IPFIRE**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat IPFIRE IPFire és una distribució de Linux, de codi obert reforçada que funciona principalment com un encaminador i un tallafocs. Un sistema de firewall independent amb una consola d'administració basada en web per a la configuració.
>
> Per a producció, cal instal·lar en una màquina física, on es troben les xarxes connectades que es volen protegir. Per a la nostra pràctica, ho instal·larem en una m.v. en virtualbox. El SO serà el propi firewall. S’ha de configurar més d’una interfície de xarxa. En este cas tres.
>
> No instal·lar encara....... Requisits: 1 cpu, 2 GB ram, 8 GB disc dur, 3 targetes xarxa. Pega una ullada al esquema de xarxa de la següent pàgina. Activitat Revisa el manual de https://wiki.ipfire.org/installation/virtual-box Busca els conceptes de green interface , red interface, orange interface en el manual de ipfire abans d’instal·lar.
>
> En el moment de crear al mv, activa 3 adaptadors de xarxa. El primer adaptador, en adaptador pont El segon en xarxa interna (intnet1) El tercer en xarxa interna (intnet2) Activa i Configura els adaptadors de xarxa de la mv abans d’instal·lar. Abans de començar la instal·lació, llegeix les preguntes !!
>
> Instal·la el IPFIRE Marca DHCP en WAN i assigna IP a les altres, assigna la IP més alta possible de cada xarxa Utilitza dos màquines addicionals (per exemple, ubuntu) per connectar-es a les xarxes DMZ i local.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Contesta a les preguntes: -Des d’on se configura el ipfire per primera vegada ? -Quin sistema d’arxius recomana el manual ? -Quina adreça d’accés indica l’instal·lador abans del primer re-inici?
>
> Quin adaptador s’usa per defecte per accedir a l’administració web ? -Quantes contrasenyes ens demana que registrem per primera vegada, i per a que serviran? -Com podem identificar les targetes de xarxa de la màquina en el moment d’assignar-es a les interfícies? Esquema de xarxa Documentar tot el procés en un document. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada. Entregar el document en format PDF. Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”
