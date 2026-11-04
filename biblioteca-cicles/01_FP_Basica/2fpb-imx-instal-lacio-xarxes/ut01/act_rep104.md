---
layout: default
title: "Actividad de Repaso REP104 — REPASO 1.4 · La dirección IP: IPv4 e IPv6 — Instalación y Mantenimiento de Redes para Transmisión de Datos (Networking Essentials)"
course_root: ".."
badge: "2º FPB · Instalación y Mantenimiento de Redes (IMX / NE) · UT01"
prev_url: "./act_rep103.html"
prev_label: "⬅️ 🔄 Repaso REP103: REPASO 1.3 · Redes de comunicaciones: modelos OSI y TCP/IP"
next_url: "../ut02/index.html"
next_label: "UD2 ➡️"
---

# **FICHA REPASO 1.4 · La dirección IP: IPv4 e IPv6**

📥 Guardar como PDF
📄 Descargar Word

| Alumno/a | Grupo | Fecha |
| --- | --- | --- |
|  |  |  |

> **📌 ¿Qué repasamos?**
> 

> Repaso de la **FICHA 1.4**: cada equipo tiene la **MAC** (física, no cambia) y la **IP** (lógica, puede cambiar). Existen dos versiones del protocolo IP: **IPv4** (32 bits) e **IPv6** (128 bits), junto con la **máscara de red** y la operación **AND**.

## 1 · Dos direcciones: ¿cuál es cuál?

```mermaid
flowchart LR
    A["Dirección IP<br/>la casa en la que vive"] --> C["Tu equipo"]
    B["Dirección MAC<br/>el nombre del destinatario"] --> C
```

Completa cada frase con **IP** o **MAC**:

| Frase | ¿IP o MAC? |
| --- | --- |
| Es fija y no cambia nunca. |  |
| Es lógica y la asigna la red en cada momento. |  |
| Tiene 48 bits separados en seis bloques. |  |
| Puede ser estática (fija) o dinámica (cambia). |  |
| Identifica la tarjeta de red de forma unívoca. |  |
| Como la dirección de una casa. |  |

## 2 · La dirección IPv4

La dirección **IPv4** tiene **32 bits** y se escribe en **4 bloques de 8 bits** en formato **decimal**, separados por **puntos**. Cada bloque vale de **0 a 255**.

```mermaid
flowchart LR
    A["11000000<br/>192"] --> B["10101000<br/>168"] --> C["00000000<br/>0"] --> D["00000001<br/>1"]
```

Completa:

| Pregunta | Completa |
| --- | --- |
| ¿Cuántos bits tiene una dirección IPv4? | ………… bits |
| ¿En cuántos bloques se escriben? | ………… bloques |
| ¿Con qué signo se separan los bloques? | Con ………… |
| ¿En qué formato se escribe cada bloque? | ………… (decimal o binario) |
| ¿Cuánto vale el bloque más alto? | Hasta el ………… |

Escribe si cada dirección es **pública** o **privada**:

| Dirección | ¿Pública o privada? |
| --- | --- |
| 192.168.1.20 |  |
| 10.1.2.3 |  |
| 172.16.4.9 |  |
| 8.8.4.4 |  |
| 185.60.216.35 |  |

> **📌 Aprende**
> 

> Las tres redes **privadas** más típicas son las que empiezan por **10.**, por **172.16.** a **172.31.** y por **192.168.**

## 3 · La máscara de red

La **máscara de red** acompaña a la dirección IP y sirve para saber qué parte identifica a la **red** y qué parte al **equipo** (host). La más común es `255.255.255.0`.

```mermaid
flowchart LR
    A["Dirección IP<br/>192.168.5.77"] --> OP["OPERACIÓN AND<br/>comparar bits"]
    B["Máscara de red<br/>255.255.255.0"] --> OP
    OP --> C["Dirección de red<br/>……………"]
```

> **📌 Aprende**
> 

> La operación **AND** compara los bits de la IP con los de la máscara:
**1 AND 1 = 1** · **1 AND 0 = 0** · **0 AND 0 = 0**

1. Aplica la operación **AND** y escribe la dirección de red:

| Dirección IP | Máscara | Dirección de red |
| --- | --- | --- |
| 192.168.5.77 | 255.255.255.0 |  |
| 10.20.30.40 | 255.0.0.0 |  |
| 172.96.0.22 | 255.255.255.0 |  |

1. Completa con **red**, **broadcast** o **hosts**:

| Dirección | Nombre |
| --- | --- |
| 192.168.5.0 | Dirección de ………… |
| 192.168.5.255 | Dirección de ………… |
| De 192.168.5.1 a 192.168.5.254 | Direcciones para los ………… |

## 4 · La dirección IPv6

La dirección **IPv6** tiene **128 bits** y se escribe en **8 grupos de 2 bytes**, separados por dos puntos (**:**), en formato **hexadecimal**.

```mermaid
flowchart LR
    A["2001"] --> B["0DB8"] --> C["0000"] --> D["0000"] --> E["4AC2"] --> F["0000"] --> G["B4EB"] --> H["0FFA"]
```

Recuerda las reglas de abreviación:
1. Se pueden quitar los **ceros a la izquierda** de cada grupo: `00D1` → `D1`.
2. Un grupo `0000` se puede escribir como `0`.
3. Si hay **dos o más grupos con ceros seguidos**, se sustituyen por `::` (solo **una vez** por dirección).

Completa:

| Pregunta | Completa |
| --- | --- |
| ¿Cuántos bits tiene una dirección IPv6? | ………… bits |
| ¿En cuántos grupos de 2 bytes se escribe? | ………… grupos |
| ¿Con qué carácter se separan los grupos? | Con ………… |
| ¿En qué formato se escriben? | ………… (hexadecimal) |

