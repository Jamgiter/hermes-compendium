# 🔌 Plugin-System

Seit **v0.3.0** kann Hermes durch Plugins erweitert werden. Ein Plugin ist ein Python-Skript, das neue **Tools**, **Slash-Befehle**, **Lifecycle-Hooks**, **Dashboard-Tabs** oder sogar ganze **Gateway-Plattformen** mitbringt.

---

## Übersicht

| Version | Neuerung |
|---------|----------|
| **v0.3.0** | Plugin-Architektur – Drop-in Python-Plugins |
| **v0.7.0** | Memory Provider + Credential Pools als Plugin |
| **v0.8.0** | Plugins können CLI-Subcommands registrieren |
| **v0.11.0** | Plugin Surface: Slash-Befehle, Tool-Dispatch, Tool-Blocking, Config |
| **v0.12.0** | Microsoft Teams als erste Plugin-Plattform + Spotify & Google Meet als Bundled Plugins |

---

## Plugin-Verwaltung

### CLI-Befehle

```bash
hermes plugins list              # Alle installierten Plugins anzeigen
hermes plugins install <id>      # Plugin aus Registry installieren
hermes plugins remove <name>     # Plugin deinstallieren
hermes plugins info <name>       # Details zu einem Plugin
```

### Installierte Plugins anzeigen

```bash
hermes plugins list
```

Beispiel-Ausgabe:

```
📦 Installierte Plugins:
  🔌 spotify          — Spotify-Integration (v1.0) [Bundled]
  🔌 google-meet      — Google Meet: Calls beitreten & transkribieren (v1.0) [Bundled]
  🔌 langfuse         — LLM-Observability & Tracing (v0.3) [Bundled]
  🔌 achievements     — Hermes Achievements-System (v0.2) [Bundled]
  🔌 microsoft-teams  — Microsoft Teams Gateway-Adapter (v1.0) [Bundled]
```

### Plugin-Ordner

Plugins liegen als Python-Pakete unter:

```
~/.hermes/plugins/
├── spotify/             # Spotify-Plugin (Bundled)
│   ├── plugin.yaml
│   ├── __init__.py
│   └── tools.py
├── google-meet/
│   ...
└── meine-erweiterung/   # Eigenes Plugin
    ├── plugin.yaml
    └── __init__.py
```

---

## Offizielle Plugins (Bundled)

### 🎵 Spotify

Vollständige Spotify-Steuerung über Hermes:

- **7 Tools:** play, search, queue, playlists, devices, next, previous
- **PKCE OAuth** – Sicheres Login ohne Passwort
- **Interaktiver Setup-Wizard** – `hermes plugins install spotify`
- **Cron-Job-Integration** – z.B. tägliche Playlist-Updates

```bash
hermes plugins install spotify
# → Browser öffnet sich für OAuth-Login
```

### 🤝 Google Meet

Calls beitreten, transkribieren und per Sprachausgabe interagieren:

- **Echtzeit-Transkription** – Schreibt Meeting-Inhalte mit
- **Sprachausgabe** – Hermes kann sich im Meeting äußern
- **Node.js Bot Server** – Läuft als Hintergrundprozess
- **OpenAI Realtime Transport** – Low-Latency-Kommunikation

```bash
hermes plugins install google-meet
```

### 📊 Langfuse

LLM-Observability und Tracing für alle Hermes-Interaktionen:

- **Request-Tracing** – Sieh jede LLM-Anfrage mit Latenz, Tokens, Modell
- **Session-Export** – Gesprächsverläufe in Langfuse-Dashboard
- **Cost-Tracking** – Token-Verbrauch pro Session/Modell

```bash
hermes plugins install langfuse
# Erfordert LANGFUSE_PUBLIC_KEY + LANGFUSE_SECRET_KEY in .env
```

### 🏆 Achievements

Gamification-System – Hermes schaltet Erfolge frei:

- **Automatische Erfolge** – Erste Session, 100 Nachrichten, erster Skill etc.
- **/achievements** – Zeigt alle freigeschalteten Erfolge an
- **Fortschrittsanzeige** – Wie nah am nächsten Erfolg?

### 💼 Microsoft Teams

Erste Plattform, die als Plugin ausgeliefert wird:

- **Vollständiger Gateway-Adapter** – Wie native Plattformen
- **Bot-Unterstützung** – Teams-Bot mit Messaging, Reactions, Mentions
- **Per `hermes gateway setup` konfigurierbar**

---

## Eigenes Plugin schreiben

### Minimales Plugin

