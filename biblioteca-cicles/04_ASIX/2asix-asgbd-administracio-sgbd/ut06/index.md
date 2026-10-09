---
layout: default
title: "UD6 — Disponibilitat d'un SGBD · Temari Complet"
course_root: ".."
badge: "2n ASIX · Grau Superior · UD6 — Disponibilitat d'un SGBD"
prev_url: "../ut05/ut0501.html"
prev_label: "⬅️ 5.1 Optimització de l'SGBD"
next_url: "../ut06/ut0601.html"
next_label: "6.1 Disponibilitat d'un SGBD ➡️"
---

# 📘 UD6 — Disponibilitat d'un SGBD (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**6.1 Disponibilitat d'un SGBD**](./ut0601.md)

---

# 6.1 Disponibilitat d'un SGBD

### UNITAT 06 Disponibilitat del SGBD

Disponibilitat del SGBD

reconeixer la utilitat de les bases de dades distribuïdes. -descriure les diverses polítiques de fragmentació de la informació. -implantar una base de dades distribuïda homogènia. -crear una base de dades distribuïda mitjançant la integració d'un conjunt de bases de dades preexistents.

- configurar un node mestre i diversos esclaus per dur a terme la

replicació del primer. -configurar un sistema de replicació en cadena. -comprovar l'efecte de la parada de determinats nodes sobre els sistemes distribuïts i els replicats.

L’SGBD és un del recursos més critics d’una oraganització Per això l’alta disponibilitat de l’SGBD es clau Tecnologies

- Emprar un SGBD distribuït SGBDD
- Implementar un cluster de servidors
- Treballar amb un SGBD en el núvol

núvol:HW dedicat o Serveis

Avantatges del núvol Cost Alt rendiment i escalabilitat Alta disponibilitat Alt nivell de seguretat Completament administrat Compatibilitat amb els sistemes gestors existents actuals Millor solució en entorns de teletreball

Desavantatges del núvol Dependència d’un tercer Caiguda de connexió a internet Seguretat de la informació No disposar del control total de la informació

Oracle en el núvol Oracle cloud AWS Azure .....

Implementar un Cluster de servidors

En un SGBDD , tots el nodes són SGBD En un Cluster, cada node pot tindre un paper (rol) ( dades, SGBD, administració, ...) Avantatges

- Alt Rendiment
- Alta disponibilitat
- Balanceig de carrega
- Escalabilitat

Desavantatges

- Cost ( comparat en el núvol)

SGBDD Nodes + Xarxa + BDD Transaccions locals Transaccions globals BDD

- Disseny
- Arquitectura

BDD = Conjunt de BD’s lògicament relacionades repartides en diferents espais lògics i físics SGBDD sorgix a partir de : Increment de prestacions de les xarxes, necessitat de compartir informació i tendència a la descentralització DISTRIBUÏT Emprar un SGBD distribuït : SGBDD

Avantatges dels SGBDD Instalació més econòmica Més flexibles Permet creixement incremental Redueix la sobrecàrrega de comunicació Més rendiment ( processament en paralel) Major disponibilitat Més modulars

Desavantatges dels SGBDD Cost d’administració Transaccions distribuides incrementen la complexitat Existeix duplicitat d’informació Les transaccions globals requereix mes temps Els disseny és més complex De vegades es requerix conversions de dades

Tipus de SGBDD Segons el tipus de SW Homogeni Heterogeni Segons la distribució de la informació Centralizada Distribuida amb nodo principal Replicada Fragmentada Híbrida

Replicació Quan la informació es comú Fragmentació Hotitzontal Vertical Mixta

Disseny d’una BDD -Esquema global -Esquema de fragmentació -Esquema de localització -Esquema local Dblink Permet establir una connexió entre dos SGBD

Fragmentació S’implementa amb dblinks Replicació Es basa en l’us del quadern de bitàcola

Replicació -Unidireccional Node mestre (canvis) i node esclau -Bidireccional Els dos nodes son mestre i esclau -Multidireccional Node mestre (canvis) i tots els altres esclaus La replicació pot ser multidireccional i bidireccional simultàniament !! (un node pot ser mestre en una replicació multidireccional i esclau en una altra replicació multidireccional )

Disponibilitat en ORACLE .........................................................................................

Fragmentació Primer s’ha de crear els Database Links o dblinks CREATE [SHARED][PUBLIC] DATABASE LINK <dblink> CONNECT TO <usu_remot> IDENTIFIED BY <pass de usu remot> USING <cadena de connexio> ; Els dblinks es poden establir entre dos instàncies d’ORACLE o entre una instància d’ORACLE i un altre SGBD, mitjançant ODBC

Replicació

Fins a Oracle 12c

Asincrona -> Streams Sincrona -> Events Des d’Oracle 19c, multitenant (PDBs) Golden Gate: Components

- Procés Manager
- Procés d’Extracció
- Cola d’exida
- Procés de data pump
- Procés col·lector
- Cola d’entrada
- Procés d’entrega

El Cluster de Oracle

Tecnologia RAC ( Real Application Clusters) Arquitectura en 3 capes

- Un servidor d’aplicacions (WebSphere)
- Nodes de BBDD. Cada node serà una instància d’Oracle
- Un sistema d’emmagatzenament compartit (amb redundància)

Tots els elements estan connectats amb xarxes d’alta capacitat L’emmagatzenament compartit necessita un sistema d’arxius especial No pot utilitzar un sistema d’arxuis normal d’un SO com Linux o Windows Son sistemes d’arxius de clúster Oracle disposa d’un propi: ASM ( Automatic Storage Manager) Oracle RAC comprova automaticament errors en els RAID i utilitza discs sense errors.

“ ” Activitat Investiga quins SGBD poden donar suport a BDD

---
