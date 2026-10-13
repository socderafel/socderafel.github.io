---
layout: default
title: "UP2 — Identitat Corporativa i Paper de Carta amb Writer (Unitat Completa) — Projecte Intermodular (2n FPB)"
course_root: ".."
badge: "1a Avaluació · RA2 (a-f) · 8 hores · 15% de la nota"
prev_url: "../up01/index.html"
prev_label: "⬅️ 📘 UP1 Completa"
next_url: "./up02ras.html"
next_label: "2.0 RA i Criteris d'Avaluació ➡️"
---

# 📘 UP2 — Identitat Corporativa i Paper de Carta amb Writer — Unitat Completa

# 2.0 RA2 i Criteris d'Avaluació (UP2)

**Resultat d'Aprenentatge 2 (RA2):** Confecciona la documentació administrativa, tècnica i de comunicació de l'empresa, utilitzant aplicacions ofimàtiques de processament de textos i plantilles corporatives.

| Criteri d'Avaluació | Descripció i Indicador | Apartat de la Unitat | Pes en RA2 |
| --- | --- | --- | --- |
| **a) Marges i Pàgina** | Configuració correcta de pàgina i marges (2,00 cm) a LibreOffice Writer. | [2.1 Configuració i Estils](./up0201.md) | **15% (1,5 pts)** |
| **b) Estils Corporatius** | Creació i aplicació d'estils de text (Títol 1) amb el color del logotip. | [2.1 Configuració i Estils](./up0201.md) | **15% (1,5 pts)** |
| **c) Paper de Carta** | Disseny del paper de carta amb encapçalament (logo) i peu de pàgina d'empresa. | [2.2 Paper de Carta i Plantilla](./up0202.md) | **25% (2,5 pts)** |
| **d) Plantilla Buida** | Desat i organització de la plantilla reutilitzable buida (`.ott` / `.odt`). | [2.2 Paper de Carta i Plantilla](./up0202.md) | **15% (1,5 pts)** |
| **e) Documentació** | Redacció de carta de serveis i taula de pressupost de 4 columnes sense faltes. | [2.3 Carta i Model Pressupost](./up0203.md) | **20% (2,0 pts)** |
| **f) Format PDF** | Exportació normalitzada a format PDF i incorporació ordenada al portfoli. | [Tasca 2 del Projecte](./up02actividades.md) | **10% (1,0 pt)** |

---

# 2.1 Configuració de Pàgina (2 cm) i Estils Corporatius en Writer

Ara crearem els documents que la teua empresa utilitzarà cada dia per a comunicar-se amb els clients mitjançant **LibreOffice Writer**.

## Pas 2.1 — Configuració del Full i Estils

1. Obre **LibreOffice Writer** i crea un document nou en blanc.
2. Vés a la configuració de la pàgina ( `Format > Estil de pàgina...` > pestanya `Pàgina` ) i posa tots els **marges a 2,00 cm** ( *Dalt, Baix, Dreta i Esquerra* ).
3. Modifica l'estil **"Títol 1"** (panell lateral d'Estils o tecla `F11` > clic dret sobre *Títol 1* > *Modifica...* ):
  - Tria una lletra atractiva i llegible (ex: **Arial** o **Roboto** , mida **18 pt** , en **negreta** ).
  - En la pestanya *Efectes de lletra* , posa el **color de la lletra exactament igual al color principal del teu logotip** .

---

# 2.2 Encapçalament, Peu de Pàgina i Plantilla Reutilitzable (.ott)

## Pas 2.2 — Disseny del Paper de Carta

1. **Activa l'encapçalament:** Vés a `Insereix > Encapçalament i peu de pàgina > Encapçalament > Estil de pàgina per defecte` .
2. **Dins de l'encapçalament:**
  - Insereix la imatge del teu logotip `.PNG` ( `Insereix > Imatge...` ).
  - Ajusta la mida perquè no ocupe massa (uns **2 o 3 cm d'alt** ) i alinea'l a l' **esquerra** .
  - A la **dreta** , posa el nom de la teua empresa en gran i el teu eslògan.
3. **Activa el peu de pàgina:** Vés a `Insereix > Encapçalament i peu de pàgina > Peu de pàgina` . Escriu-hi dades fictícies de la teua empresa: `Carrer de la Informàtica nº 12, 46190 Catadau (València) | Telèfon: 96 255 00 00 | Email: info@teuaempresa.com`
4. **Guarda com a plantilla:** Amb el cos del document buit, desa aquest fitxer com a plantilla reutilitzable ( `Plantilla_PaperCarta_ElTeuNom.ott` o `.odt` ).

---

# 2.3 Carta de Serveis i Model de Taula de Pressupost

## Pas 2.3 — Disseny d'una Factura / Pressupost sobre la Plantilla

1. Utilitzant la plantilla anterior, redacta una breu **Carta de Presentació i Condicions del Servei** adreçada als futurs clients del teu taller.
2. A continuació, crea una **Taula** ( `Taula > Insereix una taula...` ) per a fer pressupostos.
3. La taula ha de tindre exactament **4 columnes** :
  - `Quantitat`
  - `Descripció del servei / peça`
  - `Preu Unitari (€)`
  - `Total (€)`
4. Pinta el **fons de la primera fila** (la capçalera de la taula) amb el color corporatiu de la teua empresa i posa el text en **blanc i negreta** .
5. Passa el corrector ortogràfic ( `F7` ), desa el document i exporta'l a format **PDF** ( `Model_Pressupost_ElTeuNom.pdf` ).

---

## 📝 Quadern d'Activitats Pràctiques — Tasca 2

```flowchart TD
    subgraph PageLayout ["Anatomia de la Plantilla Corporativa (.OTT)"]
        Top["Encapçalament: Logotip Transparent + Dades Fiscals"]
        Body["Cos: Marges 2 cm · Estils de Paràgraf · Taula de 4 Columnes"]
        Foot["Peu de Pàgina: Contacte · Adreça · Camp Dinàmic 'Pàgina X de Y'"]
        Top --> Body --> Foot
    end
```

### 🎯 Resum d'Objectius de la Tasca
En la tasca anterior vas crear el nom i el logotip de la teua empresa. Ara és el moment de dissenyar la **papereria corporativa i la plantilla oficial** que farem servir per a emetre cartes de presentació, pressupostos i documents comercials amb **LibreOffice Writer**.

Consulta el [Quadern d'Activitats Pràctiques de la Tasca 2](./up02actividades.html) per a seguir el procediment detallat pas a pas i consultar la llista de comprovació de qualitat.
