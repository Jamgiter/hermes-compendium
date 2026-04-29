# Software Development, Web Development & Yuanbao 💻🌐💰

---

## 💻 Software Development

Skills für Entwickler: Debugging, TDD, Code-Review, Plans und mehr.

| Skill | Beschreibung |
|-------|-------------|
| **debugging-hermes-tui-commands** | Hermes TUI Slash-Befehle debuggen |
| **flask-script-dashboard** | Python-Skripte wrappen (1:1!) als Flask-Dashboard |
| **game-guide-vitepress** | Spielguide/Compendium als VitePress-Webseite |
| **hermes-agent-skill-authoring** | Eigene SKILL.md schreiben: Frontmatter, Validator, Struktur |
| **node-inspect-debugger** | Node.js via --inspect + Chrome DevTools Protocol debuggen |
| **plan** | Plan-Modus: Markdown-Plan schreiben, keine Ausführung |
| **python-debugpy** | Python debuggen: pdb REPL + debugpy remote (DAP) |
| **python-script-to-package** | Verstreute Python-Skripte in installierbares Paket umstrukturieren |
| **requesting-code-review** | Pre-Commit-Review: Security-Scan, Quality Gates, Auto-Fix |
| **subagent-driven-development** | Implementierungspläne mit unabhängigen Sub-Agenten ausführen |
| **systematic-debugging** | Systematisches Debuggen: bei jedem Bug/Test-Fehler |
| **test-driven-development** | TDD: RED-GREEN-REFACTOR, Tests vor Code |
| **web-based-admin-panel** | Webbasiertes Server-Admin-Panel (Webmin-ähnlich) |
| **writing-plans** | Implementierungspläne schreiben: kleine Tasks, Pfade, Code |

### 🎯 Wichtige Skills im Detail

#### systematic-debugging

**Auslöser:** „Das Programm stürzt ab", „Stacktrace", „Debug den Fehler"

Der wichtigste Debug-Skill. Bei jedem Bug oder Test-Fehler wird systematisch vorgegangen:

1. Fehler reproduzieren
2. Minimales Beispiel isolieren
3. Logs/Stacktrace analysieren
4. Hypothese bilden
5. Fix implementieren
6. Testen, ob Fix wirkt
7. Regression-Tests laufen lassen

#### test-driven-development

**Auslöser:** „TDD", „Test first", „RED-GREEN-REFACTOR"

Zwingt zum Test-first-Ansatz:
1. **RED** – Test schreiben, der fehlschlägt
2. **GREEN** – Code schreiben, der Test bestehen lässt
3. **REFACTOR** – Code verbessern, Tests bleiben grün

#### writing-plans & plan

**Auslöser:** „Plan erstellen", „Task-Liste", „Vorgehen planen"

Diese Skills erstellen detaillierte Implementierungspläne, bevor Code geschrieben wird. `plan` schreibt den Plan nur (keine Ausführung), `writing-plans` erstellt Task-Listen mit Pfaden und Code-Schnipseln.

#### requesting-code-review

**Auslöser:** „Review meinen Code", „Security-Check", „Code-Qualität"

Führt vor dem Commit eine automatisierte Code-Review durch: Security-Scan, Quality Gates (Linter, Type-Checker), Style-Prüfung und Auto-Fix für einfache Probleme.

#### flask-script-dashboard

**Auslöser:** „Dashboard für Python-Skript", „Web-GUI für CLI-Tool"

Wrapt bestehende Python-Skripte in ein Flask-Web-Dashboard. Wichtig: Die Orginal-Skripte werden **nie verändert** (1:1-Kopie-Prinzip).

#### python-debugpy

**Auslöser:** „Python Debugger", „pdb", „debugpy"

Startet eine Python-Debug-Session mit pdb oder debugpy (DAP-Protokoll). Ermöglicht Step-Debugging, Breakpoints, Variable-Inspection.

---

## 🌐 Web Development

| Skill | Beschreibung |
|-------|-------------|
| **vitepress-github-pages** | VitePress-Projekt einrichten + auf GitHub Pages deployen |
| **wwm-compendium** | Fan-Wiki für Where Winds Meet (WWM) – VitePress-Projekt |

### vitepress-github-pages

**Auslöser:** „Neue VitePress-Seite", „GitHub Pages Setup", „Dokumentationsseite"

Richtet ein VitePress-Projekt ein und deployt es auf GitHub Pages. Kompletter Workflow: Projekt initialisieren, konfigurieren, Theme anpassen, CI/CD-Workflow erstellen, Repo anlegen.

### wwm-compendium

**Auslöser:** „WWM-Seite bearbeiten", „Where Winds Meet"

Das Fan-Wiki für Where Winds Meet, ebenfalls mit VitePress gebaut. Ca. 45 Seiten: Waffen, Bosse, Quests, Items, Info.

---

## 💰 Yuanbao

| Skill | Beschreibung |
|-------|-------------|
| **yuanbao** | Yuanbao (元宝) Gruppen: @mention, Info/Members abfragen |

**Auslöser:** „Yuanbao-Gruppe", „元宝", „Mitglieder abfragen"

Ermöglicht Interaktion mit Yuanbao-Gruppen: Mitglieder @erwähnen, Gruppeninfo abfragen, Mitgliederliste holen. Yuanbao ist eine chinesische Messaging-Plattform.
