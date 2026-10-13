---
layout: default
title: "UD8: Manteniment, Diagnòstic i Seguretat en Xarxa — Instal·lació i Manteniment de Xarxes"
course_root: ".."
badge: "2n FPB · Grau Bàsic · UD8"
next_url: "ut0801.html"
next_label: "8.1 ➡️"
---

# UD8: Manteniment, Diagnòstic i Seguretat en Xarxa

Avaries físiques i lògiques, metodologia sistemàtica de resolució per capes, seguretat bàsica amb tallafocs personal, manteniment preventiu en racks i equips, i resolució de supòsits pràctics d'incidències.

<div style="margin: 2rem 0; overflow-x: auto; text-align: center;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; border: 1px solid #334155; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);">
  <defs>
    <linearGradient id="g-flt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-btu" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-fir" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#be123c" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-mnt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Capçalera -->
  <text x="430" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="1">MANTENIMENT I SEGURETAT: DIAGNÒSTIC BOTTOM-UP, TALLAFOCS I PREVENCIÓ</text>
  <text x="430" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Classificació d'avaries físiques/lògiques, protocol de resolució, regles de firewall i control de rack</text>

  <!-- Bloc 1: Tipus d'Avaries -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-flt)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">🔍</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Tipus d'Avaries</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Origen del Problema</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Físiques: Cables, LEDs</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Pestanyes RJ45 soltes</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Lògiques: IP, màscara</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• APIPA: 169.254 (no DHCP)</text>
  </g>

  <!-- Bloc 2: Metodologia Bottom-Up -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-btu)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🪜</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Resolució per Capes</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Model Ascendent</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• 1. Físic: Tensió i LEDs</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• 2. Enllaç: MAC i switch</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• 3. Xarxa: IP i Gateway</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• 4. Aplicació: DNS i web</text>
  </g>

  <!-- Bloc 3: Tallafocs Firewall -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-fir)" stroke="#f43f5e" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f43f5e" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f43f5e" font-size="14" font-weight="bold">🧱</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Seguretat Firewall</text>
    <text x="15" y="62" fill="#f43f5e" font-size="11" font-weight="600">Filtratge de Trànsit</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Perimetral vs Personal</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Regles d'entrada / eixida</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Perfils: Públic / Privat</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Ports: 80, 443, 445</text>
  </g>

  <!-- Bloc 4: Manteniment Preventiu -->
  <g transform="translate(640, 70)">
    <rect width="195" height="165" rx="10" fill="url(#g-mnt)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">🛡️</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Pla Preventiu</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Tasques de Rutina</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Neteja i temperatura rack</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Etiquetatge TIA-606</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Còpies de config routers</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Revisió de preses de terra</text>
  </g>
</svg>
</div>

### 📑 Apartats de la Unitat
| Apartat | Contingut Temàtic | Accés Directe |
| :---: | :--- | :---: |
| **8.1** | **Tipus d'avaries en xarxa: fallades físiques vs lògiques** | [**Llegir apartat →**](./ut0801.html) |
| **8.2** | **Metodologia de resolució d'avaries pas a pas (de baix a dalt)** | [**Llegir apartat →**](./ut0802.html) |
| **8.3** | **Seguretat bàsica perimetral: el tallafocs (Firewall)** | [**Llegir apartat →**](./ut0803.html) |
| **8.4** | **Manteniment preventiu: neteja, etiquetatge i còpies de suport** | [**Llegir apartat →**](./ut0804.html) |
| **8.5** | **Pràctica: Resolució de supòsits d'incidències en xarxa** | [**Llegir apartat →**](./ut0805.html) |

---

# 📖 Contingut Complet de la Unitat didàctica

## 8.1 Tipus d'avaries en xarxa: fallades físiques vs lògiques

Quan un usuari comunica que "no li funciona Internet" o que "ha caigut la xarxa", el problema pot deure's a múltiples causes. Per poder reparar la incidència amb rapidesa i eficiència, el primer pas és saber classificar l'avaria entre **física** o **lògica**.

