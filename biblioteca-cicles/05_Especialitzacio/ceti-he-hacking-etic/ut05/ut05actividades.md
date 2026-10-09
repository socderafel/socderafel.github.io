---
layout: default
title: "✍️ Activitats pràctiques UT5 — Hacking Ètic i Auditoria de Seguretat | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "CE Ciberseguretat (CETI) · UT5 — Fingerprint"
prev_url: "../ut05/ut0506.html"
prev_label: "⬅️ 5.6 Scripts amb nmap"
next_url: "../ut06/index.html"
next_label: "📘 UT6 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT5

> **✍️ Activitat Pràctica 5.1 — exercici de nmap1**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 5.2 — exercici nmap 2**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 5.3 — Scripts amb nmap**
> Vamos a hacer un estudio de los scripts más utilizados.
>
> Estudia la utilidad de cada script y propon un ejemplo de cada caso.
>
> Veamos una serie de scripts que nos permiten escanear la red en busca de vulnerabilidades
>
> - Auth ejecuta todos los scripts disponibles para la autentificación. Con esta herramienta se detectan los usuarios ya sean anónimos (no se requiere usuario y contraseña para entrar al sistema o con permisos de superusuario.
>
> Ejemplo
>
> ```bash
> # sudo nmap -f-sS -SV-Pn --script auth ip
> ```
>
> - Default ejecuta los scripts por defecto de la herramienta
>
> Ejemplo
>
> ```bash
> # sudo nmap -f-sS -SV-Pn --script default ip
> ```
>
> Discovery: recupera información del target o víctima
>
> External: script para utilizar recursos externos
>
> Intrusive: utiliza scripts que son considerados intrusivos para la víctima
>
> Indicios de la presencia de malware: revisa si hay conexiones abiertas por códigos maliciosos o backdoors
>
> Safe: ejecuta scripts que no son intrusivos
>
> Vuln: descubre las vulnerabilidades más conocidas
>
> Ejemplo
>
> ```bash
> # sudo nmap -f --script vuln ip
> ```
>
> All: ejecuta absolutamente todos los scripts con extensión NSE disponibles
