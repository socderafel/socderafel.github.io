---
layout: default
title: "UD5 — Documentació i Control de Versions (Git, GitHub, Javadoc, phpDocumentor) · Unitat Completa"
course_root: ".."
badge: "2n DAW · Grau Superior · UT7 Completa"
prev_url: "../ut08/ut08actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT8"
next_url: "../ut07/ut0701.html"
next_label: "7.1 UT 5.4 Documentació i control de versions - GitH ➡️"
---

# 📘 UD5 — Documentació i Control de Versions (Git, GitHub, Javadoc, phpDocumentor) (Unitat Completa)

> **💡 Vista unificada de la unitat**
> Aquesta pàgina integra tots els apartats teòrics, recursos i activitats pràctiques de la unitat en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**7.1 UT 5.4 Documentació i control de versions - GitH**](./ut0701.md)
- [**7.2 UT 5.3 Documentació i control de versions - Git**](./ut0702.md)
- [**7.3 UT 5.2 Documentació i control de versions - phpD**](./ut0703.md)
- [**7.4 UT 5.1 Documentació i control de versions - Java**](./ut0704.md)
- [**✍️ Activitats pràctiques UT7**](./ut07actividades.md)

---

# 7.1 UT 5.4 Documentació i control de versions - GitH

> **📌 🏷️ Apunt de la Unitat**
> #### Quinzena del 22/01/24 al 2/2/24

> **📌 🏷️ Apunt de la Unitat**
> #### Setmana del 15/1/24 al 19/1/24

---

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 5.4 Documentació i control de

versions. Repositori GitHub. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Repositori remot GitHub.......................................................................................................................3

1.1. Creació d’un repositori remot amb GitHub...................................................................................3 1.2. Pujar un repositori local a GitHub.................................................................................................5 1.2.1. Recuperar l'adreça del nostre repositori a GitHub.................................................................5 1.2.2. Crear un token per la poder connectar-nos amb el nostre compte de GitHub.......................5 1.2.3. Pujar el repositori local a GitHub..........................................................................................7 1.2.4. Baixar un projecte des de un repositori (clone)...................................................................10 1.2.5. Baixar una versió del projecte remot diferent a la local......................................................11 2 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- REPOSITORI REMOT GITHUB.

GitHub, a banda de repositori, és l’eina en línia que ens permetrà gestionar projectes utilitzant el control de versions Git (Distributed version control systems, DVCS). Existixen alternatives a GitHub, com ara, BitBucket o GitLab, però hui dia GitHub és la més popular.

#### 1.1. Creació d’un repositori remot amb GitHub

- Accedir a www.GitHub.com i registrar-se.
- Creem el nostre primer repositori remot.

Notes: Depenent de la finalitat del repositori seleccionar Public o Privat. Si és públic tothom el podrà veure. Tot i que l’aplicació aconselle crear un fitxer README, no fer-ho ja que no volem que el punt de partida del nostre projecte siga GitHub, sinó el projecte que tenim emmagatzemat al nostre ordenador.

3 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Tot seguit ens apareixerà l’entorn del nostre repositori amb tota mena de configuracions. Afegir o modificar arxius manualment. Des de GitHub podem agregar o editar els arxius del nostre projecte (encara que no és la forma recomanada).

Per exemple, si hem creat el projecte amb un arxiu Readme.md (o qualsevol altre fitxer del nostre projecte), podem fer clic en aquest, obrir-lo i editar-lo. 4 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Pestanya settings. Si fem clic en Configuració, podrem canviar algunes configuracions com ara

- Afegir col·laboradors (és a dir, altres usuaris de GitHub) al nostre projecte,

perquè també puguen fer-hi canvis.

- Eliminar el repositori, o canviar la seua visibilitat (pública/privada).
- ...

1.2. Pujar un repositori local a GitHub. 1.2.1. Recuperar l'adreça del nostre repositori a GitHub. L’adreça és recupera fàcilment anat a la pestanya <> Code del nostre repositori.

#### 1.2.2. Crear un token per la poder connectar-nos amb el nostre compte de

GitHub. Les polítiques de seguretat de GitHut han canviat i ara, por poder accedir al repositori des de qualsevol IDE amb Git, haurem de crear un token.

