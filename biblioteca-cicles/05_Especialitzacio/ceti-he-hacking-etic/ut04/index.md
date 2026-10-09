---
layout: default
title: "UD4 — Footprinting · Temari Complet"
course_root: ".."
badge: "CE Ciberseguretat (CETI) · UT4 Completa"
prev_url: "../ut03/ut0303.html"
prev_label: "⬅️ 3.3 Material adicional 2"
next_url: "../ut04/ut0401.html"
next_label: "4.1 Footprinting con Google ➡️"
---

# 📘 UD4 — Footprinting (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**4.1 Footprinting con Google**](./ut0401.md)
- [**4.2 Footprinting con Bing**](./ut0402.md)
- [**4.3 Footprinting con Shodan**](./ut0403.md)
- [**4.4 Footprint**](./ut0404.md)

---

# 4.1 Footprinting con Google

📎 **Material de laboratori (Resumen de operadores en buscadores):** `operadores_buscadores.xlsx`

---

Tema 4.1. Auditoria de seguretat: Footprint mitjançant Google. Hacking ètic (HE) 1r CIBER Alicia Ferrando Tamarit

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤AUDITORIA DE SEGURETAT. ○ INTRODUCCIÓ. ○ FASES DEL PROCÉS. ➤FOOTPRINT. ○ DEFINICIÓ. ○ LLISTAT D'EINES D'AUDITORIA DE SEGURETAT. ➤GOOGLE HACKING ○ DEFINICIÓ. ○ GOOGLE DORKS. ○ EXEMPLES AMB GOOGLE DORKS. ○ MÉS DORKS. ○ ABAST DE GOOGLE HACKING.

○ GOOGLE HACKING DATABASE.

● Una auditoria es una revisió pràctica que es realitza sobre els recursos informàtics que disposa una entitat amb la finalitat d'emetre un informe o dictamen sobre la situació en què es desenvolupen i s'utilitzen. ● Un procés d'auditoria recorre certes pràctiques enfocades a les diferents proves que s'hauran de realitzar per satisfer la demanda de client, utilitzant el Hacking Ètic en algunes de les fases d’aquest procés.

Hacking ètic 1r CIBER AUDITORIA DE SEGURETAT INTRODUCCIÓ

### 1. Footprint: Recollida d'informació pública o “information gathering” (menys

important en un procés d'auditoria interna).

- Fingerprint: Anàlisi de serveis localitzats en la fase de Footprint.

### 3. Anàlisi de Vulnerabilitats sobre els serveis operatius que s’han analitzat en la

fase de Fingerprint.

- Explotació de Vulnerabilitats localitzades en la fase d'Anàlisi de Vulnerabilitats.

### 5. Generació d'informes amb les vulnerabilitats localitzades i les possibles

solucions. Hacking ètic 1r CIBER AUDITORIA DE SEGURETAT FASES DEL PROCÉS

● Aquest procés es centra en la recollida d'informació pública d'Internet, pel que el seu ús no comporta la vulneració de cap llei, i per tant no és considerada delicte. El delicte és utilitzar aquesta informació per a algun benefici. ● Aquesta fase no sol realitzar-se en un procés d'auditoria interna o auditoria de xarxa, o si es realitza, és de manera superficial, ja que no és habitual que es filtre informació interna de l'organisme que puga ser d'utilitat en aquest àmbit.

● Per fer un Footprint d'un organisme necessitarem conèixer un llistat d'eines d'auditoria de seguretat que veurem a continuació. Hacking ètic 1r CIBER FOOTPRINT DEFINICIÓ

❖Google (Hacking): El cercador Google es pot utilitzar per fer recerques avançades les quals poden proporcionar informació sensible i interessant d’una organització que no estigui ben configurada o fortificada. ❖Bing (Hacking): De la mateixa manera que amb Google hacking, es pot utilitzar el cercador de Microsoft per traure informació sensible i interessant.

❖Shodan: És un cercador d'actius o dispositius online. És molt interessant per identificar càmeres web, impressores, scada, i altres recursos exposats a Internet. Hacking ètic 1r CIBER FOOTPRINT LLISTAT D'EINES D'AUDITORIA DE SEGURETAT

❖Anubis: Eina que conté un gran set d’utilitats per recol·lectar informació. Automatitzarem diverses recerques amb aquesta eina. ❖FOCA Final Version: Eina privativa similar a Anubis que compta, a més, amb funcionalitats avançades d'anàlisi de metadades. ❖Serveis online: Diferents serveis online que podran ser de gran utilitat en un procés d'auditoria, com, per exemple, Cuwhois, Robtex, Netcraft, Chatox, etc.

Hacking ètic 1r CIBER FOOTPRINT LLISTAT D'EINES D'AUDITORIA DE SEGURETAT

Hacking ètic 1r CIBER

● Google Hacking és un terme que engloba una àmplia gamma de tècniques per a la consulta de Google per revelar les aplicacions web vulnerables. ● Dork és un terme despectiu ja que en anglès significa idiota. A més, s'anomena “googledork” una persona inepta o tonta, segons el que revela Google.

● A més de revelar els errors en les aplicacions web, Google Hacking permet trobar les dades sensibles, útils per a l'etapa de reconeixement d'un atac. Hacking ètic 1r CIBER GOOGLE HACKING DEFINICIÓ

● Els cercadors, com Google o Bing, tenen una sèrie de paràmetres que permeten fer cerques avançades. Aquests paràmetres són denominats com Dorks. ● Els Dorks són combinacions d'operadors especials que tenen els cercadors per “afinar” les cerques que fem, i si bé són molt útils per actuar de filtre de la informació que ens tornen, també són una eina molt útil per trobar informació sensible que la gent deixa en alguns servidors, o fins i tot dispositius o pàgines web vulnerables.

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS

● Però perquè ocorre aquesta situació? ● Aquesta situació ocorre degut a que els robots de Google (aranyes) que indexen contingut (és el que fa que un lloc siga posicionat d’acord a les paraules clau que es troben) són capaços d’interpretar tot tipus de fitxers, no només pàgines web. Per tant, si una persona, que no té constància ni coneixements d’açò, deixa un fitxer amb informació sensible en un directori web que permet ser llistat, serà accedit i indexat pels robots de Google.

● La qüestió de fons és, per què algú voldria deixar un fitxer amb informació sensible dins d'un directori que és accessible públicament a través del protocol HTTP? Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS

● Aleshores, què podem trobar realitzant aquests búsquedes? ○ Fitxers que contenen noms d'usuari. ○ Directoris sensibles. ○ Detecció de versió de servidor web. ○ Arxius i servidors vulnerables. ○ Arxius que contenen contrasenyes. ○ Dades de reds i vulnerabilitats. ○ Formularis d’accés (login).

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS

● Què necessitem per a poder començar a treballar amb els Google Dork? Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS

● Hi han més de 45 Dorks que ens permeten realitzar búsquedes indexades mitjançant el buscador Google. ● A partir d’ací, anem a veure una sèrie de Google Dorks, que ens seran de gran utilitat a l’hora de realitzar búsquedes d’informació sensible. Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS

❏site: permet llistar tota la informació d'un domini concret. ❏filetype o ext: permet cercar fitxers d'un format determinat, per exemple pdfs, rdp (d'escriptori remot), imatges png, jpg, etc. per obtenir informació EXIF i un llarg etcètera. ❏intitle: permet buscar pàgines amb certes paraules en el camp title.

❏inurl: permet buscar pàgines amb paraules concretes a la URL. ❏Interessant buscar frases tipus "index of" per trobar llistats d'arxius de FTPs, "mysql server has gone away" per buscar llocs web vulnerables a injeccions SQL en Mysql, etc. Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS

❏site: permet llistar tota la informació d'un domini concret. L'ordre de búsqueda site és una ordre de Google per obtenir resultats de búsqueda relatius a totes les pàgines que conté un domini específic que apareixen als SERPs (Search Engine Results Page, en valencià, “resultats del buscador”), és a dir, que han estat indexades.

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: site

❏site: permet llistar tota la informació d'un domini concret. Una vegada hem realitzat algunes recerques específiques, serà interessant llistar totes les pàgines que estiguen pendents del domini arrel. Per a això podem ajudar- nos de la recerca: site:tomatinacon.com Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: site

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: site

● Què sap Google de nosaltres? ● És important saber el que diuen "altres organitzacions" de la web de l'organització que estem auditant. Per a això, farem servir el símbol "-" abans del verb "site" per buscar a totes les web menys a la nostra. Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: -site

● Què sap Google de nosaltres? ● És important saber el que diuen "altres organitzacions" de la web de l'organització que estem auditant. Per a això, farem servir el símbol "-" abans del verb "site" per buscar a totes les web menys a la nostra: tomatinacon.com -site:tomatinacon.com Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: -site

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: -site

❏filetype o ext: permet cercar fitxers d'un format determinat, per exemple pdfs, rdp (d'escriptori remot), imatges png, jpg, etc. per obtenir informació EXIF i un llarg etcètera. Anem a realitzar una recerca a la pàgina web de la Universitat Politècnica de València

