---
layout: default
title: "UT08: Pensament Computacional i Programació per Blocs — Ofimàtica i Arxiu de Documents"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD8"
---

# 🤖 UT08: Pensament Computacional i Programació per Blocs

Benvingut/da a la **Unitat Temàtica 8** d'**Ofimàtica i Arxiu de Documents (OAD)**. L'automatització de tasques administratives i el desenvolupament de solucions informàtiques requereixen una habilitat fonamental: el **pensament computacional**. En aquesta unitat aprendràs a descompondre problemes complexos en passos senzills (algorismes), dominaràs l'entorn de programació visual per blocs **Scratch** (control de coordenades X/Y a l'escenari, esdeveniments, bucles i condicionals) i experimentaràs amb la computació física i la robòtica bàsica mitjançant la plataforma **Microsoft MakeCode** i la placa microcontroladora **BBC micro:bit**.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-p-alg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-p-scr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-p-con" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-p-mbt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">PENSAMENT COMPUTACIONAL I BLOCS: ALGORISMES, SCRATCH I MICRO:BIT</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Resolució lògica de problemes, programació visual per blocs i computació física amb sensors</text>

  <!-- Bloc 1: Pensament Computacional -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-p-alg)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🧠</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Els 4 Pilars</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Mètode Algorísmic</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1. Descomposició en parts</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2. Reconeixement de patrons</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 3. Abstracció del problema</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 4. Disseny de l'algorisme</text>
  </g>

  <!-- Bloc 2: Scratch i Escenari -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-p-scr)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🐱</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Scratch 3.0</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Entorn Visual</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Escenari: 480 × 360 px</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Coordenades X (-240 a 240)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Coordenades Y (-180 a 180)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Actors, vestits i sons</text>
  </g>

  <!-- Bloc 3: Lògica i Bucles -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-p-con)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Lògica de Control</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Estructures de Codi</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Esdeveniment: Al clicar bandera</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Bucles: Repeteix / Per sempre</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Condicionals: Si ... llavors</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Variables i marcadors</text>
  </g>

  <!-- Bloc 4: MakeCode i micro:bit -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-p-mbt)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📟</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">MakeCode micro:bit</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Robòtica i Sensors</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Matriu de 25 LEDs (5×5)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Polsadors A i B físics</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Sensor de temperatura i llum</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Acceleròmetre i ràdio</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **8.1** | Introducció al pensament computacional: Algorismes i patrons | [**📘 Llegir Apartat 8.1 →**](./ut0801.html) |
