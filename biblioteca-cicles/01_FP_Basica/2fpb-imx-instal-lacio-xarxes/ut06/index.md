---
layout: default
title: "UD6: Configuració d'Equips i Adreçament IPv4 — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD6"
next_url: "ut0601.html"
next_label: "6.1 ➡️"
---

# UD6: Configuració d'Equips i Adreçament IPv4

L'adreça IPv4 (estructura de 32 bits, classes, públiques vs privades), màscara de subxarxa, porta d'enllaç, servidors DNS, DHCP, ordres de diagnòstic en terminal (ping, ipconfig, tracert, nslookup) i resolució de conflictes d'IP.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-ip4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-msk" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-dns" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-cli" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">ADREÇAMENT IPv4: ESTRUCTURA, MÀSCARES, SERVEIS DNS/DHCP I DIAGNÒSTIC CLI</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Format 32 bits, classes RFC 1918, procés DORA, porta d'enllaç i protocol ICMP</text>

  <!-- Bloc 1: Estructura IPv4 -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-ip4)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔢</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Estructura IPv4</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">32 Bits (4 Octets)</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• NetID + HostID</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Classes A, B i C</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Privades: 10/8, 192.168/16</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Loopback: 127.0.0.1</text>
  </g>

  <!-- Bloc 2: Màscara i Subxarxes -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-msk)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🎭</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Màscara & Rang</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Delimitació Lògica</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• /24 = 255.255.255.0</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Xarxa: .0 (identifica)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Broadcast: .255 (tothom)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Hosts útils: 254 equips</text>
  </g>

  <!-- Bloc 3: DNS i DHCP -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-dns)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🌐</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Serveis de Xarxa</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">DNS & Autoconfiguració</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Gateway: Sortida Internet</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• DNS: Noms a IP (8.8.8.8)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• DHCP: Procés DORA</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Estàtica vs Dinàmica</text>
  </g>

  <!-- Bloc 4: Diagnòstic CLI -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-cli)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">💻</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Diagnòstic CLI</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Ordres de Consola</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• ipconfig /all, /renew</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• ping: Comprovació ICMP</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• tracert: Salts fins al destí</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• nslookup: Resolució noms</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **6.1** | **L'adreça IPv4: estructura, classes i adreces privades** | [**Llegir apartat →**](./ut0601.html) |
| **6.2** | **Màscara de subxarxa, porta d'enllaç i difusió** | [**Llegir apartat →**](./ut0602.html) |
| **6.3** | **Servidors DNS i servei d'assignació automàtica DHCP** | [**Llegir apartat →**](./ut0603.html) |
| **6.4** | **Ordres bàsiques de diagnòstic de xarxa en consola** | [**Llegir apartat →**](./ut0604.html) |
| **6.5** | **Pràctica: Configuració manual d'IPs i resolució de conflictes** | [**Llegir apartat →**](./ut0605.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 6.1 L'adreça IPv4: estructura, classes i adreces privades

Perquè dos ordinadors o dispositius puguen comunicar-se a través d'una xarxa mitjançant el protocol IP, cadascun ha de tindre assignat un identificador lògic únic anomenat **adreça IP** (*Internet Protocol*).

### Estructura d'una adreça IPv4
- Una adreça IPv4 està formada exactament per **32 bits** (organitzats en **4 bytes o octets** de 8 bits cadascun).
- Per fer-la fàcilment llegible pels éssers humans, no s'escriu en zeros i uns binaris, sinó en **notació decimal separada per punts**:
  - Cada octet pot tindre un valor decimal que va des de **0** ($00000000_2$) fins a **255** ($11111111_2$).
  - Exemple típic: `192.168.1.35`

Tota adreça IP es compon de dues parts:
1. **Identificador de Xarxa (*Net ID*):** Indica a quina xarxa pertany l'equip (tots els ordinadors d'una mateixa aula han de compartir el mateix identificador de xarxa).
2. **Identificador de Dispositiu o Amfitrió (*Host ID*):** Identifica a l'equip concret dins d'eixa xarxa (ha de ser únic per a cada dispositiu).

