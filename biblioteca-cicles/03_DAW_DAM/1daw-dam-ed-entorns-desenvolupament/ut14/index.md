---
layout: default
title: "UD14: Optimització de Codi, Refactorització i Documentació amb Javadoc — Entorns de Desenvolupament"
course_root: ".."
badge: "1r DAW / DAM · Grau Superior · UD14"
---

# UD14: Optimització de Codi, Refactorització i Documentació amb Javadoc

<div style="text-align: center; margin: 1.5rem 0;">
<svg viewBox="0 0 860 260" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; font-family: 'Segoe UI', system-ui, sans-serif; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.35);">
  <defs>
    <linearGradient id="bg-grad-ed14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="g-smell14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-refact14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-clean14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#34d399" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="g-doc14" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="860" height="260" rx="12" fill="url(#bg-grad-ed14)"/>

  <!-- Capçalera -->
  <text x="430" y="36" text-anchor="middle" fill="#f8fafc" font-size="19" font-weight="bold">OPTIMITZACIÓ DE CODI, REFACTORITZACIÓ I JAVADOC</text>
  <text x="430" y="56" text-anchor="middle" fill="#94a3b8" font-size="12">Detecció de males olors (Code Smells), tècniques de refactorització de Fowler, principis de Codi Net i Javadoc</text>

  <!-- Bloc 1: Males Olors -->
  <g transform="translate(25, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-smell14)" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#38bdf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold">👃</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Males Olors</text>
    <text x="15" y="62" fill="#38bdf8" font-size="11" font-weight="600">Code Smells</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Codi duplicat (Duplication)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Mètode llarg (Long Method)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Classe déu (God Class)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Llista llarga de paràmetres</text>
  </g>

  <!-- Bloc 2: Refactorització -->
  <g transform="translate(230, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-refact14)" stroke="#818cf8" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#818cf8" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#818cf8" font-size="14" font-weight="bold">🔧</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Refactorització</text>
    <text x="15" y="62" fill="#818cf8" font-size="11" font-weight="600">Catàleg de Fowler</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Extreure mètode (Extract)</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Reanomenar símbols (Rename)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Encapsular camp (Getter/Set)</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Introduir objecte paràmetre</text>
  </g>

  <!-- Bloc 3: Codi Net & SOLID -->
  <g transform="translate(435, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-clean14)" stroke="#34d399" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#34d399" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold">✨</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Codi Net</text>
    <text x="15" y="62" fill="#34d399" font-size="11" font-weight="600">Clean Code &amp; SOLID</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Noms expressius i semàntics</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Responsabilitat única (SRP)</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Evitar efectes secundaris</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• La regla del Boy Scout</text>
  </g>

  <!-- Bloc 4: Javadoc -->
  <g transform="translate(640, 70)">
    <rect width="185" height="165" rx="10" fill="url(#g-doc14)" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="14" width="28" height="28" rx="6" fill="#f59e0b" fill-opacity="0.2"/>
    <text x="29" y="33" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="bold">📚</text>
    <text x="52" y="33" fill="#f8fafc" font-size="13" font-weight="bold">Javadoc</text>
    <text x="15" y="62" fill="#f59e0b" font-size="11" font-weight="600">Documentació Estàndard</text>
    <text x="15" y="84" fill="#cbd5e1" font-size="11">• Comentaris /** ... */</text>
    <text x="15" y="104" fill="#cbd5e1" font-size="11">• Etiquetes: @param, @return</text>
    <text x="15" y="124" fill="#cbd5e1" font-size="11">• Etiquetes: @throws, @author</text>
    <text x="15" y="144" fill="#cbd5e1" font-size="11">• Generació d'HTML amb l'IDE</text>
  </g>
</svg>
</div>

