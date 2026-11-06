---
layout: default
title: Programació de Serveis i Processos (PSP)
---

<div class="hero-course">
  <div class="hero-badge">2n DAM · CFGS Desenvolupament d'Aplicacions Multiplataforma · Codi 0490</div>
  <h1 class="hero-title">Programació de Serveis i Processos</h1>
  <p class="hero-subtitle">
    Guia didàctica, arquitectura de sistemes concurrents, processos, concurrència multifil en Java 21, comunicacions amb sòcols en xarxa, serveis web distribuïts i tècniques de programació segura.
  </p>
  <div class="course-meta-pills">
    <span class="meta-pill">⏱️ 70 hores lectives (3 h/setmana)</span>
    <span class="meta-pill">☕ Java 21 LTS · Eclipse / VS Code</span>
    <span class="meta-pill">💻 GNU/Linux Ubuntu & Windows 11</span>
    <span class="meta-pill">🏫 IES Sant Vicent Ferrer (Algemesí)</span>
  </div>
</div>

<div class="action-banner">
  <div class="action-banner-content">
    <span class="action-banner-badge">Curs Actiu 2025/2026</span>
    <h3 style="margin: 4px 0 8px 0; color: var(--navy-900);">Docent: José Ramón Simó Martínez</h3>
    <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">
      Material oficial adaptat al currículum LOMLOE / Decret de títol de FP per a DAM. Totes les pràctiques inclouen codi font en Java, exemples compilables, diagrames de fils i processos, exercicis de lliurament a Aules i qüestionaris d'autoavaluació.
    </p>
  </div>
  <div class="action-banner-btns">
    <a href="ut00/" class="btn btn-primary">🚀 Començar UT00</a>
    <a href="img/2526-2DAM-PSP-Guia Didàctica.pdf" class="btn btn-secondary" target="_blank">📄 Guia Didàctica PDF</a>
  </div>
</div>

---

## 🎯 Resultats d'Aprenentatge (RAs) del Mòdul

Segons el Reial Decret i l'Ordre Curricular de la Comunitat Valenciana, el mòdul s'estructura en 5 Resultats d'Aprenentatge fonamentals:

| Resultat d'Aprenentatge | Descripció Curricular | Unitats Temàtiques |
| :--- | :--- | :---: |
| **RA 1: Programació multiprocés** | Desenvolupa aplicacions compostes per diversos processos concurrents aplicant principis de programació paral·lela i resolent la comunicació i sincronització entre ells. | **UT01** |
| **RA 2: Programació multifil** | Desenvolupa aplicacions que integren múltiples fils d'execució (*threads*), coordinant la seua execució i garantint la consistència de la memòria compartida mitjançant monitors i sincronitzadors. | **UT02** |
| **RA 3: Comunicacions en xarxa** | Programa mecanismes de comunicació en xarxa fent ús de sòcols (*sockets*) TCP i UDP fiables i no fiables, dissenyant arquitectures client/servidor concurrents. | **UT03** |
| **RA 4: Serveis en xarxa** | Implementa serveis de comunicació estàndard utilitzant protocols de nivell d'aplicació (HTTP/REST, FTP, SMTP), emprant llibreries i clients asíncrons moderns. | **UT04** |
| **RA 5: Tècniques de programació segura** | Aplica tècniques de programació segura garantint la confidencialitat, integritat i autenticitat de la informació transferida mitjançant criptografia, certificats i comunicacions SSL/TLS. | **UT05** |

---

## 🗺️ Mapa de les Unitats de Treball (Temari)

