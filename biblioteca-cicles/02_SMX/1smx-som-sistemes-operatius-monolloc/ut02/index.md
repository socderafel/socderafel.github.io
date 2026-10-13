---
layout: default
title: "UD2 — Introducció als Sistemes Informàtics i Sistemes Operatius"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2"
---

# 📘 UD2 — Introducció als Sistemes Informàtics i Sistemes Operatius

La **Unitat Didàctica 2** analitza els fonaments de l'arquitectura d'un sistema informàtic, el paper essencial del sistema operatiu com a gestor de recursos, la transició entre espai d'usuari (*User Mode*) i espai de nucli (*Kernel Mode*), el cicle de vida dels processos i la lògica interna d'adreçament de memòria i sistemes de fitxers.

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

## 📊 Comparativa d'Algorismes de Planificació de CPU

| Algorisme de Planificació | Tipus d'Aproximació | Avantatge Principal | Inconvenient / Risc Principal | Ús Típic |
| :--- | :--- | :--- | :--- | :--- |
| **FIFO / FCFS (*First In, First Out*)** | No apropiatiu (*Non-preemptive*) | Màxima simplicitat de disseny i baix cost de gestió. | Efecte Comboi (*Convoy effect*): processos curts bloquegen darrere d'un llarg. | Sistemes de processament per lots antics. |
| **Round Robin (RR)** | **Apropiatiu (*Preemptive*)** | Equitatiu; cada procés rep un quàntum de temps fixat ($q$). | Si el quàntum és massa xicotet, es perd rendiment pel canvi de context constant. | **Sistemes de temps compartit i escriptori moderns.** |
| **SJF (*Shortest Job First*)** | No apropiatiu o apropiatiu (SRTF) | Minimitza el temps mitjà d'espera global. | Risc d'inanició (*starvation*) per als processos de llarga durada. | Càlcul científic i cues d'impressió grans. |
| **Cues Multinivell amb Retroalimentació (MLFQ)** | Apropiatiu i dinàmic | Afavoreix processos interactius d'E/S i castiga els que consumeixen CPU excessiva. | Complexitat elevada de configuració de llindars. | **Nuclis moderns (Linux CFS, Windows NT Scheduler).** |

---

## 📐 Càlculs d'Adreçament de Memòria i Sistemes de Numeració

Els sistemes operatius gestionen l'espai de memòria mitjançant busos d'adreces de $n$ bits. La quantitat màxima de posicions de memòria directament adreçables és:

$$\text{Capacitat Màxima Adreçable} = 2^n \text{ bytes}$$

Per exemple:
- En una arquitectura clàssica de **32 bits**:
  $$2^{32} \text{ bytes} = 4.294.967.296 \text{ bytes} = 4 \text{ GiB}$$
  Aquest límit explica per què un sistema operatiu de 32 bits no pot aprofitar més de 4 GiB de RAM física.
