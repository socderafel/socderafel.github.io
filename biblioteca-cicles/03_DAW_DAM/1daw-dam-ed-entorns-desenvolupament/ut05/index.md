---
layout: default
title: "UD5: Disseny i Realització de Proves de Programari — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Entorns de Desenvolupament · UD5"
prev_url: "../ut04/index.html"
prev_label: "⬅️ UD4 UML Comportament"
next_url: "ut0501.html"
next_label: "Començar 5.1 ➡️"
---

# UD5: Disseny i Realització de Proves de Programari

<div class="interactive-progress-tracker" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:12px 18px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center;">
  <div>
    <span style="font-weight:700; color:var(--primary);">Progrés de la Unitat Didàctica 5</span>
    <div style="font-size:0.85rem; color:var(--text-muted);" class="tracker-count">0 de 4 reptes superats (0%)</div>
  </div>
  <div style="width:120px; height:10px; background:var(--border); border-radius:5px; overflow:hidden;">
    <div class="progress-bar" style="width:0%; height:100%; background:var(--primary); transition:width 0.3s ease;"></div>
  </div>
</div>

Benvingut/da a la **UD5: Disseny i Realització de Proves de Programari: Caixa Negra, Caixa Blanca (McCabe) i JUnit 5** del mòdul professional d'**Entorns de Desenvolupament**.

El cèlebre científic de la computació Edsger W. Dijkstra va pronunciar una veritat lapidària: *"Les proves de programari poden demostrar la presència de defectes, però mai la seua absència"*. No obstant això, un sistema no sotmès a proves rigoroses és una bomba de rellotgeria. En aquesta unitat dominarem les tècniques d'enginyeria per dissenyar casos de prova sistemàtics (particions d'equivalència, anàlisi de valors límit, camins bàsics de McCabe) i implementarem bateries de proves automatitzades utilitzant el marc de treball estàndard **JUnit 5**.

---

## 🎯 Objectius i Resultats d'Aprenentatge (RA3)

Segons el currículum oficial (Reials Decrets 453/2010 i 686/2010):
- **RA3:** Dissenya i realitza proves verificant el comportament d'aplicacions i documentant els resultats obtinguts.
  - Distingir amb claredat conceptual entre error, defecte (*bug*) i fallada (*failure*).
  - Reconèixer els nivells de prova: unitàries, d'integració, de sistema i d'acceptació.
  - Aplicar estratègies de caixa negra: particions d'equivalència i anàlisi de valors límit.
  - Dibuixar grafs de flux de control i calcular la complexitat ciclomàtica de McCabe per a proves de caixa blanca.
  - Escriure classes de proves unitàries automatitzades amb JUnit 5 utilitzant anotacions de cicle de vida i assercions.
  - Dissenyar proves parametritzades amb `@ParameterizedTest` i fonts de dades `@CsvSource`.
  - Avaluar la cobertura de codi (*code coverage*) amb eines especialitzades.

---

## 📑 Apartats de la Unitat

1. **[5.1 Fonaments de les Proves de Programari](ut0501.html)**
   - Terminologia IEEE: error, defecte i fallada. Els nivells de prova (unitàries, integració, sistema, acceptació) i proves de regressió.
2. **[5.2 Disseny de Proves de Caixa Negra (Black-Box)](ut0502.html)**
   - Particions d'equivalència (classes vàlides i invàlides), anàlisi de valors límit (BVA) i taules de decisió.
3. **[5.3 Disseny de Proves de Caixa Blanca: McCabe](ut0503.html)**
   - Graf de flux de control (CFG), càlcul de la complexitat ciclomàtica V(G), camins linealment independents i criteris de cobertura.
4. **[5.4 Automatització de Proves Unitàries amb JUnit 5](ut0504.html)**
   - Arquitectura Jupiter, anotacions de cicle de vida (@Test, @BeforeEach, etc.), assercions i verificació d'excepcions (@assertThrows).
5. **[5.5 Proves Parametritzades i Cobertura de Codi](ut0505.html)**
   - @ParameterizedTest amb @ValueSource i @CsvSource, mètriques de cobertura amb JaCoCo i el patró AAA (Arrange, Act, Assert).

---

## 🏆 Reptes Globals de Síntesi de la Unitat (+100 XP)

Demostra la teua precisió en enginyeria de proves de programari resolent aquests 4 reptes de síntesi:

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 1: Error, Defecte i Fallada</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Un programador s'equivoca i escriu '<' en lloc de '<='. Aquest equívoc queda escrit al fitxer Java. Mesos després, un client introdueix el valor 18 i el sistema li denega l'accés. Quin és el 'defecte' i quina és la 'fallada'?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) L'error és el client, el defecte és el sistema operatiu i la fallada és la targeta gràfica.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) El defecte (bug) és el símbol '<' escrit incorrectament en el codi font, i la fallada és la manifestació externa incorrecta de denegar l'accés quan l'usuari tenia 18 anys.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Defecte i fallada són paraules exactament idèntiques que descriuen el mateix concepte físic.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) No hi ha cap fallada perquè l'ordinador no s'ha apagat.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 2: Càlcul de McCabe</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Un mètode té un graf de flux de control amb 10 arestes (E), 8 nodes (N) i 1 component connex (P=1). Quina és la seua Complexitat Ciclomàtica V(G) segons la fórmula V(G) = E - N + 2P?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) V(G) = 10 - 8 + 2 = 4 (calen com a mínim 4 casos de prova linealment independents per cobrir totes les branques).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) V(G) = 18</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) V(G) = 0</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) V(G) = 100</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 3: Anotació @BeforeEach a JUnit 5</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Quina és la utilitat de marcar un mètode amb l'anotació '@BeforeEach' en una classe de proves JUnit?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) S'executa una sola vegada en iniciar l'ordinador.</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) S'executa automàticament abans de cadascun dels mètodes de prova @Test, permetent inicialitzar objectes i deixar l'entorn net i aïllat.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) Desinstal·la les llibreries que no s'usen.</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) Marca el test com a fallit abans de començar.</button>
  </div>
  <div class="feedback-msg" style="margin-top:12px; font-weight:600; display:none;"></div>
</div>

<div class="interactive-challenge-card" data-points="25" style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:20px; margin:20px 0;">
  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
    <span style="font-weight:700; color:var(--primary); font-size:1.05rem;">🎯 Repte Global 4: Anàlisi de Valors Límit</span>
    <span style="background:var(--primary); color:#fff; padding:3px 8px; border-radius:4px; font-size:0.8rem; font-weight:700;">+25 punts</span>
  </div>
  <p style="margin-bottom:15px;">Per a un camp d'edat que admet valors vàlids entre 18 i 65 anys (inclosos), quins valors representen l'anàlisi de valors límit en la frontera inferior?</p>
  <div class="challenge-options" style="display:flex; flex-direction:column; gap:8px;">
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">A) 0, 10, 50</button>
    <button class="btn-check" data-correct="true" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">B) 17 (límit invàlid immediat), 18 (límit vàlid mínim) i 19 (valor just a l'interior).</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">C) 100, 200, 300</button>
    <button class="btn-check" data-correct="false" style="text-align:left; padding:10px 14px; border:1px solid var(--border); border-radius:6px; background:var(--bg-main); cursor:pointer;">D) -18, -19</button>
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
