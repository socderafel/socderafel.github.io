---
layout: default
title: "UD1: Introducció als Sistemes Operatius i la Virtualització — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD1"
next_url: "ut0101.html"
next_label: "1.1 ➡️"
---

# UD1: Introducció als Sistemes Operatius i la Virtualització

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-o1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-os" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-lic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-arq" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-vrt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-o1)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SISTEMES OPERATIUS I VIRTUALITZACIÓ: FONAMENTS I GESTIÓ</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Funcions del nucli, models de llicència, arquitectures de memòria i hipervisors de taller</text>

  <!-- Bloc 1: Funcions del SO -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-os)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Funcions del SO</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Gestió de Recursos</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• CPU & Multitasca de fils</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Memòria RAM & Virtual</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Fitxers: NTFS, ext4, FAT32</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Drivers E/S & GUI / CLI</text>
  </g>

  <!-- Bloc 2: Llicències i Distros -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-lic)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📜</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llicències</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Propietari vs Lliure</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Windows: Propietari tancat</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• GNU/Linux: Codi obert GPL</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Ubuntu / LliureX educativa</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• macOS: Propietari integrat</text>
  </g>

  <!-- Bloc 3: Arquitectures x86 / x64 -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arq)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arquitectures</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">32 bits vs 64 bits</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 32b (x86): Límit màx 4 GB</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 64b (x64): Suport >16 TB</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Retrocompatibilitat x64</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Comanda: uname -m / msinfo32</text>
  </g>

  <!-- Bloc 4: Virtualització i MVs -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-vrt)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Virtualització</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Host, Guest & VMM</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Hipervisor Tipus 2: VirtualBox</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Disc dinàmic VDI & RAM</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Instantànies (Snapshots)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Aïllament total en proves</text>
  </g>
</svg>
</div>

Concepte i funcions bàsiques d'un sistema operatiu, comparativa de sistemes propietaris i lliures (Windows, Linux, macOS), arquitectures de 32 i 64 bits, tecnologia de màquines virtuals i pràctica d'instal·lació de VirtualBox.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **1.1** | **Què és un sistema operatiu? Funcions bàsiques** | [**Llegir apartat →**](./ut0101.html) |
| **1.2** | **Sistemes propietaris vs lliures: Windows, Linux i macOS** | [**Llegir apartat →**](./ut0102.html) |
| **1.3** | **Arquitectures de maquinari: 32 bits vs 64 bits** | [**Llegir apartat →**](./ut0103.html) |
| **1.4** | **Concepte de màquina virtual i hipervisors** | [**Llegir apartat →**](./ut0104.html) |
| **1.5** | **Pràctica: Instal·lació de VirtualBox i creació d'una MV** | [**Llegir apartat →**](./ut0105.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 1.1 Què és un sistema operatiu? Funcions bàsiques

El **sistema operatiu** (**SO**) és el programari fonamental (*software de base*) que s'executa en un ordinador immediatament després de carregar-se el microprogramari d'arrencada (BIOS o UEFI). Actua com a **intermediari essencial** entre els components físics de maquinari (*hardware*: processador, memòria RAM, disc, pantalla, teclat, targetes) i les aplicacions d'usuari (navegadors web, processadors de textos, jocs, reproductors).

Sense un sistema operatiu, un ordinador no seria més que un conjunt de circuits electrònics inerts incapaços d'interpretar cap ordre humana.

---

### Funcions principals d'un sistema operatiu

1. **Gestió del Processador (CPU):**
   - Administra el temps de càlcul del processador entre els diferents programes en execució mitjançant la tècnica de **multitasca**.
   - Assigna prioritats i reparteix els recursos entre els processos actius perquè cap d'ells bloquege la màquina.

2. **Gestió de la Memòria Principal (RAM):**
   - Assigna espai de memòria RAM a cada programa quan s'obre i l'allibera immediatament quan es tanca.
   - Si la memòria RAM física s'omple, gestiona la **memòria virtual** (arxiu de paginació al disc) per evitar que el sistema caiga.

