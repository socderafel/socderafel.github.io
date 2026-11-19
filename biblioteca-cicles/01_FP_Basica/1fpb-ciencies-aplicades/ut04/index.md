---
layout: default
title: "UD4: Divisibilitat, Màxim Comú Divisor i Mínim Comú Múltiple — Ciències Aplicades I"
course_root: ".."
badge: "1r FPB · Ciències Aplicades I · UD4"
prev_url: "../ut03/index.html"
prev_label: "⬅️ MAT 2 Els Nombres Enters"
next_url: "../ut05/index.html"
next_label: "MAT 4 Les Fraccions ➡️"
---

# UD4: Divisibilitat, Màxim Comú Divisor i Mínim Comú Múltiple (Matemàtiques)

<div class="pdi-unit-callout" style="background: linear-gradient(135deg, rgba(5, 150, 105, 0.12), rgba(2, 132, 199, 0.12)); border: 2px solid #10b981; border-radius: 14px; padding: 18px 22px; margin: 24px 0; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
  <div>
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
      <span style="background: #059669; color: #fff; font-weight: 800; font-size: 0.75rem; padding: 2px 10px; border-radius: 50px;">PDI · Pissarra Digital</span>
      <span style="font-weight: 800; font-size: 1.15rem; color: var(--text);">🎯 5 Reptes Interactius d'Arrastrar i Soltar de UD4</span>
    </div>
    <div style="font-size: 0.95rem; color: var(--text-muted);">Practica a la pissarra de classe amb pantalles tàctils o des de tauletes amb sons i autocorrecció immediata.</div>
  </div>
  <a href="../pissarra-interactiva.html" onclick="localStorage.setItem('pdi-target-unit', 'ud4')" style="background: linear-gradient(135deg, #059669, #0d9488); color: #fff !important; font-weight: 800; padding: 10px 18px; border-radius: 10px; text-decoration: none !important; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3); display: inline-flex; align-items: center; gap: 6px;">
    <span>🖥️ Obrir Reptes PDI</span>
    <span>→</span>
  </a>
</div>

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-crt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-fct" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mcd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mcm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-4)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ARITMÈTICA MODULAR: DIVISIBILITAT, MCD I MCM</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Descomposició factorial, optimització de recursos de taller i càlcul de periodicitat</text>

  <!-- Bloc 1: Criteris de Divisibilitat -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-crt)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Criteris Ràpids</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Regles sense Dividir</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Per 2: Acaba en 0 o parell</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Per 3: Suma xifres és ·3</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Per 5: Acaba en 0 o 5</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Per 11: Alternança = 0, 11</text>
  </g>

  <!-- Bloc 2: Factors Primers -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fct)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🧬</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Factors Primers</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Teorema Fonamental</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Primers: 2, 3, 5, 7, 11, 13...</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Descomposició única en ℤ</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Divisió successiva vertical</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 60 = 2² · 3 · 5</text>
  </g>

  <!-- Bloc 3: Màxim Comú Divisor -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mcd)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">✂️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">M.C.D.</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Repartir i Retallar</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Comuns al MENOR exp.</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Màxima mida possible</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Sense cap residu sobrant</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Tall de bobines i envasos</text>
  </g>

  <!-- Bloc 4: Mínim Comú Múltiple -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-mcm)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">M.C.M.</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Coincidència i Cicles</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Comuns i NO al MAJOR exp.</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Primer moment de trobada</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Cicles de manteniment</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Engranatges i semàfors</text>
  </g>
</svg>
</div>

---

## 📑 Índex d'Apartats de la Unitat {#index-unitat}

<div style="background: var(--code-bg); border: 1px solid var(--border); border-radius: 8px; padding: 16px 20px; margin: 1.5rem 0;">
  <p style="margin: 0 0 10px 0; font-weight: 600; color: var(--primary);">Accés ràpid als apartats complets d'aquesta unitat:</p>
  <ol style="margin: 0; padding-left: 20px; line-height: 2.1;">
    <li><a href="#sec4-1"><strong>4.1 Múltiples, Divisors i Criteris de Divisibilitat</strong></a></li>
    <li><a href="#sec4-2"><strong>4.2 Nombres Primers i Descomposició en Factors Primers</strong></a></li>
    <li><a href="#sec4-3"><strong>4.3 Màxim Comú Divisor (MCD) i Mínim Comú Múltiple (MCM)</strong></a></li>
    <li><a href="#sec4-4"><strong>4.4 Problemes Reals d'MCD i MCM i Butlletí d'Exercicis</strong></a></li>
  </ol>
