---
layout: default
title: "Entorns de Desenvolupament — UD17 Gestió Àgil de Projectes de Desenvolupament: Scrum, Kanban i CI/CD"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD17"
---

# UD17 — Gestió Àgil de Projectes de Desenvolupament: Scrum, Kanban i CI/CD

<div align="center">
<svg viewBox="0 0 860 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad17" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="cardGrad17" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="shadow17" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="860" height="260" rx="16" fill="url(#bgGrad17)"/>

  <!-- Títol Superior -->
  <text x="430" y="38" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="700" font-family="system-ui, -apple-system, sans-serif">Arquitectura de Gestió Àgil i Flux d'Integració Contínua (CI/CD)</text>
  <text x="430" y="58" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="system-ui, -apple-system, sans-serif">Cicle Iteratiu Scrum · Flux Continu Kanban · Estimació INVEST · Automatització GitHub Actions</text>

  <!-- Targeta 1: Scrum Framework -->
  <g transform="translate(25, 75)" filter="url(#shadow17)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad17)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#0284c7" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#38bdf8" font-size="14">🔄</text>
    <text x="48" y="31" fill="#38bdf8" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Scrum Framework</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Rols: PO, Scrum Master, Dev</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Sprints: 1 a 4 setmanes</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Esdeveniments: Daily, Retro</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Sprint Review & Planning</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#0369a1" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="600">Product Backlog ➔ Increment</text>
  </g>

  <!-- Targeta 2: Mètode Kanban -->
  <g transform="translate(230, 75)" filter="url(#shadow17)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad17)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#4f46e5" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#818cf8" font-size="14">📋</text>
    <text x="48" y="31" fill="#818cf8" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Mètode Kanban</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Visualització del flux de tasques</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Columnes: To Do, In Progress, Done</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Límits WIP (Work In Progress)</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Evitar colls d'ampolla</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#4338ca" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#818cf8" font-size="10" font-weight="600">Lead Time vs Cycle Time</text>
  </g>

  <!-- Targeta 3: Estimació & User Stories -->
  <g transform="translate(435, 75)" filter="url(#shadow17)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad17)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#059669" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#34d399" font-size="14">🎯</text>
    <text x="48" y="31" fill="#34d399" font-size="14" font-weight="700" font-family="system-ui, sans-serif">Estimació & Stories</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Format INVEST i Gherkin</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Planning Poker (Fibonacci)</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Mesura en Story Points (SP)</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Previsió: Burndown Charts</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#047857" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#34d399" font-size="10" font-weight="600">Velocitat d'Sprint (V)</text>
  </g>

  <!-- Targeta 4: CI/CD & GitHub Actions -->
  <g transform="translate(640, 75)" filter="url(#shadow17)">
    <rect width="190" height="165" rx="12" fill="url(#cardGrad17)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="12" y="12" width="28" height="28" rx="6" fill="#d97706" fill-opacity="0.2"/>
    <text x="26" y="31" text-anchor="middle" fill="#f59e0b" font-size="14">⚙️</text>
    <text x="48" y="31" fill="#f59e0b" font-size="14" font-weight="700" font-family="system-ui, sans-serif">CI/CD Automatitzat</text>
    <text x="14" y="62" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Workflows YAML en Git</text>
    <text x="14" y="80" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Triggers: on push, pull_request</text>
    <text x="14" y="98" fill="#cbd5e1" font-size="11" font-family="system-ui, sans-serif">Execució Maven/Gradle + JUnit</text>
    <text x="14" y="116" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">Garantia d'integració contínua</text>
    <rect x="14" y="132" width="162" height="20" rx="4" fill="#b45309" fill-opacity="0.3"/>
    <text x="95" y="146" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="600">Pipelines de Build & Test</text>
  </g>
</svg>
</div>

---

## 📌 17.1 El Manifest Àgil i el Desenvolupament Iteratiu

Els models tradicionals en cascada (*waterfall*) presenten una rigidesa estructural que sovint resulta en desajustos entre les expectatives del client i el producte final. En contrast, les metodologies àgils situen el programari funcional, la col·laboració contínua i la capacitat d'adaptació al canvi al centre del procés de desenvolupament.

