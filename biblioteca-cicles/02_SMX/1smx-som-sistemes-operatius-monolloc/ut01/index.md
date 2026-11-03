---
layout: default
title: "UD1 — Presentació del Curs, Arquitectura i Metodologia de Treball — SOM"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
---

# 📘 UD1 — Presentació del Curs, Arquitectura i Metodologia de Treball

<div class="interactive-progress-tracker" style="background:var(--code-bg); border:1px solid var(--border); border-radius:10px; padding:14px 18px; margin:1.5rem 0 2rem 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.92rem; margin-bottom:8px;">
    <span>Progrés d'aprenentatge interactiu de la Unitat 1</span>
    <span class="tracker-pts" style="font-weight:700; color:#f59e0b;">⭐ 0 punts</span>
  </div>
  <div style="background:rgba(0,0,0,0.08); border-radius:6px; height:10px; overflow:hidden;">
    <div class="tracker-fill" style="background:linear-gradient(90deg, #3b82f6, #10b981); height:100%; width:0%; border-radius:6px; transition:width 0.4s ease;"></div>
  </div>
  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px; text-align:right;" class="tracker-count">0 de 4 superats (0%)</div>
</div>

Benvinguts al mòdul de **Sistemes Operatius Monolloc (SOM)** de primer curs del Cicle Formatiu de Grau Mitjà en Sistemes Microinformàtics i Xarxes. Aquesta unitat introductòria estableix les bases operatives, l'arquitectura bàsica dels sistemes, els límits d'adreçament de memòria i la metodologia de treball que guiarà tota la formació tècnica al llarg del curs acadèmic.

---

## 🗺️ Mapa d'Aprenentatge i Competències Tècniques de SOM

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Ruta de Competències Professionals: De l'Arquitectura a l'Administració</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Evolució formativa del tècnic de suport microinformàtic en sistemes monolloc</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="somU1Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU1Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU1Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU1Grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Fase 1: Arquitectura i Nucli -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#somU1Grad1)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🧠 1. ARQUITECTURA I NUCLI</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Fonaments del Sistema</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Ring 0 vs Ring 3:</tspan> Nucli i Usuari</text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#818cf8" font-weight="bold">Syscalls:</tspan> Interfície d'accés</text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• Gestió de memòria virtual</text>
    <text x="32" y="153" fill="#34d399" font-size="9.5">• <tspan font-weight="bold">Planificació:</tspan> Processos / PCB</text>
    <text x="32" y="173" fill="#cbd5e1" font-size="9.5">• Càlcul adreçament 32 vs 64b</text>
    <text x="32" y="193" fill="#94a3b8" font-size="9">Controlador de dispositius</text>
    <text x="115" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Comprendre el Nucli</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Fase 2: Virtualització i Laboratori -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#somU1Grad2)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">💻 2. VIRTUALITZACIÓ</text>
    <text x="335" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Aïllament i Hipervisors</text>
    <line x1="250" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc" font-weight="bold">Hipervisors:</tspan> Tipus 1 vs Tipus 2</text>
    <text x="252" y="113" fill="#cbd5e1" font-size="9.5">• Discs VDI, VMDK i VHDX</text>
    <text x="252" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Xarxes:</tspan> NAT, Pont, Interna</text>
    <text x="252" y="153" fill="#34d399" font-size="9.5">• <tspan font-weight="bold">Instantànies:</tspan> Snapshots</text>
    <text x="252" y="173" fill="#cbd5e1" font-size="9.5">• Guest Additions i integració</text>
    <text x="252" y="193" fill="#94a3b8" font-size="9">Banc de proves segur al 100%</text>
    <text x="335" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Laboratori Virtualitzat</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Fase 3: Instal·lació i Particions -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#somU1Grad3)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">⚙️ 3. INSTAL·LACIÓ &amp; BOOT</text>
    <text x="555" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Firmware i Emmagatzematge</text>
    <line x1="470" y1="73" x2="640" y2="73" stroke="#334155"/>
    <text x="472" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">GPT vs MBR:</tspan> Límits de capacitat</text>
    <text x="472" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">UEFI vs BIOS:</tspan> Secure Boot</text>
    <text x="472" y="133" fill="#cbd5e1" font-size="9.5">• Partició ESP FAT32 i BCD</text>
    <text x="472" y="153" fill="#cbd5e1" font-size="9.5">• Gestors: GRUB 2 i Windows Boot</text>
    <text x="472" y="173" fill="#f59e0b" font-size="9.5">• <tspan font-weight="bold">Dual Boot:</tspan> Convivència Win/Linux</text>
    <text x="472" y="193" fill="#94a3b8" font-size="9">Preparació USB Rufus/Ventoy</text>
    <text x="555" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Desplegament Multi-SO</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Fase 4: Administració i Scripting -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#somU1Grad4)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⚡ 4. ADMINISTRACIÓ</text>
    <text x="760" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Consola i Automatització</text>
    <line x1="690" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="692" y="93" fill="#cbd5e1" font-size="9.5">• Jerarquia FHS (`/`, `/etc`, `/var`)</text>
    <text x="692" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Permisos POSIX:</tspan> chmod/chown</text>
    <text x="692" y="133" fill="#cbd5e1" font-size="9.5">• Consola: Bash i PowerShell</text>
    <text x="692" y="153" fill="#f59e0b" font-size="9.5">• <tspan font-weight="bold">Crontab:</tspan> Tasques periòdiques</text>
    <text x="692" y="173" fill="#34d399" font-size="9.5">• Còpies de seguretat i manteniment</text>
    <text x="692" y="193" fill="#94a3b8" font-size="9">Monitoratge de rendiment</text>
    <text x="760" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Tècnic Autònom</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Missió del Tècnic SMX: <tspan fill="#34d399" font-weight="bold">Capacitat per a instal·lar, particionar, securitzar i gestionar qualsevol estació de treball corporativa.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">El domini combinat de sistemes GNU/Linux i Microsoft Windows en consola és la clau de l'èxit en el mercat tecnològic actual.</text>
  </svg>
