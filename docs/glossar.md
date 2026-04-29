# Glossar 📖

Wichtige Begriffe rund um Hermes Agent – kurz erklärt.

---

## A

### Agent
Ein KI-gesteuerter Assistent, der Tools nutzt, um Aufgaben autonom auszuführen. Hermes ist ein solcher Agent.

### ACP (Agent Communication Protocol)
Ein Protokoll, das es verschiedenen KI-Agenten ermöglicht, miteinander zu kommunizieren. Ermöglicht z.B. Claude Code von Hermes aus zu steuern.

### Anthropic
Anbieter der Claude-Modellfamilie. Unterstützter Provider in Hermes.

---

## B

### Base URL
Die Basis-URL eines API-Endpoints. Für Custom-Provider oder lokale Modelle (z.B. Ollama: `http://localhost:11434/v1`).

### Branch Protection
GitHub-Einstellung, die direkte Pushes auf geschützte Branches (z.B. `main`) verhindert. In Hermes-Workflows oft relevant.

---

## C

### CLI (Command Line Interface)
Die Kommandozeilen-Oberfläche. Hermes wird primär über die CLI gesteuert.

### Config
Die Konfigurationsdatei `~/.hermes/config.yaml`. Steuert alle Einstellungen von Hermes.

### Credential Pool
Mehrere API-Keys für denselben Provider. Hermes rotiert automatisch bei Erschöpfung.

### Cron
Zeitgesteuerte Aufgaben. Hermes kann Cron-Jobs ausführen – z.B. tägliche Reports.

### Custom Domain
Eigene Domain für GitHub Pages (z.B. `meineseite.de` statt `user.github.io/repo`).

---

## D

### Debugging
Fehlersuche. Hermes hat Skills für systematisches Debuggen von Code.

### DeepSeek
Chinesisches KI-Unternehmen. Bietet kostengünstige LLM-Modelle, aktuell genutzt in diesem Compendium.

### Delegate Task
Aufgabe an einen Sub-Agenten delegieren. Ermöglicht parallele Bearbeitung.

### Discord
Messaging-Plattform. Hermes kann per Discord-Gateway betrieben werden.

---

## E

### Enforce HTTPS
Erzwingt verschlüsselte Verbindung für GitHub Pages. Wichtig bei Custom Domains.

### Env (Environment)
Umgebungsvariablen. In `~/.hermes/.env` werden API-Keys gespeichert.

---

## F

### Fork
Abspaltung eines GitHub-Repos. Ermöglicht eigene Änderungen am Original-Projekt.

### Frontmatter
YAML-Bereich am Anfang einer Markdown-Datei. Wird für Skill-Metadaten verwendet.

---

## G

### Gateway
Der Dienst, der Hermes mit Messaging-Plattformen verbindet (Telegram, Discord, etc.).

### GitHub Actions
CI/CD-Plattform von GitHub. Wird für Auto-Deploy von VitePress-Seiten genutzt.

### GitHub Pages
Hosting-Dienst von GitHub. Statische Webseiten direkt aus dem Repository.

### GLSL
OpenGL Shading Language. Wird in Vulkan-Compute-Shadern für GPU-Simulationen verwendet.

---

## H

### Hermes Agent
Open-Source KI-Agent von Nous Research. Läuft im Terminal, auf Messaging-Plattformen und in der IDE.

### HF (Hugging Face)
Plattform für ML-Modelle. Hermes unterstützt HF-Token für Modellzugriff.

### Home Channel
Der Standard-Chat-Kanal im Gateway. `/sethome` markiert den aktuellen Kanal.

---

## I

### IDE (Integrated Development Environment)
Programmier-Umgebung. Hermes kann in VS Code, Cursor & Co. integriert werden.

### Impressum
Pflichtangabe nach §5 DDG für Webseiten in Deutschland. Im Compendium im Footer verlinkt.

---

## J

### JAS2 (Jürgen's Advanced Simulation 2)
N-Body-Simulationsprojekt des Autors. Parallel zum Compendium entwickelt.

---

## K

### Key (API-Key)
Geheimer Schlüssel zur Authentifizierung bei einem LLM-Provider. Wird in der `.env` gespeichert.

---

## L

### LLM (Large Language Model)
Großes Sprachmodell. Die KI hinter Hermes (z.B. Claude, DeepSeek, GPT-4).

### LM Studio
Tool zum lokalen Ausführen von LLMs. Hermes kann darauf via Custom Endpoint zugreifen.

