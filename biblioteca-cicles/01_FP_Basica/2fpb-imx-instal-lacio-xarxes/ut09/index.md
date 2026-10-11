---
layout: default
title: "UD9: Projecte Integrador: Muntatge d'una Xarxa per a Petita Oficina — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD9"
next_url: "ut0901.md"
next_label: "9.1 ➡️"
---

# UD9: Projecte Integrador: Muntatge d'una Xarxa per a Petita Oficina

Projecte complet de final de mòdul: anàlisi de necessitats i plànol d'ubicació, pressupost de materials, desplegament de canaleta i rosetes keystone, conectoritzat al rack i switch, configuració d'equips i Wi-Fi, i proves finals de rendiment.

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **9.1** | **Anàlisi de requisits i plànol de distribució** | [**Llegir apartat →**](./ut0901.md) |
| **9.2** | **Pressupost i llista de materials** | [**Llegir apartat →**](./ut0902.md) |
| **9.3** | **Desplegament del cablejat físic i canalitzacions** | [**Llegir apartat →**](./ut0903.md) |
| **9.4** | **Connexió al rack, switch i configuració de xarxa** | [**Llegir apartat →**](./ut0904.md) |
| **9.5** | **Verificació, proves de rendiment i memòria final** | [**Llegir apartat →**](./ut0905.md) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 9.1 Anàlisi de requisits i plànol de distribució

El **Projecte Integrador de 2n FPB** consisteix a dissenyar, pressupostar, instal·lar físicament, configurar i verificar la xarxa d'àrea local completa per a una petita empresa d'assessoria laboral i comptable (*Assessoria Nova SL*).

### Descripció de l'escenari
L'empresa disposa d'un local comercial amb la següent distribució:
- **Zona d'atenció al públic / Administració:** 4 llocs de treball per a administratius.
- **Despatx de Direcció:** 1 lloc de treball amb ordinador i impressora de xarxa compartida d'alta velocitat.
- **Sala de reunions:** 1 presa de xarxa per a portàtils i cobertura Wi-Fi d'alta velocitat per a clients i visites.
- **Zona de magatzem / rack:** Racó protegit on s'ubicarà l'armari de telecomunicacions (Rack de paret de 9U) amb la connexió d'entrada de fibra òptica de la companyia.

---

### Càlcul de punts de xarxa necessaris
Cada lloc de treball d'oficina requereix recomanablement **dues preses RJ45** (una per a l'ordinador de taula i una altra per a veu sobre IP o equip auxiliar):
- 4 llocs d'administració $\\times 2$ preses = **8 preses RJ45**.
- Despatx de direcció: 2 preses per a PC + 1 presa per a impressora = **3 preses RJ45**.
- Sala de reunions: 2 preses de taula + 1 presa al sostre per al punt d'accés Wi-Fi (AP) = **3 preses RJ45**.
- **Total de punts de connexió requerits:** **14 preses RJ45 femella**.

---

### Elaboració del plànol de distribució
En el plànol en planta de l'oficina es representen:
1. La ubicació exacta de l'armari **Rack de 9U**.
2. El traçat de les **canaletes perimetrals** de PVC per les parets.
3. La posició de cadascuna de les **rosetes dobles de paret**.
4. La ubicació del **Punt d'Accés Wi-Fi** al sostre de la zona central per garantir màxima cobertura a tota l'oficina.

---

## 9.2 Pressupost i llista de materials

Abans de començar qualsevol instal·lació real en taller o empresa, el tècnic ha d'elaborar una llista detallada de materials i fer un **pressupost estimat de costos**.

### Llista detallada de materials per al projecte

