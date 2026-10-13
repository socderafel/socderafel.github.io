---
layout: default
title: "UD4: Dispositius d'Interconnexió de Xarxa — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD4"
next_url: "ut0401.html"
next_label: "4.1 ➡️"
---

# UD4: Dispositius d'Interconnexió de Xarxa

Targetes de xarxa (NIC) i adreces físiques MAC, concentradors (Hub) vs commutadors (Switch), taula CAM, dominis de col·lisió, encaminadors (Routers), dispositius auxiliars (PLC, repetidors, PoE) i pràctica d'interconnexió.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-nic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-swi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-rou" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-poe" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">DISPOSITIUS D'INTERCONNEXIÓ: ADRECES MAC, COMMUTACIÓ, ENCAMINAMENT I POE</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Targetes NIC, taula CAM en switches de capa 2, encaminadors NAT capa 3 i alimentació Ethernet</text>

  <!-- Bloc 1: NIC i Adreça MAC -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-nic)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">💳</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Targeta NIC & MAC</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Adreça Física 48b</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• OUI (24b): Fabricant</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Dispositiu (24b): Sèrie</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Format: Hexadecimal</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Tipus: PCIe, USB, M.2</text>
  </g>

  <!-- Bloc 2: Switch i Taula CAM -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-swi)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Switch & Taula CAM</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Capa 2 (Enllaç Dades)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Aprenentatge: MAC origen</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Reenviament: Port destí</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Inundació: Broadcast</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Sense col·lisions (Full-D)</text>
  </g>

  <!-- Bloc 3: Encaminador Router -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-rou)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Router de Capa 3</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Interconnexió LAN/WAN</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Encaminament per IP</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• NAT: IP privada a pública</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Tallafocs i DHCP</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Aïlla dominis broadcast</text>
  </g>

  <!-- Bloc 4: PoE i Auxiliars -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-poe)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">PoE i Auxiliars</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Tecnologies Especialitzades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• PoE 802.3af (15.4W)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• PoE+ 802.3at (30W AP/Cam)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• PLC: Xarxa per cables 230V</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Repetidor Wi-Fi amplificador</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **4.1** | **Targetes de xarxa (NIC) i l'adreça física MAC** | [**Llegir apartat →**](./ut0401.html) |
