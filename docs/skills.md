     1|# Skills-Übersicht 📚
     2|
     3|Hermes Agent hat eine wachsende Bibliothek an Skills – wiederverwendbare Anleitungen für bestimmte Aufgaben. Hier findest du alle verfügbaren Skills, kategorisiert.
     4|
     5|> 💡 **Tipp:** Ein Skill wird geladen mit `/skill <name>` in der Session oder per `hermes -s <name>` beim Start.  
     6|> Neue eigene Skills erstellen? → [**Eigene Skills schreiben**](/eigene-skills) 📝
     7|
     8|---
     9|
    10|## 🚀 Autonomous AI Agents
    11|
    12|Skills zum Spawnen und Orchestrieren autonomer KI-Agenten.
    13|
    14|| Skill | Beschreibung |
    15||-------|-------------|
    16|| **claude-code** | Coding-Aufgaben an Claude Code CLI delegieren (Features, PRs) |
    17|| **codex** | Coding-Aufgaben an OpenAI Codex CLI delegieren |
    18|| **hermes-agent** | Hermes Agent selbst konfigurieren, erweitern oder dazu beitragen |
    19|| **opencode** | Coding-Aufgaben an OpenCode CLI delegieren (Features, Code-Review) |
    20|
    21|---
    22|
    23|## 🎨 Creative
    24|
    25|KI-Kreativwerkzeuge für Bilder, ASCII, Video und Design.
    26|
    27|| Skill | Beschreibung |
    28||-------|-------------|
    29|| **architecture-diagram** | Dark-Theme SVG-Architektur-/Cloud-Diagramme als HTML |
    30|| **ascii-art** | ASCII-Art mit pyfiglet, cowsay, boxes, image-to-ascii |
    31|| **ascii-video** | ASCII-Video: Video/Audio in farbiges ASCII-MP4/GIF konvertieren |
    32|| **baoyu-comic** | Wissenscomics: Bildung, Biografien, Tutorials |
    33|| **baoyu-infographic** | Infografiken: 21 Layouts × 21 Stile |
    34|| **claude-design** | Einmalige HTML-Artifakte designen (Landingpages, Desks, Prototypen) |
    35|| **design-md** | Googles DESIGN.md Token-Spezifikationen schreiben/validieren/exportieren |
    36|| **excalidraw** |Handgezeichnete Excalidraw-JSON-Diagramme (Architektur, Flow, Sequenz) |
    37|| **humanizer** | Texte menschlicher machen: KI-typische Formulierungen entfernen |
    38|| **ideation** | Projektideen via kreative Constraints generieren |
    39|| **manim-video** | Manim CE Animationen: 3Blue1Brown-artige Mathe-/Algorithmus-Videos |
    40|| **p5js** | p5.js Sketche: generative Kunst, Shader, interaktive 3D |
    41|| **pixel-art** | Pixel-Art mit Retro-Paletten (NES, Game Boy, PICO-8) |
    42|| **popular-web-designs** | 54 echte Designsysteme (Stripe, Linear, Vercel) als HTML/CSS |
    43|| **songwriting-and-ai-music** | Songwriting-Handwerk und Suno-AI-Musikprompts |
    44|| **touchdesigner-mcp** | TouchDesigner-Instanz via twozero MCP steuern |
    45|
    46|---
    47|
    48|## 📊 Data Science
    49|
    50|Datenwissenschaftliche Workflows.
    51|
    52|| Skill | Beschreibung |
    53||-------|-------------|
    54|| **jupyter-live-kernel** | Iteratives Python via live Jupyter-Kernel |
    55|
    56|---
    57|
    58|## ⚙️ DevOps
    59|
    60|| Skill | Beschreibung |
    61||-------|-------------|
    62|| **webhook-subscriptions** | Webhook-Abos: ereignisgesteuerte Agenten-Ausführungen |
    63|
    64|---
    65|
    66|## 🐶 Dogfood
    67|
    68|| Skill | Beschreibung |
    69||-------|-------------|
    70|| **dogfood** | Explorative QA von Web-Apps: Bugs finden, Belege sammeln, Reports |
    71|
    72|---
    73|
    74|## 📧 Email
    75|
    76|| Skill | Beschreibung |
    77||-------|-------------|
    78|| **himalaya** | Himalaya CLI: IMAP/SMTP-Email aus dem Terminal |
    79|
    80|---
    81|
    82|## 🎮 Gaming
    83|
    84|Spielserver, Modpacks und Gaming-Infrastruktur.
    85|
    86|| Skill | Beschreibung |
    87||-------|-------------|
    88|| **minecraft-modpack-server** | Modded Minecraft-Server hosten (CurseForge, Modrinth) |
    89|| **opensim-bot-client** | OpenMetaverse/GridClient Bot für OpenSim |
    90|| **opensim-ossl-ai-npc** | KI-gestützte NPCs in OpenSimulator via OSSL-Skripte |
    91|| **opensim-remote-admin** | OpenSimulator-Server via SSH + Screen remote verwalten |
    92|| **pokemon-player** | Pokémon via headless Emulator + RAM-Auslese spielen |
    93|
    94|---
    95|
    96|## 🐙 GitHub
    97|
    98|GitHub-Workflows für Repos, PRs, Issues und CI/CD.
    99|
   100|| Skill | Beschreibung |
   101||-------|-------------|
   102|| **codebase-inspection** | Codebasen mit pygount inspizieren: LOC, Sprachen, Anteile |
   103|| **github-auth** | GitHub-Auth: HTTPS-Tokens, SSH-Keys, gh CLI Login |
   104|| **github-code-review** | PRs reviewen: Diffs, Inline-Kommentare via gh oder REST |
   105|| **github-issues** | GitHub Issues erstellen, kategorisieren, labeln, zuweisen |
   106|| **github-pr-workflow** | GitHub PR-Lebenszyklus: Branch, Commit, Open, CI, Merge |
   107|| **github-repo-management** | Repos klonen, erstellen, forken, konfigurieren, verwalten |
   108|
   109|---
   110|
   111|## 🔌 MCP (Model Context Protocol)
   112|
   113|| Skill | Beschreibung |
   114||-------|-------------|
   115|| **native-mcp** | MCP-Client: Server verbinden, Tools registrieren (stdio/HTTP) |
   116|
   117|---
   118|
   119|## 🎵 Media
   120|
   121|Medieninhalte: YouTube, GIFs, Musik, Audio.
   122|
   123|| Skill | Beschreibung |
   124||-------|-------------|
   125|| **gif-search** | GIFs via Tenor suchen/herunterladen (curl + jq) |
   126|| **heartmula** | HeartMuLa: Suno-artige Songgenerierung aus Lyrics + Tags |
   127|| **songsee** | Audio-Spektrogramme/Features (mel, chroma, MFCC) via CLI |
   128|| **spotify** | Spotify: Play, Search, Queue, Playlists und Geräte verwalten |
   129|| **youtube-content** | YouTube-Transkripte in Zusammenfassungen, Threads, Blogs |
   130|
   131|---
   132|
   133|## 🧪 MLOps
   134|
   135|Maschinelles Lernen – Training, Feintuning, Deployment.
   136|
   137|| Skill | Beschreibung |
   138||-------|-------------|
   139|| **huggingface-hub** | HuggingFace hf CLI: Modelle/Datasets suchen, laden, hochladen |
   140|
   141|### Evaluation
   142|
   143|| Skill | Beschreibung |
   144||-------|-------------|
   145|| **evaluating-llms-harness** | lm-eval-harness: LLMs benchmarken (MMLU, GSM8K, etc.) |
   146|| **weights-and-biases** | W&B: ML-Experimente loggen, Sweeps, Model Registry |
   147|
   148|### Inference
   149|
   150|| Skill | Beschreibung |
   151||-------|-------------|
   152|| **llama-cpp** | llama.cpp lokale GGUF-Inference + HF Hub Modelldiscovery |
   153|| **obliteratus** | OBLITERATUS: LLM-Refusals entfernen (diff-in-means) |
   154|| **outlines** | Outlines: Strukturierte JSON/Regex/Pydantic LLM-Generierung |
   155|| **serving-llms-vllm** | vLLM: High-Throughput LLM-Serving, OpenAI API, Quantisierung |
   156|
   157|### Modelle
   158|
   159|| Skill | Beschreibung |
   160||-------|-------------|
   161|| **audiocraft-audio-generation** | AudioCraft: MusicGen text-to-music, AudioGen text-to-sound |
   162|| **segment-anything-model** | SAM: Zero-Shot Image Segmentation via Punkte, Boxen, Masken |
   163|
   164|### Research
   165|
   166|| Skill | Beschreibung |
   167||-------|-------------|
   168|| **dspy** | DSPy: Deklarative LM-Programme, Auto-Prompt-Optimierung, RAG |
   169|
   170|### Training
   171|
   172|| Skill | Beschreibung |
   173||-------|-------------|
   174|| **axolotl** | Axolotl: YAML-LLM-Feintuning (LoRA, DPO, GRPO) |
   175|| **fine-tuning-with-trl** | TRL: SFT, DPO, PPO, GRPO, Reward Modeling |
   176|| **unsloth** | Unsloth: 2-5× schnelleres LoRA/QLoRA-Feintuning |
   177|
   178|---
   179|
   180|## 📝 Note-Taking
   181|
   182|| Skill | Beschreibung |
   183||-------|-------------|
   184|| **obsidian** | Notizen im Obsidian-Vault lesen, suchen, erstellen |
   185|
   186|---
   187|
   188|## OpenSim NPC Building
   189|
   190|| Skill | Beschreibung |
   191||-------|-------------|
   192|| **opensim-npc-building** | Bau-Workflows für den OpenSim NPC Bot |
   193|| **opensim-ossl-npc-bridge** | OSSL NPC + Hermes Agent Bridge – Realtime AI NPC |
   194|
   195|---
   196|
   197|## 💼 Productivity
   198|
   199|Dokumente, Präsentationen, Tabellenkalkulation.
   200|
   201|| Skill | Beschreibung |
   202||-------|-------------|
   203|| **airtable** | Airtable REST API via curl. CRUD, Filter, Upserts |
   204|| **google-workspace** | Gmail, Kalender, Drive, Docs, Sheets via gws CLI oder Python |
   205|| **linear** | Linear: Issues, Projekte, Teams via GraphQL + curl |
   206|| **maps** | Geocoding, POIs, Routen, Zeitzonen via OpenStreetMap/OSRM |
   207|| **nano-pdf** | PDF-Text/Tippfehler/Titel editieren via nano-pdf CLI |
   208|| **notion** | Notion API via curl: Pages, Databases, Blocks, Search |
   209|| **ocr-and-documents** | Text aus PDFs/Scans extrahieren (pymupdf, marker-pdf) |
   210|| **powerpoint** | .pptx-Präsentationen erstellen, lesen, bearbeiten |
   211|
   212|---
   213|
   214|## 🔴 Red Teaming
   215|
   216|| Skill | Beschreibung |
   217||-------|-------------|
   218|| **godmode** | LLMs jailbreaken: Parseltongue, GODMODE, ULTRAPLINIAN |
   219|
   220|---
   221|
   222|## 🔬 Research
   223|
   224|Akademische Forschung, Paper, Literatur, Marktdaten.
   225|
   226|| Skill | Beschreibung |
   227||-------|-------------|
   228|| **arxiv** | arXiv-Papers nach Keyword, Autor, Kategorie oder ID durchsuchen |
   229|| **blogwatcher** | Blogs und RSS/Atom-Feeds via blogwatcher-cli überwachen |
   230|| **llm-wiki** | Karpathys LLM Wiki: Interlinked Markdown-Wissensdatenbank |
   231|| **polymarket** | Polymarket abfragen: Märkte, Preise, Orderbücher, Historie |
   232|
   233|---
   234|
   235|## 🏠 Smart Home
   236|
   237|| Skill | Beschreibung |
   238||-------|-------------|
   239|| **openhue** | Philips Hue-Lichter, Szenen, Räume via OpenHue CLI steuern |
   240|
   241|---
   242|
   243|## 📱 Social Media
   244|
   245|| Skill | Beschreibung |
   246||-------|-------------|
   247|| **xurl** | X/Twitter via xurl CLI: Post, Search, DM, Media, v2 API |
   248|
   249|---
   250|
   251|## 💻 Software Development
   252|
   253|| Skill | Beschreibung |
   254||-------|-------------|
   255|| **debugging-hermes-tui-commands** | Hermes TUI Slash-Befehle debuggen: Python, Gateway, Ink UI |
   256|| **flask-script-dashboard** | Python-Skripte wrappen (1:1, nie verändern!) als Flask-Dashboard |
   257|| **game-guide-vitepress** | Spielguide/Compendium als VitePress-Webseite |
   258|| **hermes-agent-skill-authoring** | Eigene SKILL.md schreiben: Frontmatter, Validator, Struktur |
   259|| **node-inspect-debugger** | Node.js via --inspect + Chrome DevTools Protocol debuggen |
   260|| **plan** | Plan-Modus: Markdown-Plan in .hermes/plans/ schreiben, keine Ausführung |
   261|| **python-debugpy** | Python debuggen: pdb REPL + debugpy remote (DAP) |
   262|| **python-script-to-package** | Verstreute Python-Skripte in installierbares Paket umstrukturieren |
   263|| **requesting-code-review** | Pre-Commit-Review: Security-Scan, Quality Gates, Auto-Fix |
   264|| **subagent-driven-development** | Implementierungspläne mit unabhängigen Sub-Agenten ausführen |
   265|| **systematic-debugging** | Systematisches Debuggen: bei jedem Bug, Test-Fehler oder unerwartetem Verhalten |
   266|| **test-driven-development** | TDD: RED-GREEN-REFACTOR, Tests vor Code |
   267|| **web-based-admin-panel** | Webbasiertes Server-Admin-Panel (Webmin-ähnlich) |
   268|| **writing-plans** | Implementierungspläne schreiben: kleine Tasks, Pfade, Code |
   269|
   270|---
   271|
   272|## 🌐 Web Development
   273|
   274|| Skill | Beschreibung |
   275||-------|-------------|
   276|| **vitepress-github-pages** | VitePress-Projekt einrichten + auf GitHub Pages deployen |
   277|| **wwm-compendium** | Fan-Wiki für Where Winds Meet (WWM) – VitePress-Projekt |
   278|
   279|---
   280|
   281|## 💰 Yuanbao
   282|
   283|| Skill | Beschreibung |
   284||-------|-------------|
   285|| **yuanbao** | Yuanbao (元宝) Gruppen: @mention, Info/Members abfragen |
   286|
   287|---
   288|
   289|> 📝 Diese Liste wächst ständig. Neue Skills können per `hermes skills browse` entdeckt und mit `hermes skills install <id>` installiert werden.
   290|