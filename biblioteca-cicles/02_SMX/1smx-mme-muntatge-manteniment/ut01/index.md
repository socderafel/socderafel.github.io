---
layout: default
title: "Muntatge i Manteniment d'Equips — UD1 UT1 - Representació de la informació"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD1"
---

# UT1 - Representació de la Informació en Sistemes Microinformàtics

Benvingut/da a la **Unitat Didàctica 1** del mòdul *Muntatge i Manteniment d'Equips*. En aquesta unitat s'estudien els fonaments de la lògica digital i com els ordinadors processen, quantifiquen i codifiquen les dades mitjançant senyals elèctrics binaris, sistemes de numeració posicional i codificacions internacionals de caràcters.

---

## 🏗️ La Informació en Sistemes Microinformàtics

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Representació de la Informació: Del Bit al Terabyte</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Unitats de dades, correspondència de bases numèriques i la discrepància comercial SI vs IEC</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="infoBitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="infoBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="infoIecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="infoCodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Unitats de Dades -->
    <rect x="20" y="20" width="185" height="210" rx="8" fill="url(#infoBitGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="112" y="45" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">📦 UNITATS ELEMENTALS</text>
    <text x="112" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">De la tensió a la memòria</text>
    <line x1="30" y1="73" x2="195" y2="73" stroke="#334155"/>
    <text x="32" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Bit (b):</tspan> Estat {0, 1}</text>
    <text x="32" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#cbd5e1">Nibble:</tspan> 4 bits = 1 dígit hex</text>
    <text x="32" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">Byte / Octet (B):</tspan> 8 bits</text>
    <text x="42" y="150" fill="#94a3b8" font-size="9">2⁸ = 256 valors possibles</text>
    <text x="32" y="170" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Paraula (Word):</tspan></text>
    <text x="42" y="187" fill="#94a3b8" font-size="9">32 bits (4B) o 64 bits (8B)</text>
    <text x="112" y="218" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="bold">Adreçament de Memòria</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 205 115 L 230 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Bases Numèriques -->
    <rect x="235" y="20" width="195" height="210" rx="8" fill="url(#infoBaseGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="332" y="45" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔢 BASES NUMÈRIQUES</text>
    <text x="332" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">Binari, Decimal, Hexadecimal</text>
    <line x1="245" y1="73" x2="420" y2="73" stroke="#334155"/>
    <text x="248" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">Binari (Base 2):</tspan> {0, 1}</text>
    <text x="248" y="113" fill="#cbd5e1" font-size="9.5">• <tspan fill="#cbd5e1">Decimal (Base 10):</tspan> 0 al 9</text>
    <text x="248" y="133" fill="#cbd5e1" font-size="9.5">• <tspan fill="#c084fc" font-weight="bold">Hexadecimal (Base 16):</tspan></text>
    <text x="258" y="150" fill="#94a3b8" font-size="9">{0..9, A=10, B=11.. F=15}</text>
    <text x="248" y="170" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399">Truc de conversió:</tspan></text>
    <text x="258" y="187" fill="#34d399" font-size="9">1 byte hex: FF₁₆ = 11111111₂ = 255₁₀</text>
    <text x="332" y="218" fill="#c084fc" font-size="9" text-anchor="middle" font-weight="bold">Equivalència de Notacions</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Prefixos SI vs IEC -->
    <rect x="460" y="20" width="195" height="210" rx="8" fill="url(#infoIecGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="557" y="45" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⚖️ PREFIXOS SI vs IEC</text>
    <text x="557" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">La discrepància comercial</text>
    <line x1="470" y1="73" x2="645" y2="73" stroke="#334155"/>
    <text x="472" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#f59e0b" font-weight="bold">Fabricant (SI, Base 10):</tspan></text>
    <text x="482" y="110" fill="#94a3b8" font-size="9">1 TB = 10¹² = 1.000.000.000.000 B</text>
    <text x="472" y="130" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">SO Windows (IEC, Base 2):</tspan></text>
    <text x="482" y="147" fill="#94a3b8" font-size="9">1 TiB = 2⁴⁰ = 1.099.511.627.776 B</text>
    <text x="472" y="170" fill="#ef4444" font-size="9.5" font-weight="bold">⚠️ Resultat real a Windows:</text>
    <text x="482" y="187" fill="#ef4444" font-size="9">1 TB comercial ≈ 931,32 GiB</text>
    <text x="557" y="218" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Càlcul de Capacitat Útil</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 655 115 L 680 115" stroke="#f59e0b" stroke-width="2"/>

    <!-- Bloc 4: Codificació de Dades -->
    <rect x="685" y="20" width="155" height="210" rx="8" fill="url(#infoCodeGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="762" y="45" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">🔤 CODIFICACIÓ</text>
    <text x="762" y="62" fill="#94a3b8" font-size="9.5" text-anchor="middle">ASCII, UTF-8, Unicode</text>
    <line x1="695" y1="73" x2="830" y2="73" stroke="#334155"/>
    <text x="697" y="93" fill="#cbd5e1" font-size="9.5">• <tspan fill="#34d399" font-weight="bold">ASCII:</tspan> 7 bits (128)</text>
    <text x="707" y="110" fill="#94a3b8" font-size="9">'A' = 65₁₀ = 41₁₆</text>
    <text x="697" y="130" fill="#cbd5e1" font-size="9.5">• <tspan fill="#38bdf8" font-weight="bold">UTF-8:</tspan> Dinàmic</text>
    <text x="707" y="147" fill="#94a3b8" font-size="9">1 a 4 bytes per caràcter</text>
    <text x="697" y="170" fill="#cbd5e1" font-size="9.5">• Suport complet:</text>
    <text x="707" y="187" fill="#34d399" font-size="9">ç, ·, accents, emojis</text>
    <text x="762" y="218" fill="#34d399" font-size="9" text-anchor="middle" font-weight="bold">Estàndard Web Global</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Principi Informàtic: <tspan fill="#38bdf8" font-weight="bold">Els ordinadors operen estrictament en potències de base 2 (1024).</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">La diferència entre 1000 i 1024 és la raó per la qual els discs durs mostren una capacitat aparentment inferior a la publicitat.</text>
  </svg>
