---
layout: default
title: "✍️ Activitats pràctiques UT4 — Sistemes Informàtics | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UT4 — GESTIÓ DE LA INFORMACIÓ"
prev_url: "../ut04/ut0408.html"
prev_label: "⬅️ 4.8 TEORIA UNITAT 5 PART 7"
next_url: "../ut05/index.html"
next_label: "📘 UT5 Completa ➡️"
---

# ✍️ Activitats pràctiques UT4

> **✍️ Activitat Pràctica 4.1 — ACTIVITAT 1: UTILITAT DISKPART**
> Sistemes Informàtics Activitats UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ Actividad 1: W10 UEFI + Utilidad Diskpart**
> > Actividad 1: W10 UEFI + Utilidad Diskpart
>
> Consideraciones previas La documentación a entregar será un fichero pdf con las capturas de pantalla de los puntos indicados en cada práctica. Vamos a crear una máquina de Windows 10 con la que vamos a trabajar en las próximas pràcticas. La instalación va a ser guiada, con un particionado de disco automático (vamos a dejar que Windows nos particione el disco con el formato por defecto). Pero puesto que todos los ordenadores actuales vienen con UEFI en lugar de la BIOS y la tabla de particiones es una GPT (en lugar de la obsoleta MBR), nosotros vamos a forzar en la máquina virtual que sea un sistema con UEFI y GPT.
>
> > **✍️ PRÁCTICA 1. Instalación de Windows 10**
> > PRÁCTICA 1. Instalación de Windows 10
>
> Para entregar, inserta en el documento una tabla con lo que se te pide en el punto 12 y 16.
>
> - Descarga la imagen ISO del Windows 10 PRO para procesador de 64 bits.
>
> ### 2. Arranca VirtualBox
>
> - Crea una máquina virtual llamada Windows 10.
> - En tipo de SO elige Windows 10 de 64 bits.
>
> ### 5. Dispondrá de (mínimo) 1024 MB de RAM. Si tienes mucha memoria en tu
>
> equipo puedes ponerle 4096 MB.
>
> - El disco duro será nuevo, de tamaño dinámico y con una capacidad de 100GB.
>
> ### 7. Habilita la EFI en la pestaña de configuración del Sistema. Ello implica emular
>
> una UEFI y por consiguiente dar soporte para discos GPT.
>
> Sistemes Informàtics Activitats UD5
>
> ### 8. Asegúrate que está activa la opción de aceleración VT-X, AMD-V en la pestaña
>
> de aceleración de la configuración del sistema.
>
> ### 9. Importante: En el adaptador de red, configúralo en modo Red Interna (no
>
> queremos que la máquina tenga acceso a Internet para evitar validaciones y actualizaciones).
>
> ### 10. Inserta el fichero descargado con la imagen del CD de instalación de Windows
>
> en la unidad de CD de la máquina virtual.
>
> ### 11. Instala Windows 10
>
> - No introduzcas la clave durante el proceso de instalación, pulsa No tengo
>
> clave del producto en caso de que te la pidiera. ii) Deja el particionado automático.
>
> iii) El usuario será tu nombre y la contraseña iris.
>
> ### 12. Una vez instalado, pulsa con el botón derecho del ratón sobre el botón de
>
> Sistemes Informàtics Activitats UD5
>
> Inicio de Windows y accede a “crear y formatear particiones”. Comprueba las particiones que aparecen y toma nota de ellas.
>
> ### 13. A continuación, pulsa con el botón derecho del ratón sobre el botón de Inicio
>
> de Windows y pincha sobre Ejecutar. Teclea cmd y pulsa Intro. Entras en el intérprete de comandos.
>
> ### 14. Ejecuta el mandato diskpart
>
> - Vamos a teclear los siguientes comandos.
>
> En primer lugar listar los discos conectados al sistema: list disk Debe aparecer el Disco Duro como Disco 0 (y debe aparecer como GPT-> el asterisco debajo de GPT) Seleccionamos el disco 0 para trabajar: select disk 0 Listamos las particiones del disco seleccionado: list partition ¿Identificas cada partición? ¿Aparecen las mismas que en el Administrador de Discos de la parte gráfica?
>
> Seleccionamos la partición 1 para trabajar y vemos el detalle: select partition 1 detail partition
>
> Fíjate en el tipo de partición, tamaño y si es o no Activa. Fíjate en el GUID de cada una de ellas. Repite este último paso para todas las particiones.
>
> Sistemes Informàtics Activitats UD5
>
> ### 16. Para entregar, pon en el documento a entregar un listado de cada una de las
>
> particiones indicando de qué tipo es cada una, qué es lo que contiene (para qué sirve), cuál es su GUID y cuál es su tamaño.
>
> ### 17. Teclea exit para salir del diskpart
>
> - Teclea exit para salir del intérprete de comandos.