<div class="courses-grid" style="margin-top: 20px;">

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#f1f5f9; color:#475569;">UT00 · Entorn</span>
      <h3 class="course-title"><a href="ut00/">Presentació i Entorn de Desenvolupament</a></h3>
    </div>
    <p class="course-desc">
      Guia docent, horaris, normes d'aula, configuració del JDK 21 LTS, IDEs Eclipse i Visual Studio Code, màquines virtuals i ús del disc SSD extern USB 3.2.
    </p>
    <div class="course-footer">
      <span>⏱️ 4 hores</span>
      <a href="ut00/" class="btn-link">Accedir a la unitat →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#dbeafe; color:#1e40af;">UT01 · Processos</span>
      <h3 class="course-title"><a href="ut01/">Programació Multiproceso</a></h3>
    </div>
    <p class="course-desc">
      Conceptes bàsics de processos en SO. La classe <code>ProcessBuilder</code> i <code>Process</code>. Gestió de fluxos d'E/S (pipes, redireccions). Projecte Pràctic: <em>MyShell</em>.
    </p>
    <div class="course-footer">
      <span>⏱️ 16 hores</span>
      <a href="ut01/" class="btn-link">Accedir a la unitat →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#fef3c7; color:#92400e;">UT02 · Fils</span>
      <h3 class="course-title"><a href="ut02/">Programació Multihilo</a></h3>
    </div>
    <p class="course-desc">
      Fils d'execució (*threads*). Cicle de vida i prioritats. Compartició de recursos, seccions crítiques i sincronització (<code>synchronized</code>, <code>wait()</code> / <code>notify()</code>). El paquet <code>java.util.concurrent</code>, <code>Callable</code> i *pools* d'executors.
    </p>
    <div class="course-footer">
      <span>⏱️ 18 hores</span>
      <a href="ut02/" class="btn-link">Accedir a la unitat →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#e0e7ff; color:#3730a3;">UT03 · Sòcols</span>
      <h3 class="course-title"><a href="ut03/">Comunicaciones en Red (Sockets)</a></h3>
    </div>
    <p class="course-desc">
      Fonaments de comunicacions IP. Programació amb sòcols no orientats a connexió (UDP <code>DatagramSocket</code>) i orientats a connexió (TCP <code>ServerSocket</code> / <code>Socket</code>). Servidors concurrents multihilo.
    </p>
    <div class="course-footer">
      <span>⏱️ 14 hores</span>
      <a href="ut03/" class="btn-link">Accedir a la unitat →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#dcfce7; color:#166534;">UT04 · Serveis</span>
      <h3 class="course-title"><a href="ut04/">Generación de Servicios en Red</a></h3>
    </div>
    <p class="course-desc">
      Serveis de nivell d'aplicació. Clients i servidors HTTP amb el nou <code>HttpClient</code> de Java. Consum d'APIs REST en format JSON. Serveis FTP i enviament de correu via SMTP.
    </p>
    <div class="course-footer">
      <span>⏱️ 10 hores</span>
      <a href="ut04/" class="btn-link">Accedir a la unitat →</a>
    </div>
  </div>

  <div class="course-card">
    <div class="course-header">
      <span class="course-badge" style="background:#fee2e2; color:#991b1b;">UT05 · Seguretat</span>
      <h3 class="course-title"><a href="ut05/">Técnicas de Programación Segura</a></h3>
    </div>
    <p class="course-desc">
      Principis de seguretat informàtica en aplicacions. Criptografia simètrica (AES) i asimètrica (RSA). Funcions resum (*hash* SHA-256). Gestió de claus amb <code>KeyStore</code>. Comunicacions xifrades mitjançant SSL/TLS (<code>SSLSocket</code>).
    </p>
    <div class="course-footer">
      <span>⏱️ 8 hores</span>
      <a href="ut05/" class="btn-link">Accedir a la unitat →</a>
    </div>
  </div>

</div>

---

## 📊 Criteris de Qualificació (Curs 2025/2026)

D'acord amb el document oficial de criteris de qualificació del departament d'Informàtica:

### 1a Avaluació (UT01 + UT02)
- **40%**: Proves teoricopràctiques tipus test d'Aules (Qüestionaris UT01).
- **40%**: Proves teoricopràctiques tipus test d'Aules (Qüestionaris UT02).
- **20%**: Projecte Pràctic MyShell / Exercicis pràctics de processos i fils.

### 2a Avaluació (UT03 + UT04 + UT05)
- **80%**: Examen Pràctic global de programació al laboratori (Processos, Fils, Sòcols i Serveis).
- **20%**: Projecte Pràctic de Comunicacions en Xarxa / Tasques d'Aules.

> [!IMPORTANT]
> **Condició d'Aprovat:** Per aprovar cada avaluació és requisit indispensable obtindre una nota mínima de **4 sobre 10** en cadascuna de les parts avaluades (tests i projecte/examen pràctic), a més d'assolir una mitjana ponderada igual o superior a **5,0**.

---

## 🛠️ Requisits de Maquinari i Programari

- **Disc dur SSD extern USB 3.2 (Mínim 250 GB - Recomanat 500 GB / 1 TB):** Obligatori per a cada alumne a l'aula d'informàtica.
- **Java Development Kit:** OpenJDK 21 LTS o Eclipse Temurin 21.
- **Entorns de Desenvolupament (IDE):** Eclipse IDE for Java Developers (versió 2024-09 o superior) i Visual Studio Code amb l'extensió *Extension Pack for Java*.
- **Sistema Operatiu:** Dual boot GNU/Linux Ubuntu 24.04 LTS / Windows 11 Education al laboratori.
