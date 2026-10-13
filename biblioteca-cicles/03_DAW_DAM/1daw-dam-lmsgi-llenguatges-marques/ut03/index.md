---
layout: default
title: "UD3: Fulls d'Estil en Cascada (CSS3) i Disseny Web Adaptatiu — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD3"
---

# UD3: Fulls d'Estil en Cascada (CSS3) i Disseny Web Adaptatiu

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-casc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-box" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-layout" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-resp" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm3)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">FULLS D'ESTIL EN CASCADA (CSS3) I DISSENY ADAPTATIU</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Cascada, especificitat, model de caixa modern, maquetació amb Flexbox i CSS Grid, i Media Queries Mobile-First</text>

  <!-- Bloc 1: Cascada & Especificitat -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-casc)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Cascada &amp; Regles</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Jerarquia de Selectors</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Càlcul d'especificitat (a,b,c)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Herència de propietats</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Variables CSS (--color)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Pseudoclasses: :hover, :is</text>
  </g>

  <!-- Bloc 2: Model de Caixa -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-box)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📦</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Model de Caixa</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Dimensions i Límits</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Content, Padding, Border</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Marges i col·lapse de marges</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• box-sizing: border-box</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Display: block, inline, none</text>
  </g>

  <!-- Bloc 3: Flexbox & CSS Grid -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-layout)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Maquetació Moderna</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">1D vs 2D Layout</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Flexbox: eixos main &amp; cross</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Justify-content &amp; Align-items</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• CSS Grid: files, columnes, fr</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Àrees amb grid-template</text>
  </g>

  <!-- Bloc 4: Disseny Adaptatiu -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-resp)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📱</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Disseny Responsive</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Mobile-First &amp; Queries</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Viewport &amp; unitats rem/vw</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• @media (min-width: ...)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Punts de ruptura (Breakpoints)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Imatges fluides &amp; object-fit</text>
  </g>
</svg>
</div>

Els **Fulls d'Estil en Cascada (CSS3)** constitueixen el llenguatge estàndard per a la presentació visual, disseny, composició i adaptabilitat de les pàgines web. En aquesta unitat s'aborden els mecanismes fonamentals de la cascada, el càlcul matemàtic de l'especificitat de selectors, el control dimensional mitjançant el model de caixa modern, les tècniques de maquetació **Flexbox** i **CSS Grid**, i l'estratègia **Mobile-First** basada en *Media Queries*.

---

## 3.1 La cascada, l'herència i el càlcul de l'especificitat

Quan múltiples regles CSS afecten el mateix element HTML, el navegador resol el conflicte mitjançant tres criteris jeràrquics: **importància (`!important`)**, **especificitat del selector** i **ordre d'aparició**.

### La regla matemàtica de l'especificitat
L'especificitat es representa com una tupla de tres valors $(a, b, c)$:

- **$a$ (IDs):** Nombre de selectors d'identificador (`#menu`, `#header`).
- **$b$ (Classes, atributs i pseudoclasses):** Nombre de selectors de classe (`.btn`), selectors d'atribut (`[type="text"]`) i pseudoclasses (`:hover`, `:focus`).
- **$c$ (Elements i pseudoelements):** Nombre de selectors d'etiqueta (`p`, `div`, `li`) i pseudoelements (`::before`, `::after`).

> [!NOTE]
> Els estils en línia (`style="..."`) tenen una especificitat superior a qualsevol selector de full d'estil extern, actuant equivalentment com un quart valor superior $(1, 0, 0, 0)$.

#### Exemple comparatiu d'especificitat:
| Selector CSS | $a$ (IDs) | $b$ (Classes/Attrs) | $c$ (Elements) | Vector d'Especificitat | Guanyador |
| :--- | :---: | :---: | :---: | :---: | :---: |
| `nav ul li a` | 0 | 0 | 4 | `(0, 0, 4)` | 3r lloc |
| `nav.menu a:hover` | 0 | 2 | 2 | `(0, 2, 2)` | 2n lloc |
| `#main-nav a.active` | 1 | 1 | 1 | `(1, 1, 1)` | **1r lloc (Guanya)** |

### Variables CSS (Custom Properties)
Permeten definir valors reutilitzables en l'arrel `:root`, facilitant temes clars/foscos (*Dark Mode*) i manteniment centralitzat:

```css
:root {
    --primary-color: #0284c7;
    --bg-dark: #0f172a;
    --text-light: #f8fafc;
    --spacing-md: 1.5rem;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
}

.btn-primary {
    background-color: var(--primary-color);
    padding: var(--spacing-md);
}
```

---

## 3.2 El model de caixa modern (*Box Model*)

Cada element del DOM es representa rectangularment com una caixa composta per quatre capes concèntriques:
1. **Contingut (*Content*):** L'espai on es renderitza el text, imatge o elements fills (`width`, `height`).
2. **Farciment interior (*Padding*):** L'espai buit entre el contingut i el límit del límit.
3. **Vora (*Border*):** La línia que envolta el contingut i el padding.
4. **Marge exterior (*Margin*):** L'espai exterior que separa l'element dels elements veïns.

### El problema de `content-box` vs la solució `border-box`
- **Model clàssic (`box-sizing: content-box` - valor per defecte):** L'amplària total és:
  $$W_{\text{total}} = \text{width} + \text{padding-left} + \text{padding-right} + \text{border-left} + \text{border-right}$$
  Açò fa que si a un element de `300px` li afegeixes `20px` de padding i `2px` de vora, la seua amplària real passe a ser de `344px`, desmuntant la maquetació.
- **Model recomanat (`box-sizing: border-box`):** La propietat `width` representa la mida exterior total (incloent vora i farciment interior):

```css
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

---

## 3.3 Maquetació unidimensional amb Flexbox

Flexbox (*Flexible Box Layout*) resol la distribució d'elements al llarg d'un **únic eix a la vegada** (eix principal o eix transversal).

### Propietats del contenidor pare (`display: flex`)
- `flex-direction`: `row` (per defecte, horitzontal), `column` (vertical), `row-reverse`.
- `justify-content`: Alineació sobre l'**eix principal** (`flex-start`, `center`, `space-between`, `space-around`, `space-evenly`).
- `align-items`: Alineació sobre l'**eix transversal** (`stretch`, `center`, `flex-start`, `flex-end`, `baseline`).
- `flex-wrap`: Permet que els elements salten a una nova línia (`nowrap`, `wrap`).
- `gap`: Espaiat net entre elements fills sense necessitat de marges individuals.

### Propietats dels elements fills (*flex items*)
- `flex-grow`: Factor de creixement proporcional per absorbir l'espai sobrant.
- `flex-shrink`: Factor de contracció quan no hi ha prou espai.
- `flex-basis`: Mida inicial de referència abans de distribuir l'espai restant.
- Sintaxi abreujada (*shorthand*): `flex: 1 1 auto;` o `flex: 1;`.

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1e293b;
}

.nav-links {
    display: flex;
    gap: 1.5rem;
    list-style: none;
}
```

---

## 3.4 Maquetació bidimensional amb CSS Grid

CSS Grid és un sistema complet de disseny **bidimensional** que gestiona simultàniament **files i columnes**.

### Conceptes fonamentals
- **Pistes de graella (*Grid Tracks*):** Les columnes i files definides mitjançant `grid-template-columns` i `grid-template-rows`.
- **Unitat fraccionària (`fr`):** Representa una fracció de l'espai lliure disponible al contenidor.
- **Àrees de graella (*Grid Areas*):** Permeten anomenar visualment seccions de la pàgina.

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}

