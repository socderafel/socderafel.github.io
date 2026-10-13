---
layout: default
title: "UD2: Llenguatges de Marques per a la Web: HTML5 i Sindicació de Continguts — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD2"
---

# UD2: Llenguatges de Marques per a la Web: HTML5 i Sindicació de Continguts

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-html" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-form" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-media" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-rss" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm2)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">HTML5 SEMÀNTIC, FORMULARIS, MULTIMÈDIA I SINDICACIÓ WEB</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Estructuració semàntica, controls de formulari natius, multimèdia accessible i canals de sindicació RSS 2.0 i Atom</text>

  <!-- Bloc 1: Estructura Semàntica -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-html)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">HTML5 Semàntic</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Arbre del Document</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• &lt;article&gt;, &lt;section&gt;</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• &lt;aside&gt;, &lt;footer&gt;</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Accessibilitat WAI-ARIA</text>
  </g>

  <!-- Bloc 2: Formularis Avançats -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-form)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📋</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Formularis &amp; Dades</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Validació Nativa</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Nous tipus: email, tel, date</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Atributs: required, pattern</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Controls: min, max, step</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Pseudoclasses de validació</text>
  </g>

  <!-- Bloc 3: Multimèdia Natiu -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-media)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🎬</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Multimèdia &amp; Gràfics</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Àudio, Vídeo i Vectors</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• &lt;video&gt; i &lt;audio&gt; natius</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Còdecs: H.264, VP9, WebM</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Subtítols WebVTT (&lt;track&gt;)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Gràfics incrustats SVG</text>
  </g>

  <!-- Bloc 4: Sindicació RSS/Atom -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-rss)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Sindicació de Feeds</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Model Pub/Sub XML</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Feeds RSS 2.0 (&lt;channel&gt;)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Elements: title, link, guid</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Estàndard Atom 1.0</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Validació W3C Feed Validator</text>
  </g>
</svg>
</div>

L'estàndard **HTML5** constitueix l'esquelet fonamental de la World Wide Web moderna. En aquesta unitat aprofundirem en l'estructuració semàntica del document web, l'eliminació de la dependència històrica dels contenidors genèrics `<div>`, el disseny de formularis web amb validació nativa del navegador, la integració de recursos multimèdia enriquits i la publicació de continguts dinàmics mitjançant canals de sindicació basats en XML (**RSS 2.0** i **Atom**).

---

## 2.1 Història, arquitectura i declaració del document HTML5

HTML (*HyperText Markup Language*) ha evolucionat des d'un format simple d'etiquetes de text fins a una plataforma d'aplicacions completa.

### Del model clàssic a l'estàndard vivent (*Living Standard*)
1. **HTML 4.01 i XHTML 1.0:** Exigien una DTD estricta a la capçalera (`<!DOCTYPE html PUBLIC ...>`). XHTML obligava a complir la sintaxi XML (tancar totes les etiquetes, minúscules obligatòries).
2. **HTML5:** Creat inicialment pel **WHATWG** (*Web Hypertext Application Technology Working Group*) i adoptat pel W3C. Introdueix una declaració d'arrel neta i universal:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portal Web Corporatiu</title>
</head>
<body>
    <!-- Contingut accessible -->
