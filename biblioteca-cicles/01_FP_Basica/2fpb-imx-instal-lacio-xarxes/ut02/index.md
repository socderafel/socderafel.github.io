---
layout: default
title: "UD2: Medis de Transmissió: Cablejat de Parell Trenat — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD2"
next_url: "ut0201.html"
next_label: "2.1 ➡️"
---

# UD2: Medis de Transmissió: Cablejat de Parell Trenat

Tipus de cables (UTP, FTP, STP), categories (Cat 5e, 6, 6a), connectors RJ45 i keystone, codis de colors T568A i T568B, eines de taller, crimpat de cables directes i creuats i comprovació amb tester.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-utp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cat" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-col" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-tool" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">CABLEJAT DE PARELL TRENAT: TIPUS, CATEGORIES I CONECTORITZAT T568B</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Blindatges UTP/FTP/STP, especificacions Cat 5e/6/6a, pinout 8P8C i verificació de continuïtat</text>

  <!-- Bloc 1: Tipus de Blindatge -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-utp)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Blindatge EMI</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Construcció Física</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• UTP: Sense blindatge</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• FTP: Làmina global</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• STP: Malla + làmines</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Coberta: LSZH ignífuga</text>
  </g>

  <!-- Bloc 2: Categories -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-cat)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Categories Dades</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Freqüència / Rendiment</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Cat 5e: 100 MHz (1 Gbps)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Cat 6: 250 MHz (1-10G)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Cat 6a: 500 MHz (10G 100m)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Màxim segment: 100 m</text>
  </g>

  <!-- Bloc 3: Codi T568B -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-col)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🎨</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Codi T568B (8P8C)</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Ordre de Pins 1-8</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">1.TB 2.T 3.VB 4.Bl</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">5.BlB 6.V 7.MB 8.M</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Directe: B a ambdós caps</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Creuat: T568A i T568B</text>
  </g>

  <!-- Bloc 4: Eines i Verificació -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-tool)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔧</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Eines i Diagnòstic</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Equipament de Taller</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Pelacables circular</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Crimpadora RJ45 (8P)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Impactadora Keystone IDC</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Tester de LEDs 1-8</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **2.1** | **Tipus de cables de parell trenat i categories** | [**Llegir apartat →**](./ut0201.html) |
