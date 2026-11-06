---
layout: default
title: "UT04: Generación de Servicios en Red"
---

<div class="hero-course">
  <div class="hero-badge">UT04 · Servicios Web & Protocolos · 2n DAM · PSP</div>
  <h1 class="hero-title">Unidad 4: Generación de Servicios en Red</h1>
  <p class="hero-subtitle">
    Protocolos de la capa de aplicación, el estándar HTTP/1.1 y HTTP/2, consumo de APIs RESTful en formato JSON mediante la moderna API <code>java.net.http.HttpClient</code> de Java 21, transferencia de archivos con FTP y envío de correo con SMTP.
  </p>
</div>

## 1. Protocolos de Nivel de Aplicación y Arquitectura REST

Los servicios en red modernos se fundamentan en arquitecturas orientadas a servicios (*SOA*) y APIs Web de tipo **REST (Representational State Transfer)** sobre el protocolo HTTP:
- **Verbos HTTP:** `GET` (lectura idempotente), `POST` (creación de recursos), `PUT` (reemplazo completo), `PATCH` (actualización parcial), `DELETE` (eliminación).
- **Códigos de Estado:**
  - `2xx` (Éxito: 200 OK, 201 Created).
  - `3xx` (Redirección: 301 Moved Permanently).
  - `4xx` (Error del Cliente: 400 Bad Request, 401 Unauthorized, 404 Not Found).
  - `5xx` (Error del Servidor: 500 Internal Server Error, 503 Service Unavailable).

---

## 2. El Nuevo Cliente HTTP de Java (`java.net.http`)

Introducido en Java 11 y mejorado en Java 21, el paquete `java.net.http` sustituye a la obsoleta `HttpURLConnection`:

### 2.1. Petición GET Asíncrona con `HttpClient`
```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;

public class ClienteRestModerno {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .connectTimeout(Duration.ofSeconds(5))
            .build();

        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
            .header("Accept", "application/json")
            .GET()
            .build();

        // Envío asíncrono no bloqueante
        CompletableFuture<HttpResponse<String>> future = client.sendAsync(request, HttpResponse.BodyHandlers.ofString());

        future.thenApply(HttpResponse::body)
              .thenAccept(body -> System.out.println("Respuesta JSON recibida:\n" + body))
              .join();
    }
}
```

---

## 3. Protocolos de Transferencia de Archivos (FTP) y Correo (SMTP)

- **FTP (File Transfer Protocol):** Utiliza dos puertos (21 para comandos de control y 20 o puertos efímeros para el canal de datos). En Java suele utilizarse la librería `org.apache.commons.net.ftp.FTPClient` para conectar, autenticarse, subir (`storeFile`) y descargar (`retrieveFile`) ficheros.
- **SMTP (Simple Mail Transfer Protocol):** Puerto 25 o 587 (con STARTTLS). Permite enviar correos utilizando comandos de texto plano (`HELO`, `MAIL FROM`, `RCPT TO`, `DATA`, `QUIT`) o mediante librerías como Jakarta Mail.

---

## 4. Retos y Actividades Prácticas de Servicios en Red

<div class="interactive-open-response" data-question-id="psp_ut04_open_rest_post">
  <div class="open-question">✍️ <strong>Actividad UT04.1 (Petición POST con JSON en Java 21):</strong> Muestra cómo construirías un <code>HttpRequest</code> que envíe un objeto JSON mediante el método POST con cabecera <code>Content-Type: application/json</code> utilizando <code>HttpRequest.BodyPublishers.ofString(json)</code>:</div>
  <textarea class="open-response-input" rows="4" placeholder="Código fuente de la petición POST con HttpClient..."></textarea>
</div>

<div class="interactive-open-response" data-question-id="psp_ut04_open_ftp_vs_sftp">
  <div class="open-question">✍️ <strong>Actividad UT04.2 (Seguridad en Transferencia de Archivos):</strong> Explica la diferencia crítica de seguridad entre el protocolo FTP clásico, FTPS (FTP sobre SSL/TLS) y SFTP (SSH File Transfer Protocol). ¿Por qué nunca debe usarse FTP clásico en redes públicas?</div>
  <textarea class="open-response-input" rows="3" placeholder="Contraseñas en texto plano vs canales cifrados con SSH/TLS..."></textarea>
</div>