- Des de qualsevol pagina de github fer clic sobre la icona del vostre perfil.
- Des de qualsevol pagina de github fer clic sobre la icona del vostre perfil. S’obrirà un

menú i seleccionar «settings».

### 3. S’obrirà una pàgina. Al menú lateral esquerre, baix del tot seleccionar <Developer

settings>. 5 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- Dins de «Personal acces tokens» seleccionar «Tokens (classic)».
- Dins de «Generate new token» seleccionar «Generate new token (classic)».
- Dins de «Generate new token» seleccionar «Generate new token (classic)».

### 7. S’obrirà una nova pàgina. Introduir un comentari en «Note», definir una data

d’expiració del token. Seleccionar totes les opcions, i al final del document clic en «Generate token».

### 8. Apuntar el codi, ja que ens farà falta a l’hora de connectar-nos des de Netbeans a

GitHub. 6 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 1.2.3. Pujar el repositori local a GitHub. Fem Team → Remote → Push Introduïm la url del repositori, l’usuari i la contrasenya del token. Seleccionem allò que volem pujar al GitHub i li donem a continuar.

Seleccionem les rames que volem pujar i finalitzem. 7 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Confirmen si volem pujar la rama del nostre projecte (o qualsevol altra cosa que podria generar duplicitat entre funcionalitats de Git i GitHub). Si consultem el log de netbeans podrem veure si hi ha hagut problemes a l’hora de pujar (push) el projecte.

Si consultem l’estat a GitHub veurem el projecte i tota la seua activitat. 8 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Activitat a les rames: Projecte: 9 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Etiquetes: Canvis entre rames: 1.2.4. Baixar un projecte des de un repositori (clone). Si no tenim el projecte al nostre ordenador o simplement l’hem perdut podem recuperar- lo fàcilment des de GitHub fent Team → Git → Clone 10 / 11

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 1.2.5. Baixar una versió del projecte remot diferent a la local. Si volem recuperar el projecte remot per a comparar-lo amb el projecte local, fem Team → Remote → pull. El projecte es descarregarà i posat el cas de que hi hagen conflictes apareixeran al Neabeans.

11 / 11

---

# 7.2 UT 5.3 Documentació i control de versions - Git

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 5.3 Documentació i control de

versions. Control de versions amb Git. Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció al control de versions.........................................................................................................3
- Terminologia utilitzada en un repositori...............................................................................................3
- Classificació dels repositoris.................................................................................................................6

3.1. Locals............................................................................................................................................6 3.2. Centralitzats...................................................................................................................................6 3.3. Distribuïts......................................................................................................................................7

- Introducció a git....................................................................................................................................8

4.1. Estats de GIT.................................................................................................................................9 4.2. Fluxos de treball amb Git..............................................................................................................9 4.3. Instal·lació i configuració de Git.................................................................................................11 4.4. Utilitzar Git amb Netbeans..........................................................................................................13 4.4.1. Inicialitzar Git......................................................................................................................13 4.4.2. Guardar projecte (commit)..................................................................................................14 4.4.3. Modificar projecte...............................................................................................................15 4.4.4. Etiquetes..............................................................................................................................17 4.4.5. Checkout. Recuperar una versió anterior del projecte.........................................................18 4.4.6. Branch de un projecte..........................................................................................................19 4.4.7. Fusió de rames (merge branch)............................................................................................21 2 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### 1. INTRODUCCIÓ AL CONTROL DE VERSIONS

Necessitat: Un sistema de control de versions resulta imprescindible a l’hora d’afrontar la implementació de qualsevol aplicació mínimament complexa, ja que proporcionen als desenvolupadors l’opció de desfer canvis i tornar a versions anteriors del desenvolupament fàcilment.

Finalitat: El control de versions permet mantenir un registre de canvis en un conjunt de documents al llarg del temps, on s’identifica cada versió del document amb un nombre, la data i hora en la qual s’ha generat la revisió i el nom de la persona que ha fet els canvis.

