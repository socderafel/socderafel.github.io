[⬅️ Anterior: Tasca 1 (UP1)](./up1-marca-i-logotip.md) | [📚 Índex del Mòdul](./) | [➡️ Següent: Tasca 3 (UP3)](./up3-manual-prl-oficina.md)

# 📄 Tasca 2 (UP2) — Identitat Corporativa i Paper de Carta amb LibreOffice Writer

> 📌 **Dades de la Unitat de Programació 2 (UP2)**
> * **Resultat d'Aprenentatge:** **RA2.** Confecciona la documentació administrativa, tècnica i de comunicació de l'empresa, utilitzant aplicacions ofimàtiques de processament de textos i plantilles corporatives.
> * **Criteris d'Avaluació:** `RA2-a`, `RA2-b`, `RA2-c`, `RA2-d`, `RA2-e`, `RA2-f`
> * **Durada i Ponderació:** **8 hores** (4 sessions) · **15%** de la qualificació del curs (1a Avaluació).

---

## 1. Fonaments Teòrics: La Papereria Corporativa d'una Empresa

Qualsevol empresa seriosa de manteniment informàtic no escriu els seus pressupostos o cartes en un full en blanc sense format. Utilitza un **Paper de Carta Corporatiu** guardat com a **Plantilla Reutilitzable**:

1. **Marges normalitzats (2 cm):** Tant a dalt, baix, esquerra com dreta, per garantir que cap impressora talle el text i aprofitar bé l'espai del full DIN A4.
2. **Estils automàtics (`F11`):** En lloc de canviar la lletra manualment cada vegada, modifiquem l'estil **Títol 1** amb la tipografia i el color exacte del nostre logotip.
3. **Encapçalament i Peu de pàgina:** Són zones fixes que es repeteixen automàticament en totes les pàgines del document:
   * A l'**encapçalament** va el logotip `.PNG` i el nom comercial.
   * Al **peu de pàgina** van les dades fiscals/contacte (adreça, telèfon, email, web).
4. **Plantilla de LibreOffice Writer (`.ott`):** Quan desem un document com a plantilla, cada vegada que l'obrim es crea un document nou amb el disseny intacte sense risc d'esborrar l'original.

---

## 2. Guia Pràctica Pas a Pas

### 📐 Pas 2.1 — Configuració del Full i Estils Corporatius
1. Obre **LibreOffice Writer** i crea un document nou en blanc.
2. Vés a la configuració de la pàgina (`Format` > `Estil de pàgina...` > pestanya `Pàgina`).
3. Posa tots els **marges a 2,00 cm** (*Esquerra, Dreta, A dalt i A baix*) i prem *D'acord*.
4. Obre el panell d'**Estils** (prement la tecla `F11` o a la barra lateral dreta):
   * Fes clic dret damunt de l'estil **Títol 1** i selecciona `Modifica...`.
   * A la pestanya `Tipus de lletra`, tria una font clara i moderna (ex: **Arial**, **Roboto** o **Liberation Sans**), estil **Negreta** i mida **18 pt**.
   * A la pestanya `Efectes de lletra`, canvia el **Color de la lletra** perquè siga exactament igual al color principal del teu logotip.

---

