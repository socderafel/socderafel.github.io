---
layout: default
title: "UD1: Introducció als Llenguatges de Marques i Tecnologies XML — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD1"
next_url: "ut0101.html"
next_label: "1.1 ➡️"
---

# UD1: Introducció als Llenguatges de Marques i Tecnologies XML

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-lm" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-xml" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-val" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-fmt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm1)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">LLENGUATGES DE MARQUES, ESTRUCTURACIÓ XML I FORMATS DE DADES</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Sintaxi XML, documents ben formats, validació amb DTD i XSD, espais de noms i comparativa amb JSON i YAML</text>

  <!-- Bloc 1: Llenguatges de Marques -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-lm)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🏷️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Concepte LLMM</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Tipologia &amp; Origen</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Presentació vs Estructura</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Evolució SGML -&gt; XML</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Marques semàntiques</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Separació contingut/estil</text>
  </g>

  <!-- Bloc 2: Sintaxi XML -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-xml)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Sintaxi XML</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Ben Format (Well-Formed)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Element arrel únic</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Tancament estricte d'etiquetes</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Atributs entre cometes</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Pròleg XML &amp; UTF-8</text>
  </g>

  <!-- Bloc 3: Validació DTD & XSD -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-val)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Validació Esquema</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Ben Format vs Vàlid</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• DTD: Gramàtica clàssica</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• XML Schema (XSD): Tipat fort</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Espais de noms (Namespaces)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Restriccions &amp; Regex</text>
  </g>

  <!-- Bloc 4: Formats Moderns -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fmt)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Formats de Dades</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">JSON, YAML &amp; MD</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• JSON: Estàndard APIs Web</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• YAML: Configuració neta</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Markdown: Text enriquit</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Sobrecàrrega &amp; Rendiment</text>
  </g>
</svg>
</div>

