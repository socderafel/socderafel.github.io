---
layout: default
title: "Muntatge i Manteniment d'Equips — UD4 La Placa Base, el Processador i la Memòria RAM"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD4"
---

# UT4 - La Placa Base, el Processador (CPU) i la Memòria RAM

En aquesta unitat es detalla el nucli de comunicació i computació d'un equip microinformàtic: l'anatomia completa de la placa base, els tipus de sòcol de CPU (LGA, PGA, BGA), el chipset i els busos de comunicació PCIe, l'arquitectura de memòria RAM (DDR4 vs DDR5, Dual Channel) i la configuració avançada del microprogramari UEFI.

---

## 🧠 Anatomia de la Placa Base i Arquitectura del Sistema

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Placa Base, Processador, Memòria RAM i Busos PCIe</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Sòcols de CPU, distribució de línies de comunicació, canals de memòria i microprogramari UEFI</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="mbCpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="mbChipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="mbRamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="mbUefiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Sòcol de CPU & VRM -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#mbCpuGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🔲 SÒCOL CPU &amp; VRM</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Nucli de Processament</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">LGA:</tspan> Pins a la placa base</text>
    <text x="42" y="108" fill="#94a3b8" font-size="9">Intel LGA1700 / AMD AM5</text>
    <text x="32" y="128" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">PGA:</tspan> Pins al processador</text>
    <text x="42" y="143" fill="#94a3b8" font-size="9">AMD AM4 històric</text>
    <text x="32" y="163" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Fases VRM:</tspan> MOSFETs</text>
    <text x="42" y="178" fill="#94a3b8" font-size="9">Regulen 12V a 1,2V per a CPU</text>
    <text x="115" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Fixació i Alimentació</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Chipset i Busos PCIe -->
    <rect x="240" y="20" width="200" height="210" rx="8" fill="url(#mbChipGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="340" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🎛️ CHIPSET &amp; BUSOS PCIe</text>
    <text x="340" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Autopistes de Comunicació</text>
    <line x1="250" y1="73" x2="430" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Línies CPU Directes:</tspan></text>
    <text x="262" y="110" fill="#cbd5e1" font-size="9">  ↳ PCIe x16 (GPU Gràfica)</text>
    <text x="262" y="125" fill="#cbd5e1" font-size="9">  ↳ M.2 NVMe x4 (SSD)</text>
    <text x="252" y="148" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc" font-weight="bold">Bus DMI cap al Chipset:</tspan></text>
    <text x="262" y="165" fill="#94a3b8" font-size="9">Controla SATA, USB 3.2,</text>
    <text x="262" y="180" fill="#94a3b8" font-size="9">Ethernet LAN i Àudio Realtek</text>
    <text x="340" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Distribució d'E/S</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 440 115 L 465 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Memòria RAM Dual Channel -->
    <rect x="470" y="20" width="190" height="210" rx="8" fill="url(#mbRamGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="565" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">⚡ RAM &amp; DUAL CHANNEL</text>
    <text x="565" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Ample de Banda 128-bit</text>
    <line x1="480" y1="73" x2="650" y2="73" stroke="#334155"/>
    <text x="482" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">DDR4 vs DDR5:</tspan></text>
    <text x="492" y="110" fill="#cbd5e1" font-size="9">DDR4: 1,2V | DDR5: 1,1V (PMIC)</text>
    <text x="482" y="130" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Instal·lació Dual Channel:</tspan></text>
    <text x="492" y="147" fill="#34d399" font-size="9">Ranures A2 i B2 (Canal 2)</text>
    <text x="492" y="162" fill="#94a3b8" font-size="8.5">Duplica l'amplada de banda</text>
    <text x="482" y="185" fill="#cbd5e1" font-size="9.5">• Perfils: <tspan fill="#38bdf8">XMP (Intel) / EXPO (AMD)</tspan></text>
    <text x="565" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Memòria Volàtil d'Alta Velocitat</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 660 115 L 685 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Microprogramari UEFI -->
    <rect x="690" y="20" width="150" height="210" rx="8" fill="url(#mbUefiGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="765" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">🛡️ MICROPROGRAMARI</text>
    <text x="765" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">UEFI, BIOS i Seguretat</text>
    <line x1="700" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="702" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">UEFI:</tspan> Arrencada GPT</text>
    <text x="702" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Secure Boot:</tspan> Valida</text>
    <text x="712" y="128" fill="#94a3b8" font-size="9">firmes digitals del SO</text>
    <text x="702" y="148" fill="#cbd5e1" font-size="9.5">• <tspan fill="#ef4444" font-weight="bold">Clear CMOS:</tspan></text>
    <text x="712" y="165" fill="#cbd5e1" font-size="9">Jumper o pila CR2032</text>
    <text x="712" y="180" fill="#94a3b8" font-size="8.5">Restaura valors fàbrica</text>
    <text x="765" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Control de Baix Nivell</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla de Muntatge Dual Channel: <tspan fill="#34d399" font-weight="bold">Si instales només 2 mòduls de RAM en una placa de 4 ranures,</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">col·loca'ls sempre a les ranures 2 i 4 (A2 i B2) per a garantir la màxima estabilitat de senyal i activar els 128 bits de bus.</text>
  </svg>
