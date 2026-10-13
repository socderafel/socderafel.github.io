---
layout: default
title: "Muntatge i Manteniment d'Equips — UD2 Fonaments de l'Electricitat i Fonts d'Alimentació"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD2"
---

# UT2 - Fonaments de l'Electricitat i Fonts d'Alimentació (PSU)

En aquesta unitat d'aprenentatge s'analitzen els principis de l'electricitat aplicats als sistemes microinformàtics: la Llei d'Ohm, la conversió de corrent altern en continu mitjançant fonts commutades (SMPS), el codi de colors i connectors ATX/EPS/PCIe, les certificacions d'eficiència energètica 80 PLUS i els protocols de mesura amb multímetre en el taller de manteniment.

---

## ⚡ Arquitectura Elèctrica de la Font Commutada (PSU)

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">La Font d'Alimentació Commutada (PSU) i Connectors ATX</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Etapes de conversió AC/DC, codi de colors del cablejat i senyals de control elèctric</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="psuAcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#991b1b" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="psuDcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="psuCtrlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="psuEffGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Entrada AC i Conversió -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#psuAcGrad)" stroke="#f87171" stroke-width="1.5"/>
    <text x="115" y="45" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">🔌 ENTRADA AC (XARXA)</text>
    <text x="115" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">230V AC ~ 50Hz</text>
    <line x1="30" y1="73" x2="200" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f87171" font-weight="bold">Filtre EMI:</tspan> Elimina paràsits</text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#cbd5e1">Pont rectificador:</tspan> AC a DC</text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Inversor MOSFET:</tspan></text>
    <text x="42" y="150" fill="#94a3b8" font-size="9">Commuta a 100 kHz</text>
    <text x="32" y="170" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399">Transformador ferreta:</tspan></text>
    <text x="42" y="187" fill="#94a3b8" font-size="9">Baixa tensió compacta</text>
    <text x="115" y="218" fill="#f87171" font-size="9" text-anchor="middle" font-weight="bold">Tecnologia SMPS</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#f87171" stroke-width="2"/>

    <!-- Bloc 2: Sortides DC i Colors -->
    <rect x="240" y="20" width="200" height="210" rx="8" fill="url(#psuDcGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="340" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⚡ RAILS DE SORTIDA DC</text>
    <text x="340" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Codi de Colors Estàndard</text>
    <line x1="250" y1="73" x2="430" y2="73" stroke="#334155"/>
    <text x="252" y="93" fill="#fde047" font-size="9.5">🟨 +12V (Groc): <tspan fill="#cbd5e1">CPU, GPU, motors</tspan></text>
    <text x="252" y="113" fill="#f87171" font-size="9.5">🟥 +5V (Roig): <tspan fill="#cbd5e1">Lògica, discs, USB</tspan></text>
    <text x="252" y="133" fill="#fb923c" font-size="9.5">🟧 +3,3V (Taronja): <tspan fill="#cbd5e1">RAM, ranures PCIe</tspan></text>
    <text x="252" y="153" fill="#94a3b8" font-size="9.5">⬛ COM / GND (Negre): <tspan fill="#cbd5e1">Terra (0V)</tspan></text>
    <text x="252" y="173" fill="#60a5fa" font-size="9.5">🟦 -12V (Blau): <tspan fill="#cbd5e1">Ports sèrie antics</tspan></text>
    <text x="252" y="193" fill="#c084fc" font-size="9.5">🟪 +5VSB (Morat): <tspan fill="#cbd5e1">Standby permanent</tspan></text>
    <text x="340" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Tensions Continues Filtrades</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 440 115 L 465 115" stroke="#f59e0b" stroke-width="2"/>

    <!-- Bloc 3: Senyals de Control i Prova -->
    <rect x="470" y="20" width="185" height="210" rx="8" fill="url(#psuCtrlGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="562" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🕹️ SENYALS DE CONTROL</text>
    <text x="562" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Arrencada i Seguretat</text>
    <line x1="480" y1="73" x2="645" y2="73" stroke="#334155"/>
    <text x="482" y="93" fill="#34d399" font-size="9.5">• 🟩 <tspan font-weight="bold">PS_ON# (Verd, Pin 16):</tspan></text>
    <text x="495" y="110" fill="#cbd5e1" font-size="9">Unir a terra (GND) per encendre</text>
    <text x="482" y="130" fill="#94a3b8" font-size="9.5">• ⬜ <tspan fill="#cbd5e1" font-weight="bold">PWR_OK (Gris, Pin 8):</tspan></text>
    <text x="495" y="147" fill="#cbd5e1" font-size="9">+5V quan tensions són estables</text>
    <text x="482" y="170" fill="#f59e0b" font-size="9.5">📎 <tspan font-weight="bold">Paperclip Test:</tspan></text>
    <text x="495" y="187" fill="#cbd5e1" font-size="9">Pont verd + negre per provar</text>
    <text x="562" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Protocol ATX 24 Pins</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 655 115 L 680 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Eficiència 80 PLUS -->
    <rect x="685" y="20" width="155" height="210" rx="8" fill="url(#psuEffGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="762" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🏅 EFICIÈNCIA 80+</text>
    <text x="762" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Estalvi Energètic</text>
    <line x1="695" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="697" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#cbd5e1">Standard:</tspan> ≥ 80%</text>
    <text x="697" y="113" fill="#cd7f32" font-size="9.5">• <tspan font-weight="bold">Bronze:</tspan> ≥ 85%</text>
    <text x="697" y="133" fill="#cbd5e1" font-size="9.5">• <tspan font-weight="bold">Silver:</tspan> ≥ 88%</text>
    <text x="697" y="153" fill="#ffd700" font-size="9.5">• <tspan font-weight="bold">Gold:</tspan> ≥ 90%</text>
    <text x="697" y="173" fill="#e5e4e2" font-size="9.5">• <tspan font-weight="bold">Platinum:</tspan> ≥ 92%</text>
    <text x="697" y="193" fill="#38bdf8" font-size="9.5">• <tspan font-weight="bold">Titanium:</tspan> ≥ 94%</text>
    <text x="762" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Pèrdua de Calor Mínima</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Tolerància ATX Estàndard: <tspan fill="#f59e0b" font-weight="bold">Les tensions principals (+12V, +5V, +3,3V) han d'estar sempre dins del ±5%.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Si el rail de +12V baixa de 11,40V o puja de 12,60V sota càrrega, la font d'alimentació és defectuosa i provocarà bloquejos del sistema.</text>
  </svg>