http://www.upv.es Ara anem a realitzar una recerca de documents de word i de documents de pdf. Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: ext

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: ext:docx

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: ext:pdf

❏intitle: permet buscar pàgines amb certes paraules en el camp title. Com podem trobar aquesta notícia a Google? Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: intitle

❏intitle:aumento, ciberdelincuencia, fraude Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: intitle

❏inurl: permet buscar pàgines amb paraules concretes a la URL. L'ordre inURL és una de les ordres de búsqueda de Google utilitzada per filtrar els resultats de cerca als SERPs de Google. A través d'aquesta ordre, podeu trobar les paraules clau d'una URL. Per tant, en els motors de cerca apareixeran només els URL que continguin la paraula clau que s'ha buscat.

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: inurl

❏inurl: permet buscar pàgines amb paraules concretes a la URL. Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: inurl

Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE DORKS: MÉS DORKS DORK EXEMPLE FUNCIÓ MAP map:Algemesi La cerca et torna resultats amb mapes del lloc on li digues. RELATED related:www.movistar.es Et mostra als resultats altres pàgines similars a la que has escrit.

INTEXT intext:"password" Troba pàgines que incloguen en el text alguns o tots els termes que hages inclòs a l'ordre. CACHE cache:www.movistar.es Et mostra la còpia de la pàgina que hi ha a la memòria catxé de Google.

OPERADOR EXEMPLE FUNCIÓ OR Pelota OR palo OR paso Et mostra resultats que continguen qualsevol de les paraules que hages inclòs. AND Xataka and Software Cerca pàgines que inclouen els dos termes especificats. " " "Marca" o "Liga de fútbol femenino" Et mostra resultats on apareix el terme o els termes exactes que hagis afegit entre els “.

Xataka -Hardware Et mostra resultats on s'excloga la paraula que hages posat darrere del -. * "Liga de * femenino" Un comodí que pot coincidir amb qualsevol paraula a la cerca. #..# Móvil 200..500 euros Et mostra resultats on s'afegeix un interval de números que especifiques.

( ) ("redes sociales" OR "plataformas sociales") - Twitter Et permet combinar operadors. A l'exemple buscaràs xarxes socials o plataformes socials, però excloent Twitter dels resultats.

❏filetype:inc intext:mysql_connect password -please -could -port ● Permet trobar la informació de fitxers de configuració, podent arribar a conèixer el host, ip externa del host, nom d'usuari, correu, contrasenya, base de dades, taules, etc. de tota la cadena de connexió davant una base de dades MySQL.

● No és il·legal trobar aquesta informació, ja que és pública, es troba al cercador de Google. ● El que és il·legal és utilitzar aquesta informació per intentar accedir a una base de dades. Hacking ètic 1r CIBER GOOGLE HACKING EXEMPLES AMB GOOGLE DORKS: INFORMACIÓ DE BASES DE DADES

● Com podem utilitzar este conjunt de Dorks per al nostre procés d’auditoria amb l’empresa que ens contracte? ● Utilitzant el Dork SITE. ❏filetype:inc intext:mysql_connect password -please -could -port site:xxx.com Hacking ètic 1r CIBER GOOGLE HACKING EXEMPLES AMB GOOGLE DORKS: INFORMACIÓ DE BASES DE DADES

❏filetype:sql "MySQL dump" (pass|password|passwd|pwd) ● Aquest conjunt d'instruccions cerca un fitxer en format SQL on algú ha fet un bolcat, o dump, d'una base de dades. ● Hi ha qui fa un bolcat dels fitxers d’usuari i contrasenya, i aquest bolcat es guarda en algun lloc que pot arribar a indexar google (no té cap sentit). El gran error és guardar-lo en un lloc públic i sense xifrar.

● "MySQL dump" (pass|password|passwd|pwd) significa que dins de "MySQL dump", ens busque aquest tipus de strings. ● Funció: Podem arribar a veure tota una base de dades d'un bolcat de l'empresa que ens ha contractat per realitzar l'auditoria de seguretat. Hacking ètic 1r CIBER GOOGLE HACKING EXEMPLES AMB GOOGLE DORKS: INFORMACIÓ DE BASES DE DADES

❏"phone * * *" "address *" "email" intitle:"curriculum vitae" ● Aquest conjunt d'instruccions cerca un lloc que continga un telèfon, una direcció, una direcció de correu electrònic i que, a més, el títol siga curriculum vitae. ● Podem trobar curriculums personals a llocs públics.

● Funció: Afegint la instrucció “site” o “filetype”, podem trobar curriculums de certes persones de l'empresa que ens ha contractat per realitzar l'auditoria de seguretat. Hacking ètic 1r CIBER GOOGLE HACKING EXEMPLES AMB GOOGLE DORKS: CURRÍCULUMS

Per a realitzar búsquedes més avançades, podem fer ús dels Google Dorks que vos expose a continuació: ❏ext:sql: Ens permetrà localitzar fitxers amb instruccions SQL. ❏ext:rdp: Ens permetrà localitzar arxius RDP (Remote Desktop Protocol), per connectar-nos a Terminal Services (permet a un usuari accedir a les aplicacions i dades emmagatzemades en un altre ordinador mitjançant un accés per xarxa).

❏ext:log: Ens permetrà localitzar fitxers de logs. Instrucció de gran utilitat. ❏ext:listing: Ens permetrà llistar el contingut d'un directori. Hacking ètic 1r CIBER GOOGLE HACKING MÉS DORKS

