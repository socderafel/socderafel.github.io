---
layout: default
title: "Serveis en Xarxa — UT09 Projecte Integrador i Auditoria de Xarxa"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT09"
---

# UT09 — Projecte Integrador d'Infraestructura i Auditoria de Serveis en Xarxa

L'objectiu final del mòdul de Serveis en Xarxa és la **capacitat d'integrar de forma coherent i resilient** tots els serveis estudiats en un escenari corporatiu real, així com auditar-ne el rendiment i resoldre fallades d'interoperabilitat entre entorns Linux i Windows.

---

## 📌 1. Mapa d'Arquitectura del Projecte Integrador

En una organització interconnectada, els serveis depenen estretament els uns dels altres:

```mermaid
graph TD
    CLI["💻 Equip Client (Windows 11 / Ubuntu Desktop)"] -->|1. Demana configuració IP| DHCP["🖥️ Servidor DHCP (192.168.1.2)"]
    DHCP -->|Retorna IP, Gateway i IP del DNS| CLI
    CLI -->|2. Consulta nom 'www.iesrafel.internal'| DNS["🖥️ Servidor DNS Bind9 (192.168.1.2)"]
    DNS -->|Retorna 192.168.1.10| CLI
    CLI -->|3. Connecta per HTTPS (Port 443)| WEB["🖥️ Servidor Web Apache2 (192.168.1.10)"]
    CLI -->|4. Puja documents per SFTP (Port 22)| SFTP["🖥️ Servidor Fitxers vsftpd/SSH (192.168.1.10)"]
    ADM["👤 Administrador de Sistemes"] -->|5. Gestió remota bastinada per SSH/RDP| S1["Servidors Linux & Windows"]
```

> [!IMPORTANT]
> **Interdependència de Serveis:** Si el servei **DNS** cau o conté errors de sintaxi, els clients no podran carregar la intranet web pel seu nom, el servei de correu no sabrà a quin servidor enviar els missatges i els usuaris no es podran connectar al servidor de fitxers. Per això, el DNS i el DHCP són coneguts com a **serveis d'infraestructura bàsica**.

---

## 📌 2. Auditoria de Xarxa amb Nmap

L'eina **Nmap (*Network Mapper*)** és el programari d'auditoria de xarxa per excel·lència per a descobrir equips actius i verificar quins ports estan oberts a cada servidor:

```bash
# 1. Descobrir quins equips estan encesos a la subxarxa (Ping Sweep)
nmap -sn 192.168.1.0/24

# 2. Escanejar els 100 ports més freqüents d'un servidor
nmap 192.168.1.10

# 3. Escaneig ràpid amb detecció de versions de servei i sistema operatiu
sudo nmap -sS -sV -O 192.168.1.10

# 4. Escaneig complet de tots els 65535 ports TCP
nmap -p- 192.168.1.10

# 5. Escaneig de ports UDP d'infraestructura (DNS 53, DHCP 67, NTP 123)
sudo nmap -sU -p 53,67,123 192.168.1.2
```

### Interpretació dels Estats dels Ports segons Nmap:
- **`open`:** Hi ha un servei o dimoni escoltant en eixe port i acceptant connexions.
- **`closed`:** El paquet arriba a la màquina, però cap servei està escoltant en eixe port (retorna un TCP RST).
- **`filtered`:** Els paquets de sondeig són blocats o descartats per un tallafoc (*Firewall* / UFW) sense rebre resposta.

---

## 📌 3. Captura i Anàlisi de Paquets amb Wireshark

Per a diagnosticar problemes complexos en temps real (com saber per què un client no rep IP de DHCP o per què falla una negociació TLS), s'utilitza l'analitzador de protocols **Wireshark**:

| Servei a Analitzar | Filtre de Visualització a Wireshark | Aspecte Clau a Inspeccionar |
| :--- | :--- | :--- |
| **DHCP** | `bootp` o `dhcp` | Verificar els 4 passos de l'encaixada **DORA** (*Discover, Offer, Request, Ack*). |
| **DNS** | `dns` | Comprovar els camps *Query* (pregunta) i *Answer* (adreça IP retornada pel servidor). |
| **Web** | `http` o `tls` | Inspeccionar les capçaleres HTTP, codis d'estat (200, 404) i el certificat del servidor al *Server Hello*. |
| **Accés Remot** | `tcp.port == 22` | Confirmar que el tràfic SSH és completament inintel·ligible i xifrat. |
| **Ping / Diagnòstic** | `icmp` | Comprovar missatges d'eco *Echo Request* (Type 8) i *Echo Reply* (Type 0). |

---

## 📌 4. Protocol Metodològic de Resolució d'Incidències (*Troubleshooting*)

