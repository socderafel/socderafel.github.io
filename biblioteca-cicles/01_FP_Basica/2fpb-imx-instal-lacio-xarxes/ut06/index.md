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

