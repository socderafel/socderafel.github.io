---
layout: default
title: "UD3: Administració i Configuració del Sistema Operatiu Windows — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD3"
next_url: "ut0301.html"
next_label: "3.1 ➡️"
---

# UD3: Administració i Configuració del Sistema Operatiu Windows

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-o3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-gui" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-drv" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-uac" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-app3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-o3)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ADMINISTRACIÓ I CONFIGURACIÓ DE MICROSOFT WINDOWS</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Entorn gràfic, gestió de controladors (drivers), seguretat UAC i cicle de vida d'aplicacions</text>

  <!-- Bloc 1: Entorn Gràfic -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-gui)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🖥️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Interfície & Eines</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Configuració & Consola</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ms-settings: Win + I</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Tauler de control clàssic</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Menú tècnic: Win + X</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Executar ràpid: Win + R</text>
  </g>

  <!-- Bloc 2: Drivers de Maquinari -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-drv)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔧</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Controladors</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">devmgmt.msc</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Triangle groc (!): Error</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Fletxa avall (↓): Deshabilitat</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Id maquinari: VEN & DEV</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Actualització via WU</text>
  </g>

  <!-- Bloc 3: Usuaris i UAC -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-uac)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Usuaris & UAC</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Seguretat de Comptes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Administrador vs Estàndard</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• UAC: Elevació de permisos</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• lusrmgr.msc & net user</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Privacitat C:\Users\Nom</text>
  </g>

  <!-- Bloc 4: Fitxers i Aplicacions -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-app3)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fitxers & Apps</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Estructura & Neteja</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• C:\Windows & Program Files</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Extensions: .exe, .msi</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Desinstal·lació neta oficial</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Programari portable USB</text>
  </g>
</svg>
</div>

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

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Gestió de comptes d'usuari i privilegis de grup mitjançant PowerShell
En l'administració de sistemes Windows, la creació i manteniment d'usuaris es realitza de manera ràpida i auditable mitjançant cmdlets de PowerShell o ordres `net user`.
1. Obre una finestra de PowerShell amb privilegis d'administrador i executa la següent consulta per llistar tots els comptes locals del sistema:
   ```powershell
   Get-LocalUser | Select-Object Name, Enabled, PasswordRequired, LastLogon
   ```
   - Quins usuaris del sistema vénen deshabilitats de fàbrica per motius de seguretat (`Administrator`, `Guest`, `DefaultAccount`)?
2. Escriu les ordres necessàries per crear un nou usuari anomenat `tècnic_suport` amb contrasenya que no expire i afegir-lo al grup local de seguretat `Usuaris`:
   ```powershell
   $Password = ConvertTo-SecureString "Fpb2026!Temporal" -AsPlainText -Force
   New-LocalUser "tècnic_suport" -Password $Password -FullName "Tècnic de Suport de Taller" -Description "Compte operatiu estàndard"
   Add-LocalGroupMember -Group "Usuaris" -Member "tècnic_suport"
   ```
3. Verifica la pertinença a grups executant:
   ```powershell
   Get-LocalGroupMember -Group "Administradors"
   Get-LocalGroupMember -Group "Usuaris"
   ```
   Per què és fonamental verificar que l'usuari NO apareix al grup `Administradors`?

#### Exercici 2: Desxiframent de codis de maquinari (VEN i DEV) a l'Administrador de dispositius
Quan un perifèric o targeta interna apareix marcat amb un triangle groc d'avís (`Unknown Device` o `Dispositiu desconegut`):
1. Obre l'Administrador de dispositius (`devmgmt.msc`), fes clic dret sobre el dispositiu $\rightarrow$ *Propietats* $\rightarrow$ pestanya *Detalls* $\rightarrow$ propietat *Id. de maquinari*.
2. Observa la cadena d'identificació típica d'un xip de xarxa:
   `PCI\VEN_10EC&DEV_8168&SUBSYS_816810EC&REV_06`
   - Què signifiquen exactament els caràcters `VEN_10EC`? (Vendor ID / Codi internacional del fabricant).
   - Què signifiquen els caràcters `DEV_8168`? (Device ID / Codi del model de maquinari).
