---
layout: default
title: "UD4: Fonaments i Sintaxi de JavaScript en el Costat Client — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD4"
---

# UD4: Fonaments i Sintaxi de JavaScript en el Costat Client

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-vars" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-flow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-func" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-arr" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm4)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">FONAMENTS I SINTAXI MODERNA DE JAVASCRIPT (ES6+)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Variables let/const, control de flux, funcions fletxa, estructures de dades, programació funcional i format JSON</text>

  <!-- Bloc 1: Variables & Tipus -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-vars)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Variables &amp; Tipus</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Sintaxi Moderna</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• let &amp; const (Àmbit de bloc)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Tipus primitius vs Referència</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Igualtat estricta (===)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Evitar el var i el Hoisting</text>
  </g>

  <!-- Bloc 2: Control de Flux -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-flow)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔀</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Control de Flux</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Decisió &amp; Iteració</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• if/else &amp; switch clàssic</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Operador ternari (? :)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Fusió nul·la (??) i curtcircuit</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Bucles for...of i for...in</text>
  </g>

  <!-- Bloc 3: Funcions & ES6+ -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-func)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Funcions Modernes</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Paradigma Funcional</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Funcions fletxa (() =&gt; {})</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Desestructuració d'objectes</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Operadors Rest &amp; Spread (...)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Paràmetres per defecte</text>
  </g>

  <!-- Bloc 4: Arrays & JSON -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-arr)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📊</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Arrays &amp; JSON</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Transformació de Dades</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• map, filter, reduce</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• find, some, every, includes</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• JSON.stringify() i parse()</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Manipulació immutable</text>
  </g>
</svg>
</div>

**JavaScript** és el llenguatge de programació universal del costat client en aplicacions web. Des de l'estandardització d'**ECMAScript 6 (ES2015+)**, el llenguatge compta amb característiques robustes per al desenvolupament professional: àmbits de bloc segurs, funcions fletxa concises, desestructuració declarativa, mètodes funcionals de transformació d'arrays i serialització de dades amb format **JSON**.

---

## 4.1 Entorn d'execució, vinculació i depuració

JavaScript s'executa en el motor del navegador (V8 en Chrome/Edge, SpiderMonkey en Firefox, JavaScriptCore en Safari) sobre un únic fil d'execució (*Single Thread*) recolzat pel bucle d'esdeveniments (*Event Loop*).

### Vinculació d'scripts en HTML: `defer` vs `async`
La càrrega clàssica `<script src="app.js"></script>` atura el parseig de l'HTML mentre es descarrega i s'executa el script:

```html
<!-- RECOMANAT: Descarrega en paral·lel i executa en ordre un cop finalitzat el parseig HTML -->
<script src="js/app.js" defer></script>

<!-- Descarrega en paral·lel i executa immediatament en quan arriba (ideal per a analítica/ads) -->
<script src="js/analytics.js" async></script>
```

---

## 4.2 Declaració de variables i sistema de tipus

### La fi de `var`: `let` i `const`
- **`var` (Obsolet):** Àmbit de funció, pateix d'elevació (*hoisting*) i permet redeclaracions accidentals.
- **`let`:** Àmbit de bloc (`{ ... }`), no permet redeclaració en el mateix bloc i permet reassignació.
- **`const`:** Àmbit de bloc, requereix assignació inicial i impedeix la reassignació de la referència.

```javascript
const PI = 3.14159;
let comptador = 0;
comptador += 1;

// const impedeix reassignar la variable, però NO impedeix mutar les propietats internes d'un objecte:
const usuari = { nom: "Carles", rol: "alumnat" };
usuari.rol = "delegat"; // TOTALMENT VÀLID
// usuari = {}; // ERROR: Assignment to constant variable
```

### Tipus de dades i igualtat estricta
JavaScript és un llenguatge de tipat dinàmic i feble:
- **Tipus primitius:** `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- **Tipus d'objecte:** `Object`, `Array`, `Function`, `Date`, `RegExp`.

> [!WARNING]
> Utilitza **SEMPRE** l'operador d'igualtat estricta `===` per evitar la coerció implícita de tipus perillosa:
> - `5 == "5"` $\rightarrow$ `true` (coerció automàtica de tipus)
> - `5 === "5"` $\rightarrow$ `false` (compara tipus i valor)
> - `0 == false` $\rightarrow$ `true` enfront de `0 === false` $\rightarrow$ `false`

---

## 4.3 Control de flux i nous operadors ES6+

### Operador ternari i avaluació en curtcircuit
```javascript
// Operador ternari
const estat = edat >= 18 ? "Major d'edat" : "Menor d'edat";

