[⬅️ Tornar a l'índex de Programació](../) | [🏠 Portal Principal](../../) | [📘 UT4 Completa](../ut4-poo.md) | [🎨 **Obrir versió interactiva Material (amb índex lateral i mode fosc)**](../guia-completa/ut04/ut04retos.html)

[⬅️ Anterior: Actividades prácticas UT4](../ut04/ut04actividades.md) | [➡️ Següent: 5.0 RA y Criterios de Evaluación](../ut05/ut05ras.md)

---

# Retos


> 💻 **Empaquetar retos**
>
> Empaqueta las actividades, dentro de la carpeta **`ut04`**, en la carpeta **`retos`**.
>
> Las actividades programadas en esta sección **Retos** no son obligatorias.


### Reto 01

Crea la clase **`Peso`**, la cual tendrá las siguientes características:

- Deberá tener un atributo donde se almacene el peso de un objeto en kilogramos.
- En el constructor se le pasará el *peso* y la *medida* en la que se ha tomado ("*Lb*" para libras, "*Li*" para lingotes, "*Oz*" para onzas, "*P*" para peniques, "*K*" para kilos, "*G*" para gramos y "*Q*" para quintales).
- Deberá de tener los siguientes métodos:
    - `getLibras`. Devuelve el peso en libras.
    - `getLingotes`. Devuelve el peso en lingotes.
    - `getPeso`. Devuelve el peso en la medida que se pase como parámetro ("*Lb*" para libras, "*Li*" para lingotes, "*Oz*" para onzas, "*P*" para peniques, "*K*" para kilos, "*G*" para gramos y "*Q*" para quintales).
- Para la realización del ejercicio toma como referencia los siguientes datos:
    - *1 Libra = 16 onzas = 453 gramos.*
    - *1 Lingote = 32,17 libras = 14,59 kg.*
    - *1 Onza = 0,0625 libras = 28,35 gramos.*
    - *1 Penique = 0,05 onzas = 1,55 gramos.*`
    - *1 Quintal = 100 libras = 43,3 kg.*`
- Crea además una clase **`TestPeso`** para testear y verificar los métodos de esta clase.


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto contiene dos clases:
> 
> ```java
>     public class Peso {
>         //Atributos
>         private double kilos;
> 
>         //Constructor
>         public Peso(double kilos, String medida){
>             this.kilos = kilos;
> 
>             //Transformar el dato a kilos, según la medida en la que se pasen.
>             if (medida.equals("Lb")) {
>                 this.kilos = kilos * 0.453;
>             }else if (medida.equals("Li")) { // Lingotes
>                 this.kilos = kilos * 14.59;
>             } else if (medida.equals("Oz")) { // Onzas
>                 this.kilos = kilos * 0.02835;
>             } else if (medida.equals("P")) { // Peniques
>                 this.kilos = kilos * 0.00155;
>             } else if (medida.equals("G")) { // Gramos
>                 this.kilos = kilos / 1000;
>             } else if (medida.equals("Q")) { // Quintales
>                 this.kilos = kilos * 43.3;
>             } else{
>                 this.kilos = kilos;
>             }
>         }
> 
>         /*
>         * getLibras. Devuelve el peso en libras.
>         */
>         public double getLibras() {
>             return this.kilos / 0.453;
>         }
> 
>         /*
>         * getLingotes. Devuelve el peso en lingotes.
>         */
>         public double getLingotes() {
>             return this.kilos / 14.59;
>         }
> 
>         /*
>         * getPeso. Devuelve el peso en la medida que se pase como parámetro 
>         * ("Lb" para libras, "Li" para lingotes, "Oz" para onzas, "P" para peniques, "K" para kilos, "G" para gramos y "Q" para quintales).
>         */
>         public double getPeso(String medida) {
>             //Aunque está solución lo hace con un 'switch', también es válido con if...else if ... else
>             switch (medida) {
>                 case "Lb":
>                     return this.getLibras();
>                 case "Li":
>                     return this.getLingotes();
>                 case "Oz":
>                     return this.kilos / 0.02835;
>                 case "P":
>                     return this.kilos / 0.00155;
>                 case "G":
>                     return this.kilos * 1000;
>                 case "Q":
>                     return this.kilos / 43.3;
>                 default:
>                     return this.kilos;
>             }
>         }
> 
>     }
> ```
> 
> 
> 
> ```java
>     public class TestPeso {
>         public static void main(String[] args) {
>             //Dentro del main podeis crear tantas instancias como querais para ir probando diferentes situaciones.
>             Peso p1 = new Peso(84.5, "Lb");
>             System.out.println("Peso en kg: " + p1.getPeso("K"));
>             System.out.println("Peso en libras: " + p1.getLibras());
>             System.out.println("Peso en lingotes: " + p1.getLingotes());
>             System.out.println("Peso en gramos: " + p1.getPeso("G"));
>         }
>     }
> ```

</details>


---

### Reto 02

Crea una clase **`ConversorMillas`** con un método estático `millasAMetros()` que toma como parámetro de entrada un valor en millas marinas y las convierte a metros. Una vez tengas este método escribe otro (también estático) `millasAKilometros()` que realice la misma conversión, pero esta vez exprese el resultado en kilómetros. Crea la función main que pruebe las dos anteriores.

*Nota: 1 milla marina equivale a 1852 metros.*


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto es:
> 
> ```java
>     public class ConversorMillas {
>         //Constante para la conversión
>         private static final double METROS_MILLA = 1852;
> 
>         /*
>         * método millasAMetros() que toma como parámetro de entrada un valor en millas marinas y las convierte a metros.
>         */
>         public static double millasAMetros(double millas){
>             return millas*METROS_MILLA;
>         }
> 
>         /*
>         * millasAKilometros() que realice la misma conversión, pero esta vez exprese el resultado en kilómetros.
>         */
>         public static double millasAKilometros(double millas){
>             //return millas*METROS_MILLA/1000;
> 
>             //ALTERNATIVA reutilizando el método anterior:
>             return millasAMetros(millas) / 1000;
>         }
> 
>         /*
>         * Crea la función main que pruebe las dos anteriores
>         */
>         public static void main(String[] args) {
>             double millas = 50;
> 
>             System.out.println(millas + "millas son " + ConversorMillas.millasAMetros(millas) + " metros");
>             System.out.println(millas + "millas son " + ConversorMillas.millasAKilometros(millas) + " kilometros");
>         }
>     }
> ```

</details>


---

### Reto 03

**`Restaurante03`** : Un restaurante cuya especialidad son las patatas con carne nos pide diseñar un método con el que se pueda saber cuántos clientes pueden atender con la materia prima que tienen en el almacén. El método recibe la cantidad de patatas y carne en kilos y devuelve el número de clientes que puede atender el restaurante.

*Nota: Ten en cuenta que por cada 3 personas, se utilizan 2 kilos de patatas y 1 kilo de carne*


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto es:
> 
> ```java
>     public class Restaurante03 {
>         /*
>         * método con el que se pueda saber cuántos clientes pueden atender con la materia prima que tienen en el almacén. 
>         *El método recibe la cantidad de patatas y carne en kilos y devuelve el número de clientes que puede atender el restaurante.
>         * Nota: Ten en cuenta que por cada 3 personas, se utilizan 2 kilos de patatas y 1 kilo de carn
>         */
>         public int cantidadComensales(int patatas, int carne){
>             //Calcular el nº de comensales según las patatas disponibles, teniendo en cuenta que 1 comensar = 2/3 de kg de patata
>             double patatasPersona = 2.0/3.0;
>             int cPatata = (int)(patatas / patatasPersona);
> 
>             //Calcular el nº de comensales según la carne disponible, teniendo en cuenta que 1 comensar = 1/3 de kg de carne
>             double carnePersona = 1.0/3.0;
>             int cCarne = (int) (carne / carnePersona);
> 
>             //Devolvemsos el minimo de los dos resultados, ya que no podemos atender a un comensal si solo tenemos 1 de los ingredientes.
>             return Math.min(cPatata, cCarne);
>         }
>     }
> ```

</details>


---

### Reto 04

Modifica el programa anterior (**`Restaurante`**) creando una clase que permita almacenar los kilos de patatas y carne del restaurante. Implementa los siguientes métodos:

- `public void Restaurante(int carne, int patatas)`. Constructor con los parámetros carne y patatas.
- `public void addCarne(int x)`. Añade x kilos de carne a los ya existentes.
- `public void addPatatas(int x)`. Añade x kilos de patatas a los ya existentes.
- `public int getComensales()`. Devuelve el número de clientes que puede atender el restaurante (este es el método del ejercicio anterior).
- `public double getCarne()`. Devuelve los kilos de carne que hay en el almacén.
- `public double getPatatas()`. Devuelve los kilos de patatas que hay en el almacén.


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto es:
> 
> ```java
>     public class Restaurante04 {
>         //Atributos
>         int carne, patatas;
> 
>         //Constructor con los parámetros carne y patatas.
>         public Restaurante04(int carne, int patatas){
>             this.carne = carne;
>             this.patatas = patatas;
>         }
> 
>         //Añade x kilos de carne a los ya existentes.
>         public void addCarne(int x){
>             this.carne+=x;
>         }
> 
>         //Añade x kilos de patatas a los ya existentes.
>         public void addPatatas(int x){
>             this.patatas+=x;
>         }
> 
>         //Devuelve el número de clientes que puede atender el restaurante (este es el método del ejercicio anterior).
>         public int getComensales(){
>             //Calcular el nº de comensales según las patatas disponibles, teniendo en cuenta que 1 comensar = 2/3 de kg de patata
>             double patatasPersona = 2.0/3.0;
>             int cPatata = (int)(this.patatas / patatasPersona);
> 
>             //Calcular el nº de comensales según la carne disponible, teniendo en cuenta que 1 comensar = 1/3 de kg de carne
>             double carnePersona = 1.0/3.0;
>             int cCarne = (int) (this.carne / carnePersona);
> 
>             //Devolvemsos el minimo de los dos resultados, ya que no podemos atender a un comensal si solo tenemos 1 de los ingredientes.
>             return Math.min(cPatata, cCarne);
>         }
> 
>         //Devuelve los kilos de carne que hay en el almacén.
>         public int getCarne(){
>             return this.carne;
>         }
> 
>         // Devuelve los kilos de patatas que hay en el almacén.
>         public int getPatatas(){
>             return this.patatas;
>         }
> 
>         //Método main para probar la clase
>         public static void main(String[] args) {
>             Restaurante04 res = new Restaurante04(46, 15);
> 
>             res.addCarne(4);
>             res.addPatatas(5);
>             System.out.println("Con " +res.getCarne()+ "kg de carne y " + res.getPatatas()+"kg de patatas, puedo atender a " + res.getComensales() + " comensales.");
>         }
>     }
> ```

</details>


---

### Reto 05

Crear un clase llamada **`Proveedor`** con las siguientes propiedades:

- `cif`
- `nombreEmpresa`
- `descripcion`
- `sector`
- `direccion`
- `telefono`
- `poblacion`
- `codPostal`
- `correo`

Crear para la clase **`Proveedor`** los métodos:

- Constructor por defecto que inicialice los atributos.
- Constructor que permite crear una instancia con los datos de un proveedor.
- Métodos get (*getters*).
- Métodos set (*setters*).
- Método `verificaCorreo` que devuelve true si la dirección de correo contiene `@`. *AYUDA: busca entre los métodos de la clase String*
- Método que muestre todos los datos del proveedor por pantalla.

Crear en esta clase un método **`TestProveedor`** ejecutable que:

- Cree una instancia del objeto `Proveedor` llamado `proveedor`.
- Cambie el sector del `proveedor`.
- Muestre el sector del `proveedor`.
- Verifique si el correo es válido.
- Muestre todos los datos del `proveedor`.


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto contiene dos clases:
> 
> ```java
>     public class Proveedor {
>         //Atributos
>         String cif, nombreEmpresa, descripcion, sector, direccion, poblacion, correo;
>         long telefono;
>         int codPostal;
> 
>         //Constructor por defecto
>         public Proveedor(){
>             this.cif="";
>             this.nombreEmpresa="";
>             this.descripcion="";
>             this.sector="";
>             this.direccion="";
>             this.telefono=0;
>             this.poblacion="";
>             this.codPostal=0;
>             this.correo="";
>         }
> 
>         //Constructor que permite crear una instancia con los datos de un proveedor.
>         public Proveedor(String cif, String nombreEmpresa, String descripcion, String sector, String direccion, long telefono, String poblacion, int codPostal, String correo){
>             this.cif=cif;
>             this.nombreEmpresa=nombreEmpresa;
>             this.descripcion=descripcion;
>             this.sector=sector;
>             this.direccion=direccion;
>             this.telefono=telefono;
>             this.poblacion=poblacion;
>             this.codPostal=codPostal;
>             this.correo=correo;
>         }
> 
>         //Métodos get (getters).
>         public String getCif(){
>             return this.cif;
>         }
> 
>         public String getNombreEmpresa(){
>             return this.nombreEmpresa;
>         }
> 
>         public String getSector(){
>             return this.sector;
>         }
> 
>         public String getDireccion(){
>             return this.direccion;
>         }
> 
>         public long getTelefono(){
>             return this.telefono;
>         }
> 
>         public String getPoblacion(){
>             return this.poblacion;
>         }
> 
>         public int getCodPostal(){
>             return this.codPostal;
>         }
> 
>         public String getCorreo(){
>             return this.correo;
>         }
> 
>         //Métodos set (setters).
>         public void setCif(String cif){
>             this.cif = cif;
>         }
> 
>         public void setNombreEmpresa(String nombreEmpresa){
>             this.nombreEmpresa = nombreEmpresa;
>         }
> 
>         public void setDescripcion(String descripcion){
>             this.descripcion = descripcion;
>         }
> 
>         public void setSector(String sector){
>             this.sector = sector;
>         }
> 
>         public void setDireccion(String direccion){
>             this.direccion = direccion;
>         }
> 
>         public void setTelefono(int telefono){
>             this.telefono = telefono;
>         }
> 
>         public void setPoblacion(String poblacion){
>             this.poblacion = poblacion;
>         }
> 
>         public void setCodPostal(int codPostal){
>             this.codPostal = codPostal;
>         }
> 
>         public void setCorreo(String correo){
>             this.correo = correo;
>         }
> 
>         //Método verificaCorreo que devuelve true si la dirección de correo contiene @. AYUDA: busca entre los métodos de la clase String
>         public boolean verificaCorreo(){
>             if (this.correo.contains("@")) {
>                 return true;
>             }else{
>                 return false;
>             }
> 
>             //ALTERNATIVA óptima: 
>                 //return this.correo.contains("@");
>         }
> 
>         //Método que muestre todos los datos del proveedor por pantalla.
>         public void mostrarDatos(){
>             System.out.println("CIF: "+this.cif);
>             System.out.println("Nombre empresa: "+this.nombreEmpresa);
>             System.out.println("Descripción: "+this.descripcion);
>             System.out.println("Sector: "+this.sector);
>             System.out.println("Dirección: "+this.direccion);
>             System.out.println("Teléfono: "+this.telefono);
>             System.out.println("Población: "+this.poblacion);
>             System.out.println("Código postal: "+this.codPostal);
>             System.out.println("Correo: "+this.correo);
>         }
>     }
> ```
> 
> 
> 
> ```java
>     public class TestProveedor {
>         public static void main(String[] args) {
>             //Cree una instancia del objeto Proveedor llamado proveedor.
>             Proveedor proveedor = new Proveedor("123456789X", "Empresa 1", "descripcion", "informática", "C/Calvari, s/n", 964532121, "Catadau", 44566, "empresa@empresa.com");
> 
>             //Cambie el sector del proveedor.
>             proveedor.setSector("Diseño gráfico");
>             //Muestre el sector del proveedor.
>             System.out.println("Sector del proveedor: " +proveedor.getSector());
>             //Verifique si el correo es válido.
>             proveedor.verificaCorreo();
>             //Muestre todos los datos del proveedor.
>             proveedor.mostrarDatos();
>         }
>     }
> ```

</details>


---

### Reto 06

Crear una clase llamada **`Hospital`** con las siguientes propiedades y métodos:

Propiedades:

- `codHospital`
- `nombreHospital`
- `direccion`
- `telefono`
- `poblacion`
- `codPostal`
- `habitacionesTotales`
- `habitacionesOcupadas`

Métodos:

- `Hospital`: permite crear una instancia con los datos de un hospital.
- Métodos *get*.
- Métodos *set*.
- Método `ingreso` que incrementa las habitaciones ocupadas. No puede realizarse el ingreso si las habitaciones ocupadas son iguales a las habitaciones totales del hospital. Devuelve `true` si se ha podido realizar el ingreso.
- Método `alta` que decrementa las habitaciones ocupadas. No puede realizarse el alta las habitaciones ocupadas son 0. Devuelve `true` si se ha podido realizar el alta.
- Método que muestre todos los datos del hospital.

Crear una clase principal **`TestHospital`** ejecutable que:

- Cree una instancia de la clase `Hospital` llamada `hospitalRibera`.
- Cambie el número de habitaciones de la instancia `hospitalRibera`.
- Realiza un ingreso de la instancia `hospitalRibera`.
- Muestra las habitaciones ocupadas de la instancia `hospitalRibera`.
- Realiza un alta de la instancia `hospitalRibera`.
- Muestra las habitaciones ocupadas de la instancia `hospitalRibera`.
- Muestre todos los datos de la instancia `hospitalRibera`.


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto contiene dos clases:

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


---

### Reto 07

Crear un clase llamada **`Medico`** con las siguientes propiedades y métodos:

Propiedades:

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

Métodos:

- `Medico`: Permite crear una instancia con los datos de un médico.
- Métodos *get*: Recuperan datos de la instancia del objeto.
- Métodos *set*: Asignan datos a la instancia del objeto.
- `retencionMedico`: Permite calcular la retención aplicada al sueldo del médico. Se le pasa el dato del porcentaje de retención.
- `mostrarDatos`: Muestra los datos del médico.

Crear una clase principal **`TestMedico`** ejecutable que:`<br/>`

- Crear dos instancias de la clase `Medico` llamados `mDigestivo` y `mTraumatologo`.
- Cambia el sueldo del `medicoTraumatologo`.
- Muestra el sueldo del `medicoTraumatologo`.
- Cambia el dni del `medicoDigestivo`.
- Muestra el dni del `medicoDigestivo`.
- Calcula la retención de las dos instancias de la clase `Medico` que hemos creado.
- Mostrar los datos de las dos instancias de la clase `Medico` que hemos creado, así como las retenciones y los sueldos finales de cada una.


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> La solución a este reto contiene dos clases:

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


---

### Reto 08

**`LlenarConCirculo`** : Crear una pizarra cuadrada y dibujar en ella un círculo que la ocupe por completo.


<details markdown="1">
<summary><strong>☕ Solución</strong></summary>

> Este reto utiliza la interfaz gráfica a la que dedicaremos más tiempo hacia finales de curso. De momento con entender algunos conceptos muy básicos de cómo dibujar elementos gráficos en una ventana podemos intentar resolverlos usando los conceptos de objetos, clases, herencia, métodos, etcétera que hemos visto en teoría.

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

Este es el esquema básico que necesitas para resolver todos los ejercicios planteados:

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

[⬅️ Anterior: Actividades prácticas UT4](../ut04/ut04actividades.md) | [➡️ Següent: 5.0 RA y Criterios de Evaluación](../ut05/ut05ras.md) | [📑 Índex de Programació](../) | [🎨 Versió Web Material](../guia-completa/ut04/ut04retos.html)
