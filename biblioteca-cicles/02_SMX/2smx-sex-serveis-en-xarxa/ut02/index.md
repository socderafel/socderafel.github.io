---
layout: default
title: "Serveis en Xarxa — UT02 Servei de Resolució de Noms (DNS)"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT02"
---

# UT02 — Servei de Resolució de Noms de Domini (DNS)

El **Sistema de Noms de Domini (DNS - *Domain Name System*)** és el servei d'infraestructura més crític d'Internet. S'encarrega de traduir noms fàcilment memoritzables pels humans com `www.iesrafel.internal` a adreces IP numèriques que els routers i encaminadors necessiten per a transportar els paquets de dades.

---

## 📌 1. Estructura Jeràrquica de l'Espai de Noms

El DNS funciona com una base de dades distribuïda i jeràrquica en forma d'arbre invertit:

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">L'Arbre Jeràrquic de Noms de Domini (DNS)</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Estructura piramidal i delegació autoritativa des de l'arrel mundial fins als equips individuals</p>
  </div>
  <svg viewBox="0 0 860 270" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="rootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="tldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="sldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Nivell 0: Arrel "." -->
    <rect x="340" y="20" width="180" height="50" rx="8" fill="url(#rootGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="430" y="42" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">🌐 ARREL (ROOT ".")</text>
    <text x="430" y="58" fill="#94a3b8" font-size="10" text-anchor="middle">13 Servidors Arrel (A-M)</text>

    <!-- Fletxes Nivell 1 -->
    <line x1="390" y1="70" x2="160" y2="105" stroke="#475569" stroke-width="1.5"/>
    <line x1="430" y1="70" x2="430" y2="105" stroke="#475569" stroke-width="1.5"/>
    <line x1="470" y1="70" x2="700" y2="105" stroke="#475569" stroke-width="1.5"/>

    <!-- Nivell 1: TLDs -->
    <rect x="80" y="105" width="160" height="50" rx="8" fill="url(#tldGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="160" y="127" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">.es / .cat</text>
    <text x="160" y="143" fill="#94a3b8" font-size="10" text-anchor="middle">ccTLD Geogràfic</text>

    <rect x="350" y="105" width="160" height="50" rx="8" fill="url(#tldGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="430" y="127" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">.com / .net</text>
    <text x="430" y="143" fill="#94a3b8" font-size="10" text-anchor="middle">gTLD Genèric</text>

    <rect x="620" y="105" width="160" height="50" rx="8" fill="url(#tldGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="700" y="127" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">.arpa</text>
    <text x="700" y="143" fill="#94a3b8" font-size="10" text-anchor="middle">Zona Inversa (in-addr)</text>

    <!-- Fletxes Nivell 2 -->
    <line x1="160" y1="155" x2="160" y2="185" stroke="#475569" stroke-width="1.5"/>
    <line x1="430" y1="155" x2="430" y2="185" stroke="#475569" stroke-width="1.5"/>
    <line x1="700" y1="155" x2="700" y2="185" stroke="#475569" stroke-width="1.5"/>

    <!-- Nivell 2: Segon Nivell i Hosts -->
    <rect x="60" y="185" width="200" height="65" rx="8" fill="url(#sldGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="160" y="207" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">iesrafel.es</text>
    <text x="160" y="224" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Hosts: www, correu, ns1</text>
    <text x="160" y="238" fill="#94a3b8" font-size="9" text-anchor="middle">Zona Autoritativa Directa</text>

    <rect x="330" y="185" width="200" height="65" rx="8" fill="url(#sldGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="430" y="207" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">empresa.com</text>
    <text x="430" y="224" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Hosts: botiga, api, vpn</text>
    <text x="430" y="238" fill="#94a3b8" font-size="9" text-anchor="middle">Registrat a registrador ICANN</text>

    <rect x="600" y="185" width="200" height="65" rx="8" fill="url(#sldGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="700" y="207" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">1.168.192.in-addr.arpa</text>
    <text x="700" y="224" fill="#cbd5e1" font-size="9.5" text-anchor="middle">Punters PTR: IP -&gt; Nom</text>
    <text x="700" y="238" fill="#94a3b8" font-size="9" text-anchor="middle">Resolució inversa de xarxa</text>
  </svg>
</div>

- **FQDN (*Fully Qualified Domain Name*):** Nom de domini complet acabat en punt (ex.: `servidor1.iesrafel.es.`).
- **Resolució Recursiva:** El client fa la pregunta al seu servidor DNS local (`192.168.1.1`) i aquest s'encarrega de fer totes les consultes necessàries fins a retornar la IP final al client.
- **Resolució Iterativa:** El servidor DNS consulta seqüencialment l'Arrel $\to$ el TLD $\to$ el servidor autoritatiu del domini.

---

