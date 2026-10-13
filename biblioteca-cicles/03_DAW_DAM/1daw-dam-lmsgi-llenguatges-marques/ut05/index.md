---
layout: default
title: "UD5: Manipulació de Documents Web amb el DOM i Gestió d'Esdeveniments — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD5"
---

# UD5: Manipulació de Documents Web amb el DOM i Gestió d'Esdeveniments

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-dom" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-nodes" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-events" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-async" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm5)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ARBRE DEL DOM, MANIPULACIÓ DINÀMICA, ESDEVENIMENTS I ASINCRONIA</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Navegació per l'arbre, manipulació de nodes i classes, model d'esdeveniments i comunicació Fetch API</text>

  <!-- Bloc 1: Arbre del DOM -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dom)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🌳</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arbre del DOM</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Jerarquia de Nodes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• querySelector &amp; All</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• getElementById / ByClass</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• parentNode, children</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• NodeList vs HTMLCollection</text>
  </g>

  <!-- Bloc 2: Manipulació de Nodes -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-nodes)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Manipulació</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Creació &amp; Classes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• createElement &amp; append</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• classList: add, toggle</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• textContent vs innerHTML</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• DocumentFragment (Reflow)</text>
  </g>

  <!-- Bloc 3: Esdeveniments -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-events)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🎯</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Esdeveniments</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Interacció d'Usuari</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• addEventListener()</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Objecte event &amp; target</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bubbling &amp; stopPropagation</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Delegació d'esdeveniments</text>
  </g>

  <!-- Bloc 4: Asincronia & Fetch -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-async)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🚀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fetch &amp; Async</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Comunicació HTTP</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• API Fetch nativa</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Promeses &amp; async / await</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Consum d'APIs REST</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Gestió d'errors try/catch</text>
  </g>
</svg>
</div>

El **DOM (*Document Object Model*)** és la representació en memòria que el navegador construeix a partir del codi HTML. Mitjançant l'API del DOM i el llenguatge JavaScript, les pàgines web deixen de ser documents estàtics per esdevindre aplicacions interactives completes. En aquesta unitat s'estudia la navegació per l'arbre de nodes, la creació i modificació dinàmica d'elements, la gestió d'esdeveniments mitjançant el patró de delegació i la recuperació asíncrona de dades amb la **Fetch API**.

---

## 5.1 L'arbre del DOM i la selecció d'elements

Quan el navegador analitza el codi HTML, crea una estructura jeràrquica en arbre formada per nodes:
- **Node Document:** L'arrel del document (`document`).
- **Nodes Element:** Corresponen a les etiquetes HTML (`<div>`, `<p>`, `<button>`).
- **Nodes Text:** El text contingut dins d'un element.
- **Nodes Atribut:** Propietats associades als elements (`id`, `class`, `href`).

### Mètodes moderns de selecció
La forma estàndard i recomanada de seleccionar elements és mitjançant la sintaxi de selectors CSS:

```javascript
// Retorna el PRIMER element que coincideix amb el selector CSS (o null si no existeix)
const botoEnviar = document.querySelector("#formulari-contacte button.btn-principal");

// Retorna una NodeList estàtica amb TOTS els elements coincidents
const targetes = document.querySelectorAll(".grid-articles article.card");

// Iteració directa sobre NodeList amb forEach
targetes.forEach((targeta, index) => {
    console.log(`Targeta ${index + 1}:`, targeta);
});
```

---

## 5.2 Modificació de continguts, atributs i classes CSS

### Seguretat: `textContent` vs `innerHTML`
- **`textContent` (RECOMANAT):** Insereix o llegeix text pla. És immune a injeccions de codi maliciós (*Cross-Site Scripting - XSS*).
- **`innerHTML`:** Converteix la cadena en elements HTML reals. Només s'ha d'utilitzar amb contingut de màxima confiança; mai amb dades introduïdes per l'usuari.

```javascript
const titol = document.querySelector("h1");
titol.textContent = "Catàleg Actualitzat 2026"; // 100% Segur
```

### Gestió de classes amb `classList`
Evita modificar la propietat `className` com a cadena de text. La interfície `classList` ofereix mètodes especialitzats:
```javascript
const alerta = document.querySelector(".missatge");

alerta.classList.add("visible", "actiu");    // Afegeix classes
alerta.classList.remove("ocult");            // Elimina classes
alerta.classList.toggle("destacat");          // Alterna estat (activa/desactiva)
const esVisible = alerta.classList.contains("visible"); // Retorna booleà
```

