[⬅️ Tornar a l'índex de Serveis en Xarxa](./) | [🏠 Portal Principal](../)

# UT1 - Introducció als Serveis en Xarxa

        ## 1.  Comprovació de la configuració de xarxa en Linux (Debian / LliureX)

Abans de desplegar qualsevol servei de xarxa, és obligatori verificar la interfície i l'adreçament IP de la màquina servidora.

### Comandes bàsiques de diagnòstic

```bash
# Verificar les interfícies de xarxa i les adreces IP assignades
ip -c a

# Comprovar la taula d'encaminament i la porta d'enllaç (Gateway)
ip route show

# Verificar quins ports estan en escolta (serveis actius)
sudo ss -tulnp
```

---

## 2. Errors Comuns i Troubleshooting

> **Problema:** El servei no arranca després de modificar el fitxer de configuració.  
> **Comprovació:** Revisa sempre els logs del sistema amb `journalctl -xeu <nom-del-servei>` per veure la línia exacta on falla la sintaxi.
