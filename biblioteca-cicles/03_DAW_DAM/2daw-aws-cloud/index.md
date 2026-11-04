---
layout: default
title: "Cloud Computing i Desplegament en AWS (2n DAW) | Biblioteca de Cicles"
course_root: "."
badge: "2n DAW · Grau Superior · FP Informàtica i Comunicacions"
next_url: "./ut01/index.md"
next_label: "Començar UT 01: Fonaments del Cloud Computing →"
---

# Cloud Computing i Desplegament en AWS (2n DAW)

Temari oficial complet, material didàctic interactiu i reptes d'aprenentatge del mòdul de **Cloud Computing i Desplegament en AWS** per al cicle formatiu de grau superior de **Desenvolupament d'Aplicacions Web (DAW)**.

<div class="interactive-progress-tracker" data-unit="aws-global" data-total-points="2850">
  <div class="progress-bar-container">
    <div class="progress-bar-fill" style="width: 0%;">0%</div>
  </div>
  <div class="progress-stats">
    <span>Puntuació Global del Mòdul: <strong class="points-earned">0</strong> / 2.850 XP</span>
    <span>Reptes Interactius Totals: <strong class="challenges-completed">0</strong> / 114</span>
  </div>
</div>

---

## Marc Curricular i Alineació Professional

Aquest mòdul formatiu aprofundeix en les tecnologies de computació en el núvol líders al mercat seguint els currículums oficials de la **AWS Academy (Cloud Foundations & Cloud Architecting)** i el currículum de **Desenvolupament d'Aplicacions Web (DAW)**:
- **Codi de referència:** 2DAW-AWS.
- **Perfil Professional:** Capacita en el disseny, desplegament i administració d'arquitectures web al núvol d'Amazon Web Services: xarxes virtuals aïllades (VPC), gestió de seguretat i accessos (IAM), computació elàstica (EC2), balanceig de càrrega d'alta disponibilitat (ALB), escalabilitat horitzontal automàtica (Auto Scaling), emmagatzematge massiu d'objectes (S3) i bases de dades relacionals gestionades (RDS).

---

## Taula Resum de les 6 Unitats Didàctiques (UD1 a UD6)

| Unitat | Resultat d'Aprenentatge | Continguts Principals | Apartats | Reptes i XP | Accés Directe |
| :---: | :---: | :--- | :---: | :---: | :---: |
| **UT 01** | **RA1** | Paradigma Cloud NIST, IaaS/PaaS/SaaS, Responsabilitat Compartida, TCO i Pricing | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 01](./ut01/index.md) |
| **UT 02** | **RA1, RA2** | Regions, AZs, Edge Locations, AWS IAM, Polítiques JSON, MFA i AWS Organizations | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 02](./ut02/index.md) |
| **UT 03** | **RA2** | Amazon VPC, CIDR, Subxarxes Públiques/Privades, IGW, NAT, Security Groups i Bastions | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 03](./ut03/index.md) |
| **UT 04** | **RA3** | Amazon EC2, Nitro, Famílies T/C/R/Graviton, Savings Plans/Spot, SSH i User Data | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 04](./ut04/index.md) |
| **UT 05** | **RA3, RA5** | Alta Disponibilitat, ALB vs NLB, Target Groups, Health Checks, ASG i Escalat Dinàmic | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 05](./ut05/index.md) |
| **UT 06** | **RA4** | Emmagatzematge EBS (gp3/io2), S3 Bucket Policies, Classes Glacier, EFS i RDS Multi-AZ | 5 subtemes | 19 reptes · 475 XP | [Obrir UT 06](./ut06/index.md) |

---

## Navegació Ràpida per Unitats de Treball

### [UT 01: Fonaments del Cloud Computing i Economia del Núvol](./ut01/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA1`

Característiques essencials segons el NIST, models IaaS/PaaS/SaaS, models de desplegament públic/privat/híbrid, matriu del Model de Responsabilitat Compartida i transformació financera de CapEx a OpEx amb la calculadora de costos d'AWS.

### [UT 02: Infraestructura Global d'AWS, Comptes i Seguretat IAM](./ut02/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA1, RA2`

Regions geogràfiques, Zones de Disponibilitat independents i punts perimetrals CloudFront. Administració d'usuaris, grups i rols IAM, escriptura de documents JSON amb menor privilegi, protecció del compte Root amb MFA i governança amb AWS Organizations.

### [UT 03: Xarxes Virtuals al Núvol: Amazon VPC i Seguretat Perimetral](./ut03/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA2`

Disseny de xarxes privades aïllades amb blocs CIDR, segmentació en subxarxes públiques i privades Multi-AZ, encaminament amb Internet Gateways i NAT Gateways, tallafocs Security Groups vs NACLs, i gestió remota segura mitjançant Bastion Hosts i AWS Systems Manager.

### [UT 04: Computació Elàstica: Amazon EC2 i Automatització de Servidors](./ut04/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA3`

Instàncies EC2 sota el sistema Nitro, selecció de famílies de maquinari (general, computació, memòria i processadors Graviton), models de compra financers (On-Demand, Savings Plans i Spot), claus SSH, protecció IMDSv2 i automatització amb User Data i Golden AMIs.

### [UT 05: Alta Disponibilitat: Elastic Load Balancing (ALB) i Auto Scaling](./ut05/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA3, RA5`

Arquitectures tolerants a fallades sense punts únics (SPOF). Balancejador de càrrega d'aplicació (ALB), comprovacions de salut (Health Checks), encaminament per URL, plantilles de llançament, grups d'Auto Scaling amb autosanció i polítiques d'escalat dinàmic per mètriques de CloudWatch.

### [UT 06: Sistemes d'Emmagatzematge i Bases de Dades al Núvol](./ut06/index.md)
`2n DAW · 5 apartats · 19 reptes (+475 XP) · RA4`

Discs en blocs Amazon EBS i snapshots incrementals. Emmagatzematge d'objectes S3 amb durabilitat d'onze nous, allotjament web estàtic, cicle de vida cap a Glacier Deep Archive, sistemes de fitxers compartits NFS amb Amazon EFS i bases de dades relacionals gestionades Amazon RDS en Multi-AZ amb rèpliques de lectura.
