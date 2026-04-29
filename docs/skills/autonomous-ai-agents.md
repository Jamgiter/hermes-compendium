# Autonomous AI Agents 🚀

Skills zum Spawnen und Orchestrieren autonomer KI-Coding-Agenten. Hiermit delegierst du Coding-Aufgaben an spezialisierte CLI-Tools wie Claude Code, Codex oder OpenCode – und holst dir das Ergebnis zurück, ohne den Kontext zu wechseln.

---

## Überblick

| Skill | CLI | Beschreibung | 
|-------|:---:|-------------|
| **claude-code** | `claude` | Anthropics offizieller Coding-Agent. Features, PRs, Refactoring |
| **codex** | `codex` | OpenAI Codex CLI – Coding direkt im Terminal |
| **hermes-agent** | `hermes` | Hermes selbst konfigurieren, erweitern, beitragen |
| **opencode** | `opencode` | Open-Source-Alternative mit Fokus auf Code-Review |

---

## 🧑‍💻 claude-code

**Auslöser:** „Schreib eine Funktion für X", „Mach ein PR für Feature Y", „Refaktor das hier"

Claude Code ist Anthropics eigenständiger Coding-Agent. Anders als Hermes ist er spezialisiert auf Softwareentwicklung: Er kann Code lesen, verstehen, editieren, testen und ganze PRs erstellen.

### ⚡ Schnellstart

```bash
# Claude Code installieren
npm install -g @anthropic-ai/claude-code

# Im Projekt-Verzeichnis starten
cd ~/mein-projekt
claude

# Oder einmaligen Task geben
claude -p "Füge einen Health-Check-Endpoint in Flask hinzu"
```

### 🔑 Wichtige Features

| Feature | Beschreibung |
|---------|-------------|
| **Autonomes Editieren** | Liest + schreibt Dateien selbstständig |
| **Git-Integration** | Erstellt Branches, Commits, PRs |
| **Test-Loop** | Führt Tests aus und iteriert bei Fehlschlag |
| **Sub-Agenten** | Kann eigene Unter-Agenten spawnen |
| **Lange Kontexte** | Bis zu 200K Token Kontextfenster |

### 🤝 Hermes-Integration

Hermes lädt den `claude-code`-Skill und delegiert dann via Sub-Agent:

```
# In Hermes-Session:
"Wir brauchen eine REST-API für unser Projekt – nutz Claude Code dafür"
→ Hermes spawnt Claude Code als Sub-Agent
→ Claude Code arbeitet autonom
→ Ergebnis kommt zurück
```

### ⚠️ Fallstricke

1. **Installation nötig** – Claude Code muss auf dem System installiert sein
2. **Anthropic-API-Kosten** – Jeder Aufruf kostet Tokens
3. **Projekt-Kontext fehlt oft** – Dem Sub-Agent genug Kontext mitgeben
4. **Nicht interaktiv** – In Sub-Agent-Modus ohne User-Input

---

## 🤖 codex

**Auslöser:** „Lass Codex das machen", „OpenAI Codex CLI"

OpenAI Codex CLI ist der Coding-Agent von OpenAI – ähnlich wie Claude Code, aber mit OpenAI-Modellen im Rücken.

### ⚡ Schnellstart

```bash
# Installation (via pip)
pip install openai-codex

# CLI starten
codex

# Task geben
codex "Erstelle eine Python-Funktion für Fibonacci"
```

### 🔑 Besonderheiten

| Aspekt | Details |
|--------|---------|
| **Modelle** | o3, o4-mini, GPT-4o |
| **Stärke** | Python/JavaScript/TypeScript |
| **Integration** | Terminal-basiert, keine IDE nötig |
| **Kosten** | OpenAI-API-Verbrauch |

### ⚠️ Fallstricke

1. **API-Key nötig** – OpenAI-Account mit Guthaben vorausgesetzt
2. **Kein Git-Workflow** – Anders als Claude Code kein integriertes PR-Management
3. **Regionseinschränkungen** – Nicht in allen Ländern verfügbar

---

## 🧠 hermes-agent (über Hermes selbst)

**Auslöser:** „Konfigurier Hermes", „Installier einen Skill", „Was kann Hermes?"

Dieser Skill ist etwas Besonderes: Er beschreibt, wie man **Hermes Agent selbst** konfiguriert, erweitert oder zu dessen Entwicklung beiträgt.

### 🔧 Verwendung

Wenn der Skill geladen ist, kann Hermes:

| Aktion | Beschreibung |
|--------|-------------|
| **Config ändern** | `hermes config set model.default <modell>` |
| **Skills verwalten** | Skills browsen, installieren, deinstallieren |
| **Gateway einrichten** | Telegram, Discord, etc. verbinden |
| **Setup-Assistent** | `hermes setup` für Ersteinrichtung |
| **Troubleshooting** | `hermes doctor`, Logs analysieren |

### 📚 Mehr dazu

Siehe [Konfiguration](/konfiguration) und [Eigene Skills schreiben](/eigene-skills) im Compendium.

---

## 🔓 opencode

**Auslöser:** „Nutze OpenCode", „Open-Source-Coding-Agent"

OpenCode ist eine Open-Source-Alternative zu Claude Code und Codex. Besonderheit: Starker Fokus auf **Code-Review**.

### ⚡ Schnellstart

```bash
# Installation
pip install opencode

# Nutzung
opencode "Refaktor diese Funktion"
```

### 🔑 Besonderheiten

| Aspekt | Details |
|--------|---------|
| **Open Source** | Vollständig einsehbar und erweiterbar |
| **Code-Review** | Automatisierte PR-Reviews |
| **Modelle** | Wechselbar (OpenRouter, lokal, etc.) |
| **Preis** | Keine Lizenzkosten, nur API-Kosten |

---

## 🤔 Welcher Skill für welchen Zweck?

| Scenario | Empfehlung |
|----------|-----------|
| Große Codebase, PRs, Tests | **claude-code** (stärkste Git-Integration) |
| Schnelle Python/JS-Skripte | **codex** (OpenAI-Modelle) |
| Hermes selbst einrichten | **hermes-agent** (Built-in) |
| Open Source, Code-Review | **opencode** (Open Source, Review-Fokus) |
| Geld sparen | **opencode** (Modell frei wählbar) |

---

## ⚠️ Allgemeine Fallstricke

1. **Sub-Agenten haben keinen Chat-Verlauf** – Immer alles Nötige in den Kontext packen
2. **API-Kosten summieren sich** – Jeder Sub-Agent-Aufruf kostet extra
3. **Nicht alle Tools verfügbar** – Sub-Agenten haben eingeschränkte Toolsets
4. **Zeitlimit beachten** – Lange Tasks können timeouten (max. 600s)

---

## ✅ Checkliste

- [ ] Gewünschtes CLI installiert (`claude`, `codex`, `opencode`)
- [ ] API-Keys in `.env` hinterlegt
- [ ] Skill geladen (`/skill claude-code` o.ä.)
- [ ] Task-Kontext vollständig beschrieben
- [ ] Ergebnis geprüft
