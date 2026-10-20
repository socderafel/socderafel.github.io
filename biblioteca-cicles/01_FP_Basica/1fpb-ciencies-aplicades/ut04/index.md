---
layout: default
title: "UD4: Divisibilitat, Màxim Comú Divisor i Mínim Comú Múltiple — Ciències Aplicades I"
course_root: ".."
badge: "1r FPB · Ciències Aplicades I · UD4"
prev_url: "../ut03/index.html"
prev_label: "⬅️ UD3 Els Nombres Enters"
next_url: "../ut05/index.html"
next_label: "UD5 Les Fraccions ➡️"
---

# UD4: Divisibilitat, Màxim Comú Divisor i Mínim Comú Múltiple (Matemàtiques)

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

## 📑 Índex d'Apartats de la Unitat

1. [**4.1 Múltiples, Divisors i Criteris de Divisibilitat**](#41-múltiples-divisors-i-criteris-de-divisibilitat)
2. [**4.2 Nombres Primers i Descomposició en Factors Primers**](#42-nombres-primers-i-descomposició-en-factors-primers)
3. [**4.3 Màxim Comú Divisor (MCD) i Mínim Comú Múltiple (MCM)**](#43-màxim-comú-divisor-mcd-i-mínim-comú-múltiple-mcm)
4. [**4.4 Problemes Reals d'MCD i MCM i Butlletí d'Exercicis**](#44-problemes-reals-dmcd-i-mcm-i-butlletí-dexercicis)
5. [**4.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori**](#45-quadern-dactivitats-pràctiques-i-reptes-de-laboratori)

---

## 📌 4.1 Múltiples, Divisors i Criteris de Divisibilitat

La relació de **divisibilitat** s'estableix formalment entre dos nombres enters quan la divisió del primer entre el segon és exacta, és a dir, quan el residu és estrictament zero:

$$a : b = c \quad (r = 0) \iff a = b \cdot c$$

En aquesta situació diem de forma equivalent que:
- $a$ és **múltiple** de $b$.
- $b$ és **divisor** de $a$.
- $a$ és **divisible** per $b$.

### Taula Comparativa: Múltiples vs. Divisors
| Característica | Múltiples d'un Nombre ($M(a)$) | Divisors d'un Nombre ($D(a)$) |
| :--- | :--- | :--- |
| **Definició** | Nombres que contenen a $a$ una quantitat exacta de vegades | Nombres que estan continguts en $a$ de manera exacta |
| **Com s'obtenen?** | Multiplicant $a$ pels nombres naturals ($0, 1, 2, 3, \dots$) | Fent divisions i seleccionant aquelles amb residu zero |
| **Quantitat** | **Infinits** | **Finits** (sempre majors o iguals a 1 i menors o iguals a $a$) |
| **Extrems** | El més menut no nul és ell mateix ($a \cdot 1 = a$) | L'$1$ és divisor universal; el major és ell mateix ($a$) |
| **Exemple amb 12** | $M(12) = \{0, 12, 24, 36, 48, 60, \dots\}$ | $D(12) = \{1, 2, 3, 4, 6, 12\}$ |

### Criteris de Divisibilitat Ràpids
Permeten determinar si un nombre és divisible per un altre sense necessitat d'executar l'algorisme de divisió:

| Nombre | Regla Pràctica de Comprovació | Exemple Positiu | Exemple Negatiu |
| :---: | :--- | :--- | :--- |
| **2** | L'última xifra és $0$ o un dígit parell ($2, 4, 6, 8$). | $1.478$ (acaba en $8$) | $3.591$ (acaba en $1$) |
| **3** | La suma de totes les seues xifres és un múltiple de $3$. | $516 \rightarrow 5+1+6=12$ ($12 \in M(3)$) | $713 \rightarrow 7+1+3=11$ |
| **4** | Les dues últimes xifres formen un múltiple de $4$ o són $00$. | $3.524$ ($24 = 4 \cdot 6$) | $9.118$ ($18$ no és divisible per $4$) |
| **5** | L'última xifra és $0$ o $5$. | $4.895$ (acaba en $5$) | $6.234$ (acaba en $4$) |
| **9** | La suma de les seues xifres és un múltiple de $9$. | $2.853 \rightarrow 2+8+5+3=18$ | $4.512 \rightarrow 4+5+1+2=12$ |
| **10** | L'última xifra és exactament $0$. | $19.450$ | $19.455$ |
| **11** | La diferència entre la suma de les xifres de posició parell i la de posició imparell és $0$ o múltiple d'11. | $8.294 \rightarrow (8+9) - (2+4) = 17 - 6 = 11$ | $5.182 \rightarrow (5+8) - (1+2) = 10$ |

---

## 📌 4.2 Nombres Primers i Descomposició en Factors Primers

- **Nombre Primer:** Nombre natural major que 1 que només té exactament dos divisors: l'1 i ell mateix:
  $$\mathbb{P} = \{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, \dots\}$$
  *(El nombre $2$ és l'únic nombre primer parell).*
- **Nombre Compost:** Nombre que té més de dos divisors (excepte el 0 i l'1, que per conveni no són ni primers ni compostos).

### Teorema Fonamental de l'Aritmètica
Tot nombre compost es pot expressar de forma **única** (tret de l'ordre dels factors) com un producte de factors primers:

$$N = p_1^{a_1} \cdot p_2^{a_2} \cdot p_3^{a_3} \dots$$

**Mètode de descomposició per divisions successives verticals:**
```text
  120 | 2           180 | 2
   60 | 2            90 | 2
   30 | 2            45 | 3
   15 | 3            15 | 3
    5 | 5             5 | 5
    1 |               1 |
120 = 2³ · 3 · 5    180 = 2² · 3² · 5
```

---

## 📌 4.3 Màxim Comú Divisor (MCD) i Mínim Comú Múltiple (MCM)

### Màxim Comú Divisor ($\text{MCD}$)
És el major nombre enter que divideix exactament a dos o més nombres alhora.
- **Regla algorítmica:** Es descomponen els nombres en factors primers i es prenen **ÚNICAMENT els factors comuns elevats al MENOR exponent**.
- **Propietat:** Si dos nombres no comparteixen cap factor primer comú, el seu $\text{MCD}$ és $1$, i s'anomenen **primers entre si** (coprimers).

### Mínim Comú Múltiple ($\text{MCM}$)
És el nombre positiu més menut que és múltiple simultani de dos o més nombres.
- **Regla algorítmica:** Es descomponen els nombres en factors primers i es prenen **TOTS els factors (comuns i no comuns) elevats al MAJOR exponent**.

### Propietat Fonamental per a Dos Nombres
Per a qualsevol parell de nombres enters positius $a$ i $b$, es compleix sempre la igualtat:

$$\text{MCD}(a, b) \cdot \text{MCM}(a, b) = a \cdot b$$

**Exemple de càlcul complet per a $a = 120$ i $b = 180$:**
- Descomposició: $120 = 2^3 \cdot 3 \cdot 5$ i $180 = 2^2 \cdot 3^2 \cdot 5$
- $\text{MCD}(120, 180) = 2^2 \cdot 3^1 \cdot 5^1 = 4 \cdot 3 \cdot 5 = 60$
- $\text{MCM}(120, 180) = 2^3 \cdot 3^2 \cdot 5^1 = 8 \cdot 9 \cdot 5 = 360$
- Comprovació: $60 \cdot 360 = 21.600 \quad \longleftrightarrow \quad 120 \cdot 180 = 21.600$ ✅

---

## 📌 4.4 Problemes Reals d'MCD i MCM i Butlletí d'Exercicis

Com saber quin concepte aplicar en un problema de la vida quotidiana o del taller tècnic?

| Criteri d'Identificació | Aplicació d'MCD | Aplicació d'MCM |
| :--- | :--- | :--- |
| **Objectiu principal** | **Dividir, tallar, envasar o repartir** | **Repetir, sincronitzar o coincidir** |
| **Paraules clau del text** | "La màxima mida possible", "el màxim nombre de paquets", "sense que sobre res", "trossos iguals". | "Quan tornaran a coincidir?", "el primer moment que...", "menor quantitat comuna", "recorregut mínim". |
| **Magnitud del resultat** | El resultat serà **menor o igual** que el nombre més xicotet de les dades. | El resultat serà **major o igual** que el nombre més gran de les dades. |
| **Exemple típic de taller** | Tallar perfils d'alumini de $180\text{ cm}$ i $240\text{ cm}$ en barres iguals de màxima longitud. | Sincronitzar les còpies de seguretat de dos servidors programades cada $6\text{ h}$ i cada $8\text{ h}$. |

---

## 📌 4.5 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Classificació ràpida mitjançant criteris de divisibilitat
Indica, sense realitzar cap divisió i justificant la resposta amb el criteri corresponent, si els següents nombres són divisibles per 2, 3, 5, 9, 10 o 11:
1. $N_1 = 3.420$
2. $N_2 = 1.716$
3. $N_3 = 4.875$
4. $N_4 = 9.207$
Completa la matriu de verificació marcant amb una creu (**X**) les caselles que compleixen la condició de divisibilitat exacta:

| Nombre | Divisible per 2 | Divisible per 3 | Divisible per 5 | Divisible per 9 | Divisible per 10 | Divisible per 11 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **3.420** | | | | | | |
| **1.716** | | | | | | |
| **4.875** | | | | | | |
| **9.207** | | | | | | |

#### Exercici 2: Descomposició en factors primers i càlcul de divisors
1. Realitza la descomposició factorial completa per divisions successives dels següents nombres enters:
   $$A = 252 \qquad B = 420 \qquad C = 540$$
2. Escriu cada nombre expressat com a producte de potències de nombres primers.
3. Utilitzant la fórmula del nombre total de divisors $N_{\text{div}} = (a_1 + 1)(a_2 + 1)\dots(a_k + 1)$, determina quants divisors positius té el nombre $A = 252$ i enumera'ls en ordre creixent.

#### Exercici 3: Càlcul d'MCD i MCM de conjunts de dades tècniques
1. Troba l'$\text{MCD}$ i l'$\text{MCM}$ de les següents parelles de nombres utilitzant la seua descomposició factorial:
   - Parella 1: $72$ i $108$
   - Parella 2: $150$ i $225$
   - Parella 3: $84$ i $126$
2. Per a la parella 1 ($72$ i $108$), comprova experimentalment que es compleix la relació matemàtica:
   $$\text{MCD}(72, 108) \cdot \text{MCM}(72, 108) = 72 \cdot 108$$
3. Calcula l'$\text{MCD}$ i l'$\text{MCM}$ de la següent terna de tres nombres:
   $$\text{MCD}(48, 72, 120) \qquad \text{i} \qquad \text{MCM}(48, 72, 120)$$

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Optimització de tall de cablejat i canaletes sense residu
- **Objectiu:** Utilitzar el Màxim Comú Divisor per optimitzar el material de canalització evitant sobrants no aprofitables.
- **Situació de taller:** En una instal·lació d'infraestructura de xarxes a les aules d'informàtica, un tècnic disposa de dues tires rígides de canaleta de PVC sobrants d'una bobina amb les següents longituds:
  - Tira A: $180\text{ cm}$
  - Tira B: $300\text{ cm}$
- **Comanda tècnica:**
  1. El tècnic ha de tallar ambdues tires en trossos exactament iguals, de la **majors longitud possible**, sense que sobre cap tros de plàstic. Quina ha de ser la longitud de cada tros tallat?
  2. Quants trossos complets s'obtindran de la Tira A?
  3. Quants trossos complets s'obtindran de la Tira B?
  4. Quants trossos iguals en total tindrà el tècnic per fixar les preses de xarxa a les taules?

#### Repte 2: Sincronització de tasques programades i còpies de seguretat en servidors
- **Objectiu:** Utilitzar el Mínim Comú Múltiple per preveure la concurrència d'activitats que consumeixen amplada de banda en sistemes informàtics.
- **Situació:** En el centre de dades d'un institut s'han configurat tres scripts automàtics de manteniment nocturn:
  - L'script de còpia diferencial de fitxers s'executa cada $6\text{ hores}$.
  - L'script d'actualització de definicions antivirus s'executa cada $8\text{ hores}$.
  - L'script de desfragmentació i compactació de bases de dades s'executa cada $12\text{ hores}$.
- **Procediment de càlcul:**
  1. Si els tres scripts s'han llançat simultàniament a les $08:00\text{ del matí}$ d'un dilluns, quantes hores han de transcórrer fins que tornen a coincidir exactament en el mateix instant?
  2. A quina hora i quin dia de la setmana tindrà lloc aquesta primera concurrència simultània?
  3. Quantes vegades s'haurà executat cadascun dels tres scripts durant aquest període de temps?
  4. Per què és crucial per a l'administrador del sistema conèixer aquest moment per evitar una saturació de la memòria RAM del servidor?

#### Repte 3: Enrajolat i distribució modular de racks de servidors
- **Objectiu:** Resoldre problemes geomètrics bidimensionals mitjançant la teoria de nombres.
- **Situació:** S'ha d'instal·lar un terra tècnic modular elevat a la sala de servidors. La sala té unes dimensions rectangulars de:
  - Amplada: $420\text{ cm}$
  - Llargada: $540\text{ cm}$
- **Comanda tècnica:**
  1. Les plaques modulars del terra tècnic han de ser necessàriament **quadrades**, de la **majors mida possible**, i han de cobrir tota la sala sense necessitat de tallar cap placa. Quant ha de mesurar el costat de cada placa modular?
  2. Quantes plaques caldrà col·locar al llarg de l'amplada de la sala?
  3. Quantes plaques caldrà col·locar al llarg de la llargada de la sala?
  4. Quin és el nombre total de plaques modulars necessàries per pavimentar completament la sala tècnica?

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He aplicat correctament els criteris de divisibilitat (2, 3, 5, 9, 10 i 11) sense necessitat de fer la divisió a mà.
- [ ] He descompost nombres en factors primers utilitzant la ratlla vertical de divisions successives.
- [ ] He expressat un nombre compost mitjançant el producte de potències de bases primeres.
- [ ] He calculat l'MCD seleccionant només els factors comuns elevats al menor exponent.
- [ ] He calculat l'MCM seleccionant els factors comuns i no comuns elevats al major exponent.
- [ ] He comprovat la propietat $\text{MCD}(a,b) \cdot \text{MCM}(a,b) = a \cdot b$.
- [ ] He identificat si un problema de la vida real o de taller requereix aplicar l'MCD (tallar/repartir) o l'MCM (repetir/coincidir).

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Criteris de divisibilitat ràpids** | Reconeix i justifica la divisibilitat per 2, 3, 5, 9, 10 i 11 a l'acte amb explicació teòrica impecable. | Aplica correctament la majoria de criteris amb algun dubte puntual en el criteri de l'11. | Recorda bé els criteris del 2, 5 i 10, però dubta amb el del 3 o el del 9. | Realitza la divisió manual completa perquè no coneix o no comprèn els criteris de divisibilitat. |
| **Descomposició en factors primers** | Realitza la descomposició factorial de nombres de qualsevol magnitud utilitzant exponents sense cap error. | Descompon nombres compostos correctament amb alguna errada aritmètica en divisions intermèdies. | Realitza divisions correctes però confon nombres primers amb nombres imparells en dividir. | Divideix entre nombres compostos (com ara dividir directament entre 4, 6 o 9) alterant la descomposició factorial. |
| **Algorismes d'MCD i MCM** | Distingeix amb precisió les regles de factors comuns/no comuns i menors/majors exponents calculant ambdós valors ràpidament. | Calcula l'MCD i l'MCM correctament però comet errades puntuals en triar exponents quan hi ha 3 nombres. | Recorda la definició però intercanvia les regles (pren el major exponent per a l'MCD o a l'inrevés). | Incapaç de calcular l'MCD o l'MCM o confon completament el concepte de divisor amb el de múltiple. |
| **Comprovació de relacions ($\text{MCD} \cdot \text{MCM} = a \cdot b$)** | Verifica sempre la relació algebraica per a dos nombres utilitzant el càlcul per confirmar la validesa de la solució. | Comprova la propietat correctament amb bona comprensió de la igualtat. | Coneix la propietat però li costa operar amb nombres grans sense calculadora. | No comprèn la relació entre producte de nombres i els seus factors comuns. |
| **Modelització de problemes de taller** | Identifica immediatament si el context requereix tallar (MCD) o sincronitzar (MCM) i en calcula totes les derivades pràctiques. | Identifica correctament el concepte a aplicar i resol el problema amb bona interpretació de les unitats. | Resol el problema amb ajut per identificar si es tracta d'MCD o MCM. | Aplica l'MCD quan calia l'MCM o no sap interpretar el sentit de les dades del problema de taller. |
