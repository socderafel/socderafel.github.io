---
layout: default
title: "UD8: Tractament de Recursos Multimèdia (So, Imatge i Vídeo) — Operacions Auxiliars de Configuració i Explotació"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD8"
next_url: "ut0801.md"
next_label: "8.1 ➡️"
---

# UD8: Tractament de Recursos Multimèdia (So, Imatge i Vídeo)

Formats digitals d'àudio i vídeo, edició d'àudio amb Audacity (gravació, neteja de soroll, efectes), imatges de mapa de bits vs vectorials (resolució, formats), disseny gràfic bàsic i incorporació de subtítols a vídeos.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **8.1** | **Formats d'àudio digital, taxa de mostreig i compressió** | [**Llegir apartat →**](./ut0801.md) |
| **8.2** | **Edició d'àudio amb Audacity: gravació i eliminació de soroll** | [**Llegir apartat →**](./ut0802.md) |
| **8.3** | **Imatge de mapa de bits vs vectorial: formats i resolució** | [**Llegir apartat →**](./ut0803.md) |
| **8.4** | **Disseny gràfic bàsic i edició vectorial (Draw / Canva)** | [**Llegir apartat →**](./ut0804.md) |
| **8.5** | **Tractament de vídeo bàsic i subtitulat (.SRT)** | [**Llegir apartat →**](./ut0805.md) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 8.1 Formats d'àudio digital, taxa de mostreig i compressió

En moltes empreses i entorns administratius, els tècnics han de preparar falques sonores per a megafonia de botiga, vídeos corporatius, podcasts d'empresa o missatges d'atenció telefònica. Per això, conèixer els fonaments del so digital és essencial.

### Com es digitalitza el so?
El so real en la natura és una **ona contínua analògica** de pressió d'aire. Per guardar-la en un ordinador, cal convertir-la a números binaris mitjançant dues variables:
1. **Freqüència o Taxa de Mostreig (*Sampling Rate*):** El nombre de vegades per segon que la targeta de so mesura l'ona. L'estàndard de qualitat CD és de **44.100 Hz (44,1 kHz)**, i en vídeo professional s'utilitza **48.000 Hz (48 kHz)**.
2. **Profunditat de bits (*Bit Depth*):** La precisió de cada mostra (16 bits en qualitat CD, 24 bits en estudi professional).

---

### Formats d'àudio amb pèrdua vs sense pèrdua

| Format | Tipus de Compressió | Característiques i Ús |
| :--- | :--- | :--- |
| **WAV** | **Sense compressió (Cru / PCM)** | Qualitat màxima d'estudi de gravació. Ocupa molt d'espai al disc (~10 MB per cada minut de cançó). Format nadiu de Windows. |
| **MP3** | **Amb pèrdua (*Lossy*)** | El format més popular del món. Elimina freqüències inaudibles per a l'oïda humana per reduir l'arxiu a una desena part de la seua mida original (~1 MB per minut). |
| **AAC / M4A** | Amb pèrdua d'alta eficiència | Estàndard d'Apple (iTunes, iPhone) i de vídeos de YouTube. Millor qualitat que l'MP3 a la mateixa taxa de bits (*bitrate*). |
| **OGG Vorbis** | Amb pèrdua (Lliure) | Format d'àudio de codi obert i lliure de patents, molt utilitzat en videojocs i a la plataforma Spotify. |
| **FLAC** | **Compressió sense pèrdua (*Lossless*)** | Comprimeix l'arxiu al 50% de la seua mida sense perdre ni un sol detall de qualitat sonora original. Preferit per audiòfils. |

---

## 8.2 Edició d'àudio amb Audacity: gravació i eliminació de soroll

**Audacity** és el programa de programari lliure de referència internacional per a la gravació i edició multipista d'àudio digital.

### Interfície principal d'Audacity
- **Botons de transport:** Gravar (cercle roig), Reproduir (triangle verd), Pausa (dues barres) i Aturar (quadrat negre).
- **Indicadors de nivell de volum (Vúmetres):** Barres verdes/groga que mostren el volum del micròfon i dels altaveus.
  > [!WARNING]
  > Evita que la barra arribe a la zona roja extrema (0 dB)! Si arriba a la zona roja, el so se satura i es produeix **distorsió harmònica (*clipping*)**, fent que la gravació sone esgarrada i metàl·lica.
- **Pista d'ona (*Waveform*):** Representació visual gràfica de les ones sonores en l'eix de temps.

---

### Procediment clau: Eliminació del soroll de fons estàtic
Quan gravem una veu amb micròfon en una aula o despatx, sovint queda de fons un xiulet continu provocat pels ventiladors de la torre o l'aire condicionat. Audacity permet eliminar-lo netament en dos passos:

1. **Pas 1: Obtenció del perfil de soroll**
   - Durant la gravació, deixa 2 o 3 segons de silenci absolut a l'inici.
   - Amb l'eina de selecció d'Audacity, selecciona amb el ratolí aquest petit tros on només se sent el soroll de fons.
   - Ves al menú **Efecte $\rightarrow$ Eliminació i reparació de soroll $\rightarrow$ Reducció de soroll...**
   - Fes clic al botó **Obtén el perfil de soroll (*Get Noise Profile*)**. La finestra es tancarà sola.
2. **Pas 2: Aplicació del filtre a tota la pista**
   - Prem `Ctrl + A` per seleccionar tota la gravació sencera.
   - Torna a obrir el mateix menú **Reducció de soroll...**
   - Fes clic a **D'acord**.
   - El soroll de fons desapareixerà com per art de màgia, deixant la veu neta i cristal·lina!

