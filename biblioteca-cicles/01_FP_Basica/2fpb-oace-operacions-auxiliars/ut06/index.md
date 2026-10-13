---
layout: default
title: "UD6: Còpies de Seguretat, Imatges de Disc i Clonat — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD6"
next_url: "ut0601.html"
next_label: "6.1 ➡️"
---

# UD6: Còpies de Seguretat, Imatges de Disc i Clonat

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-o6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-321" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-typ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-rst" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-clz" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-o6)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">CÒPIES DE SEGURETAT, IMATGES DE DISC I CLONAT PROFESSIONAL</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Estratègia 3-2-1, còpies completes vs incrementals, punts de restauració i desplegament massiu amb Clonezilla</text>

  <!-- Bloc 1: Regla 3-2-1 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-321)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Regla 3-2-1</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Estàndard Seguretat</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 3 Còpies de les dades</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2 Suports físics distints</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 1 Còpia fora de seu / Cloud</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Protecció contra ransomware</text>
  </g>

  <!-- Bloc 2: Tipus de Backup -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-typ)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">💾</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tipus de Backup</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Completa, Incr, Dif</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Completa: Tot el volum</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Incremental: Canvis d'ahir</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Diferencial: Respecte última C</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Balanç temps vs espai disc</text>
  </g>

  <!-- Bloc 3: Punts Restauració -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-rst)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⏱️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Restauració SO</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">sysdm.cpl</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Instantània de registre</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Reversió davant mal driver</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• NO toca arxius personals</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Assignació d'espai màx (5%)</text>
  </g>

  <!-- Bloc 4: Clonat & Clonezilla -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-clz)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🐑</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Clonezilla Live</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Imatges & Desplegament</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Equip mestre Golden Master</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• savedisk: Clona disc a fitxer</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• restoredisk: Volcat massiu</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Replicació exacta d'aules</text>
  </g>
</svg>
</div>

La regla 3-2-1 de seguretat de dades, tipus de còpies (completa, incremental, diferencial), punts de restauració de sistema en Windows, concepte de clonat de disc i pràctica de clonat amb Clonezilla.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **6.1** | **La importància del backup: la regla 3-2-1 de seguretat** | [**Llegir apartat →**](./ut0601.html) |
| **6.2** | **Tipus de còpies de seguretat: completa, incremental i diferencial** | [**Llegir apartat →**](./ut0602.html) |
| **6.3** | **Punts de restauració del sistema en Windows** | [**Llegir apartat →**](./ut0603.html) |
| **6.4** | **Concepte de clonat de disc i imatges de sistema** | [**Llegir apartat →**](./ut0604.html) |
| **6.5** | **Pràctica de taller: Creació i restauració d'imatge amb Clonezilla** | [**Llegir apartat →**](./ut0605.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 6.1 La importància del backup: la regla 3-2-1 de seguretat

Els discs durs i unitats SSD no són eterns: tard o d'hora acaben fallant, poden sofrir una pujada de tensió elèctrica, ser robats o ser xifrats per un atac de programari maliciós (ransomware). Si una empresa o un particular no disposa de còpies de seguretat actualitzades, pot perdre documents crítics de mesos o anys de feina de forma irrecuperable.

### Què és una còpia de seguretat (*Backup*)?
És el procés de duplicar les dades originals en un suport d'emmagatzematge independent i segur perquè puguen ser restaurades en cas de pèrdua, avaria física o esborrat accidental.

---

### La Regla d'Or 3-2-1 del Backup Professional

És l'estàndard internacional recomanat per experts en seguretat informàtica arreu del món:

```
[ 3 Còpies de les dades ]
       |
       +--> [ 2 Suports físics diferents ] (ex: Disc intern + Disc dur extern USB)
       |
       +--> [ 1 Còpia fora de la seu / Al núvol ] (ex: Magatzem remot o Cloud)
```

