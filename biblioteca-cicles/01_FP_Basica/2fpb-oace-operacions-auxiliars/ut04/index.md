---
layout: default
title: "UD4: Administració i Comandes Bàsiques en Linux (Ubuntu/LliureX) — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD4"
next_url: "ut0401.html"
next_label: "4.1 ➡️"
---

# UD4: Administració i Comandes Bàsiques en Linux (Ubuntu/LliureX)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-o4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-fhs" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-bsh" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-prm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-apt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-o4)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ADMINISTRACIÓ I COMANDES EN GNU/LINUX (UBUNTU / LLIUREX)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Jerarquia de fitxers FHS, terminal Bash, permisos octals POSIX i gestió de paquets APT</text>

  <!-- Bloc 1: FHS & GNOME -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fhs)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📁</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arbre FHS & GUI</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Arrel Única /</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• /home: Usuaris personals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• /etc: Configuració del sistema</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• /var: Logs & dades dinàmiques</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• GNOME: Dash, Nautilus, TopBar</text>
  </g>

  <!-- Bloc 2: Consola Bash -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-bsh)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">💻</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Terminal Bash</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Comandes Clau</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• pwd: Ruta actual</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• ls -la: Llista detalls & ocults</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• cd, mkdir -p, touch</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• cp -r, mv, rm -r</text>
  </g>

  <!-- Bloc 3: Permisos i sudo -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-prm)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔒</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Permisos POSIX</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">chmod & sudo</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• r=4, w=2, x=1 (octal)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 755: rwxr-xr-x (scripts)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 644: rw-r--r-- (fitxers)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• sudo: Privilegis de root</text>
  </g>

  <!-- Bloc 4: Gestió de Paquets -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-apt)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Gestió APT</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Paquets de Taller</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• sudo apt update (índex)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• sudo apt upgrade -y</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• sudo apt install htop vlc</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• autoremove: Neteja orfes</text>
  </g>
</svg>
</div>

