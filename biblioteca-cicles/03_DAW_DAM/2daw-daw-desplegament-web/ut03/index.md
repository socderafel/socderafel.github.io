# UT 03: Administració de Servidors d'Aplicacions Web

<div class="interactive-progress-tracker" data-unit="ut03" data-total-points="100">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Punts aconseguits: <strong class="points-earned">0</strong> / 100 XP</span>
    <span>Reptes superats: <strong class="challenges-completed">0</strong> / 4</span>
  </div>
</div>

## Descripció del Mòdul i Unitat Didàctica

Mentre que un servidor web pur com Apache o Nginx excel·leix servint fitxers estàtics, la vertadera intel·ligència d'una aplicació web resideix en el seu codi dinàmic: lògica de negoci, consultes transaccionals a bases de dades, autenticació d'usuaris i generació de respostes JSON o vistes HTML al vol. Aquesta tasca recau sobre els **Servidors d'Aplicacions Web** (Resultat d'Aprenentatge 3 - RA3).

En aquesta unitat didàctica aprofundiràs en els models d'execució i protocols d'interfície fonamentals (CGI, FastCGI, Servlets, WSGI i ASGI). Aprendràs a instal·lar, configurar, optimitzar i protegir els entorns d'execució professionals més demandats a la indústria del desenvolupament web: **PHP-FPM** (*FastCGI Process Manager*), el contenidor de servlets Java **Apache Tomcat**, l'orquestració de microserveis **Node.js** en producció mitjançant el gestor de processos **PM2**, i el desplegament d'aplicacions **Python** amb servidors WSGI com **Gunicorn** i servidors asíncrons ASGI com **Uvicorn**.

---

## Continguts i Subtemes

| Codi | Títol del Subtema | Descripció | Punts XP |
| :--- | :--- | :--- | :--- |
| **[UT 03.01](ut0301.md)** | **Arquitectura de Servidors d'Aplicacions: De CGI a FastCGI i WSGI** | Evolució dels models d'execució, l'abisme d'eficiència de CGI, FastCGI persistent i interfícies estàndard. | +75 XP |
| **[UT 03.02](ut0302.md)** | **Desplegament d'Aplicacions PHP amb PHP-FPM** | Piscines de processos (*pools* `www.conf`), sockets UNIX vs TCP, directives `pm.max_children` i opcache. | +75 XP |
| **[UT 03.03](ut0303.md)** | **Desplegament d'Aplicacions Java: Servidor Apache Tomcat** | Arquitectura JVM, contenidor de servlets/JSP, empaquetat d'arxius `.war`, `server.xml` i connectors HTTP/AJP. | +75 XP |
| **[UT 03.04](ut0304.md)** | **Desplegament d'Aplicacions Node.js amb el Gestor de Processos PM2** | Cicle de vida de Node.js, mode clúster per CPU, reinici automàtic en fallada (*watch*) i gestió de logs. | +75 XP |
| **[UT 03.05](ut0305.md)** | **Desplegament d'Aplicacions Python: Gunicorn (WSGI) i Uvicorn (ASGI)** | Especificació PEP 3333, models de treballadors sincrònics vs asíncrons i proxy invers amb Nginx. | +75 XP |

---

