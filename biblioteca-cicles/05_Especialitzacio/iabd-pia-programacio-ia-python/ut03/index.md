---
layout: default
title: "UD3 — Ciència de Dades: NumPy, Pandas, Matplotlib, Seaborn i Scikit-Learn · Temari Complet"
course_root: ".."
badge: "CE IA i Big Data · UD3 — Ciència de Dades: NumPy, Pandas, Matplotlib, Seaborn i Scikit-Learn"
prev_url: "../ut02/ut0202.html"
prev_label: "⬅️ 2.2 Python para todos (libro)."
next_url: "../ut03/ut0301.html"
next_label: "3.1 6 Biblioteca scikit learn - Preprocesado de ➡️"
---

# 📘 UD3 — Ciència de Dades: NumPy, Pandas, Matplotlib, Seaborn i Scikit-Learn (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 6 Biblioteca scikit learn - Preprocesado de**](./ut0301.md)
- [**3.2 5 Biblioteca plotly**](./ut0302.md)
- [**3.3 4 Biblioteca seaborn**](./ut0303.md)
- [**3.4 3 Biblioteca matplotlib**](./ut0304.md)
- [**3.5 2 Biblioteca Pandas**](./ut0305.md)
- [**3.6 1 Biblioteca Numpy**](./ut0306.md)
- [**3.7 0 Presentació unitat**](./ut0307.md)

---

# 3.1 6 Biblioteca scikit learn - Preprocesado de

