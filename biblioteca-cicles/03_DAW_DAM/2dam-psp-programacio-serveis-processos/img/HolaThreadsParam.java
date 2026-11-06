import java.util.ArrayList;

class MiRunnable implements Runnable {

    String nombre; // Los objetos de tipo MiRunnable tendrán una propiedad nombre

    // Constructores: Inicializan la propiedad nombre
    MiRunnable() {
        this.nombre = "Anónimo";
    }

    MiRunnable(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public void run() {
    // Este es el método que se ejeutará cuando
    // se invoque al método start del thread.
   
    try{
    // Tomamos la referencia al thread actual
    Thread hiloActual=Thread.currentThread();

    //Asignamos el nombre de thread segun el nombre del objeto
    hiloActual.setName("Thread-".concat(nombre));
   
    // E imprimimos información sobre su nombre y algunas propiedades
    System.out.println("Hola Mundo de los threads. Soy "+this.nombre+":"
    +"\n\tMi id de thread es "+hiloActual.getId()
    +"\n\tMi nombre de thread es "+hiloActual.getName()
    +"\n\tMi prioridad es "+hiloActual.getPriority()
    +"\n\tMi estado es "+hiloActual.getState()+"\n");
   
   
    } catch (Exception e) {
        e.printStackTrace();
    }
   }
}

public class HolaThreadsParam {
    public static void main(String[] args) {
        try {

            // Lista para los diferentes hilos
            //ArrayList<MiRunnable> runnables=new ArrayList<MiRunnable>();
            ArrayList<Thread> hilos=new ArrayList<Thread>();

            for (String arg : args) {
                // Creamos un objeto por cada argumento
                MiRunnable r = new MiRunnable(arg);
                // Y lo añadimos a la lista
                //runnables.add(r);
                // Lanzamos el hilo
                Thread hilo=new Thread(r);
                // Lo añadimos al arrayList
                hilos.add(hilo);

                // Y lo lanzamos
                hilo.start();

            }

            // Finalmente, en otro bucle, los juntamos con el principal

            for (Thread hilo : hilos) {
                hilo.join();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
