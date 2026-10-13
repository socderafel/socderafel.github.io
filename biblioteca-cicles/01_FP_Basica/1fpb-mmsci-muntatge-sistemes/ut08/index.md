---
layout: default
title: "UD8: Gestió Logística, Inventari i Embalatge — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD8"
---

# 📦 UD8: Gestió Logística, Inventari i Embalatge de Components

Benvingut/da a la **Unitat Didàctica 8** de MMSCI. En aquest bloc temàtic aprendràs com funciona la gestió professional del magatzem i el taller d'informàtica: la utilització de sistemes d'etiquetatge unívocs (codis de barres 1D, codis QR 2D i tags RFID), el maneig de lectors òptics de mà i impressores tèrmiques de transferència, la protecció de components sensibles mitjançant materials antiestàtics homologats (bosses de blindatge Faraday platejades i plàstics de bombolles rosa), el control d'estoc amb mètode FIFO i els protocols de trasllat segur d'equips microinformàtics.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-eti" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-inv" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-emb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-tra" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">LOGÍSTICA DE TALLER: INVENTARI, EMBALATGE ESD I TRANSPORT</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Traçabilitat d'actius TI, protecció Faraday contra descàrregues i trasllat segur d'equips</text>

  <!-- Bloc 1: Etiquetatge -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-eti)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏷️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Sistemes d'Etiquetes</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Identificació d'Actius</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Codi de barres 1D (Code 128)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Codis QR 2D (Gran densitat)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Tags RFID sense contacte</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Impressores tèrmiques</text>
  </g>

  <!-- Bloc 2: Inventari i Estoc -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-inv)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📋</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Inventari i Estoc</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Gestió de Magatzem</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Mètode FIFO (Rotació)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Recepció i revisió d'albarans</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Software: GLPI / Snipe-IT</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Registre de números de sèrie</text>
  </g>

  <!-- Bloc 3: Embalatge ESD -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-emb)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Embalatge Antiestàtic</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Protecció de Silici</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Bosses platejades (Faraday)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Bombolles rosa dissipatives</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Escuma negra conductora</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Prohibit plàstic comú blanc</text>
  </g>

  <!-- Bloc 4: Transport Segur -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-tra)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🚚</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Transport d'Equips</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Seguretat en Ruta</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Desmuntar GPU pesades</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Posició horitzontal de caixes</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Protecció vidres trempats</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Caixa original amb porexpan</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **8.1** | Finalitats i sistemes d'etiquetatge (Codis de barres 1D, QR i RFID) | [**📘 Llegir Apartat 8.1 →**](./ut0801.html) |
| **8.2** | Eines, impressores d'etiquetes i programari d'inventari (GLPI, Snipe-IT) | [**📘 Llegir Apartat 8.2 →**](./ut0802.html) |
| **8.3** | Embalatge i protecció de components sensibles (Bosses ESD platejades) | [**📘 Llegir Apartat 8.3 →**](./ut0803.html) |
| **8.4** | Recepció de mercaderies, emmagatzematge i control d'estoc (Albarans, FIFO) | [**📘 Llegir Apartat 8.4 →**](./ut0804.html) |
| **8.5** | Precaucions i procediments en el trasllat i transport d'equips | [**📘 Llegir Apartat 8.5 →**](./ut0805.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 6:** Emmagatzema equips, perifèrics i consumibles, classificant-los d'acord amb criteris establerts i garantint la seguretat del material.
  - *CE a:* S'han identificat els components mitjançant sistemes d'etiquetatge homologats.
  - *CE b:* S'han seleccionat els materials d'embalatge i protecció antiestàtica adequats a cada tipus de component.
  - *CE c:* S'ha verificat la recepció de comandes contrastant la mercaderia amb l'albarà de lliurament.
  - *CE d:* S'han aplicat les normes de seguretat en el transport i manipulació d'equips complets.

---

## 📊 Matriu Comparativa de Materials d'Embalatge i Protecció de Maquinari

