---
layout: default
title: "UD3: La Placa Base de l'Ordinador — Muntatge i Manteniment de Sistemes i Components"
course_root: ".."
badge: "1r FPB · Grau Bàsic · UD3"
---

# 🗄️ UD3: La Placa Base de l'Ordinador (Motherboard)

Benvingut/da a la **Unitat Didàctica 3** de MMSCI. La placa base és la columna vertebral de qualsevol equip informàtic. En aquesta unitat coneixeràs els seus factors de forma físics, els tipus de sòcols de processador (LGA i PGA), el paper del chipset i les fases VRM, la disposició de ranures de memòria RAM i busos PCIe/M.2, i aprendràs a configurar i resoldre fallades amb la BIOS/UEFI i la memòria CMOS.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-form" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sock" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-chip" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-uefi" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">LA PLACA BASE: FACTORS DE FORMA, SÒCOLS, CHIPSET I BIOS/UEFI</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Arquitectura de la motherboard, ranures d'expansió, sockets i gestió de firmware</text>

  <!-- Bloc 1: Factors de Forma -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-form)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Factors de Forma</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Mides i Estàndards</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ATX: 305 × 244 mm (Gran)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Micro-ATX: 244 × 244 mm</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Mini-ITX: 170 × 170 mm</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Distribució caragols xassís</text>
  </g>

  <!-- Bloc 2: Sòcols CPU -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-sock)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔲</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Sòcols CPU</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Connexió Processador</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• LGA: Pins a la placa (Intel/AM5)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• PGA: Pins a la CPU (AM4)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• BGA: Soldat (portàtils/SMD)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Palanca de pressió ZIF</text>
  </g>

  <!-- Bloc 3: Chipset i Ranures -->
  <g transform="translate(435, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-chip)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🔌</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Chipset i Busos</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Connexions Internes</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Chipset (PCH): E/S i SATA</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• PCIe x16: Targeta Gràfica</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• M.2 NVMe: SSD ultraràpid</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Ranures DIMM (DDR4/DDR5)</text>
  </g>

  <!-- Bloc 4: Firmware BIOS/UEFI -->
  <g transform="translate(650, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-uefi)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">⚙️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Firmware i CMOS</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Arrencada i Control</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• UEFI: Gràfic, ratolí i GPT</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• CMOS: Paràmetres configurats</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Pila CR2032 (3 V de liti)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Clear CMOS (Jumper / Botó)</text>
  </g>
</svg>
</div>

---

## 📑 Apartats de la Unitat Didàctica

