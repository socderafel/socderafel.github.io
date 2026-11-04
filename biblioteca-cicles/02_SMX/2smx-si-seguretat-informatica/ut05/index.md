---
title: "UT 05: Seguretat Activa, Malware i Eines de Protecció — Seguretat Informàtica"
layout: "default"
prev_url: "/02_SMX/2smx-si-seguretat-informatica/ut04/index.html"
prev_label: "UT 04: Emmagatzematge Segur i Còpies"
next_url: "/02_SMX/2smx-si-seguretat-informatica/ut06/index.html"
next_label: "UT 06: Criptografia i Xarxes Segures"
course_root: ".."
badge: "2n SMX · Seguretat Informàtica · UT05"
module: "SI"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 5</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 05: Seguretat Activa, Malware i Eines de Protecció

La **Unitat Temàtica 05** desenvolupa de manera integral el **Resultat d'Aprenentatge 2 (RA2)** del currículum oficial de Seguretat Informàtica. L'alumnat aprendrà a identificar i classificar les amenaces modernes de programari maliciós (des de virus clàssics i cucs fins a xarxes botnet i ransomware de doble extorsió), el funcionament dels motors antivirus i EDR, el desplegament de ClamAV en servidors Linux i les tècniques professionals de bastionat (*hardening*) per a reduir la superfície d'atac.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA2)

- **RA2:** Aplica mecanismes de seguretat activa, identificant amenaces de programari maliciós (malware), analitzant vulnerabilitats i implementant eines antivirus i de desinfecció.
- **Criteris d'Avaluació:**
  - Caracterització de les diferents tipologies de programari maliciós i els seus vectors de contagi.
  - Anàlisi dels mecanismes d'extorsió i segrest de dades basats en ransomware.
  - Comparativa de les tècniques de detecció: signatures, heurística i entorns de proves (*sandboxes*).
  - Instal·lació, actualització de signatures i escaneig de sistemes amb ClamAV.
  - Aplicació de tècniques de bastionat i reducció de serveis innecessaris sobre el sistema operatiu.

---

## 📚 Apartats Didàctics de la Unitat

1. [**5.1 Taxonomia del Programari Maliciós (Malware)**](./ut0501.html)
   - Virus, cucs (*worms*), troians (RAT), rootkits i spyware.
   - Diferència estructural entre el contagi autònom del cuc i la dependència d'amfitrió del virus.
2. [**5.2 Amenaces Avançades: Ransomware i Xarxes Botnet**](./ut0502.html)
   - Cripto-segrest de dades (AES+RSA), doble i triple extorsió.
   - Estructura de botnets, equips zombie i servidors C2 (*Command & Control*).
3. [**5.3 Mecanismes de Detecció Antivirus i Solucions EDR**](./ut0503.html)
   - Comparativa: signatures, anàlisi heurística i sandboxing.
   - Limitacions enfront d'atacs Zero-Day i evolució cap a EDR (*Endpoint Detection and Response*).
