---
layout: default
title: "Quadern d'Activitats Pràctiques — Tasca 5: Gestió Econòmica i Pressupostos en Calc"
course_root: ".."
badge: "2n Trimestre · RA5 (a-f) · 8 hores · 15% de la nota"
prev_url: "./up0503.html"
prev_label: "⬅️ 5.3 Simulació Pràctica: Resolució de 2 Casos de Clients"
next_url: "../up06/up06ras.html"
next_label: "6.0 RA i Criteris d'Avaluació ➡️"
---

# 📊 Quadern d'Activitats Pràctiques — Tasca 5: Gestió Econòmica i Pressupostos en Calc

Un tècnic informàtic ha de saber calcular costos, aplicar marges comercials i emetre pressupostos clars. En aquesta tasca automatitzaràs la gestió econòmica del teu taller amb **LibreOffice Calc** utilitzant fórmules de suma, multiplicació i càlcul d'IVA.

---

## 🗺️ Flux de Treball del Taller

```flowchart LR
    Cost["💵 Cost de Peces i Mà d'Obra"] --> Marg["📈 Marge Comercial (+30%)"]
    Marg --> BI["🧾 Base Imposable = SUMA(...)"]
    BI --> IVA["🏛️ IVA (21%) = BI * 0,21"]
    BI & IVA --> Total["💰 TOTAL = BI + IVA"]
```

---

## 🎯 Procediment Pràctic Pas a Pas

### Pas 5.1: Full d'Inventari de Peces i Tarifes (`.ods`)
1. Obre **LibreOffice Calc** i crea un full anomenat `Inventari_i_Tarifes`.
2. Dissenya una taula amb les columnes: *Codi*, *Descripció del Component*, *Preu de Compra (€)*, *Marge Comercial (%)*, *Preu Venda Públic (€)* i *Estoc al Taller*.
3. Introdueix almenys **8 components habituals** (discs SSD 500GB/1TB, mòduls RAM DDR4 8GB/16GB, fonts ATX 650W, pasta tèrmica, targetes Wi-Fi USB).
4. Aplica la fórmula per a calcular el PVP amb marge: `=C2*(1+D2)`.

### Pas 5.2: Model de Pressupost Automatitzat amb Fórmules
1. En un segon full anomenat `Model_Pressupost`, insereix la capçalera corporativa amb el nom de l'empresa i dades del client.
2. Dissenya la taula de conceptes amb 4 columnes: *Quantitat*, *Descripció*, *Preu Unitari (€)* i *Import (€)*.
3. Fórmules obligatòries:
   - Import de línia: `=A10*C10`
   - Base Imposable: `=SUMA(D10:D15)`
   - IVA (21%): `=D16*0,21`
   - Total Pressupost: `=D16+D17`
4. Aplica format de moneda amb dos decimals (`€`) a totes les cel·les monetàries.

### Pas 5.3: Resolució de 2 Casos Reals de Clients
1. **Cas Client 1 (Actualització d'equip lent):** Disc SSD 1TB + Mòdul RAM 16GB + 1,5 hores de mà d'obra de clonació i instal·lació ($30\text{ €/h}$).
2. **Cas Client 2 (Manteniment de sobreescalfament):** Desmuntatge complet, neteja de pols interna, aplicació de pasta tèrmica d'alta conductivitat + 1 hora de mà d'obra.
3. Genera ambdós pressupostos resolts i exporta'ls en PDF.

---

## 📋 Llista d'Autoavaluació de Qualitat

| Criteri de Qualitat | Comprovació de l'Alumnat | Estat |
| :--- | :--- | :---: |
| **Fórmules operatives** | Tots els totals i càlculs d'IVA es generen automàticament per fórmula. | ☐ Sí |
| **Format de moneda** | Totes les quantitats econòmiques tenen el símbol `€` i 2 decimals. | ☐ Sí |
| **Inventari complet** | Conté com a mínim 8 components amb preu de cost i PVP calculat. | ☐ Sí |
| **2 Casos resolts** | S'han calculat correctament els pressupostos dels clients 1 i 2. | ☐ Sí |
| **Format PDF** | Pressupostos exportats amb presentació corporativa neta en PDF. | ☐ Sí |

---

## 📦 Documents a Incloure en el Portfoli de l'Empresa
Guarda els següents fitxers a la carpeta del projecte:
1. `Full_Inventari_Tarifes_ElTeuNom.ods` (full de càlcul amb fórmules operatives de Calc).
2. `Pressupostos_Clients_ElTeuNom.pdf` (document en PDF amb els pressupostos resolts dels dos clients).
