---
layout: default
title: "UT0 — Unit 0: Introduction — Aplicacions Web | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT0 Completa"
prev_url: "../index.html"
prev_label: "⬅️ Inici Aplicacions Web"
next_url: "../ut00/ut0001.html"
next_label: "0.1 Reference Material ➡️"
---

# 📘 UT0 — Unit 0: Introduction (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**0.1 Reference Material**](#ut0001) (o [obrir en pàgina individual ➡️](./ut0001.md) )
> - [**0.2 Presentation Folder**](#ut0002) (o [obrir en pàgina individual ➡️](./ut0002.md) )
> - [**0.3 Activities**](#ut0003) (o [obrir en pàgina individual ➡️](./ut0003.md) )
> - [**0.4 EN Article- Recovery Dossier**](#ut0004) (o [obrir en pàgina individual ➡️](./ut0004.md) )
> - [**✍️ Activitats pràctiques UT0**](#ut00actividades) (o [obrir en pàgina individual ➡️](./ut00actividades.md) )

---

## 0.1 Reference Material

> **📌 Introducció de la Unitat**
> f.pelechanogarcia@edu.gva.es

> **🔗 Recurs Web: Insta WP**
> [**🌐 Obrir recurs extern (https://instawp.com/) ↗️**](https://instawp.com/)

> **🔗 Recurs Web: Alta Hosting Dinahosting**
> [**🌐 Obrir recurs extern (https://ca.dinahosting.com/usuari/tu-puntcat-hosting-gratis) ↗️**](https://ca.dinahosting.com/usuari/tu-puntcat-hosting-gratis)

> **📌 🏷️ Apunt de la Unitat**
> 3HknkAxRH4bTaKyk Ahmed-Cotxes
>
> dnmHxb9Ca5Hgs4nv Hamza-Rellotges
>
> aqCM7gTGGxaUucje Zihan-Tenda Bazar
>
> zUpcrUybLD3fKeTs Abde-Cafeteria
>
> f9H2Q3yG7aKTFnNf Javier-Professional guixaire
>
> rChTGn58hfPFz5A4 Raul-Tenda La Placeta
>
> AkVgHVNM5nP9kVv4 Cristian-
>
> MVMaQdM9LPth5Sjh Pau-Massatges
>
> Bwdye9P4jqBb34h9 Alex-Esports
>
> FmrFyCAsM3ACxUAb Rayane-Taller Mecanica
>
> VffN8haUFNqps9JG Angel-
>
> d9QPb72RDfD8KndK Alex Carrasco-
>
> M4qBctmavzGybnkx Shihui-Bar Menjar xinés
>
> r7C5VtKMg8V4KMjk Dayron-
>
> nCmrGPFGJb7xJP3K Alex E.-

---

### 📄 LLibre-EXELearning-IMS.zip

#### 📦 10_introducci.html

1.0.- Introducció

En l'enginyeria de programari s'anomena **aplicació web** a aquella eina que els usuaris poden utilitzar accedint a un servidor web a través d'Internet mitjançant un navegador. Les aplicacions web s'han popularitzat a causa de la facilitat d'accés que permeten, usant com a client el navegador web, amb independència del sistema operatiu utilitzat. A més, resulta molt interessant la facilitat per desplegar, actualitzar i mantenir aplicacions web sense necessitat de distribuir ni instal·lar programari en els equips dels usuaris potencials.

Les principals tecnologies sobre les que es basa la web són

- **HTTP** : El Protocol de Transferència d'Hipertext (HTTP) és el protocol usat en cada transacció de la World Wide Web.
- **HTML** : El Llenguatge de marques d'hipertext (HTML) fa referència a el llenguatge predominant en l'elaboració de pàgines web que s'utilitza per descriure i traduir l'estructura i informació en forma de text, així com per complementar el text amb objectes multimèdia.
- **URL** : Un Localitzador de Recursos Uniforme (URL) és una seqüència de caràcters que es fa servir per nomenar recursos a Internet per la seva localització o identificació.

Un URL combina en una direcció simple els q uatre elements bàsics d'informació necessaris per recuperar un recurs d'Internet

- El protocol que s'usa per comunicar
- El servidor amb el qual es comunica
- El port de xarxa al servidor per connectar
- La ruta a el recurs al servidor

Molts navegadors web no requereixen que l'usuari ingressi "http://" per dirigir-se a una pàgina web, ja que HTTP és el protocol més comú que s'usa en navegadors web. Igualment, atès que 80 és el port per omissió per a HTTP, no es sol especificar.
Exemple d'URL

**http://www.pelechano.com:80/smx/aw.php**

- Protocol = http
- Servidor = www.pelechano.com
- Port = 80
- Ruta = smx/aw.php

---

#### 📦 11_funcionament_de_serveis_web.html

1.1.- Funcionament de serveis web

Una aplicació web està normalment estructurada en tres capes: el **navegador web** ofereix la primera capa, un **motor** capaç d'usar alguna tecnologia web dinàmica constitueix la capa intermèdia i finalment, una **base de dades** constitueix la tercera i última capa. El navegador web envia peticions a la capa intermèdia que ofereix una interfície d'usuari i serveis valent-se de consultes a la base de dades

Utilitzant el navegador web de l'equip del client, es realitza una petició a un servidor web demanant l'accés una pàgina concreta. El servidor web consulta l'URL i accedeix al recurs demandat, executant el possible codi dinàmic (PHP) i resolent les consultes pertinents a la base de dades per a conformar un fitxer de resposta que conté codi estàtic (HTML), paràmetres relatius a el disseny (CSS) i codi dinàmic que s'executa en el client (JavaScript) per oferir la resposta final en el navegador del client.

**Esquema de funcionament d'un servidor web**

🖼️ [Imatge / Esquema: Esquema de funcionament d'un servidor web]
Llenguatges que es fan servir

- El Llenguatge de marcatge d'hipertext ( **HTML** ), fa referència al llenguatge predominant en l'elaboració de pàgines web que s'utilitza per descriure i traduir l'estructura i informació en forma de text, així com per complementar el text amb objectes multimèdia.
- Els fulls d'estil en cascada ( **CSS** ) fan referència a un llenguatge usat per descriure la presentació, aspecte i format, d'un document escrit en llenguatge de marques. La seva aplicació més comuna és donar estil a pàgines webs HTML
- **JavaScript** és un llenguatge de programació interpretat que es s'utilitza principalment en el costat del client implementat com a part d'un navegador web permetent millores en la interfície d'usuari i pàgines web dinàmiques.
- **PHP** és un llenguatge de programació d'ús general utilitzat en el servidor i originalment dissenyat per al desenvolupament web de contingut dinàmic. El codi és interpretat per un servidor web amb un mòdul de processador de PHP que genera la pàgina web resultant.
- El llenguatge de consulta estructurat ( **SQL** ) és un llenguatge declaratiu d'accés a bases de dades relacionals que permet especificar diversos tipus d'operacions en elles. Una de les seves característiques és el maneig de l'àlgebra i de el càlcul relacional que permeten efectuar consultes amb el fi de recuperar informació d'interès de bases de dades.

---

#### 📦 12_navegadors_web.html

1.2.- Navegadors web

Un **navegador web** (browser) és una aplicació que opera interpretant la informació d'arxius i llocs web perquè aquests puguin ser llegits, permetent la visualització de documents de text amb recursos multimèdia incrustats. El seguiment d'enllaços d'una pàgina a una altra es diu navegació i es realitza a través d'**hipervincles** que enllacen una porció de text o una imatge a un altre document normalment relacionat amb el text o la imatge.

La comunicació entre el servidor web i el navegador es realitza mitjançant el protocol HTTP, encara que la majoria dels browsers suporten altres protocols com FTP i HTTPS. La funció principal del navegador és descarregar documents HTML i mostrar-los en pantalla. Els primers navegadors web només suportaven una versió molt simple d'HTML. No obstant això, el ràpid desenvolupament dels navegadors web va conduir a el desenvolupament de dialectes no estàndards d'HTML i a problemes d'interoperabilitat a la web.

Un **motor de renderitzat** és un component de programari bàsic de tots els principals navegadors web. La seva funció principal és transformar els documents HTML i altres recursos d'una pàgina web en una representació visual interactiva al dispositiu de l'usuari. El motor de renderitzat pren contingut marcat (HTML) i informació de format (CSS) per mostrar el contingut ja formatat a la pantalla.

Els**principals navegadors** en funció de la quota de mercat són Google Chrome, Firefox, Microsoft Edge, Safari i Opera.

- Google Chrome és un navegador web desenvolupat per Google basat en codi obert amb el motor de renderitzat Blink que va sortir a la llum el 2008. Actualment el navegador està disponible per a la major part dels sistemes operatius d'escriptori i també està present en els sistemes operatius mòbils Android i iOS.
- Mozilla Firefox és un navegador web lliure i de codi obert desenvolupat per Microsoft Windows, Mac OS X i GNU / Linux coordinat per la Corporació Mozilla i la Fundació Mozilla.
- Microsoft Edge és un navegador web basat en Chromium i desenvolupat per Microsoft. Originalment construït amb els mateixos motors EdgeHTML i Chakra de Microsoft, el 2019 Edge va ser reconstruït com un navegador basat en Chromium, i es va llançar al gener de 2020
- Safari és un navegador web de codi tancat desenvolupat per Apple Inc. Està disponible per Mac OS X i iOS.
- Opera és un navegador web creat per l'empresa noruega Opera Software. Opera funciona en una gran varietat de sistemes operatius encara que la major quota de mercat prové del seu ús en dispositius mòbils.

**Ús dels navegadors web**
🖼️ [Imatge / Esquema: Ús dels navegadors web]

[https://gs.statcounter.com/](https://gs.statcounter.com/)
Primer navegador

El primer navegador va ser desenvolupat al CERN a finals de 1990 per Tim Berners-Lee davant la necessitat de distribuir i intercanviar informació sobre les seves investigacions d'una manera més efectiva. El seu grup va crear el Llenguatge HTML (HyperText Markup Language), el protocol HTTP (HyperText Transfer Protocol) i el sistema de localització d'objectes en la web URL (Uniform Resource Locator).

---

#### 📦 131_llenguatge_de_marques_html.html

1.3.1.- Llenguatge de marques: HTML

El llenguatge de marcat d'hipertext (HTML), fa referència a el llenguatge predominant en l'elaboració de pàgines web que s'utilitza per descriure i traduir l'estructura i informació en forma de text, així com per complementar el text amb objectes multimèdia.

El codi HTML s'escriu en text pla a través d'un editor de text o en una eina específica, anomenada editor WYSIWYG, que permet anar veient el resultat formatat de el codi introduït. L'HTML s'escriu mitjançant etiquetes específiques delimitades pels símbols de major i menys (<,>) i que usen una sintaxi interna per especificar atributs addicionals de l'element. Hi etiquetes d'inserció en què apareix únicament l'etiqueta, i altres d'activació-desactivació que inclouen una etiqueta d'obertura i una de tancament.

Les pàgines HTML guarden una estructura bàsica normalitzada i solen guardar-se amb les extensions htm. o html. Disposem de tres etiquetes principals que conformen l'estructura bàsica d'una pàgina HTML

- L'etiqueta <html> defineix l'inici i fi de el document HTML.
- L'etiqueta <head> delimita l'àrea de capçalera de el document i sol contenir metadades informatius el propòsit és facilitar als motors de recerca la indexació de l'contingut.
- L'etiqueta <body> estableix l'àrea de contingut de el document i és la que es mostra en el navegador. Dins d'aquesta etiqueta sol col·locar tot el contingut principal que serà visualitzat al navegador per part dels usuaris.

Hi ha múltiples etiquetes que permeten definir diferents formats i estructures de continguts. Entre les més usuals trobem elements per definir: capçaleres, llistes, taules, enllaços, metainformació ...
HTML: Sintaxis i estructura

**<p align="center">Text a mostrar</p>**

- Delimitador etiqueta = < >
- Etiqueta = p
- Atribut = align
- Delimitador valor = " "
- Valor = center

**Estructura d'un document HTML**

```html
<!DOCTYPE html> <html lang="ca"> <head> <meta charset="UTF-8"> <title>La meva primera pàgina</title> </head> <body> <p>Hola!</p> </body> </html>
```

---

#### 📦 132_fulls_destils_css.html

1.3.2.- Fulls d'estils: CSS

Els **fulls d'estil en cascada (CSS)** fan referència a un llenguatge usat per descriure la presentació, aspecte i format, d'un document escrit en llenguatge de marques. La seva aplicació més comú és donar estil a pàgines webs escrites en llenguatge HTML. L'**estàndard** actual es correspon amb el CSS3 i està dividit en diversos documents separats anomenats mòduls. Cada mòdul afegeix noves funcionalitats a les definides prèviament en l'estàndard CSS2 amb la intenció de mantenir la compatibilitat. Els treballs al CSS3 han anat apareixent progressivament i es troben en diferents estats de desenvolupament.

Per donar format a un document HTML mitjançant CSS podem procedir de diverses maneres

- **Mitjançant CSS introduït per l'autor de l'HTML:** És un mètode per inserir el llenguatge d'estil de pàgina directament dins d'una etiqueta HTML. No és una manera elegant perquè complica la separació de continguts i estils.
- **Un full d'estil intern:** Un full d'estil que està incrustada dins d'un document HTML, dins de l'element *<head>* , marcada per l'etiqueta *<style>* . D'aquesta manera s'obté el benefici de separar la informació de l'estil de l'HTML pròpiament dit encara que estigui en el mateix document.
- **Un full d'estil extern:** és un full d'estil que està emmagatzemada en un arxiu diferent a l'arxiu on s'emmagatzema el codi HTML. Aquesta és la manera de programar més potent, perquè separa completament les regles de format per a la pàgina HTML de l'estructura bàsica de la pàgina. Utilitzem per això l'etiqueta: *<link rel = "stylesheet" type = "text / css" href = "estil.css">*

La **sintaxi** del CSS és molt senzilla. Fes servir unes quantes paraules claus preses de l'anglès per especificar els noms dels seus selectors, propietats i atributs. Cada regla consisteix en un o més selectors i un bloc d'estils que s'aplicaran als elements de el document que compleixin amb el selector que els precedeix. Cada bloc d'estils es defineix entre claus, i està format per una o diverses declaracions d'estil amb el format: "propietat: valor;"
CSS: Sintaxi

**h1 {color: #FF0000;}**

- Selector = h1
- Separador de selector = { }
- Propietat = color
- Separador de propietat = : ;
- Valor = #FF0000

---

#### 📦 133_llenguatge_scrit_de_navegador_javascript.html

1.3.3.- Llenguatge Scrit de navegador: Javascript

**JavaScript** és un llenguatge de programació interpretat que s'utilitza principalment en el costat del client implementat com a part d'un navegador web permetent millores en la interfície d'usuari i pàgines web dinàmiques.

L'ús més comú de JavaScript és escriure funcions incloses en pàgines HTML i que interactuen amb el Model d'Objectes de el Document de la pàgina. Alguns exemples senzills d'aquest ús són

- Carregar nou contingut per a la pàgina.
- Enviar dades al servidor a través d'AJAX sense necessitat de recarregar.
- Animació dels elements de pàgina.
- Incloure contingut interactiu i reproducció d'àudio i vídeo.
- Validació dels valors d'entrada d'un formulari web.

Atès que el codi JavaScript pot executar-se localment en el navegador de l'usuari, el navegador pot respondre a les accions de l'usuari amb rapidesa fent una aplicació més fluïda. D'altra banda, el codi JavaScript pot detectar accions dels usuaris que HTML per si sola no pot, com pulsacions de teclat. Les aplicacions web s'aprofiten d'això implementant la major part de la lògica de la interfície d'usuari en JavaScript i realitzant peticions a servidor mitjançant Ajax.

Per incloure codi JavaScript en un document HTML, el codi es tanca entre etiquetes <script> que es recomana ubicar dins de la capçalera de el document <head> . A més, com en el cas dels CSS, podem separar el codi i incloure-ho des d'un arxiu extern mitjançant l'etiqueta

*<Script type = "text / javascript" src = "codigo.js"> </ script>*
AJAX

AJAX (JavaScript asíncron i XML) és una tècnica de desenvolupament web per crear aplicacions interactives que s'executen en el client mentre es manté la comunicació asíncrona amb el servidor en segon pla. D'aquesta forma és possible realitzar canvis sobre les pàgines sense necessitat de recarregar-les, millorant la interactivitat, velocitat i usabilitat en les aplicacions.
[http://www.w3schools.com/ajax](http://www.w3schools.com/ajax)

---

#### 📦 134_llenguatge_script_de_servidor_php.html

1.3.4.- Llenguatge Script de servidor: PHP

**PHP** és un llenguatge de programació d'ús general utilitzat en el servidor i originalment dissenyat per al desenvolupament web de contingut dinàmic. El codi és interpretat per un servidor web amb un mòdul de processador de PHP que genera la pàgina web resultant. L'intèrpret de PHP només executa el codi que es troba entre els seus delimitadors. Els delimitadors més comuns són *<?PHP* per obrir una secció PHP i *?>* per tancar-la. El propòsit d'aquests delimitadors és separar el codi PHP de la resta de codi, com ara l'HTML.

Pel que fa a les paraules clau, PHP comparteix amb la majoria d'altres llenguatges amb sintaxi C les condicions amb if, els bucles amb for i while i els retorns de funcions. Per exemple

*<?php echo "Hola Món"; ?>*

---

#### 📦 13_llenguatges_especfics_de_disseny_web.html

1.3.- Llenguatges específics de disseny web

Per al desenvolupament d'aplicacions web, ens trobem amb diferents tipus de llenguatges de programació específics, i cada un d'ells està orientat a solucionar funcions precises dins de l'aplicació web. D'aquesta manera podem distingir els següents

- Llenguatge de marques → Estructura i continguts.
- Llenguatge script de navegador → Millora interfície d'usuari.
- Llenguatge script de servidor → Pàgines dinàmiques.
- Fulls d'estil → Presentació, aspecte i format.

---

#### 📦 14_eines_de_disseny_web.html

1.4.- Eines de disseny web

Tot i que el disseny de pàgines web es pot realitzar amb un simple editor de text, és habitual trobar-nos amb aplicacions especialitzades WYSIWYG que faciliten l'ús d'etiquetes i permeten incrustar blocs de codi amb facilitat. Alguns dels més coneguts inclouen a Visual Studio Code, Sublime o Notepad++, encara que avui dia hi ha multitud de recursos en línia per realitzar tasques concretes de disseny web de forma gratuïta.

**Disseny i Maquetació CSS:** El procés de disseny consisteix a crear esbossos del web final mitjançant una eina gràfica, com Photoshop, GIMP o Inkscape. Després, a través de la maquetació, convertim els esbossos creats en la fase anterior en plantilles HTML amb el seu respectiu full d'estils i imatges usades.

---

#### 📦 15_relaci_entre_pgines_web_i_bases_de_dades.html

1.5.- Relació entre pàgines web i bases de dades

La utilització de llenguatges de script de servidor per dotar de dinamisme a les pàgines web, sol venir acompanyada de l'ús de bases de dades. La informació s'emmagatzema en estructures especialitzades de Sistemes Gestors de Bases de Dades (SGBD), que reben peticions des del servidor web que alimentaran la construcció dinàmica d'una web.

Hi ha multitud de SGBD, encara que en entorns de desenvolupament d'aplicacions web podem destacar els següents: MySQL, PostgreSQL, SQLite, MariaDB, Oracle i Microsoft SQL Server. MySQL ha estat un gestor molt popular però davant la seva adquisició per part d'Oracle, són molts els usuaris que estan migrant al producte GPL derivat anomenat MariaDB.

---

#### 📦 16_referncies.html

1.6.- Referències

Referències

- Consorci World Wide Web (W3C) - http://www.w3.org - [http://www.w3c.es](http://www.w3c.es)
- Internet Engineering Task Force (IETF) - [http://www.ietf.org/rfc.html](http://www.ietf.org/rfc.html)
- Request for Comments (RFC) - [http://www.rfc-es.org](http://www.rfc-es.org)
- CERN Organització Europea per la Investigació Nuclear- [http://home.web.cern.ch](http://home.web.cern.ch)
- Navegador web Firefox - [http://www.mozilla.org/es-ES/firefox](http://www.mozilla.org/es-ES/firefox)
- Navegador web Internet Explorer - [http://windows.microsoft.com/ie](http://windows.microsoft.com/ie)
- Navegador web Safari - [http://www.apple.com/es/safari](http://www.apple.com/es/safari)
- Navegador web Google Chrome - [http://www.google.com/chrome](http://www.google.com/chrome)
- Navegador web Opera - [http://www.opera.com](http://www.opera.com)
- Estàndar HTML 4.0.1 - [http://www.w3.org/TR/1999/REC-html401-19991224](http://www.w3.org/TR/1999/REC-html401-19991224)
- Estàndar HTML 5.1 - [http://www.w3.org/TR/html51](http://www.w3.org/TR/html51)
- Tutorial HTML en W3School - [http://www.w3schools.com/html](http://www.w3schools.com/html)
- Tutorial HTML5 en W3School - [http://www.w3schools.com/html/html5_intro.asp](http://www.w3schools.com/html/html5_intro.asp)
- Tutorial CSS en W3School - [http://www.w3schools.com/css](http://www.w3schools.com/css)
- Tutorial CSS3 en W3School - [http://www.w3schools.com/css3](http://www.w3schools.com/css3)
- Acid Tests - [http://www.acidtests.org](http://www.acidtests.org)
- Acid Test 2 - [http://acid2.acidtests.org](http://acid2.acidtests.org)
- Tutorial JavaScript en W3School - [http://www.w3schools.com/js](http://www.w3schools.com/js)
- Tutorial PHP en W3School - [http://www.w3schools.com/php](http://www.w3schools.com/php)
- Tutorial AJAX en W3School - [http://www.w3schools.com/ajax](http://www.w3schools.com/ajax)
- Llenguatge de script de servidor PHP - [http://php.net](http://php.net)
- Editor de pàgines web Kompozer - [http://www.kompozer.net](http://www.kompozer.net)
- Gestor de MySQL phpMyAdmin - [http://www.phpmyadmin.net](http://www.phpmyadmin.net)

---

#### 📦 20_introducci.html

2.0.- Introducció

L'evolució de les tecnologies web i els canvis d'enfocament en el desenvolupament ha anat establint una sèrie d'etapes o paradigmes habitualment referits com a web X.0 que incorporen diferents característiques.

- **Web 1.0:** És una web simplement de lectura amb l'únic objectiu d'informar. Les pàgines web són estàtiques i no s'actualitzaven de forma periòdica. Els únics possibles productors eren els editors web.
- **Web 2.0:** És un web de lectura i escriptura, on la informació s'actualitza de forma periòdica. Presenta pàgines web dinàmica i ha un intercanvi de coneixements. L'usuari és el centre, aquest interactua amb la informació i la comparteix.
- **Web 3.0:** S'expandeix a nous dispositius i plataformes. Permet tenir una millor personalització ja que els usuaris són els que decideixen quina informació és important i aconsegueix que les cerques siguin més precises i intel·ligents.

La Web 1.0 és un sistema basat en hipertext que permet classificar informació de diversos tipus. És una web estàtica simplement de lectura caracteritzat per ser un mitjà simplement per informar que no permet interacció ni col·laboració.

La Web 2.0 comprèn el canvi de paradigma en el desenvolupament d'aplicacions web que ha permès la transició d'aplicacions tradicionals cap a altres que funcionen a través de l'web i estan enfocades a l'usuari final, oferint serveis de col·laboració i interacció. Però per entendre d'on ve el terme de Web 2.0 hem de remuntar-nos a el moment en què Tim O'Reilly va utilitzar aquest terme en 2004 en una conferència en la qual es parlava del renaixement i evolució de la web. Els principis que es definien per a les aplicacions web 2.0

1- Utilitzar la web com a plataforma de desenvolupament
2- Afavorir i aprofitar al web la Intel·ligència Col·lectiva
3- Incorporar la gestió de Bases de Dades com a competència bàsica
4- Acabar amb el cicle d'actualitzacions de programari
5- Aplicar models de programació lleugera amb plantilles senzilles
6- Desenvolupar programari multiplataforma
7- Incorporar les experiències enriquidores de l'usuari

Web 3.0 és una expressió que va aparèixer per primera vegada el 2006 en un article de Jeffrey Zeldman. S'utilitza per descriure l'evolució de l'ús i la interacció de les persones a Internet mitjançant la creació de continguts accessibles per múltiples aplicacions i donant més importància a les tecnologies d'intel·ligència artificial, la web semàntica, la web Geoespacial o la Web 3D. Permet tenir una millor segmentació i personalització.

**De la web 1.0 a la web 3.0**
🖼️ [Imatge / Esquema: De la web 1.0 a la web 3.0]

Gary Hayes 2006

---

#### 📦 21__html_dinmic_ajax.html

2.1 - HTML Dinàmic: AJAX

L'HTML Dinàmic o DHTML (Dynamic HTML) designa el conjunt de tècniques que permeten crear llocs web interactius utilitzant una combinació de llenguatge HTML estàtic, un llenguatge interpretat en el costat del client (JavaScript), el llenguatge de fulls d'estil en cascada (CSS ) i la jerarquia d'objectes d'un Document Object Model (DOM).

Les principal tecnologia que incorpora la web 2.0 i que permet la creació de DHTML en les aplicacions web és AJAX (JavaScript asíncron i XML). És una tècnica de desenvolupament web per crear aplicacions interactives que s'executen en el client mentre es manté la comunicació asíncrona amb el servidor en segon pla. D'aquesta forma és possible realitzar canvis sobre les pàgines sense necessitat de recarregar-les, millorant la interactivitat, velocitat i usabilitat en les aplicacions.

És una tècnica vàlida per a múltiples plataformes i utilitzable en molts sistemes operatius i navegadors ja que està basat en estàndards oberts com JavaScript i Document Object Model (DOM).

Ajax és una combinació de quatre tecnologies ja existents

- HTML i CSS per al disseny que acompanya la informació.
- DOM (Document Object Model) accedit amb un llenguatge de scripting de client per mostrar i interactuar dinàmicament amb la informació presentada.
- XMLHttpRequest per intercanviar dades asíncrons amb el lloc web.
- XML per a la transferència de dades sol·licitades a servidor.
Components principals d'AJAX

- El Document Object Model o DOM (Modelo de Objetos del Documento) es una interfaz de programación de aplicaciones. A través del DOM, los programas pueden acceder y modificar el contenido, estructura y estilo de los documentos HTML y XML. El responsable del DOM es el W3C.
  - [http://www.w3.org/DOM](http://www.w3.org/DOM)
  - [http://html.conclase.net/w3c/dom1-es/introduction.html](http://html.conclase.net/w3c/dom1-es/introduction.html)
- XMLHttpRequest es una interfaz empleada para realizar peticiones HTTP y HTTPS a servidores Web. Se encarga de proporcionar contenido dinámico en páginas web mediante tecnologías como por ejemplo AJAX.
- XML (eXtensible Markup Language) es un lenguaje de marcas desarrollado por W3C utilizado para almacenar datos en forma legible y para facilitar el intercambio de información estructurada entre diferentes plataformas.

---

#### 📦 221__marcadors_socials.html

2.2.1 - Marcadors Socials

Els marcadors socials són un tipus d'aplicació web que permeten emmagatzemar, classificar i compartir enllaços a Internet o en una Intranet. En un sistema de marcadors socials els usuaris guarden una llista de recursos d'Internet que consideren útils en un servidor compartit. Aquestes llistes poden ser accessibles públicament o de forma privada, de manera que altres persones amb interessos similars poden veure els enllaços per categories, etiquetes o a l'atzar. També categoritzen els recursos amb "etiquetes" que són paraules clau descriptives de el recurs. La majoria dels serveis de marcadors socials permeten que els usuaris busquin marcadors associats a determinades etiquetes i classifiquin en un rànquing els recursos segons el nombre d'usuaris que els han marcat. Les millores en el servei han aconseguit incloure noves funcionalitats com vots, comentaris, importar o exportar, afegir notes, enviar enllaços per correu, notificacions automàtiques, fonts web, crear grups i xarxes socials.

- **Delicious** era un servei de gestió de marcadors socials en web. Permetia afegir els marcadors que clàssicament es guardaven en els navegadors i categoritzar-los amb un sistema d'etiquetatge denominat folcsonomies (tags). No només es podia emmagatzemar llocs webs, sinó que també compartir-les amb altres usuaris i determinar quants tenien un determinat enllaç guardat en els seus marcadors.
- **SemanticScuttle** és una aplicació de codi obert orientada a la gestió de marcadors socials fonamentada amb l'ús d'etiquetes i descripcions estructurades. Es basa en un projecte anterior anomenat Scuttle que era un clon de codi obert de Delicious. SemanticScuttle és una aplicació web programada amb PHP amb llicència GNU General Public License (GPL) i que va alliberar la versió 0.98.3 el 9 d'agost del 2011.
Folcsonomia

Folcsonomia és una indexació social, la classificació col·laborativa per mitjà d'etiquetes simples en un espai de noms pla, sense jerarquies ni relacions de parentiu predeterminades. Es tracta d'una pràctica que es produeix en entorns de programari social els millors exponents són els llocs compartits com Delicious (enllaços favorits).

---

#### 📦 222__blogs.html

2.2.2 - Blogs

Un bloc és un espai web personal en el qual els seus autors poden escriure cronològicament articles o notícies amb continguts multimèdia, però a més és un espai col·laboratiu on els lectors també poden escriure els seus comentaris a cada un dels articles publicats. Com a serveis característics per a la creació de blocs destaquen Wordpress.com i Blogger.com

- **Blogger** és un servei creat per Pyra Labs i adquirit per Google l'any 2003, que permet crear i publicar una bitàcola en línia. El principal avantatge per a l'usuari és que per publicar continguts no ha d'escriure cap codi o instal·lar programes de servidor o de scripting. Els blocs allotjats a Blogger generalment estan allotjats en els servidors de Google dins del domini blogspot.com
- **WordPress** és un sistema de gestió de continguts enfocat a la creació de blocs web. Desenvolupat en PHP i MySQL, sota llicència GPL i codi modificable, té com a fundador a Matt Mullenweg. Les causes del seu enorme creixement són, entre altres, la seva llicència, la seva facilitat d'ús i les seves característiques com a gestor de continguts.
- **WordPress.com** és una plataforma per a la creació de blocs que utilitza WordPress, el sistema de gestió de continguts de programari lliure. És propietat d'Automattic. Proporciona allotjament de blocs gratuït per a usuaris registrats i es nodreix financerament a través de millores de pagament, els serveis addicionals i la publicitat.

### 📄 58__referncies.html

5.8 - Referències

Referències

- OpenSourceCMS - [http://www.opensourcecms.com](http://www.opensourcecms.com)
- CMSmatrix - [http://www.cmsmatrix.org](http://www.cmsmatrix.org)
- Llicències Creative Commons - [http://es.creativecommons.org](http://es.creativecommons.org)
- Servidor en 1 & 1 - [http://www.1and1.es/ServerPremium?linkId=hd.subnav.dedicatedservers](http://www.1and1.es/ServerPremium?linkId=hd.subnav.dedicatedservers)
- Servidor dedicat a Arsys - [http://www.arsys.es/servidores/dedicados](http://www.arsys.es/servidores/dedicados)
- Servidor dedicat a OVH - [http://www.ovh.es/servidores_dedicados](http://www.ovh.es/servidores_dedicados)
- Servidor dedicat a Aruba - [http://serverdedicati.aruba.it](http://serverdedicati.aruba.it)
- CMS joomla - [http://www.joomla.org](http://www.joomla.org)
- CMS Wordpress - [http://wordpress.org](http://wordpress.org)
- Fòrums phpBB - [https://www.phpbb.com](https://www.phpbb.com)
- mediaWiki - [http://www.mediawiki.org/wiki/MediaWiki](http://www.mediawiki.org/wiki/MediaWiki)
- Coppermine Gallery - [http://coppermine-gallery.net](http://coppermine-gallery.net)
- Comerç electrònic Prestashop - [http://www.prestashop.com/es/](http://www.prestashop.com/es/)
- Motor de plantilles Smarty - [http://www.smarty.net](http://www.smarty.net)

### 📄 60__introducci.html

6.0 - Introducció

Un servei d'allotjament d'arxius és un servei de hosting dissenyat específicament per allotjar contingut estàtic, generalment arxius grans que no són pàgines web. En general aquests serveis permeten accés web i FTP, i poden estar optimitzats per servir a molts usuaris o estar optimitzats per a l'emmagatzematge d'usuari únic. Alguns serveis relacionats són l'allotjament de vídeos, allotjament d'imatges, l'emmagatzematge virtual i la gestió de còpies de seguretat remotes.

### 📄 61__gestors_darxius_web.html

6.1 - Gestors d'arxius web

**Dropbox** és un servei d'allotjament d'arxius multiplataforma en el núvol que permet als usuaris emmagatzemar i sincronitzar arxius en línia i entre ordinadors, a més de compartir arxius i carpetes amb altres usuaris. Existeixen versions gratuïtes i de pagament, cadascuna de les quals amb opcions variades. Dropbox utilitza el sistema d'emmagatzematge S3 de Amazon per desar els arxius i SOFTLAYER Technologies per la seva infraestructura de suport.

L'aplicació client de Dropbox permet als usuaris deixar qualsevol arxiu en una carpeta designada. Aquest arxiu és sincronitzat en el núvol i en totes les altres ordinadors de client de Dropbox mitjançant un client de sincronització que prèviament ha instal·lat. Els arxius a la carpeta de Dropbox poden llavors ser compartits amb altres usuaris de Dropbox, ser accedits des de la pàgina web de Dropbox o bé ser consultats des de l'enllaç de descàrrega directa. Així mateix, els usuaris poden gravar arxius manualment per mitjà d'un navegador web.

Si bé Dropbox funciona com un servei d'emmagatzematge, s'enfoca en sincronitzar i compartir arxius. A més posseeix suport per historial de revisions, de manera que els arxius esborrats de la carpeta de Dropbox poden ser recuperats des de qualsevol de les computadores sincronitzades. També hi ha la funcionalitat de conèixer la història d'un arxiu en el qual s'estigui treballant, permetent que una persona pugui editar i carregar els arxius sense perill que es puguin perdre les versions prèvies.

Les funcions de sincronització, control de versions i disponibilitat de la informació en mobilitat són les tres principals raons per implantar un sistema Dropbox. Alguns usos que podem fer són

- Compartir fitxers: Dropbox és la manera més fàcil de compartir fitxers amb d'altres. En lloc d'omplir el correu electrònic dels altres amb fitxers PDF enormes, és millor guardar el document a la carpeta Public de Dropbox. Després amb el botó dret pots obtenir el URL públic d'aquest fitxer.
- Carpetes compartides: Si la persona amb qui vols compartir fitxers també fa servir Dropbox pots crear una carpeta compartida. Tots els fitxers que posis a la carpeta compartida apareixeran també en el Dropbox de les altres persones.
- Àlbum de fotos: La carpeta Photos de Dropbox funciona de manera similar a la carpeta pública, amb la diferència de la visualització per web. Pots crear carpetes amb les teves fotos, que automàticament es converteixen en una galeria de fotos a la pàgina de Dropbox.
- Còpia de seguretat: Si guardes els teus fitxers importants en Dropbox sempre podràs recuperar-los. Des de la web de Dropbox tens la possibilitat de restaurar fitxers esborrats.
- Fitxers de projectes: Tenir sempre accés a aquest material i poder fer servir el control de versions. A l'canviar un document, Dropbox no sobreescriu el fitxer, sinó que crea una nova versió. Només les últimes versions estan disponibles a la carpeta, però des del web puc tornar a una versió anterior.
**Google Drive** és un servei d'allotjament d'arxius de Google introduït en 2012 i que integra també les eines d'ofimàtica web de Google. Cada usuari compta amb 15 gigabytes d'espai gratuït per emmagatzemar els seus arxius i accessible des de la seva pàgina web. L'únic requisit per accedir-hi és disposar d'un compte a Google.
Google Drive ens permet crear arxius que quedaran emmagatzemats a la plataforma. Aquests arxius poden ser dels següents tipus: Document, Presentació, Full de càlcul, Formulari, Dibuix i Carpeta. Per crear aquests arxius n'hi haurà prou amb triar l'opció Crear i triar el tipus d'arxius entre els que apareixen al desplegable. Aquests arxius quedaran emmagatzemats a la plataforma i podran ser exportats a diferents formats per a la seva posterior descàrrega o enviament per correu electrònic.

La segona opció disponible és pujar arxius a Google Drive a través de la icona situada a la banda de Crea. Amb aquesta opció podem incorporar a Google Drive arxius procedents dels nostres discs durs servint de Disc Dur Virtual assegurant aquest contingut davant de possibles pèrdues. Al pujar un arxiu Google ens pregunta si volem conservar el format original d'aquest arxiu o convertir-lo en un arxiu amb format de Google Drive editable des de l'aplicació.

A la part central de la pantalla apareixeran els arxius que tenim incorporats a la plataforma. A el principi poden semblar pocs, però més endavant podrien ser molts pel que has d'anar pensant en organitzar-los. Per a això Google Drive et permet crear carpetes a manera de contenidor. Podràs crear un arbre de carpetes per organitzar aquests arxius.

**La meva unitat** és la secció de Google Drive en línia on es sincronitzen automàticament arxius, carpetes i documents de Google Docs directament a la carpeta de Google Drive. Cada vegada que actualitzis un arxiu o una carpeta de Google Docs a La meva unitat, els canvis es reflectiran en les versions locals de la carpeta de Google Drive. La meva unitat inclou: els teus elements de Google Docs, els arxius que hagis sincronitzat o pujat, les carpetes que hagis creat,
sincronitzat o pujat, qualsevol arxiu compartit que hagis afegit a La meva unitat des Compartit amb mi o Tots els elements.

Google Drive disposa de diverses maneres per filtrar i veure els arxius, les carpetes i els documents de Google Docs. Aquests filtres t'ajuden a trobar els arxius més fàcilment. Els filtres que trobareu a la barra de navegació de l'esquerra són els següents

- La meva unitat: Tot el contingut de Google Drive que hagis creat, sincronitzat i pujat. Pots sincronitzar automàticament La meva unitat amb la carpeta de Google Drive del teu ordinador.
- Compartit amb mi: Tots els arxius, carpetes i documents de Google Docs que algú ha compartit amb tu.
- Destacat: Els elements que hagis destacat.
- Recent: Tots els teus arxius privats i compartits que hagis obert, per ordre cronològic invers.
- Tots els elements: Tot el contingut allotjat a Google Drive. Aquest filtre no conté elements que hagis mogut a la paperera.
- Paperera: Tot el contingut que hagis mogut a la paperera.

Amb Google Drive, tu decideixes amb qui **compartir arxius**, carpetes i documents de Google Docs i el nivell d'accés d'aquestes persones. Pots triar una opció de visibilitat per a qualsevol element de Google Drive que vulguis compartir i un nivell d'accés per a cada persona o grup d'usuaris amb els que hagis compartit alguna cosa. Les opcions de visibilitat et permeten controlar l'accés dels usuaris als arxius, les carpetes i els documents de Google Docs. Tot el que crees, sincronitzes o puges a Google Drive comença sent privat.
**ownCloud** és una aplicació web gratuïta i de codi obert per a la sincronització de dades, intercanvi d'arxius i emmagatzematge en el núvol. Està escrit en el PHP i JavaScript. Per a l'intercanvi d'arxius, empra SabreDAV, un servidor WebDAV de codi obert. ownCloud està dissenyat per treballar amb diversos sistemes de gestió de bases de dades. A diferència dels serveis d'emmagatzematge comercial, ownCloud es pot instal·lar en un servidor privat sense cost addicional

La navegació principal va ser redissenyat per diferenciar clarament de les navegacions dins de l'aplicació. El nou disseny ajuda a concentrar-se més en el contingut i fa que sigui més fàcil de navegar i configurar l'escriptori i la sincronització dels clients mòbils. La vista principal mostra una visió general dels camps més rellevants i la quantitat d'informació s'ajusta automàticament segons la mida de la finestra de el navegador o dispositiu. La interfície web de ownCloud es compon dels següents elements

- Barra de navegació: permet la navegació entre les diferents parts de ownCloud, proporcionats per les aplicacions.
- Vista d'aplicació: Aquí és on les aplicacions mostren el seu contingut. Per defecte, es mostren els arxius i directoris.
- Càrrega / Crear: Això li permet crear nous arxius o carregar les existents des del dispositiu. També es pot arrossegar arxius des de l'explorador per pujar-los.
- Recerca / Llogout: cerca permet trobar arxius i directoris.
- Ajustaments: Aquí podem canviar la configuració personals, com l'idioma de la interfície o la contrasenya. També pot recuperar l'adreça URL WebDAV i mostrar la seva quota. Els administradors també tindran accés a l'administració d'usuaris, aplicacions i la configuració general.

Podem ressaltar les principals funcions de ownCloud

- Accedir a les seves dades: Emmagatzemi els seus arxius, carpetes, contactes, galeries de fotos, calendaris i molt més al servidor de la seva elecció. Accediu a la carpeta del seu dispositiu mòbil, l'escriptori, o un navegador web allà on estigui quan ho necessiti.
- Sincronitzar les seves dades: Mantingui els seus arxius, contactes, galeries de fotos, calendaris i més sincronitzats entre els seus dispositius.
- Comparteixi les seves dades: Comparteix les teves dades amb d'altres, i els donen accés a les últimes galeries de fotos, el seu calendari, la seva música, o qualsevol altra cosa que vols que vegin. Compartir en públic o en privat.
- Paperera: Els usuaris poden recuperar un arxiu eliminat per accident a través de la interfície web. Només ha de seleccionar els arxius a la paperera de reciclatge i es recuperen amb les seves versions corresponents.
- Versions d'arxiu: El suport de versions d'arxius s'ha millorat amb un algoritme intel·ligent que caduca automàticament la versió anterior si detecta falta d'espai.
- Recerca: Les persones poden fer servir la cerca no només per trobar arxius per nom, sinó també pel seu contingut. L'exploració es fa en segon pla per assegurar una experiència d'usuari de resposta per als usuaris.
- Galeries: Comparteixi les seves galeries amb qualsevol adreça de correu electrònic que triï
- Visor de documents: Llegir arxius de format de document obert sense haver de descarregar-los.
- Contactes: Els contactes estan organitzats per grups en lloc de les llibretes d'adreces que donen accés més intuïtiu a amics, companys de treball, família, etc.
- Calendaris: Pot compartir el seu calendari i esdeveniments.

### 📄 62__aplicacions_dofimtica_web.html

6.2 - Aplicacions d'ofimàtica web

Es diu ofimàtica a el conjunt de tècniques, aplicacions i eines informàtiques que s'utilitzen en funcions d'oficina per optimitzar, automatitzar i millorar els procediments o tasques relacionades. Les eines ofimàtiques permeten idear, crear, manipular, transmetre i emmagatzemar o aturar la informació necessària en una oficina. Actualment, el concepte s'ha estès i parlem d'aplicacions d'ofimàtica web a aquelles aplicacions web que són capaços d'oferir serveis anàlegs a les eines ofimàtiques tradicionals a través d'internet mitjançant l'ús d'un navegador.

A diferència de moltes aplicacions web 2.0, les aplicacions d'ofimàtica web solen ser plataformes online propietàries que ofereixen el servei sobre servidors de la companyia. Per tant, no sol ser habitual poder instal·lar el servei en màquines pròpies.

- **ThinkFree Office** és un paquet ofimàtic escrita en Java. ThinkFree Online és una edició basada en web que disposa de Write, Calc, Show i Note en un navegador amb una barreja de tecnologies Java applet i Ajax. ThinkFree Online permet als usuaris col·laborar en documents amb altres, publicar en un bloc o web. A més, manté un historial de versions per document dels canvis que són fets.
- **Office 365** és una versió gratuïta al web del conjunt d'aplicacions de Microsoft Office. Les aplicacions web permeten als usuaris accedir als seus documents directament des de qualsevol part dins d'un navegador web així com compartir arxius i col·laborar amb altres usuaris en línia. 365 és part de OneDrive que permet als usuaris carregar, crear, editar i compartir documents de Microsoft Office.
- **Zoho** és el nom d'un conjunt d'aplicacions web desenvolupades per l'empresa Zoho Corporation. Cadascuna de les aplicacions de Zoho s'executen en qualsevol navegador, ofereixen interfícies WYSIWYG netes, clares i fàcils d'utilitzar. Zoho Office Suite reuneix les aplicacions de productivitat i col·laboració. Entre altres coses, compta amb característiques com la capacitat de compartir arxius perquè altres persones puguin veure'ls i fins i tot editar-los, seguiment de dades sobre la marxa per tal d'evitar la pèrdua de dades, importació i exportació d'arxius creats en Microsoft Office o OpenOffice .org, així com la capacitat de publicar-los en blocs o bitàcoles personals.
- **Google Suite** és un programa gratuït basat en web per crear documents en línia amb la possibilitat de col·laborar en grup. A l'abril de 2012 Google Docs va canviar la seva denominació a Google Drive, incorporant la capacitat d'ofimàtica web al seu gestor d'emmagatzematge d'arxius. Google Drive permet la creació de cinc elements bàsics i una infinitat d'aplicacions de tercers a través de l'opció més. Un dels majors atractius de Google Drive és poder compartir documents amb altres usuaris, col·laborant en la seva creació i edició amb altres usuaris, fins publicar amb una adreça pròpia, com si d'una pàgina web es tractés. Els tipus de participants en el procés de compartir un document són:
  - Propietari: És el creador d'el document. Podeu editar el document i eliminar-lo, convidar a lectors i col·laboradors, i canviar alguns dels seus drets sobre el document. Cap col·laborador pot eliminar la participació de l'propietari en el document.
  - Col·laboradors: Són convidats pel propietari, tot i que al seu torn poden convidar altres col·laboradors i lectors. Tenen dret a llegir, modificar, guardar i imprimir el document.
  - Lectors: Poden llegir el document, guardar-s'ho i imprimir, però no editar-lo.

### 📄 63__referncies.html

6.3 - Referències

Referències

- Gestor d'emmagatzematge en línia Dropbox - [https://www.dropbox.com](https://www.dropbox.com)
- Gestor d'emmagatzematge en línia Google Drive - [https://drive.google.com](https://drive.google.com)
- Gestor d'emmagatzematge en línia iCloud - [http://www.apple.com/es/icloud](http://www.apple.com/es/icloud)
- Gestor d'emmagatzematge en línia ownCloud - [http://owncloud.org](http://owncloud.org)
- ThinkFree Online - [http://online.thinkfree.com](http://online.thinkfree.com)
- Microsoft Office 365 - [http://office.microsoft.com](http://office.microsoft.com)
- Zoho - [http://www.zoho.com](http://www.zoho.com)
- Chrome Web Store - [https://chrome.google.com/webstore/category/collection/drive_apps](https://chrome.google.com/webstore/category/collection/drive_apps)

### 📄 70__introducci.html

7.0 - Introducció

Un sistema de gestió d'aprenentatge és un programari instal·lat en un servidor web que s'empra per a administrar, distribuir i controlar les activitats de formació no presencial d'una institució o organització

### 📄 71__funcis_dun_lms.html

7.1 - Funciós d'un LMS

Les principals funcions de sistema de gestió d'aprenentatge són: gestionar usuaris, recursos així com materials i activitats de formació, administrar l'accés, controlar i fer seguiment de l'procés d'aprenentatge, realitzar avaluacions, generar informes, gestionar serveis de comunicació com fòrums de discussió i mantenir videoconferències, entre d'altres.

Amb un LMS, els alumnes poden mantenir-se en contacte i treballar amb els seus grups d'estudi des de qualsevol lloc que tingui una connexió a Internet. Poden organitzar-se de manera informal (per resoldre un problema senzill), o de manera formal (per un projecte o tasca) i en equips d'estudi (al llarg de la durada d'un curs). En els equips d'estudi, els membres de el grup es donen suport mútuament, mantenint-se a l'corrent de les classes perdudes i poden ajudar-se o animar els altres a participar plenament en el procés d'aprenentatge.

Els LMS proporcionen importants eines de col·laboració com els wikis, fòrums, glossaris, VoIP, xat i pissarres interactives que s'integren amb cursos i pot ser monitoritzades i avaluades pels docents.
LMS

Un Learning Management System (LMS) és la infraestructura que ofereix i gestiona contingut educatiu. Identifica i avalua l'aprenentatge i els objectius de formació, permet fer el seguiment de l'progrés i recull i presenta dades per supervisar tot el procés d'aprenentatge. Un LMS hauria de ser capaç de fer

- centralitzar i automatitzar l'administració de sistema
- fer servir serveis que permetin autonomia als alumnes
- acoblar continguts d'aprenentatge ràpidament
- consolidar una plataforma basada en la web escalable
- facilitar la portabilitat i els estàndards
- personalitzar i reutilitzar contingut

### 📄 72__raons_per_utilitzar_un_lms.html

7.2 - Raons per utilitzar un LMS

Algunes de les raons per utilitzar sistemes LMS són

- Els estudiants poden veure les tasques i tot el material online, així que no hi ha necessitat de repartir fotocòpies. L'ambient online és més amigable i obert per al debat.
- Els docents passen menys temps en paperassa i inverteixen aquest temps ensenyant més. Els docents solen invertir gran part del seu temps corregint exàmens, avaluant activitats i realitzant el seguiment de l'alumne. Aquestes tasques poden automatitzar-se en un LMS alliberant el temps per a tasques més enfocades a la docència.
- Els estudiants poden posar-se a el dia si van perdre alguna classe, de forma molt més ràpida i fàcilment. També tenen diversos canals oberts per poder contactar-se amb els seus companys i docents en línia i d'aquesta manera fer preguntes.
- Els LMS són sistemes d'ensenyament molt més fàcil d'usar i més és més barat. Dóna als estudiants la possibilitat de tenir al seu abast una àmplia gamma de recursos multimèdia accessibles en qualsevol moment. Permet que els estudiants contribueixin amb informació i opinions.
- Fer avaluacions contínues és real i una opció pràctica. Els alumnes són lliures de dedicar més temps a activitats productives, útils d'aprenentatge i menys temps en les proves formals.
- Els alumnes tenen accés a les seves qualificacions, assistència i participació. Un LMS és un repositori central en el qual a més de rebre material d'aprenentatge i es pot accedir als registres de l'activitat dels alumnes.
- Els estudiants desenvolupen millors habilitats comunicació. Mitjançant un LMS es promou un entorn d'aprenentatge on els protagonistes principals són la col·laboració i la comunicació. És possible promoure i fomentar l'aprenentatge col·laboratiu amb l'ús de projectes en grup i la presa de notes en grup amb activitats com ara wikis, glossaris i fòrums.
- Es promou l'aprenentatge independent i alhora el desenvolupament d'habilitats que permeten la resolució de problemes. Els docents poden establir mecanismes de qualificació basant-se en premiar l'estudiant pel desenvolupament d'habilitats per resoldre problemes i el treball en equip.
- LMS promou un model social constructivista de l'aprenentatge Els estudiants demostren una millor adquisició de coneixements i retenció dels mateixos quan s'aprèn en grups col·laboratius.

### 📄 73__lms_moodle.html

7.3 - LMS: Moodle

Moodle és un sistema LMS orientat principalment a la gestió de cursos i assignatures juntament amb les eines de suport virtual necessàries per a la seva gestió. Moodle és un programa que permet crear aules virtuals a través d'Internet amb espais de comunicació interactiva, compartició d'arxius, activitats, etc.

La pantalla principal de les plataformes es divideix en tres parts ben diferenciades

- Esquerra: Sol mostrar menús de navegació, en el cas de la figura, podem accedir a menú d'administració (amb totes les opcions personals de l'usuari), a el bloc de persones, el bloc d'activitats i el bloc de cerca en els fòrums.
- Dreta: En els blocs de la dreta podem trobar generalment el formulari de registre (si encara no estem registrats a la plataforma), on hem d'introduir el nostre nom d'usuari i contrasenya. A més sol estar activat el bloc de novetats, on podem seguir les notícies relacionades amb l'Aula.
- Centre: El centre queda reservat a les categories i als continguts dels cursos.

Aquestes zones són interactives i totes canvien depenent de el curs en el qual ens trobem. Independentment d'aquestes tres zones, a la capçalera de la pàgina o bé al peu de pàgina podem trobar-nos amb l'opció de registre, que ens convida a autentificar-nos a la plataforma o ens mostra el nostre nom si ja estem autentificats.

Per ser un**usuari registrat** a la plataforma, hem de omplir un simple formulari en el qual se'ns demana el nostre nom d'usuari i la nostra contrasenya privada. Un cop haguem introduït aquestes dades, el sistema ens reconeixerà com a usuaris i podrem accedir als cursos en què siguem alumnes.
Depenent de l'Aula en el qual estiguem, necessitarem donar-nos d'alta o no la primera vegada en utilitzar-la. Hi llocs que permeten l'entrada de convidats, mentre que en altres els alumnes hauran d'omplir un petit formulari d'alta la primera vegada que cursin una assignatura.

Un cop ens hem donat d'alta i ens hem registrat en el sistema, podem accedir als cursos dels quals estiguem matriculats, o si els cursos estan oberts, podrem matricular si ens interessen. Tenim diferents tipus de cursos en funció dels seus continguts i organització

- Format de curs LAMS: S'utilitza per dissenyar, gestionar i desenvolupar activitats d'aprenentatge en línia en col·laboració.
- Format SCORM: Un paquet SCORM és un fardell de material web empaquetat d'una manera que segueix l'estàndard SCORM d'objectes d'aprenentatge. Aquests paquets poden incloure pàgines web, gràfics, programes Javascript, presentacions Flash i qualsevol altra cosa que funcioni en un navegador web.
- Format social: Aquest format s'organitza al voltant de fòrum central que apareix a la pàgina principal. Resulta útil en situacions de format més lliure.
- Basat en un fòrum central: Apropiat per a grups de treball
- Format de temes: Els temes no estan limitats pel temps, pel que no cal especificar dates. Aquest és el tema que més s'utilitza si ens organitzem el curs com un llibre.
- Format setmanal: El curs s'organitza per setmanes, amb data d'inici i fi. Cada setmana conté les seves pròpies activitats. Algunes d'elles, com els diaris, poden durar més d'una setmana, abans de tancar-se.

Encara que l'**estructura dels cursos** és personalitzable, és habitual trobar-nos estructures organitzades en una part central i dues columnes laterals que aglutinen diferents mòduls o blocs de contingut.

A la part superior esquerra, podem veure la ruta completa de navegació de la plataforma, on s'indica la plataforma i després les categories a les que pertany el curs. Fent clic sobre cadascuna de les categories de la ruta podem accedir-hi. Finalment, tenim el nom curt de el curs, en aquest cas no apareixen pel fet que el curs no està categoritzat.

A la part esquerra de la finestra de el curs es troben

- Participants. Amb la informació rellevant de tots els que participen en el curs. És una relació de tots els participants de l'espai virtual
- Edita informació. Aquí podràs revisar i editar la informació relacionada amb el perfil d'usuari de el sistema. A més si desitges integrar la teva fotografia, és en aquesta secció on el podràs realitzar, dins de la secció de dades opcionals.
- Activitats: Desplega totes les activitats relacionades amb l'espai virtual. Amb un clic sobre qualsevol d'aquestes activitats es podrà mostrar un llistat d'elles.
- Cerca. Aquí pots teclejar una paraula que vols cercar dins dels fòrums de l'Espai virtual, és una forma ràpida i senzilla per trobar informació rellevant dins d'aquests.

A la part central de la finestra de treball, es troba la forma d'organització de el curs, el qual pot incloure diferents activitats, per exemple: tasques, notes,
fòrums de discussió, pàgines web, etc. La forma d'interactuar amb cadascuna d'aquestes activitats és llegint i fent clic sobre cadascuna d'elles per obtenir més informació.

A la part dreta de el navegador es troben les seccions de

- Novetats: Mostra la informació més recent relacionada amb l'espai virtual.
- Activitat recent: És opcional i pot ser útil per revisar els canvis de contingut i d'informació relacionada amb el curs.
- Sortir de el programa: Per sortir de el programa és necessari que es mogui el ratolí cap a la part superior dreta de la pantalla i aquí es trobarà la paraula Sortir, fent un clic sobre aquesta i el sistema procedirà a concloure amb la present sessió.

Els cursos en Moodle s'estructuren mitjançant un bloc central, que sol contenir la llista de temes de el curs o una llista de setmanes, i dues columnes laterals que contenen altres blocs opcionals. Per a cada tema o setmana s'especifiquen un seguit d'activitats i recursos. Els tipus disponibles són els següents

- Fòrums: És aquí on té lloc la major part dels debats. Els fòrums es poden estructurar de diferents maneres, i poden incloure l'avaluació de cada missatge pels companys. Els missatges també es poden veure de diverses formes, incloure missatges adjunts i imatges incrustades. Al subscriure a un fòrum, els participants rebran còpies de cada missatge en el seu correu electrònic. El professor pot imposar la subscripció a tots els integrants de el curs si així ho desitja. També pot qualificar cada contribució i usar-la com a part de la qualificació de el curs.
- Diaris: Aquest mòdul és molt important per a l'activitat reflexiva. El professor proposa als alumnes reflexionar sobre diferents temes, i els estudiants poden respondre i modificar les seves respostes a través de el temps. La resposta és privada i només pot ser vista pel professor, qui pot respondre i qualificar cada vegada.
- Apunts, materials o recursos: Són continguts que el professor vol que vegin els seus alumnes. Poden ser documents preparats i pujats a servidor, pàgines editades directament a la plataforma o pàgines externes d'Internet que apareixeran dins de el curs.
- Tasques: Les tasques permeten als professors assignar activitats als estudiants, que consisteixen en preparar continguts digitals de qualsevol tipus que l'alumne podrà pujar a el curs. Les tasques típiques són assajos, monografies, redaccions, etc. El professor pot qualificar aquestes tasques i usar-lo com a part de la qualificació de el curs.
- Qüestionaris: Aquest mòdul permet que el professor dissenyi i plantegi qüestionaris. Aquests qüestionaris poden ser: opció múltiple, fals / veritable i respostes curtes. Els qüestionaris poden permetre múltiples intents. Cada intent es corregeix automàticament i quan tornis a entrar al qüestionari veuràs com han anat canviant els teus resultats en els successius intents. El professor pot decidir si mostrar la qualificació i / o les respostes correctes als alumnes una vegada conclòs el qüestionari. A més té la possibilitat d'usar-se com a part de la qualificació de el curs.
- Consultes: Les consultes són molt senzilles: el professor planteja una pregunta i determina certes opcions, de les quals els alumnes triaran un. És útil per conèixer ràpidament el sentiment de el grup sobre algun tema, per permetre algun tipus d'eleccions de el grup o per a efectes de recerca.
- Enquestes: El mòdul d'enquestes proporciona un seguit d'instruments provats per a estimular l'aprenentatge a internet. Els professors poden utilitzar aquest mòdul per aprendre sobre els seus alumnes i reflexionar sobre la seva pràctica educativa.
- Xat: El mòdul de xat permet que els participants discuteixin en temps real a través d'Internet. Aquesta és una útil manera de tenir una comprensió dels altres i del tema en debat. El mòdul de xat conté diverses utilitats per a administrar i revisar les converses anteriors.
- Glossari: Un glossari és una llista de definicions, com un diccionari. Les entrades es poden cercar o explorar en diferents formats. El professor pot utilitzar glossaris tancats, preparats per ell, o glossaris oberts en què els estudiants poden contribuir les seves definicions. Aquestes definicions poden també ser qualificades pel professor.
- Lliçó: Una lliçó proporciona continguts de forma interessant i flexible. Consisteix en una sèrie de pàgines. Cadascuna d'elles normalment acaba amb una pregunta i un nombre de respostes possibles. Depenent de quina sigui l'elecció de l'estudiant, progressarà a la pròxima pàgina o tornarà a una pàgina anterior.
- Taller: El taller és una activitat d'avaluació d'iguals amb una enorme varietat d'opcions. Bàsicament, en un taller el professor planteja una

A cada curs, a més del bloc central amb la llista de temes o setmanes i les activitats que l'autor de el curs hagi dissenyat, veuràs una sèrie de blocs presents en les columnes dels dos costats. Què blocs hi haurà i quins seran els seus continguts depenen del que l'autor de el curs hagi decidit. Els blocs disponibles són

- Novetats: És un fòrum de notícies on normalment només el professor pot escriure i tots els inscrits al curs estan obligatòriament subscrits a fòrum i, per tant, reben les notificacions també en el seu email. Serveix per donar les notificacions de caràcter general de el curs.
- Persones: Et permet veure la llista de tots els altres participants en el curs (professors i estudiants) i accedir a la seva informació concreta, incloent el seu email. Així es pot contactar amb ells
- Activitats: Et permet accedir a les activitats programades en el curs agrupades pel tipus d'activitat que sigui (xat, fòrum ...).
- Cercar: Et permet buscar fòrums concrets (molt útil quan el curs té molts).
- Administració: Aquest és un bloc molt important. La secció de Qualificacions et permet veure com van els teus qualificacions en totes les activitats que el professor va avaluar en el curs
- Els meus cursos: Aquest bloc et permet moure't d'un a un altre dels cursos en què estàs inscrit.
- Esdeveniments pròxims: Aquest bloc t'informa de les activitats que tindran lloc en els propers dies com ara el termini límit de lliurament d'una tasca o el moment d'un xat amb el professor.
- Activitat recent: Et informa dels canvis que el professor ha introduït recentment en el curs, així com si hi ha hagut algun canvi des de l'última vegada que vas entrar en el curs.
- Calendari: El calendari recull automàticament totes les dates de totes les activitats que tenen una data en el curs (lliurament d'una tasca, realització d'un qüestionari, etc.). Això es diu "esdeveniments de curs". Es poden introduir també "esdeveniments de grup", només rellevants per al grup a què pertanys al curs. Tu pots incloure també els teus propis esdeveniments o "esdeveniments d'usuari" i utilitzar el calendari per recordar-te de aniversari o cites. Finalment, el professor pot introduir "esdeveniments globals" que afecten tots els cursos (p.ex., dies de festa).
- Usuaris en línia: Aquest bloc t'informa de quins usuaris inscrits al curs estan ara mateix connectats. És molt útil especialment per poder saber quan hi ha el professor connectat i així tenir un accés ràpid a ell mitjançant xat o correu electrònic.
- Temes: Aquest bloc no és més que uns vincles que et porten directament a la part de la pàgina on està cada un dels temes de el curs

### 📄 74__referncies.html

7.4 - Referències

Referències

- Plataforma de formació Moodle - [http://moodle.org](http://moodle.org)

### 📄 81__cas_prctic_assessoria_lpez.html

8.1 - Cas Pràctic: Assessoria Lòpez

L'Enginyeria de Software és la disciplina encarregada d'aplicar un enfocament sistemàtic, disciplinat i quantificable a el desenvolupament, operació i manteniment de programari. De manera específica en l'àrea d'aplicacions web parlem comunament de desenvolupament i disseny web quan ens referim a aquest procés.
Una de les principals dificultats a l'hora de tractar amb els clients en la implantació de solucions web és la traducció de necessitats de l'empresa en requisits funcionals que puguem aplicar sobre CMS concrets.

Per això són necessàries reunions per a l'obtenció de requisits demandats i, freqüentment és necessari, l'elaboració d'entorns de prova funcionals perquè siguin validats pels clients.

- Necessitats
- Requisits Funcionals
- Solucions Propostes
- Entorn de Prova
- Validació de el client
Cas Pràctic

"López Assessors" és una empresa dedicada a la gestió i assessoria laboral, fiscal i comptable d'autònoms i petites empreses de la zona. Les activitats realitzades són principalment l'assessoria de treballadors, oferir serveis de tramitació fiscals i comptable, i la realització cursos de formació específics de "Prevenció de riscos" a diferents col·lectius de treballadors. A l'empresa compten amb el propi Manuel López que s'encarrega de la direcció i gestió de l'empresa, Lucía Martínez s'encarrega de la part de formació, Arturo Vallès és el comptable que porta les finances i assessoria comptable, Pau Boí s'encarrega de la gestió fiscal i laboral, i finalment, Clara López fa de secretaria atenent les trucades i donant suport a la resta de personal.

El seu gerent i principal accionista, Manuel López, ha decidit dotar de presència web a l'empresa amb l'objectiu principal de publicitar la seva activitat a través d'internet, i oferir addicionalment, serveis de consultoria en línia als seus clients.

Com a professional de Sistemes Microinformàtics i Xarxes, Manuel et s'encarrega de fer el procés d'implantació necessària per aconseguir aquest objectiu de la millor manera. Després d'una extensa reunió on reculls seves necessitats, podem resumir els requisits demandats en

- Una pàgina web pertany principalment per Clara, on tots els empleats tinguin possibilitat de publicar articles específics de les seves àrees a una secció d'actualitat. A més de les diferents àrees d'activitat de "López Assessors" hauria d'aparèixer a la web informació de contacte. Es considera especialment important la facilitat als usuaris per trobar la informació que necessiten i per tant l'organització de la informació web serà una prioritat.
- Oferir un canal de comunicació online per als clients on puguin exposar els seus dubtes i quedin registrades aquestes preguntes i les respostes que donen els empleats. Tots aquells que han contractat el servei podrien veure aquestes preguntes i respostes, però com hi ha clients que només tenen contractada una àrea de servei, s'hauria de poder gestionar l'accés adequadament i dotar com a responsable de cada àrea a la persona corresponent de l'empresa, de manera que pugui gestionar de forma independent la seva secció.
- Es pretén publicitar de forma especialment important els cursos de formació de Lucia, ja que es pretén augmentar l'oferta de cursos i donar a conèixer les instal·lacions on es realitzen. A més, es comenta la possibilitat d'oferir un mecanisme perquè la gent interessada es pugui inscriure de forma automàtica als cursos actius omplint les dades necessàries ells mateixos. En un futur seria desitjable poder oferir formació a distància i gestionar tots els aspectes dels cursos a través d'una aplicació web.
- Establir una àrea privada d'accés únic per als treballadors on ubicar la documentació i formularis necessaris per a la gestió de l'empresa de manera que siguin accessibles a través de el telèfon mòbil d'empresa.
El primer pas a l'hora d'analitzar un cas pràctic és extreure la informació significativa sobre l'empresa i la seva estructura. Per a això identificarem els següents aspectes

- Empresa
- Dedicació
- Àmbit
- Empleats, càrrecs i jerarquia

Seguidament, abordarem l'abast de el projecte que ens plantegen, dedicant especial interès a la identificació dels requisits i desitjos expressats pel client, de manera implícita o explícita, intentant relacionar-los amb aplicacions web conegudes que resolguin aquestes necessitats.

- Projecte
- Objectius
- Requisits
- Elecció CMS adequat
- Implementar Solucions
Anàlisi dels requeriments

En el nostre cas, ha identificat quatre grans àrees en els que podem englobar els diferents requisits. Per cada un d’ells analitzem les aplicacions que millor s’adapten a les necessitats exposades i configurem la seva estructura de forma acordada als mètodes.

- **Pàgina Web:** Necessitat de publicació ordenada d'articles en forma de seccions amb diferents rols per usuari.Informació estàtica referent als mètodes de contacte i la informació genèrica de cada una de les àrees de l’empresa.Necessitats específiques: millorar l’organització i facilitar la cerca als usuaris.
- **Canal de Comunicació:** Sistema de foros privats sota subscripció de pagament per a resolució de dubtes d’àrees específiques moderades per experts en la matèria.
- **Formació:** Gestionar inscripcions i publicitar de forma especial en pàgina web. En el futur es pot optar per gestionar tot el procés i passaríem a una solució completa integrada com per exemple Moodle.
- **Àrea Privada** : Sistema de compartició de documentació i formularis amb permisos per usuari que permet sincronització i accés des de mòbil.

**Anàlisi dels requeriments**

Empresa: Assessoria Lòpez

Dedicació: Gestió i assessoria laboral, fiscal i comptable d’autònoms i pimes

Àmbit: Comarcal

Activitats: laborals, fiscals, comptables, finances, formació

Empleats

- Manuel López - Direcció i Gestió N1: Director
- Lucía Martínez - Formació - N2: Responsable
- Arturo Vallés - Contabilitat i Finances - N2: Responsable
- Pau Boí - Fiscal i Laboral - N2: Responsable
- Clara López - Secretaria - N3: Apoyo

Projecte i objectius: Implantació web de l'empresa

- Tenir presència a internet
- Activitat publicitària
- Ofrecer consultoría en línia

**Requisits Página Web → Wordpress**

- Usuaris:
  - Administradora Clara López
  - Publicadores Todos
- Seccions per a articles:
  - Actualitat Tots
  - Fiscal Pau Boí
  - Laboral Pau Boí
  - Contable Arturo Vallés
  - Finances Arturo Vallés
  - Formació Lucía Martínez
- Seccions per a pàgines:
  - Contacte
- Àrees: Fiscal, laboral, Contabilitat, Fiscalitat, Formació
- Serveis importants:
  - Facilitat de cerca: Widget Búsqueda, Categorías, Etiquetas
  - Organització: Widget Categorías, Archivo, Nube de Etiquetas

**Requisits Canal de Comunicació → phpBB**

- Sols visible per als usuaris que han contractat per Àrea → Grups Privats
- Estructura de Fòrums: General (Fiscal, laboral, Contabilitat, Fiscalitat, Formació)
- Grups Privats: Fiscal, laboral, Contabilitat, Fiscalitat, Formació
- Usuaris:
  - Administradora Clara López
  - Moderadors:
    - Fiscal Pau Boí
    - Laboral Pau Boí
    - Contable Arturo Vallés
    - Finances Arturo Vallés
    - Formació Lucía Martínez

**Requisits Específics Formació → Wordpress + Google Drive + Moodle**

- Publicitar especialment: Widget Banner Publicitario
- Seccions per a pàgines: Instal·lacions
- Galeria Fotos Instal·lacions

Inscripcions Automàtiques

- Formulari Google Drive
- Gestió completa amb Moodle (fase II)

**Requisits Àrea Privada → Google Drive**

- Accés únic:> Usuarios Personales
- Funcions:
  - Sincronització de catifes compartides en PCs
  - Accés a través del telèfon d’empresa
  - Ús de Formularis Privats
- Carpetes i Permisos d’accés (RW)
  - General Todos
  - Formularios Todos
  - Fiscal Pau Boí + Manuel López
  - Laboral Pau Boí + Manuel López
  - Contable Arturo Vallés + Manuel López
  - Finances Arturo Vallés + Manuel López
  - Formació Lucía Martínez + Manuel López
  - Secretaria Clara López + Manuel López
Informació Tècnica

L'empresa es dedica a la gestió i assessoria laboral, fiscal i comptable d'autònoms i pimes. El su Àmbit d'actuació és comarcal i circumscriu els Seves activitats a les Àrees: laboral, fiscal, comptable, finances i formació.

Els **Usuaris** detectats disposaran d'usuaris personals per a tots els serveis amb identificació idèntica i contrasenya. El format per a l 'usuari serà "inicial nom + cognom" tot en minúscules sense accents i la teva contrasenya serà generada amb caràcterístiques de seguretat suficient.

El projecte d'implantació web te com a Objectius Principals

- Tenir presencia a Internet
- Publicitar su activitat a clients potencials
- Oferir consultoria en línia

Per complir a els Requisits exigits és necessita la Configuració dels CMS Següents

- Wordpress: Gestió de la pàgina web.
  - Usuaris publicadors i Clara d'administradora de sistema.
  - Organització d'articles en categories en dos nivells: Actualitat (Fiscal, Laboral, Comptable, Finances, Formació), Fiscal, Laboral, Comptable, Finances, Formació
  - Pàgines: Contacti, Fiscal, Laboral, Comptable, Finances, Formació, Instal·lacions
  - Ginys: Recerca, Categories, Arxiu, núvol d'etiquetes, Banner, Galeria Fotos
  - Menú que integra el resta de serveis externs
- phpBB: Gestió de canal de comunicació
  - Usuaris moderadors de la Vostra 'àrea i Clara d'administradora de sistema.
  - Estructura de Fòrums Privats amb permisos per grups: General (fiscal, laboral, Contabilitat, Fiscalitat, Formació)
- Google Drive: Formació i Documentació
  - Usuaris personals vinculats a l'domini mitjançant Google Business
  - Inscripcions mitjançant formularis Públics
  - Carpetes compartides amb permisos d'accés: General, Formularis, Fiscal, Laboral, Comptable, Finances, Formació i Secretària.
  - sincronització automàtica i accés a la mobilitat

Queda com a ampliació futura la implantació d'una plataforma Moodle que Përmet la gestió completa de la formació a distància.

La infraestructura necessària per a la implantació s'estima en un espai d'Hosting professional que Përmet la Instal·lació de l'CMS (wordpress, phpBB, Moodle) junt amb l'Ús de Google Bussines com a soporte de documentació i treball ofimàtic web integrat . Els costos de Manteniment dels serveis és calculin a

- Rendiment d'Allotjament web OVH (500 GB d'Emmagatzematge) [10 € / mes]
  - [https://www.ovh.es/hosting/](https://www.ovh.es/hosting/)
- Goggle Apps for Business (5 Usuaris x 4 € / usuari a el mes) [20 € / mes]
  - [https://www.google.es/intx/es/enterprise/apps/business/](https://www.google.es/intx/es/enterprise/apps/business/)

### 📄 base.css

```css
/*

eXe

Copyright 2004-2006, University of Auckland

Copyright 2004-2007 eXe Project, New Zealand Tertiary Education Commission

base style sheet for all themes

*/

body{margin:0;padding:0 10px 10px 10px;font-family:arial,verdana,helvetica,sans-serif;font-size:.8em}#header{text-align:left;height:50px;padding-left:20px;font-size:2.2em;font-weight:bold}a{text-decoration:none}a:hover,a:focus{text-decoration:underline}img.submit,img.help,img.info,img.gallery{border:0}li{list-style-position:inside}#nodeDecoration{padding:.1em;border-bottom:0;text-align:right}.block,.feedback{display:block;padding-top:.25em;padding-bottom:.25em}.feedback{font-family:times,serif;font-size:120%}.feedback-button p{margin:0}.emphasis0{padding-left:0;margin:0}.iDeviceTitle{font-weight:bold;position:relative;top:-18px}input.feedbackbutton{margin-top:10px;margin-bottom:10px}.popupDiv{background-color:#EDEFF0;border:2px solid #607489;padding:0 4px 4px 4px;margin-left:15px;text-align:left;z-index:99;border-radius:3px}.popupDivLabel{text-align:center;font:message-box;font-weight:bold;color:#fff;cursor:move;margin:0 -4px;background-image:url(popup_bg.gif)}@media print{.feedback{display:block!important}.feedback.iDevice_solution a{text-decoration:none;color:inherit}.iDevice_solution li span{display:none}div.node,article.node{page-break-after:always}.external-iframe{display:none}.external-iframe-src{display:block!important;margin:2em 0;font-size:.95em;text-align:center}}.external-iframe{border:0}.iDevice a,#siteFooter a,#packageLicense a,.toggle-idevice a{text-decoration:underline}.iDevice a:hover,#siteFooter a:hover,#packageLicense a:hover,.toggle-idevice a:hover{text-decoration:none}.pre-code{background:#112C4A;color:#E7ECF1;font-family:Monaco,Courier,monospace;border-radius:9px;font-size:12px;margin:2em 1em;overflow:auto;padding:20px}.iDevice_content{position:relative;max-width:100%}.exe-epub3 .iDevice_content{position:static}.iDevice_header{background-position:0 50%;background-repeat:no-repeat}.iDevice_header.iDevice_header_noIcon{background-image:none;padding:5px 0}.TrueFalseIdevice label{white-space:nowrap;margin-right:1em;line-height:1.7em}.exe-dl{margin-bottom:2em;margin-left:1.5em}.exe-dl dt{font-weight:bold}.exe-dl dd{margin:1em 1.5em}.js .exe-dl dt{margin:1.2em 0 0 0}.exe-dl dt a{text-decoration:underline}.exe-dl .icon,.exe-dl-toggler a{display:block;width:20px;height:20px;font-size:1.2em;margin-right:1em;line-height:20px;text-align:center;float:left;border-radius:2px;position:relative}.exe-dl-toggler{height:20px;margin:1.5em}.exe-dl-toggler a{margin-left:0;font-weight:bold}.js .exe-dl dd{display:none;padding-left:0;margin:1em 1em 1em 37px}.exe-math{margin:2em 0}.exe-math,.MathJax_Display{text-align:left!important}.exe-math.position-center,.position-center .MathJax_Display,[style*="text-align: center"] .MathJax_Display{text-align:center!important}.exe-math.position-right,.position-right .MathJax_Display,[style*="text-align: right"] .MathJax_Display{text-align:right!important}.js .show-image .exe-math-code,.js .show-code .exe-math-img{display:none}.exe-math-links{font-size:.85em}.exe-figure{margin:2em 0;max-width:100%}.position-center{margin:2em auto}.position-right{margin:2em 0 2em auto}.float-left{float:left;margin:.5em 1.5em 1em 0}.float-right{float:right;margin:.5em 0 1em 2em}.figcaption{padding-top:.2em}.figcaption.header{padding-top:0;padding-bottom:.2em}.exe-layout-2-cols,.exe-layout-3-cols{width:100%}.exe-layout-2-cols .exe-col{float:left;width:49%}.exe-layout-2-cols .exe-col-1{padding-right:1%}.exe-layout-2-cols .exe-col-2{padding-left:1%}.exe-layout-2-30-70 .exe-col{width:69%}.exe-layout-2-30-70 .exe-col-1{width:29%}.exe-layout-2-70-30 .exe-col{width:29%}.exe-layout-2-70-30 .exe-col-1{width:69%}.exe-layout-3-cols .exe-col{float:left;width:32%}.exe-layout-3-cols .exe-col-1,.exe-layout-3-cols .exe-col-2{padding-right:2%}.exe-block-warning{background:#FCF8E3;color:#796034;border:1px solid #FAEBCC;padding:0 1em;border-radius:4px}p.exe-block-warning{padding:1em}.exe-block-alert{background:#ffc;color:#855000;border:1px solid #FFF099;padding:0 1em;border-radius:4px}p.exe-block-alert{padding:1em}.exe-block-danger{background:#FEF0EF;color:#973C3B;border:1px solid #F3DADD;padding:0 1em;border-radius:4px}p.exe-block-danger{padding:1em}.exe-block-info{background:#E1F1F9;color:#2B627D;border:1px solid #C9EDF4;padding:0 1em;border-radius:4px}p.exe-block-info{padding:1em}.exe-block-success{background:#E5F3E0;color:#336634;border:1px solid #DEEDD1;padding:0 1em;border-radius:4px}p.exe-block-success{padding:1em}.exe-block-warning a{color:#4F360A}.exe-block-alert a{color:#5B2600}.exe-block-danger a{color:#6D1211}.exe-block-info a{color:#063853}.exe-block-success a{color:#093C0A}.js a.exe-enlarge{position:relative;display:block}.exe-enlarge-icon{display:none;width:30px;height:30px;position:absolute;top:50%;left:50%;margin:-15px 0 0 -15px;border-radius:15px;background:#333;z-index:10;box-shadow:0 0 7px 0 #DDD}.exe-enlarge-icon b{width:30px;height:30px;line-height:30px;text-align:center;display:block;font-size:1.3em;color:#FFF}.exe-enlarge-icon b:before{content:"+"}.js a.exe-enlarge:hover img,.js a.exe-enlarge:focus img{opacity:.7;filter:alpha(opacity=70)}a.exe-enlarge:hover .exe-enlarge-icon,a.exe-enlarge:focus .exe-enlarge-icon{display:block;*display:none}.exe-clear{overflow:auto}.toggle-idevice,.exe-hidden,.js-required,.js .js-hidden,.exe-mindmap-code{display:none}.js .js-required{display:block}#packageLicense{text-align:center}.js #main .iDevice_hint_title{font-size:1em;margin-top:0;font-weight:normal;*margin-top:1em}.iDevice_hint{margin-bottom:1.5em}.iDevice_hint_title a{background-repeat:no-repeat;background-position:0 50%;padding-left:23px;text-decoration:none}.iDevice_hint_content{padding:0 23px}.iDevice_answer{overflow:hidden;*margin:1.5em 0}.iDevice_answer{overflow:hidden}.iDevice_answer p{margin-top:0}.iDevice_answer-field{width:2.5em;float:left}.js .iDevice_answer-content,.js .iDevice_answer-feedback{padding-left:2.5em}.hidden-idevice .image_text{display:none}abbr[title],acronym[title]{text-decoration:none;border-bottom:1px dotted}.pagination.page-counter{text-align:center}.pagination.noprt .sep{display:none}.pagination.noprt .page-counter{margin-right:20px}#topPagination .page-counter{margin-left:20px;margin-right:0}#skipNav{margin:0;position:absolute;width:100%}.sr-av,.js .js-sr-av,#skipNav a,.exe-hidden-accessible,.js .exe-tooltip-text{position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip:rect(0,0,0,0);height:0}#skipNav a{background:#333;color:#fff;padding:.4em .85em}#skipNav a:active,#skipNav a:focus{position:static;overflow:visible;clip:auto;height:auto}.exe-table{background:#fff;margin:2em auto;max-width:100%;border:1px solid #CCC;border-collapse:collapse;border-spacing:0}.exe-table caption{padding:.5em 0;text-align:center;font-style:italic}.exe-table td,.exe-table th{border:1px solid #CCC;margin:0;padding:.5em 1em}.exe-table thead{background:#ddd;color:#000;text-align:left}.exe-table tr:nth-child(2n-1) td,.exe-table tbody tr:nth-child(2n-1) th{background:#F4F4F4}.exe-table tbody tr:nth-child(2n) th{background:#F4F4F4}.exe-table tbody tr:nth-child(2n-1) th{background:#E4E4E4}.exe-table thead+tbody tr:nth-child(2n) th{background:#fff}.exe-table thead+tbody tr:nth-child(2n-1) th{background:#F4F4F4}.exe-table-minimalist{background:#fff;margin:2em auto;border-collapse:collapse}.exe-table-minimalist thead th{color:#000;padding:.6em 1.5em .6em .8em;border-bottom:2px solid #CCC;text-align:left}.exe-table-minimalist td,.exe-table-minimalist tbody th{border-bottom:1px solid #ccc;color:#555;padding:.5em 1.5em .5em .8em}.exe-table-minimalist tbody tr:hover td,.exe-table-minimalist tbody tr:hover th{color:#222}.exe-table-minimalist tr:nth-child(2n-1) td,.exe-table-minimalist tbody tr:nth-child(2n-1) th{background:#F9F9F9}.exe-table-minimalist caption{text-align:center;font-style:italic;border-bottom:2px solid #CCC;padding:.6em 0}body .qtip{font-size:.85em;line-height:1.5em}.qtip .exe-tooltip-text{position:relative;overflow:auto;clip:auto;height:auto}ol.auto-numbered{counter-reset:item}.auto-numbered ol{counter-reset:item}.auto-numbered li{display:block}.auto-numbered li:before{content:counters(item,".") ".- ";counter-increment:item}.exe-quote-cite cite{display:block;text-align:right;margin-top:-.5em}.exe-link-data{font-size:.8em;margin:0 .2em}.exe-link-data abbr{cursor:help}.styled-qc{font-family:Georgia,serif;font-style:italic;margin:1.5em 2.5em;padding:.25em 3.5em;position:relative}.styled-qc:before{display:block;content:"\201C";font-size:5em;position:absolute;left:0;top:-20px}.js .pbl-task-info{visibility:hidden}.pbl-task-info dt{float:left;font-weight:bold;margin-right:.5em}.pbl-task-info{overflow:hidden;margin:1em 0 1.5em 20px;width:auto;float:right;text-align:right}.pbl-task-info dt{margin:0;float:left;clear:left;width:150px}.pbl-task-info dd{margin:0 0 0 150px;text-align:left;padding-left:.5em}.pbl-task-info dd:after{content:'';display:block;clear:both}.pbl-task-description{clear:both}iframe,object,embed{max-width:100%}img,video{max-width:100%;height:auto}@media all and (max-width:992px){.exe-layout-3-cols .exe-col{float:none;width:100%;padding:0}.exe-layout-3-cols .exe-col .exe-figure{margin:2em auto}}@media all and (max-width:780px){.styled-qc{margin:1.5em .5em}.exe-layout-2-cols .exe-col{float:none;width:100%;padding:0}.exe-layout-2-cols .exe-col .exe-figure{margin:2em auto}}#exe-client-search-form{text-align:right;margin-bottom:2em}#exe-client-search-form p{margin:0}#exe-client-search-text{border:1px solid #ddd;padding:5px 10px;width:250px;max-width:60%}#exe-client-search-submit{border:1px solid #ddd;padding:5px 10px;background:#ddd;margin-left:-.4em;color:#333}.exe-client-search-results #nodeTitle,.exe-client-search-results .iDevice_wrapper,#exe-client-search-results,#exe-client-search-reset{display:none}.exe-client-search-results #exe-client-search-results{display:block}.exe-client-search-results #exe-client-search-reset{display:inline;line-height:2em}#exe-client-search-results p{margin-top:1.5em}#exe-client-search-results ul{margin:1.5em 1.5em 3em 1.5em;padding:0;list-style:none}#main #exe-client-search-results li{list-style-image:none;margin-bottom:1.5em}#exe-client-search-results a{font-size:1.15em}.exe-client-search-result{background:yellow}.exe-client-search-read-more{font-size:.7em;margin-left:.2em}#exe-client-search-reset{margin-left:.5em}@media all and (max-width:700px){#exe-client-search-form{text-align:center}}@media all and (max-width:600px){.exe-client-search-results #exe-client-search-reset{display:block;margin:1em 0 0 0}}
```

### 📄 common.js

```js
/*! ===========================================================================

	eXe

	Copyright 2004-2005, University of Auckland

	Copyright 2004-2008 eXe Project, http://eXeLearning.org/

	This program is free software; you can redistribute it and/or modify

	it under the terms of the GNU General Public License as published by

	the Free Software Foundation; either version 2 of the License, or

	(at your option) any later version.

	This program is distributed in the hope that it will be useful,

	but WITHOUT ANY WARRANTY; without even the implied warranty of

	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the

	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License

	along with this program; if not, write to the Free Software

	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

	===========================================================================

	ClozelangElement's functions by José Ramón Jiménez Reyes

	More than one right answer in the Cloze iDevice by José Miguel Andonegi

	2015. Refactored and completed by Ignacio Gros (http://www.gros.es) for http://exelearning.net/

*/

if(typeof($exe_i18n)=='undefined')$exe_i18n={previous:"Previous",next:"Next",show:"Show",hide:"Hide",showFeedback:"Show Feedback",hideFeedback:"Hide Feedback",correct:"Correct",incorrect:"Incorrect",menu:"Menu",download:"Download",yourScoreIs:"Your score is ",dataError:"Error recovering data",epubJSerror:"This might not work in this ePub reader.",solution:"Solution",epubDisabled:"This activity does not work in ePub.",print:"Print"}

var $exe={init:function(){var bod=$('body');$exe.addRoles();if(!bod.hasClass("exe-single-page")){var t=$exe.isIE();if(t){if(t>7)$exe.iDeviceToggler.init()}else $exe.iDeviceToggler.init()}

this.hasMultimediaGalleries=false;this.setMultimediaGalleries();this.setModalWindowContentSize();if(!bod.hasClass("exe-epub3")){var n=document.body.innerHTML;if(this.hasMultimediaGalleries||$(".mediaelement").length>0){$exe.loadMediaPlayer.getPlayer();}}else{bod.addClass("js");}

$exe.hint.init();$exe.setIframesProperties();$exe.hasTooltips();$exe.math.init();$exe.dl.init();$("a.exe-enlarge").each(function(i){var e=$(this);var c=$(this).children();if(c.length==1&&c.eq(0).prop("tagName")=="IMG"){e.prepend('<span class="exe-enlarge-icon"><b></b></span>');}});$exe.sfHover();$("INPUT.autocomplete-off").attr("autocomplete","off");$('.feedbackbutton.feedback-toggler').click(function(){var changeText=false;if(this.value==$exe_i18n.showFeedback||this.value==$exe_i18n.hideFeedback)changeText=true;$exe.toggleFeedback(this,changeText);});$(".textIdevice,.pblIdevice").each(function(i){$(".feedbackbutton",this).each(function(){var buttonTxt=this.value.split("|");if(buttonTxt.length==2){buttonTxt=[$.trim(buttonTxt[0]),$.trim(buttonTxt[1])]

this.value=buttonTxt[0];window['$exeTextIdeviceButtonText'+i]=buttonTxt;}

$(this).click(function(){var feedback=$(this).parent().next('.feedback');var hasCustomText=typeof(window['$exeTextIdeviceButtonText'+i])!='undefined';if(feedback.is(":visible")){if(hasCustomText)this.value=window['$exeTextIdeviceButtonText'+i][0];feedback.slideUp();}else{if(hasCustomText)this.value=window['$exeTextIdeviceButtonText'+i][1];feedback.slideDown();}

return false;});});$(".pbl-task-info",this).delay(1500).css({"opacity":0,"visibility":"visible"}).fadeTo("slow",1).each(function(){var dts=$("dt",this);var tA=$(this).css("text-align");if(tA=="right"){var width=0;dts.css("width","auto").each(function(){var w=$(this).width();if(w>width)width=w;});if(width!=0){dts.css("width",width+"px");$("dd",this).css("margin-left",width+"px");}}else if(tA=="left"){var width=0;dts.css("width","auto").each(function(){$(this).next("dd").css("margin-left",$(this).width()+"px");});}

dts.each(function(){$("span",this).attr("title",$(this).text());});});});$('.cloze-feedback-toggler').click(function(){var e=$(this);var id=e.attr('name').replace('feedback','');$exe.cloze.toggleFeedback(id,this);});$('.cloze-score-toggler').click(function(){var e=$(this);var id=e.attr('name').replace('getScore','');$exe.cloze.showScore(id,1);});$('form.cloze-form').submit(function(){var e=$(this);var id=e.attr('name').replace('cloze-form-','');try{$exe.cloze.showScore(id,1);}catch(e){var txt=$exe_i18n.dataError;if($('body').hasClass('exe-epub3'))txt+='<br /><br />'+$exe_i18n.epubJSerror;$("#clozeScore"+id).html(txt);}

return false;});$('form.quiz-test-form').submit(function(){try{calcScore2();}catch(e){var txt=$exe_i18n.dataError;if($('body').hasClass('exe-epub3'))txt+='<br /><br />'+$exe_i18n.epubJSerror;$('form.quiz-test-form input[type=submit]').hide().before(txt);}

return false;});$('.exe-radio-option').change(function(){var c=this.className.split(" ");if(c.length!=2)return;c=c[1];c=c.replace("exe-radio-option-","");c=c.split("-");if(c.length!=4)return;$exe.getFeedback(c[0],c[1],c[2],c[3]);});$('form.multi-select-form').submit(function(){return false;});$('.multi-select-feedback-toggler').click(function(){var i=this.id.replace("multi-select-feedback-toggler-","");i=i.split("-");if(i.length!=2)return;$exe.showFeedback(this,i[0],i[1]);});$('form.cloze-activity-form').submit(function(){try{var e=$(this);var id=e.attr('name').replace('cloze-form-','');$exe.cloze.submit(id);}catch(e){var txt=$exe_i18n.dataError;if($('body').hasClass('exe-epub3'))txt+='<br /><br />'+$exe_i18n.epubJSerror;if($exe.cloze.hasBeenTested==false){$exe.cloze.hasBeenTested=true;$('form.cloze-activity-form input[type=submit]').hide().before(txt);}}

return false;});if(window.DOMParser)this.clientSearch.init(bod);},clientSearch:{init:function(bod){if(bod.hasClass("exe-web-site")&&bod.hasClass("exe-search-bar")){$.ajax({type:"GET",url:"contentv3.xml",dataType:"xml",success:function(xml){$exe.clientSearch.main=$("#main");$exe.contentv3=xml;var sF='<div id="exe-client-search">\

							<form id="exe-client-search-form" action="#" method="GET">\

								<p><label for="exe-client-search-text" class="sr-av">'+$exe_i18n.fullSearch+': </label><input type="text" id="exe-client-search-text" /> \

								<input type="submit" id="exe-client-search-submit" value="'+$exe_i18n.search+'" />\

								<a href="#main" id="exe-client-search-reset" title="'+$exe_i18n.hideResults+'"><span>'+$exe_i18n.hideResults+'</span></a></p>\

							</form>\

						</div>\

						<div id="exe-client-search-results"></div>';$exe.clientSearch.main.prepend(sF);$("#exe-client-search-form").submit(function(){$exe.clientSearch.search($("#exe-client-search-text").val());return false;});$("#exe-client-search-text").prop("placeholder",$exe_i18n.fullSearch+"...");$("#exe-client-search-reset").click(function(){$("#exe-client-search-text").val("")

$exe.clientSearch.search("");return false;});$exe.clientSearch.results=$("#exe-client-search-results");$exe.clientSearch.results.css("min-height",$exe.clientSearch.main.height()+"px");$("#skipNav").append(' <a href="#exe-client-search-text" id="exe-client-search-lnk" class="sr-av">'+$exe_i18n.fullSearch+'</a>');$("#exe-client-search-lnk").click(function(){$("#exe-client-search-text").focus();return false;});},error:function(){}});}},strip:function(html){html=html.trim();var splitter="~exe-activity-results~: ";if(html.indexOf('<div class="adivina-IDevice')==0||html.indexOf('<div class="quext-IDevice')==0||html.indexOf('<div class="rosco-IDevice')==0||html.indexOf('<div class="vquext-IDevice')==0){html=html.replace('{',splitter+'{');}else if(html.indexOf('<div class="exe-interactive-video')==0){html=splitter+html;}else if(html.indexOf('<div class="exe-sortableList')==0){html=html.replace('<ul',splitter+'<ul');}else if(html.indexOf('<u>')!=-1){html=html.replace('<u>','...'+splitter+'<u>');}

var regex=/(<([^>]+)>)/ig

html=html.replace(regex,"");html=html.replace(/</g,"&lt;");html=html.replace(/>/g,"&gt;");return html;},getNodeHTML:function(nodeNo,sTitle,query,html){query=query.toLowerCase();var div=$("<div />");div.html(html);$("instance",div).each(function(){if($(this).attr("class")=="exe.engine.node.Node"||$(this).attr("class")=="exe.engine.notaidevice.NotaIdevice"){$(this).remove();}});var res="";var currHTML;var as=$("#siteNav a");var currTit=sTitle.toLowerCase();div.find('unicode').each(function(){if($(this).attr("content")=="true"){currHTML=$(this).attr("value");if(typeof currHTML=='string')currHTML=$exe.clientSearch.strip(currHTML);if(currTit.indexOf(query)!=-1||currHTML.toLowerCase().indexOf(query)!=-1){var a=as.eq(nodeNo);a_by_title=$("#siteNav a:contains('"+sTitle+"')")

if(a.html()!=sTitle&&a_by_title){a=a_by_title;}

if(a.length==1){currHTML=currHTML.split("~exe-activity-results~: ");currHTML=currHTML[0];if(currHTML=="")currHTML="...";else res+='<li><strong><a href="'+a.attr("href")+'" \

							class="exe-client-search-result-link">'+sTitle+'</a> &rarr; </strong>\

							<span class="exe-client-search-result-detail">'+currHTML+"</span></li>";}}}});return res;},splitByWords:function(text,startFrom,lengthFrom){var len=text.length,re=/[ ,.]/,fr=(startFrom<=0)?0:text.substr(startFrom).search(re)+startFrom+1,to=(lengthFrom>=len)?len:text.substr(lengthFrom).search(re)+lengthFrom;if(fr===-1)fr=0;if(to===(lengthFrom-1))to=len;return text.substr(fr,to);},search:function(query){if(query.length<3){$("body").removeClass("exe-client-search-results");return;}

var xml=$exe.contentv3;var nodeNo=0;$("body").addClass("exe-client-search-results");$exe.clientSearch.results.html("");var results="";$(xml).find('instance').each(function(){if($(this).attr("class")=="exe.engine.node.Node"){var currentNode=$(this);var sTitle=currentNode.find('unicode').eq(0).attr("value");var str="";try{str=currentNode.html();}catch(e){var s=new XMLSerializer();var d=this;str=s.serializeToString(d);var tmp=$("<div></div>");tmp.html(str);var html=$("instance",tmp).eq(0).html();str=html;}

results+=$exe.clientSearch.getNodeHTML(nodeNo,sTitle,query,str.replace(/script/g,"script_"));nodeNo++;}});if(results!=""){results='<p>'+$exe_i18n.searchResults.replace("%","<strong>"+query+"</strong>")+':</p><ul>'+results+'</ul>';$exe.clientSearch.results.html(results);$(".exe-client-search-result-link",$exe.clientSearch.results).html(function(_,html){html=html.replace(/script_/g,"script");var re=new RegExp('('+query+')',"gi");return html.replace(re,'<mark class="exe-client-search-result">$1</mark>');});$(".exe-client-search-result-detail",$exe.clientSearch.results).each(function(i){var max=200;var c=$(this).text();c=$exe.clientSearch.strip(c);var n="";if(c.length>(max+100)){var start=$exe.clientSearch.splitByWords(c,0,max);var end=c.replace(start," ");n+=start;n+='<a href="#exe-client-search-text-'+i+'" title="'+$exe_i18n.more+'" class="exe-client-search-read-more">[&hellip;]</a>';n+='<span class="js-hidden" id="exe-client-search-text-'+i+'">';n+=end;n+='</span>';this.innerHTML=n;}

$(this).html(function(_,html){html=html.replace(/script_/g,"script");var re=new RegExp('('+query+')',"gi");return html.replace(re,'<mark class="exe-client-search-result">$1</mark>');});});$(".exe-client-search-read-more").click(function(){var e=$(this);$(e.attr("href")).fadeIn();e.remove();return false;});$(".exe-client-search-result-link",$exe.clientSearch.results).click(function(){var extra="";if(!$("#siteNav").is(":visible"))extra="?nav=false";window.location.href=this.href+extra;return false;});}else{$exe.clientSearch.results.html('<p>'+$exe_i18n.noSearchResults.replace("%","<strong>"+query+"</strong>")+'</p>')}}},setModalWindowContentSize:function(){if(window.chrome){$(".exe-dialog-text img").each(function(){var e=$(this);var h=e.attr("height");var w=e.attr("width");if(e.height()==0&&e.css("height")=="0px"&&h&&w){if(!isNaN(h)&&h>0&&!isNaN(w)&&w>0){var maxW=480;if(w<maxW)maxW=w;h=Math.round(maxW*h/w);e.css("height",h+"px");}}});}},setMultimediaGalleries:function(){if(typeof($.prettyPhoto)!='undefined'){var lightboxLinks=$("a[rel^='lightbox']");lightboxLinks.each(function(i){var ref=$(this).attr("href");var _ref=ref.toLowerCase();var isAudio=_ref.indexOf(".mp3")!=-1;var isVideo=_ref.indexOf(".mp4")!=-1||_ref.indexOf(".flv")!=-1||_ref.indexOf(".ogg")!=-1||_ref.indexOf(".ogv")!=-1;if(isAudio||isVideo){var id="media-box-"+i;$(this).attr("href","#"+id);var hiddenPlayer=$('<div class="exe-media-box js-hidden" id="'+id+'"></div>');if(isAudio)hiddenPlayer.html('<div class="exe-media-audio-box"><audio controls="controls" src="'+ref+'" class="exe-media-box-element exe-media-box-audio"><a href="'+ref+'">audio/mpeg</a></audio></div>');else hiddenPlayer.html('<div class="exe-media-video-box"><video width="480" height="385" controls="controls" class="exe-media-box-element"><source src="'+ref+'" /></video></div>');$("body").append(hiddenPlayer);$exe.hasMultimediaGalleries=true;}

var t=this.title;if(ref.indexOf('#')==0&&$(ref).length==1&&t&&t!="")$(ref).prepend('<h2 class="pp_title">'+t+'</h2>');});lightboxLinks.prettyPhoto({social_tools:"",deeplinking:false,opacity:0.85,changepicturecallback:function(){var block=$("#pp_full_res")

var media=$(".exe-media-box-element",block);if($exe.loadMediaPlayer.isReady){if(media.length==1)media.mediaelementplayer();$exe.loadMediaPlayer.isCalledInBox=true;}

var cont=$(".pp_content_container");cont.attr("class","pp_content_container");if(media.length==1&&media[0].hasAttribute('src')){if(media.hasClass("exe-media-box-audio"))cont.attr("class","pp_content_container with-audio");var src=media.attr('src');var ext=src.split("/");ext=ext[ext.length-1];ext=ext.split(".")[1];$(".pp_details .pp_description").append(' <span class="exe-media-download"><a href="'+src+'" title="'+$exe_i18n.download+'" download>'+ext+'</a></span>');}else{block=$(".pp_inline",block);if(block.length==1)$(".pp_description").hide();}}});var eXeGalleries=$('.GalleryIdevice');if(lightboxLinks.length==0&&eXeGalleries.length>0&&typeof(exe_editor_mode)=="undefined"){$('.exeImageGallery a').each(function(){this.title+=" ~ ["+this.href+"]";this.href="#";this.onclick=function(){var ul=$(this).parent().parent();if(ul.length==1&&ul.attr('id')!=""){if($("#"+ul.attr('id')+"-warning").length==0){var txt=$exe_i18n.dataError;if($('body').hasClass('exe-epub3'))txt+='<br /><br />'+$exe_i18n.epubJSerror;ul.prepend('<div id="'+ul.attr('id')+'-warning">'+txt+'</div>');}}}});}}},sfHover:function(){var e=document.getElementById("siteNav");if(e){var t=e.getElementsByTagName("LI");for(var n=0;n<t.length;n++){t[n].onmouseover=function(){this.className="sfhover"};t[n].onmouseout=function(){this.className="sfout"}}

var r=e.getElementsByTagName("A");for(var n=0;n<r.length;n++){r[n].onfocus=function(){this.className+=(this.className.length>0?" ":"")+"sffocus";this.parentNode.className+=(this.parentNode.className.length>0?" ":"")+"sfhover";if(this.parentNode.parentNode.parentNode.nodeName=="LI"){this.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.className.length>0?" ":"")+"sfhover";if(this.parentNode.parentNode.parentNode.parentNode.parentN
```

### 📄 common_i18n.js

```js
$exe_i18n={previous:"Anterior",next:"Següent",show:"Mostra",hide:"Amaga",showFeedback:"Mostra realimentació",hideFeedback:"Amaga realimentació",correct:"Correcte",incorrect:"Incorrecte",menu:"Menú",download:"Descarrega",yourScoreIs:"La seva puntuació és",dataError:"Errada mentre es recuperaven dades",epubJSerror:"Pot ser que això no funcioni en aquest lector d'ePub.",epubDisabled:"Aquesta activitat no funciona en ePub.",solution:"Solució",print:"Imprimeix",fullSearch:"Cerca a totes les pàgines",noSearchResults:"No s'ha trobat cap resultat per a %",searchResults:"Resultats de la cerca per a %",hideResults:"Amaga els resultats",more:"Més",search:"Cerca"};
```

### 📄 config.xml

```xml
<?xml version="1.0"?>

<theme>

	<name>Todo FP</name>

	<version>2019</version>

	<compatibility>2.4</compatibility>

	<author>eXeLearning</author>

	<author-url>http://www.exelearning.net</author-url>

	<license>Creative Commons by-sa</license>

	<license-url>http://creativecommons.org/licenses/by-sa/3.0/</license-url>

	<description>Plantilla originalmente creada para la "Formación Profesional a través de internet y online" del Ministerio de Educación, Cultura y Deporte. Adaptación del diseño: Ignacio Gros.</description>

	<langs lang="en">

		<description>This theme was originally created for "Formación Profesional a través de internet y online", Ministerio de Educación, Cultura y Deporte (Spanish Government). Adapted by Ignacio Gros.</description>

	</langs>

	<extra-head><![CDATA[<meta name="viewport" content="width=device-width, initial-scale=1" />

	]]></extra-head>

	<extra-body><![CDATA[<script type="text/javascript" src="my_js.js"></script>]]></extra-body>	

</theme>
```

### 📄 content.css

```css
/* Imágenes utilizadas */

/* my_list.gif - Sustituye al punto de las listas no numeradas introducidas desde eXeLearning  */

/* my_ims_header.jpg - Imagen de fondo para el título de cada página en los IMS y en los documentos exportados como Página sola */

/* my_header.jpg - Imagen de la cabecera de los documentos exportados como Sitio web */

/* my_nav_bg.jpg - Imagen de fondo del menú al exportar como Sitio web */

/* Colores */

body{

	color:#000; /* Cuerpo de texto */

	background:#ffffff; /* Color de fondo */

}

a{

	color:#38565F; /* Enlaces */

}

#header{

	color:#005F6F; /* Título del proyecto */	

}

#nodeTitle{

	color:#FFFFFF; /* Título de cada página */

}

#main #nodeDecoration{

	border-color:#E7EBEE; /* Borde del título de cada página */

	background-color:#6D95A1; /* Color de fondo */

	text-shadow:1px 1px 1px #466A76; /* Sombra del texto */

}

.iDeviceTitle{

	color: #38565F; /* Títulos de los iDevices */

}

.iDevice_inner{

	background-color:#F2F4EB; /* Fondo del cuerpo del iDevice */

	color:#2C4E46; /* Texto de los iDevices */

	border-color:#C7CFAB; /* Borde del cuerpo de los iDevices */

}

#siteFooter{

	color:#38565F; /* Texto del pie de página */

}

#siteFooter a{

	color:#6A3A4A; /* Enlaces del pie de página */

}

.pre-code{

	background:#243338; /* Color de fondo del código de ordenador intertado desde TinyMCE */

}

/* Otras definiciones */

body{font:.75em/1.5 Arial,Verdana,Helvetica,sans-serif;padding:15px;margin:0;text-align:left}

#nodeTitle{font-size:1.5em;margin:0;text-align:left;font-weight:bold}

#main #nodeDecoration{padding:20px 15px 5px 15px;margin-bottom:15px;background-repeat:no-repeat;background-position:right 0;border-width:1px;border-style:solid;background-image:url(my_ims_header.jpg);text-align:left}

#header{height:auto;padding:0;font-size:1.5em;font-weight:bold}

#header h1{margin:0;font-size:1em}

#main ul li{width:auto;list-style-image:url(my_list.gif);margin-bottom:0.2em}

#wikipedia-content ul li{list-style-image:none;margin-bottom:auto}

#main h2{font-size:1.4em}

#main h3{font-size:1.3em}

#main h4{font-size:1.2em}

#main h5{font-size:1.1em}

.iDevice{margin:10px 0 20px 0}

.iDeviceTitle{font-size:1.2em;vertical-align:bottom;top:auto}

#main .iDeviceTitle{display:inline;font-size:1.2em}

/* iDevice icons */

.iDevice_icon{width:30px;height:auto;margin-right:5px} /* Legacy: old iDevices */

.iDevice_header{background-image:url(icon_generic.gif);padding:5px 0 5px 37px;margin-bottom:3px}

.activityIdevice .iDevice_header{background-image:url(icon_activity.gif)}

.readingIdevice .iDevice_header{background-image:url(icon_reading.gif);padding-left:41px}

.ListaIdevice .iDevice_header,

.QuizTestIdevice .iDevice_header,

.MultichoiceIdevice .iDevice_header,

.TrueFalseIdevice .iDevice_header,

.MultiSelectIdevice .iDevice_header,

.ClozeIdevice .iDevice_header{background-image:url(icon_question.gif);padding-left:35px}

.CasestudyIdevice .iDevice_header{background-image:url(icon_casestudy.gif)}

.preknowledgeIdevice .iDevice_header{background-image:url(icon_preknowledge.gif);padding-left:39px}

.GalleryIdevice .iDevice_header{background-image:url(icon_gallery.gif);padding-left:38px}

.objectivesIdevice .iDevice_header{background-image:url(icon_objectives.gif)}

.ReflectionIdevice .iDevice_header{background-image:url(icon_reflection.gif)}

/* Download package iDevice */

.download-packageIdevice .exe-download-package-link a{background:#38565F}

.iDevice_content{overflow:auto}

.iDevice_inner{padding: 10px 20px;border-width:1px;border-style:solid;border-radius:10px}

/* base.css */

.block,.feedback{padding:0}

input.feedbackbutton{margin:0}

.feedback{font-family:Arial,Verdana,Helvetica,sans-serif;font-size:1em}

li{list-style-position:outside}

.exe-dl .icon{line-height:17px}

.js .exe-dl dd{margin-left:34px}

.exe-enlarge-icon b{font-size:1.7em}

/* Hide/Show iDevice */

.toggle-idevice{margin:12px 0 0;text-align:right;display:block}

.iDevice_header .toggle-idevice{float:right;padding-top:2px;margin:0}

.toggle-idevice a{display:inline-block;width:16px;height:16px;background:url(my_hide_show.gif) no-repeat 0 -16px}

.toggle-idevice .show-idevice{background-position:0 0}

.toggle-idevice span{position:absolute;overflow:hidden;clip:rect(0,0,0,0);height:0}

@media all and (max-width: 600px) {

	#main #nodeDecoration{background-image:none}

}
```

### 📄 content.xsd

```xsd
<?xml version="1.0" encoding="UTF-8"?>

<xs:schema xmlns="http://www.exelearning.org/content/v0.1" targetNamespace="http://www.exelearning.org/content/v0.1" xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified">

  <xs:element name="instance">

    <xs:complexType>

      <xs:sequence>

        <xs:element minOccurs="0" maxOccurs="unbounded" ref="dictionary"/>

      </xs:sequence>

      <xs:attribute name="class" use="required" type="xs:NCName"/>

      <xs:attribute name="reference" type="xs:integer"/>

      <xs:attribute name="version" type="xs:decimal"/>

    </xs:complexType>

  </xs:element>

  <xs:element name="dictionary">

    <xs:complexType>

      <xs:choice minOccurs="0" maxOccurs="unbounded">

        <xs:element ref="dictionary"/>

        <xs:element ref="instance"/>

        <xs:element ref="reference"/>

        <xs:element ref="string"/>

        <xs:element ref="unicode"/>

        <xs:element ref="bool"/>

        <xs:element ref="int"/>

        <xs:element ref="list"/>

        <xs:element ref="none"/>

      </xs:choice>

    </xs:complexType>

  </xs:element>

  <xs:element name="bool">

    <xs:complexType>

      <xs:attribute name="value" use="required" type="xs:integer"/>

    </xs:complexType>

  </xs:element>

  <xs:element name="int">

    <xs:complexType>

      <xs:attribute name="value" use="required" type="xs:integer"/>

    </xs:complexType>

  </xs:element>

  <xs:element name="list">

    <xs:complexType>

      <xs:sequence>

        <xs:choice>

          <xs:element minOccurs="0" maxOccurs="unbounded" ref="instance"/>

          <xs:element minOccurs="0" maxOccurs="unbounded" ref="tuple"/>

          <xs:element minOccurs="0" maxOccurs="unbounded" ref="reference"/>

        </xs:choice>

        <xs:element minOccurs="0" maxOccurs="unbounded" ref="unicode"/>

        <xs:element minOccurs="0" maxOccurs="unbounded" ref="string"/>

        <xs:element minOccurs="0" maxOccurs="unbounded" ref="int"/>

      </xs:sequence>

    </xs:complexType>

  </xs:element>

  <xs:element name="tuple">

    <xs:complexType>

      <xs:sequence>

        <xs:element maxOccurs="unbounded" ref="unicode"/>

        <xs:element minOccurs="0" ref="string"/>

      </xs:sequence>

    </xs:complexType>

  </xs:element>

  <xs:element name="none">

    <xs:complexType/>

  </xs:element>

  <xs:element name="string">

    <xs:complexType>

      <xs:attribute name="content" type="xs:boolean"/>

      <xs:attribute name="role" type="xs:NCName"/>

      <xs:attribute name="value" use="required"/>

    </xs:complexType>

  </xs:element>

  <xs:element name="unicode">

    <xs:complexType>

      <xs:attribute name="content" type="xs:boolean"/>

      <xs:attribute name="role" type="xs:NCName"/>

      <xs:attribute name="value" use="required"/>

    </xs:complexType>

  </xs:element>

  <xs:element name="reference">

    <xs:complexType>

      <xs:attribute name="key" use="required" type="xs:integer"/>

    </xs:complexType>

  </xs:element>

</xs:schema>
```

### 📄 contentv3.xml

```xml
<?xml version="1.0" encoding="utf-8"?>

<instance xmlns="http://www.exelearning.org/content/v0.3" reference="15" version="0.3" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemalocation="http://www.exelearning.org/content/v0.3 content.xsd" class="exe.engine.package.Package">
 <dictionary>
  <string role="key" value="_title"></string>
  <unicode value="Aplicacions Web"></unicode>
  <string role="key" value="idevices"></string>
  <list></list>
  <string role="key" value="_addPagination"></string>
  <bool value="0"></bool>
  <string role="key" value="_addSearchBox"></string>
  <bool value="0"></bool>
  <string role="key" value="_author"></string>
  <unicode value="Ferran Pelechano Garcia"></unicode>
  <string role="key" value="_backgroundImg"></string>
  <unicode value=""></unicode>
  <string role="key" value="_contextMode"></string>
  <unicode value="presencial"></unicode>
  <string role="key" value="_contextPlace"></string>
  <unicode value="classroom"></unicode>
  <string role="key" value="_description"></string>
  <unicode value="Aplicacions Web - CFGM Sistemes Microinformàtics i Xarxes"></unicode>
  <string role="key" value="_docType"></string>
  <unicode value="HTML5"></unicode>
  <string role="key" value="_exportElp"></string>
  <bool value="0"></bool>
  <string role="key" value="_extraHeadContent"></string>
  <unicode value=""></unicode>
  <string role="key" value="_fieldValidationInfo"></string>
  <dictionary>
   <unicode role="key" value="all"></unicode>
   <dictionary>
    <unicode role="key" value="mandatory_fields"></unicode>
    <list>
     <unicode value="pp_title"></unicode>
     <unicode value="pp_lang"></unicode>
     <unicode value="pp_description"></unicode>
     <unicode value="pp_author"></unicode>
     <unicode value="pp_newlicense"></unicode>
    </list>
   </dictionary>
   <unicode role="key" value="procomun"></unicode>
   <dictionary>
    <unicode role="key" value="mandatory_fields"></unicode>
    <list>
     <unicode value="pp_learningResourceType"></unicode>
    </list>
    <unicode role="key" value="values_from_list"></unicode>
    <dictionary>
     <unicode role="key" value="pp_learningResourceType"></unicode>
     <list>
      <unicode value="master class"></unicode>
      <unicode value="closed exercise or problem"></unicode>
      <unicode value="real project"></unicode>
      <unicode value="didactic game"></unicode>
      <unicode value="webquest"></unicode>
      <unicode value="open problem"></unicode>
      <unicode value="simulation"></unicode>
      <unicode value="questionnaire"></unicode>
      <unicode value="conceptual map"></unicode>
     </list>
    </dictionary>
   </dictionary>
  </dictionary>
  <string role="key" value="_intendedEndUserRoleGroup"></string>
  <bool value="0"></bool>
  <string role="key" value="_intendedEndUserRoleTutor"></string>
  <bool value="0"></bool>
  <string role="key" value="_intendedEndUserRoleType"></string>
  <unicode value="learner"></unicode>
  <string role="key" value="_isChanged"></string>
  <bool value="0"></bool>
  <string role="key" value="_isTemplate"></string>
  <bool value="0"></bool>
  <string role="key" value="_lang"></string>
  <unicode value="ca"></unicode>
  <string role="key" value="_learningResourceType"></string>
  <unicode value=""></unicode>
  <string role="key" value="_levelNames"></string>
  <list>
   <unicode value="Tema"></unicode>
   <unicode value="Secció"></unicode>
   <unicode value="Apartat"></unicode>
  </list>
  <string role="key" value="_name"></string>
  <unicode value="AWE"></unicode>
  <string role="key" value="_nextIdeviceId"></string>
  <int value="148"></int>
  <string role="key" value="_nextNodeId"></string>
  <int value="78"></int>
  <string role="key" value="_nodeIdDict"></string>
  <dictionary>
   <unicode role="key" value="0"></unicode>
   <instance class="exe.engine.node.Node" reference="3">
    <dictionary>
     <string role="key" value="_title"></string>
     <unicode value="Aplicacions Web"></unicode>
     <string role="key" value="idevices"></string>
     <list>
      <instance class="exe.engine.jsidevice.JsIdevice" reference="1">
       <dictionary>
        <string role="key" value="_title"></string>
        <unicode value="Autoria"></unicode>
        <string role="key" value="_attributes"></string>
        <list>
         <tuple>
          <string value="title"></string>
          <list>
           <string value="Title"></string>
           <int value="0"></int>
           <int value="0"></int>
          </list>
         </tuple>
         <tuple>
          <string value="category"></string>
          <list>
           <string value="Category"></string>
           <int value="0"></int>
           <int value="1"></int>
          </list>
         </tuple>
         <tuple>
          <string value="css-class"></string>
          <list>
           <string value="CSS class"></string>
           <int value="0"></int>
           <int value="2"></int>
          </list>
         </tuple>
         <tuple>
          <string value="icon"></string>
          <list>
           <string value="Icon"></string>
           <int value="0"></int>
           <int value="3"></int>
          </list>
         </tuple>
        </list>
        <string role="key" value="_author"></string>
        <string value=""></string>
        <string role="key" value="_iDeviceDir"></string>
        <string value="text"></string>
        <string role="key" value="_purpose"></string>
        <string value=""></string>
        <string role="key" value="_tip"></string>
        <string value=""></string>
        <string role="key" value="_valid"></string>
        <bool value="1"></bool>
        <string role="key" value="class_"></string>
        <unicode value="text"></unicode>
        <string role="key" value="edit"></string>
        <bool value="0"></bool>
        <string role="key" value="emphasis"></string>
        <int value="1"></int>
        <string role="key" value="exe.engine.jsidevice.JsIdevice.persistenceVersion"></string>
        <int value="1"></int>
        <string role="key" value="fields"></string>
        <list>
         <instance class="exe.engine.field.TextAreaField" reference="2">
          <dictionary>
           <string role="key" value="_id"></string>
           <unicode value="130_2"></unicode>
           <string role="key" value="_idevice"></string>
           <reference key="1"></reference>
           <string role="key" value="_instruc"></string>
           <string value=""></string>
           <string role="key" value="_name"></string>
           <string value=""></string>
           <string role="key" value="anchor_names"></string>
           <list></list>
           <string role="key" value="anchors_linked_from_fields"></string>
           <dictionary></dictionary>
           <string role="key" value="content_w_resourcePaths"></string>
           <unicode content="true" value="&lt;div class=&quot;exe-text&quot;&gt;&lt;ul&gt;

&lt;li&gt;

&lt;p&gt;Ferran Pelechano Garcia - &lt;a href=&quot;https://pelechano.com&quot; onclick=&quot;browseURL(this); return false;&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;https://pelechano.com&lt;/a&gt; - Última Revisió en : 19/08/2021&lt;/p&gt;

&lt;/li&gt;

&lt;li&gt;Basat en el material publicat al llibre:

&lt;ul&gt;

&lt;li&gt;Aplicaciones Web: CFGM Sistemas Microinformáticos y Redes&lt;/li&gt;

&lt;li&gt;ISBN-13: 978-1500397456&lt;/li&gt;

&lt;li&gt;ISBN-10: 1500397458&lt;/li&gt;

&lt;li&gt;&lt;a href=&quot;https://www.amazon.es/Aplicaciones-Web-Sistemas-Microinform%C3%A1ticos-Redes/dp/1500397458&quot;&gt;https://www.amazon.es/Aplicaciones-Web-Sistemas-Microinform%C3%A1ticos-Redes/dp/1500397458&lt;/a&gt;&lt;/li&gt;

&lt;/ul&gt;

&lt;/li&gt;

&lt;/ul&gt;&lt;/div&gt;"></unicode>
           <string role="key" value="exe.engine.field.Field.persistenceVersion"></string>
           <int value="4"></int>
           <string role="key" value="exe.engine.field.FieldWithResources.persistenceVersion"></string>
           <int value="2"></int>
           <string role="key" value="exe.engine.field.TextAreaField.persistenceVersion"></string>
           <int value="3"></int>
           <string role="key" value="htmlTag"></string>
           <string value="div"></string>
           <string role="key" value="images"></string>
           <instance class="exe.engine.galleryidevice.GalleryImages">
            <dictionary>
             <string role="key" value=".listitems"></string>
             <list></list>
             <string role="key" value="idevice"></string>
             <reference key="2"></reference>
            </dictionary>
           </instance>
           <string role="key" value="intlinks_to_anchors"></string>
           <dictionary></dictionary>
           <string role="key" value="nextImageId"></string>
           <int value="0"></int>
           <string role="key" value="parentNode"></string>
           <reference key="3"></reference>
          </dictionary>
         </instance>
        </list>
        <string role="key" value="icon"></string>
        <unicode value="time"></unicode>
        <string role="key" value="id"></string>
        <unicode value="23"></unicode>
        <string role="key" value="ideviceCategory"></string>
        <unicode value="Text and Tasks"></unicode>
        <string role="key" value="lastIdevice"></string>
        <bool value="0"></bool>
        <string role="key" value="nextFieldId"></string>
        <int value="3"></int>
        <string role="key" value="originalicon"></string>
        <string value=""></string>
        <string role="key" value="parentNode"></string>
        <reference key="3"></reference>
        <string role="key" value="systemResources"></string>
        <list></list>
        <string role="key" value="undo"></string>
        <bool value="1"></bool>
        <string role="key" value="userResources"></string>
        <list></list>
        <string role="key" value="version"></string>
        <int value="0"></int>
       </dictionary>
      </instance>
      <instance class="exe.engine.jsidevice.JsIdevice" reference="4">
       <dictionary>
        <string role="key" value="_title"></string>
        <unicode value="Introducció"></unicode>
        <string role="key" value="_attributes"></string>
        <list>
         <tuple>
          <string value="title"></string>
          <list>
           <string value="Title"></string>
           <int value="0"></int>
           <int value="0"></int>
          </list>
         </tuple>
         <tuple>
          <string value="category"></string>
          <list>
           <string value="Category"></string>
           <int value="0"></int>
           <int value="1"></int>
          </list>
         </tuple>
         <tuple>
          <string value="css-class"></string>
          <list>
           <string value="CSS class"></string>
           <int value="0"></int>
           <int value="2"></int>
          </list>
         </tuple>
         <tuple>
          <string value="icon"></string>
          <list>
           <string value="Icon"></string>
           <int value="0"></int>
           <int value="3"></int>
          </list>
         </tuple>
        </list>
        <string role="key" value="_author"></string>
        <string value=""></string>
        <string role="key" value="_iDeviceDir"></string>
        <string value="text"></string>
        <string role="key" value="_purpose"></string>
        <string value=""></string>
        <string role="key" value="_tip"></string>
        <string value=""></string>
        <string role="key" value="_valid"></string>
        <bool value="1"></bool>
        <string role="key" value="class_"></string>
        <unicode value="text"></unicode>
        <string role="key" value="edit"></string>
        <bool value="0"></bool>
        <string role="key" value="emphasis"></string>
        <int value="1"></int>
        <string role="key" value="exe.engine.jsidevice.JsIdevice.persistenceVersion"></string>
        <int value="1"></int>
        <string role="key" value="fields"></string>
        <list>
         <instance class="exe.engine.field.TextAreaField" reference="5">
          <dictionary>
           <string role="key" value="_id"></string>
           <unicode value="122_2"></unicode>
           <string role="key" value="_idevice"></string>
           <reference key="4"></reference>
           <string role="key" value="_instruc"></string>
           <string value=""></string>
           <string role="key" value="_name"></string>
           <string value=""></string>
           <string role="key" value="anchor_names"></string>
           <list></list>
           <string role="key" value="anchors_linked_from_fields"></string>
           <dictionary></dictionary>
           <string role="key" value="content_w_resourcePaths"></string>
           <unicode content="true" value="&lt;div class=&quot;exe-text&quot;&gt;&lt;p&gt;En l'enginyeria de programari s'anomena aplicació web a aquella eina que els usuaris poden utilitzar accedint a un servidor web a través d'Internet mitjançant un navegador. Les aplicacions web s'han popularitzat a causa de la facilitat d'accés que permeten, usant com a client el navegador web, amb independència de el sistema operatiu utilitzat. A més, resulta molt interessant la facilitat per desplegar, actualitzar i mantenir aplicacions web sense necessitat de distribuir ni instal·lar programari en els equips dels usuaris potencials.&lt;/p&gt;

&lt;p&gt;És per això, que s'han convertit en eines adequades per a la implantació de serveis empresarials i que, el domini de les mateixes, proporciona una sortida molt interessant per als professionals de sector informàtic formats en aquestes àrees. No hi ha empresa que no disposi d'alguna aplicació web activa i en ús, bé com a canal de comunicació amb els seus clients, bé com a element de promoció o fins i tot, com a eina de gestió interna. Webs, botigues online, blogs, plataformes de formació, presència en xarxes socials, fòrums ... infinitat de recursos que avui dia faciliten el creixement de qualsevol negoci estan accessibles a Internet a l'espera de ser utilitzats.&lt;/p&gt;

&lt;p&gt;En conclusió, el món de les aplicacions web s'ha convertit en una àrea important dins el sector informàtic i una formació bàsica resulta imprescindible per a qualsevol professional. En aquest llibre abordarem els aspectes més rellevants referits a les tecnologies web, passant per les aplicacions d'escriptori més utilitzades i com desplegar un servidor web, per aprofundir en alguns sistemes concrets que permeten mantenir gestors de continguts, sistemes d'emmagatzematge o paquets ofimàtics en línia. Gaudiu!&lt;/p&gt;&lt;/div&gt;"></unicode>
           <string role="key" value="exe.engine.field.Field.persistenceVersion"></string>
           <int value="4"></int>
           <string role="key" value="exe.engine.field.FieldWithResources.persistenceVersion"></string>
           <int
```

### 📄 context_pedaggig.html

Context Pedagògig

El mòdul 0228. Aplicacions Web s’estudia en el 2n curs del cicle formatiu de grau mitjà de “Sistemes Microinformàtics i Xarxes” amb un total de 88 hores, que es correspon a 4 hores setmanals.
1. Objectius generals del mòdul

1. Instal·lar gestors de continguts, identificant les seues aplicacions i configurant-los segons requeriments.
2. Instal·lar sistemes de gestió d'aprenentatge a distància, descrivint l'estructura del lloc i la jerarquia de directoris generada.
3. Instal·lar serveis de gestió d'arxius web, identificant les seues aplicacions i verificant la seua integritat.
4. Instal·lar aplicacions d'ofimàtica web, descrivint les seues característiques i entorns d'ús.
5. Instal·lar aplicacions web d'escriptori, descrivint les seues característiques i entorns d'ús.
2. Continguts

Aquesta part comprèn el desenvolupament exhaustiu dels diversos continguts del mòdul i es fonamenta principalment en l'Ordre de 29 de juliol 2009, de la Conselleria d'Educació, per la qual s'estableix per a la Comunitat Valenciana el currículum del cicle formatiu de Grau Mitjà corresponent al títol de Tècnic en Sistemes Microinformàtics i Xarxes. En aquesta Ordre es regulen els continguts mínims del mòdul agrupats en blocs de contingut

- Gestors de Continguts:
  - Definició dels conceptes bàsics. Tipus i característiques.
  - Instal·lació en sistemes operatius lliures i propietaris.
  - Creació d’usuaris i grups d’usuaris.
  - Utilització de la interfície gràfica. Personalització de l’entorn.
  - Funcionalitats proporcionades pel gestor de continguts. Sindicació.
  - Funcionament dels gestors de continguts.
  - Actualitzacions del gestor de continguts.
  - Informes d’accessos.
  - Configuració de mòduls i menús.
  - Mecanismes de seguretat.
  - Creació de fòrums. Regles d’accés.
  - Còpies de seguretat.
- Sistemes de gestió d’aprenentatge a distància:
  - Conceptes bàsics. Tipus i característiques.
  - Elements lògics: comunicació, materials i activitats.
  - Instal·lació en sistemes operatius lliures i propietaris.
  - Formes de registre. Interfície gràfica associada.
  - Personalització de l’entorn. Navegació i edició.
  - Creació de cursos seguint especificacions.
  - Gestió d’usuaris i grups.
  - Activació de funcionalitats.
  - Realització de còpies de seguretat i la seua restauració.
  - Realització d’informes.
  - Elaboració de documentació orientada a la formació dels usuaris.
- Servicis de gestió d’arxius web:
  - Conceptes bàsics.
  - Instal·lació.
  - Navegació i operacions bàsiques.
  - Administració del gestor. Usuaris i permisos. Tipus d’usuari.
  - Creació de recursos compartits.
  - Creació d’informes.
  - Estructura de directoris seguint especificacions.
  - Comprovació de la seguretat del gestor.
- Aplicacions d’ofimàtica web:
  - Conceptes bàsics.
  - Instal·lació.
  - Utilització de les aplicacions instal·lades.
  - Gestió d’usuaris i permisos associats.
  - Comprovació de la seguretat.
  - Realització d’informes.
  - Elaboració de documentació orientada a la formació.
- Aplicacions web d’escriptori:
  - Conceptes bàsics.
  - Aplicacions de correu web.
  - Aplicacions de calendari web.
  - Instal·lació.
  - Gestió d’usuaris.
  - Utilització de les aplicacions instal·lades.
3. Criteris d’avaluació

1. Identificar els requeriments necessaris per a instal·lar gestors de continguts.
2. Gestionar usuaris amb rols diferents.
3. Personalitzar la interfície del gestor de continguts.
4. Realitzar proves de funcionament.
5. Realitzar tasques d'actualització del gestor de continguts, especialment les de seguretat.
6. Instal·lar i configurar els mòduls i menús necessaris.
7. Activar i configurar els mecanismes de seguretat proporcionats pel propi gestor de continguts.
8. Habilitar fòrums i establir regles d'accés
9. Realitzar proves de funcionament.
10. Realitzar còpies de seguretat dels continguts del gestor.
11. Reconèixer l'estructura del lloc i la jerarquia de directoris generada.
12. Realitzar modificacions en l'estètica o aspecte del lloc.
13. Manipular i generar perfils personalitzats.
14. Comprovar la funcionalitat de les comunicacions mitjançant fòrums, consultes, entre uns altres.
15. Importar i exportar continguts en diferents formats.
16. Realitzar còpies de seguretat i restauracions.
17. Realitzar informes d'accés i utilització del lloc.
18. Comprovar la seguretat del lloc.
19. Establir la utilitat d'un servei de gestió d'arxius web.
20. Descriure diferents aplicacions de gestió d'arxius web.
21. Instal·lar i adaptar una eina de gestió d'arxius web.
22. Creat i classificar comptes d'usuari en funció dels seus permisos.
23. Gestionar arxius i directoris.
24. Utilitzar arxius d'informació addicional.
25. Aplicar criteris d'indexació sobre els arxius i directoris.
26. Comprovar la seguretat del gestor d'arxius.
27. Establit la utilitat de les aplicacions d'ofimàtica web.
28. Descriure diferents aplicacions d'ofimàtica web (processador de textos, full de càlcul, entre altres).
29. Instal·lar aplicacions d'ofimàtica web.
30. Gestionar els comptes d'usuari.
31. Aplicar criteris de seguretat en l'accés dels usuaris.
32. Reconèixer les prestacions específiques de cadascuna de les aplicacions instal·lades.
33. Utilitzar les aplicacions de forma col·laborativa.
34. Descriure diferents aplicacions web d'escriptori.
35. Instal·lar aplicacions per a proveir d'accés web al servei de correu electrònic.
36. Configurar les aplicacions per a integrar-les amb un servidor de correu.
37. Gestionar els comptes d'usuari.
38. Verificar l'accés al correu electrònic.
39. Instal·lar aplicacions de calendari web.
40. Reconèixer les prestacions específiques de les aplicacions instal·lades (cites, tasques, entre altres).

### 📄 exe_html5.js

```js
/**

* @preserve HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed

*/

;(function(window, document) {

/*jshint evil:true */

  /** version */

  var version = '3.6.2';

  /** Preset options */

  var options = window.html5 || {};

  /** Used to skip problem elements */

  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

  /** Not all elements can be cloned in IE **/

  var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

  /** Detect whether the browser supports default html5 styles */

  var supportsHtml5Styles;

  /** Name of the expando, to work with multiple documents or to re-shiv one document */

  var expando = '_html5shiv';

  /** The id for the the documents expando */

  var expanID = 0;

  /** Cached data for each document */

  var expandoData = {};

  /** Detect whether the browser supports unknown elements */

  var supportsUnknownElements;

  (function() {

    try {

        var a = document.createElement('a');

        a.innerHTML = '<xyz></xyz>';

        //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles

        supportsHtml5Styles = ('hidden' in a);

        supportsUnknownElements = a.childNodes.length == 1 || (function() {

          // assign a false positive if unable to shiv

          (document.createElement)('a');

          var frag = document.createDocumentFragment();

          return (

            typeof frag.cloneNode == 'undefined' ||

            typeof frag.createDocumentFragment == 'undefined' ||

            typeof frag.createElement == 'undefined'

          );

        }());

    } catch(e) {

      // assign a false positive if detection fails => unable to shiv

      supportsHtml5Styles = true;

      supportsUnknownElements = true;

    }

  }());

  /*--------------------------------------------------------------------------*/

  /**

   * Creates a style sheet with the given CSS text and adds it to the document.

   * @private

   * @param {Document} ownerDocument The document.

   * @param {String} cssText The CSS text.

   * @returns {StyleSheet} The style element.

   */

  function addStyleSheet(ownerDocument, cssText) {

    var p = ownerDocument.createElement('p'),

        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

    p.innerHTML = 'x<style>' + cssText + '</style>';

    return parent.insertBefore(p.lastChild, parent.firstChild);

  }

  /**

   * Returns the value of `html5.elements` as an array.

   * @private

   * @returns {Array} An array of shived element node names.

   */

  function getElements() {

    var elements = html5.elements;

    return typeof elements == 'string' ? elements.split(' ') : elements;

  }

    /**

   * Returns the data associated to the given document

   * @private

   * @param {Document} ownerDocument The document.

   * @returns {Object} An object of data.

   */

  function getExpandoData(ownerDocument) {

    var data = expandoData[ownerDocument[expando]];

    if (!data) {

        data = {};

        expanID++;

        ownerDocument[expando] = expanID;

        expandoData[expanID] = data;

    }

    return data;

  }

  /**

   * returns a shived element for the given nodeName and document

   * @memberOf html5

   * @param {String} nodeName name of the element

   * @param {Document} ownerDocument The context document.

   * @returns {Object} The shived element.

   */

  function createElement(nodeName, ownerDocument, data){

    if (!ownerDocument) {

        ownerDocument = document;

    }

    if(supportsUnknownElements){

        return ownerDocument.createElement(nodeName);

    }

    if (!data) {

        data = getExpandoData(ownerDocument);

    }

    var node;

    if (data.cache[nodeName]) {

        node = data.cache[nodeName].cloneNode();

    } else if (saveClones.test(nodeName)) {

        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();

    } else {

        node = data.createElem(nodeName);

    }

    // Avoid adding some elements to fragments in IE < 9 because

    // * Attributes like `name` or `type` cannot be set/changed once an element

    //   is inserted into a document/fragment

    // * Link elements with `src` attributes that are inaccessible, as with

    //   a 403 response, will cause the tab/window to crash

    // * Script elements appended to fragments will execute when their `src`

    //   or `text` property is set

    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;

  }

  /**

   * returns a shived DocumentFragment for the given document

   * @memberOf html5

   * @param {Document} ownerDocument The context document.

   * @returns {Object} The shived DocumentFragment.

   */

  function createDocumentFragment(ownerDocument, data){

    if (!ownerDocument) {

        ownerDocument = document;

    }

    if(supportsUnknownElements){

        return ownerDocument.createDocumentFragment();

    }

    data = data || getExpandoData(ownerDocument);

    var clone = data.frag.cloneNode(),

        i = 0,

        elems = getElements(),

        l = elems.length;

    for(;i<l;i++){

        clone.createElement(elems[i]);

    }

    return clone;

  }

  /**

   * Shivs the `createElement` and `createDocumentFragment` methods of the document.

   * @private

   * @param {Document|DocumentFragment} ownerDocument The document.

   * @param {Object} data of the document.

   */

  function shivMethods(ownerDocument, data) {

    if (!data.cache) {

        data.cache = {};

        data.createElem = ownerDocument.createElement;

        data.createFrag = ownerDocument.createDocumentFragment;

        data.frag = data.createFrag();

    }

    ownerDocument.createElement = function(nodeName) {

      //abort shiv

      if (!html5.shivMethods) {

          return data.createElem(nodeName);

      }

      return createElement(nodeName, ownerDocument, data);

    };

    ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +

      'var n=f.cloneNode(),c=n.createElement;' +

      'h.shivMethods&&(' +

        // unroll the `createElement` calls

        getElements().join().replace(/\w+/g, function(nodeName) {

          data.createElem(nodeName);

          data.frag.createElement(nodeName);

          return 'c("' + nodeName + '")';

        }) +

      ');return n}'

    )(html5, data.frag);

  }

  /*--------------------------------------------------------------------------*/

  /**

   * Shivs the given document.

   * @memberOf html5

   * @param {Document} ownerDocument The document to shiv.

   * @returns {Document} The shived document.

   */

  function shivDocument(ownerDocument) {

    if (!ownerDocument) {

        ownerDocument = document;

    }

    var data = getExpandoData(ownerDocument);

    if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {

      data.hasCSS = !!addStyleSheet(ownerDocument,

        // corrects block display not defined in IE6/7/8/9

        'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +

        // adds styling not present in IE6/7/8/9

        'mark{background:#FF0;color:#000}' +

        // hides non-rendered elements

        'template{display:none}'

      );

    }

    if (!supportsUnknownElements) {

      shivMethods(ownerDocument, data);

    }

    return ownerDocument;

  }

  /*--------------------------------------------------------------------------*/

  /**

   * The `html5` object is exposed so that more elements can be shived and

   * existing shiving can be detected on iframes.

   * @type Object

   * @example

   *

   * // options can be changed before the script is included

   * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };

   */

  var html5 = {

    /**

     * An array or space separated string of node names of the elements to shiv.

     * @memberOf html5

     * @type Array|String

     */

    'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

    /**

     * current version of html5shiv

     */

    'version': version,

    /**

     * A flag to indicate that the HTML5 style sheet should be inserted.

     * @memberOf html5

     * @type Boolean

     */

    'shivCSS': (options.shivCSS !== false),

    /**

     * Is equal to true if a browser supports creating unknown/HTML5 elements

     * @memberOf html5

     * @type boolean

     */

    'supportsUnknownElements': supportsUnknownElements,

    /**

     * A flag to indicate that the document's `createElement` and `createDocumentFragment`

     * methods should be overwritten.

     * @memberOf html5

     * @type Boolean

     */

    'shivMethods': (options.shivMethods !== false),

    /**

     * A string to describe the type of `html5` object ("default" or "default print").

     * @memberOf html5

     * @type String

     */

    'type': 'default',

    // shivs the document according to the specified `html5` object options

    'shivDocument': shivDocument,

    //creates a shived element

    createElement: createElement,

    //creates a shived documentFragment

    createDocumentFragment: createDocumentFragment

  };

  /*--------------------------------------------------------------------------*/

  // expose html5

  window.html5 = html5;

  // shiv the document

  shivDocument(document);

}(this, document));
```

### 📄 10_introducci.html

1.0.- Introducció

En l'enginyeria de programari s'anomena **aplicació web** a aquella eina que els usuaris poden utilitzar accedint a un servidor web a través d'Internet mitjançant un navegador. Les aplicacions web s'han popularitzat a causa de la facilitat d'accés que permeten, usant com a client el navegador web, amb independència del sistema operatiu utilitzat. A més, resulta molt interessant la facilitat per desplegar, actualitzar i mantenir aplicacions web sense necessitat de distribuir ni instal·lar programari en els equips dels usuaris potencials.

Les principals tecnologies sobre les que es basa la web són

- **HTTP** : El Protocol de Transferència d'Hipertext (HTTP) és el protocol usat en cada transacció de la World Wide Web.
- **HTML** : El Llenguatge de marques d'hipertext (HTML) fa referència a el llenguatge predominant en l'elaboració de pàgines web que s'utilitza per descriure i traduir l'estructura i informació en forma de text, així com per complementar el text amb objectes multimèdia.
- **URL** : Un Localitzador de Recursos Uniforme (URL) és una seqüència de caràcters que es fa servir per nomenar recursos a Internet per la seva localització o identificació.

Un URL combina en una direcció simple els q uatre elements bàsics d'informació necessaris per recuperar un recurs d'Internet

- El protocol que s'usa per comunicar
- El servidor amb el qual es comunica
- El port de xarxa al servidor per connectar
- La ruta a el recurs al servidor

Molts navegadors web no requereixen que l'usuari ingressi "http://" per dirigir-se a una pàgina web, ja que HTTP és el protocol més comú que s'usa en navegadors web. Igualment, atès que 80 és el port per omissió per a HTTP, no es sol especificar.
Exemple d'URL

**http://www.pelechano.com:80/smx/aw.php**

- Protocol = http
- Servidor = www.pelechano.com
- Port = 80
- Ruta = smx/aw.php

### 📄 11_funcionament_de_serveis_web.html

1.1.- Funcionament de serveis web

Una aplicació web està normalment estructurada en tres capes: el **navegador web** ofereix la primera capa, un **motor** capaç d'usar alguna tecnologia web dinàmica constitueix la capa intermèdia i finalment, una **base de dades** constitueix la tercera i última capa. El navegador web envia peticions a la capa intermèdia que ofereix una interfície d'usuari i serveis valent-se de consultes a la base de dades

Utilitzant el navegador web de l'equip del client, es realitza una petició a un servidor web demanant l'accés una pàgina concreta. El servidor web consulta l'URL i accedeix al recurs demandat, executant el possible codi dinàmic (PHP) i resolent les consultes pertinents a la base de dades per a conformar un fitxer de resposta que conté codi estàtic (HTML), paràmetres relatius a el disseny (CSS) i codi dinàmic que s'executa en el client (JavaScript) per oferir la resposta final en el navegador del client.

**Esquema de funcionament d'un servidor web**

🖼️ [Imatge / Esquema: Esquema de funcionament d'un servidor web]
Llenguatges que es fan servir

- El Llenguatge de marcatge d'hipertext ( **HTML** ), fa referència al llenguatge predominant en l'elaboració de pàgines web que s'utilitza per descriure i traduir l'estructura i informació en forma de text, així com per complementar el text amb objectes multimèdia.
- Els fulls d'estil en cascada ( **CSS** ) fan referència a un llenguatge usat per descriure la presentació, aspecte i format, d'un document escrit en llenguatge de marques. La seva aplicació més comuna és donar estil a pàgines webs HTML
- **JavaScript** és un llenguatge de programació interpretat que es s'utilitza principalment en el costat del client implementat com a part d'un navegador web permetent millores en la interfície d'usuari i pàgines web dinàmiques.
- **PHP** és un llenguatge de programació d'ús general utilitzat en el servidor i originalment dissenyat per al desenvolupament web de contingut dinàmic. El codi és interpretat per un servidor web amb un mòdul de processador de PHP que genera la pàgina web resultant.
- El llenguatge de consulta estructurat ( **SQL** ) és un llenguatge declaratiu d'accés a bases de dades relacionals que permet especificar diversos tipus d'operacions en elles. Una de les seves característiques és el maneig de l'àlgebra i de el càlcul relacional que permeten efectuar consultes amb el fi de recuperar informació d'interès de bases de dades.

### 📄 12_navegadors_web.html

1.2.- Navegadors web

Un **navegador web** (browser) és una aplicació que opera interpretant la informació d'arxius i llocs web perquè aquests puguin ser llegits, permetent la visualització de documents de text amb recursos multimèdia incrustats. El seguiment d'enllaços d'una pàgina a una altra es diu navegació i es realitza a través d'**hipervincles** que enllacen una porció de text o una imatge a un altre document normalment relacionat amb el text o la imatge.

La comunicació entre el servidor web i el navegador es realitza mitjançant el protocol HTTP, encara que la majoria dels browsers suporten altres protocols com FTP i HTTPS. La funció principal del navegador és descarregar documents HTML i mostrar-los en pantalla. Els primers navegadors web només suportaven una versió molt simple d'HTML. No obstant això, el ràpid desenvolupament dels navegadors web va conduir a el desenvolupament de dialectes no estàndards d'HTML i a problemes d'interoperabilitat a la web.

Un **motor de renderitzat** és un component de programari bàsic de tots els principals navegadors web. La seva funció principal és transformar els documents HTML i altres recursos d'una pàgina web en una representació visual interactiva al dispositiu de l'usuari. El motor de renderitzat pren contingut marcat (HTML) i informació de format (CSS) per mostrar el contingut ja formatat a la pantalla.

Els**principals navegadors** en funció de la quota de mercat són Google Chrome, Firefox, Microsoft Edge, Safari i Opera.

- Google Chrome és un navegador web desenvolupat per Google basat en codi obert amb el motor de renderitzat Blink que va sortir a la llum el 2008. Actualment el navegador està disponible per a la major part dels sistemes operatius d'escriptori i també està present en els sistemes operatius mòbils Android i iOS.
- Mozilla Firefox és un navegador web lliure i de codi obert desenvolupat per Microsoft Windows, Mac OS X i GNU / Linux coordinat per la Corporació Mozilla i la Fundació Mozilla.
- Microsoft Edge és un navegador web basat en Chromium i desenvolupat per Microsoft. Originalment construït amb els mateixos motors EdgeHTML i Chakra de Microsoft, el 2019 Edge va ser reconstruït com un navegador basat en Chromium, i es va llançar al gener de 2020
- Safari és un navegador web de codi tancat desenvolupat per Apple Inc. Està disponible per Mac OS X i iOS.
- Opera és un navegador web creat per l'empresa noruega Opera Software. Opera funciona en una gran varietat de sistemes operatius encara que la major quota de mercat prové del seu ús en dispositius mòbils.

**Ús dels navegadors web**
🖼️ [Imatge / Esquema: Ús dels navegadors web]

[https://gs.statcounter.com/](https://gs.statcounter.com/)
Primer navegador

El primer navegador va ser desenvolupat al CERN a finals de 1990 per Tim Berners-Lee davant la necessitat de distribuir i intercanviar informació sobre les seves investigacions d'una manera més efectiva. El seu grup va crear el Llenguatge HTML (HyperText Markup Language), el protocol HTTP (HyperText Transfer Protocol) i el sistema de localització d'objectes en la web URL (Uniform Resource Locator).

### 📄 131_llenguatge_de_marques_html.html

1.3.1.- Llenguatge de marques: HTML

El llenguatge de marcat d'hipertext (HTML), fa referència a el llenguatge predominant en l'elaboració de pàgines web que s'utilitza per descriure i traduir l'estructura i informació en forma de text, així com per complementar el text amb objectes multimèdia.

El codi HTML s'escriu en text pla a través d'un editor de text o en una eina específica, anomenada editor WYSIWYG, que permet anar veient el resultat formatat de el codi introduït. L'HTML s'escriu mitjançant etiquetes específiques delimitades pels símbols de major i menys (<,>) i que usen una sintaxi interna per especificar atributs addicionals de l'element. Hi etiquetes d'inserció en què apareix únicament l'etiqueta, i altres d'activació-desactivació que inclouen una etiqueta d'obertura i una de tancament.

Les pàgines HTML guarden una estructura bàsica normalitzada i solen guardar-se amb les extensions htm. o html. Disposem de tres etiquetes principals que conformen l'estructura bàsica d'una pàgina HTML

- L'etiqueta <html> defineix l'inici i fi de el document HTML.
- L'etiqueta <head> delimita l'àrea de capçalera de el document i sol contenir metadades informatius el propòsit és facilitar als motors de recerca la indexació de l'contingut.
- L'etiqueta <body> estableix l'àrea de contingut de el document i és la que es mostra en el navegador. Dins d'aquesta etiqueta sol col·locar tot el contingut principal que serà visualitzat al navegador per part dels usuaris.

Hi ha múltiples etiquetes que permeten definir diferents formats i estructures de continguts. Entre les més usuals trobem elements per definir: capçaleres, llistes, taules, enllaços, metainformació ...
HTML: Sintaxis i estructura

**<p align="center">Text a mostrar</p>**

- Delimitador etiqueta = < >
- Etiqueta = p
- Atribut = align
- Delimitador valor = " "
- Valor = center

**Estructura d'un document HTML**

```html
<!DOCTYPE html> <html lang="ca"> <head> <meta charset="UTF-8"> <title>La meva primera pàgina</title> </head> <body> <p>Hola!</p> </body> </html>
```

### 📄 132_fulls_destils_css.html

1.3.2.- Fulls d'estils: CSS

Els **fulls d'estil en cascada (CSS)** fan referència a un llenguatge usat per descriure la presentació, aspecte i format, d'un document escrit en llenguatge de marques. La seva aplicació més comú és donar estil a pàgines webs escrites en llenguatge HTML. L'**estàndard** actual es correspon amb el CSS3 i està dividit en diversos documents separats anomenats mòduls. Cada mòdul afegeix noves funcionalitats a les definides prèviament en l'estàndard CSS2 amb la intenció de mantenir la compatibilitat. Els treballs al CSS3 han anat apareixent progressivament i es troben en diferents estats de desenvolupament.

Per donar format a un document HTML mitjançant CSS podem procedir de diverses maneres

- **Mitjançant CSS introduït per l'autor de l'HTML:** És un mètode per inserir el llenguatge d'estil de pàgina directament dins d'una etiqueta HTML. No és una manera elegant perquè complica la separació de continguts i estils.
- **Un full d'estil intern:** Un full d'estil que està incrustada dins d'un document HTML, dins de l'element *<head>* , marcada per l'etiqueta *<style>* . D'aquesta manera s'obté el benefici de separar la informació de l'estil de l'HTML pròpiament dit encara que estigui en el mateix document.
- **Un full d'estil extern:** és un full d'estil que està emmagatzemada en un arxiu diferent a l'arxiu on s'emmagatzema el codi HTML. Aquesta és la manera de programar més potent, perquè separa completament les regles de format per a la pàgina HTML de l'estructura bàsica de la pàgina. Utilitzem per això l'etiqueta: *<link rel = "stylesheet" type = "text / css" href = "estil.css">*

La **sintaxi** del CSS és molt senzilla. Fes servir unes quantes paraules claus preses de l'anglès per especificar els noms dels seus selectors, propietats i atributs. Cada regla consisteix en un o més selectors i un bloc d'estils que s'aplicaran als elements de el document que compleixin amb el selector que els precedeix. Cada bloc d'estils es defineix entre claus, i està format per una o diverses declaracions d'estil amb el format: "propietat: valor;"
CSS: Sintaxi

**h1 {color: #FF0000;}**

- Selector = h1
- Separador de selector = { }
- Propietat = color
- Separador de propietat = : ;
- Valor = #FF0000

### 📄 133_llenguatge_scrit_de_navegador_javascript.html

1.3.3.- Llenguatge Scrit de navegador: Javascript

**JavaScript** és un llenguatge de programació interpretat que s'utilitza principalment en el costat del client implementat com a part d'un navegador web permetent millores en la interfície d'usuari i pàgines web dinàmiques.

L'ús més comú de JavaScript és escriure funcions incloses en pàgines HTML i que interactuen amb el Model d'Objectes de el Document de la pàgina. Alguns exemples senzills d'aquest ús són

- Carregar nou contingut per a la pàgina.
- Enviar dades al servidor a través d'AJAX sense necessitat de recarregar.
- Animació dels elements de pàgina.
- Incloure contingut interactiu i reproducció d'àudio i vídeo.
- Validació dels valors d'entrada d'un formulari web.

Atès que el codi JavaScript pot executar-se localment en el navegador de l'usuari, el navegador pot respondre a les accions de l'usuari amb rapidesa fent una aplicació més fluïda. D'altra banda, el codi JavaScript pot detectar accions dels usuaris que HTML per si sola no pot, com pulsacions de teclat. Les aplicacions web s'aprofiten d'això implementant la major part de la lògica de la interfície d'usuari en JavaScript i realitzant peticions a servidor mitjançant Ajax.

Per incloure codi JavaScript en un document HTML, el codi es tanca entre etiquetes <script> que es recomana ubicar dins de la capçalera de el document <head> . A més, com en el cas dels CSS, podem separar el codi i incloure-ho des d'un arxiu extern mitjançant l'etiqueta

*<Script type = "text / javascript" src = "codigo.js"> </ script>*
AJAX

AJAX (JavaScript asíncron i XML) és una tècnica de desenvolupament web per crear aplicacions interactives que s'executen en el client mentre es manté la comunicació asíncrona amb el servidor en segon pla. D'aquesta forma és possible realitzar canvis sobre les pàgines sense necessitat de recarregar-les, millorant la interactivitat, velocitat i usabilitat en les aplicacions.
[http://www.w3schools.com/ajax](http://www.w3schools.com/ajax)

### 📄 134_llenguatge_script_de_servidor_php.html

1.3.4.- Llenguatge Script de servidor: PHP

**PHP** és un llenguatge de programació d'ús general utilitzat en el servidor i originalment dissenyat per al desenvolupament web de contingut dinàmic. El codi és interpretat per un servidor web amb un mòdul de processador de PHP que genera la pàgina web resultant. L'intèrpret de PHP només executa el codi que es troba entre els seus delimitadors. Els delimitadors més comuns són *<?PHP* per obrir una secció PHP i *?>* per tancar-la. El propòsit d'aquests delimitadors és separar el codi PHP de la resta de codi, com ara l'HTML.

Pel que fa a les paraules clau, PHP comparteix amb la majoria d'altres llenguatges amb sintaxi C les condicions amb if, els bucles amb for i while i els retorns de funcions. Per exemple

*<?php echo "Hola Món"; ?>*

### 📄 13_llenguatges_especfics_de_disseny_web.html

1.3.- Llenguatges específics de disseny web

Per al desenvolupament d'aplicacions web, ens trobem amb diferents tipus de llenguatges de programació específics, i cada un d'ells està orientat a solucionar funcions precises dins de l'aplicació web. D'aquesta manera podem distingir els següents

- Llenguatge de marques → Estructura i continguts.
- Llenguatge script de navegador → Millora interfície d'usuari.
- Llenguatge script de servidor → Pàgines dinàmiques.
- Fulls d'estil → Presentació, aspecte i format.

### 📄 14_eines_de_disseny_web.html

1.4.- Eines de disseny web

Tot i que el disseny de pàgines web es pot realitzar amb un simple editor de text, és habitual trobar-nos amb aplicacions especialitzades WYSIWYG que faciliten l'ús d'etiquetes i permeten incrustar blocs de codi amb facilitat. Alguns dels més coneguts inclouen a Visual Studio Code, Sublime o Notepad++, encara que avui dia hi ha multitud de recursos en línia per realitzar tasques concretes de disseny web de forma gratuïta.

**Disseny i Maquetació CSS:** El procés de disseny consisteix a crear esbossos del web final mitjançant una eina gràfica, com Photoshop, GIMP o Inkscape. Després, a través de la maquetació, convertim els esbossos creats en la fase anterior en plantilles HTML amb el seu respectiu full d'estils i imatges usades.

### 📄 15_relaci_entre_pgines_web_i_bases_de_dades.html

1.5.- Relació entre pàgines web i bases de dades

La utilització de llenguatges de script de servidor per dotar de dinamisme a les pàgines web, sol venir acompanyada de l'ús de bases de dades. La informació s'emmagatzema en estructures especialitzades de Sistemes Gestors de Bases de Dades (SGBD), que reben peticions des del servidor web que alimentaran la construcció dinàmica d'una web.

Hi ha multitud de SGBD, encara que en entorns de desenvolupament d'aplicacions web podem destacar els següents: MySQL, PostgreSQL, SQLite, MariaDB, Oracle i Microsoft SQL Server. MySQL ha estat un gestor molt popular però davant la seva adquisició per part d'Oracle, són molts els usuaris que estan migrant al producte GPL derivat anomenat MariaDB.

### 📄 16_referncies.html

1.6.- Referències

Referències

- Consorci World Wide Web (W3C) - http://www.w3.org - [http://www.w3c.es](http://www.w3c.es)
- Internet Engineering Task Force (IETF) - [http://www.ietf.org/rfc.html](http://www.ietf.org/rfc.html)
- Request for Comments (RFC) - [http://www.rfc-es.org](http://www.rfc-es.org)
- CERN Organització Europea per la Investigació Nuclear- [http://home.web.cern.ch](http://home.web.cern.ch)
- Navegador web Firefox - [http://www.mozilla.org/es-ES/firefox](http://www.mozilla.org/es-ES/firefox)
- Navegador web Internet Explorer - [http://windows.microsoft.com/ie](http://windows.microsoft.com/ie)
- Navegador web Safari - [http://www.apple.com/es/safari](http://www.apple.com/es/safari)
- Navegador web Google Chrome - [http://www.google.com/chrome](http://www.google.com/chrome)
- Navegador web Opera - [http://www.opera.com](http://www.opera.com)
- Estàndar HTML 4.0.1 - [http://www.w3.org/TR/1999/REC-html401-19991224](http://www.w3.org/TR/1999/REC-html401-19991224)
- Estàndar HTML 5.1 - [http://www.w3.org/TR/html51](http://www.w3.org/TR/html51)
- Tutorial HTML en W3School - [http://www.w3schools.com/html](http://www.w3schools.com/html)
- Tutorial HTML5 en W3School - [http://www.w3schools.com/html/html5_intro.asp](http://www.w3schools.com/html/html5_intro.asp)
- Tutorial CSS en W3School - [http://www.w3schools.com/css](http://www.w3schools.com/css)
- Tutorial CSS3 en W3School - [http://www.w3schools.com/css3](http://www.w3schools.com/css3)
- Acid Tests - [http://www.acidtests.org](http://www.acidtests.org)
- Acid Test 2 - [http://acid2.acidtests.org](http://acid2.acidtests.org)
- Tutorial JavaScript en W3School - [http://www.w3schools.com/js](http://www.w3schools.com/js)
- Tutorial PHP en W3School - [http://www.w3schools.com/php](http://www.w3schools.com/php)
- Tutorial AJAX en W3School - [http://www.w3schools.com/ajax](http://www.w3schools.com/ajax)
- Llenguatge de script de servidor PHP - [http://php.net](http://php.net)
- Editor de pàgines web Kompozer - [http://www.kompozer.net](http://www.kompozer.net)
- Gestor de MySQL phpMyAdmin - [http://www.phpmyadmin.net](http://www.phpmyadmin.net)

### 📄 20_introducci.html

2.0.- Introducció

L'evolució de les tecnologies web i els canvis d'enfocament en el desenvolupament ha anat establint una sèrie d'etapes o paradigmes habitualment referits com a web X.0 que incorporen diferents característiques.

- **Web 1.0:** És una web simplement de lectura amb l'únic objectiu d'informar. Les pàgines web són estàtiques i no s'actualitzaven de forma periòdica. Els únics possibles productors eren els editors web.
- **Web 2.0:** És un web de lectura i escriptura, on la informació s'actualitza de forma periòdica. Presenta pàgines web dinàmica i ha un intercanvi de coneixements. L'usuari és el centre, aquest interactua amb la informació i la comparteix.
- **Web 3.0:** S'expandeix a nous dispositius i plataformes. Permet tenir una millor personalització ja que els usuaris són els que decideixen quina informació és important i aconsegueix que les cerques siguin més precises i intel·ligents.

La Web 1.0 és un sistema basat en hipertext que permet classificar informació de diversos tipus. És una web estàtica simplement de lectura caracteritzat per ser un mitjà simplement per informar que no permet interacció ni col·laboració.

La Web 2.0 comprèn el canvi de paradigma en el desenvolupament d'aplicacions web que ha permès la transició d'aplicacions tradicionals cap a altres que funcionen a través de l'web i estan enfocades a l'usuari final, oferint serveis de col·laboració i interacció. Però per entendre d'on ve el terme de Web 2.0 hem de remuntar-nos a el moment en què Tim O'Reilly va utilitzar aquest terme en 2004 en una conferència en la qual es parlava del renaixement i evolució de la web. Els principis que es definien per a les aplicacions web 2.0

1- Utilitzar la web com a plataforma de desenvolupament
2- Afavorir i aprofitar al web la Intel·ligència Col·lectiva
3- Incorporar la gestió de Bases de Dades com a competència bàsica
4- Acabar amb el cicle d'actualitzacions de programari
5- Aplicar models de programació lleugera amb plantilles senzilles
6- Desenvolupar programari multiplataforma
7- Incorporar les experiències enriquidores de l'usuari

Web 3.0 és una expressió que va aparèixer per primera vegada el 2006 en un article de Jeffrey Zeldman. S'utilitza per descriure l'evolució de l'ús i la interacció de les persones a Internet mitjançant la creació de continguts accessibles per múltiples aplicacions i donant més importància a les tecnologies d'intel·ligència artificial, la web semàntica, la web Geoespacial o la Web 3D. Permet tenir una millor segmentació i personalització.

**De la web 1.0 a la web 3.0**
🖼️ [Imatge / Esquema: De la web 1.0 a la web 3.0]

Gary Hayes 2006

### 📄 21__html_dinmic_ajax.html

2.1 - HTML Dinàmic: AJAX

L'HTML Dinàmic o DHTML (Dynamic HTML) designa el conjunt de tècniques que permeten crear llocs web interactius utilitzant una combinació de llenguatge HTML estàtic, un llenguatge interpretat en el costat del client (JavaScript), el llenguatge de fulls d'estil en cascada (CSS ) i la jerarquia d'objectes d'un Document Object Model (DOM).

Les principal tecnologia que incorpora la web 2.0 i que permet la creació de DHTML en les aplicacions web és AJAX (JavaScript asíncron i XML). És una tècnica de desenvolupament web per crear aplicacions interactives que s'executen en el client mentre es manté la comunicació asíncrona amb el servidor en segon pla. D'aquesta forma és possible realitzar canvis sobre les pàgines sense necessitat de recarregar-les, millorant la interactivitat, velocitat i usabilitat en les aplicacions.

És una tècnica vàlida per a múltiples plataformes i utilitzable en molts sistemes operatius i navegadors ja que està basat en estàndards oberts com JavaScript i Document Object Model (DOM).

Ajax és una combinació de quatre tecnologies ja existents

- HTML i CSS per al disseny que acompanya la informació.
- DOM (Document Object Model) accedit amb un llenguatge de scripting de client per mostrar i interactuar dinàmicament amb la informació presentada.
- XMLHttpRequest per intercanviar dades asíncrons amb el lloc web.
- XML per a la transferència de dades sol·licitades a servidor.
Components principals d'AJAX

- El Document Object Model o DOM (Modelo de Objetos del Documento) es una interfaz de programación de aplicaciones. A través del DOM, los programas pueden acceder y modificar el contenido, estructura y estilo de los documentos HTML y XML. El responsable del DOM es el W3C.
  - [http://www.w3.org/DOM](http://www.w3.org/DOM)
  - [http://html.conclase.net/w3c/dom1-es/introduction.html](http://html.conclase.net/w3c/dom1-es/introduction.html)
- XMLHttpRequest es una interfaz empleada para realizar peticiones HTTP y HTTPS a servidores Web. Se encarga de proporcionar contenido dinámico en páginas web mediante tecnologías como por ejemplo AJAX.
- XML (eXtensible Markup Language) es un lenguaje de marcas desarrollado por W3C utilizado para almacenar datos en forma legible y para facilitar el intercambio de información estructurada entre diferentes plataformas.

### 📄 221__marcadors_socials.html

2.2.1 - Marcadors Socials

Els marcadors socials són un tipus d'aplicació web que permeten emmagatzemar, classificar i compartir enllaços a Internet o en una Intranet. En un sistema de marcadors socials els usuaris guarden una llista de recursos d'Internet que consideren útils en un servidor compartit. Aquestes llistes poden ser accessibles públicament o de forma privada, de manera que altres persones amb interessos similars poden veure els enllaços per categories, etiquetes o a l'atzar. També categoritzen els recursos amb "etiquetes" que són paraules clau descriptives de el recurs. La majoria dels serveis de marcadors socials permeten que els usuaris busquin marcadors associats a determinades etiquetes i classifiquin en un rànquing els recursos segons el nombre d'usuaris que els han marcat. Les millores en el servei han aconseguit incloure noves funcionalitats com vots, comentaris, importar o exportar, afegir notes, enviar enllaços per correu, notificacions automàtiques, fonts web, crear grups i xarxes socials.

- **Delicious** era un servei de gestió de marcadors socials en web. Permetia afegir els marcadors que clàssicament es guardaven en els navegadors i categoritzar-los amb un sistema d'etiquetatge denominat folcsonomies (tags). No només es podia emmagatzemar llocs webs, sinó que també compartir-les amb altres usuaris i determinar quants tenien un determinat enllaç guardat en els seus marcadors.
- **SemanticScuttle** és una aplicació de codi obert orientada a la gestió de marcadors socials fonamentada amb l'ús d'etiquetes i descripcions estructurades. Es basa en un projecte anterior anomenat Scuttle que era un clon de codi obert de Delicious. SemanticScuttle és una aplicació web programada amb PHP amb llicència GNU General Public License (GPL) i que va alliberar la versió 0.98.3 el 9 d'agost del 2011.
Folcsonomia

Folcsonomia és una indexació social, la classificació col·laborativa per mitjà d'etiquetes simples en un espai de noms pla, sense jerarquies ni relacions de parentiu predeterminades. Es tracta d'una pràctica que es produeix en entorns de programari social els millors exponents són els llocs compartits com Delicious (enllaços favorits).

### 📄 222__blogs.html

2.2.2 - Blogs

Un bloc és un espai web personal en el qual els seus autors poden escriure cronològicament articles o notícies amb continguts multimèdia, però a més és un espai col·laboratiu on els lectors també poden escriure els seus comentaris a cada un dels articles publicats. Com a serveis característics per a la creació de blocs destaquen Wordpress.com i Blogger.com

- **Blogger** és un servei creat per Pyra Labs i adquirit per Google l'any 2003, que permet crear i publicar una bitàcola en línia. El principal avantatge per a l'usuari és que per publicar continguts no ha d'escriure cap codi o instal·lar programes de servidor o de scripting. Els blocs allotjats a Blogger generalment estan allotjats en els servidors de Google dins del domini blogspot.com
- **WordPress** és un sistema de gestió de continguts enfocat a la creació de blocs web. Desenvolupat en PHP i MySQL, sota llicència GPL i codi modificable, té com a fundador a Matt Mullenweg. Les causes del seu enorme creixement són, entre altres, la seva llicència, la seva facilitat d'ús i les seves característiques com a gestor de continguts.
- **WordPress.com** és una plataforma per a la creació de blocs que utilitza WordPress, el sistema de gestió de continguts de programari lliure. És propietat d'Automattic. Proporciona allotjament de blocs gratuït per a usuaris registrats i es nodreix financerament a través de millores de pagament, els serveis addicionals i la publicitat.

### 📄 223__frums.html

2.2.3 - Fòrums

Un Fòrum a Internet és una aplicació web que dóna suport a discussions o opinions en línia, permetent als usuaris poder expressar les seves idees o comentaris respecte al tema tractat. Són els descendents moderns dels sistemes de notícies BBS (Bulletin Board System) i Usenet, molt populars en els anys 1980 i 1990. Un fòrum té una estructura ordenada en arbre. Les categories són contenidors de fòrums. Els fòrums, al seu torn, tenen dins temes que inclouen missatges dels usuaris.

La diferència entre aquesta eina de comunicació i la missatgeria instantània és que en els fòrums no hi ha un "diàleg" en temps real, sinó només es publica una opinió que serà llegida més tard per algú qui pot comentar o no.

- **phpBB** és un sistema de fòrums gratuït basat en un conjunt de paquets de codi programats en el popular llenguatge de programació web PHP i llançat sota la Llicència Pública General de GNU, la intenció és la de proporcionar fàcilment, i amb àmplia possibilitat de personalització, una eina per crear comunitats. El seu nom és per l'abreujament de PHP Bulletin Board.
Termes usats en fòrums

- Thread: tema, argument, fil
- Post: missatge d'un tema
- Fòrum: fòrum
- Spam: correu brossa
- Trolls: usuaris l'únic interès és molestar i interrompre el correcte exercici de fòrum
BBS

Bulletin Board System o BBS és un programari per a xarxes d'ordinadors que permet als usuaris connectar-se a el sistema i utilitzant un programa terminal realitzar funcions com ara descarregar programari i dades, llegir notícies, intercanviar missatges amb altres usuaris, gaudir de jocs en línia, llegir els butlletins, etc. Històricament es considera que el primer programari de BBS va ser creat per Ward Christensen en 1978.

### 📄 224__wikis.html

2.2.4 - Wikis

Una wiki és un espai web corporatiu, organitzat mitjançant una estructura hipertextual de pàgines on diverses persones elaboren continguts de manera asíncrona. El seu nom que prové de l'llenguatge hawaià vol dir "ràpid" i la primera wiki va ser creada per Ward Cunnigham el 1995. Actualment l'exemple més important d'aquest tipus de projectes és l'enciclopèdia gratuïta Viquipèdia

Els principals avantatges que obtenim amb ús d'una wiki són: Permeten el treball col·laboratiu, augmenta la participació i motivació dels usuaris, permet un control de versions, és útil per facilitar l'intercanvi d'idees, evita excessives reunions de treball i permet un treball asíncron. L'edició de continguts és senzilla, només cal prémer el botó "edita" per accedir als continguts i modificar-los. Solen mantenir un arxiu històric de les versions anteriors i faciliten la realització de còpies de seguretat dels continguts.

- **Wikispaces** és un lloc per allotjar gratuïtament wikis. Els usuaris poden crear les seves pròpies wikis fàcilment. Els wikis gratuïts estan finançats a través de la inserció de discrets anuncis de text. Hi wikis privats amb funcions avançades per una quota anual disponibles per a empreses, organitzacions no lucratives i entitats educatives.
- **MediaWiki** és un programari lliure per a wikis programat en el llenguatge PHP. És el programari usat per Wikipedia i altres projectes de la Fundació Wikimedia (Wikcionario, Wikilibros, etc.). Ha tingut una gran expansió des de l'any 2005, existint un gran nombre de wikis basats en aquest programari que no mantenen relació amb aquesta fundació, encara que sí comparteixen la idea de la generació de continguts de manera col·laborativa. Es troba sota la llicència de programari GPL. Mitjana Wiki pot ser instal·lat en els servidors web Apache i Internet Information Services i pot usar com a motor de base de dades MySQL o PostgreSQL.
Wikipedia

Wikipedia és una enciclopèdia lliure editada col·laborativament. Pertany a la Fundació Wikimedia. Els seus més de 37 milions d'articles han estat redactats conjuntament per voluntaris de tot el món. Iniciada el gener de 2001 per Jimmy Wales i Larry Sanger és la major i més popular obra de consulta a Internet.

[http://es.wikipedia.org](http://es.wikipedia.org)

### 📄 225__ferramentes_multimdia_online.html

2.2.5 - Ferramentes Multimèdia Online

Hi ha multitud d'eines i entorns que ens permeten crear, emmagatzemar recursos o continguts a Internet, compartir-los i visualitzar-quan ens convingui. Podem esmentar els següents tipus d'aplicacions multimèdia representatius, segons el contingut que alberguen o l'ús que se'ls dóna

- **Documents** : Eines a les quals podem pujar els nostres documents, compartir-los i modificar-los. Exemples: Google Drive i Office Web Apps.
- **Videos** : Plataformes que contenen milers de vídeos pujats i compartits pels usuaris. Exemples: Youtube, Vimeo, Dailymotion.
- **Fotos** : Permeten organitzar les fotos amb etiquetes, compartir-les i publicar-les. Exemples: Picassa, Flickr.
- **Portals d'àudio i Podcasting** : El podcasting consisteix en la distribució de fitxers multimèdia molt similars als programes de ràdio que aborden diversos temes. Exemples: Ivox, Itunes.
- **Agregadors de notícies:** Notícies de qualsevol mitjà són agregades i votades pels usuaris. Exemples: Digg, Meneame.
- **Emmagatzematge en línia** : Gestiona els teus documents en un disc dur virtual emmagatzemat en línia. Exemples: Dropbox, Google Drive, SkyDrive.
- **Presentacions** : Creació de presentacions en línia. Exemples: Prezi, Slideshare.

### 📄 226__xarxes_socials.html

2.2.6 - Xarxes Socials

Un servei de xarxa social és un mitjà de comunicació que se centra en trobar gent per relacionar-se en línia. Estan formades per persones que comparteixen alguna relació, principalment d'amistat, mantenen interessos i activitats en comú, o estan interessats en explorar els interessos i les activitats d'altres. En general, aquests serveis de xarxes socials permeten als usuaris crear un perfil per a ells mateixos que queda a disposició de tots els usuaris de la web per comunicar-se. Les xarxes socials en general tenen controls de privacitat que permeten a l'usuari triar qui pot veure el seu perfil o entrar en contacte amb ells, entre d'altres funcions.

- **Facebook** és una eina social que posa en contacte a la gent amb els seus amics i amb altres persones que treballen, estudien i viuen al seu entorn. La principal utilitat d'aquesta pàgina és la de compartir recursos, impressions i informació amb gent que ja coneixes (amics o familiars). Encara que també es pot utilitzar per a conèixer gent nova o crear un espai on mantenir una relació propera amb els clients del teu negoci.
- **Twitter** és un servei de microblogging que permet enviar missatges de text pla de curta longitud que es mostren a la pàgina principal de l'usuari. Permet subscriure als tuits d'altres usuaris i, per defecte, els missatges són públics.

### 📄 227__xarxes_socials_professionals.html

2.2.7 - Xarxes Socials Professionals

Actualment internet és l'eina més usada per buscar informació tant de productes i serveis com de persones i professionals. Per això resulta fonamental comptar amb un perfil professional en línia ben gestionat a les xarxes socials professionals més importants del nostre entorn. Mitjançant aquest perfil podem controlar la informació que donarem a conèixer sobre nosaltres podent focalitzar l'atenció sobre les nostres fortaleses i aptituds professionals. Les xarxes socials professionals constitueixen una eina fonamental en la creació d'una identitat digital enfocada a l'àmbit professional a Internet, i així mateix, faciliten la gestió d'una xarxa de contactes professionals que ens permeti accedir a un sector professional determinat.

- **Linkedin** és una xarxa social orientada a l'entorn professional fundada el desembre de 2002. Compta amb una interfície web disponible en sis idiomes: anglès, espanyol, alemany, francès, italià i portuguès Els selectors de personal fan servir cada vegada més LinkedIn per trobar candidats.
- **Xing** es va fundar al juny de 2003 a Alemanya sota el nom de OpenBC (Open Business Club) i comptava, al setembre de 2010, amb més de 10 milions d'usuaris a tot el món, dels quals 4,2 milions són de parla alemanya i prop d'1,5 milions d'usuaris registrats a Espanya. La Interfície gràfica d'usuari és multilingüe i considera opcionalment només usuaris en la funcionalitat de recerca que parlen la mateixa llengua. A part de la gestió de contactes per la seva base de dades, Xing ofereix també un calendari públic d'esdeveniments, que es presenten a l'usuari per ordre temàtic o geogràfic
Identitat Digital

La identitat digital pot ser definida com el conjunt de la informació sobre un individu o una organització exposada a Internet que conforma una descripció d'aquesta persona en el pla digital.

- Dades personals
- Imatges i fotografies
- Registres, notícies i comentaris

La reputació online és l'opinió o consideració social que altres usuaris tenen de la vivència online d'una persona o d'una organització.

[http://www.inteco.es/guias/Guia_Identidad_Reputacion_usuarios](http://www.inteco.es/guias/Guia_Identidad_Reputacion_usuarios)

### 📄 22__tipus_daplicacions_web.html

2.2 - Tipus d'aplicacions web

Encara que hi ha infinitat d'aplicacions web amb objectius i funcionalitats diverses, podem distingir quatre tipus principals d'aplicacions web 2.0

- **Xarxes Socials:** Les aplicacions de Xarxes socials posen en contacte persones individuals en base a d'alguna relació d'interès comú que pot ser d'amistat, econòmica, amorosa, laboral, etc. Iinclouen eines per afavorir la relació i el coneixement de les persones, principalment a través de la creació de continguts de forma col·laborativa.
- **Generació i publicació de continguts:** Aquest grup d'aplicacions estan formades per blocs i wikis. Aquests dos sistemes de generació i publicació de continguts permeten incorporar la resta d'eines que trobem a la web 2.0, de manera que aquests dos sistemes tenen una situació especialment rellevant a l'convertir-se en lloc aglutinador de la feina i la col·laboració.
- **Eines per a la generació de continguts** : Aquest grup d'aplicacions està format per una enorme quantitat de programes i utilitats que permeten als usuaris crear i compartir informació. Representen la major part de les aplicacions 2.0 i inclouen utilitats per a crear i gestionar fotos, vídeos, documents, mapes, presentacions, calendaris, etc.
- **Recuperació de la informació:** Són els sistemes que permeten obtenir la informació d'una manera eficient i automàtica o semiautomàtica, tenint en compte el medi en què ens movem.
Mapa Visual de la Web 2.0

Podem trobar un Mapa Visual en el qual es representen de forma visual els principals conceptes que habitualment es relacionen amb la Web 2.0, juntament amb una breu explicació i exemples de serveis d'internet usats habitualment.

[http://www.internality.com/web20](http://www.internality.com/web20)
Netvibes

Netvibes és un servei web que actua a manera d'escriptori virtual personalitzat. Visualment està organitzada en pestanyes, on cadascuna és en si un agregador de diversos mòduls i ginys prèviament definits per l'usuari. Hi ha mòduls que permeten desplegar el contingut generat per altres pàgines que funcionen com a fonts web de RSS / Atom com per exemple, els blocs.

[http://www.netvibes.com](http://www.netvibes.com)
RSS

RSS (Really Simple Syndication) és un format XML per indicar o compartir contingut al web. S'utilitza per difondre informació actualitzada freqüentment a usuaris que s'han subscrit a la font de continguts.

[http://www.rssboard.org/rss-specification](http://www.rssboard.org/rss-specification)

### 📄 23__referncies.html

2.3 - Referències

Referències

- Document Object Model - [http://www.w3.org/DOM](http://www.w3.org/DOM)
- Introducció a DOM - [http://html.conclase.net/w3c/dom1-es/introduction.html](http://html.conclase.net/w3c/dom1-es/introduction.html)
- Mapa Visual Web 2.0 - [http://www.internality.com/web20](http://www.internality.com/web20)
- Really Simple Syndication (RSS) - [http://www.rssboard.org/rss-specification](http://www.rssboard.org/rss-specification)
- Escriptori virtual Netvibes - [http://www.netvibes.com](http://www.netvibes.com)
- [https://delicious.com](https://delicious.com) Semantic Scuttle - [http://semanticscuttle.sourceforge.net](http://semanticscuttle.sourceforge.net)
- Blogger - [http://www.blogger.com](http://www.blogger.com)
- CMS Wordpress - [http://wordpress.org](http://wordpress.org)
- Plataforma Wordpress.com - [http://wordpress.com](http://wordpress.com)
- Gestor de fòrums phpBB - [https://www.phpbb.com](https://www.phpbb.com)
- Wikispaces - [http://www.wikispaces.com](http://www.wikispaces.com)
- mediaWiki - [http://www.mediawiki.org/wiki/MediaWiki](http://www.mediawiki.org/wiki/MediaWiki)
- Wikipedia - [http://es.wikipedia.org](http://es.wikipedia.org)
- Documents - [http://office.microsoft.com/es-es/web-apps](http://office.microsoft.com/es-es/web-apps) - [http://docs.google.com](http://docs.google.com)
- Vídeos - [http://www.youtube.com](http://www.youtube.com) - [https://vimeo.com](https://vimeo.com) - [http://www.dailymotion.com/es](http://www.dailymotion.com/es)
- Fotos - [http://picasaweb.google.com](http://picasaweb.google.com) - [http://www.flickr.com](http://www.flickr.com)
- Podcasting - [http://www.ivoox.com](http://www.ivoox.com) - [http://www.apple.com/es/itunes](http://www.apple.com/es/itunes)
- Agregadors de Notícies - [http://digg.com](http://digg.com) - [http://www.meneame.net](http://www.meneame.net)
- Emmagatzematge Online - [https://drive.google.com](https://drive.google.com) - [https://www.dropbox.com](https://www.dropbox.com)
- Presentacions - [http://prezi.com](http://prezi.com) - [http://es.slideshare.net](http://es.slideshare.net)
- Xarxes socials - [http://www.facebook.com](http://www.facebook.com) - [https://twitter.com](https://twitter.com) - [http://qzone.qq.com](http://qzone.qq.com) - [http://vk.com/](http://vk.com/)
- Xarxes socials professionals - [http://es.linkedin.com](http://es.linkedin.com) - [http://www.xing.com](http://www.xing.com)
- Identitat digital - [http://www.inteco.es/guias/Guia_Identidad_Reputacion_usuarios](http://www.inteco.es/guias/Guia_Identidad_Reputacion_usuarios)

### 📄 30__introducci.html

3.0 - Introducció

S'anomena aplicació web a aquelles aplicacions que els usuaris poden utilitzar accedint a un servidor web a través d'Internet o d'una intranet mitjançant un navegador. En canvi, les aplicacions web d'escriptori són aplicacions convencionals pròpies de cada sistema operatiu que per desenvolupar la seva funció accedeixen a recursos web a través de diferents protocols. Les principals aplicacions web d'escriptori són els clients de correu electrònic, que solen integrar gestió de calendari, tasques i llista de contactes, els clients de FTP i els diversos gadgets d'escriptori

### 📄 31__client_de_correu_electrnic.html

3.1 - Client de Correu Electrònic

Un client de correu electrònic és un programa informàtic utilitzat per accedir i gestionar el correu electrònic d'un usuari. Un client de correu electrònic només s'activa quan un usuari l'executa, i llavors es comunica amb un servidor remot per rebre o enviar missatges de correu electrònic.

Els correus electrònics s'emmagatzemen a la bústia de l'usuari al servidor remot fins que el client de correu electrònic de l'usuari sol·licita que es descarreguin a l'ordinador de l'usuari. A més, en el client de correu electrònic podem configurar diverses bústies a el mateix temps i per sol·licitar la descàrrega de missatges de correu electrònic de forma automàtica a intervals preestablerts.

Podem **accedir a la bústia de correu** de dues maneres diferents. Mitjançant el protocol POP (Post Office Protocol) podem descarregar els missatges d'un en un i només els elimina del servidor un cop que s'han guardat amb èxit en l'emmagatzematge local. D'altra banda, mitjançant el protocol IMAP (Internet Message Access Protocol) podem mantenir els missatges al servidor i gestionar en línia.

**Diferències bàsiques POP vs IMAP**

🖼️ [Imatge / Esquema: Diferències bàsiques POP vs IMAP]
Per **crear un missatge**, els clients de correu electrònic solen contenir interfícies capaços de mostrar i editar text. Els clients de correu electrònic utilitzen un format regulat en el RFC-5322 per a les capçaleres i cos, i MIME (Multipurpose Internet Mail Extensions) per al contingut no textual i arxius adjunts. En les capçaleres s'inclouen els camps que es refereixen a l'destinatari: Per, CC i CCO. Les capçaleres que es refereixen a l'autor de l'missatge són: De i Respondre a. A més hi ha un camp Assumpte en què es detalla breument el contingut de el cos de l'missatge.

- Al camp A hem d'indicar a qui va dirigit el missatge, pot ser una única direcció o poden ser diverses separades pel signe punt i coma, fins i tot pot ser una llista de distribució. Cal indicar que aquest camp és obligatori, com a mínim el missatge ha de tenir una adreça destí.
- El camp Assumpte és un camp opcional que serveix per a indicar el motiu de l'correu, és a dir, podem indicar un breu descripció del tema de l'missatge.
- CC i CCO serveixen per enviar el mateix missatge a més d'una adreça de correu, però hi ha una diferència entre les dues, mentre que amb CC (còpia de carbó) a l'enviar el missatge a diversos receptors, el receptor veu les adreces dels altres a part de la seva pròpia, amb CCO (còpia de carbó oculta) no passa això, les adreces que no són la pròpia de l'receptor romanen Ocultes.
Quan un usuari vol **enviar un correu electrònic**, el client de correu electrònic utilitzarà el protocol SMTP (Simple Mail Transfer Protocol) que contactarà amb el servidor remot corresponent i deixarà el missatge a la bústia dels destinataris adequats

**Funcionament d'enviament amb POP i SMTP**

🖼️ [Imatge / Esquema: Funcionament d'enviament amb POP i SMTP]
Per a la correcta **configuració de client** es requereix el nom o l'adreça IP de servidor de correu sortint preferit, el servidor de correu entrant i el protocol utilitzat, els números de port dels protocols i, el nom d'usuari i contrasenya per a l'autenticació.

A més dels clients de correu electrònic, també hi ha aplicacions de correu electrònic basades en la web, anomenades webmail. Inclouen la capacitat d'enviar i rebre correu electrònic mitjançant un navegador web eliminant així la necessitat d'un client de correu electrònic. Les principals limitacions de webmail són que les interaccions de l'usuari estan subjectes a sistema operatiu de la pàgina web i la incapacitat general per descarregar missatges de correu electrònic o treballar sobre els missatges fora de línia.
MIME

Multipurpose Internet Mail Extensions (MIME) són una sèrie d'especificacions dirigides a l'intercanvi a través d'Internet de tot tipus d'arxius de forma transparent per a l'usuari.

- Text en conjunts de caràcters diferents d'US-ASCII
- Adjunts que no són de tipus text
- Cossos de missatges amb múltiples parts (multi-part)
- Informació de capçaleres amb conjunts de caràcters diferents de ASCII

### 📄 32__calendari_web.html

3.2 - Calendari Web

Normalment, els clients de correu incorporen funcions addicionals que permeten l'ús de calendaris web, gestió de contactes i eines per al manteniment d'esdeveniments i tasques pendents. D'aquesta manera, convertim el client de correu en un gestor complet de l'activitat personal i professional. A l'integrar-se en entorns web, mitjançant l'ús de l'estàndard iCalendar, els calendaris compartits poden ser accessibles a través d'un navegador en qualsevol lloc i són fàcilment integrables amb dispositius mòbils per permetre una gestió eficaç de contactes, esdeveniments, recordatoris, tasques pendents i compartició d'agendes en empreses o corporacions.
iCalendar

iCalendar és un estàndard (RFC 5546) per a l'intercanvi d'informació de calendaris. Permet als usuaris convidar a reunions o assignar tasques a altres usuaris a través de l'correu electrònic. A més, el destinatari de l'missatge en format iCalendar és capaç de respondre fàcilment acceptant la invitació, o proposant una altra data i hora per a la mateixa. D'aquesta manera, la gestió d'agendes compartides és més senzilla i àgil.

### 📄 33__client_ftp.html

3.3 - Client FTP

Un dels requeriments essencials en l'administració de qualsevol aplicació web és comunicar-nos amb el servidor remot que allotja els fitxers. Per aconseguir una gestió eficaç dels mateixos, fem servir habitualment una aplicació d'escriptori anomenada **client FTP**. Aquest programa s'encarrega d'establir una connexió mitjançant el protocol FTP amb el servidor i permet la gestió i transferència de fitxers i carpetes entre l'ordinador local i el servidor remot.

**Diagrama d'un servei FTP**

🖼️ [Imatge / Esquema: Diagrama d'un servei FTP]
Al diagrama, l'intèrpret de protocol (IP) de usuari inicia la connexió de control al port 21. Les ordres FTP estàndard les genera l'IP d'usuari i es transmeten a l'procés servidor a través de la connexió de control. Les respostes estàndard s'envien des de la IP de servidor la IP d'usuari per a la connexió de control com a resposta a les ordres.

Aquestes ordres FTP especifiquen paràmetres per a la connexió de dades (port de dades, mode de transferència, tipus de representació i estructura) i la naturalesa de l'operació sobre el sistema d'arxius (emmagatzemar, recuperar, afegir, esborrar, etc.). El procés de transferència de dades (DTP) d'usuari o un altre procés en el seu lloc, ha d'esperar que el servidor iniciï la connexió a port de dades especificat (port 20 en manera activa o estàndard) i transferir les dades en funció dels paràmetres que s'hagin especificat.

Veiem també en el diagrama que la comunicació entre client i servidor és independent de sistema d'arxius utilitzat en cada ordinador, de manera que no importa que els seus sistemes operatius siguin diferents, perquè les entitats que es comuniquen entre si són els PI i els DTP, que fan servir el mateix protocol estandarditzat: el FTP.
Les principals utilitats que ofereix un client d'FTP a l'usuari són

- Administrador de llocs: permet a un usuari crear una llista de llocs FTP amb les seves dades de connexió, com el número de port a usar, o si s'utilitza inici de sessió normal o anònima. Per a l'inici normal, es guarda l'usuari i, opcionalment, la contrasenya.
- Registre de missatges: mostra en forma de consola les comandes enviades pel client de FTP i les respostes del servidor remot.
- Vista d'arxiu i carpeta: proporciona una interfície gràfica per FTP. Els usuaris poden navegar per les carpetes, veure i alterar els seus continguts tant en la màquina local com en la remota, utilitzant una interfície de tipus arbre d'exploració. Els usuaris poden arrossegar i deixar anar arxius entre els ordinadors local i remot.
- Cua de transferència: mostra en temps real l'estat de cada transferència activa o en cua.
Protocol FTP

El protocol FTP (File Transfer Protocol) és un protocol de xarxa per a la transferència d'arxius entre sistemes connectats a Internet basat en l'arquitectura client-servidor. Independentment de el sistema operatiu utilitzat en cada equip, podem connectar el client a un servidor per descarregar arxius o enviar-arxius. El servei FTP és ofert per la capa d'aplicació de el model de capes de xarxa TCP / IP a l'usuari utilitzant normalment el port de xarxa 20 i el 21.

- Els servidors FTP anònims ofereixen els seus serveis lliurement a tots els usuaris, permeten accedir als seus arxius sense necessitat de tenir un compte d'usuari. Solament amb teclejar la paraula "anonymous" quan pregunti pel teu usuari tindràs accés a aquest sistema.
- FTPS és una extensió de l'estàndard de FTP que permet als clients sol·licitar xifrar la sessió FTP. Aquesta extensió de l'protocol es defineix en la norma proposada: RFC 4217.
- SFTP o FTP segur, és un programa que utilitza Secure Shell (SSH) per a transferir arxius. A diferència dels FTP, que encripta les ordres i dades, evitant que contrasenyes i informació confidencial es transmeti públicament per la xarxa. És funcionalment similar a FTP, però pel fet que utilitza un protocol diferent, els clients FTP estàndard no es pot utilitzar per parlar amb un servidor SFTP, ni es pot connectar a un servidor FTP amb un client que només suporta SFTP.

### 📄 34__widget_descriptori.html

3.4 - Widget d'escriptori

Alguns sistemes operatius disposen de miniprogrames denominats widgets o gadgets d'escriptori, que ofereixen informació resumida i faciliten l'accés a les eines d'ús freqüent. Per exemple, podem usar widgets per a mostrar una presentació de fotografies o veure les capçaleres actualitzats RSS d'una font de forma contínua. Aquestes aplicacions poden establir connexions remotes a través d'internet per a informació d'una aplicació web en el propi escriptori de la màquina local.

Una característica comuna als widgets, és que solen ser de distribució gratuïta a través d'Internet. Van aparèixer originalment en l'ambient de sistema d'accessoris d'escriptori de Mac OS X, però actualment hi ha una col·lecció molt àmplia de widgets per a Windows i Linux. El model de mini aplicacions de widgets, és molt atractiu per la seva relativament fàcil desenvolupament. Molts dels widgets, poden ser creats amb unes quantes imatges i amb poques línies de codi, en llenguatges que van des XML, passant per JavaScript a Perl, i C # entre d'altres.

El desenvolupament de tecnologies compatibles amb tablets i dispositius mòbils està substituint molts dels antics sistemes de widgets d'escriptori per les famoses apps, que es basen en el mateix concepte: aplicacions senzilles i visuals que apropen la utilitat desitjada a l'escriptori de l'usuari. No obstant això, la diferència principal que trobem entre una app i un widgets seria que el widgetsestà carregat permanentment en memòria i accessible en pantalla mentre que l'app ha de ser llançada com una aplicació convencional.

### 📄 35__sistema_operatiu_web.html

3.5 - Sistema Operatiu Web

eyeOS és una plataforma de núvol privat amb una interfície d'escriptori basada en web. Comunament anomenat escriptori al núvol per la seva interfície única, eyeOS proporciona un escriptori complet des del núvol amb gestió d'arxius, eines de gestió de la informació personal, eines col·laboratives i aplicacions de la companyia. Es tracta d'un nou concepte en emmagatzematge virtual, el qual es considera com a revolucionari a l'ésser un servei clau per al Web 2.0 ja que dins d'una web que combina el poder de l'actual HTML, PHP, AJAX i JavaScript per crear un entorn gràfic de tipus escriptori.

A diferència d'altres entorns d'escriptori, fa possible iniciar l'escriptori eyeOS i totes les seves aplicacions des d'un navegador web. No es requereix instal·lar cap programari addicional, ja que només es necessita un navegador que suporti AJAX, Java i Adobe Flash.

- Escriptori Web: Accedeix a un modern escriptori des de qualsevol dispositiu i treballa individual o col·laborativament.
- Sincronització: Fes servir eyeSync per sincronitzar arxius i carpetes entre el núvol i el teu ordinador. Treballa amb la teva informació tant quan estiguis connectat com quan no.
- Virtualització: eyeOS Web de cerca, la nova tecnologia per al 2013 d'eyeOS transforma qualsevol aplicació de Windows o Linux en una webapp feta 100% en HTML5.

Un dels principals motius que ha impulsat la seva gran acceptació és precisament la seva disponibilitat en línia, que no té dependències i que té un fort sistema de seguretat, aconseguint d'aquesta manera ser una aplicació ideal per emmagatzemar contingut. Aquesta acció pot ser útil per a aquelles persones que viatgen amb freqüència.

### 📄 36__referncies.html

3.6 - Referències

Referències

- Cliente de correo Outlook - [http://office.microsoft.com/Outlook](http://office.microsoft.com/Outlook)
- Cliente de correo Thunderbird - [http://www.mozilla.org/es-ES/thunderbird](http://www.mozilla.org/es-ES/thunderbird)
- Cliente de correo Evolution - [https://projects.gnome.org/evolution](https://projects.gnome.org/evolution)
- Plataforma Outlook.com - [https://www.outlook.com](https://www.outlook.com)
- Gmail - [http://mail.google.com](http://mail.google.com)
- [http://www.mozilla.org/projects/calendar/lightning](http://www.mozilla.org/projects/calendar/lightning) Webcalendar - [http://www.k5n.us/webcalendar.php](http://www.k5n.us/webcalendar.php)
- Cliente de FTP Filezilla - [http://filezilla-project.org](http://filezilla-project.org)
- Cliente de FTP SmartFTP - [http://www.smartftp.com](http://www.smartftp.com)
- Cliente de FTP WS_FTP - [http://www.ipswitchft.com/products/ws_ftp_pro/index.aspx](http://www.ipswitchft.com/products/ws_ftp_pro/index.aspx)
- Cliente de FTP gFTP - [http://gftp.seul.org](http://gftp.seul.org)
- Ubuntu Screenlets - [http://screenlets.org](http://screenlets.org)
- Dashboard Widgetss Apple - [http://www.apple.com/downloads/dashboard/](http://www.apple.com/downloads/dashboard/)
- Sistema Operativo Web eyeOS - [http://www.eyeos.com/es](http://www.eyeos.com/es)

### 📄 40__introducci.html

4.0 - Introducció

Encara que el terme Servidor Web s'associa moltes vegades amb l'ordinador que ofereix el servei, en realitat, un servidor web o servidor HTTP és un programa informàtic que processa una aplicació de la banda de servidor realitzant connexions, generant i lliurant la resposta a peticions dels clients mitjançant protocols com HTTP o HTTPS. El codi rebut pel client sol ser interpretat per un navegador web per completar la visualització de la pàgina per part de l'usuari.

**Arquitectura de funcionament d'un servidor web**

🖼️ [Imatge / Esquema: Arquitectura de funcionament d'un servidor web]

### 📄 41__servidors_web.html

4.1 - Servidors Web

Ens trobem amb diferents tipus de servidors web en funció de la seva llicència: d'una banda tenim servidors web propietaris i per un altre els lliures. A més, hi ha alguns servidors específics per a serveis o llenguatges concrets. Per tant, l'elecció d'un determinat programari de servidor web i determina tant per la llicència com les tecnologies que suporta.

Els servidors web més representatius usats en l'actualitat són

- **Apache** és un servidor web HTTP de codi obert, per a plataformes Unix, GNU / Linux, Microsoft Windows i Macintosh, que implementa el protocol HTTP / 1.12 i el concepte de de lloc virtual. Apache presenta entre altres característiques altament configurables, bases de dades d'autenticació i negociat de contingut.
- **Lighttpd** és un servidor web dissenyat per ser ràpid, segur, flexible, i fidel als estàndards. Està optimitzat per a entorns on la velocitat és molt important, i per això consumeix menys CPU i memòria RAM que altres servidors. lighttpd és programari lliure i es distribueix sota la llicència BSD. Funciona en GNU / Linux i UNIX de forma oficial, encara que existeix una versió per a Microsoft Windows actualment coneguda com Lighttpd For Windows.
- **Nginx** és un servidor web / proxy invers lleuger d'alt rendiment i un servidor intermediari per a protocols de correu electrònic. És programari lliure multiplataforma i de codi obert, llicenciat sota la Llicència BSD simplificada.
- **Internet Information Services (IIS)** és un servidor web de programari propietari per al sistema operatiu Microsoft Windows. Aquest servei converteix el PC en un servidor web per a Internet o una intranet, és a dir que en els ordinadors que tenen aquest servei instal·lat es poden publicar pàgines web tant local com remotament. Es basa en diversos mòduls que li donen capacitat per processar diferents tipus de pàgines. Per exemple, Microsoft inclou els de Active Server Pages (ASP) i ASP.NET, encara que també poden ser inclosos els d'altres fabricants com PHP o Perl.
- **Tomcat** implementa les especificacions dels servlets i de JavaServer Pages (JSP) de Sun Microsystems. Inclou el compilador Jasper, que compila JSPs convertint-les en servlets. El motor de servlets de Tomcat sovint es presenta en combinació amb el lloc web Apache. Atès que Tomcat va ser escrit en Java, funciona en qualsevol sistema operatiu que disposi de la màquina virtual Java.

**Ús dels servidors web**
🖼️ [Imatge / Esquema: Ús dels servidors web]

Netcraft
Llicències

- La Llicència pública general de GNU (GNU GPL) és una llicència que garanteix als usuaris finals la llibertat d'utilitzar, estudiar, compartir i modificar el programari. El seu propòsit és declarar que el programari cobert per aquesta llicència és programari lliure i protegir-lo d'intents d'apropiació que restringeixin aquestes llibertats als usuaris.
- El programari propietari ha estat creat per designar l'antònim del concepte de programari lliure. Aquest concepte s'aplica a qualsevol programa informàtic que no és lliure o que només ho és parcialment, sigui perquè el seu ús, redistribució o modificació està prohibida, o sigui perquè requereix permís exprés del titular del programari.
- La llicència Apache és una llicència de programari lliure creada per l'Apache Software Foundation (ASF). Requereix la conservació de l'avís de copyright i el disclaimer, però no és una llicència copyleft, ja que no requereix la redistribució de el codi font quan es distribueixen versions modificades.
- La llicència BSD (Berkeley Software Distribution) és una llicència de programari lliure permissiva com similar a la llicència d'OpenSSL o la MIT License. Aquesta llicència té menys restriccions en comparació amb altres com la GPL estant molt propera al domini públic però, a canvi que la GPL permet l'ús de el codi font en programari no lliure.

### 📄 42__installaci_i_configuraci_bsica.html

4.2 - Instal·lació i Configuració Bàsica

La instal·lació d'un servidor web és anàloga a la instal·lació d'una altra aplicació qualssevol, i per tant podem fer servir repositoris en Linux o descarregar l'arxiu executable del web oficial de servidor. Pel que fa a la configuració, cada servidor és una mica diferent i podem trobar-nos en entorns amb una interfície visual com en IIS o simplement configurar a través de l'edició de fitxers de text amb paràmetres, com és el cas d'Apache.

Els arxius de configuració de l'apache2 es troben a la carpeta / etc / apache2. L'arxiu principal de configuració és /etc/apache2/apache2.conf. Per defecte, la carpeta arrel del servidor web és la carpeta / var / www. Tots els documents que es trobin dins de la carpeta arrel de la web, seran accessibles via web. Els arxius de configuració més utilitzats són

/etc/apache2/apache2.conf
/etc/apache2/ports.conf

La carpeta que conté totes les webs disponibles està en

/etc/apache2/sites-available

Els enllaços simbòlics que habiliten les pàgines web estan en el directori

/etc/apache2/sites-enabled

Apache compta amb mòduls per augmentar la seva funcionalitat, entre les opcions més de apatxe són: mod_cband, mod_perl, mod_php, mod_python, mod_rexx, mod_ruby o mod_security. Alguns d'aquests mòduls poden trobar a la carpeta mods-available la qual conté aquells mòduls que estan disponibles per al seu ús i els mòduls que estan corrent al servidor es poden veure a la carpeta mods-enabled.

### 📄 43__aplicacions_de_gesti_despais_web.html

4.3 - Aplicacions de gestió d'espais web

**cPanel** és una eina d'administració basat en tecnologies web per administrar llocs de manera fàcil, amb una interfície neta. Es tracta d'un programari no lliure disponible per a un gran nombre de distribucions de Linux.Se va dissenyar per a l'ús comercial de serveis d'allotjament web, és per això que la companyia no l'ofereix amb llicència d'ús personal.

[https://cpanel.net/](https://cpanel.net/)

**Fantastico** és una biblioteca de scripts comercial que automatitza la instal·lació de les aplicacions web a un lloc web que sol venir integrada en entorns de gestió com cPanel. Els scripts solen crear les taules d'una base de dades, instal·lar programari, ajust els permisos, i modificar els fitxers de configuració de servidor web.

[https://netenberg.com/fantastico.php](https://netenberg.com/fantastico.php)

**ISPConfig** és un panell de control de hosting per a Linux de codi obert, llicenciat sota la llicència BSD. Permet als administradors gestionar llocs web, correu electrònic i registres de DNS a través d'una interfície basada en web.

[http://www.ispconfig.org/](http://www.ispconfig.org/)

### 📄 44__paquets_dinstallaci_integrada.html

4.4 - Paquets d'instal·lació integrada

Com a alternativa a la instal·lació d'un servidor web amb tots els elements necessaris per a executar una aplicació web, hi ha un conjunt d'aplicacions que facilita la tasca instal·lant els components bàsics de forma automatitzada. D'aquesta manera, i aprofitant aquestes aplicacions, podem muntar un servidor web Apache amb suport per a PHP, que disposi d'una base de dades MySQL activa i un gestor visual per administrar-la com phpMyAdmin.

- **XAMPP** és un servidor independent de plataforma, programari lliure, que consisteix principalment en la base de dades MySQL, el servidor web Apache i els intèrprets per a llenguatges de script: PHP i Perl. El nom prové de l'acrònim de X (per a qualsevol dels diferents sistemes operatius), Apache, MySQL, PHP, Perl. El programa està alliberat sota la llicència GNU i actua com un servidor web lliure, fàcil d'usar i capaç d'interpretar pàgines dinàmiques. Actualment XAMPP està disponible per a Microsoft Windows, GNU / Linux, Solaris i MacOS X. A més, d'instal·lar les aplicacions bàsiques: Apache + PHP + MySQL + phpMyAdmin; XAMPP ofereix també de forma integrada el servidor d'FTP Filezilla i un servidor de correu anomenat Mercury.
- **BitNami** és un instal·lador multiplataforma, i amb llicència GPL, d'aplicacions web de programari lliure. El seu objectiu és facilitar la instal·lació i configuració de gran quantitat d'aplicacions web com per exemple: WordPress, Joomla !, Drupal, phpBB, MediaWiki, Alfresco, etcètera. A més instal·la tots els elements que requereix el funcionament de l'aplicació, com pot ser un servidor HTTP Apache, o una base de dades com MySQL. BitNami crea paquets, que crida stacks o piles, que contenen tot el necessari (programes, scripts, bases de dades, dependències de llibreries resoltes, ...) per a la instal·lació de l'aplicació, amb total independència del programari que tinguem instal·lat i sense interferir en ell. Podem dir que BitNami és:
  - Fàcil d'utilitzar: Amb només uns clics de ratolí, podem tenir una aplicació de programari lliure funcionant.
  - Multiplataforma: disponible per a Linux, Windows i Mac OS X.Independent: No interfereixen amb el programari ja instal·lat.
  - Funcionen de forma nativa o en virtual: Permet la instal·lació de la pila directament en el sistema o com a màquina virtual.
  - Open Source: Totes les piles BitNami es poden descarregar lliurement i utilitzar en els termes de la Llicència Apache 2.0.

### 📄 45__referncies.html

4.5 - Referències

Referències

- Apache: [http://httpd.apache.org](http://httpd.apache.org)
- Serveis d’informació a Internet: [http://www.iis.net](http://www.iis.net)
- Lighttpd: [http://www.lighttpd.net](http://www.lighttpd.net)
- nginx - [http://nginx.org](http://nginx.org)
- Apache Tomcat: [http://tomcat.apache.org](http://tomcat.apache.org)
- cPanel - [https://cpanel.net/](https://cpanel.net/)
- Fantastico - [https://netenberg.com/fantastico.php](https://netenberg.com/fantastico.php)
- ISPConfig - [http://www.ispconfig.org/](http://www.ispconfig.org/)
- 1&1 - [http://www.1and1.es/](http://www.1and1.es/)
- Aruba: [http://hosting.aruba.it/index.asp?Lang=ES](http://hosting.aruba.it/index.asp?Lang=ES)
- OVH - [http://www.ovh.es/](http://www.ovh.es/)
- XAMPP: [http://www.apachefriends.org/es/xampp.html](http://www.apachefriends.org/es/xampp.html)
- Bitnami- [http://bitnami.com](http://bitnami.com)

### 📄 50__introducci.html

5.0 - Introducció

Els gestors de continguts són aplicacions web específiques que faciliten la tasca als administradors en la creació i publicació de diferents tipus de continguts multimèdia. Podem trobar gestors genèrics i específics, com a gestors de fòrums o imatges, per exemple. Abordarem a continuació, les característiques comunes per després detallar els aspectes diferenciadors de cada un dels principals gestors de continguts

### 📄 511__funcions_generals_dels_cms.html

5.1.1 - Funcions generals dels CMS

Hi ha diverses categories de sistemes CMS en funció del que vulguem fer: comunitats d'usuaris, gestors de projectes, blocs de notícies, botigues online, sistemes CRM, fòrums, galeries d'imatges o de vídeos. Però en qualsevol cas el sistemes de gestió de continguts es manté com el centre que aglutina tots els altres serveis, actuant de nexe i proporcionant les tasques bàsiques que aprofitaran tots els altres.

Els sistemes CMS resol les àrees com

- Gestionar la web i tots els seus continguts en diversos idiomes.
- Gestió d'usuaris amb accés per password.
- Regles d'accés d'usuaris sense limitacions i flexible.
- Potent sistema semàntic de classificació.
- Potent sistema cercador de continguts.
- Gestiona qualsevol base de dades SQL.
- Facilitar la indexació en cercadors.
- Estadístiques d'ús de qualsevol secció o usuari.
- Gestió de l'correu i altres sistemes de missatgeria interna.
- Gestió de les adreces de les pàgines i dels seus url.

Són també molt importants totes les qüestions gràfiques i de maquetació

- Permet utilitzar diferents plantilles visuals per a diferents seccions.
- Estructura de pàgina totalment configurable.
- Generar codi net compatible amb qualsevol navegador.
- Editor de textos intuïtiu integrat en les pàgines.
- Blocs d'informació laterals completament configurables.
- Sistema de menús completament configurable.

A partir d'aquestes funcions bàsiques es poden construir webs riques en continguts que s'actualitzen fàcilment que són modulars i que creixen amb la companyia. Aquest entorn és la base perfecta per a integrar qualsevol altra activitat a la web, però també per gestionar la base de coneixement de l'empresa que posteriorment pugui ser exportada a altres formats, ja que les dades sempre estaran centralitzats.

### 📄 512__llicncies_ds_dels_cms.html

5.1.2 - Llicències d'ús dels CMS

Les **solucions de codi obert** són aquelles que independentment que hagin estat desenvolupades per una companyia o per una comunitat d'usuaris tenen característiques comunes com ara accés a el codi font, possibilitat de redistribució de l'aplicació i la possibilitat d'adaptar el codi a necessitats específiques. Hi ha multitud de termes i llicències englobades en aquest concepte (GPL, Apache, MIT, Creative Commons) i amb característiques diferents.

Els avantatges principals que habitualment s'esmenten per adoptar una solució de codi obert són

- Baix cost d'entrada
- Atès que el codi és obert, les oportunitats per personalitzar i afegir noves funcionalitats són més grans.
- Facilitat per contractar amb diferents proveïdors per a realitzar les modificacions al llarg de el temps ja que es manté la propietat de el codi.
- Els sistemes de codi obert són més reactius a canvis en les necessitats dels usuaris o a l'adopció de nous estàndards.

Una de les principals desavantatges identificades a l'invertir en una solució de codi obert és la incertesa sobre la solució. habitualment aspectes com el temps de vida de la solució, documentació, formació, solució d'errors en l'aplicació, etc., depenen dels voluntaris que estan involucrats en la comunitat de desenvolupament. Com a resultat, el temps necessari per posar en marxa la solució pot ser més gran que per a una solució comercial. Les aplicacions o solucions comercials són aquelles que depenen directament d'una empresa determinada, que té la propietat del producte i s'ocupa de proporcionar els serveis més habituals de suport, formació, manteniment, etc. Les solucions propietàries típicament presenten una sèrie d'avantatges entre les quals cal destacar

- Productes més estables i normalment amb un compromís de solució de problemes en terminis determinats.
- Inclouen una completa documentació i es pot contractar formació respecte al producte.

Les solucions comercials o propietàries també tenen desavantatges i algunes d'elles poden ser determinants per a la seva elecció

- Major cost inicial que habitualment suposa la seva implantació a causa de que cal pagar algun tipus de llicència.
- L'empresa propietària és la que defineix el tipus de modificacions o extensions que se li poden fer a l'producte.
- Normalment aquestes aplicacions solen integrar-se millor o de forma més senzilla amb altres solucions proporcionades pel mateix fabricant, de manera que condiciona l'estratègia general respecte a sistemes informàtics de tota l'empresa
Creative Commons

Creative Commons és una organització sense ànim de lucre que permet als autors i creadors compartir voluntàriament el seu treball, lliurant-los llicències i eines lliures que els permetin aprofitar al màxim tota la ciència, coneixement i cultura disponible a Internet.

- Reconeixement (Attribution): En qualsevol explotació de l'obra autoritzada per la llicència caldrà reconèixer l'autoria.
- No Comercial (Non commercial): L'explotació de l'obra queda limitada a usos no comercials.
- Sense obres derivades (No derivate Works): L'autorització per explotar l'obra no inclou la transformació per crear una obra derivada.
- Compartir Igual (Share alike): L'explotació autoritzada inclou la creació d'obres derivades sempre que mantinguin la mateixa llicència a l'ésser divulgades. [http://es.creativecommons.org](http://es.creativecommons.org)

[http://es.creativecommons.org](http://es.creativecommons.org)

### 📄 513__classificaci_dels_cms.html

5.1.3 - Classificació dels CMS

Podem classificar els CMS en funció dels següents aspectes fonamentals

- Llenguatge de programació o tecnologia utilitzada
  - Active Server Pages (ASP)
  - Java
  - PHP
  - ASP.NET
  - Ruby On Rails
  - Python
- Funcionalitats que ofereix l'aplicació
  - Plataformes generals web
  - Sistemes específics
  - Orientats a pàgines personals: Blocs
  - Orientats a compartir opinions: Fòrums
  - Orientats a el desenvolupament col·laboratiu: Wikis
  - Plataforma per a continguts d'ensenyament on-line: e-learning
  - Plataformes de comerç electrònic: comerç electrònic
  - Publicacions digitals
  - Difusió de contingut multimèdia
- Propietat de el codi
  - Codi obert o Programari lliure
  - Codi propietari o comercials
  - Programari com a servei

### 📄 514__criteris_per_la_selecci_dun_cms_concret.html

5.1.4 - Criteris per la selecció d'un CMS concret

El procés per a la selecció d'una aplicació de gestió de continguts, és un procés ardu i complex, donada la gran quantitat de solucions existents en el mercat i els aspectes que s'han de considerar per a la presa d'una decisió degudament fonamentada.

Els **criteris de negoci** tenen com a objectiu delimitar l'abast de l'estratègia a la xarxa d'una empresa. És molt important que l'empresa defineixi i delimiti amb la major precisió possible, el tipus de servei o funcionalitat que necessita. Així mateix, l'altre aspecte que han de tenir en compte els criteris de negoci són els relatius als costos econòmics associats a la implantació d'una solució de gestió de continguts. Aquests costos han de contemplar tots els aspectes possibles: adquisició, implantació, i manteniment.

Els criteris tècnics ens permeten acotar el ventall de possibilitats centrant-nos en aspectes relatius a les infraestructures, llenguatges i equipament requerits, usabilitat i suport. Podem destacar els següents aspectes rellevants que afecten el pla tècnic

- Tipus de llicència
- Cost d'implantació i manteniment
- Infraestructura necessària
- Funcionalitats i extensibilitat
- Simplicitat d'ús
- Suport professional, documentació i formació
- Suport d'estàndards
- Estabilitat del producte
- Suport multilingüe
- Indexació per cercadors

Un cop analitzats i ponderats els criteris anteriors, és important tenir en compte els següents aspectes de cara a la decisió final sobre l'eina o solució que millor respon a les seves necessitats. Aquests aspectes han estat identificats com a possibles barreres a l'adopció d'un CMS

- Coneixement de l'mercat de solucions
- Formació de personal
- Recerca de proveïdors adequats
- Temps d'implantació
- Manteniment i actualització de continguts
- Cost total de propietat (implantació + manteniment)
- Relació cost-benefici

Els gestors de contingut web, requereixen per a la seva instal·lació i operació d'una**infraestructura tècnica** per poder dur a terme la seva tasca. És important no només tenir en compte el cost associat a l'adquisició del propi gestor de continguts sinó també el cost associat als requisits tècnics i infraestructura necessària per a l'allotjament i explotació de la mateixa: Plataforma de desenvolupament, Sistema Operatiu, Servidor web i servidor de base de Dades.

**Criteris de selecció d'un CMS**

🖼️ [Imatge / Esquema: Criteris de selecció d'un CMS]
Models d'infraestructura tècnica

- **Software as a Service (SaaS)** és un model de distribució de programari on el suport lògic i les dades que maneja s'allotgen en servidors d'una companyia TIC, als quals s'accedeix amb un navegador web des d'un client. L'empresa proveïdora TIC s'ocupa de el servei de manteniment, de l'operació diària i de el suport del programari utilitzat pel client. Regularment el programari pot ser consultat en qualsevol ordinador, es trobi present en l'empresa o no. Es dedueix que la informació, el processament, les entrades, i els resultats de la lògica de negoci del programari, estan allotjats a la companyia de TIC.
- El **Cloud Computing** és un paradigma que permet oferir serveis de computació a través d'Internet. Tot el que pot oferir un sistema informàtic s'ofereix com a servei, de manera que els usuaris puguin accedir als serveis disponibles "al núvol d'Internet" sense coneixements en la gestió dels recursos que fan servir. Un núvol pública és un núvol computacional mantinguda i gestionada per terceres persones no vinculades amb l'organització. Els núvols privades estan en una infraestructura sota demanda gestionada per a un sol client.
- Un **servidor dedicat** és un ordinador comprat o arrendat que s'utilitza per a prestar serveis dedicats, relacionats amb l'allotjament web i altres serveis en xarxa. A diferència del que passa amb l'allotjament compartit, on els recursos de la màquina són compartits entre un nombre indeterminat de clients, en el cas dels servidors dedicats generalment és un sol client el que disposa de tots els recursos de la màquina per els fins pels quals hagi contractat el servei.
  - [http://www.1and1.es/ServerPremium?linkId=hd.subnav.dedicatedservers](http://www.1and1.es/ServerPremium?linkId=hd.subnav.dedicatedservers)
  - [http://www.arsys.es/servidores/dedicados](http://www.arsys.es/servidores/dedicados)
  - [http://www.ovh.es/servidores_dedicados](http://www.ovh.es/servidores_dedicados)
  - [http://serverdedicati.aruba.it](http://serverdedicati.aruba.it)
- Un **servidor virtual privat (VPS** ) és un mètode de fer particions un servidor físic en diversos servidors de tal manera que tot funcioni com si s'estigués executant en una única màquina. Cada servidor virtual és capaç de funcionar sota el seu propi sistema operatiu i més cada servidor pot ser reiniciat de forma independent.

### 📄 51__sistemes_gestors_de_contingut_cms.html

5.1 - Sistemes Gestors de Contingut CMS

Un Sistema de Gestió de Continguts, CMS o Content Management System és un programa que proporciona un esquelet o estructura per a la creació de llocs web en els quals és necessari administrar continguts de diversos tipus. Aquests continguts poden ser creats dinàmicament per diferents col·laboradors o usuaris amb diferents privilegis i necessiten normalment d'un administrador que ordeni o estableixi criteris de classificació per als mateixos.

Tot el sistema és accessible via web, de manera que haurem de muntar una plataforma de servidor local al nostre ordinador per instal·lar-lo o bé requerirem d'una connexió a internet i un servidor d'allotjament on instal·lar-lo en remot. Per entrar a la interfície d'usuari o a la interfície de l'administrador necessitarem d'un navegador.

Solen presentar una interfície d'administració anomenada B**ackEnd** des de la qual s'estableixen criteris de classificació per als continguts, es configuren paràmetres de l'aplicació, s'estableixen plantilles, s'instal·len utilitats addicionals, es creen usuaris, i altres tasques administratives. La interfície que es presenta a l'usuari és cridada **FrontEnd** i pren l'aspecte que l'administrador ha elegit per mitjà d'una plantilla.

Hi ha multitud de llocs a internet des dels quals es poden descarregar plantilles gratuïtes que podem modificar posteriorment al nostre gust. Si els nostres coneixements en programació són avançats podem aventurar-nos a crear plantilles per nosaltres mateixos, ja que la majoria estan creades amb HTML, CSS i PHP. Internament es recolzen en una base de dades en què s'emmagatzema l'estructura i els continguts.

Hi ha multitud de programes d'aquest tipus, alguns de pagament i la majoria sota llicència GNU, Open Source o similar. Compten a més amb fòrums, blocs i comunitats de desenvolupadors altruistes online que ens poden donar un cop en més d'una ocasió. El triar un tipus o un altre de CMS anirà en funció del que volem mostrar, com i per a qui.

### 📄 52__cms_de_propsit_general_joomla.html

5.2 - CMS de propòsit general: Joomla

Joomla és un sistema de gestió de continguts gratuït i de codi obert per a la publicació de continguts web. Joomla està escrit en PHP i emmagatzema les dades en un MySQL, MsSQL, o PostgreSQL i inclou característiques com ara memòria cau de pàgines, feeds RSS, versions imprimibles de pàgines, notícies, blocs, enquestes, recerca i el suport a la internacionalització del llenguatge.

Joomla es basa en una sèrie d'elements que podràs crear, editar i configurar al Tauler de control de l'administració de el lloc i que tenen reflex visual en el Frontend. La instal·lació bàsica de Joomla mostra alguna d'aquestes opcions: Articles, Components, Menús, Plugins, Mòduls o Plantilles. Tant els articles com les categories són la base de la gestió de continguts, mentre que la resta d'elements són extensions que permeten incorporar noves funcionalitats.

Els **articles** són l'element fonamental de Joomla. Inclou un títol, text i elements multimèdia diversos. Joomla pot mostrar un article individualment, un llistat d'articles, pots configurar que l'article estigui publicat, pots fer que un article sigui destacat perquè es mostri a la portada d'el lloc, arxivar-los, enviar-los a la paperera, recuperar-los més endavant, reutilitzar-los, copiar-los, moure'ls de lloc, etc. Per mantenir ordenats els diferents articles, comptem amb un arbre de categories niuades que s'empra per a la classificació dels articles.

Joomla està preparat per afegir noves funcionalitats instal·lant petites aplicacions anomenades **components**. En la instal·lació bàsica de Joomla ja vénen preinstal·lats uns quants que serveixen als propòsits generals de qualsevol pàgina web: un cercador, un sistema d'enllaços, feeds RSS ... Però hi ha centenars de components addicionals que podràs instal·lar en el teu lloc per a multitud de propòsits.

La majoria dels llocs web realitzats amb Joomla tenen una estructura similar: a la zona central es mostra el contingut principal i al seu voltant, multitud de capsetes o contenidors, mostrant informació addicional. Tots aquests contenidors són els **mòduls**. Són, per tant, blocs de contingut independents que poden ser col·locats de manera flexible al llarg de el portal fent servir les posicions que es mostren predefinides a la plantilla que estiguis utilitzant. Tal com passa amb els components, Joomla ja ve amb una quantitat concreta de mòduls disponibles en la seva instal·lació bàsica però també podràs instal·lar nombrosos mòduls disponibles per a múltiples funcionalitats.

Els **connectors** són petits scripts dedicats a fer tasques en el sistema normalment vinculades a un esdeveniment. Per exemple, un connector pot dedicar-se a crear automàticament imatges en miniatura en un article que enllacen a la versió completa de la imatge original.
Les plantilles són les responsables de el disseny estètic de el lloc: colors, formats de font, posicions en què ubicar els mòduls ... El disseny dependrà de la plantilla i podrà ser canviada sempre que es desitgi. Un lloc Joomla, amb els mateixos continguts, components i mòduls instal·lats pot semblar diferent simplement desactivant la plantilla actual i habilitant una de nova.

### 📄 53__cms_orientat_a_blogs_wordpress.html

5.3 - CMS orientat a blogs: Wordpress

WordPress és un sistema de gestió de continguts enfocat a la creació d'blogsbitácoras web desenvolupat en PHP i MySQL, sota llicència GPL i codi modificable.Se s'ha convertit en en el CMS més popular per la seva llicència, la seva facilitat d'ús i el sistema d'actualitzacions automatitzat. Encara que gran part de el projecte ha estat desenvolupat per la comunitat al voltant de WordPress, encara està associat a Automattic, l'empresa on alguns dels principals contribuents de WordPress són empleats. A més, Automattic té un servei d'allotjament de blocs gratuïtes basat en el seu programari anomenat WordPress.com.

Al panell d'administració de wordpress disposem de menús per gestionar tots els **elements de el sistema** de manera senzilla i ràpida.

- **Entrades:** Permet afegir noves entrades i editar les ja creades, les etiquetes associades a les entrades així com les diferents categories creades per les mateixes. Podem filtrar les entrades que es mostren, editar-les, moure-les a la paperera, etc. Per a cada entrada podem veure el seu títol, l'autor que la va crear, la categoria a la qual pertany, les etiquetes que li han estat assignades, el nombre de comentaris, la data de creació i el seu estat. A l'editar una entrada podem veure en qualsevol moment una vista prèvia de la mateixa, modificar el seu estat o canviar el títol i el contingut d'ella. Per a l'edició del contingut comptem amb un complet editor amb les operacions clàssiques per a l'edició de text i inserció de contingut multimèdia, tenint disponible també la vista HTML del contingut, si preferim editar d'aquesta manera millor. A la finestra Edita entrada podem triar les etiquetes i categoria per classificar la nostra entrada, escriure un petit resum de l'entrada, i altres opcions addicionals.
- **Multimèdia:** En aquesta categoria podem veure el contingut de la nostra Llibreria multimèdia i, si ho desitgem, afegir nous elements. Per Llibreria multimèdia entenem el repositori d'imatges, àudio, vídeos ... i qualsevol altre objecte que hàgim pujat a el lloc per a la seva inclusió en les entrades.
- **Pàgines:** Permet afegir i editar pàgines addicionals a la principal en què són mostrades les entrades. Es poden niar unes dins les altres com submenús i ordenar-les per ID.
- **Comentaris:** Fent clic a Comentaris accedim a un llistat dels comentaris que han realitzat els lectors a les entrades publicades. Els comentaris poden ser marcats com a aprovats, rebutjats, spam, o enviar-los a la paperera.
- **Aparença:** Mitjançant aparença podem manipular els diferents elements que defineixen la part visual de el lloc WordPress: temes, widgets, l'editor o la capçalera. És possible canviar el tema actual per algun dels disponibles per defecte, o si ho necessitem, instal·lar nous temes. Els ginys són objectes o petites aplicacions que poden ser usades en algunes zones de la nostra bitàcola. Amb l'editor de temes tenim la possibilitat de caracteritzar el complet la visualització de les plantilles utilitzades modificant el seu codi font i CSS.
- **Plugins:** Permet administrar els connectors afegits a el lloc WordPress. Podem buscar nous connectors, activar o desactivar els instal·lats anteriorment, eliminar-los ...
- **Usuaris:** Permet veure i editar els usuaris i autors de el lloc, a més de poder canviar i omplir el nostre perfil. En el llistat d'usuaris es mostra el nom d'usuari, el nom, l'adreça de correu electrònic, el seu perfil i el nombre d'entrades creades.
- **Eines:** A Eines tenim accés a diferents utilitats que permet millorar la funcionalitat i rendiment de WordPress. Permet exportar o importar continguts d'un altre CMS i també apareixen eines associades als connectors que s'instal·lin.
- **Ajustos:** Disposa de diverses subcategories que permeten establir la configuració general de el lloc (títol, descripció, URL, correu electrònic, zona horària, opcions de data i hora ...), opcions d'escriptura (accions a prendre quan es realitza una publicació) i lectura ( per exemple, el nombre d'entrades a mostrar), comentaris (habilitar-, què notificacions es generaran), multimèdia, privacitat de el lloc o els enllaços permanents (tipus d'enllaços a mostrar per a les pàgines i entrades de bloc).

### 📄 54__cms_orientat_a_frums_phpbb.html

5.4 - CMS orientat a Fòrums: phpBB

phpBB és un sistema de fòrums gratuït basat en un conjunt de paquets de codi programats en el popular llenguatge de programació web PHP i llançat sota la Llicència Pública General de GNU, la intenció és la de proporcionar fàcilment, i amb àmplia possibilitat de personalització, un eina per crear comunitats. El seu nom és per l'abreujament de PHP Bulletin Board.

Al panell d'Administració trobarem el menú que ens servirà per accedir a les diferents opcions d'administració de fòrum phpBB. A la portada de l'Panell trobarem diverses dades sobre el fòrum, com el nombre de temes oberts en total en el nostre fòrum, la quantitat d'usuaris registrats, o els usuaris connectats en aquest mateix moment.

En l'administració de fòrums, el que farem serà definir l'estructura del nostre fòrum, definint categories, i dins d'aquestes categories, diferents subfòrums. D'aquesta manera, aconseguirem tenir un fòrum ordenat per temàtiques, on sigui fàcil trobar el que busquem.

A la secció de permisos especificarem què es pot i què no es pot fer en cada subfòrum. Podrem convertir el subfòrum en un subfòrum Públic, Registrat, Privat o Moderadors.

- Que el subfòrum sigui Públic vol dir que qualsevol pot llegir i escriure missatges en aquest subfòrum, fins i tot sense estar registrat.
- Un subfòrum Registrat permet a qualsevol llegir els missatges publicats en ell, però no li permet escriure nous missatges tret que estigui registrat.
- Si optem per un subfòrum Privat, només podran participar-hi els que posseeixin el nivell d'usuaris privats.
- En el cas d'un subfòrum Moderadors, limitem la participació o el visionat del contingut del subfòrum a moderadors i administrador de fòrum.

Mitjançant el panell d'administració, a la secció de nom administració dels grups, podem crear grups d'usuaris, i assignar permisos especials als membres de cada grup. La utilitat dels grups depèn de les necessitats del fòrum que estem creant i bàsicament ens permeten simplificar l'assignació de permisos sobre els diferents fòrums. El procés d'administració dels grups consistirà en dos passos: primer crear els grups, i després assignar-los els permisos corresponents.

A la secció d'administració general podrem fer un backup de la base de dades, amb la qual poder afrontar qualsevol problema que pogués ocórrer amb la nostra base de dades, canviar la configuració del nostre fòrum, enviar notificacions als nostres usuaris per mitjà de correu massiu, podrem restaurar la base de dades a partir de la còpia de seguretat que vam fer prèviament, canviar els emoticones de fòrum, o censurar aquelles paraules que no volem que s'escriguin en el nostre fòrum.

### 📄 55__cms_orientat_a_wikis_mediawiki.html

5.5 - CMS orientat a Wikis: mediaWiki

MediaWiki és un programari lliure per a wikis programat en el llenguatge PHP. És el programari usat per Wikipedia i altres projectes de la Fundació Wikimedia (Wikcionario, Wikilibros, etc.). Ha tingut una gran expansió des de l'any 2005, existint un gran nombre de wikis basats en aquest programari que no mantenen relació amb aquesta fundació, encara que sí comparteixen la idea de la generació de continguts de manera col·laborativa. Es troba sota la llicència de programari GPL. Mitjana Wiki pot ser instal·lat en els servidors web Apache i Internet Information Services i pot usar com a motor de base de dades MySQL o PostgreSQL.

Un wiki és un entorn d'edició col·laboratiu, és a dir, un sistema web on qualsevol usuari pot ser col·laborador afegint, modificant o eliminant articles. Registrar-se com usuari no sempre és obligatori per participar però facilita que altres usuaris es comuniquin amb tu, permet reconèixer les edicions en l'historial de les pàgines, t'habilita per pujar imatges, personalitzar les botons ...

Hi ha algunes **pàgines** relacionades amb cada usuari: Pàgina d'usuari, subpàgines, preferències, discussió (permet que altres usuaris et escriguin missatges), contribucions i seguiment (llistat d'edicions en les pàgines que està monitoritzant l'usuari).

La **comunitat** en qualsevol mediaWiki té a el menys aquests canals de comunicació: La pàgina de discussió de l'usuari, el correu electrònic, les pàgines de discussió de cada article i la pàgina de discussió per a consultes a el conjunt de la comunitat.

Per Criteris de selecció d'un CMSper la wiki podem seguir els hipervincles, fer servir el cercador o utilitzar les pàgines especials: Canvis recents (llistat on apareixen les últimes edicions realitzades al wiki), pàgines especials (les pàgines òrfenes, la galeria d'imatges noves, la llista de usuaris, etc) i pàgina aleatòria (que selecciona una pàgina a l'atzar d'entre totes les de l'enciclopèdia).

L'**historial** és el llistat del conjunt d'edicions que ha tingut una pàgina. Reflecteix la data d'edicions, l'usuari o la IP editor i permet comparar les diferències entre edicions.

**Edita una pàgina** wiki no és gens complicat però hi ha una sèrie de convencions per oferir format als diferents elements dels articles que han resultar familiars. A l'editar apareixerà la caixa d'edició de la pàgina molt fàcil d'utilitzar amb un seguit d'icones que et permetran fer un enllaç extern, interns, seleccionar el tipus i la mida de lletra, inserir una imatge ...

Els articles es van organitzant com un mapa conceptual enllaçats per enllaços interns que apunten a altres pàgines relacionades de la mateixa wiki, o bé a través d'enllaços externs a altres fonts d'informació.

### 📄 56__cms_orientat_a_galeries_coppermine.html

5.6 - CMS orientat a Galeries: Coppermine

Coppermine Photo Gallery (CPG) és una aplicació web de galeria d'imatges molt fàcil d'utilitzar amb suport per a altres arxius multimèdia. És programari lliure, de codi obert i es pot utilitzar tant per a llocs personals, així com per a ús comercial ja que s'allibera amb la llicència GPL de GNU. Coppermine compta amb temes personalitzables i és compatible amb l'ús de diversos idiomes. A nivell tècnic, Coppermine utilitza PHP, MySQL, i una llibreria de gestió d'imatges per gestionar els thumbnails, o bé la biblioteca GD o ImageMagick.

Els arxius d'imatges s'emmagatzemen en àlbums que poden ser agrupats en categories niuades. Els permisos es gestionen a nivell de grups d'usuaris per part de l'administrador, que pot especificar si els usuaris que poden o no poden tenir àlbums personals, enviar postals o afegir comentaris.

La galeria pot ser privada, accessible només per a usuaris registrats o oberta a tots els visitants al seu lloc. Els usuaris poden pujar fotos amb el navegador web, es pot definir una quota d'imatges per usuari, afegir comentaris i fins i tot enviar targetes electròniques. L'administrador pot també gestionar galeries i realitzar un gran nombre de processos per lots de fotografies que s'han carregat al servidor FTP.

### 📄 57__cms_orientat_a_ecommerce_prestashop.html

5.7 - CMS orientat a e-Commerce: Prestashop

PrestaShop és una solució gratuïta i de codi obert de comerç electrònic compatible amb passarel·les de pagament com Google Checkout, Authorize.Net, Moneybookers i PayPal a través de les seves respectives APIs. És una aplicació web utilitzat àmpliament com a gestor de comerç electrònic a tot el món. Està escrit en PHP i basat en el motor de plantilles Smarty. Utilitza MySQL com el motor de base de dades per defecte. El programari fa un ampli ús d'AJAX en el panell d'administració, mentre que els blocs de mòduls poden ser fàcilment afegits a la botiga per oferir major funcionalitat, els quals normalment es proporcionen de forma gratuïta per desenvolupadors independents.

PrestaShop ve inclòs amb més de 310 funcionalitats les quals han estat desenvolupades per assistir als empresaris a incrementar les seves vendes sense gaire esforç. Podem destacar

- Gestió del catàleg
- Visualització de Productes
- Eines SEO
- Finalització de compra
- Gestió de l'enviament i localització
- Gestió del pagament a través de passarel·les
- Màrqueting
- traduccions
- Seguretat
- Anàlisi i Informes

### 📄 imscp_v1p1.xsd

```xsd
<?xml version = "1.0" encoding = "UTF-8"?>

<!--Generated by Turbo XML 2.3.1.100. Conforms to w3c http://www.w3.org/2001/XMLSchema-->

<xsd:schema xmlns = "http://www.imsglobal.org/xsd/imscp_v1p1"

	 targetNamespace = "http://www.imsglobal.org/xsd/imscp_v1p1"

	 xmlns:xsd = "http://www.w3.org/2001/XMLSchema"

	 version = "IMS CP 1.1.3"

	 elementFormDefault = "unqualified">

	<xsd:import namespace = "http://www.w3.org/XML/1998/namespace" schemaLocation = "http://www.w3.org/2001/03/xml.xsd"/>

	<xsd:annotation>

		<xsd:documentation xml:lang = "en">DRAFT XSD for IMS Content Packaging version 1.1 DRAFT                </xsd:documentation>

		<xsd:documentation> Copyright (c) 2001 IMS GLC, Inc.                                                    </xsd:documentation>

		<xsd:documentation>2000-04-21, Adjustments by T.D. Wason from CP 1.0.                                   </xsd:documentation>

		<xsd:documentation>2001-02-22, T.D.Wason: Modify for 2000-10-24 XML-Schema version.                     </xsd:documentation>

		<xsd:documentation> Modified to support extension.                                                      </xsd:documentation>

		<xsd:documentation>2001-03-12, T.D.Wason: Change filename, target and meta-data namespaces              </xsd:documentation>

		<xsd:documentation> and meta-data filename.                                                             </xsd:documentation>

		<xsd:documentation> Add meta-data to itemType, fileType and organizationType.                           </xsd:documentation>

		<xsd:documentation> Do not define namespaces for xml in XML instances generated from this xsd.          </xsd:documentation>

		<xsd:documentation> Imports IMS meta-data xsd, lower case element names.                                </xsd:documentation>

		<xsd:documentation> This XSD provides a reference to the IMS meta-data root element as imsmd:record     </xsd:documentation>

		<xsd:documentation> If the IMS meta-data is to be used in the XML instance then the instance            </xsd:documentation>

		<xsd:documentation> must definean IMS meta-data prefix with a namespace.                                </xsd:documentation>

		<xsd:documentation> The meta-data targetNamespace should be used.                                       </xsd:documentation>

		<xsd:documentation>2001-03-20, Thor Anderson: Remove manifestref, change resourceref back to            </xsd:documentation>

		<xsd:documentation> identifierref, change manifest back to contained by manifest.                       </xsd:documentation>

		<xsd:documentation> --Tom Wason: manifest may contain _none_ or more manifests.                         </xsd:documentation>

		<xsd:documentation>2001-04-13 Tom Wason: corrected attirbute name structure.  Was misnamed type.        </xsd:documentation>

		<xsd:documentation>2001-05-14 Schawn Thropp: Made all complexType extensible with the group.any         </xsd:documentation>

		<xsd:documentation> Added the anyAttribute to all complexTypes.                                         </xsd:documentation>

		<xsd:documentation> Changed the href attribute on the fileType and resourceType to xsd:string           </xsd:documentation>

		<xsd:documentation> Changed the maxLength of the href, identifierref, parameters, structure             </xsd:documentation>

		<xsd:documentation> attributes to match the Information model.                                          </xsd:documentation>

		<xsd:documentation>2001-07-25 Schawn Thropp: Changed the namespace for the Schema of Schemas to         </xsd:documentation>

		<xsd:documentation> the 5/2/2001 W3C XML Schema Recommendation.                                         </xsd:documentation>

		<xsd:documentation> attributeGroup attr.imsmd deleted, was not used anywhere.                           </xsd:documentation>

		<xsd:documentation> Any attribute declarations that have use = "default"                                </xsd:documentation>

		<xsd:documentation> changed to use="optional" - attr.structure.req.                                     </xsd:documentation>

		<xsd:documentation> Any attribute declarations that have value="somevalue" changed to                   </xsd:documentation>

		<xsd:documentation> default="somevalue" - attr.structure.req (hierarchical).                            </xsd:documentation>

		<xsd:documentation> Removed references to IMS MD Version 1.1.                                           </xsd:documentation>

		<xsd:documentation> Modified attribute group "attr.resourcetype.req" to change use from optional        </xsd:documentation>

		<xsd:documentation> to required to match the information model.  As a result the default value          </xsd:documentation>

		<xsd:documentation> also needed to be removed                                                           </xsd:documentation>

		<xsd:documentation> Name change for XSD.  Changed to match version of CP Spec                           </xsd:documentation>

		<xsd:documentation> 2001-11-04 Chris Moffatt:                                                           </xsd:documentation>

		<xsd:documentation>  1. Refer to the xml namespace using the "x" abbreviation instead of "xml".         </xsd:documentation>

		<xsd:documentation>     This changes enables the schema to work with commercial XML Tools               </xsd:documentation>

		<xsd:documentation>  2. Revert to original IMS CP version 1.1 namespace.                                </xsd:documentation>

		<xsd:documentation>     i.e. "http://www.imsglobal.org/xsd/imscp_v1p1"                                  </xsd:documentation>

		<xsd:documentation>     This change done to support the decision to only change the XML namespace with  </xsd:documentation>

		<xsd:documentation>     major revisions of the specification i.e. where the information model or binding</xsd:documentation>

		<xsd:documentation>     changes (as opposed to addressing bugs or omissions). A stable namespace is     </xsd:documentation>

		<xsd:documentation>     necessary to the increasing number of implementors.                             </xsd:documentation>

		<xsd:documentation>  3. Changed name of schema file to "imscp_v1p1p3.xsd" and                           </xsd:documentation>

		<xsd:documentation>     version attribute to "IMS CP 1.1.3" to reflect minor version change             </xsd:documentation>

		<xsd:documentation>Inclusions and Imports                                                               </xsd:documentation>

		<xsd:documentation>Attribute Declarations                                                               </xsd:documentation>

		<xsd:documentation>element groups                                                                       </xsd:documentation>

		<xsd:documentation>                                                                                     

		

		</xsd:documentation>

		<xsd:documentation>2003-03-21 Schawn Thropp                                                             </xsd:documentation>

		<xsd:documentation>The following updates were made to the Version 1.1.3 "Public Draft" version:         </xsd:documentation>

		<xsd:documentation>  1. Updated name of schema file (imscp_v1p1.xsd) to match to IMS naming guideance   </xsd:documentation>

		<xsd:documentation>  2. Updated the import statement to reference the xml.xsd found at                  </xsd:documentation>

		<xsd:documentation>       "http://www.w3.org/2001/03/xml.xsd".  This is the current W3C schema          </xsd:documentation>

		<xsd:documentation>        recommended by the W3C to reference.                                         </xsd:documentation>

		<xsd:documentation>  3. Removed all maxLength's facets.  The maxLength facets was an incorrect binding  </xsd:documentation>

		<xsd:documentation>     implementation.  These lengths were supposed, according to the information      </xsd:documentation>

		<xsd:documentation>     model, to be treated as smallest permitted maximums.                            </xsd:documentation>

		<xsd:documentation>  4. Added the variations content model to support the addition in the information   </xsd:documentation>

		<xsd:documentation>     model.                                                                          </xsd:documentation>

	</xsd:annotation>

	<xsd:group name = "grp.any">

		<xsd:annotation>

			<xsd:documentation>Any namespaced element from any namespace may be included within an "any" element.  The namespace for the imported element must be defined in the instance, and the schema must be imported.  </xsd:documentation>

		</xsd:annotation>

		<xsd:sequence>

			<xsd:any namespace = "##other" processContents = "strict" minOccurs = "0" maxOccurs = "unbounded"/>

		</xsd:sequence>

	</xsd:group>

	<xsd:attributeGroup name = "attr.version">

		<xsd:attribute name = "version" type = "xsd:string"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.structure.req">

		<xsd:attribute name = "structure" default = "hierarchical" type = "xsd:string"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.resourcetype.req">

		<xsd:attribute name = "type" use = "required" type = "xsd:string"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.identifierref.req">

		<xsd:attribute name = "identifierref" use = "required" type = "xsd:string"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.identifierref">

		<xsd:attribute name = "identifierref" type = "xsd:string"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.parameters">

		<xsd:attribute name = "parameters" type = "xsd:string"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.isvisible">

		<xsd:attribute name = "isvisible" type = "xsd:boolean"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.identifier">

		<xsd:attribute name = "identifier" type = "xsd:ID"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.identifier.req">

		<xsd:attribute name = "identifier" use = "required" type = "xsd:ID"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.href.req">

		<xsd:attribute name = "href" use = "required" type = "xsd:anyURI"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.href">

		<xsd:attribute name = "href" type = "xsd:anyURI"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.default">

		<xsd:attribute name = "default" type = "xsd:IDREF"/>

	</xsd:attributeGroup>

	<xsd:attributeGroup name = "attr.base">

		<xsd:attribute ref = "xml:base"/>

	</xsd:attributeGroup>

	

	<!-- Copyright (2) 2003 IMS Global Learning Consortium, Inc. -->

	

	

	<!-- ******************** -->

	

	

	<!-- ** Change History ** -->

	

	

	<!-- ******************** -->

	

	

	<!-- **************************** -->

	

	

	<!-- ** Attribute Declarations ** -->

	

	

	<!-- **************************** -->

	

	

	<!-- ************************** -->

	

	

	<!-- ** Element Declarations ** -->

	

	

	<!-- ************************** -->

	

	<xsd:element name = "dependency" type = "dependencyType"/>

	<xsd:element name = "file" type = "fileType"/>

	<xsd:element name = "item" type = "itemType"/>

	<xsd:element name = "manifest" type = "manifestType"/>

	<xsd:element name = "metadata" type = "metadataType"/>

	<xsd:element name = "organization" type = "organizationType"/>

	<xsd:element name = "organizations" type = "organizationsType"/>

	<xsd:element name = "resource" type = "resourceType"/>

	<xsd:element name = "resources" type = "resourcesType"/>

	<xsd:element name = "schema" type = "schemaType"/>

	<xsd:element name = "schemaversion" type = "schemaversionType"/>

	<xsd:element name = "title" type = "titleType"/>

	

	<!-- ******************* -->

	

	

	<!-- ** Complex Types ** -->

	

	

	<!-- ******************* -->

	

	

	<!-- **************** -->

	

	

	<!-- ** dependency ** -->

	

	

	<!-- **************** -->

	

	<xsd:complexType name = "dependencyType">

		<xsd:sequence>

			<xsd:group ref = "grp.any"/>

		</xsd:sequence>

		<xsd:attributeGroup ref = "attr.identifierref.req"/>

		<xsd:anyAttribute namespace = "##other" processContents = "strict"/>

	</xsd:complexType>

	

	<!-- ********** -->

	

	

	<!-- ** file ** -->

	

	

	<!-- ********** -->

	

	<xsd:complexType name = "fileType">

		<xsd:sequence>

			<xsd:element ref = "metadata" minOccurs = "0"/>

			<xsd:group ref = "grp.any"/>

		</xsd:sequence>

		<xsd:attributeGroup ref = "attr.href.req"/>

		<xsd:anyAttribute namespace = "##other" processContents = "strict"/>

	</xsd:complexType>

	

	<!-- ********** -->

	

	

	<!-- ** item ** -->

	

	

	<!-- ********** -->

	

	<xsd:complexType name = "itemType">

		<xsd:sequence>

			<xsd:element ref = "title" minOccurs = "0"/>

			<xsd:element ref = "item" minOccurs = "0" maxOccurs = "unbounded"/>

			<xsd:element ref = "metadata" minOccurs = "0"/>

			<xsd:group ref = "grp.any"/>

		</xsd:sequence>

		<xsd:attributeGroup ref = "attr.identifier.req"/>

		<xsd:attributeGroup ref = "attr.identifierref"/>

		<xsd:attributeGroup ref = "attr.isvisible"/>

		<xsd:attributeGroup ref = "attr.parameters"/>

		<xsd:anyAttribute namespace = "##other" processContents = "strict"/>

	</xsd:complexType>

	

	<!-- ************** -->

	

	

	<!-- ** manifest ** -->

	

	

	<!-- ************** -->

	

	<xsd:complexType name = "manifestType">

		<xsd:sequence>

			<xsd:element ref = "metadata" minOccurs = "0"/>

			<xsd:element ref = "organizations"/>

			<xsd:element ref = "resources"/>

			<xsd:element ref = "manifest" minOccurs = "0" maxOccurs = "unbounded"/>

			<xsd:group ref = "grp.any"/>

		</xsd:sequence>

		<xsd:attributeGroup ref = "attr.identifier.req"/>

		<xsd:attributeGroup ref = "attr.version"/>

		<xsd:attribute ref = "xml:base"/>

		<xsd:anyAttribute namespace = "##other" processContents = "strict"/>

	</xsd:complexType>

	

	<!-- ************** -->

	

	

	<!-- ** metadata ** -->

	

	

	<!-- ************** -->

	

	<xsd:complexType name = "metadataType">

		<xsd:sequence>

			<xsd:element ref = "schema" minOccurs = "0"/>

			<xsd:element ref = "schemaversion" minOccurs = "0"/>

			<xsd:group ref = "grp.any"/>

		</xsd:sequence>

	</xsd:complexType>

	

	<!-- ******************* -->

	

	

	<!-- ** organizations ** -->

	

	

	<!-- ******************* -->

	

	<xsd:complexType name = "organizationsType">

		<xsd:sequence>

			<xsd:element ref = "organization" minOccurs = "0" maxOccurs = "unbounded"/>

			<xsd:group ref = "grp.any"/>

		</xsd:sequence>

		<xsd:attributeGroup ref = "attr.default"/>

		<xsd:anyAttribute namespace = "##other" processContents = "strict"/>

	</xsd:complexType>

	

	<!-- ****************** -->

	

	

	<!-- ** organization ** -->

	

	

	<!-- ****************** -->

	

	<xsd:complexType name = "organizationType">

		<xsd:sequence>

			<xsd:element ref = "title" minOccurs = "0"/>

			<xsd:element ref = "item" minOccurs = "0" maxOccurs = "unbounded"/>

			<xsd:element ref = "metadata" minO
```

### 📄 imsmanifest.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>

        <!-- Generated by eXe - http://exelearning.net -->

        <manifest identifier="eXeAWE60c9975c25efdb59281"

        xmlns="http://www.imsglobal.org/xsd/imscp_v1p1"

        xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2"

        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

        xmlns:lom="http://ltsc.ieee.org/xsd/LOM"

        

 xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 imscp_v1p1.xsd http://www.imsglobal.org/xsd/imsmd_v1p2 imsmd_v1p2p2.xsd"> 

<metadata> 

 <schema>IMS Content</schema> 

 <schemaversion>1.1.3</schemaversion> 

 <lom:lom><lom:general uniqueElementName="general"><lom:identifier><lom:catalog uniqueElementName="catalog">My Catalog</lom:catalog><lom:entry uniqueElementName="entry">4a7d755e-34a5-410a-a7d4-601881136623</lom:entry></lom:identifier><lom:title><lom:string language="ca">Aplicacions Web</lom:string></lom:title><lom:language>ca</lom:language><lom:description><lom:string language="ca">Aplicacions Web - CFGM Sistemes Microinformàtics i Xarxes</lom:string></lom:description><lom:aggregationLevel uniqueElementName="aggregationLevel"><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">2</lom:value></lom:aggregationLevel></lom:general><lom:lifeCycle><lom:contribute><lom:role uniqueElementName="role"><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">author</lom:value></lom:role><lom:entity>BEGIN:VCARD VERSION:3.0 FN:Ferran Pelechano Garcia EMAIL;TYPE=INTERNET: ORG: END:VCARD</lom:entity><lom:date><lom:dateTime uniqueElementName="dateTime">2020-10-23T18:25:46.00+02:00</lom:dateTime><lom:description><lom:string language="ca">Data de creació de les metadades</lom:string></lom:description></lom:date></lom:contribute></lom:lifeCycle><lom:metaMetadata uniqueElementName="metaMetadata"><lom:contribute><lom:role uniqueElementName="role"><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">creator</lom:value></lom:role><lom:entity>BEGIN:VCARD VERSION:3.0 FN:Ferran Pelechano Garcia EMAIL;TYPE=INTERNET: ORG: END:VCARD</lom:entity><lom:date><lom:dateTime uniqueElementName="dateTime">2020-10-23T18:23:59.00+02:00</lom:dateTime><lom:description><lom:string language="ca">Data de creació de les metadades</lom:string></lom:description></lom:date></lom:contribute><lom:metadataSchema>LOM-ESv1.0</lom:metadataSchema><lom:language>ca</lom:language></lom:metaMetadata><lom:technical uniqueElementName="technical"><lom:otherPlatformRequirements><lom:string language="ca">editor: eXe Learning</lom:string></lom:otherPlatformRequirements></lom:technical><lom:educational><lom:intendedEndUserRole><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">learner</lom:value></lom:intendedEndUserRole><lom:context><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">presencial</lom:value></lom:context><lom:context><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">classroom</lom:value></lom:context><lom:language>ca</lom:language></lom:educational><lom:rights uniqueElementName="rights"><lom:copyrightAndOtherRestrictions uniqueElementName="copyrightAndOtherRestrictions"><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">None</lom:value></lom:copyrightAndOtherRestrictions><lom:access uniqueElementName="access"><lom:accessType uniqueElementName="accessType"><lom:source uniqueElementName="source">LOM-ESv1.0</lom:source><lom:value uniqueElementName="value">universal</lom:value></lom:accessType><lom:description><lom:string language="en">Default</lom:string></lom:description></lom:access></lom:rights></lom:lom>

</metadata> 

<organizations default="eXeAWE60c9975c25efdb59282">  

<organization identifier="eXeAWE60c9975c25efdb59282" structure="hierarchical">  

<title>Aplicacions Web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb59283" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59284">

    <title>Aplicacions Web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb59295" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59296">

    <title>Context Pedagògig</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592a7" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592a8">

    <title>Unitat 1: Tecnologies per al desenvolupament web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb592b9" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592ba">

    <title>1.0.- Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592cb" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592cc">

    <title>1.1.- Funcionament de serveis web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592cd" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592ce">

    <title>1.2.- Navegadors web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592df" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592d10">

    <title>1.3.- Llenguatges específics de disseny web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb592d11" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592d12">

    <title>1.3.1.- Llenguatge de marques: HTML</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592d13" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592d14">

    <title>1.3.2.- Fulls d'estils: CSS</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592e15" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592e16">

    <title>1.3.3.- Llenguatge Scrit de navegador: Javascript</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592e17" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592e18">

    <title>1.3.4.- Llenguatge Script de servidor: PHP</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592e19" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592e1a">

    <title>1.4.- Eines de disseny web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592f1b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592f1c">

    <title>1.5.- Relació entre pàgines web i bases de dades</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592f1d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592f1e">

    <title>1.6.- Referències</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb592f1f" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb592f20">

    <title>Unitat 2: Web 2.0 Característiques i conceptes</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb593021" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593022">

    <title>2.0.- Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593023" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593024">

    <title>2.1 - HTML Dinàmic: AJAX</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593125" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593126">

    <title>2.2 - Tipus d'aplicacions web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb593227" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593228">

    <title>2.2.1 - Marcadors Socials</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593229" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59322a">

    <title>2.2.2 - Blogs</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59322b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59322c">

    <title>2.2.3 - Fòrums</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59332d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59332e">

    <title>2.2.4 - Wikis</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59342f" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593430">

    <title>2.2.5 - Ferramentes Multimèdia Online</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593431" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593432">

    <title>2.2.6 - Xarxes Socials</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593433" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593434">

    <title>2.2.7 - Xarxes Socials Professionals</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593435" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593436">

    <title>2.3 - Referències</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593537" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593538">

    <title>Unitat 3: Aplicacions web d'escriptori</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb593639" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59363a">

    <title>3.0 - Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59363b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59363c">

    <title>3.1 - Client de Correu Electrònic</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59373d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59373e">

    <title>3.2 - Calendari Web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59373f" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593740">

    <title>3.3 - Client FTP</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593841" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593842">

    <title>3.4 - Widget d'escriptori</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593843" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593844">

    <title>3.5 - Sistema Operatiu Web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593845" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593846">

    <title>3.6 - Referències</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593947" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593948">

    <title>Unitat 4: Desplegament d'un servidor web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb593a49" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593a4a">

    <title>4.0 - Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593a4b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593a4c">

    <title>4.1 - Servidors Web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593a4d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593a4e">

    <title>4.2 - Instal·lació i Configuració Bàsica</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593b4f" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593b50">

    <title>4.3 - Aplicacions de gestió d'espais web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593b51" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593b52">

    <title>4.4 - Paquets d'instal·lació integrada</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593b53" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593b54">

    <title>4.5 - Referències</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593b55" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593b56">

    <title>Unitat 5: Gestors de contingut</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb593c57" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593c58">

    <title>5.0 - Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593c59" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593c5a">

    <title>5.1 - Sistemes Gestors de Contingut CMS</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb593c5b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593c5c">

    <title>5.1.1 - Funcions generals dels CMS</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593d5d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593d5e">

    <title>5.1.2 - Llicències d'ús dels CMS</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593d5f" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593d60">

    <title>5.1.3 - Classificació dels CMS</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593d61" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593d62">

    <title>5.1.4 - Criteris per la selecció d'un CMS concret</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593e63" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593e64">

    <title>5.2 - CMS de propòsit general: Joomla</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593e65" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593e66">

    <title>5.3 - CMS orientat a blogs: Wordpress</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593e67" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593e68">

    <title>5.4 - CMS orientat a Fòrums: phpBB</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593e69" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593e6a">

    <title>5.5 - CMS orientat a Wikis: mediaWiki</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593f6b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593f6c">

    <title>5.6 - CMS orientat a Galeries: Coppermine</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593f6d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593f6e">

    <title>5.7 - CMS orientat a e-Commerce: Prestashop</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593f6f" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593f70">

    <title>5.8 - Referències</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb593f71" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb593f72">

    <title>Unitat 6: Gestor d'arxius i ofimàtica web</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb594073" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb594074">

    <title>6.0 - Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb594075" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb594076">

    <title>6.1 - Gestors d'arxius web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb594177" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb594178">

    <title>6.2 - Aplicacions d'ofimàtica web</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb594179" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59417a">

    <title>6.3 - Referències</title>

</item>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59427b" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59427c">

    <title>Unitat 7: Gestors d'aprenentatge a distància</title>

<item identifier="ITEM-eXeAWE60c9975c25efdb59427d" isvisible="true" identifierref="RES-eXeAWE60c9975c25efdb59427e">

    <title>7.0 - Introducció</title>

</item>

<item identifier="ITEM-eXeAWE60c9975c25efdb59437f" isvisible="true" iden
```

### 📄 imsmd_v1p2p2.xsd

```xsd
<?xml version="1.0" encoding="UTF-8"?>

<xsd:schema targetNamespace="http://www.imsglobal.org/xsd/imsmd_v1p2"

            xmlns:x="http://www.w3.org/XML/1998/namespace"

            xmlns:xsd="http://www.w3.org/2001/XMLSchema"

            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

            xmlns="http://www.imsglobal.org/xsd/imsmd_v1p2"

            elementFormDefault="qualified"

            version="IMS MD 1.2.3">

   <xsd:import namespace="http://www.w3.org/XML/1998/namespace" schemaLocation="ims_xml.xsd"/>

   <!-- ******************** -->

   <!-- ** Change History ** -->

   <!-- ******************** -->

   <xsd:annotation>

      <xsd:documentation>2001-04-26 T.D.Wason. IMS meta-data 1.2 XML-Schema.                                  </xsd:documentation>

      <xsd:documentation>2001-06-07 S.E.Thropp. Changed the multiplicity on all elements to match the         </xsd:documentation>

      <xsd:documentation>Final 1.2 Binding Specification.                                                     </xsd:documentation>

      <xsd:documentation>Changed all elements that use the langstringType to a multiplicy of 1 or more        </xsd:documentation>

      <xsd:documentation>Changed centity in the contribute element to have a multiplicity of 0 or more.       </xsd:documentation>

      <xsd:documentation>Changed the requirement element to have a multiplicity of 0 or more.                 </xsd:documentation>

      <xsd:documentation> 2001-07-25 Schawn Thropp.  Updates to bring the XSD up to speed with the W3C        </xsd:documentation>

      <xsd:documentation> XML Schema Recommendation.  The following changes were made: Change the             </xsd:documentation>

      <xsd:documentation> namespace to reference the 5/2/2001 W3C XML Schema Recommendation,the base          </xsd:documentation>

      <xsd:documentation> type for the durtimeType, simpleType, was changed from timeDuration to duration.    </xsd:documentation>

      <xsd:documentation> Any attribute declarations that have use="default" had to change to use="optional"  </xsd:documentation>

      <xsd:documentation> - attr.type.  Any attribute declarations that have value ="somevalue" had to change </xsd:documentation>

      <xsd:documentation> to default = "somevalue" - attr.type (URI)                                          </xsd:documentation>

      <xsd:documentation> 2001-09-04 Schawn Thropp                                                            </xsd:documentation>

      <xsd:documentation> Changed the targetNamespace and namespace of schema to reflect version change       </xsd:documentation>

      <xsd:documentation> 2001-11-04 Chris Moffatt:                                                           </xsd:documentation>

      <xsd:documentation>  1. Changes to enable the schema to work with commercial XML Tools                  </xsd:documentation>

      <xsd:documentation>     a. Refer to the xml namespace using the "x" abbreviation instead of "xml"       </xsd:documentation>

      <xsd:documentation>     b. Remove unecessary non-deterministic constructs from schema.                  </xsd:documentation>

      <xsd:documentation>        i.e. change occurrences of "#any" to "#other"                                </xsd:documentation>

      <xsd:documentation>  2. Revert to original IMS MD version 1.2 namespace.                                </xsd:documentation>

      <xsd:documentation>     i.e. "http://www.imsglobal.org/xsd/imsmd_v1p2"                                  </xsd:documentation>

      <xsd:documentation>     This change done to support the decision to only change the XML namespace with  </xsd:documentation>

      <xsd:documentation>     major revisions of the specification ie. where the information model or binding </xsd:documentation>

      <xsd:documentation>     changes (as opposed to addressing bugs or omissions). A stable namespace is     </xsd:documentation>

      <xsd:documentation>     necessary to the increasing number of implementors.                             </xsd:documentation>

      <xsd:documentation>  3. Changed name of schema file to "imsmd_v1p2p2.xsd" and                           </xsd:documentation>

      <xsd:documentation>     version attribute to "IMS MD 1.2.3" to reflect minor version change             </xsd:documentation>

   </xsd:annotation>

   <!-- *************************** -->

   <!-- ** Attribute Declaration ** -->

   <!-- *************************** -->

   <xsd:attributeGroup name="attr.type">

      <xsd:attribute name="type" use="optional" default="URI">

         <xsd:simpleType>

            <xsd:restriction base="xsd:string">

               <xsd:enumeration value="URI"/>

               <xsd:enumeration value="TEXT"/>

            </xsd:restriction>

         </xsd:simpleType>

      </xsd:attribute>

   </xsd:attributeGroup>

   <xsd:group name="grp.any">

      <xsd:annotation>

         <xsd:documentation>Any namespaced element from any namespace may be used for an &quot;any&quot; element.  The namespace for the imported element must be defined in the instance, and the schema must be imported.  </xsd:documentation>

      </xsd:annotation>

      <xsd:sequence>

         <xsd:any namespace="##other" processContents="strict" minOccurs="0" maxOccurs="unbounded"/>

      </xsd:sequence>

   </xsd:group>

   <!-- ************************* -->

   <!-- ** Element Declaration ** -->

   <!-- ************************* -->

   <xsd:element name="aggregationlevel" type="aggregationlevelType"/>

   <xsd:element name="annotation" type="annotationType"/>

   <xsd:element name="catalogentry" type="catalogentryType"/>

   <xsd:element name="catalog" type="catalogType"/>

   <xsd:element name="centity" type="centityType"/>

   <xsd:element name="classification" type="classificationType"/>

   <xsd:element name="context" type="contextType"/>

   <xsd:element name="contribute" type="contributeType"/>

   <xsd:element name="copyrightandotherrestrictions" type="copyrightandotherrestrictionsType"/>

   <xsd:element name="cost" type="costType"/>

   <xsd:element name="coverage" type="coverageType"/>

   <xsd:element name="date" type="dateType"/>

   <xsd:element name="datetime" type="datetimeType"/>

   <xsd:element name="description" type="descriptionType"/>

   <xsd:element name="difficulty" type="difficultyType"/>

   <xsd:element name="educational" type="educationalType"/>

   <xsd:element name="entry" type="entryType"/>

   <xsd:element name="format" type="formatType"/>

   <xsd:element name="general" type="generalType"/>

   <xsd:element name="identifier" type="xsd:string"/>

   <xsd:element name="intendedenduserrole" type="intendedenduserroleType"/>

   <xsd:element name="interactivitylevel" type="interactivitylevelType"/>

   <xsd:element name="interactivitytype" type="interactivitytypeType"/>

   <xsd:element name="keyword" type="keywordType"/>

   <xsd:element name="kind" type="kindType"/>

   <xsd:element name="langstring" type="langstringType"/>

   <xsd:element name="language" type="xsd:string"/>

   <xsd:element name="learningresourcetype" type="learningresourcetypeType"/>

   <xsd:element name="lifecycle" type="lifecycleType"/>

   <xsd:element name="location" type="locationType"/>

   <xsd:element name="lom" type="lomType"/>

   <xsd:element name="maximumversion" type="minimumversionType"/>

   <xsd:element name="metadatascheme" type="metadataschemeType"/>

   <xsd:element name="metametadata" type="metametadataType"/>

   <xsd:element name="minimumversion" type="maximumversionType"/>

   <xsd:element name="name" type="nameType"/>

   <xsd:element name="purpose" type="purposeType"/>

   <xsd:element name="relation" type="relationType"/>

   <xsd:element name="requirement" type="requirementType"/>

   <xsd:element name="resource" type="resourceType"/>

   <xsd:element name="rights" type="rightsType"/>

   <xsd:element name="role" type="roleType"/>

   <xsd:element name="semanticdensity" type="semanticdensityType"/>

   <xsd:element name="size" type="sizeType"/>

   <xsd:element name="source" type="sourceType"/>

   <xsd:element name="status" type="statusType"/>

   <xsd:element name="structure" type="structureType"/>

   <xsd:element name="taxon" type="taxonType"/>

   <xsd:element name="taxonpath" type="taxonpathType"/>

   <xsd:element name="technical" type="technicalType"/>

   <xsd:element name="title" type="titleType"/>

   <xsd:element name="type" type="typeType"/>

   <xsd:element name="typicalagerange" type="typicalagerangeType"/>

   <xsd:element name="typicallearningtime" type="typicallearningtimeType"/>

   <xsd:element name="value" type="valueType"/>

   <xsd:element name="person" type="personType"/>

   <xsd:element name="vcard" type="xsd:string"/>

   <xsd:element name="version" type="versionType"/>

   <xsd:element name="installationremarks" type="installationremarksType"/>

   <xsd:element name="otherplatformrequirements" type="otherplatformrequirementsType"/>

   <xsd:element name="duration" type="durationType"/>

   <xsd:element name="id" type="idType"/>

   <!-- ******************* -->

   <!-- ** Complex Types ** -->

   <!-- ******************* -->

   <xsd:complexType name="aggregationlevelType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="annotationType" mixed="true">

      <xsd:sequence>

         <xsd:element ref="person" minOccurs="0"/>

         <xsd:element ref="date" minOccurs="0"/>

         <xsd:element ref="description" minOccurs="0"/>

         <xsd:group ref="grp.any"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="catalogentryType" mixed="true">

      <xsd:sequence>

         <xsd:element ref="catalog"/>

         <xsd:element ref="entry"/>

         <xsd:group ref="grp.any"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="centityType">

      <xsd:sequence>

         <xsd:element ref="vcard"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="classificationType" mixed="true">

      <xsd:sequence>

         <xsd:element ref="purpose" minOccurs="0"/>

         <xsd:element ref="taxonpath" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="description" minOccurs="0"/>

         <xsd:element ref="keyword" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:group ref="grp.any"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="contextType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="contributeType" mixed="true">

      <xsd:sequence>

         <xsd:element ref="role"/>

         <xsd:element ref="centity" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="date" minOccurs="0"/>

         <xsd:group ref="grp.any"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="copyrightandotherrestrictionsType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="costType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="coverageType">

      <xsd:sequence>

         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="dateType">

      <xsd:sequence>

         <xsd:element ref="datetime" minOccurs="0"/>

         <xsd:element ref="description" minOccurs="0"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="descriptionType">

      <xsd:sequence>

         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="difficultyType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="durationType">

      <xsd:sequence>

         <xsd:element ref="datetime" minOccurs="0"/>

         <xsd:element ref="description" minOccurs="0"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="educationalType" mixed="true">

      <xsd:sequence>

         <xsd:element ref="interactivitytype" minOccurs="0"/>

         <xsd:element ref="learningresourcetype" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="interactivitylevel" minOccurs="0"/>

         <xsd:element ref="semanticdensity" minOccurs="0"/>

         <xsd:element ref="intendedenduserrole" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="context" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="typicalagerange" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="difficulty" minOccurs="0"/>

         <xsd:element ref="typicallearningtime" minOccurs="0"/>

         <xsd:element ref="description" minOccurs="0"/>

         <xsd:element ref="language" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:group ref="grp.any"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="entryType">

      <xsd:sequence>

         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="generalType" mixed="true">

      <xsd:sequence>

         <xsd:element ref="identifier" minOccurs="0"/>

         <xsd:element ref="title" minOccurs="0"/>

         <xsd:element ref="catalogentry" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="language" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="description" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="keyword" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="coverage" minOccurs="0" maxOccurs="unbounded"/>

         <xsd:element ref="structure" minOccurs="0"/>

         <xsd:element ref="aggregationlevel" minOccurs="0"/>

         <xsd:group ref="grp.any"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="installationremarksType">

      <xsd:sequence>

         <xsd:element ref="langstring" minOccurs="1" maxOccurs="unbounded"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="intendedenduserroleType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name="interactivitylevelType">

      <xsd:sequence>

         <xsd:element ref="source"/>

         <xsd:element ref="value"/>

      </xsd:sequence>

   </xsd:complexType>

   <xsd:complexType name=
```

### 📄 ims_xml.xsd

```xsd
<?xml version="1.0" encoding="UTF-8"?>

<!-- filename=ims_xml.xsd -->

<xsd:schema targetNamespace="http://www.w3.org/XML/1998/namespace" xmlns="http://www.w3.org/XML/1998/namespace" xmlns:xsd="http://www.w3.org/2001/XMLSchema" elementFormDefault="unqualified">

	<!-- 2001-02-22 edited by Thomas Wason IMS Global Learning Consortium, Inc. -->

	<xsd:annotation>

		<xsd:documentation>In namespace-aware XML processors, the &quot;xml&quot; prefix is bound to the namespace name http://www.w3.org/XML/1998/namespace.</xsd:documentation>

		<xsd:documentation>Do not reference this file in XML instances</xsd:documentation>

	</xsd:annotation>

	<xsd:attribute name="lang" type="xsd:language">

		<xsd:annotation>

			<xsd:documentation>Refers to universal  XML 1.0 lang attribute</xsd:documentation>

		</xsd:annotation>

	</xsd:attribute>

	<xsd:attribute name="base" type="xsd:anyURI">

		<xsd:annotation>

			<xsd:documentation>Refers to XML Base: http://www.w3.org/TR/xmlbase</xsd:documentation>

		</xsd:annotation>

	</xsd:attribute>

	<xsd:attribute name="link" type="xsd:anyURI"/>

</xsd:schema>
```

### 📄 index.html

Aplicacions Web

Autoria

- Ferran Pelechano Garcia - [https://pelechano.com](https://pelechano.com) - Última Revisió en : 19/08/2021
- Basat en el material publicat al llibre:
  - Aplicaciones Web: CFGM Sistemas Microinformáticos y Redes
  - ISBN-13: 978-1500397456
  - ISBN-10: 1500397458
  - [https://www.amazon.es/Aplicaciones-Web-Sistemas-Microinform%C3%A1ticos-Redes/dp/1500397458](https://www.amazon.es/Aplicaciones-Web-Sistemas-Microinform%C3%A1ticos-Redes/dp/1500397458)
Introducció

En l'enginyeria de programari s'anomena aplicació web a aquella eina que els usuaris poden utilitzar accedint a un servidor web a través d'Internet mitjançant un navegador. Les aplicacions web s'han popularitzat a causa de la facilitat d'accés que permeten, usant com a client el navegador web, amb independència de el sistema operatiu utilitzat. A més, resulta molt interessant la facilitat per desplegar, actualitzar i mantenir aplicacions web sense necessitat de distribuir ni instal·lar programari en els equips dels usuaris potencials.

És per això, que s'han convertit en eines adequades per a la implantació de serveis empresarials i que, el domini de les mateixes, proporciona una sortida molt interessant per als professionals de sector informàtic formats en aquestes àrees. No hi ha empresa que no disposi d'alguna aplicació web activa i en ús, bé com a canal de comunicació amb els seus clients, bé com a element de promoció o fins i tot, com a eina de gestió interna. Webs, botigues online, blogs, plataformes de formació, presència en xarxes socials, fòrums ... infinitat de recursos que avui dia faciliten el creixement de qualsevol negoci estan accessibles a Internet a l'espera de ser utilitzats.

En conclusió, el món de les aplicacions web s'ha convertit en una àrea important dins el sector informàtic i una formació bàsica resulta imprescindible per a qualsevol professional. En aquest llibre abordarem els aspectes més rellevants referits a les tecnologies web, passant per les aplicacions d'escriptori més utilitzades i com desplegar un servidor web, per aprofundir en alguns sistemes concrets que permeten mantenir gestors de continguts, sistemes d'emmagatzematge o paquets ofimàtics en línia. Gaudiu!
Índex

- Unitat 1: Tecnologies per al Desenvolupament Web
- Unitat 2: Web 2.0: Característiques i conceptes.
- Unitat 3: Aplicacions web d'escriptori
- Unitat 4: Desplegament d'un servidor web
- Unitat 5: Gestors de Continguts
- Unitat 6: Gestors d'arxius i Ofimàtica Web
- Unitat 7: Gestors d'Aprenentatge a Distància
- **Unitat 8: Projecte Final**

### 📄 lom.xsd

```xsd
<xs:schema targetNamespace="http://ltsc.ieee.org/xsd/LOM"

           xmlns="http://ltsc.ieee.org/xsd/LOM"

           xmlns:xs="http://www.w3.org/2001/XMLSchema"

           elementFormDefault="qualified"

           version="IEEE LTSC LOM XML 1.0">

   <xs:annotation>

      <xs:documentation>

         This work is licensed under the Creative Commons Attribution-ShareAlike

         License.  To view a copy of this license, see the file license.txt,

         visit http://creativecommons.org/licenses/by-sa/2.0 or send a letter to

         Creative Commons, 559 Nathan Abbott Way, Stanford, California 94305, USA.

      </xs:documentation>

      <xs:documentation>

         This file represents a composite schema for validating

         LOM XML Instances.  This file is built by default to represent a 

         composite schema for validation of the following:          

         1) The use of LOMv1.0 base schema (i.e., 1484.12.1-2002) vocabulary

            source/value pairs only

         2) Uniqueness constraints defined by LOMv1.0 base schema

         3) No existenace of any defined extensions:

            LOMv1.0 base schema XML element extension,

            LOMv1.0 base schema XML attribute extension and 

            LOMv1.0 base schema vocabulary data type extension

         Alternative composite schemas can be assembled by selecting

         from the various alternative component schema listed below.

      </xs:documentation>

   </xs:annotation>

   <!-- Learning Object Metadata -->

   <xs:include schemaLocation="common/anyElement.xsd"/>

   <!-- LOM data element uniqueness constraints:  use one of the following         -->

   <!-- Use unique/loose.xsd to relax element uniqueness constraints               -->

   <!-- Use unique/strict.xsd to enforce element uniqueness constraints            -->

   <!-- <xs:import namespace="http://ltsc.ieee.org/xsd/LOM/unique"

              schemaLocation="unique/loose.xsd"/> -->

   <xs:import namespace="http://ltsc.ieee.org/xsd/LOM/unique"

              schemaLocation="unique/strict.xsd"/>

   <!-- Vocabulary value validation:  use one of the following                     -->

   <!-- Use vocab/loose.xsd to relax vocabulary value constraints                  -->

   <!-- Use vocab/strict.xsd to enforce the LOMv1.0 base schema vocabulary values  -->

   <!-- Use vocab/custom.xsd to enforce custom vocabulary values                   -->

   <!-- <xs:import namespace="http://ltsc.ieee.org/xsd/LOM/vocab"

              schemaLocation="vocab/loose.xsd"/> -->

   <!-- <xs:import namespace="http://ltsc.ieee.org/xsd/LOM/vocab"

              schemaLocation="vocab/strict.xsd"/> --> 

    <xs:import namespace="http://ltsc.ieee.org/xsd/LOM/vocab"

              schemaLocation="vocab/custom.xsd"/>

   <!-- Extension elements/attributes support:  use one of the following           -->

   <!-- Use extend/strict.xsd to enforce no element/attribute extension            -->

   <!-- Use extend/custom.xsd to allow element/attribute extension                 -->

   <xs:import namespace="http://ltsc.ieee.org/xsd/LOM/extend"

             schemaLocation="extend/strict.xsd"/>  

   <!--<xs:import namespace="http://ltsc.ieee.org/xsd/LOM/extend"

              schemaLocation="extend/custom.xsd"/> -->

   <xs:include schemaLocation="common/dataTypes.xsd"/>

   <xs:include schemaLocation="common/elementNames.xsd"/>

   <xs:include schemaLocation="common/elementTypes.xsd"/>

   <xs:include schemaLocation="common/rootElement.xsd"/>

   <xs:include schemaLocation="common/vocabValues.xsd"/>

   <xs:include schemaLocation="common/vocabTypes.xsd"/>

</xs:schema>
```

### 📄 lomCustom.xsd

```xsd
<!-- edited with XMLSpy v2006 rel. 3 sp2 (http://www.altova.com) by Antonio Sarasa Cabezuelo (Universidad Complutense de Madrid) -->

<xs:schema targetNamespace="http://ltsc.ieee.org/xsd/LOM" xmlns="http://ltsc.ieee.org/xsd/LOM" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ns1="http://ltsc.ieee.org/xsd/LOM/unique" xmlns:ns2="http://ltsc.ieee.org/xsd/LOM/vocab" xmlns:ns3="http://ltsc.ieee.org/xsd/LOM/extend" elementFormDefault="qualified" version="IEEE LTSC LOM XML 1.0">

	<xs:annotation>

		<xs:documentation>

         This work is licensed under the Creative Commons Attribution-ShareAlike

         License.  To view a copy of this license, see the file license.txt,

         visit http://creativecommons.org/licenses/by-sa/2.0 or send a letter to

         Creative Commons, 559 Nathan Abbott Way, Stanford, California 94305, USA.

      </xs:documentation>

		<xs:documentation>

         This file represents a composite schema for validation of the following:

         1) The use of custom vocabulary source/value pairs and 

            LOMv1.0 base schema (i.e., 1484.12.1-2002) vocabulary source/value pairs

         2) Uniqueness constraints defined by LOMv1.0 base schema

         3) The use of XML element/attribute extensions to the LOMv1.0 base schema

      </xs:documentation>

	</xs:annotation>

	<!-- Learning Object Metadata -->

	<xs:include schemaLocation="common/anyElement.xsd"/>

	<xs:import namespace="http://ltsc.ieee.org/xsd/LOM/unique" schemaLocation="unique/strict.xsd"/>

	<xs:import namespace="http://ltsc.ieee.org/xsd/LOM/vocab" schemaLocation="vocab/custom.xsd"/>

	<xs:import namespace="http://ltsc.ieee.org/xsd/LOM/extend" schemaLocation="extend/strict.xsd"/>

	<xs:include schemaLocation="common/dataTypes.xsd"/>

	<xs:include schemaLocation="common/elementNames.xsd"/>

	<xs:include schemaLocation="common/elementTypes.xsd"/>

	<xs:include schemaLocation="common/rootElement.xsd"/>

	<xs:include schemaLocation="common/vocabValues.xsd"/>

	<xs:include schemaLocation="common/vocabTypes.xsd"/>

</xs:schema>
```

### 📄 my_js.js

```js
var myTheme = {

    init : function(){

		var ie_v = $exe.isIE();

        if (ie_v && ie_v<8) return false;

        setTimeout(function(){

            $(window).resize(function() {

                myTheme.reset();

            });

        },1000);

        var l = $('<span id="nav-toggler"><a href="#" onclick="myTheme.toggleMenu(this)" class="hide-nav" id="toggle-nav" title="'+$exe_i18n.hide+'"><span>'+$exe_i18n.menu+'</span></a><span class="sep"> |</span> </span>');

        $("#topPagination .pagination").prepend(l);

        var url = window.location.href;

        url = url.split("?");

        if (url.length>1){

            if (url[1].indexOf("nav=false")!=-1) {

                myTheme.hideMenu();

            }

        }

    },

    hideMenu : function(){

        $("#siteNav").hide();

        $(document.body).addClass("no-nav");

        myTheme.params("add");

        $("#toggle-nav").attr("class","show-nav").attr("title",$exe_i18n.show);

    },

    toggleMenu : function(e){

        if (typeof(myTheme.isToggling)=='undefined') myTheme.isToggling = false;

        if (myTheme.isToggling) return false;

        

        var l = $("#toggle-nav");

        

        if (!e && $(window).width()<790 && l.css("display")!='none') return false; // No reset in mobile view

        if (!e) l.attr("class","show-nav").attr("title",$exe_i18n.show); // Reset

        

        myTheme.isToggling = true;

        

        if (l.attr("class")=='hide-nav') {       

            l.attr("class","show-nav").attr("title",$exe_i18n.show);

			$("#siteFooter").hide();

			$("#siteNav").slideUp(400,function(){

                $(document.body).addClass("no-nav");

                $("#siteFooter").show();

                myTheme.isToggling = false;

            }); 

            myTheme.params("add");

        } else {

            l.attr("class","hide-nav").attr("title",$exe_i18n.hide);

            $(document.body).removeClass("no-nav");

			$("#siteNav").slideDown(400,function(){

                myTheme.isToggling = false;

            });

            myTheme.params("delete");            

        }

        

    },

    param : function(e,act) {

        if (act=="add") {

            var ref = e.href;

            var con = "?";

            if (ref.indexOf(".html?")!=-1 || ref.indexOf(".htm?")!=-1) con = "&";

            var param = "nav=false";

            if (ref.indexOf(param)==-1) {

                ref += con+param;

                e.href = ref;                    

            }            

        } else {

            // This will remove all params

            var ref = e.href;

            ref = ref.split("?");

            e.href = ref[0];

        }

    },

    params : function(act){

        $("A",".pagination").each(function(){

            myTheme.param(this,act);

        });

    },

    reset : function() {

        myTheme.toggleMenu();        

    }    

}

$(function(){

    if ($("body").hasClass("exe-web-site")) {

        myTheme.init();

    }

});
```

### 📄 nav.css

```css
/* Colores */

body{

	color:#000; /* Cuerpo de texto */

	background:#F0F0F0; /* Color de fondo */

}

#content{

	border-color:#ADADAD; /* Border del contenedor principal */

	background:#ffffff; /* Color de fondo del contenedor principal */

	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5); /* Sombra */

}

.pagination{

	border-color:#ADADAD; /* Color de borde del bloque: borde superior */

}

.pagination a{

	background-color:#F0F0F0; /* Color de fondo de los enlaces Anterior/Siguiente */

	color:#6A3A4A; /* Color de texto de estos enlaces */

}

.pagination a:hover{

	background-color:#E8EDF1; /* Color de fondo de los enlaces Anterior/Siguiente al pasar sobre ellos */

	color:#000; /* Color de texto de estos enlaces al pasar sobre ellos */

}

#topPagination .pagination, #topPagination a{ /* En esta plantilla esta paginación se encuentra oculta por defecto (busca "Invisible content" en este mismo archivo) */

	color:#DADADA; /* Color de texto de la paginación de la cabecera */

}

#topPagination a:hover{

	color:#FFF; /* Color de texto de estos enlaces al pasar sobre ellos */

}

#main #nodeDecoration{

	text-shadow:none; /* Sombra del texto del título de la página */

}

#header{

	color:#FFFFFF; /* Título del proyecto */

	text-shadow:1px 1px 1px #466A76; /* Sombra del texto */

}

#nodeTitle{

	color:#005F6F; /* Título de cada página */

}

#skipNav a{

    background:#436974;

}

#siteNav a{

	background:#f0f0f0; /* Color fondo menú */

	color:#0F5E87; /* Enlaces del menú */

	border-color:#ADADAD; /* Borde que separa a los enlaces */

}

#siteNav a:hover{

	color:#6A3A4A; /* Enlaces al pasar sobre ellos */

	background:#fff; /* Fondo de los enlaces al pasar sobre ellos */

}

#siteNav ul ul a{

	color:#38565F; /* Menú: enlaces de segundo nivel */

}

#siteNav .active{

	color:#6A3A4A; /* Enlace activo en el menú principal */

	font-weight:bold; /* Peso fuente */

	border-color:#ADADAD;  /* Borde del enlace activo */

}

#siteNav .other-section{

	display:none; /* Eliminar si se quiere que se muestren todos los niveles */

}

/* Otras definiciones */

body{padding:0;text-align:center}

#content{width:985px;margin:0 auto 25px auto;padding-bottom:10px;text-align:left;position:relative;border-style:solid;border-width:1px;border-top:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}

#main-wrapper{padding:10px 20px 0 250px}

#main{width:100%}

#header,#emptyHeader{height:40px;background:url(my_header.jpg) no-repeat 0 0;padding:69px 20px 0 314px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}

#nodeTitle{font-size:1.6em;margin:10px 10px 0 0}

#main #nodeDecoration{background:none;padding:0;border:none}

#siteNav{width:230px;float:left;padding-right:20px;padding-bottom:59px;background:url(my_nav_bg.jpg) no-repeat 0 bottom}

* html #siteNav{width:250px} /* IE6 */

#siteNav ul,#siteNav li{margin:0;padding:0;list-style:none}

#siteNav a{display:block;padding:4px 0 4px 10px;border-width:0 0 1px 0;border-style:dotted}

* html #siteNav a{display:inline-block;width:100%} /* IE6 */

#siteNav .main-node{font-weight:bold;font-variant:small-caps;letter-spacing:1px;font-size:1.1em}

#siteNav a.main-node:hover{text-decoration:underline;background:none}

#siteNav ul ul a{padding-left:25px;font-size:.95em}

#siteNav ul ul ul a{font-size:1em;padding-left:50px}

#siteFooter{padding:5px 0 10px 250px}

.pagination{border-style:dotted;border-width:1px 0 0 0;padding-top:10px;text-align:right}

.pagination .sep{display:none}

.pagination a{padding:3px 5px;border-radius:5px;margin-left:20px}

.pagination a:hover{text-decoration:none}

#topPagination{position:absolute;top:7px;right:20px}

#topPagination .pagination{border:none}

#topPagination a{padding:0 5px;background:none}

#topPagination a:hover{text-decoration:underline}

#bottomPagination{padding:0 20px 10px 250px}

#bottomPagination .pagination{padding-top:20px}

#bottomPagination .page-counter{margin-left:20px;margin-right:0}

.iDeviceTitle{vertical-align:top}

/* Autoclear */

#content:after{content:".";display:block;clear:both;visibility:hidden;line-height:0;height:0} 

#content{display:inline-block}

html[xmlns] #content{display:block}

* html #content{height: 1%;overflow:visible}

/* No menu */

.no-nav #main-wrapper,.no-nav #bottomPagination,.no-nav #siteFooter{padding-left:20px}

.no-nav #content{background-image:none}

/* IE6 */

* html #main{width:auto}

* html #siteNav a{width:219px}

* html #siteNav ul ul a{width:204px}

* html #siteNav ul ul ul a{width:179px}

/* Search bar */

#exe-client-search-form{margin-top:10px}

#exe-client-search-text{border-color:#f0f0f0}

#exe-client-search-submit{border-color:#f0f0f0;background:#f0f0f0}

/* Responsive design */

@media all and (max-width: 1020px) {

	#content{width:100%;margin:0 auto;border:none;border-radius:0;box-shadow:none}

}

@media all and (max-width: 780px) {

	#header,#emptyHeader{background-position:-294px 0;padding:69px 10px 0 10px;font-size:1.3em}

	#siteNav{width:100%;float:none;padding:0;background-image:none}

	#siteNav .main-node{font-weight:normal;font-variant:normal;letter-spacing:0;font-size:1em}

	#main-wrapper,.no-nav #main-wrapper{padding:10px 10px 0 10px}

	#siteFooter,.no-nav #siteFooter{padding:10px;text-align:center}

	.pagination{font-weight:bold;font-size:1.1em}

	#topPagination{position:relative;top:auto;width:100%;right:auto;padding:0}

	#topPagination .pagination{padding:0;text-align:center;background:#4B737F;border-bottom:1px dotted #ADADAD}

	.no-nav #topPagination .pagination{border-top:1px solid #fff}

	#topPagination .prev,#topPagination .next,#topPagination .page-counter{display:none}

	#bottomPagination,.no-nav #bottomPagination{position:relative;padding:0 10px 10px 10px}

	#bottomPagination a{padding:3px 10px;display:inline-block}

	#bottomPagination .prev{position:absolute;left:10px;margin-left:0}

	#bottomPagination .page-counter{position:absolute;width:50%;left:25%;text-align:center;margin:0;font-weight:normal;padding-top:3px}

	#nav-toggler a,#nav-toggler a:focus{display:inline-block;padding:4px;width:80%;color:#fff;font-variant:small-caps;letter-spacing:1px;outline:none;text-decoration:none}

	#exe-client-search-form{text-align:center}

}
```

### 📄 exe_jquery.js

```js
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license*/

(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e
```

### 📄 unitat_1_tecnologies_per_al_desenvolupament_web.html

Unitat 1: Tecnologies per al desenvolupament web

Objectius

Conèixer les principals tecnologies per al desenvolupament d'aplicacions web, descrivint les seves característiques i entorns d'ús
Continguts

- Funcionament de serveis web
- Navegadors web
- Llenguatges específics de disseny web
- Eines de disseny web
- Relació entre pàgines web i bases de dades
01.01 - Conceptes inicials

Una empresa ha contactat amb un tècnic en Sistemes Microinformàtics i Xarxes perquè realitzi el disseny de la seva pàgina web. El tècnic coneix la disciplina de posicionament SEO (Search Engine Optimization) i utilitzarà pàgines web correctament estructurades que respectin els estàndards de W3C (World Wide Web Consortium) juntament amb etiquetes META informatives que facilitaran als cercadors la indexació dels continguts de les pàgines generades . Per a la creació del web, el tècnic opta per un senzill disseny amb el llenguatge de marques HTML i CSS sense utilitzar JavaScript, de manera que obtindrem un web estàtica.

1. Què són els estàndards? Val la pena fer cas de les recomanacions dels estàndards oberts per facilitar el recorregut als cercadors?
2. Què és el posicionament? Com posicionar millor les pàgines? Què és SEO, per a què serveix?
3. Què és un llenguatge de marques? Què és HTML? Què interessa més: pàgines estàtiques o dinàmiques?
4. Què és un full d'estils? Facilita el recorregut als cercadors?
5. Per a què serveix un script? Què és JavaScript?
6. Quines eines són necessàries per a dissenyar pàgines web?

### 📄 unitat_2_web_20_caracterstiques_i_conceptes.html

Unitat 2: Web 2.0 Característiques i conceptes

Objectius

Conèixer les aplicacions web més característiques de la web 2.0, descrivint-ne les característiques i entorns d'ús
Continguts

- HTML dinàmic: AJAX
- Tipus d'aplicacions web
02.01 - Conceptes Inicials

Un estudiant de fotografia vol publicar les seves fotos a Internet i consulta amb un tècnic en Sistemes Microinformàtics i Xarxes per a conèixer les millors possibilitats. El tècnic coneix les aplicacions de la Web 2.0 i li parla dels blogs. Mitjançant aquestes aplicacions web, es pot publicar i compartir la informació a través d'eines de la Web 2.0 com els marcadors socials i els sistemes de sindicació de notícies RSS.

1. Què és un blog i per a què serveix? Quins tipus de blogs hi ha? Què és un fotolog? On puc crear un blog? Costa diners crear un blog? Com puc promocionar un blog?
2. Què és un marcador social?
3. Per a què serveix el format RSS?

### 📄 unitat_3_aplicacions_web_descriptori.html

Unitat 3: Aplicacions web d'escriptori

Objectius

Conèixer i instal·lar les aplicacions web d'escriptori més habituals, descrivint-ne les característiques i entorns d'ús
Continguts

- Client de correu electrònic
- Calendari web
- Client FTP
- Widgets d'escriptori
- Sistemes operatius web: eyeOS
03.01 - Conceptes Inicials

Després d'adquirir un domini en una empresa de Hosting per al desenvolupament d'un projecte web per a una empresa, el tècnic SMX decidé configurar els serveis disponibles en el seu ordinador a través d'aplicacions d'escriptori. D'aquesta manera, no necessitarà accedir a l'webmail per consultar el correu entrant ja que configura el seu client de correu Thunderbird mitjançant els protocols POP i SMTP. A més, a través del client de FTP de Filezilla podrà actualitzar fitxers al servidor remot a mesura que vagi finalitzant els diferents apartats de el projecte.

1. Què és un webmail? En què es diferencia d'un client de correu com Thunderbird? Per a què serveixen els protocols POP i SMTP?
2. Què és un client de FTP? Què permet fer? Coneixes alguns diferents a Filezilla? Enumera alguns clients de FTP gratuïts.
3. Si no fem servir aplicacions d'escriptori, hi ha algun mètode per aconseguir els mateixos efectes? Com podries fer-ho?

### 📄 unitat_4_desplegament_dun_servidor_web.html

Unitat 4: Desplegament d'un servidor web

Objectius

Conèixer i instal·lar les aplicacions necessàries per a muntar un servidor web, descrivint les seves característiques i entorns d'ús
Continguts

- Servidors web
- Instal·lació i configuració bàsica
- Aplicacions de gestió d'espais web
- Paquets d'instal·lació integrada
Conceptes Inicials

Una empresa necessita implantar un servidor web i un sistema gestor de base de dades per donar suport a un programari específic quecontrole i dinamitzi els diferents grups de treball amb què compta. Després de consultar amb un tècnic en Sistemes Microinformàtics i Xarxes, es plantegen tres opcions diferents: Realitzar una instal·lació sobre Windows Server, on el servidor web seria IIS i el gestor de base de dades SQLServer. Realitzar una instal·lació sobre Ubuntu Server, on el servidor web seria Apache i el gestor de base de dades MySQL. Realitzar una instal·lació amb una aplicació d'instal·lació integrada anomenat XAMPP sobre Windows que inclou PHP, Apache i MySQL.

1. Què és un servidor web?
2. Què servidor web podem instal·lar en un sistema operatiu lliure i en un propietari?
3. Què és Apache?
4. Què és IIS?
5. Com s'instal·la un servidor web?
6. Què és un sistema gestor de bases de dades?
7. Com s'instal·la un sistema gestor de bases de dades?
8. Què és MySQL?
9. Què són les aplicacions d'instal·lació integrada?
10. Quins avantatges té utilitzar aplicacions d'instal·lació integrada?

### 📄 unitat_5_gestors_de_contingut.html

Unitat 5: Gestors de contingut

Objectius

Instal·lar diferents gestors de continguts, identificant les seves aplicacions i configurant segons els requeriments demandats.
Continguts

- Sistemes gestors de continguts
- Funcions, llicències, classificació
- Criteris per a la selecció
- Propòsit general: Joomla
- Blocs: Wordpress
- Fòrums: phpBB
- Wikis: mediawiki
- Galeries: Coppermine
- E-commerce: Prestashop
Conceptes Inicials

Una empresa vol incorporar a la seva pàgina corporativa un apartat de notícies multimèdia i, seguint el consell d'un Tècnic de Sistemes Microinformàtics i Xarxes, ha decidit instal·lar un gestor de continguts. Els gestors de continguts són aplicacions informàtiques que serveixen per crear, gestionar i publicar informació a Internet, de manera que la informació presentada es genera dinàmicament consultant els fitxers i les bases de dades. Hi ha una gran varietat de gestors de continguts. Es poden classificar per la llicència que tenen: llicència de codi obert, propietària ... Una altra classificació és per l'ús i també es poden classificar pel llenguatge en què estan programats. A vegades és difícil decantar-se per un gestor de continguts en concret. El tècnic està familiaritzat amb el gestor de continguts Wordpress, desenvolupat en PHP i MySQL sota llicència GPL. En principi, les necessitats que té l'empresa estarien cobertes amb Wordpress.

1. Què és un gestor de continguts?
2. Per a què serveix un gestor de continguts?
3. Què és un gestor genèric?
4. Quins tipus de gestors de continguts hi ha?
5. Què és una llicència de codi obert?
6. Què és una llicència de codi propietari?
7. Quins usos se li pot donar a un gestor de continguts?
8. Què és Wordpress?

### 📄 unitat_6_gestor_darxius_i_ofimtica_web.html

Unitat 6: Gestor d'arxius i ofimàtica web

Objectius

Instal·lar diferents serveis de gestió d'arxius web, identificar-ne les aplicacions i verificant la seva integritat.
Instal·lar i gestionar aplicacions d'ofimàtica web, descrivint les seves característiques i entorns d'ús.
Continguts

Gestors d'arxius web: Dropbox, Google Drive, Skydrive Mega, iCloud, ownCloud
Ofimàtica Web: ThinkFree Online, Office Web Apps, Zoho, Google Docs / Google Drive
Conceptes Inicials

Una empresa vol donar el salt i traslladar la seva infraestructura a un núvol privat a Internet perquè els seus empleats tinguin accés a tots els recursos independentment de la seva ubicació. Analitzant les diferents possibilitats de mercat enfocades a empresa (Dropbox, Google Drive i Skydrive principalment) es decideixen per l'ús de Google Drive ja que integra una suite ofimàtica web que els seus empleats ja coneixen. Amb aquest sistema podran mantenir els fitxers de l'empresa centralitzats en servidors de Google, evitant-se els problemes associats a la gestió de servidors propis a l'empresa. A més de tenir disponibles les dades en un entorn segur (amb backups i control de versions), els empleats podran accedir-hi independentment de la seva ubicació i consultar o omplir formularis des de les instal·lacions dels clients a través dels seus terminals mòbils.
1. Què és un núvol privat?
2. Per a què serveix un núvol privat?
3. Què és una suite ofimàtica web?
4. Què gestors d'arxius hi ha?
5. Què és el control de versions?

### 📄 unitat_7_gestors_daprenentatge_a_distncia.html

Unitat 7: Gestors d'aprenentatge a distància

Objectius

Instal·lar i gestionar sistemes de gestió d'aprenentatge a distància, descrivint l'estructura de el lloc i la jerarquia de directoris generada
Continguts

Funcions d'un LMS
Raons per utilitzar un LMS
LMS: Sakai
LMS: Blackboard
LMS: Moodle
Conceptes Inicials

Una empresa de formació presencial vol donar el salt a una plataforma en línia per complementar i ampliar la seva oferta formativa. A més dels cursos presencials pretenen implantar un LMS que aporti un accés en línia a alumnat sense restricció geogràfica. La facilitat de gestió i seguiment, permetrà avaluar i tutoritzar als alumnes, que utilitzaran sistemes de comunicació online per aprendre al seu pròpi ritme. Entre les opcions lliures, es valora la implantació de Sakai que funciona sobre Java i la plataforma Moodle que fa servir tecnologia PHP.
1. Què és un LMS?
2. Quina infraestructura necessites per implantar una aplicació web amb PHP?
3. Quina infraestructura necessites per implantar una aplicació web amb Java?

### 📄 unitat_8_projecte_final.html

Unitat 8: Projecte Final

Objectius

- Revisar i consolidar els continguts teòrics i pràctics abordats.
- Contextualitzar els continguts impartits a entorns reals de el món de les aplicacions web.
- Analitzar i resoldre casos pràctics reals en base a les necessitats particulars de les empreses.
Continguts

- Cas pràctic: Assessoria Lòpez

---

## 0.2 Presentation Folder

### 📄 06_LMS.zip

> **💡 📦 Contingut del paquet comprimit (06_LMS.zip)**
> - `06_LMS/Diapositiva1.JPG`
> - `06_LMS/Diapositiva2.JPG`
> - `06_LMS/Diapositiva3.JPG`
> - `06_LMS/Diapositiva4.JPG`
> - `06_LMS/Diapositiva5.JPG`
> - `06_LMS/Diapositiva6.JPG`
> - `06_LMS/Diapositiva7.JPG`

### 📄 05_FilesOffice.zip

> **💡 📦 Contingut del paquet comprimit (05_FilesOffice.zip)**
> - `05_FilesOffice/Diapositiva1.JPG`
> - `05_FilesOffice/Diapositiva10.JPG`
> - `05_FilesOffice/Diapositiva11.JPG`
> - `05_FilesOffice/Diapositiva12.JPG`
> - `05_FilesOffice/Diapositiva13.JPG`
> - `05_FilesOffice/Diapositiva14.JPG`
> - `05_FilesOffice/Diapositiva2.JPG`
> - `05_FilesOffice/Diapositiva3.JPG`
> - `05_FilesOffice/Diapositiva4.JPG`
> - `05_FilesOffice/Diapositiva5.JPG`
> - `05_FilesOffice/Diapositiva6.JPG`
> - `05_FilesOffice/Diapositiva7.JPG`
> - `05_FilesOffice/Diapositiva8.JPG`
> - `05_FilesOffice/Diapositiva9.JPG`

### 📄 05_CMS_54_Specific.zip

> **💡 📦 Contingut del paquet comprimit (05_CMS_54_Specific.zip)**
> - `05_CMS_54_Specific/Diapositiva1.JPG`
> - `05_CMS_54_Specific/Diapositiva10.JPG`
> - `05_CMS_54_Specific/Diapositiva11.JPG`
> - `05_CMS_54_Specific/Diapositiva12.JPG`
> - `05_CMS_54_Specific/Diapositiva13.JPG`
> - `05_CMS_54_Specific/Diapositiva14.JPG`
> - `05_CMS_54_Specific/Diapositiva15.JPG`
> - `05_CMS_54_Specific/Diapositiva16.JPG`
> - `05_CMS_54_Specific/Diapositiva17.JPG`
> - `05_CMS_54_Specific/Diapositiva18.JPG`
> - `05_CMS_54_Specific/Diapositiva19.JPG`
> - `05_CMS_54_Specific/Diapositiva2.JPG`
> - `05_CMS_54_Specific/Diapositiva20.JPG`
> - `05_CMS_54_Specific/Diapositiva21.JPG`
> - `05_CMS_54_Specific/Diapositiva22.JPG`
> - `05_CMS_54_Specific/Diapositiva23.JPG`
> - `05_CMS_54_Specific/Diapositiva24.JPG`
> - `05_CMS_54_Specific/Diapositiva25.JPG`
> - `05_CMS_54_Specific/Diapositiva26.JPG`
> - `05_CMS_54_Specific/Diapositiva27.JPG`
> - `05_CMS_54_Specific/Diapositiva28.JPG`
> - `05_CMS_54_Specific/Diapositiva29.JPG`
> - `05_CMS_54_Specific/Diapositiva3.JPG`
> - `05_CMS_54_Specific/Diapositiva30.JPG`
> - `05_CMS_54_Specific/Diapositiva4.JPG`
> - `05_CMS_54_Specific/Diapositiva5.JPG`
> - `05_CMS_54_Specific/Diapositiva6.JPG`
> - `05_CMS_54_Specific/Diapositiva7.JPG`
> - `05_CMS_54_Specific/Diapositiva8.JPG`
> - `05_CMS_54_Specific/Diapositiva9.JPG`

### 📄 05_CMS_53_Wordpress-ESP.zip

> **💡 📦 Contingut del paquet comprimit (05_CMS_53_Wordpress-ESP.zip)**
> - `05_CMS_53_Wordpress-ESP/Diapositiva1.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva10.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva100.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva101.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva102.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva103.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva104.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva105.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva106.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva107.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva108.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva109.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva11.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva12.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva13.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva14.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva15.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva16.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva17.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva18.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva19.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva2.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva20.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva21.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva22.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva23.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva24.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva25.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva26.JPG`
> - `05_CMS_53_Wordpress-ESP/Diapositiva27.JPG`

### 📄 04_CMS.zip

> **💡 📦 Contingut del paquet comprimit (04_CMS.zip)**
> - `04_CMS/Diapositiva1.JPG`
> - `04_CMS/Diapositiva10.JPG`
> - `04_CMS/Diapositiva11.JPG`
> - `04_CMS/Diapositiva12.JPG`
> - `04_CMS/Diapositiva2.JPG`
> - `04_CMS/Diapositiva3.JPG`
> - `04_CMS/Diapositiva4.JPG`
> - `04_CMS/Diapositiva5.JPG`
> - `04_CMS/Diapositiva6.JPG`
> - `04_CMS/Diapositiva7.JPG`
> - `04_CMS/Diapositiva8.JPG`
> - `04_CMS/Diapositiva9.JPG`

### 📄 03_WebServer.zip

> **💡 📦 Contingut del paquet comprimit (03_WebServer.zip)**
> - `03_WebServer/Diapositiva1.JPG`
> - `03_WebServer/Diapositiva2.JPG`
> - `03_WebServer/Diapositiva3.JPG`
> - `03_WebServer/Diapositiva4.JPG`
> - `03_WebServer/Diapositiva5.JPG`
> - `03_WebServer/Diapositiva6.JPG`
> - `03_WebServer/Diapositiva7.JPG`

### 📄 02_DesktopApps.zip

> **💡 📦 Contingut del paquet comprimit (02_DesktopApps.zip)**
> - `02_DesktopApps/Diapositiva1.JPG`
> - `02_DesktopApps/Diapositiva10.JPG`
> - `02_DesktopApps/Diapositiva11.JPG`
> - `02_DesktopApps/Diapositiva12.JPG`
> - `02_DesktopApps/Diapositiva2.JPG`
> - `02_DesktopApps/Diapositiva3.JPG`
> - `02_DesktopApps/Diapositiva4.JPG`
> - `02_DesktopApps/Diapositiva5.JPG`
> - `02_DesktopApps/Diapositiva6.JPG`
> - `02_DesktopApps/Diapositiva7.JPG`
> - `02_DesktopApps/Diapositiva8.JPG`
> - `02_DesktopApps/Diapositiva9.JPG`

### 📄 01_Technologies.zip

> **💡 📦 Contingut del paquet comprimit (01_Technologies.zip)**
> - `01_Technologies/Diapositiva1.JPG`
> - `01_Technologies/Diapositiva10.JPG`
> - `01_Technologies/Diapositiva11.JPG`
> - `01_Technologies/Diapositiva12.JPG`
> - `01_Technologies/Diapositiva13.JPG`
> - `01_Technologies/Diapositiva14.JPG`
> - `01_Technologies/Diapositiva15.JPG`
> - `01_Technologies/Diapositiva16.JPG`
> - `01_Technologies/Diapositiva17.JPG`
> - `01_Technologies/Diapositiva18.JPG`
> - `01_Technologies/Diapositiva19.JPG`
> - `01_Technologies/Diapositiva2.JPG`
> - `01_Technologies/Diapositiva20.JPG`
> - `01_Technologies/Diapositiva21.JPG`
> - `01_Technologies/Diapositiva22.JPG`
> - `01_Technologies/Diapositiva23.JPG`
> - `01_Technologies/Diapositiva24.JPG`
> - `01_Technologies/Diapositiva3.JPG`
> - `01_Technologies/Diapositiva4.JPG`
> - `01_Technologies/Diapositiva5.JPG`
> - `01_Technologies/Diapositiva6.JPG`
> - `01_Technologies/Diapositiva7.JPG`
> - `01_Technologies/Diapositiva8.JPG`
> - `01_Technologies/Diapositiva9.JPG`

### 📄 00_Presentation.zip

> **💡 📦 Contingut del paquet comprimit (00_Presentation.zip)**
> - `00_Presentation/Diapositiva1.JPG`
> - `00_Presentation/Diapositiva2.JPG`
> - `00_Presentation/Diapositiva3.JPG`
> - `00_Presentation/Diapositiva4.JPG`
> - `00_Presentation/Diapositiva5.JPG`
> - `00_Presentation/Diapositiva6.JPG`

---

## 0.3 Activities

ACTIVIDADES CONSOLIDACIÓN DE CONTENIDOS

OBJETIVOS Revisar y consolidar los contenidos teóricos y prácticos abordados. Contextualizar los contenidos impartidos a entornos reales del mundo de las aplicaciones web. Analizar y resolver casos prácticos reales en base a las necesidades particulares de las empresas.

CONTENIDOS Actividades de Unidades Caso Práctico

Aplicaciones Web ACTIVIDADES ACTIVIDADES UNIDAD 1 01.01 - Conceptos Iniciales Una empresa ha contactado con un técnico en Sistemas Microinformáticos y Redes para que realice el diseño de su página web. El técnico conoce la disciplina de posicionamiento SEO (Search Engine Optimization) y utilizará páginas web correctamente estructuradas que respeten los estándares del W3C (World Wide Web Consortium) junto con etiquetas META informativas que facilitarán a los buscadores la indexación de los contenidos de las páginas generadas. Para la creación de la web, el técnico opta por un sencillo diseño con el lenguaje de marcas HTML y CSS sin utilizar Javascript, de manera que obtendremos una web estática.

- ¿Qué son los estándares? ¿Merece la pena hacer caso de las recomendaciones de los estándares abiertos para

facilitar el recorrido a los buscadores?

- ¿Qué es el posicionamiento? ¿Cómo posicionar mejor las páginas? ¿Qué es SEO, para qué sirve?
- ¿Qué es un lenguaje de marcas? ¿Qué es HTML? ¿Qué interesa más: páginas estáticas o dinámicas?
- ¿Qué es una hoja de estilos? ¿Facilita el recorrido a los buscadores?
- ¿Para qué sirve un script? ¿Qué es JavaScript?
- ¿Qué herramientas son necesarias para diseñar páginas web?

01.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: W3C, RFC, HTTP, URL, HTML, Protocolo, Puerto, estándar, CSS, Javascript, PHP, SQL, Interfaz de usuario, browser, HTTPS, Mozilla, Motor de renderizado, Guerra de navegadores, WYSIWYG, Etiqueta HTML, Lenguaje de marcas, Indentación, AcidTest, Selector CSS, Propiedad CSS, AJAX, Lenguaje de script de navegador, Lenguaje de script de servidor, SGBD, phpMyAdmin.

01.03 - Revisión de Contenidos

- Define "Aplicación Web" y resalta las diferencias con una aplicación convencional.
- Realiza un dibujo esquemático en el que se muestre el funcionamiento de un servicio web indicando los elementos,

lenguajes y tecnologías más importantes implicadas en el proceso. Comenta el proceso completo que desencadena una petición de un cliente a un servidor web y las tareas que realiza el cliente, el servidor y el servidor de base de datos.

- Enumera diferentes navegadores web indicando el motor de renderizado que utilizan, su versión más actual, la

disponibilidad en diferentes sistemas operativos y la licencia que presentan (libre o propietaria)

- Enuncia 5 etiquetas HTML indicando su utilidad y realizando un ejemplo práctico de uso.
- Enuncia 5 etiquetas CSS indicando su utilidad y realizando un ejemplo práctico de uso.
- Explica en qué consiste las labores SEO y las principales recomendaciones que debería seguir un buen administrador

web para optimizar sus beneficios.

- Infórmate de la sintaxis necesaria para integrar un código script de navegador en un fichero HTML que muestre una

alerta con un texto determinado.

- Infórmate de la sintaxis necesaria para integrar un código script de servidor en un fichero HTML que muestre un

texto determinado junto con el día y hora del servidor.

- Enumera los principales Sistemas Gestores de Bases de Datos utilizados por aplicaciones web indicando el tipo de

licencia de que disponen (libre o propietaria)

Actividades 01.04 -Artículo de Prensa Los magos del posicionamiento en buscadores Publicado el 10-07-09, por M. Prieto http://www.expansion.com//09/empresas/tecnologia/1247172930.html Aparecer en los primeros puestos de Google es vital para incrementar el tráfico de un sitio web. Éstos son algunos de los expertos españoles que han desentrañado las claves para estar lo más arriba posible en el universo de Internet. Conocen las tripas de los buscadores. Se pasan horas al día desentrañando cómo conseguir que un sitio web sea más relevante que su competidor cuando las arañas, sobre todo la de Google, buscan en Internet. Son los magos de los buscadores.

En sus manos está que cuando alguien pone «hotel Madrid» en Google, el primer enlace sea el de su agencia de viajes. Gracias a ellos, se consigue más tráfico y más ventas. Y sin necesidad de pagar por un enlace patrocinado. En España, hay grandes expertos en posicionamiento, lo que en inglés se conoce como SEO (Search Engine Optimization), que no tienen nada que desmerecer a los gurús del sector como Rand Fishkin o Danny Sullivan, profesionales con un perfil técnico o de márketing que acumulan años de experiencia en Internet. Que se enfrentan a los buscadores como si de un reto intelectual se tratara, intentando descifrar el acertijo de por qué una web le gusta más que otra a Google. [...] La demanda de estos servicios se está incrementando en los últimos tiempos. «Con la crisis, las empresas miran más hacia estrategias SEO porque es la primera fuente de tráfico en Internet, una manera barata de conseguir visitas», explica El-Qudsi.

Sin embargo, no estamos al nivel de otros países. «Hay un retraso en España respecto a otros países debido a la menor inversión en Internet y al desconocimiento sobre el posicionamiento en buscadores, algo que vale tanto para una pyme como para una gran empresa», opina Miguel Orense, director SEO y socio fundador de Kanvas Media, y coautor, junto a Octavio Rojas, del libro SEO, cómo triunfar en buscadores. [...]

- ¿Crees que es importante estar bien posicionado en los buscadores?
- ¿Qué ideas se te ocurren para mejorar el posicionamiento en los buscadores?
- Busca información sobre los expertos en SEO.

01.05 - Práctica: Tutorial HTML Realiza las actividades guiadas correspondientes a los 6 primeros temas del tutorial sobre HTML de Aulaclic: Crear una página básica, Insertar texto con diferentes propiedades, Insertar un hiperenlace, Insertar una imagen, Trabajar con tablas. Siguiendo las indicaciones y realizando en un editor de texto enriquecido las diferentes actividades propuestas aprenderás a utilizar las principales etiquetas HTML. Documenta mediante capturas de pantalla y breves explicaciones de los progresos que realizas en el tutorial.

http://www.aulaclic.es/html/index.htm 01.06 - Práctica: Web Estática HTML + CSS Configura una página web estática completa en HTML sobre una plantilla CSS que refleje los principales requerimientos de la empresa "López Asesores". En este punto, se deben reflejar en un menú las diferentes secciones (actualidad, contacto, portada, formación, asesoría fiscal, asesoría contable y asesoría laboral ) junto con la portada de presentación y la información de contacto de la empresa. Para ello debes seguir las siguientes indicaciones

- Genera ficheros HTML con estructuras correctamente formateadas.
- Genera las etiquetas META adecuadas para informar en cada fichero HTML del Título, Palabras clave, Autor y

Descripción.

Aplicaciones Web

- Genera una estructura de carpetas que separe ficheros CSS, HTML e Imágenes.
- Personaliza los estilos CSS elegidos para utilizar los colores de la empresa: letras azules en fuente Verdana sobre

fondo blanco.

- Separa cada sección en un archivo HTML diferente.

ACTIVIDADES UNIDAD 2 02.01 - Conceptos Iniciales Un estudiante de fotografía quiere publicar sus fotos en Internet y consulta con un técnico en Sistemas Microinformáticos y Redes para conocer las mejores posibilidades. El técnico conoce las aplicaciones de la Web 2.0 y le habla de los blogs.

Mediante estas aplicaciones web, se puede publicar y compartir la información a través de herramientas de la Web 2.0 como los marcadores sociales y los sistemas de sindicación de noticias RSS.

- ¿Qué es un blog y para qué sirve? ¿Qué tipos de blogs existen? ¿Qué es un fotolog? ¿Dónde puedo crear un blog?

¿Cuesta dinero crear un blog? ¿Cómo puedo promocionar un blog?

- ¿Qué es un marcador social?
- ¿Para qué sirve el formato RSS?

02.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: Web 1.0, Web 2.0, AJAX, DHTML, DOM, XML, XMLHttpRequest, RSS, Netvibes, Folcsonomía, Marcador social, blog, foro, thread, post, spam, troll, BBS, wiki, podcast, Agregador de Noticias, Perfil, Identidad Digital, Reputación Online, Egosurfing 02.03 - Revisión de Contenidos

- Explica las características principales que presentan los 3 modelos de web: Web 1.0, Web 2.0 y Web 3.0.
- Explica el objetivo de la tecnología AJAX y en qué tecnologías se fundamenta.
- Identifica los 4 tipos principales en que podemos clasificar las aplicaciones web 2.0 indicando la utilidad de cada uno

de los tipos.

- Enuncia ejemplos concretos de servicios web 2.0 de cada las siguientes aplicaciones: marcadores sociales, blogs,

foros, wikis, herramientas multimedia online, redes sociales, redes sociales profesionales. Indica las que utilizas o has utilizado.

- Indica las principales diferencias de uso que encontramos entre las redes sociales y las redes sociales profesionales.

Indica las que utilizas o has utilizado. 02.04 - Artículo de Prensa Uno de cada dos empresarios cotillean el perfil en redes sociales de un futuro empleado Publicado el 21-08-2009 en Silicon News http://www.siliconnews.es//21/uno-cada-dos-empresarios-cotillean-perfil-redes-sociales-empleado/ El 35% confiesa haber rechazado a un candidato por la información publicada en su perfil; las fotos inadecuadas encabezan, con un 53%, las causas de estos rechazos. Los usuarios deben vigilar lo que publican en la red y los contenidos con los que llenan sus perfiles en las redes sociales, porque cada vez más los empresarios utilizan esa información para complementar los currículum de los candidatos a un puesto de trabajo y decidir a quién contratar.

Actividades El 45% de los empleadores, uno de cada dos, confiesa haber buscado en las diferentes redes sociales a los candidatos a un puesto de trabajo, según un estudio de CareerBuilder.com sobre el mercado americano que recoge Silicon News Francia. Si estas cifras son escandalosas, más lo son el número de potenciales empleados que no consiguieron su puesto de trabajo por lo que habían publicado.

Así, el 35% de los reclutadores decidieron no contratar a una persona tras ver su perfil. Las principales causas de este rechazo son las anteriores compañeros y sus clientes en el pasado. [...] La red favorita para encontrar los trapos sucios del trabajador es Facebook, con el 29% de las búsquedas. La red personal es el lugar propicio para publicar esas fotos comprometidas que el empleador busca y que el candidato no quiere que sean vistas.

En segunda posición está LinkedIn, con el 26% de las pesquisas, una cifra en cierto modo tranquilizadora ya que ésta sí es una red social profesional, en la que el usuario se expone al mercado de trabajo. La vida privada vuelve a los demás puestos del listado. MySpace aglutina el 21%, la blogosfera el 11 y Twitter el 7%.

- ¿Te parece bien rechazar a una persona por su perfil en una red social?

### 2. Si fueras un empresario, ¿investigarías a tus empleados?

- Revisa la información que publicas en las redes sociales.

02.05 - Práctica: Publicación en Google Sites Utiliza el servicio de Google Sites para publicar en Internet los contenidos generados en la página web estática realizada en la Unidad 1. Personaliza el estilo de los contenidos y enriquece la web insertando Gadgets apropiados. Para ello debes seguir las siguientes indicaciones

- Genera el alta en Google Sites y crea la dirección URL de la nueva web.
- Replica la estructura de ficheros HTML con páginas de Google Sites.
- Edita las páginas incluyendo el código HTML pertinente.
- Incluye los ficheros adjuntos utilizados.
- Personaliza el estilo y añade diferentes complementos que mejoren la web, como por ejemplo el Mapa de ubicación

en la sección de contacto o la opción de seguir en Google + las diferentes noticias de actualidad. ACTIVIDADES UNIDAD 3 03.01 - Conceptos Iniciales Después de adquirir un dominio en una empresa de Hosting para el desarrollo de un proyecto web para una empresa, el técnico SMX decidé configurar los servicios disponibles en su ordenador a través de aplicaciones de escritorio. De esta manera, no necesitará acceder al webmail para consultar el correo entrante ya que configura su cliente de correo Thunderbird mediante los protocolos POP y SMTP. Además, a través del cliente de FTP de Filezilla podrá actualizar ficheros en el servidor remoto a medida que vaya finalizando los diferentes apartados del proyecto.

- ¿Qué es un webmail? ¿En qué se diferencia de un cliente de correo como Thunderbird? ¿Para qué sirven los

protocolos POP y SMTP?

- ¿Qué es un cliente de FTP? ¿Qué permite efectuar? ¿Conoces algunos diferentes a Filezilla? Enumera algunos

clientes de FTP gratuitos.

- Si no usamos aplicaciones de escritorio, ¿existe algún método para conseguir los mismos efectos? ¿Cómo podrías

hacerlo?

Aplicaciones Web 03.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: Ciente de correo, POP, IMAP, MIME, CC, CCO, SMTP, Webmail, iCalendar, Webcalendar, FTP, FTPS, SFTP, DTP, PI, Widget, SO Web.

03.03 - Revisión de Contenidos

- Comenta los modelos de acceso a un buzón de correo en función del protocolo utilizado citando las diferencias

principales.

- Muestra las diferencias entre una aplicación cliente de correo electrónico y un webmail.
- Realiza y explica un diagrama funcional de un servicio FTP mostrando los puertos utilizados.
- Comenta los elementos fundamentales de la interfaz de usuario de un cliente FTP indicando la utilidad de cada uno

de ellos.

- Muestra la principal diferencia entre widget y app.
- Enumera las principales funcionalidades de un Sistema Operativo Web como eyeOS.

03.04 - Artículo de Prensa Lecciones en camisa ajena de eyeOS Publicado el 11 de mayo de 2013 por Sergio Montoro http://lapastillaroja.net//lecciones-eyeos/ [...] Para quienes no les suene, eyeOS es un escritorio virtual que, básicamente, ofrece una alternativa a Google Apps con la diferencia de que se trata de un cloud privado en el cual el cliente no tiene que cederle sus documentos y datos a Google, y, por consiguiente, está protegido de que cualquier día Google decida cambiar o incluso cerrar alguno de sus servicios. [...] de La Caixa avalado por Pau y Marc. Y otros 200.000 más en sucesivas ampliaciones de crédito. [...] En 2011 Michel Kisfaludi tomó la posición de CEO e Inveready lideró una ronda de financiación de 2 millones de euros en la que también participaron business angels de ESADE BAN y BCNBA. La empresa aumentó la plantilla hasta 30 empleados y empezó a tirar de su financiación para intentar expandirse más rápidamente que como lo habían hecho hasta entonces con crecimiento orgánico. El pasado 8 de mayo Pau publicó una entrada en su blog titulada Días duros, días fuertes en la que da a entender que eyeOS bien va a cerrar bien va a ser comprada a precio de saldo por algún buitre. [...] Cómo lo veo yo 1º) La neurosis estratégica sobre si ser un producto Open Source o un Cloud Privado.

Hasta la versión 2.5 lanzada en mayo de 2011 eyeOS era un producto Open Source. Supongo que en algún momento se dieron cuenta de que es muy complicado rentabilizar un producto cuyo modelo de negocio está basado en los servicios pero el cliente puede instalárselo gratis o hacer que se lo instale un tercero que no pagará ni un céntimo al fabricante. [...] 2º) Lento, lento; rápido rápido.

Muchas empresas Open Source han muerto de una inversión. Eran rentables con pocos empleados y unos ingresos modestos pero tenían una gran comunidad que pensaban que debía de poderse monetizar de alguna manera. [...] En el caso de eyeOS, aunque median 4 años entre el inicio de proyecto y la serie A, parece ser que la empresa ha estado destinando el capital riesgo

Actividades en gran medida a retribuir a un equipo de desarrollo mientras las ventas no crecían lo suficiente como para evitar el

3º) La navaja suiza que sirve para todo y no sirve para nada. Con eyeOS se pueden compartir ficheros, una funcionalidad parecida a lo que hace Dropbox. Solo que eyeOS hace, además, muchas más cosas que no hace Dropbox. ¿Por qué entonces Dropbox es una de la estrellas rutilantes del momento y eyeOS lo anda pasando mal? Por dos motivos: 1º) Dropbox of usted mismo; y 2º) porque debido a la saturación de productos que hay en el mercado tienen tendencia a triunfar más aquellos que hacen muy poquitas cosas pero esas pocas cosas las hacen espectacularmente bien. [...]

- Valora las funcionalidades de eyeOS en el entorno empresarial.
- ¿Qué argumentos presenta el autor para justificar los problemas de eyeOS? ¿Cuál es tu opinión al respecto?
- Investiga qué está pasando con el proyecto eyeOS en la actualidad.

03.05 - Práctica: Configurar un cliente de correo Instala y configura un cliente de correo Mozilla Thunderbird para utilizar el correo asignado por el dominio de Hosting.

- Explica los parámetros utilizados para su configuración.
- Comprueba que funciona adecuadamente enviándote un correo electrónico y en copia al mail del profesor.
- Incorpora al cliente de correo otra cuenta que utilices habitualmente y muestra cómo el cliente de correo puede

gestionar diferentes cuentas sobre la misma aplicación.

- Incorpora la extensión Lightning para gestión de calendarios sobre Thunderbird.
- Configura algunas categorías y explica cómo puedes dar de alta eventos y tareas.
- Finalmente, incorpora alguna fuente iCalendar externa.

http://www.icalendarios.com/ 03.06 - Práctica: Configurar un cliente de FTP Instala y configura un cliente de FTP Filezilla para utilizar el espacio asignado por el dominio de Hosting usando el usuario personalizado y la contraseña asignada.

- Explica los parámetros utilizados para su configuración.
- Comprueba que funciona adecuadamente y sube los ficheros "Datos Subdominio" a tu raíz de navegación.
- Crea una carpeta llamada ud01 y coloca los ficheros de la web estática desarrollada en la Unidad 1.
- Personaliza el mensaje de bienvenida de tu espacio en el fichero index.php mostrando tu nombre y un índice de

contenidos con hipervínculos que apunte a la web de la Unidad 1.

- Configura el fichero /phpmyadmin/config.inc.php con los datos correspondientes a tu base de datos asignada y

comprueba que tienes acceso al entorno web creando una tabla de prueba con datos de ejemplo. ACTIVIDADES UNIDAD 4 04.01 - Conceptos Iniciales Una empresa necesita implantar un servidor web y un sistema gestor de base de datos para dar soporte a un software específico quecontrole y dinamice los diferentes grupos de trabajo con los que cuenta. Tras consultar con un Técnico en Sistemas Microinformáticos y Redes, se plantean tres opciones diferentes: Realizar una instalación sobre Windows Server, dónde el servidor web sería IIS y el gestor de base de datos SQLServer. Realizar una instalación sobre Ubuntu Server, dónde el

Aplicaciones Web servidor web sería Apache y el gestor de base de datos MySQL. Realizar una instalación con una aplicación de instalación integrada llamado XAMPP sobre Windows que incluye PHP, Apache y MySQL.

- ¿Qué es un servidor web?
- ¿Qué servidor web podemos instalar en un sistema operativo libre y en uno propietario?
- ¿Qué es Apache?
- ¿Qué es IIS?
- ¿Cómo se instala un servidor web?
- ¿Qué es un sistema gestor de bases de datos?
- ¿Cómo se instala un sistema gestor de bases de datos?
- ¿Qué es MySQL?
- ¿Qué son las aplicaciones de instalación integrada?
- ¿Qué ventajas tiene utilizar aplicaciones de instalación integrada?

04.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: Servlet, Apache, IIS, Tomcat, Nginx, Lighttpd, GNU GPL, Licencia Apache, Licencia BSD, cPanel, Fantastico, ISPConfig, XAMPP, Bitnami.

04.03 - Revisión de Contenidos

- Realiza una clasificación de servidores web en función del tipo de licencia.
- Enumera y explica las principales funciones de las aplicaciones de gestión de Hosting.

### 3. Expón la funcionalidad y principales componentes del paquete XAMPP

04.04 - Artículo de Prensa Bitnami facilita la instalación de programas a la pyme Publicada el 14-08-2009, por C.R. Cabello http://www.tecnologiapyme.com/software/bitnami-facilita-la-instalacion-de-programas-a-la-pyme Muchas pymes carecen de servicios técnicos en su plantilla y sólo acuden a ellos en caso de que algo deje de funcionar.

Cuando proponemos la instalación de algún software de código libre muchas desestiman su adopción porque consideran complicado el proceso. Afortunadamente existen proyectos como Bitnami que facilita la instalación de programas a las pymes, sobre todo aquellos de código abierto.

Bitnami facilita la instalación de programas ya sea en nuestros sistema operativo, Windows, Mac o Linux pero también nos ofrece instaladores para realizarlo en entornos virtuales, en este caso para VMWare o Virtual Box, o en la nube integrada dentro de los servicios de Amazon EC2 en un futuro próximo. Por lo tanto cumple la función de realizar la instalación en entorno real, virtual o en la nube.

Los principales programas de código libre tienen su instalador para poder ejecutarlo e comenzar a utilizarlo sin problemas. Como muchos de estos productos están basados en plataformas de Apache, MySQL y PHP también nos facilitan instaladores para estos programas que serán necesarios para poder instalar nuestro CRM o nuestro Wiki para mejorar y optimizar la productividad de nuestra empresa. [...] De todas formas lo más interesante me parece quizás las opciones para instalar en entornos virtualizados con VMWare o en entornos en la nube de Amazon para un futuro próximo. De todas formas podríamos instalar una aplicación de este tipo en

Actividades cualquier alojamiento web que tuviéramos contratados ya que por lo general tienen ya instalados el soporte que necesitan para funcionar, lo cual nos permitiría llevarnos nuestro CRM o Wiki a la nube sin ningún problema. Pero de todas formas este tipo de instaladores suele gustar más a usuarios acostumbrados a instalar sofware bajo entornos Windows que es bastante sencillo y simplemente tienes que elegir determinadas opciones. Por lo tanto es adecuado para pymes sin servicio técnico que quieran probar este tipo de sofware sin complicarse demasiado en las instalaciones.

- ¿Crees que Bitnami facilita la instalación de programas? ¿Por qué?
- ¿Qué ventajas tiene utilizar Bitnami?
- Busca información sobre Bitnami e intenta virtualizar alguna aplicación.

04.05 - Práctica: Instalación de Bitnami Instala el paquete integrado Bitnami Stack y posteriormente, sobre dicho Stack agrega el paquete de Wordpress Module.

- Descarga e instala el Bitnami Stack.
- Comprueba que funciona adecuadamente indicando los servicios activos que utiliza.
- Descarga e instala sobre Bitnami el Wordpress Module.
- Comprueba que ha sido correctamente instalado accediendo a la web http://localhost.

http://bitnami.com/ ACTIVIDADES UNIDAD 5 05.01 - Conceptos Iniciales Una empresa quiere incorporar a su página corporativa un apartado de noticias multimedia y, siguiendo el consejo de un Técnico de Sistemas Microinformáticos y Redes, ha decidido instalar un gestor de contenidos. Los gestores de contenidos son aplicaciones informáticas que sirven para crear, gestionar y publicar información en Internet, de manera que la información presentada se genera dinámicamente consultando los ficheros y las bases de datos. Existe una gran variedad de gestores de contenidos. Se pueden clasificar por la licencia que tienen: licencia de código abierto, propietaria... Otra clasificación es por el uso y también se pueden clasificar por el lenguaje en el que estan programados. A veces es difícil decantarse por un gestor de contenidos en concreto. El técnico está familiarizado con el gestor de contenidos Wordpress, desarrollado en PHP y MySQL bajo licencia GPL. En principio, las necesidades que tiene la empresa estarían cubiertas con Wordpress.

- ¿Qué es un gestor de contenidos?
- ¿Para qué sirve un gestor de contenidos?
- ¿Qué es un gestor genérico?
- ¿Qué tipos de gestores de contenidos existen?
- ¿Qué es una licencia de código abierto?
- ¿Qué es una licencia de código propietario?
- ¿Qué usos se le puede dar a un gestor de contenidos?
- ¿Qué es Wordpress?

05.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: CMS, frontend, backend, Creative Commons, CC-by, CC-nc, CC-sa, CC-nd, SaaS, Cloud Computing, Servidor Dedicado, VPS.

Aplicaciones Web

Joomla: LTS, ACL, plugin, componente, módulo, plantilla.

Wordpress: Etiquetas, categorías, suscriptor, colaborador, autor, editor, administrador, trackbak, pingback.

phpBB: bbCode, emoticono, moderador, reflote, flooding, trolleo.

mediaWiki: wiki, historial

Coppermine: thumbnail, GD, ImageMagick.

Prestashop: Pasarela de pago, Smarty. 05.03 - Revisión de Contenidos

- Dibuja un diagrama en el que se observe el funcionamiento genérico de un CMS y explícalo brevemente.
- Comenta las principales ventajas y desventajas de las soluciones de código abierto.
- Comenta las principales ventajas y desventajas de las soluciones de código propietario.
- Menciona los principales criterios que debemos considerar en la elección de un CMS concreto.

05.04 - Artículo de Prensa El listado de Verificación e Infografía para un CMS amigable al SEO Publicada el 26-02-2012, por Aleyda Solis http://www.aleydasolis.com/seo/listado-verificacion-cms-amigable-seo/

Algunas de las restricciones y obstáculos técnicos más importantes en un proceso SEO son causados por el gestor de contenidos en uso: Desde la limpieza del código, pasado por la flexibilidad de optimizar elementos específicos, las opciones para organizar su estructura, hasta su escalabilidad. Es por ello fundamental la selección de un CMS que sea efectivo en proveer una solución para las necesidades presentes y posibles en un futuro cercano del sitio, dependiendo de sus características, mientras además asegura que es amigable al SEO. Por supuesto, más allá de la capacidad del propio gestor de contenidos está el conocimiento sobre qué optimizar y cómo hacerlo, que es vital, de otra forma podríamos terminar teniendo una gran plataforma que no ha sido efectivamente optimizada -lo cual desafortunadamente también ocurre frecuentemente.

Para evitar estos problemas he compilado un listado de los aspectos SEO más importantes a tomar en consideración al elegir un CMS, que podrá ayudarte a que las tareas de optimización del día de día de tu Web se faciliten. [...]

- ¿Te parece importante posicionar bien tu gestor de contenidos en internet?
- Destaca aquellos aspectos más importantes respecto al posicionamiento de tu gestor de contenidos.

05.05 - Práctica: Evaluación de CMS con OpenSourceCMS Selecciona un CMS disponible en la web de OpenSourceCMS para realizar una evaluación de sus prestaciones tanto en la parte de frontend como en la de backend.

- Justifica la elección del CMS que realizas.
- Documenta adecuadamente la revisión realizada.
- Valora las prestaciones y funcionalidades que has podido observar.

http://www.opensourcecms.com/ 05.06 - Práctica: Desarrollo de Web Corporativa con Joomla Realiza una página web completa en Joomla que refleje los principales requerimientos de la empresa "Lopez Asesores". La entrega debe consistir en la exportación de la base de datos, la carpeta de ficheros de Joomla y un documento explicativo dónde se muestre el proceso realizado y las funcionalidades implementadas. Intenta utilizar las herramientas adecuadas y

Actividades crea todos los contenidos que consideres necesarios ello. Además, contesta a las siguientes cuestiones referidas al entorno de Joomla

- Preparar Entorno: Comprueba que la instalación del CMS Joomla funciona adecuadamente en tu servidor. Destaca

los requisitos mínimos de instalación que necesitan las versiones más importantes de Joomla y las diferencias fundamentales que existe entre ellas.

- Configuración básica: Establece y documenta los principales parámetros del Panel de Control y Ajustes Globales de tu

página en Joomla, explicando los motivos que determinan su uso.

- Planificación: Realiza una planificación inicial de los contenidos y temática de tu portal Joomla. Determina cómo vas a

organizar las categorías, los menús y los principales componentes que piensas utilizar.

- Contenidos: Crea contenidos iniciales organizados por categorías para tu portal de Joomla siguiendo la planifición

propuesta anteriormente. Utiliza diferentes elementos del editor Wysiwyg introduce elementos multimedia enlazados y subidos a través del Gestor Multimedia.

- Módulos y Menús: Crea un módulo de menús para hacer accesibles las diferentes categorías de contenido definidas.

Crea un módulo de menú para que los usuarios con permisos puedan crear nuevos artículos y editar su perfil. Organiza diferentes módulos apropiadamente para ofrecer mejor servicio en tu portal Joomla.

- Componentes: Busca información sobre componentes adicionales que resulten de utilidad en tu portal Joomla.

Instala aquellos que consideres adecuados explicando la utilidad principal que te ofrece.

- Extensiones: Prepara el entorno de Joomla para un sistema bilingüe utilizando el gestor de Extensiones. Añade las

extensiones más interesantes para complementar la funcionalidad de tu portal Joomla.

- Plantillas: Instala una plantilla personalizada en tu portal Joomla.
- Usuarios: Crea diferentes perfiles de usuarios en tu portal Joomla mostrando las diferentes opciones de

administración que cada uno de ellos tiene habilitada tanto a través del backend como del frontend. 05.07 - Práctica: Desarrollo de una Web Corporativa con Wordpress Realiza una página web completa en Wordpress que refleje los principales requerimientos de la empresa "Lopez Asesores".

La entrega debe consistir en la exportación de la base de datos, la carpeta de ficheros de Wordpress y un documento explicativo dónde se muestre el proceso realizado y las funcionalidades implementadas. Intenta utilizar las herramientas adecuadas y crea todos los contenidos que consideres necesarios ello. Además, contesta a las siguientes cuestiones referidas al entorno de Wordpress

- Instalar Wordpress: Documenta la instalación de Wordpress sobre un servidor. Presenta capturas del frontend y

backend por defecto.

- Entradas y páginas: Enuncia las principales diferencias entre las entradas y las páginas en Wordpress. Presenta la

utilidad principal de cada uno de estos elementos.

- Etiquetas y Categorías: Enuncia los principales medios de clasificación de contenidos disponibles en Wordpress y sus

características principales. Explica cómo puede un usuario utilizar la clasificación para llegar al contenido deseado.

- Opciones de Publicación: Explica en detalle las opciones que tenemos disponibles en el módulo de publicación de

una entrada. Profundiza en la utilidad que proporcionan a los usuarios finales las opciones de "Estado", "Visibilidad" y "Fecha".

- Elementos Multimedia: Explica y documenta la manera de insertar/enlazar en una entrada objetos multimedia de

tipo: imagen, audio, video y documento. Construye una galería de imágenes y explica las opciones que tienes disponible para ello.

- Comentarios y Moderación: Explica los diferentes modelos de moderación de comentarios que tenemos disponibles.

Incide en las ventajas y desventajas que proporciona cada uno de ellos. Justifica cual de ellos elegirías para tu blog.

Aplicaciones Web

- Personalización de plantilla: Elige un tema que se adapte a tus necesidades y configúralo adecuadamente.

Documenta la instalación y configuración del tema. Detalla las características principales y licencia del tema elegido. Justifica la elección de widgets y su ubicación en el frontend.

- Usuarios: Explica los diferentes roles de usuario que permite utilizar Wordpress detallando los permisos que tienen

asociados. Planifica una organización de roles para una empresa informática destinada a la venta de Hardware y Software.

- Plugins y Configuración General: Examina el repositorio de plugins e indica los que consideras esenciales para tu

blog. Explica y documenta su instalación detallando la utilidad que te proporciona una vez instalado. Por otro lado, detalla las principales opciones de configuración generales que configurarías en tu blog justificando las elecciones realizadas. ACTIVIDADES UNIDAD 6 06.01 - Conceptos Iniciales Una empresa quiere dar el salto y trasladar su infraestructura a una nube privada en Internet para que sus empleados tengan acceso a todos los recursos independientemente de su ubicación. Analizando las diferentes posibilidades del mercado enfocadas a empresa (Dropbox, Google Drive y Skydrive principalmente) se deciden por el uso de Google Drive ya que integra una suite ofimática web que sus empleados ya conocen. Con este sistema podrán mantener los ficheros de la empresa centralizados en servidores de Google, evitándose los problemas asociados a la gestión de servidores propios en la empresa.

Además de tener disponibles los datos en un entorno seguro (con backups y control de versiones), los empleados podrán acceder a los mismos independientemente de su ubicación y consultar o rellenar formularios desde las instalaciones de los clientes a través de sus terminales móviles.

- ¿Qué es una nube privada?
- ¿Para qué sirve una nube privada?
- ¿Qué es una suite ofimática web?
- ¿Qué gestores de archivos existen?
- ¿Qué es el control de versiones?

06.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: Cloud Storage, Dropbox, Google Drive, Skydrive, Mega, iCloud, OwnCloud, WebDAV, Suite Ofimática, ThinkFree, Office Web Apps, Microsoft Sharepoint, Office 365, Zoho, Chrome Web Store.

06.03 - Revisión de Contenidos

- Explica las principales utilidades que ofrece el servicio de almacenamiento web Dropbox y la utilidad de la aplicación

cliente.

- Enuncia los principales beneficios que aporta Dropbox a los usuarios empresariales.
- Explica cómo se distribuye el interfaz web de Owncloud y qué opciones principales incluye.
- Comenta las opciones de visibilidad de archivos en Google Drive incidiendo en el tema de compartición de

documentos, roles de usuario y permisos. 06.04 - Artículo de Prensa Consejos para contratar (de forma segura) servicios en la nube Publicado el día 28/01/2014 en ABC Madrid

Actividades http://www.abc.es/economia/20140128/abci-proteccion-datos-201401272118.html Es un viaje sin retorno: tarde o temprano, las empresas y particulares irán migrando a la nube (o «cloud computing»). Pero, ¿qué es la nube? Es el término que se utiliza para describir una nueva forma de acceder a servicios a través de internet, ya sean profesionales o personales. La empresa paga sólo por el uso (no por la posesión) y puede acceder, desde cualquier dispositivo (móvil, ordenador, tableta) a los servicios que desee, normalmente estandarizados, para adaptarlos a las necesidades de su negocio.

En 2014, las empresas invertirán un 15% más en este tipo de plataformas, según la consultora IDC. Son muchas las ventajas. Sin embargo, también es recomendable que las empresas tengan en cuenta una serie de recomendaciones a la hora de contratar estos servicios. Hoy se celebra el Día Internacional de la Protección de Datos en Europa y la empresa Acens, líder en la prestación de soluciones de telecomunicaciones para empresa y servicios «cloud» y del grupo Telefónica, aporta los siguientes consejos para contratar servicios en la nube

No tener miedo a la nube: La consultora Forrester prevé que las inversiones en tecnología cloud crezcan un 20% en 2014. Cada vez más empresas entienden que hay más beneficios que riesgos y, sobre todo, comprenden que contratar servicios en la nube en sus diferentes variantes no es tan complicado y se puede hacer con total garantía en España.

Así en la nube como en la tierra: Las empresas y usuarios deben pedir a su proveedor de servicios en la nube las mismas exigencias de seguridad, fiabilidad, disponibilidad de servicio y garantías legales que exigen a sus proveedores de tecnología habituales. Los datos y los servicios están en la nube, pero sus responsables están en una ubicación física.

Conocer tu nube: Con la proliferación de siglas y acrónimos o incluso por las marcas que algunas empresas ponen a sus productos y servicios en ocasiones resulta complicado saber bien cómo es y qué te ofrece tu nube. Pero es importante a la hora de contratar cualquier servicio o producto saber dónde se encuentra la nube y toda la información confidencial de la empresa, y, sobre todo, con vistas al cumplimiento de la normativa en materia de protección de datos: quién, cómo y cuándo se puede acceder a los datos almacenados por el proveedor.

No dar compulsivamente a «siguiente»: Abrumados por la letra de los contratos es fácil caer en el error habitual de aceptar unas condiciones de uso que, en ocasiones, pueden guardar alguna sorpresa, especialmente en los servicios orientados a particulares como los de almacenamiento en la nube.

Proteger la seguridad de acceso: Ya sea mediante contraseñas o sistemas de autenticación de doble factor, las empresas deben poner las mismas medidas de seguridad en las vías de acceso a la información que en proteger la información en sí. Sobre todo con las opciones multiplataforma y la tendencia BYOD (según la cual, los propios empleados llevan sus propios dispositivos al lugar de trabajo para acceder en la nube a los servicios de la empresa) según Ixotype el 46% de los departamentos de TI de las empresas carece por completo de una política BYOD .

Crear «backup» de información y nubes redundantes: La consultora Gartner estima que para 2016 más del 50% de la información generada por las empresas se almacenará en nubes públicas. Contactos, informes, contratos, emails, sensible que por esa misma razón debería de estar almacenada en nubes redundantes o al menos verificar que se hacen copias de seguridad para poder recuperar la información y la actividad ante una eventual catástrofe, una caída de servicio, un robo

No dar más datos de los necesarios: Muchas veces damos más datos de los que nos piden para activar un servicio sin caer en las consecuencias que eso puede tener. Es aconsejable rellenar sólo los datos estrictamente necesarios para poder disfrutar de un servicio o producto en la nube. Y en el caso de que se nos pida información complementaria, saber con qué finalidad pretenden utilizarse esos datos, ya que cualquier uso para una finalidad distinta exigirá nuestro consentimiento informado o autorización por una ley.

Aplicaciones Web

- ¿Qué es el Cloud Computing y qué aspectos debemos tener especialmente en cuenta para su contratación?
- ¿Usarías en tu empresa el Cloud Computing o escogerías disponer de servidores propios? ¿Por qué? ¿Qué ventajas y

desventajas les ves a este tipo de soluciones? 06.05 Práctica: Características del servicio MyOwnCloud Detalla las principales ventajas y características que te ofrece el servicio de almacenamiento online MyOwnCloud. Prueba y documenta las principales funciones del sistema usando para ello el paquete integrado proporcionado por Bitnami.

06.06 Práctica: Servicios de Google Apps Crea una cuenta y detalla las diferentes aplicaciones que permite utilizar Google Apps. Realiza sobre tu espacio y muestra el uso de los siguientes elementos: Documento, Hoja de cálculo, Presentación, Formulario y Dibujo. ¿Qué vale la licencia de uso empresarial? Detalla y muestra las posibilidades de compartición de recursos y gestión de permisos que ofrece Google Apps.

ACTIVIDADES UNIDAD 7 07.01 - Conceptos Iniciales Una empresa de formación presencial quiere dar el salto a una plataforma online para complementar y ampliar su oferta formativa. Además de los cursos presenciales pretenden implantar un LMS que aporte un acceso online a alumnado sin restricción geográfica. La facilidad de gestión y seguimiento, permitirá evaluar y tutorizar a los alumnos, que utilizarán sistemas de comunicación online para aprender a su própio ritmo. Entre las opciones libres, se valora la implantación de Sakai que funciona sobre Java y la plataforma Moodle que usa tecnología PHP.

- ¿Qué es un LMS?
- ¿Qué infraestructura necesitas para implantar una aplicación web con PHP?
- ¿Qué infraestructura necesitas para implantar una aplicación web con Java?

07.02 - Glosario Realiza un pequeño glosario con los conceptos más importantes de la unidad dónde se ofrezca una definición corta de los términos utilizados: LMS, Sakai, Blackboard, Moodle, Scorm. 07.03 - Revisión de Contenidos

- Enumera las principales razones para implantar un LMS.
- Comenta las principales estructuras de cursos que permite implementar Moodle.
- Comenta los tipos de actividades de Moodle y su principal utilidad.
- Comenta los principales bloques que podemos agregar en Moodle.

07.04 - Artículo de Prensa Educación virtual Publicado en Prensa Libre el 27/02/2014 por Samuel Reyes http://www.prensalibre.com/opinion/Educacion-virtual_0_1092490753.html Actualmente, Guatemala se debate entre un problema de pobreza extrema y desnutrición crónica severa, así como con un nivel de desigualdad que lo ubica, según el índice de Gini, entre los 10 primeros a nivel mundial. Lo anterior limita su desarrollo

Actividades y lo coloca en el índice de desarrollo humano más bajo de Centroamérica, donde figura en el puesto 133 de 187 países. Expertos coinciden en que el problema del subdesarrollo obedece, en gran parte, a la escasa inversión del país en educación, salud e innovación tecnológica. La brecha educativa es descomunal, ya que existe una grave ausencia de infraestructura de apoyo a la educación, porque el acceso de la población a este servicio es dificultoso y escaso. Ante la problemática actual y los pocos avances educativos en los últimos años, una de las soluciones más inmediatas es la educación virtual a través del aprendizaje electrónico, conocido mundialmente como e-Learning.

El e-Learning es una serie de metodologías centradas en un proceso de aprendizaje a través de medios electrónicos que facilitan la interacción al estudiante y al educador, sin importar la coincidencia en el tiempo y la distancia, si existe un fuerte compromiso de ambos actores y las facilidades técnicas necesarias para la transmisión del conocimiento. Su implementación puede ser muy viable si consideramos que la mayoría de la población utiliza hoy en día teléfono celular para comunicarse, aparato que perfectamente puede usarse para el proceso de enseñanza-aprendizaje mediante sencillas aplicaciones.

Existen entornos virtuales de aprendizaje (EVAs) muy amigables y de fácil adaptación, que cuentan con libre acceso, ya que son de código abierto. Entre estos podemos mencionar Atutor, Dokeos, Chamilo, Sakai, Ilias, dotLRN y Moodle, los cuales pueden implementarse en tiempo relativamente corto, si se cuenta con un buen equipo de profesionales informáticos.

El e-Learning presenta algunas ventajas para el estudiante, que son importantes de resaltarse: a) reducción de costos de transporte, ya que el interesado no necesita movilizarse a un centro educativo; b) libertad en el manejo del tiempo, ya que aunque es necesario dedicarle atención diariamente, se puede manejar en forma más libre; c) accesibilidad desde cualquier lugar geográfico, y d), reducción de costos en librería.

Existen también cursos on line abiertos y masivos (MOCC, acrónimo en inglés para Massive Open Online Course), que se pueden encontrar en sitios virtuales como Coursera, Udacity, Edmodo, Duolingo o telescopio.galileo; estos dos últimos fueron creados por guatemaltecos, y a ellos se puede ingresar sin ningún costo, y son de muy buena calidad.

Con la tecnología actual en internet, a través del aprendizaje virtual podemos impactar rápidamente en nuestra población. Para eso se necesita voluntad de las autoridades educativas, que deben buscar soluciones viables y de bajo costo, pero sobre todo voluntad de las personas para involucrarse en procesos de aprendizaje, ya que al final de cuentas el desarrollo puede darse por la actitud de los ciudadanos y no por la voluntad política, que es difícil de lograr en este país. El desarrollo de un país principia en uno mismo.

- ¿Cómo valoras la introducción de LMS en entornos de bajo nivel de renta?
- ¿Qué ventajas le encuentras?
- ¿Qué desventajas?
- Investiga recursos MOCC abiertos y gratuitos.

07.05 - Práctica: Administración de Moodle Detalla las principales ventajas y características que te ofrece la plataforma de aprendizaje a distancia Moodle. Prueba y documenta las principales funciones del sistema usando para ello el paquete integrado proporcionado por Bitnami.

---

## 0.4 EN Article- Recovery Dossier

### 📄 Article-UD3.pdf

Webmail vs desktop email client: which should you choose? - by Milan Stanojevic [...] Email clients were a key component of every operating system since the creation of email services. Outlook Express was a default email application on older versions of Windows, therefore gaining extreme popularity with Windows users. Although Microsoft removed Outlook Express from Windows, many alternatives appeared soon after. [...] Besides bringing more complex design, webmail brought certain limitations as well. Although almost every webmail service is available for free, most of these services display ads. [...] Webmail lacks support for custom domains. [...] Desktop email clients are also a better choice if you use two or more email address. [...] This isn’t a problem for most regular users but if you rely heavily on email for communication, checking two or more webmail services several times a day and responding to emails might become a tedious process. Using a desktop email client, you can easily manage two or even more email accounts right from a single application. Accounts don’t even have to be on the same domain: you can basically have an unlimited number of email accounts across multiple domains and check them all with a single click of a button right from your desktop email client. [...] Another benefit of desktop email clients is the ability to access your email offline. When you use a desktop email client, all your emails are downloaded to your computer where you can read them, prepare replies and check attachments even if you’re not online. This is extremely useful if you’re traveling or don’t have a constant internet connection. [...] Desktop email clients are great, offering more freedom to the user with less restrictions. They might require a little more setup, though, before you start receiving your emails. With webmail services, you only have to navigate to a specific website and all your emails will be there. Although desktop clients don’t require you to visit any website or to start your browser in order to check your email, they do require some initial configuration.

[...] What is the better option: webmail or email client? It all depends on your needs. If you can’t install third-party applications and you want your emails synced across all devices, then webmail is a better choice for you. In addition, webmail offers more simplicity and that’s something many users prefer. On the other hand, standard email clients offer more advanced features such as quick access to multiple email accounts simultaneously, unlimited storage on your computer, a simple way to back up your important emails and the ability to manage and read your emails even without an internet connection.

Some email clients like OE Classic feature a simple design resembling Outlook Express, something many users are looking for. Many email clients work exceptionally well with webmail services, so if you can’t decide between a webmail and desktop email client, you can easily combine the two and have the best of both worlds.

http://windowsreport.com/webmail-desktop-email-client/  Vocabulary: List the meaning of difficult terms  Technical Concepts: List and explain briefly  Research & Write: Complete information an give your opinion.

### 📄 Article-UD2.pdf

What Is Web 3.0 and Is It Here Yet? A Brief Intro to Web 3.0 and What to Expect - by Daniel Nations Web 3.0 is a simple term with a much more complicated meaning. One of the biggest difficulties in nailing down a definition or metric for evaluating Web 3.0 is the lack of a clear, distinct definition for it, especially compared to what we already know about Web 2.0.

Most people generally have some idea that Web 2.0 is an interactive and social web facilitating collaboration between people. This is distinct from the early, original state of the web (Web 1.0) which was a static information dump where people read websites but rarely interacted with them.

If we distill the essence of change between Web 1.0 and Web 2.0, we can derive an answer. Web 3.0 is the next fundamental change both in how websites are created and more importantly, how people interact with them. When Will Web 3.0 Begin? Many people believe that the first signs of Web 3.0 are already here. But it took over ten years to make the transition from the original web to Web 2.0, and it may take just as long (or even longer) for the next fundamental change to make its mark and completely reshape the web. [...] Many people ponder the use of advanced artificial intelligence as the next big breakthrough on the web.

[...] There is already a lot of work going into the idea of a semantic web, which is a web where all information is categorized and stored in such a way that a computer can understand it as well as a human. Many view this as a combination of artificial intelligence and the semantic web. The semantic web will teach the computer what the data means, and this will evolve into artificial intelligence that can utilize that information. [...] The Ever-Present Web 3.0 This isn't as much of a prediction of what the Web 3.0 future holds as it is the catalyst that will bring it about. The ever-present Web 3.0 has to do with the increasing popularity of mobile internet devices and the merger of entertainment systems and the Web. The merging of computers and mobile devices as a source for music, movies, and more puts the internet at the center of both our work and our play.

Within a decade, internet access on our mobile devices (cell phones, smartphones, pocket PCs) has become as popular as text messaging. This will make the Internet always present in our lives: at work, at home, on the road, out to dinner, wherever we go, the Internet will be there.

This may very well evolve into some interesting ways in which the Internet will be used in the future. https://www.lifewire.com/what-is-web-3-0-3486623  Vocabulary: List the meaning of difficult terms  Technical Concepts: List and explain briefly  Research & Write: Complete information an give your opinion.

### 📄 Article-UD4.pdf

cPanel - Wikipedia cPanel is a Linux-based web hosting control panel that provides a graphical interface and automation tools designed to simplify the process of hosting a web site. cPanel utilizes a 3 tier structure that provides capabilities for administrators, resellers, and end-user website owners to control the various aspects of website and server administration through a standard web browser.

In addition to the GUI, cPanel also has command line and API-based access that allows third party software vendors, web hosting organizations, and developers to automate standard system administration processes. cPanel is designed to function either as a dedicated server or virtual private server.[...] Application- based support includes Apache, PHP, MySQL, PostgreSQL, Perl, and BIND (DNS). Email based support includes POP3, IMAP, and SMTP services. cPanel is accessed via https on port 2083. [...] To the client, cPanel provides front-ends for a number of common operations, including the management of PGP keys, crontab tasks, mail and FTP accounts, and mailing lists. Several add-ons exist, some for an additional fee, the most notable being Auto Installers like Installatron, Fantastico, SimpleScripts, Softaculous, and WHMSonic. Auto Installers are a bundle of scripts which automate the installation and update of web applications such as WordPress, SMF, phpBB, Drupal, Joomla!, Tiki Wiki CMS Groupware, Geeklog, Moodle, MagicSpam WHMCS, and ZamFoo. Fantastico is a popular Auto Installer but is losing market fast because of lack of updates and fewer number of scripts.

cPanel manages some software packages separately from the underlying operating system, applying upgrades to Apache, PHP, MySQL, Exim, FTP, and related software packages automatically. This ensures that these packages are kept up-to-date and compatible with cPanel, but makes it more difficult to install newer versions of these packages. [...] https://en.wikipedia.org/wiki/CPanel  Vocabulary: List the meaning of difficult terms  Technical Concepts: List and explain briefly  Research & Write: Complete information an give your opinion.

### 📄 Article-UD1.pdf

HTML5.1 Expected For Release In September 2016 - by Jaime Morrison (whatpixel.com) The W3C just announced updates leading to an HTML5.1 spec with a provisional public release in the next 6 months. Current developers sit on the Web Platform Working Group and have been hard at work on the next update to HTML5, initially released back in 2014 by the HTML Working Group.

There isn’t a set date, but the timeline aims to ship an HTML5.1 Recommendation by the end of September 2016. A Candidate Recommendation should be out by June 2016, followed by a W3C Consensus. From that point working drafts of HTML5.1 will be updated once per month to make it easier for others to review changes and offer new ideas.

All changes to the current spec are hosted directly on HTML5’s GitHub, accessible to anyone with Internet access. W3C has maintained all changes right on GitHub as a way to connect more directly with the dev community. The W3C makes their goals pretty clear in their HTML5.1 post

The goal isn’t perfection… but rather to make HTML 5.1 better than HTML 5.0 Tangibly this means updates that reflect the reality of HTML5. It should be a spec that’s easy to pickup and understand right from the start. This extrapolates to browser engines and web development.

All significant new features will be held as separate modules and tested before being merged into the HTML5.1 spec. This gives browser developers and authoring tools plenty of time to adjust and provide support for new tags, attributes, or rendering styles. The WICG was setup for the sole purpose of standardization and will help with every step of the new HTML5.1 specification.

This new workflow may allow for a W3C recommended stable release of HTML5.x published once per year. It’s difficult to say which exact features we can expect, but it’s good to know the W3C is working hard to get something into the public’s hands. http://whatpixel.com/html51-expected-release-rc-2016/  Vocabulary: List the meaning of difficult terms  Technical Concepts: List and explain briefly  Research & Write: Complete information an give your opinion.

---

## ✍️ Activitats pràctiques UT0

> **✍️ Activitat Pràctica 0.1 — English Level Test**
> Perform the two multiple choice questionnaires and attach the screenshot showing the results of the tests performed.
>
> [https://www.cambridgeenglish.org/es/test-your-english/for-schools/](https://www.cambridgeenglish.org/es/test-your-english/for-schools/)
>
> [https://oxfordhousebcn.com/niveles/prueba-de-nivel/ingles/](https://oxfordhousebcn.com/niveles/prueba-de-nivel/ingles/)

> **✍️ Activitat Pràctica 0.2 — Recovery 1T - UD1-2**
> Entregar per escrit activitats de Glossari i Repàs de Continguts de les UD1-2-3, i passar amb èxit un test de validació sobre aquests continguts.

> **✍️ Activitat Pràctica 0.3 — Recovery Dossier**
> Per poder recuperar el mòdul, a més de la superació d'un examen escrit, has de realitzar de forma obligatòria i amb un nivell de qualitat suficient el següent dossier de recuperació. Una vegada entregat, procediràs a defensar la feina realitzada davant del professor.
>
> Teoria
> - Realitzar un esquema (escrit a mà) de cada una de les 7 unitats didàctiques.
> - Realitza les activitats de glossari (escrit a mà) de cada una de les 7 unitats didàctiques.
> - Realitza les activitats de repàs de continguts (escrit a mà) de cada una de les 7 unitats didàctiques.
>
> Anglès
> - Realitzar el glossari i resum dels articles d'anglès proposats (escrits a mà)
>
> Pràctiques (digital)
> - Web HTML+CSS
> - Web Google Site
> - Video Wordpress Bàsic
> - Video Wordpress Avançat
>
> Projectes (digital)
> - Web completa en Wordpress del tema assignat, amb plugin actiu de tenda online.

> **✍️ Activitat Pràctica 0.4 — XAMPP Services - Recovery *****
> Realitza una guia pas a pas per configurar un Servidor Mercury Mail sobre XAMPP en el dominio "josocXXX.com" (canvia XXX per les teves inicials!). Documenta el procés explicant cada pas i documentant amb una captura de pantalla completa. Crea un PDF i entrega
>
> 1. Configurar DNS local en màquina servidora
> 2. Configurar DNS local en màquina client
> 3. Configurar Domini al Core de Mercury Mail
> 4. Configurar bústies de correu
> 5. Mostrar fitxers de correu en l'explorador de fitxers
> 6. Mostrar codificació base 64
> 7. Mostrar log POP3 amb transferència de correus
> 8. Mostrar log SMTP amb transferència de correus
> 9. Configurar una regla antispam: Subject="Minecraft"
> 10. Mostrar efectes del filtre

> **✍️ Activitat Pràctica 0.5 — AWS - Recovery *****
> Prova de Validació - Nom: __________________________________________________
>
> Anem a gastar el Learner Lab del compte d’AWS. Guarda una captura a pantalla completa de cada pas realitzat per documentar les tasques que aniràs realitzant. Finalment, envia un arxiu comprimit amb els resultats obtinguts a Aules.
>
> PART A: Crear un servidor web EC2 a AWS
>
> ### 1. Configurar instància. [1 punt]
>
> 1.1. Tipus d’instància: t2.micro. 1.2. AMI: Ubuntu Linux. 1.3. Emmagatzematge: 9GB gp2 Amazon EBS. 1.4. Grup de seguretat: habilitar SSH, HHTP i HTTPS. 1.5. Parella de claus: vockey.
>
> #### 1.6. Name: Servidor de INICIALSALUMNE
>
> ### 2. Connecta’t a la teva instància per SSH. [1’5 punt]
>
> 2.1. Instal·la un servidor web Apache. 2.2. Activa el servei perquè en iniciar la màquina s’active automàticament.
>
> #### 2.3. Comprova que està en funcionament navegant a la IP pública corresponent
>
> ### 3. Personalitza la pàgina per defecte d’Apache. [1 punt]
>
> 3.1. Edita la pàgina per defecte d’Apache perquè mostre una pàgina web normativa simple amb una etiqueta <H1> indicant el nom de servidor i un missatge de benvinguda amb una etiqueta <P>
>
> #### 3.2. Comprova que està en funcionament navegant a la IP pública corresponent
>
> ### 4. Reinicia el servidor. [1’5 punts]
>
> #### 4.1. Comprova que està en funcionament navegant a la IP pública corresponent
>
> #### 4.2. A través de la consola AWS, mostra el LOG del servidor
>
> #### 4.3. A través de la consola AWS, fes una captura del servidor
>
> Part B: EBS i Snapshots
>
> ### 1. Redimensiona emmagatzemament principal del servidor web [1’5 punts]
>
> 1.1. Emmagatzematge: 10GB gp2 Amazon EBS.
>
> ### 2. Crea un nou volum 1GB i assigna-lo al servidor web [1’5 punt]
>
> #### 2.1. Ruta /mnt/dades-segures
>
> #### 2.2. Copia el fitxer index.html d’Apache a esta ubicació
>
> ### 3. Crea un Snapshot de la unitat de 1GB [1 punt]
>
> 3.1. Després de fer l’snapshot elimina aquest fitxer de la unitat.
>
> ### 4. Restaura l’snapshot com una unitat addicional del servidor web [1 punt]
>
> #### 4.1. Ruta /mnt/dades-restaurades

> **✍️ Activitat Pràctica 0.6 — Unit 1-2 Recovery *****
> Glossari i repàs de contingut de les unitats 1 i 2. Escrit a mà!

> **✍️ Activitat Pràctica 0.7 — AWS - Recovery 2 *****
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
