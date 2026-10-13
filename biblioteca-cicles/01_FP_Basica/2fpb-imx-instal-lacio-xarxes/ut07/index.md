---
layout: default
title: "UD7: Compartició de Recursos i Serveis Locals — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD7"
next_url: "ut0701.html"
next_label: "7.1 ➡️"
---

# UD7: Compartició de Recursos i Serveis Locals

Compartició de carpetes i fitxers en xarxa Windows, permisos de recurs vs seguretat NTFS, mapejat d'unitats de xarxa, impressores en xarxa local, compartició en entorns Linux amb Samba i pràctica de permisos.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-shr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-map" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-prn" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-smb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">COMPARTICIÓ DE RECURSOS: PERMISOS NTFS/SHARE, MAPEJA D'UNITATS I SAMBA</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Seguretat restrictiva, unitats de xarxa Z:, impressores TCP/IP autònomes i servidors SMB</text>

  <!-- Bloc 1: Permisos Share vs NTFS -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-shr)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📂</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Permisos de Recurs</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Filtre Doble de Seguretat</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Ús Compartit (Xarxa)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Seguretat NTFS (Local)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Regla més restrictiva</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Lectura / Modificació</text>
  </g>

  <!-- Bloc 2: Mapejat d'Unitats -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-map)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">💽</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Mapejat d'Unitats</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Unitats de Disc Z:</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Ruta UNC: \\IP\Recurs</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Assignació de lletra fixa</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Comanda: net use</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Reconnexió a l'inici</text>
  </g>

  <!-- Bloc 3: Impressores de Xarxa -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-prn)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🖨️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Impressores LAN</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Mètodes d'Impressió</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Autònoma TCP/IP fixa</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• No depèn de cap PC</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Compartida USB (amfitrió)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Cua d'impressió compartida</text>
  </g>

  <!-- Bloc 4: Samba i Linux -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-smb)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🐧</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Samba i Linux</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Interoperabilitat SMB</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Protocol SMB/CIFS</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Fitxer /etc/samba/smb.conf</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Connexió des de Windows</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Xarxes mixtes educatives</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **7.1** | **Compartició de carpetes i fitxers: permisos de xarxa vs NTFS** | [**Llegir apartat →**](./ut0701.html) |
| **7.2** | **Mapejat d'unitats de xarxa en Windows** | [**Llegir apartat →**](./ut0702.html) |
| **7.3** | **Instal·lació i compartició d'impressores de xarxa** | [**Llegir apartat →**](./ut0703.html) |
| **7.4** | **Compartició en xarxes heterogènies: Linux i el protocol Samba** | [**Llegir apartat →**](./ut0704.html) |
| **7.5** | **Pràctica: Creació d'un recurs compartit amb permisos diferenciats** | [**Llegir apartat →**](./ut0705.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 7.1 Compartició de carpetes i fitxers: permisos de xarxa vs NTFS

Un dels principals objectius d'instal·lar una xarxa local és permetre que diversos usuaris puguen compartir documents, programes i dades de treball emmagatzemades en un ordinador central o en equips de companys.

### Requisits previs per compartir en Windows
Per poder compartir carpetes en una xarxa local d'oficina o aula:
1. Els ordinadors han d'estar connectats a la mateixa xarxa local i tindre el perfil de xarxa configurat com a **Xarxa privada** (no pública).
2. S'ha d'activar la **Detecció de xarxes** i la **Compartició d'arxius i impressores** al tauler de control de xarxes.
3. Tots els equips haurien de tindre configurat el mateix nom de **Grup de treball** (habitualment `WORKGROUP`).

---

### Els dos nivells de permisos de seguretat

Quan es comparteix una carpeta en un sistema Windows que utilitza el sistema de fitxers **NTFS**, intervenen **dos filtres de permisos diferents**:

