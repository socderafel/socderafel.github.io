---
layout: default
title: "UD9: Projecte Integrador: Muntatge d'una Xarxa per a Petita Oficina — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD9"
next_url: "ut0901.html"
next_label: "9.1 ➡️"
---

# UD9: Projecte Integrador: Muntatge d'una Xarxa per a Petita Oficina

Projecte complet de final de mòdul: anàlisi de necessitats i plànol d'ubicació, pressupost de materials, desplegament de canaleta i rosetes keystone, conectoritzat al rack i switch, configuració d'equips i Wi-Fi, i proves finals de rendiment.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-pln" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mat" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-ins" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-tst" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">PROJECTE INTEGRADOR: INSTAL·LACIÓ I CERTIFICACIÓ DE XARXA D'OFICINA</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Disseny en planta, pressupost, estesa de coure Cat 6, connexió a rack 9U i auditories de rendiment</text>

  <!-- Bloc 1: Disseny i Plànol -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-pln)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">📐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Requisits i Plànol</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Distribució d'Oficina</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 14 preses RJ45 totals</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 4 administració (8 preses)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Direcció (PC + impressora)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• AP Wi-Fi central al sostre</text>
  </g>

  <!-- Bloc 2: Pressupost i Materials -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-mat)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">📋</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Llista de Materials</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Aprovisionament</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Rack mural de 9U (19")</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Bobina Cat 6 LSZH 305m</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Patch panel 24p + Switch</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Marge de seguretat +15%</text>
  </g>

  <!-- Bloc 3: Desplegament Físic -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ins)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🏗️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Muntatge Físic</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Instal·lació Estructurada</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Canaleta PVC a biaix 45°</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Keystones T568B impactats</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Patch panel ordenat 1U</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Injectador PoE per a l'AP</text>
  </g>

  <!-- Bloc 4: Proves i Certificació -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-tst)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">✅</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Certificació Final</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Protocol de Proves</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Tester 1-8 en 14 preses</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Subxarxa 192.168.10.0/24</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Transferència >90 MB/s</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Memòria tècnica de lliurament</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **9.1** | **Anàlisi de requisits i plànol de distribució** | [**Llegir apartat →**](./ut0901.html) |
| **9.2** | **Pressupost i llista de materials** | [**Llegir apartat →**](./ut0902.html) |
| **9.3** | **Desplegament del cablejat físic i canalitzacions** | [**Llegir apartat →**](./ut0903.html) |
| **9.4** | **Connexió al rack, switch i configuració de xarxa** | [**Llegir apartat →**](./ut0904.html) |
| **9.5** | **Verificació, proves de rendiment i memòria final** | [**Llegir apartat →**](./ut0905.html) |

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
Com a documentació de lliurament professional, el dossier tècnic de la instal·lació inclou:
1. **Portada i índex del projecte.**
2. **Plànol a escala de l'oficina** amb el traçat de canaletes i ubicació de preses i rack.
3. **Pressupost econòmic detallat** dels materials emprats i mà d'obra.
4. **Taula de registre del panell de pegat** (on s'indica a quin despatx i taula va cada port de l'1 al 14).
5. **Taula d'adreçament IP** i paràmetres de la xarxa Wi-Fi.
6. **Full de resultats del test de continuïtat** firmat pels tècnics instal·ladors.
7. **Conclusions tècniques** i protocols de manteniment preventiu recomanats.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Càlcul de pressupost econòmic complet amb IVA i mà d'obra tècnica
A partir de la llista de materials de la unitat, l'empresa d'instal·lacions ha de generar la factura proforma per al client *Assessoria Nova SL*:
- **Base imposable de materials:** $B_{\text{mat}} = 595{,}90\text{ €}$
- **Mà d'obra d'instal·lació:**
  - 2 tècnics de grau bàsic de telecomunicacions durant 2 jornades de 6 hores cadascuna ($12\text{ hores}$ per tècnic).
  - Tarifa horària de mà d'obra tècnica: $26{,}00\text{ €/hora}$.
- **Impost sobre el Valor Afegit (IVA):** Tipus general vigent del $21\%$.

