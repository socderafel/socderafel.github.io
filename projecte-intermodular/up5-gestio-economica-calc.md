[⬅️ Anterior: Tasca 4 (UP4)](./up4-defensa-inicial-impress.md) | [📚 Índex del Mòdul](./) | [➡️ Següent: Tasca 6 (UP6)](./up6-seguretat-taller-raee.md)

# 📊 Tasca 5 (UP5) — Gestió Econòmica, Inventari i Pressupostos amb LibreOffice Calc

> 📌 **Dades de la Unitat de Programació 5 (UP5) — Inici de la 2a Avaluació**
> * **Resultat d'Aprenentatge:** **RA3.** Realitza la gestió econòmica elemental i l'elaboració de pressupostos del servei informàtic, aplicant fulls de càlcul ofimàtics i taules estructurades.
> * **Criteris d'Avaluació:** `RA3-a`, `RA3-b`, `RA3-c`, `RA3-d`, `RA3-e`, `RA3-f`
> * **Durada i Ponderació:** **8 hores** (4 sessions) · **15%** de la qualificació del curs (2a Avaluació).

---

## 1. Fonaments Teòrics: Com Calcula un Pressupost un Servei Tècnic?

En la primera avaluació vam dissenyar una taula bàsica en Writer, però en un taller informàtic real **els càlculs no es fan amb calculadora a mà** (perquè qualsevol error matemàtic ens faria perdre diners o cobrar de més al client). Per a això utilitzem el full de càlcul **LibreOffice Calc**.

