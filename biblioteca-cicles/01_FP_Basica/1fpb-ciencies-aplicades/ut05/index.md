---
layout: default
title: "UD5: Les Fraccions — Ciències Aplicades I"
course_root: ".."
badge: "1r FPB · Ciències Aplicades I · UD5"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4 Divisibilitat, MCM i MCD"
next_url: "../ut06/index.html"
next_label: "UD6 La Terra i l'Univers ➡️"
---

# UD5: Les Fraccions (Matemàtiques)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-eqv" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sum" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-prd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-app" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-5)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">ARITMÈTICA FRACCIONÀRIA: OPERACIONS I PROPORCIONS</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Equivalència, comú denominador mitjançant MCM, àlgebra de racionals i dissolucions de laboratori</text>

  <!-- Bloc 1: Concepte i Equivalència -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-eqv)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">⚖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Equivalència</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Productes Creuats</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• a/b = c/d ⇔ a·d = b·c</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Amplificació: · k / · k</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Simplificació: : MCD</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Fracció irreductible</text>
  </g>

  <!-- Bloc 2: Suma i Resta (MCM) -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sum)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">➕</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Suma i Resta</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Comú Denominador</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1r: MCM(denominadors)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2n: Nou num = (MCM:d)·n</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 3r: Sumar/restar numeradors</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Mantenir denominador comú</text>
  </g>

  <!-- Bloc 3: Producte i Quocient -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-prd)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">✖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Producte & Divisió</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Operacions Directes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Multiplicació: En línia</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">  (a/b) · (c/d) = (a·c)/(b·d)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Divisió: En creu (inversa)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">  (a/b) : (c/d) = (a·d)/(b·c)</text>
  </g>

  <!-- Bloc 4: Aplicacions Pràctiques -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-app)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🧪</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Contextos Reals</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Mescles i Particions</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Dissolució alcohol IPA (7/10)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Particions de discs SSD</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Fracció restant: 1 - ∑(parts)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Fracció d'una fracció</text>
  </g>
</svg>
</div>

---

## 📑 Índex d'Apartats de la Unitat

