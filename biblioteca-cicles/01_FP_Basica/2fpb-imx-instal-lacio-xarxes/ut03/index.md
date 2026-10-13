---
layout: default
title: "UD3: Fibra Òptica i Comunicacions Sense Fil (Wi-Fi) — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD3"
next_url: "ut0301.html"
next_label: "3.1 ➡️"
---

# UD3: Fibra Òptica i Comunicacions Sense Fil (Wi-Fi)

Transmissió per fibra òptica (monomode vs multimode, connectors SC/LC/ST), seguretat laboral amb fibra, xarxes sense fil Wi-Fi (freqüències de 2.4, 5 i 6 GHz, canals, estàndards), seguretat WPA2/WPA3 i pràctica d'anàlisi d'espectre.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-fib" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-prl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#be123c" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-wif" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-sec" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">FIBRA ÒPTICA I COMUNICACIONS SENSE FIL: ÒPTICA, ESPECTRE I SEGURETAT</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Monomode vs Multimode, PRL en tallers de fibra, bandes 2.4/5 GHz i xifratge WPA2/WPA3</text>

  <!-- Bloc 1: Fibra Òptica -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fib)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">💡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Fibra Òptica</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Nucli i Connectors</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Monomode: 9 µm (Groc)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Multimode: 50 µm (Aqua)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Connectors: LC, SC, ST</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Transceptors: SFP/SFP+</text>
  </g>

  <!-- Bloc 2: Seguretat Laboral PRL -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-prl)" stroke="#f43f5e" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f43f5e" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="bold">⚠️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">PRL i Seguretat</text>
    <text x="15" y="62" fill="#f43f5e" font-size="11" font-weight="600">Riscos Laborals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• MAI mirar el feix làser</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Llum infraroja invisible</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Ulleres de seguretat</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Contenidor rígid vidre</text>
  </g>

  <!-- Bloc 3: Wi-Fi Espectre -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-wif)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">📡</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Espectre Wi-Fi</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Bandes i Canals</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 2.4 GHz: Canals 1, 6, 11</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 5 GHz: >19 canals nets</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 6 GHz: Wi-Fi 6E / 7 ultra</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• RSSI: -30 a -67 dBm bo</text>
  </g>

  <!-- Bloc 4: Seguretat Sense Fil -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-sec)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔒</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Seguretat WLAN</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Autenticació i Xifrat</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• WEP/TKIP: Insegurs</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• WPA2: Robust amb AES</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• WPA3: SAE anti-diccionari</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Enterprise: 802.1X RADIUS</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **3.1** | **Fonaments de la fibra òptica: monomode vs multimode** | [**Llegir apartat →**](./ut0301.html) |