</div>

---

## 📌 4.1 Múltiples, Divisors i Criteris de Divisibilitat {#sec4-1}

La **divisibilitat** és la branca de l'aritmètica que estudia les condicions perquè un nombre sencer puga dividir-se exactament entre un altre sense deixar residu.

---

### 1. La Relació de Divisibilitat: Múltiples i Divisors

Diem que dos nombres naturals estan emparentats per la **relació de divisibilitat** quan la divisió del primer entre el segon és **exacta** (el residu és $0$):

\text{Si } a : b = c \quad (\text{residu } 0) \iff a = b \cdot c

En aquest cas, podem expressar aquesta mateixa relació de tres formes equivalents:
1. **a és múltiple de b:** Perquè s'obté multiplicant b per un altre nombre natural c.
2. **b és divisor de a:** Perquè divideix exactament a a.
3. **a és divisible per b:** Perquè la divisió $a : b$ és exacta.

> **Exemple clar:** $24 : 6 = 4$ (residu $0$).
> - $24$ és múltiple de $6$.
> - $6$ és divisor de $24$.
> - $24$ és divisible per $6$.

---

### 2. Com Calcular Múltiples d'un Nombre

Els **múltiples** d'un nombre s'obtenen multiplicant aquest nombre per qualsevol nombre natural ($0, 1, 2, 3, 4, \dots$):

\dot{a} \text{ o } \text{Múlt}(a) = \{a \cdot 0, a \cdot 1, a \cdot 2, a \cdot 3, \dots\}

- **Propietats dels múltiples:**
  - Tot nombre té **infinits múltiples**.
  - El **$0$ és múltiple de tots els nombres**: $a \cdot 0 = 0$.
  - Tot nombre és múltiple de si mateix: $a \cdot 1 = a$.

> **Exemple:** Múltiples de $7$:  
> $\text{Múlt}(7) = \{0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, \dots\}

---

### 3. Com Trobar Tots els Divisors d'un Nombre

Un nombre b és **divisor** de a si la divisió $a : b$ no té residu.

- **Propietats dels divisors:**
  - El conjunt de divisors d'un nombre és **finit** (té un nombre limitat d'elements).
  - L'**$1$ és divisor de qualsevol nombre**.
  - Tot nombre és divisor de si mateix: $a : a = 1$.

#### Mètode de les Parelles per a Trobar els Divisors
Dividim el nombre successivament entre $1, 2, 3, 4, \dots$ fins que el quocient siga menor o igual que el divisor:

> **Exemple:** Calculem tots els divisors de $36$:
> - $36 : 1 = 36 \longrightarrow$ divisors: **$1i36$**
> - $36 : 2 = 18 \longrightarrow$ divisors: **$2i18$**
> - $36 : 3 = 12 \longrightarrow$ divisors: **$3i12$**
> - $36 : 4 = 9 \longrightarrow$ divisors: **$4i9$**
> - $36 : 5$ no és exacta (residu $1$).
> - $36 : 6 = 6 \longrightarrow$ divisor: **$6$**
> 
> $\text{Div}(36) = \{1, 2, 3, 4, 6, 9, 12, 18, 36\}

---

### 4. Els Criteris de Divisibilitat

Els **criteris de divisibilitat** són regles ràpides que ens permeten saber si un nombre és divisible per un altre sense necessitat de fer la divisió:

| Criteri | Regla Pràctica | Exemples |
| :---: | :--- | :--- |
| **Divisible per $2$** | Acaba en **$0$ o xifra parell** ($2, 4, 6, 8$). | $12\mathbf{4}$, $58\mathbf{0}$, $1.39\mathbf{6}$ |
| **Divisible per $3$** | La **suma de les seues xifres** és múltiple de $3$. | $216 \rightarrow 2 + 1 + 6 = 9$ (és múltiple de 3 $\rightarrow$ Sí) |
| **Divisible per $5$** | Acaba en **$0$ o en $5$**. | $42\mathbf{5}$, $1.89\mathbf{0}$ |
| **Divisible per $9$** | La **suma de les seues xifres** és múltiple de $9$. | $729 \rightarrow 7 + 2 + 9 = 18$ (múltiple de 9 $\rightarrow$ Sí) |
| **Divisible per $10$** | Acaba en **$0$**. | $8\mathbf{0}$, $35\mathbf{0}$, $4.00\mathbf{0}$ |
| **Divisible per $11$** | La diferència entre la suma de les xifres de posició parell i la suma de les de posició imparell és **$0$ o múltiple d'11**. | $8.195 \rightarrow (8+9) - (1+5) = 17 - 6 = 11$ $\rightarrow$ Sí |

---

### ✏️ Exercicis Pràctics


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Múltiples i Divisors


<div class="interactive-quiz" data-quiz-id="ca1_u4_1_q1" data-answer="6" data-hint="Els divisors exactes són {1, 2, 3, 6, 9, 18}, en total 6 divisors.">
  <div class="quiz-question">✍️ Quants divisors positius diferents té el nombre 18 (1, 2, 3, 6, 9, 18)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-vf" data-quiz-id="ca1_u4_1_vf1" data-answer="V" data-hint="VERTADER: 42 = 7 × 6, per tant 42 és múltiple de 7.">
  <span class="vf-statement"><strong>El nombre 42 és múltiple exacte de 7 (perquè 7 × 6 = 42).</strong></span>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">V</button>
    <button type="button" class="btn-vf" data-opt="F">F</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

## 📌 4.2 Nombres Primers i Descomposició en Factors Primers {#sec4-2}

Els nombres primers són els "blocs de construcció" o els àtoms de l'aritmètica: qualsevol nombre sencer es pot construir multiplicant nombres primers.

---

### 1. Nombres Primers i Nombres Compostos

Segons la quantitat de divisors que té un nombre natural major que 1, podem classificar-lo en:

- **Nombre Primer:** És aquell que **només té dos divisors positius**: l'**1** i **ell mateix**.
$$\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \dots\}$$
  - El **$2$ és l'únic nombre primer parell** (tots els altres parells es poden dividir entre 2).
  - El nombre **$1$ no és ni primer ni compost**, ja que només té un únic divisor (ell mateix).
- **Nombre Compost:** És aquell que té **més de dos divisors** (es pot expressar com a producte d'altres nombres menors que ell).
$$\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, \dots\}

---

### 2. El Garbell d'Eratòstenes

El **garbell d'Eratòstenes** és un mètode clàssic ideat en l'antiga Grècia per trobar tots els nombres primers menors que un cert nombre (per exemple, fins a $50$):

1. Escrivim tots els nombres del $2$ al $50$.
2. Deixem el **$2$** (que és primer) i tatxem tots els seus múltiples ($4, 6, 8, 10, \dots$).
3. El següent nombre sense tatxar és el **$3$** (primer); tatxem tots els seus múltiples ($6, 9, 12, 15, \dots$).
4. El següent és el **$5$** (primer); tatxem tots els seus múltiples ($10, 15, 20, 25, \dots$).
5. El següent és el **$7$** (primer); tatxem els seus múltiples ($14, 21, 28, 35, 49$).
6. Tots els nombres que queden sense tatxar són els **nombres primers**:

<div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 14px; margin: 16px 0; text-align: center;">
  <strong style="color: var(--accent);">Nombres primers menors que 50 (exactament 15 primers):</strong><br>
  <p style="font-size: 1.15rem; font-family: monospace; font-weight: 700; margin: 8px 0 0; color: var(--text-color); letter-spacing: 2px;">
    2 &nbsp;·&nbsp; 3 &nbsp;·&nbsp; 5 &nbsp;·&nbsp; 7 &nbsp;·&nbsp; 11 &nbsp;·&nbsp; 13 &nbsp;·&nbsp; 17 &nbsp;·&nbsp; 19 &nbsp;·&nbsp; 23 &nbsp;·&nbsp; 29 &nbsp;·&nbsp; 31 &nbsp;·&nbsp; 37 &nbsp;·&nbsp; 41 &nbsp;·&nbsp; 43 &nbsp;·&nbsp; 47
  </p>