3. Utilitzant una base de dades pública de maquinari (com `devicehunt.com` o `pcilookup.com`), identifica:
   - Quin fabricant correspon a `VEN_10EC`? (Realtek Semiconductor Corp.).
   - Quin component exacte correspon a `DEV_8168`? (RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller).
4. Explica per què aquest procediment evita instal·lar programari de controladors erroni o danyí des de webs no oficials.

#### Exercici 3: Auditoria d'ocupació de disc de les carpetes principals de Windows
En un equip de taller amb una unitat SSD de $240\text{ GB}$ (`C:`), s'executa una anàlisi d'espai utilitzat:
- Carpeta del nucli del sistema `C:\Windows`: $24\text{ GB}$.
- Carpeta d'aplicacions `C:\Program Files` + `C:\Program Files (x86)`: $42\text{ GB}$.
- Carpetes d'usuaris `C:\Users`: $68\text{ GB}$.
- Fitxer de paginació i hibernació (`pagefile.sys` + `hiberfil.sys`): $16\text{ GB}$.
- Espai lliure restant al disc: $90\text{ GB}$.
1. Calcula la capacitat total ocupada en gigabytes i el percentatge que representa cadascuna de les 4 categories respecte a l'espai total del disc.
2. Si un usuari té $35\text{ GB}$ d'arxius temporals i descàrregues oblidades a `C:\Users\alumne\Downloads`, quin percentatge d'espai del disc es recuperaria si es buidara aquesta carpeta?
3. Quina eina integrada de Windows (`cleanmgr.exe` o *Sensor d'emmagatzematge*) permet purgar fitxers d'actualitzacions antigues de Windows Update sense danyar el sistema operatiu?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'usuaris estàndard i comprovació de barreres UAC
- **Objectiu:** Experimentar el comportament del Control de Comptes d'Usuari (UAC) en un entorn simulat d'oficina.
- **Procediment de taller:**
  1. Inicia sessió amb el compte d'administrador del sistema.
  2. Crea un nou compte local d'usuari estàndard anomenat `operari_oficina` amb contrasenya.
  3. Tanca la sessió de l'administrador i inicia sessió com a `operari_oficina`.
  4. Intenta realitzar les següents accions i anota la resposta de Windows:
     - Canviar el fons d'escriptori i la mida de lletra (acció d'usuari estàndard: ho permet?).
     - Obrir l'Administrador de tasques (`taskmgr`).
     - Intentar executar l'instal·lador d'un programa descarregat a `Descàrregues`.
  5. Observa com apareix la finestra blava d'UAC demanant la contrasenya d'administrador: introdueix una contrasenya incorrecta i comprova com el sistema bloqueja l'execució.
  6. Redacta una breu reflexió sobre com aquest mecanisme impedeix que un treballador descarregue accidentalment un programa espia que infecte tota l'empresa.

#### Repte 2: Diagnòstic, deshabilitació i reinstal·lació de controladors
- **Objectiu:** Utilitzar l'Administrador de dispositius per gestionar l'estat operatiu del maquinari.
- **Situació:** En un equip de laboratori es vol simular una incidència de so:
  1. Obre l'Administrador de dispositius (`devmgmt.msc`) i desplega la branca *Controladors de so, vídeo i jocs*.
  2. Localitza el dispositiu d'àudio (*High Definition Audio* o *Realtek Audio*).
  3. Fes clic amb el botó dret i selecciona **Deshabilita el dispositiu (*Disable device*)**.
  4. Observa com apareix una fletxa negra apuntant cap avall ($\downarrow$) i comprova que la icona d'altaveu de la barra de tasques mostra una creu roja (silenci total).
  5. Torna a fer clic dret $\rightarrow$ *Habilita el dispositiu*. El so torna immediatament.
  6. Fes clic dret $\rightarrow$ *Propietats* $\rightarrow$ pestanya *Controlador*:
     - Anota la versió del controlador i la data d'emissió del proveïdor.
     - Per a què serveix el botó **Reverteix al controlador anterior (*Roll Back Driver*)** si una actualització fa que el component comence a fallar?