### Atributs personalitzats (*data attributes*)
Permeten emmagatzemar dades directament a l'HTML accessibles mitjançant la propietat `.dataset`:
```html
<button id="btn-comprar" data-id-producte="104" data-preu="49.99">Comprar</button>
```
```javascript
const btn = document.querySelector("#btn-comprar");
console.log(btn.dataset.idProducte); // "104"
console.log(btn.dataset.preu);       // "49.99"
```

---

## 5.3 Creació dinàmica de nodes i optimització amb `DocumentFragment`

### Creació i inserció de nous elements
```javascript
// 1. Crear l'element a la memòria
const nouItem = document.createElement("li");

// 2. Configurar el seu contingut i atributs
nouItem.textContent = "Mòdul 05: Llenguatges de Marques";
nouItem.classList.add("item-llista");

// 3. Inserir-lo a l'arbre existent
const llista = document.querySelector("#llista-moduls");
llista.appendChild(nouItem); // o llista.append(nouItem)
```

### El problema del Reflow i la solució `DocumentFragment`
Modificar el DOM directament en un bucle provoca que el navegador recalcule el disseny geomètric de la pàgina (*Reflow*) i la dibuixe de nou (*Repaint*) en cada cicle, degradant el rendiment.

Un `DocumentFragment` és un contenidor virtual lleuger que s'omple en memòria i s'insereix al DOM real en **una única operació atòmica**:

```javascript
const contenidor = document.querySelector("#taula-usuaris tbody");
const fragment = document.createDocumentFragment();

usuaris.forEach(u => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${u.id}</td><td>${u.nom}</td><td>${u.rol}</td>`;
    fragment.appendChild(fila); // Operació 100% en memòria (sense reflow)
});

contenidor.appendChild(fragment); // 1 SOL reflow per a tots els elements
```

---

## 5.4 El model d'esdeveniments: Propagació i Delegació

Tota interacció de l'usuari (clic, moviment de ratolí, pressió de tecla, enviament de formulari) genera un **esdeveniment**.

### Registre d'un oient d'esdeveniments (`addEventListener`)
```javascript
const formulari = document.querySelector("#form-reserva");

formulari.addEventListener("submit", event => {
    // Atura l'enviament clàssic del formulari que recarregaria la pàgina
    event.preventDefault();

    console.log("Formulari interceptat correctament per JS!");
});
```

### El flux d'esdeveniments: Bombolleig (*Bubbling*)
Quan es fa clic sobre un element intern, l'esdeveniment viatja a través de tres fases:
1. **Fase de Captura (*Capturing*):** Baixa des de `window` fins a l'element objectiu.
2. **Fase de Diana (*Target*):** Aconsegueix l'element real on s'ha produït l'acció (`event.target`).
3. **Fase de Bombolleig (*Bubbling*):** Pujava de nou per la jerarquia familiar (`parent` $\rightarrow$ `body` $\rightarrow$ `html` $\rightarrow$ `window`).

### Patró de Delegació d'Esdeveniments (*Event Delegation*)
En lloc d'afegir 1.000 oients a 1.000 botons, s'afig **un únic oient al contenidor pare** aprofitant el bombolleig:

```javascript
const llista = document.querySelector("#llista-tasques");

