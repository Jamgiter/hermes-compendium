# Creative 🎨

<div style="display: flex; flex-wrap: wrap; gap: 12px; margin: 1.5rem 0;">

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🎭</div>
<strong>ascii-art</strong><br>
<small style="color: var(--vp-c-text-2);">Banner, Cowsay, Boxes</small>
</div>

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">✏️</div>
<strong>excalidraw</strong><br>
<small style="color: var(--vp-c-text-2);">Handgezeichnete Diagramme</small>
</div>

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🎨</div>
<strong>claude-design</strong><br>
<small style="color: var(--vp-c-text-2);">HTML-Artifakte & Prototypen</small>
</div>

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🖌️</div>
<strong>p5js</strong><br>
<small style="color: var(--vp-c-text-2);">Generative Kunst & 3D</small>
</div>

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🤖</div>
<strong>comfyui</strong><br>
<small style="color: var(--vp-c-text-2);">KI-Bild/Video/Audio lokal</small>
</div>

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🎥</div>
<strong>manim-video</strong><br>
<small style="color: var(--vp-c-text-2);">3Blue1Brown-Animationen</small>
</div>

<div style="flex: 1; min-width: 140px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🌐</div>
<strong>popular-web-designs</strong><br>
<small style="color: var(--vp-c-text-2);">54 echte Designsysteme</small>
</div>

</div>

KI-Kreativwerkzeuge für Bilder, ASCII, Video, Audio und Design. Von Pixel-Art über Animationen bis zu kompletten Web-Designs.

---

## 📋 Auf einen Blick

| Skill | Typ | Ausgabe | Setup |
|-------|:---:|:-------:|:-----:|
| **architecture-diagram** | Diagramm | SVG/HTML | Built-in |
| **ascii-art** | Text | ASCII | Built-in (pyfiglet, cowsay) |
| **ascii-video** | Video | MP4/GIF | ffmpeg + Bildverarbeitung |
| **baoyu-comic** | Comic | Bild | KI-Modell |
| **baoyu-infographic** | Grafik | PNG/SVG | KI-Modell |
| **claude-design** | Web | HTML | Claude API |
| **comfyui** | Bild/Video/Audio | PNG/MP4/WAV | ROCm/CUDA (lokal) |
| **design-md** | Spezifikation | Markdown/JSON | Built-in |
| **excalidraw** | Diagramm | JSON/SVG | Built-in |
| **humanizer** | Text | Text | Built-in |
| **ideation** | Konzept | Text | Built-in |
| **manim-video** | Video | MP4 | Manim CE + ffmpeg |
| **p5js** | Grafik | HTML/JS | Built-in |
| **pixel-art** | Grafik | PNG | Retro-Paletten |
| **popular-web-designs** | Web | HTML/CSS | Built-in |
| **songwriting-and-ai-music** | Audio | Prompt/Text | Suno API |
| **touchdesigner-mcp** | 3D/AV | TouchDesigner | twozero MCP |

---

## 🎭 ascii-art

> **Auslöser:** „Mach n ASCII-Banner", „Cowsay", „pyfiglet"

Erzeugt ASCII-Art aus Text oder Bildern. Nutzt pyfiglet für Banner, cowsay für sprechende Tiere, boxes für Rahmen und image-to-ascii für Bilder.

### ⚡ Schnellstart

```bash
# Banner
figlet -f big "Hermes"

# Cowsay
cowsay "Hallo Welt"

# Bild zu ASCII
jp2a foto.jpg
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **pyfiglet-Banner** | Über 300 Fonts für Überschriften |
| **cowsay-Tiere** | Lustige sprechende Figuren |
| **boxes-Rahmen** | Kommentar-Blöcke, Code-Rahmen |
| **image-to-ascii** | Fotos in ASCII konvertieren |

> ⚠️ **Fallstricke:**
> 1. pyfiglet und cowsay müssen installiert sein
> 2. Große Bilder können sehr breiten Output erzeugen
> 3. Nicht alle Sonderzeichen werden von allen Fonts unterstützt

---

## ✏️ excalidraw

> **Auslöser:** „Zeichne ein Architektur-Diagramm", „Flow-Chart", „Sequenzdiagramm"

Erzeugt handgezeichnet wirkende SVG-Diagramme als Excalidraw-JSON. Perfekt für Architektur-Skizzen, Ablaufdiagramme und UML-artige Darstellungen.

### ⚡ Schnellstart

```json
{
  "type": "excalidraw",
  "elements": [
    {
      "type": "rectangle",
      "x": 100, "y": 100,
      "width": 200, "height": 100,
      "strokeColor": "#1e1e1e",
      "backgroundColor": "#e8f4f8"
    }
  ]
}
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **Handgezeichneter Look** | Natürliche, nicht perfekte Linien |
| **Architektur-Skizzen** | Systemdesign visuell erklären |
| **Sequenzdiagramme** | Abläufe und Interaktionen |
| **Wireframes** | UI-Skizzen im Rohzustand |

