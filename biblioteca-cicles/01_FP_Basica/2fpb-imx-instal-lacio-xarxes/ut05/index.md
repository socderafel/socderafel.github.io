---
layout: default
title: "UD5: Cablejat Estructurat i Infraestructura Física — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD5"
next_url: "ut0501.html"
next_label: "5.1 ➡️"
---

# UD5: Cablejat Estructurat i Infraestructura Física

Concepte de cablejat estructurat i subsistemes, l'armari de telecomunicacions (Rack de 19"), panells de pegat (patch panels), canalitzacions, rosetes RJ45 keystone, prevenció de riscos laborals (PRL) i pràctica de muntatge.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **5.1** | **Concepte i subsistemes de cablejat estructurat** | [**Llegir apartat →**](./ut0501.html) |
| **5.2** | **L'armari de telecomunicacions (Rack de 19 polzades)** | [**Llegir apartat →**](./ut0502.html) |
| **5.3** | **Canalitzacions, canaletes, caixes i rosetes de paret** | [**Llegir apartat →**](./ut0503.html) |
| **5.4** | **Prevenció de Riscos Laborals (PRL) en instal·lacions** | [**Llegir apartat →**](./ut0504.html) |
| **5.5** | **Pràctica de taller: Muntatge de canaleta, roseta i patch panel** | [**Llegir apartat →**](./ut0505.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 5.1 Concepte i subsistemes de cablejat estructurat

El **cablejat estructurat** és el conjunt de cables, connectors, canalitzacions i dispositius que formen la infraestructura física de telecomunicacions d'un edifici, dissenyat segons normes tècniques internacionals (com ara **ANSI/TIA/EIA-568** i **ISO/IEC 11801**) de manera estandarditzada, modular i independent dels serveis que s'hi transmeten (veu, dades, vídeo o control).

### Avantatges d'un sistema estructurat
- **Modularitat i flexibilitat:** Qualsevol presa RJ45 de qualsevol despatx es pot utilitzar indistintament per connectar un ordinador, una impressora, un telèfon IP o una càmera de seguretat canviant simplement un cable curt al rack.
- **Vida útil prolongada:** Una instal·lació ben projectada té una vida útil superior als 10 o 15 anys, suportant noves generacions d'equips sense haver de canviar els cables de les parets.
- **Facilitat de manteniment:** L'etiquetatge unificat permet localitzar qualsevol presa o tall en pocs segons.

---

### Subsistemes del cablejat estructurat

En un edifici gran o campus educatiu, el sistema es divideix en sis subsistemes jeràrquics:

1. **Repartidor de Campus (CD - *Campus Distributor*):** Punt central que interconnecta els diferents edificis d'un recinte mitjançant anells de fibra òptica exterior.
2. **Repartidor d'Edifici (BD - *Building Distributor*):** Armari principal que centralitza les telecomunicacions d'un edifici complet.
3. **Repartidor de Planta (FD - *Floor Distributor* / Armari Rack d'ala):** Armari de telecomunicacions ubicat a cada pis que dóna servei a les aules o despatxos d'eixa planta.
4. **Cablejat Vertical o Tronc (*Backbone*):** Cables de fibra òptica o coure d'alta capacitat que uneixen els armaris de les diferents plantes entre si.
5. **Cablejat Horitzontal:** Conjunt de cables que s'estenen des del repartidor de planta (rack) fins a cadascuna de les preses d'usuari a les parets (rosetes). És el més abundant i utilitza cable UTP Cat 6 (màxim 90 metres de canalització fixa permanent).
6. **Àrea de treball (*Work Area*):** L'espai físic on treballa l'usuari; comprèn la roseta de paret, el cable de connexió flexible (*latiguillo* de fins a 5 metres) i l'equip informàtic.

---

## 5.2 L'armari de telecomunicacions (Rack de 19 polzades)

L'**armari de comunicacions** o **Rack** és una estructura metàl·lica estandarditzada dissenyada per allotjar, protegir i organitzar de forma segura els equips electrònics de xarxa i els elements de connexió.

### L'estàndard de 19 polzades i la unitat d'alçada "U"
- **Amplada normalitzada:** L'amplada entre els perfils metàl·lics de fixació frontal és exactament de **19 polzades** (48,26 cm). Qualsevol equip fabricat per a rack (switches, servidors, panells) encaixa perfectament en aquests perfils mitjançant caragols M6 i rosques gàbia (*cage nuts*).
- **Unitat d'alçada (U):** L'alçada útil dels equips es mesura en unitats **U** (on **$1U = 1,75$ polzades $\\approx 4,445$ cm**).
  - Un panell de pegat o un switch típic ocupen habitualment **1U**.
  - Un servidor potent pot ocupar **2U** o **4U**.
  - Els armaris de paret d'aula solen ser de **6U**, **9U** o **12U**. Els armaris grans de peu de sala de servidors solen ser de **42U**.

---

### Components interiors de l'armari Rack

1. **Panell de pegat (*Patch Panel*):**
   - Bastidor metàl·lic de 1U amb 24 o 48 ports RJ45 frontals.
   - Per la part posterior es connecten de forma fixa i definitiva els cables rígids que arriben de les canaletes dels despatxos mitjançant inserció per desplaçament d'aïllant (IDC).
   - Per la part frontal es connecten cables de pegat flexibles (*patch cords*) cap als ports del switch.

2. **Passacables o guies horitzontals:**
   - Elements buits amb ranures i tapa que s'instal·len entre els panells i els switches per canalitzar i ocultar els cables sobrants de forma ordenada i neta.

3. **Safates metàl·liques:**
   - Suports per col·locar equips que no són d'origen enracables (com ara el router de fibra de la companyia telefònica).

4. **Regleta d'alimentació elèctrica (PDU - *Power Distribution Unit*):**
   - Regleta amb múltiples preses de corrent Schuko o C13 amb interruptor de protecció magnetotèrmica.

5. **Termòstat i ventiladors:**
   - Sistema d'extracció d'aire forçat situat al sostre del rack per expulsar la calor generada pels equips electrònics continus.

---

## 5.3 Canalitzacions, canaletes, caixes i rosetes de paret

Les **canalitzacions** són les vies i conductes protectors a través dels quals s'introdueixen i guien els cables de xarxa des de l'armari rack fins a cadascuna de les estacions de treball.

### Tipus de canalitzacions

1. **Canaletes de superfície de plàstic (PVC):**
   - Són les més habituals en aules d'informàtica i reformes d'oficina.
   - Es fixen a la paret mitjançant tacs i caragols. Disposen d'una base amb divisions interiors (envans separadors) i una tapa extraïble a pressió.
   - **Regla clau:** Els cables de dades de xarxa i els cables elèctrics de 230V han d'anar obligatòriament en compartiments separats per evitar interferències elèctriques.

2. **Tubs corrugats encastats:**
   - Tubs plàstics flexibles que van per l'interior de les parets de rajola o sota el paviment. Per passar el cable s'utilitza una guia passamurs de niló o acer.

3. **Safates de reixeta metàl·lica de sostre (*Charofil*):**
   - S'utilitzen en grans instal·lacions sobre el fals sostre desmuntable o sota el terra tècnic.

---

### La roseta de paret i el mòdul Keystone RJ45
La **roseta d'usuari** és el punt terminal de la canalització fixa on l'usuari endolla el seu equip:
- Consta d'una **caixa de superfície**, un **marc embellidor frontal** amb finestra per a etiqueta d'identificació i un o dos connectors **keystone**.
- **Connector Keystone:** És un bloc modular de plàstic amb un port RJ45 femella al davant i 8 contactes IDC de color al darrere. Permet conectoritzar el cable rígid utilitzant l'eina d'impacte Krone o sistemes *toolless* (sense eines) de tancament per pressió mecànica.

```
[ Cable rígid UTP ] ===> [ Roseta Keystone ] ===> [ Cable flexible ] ===> [ Ordinador ]
```

---

## 5.4 Prevenció de Riscos Laborals (PRL) en instal·lacions

La instal·lació física de canalitzacions i cablejat de xarxes requereix treballs manuals amb eines elèctriques, treballs en alçada i contacte amb instal·lacions elèctriques. Per tant, és obligatori conèixer i aplicar les normes de Prevenció de Riscos Laborals (**PRL**).

### Riscos més freqüents en el muntatge de xarxes

#### 1. Caigudes a distint nivell (treballs en alçada)
- Moltes canalitzacions van altes prop del sostre i els armaris rack es pengen a la paret.
- **Normes d'ús d'escales de mà:**
  - L'escala ha d'estar en perfecte estat i disposar de tacs de goma antilliscants a les potes.
  - S'ha d'obrir completament el tirant de seguretat abans de pujar.
  - Mai pugis als dos últims graons d'una escala de tisora.
  - Treballa sempre mirant cap a l'escala, sense inclinar el cos fora dels muntants laterals.

#### 2. Risc elèctric
- En instal·lar canaletes o passar cables prop d'endolls elèctrics o quadres de distribució:
  - Assegura't de tallar la tensió en el quadre elèctric abans de manipular caixes de mecanismes compartides.
  - Utilitza detectors de metalls i cables actius abans de foradar parets per no perforar canonades d'aigua o cables amb corrent.
  - Totes les carcasses metàl·liques dels armaris rack han d'estar connectades obligatòriament a la **xarxa de terra general de l'edifici** mitjançant un cable groc-verd.

#### 3. Talls i projeccions de partícules
- En foradar amb el trepant o serrar canaletes de plàstic:
  - Utilitza **ulleres de protecció** homologades per evitar que encenalls o pols entren als ulls.
  - Utilitza **guants de protecció mecànica** per manipular eines de tall.
  - Utilitza **mascareta antipols** en foradar parets de guix o formigó.

### Equips de Protecció Individual (EPI) obligatoris
- Calçat de seguretat amb sola antilliscant i puntera reforçada.
- Ulleres de seguretat contra impactes.
- Guants de treball amb bon tacte per a treballs manuals.
- Protectors auditius quan s'utilitzen trepants percutors en espais tancats.

---

## 5.5 Pràctica de taller: Muntatge de canaleta, roseta i patch panel

### Objectiu de la Pràctica
Realitzar el muntatge complet d'un tram real de cablejat horitzontal permanent de taller: fixar un tram de canaleta de superfície, conectoritzar una presa keystone femella en una roseta de paret i conectoritzar l'altre extrem del cable rígid en un panell de pegat (patch panel), verificant el circuit amb el tester.

### Materials i Eines
- 1 tram de canaleta de PVC de 1 metre amb tapa.
- 1 caixa de superfície de roseta amb mòdul keystone RJ45 Cat 6.
- 1 segment de 2 metres de cable UTP rígid per a instal·lació fixa.
- 1 panell de pegat (Patch Panel) de laboratori.
- Eina d'impacte i inserció (*Punch-down tool* tipus Krone) o eina pelacables.
- Nivell de bombolla, tornavís i caragols.
- Comprovador de continuïtat RJ45.

---

### Procediment de muntatge pas a pas

#### Pas 1: Fixació de la canaleta i la caixa de roseta
1. Col·loca el tram de canaleta sobre el tauler de proves de taller.
2. Utilitza el nivell de bombolla per verificar que queda completament horitzontal o vertical.
3. Caragola la base de la canaleta fermament al tauler.
4. Caragola la caixa buida de la roseta al final del tram de canaleta.

#### Pas 2: Pas del cable i preparació
1. Introdueix el cable UTP rígid per l'interior de la canaleta deixant uns 15 cm sobrants a l'extrem de la roseta i 30 cm a l'extrem del patch panel.
2. Retira uns 4 cm de la coberta exterior de plàstic del cable a la roseta.

#### Pas 3: Inserció del mòdul Keystone RJ45
1. Observa les etiquetes laterals del connector keystone: veuràs dues files de colors, una per a la norma **A** i una altra per a la norma **B**. Ens fixarem en la **B**.
2. Separa els 4 parells sense destrenar-los més del compte i col·loca cada fil de color sobre la seua ranura corresponent.
3. Amb l'eina d'impacte (amb la ganiveta de tall cap a la part exterior del connector), prem sobre cada fil fins a sentir el "clic":
   - El fil queda fixat entre les ganivetes metàl·liques i el sobrant es talla netament.
4. Col·loca la tapa protectora de plàstic del keystone i encasta el mòdul dins del marc de la roseta de paret.

#### Pas 4: Connexió al Patch Panel
1. A l'altre extrem, porta el cable fins al port 1 de la part posterior del patch panel.
2. Seguint el mateix codi de colors de la norma B marcat al panell, insereix cadascun dels 8 fils amb l'eina d'impacte.
3. Fixa el cable a la barra guia posterior del patch panel amb una brida de plàstic per evitar tironades.

#### Pas 5: Verificació final del tram
1. Connecta un cable de pegat bo des de la presa de la roseta fins al port Master del tester.
2. Connecta un altre cable de pegat bo des del port frontal del patch panel fins a la unitat Remote del tester.
3. Encén el tester i comprova la seqüència completa de l'1 al 8.
4. Si tots els 8 fils encenen en ordre, tanca la tapa de la canaleta i la caixa de la roseta. Enhorabona per la teua primera instal·lació professional!

---

