# UT 03: Estructures de Control de Flux Condicionals i Iteratives

<div class="interactive-progress-tracker" data-unit="ut03" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita l'alumnat en el control estricte del camí d'execució d'un programa informàtic en Java. D'acord amb el Teorema de Böhm-Jacopini, tot algorisme computable requereix la capacitat de prendre decisions i repetir tasques de manera controlada.

S'estudien en profunditat:
- **Bifurcació Condicional:** La sentència `if-else`, la resolució del problema del «dangling else» i les regles de curtcircuit en expressions booleanes complexes.
- **La Revolució del Switch Modern:** Des de la sentència clàssica de selecció basada en enters i cadenes (amb perill de caiguda accidental o *fall-through* per omissió de `break`), fins a les noves **Switch Expressions** (estandarditzades en Java 14) amb fletxa (`->`), retorn de valors amb `yield` i comprovació exhaustiva.
- **Bucles Pre-Test vs Post-Test:** Diferenciació rigorosa entre bucles d'avaluació prèvia (`while`), on el cos pot no arribar a executar-se cap vegada, i bucles d'avaluació posterior (`do-while`), on el cos s'executa com a mínim una vegada garantida.
- **Iteració amb Comptador (`for`):** Anatomia del bucle determinista (inicialització, condició de permanència, pas d'actualització), maneig de bucles niats i anàlisi de complexitat temporal bàsica.
- **Sentències de Bifurcació:** Comportament de `break` i `continue`, tant en la seua variant estàndard com en la variant amb etiquetes (*labeled statements*).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA3 (DAW / DAM):** Escriu i depura codi, analitzant i utilitzant les estructures de control del llenguatge.
  - **CA 3.a:** S'han utilitzat estructures de selecció alternatives i múltiples.
  - **CA 3.b:** S'han utilitzat estructures de repetició per a iterar sobre conjunts de dades.
  - **CA 3.c:** S'han controlat les condicions d'eixida dels bucles garantint la no generació de bucles infinits.
  - **CA 3.d:** S'han aplicat sentències de ruptura i continuació quan el disseny algorítmic ho requeria.
  - **CA 3.e:** S'han niat diferents estructures de control resolent problemes de gestió complexa.

---

## Estructura de la Unitat de Treball

1. [UT 03.01: Sentències condicionals simples, dobles i aniuades (if, else if, else)](./ut0301.md)
2. [UT 03.02: Selecció múltiple: switch clàssic vs Switch Expressions modernes (Java 14+)](./ut0302.md)
3. [UT 03.03: Bucles condicionals: while (pre-test) i do-while (post-test)](./ut0303.md)
4. [UT 03.04: Bucles per comptador: estructura del for clàssic i bucles niats](./ut0304.md)
5. [UT 03.05: Sentències de salt: break i continue (amb i sense etiquetes)](./ut0305.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut03-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Switch Expressions: La Fletxa -> i el Fall-Through</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge de seguretat de codi aporten les Switch Expressions modernes amb sintaxi de fletxa (case DILLUNS -> ...) respecte al switch tradicional amb dos punts (case DILLUNS:)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que només admeten caràcters en majúscula.</button>
    <button class="btn-check" data-correct="true">B) Eliminen completament el perill de caiguda accidental (fall-through): només s'executa la branca coincident sense necessitat d'escriure la sentència break en cada cas.</button>
    <button class="btn-check" data-correct="false">C) Que converteixen el codi en multithreading automàtic.</button>
    <button class="btn-check" data-correct="false">D) Que s'executen exclusivament a la memòria cau L2.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut03-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Pre-Test vs Post-Test: while vs do-while</h4>
  </div>
  <p class="challenge-question">En quina situació operativa és mandatori triar un bucle do-while en lloc d'un bucle while ordinari?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Quan sabem amb antelació el nombre exacte de voltes que farem.</button>
    <button class="btn-check" data-correct="true">B) Quan la lògica del programa exigeix que el cos del bucle s'execute obligatòriament com a mínim una vegada abans de poder avaluar la condició (com la presentació d'un menú d'opcions o la petició d'una contrasenya).</button>
    <button class="btn-check" data-correct="false">C) Quan iterem sobre un array de dades estàtic.</button>
    <button class="btn-check" data-correct="false">D) Quan no disposem de memòria RAM lliure.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut03-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>La Paraula Clau yield en Switch Expressions</h4>
  </div>
  <p class="challenge-question">Quina funció compleix la sentència yield a l'interior d'un bloc de codi d'una Switch Expression en Java?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Aturar temporalment el fil d'execució durant uns mil·lisegons.</button>
    <button class="btn-check" data-correct="true">B) Retornar el valor final de la Switch Expression quan una branca conté un bloc multilínia delimitat per claus { }.</button>
    <button class="btn-check" data-correct="false">C) Llançar una excepció per valor invàlid.</button>
    <button class="btn-check" data-correct="false">D) Forçar la compilació en format Bytecode antic.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut03-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Ús d'Etiquetes (Labels) en Sentències de Salt</h4>
  </div>
  <p class="challenge-question">Per a què s'utilitza una etiqueta associada a un break (com break bucleExtern;) en Java?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Per a reiniciar el programa des del principi.</button>
    <button class="btn-check" data-correct="true">B) Per a interrompre i sortir immediatament d'un bucle exterior específic en estructures de bucles profundament niats, en lloc de trencar només el bucle més intern.</button>
    <button class="btn-check" data-correct="false">C) Per a canviar el nom de la classe en execució.</button>
    <button class="btn-check" data-correct="false">D) Per a generar un arxiu de registre log al disc.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 3 PRG</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 3</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
