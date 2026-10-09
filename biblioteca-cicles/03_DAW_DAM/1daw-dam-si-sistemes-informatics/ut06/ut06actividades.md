---
layout: default
title: "✍️ Activitats pràctiques UT6 — Sistemes Informàtics | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT6 — SEGURETAT, RENDIMENT I RECURSOS"
prev_url: "../ut06/ut0603.html"
prev_label: "⬅️ 6.3 TEORIA UNITAT 7 PART 3"
next_url: "../ut07/index.html"
next_label: "📘 UT7 Completa ➡️"
---

# ✍️ Activitats pràctiques UT6

> **✍️ Activitat Pràctica 6.1 — ACTIVITAT 1: GESTIÓ DE DISCOS USANT LVM**
> Sistemes Informàtics Actividad 1 UD7
>
> UD7: SEGURETAT, RENDIMENT I RECURSOS
>
> > **✍️ PRÁCTICA 1.**
> > PRÁCTICA 1.
>
> ### 1. CONFIGURAR LVM EN NUESTRO SISTEMA DE FICHEROS
>
> En esta práctica guiada vamos a aprender a trabajar con LVM en una máquina Linux. Los comandos los debéis de ajustar a vuestra configuración. Es decir, no serán 100% exactos por lo que deberéis de fijaros y entender lo que tenéis en vuestro sistema. Las tareas que vamos a realizar son
>
> ### 1. Añadiremos a nuestra máquina virtual Ubuntu, estando la máquina parada, dos
>
> discos de 5GB cada uno. Los llamaremos indicando el nª de puesto de vuestro sitio. Ejemplo: D2_NºPuesto, D3_NºPuesto.
>
> ### 2. Comprobaremos si ya disponemos de estos dos nuevos discos físicos para
>
> configurarlos con LVM. (lsblk).
>
> - Entraremos en modo root al terminal de Linux.
>
> ### 4. Crearemos una nueva partición en cada uno de los discos. (fdisk /dev/sdb)
>
> - Pulsaremos: m, n, partición primaria, 1, tamaño de sector default,
> - Pulsaremos: t, 8e(tipo LVM), w.
> - Pondremos la instrucción: udevadm settle.
> - Haremos lo mismo con el otro disco.
>
> ### 6. Ahora crearemos la primera capa: pvcreate /dev/sdb1
>
> ### 7. Podemos validar con pvs que ya tenemos creado un nuevo PV. Aún no
>
> pertenece a ningún grupo.
>
> ### 8. Si lo añadimos a un VG ya creado, aumentaríamos el tamaño del VG ya
>
> disponible. O bien, podemos crear un nuevo VG.
>
> ### 9. Si creamos un nuevo VG: vgcreate vg_datos /dev/sdb1 (nombre vg_datos y
>
> seleccionamos el PV)
>
> ### 10. Con el comando pvs ya vemos que el pv /dev/sdb1 ya tiene asignado el
>
> vg_datos.
>
> - Con el comando vgs se ve el nuevo VG.
>
> ### 12. Para añadir el segundo PV al mismo vg_datos: vgextend vg_datos /dev/sdc1
>
> ### 13. Ya podemos crear la última capa
>
> - lvcreate vg_datos -l50%FREE (si queremos tomar el 50% del VG)
> - lvcreate vg_datos -L7G -n lv_datos (si queremos indicar los GB que
>
> queremos utilizar y el nombre que le queremos poner al LV)
>
> Sistemes Informàtics Actividad 1 UD7
>
> En nuestro caso, lo crearemos de 7GB.
>
> - Con el comando lvs vemos lo que tenemos configurado en la última capa.
>
> ### 15. Con el comando vgs vemos los VG que tenemos. Podemos comprobar el
>
> tamaño en GB del VG y lo que hemos tomado para crear el LV.
>
> Ahora solamente queda, formatear el nuevo logical volume y montarlo para poderlo utilizar en nuestro sistema informático
>
> ### 16. Para formatear: mkfs.xfs /dev/mapper/vg_datos-lv_datos
>
> ### 17. Para montarlo, mejor que sea persistente, y así en caso de reinicios, que
>
> siempre esté.
>
> Hará falta un editor de texto: vi, nano y modificar el archivo /etc/fstab. Se puede realizar con vi /etc/fstab o nano /etc/fstab
>
> y añadimos la línea: (Aqui se encuentran todos los FS que se van a montar cuando se inicia el sistema)
>
> /dev/mapper/vg_datos-lv_datos /datos xfs defaults 0 0
>
> Guardamos los cambios y salimos del editor.
>
> Creamos la carpeta /datos
>
> Y montamos el disco con el siguiente comando
>
> mount -a (el -a es para montar todas las unidades creadas) Podrás comprobar que el nuevo volumen /datos ocupa 7GB. A. Muestra con una imagen como ha quedado montada tu estructura LVM de 3 capas como te indico a continuación
>
> ### 1. Capa1: PV (Physical Volume)
>
> ### 2. Capa2: VG (Volume Group)
>
> ### 3. Capa3: LV (Logical Volume)
>
> Sistemes Informàtics Actividad 1 UD7
>
> B. Explica en que consiste gestionar los discos con LVM.
>
> C. ¿Para qué montamos el nuevo volumen creado?
>
> Referencia web para la elaboración de la actividad
>
> - https://www.howtogeek.com/howto/40702/how-to-manage-and-use-lvm-logical
>
> volume-management-in-ubuntu/
>
> - https://www.youtube.com/watch?v=M9ZUXDrsOZw

