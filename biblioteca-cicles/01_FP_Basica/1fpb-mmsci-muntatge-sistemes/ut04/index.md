---
layout: default
title: "UD4: Components Interns de l'Ordinador — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD4"
---

# 💻 UD4: Components Interns de l'Ordinador

Benvingut/da a la **Unitat Didàctica 4** de MMSCI. En aquesta unitat coneixerem tots els elements que viuen a l'interior de la caixa d'un ordinador: el xassís i la seua aerodinàmica, la font d'alimentació ATX i els seus rails de voltatge, el microprocessador i el seu sistema de refrigeració per aire o líquid, els mòduls de memòria RAM DDR4/DDR5 en configuració Dual-Channel, els discs d'emmagatzematge massiu HDD i SSD NVMe, i les targetes gràfiques dedicades (GPU).

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-font" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ref" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ssd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">COMPONENTS INTERNS DEL PC: FONT ATX, REFRIGERACIÓ, RAM I SSD</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Integració de components de xassís, refrigeració tèrmica, memòria RAM i emmagatzematge</text>

  <!-- Bloc 1: Font ATX -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-font)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Font d'Alimentació</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Subministrament Elèctric</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Format ATX / SFX</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Certificació 80 PLUS</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Rail principal +12 V</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Modular vs Semimodular</text>
  </g>

  <!-- Bloc 2: CPU i Refrigeració -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ref)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">❄️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">CPU i Dissipadors</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Gestió Tèrmica (TDP)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• TDP: Watts calorífics</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Dissipadors d'aire (Heatpipes)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Kits AIO líquida (Radiador)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Pasta tèrmica (Gra d'arròs)</text>
  </g>

  <!-- Bloc 3: Memòria RAM -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-ram)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🧠</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Memòria RAM</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Mòduls DIMM</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• DDR4 (1,2V) vs DDR5 (1,1V)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Ranures A2 i B2 (Canal dual)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bus ampliat a 128 bits</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Perfils XMP / EXPO</text>
  </g>

  <!-- Bloc 4: Emmagatzematge -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ssd)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">💾</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Emmagatzematge</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">SSD NVMe vs HDD</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• M.2 NVMe: fins a 7.500 MB/s</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• SSD SATA: 550 MB/s límit</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• HDD mecànic: 150 MB/s</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Format físic 2280 per a M.2</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **4.1** | La caixa o xassís de l'ordinador i el flux d'aire (*Airflow*) | [**📘 Llegir Apartat 4.1 →**](./ut0401.html) |
| **4.2** | La font d'alimentació ATX (Potència, rails de tensió i segell 80 PLUS) | [**📘 Llegir Apartat 4.2 →**](./ut0402.html) |
| **4.3** | El microprocessador (CPU), dissipadors i pasta tèrmica | [**📘 Llegir Apartat 4.3 →**](./ut0403.html) |
| **4.4** | La memòria RAM: DDR4 vs DDR5 i configuració Dual-Channel | [**📘 Llegir Apartat 4.4 →**](./ut0404.html) |
| **4.5** | Dispositius d'emmagatzematge massiu: HDD mecànics vs SSD NVMe M.2 | [**📘 Llegir Apartat 4.5 →**](./ut0405.html) |
| **4.6** | Targetes d'expansió: Targetes gràfiques (GPU) i adaptadors | [**📘 Llegir Apartat 4.6 →**](./ut0406.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 2:** Munta i acobla equips microinformàtics bàsics, analitzant esquemes i utilitzant les eines i protocols de seguretat.
  - *CE a:* S'ha seleccionat la caixa i la font d'alimentació d'acord amb els requeriments tèrmics i elèctrics.
  - *CE b:* S'han instal·lat i fixat el processador, la pasta tèrmica i el sistema de refrigeració sense danys mecànics.
  - *CE c:* S'han col·locat els mòduls de memòria a les ranures adequades per aprofitar el Dual Channel.
  - *CE d:* S'han muntat les unitats d'emmagatzematge massiu i les targetes d'expansió.

---

## 📊 Matriu Comparativa de Components Interns Clau