| Concepte / Material | Descripció Tècnica | Quantitat | Preu Unitari Estimat | Preu Total Estimat |
| :--- | :--- | :---: | :---: | :---: |
| **Armari Rack 19" 9U** | Armari mural metàl·lic de paret amb porta de vidre | 1 unitat | 110,00 € | 110,00 € |
| **Patch Panel 24 ports** | Panell de pegat Cat 6 1U per a rack de 19" | 1 unitat | 35,00 € | 35,00 € |
| **Switch 16 ports Gigabit** | Switch no gestionable 10/100/1000 Mbps metàl·lic enracable | 1 unitat | 65,00 € | 65,00 € |
| **Punt d'Accés Wi-Fi** | AP Wi-Fi 6 de sostre amb suport PoE | 1 unitat | 85,00 € | 85,00 € |
| **Injectador PoE** | Injectador elèctric PoE gigabit per a l'AP | 1 unitat | 18,00 € | 18,00 € |
| **Bobina de cable UTP** | Cable rígid UTP Cat 6 LSZH lliure d'halògens (305 m) | 1 bobina | 95,00 € | 95,00 € |
| **Canaleta de superfície** | Canaleta de PVC 40x20 mm amb tapa (trams de 2 m) | 15 trams | 4,50 € | 67,50 € |
| **Rosetes de paret dobles** | Caixes de superfície amb 2 forats keystone | 7 unitats | 3,20 € | 22,40 € |
| **Connectors Keystone** | Mòdul RJ45 femella Cat 6 tipus keystone | 16 unitats | 2,10 € | 33,60 € |
| **Latiguillos de pegat** | Patch cords Cat 6 flexibles de 0,5 m per a rack | 14 unitats | 1,80 € | 25,20 € |
| **Latiguillos d'usuari** | Patch cords Cat 6 flexibles de 2 m per a taules | 8 unitats | 2,40 € | 19,20 € |
| **Material divers** | Tacs, caragols, brides de velcro, etiquetes adhesives | 1 lot | 20,00 € | 20,00 € |
| **TOTAL MATERIAL (IVA exclòs)** | | | | **595,90 €** |

> [!TIP]
> En qualsevol pressupost professional es recomana comptar sempre un **10-15% addicional de cable i connectors sobrants** per cobrir possibles corbes, desviaments imprevistos o fallades durant el conectoritzat.

---

## 9.3 Desplegament del cablejat físic i canalitzacions

En aquesta fase es porta a terme la instal·lació física dels elements estructurals sobre el tauler o maqueta de taller.

### Fases d'execució del muntatge físic

#### 1. Fixació de l'armari Rack
- Es penja l'armari rack de 9U a la paret a una alçada còmoda per al treball (la base a uns 1,40 metres del terra).
- Es verifica amb el nivell de bombolla que està perfectament anivellat abans d'apertar els caragols d'ancoratge.

#### 2. Instal·lació de les canaletes perimetrals
- Es tracen les línies mestres a la paret amb llapis i regle.
- Es caragolen els trams de canaleta seguint el recorregut previst.
- Als cantons i cantonades es tallen els extrems a biaix (a 45 graus) amb la serra d'arquet perquè les unions queden perfectament encaixades i sense buits.

#### 3. Tirada dels cables de xarxa
- Des de la bobina de cable UTP Cat 6, es van passant els cables per l'interior de la canaleta, des de la posició de cada roseta fins a l'interior de l'armari rack.
- **Molt important:** A mesura que es tira cada cable, s'etiqueten tots dos extrems amb cinta de carrosser o retolador permanent indicant el número de presa (Exemple: `T01`, `T02`... fins a `T14`).

#### 4. Conectoritzat de les rosetes d'usuari
- A cadascun dels llocs de treball, es pela la coberta del cable i es conectoritzen els mòduls keystone seguint la norma **T568B** amb l'eina d'impacte.
- S'encaixen els keystones a la roseta i es caragola la caixa a la paret.
- Es tanca la tapa de tota la canaleta perimetral.

---

## 9.4 Connexió al rack, switch i configuració de xarxa

Amb tot el cablejat horitzontal estès i les rosetes muntades, passem a la conectorització dins de l'armari de telecomunicacions i a la configuració lògica de la xarxa.

### Procediment al Rack

#### 1. Conectoritzat del Patch Panel
1. S'introdueixen els 14 cables de xarxa per la part posterior del rack.
2. Es conectoritza cadascun dels cables als ports de l'1 al 14 de la part posterior del panell de pegat seguint estrictament la norma **T568B**.
3. Es fixen tots els cables a la barra posterior amb brides per evitar que el seu propi pes els desconnecte.
4. Es caragola el patch panel al perfil frontal del rack (a la posició 1U).