## Reptes Globals de Síntesi (+100 XP)

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut03-repte-01">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 1 · +25 XP</span>
    <h4>Ineficiència Històrica del Model CGI</h4>
  </div>
  <p class="challenge-question">Quin era el gran coll d'ampolla de rendiment del model CGI (*Common Gateway Interface*) tradicional davant d'allaus de visites?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Que el model CGI només funcionava amb pantalles de tub catòdic.</button>
    <button class="btn-check" data-correct="true">B) Que per a cada petició HTTP rebuda, el sistema operatiu havia de crear un procés complet nou des de zero (amb la seua crida de sistema `fork()`, càrrega de memòria i intèrpret), destruint el procés en acabar i col·lapsant la CPU i RAM del servidor.</button>
    <button class="btn-check" data-correct="false">C) Que les variables d'entorn s'havien d'escriure en paper.</button>
    <button class="btn-check" data-correct="false">D) Que no admetia el protocol TCP/IP.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut03-repte-02">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 2 · +25 XP</span>
    <h4>Avantatge dels Sockets UNIX en PHP-FPM</h4>
  </div>
  <p class="challenge-question">Quan el servidor web Nginx i PHP-FPM resideixen a la mateixa màquina física, per què es recomana connectar-los mitjançant un socket UNIX (`/run/php/php-fpm.sock`) en lloc d'un socket TCP (`127.0.0.1:9000`)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Perquè els sockets UNIX tenen un color més atractiu als fitxers de registre.</button>
    <button class="btn-check" data-correct="true">B) Perquè els sockets UNIX eviten tota la sobrecàrrega de la pila de xarxa TCP/IP del kernel (com negociació de ports, comprovacions de suma de verificació i buffers de xarxa), aconseguint menor latència i major rendiment.</button>
    <button class="btn-check" data-correct="false">C) Perquè TCP està prohibit per la Unió Europea.</button>
    <button class="btn-check" data-correct="false">D) Perquè els sockets UNIX no consumeixen disc dur.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut03-repte-03">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 3 · +25 XP</span>
    <h4>El Mode Clúster de PM2 en Node.js</h4>
  </div>
  <p class="challenge-question">Com que Node.js s'executa per naturalesa sobre un únic fil de CPU (*Single-Threaded Event Loop*), quin benefici clau aporta el mode clúster (`pm2 start app.js -i max`) en un servidor modern de 8 nuclis?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) Augmenta la velocitat del rellotge de la memòria RAM.</button>
    <button class="btn-check" data-correct="true">B) Llença 8 instàncies de Node.js en paral·lel (una per cada nucli de CPU) i balanceja automàticament les connexions HTTP entrants entre totes elles, aprofitant el 100% de la capacitat de càlcul del servidor.</button>
    <button class="btn-check" data-correct="false">C) Apaga els 7 nuclis restants per no malgastar energia.</button>
    <button class="btn-check" data-correct="false">D) Tradueix el codi JavaScript a codi C++ natiu.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

<div class="interactive-challenge-card" data-points="25" data-challenge-id="daw-ut03-repte-04">
  <div class="challenge-header">
    <span class="challenge-badge">Repte 4 · +25 XP</span>
    <h4>Diferència entre WSGI i ASGI en Python</h4>
  </div>
  <p class="challenge-question">Quin gran avantatge aporta l'especificació **ASGI** (com Uvicorn) enfront del clàssic **WSGI** (com Gunicorn estàndard) en el desplegament d'APIs modernes en Python (com FastAPI)?</p>
  <div class="challenge-options">
    <button class="btn-check" data-correct="false">A) ASGI només serveix per a crear bases de dades SQLite.</button>
    <button class="btn-check" data-correct="true">B) ASGI admet processament asíncron natiu (`async` / `await`), permetent gestionar milers de connexions de llarga durada simultànies com WebSockets, esdeveniments enviats pel servidor (SSE) i peticions concurrents sense bloquejar fils de treball.</button>
    <button class="btn-check" data-correct="false">C) WSGI és un llenguatge de programació nou.</button>
    <button class="btn-check" data-correct="false">D) ASGI impedeix l'ús de funcions matemàtiques.</button>
  </div>
  <div class="feedback-msg"></div>
</div>

---

<div class="aules-delivery-card">
  <div class="aules-header">
    <span class="aules-badge">Lliurament Aules</span>
    <h4>Projecte de Síntesi 03: Desplegament Multillenguatge darrere de Proxy Invers</h4>
  </div>
  <p>En un mateix servidor de laboratori, desplega: 1) Una aplicació PHP gestionada per PHP-FPM, 2) Una API Node.js gestionada amb PM2 escoltant al port 3000 i 3) Una aplicació Python FastAPI gestionada amb Gunicorn/Uvicorn al port 5000. Configura un servidor Nginx perimetral que encamine el trànsit segons la ruta: `/php/*` cap a PHP-FPM, `/api/node/*` cap a PM2 i `/api/python/*` cap a Uvicorn. Adjunta la configuració de Nginx i captures demostrant la resposta satisfactòria dels tres entorns.</p>
  <button class="btn-aules-download" onclick="window.print()">Guardar Guia d'Estudi en PDF</button>
</div>