</div>

---

## 🔌 Taula de Tensions i Toleràncies Elèctriques ATX

| Rail de Sortida | Color del Cable | Tensió Nominal | Tolerància Permesa ($\pm 5\%$) | Tensió Mínima Acceptable | Tensió Màxima Acceptable | Components que Alimenta |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **$+12\text{ V}$** | 🟨 Groc | $+12{,}00\text{ V}$ | $\pm 5\%$ | **$+11{,}40\text{ V}$** | **$+12{,}60\text{ V}$** | Processador (VRM EPS 8-pin), Targeta Gràfica (PCIe), Motors de discs HDD i ventiladors |
| **$+5\text{ V}$** | 🟥 Roig | $+5{,}00\text{ V}$ | $\pm 5\%$ | **$+4{,}75\text{ V}$** | **$+5{,}25\text{ V}$** | Circuits lògics de discs SSD/HDD, controladors de placa i alimentació de ports USB |
| **$+3{,}3\text{ V}$** | 🟧 Taronja | $+3{,}30\text{ V}$ | $\pm 5\%$ | **$+3{,}13\text{ V}$** | **$+3{,}47\text{ V}$** | Mòduls de memòria RAM, ranures PCI Express, xips de xarxa i àudio integrats |
| **$+5\text{VSB}$** | 🟪 Morat | $+5{,}00\text{ V}$ (*Standby*) | $\pm 5\%$ | **$+4{,}75\text{ V}$** | **$+5{,}25\text{ V}$** | Alimentació permanent mentre la font està endollada (permet arrencada i Wake-on-LAN) |
| **$-12\text{ V}$** | 🟦 Blau | $-12{,}00\text{ V}$ | $\pm 10\%$ | **$-10{,}80\text{ V}$** | **$-13{,}20\text{ V}$** | Ports sèrie RS-232 i circuits d'àudio analògics antics |
| **`COM` / `GND`** | ⬛ Negre | $0{,}00\text{ V}$ | Referència | **$0{,}00\text{ V}$** | **$0{,}00\text{ V}$** | Retorn de massa comú per a tots els circuits |

