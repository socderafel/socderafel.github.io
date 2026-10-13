---
layout: default
title: "Quadern d'Activitats Pràctiques — Tasca 7: Catàleg de Serveis, RMA i Atenció al Client"
course_root: ".."
badge: "2n Trimestre · RA7 (a-f) · 8 hores · 15% de la nota"
prev_url: "./up0702.html"
prev_label: "⬅️ 7.2 Full de Recepció d'Incidències (RMA), Targetes i Rètol"
next_url: "../up08/up08ras.html"
next_label: "8.0 RA i Criteris d'Avaluació ➡️"
---

# 📋 Quadern d'Activitats Pràctiques — Tasca 7: Catàleg de Serveis i Full RMA

L'atenció al client és la clau de l'èxit comercial d'un taller. En aquesta tasca dissenyaràs el **Catàleg Comercial de Serveis a Preu Tancat**, el **Full de Recepció d'Incidències (RMA)** per a registrar equips avariats i la papereria comercial de contacte (targetes i rètol de façana).

---

## 🗺️ Flux de Treball del Taller

```flowchart TD
    Entrada["👤 Client arriba al taller"] --> RMA["📋 Full de Recepció RMA<br>(Dades client, símptomes, còpia signada)"]
    RMA --> Diag["🔬 Diagnosi Tècnica i Pressupost"]
    Diag --> Rep["🔧 Reparació i Control de Qualitat"]
    Rep --> Lliurament["🤝 Lliurament d'Equip i Factura amb Garantia"]
```

---

## 🎯 Procediment Pràctic Pas a Pas

### Pas 7.1: Disseny del Catàleg de Serveis Comercials (Writer / Draw)
1. Dissenya un díptic o full a dues cares amb els **Packs de Serveis a Preu Tancat** del teu taller:
   - *Pack Posada a Punt:* Neteja interna, canvi de pasta tèrmica i revisió de temperatures ($35\text{ €}$).
   - *Pack Reanimació:* Clonació a disc SSD d'alta velocitat + neteja de sistema operatiu ($65\text{ €}$ peces incloses).
   - *Pack Seguretat Total:* Neteja de malware, actualització de seguretat i còpia de fitxers d'usuari ($40\text{ €}$).

### Pas 7.2: Full de Recepció d'Equips i Garantia RMA
1. En LibreOffice Writer, dissenya el full que s'ompli quan un client deixa un ordinador:
   - Dades del client: Nom, telèfon i DNI.
   - Dades de l'equip: Marca, model, número de sèrie i contrasenya d'inici de sessió.
   - Símptomes reportats pel client (ex: *L'equip s'apaga als 10 minuts de jugar*).
   - Estat visual previ: Rascades, cops o falta de caragols (per a evitar reclamacions posteriors).
   - Requadre de signatura del client acceptant les condicions de diagnosi.

### Pas 7.3: Targetes de Visita Corporatives i Rètol Identificatiu
1. Dissenya en LibreOffice Draw la targeta de visita de l'empresa a mida estàndard ($85 \times 55\text{ mm}$): logotip, càrrec professional (*Tècnic en Sistemes Microinformàtics*), telèfon i adreça.
2. Dissenya el rètol corporatiu de la façana del taller en format horitzontal panoràmic.

---

## 📋 Llista d'Autoavaluació de Qualitat

| Criteri de Qualitat | Comprovació de l'Alumnat | Estat |
| :--- | :--- | :---: |
| **Catàleg comercial** | Presenta clarament els packs de servei amb preus tancats i beneficis. | ☐ Sí |
| **Full RMA complet** | Inclou dades tècniques, símptomes, estat físic i signatura. | ☐ Sí |
| **Targetes de visita** | Mida estàndard de 85x55 mm amb logotip net i dades de contacte. | ☐ Sí |
| **Rètol corporatiu** | Disseny visual d'alta resolució apte per a la façana del taller. | ☐ Sí |
| **Format PDF** | Tots els documents revisats ortogràficament i exportats a PDF. | ☐ Sí |

---

## 📦 Documents a Incloure en el Portfoli de l'Empresa
Guarda els següents fitxers a la carpeta del projecte:
1. `Cataleg_Serveis_ElTeuNom.pdf` (díptic o fullet comercial de serveis tècnics).
2. `Full_Incidencies_RMA_ElTeuNom.pdf` (model oficial de recepció d'ordinadors d'avaria).
3. `Targetes_i_Retol_ElTeuNom.pdf` (targetes de visita de taller i rètol identificatiu de façana).
