---
layout: default
title: "UD13 — Tractament d'Imatge Digital (GIMP i Inkscape) · Temari Complet"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD13 — Tractament d'Imatge Digital (GIMP i Inkscape)"
prev_url: "../ut12/ut1202.html"
prev_label: "⬅️ 12.2 Desplegament de Formularis en Mode Independent"
next_url: "../index.html"
next_label: "Tornar al Mòdul d'Aplicacions Ofimàtiques 🏠"
---

# 📘 UD13 — Tractament d'Imatge Digital: Mapa de Bits (GIMP) i Disseny Vectorial (Inkscape) (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua, analitzant els principis de la imatge digital, la resolució espacial, els espais de color, l'edició fotogràfica amb GIMP i el disseny vectorial amb Inkscape.

## 🎨 Fonaments de la Imatge Digital: Ràster vs Vectorial

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura d'Imatge Digital: Mapa de Bits, Gràfics Vectorials i Espais de Color</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Resolució espacial (DPI/PPI), profunditat de color, models RGB/CMYK, capes amb canal alfa i traçats Bézier</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="aofU13RstGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#0284c7" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU13VecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU13ClrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="aofU13FmtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c084fc" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Mapa de Bits (GIMP) -->
    <rect x="20" y="20" width="190" height="255" rx="8" fill="url(#aofU13RstGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">🖼️ MAPA DE BITS (RÀSTER)</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Matriu de Píxels (GIMP)</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Unitat Mínima: Píxel</tspan></text>
    <text x="42" y="93" fill="#cbd5e1" font-size="8">- Posició fixa en graella (X, Y)</text>
    <text x="42" y="105" fill="#cbd5e1" font-size="8">- Valor de color discret (RGB/A)</text>
    <text x="32" y="122" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Dependència d'Escala:</tspan></text>
    <text x="42" y="135" fill="#f87171" font-size="8">- En ampliar apareix píxelació</text>
    <text x="42" y="147" fill="#cbd5e1" font-size="8">- Remusseig per interpolació</text>
    <text x="32" y="164" fill="#38bdf8" font-size="8.5">• <tspan font-weight="bold">Ús Principal:</tspan></text>
    <text x="42" y="177" fill="#cbd5e1" font-size="8">- Fotografia d'alta textura</text>
    <text x="42" y="189" fill="#cbd5e1" font-size="8">- Retoc tonal i filtres complexos</text>
    <rect x="35" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="220" fill="#38bdf8" font-size="8" font-weight="bold" text-anchor="middle">GIMP: Capes i Màscares</text>
    <text x="115" y="258" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Edició Fotogràfica</text>

    <!-- Bloc 2: Imatge Vectorial (Inkscape) -->
    <rect x="230" y="20" width="190" height="255" rx="8" fill="url(#aofU13VecGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="325" y="42" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">📐 IMATGE VECTORIAL</text>
    <text x="325" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Geometria i Fórmules (Inkscape)</text>
    <line x1="240" y1="63" x2="410" y2="63" stroke="#334155"/>
    <text x="242" y="80" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Fonament Matemàtic:</tspan></text>
    <text x="252" y="93" fill="#cbd5e1" font-size="8">- Primitives: rectes, corbes, arcs</text>
    <text x="252" y="105" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">Corbes Bézier:</tspan> Nodes i tiradors</text>
    <text x="242" y="122" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Independència d'Escala:</tspan></text>
    <text x="252" y="135" fill="#34d399" font-size="8">- <tspan font-weight="bold">Escalabilitat infinita</tspan> sense pèrdua</text>
    <text x="252" y="147" fill="#cbd5e1" font-size="8">- Pes d'arxiu reduït i constant</text>
    <text x="242" y="164" fill="#34d399" font-size="8.5">• <tspan font-weight="bold">Ús Principal:</tspan></text>
    <text x="252" y="177" fill="#cbd5e1" font-size="8">- Logotips, icones, plànols, tipografia</text>
    <rect x="245" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="325" y="220" fill="#34d399" font-size="8" font-weight="bold" text-anchor="middle">Format Estàndard: SVG (XML)</text>
    <text x="325" y="258" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Disseny Gràfic Corporatiu</text>

    <!-- Bloc 3: Espais de Color -->
    <rect x="440" y="20" width="190" height="255" rx="8" fill="url(#aofU13ClrGrad)" stroke="#fbbf24" stroke-width="1.5"/>
    <text x="535" y="42" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">🎨 ESPAIS DE COLOR</text>
    <text x="535" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">RGB vs CMYK</text>
    <line x1="450" y1="63" x2="620" y2="63" stroke="#334155"/>
    <text x="452" y="80" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">RGB (Model Additiu):</tspan></text>
    <text x="462" y="93" fill="#cbd5e1" font-size="8">- Roig, Verd, Blau (Llum)</text>
    <text x="462" y="105" fill="#cbd5e1" font-size="8">- 8 bits/canal = 24 bits (16,7M colors)</text>
    <text x="462" y="117" fill="#fbbf24" font-size="8">- Destí: Pantalles, web, dispositius</text>
    <text x="452" y="134" fill="#fbbf24" font-size="8.5">• <tspan font-weight="bold">CMYK (Model Sostractiu):</tspan></text>
    <text x="462" y="147" fill="#cbd5e1" font-size="8">- Cian, Magenta, Groc, Negre</text>
    <text x="462" y="159" fill="#cbd5e1" font-size="8">- 32 bits (Pigments físics)</text>
    <text x="462" y="171" fill="#fbbf24" font-size="8">- Destí: Impressió òfset i digital</text>
    <rect x="455" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#fbbf24" stroke-width="1"/>
    <text x="535" y="220" fill="#fbbf24" font-size="8" font-weight="bold" text-anchor="middle">Canal Alfa: Transparència</text>
    <text x="535" y="258" fill="#fbbf24" font-size="8.5" text-anchor="middle" font-weight="bold">Gestió del Gamut</text>

    <!-- Bloc 4: Formats i Resolució -->
    <rect x="650" y="20" width="190" height="255" rx="8" fill="url(#aofU13FmtGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="745" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">📦 FORMATS I RESOLUCIÓ</text>
    <text x="745" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">DPI i Compressió</text>
    <line x1="660" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="662" y="80" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Resolució Espacial (DPI/PPI):</tspan></text>
    <text x="672" y="93" fill="#cbd5e1" font-size="8">- Web/Pantalla: 72 - 96 DPI</text>
    <text x="672" y="105" fill="#cbd5e1" font-size="8">- Impressió Fotogràfica: 300 DPI</text>
    <text x="662" y="122" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Formats Ràster:</tspan></text>
    <text x="672" y="135" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">JPEG:</tspan> Amb pèrdua, sense alfa</text>
    <text x="672" y="147" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">PNG:</tspan> Sense pèrdua, amb alfa</text>
    <text x="672" y="159" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">WebP:</tspan> Alta eficiència per a web</text>
    <text x="662" y="176" fill="#c084fc" font-size="8.5">• <tspan font-weight="bold">Format Vectorial:</tspan></text>
    <text x="672" y="189" fill="#cbd5e1" font-size="8">- <tspan font-weight="bold">SVG:</tspan> Escala neta i integrable</text>
    <rect x="665" y="205" width="160" height="32" rx="4" fill="#0f172a" stroke="#c084fc" stroke-width="1"/>
    <text x="745" y="220" fill="#c084fc" font-size="8" font-weight="bold" text-anchor="middle">XCF (GIMP) / SVG (Inkscape)</text>
    <text x="745" y="258" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Formats Natius i Exportació</text>
  </svg>
