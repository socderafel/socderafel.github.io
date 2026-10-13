---
layout: default
title: "UD1 — Presentació del Curs i Metodologia de Treball"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
---

# 📘 UD1 — Presentació del Curs i Metodologia de Treball

Benvinguts al mòdul de **Sistemes Operatius Monolloc (SOM)** de primer curs del Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes. Aquesta unitat introductòria estableix les bases operatives, l'arquitectura bàsica dels sistemes i la metodologia de treball que guiarà tota la formació tècnica al llarg del curs acadèmic.

---

## 🗺️ Mapa d'Aprenentatge i Competències Tècniques de SOM

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Ruta de Competències Professionals: De l'Arquitectura a l'Administració</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Evolució formativa del tècnic de suport microinformàtic en sistemes monolloc</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="somU1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Fase 1: Arquitectura i Nucli -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#somU1Grad1)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🧠 1. ARQUITECTURA I NUCLI</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Fonaments del Sistema</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Ring 0 vs Ring 3:</tspan> Nucli i Usuari</text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#818cf8" font-weight="bold">Syscalls:</tspan> Interfície d'accés</text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• Gestió de memòria virtual</text>
    <text x="32" y="153" fill="#34d399" font-size="9.5">• <tspan font-weight="bold">Planificació:</tspan> Processos / PCB</text>
    <text x="32" y="173" fill="#cbd5e1" font-size="9.5">• Càlcul adreçament 32 vs 64b</text>
    <text x="32" y="193" fill="#94a3b8" font-size="9">Controlador de dispositius</text>
    <text x="115" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Comprendre el Nucli</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Fase 2: Virtualització i Laboratori -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#somU1Grad2)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">💻 2. VIRTUALITZACIÓ</text>
    <text x="335" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Aïllament i Hipervisors</text>
    <line x1="250" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc" font-weight="bold">Hipervisors:</tspan> Tipus 1 vs Tipus 2</text>
    <text x="252" y="113" fill="#cbd5e1" font-size="9.5">• Discs VDI, VMDK i VHDX</text>
    <text x="252" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Xarxes:</tspan> NAT, Pont, Interna</text>
    <text x="252" y="153" fill="#34d399" font-size="9.5">• <tspan font-weight="bold">Instantànies:</tspan> Snapshots</text>
    <text x="252" y="173" fill="#cbd5e1" font-size="9.5">• Guest Additions i integració</text>
    <text x="252" y="193" fill="#94a3b8" font-size="9">Banc de proves segur al 100%</text>
    <text x="335" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Laboratori Virtualitzat</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Fase 3: Instal·lació i Particions -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#somU1Grad3)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">⚙️ 3. INSTAL·LACIÓ &amp; BOOT</text>
    <text x="555" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Firmware i Emmagatzematge</text>
    <line x1="470" y1="73" x2="640" y2="73" stroke="#334155"/>
    <text x="472" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">GPT vs MBR:</tspan> Límits de capacitat</text>
    <text x="472" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">UEFI vs BIOS:</tspan> Secure Boot</text>
    <text x="472" y="133" fill="#cbd5e1" font-size="9.5">• Partició ESP FAT32 i BCD</text>
    <text x="472" y="153" fill="#cbd5e1" font-size="9.5">• Gestors: GRUB 2 i Windows Boot</text>
    <text x="472" y="173" fill="#f59e0b" font-size="9.5">• <tspan font-weight="bold">Dual Boot:</tspan> Convivència Win/Linux</text>
    <text x="472" y="193" fill="#94a3b8" font-size="9">Preparació USB Rufus/Ventoy</text>
    <text x="555" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Desplegament Multi-SO</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Fase 4: Administració i Scripting -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#somU1Grad4)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⚡ 4. ADMINISTRACIÓ</text>
    <text x="760" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Consola i Automatització</text>
    <line x1="690" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="692" y="93" fill="#cbd5e1" font-size="9.5">• Jerarquia FHS (`/`, `/etc`, `/var`)</text>
    <text x="692" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Permisos POSIX:</tspan> chmod/chown</text>
    <text x="692" y="133" fill="#cbd5e1" font-size="9.5">• Consola: Bash i PowerShell</text>
    <text x="692" y="153" fill="#f59e0b" font-size="9.5">• <tspan font-weight="bold">Crontab:</tspan> Tasques periòdiques</text>
    <text x="692" y="173" fill="#34d399" font-size="9.5">• Còpies de seguretat i manteniment</text>
    <text x="692" y="193" fill="#94a3b8" font-size="9">Monitoratge de rendiment</text>
    <text x="760" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Tècnic Autònom</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Missió del Tècnic SMX: <tspan fill="#34d399" font-weight="bold">Capacitat per a instal·lar, particionar, securitzar i gestionar qualsevol estació de treball corporativa.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">El domini combinat de sistemes GNU/Linux i Microsoft Windows en consola és la clau de l'èxit en el mercat tecnològic actual.</text>
  </svg>
