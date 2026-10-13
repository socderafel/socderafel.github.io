---
layout: default
title: "Muntatge i Manteniment d'Equips — UD5 Manteniment d'Equips i Taller de Muntatge"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD5"
---

# UT5 - Manteniment d'Equips Informàtics i Taller de Muntatge

En aquesta unitat d'aprenentatge es desenvolupen les destreses fonamentals de taller informàtic: l'ús correcte de l'instrumental tècnic, les normes de protecció contra descàrregues electroestàtiques (ESD), el protocol complet d'acoblament d'un ordinador de sobretaula i els mètodes sistemàtics de diagnòstic d'avaries mitjançant la seqüència POST, codis de xiulets (*Beep codes*) i LEDs de depuració.

---

## 🛠️ Protocol de Taller, Seguretat ESD i Diagnosi POST

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Procediment de Muntatge, Protecció ESD i Seqüència POST</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Eines essencials, banc de proves previ, separadors de xassís i depuració d'arrencada</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="mmeEsdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="mmeBenchGrad" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="mmeCaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="mmePostGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Seguretat ESD & Eines -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#mmeEsdGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="115" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⚡ PROTECCIÓ ESD &amp; EINES</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Prevenció de Danys Invisibles</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Polsera Antiestàtica:</tspan></text>
    <text x="42" y="108" fill="#94a3b8" font-size="9">Connectada al xassís de metall</text>
    <text x="32" y="128" fill="#cbd5e1" font-size="9.5">• <tspan fill="#cbd5e1">Resistència 1 MΩ</tspan> de seguretat</text>
    <text x="32" y="148" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Tornavís Philips PH2</tspan></text>
    <text x="32" y="168" fill="#cbd5e1" font-size="9.5">• Pasta tèrmica no conductora</text>
    <text x="32" y="188" fill="#94a3b8" font-size="9">Evita tocar contactes daurats</text>
    <text x="115" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Treball Segur al Taller</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#f59e0b" stroke-width="2"/>

    <!-- Bloc 2: Banc de Proves (Fase 1) -->
    <rect x="240" y="20" width="195" height="210" rx="8" fill="url(#mmeBenchGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="337" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🧪 FASE 1: BANC DE PROVES</text>
    <text x="337" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Muntatge Fora de la Caixa</text>
    <line x1="250" y1="73" x2="425" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#cbd5e1" font-size="9.5">• Superfície: <tspan fill="#38bdf8" font-weight="bold">Caixa de cartó</tspan></text>
    <text x="252" y="113" fill="#cbd5e1" font-size="9.5">• Instal·lar a la placa:</text>
    <text x="262" y="130" fill="#cbd5e1" font-size="9">  1. CPU + Dissipador tèrmic</text>
    <text x="262" y="145" fill="#cbd5e1" font-size="9">  2. 1 mòdul RAM (ranura 2)</text>
    <text x="262" y="160" fill="#cbd5e1" font-size="9">  3. Cables ATX 24p + EPS 8p</text>
    <text x="252" y="183" fill="#34d399" font-size="9.5" font-weight="bold">★ Objectiu:</text>
    <text x="262" y="198" fill="#34d399" font-size="9">Verificar que dona vídeo (POST)</text>
    <text x="337" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Comprovació Previa</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 435 115 L 460 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 3: Muntatge a Caixa (Fase 2) -->
    <rect x="465" y="20" width="195" height="210" rx="8" fill="url(#mmeCaseGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="562" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🏗️ FASE 2: ENCAIXAR AL XASSÍS</text>
    <text x="562" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Integració i Cablejat</text>
    <line x1="475" y1="73" x2="650" y2="73" stroke="#334155"/>
    <text x="478" y="93" fill="#cbd5e1" font-size="9.5">• 1. <tspan fill="#c084fc" font-weight="bold">I/O Shield</tspan> (xapa posterior)</text>
    <text x="478" y="113" fill="#ef4444" font-size="9.5" font-weight="bold">• 2. Separadors (Standoffs):</text>
    <text x="488" y="128" fill="#ef4444" font-size="9">Imprescindibles per evitar curt</text>
    <text x="478" y="148" fill="#cbd5e1" font-size="9.5">• 3. Fixació cargols creuats</text>
    <text x="478" y="168" fill="#cbd5e1" font-size="9.5">• 4. Connexions <tspan fill="#34d399">F_PANEL</tspan></text>
    <text x="488" y="183" fill="#94a3b8" font-size="9">Power SW, Reset, HDD LED</text>
    <text x="562" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Acoblament Mecànic</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 660 115 L 685 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 4: Diagnòstic POST -->
    <rect x="690" y="20" width="150" height="210" rx="8" fill="url(#mmePostGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="765" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🚦 DIAGNÒSTIC POST</text>
    <text x="765" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Seqüència d'Arrencada</text>
    <line x1="700" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="702" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">EZ Debug LEDs:</tspan></text>
    <text x="712" y="110" fill="#cbd5e1" font-size="9">🔴 CPU (Sòcol/Alimentació)</text>
    <text x="712" y="125" fill="#f59e0b" font-size="9">🟡 DRAM (Memòria RAM)</text>
    <text x="712" y="140" fill="#cbd5e1" font-size="9">⚪ VGA (Targeta gràfica)</text>
    <text x="712" y="155" fill="#34d399" font-size="9">🟢 BOOT (Sense disc)</text>
    <text x="702" y="178" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc">Beep Codes:</tspan></text>
    <text x="712" y="195" fill="#34d399" font-size="9">1 xiulet curt = OK</text>
    <text x="765" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Localització d'Avaries</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Tècnic: <tspan fill="#f59e0b" font-weight="bold">MAI cargoles la placa a la caixa sense provar-la primer fora.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Provar la placa al banc de proves estalvia hores de feina desmuntant un ordinador complet si algun component ve defectuós de fàbrica.</text>
  </svg>
