---
layout: default
title: "UD1: Fonaments de les Xarxes de Dades i Comunicació — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD1"
next_url: "ut0101.html"
next_label: "1.1 ➡️"
---

# UD1: Fonaments de les Xarxes de Dades i Comunicació

Concepte de xarxa informàtica, classificació segons l'abast geogràfic, topologies físiques i lògiques, models en capes (OSI i TCP/IP) i estàndards de comunicació.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **1.1** | **Què és una xarxa informàtica i classificació segons l'abast** | [**Llegir apartat →**](./ut0101.html) |
| **1.2** | **Topologies físiques i lògiques de xarxa** | [**Llegir apartat →**](./ut0102.html) |
| **1.3** | **Arquitectura en capes: models OSI i TCP/IP** | [**Llegir apartat →**](./ut0103.html) |
| **1.4** | **Normes i estàndards de comunicació (IEEE 802.3 i 802.11)** | [**Llegir apartat →**](./ut0104.html) |
| **1.5** | **Pràctica de laboratori: Identificació i esquema d'una xarxa local** | [**Llegir apartat →**](./ut0105.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 1.1 Què és una xarxa informàtica i classificació segons l'abast

Una **xarxa informàtica** és un conjunt d'equips informàtics (ordinadors, impressores, servidors, encaminadors, etc.) connectats entre si mitjançant cables o ones de ràdio amb la finalitat de compartir **informació**, **recursos** (fitxers, discos, impressores, connexió a Internet) i **serveis** (correu electrònic, web, bases de dades).

### Elements bàsics d'una comunicació en xarxa

En qualsevol comunicació a través d'una xarxa intervenen cinc components fonamentals:
1. **Emissor:** El dispositiu que genera i envia la informació (per exemple, el nostre ordinador quan sol·licita una pàgina web).
2. **Receptor:** El dispositiu que rep i processa la informació (el servidor web on està allotjada la pàgina).
3. **Missatge:** La informació o dades transmeses (text, arxiu, vídeo, paquet de dades).
4. **Medi de transmissió:** El suport físic o no guiat pel qual viatgen les dades (cable de parell trenat, fibra òptica o ones Wi-Fi).
5. **Protocol:** El conjunt de regles i normes acordades que permeten que l'emissor i el receptor s'entenguen mútuament (com ara Ethernet, IP, TCP o HTTP).

### Classificació de les xarxes segons la seua extensió geogràfica

Segons l'àrea geogràfica que cobreixen, les xarxes es classifiquen en diferents categories:

| Tipus de Xarxa | Significat de les Sigles | Àmbit Geogràfic | Exemple d'Ús | Velocitat Típica |
| :--- | :--- | :--- | :--- | :--- |
| **PAN** | *Personal Area Network* | Fins a pocs metres (espai personal) | Connexió Bluetooth entre mòbil i auriculars o rellotge | 1 - 24 Mbps |
| **LAN** | *Local Area Network* | Dins d'una aula, casa, oficina o edifici | Xarxa cablejada d'una aula d'informàtica de l'institut | 100 Mbps - 1 Gbps / 10 Gbps |
| **CAN** | *Campus Area Network* | Diversos edificis propers d'un mateix recinte | Xarxa que interconnecta les facultats d'un campus universitari | 1 Gbps - 10 Gbps |
| **MAN** | *Metropolitan Area Network* | Una ciutat o municipi sencer | Xarxa de fibra òptica municipal que uneix ajuntament, policia i biblioteques | 1 Gbps - 10 Gbps |
| **WAN** | *Wide Area Network* | País, continent o tot el planeta | Internet o xarxa que interconnecta seus bancàries mundials | Molt variable (fins a centenars de Gbps) |
| **WLAN** | *Wireless Local Area Network* | Versió sense fil de la xarxa LAN | Xarxa Wi-Fi de l'institut o de casa | 54 Mbps - diversos Gbps (Wi-Fi 6) |

