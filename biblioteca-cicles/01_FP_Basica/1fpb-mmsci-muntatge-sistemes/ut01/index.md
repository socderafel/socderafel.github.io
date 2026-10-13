---
layout: default
title: "UD1: Elements Elèctrics i Electrònics Bàsics i Seguretat al Taller — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD1"
---

# ⚡ UD1: Elements Elèctrics i Electrònics Bàsics i Seguretat al Taller

Benvingut/da a la **Unitat Didàctica 1** del mòdul professional de **Muntatge i Manteniment de Sistemes i Components Informàtics (MMSCI)**. En aquesta unitat aprendràs com funciona l'energia elèctrica que dona vida als equips informàtics, aprendràs a calcular magnituds amb la Llei d'Ohm, mesuraràs tensions reals amb el multímetre digital i coneixeràs les eines i protocols de seguretat contra descàrregues electroestàtiques (ESD).

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-ohm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-atx" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-multi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-esd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f472b6" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#db2777" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">CIRCUIT ELÈCTRIC DE TALLER: MAGNITUDS, MULTÍMETRE I PROTECCIÓ ESD</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura d'energia al PC, mesura de tensions amb polímetre i seguretat contra descàrregues</text>

  <!-- Bloc 1: Llei d'Ohm -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ohm)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">Ω</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llei d'Ohm</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">V = I · R  |  P = V · I</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Tensió (V): Volts</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Intensitat (I): Amperes</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Resistència (R): Ohms</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Potència (P): Watts</text>
  </g>

  <!-- Bloc 2: Tensions ATX -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-atx)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tensions PC (DC)</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">230V AC → Font ATX</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• +12 V (Groc): Motors/CPU</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• +5 V (Roig): Lògica i USB</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• +3,3 V (Taronja): RAM</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 0 V (Negre): Massa (GND)</text>
  </g>

  <!-- Bloc 3: Multímetre -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-multi)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📟</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Multímetre Digital</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Mesures de Banc</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• V (DC): En paral·lel</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• I (A): En sèrie (interrupció)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Ω (Resistència): Sense tensió</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Bip Continuïtat: Cables/fusibles</text>
  </g>

  <!-- Bloc 4: Seguretat ESD -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-esd)" stroke="#f472b6" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f472b6" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f472b6" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Protecció ESD</text>
    <text x="15" y="62" fill="#f472b6" font-size="11" font-weight="600">Protocol de Taller</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Polsera antiestàtica (1 MΩ)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Catifa dissipativa a terra</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bosses blindades Faraday</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Desconnectar 230 V abans</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

Pots accedir directament a cada apartat o consultar el resum complet més avall:

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **1.1** | Fonaments d'electricitat, magnituds elèctriques i Llei d'Ohm | [**📘 Llegir Apartat 1.1 →**](./ut0101.html) |
| **1.2** | Corrent continu (DC), corrent altern (AC) i components passius (Resistències, Codi de colors i SMD) | [**📘 Llegir Apartat 1.2 →**](./ut0102.html) |
| **1.3** | Circuits en sèrie, paral·lel i mixtos: Càlculs i aplicació en informàtica | [**📘 Llegir Apartat 1.3 →**](./ut0103.html) |
| **1.4** | L'aparell de mesura: El polímetre / multímetre digital (Mesura de tensions i continuïtat) | [**📘 Llegir Apartat 1.4 →**](./ut0104.html) |
| **1.5** | Eines de taller de maquinari, protecció antiestàtica (ESD) i seguretat elèctrica | [**📘 Llegir Apartat 1.5 →**](./ut0105.html) |

---

## 🎯 Resultats d'Aprenentatge i Criteris d'Avaluació Treballats

- **RA 1:** Selecciona els components i elements que configuren els equips microinformàtics, descrivint les seues característiques i relacions de compatibilitat.
  - *CE a:* S'han descrit els blocs funcionals d'un sistema informàtic i les seues magnituds elèctriques.
  - *CE b:* S'han identificat els elements de connexió i alimentació de l'equip.
  - *CE c:* S'han seleccionat les eines de taller i mesura adequades per a cada operació.
  - *CE d:* S'han respectat les normes bàsiques de seguretat laboral i prevenció de riscos elèctrics.

---

## 📊 Matriu de Magnituds Elèctriques, Mesures i Tensions de Taller

