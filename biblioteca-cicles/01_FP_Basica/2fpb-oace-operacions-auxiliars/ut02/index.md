---
layout: default
title: "UD2: Instal·lació i Particionament de Sistemes Operatius — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD2"
next_url: "ut0201.html"
next_label: "2.1 ➡️"
---

# UD2: Instal·lació i Particionament de Sistemes Operatius

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-o2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-prt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-fs" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-usb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ins" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-o2)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">INSTAL·LACIÓ I PARTITIONAMENT DE SISTEMES OPERATIUS</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Taules MBR vs GPT, sistemes de fitxers, creació d'USBs bootables i desplegament pas a pas</text>

  <!-- Bloc 1: MBR vs GPT -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-prt)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">💾</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">MBR vs GPT</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Taules de Disc</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• MBR (BIOS): Màx 2 TB</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• MBR: Màx 4 primàries</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• GPT (UEFI): >9 ZB i 128 p.</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Còpia seguretat capçalera</text>
  </g>

  <!-- Bloc 2: Sistemes de Fitxers -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fs)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📂</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Sistemes Fitxers</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Formats de Format</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• NTFS: Windows, ACLs & diari</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• ext4: Linux & arrel /</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• FAT32: Universal (màx 4 GB)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• exFAT: Gran capacitat USB</text>
  </g>

  <!-- Bloc 3: Rufus & Ventoy -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-usb)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔌</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">USBs d'Arrencada</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Rufus & Ventoy</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Rufus: Escriptura directa ISO</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Ventoy: Multiboot interactiu</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Només copiar/apegar fitxers</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Suport MBR Legacy & UEFI</text>
  </g>

  <!-- Bloc 4: Desplegament SO -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-ins)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🚀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Instal·lació Neta</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Windows & Ubuntu</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Windows: OOBE compte local</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Particions automàtiques EFI/C:</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Ubuntu: Mode Live & GRUB</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Punt de muntatge / & swap</text>
  </g>
</svg>
</div>

Estructures de disc i taules de particions MBR vs GPT, sistemes de fitxers (NTFS, ext4, FAT32/exFAT), preparació de llapis USB arrancables amb Rufus/Ventoy, instal·lació pas a pas de Windows i instal·lació d'Ubuntu Desktop.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **2.1** | **Estructures de disc i taules de particions: MBR vs GPT** | [**Llegir apartat →**](./ut0201.html) |
| **2.2** | **Sistemes de fitxers més comuns: NTFS, ext4, FAT32 i exFAT** | [**Llegir apartat →**](./ut0202.html) |
| **2.3** | **Preparació de memòries USB arrancables amb Rufus i Ventoy** | [**Llegir apartat →**](./ut0203.html) |
| **2.4** | **Pràctica: Instal·lació pas a pas de Windows 10/11** | [**Llegir apartat →**](./ut0204.html) |
| **2.5** | **Pràctica: Instal·lació d'Ubuntu Desktop / LliureX** | [**Llegir apartat →**](./ut0205.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 2.1 Estructures de disc i taules de particions: MBR vs GPT

Quan comprem un disc dur (HDD) o una unitat d'estat sòlid (SSD) nou de fàbrica, la unitat està completament buida i sense format. Perquè un sistema operatiu puga començar a guardar-hi informació, cal crear una estructura organitzativa mitjançant **particions**.

### Què és una partició de disc?
Una **partició** és una divisió lògica d'un disc físic. Encara que tinguem un sol disc físic dins de la torre, podem dividir-lo en dues o més particions que el sistema operatiu tractarà com si foren discs completament independents (per exemple, una unitat `C:` per al sistema operatiu i una unitat `D:` per guardar fotos i còpies de seguretat).

---

### Taules de particions: MBR vs GPT

La **taula de particions** és la zona del disc on es registra quines particions hi ha, on comencen i on acaben. Existeixen dos estàndards històrics:

#### 1. MBR (*Master Boot Record*) — L'estàndard clàssic (BIOS)
- Creat l'any 1983 per a equips amb BIOS tradicional.
- **Limitació de capacitat:** Només admet discs durs d'un màxim de **2 Terabytes (2 TB)**. Si s'utilitza en un disc de 4 TB, la meitat del disc queda inservible.
- **Límit de particions:** Només admet un màxim de **4 particions primàries**. Si en calen més, s'ha de convertir una d'elles en *partició estesa*, dins de la qual es poden crear múltiples *particions lògiques*.
- No té còpia de seguretat de la taula de particions: si el primer sector es fa malbé, es perd l'accés a tot el disc.

#### 2. GPT (*GUID Partition Table*) — L'estàndard modern (UEFI)
- Forma part de l'estàndard modern **UEFI**, que substitueix l'antiga BIOS.
- **Capacitat gegantina:** Suporta discs de fins a 9,4 Zetabytes (milers de milions de Terabytes).
- **Nombre de particions:** Permet crear fins a **128 particions primàries** independents sense necessitat de particions esteses.
- **Seguretat:** Guarda una còpia de seguretat de la taula al final del disc, de manera que si la capçalera es corromp, el sistema la recupera automàticament.

---

### Taula comparativa MBR vs GPT

| Característica | MBR (*Master Boot Record*) | GPT (*GUID Partition Table*) |
| :--- | :--- | :--- |
| **Arrencada compatible** | BIOS tradicional o CSM Legacy | **UEFI moderna** |
| **Mida màxima de disc** | 2 Terabytes (2 TB) | Pràcticament il·limitada (9,4 ZB) |
| **Nombre de particions** | Màxim 4 primàries | **Fins a 128 particions primàries** |
| **Recuperació d'errors** | No (sense còpia de seguretat) | Sí (còpia de seguretat al final del disc) |
| **Requerit per a** | Equips antics | **Windows 11 i equips moderns obligatòriament** |

---

## 2.2 Sistemes de fitxers més comuns: NTFS, ext4, FAT32 i exFAT

Un cop creada una partició, cal **donar-li format** aplicant un **sistema de fitxers** (*File System*). El sistema de fitxers és l'estructura lògica que determina com s'organitzen, s'anomenen, s'emmagatzemen i es recuperen els arxius i les carpetes dins d'eixa partició.

### Principals sistemes de fitxers

#### 1. NTFS (*New Technology File System*)
- És el sistema de fitxers nadiu i obligatori per a la partició on s'instal·la **Microsoft Windows**.
- **Característiques:** Molt robust, suporta particions gegants, xifratge de dades, compressió automàtica, quotes de disc i, molt especialment, **permisos de seguretat detallats per usuari**.
- Disposa de registre per diari (*Journaling*): si l'ordinador s'apaga per un tall sobtat de llum, el diari permet reconstruir els fitxers sense corrupció.
- **Compatibilitat:** Lectura i escriptura total en Windows; en Linux i macOS requereix controladors específics.

#### 2. ext4 (*Fourth Extended Filesystem*)
- És el sistema de fitxers per defecte en la immensa majoria de distribucions **GNU/Linux** (com Ubuntu, Debian i LliureX).
- **Característiques:** Excepcionalment ràpid, estable, pràcticament immune a la fragmentació i incorpora registre per diari avançat.
- Suporta la complexa estructura de permisos UNIX (usuari, grup i altres: r, w, x).

#### 3. FAT32 (*File Allocation Table 32*)
- Sistema històric creat per Microsoft l'any 1996.
- **Gran avantatge:** És el sistema de fitxers **més universal del món**: el llegeixen i escriuen absolutament tots els dispositius (Windows, Mac, Linux, consoles PlayStation, televisors intel·ligents, ràdios de cotxe).
- **Gran limitació infranquejable:** **No permet guardar cap fitxer individual que ocupe més de 4 Gigabytes (4 GB)**. Si intentes copiar una pel·lícula en alta definició o una imatge ISO de 5 GB a un llapis FAT32, donarà un error de "disc ple" encara que tingues 64 GB lliures.