</div>

---

### 3. Descomposició en Factors Primers (Factorització)

> [!IMPORTANT]
> ### Teorema Fonamental de l'Aritmètica
> Qualsevol nombre compost es pot expressar de manera **única** com a producte de nombres primers elevats a determinades potències.

#### Com Descompondre en Factors Primers Pas a Pas:
Trassem una ratlla vertical. A l'esquerra escrivim el nombre i a la dreta anem provant successivament amb els nombres primers en ordre creixent ($2, 3, 5, 7, 11, \dots$):

##### Exemple 1: Descomposició de $60$
$$\begin{array}{r|l}
60 & 2 \\
30 & 2 \\
15 & 3 \\
5 & 5 \\
1 & 
\end{array}

El nombre $60$ factoritzat s'escriu:
$$60 = 2 \cdot 2 \cdot 3 \cdot 5 = \mathbf{2^2 \cdot 3 \cdot 5}

---

##### Exemple 2: Descomposició de $180$
$$\begin{array}{r|l}
180 & 2 \\
90 & 2 \\
45 & 3 \\
15 & 3 \\
5 & 5 \\
1 & 
\end{array}

180 = \mathbf{2^2 \cdot 3^2 \cdot 5}

---

##### Exemple 3: Descomposició de $504$
$$\begin{array}{r|l}
504 & 2 \\
252 & 2 \\
126 & 2 \\
63 & 3 \\
21 & 3 \\
7 & 7 \\
1 & 
\end{array}

504 = \mathbf{2^3 \cdot 3^2 \cdot 7}

---

### ✏️ Exercicis Pràctics


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Criteris de Divisibilitat Ràpids


<div class="interactive-vf" data-quiz-id="ca1_u4_2_vf1" data-answer="V" data-hint="VERTADER: Com que la suma de les xifres és 6 (múltiple de 3), 240 és divisible per 3.">
  <span class="vf-statement"><strong>a) El nombre 240 és divisible per 3 (comprova sumant les seues xifres: 2 + 4 + 0 = 6).</strong></span>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">V</button>
    <button type="button" class="btn-vf" data-opt="F">F</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-vf" data-quiz-id="ca1_u4_2_vf2" data-answer="F" data-hint="FALS: 315 acaba en 5 (xifra imparell), de manera que mai pot ser divisible per 2.">
  <span class="vf-statement"><strong>b) El nombre 315 és divisible per 2 (analitza la seua última xifra).</strong></span>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">V</button>
    <button type="button" class="btn-vf" data-opt="F">F</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-vf" data-quiz-id="ca1_u4_2_vf3" data-answer="V" data-hint="VERTADER: Com que acaba en 0, compleix simultàniament el criteri del 5 i del 10.">
  <span class="vf-statement"><strong>c) El nombre 750 és divisible alhora per 5 i per 10.</strong></span>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">V</button>
    <button type="button" class="btn-vf" data-opt="F">F</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

## 📌 4.3 Màxim Comú Divisor (MCD) i Mínim Comú Múltiple (MCM) {#sec4-3}

El càlcul del Màxim Comú Divisor i del Mínim Comú Múltiple és una eina clau per resoldre problemes de repartiment equitatiu i coincidències temporals.

---

### 1. El Màxim Comú Divisor (MCD)

El **Màxim Comú Divisor** de dos o més nombres és el **més gran dels divisors que tenen en comú**.

#### A) Mètode per Llistat de Divisors
Vegem els divisors de $12i18$:
- $\text{Div}(12) = \{1, 2, 3, 4, \mathbf{6}, 12\}$
- $\text{Div}(18) = \{1, 2, 3, \mathbf{6}, 9, 18\}$
- Divisors comuns: $\{1, 2, 3, \mathbf{6}\}$
- El més gran de tots és el **$6$**:
$$\text{MCD}(12, 18) = \mathbf{6}

#### B) Mètode Òptim per Descomposició en Factors Primers

> [!IMPORTANT]
> ### Regla per calcular l'MCD
> 1. Es descomponen els nombres en factors primers.
> 2. Es trien únicament els **factors comuns elevats al MENOR exponent**.
> 3. Es multipliquen aquests factors.

