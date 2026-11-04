# UT 01: Introducció a la Programació i a l'Ecosistema Java

<div class="interactive-progress-tracker" data-unit="ut01" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa estableix els fonaments teòrics i operatius de la programació informàtica i de l'ecosistema del llenguatge **Java** (sota la versió LTS de referència Java 21). S'introdueix el pensament algorítmic, la formulació rigorosa d'instruccions mitjançant pseudocodi i diagrames de flux, i l'arquitectura d'execució basada en màquina virtual que caracteritza la plataforma Java:
- **El Paradigma «Write Once, Run Anywhere» (WORA):** El cicle de vida del codi font (`.java`), la compilació a bytecode independent del maquinari (`.class`) i l'execució interpretada amb compilació JIT (*Just-In-Time*) dins de la **Java Virtual Machine (JVM)**.
- **La Caixa d'Eines del Desenvolupador:** Diferenciació precisa entre el **JDK** (Java Development Kit), el **JRE** (Java Runtime Environment) i la **JVM**.
- **Anatomia Estructural del Codi:** Definició de classes públiques, el mètode d'entrada estàndard `public static void main(String[] args)`, paquets (*packages*) i documentació tècnica amb **Javadoc**.
- **Convencions de Nomenclatura i Enginyeria de Codi:** Estils oficials d'Oracle i Google (UpperCamelCase per a classes, lowerCamelCase per a variables/mètodes, SCREAMING_SNAKE_CASE per a constants).
- **Entorns de Desenvolupament Integrats (IDE):** Fluxos de treball amb IntelliJ IDEA i VS Code, i gestió de compilació i execució en línia d'ordres mitjançant `javac` i `java`.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA1 (DAW / DAM):** Reconeix l'estructura d'un programa informàtic, identificant i relacionant els elements propis del llenguatge de programació utilitzat.
  - **CA 1.a:** S'han identificat els blocs que componen l'estructura d'un programa informàtic.
  - **CA 1.b:** S'han utilitzat entorns integrats de desenvolupament per a l'edició, compilació i depuració de programes.
  - **CA 1.c:** S'han descrit les fases del cicle de vida del programari i les funcions dels compiladors i intèrprets.
  - **CA 1.d:** S'ha comprovat el funcionament de la màquina virtual Java i el concepte de bytecode.
  - **CA 1.e:** S'han aplicat normes d'estil i comentaris per a documentar el codi font segons estàndards professionals.

---

## Estructura de la Unitat de Treball

1. [UT 01.01: Fonaments dels algorismes, lògica computacional, pseudocodi i diagrames de flux](./ut0101.md)
2. [UT 01.02: L'arquitectura de la plataforma Java: JDK, JRE, JVM, Bytecode i compilació](./ut0102.md)
3. [UT 01.03: Anatomia del primer programa en Java: classe, mètode main i documentació Javadoc](./ut0103.md)
4. [UT 01.04: Estil de codificació, convencions de nomenclatura (CamelCase) i neteja de codi](./ut0104.md)
5. [UT 01.05: Entorns de desenvolupament (IDE: IntelliJ IDEA, VS Code) i compilació per consola](./ut0105.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut01-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Arquitectura Java: El Paper del Bytecode i la JVM</h4>
  </div>
  <p class="challenge-question">Quina és la raó tècnica fonamental per la qual un programa compilat en Java pot executar-se sense modificacions tant en Linux com en Windows o macOS?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè el compilador genera codi màquina binari universal x86_64 que qualsevol CPU entén de manera nativa.</button>
    <button class="btn-check" data-correct="true">B) Perquè el compilador javac no tradueix el codi a llenguatge màquina d'un processador específic, sinó a Bytecode (.class) intermedi que és executat per una Màquina Virtual Java (JVM) adaptada a cada sistema operatiu concret.</button>
    <button class="btn-check" data-correct="false">C) Perquè els programes en Java s'executen sempre dins del navegador web com si foren scripts de JavaScript.</button>
    <button class="btn-check" data-correct="false">D) Perquè el fitxer .java es transmet per xarxa i s'executa remotament en els servidors d'Oracle.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut01-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Diferenciació de Components: JDK vs JRE</h4>
  </div>
  <p class="challenge-question">Quina diferència funcional existeix entre el Java Development Kit (JDK) i el Java Runtime Environment (JRE)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El JDK és per a aplicacions mòbils Android i el JRE és exclusiu de servidors Linux.</button>
    <button class="btn-check" data-correct="true">B) El JDK conté tot l'entorn de desenvolupament (compilador javac, depurador jdb, javadoc i eines de diagnòstic) a més del JRE, mentre que el JRE només conté les biblioteques del sistema i la JVM necessàries per a executar aplicacions ja compilades.</button>
    <button class="btn-check" data-correct="false">C) El JRE és de pagament mentre que el JDK és programari de domini públic.</button>
    <button class="btn-check" data-correct="false">D) El JDK només s'instal·la si es programa amb NetBeans.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut01-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Firma Canònica del Mètode main</h4>
  </div>
  <p class="challenge-question">Per quina raó tècnica el mètode d'entrada principal d'una aplicació Java estàndard ha de declarar-se obligatòriament com a static (public static void main(String[] args))?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè el mètode no puga acceptar arguments des de la línia d'ordres.</button>
    <button class="btn-check" data-correct="true">B) Perquè la Màquina Virtual Java (JVM) necessita poder invocar el mètode d'arrencada directament a nivell de classe sense haver d'instanciar prèviament cap objecte d'eixa classe en la memòria Heap.</button>
    <button class="btn-check" data-correct="false">C) Perquè impedeix que altres classes puguen cridar al mètode.</button>
    <button class="btn-check" data-correct="false">D) Perquè converteix el programa en un servei web asíncron.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut01-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Convencions de Nomenclatura Oficials en Java</h4>
  </div>
  <p class="challenge-question">D'acord amb les convencions oficials de codificació de Java, quina de les següents identificacions compleix escrupolosament l'estàndard per a una classe, un mètode i una constant respectivament?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) gestor_usuaris (classe), CalcularNota (mètode), max_alumnes (constant)</button>
    <button class="btn-check" data-correct="true">B) GestorExpedients (classe en UpperCamelCase), calcularNotaMitjana (mètode en lowerCamelCase), MAX_ALUMNES_AULA (constant en SCREAMING_SNAKE_CASE)</button>
    <button class="btn-check" data-correct="false">C) gestorExpedients (classe), CalcularNotaMitjana (mètode), MaxAlumnes (constant)</button>
    <button class="btn-check" data-correct="false">D) GESTOR_EXPEDIENTS (classe), calcular_nota (mètode), MAX (constant)</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 1 PRG</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 1</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
