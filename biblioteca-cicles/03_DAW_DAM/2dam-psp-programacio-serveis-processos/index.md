---
layout: default
title: Programación de Servicios y Procesos (PSP)
---

<div class="hero-course">
  <div class="hero-badge">2º DAM · CFGS Desarrollo de Aplicaciones Multiplataforma · Código 0490</div>
  <h1 class="hero-title">Programación de Servicios y Procesos</h1>
  <p class="hero-subtitle">
    Guía didáctica, arquitectura de sistemas concurrentes, procesos, concurrencia multihilo en Java 21, comunicaciones con sockets en red, servicios web distribuidos y técnicas de programación segura.
  </p>
  <div class="course-meta-pills">
    <span class="meta-pill">⏱️ 70 horas lectivas (3 h/semana)</span>
    <span class="meta-pill">☕ Java 21 LTS · Eclipse / VS Code</span>
    <span class="meta-pill">💻 GNU/Linux Ubuntu & Windows 11</span>
    <span class="meta-pill">🏫 IES Sant Vicent Ferrer (Algemesí)</span>
  </div>
</div>

<div class="action-banner">
  <div class="action-banner-content">
    <span class="action-banner-badge" style="background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1;">Módulo de Referencia</span>
    <h3 style="margin: 4px 0 8px 0; color: var(--navy-900);">Docente: Pepe Cuenca</h3>
    <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">
      Material oficial adaptado al currículo LOMLOE / Real Decreto de título de FP para DAM. Todas las prácticas incluyen código fuente en Java, ejemplos compilables, diagramas de hilos y procesos, ejercicios de entrega en Aules y cuestionarios de autoevaluación.
    </p>
  </div>
  <div class="action-banner-btns">
    <a href="ut00/" class="btn btn-primary">🚀 Comenzar UT00</a>
    <a href="img/2526-2DAM-PSP-Guia Didàctica.pdf" class="btn btn-secondary" target="_blank">📄 Guía Didáctica PDF</a>
  </div>
</div>

---

## 🎯 Resultados de Aprendizaje (RAs) del Módulo

Según el Real Decreto y la Orden Curricular de la Comunidad Valenciana, el módulo se estructura en 5 Resultados de Aprendizaje fundamentales:

| Resultado de Aprendizaje | Descripción Curricular | Unidades Temáticas |
| :--- | :--- | :---: |
| **RA 1: Programación multiproceso** | Desarrolla aplicaciones compuestas por diversos procesos concurrentes aplicando principios de programación paralela y resolviendo la comunicación y sincronización entre ellos. | **UT01** |
| **RA 2: Programación multihilo** | Desarrolla aplicaciones que integran múltiples hilos de ejecución (*threads*), coordinando su ejecución y garantizando la consistencia de la memoria compartida mediante monitores y sincronizadores. | **UT02** |
| **RA 3: Comunicaciones en red** | Programa mecanismos de comunicación en red haciendo uso de sockets TCP y UDP fiables y no fiables, diseñando arquitecturas cliente/servidor concurrentes. | **UT03** |
| **RA 4: Servicios en red** | Implementa servicios de comunicación estándar utilizando protocolos de nivel de aplicación (HTTP/REST, FTP, SMTP), empleando librerías y clientes asíncronos modernos. | **UT04** |
| **RA 5: Técnicas de programación segura** | Aplica técnicas de programación segura garantizando la confidencialidad, integridad y autenticidad de la información transferida mediante criptografía, certificados y comunicaciones SSL/TLS. | **UT05** |

---

## 🗺️ Mapa de las Unidades de Trabajo (Temario)