// Operador de fusió nul·la (??) - avalua només null o undefined (no 0 o false)
const port = configuracio.port ?? 8080;

// Encadenament opcional (?.) - evita errors de 'cannot read properties of undefined'
const codiPostal = client?.adreca?.codiPostal;
```

### Bucles moderns: `for...of` vs `for...in`
```javascript
const moduls = ["BBDD", "LMSGI", "ED", "PRG"];

// for...of itera sobre els VALORS dels elements iterables (Arrays, Sets, Maps)
for (const modul of moduls) {
    console.log(`Mòdul actiu: ${modul}`);
}

// for...in itera sobre les CLAUS o índexs d'un objecte
const servidor = { host: "192.168.1.10", port: 22, servei: "SSH" };
for (const clau in servidor) {
    console.log(`${clau}: ${servidor[clau]}`);
}
```

---

## 4.4 Funcions modernes, desestructuració i operadors Rest/Spread

### Funcions fletxa (*Arrow Functions*)
Ofereixen una sintaxi concisa i hereten el valor de `this` del context lèxic en què es defineixen:

```javascript
// Funció tradicional
function calcularIva(preu) {
    return preu * 0.21;
}

// Funció fletxa amb retorn implícit
const calcularIva = preu => preu * 0.21;

// Amb múltiples paràmetres i cos de bloc
const calcularTotal = (preu, unitats = 1) => {
    const subtotal = preu * unitats;
    return subtotal + calcularIva(subtotal);
};
```

### Desestructuració d'objectes i arrays
Permet extreure valors directament en variables independents:
```javascript
const curs = {
    nom: "1r DAW",
    alumnat: 28,
    aula: "Lab-204"
};

// Desestructuració d'objecte
const { nom, aula } = curs;

// Desestructuració d'array
const coordenades = [39.4699, -0.3763];
const [latitud, longitud] = coordenades;
```

### Operador Spread (`...`) i Rest (`...`)
```javascript
// Rest en arguments de funció (agrupa paràmetres restants en un array)
const sumarTot = (...valors) => valors.reduce((acc, curr) => acc + curr, 0);

// Spread en clonació i fusió d'objectes (crea noves referències sense mutar)
const base = { tipus: "A", actiu: true };
const ampliat = { ...base, prioritat: "Alta" };
```

---

## 4.5 Mètodes funcionals d'arrays i integració JSON

Els arrays moderns en JavaScript permeten processar conjunts de dades evitant els bucles imperatius manuals:

| Mètode | Descripció | Retorn | Muta l'Array Original? |
| :--- | :--- | :--- | :---: |
| `map(fn)` | Transforma cada element aplicant la funció | Nou array amb mateixa longitud | **No** |
| `filter(fn)` | Reté només els elements que compleixen la condició | Nou array filtrat | **No** |
| `reduce(fn, init)` | Acumula tots els valors en un sol resultat | Valor únic (número, objecte, etc.) | **No** |
| `find(fn)` | Retorna el primer element que compleix la condició | Element o `undefined` | **No** |
| `some(fn)` | Comprova si almenys un element compleix la condició | Booleà (`true` / `false`) | **No** |
| `every(fn)` | Comprova si tots els elements compleixen la condició | Booleà (`true` / `false`) | **No** |

### Exemple de canalització funcional (*Pipeline*):
```javascript
const productes = [
    { id: 1, nom: "Portàtil i7", preu: 850, categoria: "Hardware", estoc: 12 },
    { id: 2, nom: "Ratolí òptic", preu: 25, categoria: "Perifèrics", estoc: 0 },
    { id: 3, nom: "Monitor 27\"", preu: 220, categoria: "Perifèrics", estoc: 5 },
    { id: 4, nom: "Teclat Mecànic", preu: 75, categoria: "Perifèrics", estoc: 8 }
];

// Obtenir el valor total en estoc dels perifèrics disponibles:
const valorTotalPeriferics = productes
    .filter(p => p.categoria === "Perifèrics" && p.estoc > 0)
    .map(p => p.preu * p.estoc)
    .reduce((acumulat, valor) => acumulat + valor, 0);

