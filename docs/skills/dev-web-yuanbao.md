# Software Development, Web Development & Yuanbao 💻🌐💰

---

## 📊 Auf einen Blick

| Kategorie | Skills | Kurzbeschreibung |
|-----------|--------|-----------------|
| 💻 **Software Dev** | 13 Skills | Debugging, TDD, Code-Review, Plans, Paketierung & mehr |
| 🌐 **Web Development** | 2 Skills | VitePress-Seiten, GitHub Pages Deployment, Fan-Wiki |
| 💰 **Yuanbao** | 1 Skill | Gruppen-Interaktion auf Yuanbao (元宝) |

---

## 🧩 Icon-Übersicht

| 💻 Software Development | 🌐 Web Development | 💰 Yuanbao |
|:---:|:---:|:---:|
| 🐛 Debugging | 📖 VitePress | 💬 Gruppen |
| 🧪 TDD | 🚀 GitHub Pages | 👥 @Mentions |
| 📋 Plans | 🎮 Fan-Wiki | ℹ️ Info |
| 🔍 Code-Review | | |
| 📦 Paketierung | | |

---

## 💻 Software Development

Skills für Entwickler: Debugging, TDD, Code-Review, Plans und mehr.

| # | Skill | Auslöser | ⚡ Features | ⚠️ Fallstricke |
|---|-------|---------|------------|---------------|
| 1 | **debugging-hermes-tui-commands** | Hermes TUI Slash-Befehle debuggen | TUI-Debugging, Slash-Command-Analyse | Terminal-Output vs TUI-Interaktion beachten |
| 2 | **flask-script-dashboard** | "Dashboard für Python-Skript", "Web-GUI für CLI-Tool" | Python-Skripte wrappen (1:1!) als Flask-Dashboard | Original-Skripte **nie verändern** – 1:1-Kopie-Prinzip |
| 3 | **game-guide-vitepress** | Spielguide/Compendium | VitePress-Webseite für Spiele-Guides | Große Content-Mengen erfordern Strukturplanung |
| 4 | **hermes-agent-skill-authoring** | Eigene SKILL.md schreiben | Frontmatter, Validator, Struktur | Frontmatter-Syntax strikt einhalten |
| 5 | **node-inspect-debugger** | Node.js debuggen | `--inspect` + Chrome DevTools Protocol | Chrome DevTools-Verbindung erforderlich |
| 6 | **plan** | "Plan erstellen", "Task-Liste", "Vorgehen planen" | Markdown-Plan schreiben, **keine Ausführung** | Nur Plan – keine Code-Generierung |
| 7 | **python-debugpy** | "Python Debugger", "pdb", "debugpy" | pdb REPL + debugpy remote (DAP), Breakpoints, Variables | Remote-Verbindung nötig für debugpy |
| 8 | **python-script-to-package** | Verstreute Python-Skripte | In installierbares Paket umstrukturieren | Abhängigkeiten sauber definieren |
| 9 | **requesting-code-review** | "Review meinen Code", "Security-Check" | Security-Scan, Quality Gates, Auto-Fix | Vor **jedem Commit** ausführen |
| 10 | **subagent-driven-development** | Implementierungspläne | Unabhängige Sub-Agenten ausführen | Sub-Agenten-Koordination komplex |
| 11 | **systematic-debugging** | "Das Programm stürzt ab", "Stacktrace", "Debug den Fehler" | 7-Schritte-System: Reproduzieren → Isolieren → Analysieren → Hypothese → Fix → Testen → Regression | Schritt 1 (Reproduzieren) nicht überspringen! |
| 12 | **test-driven-development** | "TDD", "Test first", "RED-GREEN-REFACTOR" | Test-first-Ansatz mit 3 Phasen | Disziplin für RED-Phase nötig |
| 13 | **web-based-admin-panel** | Webbasiertes Server-Admin-Panel | Webmin-ähnliches Dashboard | Sicherheitsrichtlinien beachten |

---

### 🎯 Wichtige Skills im Detail

---

#### 🐛 systematic-debugging

