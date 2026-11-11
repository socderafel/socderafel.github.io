---
layout: default
title: "UT00: Presentación, Guía Didáctica y Entorno de Desarrollo"
---

<div class="hero-course">
  <div class="hero-badge">UT00 · Entorno de Trabajo · 2n DAM · PSP</div>
  <h1 class="hero-title">Presentación, Guía Didáctica y Entorno de Trabajo</h1>
  <p class="hero-subtitle">
    Normas de aula, criterios de evaluación, configuración de máquinas de laboratorio con Ubuntu 24.04 LTS y Windows 11, Java Development Kit 21, IDEs Eclipse / VS Code y prueba inicial de conocimientos previos.
  </p>
</div>

## 1. Guía Docente y Normativa de Laboratorio

El módulo de **Programación de Servicios y Procesos (PSP)** se imparte en el ciclo formativo de **Grado Superior de Desarrollo de Aplicaciones Multiplataforma (2n DAM)** con una carga lectiva de **70 horas** (3 horas semanales).

### 1.1. Información del Profesorado
- **Docente:** Pepe Cuenca
- **Centro:** IES Sant Vicent Ferrer (Algemesí)
- **Departamento:** Informática y Comunicaciones
- **Materiales oficiales:** Disponible la versión completa en [Guía Didáctica (PDF)](../img/2526-2DAM-PSP-Guia Didàctica.pdf) y [Criterios de Calificación (PDF)](../img/2526_2dam_psp_criteris_qualificacio.pdf).

### 1.2. Material Obligatorio del Alumnado
Cada estudiante debe disponer en todas las sesiones presenciales de laboratorio de un **disco de estado sólido externo (SSD) con conexión USB 3.2**:
- **Capacidad mínima:** 250 GB (Recomendado 500 GB o 1 TB).
- **Finalidad:** Almacenar las máquinas virtuales de trabajo (Ubuntu Linux), repositorios de código Git, proyectos Eclipse y configuraciones de servicios en red sin depender del almacenamiento volátil local del aula.

```
+--------------------------------------------------------------+
|                 DISCO EXTERNO SSD USB 3.2                    |
|  [VMs VirtualBox / VMware] [Proyectos Eclipse] [Workspaces]  |
+--------------------------------------------------------------+
```

---

## 2. Entorno de Software Oficial

Para el correcto seguimiento de las prácticas del módulo se requiere:

1. **Java Development Kit (JDK 21 LTS):** OpenJDK 21 o Eclipse Temurin 21. Se emplearán características modernas del lenguaje (virtual threads, Pattern Matching, nuevo cliente HttpClient).
2. **Entornos de Desarrollo Integrados (IDE):**
   - **Eclipse IDE for Enterprise Java and Web Developers** (2024-09 o superior).
   - **Visual Studio Code** con el paquete *Extension Pack for Java*.
3. **Control de Versiones y Terminal:**
   - Git y Git Bash en Windows.
   - Terminal Bash en Linux Ubuntu con utilidades estándar (`ps`, `top`, `kill`, `grep`, `nc`, `curl`, `lsof`).

---

## 3. Cuestionario Inicial: Evaluación de Conocimientos Previos

