# -*- coding: utf-8 -*-
"""
Script de sincronització periòdica dels temaris dels companys
(Javier Egea Blasco - SX i Manuel Alonso Argente - BBDD, LMSGI, NE)
"""
import urllib.request
import json
import os
import sys
import subprocess
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

REPO_ROOT = os.path.dirname(os.path.abspath(__file__))
STATE_FILE = os.path.join(REPO_ROOT, ".last_sync.json")
SCRATCH_DIR = r"C:\Users\socde\.gemini\antigravity\brain\6a105488-64c1-45af-a636-4b4d4c9e447e\scratch"

WATCHED_REPOS = [
    {
        "name": "Javier Egea Blasco (Serveis en Xarxa / SX)",
        "owner": "javieregeablasco",
        "repo": "Apuntes",
        "branch": "main",
        "path_filter": "docs/SMX/SMX_2/SX"
    },
    {
        "name": "Manuel Alonso Argente (Web / BBDD / LMSGI / NE)",
        "owner": "manuelalonsoargente",
        "repo": "manuelalonsoargente.github.io",
        "branch": "main",
        "path_filter": ""
    },
    {
        "name": "Manuel Alonso Argente (LMSGI Ejemplos)",
        "owner": "manuelalonsoargente",
        "repo": "LLMSGI-EJEMPLOS",
        "branch": "main",
        "path_filter": ""
    }
]


def load_state():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {}


def save_state(state):
    try:
        with open(STATE_FILE, "w", encoding="utf-8") as f:
            json.dump(state, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Error guardant estat: {e}")


def check_github_repo(owner, repo, branch="main"):
    url = f"https://api.github.com/repos/{owner}/{repo}/commits/{branch}"
    req = urllib.request.Request(url, headers={"User-Agent": "AntigravitySyncAgent/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=12) as response:
            data = json.loads(response.read().decode("utf-8"))
            sha = data.get("sha")
            commit_info = data.get("commit", {})
            author = commit_info.get("author", {})
            date_str = author.get("date")
            message = commit_info.get("message", "").splitlines()[0]
            return {
                "sha": sha,
                "date": date_str,
                "message": message,
                "author": author.get("name")
            }
    except Exception as e:
        return {"error": str(e)}


def run_sync():
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"============================================================")
    print(f"🔍 INSPECCIÓ DIÀRIA DE CANVIS ALS TEMARIS DELS COMPANYS ({now_str})")
    print(f"============================================================")

    state = load_state()
    has_updates = False
    report = []

    for w in WATCHED_REPOS:
        name = w["name"]
        owner = w["owner"]
        repo = w["repo"]
        branch = w["branch"]
        key = f"{owner}/{repo}"

        print(f"\n📡 Comprovant {name} ({key})...")
        res = check_github_repo(owner, repo, branch)

        if "error" in res:
            print(f"  ⚠️ Error en connectar amb GitHub: {res['error']}")
            continue

        current_sha = res["sha"]
        last_sha = state.get(key, {}).get("sha")
        last_date = state.get(key, {}).get("date", "Mai")

        if last_sha != current_sha:
            has_updates = True
            print(f"  🔔 NOU CANVI DETECTAT!")
            print(f"     Commit: {current_sha[:7]} - {res['message']}")
            print(f"     Data: {res['date']} per {res['author']}")
            report.append({
                "repo": name,
                "msg": res["message"],
                "date": res["date"],
                "author": res["author"],
                "sha": current_sha
            })
            # Actualitzar estat
            state[key] = {
                "sha": current_sha,
                "date": res["date"],
                "checked_at": now_str,
                "message": res["message"]
            }
        else:
            print(f"  ✅ Sense canvis des de l'última revisió (Commit: {current_sha[:7]} - {last_date})")
            state[key]["checked_at"] = now_str

    save_state(state)

    if not has_updates:
        print("\n✨ Tots els temaris estan 100% al dia! No s'ha requerit cap sincronització.")
        return 0

    print("\n🚀 S'han detectat actualitzacions! Iniciant procés de sincronització automàtica...")

    # Executar descàrrega i construcció
    rebuild_scripts = [
        ("Descarregar Markdown de Javier", os.path.join(SCRATCH_DIR, "download_javier_raw.py")),
        ("Descarregar imatges de Javier", os.path.join(SCRATCH_DIR, "download_all_javier_images.py")),
        ("Construir Serveis en Xarxa (amb tema propi de FTP/SSH)", os.path.join(SCRATCH_DIR, "build_sex_spanish.py")),
        ("Construir BBDD, LMSGI i NE (Manuel Alonso)", os.path.join(SCRATCH_DIR, "build_all_manuel_spanish.py"))
    ]

    for label, script_path in rebuild_scripts:
        if os.path.exists(script_path):
            print(f"\n⚙️ Executant: {label}...")
            try:
                subprocess.run([sys.executable, script_path], check=True, text=True, encoding='utf-8')
                print(f"  ✅ {label} completat correctament.")
            except Exception as e:
                print(f"  ❌ Error executant {label}: {e}")

    # Fer git add, commit i push si hi ha canvis locals
    print("\n📦 Comprovant canvis en el repositori Git...")
    status = subprocess.run(["git", "-C", REPO_ROOT, "status", "--porcelain"], capture_output=True, text=True, encoding='utf-8').stdout.strip()
    if status:
        print("  📝 Aplicant canvis a Git...")
        subprocess.run(["git", "-C", REPO_ROOT, "add", "-A"], check=True)
        commit_msg = f"sync: actualitzacio automatica de temaris ({now_str})"
        subprocess.run(["git", "-C", REPO_ROOT, "commit", "-m", commit_msg], check=True)
        print("  ⬆️ Pujant a GitHub...")
        subprocess.run(["git", "-C", REPO_ROOT, "push", "origin", "main"], check=True)
        print("  🎉 Sincronització completada i pujada a GitHub Pages!")
    else:
        print("  ℹ️ Els continguts ja coincidien exactament amb els existents.")

    return 1

if __name__ == "__main__":
    run_sync()