1. **Tindre un mínim de 3 còpies de les teues dades importants:** L'arxiu original de treball més dues còpies de seguretat redundants.
2. **Utilitzar 2 suports o tecnologies físiques diferents:** No guardes la còpia al mateix disc dur on està l'original! Guarda-la en un disc dur extern USB, una unitat NAS de xarxa o cintes magnètiques.
3. **Mantingues 1 còpia fora de la seu física (*Offsite*):** Guarda una de les còpies en una altra ubicació geogràfica o al núvol (OneDrive, Google Drive, AWS). D'aquesta manera, si hi ha un incendi, una inundació o un robatori a l'oficina, les dades continuen estant completament protegides.

---

## 6.2 Tipus de còpies de seguretat: completa, incremental i diferencial

En empreses amb terabytes d'informació, fer una còpia de tots els discs de cap a peus cada hora seria massa lent i ocuparia un espai gegantí. Per això, les estratègies de còpia combinen tres modalitats:

### 1. Còpia de Seguretat Completa (*Full Backup*)
- Copia absolutament **tots els fitxers i carpetes seleccionats**, independentment de si s'han modificat o no des de l'última vegada.
- **Avantatges:** La restauració és immediata i senzilla (tot està en un únic lloc).
- **Inconvenients:** És la més lenta de realitzar i la que més espai de disc consumeix. Sol programar-se un cop per setmana (per exemple els diumenges a la nit).

### 2. Còpia de Seguretat Incremental (*Incremental Backup*)
- Copia **únicament els fitxers que s'han creat o modificat des de l'última còpia realitzada** (ja siga aquesta completa o una altra incremental prèvia).
- **Avantatges:** És la més ràpida de totes i ocupa molt poc espai. Es pot programar cada nit o cada poques hores.
- **Inconvenients:** Si cal restaurar les dades després d'un desastre, cal restaurar primer l'última còpia completa i després **totes i cadascuna de les còpies incrementals en ordre cronològic**. Si una de les còpies intermèdies es fa malbé, no es pot completar la cadena.

### 3. Còpia de Seguretat Diferencial (*Differential Backup*)
- Copia **tots els fitxers que han canviat des de l'última còpia completa**.
- **Avantatges:** Per restaurar només es necessiten dues peces: l'última còpia completa més l'última còpia diferencial.
- **Inconvenients:** Ocupa més espai que la incremental a mesura que avança la setmana.

---

## 6.3 Punts de restauració del sistema en Windows

Abans d'instal·lar un controlador de dispositiu no certificat, una actualització complexa o fer canvis profunds al registre de Windows, és una mesura elemental de prudència crear un **Punt de restauració del sistema**.

### Què és un Punt de restauració?
És una "instantània" que fa Windows dels fitxers crítics del sistema operatiu, els controladors instal·lats i la configuració del registre en un moment temporal determinat.
- **Què restaura:** El programari, els controladors i l'estat del sistema.
- **Què NO toca:** **No afecta els documents personals de l'usuari** (les fotos, treballs de Word o descàrregues que s'hagen creat posteriorment no s'esborraran).

---

### Com activar i crear un punt de restauració manual

