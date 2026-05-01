# Konfiguration ⚙️

Hermes Agent wird über zwei Dateien konfiguriert: `config.yaml` (Einstellungen) und `.env` (API-Keys). Hier findest du die wichtigsten Optionen.

---

## 📁 Wo liegt die Config?

```bash
hermes config path       # Zeigt Pfad zu config.yaml
hermes config env-path   # Zeigt Pfad zu .env
```

Standardpfad: `~/.hermes/config.yaml`

---

## 🔧 Wichtige Config-Abschnitte

### Modell & Provider

Unterstützte Provider:

| Provider | Authentifizierung | Env-Variable |
|----------|:-----------------:|--------------|
| **OpenRouter** | API-Key | `OPENROUTER_API_KEY` |
| **Anthropic** | API-Key | `ANTHROPIC_API_KEY` |
| **Nous Portal** | OAuth | `hermes auth` |
| **OpenAI Codex** | OAuth | `hermes auth` |
| **GitHub Copilot** | Token | `COPILOT_GITHUB_TOKEN` |
| **Google Gemini** | API-Key | `GOOGLE_API_KEY` / `GEMINI_API_KEY` |
| **DeepSeek** | API-Key | `DEEPSEEK_API_KEY` |
| **xAI / Grok** | API-Key | `XAI_API_KEY` |
| **Hugging Face** | Token | `HF_TOKEN` |
| **Z.AI / GLM** | API-Key | `GLM_API_KEY` |
| **MiniMax** | API-Key | `MINIMAX_API_KEY` |
| **MiniMax CN** | API-Key | `MINIMAX_CN_API_KEY` |
| **Kimi / Moonshot** | API-Key | `KIMI_API_KEY` |
| **Alibaba / DashScope** | API-Key | `DASHSCOPE_API_KEY` |
| **Xiaomi MiMo** | API-Key | `XIAOMI_API_KEY` |
| **Kilo Code** | API-Key | `KILOCODE_API_KEY` |
| **AI Gateway (Vercel)** | API-Key | `AI_GATEWAY_API_KEY` |
| **OpenCode Zen** | API-Key | `OPENCODE_ZEN_API_KEY` |
| **OpenCode Go** | API-Key | `OPENCODE_GO_API_KEY` |
|| **AWS Bedrock** | IAM/Credentials | `AWS_ACCESS_KEY_ID` + `AWS_SECRET_ACCESS_KEY` |
| **LM Studio** | Automatisch | Lokaler Server (native Provider-Auth) |
| **NVIDIA NIM** | API-Key | `NVIDIA_NIM_API_KEY` |
| **Arcee AI** | API-Key | `ARCEE_API_KEY` |
| **Step Plan** | API-Key | `STEP_API_KEY` |
| **GMI Cloud** | API-Key | `GMI_CLOUD_API_KEY` |
| **Azure AI Foundry** | API-Key | Automatische Erkennung |
| **Vercel AI Gateway** | API-Key | `AI_GATEWAY_API_KEY` (mit Pricing + Dynamic Discovery) |
| **Qwen OAuth** | OAuth | `hermes login --provider qwen-oauth` |
| **Custom Endpoint** | Config | `model.base_url` + `.env` |

Wechseln mit: `hermes model` (interaktiv) oder `hermes config set model.default <modell>`

```yaml
model:
  default: deepseek/deepseek-chat     # Standard-Modell
  provider: deepseek                    # Standard-Provider
  base_url: ""                          # Custom Endpoint (optional)
```

Ändern mit: `hermes model` (interaktiv) oder `hermes config set model.default <modell>`

### Terminal-Backend

```yaml
terminal:
  backend: local      # local, docker, ssh, modal
  cwd: /home/user     # Arbeitsverzeichnis
  timeout: 180        # Max Sekunden
```

### Toolsets

```bash
hermes tools list                 # Alle Tools anzeigen
hermes tools enable web           # Toolset aktivieren
hermes tools disable browser      # Toolset deaktivieren
```

### Memory (Gedächtnis)

```yaml
memory:
  memory_enabled: true
  user_profile_enabled: true
  provider: built-in    # built-in, honcho, mem0
```

### Cron-Jobs

```bash
hermes cron create "30m"      # Alle 30 Minuten
hermes cron list               # Alle Jobs anzeigen
hermes cron remove <id>        # Job löschen
```

---

## 🔐 API-Keys (.env)

```bash
# Provider-Keys
OPENROUTER_API_KEY=sk-or-...
ANTHROPIC_API_KEY=sk-ant-...
DEEPSEEK_API_KEY=sk-...
GOOGLE_API_KEY=...
XAI_API_KEY=...

# Tools
FAL_KEY=...                     # Bildgenerierung
VOICE_TOOLS_OPENAI_KEY=...      # TTS/STT
GROQ_API_KEY=...                # STT (Whisper)
ELEVENLABS_API_KEY=...          # TTS
```

---

## 🌐 Gateway (Messaging-Plattformen)

```bash
hermes gateway setup       # Interaktive Einrichtung
hermes gateway run         # Starten
hermes gateway status      # Status prüfen
hermes gateway install     # Als Systemdienst installieren
```

Unterstützte Plattformen: Telegram, Discord, Slack, WhatsApp, Signal, Email & mehr.

---

## 👤 Profile

Mehrere unabhängige Hermes-Instanzen mit eigenen Configs:

```bash
hermes profile list               # Profile anzeigen
hermes profile create work        # Neues Profil
hermes profile use work           # Aktives Profil setzen
hermes profile export work -o backup.tar.gz  # Export
```

---

## 💡 Nützliche Befehle

```bash
hermes doctor            # System-Check
hermes config check      # Config auf Fehler prüfen
hermes config edit       # Config in $EDITOR öffnen
hermes status            # Komponenten-Status
hermes update            # Hermes aktualisieren
hermes uninstall         # Deinstallieren
```

---

## 🔍 Config im Detail

Eine vollständige Beispiel-Config:

```yaml
model:
  default: openrouter/anthropic/claude-sonnet-4
  provider: openrouter
  base_url: ""

agent:
  max_turns: 90
  tool_use_enforcement: true

terminal:
  backend: local
  cwd: /home/user
  timeout: 180

compression:
  enabled: true
  threshold: 0.50
  target_ratio: 0.20

security:
  redact_secrets: false

memory:
  memory_enabled: true
  user_profile_enabled: true

display:
  skin: default
  tool_progress: true
  show_cost: false

delegation:
  model: ""
  provider: ""
  max_iterations: 50
  max_concurrent_children: 3     # Parallele Subagenten (Default 3)
  max_spawn_depth: 1             # Orchestrator-Tiefe (1 = keine weiteren Children)
  child_timeout_seconds: 600     # Timeout pro Subagent

prompt_caching:
  cache_ttl: 300                 # Cache-TTL in Sekunden (5 Min, bis 1h möglich)

auxiliary:
  curator:
    enabled: true                # Curator (autonome Skill-Pflege)
  vision:
    provider: auto               # Separates Modell für Vision
  compression:
    provider: auto               # Separates Modell für Compression

security:
  redact_secrets: false          # Seit v0.12 standardmäßig AUS (früher: false)
  # Aktivieren: hermes config set security.redact_secrets true

approvals:
  mode: manual                   # manual (Standard) | smart | off

tts:
  provider: edge                 # edge, elevenlabs, openai, minimax, mistral, piper
  # TTS-Provider sind pluggbar via tts.providers.<name>
```
