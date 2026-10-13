---
layout: default
title: "UD5: Connectors i Cablejat — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD5"
---

# 🔌 UD5: Connectors i Cablejat de l'Ordinador

Benvingut/da a la **Unitat Didàctica 5** de MMSCI. En aquest mòdul aprendràs a identificar sense dubtes tots els tipus de cables i connectors d'un equip informàtic: els connectors d'alimentació ATX de 24 pins, CPU i targetes gràfiques, els cables de dades SATA, l'esquema de connexió dels botons i LEDs del panell frontal (Power SW, Reset, HDD LED), els ports de comunicació USB i xarxa RJ-45, i els connectors de vídeo i àudio (HDMI, DisplayPort, VGA i jacks de 3,5 mm).

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-ali" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-fp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-usb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-vid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">MAPA DE CONNECTORS I CABLEJAT: ALIMENTACIÓ, DADES I MULTIMÈDIA</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Tipologia de contactes elèctrics, panell frontal, interfícies de bus i ports d'E/S</text>

  <!-- Bloc 1: Alimentació Interna -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ali)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Alimentació Interna</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Línies de Corrent</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ATX 24 pins: Placa base</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• EPS 4+4 pins: CPU (+12V)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• PCIe 6+2 pins: GPU</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• SATA Power: 15 pins (Discs)</text>
  </g>

  <!-- Bloc 2: Panell Frontal -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fp)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔘</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Panell Frontal</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Connector F_PANEL</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Power SW: Polsador (Sense pol.)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Reset SW: Reinici (Sense pol.)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Power LED: Llum encesa (+/-)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• HDD LED: Activitat disc (+/-)</text>
  </g>

  <!-- Bloc 3: Ports de Dades -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-usb)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Dades i Comunicació</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Interfícies d'E/S</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• SATA Dades: 7 pins en L</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• USB-A 3.0: Blau (5 Gbps)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• USB-C: Reversible (fins 40G)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• RJ-45: Xarxa Gigabit (8P8C)</text>
  </g>

  <!-- Bloc 4: Vídeo i Àudio -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-vid)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🖥️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Vídeo i Àudio</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Multimèdia</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• HDMI: Vídeo + Àudio digital</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• DisplayPort: Clips bloqueig</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• VGA: Analògic blau 15 pins</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Jack 3,5 mm: Verd (So), Rosa</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **5.1** | Principis de connexió: Pins, contactes, connectors mascle/femella i adaptadors | [**📘 Llegir Apartat 5.1 →**](./ut0501.html) |
