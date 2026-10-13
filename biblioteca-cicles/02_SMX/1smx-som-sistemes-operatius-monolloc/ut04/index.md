---
layout: default
title: "UD4 — Instal·lació de Sistemes Operatius, Particionament i Gestors d'Arrencada"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD4"
---

# 📘 UD4 — Instal·lació de Sistemes Operatius, Particionament i Gestors d'Arrencada

La **Unitat Didàctica 4** constitueix el nucli tècnic del muntatge i desplegament de sistemes microinformàtics. S'hi aprofundeix en l'arquitectura dels discs d'emmagatzematge, els esquemes de taules de particions (MBR vs GPT), els firmwares d'arrencada (Legacy BIOS vs UEFI), la seqüència de càrrega del nucli i la convivència harmònica de múltiples sistemes operatius (*Dual Boot*).

---

## 💾 Esquemes de Particionament i Seqüències d'Arrencada de Firmware

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Evolució de l'Arrencada: De MBR/BIOS a GPT/UEFI i Gestió de Dual Boot</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Estructura física de sectors LBA, partició ESP FAT32, signatures Secure Boot i gestor GRUB 2</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="somU4MbrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU4GptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU4EspGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU4GrubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: MBR Legacy -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#somU4MbrGrad)" stroke="#f87171" stroke-width="1.5"/>
    <text x="115" y="42" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">📟 MBR &amp; LEGACY BIOS</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Arquitectura Clàssica 1982</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f87171" font-weight="bold">Sector 0 (512 B):</tspan></text>
    <text x="42" y="93" fill="#94a3b8" font-size="8">446B Codi + 64B Taula + 2B Magic</text>
    <text x="32" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f87171" font-weight="bold">Màxim 4 primàries</tspan></text>
    <text x="42" y="125" fill="#94a3b8" font-size="8">Requereix partició estesa i lògiques</text>
    <text x="32" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Límit Màxim: 2,2 TB</tspan></text>
    <text x="42" y="157" fill="#94a3b8" font-size="8">Camps LBA de 32 bits (sectors 512B)</text>
    <text x="32" y="176" fill="#cbd5e1" font-size="8.5">• Sense còpia de seguretat</text>
    <text x="32" y="194" fill="#cbd5e1" font-size="8.5">• Arrencada per VBR i salt actiu</text>
    <text x="115" y="218" fill="#f87171" font-size="8.5" text-anchor="middle" font-weight="bold">Obsolescent i Vulnerable</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: GPT Modern -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#somU4GptGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="335" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🚀 GPT &amp; MODERN UEFI</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Estàndard Actual x86-64</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">LBA 0:</tspan> Protective MBR</text>
    <text x="252" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">LBA 1:</tspan> Capçalera GPT Primària</text>
    <text x="252" y="116" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">128+ particions</tspan> primàries</text>
    <text x="252" y="134" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Límit Màxim: 9,4 ZB</tspan></text>
    <text x="262" y="147" fill="#94a3b8" font-size="8">Camps LBA de 64 bits de longitud</text>
    <text x="252" y="166" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Backup GPT Header</tspan></text>
    <text x="262" y="179" fill="#94a3b8" font-size="8">Còpia redundant al final físic</text>
    <text x="252" y="196" fill="#cbd5e1" font-size="8.5">• Verificació per suma CRC32</text>
    <text x="335" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Resilient i Escalable</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 3: Partició ESP & Secure Boot -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#somU4EspGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🛡️ PARTICIÓ ESP &amp; BOOT</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Firmware UEFI Executable</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">ESP (EFI System Part.):</tspan></text>
    <text x="482" y="93" fill="#94a3b8" font-size="8">Format FAT32 (100 - 512 MB)</text>
    <text x="472" y="112" fill="#cbd5e1" font-size="8.5">• Arxius executables <tspan fill="#38bdf8" font-weight="bold">.efi</tspan>:</text>
    <text x="482" y="125" fill="#94a3b8" font-size="8">/EFI/Microsoft/bootmgfw.efi</text>
    <text x="482" y="137" fill="#94a3b8" font-size="8">/EFI/ubuntu/grubx64.efi</text>
    <text x="472" y="156" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Secure Boot:</tspan></text>
    <text x="482" y="169" fill="#94a3b8" font-size="8">Verifica signatura digital al xip</text>
    <text x="482" y="181" fill="#94a3b8" font-size="8">Bloqueig absolut de rootkits</text>
    <text x="472" y="198" fill="#cbd5e1" font-size="8.5">• Variables a NVRAM placa</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Arrencada Segura Nativa</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Gestors d'Arrencada i Dual Boot -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#somU4GrubGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">🔀 DUAL BOOT &amp; GRUB</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Convivència Multi-SO</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Ordre d'Instal·lació:</tspan></text>
    <text x="700" y="93" fill="#38bdf8" font-size="8">1r Windows $\rightarrow$ 2n Linux</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">GRUB 2:</tspan></text>
    <text x="700" y="125" fill="#94a3b8" font-size="8">Detecta Windows via os-prober</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• Menú de selecció</text>
    <text x="692" y="162" fill="#cbd5e1" font-size="8.5">• Windows BCD integrat</text>
    <text x="692" y="180" fill="#cbd5e1" font-size="8.5">• Mitjans: Rufus / Ventoy</text>
    <text x="692" y="198" fill="#94a3b8" font-size="8">Particions / i swap netes</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Multi-Plataforma Estable</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Dual Boot: <tspan fill="#34d399" font-weight="bold">Instal·la sempre primer Microsoft Windows i posteriorment GNU/Linux.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">L'instal·lador de Windows tendeix a sobreescriure el gestor d'arrencada existent; en canvi, GRUB 2 respecta Windows i afegeix l'entrada automàticament.</text>
  </svg>
