---
layout: default
title: "UD7: Programació en Servidor: Procediments, Triggers i Cursors — Bases de Dades"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Bases de Dades · UD7"
prev_url: "../ut06/index.html"
prev_label: "⬅️ UD6"
next_url: "ut0701.html"
next_label: "Començar 7.1 ➡️"
---

# UD7: Programació en Servidor: Procediments, Triggers i Cursors

Benvingut/da a la **UD7: Programació en Servidor: Procediments, Triggers i Cursors** del mòdul professional de **Bases de Dades** per als cicles formatius de Grau Superior en **Desenvolupament d'Aplicacions Web (DAW)**, **Desenvolupament d'Aplicacions Multiplataforma (DAM)** i **Administració de Sistemes Informàtics en Xarxa (ASIX)**.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="bg-grad-7" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="18" font-weight="700" letter-spacing="1">UD7: PROGRAMACIÓ EN SERVIDOR: PROCEDIMENTS, TRIGGERS I CURSORS</text>
  <text x="430" y="58" text-anchor="middle" fill="#94a3b8" font-size="12">1r DAW / DAM / ASIX · Mòdul de Bases de Dades · Curs 26/27</text>
  <g transform="translate(40, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-7)" stroke="#38bdf8" stroke-width="1.2"/>
    <text x="20" y="32" fill="#38bdf8" font-size="14" font-weight="700">1. Fonaments i Teoria</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Conceptes clau, estàndards,</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">normatives i especificacions tècniques.</text>
  </g>
  <g transform="translate(310, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-7)" stroke="#818cf8" stroke-width="1.2"/>
    <text x="20" y="32" fill="#818cf8" font-size="14" font-weight="700">2. Pràctica en Servidor</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Execució real de sentències SQL,</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">scripts, procediments i consultes.</text>
  </g>
  <g transform="translate(580, 80)">
    <rect width="240" height="110" rx="8" fill="url(#bg-grad-7)" stroke="#34d399" stroke-width="1.2"/>
    <text x="20" y="32" fill="#34d399" font-size="14" font-weight="700">3. Validació i Entrega</text>
    <text x="20" y="58" fill="#cbd5e1" font-size="11">Reptes interactius gamificats (+25 pts)</text>
    <text x="20" y="76" fill="#cbd5e1" font-size="11">i comprovant oficial per a Aules.</text>
  </g>
</svg>
</div>

## 🎯 Resultat d'Aprenentatge Oficial
> **RA5: Desenvolupa procediments emmagatzemats, funcions, triggers i cursors aplicant lògica de programació en servidor.**

---

## 🗺️ Mapa de Continguts i Apartats de la Unitat

| Apartat | Descripció | Enllaç Directe |
| :--- | :--- | :--- |
| [`7.1 Introducció a la Programació en SGBD: Guions SQL i Delimitadors`](ut0701.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0701.html) |
| [`7.2 Declaració de Variables (DECLARE) i Assignació (SET, INTO)`](ut0702.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0702.html) |
| [`7.3 Procediments Emmagatzemats (CREATE PROCEDURE): Paràmetres IN, OUT, INOUT`](ut0703.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0703.html) |
| [`7.4 Sentències Preparades (PREPARE, EXECUTE) i SQL Dinàmic`](ut0704.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0704.html) |
| [`7.5 Estructures de Control de Flux: Condicionals (IF, CASE) i Bucles (WHILE, LOOP)`](ut0705.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0705.html) |
| [`7.6 Esdeveniments Programats (Event Scheduler): Tasques Automàtiques`](ut0706.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0706.html) |
| [`7.7 Disparadors (Triggers): Tipus BEFORE/AFTER, Registres NEW i OLD`](ut0707.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0707.html) |
| [`7.8 Cursors: Declaració, Obertura, Lectura (FETCH) i Tancament`](ut0708.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0708.html) |
| [`7.9 Funcions d'Usuari (CREATE FUNCTION): Retorn de Valors`](ut0709.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0709.html) |
| [`7.10 Gestió d'Excepcions i Controladors d'Errors (DECLARE HANDLER)`](ut0710.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0710.html) |
| [`7.11 Quadern de Pràctiques de Programació en Servidor`](ut0711.html) | Teoria i aplicació pràctica | [Entrar ➡️](ut0711.html) |

---

## 💡 Metodologia i Avaluació
1. **Comprensió Teòrica:** Estudi dels conceptes fonamentals, regles de modelatge i sintaxi estàndard SQL / NoSQL.
2. **Desenvolupament Pràctic:** Resolució dels exercicis i reptes en entorns reals de laboratori (MariaDB, MySQL, MongoDB Compass).
3. **Autoavaluació Gamificada:** Cada unitat disposa de reptes interactius amb puntuació (+25 pts) per comprovar els coneixements immediatament.
4. **Lliurament Aules:** Utilitza el generador de comprovants oficials per a lliurar les tasques a la plataforma virtual del centre.