El **Manifest Àgil (2001)** es fonamenta en quatre valors clau:
1. **Persones i interaccions** per sobre de processos i eines.
2. **Programari que funciona** per sobre de documentació exhaustiva.
3. **Col·laboració amb el client** per sobre de negociació contractual.
4. **Resposta davant el canvi** per sobre del seguiment cec d'un pla prefixat.

### Cicle de Vida Iteratiu i Incremental
En el desenvolupament àgil, el projecte no s'executa com una seqüència monolítica d'anàlisi, disseny, codificació i proves, sinó que es divideix en cicles temporals curts (iteracions o *sprints*) d'entre 1 i 4 setmanes:
- **Iteratiu:** Cada cicle revisa, perfecciona i valida components del sistema.
- **Incremental:** Cada final de cicle produeix un *increment de producte potencialment desplegable* (*Potentially Shippable Increment*), afegint valor real i mesurable a l'aplicació.

---

## 📌 17.2 El Framework Scrum: Rols, Esdeveniments i Artefactes

**Scrum** és el marc de treball àgil més utilitzat en la indústria del programari per a projectes complexos. Es basa en la teoria del control de processos empíric: **transparència**, **inspecció** i **adaptació**.

```
+-----------------------------------------------------------------------------------+
|                                 SCRUM FRAMEWORK                                   |
+-----------------------------------------------------------------------------------+
|  ROLS               |  ESDEVENIMENTS                    |  ARTEFACTES             |
+---------------------+-----------------------------------+-------------------------+
|  Product Owner (PO) |  Sprint Planning (Planificació)   |  Product Backlog        |
|  Scrum Master (SM)  |  Daily Scrum (Reunió diària, 15m) |  Sprint Backlog         |
|  Developers (Equip) |  Sprint Review (Revisió funcional)|  Increment de Producte  |
|                     |  Sprint Retrospective (Millora)   |  Definition of Done     |
+-----------------------------------------------------------------------------------+
```

### Rols de Scrum
1. **Product Owner (PO):** Maximitza el valor del producte i gestiona el *Product Backlog*. Defineix el "què" i prioritza els requeriments segons el retorn d'inversió per al negoci.
2. **Scrum Master (SM):** Garantiix que l'equip comprengui i apliqui els principis de Scrum. Actua com a líder al servei de l'equip (*servant leader*), eliminant impediments i blindant l'equip de distraccions externes.
3. **Equip de Desenvolupadors:** Grup multidisciplinari i autoorganitzat (programadors, testers, arquitectes) responsable de transformar els ítems del backlog en increments de programari funcional.

### Esdeveniments (*Cerimònies*) de Scrum
- **Sprint Planning:** Es determina l'objectiu de l'sprint (*Sprint Goal*) i se seleccionen els elements del Product Backlog que es completaran.
- **Daily Scrum:** Trobada diària de màxim 15 minuts de l'equip tècnic per sincronitzar el treball i detectar bloquejos:
  - Què vaig fer ahir que va ajudar l'equip a assolir l'objectiu de l'Sprint?
  - Què faré hui per ajudar a complir l'objectiu?
  - Quins impediments o bloquejos tinc davant meu?
- **Sprint Review:** Demostració de les funcionalitats completades als usuaris i *stakeholders* per recollir retroacció directa.
- **Sprint Retrospective:** Sessió interna de l'equip per analitzar com ha funcionat la comunicació, les eines i els processos, identificant accions concretes de millora per al següent cicle.

---

## 📌 17.3 El Mètode Kanban: Visualització i Límits WIP

A diferència de Scrum, que organitza la feina en caixes de temps fixes (*timeboxes*), **Kanban** és un mètode de gestió del flux continu que busca optimitzar el rendiment del sistema visualitzant el treball i limitant la quantitat de feina en curs.

