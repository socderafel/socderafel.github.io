---
layout: default
title: "UD1: Els Nombres Naturals — Ciències Aplicades I"
course_root: ".."
badge: "1r FPB · Ciències Aplicades I · UD1"
prev_url: "../index.html"
prev_label: "⬅️ Tornar al Curs"
next_url: "../ut02/index.html"
next_label: "UD2 La Matèria i Nutrició ➡️"
---

# UD1: Els Nombres Naturals (Matemàtiques)

Benvingut/da a la **Unitat Didàctica 1** del bloc de Matemàtiques de Ciències Aplicades I. En aquesta unitat aprendràs com funciona el nostre sistema decimal, com operar amb nombres naturals, la jerarquia oficial d'operacions i com calcular potències de manera senzilla i pràctica.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-dec" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-opb" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-jer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-pot" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">ELS NOMBRES NATURALS: SISTEMA DECIMAL, JERARQUIA I POTÈNCIES</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Valor posicional, operacions bàsiques, ordre de càlcul i propietats exponencials</text>

  <!-- Bloc 1: Sistema Decimal -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dec)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔟</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Sistema Decimal</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Valor Posicional</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Base 10: {0,1,2...9}</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• U, D, C, UM, DM, CM</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Descomposició en base 10</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 523 = 5·10² + 2·10¹ + 3</text>
  </g>

  <!-- Bloc 2: Operacions Bàsiques -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-opb)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">➕</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Operacions (+ - · :)</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Propietats i Proves</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Suma amb portades</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Resta demanant prestat</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Distributiva: a·(b+c)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Prova: D = d·c + r</text>
  </g>

  <!-- Bloc 3: Jerarquia d'Operacions -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-jer)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Jerarquia Oficial</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Ordre de Càlcul</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">1. Parèntesis ( ) [ ]</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">2. Potències i arrels</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">3. Multiplicació i divisió</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">4. Sumes i restes</text>
  </g>

  <!-- Bloc 4: Potències de Naturals -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-pot)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Potències aⁿ</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Lleis dels Exponents</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• aⁿ · aᵐ = aⁿ⁺ᵐ</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• aⁿ : aᵐ = aⁿ⁻ᵐ</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• (aⁿ)ᵐ = aⁿ·ᵐ</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• a⁰ = 1  |  a¹ = a</text>
  </g>
</svg>
</div>

---

## 📑 Índex d'Apartats de la Unitat {#index-unitat}

<div style="background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; padding: 16px 20px; margin: 1.5rem 0;">
  <p style="margin: 0 0 10px 0; font-weight: 600; color: var(--primary);">Accés ràpid als apartats complets d'aquesta unitat:</p>
  <ol style="margin: 0; padding-left: 20px; line-height: 2.1;">
    <li><a href="#sec1-1"><strong>1.1 El Sistema de Numeració Decimal i Valor Posicional</strong></a></li>
    <li><a href="#sec1-2"><strong>1.2 Els Nombres Naturals i les Operacions Bàsiques</strong></a></li>
    <li><a href="#sec1-3"><strong>1.3 Propietats de les Operacions i Jerarquia</strong></a></li>
    <li><a href="#sec1-4"><strong>1.4 Potències de Nombres Naturals i Propietats</strong></a></li>
    <li><a href="#sec1-5"><strong>1.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori</strong></a></li>
  </ol>
</div>

---

## 📌 1.1 El Sistema de Numeració Decimal i Valor Posicional {#sec1-1}

El sistema de numeració que utilitzem cada dia és el **sistema decimal**. Probablement, els éssers humans vam començar a comptar utilitzant els dits de les mans, i per aquesta mateixa raó vam idear un sistema basat en **10 símbols bàsics** (anomenats dígits o xifres):

$$\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$

---

### 1. Ordres d'Unitats: De la Unitat al Millar

En el sistema decimal, agrupem les quantitats de **10 en 10**: cada deu unitats d'un ordre formen una unitat de l'ordre immediatament superior:

| Ordre d'Unitat | Abreviatura | Equivalència en Unitats |
| :--- | :---: | :---: |
| **Unitat** | **U** | $1 \text{ U}$ |
| **Desena** | **D** | $1 \text{ D} = 10 \text{ U}$ |
| **Centena** | **C** | $1 \text{ C} = 10 \text{ D} = 100 \text{ U}$ |
| **Unitat de Millar** | **UM** | $1 \text{ UM} = 10 \text{ C} = 1.000 \text{ U}$ |
| **Desena de Millar** | **DM** | $1 \text{ DM} = 10 \text{ UM} = 10.000 \text{ U}$ |
| **Centena de Millar**| **CM** | $1 \text{ CM} = 10 \text{ DM} = 100.000 \text{ U}$ |

> [!NOTE]
> **Per què agrupem?**
> Si volguérem representar el nombre $1.200$ dibuixant elements solts d'un en un, seria lent i fàcil equivocar-se. Agrupant en desenes ($10$), centenes ($100$) i milers ($1.000$) podem escriure qualsevol quantitat enorme amb només unes poques xifres.

---

### 2. El Valor Posicional de les Xifres

El sistema decimal és un **sistema posicional**: el valor real d'una xifra depèn directament de la **posició** que ocupa dins del nombre.

Vegem per exemple el nombre **$523$**:

```text
Centenes (C)   Desenes (D)   Unitats (U)
     5              2             3
```

