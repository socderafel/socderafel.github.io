---
layout: default
title: "✍️ Activitats pràctiques UT1 — Programació, IA i Robòtica II: App Inventor i Robòtica | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "3r ESO · UT1 — App Inventor"
prev_url: "../ut01/ut0101.html"
prev_label: "⬅️ 1.1 Projecte final 2a Avaluació"
next_url: "../ut02/index.html"
next_label: "📘 UT2 Completa ➡️"
---

# ✍️ Activitats pràctiques UT1

> **✍️ 📋 Exercici / Qüestionari 1.1 — Pràctica 4**
> > **✍️ EJERCICIO 4: GOLPEA AL TOPO EJERCICIO 4: GOLPEA AL TOPO Descripci**
> > EJERCICIO 4: GOLPEA AL TOPO EJERCICIO 4: GOLPEA AL TOPO Descripción de la aplicación Vamos a desarrollar el juego llamado Golpea al Topo. En este juego se mostrará un topo que se moverá aleatoriamente por la pantalla y durante 10 segundos deberemos “golpearlo” el máximos número de veces.
>
> Visualizaremos el número de aciertos (números de veces que golpeamos al topo) y el número de errores (número de veces que fallamos), así como una cuenta atrás de 10 segundos. Finalizados los 10 segundos, se mostrará un botón “restablecer” que permitirá comenzar de nuevo el juego.
>
> Pasos a seguir: Antes de comenzar descárgate los archivos de la tarea de Teams Ejercicio 4: Golpea el Topo.
>
> - Comenzamos un nuevo proyecto que llamamos GolpeaTopo.
>
> ### 2. Modificamos en “Propiedades del Proyecto”
>
> • NombreApp: Golpea el Topo • Icono: topo2.png
>
> ### 3. Modificar las propiedades de la ventana “Screen1” siguientes
>
> • Título: “Golpea el Topo” • Color de fondo: color verde personalizado #91ce1aff • Disposición horizontal: centro • Marcar opción “Desplazable” por si los distintos iconos no se muestran en el móvil
>
> ### 4. Insertar un Lienzo (dentro de la sección Dibujo y animación de la Paleta)
>
> • Color de fondo: color verde personalizado #008000ff • Alto: 500 píxels • Ancho: ajustar al contenedor
>
> ### 5. Insertar un SipriteImagen dentro del Lienzo anterior (este elemento se localiza
>
> también en la sección de Dibujo y animación de la Paleta): • Alto: 40 píxels • Ancho: 35 píxels • Foto: topo2 • Nombre: Topo
>
> ### 6. Insertar una disposición Horizontal
>
> • Disposición Horizontal: Centro • Disposición vertical: Arriba • Alto: Automático • Ancho: Ajustar al contenedor
>
> ### 7. Insertar una Etiqueta dentro de la disposición horizontal anterior
>
> • Marcar la opción Negrita • Tamaño de la letra: 20 • Texto: ACIERTOS • Color de texto: azul • Nombre: EtqAciertos
>
> ### 8. Insertar una segunda disposición horizontal bajo la ya insertada
>
> ### 1. Disposición Horizontal: Centro
>
> ### 2. Disposición vertical: Arriba
>
> ### 3. Alto: Automático
>
> ### 4. Ancho: Ajustar al contenedor
>
> ### 9. Insertar una Etiqueta dentro de la disposición horizontal anterior
>
> • Marcar la opción Negrita • Tamaño de la letra: 20 • Texto: ERRORES • Color de texto: rojo • Nombre: EtqErrores 10.Insertar una segunda Etiqueta a la derecha de la anterior, dentro de la segunda disposición horizontal
>
> • Marcar la opción Negrita • Tamaño de la letra: 20 • Texto: 0 • Color de texto: Rojo • Nombre: EtqNumErrores 11.Insertar una tercera disposición horizontal bajo las ya insertadas: • Disposición Horizontal: Centro • Disposición Vertical: Arriba • Alto: Automático • Ancho: Ajustar al contenedor 12.Insertar una Etiqueta dentro de la disposición horizontal anterior
>
> • Marcar la opción Negrita y Cursiva • Tamaño de la letra: 22 • Texto: 10 • Color de texto: Negro • Nombre: EtqTiempo 13.Insertar un botón bajo la tercera disposición horizontal: • Color de fondo: Naranja • Marcar las opciones Negrita y Cursiva • Tamaño de la letra: 20 • Forma: oval • Texto: Restablecer • Nombre: BtnRestablecer 14.Insertar el elemento Reloj, localizado en la sección Sensores, dejando los valores que aparecen por defecto.
>
> 15.Insertar el elemento Sonido, localizado en la sección Medios, dejando los valores que aparecen por defecto.