> ⚠️ **Fallstricke:**
> 1. Große Diagramme werden unübersichtlich (max 30–40 Elemente)
> 2. Kein automatisches Layout – Positionen manuell setzen
> 3. Export nur als JSON/SVG, kein PNG direkt

---

## 🎨 claude-design

> **Auslöser:** „Design eine Landingpage", „Mach einen Prototypen", „HTML-Artfakt"

Claude Design erstellt einmalige HTML-Artifakte – Landingpages, Präsentationsdecks, interaktive Prototypen. Alles in einer einzigen HTML-Datei mit CSS + JS.

### ⚡ Schnellstart

```
User: "Design eine Landingpage für eine KI-Beratung"
→ Claude erzeugt eine komplette HTML-Datei mit:
  • Responsive Layout
  • Dark/Light Mode
  • Animationen
  • Hero-Section, Features, CTA
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **Single-File HTML** | Alles in einer Datei – CSS + JS inline |
| **Responsive Design** | Mobil, Tablet, Desktop |
| **Interaktivität** | JS-Animationen, Formulare, Charts |
| **Kein Build-Step** | Einfach ablegen und öffnen |

> ⚠️ **Fallstricke:**
> 1. Claude API-Kosten pro Artfakt
> 2. Komplexe Designs brauchen mehrere Iterationen
> 3. Kein Backend – rein statische Frontends

---

## 🤖 comfyui

> **Auslöser:** „Generier mir ein Bild\", „ComfyUI-Workflow\", „Bild mit KI\", „Video generieren\", „Inpainting\"

**ComfyUI** ist eine visuelle Node-basierte Workflow-Engine für generative KI – das Schweizer Taschenmesser für lokale Bild-, Video- und Audiogenerierung. Alles läuft lokal auf der GPU (ROCm/CUDA) und wird im Browser per Drag-&-Drop-Editor bedient.

### ⚡ Schnellstart

```bash
# Voraussetzung: comfy-cli installiert
pip install comfy-cli

# ComfyUI installieren (ROCm für AMD, --nvidia für NVIDIA)
comfy --skip-prompt install --amd

# Server starten
comfy launch --background

# Modell laden (z.B. SDXL)
comfy model download \\
  --url "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors" \\
  --relative-path models/checkpoints

# Workflow ausführen (API-Format)
python3 scripts/run_workflow.py \\
  --workflow workflow_api.json \\
  --args '{"prompt": "a beautiful sunset"}' \\
  --output-dir ./outputs
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **Node-Editor** | Visuelles Drag-&-Drop für komplexe Pipelines |
| **Text→Bild** | SDXL, Flux & Co. aus Textprompts |
| **Img2Img** | Bilder basierend auf Vorlage umwandeln |
| **Inpainting/Outpainting** | Bildteile ersetzen oder erweitern |
| **ControlNet** | Pose, Tiefe, Kanten, Scribble – alles steuerbar |
| **Video** | AnimateDiff, Hunyuan Video |
| **Audio** | MusicGen / AudioCraft |
| **Upscaling** | Bilder hochskalieren + Face Restoration |
| **API-Steuerung** | Workflows per REST/CLI automatisieren |

### 💻 Lokal vs. Cloud

| Aspekt | Lokal | Comfy Cloud |
|--------|:-----:|:-----------:|
| GPU | Eigene (≥6 GB VRAM) | RTX 6000 Pro |
| Kosten | Gratis (nur Strom) | Abo nötig |
| Setup | 5–10 Min | Null |
| Modelle | Selbst laden | Alle vorinstalliert |
| Datenschutz | ✅ Alles lokal | ❌ Daten auf Servern |

> ⚠️ **Fallstricke:**
> 1. **GPU nötig** – Ohne dedizierte GPU (≥6 GB VRAM) nur Cloud möglich
> 2. **ROCm/CUDA** – AMD-Nutzer brauchen ROCm, NVIDIA CUDA (beides separat)
> 3. **Modelle sind groß** – SDXL ~6.5 GB, Flux ~12 GB, gutes Internet nötig
> 4. **Workflows im API-Format** – Der „Save (API Format)\"-Button im Editor muss verwendet werden
> 5. **VRAM-Limit** – Flux und Video brauchen ≥12 GB VRAM
> 6. **Custom Nodes** – Manche Workflows brauchen zusätzliche Nodes (`comfy node install NAME`)

