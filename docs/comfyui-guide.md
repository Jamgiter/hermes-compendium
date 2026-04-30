# ComfyUI Guide 🎨

> **ComfyUI** ist eine visuelle Node-basierte Workflow-Engine für generative KI.  
> Alles läuft **lokal** auf deiner GPU — Bilder, Videos und Audio.  
> Server: **http://127.0.0.1:8188**

---

## 📷 Bilder erstellen (Text→Bild)

### Standard Workflow (txt2img)

Ein einfacher SDXL-Workflow besteht aus diesen Nodes:

```
LoadCheckpoint → CLIPTextEncode (positiv) → KSampler → VAEDecode → SaveImage
              → CLIPTextEncode (negativ)  ↗
              → EmptyLatentImage         ↗
```

### Schritt-für-Schritt im GUI

1. **ComfyUI öffnen** → http://127.0.0.1:8188
2. Per **Rechtsklick → "Add Node"** die Nodes hinzufügen:
   - `Add Node → loaders → Load Checkpoint` → SDXL auswählen
   - `Add Node → conditioning → CLIP Text Encode (Prompt)` → dein Prompt
   - Nochmal `CLIP Text Encode` für Negative Prompts
   - `Add Node → latent → Empty Latent Image` → Größe (1024x1024 für SDXL)
   - `Add Node → sampling → KSampler` → 25 Steps, cfg 7, euler
   - `Add Node → image → VAE Decode`
   - `Add Node → image → Save Image`
3. **Verbinden** — Kabel von Node zu Node ziehen
4. **Prompt eingeben** — im CLIPTextEncode-Node
5. **Queue Prompt** klicken (rechts oben) → GPU rechnet
6. Bild erscheint im **Save Image**-Node

### Prompt-Tipps

| Element | Beispiel |
|---------|----------|
| **Stil** | photorealistic, cinematic, oil painting, anime, sketch |
| **Licht** | golden hour, dramatic lighting, soft diffused light |
| **Details** | 8k, highly detailed, intricate, sharp focus |
| **Negativ** | blurry, low quality, distorted, watermark, text |

### Wichtige Parameter

| Parameter | Wert | Effekt |
|-----------|:----:|--------|
| **Steps** | 20–30 | Mehr = feinere Details (aber langsamer) |
| **CFG** | 7–10 | Höher = prompttreuer (aber Overkill ab 15) |
| **Seed** | beliebig | Gleicher Seed = gleiches Bild |
| **Size** | 1024×1024 | SDXL-Optimalgröße |
| **Sampler** | euler / dpmpp_2m | euler = schnell, dpmpp = qualitativ |

> ⚠️ **SDXL** läuft optimal auf **1024×1024**. Andere Größen können zu verzerrten Ergebnissen führen. Für Hoch-/Querformat: 896×1152 oder 1216×832.

---

## 🎵 Audio erstellen

ComfyUI unterstützt Audiogenerierung durch **MusicGen / AudioCraft** oder ähnliche Audio-Workflows.

### Nodes für Audio

```
LoadCheckpoint (Audio-Modell) → TextEncoder → AudioDecoder → SaveAudio
```

### Voraussetzung

```bash
# MusicGen-Nodes installieren
comfy node install comfyui-musicgen
```

### Workflow

1. **Node:** `Load Checkpoint` → ein Audio-Modell laden (z.B. MusicGen)
2. **Node:** `Text Encoder` → Prompt eingeben (z.B. "melodic synthwave, 90bpm")
3. **Node:** `Audio Decode` → Parameter: Dauer in Sekunden
4. **Node:** `Save Audio` → Ausgabe als WAV/MP3

### Audio-Prompt-Beispiele

| Stil | Prompt |
|------|--------|
| **Synthwave** | "retro synthwave, driving bassline, 80s vibe, 120bpm" |
| **Klassik** | "string quartet, melancholic melody, classical" |
| **Ambient** | "deep ambient soundscape, ethereal pads, slow" |
| **Lo-Fi** | "lofi hip hop, relaxed beat, vinyl crackle, jazz sample" |