</body>
</html>
```

### Principis clau de disseny en HTML5
- **Separació de responsabilitats:** HTML s'encarrega exclusivament de l'**estructura i la semàntica**; CSS controla la **presentació visual**; JavaScript implementa el **comportament interactiu**.
- **Compatibilitat cap arrere:** Els navegadors interpreten elements no reconeguts com a elements en línia (*inline*) sense fallar de manera catastròfica.
- **Accessibilitat nativa:** Els lectors de pantalla i motors d'indexació (SEO) interpreten directament el significat del contingut.

---

## 2.2 Estructura semàntica d'un document HTML5

L'ús d'`<div id="header">` o `<div class="menu">` és substituït en HTML5 per elements semàntics que atorguen un significat precís a cada bloc de la pàgina:

| Element | Finalitat Semàntica | Comportament Recomanat |
| :--- | :--- | :--- |
| `<header>` | Capçalera introductòria d'una pàgina o secció | Inclou logotip, títol principal (`<h1>`) i elements de cerca |
| `<nav>` | Bloc de navegació principal o secundària | Conté llistes d'enllaços de navegació interna o del lloc |
| `<main>` | Nucli temàtic central i únic del document | **Només 1 per pàgina**. No pot contenir navegacions o peu repetit |
| `<article>` | Contingut autònom, independent i sindicable | Una notícia, entrada de blog, comentari o targeta de producte |
| `<section>` | Agrupació temàtica de contingut | Sol incloure el seu propi encapçalament (`<h2>`-`<h6>`) |
| `<aside>` | Contingut relacionat tangencialment | Barra lateral, enllaços recomanats, publicitat o perfil de l'autor |
| `<footer>` | Peu de pàgina o peu de secció | Drets d'autor, avisos legals, contacte i mapa web |
| `<figure>` / `<figcaption>` | Contingut il·lustratiu autocontingut | Imatges, diagrames, fragments de codi amb peu explicatiu |

### Exemple d'arbre semàntic estructurat:
```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Institut Tecnològic — Notícies</title>
</head>
<body>
    <header>
        <h1>Institut Tecnològic de València</h1>
        <nav aria-label="Navegació principal">
            <ul>
                <li><a href="#inici">Inici</a></li>
                <li><a href="#cicles">Cicles Formatius</a></li>
                <li><a href="#contacte">Contacte</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h2>Nou laboratori de Computació al Núvol</h2>
                <p><time datetime="2026-10-13">13 d'octubre de 2026</time> — Per <em>Departament d'Informàtica</em></p>
            </header>
            <p>S'ha inaugurat el nou laboratori equipat amb infraestructura de virtualització d'alt rendiment...</p>
            <figure>
                <img src="img/lab.jpg" alt="Estudiants configurant servidors en rack" width="600" height="340">
                <figcaption>Alumnat de 1r DAW/DAM treballant amb contenidors Linux.</figcaption>
            </figure>
        </article>
    </main>

    <aside>
        <h3>Avisos Importants</h3>
        <p>El termini de sol·licitud de beques Erasmus+ finalitza el proper divendres.</p>
    </aside>

    <footer>
        <p>&copy; 2026 Institut Tecnològic. Tots els drets reservats.</p>
    </footer>
</body>
</html>
```

---

## 2.3 Formularis web avançats i validació nativa

HTML5 transforma els formularis afegint nous tipus d'entrada (*input types*) i mecanismes de validació declarativa sense necessitat de codi JavaScript.

### Tipus d'entrada moderns
- `type="email"`: Valida automàticament el format de correu electrònic (`nom@domini.ext`).
- `type="tel"`: Dissenyat per a telèfons; en dispositius mòbils desplega el teclat numèric de trucada.
- `type="url"`: Exigeix un esquema vàlid de xarxa (`http://` o `https://`).
- `type="number"`: Permet definir límits numèrics amb `min`, `max` i increments de pas amb `step`.
- `type="date"` / `type="time"` / `type="datetime-local"`: Ofereix selectors de calendari natius del sistema operatiu.
- `type="range"`: Control lliscant per a seleccions visuals de rang.
- `type="color"`: Selector de paleta de colors RGB.

### Atributs de validació declarativa
```html
<form action="/api/usuaris" method="POST">
    <!-- Camp obligatori amb text d'exemple -->
    <label for="nom">Nom complet:</label>
    <input type="text" id="nom" name="nom" required placeholder="Ex. Marc Soler" minlength="3" maxlength="50">

    <!-- Validació amb expressió regular (DNI/NIE espanyol) -->
    <label for="dni">DNI / NIF:</label>
    <input type="text" id="dni" name="dni" required pattern="[0-9]{8}[A-Za-z]" title="8 dígits seguits d'una lletra majúscula (Ex. 12345678Z)">

    <!-- Rang numèric amb pas -->
    <label for="edat">Edat (anys):</label>
    <input type="number" id="edat" name="edat" min="16" max="99" step="1" required>

    <!-- Correu corporatiu -->
    <label for="email">Correu corporatiu:</label>
    <input type="email" id="email" name="email" required placeholder="alumne@centre.edu">

    <!-- Llista de suggeriments automàtics -->
    <label for="cicle">Cicle Formatiu:</label>
    <input list="cicles-disponibles" id="cicle" name="cicle" required>
    <datalist id="cicles-disponibles">
        <option value="Desenvolupament d'Aplicacions Web (DAW)">
        <option value="Desenvolupament d'Aplicacions Multiplataforma (DAM)">
        <option value="Administració de Sistemes Informàtics en Xarxa (ASIX)">
    </datalist>

    <button type="submit">Enviar Formulari</button>
</form>
```