Un programa que funciona però que és difícil d'entendre, de modificar o d'ampliar és un problema greu d'enginyeria. El codi passa el $80\%$ del seu temps sent llegit i mantingut per altres programadors. En aquesta unitat s'explora el concepte de **Refactorització**, la identificació de símptomes de degradació del disseny coneguts com a **Males Olors de Codi (*Code Smells*)**, les regles per a escriure **Codi Net (*Clean Code*)** i la generació de documentació tècnica professional amb l'estàndard **Javadoc**.

---

## 14.1 Què és la Refactorització (*Refactoring*)?

Segons Martin Fowler, la **refactorització** és:
> *"Una modificació realitzada a l'estructura interna d'un programari per a fer-lo més fàcil d'entendre i més barat de modificar, sense alterar en absolut el seu comportament extern observable."*

### La regla d'or de la refactorització:
**Mai es refactoritza sense una suite de proves unitàries automatitzades prèvia!** Les proves en verd són l'única garantia que la reestructuració del codi no ha trencat accidentalment cap funcionalitat existent.

---

## 14.2 Catàleg de Males Olors de Codi (*Code Smells*)

Un *Code Smell* no és un error sintàctic que impedisca compilar; és un indici que el disseny està degradant-se i que en el futur provocarà fallades i encarirà el manteniment:

1. **Codi Duplicat (*Duplicated Code*):** El mateix fragment de lògica apareix repetit en dos o més llocs. Si cal canviar una regla de negoci, s'haurà de recordar canviar-la a tots els llocs, provocant incoherències.
2. **Mètode Llarg (*Long Method*):** Un mètode de 80 línies que fa massa coses (valida dades, calcula, imprimeix, guarda a base de dades). Com més llarg és un mètode, més difícil és de comprendre i provar.
3. **Classe Déu (*God Class / Large Class*):** Una classe gegant que acumula desenes d'atributs i responsabilitats, violant el principi de responsabilitat única (SRP).
4. **Llista Llarga de Paràmetres (*Long Parameter List*):** Mètodes que reben 5, 6 o més arguments, dificultant la lectura i propiciant errors d'ordre.
5. **Obsessió per Primitius (*Primitive Obsession*):** Utilitzar cadenes de text o enters per a representar conceptes del domini (ex. un DNI com a `String`, un interval com a dos `int`) en lloc de xicotets objectes immutables amb les seues pròpies validacions.

---

## 14.3 Principals Tècniques de Refactorització

| Tècnica | En què consisteix? | Mala olor que soluciona |
| :--- | :--- | :--- |
| **Extract Method (Extreure Mètode)** | Pren un fragment de codi que fa una subtasca i crea un nou mètode privat amb un nom expressiu. | Mètode Llarg / Codi Duplicat |
| **Rename Symbol (Reanomenar)** | Canvia el nom d'una variable, mètode o classe per un terme que descrigui clarament el seu propòsit. | Noms críptics o desactualitzats |
| **Encapsulate Field (Encapsular Camp)** | Canvia un atribut de `public` a `private` i afegeix mètodes d'accés (*getters* i *setters*). | Violació d'encapsulament |
| **Introduce Parameter Object** | Agrupa un conjunt de paràmetres freqüents en una nova classe (ex. `dataInicial` i `dataFinal` en `RangDates`). | Llista Llarga de Paràmetres |
| **Replace Magic Number with Constant** | Substitueix un número màgic (`0.21`, `3600`) per una constant amb nom (`IVA_GENERAL`, `SEGONS_PER_HORA`). | Manca de llegibilitat |

---

## 14.4 Documentació Tècnica amb Javadoc

**Javadoc** és la ferramenta oficial de Java que analitza el codi font i genera automàticament un conjunt de pàgines web en format HTML que documenten l'API pública del sistema.

### Estructura d'un comentari Javadoc:
Comença obligatòriament amb `/**` i s'ubica immediatament **abans** de la declaració de la classe, atribut o mètode:

```java
/**
 * Representa un compte bancari amb saldo i gestió d'interessos.
 *
 * @author Departament d'Informàtica
 * @version 2.0 (Octubre 2026)
 */
public class CompteBancari {

    /**
     * Retira una quantitat econòmica del compte actual.
     *
     * @param quantitat L'import positiu en euros a retirar del compte.
     * @return El saldo restant després de completar l'operació.
     * @throws IllegalArgumentException Si la quantitat és negativa o zero.
     * @throws IllegalStateException Si el compte no disposa de saldo suficient.
     * @see #ingressar(double)
     */
    public double retirar(double quantitat) throws IllegalArgumentException, IllegalStateException {
        if (quantitat <= 0) {
            throw new IllegalArgumentException("La quantitat ha de ser estrictament positiva");
        }
        if (quantitat > this.saldo) {
            throw new IllegalStateException("Saldo insuficient per a completar la retirada");
        }
        this.saldo -= quantitat;
        return this.saldo;
    }
}
```

---

## 📝 Quadern d'Activitats Pràctiques i Reptes de Laboratori

### Bloc A: Fonaments, Dimensionament i Anàlisi de Rendiment

#### Exercici 1: Detecció de Males Olors (Code Smells) en un fragment heretat
Analitza el següent mètode:

```java
public void p(String n, String c, int e, double s, String t, String d, boolean a) {
    System.out.println("Processant " + n);
    // 60 línies de codi de comprovació de caràcters
    double d1 = s * 0.21;
    System.out.println("Impost 1: " + d1);
    // Altres 40 línies de codi duplicades d'un altre mètode
    double d2 = s * 0.21;
    System.out.println("Impost 2: " + d2);
}
```

1. Localitza exactament **4 Code Smells greus** presents en aquest fragment citant el nom tècnic de cadascun.
2. Quines tècniques de refactorització de Martin Fowler s'han d'aplicar per a corregir cadascuna de les 4 males olors identificades?

#### Exercici 2: Càlcul de reducció de complexitat mitjançant *Extract Method*
Un mètode monolític `processarComanda` té una mida de $95\text{ línies}$ i una complexitat ciclomàtica de McCabe de $V(G) = 17$.
Es refactoritza extraient:
- Un mètode `validarStock()` amb $V(G) = 4$.
- Un mètode `calcularDescomptes()` amb $V(G) = 5$.
- Un mètode `generarFactura()` amb $V(G) = 3$.
1. Quina és la nova complexitat ciclomàtica del mètode principal `processarComanda` després d'extraure les tres subtasques?
2. Ha passat el mètode a situar-se per sota del llindar màxim recomanat de $10$?

#### Exercici 3: Auditoria de comentaris Javadoc
Observa el següent comentari Javadoc:
```java
/**
 * Calcula l'àrea d'un triangle.
 * @param base
 * @return void
 */
public double area(double b, double h) {
    return (b * h) / 2.0;
}
```
1. Quines **3 errades greus de documentació** conté aquest comentari (paràmetre no descrit, paràmetre omès `h`, tipus de retorn contradictori)?
2. Escriu el comentari Javadoc corregit i complet seguint els estàndards oficials d'Oracle.

---

### Bloc B: Reptes Pràctics de Laboratori i Taller / Comandes

#### Repte 1: Refactorització assistida amb l'IDE
- **Objectiu:** Utilitzar les eines automatitzades de l'IDE per reestructurar codi sense cometre errades d'edició manual.
- **Procediment de taller:**
  1. Obre a l'IDE una classe amb un mètode llarg que calcule la nota mitjana d'un curs i mostre un resum per consola.
  2. Selecciona les línies que imprimeixen el resum i utilitza la combinació de tecles d'extracció de mètode (`Ctrl+Alt+M` en IntelliJ / `Shift+Alt+M` en Eclipse).
  3. Assigna el nom `imprimirResumQualificacions`.
  4. Utilitza la drecera de reanomenat (`Shift+F6`) sobre una variable mal anomenada `x` i canvia-la a `notaFinal`. Comprova com l'IDE canvia totes les ocurrències de forma atòmica.