console.log(`Valor en estoc: ${valorTotalPeriferics} €`); // 220*5 + 75*8 = 1100 + 600 = 1700 €
```

### Serialització amb `JSON.stringify` i `JSON.parse`
```javascript
// Convertir objecte JavaScript a cadena de text JSON
const jsonText = JSON.stringify(productes, null, 2);

// Reconstruir objecte a partir de cadena JSON rebuda per xarxa
const dadesRebudes = JSON.parse(jsonText);
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Anàlisi d'avaluació d'expressions i coerció de tipus
Determina el resultat exacte i el tipus de dada resultant de les següents operacions en JavaScript:
1. `typeof ("42" + 8)` i el seu valor: $\dots$
2. `typeof ("42" - 8)` i el seu valor: $\dots$
3. `typeof (true + true)` i el seu valor: $\dots$
4. `[] == false` vs `[] === false`: explica per què la primera retorna `true` i la segona `false`.
5. `Boolean(0)` vs `Boolean("0")` vs `Boolean([])`: indica el valor de veritat (*truthy/falsy*) de cadascun.

#### Exercici 2: Càlcul de rendiment i eficiència de pipelines d'arrays
Un catàleg corporatiu té $N = 50.000$ registres d'articles amb l'estructura `{ id, nom, preu, actiu }`.
Es comparen dues alternatives de programació per filtrar els articles actius i calcular el preu mitjà:
- **Estratègia A (Pipeline funcional encadenat):**
  ```javascript
  const mitjana = articles
      .filter(a => a.actiu)
      .map(a => a.preu)
      .reduce((acc, p, _, arr) => acc + p / arr.length, 0);
  ```
- **Estratègia B (Bucle imperatiu únic):**
  ```javascript
  let suma = 0, count = 0;
  for (let i = 0; i < articles.length; i++) {
      if (articles[i].actiu) {
          suma += articles[i].preu;
          count++;
      }
  }
  const mitjana = count > 0 ? suma / count : 0;
  ```

1. Quants arrays intermedis en memòria RAM crea l'Estratègia A durant la seua execució? Quina petjada addicional de memòria pot provocar per a $50.000$ objectes?
2. Quantes iteracions reals realitza l'Estratègia A enfront de l'Estratègia B?
3. En quins escenaris és preferible l'Estratègia A per mantenibilitat i llegibilitat, i quan és indispensable optimitzar amb l'Estratègia B?

#### Exercici 3: Càlcul d'optimització de sobrecàrrega JSON
Una API REST envia una llista de $1.000$ registres d'usuaris. El model conté propietats innecessàries i valors `null`:
```json
{
  "id": 1024,
  "nomComplet": "Anna Pérez Garcia",
  "email": "aperez@centre.edu",
  "adrecaSecundaria": null,
  "telefonSecundari": null,
  "metadadesInternes": { "revisat": true, "servidor": "node-worker-04" }
}
```
1. Una entrada amb tots els camps pesa $195\text{ caràcters (bytes)}$.
2. Si s'utilitza una funció de neteja que elimina camps amb valor `null` i el camp `metadadesInternes`, la nova entrada reduïda fa $82\text{ bytes}$.
3. Calcula l'estalvi de transferència en Kilobytes per a cada càrrega de $1.000$ usuaris i el percentatge de reducció d'amplada de banda obtingut.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Sistema de càlcul de qualificacions amb mètodes funcionals
- **Objectiu:** Desenvolupar un mòdul en JavaScript pur que processe les notes d'una classe sense cap bucle imperatiu (`for` o `while`).
- **Instruccions de codi:**
  1. Crea un array `estudiants` amb almenys 6 objectes `{ nom, teoria, practica, assistencia }`.
  2. Implementa una funció fletxa que calcule la nota final ponderada:
     $$\text{Nota Final} = (\text{Teoria} \times 0.4) + (\text{Pràctica} \times 0.5) + (\text{Assistència} \times 0.1)$$
  3. Empra `filter` per a separar l'alumnat aprovat ($\ge 5.0$) del suspès.
  4. Fes servir `reduce` per a calcular la nota mitjana de la classe.
  5. Empra `find` per a localitzar l'estudiant amb la qualificació més alta.