| Magnitud / Paràmetre | Símbol i Unitat | Instrument de Mesura | Mètode de Connexió | Valor típic a l'equip microinformàtic | Protocol de Seguretat associat |
| :--- | :---: | :--- | :--- | :--- | :--- |
| **Tensió Elèctrica** | \( V \) (Volts) | Polímetre (Mode Voltímetre DCV) | **En paral·lel** entre els dos punts de mesura | +12 V (Groc), +5 V (Roig), +3,3 V (Taronja), 3 V (CR2032) | No creuar les puntes per evitar curtcircuits. |
| **Intensitat de Corrent** | \( I \) (Amperes / mA) | Polímetre (Mode Amperímetre DCA) | **En sèrie** (obrint el circuit físicament) | 0,5 A (USB 2.0), 1,5 A (ventilador), 15-25 A (CPU/GPU) | Canviar la clavilla vermella a la presa de 10A si se supera el límit. |
| **Resistència Elèctrica** | \( R \) (Ohms, \(\Omega\)) | Polímetre (Mode Ohmímetre \(\Omega\)) | **En paral·lel** amb el component aïllat | Resistències limitadores: 220 \(\Omega\) a 10 k\(\Omega\) | **Desconnectar completament l'alimentació** abans de mesurar. |
| **Continuïtat Elèctrica** | Bip sonor | Polímetre (Mode Brunzidor/Díode) | Entre els dos extrems d'un cable o fusible | 0 \(\Omega\) = Bip continu (Connexió OK) | Assegurar que no hi ha càrrega residual en condensadors. |
| **Potència Elèctrica** | \( P \) (Watts, W) | Càlcul (\( P = V \cdot I \)) o Vatímetre de xarxa | Endoll intermedi a la presa Schuko 230V | 150 W – 450 W (consum global torre PC oficina) | No sobrecarregar regletes múltiples de taller. |
| **Càrrega Electroestàtica** | \( kV \) (Kilovolts) | Mesurador de camp electroestàtic | Superfície de l'operari o component | Descàrrega imperceptible a partir de 100 V (danya xips) | **Polsera antiestàtica** obligatòria connectada al xassís o terra. |

---

## 📌 Resum Conceptual dels Punts Clau de la Unitat

### 1. Les Tres Magnituds Elèctriques Fonamentals
- **Tensió (V):** Volts. Pressió que empeny els electrons pel conductor.
- **Intensitat (I):** Amperes. Quantitat d'electrons per segon que circulen pel circuit.
- **Resistència (R):** Ohms (\(\Omega\)). Oposició que presenten els materials al pas del corrent.
- **Fórmula d'Ohm:** \( V = I \cdot R \).
- **Potència elèctrica:** \( P = V \cdot I \) (Watts).

### 2. Conversió d'Energia al PC
- La xarxa elèctrica aporta **230 V en Corrent Altern (AC)** a una freqüència de 50 Hz.
- La font d'alimentació ATX transforma i rectifica aquest corrent a **Corrent Continu (DC)** en les tres tensions fonamentals:
  - **+12 V (Cable groc):** Alimenta motors de discs, ventiladors, mòduls VRM de CPU i GPU.
  - **+5 V (Cable roig):** Alimenta circuits lògics, xips i ports USB estàndard.
  - **+3,3 V (Cable taronja):** Alimenta directament ranures de memòria RAM i xips de la placa base.
  - **Massa / Terra (Cable negre):** Potencial de referència de 0 V.

### 3. Seguretat i Prevenció ESD
- Mai s'ha de manipular un ordinador endollat a la xarxa de 230 V.
- Les descàrregues electroestàtiques (ESD) poden cremar xips CMOS sense que l'usuari note cap espurna; és obligatori l'ús de la **polsera antiestàtica** connectada a una presa de terra o al xassís metàl·lic de la caixa.
- Mai s'ha d'obrir la carcassa metàl·lica d'una font d'alimentació ATX pels seus condensadors d'alt voltatge capaços d'emmagatzemar càrregues letals durant dies.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de Resistència Limitadora per a Indicadors LED
En el taller microinformàtic disposem de díodes LED de color blau i roig per indicar l'estat d'engegada del sistema (Power LED) i l'activitat de la unitat d'emmagatzematge (HDD LED). Cada LED té una caiguda de tensió nominal de \( V_{LED} = 2,0\text{ V} \) i requereix un corrent òptim de treball de \( I = 15\text{ mA} \) (\(0,015\text{ A}\)).
1. Si connectem el LED a la línia de \(+5\text{ V}\) de la font d'alimentació ATX, quina tensió exacta ha de suportar la resistència limitadora? Aplica la fórmula \( V_R = V_{font} - V_{LED} \).
2. Calcula el valor de la resistència limitadora \( R \) en Ohms (\(\Omega\)) aplicant la Llei d'Ohm:
   \[
   R = \frac{V_R}{I}
   \]