| **3.2** | **Seguretat i precaucions laborals amb fibra òptica** | [**Llegir apartat →**](./ut0302.html) |
| **3.3** | **Xarxes sense fil Wi-Fi: freqüències, canals i cobertura** | [**Llegir apartat →**](./ut0303.html) |
| **3.4** | **Seguretat en Wi-Fi: SSID, filtratge MAC, WPA2 i WPA3** | [**Llegir apartat →**](./ut0304.html) |
| **3.5** | **Pràctica: Anàlisi d'espectre Wi-Fi i configuració d'un AP** | [**Llegir apartat →**](./ut0305.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 3.1 Fonaments de la fibra òptica: monomode vs multimode

La **fibra òptica** és un medi de transmissió format per un filament extremadament prim de vidre (sílice) o plàstic d'alta puresa a través del qual es transmeten polsos de llum (generats per díodes LED o làsers). En lloc de transportar senyals elèctrics com el coure, transporta fotons de llum.

### Avantatges de la fibra òptica respecte al coure
- **Immunitat total a interferències electromagnètiques (EMI):** Com que transmet llum i no electricitat, és totalment immune a camps magnètics de motors, transformadors o llamps.
- **Distàncies molt superiors:** Permet enllaços de desenes de quilòmetres sense necessitat de repetidors intermedis.
- **Ample de banda gegantí:** Pot transportar terabits de dades per segon en xarxes troncals.
- **Pes i diàmetre reduïts:** Un cable de fibra pesa molt menys i ocupa molt menys espai en canalitzacions que un cable de coure equivalent.
- **Seguretat:** És molt difícil de punxar o espiar clandestinament sense interrompre el senyal.

---

### Tipus de fibra òptica

Distingim dos grans tipus de fibra segons com viatja la llum pel seu nucli (*core*):

| Característica | Fibra Multimode (MMF) | Fibra Monomode (SMF) |
| :--- | :--- | :--- |
| **Diàmetre del nucli** | Gran: 50 o 62,5 micròmetres ($\mu m$) | Molt xicotet: 9 micròmetres ($\mu m$) |
| **Propagació de la llum** | Múltiples raigs o modes de llum rebotant | Un únic raig directe sense reflexions |
| **Font de llum** | LED o làser VCSEL de baix cost | Làser d'alta precisió |
| **Abast màxim** | Fins a 550 m (a 10 Gbps) o 2 km (a 100 Mbps) | Des de 10 km fins a més de 40 - 80 km |
| **Color típic del cable** | Taronja (OM1/OM2) o Aqua/Turquesa (OM3/OM4) | Groc (OS1/OS2) |
| **Àmbit d'aplicació** | Connexions locals entre racks i servidors d'un mateix edifici | Xarxes de telecomunicacions, WAN, FTTH d'operadors |

---

### Connectors de fibra òptica més comuns
- **SC (*Subscriber Connector*):** Connector quadrat d'inserció a pressió ("push-pull"). Molt utilitzat en rosetes òptiques domèstiques FTTH i equips de xarxa.
- **LC (*Lucent Connector*):** Connector de format reduït (SFF) amb pestanya similar a l'RJ45. És el connector més utilitzat als mòduls transceptors SFP/SFP+ dels switches professionals.
- **ST (*Straight Tip*):** Connector rodó amb tancament tipus baioneta de mitja volta. Comú en instal·lacions multimode industrials clàssiques.

---

## 3.2 Seguretat i precaucions laborals amb fibra òptica

Treballar amb fibra òptica en tallers i instal·lacions reals requereix seguir unes normes de seguretat laboral molt estrictes, ja que presenta riscos que no existeixen en el cablejat convencional de coure.

### Principals riscos laborals

#### 1. Risc de punxada per restes microscòpiques de vidre
Quan es pela, es talla o es fusiona una fibra òptica, es generen petits fragments sobrants de filament de vidre d'un diàmetre semblant al d'un cabell humà:
- Si aquests fragments cauen a la roba o la pell, es claven fàcilment provocant ferides doloroses i infeccions.
- Si entren al torrent sanguini o es toquen amb els ulls, poden causar lesions greus a la còrnia o complicacions mèdiques severes.

#### 2. Risc de radiació làser invisible
La llum utilitzada en fibra òptica (longituds d'ona de 850 nm, 1310 nm o 1550 nm) pertany a l'espectre **infraroig**, és a dir, **és totalment invisible per a l'ull humà**:
- Si una persona mira directament cap a l'extrem d'una fibra o connector encès pensant que està apagat, el feix làser invisible pot cremar la retina de forma irreversible en una fracció de segon.

---

### Normes obligatòries de seguretat en taller (PRL)

> [!WARNING]
> 1. **MAI miris directament l'extrem d'un cable de fibra òptica ni d'un transceptor òptic (SFP), estiga o no connectat.**
> 2. Utilitza sempre **ulleres de seguretat homologades** amb protecció lateral durant la manipulació i tall de fibra.
> 3. Tota resta o punta de fibra tallada s'ha de recollir immediatament amb pinces i depositar-se dins d'un **contenidor rígid de residus de fibra senyalitzat**. Mai es llancen al terra ni a la paperera convencional.
> 4. Està absolutament **prohibit menjar o beure** a la zona de treball de manipulació de fibra òptica.
> 5. Treballa sobre una superfície de goma fosca (estoreta negra) per poder visualitzar fàcilment els xicotets fragments de vidre transparent.

---

## 3.3 Xarxes sense fil Wi-Fi: freqüències, canals i cobertura

Les xarxes d'àrea local sense fil (**WLAN**, comercialment conegudes com a **Wi-Fi**) utilitzen ones electromagnètiques de ràdio per transmetre dades entre els punts d'accés (AP) i els dispositius clients (ordinadors portàtils, telèfons intel·ligents, tauletes, consoles).

### Bandes de freqüència lliures en Wi-Fi

El Wi-Fi utilitza principalment tres bandes de freqüència de l'espectre radioelèctric ISM (*Industrial, Scientific and Medical*):

#### 1. Banda de 2.4 GHz
- **Característiques:** Disposa de freqüències més baixes, la qual cosa permet una **major penetració a través de parets i obstacles** i un major abast de cobertura.
- **Inconvenients:** És una banda molt saturada (comparteix espai amb forns microones, dispositius Bluetooth, càmeres sense fil) i té molt pocs canals no solapats.
- **Canals:** A Europa hi ha 13 canals (de l'1 al 13), però com que cada canal ocupa 20 o 22 MHz, només hi ha **3 canals que no interfereixen entre si: l'1, el 6 i l'11**.

#### 2. Banda de 5 GHz
- **Característiques:** Disposa de molt més ample de banda i més de 20 canals que no se solapen. Permet **velocitats molt més elevades** i pateix moltíssimes menys interferències externes.
- **Inconvenients:** Com més alta és la freqüència de l'ona, menor és la seua capacitat de travessar parets de formigó o maó. Per tant, l'abast és més reduït que en 2.4 GHz.

#### 3. Banda de 6 GHz (Wi-Fi 6E i Wi-Fi 7)
- Nova banda oberta recentment que afegeix fins a 1.200 MHz d'espectre net sense interferències per a aplicacions de realitat virtual, streaming 8K i latències ultra-baixes.

---

### Taula comparativa 2.4 GHz vs 5 GHz

| Propietat | Banda 2.4 GHz | Banda 5 GHz |
| :--- | :--- | :--- |
| **Abast físic** | Gran (uns 40-50 metres en interiors) | Mitjà-Curt (uns 15-20 metres) |
| **Penetració en parets** | Bona | Menor atenuació per obstacles |
| **Velocitat màxima** | Moderada (fins a ~300-450 Mbps) | Molt alta (més d'1 Gbps) |
| **Saturació per veïns** | Molt alta en edificis i blocs de pisos | Baixa o moderada |
| **Canals nets simultanis** | Només 3 (Canals 1, 6 i 11) | Més de 19 canals independents |

---

## 3.4 Seguretat en Wi-Fi: SSID, filtratge MAC, WPA2 i WPA3

Com que les ones de ràdio d'una xarxa Wi-Fi no s'aturen a les parets d'una aula o d'un habitatge, qualsevol persona amb un dispositiu que estiga al carrer o a la porta del centre podria captar el senyal. Per això, aplicar mesures de seguretat adequades és imprescindible.

### Elements bàsics d'una xarxa Wi-Fi
- **SSID (*Service Set Identifier*):** És el nom visible de la xarxa Wi-Fi (per exemple, `AULA_FPB_XARXES` o `WIFI_DOCENT`).
- **Ocultació del SSID (*Broadcast Disable*):** Permet que el nom de la xarxa no s'anuncie en les recerques automàtiques. Els clients han d'escriure el nom manualment per connectar-se. (És una mesura bàsica de privacitat, però no substitueix un bon xifratge).
- **Filtratge per adreça MAC:** El router manté una llista blanca d'adreces físiques autoritzades. Si la MAC d'un equip no està a la llista, se li denega l'accés.

---

### Mètodes de xifratge i seguretat

| Protocol de Seguretat | Estat Actual | Vulnerabilitats i Característiques |
| :--- | :--- | :--- |
| **Open (Oberta)** | Sense protecció | Qualsevol persona es pot connectar i el trànsit viatja en text pla sense xifrar. Ús en cafeteries i aeroports. |
| **WEP (*Wired Equivalent Privacy*)** | **Totalment OBSOLET i INSEGUR** | Clau estàtica de 64 o 128 bits. Es pot desxifrar en menys de 2 minuts amb programes gratuïts. Mai s'ha d'utilitzar. |
| **WPA (*Wi-Fi Protected Access*)** | Obsolet | Utilitzava TKIP. Substituït ràpidament per WPA2. |
| **WPA2-Personal (WPA2-PSK)** | **Molt segur i vigent** | Utilitza xifratge robust **AES** (*Advanced Encryption Standard*). Requereix una contrasenya forta (pre-shared key) de més de 12 caràcters. |
| **WPA2-Enterprise** | Estàndard corporatiu | Cada usuari té el seu propi nom i contrasenya individual, validats contra un servidor central d'autenticació (RADIUS). És el sistema d'Eduroam o la xarxa de professors de la Generalitat. |
| **WPA3-Personal** | **L'estàndard modern més segur** | Introdueix el protocol SAE (*Simultaneous Authentication of Equals*), que protegeix contra atacs de diccionari per força bruta encara que la clau siga senzilla. |

> [!TIP]
> Per a una xarxa domèstica o de xicoteta oficina, la configuració recomanada és **WPA2/WPA3 Personal amb xifratge AES** i una clau d'accés complexa que combine majúscules, minúscules, números i símbols.

---

## 3.5 Pràctica: Anàlisi d'espectre Wi-Fi i configuració d'un AP

### Objectiu
1. Utilitzar una eina d'anàlisi de xarxes sense fil per comprovar quines xarxes Wi-Fi hi ha a l'entorn de l'aula, en quins canals emeten i el seu nivell de potència de senyal (RSSI en dBm).
2. Configurar els paràmetres essencials d'un punt d'accés (AP) o router domèstic de laboratori.

---

### Part 1: Anàlisi de l'espectre Wi-Fi

#### Eines recomanades
- En telèfons Android: aplicació gratuïta **WiFi Analyzer**.
- En ordinadors amb Windows: programes com **InSSIDer**, **NetSpot** o l'ordre nativa de PowerShell:
```powershell
netsh wlan show networks mode=bssid
```

#### Procediment d'anàlisi
1. Obre l'aplicació d'anàlisi d'espectre al teu dispositiu.
2. Observa el gràfic de canals de la banda de **2.4 GHz**:
   - Quantes xarxes apareixen al voltant de la teua aula?
   - Quines xarxes estan utilitzant els canals 1, 6 i 11?
   - Hi ha xarxes en canals intermedis (com el canal 3 o 4) generant interferències destructives?
3. Observa el valor de potència de senyal (**RSSI**, mesurat en dBm, que són valors negatius):
   - Excel·lent senyal: entre **-30 dBm** i **-50 dBm**.
   - Senyal bo: entre **-50 dBm** i **-67 dBm**.
   - Senyal dèbil o inestable: pitjor de **-75 dBm** o **-85 dBm**.
4. Canvia a la pestanya de la banda de **5 GHz**:
   - Compara la quantitat de xarxes presents i la separació neta entre els canals.

---

### Part 2: Configuració bàsica d'un Punt d'Accés (AP) de laboratori
Connecta el teu ordinador mitjançant un cable de xarxa a un dels ports LAN del router de laboratori.

1. Obre el navegador web i escriu la IP de gestió del router (habitualment `192.168.1.1` o `192.168.0.1`).
2. Introdueix l'usuari i la contrasenya d'administració proporcionats a la documentació tècnica de l'equip de taller (`admin`/`admin` o segons etiqueta de la base de l'equip).
3. Accedeix a l'apartat **Wireless / Xarxa Sense Fil** i configura:
   - **SSID:** `FPB_TALLER_GRUP_X`
   - **Banda:** 2.4 GHz
   - **Canal:** Selecciona manualment el canal menys saturat segons l'estudi previ (Canal 1, 6 o 11).
   - **Seguretat:** WPA2-PSK (AES).
   - **Contrasenya (Pre-shared Key):** Tria una clau segura (mínim 10 caràcters).
4. Guarda els canvis, reinicia el servei Wi-Fi de l'AP i connecta't amb el teu telèfon mòbil o portàtil verificant que reps connectivitat correcta.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de balanç de potència òptica i atenuació d'un enllaç de fibra
En la interconnexió troncal entre dos edificis educatius separats per una distància de $L = 6\text{ km}$, s'instal·la una fibra monomode OS2 treballant a una longitud d'ona de $1310\text{ nm}$.
- Potència d'emissió del transceptor SFP d'origen: $P_{\text{tx}} = -4\text{ dBm}$.
- Atenuació del cable de fibra: $\alpha = 0{,}35\text{ dB/km}$.
- Atenuació de cada connector LC d'extrem (2 connectors en total): $A_{\text{conn}} = 0{,}5\text{ dB}$.
- Atenuació de cada empalme per fusió realitzat a la línia (3 empalmes): $A_{\text{fusió}} = 0{,}08\text{ dB}$.
- Sensibilitat mínima de recepció del transceptor SFP destí: $P_{\text{sens}} = -22\text{ dBm}$.

1. Calcula l'atenuació total acumulada de l'enllaç ($A_{\text{total}}$) aplicant la fórmula:
   $$A_{\text{total}} = (\alpha \cdot L) + (2 \cdot A_{\text{conn}}) + (3 \cdot A_{\text{fusió}})$$
2. Calcula la potència de recepció que arriba al port de destí:
   $$P_{\text{rx}} = P_{\text{tx}} - A_{\text{total}}$$
3. Determina el marge de seguretat de l'enllaç ($M = P_{\text{rx}} - P_{\text{sens}}$). Si el marge ha de ser superior a $3\text{ dB}$ per cobrir envelliment i possibles reparacions futures, l'enllaç és apte per a certificació?

#### Exercici 2: Anàlisi de canals de radiofreqüència i interferència en 2.4 GHz
La banda de $2{,}4\text{ GHz}$ està compresa entre $2401\text{ MHz}$ i $2483\text{ MHz}$ a Europa (13 canals), amb una separació entre canals adjacents de només $5\text{ MHz}$, mentre que cada emissió Wi-Fi ocupa una amplada espectral d'uns $22\text{ MHz}$.
1. Explica gràficament o matemàticament per què els canals 1 ($2412\text{ MHz}$), 6 ($2437\text{ MHz}$) i 11 ($2462\text{ MHz}$) són els únics tres canals que no se solapen.
2. Si un veí configura el seu router Wi-Fi al canal 3:
   - Amb quins altres canals oficials interferirà de manera destructiva (*co-channel/adjacent channel interference*)?
   - Què li succeeix a la velocitat real de transmissió dels dispositius afectats per la col·lisió de trames radioelèctriques?

#### Exercici 3: Diagnòstic de potència RSSI i pèrdues per materials
Un tècnic mesura la potència del senyal Wi-Fi d'un punt d'accés en diferents punts d'una nau d'oficines mitjançant un telèfon mòbil:
- Punt A (a 3 metres de l'AP, visió directa): $-42\text{ dBm}$.
- Punt B (darrere d'una porta de fusta aglomerada): $-51\text{ dBm}$.
- Punt C (darrere d'un mur de càrrega de formigó armat de 30 cm): $-78\text{ dBm}$.
- Punt D (al final del passadís metàl·lic): $-89\text{ dBm}$.

1. Classifica la qualitat de la connectivitat a cadascun dels quatre punts (Excel·lent, Bona, Crítica/Inestable, Sense enllaç útil).
2. Per què una caiguda de $-3\text{ dB}$ en l'escala logarítmica significa que la potència radioelèctrica s'ha reduït a la meitat ($50\%$ de la potència original)?
3. Quina solució tècnica d'infraestructura (repetidor, enllaç per cable o AP addicional) proposaries per cobrir adequadament el Punt C i el Punt D?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Protocol de seguretat i inspecció de connectors de fibra LC/SC
- **Objectiu:** Conèixer els equips de protecció individual (EPI) de fibra i inspeccionar l'estat de neteja de la fèrula ceràmica d'un *patch cord* de fibra.
- **Materials:** Cable de pegat de fibra multimode (OM3/OM4), ulleres de protecció, casset netejador de fibra en sec o bastonets d'alcohol isopropílic (IPA) i microscopi d'inspecció òptica (o lupa tècnica de gran augment).
- **Procediment de taller:**
  1. Equipa't amb les ulleres de protecció amb protecció lateral abans d'iniciar qualsevol manipulació.
  2. Retira el tap protector de pols del connector LC/SC.
  3. Realitza una inspecció visual mitjançant el microscopi d'inspecció (sense cap font làser activa a l'altre extrem!).
  4. Identifica possibles partícules de pols, esgarrapades o empremtes grasses sobre la superfície ceràmica.
  5. Neteja la fèrula lliscant el connector en un sol sentit sobre la cinta del casset de neteja òptic.
  6. Torna a inspeccionar per confirmar la neteja total i recol·loca immediatament el tap protector.

#### Repte 2: Auditoria d'espectre radioelèctric a l'aula de taller
- **Objectiu:** Escanejar l'entorn de radiofreqüències de l'aula per detectar punts cecs de cobertura i saturació de canals.
- **Eines:** Portàtil amb consola de comandes o dispositiu mòbil amb eina de diagnòstic d'espectre Wi-Fi.
- **Passos de realització:**
  1. Executa al terminal de l'equip:
     ```powershell
     netsh wlan show networks mode=bssid
     ```
  2. Localitza les 3 xarxes més potents captades i anota per a cadascuna: SSID, canal de treball, tipus d'autenticació (ex: WPA2-Personal) i nivell de senyal en percentatge o dBm.
  3. Desplaça't amb l'analitzador a tres zones diferents del taller (prop de la finestra, al costat de la porta d'accés i al fons de l'aula).
  4. Construeix una taula comparativa de valors RSSI i determina si l'aula necessita un canvi de canal de l'AP o un augment de potència de transmissió.

#### Repte 3: Configuració i blindatge d'un Punt d'Accés Wi-Fi domèstic/oficina
- **Objectiu:** Configurar des de zero un dispositiu AP aplicant paràmetres de màxima seguretat i òptim rendiment.
- **Eines:** Router Wi-Fi de laboratori, cable de xarxa UTP directe i navegador web.
- **Requisits de la comanda tècnica:**
  1. Accedeix al panell web d'administració del router i canvia la contrasenya per defecte d'`admin` per una de nova de seguretat tècnica.
  2. Assigna un nou SSID professional: `XARXA_CORP_TALLER`.
  3. Selecciona la banda de $5\text{ GHz}$ amb amplada de canal de $80\text{ MHz}$ per a màxim rendiment en equips moderns.
  4. Configura el mètode de xifratge en **WPA2/WPA3 Personal (AES)**.
  5. Genera una clau WPA robusta d'almenys 14 caràcters que continga lletres majúscules, minúscules, dígits i caràcters especials.
  6. Desactiva la funció **WPS** (*Wi-Fi Protected Setup*) per evitar vulnerabilitats d'atac per PIN.
  7. Connecta el teu equip client i comprova que rep adreça IP correcta i disposa de navegació fluida.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He utilitzat les ulleres de protecció durant la manipulació dels connectors i cables de fibra.
- [ ] Tinc clar que mai s'ha de mirar directament l'extrem d'una fibra ni d'un transceptor òptic encès.
- [ ] He calculat correctament les pèrdues d'atenuació òptica en decibels (dB) de l'enllaç troncal.
- [ ] He identificat els canals 1, 6 i 11 com els únics sense solapament a la banda de 2.4 GHz.
- [ ] He mesurat els valors RSSI de cobertura i he interpretat correctament els valors en dBm negatius.
- [ ] He configurat el punt d'accés amb xifratge robust AES i he desactivat funcions insegures com WPS.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Prevenció de riscos laborals amb fibra (PRL)** | Respecta estrictament totes les normes de seguretat (ulleres, no mirar làser, residus de vidre) i explica els riscos. | Aplica les normes de seguretat i utilitza protecció sense necessitat d'advertiments. | Coneix els riscos bàsics de la fibra encara que requereix recordatoris puntuals d'ús d'ulleres. | Incompleix normes greus de seguretat com mirar directament connectors o no protegir-se els ulls. |
| **Fonaments de fibra monomode i multimode** | Distingeix amb precisió diàmetres de nucli, fonts de llum, colors de coberta, abasts i tipus de connectors. | Reconeix les diferències entre monomode i multimode i els connectors habituals (SC, LC). | Reconeix la diferència bàsica d'ús entre fibra groga (exterior/llarga) i taronja/aqua (interior). | Confon fibra monomode amb multimode o no coneix els connectors òptics bàsics. |
| **Càlcul d'atenuació i balanç de potència** | Resol el balanç de potència complet calculant pèrdues de connectors, empalmes i distància amb èxit. | Calcula l'atenuació de la fibra i connectors amb xicotets dubtes en el càlcul del marge de seguretat. | Calcula l'atenuació bàsica per quilòmetre sense considerar connectors o empalmes. | Incapaç de calcular l'atenuació d'un enllaç òptic o interpretar decibels. |
| **Anàlisi d'espectre radioelèctric (2.4 / 5 GHz)** | Interpreta gràfics espectrals, canals no solapats, interferències i valors RSSI en dBm amb solvència professional. | Mesura senyals Wi-Fi i identifica els canals 1, 6 i 11 i nivells de cobertura acceptables. | Utilitza l'eina d'anàlisi de xarxes però té dificultats per interpretar valors negatius de dBm. | No sap utilitzar l'analitzador de xarxes ni comprèn el concepte de canal o interferència. |
| **Configuració i blindatge del Punt d'Accés** | Configura SSID, banda, canal net, xifratge WPA2/WPA3 i desactiva WPS deixant l'equip completament protegit. | Configura el punt d'accés de forma funcional amb xifratge segur i bona claredat tècnica. | Configura la xarxa Wi-Fi bàsica però omet paràmetres de seguretat com desactivar WPS. | Incapaç d'accedir al panell web d'administració de l'AP o deixa la xarxa sense xifrar. |