---

### Classes històriques d'adreces IPv4

| Classe | Rang del Primer Octet | Màscara per Defecte | Xarxa / Host | Nombre Màxim de Hosts per Xarxa |
| :---: | :---: | :---: | :---: | :--- |
| **A** | `1` a `126` | `255.0.0.0` (/8) | Xarxa.Host.Host.Host | $16.777.214$ equips (grans multinacionals) |
| **B** | `128` a `191` | `255.255.0.0` (/16) | Xarxa.Xarxa.Host.Host | $65.534$ equips (universitats, grans empreses) |
| **C** | `192` a `223` | `255.255.255.0` (/24) | Xarxa.Xarxa.Xarxa.Host | **254 equips** (pimes, aules, xarxes domèstiques) |
| **D** | `224` a `239` | N/A | Multicast | Trànsit multidifusió (sense hosts individuals) |
| **E** | `240` a `255` | N/A | Experimental | Investigació i reserves de laboratori |

> [!NOTE]
> La xarxa `127.0.0.0/8` (i en especial `127.0.0.1`) està reservada per a **bucle local (*Loopback* o localhost)**; s'utilitza perquè un ordinador puga enviar-se missatges a si mateix per comprovar el funcionament de la seua pròpia targeta de xarxa.

---

### Adreces IP Públiques vs Privades (RFC 1918)
- **IPs Públiques:** Són úniques a tot Internet. Són les que assignen els proveïdors d'Internet (ISP) als routers per navegar i comunicar-se amb servidors de tot el món.
- **IPs Privades:** S'utilitzen exclusivament dins de xarxes locals (LAN) domèstiques, escolars o empresarials. No són encaminables per Internet i es poden repetir en diferents cases sense conflicte gràcies al mecanisme NAT.

Els rangs d'adreces privades oficials són:
- **Classe A privada:** `10.0.0.0` a `10.255.255.255`
- **Classe B privada:** `172.16.0.0` a `172.31.255.255`
- **Classe C privada:** `192.168.0.0` a `192.168.255.255` (La més habitual a casa i aules)

---

## 6.2 Màscara de subxarxa, porta d'enllaç i difusió

Configurar correctament un ordinador en una xarxa requereix entendre com interactuen l'adreça IP, la màscara de subxarxa i la porta d'enllaç predeterminada.

### 1. La Màscara de Subxarxa
La màscara de subxarxa és un número de 32 bits que serveix a l'ordinador per saber quina part de la seua adreça IP correspon a la **xarxa** i quina part al **dispositiu**:
- Els bits amb valor `1` representen la part de xarxa.
- Els bits amb valor `0` representen la part d'amfitrió (*host*).

#### Exemple amb màscara típica /24:
- IP de l'equip: `192.168.1.15`
- Màscara: `255.255.255.0` (en binari són 24 uns seguits: `11111111.11111111.11111111.00000000`)
- **Part de xarxa:** Els primers tres octets (`192.168.1.`)
- **Part de host:** L'últim octet (`.15`)
- Això significa que qualsevol ordinador que comence per `192.168.1.` està dins de la mateixa xarxa local i podrà comunicar-se directament sense passar per cap router.

---

### 2. Adreça de Xarxa i Adreça de Difusió (*Broadcast*)
Dins de qualsevol rang de xarxa IPv4 hi ha dues adreces especials que **mai es poden assignar a cap ordinador**:
1. **Adreça de Xarxa:** Té tots els bits de host a `0`. Identifica la xarxa en conjunt. (Exemple: `192.168.1.0`).
2. **Adreça de Difusió (*Broadcast*):** Té tots els bits de host a `1` (valor decimal `255`). S'utilitza per enviar un missatge a tots els equips de la xarxa alhora. (Exemple: `192.168.1.255`).

