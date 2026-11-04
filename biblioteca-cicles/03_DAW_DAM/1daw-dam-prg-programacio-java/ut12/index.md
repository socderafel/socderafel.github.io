# UT 12: Desenvolupament d'Interfícies Gràfiques d'Usuari (GUI) amb JavaFX

<div class="interactive-progress-tracker" data-unit="ut12" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa culmina el mòdul de Programació capacitant l'alumnat en la creació d'**aplicacions d'escriptori interactives riques (*Rich Client Applications*)** mitjançant la plataforma moderna **JavaFX**:
- **Arquitectura i Cicle de Vida de JavaFX:** El model teatral de disseny: la classe base `Application`, el cicle de vida del fil gràfic d'interfície (*JavaFX Application Thread* mitjançant `init()`, `start()` i `stop()`), l'escenari principal (`Stage`) i l'escena (`Scene`).
- **Arbre de Nodes (*Scene Graph*) i Panells de Disposició (*Layouts*):** Organització espacial flexible i adaptable mitjançant contenidors com `VBox`, `HBox`, `BorderPane`, `GridPane` i `StackPane`.
- **Controls Interactius d'Usuari:** Presentació i recollida de dades amb components fonamentals: `Label`, `Button`, `TextField`, `CheckBox`, `ComboBox`, i visualització de col·leccions complexes amb `TableView` i `ListView`.
- **Model de Gestió d'Esdeveniments i Reactivitat:** Programació orientada a esdeveniments mitjançant `EventHandler`, expressions lambda compactes, gestió d'accions de ratolí i teclat, i propietats reactives observables (*JavaFX Properties*) amb enllaç de dades (*Binding*).
- **El Patró Model-Vista-Controlador (MVC) amb FXML:** Desacoblament absolut entre el disseny visual i el codi Java mitjançant fitxers declaratius XML (`.fxml`), l'eina visual SceneBuilder, l'anotació `@FXML` i el cicle d'inicialització `Initializable`.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA9 (DAW / DAM):** Desenvolupa interfícies gràfiques d'usuari interactives.
  - **CA 9.a:** S'ha identificat l'arquitectura i el cicle de vida d'una aplicació gràfica JavaFX.
  - **CA 9.b:** S'han utilitzat contenidors de disseny (layouts) per a organitzar visualment els components de forma adaptable.
  - **CA 9.c:** S'han integrat controls d'usuari per a la interacció i entrada/eixida de dades.
  - **CA 9.d:** S'han programat controladors d'esdeveniments utilitzant expressions lambda i propietats observables.
  - **CA 9.e:** S'ha dissenyat la vista utilitzant FXML aplicant el patró Model-Vista-Controlador.

---

## Estructura de la Unitat de Treball

1. [UT 12.01: Arquitectura de JavaFX: Application, fil d'execució gràfic, Stage i Scene](./ut1201.md)
2. [UT 12.02: Arbre de nodes (Scene Graph) i contenidors de disseny (Layouts)](./ut1202.md)
3. [UT 12.03: Controls gràfics d'usuari: formularis i taules amb TableView](./ut1203.md)
4. [UT 12.04: Gestió d'esdeveniments amb lambda i propietats reactives (Binding)](./ut1204.md)
5. [UT 12.05: Arquitectura MVC amb FXML, SceneBuilder i classes controladores](./ut1205.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut12-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>El Model Teatral de JavaFX</h4>
  </div>
  <p class="challenge-question">Com es tradueixen els conceptes d'`Stage` i `Scene` en la visualització d'una aplicació JavaFX?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Stage és el fitxer d'imatges i Scene és el controlador de base de dades.</button>
    <button class="btn-check" data-correct="true">B) L'Stage (escenari) representa la finestra principal del sistema operatiu (amb el seu marc, títol i botons de tancar/minimitzar); la Scene (escena) és el contenidor físic de tots els elements visuals i controls que es mostren dins d'eixa finestra.</button>
    <button class="btn-check" data-correct="false">C) Stage és una instrucció SQL i Scene un bucle for.</button>
    <button class="btn-check" data-correct="false">D) Només es poden usar en aplicacions web en línia.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut12-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>El Fil Gràfic d'Interfície d'Usuari</h4>
  </div>
  <p class="challenge-question">Quina regla d'or de concurrència s'aplica al fil *JavaFX Application Thread*?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que ha d'executar càlculs matemàtics pesats i descàrregues de xarxa en el mateix fil per a anar més ràpid.</button>
    <button class="btn-check" data-correct="true">B) Totes les actualitzacions visuals de components han d'executar-se obligatòriament en aquest fil; mai s'han d'executar tasques bloquejants o de llarga durada en ell perquè congelarien la interfície completament (en aquest cas cal usar Task o Platform.runLater()).</button>
    <button class="btn-check" data-correct="false">C) Que només funciona en processadors d'un sol nucli.</button>
    <button class="btn-check" data-correct="false">D) Que s'executa a la targeta de so.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut12-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Beneficis del Patró MVC amb FXML</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge aporta desacoblar la vista en fitxers `.fxml` respecte a codificar la interfície amb codi Java pur?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que l'aplicació ocupa menys espai a la memòria cau del processador.</button>
    <button class="btn-check" data-correct="true">B) Separa radicalment el disseny visual (modificable visualment amb SceneBuilder o per dissenyadors sense saber programar) de la lògica de negoci del controlador Java, augmentant la netedat, mantenibilitat i modularitat del projecte.</button>
    <button class="btn-check" data-correct="false">C) Que el programa no necessita màquina virtual per a executar-se.</button>
    <button class="btn-check" data-correct="false">D) Que permet connectar-se a internet sense targeta de xarxa.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut12-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Enllaç Reactiu de Dades (*Data Binding*)</h4>
  </div>
  <p class="challenge-question">Què permet el mecanisme de *Binding* entre propietats JavaFX (com `label.textProperty().bind(...)`)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Guardar la vista en un disc òptic DVD.</button>
    <button class="btn-check" data-correct="true">B) Sincronitzar automàticament i de forma reactiva l'estat d'un component visual amb una altra propietat o model de dades, de manera que qualsevol canvi en l'origen es reflecteix immediatament a la pantalla sense haver d'escriure listeners manuals repetitius.</button>
    <button class="btn-check" data-correct="false">C) Crear un pont cap a aplicacions C++.</button>
    <button class="btn-check" data-correct="false">D) Encriptar el text introduït per l'usuari amb SHA-256.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Aplicació d'Escriptori Completa JavaFX + JDBC</h4>
  </div>
  <p>Desenvolupa una aplicació d'escriptori completa per a la gestió d'inventari: dissenya la vista amb FXML (SceneBuilder) amb un `TableView` per a llistar productes, camps de formulari per a donar d'alta i modificar, i connecta el controlador al patró DAO implementat en la unitat anterior. Assegura't de gestionar esdeveniments mitjançant lambdas.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
