---
layout: default
title: "UD3 — Virtualització i Màquines Virtuals — SOM"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3"
---

# 📘 UD3 — Virtualització i Màquines Virtuals

<div class="interactive-progress-tracker" style="background:var(--code-bg); border:1px solid var(--border); border-radius:10px; padding:14px 18px; margin:1.5rem 0 2rem 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.92rem; margin-bottom:8px;">
    <span>Progrés d'aprenentatge interactiu de la Unitat 3</span>
    <span class="tracker-pts" style="font-weight:700; color:#f59e0b;">⭐ 0 punts</span>
  </div>
  <div style="background:rgba(0,0,0,0.08); border-radius:6px; height:10px; overflow:hidden;">
    <div class="tracker-fill" style="background:linear-gradient(90deg, #3b82f6, #10b981); height:100%; width:0%; border-radius:6px; transition:width 0.4s ease;"></div>
  </div>
  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px; text-align:right;" class="tracker-count">0 de 4 superats (0%)</div>
</div>

La **Unitat Didàctica 3** aborda una de les tecnologies més disruptives i essencials en l'administració de sistemes moderna: la **virtualització de plataformes**. Aquesta tècnica permet executar múltiples sistemes operatius complets i independents de forma concurrent sobre una mateixa màquina física, facilitant el desplegament de laboratoris aïllats, proves d'auditoria, configuració de xarxes virtuals i serveis corporatius d'alta disponibilitat.

---

## ☁️ Arquitectura de Virtualització i Modes de Xarxa

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Hipervisors Tipus 1 vs Tipus 2 i Topologies de Xarxa Virtual</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Arquitectura d'execució al maquinari i configuració dels 4 adaptadors de xarxa a VirtualBox</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="somU3Type1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU3Type2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU3NetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc Esquerre: Hipervisor Tipus 1 -->
    <rect x="20" y="20" width="200" height="210" rx="8" fill="url(#somU3Type1Grad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="120" y="42" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">⚡ TIPUS 1: BARE-METAL</text>
    <text x="120" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Natiu al Maquinari</text>
    <line x1="30" y1="63" x2="210" y2="63" stroke="#334155"/>

    <rect x="35" y="72" width="170" height="26" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="120" y="88" fill="#cbd5e1" font-size="8.5" text-anchor="middle">VM 1 (Linux) · VM 2 (Win)</text>

    <rect x="35" y="105" width="170" height="34" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="1"/>
    <text x="120" y="122" fill="#f8fafc" font-size="9" font-weight="bold" text-anchor="middle">HIPERVISOR NATIU</text>
    <text x="120" y="133" fill="#e0f2fe" font-size="7.5" text-anchor="middle">ESXi, Proxmox VE, Hyper-V Server</text>

    <rect x="35" y="146" width="170" height="30" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
    <text x="120" y="165" fill="#94a3b8" font-size="8.5" font-weight="bold" text-anchor="middle">MAQUINARI FÍSIC</text>

    <text x="35" y="193" fill="#cbd5e1" font-size="8">• Rendiment màxim (&gt;98%)</text>
    <text x="35" y="205" fill="#34d399" font-size="8">• Servidors de CPD / Cloud</text>
    <text x="35" y="217" fill="#94a3b8" font-size="7.5">• Sense sistema operatiu amfitrió</text>

    <!-- Bloc Central: Hipervisor Tipus 2 -->
    <rect x="235" y="20" width="200" height="210" rx="8" fill="url(#somU3Type2Grad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="10.5" font-weight="bold" text-anchor="middle">💻 TIPUS 2: HOSTED</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Allotjat sobre SO Amfitrió</text>
    <line x1="245" y1="63" x2="425" y2="63" stroke="#334155"/>

    <rect x="250" y="70" width="170" height="22" rx="4" fill="#1e293b" stroke="#c084fc" stroke-width="1"/>
    <text x="335" y="85" fill="#cbd5e1" font-size="8" text-anchor="middle">VM Guests (Sistemes Convidats)</text>

    <rect x="250" y="97" width="170" height="24" rx="4" fill="#7c3aed" stroke="#c084fc" stroke-width="1"/>
    <text x="335" y="113" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">Oracle VirtualBox / VMware Workst.</text>

    <rect x="250" y="126" width="170" height="22" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="335" y="141" fill="#38bdf8" font-size="8" text-anchor="middle">SO Amfitrió (Windows 11 / Ubuntu)</text>

    <rect x="250" y="153" width="170" height="24" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
    <text x="335" y="169" fill="#94a3b8" font-size="8.5" font-weight="bold" text-anchor="middle">MAQUINARI FÍSIC</text>

    <text x="250" y="192" fill="#cbd5e1" font-size="8">• Lleugera sobrecàrrega (overhead)</text>
    <text x="250" y="204" fill="#f59e0b" font-size="8">• Ideal per a aules i formació</text>
    <text x="250" y="216" fill="#94a3b8" font-size="7.5">• Snapshots i portapapers compartit</text>

    <!-- Bloc Dret: Modes de Xarxa de VirtualBox -->
    <rect x="450" y="20" width="390" height="210" rx="8" fill="url(#somU3NetGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="645" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🌐 MODES DE XARXA A VIRTUALBOX</text>
    <line x1="460" y1="52" x2="830" y2="52" stroke="#334155"/>

    <!-- Mode NAT -->
    <rect x="465" y="60" width="180" height="38" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="475" y="75" fill="#38bdf8" font-size="8.5" font-weight="bold">1. NAT (Per Defecte)</text>
    <text x="475" y="87" fill="#94a3b8" font-size="7.5">IP 10.0.2.15 · Accés a Internet Sí · Aïllada de fora</text>

    <!-- Mode Pont -->
    <rect x="653" y="60" width="175" height="38" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
    <text x="663" y="75" fill="#34d399" font-size="8.5" font-weight="bold">2. Adaptador Pont (Bridged)</text>
    <text x="663" y="87" fill="#94a3b8" font-size="7.5">IP de l'aula física · Visibilitat LAN total</text>

    <!-- Mode Xarxa Interna -->
    <rect x="465" y="105" width="180" height="38" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1"/>
    <text x="475" y="120" fill="#f59e0b" font-size="8.5" font-weight="bold">3. Xarxa Interna (Internal)</text>
    <text x="475" y="132" fill="#94a3b8" font-size="7.5">Aïllament 100% · Switch virtual només entre VMs</text>

    <!-- Mode Només Amfitrió -->
    <rect x="653" y="105" width="175" height="38" rx="4" fill="#1e293b" stroke="#c084fc" stroke-width="1"/>
    <text x="663" y="120" fill="#c084fc" font-size="8.5" font-weight="bold">4. Només Amfitrió (Host-Only)</text>
    <text x="663" y="132" fill="#94a3b8" font-size="7.5">Comunica Host &lt;-&gt; VM · Sense sortida a Internet</text>

    <!-- Resum formats disc -->
    <rect x="465" y="150" width="363" height="40" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
    <text x="645" y="165" fill="#cbd5e1" font-size="8" text-anchor="middle">Discs Virtuals: <tspan fill="#38bdf8">.VDI</tspan> (VirtualBox), <tspan fill="#c084fc">.VMDK</tspan> (VMware), <tspan fill="#f59e0b">.VHDX</tspan> (Hyper-V)</text>
    <text x="645" y="178" fill="#94a3b8" font-size="7.5" text-anchor="middle">Reserva: Dinàmica (Thin Provisioning) vs Mida Fixa (Thick Provisioning)</text>

    <text x="645" y="215" fill="#34d399" font-size="8" text-anchor="middle">Guest Additions: Resolució dinàmica, carpetes compartides i portapapers</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Laboratori: <tspan fill="#f59e0b" font-weight="bold">Mai s'utilitza l'Adaptador Pont per a proves amb servidors DHCP no autoritzats.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Un servidor DHCP mal configurat en mode pont pot repartir adreces IP errònies a tota la xarxa física del centre, deixant sense connexió altres aules.</text>
  </svg>