> **✍️ Activitat Pràctica 4.2 — ACTIVITAT 3: SISTEMES D'ARXIUS EN RED SAMBA**
> Sistemes Informàtics Actividad 3 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ Actividad 3: Compartición de archivos en red entre máquinas virtu**
> > Actividad 3: Compartición de archivos en red entre máquinas virtuales Windows y Ubuntu usando el sistema de archivos en red Samba
>
> Consideraciones previas La documentación a entregar será un fichero pdf con las capturas de pantalla que muestre los pasos realizados para configurar lo solicitado en la práctica. Vamos a configurar un sistema de archivos en red distribuido, de manera que un servidor SAMBA instalado en una maquina virtual Ubuntu 20 pueda compartir un fichero con un equipo con SO Windows 10 instalado en otra máquina virtual.
>
> La actividad consiste en los siguientes bloques
>
> ### 1. Instalar SAMBA en la máquina virtual Ubuntu 20. (Coloca una imagen en el
>
> documento pdf que lo muestre)
>
> - Configurar las dos máquinas virtuales (VM’s) para que puedan verse en red.
>
> Configura la máquina Ubuntu20 con la ip 192.168.125.X donde X debes de indicar el nº del puesto en el que tienes el ordenador. La máquina Windows 10 la puedes configurar con la ip que consideres. (Coloca una imagen en el documento pdf que lo muestre)
>
> ### 3. Acceder desde Windows 10 a la carpeta compartida desde el servidor SAMBA
>
> (Coloca una imagen en el documento pdf que lo muestre)
>
> - Avisa al profesor cuando concluyas la práctica.
>
> Para realizar esta actividad, básate en este video alojado en Youtube. https://www.youtube.com/watch?v=xzx0lR8g2kc A continuación, contesta a las siguientes preguntas
>
> - ¿Qué realiza el comando sudo apt-get update?
>
> Sistemes Informàtics Actividad 3 UD5
>
> - ¿Cómo instalas SAMBA?
>
> ### 3. Indica la ubicación en la que se encuentra el fichero smb.conf que te permite
>
> configurar el servidor SAMBA.
>
> - ¿Qué tipo de usuario debes de añadir para que pueda acceder a una carpeta
>
> compartida del servidor SAMBA?
>
> - ¿Cómo se llama el demonio que corre el servicio SAMBA? ¿Cómo se
>
> reinicia el servicio SAMBA?

