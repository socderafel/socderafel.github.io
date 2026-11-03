---
layout: default
title: "UD2 — Fonaments dels Sistemes Operatius i Gestió de Recursos — SOM"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2"
---

# 📘 UD2 — Fonaments dels Sistemes Operatius i Gestió de Recursos

<div class="interactive-progress-tracker" style="background:var(--code-bg); border:1px solid var(--border); border-radius:10px; padding:14px 18px; margin:1.5rem 0 2rem 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.92rem; margin-bottom:8px;">
    <span>Progrés d'aprenentatge interactiu de la Unitat 2</span>
    <span class="tracker-pts" style="font-weight:700; color:#f59e0b;">⭐ 0 punts</span>
  </div>
  <div style="background:rgba(0,0,0,0.08); border-radius:6px; height:10px; overflow:hidden;">
    <div class="tracker-fill" style="background:linear-gradient(90deg, #3b82f6, #10b981); height:100%; width:0%; border-radius:6px; transition:width 0.4s ease;"></div>
  </div>
  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px; text-align:right;" class="tracker-count">0 de 4 superats (0%)</div>
</div>

La **Unitat Didàctica 2** analitza els fonaments de l'arquitectura d'un sistema informàtic, el paper essencial del sistema operatiu com a gestor de recursos, la transició entre espai d'usuari (*User Mode*) i espai de nucli (*Kernel Mode*), el cicle de vida dels processos, els algorismes de planificació de la CPU, la gestió de memòria virtual amb paginació i els sistemes de fitxers (Inodes vs MFT).

---

