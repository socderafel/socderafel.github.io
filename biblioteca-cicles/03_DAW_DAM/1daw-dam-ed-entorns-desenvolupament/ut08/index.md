---
layout: default
title: "UD8: Síntesi Pràctica del 1r Trimestre: Desenvolupament, IDEs i Depuració — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD8"
---

# UD8: Síntesi Pràctica del 1r Trimestre: Desenvolupament, IDEs i Depuració

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-sdlc8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ide8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-deb8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-synth8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed8)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">SÍNTESI PRÀCTICA 1R TRIMESTRE: DESENVOLUPAMENT, IDES I DEPURACIÓ</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Integració de cicle de vida, gestió d'espais de treball a l'IDE, depuració interactiva avançada i banc de síntesi</text>

  <!-- Bloc 1: Cicle de Vida & SDLC -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sdlc8)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cicle de Vida</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Models &amp; Metodologies</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Tradicional vs Àgil (Agile)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Scrum: Sprints &amp; Cerimònies</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Kanban: Límit de WIP</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Requisits RF vs RNF</text>
  </g>

  <!-- Bloc 2: Ecosistema IDE -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ide8)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">💻</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Ecosistema IDE</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Configuració &amp; Build</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• JDK, JAVA_HOME i PATH</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• IntelliJ, Eclipse, VS Code</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Gestió amb Maven (pom.xml)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Estructura src/main/java</text>
  </g>

  <!-- Bloc 3: Depuració Avançada -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-deb8)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🐞</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tècniques Debug</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Diagnòstic en Viu</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Breakpoints condicionals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Pas a pas (Step Over/Into)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Anàlisi de la Pila de Crides</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Vigilància d'expressions</text>
  </g>

  <!-- Bloc 4: Banc de Síntesi -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-synth8)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🏆</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Banc de Síntesi</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Reptes Integrals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Supòsits pràctics d'avaluació</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Simulacions de prova tècnica</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Rúbriques competencials</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Consolidació de coneixements</text>
  </g>
</svg>
</div>

Aquesta unitat de síntesi consolida i integra tots els coneixements i habilitats tècniques treballats al llarg del **primer trimestre** del mòdul d'Entorns de Desenvolupament. S'hi unifiquen la comprensió del cicle de vida del programari, la tria de metodologies segons el projecte, la configuració professional de l'entorn de treball i el domini pràctic del depurador gràfic per a resoldre supòsits pràctics d'avaluació integral.

---

## 8.1 Mapa d'Integració Competencial del 1r Trimestre

Durant el primer bloc del curs s'estableix la base operativa sobre la qual s'assenta tot el procés d'enginyeria de programari:

```
[ Requisits del Client ]
          │
          ▼  Metodologies: Cascada / Espiral / Scrum / Kanban (UD1)
[ Pla de Desenvolupament ]
          │
          ▼  Eines: IDEs, JDKs, Gestors de Dependències (UD2)
[ Construcció de Codi ]
          │
          ▼  Qualitat: Depuració Interactiva, Breakpoints, Call Stack (UD2 / UD7)
[ Codi Depurat i Validat ]
```

---

## 8.2 Configuració robusta de l'entorn: JDK, Variables d'Entorn i Maven

Un desenvolupador professional ha de comprendre la diferència entre el compilador i l'entorn d'execució:
- **JRE (*Java Runtime Environment*):** Conté únicament les biblioteques i la màquina virtual (JVM) necessàries per a **executar** aplicacions Java ja compilades.
- **JDK (*Java Development Kit*):** Inclou el JRE complet més totes les eines de desenvolupament: el compilador `javac`, el generador de documentació `javadoc`, l'eina d'empaquetat `jar` i el depurador `jdb`.

### Variables d'entorn del sistema:
- `JAVA_HOME`: Apunta al directori arrel del JDK instal·lat (Ex. `C:\Program Files\Eclipse Adoptium\jdk-17.0.10`).
- `PATH`: Ha d'incloure `%JAVA_HOME%\bin` per a permetre l'execució de comandaments des de qualsevol terminal.