> **✍️ Activitat Pràctica 4.3 — ACTIVITAT 5: TOLERÀNCIA A ERRORS RAID 1**
> Sistemes Informàtics Actividad 5 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ Actividad 5: Tolerancia a fallos Vamos a crear un RAID-1 o mirror**
> > Actividad 5: Tolerancia a fallos Vamos a crear un RAID-1 o mirror, de manera que comprobaremos que el sistema se mantiene sin fallar a pesar de que caiga un disco.
>
> Para entregar, captura la pantalla durante los puntos 15 y 29.
>
> - Apaga la máquina virtual.
>
> ### 2. Crea y conecta 2 nuevos discos duros SATA a la máquina virtual. Llámalos como
>
> quieras. Que ocupen ambos lo mismo, 10GB.
>
> - Arranca la máquina.
> - Accede al administrador de discos de Windows 10.
>
> ### 5. Nos debe aparecer un diálogo pidiendo inicializar los discos. Seleccionamos GPT
>
> y aceptamos.
>
> - Tenemos los 2 discos sin asignar. Ambos aparecen como discos básicos.
>
> ### 7. Hacemos clic con el botón secundario sobre el primero de los dos discos y
>
> pulsamos en el menú contextual Nuevo volumen reflejado.
>
> - Nos aparece un asistente para crear el RAID-1.
> - Pulsamos aceptar en la primera pantalla.
>
> ### 10. Seleccionamos los 2 discos en la segunda pantalla (uno ya aparece seleccionado
>
> por defecto, es sobre el que hemos pulsado para sacar el asistente, falta añadir el otro que hará de espejo).
>
> - Le asignamos una letra de unidad.
> - Formateamos.
> - Se nos avisa que los discos básicos se convertirán en dinámicos.
>
> ### 14. Ya tenemos un RAID-1, cuyo tamaño total equivale al tamaño de uno de los 2
>
> discos.
>
> - Accede a Equipo y comprueba que aparece la nueva unidad.
>
> Sistemes Informàtics Actividad 5 UD5
>
> - Crea una carpeta en esa unidad con un archivo dentro. Llámalos como quieras.
>
> ### 17. Vamos a simular una catástrofe. Apaga la máquina virtual y desde la
>
> configuración de la máquina (Almacenamiento), elimina uno de los 2 discos duros que están en RAID.
>
> - Vuelve a arrancar la máquina.
>
> ### 19. La unidad ha desaparecido de Equipo
>
> ### 20. Entra en el administrador de discos. Reactiva la unidad en el disco Mirror que da
>
> error. El otro aparece como FALTA, obviamente es el que hemos eliminado.
>
> ### 21. Después de reactivar continúa dando error pero ya podemos acceder a la unidad
>
> desde Equipo y comprobar que están todos los datos que habíamos almacenado.
>
> - Vuelve a apagar la máquina.
>
> ### 23. Añade un nuevo disco duro a la máquina virtual también de 10GB (que no sea el
>
> mismo que hemos eliminado antes).
>
> - Arranca la máquina.
> - Accede de nuevo al administrador de discos.
>
> ### 26. Pulsa con el botón secundario sobre el volumen del disco que falta (el que hemos
>
> eliminado y aún aparece) y selecciona Quitar Reflejo. Debe desaparecer ya del administrador de discos.
>
> ### 27. Haz clic ahora con el botón secundario sobre el volumen del disco que contiene
>
> los datos (el que formaba parte del espejo) y selecciona en el menú contextual Agregar Reflejo.
>
> - Nos aparece un cuadro de diálogo para seleccionar el disco que hará de espejo.
>
> Seleccionamos el nuevo disco que acabamos de instalar.
>
> ### 29. Al aceptar, se vuelve a crear el volumen reflejado, sincronizando los datos en
>
> el segundo disco. Captura la pantalla durante el proceso de sincronización.
>
> ### 30. Ya tenemos el volumen reparado. Se ha estropeado un disco y no hemos perdido
>
> ningún dato.
>
> - Comprueba que están todos los datos en la unidad.