| Material d'Embalatge | Propietat Física / Blindatge | Components que Protegeix | Avantatge Tècnic Principal | Risc Greu si S'Omet o S'Utilitza Material Comú |
| :--- | :--- | :--- | :--- | :--- |
| **Bossa Platejada (*Shielding Bag*)** | **Gàbia de Faraday** multicapa (Alumini + Polièster) | Plaques base, targetes gràfiques, mòduls RAM | Bloqueja qualsevol camp electroestàtic exterior | Crema de xips CMOS per fricció electroestàtica durant el transport. |
| **Bossa / Bombolla Rosa Dissipativa** | Plàstic tractat amb agent surfactant antiestàtic | Carcasses, discs durs HDD, cables d'alimentació | No genera càrregues estàtiques per fregament | El plàstic de bombolles transparent habitual acumula milers de volts. |
| **Escuma Negra Conductora** | Poliuretà carregat amb partícules de carboni | Processadors (pins PGA/LGA), circuits integrats BIOS | Cortcircuita tots els pins al mateix potencial (0 V) | Doblegar o cremar els pins per descàrregues en fregar amb caixes normals. |
| **Porexpan Estructurat (EPS)** | Amortiment mecànic d'impactes | Torres completes, xassís d'ordinador, monitors | Absorbeix cops forts i caigudes durant el repartiment | Danys físics al xassís, deformació del bastidor metàl·lic o trencaments. |
| **Escuma d'Instapak (Inflable)** | Embalatge químic d'escuma expansiva a mida | Interior de la caixa al voltant de la targeta gràfica | Evita que la GPU o el dissipador vibren en el trasllat | La targeta gràfica parteix la ranura PCIe x16 de la placa amb el moviment. |

---

## 📌 Resum Didàctic dels Punts Clau