Quan un client comunica que «no funciona la xarxa o el servei», el tècnic de SMX ha de seguir una metodologia deductiva de baix a dalt basada en el model OSI:

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">L'Escala Metodològica de Diagnòstic de Baix a Dalt (OSI)</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Protocol deductiu d'aïllament d'avaries per capes per a evitar pèrdues de temps</p>
  </div>
  <svg viewBox="0 0 860 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="l1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="l3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="l4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="l7Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Pas 1 -->
    <rect x="20" y="25" width="190" height="180" rx="8" fill="url(#l1Grad)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="50" cy="55" r="14" fill="#0284c7"/>
    <text x="50" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">1</text>
    <text x="75" y="52" fill="#38bdf8" font-size="12" font-weight="bold">FÍSICA / ENLLAÇ</text>
    <text x="75" y="67" fill="#94a3b8" font-size="9">Capa 1 i 2</text>
    <line x1="35" y1="80" x2="195" y2="80" stroke="#334155"/>
    <text x="35" y="102" fill="#cbd5e1" font-size="9.5">• LED d'enllaç al switch?</text>
    <text x="35" y="122" fill="#cbd5e1" font-size="9.5">• Cable RJ45 connectat?</text>
    <text x="35" y="142" fill="#cbd5e1" font-size="9.5">• Té IP vàlida (no APIPA)?</text>
    <text x="35" y="165" fill="#38bdf8" font-size="9" font-family="monospace">ip link / ip a</text>
    <text x="35" y="185" fill="#38bdf8" font-size="9" font-family="monospace">ipconfig /all</text>

    <!-- Fletxa 1-2 -->
    <path d="M 215 115 L 235 115" stroke="#64748b" stroke-width="2"/>

    <!-- Pas 2 -->
    <rect x="240" y="25" width="190" height="180" rx="8" fill="url(#l3Grad)" stroke="#34d399" stroke-width="1.5"/>
    <circle cx="270" cy="55" r="14" fill="#059669"/>
    <text x="270" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">2</text>
    <text x="295" y="52" fill="#34d399" font-size="12" font-weight="bold">ENCAMINAMENT</text>
    <text x="295" y="67" fill="#94a3b8" font-size="9">Capa 3 (IP / ICMP)</text>
    <line x1="255" y1="80" x2="415" y2="80" stroke="#334155"/>
    <text x="255" y="102" fill="#cbd5e1" font-size="9.5">• Arriba ping a gateway?</text>
    <text x="255" y="122" fill="#cbd5e1" font-size="9.5">• Hi ha ruta per defecte?</text>
    <text x="255" y="142" fill="#cbd5e1" font-size="9.5">• Arriba ping a 8.8.8.8?</text>
    <text x="255" y="165" fill="#34d399" font-size="9" font-family="monospace">ping 192.168.1.1</text>
    <text x="255" y="185" fill="#34d399" font-size="9" font-family="monospace">ip route / traceroute</text>

    <!-- Fletxa 2-3 -->
    <path d="M 435 115 L 455 115" stroke="#64748b" stroke-width="2"/>

    <!-- Pas 3 -->
    <rect x="460" y="25" width="180" height="180" rx="8" fill="url(#l4Grad)" stroke="#fbbf24" stroke-width="1.5"/>
    <circle cx="490" cy="55" r="14" fill="#d97706"/>
    <text x="490" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">3</text>
    <text x="515" y="52" fill="#fbbf24" font-size="12" font-weight="bold">TRANSPORT / FW</text>
    <text x="515" y="67" fill="#94a3b8" font-size="9">Capa 4 (TCP / UDP)</text>
    <line x1="475" y1="80" x2="625" y2="80" stroke="#334155"/>
    <text x="475" y="102" fill="#cbd5e1" font-size="9.5">• Està el port obert?</text>
    <text x="475" y="122" fill="#cbd5e1" font-size="9.5">• El talla el tallafocs?</text>
    <text x="475" y="142" fill="#cbd5e1" font-size="9.5">• Sòcol en escolta?</text>
    <text x="475" y="165" fill="#fbbf24" font-size="9" font-family="monospace">nc -zv IP 80</text>
    <text x="475" y="185" fill="#fbbf24" font-size="9" font-family="monospace">sudo ufw status</text>

    <!-- Fletxa 3-4 -->
    <path d="M 645 115 L 665 115" stroke="#64748b" stroke-width="2"/>

    <!-- Pas 4 -->
    <rect x="670" y="25" width="170" height="180" rx="8" fill="url(#l7Grad)" stroke="#c084fc" stroke-width="1.5"/>
    <circle cx="700" cy="55" r="14" fill="#7c3aed"/>
    <text x="700" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">4</text>
    <text x="725" y="52" fill="#c084fc" font-size="12" font-weight="bold">APLICACIÓ</text>
    <text x="725" y="67" fill="#94a3b8" font-size="9">Capa 7 (Serveis)</text>
    <line x1="685" y1="80" x2="825" y2="80" stroke="#334155"/>
    <text x="685" y="102" fill="#cbd5e1" font-size="9.5">• El DNS resol el nom?</text>
    <text x="685" y="122" fill="#cbd5e1" font-size="9.5">• Servei en execució?</text>
    <text x="685" y="142" fill="#cbd5e1" font-size="9.5">• Errors al registre?</text>
    <text x="685" y="165" fill="#c084fc" font-size="9" font-family="monospace">dig @DNS nom</text>
    <text x="685" y="185" fill="#c084fc" font-size="9" font-family="monospace">journalctl -u servei</text>

    <!-- Barra Inferior de Diagnòstic -->
    <rect x="20" y="215" width="820" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="237" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Regla d'or del tècnic de SMX: <tspan fill="#f59e0b" font-weight="bold">Mai reiniciar un servidor sense abans consultar els registres (logs) del sistema!</tspan></text>
  </svg>