llista.addEventListener("click", event => {
    // Comprovar si l'element realment clicat és el botó d'eliminar
    if (event.target.classList.contains("btn-eliminar")) {
        const item = event.target.closest("li");
        item.remove();
        console.log("Element eliminat eficientment!");
    }
});
```

---

## 5.5 Comunicació asíncrona amb la Fetch API

La **Fetch API** permet realitzar peticions HTTP asíncrones (GET, POST, PUT, DELETE) sense recarregar la pàgina, sent la base de les aplicacions web modernes tipus SPA (*Single Page Application*).

```javascript
async function carregarUsuaris() {
    const url = "https://jsonplaceholder.typicode.com/users";

    try {
        const resposta = await fetch(url);

        // Validar si el codi d'estat HTTP és d'èxit (rang 200-299)
        if (!resposta.ok) {
            throw new Error(`Error en la petició: ${resposta.status} ${resposta.statusText}`);
        }

        const dades = await resposta.json();
        console.log("Usuaris recuperats:", dades);
        renderitzarTargetes(dades);

    } catch (error) {
        console.error("Ha fallat la comunicació amb l'API:", error.message);
        mostrarErrorVisual("No s'han pogut carregar les dades del servidor.");
    }
}
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi d'impacte en rendiment: Mutacions directes vs DocumentFragment
Es volen renderitzar $N = 2.000$ files d'un catàleg de peces de recanvi dins d'un cos de taula `<tbody>`.
Es presenten dos algoritmes d'inserció:
- **Algorisme A (Inserció directa seqüencial):**
  ```javascript
  for (let i = 0; i < N; i++) {
      const tr = document.createElement("tr");
      tr.textContent = `Peca ${i}`;
      taula.appendChild(tr); // Provoca reflow en cada iteració
  }
  ```
- **Algorisme B (Inserció atòmica amb DocumentFragment):**
  ```javascript
  const frag = document.createDocumentFragment();
  for (let i = 0; i < N; i++) {
      const tr = document.createElement("tr");
      tr.textContent = `Peca ${i}`;
      frag.appendChild(tr); // Sense reflow
  }
  taula.appendChild(frag); // 1 sol reflow
  ```

1. Calcula el nombre de càlculs de reflow geomètric que ha d'executar el motor de renderització del navegador en l'Algorisme A i en l'Algorisme B.
2. Si cada cicle de càlcul geomètric costa una mitjana de $0,8\text{ ms}$, calcula el temps total de bloqueig del fil principal de renderitzat per a tots dos mètodes.
3. Quina conseqüència directa té l'Algorisme A sobre la taxa d'imatges per segon (*FPS*) i la fluïdesa percebuda per l'usuari?

#### Exercici 2: Traça del flux de propagació d'esdeveniments
Considera la següent jerarquia de contenidors:
```html
<div id="caixa-exterior">
    <div id="caixa-intermitja">
        <button id="btn-accio">Executar</button>
    </div>
</div>
```
S'afegeixen tres oients d'esdeveniment de tipus `click` als tres elements en fase de bombolleig (`useCapture: false`).
1. Si l'usuari fa clic sobre el botó `btn-accio`, indica l'ordre exacte en què s'executaran els controladors d'esdeveniment.
2. Què retorna `event.target` i `event.currentTarget` quan el controlador s'està executant a `caixa-exterior`?
3. Si dins del controlador de `caixa-intermitja` s'executa `event.stopPropagation()`, quins oients s'executaran i quin quedarà bloquejat?

#### Exercici 3: Càlcul de latència i temps de transferència d'una petició `fetch()`
Una aplicació web sol·licita un paquet de dades JSON d'una mida de $450\text{ KB}$ mitjançant `fetch()` a través d'una connexió mòbil 4G amb una velocitat de baixada de $15\text{ Mbps}$ i una latència d'anada i tornada (*RTT*) de $40\text{ ms}$.
- **Components del temps de resposta:**
  - Negociació inicial de connexió (TCP + TLS): $2 \times \text{RTT}$.
  - Temps fins al primer byte del servidor (*TTFB*): $120\text{ ms}$.
  - Temps de transferència de dades:
    $$T_{\text{descarrega}} = \frac{\text{Mida (bits)}}{\text{Amplada de banda (bps)}} = \frac{450 \times 1.024 \times 8}{15 \times 10^6}\text{ segons}$$

1. Calcula el temps exacte de transferència de dades en mil·lisegons.
2. Calcula el temps total que passarà des que s'executa `await fetch(...)` fins que les dades estan completament en memòria.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Gestor de tasques interactiu (*To-Do List*) amb persistència visual
- **Objectiu:** Crear una llista dinàmica de tasques utilitzant exclusivament manipulació nativa del DOM.
- **Instruccions:**
  1. Dissenya un camp de text i un botó d'afegir tasca.
  2. Quan l'usuari envia el formulari, valida que el camp no estiga buit i crea un nou element `<li>` amb dues zones: el text de la tasca i un botó amb la icona de paperera.
  3. Fes que en fer clic sobre el text de la tasca, s'alterne la classe CSS `.completada` mitjançant `classList.toggle()` que tatxe el text amb una línia.
  4. En fer clic sobre el botó de paperera, elimina l'element del DOM amb `element.remove()`.