1. **Sistemes d'Etiquetatge:**
   - **Codis de barres 1D (Code 128 / EAN-13):** Permeten llegir números de sèrie de manera ràpida amb un lector làser d'infrarojos.
   - **Codis QR 2D:** Poden emmagatzemar centenars de caràcters (enllaç a la fitxa d'inventari, data de compra, departament i característiques completes).
   - **Etiquetes RFID (*Radio Frequency Identification*):** Utilitzen un xip i una antena minúscula que es llegeixen per ones de ràdio sense necessitat de línia de visió directa, permetent inventariar aules senceres en segons.
2. **Control d'Estoc i FIFO:** El criteri **FIFO** (*First In, First Out* - El primer que entra és el primer que surt) garanteix que els components no es queden obsolets al magatzem i que no caduquen les garanties comercials dels fabricants abans de ser instal·lats.
3. **Materials ESD:** El plàstic convencional d'embalatge és un dels pitjors enemics dels components electrònics perquè genera milers de volts per fregament. Tota peça electrònica ha de viatjar dins d'una **bossa platejada de blindatge Faraday** o protegida amb **plàstic de bombolles rosa antiestàtic**.
4. **Transport Segur d'Equips:** Les torres amb targetes gràfiques modernes pesades (més de 1,5 kg) mai han de viatjar instal·lades sense subjecció interna; s'han de desmuntar o immobilitzar amb escuma expansiva. Els ordinadors de sobretaula han de viatjar preferentment **tombats en posició horitzontal** perquè el pes del dissipador no exercisca palanca sobre la placa base durant les frenades del vehicle.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Gestió d'Estoc de Magatzem amb Criteri FIFO (*First In, First Out*)
Al magatzem del departament d'informàtica disposem d'un historial de recepció de discs sòlids SSD de 1 TB:
- **Lot 1:** 6 unitats rebudes el 15 de gener a un cost de 65 €/unitat (Garantia del fabricant fins a gener de l'any vinent).
- **Lot 2:** 10 unitats rebudes el 20 de març a un cost de 58 €/unitat (Garantia fins a març de l'any vinent).
- **Lot 3:** 8 unitats rebudes el 10 d'octubre a un cost de 52 €/unitat (Garantia fins a octubre de l'any vinent).
1. Arriba una comanda de treball per muntar 12 ordinadors nous a l'aula d'ofimàtica. Quines unitats exactes de quins lots s'han d'agafar aplicant estrictament el criteri **FIFO**?
2. Quants discs quedaran en estoc al magatzem un cop lliurats els 12 discs i a quin lot pertanyen?
3. Per què és crucial el criteri FIFO en informàtica respecte a la garantia i la devaluació de preus dels components? Què passaria si el tècnic agafara sempre les caixes de dalt de tot de l'últim lot rebut?

#### Exercici 2: Disseny d'un Esquema de Codificació d'Actius d'Inventari
Per portar el control d'un parc de 300 equips informàtics en un institut, es requereix dissenyar un sistema d'etiquetatge unívoc amb codi alfanumèric de 10 caràcters per a enganxar a cada ordinador i perifèric:
```
Estructura proposada: [EDIF(2)] - [AULA(2)] - [DISP(2)] - [NUM(4)]
Exemple: "01-14-PC-0025" (Edifici 1, Aula 14, Ordinador Torre, Número 25)
```
1. Defineix els codis de 2 lletres per a 5 tipus de dispositius diferents: Ordinador de sobretaula (PC), Monitor (MO), Portàtil (LP), Impressora (PR) i Projector (PJ).
2. Genera el codi d'actiu complet per al monitor número 12 ubicat a l'aula 05 de l'edifici 2.
3. Quins avantatges aporta incloure a l'etiqueta adhesiva un **codi QR** imprès al costat del codi alfanumèric quan el tècnic fa la revisió anual amb una tauleta o telèfon mòbil?

#### Exercici 3: Recepció i Verificació d'Albarà de Lliurament Comercial
Una empresa de transports lliura al taller un palet amb 4 caixes grans. L'albarà de transport especifica el següent contingut:
- 10 Plaques base ATX B550.
- 10 Processadors Ryzen 5 (caixes amb precinte de fàbrica intacte).
- 20 Mòduls de memòria RAM DDR4 de 8 GB.
- 10 Fonts d'alimentació ATX 650 W.
1. Durant la descàrrega, el tècnic observa que una de les caixes de plaques base presenta un forat lateral causat per un cop de carretó i el precinte de seguretat està trencat. Quina acció obligatòria ha de fer constar el tècnic per escrit a l'albarà abans de signar la recepció al transportista?
2. Què s'ha de fer immediatament si en obrir la caixa danyada es detecta que un dels components interiors té la placa partida?
3. Un cop validat el material, quines dades fonamentals de cada caixa s'han d'introduir a la base de dades d'inventari abans de col·locar el material a les prestatgeries del magatzem?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Generació, Impressió i Lectura d'Etiquetes d'Inventari
- **Objectiu:** Crear etiquetes adhesives d'identificació d'actius amb codis de barres i comprovar la seua lectura amb pistola làser.
- **Material de laboratori:** Ordinador amb programari de disseny d'etiquetes (o generador web gratuït de codis de barres Code 128 / QR), impressora d'etiquetes tèrmica (o fulls d'etiquetes adhesivades A4), lector òptic de mà USB.
- **Passos d'execució:**
  1. Obre el generador d'etiquetes i crea una etiqueta que continga:
     - Logotip o nom del centre educatiu.
     - Codi d'actiu textual (per exemple: `IES-INF-PC01`).
     - Codi de barres Code 128 o codi QR que continga aquesta mateixa cadena.
     - Número de sèrie real del fabricant de l'ordinador.
  2. Imprimeix l'etiqueta en paper adhesiu.
  3. Enganxa l'etiqueta a la part posterior o superior del xassís de l'ordinador (en una zona plana i protegida de rascades).
  4. Connecta el lector de codis de barres per USB a un ordinador. Obre un document de text en blanc o full de càlcul.
  5. Dispara el feix làser sobre l'etiqueta a una distància d'uns 10 a 15 cm. Comprova que el codi es llegeix a l'instant i s'escriu a la pantalla acompanyat d'un salt de línia.

#### Repte 2: Embalatge Antiestàtic i Preparació d'un Component per a Enviament
- **Objectiu:** Empaquetar una placa base o targeta gràfica danyada per a la seua tramesa en garantia (RMA) al servei tècnic oficial.
- **Material de laboratori:** Placa base o targeta gràfica, bossa platejada de blindatge Faraday amb tancament adhesiu ESD, plàstic de bombolles rosa antiestàtic, caixa de cartó rígid de canal doble, cinta d'embalar.
- **Passos d'execució:**
  1. Retira la pila de botó CR2032 de la placa si la normativa de transport aeri ho requereix.
  2. Col·loca el protector plàstic negre de protecció del sòcol LGA per evitar que es dobleguen els pins en el camí.
  3. Fica la placa base dins de la **bossa platejada de blindatge antiestàtic** i tanca la pestanya amb cinta adhesiva ESD groga (mai amb cinta aïllant que puga deixar residus).
  4. Embolica la bossa amb dues voltes de plàstic de bombolles rosa antiestàtic.
  5. Col·loca una capa d'amortiment al fons de la caixa de cartó.
  6. Fica el component al centre de la caixa i omple tots els buits laterals amb material de farciment per evitar que es mogui durant el transport.
  7. Tanca les solapes de la caixa en forma d'H amb cinta d'embalar resistent i enganxa l'etiqueta d'enviament amb la indicació "MOLT FRÀGIL - CONTÉ COMPONENTS ELECTRÒNICS".

#### Repte 3: Immobilització i Preparació d'una Torre Completa per a Mudança de Sala
- **Objectiu:** Aplicar el protocol de protecció mecànica d'una torre completa abans de carregar-la en un vehicle o carro de trasllat.
- **Material de laboratori:** Torre de sobretaula amb targeta gràfica dedicada de doble ventilador, tornavís d'estrella, caixes d'ordinador amb motllures de porexpan o escuma.
- **Passos d'execució:**
  1. Desendolla tots els cables externs (alimentació, vídeo, perifèrics).
  2. Obre la tapa lateral de la caixa i inspecciona la targeta gràfica:
     - Si la GPU és pesada (ocupa 2 o 3 ranures d'expansió), **desmunta-la completament**: descaragola els cargols de subjecció del xassís, allibera la pestanya de la ranura PCIe x16 i desa-la a la seua bossa antiestàtica individual.
     - Si la GPU és lleugera, assegura que té tots els cargols collats fermament al xassís.
  3. Si la caixa disposa de panell lateral de **vidre trempat**, protegeix les 4 cantonades amb cantoneres de cartó i embolica el panell amb film transparent per evitar trencaments per torsió.
  4. Fica la torre dins de la seua bossa plàstica protectora i encaixa les dues peces motllurades de porexpan a la part superior i inferior.
  5. Fica el conjunt dins de la caixa de cartó original i precinta-la.
  6. En carregar la caixa al vehicle, col·loca-la **en posició horitzontal o assegurada amb corretges** perquè no puga bolcar en les corbes.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació de Logística i Embalatge
- [ ] S'ha utilitzat una bossa de blindatge Faraday platejada per a qualsevol component de circuit imprès.
- [ ] No s'ha utilitzat mai plàstic de bombolles transparent comú en contacte directe amb xips electrònics.
- [ ] S'ha col·locat el protector mecànic del socket abans d'embalar la placa base.
- [ ] L'etiqueta d'actiu inclou codi alfanumèric llegible i codi de barres/QR sense defectes d'impressió.
- [ ] El lector làser de codis de barres llegeix l'etiqueta de manera immediata i sense errors de caràcters.
- [ ] S'ha desmuntat o immobilitzat la targeta gràfica abans del transport de la torre per evitar danys a la ranura PCIe.
- [ ] L'albarà de mercaderies ha estat cotejat físicament comprovant precintes de fàbrica i absència de cops.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI - UD8)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Sistemes d'Etiquetatge i Identificació** | Dissenya esquemes de codi d'actius unívocs, imprimeix codis 1D/QR perfectes i gestiona lectors òptics amb agilitat. | Genera etiquetes adhesives correctes amb codi de barres i utilitza el lector làser amb eficàcia. | Imprimeix etiquetes bàsiques d'actiu i les llegeix amb el lector seguint el protocol. | No sap generar un codi de barres ni utilitzar el lector òptic per inventariar components. |
| **Gestió d'Estoc i Albarans (FIFO)** | Aplica el mètode FIFO amb rigor matemàtic, coteja albarans i documenta reclamacions de transport amb professionalitat. | Resol la rotació d'estoc per dates de garantia i verifica albarans de comandes amb èxit. | Comprèn el concepte de FIFO i revisa les caixes rebudes amb supervisió docent. | Ignora la rotació d'estoc de magatzem o signa albarans sense revisar l'estat del material. |
| **Embalatge Antiestàtic i Protecció ESD** | Selecciona bosses platejades de blindatge Faraday, bombolla rosa i escuma conductora sense cap dubte tècnic. | Empra els materials d'embalatge ESD correctes per a cada component amb cura i ordre. | Utilitza la bossa platejada quan se li indica per desar plaques i targetes. | Utilitza plàstic comú que genera electricitat estàtica o deixa components delicats desprotegits. |
| **Protocol de Transport Segur de Torres** | Desmunta targetes gràfiques pesades, protegeix vidres trempats i empaqueta caixes amb motllures de seguretat. | Prepara la torre per al transport immobilitzant elements solts i emprant la caixa de cartó adequada. | Col·loca la torre a la seua caixa amb porexpan amb ajut dels companys de taller. | Transporta torres amb targetes gràfiques soltes, rep cops a les cantonades o trenca panells de vidre. |