> **✍️ Activitat Pràctica 4.4 — ACTIVITAT 8: GESTIÓ DEL SISTEMA OPERATIU WINDOWS 10**
> Sistemes Informàtics Actividad 8 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ PRÁCTICA 1. Perfiles de Usuario Para entregar, captura la pantall**
> > PRÁCTICA 1. Perfiles de Usuario Para entregar, captura la pantalla durante los puntos 3 y 12.
>
> ### 1. Arranca la máquina virtual de Windows 10 y entra con un usuario que tenga
>
> privilegios de Administrador. Comprueba que el usuario elegido tenga privilegios de administrador.
>
> ### 2. Cambia la opción en el Explorador de Archivos para que se vean siempre las
>
> extensiones de los ficheros. Acostúmbrate a trabajar así.
>
> ### 3. Desde la consola de administración de equipos crea un usuario llamado usr1,
>
> la contraseña será usr1 la cual no caducará y no deberá cambiar al inicio de su sesión. El usuario será miembro del grupo existente Usuarios.
>
> ### 4. Abre el explorador de Windows y comprueba que en la carpeta \Users aún no se
>
> ha creado la carpeta correspondiente al usuario usr1.
>
> ### 5. En la misma carpeta \Users hay una carpeta oculta llamada Default. Entra en esa
>
> carpeta y crea dentro una nueva carpeta llamada Películas. La carpeta Default es la que contiene el perfil de usuario por defecto sobre el cual se crearán los nuevos perfiles de usuario.
>
> ### 6. Cierra sesión
>
> ### 7. Abre sesión como el usuario usr1. Fíjate que el primer inicio de sesión siempre es
>
> más costoso, pues está creando el perfil de usuario.
>
> ### 8. Abre el explorador de Windows y comprueba que ya se ha creado la carpeta
>
> personal del usuario usr1. Además de Documentos, Imágenes, etc, debe incluir una carpeta llamada Películas.
>
> ### 9. Entra en la carpeta Documentos y crea con el botón secundario del ratón un nuevo
>
> fichero de texto. Llámalo como quieras y escribe algo dentro de él.
>
> - Cierra sesión.
>
> Sistemes Informàtics Actividad 8 UD5
>
> - Abre sesión con el usuario del punto 1, que es administrador.
>
> ### 12. Vamos a eliminar el usuario creado. Siempre que vayamos a crear usuarios o
>
> eliminarlos o modificarlos, lo haremos desde la consola de administración de equipos. Esta vez lo vamos a hacer desde el panel de control. Accede al Panel de Control, Cuentas de Usuario. Elimina la cuenta usr1, pero conservando los archivos.
>
> ### 13. Comprueba que hay una carpeta nueva en tu escritorio. Entra y revisa qué hay y
>
> qué no hay en ella.
>
> > **✍️ PRÁCTICA 2. Usuarios y Grupos Para entregar, captura la pantalla**
> > PRÁCTICA 2. Usuarios y Grupos Para entregar, captura la pantalla durante el punto 16.
>
> ### 14. Configura el sistema para que la longitud mínima de las contraseñas sean 5
>
> caracteres.
>
> ### 15. Del mismo modo, el sistema debe guardar un historial de 2 contraseñas para cada
>
> usuario, de manera que no pueda poner 2 veces consecutivas la misma contraseña.
>
> ### 16. Habilita que se bloqueen las cuentas después de 3 intentos no válidos de
>
> poner la contraseña.
>
> ### 17. Crea los siguientes usuarios (las contraseñas son las que hay entre paréntesis)
>
> - adm11 (adm11).
> - adm12 (adm12).
> - usr11 (usr11).
> - usr12 (usr). No debería dejarte poner esa contraseña. Pon usr12
>
> ### 1. Los usuarios admXX serán administradores. Deben pertenecer por tanto al grupo
>
> Administradores.
>
> - Los usuarios usrXX serán usuarios restringidos (usuarios normales).
>
> Sistemes Informàtics Actividad 8 UD5
>
> - Crea un grupo llamado Buenos y otro grupo llamado Malos.
>
> ### 20. Los usuarios adm12 y usr12 pertenecerán al grupo Malos y el usuario usr11 y
>
> adm11 pertenecerá al grupo Buenos.
>
> - Cierra sesión.
>
> ### 22. Intenta abrir sesión con el usuario adm11, pero equivócate 3 veces en la
>
> contraseña. Se debe bloquear la cuenta.
>
> - Entra como Alumno (administrador) y desbloquea la cuenta.
>
> > **✍️ PRÁCTICA 3. Permisos Para entregar, captura la pantalla durante l**
> > PRÁCTICA 3. Permisos Para entregar, captura la pantalla durante los puntos 35 y 40.
>
> ### 24. Estando como el usuario Alumno (administrador) crea una carpeta en la raíz
>
> (C:\) llamada Docs
>
> ### 25. Dentro de la carpeta crea un archivo de texto llamado Nombre.txt
>
> ### 26. En los permisos (pestaña Seguridad) de la carpeta, modifica lo necesario para que
>
> el usuario Alumno (el propietario de la carpeta) tenga Control Total.
>
> ### 27. Elimina los permisos de Usuarios Autentificados, System, Administradores y
>
> Usuarios. Son permisos heredados, hay que tenerlo en cuenta para poder eliminarlos.
>
> - Permite que el grupo Buenos tenga permisos de Control Total en dicha carpeta.
> - Cierra sesión y entra como el usuario adm12.
>
> ### 30. El usuario adm12 es administrador, pero pertenece al grupo malos. Si todo ha ido
>
> bien no debe poder acceder a la carpeta. Compruébalo.
>
> - Cierra sesión y entra como el usuario usr11.
>
> ### 32. El usuario usr11 no es administrador, pero pertenece al grupo buenos. Si todo ha
>
> ido bien debe poder acceder a la carpeta y escribir algo en ella. Compruébalo.
>
> - Cierra sesión y entra como el usuario Alumno.
> - Crea una carpeta llamada Pública dentro de Docs.
>
> ### 35. Configura la carpeta Pública para que el grupo Todos (un grupo del sistema
>
> que engloba a todos los usuarios dados de alta) puedan tener acceso de Control Total a la carpeta, excepto el usuario usr11 que no tendrá ningún tipo de
>
> Sistemes Informàtics Actividad 8 UD5
>
> acceso. Hazlo todo sin cambiar los permisos de Docs. (Deberás tocar la herencia de los permisos). Haz varias capturas de pantalla.
>
> - Cierra sesión y entra como el usuario adm12.
>
> ### 37. Este usuario debería poder entrar en la carpeta llamada Pública, pero al
>
> encontrase dentro de Docs (que no tiene acceso) no puede navegar hasta ella desde el explorador de Windows. Compruébalo.
>
> ### 38. Para poder entrar en la carpeta Pública deberás teclear la ruta absoluta de dicha
>
> carpeta en la barra de direcciones del explorador de ficheros de Windows.
>
> - Comprueba que sí se puede entrar y grabar ficheros en dicha carpeta.
>
> ### 40. Ahora, aprovechando que el usuario adm12 es administrador, y aunque no
>
> tenga permisos sobre la carpeta Docs, vamos a acceder a las propiedades de seguridad de dicha carpeta y vamos a determinar que el nuevo propietario de la carpeta es el usuario adm12 (esto lo podemos hacer por ser administrador).
>
> ### 41. Cerramos las propiedades y las volvemos a abrir para que surtan efecto los
>
> cambios.
>
> ### 42. Veremos que ahora podemos cambiar los permisos y permitir o denegar el acceso
>
> desde el usuario adm12.
>
> > **✍️ PRÁCTICA 4. Gestión de Procesos Para entregar, captura la pantall**
> > PRÁCTICA 4. Gestión de Procesos Para entregar, captura la pantalla durante al punto 45.
>
> - Cierra sesión y entra como el usuario Alumno (administrador).
>
> ### 44. Ejecuta el Notepad (bloc de notas). No lo cierres. Ejecuta la calculadora. No la
>
> cierres.
>
> Sistemes Informàtics Actividad 8 UD5
>
> ### 45. Ve al administrador de tareas, en la pestaña de detalles selecciona las
>
> columnas siguientes a visualizar: PID, Uso de CPU, Tiempo de CPU, Uso de Memoria y Prioridad Base.
>
> ### 46. En el administrador de tareas comprueba que en la pestaña aplicaciones están la
>
> calculadora y el bloc de notas.
>
> ### 47. Finaliza desde el administrador de procesos los 2 programas lanzados a ejecución
>
> (calculadora y notepad).
>
> - Cierra el administrador de tareas.
>
> > **✍️ PRÁCTICA 5. Instalación de programas y Gestión de Servicios Para**
> > PRÁCTICA 5. Instalación de programas y Gestión de Servicios Para entregar, captura la pantalla durante los puntos 51 y 52.
>
> ### 49. Ve a la pantalla donde aparecen todos los servicios y comprueba que en Windows
>
> 10 no aparece el servicio FTP de Microsoft (el servidor de FTP). Este protocolo se utiliza para la transferencia de archivos. Es posible configurar nuestro equipo como un servidor FTP.
>
> ### 50. En el panel de control, ve a Programas 
>
> Activar Características de Windows y Activa el Servidor FTP (se encuentra dentro de Internet Information Services)
>
> ### 51. Ya debe aparecer el servicio del servidor FTP. Arranca el servicio FTP y
>
> configúralo para que se inicie unos minutos después de cada vez que se arranque el equipo.
>
> ### 52. Ejecuta la herramienta de configuración del sistema (desde el panel de
>
> control o ejecutando el mandato msconfig) y desactiva para que en el inicio del sistema no se inicie el servicio FTP. Desde el administrador de tareas tampoco deja y lo he realizado desde la consola de servicios
>
> Sistemes Informàtics Actividad 8 UD5
>
> > **✍️ PRÁCTICA 6. Planificación de tareas Para entregar, captura la pan**
> > PRÁCTICA 6. Planificación de tareas Para entregar, captura la pantalla durante el punto 53. Crea una tarea automática para que el último lunes de cada mes, a las 21,00, se ejecute el comando chkdsk c: (especifica como comando chkdsk y como parámetro c:). Hay que indicarle que se ejecute con los privilegios más altos.
>
> ### 53. Para comprobar que está correctamente configurada la tarea automática se le
>
> puede decir Ejecutar ahora. Debe hacer un chequeo de disco.
>
> > **✍️ PRÁCTICA 7. Restaurar el sistema Para entregar, captura la pantal**
> > PRÁCTICA 7. Restaurar el sistema Para entregar, captura la pantalla durante el punto 60.
>
> - Crea un punto de restauración del sistema manual.
> - Con el botón secundario del ratón haz clic sobre el icono Equipo del escritorio.
>
> En el menú contextual selecciona la opción Propiedades.
>
> - Entra en la opción Administrador de Dispositivos del panel de la izquierda.
>
> ### 57. Aparecen todos los dispositivos del sistema. Accede al desplegable de la opción
>
> Unidades de DVD o CD-ROM y sobre el dispositivo de DVD, con el botón secundario, haz clic en la opción Deshabilitar del CD-ROM
>
> ### 58. Cierra las ventanas. Entra en Equipo y comprueba que la Unidad de DVD ha
>
> desaparecido.
>
> - Restaura el sistema desde el punto de restauración creado manualmente.
>
> ### 60. Comprueba que vuelve a aparecer la unidad de DVD