<div class="courses-grid" style="margin-top: 20px;">

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#f1f5f9; color:#475569;">UT00 · Entorno</span>
      <h3 class="course-title"><a href="ut00/">Presentación y Entorno de Desarrollo</a></h3>
    </div>
    <p class="course-desc">
      Guía docente, horarios, normas de aula, configuración de JDK 21 LTS, IDEs Eclipse y Visual Studio Code, máquinas virtuales y uso del disco SSD externo USB 3.2.
    </p>
    <div class="course-footer">
      <span>⏱️ 4 horas</span>
      <a href="ut00/" class="btn-link">Acceder a la unidad →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#dbeafe; color:#1e40af;">UT01 · Procesos</span>
      <h3 class="course-title"><a href="ut01/">Programación Multiproceso</a></h3>
    </div>
    <p class="course-desc">
      Conceptos básicos de procesos en SO. Las clases <code>ProcessBuilder</code> y <code>Process</code>. Gestión de flujos de E/S (pipes, redirecciones). Proyecto Práctico: <em>MyShell</em>.
    </p>
    <div class="course-footer">
      <span>⏱️ 16 horas</span>
      <a href="ut01/" class="btn-link">Acceder a la unidad →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#fef3c7; color:#92400e;">UT02 · Hilos</span>
      <h3 class="course-title"><a href="ut02/">Programación Multihilo</a></h3>
    </div>
    <p class="course-desc">
      Hilos de ejecución (*threads*). Ciclo de vida y prioridades. Compartición de recursos, secciones críticas y sincronización (<code>synchronized</code>, <code>wait()</code> / <code>notify()</code>). El paquete <code>java.util.concurrent</code>, <code>Callable</code> y pools de ejecutores.
    </p>
    <div class="course-footer">
      <span>⏱️ 18 horas</span>
      <a href="ut02/" class="btn-link">Acceder a la unidad →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#e0e7ff; color:#3730a3;">UT03 · Sockets</span>
      <h3 class="course-title"><a href="ut03/">Comunicaciones en Red (Sockets)</a></h3>
    </div>
    <p class="course-desc">
      Fundamentos de comunicaciones IP. Programación con sockets no orientados a conexión (UDP <code>DatagramSocket</code>) y orientados a conexión (TCP <code>ServerSocket</code> / <code>Socket</code>). Servidores concurrentes multihilo.
    </p>
    <div class="course-footer">
      <span>⏱️ 14 horas</span>
      <a href="ut03/" class="btn-link">Acceder a la unidad →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#dcfce7; color:#166534;">UT04 · Servicios</span>
      <h3 class="course-title"><a href="ut04/">Generación de Servicios en Red</a></h3>
    </div>
    <p class="course-desc">
      Servicios de nivel de aplicación. Clientes y servidores HTTP con el nuevo <code>HttpClient</code> de Java. Consumo de APIs REST en formato JSON. Servicios FTP y envío de correo vía SMTP.
    </p>
    <div class="course-footer">
      <span>⏱️ 10 horas</span>
      <a href="ut04/" class="btn-link">Acceder a la unidad →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#fee2e2; color:#991b1b;">UT05 · Seguridad</span>
      <h3 class="course-title"><a href="ut05/">Técnicas de Programación Segura</a></h3>
    </div>
    <p class="course-desc">
      Principios de seguridad informática en aplicaciones. Criptografía simétrica (AES) y asimétrica (RSA). Funciones resumen (*hash* SHA-256). Gestión de claves con <code>KeyStore</code>. Comunicaciones cifradas mediante SSL/TLS (<code>SSLSocket</code>).
    </p>
    <div class="course-footer">
      <span>⏱️ 8 horas</span>
      <a href="ut05/" class="btn-link">Acceder a la unidad →</a>
    </div>
  </div>

</div>

---

## 📊 Criterios de Calificación (Curso 2025/2026)

De acuerdo con el documento oficial de criterios de calificación del departamento de Informática:

### 1ª Evaluación (UT01 + UT02)
- **40%**: Pruebas teoricoprácticas tipo test de Aules (Cuestionarios UT01).
- **40%**: Pruebas teoricoprácticas tipo test de Aules (Cuestionarios UT02).
- **20%**: Proyecto Práctico MyShell / Ejercicios prácticos de procesos e hilos.

### 2ª Evaluación (UT03 + UT04 + UT05)
- **80%**: Examen Práctico global de programación en el laboratorio (Procesos, Hilos, Sockets y Servicios).
- **20%**: Proyecto Práctico de Comunicaciones en Red / Tareas de Aules.

> [!IMPORTANT]
> **Condición de Aprobado:** Para aprobar cada evaluación es requisito indispensable obtener una nota mínima de **4 sobre 10** en cada una de las partes evaluadas (tests y proyecto/examen práctico), además de alcanzar una media ponderada igual o superior a **5,0**.

---

## 🛠️ Requisitos de Hardware y Software

- **Disco duro SSD externo USB 3.2 (Mínimo 250 GB - Recomendado 500 GB / 1 TB):** Obligatorio para cada alumno en el aula de informática.
- **Java Development Kit:** OpenJDK 21 LTS o Eclipse Temurin 21.
- **Entornos de Desarrollo (IDE):** Eclipse IDE for Java Developers (versión 2024-09 o superior) y Visual Studio Code con la extensión *Extension Pack for Java*.
- **Sistema Operativo:** Dual boot GNU/Linux Ubuntu 24.04 LTS / Windows 11 Education en el laboratorio.
