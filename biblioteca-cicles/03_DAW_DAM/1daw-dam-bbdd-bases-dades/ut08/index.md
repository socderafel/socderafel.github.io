---
layout: default
title: "UD8: Bases de Datos No Relacionales (NoSQL) — MongoDB — Bases de Datos"
course_root: ".."
badge: "1º DAW / DAM / ASIX · Bases de Datos · UT08"
prev_url: "../ut07/index.html"
prev_label: "⬅️ UD7"
---

# UD8: Bases de Datos No Relacionales (NoSQL) — MongoDB

Bienvenido/a a la **UD8: Bases de Datos No Relacionales (NoSQL) — MongoDB** del módulo profesional de **Bases de Datos** (1º DAW / DAM / ASIX · Bases de Datos).

En esta unidad encontrarás los contenidos teóricos, ejemplos prácticos, ejercicios resueltos y actividades de evaluación curricular desarrollados por el profesor **Manuel Alonso Argente**.

---

### 📑 Índice de Apartados y Actividades de la Unidad

- [**📋 8.0 Propuesta Didáctica: Bases de datos no relacionales (NoSQL)**](./ut0800.html)
- [**8.1 Bases de datos no relacionales (NoSQL)**](./ut0801.html)
- [**8.2 MongoDB**](./ut0802.html)
- [**8.3 Configuración entorno MongoDB**](./ut0803.html)

**Actividades Prácticas y Fichas de Trabajo:**

- [**✏️ ACT01 801**](./act_act01.html)
- [**✏️ ACT02 802**](./act_act02.html)
- [**✏️ ACT03 803**](./act_act03.html)

---

# 📖 Vista Completa de la Unidad

## 8.0 Propuesta Didáctica — Bases de datos no relacionales (NoSQL)

# **Bases de datos no relacionales (NoSQL)**

## **Propuesta didáctica**

En la última unidad finalizamos con el RA7: **Gestiona la información almacenada en bases de datos no relacionales, evaluando y utilizando las posibilidades que proporciona el sistema gestor**.

## **Criterios de evaluación**

### **Respecto al RA7:**

| Código | Descripción | Peso (%) | Herramientas Evaluación |
| --- | --- | --- | --- |
| **CE7a** | Se han caracterizado las bases de datos no relacionales | 10% | ACT801 (100%) |
| **CE7b** | Se han evaluado los principales tipos de bases de datos no relacionales | 25% | ACT801 (100%) |
| **CE7c** | Se han identificado los elementos utilizados en estas bases de datos | 25% | ACT802 (100%) |
| **CE7d** | Se han identificado distintas formas de gestión de la información según el tipo de base de datos no relacionales. | 25% | ACT803 (100%) |
| **CE7e** | Se han utilizado las herramientas del sistema gestor para la gestión de la información almacenada | 15% | ACT803 (100%) |

## **Contenidos**

### **Bases de datos no relacionales (NoSQL)**

- Introducción a las BBDD NoSQL.

- Tipos de BBDD NoSQL.

- MongoDB

- Elementos.

- Gestión de la información.

- Uso práctico de MongoDB.

> **📌 Cuestionario inicial**
> 

> 1. ¿Por qué aparecieron las soluciones NoSQL?

> 1. ¿Qué tipos de modelos NoSQL existen? ¿Puedes nombrar una solución software para cada uno de ellos?

> 1. ¿Qué son las bases de datos vectoriales y por qué han ganado relevancia recientemente?

> 1. ¿Qué es *MongoDB* y cuáles son sus principales características como base de datos NoSQL?

> 1. ¿Cuáles son las ventajas y desventajas de utilizar *MongoDB* como sistema de almacenamiento en memoria frente a otros sistemas de almacenamiento persistente?

> 1. ¿Cómo se diferencian las bases de datos documentales de las bases de datos relacionales tradicionales?

> 1. ¿Qué formato utiliza *MongoDB* para almacenar los documentos internamente?

> 1. ¿Qué comando se utiliza para insertar un documento en una colección en *MongoDB*?

> 1. ¿Cómo se accede a una base de datos específica en el shell de *MongoDB*?

> 1. ¿Qué operador se utiliza para seleccionar documentos que cumplen múltiples condiciones en una consulta?

> 1. ¿Qué operador se emplea para realizar consultas sobre campos que son arrays?

> 1. ¿Cómo se proyectan campos específicos en los resultados de una consulta?

> 1. ¿Qué operador permite realizar comparaciones entre campos dentro de un mismo documento?

> 1. ¿Qué función se utiliza para contar el número de documentos que cumplen una condición específica?

> 1. ¿Qué operador se utiliza para actualizar múltiples documentos que cumplen una condición?

> 1. ¿Cómo se realiza una búsqueda utilizando expresiones regulares en *MongoDB*?

> 1. ¿Cómo se eliminan documentos que cumplen una condición específica?

## **Programación de Aula (10 sesiones)**

En esta última unidad del módulo, y por consiguiente se termina el curso y temario impartido, tendrá una duración de 10 sesiones.

### **Calendario**

#### **Marzo 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 3 | 4 | 5 | **6 🛑** | **7 🛑** |
| 8 | 9 | 10 | 11 | 12 | **13 🛑** | **14 🛑** |
| 15 | 16 | **17 🛑** | **18 🛑** | **19 🛑** | **20 🛑** | **21 🛑** |
| 22 | **23📚** | **24 📚** | **25 🛑** | **26 🛑** | **27 🛑** | **28 🛑** |
| **29 🛑** | **30 🛑** | **31 🛑** |  |  |  |  |

#### **Abril 2027**

| Lunes | Martes | Miércoles | Jueves | Viernes | Sábado | Domingo |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  | **1 🛑** | **2 🛑** | **3 🛑** | **4 🛑** |
| **5 🛑** | **6 📚** | **7 📚** | 8 | **9 📚** | **10 🛑** | **11 🛑** |
| 12 | **13 📚** | 14 | 15 | 16 | **17 🛑** | **18 🛑** |
| 19 | 20 | 21 | 22 | 23 | **24 🛑** | **25 🛑** |
| 26 | 27 | 28 | 29 | 30 |  |  |

### **Sesiones**

| Sesión | Contenidos | Actividades | Criterios trabajados |
| --- | --- | --- | --- |
| 1 | 01 Introducción a las BBDD NoSQL |  | CE7a |
| 1 | 02 Tipos de BBDD NoSQL |  | CE7a, CE7b |
| 2 | 03 MongoDB 05 Puesta en marcha |  | CE7c, CE7e |
| 3 | 04 MongoDB. Elementos |  | CE7c |
| 3 | 05 Gestión de la información. Data Definition Language (DDL) |  | CE7d |
| 4 | 05 Gestión de la información. Data Management Language (DML) |  | CE7d |
| 5 | 05 Gestión de la información. Data Query Language (DQL) |  | CE7d |
| 6 | Actividades | ACT0801 -- ACT0802 --ACT0803 | CE7a, CE7b, CE7c, CE7d, CE7e |
| 7 | Actividades | ACT0801 -- ACT0802 --ACT0803 | CE7a, CE7b, CE7c, CE7d, CE7e |
| 8 | Actividades | ACT0801 -- ACT0802 --ACT0803 | CE7a, CE7b, CE7c, CE7d, CE7e |
| 9 | Actividades | ACT0801 -- ACT0802 --ACT0803 | CE7a, CE7b, CE7c, CE7d, CE7e |
| 10 | Actividades | ACT0801 -- ACT0802 --ACT0803 | CE7a, CE7b, CE7c, CE7d, CE7e |

---

## 8.1 Bases de datos no relacionales (NoSQL)

# **Bases de datos no relacionales (NoSQL)**

## **NoSQL**

Antes de definir **NoSQL**, conviene entender **por qué surgió**. A finales de los 2000, empresas como *Google*, *Amazon* o *Facebook* se enfrentaban a problemas que los SGBD relacionales no podían resolver eficientemente:

- Volumen: bases de datos de varios *petabytes* que no caben en un servidor único.

- Esquemas variables: los productos de un catálogo o los perfiles de usuario evolucionan continuamente y no encajan en un esquema rígido.

- Latencia baja a escala global: usuarios en todo el mundo esperando respuestas de milisegundos.

- Coste: escalar verticalmente con *hardware* especializado resulta prohibitivo.