```
+-----------------------------------------------------------------------------------+
|                                 TAULER KANBAN                                     |
+---------------------+-----------------------+---------------------+---------------+
|  BACKLOG            |  TO DO (Pendents)     |  IN PROGRESS [WIP=3]|  DONE         |
+---------------------+-----------------------+---------------------+---------------+
|  [FEAT-10] Auth JWT |  [BUG-12] NullPointer |  [FEAT-08] API REST |  [DB-01] V1   |
|  [FEAT-11] Checkout |  [TEST-04] Mock JUnit |  [UI-02] Navbar CSS |  [CI-01] GH   |
|                     |                       |  [DOC-01] Javadoc   |               |
+---------------------+-----------------------+---------------------+---------------+
```

### Principis Operatius de Kanban
1. **Visualitzar el flux de treball:** Utilitzar columnes que reflecteixen amb precisió les etapes reals del desenvolupament (Ex: *Backlog* $\rightarrow$ *To Do* $\rightarrow$ *Code* $\rightarrow$ *Review/Test* $\rightarrow$ *Done*).
2. **Limitar el treball en curs (Límit WIP - *Work In Progress*):** Fixar un sostre màxim de tasques simultànies permeses en cada columna (per exemple, màxim 3 tasques en *In Progress* per a un equip de 4 persones). Si la columna arriba al límit, cap membre de l'equip pot iniciar una tasca nova: han de col·laborar per desbloquejar i acabar les que ja estan en marxa (*"Stop starting, start finishing"*).
3. **Mètriques Clau de Flux:**
   - **Lead Time:** Temps total transcorregut des que s'enregistra una petició al backlog fins que es desplega a producció.
   - **Cycle Time:** Temps transcorregut des que un desenvolupador comença a treballar activament en la tasca fins que aquesta es finalitza completament.
   - **Llei de Little:** Relaciona el treball en curs ($WIP$), el rendiment o *throughput* ($TH$) i el temps de cicle ($CT$):
     $$\text{WIP} = \text{Throughput} \times \text{Cycle Time}$$

---

## 📌 17.4 Històries d'Usuari, Criteris d'Acceptació i Estimació

Una **Història d'Usuari** (*User Story*) és una descripció breu i en llenguatge natural d'una funcionalitat des del punt de vista de l'usuari final o consumidor del sistema.

### Estructura Canònica
```text
Com a [rol d'usuari / client / administrador],
vull [acció o funcionalitat concreta que el sistema ha de permetre],
per tal de [benefici de negoci, valor afegit o objectiu a assolir].
```

### El Criteri INVEST
Per garantir que una història d'usuari està ben formulada abans d'entrar a un sprint, ha de complir el patró **INVEST**:
- **I**ndependent: No ha de tenir dependències crítiques amb altres històries de l'sprint.
- **N**egotiable: Els detalls tècnics es discuteixen i s'acorden entre el PO i l'equip.
- **V**aluable: Ha d'aportar valor perceptible a l'usuari o negoci.
- **E**stimable: L'equip de desenvolupament ha de poder quantificar el seu esforç.
- **S**mall: Ha de ser prou xicoteta per completar-se en pocs dies dins del mateix sprint.
- **T**estable: Ha de tenir criteris d'acceptació clars i verificables.

### Criteris d'Acceptació amb Sintaxi Gherkin (BDD)
```gherkin
Escenari: Autenticació correcta d'un usuari registrat
  Donat que l'usuari es troba a la pàgina de login
  Quan introdueix el correu "alumne@ies.es" i la contrasenya vàlida
  I prem el botó "Iniciar Sessió"
  Aleshores el sistema genera un token JWT vàlid
  I redirigeix l'usuari al tauler principal de l'aplicació
```

### Estimació amb Story Points i Planning Poker
Els **Story Points (SP)** representen una mesura abstracta de l'esforç relatiu, la complexitat tècnica i la incertesa d'una tasca, independent del temps en hores. Se sol utilitzar una seqüència de Fibonacci modificada: $1, 2, 3, 5, 8, 13, 21$.
- En el **Planning Poker**, cada membre de l'equip mostra la seua estimació simultàniament mitjançant cartes. Si hi ha discrepàncies significatives (ex: un 2 i un 13), els membres expliquen les seues raons fins a assolir consens.

---

