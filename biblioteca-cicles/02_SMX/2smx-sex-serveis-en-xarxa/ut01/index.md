---
layout: default
title: "Serveis en Xarxa — UT01 Model Client-Servidor i Arquitectura de Xarxa"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT01"
---

# UT01 — Introducció als Serveis en Xarxa i Arquitectura Client-Servidor

Els serveis en xarxa són el conjunt d'aplicacions i protocols que fan possible que múltiples dispositius interconnectats compartisquen recursos, fitxers, comunicacions i capacitats de càlcul de forma transparent.

---

## 📌 1. Models d'Arquitectura en Xarxa

En l'àmbit de les telecomunicacions i la informàtica corporativa predominen dos models fonamentals:

```mermaid
graph TD
    subgraph "🏛️ MODEL CLIENT-SERVIDOR"
        C1["💻 Client A"] -->|Sol·licitud (Request)| S["🖥️ SERVIDOR CENTRAL<br/>(Servei en escolta permanent)"]
        C2["💻 Client B"] -->|Sol·licitud| S
        C3["📱 Client C"] -->|Sol·licitud| S
        S -->|Resposta (Response)| C1
        S -->|Resposta| C2
        S -->|Resposta| C3
    end

    subgraph "🤝 MODEL ENTRE IGUALS (PEER-TO-PEER / P2P)"
        P1["💻 Node 1"] <--> P2["💻 Node 2"]
        P2 <--> P3["💻 Node 3"]
        P3 <--> P1
    end
```

### Comparativa Tècnica:
- **Client-Servidor:** Els rols estan clarament diferenciats. El **servidor** és un equip amb alta capacitat que executa un programa en segon pla (*dimoni* en Linux o *servei* en Windows) esperant peticions d'un o múltiples **clients**. Centralitza la gestió d'usuaris, la seguretat i les còpies de seguretat.
- **P2P (Peer-to-Peer):** Tots els nodes de la xarxa actuen simultàniament com a clients i servidors. És descentralitzat i resilient a fallades individuals, però complex d'administrar i assegurar en una empresa.

---

## 📌 2. Sòcols de Xarxa, Ports i la Capa de Transport

Perquè un paquet de dades arribe exactament a l'aplicació que li correspon dins d'una màquina, s'utilitza el concepte de **Sòcol de Xarxa (*Socket*)**:

$$\boxed{\text{Sòcol} = \text{Adreça IP} + \text{Port de Transport}}$$

Per exemple, si el servidor té la IP `192.168.1.100` i ofereix servei web segur, el sòcol d'escolta és: `192.168.1.100:443`.

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Anatomia d'un Sòcol de Xarxa (Network Socket)</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Mecanisme d'encaminament des de la interfície de xarxa fins al procés intern del sistema operatiu</p>
  </div>
  <svg viewBox="0 0 860 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="ipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="portGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="sockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Adreça IP -->
    <rect x="30" y="30" width="230" height="130" rx="8" fill="url(#ipGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <circle cx="65" cy="65" r="18" fill="#0284c7"/>
    <text x="65" y="71" fill="#ffffff" font-size="16" text-anchor="middle" font-weight="bold">🌐</text>
    <text x="95" y="60" fill="#38bdf8" font-size="14" font-weight="bold">ADREÇA IP</text>
    <text x="95" y="78" fill="#94a3b8" font-size="10">Capa 3 (Xarxa)</text>
    <line x1="45" y1="95" x2="245" y2="95" stroke="#334155"/>
    <text x="50" y="118" fill="#e2e8f0" font-size="11" font-weight="bold">192.168.1.100</text>
    <text x="50" y="140" fill="#94a3b8" font-size="10">Identifica l'equip amfitrió (Host)</text>

    <!-- Signe Més -->
    <text x="285" y="105" fill="#f8fafc" font-size="28" text-anchor="middle" font-weight="bold">+</text>

    <!-- Bloc 2: Port de Transport -->
    <rect x="310" y="30" width="230" height="130" rx="8" fill="url(#portGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <circle cx="345" cy="65" r="18" fill="#7c3aed"/>
    <text x="345" y="71" fill="#ffffff" font-size="16" text-anchor="middle" font-weight="bold">🔌</text>
    <text x="375" y="60" fill="#c084fc" font-size="14" font-weight="bold">PORT DE TRANSPORT</text>
    <text x="375" y="78" fill="#94a3b8" font-size="10">Capa 4 (TCP / UDP)</text>
    <line x1="325" y1="95" x2="525" y2="95" stroke="#334155"/>
    <text x="330" y="118" fill="#e2e8f0" font-size="11" font-weight="bold">:443 (HTTPS)</text>
    <text x="330" y="140" fill="#94a3b8" font-size="10">Canalitza cap al procés en execució</text>

    <!-- Signe Igual -->
    <text x="565" y="105" fill="#f8fafc" font-size="28" text-anchor="middle" font-weight="bold">=</text>

    <!-- Bloc 3: Sòcol Resultant -->
    <rect x="590" y="30" width="240" height="130" rx="8" fill="url(#sockGrad)" stroke="#34d399" stroke-width="1.5"/>
    <circle cx="625" cy="65" r="18" fill="#059669"/>
    <text x="625" y="71" fill="#ffffff" font-size="16" text-anchor="middle" font-weight="bold">⚡</text>
    <text x="655" y="60" fill="#34d399" font-size="14" font-weight="bold">SÒCOL (SOCKET)</text>
    <text x="655" y="78" fill="#94a3b8" font-size="10">Punt d'extrem de connexió</text>
    <line x1="605" y1="95" x2="815" y2="95" stroke="#334155"/>
    <text x="610" y="118" fill="#34d399" font-size="12" font-weight="bold">192.168.1.100:443</text>
    <text x="610" y="140" fill="#cbd5e1" font-size="10">Enllaç directe amb el dimoni Apache2</text>

    <!-- Barra Inferior de Serveis -->
    <rect x="30" y="180" width="800" height="60" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="50" y="205" fill="#38bdf8" font-size="11" font-weight="bold">Rangs IANA:</text>
    <text x="140" y="205" fill="#cbd5e1" font-size="10.5">0-1023 (Ben Coneguts: SSH 22, DNS 53, HTTP 80) | 1024-49151 (Registrats: MySQL 3306, RDP 3389) | 49152-65535 (Dinàmics / Efímers)</text>
    <text x="50" y="225" fill="#94a3b8" font-size="10">Comanda d'auditoria de sòcols oberts en Linux: <tspan fill="#f59e0b" font-family="monospace">sudo ss -tulpn</tspan> | En Windows: <tspan fill="#f59e0b" font-family="monospace">netstat -ano | findstr LISTENING</tspan></text>
  </svg>