3. **Gestió de l'Emmagatzematge i el Sistema de Fitxers:**
   - Organitza com es guarden, llegeixen i modifiquen els arxius i les carpetes en els discs durs (HDD) i unitats d'estat sòlid (SSD).
   - Controla l'arbre de directoris, els noms de fitxer i els permisos d'accés.

4. **Gestió dels Dispositius d'Entrada/Eixida (E/S) i Perifèrics:**
   - Comunica el sistema amb teclats, ratolins, pantalles, impressores, escàners i targetes de so mitjançant xicotets programes especialitzats anomenats **controladors (*device drivers*)**.

5. **Interfície d'Usuari:**
   - Proporciona el mitjà visual o escrit perquè la persona puga interactuar amb l'ordinador:
     - **GUI (*Graphical User Interface*):** Interfície gràfica d'usuari amb finestres, icones, menús i punter de ratolí (com l'Escriptori de Windows o Ubuntu).
     - **CLI (*Command Line Interface*):** Interfície de línia d'ordres en una pantalla de consola o terminal (com el Símbol del sistema de Windows o la Bash de Linux).

6. **Seguretat i Gestió d'Usuaris:**
   - Permet crear diferents comptes d'usuari amb contrasenyes independents i nivells de permisos diferenciats (administradors vs usuaris estàndard).

---

## 1.2 Sistemes propietaris vs lliures: Windows, Linux i macOS

En el mercat informàtic actual conviuen diverses famílies de sistemes operatius, dividides principalment segons la seua filosofia de desenvolupament i llicència de distribució en **programari propietari** i **programari lliure**:

### 1. Microsoft Windows (Programari Propietari)
- Desenvolupat per l'empresa Microsoft. És el sistema operatiu majoritari arreu del món en ordinadors personals i d'oficina (Windows 10, Windows 11).
- **Codi tancat:** Només els enginyers de Microsoft tenen accés al codi font del programa; els usuaris no el poden modificar ni auditar per dins.
- **Llicència de pagament:** Cal adquirir una llicència comercial per a cada ordinador (o ve preinstal·lada en comprar l'equip de marca).
- **Avantatges:** Enorme compatibilitat amb tot tipus de programari comercial i jocs, facilitat d'ús i suport universal de fabricants de perifèrics.

---

### 2. GNU/Linux (Programari Lliure i de Codi Obert)
- Creat inicialment per Linus Torvalds (nucli Linux) i el projecte GNU de Richard Stallman.
- **Codi obert (*Open Source*):** El seu codi de programació està disponible públicament perquè qualsevol persona o institució puga estudiar-lo, modificar-lo, adaptar-lo i redistribuir-lo lliurement.
- **Distribucions (*Distros*):** En lloc d'un únic producte, s'empaqueta en diferents distribucions segons l'usuari final:
  - **Ubuntu:** Molt popular, intuïtiva i moderna per a usuaris generals.
  - **LliureX:** La distribució educativa oficial de la Generalitat Valenciana basada en Ubuntu, optimitzada per a aules de Primària, Secundària i FP.
  - **Debian / Red Hat / CentOS:** Distribucions de màxima estabilitat utilitzades en la immensa majoria de servidors d'Internet mundials.
- **Avantatges:** Totalment gratuït, màxima seguretat i estabilitat, gran lleugeresa per a màquines antigues i respecte absolut per la privacitat.

---

### 3. Apple macOS (Propietari integrat)
- Desenvolupat per Apple per als seus equips personals Mac (MacBook, iMac, Mac Mini).
- Basat en una arquitectura robusta tipus UNIX.
- **Avantatges:** Gran optimització de rendiment i consum de bateria en el seu maquinari exclusiu, excel·lent seguretat i gran apreciació en disseny gràfic, edició de vídeo i música professional.

---

### Taula comparativa de sistemes operatius

| Característica | Microsoft Windows | GNU/Linux (Ubuntu/LliureX) | Apple macOS |
| :--- | :--- | :--- | :--- |
| **Model de Llicència** | Propietària comercial | Lliure (GPL / Codi Obert) | Propietària |
| **Cost econòmic** | De pagament (llicència) | **Gratuït** | Inclòs en equips Apple |
| **Codi font** | Tancat i secret | **Obert i auditable** | Tancat |
| **Mercat principal** | Ordinadors personals, oficines i videojocs | Servidors d'Internet, supercomputadors i educació | Professionals de creació audiovisual |
| **Consum de recursos** | Mitjà - Alt | **Molt baix - Adaptable** | Molt optimitzat |

---

## 1.3 Arquitectures de maquinari: 32 bits vs 64 bits

En descarregar un instal·lador d'un sistema operatiu o d'un programa informàtic, el primer que ens demana és triar entre la versió de **32 bits (x86)** o de **64 bits (x64)**. Què significa exactament aquesta diferència tècnica?

### Què és l'arquitectura d'un processador?
Fa referència a l'amplada dels **registres interns del microprocessador** i dels seus busos de comunicació: la quantitat màxima de dades que el xip pot processar en una sola operació de rellotge i, sobretot, **la quantitat màxima de memòria RAM que és capaç d'adreçar directament**.

---

### L'Arquitectura de 32 bits (x86) — En desús
- Els processadors de 32 bits tenen un límit matemàtic infranquejable: només poden adreçar un màxim de $2^{32}$ combinacions d'adreces de memòria, la qual cosa equival exactament a **4 Gigabytes (GB) de memòria RAM**.
- **Conseqüència pràctica:** Si tenim un ordinador amb 8 GB o 16 GB de RAM física instal·lada i li instal·lem un sistema operatiu de 32 bits, el sistema **només podrà reconèixer i aprofitar uns 3,2 a 3,5 GB de RAM**, desaprofitant completament la resta de la memòria comprada.
- **Estat actual:** Totalment obsoleta en sistemes moderns. Windows 11 ja no té versió de 32 bits.

---

### L'Arquitectura de 64 bits (x64) — Estàndard actual
- Els processadors de 64 bits poden adreçar teòricament fins a $2^{64}$ bytes de memòria RAM (més de 16 milions de Terabytes!).
- Permet aprofitar sense cap límit pràctic quantitats de 8 GB, 16 GB, 32 GB, 64 GB o més de memòria RAM física.
- Permet als programes manejar fitxers gegants de vídeo, bases de dades massives i processos pesats a molta major velocitat.

---

### Regla d'Or de la compatibilitat creuada

> [!IMPORTANT]
> - Un processador de **64 bits** és **retrocompatible**: pot executar sistemes operatius de 64 bits i també sistemes operatius o programes antics de 32 bits.
> - En canvi, un processador antic de **32 bits** **MAI pot executar programari ni sistemes operatius de 64 bits** (donarà error immediat d'incompatibilitat d'arquitectura).

### Com saber quina arquitectura té el nostre equip?
- En **Windows**: Prem `Windows + Pausa` o obre *Configuració* $\rightarrow$ *Sistema* $\rightarrow$ *Quant a*. Al camp *Tipus de sistema* veuràs:
  `Sistema operatiu de 64 bits, processador basat en x64`.
- En **Linux**: Obre la terminal i escriu l'ordre:
```bash
uname -m
```
Si respon `x86_64`, l'arquitectura és de 64 bits.

---

## 1.4 Concepte de màquina virtual i hipervisors

En el treball diari d'un tècnic informàtic d'FP Bàsica, instal·lar sistemes operatius de prova, testejar programes desconeguts o practicar particionaments directament sobre l'ordinador real de l'aula seria molt perillós: un error d'esborrat podria danyar l'equip físic del centre. La solució professional universal és la **virtualització**.

### Què és una màquina virtual (MV)?
Una **màquina virtual** (*Virtual Machine* - VM) és un entorn de programari que **emula completament el maquinari d'un ordinador real** (processador, memòria RAM, disc dur, targeta gràfica, targeta de xarxa) dins d'una finestra del nostre sistema operatiu habitual.

- **Sistema operatiu amfitrió (*Host*):** És el sistema operatiu real instal·lat físicament a l'ordinador (per exemple, el Windows 11 de la teua taula d'aula).
- **Sistema operatiu convidat (*Guest*):** És el sistema operatiu que instal·lem dins de la màquina virtual (per exemple, un Ubuntu Desktop o un altre Windows).