1. [**5.1 Concepte de Fracció i Fraccions Equivalents**](#51-concepte-de-fracció-i-fraccions-equivalents)
2. [**5.2 Suma i Resta de Fraccions (Mínim Comú Denominador)**](#52-suma-i-resta-de-fraccions-mínim-comú-denominador)
3. [**5.3 Multiplicació i Divisió de Fraccions**](#53-multiplicació-i-divisió-de-fraccions)
4. [**5.4 Operacions Combinades i Jerarquia amb Fraccions**](#54-operacions-combinades-i-jerarquia-amb-fraccions)
5. [**5.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori**](#55-quadern-dactivitats-pràctiques-i-reptes-de-laboratori)

---

## 📌 5.1 Concepte de Fracció i Fraccions Equivalents

Una **fracció** és una expressió matemàtica de la forma $\dfrac{a}{b}$ (amb $b \neq 0$), on:
- **Numerador ($a$):** Indica el nombre de parts iguals que es consideren o s'agafen.
- **Denominador ($b$):** Indica el nombre total de parts iguals en què s'ha dividit la unitat sencera.

### Significats Fonamentals de la Fracció:
1. **Com a part de la unitat:** Tallar un disc de dades en $4$ particions i ocupar-ne $3$ representa $\dfrac{3}{4}$ del volum.
2. **Com a quocient indicat:** $\dfrac{15}{3} = 5$ o $\dfrac{3}{4} = 0{,}75$.
3. **Com a operador sobre una quantitat ($N$):** Per calcular $\dfrac{a}{b}$ d'una magnitud $N$, es divideix la quantitat pel denominador i es multiplica pel numerador:
   $$\frac{a}{b} \text{ de } N = (N : b) \cdot a = \frac{a \cdot N}{b}$$
   *Exemple:* $\dfrac{3}{5}$ d'un pressupost de $2.500\text{ €}$ equival a $(2.500 : 5) \cdot 3 = 500 \cdot 3 = 1.500\text{ €}$.

### Fraccions Equivalents i Regla dels Productes Creuats
Dues fraccions $\dfrac{a}{b}$ i $\dfrac{c}{d}$ són **equivalents** si representen la mateixa part de la unitat. Això es verifica quan els seus productes creuats són exactament iguals:

$$\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$$

- **Amplificació:** Es multipliquen el numerador i el denominador pel mateix nombre natural no nul:
  $$\frac{2}{3} = \frac{2 \cdot 4}{3 \cdot 4} = \frac{8}{12}$$
- **Simplificació:** Es divideixen numerador i denominador pel mateix divisor comú.
- **Fracció Irreductible:** Quan no es pot simplificar més perquè el numerador i el denominador són primers entre si ($\text{MCD}(a, b) = 1$). S'obté dividint ambdós membres directament pel seu $\text{MCD}$:
  $$\frac{84}{126} \quad \longrightarrow \quad \text{MCD}(84, 126) = 42 \quad \longrightarrow \quad \frac{84 : 42}{126 : 42} = \frac{2}{3}$$

---

## 📌 5.2 Suma i Resta de Fraccions (Mínim Comú Denominador)

### Amb el mateix denominador:
Se sumen o resten els numeradors i es manté exactament el mateix denominador comú:
$$\frac{a}{c} + \frac{b}{c} = \frac{a + b}{c} \qquad \frac{a}{c} - \frac{b}{c} = \frac{a - b}{c}$$

### Amb denominadors diferents:
Cal reduir prèviament les fraccions a un **mínim comú denominador** seguint aquest protocol:
1. Calculem l'$\text{MCM}$ de tots els denominadors. Aquest valor serà el nou denominador comú.
2. Per a cada fracció, dividim l'$\text{MCM}$ entre el seu denominador antic i multipliquem el resultat pel numerador antic per obtenir el nou numerador:
   $$\text{Nou Numerador} = (\text{MCM} : d_i) \cdot n_i$$
3. Realitzem la suma o resta dels nous numeradors sobre el comú denominador i simplifiquem fins a la fracció irreductible.

**Exemple pas a pas:**
$$\frac{5}{6} + \frac{3}{4} - \frac{7}{10}$$
- $\text{MCM}(6, 4, 10) = 60$.
- Terme 1: $(60 : 6) \cdot 5 = 10 \cdot 5 = 50 \longrightarrow \dfrac{50}{60}$
- Terme 2: $(60 : 4) \cdot 3 = 15 \cdot 3 = 45 \longrightarrow \dfrac{45}{60}$
- Terme 3: $(60 : 10) \cdot 7 = 6 \cdot 7 = 42 \longrightarrow \dfrac{42}{60}$
- Resultat: $\dfrac{50 + 45 - 42}{60} = \dfrac{53}{60}$ (ja és irreductible).

---

## 📌 5.3 Multiplicació i Divisió de Fraccions

| Operació | Algorisme de Càlcul | Fórmula General | Exemple Resolt |
| :--- | :--- | :---: | :--- |
| **Multiplicació (Producte)** | Es multipliquen els numeradors en línia i els denominadors en línia. | $\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{a \cdot c}{b \cdot d}$ | $\dfrac{4}{7} \cdot \dfrac{5}{6} = \dfrac{20}{42} = \dfrac{10}{21}$ |
| **Divisió (Quocient)** | Es multipliquen en creu o es multiplica per la fracció inversa. | $\dfrac{a}{b} : \dfrac{c}{d} = \dfrac{a \cdot d}{b \cdot c}$ | $\dfrac{3}{8} : \dfrac{5}{4} = \dfrac{3 \cdot 4}{8 \cdot 5} = \dfrac{12}{40} = \dfrac{3}{10}$ |
| **Fracció Inversa** | S'intercanvien numerador i denominador ($\frac{a}{b} \leftrightarrow \frac{b}{a}$). | $\dfrac{a}{b} \cdot \left(\dfrac{a}{b}\right)^{-1} = 1$ | Inversa de $\dfrac{2}{5}$ és $\dfrac{5}{2} \rightarrow \dfrac{2}{5} \cdot \dfrac{5}{2} = 1$ |

---

## 📌 5.4 Operacions Combinades i Jerarquia amb Fraccions

L'ordre estricte d'operacions quan apareixen sumes, restes, productes i parèntesis és:

```
1r [ ( ) ] Parèntesis i claudàtors (simplificant les expressions interiors)
2n ·  :    Multiplicacions i divisions (d'esquerra a dreta)
3r +  -    Sumes i restes (reduint prèviament a comú denominador)
4t         Simplificació final fins a la fracció irreductible
```

**Exemple de càlcul complet:**
$$E = \frac{2}{3} + \frac{5}{2} \cdot \left(\frac{3}{4} - \frac{1}{6}\right)$$
1. Parèntesi: $\text{MCM}(4, 6) = 12 \longrightarrow \dfrac{3 \cdot 3}{12} - \dfrac{1 \cdot 2}{12} = \dfrac{9 - 2}{12} = \dfrac{7}{12}$.
2. Multiplicació: $\dfrac{5}{2} \cdot \dfrac{7}{12} = \dfrac{35}{24}$.
3. Suma final: $\dfrac{2}{3} + \dfrac{35}{24} \longrightarrow \text{MCM}(3, 24) = 24 \longrightarrow \dfrac{16}{24} + \dfrac{35}{24} = \dfrac{51}{24}$.
4. Simplificació ($\text{MCD} = 3$): $\dfrac{51 : 3}{24 : 3} = \dfrac{17}{8}$.

---

## 📌 5.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori

En entorns científics i tècnics, les fraccions s'utilitzen habitualment en:
1. **Fracció de la part restant:**
   Si es consumeix una fracció $\dfrac{a}{b}$ d'un total, la part restant no consumida és la unitat menys eixa fracció:
   $$\text{Fracció Restant} = 1 - \frac{a}{b} = \frac{b - a}{b}$$
2. **Fracció d'una fracció (Producte):**
   Quan es pren "una fracció del que queda", s'aplica una **multiplicació**:
   $$\text{Segona despesa} = \frac{c}{d} \text{ de la part restant} = \frac{c}{d} \cdot \left(1 - \frac{a}{b}\right)$$
3. **Formulació de dissolucions químiques:**
   En mescles líquides com l'alcohol isopropílic (IPA) per a manteniment de plaques base, les concentracions es defineixen com a proporcions de volum ($V_{\text{solut}} / V_{\text{total}}$).

---

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Fraccions equivalents, productes creuats i fracció irreductible
1. Comprova si cadascuna de les següents parelles de fraccions són equivalents utilitzant la regla dels productes creuats:
   - Parella A: $\dfrac{18}{24} \quad \text{i} \quad \dfrac{15}{20}$
   - Parella B: $\dfrac{14}{35} \quad \text{i} \quad \dfrac{16}{42}$
   - Parella C: $\dfrac{45}{60} \quad \text{i} \quad \dfrac{39}{52}$
2. Troba el valor de la incògnita $x$ en cadascuna de les següents proporcions perquè es mantinga l'equivalència:
   $$\frac{x}{12} = \frac{15}{20} \qquad \frac{9}{x} = \frac{27}{45} \qquad \frac{8}{14} = \frac{20}{x}$$
3. Simplifica cadascuna de les següents fraccions fins a obtenir la seua fracció irreductible calculant l'$\text{MCD}$ de numerador i denominador:
   $$F_1 = \frac{72}{108} \qquad F_2 = \frac{140}{210} \qquad F_3 = \frac{198}{264}$$

#### Exercici 2: Suma i resta de fraccions amb mínim comú denominador
Resol les següents operacions reduint primerament a comú denominador mitjançant l'$\text{MCM}$ i simplifica el resultat final:
1. **Suma simple:**
   $$S_1 = \frac{3}{8} + \frac{5}{12}$$
2. **Resta combinada:**
   $$S_2 = \frac{7}{10} - \frac{4}{15} + \frac{1}{6}$$
3. **Suma amb nombres enters:**
   $$S_3 = 2 - \frac{3}{5} + \frac{7}{10}$$

#### Exercici 3: Operacions combinades i jerarquia amb fraccions
Resol mostrant detalladament tots els passos intermedis segons la jerarquia d'operacions:
1. **Expressió A:**
   $$A = \frac{3}{4} \cdot \left(\frac{5}{6} - \frac{1}{3}\right) + \frac{7}{8} : \frac{14}{4}$$
2. **Expressió B:**
   $$B = \left(2 - \frac{1}{4}\right) : \left(\frac{3}{5} + \frac{1}{2}\right) - \frac{4}{11}$$
3. **Expressió C:**
   $$C = \frac{5}{6} - \left[\frac{2}{3} \cdot \left(\frac{9}{4} - \frac{3}{2}\right) + \frac{1}{8}\right]$$

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Formulació de dissolució desengreixant d'alcohol isopropílic (IPA)
- **Objectiu:** Utilitzar la fracció com a operador per calcular quantitats exactes de líquids en un laboratori tècnic.
- **Situació de taller:** Per netejar restes de pasta tèrmica ressecada i flux de soldadura en plaques base, un tècnic ha de preparar un flascó aplicador d'exactament $500\text{ ml}$ d'una mescla de neteja d'alta puresa:
  - $\dfrac{7}{10}$ del volum total han de ser d'alcohol isopropílic pur al 99%.
  - La resta del volum ha de ser d'aigua destil·lada desionitzada.
- **Comanda tècnica:**
  1. Quina fracció del volum total correspon a l'aigua destil·lada?
  2. Calcula els mil·lilitres exactes d'alcohol isopropílic que cal mesurar amb la proveta:
     $$V_{\text{IPA}} = \frac{7}{10} \text{ de } 500\text{ ml}$$
  3. Quants mil·lilitres d'aigua destil·lada cal afegir per completar el flascó?
  4. Si per a una neteja intensiva s'utilitzen $\dfrac{2}{5}$ del contingut del flascó preparat, quants mil·lilitres de dissolució s'han gastat i quants en queden disponibles?

#### Repte 2: Particionament lògic d'un disc sòlid NVMe i espai lliure
- **Objectiu:** Modelar el repartiment proporcional d'un recurs físic i calcular la fracció i capacitat sobrant.
- **Situació:** En un equip de taller d'FP Bàsica s'instal·la un disc SSD NVMe amb una capacitat neta útil de $960\text{ GB}$. Es planifica la següent distribució de particions:
  - Partició de Sistema Operatiu (Windows/Linux): $\dfrac{1}{4}$ del disc.
  - Partició de Màquines Virtuals i Imatges ISO: $\dfrac{3}{8}$ del disc.
  - Partició de Còpies de Seguretat de Taller: $\dfrac{1}{5}$ del disc.
  - La capacitat restant es deixa com a espai no assignat per a futures ampliacions.
- **Procediment de càlcul:**
  1. Calcula la fracció total de disc que ocupen les tres primeres particions sumant:
     $$\text{Fracció Ocupada} = \frac{1}{4} + \frac{3}{8} + \frac{1}{5}$$
  2. Quina fracció exacta del disc roman com a espai lliure sense assignar?
  3. Converteix cadascuna de les fraccions a gigabytes reals ($\text{GB}$) aplicant la fracció sobre el total de $960\text{ GB}$:
     - Espai del Sistema Operatiu ($\text{GB}$).
     - Espai de Màquines Virtuals ($\text{GB}$).
     - Espai de Còpies de Seguretat ($\text{GB}$).
     - Espai Lliure no assignat ($\text{GB}$).
  4. Suma els quatre valors obtinguts en GB per comprovar que el total suma exactament $960\text{ GB}$.

#### Repte 3: Control d'inventari i consum progressiu de connectors RJ45
- **Objectiu:** Resoldre problemes de consum encadenat ("fracció del que queda") en la gestió de material de xarxa.
- **Situació:** A principis de curs, el taller disposa d'un pot ple amb $600\text{ connectors RJ45}$ mascle categoria 6:
  - Durant el primer trimestre, les pràctiques de muntatge de cables consumeixen $\dfrac{1}{3}$ del total de connectors del pot.
  - Durant el segon trimestre, s'utilitzen $\dfrac{2}{5}$ dels connectors **que quedaven** després del primer trimestre.
  - La resta es reserva per al projecte integrador de final de curs.
- **Càlculs requerits:**
  1. Quants connectors es gasten en el primer trimestre? Quants en queden al pot?
  2. Quants connectors es consumeixen durant el segon trimestre?
  3. Quina fracció **respecte del total inicial** representa el consum del segon trimestre? ($\frac{2}{5} \cdot \text{part restant}$).
  4. Quants connectors queden disponibles exactament per al projecte de final de curs? Quina fracció del total inicial representen?

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He verificat l'equivalència entre dues fraccions utilitzant la regla dels productes creuats ($a \cdot d = b \cdot c$).
- [ ] He simplificat fraccions dividint pel seu màxim comú divisor fins a trobar la fracció irreductible.
- [ ] He calculat la suma i resta de fraccions reduint correctament a mínim comú denominador mitjançant l'MCM.
- [ ] He multiplicat fraccions en línia i dividit mitjançant el producte creuat o fracció inversa.
- [ ] He resolt operacions combinades respectant l'ordre jeràrquic (parèntesis, multiplicacions/divisions, sumes/restes).
- [ ] He calculat quantitats reals de volum i emmagatzematge aplicant la fracció com a operador sobre una xifra.
- [ ] He resolt problemes encadenats de càlcul de la fracció restant ($1 - \frac{a}{b}$).

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Concepte d'equivalència i simplificació** | Identifica fraccions equivalents a l'acte, aïlla incògnites en proporcions i redueix a fracció irreductible via MCD sense errades. | Comprova l'equivalència amb productes creuats i simplifica dividint entre factors comuns. | Comprova l'equivalència bàsica però li costa simplificar fraccions de xifres altes. | No comprèn el concepte de fracció equivalent o suma numeradors i denominadors per "simplificar". |
| **Suma i resta amb comú denominador** | Calcula l'MCM amb agilitat, ajusta els nous numeradors amb precisió i simplifica el resultat final de manera sistemàtica. | Realitza la reducció a comú denominador correctament amb xicotets errors en calcular els nous numeradors. | Recorda que cal comú denominador però utilitza el producte directe dels denominadors sense calcular l'MCM. | Suma directament numeradors i denominadors ($\frac{1}{2} + \frac{1}{3} = \frac{2}{5}$). |
| **Multiplicació i divisió de racionals** | Multiplica en línia i divideix en creu amb soltesa, simplificant factors comuns abans d'operar per evitar xifres gegants. | Aplica correctament les regles de multiplicació en línia i divisió creuada simplificant al final. | Confon la multiplicació en línia amb la divisió creuada en situacions d'examen. | Multiplica en creu per a la multiplicació i en línia per a la divisió. |
| **Operacions combinades i jerarquia** | Resol expressions amb claudàtors, multiplicacions i sumes respectant estrictament la jerarquia sense saltar-se passos. | Resol operacions combinades amb bona jerarquia i errades menors de càlcul en l'ajust de denominadors. | Resol primer el parèntesi però s'equivoca en prioritzar la multiplicació sobre la suma posterior. | No respecta la jerarquia d'operacions calculant d'esquerra a dreta. |
| **Resolució de problemes aplicats (taller/química)** | Modela problemes de dissolucions, particions de disc i despeses del que queda amb plantejament matemàtic exemplar. | Planteja i resol problemes de fracció d'una quantitat i de volum de forma clara. | Resol problemes directes de fracció d'un total però s'encalla en "fracció del que queda". | No sap traduir els enunciats a operacions amb fraccions ni interpretar el resultat en context real. |