#### Repte 2: Implementació del patró de Delegació d'Esdeveniments en un catàleg
- **Objectiu:** Gestionar les accions d'una taula dinàmica amb un únic oient centralitzat.
- **Instruccions:**
  1. Crea una taula amb 5 files de productes. Cada fila inclou el nom, estoc i dos botons: `+1 Estoc` (amb classe `.btn-sumar`) i `-1 Estoc` (amb classe `.btn-restar`).
  2. Registra un **únic** `addEventListener("click", ...)` sobre el `<tbody>` de la taula.
  3. Dins del controlador, utilitza `event.target.closest("button")` per determinar quin botó s'ha premut.
  4. Localitza la cel·la de l'estoc corresponent a la mateixa fila i augmenta o redueix el valor numèric en temps real.

#### Repte 3: Tauler meteorològic asíncron amb Fetch API i tractament d'errors
- **Objectiu:** Construir una targeta d'informació meteorològica que consumisca dades d'una API REST oberta.
- **Instruccions:**
  1. Crea una interfície amb un camp per introduir el nom d'una ciutat i un botó de cerca.
  2. Mostra un element visual de càrrega (*Spinner* o text "Carregant dades...") mentre la petició està en curs.
  3. Realitza la petició mitjançant `async/await` a l'API pública (per exemple l'API d'Open-Meteo).
  4. Si la resposta és correcta (`response.ok`), oculta el missatge de càrrega i dibuixa una targeta amb la temperatura actual, humitat i velocitat del vent.
  5. Si hi ha un error de connexió o ciutat no trobada, captura l'excepció amb `catch` i mostra una alerta estilitzada en color roig.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He utilitzat `querySelector` i `querySelectorAll` amb selectors CSS correctes.
- [ ] He garantit la seguretat de l'aplicació prioritzant `textContent` sobre `innerHTML`.
- [ ] He gestionat l'aspecte visual emprant exclusivament mètodes de `classList`.
- [ ] He optimitzat les insercions massives d'elements mitjançant `DocumentFragment`.
- [ ] He emprat `event.preventDefault()` per aturar enviaments de formulari per defecte.
- [ ] He aplicat el patró de delegació d'esdeveniments per gestionar col·leccions dinàmiques.
- [ ] He recuperat dades de servidors externs utilitzant `fetch()`, `async/await` i blocs `try...catch`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Selecció i Manipulació del DOM** | Utilitza selectors avançats, manté immunitat contra atacs XSS amb `textContent` i optimitza el renderitzat amb `DocumentFragment`. | Selecciona elements amb `querySelector` i afegeix o elimina nodes amb mètodes estàndard de forma eficaç. | Manipula elements del DOM bàsics però abusa d'`innerHTML` o genera reflows innecessaris. | Incapaç de localitzar elements a l'arbre o modifica etiquetes amb mètodes obsolets. |
| **Gestió de Classes i Estils** | Modifica dinàmicament l'estat dels components exclusivament amb `classList`, respectant la separació entre lògica i disseny. | Utilitza `classList.add` i `classList.remove` correctament sense tocar estils en línia. | Altera estils modificant directament la propietat `.style` sense utilitzar classes CSS. | Sobreescriu cadenes completes de `className` eliminant classes prèvies per error. |
| **Model d'Esdeveniments i Delegació** | Domina la propagació per bombolleig i implementa la delegació d'esdeveniments per optimitzar l'ús de memòria. | Utilitza `addEventListener` i gestiona `event.preventDefault()` i `event.target` amb solvència. | Registra esdeveniments funcionals però associa un oient individual a cada fila de manera ineficient. | Continua utilitzant atributs HTML en línia com `onclick="..."` directament a les etiquetes. |
| **Comunicació Asíncrona (Fetch API)** | Implementa comunicacions robustes amb `async/await`, validació de codis HTTP, gestió visual d'estats i maneig d'errors. | Realitza peticions HTTP amb `fetch()`, parseja respostes JSON i actualitza el DOM amb les dades. | Consumeix dades d'una API amb `fetch` bàsic però oblida comprovar si la resposta és `ok` o gestionar caigudes de xarxa. | Desconeix el funcionament de la Fetch API o no comprèn la naturalesa asíncrona de les promeses. |
