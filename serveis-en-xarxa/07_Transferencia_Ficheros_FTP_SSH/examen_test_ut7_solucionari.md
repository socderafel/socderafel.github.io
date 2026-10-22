# SOLUCIONARI I GUIA DE CORRECCIÓ — EXAMEN TEST UNITAT 7 (FTP / SSH)

**Mòdul:** Serveis en Xarxa (2n SMX)  
**Institut:** IES Mestre Ramón Esteve (Catadau)  
**Criteri d'Avaluació:** `RA3-CEa` (Serveis de transferència de fitxers)  

---

### 1. GRAELLA DE CORRECCIÓ RÀPIDA (Plantilla de correcció en 10 segons)

| Pregunta | Resposta correcta | Criteri associat | Concepte clau avaluat |
|:---:|:---:|:---:|---|
| **1** | **B** | `RA3-CEa` | Port 21 TCP (Canal de control estàndard FTP) |
| **2** | **C** | `RA3-CEa` | Arquitectura doble connexió TCP (Control i Dades) |
| **3** | **A** | `RA3-CEa` | Funció del canal de control (Ordres i respostes) |
| **4** | **B** | `RA3-CEa` | Problema del mode actiu amb routers NAT i tallafocs domèstics |
| **5** | **B** | `RA3-CEa` | Mode passiu (el client inicia sempre la connexió de dades) |
| **6** | **C** | `RA3-CEa` | Requisits del mode passiu al núvol (rang de ports, IP pública i Security Group) |
| **7** | **B** | `RA3-CEa` | Vulnerabilitat de FTP pla (text clar interceptable per Wireshark) |
| **8** | **B** | `RA3-CEa` | Diferència FTPS (TLS/SSL amb certificats) vs SFTP (subservei de SSH) |
| **9** | **C** | `RA3-CEa` | Port 22 TCP (Port estàndard de SSH i SFTP) |
| **10** | **C** | `RA3-CEb` | IIS (Internet Information Services) com a servidor natiu a Windows Server |
| **11** | **A** | `RA3-CEb` | vsftpd com a dimoni FTP estàndard i segur en Linux Ubuntu |
| **12** | **B** | `RA3-CEe` | FileZilla Client com a eina gràfica de transferència multiplataforma |
| **13** | **B** | `RA3-CEd` | Enjaulament (`chroot` / `LocalUser`) per a evitar escalada de directoris |
| **14** | **B** | `RA3-CEd` | Usuari anònim (`anonymous`) per a dipòsits públics de només lectura |
| **15** | **C** | `RA3-CEg` | Codi d'estat `550 Access is denied` per manca de permisos NTFS o d'escriptura |
| **16** | **B** | `RA3-CEa` | Asimetria de claus SSH (pública al servidor `authorized_keys`, privada al client) |
| **17** | **B** | `RA3-CEa` | Bastionat SSH (`PasswordAuthentication no`) per a evitar atacs de diccionari |
| **18** | **B** | `RA3-CEa` | PuTTYgen per a la generació i conversió de claus a format `.ppk` |
| **19** | **C** | `RA3-CEa` | `scp` com a eina de còpia segura de fitxers per línia d'ordres |
| **20** | **B** | `RA3-CEh` | Parada de màquines (`Stop instance`) a AWS per al control de costos |

---

### 2. CRITERIS DE QUALIFICACIÓ RECOMANATS

* **Nombre de preguntes:** 20
* **Puntuació per resposta encertada:** **+0,50 punts**
* **Fórmula de penalització recomanada per a cicles de Grau Mitjà (SMX):**
  * *Opció A (Estàndard FP - 3 errors resten 1 encert):*  
    $$\text{Nota} = \frac{\text{Encerts} - (\text{Errors} / 3)}{2}$$
  * *Opció B (Sense penalització - directe):*  
    $$\text{Nota} = \text{Encerts} \times 0,5$$
  *(Per a grups amb dificultats de comprensió teòrica en 2n SMX, l'Opció B o una penalització suau de 4 errors resten 1 encert és la més encoratjadora).*