#### 4. exFAT (*Extended FAT*)
- Dissenyat per substituir FAT32 en memòries USB d'alta capacitat i targetes de memòria SD de càmeres de fotos i mòbils.
- Manté la màxima compatibilitat entre Windows, Mac i Linux, però **elimina completament el límit dels 4 GB per fitxer**.

---

## 2.3 Preparació de memòries USB arrancables amb Rufus i Ventoy

Per instal·lar un sistema operatiu en un ordinador real nou o després d'una fallada greu, ja no s'utilitzen discos DVD. Els equips moderns s'instal·len mitjançant una **memòria USB d'arrencada** (*Bootable USB* o pendrive bootejable).

No n'hi ha prou de copiar i apegar el fitxer `.iso` dins del pendrive: cal preparar el sector d'arrencada de la memòria perquè la BIOS/UEFI de l'equip puga carregar el programa d'instal·lació.

---

### Mètode 1: Creació d'un USB bootejable amb Rufus
**Rufus** és una aplicació lliure, gratuïta i lleugera molt utilitzada per a Windows:

1. Connecta un llapis de memòria USB de mínim 8 GB a l'ordinador (ATENCIÓ: tots els arxius del pendrive s'esborraran!).
2. Executa Rufus com a administrador.
3. Al camp **Dispositiu**, selecciona la lletra del teu pendrive USB.
4. Al camp **Elecció d'arrencada**, fes clic a *SELECCIONA* i tria el fitxer ISO (per exemple `Win11_Spanish_x64.iso` o `ubuntu-24.04-desktop.iso`).
5. Al camp **Esquema de partició**:
   - Tria **GPT** si l'ordinador és modern amb UEFI.
   - Tria **MBR** si l'ordinador és antic amb BIOS clàssica.
6. Fes clic a **COMENÇA (*START*)**. Rufus permetrà desactivar els requisits de TPM 2.0 i compte Microsoft en Windows 11.
7. Espera uns 5-10 minuts fins que la barra verda arribe al 100%. El llapis USB ja és autònom i arrancable!

---

### Mètode 2: Creació d'un USB multiboot amb Ventoy (L'eina preferida dels tècnics)
**Ventoy** és una eina revolucionària de programari lliure:
- S'instal·la una única vegada al pendrive.
- A partir d'eixe moment, el pendrive es converteix en un **USB multiarenque**: només cal **copiar i apegar fitxers ISO normals dins del pendrive** (pots tindre alhora la ISO de Windows 10, Windows 11, Ubuntu, LliureX, Clonezilla, antivirus de rescat...).
- Quan engegues l'ordinador des de l'USB de Ventoy, apareix un menú interactiu en pantalla perquè tries quina ISO vols arrencar!

---

## 2.4 Pràctica: Instal·lació pas a pas de Windows 10/11

### Objectiu de la Pràctica
Realitzar la instal·lació completa i neta del sistema operatiu Windows en la màquina virtual de taller, aprenent a particionar el disc i crear el compte d'usuari local.

---

### Procediment d'instal·lació pas a pas

#### Pas 1: Arrencada des de la imatge d'instal·lació
1. A VirtualBox, selecciona la màquina virtual amb la ISO de Windows muntada i prem el botó verd **Inicia (*Start*)**.
2. Quan aparega en pantalla el missatge *"Press any key to boot from CD or DVD..."*, prem ràpidament qualsevol tecla com la barra espaiadora.

#### Pas 2: Selecció d'idioma i inici
1. Selecciona:
   - Idioma d'instal·lació: Espanyol.
   - Format d'hora i moneda: Espanyol (Espanya).
   - Teclat o mètode d'entrada: Espanyol.
2. Fes clic a *Següent* i després al gran botó central **Instal·la ara (*Install now*)**.
3. Si demana la clau de producte de llicència, fes clic a l'enllaç inferior *"No tinc cap clau de producte"* per continuar amb la versió d'avaluació de taller.
4. Selecciona l'edició: **Windows 10 Pro** o **Windows 11 Pro**. Accepta els termes de la llicència.

