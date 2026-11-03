---
layout: default
title: "UT 07: Xarxes Privades Virtuals (VPN) i Telefonia IP (VoIP) — Serveis en Xarxa"
permalink: /02_SMX/2smx-sex-serveis-en-xarxa/ut07/index.html
prev_url: /02_SMX/2smx-sex-serveis-en-xarxa/ut06/index.html
prev_label: "UT 06: Mètodes d'Accés i Administració Remota"
next_url: /02_SMX/2smx-sex-serveis-en-xarxa/index.html
next_label: "Tornar a l'Índex General del Mòdul"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 7</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 07: Xarxes Privades Virtuals (VPN) i Telefonia IP (VoIP)

La **Unitat Temàtica 07** aborda dos dels serveis en xarxa més transcendents en les organitzacions modernes: la creació de **canals de comunicació segurs i xifrats mitjançant túnels VPN** per a connectar seus i treballadors remots, i el desplegament de **serveis de comunicació de veu i multimèdia en temps real mitjançant Telefonia IP (VoIP)**.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA6 i RA7)

- **RA6:** Gestiona serveis d'accés i connexió remota segurs, desplegant túnels xifrats i verificant la integritat de les comunicacions.
- **RA7:** Configura serveis de comunicacions multimèdia i telefonia sobre xarxes IP, verificant els protocols de senyalització, còdecs i qualitat de servei.

---

## 📚 Apartats Didàctics de la Unitat

1. [**7.1 Fonaments de les Xarxes Privades Virtuals (VPN)**](./ut0701.html)
   - Concepte i avantatges de les VPN enfront de línies dedicades.
   - Tipologies: Accés Remot (*Road Warrior*) vs Punt a Punt (*Site-to-Site* / *LAN-to-LAN*).
   - Evolució de protocols: PPTP (obsolet), IPsec, OpenVPN i WireGuard.
2. [**7.2 Desplegament de VPN Moderna amb WireGuard**](./ut0702.html)
   - Arquitectura de claus asimètriques per *peer*.
   - Configuració del servidor (`wg0.conf`) i paràmetres de xarxa (*ListenPort 51820 UDP*).
   - Diferència entre *Full Tunnel* (`AllowedIPs = 0.0.0.0/0`) i *Split Tunneling*.
   - Diagnòstic en temps real amb `sudo wg show`.
3. [**7.3 Fonaments de la Veu sobre IP (VoIP)**](./ut0703.html)
   - Separació arquitectònica: Senyalització (SIP / UDP 5060) vs Transport Multimèdia (RTP / UDP 10000-20000).
   - Digitalització i còdecs de veu: G.711 (alaw/ulaw), G.729, Opus i G.722.
   - Paràmetres crítics de Qualitat de Servei (QoS): Latència (<150 ms), Jitter (<30 ms) i Packet Loss (<1%).
4. [**7.4 Centraletes Telefòniques IP: Asterisk i FreePBX**](./ut0704.html)
   - Motor Asterisk i pila moderna PJSIP.
   - Registre d'extensions a `pjsip.conf` (Endpoint, Auth, AOR).
   - Disseny del Pla de Marcatge a `extensions.conf` (Dial, VoiceMail, Echo Test 500).
   - Monitorització mitjançant la consola interactiva CLI `rasterisk`.
5. [**7.5 Clients Softphone, Proves de Trucada i Diagnòstic**](./ut0705.html)
   - Configuració de clients programari (MicroSIP, Linphone, Zoiper).
   - Proves pràctiques d'intercomunicació entre terminals de l'aula.
   - Anàlisi i resolució d'incidències amb Wireshark (detecció de trucades mudes i reproducció de fluxos RTP).

---

## 🏆 Reptes Globals de Síntesi de la Unitat 7 (4)

<div class="interactive-challenge-card" data-challenge-id="sex_ut07_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Per què una política d'encaminament Split Tunneling en clients VPN pot ser preferible a un Full Tunnel en una empresa amb centenars de teletreballadors?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_sex_ut07_global_c1" value="a"> A) Perquè evita saturar la connexió a Internet de la seu central amb el tràfic d'oci privat de l'usuari (YouTube, Spotify, descàrregues), enviant només pel túnel el tràfic destinat a les xarxes internes de l'empresa.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c1" value="b"> B) Perquè Split Tunneling xifra amb més bits les contrasenyes que Full Tunnel.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c1" value="c"> C) Perquè amb Split Tunneling no cal instal·lar cap programari client.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c1" value="d"> D) Perquè Full Tunnel no és compatible amb WireGuard.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! Split Tunneling optimitza l'ample de banda corporatiu en encaminar exclusivament el tràfic corporatiu pel túnel, deixant la navegació general directa per la connexió d'origen de l'usuari." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="sex_ut07_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: En un entorn de telefonia Asterisk, quina és la funció de la directiva `context=oficina-local` definida dins d'una extensió a `pjsip.conf`?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_sex_ut07_global_c2" value="a"> A) Determina l'idioma dels missatges de veu de la centraleta.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c2" value="b"> B) Associa l'extensió telefònica amb un bloc de regles específic del pla de marcatge (`extensions.conf`), definint a quins números té permís per a trucar aquest usuari.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c2" value="c"> C) Assigna automàticament una adreça IP privada al telèfon per DHCP.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c2" value="d"> D) Bloqueja les connexions procedents d'ordinadors que no siguen Linux.</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Molt bé! El context és la frontera de seguretat del Dialplan. Permet, per exemple, que els alumnes o convidats només puguen trucar a extensions internes, mentre que direcció tinga accés a trucades a l'exterior." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="sex_ut07_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Quin problema es genera si el jitter (variació de latència) en una xarxa local és molt elevat (> 50 ms) durant una trucada VoIP?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_sex_ut07_global_c3" value="a"> A) Els paquets d'àudio arriben amb intervals irregulars, la qual cosa provoca talls continus en la veu, efecte robòtic o pèrdua de paraules en superar la memòria cau (*jitter buffer*) del receptor.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c3" value="b"> B) El servidor Asterisk s'apaga per seguretat elèctrica.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c3" value="c"> C) La veu s'escolta a doble velocitat de manera accelerada.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c3" value="d"> D) El telèfon del receptor canvia automàticament a una trucada de vídeo.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El jitter impedeix que la veu es reproduïsca de manera fluida en temps real. Per això és crucial aplicar prioritats de Qualitat de Servei (QoS) per a assegurar un lliurament uniforme dels paquets RTP." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="sex_ut07_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: En una auditoria de seguretat d'un servidor que ofereix tant accés VPN com telefonia VoIP, quina mesura és fonamental implementar per a previndre atacs de força bruta contra les extensions SIP?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_sex_ut07_global_c4" value="a"> A) Utilitzar claus febles per a facilitar la connexió dels usuaris desplaçats.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c4" value="b"> B) Integrar Fail2ban monitoritzant els registres d'Asterisk per a bloquejar les IPs atacants i exigir que les connexions remotes a la telefonia es facen exclusivament a través del túnel VPN.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c4" value="c"> C) Desactivar el xifratge TLS en SIP.</label>
    <label><input type="radio" name="opt_sex_ut07_global_c4" value="d"> D) Obrir tots els ports TCP i UDP a qualsevol adreça d'Internet.</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Molt bé! Els servidors SIP exposats a Internet són l'objectiu número 1 de bots de frau telefònic (*toll fraud*). Exigir VPN per a accedir a la centraleta o protegir-la amb Fail2ban és una pràctica de seguretat indispensable." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SEX" data-activity="UT07_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 07</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre VPN i Telefonia IP i descarrega el certificat global de la UT 07 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