## 🏛️ Arquitectura del Sistema Operatiu i Cicle de Vida dels Processos

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Estructura del Nucli, Anells de Privilegi i Estats de Procés</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Transició segura entre User Ring 3 i Kernel Ring 0, gestió de cues i canvis de context</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="somU2CapesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU2ProcessGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU2SyscallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc Esquerre: Anells de Seguretat i Capes -->
    <rect x="20" y="20" width="390" height="210" rx="8" fill="url(#somU2CapesGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="215" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🛡️ ANELLS DE PROTECCIÓ I CAPES DEL SO</text>
    <line x1="30" y1="52" x2="400" y2="52" stroke="#334155"/>

    <!-- Subcapa Ring 3 -->
    <rect x="35" y="60" width="360" height="36" rx="5" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="45" y="76" fill="#38bdf8" font-size="9" font-weight="bold">RING 3: Mode Usuari (User Mode)</text>
    <text x="45" y="89" fill="#94a3b8" font-size="8">Apps, Shell (Bash/PowerShell), Navegadors, GUI — Aïllat sense accés directe a HW</text>

    <!-- Subcapa Syscalls -->
    <rect x="35" y="102" width="360" height="28" rx="5" fill="#0f172a" stroke="#34d399" stroke-width="1"/>
    <text x="215" y="117" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">⬇️ Interfície de Crides al Sistema (Syscalls: fork, read, write, open) ⬆️</text>
    <text x="215" y="126" fill="#64748b" font-size="7.5" text-anchor="middle">Canvi de context segur (Trap / Software Interrupt)</text>

    <!-- Subcapa Ring 0 -->
    <rect x="35" y="136" width="360" height="42" rx="5" fill="#1e293b" stroke="#ef4444" stroke-width="1"/>
    <text x="45" y="152" fill="#f87171" font-size="9" font-weight="bold">RING 0: Mode Nucli (Kernel Mode / Supervisor)</text>
    <text x="45" y="165" fill="#cbd5e1" font-size="8">Planificador CPU, Gestor Memòria Virtual (MMU), Controladors de Dispositius, Sistema de Fitxers</text>
    <text x="45" y="174" fill="#94a3b8" font-size="7.5">Privilegi total d'instruccions de màquina</text>

    <!-- Subcapa Maquinari -->
    <rect x="35" y="184" width="360" height="34" rx="5" fill="#0f172a" stroke="#64748b" stroke-width="1"/>
    <text x="215" y="198" fill="#94a3b8" font-size="8.5" font-weight="bold" text-anchor="middle">🖥️ MAQUINARI FÍSIC</text>
    <text x="215" y="210" fill="#64748b" font-size="8" text-anchor="middle">CPU (Nuclis, Registres) · Memòria RAM · Discs SSD/HDD · Busos E/S</text>

    <!-- Bloc Dret: Cicle de Vida dels Processos -->
    <rect x="430" y="20" width="410" height="210" rx="8" fill="url(#somU2ProcessGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="635" y="42" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔄 CICLE DE VIDA DELS PROCESSOS (PCB)</text>
    <line x1="440" y1="52" x2="830" y2="52" stroke="#334155"/>

    <!-- Estat Nou -->
    <rect x="445" y="65" width="80" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2"/>
    <text x="485" y="81" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">NOU</text>
    <text x="485" y="93" fill="#94a3b8" font-size="7.5" text-anchor="middle">Creació PID</text>

    <!-- Fletxa Nou -> Preparat -->
    <path d="M 525 82 L 555 82" stroke="#38bdf8" stroke-width="1.5"/>

    <!-- Estat Preparat -->
    <rect x="560" y="65" width="100" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
    <text x="610" y="82" fill="#f59e0b" font-size="9.5" font-weight="bold" text-anchor="middle">PREPARAT</text>
    <text x="610" y="95" fill="#94a3b8" font-size="7.5" text-anchor="middle">Cua d'espera CPU</text>

    <!-- Fletxa Preparat -> Execució -->
    <path d="M 660 78 L 715 78" stroke="#34d399" stroke-width="1.5"/>
    <text x="687" y="73" fill="#34d399" font-size="7" text-anchor="middle">Assignat</text>

    <!-- Fletxa Execució -> Preparat (Temps expirat) -->
    <path d="M 715 95 L 660 95" stroke="#f87171" stroke-width="1.5"/>
    <text x="687" y="105" fill="#f87171" font-size="7" text-anchor="middle">Quantum</text>

    <!-- Estat En Execució -->
    <rect x="720" y="65" width="105" height="40" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
    <text x="772" y="82" fill="#34d399" font-size="9.5" font-weight="bold" text-anchor="middle">EN EXECUCIÓ</text>
    <text x="772" y="95" fill="#94a3b8" font-size="7.5" text-anchor="middle">Nucli CPU actiu</text>

    <!-- Fletxa Execució -> Finalitzat -->
    <path d="M 772 105 L 772 145" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="795" y="125" fill="#94a3b8" font-size="7">exit() / kill</text>

    <!-- Estat Finalitzat -->
    <rect x="730" y="145" width="85" height="35" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>
    <text x="772" y="161" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">FINALITZAT</text>
    <text x="772" y="172" fill="#94a3b8" font-size="7" text-anchor="middle">Alliberar RAM</text>

    <!-- Fletxa Execució -> Bloquejat -->
    <path d="M 740 105 L 635 155" stroke="#c084fc" stroke-width="1.5"/>
    <text x="705" y="140" fill="#c084fc" font-size="7">Espera E/S</text>

    <!-- Estat Bloquejat -->
    <rect x="545" y="145" width="125" height="40" rx="6" fill="#0f172a" stroke="#c084fc" stroke-width="1.2"/>
    <text x="607" y="162" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">BLOQUEJAT</text>
    <text x="607" y="174" fill="#94a3b8" font-size="7.5" text-anchor="middle">Esperant disc / xarxa</text>

    <!-- Fletxa Bloquejat -> Preparat -->
    <path d="M 590 145 L 590 105" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="560" y="128" fill="#38bdf8" font-size="7">E/S resolta</text>

    <text x="635" y="215" fill="#94a3b8" font-size="8" text-anchor="middle">Estructures clau: PCB (Process Control Block), PID, taula de fitxers i registres</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or de l'Arquitectura: <tspan fill="#34d399" font-weight="bold">Les aplicacions d'usuari mai accedeixen directament al maquinari físic.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Tota operació de lectura de disc, enviament de xarxa o dibuix de pantalla requereix una crida al sistema (syscall) validada pel nucli en Ring 0.</text>
  </svg>
