---
layout: default
title: "Muntatge i Manteniment d'Equips — UD9 Projecte Integrador de Muntatge"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD9"
---

# UT9 - Projecte Integrador de Muntatge d'un Equip Microinformàtic

El projecte integrador de muntatge posa en pràctica de forma coordinada totes les competències professionals del mòdul: des de l'estudi de requisits i pressupost segons el perfil d'ús (ofimàtica corporativa, estació de disseny/edició multimèdia, equip gaming d'alt rendiment), la comprovació estricta de compatibilitats físiques, elèctriques i tèrmiques, fins a l'acoblament metòdic en banc de proves i xassís, la gestió de cablejat i la llista de verificació de control de qualitat (*Quality Assurance*) prèvia al lliurament a client.

---

## 🛠️ Cicle Integral del Projecte de Muntatge i Control de Qualitat

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Projecte Integrador: Disseny, Muntatge i Protocol de Control de Qualitat</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Fases metodològiques des de l'anàlisi de requisits fins al diagnòstic i certificació d'entrega</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="piFase1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="piFase2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="piFase3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="piFase4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Fase 1: Perfil i Pressupost -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#piFase1Grad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">📋 1. REQUISITS I PERFIL</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Perfil d'Ús i Pressupost</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Ofimàtica:</tspan> iGPU + Eficiència</text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#818cf8" font-weight="bold">Disseny:</tspan> Multinucli + VRAM</text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f43f5e" font-weight="bold">Gaming:</tspan> GPU alta + Monofil</text>
    <text x="32" y="153" fill="#34d399" font-size="9.5">• <tspan font-weight="bold">Càlcul Potència Font:</tspan></text>
    <text x="42" y="168" fill="#94a3b8" font-size="8.5">(CPU + GPU + 50W) × 1.3</text>
    <text x="32" y="188" fill="#cbd5e1" font-size="9.5">• Certificació 80 PLUS</text>
    <text x="115" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Pressupost i Dimensionament</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Fase 2: Matriu de Compatibilitat -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#piFase2Grad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔍 2. COMPATIBILITAT</text>
    <text x="335" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Verificació Física i Lògica</text>
    <line x1="250" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc" font-weight="bold">Sòcol:</tspan> LGA1700 / AM5</text>
    <text x="252" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Format:</tspan> ATX / Micro-ATX</text>
    <text x="252" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Alçària Cooler:</tspan> mm caixa</text>
    <text x="252" y="153" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f43f5e" font-weight="bold">Llargària GPU:</tspan> lliure de xassís</text>
    <text x="252" y="173" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">RAM Clearance:</tspan> perfil baix</text>
    <text x="252" y="193" fill="#94a3b8" font-size="9">Revisió QVL del fabricant</text>
    <text x="335" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Matriu de Verificació Zero Errors</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Fase 3: Acoblament al Taller -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#piFase3Grad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">⚙️ 3. ACOBLAMENT</text>
    <text x="555" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Muntatge Metòdic i ESD</text>
    <line x1="470" y1="73" x2="640" y2="73" stroke="#334155"/>
    <text x="472" y="93" fill="#cbd5e1" font-size="9.5">• Banc de proves previ (test curt)</text>
    <text x="472" y="113" fill="#cbd5e1" font-size="9.5">• Separadors de xassís (Standoffs)</text>
    <text x="472" y="133" fill="#cbd5e1" font-size="9.5">• Retirar plàstic protector CPU</text>
    <text x="472" y="153" fill="#cbd5e1" font-size="9.5">• Pasta tèrmica creu / gota</text>
    <text x="472" y="173" fill="#38bdf8" font-size="9.5">• <tspan font-weight="bold">Cable Management:</tspan> darrere</text>
    <text x="472" y="193" fill="#34d399" font-size="9.5">• Pressió positiva de ventilació</text>
    <text x="555" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Integració Neta i Segura</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Fase 4: Control de Qualitat (QA) -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#piFase4Grad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">✅ 4. CONTROL QA</text>
    <text x="760" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Estrès i Certificació</text>
    <line x1="690" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="692" y="93" fill="#cbd5e1" font-size="9.5">• UEFI: perfil XMP/EXPO</text>
    <text x="692" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">MemTest86:</tspan> 0 errors</text>
    <text x="692" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Prime95:</tspan> CPU &lt; 85°C</text>
    <text x="692" y="153" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f43f5e" font-weight="bold">FurMark:</tspan> GPU &lt; 75°C</text>
    <text x="692" y="173" fill="#34d399" font-size="9.5">• Sensors sense estrangulament</text>
    <text x="692" y="193" fill="#94a3b8" font-size="9">Lliurament de certificat i caixa</text>
    <text x="760" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Lliurament Garantit</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Servei Tècnic: <tspan fill="#34d399" font-weight="bold">Mai s'entrega cap equip a client sense haver superat un cicle d'estrès continuat de 30 minuts lliure d'errors.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">La combinació de MemTest86 (estabilitat de memòria) i Prime95/FurMark (temperatures i font) detecta el 99% dels defectes de fàbrica o errors de muntatge.</text>
  </svg>
</div>

---

## 📊 Matriu de Verificació Pre-Muntatge i Toleràncies Crítiques

| Component Crític | Paràmetre Clau de Compatibilitat | Eina de Verificació / Documentació | Conseqüència si no es Verifica |
| :--- | :--- | :--- | :--- |
| **Sòcol CPU $\leftrightarrow$ Placa** | Tipus físic (LGA1700, AM5) i versió mínima de BIOS/UEFI requerida. | Fitxa tècnica oficial de la placa i llista de CPU suportades (*CPU Support List*). | Impossibilitat física de col·locació o pantalla negra per falta de microcodi. |
| **Refrigerador $\leftrightarrow$ Xassís** | Alçària màxima del dissipador en mm ($H_{\text{cooler}} < H_{\text{max\_case}}$). | Especificacions de la caixa (*Max CPU Cooler Height*). | La tapadora lateral de vidre trempat no podrà tancar o es trencarà. |
| **Targeta Gràfica $\leftrightarrow$ Caixa** | Llargària de la targeta en mm ($L_{\text{GPU}} < L_{\text{max\_case}}$) tenint en compte radiadors frontals. | Especificacions de xassís (*Max GPU Length*). | La GPU xoca físicament amb els ventiladors frontals i no entra a la ranura PCIe. |
| **Font d'Alimentació (PSU)** | Potència en W ($P \ge (P_{\text{CPU}} + P_{\text{GPU}} + 50) \times 1{,}3$) i connectors dedicats (PCIe 8 pins o 12VHPWR). | Calculadora de consum del fabricant i manual de la GPU. | Apagament sobtat de l'equip (*power surge*) en pics de demanda 3D o joc intensiu. |
| **Memòria RAM $\leftrightarrow$ Cooler** | Alçària dels mòduls RAM enfront del ventilador d'un dissipador de doble torre (*RAM Clearance*). | Fitxa tècnica del refrigerador (tolerància de memòria de 35 a 44 mm). | El ventilador davanter del cooler xoca amb la RAM i no es pot acoblar. |
| **Ventilació del Xassís** | Pressió d'aire estàtica: $\text{CFM}_{\text{intake}} > \text{CFM}_{\text{exhaust}}$ (pressió positiva). | Cabal dels ventiladors (especificacions CFM a les aspes). | Pressió negativa: l'aire entra per totes les ranures sense filtrar, omplint l'equip de pols en setmanes. |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :--- :--- | :--- | :---: |
| **9.1** | [**Projecte Integrador de Muntatge**](./ut0901.md) | Perfils d'ús de PC, matriu de compatibilitat (sockets, mides, TDP, càlcul de potència de font), checklist de control de qualitat i proves d'estrès | [**📋 Estudiar Projecte →**](./ut0901.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA5:** Realitza el muntatge d'equips microinformàtics a partir d'esquemes i recomanacions dels fabricants, verificant el seu funcionament correcte.
- **Criteris d'Avaluació:**
  - S'ha seleccionat el conjunt de components garantint la compatibilitat funcional, elèctrica i física mútua.
  - S'han executat les proves d'estrès i diagnòstic assegurant l'estabilitat tèrmica i lògica de l'ordinador abans de la seua entrega.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Dimensionament Elèctric d'una Estació de Treball:**
   - Un client encarrega una estació de disseny i renderització 3D amb els següents components:
     - Processador amb un TDP de base de $125\text{ W}$ i un consum pic màxim (PL2) de $253\text{ W}$.
     - Targeta gràfica dedicada de gamma professional amb un TGP (*Total Graphics Power*) de $285\text{ W}$.
     - Placa base, 4 mòduls de memòria DDR5, 2 unitats SSD NVMe PCIe 4.0 i 4 ventiladors ARGB (consum estimat base del sistema: $65\text{ W}$).
   - **Preguntes de càlcul:**
     - Calcula la demanda elèctrica teòrica pic del conjunt en plena càrrega de treball.
     - Aplicant el coeficient de seguretat tècnic recomanat del $30\%$ ($k = 1{,}3$), quina potència nominal mínima ha de tindre la font d'alimentació ATX?
     - Si s'instal·la una font de $850\text{ W}$ amb certificació **80 PLUS Gold** (eficiència mínima del $90\%$ a mitja càrrega), quants watts consumirà realment de la xarxa elèctrica de l'endoll quan l'equip estiga demandant $450\text{ W}$ reals en tasques d'edició?

2. **Matriu de Toleràncies Tèrmiques i Físiques al Xassís:**
   - Es disposa d'un xassís de format semitorre (*Mid-Tower*) amb les següents especificacions de fabricació:
     - Alçària màxima de dissipador de CPU admesa: $160\text{ mm}$.
     - Llargària màxima de targeta gràfica admesa: $330\text{ mm}$ (sense radiador frontal instal·lat).
     - Si s'instal·la un radiador de refrigeració líquida frontal de $240\text{ mm}$, aquest ocupa un gruix total de $27\text{ mm}$ (radiador) $+ 25\text{ mm}$ (ventiladors).
   - **Preguntes de comprovació:**
     - Si la targeta gràfica triada mesura $295\text{ mm}$ de llargària, serà possible instal·lar la targeta gràfica si es munta el radiador frontal? Justifica la resposta restant el gruix corresponent.
     - Si el client volguera canviar la líquida per un dissipador d'aire de doble torre amb una alçària de $165\text{ mm}$, quin inconvenient físic es produiria en tancar la caixa?

3. **Càlcul de Flux d'Aire i Dinàmica de Pressió al Taller:**
   - Un ordinador de taller disposa de tres ventiladors frontals d'entrada que introdueixen $45\text{ CFM}$ cadascun i dos ventiladors posteriors d'eixida que extreuen $55\text{ CFM}$ cadascun.
   - **Preguntes d'anàlisi:**
     - Determina el cabal net d'aire i si el sistema es troba sota règim de **pressió positiva** o **pressió negativa**.
     - Per quina raó tècnica la pressió positiva és l'estàndard professional recomanat en entorns comercials i educatius? Quin paper juguen els filtres antipols en aquesta configuració?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Auditoria de Sensors, Voltatges i Lògica de Placa amb PowerShell
1. Obre una consola de **PowerShell** com a Administrador i consulta l'estat i voltatges bàsics de la placa mare i la CPU mitjançant WMI/CIM:
   ```powershell
   Get-CimInstance Win32_BaseBoard | Select-Object Manufacturer, Product, SerialNumber, Version
   Get-CimInstance Win32_Processor | Select-Object Name, CurrentClockSpeed, MaxClockSpeed, VoltageCaps
   ```
2. Comprova la disponibilitat de memòria i l'estat dels mòduls físics instal·lats:
   ```powershell
   Get-CimInstance Win32_PhysicalMemory | Select-Object DeviceLocator, Capacity, Speed, ConfiguredClockSpeed, Manufacturer
   ```
3. Registra si la freqüència `ConfiguredClockSpeed` coincideix amb la velocitat anunciada del mòdul o si la memòria s'està executant a la velocitat JEDEC bàsica (requerint l'activació del perfil XMP/EXPO a la BIOS/UEFI).

#### Repte 2: Creació de Mitjà Arrencable Autònom amb MemTest86
1. Descarrega la versió lliure d'inspecció de memòria **MemTest86** (format imatge USB).
2. Connecta una unitat flash USB buida i utilitza l'eina oficial d'escriptura per generar el medi autònom UEFI.
3. Reinicia l'equip de laboratori, accedeix al menú d'arrencada ràpida (mitjançant la tecla `F11`, `F12` o `F8` segons el fabricant de la placa) i executa el banc de proves.
4. Completa com a mínim **1 Pass complet** de proves d'adreçament, patrons d'inversió de bits i soroll de bus. Comprova que el comptador d'errors es manté a 0.

#### Repte 3: Banc de Proves d'Estrès Tèrmic i Prevenció de *Thermal Throttling*
1. Al sistema de proves, inicia una utilitat de monitoratge de maquinari en temps real (**HWiNFO64** o **HWMonitor**) i registra les temperatures en repòs (*Idle*):
   - $T_{\text{idle}}(\text{CPU})$ i $T_{\text{idle}}(\text{GPU})$.
2. Executa de forma coordinada una prova de càrrega intensiva:
   - Càrrega de CPU: Executa **Prime95** (mode *Small FFTs* per a màxim consum tèrmic) o **Cinebench** en bucle de 10 minuts.
   - Càrrega de GPU: Executa **FurMark** o **3DMark Time Spy**.
3. Supervisa les línies de tensió de $+12\text{V}$, $+5\text{V}$ i $+3{,}3\text{V}$: cap línia ha de caure per davall de la tolerància del $\pm 5\%$.
4. Verifica si s'activa el mecanisme d'estrangulament tèrmic (*Thermal Throttling*). Si la temperatura supera els $90^\circ\text{C}$ de manera sobtada, atura la prova immediatament i revisa el contacte mecànic del dissipador i la distribució de pasta tèrmica.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Anàlisi de Compatibilitat i Pressupost** | Selecciona els components sense cap conflicte físic, tèrmic ni elèctric; dimensiona la font amb un marge del 30% i calcula eficiències 80 PLUS. | Tria components compatibles però no té en compte factors de tolerància física com l'alçària del refrigerador o el gruix del radiador. | Proposa combinacions incompatibles (sòcol de CPU erroni o font d'alimentació clarament insuficient). |
| **Protocol d'Acoblament i Taller** | Executa el muntatge seguint protecció ESD, utilitza separadors de xassís, enrutament net de cables i garanteix pressió d'aire positiva. | Munta l'equip amb èxit però deixa cables solts o no optimitza el flux de ventilació de la caixa. | Omet mesures bàsiques de seguretat com els separadors metàl·lics de la placa o col·loca malament la pasta tèrmica. |
| **Control de Qualitat i Proves d'Estrès** | Configura correctament la UEFI (perfils XMP/EXPO), executa MemTest86 amb 0 errors i certifica l'estabilitat tèrmica amb Prime95/FurMark. | Posa en marxa l'equip i comprova que entra al sistema operatiu, però no executa proves de càrrega prolongades ni memòria. | No comprova les temperatures en càrrega ni sap interpretar les lectures dels sensors de tensió i temperatura. |
