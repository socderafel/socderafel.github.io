---
layout: default
title: "🗄️ Bases de Dades — 1r DAW / DAM / ASIX · Grau Superior"
course_root: "."
badge: "1r DAW / DAM / ASIX · Grau Superior · Curs 26/27"
---

# 🗄️ Bases de Dades (SQL, Modelatge i NoSQL)

Benvingut/da al portal del mòdul professional de **Bases de Dades**, comú als cicles formatius de Grau Superior en **Desenvolupament d'Aplicacions Web (DAW)**, **Desenvolupament d'Aplicacions Multiplataforma (DAM)** i **Administració de Sistemes Informàtics en Xarxa (ASIX)**.

Aquest curs proporciona una formació sòlida i pràctica: des del disseny conceptual mitjançant diagrames Entitat-Relació i la normalització matemàtica de taules, fins a la implementació en servidors relacionals (MySQL / MariaDB), la programació de procediments i disparadors (*triggers*), i el desplegament en tecnologies NoSQL orientades a documents (MongoDB).

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-dis" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sql" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-prg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-nosql" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <text x="450" y="34" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700" letter-spacing="1">ARQUITECTURA I CICLE DE VIDA DE LES BASES DE DADES (CURS 26/27)</text>
  <text x="450" y="54" text-anchor="middle" fill="#94a3b8" font-size="12">1r DAW / 1r DAM / 1r ASIX · Modelatge Conceptual, Lògic, Físic, Llenguatge SQL, PL/SQL i Paradigmes NoSQL</text>

  <!-- Bloc 1: Disseny i Modelatge -->
  <g transform="translate(30, 75)">
    <rect width="195" height="175" rx="10" fill="url(#g-dis)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Modelatge &amp; E/R</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">UD1, UD2 i UD3</text>
    <text x="15" y="86" fill="#cbd5e1" font-size="11">• Sistemes SGBD i ANSI/SPARC</text>
    <text x="15" y="106" fill="#cbd5e1" font-size="11">• Model Entitat-Relació (E/R)</text>
    <text x="15" y="126" fill="#cbd5e1" font-size="11">• Pas al Model Relacional</text>
    <text x="15" y="146" fill="#cbd5e1" font-size="11">• Normalització (1FN, 2FN, 3FN)</text>
  </g>

  <!-- Bloc 2: Llenguatge SQL -->
  <g transform="translate(245, 75)">
    <rect width="195" height="175" rx="10" fill="url(#g-sql)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llenguatge SQL</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">UD4, UD5 i UD6</text>
    <text x="15" y="86" fill="#cbd5e1" font-size="11">• DDL: CREATE, ALTER, DROP</text>
    <text x="15" y="106" fill="#cbd5e1" font-size="11">• DCL: Usuaris i Permisos GRANT</text>
    <text x="15" y="126" fill="#cbd5e1" font-size="11">• DML: INSERT, UPDATE, DELETE</text>
    <text x="15" y="146" fill="#cbd5e1" font-size="11">• DQL: Consultes, JOINs i Vistes</text>
  </g>

  <!-- Bloc 3: Programació Servidor -->
  <g transform="translate(460, 75)">
    <rect width="195" height="175" rx="10" fill="url(#g-prg)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">⚡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Programació en BD</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">UD7 · PL/SQL i Triggers</text>
    <text x="15" y="86" fill="#cbd5e1" font-size="11">• Procediments emmagatzemats</text>
    <text x="15" y="106" fill="#cbd5e1" font-size="11">• Disparadors (Triggers) d'auditoria</text>
    <text x="15" y="126" fill="#cbd5e1" font-size="11">• Cursors iteratius i control</text>
    <text x="15" y="146" fill="#cbd5e1" font-size="11">• Gestió d'excepcions i Handlers</text>
  </g>

  <!-- Bloc 4: NoSQL i Big Data -->
  <g transform="translate(675, 75)">
    <rect width="195" height="175" rx="10" fill="url(#g-nosql)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">🍃</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">NoSQL &amp; Documents</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">UD8 · MongoDB</text>
    <text x="15" y="86" fill="#cbd5e1" font-size="11">• Teorema CAP i escalabilitat</text>
    <text x="15" y="106" fill="#cbd5e1" font-size="11">• Arquitectura de documents BSON</text>
    <text x="15" y="126" fill="#cbd5e1" font-size="11">• Entorn mongosh i Compass</text>
    <text x="15" y="146" fill="#cbd5e1" font-size="11">• Operacions CRUD completes</text>
  </g>
</svg>
</div>

---

## 🗺️ Mapa Curricular del Curs (8 Unitats Didàctiques)

| Unitat | Bloc Temàtic Curricular | Resultat d'Aprenentatge | Accés Directe |
| :---: | :--- | :---: | :---: |
| **UT01** | **UD1: Sistemes d'Emmagatzematge i SGBD** | `RA1` | [**Entrar a la Unitat ➡️**](./ut01/index.html) |
| **UT02** | **UD2: Disseny Conceptual: Model Entitat-Relació (E/R)** | `RA6` | [**Entrar a la Unitat ➡️**](./ut02/index.html) |
| **UT03** | **UD3: Disseny Lògic: Model Relacional i Normalització** | `RA6` | [**Entrar a la Unitat ➡️**](./ut03/index.html) |
| **UT04** | **UD4: Disseny Físic: SQL DDL i DCL** | `RA2` | [**Entrar a la Unitat ➡️**](./ut04/index.html) |
| **UT05** | **UD5: Manipulació de Dades: SQL DML i Transaccions TCL** | `RA4` | [**Entrar a la Unitat ➡️**](./ut05/index.html) |
| **UT06** | **UD6: Consultes a Bases de Dades: SQL DQL** | `RA3` | [**Entrar a la Unitat ➡️**](./ut06/index.html) |
| **UT07** | **UD7: Programació en Servidor: Procediments, Triggers i Cursors** | `RA5` | [**Entrar a la Unitat ➡️**](./ut07/index.html) |
| **UT08** | **UD8: Bases de Dades NoSQL i Tendències: MongoDB** | `RA7` | [**Entrar a la Unitat ➡️**](./ut08/index.html) |

---

## ⚙️ Entorn Tecnològic de Treball
Al llarg del curs es faran servir les eines professionals més utilitzades al sector del desenvolupament de programari:
- **Motors Relacionals:** MariaDB 10.x / MySQL 8.0 desplegats en local i amb contenidors Docker.
- **Clients i Entorns Gràfics:** DBeaver Community, MySQL Workbench, phpMyAdmin i consola de terminal CLI.
- **Eines de Disseny Conceptual:** Draw.io i visualitzadors de modelatge relacional.
- **Bases de Dades NoSQL:** MongoDB 7.x, shell interactiu `mongosh` i MongoDB Compass.

---

## 🏆 Sistema d'Autoavaluació Gamificada i Lliurament Aules
- Cada unitat didàctica compta amb un **Quadern de Pràctiques i Reptes Interactius** amb més de 45 activitats de laboratori resoltes pas a pas.
- **Reptes Interactius (+25 pts):** Preguntes d'autoavaluació, qüestionaris test i reptes Vertader/Fals amb retroacció instantània.
- **Targeta de Lliurament Aules:** Generador automàtic d'informes per a copiar el resum del treball realitzat i adjuntar-lo a la plataforma virtual del centre educatiu amb un sol clic.
