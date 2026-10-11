---
layout: default
title: "UD1: Els Nombres Naturals — Ciències Aplicades I"
course_root: ".."
badge: "1r FPB · Ciències Aplicades I · UD1"
prev_url: "../index.md"
prev_label: "⬅️ Tornar al Curs"
next_url: "../ut02/index.md"
next_label: "UD2 La Matèria i Nutrició ➡️"
---

# UD1: Els Nombres Naturals (Matemàtiques)

Benvingut/da a la **Unitat Didàctica 1** del bloc de Matemàtiques de Ciències Aplicades I. En aquesta unitat aprendràs com funciona el nostre sistema decimal, com operar amb nombres naturals, la jerarquia oficial d'operacions i com calcular potències de manera senzilla i pràctica.

---

## 📑 Índex d'Apartats de la Unitat

1. [**1.1 El Sistema de Numeració Decimal i Valor Posicional**](#11-el-sistema-de-numeració-decimal-i-valor-posicional)
2. [**1.2 Els Nombres Naturals i les Operacions Bàsiques**](#12-els-nombres-naturals-i-les-operacions-bàsiques)
3. [**1.3 Propietats de les Operacions i Jerarquia**](#13-propietats-de-les-operacions-i-jerarquia)
4. [**1.4 Potències de Nombres Naturals i Propietats**](#14-potències-de-nombres-naturals-i-propietats)
5. [**1.5 Butlletí d'Exercicis i Problemes d'Aplicació**](#15-butlletí-dexercicis-i-problemes-daplicació)

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

## 📌 1.5 Butlletí d'Exercicis i Problemes d'Aplicació

1. **Calcula aplicant la jerarquia:**
   - a) $6 \cdot 4 - 3 \cdot 5 + 8$
   - b) $24 : 6 + 2 \cdot (9 - 4)$
   - c) $15 + 3 \cdot [8 - (6 - 2)]$

2. **Redueix a una sola potència:**
   - a) $2^3 \cdot 2^4 \cdot 2^2 =$
   - b) $5^9 : 5^6 =$
   - c) $(3^2)^4 =$
   - d) $(2^3 \cdot 3^3) : 6^3 =$

3. **Problema de taller:**
   Al taller tenim $156$ connectors RJ-45 per a repartir entre $12$ estudiants a parts iguals.
   - Quants connectors li toquen a cadascú?
   - Sobra algun connector? *(Aplica la prova de la divisió)*.