> [!NOTE]
> En el perfil professional d'FP Bàsica en Informàtica i Comunicacions, el treball quotidià se centra principalment en les xarxes d'àrea local (**LAN** i **WLAN**): canalització, cablejat de coure, conectoritzat, preses de paret, armaris rack i configuració bàsica d'equips.

### Avantatges de treballar en xarxa

Treballar amb equips interconnectats ofereix grans beneficis tant en entorns domèstics com corporatius:
- **Estalvi econòmic:** Permet compartir perifèrics cars, com ara impressores làser d'alt volum o unitats d'emmagatzematge massiu NAS.
- **Treball col·laboratiu:** Diversos usuaris poden accedir a les mateixes bases de dades o documents de treball simultàniament.
- **Centralització de la seguretat i còpies:** Les còpies de seguretat es poden programar des d'un únic servidor central.
- **Comunicació instantània:** Missatgeria corporativa, correu intern i accés immediat a recursos compartits.

### Exercicis i Activitats
1. Identifica quin tipus de xarxa (PAN, LAN, MAN o WAN) correspon a cadascuna de les situacions següents:
   - a) Connectar el telèfon mòbil als altaveus del cotxe via Bluetooth.
   - b) L'aula d'informàtica de 2n FPB amb 15 ordinadors connectats a un switch.
   - c) La xarxa d'un banc que comunica la seu central de Madrid amb sucursals a València, Barcelona i Sevilla.
   - d) La xarxa que connecta la seu central de la Policia Local amb les càmeres de trànsit repartides per tota la ciutat.
2. Quins són els cinc elements fonamentals d'una comunicació i quin paper juga el protocol?

---

## 1.2 Topologies físiques i lògiques de xarxa

La **topologia de xarxa** descriu com estan organitzats i interconnectats els diferents dispositius (nodes). Diferenciem dos conceptes essencials:
- **Topologia física:** És la disposició real dels cables, canaletes i equips físics en l'espai.
- **Topologia lògica:** És la manera com viatgen les dades a través del medi físic, independentment de com estiguen col·locats físicament els cables.

### Principals topologies físiques

#### 1. Topologia en Bus
Tots els equips estan connectats a un únic cable continu central anomenat **bus** o dorsal. Als extrems del cable és obligatori col·locar uns **terminadors** que absorbeixen el senyal per evitar que rebotiga.
- **Avantatges:** Molt barata i fàcil d'instal·lar; requereix poc cablejat.
- **Inconvenients:** Si el cable principal es trenca en qualsevol punt, tota la xarxa cau completament. A més, produeix moltes col·lisions de dades.

#### 2. Topologia en Anell (Ring)
Cada dispositiu està connectat exactament a altres dos, formant un bucle o anell tancat. La informació circula en una única direcció passant de node en node.
- **Avantatges:** Tots els equips tenen accés equitatiu al medi de transmissió.
- **Inconvenients:** Si falla un únic node o es trenca el cable en un punt, tot l'anell queda interromput (a menys que s'utilitze un doble anell redundant com en xarxes FDDI).

#### 3. Topologia en Estrella (Star) — La més utilitzada
Tots els equips estan connectats directament a un dispositiu central d'interconnexió, habitualment un **commutador (switch)** o concentrador.
- **Avantatges:**
  - Si un cable o un ordinador falla, la resta de la xarxa continua funcionant perfectament.
  - És molt fàcil afegir o retirar equips sense interrompre el servei.
  - Molt senzilla de localitzar avaries.
- **Inconvenients:** Requereix més metres de cable i si el dispositiu central (switch) s'apaga o es fa malbé, cap equip pot comunicar-se.

#### 4. Topologia en Arbre o Jeràrquica
És una variació de la topologia en estrella on diversos commutadors secundaris es connecten a un commutador principal (switch core o arrel). És la distribució habitual en edificis de diverses plantes o centres educatius.