| **5.2** | Connectors d'alimentació interns de la font ATX (ATX 24p, EPS, PCIe, SATA, Molex) | [**📘 Llegir Apartat 5.2 →**](./ut0502.html) |
| **5.3** | Connectors de dades interns (SATA) i cablejat del panell frontal (Power SW, Reset, LEDs) | [**📘 Llegir Apartat 5.3 →**](./ut0503.html) |
| **5.4** | Connectors i ports de comunicació externs (USB Tipus A/C, RJ-45) | [**📘 Llegir Apartat 5.4 →**](./ut0504.html) |
| **5.5** | Connectors multimèdia de vídeo i àudio (HDMI, DisplayPort, VGA i Jacks 3,5 mm) | [**📘 Llegir Apartat 5.5 →**](./ut0505.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 2:** Munta i acobla equips microinformàtics bàsics, analitzant esquemes i utilitzant les eines i protocols de seguretat.
  - *CE d:* S'han identificat els diferents tipus de cablejat i connectors d'alimentació i dades.
  - *CE e:* S'ha connectat correctament el panell frontal de la caixa respectant la polaritat dels díodes LED.
  - *CE f:* S'han emparellat els connectors perifèrics externs d'àudio, vídeo i xarxa.

---

## 📊 Matriu de Classificació de Connectors i Protocols Tècnics

| Nom del Connector | Tipus d'Ús | Nombre de Pins | Polaritat Obligatòria? | Tensions / Senyal que transporta | Clau Mecànica de Seguretat |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **ATX 24 pins** | Alimentació Placa Base | 24 pins | **Sí** (forma pins) | +12V, +5V, +3.3V, -12V, +5VSB, GND | Pestanya de plàstic amb xamfrans quadrats/arrodonits |
| **EPS 12V (CPU)** | Alimentació Processador | 4+4 (8 pins) | **Sí** | Exclusivament +12V (groc) i Terra (negre) | Pins xamfranats específics per a sòcol CPU |
| **PCIe (GPU)** | Alimentació Gràfica | 6+2 (8 pins) | **Sí** | Exclusivament +12V (groc) i Terra (negre) | Pestanya invertida respecte a l'EPS de CPU |
| **SATA Power** | Alimentació Discs | 15 pins | **Sí** | +12V, +5V, +3.3V i GND | Forma en "L" plana que impedeix la inserció invertida |
| **SATA Dades** | Connexió Discs HDD/SSD | 7 pins | **Sí** | Senyal diferencial de dades d'alta freqüència | Forma en "L" estreta amb pestanya metàl·lica de clic |
| **Power SW / Reset** | Panell Frontal | 2 pins cadascun | **No** (Polsador) | Tancament de contacte a massa (0 V) | Sense clau; es pot connectar en qualsevol sentit |
| **HDD LED / Pwr LED** | Panell Frontal | 2 pins cadascun | **Sí (Díode LED)** | +5V o +3.3V (Ànode +) a Terra (Càtode -) | Color indica positiu (+), negre/blanc negatiu (-) |
| **HDMI 2.0 / 2.1** | Vídeo i Àudio extern | 19 pins | **Sí** | Vídeo digital TMDS + Àudio multicanal | Xamfrà trapezoïdal asimètric |
| **DisplayPort (DP)** | Vídeo i Àudio extern | 20 pins | **Sí** | Vídeo digital DisplayPort + Àudio digital | Un angle recte i un angle bisellat amb botó de bloqueig |

---

## 📌 Resum Didàctic dels Punts Clau

1. **Alimentació Principal i Secundària:**
   - **ATX 24 pins:** Alimenta la placa base i tots els circuits integrats bàsics.
   - **EPS 4+4 pins (CPU):** Transporta exclusivament corrent de +12 V per a les fases de la CPU. No s'ha de confondre mai amb el connector PCIe de targeta gràfica.
   - **PCIe 6+2 pins:** Alimenta la targeta gràfica dedicada amb rails addicionals de +12 V.
   - **SATA Power:** Connector fi de 15 pins en forma d'ela que subministra 12V, 5V i 3,3V a unitats de disc.
2. **Panell Frontal (`F_PANEL`):**
   - Els botons **Power SW** i **Reset SW** són simples polsadors mecànics que tanquen el circuit; no tenen polaritat i funcionen en qualsevol orientació.
   - Els indicadors **Power LED** i **HDD LED** són díodes emissors de llum; requereixen polaritat estricta (el cable de color és el positiu `+`, el blanc o negre és el negatiu `-`). Si es connecten al revés, no es cremen però no s'il·luminaran.
3. **Ports USB:** Tipus A clàssic (blanc per a USB 1.1, negre per a USB 2.0, **blau per a USB 3.0** a 5 Gbps, roig per a càrrega ràpida). El **Tipus C** és ovalat, reversible i suporta tant alimentació d'alta potència (*Power Delivery*) com senyal de vídeo alternatiu (*DisplayPort Alt Mode*).
4. **Vídeo Multimèdia:**
   - **HDMI:** Porta senyal digital de vídeo i so simultani sense pèrdues.
   - **DisplayPort:** L'estàndard preferit en ordinadors per a monitors d'alta freqüència de refresc (144 Hz o superior); incorpora pestanyes mecàniques de subjecció que cal prémer per desendollar.
   - **VGA:** Antic port analògic de 15 pins en color blau; sensible a interferències i sense transport d'àudio.
5. **Àudio Analògic (Jacks 3,5 mm):** Verd (eixida d'altaveus/auriculars estèreo), Rosa (entrada de micròfon), Blau clar (entrada de línia auxiliar).

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Esquema de Connexió del Panell Frontal (`F_PANEL`)
A la placa base trobem un bloc de pins serigrafiat com a `JFP1` o `F_PANEL` amb una disposició de dues fileres de pins (9 pins útils i 1 pin cec o buit):
```
Fila superior: [Pin 2] [Pin 4] [Pin 6] [Pin 8] [Pin 10: BUIT]
Fila inferior: [Pin 1] [Pin 3] [Pin 5] [Pin 7] [Pin 9]
```
Segons el manual oficial:
- Pins 1 i 3: `HDD_LED` (Pin 1 positiu `+`, Pin 3 negatiu `-`).
- Pins 2 i 4: `POWER_LED` (Pin 2 positiu `+`, Pin 4 negatiu `-`).
- Pins 5 i 7: `RESET_SW` (Polsador de reinici).
- Pins 6 i 8: `POWER_SW` (Polsador d'engegada).
1. Un alumne connecta el cable bicolor del `HDD_LED` (roig i blanc) amb el cable roig al Pin 3 i el blanc al Pin 1. Què passarà quan l'equip funcione i el disc tinga activitat? S'espatllarà la placa base o el LED? Com se soluciona?
2. Els cables del botó `POWER_SW` són de color blau i negre. Importa en quin dels dos pins (Pin 6 o Pin 8) es col·loca el cable blau? Justifica tècnicament el motiu.
3. Si un ordinador no encén en prémer el botó de la caixa, com pot un tècnic verificar amb la punta d'un tornavís pla si la fallada prové del botó de la caixa o de la font d'alimentació?

#### Exercici 2: Anàlisi de Risc Elèctric: EPS 12V (CPU) vs PCIe (GPU)
Tant el connector EPS com el connector PCIe poden presentar-se en formats de 8 pins procedents de la font d'alimentació ATX.
1. Quina tensió nominal aporten tots dos connectors i quants Volts transporten els cables de color groc?
2. Dibuixa o descriu la disposició dels pins: quina és la fila de positius (+12 V) i la de terra (GND) en un connector EPS de CPU i quina és en un connector PCIe de gràfica?
3. Per què els fabricants dissenyen els connectors plàstics amb xamfrans quadrats i arrodonits diferents? Què passaria si algú utilitzara un adaptador de mala qualitat o forçara un connector EPS dins d'una targeta gràfica PCIe?

#### Exercici 3: Comparativa de Rendiment entre Cables de Vídeo i Resolució
En una aula multimèdia es volen connectar monitors que suporten resolució **4K UHD (3840 × 2160)** a una freqüència de refresc de **120 Hz**.
1. Podem utilitzar un cable i port **VGA** per a aquesta resolució? Per quins motius tècnics (ample de banda analògic, absència d'àudio, resolució màxima recomanada) és inviable?
2. Quina versió mínima d'**HDMI** (HDMI 1.4, HDMI 2.0 o HDMI 2.1) és obligatòria per poder transmetre 4K a 120 Hz sense compressió?
3. Quins avantatges ofereix l'estàndard **DisplayPort** respecte a l'HDMI en entorns de disseny gràfic i connexió de múltiples monitors en cadena (*Daisy Chaining*)?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Connexió Pràctica del Cablejat del Panell Frontal
- **Objectiu:** Connectar correctament tots els terminals solts del panell frontal de la caixa a la placa base sense consultar el docent.
- **Material de laboratori:** Caixa de taller amb cables de panell frontal, placa base muntada, llanterna o llum de treball, manual tècnic de la placa base.
- **Passos d'execució:**
  1. Identifica els 4 connectors xicotets solts provinents de la part frontal de la caixa: `POWER SW`, `RESET SW`, `HDD LED` i `+P LED / -P LED`.
  2. Localitza a la cantonada inferior dreta de la placa base la serigrafia de `F_PANEL` o `PANEL1`.
  3. Connecta primer el polsador `POWER SW` a la posició indicada.
  4. Connecta el polsador `RESET SW`.
  5. Connecta el connector `HDD LED` assegurant que la fletxa triangular gravada al plàstic (o el cable de color) coincideix amb el pin positiu `+`.
  6. Connecta els dos terminals individuals del `POWER LED` (+ a l'esquerra, - a la dreta segons el diagrama de la placa).
  7. Endolla l'equip a la xarxa, prem el botó frontal d'engegada i verifica visualment que el LED blau/verd d'engegada s'il·lumina i que el LED roig parpelleja amb les lectures de disc.

#### Repte 2: Endreçament i Enrutament Professional de Cables (*Cable Management*)
- **Objectiu:** Millorar el flux d'aire intern de la caixa i evitar contactes accidentals de cables amb les pales dels ventiladors.
- **Material de laboratori:** Caixa d'ordinador amb components instal·lats, brides de niló de 10 cm, tisores de punta rodona o alicates de tall fi, cintes de velcro reutilitzables.
- **Passos d'execució:**
  1. Passa tot el feix de cables procedent de la font d'alimentació cap a la part posterior de la xapa de subjecció de la placa base (*backplate tray*).
  2. Fes eixir el cable gros ATX de 24 pins pel pasacables més proper al seu connector i endolla'l fermament fins a fer clic.
  3. Passa el cable EPS de 4+4 pins pel pasacables de la part superior esquerra fins a la vora de la placa base.
  4. Agrupa els cables sobrants de la font a la part inferior de la caixa (túnel de la font d'alimentació o *PSU Shroud*).
  5. Assegura els cables del panell frontal i dades SATA utilitzant brides de plàstic fixades als ancoratges de la xapa metàl·lica.
  6. Talla l'excés de plàstic de les brides amb alicates al ras per evitar arestes que puguen tallar l'operari.
  7. Gira manualment tots els ventiladors de la caixa i del dissipador per confirmar que cap cable frega amb les aspes en moviment.

#### Repte 3: Banc de Proves de Ports USB, Xarxa i Àudio de Taller
- **Objectiu:** Diagnosticar la funcionalitat i velocitat real de transferència de cadascun dels ports d'Entrada/Eixida de l'equip.
- **Material de laboratori:** Ordinador en marxa, memòria USB 3.0, auriculars amb clavilla Jack de 3,5 mm, cable de xarxa RJ-45 connectat a switch o router de taller.
- **Passos d'execució:**
  1. Connecta la memòria USB a un port USB 2.0 (negre) del panell frontal. Copia un fitxer gran de 2 GB i anota la taxa de velocitat en MB/s indicada pel sistema operatiu.
  2. Connecta la mateixa memòria a un port USB 3.0 (blau) del panell posterior. Copia el mateix fitxer i compara la velocitat. Explica la diferència obtinguda.
  3. Connecta el cable de xarxa RJ-45 al port Ethernet. Observa els dos LEDs d'estat integrats al port:
     - LED verd continu: Connexió física establerta (Enllaç Gigabit 1.000 Mbps).
     - LED taronja/ambre parpellejant: Activitat de trànsit de paquets de dades.
  4. Connecta els auriculars a la presa Jack verda posterior. Obre un arxiu d'àudio o vídeo i comprova la reproducció estèreo.
  5. Desconnecta i endolla els auriculars a la presa Jack frontal. Si no s'escolta cap so, comprova si el cable intern `HD AUDIO` està desconnectat de la placa base.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació de Cablejat i Connectors
- [ ] El connector ATX de 24 pins està inserit amb la pestanya completament travada.
- [ ] S'ha utilitzat el connector EPS (CPU) per al sòcol superior i el connector PCIe per a la gràfica.
- [ ] Els connectors del panell frontal estan ubicats a les seues clavilles exactes segons el manual de la placa.
- [ ] S'ha respectat la polaritat dels cables de LED (positiu al color, negatiu al blanc/negre).
- [ ] El cable de dades SATA està fermament inserit sense corbes pronunciades ni trencament de la forma en L.
- [ ] Tots els cables estan canalitzats i subjectats amb brides sense bloquejar el flux d'aire dels ventiladors.
- [ ] Els ports USB, d'àudio i de vídeo han superat la prova física de connexió.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI - UD5)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Identificació de Connectors Interns i de Font** | Distingeix a primera vista els connectors ATX 24p, EPS, PCIe, SATA i Molex sense cometre cap error de compatibilitat. | Identifica correctament els connectors principals i distingeix el cable EPS del PCIe amb seguretat. | Reconeix la majoria de connectors de la font però necessita verificar les etiquetes impreses. | Confon cables EPS amb PCIe o intenta forçar connectors de manera incompatible. |
| **Connexió del Panell Frontal (`F_PANEL`)** | Interpreta l'esquema de pins de la placa, respecta la polaritat dels LEDs i connecta els polsadors al primer intent. | Connecta el panell frontal amb èxit requerint només una petita revisió de la polaritat d'un LED. | Connecta els botons d'engegada i reinici amb ajuda de la guia gràfica pas a pas. | Connecta cables de manera aleatòria, inverteix pins o provoca que l'ordinador no encenga. |
| **Enrutament i Gestió del Cablejat (*Cable Management*)** | Condueix els feixos per la part posterior, empra brides amb talls nets i manté un flux d'aire excel·lent lliure d'obstacles. | Enruta els cables de manera neta i subjecta els feixos principals evitant contactes amb ventiladors. | Agrupa els cables de manera acceptable a l'interior del xassís sense interferir en la refrigeració. | Deixa cables solts i desordenats que freguen amb les aspes dels ventiladors o impedeixen tancar la tapa. |
| **Comprovació de Ports i Connexions Externes** | Diagnostica ports USB, Ethernet RJ-45, HDMI i àudio amb coneixement clar de les seues taxes de transferència. | Verifica el funcionament dels perifèrics i diferencia ports USB 2.0 i 3.0 satisfactòriament. | Comprova que els ports funcionen connectant dispositius de prova amb suport del docent. | Desconeix els tipus de ports externs o connecta cables de vídeo/àudio en preses errònies. |