---

## 2.4 Multimèdia natiu: àudio, vídeo i gràfics vectorials

Abans d'HTML5, la reproducció multimèdia requeria connectors de tercers com Adobe Flash o Microsoft Silverlight. HTML5 introdueix reproductors natius amb control total via DOM i CSS.

### Reproductor de Vídeo Natiu (`<video>`)
```html
<video controls width="800" height="450" poster="portada.jpg" preload="metadata">
    <!-- Còdec modern i lliure WebM (VP9/Opus) -->
    <source src="video.webm" type="video/webm">
    <!-- Còdec d'alta compatibilitat MP4 (H.264/AAC) -->
    <source src="video.mp4" type="video/mp4">
    <!-- Pista de subtítols accessible en format WebVTT -->
    <track src="subtitols_ca.vtt" kind="subtitles" srclang="ca" label="Valencià" default>
    <p>El teu navegador no admet la reproducció nativa de vídeo HTML5. <a href="video.mp4">Descarrega el fitxer directament</a>.</p>
</video>
```

### Reproductor d'Àudio Natiu (`<audio>`)
```html
<audio controls preload="none">
    <source src="podcast.opus" type="audio/ogg; codecs=opus">
    <source src="podcast.mp3" type="audio/mpeg">
    El teu navegador no admet àudio HTML5.
</audio>
```

---

## 2.5 Sindicació web de continguts: RSS 2.0 i Atom 1.0

La **sindicació de continguts** permet distribuir informació actualitzada des d'un lloc web cap a usuaris o aplicacions externes utilitzant el model **Publicador/Subscriptor (*Pub/Sub*)**.