| **8.2** | L'entorn de treball de Scratch: Personatges, escenaris i coordenades | [**📘 Llegir Apartat 8.2 →**](./ut0802.html) |
| **8.3** | Blocs d'esdeveniments, moviment i aspecte | [**📘 Llegir Apartat 8.3 →**](./ut0803.html) |
| **8.4** | Estructures de control a Scratch: Bucles i condicionals | [**📘 Llegir Apartat 8.4 →**](./ut0804.html) |
| **8.5** | Introducció a MakeCode i la placa micro:bit | [**📘 Llegir Apartat 8.5 →**](./ut0805.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 6:** Desenvolupa aplicacions senzilles i automatitzacions mitjançant entorns visuals de programació per blocs aplicant principis de pensament computacional.
  - *CE a:* S'han descrit els quatre pilars del pensament computacional i s'han dissenyat algorismes en pseudocodi o diagrames de flux.
  - *CE b:* S'han utilitzat instruccions d'esdeveniments, moviment, so i aspecte per a controlar actors en un escenari 2D.
  - *CE c:* S'han implementat estructures de control de flux (bucles iteratius i bifurcacions condicionals) i variables.
  - *CE d:* S'han programat plaques microcontroladores (micro:bit) per interactuar amb sensors i actuadors de l'entorn físic.

---

## 📊 Matriu Comparativa d'Estructures de Control de Programació per Blocs

| Tipus d'Estructura | Bloc Representatiu (Scratch) | Bloc Representatiu (MakeCode) | Comportament Lògic | Exemple d'Aplicació al Taller |
| :--- | :--- | :--- | :--- | :--- |
| **Esdeveniment Inicial** | `al clicar la bandera verda` | `al iniciar` / `per sempre` | Dispara el programa quan es produeix una acció de l'usuari | Arrencar el sistema o prémer el botó d'engegada |
| **Bucle Finit** | `repeteix (10) vegades` | `repetir (4) vegades` | Repeteix les instruccions un nombre exacte i fix de vegades | Parpellejar un díode LED 3 vegades per avisar d'un error |
| **Bucle Infinit** | `per sempre` | `per sempre` (*forever*) | Executa les instruccions en cicle continu sense aturar-se | Monitorar contínuament la temperatura de la CPU |
| **Condicional Simple** | `si <condició> llavors` | `si <condició> llavors` | Executa el bloc només si la prova lògica és vertadera | Si la temperatura > 80 ºC, activa el ventilador al 100% |
| **Condicional Doble** | `si <condició> si no` | `si <condició> si no` | Pren un camí d'acció si és cert, o un camí alternatiu si és fals | Si la contrasenya és correcta obre la porta; si no, fes sonar alarma |
| **Variable / Comptador** | `suma (1) a [puntuació]` | `canviar [comptador] per (1)` | Emmagatzema un valor numèric o de text que canvia en el temps | Comptar el nombre de peces que passen per una cinta |

---

## 📌 Resum Didàctic i Idees Clau

1. **Els Quatre Pilars del Pensament Computacional:**
   - **Descomposició:** Dividir un problema gran en parts xicotetes fàcils de resoldre.
   - **Reconeixement de Patrons:** Identificar similituds i repeticions en el comportament.
   - **Abstracció:** Ignorar els detalls irrellevants per centrar-se en el que és important.
   - **Disseny d'Algorismes:** Crear una seqüència ordenada de passos sense ambigüitat per assolir un objectiu.
2. **L'Escenari Cartesià de Scratch:** L'escenari mesura **480 píxels d'amplada (eix X, des de -240 a l'esquerra fins a +240 a la dreta)** i **360 píxels d'alçada (eix Y, des de -180 a baix fins a +180 a dalt)**. El centre de la pantalla és el punt exacte `(X: 0, Y: 0)`.
3. **Tipus de Blocs a Scratch:**
   - **Esdeveniments (Grocs):** Barrets d'inici que activen el codi (`en prémer la tecla espai`).
   - **Moviment (Blaus):** Desplacen i giren l'actor per la pantalla.
   - **Control (Taronges):** Decideixen quantes vegades s'executen les ordres (`repeteix`, `si... llavors`).
   - **Sensors (Blau cel):** Detecten si l'actor toca una vora, un color o llegeixen dades del teclat.
4. **Computació Física amb micro:bit:** Permet portar el codi de la pantalla al món real. La placa incorpora una matriu de **25 díodes LED vermells (5×5)** per mostrar icones i textos, dos botons físics (A i B), sensor de temperatura del xip, sensor de llum ambiental i un acceleròmetre per detectar quan es sacseja o s'inclina.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Disseny d'un Diagrama de Flux per al Diagnòstic de Reparació
Dissenya l'algorisme en forma de diagrama de flux seguint la simbologia estàndard (oval per a inici/fi, rectangle per a acció/procés, rombe per a decisió condicional Sí/No) per a la recepció d'un ordinador avariat al taller:
1. **Pas 1 (Inici):** S'endolla l'ordinador a la xarxa elèctrica i es prem el botó d'engegada.
2. **Pas 2 (Decisió 1):** *Giren els ventiladors de l'equip?*
   - Si **NO**: S'ha de verificar el cable d'alimentació i provar la font d'alimentació amb el tester ATX. Fi del diagnòstic preliminar.
   - Si **SÍ**: Passar al següent pas de verificació.
3. **Pas 3 (Decisió 2):** *Apareix imatge a la pantalla?*
   - Si **NO**: Comprovar connexió del cable HDMI, extreure i netejar mòduls de memòria RAM.
   - Si **SÍ**: Comprovar si el sistema operatiu carrega correctament sense errors de disc.
4. Dibuixa el diagrama de flux complet amb les fletxes de sentit lògic i indica clarament quines accions són processos mecànics i quines són decisions de bifurcació condicional.

