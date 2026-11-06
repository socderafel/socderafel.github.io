---
layout: default
title: "UT03: Programación de Comunicaciones en Red (Sockets)"
---

<div class="hero-course">
  <div class="hero-badge">UT03 · Sockets UDP / TCP · 2n DAM · PSP</div>
  <h1 class="hero-title">Unidad 3: Comunicaciones en Red con Sockets</h1>
  <p class="hero-subtitle">
    Arquitectura cliente/servidor, modelo de capas TCP/IP, comunicaciones no orientadas a conexión con datagramas UDP (<code>DatagramSocket</code>), comunicaciones fiables orientadas a conexión con TCP (<code>ServerSocket</code> y <code>Socket</code>) y diseño de servidores concurrentes multihilo.
  </p>
</div>

## 1. Fundamentos de Redes y la Capa de Transporte

En el modelo de Internet (TCP/IP), la capa de transporte proporciona comunicación punto a punto de extremo a extremo entre procesos que se ejecutan en diferentes equipos de la red:
- **Dirección IP:** Identifica la máquina anfitriona (*host*) en la red (IPv4 / IPv6).
- **Puerto (*Port*):** Identificador numérico de 16 bits (0 - 65535) que asigna el flujo de red a un proceso específico.
  - Puertos bien conocidos (*Well-Known*): 0 a 1023 (HTTP 80, HTTPS 443, SSH 22).
  - Puertos registrados: 1024 a 49151 (MySQL 3306, Tomcat 8080).
  - Puertos dinámicos o efímeros: 49152 a 65535 (asignados dinámicamente a clientes).

### 1.1. Comparativa UDP frente a TCP

| Característica | UDP (User Datagram Protocol) | TCP (Transmission Control Protocol) |
| :--- | :--- | :--- |
| **Orientación** | No orientado a conexión (paquetes independientes). | Orientado a conexión (*Handshake* de 3 vías). |
| **Fiabilidad** | No fiable (puede haber pérdidas, duplicados o desorden). | Fiable (garantiza entrega en orden mediante ACK y retransmisión). |
| **Cabecera** | 8 bytes (muy ligera, mínimo retardo). | 20 a 60 bytes (control de flujo, ventana deslizante y congestión). |
| **Casos de uso** | Streaming en directo, videollamadas (WebRTC), juegos online, DNS. | Navegación web (HTTP), correo (SMTP/IMAP), transferencia de archivos (FTP), SSH. |

---

## 2. Programación de Sockets UDP en Java

UDP transmite paquetes de datos autocontenidos denominados **datagramas**:
- `DatagramPacket`: Representa el contenedor con los bytes de datos, longitud, dirección IP de destino y puerto.
- `DatagramSocket`: Representa el extremo de comunicación que envía y recibe datagramas.

### 2.1. Ejemplo: Servidor y Cliente Eco en UDP

**Servidor UDP (`ServidorUDP.java`):**
```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;

public class ServidorUDP {
    public static void main(String[] args) throws Exception {
        int puerto = 9876;
        DatagramSocket socket = new DatagramSocket(puerto);
        System.out.println("Servidor UDP a la escucha en el puerto " + puerto);

        byte[] buffer = new byte[1024];
        while (true) {
            DatagramPacket paqueteRecibido = new DatagramPacket(buffer, buffer.length);
            socket.receive(paqueteRecibido); // Bloquea hasta recibir un datagrama

            String mensaje = new String(paqueteRecibido.getData(), 0, paqueteRecibido.getLength());
            System.out.println("Recibido de " + paqueteRecibido.getAddress() + ": " + mensaje);

            // Responder al cliente (Eco en mayúsculas)
            String respuesta = "ECO: " + mensaje.toUpperCase();
            byte[] bytesResp = respuesta.getBytes();
            DatagramPacket paqueteRespuesta = new DatagramPacket(
                bytesResp, bytesResp.length,
                paqueteRecibido.getAddress(), paqueteRecibido.getPort()
            );
            socket.send(paqueteRespuesta);
        }
    }
}
```

