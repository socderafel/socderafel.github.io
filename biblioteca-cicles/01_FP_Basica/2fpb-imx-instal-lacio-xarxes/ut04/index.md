---
layout: default
title: "UD4: Dispositius d'Interconnexió de Xarxa — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD4"
next_url: "ut0401.md"
next_label: "4.1 ➡️"
---

# UD4: Dispositius d'Interconnexió de Xarxa

Targetes de xarxa (NIC) i adreces físiques MAC, concentradors (Hub) vs commutadors (Switch), taula CAM, dominis de col·lisió, encaminadors (Routers), dispositius auxiliars (PLC, repetidors, PoE) i pràctica d'interconnexió.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **4.1** | **Targetes de xarxa (NIC) i l'adreça física MAC** | [**Llegir apartat →**](./ut0401.md) |
| **4.2** | **Concentradors (Hub) vs Commutadors (Switch) i la taula CAM** | [**Llegir apartat →**](./ut0402.md) |
| **4.3** | **Encaminadors (Routers): interconnexió de xarxes** | [**Llegir apartat →**](./ut0403.md) |
| **4.4** | **Dispositius auxiliars: repetidors, adaptadors PLC i PoE** | [**Llegir apartat →**](./ut0404.md) |
| **4.5** | **Pràctica: Muntatge d'una xarxa commutada d'aula** | [**Llegir apartat →**](./ut0405.md) |

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