## 📌 17.5 Gestió Digital del Projecte: GitHub Projects i Issues

La gestió de projectes de programari modern s'integra directament en els dipòsits de control de versions:

```
+-----------------------------------------------------------------------------------+
|                        ECOSISTEMA DE GESTIÓ EN GITHUB                             |
+-----------------------------------------------------------------------------------+
|  GitHub Issues       ->  Seguiment d'incidències, bugs i User Stories             |
|  GitHub Projects     ->  Taulers Kanban digitals amb automatitzacions de flux     |
|  Milestones          ->  Objectius de versió o Sprint (data límit + % completat)  |
|  Labels              ->  Etiquetatge: `enhancement`, `bug`, `documentation`       |
|  Pull Requests (PR)  ->  Revisió de codi associada a una Issue ("Closes #12")     |
+-----------------------------------------------------------------------------------+
```

### Vinculació Automàtica de Codi i Tasques
En incloure paraules clau en la descripció d'una Pull Request o en el missatge d'un commit:
```bash
git commit -m "fix: soluciona el càlcul d'impostos en línia de comanda. Closes #34"
```
Quan aquesta branca es fusiona (*merge*) a la branca principal `main`, GitHub tanca automàticament la Issue `#34` i mou la targeta corresponent al tauler Kanban a la columna **Done**.

---

## 📌 17.6 Integració Contínua (CI) amb GitHub Actions

La **Integració Contínua** (*Continuous Integration*, CI) és una pràctica d'enginyeria de programari en la qual els desenvolupadors integren el seu codi de manera freqüent en el repositori compartit. Cada integració es verifica automàticament mitjançant eines de compilació i suites de proves automatitzades per detectar errors el més ràpid possible (*Fail Fast*).

```
[ Desenvolupador ]  -->  git push origin feature/auth  -->  [ GitHub Repository ]
                                                                     |
                                                               (Trigger Event)
                                                                     v
                                                            [ Runner Virtual ]
                                                            - Ubuntu Latest
                                                            - Set up JDK 17
                                                            - mvn clean test
                                                                     |
                                                  +------------------+------------------+
                                                  |                                     |
                                           [ Tests Passed ]                      [ Tests Failed ]
                                                  |                                     |
                                        ✅ PR llesta per a merge             ❌ Bloqueig automàtic
```