### 1. Avaries Físiques (de maquinari o cablejat)
Són aquelles relacionades amb el suport material, els connectors, els equips electrònics o l'alimentació elèctrica:
- **Cable de xarxa danyat:** Aixafament per la pota d'una cadira o taula, estirades brusques que trenquen els fils interns de coure.
- **Pestanya del connector RJ45 trencada:** El connector no queda subjectat a la roseta o a la targeta i queda solt, perdent contacte amb el moviment.
- **Fallada en el port del Switch o targeta NIC danyada:** LEDs d'enllaç completament apagats.
- **Font d'alimentació del switch o router avariada o desendollada:** L'aparell no s'encén.
- **Distància excessiva del cable:** Tirades superiors a 100 metres que degraden el senyal per atenuació.

### 2. Avaries Lògiques (de programari o configuració)
El cablejat i els equips físics funcionen perfectament, però hi ha un error en els paràmetres de comunicació:
- **Adreça IP duplicada:** Dos ordinadors tenen assignada la mateixa IP manualment.
- **Màscara de subxarxa incorrecta:** L'ordinador creu que equips de la seua pròpia aula estan a una altra xarxa externa.
- **Porta d'enllaç (Gateway) errònia:** L'ordinador pot parlar amb els altres equips de l'aula, però no pot eixir a Internet.
- **Servidors DNS caiguts o mal configurats:** L'equip té connexió a Internet però no pot traduir noms com `google.es`.
- **Tallafocs (*Firewall*) massa restrictiu:** Bloqueja els ports necessaris per a les aplicacions.
- **Controlador de la targeta de xarxa desactualitzat o danyat** al sistema operatiu.

---

## 8.2 Metodologia de resolució d'avaries pas a pas (de baix a dalt)

Davant d'un problema de xarxa, un tècnic mai ha de canviar paràmetres a l'atzar. La metodologia professional més eficient és seguir el model de **resolució ascendent (*Bottom-Up*)**, comprovant capa a capa des de la més bàsica física fins a la superior d'aplicació:

```
[ Capa 4: Aplicació ]  --> 4. Navegador, DNS, credencials
[ Capa 3: Xarxa ]      --> 3. Ping al Gateway, IP i màscara
[ Capa 2: Enllaç ]     --> 2. Adreça MAC, port del switch, ARP
[ Capa 1: Física ]     --> 1. LEDs, cables RJ45, tensió elèctrica
```

---

### Protocol d'actuació pas a pas

#### Pas 1: Verificació de la Capa Física (Capa 1)
- L'ordinador i el switch estan encesos?
- El cable de xarxa està ben endollat als dos extrems fins a fer clic?
- S'encén el LED verd d'enllaç (*Link*) a la targeta de xarxa de l'ordinador i al port del switch?
- Si el LED està apagat: canvia el cable de pegat per un altre que sàpigues que funciona, o prova a endollar el cable en un altre port lliure del switch.

#### Pas 2: Verificació de la Capa d'Enllaç i Xarxa local (Capes 2 i 3)
- Obre la consola i executa `ipconfig`. L'ordinador té una IP vàlida de l'aula (com `192.168.1.XX`) o té una IP que comença per `169.254.X.X`?
  > [!WARNING]
  > Si un equip té una IP del tipus `169.254.X.X` (adreces APIPA), significa que **no ha pogut comunicar-se amb el servidor DHCP**.
- Fes `ping 127.0.0.1` per verificar la targeta interna.
- Fes `ping 192.168.1.1` (a la porta d'enllaç). Si respon, la connexió física i lògica amb el router és perfecta!

#### Pas 3: Verificació de l'eixida a Internet i DNS (Capes 3 i 4)
- Fes ping a una IP pública numèrica coneguda a Internet:
  ```cmd
  ping 8.8.8.8
  ```
  - Si respon `8.8.8.8`: Tens connexió directa a Internet!
- Ara fes ping pel nom de domini:
  ```cmd
  ping www.google.es
  ```
  - Si no respon pel nom però sí per IP numèrica: **L'avaria és exclusivament del servidor DNS!** (Revisa la configuració dels servidors DNS de l'equip).

---

## 8.3 Seguretat bàsica perimetral: el tallafocs (Firewall)

El **tallafocs** o **Firewall** és un mecanisme de seguretat fonamental que inspecciona tot el trànsit de xarxa que intenta entrar o eixir d'un equip o d'una xarxa local, permetent o bloquejant el pas dels paquets segons un conjunt de regles de seguretat establertes.

