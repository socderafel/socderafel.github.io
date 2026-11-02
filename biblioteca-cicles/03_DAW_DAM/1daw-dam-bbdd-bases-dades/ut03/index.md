---
layout: default
title: "UD3: Disseny Lògic: Model Relacional i Normalització — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD3"
prev_url: "../ut02/index.html"
prev_label: "⬅️ UD2"
next_url: "ut0301.html"
next_label: "Començar 3.1 ➡️"
---

# UD3: Disseny Lògic: Model Relacional i Normalització

Benvingut/da a la **UD3: Disseny Lògic: Model Relacional i Normalització** del mòdul professional de **Bases de Dades** per als cicles formatius de Grau Superior en **Desenvolupament d'Aplicacions Web (DAW)**, **Desenvolupament d'Aplicacions Multiplataforma (DAM)** i **Administració de Sistemes Informàtics en Xarxa (ASIX)**.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="bg-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700" letter-spacing="1">UD3: DISSENY LÒGIC: MODEL RELACIONAL I NORMALITZACIÓ</text>
  <text x="430" y="58" text-anchor="middle" fill="#94a3b8" font-size="12">1r DAW / DAM / ASIX · Mòdul de Bases de Dades · Curs 26/27</text>
  <g transform="translate(40, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-3)" stroke="#38bdf8" stroke-width="1.2"/>
    <text x="20" y="32" fill="#38bdf8" font-size="14" font-weight="700">1. Fonaments i Teoria</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Conceptes clau, estàndards,</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">normatives i especificacions tècniques.</text>
  </g>
  <g transform="translate(310, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-3)" stroke="#818cf8" stroke-width="1.2"/>
    <text x="20" y="32" fill="#818cf8" font-size="14" font-weight="700">2. Pràctica en Servidor</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Execució real de sentències SQL,</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">scripts, procediments i consultes.</text>
  </g>
  <g transform="translate(580, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-3)" stroke="#34d399" stroke-width="1.2"/>
    <text x="20" y="32" fill="#34d399" font-size="14" font-weight="700">3. Validació i Entrega</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Reptes interactius gamificats (+25 pts)</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">i comprovant oficial per a Aules.</text>
  </g>
</svg>
</div>

## 🎯 Resultat d'Aprenentatge Oficial
> **RA6: Dissenya bases de dades aplicant regles de normalització i garantint la integritat de les dades.**

---

## 🗺️ Mapa de Continguts i Apartats de la Unitat

| Apartat | Descripció | Enllaç Directe |
| :--- | :--- | :--- |
| [`3.1 Fonaments del Model Relacional: Taules, Tuples, Atributs i Claus`](ut0301.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0301.html) |
| [`3.2 Transformació del Model E/R al Model Relacional (Regles 1:1, 1:N, M:N)`](ut0302.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0302.html) |
| [`3.3 Transformació Avançada: Relacions Reflexives i Entitats Dèbils`](ut0303.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0303.html) |
| [`3.4 Transformació de Jerarquies d'Especialització i Herència`](ut0304.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0304.html) |
| [`3.5 Restriccions d'Integritat: Clau Primària, Not Null, Check i Integritat Referencial`](ut0305.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0305.html) |
| [`3.6 Teoria de la Normalització: Anomalies de Disseny i 1a Forma Normal (1FN)`](ut0306.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0306.html) |
| [`3.7 2a Forma Normal (2FN) i 3a Forma Normal (3FN)`](ut0307.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0307.html) |
| [`3.8 Formes Normals Avançades: FNBC, 4FN, 5FN i Desnormalització Controlada`](ut0308.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0308.html) |
| [`3.9 Quadern de Pràctiques de Disseny Lògic i Normalització`](ut0309.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0309.html) |

---

## 💡 Metodologia i Avaluació
1. **Comprensió Teòrica:** Estudi dels conceptes fonamentals, regles de modelatge i sintaxi estàndard SQL / NoSQL.
2. **Desenvolupament Pràctic:** Resolució dels exercicis i reptes en entorns reals de laboratori (MariaDB, MySQL, MongoDB Compass).
3. **Autoavaluació Gamificada:** Cada unitat disposa de reptes interactius amb puntuació (+25 pts) per comprovar els coneixements immediatament.
4. **Lliurament Aules:** Utilitza el generador de comprovants oficials per a lliurar les tasques a la plataforma virtual del centre.
