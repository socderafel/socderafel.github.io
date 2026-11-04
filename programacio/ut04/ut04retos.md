---
title: "Reptes de programació UT4"
unit: "4"
module: "PRG"
layout: "default"
course_root: ".."
badge: "1r DAW / DAM · Programació · UT04"
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

# Reptes de programació UT4

> **📌 Empaquetar reptes**
> 

> Empaqueta les activitats, dins de la carpeta **`ut04`**, en la carpeta **`retos`**.

> Les activitats programades en aquesta secció **Reptes** no són obligatòries.

### Repte 01

Crea la classe **`Peso`**, la qual tindrà les següents característiques:

- Haurà de tindre un atribut on es almacene el pes d'un objecte en kilogramos.

- En el constructor es li pasará el *pes* i la *mesura* en la que es ha pres ("*Lb*" per a libras, "*Li*" per a lingotes, "*Oz*" per a onzas, "*P*" per a peniques, "*K*" per a kilos, "*G*" per a gramos i "*Q*" per a quintals).

- Haurà de de tindre els següents mètodes:

  - `getLibras`. Retorna el pes en libras.

  - `getLingotes`. Retorna el pes en lingotes.

  - `getPeso`. Retorna el pes en la mesura que es passe com paràmetre ("*Lb*" per a libras, "*Li*" per a lingotes, "*Oz*" per a onzas, "*P*" per a peniques, "*K*" per a kilos, "*G*" per a gramos i "*Q*" per a quintals).

- Per a la realització de l'exercici pren com referència els següents dades:

  - *1 Libra = 16 onzas = 453 gramos.*

  - *1 Lingote = 32,17 libras = 14,59 kg.*

  - *1 Onza = 0,0625 libras = 28,35 gramos.*

  - *1 Penique = 0,05 onzas = 1,55 gramos.*`

  - *1 Quintal = 100 libras = 43,3 kg.*`

- Crea a més una classe **`TestPeso`** per a testear i verificar els mètodes d'aquesta classe.

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte conté dos classes:

```java
public class Peso {
        //Atributos
        private double kilos;

        //Constructor
        public Peso(double kilos, String medida){
            this.kilos = kilos;

            //Transformar el dato a kilos, según la medida en la que se pasen.
            if (medida.equals("Lb")) {
                this.kilos = kilos * 0.453;
            }else if (medida.equals("Li")) { // Lingotes
                this.kilos = kilos * 14.59;
            } else if (medida.equals("Oz")) { // Onzas
                this.kilos = kilos * 0.02835;
            } else if (medida.equals("P")) { // Peniques
                this.kilos = kilos * 0.00155;
            } else if (medida.equals("G")) { // Gramos
                this.kilos = kilos / 1000;
            } else if (medida.equals("Q")) { // Quintales
                this.kilos = kilos * 43.3;
            } else{
                this.kilos = kilos;
            }
        }

        /*
        * getLibras. Devuelve el peso en libras.
        */
        public double getLibras() {
            return this.kilos / 0.453;
        }

        /*
        * getLingotes. Devuelve el peso en lingotes.
        */
        public double getLingotes() {
            return this.kilos / 14.59;
        }

        /*
        * getPeso. Devuelve el peso en la medida que se pase como parámetro 
        * ("Lb" para libras, "Li" para lingotes, "Oz" para onzas, "P" para peniques, "K" para kilos, "G" para gramos y "Q" para quintales).
        */
        public double getPeso(String medida) {
            //Aunque está solución lo hace con un 'switch', también es válido con if...else if ... else
            switch (medida) {
                case "Lb":
                    return this.getLibras();
                case "Li":
                    return this.getLingotes();
                case "Oz":
                    return this.kilos / 0.02835;
                case "P":
                    return this.kilos / 0.00155;
                case "G":
                    return this.kilos * 1000;
                case "Q":
                    return this.kilos / 43.3;
                default:
                    return this.kilos;
            }
        }

    }
```

```java
public class TestPeso {
        public static void main(String[] args) {
            //Dentro del main podeis crear tantas instancias como querais para ir probando diferentes situaciones.
            Peso p1 = new Peso(84.5, "Lb");
            System.out.println("Peso en kg: " + p1.getPeso("K"));
            System.out.println("Peso en libras: " + p1.getLibras());
            System.out.println("Peso en lingotes: " + p1.getLingotes());
            System.out.println("Peso en gramos: " + p1.getPeso("G"));
        }
    }
```

