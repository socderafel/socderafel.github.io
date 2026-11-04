---
title: "Quadern Complet d'Activitats — UD8 — Bases de Dades"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UT08"
prev_url: "act803.html"
prev_label: "⬅️ ⚡ Activitat 803"
next_url: "../index.html"
next_label: "🏠 Tornar a la Portada del Mòdul"
module: "BBDD"
---

# Quadern Pràctic d'Activitats — UD8: Bases de Dades No Relacionals (NoSQL) — MongoDB

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

En aquesta secció tens accés directe a totes les activitats pràctiques, fitxes de treball i reptes avaluables d'aquesta unitat didàctica. Pots accedir a cada activitat individualment o consultar el recull complet a continuació:

## 🗂️ Índex d'Activitats de la Unitat

- **[⚡ Activitat 801](act801.html)**
- **[⚡ Activitat 802: Activitat 1](act802.html)**
- **[⚡ Activitat 803](act803.html)**

---

## Activitat 801

👉 *[Obrir aquesta activitat en pàgina individual](act801.html)*

# Activitat 801

> **📌 Lliurament**
> 

> - El lliurament serà un **fitxer pdf** que continga la resposta a les preguntes de l'activitat.

> - El nom del fitxer ha de ser `801_NombreApellidos.pdf`.

> - S'haurà de lliurar en la tasca corresponent d'Aules en temps i forma.

> **📌 Es valorarà**
> 

> Es valorarà:

> - La claredat de la resposta.

> - La correcta maquetació del document.

> - Resposta correcta o aproximació a aquesta.

> Aquesta activitat servirà per a qualificar:

> - RA7: Gestiona la informació emmagatzemada en bases de dades no relacionals, avaluant i utilitzant les possibilitats que proporciona el sistema gestor.

>   - CE7. a)  Es han caracteritzat les bases de dades no relacionals. (100%)

>   - CE7. b) Es han avaluat els principals tipus de bases de dades no relacionals (100%)

## **Exercici 1**

Per a cada un dels quatre models de dades NoSQL, explica en un paràgraf en què consisteix, tria un dels productes més representatius d'aquest tipus, i a més de l'enllaç, averigua el comanda Docker per a llançar el servei i com inserir un dada.

A continuació, per a cada cas d'ús, identifica què model NoSQL seria més adequat i justifica la teua resposta:

- Una xarxa social amb usuaris que segueixen a altres usuaris.

- Un sistema de carrito de compres en línia.

- Un catàleg de productes.

- Un sistema d'anàlisi de dades de sensors IoT.

- Un servei de caché per a una aplicació web.

---

## Activitat 802: Activitat 1

👉 *[Obrir aquesta activitat en pàgina individual](act802.html)*

# Activitat 802

> **📌 Lliurament**
> 

> - El lliurament serà un **fitxer pdf** que continga la resposta a les preguntes de l'activitat.

> - El nom del fitxer ha de ser `803_NombreApellidos.pdf`.

> - S'haurà de lliurar en la tasca corresponent d'Aules en temps i forma.

> **📌 Es valorarà**
> 

> Es valorarà:

> - La claredat de la resposta.

> - La correcta maquetació del document.

> - Resposta correcta o aproximació a aquesta.

> Aquesta activitat servirà per a qualificar:

> - RA7: Gestiona la informació emmagatzemada en bases de dades no relacionals, avaluant i utilitzant les possibilitats que proporciona el sistema gestor.

>   - CE7. c) S'han identificat els elements utilitzats en aquestes bases de dades. (100%)

## **Activitat 1**

L'objectiu d'aquesta activitat és documentar l'alta en MongoDB Atlas i la instal·lació de MongoDB Compass. Per a això es realitzarà un document amb Portada, indice i els apartats de la instal·lació.

Per a demostrar que és própio, totes les capturas de pantalla es hauran de fer de la pantalla completa (barra de menu, reloj, etc)

---

## Activitat 803

👉 *[Obrir aquesta activitat en pàgina individual](act803.html)*

# **Activitat 803**

> **📌 Lliurament**
> 

> - El lliurament serà un **fitxer pdf** que continga la resposta a les preguntes de l'activitat.

