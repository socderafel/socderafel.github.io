---
layout: default
title: "Unitat 4: Disseny i Gestió de Bases de Dades: Base i Access — Aplicacions Ofimàtiques"
parent: "1r SMX · Aplicacions Ofimàtiques"
has_children: true
nav_order: 4
---

# 🗄️ Unitat Didàctica 4: Disseny i Gestió de Bases de Dades Ofimàtiques (LibreOffice Base i MS Access)

<div class="interactive-progress-tracker" data-module="AOF" data-unit="4" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvinguts a la **Unitat Didàctica 4** del mòdul d'Aplicacions Ofimàtiques (AOF). El tractament i la gestió de bases de dades relacionals és una competència professional crítica per a qualsevol tècnic en Sistemes Microinformàtics i Xarxes. Al llarg d'aquesta unitat aprendràs a analitzar requisits reals, modelar diagrames Entitat-Relació, transformar-los a taules relacionals, establir relacions amb Integritat Referencial, extreure dades amb consultes visuals QBE i SQL, i desenvolupar formularis i informes corporatius.

---

## 🗺️ Mapa de Continguts i Subtemes de la Unitat

| Subtema | Títol de la Guia de Treball | Resultats d'Aprenentatge | Punts Gamificats | Enllaç Directe |
| :---: | :--- | :---: | :---: | :---: |
| **4.1** | **Fonaments de Bases de Dades Relacionals i el Model Entitat-Relació (E-R)** | RA4 (a, b) | 75 XP | [📖 Explorar Subtema 4.1](./ut0401.md) |
| **4.2** | **Pas al Model Relacional: Claus Primàries, Foranes i Integritat Referencial** | RA4 (b, c) | 75 XP | [📖 Explorar Subtema 4.2](./ut0402.md) |
| **4.3** | **Consultes de Selecció (Queries), Disseny Visual QBE i Filtres Lògics** | RA4 (d, e) | 75 XP | [📖 Explorar Subtema 4.3](./ut0403.md) |
| **4.4** | **Consultes de Totals, Agrupament (GROUP BY) i Fonaments del Llenguatge SQL** | RA4 (e, f) | 75 XP | [📖 Explorar Subtema 4.4](./ut0404.md) |
| **4.5** | **Interfície d'Usuari: Formularis amb Subformularis i Informes Imprimibles** | RA4 (f, g) | 75 XP | [📖 Explorar Subtema 4.5](./ut0405.md) |

---

## 🎯 Reptes Globals de Síntesi (Unitat 4)

Demostra la teua competència global sobre sistemes gestors de bases de dades resolent els 4 reptes d'avaluació final (+100 XP):

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-4-sintesi-c1">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 1: Integritat Referencial i Registres Orfes</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Quina situació impedeix estrictament la regla d'Integritat Referencial en una base de dades relacional?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c1" value="A"> A) Que existisca una clau forana que faça referència a un registre inexistent de la taula principal (registre orfe)</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c1" value="B"> B) Que s'introduïsquen noms de clients amb accents</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c1" value="C"> C) Que la base de dades ocupe més d'1 megabyte d'espai al disc</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c1" value="D"> D) Que l'ordinador no tinga instal·lat antivirus</label>
  </div>
  <button class="btn-check" data-correct="A">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-4-sintesi-c2">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 2: Resolució de Relacions N:M</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Si una reparació pot utilitzar múltiples peces de maquinari i una mateixa peça de recanvi s'ha utilitzat en múltiples reparacions, com s'ha d'implementar aquesta relació al model relacional?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c2" value="A"> A) Creant una taula intermèdia (taula de línies de reparació) que inclou les claus foranes de Reparacions i de Peces</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c2" value="B"> B) Escrivint tots els codis de peces separats per comes en un sol camp de text</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c2" value="C"> C) Duplicant la base de dades en dos discs durs diferents</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c2" value="D"> D) Eliminant la taula de reparacions</label>
  </div>
  <button class="btn-check" data-correct="A">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-4-sintesi-c3">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 3: Agrupament de Dades en SQL</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Quina instrucció SQL és necessària quan utilitzem una funció de càlcul com <code>SUM(Import)</code> acompanyada del nom de la ciutat <code>Poblacio</code>?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c3" value="A"> A) <code>GROUP BY Poblacio</code></label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c3" value="B"> B) <code>ORDER BY DROP</code></label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c3" value="C"> C) <code>DELETE FROM Poblacio</code></label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c3" value="D"> D) <code>INSERT INTO SUM</code></label>
  </div>
  <button class="btn-check" data-correct="A">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-4-sintesi-c4">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 4: Arquitectura Mestre-Detall en Formularis</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Quina és la funció d'un subformulari incrustat dins d'un formulari mestre?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c4" value="A"> A) Mostrar automàticament els registres fills relacionats del costat N (ex: equips del client) vinculats al registre pare actiu</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c4" value="B"> B) Canviar el tema visual del sistema operatiu</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c4" value="C"> C) Executar un escaneig de virus al disc de l'usuari</label>
    <label class="option-label"><input type="radio" name="aof-4-sintesi-c4" value="D"> D) Enviar publicitat per correu electrònic</label>
  </div>
  <button class="btn-check" data-correct="A">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card" data-module="AOF" data-unit="4" data-topic="0">
  <div class="delivery-header">
    <span class="delivery-icon">📦</span>
    <div>
      <h4 class="delivery-title">Lliurament de Projecte de la Unitat 4 — Sistema Gestor del Servei Tècnic Informàtic</h4>
      <p class="delivery-subtitle">Desenvolupa la base de dades relacional completa en Base o Access: taules amb integritat referencial, consultes QBE i SQL, formulari mestre-detall i informe imprès.</p>
    </div>
  </div>
  <button class="btn-aules-download">📥 Descarrega Guia de Projecte de la Unitat en PDF</button>
</div>