Repositori: Es el lloc on es desen els conjunts de canvis. Normalment es tracta d’un directori on es troben tots els fitxers del projecte amb el seu número de versió. Cada cop que s’afegeixen canvis al repositori es crea una nova entrada a l’historial de canvis. Cal distingir entre els repositoris locals, centralitzats i/o distribuïts, els quals hauran se sincronitzar-se de manera que diferents usuaris poden treballar en el mateix projecte i els mateixos fitxers.,

- TERMINOLOGIA UTILITZADA EN UN REPOSITORI.

### 1. Repositori (branch): Lloc d'emmagatzematge de les diferents versions del

programari que està desenvolupant l'equip de treball.

### 2. Rama (branch): Cada programador té la seua còpia de treball en local i realitza

modificacions sobre una branca en concret del projecte. En cas que els canvis siguen correctes, es poden pujar al repositori notificant el canvi.

### 3. Tronc (trunk): L'única línia de desenvolupament que no és una branca (a vegades

també anomenada línia base, línia principal o màster).

- Cap (head): També es diu tip i es referix a l'última confirmació, ja siga en el tronc o

en una branca.

- Còpia de treball (working copy): Còpia local dels fitxers del repositori.

### 6. Conflicte (conlict): Es produïx quan diversos programadors han fet diversos canvis

en la mateixa branca del programari i són contradictoris.

### 7. Canvi (change): Es realitza quan s'ha modificat la part assignada a un programador

i és pujada al repositori controlant este canvi el control de versions.

### 8. Revisió (revision): És una versió del programari. Permet al control de versions

controlar les diferents revisions del programari realitzades.

### 9. Confirmar (commit): Confirmació que s'han fet diversos canvis en el mateix

document. 10.Etiqueta (tag): Els tags permeten identificar de manera fàcil revisions importants en el projecte.

### 11. Desplegar (checkout): Crear una còpia de treball local des del repositori. Un usuari

pot especificar una revisió en concret o obtindre l'última. 3 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 12.Bifurcació (fork): Consisteix a crear un nou repositori a partir d’un altre. Aquest repositori, no està lligat al repositori original i es tracta com un repositori diferent. 13.Clonar (clone): Crear un nou repositori que és una còpia idèntica d’un altre.

