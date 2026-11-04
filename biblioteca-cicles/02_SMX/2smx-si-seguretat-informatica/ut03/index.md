---
title: "UT 03: Seguretat Lògica, Autenticació i Control d'Accés — Seguretat Informàtica"
layout: "default"
prev_url: "/02_SMX/2smx-si-seguretat-informatica/ut02/index.html"
prev_label: "UT 02: Seguretat Passiva i CPD"
next_url: "/02_SMX/2smx-si-seguretat-informatica/ut04/index.html"
next_label: "UT 04: Emmagatzematge Segur i Còpies de Seguretat"
course_root: ".."
badge: "2n SMX · Seguretat Informàtica · UT03"
module: "SI"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés Global de la Unitat 3</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes de síntesi superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 03: Seguretat Lògica, Autenticació i Control d'Accés

La **Unitat Temàtica 03** aprofundeix en els mecanismes de **seguretat lògica** encarregats de protegir els recursos del sistema mitjançant la verificació d'identitat (autenticació multifactor), l'establiment de polítiques de contrasenyes robustes i el control d'autorització i permisos sobre sistemes de fitxers NTFS i Linux.

---

## 🎯 Resultats d'Aprenentatge Curriculars (RA3 Parcial)

- **RA3:** Assegura la privadesa i integritat de la informació en sistemes operatius, implementant polítiques d'autenticació, control d'accés lògic i assignació de permisos sobre recursos locals i en xarxa.

---

## 📚 Apartats Didàctics de la Unitat