**Cliente UDP (`ClienteUDP.java`):**
```java
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

public class ClienteUDP {
    public static void main(String[] args) throws Exception {
        DatagramSocket socket = new DatagramSocket();
        InetAddress servidorIP = InetAddress.getByName("localhost");
        int puertoServidor = 9876;

        String mensaje = "Hola mundo desde UDP";
        byte[] datos = mensaje.getBytes();
        DatagramPacket paqueteEnvio = new DatagramPacket(datos, datos.length, servidorIP, puertoServidor);
        socket.send(paqueteEnvio);

        // Recibir respuesta
        byte[] buffer = new byte[1024];
        DatagramPacket paqueteRespuesta = new DatagramPacket(buffer, buffer.length);
        socket.receive(paqueteRespuesta);

        String recibido = new String(paqueteRespuesta.getData(), 0, paqueteRespuesta.getLength());
        System.out.println("Respuesta del servidor: " + recibido);

        socket.close();
    }
}
```

---

## 3. Programación de Sockets TCP en Java

TCP establece un canal bidireccional fiable continuo en forma de flujo de bytes (*stream*):
- `ServerSocket`: Utilizado por el servidor para escuchar conexiones entrantes en un puerto específico mediante `accept()`.
- `Socket`: Utilizado por el cliente para conectarse al servidor y por el servidor para comunicarse con cada cliente conectado.

### 3.1. Servidores TCP Concurrentes Multihilo
Un servidor que procese peticiones secuencialmente bloqueará a todos los demás clientes mientras atiende al primero. Para solucionar esto, cada conexión aceptada se delega a un hilo trabajador independiente:

```java
import java.io.*;
import java.net.*;

public class ServidorTCPConcurrente {
    public static void main(String[] args) throws IOException {
        int puerto = 5000;
        ServerSocket serverSocket = new ServerSocket(puerto);
        System.out.println("Servidor TCP Concurrente iniciado en el puerto " + puerto);

        while (true) {
            Socket clienteSocket = serverSocket.accept(); // Espera nueva conexión
            System.out.println("Nuevo cliente conectado desde: " + clienteSocket.getInetAddress());

            // Delegar la atención del cliente a un hilo independiente
            new Thread(new ManejadorCliente(clienteSocket)).start();
        }
    }
}

class ManejadorCliente implements Runnable {
    private Socket socket;

    public ManejadorCliente(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try (
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true)
        ) {
            out.println("Bienvenido al Servidor TCP. Escribe 'BYE' para salir.");
            String linea;
            while ((linea = in.readLine()) != null) {
                if ("BYE".equalsIgnoreCase(linea.trim())) {
                    out.println("Hasta pronto.");
                    break;
                }
                out.println("ECO-TCP: " + linea.toUpperCase());
            }
        } catch (IOException e) {
            System.err.println("Error con el cliente: " + e.getMessage());
        } finally {
            try { socket.close(); } catch (IOException e) {}
        }
    }
}
```

---

## 4. Tarea Práctica Evaluativa: Tasca 10

### 4.1. Práctica Guiada de Creación de Cliente y Servidor UDP
D'acord amb la guia docent oficial del curs ([UD3_Tasca10_Practica_UDP_Guiada.pdf](../img/UD3_Tasca10_Practica_UDP_Guiada.pdf)):
- Implementa una arquitectura cliente/servidor UDP donde el cliente envía comandos estructurados (por ejemplo `HORA`, `FECHA`, `INVERTIR <cadena>`) y el servidor procesa y devuelve el resultado.
- Controla el tiempo de espera máximo del cliente mediante `socket.setSoTimeout(5000)` para detectar caídas del servidor.

<div class="interactive-open-response" data-question-id="psp_ut03_open_tasca10">
  <div class="open-question">✍️ <strong>Tasca 10 (Client/Servidor UDP):</strong> Pega el código de las clases de tu cliente y servidor UDP y explica cómo gestionas el retardo de red con <code>setSoTimeout</code> y la captura de <code>SocketTimeoutException</code>:</div>
  <textarea class="open-response-input" rows="4" placeholder="Código de la solución y manejo de timeouts en UDP..."></textarea>
</div>

<div class="interactive-open-response" data-question-id="psp_ut03_open_chat_tcp">
  <div class="open-question">✍️ <strong>Reto Práctico (Arquitectura de Servidor de Chat TCP Multihilo):</strong> Explica qué estructura de datos compartida y qué mecanismos de sincronización utilizarías en el servidor para almacenar la lista de todos los sockets activos y retransmitir mensajes (broadcast) sin provocar una <code>ConcurrentModificationException</code>:</div>
  <textarea class="open-response-input" rows="4" placeholder="Diseño con CopyOnWriteArrayList o colecciones sincronizadas..."></textarea>
</div>
