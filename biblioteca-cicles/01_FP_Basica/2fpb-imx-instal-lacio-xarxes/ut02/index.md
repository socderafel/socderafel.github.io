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

