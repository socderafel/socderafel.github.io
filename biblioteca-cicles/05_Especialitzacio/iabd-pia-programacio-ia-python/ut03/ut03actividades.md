---
layout: default
title: "✍️ Activitats pràctiques UT3 — Programació d'Intel·ligència Artificial amb Python | Portal Docent Pepe Cuenca"
course_root: ".."
badge: "CE IA i Big Data · UD3 — Ciència de Dades: NumPy, Pandas, Matplotlib, Seaborn i Scikit-Learn"
prev_url: "../ut03/ut0308.html"
prev_label: "⬅️ 3.8 Housing"
next_url: "../ut02/index.html"
next_label: "📘 UD4 Completa (1 pàgina) ➡️"
---

# ✍️ Activitats pràctiques UT3

> **✍️ Activitat Pràctica 3.1 — Tarea 10 - Modelos de clasificación**
> Subir el notebook IA_BD_PIA_UT_3.8_SVM.ipynb completado.

> **✍️ Activitat Pràctica 3.2 — Tarea 9 - Datos duplicados y normalización**
> ### 📄 IA BD PIA UT 3.6 Tarea 9 duplicados i norm.ipynb
>
> ```python
> # <center> Ejercicios sobre missing data, dupicates y normalización.</center><img src="https://github.com/brohrer-ms/public-hosting/raw/master/missing_values/missing_values_data.png"  width=45% />
> ```
>
> ```python
> # Descargar el siguiente dataset:
> ```
>
> **Bengaluru.csv**
>
> ```python
> # Cargar las bibliotecas necesarias para:
> ```
>
> - Cargar el dataset.
> - Poder trabajr con el dataset.
>
> ```python
> # Cargar y visualizar el archivo
> ```
>
> ```python
> # Visualizar la información de los datos faltantes
> ```
>
> ```python
> # Visualizar cuantos valores = NaN tenemos.
> ```
>
> ```python
> # Visualizar cuantos valores = 0 tenemos.
> ```
>
> Realizar un bucle que mira los valores=0 de las columnas ¿Qué conclusión sacamos?
>
> ```python
> # Crear un dataset en el que se reemplaza los datos faltantes por 0
> ```
>
> ```python
> # Listar los tipos de las columnas
> ```
>
> ¿Qué conclusiones podemos sacar?
>
> ```python
> # Sobre el dataset original
> ```
>
> - Pasar a fillna() el argumento method = "bfill" o "ffill"
> - Repetir en paso anterior pasando también el argumento axis= 0 o 1
>
> ```python
> # Sobre el dataset original
> ```
>
> - Con replace() cambiar todos los "Ready To Move" con la fecha de hoy
>
> > **⚠️ Nota: Para obtener la fecha (de hoy), importar la clase...**
> > Nota: Para obtener la fecha (de hoy), importar la clase date de la biblioteca datetime **[más información](https://docs.python.org/es/3/library/datetime.html#)**
>
> ```python
> # Sobre el dataset original
> ```
>
> - Con replace() cambiar todos los "Shncyes" y "Chikka Tirupathi" con "Renegociar"
>
> ```python
> # Sobre el dataset original
> ```
>
> - Con where() cambiar todos los "total_sqft" > 1500 con "Gran lujo"
>
> ```python
> # Sobre el dataset original
> ```
>
> - Reemplazar los valores de la columna "bath" por NaN con la condicion "indice de la linea" es impar
>
> > **⚠️ nota: usar loc[condicion, columna]...**
> > nota: usar loc[condicion, columna]
>
> ```python
> # Sobre el dataset original
> ```
>
> - Reemplazar los valores de la columna "price" con NaN por un valor interpolado con el metodo interpolate()
>
> ```python
> # Descargar el siguiente dataset:
> ```
>
> **car.scv**
>
> - Cargar el dataset.
> - Comprobar si hay duplicados.
> - visualizar la cantidad de duplicados.
>
> - Ver si hay duplicados
> - Sacar la cantidad de duplicados
>
> - Eliminar los duplicados
> - Comprobar si hay duplicados
>
> ```python
> # Normalización de los datos
> ```
>
> ```python
> # Cargar el dataset valores.csv
> ```
>
> - Ver el tipado de las columnas
> - Eliminar los duplicados
>
> - Aplicar la función MinMaxScaler de la clase preprocessing al dataset valores.csv despues de quitar los duplicados
>
> - Aplicar la función standard scaler al dataset valores.csv despues de quitar los duplicados
>
> - Aplicar la función standard scaler al dataset valores.csv despues de quitar los duplicados
> - Sumar los valores de las columnas y comprobar resultados.
> - calcular la desviación estándar del resultado.
>
> ### 📄 Bengaluru.csv
>
> area_type,availability,location,size,society,total_sqft,bath,balcony,price ,19-Dec,Electronic City Phase II,2 BHK,0,1056,2.0,1.0,39.07 Plot Area,,Chikka Tirupathi,4 Bedroom,Theanmp,0,5.0,3.0,120.0 Built-up Area,Ready To Move,,3 BHK,,1440,0.0,3.0,62.0 Super built-up Area,Ready To Move,Lingadheeranahalli,,Soiewre,1521,3.0,0.0,95.0 Super built-up Area,Ready To Move,Kothanur,2 BHK,,1200,2.0,1.0,0.0 Super built-up Area,Ready To Move,Whitefield,2 BHK,DuenaTa,,2.0,1.0,38.0 ,18-May,Old Airport Road,4 BHK,Jaades ,2732,,,204.0 Super built-up Area,,Rajaji Nagar,4 BHK,Brway G,3300,4.0,,600.0 Super built-up Area,Ready To Move,,3 BHK,,1310,3.0,1.0, Plot Area,Ready To Move,Gandhi Bazar,,,1020,6.0,,370.0 Super built-up Area,18-Feb,Whitefield,3 BHK,,1800,2.0,2.0,70.0 0,Ready To Move,Whitefield,4 Bedroom,Prrry M,,5.0,3.0,295.0 Super built-up Area,0,7th Phase JP Nagar,2 BHK,Shncyes,1000,,1.0,38.0 Built-up Area,Ready To Move,0,2 BHK,,1100,2.0,,40.0 Plot Area,Ready To Move,Sarjapur,0,Skityer,2250,3.0,2.0,
>
> ### 📄 valores.csv
>
> A,B,C,D,E 84,32,21,87,46 51,71,59,93,52 52,39,18,84,3 24,29,47,4,57 74,44,66,19,84 68,54,11,22,6 63,19,3,48,78 4,17,64,58,41 71,94,25,94,91 44,67,4,36,55 77,62,19,91,40 39,95,5,70,1 25,77,2,60,86 23,42,45,21,50 84,59,40,46,45 95,70,14,38,53 88,74,6,99,13 86,56,57,11,82 45,45,23,38,15 35,60,15,18,54 69,29,8,70,9 44,37,19,35,66 87,62,52,27,41 5,25,11,77,46 12,53,24,8,68 86,56,57,11,82 45,45,23,38,15 35,60,15,18,54 24,29,47,4,57 74,44,66,19,84 68,54,11,22,6 63,19,3,48,78 4,17,64,58,41 30,29,87,40,96 8,67,40,97,47 38,85,87,40,25 56,84,46,6,40 58,53,42,95,1 26,16,82,7,92 89,17,14,6,60 85,43,45,71,61 56,61,46,26,74 87,28,14,74,63 15,26,63,8,33 43,99,58,75,25 55,79,45,49,47 23,33,81,13,34 66,97,11,43,98 39,8,52,8,69 74,16,8,98,30 54,65,85,48,24 79,84,31,71,73 44,93,75,17,20 87,5,1,77,90 80,3,52,74,97 23,26,93,84,78 9,26,61,35,77 76,91,42,58,71 21,79,63,27,54 21,45,37,41,16 32,98,15,53,8 38,35,70,58,38 74,55,60,90,30 10,86,40,11,98 20,30,79,71,97 80,90,8,49,76 31,92,14,92,75 87,43,33,92,66 32,71,32,74,53 27,41,65,94,84 41,46,7,56,26 44,50,34,11,36 21,44,34,68,66 4,63,72,6,48 24,29,47,4,57 74,44,66,19,84 68,54,11,22,6 63,19,3,48,78 4,17,64,58,41 8,65,59,4,21 92,96,25,19,60 28,78,48,24,96 14,8,17,43,11 23,25,93,83,26 58,53,42,95,1 26,16,82,7,92 89,17,14,6,60 85,43,45,71,61 56,61,46,26,74 87,28,14,74,63 57,24,87,69,93 18,43,9,34,21 23,26,93,84,78 9,26,61,35,77 76,91,42,58,71 21,79,63,27,54 21,45,37,41,16 87,62,52,27,41 5,25,11,77,46 12,53,24,8,68 86,56,57,11,82 45,45,23,38,15 35,60,15,18,54 69,29,8,70,9 44,37,19,35,66 24,29,47,4,57 74,44,66,19,84 68,54,11,22,6 64,32,30,56,63 44,67,4,36,55 77,62,19,91,40 59,30,1,5,35 4,17,64,58,41 30,29,87,40,96 8,67,40,97,47 38,85,87,40,25 56,84,46,6,40 8,81,39,18,22 69,98,44,57,13 47,81,61,13,43 83,88,54,48,65 25,22,1,5,56 78,78,11,71,25 44,34,31,38,74 78,8,54,48,71 12,3,10,95,10 78,36,52,21,58 72,87,68,99,29 50,47,62,70,92 92,96,25,19,60 28,78,48,24,96 14,8,17,43,11 23,25,93,83,26 57,24,87,69,93 34,6,39,82,39 80,26,40,70,23 74,44,66,19,84 68,54,11,22,6 64,32,30,56,63 44,67,4,36,55 77,62,19,91,40 39,95,5,70,1 25,77,2,60,86 23,42,45,21,50 84,59,40,46,45 66,26,29,70,22 11,66,44,22,80 44,67,4,36,55 77,62,19,91,40 11,66,44,22,80

> **✍️ Activitat Pràctica 3.3 — Tarea 8 - Trabajando con scikit learm - Aconseguir dades**
> ```python
> # Recuperar desde el repositorio el dataset Wine recognition¶
> ```
>
> ### Listar encabezados de los datos
>
> ### Listar encabezados de los targets
>
> ### Recuperar la cantidad de elementos de cada clase.
>
> ```python
> # Recuperar desde el repositorio el dataset California Housing¶
> ```
>
> ### Realizar un histograma que muestre la edad media de las viviendas
>
> ```python
> # Generar un dataset con make_swiss_roll y representarlo en 3D
> ```

> **✍️ Activitat Pràctica 3.4 — Tarea 7 - Trabajando con la biblioteca Matplotlib**
> ```python
> # <center> Ejercicios de matplotlib</center>
> ```
>
> <img align="center" src="https://interactivechaos.com/sites/default/files/inline-images/tutorial_matplotlib.png" width=25% />
>
> ```python
> # Importar las librerias necesarias a la realización de los ejercicios.
> ```
>
> ```python
> # Ejercicio 1
> ```
>
> - Escribir un programa que calcule las funciones polinomial siguiente: y = x*2 + 3, z = x**2 + 1
> - Los valores de x iran desde -50 hasta +50 en pasos de 1
>
> ```python
> # Ejercicio 2
> ```
>
> **Realizar lo siguiente:**
>
> - Crea una figura que visualice las curvas y(x) y z(x).
>
> ```python
> # Ejercicio 3
> ```
>
> **Como puedes ver, visualmente una curva domina sobre la otra.**
>
> - Realizar las modificaciones oportunas al código para que las 2 curvas tengan la misma importante dentro del marco.
>
> ```python
> # Ejercicio 4
> ```
>
> - Añadir el nombre de los ejes.
> - Añadir un título a la gráfica.
> - Añadir una leyenda a las gráficas.
>
> ```python
> # Ejercicio 5
> ```
>
> - ir a https://claudiovz.github.io/scipy-lecture-notes-ES/intro/matplotlib/matplotlib.html
> - Realizar una anotación en el punto de coordenadas x=20, y=f(x).
>
> ```python
> # Ejercicio 6
> ```
>
> **vamos a poner una grafica dentro de otra gráfica.** Para ello usaremos el método add.axes al que pasaremos una lista de la siguiente manera.
>
> - fig = plt.figure()
> - ax1 = fig.add_axes([0,0,1,1])
> - ax2 = fig.add_axes([0.2,0.5,.2,.2])
>
> **Mirar el resultado e entender los argumentos que se han pasado a add_axex([]).**
>
> ## Ejercicio 7
>
> - Representa los valores de y en el marco encapsulado.
> - Representa los valores de z en el marco principal.
>
> ## Ejercicio 8
>
> - Vamos a representar la misma gráfica pero cambiando las escalas de x.
> - De esa manera emularemos un "zoom".
> - Para limitar los valores de "x" en el marco encapsulado usar ax().set_xlim(xx,yy) / ax().set_ylim(zz,ww)
>
> ## Ejercicio 9
>
> **Crear dos arcos para insertar 2 gráficos.**
>
> ## Ejercicio 10

> **✍️ Activitat Pràctica 3.5 — Tarea 6 - Trabajando con la biblioteca Pandas**
> ```python
> # <center> Ejercicios de Pandas
> ```
>
> <img align="center" src="https://habrastorage.org/files/10c/15f/f3d/10c15ff3dcb14abdbabdac53fed6d825.jpg" width=50% />
>
> ## Utilizando la biblioteca Pandas **[Pandas](http://pandas.pydata.org)**
>
> Las principales estructuras de datos en `Pandas` se implementan con las clases **Series** y **DataFrame**. La primera estructura es un tablero **indexado unidimensional** llamado **serie**. La segunda es un tablero **indexado bidimensional** llamado **dataframe**.
>
> ```python
> import numpy as np
> import pandas as pd
> pd.set_option("display.precision", 4) # representación de los datos con 4 digitos
> ```
>
> ### Ejercicio 1 Crear una serie que contenga los siguientes elementos: 1, 3, 5, NaN, 6, 8.
>
> ### Ejercicio 2 Crear una serie que contenga los siguientes elementos: 1, 3, 5, 7, 9, 11, 13, NaN.
>
> ### Ejercicio 3 Cambiar el indice de la serie a A, B ,C ,D, E, F, G, H.
>
> ### Ejercicio 4 Acceder al valor del indice "F".
>
> ### Ejercicio 5 Crear un serie temporal que empiece:&emsp;- Ahora, $\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;$- Tenga 10 periodos. $\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;$- Una base de tiempo en segundos.
>
> ### Ejercicio 6 Crear un dataframe de 10 x 4 de la siguiente manera
>
> - El contenido del dataframe serán numeros flotantes que se representaran con 2 decimales.
> - En indice será numerico y empezará en 1.
> - El nombre de las columnas será A, B, C, D.
>
> ### Ejercicio 7 Abrir el archivo `housing.csv` y visualizar las 5 primeras lineas.
>
> ### Ejercicio 8 Visualizar la información siguiente.
>
> - Talla del dataframe.
> - nombre de las columnas.
> - Tipo de datos.
> - Cantidad total de datos.
>
> ### Ejercicio 9 Abrir el archivo `taxisNY.parquet` y visualizar las 10 primeras lineas. (datos sacados de https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page)
>
> ### Ejercicio 10
>
> Del archivo parquet `taxisNY.parquet` sacar el tipo de datos.
>
> ### Ejercicio 11 Indexación y recuperación de datos
>
> Del dataframe anterior, recuperar la columna de las propinas y calcular la media de esa columna.
>
> - De esa misma columna sacar la suma total de las propinas dadas.
> - Sacar el valor medio de las propinas.
> - Sacar las veces que se ha dado propina y las que no.
>
> ### Ejercicio 12 Indexación y recuperación de datos
>
> De la columna correspondiente al precio cobrado por la carrera recuperar el valor minimo y el máximo.

> **✍️ Activitat Pràctica 3.6 — Tarea 5 - Trabajando con la biblioteca NumPy**
> ```python
> # Trabajando con la biblioteca NumPy
> ```
>
> ```python
> import numpy as np
> ```
>
> ```python
> # Ejercicio 1
> ```
>
> - Crear 2 arrays que contengan los valores 5 y 6 y sumarlos.
> - Mostrar el resultado.
>
> ```python
> # Ejercicio 2
> ```
>
> - Crear 3 arrays con los siguientes valores : [1,2,3], [3,2,1] et [0,1,-1].
> - Sumarlos y mostrar el resultado.
> - Mostrar el tamaño resultante del array.
>
> ```python
> # Ejercicio 3
> ```
>
> ```python
> # Ejercicio 4
> ```
>
> - Crear un array de 2 filas y 3 columnas con los valores 1, 2, 3, 4, 5, 6.
> - Imprimir el resultado.
> - Mostar la dimension del array.
>
> ```python
> # Ejercicio 5
> ```
>
> - Crear 2 arrays de 4 filas y 2 columnas.
>
> El primer array tendrá los valores 1, 2, 3, 4, 5, 6, 7, 8. El segundo los valores 8, 7, 6, 5, 4, 3, 2, 1.
>
> - multiplicarlos y mostrar el resultado.
> - Mostar la dimension del array resultante.
>
> ```python
> # Ejercicio 6
> ```
>
> - Crea 2 arrays con los valores [4,7], [3,6]
> - Crea 3 arrays con los valores (2), (3), (1.5)
> - Realiza las operaciones siguientes
>
> > Multiplica A1 por A3 -> Multiplica A2 por A4 por A5 -> Suma A1 por A2 -> Multiplica A1 por A2
>
> ```python
> # Ejercicio 7
> ```
>
> - Crea un array con 10 ceros
> - Crea un array con 10 unos
> - Crea un array de 10 cincos
>
> ```python
> # Ejercicio 8
> ```
>
> - Crea un array de enteros que empiece en 10 y acabe en 50
> - Crea un array de enteros pares que empiece en 10 y acabe en 50
> - Crea una matriz 3x3 con los valores desde el 0 hasta el 8
>
> ```python
> # Ejercicio 9
> ```
>
> - Genera un array que contenfo un (1) número aleatorio
> - Genera un array de 24 números aleatorios entre 1 y 50.
> - A partir del array anterior crear una matriz (3,2,2)
>
> ```python
> # Ejercicio 10
> ```
>
> - Crea el siguiente array
>
> [[0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1 ], [0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2 ], [0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3 ], [0.31, 0.32, 0.33, 0.34, 0.35, 0.36, 0.37, 0.38, 0.39, 0.4 ], [0.41, 0.42, 0.43, 0.44, 0.45, 0.46, 0.47, 0.48, 0.49, 0.5 ], [0.51, 0.52, 0.53, 0.54, 0.55, 0.56, 0.57, 0.58, 0.59, 0.6 ], [0.61, 0.62, 0.63, 0.64, 0.65, 0.66, 0.67, 0.68, 0.69, 0.7 ], [0.71, 0.72, 0.73, 0.74, 0.75, 0.76, 0.77, 0.78, 0.79, 0.8 ], [0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.89, 0.9 ], [0.91, 0.92, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1. ]])
>
> ```python
> # Ejercicio 11
> ```
>
> - Crea un programa que genere un array de 5,5 con numeros aleatorios entre 0 y 9.
> - Crea una rutina o busca una instruccion que permita cambiar los valores 5 por 10.
>
> ```python
> # Ejercicio 12
> ```
>
> - Crea un programa que genere un array de con 20 numeros aleatorios entre 0 y 9.
> - Crea una rutina que permita contar cuantas veces aparece el valor 5 en el array.
>
> ```python
> # Ejercicio 13
> ```
>
> - Crea un programa que genere un array de (5,5) con numeros aleatorios entre 0 y 9.
> - Crea una rutina que permita contar cuantas veces aparece el valor 5 en el array.
