---
layout: default
title: "UT4 — Projecte hardware Excel — Programació, Xarxes i Sistemes Informàtics I | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r Batxillerat · UT4 Completa"
prev_url: "../ut03/ut03actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT3"
next_url: "../ut04/ut0401.html"
next_label: "4.1 Guía projecte pressupost ➡️"
---

# 📘 UT4 — Projecte hardware Excel (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**4.1 Guía projecte pressupost**](#ut0401) (o [obrir en pàgina individual ➡️](./ut0401.md) )
> - [**✍️ Activitats pràctiques UT4**](#ut04actividades) (o [obrir en pàgina individual ➡️](./ut04actividades.md) )

---

## 4.1 Guía projecte pressupost

📑 PROJECTE: EL TEU CONFIGURADOR DE PC GAMER Objectiu: Construir una eina de gestió de pressupostos mitjançant l'automatització de dades. 🏁 Introducció Teniu una llista de components i preus. Però un pressupost professional no és només una llista; és un sistema que calcula automàticament, busca errors i aplica regles de negoci (com els descomptes per notes). Anem a construir-lo.

🛠️ FASE 1: Disseny de l'arquitectura de dades Abans de posar fórmules, hem d'estructurar la informació. Crea 4 fulls al teu llibre d'Excel

- Dades_Basic: Inventari del PC econòmic.
- Dades_Pro: Inventari del PC d'alta gamma.
- Comparador: Eina de cerca ràpida.
- Calculadora_Final: Gestió de clients i descomptes.

En els fulls de dades, crea columnes per a: ID, Component, Marca/Model i Preu. Aplica el format Moneda (€) a la columna de preu.

⚡ FASE 2: Automatització de la Cerca (BUSCARV) En el full Comparador, crearem una eina on, en escriure el número d'un component (ID), ens diga quin és el model en cada PC.

### 1. Validació de dades: Selecciona la cel·la on anirà l'ID. Ves a Dades >

Validació de dades i tria Llista. Escriu els números de l'1 al 15. Ara tindràs un desplegable.

### 2. Funció de cerca: En la cel·la del costat, utilitza aquesta fòrmula

- =BUSCARV(cel·la_del_número; Dades_Basic!A2:D16; 3; FALS)
- Explicació: Busquem l'ID, en el rang de dades, i volem que ens retorne la

columna 3 (el model).

- Repeteix el mateix per a la columna del PC Pro.

🎓 FASE 3: El Sistema de Beques (Condicionals) Ves al full Calculadora_Final. Imagineu que sou una botiga que fa descomptes als bons estudiants.

### 1. Càlcul de Mitjanes: Crea una taula amb alumnes i 3 notes. Utilitza

=MITJANA(nota1; nota2; nota3).

### 2. La Prova Lògica (SI): Volem que Excel ens diga si l'alumne és apte per al

descompte.

- =SI(cel·la_mitjana >= 7; "APTE"; "NO APTE")

### 3. Càlcul de Preu Personalitzat

- Si l'alumne és APTE, el preu serà: Preu_Total * 0,75 (un 25% de

descompte).

- Si és NO APTE, el preu serà el normal.
- Repte: Intenta fer-ho tot en una sola fòrmula

=SI(cel·la_estat="APTE"; Preu*0,75; Preu)

🎨 FASE 4: Visualització de Dades (Format Condicional) L'Excel ha de ser fàcil de llegir. Farem que els colors ens ajuden

### 1. Alertes de Preu: Si el preu final del PC supera els 1.500 €, que la cel·la es pinte

automàticament en taronja.

### 2. Estat del Descompte: Selecciona les cel·les "APTE/NO APTE". Ves a Inici >

Format Condicional > Text que conté.

- Si conté "APTE" → coloregem el fons verd amb text verd fosc.
- Si conté "NO APTE" → coloregem el fons roig clar.

🚀 FASE 5: Auditoria i Control de Qualitat Un bon informàtic sempre posa a prova el seu sistema. Comprova el següent

- [ ] Referència Absoluta: Si arrossegues una fòrmula, es mouen les cel·les que

no haurien de moure's? (Recorda l'ús dels dòlars $A$1).

- [ ] Actualització en cadena: Si canvies el preu d'una targeta gràfica en el full

Dades_Pro, el preu final en la Calculadora_Final s'actualitza tot sol?

- [ ] Estètica: Totes les taules tenen vores, capçaleres en negreta i els textos

estan centrats?

🏁 Entrega del projecte Guarda el fitxer amb el format: Cognom_Nom_ProjectePC.xlsx. El teu professor comprovarà la funcionalitat de les fòrmules canviant les notes d'algun alumne per a veure si tot el sistema reacciona correctament.

---

## ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — Pressupost Excel**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