- La xifra **$3$** ocupa el lloc de les unitats $\rightarrow 3 \times 1 = 3$
- La xifra **$2$** ocupa el lloc de les desenes $\rightarrow 2 \times 10 = 20$
- La xifra **$5$** ocupa el lloc de les centenes $\rightarrow 5 \times 100 = 500$

Per tant:
$$523 = 500 + 20 + 3 = 5\text{C} + 2\text{D} + 3\text{U}$$

---

### 3. Descomposició Polinòmica amb Potències de Base 10

Les potències de $10$ ens permeten expressar de manera abreujada els diferents ordres d'unitats:

- $10^0 = 1$ (Unitats)
- $10^1 = 10$ (Desenes)
- $10^2 = 100$ (Centenes)
- $10^3 = 1.000$ (Unitats de millar)
- $10^4 = 10.000$ (Desenes de millar)

La **descomposició polinòmica** d'un nombre consisteix a expressar-lo com una suma de productes de cada xifra per la potència de $10$ corresponent a la seua posició:

$$523 = (5 \times 10^2) + (2 \times 10^1) + (3 \times 10^0)$$

Com que $10^0 = 1$, podem simplificar l'últim terme directament com a $3$:
$$523 = (5 \times 10^2) + (2 \times 10^1) + 3$$

#### Exemple Resolts Pas a Pas:
Descompon el nombre **$4.708$**:
- Té $4$ milers, $7$ centenes, $0$ desenes i $8$ unitats.
- Descomposició aditiva: $4.000 + 700 + 8$
- Descomposició polinòmica:
  $$4.708 = (4 \times 10^3) + (7 \times 10^2) + 8$$

---

### ✍️ Activitats d'Aprenentatge


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Identifica el valor posicional de la xifra subratllada


<div class="interactive-quiz" data-quiz-id="ca1_u1_1_q1a" data-answer="400|4 centenes|4C" data-hint="La xifra 4 està en la centena: 4 × 100 = 400 unitats.">
  <div class="quiz-question">✍️ Quin valor en unitats té la xifra subratllada a: 3.<u>4</u>52 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_1_q1b" data-answer="7000|7 unitats de millar|7UM" data-hint="La xifra 7 està en les unitats de millar: 7 × 1.000 = 7.000 unitats.">
  <div class="quiz-question">✍️ Quin valor en unitats té la xifra subratllada a: <u>7</u>.120 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_1_q1c" data-answer="6|6 unitats|6U" data-hint="La xifra 6 està en les unitats: 6 × 1 = 6.">
  <div class="quiz-question">✍️ Quin valor en unitats té la xifra subratllada a: 98<u>6</u> ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_1_q1d" data-answer="50000|5 desenes de millar|5DM" data-hint="La xifra 5 està en les desenes de millar: 5 × 10.000 = 50.000 unitats.">
  <div class="quiz-question">✍️ Quin valor en unitats té la xifra subratllada a: <u>5</u>4.300 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

#### 2. Descomposició Polinòmica Inversa

Escriu el nombre complet que correspon a cadascuna de les expressions polinòmiques:


<div class="interactive-quiz" data-quiz-id="ca1_u1_1_q3a" data-answer="8354" data-hint="8.000 + 300 + 50 + 4 = 8.354.">
  <div class="quiz-question">✍️ Quin nombre és: (8 × 10³) + (3 × 10²) + (5 × 10¹) + 4 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_1_q3b" data-answer="60209" data-hint="60.000 + 0 milers + 200 + 0 desenes + 9 = 60.209.">
  <div class="quiz-question">✍️ Quin nombre és: (6 × 10⁴) + (2 × 10²) + 9 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

## 📌 1.2 Els Nombres Naturals i les Operacions Bàsiques {#sec1-2}

### 1. El Conjunt dels Nombres Naturals ($\mathbb{N}$)

Els **nombres naturals** van sorgir de la necessitat humana de comptar i ordenar objectes (animals, fruites, eines). Es representen amb la lletra $\mathbb{N}$:

$$\mathbb{N} = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, \dots\}$$

- **Infinitud:** No hi ha un nombre natural que siga més gran que tots els altres. Sempre podem afegir $+1$ i trobar-ne un de major.
- **Ordre i Recta Numèrica:** Els nombres naturals estan ordenats. Podem representar-los en una recta numèrica:

```text
  0     1     2     3     4     5     6     7     8     9    ...
──┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼────►
```

Sempre és **menor** aquell nombre que està més a l'esquerra:
- Utilitzem el símbol **$<$** per a expressar "menor que": $4 < 7$
- Utilitzem el símbol **$>$** per a expressar "major que": $9 > 3$

---

### 2. Suma (Addició)

Per a sumar dos o més nombres:
1. Col·loquem els sumands en vertical alineant les unitats davall de les unitats, les desenes davall de les desenes, etc.
2. Sumem columna a columna començant per les unitats.
3. Si el resultat d'una columna és $10$ o superior, apuntem la unitat i afegim la desena a la columna següent (**"en portem una"**).

#### Exemple amb Portada:
Volem calcular **$46 + 27$**:

```text
    ¹
    4 6   (Sumem unitats: 6 + 7 = 13 → Escrivim 3, en portem 1)
  + 2 7   (Sumem desenes: 1 + 4 + 2 = 7)
  ─────
    7 3
```

---

### 3. Resta (Subtracció)

Col·loquem el **minuend** (la quantitat inicial) a dalt i el **subtrahend** (la quantitat que llevem) a baix, alineant per unitats:

$$\text{Minuend} - \text{Subtrahend} = \text{Diferència}$$

