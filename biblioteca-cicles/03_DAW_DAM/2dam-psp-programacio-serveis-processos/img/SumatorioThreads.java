package activitatsumatori;

public class SumatorioThreads {
    public static void main(String[] args) {

        // Capturamos los parámetros
        long index1 = Long.parseLong(args[0]);
        long index2 = Long.parseLong(args[1]);

        // Creamos el acumulador
        Acumulador ac = new Acumulador();

        try {
            // Ordenamos los índices, por si el primero es mayor que el segundo
            if (index1 > index2) {
                long tmp = index1;
                index1 = index2;
                index2 = tmp;
            }

            // Calculamos la cantidad de procesadores
            Runtime runtime = Runtime.getRuntime();
            int num_procesadores = runtime.availableProcessors();

            long totalNumeros = index2 - index1 + 1;

            // Si hay más hilos que números, reducimos
            if (num_procesadores > totalNumeros) {
                num_procesadores = (int) totalNumeros;
            }

            System.out.println("Dividiendo la tarea en " +
                                num_procesadores + " hilos");

            // Tamaño base del bloque por hilo
            long incremento = totalNumeros / num_procesadores;
            long resto = totalNumeros % num_procesadores;

            Thread[] vectorHilos = new Thread[num_procesadores];

            long inicio = index1;

            for (int i = 0; i < num_procesadores; i++) {

                // Repartimos el "resto" dando 1 número extra a los primeros hilos
                long tamanio = incremento + (i < resto ? 1 : 0);
                long fin = inicio + tamanio - 1;

                // Por seguridad, que nunca pase de index2
                if (fin > index2) {
                    fin = index2;
                }

                Suma sumParcial = new Suma(inicio, fin, ac);

                vectorHilos[i] = new Thread(sumParcial);
                vectorHilos[i].setName("Hilo " + i);
                vectorHilos[i].start();

                inicio = fin + 1;
            }

            // Esperamos que acaben todos los hilos
            for (int i = 0; i < num_procesadores; i++) {
                vectorHilos[i].join();
            }

            System.out.println("Suma total: " + ac.get());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