> **✍️ Activitat Pràctica 4.5 — ACTIVITAT 2: CREAR PARTICIÓ DE RECUPERACIÓ EN WINDOWS 10**
> Sistemes Informàtics Actividad 2 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ Actividad 2: Crear partición de recuperación en Windows10**
> > Actividad 2: Crear partición de recuperación en Windows10
>
> Consideraciones previas La documentación a entregar será un fichero pdf con las capturas de pantalla que muestre los pasos realizados para crear la partición de recuperación. Vamos a seguir trabajando con la máquina de Windows 10 con la que iniciamos los trabajos de la actividad 1 de esta misma unidad.
>
> La actividad consiste en los siguientes puntos
>
> ### 1. De la partición de 100GB que disponemos, debemos crear una nueva partición, de
>
> tamaño mínimo 30 GB y que debe llamarse RECOVERY_NOMBREALUMNO. Utiliza la herramienta que consideres oportuna para crear dicha partición, debiendo tener formato NTFS. (Coloca una imagen en el pdf)
>
> ### 2. El siguiente paso es crear una imagen de sistema en esta nueva partición. Para ello,
>
> debéis ir a Panel de Control-Sistema y seguridad – Copias de seguridad y restauración (Windows 7)- Crear una imagen del sistema. (Coloca una imagen en el pdf)
>
> ### 3. Se deberá crear en la partición RECOVERY_NOMBREALUMNO una imagen del
>
> sistema eligiendo las particiones que queremos guardar. Indica las particiones que te permite el sistema guardar y porque consideras que se deben proteger mediante esta acción. (Coloca una imagen en el pdf).
>
> ### 4. Muestra el contenido de la partición RECOVERY_NOMBREALUMNO al
>
> profesor. (Coloca una imagen en el pdf)
>
> ### 5. En la imagen que se crea en la partición, indica el nombre del fichero con extensión
>
> (Hard disk image file) y el tamaño del mismo. (Coloca una imagen en el pdf)
>
> Sistemes Informàtics Actividad 2 UD5
>
> Ahora ya sabemos que si se corrompe nuestro Windows 10, y nos fallara por ejemplo, el arranque del sistema, usando una unidad Booteable con Windows 10 , tenemos una opción llamada “Recuperación del Sistema”, que nos permitiría elegir la partición donde está esta imagen de recuperación y poder hacer la restauración de las partes afectadas.
>
> Esto es muy similar a cuando el fabricante OEM instala una partición de recuperación como hemos visto en las diapositivas de la unidad al estudiar el modelo de particionado MBR y GPT.

