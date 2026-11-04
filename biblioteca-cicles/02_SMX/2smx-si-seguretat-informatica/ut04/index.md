---
layout: default
title: "UT 04: Emmagatzematge Segur, Còpies de Seguretat i Recuperació de Dades — Seguretat Informàtica"
permalink: /02_SMX/2smx-si-seguretat-informatica/ut04/index.html
prev_url: /02_SMX/2smx-si-seguretat-informatica/ut03/index.html
prev_label: "UT 03: Seguretat Lògica i Autenticació"
next_url: /02_SMX/2smx-si-seguretat-informatica/ut05/index.html
next_label: "UT 05: Seguretat Activa i Malware"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 4</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 04: Emmagatzematge Segur, Còpies de Seguretat i Recuperació de Dades

La **Unitat Temàtica 04** desenvolupa de manera exhaustiva el **Resultat d'Aprenentatge 5 (RA5)** del currículum oficial de Seguretat Informàtica. L'alumnat aprendrà a planificar i desplegar configuracions de discs tolerants a fallades (RAID), polítiques de salvaguarda basades en la regla d'or 3-2-1, automatització de còpies amb eines de consola (`rsync`, `cron`), clonació de sistemes amb Clonezilla i protocols de destrucció segura de dades certificats segons el RGPD.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA5)

- **RA5:** Gestiona dispositius d'emmagatzematge i plans de còpies de seguretat, aplicant polítiques de salvaguarda (regla 3-2-1), redundància i protocols de destrucció segura de dades.
- **Criteris d'Avaluació:**
  - Disseny i càlcul de volums d'emmagatzematge redundant RAID 0, 1, 5, 6 i 10.
  - Implementació d'estratègies de còpia completes, diferencials i incrementals.
  - Automatització de tasques de còpia mitjançant scripts i planificadors del sistema.
  - Generació i restauració d'imatges de disc *bare-metal* i instantànies (*snapshots*).
  - Execució de procediments d'esborrament segur i certificat segons normatives internacionals.

---

## 📚 Apartats Didàctics de la Unitat

1. [**4.1 Sistemes d'Emmagatzematge Redundant (RAID)**](./ut0401.html)
   - Arquitectura RAID 0, 1, 5, 6 i 10; càlculs de capacitat útil i tolerància a fallades.
   - Discs Hot-Spare i substitució en calent (*Hot-Swap*).
2. [**4.2 Polítiques de Còpies de Seguretat i la Regla 3-2-1**](./ut0402.html)
   - Còpies completes, diferencials i incrementals.
   - La regla d'or 3-2-1 (i evolució 3-2-1-1-0 immutable contra ransomware).
   - Mètriques RTO i RPO en plans de continuïtat de negoci.
3. [**4.3 Automatització de Còpies de Seguretat amb rsync i cron**](./ut0403.html)
   - Paràmetres clau de `rsync` (`-avz --delete`) sobre línia d'ordres i SSH.
   - Planificació de tasques periòdiques al dimoni `cron` (`crontab -e`).
4. [**4.4 Imatges de Sistema i Recuperació davant Desastres (DRP)**](./ut0404.html)
   - Clonació massiva de servidors amb Clonezilla i restauració *Bare-Metal*.
   - Instantànies (*Snapshots*) en sistemes de fitxers CoW i virtualització.
5. [**4.5 Destrucció Segura i Esborrament Certificat de Dades**](./ut0405.html)
   - Perills del formatat ràpid i eines forenses de recuperació.
   - Sobreescriptura certificada DoD 5220.22-M (`shred`), desmagnetització i trituració DIN 66399.

---

## 🏆 Reptes Globals de Síntesi de la Unitat 4 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut04_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Una base de dades d'un hospital requereix la màxima velocitat possible d'escriptura i lectura combinada amb la màxima seguretat i tolerància davant la fallada d'un disc. Quin nivell de RAID s'ha d'escollir si disposem de 4 discs d'alta velocitat?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut04_global_c1" value="a"> A) RAID 10 (1+0, fraccionament d'espills)</label>
    <label><input type="radio" name="opt_si_ut04_global_c1" value="b"> B) RAID 0</label>
    <label><input type="radio" name="opt_si_ut04_global_c1" value="c"> C) JBOD (Just a Bunch of Disks)</label>
    <label><input type="radio" name="opt_si_ut04_global_c1" value="d"> D) RAID 5 amb només 2 discs</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! RAID 10 és la solució predilecta per a bases de dades corporatives de màxim rendiment i alta disponibilitat." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut04_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: Per què la nova variant de la regla de backup 3-2-1-1-0 exigeix que almenys una còpia siga 'immutable' o 'fora de línia' (Air-Gapped)?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut04_global_c2" value="a"> A) Perquè el ransomware modern està programat específicament per a buscar carpetes compartides de xarxa i esborrar o xifrar els fitxers de backup abans d'atacar els equips principals.</label>
    <label><input type="radio" name="opt_si_ut04_global_c2" value="b"> B) Perquè els discs durs necessiten descansar apagats durant 24 hores.</label>
    <label><input type="radio" name="opt_si_ut04_global_c2" value="c"> C) Perquè ho prohibeix el protocol TCP/IP.</label>
    <label><input type="radio" name="opt_si_ut04_global_c2" value="d"> D) Perquè així s'evita pagar la connexió a Internet.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Si el repositori de backup està accessible per xarxa amb credencials normals, el ransomware el destruirà el primer. Les còpies immutables (WORM) impedeixen la modificació fins i tot a usuaris amb privilegis root." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut04_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Quina diferència pràctica de recuperació hi ha entre un backup Diferencial i un backup Incremental?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut04_global_c3" value="a"> A) La restauració Diferencial només necessita la còpia Completa i l'última Diferencial, mentre que la Incremental necessita la Completa més TOTES les incrementals intermèdies en ordre.</label>
    <label><input type="radio" name="opt_si_ut04_global_c3" value="b"> B) La Diferencial només funciona en cintes magnètiques.</label>
    <label><input type="radio" name="opt_si_ut04_global_c3" value="c"> C) La Incremental no pot restaurar carpetes buides.</label>
    <label><input type="radio" name="opt_si_ut04_global_c3" value="d"> D) No hi ha cap diferència, són sinònims exactes.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! La restauració diferencial és molt més ràpida i senzilla de restaurar, mentre que la incremental és més ràpida en el moment de crear la còpia diària." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut04_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: Una empresa de serveis de salut canvia els seus ordinadors antics per models nous i decideix donar els vells a una associació benèfica. Quina mesura tècnica de seguretat és legalment obligatòria sobre els discs durs abans del lliurament?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut04_global_c4" value="a"> A) Aplicar un esborrament certificat mitjançant sobreescriptura segura multinivell (com DoD 5220.22-M o ATA Secure Erase) o instal·lar discs nous verges, per a evitar la filtració d'historials mèdics protegits pel RGPD.</label>
    <label><input type="radio" name="opt_si_ut04_global_c4" value="b"> B) Crear un nou usuari anomenat 'Convidat'.</label>
    <label><input type="radio" name="opt_si_ut04_global_c4" value="c"> C) Buidar la paperera de reciclatge de l'escriptori.</label>
    <label><input type="radio" name="opt_si_ut04_global_c4" value="d"> D) Desconnectar el cable d'alimentació durant 24 hores.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Cedir equips amb dades de salut sense un esborrament certificat segons el RGPD constitueix una infracció molt greu amb sancions milionàries per part de l'AEPD." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT04_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 04</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre sistemes RAID, còpies de seguretat i destrucció segura i descarrega el certificat global de la UT 04 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