###  letterhead Pas 2.2 — Encapçalament, Peu de pàgina i Plantilla (`.ott`)
1. **Activa l'encapçalament:** Vés a `Insereix` > `Encapçalament i peu de pàgina` > `Encapçalament` > `Estil de pàgina per defecte`.
2. **Dins de l'encapçalament:**
   * Insereix la imatge del teu logotip en format `.PNG` (`Insereix` > `Imatge...`).
   * Ajusta la mida del logotip perquè no ocupe massa espai (uns **2,5 o 3 cm d'alçada**) i alinea'l a l'**esquerra**.
   * A la **dreta** de l'encapçalament, escriu el nom de la teua empresa en gran i el teu eslògan tècnic a sota.
   * Pots afegir una vora inferior fina amb el color corporatiu per separar l'encapçalament del cos del document.
3. **Activa el peu de pàgina:** Vés a `Insereix` > `Encapçalament i peu de pàgina` > `Peu de pàgina` > `Estil de pàgina per defecte`.
   * Escriu-hi en una línia centrada (mida 9 o 10 pt, color gris fosc) les dades de contacte de la teua empresa:
   ```text
   Carrer de la Informàtica, nº 10 · 46190 Catadau (València) | Telèfon: 96 255 00 00 | Email: info@lateuaempresa.com
   ```
4. **Guarda com a Plantilla Reutilitzable:**
   * Amb el cos del document completament buit, vés a `Fitxer` > `Anomena i desa...` (o `Fitxer` > `Plantilles` > `Desa com a plantilla...`).
   * En *Tipus de fitxer*, selecciona **Plantilla de text ODF (`.ott`)** (o desa una còpia base `.odt`) amb el nom: `Plantilla_PaperCarta_ElTeuNom.ott`.

---

### 📋 Pas 2.3 — Redacció de Carta de Presentació i Disseny de Model de Pressupost
Utilitzant la plantilla anterior que acabes de crear:

1. **Primera part del document — Carta de Presentació i Condicions:**
   * Escriu un títol amb l'estil *Títol 1*: `CARTA DE PRESENTACIÓ I CONDICIONS DEL SERVEI TÈCNIC`.
   * Redacta un breu text de benvinguda (1 paràgraf) explicant als futurs clients de Catadau i la comarca quins serveis informàtics ofereix el teu taller (reparació d'equips, neteja de virus, ampliació de memòria RAM/SSD, instal·lació d'ofimàtica...).
   * Afig 3 condicions bàsiques del teu taller (ex: *1. Pressupost previ sense compromís; 2. Garantia de 6 mesos en totes les reparacions; 3. Termini màxim d'entrega de 48-72 hores*).

2. **Segona part del document — Disseny d'una Taula de Factura / Pressupost:**
   * Escriu amb l'estil *Títol 1*: `MODEL DE PRESSUPOST D'ASSISTÈNCIA TÈCNICA`.
   * Insereix una **Taula** (`Taula` > `Insereix una taula...`) de **4 columnes** i **6 files**.
   * A la primera fila (capçalera), escriu els títols de les 4 columnes:
     | Quantitat | Descripció del servei / peça | Preu Unitari (€) | Total (€) |
     | :---: | :--- | :---: | :---: |
   * **Format corporatiu de la taula:**
     * Selecciona la primera fila, pinta el **fons de les cel·les** amb el color principal de la teua empresa i posa el **text en color blanc i negreta**.
     * Ompli 3 files d'exemple amb serveis reals (ex: *1 | Disc dur SSD 500GB Kingston | 45,00 € | 45,00 €*, *1 | Muntatge i clonació de sistema operatiu | 30,00 € | 30,00 €*).
3. **Revisió ortogràfica i Exportació a PDF:**
   * Passa el corrector ortogràfic prement `F7`.
   * Desa el document editable (`Model_Pressupost_ElTeuNom.odt`) i exporta'l a **PDF** (`Fitxer` > `Exporta com a` > `Exporta com a PDF...`) amb el nom `Model_Pressupost_ElTeuNom.pdf`.

---

## 📦 Entrega de la Tasca 2 en Aules

> ⚠️ **Quins 2 fitxers has de pujar a la Tasca 2 d'Aules?**
> 1. 📄 **La plantilla corporativa buida:** `Plantilla_PaperCarta_ElTeuNom.ott` *(o `.odt`)*.
> 2. 📑 **El document complet amb la Carta i la Taula de Pressupost exportat en PDF:** `Model_Pressupost_ElTeuNom.pdf`.

---

## 📊 Rúbrica d'Avaluació de la Tasca 2 (RA2 — Base 10)

| Criteri | Indicador d'assoliment | Pes | Puntuació |
| :---: | :--- | :---: | :---: |
| **RA2-a** | Configuració exacta de pàgina i marges (2,00 cm als 4 costats) a LibreOffice Writer. | 15% | **1,5 punts** |
| **RA2-b** | Modificació i aplicació de l'estil *Títol 1* amb tipografia i color coincident amb el logo. | 15% | **1,5 punts** |
| **RA2-c** | Disseny net del paper de carta amb encapçalament (logo `.PNG` + nom) i peu de pàgina complet. | 25% | **2,5 punts** |
| **RA2-d** | Desat i organització correcta de la plantilla reutilitzable buida (`.ott` / `.odt`). | 15% | **1,5 punts** |
| **RA2-e** | Redacció de la carta de serveis i taula de pressupost de 4 columnes sense faltes d'ortografia. | 20% | **2,0 punts** |
| **RA2-f** | Exportació normalitzada a format `.PDF` i càrrega ordenada a Aules. | 10% | **1,0 punt** |
| **TOTAL** | **Qualificació global de la Unitat de Programació 2 (RA2)** | **100%** | **10,0 punts** |
