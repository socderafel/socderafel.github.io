---
layout: default
title: "✍️ Activitats pràctiques UT9 — Seguretat i Alta Disponibilitat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n ASIX · Grau Superior · UD8 — Tallafocs (Firewall), Proxy i Alta Disponibilitat (HA)"
prev_url: "../ut09/ut0902.html"
prev_label: "⬅️ 9.2 HA - Alta_Disponibilitat"
next_url: "../ut10/index.html"
next_label: "📘 UD9 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT9

> **✍️ Activitat Pràctica 9.1 — (SAD) Activitat: IPFIRE**
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Activitat IPFIRE IPFire és una distribució de Linux, de codi obert reforçada que funciona principalment com un encaminador i un tallafocs. Un sistema de firewall independent amb una consola d'administració basada en web per a la configuració.
>
> Per a producció, cal instal·lar en una màquina física, on es troben les xarxes connectades que es volen protegir. Per a la nostra pràctica, ho instal·larem en una m.v. en virtualbox. El SO serà el propi firewall. S’ha de configurar més d’una interfície de xarxa. En este cas tres.
>
> No instal·lar encara....... Requisits: 1 cpu, 2 GB ram, 8 GB disc dur, 3 targetes xarxa. Pega una ullada al esquema de xarxa de la següent pàgina. Activitat Revisa el manual de https://wiki.ipfire.org/installation/virtual-box Busca els conceptes de green interface , red interface, orange interface en el manual de ipfire abans d’instal·lar.
>
> En el moment de crear al mv, activa 3 adaptadors de xarxa. El primer adaptador, en adaptador pont El segon en xarxa interna (intnet1) El tercer en xarxa interna (intnet2) Activa i Configura els adaptadors de xarxa de la mv abans d’instal·lar. Abans de començar la instal·lació, llegeix les preguntes !!
>
> Instal·la el IPFIRE Marca DHCP en WAN i assigna IP a les altres, assigna la IP més alta possible de cada xarxa Utilitza dos màquines addicionals (per exemple, ubuntu) per connectar-es a les xarxes DMZ i local.
>
> CICLE: ASIX Parc Salvador Castell, 16 MODALITAT: SEMIPRESENCIAL 46680 Algemesí MÒDUL: SAD Contesta a les preguntes: -Des d’on se configura el ipfire per primera vegada ? -Quin sistema d’arxius recomana el manual ? -Quina adreça d’accés indica l’instal·lador abans del primer re-inici?
>
> Quin adaptador s’usa per defecte per accedir a l’administració web ? -Quantes contrasenyes ens demana que registrem per primera vegada, i per a que serviran? -Com podem identificar les targetes de xarxa de la màquina en el moment d’assignar-es a les interfícies? Esquema de xarxa Documentar tot el procés en un document. Documentar els errors o dificultats trobades i documentar-les explicant la solució adoptada. Entregar el document en format PDF. Signa’l amb el teu certificat digital. I no oblidis seguir les indicacions del document de Aules “Com fer un treball”
