---
layout: default
title: "UD1 — Introducció i Instal·lació de Sistemes Operatius en Xarxa"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UD1"
---

# 📘 UD1 — Introducció i Instal·lació de Sistemes Operatius en Xarxa (SOR)

La **Unitat Didàctica 1** estableix les diferències arquitectòniques entre un sistema operatiu d'estació de treball (monolloc com Windows 11 o Ubuntu Desktop) i un **Sistema Operatiu en Xarxa (SOR)** dissenyat per operar com a servidor permanent (com **Microsoft Windows Server 2022** o **Ubuntu Server 22.04/24.04 LTS**).

---

## 🏗️ Diferències Clau: Estació de Treball vs Servidor de Xarxa

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arquitectura de Sistemes Operatius en Xarxa: Server vs Workstation</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Comparativa de maquinari corporatiu, serveis ininterromputs i topologia de laboratori virtual</p>
  </div>
  <svg viewBox="0 0 860 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="soxClientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1e40af" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="soxServerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="soxLabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Client Monolloc -->
    <rect x="20" y="25" width="250" height="200" rx="8" fill="url(#soxClientGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="145" y="52" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">💻 ESTACIÓ DE TREBALL (CLIENT)</text>
    <text x="145" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">Windows 11 / Ubuntu Desktop</text>
    <line x1="35" y1="85" x2="255" y2="85" stroke="#334155"/>
    <text x="35" y="108" fill="#cbd5e1" font-size="10.5">• <tspan fill="#38bdf8" font-weight="bold">Interfície:</tspan> GUI gràfica sempre activa</text>
    <text x="35" y="128" fill="#cbd5e1" font-size="10.5">• <tspan fill="#cbd5e1">Usuari: Únic usuari local interactiu</tspan></text>
    <text x="35" y="148" fill="#cbd5e1" font-size="10.5">• <tspan fill="#ef4444" font-weight="bold">Límit:</tspan> Màxim 20 connexions SMB</text>
    <text x="35" y="168" fill="#cbd5e1" font-size="10.5">• <tspan fill="#cbd5e1">Memòria estàndard (sense ECC)</tspan></text>
    <text x="145" y="205" fill="#38bdf8" font-size="10" text-anchor="middle" font-weight="bold">Productivitat d'usuari final</text>

    <!-- Fletxa 1 a 2 -->
    <path d="M 275 110 L 305 110" stroke="#38bdf8" stroke-width="2"/>
    <text x="290" y="100" fill="#38bdf8" font-size="8" text-anchor="middle">Auth</text>
    <path d="M 305 130 L 275 130" stroke="#c084fc" stroke-width="2"/>
    <text x="290" y="145" fill="#c084fc" font-size="8" text-anchor="middle">Serveis</text>

    <!-- Bloc 2: Servidor en Xarxa (SOR) -->
    <rect x="310" y="25" width="260" height="200" rx="8" fill="url(#soxServerGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="440" y="52" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">🏢 SERVIDOR EN XARXA (SOR)</text>
    <text x="440" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">Windows Server / Ubuntu Server</text>
    <line x1="325" y1="85" x2="555" y2="85" stroke="#334155"/>
    <text x="325" y="108" fill="#cbd5e1" font-size="10.5">• <tspan fill="#c084fc" font-weight="bold">Mode:</tspan> Server Core / Consola sense GUI</text>
    <text x="325" y="128" fill="#cbd5e1" font-size="10.5">• <tspan fill="#34d399" font-weight="bold">Concurrència:</tspan> Milers de clients (CAL)</text>
    <text x="325" y="148" fill="#cbd5e1" font-size="10.5">• <tspan fill="#f59e0b" font-weight="bold">Tolerància:</tspan> Memòria ECC + Discs Hot-Swap</text>
    <text x="325" y="168" fill="#cbd5e1" font-size="10.5">• <tspan fill="#c084fc" font-weight="bold">Rols:</tspan> Active Directory, DNS, Samba</text>
    <text x="440" y="205" fill="#c084fc" font-size="10" text-anchor="middle" font-weight="bold">Disponibilitat contínua 24/7/365</text>

    <!-- Fletxa 2 a 3 -->
    <path d="M 575 110 L 605 110" stroke="#c084fc" stroke-width="2"/>
    <text x="590" y="100" fill="#c084fc" font-size="8" text-anchor="middle">Lab</text>
    <path d="M 605 130 L 575 130" stroke="#34d399" stroke-width="2"/>
    <text x="590" y="145" fill="#34d399" font-size="8" text-anchor="middle">VBox</text>

    <!-- Bloc 3: Maqueta de Laboratori Virtual -->
    <rect x="610" y="25" width="230" height="200" rx="8" fill="url(#soxLabGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="725" y="52" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">🧪 TOPOLOGIA LABORATORI</text>
    <text x="725" y="70" fill="#94a3b8" font-size="10" text-anchor="middle">VirtualBox Xarxa Interna</text>
    <line x1="625" y1="85" x2="825" y2="85" stroke="#334155"/>
    <text x="625" y="108" fill="#cbd5e1" font-size="10">• <tspan fill="#34d399" font-weight="bold">DC1:</tspan> 192.168.100.10 (Fixa)</text>
    <text x="625" y="128" fill="#cbd5e1" font-size="10">• <tspan fill="#c084fc" font-weight="bold">SRV-LIN:</tspan> 192.168.100.20</text>
    <text x="625" y="148" fill="#cbd5e1" font-size="10">• <tspan fill="#38bdf8" font-weight="bold">CLI-WIN:</tspan> 192.168.100.50</text>
    <text x="625" y="168" fill="#cbd5e1" font-size="10">• <tspan fill="#f59e0b" font-weight="bold">DNS Client:</tspan> Apunta a .10!</text>
    <text x="725" y="205" fill="#34d399" font-size="10" text-anchor="middle" font-weight="bold">Subxarxa: 192.168.100.0/24</text>

    <!-- Peu informatiu -->
    <rect x="20" y="235" width="820" height="35" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="257" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Regla d'Or del Tècnic de Xarxes: <tspan fill="#f59e0b" font-weight="bold">Un Controlador de Domini MAI ha de tindre IP dinàmica: requereix IP estàtica fixa i documentada.</tspan></text>
  </svg>
