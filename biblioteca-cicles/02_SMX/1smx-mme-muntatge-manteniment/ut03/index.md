---
layout: default
title: "Muntatge i Manteniment d'Equips — UD3 Components del PC: Caixes, Refrigeració i Emmagatzematge"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3"
---

# UT3 - Components del PC: Caixes, Refrigeració i Emmagatzematge

En aquesta unitat s'estudien els components essencials de l'estructura física i l'emmagatzematge permanent d'un ordinador: els factors de forma de caixes, la dinàmica de flux d'aire i refrigeració per aire o líquida, i la comparativa tecnològica entre discs durs magnètics (HDD) i unitats d'estat sòlid (SSD SATA i NVMe M.2).

---

## 💾 Arquitectura d'Emmagatzematge i Termodinàmica

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Emmagatzematge (HDD vs SSD SATA vs NVMe) i Flux d'Aire</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Comparativa de velocitats de transferència, cel·les NAND Flash i dinàmica tèrmica del xassís</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="hddGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#64748b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#334155" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="ssdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="nvmeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="airGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Disc HDD Magnètic -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#hddGrad)" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="115" y="45" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">💿 HDD MAGNÈTIC (3.5")</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Plats mecànics giratoris</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• Velocitat: <tspan fill="#f59e0b">5400 - 7200 RPM</tspan></text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• Bus: <tspan fill="#94a3b8">SATA III (6 Gbps)</tspan></text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• Seqüencial: <tspan fill="#cbd5e1">150 - 250 MB/s</tspan></text>
    <text x="32" y="153" fill="#cbd5e1" font-size="9.5">• Latència: <tspan fill="#ef4444">10 - 15 ms (Molt lenta)</tspan></text>
    <text x="32" y="173" fill="#cbd5e1" font-size="9.5">• IOPS aleatoris: <tspan fill="#ef4444">~100 IOPS</tspan></text>
    <text x="32" y="193" fill="#94a3b8" font-size="9">Ús: Còpies seguretat, dades massives</text>
    <text x="115" y="218" fill="#94a3b8" font-size="9" text-anchor="middle" font-weight="bold">Sensible a Cops i Vibracions</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#94a3b8" stroke-width="2"/>

    <!-- Bloc 2: SSD SATA 2.5" -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#ssdGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="335" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🗄️ SSD SATA (2.5")</text>
    <text x="335" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">NAND Flash sobre cable SATA</text>
    <line x1="250" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• Tecnologia: <tspan fill="#38bdf8">Sense peces mòbils</tspan></text>
    <text x="252" y="113" fill="#cbd5e1" font-size="9.5">• Bus: <tspan fill="#f59e0b">SATA III (Coll d'ampolla)</tspan></text>
    <text x="252" y="133" fill="#cbd5e1" font-size="9.5">• Seqüencial: <tspan fill="#34d399">~550 MB/s (Límit)</tspan></text>
    <text x="252" y="153" fill="#cbd5e1" font-size="9.5">• Latència: <tspan fill="#34d399">&lt; 0,1 ms (Instantani)</tspan></text>
    <text x="252" y="173" fill="#cbd5e1" font-size="9.5">• IOPS aleatoris: <tspan fill="#38bdf8">~90.000 IOPS</tspan></text>
    <text x="252" y="193" fill="#94a3b8" font-size="9">Ús: Actualització de PCs antics</text>
    <text x="335" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Silenciós i Resistent a Cops</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 3: SSD NVMe M.2 -->
    <rect x="460" y="20" width="200" height="210" rx="8" fill="url(#nvmeGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="560" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">⚡ SSD M.2 NVMe (PCIe)</text>
    <text x="560" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Connexió directa a la CPU</text>
    <line x1="470" y1="73" x2="650" y2="73" stroke="#334155"/>
    <text x="472" y="93" fill="#cbd5e1" font-size="9.5">• Bus: <tspan fill="#c084fc" font-weight="bold">PCIe 4.0 / 5.0 x4</tspan></text>
    <text x="472" y="113" fill="#cbd5e1" font-size="9.5">• Seqüencial: <tspan fill="#34d399" font-weight="bold">7.000 - 14.000 MB/s</tspan></text>
    <text x="472" y="133" fill="#cbd5e1" font-size="9.5">• Latència: <tspan fill="#34d399">&lt; 0,02 ms (Ultra baixa)</tspan></text>
    <text x="472" y="153" fill="#cbd5e1" font-size="9.5">• IOPS aleatoris: <tspan fill="#c084fc">&gt; 1.000.000 IOPS</tspan></text>
    <text x="472" y="173" fill="#f59e0b" font-size="9.5">• Termal: <tspan fill="#f59e0b">Requereix dissipador</tspan></text>
    <text x="472" y="193" fill="#94a3b8" font-size="9">Ús: Sistema Operatiu, Gaming, IA</text>
    <text x="560" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Màxim Rendiment Actual</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 660 115 L 685 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 4: Refrigeració i Pressió -->
    <rect x="690" y="20" width="150" height="210" rx="8" fill="url(#airGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="765" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">❄️ FLUX D'AIRE</text>
    <text x="765" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Pressió Positiva vs Negativa</text>
    <line x1="700" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="702" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Pressió Positiva:</tspan></text>
    <text x="712" y="110" fill="#cbd5e1" font-size="9">Intake &gt; Exhaust</text>
    <text x="712" y="125" fill="#34d399" font-size="9">★ Evita entrada de pols</text>
    <text x="702" y="148" fill="#cbd5e1" font-size="9.5">• <tspan fill="#ef4444" font-weight="bold">Pressió Negativa:</tspan></text>
    <text x="712" y="165" fill="#cbd5e1" font-size="9">Exhaust &gt; Intake</text>
    <text x="712" y="180" fill="#ef4444" font-size="9">Aspirador de pols</text>
    <text x="765" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Equilibri Tèrmic</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Resistència NAND Flash (TBW): <tspan fill="#38bdf8" font-weight="bold">La vida útil d'un SSD es mesura en Terabytes Escrits (TBW).</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Les cel·les TLC (3 bits/cel·la) i QLC (4 bits/cel·la) degraden la capa d'òxid amb cada cicle d'esborrat elèctric.</text>
  </svg>
</div>

---

## 📊 Comparativa Tecnològica de Cel·les NAND Flash

| Tipus de Cel·la | Bits per Cel·la | Estats de Voltatge | Cicles P/E (Programació / Esborrat) | Densitat d'Espai | Cost per Gigabyte | Fiabilitat i Rendiment |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **SLC** (*Single-Level Cell*) | **1 bit** | $2^1 = 2$ | $\approx 50.000 - 100.000$ | Molt Baixa | Molt Alt | Màxima velocitat i fiabilitat (militar / enterprise extrem) |
| **MLC** (*Multi-Level Cell*) | **2 bits** | $2^2 = 4$ | $\approx 3.000 - 10.000$ | Baixa | Alt | Alta durabilitat (estacions de treball professionals) |
| **TLC** (*Triple-Level Cell*) | **3 bits** | $2^3 = 8$ | $\approx 1.000 - 3.000$ | Alta | Mitjà | **Estàndard actual recomanat** (equilibri perfecte rendiment/preu) |
| **QLC** (*Quad-Level Cell*) | **4 bits** | $2^4 = 16$ | $\approx 300 - 1.000$ | Molt Alta | Baix | Emmagatzematge secundari econòmic; caiguda de velocitat en escriptura contínua |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **3.1** | [**El Xassís o Caixa del PC**](./ut0301.md) | Factors de forma (Torre, Semitorre, Micro-ATX, Mini-ITX), gestió de cablejat, badies d'expansió | [**📘 Llegir Apartat →**](./ut0301.md) |
| **3.2** | [**Refrigeració i Ventilació**](./ut0302.md) | Flux d'aire (pressió positiva vs negativa), refrigeració per aire (dissipadors i heatpipes), refrigeració líquida AIO | [**❄️ Estudiar Refrigeració →**](./ut0302.md) |
| **3.3** | [**Dispositius d'Emmagatzematge**](./ut0303.md) | Comparativa HDD vs SSD SATA vs M.2 NVMe, arquitectura de cel·les NAND Flash (TLC/QLC), velocitats, latències i fiabilitat TBW | [**💾 Veure Comparativa →**](./ut0303.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA1:** Reconeix els blocs funcionals d'un equip microinformàtic i les seues funcions.
- **Criteris d'Avaluació:**
  - S'han identificat i comparat els diferents suports d'emmagatzematge secundari fix i extraïble.
  - S'ha avaluat l'impacte de la refrigeració i el flux d'aire en la vida útil i rendiment dels components.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Comparativa d'Emmagatzematge i Termodinàmica
1. **Rendiment Seqüencial vs Operacions Aleatòries 4K (IOPS):**
   - Un disc mecànic HDD lliura una velocitat seqüencial de $180\text{ MB/s}$, mentre que un SSD SATA lliura $550\text{ MB/s}$ (unes 3 vegades més). Tanmateix, a l'hora d'iniciar el sistema operatiu Windows, l'SSD arrenca en 10 segons i el disc dur triga 90 segons (9 vegades més).
     - Per què en l'arrencada del sistema operatiu no importa la velocitat seqüencial sinó el nombre d'**IOPS** (*Input/Output Operations Per Second*) en blocs xicotets de $4\text{ KB}$?
     - Com influeix el temps de cerca mecànic del capçal del disc dur en aquesta diferència abismal?
2. **Càlcul de Vida Útil TBW (*Terabytes Written*):**
   - Un SSD NVMe M.2 de $1\text{ TB}$ té una especificació de fiabilitat de **$600\text{ TBW}$**.
     - Si un usuari d'oficina escriu una mitjana de $35\text{ GB}$ de fitxers diaris al disc, quants anys trigarà teòricament a esgotar els cicles d'esborrat de les cel·les NAND?
     - Què fa el controlador de l'SSD quan detecta cel·les defectuoses mitjançant l'algorisme de **Wear Leveling** (anivellament de desgast)?
3. **Disseny del Flux Tèrmic del Xassís:**
   - En una caixa de PC semitorre es disposa de 3 ventiladors d'entrada frontals (*intake*) de $120\text{ mm}$ amb filtre antipols i 1 ventilador posterior d'extracció (*exhaust*).
     - Aquesta configuració genera pressió d'aire positiva o negativa?
     - Quin benefici crític té la pressió positiva respecte a l'entrada de pols per les ranures no filtrades de la caixa?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Diagnòstic d'Estat S.M.A.R.T. amb PowerShell
1. Obre PowerShell com a administrador per consultar la integritat física de totes les unitats de disc:
   ```powershell
   Get-PhysicalDisk | Select-Object DeviceId, FriendlyName, MediaType, BusType, HealthStatus, OperationalStatus
   ```
2. Consulta el percentatge de desgast restant i la temperatura dels discs NVMe:
   ```powershell
   Get-StorageReliabilityCounter -PhysicalDisk (Get-PhysicalDisk)[0] | Select-Object Temperature, ReadErrorsTotal, WriteErrorsTotal, Wear
   ```
3. Verifica que l'estat `HealthStatus` és `Healthy` (saludable) i que el comptador d'errors d'escriptura està a 0.

#### Repte 2: Prova de Rendiment d'Escriptura Seqüencial amb Consola a Linux
1. En un equip amb Ubuntu Linux, executa una prova de velocitat d'escriptura directa mesurant el temps de resposta del disc:
   ```bash
   sync; dd if=/dev/zero of=tempfile bs=1M count=1024; sync
   ```
2. Elimina el fitxer temporal generat:
   ```bash
   rm tempfile
   ```
3. Comprova la taxa de transferència en $\text{MB/s}$ retornada i compara-la amb la velocitat teòrica del bus (SATA o PCIe).

#### Repte 3: Monitorització de Temperatures Tèrmiques de CPU i SSD sota Càrrega
1. Descarrega i executa una eina de monitorització tèrmica de maquinari (com HWMonitor o OpenHardwareMonitor).
2. Registra la temperatura de repòs (*Idle*) del processador i de l'SSD NVMe.
3. Executa una prova de càrrega breu (com obrir un joc, renderitzar o passar CrystalDiskMark):
   - A quina temperatura arriba l'SSD NVMe sense dissipador metàl·lic?
   - Si supera els $70^\circ\text{C}$, comprova si s'activa el mecanisme de protecció de **Thermal Throttling** (reducció forçada de la velocitat per evitar danys al silici).

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Comparativa d'Emmagatzematge i Protocols** | Justifica les diferències tècniques entre HDD, SSD SATA i NVMe PCIe explicant IOPS, latència i cel·les NAND TLC/QLC. | Coneix que l'SSD és més ràpid que l'HDD però confon el format físic M.2 amb el protocol lògic NVMe. | Creu que tots els discs són iguals o no comprèn la diferència entre memòria RAM i emmagatzematge secundari. |
| **Càlcul de Vida Útil TBW i Diagnosi SMART** | Interpreta els paràmetres SMART de salut, calcula la durabilitat TBW d'un SSD i descriu l'algorisme de Wear Leveling. | Sap consultar l'estat SMART però no sap interpretar la columna de valors bruts ni calcular els anys de vida útil. | Desconeix el significat de TBW o pensa que els SSDs no pateixen cap desgast per no tindre peces mòbils. |
| **Flux d'Aire i Control Tèrmic** | Dissenya configuracions de refrigeració equilibrades amb pressió positiva i avalua l'impacte del Thermal Throttling. | Identifica la posició dels ventiladors però no té en compte la direcció de l'aire ni l'acumulació de pols. | Munta ventiladors en sentits oposats creant turbulències o deixa components d'alta potència sense dissipació. |