**Auslöser:** „Das Programm stürzt ab", „Stacktrace", „Debug den Fehler"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | 7-stufiges Debugging-System: Reproduzieren → Minimalbeispiel → Logs/Stacktrace → Hypothese → Fix → Test → Regression. Strukturiertes Vorgehen bei **jedem** Bug oder Test-Fehler. |
| **⚠️ Fallstricke** | ❌ Schritt 1 überspringen („Den Fehler kenne ich schon") → führe ihn immer reproduzierbar aus. ❌ Keine Hypothese vor dem Fix → Rate-Fixes vermeiden. ❌ Regression-Tests vergessen → alter Code kann kaputtgehen. |

**Workflow:**

```
1. 🔄 Fehler reproduzieren
       ↓
2. ✂️ Minimales Beispiel isolieren
       ↓
3. 📋 Logs/Stacktrace analysieren
       ↓
4. 💡 Hypothese bilden
       ↓
5. 🔧 Fix implementieren
       ↓
6. ✅ Testen, ob Fix wirkt
       ↓
7. 🔁 Regression-Tests laufen lassen
```

---

#### 🧪 test-driven-development

**Auslöser:** „TDD", „Test first", „RED-GREEN-REFACTOR"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Erzwingt Test-first-Ansatz. Drei klar getrennte Phasen: RED (Test schreiben, der fehlschlägt) → GREEN (Code schreiben, der Test besteht) → REFACTOR (Code verbessern, Tests bleiben grün). |
| **⚠️ Fallstricke** | ❌ RED-Phase überspringen und direkt Code schreiben → das ist TDD nicht. ❌ REFACTOR-Phase auslassen → Code-Qualität leidet. ❌ Zu große Tests in RED → inkrementelles Arbeiten unmöglich. |

**Zyklus:**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   🔴 RED        →    🟢 GREEN      →    🔵 REFACTOR  │
│   Test          →    Code          →    Verbessern   │
│   schreiben     →    schreiben     →    + Test grün  │
│   (failt)       →    (besteht)     →    (bleibt grün)│
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

#### 📋 writing-plans & plan

**Auslöser:** „Plan erstellen", „Task-Liste", „Vorgehen planen"

| Aspekt | `plan` | `writing-plans` |
|--------|--------|-----------------|
| **⚡ Features** | Schreibt Markdown-Plan, **keine Ausführung**. Reiner Plan-Modus. | Erstellt Task-Listen mit Dateipfaden, Code-Schnipseln und detaillierten Schritten. |
| **⚠️ Fallstricke** | ❌ Erwartet, dass der Plan auch ausgeführt wird → `plan` führt **nie** Code aus. | ❌ Zu abstrakte Tasks → besser kleine, konkrete Einzelschritte. ❌ Pfade vergessen → immer Dateipfade angeben. |

---

#### 🔍 requesting-code-review

**Auslöser:** „Review meinen Code", „Security-Check", „Code-Qualität"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Automatisierte Pre-Commit-Review: Security-Scan auf bekannte Schwachstellen, Quality Gates (Linter, Type-Checker), Style-Prüfung, Auto-Fix für einfache Probleme. |
| **⚠️ Fallstricke** | ❌ Review erst nach dem Commit → zu spät, vorher ausführen! ❌ Auto-Fix nicht nachprüfen → maschinelle Fixes können Kontext verlieren. |

---

#### 🐍 python-debugpy

**Auslöser:** „Python Debugger", „pdb", „debugpy"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Zwei Debug-Modi: `pdb` (klassische REPL) und `debugpy` (DAP-Protokoll für Remote-Debugging). Step-Debugging, Breakpoints, Variable-Inspection. |
| **⚠️ Fallstricke** | ❌ `debugpy` braucht eine laufende DAP-Client-Verbindung → ohne Remote-Gegenstelle startet der Prozess nicht. ❌ `pdb` blockt im Terminal → für CI/CD ungeeignet. |

---

#### 🧪 flask-script-dashboard

**Auslöser:** „Dashboard für Python-Skript", „Web-GUI für CLI-Tool"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Wrapt bestehende Python-Skripte ohne Änderung (1:1-Kopie-Prinzip) in ein Flask-Web-Dashboard. CLI-Argumente werden zu Web-Formular-Feldern. |
| **⚠️ Fallstricke** | ❌ 1:1-Prinzip verletzen → Original-Skripte **nie** verändern! Immer Kopie wrappen. ❌ Keine Input-Validierung im Web-Formular → gefährliche CLI-Argumente filtern. |

---

## 🌐 Web Development

| # | Skill | Auslöser | ⚡ Features | ⚠️ Fallstricke |
|---|-------|---------|------------|---------------|
| 1 | **vitepress-github-pages** | "Neue VitePress-Seite", "GitHub Pages Setup" | VitePress-Projekt einrichten + deployen, CI/CD-Workflow | GitHub-Token/Berechtigungen für Actions nötig |
| 2 | **wwm-compendium** | "WWM-Seite bearbeiten", "Where Winds Meet" | Fan-Wiki mit ~45 Seiten: Waffen, Bosse, Quests, Items | Content-Pflege bei Spiel-Updates |

---

### 🎯 vitepress-github-pages (Detail)

**Auslöser:** „Neue VitePress-Seite", „GitHub Pages Setup", „Dokumentationsseite"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Kompletter Workflow: Projekt initialisieren → Konfigurieren → Theme anpassen → CI/CD-Workflow (GitHub Actions) erstellen → Repository anlegen → Auf GitHub Pages deployen. Automatisches Deployment bei Push auf main. |
| **⚠️ Fallstricke** | ❌ `base`-Path im VitePress-Config vergessen → Seiten werden nicht korrekt ausgeliefert. ❌ GitHub Actions-Token nicht gesetzt → Deployment schlägt fehl. ❌ Branch-Name falsch (main vs master) → CI/CD triggert nicht. |

**Workflow:**

```
📝 Projekt initiieren → ⚙️ Konfigurieren → 🎨 Theme anpassen
       ↓
🔄 CI/CD erstellen (GitHub Actions)
       ↓
📦 Repo anlegen → 🚀 push → 🌐 GitHub Pages
```

---

### 🎮 wwm-compendium

**Auslöser:** „WWM-Seite bearbeiten", „Where Winds Meet"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Fan-Wiki für Where Winds Meet (WWM). Basierend auf VitePress. Ca. 45 Seiten: Waffen, Bosse, Quests, Items, allgemeine Info. Gleiche Technik wie vitepress-github-pages. |
| **⚠️ Fallstricke** | ❌ Veraltete Inhalte nach Spiel-Updates → regelmäßig prüfen. ❌ Große Bild-Dateien → Performance-Optimierung nötig. |

---

## 💰 Yuanbao

| Skill | Auslöser | ⚡ Features | ⚠️ Fallstricke |
|-------|---------|------------|---------------|
| **yuanbao** | "Yuanbao-Gruppe", "元宝", "Mitglieder abfragen" | Gruppen-Interaktion: Mitglieder @erwähnen, Gruppeninfo abfragen, Mitgliederliste holen | API-Rate-Limits beachten, chinesische Messaging-Plattform |

### Details

**Auslöser:** „Yuanbao-Gruppe", „元宝", „Mitglieder abfragen"

| Aspekt | Beschreibung |
|--------|-------------|
| **⚡ Features** | Ermöglicht Interaktion mit Yuanbao-Gruppen (元宝). Mitglieder @erwähnen, Gruppeninfo abfragen, Mitgliederliste abrufen. Yuanbao ist eine chinesische Messaging-Plattform. |
| **⚠️ Fallstricke** | ❌ Rate-Limits der Yuanbao-API → zu viele Anfragen in kurzer Zeit führen zur Drosselung. ❌ Chinesische Zeichenkodierung beachten → UTF-8 sicherstellen. |

---

## 📋 Schnellübersicht nach Kategorie

| 💻 Software Dev | 🌐 Web | 💰 Yuanbao |
|:---|---:|:---:|
| 13 Skills | 2 Skills | 1 Skill |
| Debugging, TDD, Plans | VitePress, GitHub Pages | Gruppen-Management |
| Code-Review, Paketierung | Fan-Wiki (WWM) | @Mentions, Info |

---

> **Tipp:** Die wichtigsten Skills für den täglichen Gebrauch sind **systematic-debugging** (bei jedem Bug), **test-driven-development** (bei jeder neuen Funktion) und **writing-plans** (vor jeder Implementierung). Für Web-Projekte starte mit **vitepress-github-pages**.
