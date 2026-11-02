---
layout: default
title: "UD6: Consultes a Bases de Dades: SQL DQL — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD6"
prev_url: "../ut05/index.html"
prev_label: "⬅️ UD5"
next_url: "ut0601.html"
next_label: "Començar 6.1 ➡️"
---

# UD6: Consultes a Bases de Dades: SQL DQL

Benvingut/da a la **UD6: Consultes a Bases de Dades: SQL DQL** del mòdul professional de **Bases de Dades** per als cicles formatius de Grau Superior en **Desenvolupament d'Aplicacions Web (DAW)**, **Desenvolupament d'Aplicacions Multiplataforma (DAM)** i **Administració de Sistemes Informàtics en Xarxa (ASIX)**.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="bg-grad-6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700" letter-spacing="1">UD6: CONSULTES A BASES DE DADES: SQL DQL</text>
  <text x="430" y="58" text-anchor="middle" fill="#94a3b8" font-size="12">1r DAW / DAM / ASIX · Mòdul de Bases de Dades · Curs 26/27</text>
  <g transform="translate(40, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-6)" stroke="#38bdf8" stroke-width="1.2"/>
    <text x="20" y="32" fill="#38bdf8" font-size="14" font-weight="700">1. Fonaments i Teoria</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Conceptes clau, estàndards,</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">normatives i especificacions tècniques.</text>
  </g>
  <g transform="translate(310, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-6)" stroke="#818cf8" stroke-width="1.2"/>
    <text x="20" y="32" fill="#818cf8" font-size="14" font-weight="700">2. Pràctica en Servidor</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Execució real de sentències SQL,</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">scripts, procediments i consultes.</text>
  </g>
  <g transform="translate(580, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-6)" stroke="#34d399" stroke-width="1.2"/>
    <text x="20" y="32" fill="#34d399" font-size="14" font-weight="700">3. Validació i Entrega</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Reptes interactius gamificats (+25 pts)</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">i comprovant oficial per a Aules.</text>
  </g>
</svg>
</div>

## 🎯 Resultat d'Aprenentatge Oficial
> **RA3: Consulta la informació continguda en bases de dades utilitzant el llenguatge d'interrogació (DQL).**

---

## 🗺️ Mapa de Continguts i Apartats de la Unitat

| Apartat | Descripció | Enllaç Directe |
| :--- | :--- | :--- |
| [`6.1 Estructura Bàsica d'una Consulta SQL: Clàusula SELECT i FROM`](ut0601.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0601.html) |
| [`6.2 Consultes Simples: Filtratge amb WHERE i Operadors de Comparació`](ut0602.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0602.html) |
| [`6.3 Operadors Especials (BETWEEN, IN, LIKE, IS NULL)`](ut0603.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0603.html) |
| [`6.4 Camps Calculats, Àlies (AS), Ordenació (ORDER BY) i Limitació (LIMIT)`](ut0604.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0604.html) |
| [`6.5 Consultes d'Agregat: Funcions de Resum (COUNT, SUM, AVG) i GROUP BY`](ut0605.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0605.html) |
| [`6.6 Filtratge de Grups amb la Clàusula HAVING`](ut0606.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0606.html) |
| [`6.7 Consultes Multitaula I: Composició Interna (INNER JOIN)`](ut0607.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0607.html) |
| [`6.8 Consultes Multitaula II: Composició Externa (LEFT JOIN, RIGHT JOIN)`](ut0608.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0608.html) |
| [`6.9 Subconsultes (Subqueries): Escalares, de Llista i Correlacionades`](ut0609.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0609.html) |
| [`6.10 Vistes (CREATE VIEW) i Optimització de Consultes amb EXPLAIN`](ut0610.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0610.html) |
| [`6.11 Quadern de Pràctiques DQL Avançat`](ut0611.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0611.html) |

---

## 💡 Metodologia i Avaluació
1. **Comprensió Teòrica:** Estudi dels conceptes fonamentals, regles de modelatge i sintaxi estàndard SQL / NoSQL.
2. **Desenvolupament Pràctic:** Resolució dels exercicis i reptes en entorns reals de laboratori (MariaDB, MySQL, MongoDB Compass).
3. **Autoavaluació Gamificada:** Cada unitat disposa de reptes interactius amb puntuació (+25 pts) per comprovar els coneixements immediatament.
4. **Lliurament Aules:** Utilitza el generador de comprovants oficials per a lliurar les tasques a la plataforma virtual del centre.