3. Si connectem per error el mateix circuit a la línia de \(+12\text{ V}\) mantenint la mateixa resistència calculada anteriorment, quin corrent travessarà el LED? Justifica tècnicament si el díode sobreviurà o es cremarà.

#### Exercici 2: Descodificació del Codi de Colors de Resistències de 4 Bandes
Determina el valor òptic, la tolerància i el rang admissible (valor mínim i màxim) de les següents resistències de taller utilitzant la taula de codi de colors estàndard:
1. **Resistència 1:** Banda 1: Roig (2), Banda 2: Roig (2), Banda 3: Marró (\(\times 10\)), Banda 4: Daurat (\(\pm 5\%\)).
2. **Resistència 2:** Banda 1: Marró (1), Banda 2: Negre (0), Banda 3: Vermell (\(\times 100\)), Banda 4: Daurat (\(\pm 5\%\)).
3. **Resistència 3:** Banda 1: Groc (4), Banda 2: Violeta (7), Banda 3: Vermell (\(\times 100\)), Banda 4: Plata (\(\pm 10\%\)).
4. Si un company mesura la Resistència 1 amb el polímetre i obté una lectura de \(234\ \Omega\), indica si aquest component està en bon estat de funcionament o ha de ser rebutjat.

#### Exercici 3: Càlcul de Potència i Consum Elèctric en Línies de Tensió
Un equip informàtic de taller té connectats els següents elements al seu rail de \(+12\text{ V}\):
- 3 ventiladors de xassís de \(0,25\text{ A}\) cadascun.
- 1 bomba de refrigeració líquida de \(0,80\text{ A}\).
- 1 targeta gràfica bàsica que consumeix \(65\text{ W}\) a través de la línia de 12 V.
1. Calcula la potència elèctrica consumida pels 3 ventiladors i la bomba aplicant \( P = V \cdot I \).
2. Calcula la intensitat de corrent total (\( I_{total} \)) que circula pel rail de 12 V per alimentar tots aquests components.
3. Si el rail de 12 V de la font té una capacitat màxima de sortida de \(18\text{ A}\), quin percentatge de càrrega representa aquest consum respecte al límit de la línia?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Mesura de Tensions DC Reals amb el Multímetre Digital
- **Objectiu:** Dominar la manipulació de les puntes de prova del multímetre i registrar lectures reals de tensió contínua sense risc de curtcircuit.
- **Material de laboratori:** Multímetre digital, pila de botó CR2032 (3 V), pila alcalina AA (1,5 V), bateria de portàtil o font d'alimentació de proves amb tester ATX.
- **Passos d'execució:**
  1. Connecta la punta de prova negra a la presa `COM` del multímetre i la punta roja a la presa `V/Ω/mA`.
  2. Gira el selector rotatori a l'escala de **Volts DC (⎓)** en el rang de 20 V.
  3. Mesura la tensió de la pila CR2032 col·locant la punta roja al pol positiu (+) i la negra al negatiu (-). Anota el valor exacte. Si la lectura és inferior a 2,8 V, indica la necessitat de substitució.
  4. Inverteix les puntes de prova a propòsit: col·loca la punta roja al pol negatiu i la negra al positiu. Observa i anota què mostra la pantalla digital (signe negatiu). Explica per què es produeix aquest fenomen.
  5. En una font d'alimentació ATX de banc engegada amb pont verd-negre (PS-ON a GND), mesura la tensió existent entre un cable groc (+12 V) i un cable negre (GND) d'un connector Molex. Anota la lectura amb 2 decimals.

#### Repte 2: Comprovació de Continuïtat de Pistes, Fusibles i Cables d'Alimentació
- **Objectiu:** Diagnosticar talls de línia, cables interns danyats i fusibles fosos mitjançant el sensor de continuïtat sonor.
- **Material de laboratori:** Multímetre digital en mode brunzidor acústic, cable d'alimentació IEC C13 a Schuko, fusible ceràmic de font, cables de connexió de disc SATA.
- **Passos d'execució:**
  1. Situa el selector del polímetre en la posició del símbol de **díode / brunzidor acústic (🔊)**.
  2. Junta les dues puntes de prova entre si. Comprova que l'aparell emet un xiulet clar i marca un valor proper a \(0,0\ \Omega\).
  3. Comprova l'estat del fusible de laboratori col·locant una punta a cada extrem metàl·lic. Si xiula, el fusible és apte; si mostra "OL" o "1" (circuit obert), el fusible està cremat.
  4. Fes el mapa de continuïtat d'un cable d'alimentació de xarxa Schuko a C13:
     - Comprova la fase (clavilla Schuko a orifici C13 dret).
     - Comprova el neutre (clavilla Schuko a orifici C13 esquerre).
     - Comprova la presa de terra (xapes laterals Schuko a orifici C13 central).
  5. Elabora un informe breu indicant si el cable presenta continuïtat correcta en els tres fils i absència de curtcircuits entre ells.

