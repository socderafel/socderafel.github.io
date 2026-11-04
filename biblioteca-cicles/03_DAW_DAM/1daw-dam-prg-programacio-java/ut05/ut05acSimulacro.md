---
title: "Simulacre pràctic UT5"
unit: "5"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT05"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# Simulacre pràctic UT5

### **Sistema de Personatges Pixar/Disney**

1. Crear una classe abstracta `PersonajeDisney` que represente qualsevol personatge de l'universo Disney.

  - Els seus atributs són: `nombre`, `edad`, `pelicula`.

  - Els mètodes: 

    - `void mostrar()` → mostra per pantalla totes les dades del personatge.

    - `void cumplirAnios()` → incrementa l'edat en 1.

    - `abstract void hablar()`

1. Implementa una interfície `Aventurero`, que contendrá el mètode `void explorar()`.

**Classes que heredan de `PersonajeDisney`:**

1. 

Crea la classe `Woody` amb:

  - Atributs: si és o no Lider en la película.

  - Mètodes:  

    - `void hablar()` → Imprime el text *'A l'infinit i més allà… bo, quasi!'*.

    - `void mostrar()` → Inclou els nous atributs de la classe. A més mostra el resultat del mètode `hablar()`.

1. 

Crea la classe `Nemo` amb:

  - Atributs: si té o no una aleta xicoteta.

  - Mètodes:

    - `void hablar()` → Imprime el text *'Papá'*.

    - `void mostrar()` → Inclou els nous atributs de la classe. A més mostra el resultat del mètode `hablar()`.

**Classes que heredan de `PersonajeDisney` i implementan `Aventurero`:**

1. 

Crea la classe `BuzzLightyear` amb:

  - Atributs: si conté o no el mode espacial.

  - Mètodes: 

    - `void hablar()` → Imprime el text *'Sóc Buzz Lightyear, guardián espacial!'*.

    - `void explorar()` → Imprime el text *'Buzz explora l'espai en el seu nave.'*.

    - `void mostrar()` → Inclou els nous atributs de la classe. A més mostra els resultats dels mètodes `hablar()` i `explorar()`.

1. 

Crea la classe `Dory` amb:

  - Atributs: si té o no memòria.

  - Mètodes:

    - `void hablar()` → Imprime el text *'Segueix nadant, segueix nadant…'*.

    - `void explorar()` → Imprime el text *'Dory explora l'océano cercant respostes.'*.

    - `void mostrar()` → Inclou els nous atributs de la classe. A més mostra els resultats dels mètodes `hablar()` i `explorar()`.

**Classe `Test`**

1. Crear un ArrayList de personatges de Disney i afegir un objecte de cada tipus. 

1. Recórrer la llista i anomenar al mètode `mostrar()` de cada objecte.

**El diagrama UML seria:**

![Diagrama Marvel](../img/img_ut05_simulacro.svg)

> **📌 OJO!**
> 

> No olvides crear els constructors, getters i setters necessaris en cada classe.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Simulacre pràctic UT5** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quina paraula clau s'utilitza en Java perquè una subclasse herete els atributs i mètodes d'una superclasse, i quina per a implementar una interfície?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) 'extends' per a heretar d'una classe i 'implements' per a implementar una interfície.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) 'implements' per a heretar d'una classe i 'extends' per a una interfície.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) 'inherits' i 'uses'.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina característica defineix una classe abstracta ('abstract class') en Java?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) No pot tindre cap atribut ni constructor.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Tots els seus mètodes han de ser privats i estàtics.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) No es pot instanciar directament amb 'new' i pot contindre tant mètodes abstractes (sense cos) com mètodes implementats.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> El polimorfisme permet que una variable de referència del tipus de la superclasse o interfície apunte a objectes de qualsevol de les seues subclasses i execute el mètode sobreescrit (@Override) en temps d'execució.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="super" data-hint="Fa referència a la superclasse (5 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quina paraula clau s'utilitza en el constructor d'una subclasse per a invocar el constructor de la seua classe pare?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Simulacre pràctic UT5**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD05" data-activity="ut05acSimulacro">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