#### Repte 3: Instal·lació desatesa i verificació en el Registre de Windows
- **Objectiu:** Conèixer mètodes automatitzats d'instal·lació de programari emprats en manteniment corporatiu.
- **Procediment tècnic:**
  1. Descarrega l'instal·lador de 7-Zip (`7z2408-x64.exe`) a la carpeta `C:\Temp`.
  2. Obre una consola de símbol del sistema (`cmd.exe`) com a administrador.
  3. Executa la instal·lació en **mode silenciós o desatès** afegint el paràmetre `/S`:
     ```cmd
     C:\Temp\7z2408-x64.exe /S
     ```
  4. Comprova que el programa s'ha instal·lat en menys de 2 segons a `C:\Program Files\7-Zip` sense mostrar cap finestra ni demanar clics de *Següent*.
  5. Obre l'Editor del Registre de Windows (`regedit.exe`) i navega fins a la clau:
     `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall`
  6. Localitza la subcarpeta de 7-Zip i comprova que conté la cadena `UninstallString` amb la ruta exacta que executa Windows quan desinstal·lem el programa.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He distingit l'aplicació moderna de Configuració (`ms-settings:`) del Tauler de Control clàssic (`control.exe`).
- [ ] He utilitzat dreceres tècniques ràpides: `Win + X` (menú avançat), `Win + R` (executar) i `Win + I` (configuració).
- [ ] He interpretat els símbols de l'Administrador de dispositius: triangle groc (!), fletxa avall (↓) i dispositiu desconegut.
- [ ] He localitzat els codis d'identificació de maquinari `VEN` i `DEV` per trobar el controlador oficial a Internet.
- [ ] He creat usuaris estàndard i verificat que el control UAC bloqueja la instal·lació de programari sense contrasenya d'administrador.
- [ ] He diferenciat la carpeta de sistema `C:\Windows` de les carpetes d'aplicacions (`Program Files`) i de perfils (`Users`).
- [ ] He executat una instal·lació neta i desinstal·lació oficial d'una aplicació verificant que no queden residus al disc.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Navegació i eines del sistema Windows** | Empra amb agilitat dreceres de teclat (`Win+X`, `Win+R`, `msinfo32`), panells moderns i clàssics per resoldre tasques. | Utilitza el menú `Win+X` i la cerca del sistema per accedir ràpidament a les eines tècniques. | Accedeix a les eines buscant-les visualment per l'escriptori o menús però sense conèixer dreceres. | Es perd a la interfície o és incapaç de trobar l'Administrador de dispositius o el Tauler de control. |
| **Diagnòstic de controladors (Drivers)** | Interpreta símbols d'avís (!, ↓), localitza codis VEN/DEV i resol problemes de maquinari sense controlador de forma autònoma. | Reconeix triangles d'avís i actualitza o habilita dispositius correctament des de `devmgmt.msc`. | Sap obrir l'Administrador de dispositius però no sap què fer davant d'un triangle groc d'error. | Desconeix què és un controlador o creu que el maquinari funciona sense programari de control. |
| **Seguretat de comptes i barrera UAC** | Gestiona usuaris locals per PowerShell o consola, assigna grups adequats i explica la protecció d'UAC front a malware. | Crea comptes d'usuari estàndard i comprèn per què l'UAC demana contrasenya d'administrador. | Crea usuaris amb suport des de la interfície gràfica però no entén la diferència entre estàndard i admin. | Treballa sempre com a administrador sense contrasenya ignorant els riscos de seguretat. |
| **Estructura de fitxers i rutes de sistema** | Distingeix amb claredat `System32`, `Program Files` i `Users`, activa extensions de fitxer i evita fitxers perillosos. | Reconeix les carpetes principals i les extensions comunes d'executables, documents i imatges. | Identifica la unitat `C:` però té dubtes sobre on s'instal·len les aplicacions de 64 i 32 bits. | Intenta esborrar arxius de `C:\Windows` o confon dreceres d'escriptori amb els fitxers originals. |
| **Cicle de vida d'aplicacions (Instal·lació/Eliminació)** | Executa instal·lacions silencioses (`/S`), distingeix apps portables i realitza desinstal·lacions netes verificant registres. | Instal·la i desinstal·la programari des de *Configuració* de forma correcta i neta. | Desinstal·la aplicacions des de l'assistent bàsic però no comprova si han quedat carpetes residuals. | "Desinstal·la" programes arrossegant la icona a la paperera de reciclatge. |


