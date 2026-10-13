---
layout: default
title: "UD1: Desenvolupament de Programari i Cicle de Vida — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD1"
---

# UD1: Desenvolupament de Programari i Cicle de Vida

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-sw" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-life" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-agile" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-qual" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed1)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DESENVOLUPAMENT DE PROGRAMARI I CICLE DE VIDA</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Fonaments del programari, fases de desenvolupament, models tradicionals en cascada i metodologies àgils Scrum i Kanban</text>

  <!-- Bloc 1: Programari & Codi -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sw)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">💻</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Programari &amp; Codi</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Tipologia &amp; Traducció</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Codi font vs Executable</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Compilació vs Interpretació</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bytecode i JVM (Java)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Nivells d'abstracció</text>
  </g>

  <!-- Bloc 2: Fases & Cicle de Vida -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-life)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cicle de Vida</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Models Tradicionals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Requisits &amp; Anàlisi</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Disseny &amp; Implementació</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Model en cascada (Waterfall)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Model en espiral de Boehm</text>
  </g>

  <!-- Bloc 3: Metodologies Àgils -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-agile)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Mètodes Àgils</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Scrum &amp; Kanban</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• El Manifest Àgil (2001)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Sprints, Rols &amp; Cerimònies</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Product Backlog &amp; User Stories</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Kanban: límits WIP i flux</text>
  </g>

  <!-- Bloc 4: Qualitat & Costos -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-qual)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📈</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Qualitat &amp; Costos</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Enginyeria de Software</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Cost de defectes de Boehm</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Requisits funcionals (RF)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Requisits no funcionals (RNF)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Gestió del Deute Tècnic</text>
  </g>
</svg>
</div>

L'**Enginyeria del Programari** aplica principis científics i d'enginyeria per a desenvolupar aplicacions informàtiques fiables, escalables i sostenibles. En aquesta unitat s'introdueixen els conceptes fonamentals del programari, els mecanismes de traducció de codi, les fases del **Cicle de Vida del Desenvolupament de Programari (SDLC)**, els models clàssics predictius en cascada i les metodologies adaptatives i àgils modernes (**Scrum** i **Kanban**).

---

## 1.1 Concepte de programari, tipologia i traducció del codi font

El **programari (*software*)** és el conjunt de programes, instruccions, procediments i documentació associada que permeten al maquinari informàtic realitzar tasques concretes.

### Del codi font a l'execució en el processador
El processador (CPU) només és capaç d'executar instruccions binàries en codi màquina (`0`s i `1`s). Perquè els programadors escriguen codi entenedor en llenguatges d'alt nivell (Java, C++, Python), és necessari un procés de traducció:

```
[ Codi Font (.java / .c) ]
           │
           ▼
[ Compilador / Traductor ] ───▶ Errors sintàctics / d'anàlisi
           │
           ▼
[ Bytecode (.class) o Codi Màquina (.obj / .exe) ]
           │
           ▼
[ Execució: Màquina Virtual (JVM) o CPU Nativa ]
```

