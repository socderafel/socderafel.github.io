---
layout: default
title: "UD8: Transformació i Consulta de Documents XML (XPath, XSLT i XQuery) — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD8"
next_url: "ut0801.html"
next_label: "8.1 Sintaxi XPath ➡️"
---

# UD8: Transformació i Consulta de Documents XML (XPath, XSLT i XQuery)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm8" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-xpath" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-xslt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-dbxml" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-xquery" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm8)"/>

  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">TRANSFORMACIÓ I CONSULTA DE DOCUMENTS XML (XPATH, XSLT I XQUERY)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Navegació per arbres de nodes, transformació declarativa a HTML/Text, bases de dades natives XML i expressions FLWOR</text>

  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-xpath)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🧭</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llenguatge XPath</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Localització de Nodes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Rutes absolutes (/) i relatives (//)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Predicats [filtre] i índexs</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Eixos: parent, child, ancestor</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Funcions text(), count(), sum()</text>
  </g>

  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-xslt)" stroke="#818cf8" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔄</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Transformació XSLT</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Fulls de Transformació</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• xsl:template match</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• xsl:for-each i xsl:value-of</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• xsl:if i xsl:choose/when</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Conversió XML a HTML i Text</text>
  </g>

  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dbxml)" stroke="#34d399" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🗄️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Emmagatzematge XML</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Persistència & BBDD</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Mapejat en taules relacionals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Tipus de dades XML natiu</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Bases de dades natives (eXist-db)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Col·leccions i índexs XML</text>
  </g>

  <g transform="translate(655, 70)">
    <rect width="180" height="165" rx="10" fill="url(#g-xquery)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Consultes XQuery</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Model FLWOR</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• For (iteració)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Let (assignació de variables)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Where (filtratge condicional)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Order by i Return</text>
  </g>
</svg>
</div>

Benvingut/da a la **Unitat Didàctica 8** de Llenguatges de Marques i Sistemes de Gestió d'Informació. En aquesta unitat aprendrem a navegar i extreure informació de documents XML mitjançant expressions XPath, a transformar dades estructurades en pàgines HTML o fitxers de text pla amb XSLT, i a executar consultes avançades amb expressions FLWOR en XQuery sobre bases de dades documentals.

---

### 📑 Apartats de la Unitat
- [**8.1 Llenguatges de navegació i localització de dades: sintaxi XPath**](./ut0801.html)
- [**8.2 Transformació de documents mitjançant XSLT**](./ut0802.html)
- [**8.3 Mètodes d'emmagatzematge de la informació i BBDD XML**](./ut0803.html)
- [**8.4 Llenguatges de consulta: sintaxi XQuery**](./ut0804.html)
- [**8.5 Quadern d'Activitats de Transformació i Consulta**](./ut0805.html)