#### Pas 3: Tipus d'instal·lació i particionament
1. A la finestra *"Quin tipus d'instal·lació voleu?"*, selecciona l'opció:
   **Personalitzada: instal·la només Windows (avançat)**.
2. Veuràs la llista de discs: apareixerà un únic element anomenat `Espai no assignat a la unitat 0 (25.0 GB)`.
3. Fes clic a **Següent** directament:
   - L'assistent d'instal·lació crearà automàticament les particions necessàries (partició de recuperació, partició EFI del sistema i la partició principal NTFS `C:`).
4. S'iniciarà el procés de còpia de fitxers (`Preparació dels fitxers per a la instal·lació: 0% ... 100%`). L'equip es reiniciarà automàticament un parell de vegades.

#### Pas 4: Configuració inicial posterior (OOBE)
1. Tria la regió (Espanya) i la distribució de teclat (Espanyol).
2. Quan demane connexió a Internet o compte Microsoft:
   - Selecciona *"Configura per a ús personal"*.
   - A les opcions d'inici de sessió, tria *"Compte sense connexió (*Offline account*)"* o *"Experiència limitada"*.
3. Introdueix el nom de l'usuari local: `alumne` (o el teu nom).
4. Assigna una contrasenya senzilla de laboratori i contesta les tres preguntes de seguretat.
5. Desactiva les opcions de diagnòstic i telemetria per a major privacitat.
6. En pocs segons apareixerà el missatge *"Això pot trigar uns quants minuts"* i s'obrirà el flamant escriptori de Windows!

---

## 2.5 Pràctica: Instal·lació d'Ubuntu Desktop / LliureX

### Objectiu de la Pràctica
Realitzar la instal·lació neta del sistema operatiu lliure GNU/Linux (distribució Ubuntu Desktop o LliureX) en la màquina virtual, entenent el sistema de fitxers `ext4` i el punt de muntatge arrel `/`.

---

### Procediment d'instal·lació pas a pas

#### Pas 1: Arrencada i menú GRUB
1. Arrenca la màquina virtual amb la ISO d'Ubuntu.
2. Al menú negre d'arrencada (*GRUB*), selecciona la primera opció:
   **Try or Install Ubuntu** i prem *Intro*.
3. Espera que es carregue l'entorn en memòria RAM fins que aparega la pantalla de benvinguda.

#### Pas 2: Selecció de manera de treball
1. Selecciona a l'esquerra l'idioma **Valencià** (o Català / Espanyol).
2. Tens dues opcions:
   - *Prova Ubuntu:* Permet provar el sistema operatiu directament des de la memòria RAM sense tocar res del disc (mode Live).
   - **Instal·la Ubuntu:** Fes clic en aquest botó per instal·lar-lo de forma permanent al disc virtual.

#### Pas 3: Opcions d'instal·lació i programari
1. Selecciona la distribució de teclat: *Espanyol*.
2. A la pantalla de tipus d'instal·lació:
   - Selecciona **Instal·lació normal** (inclou navegador web, utilitats i paquet ofimàtic LibreOffice).
   - Marca la casella: *"Instal·la programari de tercers per a targetes gràfiques, dispositius Wi-Fi i formats multimèdia addicionals"*.