---

## 8.3 Imatge de mapa de bits vs vectorial: formats i resolució

En informàtica gràfica, qualsevol imatge digital pertany a una de dues categories completament diferents: **mapa de bits (*bitmap/ràster*)** o **gràfic vectorial**.

### 1. Imatges de Mapa de Bits (*Ràster*)
- Estan formades per una **quadrícula de milers o milions de xicotets punts de color individuals anomenats píxels**.
- **El problema de l'escalabilitat:** Si fem molt de zoom sobre una foto o l'ampliem per fer un cartell gegant, els píxels es fan visibles i la imatge es veu borrosa i pixelada.
- **Ús:** Fotografies reals de persones, paisatges o captures de pantalla.
- **Formats comuns:**
  - **JPEG / JPG:** Format de foto per excel·lència. Comprimeix molt però no admet fons transparents.
  - **PNG:** Qualitat excel·lent, admet **fons transparents** (canal alfa). Ideal per a logotips amb fons net.
  - **WebP:** Format modern creat per Google per a pàgines web; manté gran qualitat ocupant un 30% menys que JPEG.

---

### 2. Gràfics Vectorials
- No utilitzen píxels! Estan formats per **fórmules matemàtiques que defineixen línies, corbes, punts geomètrics i colors de farciment**.
- **El gran avantatge:** **Es poden ampliar o reduir fins a l'infinit sense perdre ni una gota de qualitat ni nitidesa** (un logotip es veu igual de nítid en una targeta de visita de 5 cm que en una tanca publicitària d'autopista de 10 metres!).
- **Ús:** Logotips corporatius, icones d'aplicacions, rètols i tipografies.
- **Formats comuns:**
  - **SVG (*Scalable Vector Graphics*):** Estàndard lliure universal per a gràfics web.
  - **AI / CDR:** Formats de disseny professional (Adobe Illustrator / CorelDraw).

---

## 8.4 Disseny gràfic bàsic i edició vectorial (Draw / Canva)

En moltes situacions d'oficina, el tècnic d'explotació rep l'encàrrec de dissenyar un cartell d'avís informatiu per a la recepció (com ara *"Horari d'atenció al públic"* o *"Instruccions per a la connexió a la xarxa Wi-Fi de clients"*).

### Eines accessibles de creació gràfica
- **LibreOffice Draw:** Aplicació vectorial d'ofimàtica lliure inclosa gratuïtament al paquet de LibreOffice. Permet crear formes geomètriques, diagrames de flux, inserir imatges i organitzar pàgines tècniques.
- **Canva:** Eina en línia molt intuïtiva basada en núvol amb milers de plantilles predissenyades professionals per a xarxes socials, pòsters, tríptics i presentacions.

---

### Principis bàsics de disseny professional per a oficina

1. **Jerarquia visual i contrast:**
   - El títol principal ha de tindre una mida de lletra molt superior perquè es llija d'un sol cop d'ull des de lluny.
   - Utilitza contrast fort de color (text negre fosc sobre fons blanc net, o text blanc sobre fons blau marí intens). Mai poses text groc clar sobre fons blanc!
2. **Llegibilitat tipogràfica:**
   - No utilitzes més de dues tipografies diferents en el mateix cartell.
   - Fes servir fonts clares sense serifa (*Sans-Serif*) com Arial, Montserrat o Roboto per a cartelleria informativa.
3. **Marges i aire:**
   - Mai apegues el text a les vores del paper: deixa sempre un marge buit generós al voltant per donar elegància i facilitar la lectura.

---

## 8.5 Tractament de vídeo bàsic i subtitulat (.SRT)

El contingut en vídeo és el rei de la comunicació actual. Saber retallar un clip d'enregistrament de pantalla o afegir subtítols a una entrevista corporativa és una competència pràctica molt valorada en el perfil professional d'FPB.

### Formats contenidors de vídeo: MP4 vs MKV
Un arxiu de vídeo és en realitat un **paquet contenidor** que guarda dins:
- Una pista de vídeo comprimida amb un còdec (com ara **H.264** o **H.265 / HEVC**).
- Una o més pistes d'àudio (en MP3 o AAC).
- Pistes de subtítols i capítols.

El contenidor **MP4** és el més universal del món, suportat per tots els navegadors, telèfons intel·ligents i televisors.

---

### Què és un fitxer de subtítols `.SRT`?
El format **SubRip (`.srt`)** és un fitxer de text pla extremadament senzill i estandarditzat que conté els textos que han d'aparèixer a la part inferior de la pantalla sincronitzats amb el temps del vídeo.

#### Estructura interna d'un fitxer `.srt`:
Consta de blocs numerats seqüencialment amb quatre línies cadascun:
```
1
00:00:01,500 --> 00:00:04,200
Hola a tothom, benvinguts al curs d'FP Bàsica.

2
00:00:04,500 --> 00:00:08,000
Hui aprendrem a configurar una màquina virtual.
```
- Línia 1: Número d'ordre del subtítol.
- Línia 2: Temps d'aparició i temps de desaparició (`hores:minuts:segons,mil·lisegons`).
- Línia 3: Text del diàleg que es mostrarà en pantalla.
- Línia 4: Línia en blanc separadora.

> [!TIP]
> Si guardes el fitxer de subtítols amb exactament el mateix nom que el vídeo dins de la mateixa carpeta (per exemple `tutorial.mp4` i `tutorial.srt`), la majoria de reproductors multimèdia com **VLC Media Player** carregaran i mostraran els subtítols automàticament!

---