### Tipus de tallafocs

1. **Tallafocs de maquinari (perimetral):**
   - Dispositiu físic dedicat o integrat al router d'eixida de l'institut o empresa.
   - Protegeix tota la xarxa local corporativa davant d'intents d'atac o escanejos massius provinents d'Internet.

2. **Tallafocs personal (per programari):**
   - Aplicació integrada dins del sistema operatiu de cada ordinador (com ara el **Tallafocs de Windows Defender** o `ufw` en Linux).
   - Protegeix l'equip fins i tot davant d'amenaces provinents d'altres ordinadors infectats de la mateixa xarxa local de l'aula.

---

### Regles de filtratge en el tallafocs de Windows
El tallafocs avalua els paquets basant-se en:
- **Direcció del trànsit:**
  - *Regles d'entrada (*Inbound*):* Controlen qui pot connectar-se als serveis de l'equip des de fora (per exemple, si tenim una carpeta compartida o un servidor web local).
  - *Regles d'eixida (*Outbound*):* Controlen a quins servidors exteriors tenen permís per connectar-se les aplicacions del nostre ordinador.
- **Tipus de xarxa o perfil:**
  - *Perfil de Xarxa pública:* Aplica màxima seguretat (bloqueja carpetes compartides i ping) per quan ens connectem a Wi-Fi d'aeroports o cafeteries.
  - *Perfil de Xarxa privada:* Permet compartir fitxers i impressores entre equips de confiança de la mateixa llar o oficina.
- **Ports i protocols:**
  - Permet obrir ports específics (per exemple el port 80/443 per a web, o port 445 per a carpetes compartides) o bloquejar aplicacions concretes.

---

## 8.4 Manteniment preventiu: neteja, etiquetatge i còpies de suport

El **manteniment preventiu** comprèn el conjunt de tasques planificades periòdicament per mantindre la infraestructura de xarxa en condicions òptimes de funcionament, allargant la vida dels equips i evitant avaries imprevistes abans que arriben a produir-se.

### Tasques essencials de manteniment preventiu

#### 1. Neteja i control tèrmic de l'armari Rack
- Els ventiladors dels servidors i switches aspiren contínuament aire de l'aula, acumulant pols i borrissol als filtres, reixetes i circuits interns.
- **Accions:** Netejar periòdicament els filtres del rack amb un aspirador adequat o pots d'aire comprimit sec. Comprovar que els ventiladors de sostre giren suaument i que la temperatura interior es manté entre 18°C i 24°C.

#### 2. Etiquetatge i gestió del cablejat
- Un armari rack amb desenes de cables penjant sense identificar és un malson per a qualsevol reparació.
- **Normativa d'etiquetatge (TIA-606):**
  - Cada presa de roseta d'usuari ha de portar una etiqueta clara (Exemple: `RACK1-P01-ROS12`).
  - El mateix codi ha d'estar marcat a l'altre extrem del cable al panell de pegat.
  - S'han d'utilitzar guies horitzontals i brides de velcro (evitant brides de plàstic molt estretes que puguen aixafar els cables de dades).

#### 3. Còpies de seguretat de la configuració de routers i switches
- Si un router o switch es fa malbé per una tempesta elèctrica i cal substituir-lo per un de nou, configurar-lo des de zero pot costar hores de feina.
- **Bona pràctica:** Guardar sempre un fitxer de còpia de seguretat (*backup config file*) de la configuració de cada dispositiu de xarxa en un llapis de memòria o al núvol del departament.

---

## 8.5 Pràctica: Resolució de supòsits d'incidències en xarxa

### Objectiu de la Pràctica
Posar en pràctica les habilitats de diagnòstic i resolució d'avaries enfrontant-se a tres supòsits pràctics d'incidències reals provocades en l'aula de laboratori.

---

