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

## 📑 Índex d'Apartats de la Unitat

1. [**1.1 El Sistema de Numeració Decimal i Valor Posicional**](#11-el-sistema-de-numeració-decimal-i-valor-posicional)
2. [**1.2 Els Nombres Naturals i les Operacions Bàsiques**](#12-els-nombres-naturals-i-les-operacions-bàsiques)
3. [**1.3 Propietats de les Operacions i Jerarquia**](#13-propietats-de-les-operacions-i-jerarquia)
4. [**1.4 Potències de Nombres Naturals i Propietats**](#14-potències-de-nombres-naturals-i-propietats)
5. [**1.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori**](#15-quadern-dactivitats-pràctiques-i-reptes-de-laboratori)

---

## 📌 1.1 El Sistema de Numeració Decimal i Valor Posicional

El sistema de numeració que utilitzem cada dia és el **sistema decimal**. Els éssers humans vam començar a comptar utilitzant els dits de les mans, ideant un sistema basat en **10 símbols bàsics**:

$$\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$$

### Ordres d'Unitats: De la Unitat al Millar
En el sistema decimal, agrupem les quantitats de **10 en 10**:

| Ordre d'Unitat | Abreviatura | Equivalència en Unitats |
| :--- | :---: | :---: |
| **Unitat** | **U** | $1 \text{ U}$ |
| **Desena** | **D** | $1 \text{ D} = 10 \text{ U}$ |
| **Centena** | **C** | $1 \text{ C} = 10 \text{ D} = 100 \text{ U}$ |
| **Unitat de Millar** | **UM** | $1 \text{ UM} = 10 \text{ C} = 1.000 \text{ U}$ |
| **Desena de Millar** | **DM** | $1 \text{ DM} = 10 \text{ UM} = 10.000 \text{ U}$ |
| **Centena de Millar**| **CM** | $1 \text{ CM} = 10 \text{ DM} = 100.000 \text{ U}$ |

### El Valor Posicional de les Xifres
El sistema decimal és un **sistema posicional**: el valor real d'una xifra depèn directament de la **posició** que ocupa dins del nombre.

Vegem per exemple el nombre **$523$**:
- Centenes: $5 \times 100 = 500$
- Desenes: $2 \times 10 = 20$
- Unitats: $3 \times 1 = 3$
$$523 = 500 + 20 + 3 = 5\text{C} + 2\text{D} + 3\text{U}$$

### Descomposició Polinòmica amb Potències de Base 10
Expressar un nombre com a suma de productes de les seues xifres per potències de $10$:
$$523 = (5 \times 10^2) + (2 \times 10^1) + 3$$
$$4.708 = (4 \times 10^3) + (7 \times 10^2) + 8$$

---

## 📌 1.2 Els Nombres Naturals i les Operacions Bàsiques

Els **nombres naturals** ($\mathbb{N}$) són aquells que serveixen per a comptar elements sencers:

$$\mathbb{N} = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, \dots\}$$

- Estan ordenats sobre la recta numèrica: a l'esquerra els menors, a la dreta els majors ($<$ i $>$).

### 1) Suma (Addició)
Col·loquem els sumands alineant les unitats. Si en sumar una columna obtenim $10$ o més, afegim la desena a la columna següent (**portada**):

```text
    ¹
    4 6
  + 2 7
  ─────
    7 3
```

### 2) Resta (Subtracció)
Col·loquem el minuend a dalt i el subtrahend a baix. Si una xifra del minuend és menor que la del subtrahend, **demanem prestat** a la columna següent:

```text
    ²  ¹²
    3   2   (12 - 7 = 5)
  - 1   7   (2 - 1 = 1)
  ───────
    1   5
```

### 3) Multiplicació (Producte)
La multiplicació és una **suma repetida**:
$$6 \text{ sobres} \times 5 \text{ cromos} = 30 \text{ cromos}$$

### 4) Divisió i la Prova
Repartiment d'un dividend ($D$) en parts iguals entre un divisor ($d$), donant un quocient ($c$) i un residu ($r$):

$$\text{Dividend} = (\text{Divisor} \times \text{Quocient}) + \text{Residu} \quad \longrightarrow \quad D = d \times c + r$$

---

## 📌 1.3 Propietats de les Operacions i Jerarquia

### Propietats de la Multiplicació
1. **Commutativa:** $a \cdot b = b \cdot a \quad (3 \cdot 10 = 10 \cdot 3 = 30)$
2. **Associativa:** $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
3. **Distributiva:** $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$
   - $2 \cdot (3 + 5) = 2 \cdot 8 = 16$
   - $(2 \cdot 3) + (2 \cdot 5) = 6 + 10 = 16$

> [!WARNING]
> La divisió **NO** és commutativa ni associativa ($20 : 5 \neq 5 : 20$).

### La Jerarquia Oficial d'Operacions
Ordre obligatori de càlcul:
1. **Parèntesis i claudàtors** $( \ )$ $[ \ ]$ (de dins cap a fora).
2. **Potències i arrels** $a^n, \sqrt{\quad}$.
3. **Multiplicacions i divisions** $\cdot , :$ (d'esquerra a dreta).
4. **Sumes i restes** $+ , -$ (d'esquerra a dreta).

**Exemple:**
$$10 \cdot [(6 - 5) + (9 - 4)] = 10 \cdot [1 + 5] = 10 \cdot 6 = 60$$

---

## 📌 1.4 Potències de Nombres Naturals i Propietats

Una potència és un **producte de factors iguals**:
$$a^n = \underbrace{a \cdot a \cdot a \dots a}_{n \text{ vegades}}$$
- **Base ($a$):** nombre que es multiplica.
- **Exponent ($n$):** nombre de vegades que es multiplica la base.

### Quadre de Propietats Fonamentals:

| Propietat | Regla | Exemple |
| :--- | :---: | :---: |
| **Producte mateixa base** | $a^n \cdot a^m = a^{n + m}$ | $4^2 \cdot 4^3 = 4^{2+3} = 4^5 = 1.024$ |
| **Quocient mateixa base** | $a^n : a^m = \dfrac{a^n}{a^m} = a^{n - m}$ | $3^5 : 3^2 = 3^3 = 27$ |
| **Potència d'un producte** | $(a \cdot b)^n = a^n \cdot b^n$ | $(3 \cdot 4)^2 = 3^2 \cdot 4^2 = 144$ |
| **Potència d'un quocient** | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | $(8 : 4)^2 = 8^2 : 4^2 = 4$ |
| **Potència d'una potència** | $(a^n)^m = a^{n \cdot m}$ | $(2^2)^3 = 2^6 = 64$ |
| **Exponent 0** | $a^0 = 1 \quad (a \neq 0)$ | $15^0 = 1$ |
| **Exponent 1** | $a^1 = a$ | $9^1 = 9$ |

---

## 📌 1.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Valor posicional i descomposició polinòmica en entorns tecnològics
En el magatzem central de manteniment informàtic es rep una gran comanda de cargols M3 i femelles de subjecció per a plaques base. El comptador electrònic marca un total de $14.856\text{ peces}$.
1. Desglossa el nombre $14.856$ segons el seu valor posicional decimal, indicant desenes de millar (DM), unitats de millar (UM), centenes (C), desenes (D) i unitats (U):
   $$14.856 = \underline{\hspace{1cm}}\text{DM} + \underline{\hspace{1cm}}\text{UM} + \underline{\hspace{1cm}}\text{C} + \underline{\hspace{1cm}}\text{D} + \underline{\hspace{1cm}}\text{U}$$
2. Escriu la descomposició polinòmica completa utilitzant potències de base 10:
   $$14.856 = (1 \cdot 10^4) + (4 \cdot 10^3) + (8 \cdot 10^2) + (5 \cdot 10^1) + (6 \cdot 10^0)$$
3. Si un operari canvia per error la xifra de les centenes ($8$) per la xifra de les unitats ($6$), quin nou nombre s'obté? Quina és la diferència econòmica si cada cargol té un cost de $0{,}05\text{ €}$?

#### Exercici 2: Jerarquia d'operacions combinades amb signes d'agrupació
Resol cadascuna de les següents operacions combinades mostrant tots els passos intermedis segons la jerarquia oficial d'operacions (1r parèntesis/claudàtors, 2n potències, 3r multiplicacions/divisions, 4t sumes/restes):
1. **Expressió A:**
   $$A = 48 - 6 \cdot [14 - (3^2 - 1)] + 18 : 3$$
2. **Expressió B:**
   $$B = 5 \cdot (4^2 - 6) : 2 + [35 - (8 \cdot 3 - 4)]$$
3. **Expressió C:**
   $$C = 120 : [2 \cdot (18 - 3) - 20] + 7 \cdot 3^2$$

#### Exercici 3: Lleis dels exponents i simplificació a potència única
Aplica les propietats de les potències de nombres naturals per reduir cadascuna de les expressions a una sola potència de base irreductible (no calcules el valor final enorme, només simplifica la base i l'exponent):
1. **Producte i divisió de la mateixa base:**
   $$P_1 = \frac{3^4 \cdot 3^7 \cdot 3^2}{3^5 \cdot 3^3}$$
2. **Potència d'una potència i bases compostes:**
   $$P_2 = \frac{(2^3)^4 \cdot 2^5}{(2^2)^6}$$
3. **Producte de bases diferents amb mateix exponent:**
   $$P_3 = \frac{(2^3 \cdot 5^3)^2}{10^4}$$
4. Determina el valor exacte de: $18^0 + 7^1 - (12^3 : 12^3)$.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Gestió logística i inventari d'un magatzem d'equips
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

#### Repte 2: Repartiment proporcional de material i prova de la divisió
- **Objectiu:** Aplicar la divisió entera i la prova $D = d \cdot c + r$ per a l'assignació de recursos de pràctiques.
- **Situació:** En el taller de xarxes s'obre una bobina que conté exactament $345\text{ metres}$ de cable de parell trenat UTP per repartir a parts iguals entre els $16\text{ estudiants}$ del grup de taller:
  1. Realitza la divisió pas a pas sense calculadora per determinar quants metres exactes sencers corresponen a cada lloc de treball.
  2. Quants metres de cable romanen a la bobina com a residu sobrant?
  3. Aplica formalment la **prova de la divisió** verificant que:
     $$345 = (16 \cdot c) + r \quad \text{i comprova que} \quad r < 16$$
  4. Si cada estudiant ha de construir latiguillos de $2\text{ metres}$, quants cables complets podrà fabricar cadascú amb els seus metres assignats?

#### Repte 3: Auditoria energètica i càlcul de consum en kWh
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

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He descompost correctament nombres decimals en unitats i potències de base 10.
- [ ] He respectat la jerarquia oficial d'operacions resolent primer claudàtors, després potències, multiplicacions i sumes.
- [ ] He aplicat les propietats dels exponents simplificant bases iguals sense calcular potències gegants a mà.
- [ ] He aplicat la prova de la divisió comprovant que el residu és estrictament menor que el divisor.
- [ ] He utilitzat la propietat associativa i distributiva en problemes de logística i magatzem.
- [ ] He calculat consums elèctrics reals de taller convertint correctament entre Watts i kWh.

#### Rúbrica d'avaluació d'aprenentatge

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Sistema decimal i valor posicional** | Descompon nombres grans en base 10 i potències polinòmiques amb facilitat i comprensió posicional plena. | Realitza la descomposició en ordres d'unitats correctament amb xicotets dubtes en potències de 10. | Identifica unitats, desenes i centenes bàsiques però té dificultats amb la notació polinòmica. | Confon els ordres d'unitat i no comprèn el valor posicional de les xifres. |
| **Jerarquia d'operacions combinades** | Resol expressions complexes amb claudàtors i potències seguint estrictament l'ordre sense cap error. | Resol operacions combinades respectant la jerarquia amb alguna errada puntual de càlcul aritmètic. | Recorda que la multiplicació va abans que la suma però s'equivoca amb claudàtors niats. | Resol les operacions d'esquerra a dreta sense respectar la jerarquia obligatòria. |
| **Lleis de potències i exponents** | Simplifica fraccions de potències aplicant les lleis d'exponents ($a^n \cdot a^m$, $(a^n)^m$, $a^0=1$) amb destresa. | Aplica la suma i resta d'exponents en bases iguals de forma correcta. | Resol potències bàsiques però s'equivoca en simplificar expressions algebraiques. | Multiplica la base per l'exponent ($2^3 = 6$) en lloc de multiplicar la base per si mateixa. |
| **Divisió entera i repartiments ($D=d\cdot c+r$)** | Resol divisions llargues sense calculadora, obté quocient i residu i verifica sempre la prova formal. | Realitza la divisió i calcula el residu de forma correcta comprovant la prova. | Fa la divisió bàsica però té dificultats per interpretar el residu en un problema real. | Incapaç de dividir nombres de dues xifres o no sap verificar la prova de la divisió. |
| **Aplicació pràctica a consum i magatzem** | Modela problemes reals de taller (logística, magatzem, kWh) traduint el text a expressions matemàtiques clares. | Resol els problemes pràctics amb bona interpretació de les dades del taller. | Resol els problemes amb suport en el plantejament o conversió d'unitats. | No sap plantejar els problemes pràctics ni interpretar enunciats tècnics. |