| **4.2** | **Concentradors (Hub) vs Commutadors (Switch) i la taula CAM** | [**Llegir apartat →**](./ut0402.html) |
| **4.3** | **Encaminadors (Routers): interconnexió de xarxes** | [**Llegir apartat →**](./ut0403.html) |
| **4.4** | **Dispositius auxiliars: repetidors, adaptadors PLC i PoE** | [**Llegir apartat →**](./ut0404.html) |
| **4.5** | **Pràctica: Muntatge d'una xarxa commutada d'aula** | [**Llegir apartat →**](./ut0405.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 4.1 Targetes de xarxa (NIC) i l'adreça física MAC

La **targeta d'interfície de xarxa** (**NIC** - *Network Interface Card* o adaptador de xarxa) és el component de maquinari que permet a un dispositiu connectar-se físicament a una xarxa informàtica i transmetre i rebre paquets de dades.

### Tipus de targetes de xarxa
- **Targeta Ethernet integrada en placa base:** És la que incorporen quasi tots els ordinadors de sobretaula i servidors moderns, amb un connector RJ45 femella i velocitat d'1 Gbps (1000BASE-T) o 2.5 Gbps.
- **Targeta d'expansió PCIe:** S'instal·la en un sòcol buit PCI Express de la placa base; molt habitual per afegir ports de xarxa addicionals o connexions de fibra de 10 Gbps.
- **Adaptadors de xarxa USB:** Solució ràpida per a portàtils moderns ultraprims que no disposen de port RJ45 de sèrie.
- **Targeta Wi-Fi integrada / M.2:** Adaptadors sense fil amb antenes externes per a comunicació per radiofreqüència.

---

### L'Adreça Física MAC (*Media Access Control*)

Cada targeta de xarxa fabricada al món té gravada de fàbrica en la seua memòria ROM una identificació única i irrepetible a nivell mundial anomenada **adreça MAC** (també coneguda com a adreça física o de maquinari).

#### Format de l'adreça MAC:
- Té una longitud de **48 bits** (6 bytes).
- S'escriu habitualment en format **hexadecimal**, dividida en 6 grups de dos dígits separats per dos punts o guions:
  `00:1A:2B:3C:4D:5E` o `00-1A-2B-3C-4D-5E`.
- Es divideix en dues meitats de 24 bits cadascuna:
  1. **OUI (*Organizationally Unique Identifier* - Primers 3 bytes):** Identifica el fabricant de la targeta (assignat per l'organisme IEEE; per exemple `00:14:22` pertany a Dell, `00:0C:29` a VMware).
  2. **Identificador del dispositiu (Últims 3 bytes):** Número de sèrie únic assignat pel fabricant a eixa targeta específica.

```
+--------------------------+--------------------------+
|  OUI (Identifica fabricant)  |  NIC (Identifica targeta) |
|      00 : 1A : 2B        |       3C : 4D : 5E       |
+--------------------------+--------------------------+
```

### Com esbrinar l'adreça MAC en el nostre ordinador?
- En **Windows**, obre el símbol del sistema (CMD o PowerShell) i escriu:
```cmd
getmac /v
```
o bé:
```cmd
ipconfig /all
```
(Fixa't en el camp anomenat *Adreça física* o *Physical Address*).

- En **Linux**, obre una terminal i escriu:
```bash
ip link
```
(El camp `link/ether` mostra l'adreça MAC).

---

## 4.2 Concentradors (Hub) vs Commutadors (Switch) i la taula CAM

Per connectar diversos ordinadors entre si en una topologia en estrella es necessita un dispositiu concentrador central. Històricament s'utilitzaven concentradors (*Hubs*), però hui en dia han sigut totalment substituïts pels **commutadors (*Switches*)**.

### El Concentrador (Hub) — Obsolet
El Hub és un dispositiu que treballa a la **Capa 1 (Física)**:
- Quan rep un senyal elèctric per un dels seus ports, **el repeteix i l'envia per absolutament tots els altres ports**, sense mirar qui és el destinatari.
- **Inconvenients:**
  - Si dos ordinadors transmeten alhora, els senyals xoquen i es produeix una **col·lisió**.
  - Tots els equips connectats comparteixen un únic **domini de col·lisió**.
  - Falta de privacitat: qualsevol ordinador pot "escoltar" totes les converses dels altres.

---

### El Commutador (Switch) — Estàndard actual
El Switch és un dispositiu intel·ligent que treballa a la **Capa 2 (Enllaç de dades)**:
- Analitza les trames que rep, llegeix l'**adreça MAC d'origen** i l'**adreça MAC de destinació**, i envia la informació **únicament i exclusiva cap al port concret on està endollat l'equip destinatari**.
- Cada port del switch és un **domini de col·lisió independent**. Diversos equips poden transmetre i rebre al mateix temps a la màxima velocitat en mode *Full Duplex* sense que hi haja cap col·lisió.

---

### Com aprèn el Switch? La Taula CAM (*MAC Address Table*)
El switch manté a la seua memòria interna una taula d'adreces coneguda com a **taula CAM** (*Content Addressable Memory*):
1. **Aprenentatge (*Learning*):** Quan un PC endollat al port 3 envia una trama, el switch llegeix la MAC origen i anota: *"La MAC AA:BB:CC està al Port 3"*.
2. **Reenviament (*Forwarding*):** Si més tard algú envia una trama amb destinació a eixa MAC, el switch consulta la seua taula i l'envia només pel port 3.
3. **Inundació (*Flooding*):** Si la MAC destinació no està encara a la taula (o si és una trama de difusió *Broadcast* dirigida a tothom `FF:FF:FF:FF:FF:FF`), el switch la reenvia per tots els ports excepte per on va entrar.

---

## 4.3 Encaminadors (Routers): interconnexió de xarxes

Mentre que un commutador (Switch) connecta ordinadors dins d'una mateixa xarxa local (LAN), un **encaminador (**Router**)** és el dispositiu de **Capa 3 (Xarxa)** encarregat d'**interconnectar diferents xarxes entre si** i trobar la millor ruta perquè els paquets de dades arriben al seu destí.

### Funcions clau d'un Encaminador
1. **Encaminament (*Routing*):** Manté una **taula d'encaminament** on s'indica cap a quina xarxa o interfície ha d'enviar cada paquet segons la seua adreça IP de destinació.
2. **Aïllament de dominis de difusió (*Broadcast Domain*):** Els missatges de difusió que envien els equips en una LAN no travessen mai el router cap a altres xarxes, evitant així saturar Internet.
3. **Traducció d'adreces de xarxa (NAT - *Network Address Translation*):** Permet que tots els ordinadors d'una llar o d'una aula (que tenen adreces IP privades) compartisquen una única adreça IP pública oficial per navegar per Internet.
4. **Tallafocs (*Firewall*) i Seguretat:** Filtra el trànsit no desitjat que intenta entrar des de l'exterior cap a la xarxa local interna.
5. **Servidor DHCP integrat:** Assigna automàticament paràmetres de xarxa (adreça IP, màscara, DNS) a qualsevol equip o mòbil que es connecte a la xarxa.

---

### Router Domèstic vs Router Professional

En entorns domèstics i xicotetes oficines, l'aparell que col·loquen les companyies telefòniques és en realitat un **dispositiu tot en un** que integra:
- Un **encaminador (router)** pròpiament dit.
- Un **mòdem / ONT** de fibra òptica per comunicar-se amb l'operador.
- Un **switch** de 4 ports Ethernet grocs per a connexió per cable.
- Un **punt d'accés Wi-Fi (AP)** amb antenes per a clients sense fil.

En canvi, en xarxes professionals grans d'empreses o centres educatius, cadascuna d'aquestes funcions està separada en equips independents d'alt rendiment: routers de bastidor rack, switches gestionables dedicats i diversos punts d'accés repartits pel sostre dels corredors.

---

## 4.4 Dispositius auxiliars: repetidors, adaptadors PLC i PoE

A més dels switches i routers bàsics, en moltes instal·lacions és necessari solucionar problemes concrets d'alimentació o d'abast de cablejat utilitzant dispositius auxiliars especialitzats:

### 1. Repetidors i Amplificadors de senyal Wi-Fi
- Són xicotets aparells que es connecten a una presa elèctrica en un punt intermedi de la casa o taller on el senyal Wi-Fi del router encara arribe amb bona qualitat.
- Reben el senyal per ràdio i el retransmeten de nou per ampliar l'àrea de cobertura cap a les zones d'ombra.
- **Inconvenient:** Redueixen a la meitat l'ample de banda efectiu, ja que han d'utilitzar la mateixa antena per rebre i reenviar les dades alhora.

### 2. Adaptadors PLC (*Powerline Communications*)
- Permeten transmetre les dades de xarxa informàtica **a través dels cables elèctrics convencionals de 230V de la paret**.
- **Com funcionen?** Es necessiten un mínim de dos adaptadors:
  1. El primer s'endolla a una presa de corrent a prop del router i es connecta a aquest amb un cable de xarxa.
  2. El segon s'endolla en una altra habitació o planta de la casa, oferint una presa de xarxa RJ45 (o punt Wi-Fi).
- **Avantatges:** Evita haver de fer forats o tirar canaletes perimetrals en cases antigues.
- **Limitacions:** Tots dos adaptadors han d'estar sota el mateix quadre elèctric i comptador; els electrodomèstics de gran consum (rentadores, forns) poden generar interferències.

### 3. Tecnologia PoE (*Power over Ethernet* - IEEE 802.3af/at/bt)
- És una tecnologia fonamental en instal·lacions professionals que permet **enviar corrent elèctric contínua i dades simultàniament a través del mateix cable de parell trenat UTP**.
- **Equips que s'alimenten per PoE:**
  - Càmeres de seguretat IP de sostre.
  - Punts d'accés Wi-Fi professionals col·locats a sostres alts d'aules o naus.
  - Telèfons corporatius de veu sobre IP (VoIP).
- **Avantatge enorme:** Estalvia la necessitat d'haver de cridar un electricista per instal·lar una presa d'endoll de 230V en cadascun dels punts alts on s'instal·la una càmera o un punt d'accés.

---

## 4.5 Pràctica: Muntatge d'una xarxa commutada d'aula

### Objectiu
Interconnectar quatre ordinadors d'aula mitjançant un commutador (Switch) de 8 o 24 ports, comprovar la creació de la taula d'adreces físiques MAC i verificar la connectivitat entre ells.

### Materials Necessaris
- 4 ordinadors amb targeta de xarxa Ethernet.
- 1 Switch de laboratori (8 o 24 ports 10/100/1000).
- 4 cables de xarxa directes RJ45 construïts a la UD2.

---

### Procediment de muntatge

#### Pas 1: Connexió física dels equips
1. Col·loca el switch al centre de la taula de taller i connecta'l a la presa de corrent elèctric. Comprova que el LED d'alimentació (*Power*) queda encès.
2. Connecta un extrem del primer cable RJ45 a la targeta de xarxa del **PC 01** i l'altre extrem al **Port 1** del switch.
3. Repeteix l'operació:
   - PC 02 al **Port 2**.
   - PC 03 al **Port 3**.
   - PC 04 al **Port 4**.
4. Observa els llums indicadors del switch: cadascun dels 4 ports ha de mostrar el LED verd encès confirmant l'enllaç físic (*Link* a 1 Gbps o 100 Mbps).

#### Pas 2: Assignació d'adreces IP de prova
Com que el switch no assigna IPs per si mateix, configurarem manualment una adreça IP estàtica a cada ordinador (dins de la mateixa xarxa `192.168.100.0/24`):
- **PC 01:** IP `192.168.100.1` | Màscara `255.255.255.0`
- **PC 02:** IP `192.168.100.2` | Màscara `255.255.255.0`
- **PC 03:** IP `192.168.100.3` | Màscara `255.255.255.0`
- **PC 04:** IP `192.168.100.4` | Màscara `255.255.255.0`

#### Pas 3: Prova de comunicació i observació
1. Des del PC 01, obre la consola d'ordres (CMD) i executa l'ordre de comprovació cap al PC 02:
```cmd
ping 192.168.100.2
```
2. Observa el panell frontal del switch:
   - Fixa't com **només parpellegen ràpidament els LEDs del Port 1 i del Port 2** (el trànsit només va entre aquests dos equips!).
   - Els LEDs del Port 3 i Port 4 romanen tranquils, demostrant com el switch no molesta a la resta d'equips.

3. Després d'executar el ping, mira la memòria cau d'adreces físiques al PC 01 escrivint:
```cmd
arp -a
```
Podràs veure com el PC 01 ha descobert i associat la IP `192.168.100.2` amb l'adreça física MAC real del PC 02.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Anàlisi d'adreces físiques MAC i descomposició d'OUI
Un centre educatiu rep una comanda d'equips informàtics nous. Es registren les següents adreces físiques a l'inventari:
- Targeta A: `00:1A:2B:64:C8:90`
- Targeta B: `F4:4D:30:AA:11:22`
- Targeta C: `FF:FF:FF:FF:FF:FF`

1. Quants bits i quants bytes té una adreça física MAC? Converteix el primer byte de la Targeta A (`00`) i el segon byte (`1A`) a codi binari de 8 bits.
2. Identifica l'identificador únic d'organització (**OUI**) i l'identificador de dispositiu per a les Targetes A i B. Quants equips diferents pot fabricar una mateixa marca amb un únic bloc OUI assignat per l'IEEE ($2^{24}$)?
3. Quina funció especial té l'adreça de la Targeta C a les xarxes locals i com la gestiona un commutador (Switch)?
4. Què succeiria en una xarxa si dos equips diferents tingueren configurada exactament la mateixa adreça MAC física en el mateix segment de switch?

#### Exercici 2: Càlcul de pressupost de potència elèctrica PoE per a un switch
Una empresa vol instal·lar un sistema de videovigilància i xarxa sense fil alimentat exclusivament per xarxa elèctrica Ethernet (**PoE - 802.3at / PoE+**).
- El switch de 16 ports Gigabit seleccionat té un pressupost total de potència de la seua font (*PoE Power Budget*) de:
  $$P_{\text{budget}} = 220\text{ W}$$
- Es volen connectar:
  - 8 Càmeres IP de seguretat exterior amb calefactor (consum: $14\text{ W}$ cadascuna).
  - 4 Punts d'accés Wi-Fi 6 d'alta densitat (consum: $21\text{ W}$ cadascun).
  - 2 Telèfons corporatius VoIP (consum: $6\text{ W}$ cadascun).

1. Calcula la potència total requerida per tots els dispositius sumats:
   $$P_{\text{consum}} = (8 \cdot 14) + (4 \cdot 21) + (2 \cdot 6)$$
2. És suficient la font d'alimentació de $220\text{ W}$ del switch per suportar tots els equips en funcionament continu? Quin és el marge restant o de dèficit?
3. Si en horari nocturn s'activen els leds d'infrarojos de les càmeres augmentant el seu consum a $18\text{ W}$ cadascuna, quant valdrà el nou consum total? Què farà un switch gestionable quan se supere el límit de watts de la font?

#### Exercici 3: Anàlisi del cicle d'aprenentatge de la taula CAM d'un commutador
Un switch de 4 ports té inicialment la seua taula CAM buida en encendre's:
- Al Port 1 està connectat el PC-A (`MAC: AA-AA-AA`).
- Al Port 2 està connectat el PC-B (`MAC: BB-BB-BB`).
- Al Port 3 està connectat el PC-C (`MAC: CC-CC-CC`).
- Al Port 4 està connectat el Router (`MAC: RR-RR-RR`).

1. **Pas 1:** El PC-A envia una trama de dades al PC-B.
   - Quina entrada afegeix el switch a la seua taula CAM?
   - Per quins ports reenvia el switch aquesta trama i per què (*Flooding*)?
2. **Pas 2:** El PC-B respon immediatament al PC-A.
   - Quina segona entrada afegeix el switch a la taula?
   - Per quins ports reenvia aquesta segona trama? La reben el PC-C o el Router?
3. Explica per què un concentrador antic (Hub) no hauria sigut capaç de realitzar aquesta discriminació de ports.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Auditoria d'adaptadors de xarxa locals amb comandes del sistema
- **Objectiu:** Identificar tots els adaptadors físics i virtuals presents a la màquina de taller i les seues adreces físiques.
- **Eines:** Consola PowerShell de Windows.
- **Ordres d'execució:**
  1. Executa la comanda següent per obtindre el llistat complet de targetes:
     ```powershell
     Get-NetAdapter | Select-Object Name, InterfaceDescription, Status, MacAddress, LinkSpeed
     ```
  2. Identifica quina targeta correspon a l'adaptador Ethernet integrat per cable i quina al Wi-Fi o adaptadors virtuals.
  3. Comprova la velocitat d'enllaç negociada (*LinkSpeed*): és de `1 Gbps` o s'ha negociat a `100 Mbps`?
  4. Executa:
     ```powershell
     getmac /v /fo list
     ```
  5. Anota l'adreça MAC de la targeta de treball del teu company de taula contigu.

#### Repte 2: Anàlisi de la memòria cau ARP i prova de commutació aïllada
- **Objectiu:** Observar la resolució de l'adreça física a partir de l'adreça lògica IP en la xarxa commutada de l'aula.
- **Eines:** Dos ordinadors connectats al mateix switch i consola CMD oberta amb privilegis d'administrador.
- **Passos guiats:**
  1. Buida la taula ARP local per forçar una nova descoberta de xarxa:
     ```cmd
     arp -d *
     ```
  2. Consulta la taula ARP buida:
     ```cmd
     arp -a
     ```
  3. Envia 1 sol paquet de comprovació cap a l'ordinador del company:
     ```cmd
     ping -n 1 192.168.100.X
     ```
  4. Torna a consultar la taula ARP:
     ```cmd
     arp -a
     ```
  5. Comprova com ara apareix l'adreça IP del veí associada a la seua adreça física MAC com a entrada de tipus dinàmic.

#### Repte 3: Muntatge i comprovació d'un enllaç amb injecció PoE
- **Objectiu:** Alimentar un dispositiu de xarxa (càmera IP o punt d'accés) exclusivament a través del cable UTP utilitzant un injector PoE extern.
- **Materials:** Dispositiu client PoE (AP o càmera), injector PoE passiu o 802.3af amb font de 230V, dos cables UTP Cat6.
- **Procediment de muntatge:**
  1. Endolla l'injector PoE a la presa de corrent elèctric de paret (230V).
  2. Connecta el port retolat com a **DATA IN** (o LAN) cap a un dels ports lliures del switch de taller.
  3. Connecta el port retolat com a **DATA + POWER OUT** (o PoE) cap a l'equip remot mitjançant el cable llarg de parell trenat.
  4. Comprova visualment com el dispositiu remot encén els seus testimonis LED sense tindre cap alimentador elèctric connectat a la seua base.
  5. Mesura amb el multímetre als pins 4-5 (+) i 7-8 (-) del port PoE (en mode continu CC) per comprovar la presència d'aproximadament $48\text{ V}$.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He localitzat l'adreça física MAC del meu ordinador identificant clarament els camps OUI i NIC.
- [ ] He calculat el balanç de potència elèctrica PoE prevenint sobrecàrregues de la font d'alimentació.
- [ ] He entès com aprèn i conmuta trames la taula CAM del switch evitant col·lisions.
- [ ] He buidat i consultat la memòria cau ARP observant la resolució d'adreces físiques.
- [ ] He muntat correctament un circuit d'injecció PoE respectant els ports de dades i potència.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Identificació de dispositius i adreces MAC** | Distingeix amb claredat targetes NIC, OUI, format hexadecimal de 48 bits i les funcions de Hub vs Switch. | Reconeix la diferència entre adreça física i lògica i sap localitzar la MAC al sistema operatiu. | Localitza la MAC del seu equip però presenta dubtes sobre el format OUI o la funció del switch. | Confon adreces IP amb MAC o no sap trobar la targeta de xarxa de l'equip. |
| **Càlcul de dimensionament PoE** | Resol el pressupost de potència PoE sense errors, analitzant marges de seguretat i comportament nocturn. | Calcula la suma de potències i avalua si el switch és suficient per a la càrrega. | Suma les potències bàsiques amb dificultats per interpretar el concepte de PoE budget. | No sap calcular la potència elèctrica necessària per als dispositius PoE. |
| **Comprensió de la taula CAM i ARP** | Descriu amb exactitud els processos d'aprenentatge, reenviament i inundació de la CAM i la resolució ARP. | Comprèn el mecanisme bàsic de commutació per adreces MAC i consulta la taula ARP. | Reconeix que el switch envia dades al port concret però no comprèn la inundació inicial. | No comprèn el funcionament intern del switch ni la funció del protocol ARP. |
| **Destresa en consola i diagnòstic (`getmac`, `arp`)** | Utilitza les ordres avançades de PowerShell i CMD amb fluïdesa, interpretant tots els paràmetres tècnics. | Executa les comandes de xarxa correctament i extreu les adreces necessàries. | Utilitza les ordres bàsiques seguint estrictament la guia sense comprendre el resultat. | Incapaç d'obrir la consola o executar les comandes d'inspecció de xarxa. |
| **Muntatge pràctic i connexió PoE** | Realitza el muntatge de l'injector PoE amb seguretat, verificant ports i estats dels testimonis LED. | Munta el circuit PoE correctament aconseguint alimentar el dispositiu client. | Connecta els equips amb ajuda per identificar els ports Data In i Data Out. | Connecta cables de forma errònia amb risc d'avaria elèctrica en equips no compatibles. |

