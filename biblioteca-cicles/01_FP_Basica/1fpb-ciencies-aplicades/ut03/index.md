---
layout: default
title: "UD3: Els Nombres Enters — Ciències Aplicades I"
course_root: ".."
badge: "1r FPB · Ciències Aplicades I · UD3"
prev_url: "../ut02/index.html"
prev_label: "⬅️ UD2 Matèria i Nutrició"
next_url: "../ut04/index.html"
next_label: "UD4 Divisibilitat, MCM i MCD ➡️"
---

# UD3: Els Nombres Enters (Matemàtiques)

Benvingut/da a la **Unitat Didàctica 3** del bloc de Matemàtiques de Ciències Aplicades I. En aquesta unitat aprofundirem en el conjunt dels **nombres enters ($\mathbb{Z}$)**, comprendrem la necessitat dels nombres negatius en contextos de la vida diària, dominarem la suma, resta, multiplicació i divisió amb la regla dels signes, aprendrem a treballar amb potències i arrels quadrades, i resoldrem problemes reals d'aplicació.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-ent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sum" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-rgl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-pex" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">ELS NOMBRES ENTERS ℤ: RECTA NUMÈRICA, REGLA DELS SIGNES I JERARQUIA</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Valors negatius, valor absolut, xoc de signes, potències de base negativa i arrels</text>

  <!-- Bloc 1: Conjunt Z i Recta -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ent)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📉</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">El Conjunt ℤ</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Recta i Ordre</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ℤ = {...,-2,-1,0,+1,+2...}</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Valor absolut: |-7| = 7</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Oposat: Op(-5) = +5</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Comparació: -2 > -8</text>
  </g>

  <!-- Bloc 2: Suma i Resta -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sum)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⚖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Suma i Resta</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Xoc de Signes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Mateix signe: Es sumen</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Signe diferent: Es resten</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• -(-a) = +a  |  +(-a) = -a</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Restar = Sumar l'oposat</text>
  </g>

  <!-- Bloc 3: Regla dels Signes -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-rgl)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">✖️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Regla dels Signes</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Producte i Quocient</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• (+) · (+) = +  |  (-) · (-) = +</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• (+) · (-) = -  |  (-) · (+) = -</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Jerarquia: [ ( ) ]</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Potències ➔ · : ➔ + -</text>
  </g>

  <!-- Bloc 4: Potències i Arrels -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-pex)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🔢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Potències & Arrels</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Exponents Negatius</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• (-a)parell = Positiu (+)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• (-a)imparell = Negatiu (-)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• (-2)⁴ = +16 vs -2⁴ = -16</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• √(-9) NO existeix en ℤ</text>
  </g>
</svg>
</div>

---

## 📑 Índex d'Apartats de la Unitat