### Cas 1: L'equip de Maria no navega ni connecta amb ningú
- **Simptomatologia:** El navegador dóna error de connexió. A la barra de tasques apareix la icona de la bola del món o el triangle groc de xarxa sense connexió.
- **Diagnòstic del tècnic:**
  1. Mirada a la part posterior de la torre: El LED verd de la targeta de xarxa està **completament apagat**.
  2. Seguiment del cable: En revisar el conectoritzat, es descobreix que la pestanya de plàstic del connector RJ45 estava trencada i el cable s'havia descavalcat 2 mil·límetres en moure la cadira.
- **Resolució:** Es canvia el cable per un altre o es crimpa un nou connector RJ45 mascle. El LED s'encén en verd i la xarxa torna a funcionar immediatament.

---

### Cas 2: L'equip de Joan fa ping a 8.8.8.8 però no obre cap web
- **Simptomatologia:** En escriure `ping 8.8.8.8` al CMD, la resposta és correcta (`Temps = 18 ms`). En canvi, quan intenta entrar a `www.elpais.com` o `www.google.es`, el navegador diu *"No s'ha pogut trobar l'adreça IP del servidor (DNS_PROBE_FINISHED_NXDOMAIN)"*.
- **Diagnòstic del tècnic:**
  1. L'eixida a Internet funciona (perquè respon la IP de Google).
  2. S'executa `ipconfig /all`: Al camp *Servidors DNS* apareix l'adreça `192.168.1.250` (un servidor antic que ja no existeix o està apagat).
- **Resolució:** Es modifiquen les propietats de la targeta de xarxa i es posen els servidors DNS de Google (`8.8.8.8` i `8.8.4.4`) o s'activa DHCP automàtic. La navegació es restableix al segon.

---

### Cas 3: IP configurada fora de subxarxa
- **Simptomatologia:** L'equip té configurada manualment la IP `192.168.2.45` amb màscara `255.255.255.0`, mentre que tota la resta de l'aula i el router estan a la xarxa `192.168.1.0/24` (router `192.168.1.1`).
- **Diagnòstic:** En fer ping a la porta d'enllaç diu *"Host de destinació inaccessible"*.
- **Resolució:** Es canvia l'adreça a `192.168.1.45`, dins del rang de la mateixa subxarxa. El ping respon correctament.

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Diagnòstic Tècnic

#### Exercici 1: Anàlisi estadística de telemetria d'enllaç i percentatge de pèrdues (ICMP)
En el diagnòstic d'un lloc de treball que experimenta talls intermitents en trucades de veu sobre IP (VoIP), el tècnic executa un test de connectivitat prolongat enviant 100 paquets ICMP:
```cmd
ping -n 100 192.168.1.1
```
Les estadístiques registrades a la consola són:
- Paquets enviats: $100$
- Paquets rebuts amb èxit: $88$
- Paquets perduts: $12$
- Temps d'anada i tornada: Mínim = $2\text{ ms}$, Màxim = $480\text{ ms}$, Mitjana = $65\text{ ms}$

1. Calcula el percentatge de pèrdua de paquets de la línia:
   $$\%\,\text{Pèrdua} = \frac{\text{Paquets perduts}}{\text{Paquets enviats}} \cdot 100$$
2. Si un enllaç de veu sobre IP requereix una pèrdua inferior a l'$1\%$ i una latència mitjana inferior a $50\text{ ms}$ per mantindre una conversa comprensible sense talls, és acceptable aquesta connexió?
3. Quina és la variació màxima de retard (*Jitter* extrem: $T_{\text{màx}} - T_{\text{mín}}$)?
4. Quines tres causes físiques o d'entorn poden provocar aquesta pèrdua de paquets i fluctuació extrema de mil·lisegons en una xarxa local?

#### Exercici 2: Càlcul de càrrega tèrmica i ventilació d'un armari Rack de servidors
Un armari rack de 19 polzades instal·lat en una sala de comunicacions tancada allotja els següents equips funcionant les 24 hores:
- 1 Commutador PoE de 48 ports: $P_1 = 370\text{ W}$
- 1 Encaminador de frontera amb mòdul de fibra: $P_2 = 45\text{ W}$
- 2 Servidors de virtualització enracables: $P_3 = 2 \cdot 280\text{ W} = 560\text{ W}$
- 1 Sistema d'Alimentació Ininterrompuda (SAI): $P_4 = 65\text{ W}$ (autoconsum)

