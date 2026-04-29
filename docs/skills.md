# Skills-Übersicht 📚

Hermes Agent hat eine wachsende Bibliothek an Skills – wiederverwendbare Anleitungen für bestimmte Aufgaben. Hier findest du alle verfügbaren Skills, kategorisiert.

> 💡 **Tipp:** Ein Skill wird geladen mit `/skill <name>` in der Session oder per `hermes -s <name>` beim Start.  
> Neue eigene Skills erstellen? → [**Eigene Skills schreiben**](/eigene-skills) 📝

---

## 🚀 Autonomous AI Agents

Skills zum Spawnen und Orchestrieren autonomer KI-Agenten.

| Skill | Beschreibung |
|-------|-------------|
| **claude-code** | Coding-Aufgaben an Claude Code CLI delegieren (Features, PRs) |
| **codex** | Coding-Aufgaben an OpenAI Codex CLI delegieren |
| **hermes-agent** | Hermes Agent selbst konfigurieren, erweitern oder dazu beitragen |
| **opencode** | Coding-Aufgaben an OpenCode CLI delegieren (Features, Code-Review) |

---

## 🎨 Creative

KI-Kreativwerkzeuge für Bilder, ASCII, Video und Design.

| Skill | Beschreibung |
|-------|-------------|
| **architecture-diagram** | Dark-Theme SVG-Architektur-/Cloud-Diagramme als HTML |
| **ascii-art** | ASCII-Art mit pyfiglet, cowsay, boxes, image-to-ascii |
| **ascii-video** | ASCII-Video: Video/Audio in farbiges ASCII-MP4/GIF konvertieren |
| **baoyu-comic** | Wissenscomics: Bildung, Biografien, Tutorials |
| **baoyu-infographic** | Infografiken: 21 Layouts × 21 Stile |
| **claude-design** | Einmalige HTML-Artifakte designen (Landingpages, Desks, Prototypen) |
| **design-md** | Googles DESIGN.md Token-Spezifikationen schreiben/validieren/exportieren |
| **excalidraw** |Handgezeichnete Excalidraw-JSON-Diagramme (Architektur, Flow, Sequenz) |
| **humanizer** | Texte menschlicher machen: KI-typische Formulierungen entfernen |
| **ideation** | Projektideen via kreative Constraints generieren |
| **manim-video** | Manim CE Animationen: 3Blue1Brown-artige Mathe-/Algorithmus-Videos |
| **p5js** | p5.js Sketche: generative Kunst, Shader, interaktive 3D |
| **pixel-art** | Pixel-Art mit Retro-Paletten (NES, Game Boy, PICO-8) |
| **popular-web-designs** | 54 echte Designsysteme (Stripe, Linear, Vercel) als HTML/CSS |
| **songwriting-and-ai-music** | Songwriting-Handwerk und Suno-AI-Musikprompts |
| **touchdesigner-mcp** | TouchDesigner-Instanz via twozero MCP steuern |

---

## 📊 Data Science

Datenwissenschaftliche Workflows.

| Skill | Beschreibung |
|-------|-------------|
| **jupyter-live-kernel** | Iteratives Python via live Jupyter-Kernel |

---

## ⚙️ DevOps

| Skill | Beschreibung |
|-------|-------------|
| **webhook-subscriptions** | Webhook-Abos: ereignisgesteuerte Agenten-Ausführungen |

---

## 🐶 Dogfood

| Skill | Beschreibung |
|-------|-------------|
| **dogfood** | Explorative QA von Web-Apps: Bugs finden, Belege sammeln, Reports |

---

## 📧 Email

| Skill | Beschreibung |
|-------|-------------|
| **himalaya** | Himalaya CLI: IMAP/SMTP-Email aus dem Terminal |

---

## 🎮 Gaming

Spielserver, Modpacks und Gaming-Infrastruktur.

| Skill | Beschreibung |
|-------|-------------|
| **minecraft-modpack-server** | Modded Minecraft-Server hosten (CurseForge, Modrinth) |
| **opensim-bot-client** | OpenMetaverse/GridClient Bot für OpenSim |
| **opensim-ossl-ai-npc** | KI-gestützte NPCs in OpenSimulator via OSSL-Skripte |
| **opensim-remote-admin** | OpenSimulator-Server via SSH + Screen remote verwalten |
| **pokemon-player** | Pokémon via headless Emulator + RAM-Auslese spielen |

