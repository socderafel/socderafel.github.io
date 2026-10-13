---
layout: default
title: "UD2 — Arquitectura de Xarxa, Models OSI i TCP/IP, i Cablejat Estructurat"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2"
---

# 📘 UD2 — Arquitectura de Xarxa, Models OSI i TCP/IP, i Cablejat Estructurat

La **Unitat Didàctica 2** aborda l'estudi dels models de referència teòrics i arquitectures de protocols que regeixen el funcionament d'Internet i les xarxes locals modernes, així com els estàndards constructius del cablejat estructurat i la gestió de dominis de col·lisió i difusió en entorns corporatius.

---

## 🏛️ Model OSI vs TCP/IP, Encapsulament PDU i Equips de Xarxa

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura de Protocols, Cicle d'Encapsulament i Cablejat Estructurat</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Correspondència de capes, unitats PDU, equips de maquinari i subsistemes EIA/TIA-568</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="xalU2OsiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU2PduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU2HwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU2RackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Mapeig OSI vs TCP/IP -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#xalU2OsiGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">📚 MODELS DE CAPES</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">OSI (7) vs TCP/IP (4)</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">L7-L5 OSI:</tspan> Aplicació</text>
    <text x="42" y="93" fill="#94a3b8" font-size="8">HTTP, DNS, DHCP, SSH</text>
    <text x="32" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#818cf8" font-weight="bold">L4 OSI:</tspan> Transport</text>
    <text x="42" y="125" fill="#94a3b8" font-size="8">TCP (fiable) / UDP (ràpid)</text>
    <text x="32" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">L3 OSI:</tspan> Xarxa (Internet)</text>
    <text x="42" y="157" fill="#94a3b8" font-size="8">Adreçament IP i Encamina</text>
    <text x="32" y="176" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">L2-L1 OSI:</tspan> Accés Xarxa</text>
    <text x="42" y="189" fill="#94a3b8" font-size="8">Trames MAC i Senyals físics</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Pila Modular d'Internet</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Encapsulament PDU -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#xalU2PduGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">📦 ENCAPSULAMENT PDU</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Baixada per la Pila de Protocols</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Dades:</tspan> Càrrega d'usuari</text>
    <text x="252" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Segment:</tspan> Capçalera TCP/UDP</text>
    <text x="262" y="111" fill="#94a3b8" font-size="8">Port origen + Port destí</text>
    <text x="252" y="130" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Paquet:</tspan> Capçalera IP</text>
    <text x="262" y="143" fill="#94a3b8" font-size="8">IP origen + IP destí</text>
    <text x="252" y="162" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Trama:</tspan> Ethernet + FCS</text>
    <text x="262" y="175" fill="#94a3b8" font-size="8">MAC origen + MAC destí + CRC</text>
    <text x="252" y="194" fill="#cbd5e1" font-size="8.5">• <tspan fill="#cbd5e1" font-weight="bold">Bits:</tspan> Senyals elèctrics / llum</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Capçaleres i Cua FCS</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Equips de Xarxa per Capa -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#xalU2HwGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">⚙️ EQUIPS I DOMINIS</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Dispositius segons Nivell</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">L3 Router:</tspan></text>
    <text x="482" y="93" fill="#94a3b8" font-size="8">Separa dominis de broadcast</text>
    <text x="472" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">L2 Switch:</tspan></text>
    <text x="482" y="125" fill="#94a3b8" font-size="8">Separa col·lisions per port (CAM)</text>
    <text x="472" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f87171" font-weight="bold">L1 Hub (Repetidor):</tspan></text>
    <text x="482" y="157" fill="#94a3b8" font-size="8">Un sol domini de col·lisió</text>
    <text x="472" y="176" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">L4-L7 Firewall / Host:</tspan></text>
    <text x="482" y="189" fill="#94a3b8" font-size="8">Inspecció de sockets i estat</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Taula CAM vs Taula Rutes</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Cablejat Estructurat -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#xalU2RackGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">🏢 CABLEJAT ESTRUCTURAT</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">EIA/TIA-568 / ISO 11801</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Armari Rack 19":</tspan></text>
    <text x="700" y="93" fill="#94a3b8" font-size="8">Unitats d'alçada (U = 44,45mm)</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Patch Panel:</tspan> Conectoritzat</text>
    <text x="692" y="130" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Cable Horitzontal:</tspan> &le; 90m</text>
    <text x="692" y="148" fill="#cbd5e1" font-size="8.5">• Roseta RJ-45 usuari</text>
    <text x="692" y="166" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Backbone:</tspan> Troncal fibra</text>
    <text x="692" y="184" fill="#cbd5e1" font-size="8.5">• Terra i gestió tèrmica</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Instal·lació Professional</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or de la Commutació: <tspan fill="#34d399" font-weight="bold">Els switches separen els dominis de col·lisió a cada port, però pertanyen a un únic domini de difusió (broadcast).</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Només els encaminadors (Routers L3) o la creació de xarxes virtuals (VLANs 802.1Q) permeten fragmentar i aïllar els dominis de difusió corporatius.</text>
  </svg>