</details>

### Repte 02

Crea una classe **`ConversorMillas`** amb un mètode estàtic `millasAMetros()` que pren com paràmetre d'entrada un valor en millas marinas i les converteix a metros. Una vegada tengas aquest mètode escriu un altre (també estàtic) `millasAKilometros()` que realitze la mateixa conversió, però aquesta vegada exprese el resultat en kilómetros. Crea la funció main que pruebe les dos anteriors.

*Nota: 1 milla marina equival a 1852 metros.*

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte és:

```java
public class ConversorMillas {
        //Constante para la conversión
        private static final double METROS_MILLA = 1852;

        /*
        * método millasAMetros() que toma como parámetro de entrada un valor en millas marinas y las convierte a metros.
        */
        public static double millasAMetros(double millas){
            return millas*METROS_MILLA;
        }

        /*
        * millasAKilometros() que realice la misma conversión, pero esta vez exprese el resultado en kilómetros.
        */
        public static double millasAKilometros(double millas){
            //return millas*METROS_MILLA/1000;

            //ALTERNATIVA reutilizando el método anterior:
            return millasAMetros(millas) / 1000;
        }

        /*
        * Crea la función main que pruebe las dos anteriores
        */
        public static void main(String[] args) {
            double millas = 50;

            System.out.println(millas + "millas son " + ConversorMillas.millasAMetros(millas) + " metros");
            System.out.println(millas + "millas son " + ConversorMillas.millasAKilometros(millas) + " kilometros");
        }
    }
```

</details>

### Repte 03

**`Restaurante03`** : Un restaurant de la qual especialitat són les patatas amb carne ens demana dissenyar un mètode amb el que es puga saber quants clients poden atendre amb la materia prima que tenen en el magatzem. El mètode rep la quantitat de patatas i carne en kilos i retorna el número de clients que pot atendre el restaurant.

*Nota: Tingues en compte que per cada 3 persones, s'utilitzen 2 kilos de patatas i 1 kilo de carne*

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte és:

```java
public class Restaurante03 {
        /*
        * método con el que se pueda saber cuántos clientes pueden atender con la materia prima que tienen en el almacén. 
        *El método recibe la cantidad de patatas y carne en kilos y devuelve el número de clientes que puede atender el restaurante.
        * Nota: Ten en cuenta que por cada 3 personas, se utilizan 2 kilos de patatas y 1 kilo de carn
        */
        public int cantidadComensales(int patatas, int carne){
            //Calcular el nº de comensales según las patatas disponibles, teniendo en cuenta que 1 comensar = 2/3 de kg de patata
            double patatasPersona = 2.0/3.0;
            int cPatata = (int)(patatas / patatasPersona);

            //Calcular el nº de comensales según la carne disponible, teniendo en cuenta que 1 comensar = 1/3 de kg de carne
            double carnePersona = 1.0/3.0;
            int cCarne = (int) (carne / carnePersona);

            //Devolvemsos el minimo de los dos resultados, ya que no podemos atender a un comensal si solo tenemos 1 de los ingredientes.
            return Math.min(cPatata, cCarne);
        }
    }
```

</details>

### Repte 04

Modifica el programa anterior (**`Restaurante`**) creant una classe que permeta emmagatzemar els kilos de patatas i carne del restaurant. Implementa els següents mètodes:

- `public void Restaurante(int carne, int patatas)`. Constructor amb els paràmetres carne i patatas.

- `public void addCarne(int x)`. Afegeix x kilos de carne als ja existents.

- `public void addPatatas(int x)`. Afegeix x kilos de patatas als ja existents.