---

## 🐙 GitHub

GitHub-Workflows für Repos, PRs, Issues und CI/CD.

| Skill | Beschreibung |
|-------|-------------|
| **codebase-inspection** | Codebasen mit pygount inspizieren: LOC, Sprachen, Anteile |
| **github-auth** | GitHub-Auth: HTTPS-Tokens, SSH-Keys, gh CLI Login |
| **github-code-review** | PRs reviewen: Diffs, Inline-Kommentare via gh oder REST |
| **github-issues** | GitHub Issues erstellen, kategorisieren, labeln, zuweisen |
| **github-pr-workflow** | GitHub PR-Lebenszyklus: Branch, Commit, Open, CI, Merge |
| **github-repo-management** | Repos klonen, erstellen, forken, konfigurieren, verwalten |

---

## 🔌 MCP (Model Context Protocol)

| Skill | Beschreibung |
|-------|-------------|
| **native-mcp** | MCP-Client: Server verbinden, Tools registrieren (stdio/HTTP) |

---

## 🎵 Media

Medieninhalte: YouTube, GIFs, Musik, Audio.

| Skill | Beschreibung |
|-------|-------------|
| **gif-search** | GIFs via Tenor suchen/herunterladen (curl + jq) |
| **heartmula** | HeartMuLa: Suno-artige Songgenerierung aus Lyrics + Tags |
| **songsee** | Audio-Spektrogramme/Features (mel, chroma, MFCC) via CLI |
| **spotify** | Spotify: Play, Search, Queue, Playlists und Geräte verwalten |
| **youtube-content** | YouTube-Transkripte in Zusammenfassungen, Threads, Blogs |

---

## 🧪 MLOps

Maschinelles Lernen – Training, Feintuning, Deployment.

| Skill | Beschreibung |
|-------|-------------|
| **huggingface-hub** | HuggingFace hf CLI: Modelle/Datasets suchen, laden, hochladen |

### Evaluation

| Skill | Beschreibung |
|-------|-------------|
| **evaluating-llms-harness** | lm-eval-harness: LLMs benchmarken (MMLU, GSM8K, etc.) |
| **weights-and-biases** | W&B: ML-Experimente loggen, Sweeps, Model Registry |

### Inference

| Skill | Beschreibung |
|-------|-------------|
| **llama-cpp** | llama.cpp lokale GGUF-Inference + HF Hub Modelldiscovery |
| **obliteratus** | OBLITERATUS: LLM-Refusals entfernen (diff-in-means) |
| **outlines** | Outlines: Strukturierte JSON/Regex/Pydantic LLM-Generierung |
| **serving-llms-vllm** | vLLM: High-Throughput LLM-Serving, OpenAI API, Quantisierung |

### Modelle

| Skill | Beschreibung |
|-------|-------------|
| **audiocraft-audio-generation** | AudioCraft: MusicGen text-to-music, AudioGen text-to-sound |
| **segment-anything-model** | SAM: Zero-Shot Image Segmentation via Punkte, Boxen, Masken |

### Research

| Skill | Beschreibung |
|-------|-------------|
| **dspy** | DSPy: Deklarative LM-Programme, Auto-Prompt-Optimierung, RAG |

### Training

| Skill | Beschreibung |
|-------|-------------|
| **axolotl** | Axolotl: YAML-LLM-Feintuning (LoRA, DPO, GRPO) |
| **fine-tuning-with-trl** | TRL: SFT, DPO, PPO, GRPO, Reward Modeling |
| **unsloth** | Unsloth: 2-5× schnelleres LoRA/QLoRA-Feintuning |

---

## 📝 Note-Taking

| Skill | Beschreibung |
|-------|-------------|
| **obsidian** | Notizen im Obsidian-Vault lesen, suchen, erstellen |

---

## OpenSim NPC Building

| Skill | Beschreibung |
|-------|-------------|
| **opensim-npc-building** | Bau-Workflows für den OpenSim NPC Bot |
| **opensim-ossl-npc-bridge** | OSSL NPC + Hermes Agent Bridge – Realtime AI NPC |

---

## 💼 Productivity

Dokumente, Präsentationen, Tabellenkalkulation.

