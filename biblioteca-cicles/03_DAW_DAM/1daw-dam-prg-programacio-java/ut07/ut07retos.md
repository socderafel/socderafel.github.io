---
title: "Reptes de programació UT7"
unit: "7"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT07"
---

<div class="interactive-progress-tracker">
  <div class="tracker-header">
    <span>🏆 <strong>Progrés d'aquesta secció:</strong> <span class="tracker-count">0 de 4 superats (0%)</span></span>
    <span class="tracker-pts">⭐ <strong>0 punts</strong></span>
  </div>
  <div class="tracker-bar">
    <div class="tracker-fill" style="width: 0%;"></div>
  </div>
</div>

# Reptes de programació UT7

**< volver a actividades**

> **📌 Empaquetar reptes**
> 

> Empaqueta les activitats, dins de la carpeta **`ut07`**, en la carpeta **`retos`**.

> Les activitats programades en aquesta secció **Reptes** no són obligatòries.

<details markdown="1">

<summary>💡 Exemple de connexió i accés a base de dades</summary>

Vegem un exemple complet de connexió i accés a una base de dades utilitzant tots els elements mencionats en aquest apartat.

```sql
try {
  // Cargamos la clase que implementa el Driver
  Class.forName("com.mysql.cj.jdbc.Driver").newInstance();

  // Creamos una nueva conexión a la base de datos 'miBaseDeDatos'
  String jdbc_url = "jdbc:mysql://localhost:3306/pr_tuNombre";
  String usuario = "pr_tuNombre";
  String passwd = "tuContraseña";

  Connection conn = DriverManager.getConnection(jdbc_url,usuario,passwd);

  // Obtenemos un Statement de la conexión
  Statement st = conn.createStatement();

  // Ejecutamos una consulta SELECT para obtener la tabla vendedores
  String sql = "SELECT * FROM vendedores";

  ResultSet rs = st.executeQuery(sql);

  // Recorremos todo el ResultSet y mostramos sus datos

  while(rs.next()) {
    int id        = rs.getInt("id");
    String nombre = rs.getString("nombre");
    Date fecha    = rs.getDate("fecha_ingreso");
    float salario = rs.getFloat("salario");
    System.out.println(id + " " + nombre + " " + fecha + " " + salario);
  }

  // Cerramos el statement y la conexión
  st.close();
  conn.close();

} catch (SQLException e) {
    System.out.println("ERROR: " + e.getMessage());

} catch (Exception e) {
    System.out.println("ERROR: " + e.getMessage());
} finally {
    try{
        if (rs != null){
            rs.close();
        }
    } catch (){
        System.out.println("ERROR: " + e.getMessage());
    }
} finally {
    try{
        if (st != null){
            rs.close();
        }
    } catch (){
        System.out.println("ERROR: " + e.getMessage());
    }   
} finally {
    try{
        if (conn != null){
            rs.close();
        }
    } catch (){
        System.out.println("ERROR: " + e.getMessage());
    }   
}
```

</details>

### Repte 01

**Gestió d'inventari en un sistema de botiga**: Crea una aplicació Java que gestione una base de dades de productes per a una botiga. 

La taula `productos` conté columnes com `id`, `nombre`, `precio` i `cantidad`. 

Implementa una classe **`Producto`** i utilitza un mètode `mostrarInventario()` per a mostrar la informació dels productes emmagatzemats en la base de dades.

Operacions:

- Mostrar tots els productes en inventari.

- Consultar un producte específic pel seu ID.

### Repte 02

**Registre d'empleats en una base de dades**: Crea una aplicació Java que permeta registrar empleats en una base de dades. 

La taula `empleados` té columnes com `id`, `nombre`, `departamento`, i `salario`. 

Implementa una classe **`Empleado`** i un mètode `registrarEmpleado()` que almacene les dades en la base de dades.

Operacions:

- Registrar un nou empleat.

- Mostrar la llista d'empleats registrats.

### Repte 03

**Identificació de les propietats d'una connexió JDBC**: Desenvolupa un programa en Java que conecte a una base de dades utilitzant JDBC. 

El programa ha d'identificar i mostrar les propietats de la connexió, com el nom de la base de dades, l'usuari actual, i les característiques del sistema gestor de bases de dades.