</div>

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :--- |
| **2.1** | [**Funcions del SO i Estructures del Nucli**](./ut0201.md) | Gestió de recursos, màquina virtual, aïllament, subsistemes del nucli i classificació (monotask/multitask, SMP, RTOS). | [**📘 Entrar a l'Apartat 2.1 →**](./ut0201.md) |
| **2.2** | [**Gestió de Processos, Fils i Bloc PCB**](./ut0202.md) | Programa vs procés, cicle d'estats (Ready, Running, Blocked), fitxa tècnica PCB, threads i eines CLI (`ps`, `kill`, `Get-Process`). | [**📘 Entrar a l'Apartat 2.2 →**](./ut0202.md) |
| **2.3** | [**Algorismes de Planificació de la CPU**](./ut0203.md) | Planificació expulsiva vs cooperativa, FCFS i efecte comboi, SJF, Round Robin amb quàntum de temps i cues multinivell (MLFQ). | [**📘 Entrar a l'Apartat 2.3 →**](./ut0203.md) |
| **2.4** | [**Gestió de Memòria Principal: Paginació**](./ut0204.md) | Adreces virtuals vs físiques, MMU, taula de pàgines i TLB, cicle de Page Fault, algorismes LRU/FIFO i fragmentació interna. | [**📘 Entrar a l'Apartat 2.4 →**](./ut0204.md) |
| **2.5** | [**Sistemes de Fitxers: Inodes vs Taula MFT**](./ut0205.md) | Inodes en ext4 (punters directes/indirectes, hard/symlinks), Master File Table (MFT) en NTFS, fitxers residents i taula comparativa. | [**📘 Entrar a l'Apartat 2.5 →**](./ut0205.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
* **RA1:** Reconeix les característiques i l'arquitectura dels sistemes informàtics i operatius, descrivint les seues funcions, components i mètodes de gestió de recursos.
* **Criteris d'Avaluació:**
  - S'ha diferenciat el funcionament en mode nucli (Ring 0) del mode usuari (Ring 3).
  - S'ha comprès el cicle de transició d'estats d'un procés i la funció del bloc de control de procés (PCB).
  - S'han analitzat els algorismes de planificació de CPU calculant temps mitjans d'espera.
  - S'han identificat els mecanismes de traducció d'adreces de memòria virtual per paginació.
  - S'han comparat les estructures d'indexació de fitxers basades en Inodes i en la Master File Table (MFT).

---

## 🧪 Reptes Globals de Síntesi de la Unitat 2

Demostra la teua consolidació teòrica i pràctica superant els 4 reptes oficials de síntesi:

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 1: Quin canvi d'estat experimenta un procés en execució quan sol·licita llegir un arxiu d'un disc dur i ha d'esperar que el controlador físic complete la transferència?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g1" value="a"> Passa d'En Execució (Running) a Bloquejat / En Espera (Waiting / Blocked)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g1" value="b"> Passa immediatament a Terminat (Terminated)</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g1" value="c"> Es queda congelat a la CPU sense alliberar el nucli</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g1" value="d"> Torna a l'estat Nou (New)</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Correcte! El procés passa a l'estat Bloquejat i allibera la CPU perquè un altre procés preparat puga aprofitar-la. Quan el disc finalitza la lectura, una interrupció trasllada el procés de nou a l'estat Preparat." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 2: En l'algorisme de planificació Round Robin amb quàntum q = 10 ms, què succeeix si un procés requereix una ràfega de CPU de 35 ms sense fer cap operació d'E/S?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g2" value="a"> S'executa durant 10 ms, el temporitzador de maquinari genera una interrupció, és expulsat a la cua de preparats i necessitarà 4 torns en total per finalitzar</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g2" value="b"> S'executa durant 35 ms ininterrompudament ignorant el quàntum</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g2" value="c"> Es cancel·la el procés per superar el límit de temps</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g2" value="d"> La CPU es divideix en 4 nuclis virtuals</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! El procés rebrà 3 torns complets de 10 ms (acumulant 30 ms) i un quart torn final de 5 ms, sent expulsat al final de cada quàntum per permetre que la resta de processos s'executen de forma fluïda." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 3: Quina és la funció de la memòria cau TLB (Translation Lookaside Buffer) integrada a la CPU?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g3" value="a"> Emmagatzemar en memòria cau les traduccions recents d'adreces virtuals a marcs físics per evitar haver de consultar la Taula de Pàgines a la RAM</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g3" value="b"> Guardar còpies de seguretat dels arxius del sistema operatiu</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g3" value="c"> Descodificar arxius de vídeo MP4</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g3" value="d"> Gestionar les contrasenyes dels usuaris</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Molt bé! El TLB és una memòria cau associativa a la CPU que fa que la traducció d'adreces virtuals a marcs reals de RAM siga gairebé instantània (evitant dobles lectures a la memòria principal)." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <span style="font-weight:700;">Repte Global 4: Si en Linux creem un enllaç dur (Hard Link) amb la comanda 'ln fitxer.txt enllac.txt', quina afirmació és tècnicament correcta?</span>
    <span class="badge-pts" style="background:#dbeafe; color:#1e40af; padding:2px 8px; border-radius:12px; font-size:12px; font-weight:600;">+25 pts</span>
  </div>
  <div style="margin-top:12px; display:flex; flex-direction:column; gap:8px;">
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g4" value="a"> S'ha creat una segona entrada de directori amb un nom nou que apunta exactament al mateix número d'Inode i blocs de dades que l'original</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g4" value="b"> S'ha duplicat l'espai que ocupa el fitxer al disc dur</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g4" value="c"> Si s'esborra fitxer.txt, enllac.txt queda inservible i trencat</label>
    <label style="display:flex; align-items:center; gap:8px; cursor:pointer;"><input type="radio" name="som02_g4" value="d"> L'enllaç només funcionarà si l'equip no es reinicia</label>
  </div>
  <button class="btn-check" data-correct="a" data-feedback="Exacte! Un hard link comparteix el mateix Inode i les mateixes dades físiques; el comptador d'enllaços de l'inode s'incrementa a 2, i les dades només s'esborraran físicament quan s'eliminen tots dos noms." style="margin-top:12px; padding:6px 14px; background:#2563eb; color:#fff; border:none; border-radius:4px; cursor:pointer;">Comprova</button>
  <div class="feedback-msg" style="margin-top:8px; font-size:13px; display:none;"></div>
</div>

---

## 📬 Lliurament d'Activitats a Aules

<div class="aules-delivery-card" style="background:linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(124,58,237,0.08) 100%); border:2px solid #8b5cf6; border-radius:12px; padding:22px 26px; margin:2.5rem 0 2rem 0;">
  <h3 style="margin-top:0; color:#7c3aed; font-size:1.25rem;">📄 Registre Oficial de Progrés de la Unitat 2 (Aules)</h3>
  <p style="font-size:0.94rem; color:var(--text-muted);">Quan hages completat l'estudi dels 5 temes i superat els 4 reptes globals de síntesi, introdueix les teues dades per generar l'informe oficial en format PDF i adjuntar-lo a la tasca corresponent d'Aules.</p>
  <div style="margin:14px 0;">
    <label style="display:block; font-weight:600; font-size:0.88rem; margin-bottom:6px;">Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" class="aules-student-name" placeholder="Ex: Marc Gómez Martínez" style="width:100%; max-width:420px; padding:9px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-card); color:var(--text-main); font-size:0.95rem;">
  </div>
  <div class="aules-score-badge" style="display:inline-block; background:#ede9fe; color:#6d28d9; font-weight:700; font-size:0.88rem; padding:4px 12px; border-radius:999px; margin:8px 0 14px 0;">
    Puntuació: <span class="aules-score-count">0 / 100 punts</span>
  </div>
  <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:10px;">
    <button class="btn-generate-aules-pdf" data-module="SOM" data-unit="UD02" data-lesson="Global" style="background:#7c3aed; color:#ffffff; border:none; padding:10px 18px; border-radius:6px; font-weight:600; font-size:0.9rem; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
      📥 Descarrega PDF Oficial per a Aules
    </button>
  </div>
</div>