| **2.2** | **Connectors RJ45 i codis de colors T568A i T568B** | [**Llegir apartat →**](./ut0202.html) |
| **2.3** | **Eines de taller per a cablejat de dades** | [**Llegir apartat →**](./ut0203.html) |
| **2.4** | **Pràctica pas a pas: Construcció d'un cable directe T568B** | [**Llegir apartat →**](./ut0204.html) |
| **2.5** | **Diagnòstic de fallades habituals en el conectoritzat** | [**Llegir apartat →**](./ut0205.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 2.1 Tipus de cables de parell trenat i categories

El cable de **parell trenat** (*Twisted Pair*) és el medi de transmissió per cable més estès en les instal·lacions de xarxes locals d'àrea local (LAN). Està format per **huit conductors de coure aïllats**, trenats de dos en dos formant quatre parells. El trenat té una funció clau: redueix de forma dràstica les interferències electromagnètiques externes i el soroll creuat (*crosstalk*) entre parells contigus.

### Tipus de blindatge en cables de parell trenat

Segons el nivell de protecció metàl·lica contra interferències electromagnètiques (EMI), distingim:

1. **UTP (*Unshielded Twisted Pair* - Parell trenat sense blindatge):**
   - No porta cap blindatge metàl·lic; només la coberta exterior de plàstic (PVC o LSZH).
   - És el més econòmic, flexible i fàcil de manipular i instal·lar.
   - És el cable estàndard per a instal·lacions interiors d'habitatges, aules i oficines comunes.

2. **FTP o F/UTP (*Foiled Twisted Pair*):**
   - Els quatre parells van envoltats conjuntament per una làmina fina d'alumini conductora.
   - Ofereix millor immunitat davant d'interferències en entorns amb cert soroll elèctric (prop de tubs fluorescents o motors petits).

3. **STP (*Shielded Twisted Pair*) / S/FTP:**
   - Cada parell individual porta la seua pròpia làmina d'alumini, i a més el conjunt porta una malla de coure trenada exterior.
   - Màxima protecció contra interferències extremes (naus industrials, proximitat a maquinària pesada, línies elèctriques d'alta tensió).
   - Inconvenients: Molt rígid, més gruixut, car i requereix obligatòriament connectors apantallats amb presa de terra.

---

### Categories de rendiment del cable

L'estàndard ANSI/TIA defineix diferents **categories** segons la freqüència de treball i la velocitat de transmissió suportada:

| Categoria | Freqüència Màxima | Velocitat Màxima | Distància Màxima | Ús i Estat Actual |
| :--- | :--- | :--- | :--- | :--- |
| **Cat 5e** | 100 MHz | 1.000 Mbps (1 Gbps) | 100 metres | Molt comú en instal·lacions antigues; no recomanat per a noves |
| **Cat 6** | 250 MHz | 1 Gbps (10 Gbps fins a 55m) | 100 metres | **Estàndard actual mínim recomanat** en noves instal·lacions d'oficina |
| **Cat 6a** | 500 MHz | 10 Gbps (10GBASE-T) | 100 metres | Recomanat per a centres de dades, servidors i xarxes d'alt rendiment |
| **Cat 7 / 7a** | 600 - 1000 MHz | 10 Gbps / 40 Gbps | 100 m / 50 m | Industrial, requereix connectors especials (GG45 o TERA) |
| **Cat 8** | 2.000 MHz (2 GHz) | 25 Gbps / 40 Gbps | 30 metres | Ús exclusiu en centres de càlcul (interconnexió entre racks) |

> [!NOTE]
> La coberta exterior dels cables instal·lats en edificis públics (centres educatius, hospitals) ha de ser **LSZH** (*Low Smoke Zero Halogen* - lliure d'halògens), un material que en cas d'incendi no emet fums densos ni gasos tòxics asfixiants.

---

## 2.2 Connectors RJ45 i codis de colors T568A i T568B

Per interconnectar els cables de parell trenat als equips i preses s'utilitzen connectors normalitzats de 8 contactes coneguts com a **RJ45** (*Registered Jack 45*, estàndard 8P8C - 8 posicions, 8 contactes).

### Elements de connexió
- **Connector RJ45 Mascle:** És el connector transparent de plàstic amb 8 làmines metàl·liques que es crimpa als extrems dels cables de pegat (*latiguillos*) per endollar-los a l'ordinador o al switch.
- **Connector RJ45 Femella (Mòdul Keystone):** És la presa encastada que s'instal·la dins de les rosetes de paret o als panells de pegat de l'armari rack. La connexió dels cables es fa mitjançant talls per desplaçament d'aïllant (tecnologia IDC).

---

### Els quatre parells de colors normalitzats
Dins del cable hi ha 4 parells de fils amb aïllants de colors ben diferenciats:
1. Parell Blau: **Blau-Blanc** i **Blau**
2. Parell Taronja: **Taronja-Blanc** i **Taronja**
3. Parell Verd: **Verd-Blanc** i **Verd**
4. Parell Marró: **Marró-Blanc** i **Marró**

---

### Normes de connexió ANSI/TIA-568

Per ordenar els 8 fils en els pins de l'1 al 8 del connector RJ45 existeixen dues normes oficials:

| Pin (Posició) | Norma T568A | Norma T568B (Més utilitzada) |
| :---: | :--- | :--- |
| **Pin 1** | Verd-Blanc | **Taronja-Blanc** |
| **Pin 2** | Verd | **Taronja** |
| **Pin 3** | Taronja-Blanc | **Verd-Blanc** |
| **Pin 4** | Blau | **Blau** |
| **Pin 5** | Blau-Blanc | **Blau-Blanc** |
| **Pin 6** | Taronja | **Verd** |
| **Pin 7** | Marró-Blanc | **Marró-Blanc** |
| **Pin 8** | Marró | **Marró** |

> [!WARNING]
> Fixa't atentament en l'ordre! El parell blau (pins 4 i 5) queda inserit al bell mig del parell que ocupa els pins 3 i 6. Si intentes ordenar els fils "per parells seguits" (1-2, 3-4, 5-6, 7-8), el cable no funcionarà o fallarà a alta velocitat a causa del soroll creuat (*split pairs*).

### Cable directe vs Cable creuat
- **Cable Directe (*Straight-Through*):** Té la mateixa norma als dos extrems (habitualment **T568B a banda i banda**). S'utilitza per connectar dispositius de diferent tipus (PC a Switch, Switch a Router).
- **Cable Creuat (*Crossover*):** Té la norma T568A en un extrem i la norma T568B en l'altre. S'utilitzava històricament per connectar dos dispositius del mateix tipus directament (PC a PC, o Switch a Switch). En l'actualitat, la majoria de targetes incorporen tecnologia **Auto MDI-X**, que detecta el cable i inverteix la transmissió automàticament.

---

## 2.3 Eines de taller per a cablejat de dades

Per realitzar instal·lacions i manteniment de xarxes amb qualitat professional és imprescindible conèixer i manipular correctament les eines especialitzades de taller:

### 1. Pelacables de xarxa (Stripper)
- Eina giratòria amb ganiveta regulable dissenyada específicament per tallar la funda exterior de plàstic del cable UTP sense danyar l'aïllant dels 8 fils interiors de coure.
- **Forma d'ús:** S'introdueix el cable en la ranura circular, es fa girar l'eina una o dues voltes i s'extreu la funda tirant suaument.

### 2. Tisores d'electricista / telecomunicacions
- Tisores d'acer inoxidable amb tall reforçat i osques per pelar petits fils de coure. S'utilitzen per tallar el fil de cotó de desgarre (*ripcord*) i el separador central de plàstic en forma de creu que porten els cables Cat 6.

### 3. Alicates de tall diagonal
- Permeten tallar els 8 fils alineats de forma totalment recta i plana abans d'introduir-los dins del connector RJ45 mascle.

### 4. Crimpadora de connectors RJ45 (Alicates de sertir)
- Eina metàl·lica amb mordassa adaptada per a connectors RJ45 (8P8C) i sovint RJ11 (telefonia).
- En prémer la palanca, les xapes de coure dels 8 contactes del connector baixen, perforant l'aïllant de plàstic de cada fil i fent contacte elèctric directe amb el coure. Alhora, una pestanya de plàstic subjecta fortament la coberta exterior del cable per evitar tironades.

### 5. Eina d'inserció i tall (Punch-Down Tool / Impactadora Krone)
- Utilitzada per conectoritzar connectors keystone femella i panells de pegat (*patch panels*).
- En prémer sobre la ranura IDC, la ganiveta de l'eina empeny el fil de coure entre les dues fulles metàl·liques i simultàniament talla el sobrant de cable de forma neta en un sol moviment mecànic.

### 6. Comprovador o Tester de continuïtat de cables RJ45
- Dispositiu a piles format per dues peces: una unitat principal emissora (*Master*) i una unitat receptora remota (*Remote*).
- Disposa de 8 díodes LED numerats de l'1 al 8 (més un LED `G` per a terra/shield).
- Envia impulsos elèctrics successius pin a pin per verificar si tots els fils tenen continuïtat i si estan connectats en l'ordre correcte.

---

## 2.4 Pràctica pas a pas: Construcció d'un cable directe T568B

### Objectiu
Construir un cable de xarxa directe de parell trenat (patch cord) de 1,5 metres de longitud seguint la norma **T568B** als dos extrems i verificar el seu correcte funcionament amb el comprovador de cables.

### Materials i Eines
- 1,5 m de cable de xarxa UTP Cat 5e o Cat 6 flexible.
- 2 connectors RJ45 mascle (i 2 protectors de goma o caputxes si estan disponibles).
- Pelacables de xarxa.
- Tisores d'electricista o alicates de tall pla.
- Crimpadora RJ45.
- Tester de continuïtat RJ45.

---

### Procediment de muntatge pas a pas

#### Pas 1: Preparació i pelat de la coberta
1. Si utilitzes caputxes de goma, passa primer la caputxa pel cable (abans de conectoritzar!).
2. Amb el pelacables, retira aproximadament **2,5 a 3 cm** de la funda exterior de plàstic del cable UTP en un extrem.
3. Assegura't de no haver fet cap osqueta o tall als conductors de coure interns. Si veus el coure al descobert, talla i torna a començar.
4. Si el cable és Cat 6, talla arran la creu plàstica separadora central sense danyar els fils.

#### Pas 2: Destrenat i ordenació dels fils
1. Destrena cadascun dels quatre parells i allisa els 8 fils amb els dits perquè queden completament rectes.
2. Col·loca els fils en l'ordre exacte de la norma **T568B**, d'esquerra a dreta:
   1. **Taronja-Blanc**
   2. **Taronja**
   3. **Verd-Blanc**
   4. **Blau**
   5. **Blau-Blanc**
   6. **Verd**
   7. **Marró-Blanc**
   8. **Marró**
3. Subjecta els fils ben junts i plans entre el dit polze i l'índex.

#### Pas 3: Tall pla dels fils
1. Amb les alicates de tall o les tisores, talla els 8 fils d'un sol cop recte, deixant una longitud d'aproximadament **1,2 a 1,4 cm** des de la coberta exterior.
2. Els extrems de tots els fils han de quedar perfectament anivellats a la mateixa altura.

#### Pas 4: Inserció en el connector RJ45
1. Agafa el connector RJ45 amb la **pestanya de plàstic cap avall** (les 8 pistes daurades mirant cap amunt cap a tu).
2. Introdueix els fils fermament dins de les guies interiors del connector fins que toquen el fons transparent.
3. **Comprovació visual obligatòria:**
   - Mirant pel front: Comprova que els 8 fils arriben fins a la paret final transparent.
   - Mirant per la base: Comprova que la funda exterior de plàstic entra un mínim de 5-6 mm dins del connector, per sota de la falca de retenció.

#### Pas 5: Crimpat
1. Introdueix el connector dins de la cavitat 8P de la crimpadora fins al topall.
2. Prem les empunyadures de l'eina amb decisió i fermesa fins al final del recorregut.
3. Allibera la crimpadora i estira suaument del cable per comprovar que ha quedat ben ferm i subjectat.

#### Pas 6: Segon extrem i verificació
1. Repeteix exactament els passos de l'1 al 5 en l'altre extrem del cable seguint la mateixa norma T568B.
2. Connecta un extrem al port `Master` del tester de cables i l'altre extrem al port `Remote`.
3. Encén el tester en mode lent (*Slow/S*):
   - Els LEDs de l'1 al 8 s'han d'il·luminar **de forma seqüencial i simultània** en ambdues unitats:
   - `1-1, 2-2, 3-3, 4-4, 5-5, 6-6, 7-7, 8-8`.
4. Si tots els 8 llums encenen en ordre, el teu cable està perfectament construït!

---

## 2.5 Diagnòstic de fallades habituals en el conectoritzat

Durant el procés de creació de cables de xarxa en el taller, és molt habitual cometre xicotetes errades que impedeixen el funcionament del cable o fan que la connexió siga inestable. Aprendre a diagnosticar aquestes errades amb el comprovador de cables és una competència essencial d'un tècnic d'instal·lació.

### Principals errades detectades pel tester de continuïtat

#### 1. Circuit obert / Fil tallat (*Open Circuit*)
- **Símptoma al tester:** Un dels números no s'encén ni al Master ni al Remote (per exemple, s'il·luminen 1, 2, 4, 5... però el 3 roman apagat).
- **Causa típica:** El fil número 3 no va arribar fins al fons del connector en introduir-lo, o la ganiveta metàl·lica de la crimpadora no el va perforar correctament.
- **Solució:** Tallar el connector defectuós i crimpar-ne un de nou assegurant-se que tots els conductors fan topall al fons.

#### 2. Curtcircuit (*Short Circuit*)
- **Símptoma al tester:** S'encenen dos o més números al mateix temps amb poca intensitat de llum.
- **Causa típica:** Dos fils de coure s'estan tocant dins del connector perquè l'aïllant es va esquinçar o perquè hi ha humitat o brutícia metàl·lica.
- **Solució:** Tallar el connector i repetir el procés.

#### 3. Parells creuats accidentalment (*Miswire / Crossed*)
- **Símptoma al tester:** Els llums encenen desordenats. Per exemple, al Master s'encén el 1 i al Remote s'encén el 3; o el 2 amb el 6.
- **Causa típica:** Els colors es van alterar en ordenar-los abans de ficar-los al connector RJ45.
- **Solució:** Identificar quin extrem té l'ordre erroni, tallar-lo i tornar-lo a muntar seguint rigorosament la norma T568B.

#### 4. Parells dividits (*Split Pairs*)
- **Símptoma:** El tester bàsic de continuïtat pot donar "aprovat" (perquè els pins 1-1, 2-2... estan connectats), però quan el cable es connecta a un ordinador real la connexió va molt lenta, es talla o només enllaça a 10 Mbps en lloc d'1 Gbps.
- **Causa:** Els fils no es van trenar en els parells assignats (per exemple, unir el blanc del parell verd amb el fil taronja en el mateix circuit), anul·lant la protecció contra el soroll electromagnètic.

### Bones pràctiques professionals de taller
> [!TIP]
> - Mantín sempre el trenat dels parells el més a prop possible del connector (no destrenes més de 13 mm de cable).
> - Assegura't sempre que la coberta exterior de plàstic del cable queda atrapada sota la pestanya de retenció del connector; mai deixes fils individuals de colors al descobert fora del connector.
> - Guarda els sobrants de plàstic i puntes de coure a la paperera de reciclatge del taller en finalitzar la sessió.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de resistència elèctrica de bucle i atenuació en coure
Un cable de parell trenat UTP Cat 6 utilitza conductors de coure amb calibre estàndard AWG 24, amb una secció de $S \approx 0{,}205\text{ mm}^2$ i una resistivitat elèctrica de $\rho = 0{,}0172\,\Omega\cdot\text{mm}^2/\text{m}$.
1. Calcula la resistència d'un únic fil de coure d'una tirada de $80\text{ metres}$ aplicant la fórmula:
   $$R = \rho \cdot \frac{L}{S}$$
2. En una transmissió dúplex sobre un parell, el corrent va per un fil i torna per l'altre (bucle complet d'anada i tornada: $L_{\text{total}} = 2 \cdot L$). Quina és la resistència total del bucle de $80\text{ m}$?
3. Si la resistència màxima permesa per les normes ANSI/TIA per a un canal de $100\text{ metres}$ és de $18{,}8\,\Omega$, el cable de $80\text{ metres}$ calculat es troba dins dels paràmetres normatius?
4. Per què no és permès estendre una tirada de coure horitzontal a $140\text{ metres}$ sense utilitzar un repetidor o switch intermedi?

#### Exercici 2: Diagnòstic de patrons de fallada en el comprovador de cables (Tester)
En el taller d'FP Bàsica es verifiquen tres cables acabats de conectoritzar. Analitza la seqüència de LEDs observada al tester (Master vs Remote) i respon:
- **Cable 1:**
  - Master: `1 - 2 - 3 - 4 - 5 - 6 - 7 - 8`
  - Remote: `1 - 2 - [apagat] - 4 - 5 - 6 - 7 - 8`
  - *Diagnòstic:* Quin problema mecànic presenta el connector i com es corregeix?
- **Cable 2:**
  - Master: `1 - 2 - 3 - 4 - 5 - 6 - 7 - 8`
  - Remote: `3 - 6 - 1 - 4 - 5 - 2 - 7 - 8`
  - *Diagnòstic:* Quin tipus de cable s'ha construït (directe o creuat)? Justifica la resposta comparant els parells T568A i T568B.
- **Cable 3:**
  - Master: `1 - 2 - 3 - 4 - 5 - 6 - 7 - 8`
  - Remote: `1 - 2 - (3 i 4 alhora) - (3 i 4 alhora) - 5 - 6 - 7 - 8`
  - *Diagnòstic:* Quina errada elèctrica interna s'ha produït entre els conductors 3 i 4?

#### Exercici 3: Dimensionament de material i desglossament de bobines per a una planta d'oficines
Es requereix realitzar el cablejat horitzontal d'una nova oficina amb 16 llocs de treball dobles (dues preses RJ45 per lloc: 1 per a ordinador i 1 per a telèfon IP).
1. Quants metres de cable i quantes preses Keystone femella es necessiten en total si la distància mitjana des del rack fins a cada lloc és de $28\text{ metres}$, i s'aplica un coeficient de sobredimensionament del $10\%$ per a corbes i baixants de canaleta?
2. Si el cable UTP Cat 6 es ven en caixes dispensadores estàndard de $305\text{ metres}$ ($1000\text{ peus}$):
   $$\text{Nombre de caixes} = \left\lceil \frac{\text{Metres totals}}{305} \right\rceil$$
   Quantes caixes completes de cable cal demanar al proveïdor?
3. Quants metres de cable sobrant romandran en l'última caixa com a romanent per a pegats i manteniment futur?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Muntatge artesanal d'un latiguillo directe Cat6 T568B
- **Objectiu:** Construir un cable de pegat flexible d'1 metre amb connectors RJ45 mascle complint els estàndards mecànics d'alta resistència.
- **Eines:** Pelacables rotatori, tisores d'electricista, crimpadora RJ45 amb carraca i comprovador de continuïtat.
- **Guia de realització:**
  1. Pela exactament $25\text{ mm}$ de coberta sense marcar el coure.
  2. Talla la creu plàstica separadora de Cat6 arran de la coberta.
  3. Ordena els 8 conductors segons la norma **T568B** (TB, T, VB, Bl, BlB, V, MB, M).
  4. Realitza un tall net i recte a $13\text{ mm}$ de la coberta.
  5. Introdueix els conductors fins al topall frontal transparent del connector RJ45.
  6. Comprova que la funda exterior entra $5\text{ mm}$ dins del connector i queda sota la falca plàstica de pressió.
  7. Crimpa l'extrem amb força constant fins a l'alliberament automàtic de la carraca.
  8. Repeteix en l'altre extrem i verifica que la seqüència `1-8` al tester és $100\%$ contínua i sincrònica.

#### Repte 2: Conectorització d'una presa Keystone RJ45 femella IDC
- **Objectiu:** Muntar una presa femella de roseta mural o panell de pegat utilitzant tecnologia de desplaçament d'aïllant IDC.
- **Eines:** Pelacables, tisores i eina d'impacte tipus Krone (punch-down tool) regulable.
- **Procediment de taller:**
  1. Pela $35\text{ mm}$ de la coberta del cable UTP rígid d'instal·lació.
  2. Introdueix el cable per la part posterior del mòdul Keystone sense destrenar els parells.
  3. Guia cada parell de fils cap a la seua ranura IDC corresponent seguint el codi de colors **B** serigrafiat en el lateral del connector.
  4. Mantín el trenat del cable fins a menys de $6\text{ mm}$ de la fulla metàl·lica per minimitzar el soroll creuat (*near-end crosstalk*).
  5. Posiciona l'eina d'impacte perpendicularment a la ranura amb la ganiveta de tall cap a l'exterior del mòdul.
  6. Fes pressió fins a escoltar el tret mecànic de l'impactador, verificant que el fil queda connectat i el sobrant tallat a ras.
  7. Col·loca la tapa protectora antipols i encaixa el keystone en la placa mural de paret.

#### Repte 3: Control de qualitat i auditoria de rendiment amb targeta de xarxa
- **Objectiu:** Demostrar l'impacte d'un mal contacte o cablejat defectuós en la negociació de velocitat del sistema operatiu.
- **Eines:** Ordinador de taller connectat a switch Gigabit, cable fabricat per l'alumne i consola de xarxa.
- **Procediment de verificació:**
  1. Connecta el cable fabricat entre l'equip d'usuari i la presa del switch.
  2. Accedeix a les propietats de xarxa de Windows: `Configuració > Xarxa i Internet > Ethernet`.
  3. Comprova el camp **Velocitat de l'enllaç (recepció/transmissió)**:
     - Indica `1000/1000 (Mbps)`?
     - Si indica `100/100 (Mbps)`, significa que els parells Gigabit (blau o marró) presenten un mal contacte i la targeta ha degradat l'enllaç a Fast Ethernet.
  4. Executa una prova de transferència de dades d'un fitxer gran des d'un recurs compartit de l'aula i anota la velocitat mitjana obtinguda (en $\text{MB/s}$).

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He utilitzat el pelacables sense fer cap osca ni tallar l'aïllant dels conductors de coure interns.
- [ ] He respectat rigorosament l'ordre de colors T568B abans de crimpar.
- [ ] La funda exterior del cable queda fixada fermament per la falca de plàstic dins del connector RJ45.
- [ ] El comprovador de cables (tester) mostra la seqüència completa del pin 1 al pin 8 sense fallades.
- [ ] He deixat la presa Keystone neta, amb els sobrants tallats a ras i sense destrenar en excés els parells.
- [ ] He recollit els sobrants de plàstic i coure al contenidor de reciclatge corresponent.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Identificació de cables i normes** | Reconeix sense dubte blindatges (UTP/FTP/STP), categories i la diferència entre T568A i T568B. | Identifica correctament categories i codis de colors amb xicotets dubtes en blindatges. | Reconeix la norma T568B i la categoria bàsica del cable utilitzat. | Confon les categories de cable i no sap distingir entre les normes T568A i T568B. |
| **Destresa en el crimpat de connectors RJ45** | Pela el cable amb precisió, alinea els fils perfectament i assegura la coberta sota la falca amb acabat professional. | Crimpa amb èxit mantenint la coberta dins del connector amb xicotets desajustaments estètics. | Construeix el cable funcionalment encara que la coberta queda lleugerament fluixa o poc introduïda. | Danya els conductors, inverteix colors o deixa els fils a l'aire fora del connector. |
| **Conectorització de mòduls Keystone (IDC)** | Empra l'eina d'impacte amb destresa, manté el trenat mínim i talla el sobrant sense danyar la carcassa. | Conectoritza el mòdul correctament respectant el codi de colors B i el tall de sobrants. | Insereix els conductors correctament però destrena excessivament el cable abans de l'impacte. | Talla conductors interns, utilitza colors erronis o trenca les ranures IDC per pressió incorrecta. |
| **Verificació i resolució d'avaries amb tester** | Interpreta a l'instant qualsevol patró de LEDs del tester (obert, creuat, curtcircuit) i aplica la solució ràpidament. | Detecta fallades de continuïtat amb el tester i corregeix el connector afectat. | Utilitza el tester per comprovar si el cable funciona però necessita suport per interpretar patrons erronis. | No sap utilitzar el tester ni interpretar la seqüència de llums LED. |
| **Càlcul i dimensionament de canalitzacions** | Resol els càlculs de resistència, necessitats de cable i caixes sense errades matemàtiques. | Calcula les necessitats de metres de cable i nombre de caixes de forma correcta. | Realitza càlculs bàsics amb dificultats per aplicar el coeficient de sobredimensionament. | Incapaç de calcular les necessitats de metres o caixes per a una instal·lació. |