---

### Què és un Hipervisor (*VMM - Virtual Machine Monitor*)?
L'**hipervisor** és el programari encarregat de coordinar i repartir els recursos físics del processador, RAM i disc reals entre les diferents màquines virtuals. Diferenciem dos tipus:

#### 1. Hipervisors de Tipus 2 (Sobre sistema amfitrió) — El que farem servir
- S'instal·len com una aplicació qualsevol sobre el sistema operatiu de l'ordinador.
- Exemples: **Oracle VirtualBox** (gratuït i lliure), **VMware Workstation Player**.
- **Ideal per a:** Estudiants, tallers d'FP, aules d'informàtica, proves de programari i laboratoris d'aprenentatge.

#### 2. Hipervisors de Tipus 1 (Nadius o *Bare-Metal*)
- S'instal·len directament sobre el maquinari buit del servidor, sense cap sistema operatiu previ sota d'ells.
- Exemples: **VMware ESXi**, **Proxmox VE**, **Microsoft Hyper-V Server**.
- **Ideal per a:** Grans centres de càlcul (CPD), servidors corporatius d'empreses i serveis al núvol (AWS, Azure, Google Cloud).

---

### Grans avantatges de les màquines virtuals
- **Aïllament total i seguretat:** Si una màquina virtual s'infecta amb un virus o falla greument durant una pràctica, l'ordinador real amfitrió roman completament intacte.
- **Instantànies (*Snapshots*):** Permeten fer una "foto" de l'estat de la màquina en un segon. Si després ens equivoquem en una configuració, podem tornar enrere a l'estat anterior en un sol clic.
- **Portabilitat:** Tota la màquina virtual (amb el seu sistema i fitxers) s'emmagatzema en un sol fitxer de disc virtual al disc dur (com un fitxer `.vdi`). Es pot copiar fàcilment a un llapis de memòria per continuar la pràctica a casa.

---

## 1.5 Pràctica: Instal·lació de VirtualBox i creació d'una MV

### Objectiu de la Pràctica
1. Descarregar i instal·lar el paquet de virtualització lliure **Oracle VM VirtualBox** a l'ordinador de taller.
2. Crear una nova màquina virtual buida preparada per rebre el sistema operatiu Ubuntu Linux.
3. Configurar adequadament els recursos virtuals (memòria RAM, processadors, disc dur virtual i adaptador de xarxa).

---

### Procediment Pas a Pas

#### Pas 1: Instal·lació de VirtualBox
1. Descarrega l'instal·lador oficial des del lloc web `virtualbox.org` (o utilitza l'arxiu descarregat a la carpeta compartida de recursos).
2. Executa l'arxiu d'instal·lació amb permisos d'administrador.
3. Accepta les opcions per defecte fent clic a *Següent* (*Next*).
4. Quan avise que la connexió de xarxa es pot tallar temporalment durant uns segons (per instal·lar el pont virtual de xarxa), fes clic a *Sí* (*Yes*) i a *Instal·la*.

#### Pas 2: Creació de la Màquina Virtual buida
1. Obre l'aplicació **Oracle VM VirtualBox**.
2. Fes clic sobre la icona blava en forma d'engranatge anomenada **Nova (*New*)**.
3. Omple els camps de la finestra d'assistent:
   - **Nom (*Name*):** `Ubuntu_2FPB_ElTeuNom`
   - **Carpeta de la màquina:** Deixa la ruta per defecte o selecciona el segon disc dur del taller.
   - **Tipus (*Type*):** `Linux`
   - **Versió (*Version*):** `Ubuntu (64-bit)`
4. Fes clic a *Següent*.

#### Pas 3: Assignació de memòria RAM i CPU virtuals
- **Memòria base (RAM):** Assigna **2.048 MB (2 GB)** o **4.096 MB (4 GB)** de RAM.
  > [!WARNING]
  > Mai passes de la barra verda a la zona roja! Si assignes massa memòria a la màquina virtual, l'ordinador real amfitrió es quedarà sense RAM i es congelarà.