</div>

---

## 🚦 Taula de Diagnòstic de la Seqüència POST

| Indicador EZ Debug LED | Senyal Acústic (*Beep Code*) | Causa Probable de l'Avaria | Protocol d'Acció Recomanat |
| :---: | :---: | :--- | :--- |
| 🔴 **CPU (Roig fix)** | Silenci o xiulet continu molt curt | Processador mal col·locat, pins LGA doblegats o connector EPS 8-pin no connectat. | Verificar que el cable EPS de $+12\text{ V}$ està connectat; retirar el dissipador i revisar pins del sòcol. |
| 🟡 **DRAM (Groc / Taronja)** | 3 xiulets curts consecutius o xiulet llarg repetitiu | Mòdul de memòria mal encaixat, contactes bruts o mòduls en ranures incorrectes. | Extreure la RAM, netejar contactes amb alcohol isopropílic i prémer fermament a la ranura 2 (A2) fins a sentir el *clic*. |
| ⚪ **VGA (Blanc fix)** | 1 xiulet llarg + 2 o 3 xiulets curts | Targeta gràfica no detectada, connector d'alimentació PCIe desconnectat o monitor apagat. | Comprovar que el cable HDMI/DisplayPort està connectat a la targeta gràfica dedicada (i no a la placa base). |
| 🟢 **BOOT (Verd fix)** | 1 xiulet curt normal | L'ordinador funciona perfectament però no troba cap sistema operatiu arrencable. | Connectar un mitjà d'arrencada USB (Windows/Linux) o revisar la configuració del disc a la UEFI. |
| **Cap LED encès / Mort** | Silenci absolut | Curtcircuit amb la caixa (falta de separadors) o font d'alimentació apagada/avariada. | Comprovar l'interruptor de la font, fer la prova del pont (*paperclip test*) i revisar els separadors de llautó. |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **5.1** | [**Resultats d'Aprenentatge (RA)**](./ut0501.md) | Objectius curriculars de manteniment, prevenció i diagnosi de disfuncions (RA4) | [**📘 Llegir Apartat →**](./ut0501.md) |
| **5.2** | [**Eines, Muntatge i Diagnosi d'Avaries**](./ut0502.md) | Infografia d'eines de taller i seguretat ESD, protocol de muntatge en dues fases (*test bench* i caixa), connexions F_PANEL, xiulets BIOS (*Beep codes*) i EZ Debug LEDs | [**🛠️ Estudiar Protocol de Taller →**](./ut0502.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA4:** Manté equips informàtics interpretant les recomanacions dels fabricants i relacionant les disfuncions amb les seues causes.
- **Criteris d'Avaluació:**
  - S'han utilitzat les eines adequades per a cada operació de muntatge i desmuntatge amb seguretat.
  - S'han interpretat els senyals acústics i visuals d'arrencada per identificar components fallits.
  - S'ha seguit la seqüència correcta de connexió evitant curtcircuits i tensions mecàniques.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments de Taller, Seguretat ESD i Diagnòstic POST
1. **Física de les Descàrregues Electroestàtiques (ESD):**
   - El cos humà acumula fàcilment càrregues electroestàtiques que superen els **$10.000\text{ V}$** quan camina sobre moquetes o utilitza roba sintètica. Tanmateix, una persona només percep la guspira quan la descàrrega és superior a uns $3.000\text{ V}$.
     - Per què una descàrrega de només $50\text{ V}$ imperceptible per als sentits humans pot destruir microscòpicament les pistes de silici d'un processador o mòdul de RAM?
     - Com garanteix la polsera antiestàtica la dissipació contínua de la càrrega sense posar en perill el tècnic d'electrocució (paper de la resistència de seguretat d'$1\text{ M}\Omega$ integrada al cable)?
2. **L'Error Crític dels Separadors de Llautó (*Standoffs*):**
   - Durant el muntatge d'una placa base Micro-ATX dins d'un xassís de semitorre, el tècnic cargola 6 separadors de llautó, però n'oblida un altre cargolat al xassís que correspon a l'estàndard ATX.
     - Què passarà quan s'engegue la font d'alimentació si el separador sobrant fa contacte amb les soldadures posteriors de la placa base?
     - Quin sistema de protecció de la font d'alimentació (OCP, SCP) hauria d'actuar per evitar un incendi?
3. **Diagnòstic Sistemàtic amb EZ Debug LEDs:**
   - Un ordinador engega els ventiladors a màxima velocitat però la pantalla roman en negre.
   - Si el LED `DRAM` de color groc queda encès de forma permanent:
     - Quins són els passos sistemàtics que ha d'executar el tècnic per determinar si el problema és del mòdul de memòria, de la ranura de la placa o del controlador de memòria integrat a la CPU?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Muntatge d'un Banc de Proves Fora de la Caixa (*Test Bench*)
1. Col·loca la caixa de cartó de la placa base com a superfície aïllant (mai damunt de la bossa antiestàtica, ja que el seu exterior és conductor!).
2. Munta la placa base amb:
   - Processador al sòcol respectant la muesca o triangle d'alineació.
   - Dissipador amb una xicoteta gota de pasta tèrmica no conductora al centre de l'IHS.
   - Un sol mòdul de RAM a la ranura 2 (A2).
   - Connexió dels cables ATX de 24 pins i EPS de 8 pins de la font d'alimentació.
3. Fes un pont d'1 segon entre els dos pins `POWER SW` de l'F_PANEL per arrencar.
4. Verifica que la seqüència POST supera les fases de CPU i DRAM i arriba a mostrar vídeo.

#### Repte 2: Diagnosi de Senyals Acústics i LEDs de Depuració
1. Al banc de proves de taller, simula les dues incidències típiques i registra el comportament:
   - **Incidència A:** Retira el mòdul de memòria RAM i engega la màquina. Anota el color del LED de depuració que s'atura i el patró de xiulets si hi ha altaveu intern (*buzzer*).
   - **Incidència B:** Amb la RAM connectada, desconnecta el cable auxiliar d'alimentació EPS de 8 pins de la CPU. Què fa l'equip? Giren els ventiladors? Quin LED queda encès?
2. Documenta la matriu de resultats al teu quadern de taller.

#### Repte 3: Auditoria de Bloquejos Inesperats amb PowerShell a Windows
1. Obre PowerShell com a administrador per analitzar si hi ha hagut apagats sobtats per tall elèctric o curtcircuit:
   ```powershell
   Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='Microsoft-Windows-Kernel-Power'} -MaxEvents 5 | Format-Table TimeCreated, Id, LevelDisplayName, Message -Wrap
   ```
2. Consulta els codis d'aturada d'emergència per pantalla blava (**BugCheck / BSOD**):
   ```powershell
   Get-WinEvent -FilterHashtable @{LogName='System'; Id=1001} -MaxEvents 3 | Select-Object TimeCreated, Message
   ```

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Seguretat Laboral i Prevenció ESD** | Utilitza polsera antiestàtica i estora, manipula components per les vores i explica la física de la descàrrega estàtica. | Coneix el perill de l'estàtica però oblida connectar la pinça de la polsera al metall del xassís. | Toca xips i contactes directament amb els dits sense cap mesura de descàrrega prèvia. |
| **Protocol de Muntatge en Dues Fases** | Executa la prova prèvia al banc de proves, col·loca exactament els separadors necessaris i connecta l'F_PANEL sense errors. | Munta l'equip directament a la caixa sense provar-lo fora o dubta amb la polaritat dels LEDs de l'F_PANEL. | Oblida els separadors de la placa base o força connectors provocant danys mecànics. |
| **Diagnosi d'Avaries POST i Registres** | Interpreta a l'instant els codis de xiulets i EZ Debug LEDs, aïlla el component defectuós i consulta els logs de Kernel-Power. | Detecta que l'equip no arrenca però canvia peces a l'atzar sense seguir la seqüència lògica POST. | No sap interpretar els xiulets de la placa ni sap com comprovar per què l'ordinador no dóna senyal de vídeo. |