| Apartat | Títol de la Secció Didàctica | Enllaç Directe |
| :---: | :--- | :---: |
| **3.1** | Funció, estructura i factors de forma (ATX, Micro-ATX, Mini-ITX) | [**📘 Llegir Apartat 3.1 →**](./ut0301.html) |
| **3.2** | El sòcol del microprocessador (Sockets LGA, PGA i BGA) i compatibilitat | [**📘 Llegir Apartat 3.2 →**](./ut0302.html) |
| **3.3** | El chipset i controladors integrats (PCH i fases d'alimentació VRM) | [**📘 Llegir Apartat 3.3 →**](./ut0303.html) |
| **3.4** | Zòcols de memòria RAM (DIMM) i ranures d'expansió (PCIe x16, x1 i M.2) | [**📘 Llegir Apartat 3.4 →**](./ut0304.html) |
| **3.5** | El firmware del sistema: BIOS, UEFI, memòria CMOS i la pila CR2032 | [**📘 Llegir Apartat 3.5 →**](./ut0305.html) |

---

## 🎯 Resultats d'Aprenentatge Treballats

- **RA 1:** Selecciona els components i elements que configuren els equips microinformàtics, descrivint les seues característiques i relacions de compatibilitat.
  - *CE g:* S'han identificat els components integrats a la placa base i els seus factors de forma.
  - *CE h:* S'han descrit els diferents tipus de ranures d'expansió, sockets i connectors de memòria.
  - *CE i:* S'han manipulat els paràmetres bàsics de configuració de la BIOS/UEFI i l'ordre d'arrencada (*Boot sequence*).

---

## 📊 Matriu Comparativa de Factors de Forma de Placa Base

| Factor de Forma | Dimensions Físiques | Ranures RAM (DIMM) | Ranures PCIe típiques | Ports M.2 típics | Àmbit d'Aplicació Recomanat | Compatibilitat de Caixa (Torre) |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
| **E-ATX (Extended)** | 305 × 330 mm | 4 a 8 | 4 a 7 ranures | 3 a 5 ports | Servidors, estacions de treball i Gaming extrem | Torres Grans (*Full Tower*) |
| **ATX (Estàndard)** | 305 × 244 mm | 4 | 3 a 4 ranures | 2 a 4 ports | Ordinadors de sobretaula complets i Gaming | Semitorres (*Mid Tower*) o superiors |
| **Micro-ATX (mATX)** | 244 × 244 mm | 2 a 4 | 2 a 3 ranures | 1 a 2 ports | **L'estàndard corporatiu i educatiu** (Millor qualitat/preu) | Caixes mATX i totes les caixes ATX |
| **Mini-ITX** | 170 × 170 mm | 2 | 1 ranura (x16) | 1 a 2 ports | Equips compactes SFF, TPVs de botiga i HTPC | Caixes Mini-ITX i superiors |

---

## 📌 Resum Didàctic de la Unitat

1. **Factors de forma:** ATX (305×244 mm, estàndard gran amb màxima expansió), Micro-ATX (244×244 mm, el més comú en ordinadors d'aula i oficina), Mini-ITX (170×170 mm, ultracompacte amb una única ranura PCIe).
2. **Sockets de CPU:**
   - **LGA (Land Grid Array):** Els pins de contacte daurats estan a la placa base (utilitzat per Intel des de fa dècades i per AMD a partir d'AM5). Màxima cura de no tocar ni doblegar els pins.
   - **PGA (Pin Grid Array):** Els pins són al mateix processador (utilitzat pel socket AMD AM4 clàssic). Mecanisme de palanca ZIF (*Zero Insertion Force*).
   - **BGA (Ball Grid Array):** Processador soldat directament a la placa amb boles d'estany en equips portàtils i mini-PCs. No intercanviable.
3. **Chipset / PCH:** Gestiona les comunicacions secundàries (USB, SATA, ranures PCIe secundàries, xarxa Ethernet i targeta de so).
4. **Ranures d'expansió:** PCIe x16 (targetes gràfiques dedicades), PCIe x1 (targetes Wi-Fi o captura), M.2 NVMe (discs sòlids d'alta velocitat connectats a línies PCIe directes).
5. **Firmware:** La moderna **UEFI** substitueix la clàssica BIOS aportant interfície gràfica amb ratolí, suport de discos de més de 2 TB (taula de particions GPT) i arrencada segura (*Secure Boot*). La configuració es guarda a la memòria CMOS alimentada per la pila de liti **CR2032** de 3 V.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Dimensionament de Factor de Forma i Selecció de Xassís
En un centre educatiu es volen renovar 15 ordinadors per a un aula d'informàtica i 3 equips d'alt rendiment per al departament d'audiovisuals.
1. Quins són els factors de forma de placa base més recomanats per als equips de l'aula habitual (ofimàtica) i per als equips d'edició de vídeo? Justifica la tria en funció de les dimensions, nombre de ranures RAM i cost.
2. Si comprem una placa base amb factor de forma **Micro-ATX**, podem instal·lar-la dins d'una caixa semitorre dissenyada per a format **ATX**? Explica com s'han de recol·locar els separadors de llautó (*standoffs*) per evitar curtcircuits amb la part metàl·lica del xassís.
3. Una empresa ens demana dissenyar un ordinador que ocupe el mínim espai possible a la recepció d'un negoci. Quina placa base seleccionaries? Quants mòduls de memòria RAM i quantes targetes d'expansió PCIe dedicades admet com a màxim aquest format?

#### Exercici 2: Compatibilitat de Sockets, Processadors i Fases d'Alimentació (VRM)
Analitza la següent situació de taller: un client porta a reparar un ordinador amb un processador Intel Core i5-13400 i vol aprofitar la seua placa base antiga amb socket LGA1200:
1. Podem muntar aquest processador a la placa base antiga del client? Raona la resposta indicant quin socket requereix el nou processador (LGA1700) i per què no són compatibles físicament ni elèctricament.
2. Explica la diferència pràctica de muntatge entre un socket tipus **LGA** i un socket tipus **PGA**. A quin dels dos s'ha d'anar amb compte extrem de no fregar la superfície de la placa base amb cap eina per evitar doblegar pins?
3. Quina funció tenen les fases d'alimentació **VRM** (*Voltage Regulator Module*) i els seus dissipadors d'alumini al voltant del socket del processador? De quina tensió de la font reben l'energia (+12 V) i a quina tensió l'adapten per al silici de la CPU (~1,1 V a 1,35 V)?

#### Exercici 3: Diagnòstic de Fallades de Firmware CMOS i Seqüències d'Arrencada
Un ordinador de laboratori presenta els següents símptomes en prémer el botó d'engegada: l'equip arrenca, però cada matí en encendre's demana prémer `F1 to Continue` i l'hora del sistema torna a l'1 de gener de l'any 2010.
1. Quin component físic de la placa base és responsable d'aquest problema i per què es produeix?
2. Quin model exacte de pila s'utilitza a la pràctica totalitat de plaques base, quina és la seua tensió nominal de fàbrica i a partir de quin valor mesurat amb el multímetre es considera esgotada?
3. Descriu el procediment complet per realitzar un **Clear CMOS** utilitzant el jumper de 3 pins (`CLR_CMOS` / `JBAT1`) en cas que algú haja establert una contrasenya desconeguda a la BIOS de la màquina.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller

#### Repte 1: Identificació Física de Components i Connectors a la Placa Base
- **Objectiu:** Reconèixer i cartografiar sobre una placa base física real tots els seus elements constructius sense cometre cap error de diagnòstic.
- **Material de laboratori:** Placa base desmuntada de taller (ATX o mATX), guia del fabricant (manual en PDF o paper), tornavís pla de precisió.
- **Passos d'execució:**
  1. Col·loca la placa base sobre una superfície aïllant (catifa ESD o la seua bossa antiestàtica per la cara exterior).
  2. Localitza físicament i anota el model exacte i la versió de revisió de la placa serigrafiada sobre la PCB (per exemple, `GIGABYTE B550M DS3H Rev 1.4`).
  3. Identifica i assenyala amb el dit cadascun d'aquests blocs:
     - Sòcol de la CPU i mecanisme de bloqueig.
     - Connector d'alimentació ATX principal de 24 pins i connector EPS de 8 pins (CPU).
     - Ranures de memòria RAM DIMM (identifica la numeració dels canals A1, A2, B1, B2).
     - Ranures d'expansió PCIe: distingeix la ranura principal reforçada x16 de les ranures curtes x1.
     - Ranura M.2 NVMe (comprova si incorpora dissipador tèrmic d'alumini).
     - Connector del panell frontal (`F_PANEL`) per als botons i LEDs de la caixa.
     - Xip del chipset (PCH) cobert pel seu dissipador metàl·lic.
  4. Omple la plantilla de revisió gràfica dibuixant la ubicació relativa de cadascun d'aquests 8 components.

#### Repte 2: Mesura de la Pila CMOS i Execució de Clear CMOS de Laboratori
- **Objectiu:** Diagnosticar la salut elèctrica de la pila de liti i restablir els paràmetres de fàbrica del firmware.
- **Material de laboratori:** Multímetre digital, tornavís pla xicotet, placa base amb pila CR2032 instal·lada.
- **Passos d'execució:**
  1. Localitza el sòcol de la pila CR2032 a la placa base.
  2. Prem amb cura la pestanya metàl·lica de subjecció amb la punta del tornavís pla aïllat fins que la pila s'expulse cap amunt.
  3. Configura el polímetre en mesura de tensió contínua (DCV 20 V).
  4. Col·loca la punta roja a la cara superior plana de la pila (+) i la punta negra a la base inferior (-).
  5. Anota la mesura obtinguda:
     - Si \( V \ge 3,0\text{ V} \): Pila en estat òptim.
     - Si \( 2,8\text{ V} \le V < 3,0\text{ V} \): Pila feble (avís de canvi preventiu).
     - Si \( V < 2,8\text{ V} \): Pila esgotada (substitució immediata obligatòria).
  6. Localitza el jumper `CLR_CMOS` de 2 o 3 pins.
     - Si és de 2 pins: Fes un pont curtcircuitant els dos pins durant 10 segons amb la punta metàl·lica d'un tornavís o caputxó jumper amb l'equip desendollat.
     - Si és de 3 pins: Mou el caputxó de la posició normal (1-2) a la posició de neteja (2-3) durant 10 segons, i torna'l obligatòriament a la posició 1-2.
  7. Torna a col·locar la pila amb la polaritat positiva (+) mirant cap amunt.

#### Repte 3: Configuració de Paràmetres i Ordre d'Arrencada a la BIOS/UEFI
- **Objectiu:** Accedir al menú de configuració del firmware UEFI, ajustar paràmetres de maquinari i establir un llapis USB com a primer dispositiu de càrrega.
- **Material de laboratori:** Ordinador complet connectat a monitor i teclat, memòria USB d'instal·lació d'un sistema operatiu.
- **Passos d'execució:**
  1. Engega l'equip i prem repetidament la tecla d'accés a la BIOS (`DEL` / `SUPR` o `F2` segons la placa) fins que aparega el menú de configuració.
  2. Ajusta la data i hora oficials del sistema si estan desconfigurades.
  3. Navega fins a la pestanya o secció **Boot** (Arrencada):
     - Localitza la llista d'ordre de prioritat de dispositius (*Boot Option Priorities*).
     - Configura com a **Boot Option #1** la unitat USB connectada.
     - Configura com a **Boot Option #2** el disc sòlid intern (SSD NVMe).
  4. Revisa l'estat del perfil de memòria RAM: localitza l'opció **XMP** (Intel) o **EXPO/DOCP** (AMD) i comprova si està activat per aprofitar la freqüència nativa dels mòduls.
  5. Consulta la secció de monitoratge de salut (*Hardware Monitor* / *PC Health*): anota la temperatura del processador i la velocitat de gir del ventilador de la CPU (en RPM).
  6. Desa els canvis i ix del menú prement la tecla d'estalvi de configuració (`F10: Save & Exit`).

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de Verificació de la Placa Base
- [ ] S'ha identificat el factor de forma (ATX, Micro-ATX, Mini-ITX) abans de muntar l'equip a la caixa.
- [ ] Els separadors metàl·lics de la caixa coincideixen exactament amb els orificis caragolats de la placa base.
- [ ] S'ha manipulat el sòcol LGA sense tocar mai els pins metàl·lics interns amb els dits ni les eines.
- [ ] S'ha connectat el cable d'alimentació ATX de 24 pins fins que la pestanya plàstica faça el clic de bloqueig.
- [ ] S'ha connectat el connector EPS de 4+4 pins específic de la CPU (i no un cable PCIe per error).
- [ ] S'ha mesurat la pila CR2032 i s'ha comprovat que proporciona un voltatge igual o superior a 3,0 V.
- [ ] S'ha desat la configuració de la UEFI prement `F10` abans de reiniciar.

#### Rúbrica d'Avaluació Tècnica (FP Bàsica MMSCI - UD3)

| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Identificació de Components de la Placa** | Localitza i descriu amb total precisió el socket, chipset, ranures PCIe, M.2, connectors d'alimentació i panell frontal. | Identifica la majoria de components i connectors de la placa amb petits dubtes en el panell frontal. | Reconeix els elements bàsics (socket, ranures RAM i connector de 24 pins) amb ajut visual. | Incapaç d'identificar les parts d'una placa base o confon connectors incompatibles. |
| **Factors de Forma i Compatibilitat de Sòcols** | Diferencia les mides ATX/mATX/ITX, coneix les diferències LGA vs PGA i resol problemes de compatibilitat. | Explica els factors de forma comuns i distingeix els sockets LGA i PGA satisfactòriament. | Coneix les mides principals de placa però dubta en la compatibilitat de processadors nous i antics. | Confon els formats de placa o intenta encaixar un processador en un socket incompatible. |
| **Diagnòstic de la Pila i Reset CMOS** | Extreu la pila amb seguretat, mesura el voltatge correctament amb el polímetre i executa el Clear CMOS amb rigor. | Mesura la pila i comprèn el procediment de neteja de la CMOS amb jumper amb assistència mínima. | Mesura la pila amb indicacions però té dubtes a l'hora de localitzar el jumper `CLR_CMOS`. | Provoca danys al sòcol de la pila o curtcircuits indeguts per desconeixement tècnic. |
| **Maneig del Firmware BIOS/UEFI** | Navega per la UEFI amb soltesa, canvia l'ordre d'arrencada (*Boot*), activa perfils XMP i desa els paràmetres amb F10. | Accedeix a la BIOS/UEFI i configura la seqüència d'arrencada per a memòries USB correctament. | Entra a la BIOS i canvia l'ordre d'arrencada guiat pel manual pas a pas. | No sap com accedir a la BIOS/UEFI o modifica paràmetres crítics sense criteri. |