Ein Plugin besteht aus zwei Dateien:

**`plugin.yaml`** – Metadaten:
```yaml
name: meine-erweiterung
version: "1.0"
description: Macht etwas Nützliches
author: "Dein Name"
```

**`__init__.py`** – Plugin-Logik:
```python
"""Mein erstes Hermes-Plugin."""

from hermes.plugin import PluginBase

class MyPlugin(PluginBase):
    name = "meine-erweiterung"

    def on_register(self):
        """Wird beim Laden aufgerufen."""
        pass

    def on_unregister(self):
        """Wird beim Entfernen aufgerufen."""
        pass
```

### Plugin-Features

#### Slash-Befehle registrieren
```python
from hermes.plugin import PluginBase

class MyPlugin(PluginBase):
    def on_register(self):
        self.register_command("meinbefehl", self.handle_meinbefehl)

    def handle_meinbefehl(self, agent, args):
        return f"Hallo, du hast '{args}' eingegeben!"
```

#### Tools bereitstellen
```python
def my_tool(param1: str, param2: int = 42) -> dict:
    """Mein erstes Tool.
    
    Args:
        param1: Eine Text-Eingabe
        param2: Eine Zahl (Standard: 42)
    """
    return {"result": f"{param1} x {param2}"}
```

#### Lifecycle-Hooks
```python
class MyPlugin(PluginBase):
    def pre_llm_call(self, messages):
        """Vor jedem LLM-Call – Nachricht bearbeiten."""
        return messages

    def post_llm_call(self, response):
        """Nach jedem LLM-Call – Response bearbeiten."""
        return response

    def on_session_start(self, session):
        """Wird bei jeder neuen Session aufgerufen."""

    def on_session_end(self, session):
        """Wird beim Session-Ende aufgerufen."""

    def pre_tool_call(self, tool_name, args):
        """Kann Tool-Calls blocken oder modifizieren."""
        if tool_name == "dangerous_tool":
            return {"blocked": True, "reason": "Nicht erlaubt"}
        return None  # Tool-Call normal ausführen

    def post_tool_call(self, tool_name, result):
        """Nach jedem Tool-Call."""
        return result
```

#### Dashboard-Tabs
```python
class MyPlugin(PluginBase):
    def get_dashboard_tabs(self):
        return [{
            "id": "mein-tab",
            "title": "📊 Mein Tab",
            "content": "<h1>Dashboard-Inhalt</h1>"
        }]
```

---

## Shell Hooks (Alternative)

Seit **v0.11.0** können auch Shell-Skripte als Lifecycle-Hooks dienen – ohne Python-Kenntnisse:

```bash
# ~/.hermes/hooks/pre_tool_call.sh
#!/bin/bash
echo "Tool-Call: $HERMES_TOOL_NAME mit Args: $HERMES_TOOL_ARGS"
```

Verfügbare Hook-Punkte:

| Hook | Environment-Variablen |
|------|----------------------|
| `pre_tool_call` | `$HERMES_TOOL_NAME`, `$HERMES_TOOL_ARGS` |
| `post_tool_call` | `$HERMES_TOOL_NAME`, `$HERMES_TOOL_RESULT` |
| `on_session_start` | `$HERMES_SESSION_ID` |
| `on_session_end` | `$HERMES_SESSION_ID` |

---

## Memory-Provider als Plugin

Seit **v0.7.0** ist das Memory-System pluggbar:

| Plugin | Beschreibung |
|--------|-------------|
| **SQLite (Default)** | Lokal – keine Installation nötig |
| **Honcho** | KI-gestütztes Memory mit semantischer Suche |
| **Mem0** | Self-Improving Memory |
| **Supermemory** | Cloud-basiertes, geräteübergreifend |

```bash
hermes plugins install honcho
```

Konfiguration in `config.yaml`:
```yaml
memory:
  provider: honcho     # oder: mem0, supermemory, default
  honcho_api_key: "sk-..."
```

---

## Best Practices

- **Plugin.yaml nicht vergessen** – Ohne Metadaten wird das Plugin nicht erkannt
- **Hooks sparsam einsetzen** – `pre_llm_call` und `pre_tool_call` verlangsamen den Agenten
- **Fehlerbehandlung** – Jeder Hook sollte Exceptions abfangen, sonst bricht der Agent ab
- **Keine Side-Effekte in on_register** – Das Plugin sollte erst in Hooks aktiv werden
- **Shell Hooks für einfache Fälle** – Kein Python nötig für kleine Automatisierungen
