---
layout: default
title: "UD6: Còpies de Seguretat, Imatges de Disc i Clonat — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD6"
next_url: "ut0601.html"
next_label: "6.1 ➡️"
---

# UD6: Còpies de Seguretat, Imatges de Disc i Clonat

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