### Local Model
Ein LLM, das auf dem eigenen Rechner läuft (z.B. über Ollama, LM Studio).

---

## M

### MCP (Model Context Protocol)
Standard für externe Tools und Datenquellen. Hermes unterstützt MCP-Server.

### Memory
Das persistente Gedächtnis von Hermes. Merkt sich Fakten über den Benutzer über Sessions hinweg.

### MPI (Message Passing Interface)
Standard für parallele Berechnungen in Supercomputern. Wird in JAS2-Simulationen genutzt.

### Multi-Agent
Mehrere Hermes-Instanzen, die parallel arbeiten. Realisierbar via tmux oder delegation.

---

## N

### npx
Node Package Runner. Führt Node-Pakete aus, ohne sie global zu installieren.

### Nous Research
Das Unternehmen hinter Hermes Agent. Entwickelt auch eigene KI-Modelle.

---

## O

### OAuth
Offener Standard für Authentifizierung. Wird von einigen Providern (z.B. Nous Portal) genutzt.

### Ollama
Tool zum lokalen Ausführen von LLMs. Hermes kann über Custom Endpoint darauf zugreifen.

### OpenRouter
Vermittler für viele LLM-Provider. Ein API-Key reicht für Zugriff auf 100+ Modelle.

### OpenSim
Open-Source-Plattform für virtuelle Welten. Ein Projekt des Autors neben Hermes.

---

## P

### Profile
Separate Hermes-Konfigurationen. Eigene Configs, Skills, Sessions für verschiedene Projekte.

### Provider
LLM-Anbieter (OpenRouter, Anthropic, DeepSeek, etc.). In Hermes wechselbar ohne Config-Änderung.

### PTY (Pseudo-Terminal)
Emuliert ein Terminal für interaktive Programme. Nötig für Tools wie Claude Code im Hermes-Subprozess.

---

## R

### Reasoning
Die Fähigkeit eines LLMs, Schritt-für-Schritt zu denken. Steuerbar mit `/reasoning`.

### Red Teaming
Sicherheitstests für KI-Modelle. Versucht, Schutzmechanismen zu umgehen.

---

## S

### Session
Ein Gesprächsdurchlauf in Hermes. Enthält den gesamten Nachrichtenverlauf.

### SHA (Commit SHA)
Eindeutige ID eines Git-Commits. Einige Repos verlangen Actions, die auf SHAs statt Tags gepinnt sind.

### Skill
Wiederverwendbare Anleitung für Hermes. Kann bei Bedarf geladen und ausgeführt werden.

### Sub-Agent
Ein von Hermes gestarteter Nebenprozess für parallele Aufgaben. Läuft isoliert.

### System Prompt
Die Grundinstruktionen für das LLM. Definiert Persönlichkeit, Tools und Verhalten.

---

## T

### Telegram
Messaging-Plattform mit exzellenter Bot-API. Empfohlen für Hermes-Gateway.

### Terminal Tool
Hermes' Fähigkeit, Shell-Befehle auszuführen. Das wichtigste Werkzeug für Systemarbeit.

### TTS (Text-to-Speech)
Sprachausgabe. Hermes kann Antworten vorlesen (Edge TTS, ElevenLabs, etc.).

### Toolset
Eine Gruppe verwandter Tools (z.B. `web`, `terminal`, `file`). Ein/Aus-schaltbar.

---

## V

### VitePress
Static-Site-Generator für Markdown-Dokumentationen. Basis für dieses Compendium und das WWM-Compendium.

### Vision
Die Fähigkeit eines LLMs, Bilder zu analysieren. Nicht alle Modelle unterstützen Vision.

---

## W

### Workflow (GitHub Actions)
Automatisierte Pipeline in GitHub. Z.B. "bei Push → build VitePress → deploy zu Pages".

### Worktree
Isolierter Arbeitsbereich in Git. Ermöglicht parallele Hermes-Instanzen ohne Konflikte.

---

## X

### xAI
KI-Unternehmen von Elon Musk. Betreibt das Grok-Modell, unterstützt in Hermes.

---

## Y

### YAML
Datenformat für Konfigurationen. Hermes' `config.yaml` und SKILL.md Frontmatter nutzen YAML.

### YOLO-Modus
"Du fragst nicht, ich mach einfach". Überspringt Sicherheitsabfragen bei riskanten Befehlen.

---

## Z

### Z.AI / GLM
Chinesischer KI-Provider. Unterstützt in Hermes via `GLM_API_KEY`.
