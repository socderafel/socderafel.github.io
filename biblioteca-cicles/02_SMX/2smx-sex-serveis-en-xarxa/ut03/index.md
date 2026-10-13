---
layout: default
title: "Serveis en Xarxa — UT03 Servei de Configuració Dinàmica (DHCP)"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT03"
---

# UT03 — Servei d'Assignació Dinàmica d'Adreces (DHCP)

El protocol **DHCP** (*Dynamic Host Configuration Protocol*) permet assignar automàticament paràmetres de xarxa (adreça IP, màscara, porta d'enllaç i servidors DNS) als dispositius que es connecten a una xarxa local, eliminant la necessitat de configuracions manuals propenses a errors i conflictes d'IPs duplicades.

---

## 📌 1. El Procés d'Encaixada DORA

Quan un client s'encén o es connecta per cable o Wi-Fi, no disposa de cap adreça IP configurada. Per a obtindre'n una, s'executa el protocol de **4 passos conegut com a DORA**:

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">L'Encaixada DHCP DORA i Cicle de Concessió</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Protocol de negociació en 4 etapes per a l'adquisició automàtica de paràmetres de xarxa</p>
  </div>
  <svg viewBox="0 0 860 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="offGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="reqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="ackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Pas 1: Discover -->
    <rect x="20" y="25" width="190" height="160" rx="8" fill="url(#discGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="50" cy="55" r="14" fill="#0284c7"/>
    <text x="50" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">D</text>
    <text x="75" y="52" fill="#38bdf8" font-size="12" font-weight="bold">DISCOVER</text>
    <text x="75" y="67" fill="#94a3b8" font-size="9">Difusió (Broadcast)</text>
    <line x1="35" y1="80" x2="195" y2="80" stroke="#334155"/>
    <text x="35" y="100" fill="#cbd5e1" font-size="9.5">• Origen: 0.0.0.0:68</text>
    <text x="35" y="118" fill="#cbd5e1" font-size="9.5">• Destí: 255.255.255.255:67</text>
    <text x="35" y="136" fill="#cbd5e1" font-size="9.5">• Pregunta: Hi ha cap servidor?</text>
    <text x="35" y="156" fill="#38bdf8" font-size="9.5" font-weight="bold">Client sense IP prèvia</text>

    <!-- Fletxa 1-2 -->
    <path d="M 215 105 L 235 105" stroke="#64748b" stroke-width="2"/>

    <!-- Pas 2: Offer -->
    <rect x="240" y="25" width="190" height="160" rx="8" fill="url(#offGrad)" stroke="#34d399" stroke-width="1.5"/>
    <circle cx="270" cy="55" r="14" fill="#059669"/>
    <text x="270" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">O</text>
    <text x="295" y="52" fill="#34d399" font-size="12" font-weight="bold">OFFER</text>
    <text x="295" y="67" fill="#94a3b8" font-size="9">Proposta d'adreça</text>
    <line x1="255" y1="80" x2="415" y2="80" stroke="#334155"/>
    <text x="255" y="100" fill="#cbd5e1" font-size="9.5">• Proposa IP: 192.168.1.150</text>
    <text x="255" y="118" fill="#cbd5e1" font-size="9.5">• Màscara: 255.255.255.0</text>
    <text x="255" y="136" fill="#cbd5e1" font-size="9.5">• Gateway: 192.168.1.1</text>
    <text x="255" y="156" fill="#34d399" font-size="9.5" font-weight="bold">DNS: 192.168.1.10</text>

    <!-- Fletxa 2-3 -->
    <path d="M 435 105 L 455 105" stroke="#64748b" stroke-width="2"/>

    <!-- Pas 3: Request -->
    <rect x="460" y="25" width="180" height="160" rx="8" fill="url(#reqGrad)" stroke="#fbbf24" stroke-width="1.5"/>
    <circle cx="490" cy="55" r="14" fill="#d97706"/>
    <text x="490" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">R</text>
    <text x="515" y="52" fill="#fbbf24" font-size="12" font-weight="bold">REQUEST</text>
    <text x="515" y="67" fill="#94a3b8" font-size="9">Acceptació formal</text>
    <line x1="475" y1="80" x2="625" y2="80" stroke="#334155"/>
    <text x="475" y="100" fill="#cbd5e1" font-size="9.5">• Envia en broadcast</text>
    <text x="475" y="118" fill="#cbd5e1" font-size="9.5">• Notifica a altres servidors</text>
    <text x="475" y="136" fill="#cbd5e1" font-size="9.5">• Tria oficialment l'oferta</text>
    <text x="475" y="156" fill="#fbbf24" font-size="9.5" font-weight="bold">Confirma IP triada</text>

    <!-- Fletxa 3-4 -->
    <path d="M 645 105 L 665 105" stroke="#64748b" stroke-width="2"/>

    <!-- Pas 4: Ack -->
    <rect x="670" y="25" width="170" height="160" rx="8" fill="url(#ackGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <circle cx="700" cy="55" r="14" fill="#7c3aed"/>
    <text x="700" y="60" fill="#ffffff" font-size="12" text-anchor="middle" font-weight="bold">A</text>
    <text x="725" y="52" fill="#c084fc" font-size="12" font-weight="bold">ACK</text>
    <text x="725" y="67" fill="#94a3b8" font-size="9">Concessió final</text>
    <line x1="685" y1="80" x2="825" y2="80" stroke="#334155"/>
    <text x="685" y="100" fill="#cbd5e1" font-size="9.5">• Concessió concedida</text>
    <text x="685" y="118" fill="#cbd5e1" font-size="9.5">• Inicia Lease Time</text>
    <text x="685" y="136" fill="#cbd5e1" font-size="9.5">• Temporitzadors T1 i T2</text>
    <text x="685" y="156" fill="#34d399" font-size="9.5" font-weight="bold">✅ Client configurat!</text>

    <!-- Barra Inferior de Renovació -->
    <rect x="20" y="200" width="820" height="65" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="40" y="224" fill="#38bdf8" font-size="11" font-weight="bold">CICLE DE RENOVACIÓ DEL PRÉSTEC (LEASE TIME):</text>
    <text x="40" y="246" fill="#cbd5e1" font-size="10.5">• <tspan fill="#34d399" font-weight="bold">T1 (50%):</tspan> Renovació silenciosa Unicast directa | • <tspan fill="#fbbf24" font-weight="bold">T2 (87.5%):</tspan> Reenganxament Broadcast per fallada del servidor | • <tspan fill="#ef4444" font-weight="bold">100%:</tspan> Expiració i caiguda en APIPA (169.254.x.x)</text>
  </svg>
</div>

### Detall dels 4 missatges:
1. **DHCPDISCOVER:** El client envia un paquet UDP d'origen `0.0.0.0:68` i destí `255.255.255.255:67` en difusió (*broadcast*) a tota la xarxa local preguntant si hi ha algun servidor DHCP disponible.
2. **DHCPOFFER:** Els servidors DHCP que han rebut la petició reserven temporalment una adreça lliure del seu rang (*pool*) i li proposen al client la IP juntament amb les opcions de xarxa.
3. **DHCPREQUEST:** El client tria una de les ofertes rebudes (habitualment la primera que arriba) i envia un missatge en difusió confirmant quina oferta ha acceptat. En ser un broadcast, els altres servidors DHCP saben que les seues ofertes han sigut rebutjades i poden alliberar les seues IPs.
4. **DHCPACK (*Acknowledgment*):** El servidor seleccionat envia la confirmació definitiva amb tots els paràmetres i arrenca el comptador de concessió (*Lease Time*).

---

## 📌 2. El Cicle de Vida del Préstec (*Lease Time*)

L'adreça IP no es regala al client, sinó que se li **cedeix en règim de préstec temporal**:

```mermaid
flowchart TD
    A["Inici del Préstec (Temps = 0)<br/>IP concedida per T hores"] --> B["Temps T1 (50% del Lease)<br/>Envia DHCPREQUEST Unicast al servidor original"]
    B -->|Respon DHCPACK| A
    B -->|No Respon (Servidor caigut)| C["Temps T2 (87.5% del Lease)<br/>Envia DHCPREQUEST Broadcast a qualsevol servidor"]
    C -->|Respon qualsevol servidor| A
    C -->|Arriba al 100% sense resposta| D["Expiració (100%)<br/>El client perd la IP i genera IP APIPA 169.254.x.x"]
```

- **Renovació al $50\%$ ($T_1$):** Si el préstec és de 8 hores, quan passen 4 hores el client intenta renovar silenciosament per comunicació directa *unicast*.
- **Reenganxament al $87{,}5\%$ ($T_2$):** A les 7 hores, si el servidor principal no ha contestat, el client demana auxili per difusió (*broadcast*) a qualsevol altre servidor de la xarxa.
- **Fallada total i APIPA:** Si el préstec expira completament, el client perd la configuració i els sistemes operatius assignen una adreça de l'espai **APIPA (*Automatic Private IP Addressing*): `169.254.0.0/16`**, que només serveix per a comunicar-se amb màquines del mateix switch sense sortida a Internet.

---

## 📌 3. Reserves d'IP per MAC i Agent de Retransmissió (*Relay*)

### Reserves Estàtiques:
Quan volem que un dispositiu tinga sempre la mateixa IP fixa (com una impressora de xarxa o una càmera IP) però sense configurar-la a mà a la seua pantalla, el servidor DHCP associa permanentment l'**adreça física MAC** de la targeta de xarxa a una IP reservada fora del rang dinàmic general.

### L'Agent de Retransmissió DHCP (*DHCP Relay Agent*):
Com que els paquets *Broadcast* no poden travessar un router, si tenim diverses VLANs o subxarxes caldria instal·lar un servidor DHCP físic a cadascuna. Per a estalviar costos:
- S'activa un **Agent Relay** al router (a Cisco s'utilitza la comanda `ip helper-address <IP_Servidor_DHCP>`).
- L'agent rep el broadcast del client a la VLAN d'origen i el reenvia com a paquet *Unicast* directe cap al servidor DHCP corporatiu.