14.Pull: És l’acció de copiar els canvis d’un repositori (habitualment remot) en el repositori local (aquesta acció pot provocar conflictes). 15.Push o fetch: Accions utilitzades per a afegir els canvis del repositori local a un altre repositori (habitualment remot) (aquesta acció pot provocar conflictes.

16.Sincronització (update o sync): Acció de combinar els canvis fets al repositori amb la còpia de treball local. 17.Bloqueig (lock): Alguns sistemes de control de versions en lloc d’utilitzar el sistema de fusions el que fan és bloquejar els fitxers en ús, de manera que només pot haver- hi un sol usuari modificant un fitxer en un moment donat.

18.Versió (version o revision): Conjunt de canvis en un moment concret del temps. Es crea una versió cada vegada que s’afegeixen canvis a un repositori. 19.Fusionar (merge): La fusió és una operació en la qual s'apliquen dos tipus de canvis en un arxiu o conjunt d'arxius.

Alguns escenaris d'exemple són els següents

- Un usuari que treballa en un conjunt d'arxius, actualitza o sincronitza la seua còpia

de treball amb els canvis realitzats i confirmats, per altres usuaris, en el repositori.

- Un usuari intenta confirmar arxius que han sigut actualitzats per altres usuaris des

de l'últim desplegament, i el programari de control de versions integra automàticament els arxius (en general, després de preguntar-li a l'usuari si s'ha de procedir amb la integració automàtica).

- Un conjunt d'arxius es bifurca, un problema que existia abans de la ramificació es

treballa en una nova branca, i la solució es combina després en l'altra branca.

- Es crea una branca, el codi és editat i la branca s'incorpora més tard en un únic

tronc. 4 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 5 / 21 Representació de les revisions d’un repositori amb múltiples branques.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- CLASSIFICACIÓ DELS REPOSITORIS.

3.1. Locals. Els canvis són guardats localment i no es compartixen amb ningú. Esta arquitectura és l'antecessora de les repositoris remots i distribuïts. 3.2. Centralitzats. Existix un repositori centralitzat de tot el codi amb un únic responsable. Es faciliten les tasques administratives a canvi de reduir flexibilitat, perquè totes les decisions fortes (com crear una nova branca) necessiten l'aprovació del responsable del repositori.

6 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 3.3. Distribuïts. Cada usuari té el seu propi repositori. Els diferents repositoris poden intercanviar i mesclar revisions entre ells. És freqüent l'ús d'un repositori central, que servix de punt de sincronització dels diferents repositoris locals.

Avantatges de sistemes distribuïts

- No és necessari estar connectat per a guardar canvis.
- Possibilitat de continuar treballant si el repositori remot no està accessible.
- El repositori central està més lliure de branques de proves.
- Es necessiten menys recursos per al repositori remot.
- Més flexibilitat en permetre gestionar cada repositori personal com es vullga.

7 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ A GIT.

Creat per Linus Torvalds, Git és el repositori de codi més popular entre els programadors de tot el món. És la primera opció de quasi el 90% dels desenvolupadors, seguit a molta distància i com segona opció per Subversion (16%).

```html
Git és diferencia de la resta en el mode en què modela les seues dades.
```

La majoria dels altres sistemes emmagatzemen la informació com una llista de canvis en els arxius, mentre que Git modela les seues dades, més com un conjunt d'instantànies d'un mini sistema d'arxius. Dins dels beneficis d'utilitzar Git, comptem entre d’altres, poder treballar amb el major repositori de codi obert del món que és GitHub que a més, permet compartir codi de manera fàcil i senzilla.

Alguns punts forts de Github són

- Seguiment d'errors.
- Cerca ràpida.
- Compta amb una potent comunitat de desenvolupadors.
- Permet descarregar com a arxiu el codi font.
- Possibilita la importació en Git, SVN o TFS.
- Pots personalitzar qualsevol servici host en el núvol.

8 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

#### 4.1. Estats de GIT

```html
Git té tres estats principals: confirmat (committed), modificat (modified), i preparat
```

(staged). Confirmat significa que les dades estan emmagatzemades localment de manera segura. Modificat, que has modificat l'arxiu però encara no l'has confirmat a la teua base de dades. Preparat, que has marcat un arxiu modificat en la seua versió actual perquè vaja en la teua pròxima confirmació.

Això ens porta a les tres seccions principals d'un projecte Git: el directori de Git (Git directory), el directori de treball (working directory), i l'àrea de preparació (staging area). 4.2. Fluxos de treball amb Git. Existeix més d'una manera (flux de treball) per a gestionar els repositoris. Estos són els fluxos de treball més comuns en Git.

Flux de treball centralitzat Només existix un únic repositori guarda el codi i tothom sincronitza el seu treball amb ell. Si dos desenvolupadors clonen el treball i tots dos fan canvis, tan sols el primer a enviar els canvis ho podrà fer netament. El segon haurà de fusionar el seu treball amb el del primer abans d'enviar-lo per a evitar sobreescriure els canvis del primer.

9 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Flux de treball del Gestor d’Integracions Al possibilitar múltiples repositoris remots, Git permet tindre un flux de treball on cada desenvolupador té accés d'escriptura al seu propi repositori públic, i accés de lectura als repositoris de tots els altres.

Habitualment, este escenari sol incloure un repositori canònic, representant "oficial" del projecte. Flux de treball amb Dictador i Tinents És una variant del flux de treball amb múltiples repositoris. S'utilitza generalment en projectes molt grans, amb centenars de col·laboradors.

Un exemple molt conegut és el del kernel de Linux. Uns gestors d'integració s'encarreguen de parts concretes del repositori (tinents). Tots els tinents rendixen comptes a un gestor d'integració (dictador benvolent). El repositori del dictador benvolent és el repositori de referència, del qual recuperen (pull) tots els col·laboradors.

10 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.3. Instal·lació i configuració de Git. Aquesta part tan sols és necessària si volem utilitzar el Git directament. A tall d’exemple, Netbeans ja l’incorpora així que si utilitzeu Netbeans, no cal seguir les següents instruccions. Si utilitzeu un altre IDE, abans d’instal·lar Git, comproveu si no el teniu ja instal·lat.

Instal·lació de Git.

### 1. Com és habitual, descarregarem les actualitzacions i les aplicarem amb

```html
sudo apt-get update
sudo apt-get upgrades
```

- Comprovem si ja tenim el Git instal·lat.

```html
git --version
```

> **⚠️ Nota: Si torna un missatge d’error, significa que Git n...**
> Nota: Si torna un missatge d’error, significa que Git no està instal·lat.

- Si no tenim Git instal·lat, aleshores, l’instal·lem.

```html
sudo apt install git
```

- Comprovem de nou la versió que tenim instal·lada.

Configuraci

ó . Abans d'utilitzar les ordres de Git, configurarem algunes variables predeterminades. Així doncs podrem connectar-nos fàcilment al servidor i emmagatzemar les nostres credencials per a connexions posteriors.

```html
git config. L’utilitzarem per a emmagatzemar aquestes variables en tres nivells
```

diferents. Sistema: Si utilitzem el paràmetre --system, la configuració s'aplica a tots els usuaris del nostre sistema. Usuari: Si utilitzem el paràmetre --global, la configuració només s'aplica a l'usuari actual del sistema. És l'opció que farem servir en aquesta secció.

Repositori: Cada repositori emmagatzema els seus propis paràmetres de configuració de Git. En primer lloc, definim el nostre nom complet mitjançant aquesta comanda (substituïu John Doe pel vostre nom real)

- Definim el nostre nom complet.

11 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- Definim el nostre correu electrònic.

### 7. Definim l’editor de text per defecte de Git (posat el cas que Git necessite obrir

un tixer de text).

