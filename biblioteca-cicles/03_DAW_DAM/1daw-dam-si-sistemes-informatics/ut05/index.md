# UT 05: Xarxes Locals, Direccionament IP i Comunicacions

<div class="interactive-progress-tracker" data-unit="ut05" data-total-points="175">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 175 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 7</span>
  </div>
</div>

## Descripció del Mòdul i Resultats d'Aprenentatge

Aquesta unitat formativa capacita els desenvolupadors de programari en els fonaments de la connectivitat telemàtica, interconnectant sistemes informàtics i serveis web a través d'arquitectures de **xarxes locals (LAN) i Internet**:
- **Models de Comunicació en Capes:** Comparativa detallada entre el model de referència teòric **OSI de 7 capes** (Física, Enllaç, Xarxa, Transport, Sessió, Presentació, Aplicació) i l'arquitectura pràctica de **TCP/IP de 4 capes** (Accés a Xarxa, Internet, Transport, Aplicació), procés d'encapsulament/desencapsulament de les unitats de dades de protocol (PDU).
- **Capa Física i Dispositius d'Interconnexió:** Tipologies de cablejat estructurat (cable de parell trenat UTP/FTP Cat 6/6a amb connectors RJ-45, fibra òptica multimode i monomode), targetes d'interfície de xarxa (NIC) amb la seua adreça física **MAC (*Media Access Control*)**, i commutació de trames a la Capa 2 mitjançant **Switches**.
- **Direccionament Lògic IPv4 i Subnetting:** Estructura d'adreces de 32 bits en notació decimal amb punts, rangs d'adreces privades (**RFC 1918**), màscares de subxarxa en notació CIDR (`/24`, `/28`), càlcul precís de subxarxes mitjançant **VLSM (*Variable Length Subnet Mask*)** per a optimitzar espais d'adreces, i fonaments del protocol de nova generació **IPv6**.
- **Xarxes Sense Fils (WLAN / Wi-Fi):** Estàndards de la família IEEE 802.11 (Wi-Fi 5 / 802.11ac, Wi-Fi 6/6E / 802.11ax, Wi-Fi 7 / 802.11be), bandes de 2.4 GHz, 5 GHz i 6 GHz, canallització, i mecanismes de blindatge criptogràfic: evolució des del vulnerable WEP fins a **WPA2-AES** i el modern **WPA3-SAE (Simultaneous Authentication of Equals)**.
- **Protocols Essencials i Utilitats de Diagnòstic:** Funcionament del protocol **DHCP** per a l'assignació dinàmica d'adreces i paràmetres de xarxa (DORA: Discover, Offer, Request, Acknowledge), resolució de noms de domini amb **DNS**, protocols de transport fiables (**TCP**) vs no orientats a connexió (**UDP**), i diagnòstic integral de xarxa mitjançant comandes de consola (`ping`, `traceroute` / `tracert`, `ip` / `ifconfig` / `ipconfig`, `netstat` / `ss`, `nslookup` / `dig`).

### Resultats d'Aprenentatge i Criteris d'Avaluació associats (Reial Decret 453/2010 i RD 686/2010)

- **RA5 (DAW / DAM):** Connecta sistemes informàtics en xarxa configurant dispositius i aplicant protocols de comunicació.
  - **CA 5.a:** S'han identificat els nivells dels models de xarxa OSI i TCP/IP i les seues funcions.
  - **CA 5.b:** S'han analitzat els mitjans físics de transmissió i els dispositius d'interconnexió de xarxa.
  - **CA 5.c:** S'han assignat i calculat adreces de xarxa i màscares de subxarxa IPv4.
  - **CA 5.d:** S'han configurat paràmetres de xarxa sense fils garantint la seua seguretat.
  - **CA 5.e:** S'han utilitzat utilitats i eines de línia de comandes per a diagnosticar i resoldre problemes de connectivitat.

---

## Estructura de la Unitat de Treball

1. [UT 05.01: Models de comunicació en capes: OSI vs TCP/IP i encapsulament](./ut0501.md)
2. [UT 05.02: Cablejat estructurat, fibra òptica, adreces MAC i commutadors (switches)](./ut0502.md)
3. [UT 05.03: Direccionament IPv4, adreces privades RFC 1918 i càlcul de subxarxes (VLSM)](./ut0503.md)
4. [UT 05.04: Xarxes sense fils (Wi-Fi 6/7), freqüències i seguretat WPA2/WPA3](./ut0504.md)
5. [UT 05.05: Serveis de xarxa (DHCP, DNS) i eines de diagnòstic (ping, traceroute, ss)](./ut0505.md)

