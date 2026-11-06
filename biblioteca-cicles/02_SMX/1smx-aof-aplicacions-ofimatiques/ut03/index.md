---
layout: default
course_root: ".."
title: "Unitat 3: Fulls de Càlcul i Anàlisi de Dades: Calc i Excel — Aplicacions Ofimàtiques"
parent: "1r SMX · Aplicacions Ofimàtiques"
has_children: true
nav_order: 3
---

# 📊 Unitat Didàctica 3: Fulls de Càlcul i Anàlisi de Dades (LibreOffice Calc i MS Excel)

<div class="interactive-progress-tracker" data-module="AOF" data-unit="3" data-topic="0">
  <div class="progress-bar-container">
    <div class="progress-fill"></div>
  </div>
  <div class="progress-stats">
    <span class="progress-text">Progrés global de la unitat: 0%</span>
    <span class="points-badge">0 / 475 punts</span>
  </div>
</div>

Benvinguts a la **Unitat Didàctica 3** del mòdul d'Aplicacions Ofimàtiques (AOF). El full de càlcul representa el nucli de la gestió analítica, la facturació comercial i el control d'inventaris en qualsevol empresa del sector TIC. Al llarg d'aquesta unitat aprendràs a dominar tant **LibreOffice Calc** com **Microsoft Excel**, des de la configuració de cel·les i adreçaments relatius/absoluts fins a les funcions lògiques avançades, cerques creuades, taules dinàmiques i automatització de processos.

---

## 🗺️ Mapa de Continguts i Subtemes de la Unitat

| Subtema | Títol de la Guia de Treball | Resultats d'Aprenentatge | Punts Gamificats | Enllaç Directe |
| :---: | :--- | :---: | :---: | :---: |
| **3.1** | **Entorn de Treball, Estructura del Llibre i Formatació a Calc/Excel** | RA3 (a, b, c) | 75 XP | [📖 Explorar Subtema 3.1](./ut0301.md) |
| **3.2** | **Adreçament de Cel·les: Referències Relatives, Absolutes ($A$1) i Mixtes** | RA3 (b, d) | 75 XP | [📖 Explorar Subtema 3.2](./ut0302.md) |
| **3.3** | **Funcions Matemàtiques, Estadístiques i de Manipulació de Text** | RA3 (c, d, e) | 75 XP | [📖 Explorar Subtema 3.3](./ut0303.md) |
| **3.4** | **Lògica Condicional (SI, I, O) i Funcions de Cerca Avançada (VLOOKUP / XLOOKUP)** | RA3 (e, f) | 75 XP | [📖 Explorar Subtema 3.4](./ut0304.md) |
| **3.5** | **Representació Gràfica, Taules Dinàmiques i Automatització amb Macros** | RA3 (f, g) | 75 XP | [📖 Explorar Subtema 3.5](./ut0305.md) |

---

## 🎯 Reptes Globals de Síntesi (Unitat 3)

Demostra la teua competència global sobre l'ús avançat de fulls de càlcul resolent els 4 reptes d'avaluació final (+100 XP):

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-3-sintesi-c1">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 1: Fixació de Paràmetres en Fórmules</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">En dissenyar una plantilla de pressupostos on l'IVA general es troba a la cel·la <code>$B$1</code>, per quina raó utilitzem el símbol de dòlar en multiplicar per la base imposable de cada fila?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c1" value="A"> A) Perquè si no es bloqueja amb `$B$1`, en arrossegar la fórmula cap a avall la referència es desplaçarà a B2, B3, B4 produint resultats nuls o erronis</label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c1" value="B"> B) Perquè el símbol de dòlar calcula automàticament el tipus de canvi entre euros i dòlars</label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c1" value="C"> C) Perquè és obligatori per la normativa europea de facturació electrònica</label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c1" value="D"> D) Perquè activa la impressió del document en doble cara</label>
  </div>
  <button class="btn-check" data-correct="A">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-3-sintesi-c2">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 2: Cerca Creuada de Dades</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Quina funció és l'estàndard universal en fulls de càlcul per a recuperar el preu o descripció d'un article a partir del seu codi d'identificació situat en una altra taula?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c2" value="A"> A) <code>SUMA</code></label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c2" value="B"> B) <code>CERCAV</code> (<code>VLOOKUP</code>) amb el quart argument configurat en <code>FALS</code></label>
    <label class="option-label"><input type="radio" name="aof-3-3-c2" value="C"> C) <code>CONCATENA</code></label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c2" value="D"> D) <code>COMPTA.BLANC</code></label>
  </div>
  <button class="btn-check" data-correct="B">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-3-sintesi-c3">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 3: Presa de Decisions amb la Funció SI</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Si volem comprovar si un equip informàtic necessita renovació perquè té més de 5 anys d'antiguitat O bé ha patit més de 3 incidències greus, quina combinació farem servir?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c3" value="A"> A) <code>=SI(O(Antiguitat>5; Incidencies>3); "Renovar"; "Correcte")</code></label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c3" value="B"> B) <code>=SUMA(Antiguitat; Incidencies)</code></label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c3" value="C"> C) <code>=SI(I(Antiguitat>5; Incidencies>3); "Correcte"; "Renovar")</code></label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c3" value="D"> D) <code>=COMPTA.SI(Antiguitat; 5)</code></label>
  </div>
  <button class="btn-check" data-correct="A">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="aof-3-sintesi-c4">
  <div class="challenge-header">
    <span class="challenge-title">Rept de Síntesi 4: Eficiència en Grans Volums de Dades</span>
    <span class="challenge-score">+25 XP</span>
  </div>
  <p class="challenge-question">Si una empresa té un registre de 50.000 files amb les vendes i reparacions de tot l'any i necessita saber en segons quant ha ingressat cada tècnic per trimestre, quina eina és la més eficient?</p>
  <div class="challenge-options">
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c4" value="A"> A) Calcular-ho manualment amb una calculadora de mà</label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c4" value="B"> B) Crear una Taula Dinàmica (Pivot Table) situant Tècnic a files, Trimestre a columnes i Suma d'Ingressos a valors</label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c4" value="C"> C) Aplicar un gràfic de pastís de 50.000 sectors</label>
    <label class="option-label"><input type="radio" name="aof-3-sintesi-c4" value="D"> D) Escriure 50.000 fórmules condicionals individuals</label>
  </div>
  <button class="btn-check" data-correct="B">Comprova la Resposta</button>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card" data-module="AOF" data-unit="3" data-topic="0">
  <div class="delivery-header">
    <span class="delivery-icon">📦</span>
    <div>
      <h4 class="delivery-title">Lliurament de Projecte de la Unitat 3 — Model Integral de Gestió Ofimàtica en Calc/Excel</h4>
      <p class="delivery-subtitle">Desenvolupa i lliura el llibre complet de gestió que integre catàleg, pressupostos amb CERCAV, estadístiques i tauler de control amb taula dinàmica.</p>
    </div>
  </div>
  <button class="btn-aules-download">📥 Descarrega Guia de Projecte de la Unitat en PDF</button>
</div>
