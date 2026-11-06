---
layout: default
title: "UT05: Técnicas de Programación Segura"
---

<div class="hero-course">
  <div class="hero-badge">UT05 · Criptografía & SSL/TLS · 2n DAM · PSP</div>
  <h1 class="hero-title">Unidad 5: Técnicas de Programación Segura</h1>
  <p class="hero-subtitle">
    Pilares de la seguridad de la información, criptografía simétrica (AES) y asimétrica (RSA), funciones resumen criptográficas (SHA-256), firmas digitales, gestión de claves con <code>KeyStore</code> y comunicaciones seguras con SSL/TLS (<code>SSLSocket</code>).
  </p>
</div>

## 1. Principios de Seguridad de la Información

En el desarrollo de software seguro nos regimos por la tríada **CIA** ampliada con autenticidad y no repudio:
1. **Confidencialidad:** Garantizar que los datos solo sean legibles por receptores autorizados (mediante cifrado).
2. **Integridad:** Asegurar que los datos no han sido modificados o alterados durante su almacenamiento o tránsito (mediante funciones hash y firmas digitales).
3. **Disponibilidad:** Mantener los sistemas accesibles frente a ataques de denegación de servicio (DoS).
4. **Autenticación y No Repudio:** Certeza de la identidad del emisor sin que pueda negar la autoría de una operación (mediante certificados X.509 y firma asimétrica).

---

## 2. Criptografía Simétrica y Asimétrica en Java

Java proporciona el framework de seguridad **JCA/JCE (Java Cryptography Architecture / Extension)** en los paquetes `java.security` y `javax.crypto`:

### 2.1. Cifrado Simétrico con AES-256
Se utiliza la misma clave secreta para cifrar y descifrar:

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.util.Base64;

public class CifradoAES {
    public static void main(String[] args) throws Exception {
        // 1. Generar clave simétrica AES de 256 bits
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256);
        SecretKey clave = keyGen.generateKey();

        // 2. Cifrar
        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, clave);
        String mensaje = "Mensaje confidencial de 2n DAM PSP";
        byte[] cifrado = cipher.doFinal(mensaje.getBytes());
        System.out.println("Texto cifrado (Base64): " + Base64.getEncoder().encodeToString(cifrado));

        // 3. Descifrar
        cipher.init(Cipher.DECRYPT_MODE, clave);
        byte[] descifrado = cipher.doFinal(cifrado);
        System.out.println("Texto recuperado: " + new String(descifrado));
    }
}
```

### 2.2. Criptografía Asimétrica con RSA
Utiliza un par de claves matemáticamente vinculadas: una **clave pública** (conocida por todos) y una **clave privada** (custodiada estrictamente por el propietario).

---

## 3. Comunicaciones Seguras con SSL/TLS

Para proteger las comunicaciones en red contra ataques de intermediario (*Man-in-the-Middle*) y escuchas clandestinas (*eavesdropping*), la capa de transporte se encapsula mediante **TLS (Transport Layer Security)**:
- En lugar de `ServerSocket`, se emplea `SSLServerSocket` obtenido de `SSLServerSocketFactory`.
- En lugar de `Socket`, se emplea `SSLSocket` obtenido de `SSLSocketFactory`.
- La autenticación de los extremos se basa en certificados digitales almacenados en un archivo `KeyStore` (formato PKCS12 / JKS).

```
Cliente TLS                                              Servidor TLS
    |                                                         |
    | ------------ ClientHello (Cifrados soportados) -------> |
    | <----------- ServerHello + Certificado X.509 ---------- |
    | ------------ Verificación con TrustStore -------------> |
    | ------------ Intercambio de claves premaster ---------> |
    | <=========== Canal Seguro Cifrado (Simétrico AES) ===== |
```

---

## 4. Retos y Actividades Prácticas de Seguridad

<div class="interactive-open-response" data-question-id="psp_ut05_open_hash">
  <div class="open-question">✍️ <strong>Actividad UT05.1 (Almacenamiento Seguro de Contraseñas):</strong> Explica por qué nunca debe utilizarse una función hash simple como MD5 o SHA-1 para almacenar contraseñas en una base de datos y detalla el papel del <em>salt</em> y algoritmos como bcrypt o Argon2:</div>
  <textarea class="open-response-input" rows="3" placeholder="Ataques de tablas arcoíris (Rainbow tables), entropía y cálculo iterativo..."></textarea>
</div>

<div class="interactive-open-response" data-question-id="psp_ut05_open_keystore">
  <div class="open-question">✍️ <strong>Actividad UT05.2 (Gestión con keytool y KeyStore):</strong> Escribe el comando de terminal <code>keytool</code> necesario para generar un par de claves RSA de 2048 bits con un certificado autofirmado en un archivo <code>almacen.p12</code> y explica qué propiedades del sistema Java se configuran para usarlo (<code>javax.net.ssl.keyStore</code>):</div>
  <textarea class="open-response-input" rows="3" placeholder="Comando keytool -genkeypair ... y configuración en Java..."></textarea>
</div>