#### Pas 4: Particionament del disc
1. Selecciona l'opció recomanada per a principiants:
   **Esborra el disc i instal·la Ubuntu**.
   *(Com que estem dins d'una màquina virtual buida, només afectarà el disc virtual de 25 GB creat abans).*
2. Fes clic a **Instal·la ara**. Apareixerà una finestra avisant que es crearà una partició de format `ext4` per a l'arrel `/` i una partició EFI. Fes clic a *Continua*.

#### Pas 5: Usuari i ubicació
1. Selecciona la teua zona horària: *Madrid / Espanya*.
2. Emplena les teues dades d'usuari:
   - El vostre nom: *El Teu Nom i Cognom*
   - El nom de l'ordinador: `pc-fpb-ubuntu`
   - Trieu un nom d'usuari: `alumne`
   - Trieu una contrasenya: `fpb2026`
   - Confirmeu la contrasenya: `fpb2026`
   - Marca l'opció: *"Sol·licita la meua contrasenya per iniciar la sessió"*.
3. Fes clic a *Continua*. Començarà la còpia dels paquets mentre es mostren pantalles explicatives amb les novetats d'Ubuntu.
4. En finalitzar, apareixerà el missatge *"La instal·lació s'ha completat. Cal reiniciar l'ordinador"*.
5. Fes clic a *Reinicia ara*, prem *Intro* quan demane retirar el medi d'instal·lació i gaudeix del teu nou sistema Linux operatiu!

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de límits d'adreçament de sectors en taules MBR vs. GPT
En l'esquema clàssic MBR (*Master Boot Record*), el registre de la taula de particions utilitza camps de $32\text{ bits}$ per identificar el sector inicial i el nombre total de sectors de cada partició:
$$\text{Sectors Màxims MBR} = 2^{32} = 4.294.967.296 \text{ sectors}$$
Considerant l'estàndard històric de disc amb sectors lògics de $512\text{ bytes}$:
1. Calcula la capacitat màxima teòrica d'adreçament en bytes d'un disc amb taula MBR:
   $$\text{Capacitat (Bytes)} = 2^{32} \times 512 = 2.199.023.255.552\text{ B}$$
2. Converteix aquesta xifra a Gibibytes ($\text{GiB} = 2^{30}\text{ B}$) i a Tebibytes ($\text{TiB} = 2^{40}\text{ B}$) dividint per $1.024^3$ i $1.024^4$. Per què el límit comercial s'anomena popularment de $2\text{ TB}$?
3. Un client adquireix per a la seua estació de treball un disc dur de $8\text{ TB}$ per emmagatzemar vídeos de seguretat. Un tècnic novella inicialitza el disc per error en format MBR:
   - Quina capacitat màxima podrà aprofitar el client?
   - Quants terabytes del disc quedaran en estat d'espai no assignat i completament inaccessibles?
   - Quina solució tècnica cal aplicar per alliberar la capacitat total dels $8\text{ TB}$?

#### Exercici 2: Limitacions de sistemes de fitxers i càlcul de transferència
La taula d'assignació de fitxers de FAT32 utilitza un camp de 32 bits per registrar la mida dels fitxers individuals, imposant un límit màxim de:
$$\text{Mida Màxima Fitxer FAT32} = 2^{32} - 1\text{ bytes} = 4.294.967.295\text{ B} \approx 4\text{ GiB}$$
1. Un tècnic disposa d'un llapis USB de $64\text{ GB}$ formatat de fàbrica en FAT32 amb $58\text{ GB}$ d'espai lliure. Intenta copiar des de l'ordinador un fitxer d'imatge ISO de Windows 11 que ocupa $5{,}85\text{ GB}$ ($6.280.000.000\text{ bytes}$):
   - Per què el sistema operatiu avorta la còpia mostrant l'error *"El fitxer és massa gran per al sistema de fitxers de destinació"* malgrat tindre 58 GB lliures?
   - Quin sistema de fitxers alternatiu ha d'aplicar al pendrive per poder guardar el fitxer mantenint compatibilitat amb equips Mac i Linux sense instal·lar controladors addicionals (NTFS o exFAT)?
2. Explica la diferència entre la fragmentació en un disc magnètic HDD formatat en NTFS i la manca de necessitat de desfragmentar una unitat SSD en ext4.

#### Exercici 3: Diagnòstic de disc, taula de particions i sistema de fitxers via CLI
1. En **Windows**, executa PowerShell com a administrador i tecleja:
   ```powershell
   Get-Disk | Select-Object Number, FriendlyName, PartitionStyle, TotalSize
   Get-Partition -DiskNumber 0 | Select-Object PartitionNumber, DriveLetter, Size, Type
   Get-Volume | Select-Object DriveLetter, FileSystemType, SizeRemaining, Size
   ```
   - Identifica a la columna `PartitionStyle` si el disc de taller és `MBR` o `GPT`.
   - Llista els tipus de sistema de fitxers detectats a les unitats muntades (`NTFS`, `FAT32`).
2. En **GNU/Linux (Ubuntu/LliureX)**, executa al terminal:
   ```bash
   sudo fdisk -l /dev/sda | grep -E "Disklabel type|Disk /dev/sda"
   lsblk -f
   ```
   - Anota si el tipus d'etiqueta (`Disklabel type`) és `dos` (MBR) o `gpt` (GPT).
   - Identifica el sistema de fitxers (`FSTYPE`) de la partició arrel `/` i de la partició `/boot/efi`.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'un USB multiboot amb Ventoy i verificació d'arrencada
- **Objectiu:** Crear una eina autònoma d'instal·lació múltiple per a assistència tècnica de camp.
- **Procediment de laboratori:**
  1. Connecta un llapis de memòria USB de mínim $16\text{ GB}$ o $32\text{ GB}$ a l'ordinador de taller.
  2. Executa l'eina **Ventoy2Disk**:
     - Al menú d'opcions, selecciona com a estil de partició **GPT** i suport segur per a **Secure Boot**.
     - Fes clic a *Install* (confirma ambdues finestres d'avís d'esborrat de dades).
  3. Un cop finalitzada la instal·lació, obre l'explorador de fitxers: el llapis USB apareixerà buit amb l'etiqueta `Ventoy`.
  4. Copia dins del pendrive dues imatges ISO:
     - `Win11_23H2_Spanish_x64.iso`
     - `ubuntu-22.04.4-desktop-amd64.iso`
  5. Reinicia un ordinador real de proves o arrenca una màquina virtual des de l'USB, comprova que apareix el menú gràfic de Ventoy i verifica que ambdues ISOs arrenquen correctament.

#### Repte 2: Particionament manual avançat en la instal·lació de Windows
- **Objectiu:** Separar la partició del sistema operatiu de la partició de dades d'usuari per protegir arxius personals davant reinstal·lacions.
- **Situació de taller:** En una màquina virtual amb un disc buit de $100\text{ GB}$, executa l'assistent d'instal·lació de Windows en mode personalitzat:
  1. A la pantalla de particionament, no faces clic directament a *Següent*. Fes clic al botó **Nou (*New*)**.
  2. Crea una primera partició per al sistema operatiu assignant exactament $60\text{ GB}$ ($61.440\text{ MB}$):
     - Observa com l'assistent crea automàticament les petites particions auxiliars (EFI de $100\text{ MB}$ i MSR de $16\text{ MB}$).
  3. Selecciona l'espai no assignat restant ($\approx 40\text{ GB}$) i crea una segona partició amb tota la capacitat disponible.
  4. Selecciona la partició de $60\text{ GB}$ com a destinació d'instal·lació de Windows i continua el procés.
  5. Un cop completada la instal·lació a l'escriptori, entra a l'*Administrador de discs* de Windows (`diskmgmt.msc`), dona format NTFS a la segona partició i assigna-li la lletra `D:` amb l'etiqueta `DADES`.

#### Repte 3: Particionament d'Ubuntu amb `/` i `/home` separades
- **Objectiu:** Implementar la bona pràctica de manteniment en GNU/Linux d'allotjar el sistema operatiu i les carpetes personals en particions físiques independents.
- **Procediment de taller:**
  1. Inicia l'instal·lador d'Ubuntu Desktop en una màquina virtual de $30\text{ GB}$.
  2. A la pantalla de tipus d'instal·lació, tria l'opció avançada **Més opcions (*Something else*)**.
  3. Sobre la taula de particions buida, crea manualment les següents estructures:
     - Partició 1: Mida $512\text{ MB}$, Tipus *Primària*, Utilitza com a: **Partició del sistema EFI**.
     - Partició 2: Mida $18.000\text{ MB}$ ($18\text{ GB}$), Tipus *Primària*, Sistema de fitxers `ext4`, Punt de muntatge: **`/` (arrel)**.
     - Partició 3: Mida restant ($\approx 12\text{ GB}$), Tipus *Lògica*, Sistema de fitxers `ext4`, Punt de muntatge: **`/home` (directoris personals d'usuaris)**.
  4. Confirma els canvis i finalitza la instal·lació.
  5. Un cop a l'escriptori, obre un terminal i comprova mitjançant l'ordre `df -h` que `/` i `/home` funcionen com a sistemes de fitxers independents. Què passaria amb els fitxers de `/home` si demà calguera reinstal·lar el sistema formatant només `/`?

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat les diferències tècniques entre la taula de particions clàssica MBR (màx 2 TB, 4 primàries) i la moderna GPT (>9 ZB, 128 primàries).
- [ ] He associat cada sistema operatiu amb el seu sistema de fitxers nadiu: NTFS per a Windows i ext4 per a GNU/Linux.
- [ ] He justificat per què no es pot copiar un fitxer de més de 4 GB en FAT32 i he proposat exFAT com a solució.
- [ ] He creat una memòria USB d'arrencada amb Rufus (per a una ISO única) o amb Ventoy (per a multiboot).
- [ ] He instal·lat Windows de forma neta configurant un compte local sense connexió obligatòria a Internet.
- [ ] He instal·lat Ubuntu Desktop configurant el punt de muntatge arrel `/` en format ext4.
- [ ] He separat particions de sistema i de dades (`C:`/`D:` o `/`/`/home`) per protegir la informació dels usuaris.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Taules de particions (MBR vs GPT)** | Calcula límits de sectors LBA ($2^{32}$), explica la relació BIOS-MBR i UEFI-GPT i resol problemes de discs grans (>2 TB). | Comprèn els avantatges de GPT sobre MBR i identifica l'esquema d'un disc per consola. | Reconeix que GPT és més modern que MBR però dubta amb els límits de particions primàries. | Confon la taula de particions amb el sistema de fitxers o desconeix què és MBR. |
| **Sistemes de fitxers (NTFS, ext4, FAT32)** | Distingeix journaling, permisos i límits de mida (4 GB en FAT32), triant el format idoni per a cada ús tècnic. | Identifica NTFS per a Windows i ext4 per a Linux explicant per què s'utilitza exFAT en USBs. | Coneix els noms dels sistemes de fitxers però oblida la limitació dels 4 GB de FAT32. | Aplica formats incompatibles o no sap per què cal donar format a una partició. |
| **Preparació d'USBs bootables (Rufus/Ventoy)** | Configura Rufus amb paràmetres correctes de BIOS/UEFI i utilitza Ventoy per crear pendrives de rescat multiboot. | Utilitza Rufus i Ventoy correctament per crear memòries USB arrancables funcionals. | Crea un USB amb Rufus seguint instruccions pas a pas però no entén com funciona Ventoy. | Copia el fitxer ISO directament al pendrive sense preparar el sector d'arrencada. |
| **Instal·lació i OOBE de Windows** | Executa la instal·lació personalitzada, particiona discs a mida i configura comptes locals d'usuari protegint la privacitat. | Instal·la Windows correctament i crea el compte d'usuari local sense incidències. | Completa la instal·lació bàsica però s'encalla quan Windows sol·licita compte Microsoft en línia. | Incapaç d'arrencar la instal·lació des de la ISO o esborra dades per desconeixement del particionament. |
| **Instal·lació avançada de Linux (Ubuntu)** | Particiona manualment amb `/` i `/home` separades, domina el menú GRUB i verifica punts de muntatge via terminal. | Instal·la Ubuntu Desktop correctament i verifica que el sistema arrenca amb usuari i contrasenya. | Instal·la Ubuntu utilitzant només l'opció automàtica per defecte sense comprendre el particionament ext4. | Falla en la selecció del punt de muntatge arrel deixant el disc sense sistema de fitxers vàlid. |