- **Processadors:** Assigna **2 CPUs virtuals** per garantir bona fluïdesa.

#### Pas 4: Creació del Disc Dur Virtual
- Selecciona l'opció *"Crea un disc dur virtual ara"*.
- Tipus de fitxer: **VDI (*VirtualBox Disk Image*)**.
- Reserva d'emmagatzematge: **Assignat dinàmicament** (així el fitxer només ocuparà espai real al nostre disc dur a mesura que instal·lem coses, i no ocuparà tot l'espai de cop).
- Mida del disc virtual: Assigna **25 GB** o **30 GB**.
- Fes clic a *Finalitza (*Finish*)*.

#### Pas 5: Configuració de la Unitat Òptica Virtual (Imatge ISO)
1. Selecciona la nova màquina virtual a la llista de l'esquerra i fes clic a la icona groga de **Configuració (*Settings*)**.
2. Ves a l'apartat **Emmagatzematge (*Storage*)**.
3. Sota el controlador IDE o SATA, fes clic sobre la icona del CD blau buit (*Buit / Empty*).
4. A la dreta, fes clic sobre la icona de disc xicoteta i selecciona *"Tria un fitxer de disc..."* (*Choose a disk file...*).
5. Localitza el fitxer d'imatge **ISO d'Ubuntu Desktop** disponible a la carpeta de recursos de taller.
6. Fes clic a D'acord. La teua màquina virtual ja té "el CD ficat al lector virtual" i està a punt per arrencar!

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de límits d'adreçament de memòria en 32 bits vs 64 bits
En una arquitectura de computadors, el bus d'adreces de $n\text{ bits}$ determina el nombre total de bytes individuals de memòria RAM que el processador pot indexar directament:
$$\text{Capacitat Màxima} = 2^n \text{ bytes}$$
1. Calcula la quantitat exacta de bytes adreçables per una arquitectura de 32 bits ($n = 32$):
   $$\text{Bytes} = 2^{32} = 4.294.967.296\text{ B}$$
2. Converteix aquesta xifra a quilobytes ($\text{KiB} = 2^{10}\text{ B}$), megabytes ($\text{MiB} = 2^{20}\text{ B}$) i gigabytes ($\text{GiB} = 2^{30}\text{ B}$) dividint successivament per $1.024$.
3. Si un client porta al taller un ordinador equipat amb $16\text{ GB}$ de memòria RAM DDR4 i un tècnic instal·la per descuit una versió de Windows de 32 bits:
   - Quanta memòria RAM reconeixerà com a màxim el sistema operatiu?
   - Quants gigabytes de memòria RAM quedaran completament desaprofitats i inutilitzats?
   - Quina pèrdua percentual de rendiment representa respecte a la capacitat pagada pel client?

#### Exercici 2: Balanç de recursos per a hipervisor amfitrió (*Host*) i màquines convidades (*Guests*)
Un ordinador de taller d'FP Bàsica té les següents especificacions físiques reals:
- Processador: Intel Core i5 de $6\text{ nuclis físics}$ / $12\text{ fils}$.
- Memòria RAM física: $16\text{ GB}$ ($16.384\text{ MB}$).
- Disc d'emmagatzematge SSD: $500\text{ GB}$ (dels quals $120\text{ GB}$ estan ocupats pel sistema amfitrió i aplicacions).
Es volen crear i executar alhora dues màquines virtuals (MV1 amb Windows 10 i MV2 amb Ubuntu Desktop):
1. Si assignem a la MV1 $4.096\text{ MB}$ de RAM i a la MV2 $3.072\text{ MB}$ de RAM:
   - Quanta memòria RAM consumeixen en total les dues màquines virtuals?
   - Quanta memòria RAM li queda lliure al sistema operatiu amfitrió de l'aula per gestionar la pantalla, el navegador i el propi VirtualBox?
   - És segur aquest repartiment segons la recomanació que el sistema amfitrió conserve com a mínim $4\text{ GB}$ de RAM?
