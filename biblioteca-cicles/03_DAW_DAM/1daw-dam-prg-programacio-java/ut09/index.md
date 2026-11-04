# UT 09: Gestió d'Errors i Control d'Excepcions en Temps d'Execució

<div class="interactive-progress-tracker" data-unit="ut09" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita l'alumnat en el tractament robust i professional d'errors en temps d'execució mitjançant el model d'**Excepcions de Java**. Es substitueix l'antic retorn de codis d'error per un model estructurat i net que separa clarament la lògica de negoci normal del flux de recuperació davant situacions anòmales:
- **Jerarquia de Classes `Throwable`:** Comprensió profunda de l'arbre d'herència (`Throwable`, `Error`, `Exception`, `RuntimeException`) i diferenciació fonamental entre **excepcions comprovades (*checked*)** i **no comprovades (*unchecked*)**.
- **Mecanisme Estructurat `try-catch-finally`:** Captura d'errors, gestió de múltiples blocs catch, ordenació correcta de captura per jerarquia i el paper de garantia del bloc `finally`.
- **Gestió Moderna de Recursos (*ARM*):** La sentència `try-with-resources` introduïda en Java 7, contracte de la interfície `AutoCloseable` i eliminació definitiva de fuites de descriptors de fitxer i connexions.
- **Propagació i Llançament:** Ús de `throw` per a disparar anomalies, clàusula `throws` en la signatura de mètodes, encapsulament d'excepcions (*exception chaining*) i traçabilitat de la pila (*stack trace*).
- **Excepcions de Domini Personalitzades:** Disseny de noves classes d'excepció que expressen amb claredat els errors de negoci de l'aplicació (`SaldoInsuficientException`, `UsuariNoTrobatException`).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA6 (DAW / DAM):** Desenvolupa aplicacions gestionant excepcions.
  - **CA 6.a:** S'ha identificat la jerarquia d'excepcions proporcionada per la plataforma Java.
  - **CA 6.b:** S'han capturat i tractat excepcions utilitzant la sentència try-catch.
  - **CA 6.c:** S'han tancat i alliberat recursos de manera automàtica mitjançant la instrucció try-with-resources.
  - **CA 6.d:** S'han propagat excepcions a través de mètodes cridats mitjançant la clàusula throws.
  - **CA 6.e:** S'han creat i llançat classes d'excepcions personalitzades per a modelar errors específics de l'aplicació.

---

## Estructura de la Unitat de Treball

1. [UT 09.01: Jerarquia d'errors i excepcions: Throwable, Error, Exception i RuntimeException](./ut0901.md)
2. [UT 09.02: Tractament estructurat: blocs try, catch, multi-catch i finally](./ut0902.md)
3. [UT 09.03: Gestió automàtica de recursos: try-with-resources i la interfície AutoCloseable](./ut0903.md)
4. [UT 09.04: Propagació i llançament: les paraules clau throw, throws i encadenament](./ut0904.md)
5. [UT 09.05: Creació d'excepcions personalitzades i bones pràctiques d'enginyeria](./ut0905.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut09-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Excepcions Comprovades vs No Comprovades</h4>
  </div>
  <p class="challenge-question">Quina diferència imposa el compilador de Java entre una excepció filla de `RuntimeException` i una excepció filla directa d'`Exception`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Les RuntimeException bloquegen la màquina i no es poden capturar mai.</button>
    <button class="btn-check" data-correct="true">B) Les filles directes d'Exception són comprovades (checked) i el compilador obliga a capturar-les amb try-catch o declarar-les amb throws; les filles de RuntimeException són no comprovades (unchecked) i indiquen fallades de programació que no requereixen tractament obligatori en compilació.</button>
    <button class="btn-check" data-correct="false">C) Les RuntimeException només ocorren quan falla el maquinari físic de la memòria.</button>
    <button class="btn-check" data-correct="false">D) No hi ha cap diferència; són completament intercanviables.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut09-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Execució Garantida amb `finally`</h4>
  </div>
  <p class="challenge-question">En quines circumstàncies s'executa el bloc `finally` associat a una estructura `try-catch`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Només quan es produeix una excepció de xarxa.</button>
    <button class="btn-check" data-correct="true">B) S'executa sempre de manera garantida, tant si el bloc try acaba amb èxit com si es produeix una excepció capturada, o fins i tot si es llança un return dins del try.</button>
    <button class="btn-check" data-correct="false">C) Només quan cap bloc catch no ha funcionat.</button>
    <button class="btn-check" data-correct="false">D) Només en entorns de producció amb llicència.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut09-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>El Mecanisme `try-with-resources`</h4>
  </div>
  <p class="challenge-question">Quin requisit ha de complir un objecte perquè puga ser utilitzat dins dels parèntesis de la instrucció `try (Recurs r = ...)`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Ha d'estendre la classe Thread.</button>
    <button class="btn-check" data-correct="true">B) La seua classe ha d'implementar la interfície java.lang.AutoCloseable (o java.io.Closeable), que conté el mètode close().</button>
    <button class="btn-check" data-correct="false">C) Ha de ser una col·lecció de tipus ArrayList.</button>
    <button class="btn-check" data-correct="false">D) Ha d'estar guardat obligatòriament en una base de dades SQL.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="prg-ut09-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Antipatró de Captura Buida</h4>
  </div>
  <p class="challenge-question">Per què és considerat un dels pitjors antipatrons de programació escriure un bloc `catch (Exception e) {}` completament buit?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè la màquina virtual s'apaga sola.</button>
    <button class="btn-check" data-correct="true">B) Perquè engoleix i silencia completament qualsevol anomalia sense deixar rastre ni registre als logs, fent que el programa puga continuar en un estat inconsistent i fent la depuració impossible.</button>
    <button class="btn-check" data-correct="false">C) Perquè consumeix el 100% de la memòria d'emmagatzematge del disc.</button>
    <button class="btn-check" data-correct="false">D) Perquè el compilador converteix automàticament les variables a caràcters xinesos.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Gestió d'Excepcions de Negoci i Auditoria</h4>
  </div>
  <p>Dissenya un sistema de transferències bancàries amb excepcions pròpies (`SaldoInsuficientException`, `CompteBloquejatException`). Implementa un servei que processe operacions amb `try-with-resources` per a registrar cada intent en un fitxer de log d'auditoria, garantint que cap anomalia quede silenciada.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
