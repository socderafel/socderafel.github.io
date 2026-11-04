---
title: "UT7 — Gestió de Servidors de Correu Electrònic (RA4)"
unit: "7"
module: "SEX"
layout: "default"
course_root: ".."
badge: "2n SMX · Serveis en Xarxa · UT07"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# 📘 UT7 — Gestió de Servidors de Correu Electrònic (RA4)

> **📌 Resultat d'Aprenentatge i Objectius:** RA4. Gestiona servidors de correu electrònic identificant requeriments d'utilització i aplicant criteris de configuració (SMTP, POP3, IMAP, Postfix, Dovecot, àlies, TLS i antispam).

## 🗂️ Índex d'Apartats i Tasques Avaluables de la Unitat

| Apartat | Títol de la Secció / Tasca Pràctica | Accés Directe |
| :--- | :--- | :--- |
| **7.1** | **7.1 Arquitectura del Correu Electrònic: MUA, MTA, MDA i Protocols (SMTP, POP3, IMAP)** | [Obrir apartat ➡️](./ut0701.html) |
| **7.2** | **7.2 Servidor d'Enviament MTA amb Postfix: Configuració, Dominis i Àlies** | [Obrir apartat ➡️](./ut0702.html) |
| **7.3** | **7.3 Servidor d'Accés MDA amb Dovecot: Bústies Maildir i Protocols IMAP/POP3** | [Obrir apartat ➡️](./ut0703.html) |
| **7.4** | **7.4 Seguretat, Xifratge TLS i Antispam: SPF, DKIM i DMARC** | [Obrir apartat ➡️](./ut0704.html) |
| **7.5** | **7.5 Clients de Correu (Thunderbird), Webmail (Roundcube) i Tasca Avaluable RA4-CE** | [Obrir apartat ➡️](./ut0705.html) |

---

## 🎯 Resum d'Aprenentatge i Metodologia

Completa cadascun dels apartats teòrics i les **Tasques Pràctiques (RA-CE)** d'aquesta unitat. Recorda que en finalitzar cada pàgina pots resoldre els **4 reptes interactius (+100 XP)** i descarregar el **Comprovant de Lliurament PDF** per a Aules.



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **UT7 — Gestió de Servidors de Correu Electrònic (RA4)** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quin protocol s'encarrega de l'enviament i transferència de correu electrònic entre l'agent d'usuari (MUA) i els servidors de correu (MTA)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) SMTP (Simple Mail Transfer Protocol)</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) IMAP4 (Internet Message Access Protocol)</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) SNMP (Simple Network Management Protocol)</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin avantatge principal ofereix el protocol IMAP respecte a POP3 en la gestió de bústies de correu?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) IMAP no requereix autenticació d'usuari per a llegir la bústia.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) POP3 permet enviar correus sortints sense necessitat de servidor SMTP.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) IMAP manté els missatges i les carpetes sincronitzats al servidor per a consultar-los des de múltiples dispositius.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Els registres DNS de tipus SPF, DKIM i DMARC ajuden a verificar l'autenticitat del domini remitent i combatre la suplantació d'identitat (spoofing) i el correu brossa.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="newaliases" data-hint="Comença per 'new' i acaba per 'aliases'.">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin comandament cal executar en Postfix després de modificar el fitxer /etc/aliases per a regenerar la base de dades d'àlies?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**UT7 — Gestió de Servidors de Correu Electrònic (RA4)**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="SEX" data-unit="UD07" data-activity="ut07_index">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>