### Models de traducció i execució
1. **Llenguatges Compilats (C, C++, Rust, Go):** El codi font es tradueix íntegrament a codi màquina específic de l'arquitectura (x86_64, ARM) abans de l'execució. Ofereixen el màxim rendiment, però els executables no són portables entre sistemes operatius diferents.
2. **Llenguatges Interpretats (Python, JavaScript, PHP, Ruby):** Un intèrpret llegeix, tradueix i executa el codi línia per línia en temps real. Són molt flexibles i portables, però tenen un rendiment inferior.
3. **Llenguatges Híbrids o Intermedis (Java, C#):** El compilador tradueix el codi font a un format intermedi universal anomenat **bytecode** (`.class` en Java). Posteriorment, una **màquina virtual (JVM o CLR)** executa aquest bytecode utilitzant un compilador *Just-In-Time* (JIT) que el converteix a codi màquina al vol:
   > *"Write Once, Run Anywhere"* (Escriu una vegada, executa a qualsevol lloc).

---

## 1.2 Fases del Cicle de Vida del Desenvolupament de Programari (SDLC)

Tot projecte de programari evoluciona a través d'una seqüència d'etapes ordenades:

1. **Enginyeria de Requisits i Anàlisi:** Definició precisa del que el sistema ha de fer. Es distingeixen:
   - **Requisits Funcionals (RF):** Comportaments o accions que el sistema ha de realitzar (Ex. "El sistema permetrà pagar amb targeta").
   - **Requisits No Funcionals (RNF):** Restriccions de qualitat, seguretat, rendiment o usabilitat (Ex. "El temps de resposta no superarà els 200 ms").
2. **Disseny del Sistema i d'Arquitectura:** Definició de com s'estructurarà la solució (diagrames de classes UML, arquitectura en capes, model de base de dades).
3. **Implementació o Codificació:** Escriptura del codi font en els llenguatges i entorns de desenvolupament seleccionats.
4. **Verificació i Proves (QA):** Execució de proves unitàries, d'integració i de sistema per detectar i corregir defectes.
5. **Desplegament i Posada en Producció:** Instal·lació de l'aplicació en els servidors o dispositius dels usuaris finals.
6. **Manteniment i Evolució:** Correcció d'errors imprevistos (*manteniment correctiu*), adaptació a nous entorns (*adaptatiu*) i addició de noves funcionalitats (*perfectiu*).

---

## 1.3 Models clàssics de cicle de vida

### 1. El Model en Cascada (*Waterfall Model*)
Proposat per Winston Royce (1970). És un model **seqüencial i rígid**: cada fase només s'inicia quan l'anterior ha finalitzat i s'ha aprovat formalment.
- **Avantatges:** Molt clar, documentació exhaustiva i fàcil de planificar quan els requisits són completament estables.
- **Inconvenients:** No admet canvis fàcilment. El client no veu cap producte executable fins al final del projecte; si hi ha un error als requisits inicials, el cost de corregir-lo és desorbitat.

### 2. El Model en Espiral de Boehm
Combina la naturalesa iterativa amb l'anàlisi sistemàtica de **riscos**. A cada volta de l'espiral es planifica, s'analitzen els riscos crítics, es desenvolupa un prototip i s'avalua amb el client abans de continuar.

---

## 1.4 Metodologies Àgils: El Manifest Àgil, Scrum i Kanban

A finals dels anys 90, la rigidesa dels models tradicionals va portar a la creació del **Manifest Àgil (2001)**, basat en 4 valors fonamentals:
1. **Els individus i les interaccions** per sobre dels processos i les eines.
2. **El programari que funciona** per sobre de la documentació exhaustiva.
3. **La col·laboració amb el client** per sobre de la negociació contractual.
4. **La resposta davant del canvi** per sobre del seguiment cec d'un pla.

### El marc de treball Scrum
Scrum és el marc àgil més utilitzat per a projectes complexos. Es basa en iteracions curtes i de durada fixa anomenades **Sprints** (habitualment de 2 a 4 setmanes):

#### Rols en Scrum:
- **Product Owner (PO):** Defineix la visió del producte, prioritza el catàleg de tasques (*Product Backlog*) i representa els interessos dels usuaris/clients.
- **Scrum Master (SM):** Líder facilitador; assegura que l'equip comprengui i apliqui Scrum i elimina els obstacles (*impediments*) que frenen l'equip.
- **Equip de Desenvolupament (*Developers*):** Professionals multidisciplinaris i autoorganitzats que construeixen l'increment de programari a cada Sprint.

#### Esdeveniments (Cerimònies):
- **Sprint Planning:** Planificació del treball a realitzar durant l'Sprint seleccionant ítems del Product Backlog.
- **Daily Scrum:** Reunió diària de màxim 15 minuts per sincronitzar l'avanç i detectar bloquejos.
- **Sprint Review:** Demostració pública del programari funcional al Product Owner i als interessats.
- **Sprint Retrospective:** Reunió d'autoavaluació interna per a la millora contínua del procés de l'equip.

### El mètode Kanban
Originat en el sistema de producció de Toyota, Kanban se centra en la **visualització del flux de treball** i en la limitació del treball en curs:
- **Tauler Kanban:** Columnes que reflecteixen els estats de les tasques (*Pendent / To Do*, *En Curs / In Progress*, *En Proves / Testing*, *Fet / Done*).
- **Límit WIP (*Work In Progress Limit*):** Restricció que impedeix iniciar noves tasques si una columna supera el nombre màxim permès, evitant colls d'ampolla.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: La corba de cost de correcció de defectes de Boehm
Barry Boehm va formular que el cost de detectar i corregir una fallada de programari creix de manera aproximadament exponencial a mesura que avança el cicle de vida del projecte.
Considera un factor d'escala basat en les següents dades relatives:
- En fase de **Requisits**: Cost base $C_0 = 120\text{ €}$ per defecte detectat.
- En fase de **Disseny**: El cost es multiplica per un factor $\times 3$.
- En fase de **Codificació**: El cost es multiplica per un factor $\times 10$.
- En fase de **Proves internes (QA)**: El cost es multiplica per un factor $\times 30$.
- En fase de **Producció (Client final)**: El cost es multiplica per un factor $\times 100$.

1. Calcula el cost econòmic individual de corregir un defecte greu en cadascuna de les 5 fases.
2. Si un projecte de 6 mesos té 25 defectes no detectats en la fase de requisits que acaben arribant directament a la fase de producció amb clients reals, calcula el sobrecost econòmic total que patirà l'empresa enfront d'haver invertit en una bona fase inicial d'anàlisi.

#### Exercici 2: Càlcul de velocitat de l'equip (*Velocity*) i planificació de lliuraments en Scrum
Un equip de desenvolupament format per 5 programadors planifica el llançament d'una nova aplicació web.
- El catàleg del producte (*Product Backlog*) té un total estimat de $T = 240\text{ Story Points (SP)}$.
- Durant els darrers 4 Sprints (de 2 setmanes de durada cadascun), l'equip ha completat satisfactòriament les següents quantitats de punts d'història:
  - Sprint 1: $26\text{ SP}$
  - Sprint 2: $31\text{ SP}$
  - Sprint 3: $28\text{ SP}$
  - Sprint 4: $35\text{ SP}$

1. Calcula la **Velocitat Mitjana ($V$)** de l'equip en punts d'història per Sprint:
   $$V = \frac{\sum_{i=1}^{n} SP_i}{n}$$
2. Calcula el nombre estimat d'Sprints complets necessaris per finalitzar el projecte:
   $$\text{Sprints necessaris} = \left\lceil \frac{T}{V} \right\rceil$$
3. Determina la durada total del projecte en setmanes naturals i mesos estimats (considerant 4 setmanes per mes).

#### Exercici 3: La Llei de Little en un flux Kanban
En un tauler Kanban d'un departament de desenvolupament, les mètriques d'eficiència indiquen que l'equip és capaç d'entregar una mitjana de $\lambda = 8\text{ funcionalitats per setmana}$ (*Throughput* o Rendiment).
La direcció vol mantenir un límit de treball en curs de $WIP = 16\text{ tasques simultànies}$ en el tauler.

- Segons la **Llei de Little**:
  $$WIP = \lambda \times W$$
  on $W$ és el **Temps Mitjà de Cicle (*Cycle Time*)** que triga una tasca des que comença fins que es finalitza.

1. Calcula el temps mitjà de cicle $W$ en setmanes.
2. Si la direcció decideix augmentar sense control les tasques en curs a $WIP = 40$ sense ampliar l'equip (mantenint $\lambda = 8$), calcula com es veurà afectat el temps mitjà que triga cada client a rebre una nova funció.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Especificació de Requisits Funcionals i No Funcionals
- **Objectiu:** Redactar un document breu de requisits per a una plataforma de préstec de llibres d'un institut.
- **Tasques a desenvolupar:**
  1. Redacta exactament **4 Requisits Funcionals (RF)** utilitzant la nomenclatura formal:
     - `RF-01`: Identificació i rols d'usuari (alumnat vs professorat).
     - `RF-02`: Cerca de títols i filtratge per categoria.
     - `RF-03`: Reserva i termini màxim de devolució.
     - `RF-04`: Històric i penalitzacions per retard.
  2. Redacta exactament **3 Requisits No Funcionals (RNF)** que especifiquen mètriques mesurables de temps de resposta, seguretat de dades (xifratge de contrasenyes) i disponibilitat del servei.

#### Repte 2: Configuració d'un tauler Kanban per a un equip àgil
- **Objectiu:** Dissenyar un flux de treball visual i aplicar límits WIP per evitar colls d'ampolla.
- **Procediment de taller:**
  1. Dissenya en una pissarra o eina digital (GitHub Projects / Trello) les següents columnes:
     - `Backlog` (Pendent de prioritzar - sense límit).
     - `Ready` (A punt per iniciar - límit: 4).
     - `In Progress` (En desenvolupament actiu - límit: 3).
     - `Code Review` (Revisió creuada per un company - límit: 2).
     - `Testing / QA` (Validació funcional - límit: 2).
     - `Done` (Completat i verificat).
  2. Crea 6 targetes de tasques que representin funcionalitats d'una botiga en línia.
  3. Simula què ha de fer l'equip quan la columna `Code Review` arriba al seu límit de 2 i un programador acaba la seua tasca a `In Progress`.

#### Repte 3: Comparativa empírica de cicle de traducció i execució
- **Objectiu:** Comparar el cicle de compilació natiu de C/C++ davant l'execució en bytecode de Java i la interpretació en Python.
- **Procediment de taller:**
  1. Escriu el clàssic programa "Hola Món" en els tres llenguatges (`hola.c`, `Hola.java`, `hola.py`).
  2. Executa la compilació en C mitjançant `gcc`:
     ```bash
     gcc -Wall -O2 hola.c -o hola_c
     ./hola_c
     ```
  3. Executa la compilació a bytecode en Java i la seua execució en la JVM:
     ```bash
     javac Hola.java
     ls -l Hola.class
     java Hola
     ```
  4. Executa l'script de Python directament amb l'intèrpret:
     ```bash
     python3 hola.py
     ```
  5. Inspecciona els fitxers generats en disc i compara les mides i tipus de fitxer obtinguts.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] Diferencie entre codi font, codi màquina, bytecode i màquina virtual (JVM).