</div>

### 📋 Matriu Comparativa: Edició de Mapa de Bits (GIMP) vs Disseny Vectorial (Inkscape)

| Característica Tècnica | Imatge de Mapa de Bits (Ràster / GIMP) | Imatge Vectorial (Inkscape) |
| :--- | :--- | :--- |
| **Element Bàsic de Construcció** | Píxel individual amb coordenades $(X, Y)$ i valor cromàtic. | Primitives geomètriques basades en vectors i equacions polinomials (Bézier). |
| **Comportament davant l'Escala** | Pateix degradació per pixelació en ampliar (*aliasing*). | **Escalabilitat matemàtica infinita** sense pèrdua de nitidesa. |
| **Eina de Programari Lliure** | **GIMP** (*GNU Image Manipulation Program*). | **Inkscape** (*Vector Graphics Editor*). |
| **Format de Treball Natiu** | `.xcf` (manté capes, canals, màscares i guies). | `.svg` (*Scalable Vector Graphics*, basat en estàndard XML). |
| **Àmbit d'Aplicació Òptim** | Retoc fotogràfic, composició digital, textures i filtres artístics. | Logotips corporatius, iconografia de programari, plànols tècnics i tipografies. |
| **Dependència de Resolució** | Forta dependència: es mesura en píxels totals i densitat (PPI/DPI). | Independent de la resolució fins al moment de renderitzar o imprimir. |
| **Canal de Transparència** | Canal Alfa de 8 bits (256 nivells d'opacitat per píxel). | Propietat d'opacitat en farciment i traçat (`fill-opacity`, `stroke-opacity`). |

---

## 📑 Índex d'Apartats d'aquesta Unitat

- [**13.1 Fonaments d'Imatge Digital i Edició Ràster amb GIMP**](./ut1301.md)
- [**13.2 Disseny Gràfic Vectorial amb Inkscape**](./ut1302.md)

---

# 13.1 Fonaments d'Imatge Digital i Edició Ràster amb GIMP

### 1. La Imatge Digital i el Píxel
Una imatge de mapa de bits és una matriu bidimensional de punts microscòpics anomenats **píxels** (*Picture Elements*). Cada píxel emmagatzema una combinació de llum o color segons la seua **profunditat de color**:
- **1 bit:** Monocrom (blanc i negre purs, $2^1 = 2\text{ colors}$).
- **8 bits (Escala de grisos):** 256 nivells d'intensitat lumínica ($2^8 = 256$).
- **24 bits (Color Real / True Color):** 8 bits per al canal Roig, 8 bits per al Verd i 8 bits per al Blau. Permet representar $2^{24} = 16.777.216\text{ colors}$ simultanis.
- **32 bits (RGBA):** Afegeix un canal addicional de 8 bits (Canal Alfa) que gestiona la transparència graduada des d'opac total ($255$) fins a transparent absolut ($0$).

### 2. Relació entre Resolució, Mida Física i Densitat (DPI/PPI)
La qualitat d'impressió i visualització depèn de tres variables directament relacionades:
1. **Dimensions en píxels:** Amplada i alçada absolutes de la matriu (per exemple, $1920 \times 1080\text{ px}$).
2. **Densitat de punts (PPI / DPI):** Píxels per polzada (*Pixels Per Inch*) o punts per polzada (*Dots Per Inch*). Determina com de condensats estan els píxels en l'espai físic ($1\text{ polzada} = 2,54\text{ cm}$).
3. **Mida d'impressió física:**
$$\text{Amplada (cm)} = \frac{\text{Amplada (píxels)}}{\text{DPI}} \times 2,54$$

> [!IMPORTANT]
> Un canvi de resolució sense remostreig (*resample*) només modifica la mida en centímetres que ocuparà la imatge en ser impresa, sense alterar el nombre de píxels ni la mida en bytes del fitxer. Per contra, si s'activa el remostreig, GIMP genera o elimina píxels mitjançant algoritmes d'interpolació (com *Sinc (Lanczos3)* o *Cúbica*).

### 3. Tècniques Professionals en GIMP
- **Capes (*Layers*):** Permeten treballar elements independents com si foren acetats transparents superposats, evitant alteracions irreversibles al fons.
- **Màscares de Capa (*Layer Masks*):** Tècnica d'edició no destructiva on es pinta en blanc (opac / visible), negre (transparent / ocult) o grisos (semitransparència) sobre una màscara, conservant intactes els píxels originals.
- **Ajust de Nivells i Corbes:** Correcció del contrast i distribució tonal mitjançant la redistribució de les altes llums, tons mitjans i ombres de l'histograma.

---

# 13.2 Disseny Gràfic Vectorial amb Inkscape

### 1. El Concepte de Vector i Corba Bézier
En lloc d'emmagatzemar milions de punts individuals, el programari vectorial guarda instruccions analítiques:
`Cercle(centre = (100, 150), radi = 50, color_farciment = #38bdf8, vora = 2px)`

Les corbes complexes s'articulen mitjançant **Corbes de Bézier**, compostes per:
- **Nodes (Punts d'ancoratge):** Punts per on passa el traçat.
- **Tiradors (Punts de control):** Palanques que defineixen la tangent i la força de curvatura abans i després del node.
- **Tipus de Nodes:**
  - *Node de cúspide (cantonada):* Els dos tiradors es mouen de manera independent formant un vèrtex angulós.
  - *Node suau:* Els dos tiradors estan alineats sobre la mateixa recta tangent, garantint una transició suau sense cantonades.
  - *Node simètric:* A més d'alineats, els tiradors tenen exactament la mateixa longitud a ambdues bandes.

### 2. Operacions Booleanes de Traçat en Inkscape
Per crear formes complexes ràpidament a partir de primitives simples:
- **Unió (`Ctrl + +`):** Fusiona dos o més objectes en un únic traçat combinat.
- **Diferència (`Ctrl + -`):** L'objecte superior retalla la seua silueta de l'objecte inferior.
- **Intersecció (`Ctrl + *`):** Conserva únicament l'àrea on tots dos objectes es solapen.
- **Exclusió (`Ctrl + ^`):** Conserva totes les àrees excepte la zona de superposició.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 🎯 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Activitat 1: Càlcul de Resolució, Mida d'Impressió DIN A4 i Volum de Fitxer sense Comprimir
El departament de màrqueting sol·licita al tècnic informàtic preparar una fotografia d'alta resolució per a la portada d'un catàleg d'ordinadors que s'imprimirà en format DIN A4 ($210\text{ mm} \times 297\text{ mm}$, que equival a $8,27 \times 11,69\text{ polzades}$) amb qualitat fotogràfica professional d'impremta a $300\text{ DPI}$:

1. **Càlcul de Matriu de Píxels Necessària:**
   - Determineu el nombre mínim de píxels d'amplada ($W$) i d'alçada ($H$) que ha de tindre la imatge per no patir pèrdua de nitidesa en impremta:
   $$W_{\text{px}} = 8,27\text{ polzades} \times 300\text{ DPI}$$
   $$H_{\text{px}} = 11,69\text{ polzades} \times 300\text{ DPI}$$
   - Calculeu la resolució total en Megapíxels ($\text{MP} = \frac{W_{\text{px}} \times H_{\text{px}}}{1.000.000}$).
2. **Càlcul d'Espai en Memòria RAM sense Comprimir (Format RAW/BMP):**
   - Si la imatge es processa en profunditat de color de 24 bits (3 bytes per píxel: canals R, G i B de 8 bits cadascun), calculeu el volum total de dades en megabytes ($1\text{ MB} = 1.048.576\text{ bytes}$):
   $$\text{Mida}_{\text{24bit}} = \frac{W_{\text{px}} \times H_{\text{px}} \times 3}{1.048.576}$$
   - Quin seria el volum si afegim un canal alfa de transparència de 8 bits (32 bits = 4 bytes per píxel)?
3. **Pèrdua de Nitidesa en Pantalla vs Paper:** Si agafem una imatge descarregada d'una pàgina web amb dimensions de $1280 \times 720\text{ píxels}$ i la imprimim al mateix format DIN A4 a $300\text{ DPI}$, quina és la mida màxima en centímetres a la qual es podria imprimir sense que la resolució baixe dels $300\text{ DPI}$? Quina serà la densitat resultant si la forcem a ocupar tot el full A4?

#### Activitat 2: Conversió d'Espais de Color i Perdua de Gamut (sRGB vs CMYK)
En disseny gràfic és comú cometre l'errada de dissenyar un fullet publicitari en model RGB i enviar-lo directament a una impremta òfset comercial:
1. **Model Additiu vs Sostractiu:** Expliqueu per què la barreja dels tres colors primaris RGB al màxim valor (`#FFFFFF`, $R=255, G=255, B=255$) produeix blanc pur, mentre que la barreja dels tres pigments CMY al 100% produeix un to marró enfangat que requereix tinta negra addicional ($K$ - *Key*).
2. **Concepte de Gamut i Colors Fora de Gamma:** Per què colors verds fosforescents o blaus cian elèctrics molt vius en un monitor sRGB apareixen apagats i grisencs quan es converteixen a l'espai de color d'impressió CMYK (per exemple, perfil FOGRA39)?
3. **Mecanisme de Prova en Pantalla (*Soft Proofing*):** Com s'utilitza la funció de GIMP d'emulació de perfil de color d'impressora per advertir els colors fora de gamma abans d'enviar el document a imprimir?

#### Activitat 3: Anàlisi d'Eficiència en Formats de Fitxer i Algorismes de Compressió
Analitzeu les característiques d'emmagatzematge dels 4 grans formats de fitxer:
1. **JPEG (Joint Photographic Experts Group):** Algorisme basat en la Transformada Discreta del Cosinus (DCT). Per què és ideal per a fotografies de paisatges però produeix "artefactes" i taques borroses al voltant de lletres, línies rectes o logotips? Suporta transparència?
2. **PNG (Portable Network Graphics):** Algorisme de compressió sense pèrdua (*Deflate*). Quina diferència tècnica hi ha entre PNG-8 (paleta indexada de 256 colors) i PNG-24 (color real amb canal alfa)?
3. **WebP:** Per què el format modern WebP aconsegueix reduccions de pes del 30% respecte a JPEG i PNG mantenint una qualitat visual comparable?
4. **SVG (Scalable Vector Graphics):** Obre un fitxer `.svg` amb un editor de text pla (com Bloc de notes o VS Code). Descriviu com l'etiqueta `<svg>`, el node `<path d="..." fill="#..."/>` i els atributs de coordenades permeten descriure el dibuix com a codi de text pur XML.

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Retoc Tècnic i Correcció Tonal d'una Imatge d'Hardware en GIMP
1. Obriu **GIMP** i carregueu una fotografia d'una placa base o ordinador amb defectes d'il·luminació o ombres empastades.
2. Aneu al menú **Colors > Nivells**:
   - Observeu l'**Histograma**: identifiqueu si la imatge està subexposada (píxels acumulats a l'esquerra) o sobreexposada (píxels a la dreta).
   - Ajusteu el punt negre, el punt blanc i el lliscador del punt mitjà (gamma) fins a omplir tot el rang dinàmic de la corba.
3. Aneu a **Colors > Temperatura de color** o **Balanç de color** per neutralitzar dominants groguenques produïdes per il·luminació fluorescent de taller.
4. Apliqueu una màscara d'enfocament per millorar la nitidesa dels components electrònics: aneu a **Filtres > Millora > Enfocament (Màscara de desenfocament)** i configureu un radi de 1,5 i una quantitat de 0,5.
5. Deseu el projecte editable amb el nom `placa_base_ajustada.xcf` i exporteu el resultat com a `placa_base.jpg` amb un nivell de qualitat del 85%.

#### Repte 2: Retall Professional no destructiu amb Màscara de Capa i Canal Alfa
1. En GIMP, creeu una composició nova amb un fons degradat tecnològic de tons blaus foscos (`#0f172a` a `#1e293b`).
2. Afegiu com a nova capa una fotografia d'un mòdul de memòria RAM sobre fons blanc o neutre.
3. Si el nom de la capa apareix sense negreta, feu clic dret sobre la capa i trieu **Afegeix un canal alfa** per assegurar el suport de transparència.
4. Utilitzeu l'**Eina de Camins (B)** o la **Selecció Lliure (Llaç)** per resseguir amb precisió el contorn del mòdul de memòria.
5. Convertiu el camí en selecció.
6. En lloc de prémer la tecla Suprimir (esborrat destructiu), feu clic dret sobre la capa i trieu **Afegeix una màscara de capa**:
   - Trieu l'opció: *Inicialitza la màscara de capa a: Selecció*.
7. Observeu com el fons original desapareix i es mostra el degradat inferior. Modifiqueu la màscara pintant amb el pinzell en negre per amagar detalls residuals o en blanc per recuperar zones retallades per accident.
8. Exporteu el mòdul retallat de forma aïllada com a `memoria_ram_transparent.png` verificant que el fons és transparent (tauler de dames).

#### Repte 3: Disseny d'un Logotip Vectorial i Icona de Xarxa en Inkscape
1. Obriu **Inkscape** i configureu la pàgina a mida quadrada de $500 \times 500\text{ px}$ des de **Fitxer > Propietats del document**.
2. Activeu les guies i la graella (`#`).
3. Dibuixeu una icona de servidor de xarxa utilitzant només primitives geomètriques:
   - Dibuixeu 3 rectangles superposats amb cantonades arrodonides (representant les unitats de rack d'un servidor).
   - Afegiu xicotets cercles a la dreta de cada unitat per simular els LEDs d'activitat de xarxa i el botó d'encesa.
   - Dibuixeu una línia poligonal inferior que connecte amb un commutador (*switch*).
4. Proveu les operacions booleanes:
   - Creeu una figura circular i un rectangle que el talle per la meitat; seleccioneu ambdós i premeu **Traçat > Diferència (`Ctrl + -`)** per obtenir un semicercle net.
5. Dibuixeu un cable de xarxa estilitzat amb l'**Eina de Corbes Bézier (B)**: creeu 4 nodes i estireu els tiradors per generar una corba en "S" suau.
6. Apliqueu un degradat lineal modern de blau cian (`#38bdf8`) a blau indi (`#6366f1`) al farciment dels servidors.
7. Deseu l'arxiu vectorial original com a `logotip_xarxa_sat.svg`.
8. Aneu a **Fitxer > Exporta**:
   - Exporteu una còpia en format PNG d'alta definició a 300 DPI per a impremta (`logotip_sat_300dpi.png`).
   - Exporteu una còpia optimitzada en format SVG pur per a la pàgina web de la biblioteca tècnica.

---

### 📋 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Fonaments de Resolució, Píxels i Espais de Color** | Calcula amb precisió matemàtica resolucions DPI/PPI, mides físiques i memòria RAW, justificant la pèrdua de gamut sRGB-CMYK. | Resol càlculs de resolució i mida de fitxer amb èxit, amb xicotetes desviacions en unitats o interpretació del gamut. | Comprèn la diferència entre mapa de bits i vectorial, però té dificultats per a calcular la densitat en DPI o el pes en bytes. | No sap què és un píxel ni distingeix entre una imatge de mapa de bits i una imatge vectorial. |
| **Destresa en Retoc Ràster amb GIMP** | Domina la correcció d'histograma per nivells, aplicació de màscares de capa no destructives i aïllament d'objectes amb canal alfa. | Aplica nivells i màscares de capa correctament amb guia mínima en la selecció precisa de vores complexes. | Utilitza eines bàsiques de selecció i pinzell, però recorre a l'esborrat destructiu sense emprar màscares de capa. | Incapaç de fer un retall net o ajustar els nivells de llum d'una fotografia en GIMP. |
| **Disseny Vectorial i Corbes Bézier en Inkscape** | Construeix logotips corporatius nets mitjançant primitives, operacions booleanes i tiradors Bézier simètrics, exportant a SVG i 300 DPI. | Crea traçats vectorials i aplica operacions booleanes amb solvència amb xicotets desajustos en la curvatura dels nodes. | Dibuixa figures geomètriques bàsiques però té dificultats per a controlar els tiradors de les corbes Bézier. | No sap utilitzar les eines de dibuix vectorial ni distingir entre nodes i tiradors de corba. |