> **🔗 Recurs Web: UT 3.9 Notebooks y datasets**
> [**🌐 Obrir recurs extern (https://drive.google.com/drive/folders/1cdyRwi7MSKs0xknXFjISTlSW4yQEDDev?usp=sharing) ↗️**](https://drive.google.com/drive/folders/1cdyRwi7MSKs0xknXFjISTlSW4yQEDDev?usp=sharing)

> **🔗 Recurs Web: UT 3.8 Apuntes de clase**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/1eR1ag-uPXl_bHXGMImE3ZiVwW2pxFgmJ/view?usp=drive_link) ↗️**](https://drive.google.com/file/d/1eR1ag-uPXl_bHXGMImE3ZiVwW2pxFgmJ/view?usp=drive_link)

> **🔗 Recurs Web: UT 3.8 Notebooks y datasets**
> [**🌐 Obrir recurs extern (https://drive.google.com/drive/folders/1jVmXA8QIXbdoGOSH62bWZXwBC9ZAuDTS?usp=sharing) ↗️**](https://drive.google.com/drive/folders/1jVmXA8QIXbdoGOSH62bWZXwBC9ZAuDTS?usp=sharing)

> **🔗 Recurs Web: UT 3.7 Apuntes de clase**
> [**🌐 Obrir recurs extern (https://drive.google.com/file/d/1N2AYYHkQ9vvCQS-7sWs_yyxl7PMDycH3/view?usp=drive_link) ↗️**](https://drive.google.com/file/d/1N2AYYHkQ9vvCQS-7sWs_yyxl7PMDycH3/view?usp=drive_link)

> **🔗 Recurs Web: UT 3.7 Notebooks y datasets**
> [**🌐 Obrir recurs extern (https://drive.google.com/drive/folders/1TF-G82dDxs_K69927HPlm3PXN42xZnZj?usp=drive_link) ↗️**](https://drive.google.com/drive/folders/1TF-G82dDxs_K69927HPlm3PXN42xZnZj?usp=drive_link)

---

#### 📦 IA BD PIA UT 3.6 Biblioteca scikit learn Preprocesado.pdf

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. UT 3.6 Programación de ML con Python. Biblioteca Scikit learn Preprocesado de los datos para el aprendizaje supervisado. Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Taula de continguts

- Scikit-learn............................................................................................................................................3

1.1. Descripción.....................................................................................................................................3 1.2. Enlaces de interés:..........................................................................................................................3 1.3. Instalación.......................................................................................................................................3 1.4. Ecosistema scikit-learn:..................................................................................................................3 1.5. El aprendizaje automático (machine learning) en una imagen.......................................................4

- Aprendizaje supervisado con scikit-learn..............................................................................................5

2.1. Conseguir los datos.........................................................................................................................5 2.1.1. Repositorios de scikit learn.....................................................................................................5 2.1.2. Otros repositorios, maneras de construir datasets...................................................................5 2.2. Preparación (preprocesado) de datos..............................................................................................6 2.2.1. Visualización de los datos.......................................................................................................6 2.2.1.1. Ordenar los datos (opcional)...........................................................................................7 2.2.1.2. Ver los datos nulos / NaN................................................................................................7 2.2.2. Datos faltantes........................................................................................................................7 2.2.2.1. Actuación con los datos faltantes en Pandas: .dropna() y .fillna()..................................7 2.2.2.2. Actuación con los datos faltantes en Pandas: .interpolate()............................................8 2.2.2.3. Actuación con los datos faltantes de un dataframe en Pandas: .replace().......................8 2.2.3. Actuación con los datos faltantes de un dataframe en Pandas: .where()................................8 2.2.3.1. Actuación con los datos faltantes con skitlearn..............................................................9 2.2.4. Datos duplicados.....................................................................................................................9 2.2.5. Normalización y estandarización de los datos......................................................................10 2.2.6. Otras bibliotecas para normalizar datos:...............................................................................13 2.2.7. Outliers.................................................................................................................................14 2.2.7.1. Rango intercuartílico.....................................................................................................14 2.2.7.2. Detección de outliers con Tukey Fences.......................................................................16 2.2.7.3. Desviación estándar......................................................................................................17 2.2.7.4. Detección de outliers con Z-score.................................................................................17 2.2.7.5. Isolation Forest..............................................................................................................19 2.2.7.6. Isolation Forest en scikit learn......................................................................................20 2.2.7.7. Local Outlier Factor (LOF)...........................................................................................21 2.2.7.8. Actuación con los outliers.............................................................................................22 2.2.8. Correlación entre datos, multicolinealidad...........................................................................22 2.2.8.1. Estimación de la correlación entre datos.......................................................................22 2.2.8.2. Eliminación de los datos correlacionados.....................................................................24 2.2.9. Manejando el tipado de los datos..........................................................................................25 2.2.9.1. Cambiar el tipado de los datos......................................................................................25 2.2.9.2. Pasar las variables categóricas a numéricas..................................................................26 2.2.10. Datos mal etiquetados.........................................................................................................30 2.2.11. Reducción de la dimensionalidad de los datos...................................................................32 2.2.11.1. Eliminación de las etiquetas por baja varianza...........................................................32 2.2.11.2. Univariate Feature Selection.......................................................................................32 2.2.11.3. Recursive feature elimination,....................................................................................33 2.2.11.4. SelectFormModel........................................................................................................33 2.2.11.5. Sequential Feature Selection (SFS).............................................................................33 2.3. Separación de los datos para entrenamiento y test.......................................................................34 2 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA.

### 1. SCIKIT-LEARN

#### 1.1. Descripción

Scikit-learn (framework) es una biblioteca de aprendizaje automático de código abierto que admite el aprendizaje supervisado y no supervisado. También proporciona varias herramientas para el ajuste de modelos, el preprocesamiento de datos, la selección y evaluación de modelos y muchas otras utilidades.

#### 1.2. Enlaces de interés

Scikit-learn 1.3.2 manual del usuario. https://scikit-learn.org/stable/tutorial/index.html https://anaconda.org/anaconda/scikit-learn

#### 1.3. Instalación

Para instalar scikit learn en anaconda: conda install -c anaconda scikit-learn

#### 1.4. Ecosistema scikit-learn

3 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 1.5. El aprendizaje automático (machine learning) en una imagen. 4 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA.

- APRENDIZAJE SUPERVISADO CON SCIKIT-LEARN.

Recordatorio: Los 7 pasos del aprendizaje supervisado.

- Definir el problema / necesidad.
- Conseguir los datos.
- Preparación de los datos (limpieza + separación).
- Elección del modelo.
- Entrenamiento.
- Evaluación.
- Optimización del modelo (hiperparámetros).
- Predicción, puesta en producción.

Para cada uno de esos pasos tenemos disponibles bibliotecas que nos ayudaran a desarrollar nuestros modelos de ML. 2.1. Conseguir los datos.

#### 2.1.1. Repositorios de scikit learn

Desde la documentación oficial: Dataset loading utilities, link 3 formas de cargar datasets para familiarizarse con la plataforma.

- Dataset loaders.

“Toy datasets”: Datasets de juguete. No necesitan descargar ningún fichero. Los datasets se descargan como funciones. Estas funciones devuelven una tupla (X,

- que consta de una matriz numpy X de n_samples * n_features y una matriz de

longitud n_samples que contiene los objetivos y. Biblioteca de scikitlearn: sklearn.datasets

- Dataset fetchers.

“ Real world datasets”

Datasets reales. Los datasets se descargan como funciones.

- Dataset generation functions.

Funciones que permiten generar todo tipo de datos. 2.1.2. Otros repositorios, maneras de construir datasets. Biliotecas numpy / pandas etc, … kaggle, repositorios, www 5 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2. Preparación (preprocesado) de datos. Una vez obtenido el dataset deberemos empezar a verificar si contiene fallos. Los fallos que nos podemos encontrar en un dataset pueden ser los siguientes

- Valores faltantes / con ceros
- Filas o valores que están duplicados
- Columnas vacías
- Formatos inconsistentes (fecha, hora, %, ...)
- Unidades mezcladas (gramos, kg, libras, …)
- Datos no / mal etiquetados
- Valores atípicos (outliers)
- Texto convertido a números
- Números convertidos a texto
- Clases desbalanceadas
- Correlación entre inputs (datos de entrada, variables independientes).
- Datos no normalizados
- ...

2.2.1. Visualización de los datos. Para visualizar los datos (etiquetados) usaremos los métodos y los atributos de la biblioteca pandas.

- df.describe()
- df.head()
- df.info()
- df.shape
- df.columns
- df.index
- df.isnull() (dataframe con pocas filas)
- df.isnull().sum()
- df.isna() (dataframe con pocas filas)
- df.isna().sum()
- ...

6 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.1.1. Ordenar los datos (opcional). Puede resultar interesante ordenar los datos por columna, índice o fila. Para ordenar los datos usaremos los métodos y los metodos de la biblioteca pandas.

- df.sort_values([etiqueta(s) columna(s)], *, axis=0, ascending=True/False,

inplace=False/True, kind='quicksort', na_position='first / last', ignore_index=False, key=None)

- df.sort_index(*, axis=0, level=None, ascending=True, inplace=False/(True),

kind='quicksort', na_position='last/first', sort_remaining=True, ignore_index=False, key=None) 2.2.1.2. Ver los datos nulos / NaN. Para obtener información sobre los nulos de un dataset podemos usar los métodos isnull() e isna(). Los 2 métodos son equivalentes y se pueden usar indistintamente.

- df.isnull().sum().values: devuelve un array con los nulos por columna.
- df.isnull().sum(): devuelve la suma de nulos por columnas.
- df.isnull().any(): booleano. Devuelve si hay nulos en cada columna.
- df.isnull().sum().sum(): Devuelve el total de nulos del dataset.

2.2.2. Datos faltantes. Una vez detectados los datos faltantes queda definir qué hacer con ellos. 2.2.2.1. Actuación con los datos faltantes en Pandas: .dropna() y .fillna(). 2 maneras de tratar los datos faltantes: Eliminación de la fila o cargar con un valor.

- Eliminación de la fila con el método .dropna()
- Cargar con un valor .fillna(): Por ejemplo df.mean(), df.median(), df.min(),

df.max() (solo para columnas con valores numéricos). Método: dataFrame.fillna(value=None,*, method=None, axis=None, inplace=False, limit=None, downcast=_NoDefault.no_default

- value: Valor a poner en las celdas con faltantes.
- method: “bfill”, “ffill”, utiliza el valor siguiente o anterior.
- axis: 0/1, index/columns.
- inplace: True/False. True escribe en el df original, False, crea uno nuevo.
- limit: limite máximo de NaN a sustituir.

Más información Nota importante: Los métodos .fillna() y .dropna() tiene el inplace por defecto en False. Para que la modificación sea permanente, pasar al atributo inplace el valor True. 7 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.2.2. Actuación con los datos faltantes en Pandas: .interpolate(). Otro método para tratar los datos faltantes, pero esta vez, interpolando el dato a sustituir en función de su “entorno”.

Método: dataFrame.interpolate(method='linear', *, axis=0, limit=None, inplace=False, limit_direction=None, limit_area=None, downcast=_NoDefault.no_default, **kwargs)

- method: Técnica de interpolación.
- axis: 0/1, index/columns.
- limit: limite máximo de NaN a sustituir.
- inplace: True/False. True escribe en el df original, False, crea uno nuevo.
- limit_direction: Dirección de relleno de los NaN definido en limit.
- limit_area: Estrategia para rellenar los NaN si hay muchos NaN consecutivos.

Más información. 2.2.2.3. Actuación con los datos faltantes de un dataframe en Pandas: .replace(). Reemplaza un valor por otro, no es necesario que el valor sea del tipo np.nan Método DataFrame.replace(to_replace=None, value=_NoDefault.no_default, *, inplace=False, limit=None, regex=False, method=_NoDefault.no_default)

- to_replace: Valor a encontrar para la sustitución.
- value: Valor a poner
- inplace: True/False. True escribe en el df original, False, crea uno nuevo.
- Regex: True/False: Interpretar to_replace / value como expresiones regulares.

Más información. 2.2.3. Actuación con los datos faltantes de un dataframe en Pandas: .where(). Reemplaza un valor cuando la condición establecida es False. Método DataFrame.where(cond, other=nan, *, inplace=False, axis=None, level=None

- cond: True mantiene el valor, False sustituye el valor.
- other: Valor a poner cuando cond es False
- inplace: True/False. True escribe en el df original, False, crea uno nuevo.
- axis: 0/1, index/columns.
- level: None.

Más información. 8 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.3.1. Actuación con los datos faltantes con skitlearn.

- SimpleImputer

Estrategia básica para imputar valores faltantes ('mean', 'median', 'most_frequent', o un valor constante). En vez de poner valor estadísticos (media, mediana…) se puede optar por estimar el valor en función en función de los datos que lo rodean.

- IterativeImputer

Estrategia más avanzada basada en regresión para predecir y reemplazar los valores faltantes. Utiliza un modelo de regresión en cada iteración para estimar los valores faltantes. Considera relaciones entre variables al imputar valores faltantes. Requiere más recursos.

- KNNImputer

Realiza imputación de vecinos más cercanos (se debe especificar el numero de vecinos para realizar la imputación). Más información 2.2.4. Datos duplicados. Por datos duplicados se entiende aquellas filas que se repiten varias veces en el dataset. Para evitar de alargar los tiempos de computación y alterar las predicciones del modelo, conviene localizarlas y suprimirlas.

- Buscar los duplicados, método DataFrame.duplicated.

DataFrame.duplicated(subset=None, keep='first') Devuelve una serie de boleanos marcando las filas duplicadas. subset: Etiqueta de la(s) columna(s). keep: first / last / false first: marca todas las filas duplicadas con True, menos la primera. last: marca todas las filas duplicadas con False menos la última.

false: marca todas las columnas como True. axis: 0/1, index/columns. level: None. Más

información

> **💡 Apunt Tècnic**
> Ejemplo: df.duplicated(): True or false 9 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA.

- Eliminar los duplicados, método DataFrame.drop_duplicates.

DataFrame.drop_duplicates(subset=None, *, keep='first', inplace=False, ignore_index=False)

- subset: Etiqueta de la(s) columna(s).
- keep: first / last / false

first: marca todas las filas duplicadas con True, menos la primera. last: marca todas las filas duplicadas con False menos la última. false: marca todas las columnas como True.

- inplace: True / False, 0/1, 0 crea un nuevo dataframe, 1 actualiza el original.
- ignore_index: Si True crea un nuevo indice.

Más

información

2.2.5. Normalización y estandarización de los datos. Para evitar problemas de desempeño de muchos algoritmos de ML, hay que normalizar o estandarizar las variables de entrada al algoritmo. Normalizar o estandarizar significa (en este caso), comprimir o extender los valores de la variable para que estén en un rango definido.

Módulo de python para preprocesar datos: preprocessing Nota: Para saber todas las clases de un módulo ejecutar dir(módulo). Más

información

Normalizar: significa escalar los datos desde sus valores originales a un rango definido. (típicamente entre 0 y 1). Estandardizar: se refiere a escalar la distribución de los datos de forma tal que la media de los valores sea 0 y su desviación estándar sea 1. 10 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Ejemplo de normalización con la clase MinMaxScaler del módulo preprocessing. Nota: fit_transform equivale a hacer fit() y luego transform(). fit: Introducir los parámetros de la transformación dentro del algoritmo.

transform: Aplicar los parámetros a los datos.

11 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Ejemplo de normalización con la clase Normalizer del módulo preprocessing. 12 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Ejemplo de estandarización con la clase StandardScaler del módulo preprocessing. Más información

#### 2.2.6. Otras bibliotecas para normalizar datos

https://scipy.org/ 13 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7. Outliers. 2.2.7.1. Rango intercuartílico Una representación gráfica de los outliers es mediante los diagramas de cajas que usan el rango intercuartílico. Mediana: Valor que separa la serie en 2 series con la misma cantidad de elementos.

Q1, primer cuartil: Valor que separa la serie “izquierda” en 2. Q3, tercer cuartil: Valor que separa la serie “derecha” en 2. IQR (rango intercuartílico): Q3 - Q1 Q1 – 1,5 x IQR < Rango aceptable < Q3 + 1,5 x IQR. Cualquier valor fuera del rango aceptable se considera un outlier.

14 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Ejemplo1: serie: 8, 9, 9, 10, 10, 10, 10, 11, 12, 15, 36 Mediana: 10 Q1, primer cuartil: 9 Q3, tercer cuartil: 12 IQR: Q3 – Q1 = 3 4,5 < Rango aceptable < 16,5 → Outlier: 36 Ejemplo2: serie: 4942, 3331, 2830, 5424, 3506, 5483, 3004, 4411, 3942, 4199, 9754, 4091, 3423, 5253 Ordenar la serie.

2830, 3004, 3331, 3423, 3506, 3942, 4091, 4199, 4411, 4942, 5253, 5424, 5483, 9754 Mediana: 2830, 3004, 3331, 3423, 3506, 3942, 4091, 4199, 4411, 4942, 5253, 5424, 5483, 9754 → Valor de la mediana: (4091+4193) / 2 = 4145 Q1, primer cuartil: 2830, 3004, 3331, 3423, 3506, 3942. 4091 → Valor del primer cuartil: 3423 Q3, tercer cuartil

4199, 4411, 4942, 5253, 5424, 5483, 9754 → Valor del tercer cuartil: 5253 IQR: Q3 – Q1 = 1830 678 < Rango aceptable < 7998 → Outlier: 9754 15 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7.2. Detección de outliers con Tukey Fences. Tukey Fences se basa en el rango intercuartil (IQR) para detectar los outliers. C á lculo de los

cuartiles

numpy: numpy.percentile numpy.percentile(a, q, axis=None, out=None, overwrite_input=False, method='linear', keepdims=False, *, interpolation=None) Más información pandas: pandas.DataFrame.quantile DataFrame.quantile(q=0.5, axis=0, numeric_only=False, interpolation='linear', method='single') Más información Recuperar los valores incluidos dentro del rango aceptable

numpy.where numpy.where(condition, [x, y, ]/) M ás informaci

ón

pandas.Series.where Series.where(cond, other=nan, *, inplace=False, axis=None, level=None) Más información pandas.DataFrame.where DataFrame.where(cond, other=nan, *, inplace=False, axis=None, level=None) Más información Ejemplo en numpy 16 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7.3. Desviación estándar La desviación estándar (desviación típica) representada por “σ”, “s” o SD se utiliza para cuantificar la variación (o la dispersión) de un conjunto de datos numéricos.

Una desviación estándar baja indica que los datos de una muestra tienden a estar agrupados cerca de su media, mientras que una desviación estándar alta indica que los datos se extienden sobre un rango de valores más amplio. Una representación gráfica de la desviación estándar puede ser una gráfica de la distribución normal (o curva en forma de campana, o curva de Gauss), donde cada banda tiene un ancho de una vez la desviación estándar.

2.2.7.4. Detección de outliers con Z-score. La puntuación Z (Z-score) de una serie es el número de desviaciones estándar (dispersión de una distribución de datos) que hay por encima o por debajo de la media de la serie. Para calcular la puntuación Z, se debe saber la media y la desviación estándar de la serie.

Como regla general, las puntuaciones Z inferiores a -1,96 o superiores a 1,96 se consideran como valores atípicos. La puntuación Z se calcula de la siguiente manera. Z= xi−μ σ Donde: xi = es un valor de la serie.  = es la media de la serie.  = es la desviación estándar.

17 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. C á lculo de l

a media de la serie

numpy.mean numpy.mean(a, axis=None, dtype=None, out=None, keepdims=<no value>, *, where=<no value>) M ás informaci

ó n pandas.Series.mean Series.mean(axis=0, skipna=True, numeric_only=False, **kwargs) M ás informaci

ó n pandas.DataFrame.mean DataFrame.mean(axis=0, skipna=True, numeric_only=False, **kwargs) M ás informaci

ó n Cálculo de la desviación estándar numpy.std numpy.std(a, axis=None, dtype=None, out=None, ddof=0, keepdims=<no value>, *, where=<no value>) M ás informaci

ó n

pandas.Series.std Series.std(axis=None, skipna=True, ddof=1, numeric_only=False, **kwargs) M ás informaci

ó n pandas.DataFrame.std DataFrame.std(axis=0, skipna=True, ddof=1, numeric_only=False, **kwargs) M ás informaci

ó n 18 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7.5. Isolation Forest Isolation forest es un algoritmo de detección de valores atípicos. Divide los datos utilizando un conjunto de árboles y proporciona una puntuación de anomalía observando qué tan aislado está el punto en la estructura encontrada.

Como para la Z score, la puntuación de anomalía se utiliza para identificar los valores atípicos. Un concepto importante en este método es el número de aislamiento. El número de aislamiento es el número de divisiones necesarias para aislar un punto de datos. Este número de divisiones se determina siguiendo estos pasos

- Se selecciona aleatoriamente un punto “a” a aislar.

### 2. Se selecciona un punto de datos aleatorio “b” que esté entre el valor mínimo y

máximo y diferente de “a”.

### 3. Si el valor de “b” es inferior al valor de “a”, el valor de “b” pasa a ser el nuevo

límite inferior.

### 4. Si el valor de “b” es mayor que el valor de “a”, el valor de “b” se convierte en el

nuevo límite superior.¶

### 5. Este procedimiento se repite siempre que haya puntos de datos distintos de “a”

entre el límite superior y el inferior. 19 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7.6. Isolation Forest en scikit learn class sklearn.ensemble.IsolationForest(*, n_estimators=100, max_samples='auto', contamination='auto', max_features=1.0, bootstrap=False, n_jobs=None, random_state=None, verbose=0, warm_start=False).¶ Más información Ejemplo.

20 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7.7. Local Outlier Factor (LOF) LOF realiza la tarea de estimar si los datos nuevos son diferentes de los datos "normales". Se utiliza en una variedad de aplicaciones, como detección de fraude, detección de errores y detección de valores atípicos.

Al igual que Isolation Forrest, estima el grado de aislamiento de un dato con respeto al conjunto. LocalOutlierFactor de scikit learn. class sklearn.neighbors.LocalOutlierFactor(n_neighbors=20, *, algorithm='auto', leaf_size=30, metric='minkowski', p=2, metric_params=None, contamination='auto', novelty=False, n_jobs=None) Más información Ejemplo

21 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.7.8. Actuación con los outliers. Al igual que con los datos faltantes, se puede optar por: 1. Suprimir la fila. 2. Sustituir por un valor (media, mediana, mínimo, máximo…).

#### 2.2.8. Correlación entre datos, multicolinealidad

2.2.8.1. Estimación de la correlación entre datos. 2 (o más) variables cuantitativas están correlacionadas (o tienen multicolinealidad) cuando los valores de una de ellas varía sistemáticamente con los valores de las otras. Para estimar la correlación entre datos se calcula el coeficiente de Pearson con el método corr() de la biblioteca Pandas.

Método DataFrame.corr: DataFrame.corr(method='pearson', min_periods=1, numeric_only=False) Muchas veces un dato dispone de muchas etiquetas lo que hace difícil la interpretación de los resultados. Por ello, se puede hacer una representación gráfica de los resultados con un diagrama de temperatura.

Ejemplo de correlación entre datos. 22 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Representación gráfica de los datos anteriores con un mapa de calor (heatmap). 23 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.8.2. Eliminación de los datos correlacionados. Si existe una fuerte relación entre etiquetas de los datos (p.e. superior a 0,80) se puede decidir retirar esa etiqueta (columna). Para ello se puede usar una mascara para extraer los valores por encima de la diagonal del dataset y luego ver el valor de correlación entre columnas.

Para la máscara se pueden usar los métodos .triu o .tril (triángulo superior o inferior). numpy.triu(m, k=0) m: array_like, shape (…, M, N) k: int, optional. k < 0: se aplica la máscara debajo y k > 0 encima de la diagonal. Ejemplo: Eliminación de las columnas con correlación > 0,8.

24 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.9. Manejando el tipado de los datos. 2.2.9.1. Cambiar el tipado de los datos Tanto en tareas de regresión como de clasificación, puede resultar necesario cambiar el tipo de datos de una columna.

Ejemplo 1, cambio por variables de solo 2 clases: Si solo tenemos 2 posibles valores (clases) para los valores de salida podemos usar el argumento replace de la biblioteca pandas. 25 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Ejemplo 2, cambio por variables de más de 2 clases: En este caso se deberá automatizar el proceso de etiquetado de los datos de salida con una función. 2.2.9.2. Pasar las variables categóricas a numéricas Motivo: Scikit learn solo trabaja con variables numéricas.

Dentro de las variables categóricas encontramos variables nominales y ordinales. Ejemplos de variables nominales: verde, rojo, azul / mujer, varón / Valencia, Madrid, Barcelona. Ejemplos de variables ordinales: descontento, neutro, satisfecho / bajo, medio, alto / CFGB, CFGM, CFGS.

La problemática de las variables categóricas nominales es que no se les puede asignar un valor ya que implicaría dar más importancia a unas que a otras. Para solucionar este problema, podemos crear variables ficticias (dummy variables) con el método get_dummies de pandas o usar la clase One Hot Encoding de scikit learn.

26 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA.

- Dummy variables.

Ejemplo dónde la primera columna contiene variables categóricas nominales Creación de dummy variables con pd.get_dummies. 27 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Al añadir nuevas columnas de variables también podemos crear una problemática de columnas correlacionadas.

### 2. One Hot Encoder

Otra manera de convertir variables categóricas a numéricas. Clases sklearn.preprocessing.LabelEncoder sklearn.compose.ColumnTransformer 28 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 29 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.10. Datos mal etiquetados. Existen diversos métodos de numpy (pandas) para cambiar el tipo de los datos. Método astype de la librería pandas: DataFrame.astype(dtype, copy=None, errors='raise') Más información Ejemplo, pasar de string a integer.

30 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. Método convert_dtypes de la librería pandas: DataFrame.convert_dtypes(infer_objects=True, convert_string=True, convert_integer=True, convert_boolean=True, convert_floating=True, dtype_backend='numpy_nullable') Este método es generalista y convierte los tipos al más probable.

Más información Ejemplo: 31 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.11. Reducción de la dimensionalidad de los datos. Más información. 2.2.11.1. Eliminación de las etiquetas por baja varianza. VarianceThreshold tiene un enfoque básico simple: Elimina todas las etiquetas cuya variación no supera un umbral definido por el analista de datos. Es decir, elimina todas las características de variación cero o cuya probabilidad de no variar es superior al umbral definido.

Clase: class sklearn.feature_selection.VarianceThreshold(threshold=0.0) Cálculo de threshold (varianza) = p * (1-p)

> **💡 Apunt Tècnic**
> Ejemplo: X = [[1, 0, 1], [1, 1, 0], [0, 0, 0], [1, 1, 1], [1, 1, 0], [1, 1, 1]] Condición: Eliminar las columnas con una probabilidad > a 80% de tener un valor 1. Probabilidad de la primera columna de tener un ‘1’: p = 5/6 = 0,83 → Eliminamos la columna ‘0’. → Cálculo de la varianza, Var[X] = 5/6 * (1 – 5/6) = 0,1388 2.2.11.2. Univariate Feature Selection.

Univariate Feature Selection (Selección de Características Univariable) evalúa la importancia de cada etiqueta de forma independiente. La idea es seleccionar las etiquestas que tienen una relación significativa con la variable objetivo sin tener en cuenta la relación de las etiquetas entre sí.

4 Clases Disponibles. class sklearn.feature_selection.SelectKBest(score_func=<function f_classif>, *, k=10) class sklearn.feature_selection.SelectPercentile(score_func=<function f_classif>, *, percentile=10) class sklearn.feature_selection.SelectFwe(score_func=<function f_classif>, *, alpha=0.05) class sklearn.feature_selection.GenericUnivariateSelect(score_func=<function f_classif>, *, mode='percentile', param=1e-05) 32 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.2.11.3. Recursive feature elimination, La eliminación de etiquetas con RFE se realiza iterativamente mediante la eliminación de las características menos importantes hasta que se alcanza el número deseado de características o se logra el rendimiento óptimo del modelo.

Clase. Class sklearn.feature_selection.RFE(estimator, *, n_features_to_select=None, step=1, verbose=0, importance_getter='auto') 2.2.11.4. SelectFormModel. SelectFromModel permite realizar una selección de etiquetas basada en modelos. Esta técnica utiliza un modelo de aprendizaje automático para estimar la importancia de cada etiqueta en el conjunto de datos. Luego, se seleccionan las características más importantes según un umbral específico.

Clase. class sklearn.feature_selection.SelectFromModel(estimator, *, threshold=None, prefit=False, norm_order=1, max_features=None, importance_getter='auto')

2.2.11.5. Sequential Feature Selection (SFS) SFS agrega (selección hacia adelante) o elimina (selección hacia atrás) funciones para formar un subconjunto de funciones de manera voraz. En cada etapa, este estimador elige la mejor característica para agregar o eliminar en función de la puntuación de validación cruzada de un estimador. En el caso de aprendizaje no supervisado, este selector de funciones secuenciales analiza solo las funciones (X), no las salidas deseadas (y).

Clase. Class sklearn.feature_selection.SequentialFeatureSelector(estimator, *, n_features_to_select='auto', tol=None, direction='forward', scoring=None,cv=5, n_jobs=None) 33 / 34

Curso de especialización en Inteligencia Artificial y Big Data Programación de IA. 2.3. Separación de los datos para entrenamiento y test. Más información Permite separar de manera aleatoria nuestro dataset en 2 para el entrenamiento y el testeo del modelo. Biblioteca: from sklearn.model_selection import train_test_split Instanciar datasplit

train_test_split(dataframe, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)

- Dataframe: listas, objetos numpy, scipy-sparse o pandas.
- test_size: float o int, predeterminado = None

Si es flotante, entre 0,0 y 1,0 Si es int, número absoluto de muestras de prueba.

- train_size: float o int, predeterminado = None

Si es flotante, entre 0,0 y 1,0. Si es int, número absoluto de muestras de entrenamiento.

- random_state: int, predeterminado = None. Controla la mezcla aplicada a los

datos antes de aplicar la división. Pasar un valor para obtener resultados reproducibles.

- Shuffle: bool, predeterminado = True (evitar estratificaciones).
- Stratify: Si None, los datos se dividen de forma estratificada.

34 / 34

---

# 3.2 5 Biblioteca plotly

### 📄 IA BD PIA UT 3.5 Biblioteca Plotly.pdf

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT 3.5 Programación de ML en Python. Biblioteca Plotly Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Seaborn..................................................................................................................................................3

1.1. Descripción.....................................................................................................................................3 1.2. Enlaces de interés:..........................................................................................................................3 1.3. Instalación.......................................................................................................................................4 1.4. Motivación......................................................................................................................................4 1.5. Tipos de representaciones gráficas.................................................................................................4 1.6. Librerías..........................................................................................................................................4 1.7. Cargar datos....................................................................................................................................5 1.8. Representaciones un gráficas.........................................................................................................5 1.8.1. Gráfico de dispersión..............................................................................................................5 1.8.2. Cajas.......................................................................................................................................6 1.8.3. Tartas.......................................................................................................................................6 1.8.4. Visualización de ML...............................................................................................................7 2 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 1. SEABORN

#### 1.1. Descripción

Plotly es una biblioteca de visualización que produce figuras de alta calidad.

#### 1.2. Enlaces de interés

https://plot.ly/python/

https://github.com/plotly/plotly.py/ https://python-charts.com/es/plotly/ 3 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.3. Instalación

Antes de instalar la librería comprobar si no está ya instalada. Para instalar Seaborn en anaconda conda install -c conda-forge plotly conda install -c "conda-forge/label/cf201901" plotly conda install -c "conda-forge/label/cf202003" plotly conda install -c "conda-forge/label/gcc7" plotly

#### 1.4. Motivación

Gráficas interactivas. 1.5. Tipos de representaciones gráficas.

- Diagramas de barras
- Histograma
- Diagramas de sectores
- Diagramas de caja y bigotes
- Diagramas de violín
- Diagramas de dispersión o puntos
- Diagramas de lineas
- Diagramas de áreas
- Diagramas de contorno
- Mapas de color
- Imágenes

1.6. Librerías. Importar la biblioteca plotpy: import plotly.express as px Nota: Para que la librería seaborn se ejecute en jupyter es necesario escribir en la hoja: %matplotlib inline 4 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7. Cargar datos. Plotly ofrece un repositorio de datasets para realizar gráficas: 1.8. Representaciones gráficas. 1.8.1. Gráfico de dispersión. Método .scatter. 5 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.2. Cajas. Método .box 1.8.3. Tartas. Método .pie

6 / 7

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.4. Visualización de ML. 7 / 7

### 📄 IA BD PIA UT 3.5 Biblioteca Plotly Gráficas.ipynb

## Librerias

```python
import seaborn as sns
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import plotly.express as px
from pathlib import Path
import warnings
import plotly.graph_objects as go
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

data_path = Path("C:/Users/Javier/Jupyter/Seaborn")
warnings.filterwarnings("ignore")

%matplotlib inline
```

## Gráfico de dispersión.

```python
df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", color="species",
                 size='petal_length', hover_data=['petal_width'])
fig.show()
```

## Cajas.

```python
## Cajas.
df = px.data.tips()
fig = px.box(df, y="total_bill", title="Diagrama de caja")
fig.show()
```

## Tartas.

```python
df = px.data.gapminder().query("year == 2007").query("continent == 'Europe'")
df.loc[df['pop'] < 2.e6, 'country'] = 'Other countries' # Represent only large countries
fig = px.pie(df, values='pop', names='country', title='Population of European continent')
fig.show()
```

## Visualizacion de resultados de ML.

```python
import plotly.graph_objects as go
from sklearn.datasets import make_moons
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

# Load and split data
X, y = make_moons(noise=0.3, random_state=0)
X_train, X_test, y_train, y_test = train_test_split(
    X, y.astype(str), test_size=0.25, random_state=0)

trace_specs = [
    [X_train, y_train, '0', 'Train', 'square'],
    [X_train, y_train, '1', 'Train', 'circle'],
    [X_test, y_test, '0', 'Test', 'square-dot'],
    [X_test, y_test, '1', 'Test', 'circle-dot']
]

fig = go.Figure(data=[
    go.Scatter(
        x=X[y==label, 0], y=X[y==label, 1],
        name=f'{split} Split, Label {label}',
        mode='markers', marker_symbol=marker
    )
    for X, y, label, split, marker in trace_specs
])
fig.update_traces(
    marker_size=12, marker_line_width=1.5,
    marker_color="lightyellow"
)
fig.show()
```

---

# 3.3 4 Biblioteca seaborn

### 📄 IA BD PIA UT 3.4 Biblioteca Seaborn.pdf

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT 3.3 Programación de ML en Python. Biblioteca Seaborn Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Seaborn..................................................................................................................................................2

1.1. Descripción.....................................................................................................................................2 1.2. Enlaces de interés:..........................................................................................................................2 1.3. Instalación.......................................................................................................................................2 1.4. Motivación......................................................................................................................................3 1.5. Tipos de representaciones gráficas.................................................................................................4 1.6. Librerías..........................................................................................................................................4 1.7. Cargar datos....................................................................................................................................4 1.8. Representaciones un gráficas.........................................................................................................5 1.8.1. Histogramas............................................................................................................................5 1.8.2. Lineas......................................................................................................................................5 1.8.3. Diagrama de dispersión..........................................................................................................6 1.8.4. Representaciones múltiples 1.................................................................................................7 1.8.5. Representaciones múltiples 2 (discriminando por una variable categórica)...........................8 1.8.6. Cajas.......................................................................................................................................9 1.8.7. Visualizar regresiones.............................................................................................................9

### 1. SEABORN

#### 1.1. Descripción

Seaborn es una biblioteca de visualización basada en matplotlib que produce figuras de alta calidad con menos lineas de código.

#### 1.2. Enlaces de interés

https://seaborn.pydata.org https://anaconda.org/anaconda/seaborn https://seaborn.pydata.org/tutorial.html https://python-charts.com/es/seaborn

#### 1.3. Instalación

Antes de instalar la librería comprobar si no está ya instalada. Para instalar Seaborn en anaconda 2 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. conda install seaborn conda install seaborn -c conda-forge conda install -c anaconda seaborn

#### 1.4. Motivación

Más por menos... 3 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5. Tipos de representaciones gráficas.

- Diagramas de barras
- Histograma
- Diagramas de sectores
- Diagramas de caja y bigotes
- Diagramas de violín
- Diagramas de dispersión o puntos
- Diagramas de lineas
- Diagramas de áreas
- Diagramas de contorno
- Mapas de color
- Imágenes

1.6. Librerías. Importar la biblioteca matplotlib: import seaborn as sns Nota: Para que la librería seaborn se ejecute en jupyter es necesario escribir en la hoja: %matplotlib inline 1.7. Cargar datos. Seaborn ofrece un repositorio de datasets para realizar gráficas

4 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8. Representaciones un gráficas. 1.8.1. Histogramas. Método .histplot. 1.8.2. Lineas. Método .lineplot. 5 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.3. Diagrama de dispersión. Método .joinplot: 6 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.4. Representaciones múltiples 1. Método .pairplot. 7 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.5. Representaciones múltiples 2 (discriminando por una variable categórica). Pasar el valor de “hue” al método pairplot. 8 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.6. Cajas. Método .boxplot. 1.8.7. Visualizar regresiones. 9 / 9

### 📄 IA BD PIA UT 3.4 Biblioteca Seaborn Gráficas.ipynb.ipynb

## Librerias

```python
import seaborn as sns
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path
import warnings

data_path = Path("C:/Users/Javier/Jupyter/Seaborn")
warnings.filterwarnings("ignore")

%matplotlib inline
```

## Cargar datos con sns

```python
# obtener listado de ejemplos de datasets para praticar con seaborn.
sns.get_dataset_names()
tips = sns.load_dataset("tips")
tips.head(10)
```

## Histogramas con sns

```python
# cargar estilos.
sns.set_style('darkgrid') # style : dict, or one of {darkgrid, whitegrid, dark, white, ticks}
x = tips
# Gráfico de barras.
sns.histplot(x = tips["total_bill"])
```

```python
# Gráfico de barras 2: Añadir linea de tendencia y variar escala de x.
sns.histplot(x = tips["total_bill"], kde= True ,bins=30);
```

## Gráfico de lineas.

```python
sns.lineplot(x = "tip", y = "total_bill", data = tips);
```

```python
#Insertar anotaciones
fig = sns.lineplot(x = "tip", y = "total_bill", data = tips)
fig.text(8,40, "punto singular",
         fontsize= 12,
         fontstyle="italic",
         fontweight ="heavy",
         horizontalalignment='left',
         verticalalignment='top',
         rotation= -30);
```

## Diagrama de dispersión

```python
sns.jointplot(x ='total_bill', y ='tip', data = tips, kind = 'scatter');
```

### Añadir linea de regresión kind = reg

```python
sns.jointplot(x ='total_bill', y ='tip', data = tips, kind = 'reg');
```

```python
# Hue = discriminar por una variable categorica.
sns.jointplot(x ='total_bill', y ='tip', data = tips, hue='smoker');
```

## Mostrar todas las relaciones entre variables numéricas.

```python
sns.pairplot(tips);
```

## Mostrar todas las relaciones entre variables numéricas discriminando por una variable categórica.

```python
sns.pairplot(tips,
             hue='sex', # diferenciación por una variable
             palette = 'coolwarm' # temas de los colores
            );
```

## Otros gráficos.

### Cajas.

```python
# Por ejemplo saber las estadisticas de hombre mujeres y factura.
# Estimator viene por defecto en media (mean)
sns.barplot(x='sex', y='total_bill', data=tips, estimator = "mean");
```

```python
# Veces que los hombres han pagado la cuenta.
sns.countplot(x='sex', data=tips);
```

```python
# Facturación en función del día.
sns.boxplot(x='day', y='total_bill', data=tips);
```

```python
# Facturación en función del día y si es fumador o no.
sns.boxplot(x='day', y='total_bill', data=tips, hue="smoker");
```

```python
# Facturación en función del día y de la hora.
sns.boxplot(x='day', y='total_bill', data=tips, hue="time");
```

### Violines.

```python
# En funcion del dia.
sns.violinplot(x='day', y='total_bill', data=tips);
```

```python
# En funcion del dia y de la hora.
sns.violinplot(x='day', y='total_bill', data=tips, hue='time', split=False)
```

```python
# En función del dia y de la hora.
# Misma representacion pero separando mañana y tarde.
sns.violinplot(x='day', y='total_bill', data=tips, hue='time', split=True)
```

### Enjambre

```python
# Podemos ver todos los puntos de cada fila del dataset
# recuerda a la representacion de violin.
sns.swarmplot(x = 'day', y = 'total_bill', data=tips, hue="sex")
```

```python
# Nos da la posibilidad de ver todos los puntos que hacen referencia a cada fila del dataset
# recuerda a la representacion de violin.
# con la representacion de violín
sns.swarmplot(x = 'day', y = 'total_bill', data=tips, hue="sex")
sns.violinplot(x='day', y='total_bill', data=tips);
```

```python
sns.swarmplot(x = 'day', y = 'total_bill', data=tips, color = 'black')
sns.violinplot(x='day', y='total_bill', data=tips)
```

### Visualizar regresiones

```python
#similar a joinplot pero permite pasar más argumentos.
sns.set_style('darkgrid') # darkgrid, whitegrid, dark, white, ticks
sns.lmplot(x = 'total_bill', y='tip', data=tips, hue="sex");
```

```python
#similar a joinplot pero permite pasar mas parametros.
sns.set_style('darkgrid') # darkgrid, whitegrid, dark, white, ticks
sns.lmplot(x = 'total_bill', y='tip', data=tips, col="sex", row="time");
```

```python
#similar a joinplot pero permite pasar mas parametros.
sns.set_style('darkgrid') # darkgrid, whitegrid, dark, white, ticks
sns.lmplot(x = 'total_bill', y='tip', data=tips, col="sex", row="time", aspect=.50, height=4);
```

```python
#otra manera de representar graficos mutiples
sns.set_style('darkgrid') # darkgrid, whitegrid, dark, white, ticks

fig = sns.FacetGrid(tips, col="sex", row="time", hue="day") 
fig.map(plt.scatter, "total_bill", "tip").add_legend()
plt.show()
```

---

# 3.4 3 Biblioteca matplotlib

### 📄 IA BD PIA UT 3.3 Biblioteca Matplotlib.pdf

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT 3.3 Programación de ML en Python. Biblioteca matplotlib Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Matplotlib..............................................................................................................................................4

1.1. Descripción.....................................................................................................................................4 1.2. Enlaces de interés:..........................................................................................................................4 1.3. Instalación.......................................................................................................................................4 1.4. Motivación......................................................................................................................................4 1.5. Tipos de representaciones gráficas.................................................................................................5 1.6. Librerías..........................................................................................................................................6 1.7. Gráficos de lineas...........................................................................................................................6 1.7.1. Representar un gráfico de lineas.............................................................................................6 1.7.2. Estilo de lineas........................................................................................................................7 1.7.3. Más de un gráfico en un mismo marco...................................................................................9 1.7.4. Insertar, títulos, ejes, etc.......................................................................................................10 1.7.5. Estilo del marco....................................................................................................................11 1.7.6. Estilo de leyendas, títulos, ejes, etc......................................................................................13 1.7.7. Gráfica con doble eje (twinx)...............................................................................................15 1.7.8. Insertar leyendas...................................................................................................................17 1.7.8.1. Insertar leyendas definiendo fuente y posición dentro del cuadro................................17 1.7.8.2. Insertar leyendas en cualquier posición........................................................................18 1.7.8.3. Personalizar leyendas....................................................................................................19 1.8. Diagramas de barras.....................................................................................................................20 1.8.1. Configurando estilos.............................................................................................................21 1.9. Histograma...................................................................................................................................22 1.10. Scatter.........................................................................................................................................23 1.10.1. Variación del color de los puntos........................................................................................24 1.10.2. Añadir leyendas, etc............................................................................................................25 1.10.3. Variación del tamaño de los puntos....................................................................................26 1.11. Tartas...........................................................................................................................................27 1.11.1. Leyendas.............................................................................................................................28 1.11.2. Descomponer la tarta..........................................................................................................28 1.12. Mapa de calor.............................................................................................................................29 1.13. Representación en 3D.................................................................................................................30 1.13.1. Configurando una representación en 3D............................................................................31 1.14. Diagramas de caja.......................................................................................................................32 1.15. Violines.......................................................................................................................................34 1.16. Imágenes.....................................................................................................................................35 1.16.1. Recortar imágenes..............................................................................................................36 1.16.2. Cambio de color..................................................................................................................37 1.17. Varios marcos.............................................................................................................................38 1.17.1. Identificación de los marcos...............................................................................................38 2 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 1. MATPLOTLIB

#### 1.1. Descripción

Matplotlib (biblioteca) produce figuras con calidad de publicación en una variedad de formatos impresos y entornos interactivos en todas las plataformas.

#### 1.2. Enlaces de interés

https://matplotlib.org/ https://anaconda.org/anaconda/matplotlib https://matplotlib.org/stable/users/index https://python-charts.com/es/ https://claudiovz.github.io/scipy-lecture-notes-ES/intro/matplotlib/matplotlib.html

#### 1.3. Instalación

Para instalar SciPy en anaconda: conda install -c anaconda matplotlib

#### 1.4. Motivación

Una imagen vale más que 1000 palabras... 3 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5. Tipos de representaciones gráficas.

- Diagramas de barras
- Histograma
- Diagramas de sectores
- Diagramas de caja y bigotes
- Diagramas de violín
- Diagramas de dispersión o puntos
- Diagramas de lineas
- Diagramas de áreas
- Diagramas de contorno
- Mapas de color
- Imágenes

4 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.6. Librerías. Importar la biblioteca matplotlib: import matplotlib.pyplot as plt Nota: Para que la librería matplotlib se ejecute en jupyter es necesario escribir en la hoja: %matplotlib inline 1.7. Gráficos de lineas.

1.7.1. Representar un gráfico de lineas. Para crear nuestro primer gráfico debemos pasar al método .plot una lista con los valores de x, y. 5 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.2. Estilo de lineas. Para cambiar la representación del gráfico pasar argumentos adicionales a .plot(): 6 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Ejemplo donde se pasa el marker el color y el estilo de linea de unión entre los puntos. 7 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.3. Más de un gráfico en un mismo marco. Simplemente pasar los datos a .plot en tantas lineas como graficas tenemos que representar. 8 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.4. Insertar, títulos, ejes, etc. Para añadir el titulo y la definición de los ejes usar title(), xlabel() y ylabel(). Para insertar una leyenda usar .legend (previamente se debe haber definido los labels.

Para poder ver la gráfica por completo deberemos usar .figure y pasarle el tamaño deseado. En jupyter vienen por defecto un tamaño de 6”x4”, con una resolución de 640x480 y un dpi=75. En el ejemplo tenemos un figsize de 5”x3”. 9 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.5. Estilo del marco. Se puede definir un estilo de fondo pasando el valor adecuado a .use() 10 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Nota: Para saber los estilos disponibles usar plt.style.available 11 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.6. Estilo de leyendas, títulos, ejes, etc. Para poder mejorar el aspecto de nuestro gráfico tendremos que usar el método. subplots que, entre otros, permite crear un objeto Figure y un objeto Axes.

El método .subplots() se usa principalmente para definir cuantos marcos y figuras queremos en nuestra representación. En este caso le pasaremos (1,1) ya que solo queremos un marco y una figura (se puede obviar). 12 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Resultado de la configuración anterior. 13 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.7. Gráfica con doble eje (twinx). Puede darse el caso de representar 2 gráficas con unos valores muy diferentes. El resultado será una mala visualización de una de ellas.

14 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Para evitar ese inconveniente podemos usar el método .twinx() 15 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.8. Insertar leyendas. Cuanto más gráficas en una representación, más difícil resultará entender los datos. Aparte del nombre de los ejes x, y también resultará necesario aportar información (en forma de leyendas) sobre las gráficas.

1.7.8.1. Insertar leyendas definiendo fuente y posición dentro del cuadro. 16 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.8.2. Insertar leyendas en cualquier posición. Para poner leyendas en cualquier posición, se puede usar bbox_to_anchor(a,b,c,d). 17 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7.8.3. Personalizar leyendas. Para crear leyendas a medida se puede usar la extensión patches de matplotlib. Nota: Para definir la posición se puede usar loc con los valores “best”, “upper left”, “lower right”, …” o bbox_to_anchor + tupla de 4 elementos (a, b, c, d).

18 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8. Diagramas de barras. Los diagramas de barras se usan para representar la magnitud de datos categóricos. Ejemplo de los datos a representar. Representación en diagrama de barras instanciando .bar(), definiendo el indice (index), la altura (height) y el ancho de la barra 19 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.8.1. Configurando estilos. En esta figura vemos que el eje de x solo representa los valores pares de x. Para tener una representación de todos los valores usar el método .set_xticks().

También podemos usar .set_xticklabels() para rotar la información representada. También vemos que hay una gran disparidad de magnitudes entre valores máximos y mínimos lo que hace que apenas se vean representados los valores más bajos. Para ello podemos usar una representación logarítmica del eje y.

20 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.9. Histograma

Los histogramas se usan para representar las magnitudes en datos continuos para el eje x. En este ejemplo, también se usa una escala logarítmica para el eje y. 21 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.10. Scatter

Estos diagramas se utilizan para analizar la relación o correlación entre dos variables o entre dos conjuntos de datos. 22 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.10.1. Variación del color de los puntos. Siempre con la finalidad de mejor la legibilidad de los datos, se pueden establecer reglas de colores sobre los puntos. 23 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.10.2. Añadir leyendas, etc. 24 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.10.3. Variación del tamaño de los puntos. Para variar el tamaño de los puntos podemos pasar una regla al parámetro s. Por ejemplo: s=(precio)**.6/100 25 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.11. Tartas

Una gráfica de tarta es una gráfica circular dividida en sectores, que ilustran magnitudes o frecuencias relativas. Ejemplo: 26 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.11.1. Leyendas

1.11.2. Descomponer la tarta. Como se puede ver los datos pequeños no resaltan o directamente se sobre escriben los unos a los otros. Para evitar ese problema podemos descomponer la tarta jugando con los valores del parámetro explode. 27 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.12. Mapa de calor. Permite visualizar en una cuadricula datos asignándoles un color en función de su magnitud. Para el ejemplo, usaremos el método .corr() de la biblioteca Pandas que permite establecer la correlación entre variables.

28 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.13. Representación en 3D. 29 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.13.1. Configurando una representación en 3D. 30 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.14. Diagramas de caja. Muy utilizado en ciencia de datos, el diagrama de caja tiene también como gran ventaja hacer resaltar los outliers dentro de una distribución de datos.

Para el ojo entrenado permite visualizar rápidamente la distribución de los valores. Con biblioteca Matplotlib. Ejemplo. Tenemos la siguiente distribución de las edades de un grupo de personas. 31 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Si añadimos personas con edades muy diferentes del grupo inicial (p.e. 78, 85) obtendremos la siguiente gráfica. Con biblioteca Seaborn 32 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Con biblioteca Plotly 1.15. Violines. Un diagrama de violín se utiliza para visualizar la distribución de los datos y su densidad de probabilidad. 33 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.16. Imágenes. Las forma más habitual de mostrar imágenes es con el método .imshow. 34 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.16.1. Recortar imágenes

Para recortar la imagen hay que pasar una lista con los pixeles que deseamos recortar. 35 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.16.2. Cambio de color. 36 / 37

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.17. Varios marcos. En muchas circunstancias, será necesario representar varias graficas con distintos datos. Para estos casos, usaremos de nuevo subplots y le pasaremos una matriz de graficas a representar (nrows y ncolumns).

1.17.1. Identificación de los marcos. 37 / 37

### 📄 x2 y x3 CSV.csv

valores de X,valores teoricos,ruido,valores de salida,valores teoricos2 -2,15,"0,6","15,6",700 "-1,98","14,7612","-0,8","13,9612","678,67907632" "-1,96","14,5248","-0,9","13,6248","657,90944512" "-1,94","14,2908","0,6","14,8908","637,68089392" "-1,92","14,0592","0,7","14,7592","617,98331392" "-1,9","13,83","0,4","14,23","598,8067" "-1,88","13,6032","0,3","13,9032","580,14115072" "-1,86","13,3788","0,8","14,1788","561,97686832" "-1,84","13,1568","0,8","13,9568","544,30415872" "-1,82","12,9372","-0,9","12,0372","527,11343152" "-1,8","12,72","-0,8","11,92","510,3952" "-1,78","12,5052","-0,8","11,7052","494,14008112" "-1,76","12,2928","-0,4","11,8928","478,33879552" "-1,74","12,0828","0,1","12,1828","462,98216752" "-1,72","11,8752","-0,5","11,3752","448,06112512" "-1,7","11,67","0,8","12,47","433,5667" "-1,68","11,4672",0,"11,4672","419,49002752" "-1,66","11,2668","-0,7","10,5668","405,82234672" "-1,64","11,0688","-0,9","10,1688","392,55500032" "-1,62","10,8732","0,1","10,9732","379,67943472" "-1,6","10,68","0,2","10,88","367,1872" "-1,58","10,4892",0,"10,4892","355,06994992" "-1,56","10,3008","0,3","10,6008","343,31944192" "-1,54","10,1148","-0,6","9,5148","331,92753712" "-1,52","9,9312","0,8","10,7312","320,88620032" "-1,5","9,75","0,7","10,45","310,1875" "-1,48","9,5712","-0,3","9,2712","299,82360832" "-1,46","9,3948","-0,1","9,2948","289,78680112" "-1,44","9,2208","-0,1","9,1208","280,06945792" "-1,42","9,0492","0,2","9,2492","270,66406192" "-1,4","8,88","-0,6","8,28","261,5632" "-1,38","8,7132",0,"8,7132","252,75956272" "-1,36","8,5488","0,9","9,4488","244,24594432" "-1,34","8,38679999999999","-0,5","7,88679999999999","236,01524272" "-1,32","8,2272","0,2","8,4272","228,06045952" "-1,3","8,07","-0,6","7,47","220,3747" "-1,28","7,9152",0,"7,9152","212,95117312" "-1,26","7,7628","-0,3","7,4628","205,78319152" "-1,24","7,6128","-0,1","7,5128","198,86417152" "-1,22","7,4652","0,4","7,8652","192,18763312" "-1,2","7,32","0,2","7,52","185,7472" "-1,18","7,1772","-0,1","7,0772","179,53659952" "-1,16","7,0368","0,6","7,6368","173,54966272" "-1,14","6,89879999999999","0,5","7,39879999999999","167,78032432" "-1,12","6,76319999999999","-0,6","6,16319999999999","162,22262272" "-1,1","6,63","0,2","6,83","156,8707" "-1,08","6,4992","-0,9","5,59919999999999","151,71880192" "-1,06","6,3708","-0,6","5,7708","146,76127792" "-1,04","6,24479999999999","-0,9","5,34479999999999","141,99258112" "-1,02","6,1212","-0,6","5,5212","137,40726832" "-0,999999999999999",6,"0,7","6,7",133 "-0,979999999999999","5,88119999999999","-0,3","5,5812","128,76554032" "-0,959999999999999","5,7648","-0,8","4,9648","124,69875712" "-0,939999999999999","5,6508","0,2","5,8508","120,79462192" "-0,919999999999999","5,5392","-0,9","4,63919999999999","117,04820992" "-0,899999999999999","5,42999999999999","-0,9","4,52999999999999","113,4547" "-0,879999999999999","5,3232","0,2","5,5232","110,00937472" "-0,859999999999999","5,21879999999999","0,8","6,01879999999999","106,70762032" "-0,839999999999999","5,11679999999999","-0,2","4,91679999999999","103,54492672" "-0,819999999999999","5,0172","-0,2","4,8172","100,51688752" "-0,799999999999999","4,92","-0,3","4,62","97,6191999999998" "-0,779999999999999","4,8252","-0,1","4,7252","94,8476651199999" "-0,759999999999999","4,7328","-0,5","4,2328","92,1981875199999" "-0,739999999999999","4,6428","0,9","5,5428","89,6667755199999" "-0,719999999999999","4,5552","-0,9","3,6552","87,2495411199999" "-0,699999999999999","4,47","-0,5","3,97","84,9426999999999" "-0,679999999999999","4,3872","0,9","5,2872","82,7425715199999" "-0,659999999999999","4,3068","-0,7","3,6068","80,6455787199999" "-0,639999999999999","4,2288","0,1","4,3288","78,6482483199999" "-0,619999999999999","4,1532",0,"4,1532","76,7472107199999" "-0,599999999999999","4,08","0,9","4,98","74,9391999999999" "-0,579999999999999","4,0092","-0,2","3,8092","73,2210539199999" "-0,559999999999999","3,9408","-0,1","3,8408","71,5897139199999" "-0,539999999999999","3,8748",0,"3,8748","70,0422251199999" "-0,519999999999999","3,8112","-0,5","3,3112","68,5757363199999" "-0,499999999999999","3,75","0,6","4,35","67,1874999999999" "-0,479999999999999","3,6912","0,3","3,9912","65,8748723199999" "-0,459999999999999","3,6348","-0,6","3,0348","64,6353131199999" "-0,439999999999999","3,5808","-0,4","3,1808","63,4663859199999" "-0,419999999999999","3,5292","0,4","3,9292","62,3657579199999" "-0,399999999999999","3,48","-0,8","2,68","61,3311999999999" "-0,379999999999999","3,4332","-0,8","2,6332","60,3605867199999" "-0,359999999999999","3,3888","0,7","4,0888","59,4518963199999" "-0,339999999999999","3,3468","0,7","4,0468","58,6032107199999" "-0,319999999999999","3,3072","-0,6","2,7072","57,8127155199999" "-0,299999999999999","3,27","0,3","3,57","57,0787" "-0,279999999999999","3,2352","0,4","3,6352","56,39955712" "-0,259999999999998","3,2028","-0,3","2,9028","55,77378352" "-0,239999999999998","3,1728","0,9","4,0728","55,19997952" "-0,219999999999998","3,1452","0,5","3,6452","54,67684912" "-0,199999999999998","3,12","0,2","3,32","54,2032" "-0,179999999999999","3,0972","0,6","3,6972","53,77794352" "-0,159999999999999","3,0768","-0,5","2,5768","53,40009472" "-0,139999999999999","3,0588","0,3","3,3588","53,06877232" "-0,119999999999999","3,0432","-0,6","2,4432","52,78319872" "-0,0999999999999985","3,03","0,9","3,93","52,5427" "-0,0799999999999985","3,0192","-0,9","2,1192","52,34670592" "-0,0599999999999985","3,0108","0,9","3,9108","52,19474992" "-0,0399999999999985","3,0048",0,"3,0048","52,08646912" "-0,0199999999999985","3,0012","0,5","3,5012","52,02160432" "1,50573997714787E-15",3,"0,8","3,8",52 "0,0200000000000015","3,0012","-0,4","2,6012","52,02160432" "0,0400000000000015","3,0048","0,2","3,2048","52,08646912" "0,0600000000000015","3,0108","-0,9","2,1108","52,19474992" "0,0800000000000015","3,0192","0,5","3,5192","52,34670592" "0,100000000000002","3,03","-0,7","2,33","52,5427" "0,120000000000002","3,0432","0,8","3,8432","52,78319872" "0,140000000000002","3,0588","-0,8","2,2588","53,06877232" "0,160000000000002","3,0768","0,4","3,4768","53,40009472" "0,180000000000002","3,0972","-0,1","2,9972","53,77794352" "0,200000000000001","3,12",0,"3,12","54,2032" "0,220000000000001","3,1452",0,"3,1452","54,67684912" "0,240000000000001","3,1728","0,4","3,5728","55,19997952" "0,260000000000001","3,2028","-0,6","2,6028","55,77378352" "0,280000000000001","3,2352","0,5","3,7352","56,3995571200001" "0,300000000000002","3,27",0,"3,27","57,0787000000001" "0,320000000000002","3,3072","0,8","4,1072","57,8127155200001" "0,340000000000002","3,3468","0,2","3,5468","58,6032107200001" "0,360000000000002","3,3888","0,2","3,5888","59,4518963200001" "0,380000000000002","3,4332","0,6","4,0332","60,3605867200001" "0,400000000000002","3,48","0,5","3,98","61,3312000000001" "0,420000000000002","3,5292","-0,8","2,7292","62,3657579200001" "0,440000000000002","3,5808","0,8","4,3808","63,4663859200001" "0,460000000000002","3,6348","0,2","3,83480000000001","64,6353131200001" "0,480000000000002","3,6912","0,6","4,2912","65,8748723200001" "0,500000000000002","3,75000000000001","-0,7","3,05000000000001","67,1875000000001" "0,520000000000002","3,81120000000001","-0,1","3,71120000000001","68,5757363200001" "0,540000000000002","3,87480000000001","-0,1","3,77480000000001","70,0422251200001" "0,560000000000002","3,94080000000001","-0,5","3,44080000000001","71,5897139200001" "0,580000000000002","4,00920000000001","-0,1","3,90920000000001","73,2210539200001" "0,600000000000002","4,08000000000001","0,6","4,68000000000001","74,9392000000002" "0,620000000000002","4,15320000000001","-0,1","4,05320000000001","76,7472107200002" "0,640000000000002","4,22880000000001","0,8","5,02880000000001","78,6482483200002" "0,660000000000002","4,30680000000001","-0,3","4,00680000000001","80,6455787200002" "0,680000000000002","4,38720000000001","-0,4","3,98720000000001","82,7425715200002" "0,700000000000002","4,47000000000001","0,2","4,67000000000001","84,9427000000002" "0,720000000000002","4,55520000000001",0,"4,55520000000001","87,2495411200002" "0,740000000000002","4,64280000000001","0,4","5,04280000000001","89,6667755200002" "0,760000000000002","4,73280000000001","-0,5","4,23280000000001","92,1981875200002" "0,780000000000002","4,82520000000001","0,5","5,32520000000001","94,8476651200002" "0,800000000000002","4,92000000000001","0,6","5,52000000000001","97,6192000000003" "0,820000000000002","5,01720000000001","-0,6","4,41720000000001","100,51688752" "0,840000000000002","5,11680000000001","-0,1","5,01680000000001","103,54492672" "0,860000000000002","5,21880000000001",0,"5,21880000000001","106,70762032" "0,880000000000002","5,32320000000001","0,5","5,82320000000001","110,00937472" "0,900000000000002","5,43000000000001","-0,1","5,33000000000001","113,4547" "0,920000000000002","5,53920000000001","0,8","6,33920000000001","117,04820992" "0,940000000000002","5,65080000000001","-0,5","5,15080000000001","120,79462192" "0,960000000000002","5,76480000000001","-0,1","5,66480000000001","124,69875712" "0,980000000000002","5,88120000000001","-0,2","5,68120000000001","128,76554032" 1,"6,00000000000001","0,3","6,30000000000001",133 "1,02","6,12120000000001","0,2","6,32120000000001","137,40726832" "1,04","6,24480000000001","0,6","6,84480000000001","141,992581120001" "1,06","6,37080000000001",0,"6,37080000000001","146,761277920001" "1,08","6,49920000000001","-0,8","5,69920000000001","151,718801920001" "1,1","6,63000000000001","-0,3","6,33000000000001","156,870700000001" "1,12","6,76320000000001","-0,4","6,36320000000001","162,222622720001" "1,14","6,89880000000001","-0,7","6,19880000000001","167,780324320001" "1,16","7,03680000000002","0,7","7,73680000000002","173,549662720001" "1,18","7,17720000000002","-0,5","6,67720000000002","179,536599520001" "1,2","7,32000000000002","0,7","8,02000000000002","185,747200000001" "1,22","7,46520000000002","-0,9","6,56520000000002","192,187633120001" "1,24","7,61280000000002","0,3","7,91280000000002","198,864171520001" "1,26","7,76280000000002","0,5","8,26280000000002","205,783191520001" "1,28","7,91520000000002","0,3","8,21520000000002","212,951173120001" "1,3","8,07000000000002","-0,6","7,47000000000002","220,374700000001" "1,32","8,22720000000002",0,"8,22720000000002","228,060459520001" "1,34","8,38680000000002","-0,6","7,78680000000002","236,015242720001" "1,36","8,54880000000002","-0,2","8,34880000000002","244,245944320001" "1,38","8,71320000000002","-0,6","8,11320000000002","252,759562720001" "1,4","8,88000000000002",0,"8,88000000000002","261,563200000001" "1,42","9,04920000000002","-0,5","8,54920000000002","270,664061920001" "1,44","9,22080000000002","0,5","9,72080000000002","280,069457920001" "1,46","9,39480000000002","-0,7","8,69480000000002","289,786801120001" "1,48","9,57120000000002","-0,9","8,67120000000002","299,823608320001" "1,5","9,75000000000002","-0,8","8,95000000000002","310,187500000001" "1,52","9,93120000000002","0,6","10,5312","320,886200320001" "1,54","10,1148","-0,2","9,91480000000002","331,927537120001" "1,56","10,3008","-0,5","9,80080000000002","343,319441920001" "1,58","10,4892","0,5","10,9892","355,069949920002" "1,6","10,68",0,"10,68","367,187200000002" "1,62","10,8732","-0,7","10,1732","379,679434720002" "1,64","11,0688",0,"11,0688","392,555000320002" "1,66","11,2668","0,6","11,8668","405,822346720002" "1,68","11,4672","-0,6","10,8672","419,490027520002" "1,7","11,67","-0,4","11,27","433,566700000002" "1,72","11,8752","0,3","12,1752","448,061125120002" "1,74","12,0828","-0,5","11,5828","462,982167520002" "1,76","12,2928","-0,9","11,3928","478,338795520002" "1,78","12,5052","-0,6","11,9052","494,140081120002" "1,8","12,72","-0,9","11,82","510,395200000002" "1,82","12,9372","-0,1","12,8372","527,113431520002" "1,84","13,1568","-0,6","12,5568","544,304158720002" "1,86","13,3788","0,2","13,5788","561,976868320003" "1,88","13,6032","-0,8","12,8032","580,141150720003" "1,9","13,83","-0,9","12,93","598,806700000003" "1,92","14,0592","0,6","14,6592","617,983313920003" "1,94","14,2908",0,"14,2908","637,680893920003" "1,96","14,5248","0,1","14,6248","657,909445120003" "1,98","14,7612","-0,5","14,2612","678,679076320003" 2,15,"-0,1","14,9","700,000000000003"

### 📄 IA BD PIA UT 3.3 Biblioteca Matplotlib Gráficas.ipynb

## Librerias

```python
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import style
from matplotlib.ticker import MultipleLocator
from pathlib import Path
data_path = Path("C:\\Users\\Javier\\Jupyter\\matplotlib")
import matplotlib.patches as mpatches
import matplotlib.image as mpimg
import seaborn as sns

import warnings #avisos al usuario sobre ejecucion de un programa. 
warnings.filterwarnings('ignore')

#para que plt funcione en jupyter
%matplotlib inline
```

## Gráfico de lineas.

```python
# Definir valores de x, y 
y = np.random.randint(0, 10, 10)
x = np.arange(10)

plt.plot(x,y)
```

### Cambiar estilos de lineas.

```python
plt.plot(x,y, marker="o", color="b", linestyle="--")
```

### Varias gráficas en un mismo cuadro.

```python
y1 = np.random.randint(0, 10, 10)
y2 = np.random.randint(0, 10, 10)
y3 = np.random.randint(0, 10, 10)
x = np.arange(10)

plt.plot(x,y1, marker="*", color="b", linestyle="-")
plt.plot(x,y2, marker="D", color="g", linestyle="")
plt.plot(x,y3, marker="8", color="r", linestyle="-.")
```

### Insertar leyendas.

```python
y1 = np.random.randint(0, 10, 10)
y2 = np.random.randint(0, 10, 10)
y3 = np.random.randint(0, 10, 10)
x = np.arange(10)

# ajustamos tamaño de la gráfica
plt.figure(figsize=(5, 3))

plt.plot(x,y1, marker="*", color="b", linestyle="-",label="y1")
plt.plot(x,y2, marker="D", color="g", linestyle="",label="y2")
plt.plot(x,y3, marker="8", color="r", linestyle="-.",label="y3")
plt.legend()
plt.title("Gráfico")
plt.xlabel("Eje x")
plt.ylabel("Eje y")
```

### Estilos de marcos predefinidos (fondo).

```python
from matplotlib import style

y1 = np.random.randint(0, 10, 10)
y2 = np.random.randint(0, 10, 10)
y3 = np.random.randint(0, 10, 10)
x = np.arange(10)

# ajustamos tamaño de la gráfica
plt.figure(figsize=(5, 3))

# seleccionamos un estilo
style.use("ggplot") 

plt.plot(x,y1, marker="*", color="b", linestyle="-",label="y1")
plt.plot(x,y2, marker="D", color="g", linestyle="",label="y2")
plt.plot(x,y3, marker="8", color="r", linestyle="-.",label="y3")
plt.legend()
plt.title("Gráfico")
plt.xlabel("Eje x")
plt.ylabel("Eje y")
```

```python
plt.style.available
```

### Configurar estilos de leyendas, títulos, ejes, marcos, etc.

```python
y1 = np.random.randint(0, 10, 10)
x = np.arange(10)

# creamos los objetos figure y axes.
fig, ax = plt.subplots(1, 1, figsize=(6,4))

# declaramos los ejes
ax.xaxis.grid(True)
ax.yaxis.grid(True)
# ax.grid(true) # declarar los 2 ejes a la vez.

# titulo de los ejes
ax.set(xlabel="valores de x", ylabel="valores de y", title="Gráfico")

# marcas mayores de los ejes
ax.xaxis.set_major_locator(MultipleLocator(1))   # X: separación cada 0.5 unidades
ax.yaxis.set_major_locator(MultipleLocator(2))  # Y: separación cada 0.25 unidades
# estilos marcas mayores
ax.xaxis.grid(which='major', linestyle='dashed', color='gray')
ax.yaxis.grid(which='major', linestyle='dashed', color='lightskyblue')

# marcas menores de los ejes.
from matplotlib.ticker import MultipleLocator
ax.xaxis.set_minor_locator(MultipleLocator(0.5))   # X: separación cada 0.5 unidades
ax.yaxis.set_minor_locator(MultipleLocator(0.25))  # Y: separación cada 0.25 unidades
# estilos marcas menores
ax.xaxis.grid(which='minor', linestyle='dashdot', color='yellow')

# formato marcas ejes x, y
# Eje X
ax.xaxis.set_minor_formatter('{x:.1f}')
ax.tick_params(axis='x', which='minor', labelsize=8, labelcolor='gray')
# Eje Y
ax.yaxis.set_minor_formatter('{x:.2f}')
ax.tick_params(axis='y', which='minor', labelsize=4, labelcolor='lightskyblue')

# color de fondo
ax.set_facecolor("m")

# pintar grafico
ax.plot(x,y1); # puntoycoma permite eliminar el out[]
```

### Doble eje.

```python
# Abrir archivo con datos.
dataframe = pd.read_csv(data_path/"x2 y x3 CSV.csv", sep = ",", decimal=",")

x = dataframe.iloc[:,0].tolist()
y1 = dataframe.iloc[:,1].tolist()
y2 = dataframe.iloc[:,4].tolist()

# pintar grafico.
fig, ax = plt.subplots()
ax.plot(x,y1, marker="*", color="b", linestyle="-")
ax.plot(x,y2, marker="D", color="g", linestyle="-")
plt.show()
```

```python
# Abrir archivo con datos.
dataframe = pd.read_csv(data_path/"x2 y x3 CSV.csv", sep = ",", decimal=",")

x = dataframe.iloc[:,0].tolist()
y1 = dataframe.iloc[:,1].tolist()
y2 = dataframe.iloc[:,4].tolist()

# pintar grafico.
fig, ax = plt.subplots()
ax.plot(x,y1, marker="*", color="b", linestyle="-")
ax1 = ax.twinx()
ax1.plot(x,y2, marker="D", color="g", linestyle="-")
plt.show()
```

### Insertar leyendas.

#### Insertar leyendas 1

```python
# pintar graficas insertar leyendas para distinguir una grafica de la otra.

fig, ax = plt.subplots()
ax.plot(x,y1, marker=" ", color="b", linestyle="-", label = "curva_1")
ax1 = ax.twinx()
ax1.plot(x,y2, marker=" ", color="g", linestyle="-", label = "curva_2")

# insertar leyendas definiendo fuente y posición.
ax.legend(loc="upper left", fontsize = 8)
ax1.legend(loc="upper right", fontsize= 8)
plt.show()
```

#### Insertar leyendas 2

```python
# pintar graficas insertar leyendas para distinguir una grafica de la otra.

fig, ax = plt.subplots()
ax.plot(x, y1, marker=" ", color="b", linestyle="-", label = "curva_1")

# insertar leyenda fuera de la caja 
plt.legend(bbox_to_anchor=(0., 1.005, 1., .102), loc="lower left",
           ncol=2, mode="expand", borderaxespad=0.)

ax1 = ax.twinx()
ax1.plot(x, y2, marker=" ", color="g", linestyle="-", label = "curva_2")
# insertar leyenda fuera de la caja
plt.legend(bbox_to_anchor=(0.32, 0.5, 1., .102), loc="upper right",
           ncol=2, mode= None, borderaxespad=0.);
```

#### Insertar leyendas 3

```python
import matplotlib.patches as mpatches
# pintar graficas insertar leyendas para distinguir una grafica de la otra.

fig, ax = plt.subplots()
ax.plot(x, y1, marker=" ", color="b", linestyle="-")

ax1 = ax.twinx()
ax1.plot(x, y2, marker=" ", color="g", linestyle="-", label = "curva_2")

curva_1 = mpatches.Patch(color='blue', label='Gráfica curva_1')
curva_2 = mpatches.Patch(color='orange', label='Gráfica curva_2')
#plt.legend(handles=[curva_1, curva_2], title = 'Gráficas', loc = "best")
plt.legend(handles=[curva_1, curva_2], title = 'Gráficas', bbox_to_anchor = (0.42, 0.5, 1., .102));
```

## Gráfico de barras.

```python
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import style
from matplotlib.ticker import MultipleLocator
import warnings #avisos al usuario sobre ejecucion de un programa. 
from pathlib import Path

warnings.filterwarnings('ignore')

#para que plt funcione en jupyter
%matplotlib inline
```

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")
dataframe.head(10)

# Datos a representar.
datos = dataframe.groupby(["Rooms"])
habitaciones = datos["Rooms"].value_counts()
```

```python
# Representacion en diagrama de barras
fig, ax = plt.subplots(figsize = (6,3.5))
ax.bar(x = habitaciones.index.values, height = habitaciones.values, width=0.50, align="center");
```

```python
# Representacion en diagrama de barras
fig, ax = plt.subplots(figsize = (6,3.5))
ax.bar(x = habitaciones.index.values, height = habitaciones.values, width=0.50, align="center");

#Configuracion de labels de x
ax.set_xticks(habitaciones.index.values);
ax.set_xticklabels(habitaciones.index.values, rotation=90);
```

```python
# Representacion en diagrama de barras
fig, ax = plt.subplots(figsize = (6,3.5))
ax.bar(x = habitaciones.index.values, height = habitaciones.values, width=0.50, align="center");

#Configuracion de labels de x
ax.set_xticks(habitaciones.index.values);
ax.set_xticklabels(habitaciones.index.values, rotation=90);

#Configuracion de y
ax.set_yscale("log")
ax.set_ylabel("Habitaciones")
```

## Histogramas.

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")

datos = dataframe.groupby(["Price"])
precios = datos["Price"].value_counts()
```

```python
# Representacion en diagrama de barras
fig, ax = plt.subplots(figsize = (6,3.5))
ax.hist(precios, bins= 10);
ax.set_yscale("log")

#Configuracion de labels de x
```

## Scatter (dispersión).

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")

# Scatter.
habitaciones = dataframe["Rooms"]
precio = dataframe["Price"]
fig, ax = plt.subplots(figsize = (6,3.5))
ax.scatter(x = habitaciones , y = precio);
```

### Variacion color de los puntos.

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")

# Scatter.
habitaciones = dataframe["Rooms"]
precio = dataframe["Price"]
fig, ax = plt.subplots(figsize = (6,3.5))
scatter = ax.scatter(x = habitaciones , y = precio,
           s=30, # tamaño de puntos
           c=precio, cmap='RdBu_r',  # colores
           vmin=precio.min(), vmax=precio.max(), # normalización de colores
           alpha=0.7, #transparencia de los valores
           edgecolors='none' );

# Leyendas
cb = fig.colorbar(scatter, ax=ax, label='Precio', extend='max')
# Lineas exteriores de la leyenda no visible.
cb.outline.set_visible(False)
# Nombre de los ejes
ax.set_xlabel('Habitaciones')
ax.set_ylabel('Precios')
# Lineas derecha y superior del marco no visibles.
ax.spines['right'].set_visible(False)
ax.spines['top'].set_visible(False)
# No representar todos los puntos de la leyenda.
fig.tight_layout()
```

### Variacion tamaño de los puntos.

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")

# Scatter.
habitaciones = dataframe["Rooms"]
precio = dataframe["Price"]
fig, ax = plt.subplots(figsize = (6,3.5))
scatter = ax.scatter(x = habitaciones , y = precio,
           s=(precio)**.6/100, # tamaño de puntos
           c=precio, cmap='RdBu_r',  # colores
           vmin=precio.min(), vmax=precio.max(), # normalización de colores
           alpha=0.7, #transparencia de los valores
           edgecolors='none' );

# Leyendas
cb = fig.colorbar(scatter, ax=ax, label='Precio', extend='max')
# Lineas exteriores de la leyenda no visible.
cb.outline.set_visible(False)
# Nombre de los ejes
ax.set_xlabel('Habitaciones')
ax.set_ylabel('Precios')
# Lineas derecha y superior del marco no visibles.
ax.spines['right'].set_visible(False)
ax.spines['top'].set_visible(False)
# No representar todos los puntos de la leyenda.
fig.tight_layout()
```

## Tartas (camembert).

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")
habitaciones = dataframe["Rooms"].value_counts(normalize=False)
```

```python
# Tarta
fig, ax = plt.subplots(figsize = (6,6))
ax.pie(habitaciones);
```

```python
# Tarta
fig, ax = plt.subplots(figsize = (4,4))
ax.pie(habitaciones, labels=habitaciones.index, # indice
      autopct="%1.1f%%"); # añadir % de cada porción
```

```python
# Tarta
fig, ax = plt.subplots(figsize = (4,4))

# parametro explode.
descomponer = [0, 0, 0, 0, 0.1, 0.75, 1.75, 2.75, 3.75]

ax.pie(habitaciones, labels=habitaciones.index, # indice
       explode= descomponer, # parametros de explode
     #  shadow= True, # sombrear las porciones
       autopct="%1.1f%%", # añadir % de cada porción
     #  startangle=45, # giro de la tarta.
       );
```

## Mapa de calor

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")
#dataframe.head()
dataframe1 = dataframe[["Price","Rooms","Distance","Postcode","Bathroom","Landsize"]]
#dataframe1.dropna
dataframe1.corr()
```

```python
# Datos "bulk"
data_path = Path("C:/Users/Javier")
dataframe = pd.read_csv(data_path / "melb_data.csv")
#dataframe.head()
dataframe1 = dataframe[["Price","Rooms","Distance","Postcode","Bathroom","Landsize"]]
#dataframe1.dropna
dataframe1.corr()

# diagrama de calor.
fig, ax = plt.subplots(figsize= (4,4))
ax.pcolormesh([1,2,3,4,5,6],[1,2,3,4,5,6], dataframe1.corr().values);
```

## Representación en 3D

```python
from mpl_toolkits.mplot3d import Axes3D
# Datos de muestra
X, Y = np.meshgrid(np.linspace(-8, 8), 
                   np.linspace(-8, 8))
R = np.sqrt(X**2 + Y**2)
Z = np.sin(R) / R

fig = plt.figure()
ax = fig.add_subplot(projection = '3d')

# Superficie 3D
ax.plot_surface(X, Y, Z);

# plt.show()
```

```python
from mpl_toolkits.mplot3d import Axes3D
# Datos de muestra
X, Y = np.meshgrid(np.linspace(-8, 8), 
                   np.linspace(-8, 8))
R = np.sqrt(X**2 + Y**2)
Z = np.sin(R) / R

fig = plt.figure()
ax = fig.add_subplot(projection = '3d')

# Superficie 3D
plot = ax.plot_surface(X, Y, Z, cmap = 'Spectral_r')
fig.colorbar(plot, ax = ax, shrink = 0.5, aspect = 10)

# plt.show()

# Etiquetas de los ejes
ax.set_xlabel("Etiqueta del eje X")
ax.set_ylabel("Etiqueta del eje Y")
ax.set_zlabel("Etiqueta del eje Z")

# Título
plt.title("Superficie 3D");
```

## Cajas

```python
serie_1 = pd.Series([36, 25, 37, 24, 39, 20, 36, 45, 31, 31, 39, 24, 29, 23, 41, 40, 33, 24, 34, 40])
print(serie_1.describe())

fig ,ax = plt.subplots()
ax.boxplot(serie_1);
```

```python
# Añadimos puntos sigulares (outliers)
serie_1 = pd.Series([36, 25, 37, 24, 39, 20, 36, 45, 31, 31, 39, 24, 29, 23, 41, 40, 33, 24, 34, 40, 78, 85])
print(serie_1.describe())

fig ,ax = plt.subplots()
ax.boxplot(serie_1);
```

```python
# Cambiamos de biblioteca para representacion # SEABORN
import seaborn as sns
serie_1 = pd.Series([36, 25, 37, 24, 39, 20, 36, 45, 31, 31, 39, 24, 29, 23, 41, 40, 33, 24, 34, 40])
print(serie_1.describe())

sns.boxplot(serie_1);
```

```python
# Cambiamos de biblioteca para representacion # Plotly
import plotly.express as px
serie_1 = pd.Series([36, 25, 37, 24, 39, 20, 36, 45, 31, 31, 39, 24, 29, 23, 41, 40, 33, 24, 34, 40])
print(serie_1.describe())

fig = px.box(serie_1)
px.box(serie_1)
```

## Diagrama de violín

```python
#x = np.random.power(5,100)
#x = np.random.pareto(5,100)
#print (x)

# Datos
x = np.random.normal(5, 1, 100) 
# Gráfico de violín
fig, ax = plt.subplots()
violin = ax.violinplot(x)

for pc in violin["bodies"]:
    pc.set_facecolor("#D43F3A")
    pc.set_edgecolor("black")
    pc.set_alpha(0.5) #permite ajustar la transparencia
```

## Imágenes `imshow`

```python
import matplotlib.image as mpimg
image = mpimg.imread(data_path / "jupyter.jpg")
plt.imshow(image);
```

### Recortar imágenes `

```python
import matplotlib.image as mpimg
image = mpimg.imread(data_path / "jupyter.jpg")
print(image.shape) # recuperar las medidas de la imagen
#print(image)
image_recortada = image[140:-170, :, :]
plt.imshow(image_recortada)
print(image_recortada.shape)
```

```python
import matplotlib.image as mpimg
image = mpimg.imread(data_path / "jupyter.jpg")
print(image.shape) # recuperar las medidas de la imagen
#print(image)
image_recortada = image[140:-170, 50:-50, 1]
plt.imshow(image_recortada)
print(image_recortada.shape)
```

## Varios marcos.

```python
# varios marcos.
fig, ax = plt.subplots(nrows =2, ncols = 3);
```

```python
# varios marcos.
fig, ax = plt.subplots(nrows =2, ncols = 3);

for i in range(2):
    for j in range(3):
        ax[i,j].set_title(f"Marco ({i},{j})")

fig.tight_layout(pad=1)  # sólo para que no se solapen los títulos
```

---

# 3.5 2 Biblioteca Pandas

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT 3.2 Programación de ML en Python. Biblioteca Pandas Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- Pandas...................................................................................................................................................3

1.1. Descripción.....................................................................................................................................3 1.2. Enlaces de interés:..........................................................................................................................3 1.3. Instalación.......................................................................................................................................3 1.4. Motivación de Pandas.....................................................................................................................3 1.5. Manipulación de datos tabulares utilizando Pandas.......................................................................4 1.5.1. Series.......................................................................................................................................4 1.5.1.1. Creación de una serie con Pandas...................................................................................4 1.5.1.2. Creación de una serie con un índice especifico..............................................................4 1.5.1.3. Creación de una serie con diccionarios...........................................................................5 1.5.1.4. Acceso a los elementos de una serie...............................................................................5 1.5.1.5. Creación de una serie temporal.......................................................................................7 1.5.2. DataFrames.............................................................................................................................8 1.5.2.1. Creación de un dataframe...............................................................................................8 1.5.2.2. Abrir un archivo en formato .CSV:.................................................................................9 1.5.2.3. Abrir archivos en otros formatos...................................................................................10 1.5.2.4. Guardar archivos...........................................................................................................11 1.5.2.5. Metadatos de un Dataframe..........................................................................................11 1.5.2.6. Cambiando el índice de un dataframe...........................................................................12 1.5.2.7. Estadísticas de un DataFrame.......................................................................................13 1.5.2.8. Visualizar un DataFrame...............................................................................................16 1.5.2.9. Slicing de un DataFrame...............................................................................................18 1.5.2.10. Unir 2 dataframes: concat...........................................................................................22 1.5.2.11. Listar datos de un Dataframe......................................................................................23 1.5.2.12. Operaciones aritméticas sobre un DataFrame.............................................................25 1.5.2.13. Añadir o quitar filas o columnas de un DataFrame.....................................................28 1.5.2.14. Agrupaciones...............................................................................................................30 1.5.2.15. Selección usando QUERY..........................................................................................31 2 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 1. PANDAS

Pandas es una de las bibliotecas más utilizadas para el tratamiento de datos en Python.

#### 1.1. Descripción

Pandas (biblioteca) es un paquete de Python que proporciona estructuras de datos rápidas, flexibles y expresivas diseñadas para hacer que trabajar con datos "relacionales" o "etiquetados" sea fácil e intuitivo. Su objetivo es ser el componente fundamental de alto nivel para realizar análisis de datos prácticos y del mundo real en Python.

Además, tiene el objetivo más amplio de convertirse en la herramienta de manipulación/análisis de datos de código abierto más poderosa y flexible disponible en cualquier idioma.

#### 1.2. Enlaces de interés

https://pandas.pydata.org/ https://anaconda.org/anaconda/pandas https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html

#### 1.3. Instalación

Para instalar pandas en anaconda: conda install -c anaconda pandas conda install pandas

#### 1.4. Motivación de Pandas

Al igual que NumPy optimiza la manipulación de arrays en Python y es capaz de manipular todos los formatos de tablas disponibles en la actualidad. Así pues, Pandas nace de la necesidad de manipular las series y los dataframes, muy habituales en el campo de la ciencia de datos.

3 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.5. Manipulación de datos tabulares utilizando Pandas

A diferencia de Numpy, dónde los datos se manipulan fundamentalmente con arrays (ndarray), Pandas dispone de 2 estructuras de datos.

- Series
- Dataframes

#### 1.5.1. Series

Las series recuerdan a los arrays pero se distinguen de ellos porque además tienen una etiqueta (índice) y un título (indice). 1.5.1.1. Creación de una serie con Pandas. 1.5.1.2. Creación de una serie con un índice especifico. 4 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. El índice de una serie no necesita ser único. 1.5.1.3. Creación de una serie con diccionarios. Se puede importar un diccionario de python para crear serie en pandas. 1.5.1.4. Acceso a los elementos de una serie.

Se puede acceder a los elementos de una serie por su posición pero no se recomienda su uso (deprecated).

- Acceso al valor por el valor de su índice.

5 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

- Caso del índice duplicado.
- Acceso al valor con el método iloc y la posición del valor.
- Acceso a todos los valores antes y después del índice (slicing).

3 → Posición 3 hacia atrás. 4: → Posición 4 hacia adelante. 6 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.1.5. Creación de una serie temporal. También se pueden crear series en Pandas sobre una base temporal. Se puede (debe) especificar la frecuencia de la serie (D, W, M, Y).

También se puede especificar la hora y establecer la frecuencia sobre una base horaria (h, min, s). 7 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.5.2. DataFrames

Un dataframe es un array tipo NumPy de 2 o más dimensiones (columnas). 1.5.2.1. Creación de un dataframe. Método DataFrame Podemos usar todas las herramientas de NumPy para crear dataframes. 8 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.2. Abrir un archivo en formato .CSV: De manera muy habitual los DataFrames son cargados desde archivos de texto en formato .CSV. Si visualizamos el archivo petrol_consumption con un editor de texto veremos los sigientes datos separados por una coma ‘,’

Si abrimos el mismo archivo con Pandas obtendremos el siguiente resultado. Nota: ¿Son correctos los valores de la columna Population_Driver_license(%) 9 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.3. Abrir archivos en otros formatos. JSON: Se abre con read_json() (cuidado con el valor de orient y más parámetros que hay que pasar al método read_json()). Otros formatos posibles (parquet ...)

Ejemplo de la pagina web del gobierno datos.gob.es. Ejemplo de formatos propuestos para la descarga de datos públicos. 10 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.4. Guardar archivos. Al igual que podemos abrir datasets, también podemos guardarlos. Archivo resultante: 1.5.2.5. Metadatos de un Dataframe. Podemos acceder a los metadatos de un dataframe con los siguientes métodos.

shape: Saber el nº de filas y columnas. dtypes: Ver los tipos de las columnas. 11 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.6. Cambiando el índice de un dataframe. Al igual que para una serie, se puede cambiar fácilmente el tipo de índice de un dataframe. Cambio por fechas. Cambiando la numeración del índice.

12 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.7. Estadísticas de un DataFrame. Podemos obtener todo tipo de información sobre el contenido de un DataFrame. Método .describe() Para evitar computación innecesaria se puede instanciar un solo cálculo estadístico.

Media sobre las columnas. 13 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Media sobre las filas. Contar la aparición de un mismo dato: value_counts: link del archivo: https://cs.famaf.unc.edu.ar/~mteruel/datasets/diplodatos/melb_data.csv Otro ejemplo de resultado con value_counts

14 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Visualizar los datos faltantes (missing): Contar los datos faltantes (missing): 15 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.8. Visualizar un DataFrame. Visualización directa de un dataframe. Para DataFrames demasiado grandes se puede realizar una visualización parcial. Método .head(). Solo se mostrarán los primeros índices.

16 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. También se puede pasar un parámetro al método .head(6) Método .tail(). Solo se mostraran los últimos índices. Visualizar una columna en concreto. 17 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Más de una columna. 1.5.2.9. Slicing de un DataFrame. Por filas. Con iloc[ ]. 18 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Pasar más de un intervalo a iloc permite seleccionar tanto rangos de filas como de columnas. Pasar más de una lista a iloc permite seleccionar específicamente filas como columnas.

19 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Slicing instanciando el nombre real de las filas y columnas. Pasando una lista del nombre de las filas. Con el método loc pasándole intervalos. Con el método loc pasándole listas de filas o columnas.

20 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. De una sola celda. Con el método at (también posible con loc). Slicing pasando una condición (o más de una). Transponer un DataFrame. En determinadas circunstancias, puede resultar útil transponer filas y columnas.

21 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.10. Unir 2 dataframes: concat 22 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.11. Listar datos de un Dataframe. Los dataframes se pueden listas de 2 maneras distintas

- Listar por los indices.
- Listar por los valores.

Listar por los indices (ascendente o descendente): sort_index() Axis = 0, ascending False: Listado por filas en orden descendente. Axis = 1, ascending False: Listado por columnas en orden descendente. 23 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Listar por los valores ascendente o descendente: sort_values() Listado por los valores de una columna. “B”: Nombre de la columna, axis= 0: Listado por los valores de una fila.

“L3”: Fila, axis= 1: 24 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.12. Operaciones aritméticas sobre un DataFrame. Sobre columnas. Sobre todo el dataframe. 25 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Aplicando funciones. Usando expresiones lambda sobre una columna: Usando expresiones lambda sobre todo el dataframe: 26 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Usando funciones de la biblioteca NumPy: 27 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.13. Añadir o quitar filas o columnas de un DataFrame. Quitar filas: drop Después de hacer drop de las columnas “longitude” y “latitude”. Otra sintaxis para hacer drop de columnas con axis =1 28 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Nota: Axis = 0 borra por defecto filas de un dataset. Añadir filas con un array de NumPy Al final del dataframe: En cualquier posición del dataframe: insert 29 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.5.2.14. Agrupaciones. El método groupby recuerda a las agrupaciones de SQL e involucra

- Dividir los datos en grupos según algunos criterios.
- Aplicar una función a cada grupo de forma independiente.
- Combinar los resultados en una estructura de datos.

Agrupación sobre una columna. Agrupación sobre varias columnas. El resultado es una dataframe con un indice doble. Nota: ¡Hay casas que no tienen Bathroom! (y otras que tienen más baños que habitaciones). 30 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Buscar casas con Bathroom == 0. 1.5.2.15. Selección usando QUERY Para la selección condicional de registros se dispone de la función query(). Admite una sintaxis de consulta mediante operadores de comparación.

31 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.6. Información adicional sobre los archivos en formato parquet. Apache Parquet es un formato de archivo de big data en el ecosistema de Hadoop diseñado para manejar el almacenamiento y la recuperación de datos de manera eficiente.

Apache Parquet es independiente del lenguaje y admite esquemas de codificación / compresión altamente eficientes que minimizan significativamente el tiempo de ejecución de la consulta, la cantidad de datos que se deben escanear y el costo total de explotacion almacenamiento.

Apache Parquet es un formato de almacenamiento en columnas que proporciona optimizaciones para acelerar las consultas y está compuesto por tres elementos

- Row Group: Conjunto de filas en formato columnas.
- Column Chunk: de esta forma, los datos de una columna en un grupo se pueden

leer de manera independiente para optimizar las lecturas.

- Page: hace referencia al almacenamiento de los datos.

Comparación de características entre un archivo *.csv y un archivo *.parquet. Coste de almacenamiento.

Tiempos de acceso a los archivos. 32 / 32

---

# 3.6 1 Biblioteca Numpy

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT 3.1 Programación de ML en Python. Biblioteca Numpy Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Taula de continguts

- NumPy...................................................................................................................................................3

1.1. Descripción.....................................................................................................................................3 1.2. Enlaces de interés:..........................................................................................................................3 1.3. Instalación.......................................................................................................................................3 1.4. Motivación de NumPy....................................................................................................................4 1.5. Importar la biblioteca NumPy........................................................................................................4 1.6. Crear un array de 1 dimensión con NumPy....................................................................................4 1.7. Crear y auto llenar un array............................................................................................................5 1.8. Constantes de NumPy.....................................................................................................................5 1.9. Tipos de datos de un array con NumPy..........................................................................................6 1.9.1. Datos de tipo string................................................................................................................7 1.9.2. Datos de tipo boolean............................................................................................................7 1.9.3. Otros tipos de datos...............................................................................................................7 1.10. Arrays multidimensionales...........................................................................................................8 1.10.1. Array multidimensional con solo ‘1’...................................................................................8 1.10.2. Array multidimensional solo con ‘8’...................................................................................8 1.10.3. Llenar array en diagonal np.eye (1).....................................................................................8 1.10.4. Llenar array en diagonal np.eye (2).....................................................................................8 1.10.5. Llenar array en diagonal np.diag.........................................................................................9 1.10.6. Llenar array con números aleatorios....................................................................................9 1.10.7. Llenar array con una serie de números condicionales.........................................................9 1.11. Manipular arrays.........................................................................................................................10 1.11.1. Redimensionar arrays.........................................................................................................10 1.11.2. Información acerca del array..............................................................................................11 1.11.3. Unir 2 arrays......................................................................................................................13 1.11.4. Dividir 2 arrays..................................................................................................................13 1.11.5. Añadir y eliminar elementos..............................................................................................14 1.12. ‘Importar’ array desde python....................................................................................................16 1.12.1. Datos de tipo string............................................................................................................16 1.12.2. Datos de tipo boolean........................................................................................................16 1.12.3. Otros tipos de datos...........................................................................................................16 1.13. Indexado de un array..................................................................................................................17 1.13.1. Creación de un array a partir de los datos de otro array (SLICING).................................18 1.13.2. Slicing de un array multidimencional (2 dimensiones).....................................................19 1.13.3. Slicing de un array multidimencional (3 dimensiones).....................................................20 1.14. Indexado booleano de un array...................................................................................................23 1.15. Recorrido de un array.................................................................................................................23 1.16. Operaciones matemáticas sobre arrays.......................................................................................24 1.16.1. Sumar 2 arrays...................................................................................................................24 1.16.2. Multiplicar 2 arrays de misma dimensión.........................................................................24 1.16.3. Multiplicar 2 arrays de dimensiones distintas...................................................................25 1.16.4. Exponentes y logaritmos....................................................................................................26 1.16.5. Redondeo...........................................................................................................................27 1.16.6. Funciones estadísticas........................................................................................................27 1.16.7. Funciones lógicas...............................................................................................................30 1.16.8. Ordenación de arrays.........................................................................................................31 2 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 1. NUMPY

#### 1.1. Descripción

Numpy (biblioteca) es una librería de procesamiento de arrays. Contiene una gran colección de funciones que permiten realizar cálculos matemáticos complejos sobre arrays multidimensionales.

#### 1.2. Enlaces de interés

https://numpy.org/ https://anaconda.org/anaconda/numpy https://numpy.org/doc/stable/user/quickstart.html

#### 1.3. Instalación

Para instalar numpy en anaconda: conda install -c anaconda numpy conda install numpy

#### 1.4. Motivación de NumPy

En Python, normalmente se utilizan listas para almacenar una colección de elementos (p.e. lista1 = [1,2,3,4,5]). Una lista de Python no necesita contener elementos del mismo tipo (lista2= [1,"Hola",3.14,Verdadero,5]). Esta característica de Python da flexibilidad a la hora de manejar listas pero tiene sus desventajas cuando se trata de procesar grandes cantidades de datos ya que para que una lista tenga elementos de tipos distintos (no uniforme), cada elemento de la lista debe almacenarse en una ubicación de memoria distinta lo que hace costoso su acceso (y la computación).

3 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Para solucionar ese problema nace NumPy que además agrega soporte para matrices, arreglos multidimensionales y un conjunto de funciones matemáticas de alto nivel para operar estas matrices.

En NumPy, una matriz es de tipo ndarray (n-dimensional array) y todos sus elementos deben ser del mismo tipo.

#### 1.5. Importar la biblioteca NumPy

Como todas las bibliotecas, para poder usarlas hay que importarlas primero.

#### 1.6. Crear un array de 1 dimensión con NumPy

4 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.7. Crear y auto llenar un array. Otra manera de rellenar un array. Solo con ‘0’. Solo con ‘1’. 1.8. Constantes de NumPy. inf: infinito NaN: Not a Number e: valor de la función exponencial 5 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.9. Tipos de datos de un array con NumPy

Los datos de los arraysen NumPy pueden ser de todo tipo, pero no se pueden mezclar. Rangos de los diferentes tipos de datos. 6 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.9.1. Datos de tipo string. Si no especificamos nada NumPy auto asigna el tipo de dato al array. 1.9.2. Datos de tipo boolean. 1.9.3. Otros tipos de datos. Creación array con valores int32.

Comprobación de los bytes ocupados por el objeto array. 7 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.10. Arrays multidimensionales. 1.10.1. Array multidimensional con solo ‘1’. 1.10.2. Array multidimensional solo con ‘8’.

#### 1.10.3. Llenar array en diagonal np.eye (1)

#### 1.10.4. Llenar array en diagonal np.eye (2)

8 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.10.5. Llenar array en diagonal np.diag

#### 1.10.6. Llenar array con números aleatorios

#### 1.10.7. Llenar array con una serie de números condicionales

6: valor inicial, 60 valor final, 10: cantidad de números. 9 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.11. Manipular arrays

1.11.1. Redimensionar arrays. reshape Para solo pasar 1 paramétro al metodo reshape poner -1 en la dimensión restante. 10 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.11.2. Información acerca del array. ndim: Dimensión del array. shape: Determina la “forma” del array. 11 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. size: Determina la cantidad de elementos del array. dtype: Determina el tipo de elementos que constituyen el array. 12 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.11.3. Unir 2 arrays. Concatenate axis = 0: Unión por filas axis = 1: Unión por columnas Nota: El método “.T” permuta el array. 1.11.4. Dividir 2 arrays. Split por secciones.

13 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Split por índices. 1.11.5. Añadir y eliminar elementos. append: Inserta al final. insert: Permite insertar en cualquier posición del array. 14 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. delete: Elimina en una posición determinada. trim_zeros: elimina los ‘0’ al inicio y al final del array unique: simplifica el array eliminando las repeticiones. 15 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.12. ‘Importar’ array desde python Crear lista en python y luego importar. 1.12.1. Datos de tipo string. Si no especificamos nada NumPy auto asigna el tipo de dato al array.

1.12.2. Datos de tipo boolean. 1.12.3. Otros tipos de datos. Creación array con valores int32. Comprobación de los bytes ocupados por el objeto array. 16 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.13. Indexado de un array

Acceso al valor de la posición 5 del array19 Acceso al valor de la posición (3,4) del array: Otra forma de acceso: Otro ejemplo con un array de arrays (array de 3 dimensiones). 17 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Acceso a valores de un array multidimencional. 1.13.1. Creación de un array a partir de los datos de otro array (SLICING). Para recorrer un array o parte del mismo, recoger los datos y obtener otro array, se puede recorrer al SLICING.

Slicing de un array: Posición y luego hacia adelante (-1). Syntaxis: array[inicio : fin : paso] Desde el indice hacia atrás. 18 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Desde el indice hacia adelante: 1.13.2. Slicing de un array multidimencional (2 dimensiones). Sintaxis array[intervalo filas, intervalo columnas]. 19 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.13.3. Slicing de un array multidimencional (3 dimensiones). Recoger datos de una fila. Sintaxis: array[matriz, fila] Recoger datos de una columna. Sintaxis: array[matriz, :(cualquier fila), columna] 20 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Recoger valores con las mimas coordenadas en todas las columnas. Sintaxis: array[ : (cualquier matriz), fila, columna] Recoger una matriz completa. 21 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Recoger la misma fila en todas las matrices. Recoger la misma columna en todas las matrices. Recoger los mismos datos pero no en todos los arrays. 22 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.14. Indexado booleano de un array

Otra forma de acceder a los datos es compararlos con un valor de referencia. 1.15. Recorrido de un array. Para recorrer un array disponemos del array (iterable) o del método iterador nditer sobre arrays (objetos) NumPy. Array es un objeto iterable. Uso del método iterador.

23 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.16. Operaciones matemáticas sobre arrays

1.16.1. Sumar 2 arrays. 1.16.2. Multiplicar 2 arrays de misma dimensión. 24 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. 1.16.3. Multiplicar 2 arrays de dimensiones distintas. Para mutiplicar 2 arrays siguiendo las reglas del álgebra hay que usar el método .dot. 25 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.16.4. Exponentes y logaritmos

Exponentes: Método np.exp() Sintaxis más general de la función exponencial: → “e” a la potencia de los valores del array. Logaritmos: Métodos np.log(), np.log10() y np.log2() log: base e 26 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. log10: base 10 log10: base 2

#### 1.16.5. Redondeo

Es posible redondear los valores de un array con el metodo .round(). 1.16.6. Funciones estadísticas. Encontrar los valores mínimos y máximos de un array. 27 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Mediana de los valores de un array (valor central). Media de un array / por filas / por columnas. Media: Media por columnas: Media por columnas: 28 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. Devolver los elementos constituyentes de un array: Devolver las repeticiones de los elementos constituyentes de un array: Devolver las cantidad de elementos no nulos

Devolver las repeticiones de los elementos con una condición: 29 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.16.7. Funciones lógicas

All: Comprueba si todos los elementos de un array cumplen la condición. Any: Comprueba si algún elemento de un array cumple la condición. logical_and / logical_or: Comprueba, item a item, si se cumplen 2 condiciones o una de las 2. equal: Compara si 2 arrays son idénticos.

30 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. greater / greater_equal / less / less_equal: Compara, item a item los valores de 2 arrays.

#### 1.16.8. Ordenación de arrays

np.sort(): no destrutivo array.sort(): destructivo 31 / 32

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. array multidimensional Ordenación por columnas. Ordenación por filas. 32 / 32

---

# 3.7 0 Presentació unitat

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático. UT3. Programación de ML en Python. Curso de especialización en Inteligencia Artificial y Big Data Programación de Inteligencia Artificial Licencia Creative Commons Reconocimiento-NoComercial-CompartirIgual CC BY-NC-SA: No se permite un uso comercia de la obra original ni de las posibles obras derivadas, la distribución de la cuales se debe hace con una licencia igual a la obra regula la obra original.

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 1. SCIKIT-LEARN

#### 1.1. Descripción

Scikit-learn (framwork) es una biblioteca de aprendizaje automático de código abierto que admite el aprendizaje supervisado y no supervisado. También proporciona varias herramientas para el ajuste de modelos, el preprocesamiento de datos, la selección y evaluación de modelos y muchas otras utilidades.

#### 1.2. Enlaces de interés

https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html https://anaconda.org/anaconda/scikit-learn

#### 1.3. Instalación

Para instalar scikit learn en anaconda: conda install -c anaconda scikit-learn 2 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

#### 1.4. Ecosistema scikit-learn

3 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 2. NUMPY

#### 2.1. Descripción

Numpy (biblioteca) es una librería de procesamiento de arrays. Contiene una gran colección de funciones que permiten realizar cálculos matemáticos complejos sobre arrays multidimensionales.

#### 2.2. Enlaces de interés

https://numpy.org/ https://anaconda.org/anaconda/numpy https://numpy.org/doc/stable/user/quickstart.html

#### 2.3. Instalación

Para instalar numpy en anaconda: conda install -c anaconda numpy conda install numpy 4 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 3. PANDAS

Pandas es una de las bibliotecas más utilizadas para el tratamiento de datos en Python.

#### 3.1. Descripción

Pandas (biblioteca) es un paquete de Python que proporciona estructuras de datos rápidas, flexibles y expresivas diseñadas para hacer que trabajar con datos "relacionales" o "etiquetados" sea fácil e intuitivo. Su objetivo es ser el componente fundamental de alto nivel para realizar análisis de datos prácticos y del mundo real en Python.

Además, tiene el objetivo más amplio de convertirse en la herramienta de manipulación/análisis de datos de código abierto más poderosa y flexible disponible en cualquier idioma.

#### 3.2. Enlaces de interés

https://pandas.pydata.org/ https://anaconda.org/anaconda/pandas https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html

#### 3.3. Instalación

Para instalar pandas en anaconda: conda install -c anaconda pandas 5 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 4. SCIPY

#### 4.1. Descripción

SciPy (biblioteca) proporciona algoritmos para optimización, integración, interpolación, problemas de valores propios, ecuaciones algebraicas, ecuaciones diferenciales, estadísticas y muchas otras clases de problemas.

#### 4.2. Enlaces de interés

https://scipy.org/ https://anaconda.org/anaconda/scipy https://docs.scipy.org/doc/scipy/

#### 4.3. Instalación

Para instalar SciPy en anaconda: conda install -c anaconda scipy 6 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 5. MATPLOTLIB

#### 5.1. Descripción

Matplotlib (biblioteca) produce figuras con calidad de publicación en una variedad de formatos impresos y entornos interactivos en todas las plataformas.

#### 5.2. Enlaces de interés

https://matplotlib.org/ https://anaconda.org/anaconda/matplotlib https://matplotlib.org/stable/users/index

#### 5.3. Instalación

Para instalar SciPy en anaconda: conda install -c anaconda matplotlib

#### 5.4. Motivación

Visualizar los datos. 7 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 6. SEABORN

#### 6.1. Descripción

Seaborn (biblioteca) produce figuras con calidad de publicación en una variedad de formatos impresos y entornos interactivos en todas las plataformas.

#### 6.2. Enlaces de interés

https://seaborn.pydata.org https://anaconda.org/anaconda/seaborn https://seaborn.pydata.org/tutorial.html

#### 6.3. Instalación

Para instalar seaborn en anaconda: conda install -c anaconda seaborn

#### 6.4. Motivación

Basada en la biblioteca matplotlib, compensa la dificultad de visualización cuando tratamos con grandes cantidades de datos y/o deseamos ver las posibles relaciones entre varias variables. 6.5. 8 / 9

Curso de especialización en Inteligencia Artificial y Big Data Sistemas de Aprendizaje Automático.

### 7. TENSOR FLOW

#### 7.1. Descripción

Tensorflow (framework) es una de las librerías open source más importantes de Deep Learning y ha sido creada por Google. Tensorflow permite la compilación y entrenamiento de modelos de ML de una forma sencilla utilizando sus API. Entre estas destaca Keras, API de alto nivel utilizada para protipado rápido, investigación de vanguardia y soluciones productivizadas. Entre las características de Keras destacan su interfaz simple y optimizada para casos comunes, la modularidad mediante el uso de bloques y la facilidad de adaptar estos bloques para aplicar nuevos descubrimientos estado del arte.

#### 7.2. Enlaces de interés

https://www.tensorflow.org/?hl=es-419 https://anaconda.org/conda-forge/tensorflow https://www.tensorflow.org/learn?hl=es-419

#### 7.3. Instalación

Para instalar SciPy en anaconda: cconda install -c conda-forge tensorflow conda install -c "conda-forge/label/broken" tensorflow conda install -c "conda-forge/label/cf201901" tensorflow conda install -c "conda-forge/label/cf202003" tensorflow 9 / 9

---