### Exemple de Workflow CI (`.github/workflows/ci.yml`)
```yaml
name: CI Java Maven Suite

on:
  push:
    branches: [ "main", "develop" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Baixar el codi del dipòsit
      uses: actions/checkout@v4

    - name: Configurar l'entorn Java JDK 17
      uses: actions/setup-java@v4
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: 'maven'

    - name: Compilar i executar tests automatitzats JUnit 5
      run: mvn --batch-mode --update-snapshots clean test

    - name: Publicar resum d'execució de proves
      if: always()
      uses: actions/upload-artifact@v4
      with:
        name: test-reports
        path: target/surefire-reports/
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Tècnica i Càlculs de Mètriques de Gestió

#### Exercici 17.1: Càlcul de Velocitat de l'Equip i Previsió de Desplegament
Un equip de desenvolupament Scrum ha completat 4 Sprints amb la següent quantitat d'Story Points assolits completament (*Definition of Done*):
- $\text{Sprint 1} = 22\text{ SP}$
- $\text{Sprint 2} = 26\text{ SP}$
- $\text{Sprint 3} = 24\text{ SP}$
- $\text{Sprint 4} = 28\text{ SP}$

El Product Owner té al Product Backlog un conjunt de 45 requeriments pendents que sumen un total de $150\text{ SP}$.
1. Calculeu la **velocitat mitjana** de l'equip ($\overline{V}$):
   $$\overline{V} = \frac{\sum_{i=1}^{n} \text{SP}_i}{n}$$
2. Determineu quants Sprints addicionals seran necessaris per finalitzar el lliurament complet del backlog restant:
   $$N_\text{sprints} = \left\lceil \frac{\text{Backlog Restant}}{\overline{V}} \right\rceil$$
3. Si cada sprint té una durada de 2 setmanes naturals, en quantes setmanes s'estima la data de llançament?

#### Exercici 17.2: Anàlisi de Rendiment Kanban i la Llei de Little
En un equip de manteniment de programari que gestiona les incidències amb Kanban, s'observen les següents mètriques durant el mes d'octubre:
- **Throughput (Rendiment diari):** L'equip finalitza una mitjana de $TH = 2.5\text{ tasques/dia}$.
- **Cycle Time (Temps mitjà de resolució):** Una tasca tarda de mitjana $CT = 4\text{ dies}$ des que entra a la columna *In Progress* fins que s'arriba a *Done*.

1. Aplicant la **Llei de Little** ($\text{WIP} = TH \times CT$), calculeu la quantitat de feina en curs (*Work In Progress*) mitjana del sistema.
2. Si l'equip vol reduir el seu *Cycle Time* a $2.5\text{ dies}$ mantenint el mateix ritme de lliurament ($2.5\text{ tasques/dia}$), quin límit màxim de WIP hauria d'imposar a la seua columna de treball? Justifiqueu la resposta matemàticament.

#### Exercici 17.3: Estimació Relativa amb Planning Poker i Matriu de Ponderació
Considereu 3 tasques tècniques amb els següents factors de complexitat, esforç i incertesa (escala d'1 a 5 punts per factor):

$$\text{Puntuació Bruta} = (\text{Esforç} \times 0.4) + (\text{Complexitat} \times 0.4) + (\text{Incertesa} \times 0.2)$$

- **Tasca A (Crear taula BD i model JPA):** Esforç = 2, Complexitat = 1, Incertesa = 1.
- **Tasca B (Integrar passarel·la de pagament externa amb webhooks):** Esforç = 4, Complexitat = 5, Incertesa = 4.
- **Tasca C (Afegir filtre de cerca per nom al frontend):** Esforç = 1, Complexitat = 2, Incertesa = 1.

1. Calculeu la puntuació bruta de cada tasca.
2. Assigneu el valor d'Story Points més proper segons la seqüència de Fibonacci ($1, 2, 3, 5, 8, 13$).
3. Expliqueu com influeix l'alta incertesa en la presa de decisions d'un equip àgil (ex: conveniència de realitzar un *Spike* tècnic previ).

---

### 💻 Bloc B: Reptes Pràctics en Entorn de Desenvolupament

#### Repte 17.1: Configuració d'un Tauler de Projecte Automatitzat a GitHub
Configureu un entorn de gestió àgil dins del vostre repositori de pràctiques de GitHub:
1. Creeu un nou projecte a la pestanya **Projects** del vostre repositori amb plantilla **Team Kanban**.
2. Definiu les columnes: `📋 Backlog`, `🚀 To Do`, `⚙️ In Progress (WIP: 2)`, `🔍 In Review` i `✅ Done`.
3. Configureu els fluxos de treball automatitzats integrats (*Built-in Workflows*):
   - Quan es cree una nova Issue $\rightarrow$ afegir-la automàticament a `📋 Backlog`.
   - Quan s'òbriga una Pull Request $\rightarrow$ moure la targeta a `🔍 In Review`.
   - Quan es fusione una Pull Request $\rightarrow$ moure la targeta a `✅ Done`.
4. Creeu 3 Issues reals del vostre projecte emprant etiquetes (`enhancement`, `bug`) i assigneu-les als membres de l'equip.

#### Repte 17.2: Definició Formal d'Històries d'Usuari amb Gherkin
Redacteu dues Històries d'Usuari completes per a una aplicació de gestió acadèmica:
1. **Història 1:** Registre d'assistència d'alumnat per part d'un docent.
2. **Història 2:** Consulta del butlletí de qualificacions per part d'un estudiant.

Per a cadascuna de les històries, heu d'especificar:
- Títol identificador (Ex: `US-01: Control d'assistència diari`).
- Descripció canònica (`Com a... Vull... Per tal de...`).
- Estimació en Story Points justificada.
- Criteris d'acceptació redactats amb la sintaxi **Gherkin** (`Escenari`, `Donat que`, `Quan`, `I`, `Aleshores`), cobrint un cas d'èxit i un cas d'error (ex: sessió caducada o dades invàlides).