---

## 📌 4. Configuració Pràctica en Ubuntu Server (`isc-dhcp-server`)

```bash
# 1. Instal·lar el servei en Ubuntu Server
sudo apt update && sudo apt install isc-dhcp-server -y

# 2. Especificar la interfície de xarxa d'escolta a /etc/default/isc-dhcp-server
# INTERFACESv4="enp0s3"
```

### Configuració del fitxer principal `/etc/dhcp/dhcpd.conf`:
```text
# Paràmetres globals
default-lease-time 28800;    # 8 hores (en segons)
max-lease-time 86400;        # 24 hores

# Definició de la subxarxa
subnet 192.168.1.0 netmask 255.255.255.0 {
    range 192.168.1.100 192.168.1.200;                # Rang dinàmic
    option routers 192.168.1.1;                         # Porta d'enllaç
    option domain-name-servers 192.168.1.10, 8.8.8.8;  # Servidors DNS
    option domain-name "iesrafel.internal";             # Sufix DNS
}

# Reserva d'adreça estàtica per a la impressora d'administració
host impressora-secretaria {
    hardware ethernet 00:11:22:33:44:55;
    fixed-address 192.168.1.25;
}
```

```bash
# Comprovar la sintaxi del fitxer
sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf

# Iniciar el servei i comprovar l'estat
sudo systemctl restart isc-dhcp-server
sudo systemctl status isc-dhcp-server

# Visualitzar les concessions de préstec actives
cat /var/lib/dhcp/dhcpd.leases
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Anàlisi de Concessions, Temporitzadors i Seguretat DHCP
1. **Càlcul de Temporitzadors del Cicle de Vida (Lease Time):**
   - Una empresa configura un temps de concessió per defecte de **10 hores** ($36.000\text{ segons}$) a la seua xarxa d'oficines.
   - **Qüestió A:** A quina hora exacta començarà el client el procés de renovació silenciosa $T_1$ si va obtindre la IP a les 08:00 AM? Quin tipus de paquet (Unicast o Broadcast) enviarà?
   - **Qüestió B:** Si el servidor DHCP s'apaga inesperadament a les 11:00 AM, a quina hora arribarà el client al temporitzador $T_2$ ($87{,}5\%$ del préstec)? Quin tipus de paquet enviarà aleshores?
   - **Qüestió C:** Què passarà a les 18:00 h quan el préstec expire al $100\%$? Quina adreça IP s'assignarà automàticament el sistema operatiu i quin abast de connectivitat tindrà?
2. **Amenaces en DHCP: El Servidor Fals (*DHCP Rogue*):**
   - Si un usuari maliciós connecta un router domèstic amb DHCP actiu a una roseta de paret de l'empresa, quin perill hi ha que responga amb un DHCPOFFER abans que el servidor legítim?
   - Quina tècnica de seguretat en commutadors (*Switches*) gestionables anomenada **DHCP Snooping** permet marcar els ports d'accés com a "no confiats" (*untrusted*) per a bloquejar aquests atacs?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Captura de Tràfic

#### Repte 1: Configuració d'un Àmbit DHCP amb Reserva per MAC
A la màquina Ubuntu Server de laboratori:
1. Edita el fitxer `/etc/dhcp/dhcpd.conf` per a crear un àmbit nou per a la xarxa `192.168.10.0/24`:
   - Rang d'adreces dinàmiques: `192.168.10.50` a `192.168.10.150`.
   - Porta d'enllaç per defecte: `192.168.10.1`.
   - Servidors DNS: `192.168.10.10` i `1.1.1.1`.
   - Temps de concessió: 4 hores (per defecte) i 8 hores (màxim).
2. Afegeix una reserva estàtica per a un client de proves associant la seua adreça física MAC (obtinguda amb `ip link` o `getmac`) a la IP fixa `192.168.10.25`.
3. Valida la sintaxi del fitxer: `sudo dhcpd -t -cf /etc/dhcp/dhcpd.conf`.
4. Reinicia el servei: `sudo systemctl restart isc-dhcp-server`.

#### Repte 2: Captura en Temps Real dels 4 Missatges DORA amb `tcpdump`
1. Al servidor, inicia la captura de paquets en segon pla filtrant pels ports de DHCP:
   ```bash
   sudo tcpdump -i enp0s3 -n -vvv "port 67 or port 68"
   ```
2. Des de la màquina client (Ubuntu Desktop o Windows), força l'alliberament i la renovació:
   - **En Linux:**
     ```bash
     sudo dhclient -r enp0s3 && sudo dhclient -v enp0s3
     ```
   - **En Windows (CMD com a Administrador):**
     ```cmd
     ipconfig /release
     ipconfig /renew
     ```
3. Observa la terminal del servidor i comprova que es mostren correlativament els 4 passos:
   - `BOOTP/DHCP, Request from 00:xx... (DHCP-Discover)`
   - `BOOTP/DHCP, Reply, length ... (DHCP-Offer)`
   - `BOOTP/DHCP, Request from 00:xx... (DHCP-Request)`
   - `BOOTP/DHCP, Reply, length ... (DHCP-ACK)`
4. Al servidor, obre el fitxer de concessions actives:
   ```bash
   cat /var/lib/dhcp/dhcpd.leases
   ```
   Comprova que la IP del client apareix amb la seua MAC, data d'inici i data de caducitat del préstec.

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Comprensió del protocol DORA** | Domina la seqüència Broadcast/Unicast dels 4 missatges, T1/T2, APIPA i mitigació de Rogue. | Coneix els noms DORA però confon quan s'utilitza difusió o comunicació directa. | Desconeix el rol dels ports UDP 67/68 o el concepte de préstec temporal. |
| **Configuració de l'àmbit i reserves** | Configura correctament rang, màscara, routers, DNS i reserva per MAC sense errors. | Configura el rang dinàmic però falla en la sintaxi de la reserva estàtica `fixed-address`. | Fitxer `dhcpd.conf` amb errors de sintaxi o servei aturat. |
| **Captura i verificació pràctica** | Captura els paquets amb `tcpdump`/Wireshark i audita el fitxer de leases amb precisió. | Renova la IP des del client però no sap interpretar la captura de paquets. | No aconsegueix que el client reba adreça IP del servidor de laboratori. |