</div>

---

## 🧮 Taula de Correspondència de Sistemes de Numeració

| Decimal ($b=10$) | Binari ($b=2$) | Hexadecimal ($b=16$) | Octal ($b=8$) | Caràcter ASCII Estàndard |
| :---: | :---: | :---: | :---: | :---: |
| **0** | `0000 0000` | `00` | `00` | `NUL` (Caràcter nul) |
| **1** | `0000 0001` | `01` | `01` | `SOH` |
| **10** | `0000 1010` | `0A` | `12` | `LF` (Salt de línia `\n`) |
| **15** | `0000 1111` | `0F` | `17` | `SI` |
| **16** | `0001 0000` | `10` | `20` | `DLE` |
| **32** | `0010 0000` | `20` | `40` | Espai en blanc `' '` |
| **48** | `0011 0000` | `30` | `60` | Dígit `'0'` |
| **65** | `0100 0001` | `41` | `101` | Lletra `'A'` majúscula |
| **97** | `0110 0001` | `61` | `141` | Lletra `'a'` minúscula |
| **127** | `0111 1111` | `7F` | `177` | `DEL` (Eliminar) |
| **255** | `1111 1111` | `FF` | `377` | Màxim valor en 1 Byte (sense signe) |

---

## 📑 Continguts de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés |
| :---: | :--- | :--- | :---: |
| **1.1** | [**Representació de la Informació**](./ut0101.md) | Bits, Bytes, Sistemes de numeració (Binari, Decimal, Hexadecimal), Conversió entre bases, Prefixos SI vs IEC, Codificació ASCII i UTF-8 | [**Llegir Tema →**](./ut0101.md) |

---

## 🎯 Resultats d'Aprenentatge (RA)
- **RA1:** Reconeix els blocs funcionals d'un equip microinformàtic i els mètodes de representació i codificació de la informació, descrivint les seues característiques i funcions.
- **Criteris d'Avaluació:**
  - S'ha identificat la relació entre els senyals elèctrics binaris i les unitats lògiques de memòria.
  - S'han realitzat conversions exactes entre les bases $2$, $10$ i $16$.
  - S'ha diferenciat el càlcul de capacitat comercial en base decimal del càlcul en potències de base 2 utilitzat pels sistemes operatius.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Conversió de Bases i Càlcul de Capacitat
1. **Conversions de Sistemes Numèrics Pas a Pas:**
   - Realitza manualment les conversions següents mostrant tot el desenvolupament matemàtic:
     - Converteix el número decimal $219_{10}$ a binari mitjançant el mètode de divisions successives entre 2.
     - Converteix el byte binari $11010110_2$ a decimal mitjançant la suma ponderada de potències: $\sum d_i \cdot 2^i$.
     - Converteix el valor binari $1011110010100111_2$ a hexadecimal agrupant en quartets de 4 bits des de la dreta.
     - Converteix l'adreça hexadecimal $3\text{E}7_{16}$ a base decimal.