#### Exercici 2: Càlcul de Coordenades Cartesianes (X, Y) a l'Escenari de Scratch
Un actor se situa inicialment a la posició central de l'escenari `(X: 0, Y: 0)` apuntant en direcció 90 graus (mirant cap a la dreta).
Executa la següent seqüència de blocs pas a pas:
1. `mou-te (120) passos`. Quina és la seua nova posició `(X, Y)`?
2. `gira cap a l'esquerra (90) graus` (ara apunta cap amunt, direcció 0 graus).
3. `mou-te (80) passos`. Quina és la seua posició final exacta en coordenades `(X, Y)`?
4. Si a continuació rep l'ordre `llisca en (2) segons a x: -100 y: -50`: en quin dels quatre quadrants de l'escenari quedarà ubicat l'actor (superior dret, superior esquerre, inferior dret o inferior esquerre)?

#### Exercici 3: Traçat de Variables i Bucles en Pseudocodi
Analitza el següent algorisme que calcula el total de caixes revisades al magatzem de components:
```
VARIABLE caixes_revisades = 0
VARIABLE caixes_defectuoses = 0

PER SEMPRE I FINS QUE caixes_revisades = 5 REPETEIX:
    caixes_revisades = caixes_revisades + 1
    SI (caixes_revisades == 2 O caixes_revisades == 4) LLAVORS:
        caixes_defectuoses = caixes_defectuoses + 1
    FI_SI
FI_REPETEIX
```
1. Fes una taula de traçat manual per a cadascuna de les 5 iteracions del bucle mostrant el valor de la variable `caixes_revisades` i `caixes_defectuoses`.
2. Quin és el valor final de totes dues variables quan s'acaba d'executar el programa?
3. Quantes vegades exactes s'ha executat la instrucció d'augmentar les caixes defectuoses?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Creació d'un Qüestionari Interactiu de Maquinari en Scratch
- **Objectiu:** Programar una aplicació interactiva que faça preguntes tècniques d'ordinadors a l'usuari, avaluï la resposta mitjançant lògica condicional i gestione un marcador de punts.
- **Material de laboratori:** Navegador web amb accés a Scratch (scratch.mit.edu) o versió Scratch Desktop instal·lada.
- **Passos d'execució:**
  1. Obre un nou projecte a Scratch i anomena'l `Test_Maquinari_OAD`.
  2. Crea una variable anomenada `Puntuacio` i una altra anomenada `Nom_Usuari`.
  3. A l'inici del programa, afegeix els blocs:
     - `al clicar la bandera verda`
     - `fixa [Puntuacio] a (0)`
     - `pregunta [Com et dius, tècnic/a?] i espera`
     - `fixa [Nom_Usuari] a (resposta)`
     - `digues (uneix [Hola, ] [Nom_Usuari]) durant (2) segons`
  4. Formula la primera pregunta tècnica:
     - `pregunta [Quin component intern s'encarrega d'executar instruccions (CPU, RAM o HDD)?] i espera`
     - Insereix el bloc de control `si <resposta = CPU> llavors`:
       - `suma (10) a [Puntuacio]`
       - `toca el so [Magic Wand] fins que acabi`
       - `digues [Correcte! Molt bona resposta.] durant (2) segons`
     - `si no`:
       - `toca el so [Bonk] fins que acabi`
       - `digues [Incorrecte! La resposta correcta era CPU.] durant (2) segons`
  5. Afegeix dues preguntes tècniques més seguint la mateixa estructura lógica.
  6. Al final del joc, fes que el personatge anuncie el resultat total assolit per l'alumne.

#### Repte 2: Joc de Recollida de Components amb Detecció de Col·lisions
- **Objectiu:** Programar un minijoc on un personatge controlat amb tecles ha de recollir peces vàlides i evitar elements danyats utilitzant sensors i generadors aleatoris.
- **Material de laboratori:** Scratch 3.0.
- **Passos d'execució:**
  1. Afegeix un actor principal a la part inferior de la pantalla (per exemple, una caixa classificadora o un tècnic).
  2. Programa el seu moviment horitzontal:
     - `quan la tecla [fletxa dreta] es premi`: `suma (15) a x`
     - `quan la tecla [fletxa esquerra] es premi`: `suma (-15) a x`
  3. Afegeix un segon actor que represente un component informàtic (per exemple, un xip de memòria RAM):
     - `al clicar la bandera verda`
     - `per sempre`:
       - `ves a x: (nombre a l'atzar entre -200 i 200) y: (160)`
       - `repeteix fins que <posició y < -150>`:
         - `suma (-5) a y`
         - `si <tocant [Caixa]?> llavors`:
           - `suma (1) a [Peces_Bones]`
           - `toca el so [Pop]`
           - `ves a x: (nombre a l'atzar entre -200 i 200) y: (160)`
  4. Executa el projecte: comprova que el mòdul de memòria cau suaument des de dalt a posicions aleatòries i que en tocar el personatge s'incrementa el marcador de peces vàlides.

