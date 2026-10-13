---
layout: default
title: "Muntatge i Manteniment d'Equips — UD6 Manteniment de Perifèrics"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD6"
---

# UT6 - Manteniment de Perifèrics: Pantalles i Impressores

Aquesta unitat aborda els procediments tècnics de diagnòstic, neteja i manteniment preventiu dels perifèrics d'eixida més crítics en entorns corporatius i d'oficina: les tecnologies de panell de pantalla (IPS, VA, OLED, connectors HDMI i DisplayPort) i el funcionament mecànic, diagnòstic de defectes i substitució de peces fungibles en impressores làser i de tinta.

---

## 🖥️ Tecnologies de Pantalla i Cicle d'Impressió Làser

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Panells de Pantalla i Cicle Elect банаnofotogràfic Làser (6 Fases)</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Comparativa de visualitzadors IPS/VA/OLED i el procés complet d'impressió per càrrega electroestàtica</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="monIpsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="monPortGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="prnLaserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="prnPartsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Tecnologies de Pantalla -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#monIpsGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🖥️ PANELLS DE PANTALLA</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">IPS vs VA vs OLED</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">IPS:</tspan> Fidelitat de color</text>
    <text x="42" y="108" fill="#94a3b8" font-size="9">Angles 178°, ideal disseny</text>
    <text x="32" y="128" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">VA:</tspan> Contrast alt (3000:1)</text>
    <text x="42" y="143" fill="#94a3b8" font-size="9">Negres profunds, cinema</text>
    <text x="32" y="163" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">OLED:</tspan> Píxels autoemissius</text>
    <text x="42" y="178" fill="#94a3b8" font-size="9">Temps 0,03 ms | Risc burn-in</text>
    <text x="115" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Qualitat d'Imatge</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Connectors de Vídeo -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#monPortGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔌 CONNECTORS DE VÍDEO</text>
    <text x="335" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Amplada de Banda Digital</text>
    <line x1="250" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc" font-weight="bold">DisplayPort 2.1:</tspan></text>
    <text x="262" y="108" fill="#94a3b8" font-size="9">Fins a 80 Gbps, suport MST</text>
    <text x="252" y="128" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">HDMI 2.1:</tspan></text>
    <text x="262" y="143" fill="#94a3b8" font-size="9">Fins a 48 Gbps, 4K@120Hz</text>
    <text x="252" y="163" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">USB-C DP Alt Mode:</tspan></text>
    <text x="262" y="178" fill="#94a3b8" font-size="9">Vídeo + Dades + Càrrega PD</text>
    <text x="335" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Transmissió Digital</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Cicle Làser 6 Fases -->
    <rect x="460" y="20" width="205" height="210" rx="8" fill="url(#prnLaserGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="562" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">🖨️ CICLE LÀSER (6 FASES)</text>
    <text x="562" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Electrofotografia en Cadena</text>
    <line x1="470" y1="73" x2="655" y2="73" stroke="#334155"/>
    <text x="472" y="91" fill="#cbd5e1" font-size="9">1. <tspan fill="#f59e0b" font-weight="bold">Càrrega:</tspan> Corró PCR (-600V)</text>
    <text x="472" y="109" fill="#cbd5e1" font-size="9">2. <tspan fill="#38bdf8" font-weight="bold">Exposició:</tspan> Làser dibuixa imatge</text>
    <text x="472" y="127" fill="#cbd5e1" font-size="9">3. <tspan fill="#cbd5e1" font-weight="bold">Revelat:</tspan> Tòner s'adhereix</text>
    <text x="472" y="145" fill="#cbd5e1" font-size="9">4. <tspan fill="#34d399" font-weight="bold">Transferència:</tspan> Tòner al paper</text>
    <text x="472" y="163" fill="#cbd5e1" font-size="9">5. <tspan fill="#ef4444" font-weight="bold">Fusió:</tspan> Rodet tèrmic (180°C)</text>
    <text x="472" y="181" fill="#cbd5e1" font-size="9">6. <tspan fill="#94a3b8" font-weight="bold">Neteja:</tspan> Làmina neteja residu</text>
    <text x="562" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Tambor Fotosensible (OPC)</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 665 115 L 690 115" stroke="#f59e0b" stroke-width="2"/>

    <!-- Bloc 4: Fungibles i Desgast -->
    <rect x="695" y="20" width="145" height="210" rx="8" fill="url(#prnPartsGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="767" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">📦 FUNGIBLES</text>
    <text x="767" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Peces de Desgast</text>
    <line x1="705" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="707" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Cartutx Tòner</tspan></text>
    <text x="707" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Tambor OPC</tspan></text>
    <text x="707" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Pickup Rollers</tspan></text>
    <text x="717" y="148" fill="#94a3b8" font-size="9">Goma arrossegament</text>
    <text x="707" y="168" fill="#cbd5e1" font-size="9.5">• <tspan fill="#ef4444" font-weight="bold">Fusor tèrmic</tspan></text>
    <text x="707" y="188" fill="#94a3b8" font-size="9">Desgast per còpies</text>
    <text x="767" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Manteniment Proactiu</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Diagnòstic de Defectes Làser: <tspan fill="#f59e0b" font-weight="bold">Una taca que es repeteix a distàncies constants indica un rodet danyat.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Mesurant la separació entre dues taques consecutives es dedueix matemàticament el diàmetre exacte del rodet que cal substituir.</text>
  </svg>