#### 1. Permisos d'Ús Compartit (*Share Permissions*)
- S'apliquen només quan un usuari accedeix a la carpeta a través de la xarxa local (per exemple escrivint `\\SERVIDOR\DOCUMENTS`).
- Ofereixen tres nivells bàsics:
  - **Lectura:** Permet veure els fitxers i obrir-los, però no modificar-los ni esborrar-los.
  - **Canvi:** Permet llegir, modificar continguts, crear nous arxius i esborrar-los.
  - **Control total:** Permet fer canvis i a més modificar els permisos d'ús compartit.

#### 2. Permisos de Seguretat NTFS (*NTFS Permissions*)
- S'apliquen sempre, tant si l'usuari accedeix a través de la xarxa com si s'asseu físicament davant de l'ordinador local.
- Són molt més detallats: Lectura, Escriptura, Modificació, Execució, Llistat de continguts i Control total.

> [!IMPORTANT]
> **Regla de la màxima restricció:** Quan un usuari accedeix a través de la xarxa, el sistema operatiu avalua tots dos filtres i **sempre aplica el permís més restrictiu de tots dos**. Per exemple: si en Ús Compartit té *Control total*, però en NTFS només té *Lectura*, l'usuari només podrà llegir els documents i no podrà modificar-los.

---

## 7.2 Mapejat d'unitats de xarxa en Windows

Accedir a una carpeta compartida escrivint cada vegada la ruta UNC completa (com ara `\\192.168.1.100\Dades_Comptabilitat\Factures`) resulta incòmode i poc pràctic per a un usuari d'oficina. La solució professional és **mapejar una unitat de xarxa**.

### Què és una unitat de xarxa connectada?
Consisteix a assignar una **lletra de disc local** buida (com ara la lletra `Z:`, `S:` o `P:`) a una carpeta compartida remota d'un servidor.
D'aquesta manera, l'usuari obre el seu *Explorador de fitxers*, fa clic a *"Aquest equip"* i veu la carpeta compartida com si fóra un disc dur intern més connectat directament al seu ordinador.

---

### Com connectar una unitat de xarxa des de l'entorn gràfic

1. Obre l'**Explorador de fitxers** de Windows.
2. A la barra lateral esquerra, fes clic amb el botó dret sobre **Aquest equip** i selecciona **Connecta una unitat de xarxa...** (o des del menú superior *Xarxa*).
3. Selecciona una lletra d'unitat lliure (per exemple `Z:`).
4. Al camp **Carpeta**, escriu la ruta UNC del recurs compartit:
   ```
   \\NOM_ORDINADOR\Nom_Carpeta_Compartida
   ```
   o bé utilitzant l'adreça IP del servidor:
   ```
   \\192.168.1.50\Public
   ```
5. Marca la casella **Connecta de nou en iniciar la sessió** (perquè es mantinga cada vegada que s'encenga l'equip).
6. Si calen credencials d'un altre usuari, marca *"Connecta amb credencials diferents"*.
7. Fes clic a **Finalitza**.

---

### Mapejat mitjançant comandes en consola (`net use`)
En entorns corporatius és molt comú que els administradors connecten les unitats de xarxa automàticament mitjançant scripts de terminal:
```cmd
net use Z: \\192.168.1.50\Public /persistent:yes
```
- Per desconnectar la unitat de xarxa quan ja no es necessita:
```cmd
net use Z: /delete
```

---

## 7.3 Instal·lació i compartició d'impressores de xarxa

En qualsevol empresa o centre escolar, les impressores són un dels recursos compartits més utilitzats. Hi ha dos mètodes principals per disposar d'una impressora compartida en una xarxa local:

### Mètode 1: Impressora de xarxa autònoma (Connexió directa per Ethernet / Wi-Fi) — Mètode recomanat
- La impressora incorpora la seua pròpia targeta de xarxa amb un port RJ45 o xip Wi-Fi.
- Es connecta directament a un port del switch de la xarxa o a la xarxa Wi-Fi de l'empresa.
- Té la seua pròpia adreça IP estàtica dedicada (per exemple `192.168.1.200`).
- **Avantatges:** Funciona de forma totalment independent. No cal que cap ordinador d'usuari estiga encès perquè la resta de companys puguen imprimir.