#### Repte 3: Termòmetre d'Alarma de Taller amb MakeCode i BBC micro:bit
- **Objectiu:** Programar una placa microcontroladora física per monitorar la temperatura ambiental d'una sala de servidors i activar un avís visual i sonor si supera un llindar de seguretat.
- **Material de laboratori:** Entorn web de Microsoft MakeCode (makecode.microbit.org), placa micro:bit real (o el seu simulador interactiu en pantalla).
- **Passos d'execució:**
  1. Obre un projecte nou a MakeCode i anomena'l `Termometre_Taller`.
  2. Al bloc `per sempre`, afegeix les següents instruccions:
     - Crea una variable anomenada `Temperatura_Actual`.
     - `fixar [Temperatura_Actual] a [temperatura (ºC)]` (bloc de la categoria Entrada).
  3. Afegeix una estructura condicional `si ... si no`:
     - Condició: `si [Temperatura_Actual] > (28) llavors`:
       - `mostrar icona [Calavera / Aspa]` a la matriu de LEDs.
       - Reprodueix un to d'alerta acústica (*to 880 Hz durant 1/2 pulsació*).
       - Fes una pausa de 500 ms.
     - `si no`:
       - `mostrar número [Temperatura_Actual]`.
       - `mostrar icona [Cor petit / Somriure]`.
       - Fes una pausa de 2.000 ms.
  4. Al simulador de MakeCode, arrossega el termòmetre virtual per sobre de 28 ºC i comprova que s'activa l'alerta de sobreescalfament a l'instant.
  5. Descarrega el fitxer `.hex` i copia'l a la unitat USB de la placa micro:bit física connectada per cable.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació de Programació per Blocs
- [ ] S'ha desglossat el problema mitjançant un algorisme o diagrama de flux abans d'escriure codi.
- [ ] L'escenari i els personatges estan ubicats respectant el sistema de coordenades cartesianes (X, Y).
- [ ] S'han utilitzat esdeveniments adequats per iniciar accions (bandera verda, polsadors de tecles).
- [ ] S'han aplicat bucles finits i infinits (`per sempre`) sense crear bloquejos innecessaris.
- [ ] Les condicions lògiques (`si... llavors... si no`) estan ben tancades i avaluen operadors de comparació correctes.
- [ ] Les variables numèriques s'inicialitzen a 0 a l'inici del programa per evitar arrossegar valors vells.
- [ ] El programa a MakeCode/micro:bit utilitza sensors físics i respon als canvis del medi ambient.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica OAD - UT08)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Pensament Algorísmic i Diagrames** | Dissenya diagrames de flux impecables amb símbols ISO, desglossa problemes i fa traçats de variables exactes. | Dissenya esquemes algorísmics clars i comprèn la seqüència de decisions lògiques. | Representa un algorisme senzill amb suport del model de classe. | Incapaç de desglossar un problema en passos lògics o confon la seqüència d'instruccions. |
| **Coordenades i Actors a Scratch** | Domina la quadrícula X/Y (-240 a 240, -180 a 180), mou actors amb precisió matemàtica i utilitza vestits i sons. | Posiciona actors mitjançant coordenades i controla el moviment amb tecles de manera fluida. | Mou personatges per la pantalla seguint les indicacions pas a pas. | No comprèn el funcionament dels eixos X/Y i col·loca els personatges fora de la pantalla. |
| **Estructures de Control i Variables** | Construeix bucles, condicionals dobles i marcadors amb variables dinàmiques sense cap error de lògica. | Utilitza bucles `per sempre` i condicions `si... llavors` funcionals amb marcadors numèrics. | Implementa un condicional senzill seguint la plantilla de referència. | Crea bucles que pengen el programa o utilitza condicionals amb comparacions impossibles. |
| **Computació Física amb micro:bit** | Programa sensors de temperatura i llum a MakeCode, gestiona la matriu LED 5×5 i carrega el codi a la placa real. | Configura el termòmetre a MakeCode i prova el funcionament al simulador amb èxit. | Carrega un programa bàsic a la placa micro:bit seguint la guia tècnica pas a pas. | Desconeix com connectar sensors físics o no entén la relació entre el codi i el maquinari. |