Fonaments dels llenguatges de marques (LLMM), evolució històrica des de SGML fins a XML, regles sintàctiques de documents ben formats, validació estructural mitjançant DTD i XML Schema (XSD), resolució de col·lisions mitjançant espais de noms (*Namespaces*) i comparativa d'eficiència amb formats moderns d'intercanvi de dades com JSON i YAML.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **1.1** | **Concepte, evolució i classificació dels llenguatges de marques** | [**Llegir apartat →**](./ut0101.html) |
| **1.2** | **Llenguatge XML: estructura, sintaxi i documents ben formats** | [**Llegir apartat →**](./ut0102.html) |
| **1.3** | **Validació de documents XML: DTD (Document Type Definition)** | [**Llegir apartat →**](#13-validació-de-documents-xml-dtd-document-type-definition) |
| **1.4** | **Esquemes XML avançats: XML Schema (XSD) i espais de noms** | [**Llegir apartat →**](#14-esquemes-xml-avançats-xml-schema-xsd-i-espais-de-noms) |
| **1.5** | **Formats alternatius d'intercanvi de dades: JSON, YAML i Markdown** | [**Llegir apartat →**](#15-formats-alternatius-dintercanvi-de-dades-json-yaml-i-markdown) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 1.1 Concepte, evolució i classificació dels llenguatges de marques

Un **llenguatge de marques** (*Markup Language*) és una forma de codificar un document que combina el contingut textual amb anotacions addicionals (anomenades **etiquetes** o *tags*) que descriuen l'estructura, el significat semàntic o el format de presentació del text.

### Classificació dels llenguatges de marques:
1. **Marques de Presentació (*Presentation Markup*):**
   - Indiquen com ha de visualitzar-se el document físicament a la pantalla o en paper (tipografia, color, negreta). Exemples: RTF, Microsoft Word intern, elements antics d'HTML com `<font>` o `<b>`.
2. **Marques de Procediment (*Procedural Markup*):**
   - Incorporen ordres de processament que indiquen al programari com interpretar o compilar el text. Exemple: $\LaTeX$, PostScript.
3. **Marques Descriptives o Semàntiques (*Descriptive/Semantic Markup*):**
   - **La màxima fita de l'enginyeria web.** Identifiquen *què significa* cada dada de forma completament independent de com es mostrarà a l'usuari. Exemples: XML, HTML5 semàntic (`<article>`, `<header>`).

---

### Evolució històrica:
- **GML (1969) & SGML (1986 - ISO 8879):** *Standard Generalized Markup Language*. Llenguatge mare extremadament potent però tan complex que requeria programari molt pesat per ser interpretat.
- **HTML (1991 - Tim Berners-Lee):** Una aplicació concreta de SGML orientada a compartir hipertext a Internet. Molt senzill però amb etiquetes fixes i sense rigor sintàctic.
- **XML (1998 - W3C):** *Extensible Markup Language*. Un subconjunt simplificat de SGML que conserva tota la flexibilitat per crear etiquetes personalitzades, eliminant la complexitat innecessària.

---

## 1.2 Llenguatge XML: estructura, sintaxi i documents ben formats

**XML** és un metallenguatge: no defineix una llista fixa d'etiquetes, sinó un conjunt de **regles sintàctiques universals** perquè qualsevol organització o desenvolupador puga inventar el seu propi vocabulari de dades (com SVG per a gràfics, MathML per a matemàtiques o MusicXML per a partitures).

### Estructura general d'un document XML:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Comentari: Catàleg de maquinari del taller -->
<cataleg>
    <producte codi="PRD-01" disponible="true">
        <nom>Processador Ryzen 7</nom>
        <preu moneda="EUR">289.90</preu>
        <especificacions>
            <nuclis>8</nuclis>
            <fils>16</fils>
        </especificacions>
    </producte>
</cataleg>
```

---

### Les 6 Regles d'Or d'un Document Ben Format (*Well-Formed*):
Un document XML només pot ser processat per un analitzador (*parser*) si és **sintàcticament ben format**:
1. **Element arrel únic (*Root Element*):** Tot el document ha d'estar contingut dins d'una única etiqueta principal que engloba totes les altres.
2. **Tancament estricte:** Tota etiqueta que s'obre s'ha de tancar obligatòriament (`<nom>...</nom>`), o tancar-se sobre ella mateixa si és buida (`<salt_linia/>`).
3. **Sensibilitat a majúscules (*Case-Sensitive*):** `<Producte>` i `<producte>` són dues etiquetes completament diferents. L'obertura i el tancament han de coincidir exactament.
4. **Niament correcte (*Nesting*):** Les etiquetes s'han de tancar en ordre invers al d'obertura (estil nines russes). Està prohibit encavalcar etiquetes (`<a><b></a></b>` és il·legal).
5. **Atributs sempre entre cometes:** Els valors dels atributs han d'anar obligatòriament envoltats per cometes dobles (`"valor"`) o simples (`'valor'`).
6. **Caràcters especials reservats (Entitats predefinides):** Si un text conté caràcters reservats pel llenguatge, cal substituir-los per la seua entitat o usar blocs `<![CDATA[ ... ]]>`:
   - `<` $\to$ `&lt;`
   - `>` $\to$ `&gt;`
   - `&` $\to$ `&amp;`
   - `"` $\to$ `&quot;`
   - `'` $\to$ `&apos;`

---

## 1.3 Validació de documents XML: DTD (Document Type Definition)

Un document pot ser sintàcticament ben format però contenir errors greus d'estructura de negoci (per exemple, oblidar el preu d'un producte o posar una lletra on deuria haver-hi un número). Per garantir que el document compleix una estructura pactada, s'aplica la **validació**.

- **Document Ben Format:** Compleix les regles sintàctiques generals d'XML.
- **Document Vàlid:** Està ben format i **a més compleix estrictament les regles definides en una gramàtica o esquema (DTD o XSD)**.

### Definició de Tipus de Document (DTD)
És el mecanisme clàssic heretat de SGML. Especifica quins elements poden aparèixer i amb quina cardinalitat:

```dtd
<!DOCTYPE cataleg [
    <!ELEMENT cataleg (producte+)>
    <!ELEMENT producte (nom, preu, especificacions?)>
    <!ATTLIST producte 
        codi ID #REQUIRED
        disponible (true|false) "true">
    <!ELEMENT nom (#PCDATA)>
    <!ELEMENT preu (#PCDATA)>
    <!ELEMENT especificacions (nuclis, fils)>
    <!ELEMENT nuclis (#PCDATA)>
    <!ELEMENT fils (#PCDATA)>
]>
```

- **Operadors de concurrència i cardinalitat en DTD:**
  - `,` (Seqüència): Ordre estricte d'elements (`nom, preu`).
  - `|` (Bifurcació): Tria exclusiva (`A | B`).
  - `?`: Zero o una vegada (opcional).
  - `*`: Zero o múltiples vegades.
  - `+`: Una o múltiples vegades (obligatori almenys un).
  - `#PCDATA`: Text analitzable (*Parsed Character Data*).

> [!WARNING]
> **Limitacions de les DTDs:**
> 1. No suporten tipus de dades rics (tot el text és `#PCDATA`; no pot distingir un enter d'una data o d'un número decimal).
> 2. No utilitzen sintaxi XML (tenen una sintaxi pròpia aliena).
> 3. No suporten espais de noms (*Namespaces*).

---

## 1.4 Esquemes XML avançats: XML Schema (XSD) i espais de noms

Per superar les carències de les DTDs, el W3C va estandarditzar **XML Schema (XSD - *XML Schema Definition*)**:
- S'escriu utilitzant la **mateixa sintaxi d'etiquetes XML**.
- Incorpora un **sistema de tipus fort** (més de 40 tipus primitius: `xs:integer`, `xs:decimal`, `xs:date`, `xs:boolean`, `xs:string`).
- Permet crear **tipus derivats amb restriccions** (mínims, màxims, expressions regulars *regex*, patrons de format).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="preu">
        <xs:simpleType>
            <xs:restriction base="xs:decimal">
                <xs:minExclusive value="0.0"/>
                <xs:maxInclusive value="9999.99"/>
            </xs:restriction>
        </xs:simpleType>
    </xs:element>
</xs:schema>
```

---

### Espais de Noms (*Namespaces* - `xmlns`)
Quan un document XML combina vocabularis provinents d'organitzacions diferents, poden produir-se **col·lisions de noms** (per exemple, l'etiqueta `<taula>` referida a un moble d'una botiga enfront de `<taula>` com a estructura gràfica HTML).

Els **espais de noms** solucionen aquest conflicte assignant un prefix associat a un identificador universal URI únic:
```xml
<arrel xmlns:moble="http://empresa.com/mobles"
       xmlns:html="http://www.w3.org/1999/xhtml">
    <moble:taula>
        <moble:fusta>Roure</moble:fusta>
    </moble:taula>
    <html:taula>
        <html:tr><html:td>Dada</html:td></html:tr>
    </html:taula>
</arrel>
```

---

## 1.5 Formats alternatius d'intercanvi de dades: JSON, YAML i Markdown

Tot i que XML és la base de documents complexes i missatgeria corporativa (SOAP, facturació electrònica Facturae), en el desenvolupament web modern conviu amb formats molt més lleugers:

### 1. JSON (*JavaScript Object Notation*)
- Format de text basat en la sintaxi de literals d'objectes de JavaScript (RFC 8259).
- **L'estàndard indiscutible de les APIs REST modernes.**
- Tipus suportats: Nombres, Cadenes, Booleans, Nuls, Objectes (`{}`) i Llistes/Arrays (`[]`).

```json
{
  "codi": "PRD-01",
  "nom": "Processador Ryzen 7",
  "preu": 289.90,
  "disponible": true,
  "etiquetes": ["cpu", "hardware", "gaming"]
}
```

---

### 2. YAML (*YAML Ain't Markup Language*)
- Format humanament llegible optimitzat per a fitxers de configuració (Docker Compose, Kubernetes, GitHub Actions).
- Utilitza **sagnats i espais en blanc estrictes** en lloc de claus o etiquetes.

```yaml
codi: PRD-01
nom: Processador Ryzen 7
preu: 289.90
disponible: true
etiquetes:
  - cpu
  - hardware
  - gaming
```

---

### Matriu comparativa: XML vs JSON vs YAML
| Criteri | XML | JSON | YAML |
| :--- | :---: | :---: | :---: |
| **Llegibilitat humana** | Mitjana (moltes etiquetes de tancament) | Alta | Molt alta (net, sense claus) |
| **Sobrecàrrega de mida (*Overhead*)** | **Molt alta** (repeteix noms en tancar) | Baixa | Molt baixa |
| **Suport de tipus de dades** | Només text pur (requereix XSD) | Nombres, cadenes, booleans, arrays | Ric (inclou dates i referències) |
| **Validació d'esquema** | Molt madura (XSD, DTD, Schematron) | JSON Schema | Kubeval / Esquemes personalitzats |
| **Suport de comentaris** | Sí (`<!-- -->`) | **No** (prohibit per disseny RFC) | Sí (`#`) |
| **Àmbit d'ús principal** | Facturae, SVG, OpenOffice, feeds RSS | APIs REST, bases de dades NoSQL | Fitxers de configuració DevOps |

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Càlcul de sobrecàrrega de transmissió (*Overhead*) XML vs JSON vs YAML
Es vol transmetre per xarxa el registre de 1.000 lectures d'un sensor meteorològic amb les dades:
`id=128`, `ts="2026-10-13T16:00:00Z"`, `temp=23.5`, `hum=65`.

1. **Format XML:**
   ```xml
   <lectura id="128"><ts>2026-10-13T16:00:00Z</ts><temp>23.5</temp><hum>65</hum></lectura>
   ```
   - Compta el nombre de caràcters (bytes en UTF-8) d'una sola lectura: $\dots \text{ bytes}$.
   - Calcula el volum total de les 1.000 lectures en kilobytes: $\dots \text{ KB}$.
2. **Format JSON:**
   ```json
   {"id":128,"ts":"2026-10-13T16:00:00Z","temp":23.5,"hum":65}
   ```
   - Compta el nombre de caràcters d'una lectura JSON: $\dots \text{ bytes}$.
   - Calcula el volum per a les 1.000 lectures en kilobytes: $\dots \text{ KB}$.
3. **Anàlisi comparativa:**
   - Quina reducció percentual de trànsit de dades suposa utilitzar JSON enfront d'XML en aquesta xarxa IoT de baix consum?

#### Exercici 2: Detecció d'errors sintàctics en documents XML
Analitza el següent fragment de codi XML i localitza els **4 errors greus** que impedeixen que siga un document ben format (*Well-Formed*):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<llibre codi=L-99>
    <titol>Aprendre XML i JSON</titol>
    <autor>Miquel Costa & Pau Fabra</autor>
    <preu>25.50</Preu>
    <publicat>2025</publicat>
<llibre>
```

1. Identifica cadascun dels 4 errors sintàctics citant la regla d'or violada.
2. Escriu el document corregit perquè siga 100% ben format.

#### Exercici 3: Disseny de gramàtica DTD amb operadors de cardinalitat
Dissenya la DTD completa per a una llista de reproducció musical (`playlist`) que compleix els següents requisits:
- L'arrel `playlist` conté obligatòriament el `titol_llista` i una o múltiples `cançons`.
- Cada `canço` té un atribut identificador únic obligatori `id_canco` i un atribut opcional `durada_segons`.
- Dins de cada `canço` hi ha un `titol`, un o múltiples `artistes`, i opcionalment un `album`.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'esquema XML Schema (XSD) amb restriccions
- **Objectiu:** Crear un document XSD que valide un catàleg d'alumnes amb tipat fort i expressions regulars (*Regex*).
- **Procediment de taller:**
  1. Dissenya el fitxer `alumnes.xsd` que valide:
     - El NIF ha de complir el patró d'exactament 8 números i una lletra majúscula: `[0-9]{8}[A-Z]`.
     - L'edat ha de ser un enter comprès estrictament entre 16 i 99 anys.
     - La nota mitjana ha de ser un decimal entre 0.0 i 10.0.
  2. Redacta el document XML `alumnes.xml` associat vinculant l'esquema mitjançant `xmlns:xsi` i `xsi:noNamespaceSchemaLocation="alumnes.xsd"`.
  3. Valida el document mitjançant l'eina de línia d'ordres `xmllint` a la consola de Linux/Windows:
     ```bash
     xmllint --noout --schema alumnes.xsd alumnes.xml
     ```
  4. Comprova que si es modifica el NIF per una cadena incorrecta, `xmllint` llança un error de validació a l'instant.

#### Repte 2: Resolució de conflicte d'espais de noms (Namespaces)
- **Objectiu:** Combinar dades d'una comanda amb codi de presentació XHTML en un mateix fitxer XML.
- **Procediment de taller:**
  1. Redacta un document XML que declare dos espais de noms:
     - Prefix `cmd` per al vocabulari de comandes de l'empresa (`urn:empresa:comandes`).
     - Prefix `html` per a marques web estàndard (`http://www.w3.org/1999/xhtml`).
  2. Fes servir l'etiqueta `<cmd:taula>` per representar una taula física d'articles i `<html:table>` per generar una taula de resum visual.
  3. Verifica la bona formació del document mitjançant un navegador web o analitzador XML.

#### Repte 3: Conversió i validació creuada XML $\leftrightarrow$ JSON amb Python
- **Objectiu:** Automatitzar la conversió de dades estructurades entre formats.
- **Procediment de taller:**
  1. Crea un fitxer de dades `configuracio.xml`.
  2. Escriu un script senzill de Python `convertir.py` utilitzant la llibreria estàndard `xmltodict` i `json`:
     ```python
     import xmltodict, json

     with open('configuracio.xml', 'r', encoding='utf-8') as f:
         dades = xmltodict.parse(f.read())

     with open('configuracio.json', 'w', encoding='utf-8') as f:
         json.dump(dades, f, indent=4, ensure_ascii=False)

     print("Conversió completada amb èxit a configuracio.json!")
     ```
  3. Executa l'script i compara la mida en bytes d'ambdós arxius.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat les marques de presentació de les marques descriptives i semàntiques.
- [ ] He verificat que un document XML compleix les 6 regles d'or per ser ben format (*Well-Formed*).
- [ ] He utilitzat entitats predefinides (`&lt;`, `&gt;`, `&amp;`) i blocs `CDATA` per a text especial.
- [ ] He dissenyat una gramàtica DTD emprant operadors de cardinalitat (`?`, `*`, `+`, `,`, `|`).
- [ ] He creat un document XML Schema (XSD) aplicant tipus simples i restriccions amb expressions regulars.
- [ ] He resolt col·lisions d'etiquetes mitjançant la declaració d'espais de noms (`xmlns`).
- [ ] He comparat la sobrecàrrega de caràcters i l'àmbit d'ús d'XML, JSON i YAML.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Sintaxi XML i Bona Formació** | Domina la sintaxi XML, pròleg, codificacions UTF-8, entitats i blocs CDATA sense cap error de bona formació. | Construeix documents XML ben formats amb arrel única i niament estricte d'etiquetes. | Escriu XML bàsic però comet errors ocasionals de majúscules/minúscules o oblida tancar etiquetes buides. | Documents invàlids que violen les regles d'arrel única o encavalquen etiquetes. |
| **Validació amb DTD** | Dissenya DTDs precises utilitzant operadors de seqüència, elecció i cardinalitat per a estructures complexes. | Defineix elements i llistes d'atributs (#REQUIRED, #IMPLIED) funcionals en una DTD. | Crea una DTD senzilla però té dubtes sobre l'ús de `#PCDATA` enfront d'elements fills. | Desconeix la funció d'una DTD o confon la validació amb la bona formació sintàctica. |
| **Esquemes XML Schema (XSD)** | Construeix XSDs avançats amb tipus complexos, restriccions de rang, enumeracions i expressions regulars regex. | Valida documents XML mitjançant XSD utilitzant tipus primitius estàndard (xs:integer, xs:date). | Crea un esquema bàsic amb suport de plantilles però té dificultats amb els tipus derivats. | Incapaç de crear o vincular un fitxer XSD a un document XML. |
| **Espais de Noms (Namespaces)** | Utilitza múltiples espais de noms amb prefixos i resol conflictes semàntics d'etiquetes en documents integrats. | Declara espais de noms mitjançant atributs `xmlns` i associa prefixos a elements. | Reconeix la sintaxi d'un prefix però no comprèn per què s'utilitza una URI d'identificació. | Omet els espais de noms provocant errors de col·lisió en documents compostos. |
| **Formats de Dades (JSON i YAML)** | Analitza l'overhead de xarxa i tria el format d'intercanvi idoni (XML, JSON o YAML) segons els requisits d'integració. | Converteix estructures d'XML a JSON i YAML respectant la jerarquia de dades. | Reconeix documents JSON i YAML però comet errors de sintaxi en arrays o sagnats de YAML. | Confon la sintaxi de JSON amb XML o creu que JSON admet etiquetes d'obertura i tancament. |