Quan una xifra del minuend és menor que la del subtrahend, hem de **demanar prestat** a la columna immediatament superior (una desena es converteix en $10$ unitats).

#### Exemple amb Préstec:
Volem calcular **$32 - 17$**:

```text
    ²  ¹²
    3   2   (Com que 2 < 7, demanem 1 desena prestada: 12 - 7 = 5)
  - 1   7   (Les desenes es queden en 2: 2 - 1 = 1)
  ───────
    1   5
```

---

### 4. Multiplicació (Producte)

Multiplicar no és més que una **manera ràpida de fer una suma repetida**.
- Si Andrés compra $6$ sobres de cromos i cadascun porta $5$ cromos, en lloc de fer $5 + 5 + 5 + 5 + 5 + 5$, fem:
  $$6 \times 5 = 30 \text{ cromos}$$

Els nombres que es multipliquen s'anomenen **factors**, i el resultat és el **producte**.

```text
     5 8
   ×   2
   ─────
   1 1 6   (2 × 8 = 16 → posem 6 i portem 1;  2 × 5 = 10 + 1 = 11)
```

---

### 5. Divisió (Repartiment)

La divisió consisteix a **repartir una quantitat en parts iguals**. Els seus components són:

- **Dividend ($D$):** La quantitat total que volem repartir.
- **Divisor ($d$):** En quantes parts iguals repartim.
- **Quocient ($c$):** El resultat del repartiment (el que li toca a cadascú).
- **Residu ($r$):** El que sobra (sempre ha de ser menor que el divisor, $r < d$).

#### La Prova de la Divisió
Per comprovar si una divisió està ben resolta, s'ha de complir sempre la igualtat fonamental:

$$\text{Dividend} = (\text{Divisor} \times \text{Quocient}) + \text{Residu} \quad \longrightarrow \quad D = d \times c + r$$

> [!TIP]
> - Si el residu és **$0$**, la divisió és **exacta**: $D = d \times c$.
> - Si el residu és **diferent de $0$**, la divisió és **entera**.

#### Exemple Resolts:
Volem dividir **$754 : 32$**:

```text
  7 5 4  │ 32
- 6 4    ├─────
  ─────  │ 23   ← Quocient
  1 1 4
-   9 6
  ─────
    1 8         ← Residu
```

**Comprovació amb la Prova:**
$$32 \times 23 + 18 = 736 + 18 = 754 \quad \text{(Correcte!)}$$

---

### ✍️ Activitats d'Aprenentatge


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Sumes i Restes amb Nombres Naturals


<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q1a" data-answer="1273" data-hint="Suma per columnes: 8+5=13 (portem 1); 4+2+1=7; 3+9=12 -> 1.273.">
  <div class="quiz-question">✍️ Calcula la suma: 348 + 925</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q1b" data-answer="538" data-hint="15 - 7 = 8; 9 - 6 = 3; 13 - 8 = 5 -> 538.">
  <div class="quiz-question">✍️ Calcula la resta amb préstec: 1.405 - 867</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q1c" data-answer="6551" data-hint="12.340 - 5.789 = 6.551.">
  <div class="quiz-question">✍️ Calcula la resta: 12.340 - 5.789</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

#### 2. Multiplicacions


<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q2a" data-answer="3510" data-hint="234 × 10 = 2340; 234 × 5 = 1170; 2340 + 1170 = 3.510.">
  <div class="quiz-question">✍️ Calcula el producte: 234 × 15</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q2b" data-answer="37512" data-hint="1.042 × 36 = 37.512.">
  <div class="quiz-question">✍️ Calcula el producte: 1.042 × 36</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

#### 3. Divisions i Prova del Residu


<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q3a" data-answer="140" data-hint="840 : 6 = 140 (residu 0).">
  <div class="quiz-question">✍️ Calcula la divisió exacta: 840 : 6</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q3b" data-answer="39" data-hint="24 × 39 = 936; 957 - 936 = 21 de residu.">
  <div class="quiz-question">✍️ Quin és el quocient enter de: 957 : 24 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_2_q3c" data-answer="43" data-hint="35 × 43 = 1.505; 1.520 - 1.505 = 15 de residu.">
  <div class="quiz-question">✍️ Quin és el quocient enter de: 1.520 : 35 ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

## 📌 1.3 Propietats de les Operacions i Jerarquia {#sec1-3}

### 1. Propietats Fonamentals de la Multiplicació

La multiplicació compleix tres propietats matemàtiques clau:

#### 1) Propietat Commutativa
> *"L'ordre dels factors no altera el producte."*

$$a \cdot b = b \cdot a$$

- **Exemple:** $10 \cdot 3 = 30$ i $3 \cdot 10 = 30$. El resultat és exactament el mateix.

#### 2) Propietat Associativa
> *"La forma d'agrupar els factors no varia el resultat."*

$$(a \cdot b) \cdot c = a \cdot (b \cdot c)$$

- **Exemple:** $(3 \cdot 2) \cdot 5 = 6 \cdot 5 = 30$
- Agrupant d'una altra manera: $3 \cdot (2 \cdot 5) = 3 \cdot 10 = 30$.

#### 3) Propietat Distributiva (respecte a la suma i la resta)
> *"La multiplicació d'un nombre per una suma és igual a la suma dels productes d'aquest nombre per cadascun dels sumands."*

$$a \cdot (b + c) = (a \cdot b) + (a \cdot c)$$

- **Exemple:** $2 \cdot (3 + 5)$
  - *Mètode A (resolent el parèntesi primer):* $2 \cdot 8 = 16$
  - *Mètode B (aplicant propietat distributiva):* $(2 \cdot 3) + (2 \cdot 5) = 6 + 10 = 16$