</div>

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :--- |
| **1.1** | [**Presentació del Mòdul, Metodologia i Entorn de Taller**](./ut0101.md) | Objectius de SOM, RAs oficials, requisits de maquinari (VT-x/AMD-V) i programari de laboratori. | [**📘 Entrar a l'Apartat 1.1 →**](./ut0101.md) |
| **1.2** | [**Arquitectura del Maquinari i el Sistema Operatiu**](./ut0102.md) | Model per capes, anells de protecció (Ring 0 vs Ring 3), crides al sistema (Syscalls) i controladors. | [**📘 Entrar a l'Apartat 1.2 →**](./ut0102.md) |
| **1.3** | [**Límits d'Arquitectura: 32 vs 64 bits i Adreçament**](./ut0103.md) | Fórmula $2^n$, barrera dels 4 GiB, arquitectura x86-64, memòria virtual, espai de Swap i Thrashing. | [**📘 Entrar a l'Apartat 1.3 →**](./ut0103.md) |
| **1.4** | [**Auditoria i Diagnòstic del Sistema en Consola (CLI)**](./ut0104.md) | Diagnòstic amb PowerShell en Windows i Bash en Linux (`free -h`, `uname`, `lscpu`, `df -hT`, `lsblk`). | [**📘 Entrar a l'Apartat 1.4 →**](./ut0104.md) |
| **1.5** | [**Seguretat al Taller, Higiene de Credencials i Mitjans**](./ut0105.md) | Principi de menor privilegi (PoLP), entropia de contrasenyes, comprovació SHA-256 d'ISOs i PRL/ESD. | [**📘 Entrar a l'Apartat 1.5 →**](./ut0105.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats (Currículum Oficial)
* **RA1:** Reconeix les característiques i l'arquitectura dels sistemes informàtics i operatius, descrivint les seues funcions, components i interfícies d'accés.
* **Criteris d'Avaluació:**
  - S'han identificat els components funcionals d'un sistema operatiu i la seua interacció amb el maquinari físic.
  - S'ha calculat la capacitat d'adreçament de memòria segons l'amplària del bus del processador.
  - S'han executat comandes CLI per a l'auditoria bàsica de maquinari, memòria i emmagatzematge.
  - S'ha verificat la importància de les polítiques de seguretat, aïllament i procediment en l'entorn de treball tècnic.

---

## 🧪 Reptes Globals de Síntesi de la Unitat 1

Demostra el teu domini integral de la unitat superant els quatre reptes oficials de síntesi:

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 1: Si un ordinador disposa de 16 GB de RAM física però s'hi instal·la per error un sistema operatiu de 32 bits, quants GB de memòria quedaran aproximadament inaccessibles i desaprofitats?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g1" value="a"> 0 GB (s'aprofiten tots 16 GB automàticament)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g1" value="b"> Entre 12,5 i 12,8 GB desaprofitats (ja que el SO només pot adreçar uns 3,2 a 3,5 GB)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g1" value="c"> 4 GB exactes</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g1" value="d"> Tota la memòria esborrada</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Correcte! Com que un bus de 32 bits només pot adreçar 4 GiB en total i part d'eixe espai està reservat per al maquinari (MMIO), només s'aprofiten uns 3,2 a 3,5 GB. La resta (12,5 a 12,8 GB) queda completament inutilitzada." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 2: Què ocorre exactament quan un programa ordinari en Mode Usuari (Ring 3) vol desar un arxiu al disc físic?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g2" value="a"> Envia ordres directes al xip del disc mitjançant instruccions de Ring 3</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g2" value="b"> Executa una crida al sistema (syscall) que canvia el mode de la CPU a Ring 0 perquè el nucli verifique permisos i gestione l'escriptura</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g2" value="c"> Apaga el controlador de memòria virtual per escriure directament als sectors físics</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g2" value="d"> Salta directament al firmware de la BIOS sense passar pel sistema operatiu</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Exacte! Cap aplicació d'usuari té permís per accedir directament al maquinari; cal fer una crida al sistema (syscall com sys_write) que traspassa el control al nucli en Ring 0." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 3: En un servidor Linux, en executar l'ordre 'free -h' observem: free = 500 MiB i available = 9 GiB. L'equip s'està quedant sense memòria?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g3" value="a"> Sí, perquè 'free' és inferior a 1 GB i cal reiniciar immediatament</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g3" value="b"> No, perquè 'available' és de 9 GiB; la diferència està ocupada per 'buff/cache' que el nucli alliberarà instantàniament si cal</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g3" value="c"> Sí, l'equip entrarà en situació de Thrashing immediatament</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g3" value="d"> Depèn de si el disc és MBR o GPT</label>
  </div>
  <button class="btn-check" data-correct="b" data-feedback="Molt bé! En Linux, la memòria RAM no utilitzada s'aprofita activament com a memòria cau de disc (buff/cache). La dada clau de disponibilitat és sempre 'available' (9 GiB en aquest cas)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 4: Quina mesura de seguretat és essencial abans de gravar una imatge ISO d'un sistema operatiu descarregada d'Internet en una unitat USB?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g4" value="a"> Comprovar que el resum criptogràfic (hash SHA-256) de la ISO coincideix amb el publicat pel proveïdor oficial</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g4" value="b"> Desconnectar el cable de xarxa durant la gravació</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g4" value="c"> Formatar el llapis USB obligatòriament en format FAT16</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som01_g4" value="d"> Renombrar el fitxer amb extensió .exe</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! La verificació del hash SHA-256 (amb sha256sum o Get-FileHash) és l'única garantia matemàtica que la imatge no ha patit errors de descàrrega ni ha estat manipulada amb codi maliciós." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

## 📬 Lliurament d'Activitats a Aules

<div class="aules-delivery-card" style="background:linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(124,58,237,0.08) 100%); border:2px solid #8b5cf6; border-radius:12px; padding:22px 26px; margin:2.5rem 0 2rem 0;">
  <h3 style="margin-top:0; color:#7c3aed; font-size:1.25rem;">📄 Registre Oficial de Progrés de la Unitat 1 (Aules)</h3>
  <p style="font-size:0.94rem; color:var(--text-muted);">Quan hages completat l'estudi dels 5 temes i superat els 4 reptes globals de síntesi, introdueix les teues dades per generar l'informe oficial en format PDF i adjuntar-lo a la tasca corresponent d'Aules.</p>
  <div style="margin:14px 0;">
    <label style="display:block; font-weight:600; font-size:0.88rem; margin-bottom:6px;">Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" class="aules-student-name" placeholder="Ex: Marc Gómez Martínez" style="width:100%; max-width:420px; padding:9px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-card); color:var(--text-main); font-size:0.95rem;">
  </div>
  <div class="aules-score-badge" style="display:inline-block; background:#ede9fe; color:#6d28d9; font-weight:700; font-size:0.88rem; padding:4px 12px; border-radius:999px; margin:8px 0 14px 0;">
    Puntuació: <span class="aules-score-count">0 / 100 punts</span>
  </div>
  <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px;">
    <button class="btn-generate-aules-pdf" data-module="SOM" data-unit="UD01" data-lesson="Global" style="background:#7c3aed; color:#ffffff; border:none; padding:10px 18px; border-radius:6px; font-weight:600; font-size:0.9rem; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
      📥 Descarrega PDF Oficial per a Aules
    </button>
  </div>
</div>