### Estructura estàndard d'un projecte Maven:
Maven unifica el cicle de vida de construcció mitjançant fitxers declaratius `pom.xml`:
- `src/main/java`: Codi font de producció de l'aplicació.
- `src/main/resources`: Fitxers de configuració, imatges i propietats.
- `src/test/java`: Codi font de les proves automatitzades.

---

## 8.3 Guia pràctica de depuració per a proves d'avaluació

Davant d'un exercici pràctic d'avaluació amb codi que no funciona, segueix aquest protocol de xoc:
1. **Comprova la traça d'excepció (*Stack Trace*):** Comença llegint la primera línia de baix cap a dalt que faça referència al teu paquet de codi (ignora les línies de classes internes de Java).
2. **Col·loca el punt de ruptura una línia abans de la fallada:** Atura el programa just abans que l'excepció es llance.
3. **Inspecciona el panell de variables:** Comprova si alguna variable d'entrada conté `null`, un valor negatiu inesperat o una col·lecció buida.
4. **Fes ús de la consola interactiva d'avaluació d'expressions:** Avalua subexpressions per veure quina part exacta de la condició està fallant.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Selecció de Metodologia de Cicle de Vida per a Projectes Reals
Determina i justifica quina metodologia (Model en Cascada, Prototipatge ràpid, Scrum o Kanban) és la més recomanable per a cadascun dels següents projectes:
1. **Projecte Alfa:** Desenvolupament del programari de control d'un equip de radioteràpia mèdica per a un hospital. Els requisits estan totalment tancats per normativa estatal estricta i una fallada pot costar vides.
2. **Projecte Beta:** Llançament d'una nova aplicació mòbil de cites per a joves en un mercat altament competitiu amb gran incertesa de requisits i necessitat de publicar funcionalitats noves cada 2 setmanes.
3. **Projecte Gamma:** Equip de manteniment i suport tècnic que rep peticions d'incidències urgents i millores contínues de desenes d'aplicacions internes d'una multinacional.

#### Exercici 2: Anàlisi de traça de pila (*Stack Trace*) i reconstrucció de l'arbre d'execució
Un servidor web llança la següent traça d'error en producció:

```text
Exception in thread "main" java.lang.NullPointerException
    at com.gestio.serveis.ServeiFactures.aplicarDescompte(ServeiFactures.java:42)
    at com.gestio.serveis.ServeiFactures.processarFactura(ServeiFactures.java:23)
    at com.gestio.controladors.ControladorFactures.generar(ControladorFactures.java:15)
    at com.gestio.App.main(App.java:10)
```

1. Quina és la classe i el número de línia exacte on s'ha originat la fallada?
2. Quina és la cadena jeràrquica de mètodes que s'estaven executant en la Pila de Crides (*Call Stack*) en el moment de la caiguda?
3. Si la línia 42 de `ServeiFactures.java` és `double total = factura.getClient().getDescompte();`, quins dos objectes podrien ser potencialment `null` provocant aquesta excepció?

#### Exercici 3: Càlcul de sobrecàrrega de compilació i rendiment del depurador
En un projecte gran de $150\text{ classes Java}$:
- La compilació neta des de zero (*Full Clean Build*) triga $42\text{ segons}$.
- L'IDE utilitza compilació incremental en memòria en modificar un únic fitxer, trigant només $1,2\text{ segons}$.
1. Si un programador fa una mitjana de $80$ modificacions i proves al llarg d'una jornada laboral:
   - Quant de temps total dedicaria a esperar la compilació si treballara recompilant tot el projecte per consola?
   - Quant de temps dedica emprant la compilació incremental de l'IDE?
   - Quant de temps d'espera s'estalvia a la jornada?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'un projecte estàndard Maven per terminal
