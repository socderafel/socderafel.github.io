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

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-x-abs" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-x-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-x-osi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-x-iee" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">FONAMENTS DE XARXES: CLASSIFICACIÓ, TOPOLOGIES I MODEL OSI/TCP-IP</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura d'interconnexió, àmbit geogràfic, flux de dades i estàndards IEEE</text>

  <!-- Bloc 1: Abast Geogràfic -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-abs)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Abast Geogràfic</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Tipologia de Xarxa</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• PAN: Personal (<10 m)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• LAN: Local (Aula/Edifici)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• MAN: Ciutat metropolitana</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• WAN: Global (Internet)</text>
  </g>

  <!-- Bloc 2: Topologies -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-top)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⭐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Topologies Físiques</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Distribució de Nodes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Estrella: Switch central (LAN)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Bus: Cable coaxial compartit</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Anell: Pas de testimoni (Token)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Malla: Màxima redundància</text>
  </g>

  <!-- Bloc 3: Model OSI i TCP/IP -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-x-osi)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📑</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model en Capes</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">OSI (7) vs TCP/IP (4)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Capa 4: Transport (TCP/UDP)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Capa 3: Xarxa / Internet (IP)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Capa 2: Enllaç (MAC / Switch)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Capa 1: Física (Cables i senyals)</text>
  </g>

  <!-- Bloc 4: Estàndards IEEE -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-x-iee)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Estàndards IEEE</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Normes de Connexió</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• IEEE 802.3: Ethernet cablejat</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• IEEE 802.11: Wi-Fi sense fil</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Adreça MAC: 48 bits física</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Detecció col·lisions CSMA/CD</text>
  </g>
</svg>
</div>

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
Reconèixer els components físics reals que conformen la xarxa local del taller d'informàtica, traçar les canalitzacions i elaborar un esquema tècnic detallat de la seua topologia física i lògica.

### Materials i Eines Necessàries
- Estació de treball d'alumne connectada a la xarxa de taller.
- Armari rack de telecomunicacions de 19 polzades (obert amb les degudes mesures de seguretat elèctrica).
- Quadern de camp tècnic o programari de diagramació vectorial (draw.io o LibreOffice Draw).
- Consola de comandes del sistema operatiu (PowerShell o CMD).

---

### Procediment d'inspecció tècnica

