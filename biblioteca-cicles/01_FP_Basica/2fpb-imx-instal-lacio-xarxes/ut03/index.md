---
layout: default
title: "UD3: Fibra Òptica i Comunicacions Sense Fil (Wi-Fi) — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD3"
next_url: "ut0301.md"
next_label: "3.1 ➡️"
---

# UD3: Fibra Òptica i Comunicacions Sense Fil (Wi-Fi)

Transmissió per fibra òptica (monomode vs multimode, connectors SC/LC/ST), seguretat laboral amb fibra, xarxes sense fil Wi-Fi (freqüències de 2.4, 5 i 6 GHz, canals, estàndards), seguretat WPA2/WPA3 i pràctica d'anàlisi d'espectre.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **3.1** | **Fonaments de la fibra òptica: monomode vs multimode** | [**Llegir apartat →**](./ut0301.md) |
| **3.2** | **Seguretat i precaucions laborals amb fibra òptica** | [**Llegir apartat →**](./ut0302.md) |
| **3.3** | **Xarxes sense fil Wi-Fi: freqüències, canals i cobertura** | [**Llegir apartat →**](./ut0303.md) |
| **3.4** | **Seguretat en Wi-Fi: SSID, filtratge MAC, WPA2 i WPA3** | [**Llegir apartat →**](./ut0304.md) |
| **3.5** | **Pràctica: Anàlisi d'espectre Wi-Fi i configuració d'un AP** | [**Llegir apartat →**](./ut0305.md) |

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
2. Introdueix l'usuari i la contrasenya d'administració proporcionats pel docent (`admin`/`admin`).
3. Accedeix a l'apartat **Wireless / Xarxa Sense Fil** i configura:
   - **SSID:** `FPB_TALLER_GRUP_X`
   - **Banda:** 2.4 GHz
   - **Canal:** Selecciona manualment el canal menys saturat segons l'estudi previ (Canal 1, 6 o 11).
   - **Seguretat:** WPA2-PSK (AES).
   - **Contrasenya (Pre-shared Key):** Tria una clau segura (mínim 10 caràcters).
4. Guarda els canvis, reinicia el servei Wi-Fi de l'AP i connecta't amb el teu telèfon mòbil o portàtil verificant que reps connectivitat correcta.

---

