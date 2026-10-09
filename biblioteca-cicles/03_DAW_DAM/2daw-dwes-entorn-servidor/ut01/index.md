---
layout: default
title: "UT1 — Unit 1 - Server-side development — Desenvolupament Web en Entorn Servidor (PHP i Laravel) | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n DAW · Grau Superior · UT1 Completa"
prev_url: "../ut00/ut0001.html"
prev_label: "⬅️ 0.1 Continguts i Recursos"
next_url: "../ut01/ut0101.html"
next_label: "1.1 U1 Server-Side Development ➡️"
---

# 📘 UT1 — Unit 1 - Server-side development (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**1.1 U1 Server-Side Development**](#ut0101) (o [obrir en pàgina individual ➡️](./ut0101.md) )
> - [**1.2 Git Recap**](#ut0102) (o [obrir en pàgina individual ➡️](./ut0102.md) )
> - [**1.3 Git Cheat Sheet**](#ut0103) (o [obrir en pàgina individual ➡️](./ut0103.md) )
> - [**✍️ Activitats pràctiques UT1**](#ut01actividades) (o [obrir en pàgina individual ➡️](./ut01actividades.md) )

---

## 1.1 U1 Server-Side Development

> **📌 🏷️ Apunt de la Unitat**
> #### Resources

> **🔗 Recurs Web: Oh my Git! (Game)**
> [**🌐 Obrir recurs extern (https://ohmygit.org/) ↗️**](https://ohmygit.org/)

> **📌 🏷️ Apunt de la Unitat**
> #### Tasks

> **🔗 Recurs Web: (Profe) Kahoot link networks**
> [**🌐 Obrir recurs extern (https://create.kahoot.it/share/40-preguntas-sobre-internet/ffb5a58c-4e58-4656-826f-0f8d94304331) ↗️**](https://create.kahoot.it/share/40-preguntas-sobre-internet/ffb5a58c-4e58-4656-826f-0f8d94304331)

---

Unit 1 Server-Side Development 2nd DAW - DWES

2 DAW - DWES Internet and Web

- Internet and Web are not the same.
- Internet is the whole infrastructure and the Web is just a service

provided through internet.

- TCP/IP, HTTP, WWW, W3C…
- But you already know this because you’ve already studied in SI…

2 DAW - DWES Internet and Web

- Right?
- Let’s check it.

2 DAW - DWES Client-Server model

- Model used in Web development.
- Client connects to server to request a service
- Server is waiting for the client’s request to offer a response.
- This response can be content of a webpage or a pre-formatted response (XML or JSON).

2 DAW - DWES Static vs Dynamic Webpages

- A webpage is static when is created by using only HTML + CSS and

doesn’t change in every reload or interaction.

- Only a browser is needed.
- https://marvlm.github.io/tdd-infographic/

2 DAW - DWES Static vs Dynamic Webpages

- A webpage is dynamic when the content can change.
- The webpage can be changed by the server (php, etc) or by the client

(JavaScript).

2 DAW - DWES Layered architecture

- Layers allow us to separate functionalities.
- Still using Client-Server model.
- Server is divided in, at least, two ”computers”.

2 DAW - DWES Layered architecture

2 DAW - DWES Model-View-Controller Pattern

2 DAW - DWES View + Controller recap

- Activity HTML + DB

2 DAW - DWES Server-side technologies

2 DAW - DWES Server-side development environment

- Java EE: JSP and Java Servlets
- PHP
- Node.js
- Python
- Others: Ruby, .NET...

2 DAW - DWES Environment and tools

- IDE - Visual Studio Code
- Live Server
- Auto Close Tag
- Auto Rename Tag
- Code Spell Checker
- Prettier - Code Formatter
- RapidAPI Client
- TODO highlight
- PHP tools
- PHP debug
- PHP awesome snippets
- Themes (material is a good one)
- Some for GIT
- …

2 DAW - DWES Environment and tools

- Server with PHP
- Apache
- Database
- MariaDB
- MySQL
- XAMPP

2 DAW - DWES Environment and tools

- We’ll use Docker
- Fast deployment
- Easy migration
- Better security
- Activity Docker
- Activity Git

2 DAW - DWES Questions?

---

## 1.2 Git Recap

Control de versions

Requisits

- Git

git --version – Deuriem gastar com a mínim la 2.13

- Plugins Atom, VS Code, Android Studio,

Eclipse, etc.

Per què cal un sistema de control de versions

- Quan jo era jove…

Control de versions

Màquina del temps

Equip vs Jefe Equip Projecte Jefaso Sabeu què? Anem a dixar la pàgina com estaba abans I si canviarem la font no quedaria més modernet? Sabeu què? Dixeu la font que estaba abans. Què eu fet? Ahir funcionaba tot bé i hui no va res!!!

Repositori central

- Repositori = Projecte
- Tot l’equip sobre un mateix servidor

Repositori distribuit

- És com treballa GIT.
- Tot el nostre equip té una copia exacta del

repositori

Exemple

Comandaments

- Desde consola

git --version

- Es gasta per a conèixer la versió de git que estem

gastant – git help

- Podem vore els detalls sobre què fa cada instrucció.

Per a poder donar una ullada a cadascun d’ells caldrà gastar git help seguit de la instrucció que volem vore

- git help commit

Comandaments

- git config --global user.name “Juanra”

Marca el nostre nom per a que aparega en els commits i comentaris.

- git config --global user.email “juanra@solvam.es”

Lo mateix però amb el correu de l’usuari.

- git config --global -e

Per a vore tot el que tenim configurat al fitxer de configuració.

Comandaments

- http://www.initializr.com/
- Anem fins a la carpeta on tenim els fitxers
- git init

Crea/Inicialitzar un nou repositori a la carpeta en la que ens trobem.

- git status

Vem l’estat dels fitxers al nostre repositori.

Comandaments

- git add rutaAFitxerOFitxers

Li diem a git que volem anyadir estos fitxers per a que ell estiga pendent dels canvis que hi ha a ells. – Després d’este punt, direm que els fitxers estan en STAGE

- git commit -m “Primer commit”

Li diem a git que volem que agafe una fotografia (snapshot) de com es troba el projecte en aquest moment.

Comandaments

- Modifica el fitxer index.html borrant-ho tot i

posant qualsevol frase i guarda els canvis.

- git checkout -- .

Sustitueix els canvis que hi ha el teu directori de treball amb l’últim contingut que troba al HEAD (cap de la rama o branch).

- Elimina ara la linia que importa el bootstrap i

la carpeta de javascript.

- Recupera-ho

Comandaments

- init
- add
- commit
- status
- checkout

Comandaments

- Crea un fitxer anomenat

readme.md a l’arrel de la carpeta i anyadeix-lo a la rama.

- git log

Mostra tots els commits que s’han fet des del més nou al més antic.

Diferents formes d’afegir fitxers

- git add index.html
- git add *.png
- git add css/

Si queremos exluir alguno

- git reset *.xml
- git add pdf/ *.pdf
- git add .
- git add -u
- git add -A
- Existeixen més comodins i formes d’afegir fitxers.

Navegant pel log i diff

- git log --oneline

Sols vegem el hash i el missatge.

- git diff

Ens diu els canvis que ha tingut el fitxer (abans de fer add

- En roig tenim el que ja no està i en verd el que

s’afegit. – Si volem vore els canvis d’un fitxer ja “en stage”, gastarem git diff --stagged

Treure fitxer de l’stage

- git reset HEAD nomFitxer

Treu un fitxer o un conjunt de fitxers (mitjançant un patró) de l’stage (estat que es queda quant fem add pero no fem commit).

Treure fitxer del commit

- git reset --soft HEAD^

Ens trau el fitxer del commit. Es molt útil en el cas de que ens equivoquem i no volem que el error estiga visible per a la resta dels usuaris. – Després de solventar l’error, tornariem a fer commit dels fitxers

- git commit -am “Actualitzem Readme”

Prepararem l’entorn per a viatjar pel temps

RESETS

- Imaginem que tenim un projecte amb

diferents commits com veiem en la imatge. El codi que apareix a l’esquerre és com l’identificador del commit.

RESETS

- git reset -- soft HEAD^ (o el hash)

És el menys destructiu de tots. Va a llevar el fitxer del commit però va a deixar els fitxers amb les modificacions a l’àrea d’stage.

- git reset --mixed 860c6c2

És el que es fa per defecte. si sols fem un reset. – Es lleva tant del commit com de l’àrea d’stage pero es mantenen les modificacions al “working directory”, és a dir, als nostres fitxers.

- git reset --hard 850c22

Per anar a un punt determinat, destruieix tot el que tenia després.

Eliminar fitxer

- Quan eliminem un fitxer, el fitxer es queda

marcat amb una D (delete).

- La instrucció que gastarem per afegir al

stage totes les actualitzacions fetes al nostre working space serà

- git add -u

Renombrar fitxer

- Què passa si renombre un fitxer que ja

teniem “commitejat”?

- Per a GIT es com haver borrat un fitxer nou i

haver creat un nou.

- git add -u

Actualitzem per a que agafe “l’eliminació”

- git add -A

Anyadix el fitxer amb el nou nom

- Ja sols ens faltaria fer el commit.

Ignorant fitxers que no dessitgem

- Hi ha vegades, que tenim fitxers que no

volem donar-li un seguiment (logs propis, fitxers temporals, etc).

- Cal crear a l’arrel del nostre repositori un

fitxer amb el nom .gitignore

.gitignore

- Cadascuna de les linies que hi ha a este

fitxer son patrons dels fitxers que volem excluir. – herois.txt – *.log – node_modules/ – i altres patrons

Repositori remot

Github / Gitlab

- És una plataforma de desarrollo col·laboratiu

de software per allotjar projectes.

- La gasten Apple, Google, Nasa, Linux,

Microsoft, Python, i molts més.

- Tenen una versió gratuita molt bona.
- Et permet tindre wikis, estadístiques,

repositoris ilimitats.

- A GitHub, si volem que siga gratis, té que ser

públic.

Crear repositori

- Creem un compte en GitHub.
- Creem un repositori.

Agregar repositori remot

- Quan estem al nostre repositori local i volem

agregar el que es coneix com un repositori remot, tindriem que gastar la primera instrucció que tenim a la diapositiva anterior.

- git remote add origin

https://github.com/Kleryth/udemy-heroes.git

- git remote -v

Comproba quin és el nostre repositori remot

Push

- git push -u origin master

Puja tot els canvis del nostre repositori a GitHub – Ens demana usuari i contrasenya (de GitHub)

- Per a comprovar que tot estiga bé, anem a

GitHub i vegem si els fitxers estan a la web.

Pull

- git pull -u origin master

Descarrega la última versió que hi ha del fitxer o fitxers a GitHub. – Quan treballem en més persones, és una bona pràctica descarregar la última versió (mitjançant un pull) abans de posar-se a treballa.

Clonar repositori

- A vegades, volem copiar un repositori que hi

ha a GitHub en el nostre local. – Canviem de ordinador. – Arriba altre company. – Volem treballar en un projecte nou ja existent

Clonar repositori

- Primer copiem la URL de GitHub en la secció

clone or download

Clonar repositori

- Desde la terminal, en la carpeta on

dessitgem clonar el repositori

- git clone direccióCopiada [nomQueVolem]

Es copia tant el repositori com tota la història que té el projecte

Rames

- Les rames són línies temporals alternatives

(amb el seus commits) a la rama principal les quals podrem modificar sense afectar a la rama principal.

- Es gasta per a mantenir diferents versions d’un

mateix producte.

- Estes rames poden creuar-se i juntar-se en un

moment determinat.

Rames Master Commit inicial Readme Adicions Nova funció

Rames

- git branch nomRama

Crearà una rama amb el nom indicat

- git branch

Ens indica les rames que tenim al projecte. – En verd tenim la rama sobre la que estem treballant actualment.

Rames

- git checkout nomRama

Marquem la rama com la rama sobre la que volem treballar.

- git branch -d nomRama

Elimina la rama que li indiquem

Merge - Unions

- Quan volem unir una rama a altra GIT va a

intentar fer-ho per nosaltres aleshores poden passar varies coses

Merge - Unions

- Fast-Forward

Git detecta que no hi ha cap canvi en la rama principal i els canvis poden ser reintegrats de forma transparent. – Cadascun dels commits formarà part de la rama principal com si mai ens haverem separat.

Merge - Unions

- Unions automàtiques

Git detecta que en la rama principal hi ha algun canvi que la rama secundaria no té però ell al intentar fer el merge, no es queixa (pot ser perquè els fitxers que es modificaren no són els mateixos. No hi ha conflictes.

Merge - Unions

- Unió manual (Amb conflictes)

Git no pot resoldre-ho de forma automàtica. – Quan fem modificacions en les mateixes línies dels mateixos fitxers, ell no es capaç de determinar quina es la bona.

Unions

- git diff ramaNova master

Comprovar les diferències entra la ramaNova i la rama principal.

- Per a unir dos rames, es sol fer desde la master.

Tornariem a la master – git checkout master – git merge ramaNova – git branch -d ramaNova

- Una vegada fet el merge, tenim les dos rames

sincronitzades per lo que podem borrar una d’elles (lo lògic es NO borrar la master)

Unions

- Provem una

Fast-Forward (no ens demana res) – Unió automàtica (tenim un commit de merge) – Unió manual (vore en atom)

Tags - Etiquetes

- Un tag és una referència a un commit

específic.

- Ho gastem normalment per a crear

“versions” de un projecte. Master Commit inicial Readme Adicions Creem executable TAG 1.0.0

Tags

- git tag nomTag

Crea una tag a partir de la versió que tenim al HEAD.

- git tag -a nomTag hashCommit

Crea una tag a partir de la versión del commit que li pasem

- git tag -d nomTag

Elimina la tag.

Tags en GitHub

- Per defecte, el git push no puja els tags a

GitHub.

- Per això cal gastar

git push --tags

---

## 1.3 Git Cheat Sheet

```php
GIT CHEAT SHEET
```

STAGE & SNAPSHOT Working with snapshots and the Git staging area

```php
git status
```

show modiﬁed ﬁles in working directory, staged for your next commit

```php
git add [file]
```

add a ﬁle as it looks now to your next commit (stage)

```php
git reset [file]
```

unstage a ﬁle while retaining the changes in working directory

```php
git diff
```

diﬀ of what is changed but not staged

```php
git diff --staged
```

diﬀ of what is staged but not yet committed

```php
git commit -m “[descriptive message]”
```

commit your staged content as a new commit snapshot SETUP Conﬁguring user information used across all local repositories

```php
git config --global user.name “[firstname lastname]”
```

set a name that is identiﬁable for credit when review version history

```php
git config --global user.email “[valid-email]”
```

set an email address that will be associated with each history marker

```php
git config --global color.ui auto
```

set automatic command line coloring for Git for easy reviewing SETUP & INIT Conﬁguring user information, initializing and cloning repositories

```php
git init
```

initialize an existing directory as a Git repository

```php
git clone [url]
```

retrieve an entire repository from a hosted location via URL BRANCH & MERGE Isolating work in branches, changing context, and integrating changes

```php
git branch
```

list your branches. a * will appear next to the currently active branch

```php
git branch [branch-name]
```

create a new branch at the current commit

```php
git checkout
```

switch to another branch and check it out into your working directory

```php
git merge [branch]
```

merge the speciﬁed branch’s history into the current one

```php
git log
```

show all commits in the current branch’s history

```php
Git is the free and open source distributed version control system that's responsible for everything GitHub
```

related that happens locally on your computer. This cheat sheet features the most important and commonly used Git commands for easy reference. INSTALLATION & GUIS With platform speciﬁc installers for Git, GitHub also provides the ease of staying up-to-date with the latest releases of the command line tool while providing a graphical user interface for day-to-day interaction, review, and repository synchronization.

GitHub for Windows https://windows.github.com GitHub for Mac https://mac.github.com For Linux and Solaris platforms, the latest release is available on the oﬃcial Git web site.

```php
Git for All Platforms
```

http://git-scm.com

education@github.com education.github.com Education Teach and learn better, together. GitHub is free for students and teach- ers. Discounts available for other educational uses. SHARE & UPDATE Retrieving updates from another repository and updating local repos

```php
git remote add [alias] [url]
```

add a git URL as an alias

```php
git fetch [alias]
```

fetch down all the branches from that Git remote

```php
git merge [alias]/[branch]
```

merge a remote branch into your current branch to bring it up to date

```php
git push [alias] [branch]
```

Transmit local branch commits to the remote repository branch

```php
git pull
```

fetch and merge any commits from the tracking remote branch TRACKING PATH CHANGES Versioning ﬁle removes and path changes

```php
git rm [file]
```

delete the ﬁle from project and stage the removal for commit

```php
git mv [existing-path] [new-path]
```

change an existing ﬁle path and stage the move

```php
git log --stat -M
```

show all commit logs with indication of any paths that moved TEMPORARY COMMITS Temporarily store modiﬁed, tracked ﬁles in order to change branches

```php
git stash
```

Save modiﬁed and staged changes

```php
git stash list
```

list stack-order of stashed ﬁle changes

```php
git stash pop
```

write working from top of stash stack

```php
git stash drop
```

discard the changes from top of stash stack REWRITE HISTORY Rewriting branches, updating commits and clearing history

```php
git rebase [branch]
```

apply any commits of current branch ahead of speciﬁed one

```php
git reset --hard [commit]
```

clear staging area, rewrite working tree from speciﬁed commit INSPECT & COMPARE Examining logs, diﬀs and object information

```php
git log
```

show the commit history for the currently active branch

```php
git log branchB..branchA
```

show the commits on branchA that are not on branchB

```php
git log --follow [file]
```

show the commits that changed ﬁle, even across renames

```php
git diff branchB...branchA
```

show the diﬀ of what is in branchA that is not in branchB

```php
git show [SHA]
```

show any object in Git in human-readable format IGNORING PATTERNS Preventing unintentional staging or commiting of ﬁles

```php
git config --global core.excludesfile [file]
```

system wide ignore pattern for all local repositories logs/ *.notes pattern*/ Save a ﬁle with desired patterns as .gitignore with either direct string matches or wildcard globs.

---

## ✍️ Activitats pràctiques UT1

> **✍️ Activitat Pràctica 1.1 — Task 1 - HTML+CSS+DB**
> DWES – U1A1
>
> Unit 1 – Task 1 HTML+CSS and DB (DML) recap
>
> Objectives
>
> - Create an HTML webpage with some styles and a form.
> - Create and populate a database.
>
> Instructions
>
> - Once finished, upload to Aules a single compressed file that includes
>
> all the files of the task.
>
> - Remember to use relative paths.
>
> Webpage creation
>
> ### 1. Using your knowledge about HTML and CSS, create a webpage with the
>
> following appearance. Remember to follow the proper folder structure.
>
> DWES – U1A1
>
> Database queries
>
> ### 2. Having the following database, perform the following queries
>
> 2.1. List all the details of the hotels 2.2. List all the details of New York’s hotels. 2.3. List all the details of guests whose address is “Houston, TX” 2.4. List the name, check in and check out of all guests. 2.5. List guests from New York ordered by surname in descendent order.
>
> 2.6. List (without repeating) the prices of the rooms from Whashington hotels.

> **✍️ Activitat Pràctica 1.2 — Task 2 - Git 1**
> Activitat 2
>
> Unitat 3. Control de versions
>
> Per a cada pas, adjunta una captura de pantalla amb la instrucció executada i el resultat obtingut.
>
> #### 1- Descarrega de la següent web http://www.initialitzr.com l’estructura de
>
> una pàgina bootstrap i guarda-la a la ruta /home/alumno/si amb el nom A1_teunom (teunom és per a que poses el teu nom)
>
> #### 2- Inicialitza un repositori dins de la ruta /home/alumno/si/A1_teunom
>
> 3- Afegeix a l’stage tots els fitxers.
>
> #### 4- Fes una snapshot (commit) de tots els fitxers. Afegeix com a comentari
>
> “Primera versió fitxers”.
>
> #### 5- Modifica el index.html per afegir com a <title> el teu nom i cognom i guarda
>
> els canvis. Restaura el fitxer index.html amb la última versió que es troba al teu repositori.
>
> #### 6- Crea un tres nous fitxers a l’arrel del repositori anomenats contacte.html,
>
> quisom.html i dades.xml. Afegeix sols els fitxers HTML a l’stage
>
> #### 7- Busca i explica totes les formes(comodins, patrons...) que tenim d’agregar
>
> fitxers a l’stage
>
> #### 8- Lleva de l’stage el fitxer contact.html
>
> 9- Torna a afegir-lo.
>
> #### 10- Explica amb les teues paraules a que ens referim quant diem que un fitxer
>
> està al “working space”, en “stage” i “al repositori”.
>
> #### 11- És obligatori que un commit tinga un comentari? Per què creus que és tan
>
> important?
