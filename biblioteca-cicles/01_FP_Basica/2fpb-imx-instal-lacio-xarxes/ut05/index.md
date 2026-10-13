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

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-sub" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-rck" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-can" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-pr2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">CABLEJAT ESTRUCTURAT: SUBSISTEMES, ARMARIS RACK 19", CANALETES I PRL</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Normes ANSI/TIA-568, unitats d'alçada U, tecnologia Keystone IDC i seguretat en taller</text>

  <!-- Bloc 1: Subsistemes Estructurats -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sub)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Subsistemes</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Jerarquia d'Edifici</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• CD / BD: Campus i Edifici</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• FD: Repartidor de planta</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Backbone: Tronc vertical</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Horitzontal: Màxim 90 m</text>
  </g>

  <!-- Bloc 2: Rack de 19" -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-rck)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🗄️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Armari Rack 19"</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Estàndard Mecànic</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Amplada: 19" (48,26 cm)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 1U = 1,75" = 4,445 cm</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Patch Panel IDC (1U)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• PDU i caragols M6 gàbia</text>
  </g>

  <!-- Bloc 3: Canalitzacions i Rosetes -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-can)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔌</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Canalitzacions</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Àrea de Treball</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Canaletes PVC separades</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Dades separades de 230V</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Roseta mural d'usuari</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Keystone femella RJ45</text>
  </g>

  <!-- Bloc 4: Seguretat PRL -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-pr2)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🦺</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Prevenció PRL</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Normes d'Instal·lació</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Escales de mà estables</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Presa de terra al rack</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Ulleres i botes reforçades</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Detector cables en paret</text>
  </g>
</svg>
</div>

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

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Dimensionament d'ocupació d'un armari Rack de 19 polzades en unitats "U"
Una empresa de serveis vol instal·lar un nou armari rack de telecomunicacions de paret per a una planta amb 20 treballadors. L'enginyer proposa un armari de bastidor de $12U$ d'alçada útil ($1U = 1{,}75\text{ polzades} \approx 44{,}45\text{ mm}$).
Es planifica allotjar els següents elements d'infraestructura:
- 1 Panell de pegat (Patch Panel) Cat 6 de 24 ports: $1U$
- 1 Guia horitzontal d'ordenació de cables (passacables amb tapa): $1U$
- 1 Commutador de xarxa (Switch) PoE de 24 ports Gigabit: $1U$
- 1 Guia passacables addicional: $1U$
- 1 Safata fixa de suport per a l'encaminador de fibra (Router) i l'ONT: $2U$
- 1 Panell de distribució elèctrica amb magnetotèrmic (PDU): $1U$
- 1 Sistema d'Alimentació Ininterrompuda (SAI) format rack: $2U$

1. Calcula l'alçada útil total de l'armari de $12U$ en centímetres ($\text{cm}$) i en mil·límetres ($\text{mm}$).
2. Suma les unitats d'alçada ocupades per tots els equips previstos en el projecte inicial. Quantes unitats $U$ lliures romandran a l'armari?
3. Calcula el percentatge d'ocupació de l'armari:
   $$\%\,\text{Ocupació} = \frac{U_{\text{ocupades}}}{U_{\text{totals}}} \cdot 100$$
4. Si les bones pràctiques recomanen deixar un marge mínim de reserva del $25\%$ d'espai buit per a futures ampliacions i ventilació, l'armari de $12U$ triat compleix aquesta recomanació?

#### Exercici 2: Càlcul de la secció de canaleta i coeficient d'ompliment de cables
Per alimentar les preses de xarxa d'una aula informàtica, cal passar un feix de 24 cables UTP Cat 6 a través d'una canaleta de superfície de PVC.
- Cada cable UTP Cat 6 té un diàmetre exterior mitjà de $d = 6{,}2\text{ mm}$.
- L'àrea de la secció transversal circular de cada cable és:
  $$S_{\text{cable}} = \frac{\pi \cdot d^2}{4}$$
- Les normes de cablejat estructurat (ANSI/TIA-569) estipulen que, per evitar l'aixafament dels conductors i permetre futures ampliacions, la secció dels cables mai ha de superar un factor d'ompliment màxim del $40\%$ ($K = 0{,}40$) de la secció interior útil de la canaleta:
  $$S_{\text{canaleta}} \ge \frac{N \cdot S_{\text{cable}}}{K}$$