</div>

| Característica | Sistema Operatiu Monolloc (Client) | Sistema Operatiu en Xarxa (Servidor) |
| :--- | :--- | :--- |
| **Objectiu Principal** | Productivitat d'un únic usuari local interactiu (ofimàtica, multimèdia, jocs). | Prestació de serveis ininterromputs a múltiples usuaris de xarxa concurrents. |
| **Interfície Gràfica** | GUI rica i pesada sempre activa per defecte. | Sovint sense GUI (*Server Core* a Windows, o consola pura a Linux) per estalviar RAM i reduir la superfície d'atac. |
| **Capacitat de Memòria RAM**| Limitada típicament a 128 GB o 2 TB de RAM. | Suport de fins a **24 TB o 48 TB de memòria RAM** i centenars de nuclis de CPU. |
| **Connexions de Xarxa** | Límit comercial de connexions entrants concurrents (ex: màxim 20 connexions SMB en Windows 11). | Connexions il·limitades gestionades per llicències d'accés de client (**CAL**). |
| **Tolerància a Fallades** | Suport bàsic d'emmagatzematge. | Suport natiu de fonts d'alimentació redundants, memòria ECC (*Error-Correcting Code*), discs en connexió calenta (*Hot-Swap*) i RAID per maquinari. |

---

## 🛠️ Desplegament de Servidors al Laboratori Virtual

En el nostre laboratori d'aprenentatge desplegarem dues màquines virtuals que faran el paper de servidors corporatius sobre Oracle VirtualBox:

```
[ AMFITRIÓ / HOST FÍSIC ]
   │
   ├── [ MV 1: Windows Server 2022 ] ──> IP Estàtica: 192.168.100.10/24 (Controlador de Domini DC1)
   │                                     DNS: 127.0.0.1 | Domini: smx.local
   │
   ├── [ MV 2: Ubuntu Server 24.04 ] ──> IP Estàtica: 192.168.100.20/24 (Servidor Samba / Linux)
   │
   └── [ MV 3: Windows 10/11 Client ] ─> IP Dinàmica per DHCP o 192.168.100.50/24
                                         DNS Primari: 192.168.100.10 (Apunta al DC1!)
```

> [!IMPORTANT]
> **Regla d'Or del Servidor de Domini:**
> Un servidor que haja d'actuar com a Controlador de Domini o servidor de serveis crítics **mai no pot tindre una adreça IP dinàmica**. Ha de tindre una **adreça IP estàtica fixa** perfectament documentada abans de promoure el servei!

---

## 📑 Continguts i Apartats de la Unitat

