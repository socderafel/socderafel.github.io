---
layout: default
title: "UD1: Introducció als Sistemes Operatius i la Virtualització — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD1"
next_url: "ut0101.md"
next_label: "1.1 ➡️"
---

# UD1: Introducció als Sistemes Operatius i la Virtualització

Concepte i funcions bàsiques d'un sistema operatiu, comparativa de sistemes propietaris i lliures (Windows, Linux, macOS), arquitectures de 32 i 64 bits, tecnologia de màquines virtuals i pràctica d'instal·lació de VirtualBox.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **1.1** | **Què és un sistema operatiu? Funcions bàsiques** | [**Llegir apartat →**](./ut0101.md) |
| **1.2** | **Sistemes propietaris vs lliures: Windows, Linux i macOS** | [**Llegir apartat →**](./ut0102.md) |
| **1.3** | **Arquitectures de maquinari: 32 bits vs 64 bits** | [**Llegir apartat →**](./ut0103.md) |
| **1.4** | **Concepte de màquina virtual i hipervisors** | [**Llegir apartat →**](./ut0104.md) |
| **1.5** | **Pràctica: Instal·lació de VirtualBox i creació d'una MV** | [**Llegir apartat →**](./ut0105.md) |

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
1. Descarrega l'instal·lador oficial des del lloc web `virtualbox.org` (o utilitza l'arxiu facilitat pel docent a la carpeta de recursos de l'aula).
2. Executa l'arxiu d'instal·lació amb permisos d'administrador.
3. Accepta les opcions per defecte fent clic a *Següent* (*Next*).
4. Quan avise que la connexió de xarxa es pot tallar temporalment durant 2 segons (per instal·lar el pont virtual de xarxa), fes clic a *Sí* (*Yes*) i a *Instal·la*.

#### Pas 2: Creació de la Màquina Virtual buida
1. Obre l'aplicació **Oracle VM VirtualBox**.
2. Fes clic sobre la icona blava en forma d'engranatge anomenada **Nova (*New*)**.
3. Omple els camps de la finestra d'assistent:
   - **Nom (*Name*):** `Ubuntu_2FPB_ElTeuNom`
   - **Carpeta de la màquina:** Deixa la ruta per defecte o selecciona el segon disc dur de l'aula.
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
5. Localitza el fitxer d'imatge **ISO d'Ubuntu Desktop** que el docent ha guardat a l'ordinador.
6. Fes clic a D'acord. La teua màquina virtual ja té "el CD ficat al lector virtual" i està a punt per arrencar!

---

