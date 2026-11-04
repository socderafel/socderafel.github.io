---
layout: default
title: "UD2: Entorns Integrats de Desenvolupament (IDE) i Depuració — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Entorns de Desenvolupament · UD2"
prev_url: "../ut01/index.html"
prev_label: "⬅️ UD1 Desenvolupament i Cicle"
next_url: "ut0201.html"
next_label: "Començar 2.1 ➡️"
---

# UD2: Entorns Integrats de Desenvolupament (IDE) i Depuració

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 2</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD2: Entorns Integrats de Desenvolupament (IDE) i Depuració** del mòdul professional d'**Entorns de Desenvolupament**.

L'eina de treball diària de qualsevol desenvolupador de programari és el seu **Entorn Integrat de Desenvolupament (IDE)**. Lluny de ser un simple editor de text, un IDE combina en una única interfície intel·ligent l'escriptura de codi amb autocompletat contextual, la gestió automatitzada de dependències i construcció de paquets (Maven/Gradle), la generació de documentació tècnica (Javadoc) i, especialment, un potent **depurador (debugger)** que permet inspeccionar la memòria i el flux d'execució en temps real.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA2)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA2:** Avalua entorns integrats de desenvolupament analitzant les seues característiques per a editar codi font i depurar aplicacions.
  - Reconèixer els components bàsics d'un IDE (editor, compilador, depurador, gestor de projectes).
  - Instal·lar i configurar un IDE corporatiu (IntelliJ IDEA / Eclipse / VS Code) i el kit de desenvolupament JDK.
  - Gestionar projectes, estructures de directoris i variables d'entorn (`JAVA_HOME`, `PATH`).
  - Utilitzar eines d'automatització de la construcció (Maven / Gradle) per a compilar i gestionar dependències externes.
  - Aplicar tècniques professionals de depuració mitjançant punts de ruptura ordinaris i condicionals.
  - Navegar pel flux d'execució pas a pas (*Step Over*, *Step Into*, *Step Out*) i analitzar la pila de crides (*Call Stack*).
  - Documentar codi Java mitjançant etiquetes Javadoc i generar manuals d'ús tècnics en HTML.

---

## 📑 Apartats de la Unitat

1. **[2.1 Concepte d'IDE i Components Fonamentals](ut0201.html)**
   - Què és un IDE, avantatges enfront d'editors plans, i comparativa exhaustiva: IntelliJ IDEA, Eclipse, NetBeans i VS Code.
2. **[2.2 Instal·lació, Configuració del JDK i Gestió de Projectes](ut0202.html)**
   - Instal·lació del JDK (Java Development Kit), variables `JAVA_HOME`, configuració de projectes, plugins i dreceres de teclat.
3. **[2.3 Compilació, Construcció i Sistemes de Dependències](ut0203.html)**
   - Del codi font Java al bytecode `.class` a la JVM. Gestors de construcció: Maven (`pom.xml`) i Gradle (`build.gradle`).
4. **[2.4 Tècniques de Depuració de Programari (Debugging)](ut0204.html)**
   - Punts de ruptura (Breakpoints), execució pas a pas, inspecció de memòria, rellotges (*watches*) i seguiment de la pila de crides.
5. **[2.5 Generació de Documentació Tècnica (Javadoc)](ut0205.html)**
   - Comentaris estructurats, etiquetes estàndard (`@param`, `@return`, `@throws`, `@author`), i compilació de la documentació HTML.

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua habilitat operativa en IDEs i depuració resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: El Depurador vs. Print</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per què la indústria professional desaconsella depurar aplicacions inserint 'System.out.println()' i exigeix utilitzar el depurador de l'IDE?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Perquè System.out.println consumeix massa tinta a la impressora.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Perquè el depurador permet pausar l'execució en qualsevol línia, inspeccionar l'estat exacte de tota la memòria i navegar pas a pas sense embrutar ni recompilar el codi font de producció.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Perquè la sentència System.out.println està prohibida a Java 17.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Perquè el depurador és un programari de pagament obligatori.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Breakpoint Condicional</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En un bucle que s'executa 50.000 vegades, volem detindre el programa només quan la variable 'i' arriba al valor 45.200. Com s'aconsegueix?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Prement la tecla Pause/Break ràpidament amb el teclat.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Configurant un Punt de Ruptura Condicional (Conditional Breakpoint) a l'IDE amb la condició 'i == 45200'.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Canviant el processador de l'ordinador.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Escrivint un bucle buit abans del programa.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: El Fitxer pom.xml de Maven</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quin és el propòsit fonamental del fitxer 'pom.xml' en un projecte gestionat amb Apache Maven?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Guardar les contrasenyes dels usuaris de Windows.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Declarar la configuració del projecte, les seues fases de construcció i la llista de llibreries/dependències externes que Maven descarregarà automàticament des dels repositoris centrals.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Generar el codi HTML de la interfície gràfica.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Controlar el consum de bateria de l'ordinador portàtil.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Etiqueta @throws en Javadoc</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">En la documentació Javadoc d'un mètode Java, per a què s'utilitza l'etiqueta '@throws' (o '@exception')?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) Per a indicar el nom de l'autor de la classe.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) Per a documentar quines excepcions pot llançar el mètode i en quines circumstàncies concretes es produiran.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Per a especificar el tipus de dada que retorna el mètode.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Per a marcar el mètode com a obsolet.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="aules-delivery-card" style="background:var(--bg-card); border:2px dashed var(--primary); border-radius:10px; padding:20px; margin-top:35px;">
  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
    <div>
      <h3 style="margin:0 0 5px 0; color:var(--primary); font-size:1.15rem;">📋 Lliurament d'Activitats a Aules</h3>
      <p style="margin:0; font-size:0.9rem; color:var(--text-muted);">
        En acabar de resoldre els reptes interactius d'aquest apartat, descarrega el justificant en PDF i puja'l a la tasca corresponent d'Aules.
      </p>
    </div>
    <button class="btn-aules-download" onclick="window.print()" style="background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:8px;">
      📥 Descarregar Justificant PDF
    </button>
  </div>
</div>
