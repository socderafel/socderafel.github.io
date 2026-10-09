---
layout: default
title: "✍️ Activitats pràctiques UT3 — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT3 — Usuaris i permisos. Seguretat"
prev_url: "../ut03/ut0305.html"
prev_label: "⬅️ 3.5 Seguretat en un SGBD"
next_url: "../ut05/index.html"
next_label: "📘 UT5 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — (ASGBD) Activitat. Gestió d'Usuaris**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Gestió d’usuaris Per realitzar esta pràctica, utilitza la màquina OL8 com a a client (sql developer) per connectar a la màquina W10 que te l’Oracle server. Deuran estar les dos màquines en la mateixa xarxa.
>
> Connecta amb l’usuari sys a la primera PDB (treballa tota la pràctica en la primera PDB) (si no connecta, prèviament hauràs de posar-li/canviar contrasenya !!) Crea dos tablespace nous (tabs1, tabs2) amb datafiles respectius (file1, file2) Crear un usuari (client01) i assignar-li el tablespace tabs1 amb una quota de 20M Assignar permisos a l’usuari de connexió, consulta, crear taules, vistes, seqüencies i procediments Connecta amb l’usuari (client01) i crea una taula (LLIBRE) (tens el codi de crear baix ) Canvia la contrasenya de client01 des de client01 Afegix un registre/una fila a la taula Utilitza l’usuari system per crear un nou usuari (suport01) ¿quin tablespace se li assigna per defecte? (consulta el DD) Assigna a l’usuari (suport01) permisos per connectar i crear usuaris i rols, i a mes a mes, l’usuari podrà reassignar tots estos permisos a altres usuaris.
>
> Assigna a l’usuari (suport01) permisos per inserir, modificar, eliminar i consultar les dades de la taula LLIBRE creada per l’usuari (client01), de forma que podrà reassignar tots estos permisos Connecta amb l’usuari (suport01) Borra el registre que te la taula Afegix un registre a la taula Modifica el registre , canvia el contingut del camp TITOL Visualitza el contingut del registre Crea un usuari comú a totes les pdb’s anomenat (usucomu1) Documentar el procés. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ----------------- Taula LLIBRE
>
> ```sql
> CREATE TABLE LLIBRE(
> ```
>
> codi NUMBER(6), titol VARCHAR2(30) NOT NULL, editorial VARCHAR2(30), edicio VARCHAR2(12), isbn VARCHAR2(25), CONSTRAINT pk_codi PRIMARY KEY(codi)
>
> ```sql
> );
> ```

> **✍️ Activitat Pràctica 3.2 — (ASGBD) Limitacions amb PERFILS**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Limitacions amb perfils Per realitzar esta pràctica, utilitza la màquina OL8 com a a client (sql developer) per connectar a la màquina W10 que te l’Oracle server. Deuran estar les dos màquines en la mateixa xarxa.
>
> Connecta amb l’usuari system a la primera PDB Crea un usuari amb el nom prova1 i password secreta (i privilegis per connectar i crear recursos amb quota) Visualitza els límits actuals del perfil DEFAULT Modifica el perfil DEFAULT per a que els usuaris que l’utilitzen
>
> • Sols puguen fallar 3 vegades fins que es bloquege l’accés. • El bloqueig dure 10 dies • El password s’haja de canviar cada 3 mesos • El temps de que deixa canviar la password una vegada caducat siga 15 dies Visualitza els límits nous del perfil DEFAULT Desconnecta a system Intenta connectar a l’usuari prova1 posant malament la password més de tres vegades.
>
> Comprova que l’usuari es bloqueja i no pot connectar Connecta amb l’usuari system a la primera PDB Comprova l’estat de l’usuari prova1 (ACCOUNT_STATUS, data de bloqueig, etc...) Desbloqueja l’usuari. ( UPDATE .........) Desconnecta a system Comprova que l’usuari prova1 pot connectar.
>
> Comprova la data del pròxim canvi de contrasenya Força l’expiració del password Comprova la data del pròxim canvi de contrasenya i el temps de gràcia Documentar el procés. I no oblidis seguir les indicacions del document de *Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 3.3 — (ASGBD) Oracle Data Pump**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Oracle expdp Per realitzar esta pràctica, utilitza sql*plus en la màquina servidor i el cmd per llançar la còpia Connecta amb l’usuari (client01) a la primera PDB (sinó està creat, crea’l i dona-li els permisos necessaris) Crear una taula festius amb els camps mes, dia, nom-festa Pobla la taula amb 5 registres/files (tot sants 1/11 , nadal 25/12, cap d’any 31/12, sant josep 19/3 i algun més) Ix de sql*plus Des de cmd, escull una carpeta per fer les còpies ( o crea-la ) en la màquina servidor, Connecta com a sys defineix la carpeta dins de l’SGBD amb (CREATER DIRECTORY .....) i dona-li permisos si cal.
>
> Defineix un fitxer de paràmetres parametres1.txt dins de la carpeta abans definida, indicant que es farà còpia dels objectes del esquema (schemas) de client01 Defineix un fitxer de paràmetres parametres2.txt dins de la carpeta abans definida, indicant que es farà còpia dels objectes del tablespace (tablespaces) de users Fes una copia amb la utilitat expdp d’Oracle (des de cmd i utilitza l’opció parfile , ) Utilitza l’usuari system amb parametres1.txt Utilitza l’usuari client01 amb parametres2.txt Dona-li permisos a client01 per poder llançar expdp (grant DBA to ....) Llança expdp per l’usuari client01 Documentar el procés. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ----------------- Taula FESTIUS
>
> ```sql
> CREATE TABLE FESTIUS( Dia, Mes, nom_festa..........
> ```
>
> parfile=parametros1.txt parfile=parametros2.txt SHCHEMAS=client01 DUMPFILE=exp1.dmp DIRECTORY=dirpump LOGFILE=exp1.log TABLESPACES=users DUMPFILE=exp2.dmp DIRECTORY=dirdump LOGFILE=exp2.dmp ordre d’execució