1. Calcula l'àrea que ocupa un cable individual de Cat 6 en $\text{mm}^2$.
2. Calcula l'àrea total ocupada pel conjunt dels 24 cables de xarxa.
3. Determina la secció interior mínima que ha de tindre la canaleta de PVC per complir la norma del $40\%$ d'ompliment.
4. Si el catàleg del fabricant ofereix canaletes comercials amb les següents mides interiors:
   - Model A: $40 \times 20\text{ mm}$ ($800\text{ mm}^2$)
   - Model B: $60 \times 40\text{ mm}$ ($2400\text{ mm}^2$)
   - Model C: $100 \times 50\text{ mm}$ ($5000\text{ mm}^2$)
   Quin model és el mínim adequat que cal instal·lar?

#### Exercici 3: Diagnòstic de distàncies normatives en el cablejat horitzontal
La norma ANSI/TIA-568 estableix que la longitud total del canal de cablejat horitzontal no pot excedir en cap cas els $100\text{ metres}$, desglossat en:
- Enllaç permanent fix (cable rígid des de patch panel fins a roseta): màxim $90\text{ metres}$.
- Cables de pegat flexibles (suma dels latiguillos del rack i de l'àrea de treball d'usuari): màxim $10\text{ metres}$ (típicament 5 m al rack i 5 m a l'usuari).

Analitza la viabilitat tècnica de les següents tres situacions reals d'obra:
- **Cas 1:** Enllaç fix de $82\text{ m}$, latiguillo al rack de $2\text{ m}$ i latiguillo a la taula de l'usuari de $3\text{ m}$.
- **Cas 2:** Enllaç fix de $94\text{ m}$ i latiguillos de connexió d'1 m a cada extrem.
- **Cas 3:** Enllaç fix de $60\text{ m}$ i un cable de connexió flexible d'usuari de $15\text{ m}$ per moure l'ordinador per una nau industrial.
Indica per a cada cas si compleix la norma i quins problemes de transmissió (atenuació, reflexió, pèrdua de paquets) poden aparèixer.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Muntatge mecànic, anivellament i fixació de canaleta de PVC
- **Objectiu:** Fixar un tram de canalització de superfície perfectament anivellat sobre un panell d'entrenament seguint criteris professionals de taller.
- **Eines:** Tram de canaleta de PVC de 1 m amb tapa, nivell de bombolla de gota, flexòmetre, tornavís d'estrella, caragols de fusta/guix i llapis de marcatge.
- **Procediment de taller:**
  1. Separa la tapa de la base de la canaleta amb la mà o un tornavís pla fent palanca suaument.
  2. Situa la base sobre el panell a una alçada de $30\text{ cm}$ de la base de treball.
  3. Col·loca el nivell de bombolla sobre la vora superior de la canaleta i corregeix la inclinació fins que la bombolla quede exactament entre les dues marques centrals.
  4. Marca amb el llapis els punts de fixació cada $30\text{ cm}$.
  5. Caragola la canaleta fermament assegurant que no queda bombada ni deformada.
  6. Comprova que la tapa encaixa i tanca a pressió amb un "clic" uniforme en tot el recorregut.

#### Repte 2: Conectorització d'un enllaç permanent complet (Keystone a Patch Panel)
- **Objectiu:** Construir un enllaç de dades permanent fix entre una presa d'usuari i el panell de pegat de l'armari rack.
- **Eines:** 1 presa Keystone RJ45 femella Cat 6, 1 port de Patch Panel buit, 2 metres de cable UTP rígid d'instal·lació, eina d'impacte Krone i comprovador de xarxa (tester).
- **Instruccions de conectorització:**
  1. Pela $40\text{ mm}$ de la coberta del cable UTP a l'extrem de la roseta.
  2. Distribueix els 4 parells a les ranures IDC del connector Keystone segons la norma de colors **T568B**.
  3. Impacta cadascun dels 8 conductors verificant que la ganiveta talla a ras el coure sobrant.
  4. Repeteix l'operació a l'altre extrem connectant el cable al Port 1 de la part posterior del Patch Panel (norma B).
  5. Brida el cable a la barra de suport del panell de pegat per evitar esforços mecànics sobre les connexions IDC.
  6. Connecta dos latiguillos de prova comprovats i verifica amb el tester que els 8 LEDs s'il·luminen seqüencialment sense fallades de continuïtat.

#### Repte 3: Registre documental i etiquetatge segons la norma ANSI/TIA-606
- **Objectiu:** Identificar i etiquetar unívocament tots els elements de la instal·lació realitzada per permetre el manteniment preventiu.
- **Materials:** Etiquetadora electrònica professional o etiquetes adhesives manuals i full d'inventari de telecomunicacions.
- **Codi normalitzat a aplicar:**
  - Format d'etiqueta de roseta d'usuari: `[AULA/SALA]-[ARMARI]-[Nº PORT]` (Exemple: `A04-RK1-P01`).
  - Format d'etiqueta al patch panel: `[Nº PRESA]-[DESTINACIÓ]` (Exemple: `P01-TAULA-DOCENT`).
  - Format d'etiqueta del cable rígid a banda i banda (a 5 cm de cada extrem): `CABLE-01 (A04-RK1-P01)`.
- **Comanda:** Imprimeix i col·loca les tres etiquetes en els seus llocs corresponents i emplena el registre de connexions a la memòria tècnica de taller.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He utilitzat el nivell de bombolla per verificar l'alineació horitzontal i vertical de la canaleta.
- [ ] He respectat la norma del factor d'ompliment màxim del 40% en les canalitzacions.
- [ ] He calculat correctament les unitats d'alçada "U" de l'armari rack i l'espai de reserva.
- [ ] He conectoritzat el mòdul Keystone i el Patch Panel respectant el codi de colors B sense destrenar en excés.
- [ ] He comprovat que el tester valida la continuïtat dels 8 pins del tram instal·lat.
- [ ] He col·locat les etiquetes d'identificació unívoca a la roseta, al cable i al panell de pegat.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Dimensionament d'infraestructura (Racks i canaletes)** | Calcula amb precisió les unitats U, espai de reserva, seccions de cables i factors d'ompliment normatius. | Realitza càlculs d'alçada i canalització correctes amb xicotets desajustaments en percentatges. | Calcula les unitats bàsiques d'alçada però té dificultats amb la secció circular de la canaleta. | No sap calcular les unitats d'alçada U d'un rack ni dimensionar la canalització. |
| **Destresa mecànica en el muntatge de canalitzacions** | Fixa la canaleta perfectament anivellada, sòlida, amb caragols ben distribuïts i tancament net de tapes. | Munta la canaleta de forma recta i segura amb bon ajustament de la tapa. | La canaleta queda fixada funcionalment encara que presenta desviacions visuals o tancament forçat. | Canaleta torta, caragols solts o tapa trencada per excés de força. |
| **Conectorització Keystone i Patch Panel (IDC)** | Empra l'eina d'impacte amb tècnica impecable, destrenat mínim (< 6 mm) i talls nets sense danyar ranures. | Conectoritza ambdues peces amb la norma B i aconsegueix enllaç correcte al tester. | Connecta els 8 fils però destrena en excés el parell o requereix diversos intents d'impacte. | Trenca les ranures IDC, inverteix colors o deixa fils solts sense continuïtat. |
| **Etiquetatge i normativa TIA-606** | Aplica la codificació d'etiquetatge unívoc a la roseta, cable i rack amb format professional i registra dades. | Etiqueta els tres elements de forma clara seguint el patró establert. | Etiqueta algun dels elements però oblida marcar els extrems del cable rígid. | No etiqueta la instal·lació o utilitza noms improvisats sense criteri normalitzat. |
| **Seguretat i Prevenció de Riscos (PRL)** | Utilitza els EPIs necessaris, manté l'ordre, revisa l'estat d'escales i respecta la presa de terra del rack. | Treballa amb seguretat i fa ús dels equips de protecció individual de forma constant. | Coneix les normes de seguretat però requereix algun advertiment per utilitzar les ulleres o netejar el lloc. | Condueix pràctiques perilloses amb eines de tall o treballs en alçada sense protecció. |