Per això, en una xarxa amb màscara `/24` (256 valors possibles), només tenim $256 - 2 = 254$ adreces útils per a ordinadors (des de la `.1` fins a la `.254`).

---

### 3. La Porta d'Enllaç Predeterminada (*Default Gateway*)
- És l'adreça IP de la interfície local de l'**encaminador (router)** connectat a la nostra mateixa xarxa LAN (habitualment la primera adreça útil, com ara `192.168.1.1`).
- **Funció:** Quan el nostre ordinador vol enviar un paquet a una IP que pertany a una altra xarxa diferent (com ara el servidor web de Google `142.250.184.206`), l'ordinador s'adona que no està a la seua LAN i l'envia immediatament a la porta d'enllaç perquè el router s'encarregue de traure'l cap a Internet.

---

## 6.3 Servidors DNS i servei d'assignació automàtica DHCP

A més de la IP i la màscara, hi ha dos serveis de xarxa indispensables per fer possible l'ús quotidià d'Internet: el servei de resolució de noms (**DNS**) i el protocol d'autoconfiguració (**DHCP**).

### 1. El Sistema de Noms de Domini (DNS - *Domain Name System*)
Els ordinadors i servidors d'Internet només entenen d'adreces numèriques IP (com `142.250.200.36`), però per a les persones seria impossible recordar milers de combinacions de números.
- El servidor **DNS** funciona com la "guia telefònica" d'Internet: tradueix els noms de domini que escrivim al navegador (com ara `www.gva.es` o `google.com`) a les seues adreces IP numèriques reals.
- Si un ordinador té configurada una IP i porta d'enllaç correctes però **no té configurat cap servidor DNS**, podrem fer ping a adreces numèriques però el navegador serà incapaç d'obrir cap pàgina web amb nom.

#### Servidors DNS públics més utilitzats:
- **Google DNS:** Primari `8.8.8.8` | Secundari `8.8.4.4`
- **Cloudflare DNS:** Primari `1.1.1.1` | Secundari `1.0.0.1`

---

### 2. El Protocol DHCP (*Dynamic Host Configuration Protocol*)
Configurar a mà la IP, màscara, gateway i DNS a desenes d'ordinadors d'un centre o a cada mòbil que entra a una cafeteria seria lentíssim i provocaria errors d'adreces duplicades.
- El servidor **DHCP** (que en xarxes menudes està integrat dins del mateix router) s'encarrega d'**assignar automàticament i dinàmicament** tots els paràmetres de xarxa als clients tan bon punt s'endollen el cable o es connecten al Wi-Fi.

#### Procés DORA de negociació DHCP:
1. **D - Discovery:** El client sense IP envia un missatge de difusió a tota la xarxa: *"Hola, hi ha algun servidor DHCP per ací?"*
2. **O - Offer:** El servidor DHCP respon oferint-li una IP lliure de la seua reserva: *"Tinc la 192.168.1.45 disponible per a tu"*.
3. **R - Request:** El client contesta acceptant la proposta: *"D'acord, m'agafe la 192.168.1.45"*.
4. **A - Acknowledge:** El servidor confirma la concessió (*lease*) i li passa la màscara, el gateway i els DNS.

---

### IP Estàtica vs IP Dinàmica
- **IP Dinàmica (per DHCP):** Ideal per a usuaris finals, portàtils, telèfons intel·ligents i ordinadors d'aula. La configuració és automàtica.
- **IP Estàtica (Manual):** Fixada a mà directament en les propietats de la targeta. Obligatòria per a **servidors, impressores de xarxa, routers i càmeres IP**, ja que la seua adreça no ha de canviar mai perquè tothom els puga localitzar sempre.

---

## 6.4 Ordres bàsiques de diagnòstic de xarxa en consola