#### Pas 1: Auditoria del lloc de treball de l'estació de treball
1. Localitza el cable de parell trenat que ix de la part posterior del xassís de l'equip.
2. Identifica el connector RJ45 mascle inserit a la targeta d'interfície de xarxa (NIC). Comprova l'estat de la pestanya de subjecció.
3. Observa els testimonis lluminosos (LEDs d'estat) del port Ethernet:
   - **LED d'enllaç (Link):** Verd fix indica connexió física operativa a 1 Gbps; taronja fix indica enllaç a 100 Mbps.
   - **LED d'activitat (Activity):** Parpelleig ràpid indica transmissió o recepció de trames.
4. Segueix el traçat del cable des del terra o canaleta d'escriptori fins a la presa de telecomunicacions de paret (roseta RJ45 femella).

#### Pas 2: Inspecció de canalitzacions i armari Rack
1. Segueix el recorregut de les canaletes perimetrals de l'aula fins a la seua convergència a l'armari metàl·lic de telecomunicacions (**Rack de 19"**).
2. Dins de l'armari rack, identifica cadascun dels nivells estructurals:
   - **Panell de pegat (Patch Panel):** Mòduls on es connecten rígidament els cables provinents de les canaletes de la paret.
   - **Latiguillos de pegat (Patch Cords):** Cables flexibles curts que uneixen els ports del patch panel amb els ports corresponents del switch.
   - **Commutador (Switch):** Equip electrònic central de capa 2 amb 24 o 48 ports que interconnecta tots els nodes en estrella.
   - **Encaminador (Router de comunicacions):** Equip de capa 3 que connecta la xarxa local amb la sortida a la xarxa corporativa o proveïdor d'Internet.

#### Pas 3: Elaboració de l'esquema de xarxa
Dibuixa en format digital un diagrama tècnic de l'aula amb la simbologia estàndard:
- 1 Encaminador de frontera (Router).
- 1 Commutador central (Switch de 24 ports Gigabit).
- 1 Punt d'accés sense fils (AP Wi-Fi).
- 6 Estacions de treball client (PCs) connectats en estrella al commutador.
- 1 Impressora làser de xarxa compartida.

```
                  [ Router de Frontera ]
                            │
               [ Commutador Central (Switch) ]
               ┌──────┬─────┴─────┬──────┐
               │      │           │      │
           [ PC 01 ] [ PC 02 ]  [ AP ] [ Impressora ]
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de velocitats de transmissió i temps de descàrrega
En la instal·lació d'un parc informàtic d'aula, cal descarregar una imatge de sistema operatiu (ISO) amb una grandària de fitxer de $4{,}7\text{ GB}$.
1. Converteix la grandària del fitxer a gigabits ($\text{Gb}$) i a megabits ($\text{Mb}$), sabent que $1\text{ Byte} = 8\text{ bits}$ i $1\text{ GB} = 1024\text{ MB}$.
2. Calcula el temps teòric de descàrrega en segons i en minuts si la targeta de xarxa funciona sobre un enllaç Fast Ethernet ($100\text{ Mbps}$):
   $$\text{Temps (s)} = \frac{\text{Mida (Mbits)}}{\text{Velocitat (Mbps)}}$$
3. Repeteix el càlcul per a un enllaç Gigabit Ethernet ($1000\text{ Mbps}$).
4. Tenint en compte que l'overhead de protocols (encapsulament TCP/IP) consumeix aproximadament un $10\%$ de l'amplada de banda real útil, quin és el temps real estimat per a cada enllaç?

#### Exercici 2: Anàlisi d'encapsulament i correspondència de capes OSI i TCP/IP
Una estació de treball de l'aula de taller envia una petició web a un servidor educatiu.
1. Completa la taula associant cadascun dels elements a la seua capa del model OSI (1 a 7) i del model TCP/IP (1 a 4):
   - Adreça física MAC d'origen (`B4:2E:99:A1:C2:08`)
   - Port de servei destí (`TCP 443`)
   - Adreça lògica IP de destí (`192.168.1.254`)
   - Senyal elèctric de tensió codificat sobre el parell de coure
   - Pàgina web en codi HTML/CSS
2. Descriu breument per què es produeix un error d'accés web si el cable està desconnectat físicament (Capa 1) encara que el navegador (Capa 7) estiga funcionant correctament.

#### Exercici 3: Diagnòstic de topologia i tolerància a fallades
Una xarxa corporativa disposa de 16 llocs de treball. L'empresa dubta entre mantindre una topologia física en bus coaxial antiga o migrar a una topologia en estrella amb switch Gigabit.
1. Què succeeix a la xarxa en bus si un treballador desconnecta accidentalment el terminador resistiu de $50\,\Omega$?
2. Què succeeix a la xarxa en estrella si es trenca el cable que connecta l'ordinador número 5? Afecta els altres 15 equips?
3. Què succeeix a la xarxa en estrella si la font d'alimentació del switch central s'avaria?
4. Com es pot resoldre el punt únic de fallada d'una topologia en estrella en un entorn crític (servidors)?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Auditoria física del lloc de treball i de l'armari de telecomunicacions
- **Objectiu:** Identificar i auditar cadascun dels elements de la cadena física de transmissió de l'aula.
- **Eines:** Caixa d'eines bàsica, guia de comprovació física i càmera/mòbil per a documentació gràfica.
- **Procediment:**
  1. Comprova la fixació de la targeta de xarxa al xassís de l'ordinador d'aula.
  2. Inspecciona el connector RJ45: assegura't que el protector de coberta no estiga partit i que la pestanya bloquegi fermament amb un so de *clic*.
  3. Mesura la longitud estimada del cable de pegat des de l'ordinador fins a la roseta. Compleix el límit recomanat de màxim $5\text{ metres}$ per a cables de connexió directa d'usuari?
  4. Localitza l'etiqueta d'identificació de la roseta de paret (ex: `RACK-A-P12`) i comprova si coincideix amb l'etiqueta del panell de pegat al rack.

#### Repte 2: Diagnòstic d'enllaç i connectivitat per línia d'ordres
- **Objectiu:** Utilitzar les ordres bàsiques del sistema operatiu per a verificar la interfície de xarxa i el funcionament de la pila TCP/IP.
- **Eines:** Terminal PowerShell o CMD en Windows.
- **Instruccions d'execució:**
  1. Obre el terminal de comandes i executa:
     ```powershell
     ipconfig /all
     ```
  2. Localitza l'adaptador d'àrea local Ethernet i anota:
     - Nom de l'adaptador físic.
     - Adreça física (MAC).
     - Adreça IPv4 assignada.
     - Màscara de subxarxa.
     - Porta d'enllaç predeterminada (Gateway).
  3. Comprova el funcionament intern de la pila TCP/IP local executant un bucle de retorn:
     ```powershell
     ping 127.0.0.1
     ```
  4. Envia quatre paquets ICMP a la porta d'enllaç de la teua xarxa (Gateway) per comprovar la comunicació amb el router:
     ```powershell
     ping <adreca_porta_enllac>
     ```
  5. Anota el temps mitjà de resposta (en mil·lisegons) i el percentatge de paquets perduts.

#### Repte 3: Disseny i diagramació d'un esquema de xarxa per a una oficina comercial
- **Objectiu:** Crear un diagrama de topologia en estrella jeràrquica professional per a una petita empresa de 12 empleats.
- **Eines:** Software de dibuix vectorial tècnic (draw.io, LibreOffice Draw o Dia).
- **Requisits de la comanda:**
  1. Incloure 1 encaminador de connexió a fibra amb connexió WAN.
  2. 1 Switch principal gestionable de 24 ports Gigabit.
  3. 2 Punts d'accés Wi-Fi (un per a la zona d'oficines i un altre per a visites).
  4. 12 Ordinadors de treball, 1 servidor d'arxius NAS i 2 impressores de xarxa departamentals.
  5. Indicar amb colors o tipus de línia diferenciats les connexions de coure (UTP Cat6) i les transmissions sense fils Wi-Fi.
  6. Exportar el resultat final en format PDF i imatge PNG per a la memòria tècnica.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He calculat correctament els temps teòrics de transmissió diferenciant entre bits i Bytes.
- [ ] He identificat físicament els connectors, LEDs, rosetes i components de l'armari rack.
- [ ] He utilitzat la comanda `ipconfig` per extreure les dades de configuració de xarxa de l'equip.
- [ ] He verificat la connectivitat local mitjançant la comanda `ping` sense pèrdua de paquets.
- [ ] He generat un esquema net, normalitzat i comprensible de la topologia física i lògica de la xarxa.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Classificació i models (OSI / TCP-IP)** | Distingeix amb precisió totes les capes, funcions i unitats de dades (PDU), justificant la utilitat modular. | Reconeix les capes i protocols principals amb xicotets dubtes en les unitats PDU. | Identifica la diferència bàsica entre OSI i TCP/IP i les capes física i de xarxa. | Confon capes, protocols i no comprèn el model per capes. |
| **Càlcul de transmissió i amplada de banda** | Resol tots els càlculs matemàtics sense errors, convertint unitats i justificant l'overhead. | Converteix correctament entre bits i Bytes amb càlculs correctes però omet l'overhead. | Calcula els temps bàsics amb xicotets errors en el canvi d'unitats de capacitat. | No sap convertir entre bits i Bytes ni calcular temps de transmissió. |
| **Auditoria física de xarxa i Rack** | Identifica sense dubte tots els components de l'enllaç, estats dels LEDs i elements de l'armari rack de 19". | Reconeix la majoria dels elements físics del rack i connectors RJ45. | Identifica cables, rosetes i el switch bàsic sense reconèixer el patch panel. | Incapaç d'identificar els components físics bàsics de la xarxa local. |
| **Diagnòstic per comandes CLI (`ipconfig`, `ping`)** | Executa les comandes amb precisió, interpreta tots els paràmetres de xarxa i avalua la latència. | Obté la configuració IP i comprova connectivitat identificant els camps bàsics. | Utilitza les comandes però té dificultats per localitzar la IP o porta d'enllaç. | No sap obrir la consola de comandes ni interpretar els resultats del ping. |
| **Diagramació i documentació tècnica** | Elabora un esquema d'alta qualitat tècnica, amb simbologia estàndard, escalat i format professional. | Diagrama la topologia correctament amb elements identificats i bona claredat visual. | L'esquema conté els elements bàsics però presenta desordre o manca de simbologia. | Esquema incomplet, confús o que no representa una topologia funcional. |

