---
layout: default
title: "UD5 — Tasques Bàsiques de Configuració, Administració i Automatització"
course_root: ".."
badge: "1r SMX · Grau Mitjà · UD5"
---

# 📘 UD5 — Tasques Bàsiques de Configuració, Administració i Automatització

La **Unitat Didàctica 5** tanca el recorregut formatiu del mòdul de Sistemes Operatius Monolloc dotant l'alumnat de les competències d'administració diària d'un tècnic: gestió de la jerarquia del sistema de fitxers, domini de la consola d'ordres (CLI), assignació de permisos i drets d'usuari, gestió de programari i automatització de tasques periòdiques de manteniment.

---

## 📂 Jerarquia FHS, Permisos POSIX i Automatització del Sistema

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 20px; margin: 25px 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3); border: 1px solid #334155;">
  <div style="text-align: center; margin-bottom: 15px;">
    <span style="background: #38bdf8; color: #0f172a; font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; padding: 4px 10px; border-radius: 9999px;">Infografia Tècnica</span>
    <h3 style="color: #f8fafc; margin: 10px 0 5px 0; font-size: 1.25rem;">Arbre de Directoris FHS, Càlcul Octal de Permisos i Automatització</h3>
    <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">Estructura estàndard Unix/Linux, càlcul matemàtic de chmod/chown i sintaxi de crontab</p>
  </div>
  <svg viewBox="0 0 860 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display: block; font-family: system-ui, -apple-system, sans-serif;">
    <defs>
      <linearGradient id="somU5FhsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU5PermsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU5CliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#047857" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="somU5CronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#b45309" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- Bloc 1: Jerarquia FHS -->
    <rect x="20" y="20" width="190" height="210" rx="8" fill="url(#somU5FhsGrad)" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="115" y="42" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">🌳 ARBRE FHS LINUX</text>
    <text x="115" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Arrel Única: `/`</text>
    <line x1="30" y1="63" x2="200" y2="63" stroke="#334155"/>
    <text x="32" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">/boot:</tspan> Nucli i GRUB</text>
    <text x="32" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">/etc:</tspan> Configuració text pla</text>
    <text x="32" y="116" fill="#cbd5e1" font-size="8.5">• <tspan fill="#c084fc" font-weight="bold">/home:</tspan> Directoris personals</text>
    <text x="32" y="134" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">/var:</tspan> Logs (/var/log), cues</text>
    <text x="32" y="152" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">/bin /usr:</tspan> Executables</text>
    <text x="32" y="170" fill="#cbd5e1" font-size="8.5">• <tspan fill="#94a3b8" font-weight="bold">/dev:</tspan> Nodes de maquinari</text>
    <text x="32" y="188" fill="#cbd5e1" font-size="8.5">• <tspan fill="#94a3b8" font-weight="bold">/proc /sys:</tspan> Nucli en RAM</text>
    <text x="115" y="218" fill="#38bdf8" font-size="8.5" text-anchor="middle" font-weight="bold">Jerarquia Unificada</text>

    <!-- Fletxa 1 -> 2 -->
    <path d="M 210 115 L 235 115" stroke="#38bdf8" stroke-width="2"/>

    <!-- Bloc 2: Permisos POSIX -->
    <rect x="240" y="20" width="190" height="210" rx="8" fill="url(#somU5PermsGrad)" stroke="#c084fc" stroke-width="1.5"/>
    <text x="335" y="42" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">🔐 PERMISOS POSIX</text>
    <text x="335" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Model Octal: rwx</text>
    <line x1="250" y1="63" x2="420" y2="63" stroke="#334155"/>
    <text x="252" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#38bdf8" font-weight="bold">r (Read) = 4</tspan> (Lectura)</text>
    <text x="252" y="98" fill="#cbd5e1" font-size="8.5">• <tspan fill="#34d399" font-weight="bold">w (Write) = 2</tspan> (Escriptura)</text>
    <text x="252" y="116" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">x (Execute) = 1</tspan> (Execució)</text>
    <rect x="252" y="128" width="165" height="35" rx="4" fill="#1e293b" stroke="#c084fc" stroke-width="1"/>
    <text x="335" y="142" fill="#f8fafc" font-size="8.5" font-weight="bold" text-anchor="middle">- rwx r-x r-- = 754</text>
    <text x="335" y="154" fill="#94a3b8" font-size="7.5" text-anchor="middle">User: 7 | Group: 5 | Others: 4</text>
    <text x="252" y="178" fill="#cbd5e1" font-size="8.5">• `chmod 755 script.sh`</text>
    <text x="252" y="196" fill="#cbd5e1" font-size="8.5">• `chown user:grup fitxer`</text>
    <text x="335" y="218" fill="#c084fc" font-size="8.5" text-anchor="middle" font-weight="bold">Control d'Accés Estricte</text>

    <!-- Fletxa 2 -> 3 -->
    <path d="M 430 115 L 455 115" stroke="#c084fc" stroke-width="2"/>

    <!-- Bloc 3: Administració Dual CLI -->
    <rect x="460" y="20" width="190" height="210" rx="8" fill="url(#somU5CliGrad)" stroke="#34d399" stroke-width="1.5"/>
    <text x="555" y="42" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">💻 ADMINISTRACIÓ CLI</text>
    <text x="555" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Bash vs PowerShell</text>
    <line x1="470" y1="63" x2="640" y2="63" stroke="#334155"/>
    <text x="472" y="80" fill="#cbd5e1" font-size="8.5">• Navegació: `ls -la` / `dir`</text>
    <text x="472" y="98" fill="#cbd5e1" font-size="8.5">• Fitxers: `cp`, `mv`, `rm`</text>
    <text x="472" y="116" fill="#cbd5e1" font-size="8.5">• Edició: `nano`, `vim`</text>
    <text x="472" y="134" fill="#cbd5e1" font-size="8.5">• Xarxa: `ip a` / `ipconfig`</text>
    <text x="472" y="152" fill="#cbd5e1" font-size="8.5">• Processos: `ps aux`, `kill`</text>
    <text x="472" y="170" fill="#38bdf8" font-size="8.5">• Gestió: `systemctl` / `services`</text>
    <text x="472" y="190" fill="#34d399" font-size="8.5">• Tuberíes `|` i redireccions `>`</text>
    <text x="555" y="218" fill="#34d399" font-size="8.5" text-anchor="middle" font-weight="bold">Eficiència en Terminal</text>

    <!-- Fletxa 3 -> 4 -->
    <path d="M 650 115 L 675 115" stroke="#34d399" stroke-width="2"/>

    <!-- Bloc 4: Automatització i Crontab -->
    <rect x="680" y="20" width="160" height="210" rx="8" fill="url(#somU5CronGrad)" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="760" y="42" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">⏰ AUTOMATITZACIÓ</text>
    <text x="760" y="56" fill="#94a3b8" font-size="8.5" text-anchor="middle">Tasques Programades</text>
    <line x1="690" y1="63" x2="830" y2="63" stroke="#334155"/>
    <text x="692" y="80" fill="#cbd5e1" font-size="8.5">• <tspan fill="#f59e0b" font-weight="bold">Crontab</tspan> (5 camps):</text>
    <text x="700" y="93" fill="#38bdf8" font-size="8">m h dom mon dow</text>
    <text x="692" y="112" fill="#cbd5e1" font-size="8.5">• Exemple diari:</text>
    <text x="700" y="125" fill="#34d399" font-size="8">30 2 * * * backup.sh</text>
    <text x="692" y="144" fill="#cbd5e1" font-size="8.5">• *Task Scheduler* Windows</text>
    <text x="692" y="162" fill="#cbd5e1" font-size="8.5">• Scripts Bash / PS1</text>
    <text x="692" y="180" fill="#cbd5e1" font-size="8.5">• Còpies amb `tar` i `rsync`</text>
    <text x="692" y="198" fill="#94a3b8" font-size="8">Manteniment autònom</text>
    <text x="760" y="218" fill="#f59e0b" font-size="8.5" text-anchor="middle" font-weight="bold">Sistemes Autònoms</text>

    <!-- Peu informatiu -->
    <rect x="20" y="242" width="820" height="42" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="430" y="261" fill="#cbd5e1" font-size="10" text-anchor="middle">Regla d'Or de la Seguretat: <tspan fill="#f87171" font-weight="bold">Mai s'assignen permisos 777 (rwxrwxrwx) a fitxers o directoris de producció.</tspan></text>
    <text x="430" y="275" fill="#94a3b8" font-size="9" text-anchor="middle">Aplica sempre el principi de mínim privilegi necessari: assigna permisos al grup dedicat i deixa el camp d'altres usuaris (others) buit o en mode només lectura.</text>
  </svg>
