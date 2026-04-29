# Cheatsheet ⚡

Schnellreferenz für die wichtigsten Hermes-Befehle – zum Nachschlagen, wenn's schnell gehen muss.

---

## 🚀 Basiskommandos

| Befehl | Was es macht |
|--------|-------------|
| `hermes` | Hermes interaktiv starten |
| `hermes chat -q "Frage"` | Einmalige Frage stellen |
| `hermes setup` | Setup-Assistent (Config + Keys) |
| `hermes doctor` | System-Check (Probleme finden) |
| `hermes update` | Hermes aktualisieren |
| `hermes uninstall` | Hermes deinstallieren |
| `hermes --help` | Hilfe anzeigen |
| `hermes version` | Version anzeigen |

---

## ⚙️ Config & Modelle

### Modell wechseln

```bash
# Interaktiv
hermes model

# Direkt setzen
hermes config set model.default openrouter/anthropic/claude-sonnet-4
hermes config set model.provider openrouter

# Aktuelles Modell anzeigen
hermes config get model.default
```

### Config bearbeiten

| Befehl | Beschreibung |
|--------|-------------|
| `hermes config path` | Config-Pfad anzeigen |
| `hermes config edit` | Config in Editor öffnen |
| `hermes config check` | Config auf Fehler prüfen |
| `hermes config get <key>` | Einzelnen Wert abfragen |
| `hermes config set <key> <value>` | Wert setzen |
| `hermes config env-path` | `.env`-Pfad anzeigen |

### Wichtige Config-Keys

| Key | Beispiel | Beschreibung |
|-----|----------|-------------|
| `model.default` | `deepseek/deepseek-chat` | Standard-Modell |
| `model.provider` | `deepseek` | Standard-Provider |
| `terminal.backend` | `local` | Terminal-Backend |
| `terminal.timeout` | `180` | Max. Sekunden |
| `memory.memory_enabled` | `true` | Gedächtnis an/aus |
| `agent.max_turns` | `90` | Max. Interaktionen |

---

## 📚 Skills

### Skills verwalten

| Befehl | Beschreibung |
|--------|-------------|
| `/skill <name>` | Skill in Session laden |
| `hermes skills list` | Alle Skills anzeigen |
| `hermes skills browse` | Skills durchsuchen |
| `hermes skills install <id>` | Skill installieren |
| `hermes skills uninstall <name>` | Skill deinstallieren |
| `hermes -s <name>` | Mit Skill starten |

### Eigene Skills erstellen

| Aktion | Befehl |
|--------|--------|
| Skill anlegen | `skill_manage(action='create', name='...', content='...')` |
| Skill bearbeiten | `skill_manage(action='patch', name='...', old_string='...', new_string='...')` |
| Skill löschen | `skill_manage(action='delete', name='...')` |
| Skill ansehen | `skill_view(name='...')` |
| Alle auflisten | `skills_list()` |

📖 **Ausführliche Anleitung:** [Eigene Skills schreiben](/eigene-skills)

---

## 🛠️ Tools & Toolsets

```bash
# Tools anzeigen / verwalten
hermes tools list              # Alle Tools anzeigen
hermes tools enable web        # Toolset aktivieren
hermes tools disable browser   # Toolset deaktivieren

# Wichtige Toolsets
hermes tools enable terminal   # Shell-Befehle (Standard)
hermes tools enable file       # Dateien lesen/schreiben
hermes tools enable web        # Internet-Zugriff
hermes tools enable browser    # Browser-Automation
hermes tools enable vision     # Bild-Analyse
```

---

## 🌐 Gateway (Multi-Plattform)

| Befehl | Beschreibung |
|--------|-------------|
| `hermes gateway setup` | Gateway einrichten (interaktiv) |
| `hermes gateway run` | Gateway starten |
| `hermes gateway status` | Status prüfen |
| `hermes gateway restart` | Gateway neustarten |
| `hermes gateway stop` | Gateway stoppen |
| `hermes gateway install` | Als Systemdienst installieren |
| `hermes gateway logs` | Logs anzeigen |

**Unterstützte Plattformen:** Telegram, Discord, Slack, WhatsApp, Signal, Email, Matrix & mehr.

---

## 👤 Profile

Mehrere Hermes-Instanzen mit eigener Config:

```bash
hermes profile list               # Profile anzeigen
hermes profile create work        # Neues Profil anlegen
hermes profile use work           # Profil aktivieren
hermes profile export work -o backup.tar.gz  # Export
hermes profile import backup.tar.gz          # Import
```

---

## ⏰ Cron-Jobs

```bash
# Job erstellen (alle 30 Minuten)
hermes cron create "30m"

# Mit Skill
hermes cron create "0 9 * * *" --skill "daily-report"

# Jobs verwalten
hermes cron list                 # Alle Jobs anzeigen
hermes cron remove <id>          # Job löschen
hermes cron pause <id>           # Job pausieren
hermes cron resume <id>          # Job fortsetzen
```

---

## 🔐 API-Keys (.env)

Wichtige Umgebungsvariablen für `~/.hermes/.env`:

| Variable | Wofür? |
|----------|--------|
| `OPENROUTER_API_KEY` | OpenRouter (viele Modelle) |
| `ANTHROPIC_API_KEY` | Claude-Modelle |
| `DEEPSEEK_API_KEY` | DeepSeek |
| `GOOGLE_API_KEY` | Gemini |
| `XAI_API_KEY` | Grok / xAI |
| `OPENAI_API_KEY` | OpenAI-Modelle |
| `GROQ_API_KEY` | Groq (Whisper STT) |
| `ELEVENLABS_API_KEY` | ElevenLabs TTS |
| `FAL_KEY` | Bildgenerierung |

---

## 💡 Nützliche Einzeiler

```bash
# Status-Check
hermes doctor && hermes status && hermes config check

# Schnelltest: Modell antwortet?
hermes chat -q "Antworte mit 'OK'"

# Skills aus anderen Quellen installieren
hermes skills install https://github.com/user/hermes-skill

# Bestimmtes Tooltest aktivieren
hermes tools enable web

# Aktuelle Session speichern (für später)
# Einfach normal beenden – Hermes speichert automatisch
```

---

## 📖 Weiterführendes

- [Skills-Übersicht](/skills) – Alle Skills im Detail
- [Konfiguration](/konfiguration) – Config-Referenz
- [Tipps & Tricks](/tipps) – Workflows aus der Praxis
- [Troubleshooting](/troubleshooting) – Fehler beheben