### Mètode 2: Impressora USB compartida per un ordinador amfitrió
- La impressora és senzilla i es connecta mitjançant un cable USB a l'ordinador del professor o del secretari.
- L'ordinador amfitrió comparteix la impressora a través del sistema operatiu Windows.
- **Inconvenient greu:** Si l'ordinador que té connectada la impressora s'apaga o es reinicia, cap altre usuari de la xarxa podrà imprimir.

---

### Procediment per afegir una impressora de xarxa en Windows 10/11

1. Obre **Configuració** $\rightarrow$ **Dispositius** $\rightarrow$ **Impressores i escàners**.
2. Fes clic a **Afegeix una impressora o un escàner**.
3. Si el sistema no la troba automàticament de seguida, fes clic a l'enllaç blau *"La impressora que vull no apareix a la llista"*.
4. Selecciona l'opció **Afegeix una impressora mitjançant una adreça TCP/IP o un nom d'amfitrió**.
5. Al tipus de dispositiu, selecciona *Dispositiu TCP/IP* i escriu l'adreça IP de la impressora (per exemple `192.168.1.200`).
6. El sistema detectarà el port i demanarà el controlador (*driver* del fabricant). Selecciona el model adequat.
7. Tria un nom clar (per exemple `Impressora_Color_Aula_FPB`) i imprimeix una **pàgina de prova** per verificar el correcte funcionament.

---

## 7.4 Compartició en xarxes heterogènies: Linux i el protocol Samba

En moltes aules i oficines coexisteixen ordinadors amb el sistema operatiu **Windows** i ordinadors amb distribucions de **Linux** (com ara Ubuntu o LliureX). Per permetre que aquests sistemes diferents es puguen intercanviar fitxers sense conflictes s'utilitza el programari lliure **Samba**.

### Què és Samba?
Samba és una implementació de codi obert del protocol de compartició de fitxers de Microsoft (**SMB/CIFS** - *Server Message Block*).
Permet que un servidor Linux actue exactament com si fóra un servidor de fitxers o un controlador de domini de Windows, fent que els clients de Windows puguen veure i obrir carpetes compartides de Linux amb total transparència.

---

### Configuració bàsica d'una carpeta compartida en Ubuntu/LliureX

1. **Instal·lació del servei Samba:**
```bash
sudo apt update
sudo apt install samba
```

2. **Creació de la carpeta que es vol compartir:**
```bash
sudo mkdir -p /var/compartit
sudo chmod 777 /var/compartit
```

3. **Edició del fitxer principal de configuració `/etc/samba/smb.conf`:**
S'afegeix un bloc al final del document indicant els paràmetres del recurs:
```ini
[Public_FPB]
   comment = Carpeta pública de taller FPB
   path = /var/compartit
   browseable = yes
   read only = no
   guest ok = yes
```

4. **Reinicieu el servei per aplicar els canvis:**
```bash
sudo systemctl restart smbd
```

Ara, des de qualsevol ordinador amb Windows de l'aula, n'hi ha prou d'obrir l'explorador i escriure `\\IP_DEL_LINUX\Public_FPB` per accedir a la carpeta i guardar-hi treballs.

---

## 7.5 Pràctica: Creació d'un recurs compartit amb permisos diferenciats

### Objectiu de la Pràctica
Crear en un equip Windows de taller una estructura de carpetes compartides per a un departament corporatiu amb dos nivells d'accés diferenciats:
1. Una carpeta `Public` on tothom puga llegir i guardar fitxers lliurement.
2. Una carpeta `Direccio` accessible únicament per a usuaris autoritzats amb contrasenya.

---

### Procediment Pas a Pas

#### Pas 1: Creació de comptes d'usuari locals de prova
A l'ordinador que farà de servidor:
1. Obre la consola de gestió d'usuaris executant `lusrmgr.msc` o des de Configuració.
2. Crea dos usuaris nous amb contrasenya:
   - Usuari: `alumne1` (grup *Usuaris*)
   - Usuari: `cap_estudis` (grup *Usuaris*)

