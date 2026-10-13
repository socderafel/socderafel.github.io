---
layout: default
title: "UD4 — Instal·lació d'Equips en Xarxa, Wi-Fi i Segmentació en VLANs"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD4"
---

# 📘 UD4 — Instal·lació d'Equips en Xarxa, Wi-Fi i Segmentació en VLANs

La **Unitat Didàctica 4** clou el mòdul de Xarxes Locals amb la configuració de dispositius avançats d'interconnexió: punts d'accés sense fil (Wi-Fi 802.11 ax/ac/n), encaminadors SOHO (*Small Office / Home Office*) i commutadors gestionables mitjançant la creació de **VLANs** (Xarxes d'Àrea Local Virtuals segons l'estàndard **IEEE 802.1Q**), l'etiquetatge de trames i l'encaminament inter-VLAN.

---

## 🏢 Cablejat Estructurat, Segmentació de VLANs i Router-on-a-Stick

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Subsistemes de Cablejat, Segmentació 802.1Q i Enllaços Troncals</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Topologia física d'edifici (MDF/IDF), etiquetatge de trames i encaminament amb subinterfícies</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="xalU4MdfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU4VlanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU4TrunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU4RoasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Subsistemes Cablejat -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#xalU4MdfGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🏢 CABLEJAT EDIFICI</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">MDF / IDF / Horitzontal</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">MDF:</tspan> Sala principal CPD</text>
    <text x="42" y="93" fill="#94a3b8" font-size="8">Core switch + Routers WAN</text>
    <text x="32" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Backbone Vertical:</tspan></text>
    <text x="42" y="125" fill="#94a3b8" font-size="8">Fibra multimode OM3/OM4</text>
    <text x="32" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">IDF:</tspan> Repartidor de planta</text>
    <text x="42" y="157" fill="#94a3b8" font-size="8">Armari rack 19" + Patch Panel</text>
    <text x="32" y="176" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Cablejat Horitzontal:</tspan></text>
    <text x="42" y="189" fill="#94a3b8" font-size="8">Cat 6A UTP &le; 90m + Roseta 10m</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Distribució Jeràrquica</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Segmentació VLAN -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#xalU4VlanGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔀 SEGMENTACIÓ VLAN</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Aïllament de Broadcast</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">VLAN 10:</tspan> Alumnes / Taller</text>
    <text x="252" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">VLAN 20:</tspan> Personal / Docents</text>
    <text x="252" y="116" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">VLAN 30:</tspan> Administració</text>
    <text x="252" y="136" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Ports d'Accés (Access):</tspan></text>
    <text x="262" y="150" fill="#94a3b8" font-size="8">Pertanyen a 1 sola VLAN</text>
    <text x="262" y="162" fill="#94a3b8" font-size="8">Trames Untagged (sense etiqueta)</text>
    <text x="252" y="182" fill="#cbd5e1" font-size="8.5">• Aïllament de seguretat total</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Divisió Lògica del Switch</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Enllaç Troncal 802.1Q -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#xalU4TrunkGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🏷️ PORT TRONCAL 802.1Q</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Etiquetatge Multi-VLAN</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Trunk Port:</tspan> 1 sol cable</text>
    <text x="482" y="93" fill="#94a3b8" font-size="8">Transporta totes les VLANs</text>
    <text x="472" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Etiqueta 802.1Q (4 Bytes):</tspan></text>
    <text x="482" y="125" fill="#94a3b8" font-size="8">TPID (0x8100) + TCI (PCP, VID)</text>
    <text x="472" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">VLAN ID:</tspan> 12 bits (1 - 4094)</text>
    <text x="472" y="162" fill="#cbd5e1" font-size="8.5">• Trama Tagged al troncal</text>
    <text x="472" y="180" fill="#cbd5e1" font-size="8.5">• Enllaç Switch &lt;-&gt; Switch</text>
    <text x="472" y="196" fill="#94a3b8" font-size="8">o Switch &lt;-&gt; Router</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Multiplexació de Trànsit</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Router-on-a-Stick & Wi-Fi -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#xalU4RoasGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">📡 ENCAMINAMENT</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Inter-VLAN &amp; Wi-Fi</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Router-on-a-Stick:</tspan></text>
    <text x="700" y="93" fill="#38bdf8" font-size="8">Subinterfícies virtuals</text>
    <text x="700" y="105" fill="#94a3b8" font-size="8">g0/0.10, g0/0.20, g0/0.30</text>
    <text x="692" y="124" fill="#cbd5e1" font-size="8.5">• Encaminament L3</text>
    <text x="692" y="142" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Wi-Fi Corporatiu:</tspan></text>
    <text x="700" y="155" fill="#94a3b8" font-size="8">Multi-SSID mapejat a VLANs</text>
    <text x="692" y="174" fill="#cbd5e1" font-size="8.5">• Seguretat WPA3-SAE</text>
    <text x="692" y="192" fill="#cbd5e1" font-size="8.5">• Routers SOHO / NAT</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Interconnexió Segura</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or de les VLANs: <tspan fill="#34d399" font-weight="bold">Dos equips en diferents VLANs no poden comunicar-se mai a través d'un commutador de Capa 2.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Encara que estiguen al mateix switch físic, requereixen obligatòriament un dispositiu de Capa 3 (Router o Switch Multicapa) per encaminar el trànsit.</text>
  </svg>
