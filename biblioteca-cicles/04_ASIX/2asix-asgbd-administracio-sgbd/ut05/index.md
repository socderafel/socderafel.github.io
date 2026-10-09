---
layout: default
title: "UT5 — Automatització de tasques — Administració de Sistemes Gestors de Bases de Dades | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UT5 Completa"
prev_url: "../ut04/ut04actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT4"
next_url: "../ut05/ut0501.html"
next_label: "5.1 Enquesta valoració docent. 1er trimestre ➡️"
---

# 📘 UT5 — Automatització de tasques (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**5.1 Enquesta valoració docent. 1er trimestre**](#ut0501) (o [obrir en pàgina individual ➡️](./ut0501.md) )
> - [**5.2 Repàs: PL/SQL**](#ut0502) (o [obrir en pàgina individual ➡️](./ut0502.md) )
> - [**5.3 Repàs: PL/SQL (II)**](#ut0503) (o [obrir en pàgina individual ➡️](./ut0503.md) )
> - [**5.4 Repàs: PL/SQL (II) _ SOLUCIONS**](#ut0504) (o [obrir en pàgina individual ➡️](./ut0504.md) )
> - [**5.5 Automatització de tasques**](#ut0505) (o [obrir en pàgina individual ➡️](./ut0505.md) )
> - [**5.6 Butlletí procediments i funcions**](#ut0506) (o [obrir en pàgina individual ➡️](./ut0506.md) )
> - [**5.7 Butlletí triggers**](#ut0507) (o [obrir en pàgina individual ➡️](./ut0507.md) )
> - [**5.8 Solucions a pl/sql**](#ut0508) (o [obrir en pàgina individual ➡️](./ut0508.md) )
> - [**✍️ Activitats pràctiques UT5**](#ut05actividades) (o [obrir en pàgina individual ➡️](./ut05actividades.md) )

---

## 5.1 Enquesta valoració docent. 1er trimestre

Com és preceptiu, vos passe una enquesta de seguiment docent per a poder realitzar una autoavaluació i buscar punts de millora en el procés educatiu.

Totes les respostes seran ANÒNIMES.

Esta enquesta fa referència al mòdul i al docent d'ASGBD

---

## 5.2 Repàs: PL/SQL

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Bloc anònim en Oracle La sentència de bloc anònim PL/SQL és una sentència executable que pot contindre sentències de control PL/SQL i sentències SQL Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQL Developer En SQL Developer podem guardar un script amb ctrl-s o Archivo-guardar o En SQL Developer podem recuperar un script amb ctrl-o o Archivo-abrir o En SQL Developer podem executar un script amb F5 Activar l’exida => set serveroutput on Connecta amb SYSTEM a pdb1 Crea usuari usuari1 Donar permisos a usuari1 Connecta amb usuari1 en pdb1 Tasca 1 Declaracions => Indica quines declaracions donarien error i perquè. Després prova-les en sql-developer SET SERVEROUTPUT ON DECLARE

```sql
primera number:=5.0;
```

siguiente number not null;

```sql
fija constant varchar2(20);
```

cadena varchar2;

```sql
valor1 number not null:=4;
varlor2 number:=valor1/2;
valor3 number:=valor4+valor2;
valor4 number:= default 5;
cad varchar2(10);
```

proximo valor1%TYPE;

```sql
numero number(4,2):=150.3;
```

num1 num2 number;

```sql
CAd varchar2(12);
cad2 varchar2(2):='HOLA';
```

4num number; BEGIN

```sql
dbms_output.put_line (‘La primera variable val ’ || primera);
dbms_output.put_line (‘La suma val ’ || primera+valor1);
```

Posa ací més línies per provar els resultats END; ================

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Tasca 2 Conversió de dates El tipus de data és molt potent però necessita d’un tractament específic. Escriu un Bloc anònim que demane una data amb una variable de substitució (en char) i inserisca una fila en la taula LLIBRES. (compte amb els camps datapub i datareg ) Els valors has d’estar en majúscules. Utilitza les funcions necessàries.

Script de creació de taula llibres i de tres files de dades

```sql
drop table llibres;
CREATE TABLE llibres(
```

titol VARCHAR2(60) NOT NULL, autor varchar2(30) not null, datapub DATE, editorial VARCHAR2(30), edicio VARCHAR2(12), isbn VARCHAR2(25), preu number( 6,2), datareg date, CONSTRAINT pk_codi PRIMARY KEY(titol,autor)

```sql
);
insert into llibres (titol,autor,datapub,preu,datareg)
values ('INTRODUCCIÓN A LA PROGRAMACIÓN INFORMÁTICA', 'CAROL VORDERMAN', '22/10/2019', 18.90, sysdate);
insert into llibres (titol,autor,datapub,preu,datareg)
values ('SEGURIDAD INFORMÁTICA','ANTONIO POSTIGO PALACIOS','19/05/2020',27.07, sysdate);
insert into llibres (titol,autor,datapub,preu,datareg)
values ('EL ARTE DE LA INVISIBILIDAD','KEVIN MITNICK','4/10/2018',28.44, sysdate);
```

---

## 5.3 Repàs: PL/SQL (II)

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Butlletí repàs PL/SQL Connecta amb SYSTEM a pdb1 Crea usuari usuari1 Donar permisos a usuari1 Connecta amb usuari1 en pdb1 Tasca 1 Crea un bloc anònim que demane dos números (utilitza dos variables de substitució) i diga la suma, la multiplicació, la resta, la divisió dels números.

Tasca 2 Càlcul de la superfície de diverses figures geomètriques. (utilitza tres variables de substitució) Rectangle base*altura Quadrat base Triangle (base*altura) / 2 Cercle ∏*radi Tasca 3 Crea un fragment de codi que donat un mes de l’any en número (de 1 a 12), i a continuació, que mostre el nom del mes. (utilitza variables de substitució) Tasca 4 Fes un altre fragment que donat un mes (utilitza variables de substitució), en lloc de mostrar el nom del mes, mostre els dies que té. (Considerem que febrer sempre té 28 dies).

Tasca 5 un altre fragment que donat un dia de la setmana en número (d’1 a 7) i, a continuació que mostre si el dia introduït és entre setmana o cap de setmana. (utilitza variables de substitució) Tasca 6 un bloc anònim que reba una cadena i la visualitze a l'inrevés. (utilitza variables de substitució).

Transforma el bloc anònim en un procediment. Tasca 7 una fragment de codi que retorne el nombre d'anys complets que hi ha entre dues dates que es passen com a strings. Transforma el bloc anònim en una funció. Tasca 8 un bloc anònim que retorne solament caràcters alfabètics substituint qualsevol altre caràcter per blancs a partir d'una cadena que es passarà en una variable de substitució TIPS: Pots utilitzar funcions predefinides de PL/SQL round( n) trunc( n) mod(n,m ) floor(n ) Ceil(n ) Length( s) Lower(s ) Upper(s ) Ascii(s ) Chr(n ) Substr(s,n [,l]) trim(s) instr(c,s) || initcap(s) replace(s,s1,s2) Data2 – data1 : resultat , num de dies entre les dos dates Data1 + num : resultat , data de ‘num’ de dies més que Data1

---

## 5.4 Repàs: PL/SQL (II) _ SOLUCIONS

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Butlletí repàs PL/SQL Connecta amb SYSTEM a pdb1 Crea usuari usuari1 Donar permisos a usuari1 Connecta amb usuari1 en pdb1 Tasca 1 Crea un bloc anònim que demane dos números (utilitza dos variables de substitució) i diga la suma, la multiplicació, la resta, la divisió dels números.

Tasca 2 Càlcul de la superfície de diverses figures geomètriques. (utilitza tres variables de substitució) Rectangle base*altura Quadrat base Triangle (base*altura) / 2 Cercle ∏*radi Tasca 3 Crea un fragment de codi que donat un mes de l’any en número (de 1 a 12), i a continuació, que mostre el nom del mes. (utilitza variables de substitució) Tasca 4 Fes un altre fragment que donat un mes (utilitza variables de substitució), en lloc de mostrar el nom del mes, mostre els dies que té. (Considerem que febrer sempre té 28 dies).

Tasca 5 un altre fragment que donat un dia de la setmana en número (d’1 a 7) i, a continuació que mostre si el dia introduït és entre setmana o cap de setmana. (utilitza variables de substitució) Tasca 6 un bloc anònim que reba una cadena i la visualitze a l'inrevés. (utilitza variables de substitució).

Transforma el bloc anònim en un procediment. Tasca 7 una fragment de codi que retorne el nombre d'anys complets que hi ha entre dues dates que es passen com a strings. Transforma el bloc anònim en una funció. Tasca 8 un bloc anònim que retorne solament caràcters alfabètics substituint qualsevol altre caràcter per blancs a partir d'una cadena que es passarà en una variable de substitució TIPS: Pots utilitzar funcions predefinides de PL/SQL round( n) trunc( n) mod(n,m ) floor(n ) Ceil(n ) Length( s) Lower(s ) Upper(s ) Ascii(s ) Chr(n ) Substr(s,n [,l]) trim(s) instr(c,s) || initcap(s) replace(s,s1,s2) Data2 – data1 : resultat , num de dies entre les dos dates Data1 + num : resultat , data de ‘num’ de dies més que Data1

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Ajuda: Solució 1 declare

```sql
v1 number := &numero1;
    v2 number := &numero2;
```

begin

```sql
dbms_output.put_line(' la suma es : ' || (v1 + v2) );
    -- les altres operacions, igual però amt  * /  -
```

end; Solució 2 declare

```sql
vbase number := &base;
    valtura number := &altura;
    vradi number := &radi;
```

begin

```sql
dbms_output.put_line(' area de rectangle  es : ' || (vbase *  valtura) );
    --  Igual en el quadrat, triangle i cercle.
```

end; Solució 3 declare

```sql
vmes number := &mes;
```

begin if (vmes = 1) then

```sql
dbms_output.put_line(' El mes es Gener ');
    end if;
    --   del 2 al 12 , igual, canviant el nom.
```

end; Solució 4 -- igual qu el 3, pero escrivint els nombre de dies Solució 5 declare

```sql
vdiasem number := &dia_de_la_setmana;
```

begin if (vdiasem >= 1) and (vdiasem <= 5) then

```sql
dbms_output.put_line(' El dia es entre setmana ');
    else dbms_output.put_line(' El dia es cap de setmana ');
    end if;
    --
```

end; Solució 6 declare

```sql
vcad varchar2(19) := '&cadena';
    vlong number;
```

begin

```sql
vlong := length(vcad);
    -- dbms_output.put_line(' Longitud ' || vlong);
    -- potser ara falta un FOR
    for contador in reverse 1..vlong loop
         dbms_output.put_line( substr(vcad, contador, 1 ) );
    end loop;
```

end; Solució 7 declare

```sql
vd1 date := '&data1';
    vd2 date := '&data2';
```

begin

```sql
dbms_output.put_line(' Anys entre dates ' || trunc((vd2 - vd1)/365) );
```

end;

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Solució 8 declare

```sql
vcad varchar2(30) := '&dame_cadena';
    vcad2 varchar2(30) := '';
```

begin for contador in 1..length(vcad) loop if substr(vcad,contador,1) between 'a' and 'z' then

```sql
vcad2 := vcad2 || substr(vcad,contador,1);
       elsif  substr(vcad,contador,1) between 'A' and 'Z' then
          vcad2 := vcad2 || substr(vcad,contador,1);
       else
          vcad2 := vcad2 || ' ';
       end if;
    end loop;
    dbms_output.put_line(vcad2);
```

end;

---

## 5.5 Automatització de tasques

### UNITAT 04 Automatització de tasques

Automatització de tasques

Objectius de la unitat

- Reconéixer la importància d'automatitzar tasques administratives.
- Descriure els diferents mètodes d'execució de guions.
- Identificar les eines disponibles per redactar guions.
- Definir i utilitzar guions per automatitzar tasques.
- Identificar els esdeveniments susceptibles d'activar disparadors.
- Definir disparadors.
- Fer servir estructures de control de flux.
- Adoptar mesures per mantenir la integritat i la consistència de la informació.

Rutines de BD Blocs anònims Estructures de programació Procediments Funcions Disparadors (triggers) Seqüències Tasques automatitzables Automatització

Avantatges Automatització

- Estalvi de temps
- Reducció costos administració
- Reducció errors ( humà)

Tipus

- Programa extern (al SGBD)
- Programa intern : rutina de bbdd

L'automatització consisteix a fer tasques de manera sistemàtica i repetitiva sense que estiga involucrat un usuari en la seua execució Programador de tasques en Windows, o cron/crontab en Linux Procediments Funcions Disparadors

Rutina

- Script, guió, programa o seqüència de comandos que permeten dur a terme el processament d'unes

certes accions.

- Quan és creada rep un nom que permet que siga invocada tantes vegades com siga necessari
- Van ser introduïdes en la versió SQL3, o SQL:1999

El SGBD deu proporcionar

- Eines necessàries per a crear rutines.
- Eines per a executar les rutines automàticament.

Avantatges rutina interna

- Rendiment
- Reutilització (codi)
- Encapsula regles de negoci
- Major seguretat

Les rutines: S’han de Documentar, Descripció de la tasca, descripció de paràmetres d’entrada i eixida, Autor, Versió, Data d’última modificació

Bloc anònim set serveroutput on DECLARE

```sql
Vnom VARCHAR2(15) := '&nom';
```

BEGIN

```sql
DBMS_OUTPUT.PUT_LINE ('Hola ' || Vnom);
   DBMS_OUTPUT.PUT_LINE ('Benvingut a la programació en PL/SQL');
```

END; .  En SQL*Plus, tot bloc ha d'acabar en . perquè siga emmagatzemat en el buffer SQL. Una vegada guardat el podem executar amb l'ordre run (en SQL*Plus) paquet dbms_output procediment put_line En SQL Developer no es posa el . Variable de substitució . punt

Comandos bàsics en SQL*Plus SQL> edit SQL> list SQL> run (r o /) SQL> save fitxer.ext [replace] SQL> get fitxer.ext SQL> run SQL> start fitxer.ext SQL> SQL> @fitxer.ext (@ equival a start) tutorial SQL*Plus SQL*Plus sols guarda la última ordre, que pot tindre diverses línies..

Esta es pot editar, llistar, executar, etc... El comando start carrega i executa un script d’un fitxer Practica: amb diversos CREATE TABLE de 2 o 3 línies !! en sql*plus !!

Bloc anònim  En SQL Developer s’executa amb F5 En SQL Developer no es posa el . F5 Executa script F9 Executa sentència En este script hi ha dos sentències !! Un set i un bloc anònim

<codi> El codi dels procediments, funcions i disparadors pot ser des d’una línia o sentència, fins a un programa complex amb estructures de repetició, selecció i seqüenciació, seguint les regles de PL/SQL PL/SQL (Procedural Language/Structured Query Language) és un llenguatge de programació incrustat en Oracle ( va ser el primer SGBD en incloure un llenguatge dins) PL/SQL suportarà totes les consultes, ja que la manipulació de dades que s'usa és la mateixa que en SQL PostgreSQL dona suport a una variant, el PL/PGSQL SQL Server utilitza una altra variant, el TSQL Son tots molt pareguts

Estructures de programació en PL/SQL

- Comentaris
- Variables
- Execució condicional
- Bucles
- Blocs
- Cursors
- Transaccions
- Excepcions

Estructures de programació en PL/SQL

- Comentaris
- Variables
- Execució condicional
- Bucles
- Blocs
- Cursors
- Transaccions
- Excepcions

Repàs de primer curs Altres estructures en PL/SQL

- Comentaris

Una línia -- Més d’una línia /* .... */

- Variables

v_nom := 'Francisco'; v_empno := 10; tutorial tipos de dades Tipus : char() varchar2() number() boolean date() tutorial dates

```sql
anynou DATE:='01/ene/2024';
B1 boolean := true;
dataactual DATE:=SYSDATE;
B2 boolean := false;
```

- Operacions

+ - * / ** || := tutorial operadors Molt important, per documentar el codi Declaració ( i assignació ) Assignació de valors

- Execució condicional

IF condicion1 THEN instrucción/es; [ELSIF condicion2 THEN instrucción/es; ] [ELSE instrucción/es; ] END IF; CASE expr WHEN valor THEN instrucciones1 [WHEN valor THEN instrucciones2] [ ELSE instrucciones3] END CASE; CASE WHEN condicion1 THEN instrucciones1 [WHEN condicion2 THEN instrucciones2] [ ELSE instrucciones3] END CASE;

- Bucles

LOOP sentències EXIT (dins d’un if ) END LOOP; WHILE condició LOOP sentències END LOOP; FOR v_comptador IN [REVERSE] liminf..limsup LOOP sentències END LOOP;

- Condicions

var > num < >= <= = <> var2 >= num and var3=var3 // or not ( ) BETWEEN 1 and 10 LIKE expr IN ( , , ) NOT IN ( , , ) Compte amb el valor NULL ; operació IS NULL CONTINUE EXIT

- Precedència d’operadors

Operator Operation ** exponentiation +, - identity, negation *, / multiplication, division +, -, || addition, subtraction, concatenation comparison NOT logical negation AND conjunction (logical) OR inclusion (logical) 1+2*3-1 no és (1+2)*(3-1)

Un procediment emmagatzemat o STORED PROCEDURE és un codi SQL preparat que es pot guardar, per la qual cosa el codi pot reutilitzar-se una vegada i una altra. (tindrà un nom) Així que, si es té una consulta SQL que s’ha d’escriure una vegada i una altra, es podrà guardar com un procediment emmagatzemat i després cridar-la per a executar-la.

També pot passar paràmetres a un procediment emmagatzemat, de manera que el procediment emmagatzemat puga actuar en funció dels valors de paràmetre que es passen. Procediments Funcions Triggers

Permisos

- Creació i execució
- Sols execució
- Cap permís

```sql
GRANT CREATE PROCEDURE, CREATE TRIGGER TO <usu>;
```

(si te permís de crear, també pot executar)

```sql
GRANT EXECUTE ON <esquema>.<procedim> TO <usu> [WITH GRANT OPTION];
```

 Un usuari necessita tindre permís per executar rutines, o per crear-les i executar-es !! procediments funcions triggers Procediments Funcions Triggers El permís val per procediments I també per funcions

Procediments [emmagatzemats]

- No tornen cap informació (valor)
- Com crear-los

CREATE [OR REPLACE] PROCEDURE <nom_proc> [( <param1> [ IN | OUT | IN OUT ] <tipus>,..)] [AUTHID INVOKER | DEFINER] AS [<declaració variables>] BEGIN <codi pl/sql> [EXCEPTION] [<codi excepció>] END; / Un procediment [emmagatzemat] és un subprograma que executa una acció específica i que no retorna cap valor per si mateix, com succeeix amb les funcions. Un procediment té un nom, un conjunt de paràmetres (opcional) i un bloc de codi.

Per defecte, definer (creador). Authid determina amb quins permisos s’executarà l’script

Procediments - exemple CREATE OR REPLACE PROCEDURE Actualiza_Saldo(cuenta NUMBER, new_saldo NUMBER) IS -- Lloc per a Declaració de variables locals BEGIN UPDATE SALDOS_CUENTAS SET SALDO = new_saldo, DATA_ACTUALITZACIO = SYSDATE

```sql
WHERE CO_CUENTA = cuenta;
```

END Actualiza_Saldo; / En SQL*Plus, finalitza la definició del procediment (també es pot posar un punt . )

Procediments

- Com executar-los

execute <nom_proc> ( <param1>, <param2> ...); // oracle També amb exec execute <nom_proc> ; execute <nom_esquema>.<nom_proc> ; o call (en postgres)

- Com esborrar-los

DROP PROCEDURE nom_proc;

- Com explorar-los

En DD user_procedures

```sql
select object_name, object_type from user_procedures;
select object_name, object_type, status from user_objects;
```

user_procedures user_source user_objects

Procediments

- Com executar-los

Notació posicional Es passen els valors dels paràmetres en el mateix orde en que el procedure els defineix. BEGIN

```sql
actualiza_Saldo(200501,2500);
```

COMMIT;

```sql
DBMS_OUTPUT.put (‘Saldo act’);
```

END; Des de qualsevol rutina interna d’Oracle ( inclús des d’un bloc d’instruccions) es pot cridar a un procediment o funció invocant-la directament com una instrucció, sense la necessitat d’utilitzar execute o exec. També es poden utilitzar funcions i procediments de paquets, posant el nom del paquet, punt, el nom de la funció o procediment.

En sql*plus es deu activar prèviament amb SET serveroutput ON

Procediments

- Com executar-los

Notació nominal Es passen els valors en qualsevol orde, nominant explícitament el paràmetre i el seu valor separats pel símbol =>. BEGIN

```sql
actualiza_Saldo(cuenta => 200501,new_saldo => 2500);
```

COMMIT; END;

Funcions - Tornen informació (un únic valor, d’un tipus) Existeixen funcions predefinides que podem utilitzar en oracle

```sql
select sysdate from dual;
select sqrt(5) from dual;
update taula set camp=lower(‘DadesDelCaMp’) ; <-- sense WHERE ,tota la taula!
```

Funcions numèriques, round,trunc,mod,power,sign,abs,... de cadenes (strings) , lower,upper,trim,substr,length,replace,reverse,... de treball en NULLs , nvl,nvl2, nullif, coalesce de dates, sysdate,last_day, extract, add_months, .... de conversió, to_number, to_date, to_char,...

i altres avançades... A més a més, Oracle permet definir noves funcions que podrem utilitzar. Com se solen usar les funcions

Funcions - Tornen informació (un únic valor, d’un tipus)

- Com definir-les / crear-les

CREATE [OR REPLACE] FUNCTION <nom_func> [( <param> [ IN | OUT | IN OUT ] <tipus>,.. )] RETURN <tipus> [AUTHID INVOKER | DEFINER] IS [ <variables>] BEGIN <codi> RETURN <valor> END; / Sempre ha de tornar un valor

Funcions En Oracle existeix una taula de sistema anomenada dual que permet executar consultes que no accedeixen a cap taula de la bbdd, la qual cosa és molt útil per a comprovar el resultat d'invocar una funció.

```sql
select sysdate from dual;
select funcio_de_usuari(valor_parametre) from dual;
select funcio_de_usuari(nom_par => valor) from dual;
                   -> notació posicional o nominal <-
```

- Com explorar-les en el DD

vista user_procedures

```sql
select object_name, object_type from user_procedures;
```

Funcions i procediments estan junts en el DD, el camp object_type els diferencia user_procedures user_source user_objects

Funcions -exemple- create or replace function f_incremento (avalor number, aincremento number) return number is begin

```sql
return avalor + (avalor*aincremento/100);
```

end; --------------------------------------------------------- Utilitzar una funció.

```sql
select titulo,precio,f_incremento(precio,20) from libros;
```

Esborrar una funció. DROP FUNCTION f_incremento;

Funcions - Exemple create or replace function notaCHAR (avalor number) return varchar2 is

```sql
valorretornado varchar2(20);
```

begin

```sql
valorretornado:='';
```

if avalor>=5 then

```sql
valorretornado:='APROBADO';
   else valorretornado:='NO APROBADO';
```

end if;

```sql
return valorretornado;
```

end; / Podriem utilitzar la funció, per exemple, dins d’un select..

```sql
select count(*),notaCHAR(nota) from taula_notes group by notaCHAR(nota);
```

if avalor>=5 then

```sql
return 'APROBADO';
```

else

```sql
return 'NO APROBADO';
```

end if;

Funcions - Resum variables

Funcions - Resum

Disparadors (trigger) Un trigger o disparador en una Base de Dades , és un bloc de codi que s'executa (automàticament) quan es compleix una condició establida, com per exemple, realitzar una operació (INSERT, UPDATE, DELETE) sobre una taula (o sobre un camp d’una taula) Els triggers poden ser d'inserció (INSERT), actualització (UPDATE) o esborrat (DELETE).

El procediment s’executarà abans (BEFORE), desprès (AFTER) de que es realitze l’operació, o (INSTEAD OF) en compte de l’operació. Segons el cas, es poden utilitzar valors d’una fila abans de la operació o després de l’operació: :new i :old

Disparadors (trigger) CREATE [OR REPLACE] TRIGGER <nom_disp> BEFORE | AFTER | INSTEAD OF INSERT | DELETE | UPDATE | UPDATE OF <colum1> [, colum2,...] ON <nom_taula> [REFERENCING OLD <nomold> NEW <nomnew> ] [FOR EACH ROW | STATEMENT] [WHEN condición] BEGIN <codi> END <nom_disp>; / Per defecte

Disparadors (trigger) FOR EACH ROW El codi s'executa tantes vegades com files afectades per la sentència que ha disparat el trigger (abans o després de cada fila) FOR EACH STATEMENT (per defecte) El codi s'executa una vegada, abans o després de la sentència que ha disparat el trigger WHEN condició El codi s’executa si es compleix la condició, en el moment que li haguera tocat executar-se.

BeforeStatement BeforeRow AfterRow BeforeRow AfterRow BeforeRow AfterRow AfterStatement 7839 KING 1200 7698 BLAKE 2100 7788 SMITH 2300 Suposem un UPDATE que afecta a 3 files d’una taula. Observem quan s’executaria el trigger depenent del tipus.

Disparadors (trigger) exemple create or replace trigger tr_actualizar_precio_libros before update of precio on libros for each row begin

```sql
insert into control values(user,sysdate,:new.codigo,:old.precio,:new.precio);
```

end tr_actualizar_precio_libros; / El trigger s’activarà quan es llance una sentència que vaja a actualitzar el valor del camp «precio» de la taula «libros» (update of precio on libros) El codi s’executara abans (before) d’actualitzar el valor de «precio» per cada fila que es vaja a actualitzar (for each row)

```sql
Exemple:  UPDATE libros SET precio=precio*0.95 WHERE editorial=’McGraw Hill’;
```

Disparadors (trigger) raise_application_error create or replace trigger tr_actualitzar_preu_neg before update of precio on libros for each row begin if :new.preu<0 then

```sql
raise_application_error(-20020,’No es permet preu negatiu’);
    end if;
```

end tr_actualitzar_preu_neg; / El procediment "raise_application_error" permet emetre un missatge d'error. El NUMERO de missatge ha de ser un número negatiu entre -20000 i -20999 i el missatge de TEXT una cadena de caràcters de fins a 2048 bytes. Si durant l'execució d'un trigger es produeix un error definit per l'usuari, s'anul·len totes les actualitzacions realitzades per l'acció del trigger així com l'esdeveniment que la va activar, és a dir, es reprén qualsevol efecte retornant un missatge i es desfà l'ordre executada.

Disparadors (trigger) Per a un activador INSERT, :OLD no conté valors, i :NEW conté els valors nous. Per a un activador UPDATE, :OLD conté els valors antics, i :NEW conté els valors nous. Per a un activador DELETE, :OLD conté els valors antics, i :NEW no conté valors.

- Com explorar-los

En DD user_triggers

```sql
select * from user_triggers where trigger_name=’TR_MITRIGGER’;
```

dba_triggers dba_source

Disparadors múltiples (trigger) exemple create or replace trigger tr_actualizar_precio_libros before insert or delete on llibres for each row Begin If inserting then

```sql
insert into control values(user,sysdate,:new.codigo,’INSERTAR’);
    Else
        insert into control values(user,sysdate,:old.codigo,’ESBORRAR’);
    End if;
```

end tr_actualizar_precio_libros;

El trigger s’activarà quan es llance una sentència insert o una sentència sentència delete sobre la taula llibres El codi s’executara abans (before) de cada fila afectada. INSERTING UPDATING DELETING

Disparadors (trigger) En oracle existeixen altres tipus de triggers, segons l'esdeveniment que el dispara: ●Un INSERT, UPDATE o DELETE en una taula específica ●Un CREATE, ALTER o DROP en qualsevol objecte d’esquema ●Una arrancada(startup) de Base de Dades o un tancament (shutdown) d’instància ●Un missatge d’error ●Un inici o final de sessió d’usuari de Base de Dades Hem vist Els triggers es poden deshabilitar temporalment

alter trigger tr_trig1 disable; alter trigger tr_trig1 enable; Es poden habilitar/deshabilitar tots els triggers d’una taula

```sql
alter table nom_taula disable all triggers;
alter table nom_taula enable all triggers;
```

Disparadors (trigger) Restriccions en l'ús de disparadors ●No poden executar-se instruccions DDL ●No poden executar-se instruccions de TCL ●Per sentència, no te sentit l'ús de :old i :new ●Per fila. No es poden consultar les dades de la taula que ha disparat el trigger, es a dir, no es pot fer un SELECT ●Oracle no deixa crear triggers en l’esquema de SYS !!

Seqüències Una seqüència (sequence) s'empra per a generar valors sencers seqüencials únics i assignar-li'ls a camps numèrics; s'utilitzen generalment per a les claus primàries de les taules garantint que els seus valors no es repetisquen. Una seqüència és una taula amb un camp numèric en el qual s'emmagatzema un valor i cada vegada que es consulta, s'incrementa tal valor per a la pròxima consulta.

Permís

```sql
GRANT CREATE SEQUENCE TO <usu>;
```

Crear: CREATE SEQUENCE <NOM_SEQ>; Esborrar: DROP SEQUENCE <NOM_SEQ>; Utilitzar seqüència

```sql
INSERT INTO taula VALULES
```

(nom_seq.nextval, ‘valor1’,

```sql
‘varlor2’, ...);
```

Vista del DD:dba_sequences Arregla problema de concurrència

Estructures de programació en PL/SQL

- Comentaris
- Variables
- Execució condicional
- Bucles
- Blocs
- Cursors
- Transaccions
- Excepcions

Repàs de primer curs Altres estructures en PL/SQL

En PL/SQL no es poden utilitzar sentències SELECT de sintaxi bàsica ( SELECT <lista> FROM <tabla> ). PL/SQL utilitza cursors per a gestionar les instruccions SELECT. Un cursor és un conjunt de registres retornat per una instrucció SQL. Dos tipus -Implícits => select into ( no es declaren, sols tornen un resultat o fila) -Explícits => es declaren i controlen pel programador. Poden tornar més d’un resultat Cursors Els cursors implícits només poden retornar una única fila. En cas que es retorne més d'una fila (o cap fila) es produirà una excepció: NO_DATA_FOUND o TOO_MANY_ROWS

Per a treballar amb un cursor (explícit ) cal realitzar els següents passos

- Declarar el cursor

CURSOR .nom. IS .....

- Obrir el cursor en el servidor

OPEN .nom.

- Recuperar cadascuna de les seues files (bucle)

FETCH .nom. INTO ..variable/s.

- Tancar el cursor

CLOSE .nom. Cursors nom_cursor%NOTFOUND nom_cursor%FOUND En cursors implícits podem utilitzar SQL%FOUND SQL%NOTFOUND SQL%ROWCOUNT Després d’executar l’ordre

Definir (en el DECLARE)

```sql
CURSOR nom_cursor (par1 tipus1, par2 tipus2, ..) IS SELECT ...;
```

Utilitzar (en el BEGIN)

```sql
OPEN nom_cursor ( par1, par2) ;
```

FETCH nom_cursor INTO v_aux; CLOSE nom_cursor; Cursors Important !! tancar el cursor Carrega la primera fila en v_aux V$open_cursor Vista dinàmica

Utilitzar cursor amb sentència FOR cursor c_articulos is select idarticulo from .... FOR datos IN c_articulos LOOP sentències END LOOP; FOR datos IN nom_cursor(par1,par2) LOOP

```sql
update personal set nom=datos.nom, coddep=datos.coddep
   where codemp=datos.codemp;
```

END LOOP; Cursors Quan un cursor torna moltes files, es pot processar amb una bucle FOR El bucle FOR tanca el cursor automàticament en acabar El bucle FOR fa el OPEN, FETCH, CLOSE cursor internament També es pot processar amb un bucle LOOP o un WHILE

Utilitzar cursor amb sentència FOR create or replace procedure pr_guardar_preu as

```sql
cursor cli is select num1,preu from taula1 where estat=’actiu’;
```

begin for x in cli loop

```sql
insert into taula2 values ( x.num1, sysdate, x.preu, ‘estat’);
    end loop;
```

end; / Cursors - exemple x és una variable de tipus ‘registre’ C u r s o r Registre

Dades estructurades vs Dades escalars

```sql
a number(8,2);
b varchar2(40);
```

c date; type llibre is record ( titol varchar2(50), autor varchar2(50),

```sql
preu number );
```

LL1 llibre; Cursors - exemple LL1 és una variable Registre Tipus escalars

- Transaccions

tablespace de UNDO ‘limitat’ commit en procediments

- Excepcions

BEGIN sentències EXCEPTION WHEN error THEN sentències quan error [RAISE_APPLICATION_ERROR(SQLCODE, SQLERRM)] *Para la execució de la rutina END; Si s’inicia una transacció i no es fa commit, UNDO creix i s’ompli Els procediments no inclouen per defecte un "commit". És important recordar-se d'executar un commit després de l'execució d'un procediment perquè els canvis siguen persistents en la base de dades.

!

- Excepcions

EXCEPTION WHEN DIVISION BY ZERO THEN ... EXCEPTION WHEN OTHERS THEN ... sentències quan error

```sql
DBMS_OUTPUT.PUT_LINE(‘Se ha producido el error ’|| SQLERRM);
```

[RAISE_APPLICATION_ERROR(SQLCODE, SQLERRM)] *Para la execució de la rutina Oracle deshabilita per defecte l'eixida per pantalla. Per a veure els missatges emesos per "dbms_ouptput.put_line" s'haurà d'habilitar prèviament l'eixida per pantalla amb la sentència "SET SERVEROUTPUT ON" Des de qualsevol rutina interna de Oracle es pot cridar a qualsevol funció o procediment invocant-ho directament sense necessitat d'incloure "execute" Es poden utilitzar les funcions o procediments inclosos en paquets del DD, precedint el nom de procediment o funció del nom del paquet al qual pertany SQLCODE i SQLERRM existeixen dins dels blocs de captura d'excepcions

Tasques automatitzables

- Còpies de Seguretat

Particionament

- Execució d’estadístiques – en horari de càrrega mínima
- Desfragmentació - alter table <nom> move;
- Reconstrucció d'índex - alter index <nom> rebuild;
- purgat i passe a històric
- Tasques de BD
- Tasques d’administració

Estes tasques es veuen més endavant ... en la unitat 5

Tasques d’administració -S’utilitzarà el diccionari de dades (amb un cursor) -Per a cada objecte de DD s’aplica la sentència corresponent Dins d’un procediment no es poden executar sentències de DDL directament. S’utilitzarà la sentència «execute immediate»

```sql
execute immediate (‘alter table’ || par_taula || ‘move’);
```

DDL: Data Definition Language

Particionament Permet dividir una taula gran en subtaules Avantatges

- Optimitza l’accés a la taula
- Optimitza les tasques d’administració
- Facilita el purgat de dades
- Facilita el manteniment
- Permet la realització de operacions d’optimització avançades

Formes de particionar: -Particions fixes (es definix quan es crea la taula) -Particions variables (es definix al llarg del temps) Una taula sempre es particiona per un camp, definint el rang de valors de cada partició Este camp deu ser numèric , data o time i amb restricció de NOT NULL El particionament es veu més endavant...

en la unitat 5

Automatització de tasques en ORACLE .........................................................................................

Eines del SO sqlplus usuari/password@servei @script.sql > log.txt I esta tasca la llancem amb el programador de tasques de SO problema de seguretat. El password està en clar Solució: Utilitzar eines del SGBD : dbms_scheduler

DBMS Scheduler - Permisos

```sql
grant create job to <usuario>
grant execute on dbms_scheduler to <usuario>;
```

 Un usuari necessita tindre permís per crear jobs (treballs) i executar-los !! DD Vista del DD : dba_scheduler_jobs

DBMS Scheduler DBMS_JOB en versions anteriors a 10g. Ara, DBMS_SCHEDULER Programa «jobs» i «chains»

```sql
DBMS_SCHEDULER.CREATE_JOB ( atribut=>valor, .....);
DBMS_SCHEDULER.SET_JOB_ARGUMENT_VALUE(‘nom_job’,1,’valor’);
DBMS_SCHEDULER.SET_JOB_ARGUMENT_VALUE(‘nom_job’,2,’valor2);
DBMS_SCHEDULER.ENABLE(‘nom_job’);
DBMS_SCHEDULER.DISABLE(‘nom_job’);
DBMS_SCHEDULER.DROP_JOB(‘nom_job’);
dbms_scheduler.set_attribute_null( name=>’nom’, attribute=>’a’);
dbms_scheduler.set_attribute(name=>’nom’,attribute=>’a’,value=>’v’);
```

En SQL Developer -conexiones

DBMS Scheduler - exemple BEGIN DBMS_SCHEDULER.CREATE_JOB ( job_name => 'nom_del_job', job_type => 'STORED_PROCEDURE', job_action => 'usuari1.actualitza_preus', start_date => sysdate , repeat_interval => 'FREQ=MONTHLY;BYMONTHDAY=1', auto_drop => FALSE,

```sql
comments           =>  'Aclariments del treball...',   );
```

END; / MENSUAL, CADA DIA 1 esquema.procedure Nom del treball Atributs Valors

Automatització de tasques en Postgres .........................................................................................

Automatització en postgres Des de SO cron ( linux ) Task manager ( windows) Des de postgres pgAgent (en pgAdmin) pg_cron (en servidor)

Triggers en postgres Primer pas - Definició de la funció del trigger Segon pas - Definició del trigger CREATE OR REPLACE FUNCTION nom_funcio() RETURNS trigger AS $$ BEGIN sentencies RETURN NEW; (RETURN NULL;) END; $$ LANGUAGE 'plpgsql';

Triggers en postgres Segon pas - Definició del trigger CREATE [ OR REPLACE ] TRIGGER name { BEFORE | AFTER | INSTEAD OF } { event [ OR ... ] } ON table_name [ FOR [ EACH ] { ROW | STATEMENT } ] [ WHEN ( condition ) ] EXECUTE { FUNCTION | PROCEDURE } function_name ( arguments )

“ ” Activitat Investiga com funciona el pg_cron de postgres

---

## 5.6 Butlletí procediments i funcions

> **✍️ Pràctica : Crear procediments amb pl/sql Per realitzar esta pràct**
> Pràctica : Crear procediments amb pl/sql Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb usuari sys en pdb1, Crear usuari usuari3 (donar-li contrasenya i permisos de connexió i creació de procediments i funcions) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.

Connecta a pdb1 amb l’usuari creat (usuari3) Realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)

```sql
CREATE TABLE llibres(
```

codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL, autor VARCHAR2(30), editorial VARCHAR2(40), preu number(8,2)

```sql
);
```

#### 1) Escriure un bloc PL/SQL que escriga el text ‘Hola’

SET SERVEROUTPUT ON; BEGIN

```sql
DBMS_OUTPUT.PUT_LINE('HOLA');
```

END; /

- Escriure un bloc PL/SQL que compte el nombre de files que hi ha en la taula llibres, deposita el

resultat en la variable v_num, i visualitza el seu contingut. 2.1 – Guardar el bloc en un fitxer anomenat PROG01.SQL en c:\users\asix\Documents

#### 3) Carregar i executar el bloc guardat en l'arxiu PROG01.SQL de c:\users\asix\Documents

4)Escriure un procediment que reba dos números i visualitze la seua suma.

- Codificar un procediment que reba una cadena i la visualitze a l'inrevés.
- Escriure una funció que reba una data i retorne l'any, en número, corresponent a aqueixa data.
- Escriure un bloc PL/SQL que faça ús de la funció anterior.

#### 8) Donat el següent procediment

CREATE OR REPLACE PROCEDURE crear_llibre ( v_num llibres.llibreid%TYPE, v_titol llibres.titol%TYPE default 'sense titol', v_autor llibes.autor%TYPE DEFAULT 'anònim') IS BEGIN

```sql
INSERT INTO llibres
VALUES (v_num , v_titol, v_autor);
```

END crear_llibre; ------ Detecta els errors i corregix-los (compila i executa primer ) Indicar quins de les següents cridades al procediment són correctes i quins incorrectes, en aquest últim cas escriure la crida correcta usant la notació posicional (en els casos que es puga)

1º. crear_llibre;

```sql
2º. crear_llibre(50);
3º. crear_llibre('Hackers');
4º. crear_llibre(50,'Hackers');
5º. crear_llibre('Hackers', 50);
6º. crear_llibre('Hackers', 'McClure');
7º. crear_llibre(50, 'Hackers', 'McClure');
8º. crear_llibre('Hackers', 50, 'McClure');
9º. crear_llibre('McClure', ‘Hackers’);
10º. crear_llibre('McClure', 50);
```

#### 9) Desenvolupar una funció que retorne el nombre d'anys complets que hi ha entre

dues dates que es passen com a arguments. Fes servir la funció amb un exemple.

- Escriure una funció que, fent ús de la funció anterior retorne els triennis que hi ha entre dues

dates. (Un trienni són tres anys complets). Fes servir la funció amb un exemple.

- Codificar un procediment que reba una llista de fins a 5 números i visualitze la seua suma.

Fes servir el procediment amb un exemple.

- Escriure una funció que retorne solament caràcters alfabètics substituint qualsevol altre

caràcter per blancs a partir d'una cadena que es passarà en la crida. Fes servir la funció amb un exemple.

- Implementar un procediment que reba un import i visualitze el desglossament del canvi en

unitats monetàries de 1c ,2c, 5c, 10c, 20c, 50c, 1€, 2€, 5€, 10€, 20€, 50€, 100€, 200€, 500€ en ordre invers al que apareixen ací enumerades. Fes servir el procediment amb un exemple.

- Codificar un procediment que permeta esborrar un llibre el número(id) del qual es passarà en la

cridada al procediment. Nota: El procediment anterior retornarà el missatge << Procedimiento PL/SQL terminado con éxito >> encara que no existisca el número i, per tant , no s'esborre el llibre. Pots fer que s’informe d’aquesta situació quan es produeixca ?

#### 15) Escriure un procediment que modifique el títol d’un llibre. El procediment rebrà com a

paràmetres el número del llibre i el títol nou. Nota: L'indicat en la nota de l'exercici anterior es pot aplicar també a aquest.

- Visualitzar tots els procediments i funcions de l'usuari emmagatzemats en la base de dades i la

seua situació (vàlid o invalid). Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

---

## 5.7 Butlletí triggers

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD BUTLLETÍ TRIGGERS

### 0. Crea un usuari (usuari4) amb permisos per fer les operacions

necessàries d’esta pràctica. Connecta amb l’usuari. Crea les taules EMP, ALUMNES, NOTES (esquema de baix) i pobla-les

- Fes un trigger que només permeta als venedors (CARREC=VENEDOR) tindre comissions.

### 2. Registrar totes les operacions realitzades per l’usuari BERNAT sobre la taula EMP, en

una taula anomenada AUDIT_EMP on es guarde: usuari, data i tipus d'operació.

### 3. Fes un trigger que controle que els sous estan en els següents rangs

AUXILIAR: 800 – 1100 ANALISTA: 1200 – 1600 CAP:1800 – 2000 ((Si un empleat té uns altres al seu càrrec o el seu CÀRREC no és un dels anteriors, no s'apliquen els límits.))

- JOAN treballa en una empresa multinacional, amb delegacions en molts pobles.

JOAN es el cap de la delegació de SUECA. Fes un trigger que impedisca a l'usuari JOAN que canvie el sou dels empleats que treballen fora de SUECA.

### 5. Fes un trigger que puge un 10% el sou als empleats quan canvia la localitat on

treballen.

### 6. Dissenya un trigger que impedisca la introducció de registres en la taula Alumnes si

contenen algun caràcter numèric o algun caràcter de puntuació en el camp Apenom.

### 7. Dissenya un trigger que cada vegada que es produïsca un canvi en la taula NOTES,

actualitze una columna anomenada NOTA_MITJANA en la taula ALUMNES però sols en les files d'aquesta taula en les quals l'actualització sigui necessària. Taules EMP DNI (pk) NOMCOMPLET NO NULL ADRESS CITY CP NSS CARREC NO NULL SOU_MES NO NULL SOU_EXTRA NO NULL COMISSIO NO NULL POB_TREBALL NO NULL CAP (fk , dni->emp) ALUMNES NIA (pk) APENOM ADRESS CITY CP TELEF EMAIL NOTA_MITJANA NOTES NIA (fk, nia->alumnes) MODUL NOTA (pk) NIA , MODUL

---

## 5.8 Solucions a pl/sql

### 📄 32 Activitat triggers_III_SOL.pdf

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Activitat Crear (2) triggers amb pl/sql Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb usuari system en pdb1, Crear usuari usuari13 (donar-li contrasenya i permisos de connexió i creació de triggers) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.

Connecta a pdb1 amb l’usuari creat (usuari13) Realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)

```sql
DROP TABLE llibres;
CREATE TABLE llibres(  codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL,
```

autor VARCHAR2(30) , editorial VARCHAR2(40), impressor VARCHAR2(40),

```sql
preu number(8,2) , datadalta date );
```

Crea la taula control_llibres

```sql
DROP TABLE control_llibres;
CREATE TABLE control_llibres(  data_canvi DATE,  usuari VARCHAR2(10),
```

codi_llibre NUMBER(6), preu_abans NUMBER(8,2), preu_despres NUMBER(8,2),

```sql
operacio_denegada VARCHAR2(50)  );
```

- Crear un disparador (nom: canvi_preus) que guarde quan i qui canvia un preu de la taula llibres,

el preu nou i el vell. En la exploració dels resultats, que informació te el camp ‘DATA_CANVI’ ? Es pot vore l’hora i minuts del canvi de preu ?

- Crea un disparador (nom: horari_laboral) que no ens permeta dur a terme operacions amb

llibres si no estem en la jornada laboral. (8h – 20h) Dilluns a Divendres, i a més a més, guarde els intents en la taula control_llibres. En tots els exercicis, documenta les proves necessàries i els resultats. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Solucionari 1) create or replace trigger canvi_preus before update of preu on llibres for each row begin

```sql
insert into control_llibres values (sysdate, user, :old.codi, :old.preu, :new.preu,'update');
```

end; 2) create or replace trigger horari_laboral before update or insert or delete on llibres for each row declare

```sql
v_dia number := to_char(sysdate,'D');
   v_hora number := to_char(sysdate,'HH24') ;
```

begin if (v_dia=6 or v_dia=7 or v_hora<8 or v_hora>19) then

```sql
insert into control_llibres values (sysdate,user,0,0,0,'ForaHorari');
       -- el insert es farà i es desfarà per el rollback del ERROR
      RAISE_APPLICATION_ERROR(-20011, 'No se puede operar fuera de horario');
    end if;
```

end;

### 📄 10 procediment_v2_SOL.pdf

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear procediment emmagatzemat en Oracle Esta pràctica no funciona molt bé ... Esbrina perquè i fes les modificacions oportunes per a que funcione.

Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQL Developer Amb usuari system en pdb1: Crear usuari usuari1 (donar-li contrasenya i permisos de connexió, crear taules, crear procediments) connectar com a system

```sql
create user usuari1 identified by 1234 quota 10M on users;
grant connect,create table, create procedure to usuari1;
```

Crear usuari usuari2 (donar-li contrasenya i permisos de connexió )

```sql
create user usuari2 identified by 1234;
grant connect to usuari2;
```

Amb usuari1 en pdb1: Crear taula llibres3

```sql
CREATE TABLE llibres3(  codi NUMBER(6) PRIMARY KEY,
```

titol VARCHAR2(30) NOT NULL, editorial VARCHAR2(30),

```sql
preu NUMBER(8,2),  datadalta date );
```

Crear un procediment (nom amay) que pose totes les dades de la taula en majúscules

```sql
create procedure amay
```

as begin

```sql
update llibres3 set titol=upper(titol), editorial=upper(editorial);
```

commit; end; Donar-li a usuari2 permís d’execució del procediment creat. Des de system, no des de usuari1

```sql
grant execute on usuari1.amay to usuari2;
```

Inserir 3 files amb dades en majúscules i minúscules *si no funciona, falta quota 2M on users, o falta connectar amb usuari1. Llistar dades de la taula

```sql
select * from llibres3;
```

Amb usuari2 en pdb1: executar procediment (execute usuari1.amay;) explorar resultats (llistar dades) -- (comenta que succeeix i perquè) no es pot, no te permís per a llistar (select). S’ha de fer des de usuari1. si amay no te commit, tampoc s’actualitza ( està canviat, però no s’actualitza) Inserir 2 files més amb dades en majúscules i minúscules (comenta que succeeix i perquè) no es pot des de usuari2, si des de usuari1 explorar resultats (comenta que succeeix i perquè). Si no està en majúscules, es per que falta un commit; Com podríem solucionar-ho posar un commit dins del procediment

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Des d’usuari1, crea un procediment que inserisca llibres de la editorial ‘Sintesis’ , anomenat inserixSintesis , on se li pase com a paràmetre, el nom del llibre i el preu.

El procediment buscará l’úlim codi de la taula, l’incrementarà en 1 per a donar de alta el nou registre connectar amb usuari1 create or replace procedure inserixSintesis (pnom varchar2, ppreu number ) as vultim number; begin

```sql
select max(codi) into vultim from llibres3;
  vultim := vultim + 1;
  insert into llibres3 values ( vultim, pnom, 'sintesis', ppreu, sysdate);
```

commit; end; Dona permís a usuari2 per executar el nou procediment i prova’l des d’usuari2 des de usuari1, grant execute on inserixSintesis to usuari2;

```sql
des de usuari2 .   exec usuari1.inserixSintesis (‘titol4’,50);
```

Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ---------------------------------------- Taula Llibres3

```sql
CREATE TABLE llibres3(  codi NUMBER(6) PRIMARY KEY,
```

titol VARCHAR2(30) NOT NULL, editorial VARCHAR2(30),

```sql
preu NUMBER(8,2),  datadalta date );
```

### 📄 06 butlleti repas_1.pdf

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Butlletí repàs PL/SQL Connecta amb SYSTEM a pdb1 Crea usuari usuari1 Donar permisos a usuari1 Connecta amb usuari1 en pdb1 Tasca 1 Crea un bloc anònim que demane dos números (utilitza dos variables de substitució) i diga la suma, la multiplicació, la resta, la divisió dels números.

Tasca 2 Càlcul de la superfície de diverses figures geomètriques. (utilitza tres variables de substitució) Rectangle base*altura Quadrat base Triangle (base*altura) / 2 Cercle ∏*radi Tasca 3 Crea un fragment de codi que donat un mes de l’any en número (de 1 a 12), i a continuació, que mostre el nom del mes. (utilitza variables de substitució) Tasca 4 Fes un altre fragment que donat un mes (utilitza variables de substitució), en lloc de mostrar el nom del mes, mostre els dies que té. (Considerem que febrer sempre té 28 dies).

Tasca 5 un altre fragment que donat un dia de la setmana en número (d’1 a 7) i, a continuació que mostre si el dia introduït és entre setmana o cap de setmana. (utilitza variables de substitució) Tasca 6 un bloc anònim que reba una cadena i la visualitze a l'inrevés. (utilitza variables de substitució).

Transforma el bloc anònim en un procediment. Tasca 7 una fragment de codi que retorne el nombre d'anys complets que hi ha entre dues dates que es passen com a strings. Transforma el bloc anònim en una funció. Tasca 8 un bloc anònim que retorne solament caràcters alfabètics substituint qualsevol altre caràcter per blancs a partir d'una cadena que es passarà en una variable de substitució TIPS: Pots utilitzar funcions predefinides de PL/SQL round( n) trunc( n) mod(n,m ) floor(n ) Ceil(n ) Length( s) Lower(s ) Upper(s ) Ascii(s ) Chr(n ) Substr(s,n [,l]) trim(s) instr(c,s) || initcap(s) replace(s,s1,s2) Data2 – data1 : resultat , num de dies entre les dos dates Data1 + num : resultat , data de ‘num’ de dies més que Data1

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Ajuda: Solució 1 declare

```sql
v1 number := &numero1;
    v2 number := &numero2;
```

begin

```sql
dbms_output.put_line(' la suma es : ' || (v1 + v2) );
    -- les altres operacions, igual però amt  * /  -
```

end; Solució 2 declare

```sql
vbase number := &base;
    valtura number := &altura;
    vradi number := &radi;
```

begin

```sql
dbms_output.put_line(' area de rectangle  es : ' || (vbase *  valtura) );
    --  Igual en el quadrat, triangle i cercle.
```

end; Solució 3 declare

```sql
vmes number := &mes;
```

begin if (vmes = 1) then

```sql
dbms_output.put_line(' El mes es Gener ');
    end if;
    --   del 2 al 12 , igual, canviant el nom.
```

end; Solució 4 -- igual qu el 3, pero escrivint els nombre de dies Solució 5 declare

```sql
vdiasem number := &dia_de_la_setmana;
```

begin if (vdiasem >= 1) and (vdiasem <= 5) then

```sql
dbms_output.put_line(' El dia es entre setmana ');
    else dbms_output.put_line(' El dia es cap de setmana ');
    end if;
    --
```

end; Solució 6 declare

```sql
vcad varchar2(19) := '&cadena';
    vlong number;
```

begin

```sql
vlong := length(vcad);
    -- dbms_output.put_line(' Longitud ' || vlong);
    -- potser ara falta un FOR
    for contador in reverse 1..vlong loop
         dbms_output.put_line( substr(vcad, contador, 1 ) );
    end loop;
```

end; Solució 7 declare

```sql
vd1 date := '&data1';
    vd2 date := '&data2';
```

begin

```sql
dbms_output.put_line(' Anys entre dates ' || trunc((vd2 - vd1)/365) );
```

end;

CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Solució 8 declare

```sql
vcad varchar2(30) := '&dame_cadena';
    vcad2 varchar2(30) := '';
```

begin for contador in 1..length(vcad) loop if substr(vcad,contador,1) between 'a' and 'z' then

```sql
vcad2 := vcad2 || substr(vcad,contador,1);
       elsif  substr(vcad,contador,1) between 'A' and 'Z' then
          vcad2 := vcad2 || substr(vcad,contador,1);
       else
          vcad2 := vcad2 || ' ';
       end if;
    end loop;
    dbms_output.put_line(vcad2);
```

end;

### 📄 15 butlleti proc i funcs pl-sql-solucionari.pdf

Solucionari : Crear procediments amb pl/sql Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb usuari sys en pdb1, Crear usuari usuari3 (donar-li contrasenya i permisos de connexió i creació de procediments i funcions) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.

Amb usuari sys alter database pdb1 open;

```sql
create user usuari3 identified by 1234;
grant create session to usuari3;
grant create procedure, create trigger to usuari3;
grant create table to usuari3;
```

alter user usuari3 quota 10M on USERS;

Connecta a pdb1 amb l’usuari creat (usuari3) Realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)

```sql
CREATE TABLE llibres(
```

codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL, autor VARCHAR2(30), editorial VARCHAR2(40), preu number (8,2)

```sql
);
insert into llibres values (1,’Bases de datos relacionales’,’Mota’,’Pearson’,50);
insert into llibres values (2 ,’El lenguaje de programacion C’,’Kernigan’,’Prentice
Hall’,60);
insert into llibres values (3 ,’Fundamentos de JAVA’,’Schildt’,’Mc GrawHill’,55);
insert into llibres values (4 ,’Redes de Computadoras’,’Kurose’,’Pearson’,70);
insert into llibres values (5 ,’Sistemas Operativos’,’Tanenbaum’,’Prentice
Hall’,60);
```

1.- Escriure un bloc PL/SQL que escriga el text ‘Hola’ SQL> SET SERVEROUTPUT ON; SQL> BEGIN

```sql
2 DBMS_OUTPUT.PUT_LINE('HOLA');
```

3 END; 4 /

2.- Escriure un bloc PL/SQL que compte el nombre de files que hi ha en la taula llibres, deposita el resultat en la variable v_num, i visualitza el seu contingut. SQL>DECLARE 2 v_num NUMBER; 3 BEGIN 4 SELECT count(*) INTO v_num 5 FROM llibres;

```sql
6 DBMS_OUTPUT.PUT_LINE(v_num);
```

7 END; 8 / 2.1 – Guardar el bloc en un fitxer anomenat PROG01.SQL en c:\users\asix\Documents 3.- Carregar i executar el bloc guardat en l'arxiu PROG01.SQL de c:\users\asix\Documents SQL> START c:\users\asix\Documents\PROG01.SQL O també: SQL> GET c:\users\asix\Documents\PROG01.SQL SQL> RUN

4)Escriure un procediment que reba dos números i visualitze la seua suma. CREATE OR REPLACE PROCEDURE sumar_numeros ( num1 NUMBER, num2 NUMBER) IS

```sql
suma NUMBER(6);
```

BEGIN

```sql
suma := num1 + num2;
DBMS_OUTPUT.PUT_LINE('Suma: '|| suma);
```

END sumar_numeros;

- Codificar un procediment que reba una cadena i la visualitze a l'inrevés.

CREATE OR REPLACE PROCEDURE cadena_reves( vcadena VARCHAR2) AS

```sql
vcad_reves VARCHAR2(80);
```

BEGIN FOR i IN REVERSE 1..LENGTH(vcadena) LOOP

```sql
vcad_reves := vcad_reves || SUBSTR(vcadena,i,1);
```

END LOOP;

```sql
DBMS_OUTPUT.PUT_LINE(vcad_reves);
```

END cadena_reves;

- Escriure una funció que reba una data i retorne l'any, en número, corresponent a aqueixa data.

CREATE OR REPLACE FUNCTION any ( fecha DATE) RETURN NUMBER AS

```sql
v_any NUMBER(4);
```

BEGIN

```sql
v_any := TO_NUMBER(TO_CHAR(fecha, 'YYYY'));
```

RETURN v_any; END any;

- Escriure un bloc PL/SQL que faça ús de la funció anterior.

DECLARE

```sql
n NUMBER(4);
```

BEGIN

```sql
n := any(SYSDATE);
DBMS_OUTPUT.PUT_LINE('AÑO : '|| n);
```

END;

Detecta els errors i corregix-los (compila i executa primer ) CREATE OR REPLACE PROCEDURE crear_llibre ( v_num llibres.codi%TYPE, v_titol llibres.titol%TYPE default 'sense titol', v_autor llibes.autor%TYPE DEFAULT 'anònim') IS BEGIN

```sql
INSERT INTO llibres
VALUES (v_num , v_titol, v_autor, null , null);
```

END crear_llibre; ------ Indicar quins de les següents cridades al procediment són correctes i quins incorrectes (i perquè), en aquest últim cas escriure la crida correcta usant la notació posicional (en els casos que es puga): 1º. crear_llibre;

```sql
2º. crear_llibre(50);
3º. crear_llibre('Hackers');
4º. crear_llibre(50,'Hackers');
5º. crear_llibre('Hackers', 50);
6º. crear_llibre('Hackers', 'McClure');
7º. crear_llibre(50, 'Hackers', 'McClure');
8º. crear_llibre('Hackers', 50, 'McClure');
9º. crear_llibre('McClure', ‘Hackers’);
10º. crear_llibre('McClure', 50);
```

1r Incorrecta: cal passar almenys el codi. 2n Correcta. 3r Incorrecta: cal passar també el codi. 4t Correcta 5é Incorrecta: els arguments estan en ordre invers. Solució

```sql
crear_llibre(50, 'Hackers');
```

6é Incorrecta: cal passar també el codi. 7é Correcta. 8é Incorrecta: l'ordre dels arguments és incorrecte.

```sql
Solució: crear_llibre(50, 'Hackers', 'McClure');
```

9é Incorrecta: cal passar també el codi. 10é Incorrecta: els arguments estan en ordre invers i .

```sql
Solució:    execute crear_llibre(50, NULL, 'McClure');
```

dues dates que es passen com a arguments. CREATE OR REPLACE FUNCTION anys_dif ( fecha1 DATE, fecha2 DATE) RETURN NUMBER AS

```sql
v_anys_dif NUMBER(6);
```

BEGIN v_anys_dif := ABS(TRUNC(MONTHS_BETWEEN(fecha2,fecha1)

```sql
/ 12));
```

RETURN v_anys_dif; END anys_dif; Fes servir la funció amb un exemple.

```sql
SELECT anys_dif (‘1/1/2005’,’5/7/2022’)  from dual;
```

- Escriure una funció que, fent ús de la funció anterior retorne els triennis que hi ha entre dues

dates. (Un trienni són tres anys complets). CREATE OR REPLACE FUNCTION trienios ( fecha1 DATE, fecha2 DATE) RETURN NUMBER AS

```sql
v_trienios NUMBER(6);
```

BEGIN

```sql
v_trienios := TRUNC(anios_dif(fecha1,fecha2) / 3);
```

RETURN v_trienios; END; Fes servir la funció amb un exemple.

```sql
SELECT trienios (‘1/1/2005’,’5/7/2022’)  from dual;
```

- Codificar un procediment que reba una llista de fins a 5 números i visualitze la seua suma.

CREATE OR REPLACE PROCEDURE sumar_5numeros ( Num1 NUMBER DEFAULT 0, Num2 NUMBER DEFAULT 0, Num3 NUMBER DEFAULT 0, Num4 NUMBER DEFAULT 0, Num5 NUMBER DEFAULT 0) AS BEGIN

```sql
DBMS_OUTPUT.PUT_LINE(Num1 + Num2 + Num3 + Num4 + Num5);
```

END sumar_5numeros; Fes servir el procediment amb un exemple.

```sql
execute sumar_5numeros ( 4,7,2,6,31);
execute sumar_5numeros ( 2, 6, 31);
```

- Escriure una funció que retorne solament caràcters alfabètics substituint qualsevol altre

caràcter per blancs a partir d'una cadena que es passarà en la crida. CREATE OR REPLACE FUNCTION sust_por_blancos( cad VARCHAR2) RETURN VARCHAR2 AS

```sql
nueva_cad VARCHAR2(30);
```

car CHARACTER; BEGIN FOR i IN 1..LENGTH(cad) LOOP

```sql
car:=SUBSTR(cad,i,1);
```

IF (ASCII(car) NOT BETWEEN 65 AND 90) AND (ASCII(car) NOT BETWEEN 97 AND 122) THEN

```sql
car :=' ';
```

END IF;

```sql
nueva_cad := nueva_cad || car;
```

END LOOP; RETURN nueva_cad; END sust_por_blancos; Fes servir la funció amb un exemple.

```sql
SELECT sust_por_blancos (‘en?un$lugar%de)la@mancha’)  from dual;
```

- Implementar un procediment que reba un import i visualitze el desglossament del canvi en

unitats monetàries de 1c ,2c, 5c, 10c, 20c, 50c, 1€, 2€, 5€, 10€, 20€, 50€, 100€, 200€, 500€ en ordre invers al que apareixen ací enumerades. CREATE OR REPLACE PROCEDURE desglose_cambio( importe NUMBER) AS

```sql
cambio NATURAL := importe;
```

moneda NATURAL; v_uni_moneda NATURAL; BEGIN

```sql
DBMS_OUTPUT.PUT_LINE('***** DESGLOSE DE: ' || importe );
```

WHILE cambio > 0 LOOP IF cambio >= 500 THEN

```sql
moneda := 500;
```

ELSIF cambio >= 200 THEN

```sql
moneda := 200;
```

ELSIF cambio >= 100 THEN

```sql
moneda := 100;
```

ELSIF cambio >= 50 THEN

```sql
moneda := 50;
```

ELSIF cambio >= 20 THEN

```sql
moneda := 20;
```

ELSIF cambio >= 10 THEN

```sql
moneda := 10;
```

ELSIF cambio >= 5 THEN

```sql
moneda := 5;
```

ELSIF cambio >= 2 THEN

```sql
moneda := 2;
```

ELSIF cambio >= 1 THEN

```sql
moneda := 1;
```

ELSIF cambio >= 0,50 THEN

```sql
moneda := 0,50;
```

ELSIF cambio >= 0,25 THEN

```sql
moneda := 0,25;
```

ELSIF cambio >= 0,10 THEN

```sql
moneda := 0,10;
```

ELSIF cambio >= 0,05 THEN

```sql
moneda := 0,05;
```

ELSE

```sql
moneda := 0,01;
```

END IF;

```sql
v_uni_moneda := TRUNC(cambio / moneda);
```

DBMS_OUTPUT.PUT_LINE(v_uni_moneda ||

```sql
' Unidades de: ' || moneda || ' € ');
cambio := MOD(cambio, moneda);
```

END LOOP; END desglose_cambio;

```sql
Fes servir el procediment amb un exemple.  ->    execute desglose_cambio (1543);
```

- Codificar un procediment que permeta esborrar un llibre el número(id) del qual es passarà en la

cridada al procediment. CREATE OR REPLACE PROCEDURE borrar_llibre( num_id llibre.llibreid%TYPE) AS BEGIN

```sql
DELETE FROM llibre WHERE emp_no = num_id;
```

END borrar_llibre; Nota: El procediment anterior retornarà el missatge << Procedimiento PL/SQL terminado con éxito >> encara que no existisca el número i, per tant , no s'esborre el llibre. Pots fer que s’informe d’aquesta situació que es produeixca ? Fes servir el procediment amb un exemple.

```sql
Execute borrar_llibre ( 50);
```

paràmetres el número del llibre i el títol nou. CREATE OR REPLACE PROCEDURE modificar_llibre( num_id NUMBER, noutitol VARCHAR2) AS BEGIN

```sql
UPDATE llibres  SET titol = noutitol
WHERE llibreid = num_id;
```

END modificar_llibre; Nota: L'indicat en la nota de l'exercici anterior es pot aplicar també a aquest.

- Visualitzar tots els procediments i funcions de l'usuari emmagatzemats en la base de dades i la

seua situació (valid o invalid). SELECT OBJECT_NAME, OBJECT_TYPE, STATUS FROM USER_OBJECTS

```sql
WHERE OBJECT_TYPE IN ('PROCEDURE','FUNCTION');
```

> **⚠️ Nota: També es pot utilitzar la vista ALL_OBJECTS....**
> Nota: També es pot utilitzar la vista ALL_OBJECTS.

---

## ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — (ASGBD) Procediments en Oracle**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear procediment emmagatzemat en Oracle Esta pràctica no funciona molt bé ... Esbrina perquè i fes les modificacions oportunes per a que funcione. Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQL Developer Amb usuari system en pdb1
>
> Crear usuari usuari1 (donar-li contrasenya i permisos de connexió, crear taules, crear procediments) Crear usuari usuari2 (donar-li contrasenya i permisos de connexió ) Amb usuari1 en pdb1: Crear taula llibres3 Crear un procediment (nom amay) que pose totes les dades de la taula en majúscules Donar-li a usuari2 permís d’execució del procediment creat.
>
> Inserir 3 files amb dades en majúscules i minúscules Llistar dades de la taula Amb usuari2 en pdb1: executar procediment (execute usuari1.amay;) explorar resultats (llistar dades) -- (comenta que succeeix i perquè) Inserir 2 files més amb dades en majúscules i minúscules (comenta que succeeix i perquè) explorar resultats (comenta que succeeix i perquè) Com podríem solucionar-ho Des d’usuari1, crea un procediment que inserisca llibres de la editorial ‘Sintesis’ , anomenat inserixSintesis , on se li pase com a paràmetre, el nom del llibre i el preu.
>
> El procediment buscará l’úlim codi de la taula, l’incrementarà en 1 per a donar de alta el nou registre Dona permís a usuari2 per executar el nou procediment i prova’l des d’usuari2 Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ---------------------------------------- Taula Llibres3
>
> ```sql
> CREATE TABLE llibres3(  codi NUMBER(6) PRIMARY KEY,
> ```
>
> titol VARCHAR2(30) NOT NULL, editorial VARCHAR2(30),
>
> ```sql
> preu NUMBER(8,2),  datadalta date );
> ```

> **✍️ Activitat Pràctica 5.2 — (ASGBD) Activitat Triggers**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Activitat Crear (2) triggers amb pl/sql Per realitzar esta pràctica, utilitzarem la mv Windows 10 i Oracle SQL Developer Amb usuari system en pdb1, Crear usuari usuari13 (donar-li contrasenya i permisos de connexió i creació de triggers) Dona-li permisos de crear taules i assigna quota (10M) en el tablespace per defecte.
>
> Connecta a pdb1 amb l’usuari creat (usuari13) Realitza els següents exercicis i practica : 0.- Crea la taula llibres i ompli-la (5 files)
>
> ```sql
> DROP TABLE llibres;
> CREATE TABLE llibres(  codi NUMBER(6) PRIMARY KEY, titol VARCHAR2(50) NOT NULL,
> ```
>
> autor VARCHAR2(30) , editorial VARCHAR2(40), impressor VARCHAR2(40),
>
> ```sql
> preu number(8,2) , datadalta date );
> ```
>
> Crea la taula control_llibres
>
> ```sql
> DROP TABLE control_llibres;
> CREATE TABLE control(  data_canvi DATE,  usuari VARCHAR2(10),
> ```
>
> codi_llibre NUMBER(6), preu_abans NUMBER(8,2), preu_despres NUMBER(8,2),
>
> ```sql
> operacio_denegada VARCHAR2(10)  );
> ```
>
> - Crear un disparador (nom: canvi_preus) que guarde quan i qui canvia un preu de la taula llibres,
>
> el preu nou i el vell. En la exploració dels resultats, que informació te el camp ‘DATA_CANVI’ ? Es pot vore l’hora i minuts del canvi de preu ?
>
> - Crea un disparador (nom: horari_laboral) que no ens permeta dur a terme operacions amb
>
> llibres si no estem en la jornada laboral. (8h – 20h) Dilluns a Divendres, i a més a més, guarde els intents en la taula control_llibres. En tots els exercicis, documenta les proves necessàries i els resultats. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF

> **✍️ Activitat Pràctica 5.3 — (ASGBD) Activitat Jobs**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: PRESENCIAL 46680 Algemesí MÒDUL: ASGBD Pràctica : Crear job en Oracle Per realitzar esta pràctica, utilitzarem la mv Windows 10 amb Oracle SQL Developer Amb usuari system en pdb1: Crear usuari usuari4 (donar-li contrasenya i permisos de connexió i crear taules, procediments, triggers, jobs) Amb usuari4 en pdb1
>
> En una empresa d'assegurances. Tindrem dues taules. Una de pòlisses i una altra de rebuts mensuals. Cada mes, s'hauran de generar els rebuts dels clients que tinguen la seua pòlissa activa. Crear taula polisses Crear taula rebuts Poblar la taula polisses ( 3 o 4 pòlisses ) Crear un procediment (nom: calcula_rebuts) que genere els rebuts d’un mes.
>
> Provar procediment. Crear un job que execute el procediment el primer dia de cada mes, a les 00h:01min Documentar el procés Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada Entregar el document en format PDF ---------------------------------------- Taules
>
> ```sql
> CREATE TABLE polisses(
> ```
>
> numpolissa NUMBER(6) PRIMARY KEY, codiclient NUMBER(6) , nom VARCHAR2(50) NOT NULL, prima number(8,2), estat VARCHAR2(10), preu number(8,2)
>
> ```sql
> );
> CREATE TABLE rebuts(
> ```
>
> numpolissa NUMBER(6) not null , datap DATE not null , quantitat NUMBER(6) not null, estat varchar2(10) not null , constraint rebuts_pk primary key (datap, numpolissa)
>
> ```sql
> );
> insert into polisses values (1,1,’pepe’, 100,’actiu’,100);
> ```

> **✍️ 📋 Exercici / Qüestionari 5.4 — Qüestionari Repàs de classe (UD4)**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