| Skill | Beschreibung |
|-------|-------------|
| **airtable** | Airtable REST API via curl. CRUD, Filter, Upserts |
| **google-workspace** | Gmail, Kalender, Drive, Docs, Sheets via gws CLI oder Python |
| **linear** | Linear: Issues, Projekte, Teams via GraphQL + curl |
| **maps** | Geocoding, POIs, Routen, Zeitzonen via OpenStreetMap/OSRM |
| **nano-pdf** | PDF-Text/Tippfehler/Titel editieren via nano-pdf CLI |
| **notion** | Notion API via curl: Pages, Databases, Blocks, Search |
| **ocr-and-documents** | Text aus PDFs/Scans extrahieren (pymupdf, marker-pdf) |
| **powerpoint** | .pptx-Präsentationen erstellen, lesen, bearbeiten |

---

## 🔴 Red Teaming

| Skill | Beschreibung |
|-------|-------------|
| **godmode** | LLMs jailbreaken: Parseltongue, GODMODE, ULTRAPLINIAN |

---

## 🔬 Research

Akademische Forschung, Paper, Literatur, Marktdaten.

| Skill | Beschreibung |
|-------|-------------|
| **arxiv** | arXiv-Papers nach Keyword, Autor, Kategorie oder ID durchsuchen |
| **blogwatcher** | Blogs und RSS/Atom-Feeds via blogwatcher-cli überwachen |
| **llm-wiki** | Karpathys LLM Wiki: Interlinked Markdown-Wissensdatenbank |
| **polymarket** | Polymarket abfragen: Märkte, Preise, Orderbücher, Historie |

---

## 🏠 Smart Home

| Skill | Beschreibung |
|-------|-------------|
| **openhue** | Philips Hue-Lichter, Szenen, Räume via OpenHue CLI steuern |

---

## 📱 Social Media

| Skill | Beschreibung |
|-------|-------------|
| **xurl** | X/Twitter via xurl CLI: Post, Search, DM, Media, v2 API |

---

## 💻 Software Development

| Skill | Beschreibung |
|-------|-------------|
| **debugging-hermes-tui-commands** | Hermes TUI Slash-Befehle debuggen: Python, Gateway, Ink UI |
| **flask-script-dashboard** | Python-Skripte wrappen (1:1, nie verändern!) als Flask-Dashboard |
| **game-guide-vitepress** | Spielguide/Compendium als VitePress-Webseite |
| **hermes-agent-skill-authoring** | Eigene SKILL.md schreiben: Frontmatter, Validator, Struktur |
| **node-inspect-debugger** | Node.js via --inspect + Chrome DevTools Protocol debuggen |
| **plan** | Plan-Modus: Markdown-Plan in .hermes/plans/ schreiben, keine Ausführung |
| **python-debugpy** | Python debuggen: pdb REPL + debugpy remote (DAP) |
| **python-script-to-package** | Verstreute Python-Skripte in installierbares Paket umstrukturieren |
| **requesting-code-review** | Pre-Commit-Review: Security-Scan, Quality Gates, Auto-Fix |
| **subagent-driven-development** | Implementierungspläne mit unabhängigen Sub-Agenten ausführen |
| **systematic-debugging** | Systematisches Debuggen: bei jedem Bug, Test-Fehler oder unerwartetem Verhalten |
| **test-driven-development** | TDD: RED-GREEN-REFACTOR, Tests vor Code |
| **web-based-admin-panel** | Webbasiertes Server-Admin-Panel (Webmin-ähnlich) |
| **writing-plans** | Implementierungspläne schreiben: kleine Tasks, Pfade, Code |

---

## 🌐 Web Development

| Skill | Beschreibung |
|-------|-------------|
| **vitepress-github-pages** | VitePress-Projekt einrichten + auf GitHub Pages deployen |
| **wwm-compendium** | Fan-Wiki für Where Winds Meet (WWM) – VitePress-Projekt |

---

## 💰 Yuanbao

| Skill | Beschreibung |
|-------|-------------|
| **yuanbao** | Yuanbao (元宝) Gruppen: @mention, Info/Members abfragen |

---

> 📝 Diese Liste wächst ständig. Neue Skills können per `hermes skills browse` entdeckt und mit `hermes skills install <id>` installiert werden.