</div>

---

## 📊 Comparativa de Tipus de Ports i Modes de Xarxa

| Tipus de Port / Mètode | Capa Operativa | Etiquetatge 802.1Q | Nombre de VLANs Admeses | Dispositiu Connectat | Funció Principal |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Port d'Accés (*Access Port*)** | Capa 2 | **Sense etiqueta (*Untagged*)** | **Exactament 1 VLAN** | Ordinador d'usuari, impressora de xarxa, telèfon IP. | Connectar equips finals que no comprenen etiquetes 802.1Q. |
| **Port Troncal (*Trunk Port*)** | Capa 2 | **Etiquetat (*Tagged*)** (excepte VLAN nativa) | **Múltiples VLANs (1 a 4094)** | Switch veí, punt d'accés Wi-Fi multi-SSID o Router. | Transportar trànsit de diferents departaments sobre un únic cable físic. |
| **Router-on-a-Stick (RoaS)** | Capa 3 | Etiquetat en subinterfícies (`encapsulation dot1Q`) | Múltiples (1 subinterfície per VLAN) | Encaminador connectat a port troncal del switch. | **Encaminar paquets IP entre diferents VLANs sense necessitat d'un port físic per cadascuna.** |
| **Switch Multicapa (L3 Switch)** | Capa 2 / 3 | Gestionat internament per SVI (*Switch Virtual Interface*) | Totes les configurades al xassís | Nucli de xarxa (*Core Switch*). | Encaminament inter-VLAN a velocitat de cable per maquinari (*ASIC*). |

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **4.1** | [**Desplegament i Muntatge d'Equips en Xarxa**](./ut0401.md) | Verificació d'enllaços físics, canalitzacions i instal·lació d'adaptadors | [**🏢 Desplegar Equips →**](./ut0401.md) |
| **4.2** | [**Configuració Bàsica de Xarxes Sense Fil**](./ut0402.md) | Estàndards Wi-Fi 802.11 ax/ac/n, SSID, canals de ràdio i bandes 2.4/5 GHz | [**📡 Configurar Wi-Fi →**](./ut0402.md) |
| **4.6** | [**Configuració de Routers SOHO**](./ut0406.md) | Gestió d'interfície WAN/LAN, servidor DHCP, NAT/PAT i reenviaments de ports | [**⚙️ Dominar Routers →**](./ut0406.md) |
| **4.8** | [**Seguretat en Xarxes Sense Fil**](./ut0408.md) | Criptografia WPA2-PSK (AES-CCMP) vs WPA3-SAE i autenticació WPA-Enterprise (802.1X) | [**🔐 Securitzar Wi-Fi →**](./ut0408.md) |
| **4.10** | [**Introducció a les VLANs (IEEE 802.1Q)**](./ut0410.md) | Segmentació de dominis de difusió, etiquetatge de trames i pràctiques en Packet Tracer | [**🏷️ Configurar VLANs →**](./ut0410.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA4:** Configura dispositius d'interconnexió i xarxes sense fil (punts d'accés, routers SOHO i switches gestionables amb VLANs) assegurant la segmentació del trànsit.
- **RA5:** Realitza tasques de manteniment preventiu i resolució d'incidències utilitzant eines de diagnòstic i simuladors de xarxa.
- **Criteris d'Avaluació:**
  - S'han creat i assignat VLANs departamentals a ports d'accés aïllant dominis de difusió.
  - S'ha configurat un enllaç troncal IEEE 802.1Q i l'encaminament Router-on-a-Stick.
  - S'han establit paràmetres de seguretat sense fil avançada amb xifratge WPA2/WPA3.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul de Sobrecàrrega d'Etiquetatge IEEE 802.1Q (*Tag Overhead*):**
   - Una trama estàndard d'Ethernet II té una mida màxima de $1518\text{ bytes}$ (composta per una MTU de dades de $1500\text{ bytes}$, $14\text{ bytes}$ de capçalera Ethernet i $4\text{ bytes}$ de cua FCS).
   - L'estàndard IEEE 802.1Q insereix una etiqueta de **4 bytes** directament entre el camp d'adreça MAC d'origen i el camp EtherType:
     - $2\text{ bytes}$ per a l'identificador de protocol de tag (**TPID**): valor fix `0x8100`.
     - $2\text{ bytes}$ per a la informació de control de tag (**TCI**): 3 bits de prioritat PCP, 1 bit CFI/DEI i **12 bits per al VLAN ID**.
   - **Preguntes de càlcul:**
     - Quina és la nova mida màxima que pot assolir la trama Ethernet etiquetada a l'enllaç troncal (*Baby Giant Frame*)?
     - Quants identificadors de VLAN diferents ($2^{12}$) es poden codificar matemàticament amb els 12 bits de VLAN ID? Quins dos identificadors estan reservats i no s'assignen com a VLANs ordinàries de dades (VLAN 0 i VLAN 4095)?

2. **Dimensionament de Cablejat Troncal d'Edifici:**
   - Un centre educatiu de 3 plantes disposa d'un armari repartidor IDF a cada planta connectat amb el repartidor principal MDF del soterrani.
   - Cada planta té 48 rosetes d'usuari a $1\text{ Gbps}$.
   - **Preguntes de disseny:**
     - Si els 48 equips d'una planta transmeten simultàniament a màxim cabal, quina demanda de trànsit agregada teòrica podrien generar cap al nucli?
     - Si s'instal·la una tirada de fibra òptica multimode OM4 com a cablejat troncal vertical entre cada IDF i el MDF amb transceptors **10GBASE-SR**, quant d'ample de banda troncal dedicat tindrà cada planta? Serà suficient per suportar el trànsit agregat sense colls d'ampolla?

3. **Criptografia Wi-Fi: WPA2-Personal vs WPA3-Personal:**
   - En una xarxa sense fil protegida amb **WPA2-Personal (PSK)**, l'autenticació utilitza l'encaixada de 4 vies (*4-Way Handshake*).
   - En una xarxa protegida amb **WPA3-Personal**, s'utilitza el protocol **SAE** (*Simultaneous Authentication of Equals*, conegut com a intercanvi *Dragonfly*).
   - **Preguntes d'anàlisi:**
     - Si un atacant enregistra amb Wireshark el trànsit de ràdio en l'instant en què un usuari legítim s'autentica amb WPA2-PSK, quin atac de diccionari fora de línia (*offline dictionary attack*) pot executar per descobrir la clau de la xarxa?
     - Com impedeix WPA3-SAE aquest atac gràcies a l'ús de criptografia de secret compartit (*Forward Secrecy*) fins i tot si la contrasenya és senzilla?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació de VLANs i Assignació de Ports d'Accés en Switch Cisco
1. Al simulador Cisco Packet Tracer, afegeix un Switch Cisco 2960 i accedeix al mode de configuració global:
   ```text
   Switch> enable
   Switch# configure terminal
   ```
2. Crea dues VLANs departamentals:
   ```text
   Switch(config)# vlan 10
   Switch(config-vlan)# name Alumnes
   Switch(config-vlan)# exit
   Switch(config)# vlan 20
   Switch(config-vlan)# name Personal
   Switch(config-vlan)# exit
   ```
3. Assigna els ports `FastEthernet 0/1` al `0/10` a la VLAN 10 en mode accés:
   ```text
   Switch(config)# interface range fastEthernet 0/1 - 10
   Switch(config-if-range)# switchport mode access
   Switch(config-if-range)# switchport access vlan 10
   Switch(config-if-range)# exit
   ```
4. Assigna els ports `FastEthernet 0/11` al `0/20` a la VLAN 20 en mode accés.
5. Comprova la distribució executant `show vlan brief`.

#### Repte 2: Configuració de Port Troncal i Router-on-a-Stick
1. Al Switch, configura el port `GigabitEthernet 0/1` connectat a l'encaminador en mode troncal:
   ```text
   Switch(config)# interface gigabitEthernet 0/1
   Switch(config-if)# switchport mode trunk
   ```
2. Connecta el cable cap al port `GigabitEthernet 0/0` d'un router Cisco 2911.
3. Al Router, activa la interfície física sense assignar-li cap IP:
   ```text
   Router(config)# interface gigabitEthernet 0/0
   Router(config-if)# no shutdown
   Router(config-if)# exit
   ```
4. Crea dues subinterfícies virtuals associades a cadascuna de les VLANs amb la seua encapsulació dot1Q:
   ```text
   Router(config)# interface gigabitEthernet 0/0.10
   Router(config-subif)# encapsulation dot1Q 10
   Router(config-subif)# ip address 192.168.10.1 255.255.255.0
   Router(config-subif)# exit
   Router(config)# interface gigabitEthernet 0/0.20
   Router(config-subif)# encapsulation dot1Q 20
   Router(config-subif)# ip address 192.168.20.1 255.255.255.0
   Router(config-subif)# exit
   ```
5. Connecta un PC a la VLAN 10 (`192.168.10.50`) i un altre a la VLAN 20 (`192.168.20.50`). Executa un `ping` entre ells i comprova que el trànsit s'encamina a través del troncal amb èxit.

#### Repte 3: Auditoria d'Adaptador Wi-Fi i Xarxes en Windows amb PowerShell
1. Obre PowerShell i llista les xarxes Wi-Fi detectades per la targeta de ràdio amb el seu nivell de senyal i tipus de xifratge:
   ```powershell
   netsh wlan show networks mode=bssid
   ```
2. Consulta els paràmetres de la connexió sense fil activa (canal de ràdio, freqüència 2.4/5 GHz, velocitat de transmissió i tipus de xifratge WPA2/WPA3):
   ```powershell
   netsh wlan show interfaces
   ```
3. Identifica el canal de ràdio utilitzat i verifica si coincideix amb un dels canals recomanats sense solapament (1, 6 o 11 a 2.4 GHz, o canals 36-48 a 5 GHz).

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Cablejat Estructurat i Normatives** | Dissenya esquemes jeràrquics MDF/IDF, respecta el límit dels 90m+10m en coure i dimensiona enllaços troncals de fibra multimode. | Reconeix els elements del repartidor però confon la funció del cablejat horitzontal amb el vertical de troncal. | No sap què és un armari repartidor IDF o ignora els límits de distància dels cables. |
| **Segmentació de VLANs i Troncals 802.1Q** | Configura amb precisió VLANs, ports d'accés (Untagged) i ports troncals (Tagged) calculant sobrecàrregues de trama en bytes. | Crea les VLANs al switch però no sap configurar el port troncal o oblida afegir l'encapsulament 802.1Q. | Creu que canviar la IP és suficient per separar xarxes sense necessitat de configurar VLANs. |
| **Router-on-a-Stick i Seguretat Wi-Fi** | Desplega subinterfícies virtuals al router comunicant VLANs i compara protocols criptogràfics WPA2-PSK vs WPA3-SAE. | Configura les subinterfícies però oblida assignar les passarel·les als equips de cada VLAN. | No sap com connectar un router a un switch troncal per encaminar el trànsit inter-VLAN. |