.card {
    background-color: #1e293b;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
```

### Plantilla semàntica completa amb `grid-template-areas`:
```css
.pagina {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 240px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "capcalera capcalera"
        "lateral   contingut"
        "peu       peu";
}

header { grid-area: capcalera; }
aside  { grid-area: lateral; }
main   { grid-area: contingut; }
footer { grid-area: peu; }
```

---

## 3.5 Disseny web adaptatiu (*Responsive Web Design*) i enfocament Mobile-First

L'enfocament **Mobile-First** consisteix a escriure primer el codi CSS base orientat a pantalles xicotetes (smartphones) i afegir complexitat visual a mesura que la pantalla s'amplia utilitzant **regles `@media (min-width: ...)`**.

### El Viewport obligatori a l'HTML
Sense aquesta etiqueta al `<head>`, els dispositius mòbils renderitzen la web a una amplària virtual de 980px fent zoom forçat:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Punts de ruptura estàndard (*Breakpoints*)
```css
/* 1. Estil base (Mòbil - per defecte) */
.columna {
    width: 100%;
}

/* 2. Tauletes (Tablets) - >= 768px */
@media (min-width: 768px) {
    .columna {
        width: 50%;
    }
}

/* 3. Pantalles d'escriptori (Desktop) - >= 1024px */
@media (min-width: 1024px) {
    .columna {
        width: 25%;
    }
}
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Resolució matemàtica de col·lisions d'especificitat CSS
En un projecte web de gran envergadura conviuen les següents 4 regles d'estil que intenten assignar el color del text a un enllaç situat dins d'un menú destacat:

```html
<nav id="menu-principal" class="navbar dark-theme">
    <ul>
        <li><a id="btn-oferta" class="btn btn-destacat" href="#oferta">Comprar Ara</a></li>
    </ul>
</nav>
```

- **Regla A:** `nav.navbar ul li a.btn { color: blue; }`
- **Regla B:** `#menu-principal a.btn-destacat { color: red; }`
- **Regla C:** `.dark-theme .btn.btn-destacat { color: green; }`
- **Regla D:** `#btn-oferta { color: orange; }`

1. Calcula la tupla d'especificitat $(a, b, c)$ per a cadascuna de les 4 regles:
   - Regla A: $(a_A, b_A, c_A) = (\dots, \dots, \dots)$
   - Regla B: $(a_B, b_B, c_B) = (\dots, \dots, \dots)$
   - Regla C: $(a_C, b_C, c_C) = (\dots, \dots, \dots)$
   - Regla D: $(a_D, b_D, c_D) = (\dots, \dots, \dots)$
2. Ordena les regles de menor a major prioritat.
3. Quin color s'aplicarà finalment al text de l'enllaç? Què passaria si a la Regla C s'afegeix `color: green !important;`?

#### Exercici 2: Càlcul dimensional del Model de Caixa (*Box Model*)
Un desenvolupador maqueta tres caixes consecutives en una fila d'un contenidor d'amplària total $W_{\text{contenidor}} = 960\text{ px}$. Cada caixa té les següents propietats CSS:
- `width: 300px`
- `padding-left: 20px`, `padding-right: 20px`
- `border: 5px solid #000`
- `margin-left: 10px`, `margin-right: 10px`

1. Calcula l'amplària visual total ocupada per **una sola caixa** si s'utilitza el model clàssic `box-sizing: content-box`:
   $$W_{\text{element}} = \text{width} + P_L + P_R + B_L + B_R + M_L + M_R$$
2. Podran cabre les tres caixes en una sola fila horitzontal de $960\text{ px}$ sota `content-box`? Quina serà l'amplària total de les 3 caixes sumades?
3. Recalcula l'amplària si s'aplica el model modern `box-sizing: border-box`. Cabran ara les tres caixes en la mateixa fila? Quant d'espai sobrant lliure quedarà al contenidor?

#### Exercici 3: Distribució fraccionària en CSS Grid
Un contenidor de CSS Grid té una amplària disponible de $W = 1.200\text{ px}$. La graella es defineix amb la propietat:
```css
grid-template-columns: 200px 2fr 1fr;
gap: 20px;
```

1. Calcula l'espai total absorbit per les separacions (*gaps*). Quantes separacions horitzontals hi ha per a 3 columnes?
2. Calcula l'espai restant disponible per a les pistes fraccionàries:
   $$\text{Espai Restant} = W - \text{Columna Fixa} - \text{Gaps Totals}$$
3. Calcula el valor exacte en píxels d'una unitat `1fr`.
4. Determina l'amplària final exacta de cadascuna de les 3 columnes.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Maquetació d'una barra de navegació (*Navbar*) adaptable amb Flexbox
- **Objectiu:** Crear una capçalera de navegació corporativa que alinee el logotip a l'esquerra, el cercador al centre i els enllaços d'usuari a la dreta.
- **Instruccions:**
  1. Crea el fitxer `navbar.html` i `estils.css`.
  2. Dissenya el contenidor principal amb `display: flex`, `justify-content: space-between` i `align-items: center`.
  3. Fes que el bloc del cercador central tinga un factor de creixement `flex-grow: 1` amb un `max-width: 500px` per a adaptar-se sense col·lapsar els extrems.
  4. Afig pseudoclasses `:hover` i transicions suaus de color (`transition: all 0.3s ease;`) en tots els botons interactius.

#### Repte 2: Creació d'un catàleg de targetes (*Product Grid*) autoorganitzable
- **Objectiu:** Construir una graella de productes dinàmica que adapte el nombre de columnes automàticament sense necessitat de *Media Queries*.
- **Instruccions:**
  1. Crea un contenidor amb 8 targetes de producte (`.card`).
  2. Configura el contenidor amb la propietat màgica de CSS Grid:
     ```css
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
     gap: 1.5rem;
     ```
  3. Dins de cada targeta, empra Flexbox en direcció columna (`flex-direction: column`) de manera que el botó de "Comprar" quede sempre enganxat a la part inferior mitjançant `margin-top: auto`.
  4. Comprova al navegador com redimensionant la finestra el nombre de columnes passa de 4 a 3, a 2 i a 1 columna de manera fluida.

#### Repte 3: Disseny complet Mobile-First amb Media Queries
- **Objectiu:** Crear una pàgina d'article de blog adaptada a mòbils, tauletes i pantalles panoràmiques.
- **Instruccions:**
  1. Defineix una paleta de colors i espaiats mitjançant variables CSS en `:root`.
  2. Implementa l'estil base pensat per a pantalles estretes (fins a $767\text{ px}$): font de `1rem`, barra lateral oculta o situada baix del contingut principal.
  3. Afig una regla `@media (min-width: 768px)` per a tauletes: distribució a 2 columnes, mida de títols ampliada.
  4. Afig una regla `@media (min-width: 1024px)` per a escriptori: graella a 3 columnes amb navegació fixa i barra lateral d'enllaços relacionats.
  5. Verifica el disseny activant les eines de desenvolupador del navegador (*F12 / Responsive Design Mode*) per als perfils de dispositius iPhone, iPad i Desktop 1080p.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He aplicat el reinici del model de caixa universal (`*, *::before, *::after { box-sizing: border-box; }`).
- [ ] He definit variables CSS a `:root` per a gestionar colors i mides corporatives.
- [ ] He calculat correctament l'especificitat evitant l'ús injustificat de `!important`.
- [ ] He utilitzat Flexbox per a resoldre alineacions i distribucions unidimensionals.
- [ ] He utilitzat CSS Grid per a compondre estructures bidimensionals amb `fr` i `gap`.
- [ ] He seguit la filosofia Mobile-First utilitzant punts de ruptura basats en `min-width`.
- [ ] He verificat la correcta adaptabilitat visual simulant resolucions mòbils i tauletes.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Cascada i Especificitat** | Domina el càlcul d'especificitat, l'arbre de cascada i l'ús de custom properties (variables) sense emprar mai `!important`. | Comprèn com interactuen les classes i IDs i estructura fulls d'estil nets i modulars. | Coneix la cascada bàsica però recorre a `!important` quan no aconsegueix sobreescriure una regla. | Ignora el càlcul d'especificitat i genera estils redundants o fortament acoblats. |
| **Model de Caixa (Box Model)** | Aplica `border-box` de forma universal, gestiona marges col·lapsats i calcula amb precisió l'amplària visual real. | Utilitza `box-sizing: border-box` correctament i dimensiona paddings i voreres sense desbordaments. | Treballa amb marges i farciments però té confusions entre l'espai interior i exterior. | Confon padding amb margin o genera elements que desborden constantment la finestra. |
| **Maquetació Moderna (Flexbox & Grid)** | Combina hàbilment Flexbox per a components unidimensionals i CSS Grid per a l'esquelet general del lloc web. | Implementa layouts funcionals tant amb Flexbox com amb CSS Grid utilitzant unitats fraccionàries i gap. | Crea dissenys senzills amb Flexbox però té dificultats per a configurar xarxes bidimensionals amb Grid. | Continua recorrent a floats obsolets o taules HTML per a maquetar elements en la pàgina. |
| **Disseny Adaptatiu (Mobile-First)** | Desenvolupa dissenys completament adaptables amb enfocament Mobile-First, breakpoints semàntics i unitats relatives (rem, vw). | Construeix llocs web adaptables emprant media queries i comprovant la renderització en dispositius mòbils. | Afig media queries d'escriptori cap a mòbil (Desktop-First) amb alguns desajustos visuals en tauletes. | No fa ús de media queries ni de meta viewport; la web requereix zoom horitzontal en mòbils. |
