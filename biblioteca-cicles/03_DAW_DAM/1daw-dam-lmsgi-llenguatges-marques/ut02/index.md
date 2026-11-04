# UT 02: Llenguatges de Marques per a la Web: HTML5 i Sindicació de Continguts

<div class="interactive-progress-tracker" data-unit="ut02" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa aborda en profunditat el llenguatge de marques troncal de la World Wide Web: **HTML5** (HyperText Markup Language 5), estandarditzat pel W3C i el WHATWG. S'analitza l'evolució històrica des del primitiu HTML 1.0 fins a la separació canònica de responsabilitats en la web moderna:
- **Estructura i Semàntica:** HTML5.
- **Presentació i Disseny Visual:** CSS3.
- **Comportament i Dinamisme:** JavaScript (ECMAScript).

S'incideix de manera rigorosa en el disseny semàntic per a motors de cerca (SEO tècnic) i accessibilitat web (especificació WAI-ARIA i directrius WCAG 2.2), l'arquitectura de formularis d'alt rendiment amb validació nativa en client, la integració de continguts multimèdia sense connectors externs propietaris i la sindicació de notícies mitjançant dialectes XML com ara **RSS 2.0** i **Atom 1.0**.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA2 (DAW / DAM / ASIX):** Desenvolupa documents web utilitzant llenguatges de marques, analitzant la seua estructura i aplicant mecanismes de sindicació de continguts.
  - **CA 2.a:** S'han identificat les etiquetes i atributs propis del llenguatge de marques HTML5.
  - **CA 2.b:** S'han emprat eines d'edició de codi i entorns de desenvolupament web.
  - **CA 2.c:** S'han creat documents web amb una estructura semàntica òptima, garantint la separació entre contingut i disseny.
  - **CA 2.d:** S'han inserit elements multimèdia i hipervincles garantint la integritat referencial.
  - **CA 2.e:** S'han definit formularis de captura de dades especificant mètodes d'enviament, camps d'entrada i regles de validació.
  - **CA 2.f:** S'han creat i configurat canals de sindicació web (RSS/Atom) per a la distribució d'informació dinàmica.
  - **CA 2.g:** S'ha comprovat l'accessibilitat i la interoperabilitat dels documents en diferents navegadors i dispositius.

---

## Estructura de la Unitat de Treball

1. [UT 02.01: Estructura semàntica i metadades en HTML5 (DOCTYPE, html, head, meta, header, nav, main, article, section, aside, footer)](./ut0201.md)
2. [UT 02.02: Jerarquia textual, hipervincles, llistes i rutes relatives/absolutes](./ut0202.md)
3. [UT 02.03: Taules de dades complexes i maquetació semàntica accessible](./ut0203.md)
4. [UT 02.04: Formularis web moderns i validació nativa de controls d'entrada](./ut0204.md)
5. [UT 02.05: Multimèdia natiu (àudio, vídeo) i sindicació de continguts (RSS 2.0 i Atom)](./ut0205.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut02-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Semàntica HTML5 i Separació de Responsabilitats</h4>
  </div>
  <p class="challenge-question">Quina és la raó tècnica fonamental per la qual l'especificació HTML5 va introduir etiquetes semàntiques estructurals com &lt;header&gt;, &lt;main&gt;, &lt;nav&gt;, &lt;article&gt; i &lt;section&gt; en substitució de la proliferació massiva de blocs genèrics &lt;div id="..."&gt;?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els navegadors antics no podien renderitzar els blocs &lt;div&gt; sense extensions de programari privatives com Flash Player.</button>
    <button class="btn-check" data-correct="true">B) Perquè doten al document d'un significat inequívoc comprensible per a lectors de pantalla d'accessibilitat (tecnologies assistives) i aranyes de motors de cerca (SEO), creant fites estructurals (landmarks) natives.</button>
    <button class="btn-check" data-correct="false">C) Perquè les noves etiquetes apliquen automàticament regles de disseny visual amb Flexbox i CSS Grid sense necessitat de fulls d'estil.</button>
    <button class="btn-check" data-correct="false">D) Perquè redueixen el pes binari dels paquets TCP en la capa de transport en suprimir els atributs class del document.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut02-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Metadades d'Àmbit de Visió (Viewport) i Disseny Adaptatiu</h4>
  </div>
  <p class="challenge-question">En la capçalera &lt;head&gt; d'un document HTML5 modern, quin és l'objectiu fonamental de declarar l'etiqueta &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Forçar una resolució estàtica de pantalla de 1920x1080 píxels per a tots els dispositius que visiten la pàgina web.</button>
    <button class="btn-check" data-correct="true">B) Indicar al navegador mòbil que adapte l'amplada de l'àrea d'enquadrament (viewport) a l'amplada física del dispositiu i establisca el nivell de zoom inicial al 100%, evitant que simule un escriptori panoràmic reduït.</button>
    <button class="btn-check" data-correct="false">C) Activar automàticament la codificació de caràcters UTF-8 i impedir atacs de seguretat XSS en terminals Android i iOS.</button>
    <button class="btn-check" data-correct="false">D) Permetre que el motor de renderitzat compile codi JavaScript en paral·lel utilitzant Web Workers.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut02-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Arquitectura de Formularis: Mètodes HTTP i Codificació MIME</h4>
  </div>
  <p class="challenge-question">Quan dissenyem un formulari HTML5 per a carregar fitxers binaris des del client (com ara imatges o documents PDF mitjançant &lt;input type="file"&gt;), quina combinació d'atributs en l'etiqueta &lt;form&gt; és tècnicament obligatòria?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) method="GET" i enctype="application/x-www-form-urlencoded".</button>
    <button class="btn-check" data-correct="false">B) method="POST" i enctype="text/plain".</button>
    <button class="btn-check" data-correct="true">C) method="POST" i enctype="multipart/form-data".</button>
    <button class="btn-check" data-correct="false">D) method="PUT" i enctype="application/json".</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="ut02-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Sindicació Web: Arquitectura de Feeds RSS i Atom</h4>
  </div>
  <p class="challenge-question">Quina afirmació descriu amb màxima precisió tècnica el funcionament dels canals de sindicació de continguts web (RSS 2.0 i Atom 1.0)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Són protocols binaris propietaris que requereixen un túnel VPN dedicat entre el servidor web i el lector de correu electrònic.</button>
    <button class="btn-check" data-correct="true">B) Són formats basats en XML que publiquen metadades estructurades (titular, enllaç, descripció, data) d'articles o recursos, permeses perquè agregadors de continguts (feed readers) consumisquen actualitzacions periòdiques de forma automatitzada.</button>
    <button class="btn-check" data-correct="false">C) Són scripts JavaScript que s'executen en el navegador per a injectar anuncis dinàmics en pàgines d'inici.</button>
    <button class="btn-check" data-correct="false">D) Són fulls d'estil CSS dissenyats específicament per a optimitzar la impressió de documents en paper.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 2 LMSGI</h4>
    <p>En finalitzar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 2</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