---

## 🖌️ p5js

> **Auslöser:** „Generative Art", „p5.js Sketch", „Interaktive Visualisierung"

p5.js Sketche – generative Kunst, Shader, interaktive 3D-Visualisierungen. Von Farbpaletten-Explorationen bis zu komplexen Partikelsystemen.

### ⚡ Schnellstart

```javascript
function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(20);
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      fill(random(255), random(255), random(255));
      rect(x, y, 18, 18);
    }
  }
}
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **Generative Kunst** | Algorithmische Muster, Fraktale, Noisescapes |
| **WebGL-3D** | 3D-Objekte, Shader, Post-Processing |
| **Interaktiv** | Maus-, Tastatur-, Kamera-Input |
| **Sound** | Audio-Input/Output, FFT-Visualisierung |

> ⚠️ **Fallstricke:**
> 1. Performance bei vielen Partikeln (>10K) im Browser
> 2. WebGL-Shader brauchen Verständnis von GLSL
> 3. Export nur über Screenshot/Recording

---

## 🎥 manim-video

> **Auslöser:** „Erklärvideo zu Algorithmus X", „3Blue1Brown-Stil", „Mathe-Animation"

Manim CE Animationen: 3Blue1Brown-artige Mathe-/Algorithmus-Videos. Präzise, animierte Erklärungen für komplexe Konzepte.

### ⚡ Schnellstart

```python
from manim import *

class SquareToCircle(Scene):
    def construct(self):
        square = Square()
        circle = Circle()
        self.play(Transform(square, circle))
        self.wait(1)
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **Mathe-Animationen** | Graphen, Gleichungen, geometrische Beweise |
| **Code-Visualisierung** | Algorithmen Schritt für Schritt |
| **Latex-Integration** | Formelsatz in Animationen |
| **Hohe Auflösung** | 4K-Export möglich |

> ⚠️ **Fallstricke:**
> 1. Rendering dauert Minuten bis Stunden
> 2. Manim CE muss installiert sein (Python 3.9+)
> 3. Komplexe Szenen brauchen viel Speicher
> 4. Steile Lernkurve für eigene Animationen

---

## 🎯 Entscheidungsmatrix

| Scenario | ➡️ Empfehlung | Warum? |
|----------|:-------------:|--------|
| Schnelle Banner / Terminal-ASCII | **ascii-art** | Sekundenschnell, kein Setup |
| Architektur-Skizze / Wireframe | **excalidraw** | Handgezeichneter Look, intuitiv |
| Einmalige Landingpage / Prototyp | **claude-design** | Single-File, sofort nutzbar |
| KI-Bild/Video/Audio lokale Generierung | **comfyui** | Node-Editor, alle Modelle, lokal |
| Generative Kunst / interaktive Grafik | **p5js** | Browser-basiert, Live-Editor |
| Mathe-/Algorithmus-Erklärvideo | **manim-video** | 3Blue1Brown-Qualität |
| Inspirationsquelle / Design-Referenz | **popular-web-designs** | 54 echte Systeme als Code |
| Comic / Infografik | **baoyu-comic / baoyu-infographic** | Wissen visuell aufbereiten |
| Text menschlicher machen | **humanizer** | KI-Phrasen entfernen |
| Pixel-Art im Retro-Stil | **pixel-art** | NES, Game Boy, PICO-8 |
| Songwriting / Musik-Prompts | **songwriting-and-ai-music** | Song-Struktur + Suno-Prompts |
| TouchDesigner-Steuerung | **touchdesigner-mcp** | Live-AV-Control |

---

## ⚠️ Allgemeine Fallstricke

1. **Rendering-Zeit** – Manim und ascii-video können Minuten bis Stunden brauchen
2. **API-Kosten** – Claude-Design und Suno AI kosten Tokens/Guthaben
3. **Keine nativen Binär-Exporte** – PNG/MP4 oft nur über Workarounds
4. **Tool-Abhängigkeiten** – Manim, ffmpeg, TouchDesigner müssen lokal installiert sein
5. **Iteration nötig** – Kreativ-Skills brauchen oft mehrere Durchläufe fürs perfekte Ergebnis

---

## ✅ Checkliste

- [ ] Gewünschtes Tool installiert (manim, ffmpeg, touchdesigner…)
- [ ] API-Keys hinterlegt (Claude, Suno…)
- [ ] Skill geladen (`/skill excalidraw` o.ä.)
- [ ] Ausgabeformat klar (HTML, JSON, MP4, PNG?)
- [ ] Render-Zeit eingeplant (besonders bei Video)
- [ ] Ergebnis geprüft und ggf. iteriert
