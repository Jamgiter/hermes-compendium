# Einführung in Hermes Agent 🤖

## Was ist Hermes Agent?

Hermes Agent ist ein **Open-Source KI-Agent** von [Nous Research](https://nousresearch.com/), der in deinem Terminal, auf Messaging-Plattformen und in deiner IDE arbeitet. Er nutzt Large Language Models (LLMs), um Aufgaben autonom auszuführen – von Softwareentwicklung über Systemadministration bis hin zu Recherche.

### 🔑 Kernkonzepte

| Konzept | Beschreibung |
|---------|-------------|
| **Session** | Ein Gesprächsdurchlauf. Alles in einer Session teilt denselben Kontext |
| **Skill** | Wiederverwendbare Anleitung für bestimmte Aufgaben. Wird bei Bedarf geladen |
| **Memory** | Dauerhaftes Gedächtnis zwischen Sessions (User-Profil + Agent-Notizen) |
| **Tool** | Fähigkeit des Agenten (Terminal, Web, Dateien, etc.) |
| **Toolset** | Gruppe verwandter Tools (z.B. `web`, `terminal`, `file`) |
| **Provider** | LLM-Anbieter (OpenRouter, Anthropic, DeepSeek, lokal, etc.) |
| **Gateway** | Erlaubt Chat über Messaging-Plattformen (Telegram, Discord) |
| **Cron** | Geplante, automatische Aufgaben |

### ⚡ Installation

```bash
# Einzeiler – installiert Hermes Agent
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# Starten
hermes

# Setup-Assistent
hermes setup
```

### 🎮 Erste Schritte

```bash
# Einfache Frage
hermes chat -q "Was ist die Hauptstadt von Frankreich?"

# Interaktiver Modus
hermes

# Mit Modell wechseln
hermes model
```

---

## 🧠 Wie Hermes denkt

1. **System-Prompt** wird erstellt (Persönlichkeit, Kontext, verfügbare Tools)
2. **User-Nachricht** kommt herein
3. **LLM** antwortet mit Text + optionalen Tool-Aufrufen
4. **Tools** werden ausgeführt (Terminal, Dateien lesen, Web durchsuchen)
5. **Ergebnisse** gehen zurück ins LLM → weitere Schritte oder finale Antwort
6. **Wiederholen** bis Aufgabe erledigt oder max. Schritte erreicht

---

## 📦 Projekt-Struktur

```
~/.hermes/
├── config.yaml              # Hauptkonfiguration
├── .env                     # API-Keys & Secrets
├── skills/                  # Installierte Skills
├── sessions/                # Sitzungsverlauf
├── logs/                    # Gateway- & Fehlerlogs
├── state.db                 # Persistenter Memory
└── auth.json                # OAuth-Tokens
```

---

## 💡 Pro-Tipp

> Hermes hat ein **persistentes Gedächtnis**. Sag ihm Dinge wie "Denk dran, ich benutze Arch Linux" – und er merkt es sich für die nächste Session! Gespeichert wird über das `memory`-Tool. 👍