---

## Reptes Globals de Síntesi de la Unitat (100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut05-sintesi-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 1 · +25 XP</span>
    <h4>Encapsulament de Dades: De la PDU al Bit</h4>
  </div>
  <p class="challenge-question">Com es denominen les Unitats de Dades de Protocol (PDU) en les capes de Transport, Xarxa i Enllaç del model TCP/IP respectivament?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Fitxer, Carpeta i Disc.</button>
    <button class="btn-check" data-correct="true">B) Segment (en Transport: TCP/UDP), Paquet (en Xarxa: IP) i Trama o Frame (en Enllaç de Dades: Ethernet/Wi-Fi).</button>
    <button class="btn-check" data-correct="false">C) Bit, Byte i Kilobyte.</button>
    <button class="btn-check" data-correct="false">D) Pàgina web, Imatge i So.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut05-sintesi-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 2 · +25 XP</span>
    <h4>Càlcul d'Adreces Útils en una Subxarxa /28</h4>
  </div>
  <p class="challenge-question">Quantes adreces IP reals es poden assignar a equips amfitrions (hosts) en una subxarxa IPv4 amb màscara `/28` (255.255.255.240)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) 28 adreces.</button>
    <button class="btn-check" data-correct="true">B) 14 adreces útils (fórmula: 2^(32 - 28) - 2 = 2^4 - 2 = 16 - 2 = 14, ja que la primera adreça identifica la xarxa i l'última és la de difusió o broadcast).</button>
    <button class="btn-check" data-correct="false">C) 254 adreces.</button>
    <button class="btn-check" data-correct="false">D) 16 adreces.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut05-sintesi-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 3 · +25 XP</span>
    <h4>Seguretat Wi-Fi: WPA3 davant Atacs de Diccionari</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge de seguretat aporta el protocol WPA3-Personal respecte a WPA2 contra atacs fora de línia (*Offline Dictionary Attacks*)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que fa que la contrasenya caduque als 10 segons.</button>
    <button class="btn-check" data-correct="true">B) Utilitza l'intercanvi de claus SAE (Simultaneous Authentication of Equals), que impedeix que un atacant que capture el trànsit d'associació puga provar milions de contrasenyes fora de línia al seu ordinador per força bruta, i ofereix secretisme cap avant (Forward Secrecy).</button>
    <button class="btn-check" data-correct="false">C) Que impedeix que el senyal travesse les parets.</button>
    <button class="btn-check" data-correct="false">D) Que funciona sense targeta de xarxa.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="si-ut05-sintesi-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte Global 4 · +25 XP</span>
    <h4>Diagnòstic de Xarxa: El Protocol ICMP</h4>
  </div>
  <p class="challenge-question">Com utilitza l'ordre `traceroute` (o `tracert`) el camp TTL (Time-To-Live) de les capçaleres IP per a descobrir tots els encaminadors (routers) del camí?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Enviant un senyal acústic pel cable de xarxa.</button>
    <button class="btn-check" data-correct="true">B) Envia paquets successius incrementant el camp TTL començant per 1; cada router que el rep decreix el TTL a 0, descarta el paquet i respon amb un missatge ICMP 'Time Exceeded', revelant així la seua pròpia adreça IP de cada salt intermedi.</button>
    <button class="btn-check" data-correct="false">C) Consultant la llista de servidors a la Viquipèdia.</button>
    <button class="btn-check" data-correct="false">D) Mesurant el consum de memòria RAM del router.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Tasca de Síntesi: Disseny de Subxarxes i Diagnòstic de Connectivitat</h4>
  </div>
  <p>Dissenya un pla d'adreçament IPv4 per a una xarxa corporativa utilitzant la xarxa base `192.168.10.0/24`: divideix-la en tres subxarxes mitjançant VLSM per a Desenvolupament (50 hosts), Servidors (20 hosts) i Gestió (10 hosts). Documenta la configuració IP, màscara, porta d'enllaç i verifica la connectivitat utilitzant `ping` i `traceroute`.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