- [ ] Identifique les 6 fases clàssiques del cicle de vida del programari (SDLC).
- [ ] Classifique els requisits en funcionals (RF) i no funcionals (RNF).
- [ ] Explique les diferències clau entre el model en cascada i les metodologies àgils.
- [ ] Convisc amb els rols fonamentals de Scrum (Product Owner, Scrum Master, Developers).
- [ ] Descric les 4 cerimònies principals de Scrum (Planning, Daily, Review, Retrospective).
- [ ] Aplic la visualització de flux i el límit de treball en curs (WIP) en un tauler Kanban.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Conceptes i Traducció de Codi** | Domina la diferència entre compilació nativa, interpretació i bytecode en màquines virtuals (JVM) amb precisió tècnica. | Comprèn com es tradueix el codi font a executable i diferencia els llenguatges principals. | Reconeix la diferència entre compiladors i intèrprets però confon el concepte de bytecode. | Incapaç de distingir el codi font del programa executable. |
| **Cicle de Vida del Software** | Identifica totes les fases del SDLC i calcula amb rigor l'impacte econòmic de la detecció primerenca de defectes. | Coneix les fases de desenvolupament i distingeix correctament requisits funcionals de no funcionals. | Enumera les fases del cicle de vida però té dificultats per redactar requisits precisos. | Desconeix les etapes del cicle de vida o creu que el desenvolupament només consisteix a programar. |
| **Metodologies Clàssiques vs Àgils** | Compara críticament el model en cascada, en espiral i els mètodes àgils segons la naturalesa i risc del projecte. | Diferencia el model en cascada del paradigma àgil i cita els 4 valors del Manifest Àgil. | Reconeix que els mètodes àgils admeten canvis però no comprèn els inconvenients del model en cascada. | Confon les metodologies o creu que l'agilitat consisteix a programar sense planificació. |
| **Aplicació de Scrum i Kanban** | Domina els rols, cerimònies i mètriques (Velocity, WIP, Cycle Time) de Scrum i Kanban en entorns reals de projecte. | Descriu correctament el funcionament d'un Sprint de Scrum i les columnes d'un tauler Kanban. | Reconeix els rols principals de Scrum però té confusions sobre les cerimònies o el límit WIP. | Desconeix què és un Sprint, un Product Backlog o com s'utilitza un tauler Kanban. |