## 📌 2. Tipologia de Registres de Recursos (Resource Records - RR)

Dins d'un fitxer de zona DNS, cada entrada s'anomena registre de recurs (RR):

| Tipus de Registre | Nom Complet | Funció Tècnica | Exemple de Sintaxi |
| :---: | :--- | :--- | :--- |
| **SOA** | *Start of Authority* | Primer registre de la zona. Defineix paràmetres de control i número de sèrie. | `@ IN SOA ns1.iesrafel.es. admin.iesrafel.es. (...)` |
| **NS** | *Name Server* | Identifica els servidors DNS autoritatius per a la zona. | `@ IN NS ns1.iesrafel.es.` |
| **A** | *IPv4 Address* | Assigna un nom de host a una adreça IPv4 (32 bits). | `servidor IN A 192.168.1.10` |
| **AAAA** | *IPv6 Address* | Assigna un nom de host a una adreça IPv6 (128 bits). | `servidor IN AAAA 2001:db8::10` |
| **CNAME** | *Canonical Name* | Àlies o sobrenom que apunta a un altre nom canònic (registre A). | `www IN CNAME servidor.iesrafel.es.` |
| **MX** | *Mail Exchanger* | Especifica el servidor de correu del domini amb prioritat numèrica. | `@ IN MX 10 correu.iesrafel.es.` |
| **PTR** | *Pointer* | Resolució inversa (converteix IP a FQDN) en la zona `in-addr.arpa`. | `10 IN PTR servidor.iesrafel.es.` |

---

## 📌 3. Desplegament de Bind9 en Ubuntu Server

**Bind9** (*Berkeley Internet Name Domain*) és el servidor DNS de codi obert més utilitzat arreu del món:

```bash
# 1. Instal·lar Bind9 i eines de diagnòstic DNS
sudo apt update && sudo apt install bind9 bind9utils dnsutils -y
```

### A) Configuració dels Reenviadors (`/etc/bind/named.conf.options`):
Si el nostre servidor no coneix un domini públic extern (com `google.com`), reenvia la consulta als servidors DNS públics:
```text
options {
    directory "/var/cache/bind";
    forwarders {
        1.1.1.1;
        8.8.8.8;
    };
    dnssec-validation auto;
    listen-on { any; };
    allow-query { any; };
};
```

### B) Declaració de Zones a `/etc/bind/named.conf.local`:
```text
// Zona directa
zone "iesrafel.internal" {
    type master;
    file "/etc/bind/db.iesrafel.internal";
};

// Zona inversa (per a la xarxa 192.168.1.0/24)
zone "1.168.192.in-addr.arpa" {
    type master;
    file "/etc/bind/db.192.168.1";
};
```

### C) Creació del Fitxer de Zona Directa (`/etc/bind/db.iesrafel.internal`):
```text
$TTL    604800
@       IN      SOA     ns1.iesrafel.internal. admin.iesrafel.internal. (
                              2026101301 ; Serial (YYYYMMDDNN)
                                  604800 ; Refresh (1 setmana)
                                   86400 ; Retry (1 dia)
                                 2419200 ; Expire (4 setmanes)
                                  604800 ) ; Negative Cache TTL
; Servidors de Noms
@       IN      NS      ns1.iesrafel.internal.

; Registres d'Amfitrions (Hosts)
ns1     IN      A       192.168.1.10
servidor IN     A       192.168.1.10
correu  IN      A       192.168.1.20

; Àlies (CNAME)
www     IN      CNAME   servidor
ftp     IN      CNAME   servidor

; Servidor de Correu
@       IN      MX      10 correu.iesrafel.internal.
```

### D) Creació del Fitxer de Zona Inversa (`/etc/bind/db.192.168.1`):
```text
$TTL    604800
@       IN      SOA     ns1.iesrafel.internal. admin.iesrafel.internal. (
                              2026101301 ; Serial
                                  604800 ; Refresh
                                   86400 ; Retry
                                 2419200 ; Expire
                                  604800 ) ; Negative Cache TTL
; Servidors de Noms
@       IN      NS      ns1.iesrafel.internal.

; Punter Invers (PTR): Últim octet de la IP -> FQDN
10      IN      PTR     servidor.iesrafel.internal.
20      IN      PTR     correu.iesrafel.internal.
```

---

## 📌 4. Verificació de Sintaxi i Eines de Diagnòstic

Abans de reiniciar el servei Bind9 cal comprovar que els fitxers no contenen cap error tipogràfic:

```bash
# Validar el fitxer de configuració general
sudo named-checkconf

# Validar la zona directa
sudo named-checkzone iesrafel.internal /etc/bind/db.iesrafel.internal

# Validar la zona inversa
sudo named-checkzone 1.168.192.in-addr.arpa /etc/bind/db.192.168.1

# Si tot torna 'OK', reiniciar el servei
sudo systemctl restart bind9
```