Com a tècnic d'instal·lació i manteniment, la consola d'ordres (terminal de comandes) és l'eina de treball més potent per comprovar l'estat de la xarxa i detectar problemes de connectivitat.

### 1. `ipconfig` (Windows) / `ip a` (Linux)
Permet visualitzar la configuració de xarxa actual de totes les targetes del sistema.
- En Windows:
```cmd
ipconfig
```
Mostra la IP, màscara i porta d'enllaç de cada adaptador.
- Visualitzar informació completa (adreça MAC, servidors DNS, servidor DHCP):
```cmd
ipconfig /all
```
- Alliberar i sol·licitar una nova IP al servidor DHCP:
```cmd
ipconfig /release
ipconfig /renew
```
- Netejar la memòria cau de noms DNS:
```cmd
ipconfig /flushdns
```

---

### 2. `ping` (Packet Internet Groper)
Envia paquets de prova del protocol ICMP (*Echo Request*) cap a una IP o nom d'amfitrió i espera la resposta (*Echo Reply*) per comprovar si l'equip remot està encès i accessible.
```cmd
ping 192.168.1.1
```
- Paràmetres útils en Windows:
  - `ping -t 192.168.1.1`: Fa ping indefinit sense aturar-se (útil per verificar quan torna la xarxa mentre reconnectem un cable). Per aturar-lo es prem `Ctrl + C`.
  - `ping -n 10 192.168.1.1`: Envia exactament 10 paquets.
- Què mirem al resultat?
  - Si respon amb temps en mil·lisegons (`temps < 1ms` o `temps = 15ms`): La xarxa funciona!
  - Si diu `Temps d'espera esgotat (*Request timed out*)`: L'equip no respon (apagat, cable desendollat o té el tallafocs activat bloquejant el ping).
  - Si diu `Host de destinació inaccessible`: L'ordinador no sap per on enviar el paquet (error de ruta o màscara).

---

### 3. `tracert` (Windows) / `traceroute` (Linux)
Mostra el camí complet i cadascun dels encaminadors (salts / *hops*) pels quals passa el paquet des del nostre ordinador fins a arribar a la destinació final a Internet:
```cmd
tracert www.google.es
```
Permet descobrir exactament en quin punt del camí cau la connexió quan falla l'accés exterior.

---

### 4. `nslookup`
Consulta directament els servidors DNS per esbrinar quina IP correspon a un nom de domini:
```cmd
nslookup www.gva.es
```

---

### 5. `netstat`
Mostra les connexions TCP actives, ports oberts a l'ordinador i estadístiques de trànsit:
```cmd
netstat -an
```

---

## 6.5 Pràctica: Configuració manual d'IPs i resolució de conflictes

### Objectiu de la Pràctica
1. Configurar manualment paràmetres de xarxa estàtics en Windows.
2. Provar el procediment sistemàtic de diagnòstic amb comandes de consola.
3. Provar i resoldre una situació real de **conflicte d'IP duplicada**.

---

### Procediment Pas a Pas

#### Pas 1: Configuració d'IP fixa en Windows
1. Prem les tecles `Windows + R`, escriu `ncpa.cpl` i prem *Intro* per obrir directament la finestra de **Connexions de xarxa**.
2. Fes clic amb el botó dret sobre l'adaptador *Ethernet* i selecciona **Propietats**.
3. Fes doble clic sobre **Protocol d'Internet versió 4 (TCP/IPv4)**.
4. Selecciona l'opció *"Utilitza la següent adreça IP"* i introdueix:
   - Adreça IP: `192.168.1.150`
   - Màscara de subxarxa: `255.255.255.0`
   - Porta d'enllaç predeterminada: `192.168.1.1`
   - Servidor DNS preferit: `8.8.8.8`
   - Servidor DNS alternatiu: `1.1.1.1`
5. Fes clic a D'acord dues vegades per aplicar els canvis.