- Especifiquem la forma en què Git guardarà les credencials.

D’aquesta manera no haurem d'escriure-les cada vegada que voldrem connectar-nos als repositoris. Nota: L´Helper depen de l’SO. • Windows → wincred. • MacOS → osxkeychain • Linux → cache

- Especifiquem la forma en què Git guardarà les credencials.
- Amb list podem veure la nostra configuració i amb nano podem editar-la.

12 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.4. Utilitzar Git amb Netbeans. Cal recordar que el funcionament bàsic de Git és mitjançant línia de comando, no obstant està integrat en Netbeans (i molts altres IDE’s), el que ens permetrà fer-ne ús de forma més intuïtiva i no haver d’instal·lar-lo.

#### 4.4.1. Inicialitzar Git

Creem un projecte al qual volem establir un control de versions. Fem clic dret sobre el nostre projecte i seleccionen Initialize Repository. Tot seguit ens demanarà on volen guardar el repositori. A la terminal veurem la següent informació. 13 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web També veurem que tots els fitxers del nostre projecte han canviat de color. Això vol dir que els arxius estan supervisats per Git però, encara no s’han incorporat al repositori. 4.4.2. Guardar projecte (commit).

Per a guardar el nostre projecte (commit) fem click dret sobre el projecte i seleccionen Commit.

Introduïm la informació que consideren necessària. Nota: En aquest v1.0 no és la versió del projecte, és un simple comentari per a facilitar el control de les modificacions. Per a crear versions, utilitzarem les etiquetes (tags). 14 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Especifiquem l’usuari del repositori. Comproven al la terminal que el commit s’ha realitzat correctament i que els fitxers ja tornen al seu color normal. 4.4.3. Modificar projecte. Si, per exemple, afegim un fitxer nou al projecte, o fem unes modificacions d’un fitxer que ja existeix i fem un «show changes»...

... Veurem en verd el fitxers pendents de ser guardats (commit) al repositori. 15 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Si fem un commit, podrem documentar aquesta modificació del projecte des de l’últim commit. Si fem un show history podrem veure les modificacions i prendre les mesures adients sobre el nostre projecte.

16 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.4.4. Etiquetes. Per a identificar les diferents faces del projecte utilitzarem els tags. Seleccionen els commits que volen etiquetar. Si fem manage tags, podem gestionar les tags i veure totes les tags existents.

> **⚠️ Nota: Esborrar una tag no afecta al commit sobre la qua...**
> Nota: Esborrar una tag no afecta al commit sobre la qual s’aplica l’etiqueta. 17 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Si fem Teams → Repository → Repository Browser...