1. [**3.1 El Conjunt dels Nombres Enters i Contextos Reals**](#31-el-conjunt-dels-nombres-enters-i-contextos-reals)
2. [**3.2 Suma i Resta de Nombres Enters**](#32-suma-i-resta-de-nombres-enters)
3. [**3.3 Multiplicació, Divisió i Jerarquia d'Operacions**](#33-multiplicació-divisió-i-jerarquia-doperacions)
4. [**3.4 Potències de Nombres Enters i Arrels Quadrades**](#34-potències-de-nombres-enters-i-arrels-quadrades)
5. [**3.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori**](#35-quadern-dactivitats-pràctiques-i-reptes-de-laboratori)

---

## 📌 3.1 El Conjunt dels Nombres Enters i Contextos Reals

Els nombres negatius s'escriuen amb un signe menys ($-$) davant i representen valors que estan per davall d'un punt zero de referència (temperatures sota zero, deutes, plantes subterrànies, altituds sota el nivell del mar i anys abans de Crist).

El conjunt dels **nombres enters** es representa per **$\mathbb{Z}$**:
$$\mathbb{Z} = \{\dots, -3, -2, -1, 0, +1, +2, +3, \dots\}$$

- **Ordre a la recta numèrica:** Un nombre enter és major que un altre si està més a la dreta a la recta. Qualsevol nombre positiu és major que zero i que qualsevol negatiu. Entre dos negatius, és major el més proper al zero ($-2 > -8$).
- **Valor absolut ($|a|$):** És la distància que separa el nombre del zero. Sempre és positiu o zero: $|-7| = 7$, $|+7| = 7$.
- **Nombre oposat ($\text{Op}(a)$):** Té el mateix valor absolut però signe contrari: $\text{Op}(+5) = -5$; $\text{Op}(-9) = +9$.

---

## 📌 3.2 Suma i Resta de Nombres Enters

- **Suma de nombres amb el mateix signe:** Se sumen els seus valors absoluts i es manté el signe comú:
  $$(+4) + (+6) = +10 \qquad (-3) + (-5) = -8$$
- **Suma de nombres amb signe diferent:** Es resten els valors absoluts (el gran menys el petit) i es posa el signe del de major valor absolut:
  $$(+9) + (-4) = +5 \qquad (+3) + (-7) = -4$$
- **Resta:** Restar equival a sumar l'oposat: $a - b = a + \text{Op}(b)$.
- **Xoc de signes davant de parèntesis:**
  $$+(+) \rightarrow + \qquad +(-) \rightarrow - \qquad -(+) \rightarrow - \qquad -(-) \rightarrow +$$

---

## 📌 3.3 Multiplicació, Divisió i Jerarquia d'Operacions

La **regla dels signes** s'aplica per a multiplicar i dividir:
- $(+) \cdot (+) = (+)$ i $(-) \cdot (-) = (+)$ *(mateix signe $\rightarrow$ positiu)*
- $(+) \cdot (-) = (-)$ i $(-) \cdot (+) = (-)$ *(signe diferent $\rightarrow$ negatiu)*

### Jerarquia Oficial d'Operacions
```
1r [ ( ) ] Parèntesis i claudàtors (de dins cap a fora)
2n         Potències i arrels quadrades
3r ·  :    Multiplicacions i divisions (d'esquerra a dreta)
4t +  -    Sumes i restes
```

---

## 📌 3.4 Potències de Nombres Enters i Arrels Quadrades

- **Base positiva:** Sempre dóna positiu: $(+3)^3 = +27$.
- **Base negativa:**
  - Amb **exponent parell** $\rightarrow$ resultat **positiu**: $(-2)^4 = +16$.
  - Amb **exponent imparell** $\rightarrow$ resultat **negatiu**: $(-2)^3 = -8$.
- **Propietats essencials:**
  $$a^m \cdot a^n = a^{m+n} \qquad a^m : a^n = a^{m-n} \qquad (a^m)^n = a^{m \cdot n} \qquad a^0 = 1$$
- **Arrels quadrades:** $\sqrt{25} = \pm 5$. L'arrel d'un nombre negatiu ($\sqrt{-9}$) **no existeix en $\mathbb{Z}$**.

---

## 📌 3.5 Problemes Reals i Aplicació en Contextos Tècnics

Els nombres enters són l'eina matemàtica fonamental per modelar fenòmens físics i situacions professionals que evolucionen en dos sentits oposats al voltant d'un valor de referència o punt zero:

1. **Termometria i amplitud tèrmica:**
   La variació de temperatura ($\Delta T$) es calcula com la temperatura final menys la inicial, o la màxima menys la mínima:
   $$\Delta T = T_{\text{final}} - T_{\text{inicial}} \qquad \text{Amplitud} = T_{\text{màx}} - T_{\text{mín}}$$
   Si la temperatura nocturna d'una sala de servidors és de $-3\text{ °C}$ i la diürna de $+22\text{ °C}$:
   $$\text{Amplitud} = 22 - (-3) = 22 + 3 = 25\text{ °C}$$

2. **Topografia i altimetria:**
   El nivell mitjà del mar representa la cota $0\text{ m}$. Cimes i turons prenen valors positius ($+h$) i fosses oceàniques o galeries mineres valors negatius ($-h$). La distància vertical o desnivell entre dos punts és:
   $$\text{Desnivell} = |\text{Cota}_A - \text{Cota}_B|$$

3. **Economia de taller i balanços de caixa:**
   Un saldo positiu indica liquiditat o benefici ($+B$), mentre que un saldo negatiu representa un dèficit, deute o pèrdua ($-D$). Les transaccions es modelen sumant ingressos i restant despeses:
   $$\text{Saldo Final} = \text{Saldo Inicial} + \sum \text{Ingressos} - \sum \text{Despeses}$$

---

## 📌 3.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Altimetria, variació tèrmica i distàncies amb valors absoluts
1. En una estació meteorològica d'alta muntanya es registren les següents temperatures durant una setmana d'hivern:
   - Dilluns: $-6\text{ °C}$
   - Dimarts: $-9\text{ °C}$
   - Dimecres: $+2\text{ °C}$
   - Dijous: $-4\text{ °C}$
   - Divendres: $+5\text{ °C}$
   Calcula:
   - La variació de temperatura entre el dimarts i el dimecres: $\Delta T = T_{\text{dim}} - T_{\text{mar}}$.
   - L'amplitud tèrmica setmanal absoluta: $T_{\text{màx}} - T_{\text{mín}}$.
   - La mitjana aritmètica exacta de la setmana en graus Celsius.

2. Un dron de reconeixement s'eleva a $+185\text{ m}$ per damunt del nivell del mar i un submarí d'investigació oceanogràfica s'enfonsa fins a $-340\text{ m}$ a la mateixa vertical:
   - Escriu la distància vertical total que separa ambdós vehicles utilitzant valors absoluts: $|(+185) - (-340)|$.
   - Si el submarí ascendeix $120\text{ m}$, quina serà la seua nova cota numèrica en $\mathbb{Z}$?

#### Exercici 2: Jerarquia d'operacions combinades amb signes d'agrupació i regla de signes
Resol cadascuna de les següents expressions mostrant detalladament cada pas intermedi segons la jerarquia d'operacions i la regla dels signes:
1. **Expressió A:**
   $$A = -15 + 4 \cdot [(-3) \cdot (-2) - (8 - 12)] - (-18) : (-3)$$
2. **Expressió B:**
   $$B = [(-2)^3 \cdot 3 - (-10)] : (-7) + (-4) \cdot [5 - (-2 \cdot 3)]$$
3. **Expressió C:**
   $$C = -36 : [(-2)^2 + (-5) \cdot (-2) - 8] - [(-3)^3 : 9 - (-4)]$$

#### Exercici 3: Potències de base negativa, exponents parells/imparells i arrels
1. Avalua i compara els següents parells d'expressions prestant atenció a l'ús dels parèntesis:
   - $P_1 = (-3)^4 \quad \text{enfront de} \quad P_2 = -3^4$
   - $P_3 = (-5)^3 \quad \text{enfront de} \quad P_4 = -5^3$
   - $P_5 = (-1)^{2026} \quad \text{enfront de} \quad P_6 = (-1)^{2027}$
2. Aplica les propietats de les potències per expressar com una sola potència de base enter irreductible:
   $$E_1 = \frac{(-2)^5 \cdot (-2)^7 \cdot 2^3}{(-2)^6 \cdot (-2)^4}$$
3. Justifica si tenen solució en el conjunt dels nombres enters $\mathbb{Z}$ les següents arrels:
   - $\sqrt{+81}$
   - $\sqrt{-64}$
   - $-\sqrt{49}$
   - $\sqrt[3]{-27}$

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Balanç financer de tresoreria i control de caixes en taller de reparacions
- **Objectiu:** Utilitzar la suma i resta de nombres enters per gestionar la comptabilitat diària d'un negoci tècnic.
- **Situació de taller:** El departament tècnic d'un servei de reparació d'ordinadors comença el mes amb un fons inicial de caixa de $+450\text{ €}$. Durant la primera setmana es produeixen els següents moviments:
  - Dia 1: Pagament de llicències de programari per valor de $-180\text{ €}$.
  - Dia 2: Cobrament de reparació de placa base de client: $+125\text{ €}$.
  - Dia 3: Compra a crèdit de components (fonts i pasta tèrmica): $-240\text{ €}$.
  - Dia 4: Cobrament de manteniment de xarxa d'oficina: $+310\text{ €}$.
  - Dia 5: Pagament de quota de servei d'emergència elèctrica: $-490\text{ €}$.
- **Procediment de càlcul:**
  1. Escriu el polinomi aritmètic complet que representa la seqüència de moviments:
     $$\text{Saldo Final} = (+450) + (-180) + (+125) + (-240) + (+310) + (-490)$$
  2. Resol agrupant en primer lloc tots els nombres positius (ingressos) i en segon lloc tots els negatius (despeses).
  3. Quin és el saldo final de la caixa en tancar la setmana? Hi ha superàvit o dèficit?
  4. Quina quantitat mínima ha d'ingressar el taller el dilluns següent per restablir el fons de maniobra a $+300\text{ €}$?

#### Repte 2: Gestió automatitzada d'un ascensor muntacàrregues en edifici de servidors
- **Objectiu:** Modelar desplaçaments lineals i calcular el consum energètic associat a partir del valor absolut en $\mathbb{Z}$.
- **Situació:** En un edifici tecnològic d'alta seguretat es disposa de $6\text{ plantes sobre rasant}$ ($+1$ a $+6$), una planta baixa ($0$) i $4\text{ soterranis}$ ($-1$ a $-4$) on s'ubiquen els sistemes de còpia de seguretat i climatització.
- **Moviments d'un muntacàrregues al llarg d'una ronda de manteniment:**
  - Parteix de la planta baixa ($0$).
  - Baixa a la cambra cuirasada del soterrani $-4$ per carregar discs de suport.
  - Puixa a la planta de desenvolupament $+5$ per lliurar els discs.
  - Baixa al soterrani $-2$ per recollir cablejat vell.
  - Puja finalment a la planta $+3$ per instal·lar un commutador.
- **Comanda tècnica:**
  1. Calcula el nombre de plantes recorregudes en cadascun dels quatre trajectes individuals aplicant la distància absoluta: $|\text{Destí} - \text{Origen}|$.
  2. Calcula el nombre total de plantes recorregudes durant tota la ronda:
     $$\text{Plantes Totals} = |(-4) - 0| + |(+5) - (-4)| + |(-2) - (+5)| + |(+3) - (-2)|$$
  3. Si cada planta té una alçada de $3\text{ metres}$, quants metres verticals totals ha recorregut l'ascensor?
  4. Si el motor consumeix $15\text{ Wh}$ per cada metre vertical desplaçat, quin consum elèctric total en $\text{kWh}$ ha generat la ronda?

#### Repte 3: Monitoratge de temperatures extremes en càmeres climàtiques de testatge
- **Objectiu:** Utilitzar nombres enters per interpretar gràfiques de proves de resistència tèrmica de circuits electrònics.
- **Situació:** En un laboratori d'assaig de servidors industrials, una placa base se sotmet a un cicle tèrmic extrem en una cambra climàtica seguint aquest protocol:
  - Fase 1 (Repòs): Inicialment a $+20\text{ °C}$.
  - Fase 2 (Congelació ràpida): La cambra refreda a un ritme constant de $-4\text{ °C per minut}$ durant $12\text{ minuts}$.
  - Fase 3 (Xoc tèrmic fred extrem): S'introdueix nitrogen gasós que baixa la temperatura altres $-15\text{ °C}$.
  - Fase 4 (Escalfament sobtat): La cambra activa resistències ceràmiques i augmenta la temperatura $+85\text{ °C}$.
- **Càlculs requerits:**
  1. Determina la temperatura assolida al final de la Fase 2: $T_2 = 20 + [12 \cdot (-4)]$.
  2. Determina la temperatura mínima absoluta assolida al final de la Fase 3: $T_3 = T_2 + (-15)$.
  3. Calcula la temperatura final en completar la Fase 4: $T_4 = T_3 + (+85)$.
  4. Quina és la variació tèrmica global $\Delta T = T_4 - T_3$ que ha hagut de suportar el silici de la CPU sense clivellar-se?

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He representat correctament nombres positius i negatius a la recta numèrica identificant l'ordre ($a < b$).
- [ ] He calculat el valor absolut ($|a|$) i l'oposat ($\text{Op}(a)$) d'un enter sense confondre ambdós conceptes.
- [ ] He aplicat correctament la regla dels signes en productes i quocients: signes iguals donen positiu, diferents donen negatiu.
- [ ] He resolt expressions combinades amb claudàtors niats respectant l'ordre jeràrquic estricte.
- [ ] He calculat potències de base negativa distingint correctament $(-a)^n$ de $-a^n$ segons la paritat de l'exponent.
- [ ] He modelat situacions reals d'altimetria, saldos econòmics i desplaçaments utilitzant nombres enters.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Concepte d'enter i ordenació a la recta** | Domina la representació a la recta, ordena nombres enters positius i negatius amb soltesa i empra el valor absolut amb precisió. | Ordena nombres enters correctament i calcula valors absoluts amb alguna xicoteta vacil·lació en valors molt negatius. | Reconeix la diferència entre positius i negatius però dubta en comparar dos nombres negatius (ex. $-8 > -2$). | Confon els nombres negatius amb positius i no sap situar-los a la recta respecte al zero. |
| **Operacions bàsiques i xoc de signes** | Resol sumes, restes i eliminació de parèntesis amb signes confrontats sense cap errada algebraica. | Resol sumes i restes de nombres enters correctament amb errades menors en parèntesis encadenats. | Aplica la regla bàsica de signes però s'equivoca en sumar dos nombres negatius. | Aplica la regla del producte a la suma (diu que $(-3) + (-4) = +7$) de manera reiterada. |
| **Producte, quocient i jerarquia combinada** | Aplica la jerarquia oficial i la regla de signes en expressions complexes amb claudàtors niats de manera impecable. | Resol expressions combinades amb bona aplicació de la jerarquia i xicotets errors en càlculs finals. | Recorda la prioritat de multiplicacions sobre sumes però s'encalla en desfer claudàtors interiors. | Incompleix la jerarquia d'operacions calculant d'esquerra a dreta sense respectar els operadors. |
| **Potències i arrels en $\mathbb{Z}$** | Distingeix amb claredat $(-a)^n$ de $-a^n$, aplica propietats d'exponents i justifica la inexistència d'arrels negatives en $\mathbb{Z}$. | Calcula potències de base negativa amb exponent parell/imparell i simplifica expressions de la mateixa base. | Calcula potències bàsiques però comet errors en el signe de bases negatives sense parèntesis. | Multiplica la base per l'exponent o afirma erròniament que $\sqrt{-16} = -4$. |
| **Resolució de problemes aplicats (taller/clima)** | Tradueix enunciats tècnics de tresoreria, ascensors i cicles tèrmics a polinomis aritmètics enters i n'interpreta el resultat. | Planteja i resol problemes de la vida quotidiana i de taller interpretant el sentit físic del resultat. | Resol problemes senzills amb ajuda en la formulació de les operacions o en el conveni de signes. | Incapaç de traduir un enunciat verbal a nombres positius i negatius o d'interpretar el resultat final. |