1. Calcula la potència elèctrica total consumida pels equips ($P_{\text{total}}$ en Watts).
2. Tota l'energia elèctrica consumida per l'electrònica es dissipa íntegrament en forma de calor. Calcula la calor dissipada per hora en quilocalories ($Q$ en $\text{kcal/h}$), sabent que:
   $$Q = 0{,}86 \cdot P_{\text{total}}$$
3. Per mantindre la temperatura de l'armari per sota de $25^\circ\text{C}$ amb una temperatura ambient exterior de $20^\circ\text{C}$ ($\Delta T = 5^\circ\text{C}$), el cabal d'aire necessari d'extracció dels ventiladors es calcula com:
   $$V_{\text{aire}} = \frac{Q}{0{,}29 \cdot \Delta T}\quad (\text{en m}^3/\text{h})$$
   Calcula el cabal d'aire mínim en $\text{m}^3/\text{h}$ que han de proporcionar els ventiladors de sostre del rack.

#### Exercici 3: Diagnòstic de regles de tallafocs per matriu de trànsit
Un tallafocs personal de Windows Defender té establertes les següents regles d'entrada (*Inbound Rules*):
- **Regla 1:** Bloquejar protocol ICMPv4 (Echo Request) des de qualsevol origen.
- **Regla 2:** Permetre trànsit TCP port 445 (SMB - Carpetes compartides) només des de la subxarxa local `192.168.1.0/24`.
- **Regla 3:** Permetre trànsit TCP port 80 i 443 (HTTP/HTTPS) des de qualsevol origen.
- **Regla per defecte:** Bloquejar qualsevol trànsit entrant no definit prèviament.

Prediu el comportament de l'equip en les següents tres situacions:
- Situació A: Un company de l'aula (`192.168.1.40`) fa `ping` a aquest equip. ¿Rebrà resposta o donarà "Temps d'espera esgotat"?
- Situació B: El mateix company intenta accedir a una carpeta compartida de l'equip escrivint `\\IP\Public`. ¿Podrà entrar?
- Situació C: Un ordinador connectat des d'una altra xarxa (`10.0.0.8`) intenta accedir a la mateixa carpeta compartida per SMB. ¿Podrà entrar?

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Gestió de regles de tallafocs amb PowerShell
- **Objectiu:** Crear i verificar regles de bloqueig en el Tallafocs de Windows Defender sense utilitzar el tauler de control gràfic.
- **Eines:** Consola PowerShell executada com a Administrador.
- **Procediment de taller:**
  1. Obre PowerShell i crea una nova regla per bloquejar les respostes de ping entrants:
     ```powershell
     New-NetFirewallRule -DisplayName "Bloqueig_Ping_Laboratori" -Direction Inbound -Protocol ICMPv4 -IcmpType 8 -Action Block
     ```
  2. Demana al teu company de taula que faça `ping` a la teua adreça IP. Comprova com la seua consola dóna *Temps d'espera esgotat*.
  3. Consulta l'estat de la regla creada:
     ```powershell
     Get-NetFirewallRule -DisplayName "Bloqueig_Ping_Laboratori" | Select-Object DisplayName, Enabled, Direction, Action
     ```
  4. Desactiva o elimina la regla perquè la xarxa torne a respondre:
     ```powershell
     Remove-NetFirewallRule -DisplayName "Bloqueig_Ping_Laboratori"
     ```
  5. Verifica com el company torna a rebre resposta de ping immediatament.

#### Repte 2: Resolució d'incidència d'adreçament APIPA i restabliment de TCP/IP
- **Objectiu:** Resoldre un bloqueig de xarxa en un equip que ha obtingut una adreça de l'espai `169.254.x.x` per fallada de comunicació amb el router.
- **Eines:** Consola CMD en mode Administrador.
- **Passos de reparació:**
  1. Desactiva temporalment la interfície per forçar la pèrdua de paràmetres:
     ```cmd
     netsh interface set interface "Ethernet" disable
     netsh interface set interface "Ethernet" enable
     ```
  2. Executa la neteja de la pila TCP/IP i el restabliment de catàlegs de sockets de xarxa Winsock:
     ```cmd
     netsh int ip reset
     netsh winsock reset
     ```
  3. Allibera i renova completament la concessió DHCP:
     ```cmd
     ipconfig /release
     ipconfig /renew
     ```
  4. Comprova amb `ipconfig` que l'equip ha abandonat el rang APIPA `169.254` i ha rebut una adreça vàlida de l'aula (`192.168.1.x`).