#### 2. Muntatge del Switch i enllaç de pegat (*Patching*)
1. Es caragola el switch de 16 ports a la posició 2U del rack, just a sota del panell de pegat.
2. Amb latiguillos curts de 0,5 metres, s'uneix cada port del patch panel amb el port equivalent del switch:
   - Port 1 del Patch Panel $\rightarrow$ Port 1 del Switch
   - Port 2 del Patch Panel $\rightarrow$ Port 2 del Switch... etc.

#### 3. Connexió del Router i l'AP Wi-Fi
- S'endolla el router de fibra a la regleta del rack i es connecta un dels seus ports LAN al port 16 del switch.
- Es connecta l'injectador PoE i el cable que puja cap al punt d'accés Wi-Fi del sostre.

---

### Pla d'Adreçament de l'Oficina (Subxarxa `192.168.10.0/24`)

| Dispositiu | Adreça IP | Màscara | Porta d'Enllaç | Mètode d'Assignació |
| :--- | :--- | :--- | :--- | :--- |
| **Router d'eixida** | `192.168.10.1` | `255.255.255.0` | IP Pública ISP | Estàtica |
| **Punt d'Accés Wi-Fi** | `192.168.10.2` | `255.255.255.0` | `192.168.10.1` | Estàtica |
| **Impressora de xarxa** | `192.168.10.10` | `255.255.255.0` | `192.168.10.1` | Estàtica |
| **Reserva per a servidors** | `192.168.10.11` a `.19` | `255.255.255.0` | `192.168.10.1` | Estàtica |
| **Rang DHCP per a PCs i Wi-Fi** | `192.168.10.50` a `.200` | `255.255.255.0` | `192.168.10.1` | Dinàmica (DHCP) |

---

## 9.5 Verificació, proves de rendiment i memòria final

L'última fase abans de donar per finalitzada la instal·lació i lliurar-la al client és la **certificació de continuïtat**, les **proves de càrrega i velocitat** i la redacció de la **memòria tècnica final**.

### Protocol de proves de verificació

#### 1. Prova de continuïtat presa a presa
- Amb el tester de cables RJ45, el tècnic connecta la unitat Master al port del patch panel i un company connecta la unitat Remote a la roseta de l'altre extrem.
- Es verifica que cadascun dels 14 enllaços encén els 8 LEDs en seqüència correcta de l'1 al 8.
- Qualsevol enllaç amb fallada de circuit obert o parell creuat es repara a l'instant abans de continuar.

#### 2. Prova de connectivitat lògica (Ping i trànsit)
- Es connecten els ordinadors a les preses de paret.
- Es comprova que cadascun rep IP automàtica del rang `192.168.10.X` per DHCP.
- S'executa `ping 192.168.10.1` i `ping 8.8.8.8` verificant que el temps de resposta és inferior a 2 mil·lisegons en la LAN i que no hi ha cap paquet perdut ($0\\%$ de pèrdues).

#### 3. Test de velocitat d'ample de banda (*Speedtest*)
- Es fa un test de velocitat d'accés a Internet comprovant que s'assoleixen els megabits contractats amb l'operador.
- Es transfereix un fitxer gran de 2 GB entre dos ordinadors a través de la carpeta compartida verificant que la velocitat de transferència sobre el switch Gigabit supera els 90-100 MB/s reals.

---

### Estructura de la Memòria Tècnica Final
Com a projecte de final de curs, cada grup d'alumnes lliura un dossier tècnic que inclou:
1. **Portada i índex del projecte.**
2. **Plànol a escala de l'oficina** amb el traçat de canaletes i ubicació de preses i rack.
3. **Pressupost econòmic detallat** dels materials emprats.
4. **Taula de registre del panell de pegat** (on s'indica a quin despatx i taula va cada port de l'1 al 14).
5. **Taula d'adreçament IP** i paràmetres de la xarxa Wi-Fi.
6. **Full de resultats del test de continuïtat** firmat pels tècnics instal·ladors.
7. **Conclusions personals** i dificultats superades durant el muntatge pràctic.

---

