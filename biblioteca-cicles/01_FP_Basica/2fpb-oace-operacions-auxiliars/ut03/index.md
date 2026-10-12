---
layout: default
title: "UD3: Administració i Configuració del Sistema Operatiu Windows — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD3"
next_url: "ut0301.html"
next_label: "3.1 ➡️"
---

# UD3: Administració i Configuració del Sistema Operatiu Windows

L'entorn gràfic de Windows, gestió de controladors de dispositius (*device drivers*), gestió d'usuaris locals i UAC, sistema de fitxers i dreceres, instal·lació i desinstal·lació neta d'aplicacions.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **3.1** | **L'entorn gràfic de Windows: Escriptori, barra de tasques i configuració** | [**Llegir apartat →**](./ut0301.html) |
| **3.2** | **Controladors de dispositius (*Drivers*) i Administrador de dispositius** | [**Llegir apartat →**](./ut0302.html) |
| **3.3** | **Gestió de comptes d'usuari locals i control UAC** | [**Llegir apartat →**](./ut0303.html) |
| **3.4** | **Gestió d'arxius, carpetes, atributs i cerca avançada** | [**Llegir apartat →**](./ut0304.html) |
| **3.5** | **Pràctica: Instal·lació i desinstal·lació neta d'aplicacions** | [**Llegir apartat →**](./ut0305.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 3.1 L'entorn gràfic de Windows: Escriptori, barra de tasques i configuració

Un cop instal·lat Windows, el tècnic d'explotació ha de conèixer a fons l'estructura de la interfície gràfica d'usuari per configurar les opcions del sistema i personalitzar-lo segons les necessitats del lloc de treball.

### Components fonamentals de la interfície de Windows
- **L'Escriptori (*Desktop*):** És l'àrea principal de treball que ocupa tota la pantalla. Hi podem allotjar dreceres d'accés ràpid a fitxers i aplicacions, així com carpetes de treball diari.
- **La Barra de Tasques (*Taskbar*):** Situada habitualment a la part inferior, allotja:
  - El **Botó d'Inici**: Dóna accés al menú d'aplicacions, documents recents i opcions d'apagar/reiniciar.
  - La **Caixa de cerca**: Permet localitzar qualsevol aplicació, fitxer o paràmetre de configuració en segons.
  - Els **Icones d'aplicacions fixades i obertes**: Mostren les aplicacions en execució amb una línia inferior.
  - L'**Àrea de notificacions (*System Tray*)**: Mostra l'hora, calendari, icona de volum de so, estat de la xarxa (cable o Wi-Fi) i aplicacions en segon pla (antivirus, núvol).

---

### Les dues vies de configuració en Windows modern

En Windows 10 i 11 conviuen dos panells per ajustar les preferències del sistema:
1. **L'aplicació moderna de Configuració (`ms-settings:`):**
   - S'obre prement la drecera de teclat **`Windows + I`**.
   - Dissenyada per a ús senzill i tàctil: permet configurar pantalles, so, comptes, xarxes Wi-Fi, aplicacions instal·lades i Windows Update.
2. **El Tauler de Control clàssic (`control.exe`):**
   - El tauler històric de Windows que encara conserva moltes opcions tècniques avançades (connexions de xarxa avançades, administració d'energia, còpies de seguretat clàssiques).

---

## 3.2 Controladors de dispositius (*Drivers*) i Administrador de dispositius

Quan instal·lem un sistema operatiu de zero, és molt habitual que alguns components de l'ordinador (la targeta gràfica d'alta resolució, el xip de so o la connexió Wi-Fi) no funcionen o es vegen a baixa resolució. Això passa perquè falten els **controladors**.

### Què és un controlador (*Device Driver*)?
Un **controlador** és un xicotet programa informàtic especialitzat, escrit pel fabricant del component físic (com Intel, Realtek, Nvidia o AMD), que **ensenya al sistema operatiu com comunicar-se i traure el màxim profit d'eixe maquinari específic**.

---

