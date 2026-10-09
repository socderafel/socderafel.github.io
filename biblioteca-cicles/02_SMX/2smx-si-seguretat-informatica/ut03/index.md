---
layout: default
title: "UD3 — Seguretat passiva: Equips · Temari Complet"
course_root: ".."
badge: "2n SMX · Grau Mitjà · UT3 Completa"
prev_url: "../ut02/ut0201.html"
prev_label: "⬅️ 2.1 Continguts i Recursos"
next_url: "../ut03/ut0301.html"
next_label: "3.1 PDF: Consum i sel·lecció de SAI ➡️"
---

# 📘 UD3 — Seguretat passiva: Equips (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**3.1 PDF: Consum i sel·lecció de SAI**](./ut0301.md)

---

# 3.1 PDF: Consum i sel·lecció de SAI

> **🔗 Recurs Web: VIDEO: Inside a Google data center**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=XZmGGAbHqa0) ↗️**](https://www.youtube.com/watch?v=XZmGGAbHqa0)

> **🔗 Recurs Web: VIDEO: Construcción del data center de DKV Seguros - caso de éxito de ABAST**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=fyU8ihDru3k) ↗️**](https://www.youtube.com/watch?v=fyU8ihDru3k)

> **🔗 Recurs Web: VIDEO: Construccion de CPD modular**
> [**🌐 Obrir recurs extern (https://www.youtube.com/watch?v=MISllfWnOrs) ↗️**](https://www.youtube.com/watch?v=MISllfWnOrs)

---

Consumo de equipos y selección de SAI José Domingo Muñoz Seguridad Informática - Seguridad Física Octubre 2018

¿Cuánto consume un ordenador? (Gama alta)

¿Cuánto consume un ordenador? (Gama medio -alta)

¿Cuánto consume un ordenador? (Gama media)

¿Cuánto consume un ordenador? (Gama baja) 1 kwh aprox. 0,15 € (sin impuestos) ¿Cuanto cuesta tener encendido un ordenador que consume 200 w durante 24h? 200 w *24 horas / 1000 = 4,8 kwh * 0,15 = 72 céntimos 262,8 € al año !!!

Los vatios, los voltioamperios y el factor de potencia La potencia real consumida por un determinado equipo electrónico en vatios (W) es el resultado de multiplicar la tensión (en voltios, V) y la corriente instantánea (amperios, A). No obstante, existen otras formas de expresar la potencia consumida. Una de ellas se ha hecho muy popular en la descripción de las características técnicas de los equipos informáticos y los SAIs. Es la denominada potencia aparente consumida, que se expresa en voltiamperios (VA).

VA >= W la relación entre ellos es el factor de potencia. FP=VA/W; su valor es siempre menor o igual que 1 (100%) FP=1 100 W 100 VA Power Factor Corrected Sin PFC FP 60% o menos Con PFC pasivo FP 70-85% Con PFC activo FP 95%. Ejemplo: FP=70% 500 VA 350 W

Especificación de potencia en un SAI Los SAI (Sistemas de Alimentación Ininterrumpida) nacieron con el objetivo de proporcionar al administrador el tiempo suficiente para guardar los datos y apagar el equipo de forma ordenada cuando se producía un apagón. En sus hojas técnicas, los SAIs reflejan los valores nominales máximos que son capaces de entregar a su salida, expresados en vatios (W) y voltiamperios (VA).

Recuerda que, para no quemar tu sistema de alimentación ininterrumpida, no debes sobrepasar dichos valores nominales máximos bajo ningún concepto. Generalmente el factor de potencia de un SAI ronda el 60% (0,6). https://qloudea.com/sai https://www.salicru.com/

Supuestos prácticos Ejemplo 1 Considere el caso de un SAI de 1000 VA. El usuario quiere alimentar 9 lámparas incandescentes de 100 watios (total 900 watios). Las lámparas tienen un consumo de 900 W ó 900 VA, ya que su factor de potencia es 1. ¿Puede nuestro SAI alimentar las 9 bombillas? Razona la respuesta.

Ejemplo 2 Considere el caso de un SAI de 1000 VA. El usuario quiere alimentar un servidor de 900 VA con el SAI. El servidor tiene una fuente de alimentación con factor de potencia corregido, y por lo tanto tiene un consumo de 900 watios ó 900 VA. ¿Puede nuestro SAI alimentar el servidor? Razona la respuesta.

Ejemplo 3 ¿Cuántos VA tiene que suministrar un SAI para poder dar servicio a un ordenador con una fuente de alimentación que consume 350 W y tiene un factor de potencia del 70 %?

Calcular el tiempo de un SAI en modo baterías El tiempo de duración de un SAI en modo baterías es muy relativo, no se puede decir un tiempo exacto porque siempre dependerá de varios valores. Pero si conocemos las especificaciones de las baterías podemos afirmar lo siguiente

Tiempo en min. de duración SAI = ((N x V x AH x Eff ) / VA ) x 60 N = numero de baterías en el SAI V = voltaje de las baterías AH = Amperios-Hora de las baterías Eff = eficiencia del SAI VA = Volti-Amperios del SAI

Ejemplo Vamos a calcular el tiempo de duración del SAI: https://qloudea.com/cyberpower-cp1500epfclcd N = numero de baterías en el SAI = 2 V = voltaje de las baterías = 12 AH = Amperios-Hora de las baterías = 8.5 Eff = 900 w/1500 VA = 0,6 (60 %) VA = Volti-Amperios del SAI = 1500 Duración del SAI a carga máxima = ((2 x 12 x 8,5 x 0.6))/1500) x 60 = 4,89 minutos Sabemos que aproximadamente, un SAI de 1500VA nos proporciona unos 900W por lo que si pusiéramos el SAI de 1500VA con una carga de exactamente 900W continuamente, obtendríamos unos 4,89 minutos de tiempo hasta que se apague el SAI.

Duración del SAI según de la potencia consumida Veamos un gráfico que nos muestra la duración del SAI según la carga conectada a el. El SAI tiene una potencia de 1000 Vatios / 1500 VA. ¿Cuál es su factor de potencia?

Supuestos prácticos Ejemplo 1 Calcula la duración aproximada del SAI que puedes encontrar en https://www.pccomponentes.com/l-link-ll5707-interactive-sai-700va con un ordenador conectado a él que consume 200 W. Ejemplo 2 El SAI que tenemos en el departamento es el siguiente, tenemos varios servidores que consumen 1000 W, ¿cuánto tiempo aproximadamente puede alimentarlo el SAI sabiendo que el valor de N*V*Ah=480?

---
