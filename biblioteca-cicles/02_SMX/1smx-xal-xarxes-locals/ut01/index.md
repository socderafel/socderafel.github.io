---
layout: default
title: "UD1 — Introducció a les Xarxes Locals, Topologies i Mitjans de Transmissió"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
---

# 📘 UD1 — Introducció a les Xarxes Locals, Topologies i Mitjans de Transmissió

La **Unitat Didàctica 1** estableix els fonaments teòrics i físics de les telecomunicacions i la informàtica de xarxa. S'hi analitzen les formes en què els equips s'organitzen espacialment i lògicament, així com els mitjans guiats (coure i fibra) i no guiats (ones electromagnètiques) utilitzats per transportar la informació binària de forma eficient i segura.

---

## 🌐 Topologies de Xarxa i Mitjans Físics de Transmissió

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura Física: Topologies, Coure UTP, Fibra Òptica i Ràdio Wi-Fi</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Comparativa de models de distribució, paràmetres de cablejat i propagació de senyals</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="xalU1TopoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU1CoureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU1FibraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU1WifiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Topologies -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#xalU1TopoGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🕸️ TOPOLOGIES DE XARXA</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Distribució Espacial i Lògica</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Estrella:</tspan> Switch central</text>
    <text x="42" y="93" fill="#94a3b8" font-size="8">Model hegemònic a Ethernet</text>
    <text x="32" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f87171" font-weight="bold">Bus:</tspan> Cable únic troncal</text>
    <text x="42" y="125" fill="#94a3b8" font-size="8">Terminadors resistius 50 Ω</text>
    <text x="32" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Anell:</tspan> Token Ring unidireccional</text>
    <text x="42" y="157" fill="#94a3b8" font-size="8">Sense col·lisions d'accés</text>
    <text x="32" y="176" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Malla Completa:</tspan></text>
    <text x="42" y="189" fill="#94a3b8" font-size="8">Enllaços: C = N(N-1) / 2</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Tolerància i Redundància</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Cablejat de Coure -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#xalU1CoureGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔌 PARELL TRENAT (COURE)</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">UTP / FTP / S-FTP</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• 4 parells de fils trenats</text>
    <text x="252" y="98" fill="#cbd5e1" font-size="8.5">• Connector: <tspan fill="#c084fc" font-weight="bold">RJ-45 (8P8C)</tspan></text>
    <text x="252" y="116" fill="#cbd5e1" font-size="8.5">• Estàndards: <tspan fill="#38bdf8" font-weight="bold">T568A / T568B</tspan></text>
    <text x="252" y="134" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Cat 6:</tspan> 1 Gbps (10Gbps 55m)</text>
    <text x="252" y="152" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Cat 6A:</tspan> 10 Gbps a 100m (500MHz)</text>
    <text x="252" y="172" fill="#f59e0b" font-size="8.5">• <tspan font-weight="bold">Límit Màxim:</tspan> 100 metres</text>
    <text x="262" y="185" fill="#94a3b8" font-size="8">(90m horitzontal + 10m patch)</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Estàndard d'Oficina</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Fibra Òptica -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#xalU1FibraGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">💡 FIBRA ÒPTICA</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Transmissió per Polsos de Llum</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• Immune a soroll elèctric (EMI)</text>
    <text x="472" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Monomode (SMF - Groga):</tspan></text>
    <text x="482" y="111" fill="#94a3b8" font-size="8">Nucli 9 μm · Font Làser · Dècades km</text>
    <text x="472" y="130" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Multimode (MMF - Aqua):</tspan></text>
    <text x="482" y="143" fill="#94a3b8" font-size="8">Nucli 50 μm (OM3/4) · LED/VCSEL · 550m</text>
    <text x="472" y="162" fill="#cbd5e1" font-size="8.5">• Connectors: <tspan fill="#34d399" font-weight="bold">LC, SC, ST</tspan></text>
    <text x="472" y="180" fill="#cbd5e1" font-size="8.5">• Troncal de campus i CPDs</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Ultra Velocitat i Distància</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Xarxes Sense Fils Wi-Fi -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#xalU1WifiGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">📡 RÀDIO SENSE FIL</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Normativa IEEE 802.11</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">2.4 GHz:</tspan></text>
    <text x="700" y="93" fill="#94a3b8" font-size="8">Gran abast, canals 1, 6, 11</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">5 GHz:</tspan></text>
    <text x="700" y="125" fill="#94a3b8" font-size="8">Més velocitat, menys abast</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">6 GHz (Wi-Fi 6E/7):</tspan></text>
    <text x="700" y="157" fill="#94a3b8" font-size="8">Canals ultra amples 160/320MHz</text>
    <text x="692" y="176" fill="#cbd5e1" font-size="8.5">• Accés: CSMA/CA</text>
    <text x="692" y="194" fill="#cbd5e1" font-size="8.5">• Seguretat WPA2/WPA3</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Mobilitat i Cobertura</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Cablejat Estructurat: <tspan fill="#34d399" font-weight="bold">La longitud màxima d'un enllaç permanent UTP mai pot superar els 90 metres.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Sumant els 10 metres màxims permesos per als cables de connexió flexibles (patch cords de roseta i rack), el canal total no pot excedir mai els 100 metres.</text>
  </svg>