- `public int getComensales()`. Retorna el número de clients que pot atendre el restaurant (aquest és el mètode de l'exercici anterior).

- `public double getCarne()`. Retorna els kilos de carne que hi ha en el magatzem.

- `public double getPatatas()`. Retorna els kilos de patatas que hi ha en el magatzem.

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte és:

```java
public class Restaurante04 {
        //Atributos
        int carne, patatas;

        //Constructor con los parámetros carne y patatas.
        public Restaurante04(int carne, int patatas){
            this.carne = carne;
            this.patatas = patatas;
        }

        //Añade x kilos de carne a los ya existentes.
        public void addCarne(int x){
            this.carne+=x;
        }

        //Añade x kilos de patatas a los ya existentes.
        public void addPatatas(int x){
            this.patatas+=x;
        }

        //Devuelve el número de clientes que puede atender el restaurante (este es el método del ejercicio anterior).
        public int getComensales(){
            //Calcular el nº de comensales según las patatas disponibles, teniendo en cuenta que 1 comensar = 2/3 de kg de patata
            double patatasPersona = 2.0/3.0;
            int cPatata = (int)(this.patatas / patatasPersona);

            //Calcular el nº de comensales según la carne disponible, teniendo en cuenta que 1 comensar = 1/3 de kg de carne
            double carnePersona = 1.0/3.0;
            int cCarne = (int) (this.carne / carnePersona);

            //Devolvemsos el minimo de los dos resultados, ya que no podemos atender a un comensal si solo tenemos 1 de los ingredientes.
            return Math.min(cPatata, cCarne);
        }

        //Devuelve los kilos de carne que hay en el almacén.
        public int getCarne(){
            return this.carne;
        }

        // Devuelve los kilos de patatas que hay en el almacén.
        public int getPatatas(){
            return this.patatas;
        }

        //Método main para probar la clase
        public static void main(String[] args) {
            Restaurante04 res = new Restaurante04(46, 15);

            res.addCarne(4);
            res.addPatatas(5);
            System.out.println("Con " +res.getCarne()+ "kg de carne y " + res.getPatatas()+"kg de patatas, puedo atender a " + res.getComensales() + " comensales.");
        }
    }
```

</details>

### Repte 05

Crear un classe anomenada **`Proveedor`** amb les següents propietats:

- `cif`

- `nombreEmpresa`

- `descripcion`

- `sector`

- `direccion`

- `telefono`

- `poblacion`

- `codPostal`

- `correo`

Crear per a la classe **`Proveedor`** els mètodes:

- Constructor per defecte que inicialice els atributs.

- Constructor que permet crear una instància amb les dades d'un proveïdor.

- Mètodes get (*getters*).

- Mètodes set (*setters*).

- Mètode `verificaCorreo` que retorna true si l'adreça de correu conté `@`. *AJUDA: cerca entre els mètodes de la classe String*

- Mètode que mostre totes les dades del proveïdor per pantalla.

Crear en aquesta classe un mètode **`TestProveedor`** ejecutable que:

- Creu una instància de l'objecte `Proveedor` anomenat `proveedor`.

- Cambie el sector del `proveedor`.

- Mostre el sector del `proveedor`.

- Verifique si el correu és vàlid.

- Mostre totes les dades del `proveedor`.

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte conté dos classes:

```java
public class Proveedor {
        //Atributos
        String cif, nombreEmpresa, descripcion, sector, direccion, poblacion, correo;
        long telefono;
        int codPostal;

        //Constructor por defecto
        public Proveedor(){
            this.cif="";
            this.nombreEmpresa="";
            this.descripcion="";
            this.sector="";
            this.direccion="";
            this.telefono=0;
            this.poblacion="";
            this.codPostal=0;
            this.correo="";
        }

        //Constructor que permite crear una instancia con los datos de un proveedor.
        public Proveedor(String cif, String nombreEmpresa, String descripcion, String sector, String direccion, long telefono, String poblacion, int codPostal, String correo){
            this.cif=cif;
            this.nombreEmpresa=nombreEmpresa;
            this.descripcion=descripcion;
            this.sector=sector;
            this.direccion=direccion;
            this.telefono=telefono;
            this.poblacion=poblacion;
            this.codPostal=codPostal;
            this.correo=correo;
        }

        //Métodos get (getters).
        public String getCif(){
            return this.cif;
        }

        public String getNombreEmpresa(){
            return this.nombreEmpresa;
        }

        public String getSector(){
            return this.sector;
        }

        public String getDireccion(){
            return this.direccion;
        }

        public long getTelefono(){
            return this.telefono;
        }

        public String getPoblacion(){
            return this.poblacion;
        }

        public int getCodPostal(){
            return this.codPostal;
        }

        public String getCorreo(){
            return this.correo;
        }

        //Métodos set (setters).
        public void setCif(String cif){
            this.cif = cif;
        }

        public void setNombreEmpresa(String nombreEmpresa){
            this.nombreEmpresa = nombreEmpresa;
        }

        public void setDescripcion(String descripcion){
            this.descripcion = descripcion;
        }

        public void setSector(String sector){
            this.sector = sector;
        }

        public void setDireccion(String direccion){
            this.direccion = direccion;
        }

        public void setTelefono(int telefono){
            this.telefono = telefono;
        }

        public void setPoblacion(String poblacion){
            this.poblacion = poblacion;
        }

        public void setCodPostal(int codPostal){
            this.codPostal = codPostal;
        }

        public void setCorreo(String correo){
            this.correo = correo;
        }

        //Método verificaCorreo que devuelve true si la dirección de correo contiene @. AYUDA: busca entre los métodos de la clase String
        public boolean verificaCorreo(){
            if (this.correo.contains("@")) {
                return true;
            }else{
                return false;
            }

            //ALTERNATIVA óptima: 
                //return this.correo.contains("@");
        }

        //Método que muestre todos los datos del proveedor por pantalla.
        public void mostrarDatos(){
            System.out.println("CIF: "+this.cif);
            System.out.println("Nombre empresa: "+this.nombreEmpresa);
            System.out.println("Descripción: "+this.descripcion);
            System.out.println("Sector: "+this.sector);
            System.out.println("Dirección: "+this.direccion);
            System.out.println("Teléfono: "+this.telefono);
            System.out.println("Población: "+this.poblacion);
            System.out.println("Código postal: "+this.codPostal);
            System.out.println("Correo: "+this.correo);
        }
    }
```

```java
public class TestProveedor {
        public static void main(String[] args) {
            //Cree una instancia del objeto Proveedor llamado proveedor.
            Proveedor proveedor = new Proveedor("123456789X", "Empresa 1", "descripcion", "informática", "C/Calvari, s/n", 964532121, "Catadau", 44566, "empresa@empresa.com");

            //Cambie el sector del proveedor.
            proveedor.setSector("Diseño gráfico");
            //Muestre el sector del proveedor.
            System.out.println("Sector del proveedor: " +proveedor.getSector());
            //Verifique si el correo es válido.
            proveedor.verificaCorreo();
            //Muestre todos los datos del proveedor.
            proveedor.mostrarDatos();
        }
    }
```

</details>

### Repte 06

Crear una classe anomenada **`Hospital`** amb les següents propietats i mètodes:

Propietats:

- `codHospital`

- `nombreHospital`

- `direccion`

- `telefono`

- `poblacion`

- `codPostal`

- `habitacionesTotales`

- `habitacionesOcupadas`

Mètodes:

- `Hospital`: permet crear una instància amb les dades d'un hospital.

- Mètodes *get*.

- Mètodes *set*.

- Mètode `ingreso` que incrementa les habitacions ocupades. No pot realitzar-se l'ingreso si les habitacions ocupades són iguals a les habitacions totals de l'hospital. Retorna `true` si es ha pogut realitzar l'ingreso.

- Mètode `alta` que decrementa les habitacions ocupades. No pot realitzar-se l'alta les habitacions ocupades són 0. Retorna `true` si es ha pogut realitzar l'alta.

- Mètode que mostre totes les dades de l'hospital.

Crear una classe principal **`TestHospital`** ejecutable que:

- Creu una instància de la classe `Hospital` anomenada `hospitalRibera`.

- Cambie el número d'habitacions de la instància `hospitalRibera`.

- Realitza un ingreso de la instància `hospitalRibera`.

- Mostra les habitacions ocupades de la instància `hospitalRibera`.

- Realitza un alta de la instància `hospitalRibera`.

- Mostra les habitacions ocupades de la instància `hospitalRibera`.

- Mostre totes les dades de la instància `hospitalRibera`.

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte conté dos classes:

```java
public class Hospital{
        //Atributos
        long codHospital, telefono;
        String nombreHospital, direccion, poblacion;
        int codPostal, habitacionesTotales, habitacionesOcupadas;

        //Constructor
        public Hospital(long codHospital, long telefono, String nombreHospital, String direccion, String poblacion, int codPostal, int habitacionesTotales, int habitacionesOcupadas){
            this.codHospital = codHospital;
            this.telefono = telefono;
            this.nombreHospital = nombreHospital;
            this.direccion = direccion;
            this.poblacion = poblacion;
            this.codPostal = codPostal;
            this.habitacionesTotales = habitacionesTotales;
            this.habitacionesOcupadas = habitacionesOcupadas;
        }

        //Getters
        public long getCodHospital(){
            return this.codHospital;
        }

        public long getTelefono(){
            return this.telefono;
        }

        public String getNombreHospital(){
            return this.nombreHospital;
        }

        public String getDireccion(){
            return this.direccion;
        }

        public String getPoblacion(){
            return this.poblacion;
        }

        public int getCodPostal(){
            return this.codPostal;
        }

        public int getHabitacionesTotales(){
            return this.habitacionesTotales;
        }

        public int getHabitacionOcupadas(){
            return this.habitacionesOcupadas;
        }

        //Setters
        public void setCodHospital(long codHospital){
            this.codHospital = codHospital;
        }

        public void setTelefono(long telefono){
            this.telefono = telefono;
        }

        public void setNombreHospital(String nombreHospital){
            this.nombreHospital = nombreHospital;
        }

        public void setDireccion(String direccion){
            this.direccion = direccion;
        }

        public void setPoblacion(String poblacion){
            this.poblacion = poblacion;
        }

        public void setCodPostal(int codPostal){
            this.codPostal = codPostal;
        }

        public void setHabitacionesTotales(int habitacionesTotales){
            this.habitacionesTotales = habitacionesTotales;
        }

        public void setHabitacionesOcupadas(int habitacionesOcupadas){
            this.habitacionesOcupadas = habitacionesOcupadas;
        }

        /*
        * Método ingreso que incrementa las habitaciones ocupadas.
        * No puede realizarse el ingreso si las habitaciones ocupadas son iguales a las habitaciones totales del hospital.
        * Devuelve true si se ha podido realizar el ingreso.
        */
        public boolean ingreso(){
            if (this.habitacionesOcupadas >= this.habitacionesTotales) {
                return false;
            }else{
                this.habitacionesOcupadas++;
                return true;
            }
        }

        /*
        * Método alta que decrementa las habitaciones ocupadas.
        * No puede realizarse el alta las habitaciones ocupadas son 0.
        * Devuelve true si se ha podido realizar el alta.
        */
        public boolean alta(){
            if(habitacionesOcupadas == 0){
                return false;
            }else{
                habitacionesOcupadas--;
                return true;
            }
        }

        /*
        * Método que muestre todos los datos del hospital.
        */
        public void mostrarDatos(){
            System.out.println("Código: "+this.codHospital);
            System.out.println("Nombre: "+this.nombreHospital);
            System.out.println("Dirección: "+this.direccion);
            System.out.println("Télefono: "+this.telefono);
            System.out.println("Población: "+this.poblacion);
            System.out.println("Código postal: "+this.codPostal);
            System.out.println("Habitaciones totales: "+this.habitacionesTotales);
            System.out.println("Habitaciones ocupadas: "+this.habitacionesOcupadas);
        }
    }
```

```java
public class TestHospital{
    public static void main(String[] args) {
        //Cree una instancia de la clase Hospital llamada hospitalRibera.
        Hospital hospitalRibera = new Hospital(786, 978765423, "Hospital sanidad", "C/hospital, sn", "Catadau", 46776, 380, 238);

        //Cambie el número de habitaciones de la instancia hospitalRibera.
        hospitalRibera.setHabitacionesTotales(400);

        //Realiza un ingreso de la instancia hospitalRibera.
        hospitalRibera.ingreso();

        //Muestra las habitaciones ocupadas de la instancia hospitalRibera.
        System.out.println("Habitaciones ocupadas: " + hospitalRibera.getHabitacionOcupadas());

        //Realiza un alta de la instancia hospitalRibera.
        hospitalRibera.alta();

        //Muestra las habitaciones ocupadas de la instancia hospitalRibera.
        System.out.println("Habitaciones ocupadas: " + hospitalRibera.getHabitacionOcupadas());

        //Muestre todos los datos de la instancia hospitalRibera.
        hospitalRibera.mostrarDatos();
    }
}
```

</details>

### Repte 07

Crear un classe anomenada **`Medico`** amb les següents propietats i mètodes:

Propietats:

- `codMedico`

- `nombre`

- `apellidos`

- `dni`

- `direccion`

- `telefono`

- `poblacion`

- `codPostal`

- `fechaNacimiento`

- `especialidad`

- `sueldo`

Mètodes:

- `Medico`: Permet crear una instància amb les dades d'un metge.

- Mètodes *get*: Recuperan dades de la instància de l'objecte.

- Mètodes *set*: Assignen dades a la instància de l'objecte.

- `retencionMedico`: Permet calcular la retenció aplicada al sueldo del metge. Es li passa el dada del percentatge de retenció.

- `mostrarDatos`: Mostra les dades del metge.

Crear una classe principal **`TestMedico`** ejecutable que:`<br/>`

- Crear dos instàncies de la classe `Medico` anomenats `mDigestivo` i `mTraumatologo`.

- Canvia el sueldo del `medicoTraumatologo`.

- Mostra el sueldo del `medicoTraumatologo`.

- Canvia el dni del `medicoDigestivo`.

- Mostra el dni del `medicoDigestivo`.

- Calcula la retenció de les dos instàncies de la classe `Medico` que hem creat.

- Mostrar les dades de les dos instàncies de la classe `Medico` que hem creat, així com les retencions i els sueldos finals de cada una.

<details markdown="1">

<summary>💡 Solució</summary>

La solució a aquest repte conté dos classes:

```java
public class Medico{
    // atributos
        private int codMedico;
        private String nombre;
        private String apellidos;
        private String dni;
        private String direccion;
        private String telefono;
        private String poblacion;
        private int codPostal;
        //private Date fechaNacimiento;
        private String especialidad;
        private double sueldo;

        // constructor
        public Medico(int codMedico, String nombre, String apellidos, String dni, String direccion, String telefono,
                String poblacion, int codPostal, String especialidad, double sueldo) {
            this.codMedico = codMedico;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.dni = dni;
            this.direccion = direccion;
            this.telefono = telefono;
            this.poblacion = poblacion;
            this.codPostal = codPostal;
            //this.fechaNacimiento = fechaNacimiento;
            this.especialidad = especialidad;
            this.sueldo = sueldo;
        }
            // getters
        public int getCodMedico() {
            return codMedico;
        }
        public String getNombre() {
            return nombre;
        }
        public String getApellidos() {
            return apellidos;
        }
        public String getDni() {
            return dni;
        }
        public String getDireccion() {
            return direccion;
        }
        public String getTelefono() {
            return telefono;
        }
        public String getPoblacion() {
            return poblacion;
        }
        public int getCodPostal() {
            return codPostal;
        }
        // public Date getFechaNacimiento() {
        //     return fechaNacimiento;
        // }
        public String getEspecialidad() {
            return especialidad;
        }
        public double getSueldo() {
            return sueldo;
        }

        // setters
        public void setCodMedico(int codMedico) {
            this.codMedico = codMedico;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public void setApellidos(String apellidos) {
            this.apellidos = apellidos;
        }

        public void setDni(String dni) {
            this.dni = dni;
        }

        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }

        public void setPoblacion(String poblacion) {
            this.poblacion = poblacion;
        }

        public void setCodPostal(int codPostal) {
            this.codPostal = codPostal;
        }

        // public void setFechaNacimiento(Date fechaNacimiento) {
        //     this.fechaNacimiento = fechaNacimiento;
        // }

        public void setEspecialidad(String especialidad) {
            this.especialidad = especialidad;
        }

        public void setSueldo(double sueldo) {
            this.sueldo = sueldo;
        }

        public double retencionMedico (double porcentaje){
            return this.sueldo * (1 - porcentaje/100);
        }

        public void mostrarDatos(){
            String respuesta = "Médico: " +
                            "\nNombre: " + this.nombre +
                            "\nSueldo: " + this.sueldo;
            System.out.println(respuesta);
        }
    }
```

```java
public class TestMedico{          
        public static void main(String[] args) {             
            Medico m1 = new Medico(123456, "Ana", "Asins","12345678X", "c/ nosequé, s/n",                        "123456789", "Almussafes", 46195,"otorrino", 8001);             
            m1.mostrarDatos();            
            //m1.retencionMedico(50);             
            System.out.println(m1.retencionMedico(50));         
        }     
    }
```

</details>

### Repte 08

**`LlenarConCirculo`** : Crear una pissarra cuadrada i dibuixar en ella un cercle que l'ocupe per complet.  

<details markdown="1">

<summary>💡 Solució</summary>

Aquest repte utilitza la interfície gràfica a la que dedicarem més temps cap a finals de curs. De moment amb entendre alguns conceptes molt bàsics de com dibuixar elements gràfics en una finestra podem intentar resolverlos usant els conceptes d'objectes, classes, herència, mètodes, etcétera que hem vist en teoría.

```java
//importaciones necesarias para los ejercicios, no necesitas más.
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Color;
import java.awt.Graphics;

/*
 * Necesitamos que nuestra clase LlenarConCirculo herede
 * de JPanel para poder pintar en su interior.
 */
public class LlenarConCirculo extends JPanel {

@Override
    public void paint(Graphics g) {
        //Fijamos el color que tendrá la figura
        g.setColor(Color.RED);

/*
         * Dibujamos un ovalo relleno fijando las 4 esquinas que lo delimitan:
         * - x1, y1, x2, y2
         * En nuestro caso además hacemos uso de la función reflexiva
         * this.getWidth() y this.getHeight() para conocer la anchura y altura
         * (respectivamente) de nuestra ventana.
         */
g.fillOval(0, 0, this.getWidth(), this.getHeight());

/*
         * Otras funciones disponibles para dibujar son:
         * - fill3DRect(int x, int y, int width, int height, boolean raised)
         * Paints a 3-D highlighted rectangle filled with the current color.
         * - fillArc(int x, int y, int width, int height, int startAngle, int arcAngle)
         * Fills a circular or elliptical arc covering the specified rectangle.
         * - fillOval(int x, int y, int width, int height)
         * Fills an oval bounded by the specified rectangle with the current color.
         * - fillPolygon(int[] xPoints, int[] yPoints, int nPoints)
         * Fills a closed polygon defined by arrays of x and y coordinates.
         * - fillPolygon(Polygon p)
         * Fills the polygon defined by the specified Polygon object with the graphics
         * context's current color.
         * - fillRect(int x, int y, int width, int height)
         * Fills the specified rectangle.
         * - fillRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight)
         * Fills the specified rounded corner rectangle with the current color.
* - fill3DRect(int x, int y, int width, int height, boolean raised)
         * Paints a 3-D highlighted rectangle filled with the current color.
         * - fillArc(int x, int y, int width, int height, int startAngle, int arcAngle)
         * Fills a circular or elliptical arc covering the specified rectangle.
         * - fillOval(int x, int y, int width, int height)
         * Fills an oval bounded by the specified rectangle with the current color.
         * - fillPolygon(int[] xPoints, int[] yPoints, int nPoints)
         * Fills a closed polygon defined by arrays of x and y coordinates.
         * - fillPolygon(Polygon p)
         * Fills the polygon defined by the specified Polygon object with the graphics
         * context's current color.
         * - fillRect(int x, int y, int width, int height)
         * Fills the specified rectangle.
         * - fillRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight)
         * Fills the specified rounded corner rectangle with the current color.
*/
    }

public static void main(String[] args) {
        //Creamos una nueva ventana
        JFrame MainFrame = new JFrame();

//Fijamos su tamaño en 300px de ancho por 300px de alto
        MainFrame.setSize(300, 300);

//Creamos el objeto que vamos a dibujar con el método paint()
        LlenarConCirculo circlePanel = new LlenarConCirculo();

//Añadimos el objeto recien creado a la ventana
        MainFrame.add(circlePanel);

//Hacemos visible la ventana (con el dibujo)
        MainFrame.setVisible(true);
    }
}
```

Aquest és l'esquema bàsic que necesitas per a resoldre tots els exercicis planteats:

```java
//importaciones necesarias para los ejercicios, no necesitas más.
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.awt.Color;
import java.awt.Graphics;

/*
  Necesitamos que nuestra clase herede de JPanel para poder
  pintar en su interior.
*/
public class TuClaseEjercicio extends JPanel {

@Override
  public void paint(Graphics g) {
    // INSERTA TU CÓDIGO AQUÍ!!! <<--
    //Fijamos el color que tendrá la figura
    //Dibuja la/s figura/s que te pide el ejercicio
  }

public static void main(String[] args) {
    //Creamos una nueva ventana
    JFrame MainFrame = new JFrame();

//Fijamos su tamaño en 300px de ancho por 300px de alto
    MainFrame.setSize(300, 300);

//Creamos el objeto que vamos a dibujar con el método paint()
    LlenarConCirculo tuDibujo = new LlenarConCirculo();

//Añadimos el objeto recien creado a la ventana
    MainFrame.add(tuDibujo);

//Hacemos visible la ventana (con el dibujo)
    MainFrame.setVisible(true);
  }
}
```

</details>



---

## 🎮 Reptes Interactius d'Autoavaluació (+100 XP)

Comprova el teu domini sobre **Reptes de programació UT4** superant aquests 4 reptes gamificats (+25 punts cadascun):

<div class="interactive-mcq" data-answer="A" data-hint="Revisa els conceptes teòrics i pràctics d'aquesta secció.">
  <div class="mcq-question">🎯 <strong>Repte 1 (+25 pts):</strong> Quin principi de la Programació Orientada a Objectes consisteix a declarar els atributs d'una classe com a 'private' i proporcionar mètodes públics controlats (getters i setters)?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Encapsulament (Encapsulation).</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Herència múltiple.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Recursivitat lineal.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Cap de les anteriors és correcta.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-mcq" data-answer="D" data-hint="Comprova l'apartat corresponent de la unitat.">
  <div class="mcq-question">🎯 <strong>Repte 2 (+25 pts):</strong> Quina és la funció de la paraula clau 'this' dins d'un mètode o constructor d'una classe en Java?</div>
  <div class="mcq-options">
    <button type="button" class="btn-mcq-opt" data-opt="A">A) Destrueix l'objecte actual de la memòria RAM.</button>
    <button type="button" class="btn-mcq-opt" data-opt="B">B) Importa tots els paquets de la llibreria java.util.</button>
    <button type="button" class="btn-mcq-opt" data-opt="C">C) Cap de les anteriors és correcta.</button>
    <button type="button" class="btn-mcq-opt" data-opt="D">D) Fa referència a la instància (objecte) actual sobre la qual s'està executant el mètode o constructor.</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