</div>

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi Metodològic de Diagnòstic i Auditoria
1. **Interpretació dels Estats de Nmap:**
   - Quan s'audita un servidor amb `nmap -p 80,443,22 192.168.1.10`, quina diferència física i lògica hi ha entre que Nmap reporte:
     - `80/tcp open`: Què significa respecte al dimoni Apache?
     - `22/tcp closed`: Per què sabem que el paquet ha arribat a la màquina però no hi ha cap servei actiu?
     - `443/tcp filtered`: Quin dispositiu o regla està descartant el paquet silenciosament?
2. **Fallades en Cascada per Serveis d'Infraestructura:**
   - Si el servei **DNS** Bind9 cau inesperadament, per què els clients continuen podent fer `ping 8.8.8.8` però afirmen desesperats que «s'ha caigut Internet» i que no poden entrar a cap aplicació corporativa?
   - Si el servidor **DHCP** es queda sense adreces lliures al seu rang (*pool exhaustion*), quin símptoma immediat experimentaran els nous ordinadors que s'encenguen al centre?

### 💻 Bloc B: Reptes Pràctics del Projecte Integrador

#### Repte 1: Auditoria Perimetral Integral amb Nmap
1. Des de la màquina d'auditoria (Ubuntu Desktop o Kali), llença un escaneig SYN furtiu amb detecció de versions sobre el servidor de serveis integrats:
   ```bash
   sudo nmap -sS -sV -O -p 21,22,25,53,67,80,443,143,3128,3306 192.168.1.10 -oN auditoria_serveis.txt
   ```
2. Analitza el fitxer `auditoria_serveis.txt` i completa la memòria tècnica identificant:
   - Quins serveis estan actius i quina versió exacta reporten.
   - Si hi ha algun port obert innecessari (per exemple, el port 3306 de MySQL accessible públicament) que supose un risc greu de seguretat.

#### Repte 2: Resolució d'Incidències (*Troubleshooting Lab*)
En aquest repte simulat, un usuari informa que **«no pot accedir a la intranet web http://www.iesrafel.internal»**:
1. Executa el protocol metòdic seguint l'escala OSI:
   - **Pas 1 (IP):** Comprova la teua pròpia adreça amb `ip a`. Assegura't que no tens una IP APIPA `169.254.x.x`.
   - **Pas 2 (Connectivitat):** Fes `ping 192.168.1.10`. Respon el servidor físic?
   - **Pas 3 (DNS):** Fes `dig @192.168.1.10 www.iesrafel.internal`. Resol correctament la IP o torna `NXDOMAIN` / `SERVFAIL`?
   - **Pas 4 (Port):** Comprova amb `nc -zv 192.168.1.10 80` si el port està obert o tallat per UFW.
   - **Pas 5 (Servei):** Al servidor, executa `sudo systemctl status apache2`. Està actiu o caigut per un error de sintaxi?
2. Redacta l'informe d'incidència detallant la causa arrel detectada i la mesura correctora aplicada.

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació del Projecte

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Metodologia de resolució OSI** | Aplica l'escalat deductiu de capes 1 a 7 sense salts aleatoris i troba l'arrel ràpidament. | Troba l'avaria però fa proves desordenades abans de comprovar la capa de xarxa o DNS. | Intenta reiniciar equips aleatòriament sense diagnosticar registres ni ports. |
| **Auditoria amb Nmap i Wireshark** | Executa escanejos precisos, interpreta estats (open/filtered) i captura tràfic amb èxit. | Executa `nmap` però no comprèn la diferència entre ports tancats i filtrats per tallafocs. | No sap utilitzar Nmap o necessita paràmetres guiats constantment. |
| **Memòria tècnica del Projecte Integrador** | Documenta el mapa de xarxa, taula d'adreçament, matriu de serveis i proves de validació. | La memòria recull la configuració bàsica però manquen diagrames de flux o proves de càrrega. | Memòria incompleta sense justificació de decisions de disseny. |
