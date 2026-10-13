---
layout: default
title: "Quadern d'Activitats Pràctiques — Tasca 2: Identitat Corporativa i Papereria amb Writer"
course_root: ".."
badge: "1a Avaluació · RA2 (a-f) · 8 hores · 15% de la nota"
prev_url: "./up0203.html"
prev_label: "⬅️ 2.3 Carta de Serveis i Model de Taula de Pressupost"
next_url: "../up03/up03ras.html"
next_label: "3.0 RA i Criteris d'Avaluació ➡️"
---

# 🏢 Quadern d'Activitats Pràctiques — Tasca 2: Identitat Corporativa i Papereria

En la tasca anterior vas crear el nom i el logotip de la teua empresa. Ara és el moment de dissenyar la **papereria corporativa i la plantilla oficial** que farem servir per a emetre cartes de presentació, pressupostos i documents comercials amb **LibreOffice Writer**.

---

## 🗺️ Flux de Treball del Taller

```flowchart TD
    subgraph PageLayout ["Anatomia de la Plantilla Corporativa (.OTT)"]
        Top["Encapçalament: Logotip Transparent + Dades Fiscals"]
        Body["Cos: Marges 2 cm · Estils de Paràgraf · Taula de 4 Columnes"]
        Foot["Peu de Pàgina: Contacte · Adreça · Camp Dinàmic 'Pàgina X de Y'"]
        Top --> Body --> Foot
    end
```

---

## 🎯 Procediment Pràctic Pas a Pas

### Pas 2.1: Configuració de Pàgina Normalitzada (2 cm)
1. Obre **LibreOffice Writer** en un document en blanc.
2. Vés a `Format -> Estil de pàgina -> pestanya Pàgina`.
3. Estableix els marges a exactament **2,00 cm** a tots els costats (esquerre, dret, superior i inferior).

### Pas 2.2: Encapçalament i Peu de Pàgina Dinàmics
1. Activa l'encapçalament (`Format -> Estil de pàgina -> pestanya Capçalera -> Activa capçalera`).
2. Insereix el teu logotip corporatiu en `.PNG` transparent a la part esquerra, ajustant la seua alçada a uns $2 - 2,5\text{ cm}$.
3. Afegeix a la dreta el nom de l'empresa, el lema comercial i el CIF fictici en lletra menuda ($9 - 10\text{ pt}$).
4. Activa el peu de pàgina i afegeix l'adreça física del taller, telèfon, correu electrònic i la numeració dinàmica de pàgines (`Insereix -> Camp -> Número de pàgina` seguit de ` de ` i `Insereix -> Camp -> Total de pàgines`).
5. Guarda aquest document buit com a plantilla de Writer: `Fitxer -> Plantilles -> Guarda com a plantilla...` amb el nom `Plantilla_PaperCarta_ElTeuNom.ott`.

### Pas 2.3: Redacció de la Carta Comercial i Taula de Pressupost
1. Utilitzant la plantilla creada, redacta una carta formal de presentació adreçada a una empresa del barri oferint serveis de manteniment informàtic.
2. Crea una taula de **4 columnes**: *Quantitat*, *Descripció del Servei / Peça*, *Preu Unitari (€)* i *Total (€)*.
3. Aplica el teu color corporatiu a la fila de capçalera de la taula amb text en blanc i negreta.
4. Passa el corrector ortogràfic (`F7`) i exporta el document final a PDF.

---

## 📋 Llista d'Autoavaluació de Qualitat

| Criteri de Qualitat | Comprovació de l'Alumnat | Estat |
| :--- | :--- | :---: |
| **Marges normalitzats** | Els 4 marges estan fixats a exactament 2 cm. | ☐ Sí |
| **Camp de pàgina dinàmic** | La numeració canvia automàticament si el document té més d'una pàgina. | ☐ Sí |
| **Plantilla reutilitzable** | S'ha creat i comprovat l'arxiu `.ott`. | ☐ Sí |
| **Taula professional** | La taula de pressupost té capçalera corporativa i dades ben alineades. | ☐ Sí |
| **Ortografia i format** | Text 100% lliure d'errors ortogràfics i exportat a PDF. | ☐ Sí |

---

## 📦 Documents a Incloure en el Portfoli de l'Empresa
Guarda els següents fitxers a la carpeta del projecte:
1. `Plantilla_PaperCarta_ElTeuNom.ott` (arxiu de plantilla reutilitzable buida).
2. `Model_Pressupost_ElTeuNom.pdf` (document complet amb la carta i la taula de pressupost exportat en PDF).
