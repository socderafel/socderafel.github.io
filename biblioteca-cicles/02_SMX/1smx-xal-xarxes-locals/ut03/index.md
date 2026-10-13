---
layout: default
title: "UD3 — Interconnexió de la Xarxa, Adreçament IPv4 i Subnetting"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD3"
---

# 📘 UD3 — Interconnexió de la Xarxa, Adreçament IPv4 i Subnetting

La **Unitat Didàctica 3** constitueix el bloc matemàtic i d'enginyeria de xarxes angular del mòdul. S'hi aprofundeix en l'adreçament lògic IPv4, les màscares de subxarxa de longitud fixa (FLSM), el càlcul d'adreces de xarxa i difusió (*broadcast*) mitjançant l'operació lògica AND, els rangs privats RFC 1918 i la tècnica de **subnetting** per optimitzar i segmentar espais d'adreces corporatius.

---

## 🔢 Adreçament IPv4, Notació CIDR i Fórmules de Subnetting

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Estructura de 32 Bits, Rangs RFC 1918, Operació AND i Divisió en Subxarxes</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Lògica binària, càlcul de xarxa / broadcast i fórmules de dimensionament de hosts útils</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="xalU3OctetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU3RfcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU3SubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="xalU3AndGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Estructura 32 bits -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#xalU3OctetGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🧩 ESTRUCTURA IPv4</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">32 Bits en 4 Octets (Bytes)</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• Format: 4 nombres (0 a 255)</text>
    <text x="32" y="98" fill="#38bdf8" font-size="8.5" font-weight="bold">• 192 . 168 . 10 . 150 /24</text>
    <rect x="28" y="108" width="174" height="26" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1"/>
    <text x="115" y="121" fill="#cbd5e1" font-size="7.5" text-anchor="middle">11000000.10101000.00001010.10010110</text>
    <text x="32" y="150" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Network ID:</tspan> Bits de xarxa</text>
    <text x="32" y="168" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Host ID:</tspan> Bits d'equip</text>
    <text x="32" y="186" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">CIDR (/n):</tspan> Longitud màscara</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Adreçament Global Únic</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Rangs Privats RFC 1918 -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#xalU3RfcGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔒 RANGS RFC 1918</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">IPs Privades No Encaminables</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Classe A:</tspan> `10.0.0.0/8`</text>
    <text x="262" y="93" fill="#94a3b8" font-size="8">16,7 milions d'equips</text>
    <text x="252" y="112" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Classe B:</tspan> `172.16.0.0/12`</text>
    <text x="262" y="125" fill="#94a3b8" font-size="8">172.16.0.0 fins 172.31.255.255</text>
    <text x="252" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Classe C:</tspan> `192.168.0.0/16`</text>
    <text x="262" y="157" fill="#94a3b8" font-size="8">Blocs /24 estàndard per a llars</text>
    <text x="252" y="176" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Loopback:</tspan> 127.0.0.1</text>
    <text x="252" y="194" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f87171" font-weight="bold">APIPA:</tspan> 169.254.0.0/16</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Reutilització via NAT</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Fórmules Subnetting -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#xalU3SubGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">📐 FÓRMULES CLAU</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Robar $s$ Bits de Host</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Subxarxes Creades:</tspan></text>
    <text x="485" y="95" fill="#38bdf8" font-size="10" font-weight="bold">S = 2^s &ge; N</text>
    <text x="472" y="115" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">Hosts Útils per Subxarxa:</tspan></text>
    <text x="485" y="130" fill="#f59e0b" font-size="10" font-weight="bold">H = 2^h - 2</text>
    <text x="472" y="148" fill="#94a3b8" font-size="8">(-2 per Xarxa i Broadcast)</text>
    <text x="472" y="168" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">Salt de Xarxa (Delta):</tspan></text>
    <text x="485" y="183" fill="#cbd5e1" font-size="9" font-weight="bold">Δ = 256 - Octet_Màscara</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Segmentació Eficient</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Operació Lògica AND -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#xalU3AndGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⚙️ OPERACIÓ AND</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Càlcul Lògic de Xarxa</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• Taula de veritat AND:</text>
    <text x="702" y="93" fill="#94a3b8" font-size="8">1 AND 1 = 1 (Resta = 0)</text>
    <text x="692" y="112" fill="#38bdf8" font-size="8.5" font-weight="bold">• IP AND Màscara =</text>
    <text x="702" y="125" fill="#34d399" font-size="8.5" font-weight="bold">Adreça de Xarxa (Net ID)</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">1a IP útil:</tspan> Net ID + 1</text>
    <text x="692" y="162" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Broadcast:</tspan> Tots 1s host</text>
    <text x="692" y="180" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">Última útil:</tspan> Bcast - 1</text>
    <text x="692" y="196" fill="#94a3b8" font-size="8">Validació local vs remota</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Càlcul Matemàtic</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or del Subnetting: <tspan fill="#34d399" font-weight="bold">La primera adreça d'una subxarxa és la de xarxa i l'última és la de broadcast; cap d'elles s'assigna a un host.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">El càlcul del nombre de dispositius vàlids sempre compleix la relació matemàtica estricta H = 2^h - 2.</text>
  </svg>