| Component Intern | Paràmetres Tècnics Crítics | Tipus de Connector Físic | Velocitat / Rendiment típic | Risc Tècnic en cas de Muntatge Incorrecte |
| :--- | :--- | :--- | :--- | :--- |
| **Font d'Alimentació** | Potència (W), Eficiència (80 PLUS Bronze/Gold) | ATX 24p, EPS 8p, PCIe 8p/12VHPWR, SATA | 85% a 92% d'eficiència a mitja càrrega | Sobrecàrrega, reinicis sobtats o curtcircuit si és genèrica de baixa qualitat. |
| **Processador (CPU)** | Nuclis/Fils, Freqüència (GHz), TDP (Watts) | Socket LGA (Intel/AM5) o PGA (AM4) | Milions d'operacions per segon | Danys irreversibles als pins del socket o sobreescalfament per oblidar la pasta tèrmica. |
| **Dissipador de CPU** | Alçada de torre (mm), Nombre de *Heatpipes*, Ventilador PWM | Fixació per caragols/ancoratges a backplate | Manté la CPU per sota de 75 ºC en càrrega | *Thermal throttling* (pèrdua de rendiment) o apagada d'emergència per seguretat. |
| **Memòria RAM** | Tipus (DDR4 / DDR5), Freqüència (MHz), Latència (CL) | Ranura DIMM de 288 contactes | 3.200 MHz (DDR4) / 5.600 - 6.000 MHz (DDR5) | Pèrdua del Dual-Channel si s'instal·len en ranures consecutives en lloc d'alternes (A2/B2). |
| **SSD NVMe M.2** | Interfície PCIe 3.0 / 4.0 / 5.0, Format físic 2280 | Ranura M.2 clau M amb caragol de suport | 3.500 MB/s (PCIe 3.0) a 7.500 MB/s (PCIe 4.0) | Doblegar la placa del disc en caragolar sense el separador d'alçada metàl·lic obligatori. |
| **Disc HDD Mecànic** | Format (3,5"), Velocitat de rotació (7.200 RPM), Cau (MB) | Cable de dades SATA + Connector SATA Power | 150 a 200 MB/s de lectura seqüencial | Trencar la pestanya de plàstic en forma d'ela (L) del connector de dades SATA. |

---

## 📌 Resum Didàctic dels Punts Clau

1. **Caixa i Flux d'Aire (*Airflow*):** L'aire fred entra pel frontal i la part inferior a través de filtres antipols, i l'aire calent ix de manera natural per la part posterior i superior. S'ha de buscar una **pressió lleugerament positiva** (més cabal d'aire entrant que eixint) per evitar que la pols s'acumule per les juntures de la caixa.
2. **Font d'Alimentació ATX:** El rail més important és el de **+12 V**, que subministra l'energia principal a la CPU i a la targeta gràfica. La certificació **80 PLUS** garanteix que almenys el 80% de l'energia de la paret es transforma en corrent útil sense perdre's en forma de calor residual.
3. **CPU i Refrigeració:** El paràmetre **TDP** (*Thermal Design Power*) mesura la quantitat màxima de calor que el dissipador ha de ser capaç d'evacuar. La pasta tèrmica s'ha d'aplicar sempre en xicoteta quantitat (equivalent a la mida d'un **gra d'arròs**) al centre del processador abans de col·locar el bloc dissipador.
4. **Memòria RAM:** Els mòduls DDR4 (1,2 V) i DDR5 (1,1 V) són físicament incompatibles per la posició de la seua osca central (*notch*). Quan s'instal·len dos mòduls a les ranures **A2 i B2**, s'activa automàticament el **Dual-Channel**, duplicant l'amplada del bus de dades de 64 a 128 bits.
5. **Emmagatzematge:** Els moderns discs **SSD NVMe M.2** es connecten directament al bus PCIe assoleixen taxes de transferència de fins a 7.500 MB/s sense cap part mòbil mecànica, eliminant el coll d'ampolla dels antics discs HDD mecànics.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Dimensionament de Potència per a una Font d'Alimentació ATX
Calcula la potència mínima recomanada per a la font d'alimentació d'un equip de taller analitzant el consum màxim dels seus components:
- Processador (Intel Core i5): TDP de \(65\text{ W}\) (amb pics de potència turbo de \(120\text{ W}\)).
- Targeta gràfica dedicada (Nvidia RTX 4060): Consum màxim de \(115\text{ W}\).
- Placa base i chipset: \(35\text{ W}\).
- 2 mòduls de memòria RAM DDR5: \(5\text{ W}\) cadascun (\(10\text{ W}\) en total).
- 1 disc SSD NVMe M.2: \(8\text{ W}\).
- 1 disc dur mecànic HDD secundari: \(10\text{ W}\).
- 4 ventiladors ARGB de caixa: \(4\text{ W}\) cadascun (\(16\text{ W}\) en total).
1. Suma el consum màxim total teòric de tots els components en situació d'alta càrrega de treball.
2. Aplica un **marge de seguretat del 25%** per evitar que la font treballe al 100% de la seua capacitat (Consum total \(\times 1,25\)). Quina potència nominal en Watts ha de tenir la font comercial que seleccionem (per exemple: 450 W, 550 W, 650 W o 750 W)?
3. Si triem una font de 650 W amb segell **80 PLUS Gold** (eficiència del 90% a mitja càrrega), quants Watts consumirà realment de l'endoll de la paret quan l'equip estiga demandant 300 W reals?

#### Exercici 2: Anàlisi de la Configuració Dual-Channel en Memòria RAM
En una placa base amb 4 ranures de memòria DIMM (anomenades DIMM_A1, DIMM_A2, DIMM_B1 i DIMM_B2):
1. Quines dues ranures específiques indica el fabricant a la documentació oficial que s'han d'ocupar primer quan només instal·lem 2 mòduls de memòria RAM per garantir el correcte funcionament del **Dual Channel**?
2. Quina diferència d'amplada de bus existeix entre fer funcionar la memòria en **Single Channel** (1 mòdul de 16 GB) i en **Dual Channel** (2 mòduls de 8 GB)?
3. Si cadascun dels mòduls DDR4 funciona a una velocitat efectiva de \(3.200\text{ MHz}\), quina amplada de banda màxima teòrica en GB/s s'obté en Single Channel i quina en Dual Channel? Aplica la fórmula:
   \[
   BW = \frac{\text{Amplada de bus (bits)}}{8} \times \text{Freqüència (MHz)} \times 10^{-3}
   \]

#### Exercici 3: Càlcul de Temps de Còpia i Comparativa HDD vs SSD
Hem de transferir una imatge ISO d'instal·lació i còpia de seguretat d'un laboratori que ocupa una mida de \(60\text{ GB}\) (\(61.440\text{ MB}\)).
1. Calcula quant de temps trigarà a copiar-se la imatge en un disc dur HDD mecànic antic amb una velocitat sostinguda d'escriptura de \(120\text{ MB/s}\). Expressa el resultat en segons i converteix-lo a minuts.
2. Calcula quant de temps trigarà el mateix procés si s'utilitza un disc SSD SATA tradicional amb una velocitat d'escriptura de \(500\text{ MB/s}\).
3. Calcula quant de temps trigarà en un disc SSD NVMe M.2 PCIe 4.0 amb una taxa d'escriptura de \(4.800\text{ MB/s}\).
4. Compara els tres resultats i redacta una conclusió tècnica sobre la millora de productivitat que suposa migrar un parc informàtic a unitats SSD NVMe.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Instal·lació de CPU, Aplicació de Pasta Tèrmica i Muntatge del Dissipador
- **Objectiu:** Dominar el procediment professional de col·locació del microprocessador sense risc de dany mecànic i garantir una dissipació tèrmica òptima.
- **Material de laboratori:** Placa base amb socket LGA o PGA, processador compatible, tub de pasta tèrmica, alcohol isopropílic 99%, paper de cel·lulosa suau, dissipador de ventilador amb ancoratge per caragols.
- **Passos d'execució:**
  1. Obre la palanca de subjecció del socket de la placa base i retira el protector plàstic negre de protecció.
  2. Localitza el triangle daurat d'orientació a la cantonada del processador i fes-lo coincidir amb el triangle serigrafiat al socket de la placa.
  3. Deixa caure suaument el processador a la seua posició **sense exercir cap tipus de força vertical**. Comprova que queda perfectament pla.
  4. Baixa la palanca de fixació metàl·lica fins a enganxar-la sota la seua pestanya de bloqueig.
  5. Neteja la superfície metàl·lica superior de la CPU (*IHS*) amb un drap humit en alcohol isopropílic per eliminar greix dels dits.
  6. Aplica una gota xicoteta de pasta tèrmica al centre geomètric de l'IHS (mida d'un **gra d'arròs**, aproximadament 4 mm de diàmetre).
  7. Col·loca el bloc dissipador en posició horitzontal i caragola els caragols fent una seqüència en **creu o X** (mitja volta a cadascun de manera alterna per repartir la pressió de manera homogènia).
  8. Connecta el cable d'alimentació de 4 pins del ventilador al connector marcat obligatòriament com a `CPU_FAN` a la placa base.

#### Repte 2: Comprovació d'una Font d'Alimentació ATX amb Tester i Pont PS-ON
- **Objectiu:** Verificar que una font d'alimentació arranca i proporciona els voltatges correctes abans de connectar-la a cap component car de l'ordinador.
- **Material de laboratori:** Font d'alimentació ATX de banc, tester digital de fonts ATX (o clip metàl·lic per a pont manual), multímetre digital.
- **Passos d'execució:**
  1. Amb la font desconnectada de la xarxa elèctrica, localitza el connector principal de 24 pins.
  2. Identifica el cable verd (**PS-ON**, pin 16) i qualsevol dels cables negres de massa (**GND**).
  3. Connecta el tester digital de fonts ATX al connector de 24 pins, o insereix un pont metàl·lic entre el pin verd i un pin negre adjacent.
  4. Endolla la font a la presa de 230 V i activa l'interruptor I/O posterior. Comprova que el ventilador de la font comença a girar.
  5. Si utilitzes el tester digital: comprova a la pantalla LCD que els valors dels rails mostren:
     - Rail de +12 V: Entre 11,4 V i 12,6 V.
     - Rail de +5 V: Entre 4,75 V i 5,25 V.
     - Rail de +3,3 V: Entre 3,14 V i 3,47 V.
     - Valor de senyal **PG** (*Power Good*): Entre 100 ms i 500 ms.
  6. Si utilitzes un polímetre: mesura amb les puntes de prova la tensió entre un cable groc (+12 V) i un cable negre, i entre un cable roig (+5 V) i un cable negre d'un connector Molex.

#### Repte 3: Muntatge de Memòria RAM i Instal·lació d'Unitat SSD M.2 NVMe
- **Objectiu:** Instal·lar mòduls de memòria a les ranures correctes i fixar un disc sòlid d'alta velocitat seguint les instruccions de seguretat mecànica.
- **Material de laboratori:** Placa base de laboratori, 2 mòduls de memòria RAM DDR4 o DDR5, disc SSD M.2 format 2280, tornavís d'estrella de precisió (PH0 o PH1), polsera antiestàtica.
- **Passos d'execució:**
  1. Posa't la polsera antiestàtica connectada al xassís o a la catifa de banc.
  2. Obre les pestanyes de bloqueig de les ranures de memòria **DIMM_A2** i **DIMM_B2** de la placa base.
  3. Observa l'osca descentrada del mòdul de memòria RAM i alinea-la amb la guia de la ranura.
  4. Introdueix el mòdul verticalment i prem amb els dos polzes pels dos extrems fins que sentes un doble clic mecànic de les pestanyes que es tanquen soles.
  5. Localitza el port M.2 principal (el més proper al processador). Comprova que el separador metàl·lic està enroscat exactament a la posició marcada com a **2280** (80 mm de longitud).
  6. Insereix la targeta SSD M.2 a la ranura amb una inclinació de 30 graus fins que entre completament.
  7. Baixa suaument l'extrem posterior del disc fins a recolzar-lo sobre el separador i fixa'l amb el seu caragol xicotet sense forçar la rosca. Si la placa incorpora dissipador d'alumini M.2, retira el plàstic blau protector del pad tèrmic abans de collar-lo.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació de Components Interns
- [ ] La CPU ha quedat inserida respectant el triangle d'orientació sense cap força mecànica.
- [ ] S'ha aplicat només una gota de pasta tèrmica (mida gra d'arròs) i no s'ha escampat pels laterals.
- [ ] El dissipador s'ha caragolat amb mètode en creu i el ventilador s'ha endollat a la presa `CPU_FAN`.
- [ ] Els mòduls de memòria RAM estan col·locats a les ranures recomanades (A2 i B2) amb pestanyes ben tancades.
- [ ] El disc SSD M.2 està fixat al seu separador metàl·lic i s'ha retirat el plàstic protector del pad tèrmic.
- [ ] La font d'alimentació ha superat la prova de voltatges amb el tester o polímetre abans d'alimentar la placa.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI - UD4)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Muntatge de CPU i Dissipació Tèrmica** | Munta la CPU amb orientació impecable, dosifica la pasta tèrmica amb precisió i fixa el dissipador en creu sense dubtes. | Col·loca la CPU i el dissipador correctament amb petita correcció en la quantitat de pasta tèrmica. | Realitza el muntatge de la CPU amb guia docent i connecta el ventilador a la presa correcta. | Força el processador en una orientació errònia, danya pins o oblida posar pasta tèrmica. |
| **Instal·lació de RAM i Dual-Channel** | Identifica i utilitza les ranures A2/B2, verifica el Dual Channel i calcula l'amplada de banda teòrica exactament. | Insereix els dos mòduls a les ranures adequades i aconsegueix el clic de fixació sense problemes. | Col·loca els mòduls de memòria amb dificultat mecànica però assoleix la posició correcta. | Posa els mòduls en ranures que impedeixen el Dual-Channel o força els mòduls al revés de l'osca. |
| **Muntatge d'Emmagatzematge SSD / HDD** | Munta el disc M.2 amb el separador adequat, retira el protector tèrmic i connecta cables SATA amb seguretat. | Instal·la la unitat SSD M.2 correctament amb petites vacil·lacions sobre l'ús del dissipador. | Fixa el disc M.2 o SATA seguint la llista de comprovació pas a pas. | Trenca el caragol M.2, doblega el circuit imprès per falta de separador o danya connectors SATA. |
| **Verificació Elèctrica de la Font ATX** | Utilitza el tester ATX, mesura tots els rails de voltatge, comprova el senyal PG i dimensiona la font amb el marge del 25%. | Fa el pont PS-ON amb seguretat i verifica les tensions principals de +12V i +5V correctament. | Comprova que la font engega i mesura el voltatge principal amb supervisió. | Connecta cables de manera perillosa, desconeix els voltatges de cada color o causa curtcircuits. |