### L'Administrador de Dispositius (`devmgmt.msc`)
És l'eina tècnica clau de Windows per inspeccionar tot el maquinari connectat a la placa base:
- Per obrir-lo ràpidament: prem les tecles **`Windows + X`** i selecciona **Administrador de dispositius**, o escriu `devmgmt.msc` al quadre Executar (`Windows + R`).

#### Com interpretar els símbols a l'Administrador de dispositius:
1. **Triangle groc amb signe d'admiració (!):**
   - Indica un component que **no té controlador instal·lat o que té un controlador incompatible que està donant error**. Aquest dispositiu no funcionarà fins que no se li instal·le el controlador adequat.
2. **Fletxa negra apuntant cap avall ($\downarrow$):**
   - El dispositiu està **deshabilitat manualment** per l'usuari o l'administrador (no està avariat, només apagat pel sistema).
3. **Dispositiu desconegut (*Unknown Device*):**
   - Windows no sap quin component és. Fent clic amb el botó dret $\rightarrow$ *Propietats* $\rightarrow$ pestanya *Detalls* $\rightarrow$ propietat *Id. de maquinari*, podem veure els codis `VEN_XXXX` (Vendor/Fabricant) i `DEV_XXXX` (Device/Model) per buscar el controlador oficial a Internet.

---

### Com instal·lar o actualitzar un controlador
1. A través de **Windows Update** (la via més segura i recomanada): molts fabricants envien els controladors directament a Microsoft.
2. Descarregant el paquet oficial des de la **pàgina web oficial del fabricant** de la placa base o de la targeta gràfica (evitant sempre pàgines de descàrrega sospitoses que instal·len programari brossa).

---

## 3.3 Gestió de comptes d'usuari locals i control UAC

En un entorn laboral o escolar, un mateix ordinador de taller o d'oficina sol ser utilitzat per diverses persones diferents al llarg del dia. Per garantir la privacitat dels documents i la seguretat del sistema operatiu, cal gestionar adequadament els **comptes d'usuari**.

### Tipus de comptes en Windows

1. **Compte d'Administrador:**
   - Té **control absolut** sobre tot el sistema operatiu.
   - Pot instal·lar i desinstal·lar qualsevol programa, modificar fitxers de sistema protegits, crear o esborrar altres usuaris i canviar configuracions de seguretat.
2. **Compte d'Usuari Estàndard (Limitat):**
   - Pensat per a l'ús diari de treball.
   - Pot executar aplicacions ofimàtiques, navegar per Internet i guardar fitxers en la seua pròpia carpeta personal (`C:\Users\NomUsuari`).
   - **No pot instal·lar programes nous a nivell de sistema** ni modificar arxius crítics que puguen afectar altres usuaris o deixar la màquina inutilitzada.

> [!WARNING]
> La bona pràctica de seguretat recomanada en qualsevol empresa és que els empleats utilitzen sempre un **compte d'usuari estàndard** per al treball diari, i que el compte d'administrador es reserve únicament per a tasques tècniques de manteniment.

---

### El Control de Comptes d'Usuari (UAC - *User Account Control*)
És la finestra emergent de seguretat que enfosqueix tota la pantalla i pregunta: *"Voleu permetre que aquesta aplicació faça canvis en el dispositiu?"*:
- Si l'usuari que ha fet clic és administrador, n'hi ha prou de fer clic a **Sí**.
- Si l'usuari és estàndard, la finestra demana obligatòriament introduir el nom i la **contrasenya d'un administrador** per poder continuar.
- **Funció de seguretat:** Impedeix que un virus o programari maliciós s'instal·le en silenci en segon pla sense que l'usuari se n'adone.

---

## 3.4 Gestió d'arxius, carpetes, atributs i cerca avançada

L'**Explorador de fitxers** de Windows (`explorer.exe`) és l'eina primordial per navegar pel disc dur i organitzar la informació en fitxers i carpetes.

