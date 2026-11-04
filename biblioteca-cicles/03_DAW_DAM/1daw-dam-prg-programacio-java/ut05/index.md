# UT 05: Estructures de Dades Estàtiques: Vectors i Matrius en Java

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

Aquesta unitat formativa capacita l'alumnat en la gestió eficient d'agrupacions contigües de dades en memòria mitjançant **Estructures de Dades Estàtiques** (*Arrays* o Vectors). En Java, els arrays són tractats formalment com a objectes de ple dret a la memòria dinàmica (*Heap*), amb una mida fixa immutable establerta en el moment de la seua instanciació:
- **Estructura i Representació Interna:** Reserva de blocs de memòria contigus, verificació automàtica de límits en temps d'execució (*Bounds Checking*) i prevenció d'accessos invàlids mitjançant l'excepció `ArrayIndexOutOfBoundsException`.
- **Estratègies d'Iteració:** Diferenciació entre el bucle indexat tradicional (indispensable quan cal conèixer la posició numèrica o mutar elements) i el bucle **for-each** millorat (*Enhanced for loop*), optimitzat per a recorreguts de només lectura.
- **Model Multidimensional de Java:** Comprensió del model «arrays d'arrays», que permet la construcció tant de matrius tabulars regulars com d'**arrays irregulars o dentats (*Jagged / Ragged Arrays*)**, on cada fila té una longitud independent.
- **Algorísmica Fonamental:** Implementació i anàlisi de complexitat d'algorismes clàssics de cerca lineal ($O(N)$), cerca binària logarítmica ($O(\log N)$) i ordenació elemental (mètode de la bombolla, inserció directa i selecció).
- **La Biblioteca Estàndard d'Utilitats:** Ús avançat de `java.util.Arrays` per a operacions d'alta velocitat basades en codi natiu (`sort`, `binarySearch`, `copyOf`, `fill`, `deepToString`).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA1 (DAW / DAM):** Reconeix l'estructura d'un programa informàtic, identificant i relacionant els elements propis del llenguatge de programació utilitzat.
  - **CA 1.f:** S'han definit i manipulat estructures de dades estàtiques (vectors i matrius).
- **RA3 (DAW / DAM):** Escriu i depura codi, analitzant i utilitzant les estructures de control del llenguatge.
  - **CA 3.b:** S'han recorregut col·leccions i arrays mitjançant bucles for tradicionals i for-each millorats.
  - **CA 3.h:** S'han implementat algorismes d'ordenació i cerca sobre estructures de dades unidimensionals i bidimensionals.
  - **CA 3.i:** S'han utilitzat les classes d'utilitat de la biblioteca estàndard per a la gestió d'arrays.

---

## Estructura de la Unitat de Treball

1. [UT 05.01: Fonaments dels arrays unidimensionals: declaració, instanciació i propietat length](./ut0501.md)
2. [UT 05.02: Recorregut d'arrays: bucle for clàssic vs for-each millorat (Enhanced for)](./ut0502.md)
3. [UT 05.03: Matrius multidimensionals: arrays d'arrays i matrius irregulars (Jagged Arrays)](./ut0503.md)
4. [UT 05.04: Algorismes clàssics: cerca lineal, cerca binària i ordenació per bombolla](./ut0504.md)
5. [UT 05.05: La classe d'utilitats java.util.Arrays (sort, binarySearch, copyOf, deepToString)](./ut0505.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut05-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Immutabilitat de la Mida dels Arrays en Java</h4>
  </div>
  <p class="challenge-question">Per quina raó tècnica un array ordinari en Java (com int[] vector = new int[10];) no pot redimensionar-se dinàmicament per a afegir un onzé element?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els arrays s'emmagatzemen a la memòria cau ROM.</button>
    <button class="btn-check" data-correct="true">B) Perquè la JVM reserva un bloc contigu exacte de memòria al Heap en el moment de la instanciació per motius de màxim rendiment d'accés; la propietat length és una constant immutable que no pot variar.</button>
    <button class="btn-check" data-correct="false">C) Perquè cal tindre instal·lat el paquet MySQL.</button>
    <button class="btn-check" data-correct="false">D) Perquè el compilador només admet números menors que 10.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut05-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Limitació del Bucle for-each davant de Mutacions</h4>
  </div>
  <p class="challenge-question">Què ocorre si intentem inicialitzar a zero un array de números enters utilitzant: for (int x : array) { x = 0; } ?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) L'array queda perfectament inicialitzat amb zeros a totes les posicions.</button>
    <button class="btn-check" data-correct="true">B) L'array original roman completament inalterat, ja que la variable x és només una còpia local de cada element en cada iteració; per a modificar elements cal utilitzar el bucle for clàssic amb índexs (array[i] = 0).</button>
    <button class="btn-check" data-correct="false">C) Es genera una excepció fatal ArrayIndexOutOfBoundsException.</button>
    <button class="btn-check" data-correct="false">D) El bucle entra en una iteració infinita.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut05-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Arquitectura d'Arrays Dentats o Irregulars (Jagged Arrays)</h4>
  </div>
  <p class="challenge-question">Com s'organitzen internament les matrius multidimensionals en Java que fa possible que cada fila tinga un nombre diferent de columnes?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Java no suporta matrius amb files de diferent longitud.</button>
    <button class="btn-check" data-correct="true">B) En Java, una matriu bidimensional és en realitat un array unidimensional d'objectes on cada posició conté una referència independent cap a un altre array unidimensional, permetent que cadascun d'aquests arrays fills tinga la seua pròpia mida personalitzada.</button>
    <button class="btn-check" data-correct="false">C) Mitjançant una taula hash emmagatzemada a la memòria Stack.</button>
    <button class="btn-check" data-correct="false">D) Fent servir el mètode Math.random().</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut05-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Precondició Estricta de la Cerca Binària (Arrays.binarySearch)</h4>
  </div>
  <p class="challenge-question">Quina condició prèvia indispensable ha de complir escrupolosament un array abans de poder executar sobre ell el mètode Arrays.binarySearch()?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que tots els seus elements siguen nombres enters positius.</button>
    <button class="btn-check" data-correct="true">B) L'array ha d'estar ordenat prèviament de forma ascendent (com per exemple mitjançant Arrays.sort()); en cas contrari, el resultat de la cerca binària és totalment indefinit i impredictible.</button>
    <button class="btn-check" data-correct="false">C) Que la seua longitud siga una potència de dos exacta.</button>
    <button class="btn-check" data-correct="false">D) Que no continga cap valor repetit.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 5 PRG</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 5</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
