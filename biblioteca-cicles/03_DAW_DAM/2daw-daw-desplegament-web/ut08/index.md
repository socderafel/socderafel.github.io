---
layout: default
title: "UD4 — Administració i Segurització de Servidors Web · Unitat Completa"
course_root: ".."
badge: "2n DAW · Grau Superior · UT8 Completa"
prev_url: "../ut09/ut09actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT9"
next_url: "../ut08/ut0801.html"
next_label: "8.1 UT 4.2 Administració de servidors web - Seguritz ➡️"
---

# 📘 UD4 — Administració i Segurització de Servidors Web (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**8.1 UT 4.2 Administració de servidors web - Seguritz**](./ut0801.md)
- [**8.2 UT 4.1 Administració de servidors web - Instal·l**](./ut0802.md)
- [**✍️ Activitats pràctiques UT8**](./ut08actividades.md)

---

# 8.1 UT 4.2 Administració de servidors web - Seguritz

> **📌 🏷️ Apunt de la Unitat**
> #### Setmana del 18/12/23 al 22/12/23

> **📌 🏷️ Apunt de la Unitat**
> #### Setmana del 11/12/23 al 18/12/23

---

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 4.2 Administració de servidors

web. Configuració i securització d’un servidor Apache2. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- MIME....................................................................................................................................................3

2.1. Tipus de MIME..............................................................................................................................3 2.2. Configuració del MIME al servidor apache2................................................................................5

- Configuració del tallafoc.......................................................................................................................8
- Deshabilitar els headers.........................................................................................................................9
- Deshabilitar els mòduls que no s'utilitzen.............................................................................................9
- Autenticació i control d'accés..............................................................................................................10

6.1. Creació d’un usuari adminweb:...................................................................................................10 6.2. Instal·lar les utilitats d’apache2...................................................................................................10 6.3. Creació d’un arxiu de contrasenyes d’apache2...........................................................................11 6.4. Configuració de l'autenticació amb contrasenya d’apache2........................................................11 6.4.1. Arxiu de configuració de l’host virtual................................................................................11 6.4.2. Arxiu .htaccess.....................................................................................................................13

- Establiment de connexions segures.....................................................................................................15

7.1. Introducció...................................................................................................................................15 7.2. Mòdul SSL d’apache2.................................................................................................................15 7.3. Configuració del mòdul SSL.......................................................................................................17 7.4. Configuració de l’host virtual......................................................................................................19 7.5. Connexió amb http......................................................................................................................20 7.6. Primera connexió amb https........................................................................................................21 7.7. Redirecció del transit http cap a https..........................................................................................22 7.8. Notificació als sercadors del canvi de http a https......................................................................23 2 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

En esta unitat continuarem amb la configuració del servidor web Apache2 i ens centrarem en aspectes de funcionament, seguretat i manteniment com ara

- Configuració del tipus MIME,
- Configuració de l'autenticaci. i el control d'accés.
- Utilització del protocol HTTPS i certificats.
- MIME.

#### 2.1. Tipus de MIME

L'estàndard Extensions Multipropòsit de Correu d'Internet o MIME (Multipurpose Internet Mail Extensions) especifica com un programa ha de transferir fitxers de text, imatge, àudio, vídeo o qualsevol fitxer que no estigui codificat en US-ASCII. MIME està especificat en 6 RFC (Request for Comments)

- RFC 2045

- RFC 2046

- RFC 2047

- RFC 4288

- RFC 4289

- RFC 2077

Com funciona? Quan un navegador obri un fitxer, l'estàndard MIME li permet saber amb quin tipus de fitxer està treballant perquè el programa associat pugui obrir-lo correctament. Si el fitxer no té un tipus MIME especificat el programa associat pot suposar el tipus de fitxer mitjançant la seva extensió (per exemple fitxer.txt és un fitxer de text).

Com ho fa? El navegador demana la pàgina web i el servidor abans de transferir-la confirma que la petició requerida existeix i el tipus de dades que conté mitjançant referència al tipus MIME. Aquest diàleg, forma part de les capçaleres http. A les capçaleres respostes del servidor hi ha el camp Content-Type, on el servidor avisa del tipus MIME de la pàgina. Amb aquesta informació, el navegador sap com heu de presentar les dades que rep.

3 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Exemple: Obrir el lloc web https://headers.4tools.net/ Introduir https://www.tylervigen.com/spurious-correlations o qualsevol altre lloc web. Al camp Content-Type: text/html , podem veure que el contingut de la pàgina web és de tipus text/html.

On és configura? Els tipus MIME es poden indicar en tres llocs diferents

- Al servidor web.
- A la pàgina web.
- Al navegador.

El servidor ha d'estar capacitat i habilitat per gestionar diversos tipus MIME. 4 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Exemples de llocs on s’especifica el tipus de MIME. Pàgina web. Al codi de la pàgina web es referencien tipus MIME constantment en etiquetes link, script, object, form, meta: A l’enllaç a un fitxer full d'estil CSS

<link href="./estils.css" rel="stylesheet" type="text/css"> A l'enllaç a un fitxer codi javascript

```html
<script language="JavaScript" type="text/javascript" src="scripts/mijavascript.js">
```

A l’etiqueta META <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"> Navegador. A més d'estar capacitat per a interpretar el tipus concret MIME que el servidor envia, també pot, previ a l'enviament de dades, informar al servidor, quins tipus de MIME pot acceptar a la capselera.

Una capçalera Accept típica d'un navegador seria: Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8 El valor */* vol dir que el navegador acceptarà qualsevol tipus de MIME. A continuació veurem com es configura el tipus MIME al servidor. 2.2. Configuració del MIME al servidor apache2.

Podem especificar el tipus MIME per a aquells fitxers que el servidor no pugui identificar automàticament (ni per la seua extensió). En el cas d'Apache2, el mòdul mod_mime sol estar actiu per defecte. El fitxer /etc/apache2/mods-available/mime.conf està destinat a configurar aquest mòdul, i el fitxer /etc/mime.types conté la llista de tipus MIME reconeguts pel servidor.

Llistem el directori mods-available i comprovem que tenim instal·lat el mòdul MIME ls mime*.* /etc/apaceh2/mods-avaliable 5 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Al directori mods-enabled comprovem que tenim el mòdul habilitat. L’arxiu /etc/mime.types conté els tipus MIME reconeguts pel servidor. 6 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Aquest mòdul aporta diverses directives interessants per configurar els tipus MIME: ForceType i AddType. •ForceType

fa que tots els fitxers dins d'un directori siguin servits amb el tipus MIME definit. A la capçalera Content-Type es posarà el tipus MIME especificat en aquesta directiva). Només es podrà utilitzar dins del context d’un directori i fitxers .htaccess. Exemple: A la carpeta /empresa1/imatges/ volem que, independentment de l'extensió que tinga l’arxiu, es servisca com una imatge.png. Fariem servir servir la següent configuració a l’arxiu de configuracio del lloc web.

```html
sudo nano /etc/apache2/sites-enabled/empresa1.conf
```

•AddType