> **✍️ Activitat Pràctica 6.2 — ACTIVITAT 2: REALITZACIÓ DE COPIES DE SEGURETAT DEL DISC DUR**
> Sistemes Informàtics Actividad 1 UD7
>
> UD7: SEGURETAT, RENDIMENT I RECURSOS
>
> > **✍️ PRÁCTICA 2.**
> > PRÁCTICA 2.
>
> ### 1. CONFIGURACIÓN DE COPIAS DE SEGURIDAD DE NUESTRO DISCO
>
> En esta práctica vamos a aprender a trabajar con herramientas propias de los sistemas operativos Windows y Linux, así como con aplicaciones de terceros que permiten disponer de copias de seguridad o backups en caso de que falle nuestro disco duro.
>
> ### 1. Localiza en Windows la utilidad que permite realizar copias de seguridad y muéstrame
>
> una imagen de la utilidad. Indica cuales sería los pasos a realizar y factores a tener en cuenta para poder realizar un backup.
>
> ### 2. Descarga la utilidad Clonezilla e investiga como podrías realizar una copia del disco
>
> duro de la máquina virtual elegida. Después, elimina el disco duro que has clonado y arranca la máquina virtual con el nuevo disco clonado.
>
> Indica con imágenes el proceso realizado, describiendo cada uno de los pasos. (Explícalo con detalle y bien explicado)
>
> ### 3. Realiza con la instruccion de Linux tar dos backups
>
> - Del directorio /home/user
> - Del directorio /home/etc usando compresión
>
> Sistemes Informàtics Actividad 1 UD7
>
> Referencia web para la elaboración de la actividad
>
> - https://www.howtogeek.com/howto/40702/how-to-manage-and-use-lvm-logical
>
> volume-management-in-ubuntu/
>
> - https://www.youtube.com/watch?v=M9ZUXDrsOZw

> **✍️ Activitat Pràctica 6.3 — ACTIVITAT 4: CÒPIA DE SEGURETAT I RESTAURACIÓ DEL SISTEMA**
> Sistemes Informàtics Actividad 4 UD7
>
> UD7: SEGURETAT, RENDIMENT I RECURSOS
>
> > **✍️ PRÁCTICA 1.**
> > PRÁCTICA 1.
>
> - COPIA Y RESTAURACIÓN DE UNA IMAGEN DEL SISTEMA.
>
> A partir de una copia de seguridad del sistema que vimos cómo realizarla en la actividad 2 de esta unidad, realiza una recuperación de imagen del sistema.
>
> INDICA CON IMÁGENES COMO HAS REALIZADO EL PROCESO DE RESTAURACIÓN.

> **✍️ Activitat Pràctica 6.4 — ACTIVITAT 3: AMPLIACIÓ D'UN LOGICAL VOLUME PER A DISPOSAR DE MÉS ESPAIN D'EMMAGATZEMATGE**
> Sistemes Informàtics Actividad 3 UD7
>
> UD7: SEGURETAT, RENDIMENT I RECURSOS
>
> > **✍️ PRÁCTICA 1.**
> > PRÁCTICA 1.
>
> - AMPLIAR EL LOGICAL VOLUME PARA DISPONER DE 3GB MÁS.
>
> En esta práctica basándote en el vídeo de YouTube que te indico: https://www.youtube.com/watch?v=M9ZUXDrsOZw incrementa el espacio 3GB para disponer de 10GB de espacio usando LVM.
>
> A. Muestra con una imagen como ha quedado montada tu estructura LVM de 3 capas como te indico a continuación