</div>

---

## 📐 Comparativa de Factors de Forma de Plaques Base

| Factor de Forma | Dimensions Físiques | Ranures RAM Típiques | Ranures PCIe x16 | Connectors M.2 NVMe | Ús i Xassís Compatible |
| :---: | :---: | :---: | :---: | :---: | :--- |
| **E-ATX** (*Extended ATX*) | $305 \times 330\text{ mm}$ | 8 ranures (Quad Channel) | 4 o més ranures | 4 a 5 ports | Servidors, estacions de treball, caixes Gran Torre |
| **ATX Estàndard** | $305 \times 244\text{ mm}$ | 4 ranures (Dual Channel) | 2 a 3 ranures | 3 a 4 ports | Format estàndard corporatiu i gaming, caixes Semitorre |
| **Micro-ATX** (*mATX*) | $244 \times 244\text{ mm}$ | 2 a 4 ranures | 1 a 2 ranures | 2 ports | Equips compactes d'oficina i pressupostos equilibrats |
| **Mini-ITX** | $170 \times 170\text{ mm}$ | 2 ranures | 1 ranura | 1 a 2 ports | Ordinadors ultracompactes SFF (*Small Form Factor*), HTPC |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **4.1** | [**Resultats d'Aprenentatge (RA)**](./ut0401.md) | Objectius curriculars de selecció de components i comparació de prestacions de fabricants | [**📘 Llegir Apartat →**](./ut0401.md) |
| **4.2** | [**La Placa Base, el Processador i la RAM**](./ut0402.md) | Infografia de la placa base (sockets, PCIe, M.2, chipset), factors de forma (ATX/mATX/ITX), DDR4 vs DDR5, Dual Channel, UEFI, Secure Boot i Clear CMOS | [**🧠 Estudiar Teoria →**](./ut0402.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA1:** Selecciona els components d'integració d'un equip microinformàtic estàndard, descrivint les seues funcions i comparant prestacions de diferents fabricants.
- **Criteris d'Avaluació:**
  - S'ha identificat el paper del sòcol de CPU i el chipset en la compatibilitat de components.
  - S'ha configurat la memòria RAM en mode de doble canal aprofitant el màxim ample de banda.
  - S'ha navegat pel menú de configuració de la UEFI per a gestionar paràmetres de seguretat i arrencada.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments de la Placa Base, Busos i Memòria
1. **Càlcul d'Amplada de Banda en Memòria RAM:**
   - La fórmula matemàtica per determinar l'amplada de banda màxima d'un canal de memòria de 64 bits (8 Bytes) és:
     $$\text{Ample de Banda (GB/s)} = \frac{\text{Taxa de Transferència (MT/s)} \times 8\text{ Bytes}}{1000}$$
   - Calcula l'amplada de banda teòrica per a:
     - Un sol mòdul **DDR4-3200 MT/s** funcionant en Single Channel (64 bits).
     - Dos mòduls **DDR4-3200 MT/s** funcionant en **Dual Channel** (128 bits).
     - Dos mòduls **DDR5-6000 MT/s** funcionant en Dual Channel.
   - Quin benefici directe té aquest increment d'ample de banda per a les targetes gràfiques integrades a la CPU (iGPU) que comparteixen la memòria RAM com a memòria de vídeo (VRAM)?
2. **Jerarquia de Línies PCIe i Chipset:**
   - Un processador modern Intel Core o AMD Ryzen ofereix **24 línies PCIe 5.0/4.0** directes des del xip.
     - Si s'instal·la una targeta gràfica dedicada a la ranura principal que utilitza 16 línies ($x16$), i una unitat SSD NVMe d'alta velocitat que en requereix 4 ($x4$), quantes línies lliures queden directament connectades a la CPU?
     - Si la placa base disposa de 6 ports SATA addicionals, 10 ports USB 3.2 i targeta Ethernet de $2{,}5\text{ Gbps}$, com es connecten aquests perifèrics al sistema sense col·lapsar el processador?
3. **Mecanisme de Recuperació amb Clear CMOS:**
   - Un company de laboratori modifica el voltatge i freqüències de la memòria RAM activant un perfil inestable a la UEFI, i en reiniciar l'ordinador no mostra cap senyal de vídeo a la pantalla ni permet accedir al teclat.
     - Explica el procediment físic pas a pas per executar un **Clear CMOS** mitjançant el jumper `CLR_CMOS` de 2 pins.
     - Què fa la pila de botó de liti de 3V tipus **CR2032** i per què la memòria de configuració no s'esborra quan l'equip s'apaga de l'interruptor si la pila funciona correctament?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Auditoria de Placa Base i Ranures de Memòria amb PowerShell
1. Obre PowerShell com a administrador per identificar la placa base i versió de la BIOS:
   ```powershell
   Get-CimInstance Win32_BaseBoard | Select-Object Manufacturer, Product, SerialNumber, Version
   Get-CimInstance Win32_BIOS | Select-Object Manufacturer, SMBIOSBIOSVersion, ReleaseDate
   ```
2. Consulta els detalls tècnics de cada mòdul de memòria RAM instal·lat i verifica si opera a la freqüència correcta:
   ```powershell
   Get-CimInstance Win32_PhysicalMemory | Select-Object BankLabel, DeviceLocator, Capacity, Speed, ConfiguredClockSpeed, PartNumber
   ```
3. Comprova en quin banc de memòria (`DeviceLocator`) està col·locat cada mòdul (ex: `DIMM 2` / `DIMM 4` o `ChannelA-DIMM1`).

#### Repte 2: Comprovació d'Estat de Secure Boot i Taula de Particions
1. Executa la comanda següent per verificar si el sistema està arrencant en mode UEFI nadiu amb signatura de seguretat:
   ```powershell
   Confirm-SecureBootUEFI
   ```
2. Comprova si el disc d'arrencada utilitza l'esquema modern **GPT** (*GUID Partition Table*) o l'esquema clàssic **MBR**:
   ```powershell
   Get-Disk | Where-Object IsBoot -Eq $True | Select-Object Number, FriendlyName, PartitionStyle
   ```
3. Si el resultat de `PartitionStyle` és `GPT`, confirma que compleix els requisits moderns d'arrencada segura per a Windows 11.

#### Repte 3: Identificació Física del Connector Frontal (F_PANEL)
En una placa base de taller:
1. Localitza el bloc de pins **F_PANEL** (normalment situat a la cantonada inferior dreta de la placa).
2. Identifica els parells de pins corresponents:
   - `POWER SW` (Interruptor d'encesa, sense polaritat).
   - `RESET SW` (Interruptor de reinici, sense polaritat).
   - `POWER LED` (LED d'equip engegat, **té polaritat +/-**).
   - `HDD LED` (LED d'activitat de disc dur, **té polaritat +/-**).
3. Simula l'arrencada d'emergència en banc de proves fent un contacte breu d'1 segon entre els dos pins de `POWER SW` amb la punta plana d'un tornavís aïllat.

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Anatomia de Placa i Sòcols de CPU** | Distingeix sockets LGA, PGA i BGA, identifica les fases VRM, el chipset i la distribució de línies PCIe. | Reconeix el sòcol de CPU però confon les línies directes del processador amb les que proporciona el chipset. | Desconeix la funció del chipset o confon el factor de forma de la placa (ATX/mATX) amb el model de CPU. |
| **Arquitectura de Memòria i Dual Channel** | Argumenta per què s'instal·len els mòduls en A2/B2, calcula l'amplada de banda i activa perfils XMP/EXPO a UEFI. | Col·loca la RAM en Dual Channel seguint instruccions però no sap explicar per què es duplica l'amplada de banda. | Instal·la la memòria en ranures contigües (Single Channel) provocant pèrdua de rendiment sense adonar-se'n. |
| **Configuració UEFI i Diagnòstic Clear CMOS** | Domina la navegació per la UEFI, verifica Secure Boot amb PowerShell i executa Clear CMOS per rescatar la màquina. | Sap entrar a la BIOS/UEFI però té dificultats per localitzar opcions d'arrencada o executar el pont de neteja. | Incapaç d'accedir a la UEFI o bloqueja la màquina modificant paràmetres crítics sense saber restablir-los. |