#### Pas 2: Creació de l'estructura de carpetes al disc local
1. Al disc `C:`, crea una carpeta mare anomenada `C:\Taller_Xarxa`.
2. Dins d'aquesta carpeta, crea dues subcarpetes:
   - `C:\Taller_Xarxa\Public`
   - `C:\Taller_Xarxa\Direccio`

#### Pas 3: Compartició i assignació de permisos
1. Fes clic amb el botó dret sobre la carpeta `Public` $\rightarrow$ **Propietats** $\rightarrow$ pestanya **Ús compartit** $\rightarrow$ **Ús compartit avançat**.
2. Marca *"Comparteix aquesta carpeta"*. Fes clic a **Permisos**:
   - Assegura't que el grup *Tothom (Everyone)* té marcat el permís de **Canvi** i **Lectura**.
3. Ara fes clic amb el botó dret sobre la carpeta `Direccio`:
   - En *Ús compartit avançat*, elimina el grup *Tothom*.
   - Afegeix únicament l'usuari `cap_estudis` i dóna-li permís de **Control total**.
   - A la pestanya **Seguretat (NTFS)**, assegura't que l'usuari `alumne1` no té cap permís d'accés a aquesta carpeta.

#### Pas 4: Verificació des d'un altre equip client de l'aula
1. Seu a un altre ordinador de la classe i obre l'Explorador d'arxius.
2. Escriu a la barra de direccions la IP de l'equip servidor:
   ```
   \\192.168.1.XX
   ```
3. Intenta entrar a la carpeta `Public`: Comprova que pots accedir-hi, crear-hi un document de text i guardar-lo.
4. Intenta entrar a la carpeta `Direccio`:
   - Comprova com el sistema operatiu demana immediatament un usuari i contrasenya.
   - Si intentes posar les dades de `alumne1`, el sistema denega l'accés.
   - Si introdueixes les dades de `cap_estudis`, la carpeta s'obre correctament.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Matriu de resolució de permisos efectius (Share vs NTFS)
En un servidor de fitxers d'un institut, s'avalua la seguretat de quatre carpetes compartides a través de la xarxa local. Recorda que la regla de seguretat estableix que **sempre s'aplica el permís més restrictiu** entre Ús Compartit (*Share*) i Seguretat *NTFS*, i que un permís explícit de **Denegar (*Deny*)** té prioritat absoluta sobre qualsevol permís de Permetre.

Determina el permís efectiu final per a cadascun dels quatre casos següents:
- **Cas 1:** Usuari `alumne_a`
  - Permís d'Ús Compartit (*Share*): **Canvi** (Lectura + Escriptura).
  - Permís NTFS: **Lectura**.
  - *Permís efectiu resultant:* ¿Pot modificar o esborrar un fitxer?
- **Cas 2:** Usuari `administratiu_b`
  - Permís d'Ús Compartit (*Share*): **Control total**.
  - Permís NTFS: **Modificació** (Lectura + Escriptura + Eliminació).
  - *Permís efectiu resultant:* ¿Pot modificar els permisos de seguretat de la carpeta?
- **Cas 3:** Usuari `convidat_c`
  - Permís d'Ús Compartit (*Share*): **Lectura**.
  - Permís NTFS: **Control total**.
  - *Permís efectiu resultant:* ¿Pot crear una carpeta nova a través de la xarxa?
- **Cas 4:** Usuari `becari_d` (pertany al grup *Treballadors* i al grup *Comptabilitat*)
  - Permís d'Ús Compartit: Grup *Treballadors* té **Canvi**.
  - Permís NTFS: Grup *Treballadors* té **Modificació**, però el grup *Comptabilitat* té marcat explícitament **Denega Escriptura**.
  - *Permís efectiu resultant:* ¿Podrà guardar documents nous a la carpeta?

#### Exercici 2: Càlcul d'espai d'emmagatzematge i gestió de quotes d'usuari
Un servidor d'arxius departamental disposa d'un volum de dades en disc de $V_{\text{total}} = 2\text{ TB}$ ($2048\text{ GB}$).
Per evitar que un sol treballador sature el disc descarregant fitxers multimèdia personals, l'administrador vol configurar quotes de disc NTFS:
- Es creen quotes individuals per a 24 empleats de l'oficina.
- Límit màxim estricte de quota (*Hard Limit*): $40\text{ GB}$ per usuari.
- Nivell d'advertiment al sistema (*Soft Limit* - $80\%$ de la quota):
  $$L_{\text{soft}} = 0{,}80 \cdot 40\text{ GB}$$