1. Calcula l'import total de mà d'obra:
   $$\text{Total Mà d'Obra} = 2 \cdot 12\text{ hores} \cdot 26{,}00\text{ €/hora}$$
2. Calcula la base imposable total del projecte ($\text{Base Total} = B_{\text{mat}} + \text{Total Mà d'Obra}$).
3. Calcula la quota d'IVA del $21\%$ corresponent a la factura:
   $$\text{Quota IVA} = \text{Base Total} \cdot 0{,}21$$
4. Quin és el preu final de l'oferta comercial (IVA inclòs) que haurà d'abonar el client?

#### Exercici 2: Balanç de transferència d'arxius i rendiment d'enllaç Gigabit
En finalitzar la jornada, el servidor de l'oficina ha de realitzar una còpia de seguretat integral d'una base de dades SQL que ocupa una mida de fitxer de $16\text{ GB}$ cap a un dispositiu d'emmagatzematge connectat a la xarxa (NAS):
1. Converteix la grandària del fitxer de $16\text{ GB}$ a Megabytes ($\text{MB}$), sabent que $1\text{ GB} = 1024\text{ MB}$.
2. Si la transferència es realitza a través del cablejat Cat 6 Gigabit amb una taxa sostinguda real de $105\text{ MB/s}$, quant de temps trigarà en segons i en minuts?
   $$T = \frac{\text{Mida (MB)}}{\text{Velocitat (MB/s)}}$$
3. Si un treballador intenta fer la mateixa transferència des d'un ordinador portàtil connectat a la xarxa Wi-Fi a través de dues parets de formigó armat, amb una taxa sostinguda de només $18\text{ MB/s}$, quant de temps trigarà en minuts?
4. Compara ambdós temps i justifica tècnicament per què els equips fixos de treball crítics han d'anar sempre cablejats en coure i mai per Wi-Fi.

#### Exercici 3: Disseny d'esquema d'adreçament IP i paràmetres de xarxa
Per a la subxarxa de l'oficina `192.168.10.0/24`:
1. Completa la taula amb l'assignació tècnica estàndard:
   - Adreça de xarxa:
   - Màscara de subxarxa en format decimal i binari:
   - Adreça IP del Router d'eixida (Gateway):
   - Adreça IP del Punt d'Accés Wi-Fi (AP):
   - Adreça IP de la impressora làser de xarxa:
   - Adreça IP del servidor de seguretat NAS:
   - Rang de reserva d'adreces estàtiques (de la `.1` a la `.30`):
   - Rang del conjunt dinàmic DHCP per als ordinadors d'usuaris (de la `.31` a la `.200`):
   - Adreça de difusió (*Broadcast*):
2. Explica per què la impressora i el NAS han de tindre obligatòriament una adreça IP estàtica fora del rang DHCP i mai una adreça dinàmica.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Muntatge mecànic integral de canaleta perimetral amb unió a 45°
- **Objectiu:** Executar la instal·lació física de canalització simulant el racó d'una oficina comercial.
- **Eines:** Caixa d'ingletes, serra d'arquet per a plàstic, llima fina de fuster, flexòmetre, nivell de bombolla i tornavís.
- **Procediment de taller:**
  1. Mesura dos trams de canaleta de $50\text{ cm}$ cadascun.
  2. Introdueix la tapa i la base de la canaleta en la caixa d'ingletes i fes un tall precís a $45^\circ$ a l'extrem d'unió.
  3. Llima suaument les rebaves de plàstic amb la llima plana per aconseguir una vora llisa.
  4. Munta els dos trams en angle recte de $90^\circ$ sobre el tauler de proves comprovant que la cantonada encaixa a la perfecció sense escletxes.
  5. Caragola les bases i assegura't que les tapes tanquen a pressió sense ensopegar en el vèrtex.

#### Repte 2: Conectorització completa i organització de bastidor Rack
- **Objectiu:** Integrar el panell de pegat, el commutador de 16 ports i l'organització del cablejat frontal i posterior.
- **Materials:** Armari rack de laboratori, panell de pegat Cat 6, switch Gigabit, 6 cables UTP Cat 6, 6 latiguillos de 0,5 m i brides de velcro.
- **Instruccions:**
  1. Fixa el panell de pegat a la unitat $1U$ i el switch a la unitat $2U$ utilitzant femelles gàbia M6 i caragols amb volandera de plàstic.
  2. Introdueix els 6 cables per la part posterior i conectoritza'ls als ports 1 a 6 seguint la norma **T568B**.
  3. Agrupa els cables posteriors amb brides de velcro fixades a la barra de suport de descàrrega de tracció.
  4. Realitza el pegat frontal (*patching*) connectant amb latiguillos curts cada port del panell al seu port de switch corresponent, passant-los per les guies laterals.
  5. Comprova que l'acabat visual és net, ordenat i professional, sense cables tensats ni penjolls solts.

#### Repte 3: Banc de proves de certificació i confecció de la memòria tècnica
- **Objectiu:** Realitzar el protocol oficial de control de qualitat dels 6 enllaços construïts i documentar els resultats.
- **Eines:** Tester de xarxa RJ45, ordinadors de laboratori, comandes de diagnòstic i plantilla de memòria d'instal·lació.
- **Procediment de certificació:**
  1. Comprova amb el tester cadascun dels 6 enllaços entre roseta i patch panel. Registra a la taula: `Port 1: PASS`, `Port 2: PASS`... etc.
  2. Connecta dos equips d'aula a les preses 1 i 2.
  3. Comprova la recepció d'IP automàtica per DHCP.
  4. Envia 50 paquets `ping` entre ells verificant $0\%$ de pèrdua de paquets i temps inferior a $1\text{ ms}$.
  5. Copia un arxiu compartit gran i mesura amb l'Administrador de tasques (pestanya *Rendiment > Ethernet*) la velocitat sostinguda en Mbps.
  6. Emplena el document de memòria tècnica final adjuntant el plànol, pressupost i full de certificació firmat.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He calculat el pressupost complet desglossant materials, mà d'obra i la quota d'IVA del 21%.
- [ ] He calculat els temps de transmissió demostrant la superioritat del cablejat Gigabit enfront del Wi-Fi.
- [ ] He dissenyat el pla d'adreçament IP separant equips estàtics de la reserva DHCP.
- [ ] He executat talls a biaix a 45° en les canaletes amb acabat net sense rebaves.
- [ ] He organitzat el cablejat de l'armari rack utilitzant guies i brides de velcro segons l'estàndard professional.
- [ ] He verificat i certificat el 100% dels ports instal·lats registrant els resultats a la memòria tècnica.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Planificació, plànol i pressupost econòmic** | Dissenya el plànol a escala, dimensiona materials amb marge de reserva i calcula costos, mà d'obra i IVA amb exactitud. | Elabora el pressupost i plànol correctament amb xicotets desajustaments en càlculs d'hores. | Fa un llistat de materials bàsic però omet la mà d'obra o calcula malament l'IVA. | Incapaç de fer una llista de materials o calcular el pressupost d'una instal·lació. |
| **Càlcul de rendiment i pla d'adreçament** | Calcula temps de còpia amb rigor matemàtic i dissenya un pla d'adreçament IP òptim diferenciant DHCP d'estàtica. | Dissenya la taula d'IPs correctament i calcula els temps bàsics de transmissió. | Assigna les IPs bàsiques amb dubtes en el rang d'exclusió DHCP. | Confon adreces de xarxa i no sap planificar l'adreçament d'una empresa. |
| **Destresa en canalitzacions i rosetes** | Realitza talls a 45° perfectes, canaleta impecablement anivellada i conectoritzat keystone T568B sòlid i net. | Munta la canaleta i rosetes de forma funcional amb bon ajustament visual de cantonades. | La canaleta queda fixada però amb petits desajustaments als biaixos o ranures visibles. | Canaleta trencada, cantonades desencaixades o rosetes soltes. |
| **Muntatge i organització de l'armari Rack** | Fixa patch panel i switch sòlidament, pentina el cablejat amb velcro i manté un ordre estètic i tècnic excel·lent. | Organitza el rack correctament utilitzant guies i latiguillos curts ordenats. | Munta els equips al rack però deixa cables creuats o fluixos sense bridar. | Desordre total de cables al rack o equips mal caragolats amb perill de caiguda. |
| **Certificació i memòria tècnica final** | Realitza totes les proves de continuïtat, ping i amplada de banda, i redacta un dossier tècnic complet i professional. | Certifica els ports i lliura la memòria tècnica amb tots els apartats requerits. | Lliura la memòria amb taules incompletes o sense certificar tots els ports instal·lats. | No lliura la documentació tècnica o la instal·lació no supera les proves de continuïtat. |

