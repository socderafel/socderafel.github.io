---
layout: default
title: "UD3 — Aprenentatge Supervisat: Regressió, Classificació i Preprocessament · Temari Complet"
course_root: ".."
badge: "CE IA i Big Data · UD3 — Aprenentatge Supervisat: Regressió, Classificació i Preprocessament"
prev_url: "../ut02/ut0203.html"
prev_label: "⬅️ 2.3 Caracterització de sistemes d'aprenentatg"
next_url: "../ut03/ut0301.html"
next_label: "3.1 Aprenentatge supervisat. Tractament de d ➡️"
---

# 📘 UD3 — Aprenentatge Supervisat: Regressió, Classificació i Preprocessament (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 Aprenentatge supervisat. Tractament de d**](./ut0301.md)
- [**3.2 Aprenentatge supervisat. Algorismes de r**](./ut0302.md)
- [**3.3 Aprenentatge supervisat. Models de regre**](./ut0303.md)
- [**3.4 Aprenentatge supervisat. Models de regre**](./ut0304.md)
- [**3.5 Aprenentatge supervisat. Introducció.**](./ut0305.md)

---

# 3.1 Aprenentatge supervisat. Tractament de d

> **🔗 Recurs Web: UT 5.6. Aprenentatge supervisat components de classificació plataforma Azure**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/14kMBdgTgM6rgXItNt9UKWxxy3QxyteW3/view?usp=sharing) ↗️**](https://drive.google.com/file/d/14kMBdgTgM6rgXItNt9UKWxxy3QxyteW3/view?usp=sharing)

> **🔗 Recurs Web: UT 5.5. Aprenentatge supervisat algorismes de classificació**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/1pDxh-PkvcJyRCQDta9bFqZi7JNhY1EgO/view?usp=drive_link) ↗️**](https://drive.google.com/file/d/1pDxh-PkvcJyRCQDta9bFqZi7JNhY1EgO/view?usp=drive_link)

> **🔗 Recurs Web: Datasets per a entrenar models de classificació**
> [**🌐 Obrir recurs extern (https://drive.google.com/drive/folders/1PruS9q3OR4FzvWRoJ9iL3o_SFa77_gnz?usp=sharing) ↗️**](https://drive.google.com/drive/folders/1PruS9q3OR4FzvWRoJ9iL3o_SFa77_gnz?usp=sharing)

---

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT5.4. Aprendizaje supervisado. Cloud computing con la plataforma Azure. Aplicación a modelos de ML de regresión. Componentes de Azure para la preparación de datos y optimización de los modelos de ML.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3

1.1. Obtener los datos...........................................................................................................................3 1.2. Preprocesar los datos.....................................................................................................................3 1.3. Etiquetar los datos.........................................................................................................................3 1.4. Validación y visualización.............................................................................................................3

- Preprocesado y transformación de los datos.........................................................................................4
- Preparación de los datos en azure.........................................................................................................4

3.1. Estimación del contenido de un dataset.........................................................................................6 3.2. Elección de columnas con datos relevantes...................................................................................7 3.3. Filtrado de las celdas con datos faltantes......................................................................................8 3.4. Detección y eliminación de filas duplicadas.................................................................................9 3.5. Normalización de columnas..........................................................................................................9 3.6. Tratamiento de los valores atípicos (outliers)..............................................................................11 3.7. Operaciones sobre los valores de las columnas...........................................................................12 3.8. Cambio del tipo de contenido de una columna (Metadata).........................................................13 3.9. Ejecución de scripts de Python o R.............................................................................................14

- Optimización de modelos....................................................................................................................15

4.1. Creación de un modelo de ML en Python...................................................................................15 4.2. Usar todos los datos del dataset en el entrenamiento del modelo...............................................15 4.3. Automatizar el cambio de los hiperparámetros...........................................................................15 4.4. Determinación de la importancia de los inputs para el modelo...................................................16 2 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

En el aprendizaje automático, una de las primeras tareas que debe realizar es la limpieza de datos ya que pocas veces se podrá utilizar un dataset inmediatamente. La preparación de datos es una parte fundamental del ML y puede representar hasta el 80% del trabajo en ciencia de datos y aprendizaje automático.

La preparación de los datos se puede dividir en 4 pasos. 1.1. Obtener los datos. Es el proceso de reunir todos los datos necesarios para el aprendizaje automático. La recopilación de datos puede ser tediosa porque los datos residen en muchas fuentes de datos que tendremos que juntar para formar el dataset.

Además, dependiendo de la fuente, los datos pueden tener formatos y tipos muy diferentes lo que requerirá operaciones adicionales. 1.2. Preprocesar los datos. Consiste en corregir errores, completar los datos y poner todos los datos en un mismo formato (unidades métricas, fecha, extension del archivo, ...).

1.3. Etiquetar los datos. Paralelamente al preprocesado puede resultar necesario etiquetar los datos (imágenes, archivos de texto, videos, etc.) para proporcionarles un contexto con el cual entrenaremos nuestro modelo de aprendizaje automático. 1.4. Validación y visualización.

Una vez realizadas todas estas operaciones visualizaremos los datos para asegurarnos de que sean correctos. Las visualizaciones como histogramas, diagramas de dispersión, diagramas de caja y bigotes, diagramas de líneas y gráficos de barras son herramientas útiles para confirmar que los datos son correctos.

Más información Más información 3 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 2. PREPROCESADO Y TRANSFORMACIÓN DE LOS DATOS

El preprocesado y la transformación de los datos sirven habitualmente para corregir los siguientes problemas después de la adquisición de los mismos

- Datos incoherentes: Son los datos con discrepancias que no se ajustan a las

características de su etiqueta (valor continuo dentro de una variable categórica).

- Datos atípicos (o ruidosos) (outliers): Son los datos cuyos valores están fuera

del rango del conjunto de datos pero a pesar de ello son coherentes y válidos.

- Datos incompletos: Son los datos sin atributos o a los que faltan valores.
- Datos redundantes o irrelevantes: Datos duplicados o con valores sin interés

para el problema propuesto.

- Datos no balanceados: Por ejemplo querer desarrollar un modelo de

clasificación y disponer de pocos datos de alguna de las clases (por ejemplo 10% / 90%).

- Datos mal preparados: Fuertes diferencias de rango entre variables lo que

puede provocar que el algoritmo no las tenga en cuenta, o variables definidas de manera equivocada.

- Dataset demasiado grande: Resulta importante entrenar el modelo de ML con

una muestra antes de hacerlo con todo el dataset.

- Crear un dataset a partir de varios datasets. No siempre toda la información

se encuentra disponible en un solo dataset. Así pues será bastante habitual trabajar sobre varios de ellos para crear el dataset con el que entrenaremos nuestro modelo. Azure ML propone todo tipo de componentes para trabajar los datos antes del entrenamiento como lo veremos a continuación.

4 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- PREPARACIÓN DE LOS DATOS EN AZURE.

Dentro de las operaciones previas al entrenamiento de un modelo de ML encontramos

- Estimación del contenido de un dataset.
- Elección de columnas con datos interesantes.
- Limpieza de filas y celdas con datos faltantes (missings).

➢Reemplazo de missings por otro valor. ➢Eliminación de la fila.

- Detección y eliminación de filas duplicadas.
- Normalización de columnas.
- Tratamiento de los valores atípicos (outliers).
- Cambio del valor de columnas.
- Cambio del tipo de contenido de una columna.
- En tareas de clasificación, disponer de un dataset con 2 clases muy

desbalanceadas.

- Etc…

5 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.1. Estimación del contenido de un dataset. Si desconocemos el contenido de un dataset se recomienda usar el módulo Summarize data, para hacernos un resumen del contenido del mismo.

Después de ejecutar este proceso sobre el dataset Automobile price data (Raw) (disponible en Azure) obtenemos el resultado siguiente en el que se puede ver que tenemos muchos datos faltantes en varias columnas: 6 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.2. Elección de columnas con datos relevantes. Componente Select Columns in Dataset. Permite seleccionar solo un grupo de columnas del dataset. Datos configurables 1: Seleccionar las columnas con los datos interesantes o aprovechables.

7 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.3. Filtrado de las celdas con datos faltantes. Para filtrar los datos faltantes usaremos el componente Clean Missing data. Una vez conectado a nuestro dataset, podremos elegir qué hacer con los datos faltantes

- Cambiar valor.
- Asignarle un valor estadístico (mínimo, máximo, media, mediana, …).
- Eliminar la fila o la columna.
- …

Más información. 8 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.4. Detección y eliminación de filas duplicadas. Para eliminar las filas duplicadas disponemos de Remove Duplicate Rows. 3.5. Normalización de columnas. Los algoritmos de aprendizaje automático y análisis de datos se benefician enormemente de la normalización. Suelen ser sensibles a la escala de las características, lo que significa que si las características están en diferentes rangos de magnitud, la característica con la mayor magnitud puede dominar el algoritmo, sesgando los resultados.

Normalizando los datos, minimizamos este problema asegurando que cada característica tiene el mismo peso en la construcción del modelo. La Normalización (estandarización) consiste en transformar los datos de forma que todos los datos de entrada estén aproximadamente en la misma escala.

Elección de columnas. 9 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. En Azure disponemos de 5 métodos para normalizar los datos: De la lista desplegable Transformation method (Método de transformación), elegir la función matemática que se aplicará a todas las columnas seleccionadas.

- Zscore. Esta técnica escala los valores de una característica para que tengan

una media de 0 y una desviación estándar de 1 (valores comprendidos entre -1 y +1). Esto se hace restando la media de la característica de cada valor y luego dividiendo por la desviación estándar.

- MinMax. Esta técnica escala los valores de una característica a un rango entre

0 y 1. Esto se hace restando el valor mínimo de la característica de cada valor y luego dividiendo por el rango de la característica.

- Logística. Los valores de la columna se transforman mediante una ecuación de

regresión logística

- LogNormal. Esta técnica aplica una transformación logarítmica a los valores de

una característica. Esto puede resultar útil para datos con una amplia gama de valores, ya que puede ayudar a reducir el impacto de los valores atípicos.

- TanH. Todos los valores se convierten en una tangente hiperbólica.

Más información. 10 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.6. Tratamiento de los valores atípicos (outliers). Para el tratamiento de los valores atípicos usaremos el componente Clip values. Configuración. Más información. 11 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.7. Operaciones sobre los valores de las columnas. Sirve para realizar operaciones matemáticas con los valores de un dataset. Tipos de operaciones

- Basic

Para las operaciones matemáticas básicas sobre un valor o los valores de una columna.

- Comparar

Para realizar comparaciónes de columna a columna o columna a un valor.

- Operaciones

Operaciones matemáticas básicas como sumar, restar, multiplicar y dividir. Puede trabajar con columnas o con constantes. Por ejemplo, puede sumar el valor de la columna A al valor de la columna B. También puede restar una constante, como una media calculada previamente, de cada valor de la columna A.

- Redondeo

Para realizar operaciones como el redondeo.

- Especial

Incluye funciones matemáticas que se utilizan especialmente en ciencia de datos, como las integrales elípticas y la función de error gaussiana.

- Trigonométricas

Incluye todas las funciones trigonométricas estándar. Datos de salida (output mode): Se puede elegir entre Append, Inplace y ResultOnly. Append: Todas las columnas que se usan como entradas se incluyen en el conjunto de datos de salida y se añade una columna adicional para cada transformación.

Inplace: Reemplaza los valores de las columnas de entrada por los nuevos valores. ResultOnly: Se crea una nueva columna y se borra la original. Más información. 12 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.8. Cambio del tipo de contenido de una columna (Metadata). Sirve para facilitar el tratamiento de los datos por los componentes posteriores a la edición de los medatados.

Los datos no se alteran. Se usa para, por ejemplo, pasar unos valores de continuos a categóricos. Configuración. Más información. 13 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.9. Ejecución de scripts de Python o R. Permite programar operaciones sobre datasets sin necesidad de usar componentes de Azure ML. 14 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 4. OPTIMIZACIÓN DE MODELOS

4.1. Creación de un modelo de ML en Python. Permite programar algoritmos personalizados sin necesidad de usar componentes de Azure ML. 4.2. Usar todos los datos del dataset en el entrenamiento del modelo. La validación cruzada divide aleatoriamente los datos de entrenamiento en 10 pliegues para realizar el entrenamiento del modelo.

Más información. 4.3. Automatizar el cambio de los hiperparámetros. Con este componente dejamos que Azure cambie los hiperparámetros del modelo y poder ver la influencia de cada uno sobre el desempeño del modelo. Más información. 15 / 16

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 4.4. Determinación de la importancia de los inputs para el modelo. Permite evaluar la contribución de los inputs (variables independientes de entrada) en el desempeño de nuestro modelo (basándonos en una métrica).

Interpretación de los resultados

- Todos los valores de entrada positivos contribuyen positivamente al modelo.
- Los valores negativos, degradan el rendimiento predictor del modelo. En caso de

ser muy negativos será conveniente descartarlos. 16 / 16

---

# 3.2 Aprenentatge supervisat. Algorismes de r

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT5.3. Aprendizaje supervisado. Cloud computing con la plataforma Azure. Aplicación a modelos de ML de regresión. Algoritmos de regresión de Azure. Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3
- Algoritmos de regresión disponibles en Azure......................................................................................3

2.1. Ecosistema de Algoritmos de Machine Learning en Azure...........................................................3 2.2. Algoritmos de regresión en Azure.................................................................................................4 2.2.1. Linear Regression, descripción y configuración...................................................................5 2.2.2. Boosted Decision Tree Regression, descripción y configuración.........................................6 2.2.3. Decision Forest Regression...................................................................................................8 2.2.4. Fast Forest Quantile Regression, descripción y configuración...........................................10 2.2.5. Poisson, descripción y configuración..................................................................................12 2.2.6. Neural Network Regression, descripción y configuración..................................................14 2 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

En esta unidad vamos a ver con detenimiento todos los algoritmos de regresión disponibles en Azure así como varios componentes que no ayudarán a realizar nuestros modelos de regresión. Más información en la documentación de Azure.

- ALGORITMOS DE REGRESIÓN DISPONIBLES EN AZURE.

2.1. Ecosistema de Algoritmos de Machine Learning en Azure. La siguiente imagen nos muestra todo el ecosistema de Machine Leaning de la plataforma Azure. Más información. 3 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2. Algoritmos de regresión en Azure. Si miramos los algoritmos de regresión disponibles encontramos los siguientes: Técnica de regresión. Características. Linear Regression Modelo lineal y entrenamiento rápido.

Boosted Decision Tree Regression Requiere mucha memoria. Tiempo de entrenamiento rápido y resultados precisos. Decision Forest Regression Entrenamiento rápido y resultados precisos. Fast Forest Quantile Regression Predecir una distribución. Neural network regression. Largo tiempo de entrenamiento y resultados precisos.

Possion regression Predice recuentos de eventos. 4 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.1. Linear Regression, descripción y configuración. Descripción: Una de las técnicas más comunes en regresión es la regresión lineal. La regresión lineal es un enfoque lineal para establecer la relación entre una variable dependiente (salida) y una o más variables independientes (entradas).

Configuración: El módulo (componente) soporta 2 métodos para medir el error y ajustar la linea de regresión de nuestro modelo.

- Gradient descent: El descenso de gradiente es un método que minimiza la

cantidad de error en cada paso del proceso de entrenamiento del modelo. Si se elige esta opción para el método, se puede configurar una serie de parámetros para controlar el tamaño del paso, la tasa de aprendizaje, etc. Esta opción también admite el uso de un barrido de parámetros integrado.

- Ordinary least squares: Los mínimos cuadrados ordinarios son una de las

técnicas más utilizadas en regresión lineal. Los mínimos cuadrados ordinarios se refieren a la función de pérdida, que calcula el error como la suma del cuadrado de la distancia desde el valor real hasta la línea predicha y ajusta el modelo minimizando el error al cuadrado. Este método supone una fuerte relación lineal entre variable dependiente y variables dependientes.

5 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.2. Boosted Decision Tree Regression, descripción y configuración. Descripción: Los árboles de decisión son una de las técnicas predictivas más comunes que se pueden usar para la clasificación y la regresión en Azure Machine Learning.

Boosted Decision Tree Regression o árboles de regresión impulsados combinan las fortalezas de dos algoritmos: árboles de regresión (modelos que relacionan una respuesta con sus predictores mediante divisiones binarias recursivas) y impulso (un método adaptativo para combinar muchos modelos simples para conseguir un rendimiento predictivo mejorado).

Configuración: Primero se deberá especificar cómo se entrenará el modelo.

- SingleParameter: Seleccionar esta opción si se sabe cómo configurar el modelo.

Se deberá proporcionar un conjunto de valores.

- Parameter range: Seleccionar esta opción si no está seguro de cuáles son los

mejores parámetros y desea ejecutar un barrido de parámetros. 6 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Luego se deberá introducir los valores de configuración.

- Número máximo de hojas por árbol: Indica el número máximo de nodos

terminales (hojas) que se pueden crear en cualquier árbol. Al aumentar este valor, potencialmente aumenta el tamaño del árbol y obtiene una mayor precisión, a riesgo de un sobreajuste y un mayor tiempo de entrenamiento.

- Número mínimo de muestras por nodo hoja: Indique el número mínimo de casos

necesarios para crear cualquier nodo terminal (hoja) en un árbol. Al aumentar este valor, aumenta el umbral para crear nuevas reglas. Por ejemplo, un valor 5 significa que los datos de entrenamiento deberían contener al menos 5 casos que cumplan las mismas condiciones.

- Tasa de aprendizaje: Valor entre 0 y 1. Defina el tamaño del paso mientras

aprende lo que determina la velocidad que se tardará hacia la solución óptima. Si el tamaño del paso es demasiado grande, es posible que no se encuentre la solución óptima. Si el tamaño del paso es demasiado pequeño, el entrenamiento tardará más en converger hacia la mejor solución.

- Número de árboles construidos: Número total de árboles de decisión a crear en

el conjunto. Cuanto más árboles de decisión, más precisión y más tiempo de aprendizaje.

- Semilla de número aleatorio: Valor entero positivo. La semilla garantiza la

reproducibilidad en ejecuciones que tienen los mismos datos y parámetros. 7 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.3. Decision Forest Regression. Descripción: Llevan a cabo una secuencia de pruebas simples para cada instancia, atravesando una estructura de datos de árbol binario hasta alcanzar un nodo hoja (decisión).

Los árboles de decisión tienen las siguientes ventajas: Son eficientes tanto en el cálculo como en la utilización de la memoria durante el entrenamiento y la predicción. Pueden representar límites de decisión no lineales. Realizan una clasificación y selección de características integradas y son resistentes en presencia de características ruidosas.

Este modelo consta de un conjunto de árboles de decisión. Cada árbol da como resultado una predicción en forma de distribución gaussiana. Se realiza una agregación sobre el conjunto de árboles para buscar la distribución gaussiana más cercana a la distribución combinada de todos los árboles del modelo.

Configuración: Primero se deberá especificar cómo se entrenará el modelo.

- SingleParameter: Seleccionar esta opción si se sabe cómo configurar el modelo.

Se deberá proporcionar un conjunto de valores.

- Parameter range: Seleccionar esta opción si no está seguro de cuáles son los

mejores parámetros y desea ejecutar un barrido de parámetros. 8 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Luego se deberá introducir los valores de configuración.

- Resampling method (Método de nuevo muestreo).

➢Bagging (agregación o agregación de arranque). Cada árbol da como resultado una predicción en forma de distribución gaussiana. La agregación consiste en encontrar una distribución gaussiana cuyos dos primeros momentos coincidan con los momentos de la mezcla de distribuciones gaussianas determinada combinando todas las distribuciones devueltas por los árboles individuales.

➢Replicate (replicación): Cada árbol se entrena exactamente con los mismos datos de entrada. La determinación de qué predicado de división se utiliza para cada nodo de árbol sigue siendo aleatoria y los árboles serán diversos.

- Number of decision trees: Indicar el número total de árboles de decisión que se

creará en el conjunto. Más arboles, mejor cobertura pero más tiempo de aprendizaje.

- Maximum depth of the decision trees: define la profundidad máxima de cada

árbol de decisión. Al aumentar la profundidad se aumenta la precisión pero se corre el riesgo de un sobreajuste (y aumentar el tiempo de entrenamiento).

- Number of random splits per node: número de divisiones que se usarán al crear

cada nodo del árbol.

- Minimum number of samples per leaf node: número mínimo de casos que son

necesarios para crear cualquier nodo terminal (hoja) en un árbol. 9 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.4. Fast Forest Quantile Regression, descripción y configuración. Descripción: Este modelo es útil si desea saber más acerca de la distribución del valor previsto, en lugar de obtener un valor de predicción medio único.

Ejemplos de aplicaciones: ➢Predecir un rango de precios. ➢Estimar el rendimiento de estudiantes o aplicar gráficos de crecimiento para evaluar el desarrollo del niño. ➢Detectar relaciones predictivas en casos donde hay solo una relación débil entre variables. Configuración

Primero se deberá especificar cómo se entrenará el modelo.

- SingleParameter: Seleccionar esta opción si se sabe cómo configurar el modelo.

Se deberá proporcionar un conjunto de valores.

- Parameter range: Seleccionar esta opción si no está seguro de cuáles son los

mejores parámetros y desea ejecutar un barrido de parámetros. 10 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Luego se deberá introducir los valores de configuración.

- Número de árboles: número máximo de árboles que se pueden crear en el

conjunto.

- Número de hojas: número máximo hojas, o nodos terminales, que se pueden

crear en un árbol.

- Número mínimo de instancias de aprendizaje necesarias para formar una

hoja: número mínimo de ejemplos casos que son necesarios para crear cualquier nodo terminal (hoja) en un árbol.

- Fracción de ensacado: número entre 0 y 1. Representa la fracción de las

muestras que se van a usar al generar cada grupo de cuantiles. Las muestras se eligen aleatoriamente, con reemplazo.

- Fracción de división: entre 0 y 1. Representa la fracción de las características que

se van a usar en cada división del árbol. Las características usadas siempre se eligen aleatoriamente.

- Cuantiles que se calcularán: Escribir una lista separada por punto y coma de los

cuantiles por los que desea entrenar al modelo y crear predicciones. Ejemplo, para crear un modelo que calcule por cuantiles, escribir 0,25; 0,5; 0,75.

- Semilla de número aleatorio: Valor entero positivo. La semilla garantiza la

reproducibilidad en ejecuciones que tienen los mismos datos y parámetros. 11 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.5. Poisson, descripción y configuración. Descripción: La regresión de Poisson está pensada para predecir valores numéricos, normalmente recuentos. Solo se debe usar si los valores a predecir cumplen las siguientes condiciones

La variable de respuesta tiene una distribución de Poisson. Los recuentos no pueden ser negativos. El método fallará si intenta utilizarlo con etiquetas negativas. Una distribución de Poisson es una distribución discreta, por lo tanto, no tiene sentido usar este método con números no enteros.

Configuración: Primero se deberá especificar cómo se entrenará el modelo. Se recomienda usar Normalize Data para normalizar el conjunto de datos de entrada antes de entrenar el modelo.

- SingleParameter: Seleccionar esta opción si se sabe cómo configurar el modelo.

Se deberá proporcionar un conjunto de valores.

- Parameter range: Seleccionar esta opción si no está seguro de cuáles son los

mejores parámetros y desea ejecutar un barrido de parámetros. 12 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Luego se deberá introducir los valores de configuración.

- Tolerancia de optimización: tolerancia durante la optimización. Cuanto más bajo

sea el valor, más lento y más preciso será el ajuste.

- L1 regularization weight (Ponderación de regularización L1), L2 regularization

weight (Ponderación de regularización L2): La regularización agrega restricciones al algoritmo que son independientes de los datos de entrenamiento. Se utiliza habitualmente para evitar el sobreajuste. ➢La regularización L1 es útil si el objetivo es tener un modelo que sea tan disperso como sea posible.

➢La regularización L2 es útil si el objetivo es tener un modelo con pesos generales pequeños.

- Tamaño de memoria para L-BFGS: cantidad de memoria que se reservará para la

optimización y el ajuste del modelo. Al cambiar este parámetro, puede afectar el número de posiciones y gradientes pasados que se almacenan para el cálculo del siguiente paso. 13 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.6. Neural Network Regression, descripción y configuración. Descripción: Consiste en un conjunto de unidades, llamadas neuronas artificiales, conectadas entre sí para transmitirse señales.

La información de entrada atraviesa la red neuronal (donde se somete a diversas operaciones) produciendo unos valores de salida. Configuración: Primero se deberá especificar cómo se entrenará el modelo.

- SingleParameter: Seleccionar esta opción si se sabe cómo configurar el modelo.

Se deberá proporcionar un conjunto de valores.

- Parameter range: Seleccionar esta opción si no está seguro de cuáles son los

mejores parámetros y desea ejecutar un barrido de parámetros. Luego se deberá introducir los valores de configuración. 14 / 15

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- Hidden layer specification (Especificación de capa oculta).

➢Fully connected case crea un modelo mediante la arquitectura predeterminada de red neuronal con los siguientes atributos: ✔ La red tiene una sola capa oculta. ✔ La capa de salida está completamente conectada a la capa oculta, y esta a la capa de entrada. ✔Se puede establecer el número de nodos de la capa oculta (por defecto 100).

- Número de nodos ocultos.
- olerancia de optimización: tolerancia durante la optimización. Cuanto más bajo

sea el valor, más lento y más preciso será el ajuste.

- Velocidad de aprendizaje: define el paso llevado a cabo en cada iteración, antes

de la corrección.

- Number of learning iterations, especifica el número máximo de veces que el

algoritmo procesa los datos de entrenamiento.

- The momentum, escribir el valor que se debe aplicar durante el aprendizaje como

peso en los nodos de iteraciones anteriores.

- Shuffle examples, para cambiar el orden de los casos entre iteraciones. Si anula la

selección de esta opción, los casos se procesan exactamente en el mismo orden cada vez que se ejecuta la canalización.

- Semilla de número aleatorio: Valor entero positivo. La semilla garantiza la

reproducibilidad en ejecuciones que tienen los mismos datos y parámetros. 15 / 15

---

# 3.3 Aprenentatge supervisat. Models de regre

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT5.2. Aprendizaje supervisado. Cloud computing con la plataforma Azure. Aplicación a modelos de ML de regresión. Creación de un primer modelo de regresión. Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3
- Creación de un modelo de regresión.....................................................................................................3

2.1. Conseguir los datos........................................................................................................................3 2.2. Plataforma Azure...........................................................................................................................3 2.2.1. Crear un recurso de trabajo....................................................................................................3 2.2.2. Crear un recurso de datos......................................................................................................4 2.2.3. Crear un cluster de proceso....................................................................................................5 2.2.4. Crear un modelo....................................................................................................................5 2.2.5. PASO 1 - Adquisición de los datos........................................................................................6 2.2.6. PASO 2 - Preparación de los datos........................................................................................6 2.2.7. PASO 3 – Selección del algoritmo.......................................................................................11 2.2.8. PASO 4 – Entrenamiento del modelo..................................................................................12 2.2.9. PASO 5 – Evaluación de resultados.....................................................................................13 2.2.10. PASO 6 – Configuración de los hiperparámetros..............................................................16 2.2.11. PASO 7 – Predicción del modelo (despliegue)..................................................................16 2.2.11.1. Crear un inference pipeline.........................................................................................16 2.2.11.2. Despliegue del modelo................................................................................................22 2.2.11.3. Despliegue del servicio web........................................................................................22 2.2.11.4. Probar el servicio web.................................................................................................23 2.2.11.5. Puesta en producción del servicio web.......................................................................24 2.2.12. PASO 8 – Cerrar el despliegue..........................................................................................25 2 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

En esta unidad realizaremos una prática guiada para seguir familiarizándonos con el diseño de modelos de ML con plataforma Azure de Microsoft.

- CREACIÓN DE UN MODELO DE REGRESIÓN.

2.1. Conseguir los datos. Para nuestras prácticas usaremos todo tipo de datos disponibles en la página web www.kag

g le. com

. Para esta primera práctica usaremos el dataset del siguiente enlace: https://www.kaggle.com/datasets/abhishek14398/salary-dataset-simple-linear-regression 2.2. Plataforma Azure. Ya hemos hecho los primeros pasos con esa plataforma. Ahora diseñaremos nosotros mismos un modelo para evaluar el salario en función de los años de experiencia.

Los pasos para la creación del modelo son los enumerados en el capitulo 2 pero deberemos integrarlos dentro de la especificidades de la plataforma azure. Más información. 2.2.1. Crear un recurso de trabajo. ➢Acceder al portal de azure. Azure for Students ➢Crear área de trabajo.

3 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ➢Lanzar Machine Learning Studio. 2.2.2. Crear un recurso de datos. ➢Ir a Recursos → Datos. ➢Crear recurso de datos. ➢En esquema, seleccionar las columnas relevantes (opcional).

4 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.3. Crear un cluster de proceso. ➢Ir a administrar y seleccionar proceso. ➢Crear un cluster de proceso. 2.2.4. Crear un modelo. ➢Ir a diseñador. ➢Seleccionar, crear nueva canalización.

5 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.5. PASO 1 - Adquisición de los datos. Después de configurar la plataforma Azure para poder usarla, pasamos al diseño de un modelo de ML. A partir de aquí seguiremos los 7 pasos necesarios para el diseño, el entrenamiento y la validación de un modelo de ML.

Pinchamos en datos, luego pinchamos en el dataset con el que queremos entrenar nuestro modelo y lo arrastramos a la zona de pipeline. Nota: Los objetos que arrastramos a la izquierda pueden ser componentes o datos y constituyen los nodos del pipeline. 2.2.6. PASO 2 - Preparación de los datos.

Como hemos vistos anteriormente los datos pueden tener todo tipo de fallos (ordenados, duplicados, variables independientes interrelacionadas, con parámetros erróneos o faltantes…). Azure propone todos todo tipo de herramientas para optimizar el entrenamiento del modelo. Esas herramientas se encuentran en la categoría Data Transformation.

6 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ➢Modelo típico para la preparación de los datos: Nota: → El Nodo requiere configuración. 7 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ➢Configuración de los nodos para la preparación de los datos: ✔Nodo Select column. Nos permite seleccionar que columnas del dataset queremos usar para entrenar nuestro modelo.

Generalmente, no todas las columnas de un dataset son relevantes (p.e. índice). Entrenar un modelo con ellas puede lleva a tiempos de computación elevados y rendimientos del modelo mediocres. ✔Clean missing data. Permite decidir qué hacer con los datos faltantes (eliminar, fila, sustituir por la media, mediana, valor fijo, ...) ✔Normalize Data.

Sirve para igualar la amplitud de los datos entre las diferentes columnas en caso de tener amplitudes de datos entre columnas muy importantes. Muchos algoritmos son sensibles a la normalización así que solo se recomienda su uso si sabemos lo que estamos haciendo. 8 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ➢Tratamiento de los datos. ✔Pinchamos en: ✔Rellenamos los campos obligatorios. ✔El proceso se lanzará automáticamente. 9 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ➢En jobs podemos ver la ejecución del trabajo. ➢Preparación de datos finalizada. 10 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.7. PASO 3 – Selección del algoritmo. ➢Machine Learning Algorithms. Buscamos en componentes los diferentes algoritmos de ML. ➢Linear Regression. Seleccionamos el algoritmo de regresión linear.

> **⚠️ Nota: Cheat Sheet de todos los algoritmos disponibles e...**
> Nota: Cheat Sheet de todos los algoritmos disponibles en Azure (hasta la fecha). Más información. 11 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.8. PASO 4 – Entrenamiento del modelo. ➢Crear grupos de datos de entrenamiento y datos de validación. Antes de entrenar el modelo debemos decidir la proporción de datos que usaremos para el entrenamiento y para la validación.

La división entre datos de entrenamiento y validación se realiza seleccionando el componente Split_Data ➢Entrenar el modelo. Para entrenar el modelo usaremos el componente Train Model

- Comparar los resultados con los datos de validación.

Para la evaluación del modelo usaremos el componente Score Model. En una entrada tendremos las predicciones de nuestro modelo y en la otra los datos de validación del dataset que no habremos utilizado para el entrenamiento. 12 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ➢Enlazar y configurar los nodos. 2.2.9. PASO 5 – Evaluación de resultados. La evaluación del modelo entrenado nos devolverá una serie de métricas que nos permitirán evaluar su rendimiento .

Luego configuramos y enviamos. 13 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Visualización del progreso: Una vez completado el trabajo (job) podemos acceder a todos los valores internos de los componentes y más especialmente del de evaluación.

Métricas del modelo, visualizando las métricas del nodo “Evaluate Model”. 14 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Explicación de las métricas propuestas

- Coefficient of Determination (R2)

El coeficiente de determinación está entre 0 y 1. Cuanto más cerca esté de 1, mejor se ajustará la regresión lineal a los datos recopilados. 1 es igual al 100% por lo que en este caso la correlación entre las variables es total. ➢Cuanto más cerca de 1, mejor.

- Mean Absolute Error (MAE). Es el promedio de todos los errores del modelo (el

error correspondiente a la distancia desde el valor predicho hasta el valor real). ➢Cuanto más pequeño, mejor. ➢El error absoluto conserva las mismas unidades de medida que los datos bajo análisis (y otorga a todos los errores individuales el mismo peso). ➢El MAE atenúa el efecto de los outliers.

- Relative Absolute Error (RAE). Es usado para medir el desempeño del

pronóstico comparado con otro modelo que sirve de referencia. ➢Cuanto más pequeño, mejor. ➢Se expresa en %. Ejemplo: 0,23 indica que el error del modelo seleccionado es el 77% del error generado usando el modelo de referencia. Eso viene a decir que con este modelo tenemos una mejora del 64% sobre el modelo de referencia.

- Relative Squared Error (RSE). Mide el error de desempeño comparándolo con

un predictor más sencillo. Similar al RAE, normaliza el error cuadrático total dividiéndolo por el error cuadrático total de los valores predichos. ➢Cuanto más pequeño, mejor. ➢Se expresa en % y al igual que el RAE indica la mejora sobre el modelo de referencia.

- Root Mean Squared Error (RMSE). Mide la media de los cuadrados de los

errores y luego calcula la raíz cuadrada de ese valor. ➢Cuanto más pequeño, mejor. ➢Indica la “cercanía” entre los datos reales y los datos predichos. 15 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.10. PASO 6 – Configuración de los hiperparámetros. Añadir el nodo de ajuste de hyperparámetros. Más información. (No lo haremos aquí al no presentar el algoritmo de regresión linear de ningún hyperparámetro).

2.2.11.PASO 7 – Predicción del modelo (despliegue). Una vez validado el modelo, procedemos a su explotación industrial o a su comprobación con otros datos. El despliegue de un modelo de ML se divide en 4 partes. 1.Crear un inference pipeline. 2.Despliegue del modelo.

3.Despliegue del servicio. 4.Probar el servicio. 5.Puesta en producción del servicio web. 2.2.11.1. Crear un inference pipeline.

- Ir a Trabajos → Trabajo → 3 puntos → Canalización de inferencia en tiempo real.

16 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- Cambiamos el nombre (opcional).

Como se puede ver el inference pipeline contiene una salida de servicio web para devolver resultados pero no contiene una entrada de servicio web para enviar nuevos datos. Deberemos realizar algunas modificaciones sobre este pipeline. Evidentemente, el modelo entrenado se utilizará para calificar nuevos datos.

- Modificaciones al pipeline 1/4.

Por defecto, el inference pipeline se genera con el dataset de entrenamiento. Al usar el modelo en producción, ese dataset ya no será necesario. Cambiamos las entadas de datos de Dataset a Entradas de datos manual (para verificar el funcionamiento del pipeline) y servicio web.

17 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Componente Enter Data Manually: Para quitar el símbolo de admiración, introducimos en el nodo Enter Data Manually la cabecera y los 3 primeros datos del dataset de entrenamiento.

Importante: Eliminar la columna de los salarios ya que es el valor a predecir.

- Modificaciones al pipeline 2/4.

Como ya no disponemos de la columna salario en los datos de entrada, debemos eliminar cualquier referencia a esos datos en los siguientes nodos. Componente Select Columns in Dataset.

- Modificaciones al pipeline 3/4.

El componente Evaluate Model ya no es necesario ya que a partir de ahora trabajaremos con datos nuevos. 18 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- Modificaciones al pipeline 4/4 (opcional).

El nodo Score Model incluye todas las etiquetas de los datos. Para solo incluir el valor de predicción añadiremos un módulo de Select Column y solo seleccionamos la columna del valor de predicción. Configuración del nodo Select Columns in Dataset. 19 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- Resultado final.
- Clicamos en Configurar y enviar.

Creamos un nuevo infered pipeline, lo revisamos y lo enviamos. 20 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Resultados: Ejemplo de ejecución correcta. Verde: OK. Ejemplo de ejecución incorrecta. Rojo: Con errores. 21 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.11.2. Despliegue del modelo. En este ejercicio, se implementará un servicio web en una instancia de contenedor de Azure (ACI). Este tipo de computación se crea dinámicamente y es útil para el desarrollo y las pruebas.

Para producción, se debe crear un clúster de inferencia, que proporciona un clúster de Azure Kubernetes Service (AKS). 2.2.11.3. Despliegue del servicio web. Rellenar los campos obligatorios. Esperamos a que Estado de operación pase a Running. 22 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Ya se puede probar el estimador de sueldo Nota: Estado de implementación en Unhealthy. Para que el estimador funcione, se deberá solucionar primero ese problema / o esperar a que el estado pasa a healthy (no debe tardar de 10-15min).

2.2.11.4. Probar el servicio web. 23 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Cambiamos los datos y pulsamos prueba y comprobamos el rendimiento del modelo. 2.2.11.5. Puesta en producción del servicio web. 24 / 25

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2.12. PASO 8 – Cerrar el despliegue. Desmontar el servicio web. El punto de conexión consume recursos (económicos) y se debe desmontar (eliminar) al finalizar la práctica.

25 / 25

---

# 3.4 Aprenentatge supervisat. Models de regre

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT5.1. Aprendizaje supervisado. Modelos de regresión.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3
- Modelos de regresión............................................................................................................................3

2.1. Terminología utilizada en los modelos de regresión.....................................................................3 2.1.1. Variable independiente...........................................................................................................3 2.1.2. Variable dependiente..............................................................................................................3 2.1.3. Outliers..................................................................................................................................3 2.1.4. Multicolinealidad...................................................................................................................4 2.1.5. Ajuste / sobreajuste................................................................................................................5 2.2. Valoración de los modelos de regresión........................................................................................6 2.2.1. Función de coste....................................................................................................................6 2.2.2. Métricas de la función de coste.............................................................................................6 2 / 6

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

Un modelo de regresión trata de encontrar una relación matemática entre los datos de entrada (variables de entrada) y una única variable de salida.

- MODELOS DE REGRESIÓN.

2.1. Terminología utilizada en los modelos de regresión. 2.1.1. Variable independiente. Una variable independiente es una variable que representa una cantidad que se modifica en un experimento. Las variables de entrada son variables independientes. 2.1.2. Variable dependiente.

Una variable dependiente representa una cantidad cuyo valor depende de cómo se modifica las variables independientes. Las variables de salida son variables dependientes. 2.1.3. Outliers. Son los valores atípicos que pueden alterar las predicciones de nuestro modelo de ML.

No hay que relacionar necesariamente outliers con valor erróneo, de hecho pueden tener varios significados.

- Error. Por ejemplo, en una muestra de edades de personas, encontrarse con un

persona de 143 años.

- Fuera de limites. El dato sigue válido pero está fuera de contexto (familias muy

ricas viviendo en barrios humildes).

- Singulares: Un poco parecido a los valres fuera de limites, son los valores que

justamente queremos detectar con nuestro modelo de ML. 3 / 6

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Representaciones gráficas de los outliers

- 1 Dimensión.
- 2 Dimensiones.

Consecuencias de los outliners sobre los resultados de un modelo de regresión. Con outliers Sin outliers 2.1.4. Multicolinealidad. El término se refiere a la alta correlación entre dos o más variables independientes. Puede ser un problema en el aprendizaje automático ya que los modelos de regresión ya no medirán el efecto de una variable independiente sobre la respuesta, manteniendo constante, el resto de variables.

> **💡 Apunt Tècnic**
> Ejemplo: Tomar como variables (vectores / datos etiquetados) altura y peso de una persona.

4 / 6

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.1.5. Ajuste / sobreajuste. El sobreajuste se produce cuando el modelo de ML proporciona predicciones precisas para los datos de entrenamiento, pero no para los datos nuevos.

Los fenómenos de ajuste / sobreajuste vienen asociados con varios términos

- Señal. Representa los datos.
- Ruido. Representa los datos innecesarios o insignificantes.
- Error de bias o sesgo. El sesgo en ML se refiere a la tendencia de los modelos a

producir resultados que no son precisos. Es decir refleja la diferencia entre la predicción esperada de nuestro modelo y los valores verdaderos.

- Error de varianza. La varianza es una medida de dispersión. Pretende

capturar en qué medida los datos están en torno a la media. Si tenemos datos muy por encima y muy por debajo de la media, tendremos un modelo inexacto. Hay varianza cuando el modelo funciona correctamente con los datos de entrenamiento pero no con los datos de validación.

5 / 6

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2. Valoración de los modelos de regresión. 2.2.1. Función de coste. Se puede definir con el error entre valores estimados y reales. La función de coste toma como entrada los valores generados por el modelo (etiquetas / vectores) junto con los valores reales y calcula un valor que representa la distancia entre valores predichos y valores reales.

2.2.2. Métricas de la función de coste. Las métricas más habitualmente utilizadas para valores modelos de regresión son las siguientes

- R2, R cuadrado R2 = Coeficiente de determinación 1−∑( yi−^f ( xi))

∑( yi−¯f (xi)) (Cuanto más cerca de 1 mejor).

- Error medio absoluto, MAE =

n∑ i=1 n |yi−f (xi)|

- Media de los errores al cuadrado, MSE =

n∑ i=1 n ( yi−f (xi))

- Raíz cuadrada de la media del error al cuadrado, RMSE = √

n∑ i=1 n ( yi−f (xi))

- R cuadrado ajustado,

¯R 2 = 1− N−1 N−k−1∗(1−R 2)

- Mean squared logarithmic error, MSLE.
- Mean absolute percentage error, MAPE.
- Median absolute error, MedAE.
- Max error, Max Error.
- Explained variance score, Explained_Variance.
- Mean Poisson, Gamma, and Tweedie deviances, D.
- Pinball loss, pinball.
- D² score, D².

Más información. 6 / 6

---

# 3.5 Aprenentatge supervisat. Introducció.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT5. Aprendizaje supervisado. Introducción a los modelos de aprendizaje supervisado. Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3
- Modelos de aprendizaje supervisado....................................................................................................3

2.1. Algoritmos de ML de regresión.....................................................................................................4 2.2. Algoritmos de ML de clasificación...............................................................................................4

- Pasos para desarrollar un modelo de ml supervisado............................................................................5

3.1. Adquisición de los datos................................................................................................................5 3.2. Preparación de los datos................................................................................................................5 3.3. Selección de un algoritmo para el modelo....................................................................................5 3.4. Entrenamiento del modelo / separación entre datos de entrenamiento y datos de validación......6 3.5. Evaluación de los resultados.........................................................................................................6 3.6. Configuración de los hiperparámetros (hyperparameter tuning)...................................................6 3.7. Predicción del modelo...................................................................................................................7 2 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

Como ya hemos visto, el Machine Learning (ML) es un subcampo de la Inteligencia Artificial (AI). La finalidad del ML es entender la estructura de los datos y asociarle modelos matemáticos (algoritmos) para que esos datos puedan ser interpretados por los humanos. En el aprendizaje supervisado los algoritmos cuentan con unos datos etiquetados que hacen a la vez de entrada y de salida, es decir, entrenamos los algoritmos con valores de entrada conociendo el ya el resultado.

- MODELOS DE APRENDIZAJE SUPERVISADO.

Los modelos para el aprendizaje supervisado se dividen en 2 categorías

- Modelos de ML de regresión.

El propósito de los modelos de regresión es predecir un valor (numérico) en función de una serie de datos de entrada.

- Modelos de ML para la clasificación.

El propósito de los modelos de clasificación es separar los datos de entrada y agruparlos en diferentes clases. 3 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.1. Algoritmos de ML de regresión. Los modelos de regresión usan unos algoritmos dentro de los cuales encontramos.

- Modelos lineales.
- Regresión en cadena.
- Regresión LASSO.
- Elastic Net Regression.
- Regresión bayesiana.
- Regresión SGD.
- Regresión SVD.
- Regresión de Huber.
- Regresión robusta.

2.2. Algoritmos de ML de clasificación. Los modelos de clasificación unos algoritmos dentro de los cuales encontramos.

- Análisis discriminante.
- Arboles de decisión.
- Regresión logística.
- Redes neuronales
- Support vector machine
- Nearest neighbours.
- Naive Bayes.
- Redes neuronales bayesianas.

4 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- PASOS PARA DESARROLLAR UN MODELO DE ML SUPERVISADO.

Habitualmente existen 7 pasos para desarrollar un modelo de ML supervisado. 3.1. Adquisición de los datos. Este paso es muy importante porque la calidad y cantidad de los datos (etiquetados) disponibles determinará qué tan bien o mal funciona el modelo. Para desarrollar un modelo de aprendizaje automático, el primer paso consistirá en recopilar datos relevantes que puedan usarse para entrenar el modelo.

3.2. Preparación de los datos. Una vez recopilados los datos de entrenamiento debemos prepararlos para poder entrenar nuestro modelo de ML. Ejemplos

- Mezclar los datos y darles un orden aleatorio.
- Eliminar datos duplicados.
- Comprobar que no haya correlación entre los distintos parámetros de un mismo

dato (reducción de dimensión).

- Corregir (no eliminar) errores que pueden ser parámetros erróneos o faltantes

de un dato. Un buen método para preparar los datos será visualizarlos (si es posible). 3.3. Selección de un algoritmo para el modelo. Los modelos de aprendizaje supervisado se pueden dividir en 2 categorías

- Regresión.
- Clasificación.

Existen multitud de algoritmos que pueden usarse para todo tipo de propósitos, deberemos elegirlos convenientemente para optimizar el funcionamiento de nuestro modelo de ML. 5 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 3.4. Entrenamiento del modelo / separación entre datos de entrenamiento y

datos de validación. Para entrenar nuestro modelo de ML deberemos separar nuestro conjunto de datos en 2 categorías.

- Una parte más grande (~80%) se usará para entrenar el modelo.
- Una parte más pequeña (~20%) se usará para evaluar el desempeño del

modelo una vez entrenado. La mayor parte del aprendizaje de nuestro modelo de ML se realiza en esta etapa. 3.5. Evaluación de los resultados. Una vez entrenado el modelo, es necesario probarlo para ver si es capaz de predecir correctamente los datos de salida. Para ello usaremos el 20% de los datos disponibles y verificaremos la exactitud del modelo.

La evaluación del modelo se realiza utilizando una serie de métricas (modelos matemáticos), que dependiendo de sus resultados nos diran si el modelo de ML entrenado es válido o no. 3.6. Configuración de los hiperparámetros (hyperparameter tuning). Los hiperparámetros representan las variables internas de nuestro modelo, no tienen nada que ver con los datos de entrenamiento y de validación.

Si el modelo entrenado no funciona como es debido, o queremos optimizar su rendimiento, podemos ajustar los hiperpárametros del modelo. Entre los ejemplos de hiperparámetros, tenemos el número de nodos y capas de una red neuronal, el número de ramificaciones de un árbol de decisiones...

Los hiperparámetros determinan las características de un modelo de ML y el ajuste de los mismos no tiene ninguna regla definida, se basa en la experimentación. 6 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.7. Predicción del modelo. Es la etapa final del proceso de creación de un modelo de ML supervisado. A partir de este momento, se puede usar el modelo de ML entrenado con otros datos que no sean los datos con los que hemos entrenado y evaluado nuestro modelo.

Esos datos pueden estar etiquetados o no. Si son etiquetados los usaremos para ver el desempeño del modelo con casos reales. Para la puesta en producción de nuestro modelo, usaremos datos no etiquetados. 7 / 7

---