### Comprovació amb `dig` i `nslookup`:
```bash
# Prova de resolució directa contra el nostre servidor local
dig @127.0.0.1 www.iesrafel.internal +short
# Retorn esperat:
# servidor.iesrafel.internal.
# 192.168.1.10

# Prova de resolució inversa
dig @127.0.0.1 -x 192.168.1.10 +short
# Retorn esperat:
# servidor.iesrafel.internal.
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments Tècnics de Registres i Protocols DNS
1. **La Importància Crítica del Serial Number al SOA:**
   - En una infraestructura DNS amb un servidor mestre i dos servidors esclaus (secundaris), l'administrador afegeix un registre A per a una nova impressora al fitxer de zona, però oblida incrementar el camp `Serial` al registre SOA.
   - Què passarà quan els servidors esclaus intenten sincronitzar la zona mitjançant transferència AXFR? S'actualitzarà la nova IP als esclaus?
   - Quin format estàndard recomana la IETF per a assignar números de sèrie (p. ex., `YYYYMMDDNN`)?
2. **Resolució Inversa i el Domini `.in-addr.arpa`:**
   - Per què en les consultes inverses és imprescindible invertir l'ordre dels octets de l'adreça IP (de `192.168.1.50` a `50.1.168.192.in-addr.arpa`)? Com es relaciona aquesta inversió amb la lectura jeràrquica d'esquerra a dreta en l'arbre de noms?
3. **El Flag Autoritatiu (`aa`):**
   - Quan s'executa una consulta amb `dig`, què significa la presència de la bandera `aa` (*Authoritative Answer*) a la línia de capçalera `flags: qr aa rd ra`?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Configuració

#### Repte 1: Creació d'una Zona Autoritativa Pròpia a Bind9
A la màquina Ubuntu Server de laboratori:
1. Edita el fitxer `/etc/bind/named.conf.local` i afegeix la declaració per al domini `smx-lab.internal`:
   ```text
   zone "smx-lab.internal" {
       type master;
       file "/etc/bind/db.smx-lab.internal";
   };
   ```
2. Crea el fitxer `/etc/bind/db.smx-lab.internal` copiant la plantilla `/etc/bind/db.local` o creant-lo des de zero amb:
   - Registre SOA configurat per a `ns1.smx-lab.internal` i serial actualitzat.
   - Registre NS per a `ns1`.
   - Registres A per a `ns1` (`192.168.1.10`), `web` (`192.168.1.10`), `router` (`192.168.1.1`).
   - Registres CNAME per a `www` i `ftp` apuntant al nom canònic `web`.
   - Registre MX amb prioritat 10 apuntant a `correu.smx-lab.internal`.
3. Valida la sintaxi amb les eines oficials de Bind9:
   ```bash
   sudo named-checkconf
   sudo named-checkzone smx-lab.internal /etc/bind/db.smx-lab.internal
   ```
4. Si el resultat és `OK`, reinicia el servei: `sudo systemctl restart bind9`.

#### Repte 2: Diagnòstic Integral de Consultes amb `dig`
Des del client Linux o des del mateix servidor, executa les consultes i analitza la resposta:
1. Consulta de registre A del servidor web:
   ```bash
   dig @127.0.0.1 web.smx-lab.internal
   ```
   *Comprova a la sortida:* la secció `ANSWER SECTION`, el valor de TTL (Time to Live) i que el camp `SERVER` siga `127.0.0.1#53`.
2. Consulta de registres de correu MX:
   ```bash
   dig @127.0.0.1 smx-lab.internal MX +noall +answer
   ```
3. Comprovació d'àlies CNAME:
   ```bash
   dig @127.0.0.1 www.smx-lab.internal +noall +answer
   ```
   *Documenta:* Comprova com Bind9 retorna primer el CNAME i tot seguit el registre A associat en una sola resposta.

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura i tipus de registres** | Domina tots els tipus de RR (SOA, NS, A, CNAME, MX, PTR) i el flux recursiu/iteratiu. | Comprèn els registres bàsics A i CNAME però té dificultats amb el format del SOA o MX. | Confon la resolució directa amb la inversa o desconeix el format FQDN. |
| **Configuració de zones a Bind9** | Fitxers de zona impecables, sintaxi validada amb `named-checkzone` i servei actiu. | Crea la zona però oblida el punt final FQDN o el serial no s'incrementa. | Errors de sintaxi que impedeixen arrencar el dimoni `named`. |
| **Auditoria amb eines de diagnòstic** | Interpreta fluidament les respostes de `dig`, flags (`aa`), TTLs i temps de consulta. | Utilitza `nslookup` bàsic però no sap extreure registres MX o SOA amb `dig`. | No sap dirigir consultes cap a un servidor DNS específic amb `@IP`. |