</div>

---

## 💻 Taula d'Ordres Equivalents: Windows (CMD / PowerShell) vs Linux (Bash)

| Acció d'Administració | Linux (Bash) | Windows (CMD) | Windows (PowerShell) |
| :--- | :--- | :--- | :--- |
| **Directori de treball actual** | `pwd` | `cd` | `Get-Location` (`pwd`) |
| **Llistar contingut** | `ls -la` | `dir` | `Get-ChildItem` (`dir` / `ls`) |
| **Canviar de directori** | `cd /ruta` | `cd \ruta` | `Set-Location /ruta` |
| **Crear directori** | `mkdir nom_carpeta` | `mkdir nom_carpeta` | `New-Item -ItemType Directory` |
| **Copiar fitxers** | `cp origen desti` | `copy origen desti` | `Copy-Item origen desti` |
| **Moure o reanomenar** | `mv vell nou` | `move vell nou` | `Move-Item vell nou` |
| **Esborrar fitxer** | `rm fitxer` | `del fitxer` | `Remove-Item fitxer` |
| **Visualitzar contingut de text**| `cat fitxer.txt` | `type fitxer.txt` | `Get-Content fitxer.txt` |
| **Netejar la pantalla** | `clear` | `cls` | `Clear-Host` (`cls`) |
| **Configuració de xarxa** | `ip a` / `ip route` | `ipconfig /all` | `Get-NetIPAddress` |