2. **Càlcul Exacte de la Discrepància Comercial de Discs Durs:**
   - Un client compra un disc dur SSD de botiga que a la caixa indica una capacitat de **$500\text{ GB}$**.
   - Els fabricants utilitzen el Sistema Internacional: $1\text{ GB} = 10^9\text{ Bytes}$. Per tant, el disc té exactament $500.000.000.000\text{ Bytes}$.
   - Tanmateix, Microsoft Windows calcula la capacitat emprant el sistema binari IEC: $1\text{ GiB} = 2^{30}\text{ Bytes} = 1.073.741.824\text{ Bytes}$.
     - Calcula quants GiB útils mostrarà l'Explorador d'Arxius de Windows quan s'instal·le aquest disc.
     - Quants Gigabytes aparents semblen haver-se "perdut" i per què no és cap fallada del maquinari?
3. **Codificació de Caràcters i Mida de Fitxers:**
   - Quants bytes ocuparà exactament un fitxer de text pla codificat en **ASCII estàndard** que conté la frase `"Taller de Microinformatica"` (sense cometes)?
   - Si guardem el mateix text en codificació **UTF-8** i afegim la paraula `"València"`, quants bytes extra s'utilitzen per representar la lletra `'è'`?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes

#### Repte 1: Inspecció d'Adreces MAC Físiques en Hexadecimal
Les targetes de xarxa utilitzen adreces físiques MAC de 48 bits expressades en hexadecimal (12 dígits hex / 6 octets):
1. Obre la consola de PowerShell a Windows:
   ```powershell
   Get-NetAdapter | Select-Object Name, InterfaceDescription, MacAddress, Status
   ```
2. O a Linux:
   ```bash
   ip link show
   ```
3. Identifica una adreça MAC (ex: `A4:BB:6D:32:4F:18`):
   - Separa els 3 primers bytes (`A4:BB:6D`): Aquest bloc s'anomena **OUI** (*Organizationally Unique Identifier*) i identifica el fabricant de la targeta (Intel, Realtek, etc.).
   - Separa els 3 últims bytes (`32:4F:18`): Identifica el número de sèrie assignat a aquesta targeta física pel fabricant.
   - Converteix el primer byte (`A4_{16}`) a binari de 8 bits.

#### Repte 2: Comprovació de Capacitat Reial de Disc amb PowerShell
1. Executa la comanda següent per obtindre la mida exacta en bytes de cada disc físic instal·lat a l'ordinador:
   ```powershell
   Get-Disk | Select-Object Number, FriendlyName, @{Name="Bytes Fabricant (SI)"; Expression={$_.Size}}, @{Name="Capacitat Windows (GiB)"; Expression={[math]::Round($_.Size / 1GB, 2)}}
   ```
2. Comprova la relació matemàtica entre la columna de bytes bruts i la capacitat en GiB que calcula el sistema operatiu.

#### Repte 3: Anàlisi Hexadecimal de Fitxers a Baix Nivell
1. Crea un fitxer de text de prova:
   ```powershell
   Set-Content -Path "test.txt" -Value "SMX2026" -NoNewline
   ```
2. Mostra els continguts binaris en hexadecimal emprant la utilitat integrada:
   ```powershell
   Format-Hex -Path "test.txt"
   ```
3. Comprova que cada lletra es tradueix exactament al seu codi ASCII hexadecimal (ex: `'S'` $\rightarrow$ `53`, `'M'` $\rightarrow$ `4D`, `'X'` $\rightarrow$ `58`).

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Conversió entre Bases Numèriques** | Realitza conversions exactes entre binari, decimal i hexadecimal sense calculadora, explicant el mètode de quartets i potències. | Converteix correctament binari a decimal però dubta en operacions amb hexadecimal o comet fallades de suma. | No comprèn el valor posicional de les xifres en base 2 o confon bits amb bytes. |
| **Càlcul de Capacitats SI vs IEC** | Justifica amb fórmula matemàtica la diferència entre potències de 10 i potències de 2, calculant la mida real de qualsevol disc. | Sap que Windows mostra menys capacitat però no sap calcular matemàticament la ràtio entre GB i GiB. | Afirma que el disc dur està trencat o que el fabricant enganya el client per desconeixement del sistema binari. |
| **Codificació i Inspecció en Consola** | Utilitza eines de consola (`Format-Hex`, `ip link`, `Get-Disk`) per interpretar adreces físiques i caràcters ASCII/UTF-8. | Executa les comandes facilitades però li costa interpretar l'eixida hexadecimal o desglossar l'OUI. | No sap obrir la consola de comandes ni relacionar un codi hexadecimal amb una lletra o dígit. |