##### Exemple: Calcula $\text{MCD}(72, 108)$
1. Descomposem:
   - $72 = 2^3 \cdot 3^2$
   - $108 = 2^2 \cdot 3^3$
2. Factors comuns: El $2$ i el $3$.
3. Menors exponents: $2^2i3^2$.
$$\text{MCD}(72, 108) = 2^2 \cdot 3^2 = 4 \cdot 9 = \mathbf{36}

> [!NOTE]
> ### Nombres Primers Entre Si
> Dos nombres són **primers entre si** si el seu únic divisor comú és l'**$1$** ($\text{MCD} = 1$).  
> Per exemple, el $8$ ($2^3$) i el $15$ ($3 \cdot 5$) no comparteixen cap factor primer, per tant $\text{MCD}(8, 15) = 1$.

---

### 2. El Mínim Comú Múltiple (MCM)

El **Mínim Comú Múltiple** de dos o més nombres és el **més petit dels seus múltiples comuns positius** (sense comptar el zero).

#### A) Mètode per Llistat de Múltiples
Vegem els múltiples positius de $4i6$:
- $\text{Múlt}(4) = \{4, 8, \mathbf{12}, 16, 20, \mathbf{24}, 28, 32, \mathbf{36}, \dots\}$
- $\text{Múlt}(6) = \{6, \mathbf{12}, 18, \mathbf{24}, 30, \mathbf{36}, \dots\}$
- Múltiples comuns: $\{12, 24, 36, \dots\}$
- El més petit és el **$12$**:
$$\text{MCM}(4, 6) = \mathbf{12}

#### B) Mètode Òptim per Descomposició en Factors Primers

> [!IMPORTANT]
> ### Regla per calcular l'MCM
> 1. Es descomponen els nombres en factors primers.
> 2. Es trien els **factors comuns i no comuns elevats al MAJOR exponent**.
> 3. Es multipliquen tots aquests factors.

##### Exemple: Calcula $\text{MCM}(72, 108)$
1. Descomposem:
   - $72 = 2^3 \cdot 3^2$
   - $108 = 2^2 \cdot 3^3$
2. Factors comuns i no comuns: $2i3$.
3. Majors exponents: $2^3i3^3$.
$$\text{MCM}(72, 108) = 2^3 \cdot 3^3 = 8 \cdot 27 = \mathbf{216}

---

### 3. Taula Comparativa i Regla Mnemotècnica

| Concepte | Què significa? | Quins factors agafem? | Exponents |
| :--- | :--- | :--- | :---: |
| **MCD** (Màxim Comú Divisor) | El divisor més gran possible | **Només els COMUNS** | Al **MENOR** exponent |
| **MCM** (Mínim Comú Múltiple) | El múltiple més menut possible | **COMUNS i NO COMUNS** | Al **MAJOR** exponent |

#### Propietat Fonamental per a Dos Nombres
Per a qualsevol parella de nombres naturals a i b, el producte del seu MCD pel seu MCM és exactament igual al producte dels dos nombres:

\text{MCD}(a, b) \cdot \text{MCM}(a, b) = a \cdot b

Comprovació amb $72i108$:
$$36 \cdot 216 = 7.776 \qquad \text{i} \qquad 72 \cdot 108 = 7.776 \quad \checkmark

---

### ✏️ Exercicis Pràctics


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Nombres Primers i Descomposició Factorial


<div class="interactive-quiz" data-quiz-id="ca1_u4_3_q1" data-answer="2" data-hint="El 2 és el primer nombre primer: només té dos divisors, l'1 i ell mateix.">
  <div class="quiz-question">✍️ Quin és el nombre primer més xicotet de tots (i l'únic que és parell)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-vf" data-quiz-id="ca1_u4_3_vf1" data-answer="F" data-hint="FALS: 91 no és primer perquè 91 = 7 × 13 (té com a divisors l'1, el 7, el 13 i el 91).">
  <span class="vf-statement"><strong>El nombre 91 és un nombre primer.</strong></span>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">V</button>
    <button type="button" class="btn-vf" data-opt="F">F</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u4_3_q2" data-answer="4" data-hint="60 = 2 × 2 × 3 × 5 (4 factors en total).">
  <div class="quiz-question">✍️ Descompon factorialment el nombre 60 (2² · 3 · 5). Quants factors totals apareixen multiplicats (2 · 2 · 3 · 5)?</div>
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