... Veurem les etiquetes i podrem obrir el commit associats a l’etiqueta. 4.4.5. Checkout. Recuperar una versió anterior del projecte. Si volen veure una versió anterior del nostre projecte anem a checkout revision. Seleccionem la revisió que volem recuperar (por nom d’etiqueta o per comentaris del commit).

18 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.4.6. Branch de un projecte. La funcionalitat Branch de Git permet crear noves branques d'un projecte per a provar idees, aïllar noves característiques, o experimentar sense impactar al projecte principal.

Per a crear un Branch, fem Create Branch. 19 / 21 Creació projecte commit Creació branch Commit branch

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Seleccionem des d’on volem fer el branch (començament del projecte o des de qualsevol altre commit). Després de fer un branch, podrem passar de una branca a l’altra fàcilment. Per a saber en quin branch estem treballant només cal mirar el nom al projecte.

20 / 21

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 4.4.7. Fusió de rames (merge branch). Per a fusionar 2 rames seleccionem Merge revision. Després es fusionaran els 2 projectes. Es tracta de una fusió total dels 2 projectes, la qual cosa pot generar conflictes. És a dir, si un mateix fitxer a les 2 rames presenta revisions diferents, Git generarà un conflicte i farà que la fusió només siga possible quan el conflicte s’haja solucionat.

21 / 21

---

# 7.3 UT 5.2 Documentació i control de versions - phpD

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 5.2 Documentació i control de

versions. Documentació amb phpDocumentor Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- phpDocumentor.....................................................................................................................................3

1.1. phpDocumentor, instal·lació i ús amb netbeans............................................................................4 1.1.1. Instal·lació de phpDocumentor..............................................................................................4 1.1.2. Primer ús del phpDocumentor amb netbeans.......................................................................5 1.1.3. Generar documentació amb phpDocumentor mitjançant netbeans.......................................6 1.1.4. Consultar la documentació....................................................................................................6 2 / 6

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- PHPDOCUMENTOR.

Al igual Javadoc és l'eina estàndard per a Java, per a PHP una de les eines més utilitzades és phpDocumentor. Els documentos que poden ser documentats són els següents.

- Variables globals.
- Classes.
- Funcions.
- Mètodes i atributs.
- Sentencies.

PhpDocumentor permet generar la documentació de diverses formes i en diversos formats.

- Des de línia de comandos (php CLI - Command Line Interpreter).
- Des d'interfície web (inclosa en la distribució).
- Des del codi. Com phpDocumentor està desenvolupat en PHP, podem incloure la

seua funcionalitat dins de scripts propis. En tots els casos, és necessari especificar els següents paràmetres: 1.El directori en el qual es troba el nostre codi. PhpDocumentor s'encarregarà després de recórrer els subdirectoris de manera automàtica. 2.Opcionalment els paquets (@pakage) que desitgem documentar, llista de fitxers inclosos i/o exclosos i altres opcions interessants per a personalitzar la documentació.

3.El directori en el qual es generarà la documentació. 4.Si la documentació serà pública (només interfície) o interna (en este cas apareixeran els blocs private i els comentaris @internal). 5.El format d'eixida de la documentació. Formats d'eixida 1.HTML a través d'un bon nombre de plantilles predefinides (podem definir la nostra pròpia plantilla d'eixida).

2.PDF. 3.XML (DocBook). Molt interessant perquè a partir d'este dialecte podem transformar (XSLT) a qualsevol altre utilitzant les nostres pròpies regles i fulles d'estil. 3 / 6

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 1.1. phpDocumentor, instal·lació i ús amb netbeans. 1.1.1. Instal·lació de phpDocumentor. En aquest cas farem la instal·lació del phpDocumentor sobre el netbeans instal·lat en el SO Linux Mint).

Per a l’exemple, creem una petita aplicació de php amb Netbeans, Descarregar l’arxiu phpDocumentor.phar des de https://phpdoc.org/phpDocumentor.phar A la línia de comando escriure sudo apt-get install php (si no s’ha fet ja). A la línia de comandos escriure sudo apt-get install php-xml (si no s’ha fet ja).

