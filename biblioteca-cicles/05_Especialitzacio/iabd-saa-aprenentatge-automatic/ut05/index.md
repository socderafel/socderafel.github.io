---
layout: default
title: "UD2 — Sistemes, Algorismes i Eines d'Aprenentatge Automàtic · Temari Complet"
course_root: ".."
badge: "CE IA i Big Data · UT5 Completa"
prev_url: "../ut06/ut0601.html"
prev_label: "⬅️ 1.1 Caracterització de IA forta I dèbil usos i"
next_url: "../ut05/ut0501.html"
next_label: "2.1 Eines d'aprenentatge automàtic ➡️"
---

# 📘 UD2 — Sistemes, Algorismes i Eines d'Aprenentatge Automàtic (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**2.1 Eines d'aprenentatge automàtic**](./ut0501.md)
- [**2.2 Algorismes aplicats a l'aprenentatge auto**](./ut0502.md)
- [**2.3 Caracterització de sistemes d'aprenentatg**](./ut0503.md)

---

# 2.1 Eines d'aprenentatge automàtic

---

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT4. Herramientas de aprendizaje automático. Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3
- Plataforma Microsoft Azure..................................................................................................................4

2.1. Registro en la plataforma...............................................................................................................4 2.2. Primer acceso.................................................................................................................................4 2.3. Primer proyecto.............................................................................................................................5 2.4. Empezando a trabajar con nuestro primer ejercicio de ML..........................................................7 2.5. Azure Machine Learning Studio....................................................................................................8 2.6. Configurando un proyecto con Azure ML Studio.........................................................................8 2.6.1. Menú Creación:.....................................................................................................................8 2.6.2. Menú Recursos:.....................................................................................................................9 2.6.3. Menú Administración:...........................................................................................................9 2.7. Ejecutando nuestro primer proyecto con ‘0’ conocimientos.......................................................12 2.7.1. Creación de un modelo de ML............................................................................................13 2.7.2. Creación del dataset.............................................................................................................14 2.7.3. Nuevo trabajo de ML automatizado....................................................................................17 2.7.4. Tipo de tarea y datos ...........................................................................................................17 2.7.5. Configuración de tarea.........................................................................................................19 2.7.6. Configuración del proceso...................................................................................................19 2.7.7. Inicio del proceso.................................................................................................................20 2.7.8. Finalización del proceso......................................................................................................20 2.7.9. Interpretación de los resultados...........................................................................................21 2.7.10. Despliegue.........................................................................................................................22 2 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

Algunas de las herramientas, servicios y lenguajes de programación más utilizados son los que se describen a continuación. Servicios en la nube: Microsoft Azure ML Studio. Amazon Machine Learning (AWS ML). Watson Machine Learning (IBM). Google Cloud Machine Learning Engine (https://cloud.google.com/?hl=es).

BigML. Dataiku. Aplicaciones de software / bibliotecas. Knime. Google Tensorflow (biblioteca). Weka (Woikoto Environment for Knowledge Analysis). PyTorch (biblioteca para ML de software libre para Python). RapidMiner. Scikit-learn (biblioteca de Deep Learning para Python).

Keras. Rstudio: al igual que RCommander, es una interfaz para usar R. Jupyter Notebook (aplicación web para crear y compartir documentos científicos). Accord.net. GitHub (repositorio y control de versiones). Tableau. Power Bi. Colab (similar a Jupyter, posibilidad de compatacion sobre GPUs y TPUs ¿Gratuito?).

Julia. Anaconda (distribución de los lenguajes Python y R para la programación científica). . H20. 3 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- PLATAFORMA MICROSOFT AZURE.

Al existir un convenio entre Generalitat Valenciana y Microsoft Ibérica S.R.L. será nuestra primera opción a la hora de realizar ML en la nube. Dentro de Azure, disponemos de la plataforma Azure Machine Learning Workspace que presenta el siguiente ecosistema: Azure Machine Learning dispone de los siguientes algoritmos.

4 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.1. Registro en la plataforma. Link: https://azure.microsoft.com/es-es/ Nos registramos con nuestro correo corporativo alumno@alu.gva.edu.es y comprobamos el crédito inicial del cual disponemos.

> **⚠️ Nota: Se puede cambiar el idioma del entorna a español....**
> Nota: Se puede cambiar el idioma del entorna a español. 2.2. Primer acceso. Azure presente multitud de servicios. En nuestro caso elegiremos Azure Machine Learning. 2.3. Primer proyecto. Pinchamos en Crear un recurso, luego en Categorías AI + Machine Learning y para terminar Crear en Azure AI services.

5 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Luego buscamos “Machine learning”. Buscamos Azure Machine Learning y creamos el recurso. 6 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Rellenamos los campos obligatorios para crear nuestro workspace. Pasamos las páginas de configuración sin cambiar nada. Validamos el área de trabajo y luego pulsamos “Crea”.

Esperamos a que se complete la implementación. 7 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Volvemos a la pagina de inicio. Pinchamos en Azura ML y comprobamos que el recurso y el área de trabajo existen. 2.4. Empezando a trabajar con nuestro primer ejercicio de ML.

Pinchamos en Espacio-de-trabajo (o el nombre que le hayas dado). 2.5. Azure Machine Learning Studio. Para poder trabajar en nuestro proyecto de ML pichamos en Iniciar Studio. 8 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.6. Configurando un proyecto con Azure ML Studio. Explicación de los menús: Creación: Para generar máquinas de ML. Recursos: Para configurar las máquinas de ML. Administrar: Para entrenar los modelos.

#### 2.6.1. Menú Creación

Notebooks: Sirve para ejecutar código propio. ML automatizado: Asistente para desarrollo de ML con poco o ningún conocimiento. Diseñado: Diseño de modelos de ML con diagramas de flujo (pipelines).

#### 2.6.2. Menú Recursos

En este menú aparecen todos los recursos disponibles para diseñar nuestro proyecto. 9 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 2.6.3. Menú Administración

Todo lo relativo a la gestión de los datos, el entrenamiento de los modelos y el despliegue de las aplicaciones. Proceso: Permite seleccionar el tipo de máquina sobre la cual desarrollaremos nuestros modelos de ML. De manera orientativa, instancias de proceso sirven para ejecutar código y clústeres de proceso para ML automatizado.

Por su parte clústeres de Kubernetes y procesos asociados se usan para pruebas y despliegue. 10 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. TAREAS: Crear una instancia de proceso. Configurar el auto apagado de la máquina al minimo tiempo posible (15 min). Crear un cluster de proceso. 11 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.7. Ejecutando nuestro primer proyecto con ‘0’ conocimientos. Como veremos más a fondo en otras unidades de trabajo todo proceso de creación de un modelo de aprendizaje automático se compone de varias etapas.

1.- La primera etapa es la determinación de la necesidad de la empresa por la implementación de un servicio de ML. 2.- Empieza el proyecto de ML propiamente dicho con la Recolección de datos. 3.- Fase de construcción, entrenamiento del modelo y validación del modelo.

4.- Despliegue (industrial) del modelo. 2.7.1. Creación de un modelo de ML. Problema: Quiero saber la probabilidad de supervivencia de los pasajeros del Titanic. Planteamiento del ejercicio. Partimos de la premisa que no tenemos ningún conocimiento de ML. Así que seleccionamos la opción ML automatizado.

12 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.7.2. Creación del dataset. Antes de nada para conseguir datasets nos registramos en www.kaggle.com Nos registramos, confirmamos la cuenta y buscamos un dataset (achivo.csv) con el listado de los pasajeros del Titanic.

Introducción del dataset: Vamos a recursos → Datos → Crear. 13 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Introducimos el nombre / descripción y no aseguramos que Tipo esta en “Tabular”. Luego seleccionamos “De archivo locales”. 14 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Revisamos los datos. Si no aparecen, hay un problema con el archivo o el formato de datos. En el paso “Esquema”, seleccionamos los datos relevantes. ➢Comprobamos que el dataset ha sido creado correctamente.

15 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.7.3. Nuevo trabajo de ML automatizado. ➢Damos un nombre a nuestro trabajo o dejamos el nombre por defecto. ➢Nombre del experimento: Crear nuevo y le damos un nombre 2.7.4. Tipo de tarea y datos .

En tipo de tarea seleccionamos Clasificación. Luego seleccionamos el dataset que hemos creado. 16 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.7.5. Configuración de tarea. El experimento trata de definir las posibilidades de supervivencia así que en “Columna de destino” la columna del dataset que corresponde a si la persona ha sobrevivido o no.

#### 2.7.6. Configuración del proceso

Seleccionamos instancia y la instancia que hemos creado anteriormente. 2.7.7. Inicio del proceso. Después de validar el ultimo paso, se inicia la tarea y se puede visualizar los avances. 17 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.7.8. Finalización del proceso. 2.7.9. Interpretación de los resultados. Una vez terminada la computación podemos ver que modelo se adapta mejor a los datos del dataset.

Seleccionamos el algoritmo que mejores resultados ha dado y lo desplegamos. 18 / 19

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.7.10. Despliegue. 19 / 19

---

# 2.2 Algorismes aplicats a l'aprenentatge auto

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT3. Algoritmos aplicados al aprendizaje automático. Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................4
- Algoritmos de regresión (predicción de valores)..................................................................................4

2.1. Regresión lineal.............................................................................................................................4 2.2. Regresión lineal múltiple...............................................................................................................6 2.3. Regresión polinomial.....................................................................................................................6 2.4. Descenso del gradiente..................................................................................................................7 2.5. Descenso del gradiente estocástico (SGD)....................................................................................8 2.6. Regresión lineal Bayesianos..........................................................................................................9 2.7. Regresión logística........................................................................................................................9 2.8. Evaluación de modelos de regresión...........................................................................................10 2.8.1. Error medio absoluto (MAE):..............................................................................................10 2.8.2. Media de los errores al cuadrado (MSE):............................................................................10 2.8.3. Raíz cuadrada de la media del error al cuadrado:................................................................11 2.8.4. R2, R cuadrado (coeficiente de determinación)...................................................................11 2.8.5. R cuadrado ajustado (coeficiente de determinación ajustado).............................................11

- Algoritmos de clasificación.................................................................................................................12

3.1. Árboles de decisión (regresión/clasificación).............................................................................12 3.2. Random forest.............................................................................................................................15 3.3. Análisis discriminante.................................................................................................................16 3.4. Vecinos más próximos (k-NN)....................................................................................................17 3.5. Análisis discriminante (LDA)......................................................................................................18 3.6. Algoritmo clasificador bayesano ingenuo (Naïve Bayes)...........................................................19 3.7. Máquinas de vector soporte (SVM)............................................................................................20 3.8. Evaluación de modelos de clasificación......................................................................................22 3.8.1. Matriz de confusión.............................................................................................................22 3.8.2. Curva ROC..........................................................................................................................24

- Algoritmos de detección de anomalías................................................................................................25
- Algoritmos de agrupamiento (clustering)............................................................................................26

5.1. Algoritmo basado en densidad:...................................................................................................26 5.2. K-medias (K-means Clustering):.................................................................................................26 5.3. Mean-Shift Clustering.................................................................................................................27 5.4. K-NN (K-Nearest Neighbours)...................................................................................................28 5.5. EM (Expectation-Maximization) Clustering...............................................................................29 5.6. Cluster por jerarquías..................................................................................................................29

- Algoritmos de aprendizaje por refuerzo (Reinforcement Learning)...................................................30
- Algoritmos de reducción de la dimensión...........................................................................................31
- Redes neuronales artificiales...............................................................................................................32

8.1. Algoritmos de aprendizaje profundo...........................................................................................32

- Plataformas de simulación de algoritmos...........................................................................................32

2 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

En esta unidad se mostraran los algoritmos más comunes empleados en machine learning. Es difícil catalogar los algoritmos por tipo de aprendizaje (supervisado, no supervisado, deep learning) porque no es difícil encontrar un mismo algoritmo en varios de esos aprendizajes.

No obstante cada algoritmo pertenece a una categoría como veremos a continuación.

- ALGORITMOS DE REGRESIÓN (PREDICCIÓN DE VALORES).

Son aquellos que devuelven un valor numérico (predecir la evolución de un parámetro (temperatura, presión…). Dentro de esta categoría encontramos (entre otros): 2.1. Regresión lineal. La regresión lineal simple es un método estadístico para encontrar una relación lineal entre una variable explicativa x, y una variable a explicar y.

4 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Si partimos de la premisa que la función a predecir es como y= f(x)= ax+b, veremos que cada vez que el modelo se entrena va afinando la regresión hasta encontrar el modelo optimo.

Se alcanza un modelo de regresión lineal óptimo cuando la diferencia entre los valores reales y el modelo son mínimos.

5 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2. Regresión lineal múltiple. La regresión lineal múltiple es una generalización de la regresión simple, es decir que el método estadístico para encontrar la variable a explicar (y) ya no se hace con solamente una variable de entrada sino con varias.

Se habla entonces de modelos multidimensionales donde (y sigue la siguiente formula: y= f(x1,x2,x3...)= b+ a1 x1 + a2 x2 + a3 x3 +… 2.3. Regresión polinomial. La regresión lineal múltiple es una extensión de la regresión simple. La relación entre y y x ya no es lineal sino polinomial.

Y= f(x)= b + a1 x + a2 x2 + a3 x3 … 6 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.4. Descenso del gradiente. El descenso del gradiente o gradiente descendiente es un algoritmo de optimización iterativo que permite encontrar mínimos locales en una función (la idea es tomar pasos de manera repetida en dirección contraria al gradiente.

Una de sus limitaciones es que solo encuentra mínimos locales (en lugar del mínimo global). Tan pronto como el algoritmo encuentra algún punto que sea un mínimo local, nunca escapará mientras el tamaño de paso no exceda el tamaño del foso. 7 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.5. Descenso del gradiente estocástico (SGD). El descenso de gradiente estocástico (SGD: Stochastic gradient descent) es un método iterativo para optimizar una función objetivo con propiedades de suavidad adecuadas.

Es particularmente útil cuando se dispone de multitud de datos con muchos parámetros. En esos casos el algoritmo de descenso del gradiente resulta machismo más pesado en cuanto a tiempo de computación se refiere. También muestra un gran flexibilidad cuando se añade al modelo nuevos datos al evitar tener que rehacer todo el aprendizaje.

8 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.6. Regresión lineal Bayesianos. Se usa cuando se tienen múltiples valores de salida posibles para un mismo valor de entrada. 2.7. Regresión logística. La regresión logística se utiliza para predecir el resultado de una variable categórica (que solo puede adoptar un número limitado de categorías) en función de variables que no son categóricas.

Se usa para modelar la probabilidad de un evento en función de otros factores. La regresión logística es usada extensamente en las ciencias médicas y sociales. 9 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.8. Evaluación de modelos de regresión. En los modelos de regresión es casi imposible predecir el valor exacto, sino que más bien se busca estar lo más cerca posible del valor real. Para evaluar lo bueno o malo que es un modelo disponemos de métricas de evaluación que nos indican lo cerca (o lejos) que están las predicciones de los valores reales.

Algunas de las métricas de evaluación más comunes para los modelos de regresión son

#### 2.8.1. Error medio absoluto (MAE)

El MAE se calcula de la siguiente manera: MAE = n∑ i=1 n |yi−f (xi)| Es la media de las diferencias absolutas entre el valor objetivo y el predicho. Al no elevar al cuadrado, no penaliza los errores grandes, lo que la hace no muy sensible a valores anómalos, por lo que no es una métrica recomendable en modelos en los que se deba prestar atención a éstos.

Lo más deseable es que su valor sea cercano a cero.

#### 2.8.2. Media de los errores al cuadrado (MSE)

El MSE se calcula de la siguiente manera: MSE = n∑ i=1 n ( yi−f (xi)) Es una de las medidas más utilizadas en tareas de regresión. Es la media de las diferencias entre el valor objetivo y el predicho al cuadrado. Al elevar al cuadrado los errores, magnifica los errores grandes, por lo que hay que utilizarla con cuidado cuando tenemos valores anómalos en nuestro conjunto de datos. Puede tomar valores entre 0 e infinito. Cuanto más cerca de cero esté la métrica, mejor.

10 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 2.8.3. Raíz cuadrada de la media del error al cuadrado

El RMSE se calcula de la siguiente manera: RMSE = √ n∑ i=1 n ( yi−f (xi)) Es igual a la raíz cuadrada de MSE. Presenta el error en las mismas unidades que la variable objetivo, lo que la hace más fácil de entender. 2.8.4. R2, R cuadrado (coeficiente de determinación). R2 se calcula de la siguiente manera = 1−∑( yi−^f ( xi)) ∑( yi−¯f (xi)) Compara el modelo con un modelo básico que siempre devuelve como predicción la media de los valores objetivo de entrenamiento.

La comparación entre los dos modelos se realiza en base a la media de los errores al cuadrado de cada modelo. Los valores que puede tomar esta métrica van desde menos infinito a 1. Cuanto más cercano a 1 sea el valor de esta métrica, mejor será el modelo. 2.8.5. R cuadrado ajustado (coeficiente de determinación ajustado).

¯R 2 se calcula de la siguiente manera = 1− N−1 N−k−1∗(1−R

- (donde N es el tamaño

de la muestra y k el número de variable). Mejora de R cuadrado. El problema de R2 es que cada vez que se añaden variables independientes el modelo, R2 se queda igual o mejora (nunca empeora). R cuadrado ajustado compensa la adición de variables independientes. El valor de ¯R 2 siempre será menor o igual R2 , pero esta métrica mostrará mejoría cuando el modelo será realmente mejor.

11 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- ALGORITMOS DE CLASIFICACIÓN.

Son aquellos que devuelven un atributo categórico como verdadero / falso, rojo / verde / amarillo… Dicho de otra manera, son aquellos atributos que devuelven un número limitado de valores. 3.1. Árboles de decisión (regresión/clasificación). Los árboles de decisión son árboles que tienen como objetivo predecir la variable respuesta en función de covariables (una variable con 2 valores posibles).

> **⚠️ Nota: Cada proceso de decisión se llama nodo. Al nodo i...**
> Nota: Cada proceso de decisión se llama nodo. Al nodo inicial (por el que empieza todo árbol de decisión), se la llama nodo raíz y a los nodos de resultado final se les llaman nodo terminal (o hojas). Existen 2 categorías de arboles de decisión: Regresión y clasificación.

12 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ✔Los arboles de regresión para los cuales la variable respuesta es cuantitativa. En esta representación vemos la equivalencia entre árbol de regresión y representación real del problema.

13 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. ✔Los arboles de clasificación, para los cuales la variable respuesta es cualitativa. 14 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.2. Random forest. Es un algoritmo de combinación de modelos. Es decir, usa 2 algoritmos para hacer predicciones, en este caso los arboles de regresión y clasificación.

Cada árbol tiene una pequeña modificación respeto a los arboles originales (falta de características originales). Esa operación se realiza de forma aleatoria (de ahí el nombre de ramdom forest). A pesar de degradar cada árbol aumenta la independencia de los arboles y permite resaltar la importancia o no de las características.

15 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 16 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.3. Vecinos más próximos (k-NN). Conocido como K-Nearest Neighbours (k-NN) es un algoritmo supervisado generalmente empleado para tareas de clasificación. El algoritmo clasifica cada dato nuevo en el grupo que corresponda, según tenga k vecinos más cerca de un grupo o del otro, calculando la distancia del elemento nuevo a cada uno de los existentes. Ordena dichas distancias de menor a mayor para ir seleccionando el grupo al que pertenecer. Este grupo será, por tanto, el de mayor frecuencia con menores distancias.

> **💡 Apunt Tècnic**
> Ejemplo: Tenemos un conjunto de datos formado por dos clases: círculos rojos y verdes que será el conjunto de datos de entrenamiento. Se quiere predecir a qué clase pertenece el nuevo elemento.

- Se calcula la distancia entre este nuevo elemento y el resto de datos.
- Si tomamos los k=3 vecinos más cercanos tenemos 2 rojas y uno verde.
- Si tomamos los k= 5 vecinos más cercanos se observa que tenemos 3 verdes por

2 rojos.

- Si limitamos el parámetro k al valor 5, viendo los verdes más números podemos

predecir que el color del nuevo elemento será verde. Como podemos ver, este algoritmo es muy sensible al parámetro k. Ese parámetro deberá estimarse mediante pruebas y/o validación cruzada.

17 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.4. Análisis discriminante (LDA). El Algoritmo de Análisis Discriminante Lineal (ADL) es un algoritmo utilizado para categorizar dos o más grupos basándose en sus características.

Es capaz de descubrir un subespacio apoyado en características que optimice la separabilidad de los grupos. Se fundamenta en el Teorema de Bayes, el cual permite calcular la probabilidad de que un evento ocurra condicionado por otro evento. 18 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Representación 2D de la probabilidad de pertenencia a un grupo o a otro. 19 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.5. Algoritmo clasificador bayesano ingenuo (Naïve Bayes). Este algoritmo está basado en que el mejor modelo es el más probable. Supone que la ocurrencia de una determinada característica es independiente de las otras (de ahí su nombre de ingenuo).

Solo necesita un pequeño grupo de entrenamiento y se usa frecuentemente en la clasificación de textos. 20 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.6. Máquinas de vector soporte (SVM). Las máquinas de vectores de soporte (support vector machines, SVMs) son un conjunto de métodos de aprendizaje (supervisado) que se utilizan para la clasificación, la regresión y la detección de valores atípicos.

Clasificación: Dado un conjunto de puntos, subconjunto de un conjunto mayor (espacio), en el que cada uno de ellos pertenece a una de dos posibles categorías, un algoritmo basado en SVM construye un modelo capaz de predecir si un punto nuevo pertenece a una categoría o a la otra.

A los puntos mas cercanos al hiperplano (elemento divisor), se les llama vector de soporte. Clasificación con más de dos categorías: El algoritmo de SVM está diseñado para clasificar dos categorías pero se puede extender con las siguientes opciones

- Enfoque uno contra uno. Dada una nueva clasificación, se entrena un

clasificador para cada par de clases y se combinan los resultados y gana la categoría con más votos.

- Uno contra todos. Se entrenan k clasificadores binarios. Cada uno determina si

el elemento nuevo pertenece a su clase frente a cualquier otra. Se estima que el nuevo elemento pertenece al clasificador con más votos. 21 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Clasificación cuando no hay linealidad de los datos. ¿Qué ocurre cuando los datos no son linealmente separables? Una solución consiste en aumentar la dimensionalidad de los datos hasta encontrar una dimensión donde si que se pueden separar los datos de forma lineal (cuidado con el incremento de tiempo de computación si los datos).

Regresión: Al igual que la clasificación nos permite decidir a qué categoría pertenece un elemento, los problemas de regresión permiten predecir el valor de un dato nuevo. Las SVM también pueden usarse para realizar problemas de regresión. 22 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.7. Evaluación de modelos de clasificación. Son más variadas que los problemas de regresión ya que trata de avaluar cuantas veces cuantas veces el modelo acierta y cuantas no lo hace.

Para entender mejor estas métricas, usaremos un ejemplo de las predicciones de un modelo de clasificación para detectar enfermos de COVID. Caso Clase predicha Clase real Error No No No No No No No No No Si No Si No No No Si Si No No No No No No No No No No No No No

#### 3.7.1. Matriz de confusión

Herramienta ampliamente utilizada, permite inspeccionar y evaluar visualmente las predicciones del modelo. En cada fila se representa el número de predicciones de cada clase y en las columnas las instancias de la clase real. 23 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Descripción de los elementos: Verdadero positivo (VP): número de ejemplos positivos que el modelo predice como positivos (en el ejemplo VP= 1). Falso positivo (FP): número de ejemplos negativos que el modelo predice como positivos (FP=1).

Falso negativo (FN): número de ejemplos positivos que el modelo predice como negativos (FN=0). Verdadero negativo (VN): número de ejemplos negativos que el modelo predice como negativos (VN= 8). De esta tabla se extraen 4 métricas: ➢Exactitud (accuracy): Es la fracción de predicciones que el modelo realizó correctamente. Es una buena métrica cuando tenemos un conjunto de datos balanceado, esto es, cuando el número de etiquetas de cada clase es similar.

En nuestro ejemplo= 0.9 o 90% (ha acertado 9 de cada 10 predicciones). Nota: Si el modelo hubiese predicho siempre la etiqueta “No”, la exactitud sería igualmente de 0.9, pero no resolvería el problema de identificar enfermos de COVID. ➢Sensibilidad (recall): Proporción de ejemplos positivos identificados correctamente entre todos los positivos reales. Es igual a VP / (VP + FN). En el ejemplo= 1 / (1 + 0)= 1.

> **⚠️ Nota: Si el modelo siempre predice la etiqueta positiva...**
> Nota: Si el modelo siempre predice la etiqueta positiva “Si”, la sensibilidad seria igual a 1, pero el modelo no sería inteligente. Lo ideal es maximizar la sensibilidad pero por sí sola esa métrica no asegura que tengamos un buen modelo. ➢Precisión: Es la fracción de elementos clasificados correctamente como positivo entre todos los que el modelo ha clasificado como positivos= VP / (VP + FP).

En el ejemplo tendría una precisión de 1 / (1 + 1) = 0.5. Con el modelo de la etiqueta siempre positiva tendríamos una precisión de 1 / (1 + 9) = 0.1. Así pues, aunque le modelo tenga una sensibilidad máxima, tiene una precisión muy pobre lo que hace necesario, para los datos del ejemplo, disponer de dos métricas para evaluar el modelo.

➢F1 score: Es una combinación de las métricas Precision y Recall. Es la más apropiada cuando los conjuntos de datos no están balenceados. F1 = (2 * precisión * recall) / (precisión + recall). 24 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Resumen. Ejemplo. 25 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.7.2. Curva ROC. La curva ROC (Receiver Operating Characteristic) se utiliza para evaluar el rendimiento de los algoritmos de clasificación binaria La curva ROC proporciona una representación gráfica, en lugar de un valor único como la mayoría de las otras métricas.

La curva ROC se debe entender como una curva de probabilidades (la mayoría de los modelos de machine learning para clasificación binaria no generan solo 1 o 0 cuando hacen una predicción). Se genera calculando y trazando la tasa de verdaderos positivos (TPR) contra la tasa de falsos positivos (FPR) para un solo clasificador.

Una ventaja que presentan las curvas ROC es que nos ayudan a encontrar un umbral de clasificación que se adapte a nuestro problema específico. Al evaluar el rendimiento de un modelo de clasificación, el enfoque reside en el comportamiento entre extremos. En general, cuanto más “arriba y a la izquierda” del diagrama se encuentre la curva ROC, mejor será el clasificador.

26 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- ALGORITMOS DE DETECCIÓN DE ANOMALÍAS.

Se utilizan para identificar valores atípicos, o casos extraños, en los datos. A diferencia de otros métodos de modelado que almacenan reglas acerca de casos extraños, los modelos de detección de anomalías almacenan información sobre el patrón de comportamiento normal lo que permite identificar valores atípicos.

La detección de anomalías puede examinar un gran número de campos para identificar grupos de homólogos en los que hay registros similares y compara cada registro con el resto del grupo de homólogos para identificar posibles anomalías. Cuanto más alejado esté un caso del centro normal, mayor será la probabilidad de que sea extraño.

Hay multitud de algoritmos de detección de anomalías y se pueden clasificar de la siguiente manera

- Métodos basados en proximidad.
- Métodos fundamentados en agrupación (CBLOF e Iforest).
- Métodos basados en densidad como DBSCAN.
- Algoritmos estadísticos como HBOS.
- Técnicas subespaciales como PCA.
- Máquinas de vector soporte o redes neuronales.

Más información. 27 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- ALGORITMOS DE AGRUPAMIENTO (CLUSTERING).

Los algoritmos de análisis de conglomerados o clustering permiten agrupar los datos (en clusters) en función de su similitud. No se deben confundir con los algoritmos de clasificación. En clasificatorio partimos de la base que tenemos clases predefinidas para clasificar los objetos, en la clusterización agrupamos objetos similares.

#### 5.1. Algoritmo basado en densidad

Los datos se agrupan por áreas de altas concentraciones de puntos de datos rodeadas por áreas de bajas concentraciones de puntos de datos.

#### 5.2. K-medias (K-means Clustering)

Muy fácil de implementar y bastante rápido tiene un par de desventajas. La primera es que se debe seleccionar inicialmente cuántos grupos/clases hay. La otra desventaja es que comienza con una elección aleatoria de centros de conglomerados lo que puede generar diferentes resultados en diferentes ejecuciones del algoritmo.

El agrupamiento se realiza minimizando la distancia cuadrática al centroide de su grupo. 28 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 5.3. Mean-Shift Clustering

Es un algoritmo basado en el centroide. Se basa en un ventana deslizante que intenta encontrar áreas densas de puntos de datos. Funciona actualizando los candidatos para que los puntos centrales sean la media de los puntos dentro de la ventana deslizante. Esas ventanas luego se filtran para eliminar todos los duplicados, y da por resultado un conjunto de puntos centrales y sus grupos correspondientes.

> **⚠️ Nota: A diferencia de K-means no es necesario definir p...**
> Nota: A diferencia de K-means no es necesario definir previamente el numero de clusters. 29 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 5.4. K-NN (K-Nearest Neighbours). El algoritmo clasifica cada dato nuevo en el grupo que corresponda, según tenga k vecinos más cerca de un grupo o del otro, calculando la distancia del elemento nuevo a cada uno de los existentes. Ordena dichas distancias de menor a mayor para ir seleccionando el grupo al que pertenecer. Este grupo será, por tanto, el de mayor frecuencia con menores distancias.

> **💡 Apunt Tècnic**
> Ejemplo: Tenemos un conjunto de datos formado por dos clases: círculos rojos y verdes que será el conjunto de datos de entrenamiento. Se quiere predecir a qué clase pertenece el nuevo elemento.

- Se calcula la distancia entre este nuevo elemento y el resto de datos.

f) Si tomamos los k=3 vecinos más cercanos tenemos 2 rojas y uno verde.

- Si tomamos los k= 5 vecinos más cercanos se observa que tenemos 3 verdes por

2 rojos.

- Si limitamos el parámetro k al valor 5, viendo los verdes más números podemos

predecir que el color del nuevo elemento será verde. Como podemos ver, este algoritmo es muy sensible al parámetro k. Ese parámetro deberá estimarse mediante pruebas y/o validación cruzada.

30 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 5.5. EM (Expectation-Maximization) Clustering

Basado en modelos de mezcla gausiana, ofrecen dos parámetros para describir la forma de los grupos. De esta manera, los grupos pueden tomar cualquier tipo de forma elíptica. 5.6. Cluster por jerarquías. El algoritmo de clúster jerárquico agrupa los datos basándose en la distancia entre cada uno de ellos y buscando que los datos que están dentro de un clúster sean los más similares entre sí.

Los algoritmos de agrupamiento jerárquico se dividen en 2 categorías: Algoritmo divisivo (de arriba hacia abajo) o aglomerativo (de abajo hacia arriba).

- El agrupamiento aglomerativo jerárquico (hierarchical agglomerative clustering).

Se representa como un árbol siendo la raíz del árbol el único racimo que reúne todas las muestras, y las hojas los racimos con una sola muestra. 31 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- El agrupamiento divisivo jerárquico (hierarchical divisive clustering), funciona a

revés del HAC. Todas las muestras pertenecen a un gran grupo único y luego los divide en grupos heterogéneos más pequeños de forma continua hasta que todos los puntos de datos estén en su propio grupo.

### 6. ALGORITMOS DE APRENDIZAJE POR REFUERZO (REINFORCEMENT

LEARNING). Hemos visto que el aprendizaje supervisado se enfoca a decidir a qué clase pertenece un dato, y que el aprendizaje no supervisado a la búsqueda de patrones entre los datos. El objetivo del aprendizaje por refuerzo (Reinforcement Learning), es el desarrollo de un sistema (agente) que desea mejorar la eficiencia de sus tareas (acción) basándose en la interacción con su entorno (ambiente) teniendo en cuenta los elementos que lo componen en ese momento (estado). Para ello, el agente recibe recompensas que permiten adaptar su comportamiento y maximizar sus recompensas.

El aprendizaje por refuerzo puede ser usado en robots, por ejemplo en brazos mecánicos en donde en vez de enseñar instrucción por instrucción a moverse, podemos dejar que haga intentos “a ciegas” e ir recompensando cuando lo hace bien. Desde cierto punto de vista este tipo de algoritmos puede considerarse una forma de algoritmos supervisados. Sin embargo, la recompensa no es la "verdad fundamental" (ground truth), es solo un indicador de cuan bien o mal ha realizado su acción.

A medida que recibe recompensas, el agente debe desarrollar la estrategia correcta - llamada política (policy)- que lo lleve a obtener recompensas positivas en todas las situaciones posibles. Link a un ejemplo. 32 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- ALGORITMOS DE REDUCCIÓN DE LA DIMENSIÓN.

La reducción de dimensionalidad o reducción de la dimensión es el proceso de reducción del número de variables a tratar. De esa manera permite reducir el coste de cálculo de algoritmos de aprendizaje automático, proporcionando resultados comparables. Un concepto a retener de la reducción de la dimensión es el de manifold. Consiste en realizar una proyección aleatoria de los datos (seria como pasar de una representación en 3D a 2D).

Al ser aleatoria se puede perder la vista realmente útil, Para evitar ese inconveniente varios algoritmos (supervisados o no supervisados) han sido diseñados que se pueden clasificar en 2 grupos: lineales con información global y no lineales con información local.

Dentro de los métodos lineales tenemos

- Análisis de componente principal / Principal Component Analysis PCA.
- Análisis de factores / Factor Analysis FA
- Análisis de discriminante lineal / Linear Discriminant Analysis LDA
- Análisis de componente independiente / Independent Component Analysis
- Truncated Singular Value Decomposition SVD

Dentro de los métodos no lineales tenemos

- KernelPCA
- Autoencoders
- Isometric mapping IsoMap
- Locally Linear Embedding LLE

33 / 34

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- LaPlacian Eigenmaps
- t-distributed Stochastic Neighbor Embedding t-SNE
- Uniform Manifold Approximation and Projection UMAP
- Escalamiento multidimensional / Multidimensional Scaling MDS.
- REDES NEURONALES ARTIFICIALES.

Principalmente usado en aprendizaje profundo, utiliza los nodos o las neuronas interconectados en una estructura de capas que se parece al cerebro humano. Crea un sistema adaptable que las computadoras utilizan para aprender de sus errores y mejorar continuamente. De esta forma, pueden resolver problemas complicados de clasificación y regresión.

8.1. Algoritmos de aprendizaje profundo. Los algoritmos de deep learning realizan una tarea repetitiva que ayuda a mejorar de manera gradual el resultado a través de ‘’deep layers’’ lo que permite el aprendizaje progresivo. Este proceso forma parte de una familia más amplia de métodos de machine learning basados en redes neuronales.

- PLATAFORMAS DE SIMULACIÓN DE ALGORITMOS.

https://ml-playground.com/ https://mlplaygrounds.com/ https://playground.tensorflow.org/ 34 / 34

---

# 2.3 Caracterització de sistemes d'aprenentatg

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT2. Caracterización de sistemas de aprendizaje automático. Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Introducción..........................................................................................................................................3
- Clasificación de sistema de aprendizaje automático.............................................................................4

2.1. Aprendizaje automático supervisado.............................................................................................4 2.2. Aprendizaje automático no supervisado........................................................................................6 2.3. Aprendizaje automático semisupervisado.....................................................................................7 2.4. Aprendizaje automático por refuerzo............................................................................................8

- Técnicas para desarrollar el aprendizaje automático.............................................................................9

3.1. Red neuronal..................................................................................................................................9 3.2. Funcionamiento de una red neuronal..........................................................................................10 3.3. Tipos de conexiones de una red neuronal....................................................................................11 3.4. Entrenamiento de una red neuronal.............................................................................................11 2 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- INTRODUCCIÓN.

El Machine Learning es una disciplina del campo de la Inteligencia Artificial que, a través de algoritmos, dota a los ordenadores de la capacidad de identificar patrones en datos masivos y elaborar predicciones (análisis predictivo). Este aprendizaje permite a los computadores realizar tareas específicas de forma autónoma, es decir, sin necesidad de ser programados.

Ejemplo de detección de patrones: Ejemplo de predicción

3 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- CLASIFICACIÓN DE SISTEMA DE APRENDIZAJE AUTOMÁTICO.

Los sistemas de aprendizaje automático (y los algoritmos asociados a los mismos) se pueden clasificar en grandes grupos.

- Aprendizaje supervisado.
- Aprendizaje no supervisado.
- Aprendizaje semisupervisado.
- Aprendizaje por refuerzo.

2.1. Aprendizaje automático supervisado. El aprendizaje supervisado utiliza un conjunto de datos (etiquetados), llamado conjunto de entrenamiento para aprender a hacer predicciones sobre nuevos datos. El aprendizaje supervisado se realiza teniendo conocimiento previo de cuáles deben ser los valores de salida para nuestras muestras. Dicho en otras palabras, realizamos el aprendizaje sobre unos datos de los cuales ya sabemos los datos de salida. Por lo tanto, el objetivo de este tipo de aprendizaje es aprender una función que se aproxime lo mejor posible a la relación existente entre entradas y salidas.

Los sistemas de aprendizaje automático supervisados y los algoritmos asociados, sirven fundamentalmente para hacer predicciones. 4 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Existen 2 grandes grupos de aprendizaje supervisado, clasificación y regresión.

- Clasificación. Consiste en que el algoritmo trate de etiquetar los datos eligiendo

entre 2 o más clases. Utiliza la información aprendida de los datos de entrenamiento para predecir la etiqueta correcta del nuevo dato de entrada.

- Regresión. El entrenamiento de un algoritmo sirve para predecir un resultado a

partir de un rango de valores posibles. 5 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.2. Aprendizaje automático no supervisado. El aprendizaje automático no supervisado parte de unos datos sin etiquetar que el algoritmo tiene que intentar entender los datos por sí mismo.

El aprendizaje automático no supervisado es la ciencia de tratamiento de datos en la que se etiquetan los conjuntos de datos para que el algoritmo haga los agrupamientos de elementos similares. A diferencia del aprendizaje supervisado, el aprendizaje automático no supervisado no tiene ningún tipo de conocimiento que le permite confirmar el aprendizaje ni tener la capacidad de definir la individualidad de los integrantes de cada conjunto.

Los sistemas de aprendizaje automático no supervisados y los algoritmos asociados, sirven fundamentalmente para detectar patrones (clusters). 6 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.3. Aprendizaje automático semisupervisado. Es una mezcla de los 2 tipos de aprendizajes anteriores donde parte de los datos de entrada están etiquetados y otros no.

> **💡 Apunt Tècnic**
> Ejemplo: Análisis de una reseña de internet para detectar los sentimientos del cliente . 7 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 2.4. Aprendizaje automático por refuerzo. El aprendizaje automático por refuerzo permite planear estrategias en base a la experimentación con los datos. Nos encontramos con problemas no supervisados que reciben re-alimentaciones o refuerzos (gana o pierde, ...) .

Ejemplo básico de un juego donde el algoritmo aprende el juego para maximizar la puntuación. Link a un ejemplo. 8 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- TÉCNICAS PARA DESARROLLAR EL APRENDIZAJE AUTOMÁTICO.

Dentro del aprendizaje automático (ML), existen muchas técnicas (y algoritmos) que cubren todo tipo de aplicaciones (árboles de decisión, modelos de regresión, clasificación, clustering …). Sin embargo, gracias a los avances tecnológicos una técnica que está cogiendo cada vez más importancia es la técnica que usa redes neuronales artificiales.

Las redes neuronales son capaces de aprender de forma jerarquizada. La información se aprende por niveles, donde las primeras capas se centran en conceptos muy concretos y las capas posteriores usan la información adquirida previamente para comprender conceptos mas abstractos.

A medida que añadimos mas capas, la información que se aprende es cada vez mas abstracta e interesante. No hay limite de capas y la tendencia es anadir mas capas a estos algoritmos. Este incremento en el número de capas y en la complejidad es lo que hace que estos algoritmos sean conocidos como algoritmos de Deep learning.

Aunque se haya avanzado mucho en esa rama del aprendizaje, esos algoritmos se caracterizan por ser lentos y necesitar muchos recursos para entrenar lo que los relega a aplicaciones donde el aprendizaje automático no es aplicable. 3.1. Red neuronal. Las redes neuronales artificiales están constituidas por conjuntos de neuronas distribuidas en varias capas enlazadas entre sí. Cada neurona procesa la información que recibe y la propaga a través de toda la red.

9 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Estos son los elementos constitutivos de una red neuronal. Capa de entrada: Es la encargada de introducir la información a la red neuronal. Esta compuesta por tantos nodos como entradas tenga la red.

Capa de salida: Está compuesta por tantas neuronas como salidas, las activaciones de cada neurona de la ultima capa corresponde a las salidas de la red. Capas ocultas: Entre la capa de entrada y la de salida se dispone de tantas capas como se necesite y de tantas neuronas como se desee. La función de esas capas es procesar la información recibida por la red neuronal.

3.2. Funcionamiento de una red neuronal. La red recibe los datos de la capa de entrada. Cada una de estas neuronas tiene asociado un peso con el que modifica el valor que ha recibido. A la salida de la neurona puede existir una función de activación que marca un umbral que permite continuar o impedir el paso a la siguiente neurona de la red.

Los valores que se han calculado pasan a las neuronas de las siguientes capas de la red que vuelven a modificar los valores que reciben con los pesos y funciones de activación asociados hasta llegar a la capa de salida que proporciona el resultado final. Una red neuronal aprende mediante el ajuste de sus parámetros. Los datos, por ejemplo, números, imágenes o sonido, entran por la primera capa y se distribuyen entre las neuronas de esa capa (primer procesado) y los envían a la siguiente capa.

A medida que los datos van pasando de capa a capa, queda menos del dato original (imagen o sonido) y quedan datos más abstractos (información útil). De esa manera cada capa aprende de la capa anterior. La red será más compleja cuanto mayor sea el número de capas ocultas, pero también será capaz de realizar funciones más complejas.

10 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 3.3. Tipos de conexiones de una red neuronal. La redes neuronales pueden clasificarse dependiendo del tipo de conexiones que existe entre las neuronas: redes feedforward o hacia adelante y redes feedback o recurrentes.

- En las redes hacia adelante, las conexiones entre neuronas no forman ciclos.

Las neuronas de una capa se conectan con las de la siguiente, pero nunca con neuronas de capas anteriores.

- En las redes recurrentes, existen ciclos en las conexiones, es decir, hay

conexiones hacia atrás. En algunas de estas redes, cada vez que a una neurona se le suministra una entrada la red debe iterar durante un tiempo potencialmente largo hasta que genera una respuesta. Este tipo de redes resultan más difíciles de entrenar que las redes hacia adelante.

3.4. Entrenamiento de una red neuronal. Cuando le proporcionamos el primer dato a la red neuronal, con unos pesos iniciales predefinidos, nos dará una salida distinta a la esperada. El algoritmo matemático será el que irá ajustando los pesos y las funciones de activación hasta que el resultado sea correcto.

Esto se conoce como entrenamiento de la red. Cuando la red prácticamente acierta todos los ejemplos, podemos enfrentarla a nuevos datos reales. La gran desventaja que presentan las redes frentes a otros sistemas de aprendizaje es que la etapa de entrenamiento suele ser muy larga. Como gran ventaja, una vez entrenado el modelo, la velocidad de respuesta es casi instantánea.

11 / 12

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Al igual que para los modelos de aprendizaje automático, el aprendizaje de una red neuronal puede ser supervisado o no supervisado. En un aprendizaje supervisado se conocen los resultados correctos a ciertos problemas y estos valores son proporcionados a la red neuronal durante el entrenamiento. Una vez que la red ha sido entrenada, se comprueba su eficacia usando un nuevo conjunto de entradas y comprobando que los resultados que proporciona se corresponden con los resultados correctos.

En el aprendizaje no supervisado, el resultado de la tarea no viene dado, sino que el sistema lo averigua exclusivamente a partir de la información de entrada. 12 / 12

---