Responde a este cuestionario diagnóstico inicial para validar tus fundamentos sobre sistemas operativos, gestión de memoria, jerarquía de procesos y lenguaje Java:

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q1" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 1:</strong> Quina estructura de control s'utilitza per repetir instruccions un nombre conegut de vegades?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">for</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">if</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">switch</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">try</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q2" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 2:</strong> Quina és la diferència entre break i continue dins d'un bucle?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">break ix del bucle, continue salta a la següent iteració</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">break repeteix la mateixa iteració, continue acaba el bucle</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">Són equivalents</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Només es poden usar en switch</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q3" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 3:</strong> Què mostrarà? class A { void m() { System.out.println(&quot;A&quot;); } } class B extends A { void m() { System.out.println(&quot;B&quot;); } } public class P { public static void main(String[] args) { A obj = new B(); obj.m(); } }</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">B</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">A</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">Error</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Res</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q4" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 4:</strong> Què imprimirà? int f(int n) { if (n &lt;= 1) return 1; return n * f(n - 1); } public static void main(String[] args) { System.out.println(f(4));}</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">24</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">4</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">6</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Error</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q5" data-correct="1">
  <div class="mcq-question">❓ <strong>Pregunta 5:</strong> class X { int v = 1; int getV() { return v; } } class Y extends X { int v = 2; @Override int getV() { return v; } } public class P { public static void main(String[] args) { X obj = new Y(); System.out.println(obj.getV()); } }</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">1</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">2</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">Error</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">null</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q6" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 6:</strong> Què mostrarà? for (int i = 1; i &lt;= 4; i++) { if (i % 2 == 0) continue; System.out.print(i + &quot; &quot;); }</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">1 3</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">1 2 3 4</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">2 4</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Error</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q7" data-correct="1">
  <div class="mcq-question">❓ <strong>Pregunta 7:</strong> public class P { public static void main(String[] args) { String t = &quot;Java Programació&quot;; String r = t.substring(5, 16).toUpperCase().replace(&quot;Ó&quot;, &quot;O&quot;); System.out.println(r); } }</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">PROGRAMACIÓ</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">PROGRAMACIO</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">java programació</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">PROGRAM</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q8" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 8:</strong> Què passa si un mètode recursiu no té condició de parada?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">Es repetix infinitament i provoca un StackOverflowError</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">Es tradueix automàticament en un bucle</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">No es pot compilar</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Retorna null</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q9" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 9:</strong> Quin paquet de Java conté ArrayList i HashMap?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">java.util</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">java.io</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">java.sql</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">java.lang</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q10" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 10:</strong> Quin resultat mostrarà? for (int i = 1; i <= 3; i++) { System.out.print(i + &quot; &quot;); }</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">1 2 3</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">0 1 2</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">0 1 2 3</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Error</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q11" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 11:</strong> Què mostrarà? int[] a = {1, 2, 3}; System.out.println(a[2]);</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">3</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">1</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">2</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Error</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q12" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 12:</strong> Quin resultat obtindràs? ArrayList a = new ArrayList (); a.add(5); a.add(10); System.out.println(a.get(0));</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">5</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">10</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">0</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Error</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q13" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 13:</strong> Què imprimirà? int[][] mat = { {1, 2}, {3, 4} }; System.out.println(mat[0][1]);</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">2</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">1</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">3</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">4</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q14" data-correct="1">
  <div class="mcq-question">❓ <strong>Pregunta 14:</strong> Quin tipus de col·lecció de Java emmagatzema parelles clau-valor?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">HashMap</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">HashSet</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q15" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 15:</strong> Quin modificador s’utilitza per declarar una constant en Java?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">final</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q16" data-correct="1">
  <div class="mcq-question">❓ <strong>Pregunta 16:</strong> Quin mètode d’entrada de la classe Scanner permet llegir una cadena de text formada per diferents paraules (una oració, per exemple)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">nextline</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">nextline()</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q17" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 17:</strong> Quin tipus d'error captura un try-catch?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">Error en temps d'execució</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">Error de compilació</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">Error de sintaxi</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Qualsevol dels anteriors</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q18" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 18:</strong> Què passarà? try { int x = 10 / 0; } catch (Exception e) { System.out.println(&quot;E&quot;); }</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">E</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">0</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">Error de compilació</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="3">Res</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q19" data-correct="0">
  <div class="mcq-question">❓ <strong>Pregunta 19:</strong> Quin tipus de valor retorna un mètode que no torna res?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">void</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

<div class="interactive-mcq" data-quiz-id="psp_ut00_pre_q20" data-correct="2">
  <div class="mcq-question">❓ <strong>Pregunta 20:</strong> Quin tipus de bucle s’executa almenys una vegada, encara que la condició siga falsa?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt-index="0">do-while</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="1">dowhile</button>
    <button type="button" class="btn-mcq-opt" data-opt-index="2">do while</button>
  </div>
  <div class="mcq-feedback"></div>
</div>

---

## 4. Registro y Entrega de la Configuración del Entorno

<div class="interactive-open-response" data-question-id="psp_ut00_open_config">
  <div class="open-question">✍️ <strong>Actividad UT00.1 (Verificación del Entorno de Desarrollo):</strong> Ejecuta en la terminal de tu equipo las órdenes <code>java -version</code> y <code>javac -version</code>. Copia la salida obtenida y describe la configuración de tu disco SSD y el IDE seleccionado:</div>
  <textarea class="open-response-input" rows="3" placeholder="Pega aquí la salida de la terminal y especifica si trabajas sobre Linux o Windows..."></textarea>
</div>