#### Pas 2: Protocol sistemàtic de diagnòstic amb Ping
Obre el símbol del sistema (CMD) i executa en ordre aquests quatre passos fonamentals:
1. **Comprovació de la pròpia targeta:**
   ```cmd
   ping 127.0.0.1
   ```
   (Si respon, el programari TCP/IP i la targeta de xarxa funcionen).
2. **Comprovació de la pròpia IP configurada:**
   ```cmd
   ping 192.168.1.150
   ```
3. **Comprovació de la connexió a la xarxa local (Gateway):**
   ```cmd
   ping 192.168.1.1
   ```
   (Si respon, el cable de xarxa, el switch i la connexió amb el router estan perfectes).
4. **Comprovació de resolució de noms a Internet:**
   ```cmd
   ping www.google.es
   ```
   (Si respon, tenim accés a Internet i el servei DNS funciona).

---

### Pas 3: Simulació de conflicte d'adreça IP duplicada
1. En un altre ordinador proper de l'aula (**PC 02**), configura exactament la mateixa adreça IP: `192.168.1.150`.
2. Observa què passa en tots dos equips:
   - El sistema operatiu Windows mostrarà immediatament una alerta a la cantonada inferior dreta: *"S'ha detectat un conflicte d'adreces IP. Un altre equip d'aquesta xarxa té la mateixa adreça IP"*.
   - Un dels equips o tots dos perdran la connectivitat a la xarxa local.
3. **Com es resol?**
   - Canvia la IP d'un dels equips a una que estiga lliure (per exemple `192.168.1.151`) o torna a marcar l'opció *"Obtindre una adreça IP automàticament (DHCP)"*.
   - Executa `ipconfig /renew` i comprova que l'alerta desapareix i la connectivitat es restableix.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Anàlisi d'adreçament IPv4, classe i conversió binària
Analitza els tres escenaris d'adreçament IPv4 següents:
- Equip A: IP `10.50.100.25` amb màscara `255.0.0.0` (/8)
- Equip B: IP `172.16.4.120` amb màscara `255.255.0.0` (/16)
- Equip C: IP `192.168.10.75` amb màscara `255.255.255.0` (/24)

1. Determina per a cadascun dels tres equips:
   - Classe històrica (A, B o C) i si es tracta d'un rang d'adreces privades (RFC 1918) o públiques d'Internet.
   - Adreça de xarxa (Net ID amb bits de host a 0).
   - Adreça de difusió (*Broadcast* amb bits de host a 1).
   - Primera adreça útil i última adreça útil assignable a un dispositiu amfitrió.
2. Converteix l'adreça de l'Equip C (`192.168.10.75`) a codi binari pur de 32 bits, desglossant cadascun dels quatre octets de 8 bits.
3. Si a la mateixa xarxa que l'Equip C configurem un nou PC amb la IP `192.168.11.75` i la mateixa màscara `/24`, podran comunicar-se directament a través d'un switch sense passar per cap router? Raona la resposta.

