---
layout: default
title: "UD7: Compartició de Recursos i Serveis Locals — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD7"
next_url: "ut0701.html"
next_label: "7.1 ➡️"
---

# UD7: Compartició de Recursos i Serveis Locals

Benvingut/da a la **Unitat Didàctica 7** del mòdul d'Instal·lació i Manteniment de Xarxes. Un cop establerta la connectivitat TCP/IP, aprendràs a configurar la **compartició de fitxers i carpetes**, la gestió de **permisos de xarxa i NTFS**, el **mapejat d'unitats de xarxa en Windows**, la integració d'**impressores en xarxa** i la comunicació amb sistemes Linux mitjançant **Samba**.

---

## Apartats de la Unitat Didàctica

1. [**7.1 Compartició de carpetes i fitxers: permisos de xarxa vs NTFS**](ut0701.html)
   - Permisos de recurs compartit SMB, seguretat NTFS i la regla del permís més restrictiu.
2. [**7.2 Mapejat d'unitats de xarxa en Windows**](ut0702.html)
   - Notació UNC (\\servidor\carpeta), assignació de lletres d'unitat i reconnexió automàtica.
3. [**7.3 Instal·lació i compartició d'impressores de xarxa**](ut0703.html)
   - Impressores autònomes amb IP directa vs impressores USB compartides, cues i ports RAW 9100.
4. [**7.4 Compartició en xarxes heterogènies: Linux i el protocol Samba**](ut0704.html)
   - Integració Windows/Linux, protocol SMB/CIFS, el fitxer /etc/samba/smb.conf i aules LliureX.
5. [**7.5 Pràctica de Taller: Creació d'un Recurs Compartit amb Permisos**](ut0705.html)
   - Pràctica de taller pas a pas amb permisos diferenciats, mapatge d'unitat i comprovant per a Aules.

---

## 🎯 Zona d'Entrenament FPB de la Unitat Completa

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🎯 <strong>Zona d'Entrenament FPB:</strong> <span class="tracker-count">0 reptes resolts</span></span>
    <span class="tracker-pts">🏆 0 punts</span>
  </div>
  <div class="tracker-bar"><div class="tracker-fill" style="width: 0%;"></div></div>
</div>

<div class="interactive-quiz" data-quiz-id="imx_u7_idx_q1" data-answer="SMB|CIFS" data-hint="Server Message Block és el protocol de carpetes compartides de Windows.">
  <div class="quiz-question">📂 Quin és el protocol de xarxa utilitzat per compartir carpetes a Windows i emulat per Samba a Linux?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu les 3 lletres...">
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

---

## 📋 Comprovant de Lliurament per a Aules

<div class="aules-delivery-card">
  <h3>📋 Comprovant de Lliurament per a Aules</h3>
  <p>En completar els exercicis i reptes de compartició de la unitat, genera el teu informe per adjuntar-lo a la tasca d'Aules:</p>
  <div class="aules-student-field">
    <label for="aules-student-name">Nom i Cognoms de l'alumne/a:</label>
    <input type="text" id="aules-student-name" placeholder="Ex: Pere Martí Soler">
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">Calculant resultats dels reptes...</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-copy">📋 Copiar Resum per a Aules</button>
    <button type="button" class="btn-aules-dl">📄 Descarregar Comprovant (.pdf)</button>
  </div>
  <div class="aules-toast"></div>
</div>