</div>

---

## 📊 Comparativa de Maquinari d'Interconnexió: Hub vs Switch vs Router

| Dispositiu | Capa OSI Operativa | Adreçament Utilitzat | Dominis de Col·lisió | Dominis de Difusió (*Broadcast*) | Mètode d'Enviament |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **Concentrador (*Hub*)** | **Capa 1** (Física) | Cap (Repeteix senyals elèctrics). | **1 únic domini** per a tots els ports. | 1 únic domini global. | Inundació (*Flooding*) elèctrica a tots els ports. |
| **Commutador (*Switch L2*)** | **Capa 2** (Enllaç) | **Adreces MAC (48 bits)** mitjançant taula CAM. | **1 domini independent per cada port.** | 1 únic domini (tots els ports comparteixen broadcast). | Unicast directe al port de destinació segons la taula MAC. |
| **Encaminador (*Router L3*)** | **Capa 3** (Xarxa) | **Adreces IP (32/128 bits)** mitjançant taula d'encaminament. | 1 domini independent per cada port. | **Separa dominis de broadcast** (1 per cada interfície). | Encaminament lògic entre xarxes diferents; bloqueja el broadcast. |

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **2.3** | [**Models ISO/OSI i TCP/IP**](./ut0203.md) | Història, arquitectura de capes i estàndards d'interconnexió | [**📚 Estudiar Models →**](./ut0203.md) |
| **2.4** | [**Les 7 Capes del Model OSI en Detall**](./ut0204.md) | Funcions específiques de cada nivell, protocols i serveis | [**🔍 Analitzar Capes →**](./ut0204.md) |
| **2.8** | [**Encapsulament PDU i Models en Acció**](./ut0208.md) | Flux d'encapsulament, capçaleres de control i anàlisi amb Wireshark | [**📦 Dominar PDU →**](./ut0208.md) |
| **2.20** | [**Muntatge de Cablejat Estructurat**](./ut0220.md) | Subsistemes EIA/TIA-568, armaris rack, patch panels i canalitzacions | [**🏢 Taller de Rack →**](./ut0220.md) |
| **2.30** | [**Hub vs Switch: Dominis de Xarxa**](./ut0230.md) | Anàlisi de dominis de col·lisió, dominis de difusió i taula de commutació CAM | [**⚙️ Dominar Switches →**](./ut0230.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA1:** Reconeix l'estructura de les xarxes locals identificant els seus components i la relació funcional dels models OSI i TCP/IP.
- **RA2:** Desplega el cablejat d'una xarxa local aplicant tècniques de canalització, muntatge en armari rack i normatives de cablejat estructurat.
- **Criteris d'Avaluació:**
  - S'ha comparat l'arquitectura teòrica OSI amb la pila TCP/IP, identificant unitats PDU i protocols associats.
  - S'ha descrit el procés d'encapsulament i desencapsulament de dades en l'emissió i recepció.
  - S'han distingit els dominis de col·lisió i difusió entre concentradors, commutadors i encaminadors.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul de Sobrecàrrega d'Encapsulament (*Header Overhead*):**
   - Un client envia una petició web curta mitjançant HTTP amb una càrrega útil de dades de $120\text{ bytes}$.
   - En descendir per la pila de protocols s'afigen les següents capçaleres estàndard sense opcions extres:
     - Capçalera de transport **TCP**: $20\text{ bytes}$.
     - Capçalera de xarxa **IPv4**: $20\text{ bytes}$.
     - Capçalera i cua d'enllaç **Ethernet II**: $14\text{ bytes}$ (capçalera MAC) $+ 4\text{ bytes}$ (cua de comprovació d'errors FCS/CRC32).
   - **Preguntes de càlcul:**
     - Quants bytes en total tindrà la trama Ethernet completa abans de transmetre's pel cable?
     - Quina mida mínima en bytes ha de tindre una trama Ethernet vàlida per evitar considerar-se una trama anòmala (*Runt Frame*)? Cal afegir farciment (*Padding*) en aquest cas?
     - Calcula l'eficiència de la transmissió calculant el percentatge que representen les dades útils d'usuari respecte a la mida total de la trama.

2. **Càlcul de Dominis de Col·lisió i de Difusió en Topologies Corporatives:**
   - Una xarxa d'un centre educatiu disposa de la següent infraestructura:
     - Un encaminador central (*Router L3*) amb 3 interfícies Ethernet actives.
     - A la interfície 1 hi ha connectat un commutador de 24 ports amb 18 ordinadors connectats.
     - A la interfície 2 hi ha connectat un commutador de 24 ports que té connectats 12 ordinadors i un *Hub* de 8 ports amb 6 ordinadors més.
     - A la interfície 3 hi ha connectat directament un servidor de còpies de seguretat.
   - **Preguntes d'anàlisi:**
     - Quants **dominis de difusió (*Broadcast Domains*)** independents existeixen a tota la xarxa?
     - Quants **dominis de col·lisió (*Collision Domains*)** independents hi ha en conjunt a tota la instal·lació? (Recorda que cada port del switch és un domini propi, mentre que el Hub comparteix domini entre tots els seus ports).

