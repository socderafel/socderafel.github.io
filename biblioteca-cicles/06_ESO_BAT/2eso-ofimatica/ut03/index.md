---
layout: default
title: "UD3 — Calc · Temari Complet"
course_root: ".."
badge: "2n ESO · UD3 — Calc"
prev_url: "../ut02/ut0201.html"
prev_label: "⬅️ 2.1 Format de text, llistes i taules en Writer"
next_url: "../ut03/ut0301.html"
next_label: "3.1 Format de cel·les, fórmules i gràfics en Calc ➡️"
---

# 📘 UD3 — Calc (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 Format de cel·les, fórmules i gràfics en Calc**](./ut0301.md)

---

# 3.1 Format de cel·les, fórmules i gràfics en Calc

### 1. Format de cel·les: text, alineació i vores

En **LibreOffice Calc**, cada cel·la s'identifica per la lletra de la seua columna i el número de la seua fila (per exemple, `A1`, `B4`). Per donar format a les cel·les seleccionem el rang i accedim a `Format → Cel·les...` (`Ctrl + 1`):

- **Tipus de lletra i efectes:** permet definir la família tipogràfica, l'estil, la mida i el color del text.
- **Alineació:** controla l'alineació horitzontal (esquerra, centrat, dreta) i vertical (superior, mitjana, inferior), així com l'orientació del text i l'ajust automàtic dins de la cel·la.
- **Vores i fons:** permet aplicar línies de contorn a les taules de dades i colors d'ombrejat per diferenciar les capçaleres dels valors.
- **Fusionar cel·les:** permet combinar diverses cel·les adjacents per crear títols o encapçalaments centrats sobre una taula.

---

### 2. Format de cel·les: números, moneda i percentatges

Calc permet assignar un **format numèric** específic a les dades sense alterar el valor emmagatzemat a la cel·la:

- **Nombre:** definició del nombre de decimals i l'ús del separador de milers (`.` o `,`).
- **Moneda:** afegeix automàticament el símbol monetari (`€`, `$`) i formata els decimals.
- **Percentatge (`%`):** multiplica visualment el valor per 100 i mostra el símbol `%`.
- **Data i hora:** permet representar valors temporals en múltiples formats (`DD/MM/AAAA`, `HH:MM:SS`).

---

### 3. Fórmules, funcions bàsiques i gràfics

- **Fórmules:** Tota fórmula o funció en Calc comença sempre pel signe igual (`=`). Pot utilitzar operadors aritmètics (`+`, `-`, `*`, `/`, `^`) i referències a cel·les (per exemple, `=B2*C2`).
- **Funcions habituals:**
  - `=SUMA(A1:A10)`: calcula la suma d'un rang de cel·les.
  - `=PROMIG(A1:A10)` / `=PROMEDIO(A1:A10)`: obté la mitjana aritmètica del rang.
  - `=MAX(A1:A10)` i `=MIN(A1:A10)`: retornen el valor màxim i mínim del rang.
- **Assistent de gràfics:** Seleccionant el rang de dades (incloses les etiquetes) i polsant `Insereix → Gràfic...`, podem representar visualment les dades mitjançant diagrames de columnes, barres, sectors (pastís) o línies.

---