</div>

### Classificació dels Ports segons la IANA ($0$ a $65535$):
1. **Ports Ben Coneguts (*Well-Known Ports*, $0 - 1023$):** Reservats per a serveis d'infraestructura estàndard del sistema. Requereixen privilegis d'administrador (`root` / `SYSTEM`) per a obrir-los:
   - `20 / 21`: FTP (Transferència de fitxers)
   - `22`: SSH (Consola remota segura)
   - `25`: SMTP (Enviament de correu)
   - `53`: DNS (Resolució de noms)
   - `67 / 68`: DHCP (Configuració IP dinàmica)
   - `80`: HTTP (Navegació web)
   - `110`: POP3 (Descàrrega de correu)
   - `143`: IMAP (Bústia de correu en xarxa)
   - `443`: HTTPS (Navegació web xifrada amb TLS)
2. **Ports Registrats ($1024 - 49151$):** Assignats per la IANA a aplicacions específiques comercials o de base de dades (p. ex., MySQL `3306`, RDP `3389`, PostgreSQL `5432`, Proxy Squid `3128`).
3. **Ports Dinàmics / Privats ($49152 - 65535$):** Assignats automàticament pel sistema operatiu del client com a ports efímers d'origen per a rebre les respostes dels servidors.

---

## 📌 3. Protocols de Transport: TCP vs UDP

| Característica | TCP (*Transmission Control Protocol*) | UDP (*User Datagram Protocol*) |
| :--- | :--- | :--- |
| **Connexió** | **Orientat a connexió** (*3-Way Handshake* SYN-SYN/ACK-ACK) | **Sense connexió** (Enviament directe de datagrames) |
| **Fiabilitat** | **100% fiable**: Reordena paquets i retransmet els perduts | No garanteix recepció ni ordre |
| **Control de flux** | Sí (Finestra lliscant i control de congestió) | No |
| **Capçalera** | Gran (20 bytes mínim) | Lleugera (8 bytes) |
| **Velocitat** | Menor velocitat per control d'errors | **Molt alta velocitat i baixa latència** |
| **Usos típics** | Web (HTTP/S), fitxers (FTP/SSH), correu (SMTP) | DNS ràpid, Streaming en directe, VoIP, jocs en línia |

---

## 📌 4. Gestió Pràctica de Serveis i Dimonis

### Administració en Linux mitjançant `systemd`:
Els serveis s'executen com a dimonis gestionats per l'ordre `systemctl`:

```bash
# Consultar si un servei (p. ex., ssh) està en execució
sudo systemctl status ssh

# Iniciar, aturar o reiniciar un servei
sudo systemctl start ssh
sudo systemctl stop ssh
sudo systemctl restart ssh

# Habilitar o deshabilitar perquè arrenque automàticament amb el sistema
sudo systemctl enable ssh
sudo systemctl disable ssh

# Inspeccionar ports i sòcols en escolta al servidor
sudo ss -tulpn
```

