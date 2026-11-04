---
title: "UT 02: Administració i Gestió de Dominis (Active Directory) — SOX"
layout: "default"
course_root: ".."
badge: "2n SMX · Sistemes Operatius en Xarxa · UT02"
module: "SOX"
---

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat de Treball 02</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 19 reptes superats (0%)</div>
  </div>
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="tracker-pts" style="font-weight:700; color:var(--text-main);">⭐ 0 / 475 punts</div>
    <div style="width:100px; height:8px; background:var(--border); border-radius:4px; overflow:hidden;">
      <div class="tracker-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
    </div>
  </div>
</div>

# UT 02: Administració i Gestió de Dominis (Active Directory i LDAP)

Aquesta unitat tracta la tecnologia central d'autenticació i gestió de xarxes corporatives: els Serveis de Directori basats en **Active Directory Domain Services (AD DS)** i el protocol estàndard **LDAP**.

S'aprén a concebre l'arquitectura lògica (objectes, OUs, dominis, arbres i boscos), promoure servidors a controladors de domini, estructurar el directori mitjançant Unitats Organitzatives protegides, unir equips clients (Windows 10/11 i Linux) i assegurar l'alta disponibilitat mitjançant la replicació multi-mestre i la gestió dels 5 rols FSMO.

---

## Continguts de la Unitat de Treball

Exploreu cadascun dels apartats d'aquesta unitat per completar les activitats teòriques i els reptes pràctics:

- **[2.1 Conceptes de Directori i Arquitectura d'Active Directory Domain Services (AD DS)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0201.html):** Jerarquia lògica (OUs, dominis, boscos), estructura física (DCs, Sites) i dependència clau de registres SRV a DNS.
- **[2.2 Promoció d'un Servidor a Controlador de Domini (DC) a Windows Server](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0202.html):** Requisits previs, instal·lació d'AD DS, carpeta SYSVOL, contrasenya DSRM i diagnòstic amb `dcdiag`.
- **[2.3 Gestió d'Unitats Organitzatives (OU) i Estructuració del Domini](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0203.html):** Jerarquia departamental, protecció contra eliminació accidental i delegació de control administratiu.
- **[2.4 Vinculació d'Equips Client al Domini (Windows 10/11 i Linux)](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0204.html):** Requisits de llicència (Pro/Enterprise), configuració de DNS al client, ús de `sysdm.cpl`/PowerShell i unió de Linux amb `realmd`.
- **[2.5 Replicació de Dominis, Controladors Secundaris i Rols FSMO](/02_SMX/2smx-sox-sistemes-operatius-xarxa/ut02/ut0205.html):** Replicació multi-mestre, els 5 rols FSMO (PDC, RID, Schema...), eina `netdom query fsmo` i Catàleg Global.

---

## Reptes Globals de Síntesi de la Unitat 02

Demostra la teua visió global superant aquests 4 reptes d'integració de continguts:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 1: Diagnòstic d'Unió al Domini</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Un ordinador amb Windows 11 Pro pot fer 'ping' a la IP del servidor 192.168.10.10, però quan intenta unir-se al domini 'empresa.local', l'assistent diu que no es troba el controlador de domini. Què està fallant?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) El cable de xarxa està connectat al revés.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) El client no té configurada la IP del servidor com a DNS primari, per la qual cosa no pot consultar els registres de servei SRV per a resoldre el nom empresa.local.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) El disc dur del client està formatat en FAT32.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) La contrasenya de la BIOS de l'ordinador és incorrecta.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 2: Disseny d'Organització</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Una empresa vol aplicar una política que bloquege les memòries USB només als empleats del departament de Pràctiques, sense afectar els caps de departament. Quina és la solució correcta a nivell d'estructura d'Active Directory?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Crear un bosc sencer nou per a cada alumne de pràctiques.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Crear una Unitat Organitzativa (OU) anomenada 'Pràctiques', ubicar-hi els seus usuaris o equips, i vincular la GPO de bloqueig d'USB exclusivament a eixa OU.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Posar silicona tèrmica dins dels ports USB físics dels ordinadors.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Canviar el sistema de fitxers del servidor a Btrfs.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 3: Alta Disponibilitat</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Si una empresa té dos controladors de domini (DC1 i DC2) i el servidor DC1 pateix una avaria sobtada irreversible en la placa base, quina acció ha de fer l'administrador per assegurar el domini?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Reinstal·lar de zero tots els 200 ordinadors clients de l'empresa.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Assumir per la força (seize) els rols FSMO que tenia DC1 sobre DC2 i netejar les metadades de DC1 a la base de dades d'Active Directory.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Apagar DC2 immediatament per evitar el contagi de virus.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Esborrar la zona DNS del domini.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🏆 Repte Global 4: Integració Multiplataforma</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quan unim una màquina Linux (com Ubuntu Desktop) a un domini d'Active Directory amb 'realm join', quin benefici immediat obtenen els usuaris corporatius?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) L'ordinador Linux es converteix automàticament en un sistema Windows.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) L'usuari root de Linux és eliminat per complet del disc dur.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Qualsevol usuari del domini pot iniciar sessió en l'ordinador Linux amb el seu mateix usuari i contrasenya corporativa d'Active Directory.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) La targeta gràfica es desactiva per complir la normativa de protecció de dades.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

---

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament de la Unitat 02 a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En haver completat els reptes de tots els apartats i els reptes globals de la Unitat 02, descarrega el resum en PDF i puja'l a la tasca d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Informe Unitat 02 PDF
    </button>
  </div>
</div>