</div>

---

## 📊 Comparativa de Mitjans Físics: UTP Cat 6 vs Fibra Multimode (OM4) vs Fibra Monomode (OS2)

| Característica | Coure UTP Cat 6 | Fibra Multimode (OM4 - Aqua) | Fibra Monomode (OS2 - Groga) |
| :--- | :--- | :--- | :--- |
| **Medi Físic** | 4 parells de coure trenat (calibre 23-24 AWG). | Nucli de vidre de $50\,\mu\text{m}$ (polsos LED/VCSEL). | Nucli de vidre ultra-estret de $9\,\mu\text{m}$ (làser d'infrarojos). |
| **Amplada de Banda / Freqüència** | Fins a $250\text{ MHz}$. | Fins a $4.700\text{ MHz}\cdot\text{km}$. | Pràcticament il·limitada (espectre òptic). |
| **Velocitat Màxima Típica** | $1\text{ Gbps}$ a $100\text{ m}$ / $10\text{ Gbps}$ fins a $55\text{ m}$. | $10\text{ Gbps}$ fins a $550\text{ m}$ / $40\text{--}100\text{ Gbps}$ a $150\text{ m}$. | $100\text{--}400\text{ Gbps}$ a desenes de quilòmetres. |
| **Distància Màxima de Canal** | **100 metres màxim**. | Fins a **550 metres**. | **Desenes de quilòmetres ($10\text{--}40\text{ km}$)** sense repetidors. |
| **Immunitat a Soroll Elèctric (EMI)**| Vulnerable a camps elèctrics de motors o fluorescents. | **Totalment immune** (no condueix electricitat). | **Totalment immune** (òptim per a entorns industrials). |
| **Cost de Desplegament** | Molt baix (fàcil conectorització amb crimpadora). | Mitjà (connectors LC/SC pre-polits o fusió mecànica). | Elevat (requereix fusionadora d'arc voltaic i transceptors làser). |

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **1.1** | [**Introducció a les Xarxes Locals**](./ut0101.md) | Definició, beneficis de la compartició de recursos i components bàsics | [**📘 Estudiar Xarxes →**](./ut0101.md) |
| **1.3** | [**Classificació de les Xarxes**](./ut0103.md) | Abast geogràfic (PAN, LAN, CAN, MAN, WAN) i relació funcional (Client-Servidor vs P2P) | [**🗺️ Classificar Xarxes →**](./ut0103.md) |
| **1.8** | [**Topologies Físiques i Lògiques**](./ut0108.md) | Arquitectures d'interconnexió, mètodes d'accés al medi (CSMA/CD vs CSMA/CA) | [**🕸️ Analitzar Topologies →**](./ut0108.md) |
| **1.10** | [**Components de les Xarxes Locals**](./ut0110.md) | Targetes de xarxa (NICs), adreces físiques MAC de 48 bits, i equips de xarxa | [**⚙️ Conèixer Components →**](./ut0110.md) |
| **1.13** | [**Mitjans de Transmissió Físics**](./ut0113.md) | Paràmetres del coure UTP, estàndards TIA-568A/B, fibra òptica i atenuació | [**🔌 Dominar Mitjans →**](./ut0113.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA1:** Reconeix l'estructura de les xarxes locals identificant els seus components de maquinari, mitjans de transmissió i topologies físiques i lògiques.
- **RA2:** Desplega el cablejat d'una xarxa local aplicant tècniques de conectorització, canalització i normatives internacionals de cablejat estructurat.
- **Criteris d'Avaluació:**
  - S'han diferenciat les topologies en estrella, anell, bus i malla valorant la seua tolerància a fallades.
  - S'han identificat les característiques tècniques dels cables de coure UTP/STP i la fibra òptica monomode i multimode.
  - S'ha justificat el límit físic dels 100 metres del canal Ethernet de coure.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul d'Enllaços i Redundància en Topologies de Malla:**
   - En una topologia de malla completa, el nombre d'enllaços físics $C$ necessaris per interconnectar $N$ nodes es calcula amb l'expressió combinatòria:
     $$C = \frac{N(N - 1)}{2}$$
   - **Preguntes de càlcul:**
     - Si un centre de processament de dades (CPD) vol interconnectar 12 encaminadors centrals en malla completa, quants enllaços físics directes es requereixen?
     - Quants ports de xarxa ha de tindre dedicats cadascun dels encaminadors per a aquesta interconnexió?
     - Si en comptes d'una malla completa s'utilitza una topologia en estrella amb 2 commutadors de nucli redundants, quants cables en total es necessitaran per connectar tots 12 equips als dos commutadors? Quin és l'estalvi d'enllaços?

2. **Càlcul d'Atenuació Òptica i Pressupost de Potència:**
   - Un enllaç de fibra òptica monomode (OS2) d'una xarxa metropolitana té una longitud total de $16\text{ km}$.
   - Els paràmetres de pèrdua del canal són:
     - Atenuació del cable de fibra: $0{,}35\text{ dB/km}$ a $1310\text{ nm}$.
     - Pèrdua per inserció en connectors LC (2 connectors, un a cada extrem): $0{,}4\text{ dB}$ per connector.
     - Pèrdua en fusions d'arc voltaic (4 fusions al llarg del recorregut): $0{,}1\text{ dB}$ per fusió.
   - **Preguntes de dimensionament:**
     - Calcula la pèrdua d'atenuació total teòrica ($A_{\text{total}}$) de l'enllaç òptic en decibels (dB).
     - Si el mòdul transceptor emissor injecta un senyal de $-3\text{ dBm}$ i la sensibilitat mínima del receptor és de $-20\text{ dBm}$, arribarà el senyal amb marge suficient o caldrà instal·lar un amplificador?

3. **Planificació Espectral de Canals Wi-Fi a 2.4 GHz:**
   - A l'estàndard IEEE 802.11b/g/n, la banda de 2.4 GHz disposa de 13 canals a Europa (des de 2412 MHz fins a 2472 MHz), separats només per 5 MHz entre freqüències centrals, però cada canal ocupa una amplada espectral de $20\text{ MHz}$ (o $22\text{ MHz}$).
   - **Preguntes d'anàlisi:**
     - Demostra per quina raó matemàtica només els canals 1, 6 i 11 no es solapen entre ells.
     - Quina greu degradació de rendiment (pèrdua de paquets i col·lisions) es produeix si en una mateixa planta d'un institut dos punts d'accés propers es configuren als canals 1 i 3?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Auditoria de la Targeta de Xarxa (NIC) i Adreça MAC amb PowerShell
1. Obre una consola de PowerShell i llista totes les interfícies de xarxa físiques i virtuals del sistema:
   ```powershell
   Get-NetAdapter | Select-Object Name, InterfaceDescription, Status, LinkSpeed, MacAddress
   ```
2. Analitza l'adreça MAC (`PhysicalAddress`) d'un adaptador Ethernet:
   - Identifica els primers 3 bytes (24 bits) corresponents a l'identificador únic del fabricant (**OUI** - *Organizationally Unique Identifier*).
   - Identifica els últims 3 bytes assignats pel fabricant com a identificador de sèrie de la targeta.
3. Comprova la velocitat negociada de l'enllaç (`LinkSpeed`). Si un cable Cat 6 connectat a un switch Gigabit només negocia a `100 Mbps`, quin defecte físic pot tindre el cablejat (revisió dels parells 4-5 i 7-8)?

#### Repte 2: Diagnòstic de Taula ARP i Resolució MAC en Linux
1. En un terminal de Linux, visualitza la taula de correspondència entre adreces IP i adreces físiques MAC mitjançant la comanda `ip`:
   ```bash
   ip neigh show
   ```
   (o `arp -n`).
2. Envia un paquet ICMP cap a la porta d'enllaç predeterminada (router):
   ```bash
   ping -c 2 192.168.1.1
   ```
3. Comprova com s'actualitza la taula ARP mostrant l'adreça MAC de l'encaminador en estat `REACHABLE`.

#### Repte 3: Taller de Conectorització RJ-45 i Verificació de Parells
1. Pren un segment de 2 metres de cable UTP Cat 6 i pela la jaqueta exterior amb l'eina pelacables sense tallar l'aïllament dels parells interns.
2. Destrena els fils i ordena'ls estrictament segons la norma **EIA/TIA-568B**:
   - 1: Blanc-Taronja, 2: Taronja, 3: Blanc-Verd, 4: Blau, 5: Blanc-Blau, 6: Verd, 7: Blanc-Marró, 8: Marró.
3. Introdueix els fils al connector RJ-45 fins que facen topall al fons de la guia i crimpa amb pressió ferma.
4. Repeteix l'operació a l'altre extrem amb la mateixa norma T568B (cable directe).
5. Connecta els dos extrems al tester de continuïtat de xarxa i comprova la seqüència consecutiva d'encesa de LEDs de l'1 al 8.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Topologies de Xarxa i Tolerància** | Calcula enllaços en malles completes, explica el paper del commutador en topologia en estrella i els punts únics de fallada. | Coneix les topologies bàsiques però s'equivoca en el càlcul d'enllaços necessaris en xarxes redundants. | Confon la topologia física amb la topologia lògica o desconeix com funciona un anell amb testimoni. |
| **Mitjans Físics (Coure i Fibra Òptica)** | Justifica el límit dels 100m en UTP, compara fibra monomode (OS2) i multimode (OM4) i calcula atenuacions en decibels. | Sap que la fibra és més ràpida que el coure però no sap diferenciar entre monomode i multimode ni els seus connectors. | Desconeix les categories de cable UTP (Cat 5e, 6, 6A) o creu que el coure no pateix interferències elèctriques. |
| **Conectorització i Diagnòstic de Xarxa** | Conectoritza terminals RJ-45 segons la norma T568B amb el 100% de continuïtat als 8 fils i audita adreces MAC/ARP per consola. | Munta el cable però comet errors d'ordre de colors o requereix múltiples intents per fer funcionar el tester. | No respecta l'ordre dels colors de la norma T568B i no sap comprovar la velocitat d'enllaç de la targeta. |