> ℹ️ **Hinweis:** Audio-Workflows brauchen viel VRAM (≥12 GB empfohlen).  
> Deine RX 9060 XT (16 GB) ist gut geeignet.

---

## 🎬 Video erstellen

### Option 1: AnimateDiff (Bewegung aus Standbildern)

```bash
# AnimateDiff-Node installieren
comfy node install comfyui-animatediff-evolved
```

**Workflow:**

```
LoadCheckpoint → CLIPTextEncode → KSampler → AnimateDiffLoader
                                      ↓
                              LatentKeyframeGroup
                                      ↓
                              AnimateDiffSampler
                                      ↓
                              VAEDecode → SaveVideo (GIF/MP4)
```

### Option 2: Hunyuan Video (KI-Video aus Text)

```bash
comfy node install comfyui-hunyuan-video
```

**Workflow:**

```
LoadHunyuanVideo → TextEncode → KSampler → VAEDecode → SaveVideo
```

### Parameter für Video

| Parameter | AnimateDiff | Hunyuan |
|-----------|:-----------:|:-------:|
| **Frames** | 16–32 | 49–129 |
| **Auflösung** | 512×512 | 640×480 |
| **Steps** | 20–25 | 25–50 |
| **VRAM** | ~8 GB | ~14 GB |
| **Dauer** | 1–3 Min | 5–20 Min |

> ⚠️ **Video ist VRAM-intensiv!** AnimateDiff läuft gut auf 16 GB.  
> Hunyuan Video ist grenzwertig — wenn's crasht, Cloud nutzen.

---

## 📂 Wichtige Ordner

| Pfad | Inhalt |
|:-----|:-------|
| `~/comfy/ComfyUI/models/checkpoints/` | Deine Modelle (SDXL, Flux, etc.) |
| `~/comfy/ComfyUI/models/loras/` | LoRA-Adapter |
| `~/comfy/ComfyUI/models/vae/` | VAE-Dateien |
| `~/comfy/ComfyUI/output/` | Generierte Bilder/Videos/Audio |
| `~/comfy/ComfyUI/custom_nodes/` | Installierte Custom Nodes |
| `/tmp/comfyui.log` | Server-Log |

---

## 💾 Workflows speichern & laden

| Aktion | Tastenkürzel / Menü |
|--------|---------------------|
| **Workflow speichern** | `Strg + S` → als `.json` speichern |
| **Workflow laden** | `Strg + O` → `.json` laden |
| **Als API-Format exportieren** | Menü → "Save (API Format)" |
| **Default-Workflow laden** | Menü → "Load Default" |
| **Clear (alles löschen)** | Rechtsklick → "Clear" |

---

## 🛠️ Nützliche Tastenkürzel

| Kürzel | Funktion |
|--------|----------|
| `Strg + S` | Workflow speichern |
| `Strg + O` | Workflow laden |
| `Strg + Z` | Rückgängig |
| `Strg + A` | Alle Nodes markieren |
| `Entf` | Ausgewählte Nodes löschen |
| `Strg + Enter` | Queue Prompt (Generation starten) |
| `Mittlere Maustaste` | Canvas verschieben |
| `Mausrad` | Zoom |
| `Doppelklick` | Node-Suche öffnen |

---

## ❌ Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| **"CUDA out of memory"** | Steps reduzieren, geringere Auflösung, `--lowvram` Flag |
| **"Module not found"** | Fehlende Custom Nodes installieren: `comfy node install <name>` |
| **"Checkpoint not found"** | Modell fehlt — `comfy model download --url ...` |
| **Server startet nicht** | `/tmp/comfyui.log` prüfen, `.venv` evtl. neu mit `comfy install --restore --amd` |
| **Bild wird schwarz** | Falscher VAE oder Modell nicht geladen — Checkpoint prüfen |