---

## 📑 Continguts i Pràctiques de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **2.1** | **Resultats d'Aprenentatge (RA)** | Objectius pedagògics, criteris d'avaluació RA3 i RA8, prevenció de riscos laborals | [**📘 Llegir Apartat →**](./ut0201.md) |
| **2.2** | [**Fonaments de l'Electricitat**](./ut0202.md) | Tensió ($V$), Intensitat ($I$), Resistència ($R$), Potència ($P$), Llei d'Ohm, Efecte Joule, Corrent AC vs DC | [**⚡ Estudiar Teoria →**](./ut0202.md) |
| **2.4** | [**La Font d'Alimentació (PSU) i Connectors**](./ut0204.md) | Diagrama de connectors ATX (EPS, PCIe, SATA, Molex), codi de colors, eficiència 80 PLUS, fonts modulars | [**🔌 Veure Connectors →**](./ut0204.md) |
| **2.10** | [**Pràctica: Mesura de Tensions de la Font**](./ut0210.md) | Prova del pont (*paperclip test*), mesurament amb polímetre digital, toleràncies ATX ($\pm 5\%$) i diagnosi | [**🛠️ Procediment de Taller →**](./ut0210.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA3:** Mesura paràmetres elèctrics, identificant el tipus de senyal i relacionant-la amb les seues unitats característiques.
- **RA8:** Complix les normes de prevenció de riscos laborals i de protecció ambiental, identificant els riscos associats, les mesures i equips per a previndre'ls.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments Elèctrics, Llei d'Ohm i Eficiència 80 PLUS
1. **Càlcul de Potència i Corrent amb la Llei d'Ohm ($P = V \cdot I$):**
   - Una targeta gràfica d'alt rendiment per a gaming té un consum màxim de potència de **$285\text{ W}$** alimentada exclusivament des del rail de $+12\text{ V DC}$.
     - Quants Amperes ($I$) de corrent elèctric hauran de transportar els cables grocs del connector PCIe?
     - Si cada cable de coure estàndard de calibre 18 AWG suporta de manera segura fins a $7\text{ A}$, quants cables de $+12\text{ V}$ són necessaris com a mínim per a evitar que el cablejat s'escalfe i es fonga?
2. **Pèrdua Tèrmica i Eficiència Energètica 80 PLUS:**
   - Un ordinador de disseny gràfic requereix $400\text{ W}$ de potència elèctrica contínua DC per alimentar els seus components interns.
     - Si s'instal·la una font genèrica sense certificació amb una eficiència del **$72\%$**, quanta potència ($P_{\text{entrada}}$) consumirà de l'endoll de la paret? Quants watts es perden en forma de calor pur a la sala?
     - Si es substitueix per una font amb certificació **80 PLUS Gold** ($90\%$ d'eficiència), quanta potència extraurà de la paret? Quina quantitat de calor residual s'estalvia el sistema de refrigeració?
3. **Diagnòstic de Toleràncies Elèctriques en Taller:**
   - Durant el diagnòstic d'un ordinador que es reinicia de sobte quan executa aplicacions pesades, el tècnic mesura amb un multímetre els següents valors sota càrrega:
     - Rail $+12\text{ V}$: mesura **$11{,}22\text{ V}$**
     - Rail $+5\text{ V}$: mesura **$4{,}95\text{ V}$**
     - Rail $+3{,}3\text{ V}$: mesura **$3{,}31\text{ V}$**
   - Determina quin dels tres valors està fora de la tolerància estàndard ATX ($\pm 5\%$) i argumenta quina és la causa exacta dels reinicis de l'equip.

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Prova d'Arrencada Autònoma de la Font (*Paperclip Test*)
Abans de connectar una font d'alimentació a una placa base cara, cal verificar que arrenca de forma aïllada:
1. Desconnecta la font d'alimentació del corrent elèctric i de tots els components de l'ordinador.
2. Localitza el connector ATX principal de 24 pins:
   - Identifica el **Pin 16 (Cable verd `PS_ON#`)**.
   - Identifica qualsevol dels pins de terra adjacents, com el **Pin 15 o Pin 17 (Cable negre `COM`)**.
3. Amb l'ajuda d'un clip metàl·lic o un pont de prova aïllat, connecta el pin verd amb el pin negre.
4. Endolla el cable de corrent a la paret i activa l'interruptor I/O de la font:
   - Comprova si el ventilador de la font comença a girar.
   - Si no gira ni fa cap so, comprova si la font disposa de tecnologia *Zero RPM* (mode silenciós que només engega el ventilador amb càrrega tèrmica).

#### Repte 2: Mesurament de Voltatges amb Multímetre Digital
1. Amb la font arrencada mitjançant el pont de prova, prepara el multímetre digital:
   - Connecta la sonda negra al port `COM` del multímetre.
   - Connecta la sonda vermella al port `V/Ω/mA`.
   - Gira el selector a la posició de **Voltatge Continu (DCV o $\text{V}\overline{--}$) en escala de $20\text{ V}$**.
2. Introdueix la punta negra de prova en qualsevol clema amb cable negre (`GND`) del connector Molex o ATX.
3. Mesura successivament introduint la punta vermella als següents pins i anota el valor exacte:
   - Cable groc (nominal $+12\text{ V}$): Valor mesurat $\rightarrow$ `___ V`
   - Cable roig (nominal $+5\text{ V}$): Valor mesurat $\rightarrow$ `___ V`
   - Cable taronja (nominal $+3{,}3\text{ V}$): Valor mesurat $\rightarrow$ `___ V`
   - Cable morat (nominal $+5\text{VSB}$): Valor mesurat $\rightarrow$ `___ V`
   - Cable gris (nominal $+5\text{ V PWR_OK}$): Valor mesurat $\rightarrow$ `___ V`
4. Comprova que cap valor no s'allunye més del $\pm 5\%$ del seu valor de referència.

#### Repte 3: Auditoria d'Estats d'Energia ACPI amb la Consola de Windows
1. Obre el terminal de comandes (CMD o PowerShell) com a administrador:
   ```cmd
   powercfg /a
   ```
2. Revisa quins estats d'estalvi d'energia estan admesos per la placa base i la font:
   - **S0:** Equip actiu i treballant.
   - **S3:** Suspensió clàssica a memòria RAM (*Sleep*).
   - **S4:** Hibernació a disc dur (*Hibernate*).
3. Genera un informe detallat de consum i eficiència energètica de l'equip:
   ```cmd
   powercfg /energy /output "C:\informe_energia.html"
   ```

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Mesura de Paràmetres amb Multímetre** | Configura el multímetre en l'escala adequada, mesura cadascun dels rails amb precisió i calcula el percentatge de desviació. | Mesura els voltatges amb èxit però dubta en la posició de les sondes o necessita ajuda per seleccionar l'escala. | Selecciona corrent altern en compte de continu o connecta les puntes provocant un curtcircuit. |
| **Codi de Colors i Connectors ATX** | Identifica a simple vista la funció de cada connector (EPS vs PCIe) i el rail de cada color, alertant de riscos de polaritat. | Coneix els connectors principals però dubta entre el connector EPS de CPU i el PCIe de GPU de 8 pins. | Desconeix el codi de colors i connecta cables forçant la forma geomètrica sense verificar la tensió. |
| **Càlcul d'Eficiència 80 PLUS i Llei d'Ohm** | Resol exercicis de càlcul de potència, consum i pèrdua tèrmica per Joule justificant l'estalvi d'una font 80 PLUS. | Aplica la fórmula bàsica $P = V \cdot I$ però té dificultats per calcular l'eficiència percentual o la calor dissipada. | No sap calcular la potència d'un rail o afirma que una font de $650\text{ W}$ consumeix sempre $650\text{ W}$ de la paret. |