3. **Dimensionament d'un Armari Rack de 19 Polzades:**
   - Es dissenya el repartidor de planta d'un edifici amb 72 preses de xarxa dobles d'usuari (és a dir, $144\text{ punts de xarxa RJ-45}$).
   - Es disposa dels següents elements a allotjar al rack:
     - Panells de pegat (*Patch Panels*) de 24 ports (1U d'alçada cadascun).
     - Commutadors de xarxa (*Switches*) gestionables de 48 ports (1U cadascun).
     - Guies passacables horitzontals (es col·loca 1U de passacables per cada equip de xarxa o panell).
     - Un panell d'alimentació elèctrica PDU (1U) i una safata fixa per a un router d'operador (2U).
   - **Preguntes de dimensionament:**
     - Quants panells de connexió de 24 ports es requereixen per conectoritzar els 144 punts de xarxa?
     - Quants switches de 48 ports es necessiten per donar servei a tots els punts?
     - Quantes unitats d'alçada Rack (U) totals ocuparan aquests equips sumant els passacables, la PDU i la safata? Si els armaris comercials venen en mides de 12U, 18U, 24U o 42U, quina alçada mínima d'armari cal seleccionar?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Captura i Desglossament d'Encapsulament amb Wireshark
1. Inicia l'analitzador de protocols **Wireshark** a la targeta de xarxa activa.
2. Aplica el filtre de captura `dns || icmp`.
3. Obre la consola d'ordres i executa una consulta senzilla:
   ```cmd
   ping www.gva.es
   ```
4. Selecciona el primer paquet de petició DNS o ICMP Echo Request i inspecciona l'arbre de capes a la finestra de detalls:
   - Capa 1: Frame físic amb nombre de bytes capturats.
   - Capa 2: **Ethernet II**, comprovant les adreces MAC d'origen i destinació.
   - Capa 3: **Internet Protocol Version 4**, verificant les IPs i el camp Protocol (ICMP = 1, UDP = 17).
   - Capa 4: Capçalera de transport (ICMP o UDP).

#### Repte 2: Auditoria de Sockets, Ports i Connexions amb `netstat` / `ss`
1. En Windows, obre PowerShell i consulta les connexions TCP actives identificant els ports d'escolta locals:
   ```powershell
   netstat -ano | findstr "LISTENING"
   ```
2. En un terminal de Linux, visualitza els ports oberts amb informació de processos mitjançant la comanda `ss`:
   ```bash
   ss -tulnp
   ```
3. Identifica la diferència entre ports coneguts (*Well-known ports*, 0-1023), ports registrats (1024-49151) i ports dinàmics o efímers (49152-65535) assignats pel client per a eixir a Internet.

#### Repte 3: Inspecció de la Taula CAM en un Commutador amb Cisco Packet Tracer
1. Al simulador Cisco Packet Tracer, crea una topologia senzilla amb un Switch 2960 i 3 PCs (PC0, PC1, PC2).
2. Abans d'enviar cap dada, accedeix a la consola CLI del switch i executa:
   ```text
   Switch# show mac address-table
   ```
   (Comprova que la taula està buida o només conté entrades de sistema).
3. Envia un paquet `ping` des de PC0 cap a PC1 en mode simulació.
4. Observa el procés d'aprenentatge del commutador: registra la MAC de PC0 al port d'entrada i inunda (*Flooding*) la trama per tots els altres ports per ser la primera vegada.
5. Torna a consultar `show mac address-table` i verifica com ha quedat associada la MAC de PC0 i PC1 als seus ports físics corresponents.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Model OSI vs TCP/IP i PDUs** | Mapeja amb exactitud les 7 capes amb les 4 de TCP/IP, calcula sobrecàrregues d'encapsulament i identifica les unitats PDU (Segment, Paquet, Trama, Bits). | Coneix l'ordre de les capes però confon quina capçalera afegeix cada protocol (ex: ports a la capa 3). | No sap la diferència entre el model OSI teòric i la pila real d'Internet TCP/IP. |
| **Dominis de Col·lisió i Difusió (Hub / Switch / Router)** | Calcula amb precisió el nombre de dominis de xarxa en topologies multinivell i explica el funcionament de la taula CAM del switch. | Sap que un switch és millor que un hub però no sap quants dominis de col·lisió genera cadascun. | Creu que un switch i un hub funcionen de la mateixa manera o que un switch talla el trànsit de broadcast. |
| **Cablejat Estructurat i Eines de Diagnòstic** | Dimensiona armaris rack de 19" amb unitats d'alçada U, panells de pegat i utilitza Wireshark per analitzar capçaleres de paquets. | Coneix els components del rack però s'equivoca en el càlcul d'alçada d'armari necessari o en els filtres de Wireshark. | Desconeix què és un patch panel o no sap interpretar la captura d'un paquet en un analitzador. |
