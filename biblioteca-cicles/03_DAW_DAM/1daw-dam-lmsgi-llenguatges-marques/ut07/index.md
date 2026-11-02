---
layout: default
title: "UD7: Definició i Validació d'Estructures de Dades XML (DTD i XML Schema) — Llenguatges de Marques"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UD7"
next_url: "ut0701.html"
next_label: "7.1 Descripció i definició ➡️"
---

# UD7: Definició i Validació d'Estructures de Dades XML (DTD i XML Schema)

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-lm7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-dtd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-xsd" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-types" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-val" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <rect width="860" height="260" rx="12" fill="url(#bg-grad-lm7)"/>

  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">DEFINICIÓ I VALIDACIÓ D'ESTRUCTURES XML (DTD I XML SCHEMA)</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Documents ben formats vs documents vàlids, gramàtiques DTD, tipus simples i complexos XSD, restriccions i espais de noms</text>

  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dtd)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📋</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Gramàtica DTD</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Declaració Formal</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ELEMENT (PCDATA, fills)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• ATTLIST (CDATA, ID, IDREF)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Multiplicitat: ?, *, +</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• DTD Interna vs Externa</text>
  </g>

  <g transform="translate(235, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-xsd)" stroke="#818cf8" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">XML Schema (XSD)</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Sintaxi Nativa XML</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• xs:element i xs:attribute</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• TargetNamespace & Prefix</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• minOccurs i maxOccurs</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Tipat fort de dades</text>
  </g>

  <g transform="translate(445, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-types)" stroke="#34d399" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🧱</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tipus & Restriccions</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">ComplexType & SimpleType</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• xs:simpleType (restriccions)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Patrons Regex (xs:pattern)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• xs:complexType (sequence, all)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Extensió i restricció</text>
  </g>

  <g transform="translate(655, 70)">
    <rect width="180" height="165" rx="10" fill="url(#g-val)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Motors de Validació</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Eines & Ecosistema</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Validadors W3C i xmllint</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Extensions VS Code / XML Tools</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Control d'errors sintàctics</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Intercanvi B2B fiable</text>
  </g>
</svg>
</div>

Benvingut/da a la **Unitat Didàctica 7** de Llenguatges de Marques i Sistemes de Gestió d'Informació. En aquesta unitat aprofundirem en el mecanisme de validació d'estructures XML mitjançant gramàtiques DTD i esquemes avançats XML Schema (XSD), garantint la integritat semàntica i la correcció formal dels documents utilitzats en entorns empresarials.

---

### 📑 Apartats de la Unitat
- [**7.1 Descripció i definició d'estructures de dades**](./ut0701.html)
- [**7.2 Definició de documents mitjançant DTD**](./ut0702.html)
- [**7.3 Esquemes XML (XML Schema / XSD): tipus simples i complexos**](./ut0703.html)
- [**7.4 Validació de documents, eines i casos pràctics**](./ut0704.html)
- [**7.5 Quadern d'Activitats de Validació DTD i XSD**](./ut0705.html)
