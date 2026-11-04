# UT 10: Persistència en Fitxers i Entrada/Eixida de Fluxos (Java I/O i NIO.2)

<div class="interactive-progress-tracker" data-unit="ut10" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita l'alumnat en els mecanismes per a fer que les dades d'una aplicació sobrevisquen al tancament del programa mitjançant la **persistència física en dispositius d'emmagatzematge secundari**. Es cobreix des del paquet clàssic `java.io` fins al model modern d'alt rendiment `java.nio.file` (NIO.2):
- **Arquitectura de Fluxos (*Streams*):** Comprensió del model de canonades de transmissió seqüencial, diferenciació fonamental entre **fluxos de bytes** (imatges, àudio, binaris) basats en `InputStream` / `OutputStream` i **fluxos de caràcters** (text, codificació UTF-8) basats en `Reader` / `Writer`.
- **Escriptura i Lectura de Fitxers de Text:** Optimització mitjançant memòries intermèdies (*buffers*) amb `BufferedReader` i `BufferedWriter`, processament estructurat amb `Scanner` i impressió formatada amb `PrintWriter`.
- **El Marc Modern Java NIO.2:** Ús de les abstraccions d'alta eficiència introduïdes en Java 7: `Path`, `Paths` i la classe d'utilitats massives `Files` (`Files.readAllLines()`, `Files.walk()`, `Files.copy()`), amb suport per a metadades i operacions atòmiques.
- **Dades Binàries i Accés Aleatori:** Emmagatzematge primitiu binari tipat amb `DataInputStream` / `DataOutputStream` i posicionament arbitrari del punter de fitxer mitjançant `RandomAccessFile`.
- **Serialització d'Objectes:** Transformació directa de grafs d'objectes en seqüències de bytes mitjançant `ObjectOutputStream` / `ObjectInputStream`, contracte de la interfície marcadora `Serializable`, el camp crític de versió `serialVersionUID` i l'exclusió de camps sensibles amb la paraula clau `transient`.

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA7 (DAW / DAM):** Utilitza operacions d'entrada/eixida per a gestionar la persistència de la informació en fitxers.
  - **CA 7.a:** S'han identificat les característiques dels fluxos d'informació i els tipus de fitxers.
  - **CA 7.b:** S'han utilitzat fluxos de caràcters per a llegir i escriure fitxers de text pla aplicant memòria intermèdia.
  - **CA 7.c:** S'han utilitzat les classes de Java NIO.2 per a gestionar fitxers, directoris i rutes del sistema.
  - **CA 7.d:** S'han utilitzat fluxos de bytes per a emmagatzemar i recuperar dades en format binari.
  - **CA 7.e:** S'han serialitzat i deserialitzat objectes per a persistir el seu estat entre execucions.

---

## Estructura de la Unitat de Treball

1. [UT 10.01: Arquitectura de fluxos (Streams): bytes vs caràcters (I/O clàssic)](./ut1001.md)
2. [UT 10.02: Lectura i escriptura eficient de text: BufferedReader, BufferedWriter i PrintWriter](./ut1002.md)
3. [UT 10.03: Java NIO.2: gestió moderna del sistema de fitxers amb Path i Files](./ut1003.md)
4. [UT 10.04: Dades binàries i accés directe: DataStreams i RandomAccessFile](./ut1004.md)
5. [UT 10.05: Serialització d'objectes: Serializable, serialVersionUID i transient](./ut1005.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut10-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Diferència entre Bytes i Caràcters</h4>
  </div>
  <p class="challenge-question">Per què és un error d'enginyeria utilitzar `FileInputStream` directament per a llegir un fitxer de text amb caràcters catalans com 'à', 'é' o 'ç' sense especificar un joc de caràcters?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els caràcters catalans esborren la memòria cau de la JVM.</button>
    <button class="btn-check" data-correct="true">B) Perquè FileInputStream llegeix bytes individuals (8 bits), mentre que caràcters especials en codificacions com UTF-8 ocupen múltiples bytes (2 a 4 bytes), provocant caràcters corruptes (mojibake) si no es decodifiquen amb un Reader adequat.</button>
    <button class="btn-check" data-correct="false">C) Perquè FileInputStream només pot obrir fitxers acabats en .exe.</button>
    <button class="btn-check" data-correct="false">D) Perquè el sistema operatiu requereix permisos d'administrador per a llegir vocals.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut10-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>El Paper de la Memòria Intermèdia (*Buffering*)</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge de rendiment aporta embolcallar un `FileReader` dins d'un `BufferedReader`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Xifra el fitxer amb clau AES de 256 bits.</button>
    <button class="btn-check" data-correct="true">B) Redueix dràsticament el nombre d'operacions físiques de lectura al disc dur o SSD llegint grans blocs de dades de cop a la memòria RAM (buffer de 8 KB típicament), en lloc de fer una costosa crida de sistema al disc per cada caràcter individual.</button>
    <button class="btn-check" data-correct="false">C) Comprimeix automàticament el fitxer en format ZIP.</button>
    <button class="btn-check" data-correct="false">D) Permet llegir fitxers que es troben tancats amb clau física.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut10-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Operacions Declaratives amb Java NIO.2</h4>
  </div>
  <p class="challenge-question">Com es pot llegir tot el contingut d'un fitxer de text de mida moderada en una sola línia amb Java NIO.2?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) FileReader.readAll(new File("dades.txt"));</button>
    <button class="btn-check" data-correct="true">B) List&lt;String&gt; linies = Files.readAllLines(Path.of("dades.txt"), StandardCharsets.UTF_8);</button>
    <button class="btn-check" data-correct="false">C) System.in.readText("dades.txt");</button>
    <button class="btn-check" data-correct="false">D) Scanner.dump("dades.txt");</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut10-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Seguretat i Atributs `transient`</h4>
  </div>
  <p class="challenge-question">Quin efecte té marcar un atribut com a `private transient String contrasenya;` en una classe que implementa `Serializable`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) La contrasenya es guarda en un fitxer de text separat.</button>
    <button class="btn-check" data-correct="true">B) L'atribut és ignorat de manera deliberada durant el procés de serialització de l'objecte, evitant que dades sensibles o estats efímers es guarden al disc; en deserialitzar-se, rebrà el valor per defecte del seu tipus (null).</button>
    <button class="btn-check" data-correct="false">C) El camp es xifra automàticament amb la clau pública de l'usuari.</button>
    <button class="btn-check" data-correct="false">D) La classe ja no es pot compilar.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Gestor de Persistència de Catàleg</h4>
  </div>
  <p>Desenvolupa una aplicació que permeta exportar un catàleg de productes a dos formats diferents: fitxer CSV estructurat mitjançant `BufferedWriter` o Java NIO.2, i persistència binària d'objectes mitjançant `ObjectOutputStream`. Implementa també els mètodes de recuperació per a restaurar el catàleg a la memòria.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