- **Objectiu:** Crear i verificar l'estructura d'un projecte sense assistents gràfics.
- **Comandes a executar:**
  ```bash
  # 1. Comprovar la versió del JDK i de Maven
  javac -version
  mvn -version

  # 2. Generar l'arquetip bàsic
  mvn archetype:generate -DgroupId=org.cicles.sintesi \
                         -DartifactId=LaboratoriSintesi1 \
                         -DarchetypeArtifactId=maven-archetype-quickstart \
                         -DinteractiveMode=false

  # 3. Accedir i compilar el projecte
  cd LaboratoriSintesi1
  mvn clean compile
  mvn test
  mvn package
  ```

#### Repte 2: Depuració guiada d'una fallada de concurrència bàsica
- **Objectiu:** Localitzar un problema en un comptador compartit per dos fils en Java utilitzant el depurador.
- **Procediment de taller:**
  1. Obre el projecte de simulació multitasca.
  2. Afig un punt de ruptura dins del mètode de suma del comptador.
  3. Configura el punt de ruptura amb la propietat `Suspend: Thread` (en lloc de suspendre tota la JVM) per a veure com cadascun dels dos fils arriba al punt d'aturada de manera independent.
  4. Inspecciona com la manca de sincronització (`synchronized`) pot provocar que un fil trepitge el valor de l'altre.

#### Repte 3: Simulació d'Examen Pràctic Integral del 1r Trimestre
- **Objectiu:** Resoldre en 45 minuts un supòsit integral que combina:
  1. Anàlisi d'un enunciat d'un servei de transport públic.
  2. Creació del projecte a l'IDE.
  3. Implementació de dues classes amb encapsulament i mètodes de càlcul.
  4. Depuració interactiva de dos casos límit amb valors negatius.
  5. Verificació que el programa produeix la sortida exacta requerida.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He consolidat la comprensió de les fases del cicle de vida i la tria de metodologies àgils vs predictives.
- [ ] He verificat la configuració de `JAVA_HOME` i l'estructura estàndard d'un projecte Maven.
- [ ] He interpretat de forma àgil qualsevol traça d'excepció (*Stack Trace*) localitzant el fitxer i línia culpables.
- [ ] He dominat l'ús de punts de ruptura condicionals i la navegació pas a pas a l'IDE.
- [ ] He avaluat expressions en temps real mitjançant el panell de vigilància (*Watches*).
- [ ] He resolt supòsits d'integració pràctica de dificultat equivalent a les proves del 1r trimestre.
- [ ] He comprovat que el codi final compleix amb els criteris de neteja i robustesa.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Integració de Coneixements del 1r T** | Connecta amb fluïdesa la teoria del cicle de vida, l'arquitectura de l'IDE i el procés de depuració amb criteris d'enginyeria. | Comprèn els conceptes fonamentals del trimestre i els aplica adequadament en la pràctica. | Reconeix els conceptes bàsics però té dificultats per relacionar les fases del cicle de vida amb les eines. | Mostra llacunes conceptuals greus en els continguts centrals del trimestre. |
| **Configuració i Automatització** | Configura entorns de desenvolupament des de la consola o IDE, gestionant Maven i variables d'entorn amb solvència. | Utilitza Maven i l'IDE per crear i compilar projectes sense assistència. | Crea projectes amb l'assistent de l'IDE però té dificultats amb el terminal o el fitxer pom.xml. | Incapaç de crear un projecte funcional o configurar el JDK en l'entorn de treball. |
| **Diagnòstic de Traces i Depuració** | Llegeix traces d'error a l'instant, col·loca punts de ruptura precisos i aïlla el bug en minuts emprant el depurador. | Interpreta la traça de pila i utilitza el depurador eficaçment per localitzar la línia de l'error. | Llegeix la traça amb lentitud o intenta endevinar l'error sense utilitzar el depurador. | No comprèn el significat d'un Stack Trace i no sap interpretar un NullPointerException. |
| **Resolució de Supòsits Integrals** | Resol problemes tècnics d'avaluació complint tots els requisits, casos límit i regles de codi net. | Resol la majoria de supòsits amb codi funcional i estructurat. | Resol el cas típic però deixa sense cobrir casos extrems o genera codi desordenat. | No aconsegueix completar els exercicis pràctics d'avaluació en el temps establert. |