### 1.1 Elements d'un Pressupost Informàtic
1. **Peces de recanvi (Maquinari):** El preu del component físic que substituïm o ampliem (ex: *Disc SSD NVMe 1TB, Memòria RAM DDR4 16GB, Font d'alimentació ATX 650W, Pasta tèrmica*).
2. **Mà d'obra (Servei Tècnic):** El temps i treball del tècnic per fer la reparació (ex: *1 hora de taller a 25,00 €/h*, o tarifes fixes com *Instal·lació de Sistema Operatiu + Paquet Ofimàtic: 30,00 €*).
3. **Import de línia:** Es calcula multiplicant la quantitat pel preu unitari:
   $$\text{Total Línia} = \text{Quantitat} \times \text{Preu Unitari}$$
4. **Subtotal (Base Imposable):** La suma de totes les línies del pressupost abans d'impostos.
5. **IVA (21%):** L'Impost sobre el Valor Afegit aplicable als productes i serveis informàtics a Espanya:
   $$\text{IVA} = \text{Base Imposable} \times 0,21$$
6. **TOTAL PRESSUPOST (IVA inclòs):**
   $$\text{Total a Pagar} = \text{Base Imposable} + \text{IVA}$$

### 1.2 Fórmules Essencials en LibreOffice Calc
Recorda que en Calc **tota fórmula comença obligatòriament pel signe igual (`=`)**:

| Operació que volem fer | Fórmula en LibreOffice Calc | Explicació pràctica |
| :--- | :--- | :--- |
| **Multiplicar Quantitat $\times$ Preu** | `=A10*C10` | Multiplica el valor de la cel·la `A10` (Quantitat) per `C10` (Preu Unitari). |
| **Sumar totes les línies (Base Imposable)** | `=SUMA(D10:D16)` *(o `=SUM(D10:D16)`)* | Suma automàticament tots els imports des de la fila 10 fins a la 16. |
| **Calcular el 21% d'IVA** | `=D17*21%` *(o `=D17*0,21`)* | Calcula el 21% sobre la cel·la `D17` (on tenim la Base Imposable). |
| **Total Final amb IVA** | `=D17+D18` | Suma la Base Imposable (`D17`) més la quota d'IVA (`D18`). |

---

## 2. Guia Pràctica Pas a Pas

Obre **LibreOffice Calc** i desa el llibre amb el nom `Gestio_Pressupostos_ElTeuNom.ods`. Aquest fitxer ha de tindre **3 pestanyes (fulls)** a la part inferior:

---

### 📦 Pas 5.1 — Full 1: `Inventari_i_Tarifes`
1. Canvia el nom del primer full a **`Inventari_i_Tarifes`**.
2. Insereix el teu logotip i el nom de l'empresa a la part superior.
3. Crea una taula amb el teu **Catàleg d'Inventari i Mà d'Obra** amb almenys **10 ítems** (6 components de maquinari i 4 serveis de mà d'obra):

| Codi | Categoria | Concepte / Descripció del Component o Servei | Preu Unitari (Sense IVA) |
| :---: | :---: | :--- | :---: |
| `HW-01` | Maquinari | Disc sòlid SSD 500GB SATA / NVMe | 42,00 € |
| `HW-02` | Maquinari | Mòdul Memòria RAM 8GB DDR4 3200MHz | 24,50 € |
| `HW-03` | Maquinari | Font d'alimentació ATX 600W 80+ Bronze | 48,00 € |
| `HW-04` | Maquinari | Ventilador / Dissipador CPU + Pasta tèrmica | 22,00 € |
| `HW-05` | Maquinari | Targeta de xarxa Wi-Fi 6 PCIe / USB | 19,50 € |
| `HW-06` | Maquinari | Teclat i Ratolí d'oficina USB ergonòmic | 18,00 € |
| `MO-01` | Mà d'obra | Neteja interna de pols i canvi de pasta tèrmica | 25,00 € |
| `MO-02` | Mà d'obra | Instal·lació de Sistema Operatiu + LibreOffice | 30,00 € |
| `MO-03` | Mà d'obra | Eliminació de virus i còpia de seguretat de dades | 35,00 € |
| `MO-04` | Mà d'obra | Hora de diagnòstic i reparació de maquinari al taller | 25,00 € |

4. Aplica el **Format de Moneda (`€` amb 2 decimals)** a tota la columna de preus (`Format` > `Format numèric` > `Moneda`).

---

### 🧮 Pas 5.2 — Full 2: `Plantilla_Pressupost`
1. Crea un segon full anomenat **`Plantilla_Pressupost`**.
2. A la capçalera, col·loca el teu **logotip `.PNG`**, les dades de la teua empresa, un quadre per a les **Dades del Client** (*Nom, DNI/NIF, Telèfon, Data i Nº de Pressupost*).
3. Crea l'estructura de **4 columnes**:
   * Columna A: **Quantitat**
   * Columna B: **Descripció del servei / peça**
   * Columna C: **Preu Unitari (€)**
   * Columna D: **Total (€)** *(amb la fórmula `=A10*C10` arrossegada a totes les files)*
4. Al peu de la taula, crea les tres cel·les finals amb fórmules automàtiques:
   * **BASE IMPOSABLE (€):** `=SUMA(...)`
   * **IVA (21%):** `=Cel·laBase*0,21`
   * **TOTAL PRESSUPOST (€):** `=Cel·laBase+Cel·laIVA` (destacat en gran, negreta i amb el color corporatiu).

---

### 🛠️ Pas 5.3 — Full 3: `Casos_Practics_Clients` (Simulació Real)
Duplica la teua plantilla i resol aquests **2 supòsits reals de clients** que entren a la teua botiga:

* **Supòsit Client 1 (Oficina Gestoria Catadau):**  
  *"Tinc 2 ordinadors d'oficina que van molt lents en obrir documents. Vull posar un disc SSD de 500GB i ampliar 8GB de RAM a cadascun dels 2 ordinadors, i que em reinstal·leu el Sistema Operatiu i LibreOffice en tots dos."*
* **Supòsit Client 2 (Particular — Equips sobreescalfats):**  
  *"L'ordinador de casa s'apaga sol quan porta 10 minuts encés i fa molt de soroll. Necessite canviar la font d'alimentació, posar un dissipador nou, fer neteja interna de pols amb pasta tèrmica i comprar 1 kit de teclat i ratolí nou."*

---

## 📦 Entrega de la Tasca 5 en Aules

> ⚠️ **Quins 2 fitxers has de pujar a la Tasca 5 d'Aules?**
> 1. 📊 **El llibre de càlcul editable amb les fórmules actives:** `Pressupostos_Calc_ElTeuNom.ods` *(Important: el professor comprovarà que hi ha fórmules i no números escrits a mà!).*
> 2. 📑 **El document exportat en PDF amb els pressupostos resolts:** `Pressupostos_Calc_ElTeuNom.pdf`.

---

## 📊 Rúbrica d'Avaluació de la Tasca 5 (RA3 — Base 10)

| Criteri | Indicador d'assoliment | Pes | Puntuació |
| :---: | :--- | :---: | :---: |
| **RA3-a** | Estructuració correcta de la taula de pressupost en les 4 columnes reglamentàries a Calc. | 20% | **2,0 punts** |
| **RA3-b** | Aplicació dels colors corporatius, vores netes i format de cel·la de moneda (`0,00 €`). | 15% | **1,5 punts** |
| **RA3-c** | Ús exacte de fórmules automàtiques de multiplicació, `SUMA` i càlcul d'IVA (21%). | 25% | **2,5 punts** |
| **RA3-d** | Elaboració completa de l'inventari coherent de components, recanvis i tarifes de mà d'obra. | 15% | **1,5 punts** |
| **RA3-e** | Resolució correcta dels 2 supòsits pràctics de pressupost simulat per a clients. | 15% | **1,5 punts** |
| **RA3-f** | Verificació de l'exactitud numèrica i entrega dels fitxers `.ods` i `.pdf`. | 10% | **1,0 punt** |
| **TOTAL** | **Qualificació global de la Unitat de Programació 5 (RA3)** | **100%** | **10,0 punts** |