1. [**3.1 Factors d'Autenticació en Sistemes Informàtics**](./ut0301.html)
   - Identificació, autenticació i autorització.
   - Els 3 factors universals: Allò que saps, allò que tens i allò que ets.
2. [**3.2 Polítiques de Contrasenyes Corporatives i GPO**](./ut0302.html)
   - Longitud, complexitat, historial i bloqueig d'intents fallits a Windows i Linux (`pam_pwquality`, `chage`).
   - Recomanacions modernes NIST SP 800-63B i frases de pas.
3. [**3.3 Autenticació Multifactor (MFA/2FA) i FIDO2**](./ut0303.html)
   - Vulnerabilitats dels SMS i seguretat de l'algorisme TOTP (RFC 6238).
   - Claus físiques FIDO2 / Passkeys i resistència al phishing.
   - Mitigació d'atacs de fatiga MFA (*Number Matching*).
4. [**3.4 Models de Control d'Accés i Autorització (DAC, MAC, RBAC)**](./ut0304.html)
   - Control discrecional (DAC), obligatori (MAC) i basat en rols (RBAC).
   - El principi de mínim privilegi (*Least Privilege*).
5. [**3.5 Permisos en Sistemes de Fitxers: NTFS vs. POSIX/ACLs**](./ut0305.html)
   - Permisos estàndard NTFS, herència i denegació explícita.
   - Permisos octals POSIX (`chmod 750`) i gestió avançada amb `setfacl` / `getfacl`.

---

## 🏆 Reptes Globals de Síntesi de la Unitat 3 (4)

<div class="interactive-challenge-card" data-challenge-id="si_ut03_global_c1" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 1: Per què utilitzar claus FIDO2 (com una YubiKey) és molt més segur que rebre codis de verificació per SMS al telèfon mòbil?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut03_global_c1" value="a"> A) Perquè els SMS poden ser interceptats mitjançant duplicats il·legítims de targeta (SIM Swapping) o xarxes SS7, mentre que FIDO2 utilitza criptografia asimètrica tancada al xip maquinari i és immune al phishing.</label>
    <label><input type="radio" name="opt_si_ut0301_global_c1" value="b"> B) Perquè els SMS consumeixen massa bateria del mòbil.</label>
    <label><input type="radio" name="opt_si_ut0301_global_c1" value="c"> C) Perquè FIDO2 permet enviar fotos pel túnel.</label>
    <label><input type="radio" name="opt_si_ut0301_global_c1" value="d"> D) No hi ha diferència de seguretat entre ambdós mètodes.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El SMS és el mecanisme més feble de 2FA pel risc de SIM Swapping. FIDO2 és actualment el màxim estàndard de seguretat contra atacs de suplantació." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut03_global_c2" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 2: Un usuari accedeix amb el compte d'administrador local per a consultar el correu, descarregar fitxers d'Internet i navegar per la xarxa. Quina bona pràctica de seguretat està violant de manera greu?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut03_global_c2" value="a"> A) El principi de Mínim Privilegi (Least Privilege), ja que qualsevol malware descarregat accidentalment tindrà permisos totals per a infectar i controlar tot el sistema sense restriccions.</label>
    <label><input type="radio" name="opt_si_ut03_global_c2" value="b"> B) La tríada CIA en el component d'integritat de la font d'alimentació.</label>
    <label><input type="radio" name="opt_si_ut03_global_c2" value="c"> C) El protocol NTP de sincronització horària.</label>
    <label><input type="radio" name="opt_si_ut03_global_c2" value="d"> D) La norma TIA-942 de passadissos freds.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El treball diari sempre ha de realitzar-se amb un compte d'usuari estàndard sense privilegis d'administració." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut03_global_c3" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 3: Què significa el permís numèric `chmod 755 script.sh` a Linux?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut03_global_c3" value="a"> A) El propietari té rwx (Lectura, Escriptura, Execució); el grup i els altres tenen r-x (Lectura i Execució, però no poden modificar-lo).</label>
    <label><input type="radio" name="opt_si_ut03_global_c3" value="b"> B) Tothom pot esborrar el fitxer.</label>
    <label><input type="radio" name="opt_si_ut03_global_c3" value="c"> C) Només l'administrador root pot llegir-lo.</label>
    <label><input type="radio" name="opt_si_ut03_global_c3" value="d"> D) El fitxer queda xifrat amb clau simètrica.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! 7 = 4+2+1 (rwx); 5 = 4+0+1 (r-x); 5 = 4+0+1 (r-x). És el permís estàndard per a programes i scripts executables d'ús general." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-challenge-id="si_ut03_global_c4" data-points="25">
  <div style="font-weight:700; margin-bottom:8px;">Repte de Síntesi 4: En una auditoria de seguretat d'Active Directory es descobreix que els usuaris no tenen configurat bloqueig de compte davant intents fallits. Quin perill imminent suposa això per a l'empresa?</div>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:6px;">
    <label><input type="radio" name="opt_si_ut03_global_c4" value="a"> A) Un atacant pot executar un atac de diccionari provant milers de contrasenyes per minut contra el servidor sense que el sistema bloquege el compte en cap moment.</label>
    <label><input type="radio" name="opt_si_ut03_global_c4" value="b"> B) Els ordinadors s'apagaran sols cada 15 minuts.</label>
    <label><input type="radio" name="opt_si_ut03_global_c4" value="c"> C) El servidor DHCP deixarà d'assignar IPs.</label>
    <label><input type="radio" name="opt_si_ut03_global_c4" value="d"> D) El cable de xarxa perdrà velocitat de transmissió.</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El llindar de bloqueig de compte (Account Lockout Threshold) és l'única defensa eficaç que frena els atacs de força bruta en línia." style="margin-top:10px; padding:6px 14px; background:var(--primary); color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova la resposta</button>
  <div class="feedback-msg" style="margin-top:8px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" data-module="SI" data-activity="UT03_GLOBAL" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:16px 20px; margin-top:28px;">
  <div style="font-weight:700; font-size:1.05rem; margin-bottom:8px; color:var(--text-main);">📋 Lliurament Global d'Unitat a Aules — UT 03</div>
  <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:14px;">Completa els 4 reptes de síntesi d'aquesta unitat sobre seguretat lògica, autenticació i permisos de fitxers i descarrega el certificat global de la UT 03 en PDF per a la seua qualificació a Aules.</p>
  <button class="btn-aules-download" style="background:#10b981; color:#fff; border:none; padding:8px 18px; border-radius:6px; font-weight:600; cursor:pointer;">📥 Descarregar Justificant Global PDF per a Aules</button>
</div>