#### Repte 3: Muntatge de l'Estació Antiestàtica (ESD) i Protocol de Seguretat
- **Objectiu:** Aplicar de manera autònoma i professional el protocol complet de prevenció de danys per electricitat estàtica abans d'obrir un equip.
- **Material de laboratori:** Polsera antiestàtica amb cable espiral i pinça de cocodril, catifa de treball ESD, tornavís d'estrella aïllat, caixa d'ordinador per a pràctiques.
- **Passos d'execució:**
  1. Desconnecta completament el cable d'alimentació de 230 V de la part posterior de l'ordinador.
  2. Prem el botó d'engegada frontal (*Power Button*) durant 5 segons amb l'equip desendollat per descarregar l'energia romanent dels condensadors de la font i placa base.
  3. Col·loca la polsera antiestàtica ben cenyida a la monyica de la mà no dominant, garantint contacte directe amb la pell neta.
  4. Fixa la pinça de cocodril a una part metàl·lica sense pintar del xassís de la caixa o al terminal de terra de la catifa ESD.
  5. Mesura amb el polímetre en escala de MegaOhms (M\(\Omega\)) la resistència del cable de la polsera: confirma que marca aproximadament \(1\text{ M}\Omega\) (resistència de seguretat per protegir l'operari de contactes accidentals).
  6. Registra l'estat final a la llista de verificació prèvia a la manipulació de mòduls de memòria RAM o targetes d'expansió.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació del Taller Elèctric (Checklist)
- [ ] L'equip està completament desendollat de la xarxa elèctrica de 230 V abans d'iniciar la intervenció.
- [ ] S'ha premut el botó d'engegada durant 5 segons per drenar la càrrega residual dels condensadors.
- [ ] La polsera antiestàtica està col·locada correctament en contacte amb la pell i connectada a massa metàl·lica.
- [ ] Les puntes del multímetre estan connectades a les preses correctes segons la mesura (COM per a negre, V/Ω per a tensió).
- [ ] S'ha seleccionat l'escala de mesura adequada abans d'aplicar les puntes sobre el circuit en tensió.
- [ ] No s'intenta mai mesurar resistències o continuïtat en circuits amb tensió activa.
- [ ] S'ha netejat i ordenat l'estació de treball, desant les eines i components en les seues caixes corresponents.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Ús del Multímetre i Mesures Elèctriques** | Selecciona l'escala idònia, connecta les puntes amb precisió i obté mesures exactes de tensió i continuïtat sense dubtes. | Configura el polímetre correctament i obté les mesures amb petites correccions de rang. | Fa servir l'aparell amb ajuda del procediment, mesura la tensió bàsica però dubta en la posició de les clavilles. | Desconeix com configurar el multímetre, utilitza l'escala incorrecta o crea curtcircuits amb les puntes. |
| **Càlculs amb la Llei d'Ohm i Codi de Colors** | Resol tots els exercicis matemàtics (\(V, I, R, P\)) amb fórmules, unitats i descodifica les bandes de color amb toleràncies exactes. | Resol els càlculs amb petits errors d'arrodoniment i llegeix el codi de colors amb fluïdesa. | Aplica la fórmula bàsica d'Ohm amb orientació i identifica els colors principals de les resistències. | No sap aplicar la fórmula de la Llei d'Ohm ni interpretar les bandes de color dels components. |
| **Protocol de Seguretat i Protecció ESD** | Aplica rigorosament la polsera antiestàtica, drena condensadors i manté l'estació de treball segura en tot moment. | Utilitza la protecció antiestàtica correctament i recorda desendollar l'equip de la xarxa elèctrica. | Col·loca la polsera només quan se li recorda i desconnecta l'equip de 230 V. | Omet les normes de seguretat, manipula equips en tensió o toca components sensibles sense descarregar-se. |
| **Ordre, Mètode i Neteja de Laboratori** | Treballa amb mètode impecable, anota dades en la memòria tècnica i deixa el banc de taller ordenat i net. | Manté un bon ordre en les eines i cables durant les proves i recull el lloc de treball. | Realitza la pràctica de manera acceptable però requereix recordatoris per endreçar les eines. | Deixa cables i eines desordenats, no completa la memòria tècnica o malmet el material de taller. |