## 📌 4.4 Problemes Reals d'MCD i MCM i Butlletí d'Exercicis {#sec4-4}

Saber si un problema de la vida real es resol mitjançant el **Màxim Comú Divisor (MCD)** o el **Mínim Comú Múltiple (MCM)** és la competència clau d'aquesta unitat.

---

### 🧭 Com Saber si Hem d'Utilitzar MCD o MCM?

| Si el problema et demana... | Has d'utilitzar: | Pistes i Paraules Clau |
| :--- | :---: | :--- |
| **Dividir, tallar, envasar o repartir** en trossos o grups iguals de la **majors mida possible**, sense que sobre res. | **MCD** | *"El màxim possible"*, *"la major longitud"*, *"repartir en paquets iguals"*, *"sense que sobre res"*. |
| **Coincidir en el temps o en l'espai**, esdeveniments que es repeteixen periòdicament i volem saber **quan tornaran a passar alhora**. | **MCM** | *"Quan tornaran a coincidir?"*, *"cada quants dies/hores?"*, *"quan tornen a eixir junts?"*, *"el menor temps"*. |

---

### 📌 Problemes Models Resolts Pas a Pas

#### Problema 1 (Model MCD): Tallar Cordes a la Màxima Longitud
> **Enunciat:** Maria té dues cordes que mesuren 12 metres i 18 metres respectivament. Vol tallar-les en trossos de la mateixa mida, de manera que els trossos siguen el més llargs possible i no sobre cap tros de corda.
> - a) Quant mesurarà cada tros de corda?
> - b) Quants trossos obtindrà en total?

**Resolució:**
1. Ens demanen **tallar/dividir** en trossos iguals de la **màxima mida possible** sense que sobre res $\rightarrow$ Calculem l'**MCD**:
   - $12 = 2^2 \cdot 3$
   - $18 = 2 \cdot 3^2$
   - $\text{MCD}(12, 18) = 2 \cdot 3 = \mathbf{6\text{ metres}}$
   *Resposta a:* Cada tros de corda mesurarà **6 metres**.
2. Nombre de trossos obtinguts:
   - De la corda de 12 m: $12 : 6 = 2\text{ trossos}$.
   - De la corda de 18 m: $18 : 6 = 3\text{ trossos}$.
   - Total de trossos: $2 + 3 = \mathbf{5\text{ trossos}}$.

---

#### Problema 2 (Model MCM): Coincidència Temporal
> **Enunciat:** Uxía i Raúl s'apunten a classes de ball en una acadèmia. Uxía assisteix a classe cada 4 dies i Raúl hi va cada 6 dies. Si hui han coincidit a la pista de ball:
> - D'ací a quants dies tornaran a coincidir per primera vegada?
> - Quantes classes haurà fet cadascun fins a eixe moment?

**Resolució:**
1. Ens demanen quan tornaran a **coincidir** dos processos que es repeteixen periòdicament $\rightarrow$ Calculem l'**MCM**:
   - $4 = 2^2$
   - $6 = 2 \cdot 3$
   - $\text{MCM}(4, 6) = 2^2 \cdot 3 = 4 \cdot 3 = \mathbf{12\text{ dies}}$
   *Resposta 1:* Tornaran a coincidir exactament d'ací a **12 dies**.
2. Classes d'Uxía i Raúl:
   - Uxía haurà fet: $12 : 4 = \mathbf{3\text{ classes}}$.
   - Raúl haurà fet: $12 : 6 = \mathbf{2\text{ classes}}$.

---

#### Problema 3 (Model MCD): Envasar Líquids en Garrafes
> **Enunciat:** Una cooperativa agrària té dos dipòsits d'oli: un amb 240 litres d'oli verge extra i un altre amb 360 litres d'oli d'oliva suau. Volen envasar tot l'oli en garrafes de la mateixa capacitat màxima possible, sense barrejar olis i sense que en sobre ni una gota.
> - Quina deu ser la capacitat màxima de cada garrafa?
> - Quantes garrafes faran falta en total?

