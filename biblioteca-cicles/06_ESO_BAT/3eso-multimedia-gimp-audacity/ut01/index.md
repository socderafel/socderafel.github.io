---
layout: default
title: "UD1 — GIMP · Temari Complet"
course_root: ".."
badge: "3r ESO · UD1 — GIMP"
prev_url: "../index.html"
prev_label: "⬅️ 🏠 Inici del Mòdul"
next_url: "../ut01/ut0101.html"
next_label: "1.1 Modos de color ➡️"
---

# 📘 UD1 — GIMP (Unitat Completa)

> **💡 Temari Complet de la Unitat**
> Aquesta pàgina integra tots els apartats teòrics de la unitat didàctica en una sola lectura contínua.

## 📑 Índex d'Apartats d'aquesta Unitat

- [**1.1 Modos de color**](./ut0101.md)

---

# 1.1 Modos de color

> **🔗 Recurs Web: Conceptos básicos**
> [**🌐 Obrir recurs extern (https://www.tuinstitutoonline.com/cursos/gimp_2_8/01conceptos_basicos.php) ↗️**](https://www.tuinstitutoonline.com/cursos/gimp_2_8/01conceptos_basicos.php)

---

Modos de color: guía interactiva
Grises · Indexado · RGB · HSV · CMYK

RGB

HSV

CMYK

Escala de grises

Indexado

Resumen
**Muestra**: el recuadro refleja el color según los controles del panel activo. En los modos que no son aditivos (p.ej., CMYK), se convierte a RGB para visualizarlo en pantalla.
### RGB (pantallas)

R (0–255): 128
G (0–255): 80
B (0–255): 200
Hex

#8050C8
Modelo aditivo: más luz ⇒ más cerca del blanco.
### HSV (tono, saturación, valor)

Tono H (0–360°): 270
Saturación S (0–100%): 60
Valor V (0–100%): 78
Equivalente RGB

rgb(128, 80, 200)
Práctico para elegir colores por “familias” y su intensidad.
### CMYK (impresión)

Cian C (0–100%): 36
Magenta M (0–100%): 60
Amarillo Y (0–100%): 0
Negro K (0–100%): 22
Equivalente RGB (aprox.)

rgb(128, 80, 200)
Notas

Conversión aproximada, sin gestión de color/ICC.
Modelo sustractivo: más tinta ⇒ menos luz reflejada.
### Escala de grises

Valor (0–255): 128
Ejemplos de pasos
Cada píxel guarda una sola componente de luminancia.
### Color indexado (paleta)

La imagen guarda índices a una *paleta* de N colores. Aquí simulamos la cuantización del color seleccionado al color más cercano de la paleta.

Elige un color base (RGB)

R: 128
G: 80
B: 200
Color indexado

#8050C8 → #8033CC (índice 5)
Paleta (8 colores)
### Resumen rápido

- **Grayscale** : tonos de gris (1 canal). Ideal para B/N y análisis.
- **Indexed** : usa paletas (pocos colores). Ahorra espacio.
- **RGB** : pantallas, luz (aditivo).
- **HSV** : tono/saturación/valor. Selección de color amigable.
- **CMYK** : impresión, tintas (sustractivo).

Consejo: Diseña en RGB, convierte a CMYK (con perfiles) solo al preparar para imprenta.
¿Qué diferencias prácticas hay?

- **Visualización** : Siempre ves RGB en pantalla; otros modos se convierten temporalmente a RGB.
- **Precisión** : CMYK real requiere gestión de color (perfiles ICC) para que coincida con una imprenta concreta.
- **Rendimiento** : Indexado es ligero para gráficos simples o retro.
- **Edición** : HSV facilita ajustes de tono e intensidad sin romper el color.
Hecho para aprender jugando con el color ✨

---