</div>

---

## 🔍 Guia de Diagnosi de Defectes en Impressores Làser

| Símptoma Visual al Paper | Causa Tècnica Probable | Peça Responsable | Solució en Taller |
| :--- | :--- | :---: | :--- |
| **Taques o punts negres repetitius** a intervals regulars (ex: cada $75\text{ mm}$). | Esgarrapada o dany físic a la capa fotosensible del cilindre OPC. | **Tambor (Drum)** | Substituir la unitat de tambor fotosensible. |
| **El tòner es desprén en tocar el full** o s'esborra amb el dit. | Temperatura insuficient ($<180^\circ\text{C}$) o rodet de pressió danyat. | **Unitat Fusora (Fuser)** | Comprovar la làmpada del fusor o substituir el kit fusor complet. |
| **Ratlla vertical blanca contínua** al llarg de tota la pàgina. | Brúticia o pols al mirall d'escaneig del làser o filferro de càrrega brut. | **Mirall Làser / Corona** | Netejar el vidre del làser amb palet de cotó sec i moure el netejador de corona. |
| **Fons grisenc o pàgina completament negra**. | Fallada elèctrica al corró de càrrega primària (PCR) que no aplica tensió negativa. | **PCR / Font d'Alt Voltatge** | Netejar contactes elèctrics del cartutx o canviar el corró PCR. |
| **Encallament de paper a la safata d'entrada** (*Paper Jam*). | Rodets de goma d'arrossegament desgastats, polsosos o ressecs. | **Pickup Rollers** | Netejar la goma amb alcohol isopropílic o substituir les gomes d'arrossegament. |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **6.1** | [**Resultats d'Aprenentatge (RA)**](./ut0601.md) | Criteris d'avaluació en manteniment de perifèrics d'entrada i eixida (RA7) | [**📘 Llegir Apartat →**](./ut0601.md) |
| **6.2** | [**Manteniment de Pantalles i Impressores**](./ut0602.md) | Panells IPS vs VA vs OLED, connectors de vídeo, protocol de neteja, tecnologia làser en 6 fases (tòner, tambor, corrons, fusor) | [**🖥️ Estudiar Perifèrics →**](./ut0602.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA7:** Manté perifèrics interpretant instruccions de manteniment i descrivint els procediments de substitució d'elements fungibles.
- **Criteris d'Avaluació:**
  - S'han reconegut els tipus de panells i els seus defectes habituals (píxels morts, reflexos, artefactes de vídeo).
  - S'ha descrit el cicle complet d'impressió electrofotogràfica làser i s'han identificat les seues peces sotmeses a desgast.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments de Pantalles, Tecnologies i Mecànica d'Impressió
1. **Càlcul Matemàtic de Defectes Cíclics en Impressores Làser:**
   - La fórmula del perímetre d'un cilindre és:
     $$P = \pi \cdot d \implies d = \frac{P}{\pi}$$
   - En una impressora làser d'oficina, els fulls surten amb una taca negra circular que es repeteix exactament cada **$75{,}4\text{ mm}$** al llarg del full A4.
     - Calcula el diàmetre ($d$) del component cilíndric que té el dany físic.
     - Sabent que el tambor OPC té un diàmetre de $24\text{ mm}$ i el corró de càrrega PCR té un diàmetre de $12\text{ mm}$, quin dels dos elements cal substituir?
2. **Comparativa Tecnològica de Panells:**
   - Un client que treballa en edició fotogràfica professional demana consell sobre si comprar un monitor amb panell **VA** o **IPS**.
     - Quines diferències fonamentals hi ha respecte als angles de visió i la precisió cromàtica de l'espai de color sRGB/DCI-P3?
     - Si la pantalla fóra **OLED**, quin perill de degradació prematura (*burn-in*) suposa mantindre elements estàtics com la interfície de Photoshop o barres d'eines durant 8 hores diàries?
3. **Protocol Químic de Neteja de Pantalles:**
   - Per què està totalment desaconsellat utilitzar netejavidres domèstics, amoníac o alcohol de farmàcia de $96^\circ$ sobre panells LCD amb tractament antireflexos (*Matte Coating*)?
   - Quin líquid específic i quin tipus de baieta s'ha d'utilitzar per netejar monitors i òptiques làser sense danyar-les?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Auditoria i Diagnòstic de Cues d'Impressió amb PowerShell
1. Obre PowerShell com a administrador per obtindre l'estat de totes les impressores connectades a l'equip:
   ```powershell
   Get-Printer | Select-Object Name, DriverName, PortName, PrinterStatus, Shared
   ```
2. Consulta els treballs d'impressió encallats a la memòria de cua:
   ```powershell
   Get-PrintJob -PrinterName (Get-Printer)[0].Name | Select-Object Id, DocumentName, TotalPages, PagesPrinted, JobStatus
   ```

#### Repte 2: Resolució d'Encallament del Servei Print Spooler per Script
Quan un treball d'impressió corrupte bloqueja la cua i no es pot cancel·lar des de l'entorn gràfic:
1. Atura el servei del spooler d'impressió:
   ```powershell
   Stop-Service -Name Spooler -Force
   ```
2. Esborra manualment els fitxers temporals binaris (`.SHD` i `.SPL`) de la cua de Windows:
   ```powershell
   Remove-Item -Path "$env:SystemRoot\System32\spool\PRINTERS\*" -Force
   ```
3. Torna a engegar el servei i comprova que està actiu (*Running*):
   ```powershell
   Start-Service -Name Spooler
   Get-Service -Name Spooler
   ```

#### Repte 3: Comprovació de Resolució, Píxels i Freqüència de Refresc
1. Consulta amb PowerShell les propietats de la targeta gràfica i resolució del monitor:
   ```powershell
   Get-CimInstance Win32_VideoController | Select-Object Name, CurrentHorizontalResolution, CurrentVerticalResolution, CurrentRefreshRate, DriverVersion
   ```
2. Executa una prova de verificació de píxels morts mostrant patrons de pantalla completa en colors purs (blanc, negre, vermell, verd i blau) per identificar píxels apagats o encallats (*stuck pixels*).

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Diagnòstic de Defectes d'Impressió Làser** | Dedueix la peça avariada mitjançant el càlcul matemàtic de repetició de taques i coneix les 6 fases del cicle electrofotogràfic. | Identifica defectes bàsics com manca de tòner o encallament però no sap calcular el diàmetre del rodet danyat. | Recomana llençar la impressora davant qualsevol taca o confon impressores làser amb impressores d'injecció de tinta. |
| **Tecnologies de Pantalla i Connectors** | Compara IPS, VA i OLED amb rigor tècnic i selecciona el cable adequat (DisplayPort 2.1 vs HDMI 2.1) segons la resolució. | Coneix que l'OLED té millors negres però desconeix el fenomen de burn-in o confon la taxa de refresc amb el temps de resposta. | No distingeix entre HDMI i DisplayPort o utilitza productes corrosius que fan malbé el recobriment de la pantalla. |
| **Gestió de Cues d'Impressió i Scripts** | Desbloqueja cues d'impressió penjades mitjançant comandes PowerShell i neteja la carpeta `PRINTERS` amb seguretat. | Reinicia la impressora des de l'entorn gràfic però es bloqueja quan un document corrupte no es deixa esborrar. | Incapaç d'accedir a la consola d'administració de dispositius d'impressió o desinstal·la els controladors innecessàriament. |
