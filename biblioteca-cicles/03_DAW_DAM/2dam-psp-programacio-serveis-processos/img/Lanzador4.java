import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;

public class Lanzador4 {
    public static void main(String[] args) {
        try {
            // 1. Definimos el comando a ejecutar: abrir Firefox con una URL
            String[] app = {"firefox", "https://docs.oracle.com/en/java/javase/17/core/process-api1.html"};

            // 2. Creamos el ProcessBuilder
            ProcessBuilder pb = new ProcessBuilder(app);

            // 3. Iniciamos el proceso
            Process p = pb.start();
            System.out.println("Proceso lanzado correctamente.");
            System.out.println("PID: " + p.pid());

            // 4. Obtenemos la información del proceso
            ProcessHandle.Info info = p.info();

            System.out.println("\n=== Información del proceso ===");

            // Command: ruta del ejecutable
            System.out.println("Comando ejecutado: " + info.command());

            // Arguments: lista de argumentos (se muestra directamente el Optional)
            System.out.println("Argumentos: " + info.arguments());

            // CommandLine: línea de comando completa
            System.out.println("Línea completa: " + info.commandLine());

            // StartInstant: momento en que se inició el proceso
            System.out.println("Hora de inicio: " + info.startInstant());

            // totalCpuDuration: tiempo total de CPU usado
            System.out.println("Tiempo total de CPU: " + info.totalCpuDuration());

            // user: usuario que lanzó el proceso
            System.out.println("Usuario: " + info.user());

            System.out.println("===============================");

            // Esperamos unos segundos antes de cerrar el proceso
            System.out.println("Esperando 5 segundos antes de cerrar el proceso...");
            p.waitFor(5, TimeUnit.SECONDS);

            // Si sigue vivo, lo destruimos
            if (p.isAlive()) {
                System.out.println("Cerrando el proceso...");
                p.destroy();
            }

            // Esperar a que acabe completamente
            p.waitFor();
            System.out.println("Proceso finalizado con código: " + p.exitValue());

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}
