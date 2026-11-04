---
layout: default
title: "UT 06: Criptografia, Certificats Digitals i Xarxes Segures — Seguretat Informàtica"
permalink: /02_SMX/2smx-si-seguretat-informatica/ut06/index.html
prev_url: /02_SMX/2smx-si-seguretat-informatica/ut05/index.html
prev_label: "UT 05: Seguretat Activa i Malware"
next_url: /02_SMX/2smx-si-seguretat-informatica/ut07/index.html
next_label: "UT 07: Normativa, RGPD i Incidents"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 6</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 06: Criptografia, Certificats Digitals i Xarxes Segures

La **Unitat Temàtica 06** desplega de manera exhaustiva el **Resultat d'Aprenentatge 3 (RA3)** del currículum oficial de Seguretat Informàtica. L'alumnat dominarà els fonaments matemàtics de la criptografia simètrica (AES) i asimètrica (RSA, ECC), les funcions hash (SHA-256), la signatura digital i certificats X.509 de la infraestructura PKI, així com la seguretat perimetral mitjançant tallafocs d'estat (UFW) i zones DMZ.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA3)

- **RA3:** Assegura la privadesa i integritat de la informació transmesa en xarxes locals i perimetrals mitjançant criptografia, certificats digitals, tallafocs (firewalls) i comunicacions xifrades.
- **Criteris d'Avaluació:**
  - Aplicació d'algorismes de xifratge simètric i asimètric sobre dades i comunicacions.
  - Generació i verificació de sumes de control mitjançant funcions hash segures.
  - Implementació de procediments de signatura electrònica i gestió de certificats X.509.
  - Configuració de regles de tallafocs perimetrals i aïllament de xarxes en zones DMZ.
  - Anàlisi de fluxos de paquets i diagnòstic de trànsit amb eines d'auditoria (Wireshark).

---

## 📚 Apartats Didàctics de la Unitat

1. [**6.1 Fonaments de Criptografia Simètrica i Xifratge de Disc**](./ut0601.html)
   - El Principi de Kerckhoffs i la superació de la seguretat per foscor.
   - Algorisme AES-256 i modes d'operació.
   - Xifratge de volum complet amb BitLocker (TPM) i LUKS a Linux.
2. [**6.2 Criptografia Asimètrica de Clau Pública (RSA i ECC)**](./ut0602.html)
   - Parell de claus pública/privada i resolució de la distribució de claus.
   - Algorismes RSA (2048/4096) i Corba El·líptica (ECC Ed25519).
   - Criptosistemes híbrids: la negociació d'HTTPS/TLS.
3. [**6.3 Funcions Resum Criptogràfiques (Hash)**](./ut0603.html)
   - Unidireccionalitat, determinisme i efecte allau.
   - Algorismes obsolets (MD5, SHA-1) vs segurs (SHA-256, SHA-3).
   - Verificació d'integritat amb `sha256sum` i `Get-FileHash`.
4. [**6.4 Signatura Digital i Infraestructura de Clau Pública (PKI)**](./ut0604.html)
   - Procés de signatura (hash + clau privada) i verificació matemàtica (clau pública).
   - Certificats X.509, jerarquia de CAs i comprovació de revocació CRL/OCSP.
5. [**6.5 Seguretat Perimetral i Tallafocs (UFW i Wireshark)**](./ut0605.html)
   - Disseny de xarxes segures: zones LAN, DMZ i Internet externa.
   - Tallafocs d'inspecció d'estat (*Stateful*).
   - Configuració pràctica d'UFW a Linux i anàlisi de trànsit amb Wireshark.

---

## 🏆 Reptes Globals de Síntesi de la Unitat 6 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut06_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Per quina raó una connexió segura HTTPS no utilitza criptografia asimètrica RSA per a xifrar tot el vídeo o dades descarregades, sinó que només l'utilitza durant els primers mil·lisegons de la negociació?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut06_global_c1" value="a"> A) Perquè la criptografia asimètrica requereix operacions matemàtiques extremadament complexes que consumeixen fins a 1.000 vegades més CPU que AES; per això s'usa RSA només per a intercanviar una clau simètrica ràpida (criptosistema híbrid).</label>
    <label><input type="radio" name="opt_si_ut0601_global_c1" value="b"> B) Perquè RSA s'esgota quan ha xifrat més de 10 megabytes.</label>
    <label><input type="radio" name="opt_si_ut0601_global_c1" value="c"> C) Perquè la clau pública només és vàlida durant 2 segons.</label>
    <label><input type="radio" name="opt_si_ut0601_global_c1" value="d"> D) Perquè ho impedeix el navegador Google Chrome.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El criptosistema híbrid és la combinació perfecta: seguretat asimètrica per a l'intercanvi de credencials i velocitat simètrica AES per a la càrrega de dades." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut06_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: Quina propietat de seguretat s'aconsegueix quan un document electrònic va acompanyat d'una signatura digital vàlida d'un autor?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut06_global_c2" value="a"> A) Autenticitat (sabem qui l'ha signat), Integritat (demostra que ningú l'ha modificat) i No-Repudi (l'autor no pot negar l'autoria).</label>
    <label><input type="radio" name="opt_si_ut06_global_c2" value="b"> B) Que el document no es puga imprimir en paper.</label>
    <label><input type="radio" name="opt_si_ut06_global_c2" value="c"> C) Que el document ocupe exactament la meitat de megabytes.</label>
    <label><input type="radio" name="opt_si_ut06_global_c2" value="d"> D) Que el text quede traduït a l'anglès automàticament.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! La signatura digital ofereix la triple garantia indispensable per a la validesa jurídica dels tràmits telemàtics." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut06_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Què fa el navegador quan entra a un lloc web corporatiu i descobreix que el certificat digital SSL/TLS ha estat revocat per l'Autoritat de Certificació a través d'una consulta OCSP?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut06_global_c3" value="a"> A) Bloqueja immediatament la connexió i mostra una pantalla roja d'alerta greu de seguretat, advertint que el certificat ha estat anul·lat (per exemple, per robatori de clau).</label>
    <label><input type="radio" name="opt_si_ut06_global_c3" value="b"> B) Continua la navegació sense avisar de res.</label>
    <label><input type="radio" name="opt_si_ut06_global_c3" value="c"> C) Tanca la pestanya i reinicia l'ordinador.</label>
    <label><input type="radio" name="opt_si_ut06_global_c3" value="d"> D) Esborra les galetes del navegador.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El protocol OCSP i les llistes CRL permeten retirar la confiança a un certificat abans de la seua data de caducitat natural si ha patit un compromís." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut06_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: En una auditoria de xarxa amb Wireshark es detecta una allau massiva de paquets amb el flag TCP SYN activat procedents de milers d'IPs diferents contra el port 80 del servidor web. De quin tipus d'atac es tracta?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut06_global_c4" value="a"> A) Un atac de Denegació de Servei Distribuïda (DDoS SYN Flood) destinat a esgotar la memòria de connexions del servidor.</label>
    <label><input type="radio" name="opt_si_ut06_global_c4" value="b"> B) Una descàrrega normal de fitxers per FTP.</label>
    <label><input type="radio" name="opt_si_ut06_global_c4" value="c"> C) Un tall elèctric al servidor DNS.</label>
    <label><input type="radio" name="opt_si_ut06_global_c4" value="d"> D) Una prova d'impressió en xarxa.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El SYN Flood inunda la cua de connexions a mig obrir (*half-open connections*), deixant el servidor web incapaç d'atendre peticions legítimes." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT06_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 06</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre criptografia, certificats i tallafocs i descarrega el certificat global de la UT 06 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
