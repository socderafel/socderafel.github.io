[⬅️ Tornar al Portal Principal](../)

# 🌐 Serveis en Xarxa

Documentació tècnica, guies de configuració de servidors i laboratoris pràctics del mòdul **Serveis en Xarxa**.

---

## 📑 Índex d'Unitats de Treball

1. **[UT1 - Introducció als Serveis en Xarxa i Configuració de l'Entorn](./ut1-introduccio.md)**
   * Conceptes d'arquitectura client-servidor, adreçament i preparació de màquines virtuals.
2. **UT2 - Servei de Configuració Dinàmica de Hosts (DHCP)** *(Pròximament)*
   * Reserva d'adreces, àmbits (`scopes`), `isc-dhcp-server` / `kea-dhcp` en Linux i Windows Server.
3. **UT3 - Servei de Resolució de Noms (DNS)** *(Pròximament)*
   * Zones directes i inverses, registres (`A`, `CNAME`, `MX`, `PTR`) i configuració amb BIND9.
4. **UT4 - Servei Web (HTTP/HTTPS)** *(Pròximament)*
   * Hostatges virtuals (*VirtualHosts*), Apache / Nginx i certificats SSL/TLS.
5. **[UT7 - Serveis de Transferència de Fitxers (FTP/FTPS) i Accés Remot (SSH/SFTP)](./07_Transferencia_Ficheros_FTP_SSH/)** | *([Versió Markdown](./ut7-transferencia-fitxers-ftp-ssh.md))*
   * Desplegament d'IIS FTP i OpenSSH en Windows Server 2022 i `vsftpd` en Ubuntu Server 24.04 sobre AWS Cloud, mode passiu, aïllament d'usuaris, xifrat FTPS (TLS), claus SSH amb PuTTY/PuTTYgen, SFTP/SCP i auditoria amb Wireshark.

---

## 📌 Normes de lliurament de pràctiques
* Totes les captures de pantalla han de mostrar el **prompt de la terminal amb el teu nom d'usuari** o nom de màquina.
* Els fitxers de configuració modificats (ex. `/etc/dhcp/dhcpd.conf`) s'han d'incloure en blocs de codi, no com a imatge.