**Resolució:**
1. Calculem l'**MCD** de $240i360$:
   - $240 = 2^4 \cdot 3 \cdot 5$
   - $360 = 2^3 \cdot 3^2 \cdot 5$
   - $\text{MCD}(240, 360) = 2^3 \cdot 3 \cdot 5 = 8 \cdot 3 \cdot 5 = \mathbf{120\text{ litres}}$
   *Resposta:* Cada garrafa tindrà una capacitat de **120 litres**.
2. Garrafes necessàries:
   - De verge extra: $240 : 120 = 2\text{ garrafes}$.
   - De suau: $360 : 120 = 3\text{ garrafes}$.
   - Total: $2 + 3 = \mathbf{5\text{ garrafes}}$.

---

#### Problema 4 (Model MCM): Parpelleig de Llums
> **Enunciat:** En un rètol lluminós hi ha tres circuits de neó: el primer s'encén cada 8 segons, el segon cada 12 segons i el tercer cada 18 segons. A les $20:00\text{ h}$ s'han encés tots tres simultàniament. Cada quants segons s'encendran alhora?

**Resolució:**
1. Calculem l'**MCM** de $8, 12i18$:
   - $8 = 2^3$
   - $12 = 2^2 \cdot 3$
   - $18 = 2 \cdot 3^2$
   - $\text{MCM}(8, 12, 18) = 2^3 \cdot 3^2 = 8 \cdot 9 = \mathbf{72\text{ segons}}$
   *Resposta:* S'encendran tots tres alhora cada **72 segons** (1 minut i 12 segons).

---

### 📝 Butlletí d'Exercicis Proposats


<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎮 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">⭐ 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>


#### 1. Càlcul Ràpid d'MCD i MCM


<div class="interactive-quiz" data-quiz-id="ca1_u4_4_q1a" data-answer="24" data-hint="48 = 2⁴ · 3; 72 = 2³ · 3². Factors comuns al menor exponent: 2³ · 3 = 24.">
  <div class="quiz-question">✍️ Calcula el Màxim Comú Divisor de 48 i 72: MCD(48, 72)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u4_4_q1b" data-answer="144" data-hint="MCM(48, 72): factors comuns i no comuns al major exponent: 2⁴ · 3² = 16 · 9 = 144.">
  <div class="quiz-question">✍️ Calcula el Mínim Comú Múltiple de 48 i 72: MCM(48, 72)</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

#### 2. Problemes Reals d'Aplicació


<div class="interactive-quiz" data-quiz-id="ca1_u4_4_q2a" data-answer="40" data-hint="Troba l'MCD de 360 i 280: MCD(360, 280) = 40 cm de costat màxim.">
  <div class="quiz-question">✍️ Problema de rajoles: Una terrassa fa 360 cm de llarg per 280 cm d'ample. Quant mesurarà el costat màxim en cm de cada rajola quadrada sense tallar-ne cap (MCD)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u4_4_q2b" data-answer="63" data-hint="Rajoles de llarg: 360 : 40 = 9; Rajoles d'ample: 280 : 40 = 7. Total rajoles = 9 × 7 = 63.">
  <div class="quiz-question">✍️ Quantes rajoles quadrades de 40 cm necessitarem en total per cobrir tota la terrassa (9 de llarg × 7 d'ample)?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>



<div class="interactive-quiz" data-quiz-id="ca1_u4_4_q3" data-answer="09:00|9:00|9|60" data-hint="MCM(15, 20) = 60 minuts. Si han sortit a les 08:00 h, tornaran a coincidir exactament a les 09:00 h (escriu '09:00' o '60').">
  <div class="quiz-question">✍️ Problema d'autobusos: La línia groga passa cada 15 min i la blava cada 20 min. Si coincideixen a les 08:00 h, a quina hora tornaran a coincidir per primera vegada?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="El teu resultat...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>


---

> [!TIP]
> **Següent pas:** Continua amb el [**4.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori**](ut0405.html) per resoldre els reptes tècnics aplicats a taller, optimització de canaletes de xarxa i sincronització de servidors.

<div style="text-align: right; margin: 1.5rem 0 2rem 0;">
  <a href="#index-unitat" class="page-nav-btn" style="display: inline-block; padding: 4px 14px; font-size: 0.85rem;">⬆️ Pujar a l'Índex</a>
</div>

---