</div>

---

## 📊 Matriu de Competències i Eines de Diagnòstic del Tècnic de Sistemes

| Àmbit Operatiu | Objectiu Professional | Eines i Entorns Clau | Risc per Falta de Coneixement |
| :--- | :--- | :--- | :--- |
| **Arquitectura i Gestió de Recursos** | Comprendre l'ús de CPU, busos d'adreces de memòria, paginació i espai d'usuari vs nucli. | Monitor de recursos, `htop`, `/proc`, WMI/PowerShell. | Pèrdua de rendiment, col·lapse per fuites de memòria o bloquejos del sistema (*kernel panic*). |
| **Virtualització de Sistemes** | Desplegar laboratoris aïllats per provar instal·lacions, servidors i programari sense danyar l'equip físic. | Oracle VM VirtualBox, KVM, VMware, fitxers VDI/VMDK. | Alteració accidental de discs físics de producció o pèrdua de dades de l'amfitrió. |
| **Particionament i Arrencada** | Configurar taules GPT/MBR, particions ESP i gestors d'arrencada amb suport de doble sistema (*Dual Boot*). | `gparted`, `diskpart`, GRUB 2, `efibootmgr`, BCDedit. | Destrucció de taules de partició, pèrdua d'arrencada de sistemes existents. |
| **Línia d'Ordres i Automatització** | Executar diagnòstics ràpids, gestionar permisos de seguretat i programar scripts periòdics. | Bash, PowerShell, `chmod`, `chown`, `cron`, *Task Scheduler*. | Dependència de la interfície gràfica, vulnerabilitats per permisos excessius (`777`). |

---

## 🛡️ Normativa del Laboratori Tècnic i Ciberseguretat

En el laboratori de sistemes es treballa amb privilegis d'administració màxima (`root` / `Administrator`). Això exigeix un protocol de rigor absolut:
- **Separació estricta d'ambients:** Les proves potencialment destructives (esborrament de taules de partició, proves de càrrega o modificació de registres) s'executen exclusivament en màquines virtuals o discos físics dedicats a proves.
- **Higiene de credencials:** Totes les instal·lacions de laboratori han d'utilitzar contrasenyes robustes que complisquen el patró corporatiu establert (`Smx2024!` o la combinació segura fixada per l'organització).
- **Control de mitjans externs:** Qualsevol unitat flash USB utilitzada per a eines o arrencada (*Live USB*) ha de ser analitzada prèviament per evitar la transferència de codi maliciós a la infraestructura del taller.

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **1.1** | [**Presentació i Guia del Mòdul**](./ut0101.md) | Objectius de SOM, criteris d'avaluació, competències i organització del laboratori | [**📘 Accedir a la Guia →**](./ut0101.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA1:** Reconeix les característiques i l'arquitectura dels sistemes informàtics i operatius, descrivint les seues funcions i components.
- **Criteris d'Avaluació:**
  - S'han identificat els components funcionals d'un sistema operatiu i la seua interacció amb el maquinari.
  - S'ha verificat la importància de les polítiques de seguretat, aïllament i procediment en l'entorn de treball tècnic.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul d'Espai de Memòria i Límits d'Arquitectura:**
   - La quantitat màxima de memòria RAM que un processador pot adreçar físicament ve determinada per la fórmula:
     $$\text{Capacitat Màxima} = 2^n \text{ bytes}$$
     on $n$ és el nombre de línies del bus d'adreces de la CPU.
   - **Preguntes de càlcul:**
     - Demostra mitjançant el càlcul matemàtic exacte per quina raó una arquitectura clàssica de $32\text{ bits}$ no pot gestionar més de $4\text{ GiB}$ ($4.294.967.296\text{ bytes}$) de memòria RAM.
     - Si una placa base moderna utilitza un processador amb un bus d'adreces físic de $48\text{ bits}$ (estàndard actual en x86-64), quants Terabytes (TiB) de memòria RAM física pot adreçar com a màxim?
     - Si s'instal·la un sistema operatiu de 32 bits sobre un ordinador físic que disposa de 16 GB de RAM física instal·lada, quants gigabytes de memòria quedaran completament desaprofitats i inaccessibles pel nucli?