### Estructura típica de carpetes d'un sistema Windows
- `C:\Windows`: Conté el nucli del sistema operatiu, les llibreries (`System32`) i els controladors. **Mai s'ha de tocar ni esborrar res d'ací manualment.**
- `C:\Program Files` (i `C:\Program Files (x86)`): On s'instal·len les aplicacions de 64 bits i 32 bits respectivament.
- `C:\Users` (*Usuaris*): Conté una carpeta independent per a cada compte d'usuari creat a la màquina (`Escriptori`, `Documents`, `Descàrregues`, `Imatges`, `Vídeos`).

---

### Atributs bàsics de fitxer
En fer clic dret sobre un fitxer $\rightarrow$ *Propietats*:
- **Només lectura (*Read-only*):** Impedeix que el fitxer puga ser modificat o sobreescrit per accident.
- **Ocult (*Hidden*):** Fa que el fitxer no siga visible a l'explorador llevat que s'active manualment la casella *"Elements ocults"* al menú *Visualització*.

---

### Extensions de fitxer més comunes
L'extensió (les 3 o 4 lletres després de l'últim punt) indica al sistema quin tipus de fitxer és i amb quin programa s'ha d'obrir:
- **Executables:** `.exe`, `.msi`, `.bat`, `.cmd` (s'han d'obrir amb precaució!).
- **Documents:** `.docx`, `.pdf`, `.txt`, `.xlsx`, `.pptx`, `.odt`
- **Imatges:** `.jpg`, `.png`, `.gif`, `.webp`, `.svg`
- **Àudio i vídeo:** `.mp3`, `.wav`, `.mp4`, `.mkv`
- **Comprimits:** `.zip`, `.rar`, `.7z`

> [!TIP]
> És una regla d'or de seguretat informàtica tindre sempre **activada l'opció *"Extensions de nom de fitxer"*** a l'Explorador de Windows. Així evitarem caure en paranys de virus com ara `factura_urgent.pdf.exe`.

---

## 3.5 Pràctica: Instal·lació i desinstal·lació neta d'aplicacions

### Objectiu de la Pràctica
1. Descarregar i instal·lar correctament aplicacions de treball en Windows comprovant la fiabilitat de l'origen.
2. Comprovar la diferència entre un instal·lador estàndard i una aplicació portable.
3. Realitzar una **desinstal·lació neta** sense deixar residus ni carpetes brossa al sistema.

---

### Procediment Pas a Pas

#### Pas 1: Instal·lació d'una aplicació recomanada (7-Zip)
1. Obre el navegador web i ves al lloc oficial `7-zip.org`.
2. Descarrega l'instal·lador de **64 bits x64** (format `.exe`).
3. Obre la carpeta de *Descàrregues*, fes doble clic sobre l'arxiu i accepta el control UAC.
4. Comprova la ruta d'instal·lació proposada (`C:\Program Files\7-Zip`) i fes clic a **Install**.
5. Un cop finalitzat, fes clic amb el botó dret sobre qualsevol arxiu de l'escriptori i comprova que al menú contextual apareix la nova opció *7-Zip*.

#### Pas 2: Comprensió d'aplicacions portables
- Una aplicació **portable** no necessita instal·lador ni escriu al registre de Windows. Es pot portar dins d'un llapis de memòria USB i s'executa amb un simple doble clic (per exemple, versions portables de Notepad++ o VLC).

#### Pas 3: Desinstal·lació neta d'una aplicació
Molts usuaris novells intenten "desinstal·lar" un programa arrossegant la seua icona de l'escriptori a la paperera de reciclatge. Això només esborra la drecera, deixant tot el programa sencer i ocupant espai al disc!

1. Per desinstal·lar netament:
   - Prem `Windows + I` per anar a **Configuració** $\rightarrow$ **Aplicacions** $\rightarrow$ **Aplicacions instal·lades** (o des del Tauler de Control $\rightarrow$ *Programes i característiques*).
2. Localitza a la llista el programa que vols eliminar (per exemple, un joc o utilitat de prova).
3. Fes clic sobre els tres punts (`...`) i selecciona **Desinstal·la (*Uninstall*)**.
4. S'obrirà el desinstal·lador oficial del programa. Confirma l'eliminació.
5. Comprova que la carpeta corresponent a `C:\Program Files` s'ha suprimit correctament.

---

