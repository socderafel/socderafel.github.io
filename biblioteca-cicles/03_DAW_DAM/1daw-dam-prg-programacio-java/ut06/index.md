# UT 06: Estructures de Dades Dinàmiques i Recursivitat en Java

<div class="interactive-progress-tracker" data-unit="ut06" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita l'alumnat en l'ús d'estructures de dades amb capacitat de creixement i reducció dinàmica en temps d'execució mitjançant el **Java Collections Framework (JCF)**, integrat en el paquet `java.util`. Es resol la rigidesa de mida dels arrays estàndards, oferint estructures complexes altament optimitzades:
- **Arquitectura d'Interfícies del JCF:** Comprensió del disseny orientat a interfícies (`Collection<E>`, `List<E>`, `Set<E>`, `Queue<E>`, `Map<K, V>`) i la programació amb **Genèrics (*Generics: `<T>`*)**, que garanteix seguretat de tipus en temps de compilació (*type-safety*) eliminant càstings perillosos.
- **Llistes Dinàmiques:** Anàlisi comparativa d'enginyeria entre `ArrayList` (basat en array dinàmic redimensionable amb accés aleatori en temps constant $O(1)$) i `LinkedList` (llista doblement enllaçada eficient en insercions i esborrats als extrems).
- **Conjunts i Integritat:** Ús de conjunts (`Set`) que impedeixen duplicats; diferenciació entre `HashSet` (basat en taula hash i el contracte `hashCode()` / `equals()`) i `TreeSet` (conjunt ordenat automàticament mitjançant arbres roig-negre basat en `Comparable`).
- **Mapes Clau-Valor:** Emmagatzematge associatiu mitjançant `HashMap` i `TreeMap`, i navegació avançada d'entrades mitjançant `entrySet()`.
- **Recursivitat i Pila d'Execució:** Disseny d'algorismes recursius rigorosos, delimitació de casos base, anàlisi de profunditat i prevenció de desbordaments de pila.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA5 (DAW / DAM):** Utilitza de forma avançada classes de biblioteques de l'entorn de desenvolupament (col·leccions, estructures dinàmiques, genèrics).
  - **CA 5.a:** S'han identificat les interfícies i classes fonamentals del marc de col·leccions de Java.
  - **CA 5.b:** S'han utilitzat estructures de llista dinàmica (ArrayList, LinkedList) seleccionant la més eficient segons el cas d'ús.
  - **CA 5.c:** S'han gestionat conjunts d'elements únics (HashSet, TreeSet) implementant criteris d'ordenació.
  - **CA 5.d:** S'han utilitzat estructures de mapa (HashMap, TreeMap) per a l'emmagatzematge i recuperació ràpida de dades clau-valor.
  - **CA 5.e:** S'han aplicat tècniques de recursivitat per a resoldre problemes algorítmics autoreferencials.

---

## Estructura de la Unitat de Treball

1. [UT 06.01: Arquitectura del Java Collections Framework i tipus genèrics (Generics: <T>)](./ut0601.md)
2. [UT 06.02: Llistes dinàmiques indexades: ArrayList vs LinkedList](./ut0602.md)
3. [UT 06.03: Conjunts sense duplicats: HashSet vs TreeSet i classes embolcalladores (Wrappers)](./ut0603.md)
4. [UT 06.04: Diccionaris clau-valor: HashMap i TreeMap (keySet, values, entrySet)](./ut0604.md)
5. [UT 06.05: Fonaments de la recursivitat: cas base, descomposició i gestió de la pila](./ut0605.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut06-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Seguretat de Tipus amb Genèrics (Generics)</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge d'enginyeria va aportar la introducció dels Genèrics (com List&lt;String&gt; en lloc del tipus cru List) en Java 5?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que les col·leccions només ocupen 1 byte a la memòria RAM.</button>
    <button class="btn-check" data-correct="true">B) Proporciona comprovació estricta de tipus en temps de compilació (type-safety), eliminant la necessitat de fer càstings explícits continus i evitant errors fatals de ClassCastException en temps d'execució.</button>
    <button class="btn-check" data-correct="false">C) Que impedeix que el programa puga guardar més de 100 elements.</button>
    <button class="btn-check" data-correct="false">D) Que permet guardar tipus primitius com int directament sense autoboxing.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut06-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>ArrayList vs LinkedList: Criteri de Selecció</h4>
  </div>
  <p class="challenge-question">Quan és tècnicament superior utilitzar ArrayList en comptes de LinkedList?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Quan necessitem inserir o eliminar constantment elements al principi de la llista.</button>
    <button class="btn-check" data-correct="true">B) Quan l'operació predominant és la lectura o accés aleatori a elements per la seua posició numèrica (mètode get(i)), ja que ArrayList ofereix accés directe en temps constant O(1) gràcies al seu array intern contigu.</button>
    <button class="btn-check" data-correct="false">C) Quan volem evitar que es produïsquen duplicats en la col·lecció.</button>
    <button class="btn-check" data-correct="false">D) Quan treballem sense connexió a internet.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut06-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>El Contracte de HashSet: hashCode() i equals()</h4>
  </div>
  <p class="challenge-question">Com determina una instància de HashSet&lt;E&gt; si un nou objecte que intentem afegir és un duplicat que ha de ser rebutjat?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Comparant les seues referències de memòria amb l'operador ==.</button>
    <button class="btn-check" data-correct="true">B) Calcula primer el codi hash de l'objecte mitjançant hashCode() per a trobar el recipient (bucket) i, si hi ha coincidència, crida al mètode equals() per a confirmar si són idèntics.</button>
    <button class="btn-check" data-correct="false">C) Ordenant tots els elements alfabèticament de la A a la Z.</button>
    <button class="btn-check" data-correct="false">D) Preguntant al sistema operatiu.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut06-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>El Paper del Cas Base en la Recursivitat</h4>
  </div>
  <p class="challenge-question">Quina conseqüència crítica té dissenyar un mètode recursiu que manca d'un «cas base» correctament delimitat?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) El mètode retorna 0 de forma immediata.</button>
    <button class="btn-check" data-correct="true">B) El mètode es crida a si mateix de forma infinita, acumulant marcs de pila a la memòria Stack fins a esgotar-la i llançar un error fatal irrecuperable: java.lang.StackOverflowError.</button>
    <button class="btn-check" data-correct="false">C) El codi es recompila en un arxiu JAR executable.</button>
    <button class="btn-check" data-correct="false">D) El sistema activa automàticament el Garbage Collector per a reiniciar el bucle.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="aules-delivery-card">
  <div class="delivery-icon">📥</div>
  <div class="delivery-details">
    <h4>Lliurament Aules · Unitat 6 PRG</h4>
    <p>En completar les 5 sessions pràctiques d'aquesta unitat, descarrega el resum d'activitats en PDF i adjunta'l a la tasca d'Aules corresponent.</p>
    <span class="delivery-deadline">Termini: Final del període de la Unitat 6</span>
  </div>
  <button class="btn-aules-download" onclick="window.print()">Descarregar PDF de la Unitat</button>
</div>