Las publicaciones fundacionales del movimiento NoSQL son [BigTable](https://research.google/pubs/bigtable-a-distributed-storage-system-for-structured-data/) (Google, 2006) y [Dynamo](https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf) (Amazon, 2007), que inspiraron a buena parte de las soluciones actuales (*HBase*, *Cassandra*, *DynamoDB*…).

Dicho esto, si definimos **NoSQL** formalmente, podemos decir que se trata de un conjunto de tecnologías que permiten el procesamiento rápido y eficiente de conjuntos de datos dando la mayor importancia al rendimiento, la fiabilidad y la agilidad.

Si nos basamos en el acrónimo, el término da la sensación de que se refiere a cualquier almacén de datos que no sigue un modelo relacional, los datos no son relacionales y por tanto no utilizan SQL como lenguaje de consulta. Realmente implica que el *No* hace referencia a *not only*, es decir, que los sistemas NoSQL se centran en sistemas complementarios a los SGBD relacionales, que fijan sus prioridades en la escalabilidad y la disponibilidad en contra de la atomicidad y consistencia de los datos.

Así pues, la revolución NoSQL se basa en comprender que hay más de una manera de resolver los problemas. Hay vida más allá de los sistemas de bases de datos relacionales, y NoSQL permite elegir la mejor herramienta para cada situación, que en algunas ocasiones será una base de datos relacional, pero en otras no. Por lo tanto, más que sustitutos de los sistemas relacionales, las soluciones NoSQL se plantean como alternativas y complementarias a los sistemas gestores de bases de datos relacionales.

- **Clave-Valor**: Los almacenes clave-valor son las bases de datos NoSQL más simples. Cada elemento de la base de datos se almacena con un nombre de atributo (o clave) junto a su valor, a modo de diccionario. Los almacenes más conocidos son [Redis](https://redis.io), [Riak](https://riak.com) y [AWS DynamoDB](https://aws.amazon.com/es/dynamodb/). Algunos almacenes, como es el caso de *Redis*, permiten que cada valor tenga un tipo (por ejemplo, *integer*) lo cual añade funcionalidad extra.

### **Clasificación según el modelo de datos**

Los diferentes tipos de bases de datos NoSQL existentes se pueden agrupar tradicionalmente en cuatro categorías, a las que recientemente se ha añadido una quinta: las bases de datos vectoriales.

![Sistemes NoSQL](../img/assets_images_up08_12infografia-nosql.png)

#### **Clave-Valor**

Los almacenes clave-valor son las bases de datos NoSQL más simples. Cada elemento se almacena con un nombre de atributo (o **clave**) junto a su **valor**, a modo de diccionario. La clave es el único criterio de búsqueda, lo que las hace extremadamente rápidas para acceso directo, pero limitadas para consultas complejas.

|  |  |
| --- | --- |
| Elementos | Clave (string) y valor (string, número, lista, hash, conjunto…) |
| Operaciones típicas | `GET clave`, `SET clave valor`, `DEL clave` |
| Casos de uso | Caché de aplicaciones, gestión de sesiones, *leaderboards*, colas de mensajes ligeras |
| Productos representativos | [Redis](https://redis.io) / [Valkey](https://valkey.io/), [AWS DynamoDB](https://aws.amazon.com/es/dynamodb/), [Memcached](https://memcached.org/) |

#### **Documentales**

Cada clave se asocia a una estructura compleja que se conoce como **documento**, normalmente en formato JSON o BSON. Los documentos pueden contener pares clave-valor, arrays e incluso documentos anidados. A diferencia de clave-valor, los motores documentales permiten consultar por el contenido del documento (por cualquier campo, no solo por la clave).

|  |  |
| --- | --- |
| Elementos | Documento (≈ fila), colección (≈ tabla), campo (≈ columna) |
| Operaciones típicas | `insertOne`, `find`, `updateMany`, `aggregate` |
| Casos de uso | Catálogos de productos, gestión de contenidos (CMS), perfiles de usuario, datos de eventos |
| Productos representativos | [MongoDB](https://www.mongodb.com), [Couchbase](https://www.couchbase.com/), [Firestore](https://firebase.google.com/products/firestore) (en aplicaciones móviles y web) |

#### **Basados en columnas**

A pesar del nombre, no almacenan los datos columna por columna en el sentido analítico (eso lo hacen los formatos como *Parquet*), sino que organizan los datos por **familias de columnas**, donde cada fila puede tener un conjunto distinto de columnas dentro de la misma familia. Están optimizados para escrituras masivas y consultas sobre rangos amplios de filas.

|  |  |
| --- | --- |
| Elementos | *Keyspace* (≈ base de datos), tabla, fila, familia de columnas, columna |
| Operaciones típicas | `INSERT INTO`, `SELECT … WHERE partition_key = …` (en CQL, lenguaje similar a SQL) |
| Casos de uso | Registros de eventos a gran escala, datos de sensores IoT, *time series*, mensajería |
| Productos representativos | [Apache Cassandra](https://cassandra.apache.org/), [HBase](https://hbase.apache.org/), [ScyllaDB](https://www.scylladb.com/), [Google Bigtable](https://cloud.google.com/bigtable) |

#### **Grafos**

Los almacenes de grafos están diseñados para que las relaciones sean tan importantes como los propios datos: se representan como **nodos** (entidades) y **aristas** (relaciones), ambos con propiedades. Son ideales cuando las consultas se basan en navegar las conexiones (¿amigos de amigos?, ¿recomendaciones?, ¿detección de fraude?).

|  |  |
| --- | --- |
| Elementos | Nodos, aristas (relaciones dirigidas), propiedades, etiquetas |
| Operaciones típicas | En *Cypher* (lenguaje de *Neo4j*): `MATCH (a)-[:SIGUE]->(b) RETURN b` |
| Casos de uso | Redes sociales, motores de recomendación, detección de fraude, grafos de conocimiento |
| Productos representativos | [Neo4j](https://neo4j.com/), [AWS Neptune](https://aws.amazon.com/es/neptune/), [Memgraph](https://memgraph.com/), [ArangoDB](https://www.arangodb.com/) (multimodal) |

#### **Vectoriales**

Las bases de datos vectoriales son una categoría que ha emergido con fuerza desde 2022 a raíz del auge de los LLMs y los modelos de *embeddings*. Almacenan vectores de alta dimensionalidad (típicamente 384, 768 o 1536 dimensiones) y permiten realizar búsquedas por similitud semántica mediante algoritmos de vecinos más próximos aproximados (*ANN, Approximate Nearest Neighbours*).

|  |  |
| --- | --- |
| Elementos | Vector (lista de *floats*), metadatos asociados, índice (HNSW, IVF…) |
| Operaciones típicas | `upsert(id, vector, metadata)`, `query(vector, top_k=5)` |
| Casos de uso | Búsqueda semántica, RAG (*Retrieval Augmented Generation*) en aplicaciones con LLMs, recomendadores basados en *embeddings*, búsqueda de imágenes/audio similares |
| Productos representativos | [Pinecone](https://www.pinecone.io/), [Weaviate](https://weaviate.io/), [Chroma](https://www.trychroma.com/), [Qdrant](https://qdrant.tech/), [Milvus](https://milvus.io/), o la extensión [pgvector](https://github.com/pgvector/pgvector) para *PostgreSQL* |

> **📌 Bases de datos multimodales**
> 

> Cada vez más sistemas combinan varios modelos en un solo producto. *MongoDB Atlas* incluye *Atlas Vector Search*, *Redis* tiene un módulo vectorial, *PostgreSQL* con *pgvector* mezcla relacional y vectorial. La frontera entre tipos NoSQL es más difusa que hace 5 años.

### **Características**

Las bases de datos no relacionales (*NoSQL*) presentan características que las diferencian de las bases de datos relacionales. Sus principales características son:

1. **Flexibilidad en el esquema**: No requieren un esquema fijo, lo que permite almacenar datos con estructuras variadas y evolucionar sin grandes modificaciones. Es decir, son capaces de trabajar
   con datos estructurados, semi-estructurados y sin estructurar. Casi todas las implementaciones NoSQL ofrecen algún tipo de representación para datos sin esquema, lo que permite comenzar con una estructura y con el paso del tiempo, añadir nuevos campos, ya sean sencillos o anidados a datos ya existentes.

1. **Escalabilidad horizontal**: Están diseñadas para distribuir datos en múltiples servidores mediante técnicas como el *sharding* o particionado, lo que permite aumentar la capacidad del sistema simplemente añadiendo más nodos. A diferencia de las bases de datos relacionales, que suelen escalar verticalmente (aumentando la capacidad de un solo servidor), las bases de datos NoSQL pueden crecer de forma distribuida sin afectar el rendimiento, de un modo transparente para el desarrollador.

1. **Modelos de datos** diversos: Pueden organizarse en diferentes tipos de almacenamiento, que resuelven varios problemas que no se plantearon al definir el modelo relacional, como los modelos clave-valor (*Redis*), documental (*MongoDB*), columnar (*Cassandra*) o basada en grafos (*Neo4j*).

1. **Alta disponibilidad** y tolerancia a fallos: Utilizan replicación y distribución de datos en múltiples nodos para garantizar que el sistema continúe funcionando ante fallos de hardware o red. Algunos sistemas NoSQL implementan modelos de replicación primario-secundario (también llamado *leader-follower*, terminología que ha sustituido al clásico *master-slave*) o replicación distribuida sin nodo principal para asegurar la continuidad del servicio.

1. **Optimización para lectura/escritura masiva**: Estas bases de datos están diseñadas para gestionar grandes volúmenes de datos y transacciones de alta velocidad. Son ideales para aplicaciones con una carga intensa de escritura, como redes sociales, registros de sensores IoT o análisis de grandes volúmenes de datos en tiempo real.

1. **Consistencia eventual**: En lugar de seguir el estricto modelo ACID de las bases de datos relacionales, muchas bases de datos NoSQL priorizan la disponibilidad y la tolerancia a particiones, según el teorema CAP. Esto significa que, en algunos casos, los datos pueden no estar sincronizados en todos los nodos de manera inmediata, pero eventualmente alcanzan la consistencia. Este enfoque es útil para aplicaciones distribuidas donde la latencia es más crítica que la consistencia inmediata.

1. **Almacenamiento distribuido**: Pueden operar en entornos de computación en la nube y escalar dinámicamente según la demanda. Gracias a su arquitectura distribuida, son altamente eficientes para manejar datos en infraestructuras descentralizadas y en plataformas de servicios en la nube como *AWS*, *Google Cloud* o *Azure*.

Estas características hacen que las bases de datos NoSQL sean ideales para aplicaciones modernas como redes sociales, IoT, análisis de datos y sistemas en tiempo real.

Dicho esto, a diferencia de las bases de datos relacionales, donde SQL actúa como lenguaje común a casi todos los productos, en NoSQL no existe un lenguaje de consulta universal. Cada familia tiene su propia API o lenguaje: comandos en *Redis*, *aggregation pipeline* en *MongoDB*, CQL en *Cassandra*, *Cypher* o *Gremlin* en bases de grafos, SDKs específicos en bases vectoriales… La elección del tipo de base de datos condiciona profundamente cómo se diseñan las consultas y las estructuras de datos, lo que veremos en detalle en la siguiente unidad *MongoDB*.

---

## 8.2 MongoDB

# **MongoDB**

![Logo de MongoDB](../img/assets_images_up08_mongodb01.png)

[**MongoDB**](https://www.mongodb.com) es una de las bases de datos NoSQL más conocidas y empleadas. Sigue un modelo de datos documental, donde los documentos se basan en el formato JSON.

**MongoDB** destaca porque:

- Soporta esquemas dinámicos: diferentes documentos de una misma colección pueden tener atributos diferentes.

- Aunque inicialmente tenía un soporte limitado de *joins*, desde la versión 5.2 se pueden realizar incluso entre colecciones particionadas.

- Soporte de transacciones sólo a nivel de aplicación. Lo que en un SGBD relacional puede suponer múltiples operaciones, con *MongoDB* se puede hacer en una sola operación al insertar/actualizar todo un documento de una sola vez, pero si queremos crear una transacción entre dos documentos, la gestión la debe realizar el driver.

> **📌 huMONGOus**
> 

> Como curiosidad, su nombre viene de la palabra inglesa *humongous*, que significa gigantesco/enorme.

## **Puesta en Marcha**

En la actualidad,** MongoDB** se comercializa mediante tres productos:

- [**Mongo Atlas**](https://www.mongodb.com/developer/products/atlas/), como plataforma cloud, con una opción gratuita mediante un clúster de 512MB.

- [**MongoDB Community Edition**](https://www.mongodb.com/try/download/community), versión gratuita para trabajar on-premise, con versiones para Windows, MacOS y Linux.

- [**MongoDB Enterprise Advanced**](https://www.mongodb.com/products/mongodb-enterprise-advanced), versión de pago con soporte, herramientas avanzadas de monitorización y seguridad, y administración automatizada.

En nuestro caso, y para simplificar, trabajaremos con la versión cloud **Mongo Atlas**. Los pasos necesarios para su creación, configuración y uso, así como la conexión mediante *MongoDBCompass* los puedes encontrar en la sección de **Instalación MongoDB**.

## **Elementos**

Hay una serie de conceptos que conviene conocer antes de entrar en detalle:

![Elements de MongoDB](../img/assets_images_up08_mongodb02.png)

- *MongoDB* tiene el mismo concepto de **base de datos** que un SGBD relacional. Dentro de una instancia de *MongoDB* podemos tener 0 o más bases de datos, actuando cada una como un contenedor de alto nivel.

- Una base de datos tendrá 0 o más colecciones. Una **colección** es muy similar a lo que entendemos como tabla dentro de una base de datos relacional. *MongoDB* ofrece diferentes tipos de colecciones, desde las normales cuyo tamaño crece conforme lo hace el número de documentos, como las colecciones *capped*, las cuales tienen un tamaño predefinido y que pueden contener una cierta cantidad de información que se sustituirá por nueva cuando se llene.

- Las colecciones contienen 0 o más **documentos**, por lo que es similar a una fila o registro de una tabla relacional.

- Cada documento contiene 0 o más atributos, compuestos de **parejas clave/valor**. Cada uno de estos documentos no sigue ningún esquema, por lo que dos documentos de una misma colección pueden contener todos los atributos diferentes entre sí. Todo documento contiene un campo `_id` que hace la función de atributo identificador del documento.

Así pues, tenemos que una base de datos va a contener varias colecciones, donde cada colección contendrá un conjunto de documentos.

Además, *MongoDB* soporta **índices**, igual que cualquier RDBMS, para acelerar la búsqueda de datos. Al realizar cualquier consulta, se devuelve un **cursor**, con el cual podemos realizar operaciones como contar, ordenar, limitar o saltar documentos.

### **BSON**

Mediante *JavaScript* podemos crear objetos que se representan con JSON. Internamente, *MongoDB* almacena los documentos mediante BSON (*Binary JSON*). Podemos consultar la especificación en [BSONSpec.org](https://BSONSpec.org)

![Especificació BSON](../img/assets_images_up08_mongodb03.jpg)

BSON representa un **superset** de JSON ya que:

- Permite almacenar datos en binario

- Incluye un conjunto de tipos de datos no incluidos en JSON, como pueden ser `ObjectId`, `Date` o `BinData`.

- Diseñado para ser más eficiente en espacio y realizar búsquedas de forma más rápida.

Podemos consultar todos los tipos que soporta un objeto BSON en el [Manuel de MongoDB](https://docs.mongodb.org/manual/reference/bson-types/)

Un ejemplo de un objeto BSON podría ser:

> **📌 BSON**
> 

```sql
var yo = {
  nombre: "Aitor",
  apellidos: "Medrano",
  fnac: new Date("Oct 3, 1977"),
  hobbies: ["programación", "videojuegos", "baloncesto"],
  casado: true,
  hijos: 2,
  contacto: {
    bsky: "@aitormedrano.bsky.social",
    email: "a.medrano@edu.gva.es"
  },
  fechaCreacion: new Timestamp()
}
```

Los [documentos](https://www.mongodb.com/docs/manual/core/document/) BSON tienen las siguientes restricciones:

- No pueden tener un tamaño superior a 16 MB.

- El atributo `_id` queda reservado para la clave primaria.

- Desde *MongoDB* 5.0 los nombres de los campos pueden [empezar por `$` y/o contener el `.`](https://www.mongodb.com/docs/manual/core/dot-dollar-considerations), aunque en la medida de lo posible, es recomendable evitar su uso.

Además, *MongoDB*:

- No asegura que el orden de los campos se respete.

- Es sensible a los tipos de los datos

- Es sensible a las mayúsculas.

Por lo que estos documentos son distintos:

> **📌 JSON**
> 

```sql
{"edad": "18"}
{"edad": 18}
{"Edad": 18}
```

Si queremos validar si un documento JSON es válido, podemos usar [https://jsonlint.com/](https://jsonlint.com/). Hemos de tener en cuenta que sólo valida JSON y no BSON, por tanto nos dará errores en los tipos de datos propios de BSON.

### **Uso del shell**

Una vez ya tenemos en marcha *MongoDB*, llega el momento de conectarnos. Aunque utilizaremos *MongoDB Compass*, durante esta unidad vamos a practicar los diferentes comandos haciendo uso del cliente [`mongosh`](https://www.mongodb.com/docs/mongodb-shell/) (en versiones anteriores el comando utilizado era `mongo`). Para ello, en la parte superior derecha, tenemos la opción de `>_ Open MongoDB shell`.

El *shell* de *MongoDB* utiliza *JavaScript* como lenguaje de interacción con la base de datos, y como buen *shell*, mediante la flecha hacia arriba visualizaremos el último comando.

Si queremos ver las bases de datos que existen ejecutaremos el comando `show dbs`:

![shell show dbs](../img/assets_images_up08_mongodb04.png)

> **📌 Uso externo**
> 

> Si nos queremos conectar únicamente desde un terminal, podemos instalar únicamente el *shell* desde [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)

## **Data Definition Language (DDL)**

Conjunto de instrucciones sobre los METADATOS (Lenguaje de Definición de Datos):

- El **DDL** (**Data Definition Language**) se encarga de la creación, modificación y eliminación de los objetos/contenedores de información de la base de datos entre los que se encuentran, principalmente, las bases de datos, las tablas y los campos que, en nuestro SGBD no relacional documental (MongoDB) nos quedaremos con operaciones sobre **bases de datos**, **colecciones**, **vistas** e **índices**.

### **Operaciones sobre bases de datos**

Las operaciones sobre bases de datos se limitan a listar las BBDD existentes, conectarse a una BD, crear una BD o destruir una BD (y todas sus colecciones). Como ya vimos, serían estas instrucciones:

- **Listar** todas las bases de datos (recuerda que solo aparecen las que tienen colecciones)

  - `show databases` o `show dbs`

- **Crear** una BD (recurrimos a la misma orden que para conectarnos a una existente):

  - `use institutoBD`

- Para **borrar** una BD tenemos antes que asegurarnos que estamos conectados a ella:

  - `use institutoBD`

  - `db.dropDatabase()` /* ¡Cuidado! Tendremos que conectarnos a una BD para poder borrarla */

### **Operaciones sobre colecciones.**

#### **Crear y Listar**

Las operaciones sobre colecciones consistirán en crear, modificar y borrar una colección y en listarlas todas de manera simplificada y extendida.

- Tenemos un comando para enumerar todas las colecciones y otro para obtener la información detallada de cada una de ellas.

> **📌 MongoDB shell**
> 

```sql
use institutoBD
show collections /* ¡Cuidado! Sin el db. */
db.getCollectionInfos() /* ¡Cuidado! No olvides que es infos, y no info */
```

- Para crear una colección (equivale a **CREATE TABLE**) podemos crearla sin opciones, añadir opciones directamente, o crear una variable local en js con esas opciones y crear la colección usando esa variable.

> **📌 MongoDB shell**
> 

```sql
use institutoBD
db.createCollection("horarios") /* nombre colección + sin opciones */
db.createCollection("profesores", {capped:true, size: 1024, max:3}) /* colección + opciones */
let capada1mb3docs = {capped:true, size: 1024, max:3} /* Variable para capar a 1MB y 3 documentos */
db.createCollection("estudiantes", capada1mb3docs) /* colección + opciones en variable*/
db.getCollectionInfos()
```

Sintaxis de **createCollection**:

Las opciones más habituales son estas:

```sql
db.createCollection(<nombreColección>,[opciones])
```

- **capped**: permite definir una capped collection fijando un tamaño máximo en bytes. Se suele usar para guardar datos volátiles como un log de acceso. Por defecto=false

  - size: máximo en bytes (número entero). Por defecto=indefinido

  - max: núm. máx. de documentos que la colección admite. Por defecto=indefinido

- **validator**: documento que define las validaciones de cada campo, estableciendo ciertas restricciones sobre los documentos que puede contener esa colección.

En esta unidad de trabajo, solo usaremos las 3 primeras. Tenemos todas aquí: [Manuel MongoDB](https://www.mongodb.com/docs/manual/reference/method/db.createCollection/)

#### **Modificar**

- Para modificar una colección existente (el equivalente a un **ALTER TABLE**) usamos el comando `db.runCommand(collMod:"colección", [opciones])`. Pero solo permite modificar opciones que no veremos.

- En su lugar, cambiaremos de no capada a capada con la orden siguiente (no olvides las llaves) `db.runCommand({convertToCapped:"colección", [opciones]})`.

> **📌 MongoDB**
> 

```sql
use institutoBD
db.runCommand({convertToCapped:"horarios", size: 1024 } )
db.getCollectionInfos() /* ¡Cuidado! No olvides que es infos, y no info */
```

> **📌 ATENCIÓN**
> 

> collMod y convertToCapped son comandos y van sin comillas
max sólo es válida en createCollection, no en convertToCapped. Para cambiar el max de una colección existente tendremos que borrarla y crearla de nuevo.
Solo las "colecciones capadas" admiten límites en el número de documentos de una colección (max) o en el número de bytes (size).
Si la colección es “capped”, el campo size es siempre obligatorio, incluso cuando se especifica max. MongoDB elimina los documentos más antiguos si una colección alcanza el límite de tamaño máximo antes de alcanzar el recuento máximo de documentos. El valor de size debe ser mayor que 0 y menor o igual que 1024^5 (1 PB). Si no quieres especificar size, indica un número muy alto y listo.
La única manera de convertir una colección capada a no capada es borrar la colección y crearla de nuevo.

#### **Renombrar**

Para renombrar una colección existente usamos este comando:

> **📌 MongoDB**
> 

```sql
use institutoBD
db.profesores.renameCollection("docentes") /* ¡Cuidado! Nombre de la colección delante */
db.getCollectionInfos()
```

#### **Borrar**

Para borrar una colección (el equivalente a un **DROP TABLE**) desde la BD correcta haremos:

> **📌 MongoDB**
> 

```sql
use institutoBD
db.docentes.drop()
db.getCollectionInfos()
```

### **Operaciones sobre vistas**

#### **Crear**

En MongoDB podemos crear colecciones virtuales llamadas vistas que contienen consultas predefinidas complejas. Las operaciones sobre vistas consistirán en crear y borrar una vista.
Para crear una vista (el equivalente a un **CREATE VIEW**) desde la BD correcta haremos:

> **📌 MongoDB**
> 

```sql
use institutoBD
db.createView("vi_docentes", "docentes", [ ]) /* nombre de la vista + colección origen + opciones */
```

Como tercer parámetro podemos incluir (de manera opcional) varios parámetros para indicar qué datos queremos mostrar (lo que conocemos como SELECT) y qué datos queremos filtrar (lo que conocemos como WHERE). De momento indicaremos un array vacio con dos corchetes: [ ]
Tenemos toda la info aquí: [Create view](https://www.mongodb.com/docs/manual/core/views/create-view/)

#### **Borrar**

Para borrar una vista (el equivalente a un DROP VIEW) desde la BD correcta haremos:

> **📌 MongoDB**
> 

```sql
use institutoBD
db.vi_docentes.drop() /* nombre de la vista delante */
```

### **Operaciones sobre índices**

En MongoDB las colecciones se ordenan internamente por las claves primarias de esas colecciones, de manera que cualquier ordenación por esos campos es instantánea y bastante costosa cuando no se ordenan los resultados por esos campos.

Las operaciones sobre índices consistirán en crear, borrar un índice y listarlos todos.
Tenemos cuatro tipos de índices en MongoDB (simples, compuestos, únicos y dispersos). Veremos sólo los simples y los únicos. Tienes toda la info aquí: [indices](https://www.mongodb.com/docs/manual/indexes/)

#### **Crear**

Para crear un índice (el equivalente a un **CREATE INDEX**), supondremos que esas colecciones tienen ciertos campos en sus documentos y desde la BD haremos:

> **📌 MongoDB**
> 

```sql
use institutoBD
db.docentes.createIndex({"nombre":1}) /* índice ascendente simple en el campo nombre */
db.docentes.createIndex({"edad":-1}) /* índice descendente simple en el campo edad */
db.docentes.createIndex({"codP":1},{unique:true}) /* índice asc. Simp. único en campo codP */
```

#### **Listar**

Para listar todos los índices de una colección concreta desde la BD haremos:

> **📌 MongoDB**
> 

```sql
use institutoBD
db.docentes.getIndexes() /* nombre de la colección primero */
```

#### **Borrar**

Para borrar un índice (el equivalente a un **DROP INDEX**) la cosa no es tan simple, ya que no sabemos el “nombre del índice” hasta que no lo creamos. Por tanto, tenemos tres opciones para borrar un índice:

- **MÉTODO A)** Podemos ver el nombre que MongoDB le ha asignado al índice con getIndexes y ejecutar la orden dropIndex("nombredelindice")

- **MÉTODO B)** Podemos borrar el índice por su especificación en lugar de por su nombre usando dropIndex("especificación")

- **MÉTODO C)** Podemos borrar todos los índices de una colección con dropIndexes()

> **📌 MongoDB**
> 

```sql
use institutoBD
/* MÉTODO A */
db.docentes.getIndexes() /* vemos que el nombre del indice es nombre_1 */
db.docentes.dropIndex("nombre_1")
/* MÉTODO B */
db.docentes.dropIndex({ "edad" : -1 })
/* MÉTODO C */
db.docentes.dropIndexes()
```

## **Data Management Language (DML)**

### **Inserción de documentos (INSERT).**

Para insertar documentos en una colección debemos conectarnos a la BD que la contiene y ejecutar los comandos insertOne o insertMany, que nos permiten insertar un único documento o varios al mismo tiempo.

InsertOneInsertMany

```sql
var j_doc1 = {nombre:"Juan"}
var j_doc2 =
    {
        nombre:"Eva",
        apellidos:"García"
    }
db.docentes.insertOne(j_doc1)
db.docentes.insertOne(j_doc2)
```

```sql
db.docentes.insertOne({nombre:"juan"})
db.docentes.insertOne({nombre:"Eva", apellidos:"García"})
```

```sql
var j_doc1 = {nombre:"Juan"}
var j_doc2 =
    {
        nombre:"Eva",
        apellidos:"García"
    }
db.docentes.insertMany([j_doc1, j_doc2])
```

```sql
db.docentes.insertMany([
{nombre:"Juan"},{nombre:"Eva" , apellidos:"García"}])
```

#### **ObjectId**

En **MongoDB**, el **atributo _id** es único dentro de la colección, y hace la función de clave primaria. Se le asocia un **ObjectId**, el cual es un tipo BSON de 12 bytes que se crea mediante:

- el timestamp actual (4 bytes)

- un valor aleatorio y único por máquina y proceso (5 bytes)

- un contador inicializado a número aleatorio (3 bytes).

Este objeto lo crea el driver y no MongoDB, por lo cual no deberemos considerar que siguen un orden concreto, ya que clientes diferentes pueden tener timestamps desincronizados. Lo que sí que podemos obtener a partir del ObjectId es la fecha de creación del documento, mediante el método **getTimestamp()** del atributo _id.
Obteniendo la fecha de creación de un documento:

> **📌 MongoDB**
> 

```sql
>db.docentes.findOne().id
<ObjectId('680935e01b574ba3dce81fd3')
>db.docentes.findOne().-id.getTimestamp()
>2025-04-23T18:48:00.000Z
```

Este identificador es global, único e inmutable. Esto es, no habrá dos repetidos y una vez un documento tiene un `_id`, éste no se puede modificar.
Si en la definición del objeto a insertar no ponemos el atributo identificador, **MongoDB** creará uno de manera automática. Si lo ponemos nosotros de manera explícita, **MongoDB** no añadirá ningún `ObjectId`. Eso sí, debemos asegurarnos que sea único (podemos usar números, cadenas, etc…​).
Por lo tanto, podemos asignar un identificador al insertar:

> **📌 MongoDB**
> 

```sql
db.docente.insertOne({_id:4, nombre:"Marina", edad:17 }) // { acknowledged: true, insertedIds: { '0': 4 } }
```

O también, si queremos podemos hacer que el `_id` de un documento sea un documento en sí, y no un entero, para ello, al insertarlo, podemos asignarle un objeto JSON al atributo identificador:

> **📌 MongoDB**
> 

```sql
db.docente.insertOne({_id:{nombre:'Manuel', apellidos:'Alonso', bsky:’@malonsoa.bsky.social'}, ciudad:’Alberic'})
// {
//  acknowledged: true,
//  insertedId: {
//      nombre: ‘Manuel’,
//      apellidos: ‘Alonso’,
//      bsky: ‘@malonsoa.bsky.social’
//  }
// }
```

> **📌 Ejemplo indicando id**
> 

> Para poder hacer esta ejecución tenemos que borrar la colección de estudiantes y volverla a crear, recordad que estaba capada a solamente 3 documentos.

```sql
// crea varios documentos
var j_est1 = {_id: 100, nombre:"Sergio", apellidos:"Gracia Merinda", email:"sergio@gmail.com", edad:19, nota:5}
var j_est2 = {_id: 200, nombre:"Pablo", apellidos:"Concar López", email:"concarlopez@gmail.com", nota:6}
var j_est3 = {_id: 300, nombre:"Eva", apellidos:"Gredos Martínez", email:"gredoseva@gmail.com", edad:13, nota:7}
var j_est4 = {_id: 400, nombre:"Miranda", apellidos:"Aranda Bada", email:"indo@arandabada.com", edad:49, nota:8}
var j_est5 = {_id: 500, nombre:"Gabriel", apellidos:"Muro Menéndez", edad:12, nota:2}
var j_est6 = {_id: 600, nombre:"Ana", apellidos:"Gracia Merinda", email:"ana@gmail.com", edad:19, nota:4}
var j_est7 = {_id: 700, nombre:"Tania", apellidos:"Concar López", email:"tania@gmail.com", nota:6}
var j_est8 = {_id: 800, nombre:"Miguel", apellidos:"Gredos Martínez", email:"miguel@gmail.com", edad:39, nota:9}
var j_est9 = {_id: 900, nombre:"Álvaro", apellidos:"Aranda Bada", email:"diana@genial.com", edad:49, nota:1}
var j_est10 = {_id: 1000 , nombre:"Diana", apellidos:"Muro Menéndez", edad:29, nota:7}
// inserta esos documentos en la colección
db.estudiantes.insertMany([j_est1, j_est2, j_est3, j_est4, j_est5, j_est6, j_est7, j_est8, j_est9, j_est10])
```

### **Actualización de documentos (Update)**

Para actualizar documentos en una colección debemos conectarnos a la bbdd que la contiene y ejecutar los comandos **updateOne** o **updateMany**, que nos permiten actualizar un único documento (el primero que encuentre ordenado por _id) o todos los que cumplan la condición.

> **📌 MongoDB**
> 

```sql
//SINTAXIS para actualizar los documentos
db.estidiantes.updateOne(filtro,accion)
db.estidiantes.updateMany(filtro,accion)
//OPERADORES para <accion> (CON SÍMBOLO DÓLAR):
$set:json //asigna un valor a un campo {campo1:"sergio"}
$unset:json //elimina un campo y su valor {campo1:"sergio"}
$inc:json //incrementa en x unidades el valor del campo indicado campo {campo1:5}
$rename:json //cambia un campo de nombre {campo1:campo2}
//OPCIONES de UPDATE (SIN SÍMBOLO DÓLAR):
upsert:true/false //si ningún dococumento cumple el <filtro> se inserta el json del $set al final
```

> **📌 Ejemplos update**
> 

> La acción es siempre obligatoria y el filtro, si no existe, hay que indicarlo como {}.

```sql
//Ejemplos:
//a) Actualización de todos los documentos que cumplan un filtro determinado:
    var j_filtro = {nombre:"Pedro"}
    var j_set = {nota:5}
    var j_accion = {$set:j_set}
    db.<coleccion>.updateMany(j_filtro, j_accion)
//b) Actualización del primer documento que cumpla un filtro determinado:
// Con updateOne se recomienda usar el _id en el filtro para asegurarnos que se actualiza el
    documento que queremos que se actualice
    db.<coleccion>.updateOne(j_filtro, j_accion)
//c) Actualización de todos los documentos de una colección
// Para no usar filtro, tenemos que dejar expresamente en blanco el filtro, como hacíamos con el
    find cuando queríamos aplicar una proyección sin filtrar
    db.<coleccion>.updateMany({}, j_accion)
//d) Actualización de todos documentos de la colección que cumplen el filtro y, si ninguno lo cumple, inserto un nuevo
//Si el <filtro> NO se cumple inserto un <json> nuevo con el o los campos del $set
    var j_opciones = {upsert:true}
    db.<coleccion>.updateMany(j_filtro, j_accion, j_opciones)
//e) Borrado de los valores de un campo
    var j_set = {nota:""}
    var j_accion = {$set:j_set}
    db.<coleccion>.updateMany(j_filtro, j_accion)
//f) Borrado de un campo y sus valores
    var j_set = {nota:1}
    var j_accion = {$unset:j_set}
    db.<coleccion>.updateMany(j_filtro, j_accion)
//g) Borrado de dos campos y sus valores
    var j_set = {nota:1, nombre:1}
    var j_accion = {$unset:j_set}
    db.<coleccion>.updateMany(j_filtro, j_accion)
//Variantes válidas:
    db.<col>.updateOne(j_filtro, j_accion)
    db.<col>.updateOne({}, j_accion)
    db.<col>.updateOne({}, j_accion, j_opciones
```

#### **Actividades**

**Actividad 1**

> **📌 Enunciado**
> 

> - Sube +1 punto la nota de los estudiantes >30 años.

> - Muestra el antes y el después (solo apellidos y nota).

> - Déjalo como estaba antes para poder ejecutar este script varias veces.

> **Operadores de búsqueda**

| Operador | Comparador |
| --- | --- |
| [$lt](https://www.mongodb.com/docs/manual/reference/operator/query/lt/) | menor que (<) |
| [$lte](https://www.mongodb.com/docs/manual/reference/operator/query/lte/) | menor o igual que (≤) |
| [$gt](https://www.mongodb.com/docs/manual/reference/operator/query/gt/) | mayor que (>) |
| [$gte](https://www.mongodb.com/docs/manual/reference/operator/query/gte/) | mayor o igual que (≥) |
| [$eq](https://www.mongodb.com/docs/manual/reference/operator/query/eq/#mongodb-query-op.-eq) | Igual (=) |
| [$in](https://www.mongodb.com/docs/manual/reference/operator/query/in/#mongodb-query-op.-in) | En la lista (in) |
| [$ne](https://www.mongodb.com/docs/manual/reference/operator/query/ne/#mongodb-query-op.-ne) | No igual a (único valor) |
| [$nin](https://www.mongodb.com/docs/manual/reference/operator/query/nin/#mongodb-query-op.-nin) | No está en la lista (not in) |

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_proyeccion = {apellidos: 1, nota:1, _id: 0}
var j_valor = {$gt:30}
var j_filtro = {edad: j_valor}
db.estudiantes.find(j_filtro,j_proyeccion)
var j_valor = {nota: 1}
var j_accion = {$inc: j_valor}
db.estudiantes.updateMany(j_filtro, j_accion)
db.estudiantes.find(j_filtro,j_proyeccion)
var j_valor = {nota: -1}
var j_accion = {$inc: j_valor}
db.estudiantes.updateMany(j_filtro, j_accion)
db.estudiantes.find(j_filtro,j_proyeccion)
```

</details>

**Actividad 2**

> **📌 Enunciado**
> 

> - Cambia el email graciamerinda@gmail.com por gracia@gmail.com.

> - Muestra el antes y el después (solo los emails).

> - Déjalo como estaba antes para poder ejecutar este script varias veces.

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_filtro = {email:"graciamerinda@gmail.com"}
var j_proyeccion = {email:1,_id:0}
db.estudiantes.find(j_filtro,j_proyeccion)
var j_valor = {email:"gracia@gmail.com"}
var j_accion ={$set:j_valor}
db.estudiantes.updateOne(j_filtro,j_accion)
var j_filtro = {email:"gracia@gmail.com"}
db.estudiantes.find(j_filtro,j_proyeccion)
var j_valor = {email:"graciamerinda@gmail.com"}
var j_accion ={$set:j_valor}
db.estudiantes.updateOne(j_filtro,j_accion)
var j_filtro = {email:"graciamerinda@gmail.com"}
db.estudiantes.find(j_filtro,j_proyeccion)
```

</details>

**Actividad 3**

> **📌 Enunciado**
> 

> - Baja un punto a todos los estudiantes.

> - Muestra el antes y el después (solo apellidos y nota).

> - Déjalo como estaba antes para poder ejecutar este script varias veces.

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_proyeccion = {apellidos: 1, nota:1, _id: 0}
db.estudiantes.find({},j_proyeccion)
var j_valor = {nota: -1}
var j_accion = {$inc: j_valor}
db.estudiantes.updateMany({}, j_accion)
db.estudiantes.find({},j_proyeccion)
var j_valor = {nota: 1}
var j_accion = {$inc: j_valor}
db.estudiantes.updateMany({}, j_accion)
db.estudiantes.find({},j_proyeccion)
```

</details>

**Actividad 4**

> **📌 Enunciado**
> 

> - Sube un punto al primer estudiante que encuentres.

> - Borra su email y sus apellidos, y elimina su campo edad.

> - Muestra el antes y el después (solo _id, apellidos y nota).

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_proyeccion = {apellidos: 1, nota:1}
db.estudiantes.findOne({},j_proyeccion)
var j_valor1 = {apellidos: "", email:""}
var j_accion1 = {$set: j_valor1}
var j_valor2 = {edad:1}
var j_accion2 = {$unset: j_valor2}
var j_valor3 = {nota:+1}
var j_accion3 = {$inc: j_valor3}
db.estudiantes.updateOne({}, j_accion1)
db.estudiantes.updateOne({}, j_accion2)
db.estudiantes.updateOne({}, j_accion3)
db.estudiantes.findOne({},j_proyeccion)
```

</details>

### **Borrado de documentos (Delete)**

Para borrar documentos en una colección debemos conectarnos a la base de datos y ejecutar los comandos deleteOne o deleteMany, que nos permiten borrar un único documento (el primero que encuentre ordenado por _id) o todos los que cumplan la condición.

> **📌 MongoDB**
> 

```sql
//SINTAXIS para borrar los documentos
    db.coleccion.deleteOne(filtro)
    db.coleccion.deleteMany(filtro)
//Ejemplos:
//a) Borrado de todos los documentos que tengan como nombre “Pedro”
    var j_filtro = {nombre:"Pedro"}
    db.coleccion.deleteMany(j_filtro)
//o también
    var j_valor = {nombre:"Pedro"}
    var j_filtro = {$eq:j_valor}
    db.coleccion.deleteMany(j_filtro)
//b) Borrado del primer documento que encuentre con nota > 5
    var j_valor = {$gt:5}
    var j_filtro = {nota: j_valor}
    db.coleccion.deleteOne(j_filtro)
//c) Borrado de todos los documentos de una colección (truncate)
    db.coleccion.deleteMany({})
//Variantes válidas:
    db.col.deleteOne(j_filtro)
    db.col.deleteOne({})
    db.col.deleteMany (j_filtro)
    db.col.deleteMany({})
```

#### **Actividades**

Antes de ejecutar estas actividades deberemos ejecutar de nuevo la carga de documentos de estudiantes.

**Actividad 1**

> **📌 Enunciado**
> 

> - Borra los estudiantes mayores de 30 años.

> - Muestra el antes y el después (solo apellidos y edad)

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_proyeccion = {apellidos: 1, edad:1, _id: 0}
var j_valor = {$gt:30}
var j_filtro = {edad: j_valor}
db.estudiantes.find(j_filtro,j_proyeccion)
db.estudiantes.deleteMany(j_filtro)
db.estudiantes.find(j_filtro,j_proyeccion)
```

</details>

**Actividad 2**

> **📌 Enunciado**
> 

> - Borra el primer estudiante que tenga nota <5

> - Muestra el antes y el después (solo apellidos y nota)

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_proyeccion = {apellidos: 1, nota:1, _id: 0}
var j_valor = {$lt:5}
var j_filtro = {nota: j_valor}
db.estudiantes.find(j_filtro, j_proyeccion)
db.estudiantes.deleteOne(j_filtro)
db.estudiantes.find(j_filtro, j_proyeccion)
```

</details>

**Actividad 3**

> **📌 Enunciado**
> 

> - Borra el primer estudiante que encuentres

> - Muestra el antes y el después (solo apellidos y _id)

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_proyeccion = {apellidos: 1}
db.estudiantes.find({}, j_proyeccion)
db.estudiantes.deleteOne({})
db.estudiantes.find({}, j_proyeccion)
```

</details>

## **Data Query Language (DQL)**

El **Lenguaje de Consultas de Datos** o Data Query Language (DQL) nos permite establecer una “conversación con la BD” para obtener combinaciones de datos a partir de un enunciado o consulta.
Para leer documentos de una colección usamos el comando `find`.

> **📌 MongoDB**
> 

```sql
db.colección>.find(filtro, proyección).operaciones
filtro = {condición}
proyección = {campo1:1/0, ... , campoN:1/0}
operaciones = .sort(condición) / .limit(num) / .count()
```

- **filtro**. *Opcional*. Filtra qué documentos mostrar, usando operadores.

- **proyección**. *Opcional*. Filtra qué campos mostrar.

- **operaciones**. *Opcional*. Aplica una operación al resultado (como ordenar).

### **Filtros**

> **📌 MongoDB**
> 

```sql
//OPERADORES genéricos (CON SÍMBOLO DÓLAR)
    $exists:true/false //el campo debe existir (o no)
    $and[,,,], $or[,,,], $not[,,,]: //acumulación de condiciones
    $in[,,,], $nin[,,,]: //el campo debe estar (o no) en ese conjunto de valores
    $gt[]://val (mayor que)
    $gte[]://val (mayor o igual que)
    $lt[]://val (menor que)
    $lte[]://val (menor o igual que)
    $ne[]://val (no igual que)
    $eq[]://val (igual que)
    $in[]://val (en la lista)
    $nin[]://val (no está en la lista)
//Ejemplos:
    db.estudiantes.find({nombre:"Sergio"})
    db.estudiantes.find({$and:[{nombre:"Sergio"}, {email:{$exists:true}}]})
```

#### **Actividades**

**Actividad 1**

> **📌 Enunciado**
> 

> - Find sin operadores

> - Muestra todos los documentos que tienen como nombre "Sergio”

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_valor1 = "Sergio"
var j_filtro1 = {nombre:j_valor1}
db.estudiantes.find(j_filtro1)
```

</details>

**Actividad 2**

> **📌 Enunciado**
> 

> - Find con $exists

> - Muestra todos los documentos que NO tienen un campo llamado email

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_valor1 = "Sergio"
var j_filtro1 = {nombre:j_valor1}
db.estudiantes.find(j_filtro1)
```

</details>

**Actividad 3**

> **📌 Enunciado**
> 

> - Find con $or

> - Muestra todos los documentos que NO tienen un campo llamado email

> - o tienen de nombre "Sergio"

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_valor1 = "Sergio"
var j_filtro1 = {nombre:j_valor1}
db.estudiantes.find(j_filtro1)
```

</details>

### **Proyecciones**

**MongoDB** nos permite ocultar o mostrar ciertos campos de cada documento. Utiliza el formato `{campo: valor, campo:valor}`, de manera que si el valor es 1 se incluirá ese campo.
Por defecto, se muestran todos los campos no asociados expresamente al valor 0 excepto si hay algún campo a 1. En este caso, NO puede haber campos a 0 (salvo el `_id`). Es decir, si indico que dos, tres o cuatro campos concretos deben aparecer, solo aparecerán esos dos, tres o cuatro.

> **📌 MongoDB**
> 

```sql
db.estudiantes.find({}, {nombre:1, apellidos:1})
db.estudiantes.find({}, {_id:0, apellidos:1})
```

#### **Actividades**

**Actividad 1**

> **📌 Enunciado**
> 

> - Mostrar solo los nombres (sin el _ID).

> - Hago una proyección, con el filtro vacío indicando que solo quiero el campo nombre.

> - Al indicar un campo a 1, ya se eliminan todos los demás (apellidos y email, en este caso).

> - ¡NO se elimina el _id! Hay que indicarlo expresamente.

> - Si no hay filtro definido, hay que indicarlo vacío {}.

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_campos_proyeccion = {nombre:1, _id:0}
db.estudiantes.find({}, j_campos_proyeccion)
```

</details>

**Actividad 2**

> **📌 Enunciado**
> 

> - Mostrar solo nombre y apellidos (con el _ID)

> - Hago una proyección, con el filtro vacío indicando que solo quiero esos dos campos

> - Al indicar un campo a 1, ya se eliminan todos los demás (el email, en este caso)

> - Si no hay filtro definido, hay que indicarlo vacío {}.

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_campos_proyeccion = {nombre:1, apellidos:1}
db.estudiantes.find({}, j_campos_proyeccion)
```

</details>

**Actividad 3**

> **📌 Enunciado**
> 

> - Mostrar todos los campos salvo el _id

> - En este caso, debemos forzar a que aparezca el _id

> - Recuerda que el _id es el único campo que debo marcar a 0 si no lo quiero ver

> - Si no hay filtro definido, hay que indicarlo vacío {}.

<details markdown="1">

<summary>💡 Solució</summary>

```sql
var j_campos_proyeccion = {_id:0}
db.estudiantes.find({}, j_campos_proyeccion)
```

</details>

---

## 8.3 Configuración entorno MongoDB

# **Configuración entorno MongoDB**

Para configurar nuestro entorno de MongoDB deberemos realizar dos acciones, crear un clúster en el cluod de Mongo Atlas e instalar MongoDB Compass (ID de MongoDB) en nuestro ordenador para conectarnos al cloud.

## **Mongo Atlas**

Si, en cambio, preferimos una solución *cloud*, disponemos de [Mongo Atlas](https://www.mongodb.com/es/atlas), que nos ofrece de manera gratuita un clúster compartido de servidores con 3 nodos y 512 MB para datos. Si queremos una solución *serverless* o un servidor dedicado, ya tendremos que [pasar por caja](https://www.mongodb.com/pricing).

![MongoDB - Pantalla inici en MongoDB](../img/assets_images_up08_MongoDBInstalacion00.png)

Para comenzar a utilizar *Mongo Atlas* el primer paso es [registrarnos](https://www.mongodb.com/cloud/atlas/register) y completar un cuestionario sobre nuestro uso.

![MongoDB - registre en MongoDB](../img/assets_images_up08_mongodbInstalacion02.png)

1. 

Al verificar nuestra cuenta, podemos identificar el uso que le vamos a dar a nuestro cluster de bbdd. Podemos indicarlo o saltar esta opción con “skip personalization”.

![MongoDB - registre en MongoDB](../img/assets_images_up08_mongodbInstalacion03.png)

1. 

Creamos el clúster de despliegue. En nuestro caso, hemos realizado el despliegue en AWS en la región de Paris (`eu-west-3`) y dejado el nombre por defecto, `Cluster 0`.

![MongoDB - Elecció del clúster](../img/assets_images_up08_mongodbInstalacion04.png)

1. 

Creamos un usuario/contraseña para autenticar nuestra conexión. En nuestro caso, hemos creado el usuario `bbdd1rDAW` con la contraseña `bbdd1rDAW` (después la podemos modificar desde el menú **Security -> Database Access**).

![MongoDB - Configuració de l'usuari](../img/assets_images_up08_mongodbInstalacion05.png)

1. 

En el siguiente paso elegiremos el método de conexión a MongoDB Atlas. En nuestro caso elegiremos MongoDB Compass
 

![MongoDB - Mètode connexió](../img/assets_images_up08_mongodbInstalacion06.png)

1. 

En el último paso tendremos la posibilidad de bajarnos MongoDB Compass si no lo tenemos aun instalado y nos mostrará la cadena de conexión

![MongoDB - Selecció connexión](../img/assets_images_up08_mongodbInstalacion07.png)

1. 

Una vez realizados los dos pasos anteriores, comenzará la creación del clúster, la cual puede tardar de 2 a 3 minutos.

![MongoDB - cluster](../img/assets_images_up08_mongodbInstalacion08.png)

1. 

A continuación, cargaremos los datos de ejemplo. Para ello, en el menú con los tres puntos (`...`), elegiremos la opción *Load Sample Dataset*. Una vez haya finalizado, podremos ver los datos cargados pulsando sobre el botón *Browse Collections*:

![MongoDB - Carrega Dades](../img/assets_images_up08_mongodbInstalacion09.png)

Finalmente, para obtener la cadena de conexión, desde el *dashboard* del clúster con la opción *Connect* o desde la pestaña *Cmd Line Tools* del propio clúster, podremos obtener la [cadena de conexión](https://www.mongodb.com/docs/manual/reference/connection-string), que tendrá un formato similar a :

```sql
mongodb+srv://usuario:password@host/basededatos
```

En versiones anteriores, una herramienta de terceros bastante utilizada era [*RoboMongo*](http://robomongo.org) / *Robo3T* / [*Studio3T*](https://studio3t.com/) el cual extiende el shell y ofrece un IDE más amigable. A día de hoy, *MongoDB* tiene su propio IDE conocido como [MongoDB Compass](https://www.mongodb.com/es/products/compass).

## **MongoDB Compass**

La herramienta que vamos a utilizar es [*MongoDB Compass*](https://www.mongodb.com/es/products/compass), que facilita la exploración y manipulación de los datos. De una manera flexible e intuitiva, **Compass** ofrece visualizaciones detalladas de los esquemas, métricas de rendimiento en tiempo real así como herramientas para la creación de consultas.

Existen tres versiones de **Compass**, una completa con todas las características, una de sólo lectura sin posibilidad de insertar, modificar o eliminar datos (perfecta para analítica de datos) y una última versión *isolated* que solo permite la conexión a una instancia local.

Una vez descargada e instalada la versión que nos interesa, tras crear la conexión a partir de la cadena de conexión (similar a `mongodb+srv://<usuario>:<contraseña>@cluster0.4hm7u8y.mongodb.net/test`), veremos en el menú de la izquierda todas las conexiones a servidores MongoDB almacenadas y las diferentes bases de datos de las respectivas conexiones:

na vez descargada e instalada la versión que nos interesa, estamos ya en disposición para conectarnos a MongoDB Atlas por medio de MongoDB Compass. Accedemos a la aplicación, pulsamos en nueva conexión y pegamos la cadena de conexión facilitada por Atlas: mongodb+srv://bbdd1rDAW: bbdd1rDAW @cluster0.t94ipem.mongodb.net/

![MongoDB - connexió compass](../img/assets_images_up08_mongodbInstalacion10.png)

Si seleccionamos una base de datos concreta, y de ella, una colección en el menú de la izquierda, en el panel central tendremos una visualización de los datos contenidos, así como opciones para analizar su esquema, realizar consultas agregadas, editar los índices, etc... Además, podremos realizar consultas sobre los datos:

![MongoDB - connexió compass](../img/assets_images_up08_mongodbInstalacion11.png)

> **📌 mongosh en Compass**
> 

> Tanto sobre el nombre de la conexión (dejando el ratón encima aparecerá un icono), como desde la parte superior derecha, podemos conectarnos desde un *shell* similar a `mongosh`.

---

## ✏️ Actividades y Prácticas de la Unidad


---

### Actividad Práctica ACT01 — 801

# Actividad 801

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `801_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA7: Gestiona la información almacenada en bases de datos no relacionales, evaluando y utilizando las posibilidades que proporciona el sistema gestor.

>   - CE7. a)  Se han caracterizado las bases de datos no relacionales. (100%)

>   - CE7. b) Se han evaluado los principales tipos de bases de datos no relacionales (100%)

## **Ejercicio 1**

Para cada uno de los cuatro modelos de datos NoSQL, explica en un párrafo en qué consiste, elige uno de los productos más representativos de dicho tipo, y además del enlace, averigua el comando Docker para lanzar el servicio y cómo insertar un dato.

A continuación, para cada caso de uso, identifica qué modelo NoSQL sería más adecuado y justifica tu respuesta:

- Una red social con usuarios que siguen a otros usuarios.

- Un sistema de carrito de compras en línea.

- Un catálogo de productos.

- Un sistema de análisis de datos de sensores IoT.

- Un servicio de caché para una aplicación web.

---

### Actividad Práctica ACT02 — 802

# Actividad 802

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `803_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA7: Gestiona la información almacenada en bases de datos no relacionales, evaluando y utilizando las posibilidades que proporciona el sistema gestor.

>   - CE7. c) Se han identificado los elementos utilizados en estas bases de datos. (100%)

## **Actividad 1**

El objetivo de esta actividad es documentar el alta en MongoDB Atlas y la instalación de MongoDB Compass. Para ello se realizará un documento con Portada, indice y los apartados de la instalación.

Para demostrar que es própio, todas las capturas de pantalla se deberán hacer de la pantalla completa (barra de menu, reloj, etc)

---

### Actividad Práctica ACT03 — 803

# **Actividad 803**

> **📌 Entrega**
> 

> - La entrega será un **fichero pdf** que contenga la respuesta a las preguntas de la actividad.

> - El nombre del fichero debe ser `803_NombreApellidos.pdf`.

> - Se deberá entregar en la tarea correspondiente de Aules en tiempo y forma.

> **📌 Se valorará**
> 

> Se valorará:

> - La claridad de la respuesta.

> - La correcta maquetación del documento.

> - Respuesta correcta o aproximación a la misma.

> Esta actividad servirá para calificar:

> - RA7: Gestiona la información almacenada en bases de datos no relacionales, evaluando y utilizando las posibilidades que proporciona el sistema gestor.

>   - CE7. d) Se han identificado distintas formas de gestión de la información según el tipo de base de datos no relacionales. (100%)

>   - CE7. e) Se han utilizado las herramientas del sistema gestor para la gestión de la información almacenada. (100%)

## **Ejercicio 1**

**Base de datos y colecciones.**
Diseñar y gestionar una base de datos NoSQL con MongoDB que represente una plataforma de cursos online. La base de datos se llamará “formacion”.
La base de datos contará con el siguiente listado de colecciones.

| Colección | Descripción |
| --- | --- |
| cursos | Contiene información sobre cada curso ofertado |
| alumnos | Datos de los estudiantes |
| matriculas | Vincula a los alumnos con los cursos |
| docentes | Datos del profesorado |
| evaluaciones | Resultados de los alumnos en cada curso |

## **Ejercicio 2**

**Crear los documentos para las colecciones**

1. Colección: **cursos**

  - Doc1: nombre: "HTML y CSS", horas: 50, nivel: "básico", modalidad: "online", finalizado: false

  - Doc2: nombre: "JavaScript", horas: 80, nivel: "intermedio", modalidad: "online", finalizado: false

  - Doc3:     nombre: "Python", horas: 90, nivel: "intermedio", modalidad: "presencial", finalizado: false

  - Doc4:     nombre: "Bases de Datos NoSQL", horas: 60, nivel: "intermedio", modalidad: "online", finalizado: true

  - Doc5:     nombre: " Desarrollo Full Stack", horas: 120, nivel: "avanzado", modalidad: "presencial", finalizado: false

1. Colección: **alumnos**

  - Doc1:     nombre: "Lucía", email: "lucia@mail.com", ciudad: "València"

  - Doc2:     nombre: "Mario", email: "mario@mail.com", ciudad: "Alacant"

  - Doc3:     nombre: "Eva", email: "eva@mail.com", ciudad: "Castelló"

  - Doc4:     nombre: "Raúl", email: "raúl@mail.com", ciudad: "Elx"

  - Doc5:     nombre: "Claudia", email: "claudia@mail.com", ciudad: "València"

1. Colección: **docentes**. Cada docente hace referencia a uno o varios cursos.

  - Doc1:     nombre: "Laura", especialidad: "Frontend", cursos: ["HTML y CSS", "JavaScript"]

  - Doc2:     nombre: "Carlos", especialidad: "Backend", cursos: ["Python"]

  - Doc3:     nombre: " Sofía ", especialidad: " Bases de datos", cursos: ["Bases de Datos NoSQL"]

  - Doc4:     nombre: " Manuel ", especialidad: " Full Stack ", cursos: ["Desarrollo Full Stack"]

1. Colección: **matriculas**. Cada matrícula referencia un curso y un alumno por su nombre.

  - Doc1:     alumno: "Lucía", curso: "HTML y CSS", fecha: "2025-03-01"

  - Doc2:     alumno: "Mario", curso: "JavaScript", fecha: "2025-03-15"

  - Doc3:     alumno: "Eva", curso: "Python", fecha: "2025-03-20"

  - Doc4:     alumno: " Raúl", curso: " Bases de Datos NoSQL", fecha: "2025-04-15"

  - Doc5:     alumno: "Claudia", curso: "JavaScript", fecha: "2025-04-20"

1. Colección: evaluaciones

  - Doc1:     alumno: "Lucía", curso: "HTML y CSS", nota: 8.5

  - Doc2:     alumno: "Mario", curso: "JavaScript", nota: 7.0

  - Doc3:     alumno: "Eva", curso: "Python", nota: 9.2

  - Doc4:     alumno: " Raúl", curso: " Bases de Datos NoSQL", nota: 8.8

  - Doc5:     alumno: "Claudia", curso: "JavaScript", nota: 9.5

## **Ejercicio 3**

**Modificar la información de la base de datos**

1. Cambiar modalidad del curso "JavaScript" a "semipresencial".

1. Añadir una nueva alumna.

1. Matricular a Nuria en el curso de "HTML y CSS".

1. Evaluar a Nuria.

1. Incrementar el número de horas de todos los cursos de nivel "intermedio" en 10 horas.

1. Cambiar la ciudad de los alumnos que vivan en "Valencia" a "València".

1. Añadir un campo nuevo teléfono a todos los alumnos que no lo tienen.

1. Reemplazar por completo los datos de un curso (excepto el _id).

1. Eliminar todas las matrículas de un alumno dado su nombre.

1. Añadir un campo comentario en la evaluación de “Claudia” en “JavaScript”.

1. Eliminar la especialidad de los docentes que solo tengan un curso asignado.

1. Añadir una fecha de finalización a los cursos que estén finalizados.

1. Cambiar todos los campos modalidad: "online" a "a distancia".

## **Ejercicio 4**

**Consultas**

Básicas

1. Listar todos los cursos.

1. Mostrar alumnos de València.

1. Mostrar docentes de Backend.

1. Mostrar solo los nombres y niveles de los cursos.

1. Listar los nombres y emails de todos los alumnos.

1. Buscar docentes cuya especialidad sea “Frontend”.

1. Mostrar todos los cursos finalizados.

1. Mostrar los alumnos que no vivan en “València”.

Avanzadas

1. Buscar cursos con más de 60 horas.

1. Media de notas por curso.

1. Número de matriculaciones por curso.

1. Buscar cursos que sean de nivel “intermedio” y modalidad “presencial”.

1. Mostrar los cursos ordenados alfabéticamente (A-Z).

1. Mostrar las 2 últimas matrículas registradas.

1. Calcular el número de cursos por modalidad

## **Ejercicio 5**

**Índices**

1. Crea un índice en nombre para cursos.

1. Crea un índice en ciudad para alumnos.

1. Crea un índice con ordenación descendente en fecha para matrícula.

1. Crea un índice compuesto con ordenación ascendente en ciudad y nombre para alumno.

1. Crea un índice único para que no se repitan los emails de los alumnos.

1. Muestra todos los índices de la colección alumnos.

1. Crea un índice en nombre para docentes y que este índice se llame “idx_nom_docente”.