❏ext:ws_ftp.log: Ens permetrà llistar fitxers de log del client ws_ftp (client de Protocol de Transferència d'Arxius, utilitzat per a realitzar transferències d’arxius). ❏filetype:txt site:web.com password|passwords|contraseñas|login|contraseña: Aquesta consulta cercaria als fitxers de text del lloc web que introduïu i, a l'arxiu de text, busca les cadenes "password OR passwords OR contraseñas OR login OR contraseña".

❏filetype:sql “# dumping data for table” “PASSWORD` varchar”: Bases de dades bolcades amb usuaris i/o contrasenyes: ❏intitle:”index of” “Index of /” password.txt: Per a buscar servidors amb un fitxer anomenat “password.txt”. Hacking ètic 1r CIBER GOOGLE HACKING MÉS DORKS

La base de dades de Google Hacking pot contenir la següent informació: ❏Punts d’entrada, com el Backdoor PHP C99 Shell (malware). ❏Fitxers que contenen noms d'usuari, com comptes d'usuaris en sistemes. ❏Directoris sensibles, com rutes a directoris /home (directori principal).

❏Detecció de versió de servidor web, com servidors Apache. ❏Arxius vulnerables, com panells de control de proveïdors de hosting. ❏Servidors vulnerables, com consultes SQL registrades a llocs Wordpress. Hacking ètic 1r CIBER GOOGLE HACKING ABAST DE GOOGLE HACKING

La base de dades de Google Hacking pot contenir la següent informació: ❏Missatges d'error, com missatges d'error de PHP. ❏Fitxers amb informació interessant, com mapes de llocs. ❏Formularis d'accés o login. ❏Reports de vulnerabilitats. ❏Dispositius en línia (impressores, càmeres,etc.), com un portal d'accés de routers.

Hacking ètic 1r CIBER GOOGLE HACKING ABAST DE GOOGLE HACKING

● Per analitzar diferents exemples de cerques avançades de Google Hacking podeu visitar Google Hacking Database (GHDB). ● GHDB és un repositori amb exemples de cerques a Google que es poden utilitzar per obtenir dades confidencials de servidors, com ara fitxers de configuració, noms, passwords, i altres coses interessants.

● L’ús indegut o il·legal d’aquesta informació és sols responsabilitat vostra. https://www.exploit-db.com/google-hacking-database Hacking ètic 1r CIBER GOOGLE HACKING GOOGLE HACKING DATABASE

● Aquest procés es centra en la recollida d'informació pública d'Internet, pel que l’ús d’aquestes instruccions o ferramentes de búsqueda a Google no comporta la vulneració de cap llei, i per tant no és considerada delicte. ● El delicte és utilitzar aquesta informació per a un benefici propi, exemples

○ Utilització d’informació recollida per a fins no educatius. ○ Accés a bases de dades. ○ Utilització de comptes aliens. Hacking ètic 1r CIBER GOOGLE HACKING

---

# 4.2 Footprinting con Bing

Tema 4.2. Auditoria de seguretat: Footprint amb Bing. Hacking ètic (HE) 1r CIBER Alicia Ferrando Tamarit

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤.BING HACKING ○DEFINICIÓ. ○BING DORKS. ○MÉS DORKS. ○ADVANCED OPERATOR REFERENCE.

Hacking ètic 1r CIBER

● Potser estaràs pensant: “Si ja sé com utilitzar Dorks a Google, per a què vull utilitzar Bing?” ● Doncs bé, els programes robot que recol·lecten informació dels servidors per emmagatzemar-la i després mostrar-la són diferents per a cada buscador, i fer una búsqueda a diferents buscadors té diferents resultats, així que saber utilitzar diverses eines és sempre crucial per trobar informació nova o completar la que ja tenim.

Hacking ètic 1r CIBER BING HACKING DEFINICIÓ

● Els cercadors, com Google o Bing, tenen una sèrie de paràmetres que permeten fer cerques avançades. Estos paràmetres són denominats com Dorks. ● Els Dorks són combinacions d'operadors especials que tenen els cercadors per “afinar” les cerques que fem, i si bé són molt útils per actuar de filtre de la informació que ens tornen, també són una eina molt útil per trobar informació sensible que la gent deixa en alguns servidors, o fins i tot dispositius o pàgines web vulnerables.

Hacking ètic 1r CIBER BING HACKING BING DORKS

● Al ser Bing el buscador de Microsoft, els Bing Dorks són una ferramenta de búsqueda de vulnerabilitats molt potent. No hem de caure en la trampa de subestimar la seua utilitat i abast. ● Potser el més interessant que té, i que Google no, és que ens deixa buscar per IP, trobant així tots els webs que hi ha en un servidor, per exemple.

● En el cas de Bing, el funcionament és similar al de Google, així que anem a veure algunes coses curioses del seu funcionament per a que després pugau familiaritzar-vos i practicar. Hacking ètic 1r CIBER BING HACKING BING DORKS

❏site: Funciona com a Google i servix per a buscar una pàgina web concreta. Hacking ètic 1r CIBER BING HACKING BING DORKS: site

❏filetype: buscar un tipus de fitxer. ● Segons Google -> “filetype” = “ext”. ● No és la implementació correcta perquè una cosa és el tipus de fitxer, i una altra cosa diferent l'extensió del mateix, però Google ho ha decidit així. ● A Bing no existeix la instrucció “ext”, aleshores hem d’utilitzar altres instruccions per poder trobar fitxers d’una extensió concreta.

Hacking ètic 1r CIBER BING HACKING BING DORKS: filetype

❏filetype: buscar un tipus de fitxer. ● Aquesta instrucció busca sobre el tipus de fitxer, així, un fitxer .do (utilitzat per a generar pàgines web dinàmiques a internet) que torna un fitxer .pdf quin filetype té? -> La resposta, segons Bing és que és un filetype PDF.

● Això vol dir que si tenim un fitxer amb extensió .log escrit en text pla... Quin filetype cal cercar? ● Doncs sota aquesta lògica cal cercar per filetype:txt. ● Bing s’encarregarà de cercar dins dels fitxers .log, no cal preocupar-se. Hacking ètic 1r CIBER BING HACKING BING DORKS: filetype

❏filetype:txt "ftp.log": buscar arxius de logs de transferències d’arxius. Hacking ètic 1r CIBER BING HACKING BING DORKS: filetype

❏inurl: NO existeix aquest Dork a Bing. ● Això no vol dir que Bing no busque a la URL, de fet, encara que no fiques res està buscant a la URL, així que si, per exemple, vols trobar fitxers tnsnames.ora (fitxers de configuració que defineix adreces de bases de dades per establir connexions) pots restringir per filetype:txt i cercar tnsnames.ora.

● Això tornaria fitxers tnsnames i fitxers txt, de qualsevol extensió però que siguen text pla en què aparega una referència a tnsanames.ora. Aquest comportament és genial, perquè us ajuda a trobar fitxers de configuració .conf, fitxers .back, .sh o .old on apareguin referències. Fer això a Google us obligaria a fer una cerca per cada tipus d'extensió.

Hacking ètic 1r CIBER BING HACKING BING DORKS: inurl

❏filetype:txt "tnsnames.ora": busca també a la URL. Hacking ètic 1r CIBER BING HACKING BING DORKS: inurl

❏filetype:txt "tnsnames.ora" address_list = Hacking ètic 1r CIBER BING HACKING BING DORKS: inurl

❏feed: buscar informació actualitzada. ● Una característica molt interessant de Bing és la possibilitat de buscar directament els feeds RSS (Really Simple Syndication) de les pàgines web. RSS és un format que compleix amb l'estàndard XML per compartir contingut a la web. S'utilitza per difondre informació actualitzada a usuaris subscrits a una font de continguts.

● La idea és que, si estàs buscant informació actual a blocs sobre un determinat tema, pugues trobar-la ràpidament mitjançant aquesta ordre. ● Així, si vols saber qui parla de tu, a l'estil del Google Alerts, pots fer una senzilla cerca a Bing per feed: "el teu nom artístic".

Hacking ètic 1r CIBER BING HACKING BING DORKS: feed

❏feed: buscar informació actualitzada. Hacking ètic 1r CIBER BING HACKING BING DORKS: feed

❏contains. ● Al buscador de Bing no està implementada la comanda ext de Google, així que, si es vol buscar un fitxer amb una extensió d'un filetype no suportat [Llista de Filetypes suportats a Bing] cal fer-ho traient partit del filetype:txt. Hacking ètic 1r CIBER BING HACKING BING DORKS: contains

❏contains: buscar l’extensió d’un fitxer. ● Aquest Dork està pensat per tornar-te pàgines que linken a fitxers amb l’extensió donada. ● Així que si posem contains:udl, el que tornarà és una llista de documents on hi ha algun link a un fitxer udl. ● Si tenim en compte que un document és indexat en un cercador perquè

- algú el dóna d'alta.
- està linkat des d'una pàgina html que l'enllaça.

haurem de descobrir els fitxers de l'extensió que vullgues. Hacking ètic 1r CIBER BING HACKING BING DORKS: contains

❏contains:tmp site:es: buscant per pàgines que continguen links a fitxers .tmp, només cal anar-se'n a aquesta pàgina web, mostrar el codi font i buscar el link. Hacking ètic 1r CIBER BING HACKING BING DORKS: contains

❏contains:bak site:es: buscant per pàgines que continguen links a fitxers .bak, només cal anar-se'n a aquesta pàgina web, mostrar el codi font i buscar el link. Hacking ètic 1r CIBER BING HACKING BING DORKS: contains

❏IP: Realitzar búsquedes per IPs. . ● Només cal posar una adreça IP i apareixen tots els llocs web que es troben en la mateixa. És molt interessant. ● Podem començar utilitzant aquesta instrucció per “tirar del fil”. Hacking ètic 1r CIBER BING HACKING BING DORKS: IP

❏ip:XXX.XXX.XXX.XXX Hacking ètic 1r CIBER BING HACKING BING DORKS: IP

❏ip: ● La cerca de Bing amb l'operador ip: combinat amb una paraula clau retorna resultats de pàgines indexades allotjades a l'adreça IP que escriviu. ● Exemple: ip:35.186.243.87 soccer ● Investiguem un poc? Hacking ètic 1r CIBER BING HACKING BING DORKS: IP

❏ip: ● Notareu a la imatge que aquesta instrucció extrau totes les pàgines indexades allotjades a la IP especificada i relacionades amb el terme de búsqueda "soccer". ● La cerca ha extret resultats de diferents dominis allotjats al mateix servidor. ● Exemple: ip:35.186.243.87 soccer Hacking ètic 1r CIBER BING HACKING BING DORKS: IP

❏loc: buscar pàgines localitzades a IPs relatives a un país. ● Per això cal utilitzar els codis internacionals de cada país. ● Aquests codis estan formats per dos lletres, els quals tenen relació amb el nom del país que fem referència. ● Vos deixe l’enllaç on es troben tots els [Codis de localització geogràfica].

Hacking ètic 1r CIBER BING HACKING BING DORKS: loc

❏loc:es ● Aquest és el resultat de la pàgina olympics.com buscada des d’Espanya: Hacking ètic 1r CIBER BING HACKING BING DORKS: loc

❏loc:de ● Atents als resultats de la mateixa pàgina buscant des d'una IP alemanya: Hacking ètic 1r CIBER BING HACKING BING DORKS: loc

❏prefer: Donar més importància a un títol. ❏intitle, inbody, inanchor: permet cercar termes en zones específiques de la web. ❏I la resta és jugar barrejant-ho tot amb els operadors lògics: ○ AND: &, && ○ OR: |, || ○ NOT: - Hacking ètic 1r CIBER BING HACKING MÉS DORKS

● Per analitzar diferents exemples de búsquedes avançades de Bing Hacking podeu visitar la pàgina web de Microsoft, concretament l’apartat de “Referències d'operadors avançats”, que es troba al següent enllaç: https://docs.microsoft.com/en-us/previous- versions/bing/search/ff795620(v=msdn.10)?redirectedfrom=MSDN ● En aquesta pàgina, podem trobar la següent informació per a cada operador

○ Nom de l'operador. ○ Descripció. ○ Exemple (si és necessari). Hacking ètic 1r CIBER BING HACKING ADVANCED OPERATOR REFERENCE

Hacking ètic 1r CIBER ALTRES BUSCADORS COMERCIALS

---

# 4.3 Footprinting con Shodan

Tema 4.4. Auditoria de seguretat: Footprint mitjançant Shodan. Hacking ètic (HE) 1r CIBER Alícia Ferrando Tamarit

Hacking ètic 1r CIBER La informació continguda en aquesta presentació només és per a fins educatius. EL PROFESSORAT DEL CURS D'ESPECIALITZACIÓ EN CIBERSEGURETAT EN ENTORNS DE LES TECNOLOGIES DE LA INFORMACIÓ I EL CENTRE EDUCATIU NO ES FAN RESPONSABLES DE L'ÚS INDEGUT D'AQUESTA INFORMACIÓ.

ÍNDEX Hacking ètic 1r CIBER ➤SURFACE WEB, DEEP WEB I DARK WEB. ➤SHODAN. ○ INTRODUCCIÓ. ○ DEFINICIÓ. ○ LEGAL O IL·LEGAL? ○ ENLLAÇ PER ACCEDIR A SHODAN. ○ FUNCIONAMENT DE SHODAN. ○ QUÈ TÉ DE BO SHODAN? ○ QUÈ TÉ DE ROIN SHODAN? ○ COM UTILITZAR SHODAN IL·LIMITADAMENT?

○ SHODAN COMMAND-LINE INTERFACE.

Hacking ètic 1r CIBER SURFACE WEB, DEEP WEB I DARK WEB

Hacking ètic 1r CIBER SURFACE WEB ● Surface Web és la web que tots coneixem i a la qual podem accedir utilitzant qualsevol motor de búsqueda o navegador web. ● En aquesta xarxa som fàcilment rastrejables a través de la nostra adreça IP.

● A més, està composta per totes les pàgines i serveis com Google, Facebook, Twitter, entre d'altres. Segons estimacions, estaria composta per més de 4.700 milions de pàgines indexades.

Hacking ètic 1r CIBER SURFACE WEB ● Els buscadors comercials com Google, Yahoo! o Bing només indexen entre el 4 i el 10% de tot el contingut d’Internet ● La resta és el que es coneix com la Deep Web, la web profunda que no apareix als resultats dels buscadors comercials.

Hacking ètic 1r CIBER DEEP WEB ● El terme Deep Web va ser fixat per l'empresa especialista en indexat “Bright Planet”, utilitzant-lo per descriure contingut no indexable, és a dir, que el seu contingut no està inclòs a l'índex de buscadors de la web convencional, com poden ser Google, Bing, Yahoo! o els esmentat anteriorment, entre altres.

● Cal reconduir el trànsit amb trampes, com a servidors intermediaris o VPN, que actuen com a intermediaris per a que el nostre rastre no puga ser seguit.

Hacking ètic 1r CIBER DEEP WEB ● És el primer dels dos nivells de l'Internet profund i sol confondre's el terme de Deep Web amb el de Dark Web, encara que hi ha diferència entre ambdós, ja que poc o res tenen a veure entre ells. ● La Deep Web està formada per continguts no indexables pels motors de búsqueda.

● Això no implica que el seu contingut siga il·legal ni que els usuaris que hi accedeixen siguen hackers professionals, ni molt menys. ● Simplement és contingut que Google i la resta de buscadors no tenen permès mostrar públicament. Per exemple, mitjançant etiquetes “noindex”, bloquejant l'accés mitjançant robots.txt o mostrant només el contingut als usuaris que introdueixen la contrasenya per a accedir.

Hacking ètic 1r CIBER DEEP WEB: IoT ● Una part cada vegada més important d'aquesta Deep Web són els objectes de l'Internet de les Coses: càmeres de seguretat, frigorífics, rellotges intel·ligents, alarmes, i altres dispositius que els propietaris connecten a Internet, de vegades sense la seguretat necessària, i es converteixen en una meravellosa oportunitat per als crackers que es dediquen a espiar o a robar dades personals.

Hacking ètic 1r CIBER DARK WEB ● Dark Web és la zona d'internet més fosca on hi ha informació intencionalment amagada als motors de búsqueda. ● Per això, s'utilitzen adreces IP emmascarades i només és accessible amb un navegador web especial.

● Aquestes pàgines, que utilitzen uns dominis concrets, només són accessibles amb un software especial que donen accés a les Darknets on s'allotgen.

Hacking ètic 1r CIBER DARK WEB ● Les Darknets són una col·lecció de xarxes i tecnologies que suposen una revolució a l'hora de compartir contingut digital, però és cert que per la seva naturalesa i capacitat d'anonimat han provocat que molts usuaris aprofiten la tecnologia per intercanviar continguts o serveis no legals.

● Per explicar aquest concepte es pot dir que, mentre la Dark Web és tot aquest contingut deliberadament ocult que ens trobem a Internet, les darknets són buscadors específics que allotgen aquestes pàgines.

Hacking ètic 1r CIBER SURFACE WEB, DEEP WEB I DARK WEB

Hacking ètic 1r CIBER

● “SHODAN ÉS EL BUSCADOR MÉS PERILLÓS I ATERRADOR DEL MÓN”. ● El responsable de que Shodan existisca és John Matherly, un informàtic suís que va estudiar a Califòrnia. ● John Matherly va batejar aquest temut motor de búsqueda amb el nom d'un personatge d'un videojoc dels 90 (System Shock), on el protagonista era un hacker amb la missió de aturar els malèvols plans d’un sistema amb intel·ligència artificial.

Hacking ètic 1r CIBER SHODAN INTRODUCCIÓ

● Vivim en un món interconnectat. Ja no només tenim tota la informació a Internet: moltes tasques quotidianes també s'han vist monitoritzades per la tecnologia, com ara el transport, la salut, la llar, el benestar o la indústria. ● Tot això ho podem trobar a Google, però hi ha un altre buscador gràcies al qual (o per culpa del qual) la nostra privadesa i seguretat es pot veure forçadament afectada: el buscador SHODAN.

Hacking ètic 1r CIBER SHODAN INTRODUCCIÓ

● Shodan és un buscador d'adreces HTTP connectades a Internet, moltes de les quals pertanyen a la Deep Web i no apareixen a les cerques de Google o similars. ● Shodan té com a objectiu ubicar tot tipus de dispositius que estiguen connectats a Internet: des de routers, APs, dispositius IoT, fins a càmeres de seguretat.

● Shodan és un arxiconegut buscador que no busca pàgines web, com el totpoderós buscador Google, sinó que troba tot tipus de dispositius connectats a Internet, que poden tindre o no tindre configuracions errònies de seguretat. ● Per aquest motiu, Shodan està classificat com un dels motors de búsqueda més perillosos, per tot el contingut que té.

Hacking ètic 1r CIBER SHODAN DEFINICIÓ

● Shodan s'encarrega de cercar adreces HTTP connectades a Internet que no eixen ni a Google ni a cap altre buscador similar. ● En lloc d'indexar el contingut web a través dels ports 80 (HTTP) o 443 (HTTPS) com ho fa Google, Shodan rastreja la web a la búsqueda de dispositius que responen a una altra sèrie de ports, incloent-hi: 21 (FTP), 22 (SSH), 23 (Telnet), 25 (SMTP), 80, 443, 3389 (RDP) i 5900 (VNC).

● Es poden descobrir i indexar pràcticament qualsevol dispositiu, entre una àmplia gamma que abasta webcams, routers, firewalls, electrodomèstics domèstics i molt més. Hacking ètic 1r CIBER SHODAN DEFINICIÓ

● La part més perillosa i negativa d'aquesta detecció és que tots aquests dispositius es troben connectats a Internet sense que els seus propietaris siguen conscients dels perills i riscos a nivell de seguretat, i per tant, sense comptar amb l'aplicació de mesures protectores bàsiques, com ara nom d’usuari o una contrasenya forta i robusta.

● A diferència de l'internet que tots coneixem, Shodan treballa amb resultats de la deep web o la internet oculta, que per explicar-ho de manera senzilla, inclou resultats que no són indexats pels buscadors comuns (robots.txt). Hacking ètic 1r CIBER SHODAN DEFINICIÓ

● A Shodan se'l coneix com el motor de búsqueda dels hackers, amb l'objectiu de realitzar tasques de búsqueda de noves vulnerabilitats. ● No obstant això, els crackers poden fer servir aquesta ferramenta amb finalitats malicioses a causa de la quantitat d'informació detallada que es proporciona amb cada búsqueda realitzada. Per tant, heu d’anar amb molt de compte quan utilitzeu aquesta ferramenta.

● Auditors, investigadors i tota persona que necessite informació sobre dispositius en general, pot rebre informació molt útil en qüestió de minuts. Hacking ètic 1r CIBER SHODAN DEFINICIÓ

● Shodan treballa amb resultats de la Deep Web. ● Shodan localitza i mostra qualsevol dispositiu connectat a Internet que tinga un o més forats de seguretat, com, per exemple, un port obert. ● Shodan descobrix i obté informació d'uns 500 milions de dispositius connectats a Internet, cada mes.

● Utilitzar el buscador Shodan és legal o il·legal? Hacking ètic 1r CIBER SHODAN LEGAL O IL·LEGAL?

● Tot i que Shodan treballa amb continguts de la Deep Web, SHODAN NO FA RES IL·LEGAL ja que només recopila enllaços de dispositius amb accés a internet i que comparteixen aquest enllaç de manera pública. ● Matherly va afirmar en una entrevista que a l'inici del projecte es preocupava pel tema legal, però s'ha assessorat correctament i en poques paraules, l'única cosa il·legal seria un ús incorrecte del servei que ofereix Shodan, més no la seva existència en sí.

Hacking ètic 1r CIBER SHODAN LEGAL O IL·LEGAL?

● A continuació, vos adjunte l’enllaç web a Shodan: https://www.shodan.io/ ● Shodan és un motor de búsqueda online, molt útil i fàcilment accesible, ja que és troba a una pàgina web i no és necessari descarregar cap tipus d’arxiu per fer-lo funcionar. Hacking ètic 1r CIBER SHODAN ENLLAÇ PER ACCEDIR A SHODAN

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: COM REGISTRAR-SE A SHODAN? ● En principi, podeu crear un compte de forma gratuita. ● Si no voleu crear un compte indicant un correu electrònic en particular, podeu agilitzar el vostre registre a la plataforma, iniciant sessió amb el vostre compte de Google, Facebook, Windows Live i Twitter.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: COM REGISTRAR-SE A SHODAN?

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: COM REGISTRAR-SE A SHODAN? ● Tot i això, heu de considerar que, si teniu un compte bàsic gratuït, tindreu límits de quantitat de vegades que podeu buscar a Shodan. ● En conseqüència, heu d’utilitzar l’API o esperar fins al dia següent per seguir buscant.

● En relació amb l'API, més endavant vos comentaré com fer ús per utilitzar el motor de cerca sense límits ni restriccions de búsquedes i sense haver de pagar una subscripció.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: PANTALLA PRINCIPAL

SHODAN FUNCIONAMENT DE SHODAN: EXPLORE

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: EXPLORE ● La primera pestanya que ens apareix és «Explore» (Explorar). Si entreu, podreu veure que hi apareixen tres llistes: ○ Categories populars. ○ Búsquedes específiques més populars.

○ Búsquedes compartides recentment. ● Podeu fer click a la categoria d’on voleu obtindre informació, per tal de trobar els resultats sol·licitats en segons.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: EXPLORE ● Categories populars: com veiem, les 4 categories que més eixen a les búsquedes són els Sistemes de Control Industrial, les bases de dades, la infraestructura de xarxa i els servidors de videojocs.

● A qualsevol d'aquestes i altres categories, podem especificar, a l'hora de realitzar la búsqueda, quines van ser hackejades, la quantitat de dispositius per país, per sistema operatiu utilitzada, i moltes més opcions.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: EXPLORE ● Búsquedes més populars: el que més es busca al portal de Shodan cada dia. ● La dada curiosa que podem percebre, de bon tros, és que aquest portal és utilitzat en gran mesura per localitzar càmeres de seguretat.

Així, es pot aconseguir accés a l'administrador de les càmeres perquè es puga visualitzar en temps real el que passa amb elles, entre altres.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: EXPLORE ● Búsquedes compartides recentment: són aquelles búsquedes que s'estan fent amb més freqüència de manera recent.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: BÚSQUEDES AMB OPERADORS

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: BÚSQUEDES AMB OPERADORS ● Els operadors lògics de Shodan, igual que amb els altres buscadors que ja hem vist anteriorment, s'encarreguen de filtrar les nostres búsquedes, però aquesta vegada únicament amb sistemes connectats a la xarxa.

● Depenent dels operadors utilitzats a cada búsqueda, podrem trobar tot tipus de serveis, com poden ser routers, servidors web, marcapassos, panells de control de centrals elèctriques i un sense fi de serveis a Internet que, si no estan protegits i actualitzats, podrien arribar a convertir-se en futures víctimes d’atacs de crackers.

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: BÚSQUEDES AMB OPERADORS ● Ara anem a veure alguns exemples d'operadors lògics (Dorks) al navegador Shodan: ○ city (filtrem per ciutats). ○ country (filtrem per països). ○ port (filtrem per ports).

○ title (busquem per capçaleres). ○ os (busquem per sistema operatiu). ○ iis (Internet Information Server, per a buscar un servidor).

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: BÚSQUEDES AMB OPERADORS ● Ara anem a veure alguns exemples, utilitzant aquests operadors lògics al navegador Shodan: ○ city: barcelona ○ country:us ○ port:445 (el port 445 sol fer referència al servei SMB/SAMBA).

○ title:microsoft ○ os:windows 2003 ○ iis country:de

Hacking ètic 1r CIBER SHODAN FUNCIONAMENT DE SHODAN: INFORMACIÓ TROBADA AMB CADA CERCA ● A Shodan podem trobar una gran quantitat d’informació sobre els dispositius connectats a Internet. Shodan té com a objectiu ubicar tot tipus de dispositius que estiguin connectats a Internet, és a dir, des de routers, APs, dispositius IoT fins a càmeres de seguretat.

● Recordeu que Shodan és un motor de búsqueda de dispositius online. Per tant, Shodan no s’encarrega de trobar pàgines web ni arxius vulnerables. ● A continuació, anem a veure un exemples, per a que pugau entendre el funcionament de Shodan.

SHODAN FUNCIONAMENT DE SHODAN: SERVIDORS APACHE A ESPANYA

SHODAN FUNCIONAMENT DE SHODAN: SERVIDORS APACHE A ESPANYA Hacking ètic 1r CIBER ● Ens apareixeran els resultats d'aquesta manera. Al lateral, podem veure un rànking dels països que més organitzacions tenen, els quals tenen servidors Apache. Altres llistes que podem vore son

○ Top de ciutats. ○ Top d'organitzacions. ○ Top de sistemes operatius utilitzats. ○ Top de productes. ● Podem fer click a cada un dels elements de cada llista per als resultats que comencen a tenir més filtres i s'adapten a la informació que volem obtenir.

SHODAN FUNCIONAMENT DE SHODAN: SERVIDORS APACHE A ESPANYA

SHODAN FUNCIONAMENT DE SHODAN: SERVIDORS DE MINECRAFT Hacking ètic 1r CIBER

SHODAN FUNCIONAMENT DE SHODAN: SERVIDORS DE MINECRAFT

SHODAN FUNCIONAMENT DE SHODAN: DISPOSITIUS AMB WINDOWS SERVER 2003 Hacking ètic 1r CIBER

SHODAN FUNCIONAMENT DE SHODAN: DISPOSITIUS AMB WINDOWS SERVER 2003

SHODAN FUNCIONAMENT DE SHODAN: COMPROVAR SI EL TEU DISPOSITIU ÉS A SHODAN Hacking ètic 1r CIBER ● Si vols comprovar si el teu equip està actualment a Shodan, pots posar la IP pública del teu equip al buscador Shodan i, si estàs segur, obtindràs un resultat com aquest

● Per saber quina és la teva IP, només cal que li preguntes a Google «what is my ip» i el primer resultat és el de la teva IP pública.

Hacking ètic 1r CIBER SHODAN QUÈ TÉ DE BO SHODAN? ● El que ens permet fer Shodan té una part bona per als auditors, que seria el fet de poder buscar servidors que estiguen auditant o buscar qualsevol tipus de serveis, i obtenir-ne molta informació per poder realitzar les seves auditories.

● Als exemples anteriors hem pogut veure informació sobre cada IP localitzada, la seva geolocalització, el país al qual pertany, els serveis que té oberts, el port i altres dades addicionals. ● Als auditors de seguretat, aquest programa els servix de molta utilitat per saber què contenen els servidors que estem auditant.

Hacking ètic 1r CIBER SHODAN QUÈ TÉ DE ROIN SHODAN? ● El gran problema que té aquest tipus de motors de búsqueda, és que també el fan servir els crackers per a infringir la llei, i és per això que s'ha catalogat com un dels buscadors més perillosos.

● A continuació, anem a veure alguns exemples de com s'ha utilitzat Shodan per dur a terme alguns ciberatacs.

Hacking ètic 1r CIBER SHODAN QUÈ TÉ DE ROIN SHODAN?: IPHONE ● Podem fer per exemple la cerca “iPhone”, així trobarem telèfons iPhone que estiguen connectats a algun tipus de servei. ● A l'exemple següent, podem veure totes les IPs localitzades, que tenen alguna relació amb la cerca iPhone o són un iPhone.

● Utilitzant aquest sistema, es va produir un atac que es va enfocar als telèfons iPhone, un atac volumètric pel port 123 NTP usat per aquests positius.

Hacking ètic 1r CIBER SHODAN QUÈ TÉ DE ROIN SHODAN?: IPHONE

Hacking ètic 1r CIBER SHODAN QUÈ TÉ DE ROIN SHODAN?: WINDOWS ● També podem buscar per sistema operatiu, en aquest cas Windows, per a això utilitzaríem el dork os:windows. ● D'aquesta manera, trobaríem tot allò que serien sistemes Windows: podem veure els seus ports, les versions de SMB, cercar vulnerabilitats, etc. A més, tot això es podria automatitzar.

● També podem buscar, per exemple, tipus de servidors (Internet Information Server), usant el dork iis. Aquesta és una ferramenta amb la qual es pot fer un bon vector d’atac o agafar massivament IPs amb un servei en concret.

Hacking ètic 1r CIBER SHODAN COM UTILITZAR SHODAN IL·LIMITADAMENT? ● A la pàgina web de Shodan tenim un nombre limitat d’intents i restriccions de búsquedes per poder trobar dispositius de l’organització que estem auditant. Per això, podem utilitzar Shodan amb línia d'ordres.

● Shodan CLI “Command Line Interface” proporciona una manera per fer búsquedes il·limitades i sense restriccions a Shodan des d'una terminal en Linux. ● Aquesta no està instal·lada per defecte a Kali Linux, raó per la qual cal primer realitzar la seva instal·lació. ● La interfície de línia d'ordres (CLI) de Shodan està empaquetada amb la biblioteca oficial de Python per a Shodan.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE

### 1. Per a que pugau utilitzar Shodan CLI (Shodan amb la línia d'ordres), heu

d'instal·lar l’última versió de Python al vostre ordinador. ● Podeu accedir per descarregar-la i instal·lar-la, depenent del sistema operatiu que tingau: Windows, MacOS, Linux, etc. ● L’enllaç per descarregar-lo és el següent: https://www.python.org/downloads/

Hacking ètic 1r CIBER ● Vosaltres heu d’instal·lar Python a la màquina virtual de Kali Linux. ● Si no sabeu com instal·lar Python a Kali Linux, vos deixe un enllaç que conté els passos a seguir per instal·lar-lo correctament i sense que ens done cap tipus de problema

https://www.solvetic.com/tutoriales/article/8774-instalar-python-kali-linux/ SHODAN SHODAN COMMAND-LINE INTERFACE

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE

- Entreu al Terminal Emulator de Kali.

### 3. Escriviu la paraula “python” per corroborar la instal·lació correcta. Presteu

atenció, per si vos apareix algun missatge d'error. Una vegada introduïu la paraula “python”, ja accediu a l’aplicació. Si voleu eixir d’aquesta, heu d’utilitzar la instrucció exit( ) o Ctrl + D.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE

### 4. Després, escriviu la següent ordre per instal·lar l'últim del paquet de Shodan per

a la línia d'ordres (CLI)

```bash
pip install shodan
```

### 4. Ens instal·la el paquet “pip”, ja que no estava instal·lat. A la següent diapositiva

podeu vore el que ha d’apareixer. Hem d’acceptar la instal·lació per, després, poder instal·lar Shodan CLI.

Hacking ètic 1r CIBER

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE

### 6. Ara sí, escriviu la següent ordre per instal·lar l'últim del paquet de Shodan per a

la línia d'ordres (CLI)

```bash
pip install shodan
```

- Ja tenim shodan instal·lat, per poder fer búsquedes.

### 7. Ara, què ens falta?

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE

### 9. Una vegada instal·lat Shodan, has d'escriure la instrucció que correspon a la

inicialització de la plataforma amb el teu API Key, que és un codi alfanumèric, que ho pots obtenir al següent enllaç: https://cli.shodan.io/

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE 10.Trobareu un codi alfanumèric que l'has d'insertar a la següent ordre (on diu API_KEY): shodan init API_KEY 10.Després, ha d'aparèixer un missatge de confirmació de color verd

API_KEY

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE 12.Preparat! Ja podeu començar a utilitzar Shodan des de la línia d'ordres i sense les restriccions de cerca. Podeu accedir al següent enllaç per comptar amb una guia més detallada de part de la pròpia web de la plataforma

https://cli.shodan.io/ Tal com heu vist, aquesta ferramenta pot ser de gran ajuda a l'hora de realitzar tasques d'auditoria i monitorització de les xarxes de l'organització per a la qual treballem. O bé, a l'hora de fer proves en general respecte a les vulnerabilitats que es troben els serveis utilitzats a la nostra organització.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIONS ● Ara que ja tenim instal·lat Shodan CLI sense les restriccions de búsqueda, podem començar a realitzar búsquedes des del Terminal Emulator de Kali Linux. ● Shodan té moltes instruccions, però les més utilitzades són les següents

○ count. ○ download. ○ host. ○ myip. ○ parse. ○ search.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ COUNT ● La instrucció count servix per a retornar el nombre de resultats d'una consulta de búsqueda.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ DOWNLOAD ● La instrucció download servix per a descarregar resultats de búsqueda. ● La instrucció download és la que hauríeu d'utilitzar amb més freqüència quan obteniu resultats de Shodan, ja que vos permet guardar els resultats obtinguts i processar-los després mitjançant l'ordre d'anàlisi.

● Com que la pàgina de resultats utilitza crèdits de consulta, té sentit emmagatzemar sempre les búsquedes que feu, de manera que no haureu d'utilitzar crèdits de consulta per a una búsqueda que ja heu fet en el passat.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ DOWNLOAD ● La instrucció download servix per a descarregar resultats de búsqueda. ● En l’exemple següent, podeu vore una instrucció de download de resultats de dispositius online que treballen amb windows i un iis (Internet Information Server) amb versió 3.2.

● L’arxiu de descàrrega està en format JSON.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ DOWNLOAD ● L’arxiu de descàrrega està en format JSON. ● JSON (acrònim de JavaScript Object Notation, 'notació d'objecte de JavaScript') és un format de text senzill per a l'intercanvi de dades.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ HOST ● La instrucció host servix per a buscar més informació sobre el host (amfitrió), com la llistada a continuació: ○ On es troba (ciutat i país). ○ Nombre de ports oberts.

○ Quina organització posseeix la IP. ○ Les vulnerabilitats que té (si en té), en forma de CVE (CVE-YYYY-NNNN). ○ La descripció de cada port que està obert.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ HOST IP xxx.xxx.xxx.xxx IP xxx.xxx.xxx.xxx

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ MYIP ● La instrucció myip servix per a retornar la propia direcció IP d’accés a Internet. ● Recordeu que per a saber quina és la vostra direcció IP, també podeu fer una búsqueda a Google, escrivint “what is my ip” i ens tornarà la nostra IP pública.

xxx.xxx.xxx.xxx

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ PARSE ● La instrucció parse servix per a analitzar un arxiu generat amb la instrucció de download. ● La instrucció parse permet filtrar els camps que vos interessen, convertir el JSON en un CSV i és compatible amb la canalització a altres scripts.

● La instrucció parse de l’exemple següent mostra l'adreça IP, el port i l'organització en format CSV per a les dades de Windows descarregades anteriorment a l’arxiu windows-data.json.gz.

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ PARSE

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ SEARCH ● La instrucció search servix per a buscar a Shodan i veure els resultats d'una manera fàcil al Terminal Emulator. ● Per defecte, mostrarà la IP, el port, els noms del host i les dades.

● Podeu utilitzar el paràmetre --fields per imprimir els camps de bàner que us interessen. ● Per buscar windows iis 3.2 i imprimir la seva IP, port, organització i noms del host, utilitzeu la instrucció següent

Hacking ètic 1r CIBER SHODAN SHODAN COMMAND-LINE INTERFACE: INSTRUCCIÓ SEARCH shodan search --fields ip_str,port,org,hostnames windows iis 3.2

Tot i que Shodan treballa amb continguts de la Deep Web, SHODAN NO FA RES IL·LEGAL ja que només recopila enllaços de dispositius amb accés a internet i que comparteixen aquest enllaç de manera pública. Hacking ètic 1r CIBER SHODAN LEGAL O IL·LEGAL?

---

# 4.4 Footprint

Hacking Ético 23AI32CF016 Raúl Fuentes Ferrer

ÍNDICE Auditoría de Seguridad: Vulnerabilidades y Exploiting

- Footprint
- Fingerprint
- Análisis y explotación de vulnerabilidades
- Informe

HACKING ÉTICO Disclaimer: La información contenida en esta presentación sólo es para fines educativos por lo cual no me hago responsable por el uso indebido de ella.

Auditoría de Seguridad Fases del proceso

#### 1) Footprint: Recolección de información pública o information gathering (menos

importante en un proceso de auditoría interna)

#### 2) Fingerprint: Análisis de servicios localizados en la fase de Footprint

#### 3) Análisis de Vulnerabilidades sobre los servicios operativos analizados en la fase de

Fingerprint

#### 4) Explotación

de Vulnerabilidades localizadas en la fase de Análisis de Vulnerabilidades

#### 5) Generación de informes con las vulnerabilidades localizadas y sus posibles

soluciones AUDITORÍA DE SEGURIDAD

Footprint Definición Este proceso se centra en la recolección de información pública de Internet, por lo que su uso no conlleva la vulneración de ninguna ley, y por tanto no es considerada delito. Esta fase no suele realizarse en un proceso de auditoría interna o auditoría de red, o sí se realiza, es de manera superficial, ya que no es habitual que se filtre información interna del organismo que pueda sernos de utilidad en este ámbito.

Para realizar un Footprint de un organismo necesitaremos conocer una serie de herramientas de auditoría de seguridad que veremos a continuación. AUDITORÍA DE SEGURIDAD

Footprint Listado de herramientas  Google (Hacking): Aprenderemos a utilizar algunos verbos de Google para realizar búsquedas avanzadas.  Bing (Hacking): De la misma manera que con Google Hacking, estudiaremos los verbos básicos que todo auditor debe conocer del buscador de Microsoft.

 Shodan: Buscador de activos online muy interesante para identificar webcams, impresoras, scada, etc. expuestos en Internet.  FOCA Final Version: Herramienta privativa similar a Anubis que cuenta además con funcionalidades avanzadas de análisis de metadatos.  Servicios online: Distintos servicios online que podrán ser de gran utilidad en un proceso de auditoría como Cuwhois, Netcraft, Chatox, etc.

AUDITORÍA DE SEGURIDAD

Google Hacking Verbos indispensables site: permite listar toda la información de un dominio concreto. filetype o ext: permite buscar archivos de un formato determinado, por ejemplo pdfs, rdp (de escritorio remoto), imágenes png, jpg, etc. para obtener información EXIF y un largo etcétera.

intitle: permite buscar páginas con ciertas palabras en el campo title. inurl: permite buscar páginas con palabras concretas en la URL. Interesante buscar frases tipo “index of” para encontrar listados de archivos de ftps, “mysql server has gone away” para buscar sitios web vulnerables a inyecciones SQL en Mysql, etc.

AUDITORÍA DE SEGURIDAD

Google Hacking Una vez que hayamos realizado algunas búsquedas específicas será interesante listar todas las páginas que pendan del dominio raíz. Para ello podemos ayudarnos de la búsqueda site:tomatinacon.com AUDITORÍA DE SEGURIDAD

Google Hacking ¿Qué sabe Google de nosotros? Es importante averiguar que dicen “otras organizaciones” de la web de la organización que estamos auditando. Para ello usaremos el símbolo “-” antes del verbo “site” para buscar en todas las web menos en la nuestra: AUDITORÍA DE SEGURIDAD

Google Hacking Buscando cosillas…  site:trello.com password  inurl:"/app/kibana#“  inurl:”/xmlrpc.php?rsd” & ext:php site:policia.es login  “database_password” filetype:yml “config/parameters.yml”  filetype:pdf “acunetix website audit” “alerts summary”  xamppdirpasswd.txt filetype:txt “DB_PASSWORD” filetype:env  inurl:adminpanel site:gov.* AUDITORÍA DE SEGURIDAD

Google Hacking Búsquedas un poco más avanzadas "ext:sql": Nos permitirá localizar archivos con instrucciones SQL: "ext:rdp": Nos permitirá localizar archivos RDP (Remote Desktop Protocol), para conectarnos a Terminal Services y que podremos utilizar en la fase de fingerprint para obtener más información

"ext:log": Nos permitirá localizar archivos de logs. Bastante útil ya veréis :) "ext:listing": Nos permitirá listar el contenido de un directorio al invocar a este tipo de ficheros creados por WGET: "ext:ws_ftp.log": Nos permitirá listar archivos de log del cliente ws_ftp