### Estructura XML d'un canal RSS 2.0 (*Really Simple Syndication*)
Un fitxer RSS és un document XML vàlid estructurat sota l'arrel `<rss version="2.0">`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <!-- Metadades del canal -->
    <title>Canal Oficial de Notícies — DAW/DAM</title>
    <link>https://depts.centre.edu/informatica</link>
    <description>Actualitzacions, pràctiques i avisos del departament d'informàtica.</description>
    <language>ca</language>
    <lastBuildDate>Tue, 13 Oct 2026 12:00:00 +0200</lastBuildDate>
    <atom:link href="https://depts.centre.edu/rss.xml" rel="self" type="application/rss+xml"/>

    <!-- Entrada individual 1 -->
    <item>
      <title>Publicació de la Guia de Pràctiques d'HTML5 i CSS3</title>
      <link>https://depts.centre.edu/informatica/noticies/guia-html5</link>
      <description>Ja està disponible per a l'alumnat el nou quadern interactiu d'activitats de laboratori.</description>
      <author>coord.cicles@centre.edu (Departament d'Informàtica)</author>
      <pubDate>Mon, 12 Oct 2026 09:30:00 +0200</pubDate>
      <guid isPermaLink="true">https://depts.centre.edu/informatica/noticies/guia-html5</guid>
    </item>

    <!-- Entrada individual 2 -->
    <item>
      <title>Convocatòria del Hackathon de Disseny Web Accessible</title>
      <link>https://depts.centre.edu/informatica/noticies/hackathon-2026</link>
      <description>Inscripcions obertes per a l'esdeveniment intermodular de divendres vinent.</description>
      <pubDate>Sun, 11 Oct 2026 18:00:00 +0200</pubDate>
      <guid isPermaLink="true">https://depts.centre.edu/informatica/noticies/hackathon-2026</guid>
    </item>
  </channel>
</rss>
```

### Vincular un canal RSS en el document HTML5
Perquè els navegadors i lectors de feeds detecten automàticament el canal (*Auto-discovery*), s'afig l'etiqueta `<link>` a la secció `<head>`:
```html
<link rel="alternate" type="application/rss+xml" title="Notícies DAW/DAM (RSS 2.0)" href="/rss.xml">
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Càlcul de flux de dades i consum d'amplada de banda multimèdia
Un portal educatiu allotja un vídeo d'aprenentatge en streaming d'una durada exacta de **15 minuts i 30 segons** ($t = 930\text{ s}$).
Es codifica en dues qualitats distintes:
1. **Perfil 1080p (Full HD):** Taxa de bits de vídeo $R_v = 4.500\text{ kbps}$ i àudio estèreo $R_a = 192\text{ kbps}$.
2. **Perfil 720p (HD):** Taxa de bits de vídeo $R_v = 2.000\text{ kbps}$ i àudio estèreo $R_a = 128\text{ kbps}$.

- **Fórmula de càlcul de mida de fitxer:**
  $$\text{Taxa Total } R = R_v + R_a \quad (\text{en kbps})$$
  $$\text{Mida (MB)} = \frac{R \times t}{8 \times 1.024}$$

- **Tasques a resoldre:**
  1. Calcula el pes total en Megabytes ($\text{MB}$) del fitxer de vídeo en perfil 1080p i en perfil 720p.
  2. Si el vídeo rep $12.000$ visualitzacions completes mensuals amb una distribució del $40\%$ en 1080p i el $60\%$ en 720p, calcula el volum total de transferència mensual en Gigabytes ($\text{GB}$) que haurà de suportar el servidor d'allotjament.

#### Exercici 2: Auditoria d'arquetip semàntic i accessibilitat WCAG
Observa el següent fragment de codi heretat (*legacy*) d'una aplicació web:

```html
<div class="header">
    <div class="logo">La Meva Botiga</div>
    <div class="nav-links">
        <a href="/">Inici</a> | <a href="/cataleg">Productes</a>
    </div>
</div>
<div class="content">
    <div class="card" onclick="location.href='/prod/1'">
        <img src="img1.jpg">
        <div class="title">Teclat Mecànic RGB</div>
        <div class="price">79.99 €</div>
        <div class="btn">Comprar</div>
    </div>
</div>
<div class="footer">
    <span>Contacte: info@botiga.com</span>
</div>
```

1. Identifica els **5 problemes greus d'estructura semàntica i accessibilitat web** que presenta aquest codi.
2. Refactoritza completament el fragment utilitzant els elements semàntics natius d'HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<figure>`, `<footer>`, `<button>`), assegurant el compliment de WCAG 2.2 nivell AA.

#### Exercici 3: Càlcul d'eficiència en actualització de continguts: Feeds RSS vs Polling complet
Una aplicació mòbil consulta cada 10 minuts si s'ha publicat una nova notícia en un diari digital:
- **Mètode Tradicional:** Descarrega la pàgina principal HTML completa amb imatges i estils, amb un pes mitjà de $1.850\text{ KB}$ per petició.
- **Mètode Sindicat:** Descarrega únicament el fitxer XML del canal RSS d'últimes notícies, amb un pes de $32\text{ KB}$. A més, utilitza les capçaleres HTTP `If-Modified-Since` / `ETag`, de manera que si no hi ha canvis rep una resposta `304 Not Modified` de només $0,4\text{ KB}$.

1. Sabent que només es publica una nova notícia cada 6 hores (la resta de consultes retornen `304 Not Modified` en el feed sindicat), calcula el volum de dades consumit durant 24 hores:
   - Mitjançant peticions directes a la pàgina HTML completa.
   - Mitjançant el canal RSS amb gestió de memòria cau HTTP `304`.
2. Calcula el percentatge d'estalvi de xarxa obtingut.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Creació d'un portal web multimèdia accessible
- **Objectiu:** Desenvolupar una pàgina d'aprenentatge en HTML5 estricte amb reproductors natius de so i imatge.
- **Instruccions:**
  1. Crea el fitxer `index.html` amb una estructura semàntica completa (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`).
  2. Afig un reproductor de vídeo accessible amb:
     - Dues fonts: format WebM i format MP4.
     - Imatge de presentació (`poster="img/poster.jpg"`).
     - Pista de subtítols natius en català (`subtitols.vtt`) vinculada amb l'etiqueta `<track>`.
  3. Crea un fitxer de subtítols `subtitols.vtt` amb codificació UTF-8:
     ```text
     WEBVTT - Subtítols de la lliçó

     00:00:01.000 --> 00:00:05.000
     Benvinguts a la classe de desenvolupament web en HTML5.

     00:00:05.500 --> 00:00:10.000
     Hui aprendrem a utilitzar elements semàntics i reproductors natius.
     ```
  4. Comprova el reproductor al navegador i activa/desactiva els subtítols interactius.

#### Repte 2: Formulari avançat de registre amb validació declarativa
- **Objectiu:** Crear un formulari complet de registre d'estudiants amb controls d'HTML5 sense una sola línia de JavaScript.
- **Requisits de validació:**
  1. Camp `nom`: text d'entre 3 i 60 caràcters, obligatori (`required`).
  2. Camp `dni`: expressió regular `pattern="[0-9]{8}[A-Za-z]"` amb missatge d'ajuda `title`.
  3. Camp `email`: tipus `email` obligatori.
  4. Camp `data_naixement`: tipus `date` amb límit màxim `max="2010-01-01"`.
  5. Camp `experiencia`: control lliscant `range` entre 0 i 10 amb valor inicial 0.
  6. Camp `codi_postal`: `pattern="[0-9]{5}"`.
  7. Comprova el funcionament al navegador i visualitza com impedeix l'enviament si alguna regla falla.

#### Repte 3: Construcció i validació W3C d'un canal RSS 2.0 complet
- **Objectiu:** Crear un canal de sindicació per al portal educatiu i validar-lo contra els estàndards oficials.
- **Procediment de taller:**
  1. Crea el document `feed.xml` seguint l'estàndard RSS 2.0 amb un canal principal i almenys 3 elements `<item>` amb data de publicació en format RFC 822 (`pubDate`).
  2. Valida la sintaxi XML des de la consola de comandaments amb `xmllint`:
     ```bash
     xmllint --noout feed.xml
     ```
  3. Comprova el canal utilitzant el servei de validació de feeds del W3C (*W3C Feed Validation Service*) a través del navegador.
  4. Integra el canal a la capçalera de la pàgina `index.html` mitjançant:
     ```html
     <link rel="alternate" type="application/rss+xml" title="Notícies del Cicle" href="feed.xml">
     ```

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] El document inclou el doctype `<!DOCTYPE html>` i la declaració d'idioma correcta `<html lang="ca">`.
- [ ] He estructurat el document amb etiquetes semàntiques (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- [ ] La pàgina conté exactament un sol element `<main>`.
- [ ] Els formularis utilitzen controls especialitzats (`email`, `date`, `number`, `tel`) i validació declarativa (`required`, `pattern`).
- [ ] El reproductor de vídeo compta amb fonts alternatives de vídeo i pista de subtítols accessible WebVTT.
- [ ] He publicat un canal RSS 2.0 ben format amb elements `<channel>`, `<title>`, `<link>` i `<item>`.
- [ ] He vinculat el canal de sindicació mitjançant el mecanisme d'autodescobriment `<link rel="alternate">`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Estructuració Semàntica HTML5** | Construeix una arquitectura semàntica impecable sense cap `<div>` estructural injustificat, respectant l'accessibilitat WAI-ARIA. | Utilitza correctament les etiquetes semàntiques principals (`header`, `nav`, `main`, `footer`), tot i que confon ocasionalment `section` i `article`. | Fa servir algunes etiquetes semàntiques però manté una dependència excessiva de blocs `<div>` genèrics. | Estructura la pàgina únicament amb `<div>` i taules visuals sense cap semàntica. |
| **Formularis i Validació Nativa** | Implementa formularis avançats amb controls d'entrada especialitzats, patrons regex i atributs de restricció coherents. | Dissenya formularis funcionals amb etiquetes `<label>` associades i validacions bàsiques (`required`, `email`). | Dissenya formularis senzills però oblida associar els `id` dels inputs amb els atributs `for` de les etiquetes. | Utilitza només inputs de text pla sense cap validació ni associació de controls. |
| **Integració Multimèdia i Accessibilitat** | Configura reproductors natius d'àudio i vídeo amb fonts alternatives per a múltiples còdecs i subtítols WebVTT accessibles. | Afig reproductors multimèdia natius amb controls funcionals i contingut alternatiu per a navegadors antics. | Insereix reproductors però depèn d'un únic còdec sense contemplar alternatives de compatibilitat. | Omet els atributs obligatoris de reproductors o empra connectors obsolets externs. |
| **Sindicació de Continguts (RSS/Atom)** | Genera canals RSS 2.0 i Atom 100% vàlids segons el W3C, amb dates en format RFC 822 i mecanisme d'autodescobriment HTML. | Redacta canals RSS vàlids amb múltiples ítems i dades de publicació correctes. | Construeix un fitxer RSS bàsic però comet errors en el format de dates o en la declaració XML. | Desconeix l'estructura d'un canal RSS o utilitza sintaxi invàlida que no pot ser llegida per agregadors. |