2. **Càlcul de Temps de Clonació d'Imatges de Sistema:**
   - Un servei tècnic ha de desplegar una imatge mestra d'Ubuntu de $28\text{ GiB}$ sobre 24 equips d'un laboratori.
   - **Preguntes de dimensionament:**
     - Si la xarxa local funciona a $1\text{ Gbps}$ ($1.000\text{ Mbps}$) i s'utilitza una transmissió unicast amb un rendiment útil de xarxa del $85\%$ ($850\text{ Mbps}$ reals), quant de temps en segons i minuts trigarà a transferir-se la imatge a un únic equip?
     - Si s'utilitza una eina de difusió múltiple (*Multicast*) com Clonezilla Server que envia la mateixa imatge a tots 24 equips de forma simultània a $700\text{ Mbps}$ globals, quant de temps es necessitarà per completar tot el taller? Compara l'estalvi de temps respecte al mètode d'instal·lació equip per equip.

3. **Marge de Seguretat i Espai d'Intercanvi (*Swap*):**
   - Una estació de treball disposa de $8\text{ GiB}$ de RAM física i un disc SSD de $256\text{ GB}$.
   - **Preguntes d'anàlisi:**
     - Si es recomana una partició de *swap* o fitxer d'intercanvi equivalent a $1\times$ la RAM si no s'utilitza hibernació, o $1{,}5\times$ la RAM si s'activa la hibernació completa a disc (*suspend to disk*), quant d'espai en GB s'haurà de reservar en cada cas?
     - Què ocorre amb el rendiment d'un equip si la quantitat de memòria RAM física s'esgota completament i el sistema operatiu es veu forçat a realitzar paginació massiva (*thrashing*) cap al disc?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Auditoria d'Arquitectura i Sistema Operatiu amb PowerShell
1. Inicia una consola de **PowerShell** i obtén les característiques arquitectòniques del sistema operatiu amfitrió:
   ```powershell
   Get-CimInstance Win32_OperatingSystem | Select-Object Caption, OSArchitecture, Version, BuildNumber, TotalVisibleMemorySize, FreePhysicalMemory
   ```
2. Consulta les dades de virtualització de la CPU per verificar si el maquinari admet virtualització assistida (VT-x / AMD-V):
   ```powershell
   Get-CimInstance Win32_Processor | Select-Object Name, AddressWidth, DataWidth, VirtualizationFirmwareEnabled
   ```
3. Comprova si el camp `VirtualizationFirmwareEnabled` està en valor `True`. Si estiguera en `False`, quina acció s'hauria de dur a terme a la configuració del firmware UEFI de la màquina?

#### Repte 2: Diagnòstic de Maquinari i Recursos en Consola Linux
1. En una sessió de consola Linux (o màquina virtual), executa les ordres fonamentals d'inspecció de recursos:
   ```bash
   uname -a
   lscpu | grep -E "Model name|Architecture|Virtualization"
   free -h
   df -hT
   ```
2. Interpreta les columnes de l'ordre `free -h`:
   - Quina diferència hi ha entre la columna `free` (lliure) i la columna `available` (disponible)?
   - Per quina raó el nucli de Linux aprofita la memòria RAM lliure per a memòria cau (*buff/cache*)?

#### Repte 3: Auditoria de Seguretat de Contrasenyes i Protocol d'Accés
1. Dissenya una política de contrasenyes per a usuaris tècnics de laboratori que continga:
   - Longitud mínima de 10 caràcters.
   - Almenys una lletra majúscula, una minúscula, un dígit numèric i un símbol especial.
2. Comprova la fortalesa de la política proposada calculant la seua entropia aproximada:
   $$E = L \times \log_2(N)$$
   on $L$ és la longitud de la contrasenya i $N$ el conjunt de caràcters possibles ($N \approx 94$ per a caràcters ASCII imprimibles).

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura del Sistema i Recursos** | Calcula amb precisió capacitats d'adreçament segons l'amplària de bus i explica la funció del nucli i la memòria virtual. | Coneix la diferència entre 32 i 64 bits però comet xicotets errors en càlculs d'adreçament de memòria. | No comprèn per què un sistema de 32 bits no pot aprofitar més de 4 GB de memòria RAM. |
| **Diagnòstic per Consola (PowerShell / Linux)** | Executa amb agilitat comandes CLI d'auditoria de maquinari i virtualització interpretant correctament els resultats. | Executa les ordres bàsiques però necessita ajuda per interpretar la diferència entre memòria lliure i disponible. | Té dificultats per obrir la consola i no sap consultar la informació bàsica del sistema operatiu. |
| **Normativa de Laboratori i Seguretat** | Aplica rigorosament l'aïllament en màquines virtuals, polítiques de contrasenyes robustes i escaneig de mitjans USB. | Respecta les normes generals del taller però oblida canviar les contrasenyes per defecte dels entorns de prova. | Ignora els protocols d'aïllament i executa accions de risc directament sobre equips de producció. |