4. [**5.4 Desplegament d'Antivirus en Linux amb ClamAV**](./ut0504.html)
   - Instal·lació de `clamav`, actualització periòdica de signatures amb `freshclam`.
   - Comandes d'escaneig recursiu i aïllament en quarantena amb `clamscan`.
5. [**5.5 Bastionat del Sistema Operatiu (OS Hardening)**](./ut0505.html)
   - Reducció de superfície d'atac, desactivació de serveis innecessaris i pegats de seguretat.
   - Protecció de l'accés remot OpenSSH i auditoria del sistema amb Lynis.

---

## 🏆 Reptes Globals de Síntesi de la Unitat 5 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut05_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Per quina raó un atac de ransomware és capaç de propagar-se ràpidament per tota una xarxa local d'una empresa en pocs minuts sense necessitat que cada usuari òbriga un fitxer infectat?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut05_global_c1" value="a"> A) Perquè els ransomwares moderns incorporen mòduls de cuc (Worm) que exploten vulnerabilitats conegudes en serveis de xarxa actius (com SMB al port 445) per a saltar d'un ordinador a un altre de forma autònoma.</label>
    <label><input type="radio" name="opt_si_ut05_global_c1" value="b"> B) Perquè els monitors dels equips estan connectats al mateix cable elèctric.</label>
    <label><input type="radio" name="opt_si_ut05_global_c1" value="c"> C) Perquè els usuaris comparteixen la mateixa cadira d'oficina.</label>
    <label><input type="radio" name="opt_si_ut05_global_c1" value="d"> D) Perquè el ransomware viatja per la línia de telèfon analògica.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! Com va demostrar el cas WannaCry, la combinació de ransomware amb capacitats de cuc permet infectar milers d'ordinadors en una mateixa subxarxa en segons." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut05_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: Un analista de seguretat rep un fitxer desconegut sospitós i el sotmet a un entorn 'Sandbox'. Què ocorre exactament durant aquest procés?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut05_global_c2" value="a"> A) S'executa el programa a l'interior d'una màquina virtual completament aïllada i controlada per a enregistrar en temps real totes les seues accions (connexions de xarxa, fitxers creats, claus de registre) sense posar en risc la xarxa real.</label>
    <label><input type="radio" name="opt_si_ut05_global_c2" value="b"> B) S'imprimeix el codi font en paper per a llegir-lo amb lupa.</label>
    <label><input type="radio" name="opt_si_ut05_global_c2" value="c"> C) S'envia el fitxer a la paperera de reciclatge.</label>
    <label><input type="radio" name="opt_si_ut05_global_c2" value="d"> D) Es comprimeix el fitxer amb contrasenya de 4 números.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El Sandboxing permet observar el comportament empíric del programa maliciós sense exposar la infraestructura corporativa real." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut05_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: En un servidor Linux s'executa `clamscan -r --move=/var/quarantine /dades/`. Què farà l'antivirus si detecta un document PDF infectat amb un troià?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut05_global_c3" value="a"> A) Desplaçarà el fitxer infectat immediatament a la carpeta segura `/var/quarantine`, impedint que cap usuari puga obrir-lo o executar-lo per accident.</label>
    <label><input type="radio" name="opt_si_ut05_global_c3" value="b"> B) Apagarà el servidor web.</label>
    <label><input type="radio" name="opt_si_ut05_global_c3" value="c"> C) Enviarà el PDF per correu a tots els contactes.</label>
    <label><input type="radio" name="opt_si_ut05_global_c3" value="d"> D) Reformatarà la partició `/dades`.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! L'aïllament en quarantena neutralitza l'amenaça immediata alhora que preserva la mostra per a l'anàlisi de l'equip de resposta a incidents." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut05_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: En una auditoria amb Lynis, l'eina recomana desinstal·lar paquets com `telnetd`, `rsh-server` i desactivar ports antics. Per què aquesta mesura és un pilar clau de bastionat?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut05_global_c4" value="a"> A) Perquè aquests protocols transmeten credencials i dades en text pla sense xifrar a través de la xarxa, sent vulnerables a intercepció fàcil (*sniffing*), a més de contindre vulnerabilitats conegudes antigues.</label>
    <label><input type="radio" name="opt_si_ut05_global_c4" value="b"> B) Perquè ocupen més de 100 GB d'espai al disc dur.</label>
    <label><input type="radio" name="opt_si_ut05_global_c4" value="c"> C) Perquè fan que el teclat de l'ordinador funcione en anglès.</label>
    <label><input type="radio" name="opt_si_ut05_global_c4" value="d"> D) Perquè no són compatibles amb monitors panoràmics.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! Eliminar protocols insegurs heredats que no utilitzen xifratge és una de les primeres mesures d'or de qualsevol procés de hardening." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT05_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 05</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre malware, antivirus i bastionat del SO i descarrega el certificat global de la UT 05 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