- [**1.3 Estudi de Compatibilitat i Requeriments de Maquinari**](./ut0103.md)
- [**1.4 Instal·lació de Windows Server 2022 (Pas a pas)**](./ut0104.md)
- [**1.5 Instal·lació d'Ubuntu Server 24.04 LTS (Pas a pas)**](./ut0105.md)
- [**1.6 Connectivitat i Verificació entre Servidor i Clients**](./ut0106.md)

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic
1. **Comparativa Server Core vs Desktop Experience:**
   - En una granja de 20 servidors Windows Server virtualitzats, quina quantitat de memòria RAM s'estalvia en total si s'instal·len en mode *Server Core* (consum típic: ~512 MB de RAM en repòs) en compte de *Desktop Experience* (consum típic: ~2 GB de RAM en repòs)?
   - Quins avantatges té *Server Core* respecte a la periodicitat de reinicis per actualitzacions mensuals (*Patch Tuesday*) de Microsoft?
2. **Diagnòstic d'Adreçament de Xarxa:**
   - La subxarxa privada del laboratori és `192.168.100.0/24`.
     - Quina és la màscara de xarxa en format decimal puntejat?
     - Quantes adreces IP d'amfitrió (*hosts*) útils hi ha disponibles en aquesta xarxa?
     - Quina és l'adreça de difusió (*broadcast*) de la xarxa?
   - Si configurem el servidor Windows Server amb la IP `192.168.100.10/24` i posem com a servidor DNS primari `8.8.8.8` (Google DNS), quin problema crític tindran els clients a l'hora d'intentar unir-se al domini `smx.local`?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes

#### Repte 1: Configuració d'Adreça IP Estàtica amb PowerShell en Windows Server
1. Obre la consola de PowerShell amb privilegis d'administrador al servidor Windows Server 2022.
2. Identifica l'índex de la interfície de xarxa (*ifIndex*):
   ```powershell
   Get-NetAdapter
   ```
3. Assigna l'adreça IP estàtica del servidor, màscara `/24` i porta d'enllaç:
   ```powershell
   New-NetIPAddress -InterfaceIndex 3 -IPAddress 192.168.100.10 -PrefixLength 24 -DefaultGateway 192.168.100.1
   ```
4. Configura el servidor DNS primari apuntant a si mateix (loopback o la seua IP):
   ```powershell
   Set-DnsClientServerAddress -InterfaceIndex 3 -ServerAddresses ("192.168.100.10", "127.0.0.1")
   ```
5. Verifica la configuració completa:
   ```powershell
   Get-NetIPConfiguration
   ```

#### Repte 2: Configuració d'IP Estàtica amb Netplan en Ubuntu Server 24.04
1. Obre el fitxer de configuració de Netplan al servidor Ubuntu Server:
   ```bash
   sudo nano /etc/netplan/00-installer-config.yaml
   ```
2. Modifica el fitxer respectant la indentació estricta de dos espais per nivell:
   ```yaml
   network:
     version: 2
     renderer: networkd
     ethernets:
       enp0s3:
         dhcp4: no
         addresses:
           - 192.168.100.20/24
         routes:
           - to: default
             via: 192.168.100.1
         nameservers:
           addresses: [192.168.100.10, 1.1.1.1]
   ```
3. Aplica els canvis de xarxa i verifica la IP i la taula d'enrutament:
   ```bash
   sudo netplan apply
   ip -br addr show
   ip route show
   ```

#### Repte 3: Verificació de Connectivitat i Desbloqueig d'ICMP al Tallafoc
Per defecte, el tallafoc de Windows Server bloqueja les respostes de ping (*Echo Request*).
1. Intenta fer un ping des d'Ubuntu Server cap al Windows Server: `ping -c 4 192.168.100.10`.
2. Observa si hi ha pèrdua de paquets (100% packet loss) a causa del tallafoc.
3. Al Windows Server, habilita la regla del tallafoc per permetre el protocol ICMPv4 mitjançant PowerShell:
   ```powershell
   Enable-NetFirewallRule -Name "FPS-ICMP4-ERQ-In"
   ```
4. Torna a provar el ping des d'Ubuntu Server i comprova que ara respon amb èxit:
   ```bash
   ping -c 4 192.168.100.10
   ```

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Diferències d'Arquitectura Server vs Client** | Argumenta tècnicament el consum de recursos, mode Server Core i tolerància a fallades (ECC, Hot-swap). | Coneix la diferència bàsica però no sap justificar el mode sense entorn gràfic. | Confon els requeriments d'una estació de treball amb els d'un servidor corporatiu. |
| **Configuració de Xarxa Estàtica** | Configura correctament la IP, màscara, passarel·la i DNS tant en PowerShell com en Netplan sense errors. | Configura la IP mitjançant l'entorn gràfic però té dificultats per fer-ho des de la consola. | No entén la necessitat d'una IP fixa en un servidor o comet errors de sintaxi a Netplan. |
| **Diagnòstic de Connectivitat i Tallafoc** | Identifica el bloqueig d'ICMP pel tallafoc i activa les regles corresponents amb comandes tècniques. | Detecta que no hi ha connectivitat però desactiva completament el tallafoc en compte d'obrir la regla. | No sap interpretar l'eixida de la comanda `ping` ni comprovar la IP de les interfícies. |