</div>

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :--- |
| **3.1** | [**Fonaments de la Virtualització i Hipervisors**](./ut0301.md) | Concepte Host vs Guest, Hipervisors Tipus 1 (Bare-Metal) vs Tipus 2 (Hosted) i beneficis d'aïllament. | [**📘 Entrar a l'Apartat 3.1 →**](./ut0301.md) |
| **3.2** | [**Instal·lació i Configuració de VirtualBox**](./ut0302.md) | Desplegament de VirtualBox 7, Extension Pack, assignació de RAM/vCPUs, EFI, TPM 2.0 i memòria de vídeo. | [**📘 Entrar a l'Apartat 3.2 →**](./ut0302.md) |
| **3.3** | [**Discs Virtuals, Mida Dinàmica i Snapshots**](./ut0303.md) | Formats VDI, VMDK i VHDX, assignació dinàmica vs fixa, arbre d'instantànies i clonació completa vs enllaçada. | [**📘 Entrar a l'Apartat 3.3 →**](./ut0303.md) |
| **3.4** | [**Modes de Xarxa: NAT, Pont, Interna i Host-Only**](./ut0304.md) | Característiques, assignació d'IPs, aïllament, reenviament de ports (*Port Forwarding*) i matriu de visibilitat. | [**📘 Entrar a l'Apartat 3.4 →**](./ut0304.md) |
| **3.5** | [**Integració: Guest Additions i Carpetes**](./ut0305.md) | Instal·lació en Windows i Linux (`build-essential`), resolució dinàmica, carpetes compartides i grup `vboxsf`. | [**📘 Entrar a l'Apartat 3.5 →**](./ut0305.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
* **RA5:** Utilitza eines de virtualització instal·lant i configurant màquines virtuals per a entorns de prova i desplegament segur.
* **Criteris d'Avaluació:**
  - S'ha diferenciat l'arquitectura d'un hipervisor de Tipus 1 i Tipus 2, justificant la seua aplicació.
  - S'han seleccionat i configurat els modes de xarxa adequats segons el nivell d'aïllament requerit.
  - S'han gestionat instantànies (*snapshots*) per al retorn ràpid a punts segurs de restauració.
  - S'han instal·lat eines d'integració (*Guest Additions*) per a optimitzar el rendiment i la interoperabilitat.

---

## 🧪 Reptes Globals de Síntesi de la Unitat 3

Demostra la teua consolidació teòrica i pràctica superant els 4 reptes oficials de síntesi:

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 1: Quina diferència estructural separa un hipervisor de Tipus 1 (com Proxmox VE o VMware ESXi) d'un hipervisor de Tipus 2 (com VirtualBox)?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g1" value="a"> El Tipus 1 s'executa directament sobre el maquinari buit sense sistema operatiu amfitrió previ, mentre que el Tipus 2 requereix un SO amfitrió com Windows o Linux</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g1" value="b"> El Tipus 1 només admet màquines virtuals de 16 bits</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g1" value="c"> El Tipus 2 no permet connectar-se a Internet</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g1" value="d"> Són idèntics; només canvia el nom comercial</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! L'hipervisor de Tipus 1 (Bare-Metal) actua directament sobre el maquinari de silici oferint un rendiment màxim de centre de dades, mentre que el Tipus 2 és una aplicació que conviu amb l'escriptori de l'usuari." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 2: Què ocorre en un disc virtual VDI quan prenem una 'Instantània' (Snapshot) abans de fer una prova perillosa a la VM?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g2" value="a"> El disc base es congela en mode només lectura i es crea un fitxer diferencial nou on s'escriuran tots els canvis posteriors</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g2" value="b"> Es duplica immediatament tot el contingut físic de la memòria RAM al disc</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g2" value="c"> S'esborra el contingut de la màquina virtual</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g2" value="d"> La màquina s'apaga i no es pot tornar a encendre</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! L'instantània congela el fitxer base original i encamina les noves escriptures cap a un fitxer diferencial ({uuid}.vdi); si la prova falla, es descarta el diferencial i la VM torna a l'estat original en segons." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 3: Per quina raó tècnica i de seguretat està terminantment prohibit configurar un servidor DHCP de proves en mode 'Adaptador Pont' (Bridged) en un taller d'informàtica?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g3" value="a"> Perquè el servidor DHCP de la VM competirà amb el router oficial del centre i començarà a repartir IPs errònies a ordinadors físics reals d'altres aules, provocant una caiguda de xarxa</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g3" value="b"> Perquè la màquina virtual s'apagarà per sobreescalfament</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g3" value="c"> Perquè l'adaptador pont només admet adreces IPv6</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g3" value="d"> Perquè VirtualBox bloqueja el protocol UDP</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! En mode pont la VM està connectada al mateix domini de difusió que la xarxa física; un servidor DHCP mal configurat respondrà als missatges DHCPDISCOVER de tota la planta escolar deixant equips sense connexió." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 4: A quin grup de seguretat de Linux cal afegir un usuari per tal que puga obrir i llegir les carpetes compartides de VirtualBox muntades a '/media/sf_NomCarpeta'?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g4" value="a"> vboxsf</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g4" value="b"> root</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g4" value="c"> sudoers</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som03_g4" value="d"> www-data</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! El grup 'vboxsf' (VirtualBox Shared Folders) és el propietari d'aquestes unitats muntades; afegint l'usuari amb 'sudo usermod -aG vboxsf $USER' s'elimina immediatament l'error de permís denegat." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

## 📬 Lliurament d'Activitats a Aules

<div class="aules-delivery-card" style="background:linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(124,58,237,0.08) 100%); border:2px solid #8b5cf6; border-radius:12px; padding:22px 26px; margin:2.5rem 0 2rem 0;">
  <h3 style="margin-top:0; color:#7c3aed; font-size:1.25rem;">📄 Registre Oficial de Progrés de la Unitat 3 (Aules)</h3>
  <p style="font-size:0.94rem; color:var(--text-muted);">Quan hages completat l'estudi dels 5 temes i superat els 4 reptes globals de síntesi, introdueix les teues dades per generar l'informe oficial en format PDF i adjuntar-lo a la tasca corresponent d'Aules.</p>
  <div style="margin:14px 0;">
    <label style="display:block; font-weight:600; font-size:0.88rem; margin-bottom:6px;">Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" class="aules-student-name" placeholder="Ex: Marc Gómez Martínez" style="width:100%; max-width:420px; padding:9px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-card); color:var(--text-main); font-size:0.95rem;">
  </div>
  <div class="aules-score-badge" style="display:inline-block; background:#ede9fe; color:#6d28d9; font-weight:700; font-size:0.88rem; padding:4px 12px; border-radius:999px; margin:8px 0 14px 0;">
    Puntuació: <span class="aules-score-count">0 / 100 punts</span>
  </div>
  <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px;">
    <button class="btn-generate-aules-pdf" data-module="SOM" data-unit="UD03" data-lesson="Global" style="background:#7c3aed; color:#ffffff; border:none; padding:10px 18px; border-radius:6px; font-weight:600; font-size:0.9rem; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
      📥 Descarrega PDF Oficial per a Aules
    </button>
  </div>
</div>