Abrevia estas direcciones IPv6:

- `2001:0DB8:0000:0000:0000:0000:0000:0001` → `…`

- `FE80:0000:0000:0000:0202:B3FF:FE1E:8329` → `…`

- `0000:0000:0000:0000:0000:0000:0000:0001` → `…`

## 5 · Reto express

1. ¿Cuántos bits tiene **IPv4**? ¿Y **IPv6**? ¿Cuál de las dos ofrece más direcciones?

1. La IP de la impresora del instituto **no cambia nunca**: es ……… (estática o dinámica). La IP del móvil en casa **cambia cada día**: es ………

1. Marca **V** (verdadero) o **F** (falso):

| Afirmación | V/F |
| --- | --- |
| La dirección MAC es fija e identifica la tarjeta de red. |  |
| La dirección IP puede cambiar según la red en la que esté el equipo. |  |
| `192.168.1.10` es una dirección pública. |  |
| La máscara de red separa la parte de red de la parte del host. |  |
| En IPv4 cada bloque se escribe en hexadecimal. |  |

1. Escribe tu dirección IPv4 y tu dirección MAC en este hueco (puedes usar `ipconfig /all` en el símbolo del sistema):

1. IPv4: `…`

1. MAC: `…`

> **📌 Se valorará**
> 

> - La distinción correcta entre **dirección IP** y **dirección MAC**.

> - La correcta lectura de las direcciones **IPv4 e IPv6** y de su **abreviación**.

> - La aplicación de la **máscara de red** y la operación **AND**.

> - La limpieza y el orden al resolver los ejercicios.

> Esta ficha te servirá para repasar el **CE5a** antes del **EXA101**.

---

### 💡 Solución y Criterios de Corrección (REP104)

<details markdown="1">
<summary>🔍 Ver solución paso a paso de REP104</summary>

# **REPASO 1.4 · La dirección IP: IPv4 e IPv6**

Ficha en blanco: Repaso 1.4

📥 Guardar como PDF

## **1 · Dos direcciones: ¿cuál es cuál?**

| Frase | ¿IP o MAC? |
| --- | --- |
| Es fija y no cambia nunca. | **MAC** |
| Es lógica y la asigna la red en cada momento. | **IP** |
| Tiene 48 bits separados en seis bloques. | **MAC** |
| Puede ser estática (fija) o dinámica (cambia). | **IP** |
| Identifica la tarjeta de red de forma unívoca. | **MAC** |
| Como la dirección de una casa. | **IP** |

## **2 · La dirección IPv4**

| Pregunta | Completa |
| --- | --- |
| ¿Cuántos bits tiene una dirección IPv4? | **32** bits |
| ¿En cuántos bloques se escriben? | **4** bloques |
| ¿Con qué signo se separan los bloques? | Con **puntos (.)** |
| ¿En qué formato se escribe cada bloque? | **decimal** |
| ¿Cuánto vale el bloque más alto? | Hasta el **255** |

| Dirección | ¿Pública o privada? |
| --- | --- |
| 192.168.1.20 | **Privada** |
| 10.1.2.3 | **Privada** |
| 172.16.4.9 | **Privada** |
| 8.8.4.4 | **Pública** |
| 185.60.216.35 | **Pública** |

## **3 · La máscara de red**

Operación **AND** con `192.168.5.77` y `255.255.255.0` → dirección de red **192.168.5.0**.

| Dirección IP | Máscara | Dirección de red |
| --- | --- | --- |
| 192.168.5.77 | 255.255.255.0 | **192.168.5.0** |
| 10.20.30.40 | 255.0.0.0 | **10.0.0.0** |
| 172.96.0.22 | 255.255.255.0 | **172.96.0.0** |

| Dirección | Nombre |
| --- | --- |
| 192.168.5.0 | Dirección de **red** |
| 192.168.5.255 | Dirección de **broadcast** |
| De 192.168.5.1 a 192.168.5.254 | Direcciones para los **hosts** |

## **4 · La dirección IPv6**

| Pregunta | Completa |
| --- | --- |
| ¿Cuántos bits tiene una dirección IPv6? | **128** bits |
| ¿En cuántos grupos de 2 bytes se escribe? | **8** grupos |
| ¿Con qué carácter se separan los grupos? | Con **dos puntos (:)** |
| ¿En qué formato se escriben? | **hexadecimal** |

Abreviaciones (paso a paso):

- `2001:0DB8:0000:0000:0000:0000:0000:0001` → `2001:DB8:0:0:0:0:0:1` → **`2001:DB8::1`**

- `FE80:0000:0000:0000:0202:B3FF:FE1E:8329` → `FE80:0:0:0:202:B3FF:FE1E:8329` → **`FE80::202:B3FF:FE1E:8329`**

- `0000:0000:0000:0000:0000:0000:0000:0001` → **`::1`**

## **5 · Reto express**

1. **IPv4** = **32 bits**; **IPv6** = **128 bits**; ofrece más direcciones **IPv6**.

1. 

La impresora es **estática**; el móvil en casa es **dinámico**.

1. 

Marca **V** o **F**:

| Afirmación | V/F |
| --- | --- |
| La dirección MAC es fija e identifica la tarjeta de red. | **V** |
| La dirección IP puede cambiar según la red en la que esté el equipo. | **V** |
| `192.168.1.10` es una dirección pública. | **F** (es privada) |
| La máscara de red separa la parte de red de la parte del host. | **V** |
| En IPv4 cada bloque se escribe en hexadecimal. | **F** (en decimal) |

1. *Respuesta personal*: usa `ipconfig /all` (Windows) o `ifconfig` / `ip a` (Linux/macOS) para copiar tu **IPv4** y tu **MAC**.

</details>