Operacions:

- Mostrar la versió del sistema gestor de la base de dades.

- Mostrar el nom de l'usuari connectat.

### Repte 04

**Registrar productes en una base de dades**: Crea una aplicació que permeta registrar productes en una base de dades relacional. 

La taula `productos` conté columnes com `id`, `nombre`, `precio`, `stock`. 

Implementa un mètode per a inserir un nou producte i emmagatzemar la informació.

Operacions:

- Inserir un nou producte.

- Verificar si el producte es ha emmagatzemat correctament.

### Repte 05

**Registre de transaccions bancarias**: Desenvolupa una aplicació que permeta registrar transaccions en una taula `transacciones` amb columnes com `id`, `cuenta_origen`, `cuenta_destino`, `monto`, i `fecha`. 

El programa ha d'emmagatzemar la transacció en la base de dades.

Operacions:

- Registrar una nova transacció.

- Verificar si la transacció es ha registrat correctament.

### Repte 06

**Consultar clients en una base de dades**: Desenvolupa una aplicació Java que permeta consultar les dades de la taula `clientes`. 

Implementa un mètode `mostrarClientes()` que recupere i mostre tots els registres de clients emmagatzemats en la base de dades.

Operacions:

- Mostrar tots els clients.

- Consultar un client pel seu ID.

### Repte 07

**Mostrar el catàleg d'una botiga en línia**: Crea una aplicació que conecte a la base de dades d'una botiga en línia i mostre el catàleg de productes emmagatzemats. 

Els productes han de visualizar-se amb el seu `id`, `nombre`, `precio`, i `disponibilidad`.

Operacions:

- Mostrar tots els productes disponibles.

- Consultar un producte pel seu nom.

**< tornar a activitats**



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Reptes de programació UT7** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Per què és fonamental utilitzar PreparedStatement amb paràmetres '?' en lloc de concatenar cadenes en Statement en accedir a bases de dades amb JDBC?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Perquè precompila la sentència SQL i protegeix l'aplicació contra atacs d'Injecció SQL (SQL Injection).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Perquè Statement no permet executar consultes SELECT.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Perquè PreparedStatement no necessita connexió a la base de dades.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quin patró de disseny de programari separa completament la lògica de negoci de la lògica d'accés i persistència a la base de dades mitjançant classes i interfícies dedicades?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Patró Singleton d'impressió.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Recursivitat indirecta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Patró DAO (Data Access Object).</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> En JDBC, el mètode executeQuery() s'utilitza per a consultes SELECT (retorna un ResultSet), mentre que executeUpdate() s'utilitza per a INSERT, UPDATE i DELETE.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="next" data-hint="Següent en anglès (4 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin mètode de l'objecte ResultSet s'invoca dins d'un bucle 'while' per a avançar el cursor a la següent fila de resultats?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Reptes de programació UT7**):

- [ ] He llegit detingudament la teoria o l'enunciat d'aquesta secció i he anotat els conceptes clau.
- [ ] He revisat els esquemes, taules o blocs de codi i he verificat que sé aplicar-los a l'entorn de treball.
- [ ] He resolt correctament els **4 reptes interactius** superiors obtenint els **100 punts XP**.
- [ ] He descarregat el comprovant oficial en PDF per a adjuntar-lo a la tasca d'**Aules**.

<div class="aules-delivery-card">
  <h3>📤 Comprovant de Lliurament per a Aules</h3>
  <p>Quan hages completat els reptes interactius i la llista d'autoavaluació d'aquesta pàgina, introdueix el teu nom i descarrega el teu certificat oficial en PDF per a adjuntar-lo a la tasca d'<strong>Aules</strong>.</p>
  <div class="aules-student-field">
    <label for="aules-student-name">👤 Nom i Cognoms de l'Alumne/a:</label>
    <input type="text" id="aules-student-name" class="aules-student-name" placeholder="Ex: Joan Garcia Pérez" />
  </div>
  <div class="aules-score-badge">
    <span class="aules-score-count">0/4 reptes completats (0%) · 0 punts · 0/4 criteris d'autoavaluació</span>
  </div>
  <div class="aules-actions">
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD07" data-activity="ut07retos">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