#### Repte 17.3: Creació d'un Pipeline CI de Validació amb GitHub Actions
Implementeu un pipeline d'integració contínua complet per al vostre projecte Java amb Maven:
1. Creeu l'arxiu `.github/workflows/verify-build.yml` al vostre repositori.
2. Configureu el pipeline perquè s'execute en cada esdeveniment `push` i `pull_request` dirigit a la branca `main`.
3. Afegiu els passos necessaris per:
   - Descarregar el codi amb `actions/checkout@v4`.
   - Instal·lar Java 17 Temurin amb `actions/setup-java@v4`.
   - Executar la compilació i la suite de proves unitàries amb `mvn test`.
4. Provoqueu intencionadament una fallada en un test unitari en una branca secundària, obriu una Pull Request i verifiqueu que el sistema de CI bloca la integració mostrant l'indicador vermell de fallada. Esmeneu l'error, feu un nou commit i comproveu la validació verda final.

---

### 🔍 Bloc C: Autoavaluació i Rúbrica Tècnica

#### Llista de Verificació d'Assoliment
- [ ] He comprès la diferència metodològica entre els models tradicionals (Cascada) i els models àgils iteratius.
- [ ] Puc identificar i descriure les funcions dels tres rols principals de Scrum: Product Owner, Scrum Master i Equip de Desenvolupadors.
- [ ] Sé estructurar i participar en les cerimònies de Scrum: Daily, Sprint Planning, Review i Retrospectiva.
- [ ] Comprèn el concepte de límit WIP en Kanban i sé aplicar la Llei de Little per mesurar l'eficiència del flux.
- [ ] Sé redactar Històries d'Usuari seguint el patró INVEST i definir criteris d'acceptació verificables amb sintaxi Gherkin.
- [ ] Puc estimar tasques de desenvolupament mitjançant Story Points i la dinàmica de Planning Poker.
- [ ] Sóc capaç de configurar un tauler Kanban automatitzat a GitHub Projects i un workflow CI bàsic a GitHub Actions.

#### Rúbrica d'Avaluació de la Unitat
| Criteri d'Avaluació | 🟢 Excel·lent (9-10) | 🟡 Notable (7-8) | 🟠 Aprovat (5-6) | 🔴 No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Principis Àgils i Scrum** | Domina la teoria i pràctica de Scrum; diferencia rols, cerimònies i artefactes amb precisió professional. | Comprèn els fonaments de Scrum i aplica correctament les cerimònies essencials. | Coneix els rols i esdeveniments de Scrum bàsics però confon algunes responsabilitats. | Desconeix el funcionament de Scrum o l'aplica com un model en cascada encobert. |
| **Kanban i Flux de Treball** | Aplica límits WIP, calcula Lead Time i Cycle Time, i optimitza colls d'ampolla mitjançant la Llei de Little. | Utilitza taulers Kanban amb límits WIP i entén les mètriques bàsiques de flux. | Utilitza taulers visuals però no aplica límits WIP ni mesura els temps de cicle. | No comprèn el propòsit d'un tauler Kanban ni l'efecte del treball en curs. |
| **Històries i Estimació** | Redacta User Stories seguint el model INVEST amb escenaris Gherkin exhaustius i estimacions coherents en SP. | Redacta User Stories correctes amb criteris d'acceptació clars i estimació mitjançant Planning Poker. | Formula històries d'usuari bàsiques amb criteris d'acceptació informals o poc testables. | Redacta requeriments com a tasques tècniques aïllades sense orientació a valor d'usuari. |
| **Integració Contínua (CI)** | Configura pipelines de GitHub Actions operatius que compilen, executen tests JUnit i bloquen PRs fallides. | Configura un workflow bàsic de CI a GitHub Actions que s'executa correctament en push. | Crea l'arxiu YAML de GitHub Actions amb ajuda però presenta dificultats en els triggers o passos. | Incapaç de crear o executar un pipeline d'integració contínua al repositori. |
