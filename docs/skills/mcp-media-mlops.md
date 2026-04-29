# MCP, Media & MLOps 🔌🎵🧪

---

## 🔌 MCP (Model Context Protocol)

| Skill | Beschreibung |
|-------|-------------|
| **native-mcp** | MCP-Client: Server verbinden, Tools registrieren (stdio/HTTP) |

**Auslöser:** „MCP-Server einrichten", „Model Context Protocol", „Externe Tools via MCP"

Das Model Context Protocol (MCP) ist ein offener Standard, mit dem LLMs externe Tools und Datenquellen nutzen können. Der `native-mcp`-Skill konfiguriert den Built-in-MCP-Client in Hermes.

**Konfiguration in `config.yaml`:**
```yaml
mcp:
  servers:
    filesystem:
      command: npx
      args: ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    github:
      command: npx
      args: ["-y", "@modelcontextprotocol/server-github"]
```

**Unterstützte Protokolle:** stdio (lokale Prozesse), HTTP (Remote-Server)

---

## 🎵 Media

Medien-Skills: YouTube, GIFs, Musik und Audio.

| Skill | Beschreibung |
|-------|-------------|
| **gif-search** | GIFs via Tenor suchen/herunterladen (curl + jq) |
| **heartmula** | HeartMuLa: Suno-artige Songgenerierung aus Lyrics + Tags |
| **songsee** | Audio-Spektrogramme/Features (mel, chroma, MFCC) via CLI |
| **spotify** | Spotify: Play, Search, Queue, Playlists und Geräte verwalten |
| **youtube-content** | YouTube-Transkripte in Zusammenfassungen, Threads, Blogs |

### youtube-content

**Auslöser:** „Fass das YouTube-Video zusammen", „Blog-Thread aus Video"

Holt YouTube-Transkripte und wandelt sie um: Zusammenfassungen, Twitter-Threads, Blog-Artikel oder Newsletter. Spart stundenlanges Video-Schauen.

**Workflow:**
1. YouTube-URL rein
2. Transkript extrahieren
3. Geforderte Ausgabe generieren (Zusammenfassung, Thread, Blog)
4. Ergebnis liefern

### spotify

**Auslöser:** „Spiel Musik", „Spotify-Playlist", „Such n Song"

Steuert Spotify direkt aus Hermes: Playlists verwalten, Titel suchen, Wiedergabe steuern, Geräte wechseln.

---

## 🧪 MLOps

Maschinelles Lernen – Training, Feintuning, Deployment.

### 🤗 huggingface-hub

**Auslöser:** „Such ein Modell auf HuggingFace", „Lad ein Dataset runter", „Upload zu HF"

HuggingFace Hub via hf CLI: Modelle und Datasets suchen, herunterladen, hochladen. Der Hub ist die größte Sammlung von Open-Source-ML-Modellen.

```bash
# Modell suchen
huggingface-cli search llama

# Dataset runterladen
huggingface-cli download dataset-name --local-dir ./data

# Eigenes Modell hochladen
huggingface-cli upload user/model ./model/
```

### 🔬 Evaluation

| Skill | Beschreibung |
|-------|-------------|
| **evaluating-llms-harness** | lm-eval-harness: LLMs benchmarken (MMLU, GSM8K, etc.) |
| **weights-and-biases** | W&B: ML-Experimente loggen, Sweeps, Model Registry |

**evaluating-llms-harness** – Das Standard-Tool zum Benchmarken von LLMs. Unterstützt 100+ Benchmarks (MMLU, GSM8K, HumanEval, etc.).

**weights-and-biases** – Experiment-Tracking für ML-Training. Loggt Metriken, Hyperparameter, Modelle. Ermöglicht Sweeps (Hyperparameter-Optimierung).

### ⚡ Inference

| Skill | Beschreibung |
|-------|-------------|
| **llama-cpp** | llama.cpp lokale GGUF-Inference + HF Hub Modelldiscovery |
| **obliteratus** | OBLITERATUS: LLM-Refusals entfernen (diff-in-means) |
| **outlines** | Outlines: Strukturierte JSON/Regex/Pydantic LLM-Generierung |
| **serving-llms-vllm** | vLLM: High-Throughput LLM-Serving, OpenAI API, Quantisierung |

**llama-cpp** – Der bekannteste Weg, LLMs lokal laufen zu lassen. GGUF-Quantisierung, CPU+GPU, keine Internetverbindung nötig.

**outlines** – Erzwingt strukturierte Outputs (JSON, Regex, Pydantic). Unverzichtbar, wenn LLMs maschinenlesbare Antworten liefern müssen.

**vLLM** – High-Throughput-Serving für Produktion. PagedAttention, Quantisierung, OpenAI-kompatible API.

### 🧠 Training

| Skill | Beschreibung |
|-------|-------------|
| **axolotl** | Axolotl: YAML-LLM-Feintuning (LoRA, DPO, GRPO) |
| **fine-tuning-with-trl** | TRL: SFT, DPO, PPO, GRPO, Reward Modeling |
| **unsloth** | Unsloth: 2-5× schnelleres LoRA/QLoRA-Feintuning, weniger VRAM |

**axolotl** – YAML-basiertes Feintuning. Sag in einer YAML-Datei, was du tun willst, Axolotl macht den Rest. Unterstützt LoRA, QLoRA, DPO, GRPO.

**unsloth** – Beschleunigt LoRA/QLoRA-Feintuning um 2-5×. Reduziert VRAM-Verbrauch drastisch. Kompatibel mit Axolotl und TRL.