#### 5. Topologia en Malla (Mesh)
Cada dispositiu està connectat directament a tots els altres (malla completa) o a diversos d'ells (malla parcial).
- **Avantatges:** Màxima redundància i tolerància a fallades; si falla un camí, la informació pot viatjar per moltes altres rutes alternatives.
- **Inconvenients:** Cost econòmic molt elevat i gran complexitat de cablejat. S'utilitza en la columna vertebral d'Internet (backbone WAN) i en xarxes sense fil d'alta disponibilitat.

### Taula comparativa de topologies

| Topologia | Cost de Cablejat | Facilitat d'Ampliació | Tolerància a Fallades | Ús Actual |
| :--- | :--- | :--- | :--- | :--- |
| **Bus** | Molt baix | Baixa | Molt baixa (una fallada talla tota la xarxa) | Obsoleta en LAN |
| **Anell** | Mitjà | Mitjana | Baixa (llevat de doble anell) | Xarxes industrials / Metropolitanes |
| **Estrella** | Mitjà | Molt alta (afegir port al switch) | Alta (aïllament per port) | **Estàndard actual en LAN** |
| **Arbre** | Mitjà-Alt | Molt alta | Alta | Estàndard en edificis i plantes |
| **Malla** | Molt alt | Complexa | Màxima (redundància total) | WAN, servidors crítics i Wi-Fi Mesh |

> [!TIP]
> En la xarxa de la vostra aula, la topologia física és en **estrella**: cada ordinador de cada taula té un cable de xarxa independent que va per la canaleta fins al rack, on s'endolla a un port del switch.

---

## 1.3 Arquitectura en capes: models OSI i TCP/IP

Per permetre que equips de fabricants diferents i amb sistemes operatius diferents es puguen comunicar sense problemes, la transmissió de dades s'organitza en una **arquitectura modular per capes**. Cada capa té unes funcions ben definides i ofereix serveis a la capa superior.

### Per què s'utilitzen models en capes?
- **Divisió del problema:** Cada nivell resol una part específica de la comunicació (per exemple: voltatges elèctrics, adreces físiques, adreçament lògic o aplicacions d'usuari).
- **Independència tecnològica:** Es pot canviar la tecnologia d'una capa (per exemple, passar de cable de coure a fibra òptica o Wi-Fi) sense haver de modificar les aplicacions (com el navegador web).
- **Facilitat per al diagnòstic d'avaries:** Quan falla la xarxa, el tècnic pot comprovar ordenadament de baix a dalt (des del cable físic fins a l'aplicació).

---

### El Model de referència OSI (7 capes)
Creat per l'organització internacional ISO, és el model teòric universal d'aprenentatge:

1. **Capa 7 - Aplicació:** Interfície que interactua amb l'usuari (navegadors web, clients de correu, transferència d'arxius).
2. **Capa 6 - Presentació:** Traducció de formats, compressió i xifratge de dades (JPEG, ASCII, TLS/SSL).
3. **Capa 5 - Sessió:** Establiment, manteniment i tancament de la sessió de comunicació entre equips.
4. **Capa 4 - Transport:** Segmentació de les dades, control de flux i detecció d'errors d'extrem a extrem (protocols **TCP** i **UDP**).
5. **Capa 3 - Xarxa:** Adreçament lògic i encaminament de paquets entre xarxes diferents (protocol **IP**, routers).
6. **Capa 2 - Enllaç de dades:** Adreçament físic mitjançant adreces MAC, detecció d'errors en el tram i control d'accés al medi (trames, switches, targetes de xarxa).
7. **Capa 1 - Física:** Transmissió pura de bits (0 i 1) a través del medi elèctric, òptic o per ràdio (voltatges, cables, connectors RJ45, fibra).

---

### El Model TCP/IP (4 capes pràctiques)
És l'arquitectura real que fa funcionar Internet i totes les xarxes modernes:

| Capa TCP/IP | Capes OSI Equivalents | Unitat de Dades (PDU) | Protocols Representatius | Dispositius Típics |
| :--- | :--- | :--- | :--- | :--- |
| **4. Aplicació** | Aplicació, Presentació, Sessió | Dades | HTTP, HTTPS, DNS, DHCP, FTP, SMTP | Ordinador, Servidor |
| **3. Transport** | Transport | Segment / Datagrama | TCP (segur), UDP (ràpid) | Ports lògics (80, 443, 53) |
| **2. Internet** | Xarxa | Paquet | IP (IPv4, IPv6), ICMP | Encaminadors (Routers) |
| **1. Accés a la xarxa** | Enllaç de dades, Física | Trama / Bits | Ethernet (802.3), Wi-Fi (802.11) | Commutadors (Switches), Cables, RJ45, NIC |

### Concepte d'Encapsulament
Quan un ordinador envia informació, les dades baixen de la capa superior a la inferior. Cada capa afig la seua pròpia capçalera amb informació de control (com si ficàrem una carta dins d'un sobre, i aquest dins d'una caixa):
1. **Dades** (Aplicació) $\rightarrow$
2. **Segment** amb ports TCP (Transport) $\rightarrow$
3. **Paquet** amb adreces IP origen i destí (Internet) $\rightarrow$
4. **Trama** amb adreces físiques MAC origen i destí (Accés a la xarxa) $\rightarrow$
5. **Bits** elèctrics o lluminosos enviats pel cable (Física).

---

## 1.4 Normes i estàndards de comunicació (IEEE 802.3 i 802.11)

Sense normes i estàndards internacionals, cada empresa fabricaria equips amb connectors, mides i voltatges propietaris que no podrien comunicar-se entre si. Els organismes d'estandardització asseguren la **interoperabilitat**.

### Principals organismes d'estandardització
- **IEEE** (*Institute of Electrical and Electronics Engineers*): Defineix els estàndards per a les capes física i d'enllaç de dades de les xarxes locals (grup **IEEE 802**).
- **ISO** (*International Organization for Standardization*): Creadora del model OSI i estàndards internacionals de qualitat.
- **TIA/EIA** (*Telecommunications Industry Association / Electronic Industries Alliance*): Defineix els estàndards de cablejat estructurat en edificis comercials (com ara ANSI/TIA-568).
- **IETF** (*Internet Engineering Task Force*): Desenvolupa i manté els protocols d'Internet (documents RFC).

---

### Família d'estàndards IEEE 802.3: Ethernet
Ethernet és la tecnologia de xarxa per cable més emprada arreu del món. Ha anat evolucionant des dels primers cables coaxials fins a les xarxes d'alta velocitat actuals:

| Denominació IEEE | Nom Comercial | Medi de Transmissió | Velocitat Màxima | Distància Màxima per Segment |
| :--- | :--- | :--- | :--- | :--- |
| **10BASE-T** | Ethernet estàndard | Parell trenat Cat 3 | 10 Mbps | 100 metres |
| **100BASE-TX** | Fast Ethernet | Parell trenat Cat 5 | 100 Mbps | 100 metres |
| **1000BASE-T** | Gigabit Ethernet | Parell trenat Cat 5e / Cat 6 | 1.000 Mbps (1 Gbps) | 100 metres |
| **10GBASE-T** | 10 Gigabit Ethernet | Parell trenat Cat 6a / Cat 7 | 10.000 Mbps (10 Gbps) | 100 metres |
| **1000BASE-SX / LX** | Gigabit Ethernet per fibra | Fibra òptica multimode / monomode | 1 Gbps | De 550 m fins a 5.000 m (5 km) |

> [!IMPORTANT]
> Tots els estàndards Ethernet sobre cable de coure de parell trenat tenen un límit físic infranquejable: **100 metres de longitud màxima** per tirada de cable des del switch fins a l'equip d'usuari. Si se supera aquesta distància, el senyal es degrada per atenuació i es produeixen pèrdues de dades.

---

### Família d'estàndards IEEE 802.11: Wi-Fi
La tecnologia Wi-Fi permet la comunicació sense fils mitjançant radiofreqüències:

| Estàndard IEEE | Nom Comercial | Freqüències Utilitzades | Velocitat Teòrica Màxima |
| :--- | :--- | :--- | :--- |
| **802.11b** | Wi-Fi 1 | 2.4 GHz | 11 Mbps |
| **802.11g** | Wi-Fi 3 | 2.4 GHz | 54 Mbps |
| **802.11n** | Wi-Fi 4 | 2.4 GHz i 5 GHz | Fins a 600 Mbps |
| **802.11ac** | Wi-Fi 5 | 5 GHz | Fins a 3.5 Gbps |
| **802.11ax** | Wi-Fi 6 / 6E | 2.4 GHz, 5 GHz i 6 GHz | Fins a 9.6 Gbps |
| **802.11be** | Wi-Fi 7 | 2.4 GHz, 5 GHz i 6 GHz | Fins a 40 Gbps |

---

## 1.5 Pràctica de laboratori: Identificació i esquema d'una xarxa local

### Objectiu de la Pràctica
Reconèixer els components físics reals que conformen la xarxa local de l'aula de taller d'FP Bàsica i elaborar un esquema gràfic de la seua topologia.

### Materials Necessaris
- Aula d'informàtica amb ordinadors connectats a la xarxa d'alumnat.
- Armari rack de telecomunicacions de l'aula (obert pel professor/a per a inspecció visual).
- Full de registre o aplicació de diagramació (draw.io, LibreOffice Draw o paper mil·limetrat).

---

### Procediment Pas a Pas

#### Pas 1: Inspecció del lloc de treball de l'alumne
1. Mira sota la taula de l'ordinador: localitza el cable de xarxa que ix de la part posterior de la torre de l'equip.
2. Identifica el connector: Comprova que té una pestanya de plàstic transparent (connector RJ45 mascle) inserit en la targeta de xarxa (NIC).
3. Fixa't en els LEDs de la targeta de xarxa:
   - LED verd continu: Hi ha enllaç físic (*Link* actiu).
   - LED taronja/verd parpellejant: Hi ha trànsit o activitat de paquets (*Activity*).
4. Segueix el cable: Mira cap a on es dirigeix. Entra en una canaleta de plàstic de la paret o va directament a una presa de paret (roseta RJ45 femella)?

#### Pas 2: Inspecció de la canalització i l'armari Rack
1. Observa el recorregut de les canaletes perimetrals de l'aula: condueixen tots els cables cap a una mateixa cantonada on està penjat l'armari metàl·lic (**Rack de 19 polzades**).
2. Dins de l'armari rack, identifica:
   - **Panell de pegat (Patch Panel):** On acaben fixats els cables rígids que vénen de les canaletes.
   - **Latiguillos de pegat (Patch Cords):** Cables curts i flexibles que van del patch panel als ports del switch.
   - **Commutador (Switch):** Dispositiu electrònic amb 24 o 48 ports amb llums parpellejants.
   - **Encaminador (Router):** Dispositiu que connecta la xarxa de l'aula amb la xarxa corporativa del centre o la sortida a Internet.

#### Pas 3: Elaboració de l'esquema de xarxa
Dibuixa en el teu quadern o a l'ordinador un diagrama lògic i físic de l'aula que continga:
- 1 Router d'aula/centre.
- 1 Switch principal de 24 ports situat al Rack.
- 1 Punt d'accés Wi-Fi (AP) si n'hi ha un al sostre.
- Un mínim de 6 ordinadors de taula interconnectats al switch mitjançant connexió en estrella.
- 1 Impressora de xarxa compartida de l'aula.

```
       [ Router ]
           |
       [ Switch ] <-------- [ Punt d'Accés Wi-Fi ]
      /    |     \\
[ PC 01 ] [ PC 02 ] [ Impressora de Xarxa ]
```

### Qüestionari d'avaluació
1. Quina topologia física té la xarxa de la vostra aula? Raona la resposta.
2. Què passaria amb la resta de la classe si es desconnecta el cable de xarxa del PC 03?
3. Què passaria amb la classe si es desendolla de la llum el switch central de l'armari rack?

---