#### Exercici 2: Càlcul de capacitat d'amfitrions i dimensionament de subxarxes
En una xarxa informàtica, el nombre de dispositius útils assignables a una subxarxa depèn exclusivament dels bits d'amfitrió ($h$) restants a la màscara:
$$N_{\text{útils}} = 2^h - 2$$
(on es resten 2 per reservar l'adreça de xarxa i la de difusió).

1. Completa la taula calculant els valors corresponents:
   - Màscara `/24` ($h = 32 - 24 = 8\text{ bits}$): $2^8 - 2 =$ ? hosts útils.
   - Màscara `/25` ($h = 32 - 25 = 7\text{ bits}$): $2^7 - 2 =$ ? hosts útils.
   - Màscara `/26` ($h = 32 - 26 = 6\text{ bits}$): $2^6 - 2 =$ ? hosts útils.
   - Màscara `/27` ($h = 32 - 27 = 5\text{ bits}$): $2^5 - 2 =$ ? hosts útils.
2. Una acadèmia de formació té dues aules independents: l'Aula 1 té 26 ordinadors i l'Aula 2 té 14 ordinadors. Quina màscara de subxarxa mínima (longitud de prefix) cal triar per a cadascuna d'aquestes aules per no malgastar adreces IP?

#### Exercici 3: Diagnòstic d'arbre de fallades per comandes CLI
Un usuari d'un lloc de treball demana suport tècnic perquè *"no pot navegar per Internet"*. Com a tècnic, segueixes el procediment d'inspecció en 4 passos des de la consola de comandes:
- **Pas 1:** `ping 127.0.0.1` $\rightarrow$ Respon amb èxit (`Temps < 1ms`).
- **Pas 2:** `ping 192.168.1.55` (la seua pròpia IP) $\rightarrow$ Respon amb èxit.
- **Pas 3:** `ping 192.168.1.1` (la porta d'enllaç) $\rightarrow$ Respon amb èxit.
- **Pas 4:** `ping 8.8.8.8` (DNS públic d'Internet) $\rightarrow$ Respon amb èxit.
- **Pas 5:** `ping www.google.es` $\rightarrow$ Retorna l'error: *"La sol·licitud de ping no va poder trobar l'amfitrió www.google.es"*.

1. Què demostren els resultats positius dels passos 1, 2, 3 i 4? Està bé la targeta de xarxa? I el cable de xarxa? Té sortida a l'exterior?
2. Quin és exactament l'origen del problema que impedeix a l'usuari obrir pàgines web segons l'error del Pas 5?
3. Quina comanda de consola pots executar per verificar la IP dels servidors DNS configurats a l'equip?
4. Com es pot resoldre l'avaria ràpidament des de les propietats de la targeta o per comanda?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Configuració d'adreçament estàtic per consola PowerShell
- **Objectiu:** Configurar manualment tots els paràmetres de xarxa d'una targeta sense emprar la interfície gràfica.
- **Eines:** Finestra de PowerShell oberta amb privilegis d'Administrador.
- **Comandes a executar:**
  1. Identifica l'índex o nom de la interfície de xarxa Ethernet:
     ```powershell
     Get-NetAdapter
     ```
  2. Assigna una adreça IP fixa, màscara i porta d'enllaç (substitueix `Ethernet` pel nom del teu adaptador):
     ```powershell
     New-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress "192.168.100.50" -PrefixLength 24 -DefaultGateway "192.168.100.1"
     ```
  3. Configura els servidors DNS de Google:
     ```powershell
     Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("8.8.8.8","8.8.4.4")
     ```
  4. Verifica que la configuració s'ha aplicat correctament:
     ```powershell
     Get-NetIPConfiguration
     ```

#### Repte 2: Captura del cicle de negociació DHCP (DORA)
- **Objectiu:** Observar la petició, recepció i renovació d'adreça IP dinàmica del servidor DHCP de l'aula.
- **Eines:** Terminal CMD o PowerShell.
- **Passos guiats:**
  1. Allibera l'adreça IP actual enviant un missatge de renúncia al servidor DHCP:
     ```cmd
     ipconfig /release
     ```
  2. Comprova amb `ipconfig` com l'adreça IPv4 queda en blanc (`0.0.0.0`). Intenta obrir el navegador per comprovar que no hi ha connexió.
  3. Sol·licita una nova adreça al servidor DHCP iniciant el cicle DORA:
     ```cmd
     ipconfig /renew
     ```
  4. Executa:
     ```cmd
     ipconfig /all
     ```
  5. Anota a la memòria de pràctiques:
     - Adreça IPv4 obtinguda.
     - Adreça IP del servidor DHCP que t'ha atès.
     - Data i hora d'obtenció de la concessió (*Lease Obtained*).
     - Data i hora de caducitat de la concessió (*Lease Expires*).

#### Repte 3: Resolució d'un incident de xarxa (Auditoria d'encaminament i DNS)
- **Objectiu:** Utilitzar les eines `tracert` i `nslookup` per diagnosticar la ruta cap a servidors exteriors.
- **Eines:** Consola de comandes de Windows.
- **Instruccions:**
  1. Executa un traçat de ruta cap a un servidor web de la Generalitat Valenciana:
     ```cmd
     tracert www.gva.es
     ```
  2. Compta quants salts d'encaminador (routers) travessen els teus paquets abans d'arribar a la destinació. Quin és el primer salt de la llista (ha de ser la teua porta d'enllaç local)?
  3. Consulta la resolució de dominis amb `nslookup`:
     ```cmd
     nslookup www.gva.es 8.8.8.8
     ```
  4. Repeteix la consulta preguntant a un altre servidor DNS alternatiu (ex: `1.1.1.1`).
  5. Buida la memòria cau DNS local per eliminar registres obsolets:
     ```cmd
     ipconfig /flushdns
     ```

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He diferenciat clarament entre les adreces IP públiques i les adreces privades RFC 1918.
- [ ] He calculat correctament les adreces de xarxa, difusió i hosts útils aplicant la màscara.
- [ ] He configurat els paràmetres de xarxa tant en la interfície gràfica com per ordres de PowerShell.
- [ ] He executat el protocol de diagnòstic amb `ping` en l'ordre lògic dels 4 passos.
- [ ] He comprès les quatre fases del procés de concessió DHCP (DORA).
- [ ] He utilitzat `tracert` i `nslookup` per analitzar l'encaminament i la resolució de noms.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Fonaments d'adreçament IPv4 i màscares** | Domina l'estructura de 32 bits, conversions binàries, classes, rangs privats i càlcul d'adreces de xarxa/broadcast. | Reconeix la classe, màscara /24 i adreces de xarxa amb xicotets dubtes en binari. | Identifica la IP i màscara bàsiques sense comprendre bé l'adreça de broadcast. | Confon adreces IP amb màscares i no sap distingir entre xarxa i host. |
| **Càlcul de capacitat de subxarxa ($2^h - 2$)** | Calcula amb facilitat el nombre de hosts útils per a qualsevol longitud de prefix i dimensiona subxarxes. | Aplica la fórmula $2^h - 2$ de forma correcta per a prefixos habituals. | Calcula el límit de 254 equips per a /24 però té dificultats per canviar de màscara. | Incapaç de calcular el nombre d'equips que caben en una xarxa. |
| **Configuració de xarxa (GUI i PowerShell)** | Configura IP, màscara, gateway i DNS amb solvència tant per entorn gràfic com per comandes avançades. | Configura la xarxa correctament en entorn gràfic i aplica comandes de PowerShell guiades. | Configura la targeta en entorn gràfic però necessita suport per utilitzar el terminal. | No sap localitzar la configuració de xarxa de Windows ni aplicar una IP fixa. |
| **Diagnòstic sistemàtic amb Ping i CLI** | Segueix l'arbre de fallades lògic (127.0.0.1 $\rightarrow$ IP $\rightarrow$ Gateway $\rightarrow$ DNS) identificant l'origen de l'avaria a l'instant. | Utilitza el ping per verificar connexions i interpreta la majoria de missatges d'error. | Executa la comanda ping però no sap interpretar els missatges de temps d'espera esgotat. | No sap utilitzar el ping ni interpretar el seu resultat tècnic. |
| **Resolució de serveis (DHCP, DNS, Tracert)** | Interpreta les fases DORA, registra concessions DHCP, empra `tracert` i resol incidències DNS amb èxit. | Executa `ipconfig /renew`, `flushdns` i `nslookup` comprenent la seua funció general. | Executa les comandes bàsiques per alliberar i renovar IP seguint la guia pas a pas. | Desconeix la funció del servidor DHCP o DNS en la connexió d'equips. |

