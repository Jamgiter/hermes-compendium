# ComfyUI Skill 🎨

Der **ComfyUI Skill** ist seit Hermes **v0.12.0** (Curator Release, 30. April 2026) standardmäßig eingebaut. Er ermöglicht Hermes, ComfyUI zu installieren, zu starten und Workflows auszuführen.

> **Hinweis:** Der Skill ist sehr neu – es gibt noch wenig öffentliche Erfahrungsberichte. Die folgenden Infos basieren auf eigener Nutzung mit ROCm / AMD Radeon.

---

## 🚀 Funktionen

| Feature | Beschreibung |
|:--------|:-------------|
| **Installation** | `comfy-cli` + hardware-gated lokale Installation |
| **Node-Management** | Nodes/Models verwalten |
| **Workflow-Ausführung** | Workflows laden, Parameter injizieren, ausführen |
| **Medientypen** | Bilder, Video, Audio |
| **Cloud/Cloud** | Comfy Cloud (API-Key nötig) oder lokal |

---

## ⚙️ Konfiguration

| Bereich | Details |
|:--------|:--------|
| **Version** | ComfyUI v0.20.1 |
| **GPU** | RX 9060 XT (16 GB VRAM, ROCm 6.3) |
| **Torch** | 2.9.1+rocm6.3 |
| **Modelle** | SDXL Base (6,5 GB) – stabil; ACE Step 1.5 Turbo (9,4 GB) – instabil |
| **Server-Port** | 8188 |
| **Bildergalerie** | Port 8765 (siehe unten) |

---

## 🖼️ Bildergalerie

Die ComfyUI-Oberfläche ist gewöhnungsbedürftig. Alternative: Eigener Bilder-Viewer:

```bash
# Starten (im Hintergrund)
cd ~/comfy/ComfyUI/output && python3 -m http.server 8765
```

Dann im Browser öffnen: **http://127.0.0.1:8765/galerie.html**

> Die Galerie zeigt alle generierten Bilder als Raster. Einfach draufklicken zum Vergrößern.

---

## ⚠️ Bekannte Probleme (ROCm / RX 9060 XT)

### 1. Zweite Generierung crasht den Server
**Problem:** Nach einer erfolgreichen ersten Bildgenerierung stürzt ComfyUI beim zweiten Prompt ab (Port 8188 nicht mehr erreichbar, "error reconnecting" in der UI).

**Ursache:** Vermutlich VRAM-Fragmentierung oder ROCm-Treiber-Problem auf der RX 9060 XT (16 GB).

**Lösung:** Nach jedem Bild den Server neustarten:
```bash
# PID aus /tmp/comfyui.pid lesen (falls vorhanden)
kill $(cat /tmp/comfyui.pid)
# Oder per ps finden
ps aux | grep "python main.py" | grep -v grep | awk '{print $2}'
kill <PID>

# Neu starten
cd ~/comfy/ComfyUI && source .venv/bin/activate && python main.py
```

**Workaround per API:** Vor dem zweiten Prompt VRAM freigeben:
```bash
curl -X POST http://127.0.0.1:8188/free \
  -H "Content-Type: application/json" \
  -d '{"unload_models":true,"free_memory":true}'
```
Hilft nicht immer, aber manchmal.

### 2. ACE Step 1.5 Turbo (9,4 GB) instabil
Das große Bildbearbeitungs-Modell lädt oft nicht oder stürzt ab.

**Lösung:** SDXL Base (6,5 GB) nutzen – läuft stabil.

### 3. Serverseitiger Start über Hermes
Wenn Hermes ComfyUI per `terminal(background=true)` startet, kommt oft kein Output/Log und der Server ist nicht erreichbar. Manueller Start in einem echten Terminal funktioniert zuverlässig.

### 4. PID-Datei nicht immer vorhanden
`/tmp/comfyui.pid` existiert nicht nach jedem Start. Alternativ per `ps aux | grep python main.py` die PID finden.

---

## 💡 Tipps

| Situation | Lösung |
|:----------|:-------|
| ComfyUI startet nicht | In echtem Terminal starten, nicht per Hermes-Background |
| Zweites Bild | Vorher VRAM free + Server neustarten |
| Bilder ansehen | Galerie auf Port 8765 statt ComfyUI-UI |
| ACE Step testen | Besser SDXL verwenden |
| Prompt eingeben | Per API an ComfyUI senden (einfacher als die GUI) |

---

## 🔗 Verwandte Seiten

- [Skills-Übersicht](/skills)
- [Tipps & Tricks](/tipps)
- [Troubleshooting](/troubleshooting)
