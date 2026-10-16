---
layout: default
title: "UP5 — Gestió Econòmica i Pressupostos en LibreOffice Calc (Unitat Completa) — Projecte Intermodular (2n FPB)"
course_root: ".."
badge: "2a Avaluació · RA1 (h) i RA4 (c) · 8 hores · 15% de la nota"
prev_url: "../up04/index.html"
prev_label: "⬅️ 📘 UP4 Completa"
next_url: "./up05ras.html"
next_label: "5.0 RA i Criteris d'Avaluació ➡️"
---

# 📘 UP5 — Gestió Econòmica, Pressupostos i Cost d'EPIs en LibreOffice Calc — Unitat Completa

# 5.0 RA i Criteris d'Avaluació (UP5)

Segons la **Programació Didàctica oficial (mòdul 3160)**, la **Unitat de Programació 5** desenvolupa els següents Resultats d'Aprenentatge i Criteris d'Avaluació oficials:

- **RA1:** Busca informació en internet sobre empreses «tipus» del sector... (CE 1.h: valoració dels recursos necessaris per a cada unitat: recanvis i mà d'obra).
- **RA4:** Relaciona cada unitat d'una empresa tipus amb la prevenció de riscos professionals... (CE 4.c: estimació del cost dels EPIs mitjançant full de càlcul).

| Criteri d'Avaluació | Descripció i Indicador | Criteris Curriculars | Pes en UP5 |
| :--- | :--- | :---: | :---: |
| **a) Estructura Calc** | Estructuració adequada de la taula de pressupost en 4 columnes a LibreOffice Calc. | RA1 (h) | **20% (2,0 pts)** |
| **b) Formats Moneda i Cèl·la** | Aplicació de formats visuals corporatius i format de cel·la de moneda (`€`). | RA1 (h) | **15% (1,5 pts)** |
| **c) Fórmules i IVA (21%)** | Utilització correcta de fórmules automàtiques de suma, producte i càlcul de l'IVA (21%). | RA1 (h) | **25% (2,5 pts)** |
| **d) Inventari i Cost d'EPIs** | Confecció de l'inventari de recanvis i estimació del cost dels EPIs de protecció. | RA4 (c) | **20% (2,0 pts)** |
| **e) Resolució de Supòsits** | Resolució exacta dels 2 casos pràctics de clients sense errors aritmètics. | RA1 (h) · RA4 (c) | **20% (2,0 pts)** |

---

# 5.1 Costos d'un Taller: Base Imposable, IVA (21%) i Fórmules en Calc

En un taller informàtic professional els pressupostos es generen amb **LibreOffice Calc** perquè totes les operacions matemàtiques es calculen automàticament sense errors.

## Fórmules Essencials del teu Pressupost

| Concepte del Pressupost | Fórmula en LibreOffice Calc | Funció |
| --- | --- | --- |
| **Total de cada línia** | `=A10*C10` | Multiplica la *Quantitat* (`A10`) pel *Preu Unitari* (`C10`). |
| **Base Imposable (Subtotal)** | `=SUMA(D10:D16)` | Suma tots els totals de les línies del pressupost abans d'impostos. |
| **Quota d'IVA (21%)** | `=D17*0,21` *(o `=D17*21%`)* | Calcula l'impost del 21% sobre la Base Imposable. |
| **TOTAL PRESSUPOST (€)** | `=D17+D18` | Suma la Base Imposable més l'IVA per obtindre el preu final a pagar. |

---

# 5.2 Full d'Inventari i Plantilla de Pressupost Automatitzada

Obre **LibreOffice Calc** i crea un llibre anomenat `Pressupostos_Calc_ElTeuNom.ods` estructurat en fulls:

## Full 1: `Inventari_i_Tarifes`

Crea una taula amb almenys **6 peces de recanvi de maquinari** (Disc SSD 500GB, Memòria RAM 8GB DDR4, Font ATX 600W, Dissipador CPU, Targeta Wi-Fi, Kit Teclat/Ratolí) i **4 tarifes de mà d'obra** (Neteja tèrmica, Instal·lació SO + LibreOffice, Eliminació de virus, Hora de taller) amb format numèric de **Moneda (`€`)**.

## Full 2: `Plantilla_Pressupost`

1. Col·loca l'encapçalament amb el teu logotip `.PNG` , dades de la teua empresa i dades del client.
2. Crea la taula de **4 columnes** ( *Quantitat, Descripció, Preu Unitari €, Total €* ).
3. Introdueix les fórmules automàtiques a la columna *Total* i a les cel·les finals de **Base Imposable** , **IVA (21%)** i **TOTAL PRESSUPOST** .

---

# 5.3 Simulació Pràctica: Resolució de 2 Casos de Clients

En el **Full 3 (`Casos_Practics_Clients`)** del teu llibre de Calc, utilitza la teua plantilla automatitzada per resoldre aquests 2 encàrrecs reals:

> **✍️ Cas Pràctic 1 — Renovació d'Equips d'Oficina (Gestoria Catadau)**
> Un client té **2 ordinadors d'oficina** molt lents. Demana pressupost per instal·lar **2 discos SSD de 500GB**, ampliar amb **2 mòduls de 8GB de RAM DDR4** i realitzar **2 instal·lacions completes de Sistema Operatiu + LibreOffice**.

> **✍️ Cas Pràctic 2 — Reparació per Sobreescalfament i Font Cremada**
> Un client particular porta un equip que s'apaga sol i no encén. Necessita substituir **1 font d'alimentació ATX 600W**, instal·lar **1 dissipador de CPU nou**, fer **1 servei de neteja interna i canvi de pasta tèrmica** i comprar **1 kit de teclat i ratolí USB**.

---

## 📝 Quadern d'Activitats Pràctiques — Tasca 5

```flowchart LR
    Cost["💵 Cost de Peces i Mà d'Obra"] --> Marg["📈 Marge Comercial (+30%)"]
    Marg --> BI["🧾 Base Imposable = SUMA(...)"]
    BI --> IVA["🏛️ IVA (21%) = BI * 0,21"]
    BI & IVA --> Total["💰 TOTAL = BI + IVA"]
```

### 🎯 Resum d'Objectius de la Tasca
Un tècnic informàtic ha de saber calcular costos, aplicar marges comercials i emetre pressupostos clars. En aquesta tasca automatitzaràs la gestió econòmica del teu taller amb **LibreOffice Calc** utilitzant fórmules de suma, multiplicació i càlcul d'IVA.

Consulta el [Quadern d'Activitats Pràctiques de la Tasca 5](./up05actividades.html) per a seguir el procediment detallat pas a pas i consultar la llista de comprovació de qualitat.