"site:*.example.com" Con el que localizaremos los subdominios AUDITORÍA DE SEGURIDAD

Google Hacking Google Hacking Database Para analizar distintos ejemplos de búsquedas avanzadas de Google Hacking se puede visitar la Google Hacking Database (GHDB). La GHDB es un repositorio con ejemplos de búsquedas en Google que se pueden utilizar para obtener datos confidenciales de servidores, como ficheros de configuración, nombres, cámaras, impresoras, passwords, etc.

AUDITORÍA DE SEGURIDAD

Bing Hacking Virtual hosts En una auditoría podremos encontrarnos con que varios dominios compartan una IP (se conocen como virtual hosts), con lo que para buscarlos nos será de especial utilidad el buscador Bing con su verbo “IP”: AUDITORÍA DE SEGURIDAD Ip:213.0.95.35

Otros servicios A continuación usaremos distintos servicios Web que se encuentran disponibles en Internet gratuitamente y que nos permitirán analizar ciertos datos del dominio de la organización que se está auditando, como por ejemplo su dirección IP, los subdominios que cuelgan del dominio principal, su registrador mediante consultas Whois, su localización en mapas, trazas, servidores de DNS, etc.

Netcraft (http://searchdns.netcraft.com) Este servicio nos permitirá analizar los subdominios de un determinado dominio, proporcionándonos datos como sus direcciones IP, Servidores Web, Sistemas Operativos, etc. AUDITORÍA DE SEGURIDAD

Whois Empresa registradora del dominio Quién lo registro http://whois.domaintools.com/ https://www.dominios.es/dominios/ AUDITORÍA DE SEGURIDAD

Whois AUDITORÍA DE SEGURIDAD https://www.bbc.com/news/technology-33200142 https://www.3w2.eu/bancolombia- roza-catastrofe-por-no-renovar- dominio/ https://elpais.com/tecnologia//06/actualidad/1068110883_850215.html https://www.bbc.com/mundo/noticias/2 015/10/151002_tecnologia_google_san may_ved_propietario_il

Otros servicios Robtex (https://www.robtex.com /) Una auténtica navaja suiza. Tenéis enlazadas todas las herramientas que incorpora: Entre los datos más interesantes que nos podrá aportar se encuentran la IP, Servidores DNS, Registrador del dominio, País, Idioma, Lenguaje de programación del sitio Web, codificación, modelo del Servidor Web, la posición en distintos rankings, feeds, incluso si comparte servidor Web con otras páginas nos proporcionará un listado con sus vecinos AUDITORÍA DE SEGURIDAD

Shodan https://www.shodan.io/ (Muy importante) https://www.shodan.io/explore AUDITORÍA DE SEGURIDAD Motor de búsqueda que le permite al usuario encontrar iguales o diferentes tipos específicos de equipos (routers, servidores, etc.) conectados a Internet a través de una variedad de filtros. Algunos también lo han descrito como un motor de búsqueda de banners de servicios, que son metadatos que el servidor envía de vuelta al cliente. Esta información puede ser sobre el software de servidor, qué opciones admite el servicio, un mensaje de bienvenida o cualquier otra cosa que el cliente pueda saber antes de interactuar con el servidor.

Shodan recoge datos de todos los servicios, incluyendo HTTP (puerto 80, 8080), HTTPS (puerto 443, 8443), FTP (21), SSH (22) Telnet (23), SNMP (161) y SIP (5060). Fue lanzado en 2009 por el informático John Matherly, quien, en 2003 concibió la idea de buscar dispositivos vinculados a Internet. El nombre Shodan es una referencia a SHODAN, un personaje de la serie de videojuegos System Shock.

404 NOT FOUND AUDITORÍA DE SEGURIDAD HTTP 404 Not Found o HTTP 404 No encontrado es un código de estado HTTP que indica que el host ha sido capaz de comunicarse con el servidor, pero no existe el recurso que ha sido pedido.

Código fuente y campos Meta Exponiendo los interiores… AUDITORÍA DE SEGURIDAD Las metaetiquetas, etiquetas meta o elementos meta (también conocidas por su nombre en inglés, metatags o meta tags) son etiquetas HTML que se incorporan en el encabezado de una página web y que resultan invisibles para un visitante normal, pero de gran utilidad para navegadores u otros programas que puedan valerse de esta información.

Su propósito es el de incluir información (metadatos) de referencia sobre la página: autor, título, fecha, palabras clave, descripción, etc. El código fuente de un programa informático (o software) es un conjunto de líneas de texto con los pasos que debe seguir la computadora para ejecutar un programa.

El término código fuente también se usa para hacer referencia al código fuente de otros elementos del software, como por ejemplo el código fuente de una página web, que está escrito en lenguaje de marcado HTML o en Javascript, u otros lenguajes de programación web, y que es posteriormente ejecutado por el navegador web para visualizar dicha página cuando es visitada.

/robots.txt ¿Qué páginas no queremos que busquen? AUDITORÍA DE SEGURIDAD Un archivo robots.txt proporciona información a los rastreadores de los buscadores sobre las páginas o los archivos que pueden solicitar o no de tu sitio web. Se encuentra en la raíz de un sitio. Utiliza el Estándar de exclusión de robots, que es un protocolo con un pequeño conjunto de comandos que se puede utilizar para indicar el acceso al sitio web por sección y por tipos específicos de rastreadores web (como los rastreadores móviles o los rastreadores de ordenador)

Security.txt https://securitytxt.org/ AUDITORÍA DE SEGURIDAD Es un estándar propuesto para información de seguridad de sitios web que busca facilitar a investigadores de seguridad para que reporten fácilmente vulnerabilidades de seguridad.​ https://www.rfc-editor.org/rfc/rfc9116

/administrator ¡Joomla! AUDITORÍA DE SEGURIDAD

/wp-admin ¡Wordpress! AUDITORÍA DE SEGURIDAD

readme.html ¡Wordpress! AUDITORÍA DE SEGURIDAD

¿Tu email/password en Internet? AUDITORÍA DE SEGURIDAD https://haveibeenpwned.com/ https://isleaked.com/

¿Tu password en Internet? Pastebin… AUDITORÍA DE SEGURIDAD Sitio web que permite a sus usuarios subir pequeños textos, generalmente ejemplos de código fuente, para que estén visibles al público en general.

Pipi owned Y hablando de leaks y pastes… AUDITORÍA DE SEGURIDAD

archive.org http://archive.org/web/ ¿Cómo era un sitio web en el pasado? AUDITORÍA DE SEGURIDAD El Internet Archive (Archivo de Internet) es una biblioteca digital gestionada por una organización sin ánimo de lucro dedicada a la preservación de archivos, capturas de sitios públicos de la Web, recursos multimedia y también software.

Wigle https://wigle.net/ ¿Quieres saber donde hay Wi-Fi’s? AUDITORÍA DE SEGURIDAD Wigle o Wireless Geographic Logging Engine es una plataforma que recopila datos sobre los puntos de acceso a internet de todo el mundo. Los usuarios pueden registrarse en el sitio y cargar datos como hotspot, coordenadas GPS, SSID, dirección MAC y el tipo de cifrado que se utiliza en los puntos de acceso detectados.

Búsqueda de personas  abctelefonos.com  snitch.name  webmii.com AUDITORÍA DE SEGURIDAD Teniendo en cuenta que la mayoría de nosotros nos registramos en las diversas redes sociales usando la misma dirección de email, la cantidad de datos que se puede saber de una persona a través de esa dirección es enorme.

A través de un nombre, de un email o un teléfono muestra datos de todo tipo sobre su dueño. Los datos son obtenidos de redes como twitter, facebook, linkedin y otros sitios de características semejantes, siempre mostrando datos que, de una u otra forma, son públicos.

SSL Server Test https://www.ssllabs.com/ssltest/ Puntuaciones de A+ a F AUDITORÍA DE SEGURIDAD

Wappalayzer Detectar tencologías web Desarrollada en nodeJs y open source Plugins para navegadores: https://addons.mozilla.org/es/firefox/addon/wappalyzer/ https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg ?hl=es https://www.wappalyzer.com/ AUDITORÍA DE SEGURIDAD

DNS Transfer Zone Transferencia de zona de DNS Proceso por el cuál se solicita una copia de base de datos del servidor DNS AUDITORÍA DE SEGURIDAD dnsenum hackthissite.org

Certificate Transparency Proyecto que publica y monitoriza los certificados SSL Detectar certificados maliciosos o detectar una entidad certificadora comprometida https://www.certificate-transparency.org/ https://github.com/x0rz/phishing_catcher AUDITORÍA DE SEGURIDAD

```bash
python3 ./catch_phishing.py
```

https://github.com/BushidoUK/Open-source-tools-for-CTI/blob/master/Anti-Phishing%20Tools.md https://urlscan.io/

Abusing Certificate Transparency https://github.com/UnaPibaGeek/ctfr - get the subdomains from a HTTPS website

```bash
git clone https://github.com/UnaPibaGeek/ctfr.git
cd ctfr
sudo apt install python3-pip
```

pip3 install -r requirements.txt

```bash
python3 ctfr.py --help
python3 ctfr.py -d starbucks.com
python3 ctfr.py -d facebook.com -o /home/shei/subdomains_fb.txt
```

AUDITORÍA DE SEGURIDAD

TheHarvester AUDITORÍA DE SEGURIDAD Detectar Hosts, IP, Mails Diversos motores de búsqueda https://www.blackmantisecurity.com/automatizando-el-reconocimiento-de-un-red-team-con-discover-scripts/ Discover Scripts /opt/discover/ ./discover.sh https://github.com/leebaird/discover theHarvester -d kali.org -l 200 -b bing

OSINT AUDITORÍA DE SEGURIDAD Múltiples herramientas https://osintframework.com/ https://phonexicum.github.io/infosec/osint.html https://inteltechniques.com/ https://www.osinttechniques.com/ https://intelx.io/ https://medium.com/the-first-digit/osint-how-to-find-information-on-anyone-5029a3c7fd56

---