> [!WARNING]
> **I la Divisió?**
> La divisió **NO** té les propietats commutativa ni associativa:
> - $20 : 5 = 4$, però $5 : 20 \neq 4$. L'ordre sí que importa!
> - Per això, en expressions amb divisions, els parèntesis són obligatoris per a definir quina operació va primer.

---

### 2. La Jerarquia d'Operacions

Quan tenim diverses operacions barrejades en una mateixa expressió (operacions combinades), cal seguir sempre aquest **ordre oficial estricte**:

```text
PAS 1:  ( )  [ ]  Parèntesis i claudàtors (de dins cap a fora).
PAS 2:   aⁿ  √    Potències i arrels.
PAS 3:   ·   :    Multiplicacions i divisions (d'esquerra a dreta).
PAS 4:   +   -    Sumes i restes (d'esquerra a dreta).
```

#### Exemples Resolts Pas a Pas:

##### Exemple A: Sense Parèntesis
Calcular: $6 : 2 + 5 - 12 : 4$

1. Primer fem les divisions (d'esquerra a dreta):
   - $6 : 2 = 3$
   - $12 : 4 = 3$
   - L'expressió queda: $3 + 5 - 3$
2. Ara fem les sumes i restes:
   - $3 + 5 = 8$
   - $8 - 3 = 5$
   - **Resultat final: $5$**

##### Exemple B: Amb Parèntesis
Calcular: $40 : 8 - (30 : 6 + 2)$

1. Resolem primer l'interior del parèntesi:
   - Dins del parèntesi hi ha divisió i suma $\rightarrow$ primer la divisió: $30 : 6 = 5$
   - Ara sumem: $5 + 2 = 7$
2. Substituïm el parèntesi: $40 : 8 - 7$
3. Fem la divisió: $40 : 8 = 5$
4. Fem la resta: $5 - 7$ *(en nombres naturals no podem restar si el minuend és menor, per la qual cosa en $\mathbb{N}$ caldrà que el resultat siga positiu; en aquest cas $40:8$ dóna 5)*.

##### Exemple C: Amb Claudàtors i Parèntesis
Calcular: $10 \cdot [(6 - 5) + (9 - 4)]$

1. Resolem primer els parèntesis interiors:
   - $(6 - 5) = 1$
   - $(9 - 4) = 5$
2. Ara l'interior del claudàtor: $[1 + 5] = 6$
3. Finalment, multipliquem: $10 \cdot 6 = 60$
   - **Resultat final: $60$**

---

### ✍️ Activitats d'Aprenentatge


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Propietat Distributiva


<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q1a" data-answer="45" data-hint="5·6 + 5·3 = 30 + 15 = 45.">
  <div class="quiz-question">✍️ Aplica la distributiva i resol: 5 · (6 + 3)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q1b" data-answer="32" data-hint="4·10 - 4·2 = 40 - 8 = 32.">
  <div class="quiz-question">✍️ Aplica la distributiva i resol: 4 · (10 - 2)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q1c" data-answer="60" data-hint="3·8 + 3·12 = 24 + 36 = 60.">
  <div class="quiz-question">✍️ Aplica la distributiva i resol: 3 · (8 + 12)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

#### 2. Jerarquia d'Operacions Combinades


<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q2a" data-answer="26" data-hint="Primer multiplicacions: 20 + 6 = 26.">
  <div class="quiz-question">✍️ Calcula segons la jerarquia: 5 · 4 + 2 · 3</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q2b" data-answer="0" data-hint="Primer divisions: 4 - 4 = 0.">
  <div class="quiz-question">✍️ Calcula segons la jerarquia: 20 : 5 - 8 : 2</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q2c" data-answer="5" data-hint="Parèntesi primer: 27 : 3 - 4 = 9 - 4 = 5.">
  <div class="quiz-question">✍️ Calcula amb parèntesi: 27 : (12 - 9) - 4</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q2d" data-answer="40" data-hint="Interior: 10 - 8 = 2; Claudàtor: 5 + 2 = 7; Multiplicació: 3 · 7 = 21; Suma: 19 + 21 = 40.">
  <div class="quiz-question">✍️ Calcula amb claudàtor: 19 + 3 · [5 + (10 - 8)]</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_3_q2e" data-answer="21" data-hint="Parèntesis: (9-7)=2 i (16-8)=8; Claudàtor: [2·3]=6; Multiplicació: 2·6=12; Operacions: 25 - 12 + 8 = 21.">
  <div class="quiz-question">✍️ Calcula: 25 - 2 · [(9 - 7) · 3] + (16 - 8)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

## 📌 1.4 Potències de Nombres Naturals i Propietats {#sec1-4}

### 1. Concepte de Potència

Una **potència** és una forma abreujada d'expressar una multiplicació de factors iguals (una multiplicació repetida):

$$a^n = \underbrace{a \cdot a \cdot a \dots a}_{n \text{ vegades}}$$

Una potència està formada per dos elements:

- **Base ($a$):** El nombre que es multiplica per si mateix.
- **Exponent ($n$):** El nombre de vegades que es repeteix la base.

```text
       Exponent (quantes vegades es multiplica)
          ▼
        2³ = 2 · 2 · 2 = 8
        ▲
      Base (el nombre que es repeteix)
```

#### Exemples Didàctics:
- $3^4 = 3 \cdot 3 \cdot 3 \cdot 3 = 81$
- $5^2 = 5 \cdot 5 = 25$ *(es llig "cinc al quadrat")*
- $2^3 = 2 \cdot 2 \cdot 2 = 8$ *(es llig "dos al cub")*
- $10^3 = 10 \cdot 10 \cdot 10 = 1.000$

> [!IMPORTANT]
> **Alerta amb un error molt típic:**
> **$(3 + 2)^3$ NO és el mateix que $3^3 + 2^3$**:
> - $(3 + 2)^3 = 5^3 = 5 \cdot 5 \cdot 5 = 125$
> - $3^3 + 2^3 = 27 + 8 = 35$
> Com pots comprovar, $125 \neq 35$. La potència d'una suma mai és la suma de les potències!

---

### 2. Quadre Resum de les Propietats de les Potències

Les potències tenen regles algebraiques que ens permeten simplificar càlculs complexos en un instant:

| Propietat | Regla Matemàtica | Exemple Pràctic |
| :--- | :---: | :---: |
| **Producte de potències de la mateixa base** | $a^n \cdot a^m = a^{n + m}$ | $4^2 \cdot 4^3 = 4^{2+3} = 4^5 = 1.024$ |
| **Quocient de potències de la mateixa base** | $a^n : a^m = \dfrac{a^n}{a^m} = a^{n - m}$ | $3^5 : 3^2 = 3^{5-2} = 3^3 = 27$ |
| **Potència d'un producte** | $(a \cdot b)^n = a^n \cdot b^n$ | $(3 \cdot 4)^2 = 3^2 \cdot 4^2 = 9 \cdot 16 = 144$ |
| **Potència d'un quocient (fracció)** | $(a : b)^n = \left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | $(8 : 4)^2 = 8^2 : 4^2 = 64 : 16 = 4$ |
| **Potència d'una potència** | $(a^n)^m = a^{n \cdot m}$ | $(2^2)^3 = 2^{2 \cdot 3} = 2^6 = 64$ |
| **Potència d'exponent $0$** | $a^0 = 1 \quad (a \neq 0)$ | $7^0 = 1 \quad ; \quad 125^0 = 1$ |
| **Potència d'exponent $1$** | $a^1 = a$ | $9^1 = 9 \quad ; \quad 42^1 = 42$ |

> [!TIP]
> **Divisions i Fraccions:**
> Recorda que una divisió $a : b$ és exactament el mateix que una fracció $\dfrac{a}{b}$. Ambdues representen la mateixa operació de quocient.

---

### 3. Potències de Base 10

Les potències de $10$ són immediates de calcular en el nostre sistema decimal:
Només cal escriure l'$1$ seguit de tants zeros com indique l'exponent:

- $10^1 = 10$ ($1$ zero)
- $10^2 = 100$ ($2$ zeros)
- $10^3 = 1.000$ ($3$ zeros)
- $10^4 = 10.000$ ($4$ zeros)
- $10^6 = 1.000.000$ ($6$ zeros $\rightarrow$ un milió)

---

### ✍️ Activitats d'Aprenentatge


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Càlcul de Potències Bàsiques


<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q1a" data-answer="16" data-hint="2 × 2 × 2 × 2 = 16.">
  <div class="quiz-question">✍️ Calcula el valor de la potència: 2⁴</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q1b" data-answer="125" data-hint="5 × 5 × 5 = 125.">
  <div class="quiz-question">✍️ Calcula el valor de la potència: 5³</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q1c" data-answer="10000" data-hint="L'1 seguit de 4 zeros = 10.000.">
  <div class="quiz-question">✍️ Calcula la potència de 10: 10⁴</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q1d" data-answer="27" data-hint="3 × 3 × 3 = 27.">
  <div class="quiz-question">✍️ Calcula: 3³</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q1e" data-answer="1" data-hint="Per conveni matemàtic internacional, a⁰ = 1 per a qualsevol a ≠ 0.">
  <div class="quiz-question">✍️ Quin és el valor de qualsevol nombre elevat a zero: 7⁰ ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

#### 2. Propietats dels Exponents i Problema de Taller


<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q2a" data-answer="6" data-hint="Es manté la base 5 i se sumen exponents: 2 + 4 = 6.">
  <div class="quiz-question">✍️ Producte de la mateixa base: 5² · 5⁴ (escriu el valor de l'exponent final)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q2b" data-answer="27" data-hint="Es resten exponents: 3^(8-5) = 3³ = 27.">
  <div class="quiz-question">✍️ Divisió de la mateixa base: 3⁸ : 3⁵ (escriu el valor final calculat)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_4_q3" data-answer="256" data-hint="Calcula 4 × 4 × 4 × 4 = 256 retoladors.">
  <div class="quiz-question">✍️ En una botiga hi ha 4 prestatgeries, cadascuna amb 4 lleixes, 4 caixes per lleixa i 4 retoladors per caixa. Quants retoladors hi ha en total (4⁴)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

## 📌 1.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori {#sec1-5}

Aquest apartat recull el conjunt complet d'exercicis d'aplicació pràctica, reptes de taller tecnològic i la rúbrica d'avaluació competencial per a la **Unitat 1: Els Nombres Naturals**.

---

### 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

#### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

##### Exercici 1: Valor posicional i descomposició polinòmica en entorns tecnològics
En el magatzem central de manteniment informàtic es rep una gran comanda de cargols M3 i femelles de subjecció per a plaques base. El comptador electrònic marca un total de $14.856\text{ peces}$.
1. Desglossa el nombre $14.856$ segons el seu valor posicional decimal, indicant desenes de millar (DM), unitats de millar (UM), centenes (C), desenes (D) i unitats (U):
   $$14.856 = \underline{\hspace{1cm}}\text{DM} + \underline{\hspace{1cm}}\text{UM} + \underline{\hspace{1cm}}\text{C} + \underline{\hspace{1cm}}\text{D} + \underline{\hspace{1cm}}\text{U}$$
2. Escriu la descomposició polinòmica completa utilitzant potències de base 10:
   $$14.856 = (1 \cdot 10^4) + (4 \cdot 10^3) + (8 \cdot 10^2) + (5 \cdot 10^1) + (6 \cdot 10^0)$$
3. Si un operari canvia per error la xifra de les centenes ($8$) per la xifra de les unitats ($6$), quin nou nombre s'obté? Quina és la diferència econòmica si cada cargol té un cost de $0{,}05\text{ €}$?


<div class="interactive-quiz" data-quiz-id="ca1_u1_5_ex1_3" data-answer="9.90|9.9|9,90|9,9" data-hint="Diferència de peces: 14.856 - 14.658 = 198 cargols. Cost: 198 × 0,05 € = 9,90 €.">
  <div class="quiz-question">✍️ Exercici 1.3: Si un operari canvia per error les centenes (8) per les unitats (6), quin és el sobrecost econòmic en euros si cada cargol costa 0,05 € (198 cargols × 0,05 €)?</div>

<div class="interactive-open-response" data-question-id="ca1_u1_5_open_ex1_1">
  <div class="open-question">✍️ <strong>Exercici 1.1 (Desglossament Posicional):</strong> Desglossa el nombre 14.856 segons el seu ordre decimal, indicant desenes de millar (DM), unitats de millar (UM), centenes (C), desenes (D) i unitats (U):</div>
  <textarea class="open-response-input" rows="3" placeholder="Exemple: 1 DM + 4 UM + ..."></textarea>
</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


##### Exercici 2: Jerarquia d'operacions combinades amb signes d'agrupació
Resol cadascuna de les següents operacions combinades mostrant tots els passos intermedis segons la jerarquia oficial d'operacions (1r parèntesis/claudàtors, 2n potències, 3r multiplicacions/divisions, 4t sumes/restes):
1. **Expressió A:**
   $$A = 48 - 6 \cdot [14 - (3^2 - 1)] + 18 : 3$$
2. **Expressió B:**
   $$B = 5 \cdot (4^2 - 6) : 2 + [35 - (8 \cdot 3 - 4)]$$
3. **Expressió C:**
   $$C = 120 : [2 \cdot (18 - 3) - 20] + 7 \cdot 3^2$$


<div class="interactive-quiz" data-quiz-id="ca1_u1_5_ex2_b" data-answer="40" data-hint="B = 5 · 10 : 2 + [35 - 20] = 25 + 15 = 40.">
  <div class="quiz-question">✍️ Exercici 2 (Expressió B): Quin és el valor final de B = 5 · (4² - 6) : 2 + [35 - (8 · 3 - 4)] ?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_5_ex2_c" data-answer="75" data-hint="C = 120 : [30 - 20] + 63 = 120 : 10 + 63 = 12 + 63 = 75.">
  <div class="quiz-question">✍️ Exercici 2 (Expressió C): Quin és el valor final de C = 120 : [2 · (18 - 3) - 20] + 7 · 3² ?</div>

<div class="interactive-open-response" data-question-id="ca1_u1_5_open_ex2_1">
  <div class="open-question">✍️ <strong>Exercici 2.1 (Procediment de l'Expressió A):</strong> Desenvolupa pas a pas la resolució de l'expressió A = 48 - 6 · [14 - (3² - 1)] + 18 : 3 seguint l'ordre estricte de jerarquia d'operacions:</div>
  <textarea class="open-response-input" rows="3" placeholder="Escriu els passos intermedis fins al resultat final..."></textarea>
</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


##### Exercici 3: Lleis dels exponents i simplificació a potència única
Aplica les propietats de les potències de nombres naturals per reduir cadascuna de les expressions a una sola potència de base irreductible (no calcules el valor final enorme, només simplifica la base i l'exponent):
1. **Producte i divisió de la mateixa base:**
   $$P_1 = \frac{3^4 \cdot 3^7 \cdot 3^2}{3^5 \cdot 3^3}$$
2. **Potència d'una potència i bases compostes:**
   $$P_2 = \frac{(2^3)^4 \cdot 2^5}{(2^2)^6}$$
3. **Producte de bases diferents amb mateix exponent:**
   $$P_3 = \frac{(2^3 \cdot 5^3)^2}{10^4}$$
4. Determina el valor exacte de: $18^0 + 7^1 - (12^3 : 12^3)$.

---


<div class="interactive-quiz" data-quiz-id="ca1_u1_5_ex3_4" data-answer="7" data-hint="18⁰ = 1; 7¹ = 7; 12³ : 12³ = 1. Per tant: 1 + 7 - 1 = 7.">
  <div class="quiz-question">✍️ Exercici 3.4: Determina el valor exacte de: 18⁰ + 7¹ - (12³ : 12³)</div>

<div class="interactive-open-response" data-question-id="ca1_u1_5_open_ex3_1">
  <div class="open-question">✍️ <strong>Exercici 3.1 (Lleis dels Exponents):</strong> Aplica les propietats de la suma i resta d'exponents per reduir la fracció P1 = (3⁴ · 3⁷ · 3²) / (3⁵ · 3³) a una única potència de base 3:</div>
  <textarea class="open-response-input" rows="3" placeholder="Indica la suma d'exponents del numerador, del denominador i la resta final..."></textarea>
</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


#### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

<div class="lab-widget">
  <div class="lab-widget-title">🔬 Simulador de Laboratori: Descompositor Polinòmic Decimal</div>
  <p style="margin: 0 0 12px 0; font-size: 0.88rem; color: var(--text-muted);">
    Introdueix qualsevol nombre enter positiu per analitzar-ne la descomposició posicional en ordres d'unitats i la seua expressió polinòmica en potències de base 10:
  </p>
  <div class="lab-form-grid">
    <div class="lab-field">
      <label for="desc-num">Nombre a descompondre:</label>
      <input type="number" id="desc-num" value="14856" min="0" placeholder="Ex: 14856">
    </div>
  </div>
  <button type="button" class="btn-lab-action" onclick="runDescomposicio()">⚡ Descompondre Nombre</button>
  <div class="lab-result-box" id="desc-res">
    <em>Prem el botó per veure la descomposició posicional i polinòmica en directe.</em>
  </div>
</div>

---

##### Repte 1: Gestió logística i inventari d'un magatzem d'equips
- **Objectiu:** Utilitzar la multiplicació associativa per calcular de forma ràpida l'estoc de components sense comptar peça per peça.
- **Situació de taller:** El magatzem d'FP Bàsica rep un enviament de discs sòlids SSD per renovar les aules d'informàtica:
  - Arriben $4\text{ palets}$ de fusta.
  - Cada palet conté $6\text{ caixes grans}$ de cartó.
  - Dins de cada caixa gran hi ha $8\text{ paquets protectors}$.
  - Cada paquet conté $10\text{ unitats SSD}$.
- **Comanda matemàtica:**
  1. Escriu l'expressió del càlcul total aplicant la propietat associativa de la multiplicació:
     $$\text{Total SSD} = 4 \cdot 6 \cdot 8 \cdot 10$$
  2. Resol agrupant factors de dues maneres diferents per verificar que el resultat és idèntic: $(4 \cdot 6) \cdot (8 \cdot 10)$ i $(4 \cdot 10) \cdot (6 \cdot 8)$.
  3. Si cada SSD té una capacitat de $512\text{ GB}$, quants terabytes totals ($\text{TB}$) d'emmagatzematge han arribat en total (prenent $1\text{ TB} \approx 1000\text{ GB}$ per a càlcul comercial)?

##### Repte 2: Repartiment proporcional de material i prova de la divisió
- **Objectiu:** Aplicar la divisió entera i la prova $D = d \cdot c + r$ per a l'assignació de recursos de pràctiques.
- **Situació:** En el taller de xarxes s'obre una bobina que conté exactament $345\text{ metres}$ de cable de parell trenat UTP per repartir a parts iguals entre els $16\text{ estudiants}$ del grup de taller:
  1. Realitza la divisió pas a pas sense calculadora per determinar quants metres exactes sencers corresponen a cada lloc de treball.
  2. Quants metres de cable romanen a la bobina com a residu sobrant?
  3. Aplica formalment la **prova de la divisió** verificant que:
     $$345 = (16 \cdot c) + r \quad \text{i comprova que} \quad r < 16$$
  4. Si cada estudiant ha de construir latiguillos de $2\text{ metres}$, quants cables complets podrà fabricar cadascú amb els seus metres assignats?


<div class="interactive-quiz" data-quiz-id="ca1_u1_5_rep2_2" data-answer="9" data-hint="345 = (16 × 21) + 9 metres de residu.">
  <div class="quiz-question">✍️ Repte 2.2: Quants metres exactes de cable romanen a la bobina com a residu (345 : 16)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u1_5_rep2_4" data-answer="10" data-hint="21 : 2 = 10 cables complets (amb 1 metre sobrant).">
  <div class="quiz-question">✍️ Repte 2.4: Si cada estudiant fabrica latiguillos de 2 m, quants cables complets podrà fer amb els seus 21 metres assignats (21 : 2)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


##### Repte 3: Auditoria energètica i càlcul de consum en kWh
- **Objectiu:** Utilitzar el producte de nombres naturals per calcular el consum elèctric i el cost econòmic d'una instal·lació informàtica.
- **Situació:** L'aula de grau bàsic disposa de:
  - $15\text{ ordinadors d'alumnat}$ amb un consum mitjà de $120\text{ W}$ cadascun.
  - $1\text{ ordinador de docent}$ amb un consum de $150\text{ W}$.
  - $2\text{ pantalles interactives}$ de $200\text{ W}$ cadascuna.
  - Els equips romanen encesos durant $6\text{ hores al dia}$ durant $20\text{ dies lectius al mes}$.
- **Procediment de càlcul:**
  1. Calcula la potència total elèctrica consumida per tots els equips de l'aula funcionant alhora en Watts ($\text{W}$).
  2. Calcula l'energia total mensual consumida en Watt-hora ($\text{Wh}$):
     $$\text{Energia (Wh)} = \text{Potència Total (W)} \cdot 6\text{ hores} \cdot 20\text{ dies}$$
  3. Converteix el resultat a quilowatts-hora ($\text{kWh}$) dividint entre $1.000$.
  4. Si el preu de l'electricitat és de $0{,}18\text{ € per kWh}$, quin és el cost mensual d'energia de l'aula?

---


<div class="interactive-quiz" data-quiz-id="ca1_u1_5_rep3_4" data-answer="50.76|50,76" data-hint="282 kWh × 0,18 €/kWh = 50,76 €.">
  <div class="quiz-question">✍️ Repte 3.4: Si l'aula consumeix 282 kWh al mes i el preu és 0,18 €/kWh, quin és el cost mensual d'energia en euros?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


#### 🎯 Reptes d'Autocomprovació Interactiva (Self-Check)

Introdueix els teus resultats numèrics i comprova immediatament si la teua resposta és correcta:

<div class="interactive-quiz" data-quiz-id="ca1_ud1_q1" data-answer="18" data-hint="A = 48 - 6 · [14 - 8] + 6 = 48 - 36 + 6 = 18.">
  <div class="quiz-question">✍️ Repte interactiu: Calcula el valor numèric final de l'Expressió A segons la jerarquia: 48 - 6 · [14 - (3² - 1)] + 18 : 3</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-quiz-id="ca1_ud1_q2" data-answer="1920" data-hint="Aplica la propietat associativa: 4 · 6 · 8 · 10 = 1.920 unitats SSD.">
  <div class="quiz-question">✍️ Repte interactiu: Quantes unitats totals de discs SSD hi ha en l'enviament de 4 palets (amb 6 caixes per palet, 8 paquets per caixa i 10 SSD per paquet)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-quiz-id="ca1_ud1_q3" data-answer="21" data-hint="Divideix 345 : 16. El quocient enter és 21 metres (amb 9 metres de residu a la bobina).">
  <div class="quiz-question">✍️ Repte interactiu: Quants metres exactes sencers de cable UTP corresponen a cadascun dels 16 estudiants a partir d'una bobina de 345 metres?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-quiz" data-quiz-id="ca1_ud1_q4" data-answer="2350" data-hint="Suma (15 · 120 W) + 150 W + (2 · 200 W) = 1.800 + 150 + 400 = 2.350 W.">
  <div class="quiz-question">✍️ Repte interactiu: Quina és la potència elèctrica total en Watts (W) de tota l'aula (15 equips de 120W, 1 de 150W i 2 pantalles de 200W)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

#### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

##### Llista de comprovació per a l'alumnat
- [ ] He descompost correctament nombres decimals en unitats i potències de base 10.
- [ ] He respectat la jerarquia oficial d'operacions resolent primer claudàtors, després potències, multiplicacions i sumes.
- [ ] He aplicat les propietats dels exponents simplificant bases iguals sense calcular potències gegants a mà.
- [ ] He aplicat la prova de la divisió comprovant que el residu és estrictament menor que el divisor.
- [ ] He utilitzat la propietat associativa i distributiva en problemes de logística i magatzem.
- [ ] He calculat consums elèctrics reals de taller convertint correctament entre Watts i kWh.

##### Rúbrica d'avaluació d'aprenentatge

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Sistema decimal i valor posicional** | Descompon nombres grans en base 10 i potències polinòmiques amb facilitat i comprensió posicional plena. | Realitza la descomposició en ordres d'unitats correctament amb xicotets dubtes en potències de 10. | Identifica unitats, desenes i centenes bàsiques però té dificultats amb la notació polinòmica. | Confon els ordres d'unitat i no comprèn el valor posicional de les xifres. |
| **Jerarquia d'operacions combinades** | Resol expressions complexes amb claudàtors i potències seguint estrictament l'ordre sense cap error. | Resol operacions combinades respectant la jerarquia amb alguna errada puntual de càlcul aritmètic. | Recorda que la multiplicació va abans que la suma però s'equivoca amb claudàtors niats. | Resol les operacions d'esquerra a dreta sense respectar la jerarquia obligatòria. |
| **Lleis de potències i exponents** | Simplifica fraccions de potències aplicant les lleis d'exponents ($a^n \cdot a^m$, $(a^n)^m$, $a^0=1$) amb destresa. | Aplica la suma i resta d'exponents en bases iguals de forma correcta. | Resol potències bàsiques però s'equivoca en simplificar expressions algebraiques. | Multiplica la base per l'exponent ($2^3 = 6$) en lloc de multiplicar la base per si mateixa. |
| **Divisió entera i repartiments ($D=d\cdot c+r$)** | Resol divisions llargues sense calculadora, obté quocient i residu i verifica sempre la prova formal. | Realitza la divisió i calcula el residu de forma correcta comprovant la prova. | Fa la divisió bàsica però té dificultats per interpretar el residu en un problema real. | Incapaç de dividir nombres de dues xifres o no sap verificar la prova de la divisió. |
| **Aplicació pràctica a consum i magatzem** | Modela problemes reals de taller (logística, magatzem, kWh) traduint el text a expressions matemàtiques clares. | Resol els problemes pràctics amb bona interpretació de les dades del taller. | Resol els problemes amb suport en el plantejament o conversió d'unitats. | No sap plantejar els problemes pràctics ni interpretar enunciats tècnics. |

---

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>En acabar els reptes interactius i la llista de comprovació, genera el teu informe oficial per adjuntar-lo o enganxar-lo al lliurament de la tasca d'Aules:</p>
  <div class="aules-student-field">
    <label for="aules-student-name">Nom i Cognoms de l'alumne/a:</label>
    <input type="text" id="aules-student-name" placeholder="Ex: Pere Martí Soler">
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">Calculant resultats dels reptes...</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-copy">📋 Copiar Resum per a Aules</button>
    <button type="button" class="btn-aules-dl" data-module="CA" data-unit="UD01" data-activity="Global">📄 Descarregar Comprovant (.pdf)</button>
  </div>
  <div class="aules-toast"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---