> - El nom del fitxer ha de ser `803_NombreApellidos.pdf`.

> - S'haurà de lliurar en la tasca corresponent d'Aules en temps i forma.

> **📌 Es valorarà**
> 

> Es valorarà:

> - La claredat de la resposta.

> - La correcta maquetació del document.

> - Resposta correcta o aproximació a aquesta.

> Aquesta activitat servirà per a qualificar:

> - RA7: Gestiona la informació emmagatzemada en bases de dades no relacionals, avaluant i utilitzant les possibilitats que proporciona el sistema gestor.

>   - CE7. d) S'han identificat distintes formes de gestió de la informació segons el tipus de base de dades no relacionals. (100%)

>   - CE7. e) S'han utilitzat les eines del sistema gestor per a la gestió de la informació emmagatzemada. (100%)

## **Exercici 1**

**Base de dades i col·leccions.**
Dissenyar i gestionar una base de dades NoSQL amb MongoDB que represente una plataforma de cursos online. La base de dades es llamará “formacion”.
La base de dades contará amb el següent llistat de col·leccions.

| Col·lecció | Descripció |
| --- | --- |
| cursos | Conté informació sobre cada curs ofertado |
| alumnes | Dades dels estudiants |
| matriculas | Vincula als alumnes amb els cursos |
| docentes | Dades del profesorado |
| evaluacions | Resultats dels alumnes en cada curs |

## **Exercici 2**

**Crear els documents per a les col·leccions**

1. Col·lecció: **cursos**

  - Doc1: nom: "HTML i CSS", hores: 50, nivell: "bàsic", modalitat: "online", finalitzat: false

  - Doc2: nom: "JavaScript", hores: 80, nivell: "intermedi", modalitat: "online", finalitzat: false

  - Doc3:     nom: "Python", hores: 90, nivell: "intermedi", modalitat: "presencial", finalitzat: false

  - Doc4:     nom: "Bases de dades NoSQL", hores: 60, nivell: "intermedi", modalitat: "online", finalitzat: true

  - Doc5:     nom: " Desenvolupament Full Stack", hores: 120, nivell: "avançat", modalitat: "presencial", finalitzat: false

1. Col·lecció: **alumnes**

  - Doc1:     nom: "Lucía", email: "lucia@mail.com", ciutat: "València"

  - Doc2:     nom: "Mario", email: "mario@mail.com", ciutat: "Alacant"

  - Doc3:     nom: "Eva", email: "eva@mail.com", ciutat: "Castelló"

  - Doc4:     nom: "Raúl", email: "raúl@mail.com", ciutat: "Elx"

  - Doc5:     nom: "Claudia", email: "claudia@mail.com", ciutat: "València"

1. Col·lecció: **docentes**. Cada docente fa referència a un o diversos cursos.

  - Doc1:     nom: "Laura", especialitat: "Frontend", cursos: ["HTML i CSS", "JavaScript"]

  - Doc2:     nom: "Carlos", especialitat: "Backend", cursos: ["Python"]

  - Doc3:     nom: " Sofía ", especialitat: " Bases de dades", cursos: ["Bases de dades NoSQL"]

  - Doc4:     nom: " Manuel ", especialitat: " Full Stack ", cursos: ["Desenvolupament Full Stack"]

1. Col·lecció: **matriculas**. Cada matrícula referència un curs i un alumne pel seu nom.

  - Doc1:     alumne: "Lucía", curs: "HTML i CSS", data: "2025-03-01"

  - Doc2:     alumne: "Mario", curs: "JavaScript", data: "2025-03-15"

  - Doc3:     alumne: "Eva", curs: "Python", data: "2025-03-20"

  - Doc4:     alumne: " Raúl", curs: " Bases de dades NoSQL", data: "2025-04-15"

  - Doc5:     alumne: "Claudia", curs: "JavaScript", data: "2025-04-20"

1. Col·lecció: evaluacions

  - Doc1:     alumne: "Lucía", curs: "HTML i CSS", nota: 8.5

  - Doc2:     alumne: "Mario", curs: "JavaScript", nota: 7.0

  - Doc3:     alumne: "Eva", curs: "Python", nota: 9.2

  - Doc4:     alumne: " Raúl", curs: " Bases de dades NoSQL", nota: 8.8

  - Doc5:     alumne: "Claudia", curs: "JavaScript", nota: 9.5