Amb això ja podrem usar el phpDocumentor. 4 / 6

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 1.1.2. Primer ús de phpDocumentor amb netbeans. Fem click dret sobre el nostre projecte i seleccionem Generate Documentation -> phpDocumentor. Després haurem de seleccionar el phpDocumentor, També definir la ruta a l’interprete de php.

I també definir on volen guardar la documentació generada. 5 / 6

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 1.1.3. Generar documentació amb phpDocumentor mitjançant netbeans. Repetim click dret sobre el nostre projecte i seleccionem Generate Documentation. 1.1.4. Consultar la documentació. Anem al directori on s’ha guardat la documentació, obrim l’arxiu index.html.

S’obrirà el navegador de internet i podrem navegar dins de la documentació del nostre projecte. 6 / 6

---

# 7.4 UT 5.1 Documentació i control de versions - Java

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

### UT 4.2 Documentació i control de

versions. Documentació amb Javadoc Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Taula de continguts

- Introducció............................................................................................................................................3
- Eines externes per a la generació de documentació. Instal·lació, configuració i ús.............................3

2.1. Javadoc, instal·lació i ús................................................................................................................3 2.1.1. Instal·lació de Javadoc...........................................................................................................3 2.1.2. Ús de Javadoc........................................................................................................................3 2.1.3. Documentar amb JavaDoc.....................................................................................................5 2.1.4. Generar la documentació amb JavaDoc.................................................................................7 2.1.5. Consultar la documentació generada amb JavaDoc..............................................................9 2 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web

- INTRODUCCIÓ.

En este últim capítol tractarem de la documentació d'una aplicació web. D'altra banda, també es tractarà el concepte de control de versions d'una aplicació quan s'està desenvolupant per part d'un equip de programadors. L’objectiu final és posar en producció l'aplicació web perquè s'use i també que l'equip de treball puga accedir a les diferents versions de l'aplicació així com dels diferents mòduls que la componen.

- EINES EXTERNES PER A LA GENERACIÓ DE DOCUMENTACIÓ.

INSTAL·LACIÓ, CONFIGURACIÓ I ÚS Abans de res, és necessari definir quins mòduls és necessari documentar. Normalment és un equip de treball el que duu a terme la programació d'una aplicació web. Per això, cal documentar tota aquella part del codi que serà reutilitzable o que puga ser modificada per una versió posterior.

Actualment existixen bastants eines per a la generació de documentació dins de les quals trobem Javadoc, phpDocumentor i Doxygen.

- Javadoc: És una utilitat d’Oracle per a la generació de documentació de APIs en

format HTML a partir de codi font Java. Javadoc és l'estàndard de la indústria per a documentar classes de Java. La majoria dels IDEs l’incorporen, el que permet generar documentació automàticament.

- phpDocumentor: és una altra eina per a generar documentació PHPDoc

automàticament.

- Doxygen: eina bastant versàtil ja que permet generar documentació en bastants

llenguatges de programació. A més, funciona en la majoria dels sistemes operatius. 2.1. Javadoc, instal·lació i ús. 2.1.1. Instal·lació de Javadoc. Javadoc es troba inclòs en la instal·lació del JDK. En cas de no tenir-lo instal·lat, podeu instal·lar-lo des de la següent URL.

2.1.2. Ús de Javadoc. La documentació utilitzada per Javadoc s'escriu en comentaris que comencen amb /** i que acaben amb */. Javadoc localitza les etiquetes incrustades en els comentaris d'un codi Java. Estes etiquetes permeten generar una API completa a partir del codi font amb els comentaris.

3 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Hi ha dos tipus d'etiquetes

- Etiquetes de bloc: només es poden utilitzar en la secció d'etiquetes que seguix a la

descripció principal. Són de la forma: @etiqueta Exemples d’etiquetes de bloc.

Quan no hi ha gaires notes per afegir, es pot utilitzar el format curt. Javadoc permet utilitzar codi HTML incrustat als comentaris per millorar l’aspecte de la documentació generada, però no és gaire recomanable utilitzar-lo, ja que empitjora la llegibilitat de la documentació directament sobre el codi.

- Etiquetes inline: es poden utilitzar tant en la descripció principal com en la secció