1. Prem les tecles `Windows + R`, escriu `sysdm.cpl` i prem *Intro* per obrir les *Propietats del sistema*.
2. Ves a la pestanya **Protecció del sistema**.
3. Selecciona la unitat `C: (Sistema)` i comprova que la protecció està en estat *Activada*. (Si no, fes clic a *Configura* $\rightarrow$ *Activa la protecció del sistema* i assigna un 5% d'espai de disc).
4. Fes clic al botó inferior **Crea... (*Create*)**.
5. Escriu una descripció clara del moment (per exemple: `Abans d'instal·lar driver de gràfica`).
6. Fes clic a *Crea*. En menys de 30 segons el punt estarà registrat.

---

### Com restaurar l'equip si el sistema comença a fallar
1. Obre la mateixa pestanya de *Protecció del sistema* i fes clic al botó **Restaura el sistema (*System Restore*)**.
2. Fes clic a *Següent* i tria a la llista el punt de restauració anterior al problema.
3. Fes clic a *Finalitza*: l'equip es reiniciarà i restablirà els fitxers de sistema tal com estaven en eixe instant exacte.

---

## 6.4 Concepte de clonat de disc i imatges de sistema

En un centre educatiu amb 10 aules d'informàtica (més de 200 ordinadors) o en una empresa amb 50 llocs de treball idèntics, instal·lar el sistema operatiu, els controladors, els programes ofimàtics, l'antivirus i les utilitats ordinador per ordinador de forma manual costaria setmanes senceres de feina repetitiva. La solució professional universal és el **clonat de disc**.

### Què és el clonat de disc?
El **clonat** consisteix a fer una **còpia exacta bit a bit (clon)** de tota l'estructura d'un disc dur o SSD (taula de particions MBR/GPT, sector d'arrencada, sistema operatiu, programes instal·lats, configuracions i fitxers) i bolcar-la en una imatge de sistema o directament sobre un altre disc.

### Format d'Imatge de disc (*Disk Image*)
- Una **imatge de sistema** és un únic fitxer gegant comprimit (o conjunt de fitxers) que conté la rèplica sencera del disc dur clonat.
- Aquest fitxer d'imatge es pot guardar en un disc dur extern USB o en un servidor de xarxa compartit de l'institut.

---

### El cicle de treball amb equip patró (*Golden Master*)

1. **Configuració de l'equip mestre (*Master*):** Es munta un sol ordinador amb molta cura: s'instal·la Windows o Ubuntu, tots els controladors, les actualitzacions, el programari educatiu i les opcions de seguretat.
2. **Creació de la imatge patró:** S'arrenca aquest ordinador des d'un USB amb una eina de clonat (com **Clonezilla**) i es guarda la seua imatge en un disc extern.
3. **Desplegament massiu:** S'arrenca cadascun dels altres 20 ordinadors de l'aula amb el mateix USB i es restaura la imatge sobre els seus discs. En menys de 10 minuts per equip, tota l'aula queda exactament idèntica i llesta per fer classe!

---

## 6.5 Pràctica de taller: Creació i restauració d'imatge amb Clonezilla

### Objectiu de la Pràctica
Utilitzar la distribució lliure de clonat **Clonezilla Live** per crear una imatge de seguretat completa del disc d'una màquina de taller i practicar la seua posterior restauració.

---

### Procediment Pas a Pas

#### Pas 1: Preparació de l'entorn
1. Descarrega la ISO oficial de **Clonezilla Live** (`clonezilla-live-amd64.iso`).
2. A la màquina virtual de VirtualBox que té el sistema instal·lat, afegeix un segon disc dur virtual secundari buit (de 30 GB) que farà de "disc de suport extern" on guardarem la imatge.
3. Carrega la ISO de Clonezilla a la unitat òptica virtual i engega la màquina.

#### Pas 2: Arrencada de Clonezilla
1. Al menú inicial de Clonezilla, prem *Intro* a la primera opció: `Clonezilla live (Default settings)`.
2. Tria l'idioma: `es_ES Spanish | Castellano` (o anglès).
3. Selecciona la distribució de teclat: *No tocar el mapa de tecles*.
4. Tria l'opció: **Start_Clonezilla (Iniciar Clonezilla)**.

#### Pas 3: Selecció del mode de clonat
1. Selecciona: **device-image (disc/partició cap a/des d'imatge)**.
2. Com a dipòsit de la imatge (*Image repository*), tria: **local_dev (Usar dispositiu local com a disc dur USB)**.
3. Clonezilla detectarà els discs connectats (`sda` és el disc del sistema i `sdb` és el disc buit secundari). Selecciona `sdb1` com a lloc on guardar la imatge.

#### Pas 4: Creació de la imatge de disc (*savedisk*)
1. Selecciona el mode d'assistent: **Beginner (Mode Principiant)**.
2. Tria l'acció: **savedisk (Guardar disc local com a imatge)**.
3. Assigna un nom a la imatge: `Imatge_FPB_Ubuntu_2026`.
4. Selecciona el disc d'origen que vols clonar: `sda`.
5. Accepta la comprovació i confirma l'inici escrivint `y` (*yes*) i prement *Intro*.
6. Apareixerà una pantalla gràfica amb barres blaves d'avançament (*Partclone*) copiant cada partició.
7. En acabar, apaga la màquina. Ja tens la còpia perfecta de tot el sistema guardada!

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul d'espai d'emmagatzematge en polítiques de còpia de seguretat
En un departament administratiu d'un centre educatiu es gestiona un servidor d'arxius amb una carpeta corporativa que ocupa inicialment $120\text{ GB}$. Al llarg de la setmana laboral (de dilluns a divendres), es generen de mitjana $8\text{ GB}$ de dades noves o modificades cada dia:
1. **Estratègia A (Còpia Completa + Còpies Incrementals):**
   - Diumenge nit: Còpia completa de $120\text{ GB}$.
   - De dilluns a divendres: Es realitza una còpia incremental diària dels fitxers canviats eixe dia ($8\text{ GB/dia}$).
   - Calcula l'espai total de disc ocupat per totes les còpies al tancament del divendres:
     $$\text{Espai Total A} = 120 + (5 \times 8) = \dots \text{ GB}$$
   - Si el disc del servidor falla dissabte al matí, quants fitxers de còpia cal restaurar i en quin ordre exacte per recuperar el 100% de la informació?
2. **Estratègia B (Còpia Completa + Còpies Diferencials):**
   - Diumenge nit: Còpia completa de $120\text{ GB}$.
   - Dilluns: Còpia diferencial respecte al diumenge ($8\text{ GB}$).
   - Dimarts: Còpia diferencial respecte al diumenge ($16\text{ GB}$).
   - Dimecres: Còpia diferencial ($24\text{ GB}$), Dijous ($32\text{ GB}$) i Divendres ($40\text{ GB}$).
   - Calcula l'espai total de disc ocupat per l'estratègia B al tancament del divendres:
     $$\text{Espai Total B} = 120 + 8 + 16 + 24 + 32 + 40 = \dots \text{ GB}$$
   - Si el disc falla dissabte, quants fitxers de còpia cal restaurar en l'estratègia diferencial? Quina estratègia és més ràpida de restaurar en cas de desastre?

#### Exercici 2: Taxa de transferència i temps de desplegament d'imatges d'aula
En el taller informàtic es prepara una imatge de sistema comprimida amb Clonezilla d'una instal·lació patró d'Ubuntu Desktop amb LibreOffice i eines educatives que ocupa una mida final de $36\text{ GB}$ ($36.864\text{ MB}$):
1. **Desplegament via memòria USB 3.0:**
   Un pendrive USB 3.0 ofereix una taxa sostinguda de lectura de $120\text{ MB/s}$. Calcula el temps necessari en segons i minuts per abocar la imatge sobre un equip:
   $$t_{\text{USB}} = \frac{36.864\text{ MB}}{120\text{ MB/s}} = \dots \text{ segons}$$
2. **Desplegament per xarxa local Gigabit Ethernet ($1\text{ Gbps}$):**
   La xarxa del centre assoleix una velocitat real sostinguda de $85\text{ MB/s}$ a través del commutador de l'aula:
   - Quant tardarà a bolcar-se la imatge en un ordinador connectat per cable de xarxa?
3. Si s'utilitza la tecnologia de clonat **Multicast** de Clonezilla Server (enviament simultani del mateix paquet de dades a 20 ordinadors de l'aula alhora a través del cable de xarxa sense reduir la velocitat):
   - Quant de temps total costarà clonar tota l'aula sencera de 20 equips alhora per xarxa multicast enfront de fer-ho un per un manualment amb el llapis USB?

#### Exercici 3: Diagnòstic de punts de restauració del sistema mitjançant PowerShell
1. Obre PowerShell com a administrador i executa les següents ordres per comprovar l'estat de la protecció del sistema a Windows:
   ```powershell
   Get-ComputerRestorePoint | Select-Object SequenceNumber, Description, RestorePointType, CreationTime
   vssadmin list shadowstorage
   ```
2. Analitza la informació obtinguda:
   - Quants punts de restauració hi ha registrats actualment a la màquina?
   - Quina mida d'espai d'emmagatzematge de còpia instantània de volum (*Shadow Storage*) està reservada com a màxim al disc?
3. Escriu la comanda de PowerShell per forçar la creació immediata d'un nou punt de restauració de sistema anomenat `"Punt_Previ_Actualitzacio_FPB"`:
   ```powershell
   Checkpoint-Computer -Description "Punt_Previ_Actualitzacio_FPB" -RestorePointType "MODIFY_SETTINGS"
   ```

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'un punt de restauració i verificació de reversió
- **Objectiu:** Posar a prova la capacitat de reversió de l'eina integrada de protecció del sistema de Windows.
- **Procediment de taller:**
  1. Obre les propietats del sistema (`sysdm.cpl`), ves a la pestanya *Protecció del sistema* i crea un punt de restauració anomenat `Estat_Previ_Laboratori`.
  2. Executa un canvi de configuració o instal·la un controlador/programa auxiliar (per exemple, canvia el nom de l'equip o instal·la una utilitat de prova).
  3. Comprova que el programa s'ha instal·lat i que el registre ha canviat.
  4. Executa *Restaura el sistema*, tria el punt creat `Estat_Previ_Laboratori` i confirma el reinici de l'equip.
  5. Un cop reiniciat Windows, verifica que l'aplicació instal·lada ha desaparegut i que el sistema operatiu ha tornat exactament a l'estat previ sense perdre cap fitxer de text ni document de l'usuari.

#### Repte 2: Creació d'una imatge de disc amb Clonezilla Live (*savedisk*)
- **Objectiu:** Crear una imatge de seguretat completa de la unitat d'arrencada d'un equip en un suport secundari.
- **Situació pràctica:**
  1. Afegeix un disc virtual secundari buit de $30\text{ GB}$ a la màquina de proves.
  2. Arrenca des de la ISO de Clonezilla Live i selecciona les opcions:
     - Idioma: Espanyol.
     - Mode: `device-image`.
     - Directori de la imatge: `local_dev` (tria la partició del segon disc `sdb1`).
     - Mode: `Beginner`.
     - Acció: `savedisk`.
  3. Anomena la imatge `Imatge_Mestre_Ubuntu_FPB`.
  4. Tria com a disc d'origen `sda` (el disc del sistema operatiu).
  5. Confirma l'execució i observa com Clonezilla analitza el sistema de fitxers ext4 amb Partclone copiant únicament els blocs ocupats per accelerar el procés.
  6. Comprova que la imatge s'ha guardat al repositori com una carpeta amb fitxers comprimits dividits.

#### Repte 3: Restauració de desastre amb Clonezilla (*restoredisk*)
- **Objectiu:** Recuperar un equip completament inoperatiu a partir de la imatge de seguretat guardada.
- **Procediment tècnic:**
  1. Amb la màquina apagada, simula una avaria catastròfica de programari: arrenca amb un USB de rescat i esborra la taula de particions del disc `sda` (per exemple amb `dd if=/dev/zero of=/dev/sda bs=1M count=10`).
  2. Comprova que en intentar engegar normalment l'equip mostra l'error de pantalla negra *"No bootable device found"* o *"Operating system not found"*.
  3. Arrenca de nou amb Clonezilla Live:
     - Selecciona `device-image` $\rightarrow$ `local_dev` (munta el disc `sdb1` on tenim guardada la imatge).
     - Tria l'acció: **`restoredisk` (Restaurar imatge a disc local)**.
     - Selecciona la imatge `Imatge_Mestre_Ubuntu_FPB` i com a disc de destinació `sda`.
  4. Confirma ambdues advertències de seguretat escrivint `y`.
  5. Un cop completada la restauració de sectors i de l'arrencador GRUB, retira la ISO de Clonezilla i reinicia l'ordinador.
  6. Comprova que el sistema operatiu arrenca de nou a la perfecció amb tots els comptes d'usuari i configuracions intactes!

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He explicat la regla d'or 3-2-1 del backup (3 còpies, 2 suports físics diferents, 1 fora de la seu).
- [ ] He diferenciat una còpia completa, una còpia incremental (canvis diaris) i una diferencial (canvis respecte a l'última completa).
- [ ] He calculat l'espai i volum de disc requerit per a diferents polítiques setmanals de còpia de seguretat.
- [ ] He creat i restaurat un punt de restauració del sistema en Windows mitjançant `sysdm.cpl` o PowerShell.
- [ ] He explicat el concepte d'equip patró (*Golden Master*) i el clonat massiu per imatges de disc en aules informàtiques.
- [ ] He creat una imatge de disc amb Clonezilla Live utilitzant l'ordre `savedisk` cap a un repositori local.
- [ ] He restaurat un sistema inoperatiu a partir d'una imatge de Clonezilla utilitzant l'ordre `restoredisk`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Estratègia 3-2-1 i protecció de dades** | Justifica la redundància en diferents suports i còpia offsite/cloud per protegir dades contra ransomware i desastres físics. | Comprèn els 3 principis de la regla 3-2-1 i la necessitat de còpies externes. | Recorda que cal fer còpies de seguretat però les guarda al mateix disc intern de l'equip. | Creu que tindre dos fitxers a la mateixa carpeta del disc dur ja és una còpia de seguretat. |
| **Polítiques de backup (Completa/Incr/Dif)** | Calcula amb precisió l'espai consumit per cada modalitat i dissenya plans de restauració òptims en temps i emmagatzematge. | Distingeix correctament la còpia incremental de la diferencial i sap quines peces calen per restaurar. | Reconeix la còpia completa però confon com s'encadenen les incrementals i diferencials. | Incapaç d'explicar la diferència entre una còpia completa i una incremental. |
| **Punts de restauració de Windows** | Configura espai màxim de Shadow Storage, crea punts per PowerShell o GUI i reverteix fallades de controladors. | Crea punts de restauració manuals abans de tocar el sistema i reverteix l'equip amb èxit. | Sap que existeixen els punts de restauració però té dubtes sobre si esborren fotos o documents d'usuari. | Desconeix la utilitat dels punts de restauració o no sap on localitzar-los a Windows. |
| **Tecnologia de clonat (Equip Mestre)** | Explica el concepte de Golden Master, calcula taxes de transferència per xarxa/USB i raona el clonat multicast. | Comprèn com el clonat permet desplegar aules senceres en minuts a partir d'una imatge de sistema. | Entén que el clonat copia tot el disc però no sap com s'aplica en el manteniment massiu d'aules. | Confon fer una còpia d'un document amb clonar un disc dur complet amb el seu sistema operatiu. |
| **Pràctica amb Clonezilla (Savedisk / Restoredisk)** | Executa de forma autònoma `savedisk` i `restoredisk` identificant discs font/destí (`sda`, `sdb`) sense perill de pèrdua de dades. | Crea i restaura imatges amb Clonezilla seguint el protocol i verificant que l'equip arrenca. | Completa la pràctica amb ajut per triar el disc de dipòsit correcte a Clonezilla. | Selecciona el disc d'origen i de destinació a l'inrevés esborrant les dades de l'equip de taller. |