<div class="interactive-vf" data-answer="V" data-hint="Verifica l'afirmació amb els apunts de la unitat.">
  <div class="vf-statement">✅ <strong>Repte 3 (Vertader o Fals · +25 pts):</strong> Un membre declarat amb el modificador 'static' pertany a la pròpia classe i és compartit per totes les instàncies d'eixa classe.</div>
  <div class="vf-buttons">
    <button type="button" class="btn-vf" data-opt="V">Vertader (V)</button>
    <button type="button" class="btn-vf" data-opt="F">Fals (F)</button>
  </div>
  <div class="quiz-feedback" style="width: 100%;"></div>
</div>

<div class="interactive-quiz" data-answer="new" data-hint="Nou en anglès (3 lletres).">
  <div class="quiz-question">⌨️ <strong>Repte 4 (+25 pts):</strong> Quin operador reservat de Java s'utilitza per a invocar un constructor i reservar memòria per a un nou objecte?</div>
  <div class="quiz-controls">
    <input type="text" class="quiz-input" placeholder="Escriu la resposta..." />
    <button type="button" class="btn-quiz-check">Comprovar</button>
  </div>
  <div class="quiz-feedback"></div>
</div>

### 📋 Llista de Comprovació i Rúbrica d'Assoliment

Marca cada criteri a mesura que completes l'estudi o la resolució pràctica d'aquesta pàgina (**Reptes de programació UT4**):

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
    <button type="button" class="btn-aules-dl" data-module="PRG" data-unit="UD04" data-activity="ut04retos">📥 Descarregar Comprovant PDF</button>
    <button type="button" class="btn-aules-copy">📋 Copiar Resum al Porta-retalls</button>
  </div>
  <div class="aules-toast"></div>
</div>