d'etiquetes. Són de la forma: {@tag}, és a dir, s'escriuen entre els símbols de claus. 4 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web 2.1.3. Documentar amb JavaDoc. Per afegir informació a la documentació, Javadoc fa servir un sistema d’etiquetes prefixat (que acabem de veure) per a documentar les clases de Java. Cal destacar que el nombre d’etiquetes de Javadoc és molt més reduït que el d’altres generadors, ja que, com que Java és un llenguatge fortament tipat, la majoria de les restriccions es troben definides pel mateix codi i no cal indicar-les.

El que és normal en una classe és documentar el nom, la descripció general, la versió i el nom del(s) autor(s). El menú contextual de Javadoc s’encarrega de proposar-nos els paràmetres corresponents al lloc d’inserció d'inserció de l’etiqueta.

- Etiquetes de classe

A continuació podeu trobar una llista de les etiquetes més utilitzades a l’hora de documentar classes: @author nom: indica l’autor del codi. @deprecated text: indica que aquest mètode o classe no s’ha d’utilitzar i, opcionalment, el motiu. 5 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web @see referència: indica que aquest element està relacionat amb un altre. Poden afegir- se múltiples etiquetes @see en un mateix comentari, cadascuna en una línia. • @serial; descriu el motiu del camp i els seus possibles valors.

@since text: indica en quina versió del programari es va afegir aquesta classe o mètode. @version text: indica la versió.

- Etiquetes de mètodes

A continuació podeu trobar una llista de les etiquetes més utilitzades a l’hora de documentar mètodes. @author nom: indica l’autor del codi. @deprecated text: indica que aquest mètode o classe no s’ha d’utilitzar i, opcionalment, el motiu. @exception: classe, descripció, @param: descriu el paràmetre o paràmetres que rep el mètode.

6 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web @return: descriu el valor d'eixida del mètode (si el mètode és void no retorna res). @see: s'associa amb un altre mètode o classe. @serialData: descriu el format de senyalització usat en el mètode.

@since: la versió del producte que s'està desenvolupant. @throws classe descripció: són sinònimes i indiquen que aquest mètode pot llençar una excepció. @param nom descripció: afegeix informació sobre un paràmetre. • @return descripció: afegeix informació sobre el valor de retorn d’un mètode. • @link paquet.classe#membre etiqueta: insereix un enllaç que apunta a un altre element de la documentació. • @see referència: indica que aquest element està relacionat amb un altre. Poden afegir- se múltiples etiquetes @see en un mateix comentari, cadascuna en una línia. • @since text: indica en quina versió del programari es va afegir aquesta classe o mètode.

@version text: indica la versió. 2.1.4. Generar la documentació amb JavaDoc. Una vegada documentades les classe i els mètodes ja podem generar la documentació. Anem a Project (Eclipse) i seleccionem Generate Javadoc. 7 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Seleccionem el que volem documentar, definim la ruta on volen guardar la documentació i premem continuar. Seleccionem allò que volem incorporar a la documentació. 8 / 9

DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Finalment premem «yes to all» 2.1.5. Consultar la documentació generada amb JavaDoc. Anem al lloc on s’ha guardat la documentació.

Per a consultar la documentació, fem doble click sobre la icona índex. Amb els botons de navegació, podem veure tota la documentació generada (en aquest cas la informació al voltant de la clase UDPMultiChat). 9 / 9

---

# ✍️ Activitats pràctiques UT7

> **✍️ Activitat Pràctica 7.1 — Tasca 3 UT3 (còpia) (còpia)**
> ##### Data de venciment : 17/11/23
>
> DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web TASCA 3 UT 3. Arquitectura web. Implantació i administració de servidors web Instal·lació d’un servidor web amb Tomcat Desplagament d’Aplicacions Web CFGS DAW Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.
>
> DAW: Desenrotllament d’Aplicacions Web Mòdul: Desplegament d’Aplicacions Web Servidor web Tomcat Activitat Instal·lar, configurar i utilitzar un servidor web amb Tomcat. Pots utilitzar un servidor virtualitzat en la teua màquina. Si estàs en cloud, obri els ports necessaris en la infraestructura cloud i en la màquina servidor (firewall).
>
> Entrega de la tasca Tot el procés s’ha de documentar amb un processador de text i entregar en format PDF. 2 / 2

---