## **Exercici 3**

**Modificar la informació de la base de dades**

1. Canviar modalitat del curs "JavaScript" a "semipresencial".

1. Afegir una nova alumna.

1. Matricular a Nuria en el curs de "HTML i CSS".

1. Avaluar a Nuria.

1. Incrementar el número d'hores de tots els cursos de nivell "intermedi" en 10 hores.

1. Canviar la ciutat dels alumnes que vivan en "Valencia" a "València".

1. Afegir un camp nou telèfon a tots els alumnes que no el tenen.

1. Reemplaçar per complet les dades d'un curs (excepte el _id).

1. Eliminar totes les matrículas d'un alumne donat el seu nom.

1. Afegir un camp comentari en l'avaluació de “Claudia” en “JavaScript”.

1. Eliminar l'especialitat dels docentes que només tinguen un curs assignat.

1. Afegir una data de finalizació als cursos que estiguen finalitzats.

1. Canviar tots els camps modalitat: "online" a "a distància".

## **Exercici 4**

**Consultes**

Bàsiques

1. Llistar tots els cursos.

1. Mostrar alumnes de València.

1. Mostrar docentes de Backend.

1. Mostrar només els noms i nivells dels cursos.

1. Llistar els noms i emails de tots els alumnes.

1. Cercar docentes de la qual especialitat siga “Frontend”.

1. Mostrar tots els cursos finalitzats.

1. Mostrar els alumnes que no vivan en “València”.

Avançades

1. Cercar cursos amb més de 60 hores.

1. Mitjana de notes per curs.

1. Número de matriculacions per curs.

1. Cercar cursos que siguen de nivell “intermedi” i modalitat “presencial”.

1. Mostrar els cursos ordenats alfabéticament (A-Z).

1. Mostrar les 2 últimes matrículas registrades.

1. Calcular el número de cursos per modalitat

## **Exercici 5**

**Índexs**

1. Crea un índex en nom per a cursos.

1. Crea un índex en ciutat per a alumnes.

1. Crea un índex amb ordenació descendent en data per a matrícula.

1. Crea un índex compost amb ordenació ascendent en ciutat i nom per a alumne.

1. Crea un índex únic perquè no es repitan els emails dels alumnes.

1. Mostra tots els índexs de la col·lecció alumnes.

1. Crea un índex en nom per a docentes i que aquest índex es anomene “idx_nom_docente”.

---


---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Quadern Complet d'Activitats — UD8** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="B" data-hint="MongoDB utilitza BSON (Binary JSON), que estén JSON amb tipus com ObjectId, Date o BinData.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> En les bases de dades NoSQL documentals com MongoDB, quin format binari s'utilitza internament per a emmagatzemar els documents amb suport de tipus de dades estès?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) CSV delimitat per punt i coma.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) BSON (Binary JSON).</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) HTML4 transicional.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Taules relacionals planes.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="A" data-hint="En MongoDB, les col·leccions agrupen documents JSON/BSON.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> A què equival una 'taula' i una 'fila/tupla' del model relacional dins de la terminologia de MongoDB?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) A una 'col·lecció' (collection) i un 'document' (document) respectivament.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) A un 'trigger' i una 'vista'.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) A un 'full de càlcul' i una 'macro'.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) A un 'arbre DTD' i un 'atribut XML'.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Si no s'especifica el camp _id en inserir un document, MongoDB genera automàticament un ObjectId únic.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En MongoDB, tot document emmagatzemat dins d'una col·lecció posseeix un camp clau <code>_id</code> que l'identifica de manera única.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="find|findone|db.collection.find" data-hint="És el mètode find (o findOne).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin mètode de <code>mongosh</code> s'utilitza sobre una col·lecció (<code>db.colleccio.____()</code>) per a cercar i recuperar documents que compleixen un filtre?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Quadern Complet d'Activitats — UD8**):

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
    <button type="button" class="btn-aules-dl" data-module="BBDD" data-unit="UD08" data-activity="activitats">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