</div>

---

## 📊 Taula de Subxarxes de Longitud Fixa (FLSM): /24 a /30

| Màscara CIDR | Màscara Decimal Puntejada | Bits de Host ($h$) | Total Adreces ($2^h$) | Hosts Útils ($2^h - 2$) | Sal de Xarxa ($\Delta$) | Ús Típic |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **/24** | `255.255.255.0` | 8 | 256 | **254** | 256 | Xarxa local d'oficina o aula estàndard. |
| **/25** | `255.255.255.128` | 7 | 128 | **126** | 128 | Divisió en 2 departaments mitjans. |
| **/26** | `255.255.255.192` | 6 | 64 | **62** | 64 | Divisió en 4 aules o seccions de 50 equips. |
| **/27** | `255.255.255.224` | 5 | 32 | **30** | 32 | Xarxa de departament xicotet o servidors locals. |
| **/28** | `255.255.255.240` | 4 | 16 | **14** | 16 | VLAN de gestió d'equips, impressores o càmeres IP. |
| **/29** | `255.255.255.248` | 3 | 8 | **6** | 8 | Zona desmilitaritzada (DMZ) xicoteta de servidors web. |
| **/30** | `255.255.255.252` | 2 | 4 | **2** | 4 | **Enllaços punt a punt entre dos encaminadors (WAN).** |

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **3.1** | [**Interconnexió d'Equips en Xarxes Locals**](./ut0301.md) | Configuració de targetes IP estàtiques i dinàmiques, passarel·les i DNS | [**⚙️ Configurar Adaptadors →**](./ut0301.md) |
| **3.5** | [**Classificació d'Adreces IP**](./ut0305.md) | Classes històriques A, B, C, D (Multicast), E i rangs privats RFC 1918 | [**📋 Classificar Rangs →**](./ut0305.md) |
| **3.6** | [**L'Operació Lògica AND**](./ut0306.md) | Càlcul de la xarxa origen i destinació mitjançant màscara de subxarxa | [**🧠 Dominar Lògica AND →**](./ut0306.md) |
| **3.9** | [**Fonaments de Subnetting**](./ut0309.md) | Divisió d'espais de xarxa, càlcul de bits prestats i planificació corporativa | [**📐 Fórmules Subnetting →**](./ut0309.md) |
| **3.17** | [**Guia Pràctica de Subnetting Classe C**](./ut0317.md) | Resolució d'exercicis tipus examen pas a pas amb taules completes | [**📝 Resoldre Exercicis →**](./ut0317.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA3:** Interconnecta equips en xarxes locals configurant adaptadors, paràmetres de nivell de xarxa (adreçament IPv4 i subnetting) i comprovant la connectivitat.
- **Criteris d'Avaluació:**
  - S'han convertit adreces i màscares entre representació binària, decimal puntejada i notació prefixada CIDR.
  - S'ha executat l'operació AND lògica per a identificar l'adreça de xarxa i broadcast d'un node.
  - S'han calculat i planificat subxarxes FLSM optimitzant l'assignació d'adreces a hosts.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Projecte de Subnetting FLSM per a 4 Departaments:**
   - Una acadèmia de formació rep el bloc d'adreces de xarxa de Classe C privada `192.168.50.0/24`.
   - Cal crear **4 subxarxes independents** per als següents departaments:
     - Subxarxa 0: Administració (requereix 25 hosts).
     - Subxarxa 1: Aula Informàtica 1 (requereix 28 hosts).
     - Subxarxa 2: Aula Informàtica 2 (requereix 28 hosts).
     - Subxarxa 3: Professors i Servidors (requereix 15 hosts).
   - **Preguntes de desenvolupament matemàtic:**
     - Quants bits cal manllevar ($s$) a la porció de host per aconseguir $2^s \ge 4$?
     - Quina és la nova màscara en format CIDR i en format decimal puntejat?
     - Quants bits queden per a host ($h$) i quants hosts útils admet cada subxarxa ($2^h - 2$)?
     - Quin és el valor del salt de xarxa ($\Delta = 256 - \text{octet\_màscara}$)?
     - Elabora la taula completa amb les 4 subxarxes indicant: Identificador de Xarxa, Primera IP Útil, Última IP Útil, Adreça de Difusió (*Broadcast*) i Màscara de subxarxa.

2. **Càlcul Binari de l'Operació Lògica AND:**
   - Un ordinador té assignada la configuració IP: `172.26.138.75 / 21`.
   - **Preguntes d'anàlisi:**
     - Determina quants bits corresponen a la màscara en el tercer octet i escriu la màscara de subxarxa en format decimal puntejat.
     - Converteix el tercer octet de la IP ($138$) i el tercer octet de la màscara a binari de 8 bits.
     - Executa l'operació lògica bit a bit `138 AND Màscara` i converteix el resultat a decimal per trobar l'adreça exacta de xarxa (*Network ID*).
     - Determina l'adreça de difusió (*Broadcast Address*) i el rang complet d'adreces útils per a equips.

3. **Optimització d'Enllaços WAN Punt a Punt:**
   - Dos encaminadors corporatius a València i Alacant s'interconnecten mitjançant una línia dedicada punt a punt.
   - **Preguntes de disseny:**
     - Si s'utilitzara una màscara clàssica `/24` per a aquest enllaç, quantes adreces IP es malgastarien?
     - Demostra per quina raó una màscara `/30` ($255.255.255.252$) és l'elecció estàndard perfecta en xarxes tradicionals (calcula el nombre de hosts útils).
     - A partir de la xarxa base `10.250.0.0/30`, escriu l'adreça de xarxa, les dues adreces assignables a les interfícies dels dos routers i l'adreça de broadcast.

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Configuració d'Adreçament Estàtic i DNS amb PowerShell
1. Inicia PowerShell com a Administrador i identifica el nom de l'adaptador Ethernet de laboratori:
   ```powershell
   Get-NetAdapter | Select-Object Name, Status, LinkSpeed
   ```
2. Assigna una adreça IP estàtica de la Subxarxa 0 (`192.168.50.10/26`) amb passarel·la `192.168.50.1`:
   ```powershell
   New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress "192.168.50.10" -PrefixLength 26 -DefaultGateway "192.168.50.1"
   ```
3. Configura els servidors DNS preferit i secundari:
   ```powershell
   Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("1.1.1.1","8.8.8.8")
   ```
4. Comprova la configuració amb `Get-NetIPConfiguration`.

#### Repte 2: Diagnòstic d'Adreçament i Taula d'Encaminament en Linux
1. En un terminal de Linux, afegeix una adreça d'una subxarxa a la interfície de pràctiques:
   ```bash
   sudo ip addr add 192.168.50.66/26 dev eth0
   ```
2. Consulta les adreces i màscares actives a la interfície:
   ```bash
   ip -4 addr show dev eth0
   ```
3. Comprova la taula d'encaminament del nucli per verificar com el sistema determina quines xarxes són locals (*link*) i quines requereixen passar per la passarel·la per defecte (*default via*):
   ```bash
   ip route show
   ```

#### Repte 3: Desplegament de Subnetting en Cisco Packet Tracer
1. Crea una topologia amb 1 Encaminador (Router 2911), 2 Commutadors (Switch 2960) i 2 PCs a cada commutador.
2. Configura la interfície `GigabitEthernet 0/0` del router per a la Subxarxa 0:
   ```text
   Router(config)# interface GigabitEthernet 0/0
   Router(config-if)# ip address 192.168.50.1 255.255.255.192
   Router(config-if)# no shutdown
   ```
3. Configura la interfície `GigabitEthernet 0/1` del router per a la Subxarxa 1:
   ```text
   Router(config)# interface GigabitEthernet 0/1
   Router(config-if)# ip address 192.168.50.65 255.255.255.192
   Router(config-if)# no shutdown
   ```
4. Configura els PCs de cada subxarxa amb la seua IP corresponent i passarel·la predeterminada.
5. Executa una prova de connectivitat `ping` entre el PC de la Subxarxa 0 i el PC de la Subxarxa 1 verificant que el router encamina els paquets amb èxit entre les dues subxarxes.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Càlcul Matemàtic de Subnetting FLSM** | Calcula amb precisió bits manllevats, salts de xarxa $\Delta$, adreces de xarxa, broadcast i hosts útils per a qualsevol prefix CIDR. | Construeix la taula de subxarxes per a màscares /26 o /27 però comet xicotets errors en determinar l'adreça de broadcast. | No comprèn per què cal restar 2 adreces ($2^h - 2$) o assigna adreces de xarxa a ordinadors. |
| **Operació Lògica AND i Rangs RFC 1918** | Executa en binari l'operació AND bit a bit sobre qualsevol octet i distingeix amb claredat rangs privats, públics, loopback i APIPA. | Identifica si una IP és privada o pública però no sap calcular l'operació AND en binari quan la màscara no és /24. | Confon adreces privades amb públiques o creu que una adreça APIPA (`169.254.x.x`) té connexió a Internet. |
| **Configuració i Verificació CLI d'Adaptadors** | Configura adaptadors estàtics i DNS mitjançant comandes PowerShell i Linux, verificant rutes i comprovant connectivitat amb èxit. | Configura la IP correctament des de la consola però oblida establir la màscara o la passarel·la per defecte. | Només sap assignar adreces IP mitjançant l'assistent gràfic de Windows i desconeix com veure la IP en consola. |
