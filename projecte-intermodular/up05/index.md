---
layout: default
title: "UP5 — Gestió Econòmica i Pressupostos en LibreOffice Calc (Unitat Completa) — Projecte Intermodular (2n FPB)"
course_root: ".."
badge: "2a Avaluació · RA3 (a-f) · 8 hores · 15% de la nota"
prev_url: "../up04/index.html"
prev_label: "⬅️ 📘 UP4 Completa"
next_url: "./up05ras.html"
next_label: "5.0 RA i Criteris d'Avaluació ➡️"
---

# 📘 UP5 — Gestió Econòmica i Pressupostos en LibreOffice Calc — Unitat Completa

# 5.0 RA3 i Criteris d'Avaluació (UP5)

**Resultat d'Aprenentatge 3 (RA3):** Realitza la gestió econòmica elemental i l'elaboració de pressupostos del servei informàtic, aplicant fulls de càlcul ofimàtics i taules estructurades.

| Criteri d'Avaluació | Descripció i Indicador | Apartat de la Unitat | Pes en RA3 |
| --- | --- | --- | --- |
| **a) Estructura Calc** | Estructuració adequada de la taula de pressupost en 4 columnes a Calc. | [5.2 Inventari i Plantilla Calc](./up0502.md) | **20% (2,0 pts)** |
| **b) Formats Moneda** | Aplicació de formats visuals corporatius i de cel·la numèrica/moneda (`€`). | [5.2 Inventari i Plantilla Calc](./up0502.md) | **15% (1,5 pts)** |
| **c) Fórmules i IVA** | Utilització correcta de fórmules de suma, multiplicació i IVA (21%). | [5.1 Base Imposable i Fórmules](./up0501.md) | **25% (2,5 pts)** |
| **d) Inventari** | Confecció d'un inventari coherent de components, recanvis i mà d'obra. | [5.2 Inventari i Plantilla Calc](./up0502.md) | **15% (1,5 pts)** |
| **e) Supòsits Clients** | Resolució dels supòsits pràctics de pressupost simulat per a clients. | [5.3 Casos Pràctics de Clients](./up0503.md) | **15% (1,5 pts)** |
| **f) Exactitud** | Verificació de l'exactitud numèrica i absència d'errors de càlcul. | [Entrega Tasca 5 en Aules](./up05actividades.md) | **10% (1,0 pt)** |

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

# Activitat i Entrega de la Tasca 5 en Aules

> **⚠️ 📦 Fitxers obligatoris a pujar a la Tasca 5 d'Aules**
> 1. **Llibre de càlcul editable amb fórmules actives:** `Pressupostos_Calc_ElTeuNom.ods`
> 2. **Pressupostos exportats a PDF:** `Pressupostos_Calc_ElTeuNom.pdf`

## 📋 Codi HTML per a configurar la Tasca 5 en Aules (Professorat)

```html
<div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; font-family: sans-serif; line-height: 1.5;">
  <h3 style="color: #1e3a8a; margin-top: 0;">📊 FASE 5: Gestió Econòmica i Pressupostos Automatitzats amb Calc</h3>
  <p>Crea un llibre en <strong>LibreOffice Calc</strong> amb 3 fulls per automatitzar els pressupostos de la teua empresa:</p>
  <ol style="padding-left: 20px;">
    <li><strong>Full 1 (Inventari_i_Tarifes):</strong> 6 components de maquinari i 4 tarifes de mà d'obra amb format moneda (€).</li>
    <li><strong>Full 2 (Plantilla_Pressupost):</strong> Taula de 4 columnes amb fórmules automàtiques (<code>=A10*C10</code>), Base Imposable (<code>=SUMA(...)</code>), IVA 21% i Total.</li>
    <li><strong>Full 3 (Casos_Practics_Clients):</strong> Resolució dels 2 pressupostos simulats de clients.</li>
  </ol>
  <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; margin: 15px 0; border-radius: 4px;">
    <strong>📦 Fitxers a pujar a Aules:</strong> <code>Pressupostos_Calc_ElTeuNom.ods</code> (amb fórmules!) i <code>Pressupostos_Calc_ElTeuNom.pdf</code>
  </div>
</div>
```

---