2. Si assignem $2\text{ vCPUs}$ a la MV1 i $2\text{ vCPUs}$ a la MV2, quants fils de processador queden disponibles per a l'amfitrió?
3. Si creem discs virtuals de tipus VDI de mida fixa de $40\text{ GB}$ cadascun, quant espai lliure restarà al disc SSD físic?

#### Exercici 3: Diagnòstic de maquinari i arquitectura del sistema via línia d'ordres
En el taller informàtic és essencial conèixer l'arquitectura exacta d'un ordinador sense necessitat de reiniciar ni entrar a la BIOS.
1. En un equip amb **Windows**, obre PowerShell i executa:
   ```powershell
   Get-CimInstance Win32_OperatingSystem | Select-Object Caption, OSArchitecture, Version
   Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, NumberOfLogicalProcessors, AddressWidth
   ```
   - Anota l'arquitectura del sistema operatiu (`OSArchitecture`) i l'amplada de registre de la CPU (`AddressWidth`).
2. En un equip amb **GNU/Linux (Ubuntu/LliureX)**, obre el terminal i executa:
   ```bash
   uname -m
   lscpu | grep -E "Architecture|CPU op-mode|Model name"
   ```
   - Explica el significat si la resposta de `uname -m` és `x86_64` o `i686`.
   - Què significa la línia `CPU op-mode(s): 32-bit, 64-bit` pel que fa a la retrocompatibilitat del processador?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació i configuració d'una màquina virtual de taller en VirtualBox
- **Objectiu:** Posar en pràctica la instal·lació i afinament d'un entorn de virtualització complet seguint estàndards professionals.
- **Procediment de taller:**
  1. Obre Oracle VM VirtualBox i crea una màquina virtual anomenada `LAB01_Ubuntu_2FPB`.
  2. Configura els paràmetres de maquinari virtual:
     - Memòria RAM: $4.096\text{ MB}$ ($4\text{ GB}$).
     - Processadors: $2\text{ vCPUs}$ amb límit d'execució al $100\%$.
     - Disc dur virtual: Fitxer VDI de $30\text{ GB}$ amb assignació dinàmica.
     - Memòria de vídeo: $128\text{ MB}$ amb acceleració 3D activada.
  3. Afegeix la imatge ISO oficial d'Ubuntu Desktop a la unitat òptica virtual SATA.
  4. Inicia la màquina virtual, comprova que carrega el menú d'arrencada de GRUB sense errors i apaga-la de manera controlada.

#### Repte 2: Gestió d'instantànies (*Snapshots*) i reversió d'avaries
- **Objectiu:** Utilitzar la tecnologia d'instantànies per protegir el sistema davant fallades crítiques durant el testatge de programari.
- **Situació pràctica:**
  1. Amb la màquina virtual apagada i en estat net acabada de crear, crea una instantània anomenada `Estat_Inicial_Net` amb la descripció *"Màquina configurada abans d'instal·lar cap programari"*.
  2. Arrenca la màquina virtual, crea tres carpetes de prova a l'escriptori i canvia la resolució de pantalla o fons d'escriptori.
  3. Simula una fallada crítica de taller: esborra fitxers clau o desconfigura el perfil d'usuari.
  4. Apaga la màquina virtual i executa l'ordre **Restaura la instantània (*Restore Snapshot*)** tornant a `Estat_Inicial_Net`.
  5. Torna a iniciar la màquina virtual i comprova que l'estat original s'ha restablert íntegrament en qüestió de segons.

