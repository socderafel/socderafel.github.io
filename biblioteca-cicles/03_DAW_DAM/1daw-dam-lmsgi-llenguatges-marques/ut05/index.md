# UT 05: Manipulació del DOM i Gestió d'Esdeveniments en Client

<div class="interactive-progress-tracker" data-unit="ut05" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa constitueix el nucli de la interactivitat en el costat client en el desenvolupament web contemporani. El **DOM** (Document Object Model), estandarditzat pel W3C i el WHATWG, proporciona una representació en arbre en memòria dels documents HTML5 i XML, permetent a JavaScript llegir, afegir, modificar i eliminar elements i estils en temps real.

Es tracten amb profunditat tècnica:
- **Navegació i Selecció de Nodes:** Els selectors canònics `querySelector()` i `querySelectorAll()`, distingint col·leccions estàtiques de col·leccions vives (*NodeList* vs *HTMLCollection*).
- **Mutació Segura del DOM:** Prevenció d'atacs de Cross-Site Scripting (XSS) mitjançant l'ús estricte de `textContent` en lloc d'`innerHTML` per a continguts no verificats, i optimització de rendiment mitjançant `DocumentFragment`.
- **Arquitectura d'Esdeveniments W3C:** Registre desacoblat mitjançant `addEventListener()`, gestió de fases de captura i propagació (*bubbling*), mètodes `stopPropagation()` i `preventDefault()`, i el patró de disseny de **Delegació d'Esdeveniments**.
- **Comunicació Asíncrona:** Consum de serveis web i APIs REST mitjançant la **Fetch API**, estructuració de respostes en format **JSON** (JavaScript Object Notation) i resolució declarativa mitjançant `async` i `await`.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA3 (DAW / DAM / ASIX):** Desenvolupa documents web interactius utilitzant llenguatges de guió (scripts) de client, analitzant la seua estructura i sintaxi.
  - **CA 3.b:** S'han utilitzat mètodes per a seleccionar i manipular elements del document web a través de l'arbre d'objectes (DOM).
  - **CA 3.f:** S'han capturat i gestionat esdeveniments d'usuari i de document en diferents controls.
  - **CA 3.g:** S'han modificat de forma dinàmica les propietats i estils dels elements d'un document web.
  - **CA 3.h:** S'han realitzat peticions asíncrones per a recuperar i mostrar dades en format JSON sense recarregar la pàgina.

---

## Estructura de la Unitat de Treball

1. [UT 05.01: L'arbre DOM (Document Object Model) i mètodes de selecció de nodes](./ut0501.md)
2. [UT 05.02: Manipulació de contingut textual, atributs i classes CSS (classList)](./ut0502.md)
3. [UT 05.03: Creació, clonació i inserció de nodes en el DOM (DocumentFragment)](./ut0503.md)
4. [UT 05.04: El model d'esdeveniments W3C, propagació i delegació d'esdeveniments](./ut0504.md)
5. [UT 05.05: Comunicació asíncrona amb la Fetch API, async/await i format JSON](./ut0505.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut05-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Seguretat Web i XSS: textContent vs innerHTML</h4>
  </div>
  <p class="challenge-question">Per quina raó de seguretat informàtica està terminantment prohibit assignar entrades provinents d'usuaris a través de la propietat innerHTML en comptes d'utilitzar textContent?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè innerHTML redueix la velocitat de càrrega de les imatges JPEG.</button>
    <button class="btn-check" data-correct="true">B) Perquè innerHTML analitza el contingut com a marques HTML, permetent que atacants injecten codi JavaScript maliciós a través d'elements &lt;img onerror="..."&gt; provocant vulnerabilitats d'atacs de Cross-Site Scripting (XSS).</button>
    <button class="btn-check" data-correct="false">C) Perquè textContent només funciona si s'ha carregat prèviament la biblioteca jQuery.</button>
    <button class="btn-check" data-correct="false">D) Perquè innerHTML buida la memòria cau de navegació de l'usuari.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut05-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Rendiment de Mutació del DOM: DocumentFragment</h4>
  </div>
  <p class="challenge-question">Quin benefici de rendiment clau s'obté en utilitzar un DocumentFragment en inserir 1.000 nous elements &lt;li&gt; en una llista &lt;ul&gt; existent?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Converteix la llista en un fitxer JSON que es guarda a la base de dades del navegador.</button>
    <button class="btn-check" data-correct="true">B) Els elements s'afegeixen en memòria fora de l'arbre principal, provocant una única operació de reflux i repintat (*reflow & repaint*) en el document quan el fragment s'adjunta finalment a la llista, en comptes de mil repintats successius.</button>
    <button class="btn-check" data-correct="false">C) Elimina automàticament els elements duplicats mitjançant un algorisme de hashing.</button>
    <button class="btn-check" data-correct="false">D) Força la renderització per GPU mitjançant WebGL.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut05-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Patró d'Arquitectura: Delegació d'Esdeveniments</h4>
  </div>
  <p class="challenge-question">En què consisteix el patró de «Delegació d'Esdeveniments» (Event Delegation) en JavaScript?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) En assignar un addEventListener a cadascun dels centenars de botons individuals de la interfície.</button>
    <button class="btn-check" data-correct="true">B) En aprofitar la fase de propagació d'esdeveniments (bubbling) registrant un únic controlador en el contenidor pare comú i utilitzant e.target.closest() per a detectar quin fill concret ha disparat l'acció, suportant fins i tot elements afegits dinàmicament en el futur.</button>
    <button class="btn-check" data-correct="false">C) En delegar la gestió d'esdeveniments d'usuari a un servidor remot mitjançant WebSockets.</button>
    <button class="btn-check" data-correct="false">D) En emprar la funció eval() per a interpretar codi extern.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut05-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Gestió d'Errors en Peticions Asíncrones amb Fetch API</h4>
  </div>
  <p class="challenge-question">Quina particularitat presenta la Fetch API en relació amb els errors de resposta HTTP (com codis d'estat 404 Not Found o 500 Internal Server Error)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) La promesa de fetch() es rebutja (rejection) automàticament davant qualsevol codi d'estat diferent de 200.</button>
    <button class="btn-check" data-correct="true">B) La promesa de fetch() es resol amb èxit davant de codis 404 o 500; només es rebutja davant de fallades greus de xarxa o bloquejos de CORS. Per tant, cal verificar explícitament if (!response.ok) en el codi.</button>
    <button class="btn-check" data-correct="false">C) fetch() reintenta automàticament la petició 5 vegades abans de finalitzar.</button>
    <button class="btn-check" data-correct="false">D) La Fetch API requereix instal·lar connectors externs per a processar respostes JSON.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 5 LMSGI</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 5</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
