---
layout: default
title: "✍️ Activitats pràctiques UT6 — Llenguatges de Marques i Sistemes de Gestió d'Informació | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM / ASIX · Grau Superior · UT6 — Unidad 3"
prev_url: "../ut06/ut0602.html"
prev_label: "⬅️ 6.2 Soluciones Ejercicios Tema 3"
next_url: "../ut07/index.html"
next_label: "📘 UT7 Completa ➡️"
---

# ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — Ejercicios XML DTD**
> Fecha de entrega el 19 de Noviembre a las 00 horas.
>
> LMSGI Ejercicios Tema 3 XML DTD Nombre y apellidos del Alumno: Especialidad (ASIX o DAW)
>
> Ejercicio1 Escribir la DTD que permita validar el documento XML que se muestra a continuación. Hacer dos versiones en cada caso: DTD externa e interna. DOCUMENTO 1: <?xml version="1.0" encoding="ISO-8859-1"?> <!DOCTYPE nota SYSTEM "nota.dtd"> <nota> <para>Pedro</para> <de>Laura</de> <titulo>Recordatorio</titulo> <contenido>A las 7:00 en la puerta del teatro</contenido> </nota> Ejercicio2 a)El siguiente documento no es válido porque contienen uno o dos errores (los errores no están en la DTD interna). Corrija los errores (Marcando en rojo).
>
> <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE persona [ <!ELEMENT persona EMPTY> <!ATTLIST persona nombre CDATA #IMPLIED> ]> <persona dni="03141592E" /> b)Los errores están en la DTD interna. Corrija los errores (Marcando en rojo). <?xml version="1.0" encoding="UTF-8"?> <!DOCTYPE inventores [
>
> <!ELEMENT inventores>
>
> <!ELEMENT inventor EMPTY>
>
> <!ATTLIST inventor invento CDATA #REQUIRED>
>
> <!ATTLIST inventor nombre ID #REQUIRED> ]> <inventores>
>
> <inventor nombre="Robert Adler" invento="Mando a distancia" />
>
> <inventor nombre="Laszlo Josef Biro" invento="Bolígrafo" />
>
> <inventor nombre="Josephine Garis Cochran" invento="Lavaplatos" />
>
> <inventor invento="Fuego" /> </inventores>
>
> Ejercicio3 Se quiere definir un lenguaje de marcas para representar los resultados de una liga de fútbol. La información que se quiere almacenar de cada partido es: El nombre del equipo local El nombre del equipo visitante Los goles marcados por el equipo local Los goles marcados por el equipo visitante Escribe tres documentos que incluyan los siguientes resultados
>
> Nottingham Presa: 0 - Inter de Mitente: 1 Vodka Juniors: 3 - Sparta da Risa: 3 Water de Munich: 4 - Esteaua es del grifo: 2 Cada documento incluirá un DTD diferente para representar ese lenguaje de marcas: a)Una DTD en la que no haya atributos, si no únicamente etiquetas.
>
> b)Una DTD en la que los goles sean atributos. c)Una DTD en la toda la información se guarde en forma de atributos.