- En una arquitectura moderna de **64 bits** (x86-64 / AMD64):
  $$2^{64} \text{ bytes} = 18.446.744.073.709.551.616 \text{ bytes} = 16 \text{ EiB (Exbibytes)}$$

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **2.3** | [**El Sistema Informàtic i Funcions del SO**](./ut0203.md) | Estructura maquinari/programari, funcions del nucli i gestió d'E/S | [**📘 Estudiar Funcions →**](./ut0203.md) |
| **2.4** | [**Gestió de Processos i Fils**](./ut0204.md) | Cicle de vida, PCB, algorismes de planificació (FIFO, Round Robin, Prioritat) | [**⚙️ Estudiar Processos →**](./ut0204.md) |
| **2.8** | [**Sistemes de Numeració**](./ut0208.md) | Conversió Binari, Decimal i Hexadecimal en adreces de memòria | [**🔢 Estudiar Numeració →**](./ut0208.md) |
| **2.10** | [**El Sistema d'Arxius**](./ut0210.md) | Jerarquia de directoris, metadades (inodos, MFT) i rutes relatives vs absolutes | [**📁 Estudiar Arxius →**](./ut0210.md) |
| **2.12** | [**Permisos i Atributs de Seguretat**](./ut0212.md) | Model POSIX (`rwx`, càlcul octal `chmod`) i llistes de control d'accés (ACL) | [**🔐 Estudiar Permisos →**](./ut0212.md) |
| **2.13** | [**Sistemes Transaccionals i Journaling**](./ut0213.md) | Integritat del sistema de fitxers, tolerància a fallades i eines `fsck` / `chkdsk` | [**🛡️ Estudiar Journaling →**](./ut0213.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA1:** Reconeix les característiques i l'arquitectura dels sistemes informàtics i operatius, descrivint les seues funcions i components.
- **Criteris d'Avaluació:**
  - S'ha diferenciat el funcionament en mode nucli (Ring 0) del mode usuari (Ring 3).
  - S'ha comprès el cicle de transició d'estats d'un procés i la funció del bloc de control de procés (PCB).
  - S'han convertit adreces i mides entre bases binàries, decimals i hexadecimals.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul de Temps de CPU i Planificació Round Robin:**
   - Tres processos arriben a la cua de la CPU a l'instant $t=0$ amb els següents temps de ràfega de CPU:
     - $P_1 = 24\text{ ms}$
     - $P_2 = 6\text{ ms}$
     - $P_3 = 8\text{ ms}$
   - Si el planificador utilitza un algorisme **Round Robin (RR)** amb un quàntum de temps $q = 4\text{ ms}$ en ordre $P_1 \rightarrow P_2 \rightarrow P_3$:
     - Dibuixa el diagrama de Gantt de l'execució dels processos fins a la seua finalització.
     - Calcula el temps de finalització de cadascun dels tres processos.
     - Determina el temps mitjà d'espera global de la cua.

2. **Conversió d'Adreces de Memòria en Hexadecimal:**
   - Els registres de memòria del sistema operatiu s'expressen en base hexadecimal ($16$).
   - **Preguntes de conversió:**
     - Converteix l'adreça de càrrega del bootloader `0x7C00` a valor decimal i a codi binari complet de 16 bits.
     - Si un segment de memòria comença a l'adreça `0x00100000` ($1\text{ MiB}$) i té una mida de $64\text{ KiB}$ ($65.536\text{ bytes}$), quina és l'adreça hexadecimal exacta de l'últim byte del bloc?
     - Si una instrucció genera una fallada de pàgina a l'adreça `0xFFFFFFFF`, a quin límit de memòria en GB correspon en un sistema de 32 bits?

3. **Estructura d'Inodes i Espai de Sistema de Fitxers:**
   - Un disc formatejat amb el sistema de fitxers `ext4` utilitza una mida de bloc per defecte de $4\text{ KiB}$ ($4.096\text{ bytes}$).
   - **Preguntes de dimensionament:**
     - Si un usuari crea un fitxer de text que conté únicament $120\text{ caràcters}$ ($120\text{ bytes}$), quant d'espai real a disc ocuparà el fitxer a causa de la fragmentació interna?
     - Quina estructura de dades del sistema de fitxers conté els permisos, el propietari, les dates d'accés i els punters a blocs de dades, sense guardar el nom del propi fitxer?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Inspecció del Cicle de Vida i Arbre de Processos en Linux
1. Obre un terminal Bash i inspecciona la jerarquia de processos amb identificador PID:
   ```bash
   pstree -p | head -n 25
   ```
2. Inicia un procés de càrrega en segon pla:
   ```bash
   sleep 300 &
   ```
3. Consulta el PID assignat i el seu estat actual:
   ```bash
   ps aux | grep sleep
   ```
4. Pausa el procés enviant el senyal de detenció (passant a estat *Bloquejat / Detingut*):
   ```bash
   kill -SIGSTOP <PID>
   ps aux | grep sleep
   ```
   (Comprova que l'estat canvia a `T` - Stopped).
5. Reprèn el procés enviant el senyal de continuació:
   ```bash
   kill -SIGCONT <PID>
   ```
6. Finalitza el procés de forma definitiva:
   ```bash
   kill -9 <PID>
   ```

#### Repte 2: Gestió de Processos i Prioritats en Windows amb PowerShell
1. Inicia PowerShell com a Administrador i llista els 5 processos que consumeixen major temps de CPU:
   ```powershell
   Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Id, ProcessName, CPU, WorkingSet64, PriorityClass
   ```
2. Executa l'aplicació Bloc de Notes (`notepad.exe`):
   ```powershell
   Start-Process notepad
   $p = Get-Process -Name notepad
   $p.Id
   ```
3. Canvia la classe de prioritat del procés a un nivell superior (*AboveNormal*):
   ```powershell
   $p.PriorityClass = [System.Diagnostics.ProcessPriorityClass]::AboveNormal
   Get-Process -Id $p.Id | Select-Object ProcessName, PriorityClass
   ```
4. Tanca el procés forçosament des de la consola:
   ```powershell
   Stop-Process -Id $p.Id -Force
   ```

#### Repte 3: Rastreig de Crides al Sistema (*Syscalls*) amb `strace`
1. En un sistema Linux, executa la comanda `strace` per monitorar les crides al nucli d'una comanda senzilla:
   ```bash
   strace -c ls -l /tmp
   ```
2. Analitza la taula resum generada:
   - Quines són les tres *syscalls* més utilitzades (`openat`, `read`, `write`, `close`, `mmap`)?
   - Quin percentatge del temps total d'execució s'ha passat dins de l'espai de nucli (*System Time*) enfront de l'espai d'usuari?

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Nucli i Anells de Privilegi** | Explica amb claredat la diferència entre Ring 0 i Ring 3, justificant el paper de les crides al sistema (syscalls) i la protecció de maquinari. | Distingeix entre nucli i aplicacions d'usuari, però té dubtes sobre com es produeix la transició i el canvi de context. | Creu que les aplicacions accedeixen lliurement als registres i memòria física sense intervenció del sistema operatiu. |
| **Cicle de Vida dels Processos i Planificació** | Dibuixa i calcula diagrames de Gantt de Round Robin, temps d'espera i manipula estats amb senyals POSIX (`SIGSTOP`, `SIGCONT`, `SIGKILL`). | Coneix els estats d'un procés (Nou, Preparat, Execució, Bloquejat) però s'equivoca en el càlcul de temps mitjà de retorn. | Confon un programa emmagatzemat a disc amb un procés actiu a memòria RAM. |
| **Adreçament de Memòria i Eines CLI** | Converteix amb facilitat adreces entre hexadecimal, binari i decimal; diagnostica processos mitjançant PowerShell i Bash sense errors. | Utilitza les comandes de consulta de processos però depèn de la interfície gràfica per aturar o prioritzar tasques. | No sap interpretar la sortida de l'ordre `ps` ni com consultar el consum de memòria d'un servei. |
