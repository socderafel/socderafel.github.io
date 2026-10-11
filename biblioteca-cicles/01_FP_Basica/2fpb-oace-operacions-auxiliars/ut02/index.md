---
layout: default
title: "UD2: Instal·lació i Particionament de Sistemes Operatius — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD2"
next_url: "ut0201.md"
next_label: "2.1 ➡️"
---

# UD2: Instal·lació i Particionament de Sistemes Operatius

Estructures de disc i taules de particions MBR vs GPT, sistemes de fitxers (NTFS, ext4, FAT32/exFAT), preparació de llapis USB arrancables amb Rufus/Ventoy, instal·lació pas a pas de Windows i instal·lació d'Ubuntu Desktop.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **2.1** | **Estructures de disc i taules de particions: MBR vs GPT** | [**Llegir apartat →**](./ut0201.md) |
| **2.2** | **Sistemes de fitxers més comuns: NTFS, ext4, FAT32 i exFAT** | [**Llegir apartat →**](./ut0202.md) |
| **2.3** | **Preparació de memòries USB arrancables amb Rufus i Ventoy** | [**Llegir apartat →**](./ut0203.md) |
| **2.4** | **Pràctica: Instal·lació pas a pas de Windows 10/11** | [**Llegir apartat →**](./ut0204.md) |
| **2.5** | **Pràctica: Instal·lació d'Ubuntu Desktop / LliureX** | [**Llegir apartat →**](./ut0205.md) |

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