L'entorn gràfic en Linux, la consola de terminal, comandes essencials de navegació i fitxers (pwd, ls, cd, mkdir, cp, mv, rm), gestió d'usuaris i permisos (chmod, chown, sudo) i gestió de paquets amb apt.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **4.1** | **L'entorn gràfic en Linux (GNOME/MATE) i l'explorador Nautilus** | [**Llegir apartat →**](./ut0401.html) |
| **4.2** | **La consola de terminal: per què és tan potent?** | [**Llegir apartat →**](./ut0402.html) |
| **4.3** | **Comandes bàsiques de navegació i gestió de fitxers** | [**Llegir apartat →**](./ut0403.html) |
| **4.4** | **Usuaris, permisos (chmod/chown) i el comandament sudo** | [**Llegir apartat →**](./ut0404.html) |
| **4.5** | **Pràctica: Gestió de paquets i programari amb apt** | [**Llegir apartat →**](./ut0405.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 4.1 L'entorn gràfic en Linux (GNOME/MATE) i l'explorador Nautilus

En les distribucions Linux modernes orientades a l'usuari com **Ubuntu Desktop** o **LliureX**, l'usuari disposa d'un entorn d'escriptori visual molt modern, elegant i fàcil d'utilitzar (habitualment basat en **GNOME** o **MATE**).

### Elements de l'escriptori GNOME
- **La Barra Superior (*Top Bar*):**
  - Botó d'**Activitats (*Activities*)** a la cantonada superior esquerra: mostra d'un cop d'ull totes les finestres obertes i els diferents escriptoris virtuals de treball.
  - Rellotge central i calendari integrat.
  - Menú d'estat a la dreta: volum de so, connexió de xarxa, brillantor de pantalla i botó d'apagar/tancar sessió.
- **El Llançador lateral (*Dash* / Barra de favorits):** Barra vertical d'icones que conté les aplicacions fixades (Firefox, LibreOffice, Terminal) i el botó amb 9 punts inferiors per obrir la graella completa d'aplicacions instal·lades.
- **Nautilus (Fitxers):** L'explorador de fitxers visual de Linux.
  - A la barra lateral esquerra mostra els accessos ràpids: *Carpeta personal*, *Documents*, *Baixades*, *Música*, *Imatges*, *Paperera* i *Altres ubicacions*.

---

### L'arbre de directoris únic de Linux
A diferència de Windows, que utilitza lletres d'unitat (`C:`, `D:`, `E:`), en Linux **tot penja d'un únic directori arrel anomenat `/` (Root)**:
- `/home`: Conté les carpetes personals dels usuaris (per exemple `/home/alumne`).
- `/etc`: Conté tots els fitxers de configuració de sistema en text pla.
- `/bin` i `/usr/bin`: Conté els binaris i programes executables.
- `/var`: Conté fitxers variables com ara registres d'esdeveniments (*logs* del sistema).
- `/media` o `/mnt`: On es munten automàticament els llapis USB i discs externs.

---

## 4.2 La consola de terminal: per què és tan potent?

Encara que l'entorn gràfic és molt còmode, la **terminal** (consola d'ordres o intèrpret d'ordres Bash) és l'eina de treball més potent i ràpida per a un tècnic informàtic de sistemes.

### Per què la terminal és insubstituïble?
- **Velocitat extrema:** Una tasca que en mode gràfic requereix desenes de clics de ratolí (com reanomenar 200 fitxers o buscar un document concret en tot el disc) es pot fer en la terminal amb una sola línia de text en menys d'un segon.
- **Automatització mitjançant Scripts:** Permet escriure arxius de comandes (*scripts*) que s'executen sols cada nit per fer còpies de seguretat o neteges de sistema sense intervenció humana.
- **Administració remota lleugera:** Els servidors d'Internet no tenen pantalla ni entorn gràfic per estalviar recursos; els administradors s'hi connecten remotament mitjançant connexió segura per text (**SSH**).

---

### Com obrir la terminal en Ubuntu
- Drecera ràpida de teclat: prem alhora **`Ctrl + Alt + T`**.
- O bé fes clic sobre la icona de la finestra negra amb el símbol `>_` al llançador lateral.

#### Com interpretar el prompt de la terminal:
Quan s'obre la terminal, apareix una línia com aquesta:
```bash
alumne@pc-fpb:~$
```
- `alumne`: És el nom de l'usuari que ha iniciat la sessió.
- `pc-fpb`: És el nom d'aquest ordinador en la xarxa.
- `~` (la titlla o virgulilla): Indica que ens trobem situats a la nostra **carpeta personal** (`/home/alumne`).
- `$`: Indica que som un **usuari normal sense privilegis especials** (si fórem el superusuari `root`, el símbol canviaria a `#`).

---

## 4.3 Comandes bàsiques de navegació i gestió de fitxers

Per moure's i treballar còmodament a través de la terminal de Linux, cal memoritzar i practicar aquestes huit comandes fonamentals:

### 1. `pwd` (*Print Working Directory*)
Mostra la ruta completa del directori exacte on ens trobem situats en aquest moment:
```bash
pwd
# Resposta: /home/alumne
```

### 2. `ls` (*List*)
Llista el contingut (fitxers i carpetes) del directori actual:
- `ls`: Llistat senzill de noms.
- `ls -l`: Llistat detallat en format llarg (mostra permisos, propietari, mida en bytes i data de modificació).
- `ls -la`: Mostra a més els **fitxers ocults** (en Linux, els fitxers ocults comencen per un punt, com `.bashrc`).

### 3. `cd` (*Change Directory*)
Permet desplaçar-se d'una carpeta a una altra:
- `cd Documents`: Entra a la carpeta Documents.
- `cd ..`: Puja un nivell amunt a la carpeta mare.
- `cd ~` o simplement `cd`: Torna directament a la teua carpeta personal.
- `cd /`: Va directe a l'arrel de tot el disc dur.

### 4. `mkdir` (*Make Directory*)
Crea una o més carpetes noves:
```bash
mkdir Practica1
mkdir -p Projecte/Part1/Dades
```

### 5. `touch`
Crea un fitxer buit de text instantàniament:
```bash
touch notes.txt
```

### 6. `cp` (*Copy*)
Copia fitxers o carpetes senceres:
- Copiar un fitxer: `cp notes.txt copia_notes.txt`
- Copiar una carpeta amb tot el que té dins: `cp -r Carpeta1 CopiaCarpeta1`

### 7. `mv` (*Move*)
Serveix tant per **moure** un arxiu de lloc com per **canviar-li el nom**:
- Moure: `mv notes.txt Documents/`
- Reanomenar: `mv vell_nom.txt nou_nom.txt`

### 8. `rm` (*Remove*)
Esborra fitxers de forma permanent (ALERTA: no van a cap paperera de reciclatge!):
- Esborrar un fitxer: `rm fitxer_inutil.txt`
- Esborrar una carpeta sencera i tot el seu contingut: `rm -r CarpetaVella`

---

## 4.4 Usuaris, permisos (chmod/chown) i el comandament sudo

En Linux, la seguretat és un pilar bàsic. Cada fitxer i cada carpeta té assignat un propietari i un conjunt estricte de permisos que determinen qui pot llegir-lo, modificar-lo o executar-lo.

### Els tres tipus de permisos bàsics
Quan executem `ls -l`, veiem a l'inici de cada línia una cadena de 10 caràcters com `-rwxr-xr--`:
- El primer caràcter indica si és un fitxer normal (`-`) o un directori (`d`).
- Els següents 9 caràcters es divideixen en 3 grups de 3 lletres:
  1. **U (*User* - Usuari Propietari):** Primers 3 caràcters (`rwx`).
  2. **G (*Group* - Grup d'usuaris):** Segons 3 caràcters (`r-x`).
  3. **O (*Others* - Altres/Resta del món):** Últims 3 caràcters (`r--`).

Significat de les lletres:
- **`r` (*Read*):** Permís de lectura (veure el contingut).
- **`w` (*Write*):** Permís d'escriptura (modificar o esborrar).
- **`x` (*Execute*):** Permís d'execució (executar com a programa o entrar a la carpeta).
- **`-`:** Permís denegat.

---

### Canviar permisos amb `chmod`
La comanda `chmod` (*Change Mode*) modifica els permisos. Es pot fer mitjançant notació numèrica octal, on:
- `r` val 4
- `w` val 2
- `x` val 1

Exemples habituals:
- `chmod 755 script.sh`: L'amo pot fer tot (4+2+1=7); el grup i la resta poden llegir i executar (4+1=5).
- `chmod 644 document.txt`: L'amo pot llegir i escriure (4+2=6); els altres només llegir (4).
- `chmod 777 carpeta`: Permís total per a tothom (usar amb molta precaució).

---

### El Superusuari `root` i l'ordre `sudo`
En Linux existeix un compte d'administrador suprem omnipotent anomenat **`root`**.
Per raons de seguretat, mai s'inicia sessió gràfica directament com a root. En lloc d'això, quan un usuari autoritzat necessita executar una tasca administrativa (com instal·lar un programa o modificar la xarxa), col·loca la paraula **`sudo`** (*SuperUser DO*) davant de l'ordre i introdueix la seua contrasenya:
```bash
sudo apt update
```

---

## 4.5 Pràctica: Gestió de paquets i programari amb apt

### Objectiu de la Pràctica
Aprendre a instal·lar, actualitzar i desinstal·lar programari a través de la terminal utilitzant el gestor de paquets oficial de distribucions basades en Debian/Ubuntu (**`apt`** - *Advanced Package Tool*).

---

### Procediment Pas a Pas

#### Pas 1: Actualització de la llista de repositoris
Abans d'instal·lar cap programa nou, cal actualitzar l'índex local de paquets perquè el sistema conega les últimes versions disponibles als servidors oficials d'Internet:
```bash
sudo apt update
```
(Introdueix la teua contrasenya quan la demane. Nota: mentre escrius la contrasenya a la terminal no es veuen asteriscs ni caràcters per seguretat; escriu-la normal i prem *Intro*).

#### Pas 2: Actualització dels programes del sistema
Per aplicar totes les actualitzacions de seguretat i millores dels programes ja instal·lats:
```bash
sudo apt upgrade -y
```

#### Pas 3: Cerca i instal·lació d'un programa de taller
Instal·larem una eina molt útil de terminal anomenada **`htop`** (un monitor gràfic de recursos de CPU i RAM molt millor que el clàssic `top`), i el reproductor multimèdia **`vlc`**:
```bash
sudo apt install htop vlc -y
```
Comprova que s'ha instal·lat correctament executant:
```bash
htop
```
(Prem la tecla `F10` o `q` per eixir de la pantalla de htop).

#### Pas 4: Desinstal·lació d'un paquet
Si volem eliminar una aplicació que ja no necessitem:
```bash
sudo apt remove vlc -y
```
I per eliminar les llibreries i dependències que van quedar òrfenes i ja no s'utilitzen:
```bash
sudo apt autoremove -y
```
Enhorabona! Ja domines les operacions fonamentals de manteniment de programari en Linux.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul i conversió de permisos POSIX (Octal, Simbòlic i Binari)
En els sistemes UNIX/Linux, els permisos d'un fitxer o directori s'estructuren en una terna de permisos per a tres tipus d'entitats: Usuari Propietari ($U$), Grup ($G$) i Altres/Resta ($O$):
$$\text{Pes Octal: } r = 4 \quad (2^2), \quad w = 2 \quad (2^1), \quad x = 1 \quad (2^0), \quad - = 0$$
1. Completa la taula de correspondència calculant el valor octal de 3 dígits i la cadena binària de 9 bits corresponent:

| Mode Simbòlic (`ls -l`) | Permisos Usuari ($U$) | Permisos Grup ($G$) | Permisos Altres ($O$) | Valor Octal (`chmod`) | Cadena Binària (9 bits) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| `-rwxr-xr-x` | Lectura, escriptura, execució ($4+2+1=7$) | Lectura, execució ($4+0+1=5$) | Lectura, execució ($4+0+1=5$) | **$755$** | `111 101 101` |
| `-rw-r--r--` | | | | | |
| `-rwxr-x---` | | | | | |
| `-rw-rw----` | | | | | |
| `-rwx------` | | | | | |

2. Si un script té permisos `-rw-r--r--` ($644$), quina comanda exacta has d'executar per concedir permís d'execució exclusivament a l'usuari propietari sense modificar els permisos de grup ni d'altres?
   - Utilitzant notació simbòlica: `chmod u+x script.sh`
   - Utilitzant notació numèrica octal: calcula el nou número de 3 dígits.
3. Per què és una negligència greu de seguretat aplicar `chmod 777` a una carpeta amb documents confidencials en un servidor corporatiu?

#### Exercici 2: Jerarquia FHS i cerca de fitxers de configuració
1. L'estàndard de jerarquia de sistemes de fitxers (*Filesystem Hierarchy Standard* - FHS) organitza les funcions del sistema en directoris fixos. Obre la terminal i executa les següents comandes de diagnòstic:
   ```bash
   df -h /
   du -sh /var/log
   ls -lh /etc/passwd /etc/fstab
   ```
2. Respon a les següents preguntes tècniques:
   - Quin percentatge d'espai del disc ocupa la partició arrel `/` segons la sortida de `df -h`?
   - Quina mida total ocupen els fitxers de registre a `/var/log` segons `du -sh`?
   - Qui és l'usuari i el grup propietari del fitxer `/etc/passwd` que emmagatzema la llista d'usuaris del sistema?
3. Per què un usuari normal pot llegir el contingut de `/etc/passwd` (`cat /etc/passwd`), però en canvi no pot llegir el fitxer que guarda les contrasenyes xifrades `/etc/shadow` (`cat /etc/shadow` $\rightarrow$ *Permís denegat*)?

#### Exercici 3: Auditoria d'emmagatzematge del gestor de paquets APT
Quan s'instal·len programes amb `apt`, el sistema descarrega els fitxers empaquetats `.deb` en una carpeta temporal de memòria cau abans de descomprimir-los:
1. Comprova quant espai ocupen els paquets descarregats a la memòria cau executant:
   ```bash
   sudo du -sh /var/cache/apt/archives
   ```
2. Si un equip de taller porta 6 mesos instal·lant eines i actualitzacions i la carpeta `/var/cache/apt/archives` ha acumulat $3{,}8\text{ GB}$ de paquets antics `.deb`:
   - Quina comanda oficial d'APT permet purgar immediatament tots els fitxers `.deb` descarregats recuperant eixos 3,8 GB sense desinstal·lar cap programa (`sudo apt clean`)?
   - Quina diferència hi ha entre `sudo apt clean` i `sudo apt autoclean`?
3. Si un paquet requereix descarregar $45\text{ MB}$ d'arxiu comprimit i un cop instal·lat ocupa $180\text{ MB}$ al disc, quin és el factor d'expansió de la descompressió?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'una estructura departamental mitjançant comandes Bash
- **Objectiu:** Dominar la creació àgil de directoris, fitxers i còpies de seguretat sense utilitzar el ratolí ni l'entorn gràfic.
- **Procediment de taller:**
  1. Obre la terminal (`Ctrl + Alt + T`) i assegura't que estàs a la teua carpeta personal (`pwd`).
  2. Crea d'un sol cop mitjançant `mkdir -p` la següent estructura jeràrquica d'una empresa de suport tècnic:
     ```bash
     mkdir -p Taller/{Hardware,Software/{ISOs,Drivers},Clients/Factures}
     ```
  3. Comprova l'estructura creada executant `tree Taller` (o `ls -R Taller`).
  4. Dins de `Taller/Hardware`, crea tres fitxers de registre buits anomenats `estoc_ram.txt`, `estoc_ssd.txt` i `reparacions.log` utilitzant una única ordre `touch`.
  5. Copia el fitxer `reparacions.log` com a còpia de seguretat a la carpeta `Taller/Clients` anomenant-lo `reparacions_backup.log`.
  6. Reanomena la carpeta `Clients` perquè passe a anomenar-se `Clients_2026` utilitzant la comanda `mv`.

#### Repte 2: Assignació de permisos de seguretat a un script de manteniment
- **Objectiu:** Configurar permisos POSIX perquè un script puga executar-se correctament evitant que altres usuaris el modifiquen.
- **Procediment de taller:**
  1. A la teua carpeta personal, crea un xicotet script de neteja anomenat `neteja.sh`:
     ```bash
     echo '#!/bin/bash' > neteja.sh
     echo 'echo "Executant neteja de temporals..."' >> neteja.sh
     echo 'rm -rf /tmp/proves_*' >> neteja.sh
     echo 'echo "Neteja completada amb èxit!"' >> neteja.sh
     ```
  2. Executa `ls -l neteja.sh`. Quins permisos té assignats per defecte? Té permís d'execució (`x`)?
  3. Intenta executar l'script teclejant `./neteja.sh`. Per què la terminal respon *"Permís denegat"*?
  4. Assigna permisos d'execució a l'usuari propietari i de només lectura als altres aplicant:
     ```bash
     chmod 755 neteja.sh
     ```
  5. Torna a executar `ls -l neteja.sh` (observa com el fitxer canvia de color verd) i executa `./neteja.sh`. Comprova que s'executa correctament.

#### Repte 3: Monitoratge de processos en temps real i gestió de recursos amb `htop`
- **Objectiu:** Utilitzar eines de diagnòstic de consola per detectar processos bloquejats i analitzar el consum de memòria RAM i CPU.
- **Procediment tècnic:**
  1. Si no està instal·lat, instal·la `htop` mitjançant `sudo apt install htop -y`.
  2. Obre una segona pestanya o finestra de terminal i executa una tasca que consumisca recursos (com obrir el navegador Firefox o llançar un procés en segon pla).
  3. Executa `htop` a la primera terminal.
  4. Identifica els paràmetres de la capçalera:
     - Consum percentual de cada nucli de CPU.
     - Ús de memòria RAM física en megabytes (`Mem`) i de memòria d'intercanvi (`Swp`).
     - Nombre total de tasques (*Tasks*) i temps d'encesa de l'equip (*Uptime*).
  5. Ordena la llista de processos prement `F6` per identificar quin procés està consumint més memòria RAM (`PERCENT_MEM`).
  6. Localitza el número d'identificador de procés (**PID**) del navegador web, prem `F9` (*Kill*), selecciona el senyal `15 (SIGTERM)` o `9 (SIGKILL)` i prem *Intro*. Comprova com el programa es tanca a l'instant.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat l'estructura de directoris única de Linux amb arrel `/` (`/home`, `/etc`, `/var`, `/bin`).
- [ ] He interpretat el prompt de la terminal distingint l'usuari normal (`$`) del superusuari root (`#`).
- [ ] He utilitzat amb soltesa les comandes de navegació i manipulació: `pwd`, `ls -la`, `cd`, `mkdir -p`, `cp -r`, `mv` i `rm -r`.
- [ ] He calculat i convertit permisos POSIX en format simbòlic (`rwx`), binari i octal (`chmod 755`, `chmod 644`).
- [ ] He utilitzat la comanda `sudo` per executar ordres administratives amb privilegis de superusuari.
- [ ] He actualitzat repositoris (`apt update`), actualitzat el sistema (`apt upgrade`) i gestionat paquets (`install`/`remove`).
- [ ] He monitorat processos actius i consum de memòria RAM i CPU utilitzant `htop`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Jerarquia FHS i entorn GNOME** | Descriu el propòsit de cada directori de l'arrel (`/etc`, `/var`, `/home`) i domina tant Nautilus com la consola. | Comprèn que tot penja de l'arrel `/` i localitza fitxers personals a `/home`. | Reconeix la carpeta `/home` però busca lletres d'unitat com `C:` a Linux. | Desconeix l'estructura de directoris o intenta crear carpetes directament a l'arrel sense permisos. |
| **Navegació i comandes Bash** | Empra comandes combinades (`mkdir -p`, `ls -la`, `cp -r`) amb comodins i rutes relatives/absolutes de forma impecable. | Utilitza les comandes bàsiques (`cd`, `mkdir`, `cp`, `rm`) amb fluïdesa i pocs errors de ruta. | Realitza operacions bàsiques però s'equivoca freqüentment amb les rutes de carpetes mare (`..`). | No sap consultar la ruta actual (`pwd`) o esborra fitxers sense comprendre l'ordre `rm`. |
| **Permisos POSIX i càlcul octal (chmod)** | Converteix a l'acte cadenes `rwx` a octal (4-2-1), aplica `chmod` i `chown` i justifica polítiques de mínim privilegi. | Calcula valors octals típics (755, 644) i assigna permís d'execució a scripts de forma autònoma. | Reconeix les lletres $r, w, x$ però comet errors en sumar els valors numèrics octals. | Aplica sempre `chmod 777` a tot sense entendre els riscos de seguretat. |
| **Gestió de paquets amb APT** | Domina el cicle `update`, `upgrade`, `install`, `remove` i neteja de memòria cau amb `clean`/`autoremove`. | Instal·la i desinstal·la programari per consola amb `sudo apt` sense dificultat. | Sap instal·lar programes bàsics però oblida executar `apt update` prèviament. | Intenta descarregar arxius `.exe` de Windows a Linux o no sap introduir la contrasenya a `sudo`. |
| **Monitoratge de processos (htop)** | Analitza consum de CPU, RAM i Swap a `htop`, localitza PIDs i finalitza processos bloquejats amb senyals segures. | Utilitza `htop` per identificar el procés que més consumeix i sap tancar-lo amb `F9`. | Obre `htop` i observa el gràfic però li costa interpretar els identificadors PID. | Desconeix com veure els recursos de la màquina o tanca la consola quan un procés es bloqueja. |