> **✍️ 📋 Exercici / Qüestionari 1.2 — Pràctica 4 - 2**
> > **✍️ EJERCICIO 4: GOLPEA AL TOPO 2ª Parte: Los Bloques EJERCICIO 4: G**
> > EJERCICIO 4: GOLPEA AL TOPO 2ª Parte: Los Bloques EJERCICIO 4: GOLPEA AL TOPO 2ª Parte: Los Bloques Descripción de la aplicación Vamos a desarrollar el juego llamado Golpea al Topo. En este juego se mostrará un topo que se moverá aleatoriamente por la pantalla y durante 10 segundos deberemos “golpearlo” el máximos número de veces.
>
> Visualizaremos el número de aciertos (números de veces que golpeamos al topo) y el número de errores (número de veces que fallamos), así como una cuenta atrás de 10 segundos. Finalizados los 10 segundos, se mostrará un botón “restablecer” que permitirá comenzar de nuevo el juego.
>
> Pasos a seguir
>
> - Accedemos a la sección de bloques para implementar el código.
>
> ### 2. Crear una función llamada “MoverTopo” que hará que la imagen del topo se
>
> mueva de forma aleatoria tomando como valores para la X e Y números aleatorios entre 1 y la dimensión del lienzo. Nótese que el ancho y el alto del lienzo se le resta el ancho y el alto de la dimensión de la imagen del topo, para que dicha imagen no salga del lienzo
>
> • Como MoverTopo Ejecutar llamar Topo.MoverA X entero aleatorio entre 1 y (Lienzo1.Ancho – Topo.Ancho) Y entero aleatorio entre 1 y (Lienzo1.Alto – Topo.Alto)
>
> ### 3. Crear una función llamada “Comenzar”. Esta función se ejecutará en cuanto se
>
> entre en la aplicación y cuando se pulse el botón restablecer y llamará a la función
>
> ```python
> “MoverTopo”; mostrará el topo (ya que éste se oculta al finalizar los 10 segundos);
> ```
>
> inicializará las etiquetas de Tiempo, aciertos y errores; y por último, ocultará el botón restablecer (que se hará de nuevo visible al finalizar los 10 segundos) • Como comenzar Ejecutar llamar MoverTopo Poner Topo.Visible como verdadero Poner EtqTiempo.Texto como 10 Poner EtqNumAciertos.Texto como 0 Poner EtqNumErrores.Texto como 0 Poner BtnRestablecer.Visible como falso
>
> ### 4. Llamamos a la función Comenzar desde el momento que se abre la pantalla inicial
>
> “Screen1”: • Cuando Screen1.Inicializar Ejecutar Llamar Comenzar
>
> ### 5. Cada segundo, y siempre que el valor de tiempo no sea 0, se moverá el Topo y el
>
> tiempo se reducirá en un segundo. En caso de que el tiempo sea 0, se ocultará el topo y se mostrará el botón restablecer, por si se quiere comenzar otra partida. • Cuando Reloj1.Temporizador Ejecutar si EtqTiempo.Texto es distinto de 0 entonces Llamar MoverTopo Poner EtqTiempo.Texto como EtqTiempo.Texto – 1 sino Poner Topo.Visible como falso Poner BtnRestablecer.Visible como verdadero
>
> ### 6. Al tocar el lienzo, si pulsamos sobre el topo, deberemos incrementar en 1 el
>
> número de aciertos, por otro lado, si pulsamos fuera (y siempre que no haya finalizado el tiempo), el número de errores será el que se deba incrementar. • Cuando Lienzo1.Tocar Ejecutar si se toca cualquier elemento dentro del lienzo Entonces poner EtqNumAciertos.Texto como EtqNumAciertos.Texto+1 si no, si etqTiempo.Texto es distinto de 0 Entonces poner EtqNumErrores.Texto como EtqNumErrores.texto+1
>
> ### 7. Al pulsar sobre el botón restablecer se comenzará otra partida. Se llamará a la
>
> función Comenzar: • Cuando BtnRestablecer.Clic Ejecutar llamar Comenzar
>
> ### 8. Cuando se pulse sobre el topo, el móvil va a emitir una pequeña vibración
>
> • Cuando Topo.Tocar Ejecutar llamar Sonido1.Vibrar Milisegundos 100

> **✍️ Activitat Pràctica 1.3 — Puja el fitxer**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 1.4 — Puja la teva APP**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.

> **✍️ Activitat Pràctica 1.5 — Puja la documentació**
> Realitza l'activitat pràctica seguint les indicacions de l'apartat.