### Administració en Windows Server mitjançant PowerShell:
```powershell
# Obtenir la llista de serveis en execució
Get-Service | Where-Object Status -eq "Running"

# Reiniciar el servei de DNS o DHCP
Restart-Service -Name "DNS"

# Veure les connexions actives i ports d'escolta
netstat -ano | Select-String "LISTENING"
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Qüestions de Comprensió i Mapeig de Sòcols
1. **El Concepte de Tupla de 5 Elements (*5-Tuple*):** En una xarxa corporativa, un servidor web allotja la pàgina corporativa escoltant al sòcol `192.168.1.10:443`.
   - Si 50 clients diferents de la xarxa local es connecten alhora a aquesta mateixa web, com sap el sistema operatiu del servidor a quin client correspon cada paquet que arriba al port 443?
   - Quins són els 5 camps que defineixen de forma unívoca qualsevol sessió de comunicació TCP?
2. **Jerarquia de Privilegis en Ports IANA:**
   - Si un programador vol iniciar un servidor web de proves sense privilegis d'administrador (`root`), per què el sistema operatiu li denegarà obrir el port 80 o el port 443?
   - A quin rang de ports (ports registrats o privats) haurà de reconfigurar la seua aplicació (per exemple, el port 8080 o 3000) per a poder arrencar-la com a usuari sense privilegis?

### 💻 Bloc B: Reptes Pràctics de Laboratori i Administració

#### Repte 1: Creació i Control d'un Servei Natiu amb `systemd` en Linux
En aquest laboratori configurarem un servei real en segon pla gestionat pel nucli d'Ubuntu Server:

1. Crea un script executable a `/opt/servei_eco.sh` que escolte peticions al port 9000 utilitzant `nc` (Netcat) o Python:
   ```bash
   sudo mkdir -p /opt
   cat << 'EOF' | sudo tee /opt/servei_eco.sh
   #!/bin/bash
   echo "=== Servidor Eco de SMX actiu al port 9000 ==="
   while true; do
       echo -e "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHola des del servei de xarxa de 2n SMX!" | nc -l -p 9000 -q 1
   done
   EOF
   sudo chmod +x /opt/servei_eco.sh
   ```
2. Crea la definició de la unitat de servei `systemd` a `/etc/systemd/system/servei-eco.service`:
   ```ini
   [Unit]
   Description=Servei de Prova de Xarxa SMX
   After=network.target

   [Service]
   Type=simple
   ExecStart=/opt/servei_eco.sh
   Restart=always
   User=nobody

   [Install]
   WantedBy=multi-user.target
   ```
3. Notifica a `systemd` que hi ha un nou fitxer de configuració i activa el servei:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl start servei-eco.service
   sudo systemctl enable servei-eco.service
   ```
4. Comprova l'estat del dimoni i verifica que està escoltant al port 9000:
   ```bash
   sudo systemctl status servei-eco.service
   sudo ss -tulpn | grep 9000
   ```
5. Des d'una altra màquina o terminal, fes la petició: `curl http://localhost:9000`. Comprova que rep el missatge de text generat.

#### Repte 2: Diagnòstic de Ports i Sòcols en Windows Server amb PowerShell
En un equip o màquina virtual amb Windows:
1. Obre **PowerShell** i obtén la llista de tots els ports TCP en estat d'escolta activa (*Listening*):
   ```powershell
   Get-NetTCPConnection -State Listen | Select-Object LocalAddress, LocalPort, OwningProcess | Sort-Object LocalPort
   ```
2. Identifica quin programa o servei està vinculat a un port concret consultant el PID (Identificador de Procés):
   ```powershell
   Get-Process -Id (Get-NetTCPConnection -LocalPort 3389 -State Listen).OwningProcess
   ```
3. Comprova la connectivitat cap a un servei remot mitjançant el comandament natiu `Test-NetConnection` (equivalent modern a Telnet):
   ```powershell
   Test-NetConnection -ComputerName "192.168.1.10" -Port 22
   ```

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Arquitectura de ports i sòcols** | Explica la 5-tuple, diferencia ports privilegiats i calcula combinacions sense errors. | Entén la relació IP:Port però dubta sobre el rol dels ports dinàmics/efímers. | Confon adreces IP amb ports de transport o desconeix la funció del sòcol. |
| **Administració de serveis amb `systemd`** | Redacta la unitat `.service`, recarrega el dimoni i gestiona arrencades amb èxit. | Arrenca l'script manualment en consola però no crea la unitat `systemd`. | Errors en la sintaxi del servei o dependències no resoltes. |
| **Diagnòstic de xarxa CLI** | Utilitza `ss`, `netstat` i `Test-NetConnection` interpretant PID i estats correctament. | Executa les comandes però no sap filtrar els ports en escolta. | No sap utilitzar eines de consola per auditar la connectivitat de ports. |
