---
layout: default
title: "UD4: Administració i Comandes Bàsiques en Linux (Ubuntu/LliureX) — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD4"
next_url: "ut0401.md"
next_label: "4.1 ➡️"
---

# UD4: Administració i Comandes Bàsiques en Linux (Ubuntu/LliureX)

L'entorn gràfic en Linux, la consola de terminal, comandes essencials de navegació i fitxers (pwd, ls, cd, mkdir, cp, mv, rm), gestió d'usuaris i permisos (chmod, chown, sudo) i gestió de paquets amb apt.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **4.1** | **L'entorn gràfic en Linux (GNOME/MATE) i l'explorador Nautilus** | [**Llegir apartat →**](./ut0401.md) |
| **4.2** | **La consola de terminal: per què és tan potent?** | [**Llegir apartat →**](./ut0402.md) |
| **4.3** | **Comandes bàsiques de navegació i gestió de fitxers** | [**Llegir apartat →**](./ut0403.md) |
| **4.4** | **Usuaris, permisos (chmod/chown) i el comandament sudo** | [**Llegir apartat →**](./ut0404.md) |
| **4.5** | **Pràctica: Gestió de paquets i programari amb apt** | [**Llegir apartat →**](./ut0405.md) |

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

