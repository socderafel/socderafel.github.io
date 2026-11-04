# UT 05: Serveis de Xarxa i Infraestructura per al Desplegament Web

<div class="interactive-progress-tracker" data-unit="ut05" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

Una aplicació web moderna no opera aïllada en un únic servidor, sinó que s'insereix en una complexa xarxa de serveis auxiliars d'infraestructura que en garanteixen la resolució de noms, la disponibilitat, el balanceig de trànsit massiu i la tolerància a fallades (Resultat d'Aprenentatge 5 - RA5).

En aquesta unitat didàctica aprofundiràs en el funcionament del **Sistema de Noms de Domini (DNS)**, la jerarquia global d'arrels, TLDs i servidors autoritatius, així com la instal·lació i configuració d'un servidor DNS complet amb **BIND9** (`named`) en Linux. Aprendràs a definir zones directes i inverses, gestionar la totalitat dels registres essencials (A, AAAA, CNAME, MX, TXT, SPF, DKIM) i diagnosticar incidències de propagació amb eines com `dig`, `nslookup` i `host`. A més, estudiaràs el rol decisiu dels **proxies inversos (*Reverse Proxies*) i balancejadors de càrrega** mitjançant **Nginx i HAProxy**, dominant algorismes de distribució (Round-Robin, Least Connections, IP Hash), estratègies de memòria cau (*caching*) HTTP per a descàrrega de servidors i esquemes d'alta disponibilitat.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 05.01](ut0501.md)** | **Arquitectura del Servei de Noms de Domini (DNS)** | Estructura jeràrquica en arbre, servidors arrel, TLDs, servidors autoritatius vs recursius, i procés de resolució completa. | +75 XP |
| **[UT 05.02](ut0502.md)** | **Configuració de Servidors DNS amb BIND9** | Fitxers `/etc/bind/named.conf.*`, definició de zones mestres directes, gestió de registres SOA, NS, A, CNAME, MX i TXT. | +75 XP |
| **[UT 05.03](ut0503.md)** | **Zones Inverses, Reenviadors (*Forwarders*) i Diagnòstic** | Zona inversa `in-addr.arpa` (registres PTR), reenviament condicional de consultes i depuració de xarxa amb `dig`, `nslookup` i `named-checkzone`. | +75 XP |
| **[UT 05.04](ut0504.md)** | **Proxies Inversos (*Reverse Proxies*) amb Nginx i HAProxy** | Concepte de proxy directe vs invers, terminació TLS, capçaleres `X-Forwarded-*`, seguretat perimetral i ocultació d'infraestructura interna. | +75 XP |
| **[UT 05.05](ut0505.md)** | **Balanceig de Càrrega, Memòria Cau (*Caching*) i Alta Disponibilitat** | Directiva `upstream`, algorismes de balanceig (Round-Robin, Least Connections, IP Hash), sondejos de salut (*health checks*) i memòria cau FastCGI/Proxy. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut05-repte-01">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 1: Jerarquia i Resolució DNS</h4>
  </div>
  <p class="challenge-prompt">Durant una resolució recursiva completa d'un nom de domini com `app.portal.es`, a quin tipus de servidor acudeix en primera instància el resolutor si la seua memòria cau està buida?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Al servidor de correu MX del domini.</button>
    <button class="btn-check" data-correct="true">A un dels servidors arrel mundials (Root Servers, representats per un punt final `.`).</button>
    <button class="btn-check" data-correct="false">Directament a la base de dades local de l'amfitrió.</button>
    <button class="btn-check" data-correct="false">Al servidor DHCP de la xarxa local de l'usuari.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut05-repte-02">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 2: Tipus de Registres en BIND9</h4>
  </div>
  <p class="challenge-prompt">Quin registre DNS de zona utilitzem obligatòriament quan volem crear un àlies de nom que apunte a un altre nom de domini canònic prèviament definit?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Registre A</button>
    <button class="btn-check" data-correct="true">Registre CNAME (*Canonical Name*)</button>
    <button class="btn-check" data-correct="false">Registre PTR</button>
    <button class="btn-check" data-correct="false">Registre SOA</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut05-repte-03">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 3: Conservació de la IP Real en Proxy Invers</h4>
  </div>
  <p class="challenge-prompt">Quan un proxy invers Nginx rep una petició d'un client extern i la reenvia cap a un servidor d'aplicacions intern (backend), per quina raó és obligatori configurar la directiva `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Perquè altrament Nginx tancarà immediatament la connexió HTTP per error de protocol.</button>
    <button class="btn-check" data-correct="true">Perquè sense eixa capçalera el servidor d'aplicacions intern veuria com a IP origen la IP local del mateix proxy invers en comptes de la IP real del client extern.</button>
    <button class="btn-check" data-correct="false">Per a comprimir les imatges PNG en format WebP al vol.</button>
    <button class="btn-check" data-correct="false">Perquè ho exigeix el protocol FTP per a transferir dades en mode actiu.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut05-repte-04">
  <div class="challenge-header">
    <span class="badge-xp">+25 XP</span>
    <h4>Repte 4: Persistència de Sessió en Balanceig de Càrrega</h4>
  </div>
  <p class="challenge-prompt">Si tenim una aplicació web desplegada sobre un clúster de servidors amb sessions emmagatzemades en memòria local de cada instància, quin mètode de balanceig en Nginx assegura que un mateix client siga redirigit sempre al mateix node backend?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">Round-Robin pur</button>
    <button class="btn-check" data-correct="true">`ip_hash`</button>
    <button class="btn-check" data-correct="false">Random select</button>
    <button class="btn-check" data-correct="false">Least connected amb timeout 0</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="card-header">
    <span class="badge-aules">Aules GVA</span>
    <h4>Lliurament de la Unitat Didàctica 05 a la plataforma docent</h4>
  </div>
  <p>Un cop completats els reptes interactius i les activitats d'aquesta unitat didàctica, descarrega el resum d'evidències en format d'informe per a adjuntar-lo a la tasca corresponent d'Aules.</p>
  <button class="btn-aules-download" onclick="generateAulesReport('ut05')">Descarregar Informe d'Evidències (Aules)</button>
</div>