permet indicar quin tipus MIME s'ha d'usar per a una o més extensions concretes (s’utilitzar per a indicar el tipus MIME d'extensions no reconegudes per Apache o el sistema operatiu). Exemple: Al nostre servidor les imatges.png de la carpeta /fotos estan emmagatzemades amb extensió .imatge. Addtype permet indicar que els fitxers amb extensió .imatge tenen el tipus MIME image/png.

7 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- CONFIGURACIÓ DEL TALLAFOC.

Per a protegir el servidor web contra connexions innecessàries (o atacs) habilitem un tallafoc. Utilitzarem el tallafocs UFW (Uncomplicated Firewall), que ve instal·lat per defecte amb el SO, per a garantir les connexions per uns ports establits i mantindre tancats els altres.

Comprovem l’estat del tallafocs amb ufw status i l’activem amb ufw enable si està deshabilitat. Comprovarem els perfils registrats al UFW que li permetran gestionar les aplicacions pel seu nom.

```html
sudo ufw app list
```

Podem veure les característiques dels perfils amb ufw app info nomdel’aplicació. Amb aquesta configuració veiem que no cal obrir els ports 80 i 443 (necessaris per al transit http (port 80) i https (port 443)). 8 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- DESHABILITAR ELS HEADERS.

Les capçaleres HTTP poden contindre informació molt útil per a un atacant. Quan es realitza una petició al servidor web, aquest envia una resposta que inclou un header que generalment conté informació sobre el programari que executa el servidor web. Moltes instal·lacions d'Apatxe mostren el número de versió del servidor, el sistema operatiu i un informe de mòduls d'Apatxe instal·lats; informació que els usuaris maliciosos poden usar per a atacar el servidor.

Per a deshabilitar els headers s’ha d’editar l’arxiu de configuració d’apache2 i afegir les 2 instruccions següents. ServerSignature Off ServerTokens Prod El ServerSignature apareix a la part inferior de les pàgines generades per apache2 (p.e. mostrar l'error 404). La directiva ServerTokens servix per a determinar el que posarà apache2 a la capçalera de la resposta http del servidor.

### 5. DESHABILITAR ELS MÒDULS QUE NO S'UTILITZEN

Deshabilitar els mòduls que no s’utilitzen, ofereix dos avantatges cabdals.

- Evita atacs sobre debilitats de mòduls inactius.
- Redueix la càrrega del servidor.

Estos són alguns dels mòduls que s'instal·len per defecte, però que solen ser innecessaris: mod_imap, mod_include, mod_info, mod_userdir, mod_status, mod_autoindex... Per a llistar els mòduls que apache2 carrega escriure a la consola: apache2ctl -M Per a conéixer que mòduls inclou apache2 en temps d’execució escriure a la consola

apache2 -I Analitze la llista i confirme quals utilitza el seu servidor, els que no, simplement comente la línia a l'arxiu de configuració: 9 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- AUTENTICACIÓ I CONTROL D'ACCÉS.

Resulta útil restringir l'accés dels visitants a algunes parts d'un lloc web, ja siga de manera temporal o permanent. Encara que les aplicacions web proporcionen els seus mètodes d'autenticació i autorització, també es pot confiar amb el servidor web a l'hora de restringir l'accés a persones no autoritzades.

La primera cosa que haurem de fer es crear un perfil d’administrador web amb privilegis de root (temporals).

#### 6.1. Creació d’un usuari adminweb

adduser adminweb

Afegim l'usuari al grup su executant el següent comando

```html
sudo usermod -aG sudo adminweb
```

Podem visualitzar que el usuari adminweb s’ha afegit correctament a l’arxiu de contrasenyes i a més té permisos de su. 6.2. Instal·lar les utilitats d’apache2.

```html
sudo apt-get install apache2-utils
```

10 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 6.3. Creació d’un arxiu de contrasenyes d’apache2. El comando htpasswd ens permetrà crear un arxiu de contrasenyes que Apatxe utilitzarà per a autenticar usuaris. Anomenarem l’arxiu (ocult) .htpasswd dins de /etc/apache2.

```html
sudo htpasswd -c /etc/apache2/.htpasswd adminweb
```

> **⚠️ Nota: Afegir l'opció -c (crear), la primera vegada que ...**
> Nota: Afegir l'opció -c (crear), la primera vegada que s'usa la utilitat. Si s’ha d’afegir més usuaris no passar -c al comando htpasswd, si no, es perdrà tota la informació anterior. Nota: Crearem el fitxer amb els privilegis de l’usuari adminweb. Podem llistar el contingut de l’arxiu

6.4. Configuració de l'autenticació amb contrasenya d’apache2. Hem de configurar apache2 perquè verifique htpasswd abans de permetre l’accés al contingut protegit. Es por fer de dues maneres diferents.

- Configurar-ho directament a l'arxiu del host virtual d'un lloc.
- Mitjançant la disposició d'arxius .htaccess als directoris amb restriccions.

> **⚠️ Nota: Es recomana usar l'arxiu de l’host virtual per a ...**
> Nota: Es recomana usar l'arxiu de l’host virtual per a l’autenticació d’usuaris. 6.4.1. Arxiu de configuració de l’host virtual. Per a l’exemple hem creat un arxiu confidencial.html a la carpeta del directori /var/www/empresa1/carpeta2/privat/ 11 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Afegirem una directiva Directory a l’arxiu de l’host virtual per a protegir el directori privat i indicar que és una zona restringida a la qual només els usuaris autoritzats poden entrar.

```html
sudo nano etc/apache2/sites-enabled/empresa1.conf
```

Reiniciem i comprovem l’estat del servidor. 12 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Comprovem l’accés all directori. Després de l’autenticació ja podrem accedir als continguts del directori. 6.4.2. Arxiu .htaccess. Pot ser més còmode activar i configurar l'autenticació http des d’un fitxer .htaccess dins de la carpeta de la qual volem restringir l’accés.

Abans de res hem de modificar la configuració general d'Apache per permetre que les propietats sobre el directori arrel puguin ser modificades (AllowOverride All) amb la qual cosa, permetrem que la política sobre aquest directori puga ser diferent de l'establerta a qualsevol carpeta (cosa que definirem amb els fitxers .htaccess).

13 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Després, haurem de crear un fitxer .htaccess a la carpeta que volem protegir amb el següent contingut. A tall d’exemple hem creat la carpeta fusio_freda al directori /var/www/empresa1/carpeta1/ amb un arxiu anomenat tot_secret.html.

```html
sudo mkdir /var/www/empresa1/carpeta1/fusio_freda
```

Dins d’aquest directori creem l’arxiu top_secret.html

```html
nano sudo top_secret.html
```

Per a finalitzar creem l’arxiu .htaccess a la carpeta */fusio_freda amb el següent contingut.

```html
sudo nano /var/www/empresa1/carpeta1/fusio_freda/.htaccessl
```

Comprovem si ja tenim la carpeta restingida: 14 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- ESTABLIMENT DE CONNEXIONS SEGURES.

7.1. Introducció. Una pàgina web segura és un lloc web que utilitza el protocol https en lloc d'utilitzar el protocol http. El protocol https és idèntic al protocol http, amb l'excepció que la transferència d'informació entre el client (navegador web) i el servidor (servidor web) viatja a través d'Internet xifrada utilitzant robustos algorismes de xifratge de dades proporcionades pel paquet OpenSSL.

Els algorismes de xifratge utilitzats reunixen les característiques necessàries per a garantir que la informació que s’intercanvien el client i el servidor estiga xifrada i solament puga ser desxifrada pel client i el servidor. Si durant la transferència de la informació un 'hacker' fa una còpia dels paquets de dades i intenta desxifrar-los, els algorismes garanteixen que no podria fer-ho per força bruta en un termini interessant per a ell (mínim de diversos anys fins a assolir el codi de dexifrat de la informació).

7.2. Mòdul SSL d’apache2. En instal·lar l’apache2 s'instal·la també el mòdul ssl, per la qual cosa no és necessari instal·lar cap paquet addicional. Tan sols hem de generar un certificat per al servidor i activar el mòdul ssl. Per a comprovar si el mòdul està instal·lat, tan sols tenim que escriure a la consola

find type f /usr/lib/apache2/modules/ mod_ssl.so Nota: de no trobar l’arxiu eixiria un missatge d’aquest tipus: Al no pareixer a la llista del directori /mods-enabled podem veure el mòdul mod_ssl.so no està habilitat. 15 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web L’habilitem amb e2enmod ssl Reiniciem el servidor i comprovem que tot funciona correctament. També comprovem que l’ssl.load i l’ssl.conf estan la la carpeta sites-enabled. 16 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 7.3. Configuració del mòdul SSL. El primer pas per a configurar SSL en Apatxe serà crear el certificat i la clau, que es quedaran emmagatzemats en /etc/apache2/certs. Per a això primer creem la carpeta i després el certificat i la seua clau corresponent.

Nota important: Cal tindre en compte que estem creant un certificat autosignat. Este tipus de certificats només s'han d'usar amb el propòsit d'ensenyar o fer una demostració perquè en la pràctica no són vàlids. El navegador no confiarà en ell perquè som nosaltres els qui l'hem signat. Els certificats, perquè siguen vàlids, han de ser validats per una entitat certificadora. Més endavant veurem com el navegador avisa a l'usuari que el certificat no és fiable (encara que sempre li mostrarà l'opció de continuar malgrat això) Creació de la carpeta /etc/apache2/certs/

```html
mkdir /etc/apache2/certs
```

Creació del auto certificat i la clau privada. openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/apache2/certs/apache2.key -out /etc/apache2/certs/apache2.crt 17 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Verifiquem que el certificat i la clau estan a la carpeta /certs. Reiniciem el servidor i comprovem que funciona correctament. Ara que tenim el servidor habilitat per a oferir connexions https caldrà configurat correctament el hosts virtual per a utilitzar aquest tipus de connexions.

18 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 7.4. Configuració de l’host virtual. En aquest cas reutilitzarem un host virtual (basat en IP) i farem els canvis adients perquè utilitze la connexió segura https.

- Canviar el port d’escolta des de 80 a 443.
- Activar el suport per a SSL
- Indicar on estan el certificat i la clau privada.

```html
nano empresa1.conf
```

L’arxiu quedarà de la manera següent: 19 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Reiniciem el servidor i comprovem que funciona correctament. 7.5. Connexió amb http. Com podem veure, ja no s'acceptem aquest tipus de connexió. 20 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 7.6. Primera connexió amb https. Si ara ho fem amb https, al tindre un autocertificat ens eixiran advertències: Pitgem «Configuración avanzada» i després Acceder... 21 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 7.7. Redirecció del transit http cap a https. Per a oferir un millor serveu i sobretot no perdre visites, ens pot interessar redirigir tot el trànsit de la web cap al protocol segur https.

D’aquesta manera, fins i tot si l’usuari intenta accedir amb http, nosaltres podem redirigir-lo cap a l'opció https. En eixe cas configurem un host virtual no segur amb les opcions mínimes per a redirigir el client al segur. D’aquesta manera, tot i introduir: 22 / 23

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web El navegador obrirà: 7.8. Notificació als sercadors del canvi de http a https. Hui en dia, aquesta opció ja no té molt de sentit, posat que tot el transit web és fa mitjançant connexions https.

No obstant aquesta notificació també pot ser útil si canviem un domini (p.e de www.empresa1.es a www.novaempresa2.es. Per a notificar el canvi de http a https als sercadors de internet, haurem d’editar l’arxiu de configuració i introduir-hi: Redirect permanent IP-Domini_antic IP-Domini_nou 23 / 23

---

# 8.2 UT 4.1 Administració de servidors web - Instal·l

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 4.1 Administració de servidors

web. Instal·lació d’un servidor Apache2. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Instal·lació d’Apache............................................................................................................................3

2.1. Actualització de l’SO.....................................................................................................................3 2.2. Instal·lació de l’Apache2...............................................................................................................3 2.3. Comandaments per a la gestió bàsica del servidor........................................................................4 2.4. Primera connexió amb el servidor.................................................................................................7 2.5. Estructura de directoris d’Apache2...............................................................................................7 2.6. Configuració del servidor..............................................................................................................9 2.6.1. Global Environment.............................................................................................................10 2.6.2. Main Server Configuration..................................................................................................11 2.6.3. Virtuals Hosts.......................................................................................................................15 2.6.3.1. Creació de Virtualhosts basats en nom..........................................................................15 2.6.3.2. Virtualhosts basats en IPs..............................................................................................18 2.7. Mòduls d’un servidor d’aplicacions web....................................................................................20 2.8. Mòduls:........................................................................................................................................22 2.8.1. PHP......................................................................................................................................23 2.8.1.1. Instal·lar el php.............................................................................................................23 2.8.1.2. Desinstal·lar el php.......................................................................................................24 2.8.1.3. Habilitar el php..............................................................................................................25 2.8.1.4. Deshabilitar el php........................................................................................................25 2.8.2. Suport per a PHP.................................................................................................................25 2.8.3. Suport per a Python (WSGI / Web Server Gateway Interface)...........................................25 2.8.4. Limitar l'amplada de banda..................................................................................................26 2.8.5. Reescriptura d’URLs...........................................................................................................27 2.8.6. Desactivar la indexació de directoris...................................................................................30 2.8.7. Personalitzar fulls d’error....................................................................................................31 2.8.8. Fitxers log............................................................................................................................32 2.8.8.1. Fitxer access.log............................................................................................................33 2.8.8.2. Fitxer error.log..............................................................................................................34 2 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

En esta unitat s'explicarà tot el relacionat amb l'administració d'un servidor web basat en Apatxe 2.4. Es començarà amb la configuració avançada del servidor web, posteriorment passarem a configurar els hosts virtuals i com s'usen. També parlarem dels mòduls addicionals que posseeix Apatxe.

D'altra banda, configurarem l'autenticació i el control d'accés. Per a finalitzar configurarem la seguretat en el servidor Apatxe mitjançant el protocol HTTPS i certificats. Per què Apatxe? El gran avantatge d'Apatxe enfront de la resta de competidors, menció a part de ser Programari Lliure llicenciat baix ASL (Apatxe Programari License) és la seua capacitat de funcionament baix quasi qualsevol plataforma, independentment del Sistema Operatiu que opere en ella. Així doncs, tenim un programari de servidor funcional que podem utilitzar en la major part de servidors mundials, amb poques despeses de recursos.

La seguretat és el punt fort d'Apatxe, el qual compta amb una gran quantitat de mòduls que fortifiquen la configuració del servidor, dotant-lo de característiques de seguretat addicionals que li aporten un valor afegit a l'hora de triar entre nombroses solucions similars.

- INSTAL·LACIÓ D’APACHE.

El sistema on realitzarem la instal·lació serà sobre una màquina amb SO Ubuntu Server 22.04 LTS. Com és habitual el conjunt d’instruccions d’instal·lació és farà amb llista de comandaments com veurem a continuació. 2.1. Actualització de l’SO. Obriu un terminal i executar les ordres d’actualització dels repositoris d’Ubuntu

```html
sudo apt−get update
sudo apt−get upgrade
```

2.2. Instal·lació de l’Apache2. A continuació instal·lem l’Apache2.

```html
sudo apt−get install apache2
```

3 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Comprovem si el servidor funcion correctament.

```html
sudo service apache2 status
```

> **⚠️ Nota: Ctrl Z per a surtir del comandament i tornar a la...**
> Nota: Ctrl Z per a surtir del comandament i tornar a la linea de comandaments. 2.3. Comandaments per a la gestió bàsica del servidor. Llistat de tots els comandaments amb apache2: apache2 -h 4 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web A continuació comentarem els més utilitzats: Detindre el servidor Romandrà detingut fins al següent reinici o fins que siga arrancat manualment.

```html
service apache2 stop
```

Iniciar el servidor

```html
service apache2 start
```

Reiniciar el servidor Molt útil si hem fet algun canvi en la configuració. Cal tindre en compte que Apatxe llig la configuració una vegada en l'arrancada i no la torna a llegir fins a la següent vegada que inicia. Així, per a fer efectiu el més mínim canvi haurem de reiniciar-ho amb este comando

```html
service apache2 restart
```

Versió del servidor. apache2 -v Llistat de les directius: apache2 -L Comprovar la sintaxi dels fitxers després de modificar-los: apache2 -t o apache2ctl configtest Errors d’execució del servidor: journalctl -xe Nota: Aquest comandament a l’igual que el següent necessiten tindre instal·lat el lynx.

```html
apt install lynx
```

5 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Runtime del servidor apachectl status 6 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.4. Primera connexió amb el servidor. Aconseguim la IP del servidor amb.

```html
Ifconfig
```

Obrim el nostre navegador d’internet i introduïm la direcció del servidor. Si tot ha anat bé ha de mostrar una pàgina web per informar de la correcta instal·lació del servidor Apache. 2.5. Estructura de directoris d’Apache2. Abans de modificar la configuració per defecte, mirarem l'estructura de directoris i fitxers i veurem la funció de cadascú.

Cal tindre en compte que la configuració d'Apatxe està molt estructurada, per la qual cosa és necessari saber en quin fitxer/directori correspon configurar cada part. Realment és molt més còmode disposar de diversos fitxers de configuració xicotets que d'un molt gran.

Els directoris i fitxers queden de la següent manera: 7 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Com podem veure, amb les opcions d’instal·lació per defecte, ja tenim un lloc web per defecte a la carpeta: /var/www Explicació del directoris i fitxers: /etc/apache2/apache2.conf Fitxer de configuració principal d'Apatxe, on es poden fer canvis generals.

/etc/apache2/conf-available Conté fitxers de configuració addicionals per a diferents aspectes d'Apatxe o d'aplicacions web com phpMyAdmin. /etc/apache2/conf-enabled Conté una sèrie d'enllaços simbòlics als fitxers de configuració addicionals per a activar-los. Pot activar-se o desactivar-se amb els comandos a2enconf o a2disconf.

/etc/apache2/envvars Conté la configuració de les variables d'entorn. Nota: Si apareixen problemes de variables no definides durant la configuració de l’apache2 tipus «AH00111: Config variable ${APACHE_RUN_DIR} is not defined», provar a escriure a la consola: source /etc/apache2/envvars /etc/apache2/Magic Patrons per a mod_mime_magic.

/etc/apache2/mods-available Conté els mòduls disponibles per a usar amb Apatxe. /etc/apache2/mods-enabled Conté enllaços simbòlics a aquells mòduls d'Apatxe que es troben activats en este moment. Es creen utilitzant els comandos a2enmod i a2dismod que més endavant explicarem amb més detall /etc/apache2/ports.conf Conté la configuració dels ports on Apatxe escolta.

/etc/apache2/sites-available Conté els fitxers de configuració de cadascun dels hosts virtuals configurats i disponibles (actius o no). /etc/apache2/sites-enabled Conté una sèrie d'enllaços simbòlics als fitxers de configuració que els seus hosts virtuals es troben actius en este moment. Es creen a través dels comandos a2ensite i a2dissite que més endavant explicarem amb més detall 8 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.6. Configuració del servidor. La configuració del servidor Apache2 es fa mitjançant redacció de directives en text pla incloses a l’arxiu /etc/apache2/apache2.conf Després de configurar una directiva és necessari reiniciar el servei d'Apatxe.

Les directives es poden dividir en 3 categories

### 1. Secció 1: Global Environment

Reuneix els aspectes globals del servidor. Per exemple el nombre màxim de clients concurrents, els timeouts, el directori arrel del servidor, etc.

### 2. Secció 2: Main Server Configuration

Agrupa les directives que defineixen la manera de respondre a totes les comandes del servidor principal, és a dir aquells que no són per als hosts virtuals. També reuneix els aspectes per defecte de tots els hosts virtuals.

### 3. Secció 3: Virtual Hosts

Agrupa les directives relacionades amb els hosts virtuals que es definisquen. Requisits de les directives

### 1. Una directiva per línia. Per a indicar que una directiva continua en la següent línia

es pot posar una barra invertida \ com a últim caràcter.

### 2. Les directives no són sensibles a majúscules o minúscules però molts arguments

si que ho són.

### 3. Els arguments se separen per espais en blanc. Si un argument conté espais ha de

posar-se entre cometes.

### 4. Els comentaris comencen amb el caràcter #, i no poden estar en la mateixa línia

que una directiva.

### 5. Les línies en blanc i els espais a principi de línia s'ignoren. Només serveixen per a

facilitar la lectura dels fitxers. 9 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 2.6.1. Global Environment

ServerType { standalone | inetd } Indicar el tipus de servidor a executar. Este pot ser inetd o standalone. ServerRoot Defineix el directori on se situa tota la informació de configuració i registre que necessita el servidor per al seu correcte funcionament. PidFile La directiva PidFile especifica la ruta de l'arxiu PID (procés ANEU).

ScoreBoardFile Fitxer utilitzat per a emmagatzemar informació interna del procés servidor. Timeout Defineix, en segons, el temps que el servidor esperarà per a rebre i enviar peticions durant la comunicació, després dels quals el servidor tanca la connexió. KeepAlive Esta directiva s'utilitza per a indicar si s'activaran les connexions persistents; és a dir. el poder fer més d'una petició per connexió.

MaxKeepAliveRequests Esta directiva estableix el màxim nombre de peticions que es poden realitzar en una connexió persistent. El valor predeterminat de la directiva MaxKeepAliveRequests és de 100. KeepAliveTimeout La directiva KeepAliveTimeout estableix el nombre de segons que el servidor esperarà a la següent petició, després d'haver donat servei a una, abans de tancar la connexió.

Listen Permet especificar quin port s'utilitzarà per a atendre les peticions. Per defecte s'utilitza el port 80. LoadModule Directiva que serveix per a carregar mòduls. MaxClients Especifica la quantitat màxima de clients connectats simultàniament al servidor. Per defecte és 150.

10 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web MaxRequestsPerChild Indica la quantitat de comandes que pot atendre un procés servidor per fill abans que muira. Si s'especifica zero el número serà il·limitat. Posar límits a este número permet alliberar la memòria associada al procés.

#### 2.6.2. Main Server Configuration

ServerAdmin Especifica l'adreça de correu electrònic de l'administrador. Esta direcció apareix en els missatges d'error, per a permetre a l'usuari notificar un error a l'administrador. ServerAdmin admin@sitioweb.com ServerName Nom i port que el servidor utilitza per a identificar-se, es determina automàticament, però és recomanable especificar-lo explícitament. Si el servidor no té un nom registrat en les DNS, es recomana posar el seu número IP. La sintaxi és

ServerName direcció_IP:80 DocumentRoot És la carpeta arrel des de la qual se serviran els documents. Per defecte, totes les peticions tindran com a arrel esta carpeta. /var/www/html DirectoryIndex Fitxer que es buscarà en cas que el client no n’especifique cap. Per defecte és index.html.

> **💡 Apunt Tècnic**
> Exemple: si escrivim: www.paginaweb.com El servidor per defecte retornarà: www.paginaweb.com/index.html 11 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web AccessFileName És el nom del fitxer de configuració d'accés limitat que es buscarà en cadascun dels directoris del servidor per a conéixer la configuració d'este. Perquè esta configuració funcione, s’ha de configurar la directiva AllowOverride.

TypesConfig Especifica el nom del fitxer que conté la llista de tipus MIME que coneix el servidor. Determinarà les capçaleres http. No pot estar dins de cap secció. DefaultType Tipus MIME que es retornarà per defecte en cas de no conéixer l'extensió del fitxer que s'està servint. La directiva es pot trobar fora de qualsevol secció, dins d'una secció o dins d'un fitxer .htaccess.

Sintaxi: DefaultType tipoMime HostnameLookups S'utilitza en els fitxers de registre. Quan es produeix un accés, es guarda el seu IP. Si esta directiva es troba en On, el servidor buscarà la entre nom i IP i l'emmagatzemarà. ErrorLog Ubicació del fitxer que conté el registre d'errors. Per defecte en la carpeta logs.

LogLevel Especifica el tipus de missatges que es guardaran en el fitxer de registre d'errors. Valors de més a menys: debug, info, notice, warn, error, crit, alert, emerg. LogFormat La directiva permet definir el format que s'utilitzarà per a emmagatzemar els registres.

Poden existir diversos LogFormat diferents. Sintaxi: LogFormat configuraciónError nom 12 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web CustomLog La directiva s'utilitza per a especificar la ubicació i el tipus de format que s'utilitzarà en un fitxer de registre. Poden existir diversos fitxers de registre diferents amb configuracions diferents. Per a fer això, simplement cal posar diverses línies customlog.

Sintaxi: customLog fitxer format ServerTokens Esta directiva estableix la informació que es retorna dins de la capçalera http que envia el servidor. Possibles valors de menor a major informació són: Pord, Min, Us i Full. IndexOptions Directiva usada per a definir el sistema de visualització dels directoris. Pot ser normal o indexat. La configuració clàssica és

IndexOptions FancyIndexing AddIconByEncoding Esta directiva permet associar una icona a un tipus MIME, de manera que quan la directiva FancyIndexing estiga activada, es mostrarà al costat del fitxer la icona corresponent. Sintaxi: AddIconByEncoding icon MIME-encoding.

> **💡 Apunt Tècnic**
> Exemple: AddIconByEncoding/icons/compressed.gif x-compress AddIconByType Esta directiva associa una icona a un fitxer depenent d'un tipus MIME, de manera que quan la directiva FancyIndexing estiga activada, es mostrarà al costat del fitxer la icona corresponent. Sintaxi: AddIconByType icon MIME-encoding.

La diferència entre AddIconByEncoding i AddIconByType resideix en què mentre en la primera es determina el tipus MIME basant-se en la codificació del fitxer, AddIconByType determina el tipus MIME basant-se en el nom del fitxer. AddDescription Esta directiva permet associar una descripció a una mena de fitxer, que es mostrarà en llistar un directori.

13 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web AddDefaultCharset Esta directiva defineix la codificació de caràcters que s'utilitzarà de manera predeterminada per als documents. Per defecte ve establit el valor ISO-8859-1. ErrorDocument Esta directiva estableix la configuració del servidor per a quan es produïsca un error. Es poden establir quatre configuracions diferents: Traure un text d'error, Redirigir a un fitxer en el mateix directori, Redirigir a un fitxer en el nostre servidor i Redirigir a un fitxer fora del nostre servidor.

> **💡 Apunt Tècnic**
> Exemple: ErrorDocument 404 /error404.html Nota: En cas de no trobar-se un fitxer, es mostrarà el fitxer error404.HTML CacheRoot Estableix el directori on es trobaran els fitxers de la caixet d'Apatxe. CacheSize Mide de la caché en Kilobytes. CacheGcInterval Estableix cada quantes hores es verificarà la grandària dels fitxers de la caixet per a comprovar si es corresponen amb la grandària establida dins de CacheSize. Com més gran siga el valor d'esta directiva, més possibilitats existiran que se sobrepasse el valor establit en CacheSize.

CacheMaxExpire Màxim nombre d'hores que els fitxers romandran dins de la caché. CacheLastModifiedFactor Serveix per a calcular la caducitat d'un fitxer en la *cache, que serà el de l'hora de l'última modificació, multiplicat per este valor. 14 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web CacheDefaultExpire Nombre d'hores per defecte a partir de les quals un fitxer caduca. S'aplica en aquells casos en els quals no es pot determinar l'hora de creació del fitxer.

#### 2.6.3. Virtuals Hosts

Esta opció d'Apatxe és molt útil en el cas que comptem amb més d'un domini en el nostre servidor. El terme Hosting Virtual es refereix a fer funcionar més d'un lloc web (p.e. www.empresa1.com i www.empresa2.com) en una sola màquina i amb una sola instància d'Apatxe.

Els llocs web virtuals poden estar “basats en direccions IP”, cosa que significa que cada lloc web té una adreça IP diferent, o “basats en noms”, cosa que significa que amb una sola adreça IP estan funcionant llocs web amb diferents noms. El fet que estiguen funcionant en la mateixa màquina física passa completament desapercebut per a l'usuari que visita eixos llocs web.

2.6.3.1. Creació de Virtualhosts basats en nom. La base de la definició de hosts virtuals basats en nom consisteix a associar diversos noms de servidor a un sol host (amb una única direcció) i referenciar-los en el mètode de resolució de noms que use l'usuari (DNS, fitxer de hosts).

Este mètode permet modificar les adreces IP (de manera directa o dinàmica) sense haver de canviar la configuració d'Apatxe. Les directives bàsiques a utilitzar són les següents: Directives relacionades Descripció VirtualHost Contenidor de les directives de definició del host virtual.

ServerName Nom de l’host virtual i port ServerAlias Permet definir noms alternatius per a l’host virtual ServerPath URL per a accedir al host virtual amb navegadors no compatibles DocumentRoot Descriu el directori arrel de l'arbre de documents que va a servir a l’host virtual.

15 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web El procediment de definició de hosts virtuals basat en nom és el següent

- Definir els noms de hosts i adreça IP a utilitzar. Crear els registres corresponents (en

els fitxers de hosts o en DNS) perquè els noms siguen correctament traduïts. www.empresa1.com 192.168.1.150 www.empresa2.com 192.168.1.150

### 2. Crear els directoris dels llocs web dins de la ruta /var/www/

```html
sudo mkdir /var/www/empresa1
sudo mkdir /var/www/empresa2
```

- Concedir permisos per a modificar els fitxers.

Tenim l'estructura de directori per als arxius però, són propietat del nostre usuari root. Per a que un usuari puga modificar arxius hem de canviar els permisos.

```html
sudo chown -R $USER:$USER /var/www/empresa1
sudo chown -R $USER:$USER /var/www/empresa2
```

La variable $USER tindrà el valor de l'usuari amb el qual s’inicia la sessió. Amb això, el usuari serà propietari dels subdirectoris. També s’haurà de modificar els permisos per a garantir que es permeta l'accés de lectura al directori web i als arxius i les carpetes que conté.

```html
sudo chmod -R 755 /var/www
```

### 4. El següent pas és crear un bloc <VirtualHost> per a cada host diferent que vulga

allotjar en el servidor. L'argument de la directiva <VirtualHost> indica quina adreça IP, i possiblement port, que s'usarà per a atendre les peticions de dita Host (per exemple, una adreça IP, o un * per a usar totes les adreces que tinga el servidor). Dins de cada bloc <VirtualHost>, necessitarà com a mínim una directiva ServerName per a designar què host se serveix i una directiva DocumentRoot per a indicar on estan els continguts a servir dins del sistema de fitxers.

16 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 5. En la configuració de Apache2 existeix un directori /etc/apache2/sites-available on es

defineixen els virtualhosts, cada virtualhost en un fitxer de text de configuració diferent, així haurem de crear dos fitxers en la ruta /etc/apache2/sites-available. Fitxer configuració virtualhost: empresa1.conf <VirtualHost *.80 *.8080> DocumentRoot "/var/www/empresa1/" ServerName www.empresa1.com

ServerAlias www.empresa1.com empresa1.es www.empresa1.es </VirtualHost> Fitxer configuració virtualhost: empresa2.conf <VirtualHost *80 *.8080> DocumentRoot "/var/www/empresa2/" ServerName www.empresa2.com

ServerAlias www.empresa2.com empresa2.es www.empresa2.es </VirtualHost> Explicació del fitxers: DocumentRoot /var/www/empresa1: Definició de la ruta on està allotjada la pàgina web en el servidor. ServerName www.empresa1.com: Definició del nom DNS que buscarà la pàgina allotjada en la ruta anterior del servidor mitjançant la directiva ServerName.

ServerAlias: La directiva ServerAlias permet definir altres noms DNS per a la mateixa pàgina. </VirtualHost>: Fi de l'etiqueta VirtualHost per a la empresa1.

### 6. Habilitar els nous fitxers de virtual hosts. Ara que hem creat els nostres arxius de

host virtual, hem d'habilitar-los. Apatxe inclou l'eina a2ensite per a habilitar cadascun dels nostres llocs.

```html
sudo a2ensite empresa1
sudo a2ensite empresa2
```

17 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.6.3.2. Virtualhosts basats en IPs. Per a poder utilitzar-ho, la màquina ha de tindre diverses adreces IP. Això pot aconseguir-se, posant-li diverses targetes de xarxa, o configurant la xarxa i el sistema operatiu amb interfícies virtuals, del tipus “ip aliases”, amb el comando ifconfig.

El hosting virtual basat en IPs és molt més rar de veure i més complex de configurar. És menys flexible que el basat en noms perquè Apatxe ha de ser configurat incloent les adreces IP de manera estàtica. Les directives bàsiques a utilitzar són les següents: Directives relacionades Descripció VirtualHost Contenidor de les directives de definició del host virtual.

ServerName Nom de l’host virtual i port ServerAmin Inclou la direcció de contacte de l'administrador del servidor ServerPath URL per a accedir al host virtual amb navegadors no compatibles. ErrorLog Ubicació dels registres d’errors. TrasferLog / CustomLog Registre de peticions al servidor.

DocumentRoot Descriu el directori arrel de l'arbre de documents que va a servir a l’host virtual. El procediment de definició de hosts virtuals basat en IP és el següent

- Definir els noms de hosts i adreça IP a utilitzar. Crear els registres corresponents (en els

fitxers de hosts o en DNS) perquè els noms siguen correctament traduïts. www.empresa1.com 192.168.1.150 www.empresa2.com 192.168.1.151

- Crear els directoris dels llocs web dins de la ruta /var/www/ i els permisos corresponents.

18 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- Definir els hosts virtuals per a cadascuna de les adreces IP creant un fitxer *.conf al

directori /etc/apache2/sites-available. Fitxer configuració virtualhost: empresa1.conf <VirtualHost 192.168.1.150:80> ServerAdmin webmaster@www.empresa1com ServerName www.empresa1.com ServerAlias empresa1.com *.empresa1.com empresa1.es DocumentRoot /www/empresa1/ ErrorLog /www/logs/empresa1/error_log CustomLog /www/logs/empresa1/access_log combined </VirtualHost> Fitxer configuració virtualhost: empresa2.conf <VirtualHost 192.168.1.151:80> ServerAdmin webmaster@www.empresa2com ServerName www.empresa2.com ServerAlias empresa2.com *.empresa2.com empresa2.es DocumentRoot /www/empresa2/ ErrorLog /www/logs/empresa2/error_log CustomLog /www/logs/empresa2/access_log combined </VirtualHost>

- Habilitar els nous fitxers de virtual hosts. Ara que hem creat els nostres arxius de host

virtual, hem d'habilitar-los. Apatxe inclou l'eina a2ensite per a habilitar cadascun dels nostres llocs.

```html
sudo a2ensite empresa1
sudo a2ensite empresa2
```

19 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.7. Mòduls d’un servidor d’aplicacions web. La gran majoria de servidors web permeten la instal·lació de mòduls per ampliar les seves funcionalitats. Tenir funcionalitats en forma de mòdul permet adaptar millor el consum de recursos del servidor web a les nostres necessitats de producció (el servidor web només carregarà i executarà els mòduls que com a administradors tenim instal·lats i configurats).

Els mòduls es divideixen en dos directoris que pengen del principal i són els següents: /etc/apache2/mod-avaliable: mòduls que estan disponibles amb la instal·lació que existeix. /etc/apache2/mod-enabled: mòduls que estan actius i que són enllaços simbòlics al directori anterior. Estos mòduls es carregaran la pròxima vegada que s’nicice Apatxe2.

En el directori mod-avaliable es tenen dos tipus de fitxers amb extensions .conf i .load. El fitxer .load per exemple mod_userdir.load, té la línia LoadModule userdir_module /usr/lib/apache2/modules/mod_userdir.so que permet carregar la llibreria de la ruta anterior, i el fitxer mod_userdir.conf conté la configuració de com actua la directiva en el servidor web.

Per a listar el moduls instal·lats escruire a la consola: apachectl -M 20 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Com podem veure alguns mòduls són estàtics (static) o compartits (shared). Un mòdul estàtic s'inclou dins del binari d'Apatxe, per la qual cosa sempre estarà disponible. El mòdul compartit es carrega en temps d'execució i seria necessari usar la directiva LoadModule en la configuració d'Apatxe.

Els mòduls es poden trobar compilats de forma indivídual com una biblioteca d'accés dinàmic (mod_user.so) o compilats dins de l'executable d’apache2. Per a conéixer que mòduls inclou apache2 en temps d’execució escriure a la consola: apatxe2 -I Per a llistar la resta de mòduls que se poden usar en qualsevol moment

ls /usr/lib/apache2/modules/ 21 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 2.8. Mòduls

A tall d’exemple haurem d’instal·lar aquests mòduls, totalment indispensables hui dia

- Suport per a llenguatge PHP
- Suport per a Python a través de la especificació WSGI (Web Server Gateway

Interface)

- Control de l'amplada de banda
- Reescriptura de URLs

En Debian, i derivats, existeixen dos comandos fonamentals per al funcionament dels mòduls: a2enmod i a2dismod. a2enmod: Habilita un mòdul. Sense cap paràmetre preguntarà que mòdul es desitja habilitar. Els fitxers de configuració dels mòduls disponibles estan en /etc/apache2/mods- available/ . En habilitar-los es crea un enllaç simbòlic des de /etc/apache2/mods-enabled/ .

a2dismod: Deshabilita un mòdul. En deshabilitar-los s'elimina l'enllaç simbòlic des de /etc/apache2/mods-enabled/ . També es poden habilitar i deshabilitar mòduls creant els enllaços simbòlics corresponents des de /etc/apache2/mods-enabled/ fins /etc/apache2/mods-available/.

Creació de l’enllaç

```html
nano /etc/apache2/mods-enabled/alias.load
```

Contingut del fitxer alias.conf

```html
nano /etc/apache2/mods-enabled/alias.conf
```

22 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 2.8.1. PHP

2.8.1.1. Instal·lar el php.

```html
sudo apt-get install php
```

Si a més volem afegir suport per a bases de dades, haurem d'instal·lar a part el SGBD que ens interesse. En el cas de PHP el més utilitzat és MySQL.

```html
sudo apt-get install mysql-server
```

També el suport del llenguatge PHP per a connectar-se amb MySQL

```html
sudo apt-get install php-mysql
```

Una vegada instal·lat el suport per a PHP, la millor manera de comprovar que tot funciona correctament és invocar la funció phpinfo(), que ens proporciona informació molt detallada sobre la seua instal·lació. Així, podem preparar un script de PHP i copiar-ho en el directori del lloc principal (/var/www/HTML)

```html
nano /var/www/html/script.php
```

23 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Si obrim el nostre navegador, introduïm la direcció amb script.php obtindrem la informació següent: 2.8.1.2. Desinstal·lar el php. Per a desinstal·lar qualsevol modul escriure a la consola

```html
sudo apt-get remove php
```

24 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.8.1.3. Habilitar el php. Donat el cas que el mòdul no s’habilite automàticament al instal·lar-lo a2enmod php 2.8.1.4. Deshabilitar el php. a2dismod php

#### 2.8.2. Suport per a PHP

Per a que php puga treballar amb imatges caldrà instal·lar els següents mòduls de les biblioteques gràfiques gd i imagick i una de optimització de la caché apcu.

```html
sudo apt-get install php-gd
sudo apt-get install php-imagick
sudo apt-get install php-apcu
```

A més, com hem optat per instal·lar PHP juntament amb MySQL, pot resultar de molta utilitat instal·lar un gestor per al SGBD (Sistema Gestor de Base de Dades) com ara el phpMyAdmin, coneguda aplicació web per a la gestió de Bases de dades MySQL.

```html
sudo apt-get install phpmyadmin
```

> **⚠️ Nota: Caldrà definir una contrasenya....**
> Nota: Caldrà definir una contrasenya.

#### 2.8.3. Suport per a Python (WSGI / Web Server Gateway Interface)

```html
sudo apt-get install libapache2-mod-wsgi-py3
```

per a configurar les directives d’aquest mòdul consultar: https://code.google.com/archive/p/modwsgi/wikis/ConfigurationDirectives.wiki https://modwsgi.readthedocs.io/en/develop/configuration.html 25 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.8.4. Limitar l'amplada de banda. El mòdul bw (bandwith), permet controlar l'amplada de banda dels usuaris que es connecten al nostre lloc web. Per a instal·lar-ho

```html
sudo apt-get install libapache2-mod-bw
```

Si prenem l’exemple d’un dels llocs virtuals creats anteriorment, el configurarem per a controlar l'amplada de banda en tot el lloc, el màxim, el mínim i el nombre de connexions simultànies per connexió (per usuari). Per a l’exemple, si no l’hem fet ja, creem un host basat en IP (d’aquesta manera podrem fer proves al nostre ordinador sense haver de canviar les DNS). Per a evitar d’haver d'escriure tot el text, utilitzarem l’arxiu 000-default.conf en el qual hi ha gran part del text ja escrit i farem un «obrir / guardar com amb el nom del nostre lloc web».

Nota important: També caldrà deshabilitar el lloc web per defecte 000-default, ja que si no, entrarà en conflicte amb el nostre lloc web. També és possible limitar la velocitat en un determinat directori per a determinats fitxers. Per exemple, si emmagatzemem en un directori específic els fitxers més grans (vídeos...) i volem limitar la velocitat només en el cas que la gent es baixe eixos fitxers escriurem al fitxer empresa1.conf

<Directory /var/www/empresa1/public_html/media> LargeFileLimit * 10240 102400 </Directory> Més informació sobre la configuració d’aquest mòdul. 26 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 2.8.5. Reescriptura d’URLs

Són diversos els motius que ens poden portar a necessitar reescriure les URL de les nostres pàgines o aplicacions web. Principalment podríem destacar els següents

- Ha canviat el domini de la web i volem portar els visitants del vell al nou domini.

Això és habitual en companyies que canvien el nom de la marca comercial.

- La URL és massa complicada i volem canviar-la per una de més senzilla de llegir,

memoritzar o transmetre pels usuaris.

- Volem potenciar el SEO de la pàgina afegint paraules clau del contingut a la URL.
- Tenim diferents versions de la pàgina dependents del dispositiu o navegador de

l'usuari, i volem redirigir-lo al més adequat.

- L'adreça originalment inclou caràcters poc amigables com el punt o la coma, i en

convertir-lo a format URL (%2C, %2F i similars) correm el risc que l'enllaç es parteixi si es copia a mà. Exemple

- Habilitar el mòdul.

```html
sudo a2enmod rewrite
```

- Reiniciar el servidor.

```html
sudo systemctl restart apache2
```

- Configuració amb .htaccess.

Un fitxer .htaccess permet modificar les regles sense accedir als fitxers de configuració del servidor. .htaccess és fonamental per a la seguretat de l’aplicació web i el punt que precedeix el nom del fitxer garanteix que el fitxer estigui ocult. Per defecte, Apache prohibeix l'ús d'un fitxer .htaccess per a aplicar regles de reescriptura, de manera que primer haurem de permetre els canvis al fitxer.

Editar el fitxer de configuració del nostre lloc web (en aquest cas virtual host basat en IP).

```html
sudo nano /etc/apache2/sites-available/empresa1.conf
```

27 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 4. Afegir el codi següent

- Reiniciar apache2 i verificar que funciona correctament.

```html
sudo systemctl restart apache2
sudo systemctl status apache2
```

- Crear un fitxer .htaccess a l'arrel del lloc web.

```html
sudo nano /var/www/empresa1/.htaccess
```

- Afegir el codi següent .

Ja tenim un fitxer .htaccess operatiu que podem utilitzar per a governar les regles d'encaminament de la nostra aplicació web.

- Configurar les regles de reescriptura.

Per a configurar les regles d’escriptura, hem de tindre en compte la sintaxi següent: RewriteRule – expressió url – substitució url – paràmetres opcionals 28 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 9. Exemple de regla

Explicació: ^ indica l'inici de l'URL després del nom del lloc web (o la IP).

```html
$ indica el final de l'URL.
```

index coincideix amb la cadena "index". index.html és el fitxer real al qual accedeix l'usuari. [NC] és una bandera que fa que la regla no distingeix entre majúscules i minúscules.

- Resultats abans de crear la regla de reescriptura.

Si introduïm una direcció incorrecta o incompleta, tindrem un missatge d’error. Per a accedir a l’index haurem de posar

- Resultats després de crear la regla de reescriptura.

29 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- Comentaris sobre l’exemple anterior.

El que hem fet, encara que siga correcte no és del tot rigorós. Quan no especifiquem cap fitxer, l’apache2 sempre busca l’arxiu index.html. Això sí, si l’escrivim malament tindrem problemes (si no hem establit regles de reescriptura).

### 13. Més informació sobre el modul rewrite

link1. link2.

#### 2.8.6. Desactivar la indexació de directoris

Aquesta característica és molt útil per donar seguretat a la nostra web, ja que evita que el servidor mostri determinada informació que pot ser utilitzada per possibles atacants. A tall d’exemple, si no tenim cap fitxer index.html al directori arrel del nostre lloc web i accedim al mateix veurem al nostre navegador la informació següent.

D'aquesta manera podrem navegar per tota l’estructura de directoris i donar una informació valuosa a tothom. 30 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Per a evitar el «Directory Listing» podem desactivar el mòdul «autoindex» o modificar la directiva del fitxer de configuració del lloc web empresa1.conf . En aquest últim cas esborrar Indexes de la línia Options Indexes FollowSymLinks.

El resultat serà el següent

#### 2.8.7. Personalitzar fulls d’error

Per a personalitzar els errors que es produïxen localment, podem afegir directives noves als fitxers .htaccess situats a qualsevol carpeta del nostre lloc web. On error_404.html (error 404 recurs no trobat) és un fitxer html creat per nosaltres i situat al directori empresa1/errores/ D’aquesta manera quan es genere un error 404 (en este cas a la carpeta arrel /empresa1) la directiva del fitxer .htaccess de la carpeta /empresa1 buscarà el fitxer error_404.html situat a la carpeta relativa /errores .

Més informació sobre els codis d’estat HTTP. 31 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web A tall d’exemple, si introduïm la url d’un full que no existeix, tindrem el resultat següent: Nota: Aquesta directiva és valida per a qualsevol carpeta aigües avall, és a dir que un error 404 a la carpeta /empresa1/carpeta1 , també tindrà el mateix resultat.

#### 2.8.8. Fitxers log

Són el fitxers empresa1.com-access.log i empresa1.com-error.log Es tracta d'informació que no és visible per als usuaris però que està directament vinculada amb la seva activitat al servidor: historial de navegació.... També està relacionada amb el sistema d'informació, com la seguretat o la connectivitat.

Al fitxer de configuració /etc/apache2/apache2.conf (/apache2) i al fitxer empresa1.conf (/sites-enabled) hi ha les directives que els configuren. Fitxer apache2.conf 32 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Fitxer empresa1.conf Es fa ús de la variable ${APACHE_LOG_DIR} per situar aquests fitxers, que per defecte serà a /var/log/apache2 (es defineix a /etc/apache2/envars). 2.8.8.1. Fitxer access.log 33 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.8.8.2. Fitxer error.log 34 / 35

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

A contin 35 / 35

---

# ✍️ Activitats pràctiques UT8

> **✍️ Activitat Pràctica 8.1 — Tasca 4 UT4**
> ##### Data de venciment : 5/2/24
>
> DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web TASCA 1
>
> ### UT 4. Administració de servidors web
>
> Instal·lació d’un servidor Apache Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.
>
> DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Activitat Instal·lar, configurar i utilitzar un servidor web amb Apache2. Pots utilitzar un servidor virtualitzat en la teua màquina. Si estàs en cloud, obri els ports necessaris en la infraestructura cloud i en la màquina servidor (firewall).
>
> El servidor haurà de tindre
>
> - Un host virtual basat en IP.
> - El mòdul PHP instal·lat i habilitat (ver captura de pantalla de l’execució de
>
> l’script.php()).
>
> - La estructura del lloc web haurà de tindre un directori privat amb control d’accés
>
> (directiva Directory) (realitzar captura de pantalla on es veja la restricció d’accés per usuari i contrasenya) .
>
> - Connexió mitjançant protocol https.
>
> Entrega de la tasca Tot el procés s’ha de documentar amb un processador de text i entregar en format PDF. El document haurà de tindre
>
> - Captura de pantalla del arxiu de configuració del lloc web lloc_web.conf
> - Captura de pantalla del arxiu .htaccess que situareu al directori amb restricció
>
> d’accés. 2 / 2

---
