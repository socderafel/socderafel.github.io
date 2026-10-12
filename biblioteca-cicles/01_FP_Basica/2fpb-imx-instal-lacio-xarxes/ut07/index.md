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