> **✍️ Activitat Pràctica 4.6 — ACTIVITAT 4: GESTIÓ DE LA INFORMACIÓ CMD.EXE**
> Sistemes Informàtics Actividad 4 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ Actividad 4**
> > Actividad 4
>
> Consideraciones previas apartado 1. La documentación a entregar será un fichero pdf con los 3 comandos correctamente documentados. Cada alumno debe aportar en su trabajo los 3 comandos, aunque solamente haya trabajado uno de ellos. El ejercicio para estar bien documentado deberá aportar lo siguiente
>
> - una descripción del comando, además de incluir que aporta el comando help
>
> del mismo.
>
> - Indicar 4 ejemplos aclaratorios que nos muestren con explicaciones del alumno
>
> qué realiza la instrucción indicada.
>
> Consideraciones previas apartado 2. La documentación a entregar será un fichero pdf, el mismo que el utilizado en el apartado 1, en el que debéis de incluir no con pantallazos sino escrito por vosotros a través del teclado, que comando habéis realizado para que cumpla lo solicitado en cada uno de los ejercicios.
>
> #### 1) En grupos de 3 alumnos cada alumno deberá de trabajar uno de los 3 comandos
>
> siguientes SORT/FIND/MORE referente a la gestión de información a través de cmd.exe.
>
> #### 2) A partir del siguiente árbol de directorios de Windows, contestad a los siguientes
>
> ejercicios.
>
> Sistemes Informàtics Actividad 4 UD5
>
> ### 1. Crea todos los archivos y directorios tal cual se muestra en el gráfico desde
>
> C:\Usuarios\User. (User en vuestro sistema será vuestro nombre)
>
> ### 2. Estando en el directorio Curiosidades, cambia el nombre cortina.pdf a
>
> bisagra.pdf.
>
> ### 3. Estando en el directorio User, copia todo el contenido de Curiosidades a
>
> Referencias.
>
> - Estando en el directorio Versatil, mueve el archivo lima.txt a Curiosidades.
> - Borra el directorio Referencias.
> - Borra el archivo sable.txt del directorio Curiosidades.
> - Visualiza el contenido del fichero pula.txt.
> - Inserta el texto “Esto es texto nuevo” al fichero Peluqueria.txt.
> - Añade el texto “Estamos en clase de SIN” en el fichero pelo.txt.