#### Repte 2: Algorisme de verificació de DNI/NIF amb operador mòdul
- **Objectiu:** Validar la coherència matemàtica d'un document d'identitat espanyol mitjançant JavaScript.
- **Procediment de taller:**
  1. La lletra de control d'un DNI es calcula dividint el número de 8 xifres entre 23 i obtenint el residu ($R = \text{Número} \pmod{23}$).
  2. La taula de correspondència oficial és:
     `"TRWAGMYFPDXBNJZSQVHLCKE"`
  3. Escriu la funció `validarDNI(dniComplet)`:
     - Neteja espais i converteix la lletra a majúscula.
     - Comprova amb una expressió regular que són 8 dígits i una lletra (`/^[0-9]{8}[A-Z]$/`).
     - Extreu els 8 números mitjançant `parseInt(dniComplet.slice(0, 8))`.
     - Comprova que la lletra coincideix exactament amb `taula[residu]`.
  4. Retorna un objecte `{ valid: true/false, motiu: "..." }`.

#### Repte 3: Processador i serialitzador de dades JSON
- **Objectiu:** Llegir una cadena JSON de configuració de servidors, modificar-la immutablement i exportar el resultat.
- **Procediment de taller:**
  1. Crea una cadena de text `jsonServidors` que continga una llista de màquines amb `{ ip, nom, estat, memoriaGB }`.
  2. Empra `JSON.parse()` protegit dins d'un bloc `try...catch` per evitar fallades en cas de JSON mal format.
  3. Utilitzant l'operador *Spread* (`...`), afegeix una propietat nova `monitoritzat: true` a totes les màquines sense modificar l'objecte original.
  4. Serialitza el resultat amb `JSON.stringify(dades, null, 2)` per generar un format elegant i indentat.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He utilitzat `const` per defecte i `let` només quan és necessària la reassignació.
- [ ] He evitat completament l'ús de `var` per prevenir problemes d'àmbit i *hoisting*.
- [ ] He utilitzat la comparació estricta `===` en totes les estructures condicionals.
- [ ] He emprat funcions fletxa concises i paràmetres per defecte.
- [ ] He aplicat la desestructuració d'objectes i arrays per simplificar l'accés a dades.
- [ ] He transformat conjunts de dades utilitzant `map`, `filter` i `reduce`.
- [ ] He manipulat cadenes JSON emprant `JSON.parse()` amb gestió d'errors `try...catch`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Variables i Àmbit de Bloc** | Distingeix amb precisió l'àmbit de bloc de `let` i la immutabilitat de referència de `const`; mai utilitza `var`. | Empra `let` i `const` adequadament i comprèn l'origen dels errors de reassignació. | Utilitza `let` i `const` però barreja ocasionalment `var` o redeclara variables en el mateix àmbit. | Fa un ús indiscriminat de variables globals o de `var` provocant col·lisions d'àmbit. |
| **Sintaxi ES6+ i Funcions Fletxa** | Domina les funcions fletxa, desestructuració profunda, paràmetres per defecte i operadors Rest/Spread. | Escriu funcions fletxa correctes i utilitza la desestructuració bàsica d'objectes. | Utilitza sintaxi ES6 senzilla però té dubtes sobre el comportament del retorn implícit en funcions fletxa. | Només sap declarar funcions tradicionals i desconeix la sintaxi d'assignació per desestructuració. |
| **Mètodes Funcionals d'Arrays** | Construeix canalitzacions elegants amb `map`, `filter` i `reduce` per resoldre problemes de dades complexos. | Aplica mètodes d'arrays funcionals per separar filtres i transformacions de manera neta. | Utilitza `forEach` com a substitut de bucles clàssics però té dificultats per comprendre `reduce`. | Utilitza exclusivament bucles `for` manuals amb índexs i mutacions d'arrays globals. |
| **Integració i Serialització JSON** | Serialitza i desserialitza estructures JSON complexes gestionant excepcions i optimitzant la petjada de memòria. | Converteix objectes a cadenes JSON i viceversa emprant `JSON.stringify` i `JSON.parse`. | Utilitza mètodes JSON bàsics però oblida capturar errors de parseig sintàctic. | Confon els literals d'objectes JavaScript amb la sintaxi estricta de cadenes JSON. |