#### Repte 2: Documentació integral d'un paquet de classes amb Javadoc
- **Objectiu:** Documentar completament el model de dades d'una biblioteca municipal.
- **Requisits:**
  1. Documenta la classe `Llibre` amb `@author` i `@version`.
  2. Documenta cadascun dels atributs amb una breu descripció.
  3. Documenta tots els constructors i mètodes públics especificant `@param`, `@return` i `@throws`.

#### Repte 3: Generació de la documentació HTML des de la Consola
- **Objectiu:** Generar el lloc web de documentació tècnica amb la ferramenta `javadoc`.
- **Comanda a executar des del terminal:**
  ```bash
  javadoc -d docs/api \
          -author \
          -version \
          -encoding UTF-8 \
          -docencoding UTF-8 \
          -charset UTF-8 \
          -sourcepath src/main/java \
          -subpackages org.cicles.biblioteca
  ```
- Obre el fitxer `docs/api/index.html` en el teu navegador web i navega per la documentació generada.

---

### Bloc C: Llista de Verificació i Rúbrica d'Avaluació Competencial

#### Llista de comprovació per a l'alumnat
- [ ] He comprès que la refactorització millora el disseny intern sense alterar el comportament exterior.
- [ ] He verificat que tinc una suite de proves unitàries abans d'iniciar qualsevol refactorització.
- [ ] He identificat males olors clàssiques com mètode llarg, codi duplicat i classe déu.
- [ ] He utilitzat la tècnica *Extract Method* per a reduir la mida i complexitat dels mètodes.
- [ ] He aplicat noms expressius seguint la filosofia de Codi Net (*Clean Code*).
- [ ] He redactat comentaris Javadoc correctes emprant `@param`, `@return` i `@throws`.
- [ ] He generat el lloc web de documentació tècnica HTML mitjançant la utilitat `javadoc`.

#### Rúbrica d'avaluació d'aprenentatge
| Criteri d'Avaluació | Excel·lent (9-10) | Notable (7-8) | Aprovat (5-6) | No Assolit (0-4) |
| :--- | :--- | :--- | :--- | :--- |
| **Detecció de Code Smells** | Identifica i cataloga amb precisió qualsevol mala olor de codi explicant l'impacte en el manteniment. | Localitza duplicitats, mètodes massa llargs i noms críptics en classes heretades. | Reconeix que un codi és desordenat però té dificultats per anomenar les males olors tècnicament. | Considera que un codi és bo simplement si compila i executa sense errors. |
| **Tècniques de Refactorització** | Domina les eines de refactorització de l'IDE (Extract Method, Rename, Encapsulate) recolzat en proves unitàries. | Aplica refactoritzacions bàsiques que milloren la llegibilitat i redueixen la complexitat. | Fa canvis manuals al codi però de vegades introdueix errors de compilació per no emprar l'IDE. | Modifica codi a cegues sense proves unitàries que avalen el comportament extern. |
| **Filosofia de Codi Net (Clean Code)** | Escriu codi expressiu, modular, amb responsabilitat única i respectant la regla del Boy Scout. | Escriu codi net amb nomenclatura entenedora i mètodes de mida continguda. | Fa servir noms acceptables però manté mètodes amb efectes secundaris o paràmetres redundants. | Escriu codi espagueti amb variables d'una sola lletra i blocs gegants incomprensibles. |
| **Documentació amb Javadoc** | Documenta l'API pública de manera exhaustiva i genera pàgines HTML lliures d'advertències de compilador. | Redacta comentaris Javadoc complets amb @param, @return i @throws funcionals. | Afegeix comentaris Javadoc però omet descripcions de paràmetres o tipus d'excepció. | No utilitza comentaris Javadoc o redacta comentaris redundants que no aporten valor. |