#### Repte 3: Comparativa de xarxa virtual: mode NAT vs. mode Adaptador Pont (*Bridged*)
- **Objectiu:** Comprendre l'aïllament i la connectivitat de les màquines virtuals a la xarxa local del taller.
- **Comanda tècnica:**
  1. **Fase A (Mode NAT per defecte):**
     - Configura l'adaptador de xarxa de la MV en mode **NAT**.
     - Inicia la màquina i esbrina la seua adreça IP amb `ip a` (en Linux) o `ipconfig` (en Windows).
     - Comprova que rep una IP típica com `10.0.2.15`. Té accés a Internet la MV? Pot un altre ordinador de l'aula fer *ping* a la MV?
  2. **Fase B (Mode Adaptador Pont - *Bridged Adapter*):**
     - Apaga la màquina i canvia l'adaptador de xarxa a **Adaptador Pont (*Bridged*)**, seleccionant la targeta Ethernet física del teu ordinador real.
     - Arrenca la màquina i torna a consultar l'adreça IP.
     - Quina IP rep ara la MV? Per què ara està en el mateix rang de subxarxa que els ordinadors reals de l'aula?
  3. Redacta una breu conclusió tècnica explicant quan és convenient utilitzar el mode NAT (proves aïllades i segures) i quan el mode Pont (per oferir serveis de xarxa a altres companys).

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat les funcions fonamentals del sistema operatiu (CPU, RAM, emmagatzematge, perifèrics i interfície).
- [ ] He diferenciat el programari propietari (Windows, macOS) del programari lliure (GNU/Linux, LliureX).
- [ ] He calculat el límit màxim de RAM en sistemes de 32 bits ($2^{32} = 4\text{ GB}$) i justificat la necessitat dels 64 bits.
- [ ] He distingit un hipervisor de Tipus 1 (Bare-Metal) d'un hipervisor de Tipus 2 (VirtualBox sobre SO amfitrió).
- [ ] He creat i dimensionat correctament una màquina virtual a VirtualBox amb disc dinàmic VDI i memòria equilibrada.
- [ ] He utilitzat les instantànies (*snapshots*) per congelar i restaurar l'estat d'un sistema virtualitzat.
- [ ] He comparat els modes de xarxa virtual NAT i Adaptador Pont comprovant les adreces IP obtingudes.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Conceptes i funcions del sistema operatiu** | Detalla totes les tasques de gestió de recursos (CPU, memòria virtual, sistemes de fitxers i controladors) amb vocabulari tècnic precís. | Explica clarament com el SO fa d'intermediari entre maquinari i programari. | Reconeix que el SO gestiona memòria i fitxers però confon memòria RAM amb emmagatzematge. | No comprèn la funció d'un sistema operatiu o el confon amb una aplicació ofimàtica. |
| **Llicències i models de programari** | Contrasta el model propietari de Windows amb les llibertats de la GPL de GNU/Linux i la distribució educativa LliureX. | Identifica la diferència entre codi obert i tancat i coneix les distribucions Linux bàsiques. | Reconeix que Linux és gratuït i Windows de pagament però desconeix què és el codi font. | Creu que tot el programari gratuït és lliure o desconeix què és una distribució. |
| **Arquitectures de memòria (32b vs 64b)** | Calcula els límits matemàtics ($2^{32} = 4\text{ GB}$), explica la retrocompatibilitat x64 i diagnostica arquitectures per terminal. | Comprèn per què 32 bits no aprofita més de 4 GB i consulta l'arquitectura de l'equip correctament. | Recorda que 64 bits és millor que 32 bits però no sap explicar per què ni calcular el límit. | Intenta instal·lar un sistema de 64 bits en una màquina antiga de 32 bits sense comprendre l'error. |
| **Virtualització i gestió d'hipervisors** | Diferencia hipervisors Tipus 1 i 2, dimensiona recursos de RAM/CPU per a host i guests sense saturar la màquina real. | Configura màquines virtuals a VirtualBox amb memòria equilibrada i disc dinàmic de forma autònoma. | Crea la màquina virtual seguint la guia pas a pas amb alguna ajuda en la memòria o el disc. | Assigna tota la RAM de l'equip a la màquina virtual congelant el sistema amfitrió. |
| **Pràctica de taller (Snapshots i xarxa)** | Domina la creació i reversió d'instantànies i explica la diferència de direccionament entre mode NAT i Pont (*Bridged*). | Utilitza instantànies correctament i canvia el mode de xarxa observant els canvis d'IP. | Restaura instantànies amb suport i connecta la màquina a la xarxa en mode bàsic. | No sap restaurar una instantània o és incapaç de configurar la xarxa de la màquina virtual. |