</div>

---

## 📊 Comparativa Tècnica: MBR (Legacy BIOS) vs GPT (Modern UEFI)

| Característica | MBR (*Master Boot Record*) + Legacy BIOS | GPT (*GUID Partition Table*) + UEFI | Avantatge Pràctic de GPT/UEFI |
| :--- | :--- | :--- | :--- |
| **Capacitat Màxima de Disc** | **2,2 TB** ($2^{32} \times 512\text{ bytes}$) | **9,4 ZB** ($2^{64} \times 512\text{ bytes}$) | Suport natiu de discs durs i SSDs de qualsevol capacitat moderna sense pèrdua d'espai. |
| **Nombre de Particions** | Màxim **4 primàries** (o 3 primàries + 1 estesa amb lògiques). | **128 particions primàries** com a mínim de base. | Flexibilitat total per a múltiples sistemes operatius i estructures de dades complexes. |
| **Tolerància a Fallades / Redundància**| Cap. Si es danya el Sector 0, es perd tota la taula de particions. | **Backup GPT** al final del disc i comprovació d'integritat per suma **CRC32**. | Recuperació automàtica davant corrupcions lògiques o fallades d'escriptura. |
| **Interfície de Firmware** | BIOS clàssica en mode real de 16 bits, sense suport de ratolí. | UEFI nativa de 32/64 bits amb gràfics, accés a xarxa i arrencada ultra ràpida. | Temps d'arrencada dràsticament inferiors i diagnòstics previs al sistema operatiu. |
| **Seguretat d'Arrencada** | Inexistent; vulnerable a virus de sector d'arrencada (*Bootkits*). | **Secure Boot** basat en claus criptogràfiques a nivell de maquinari. | Bloqueig de binaris no certificats abans que el nucli comence a carregar-se. |

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **4.2** | [**Introducció a la Instal·lació de SO**](./ut0402.md) | Fases prèvies, requeriments de maquinari i comprovació de compatibilitat | [**📋 Estudiar Fases →**](./ut0402.md) |
| **4.5** | [**Gestió de Memòria i Memòria Virtual**](./ut0405.md) | Paginació, fitxers de swap (`pagefile.sys`) i particions d'intercanvi a Linux | [**🧠 Estudiar Memòria →**](./ut0405.md) |
| **4.8** | [**Arquitectura del Sistema Operatiu**](./ut0408.md) | Nuclis monolítics (Linux) vs híbrids (Windows NT) vs microkernels | [**🏛️ Estudiar Arquitectura →**](./ut0408.md) |
| **4.10** | [**Mètodes d'Instal·lació i Particionament**](./ut0410.md) | Mitjans USB (Rufus/Ventoy), particionament manual amb `gparted` / `diskpart` | [**⚙️ Dominar Particions →**](./ut0410.md) |
| **4.12** | [**Carregadors d'Arrencada (Boot Loaders)**](./ut0412.md) | Configuració de GRUB 2 (`/etc/default/grub`), Windows BCD i muntatge de Dual Boot | [**🔀 Configurar GRUB 2 →**](./ut0412.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA2:** Instal·la sistemes operatius monolloc planificant el procés i verificant la compatibilitat de maquinari i la integritat del sistema de fitxers.
- **RA3:** Configura gestors d'arrencada i entorns de doble arrencada, assegurant la coexistència harmònica de diferents sistemes operatius.
- **Criteris d'Avaluació:**
  - S'ha justificat l'elecció de GPT enfront de MBR segons la capacitat de l'emmagatzematge i la seguretat UEFI.
  - S'ha creat i configurat la partició de sistema EFI (ESP) en format FAT32.
  - S'ha desplegat un entorn Dual Boot Windows/Linux configurant correctament el gestor GRUB 2.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Demostració del Límit Matemàtic de MBR:**
   - Una taula MBR utilitza camps de $32\text{ bits}$ per emmagatzemar el número de sector lògic (**LBA** - *Logical Block Addressing*).
   - En els discs durs estàndard, la mida d'un sector lògic tradicional és de $512\text{ bytes}$.
   - **Preguntes de càlcul:**
     - Demostra mitjançant càlcul matemàtic exacte la capacitat màxima de dades que es pot adreçar:
       $$\text{Capacitat MBR} = 2^{32} \times 512 \text{ bytes}$$
     - Expressa el resultat anterior en Bytes, en Gibibytes ($\text{GiB} = 2^{30}\text{ bytes}$) i en Terabytes comercials ($\text{TB} = 10^{12}\text{ bytes}$).
     - Si un client compra un disc HDD de $8\text{ TB}$ i per error el formata amb taula MBR, quants Terabytes quedaran com a "Espai no assignat" completament inservibles?

2. **Disseny d'un Esquema de Particions per a Dual Boot en un SSD de 512 GB:**
   - Es disposa d'un SSD NVMe de $512\text{ GB}$ ($476\text{ GiB}$ reals) on s'ha d'instal·lar Windows 11 i Ubuntu Desktop compartint disc.
   - **Preguntes de dimensionament:**
     - Dissenya la taula de particions en GPT assignant:
       1. Partició ESP (format FAT32): $256\text{ MiB}$.
       2. Partició reservada de Microsoft (MSR): $16\text{ MiB}$.
       3. Partició de sistema Windows 11 (NTFS): $200\text{ GiB}$.
       4. Partició de recuperació de Windows (NTFS): $1\text{ GiB}$.
       5. Partició arrel de Linux `/` (ext4): $120\text{ GiB}$.
       6. Partició d'intercanvi `swap` (linux-swap): $8\text{ GiB}$.
       7. Partició comuna de dades per a tots dos sistemes (format NTFS o exFAT): Calcula l'espai restant disponible.
     - Justifica per quina raó la partició compartida de dades ha de ser NTFS o exFAT i no pot ser ext4 si es vol escriure de manera nativa i senzilla des de Windows.

3. **Anàlisi del Sector MBR a Nivell Hexadecimal:**
   - El sector físic 0 té exactament 512 bytes.
   - **Preguntes d'anàlisi:**
     - Quina és la funció dels primers 446 bytes i què passa si un virus els sobreescriu?
     - Quants bytes ocupa cada entrada de la taula de particions i quins camps conté (estat actiu/arrencable, tipus de sistema de fitxers, primer sector i nombre de sectors)?
     - Quina signatura màgica (*Magic Number*) en hexadecimal indiquen els dos últims bytes del sector 0 per certificar que el sector és vàlid?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Auditoria d'Estructura de Discs amb PowerShell i `diskpart`
1. Obre PowerShell com a Administrador i obtén la llista de discs físics i el seu estil de particionament:
   ```powershell
   Get-Disk | Select-Object Number, FriendlyName, PartitionStyle, TotalSize, OperationalStatus
   ```
2. Consulta el desglossament de particions del disc principal del sistema:
   ```powershell
   Get-Partition -DiskNumber 0 | Select-Object PartitionNumber, DriveLetter, Size, Type, IsBoot, IsSystem
   ```
3. Comprova si la columna `PartitionStyle` indica `GPT` o `MBR`. Si és `GPT`, identifica quina partició té l'atribut `IsSystem = True` (la partició ESP).

#### Repte 2: Auditoria de Particions i Sistemes de Fitxers en Linux
1. En un terminal de Linux, executa la comanda `lsblk` amb informació de sistemes de fitxers i identificadors únics UUID:
   ```bash
   lsblk -o NAME,FSTYPE,SIZE,MOUNTPOINT,UUID,PARTLABEL
   ```
2. Consulta la taula de particions detallada del primer disc amb `fdisk`:
   ```bash
   sudo fdisk -l /dev/sda
   ```
   (o `/dev/nvme0n1` si és un disc NVMe).
3. Localitza la partició muntada a `/boot/efi` i comprova el seu tipus de sistema de fitxers (`vfat` / `FAT32`).

#### Repte 3: Configuració i Reparació del Gestor d'Arrencada GRUB 2
1. Revisa el fitxer principal de configuració del carregador GRUB:
   ```bash
   cat /etc/default/grub | grep -E "GRUB_TIMEOUT|GRUB_DEFAULT|GRUB_CMDLINE"
   ```
2. Si després d'una actualització de Windows el sistema arrenca directament a Windows sense mostrar el menú de GRUB, utilitza l'eina `efibootmgr` per revisar les variables UEFI de la placa base:
   ```bash
   sudo efibootmgr -v
   ```
3. Regenera el fitxer de menú per assegurar que el mòdul `os-prober` detecta la partició de Windows:
   ```bash
   sudo os-prober
   sudo update-grub
   ```

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Particions MBR vs GPT** | Calcula matemàticament els límits de 2,2 TB i 9,4 ZB, explica la capçalera LBA 1 i la redundància de Backup GPT. | Coneix que GPT és més modern i permet més particions, però no sap explicar el límit de 2,2 TB de MBR. | Confon la taula de particions amb el sistema de fitxers (ex: confon GPT amb NTFS). |
| **Firmware UEFI, ESP i Secure Boot** | Descriu la seqüència UEFI, la funció de la partició ESP en FAT32 i la validació de signatures digitals contra bootkits. | Identifica la partició EFI però desconeix quin format ha de tindre o com funciona Secure Boot. | Creu que la BIOS clàssica continua sent l'estàndard actual en equips nous. |
| **Desplegament de Dual Boot i GRUB 2** | Dissenya esquemes de partició nets per a Windows i Linux, respecta l'ordre d'instal·lació i soluciona incidències amb `update-grub` i `efibootmgr`. | Instal·la els dos sistemes però si GRUB desapareix no sap com recuperar el menú d'arrencada. | Sobreescriu la partició de Windows durant la instal·lació de Linux per manca de planificació. |