> **✍️ Activitat Pràctica 4.7 — ACTIVITAT 6: TOLERÀNCIA A ERRORS RAID 5**
> Sistemes Informàtics Actividad 6 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> > **✍️ Actividad 6: Tolerancia a fallos Vamos a crear un RAID-5, de mane**
> > Actividad 6: Tolerancia a fallos Vamos a crear un RAID-5, de manera que comprobaremos que el sistema se mantiene sin fallar a pesar de que caiga un disco.
>
> Realiza diferentes capturas que muestren que has realizado bien la configuración. - Muestra una imagen que demuestre como has creado el RAID-5 con los 3 discos. - Muestra una imagen que se aprecie que, una vez se ha estropeado uno de los tres discos, sigues accediendo a la información.
>
> Muestra otra imagen que muestre que has vuelto a habilitar y configurar el disco estropeado.

> **✍️ Activitat Pràctica 4.8 — ACTIVITAT 7: GESTIÓ DE LA INFORMACIÓ EN CMD.EXE**
> Esta actividad
>
> Sistemes Informàtics Actividad 7 UD5
>
> UD5: GESTIÓN DE LA INFORMACIÓN
>
> Actividad de refuerzo: Comandos en cmd.exe para el tratamiento de archivos y directorios en Windows 10 Entrega los comandos escritos en los puntos 6, 12, 17, 18, 19, 23, 27, 31, 32 y 33. Debes abrir el intérprete de comandos (símbolo del sistema) y teclear los comandos para realizar las siguientes acciones
>
> Entrega los comandos escritos en los puntos 6, 12, 17, 18, 19, 23, 27, 31, 32 y 33.
>
> ### 1. Sitúate en el directorio raíz
>
> - Crea un directorio llamado PRACTICA que cuelgue del directorio Raíz.
>
> ### 3. Cambia el directorio actual a PRACTICA
>
> - Crea el subdirectorio DATOS a partir del anterior.
> - Cambia el directorio actual a DATOS.
>
> 6.Sin moverte del directorio DATOS, crea en tu carpeta Mis Documentos un directorio llamado Apuntes, que a su vez contenga un directorio llamado Sistemas. Todo en un único comando.
>
> ### 7. Crea con el editor de textos Notepad (el bloc de notas) un fichero llamado
>
> texto.txt y que contenga tu nombre y apellidos (en el directorio DATOS, que es donde estás). Para ello basta con escribir notepad texto.txt
>
> ### 8. Copia el fichero texto.txt al fichero texto.bak
>
> ### 9. Copia el fichero texto.txt al fichero texto.bas
>
> ### 10. Copia el fichero texto.txt al fichero texto.old
>
> ### 11. Renombra el fichero texto.old a fichero.bas
>
> 12.Copia el fichero texto.txt a tu escritorio y con el nombre nombre y apellidos.txt (con los espacios incluidos).
>
> ### 13. Sin moverte del directorio en el que te encuentras copia el fichero nombre y
>
> apellidos.txt al directorio Sistemas.
>
> - Mueve el fichero nombre y apellidos.txt de tu escritorio al directorio DATOS.
>
> Sistemes Informàtics Actividad 7 UD5
>
> ### 15. Copia el fichero ejecutable de la calculadora (calc.exe, que se encuentra en
>
> System32, que a su vez se encuentra en Windows) al directorio Sistemas.
>
> - Comprueba con un DIR que se ha copiado (sin cambiar de directorio).
>
> 17.Borra el directorio Apuntes con todo su contenido utilizando un único mandato. 18.Ejecuta el mandato DIR utilizando los comodines para que sólo muestre los archivos que empiezan por TEX y cuyos 2 primeros caracteres de la extensión sean BA. 19.Crear el fichero salida.txt a partir de la salida redireccionada del mandato DIR anterior.
>
> - Comprueba el contenido del fichero salida.txt utilizando el mandato TYPE.
>
> ### 21. Renombra el fichero salida.txt por salida.dat
>
> ### 22. Utilizando notepad crea un fichero llamado hora.txt que contenga el valor
>
> 21:00:00
>
> ### 23. Utilizando el redireccionamiento de entrada sobre el mandato TIME y el
>
> fichero hora.txt, cambia la hora.
>
> - Vuelve a dejar la hora correctamente.
>
> ### 25. Crear con el editor Notepad el fichero clasi.dat cuyo contenido es el siguiente
>
> (Muy importante el orden) Valencia CF At. Madrid Villarreal FC Barcelona Real Madrid
>
> - Visualiza con un mandato el contenido del fichero creado.
>
> 27.Desde el directorio DATOS (actual) y utilizando el mandato XCOPY y las rutas absolutas, copia todo el contenido del directorio PRACTICA incluyendo los subdirectorios, a un nuevo directorio llamado DOCS, que colgará directamente desde el directorio Raíz. Utiliza la ayuda. Mira el parámetro /S
>
> Sistemes Informàtics Actividad 7 UD5
>
> ### 28. Cambia al directorio C:\DOCS\DATOS utilizando la ruta absoluta sin pasar por el
>
> directorio Raíz.
>
> ### 29. Crea el fichero clasi.ord como resultado de ordenar el fichero clasi.dat por la
>
> segunda columna (nombre de los equipos). Utiliza el mandato sort. Utiliza la ayuda.
>
> ### 30. Ejecuta en la misma línea los mandatos necesarios para ver el contenido del
>
> directorio raíz del disco duro y a continuación el contenido del directorio raíz de tu pen drive. (2 mandatos en una línea). Supongamos que el pendrive es la unidad F: 31.Escribe la secuencia de mandatos necesaria para ver el contenido del directorio raíz de la unidad de CD pero si falla (por no haber CD), que muestre el contenido del directorio raíz de tu pendrive.
>
> 32.Utilizando una ruta absoluta cambia de directorio y sitúate en el directorio System32, que a su vez se encuentra en C:\Windows. 33.Utilizando una ruta relativa, sitúate en la carpeta personal del usuario alumno.
>
> - Borra los directorios creados.
