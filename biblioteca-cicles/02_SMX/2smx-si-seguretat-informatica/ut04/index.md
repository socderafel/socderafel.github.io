---
layout: default
title: "UT4 — Seguretat passiva: Emmagatzemament — Seguretat Informàtica | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT4 Completa"
prev_url: "../ut03/ut03actividades.html"
prev_label: "⬅️ ✍️ Activitats pràctiques UT3"
next_url: "../ut04/ut04actividades.html"
next_label: "✍️ Activitats pràctiques UT4 ➡️"
---

# 📘 UT4 — Seguretat passiva: Emmagatzemament (Unitat Completa)

> **💡 📑 Índex d'Apartats d'aquesta Unitat**
> - [**✍️ Activitats pràctiques UT4**](#ut04actividades) (o [obrir en pàgina individual ➡️](./ut04actividades.md) )

---

## ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — 04.01 Congelació de Sistema**
> De vegades, us interessarà emprar aplicacions per congelar el sistema. Aquestes aplicacions fan que l'ordinador torni a la configuració que tenia en l'últim reinici, rebutjant els canvis que s'hagin pogut realitzar durant la sessió.
>
> Cerca aplicacions d'aquest tipus tant per a Windows com per a Linux i explica la forma de fer-les servir i les possibilitats que ofereixen, així com els casos reals en els que creus que és útil.

> **✍️ Activitat Pràctica 4.2 — 04.02 Backup Windows (OPCIONAL)**
> # Copias de seguridad en Windows
>
> Haz un estudio de las herramientas propias que te ofrecen las distintas versiones de Windows para realizar las copias de seguridad. ¿Hay alguna versión en que se puedan hacer copias de seguridad incrementales y diferenciales? Si la respuesta es positiva realiza el siguiente ejercicio
>
> ## Copias incrementales
>
> 1. Crea una carpeta llamada datos con tres ficheros con distintos contenidos Codi / Terminal 📋 Copiar BASH `fichero1.txt fichero2.txt fichero3.txt`
> 2. Primer día: Realiza una copia completa de esa carpeta con el comando tar (los ficheros lo vamos a ir numerando como si las copias la hiciéramos en distintos días, es decir el fichero resultante se llamaría `copiacompleta1.tgz`).
> 3. Segundo día: Modifica el `fichero1.txt` , borra el `fichero2.txt` y crea un nuevo fichero `fichero4.txt` . Realiza una copia incremental del directorio ( `copiaincremental2.tgz` ).
> 4. Tercer día: Modifica el `fichero3.txt` y crea un nuevo fichero `fichero5.txt` . realiza un copia incremental del directorio ( `copiaincremental3.tgz` ).
> 5. Cuarto día: Crea un directorio `carpeta1` y dentro crea un nuevo fichero `fichero6.txt` . Realiza una copia incremental del directorio ( `copiaincremental4.tgz` ).
> 6. Quinto día: Borra el `fichero1.txt` y renombre la carpeta a `carpeta2` . Realiza una copia incremental del directorio ( `copiaincremental5.tgz` ).
> 7. Sexto día: Realiza otra copia completa del directorio ( `copiacompleta6.tgz` ).
> 8. Séptimo día: Crea otro directorio `carpeta3` y dentro el fichero `fichero6.txt` . Borra el `fichero4.txt` . Realiza una copia incremental del directorio ( `copiaincremental7.tgz` ).
> 9. Octavo día: Borra el `fichero5.txt` . Realiza una copia incremental del directorio ( `copiaincremental8.tgz` ).
>
> Una vez tenemos nuestras copias, imaginemos que hemos tenido un problema de seguridad y hemos perdido la carpeta datos . Recupera la información de la carpeta datos para que aparezcan los ficheros que había
>
> - El octavo día.
> - El quinto día.
> - El tercer día.
>
> ## Copias diferenciales
>
> Realiza el mismo ejercicio ejercicio, pero ahora realizando copias diferenciales.
> Responde a las siguiente pregunta: ¿Ocupan más las copias diferenciales o las copias incrementales?
>
> ## Copias mixtas
>
> Vamos a repetir el ejercicio, realizando las mismas modificaciones a los ficheros, pero realizando las siguientes copias
>
> - Primer día: Copia completa
> - Segundo día: Copia incremental
> - Tercer día: Copia incremental
> - Cuarto día: Copia diferencial
> - Quinto día: Copia incremental
> - Sexto día: Copia incremental
> - Séptimo día: Copia diferencial
> - Octavo día: Copia incremental
>
> Realiza las mismas restauraciones.
>
> # Copias de seguridad en windows con programa de terceros
>
> Selecciona una herramienta de terceros, explicando las características de la aplicación y las ventajas que ofrece sobre las propias de Windows y realiza el ejercicio planteado anteriormente.

> **✍️ Activitat Pràctica 4.3 — 04.03 Backup Linux**
> Vamos a crear diferentes tipos de copias de seguridad con el comando de linux tar . Los siguientes enlaces te pueden ayudar a aprender como hacer copias totales, diferenciales e incrementales con tar
>
> - [Backups con tar: fullbackups, incrementales y diferenciales](https://nebul4ck.wordpress.com//20/backups-con-tar-full-backups-e-incrementales/)
> - [Backup y restauración de backups incrementales con tar](http://systemadmin.es//backup-y-restauracion-de-backups-incrementales-con-tar)
>
> ## Copias incrementales
>
> 1. Crea una carpeta llamada datos con tres ficheros con distintos contenidos Codi / Terminal 📋 Copiar BASH `fichero1.txt fichero2.txt fichero3.txt`
> 2. Primer día: Realiza una copia completa de esa carpeta con el comando tar (los ficheros lo vamos a ir numerando como si las copias la hiciéramos en distintos días, es decir el fichero resultante se llamaría `copiacompleta1.tgz`).
> 3. Segundo día: Modifica el `fichero1.txt` , borra el `fichero2.txt` y crea un nuevo fichero `fichero4.txt` . Realiza una copia incremental del directorio ( `copiaincremental2.tgz` ).
> 4. Tercer día: Modifica el `fichero3.txt` y crea un nuevo fichero `fichero5.txt` . realiza un copia incremental del directorio ( `copiaincremental3.tgz` ).
> 5. Cuarto día: Crea un directorio `carpeta1` y dentro crea un nuevo fichero `fichero6.txt` . Realiza una copia incremental del directorio ( `copiaincremental4.tgz` ).
> 6. Quinto día: Borra el `fichero1.txt` y renombre la carpeta a `carpeta2` . Realiza una copia incremental del directorio ( `copiaincremental5.tgz` ).
> 7. Sexto día: Realiza otra copia completa del directorio ( `copiacompleta6.tgz` ).
> 8. Séptimo día: Crea otro directorio `carpeta3` y dentro el fichero `fichero6.txt` . Borra el `fichero4.txt` . Realiza una copia incremental del directorio ( `copiaincremental7.tgz` ).
> 9. Octavo día: Borra el `fichero5.txt` . Realiza una copia incremental del directorio ( `copiaincremental8.tgz` ).
>
> Una vez tenemos nuestras copias, imaginemos que hemos tenido un problema de seguridad y hemos perdido la carpeta datos . Recupera la información de la carpeta datos para que aparezcan los ficheros que había
>
> - El octavo día.
> - El quinto día.
> - El tercer día.
>
> ## Copias diferenciales
>
> Realiza el mismo ejercicio ejercicio, pero ahora realizando copias diferenciales.
> Responde a las siguiente pregunta: ¿Ocupan más las copias diferenciales o las copias incrementales?
>
> ## Copias mixtas
>
> Vamos a repetir el ejercicio, realizando las mismas modificaciones a los ficheros, pero realizando las siguientes copias
>
> - Primer día: Copia completa
> - Segundo día: Copia incremental
> - Tercer día: Copia incremental
> - Cuarto día: Copia diferencial
> - Quinto día: Copia incremental
> - Sexto día: Copia incremental
> - Séptimo día: Copia diferencial
> - Octavo día: Copia incremental
>
> Realiza las mismas restauraciones.
>
> ## Automatización de copias de seguridad utilizando cron
>
> 1. Busca información para crear 3 scripts en bash para crear una copia completa, incremental y diferencial de la carpeta `datos` . Los nombres de los ficheros generados deben contener la fecha.
> 2. Explica el funcionamiento de cron y documenta cómo lo utilizaríamos para automatizar el proceso de copia de seguridad según el siguiente esquema
>
> - Todos los lunes a las 0:00 de la noche se realiza una copia completa.
> - Todos los días (menos los lunes y jueves) se realiza una copia incremental a las 21:00 horas.
> - Todos los jueves se realiza un copia diferencial a las 21:00 horas.
>
> ## Copias de seguridad en linux con programas de terceros
>
> Busca alguna herramienta que facilite la realización de copias de seguridad bajo Linux. Puede ser una herramienta gráfica o bien un sistema integrado para copias de seguridad. Comenta sus características y las ventajas e inconvenientes que tendría sobre los comandos anteriores. realiza el ejercicio anterior con este nuevo programa.

> **✍️ Activitat Pràctica 4.4 — 04.04 Recuperació d'informació**
> ## Recuperación de particiones
>
> Vamos a añadir un disco a una máquina virtual y vamos a crear dos particiones: una `ext4` y otra `ntfs`. Formatealas, monta las particiones y crea ficheros en ellas (copia ficheros reales en ellas).
>
> A continuación vamos a simular la perdida de particiones. Con `fdisk` borra las particiones del disco.
>
> El ejercicio que tienes que hacer es utilizando la herramienta [`TestDisk`](https://www.cgsecurity.org/wiki/TestDisk). Recupera las dos particiones. ¿Has podido recuperar los ficheros?
>
> Nota: antes de tratar de recuperar datos del disco o de la unidad extraíble, podemos hacer una copia byte a byte y trabajar con la imagen.
>
> ```bash
> dd if=/dev/sdb1 of=/home/usuario/copia.dd
> ```
> Documenta el proceso para realizar la recuperación. Esta práctica la puedes hacer en Windows o en Linux.
>
> ## Recuperación de ficheros
>
> ¿Cómo puede recuperarse información de un disco cuando se han borrado los ficheros? Lo que el SO hace es marcar las posiciones del disco como libres (o borradas), pero realmente no se borra la información.
>
> Herramientas
>
> - [Foremost](http://foremost.sourceforge.net)
> - [Scalpel](http://www.digitalforensicssolutions.com/Scalpel)
> - [PhotoRec](http://www.cgsecurity.org/wiki/PhotoRec)
> - [Recuva](http://www.piriform.com/recuva)
>
> ### Pero, ¿es posible eliminar de forma definitiva un fichero (o un disco)?
>
> Usando la utilidad `shred` se puede sobrescribir el contenido de un fichero (o un disco completo) ya existente con contenido basura antes de eliminarlo, lo que imposibilitaría su recuperación posterior.
>
> Sintaxis
>
> ```bash
> $ shred -n numero_de_pasadas -vz nombre_fichero
> ```
> Nota: Con la opción `-u` se eliminaría el fichero tras sobrescribirlo.
>
> ```bash
> $ shred -n numero_de_pasadas -vz /dev/nombre_disco
> ```
> Documenta la utilización de una de las herramientas de recuperación de ficheros antes descrita para Windows y Linux, explicando todas las posibilidades que ofrece. En Linux borra un fichero con el comando `shred` y comprueba que no es posible su recuperación.

> **✍️ Activitat Pràctica 4.5 — 04.05 Sincronitzar amb rsync**
> Para realizar esta práctica te puede ser de mucha utilidad leer el siguiente artículo
>
> - [Copias de seguridad en Linux con rsync](https://gigastur.es/copias-seguridad-linux-rsync)
>
> Para realizar esta práctica necesitas dos máquinas linux, en la misma red, y con `rsync` instalado. Por lo tanto si quieres puedes hacer la práctica ayudado de un compañero.
>
> 1. En la primera máquina virtual construya el directorio: `~/datos`
> 2. Ejecute el comando: `touch datos/fichero-{1..100}.txt`
> 3. Observe el contenido del directorio datos. Después utilice `rsync` para sincronizar el directorio datos de la primera a la segunda máquina.
> 4. Utilice un editor para editar alguno de los 100 ficheros escribiendo en su interior algunas líneas de texto. Utilice de nuevo rsync para sincronizar el directorio. ¿Se transfieren todos los ficheros?
> 5. Borre el fichero datos/fichero-100.txt y sincronice el directorio. En el destino ¿existe el fichero?¿Qué opción se debe utilizar para que en el destino se borren los ficheros que no existen en el origen?
> 6. ¿Qué debe hacer para sincronizar de manera recursiva el directorio `/home` de la primera máquina a `~/copia_de_seguridad` en la segunda máquina? Pide al compañero que realice algún cambio en algún fichero de su home y vuelve a realizar la sincronización. ¿Qué ficheros se han copiado?

> **✍️ Activitat Pràctica 4.6 — 04.06 Activitats de Repàs**
> Agrupeu-se per parelles i realitzeu el test de repàs de la unitat justificant les respostes i les activitats per comprovar l'aprenentatge fent un resum dels conceptes i mesures més importants que es comenten (Pàgines 109 i 110)

> **✍️ Activitat Pràctica 4.7 — Examen UD3-UD4**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