- Es reserva un espai comú per a la carpeta de direcció de $300\text{ GB}$.

1. Quin és el valor llindar en gigabytes ($\text{GB}$) en què el sistema operatiu enviarà una alerta d'avís a l'usuari?
2. Calcula la quantitat total màxima d'espai reservat si els 24 empleats arriben al $100\%$ del seu límit assignat.
3. Quant espai lliure restarà disponible al disc de $2\text{ TB}$ per a la resta de serveis i còpies de seguretat després de descomptar les quotes dels 24 usuaris i la carpeta de direcció?

#### Exercici 3: Diagnòstic de rutes UNC i recursos administratius ocults
Analitza les següents rutes de xarxa i respon a les preguntes tècniques:
- Ruta 1: `\\192.168.1.10\Public$`
- Ruta 2: `\\SERVIDOR_AULA\C$\Windows`
- Ruta 3: `//192.168.1.10/Documentos/`

1. Què significa el símbol del dòlar (`$`) al final del nom del recurs a la Ruta 1? Apareixerà aquesta carpeta visible quan un altre equip explore la xarxa amb el navegador d'arxius? Com s'hi pot accedir?
2. La Ruta 2 representa un recurs administratiu per defecte de Windows. Quins usuaris tenen permís exclusiu per accedir a les unitats administratives d'arrel (com `C$`) i quin perill de ciberseguretat representa si no tenen una clau forta?
3. Quin error de sintaxi conté la Ruta 3 en ser introduïda en un equip amb Windows? (Explica la diferència entre barres inclinades `/` i barres invertides `\`).

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Gestió de permisos NTFS per línia d'ordres (`icacls`)
- **Objectiu:** Assignar i auditar permisos de fitxers i carpetes locals utilitzant la potent eina de consola de Windows.
- **Eines:** Consola PowerShell o CMD en mode Administrador.
- **Passos guiats:**
  1. Crea una carpeta de prova al disc `C:`:
     ```cmd
     mkdir C:\Dades_Departament
     ```
  2. Consulta els permisos actuals de la carpeta executant:
     ```cmd
     icacls C:\Dades_Departament
     ```
  3. Deshabilita l'herència de permisos i copia els permisos actuals:
     ```cmd
     icacls C:\Dades_Departament /inheritance:d
     ```
  4. Concedeix permís de lectura i execució al grup *Usuaris* (`(RX)`):
     ```cmd
     icacls C:\Dades_Departament /grant Usuaris:(RX)
     ```
  5. Concedeix permís de modificació únicament a l'usuari local de taller:
     ```cmd
     icacls C:\Dades_Departament /grant alumne1:(M)
     ```
  6. Torna a executar `icacls C:\Dades_Departament` i copia el resultat a la teua memòria de pràctiques.

#### Repte 2: Scripting per a mapejat persistent d'unitats de xarxa (`net use`)
- **Objectiu:** Crear un guió d'ordres per lots (`.bat`) que connecte automàticament les unitats de xarxa de l'aula cada vegada que s'inicia l'equip.
- **Eines:** Bloc de notes o editor de text pla i consola de comandes.
- **Instruccions:**
  1. Obre el Bloc de notes i escriu les següents ordres:
     ```bat
     @echo off
     echo Connectant unitats de xarxa del departament...
     net use Z: /delete /y >nul 2>&1
     net use Z: \\192.168.100.1\Public /persistent:yes
     echo Unitat Z: connectada amb exit!
     pause
     ```
  2. Guarda el fitxer com a `connecta_unitat.bat` a l'escriptori.
  3. Executa el fitxer amb doble clic i comprova a *Aquest equip* com la unitat `Z:` apareix connectada amb la icona de disc de xarxa.
  4. Desconnecta la unitat des del terminal escrivint `net use Z: /delete` i comprova que desapareix.

#### Repte 3: Instal·lació d'una impressora de xarxa virtual per port TCP/IP
- **Objectiu:** Configurar una cua d'impressió TCP/IP apuntant a una adreça IP sense necessitat de disposar de la impressora física encesa.
- **Eines:** Tauler de control de Windows (`control printers`).
- **Procediment de configuració:**
  1. Prem `Windows + R` i escriu `control printers` per obrir la finestra clàssica de dispositius i impressores.
  2. Fes clic a **Afegeix una impressora** $\rightarrow$ *"La impressora que vull no apareix a la llista"*.
  3. Selecciona *"Afegeix una impressora mitjançant una adreça TCP/IP o un nom d'amfitrió"*.
  4. Introdueix l'adreça IP de laboratori: `192.168.100.220` (desmarca la casella *"Consulta la impressora i selecciona automàticament el controlador"*).
  5. Selecciona el fabricant genèric **Generic** i controlador **Generic / Text Only** (o controlador HP LaserJet per defecte de Windows).
  6. Assigna-li el nom: `Impressora_Planta_Baixa`.
  7. Selecciona *"No comparteixis aquesta impressora"* i finalitza l'assistent.
  8. Obre la cua d'impressió i envia una pàgina de prova: comprova com el document queda retingut a la cua esperant la connexió de l'equip.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He aplicat la regla de màxima restricció resolent correctament els permisos efectius de xarxa i NTFS.
- [ ] He calculat l'espai d'emmagatzematge restant i els llindars d'advertiment de les quotes de disc.
- [ ] He après la utilitat dels recursos administratius ocults amb el símbol `$`.
- [ ] He utilitzat la comanda `icacls` per auditar i modificar llistes de control d'accés (ACL).
- [ ] He creat un fitxer script per lots `.bat` per mapejar unitats amb la comanda `net use`.
- [ ] He instal·lat una impressora de xarxa autònoma assignant un port TCP/IP estàndard.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Avaluació de permisos (Share vs NTFS)** | Resol la matriu de permisos efectius sense errors, justificant la prioritat de Denegar i la màxima restricció. | Avalua la diferència entre permís de xarxa i NTFS amb xicotets dubtes en herència. | Reconeix la diferència entre lectura i control total però dubta en permisos combinats. | No comprèn la interacció entre els permisos d'ús compartit i els permisos NTFS. |
| **Dimensionament d'emmagatzematge i quotes** | Calcula quotes, llindars d'alerta i espai romanent amb precisió matemàtica i criteri de gestió. | Calcula l'espai ocupat i lliure aplicant les quotes de forma correcta. | Calcula quotes bàsiques amb dificultats per aplicar el percentatge del 80%. | No sap calcular l'espai d'emmagatzematge necessari ni interpretar quotes de disc. |
| **Mapejat d'unitats de xarxa (`net use`)** | Crea scripts per lots automàtics per connectar i desconnectar unitats amb paràmetres de persistència. | Mapeja unitats correctament tant des de l'entorn gràfic com per consola de comandes. | Mapeja unitats des de l'entorn gràfic però no sap utilitzar la comanda `net use`. | Incapaç de connectar una unitat de xarxa o comprendre el concepte de ruta UNC. |
| **Gestió de seguretat CLI (`icacls`)** | Utilitza la comanda `icacls` per trencar herència i atorgar permisos granulars (RX, M, F) amb solvència. | Consulta i modifica permisos bàsics per consola seguint les instruccions. | Reconeix la comanda per consultar permisos però té dificultats per modificar-los. | No sap obrir la consola amb permisos d'administrador ni utilitzar comandes de gestió de fitxers. |
| **Configuració d'impressores de xarxa** | Configura impressores autònomes per port TCP/IP estàndard, gestiona cues i resol bloquejos. | Instal·la la impressora per adreça IP i envia treballs a la cua de prova. | Instal·la impressores si el sistema les detecta automàticament sense configurar la IP a mà. | No sap instal·lar impressores de xarxa ni distingir entre connexió USB i TCP/IP. |