#### Repte 3: Elaboració d'un informe de manteniment preventiu i còpia de seguretat
- **Objectiu:** Realitzar l'auditoria preventiva d'un encaminador o commutador de taller i exportar el seu fitxer de restauració ràpida.
- **Eines:** Navegador web per a panell d'administració de l'equip i full de registre tècnic.
- **Activitats a realitzar:**
  1. Accedeix a la interfície web del router de laboratori (`http://192.168.1.1`).
  2. Navega fins a la secció **System Tools / Manteniment** $\rightarrow$ **Backup & Restore**.
  3. Fes clic a **Backup** i descarrega el fitxer de configuració (ex: `config_router_taller_2026.bin`).
  4. Inspecciona l'estat físic del router de laboratori: neteja de ranures de ventilació, estat de la clavilla d'alimentació de 12V i fermesa dels cables RJ45.
  5. Emplena el full de manteniment preventiu de taller indicant data, responsable, model de l'equip, versió de firmware i ubicació de la còpia de seguretat.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He classificat correctament les avaries diferenciant entre causes físiques de maquinari i lògiques de configuració.
- [ ] He seguit el protocol sistemàtic de diagnòstic ascendent *Bottom-Up* (Capa 1 a Capa 4).
- [ ] He calculat el percentatge de pèrdues de paquets i la càrrega tèrmica dissipada en un rack.
- [ ] He après a reconèixer les adreces APIPA `169.254.x.x` com a símptoma directe de fallada de DHCP.
- [ ] He creat i eliminat regles del tallafocs utilitzant ordres de PowerShell.
- [ ] He descarregat la còpia de seguretat de configuració d'un equip de xarxa per a restauració ràpida.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Diagnòstic sistemàtic Bottom-Up** | Aplica el model ascendent de forma rigorosa i metòdica, localitzant qualsevol incidència en pocs minuts. | Segueix l'ordre de comprovació físic $\rightarrow$ lògic amb bona eficiència en la resolució. | Comprova equips de forma desordenada però acaba localitzant l'origen de la fallada. | Canvia paràmetres a l'atzar sense metodologia, empitjorant l'avaria inicial. |
| **Càlcul de pèrdua de paquets i càrrega tèrmica** | Resol els càlculs de telemetria ICMP, percentatge de pèrdues, calor dissipada i cabal de ventilació amb precisió. | Calcula pèrdues de paquets i calor en Watts de forma correcta amb xicotets dubtes en cabal d'aire. | Calcula el percentatge bàsic de pèrdua de paquets sense resoldre el balanç tèrmic. | Incapaç de calcular percentatges de pèrdua o interpretar dades de telemetria. |
| **Identificació de patrons d'avaria (APIPA, DNS, Gateway)** | Diagnostica a l'acte símptomes d'adreces APIPA, talls de cable, errors de DNS o conflictes d'IP duplicada. | Identifica correctament els errors habituals de configuració i xarxa local. | Reconeix fallades bàsiques de cable desendollat però dubta davant d'adreces 169.254. | No sap interpretar els missatges d'error de Windows ni l'origen de la desconnexió. |
| **Administració de seguretat i Tallafocs CLI** | Crea, modifica i elimina regles de firewall amb PowerShell, entenent direccions de trànsit, protocols i ports. | Configura regles de bloqueig i obertura de trànsit per consola amb èxit. | Gestiona el tallafocs des de l'entorn gràfic però necessita suport en PowerShell. | Desconeix la funció del tallafocs o el desactiva completament com a única solució. |
| **Manteniment preventiu i còpies de suport** | Documenta el manteniment preventiu seguint la norma TIA-606 i realitza còpies de seguretat de configuració. | Realitza la neteja, revisió d'etiquetatge i còpia de suport del router de taller. | Executa les tasques bàsiques de manteniment físic sense realitzar la còpia de seguretat. | No manté l'ordre a l'armari rack ni realitza còpies de protecció dels equips. |