---

## ⏰ Automatització de Tasques: Sintaxi de Crontab

En entorns GNU/Linux, el dimoni `cron` executa tasques programades automàticament segons una expressió de **5 camps temporals**:

```
 ┌───────────── Minut (0 - 59)
 │ ┌────────────── Hora (0 - 23)
 │ │ ┌─────────────── Dia del mes (1 - 31)
 │ │ │ ┌──────────────── Mes de l'any (1 - 12)
 │ │ │ │ ┌───────────────── Dia de la setmana (0 - 7, on 0 i 7 = Diumenge)
 │ │ │ │ │
 * * * * *  /ruta/a/la/comanda_o_script.sh
```

### Exemples pràctics de manteniment:
- Executar una còpia de seguretat cada nit a les 02:30:
  ```cron
  30 2 * * * /root/scripts/backup_diari.sh
  ```
- Executar una sincronització de fitxers cada dilluns a les 08:00:
  ```cron
  0 8 * * 1 /usr/local/bin/sync_carpetes.sh
  ```
- Netejar fitxers temporals cada diumenge a mitjanit:
  ```cron
  0 0 * * 0 /usr/local/bin/neteja_tmp.sh
  ```

---

## 📑 Continguts i Apartats de la Unitat

| Apartat | Títol del Tema | Continguts Clau | Accés Directe |
| :---: | :--- | :--- | :---: |
| **5.2** | [**Introducció a la Configuració del SO**](./ut0502.md) | Tasques d'arrencada inicial, personalització i gestió de dispositius | [**⚙️ Configurar Sistema →**](./ut0502.md) |
| **5.3** | [**Interfícies d'Usuari (GUI vs CLI)**](./ut0503.md) | Comparativa d'escriptoris gràfics i potència de les consoles d'ordres | [**🖥️ Comparar GUI/CLI →**](./ut0503.md) |
| **5.5** | [**Gestió del Sistema d'Arxius FHS**](./ut0505.md) | Estructura en arbre, punts de muntatge (`mount`, `/etc/fstab`) i enllaços | [**📁 Dominar FHS →**](./ut0505.md) |
| **5.9** | [**Automatització de Tasques Periòdiques**](./ut0509.md) | Programació amb `cron` a Linux i el *Task Scheduler* a Windows | [**⏰ Programar Tasques →**](./ut0509.md) |
| **5.14** | [**Permisos i Propietat a Linux**](./ut0514.md) | Taller pràctic de gestió d'usuaris, grups i permisos amb `chmod` i `chown` | [**🔐 Pràctica Permisos →**](./ut0514.md) |

---

## 🎯 Resultats d'Aprenentatge Vinculats
- **RA4:** Realitza tasques bàsiques d'administració de sistemes operatius monolloc, gestionant usuaris, permisos i recursos locals.
- **RA5:** Automatitza tasques d'administració del sistema mitjançant la creació i programació de scripts de comandes.
- **Criteris d'Avaluació:**
  - S'ha interpretat la jerarquia de fitxers de Linux (FHS) identificant les rutes dels fitxers de configuració i registres.
  - S'han assignat permisos octals i drets d'usuari i grup seguint el principi de mínim privilegi.
  - S'han planificat scripts d'execució periòdica utilitzant el dimoni cron o eines de programació de tasques.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### 📋 Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

1. **Càlcul Matemàtic de Permisos POSIX i Màscara *Umask*:**
   - En sistemes Unix/Linux, els permisos per defecte abans d'aplicar la màscara són `666` (`rw-rw-rw-`) per a fitxers ordinaris i `777` (`rwxrwxrwx`) per a directoris.
   - La màscara d'usuari (**umask**) resta bits de permís mitjançant l'operació lògica `Permís = Base AND NOT(umask)`.
   - **Preguntes de càlcul:**
     - Si la màscara configurada al sistema és `umask 027`:
       - Quins permisos octals i en format textual (`rwx`) s'assignaran automàticament a un fitxer nou creat per l'usuari?
       - Quins permisos octals i en format textual s'assignaran a una carpeta nova creada amb `mkdir`?
     - Quin nivell d'accés tindran els usuaris de la categoria *Others* (Altres) sobre aquests nous fitxers i directoris?

2. **Interpretació i Càlcul de Temps de Crontab:**
   - Analitza les següents tres línies de programació del fitxer `/etc/crontab`:
     1. `15 4 * * 1-5 /opt/scripts/backup_diari.sh`
     2. `*/15 8-18 * * * /usr/local/bin/check_serveis.sh`
     3. `0 0 1,15 * * /usr/local/bin/neteja_logs.sh`
   - **Preguntes d'anàlisi:**
     - A quina hora exacta i quins dies de la setmana s'executarà el primer script?
     - Cada quants minuts i en quina franja horària s'executarà el segon script?
     - Quins dies del mes s'executarà el tercer script?

3. **Càlcul de Rotació de Registres (*Logrotate*):**
   - Un servidor web local genera un fitxer de registre d'accessos a `/var/log/nginx/access.log` d'aproximadament $40\text{ MiB}$ diaris.
   - S'estableix una política de rotació de logs setmanal guardant 4 fitxers comprimits amb `gzip` (que aconsegueix una taxa de compressió del $80\%$, ocupant només el $20\%$ de la mida original).
   - **Preguntes de dimensionament:**
     - Quina quantitat de dades genera el servei en una setmana abans de comprimir-se?
     - Quant d'espai total a disc ocuparan els 4 fitxers rotats i comprimits en conjunt a la carpeta `/var/log`?

---

### 💻 Bloc B: Reptes Pràctics de Laboratori i Comandes / Taller

#### Repte 1: Creació d'Usuaris, Grups i Carpeta Compartida Segura a Linux
1. Crea un grup anomenat `tecnics` i dos usuaris que pertanyen a aquest grup:
   ```bash
   sudo groupadd tecnics
   sudo useradd -m -s /bin/bash -g tecnics pau
   sudo useradd -m -s /bin/bash -g tecnics sara
   ```
2. Crea un directori compartit per al departament a `/srv/projectes`:
   ```bash
   sudo mkdir -p /srv/projectes
   sudo chown root:tecnics /srv/projectes
   ```
3. Assigna permisos de manera que el propietari tinga accés complet, el grup puga llegir, escriure i entrar, i cap altre usuari del sistema puga accedir (`rwxrwx---` = `770`):
   ```bash
   sudo chmod 770 /srv/projectes
   ```
4. Aplica el bit especial **SGID** (`chmod g+s`) al directori per garantir que tots els nous fitxers hereten automàticament el grup `tecnics`:
   ```bash
   sudo chmod 2770 /srv/projectes
   ls -ld /srv/projectes
   ```
   (Comprova que els permisos mostren `rwxrws---`).

#### Repte 2: Creació d'un Script de Còpia de Seguretat i Automatització amb Cron
1. Crea un script anomenat `/usr/local/bin/backup_home.sh` amb el següent contingut:
   ```bash
   #!/bin/bash
   DESTI="/var/backups"
   DATA=$(date +%Y%m%d_%H%M%S)
   mkdir -p "$DESTI"
   tar -czf "$DESTI/backup_home_$DATA.tar.gz" /home/pau
   echo "Còpia completada amb èxit en $DESTI el $(date)" >> /var/log/backup.log
   ```
2. Assigna permisos d'execució exclusius per a l'administrador:
   ```bash
   sudo chmod 700 /usr/local/bin/backup_home.sh
   ```
3. Obre el planificador d'ordres amb `sudo crontab -e` i afegeix una línia perquè s'execute automàticament cada dia a les 03:00 de la matinada:
   ```cron
   0 3 * * * /usr/local/bin/backup_home.sh
   ```

#### Repte 3: Auditoria i Automatització de Neteja en Windows amb PowerShell
1. Obre PowerShell com a Administrador i crea un script senzill per mesurar l'espai dels fitxers temporals:
   ```powershell
   Get-ChildItem -Path $env:TEMP -Recurse -ErrorAction SilentlyContinue | 
       Measure-Object -Property Length -Sum | 
       Select-Object Count, @{Name="MidaTotal_MB"; Expression={[math]::Round($_.Sum / 1MB, 2)}}
   ```
2. Programa una tasca diària de neteja mitjançant comanda nativa de PowerShell:
   ```powershell
   $Action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-NoProfile -Command Remove-Item -Path $env:TEMP\* -Recurse -Force -ErrorAction SilentlyContinue"
   $Trigger = New-ScheduledTaskTrigger -Daily -At 2am
   Register-ScheduledTask -TaskName "NetejaTemporalSMX" -Action $Action -Trigger $Trigger -Description "Neteja de fitxers temporals d'usuari"
   ```
3. Comprova que la tasca ha quedat registrada amb `Get-ScheduledTask -TaskName "NetejaTemporalSMX"`.

---

### 🎯 Bloc C: Llista de Verificació i Rúbrica d'Avaluació

| Criteri d'Avaluació | Nivell Assolit (Excel·lent: 9-10) | Nivell Mitjà (Notable: 7-8) | Nivell Inicial (Aprovat: 5-6) |
| :--- | :--- | :--- | :--- |
| **Jerarquia FHS i Sistema d'Arxius** | Identifica rutes crítiques (`/etc`, `/var`, `/boot`, `/dev`), punts de muntatge i la funció dels sistemes virtuals `/proc` i `/sys`. | Coneix on està la carpeta d'usuaris (`/home`) però desconeix on es guarden les configuracions o els registres del sistema. | Confon l'estructura d'arbre de Linux amb les unitats de disc independents de Windows (`C:`, `D:`). |
| **Model de Permisos POSIX i Umask** | Calcula de memòria cadenes octals `chmod`, aplica màscares `umask` i utilitza bits especials (SGID) per a carpetes de grup. | Realitza canvis de permisos bàsics però té dificultats per calcular l'efecte d'una màscara `umask` sobre fitxers nous. | Utilitza sistemàticament `chmod 777` davant qualsevol problema de denegació d'accés. |
| **Automatització amb Scripts i Crontab** | Construeix scripts Bash/PowerShell amb paràmetres, redireccions de logs i programa tasques regulars amb crontab sense errors. | Entén la sintaxi de cron però s'equivoca en l'ordre dels camps de temps o oblida donar permisos d'execució a l'script. | No sap programar tasques periòdiques i executa tots els manteniments de forma manual des de la GUI. |
