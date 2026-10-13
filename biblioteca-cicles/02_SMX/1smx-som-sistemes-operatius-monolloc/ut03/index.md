---
layout: default
title: "UD3 — Virtualització i Màquines Virtuals"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3"
---

# 📘 UD3 — Virtualització i Màquines Virtuals

La **Unitat Didàctica 3** aborda una de les tecnologies més disruptives i essencials en l'administració de sistemes moderna: la **virtualització de plataformes**. Aquesta tècnica permet executar múltiples sistemes operatius complets i independents de forma concurrent sobre una mateixa màquina física, facilitant el desplegament de laboratoris aïllats, proves d'auditoria i serveis corporatius d'alta disponibilitat.

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

## 📊 Comparativa dels 4 Modes de Xarxa en Oracle VirtualBox

| Mode de Xarxa | Adreça IP del Convidat | Accés a Internet | Connexió Host $\leftrightarrow$ VM | Connexió VM $\leftrightarrow$ VM | Ús Recomanat |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **NAT (*Network Address Translation*)** | Assignada per VirtualBox (`10.0.2.15/24`) | **Sí** | No directa (requereix reenviament de ports) | No | Navegació i descàrrega de paquets individual en aïllament bàsic. |
| **Adaptador Pont (*Bridged*)** | Assignada pel router físic de l'aula | **Sí** | **Sí** | **Sí** (a través de la LAN física) | Servidors que han de ser accessibles per altres alumnes de l'aula. |
| **Xarxa Interna (*Internal Network*)** | Requereix IP estàtica o DHCP intern | **No** | **No** | **Sí** (si comparteixen el mateix nom de xarxa) | **Laboratoris aïllats de xarxa, proves DHCP/DNS i simulació corporativa.** |
| **Només-Amfitrió (*Host-Only*)** | Assignada per subxarxa privada host | **No** | **Sí** | **Sí** (entre VMs del mateix adaptador) | Administració SSH i transferència de fitxers segura entre host i convidat. |

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **3.3** | [**Fonaments de la Virtualització**](./ut0303.md) | Concepte d'Host vs Guest, emulació vs virtualització assistida per maquinari | [**📘 Estudiar Fonaments →**](./ut0303.md) |
| **3.4** | [**Tipus d'Hipervisors i Arquitectura**](./ut0304.md) | Anàlisi comparativa d'hipervisors Tipus 1 (Bare-Metal) vs Tipus 2 (Hosted) | [**☁️ Estudiar Hipervisors →**](./ut0304.md) |
| **3.7** | [**Oracle VM VirtualBox en Detall**](./ut0307.md) | Interfície, paràmetres de memòria, processador, controladors de disc i xarxa | [**⚙️ Configurar VirtualBox →**](./ut0307.md) |
| **3.10** | [**Instal·lació de Màquines Guests**](./ut0310.md) | Desplegament pas a pas d'Ubuntu Desktop i Windows 11 en VM | [**🖥️ Desplegar Màquines →**](./ut0310.md) |
| **3.14** | [**Guest Additions i Integració**](./ut0314.md) | Instal·lació de controladors gràfics, carpetes compartides i portapapers | [**🔗 Integrar Guest Additions →**](./ut0314.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA2:** Instal·la sistemes operatius monolloc planificant el procés i utilitzant tecnologies de virtualització per a la creació d'entorns de prova.
- **Criteris d'Avaluació:**
  - S'ha diferenciat l'arquitectura d'un hipervisor de Tipus 1 i Tipus 2, justificant la seua aplicació.
  - S'han seleccionat i configurat els modes de xarxa adequats segons el nivell d'aïllament requerit.
  - S'han gestionat instantànies (*snapshots*) per al retorn ràpid a punts segurs de restauració.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul de Sobreassignació de Memòria (*Memory Overcommit*):**
   - Un servidor amfitrió físic disposa de $64\text{ GiB}$ de memòria RAM física instal·lada.
   - El sistema operatiu amfitrió requereix $6\text{ GiB}$ per al seu funcionament estable.
   - Es volen desplegar 6 màquines virtuals de proves:
     - 4 màquines virtuals Windows 11 amb $8\text{ GiB}$ de RAM assignada cadascuna.
     - 2 màquines virtuals Ubuntu Server amb $4\text{ GiB}$ de RAM assignada cadascuna.
   - **Preguntes de dimensionament:**
     - Calcula la suma total de memòria RAM demandada per les 6 màquines virtuals més el sistema amfitrió.
     - És possible encendre totes les màquines simultàniament sense entrar en sobreassignació de memòria (*overcommit*)? Quants GiB sobrarien o faltarien?
     - Si la memòria es reserva en mode dinàmic i en repòs cada VM Windows només consumeix realment $3\text{ GiB}$ i cada Linux $1\text{ GiB}$, quina quantitat de memòria física real s'estarà consumint?

2. **Dimensionament de Discs Dinàmics (*Thin Provisioning*):**
   - Es disposa d'un SSD físic de $500\text{ GB}$ amb $380\text{ GB}$ d'espai lliure.
   - Es creen 5 màquines virtuals amb un disc virtual de format VDI de $60\text{ GB}$ cadascuna configurades en mode **Reservat Dinàmicament**.
   - En el moment de la instal·lació inicial, cada sistema operatiu convidat ocupa únicament $12\text{ GB}$ reals a disc.
   - **Preguntes d'anàlisi:**
     - Quant d'espai físic total ocupen els 5 fitxers `.vdi` immediatament després d'instal·lar-se?
     - Quin greu risc operatiu es produeix si amb el pas dels mesos cadascuna de les 5 VMs creix en dades fins a assolir els seus $60\text{ GB}$ màxims teòrics? Com ha de gestionar el tècnic aquest risc?

3. **Càlcul de Reenviament de Ports (*Port Forwarding*) en Mode NAT:**
   - Una màquina virtual convidada s'executa darrere d'un adaptador NAT de VirtualBox amb la seua adreça interna estàndard `10.0.2.15`.
   - Dins d'aquesta màquina s'inicia un servidor web Apache que escolta al port estàndard `80`.
   - **Preguntes de disseny:**
     - Per quina raó un altre equip de l'aula física no pot obrir el navegador i accedir directament a `http://10.0.2.15`?
     - Dissenya una regla de redirecció de ports (*Port Forwarding*) establint el port del host `8080` cap al port del convidat `80`. A quina URL accedirà l'equip amfitrió per visualitzar la pàgina web?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Gestió de Màquines Virtuals per Línia d'Ordres amb `VBoxManage`
1. Obre un símbol del sistema o consola PowerShell a la carpeta d'instal·lació d'Oracle VirtualBox (`C:\Program Files\Oracle\VirtualBox`):
   ```cmd
   cd "C:\Program Files\Oracle\VirtualBox"
   VBoxManage.exe list vms
   ```
2. Consulta la informació detallada d'una màquina virtual de laboratori:
   ```cmd
   VBoxManage.exe showvminfo "NomDeLaVM" --machinereadable | findstr /I "memory cpus ostype"
   ```
3. Inicia la màquina virtual en mode desatès (*Headless*, sense finestra gràfica, com si fóra un servidor en un CPD):
   ```cmd
   VBoxManage.exe startvm "NomDeLaVM" --type headless
   ```
4. Comprova amb `VBoxManage.exe list runningvms` que s'està executant correctament i atura-la amb apagament suau ACPI:
   ```cmd
   VBoxManage.exe controlvm "NomDeLaVM" acpipowerbutton
   ```

#### Repte 2: Gestió d'Instantànies (*Snapshots*) per Consola
1. Abans de dur a terme una modificació crítica o instal·lació en una màquina virtual, crea una instantània de seguretat:
   ```cmd
   VBoxManage.exe snapshot "NomDeLaVM" take "EstatInicial_Segur" --description "Snapshot previ a proves"
   ```
2. Llista les instantànies existents per verificar l'arbre jeràrquic:
   ```cmd
   VBoxManage.exe snapshot "NomDeLaVM" list
   ```
3. Simula una fallada intencionada (modificació d'un fitxer clau a la VM) i reverteix l'estat complet al punt segur:
   ```cmd
   VBoxManage.exe controlvm "NomDeLaVM" poweroff
   VBoxManage.exe snapshot "NomDeLaVM" restore "EstatInicial_Segur"
   ```

#### Repte 3: Desplegament d'una Topologia en Xarxa Interna Aïllada
1. Modifica la configuració de xarxa de dues màquines virtuals per unir-les a un commutador virtual privat anomenat `TallerSMX`:
   ```cmd
   VBoxManage.exe modifyvm "VM1_Linux" --nic1 intnet --intnet1 "TallerSMX"
   VBoxManage.exe modifyvm "VM2_Linux" --nic1 intnet --intnet1 "TallerSMX"
   ```
2. Inicia les dues màquines i assigna adreces estàtiques a la mateixa subxarxa:
   - A VM1: `192.168.50.10/24`
   - A VM2: `192.168.50.20/24`
3. Executa una prova de connectivitat `ping 192.168.50.20` des de VM1 cap a VM2.
4. Verifica que cap d'elles té accés a Internet (`ping 8.8.8.8` ha de fallar) i que el sistema operatiu físic no pot arribar a aquestes adreces IP, confirmant l'aïllament segur del laboratori.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura d'Hipervisors i Recursos** | Distingeix amb precisió hipervisors Tipus 1 i Tipus 2, calcula sobreassignacions de RAM i avalua riscos de Thin Provisioning. | Coneix que Proxmox és Tipus 1 i VirtualBox Tipus 2, però s'equivoca en el càlcul d'espai en discos dinàmics. | Confon la virtualització amb l'emulació per programari pur o desconeix què és un hipervisor. |
| **Topologia i Modes de Xarxa Virtual** | Configura correctament els quatre modes de xarxa (NAT, Pont, Interna, Host-Only) garantint l'aïllament de serveis i evitant col·lapses LAN. | Configura les xarxes mitjançant la interfície gràfica però no sap explicar per què una màquina en NAT no és accessible des de fora. | Utilitza sempre el mode per defecte sense saber adaptar la xarxa als requeriments del laboratori. |
| **Gestió Avançada i Eines CLI (VBoxManage)** | Domina la comanda `VBoxManage` per llistar, iniciar en mode headless, crear instantànies i revertir estats sense GUI. | Utilitza les instantànies des de la interfície gràfica però no sap interactuar amb l'hipervisor des de la línia d'ordres. | No utilitza mai instantànies de seguretat i ha de reinstal·lar les màquines virtuals davant qualsevol fallada. |
