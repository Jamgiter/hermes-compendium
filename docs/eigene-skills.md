# Eigene Skills schreiben 🛠️

Hermes Agent Skills sind **wiederverwendbare Anleitungen**, die dem Agenten sagen, *wie* er bestimmte Aufgaben erledigen soll. Ein Skill ist eine `SKILL.md`-Datei mit YAML-Frontmatter und Markdown-Body. Wenn du einen Skill lädst (`/skill <name>`), bekommt der Agent sofort das gesamte Wissen und die Workflow-Schritte in seinen Kontext.

> **Anders als Memory**: Memory speichert *Fakten* („Der User nutzt Arch Linux"). Ein Skill speichert *Prozeduren* („So installiert man ein AUR-Paket").

---

## 📍 Zwei Arten von Skills

| Typ | Speicherort | Teilen | Erstellt mit |
|-----|------------|--------|-------------|
| **User-local** | `~/.hermes/skills/<kategorie>/<name>/SKILL.md` | Nur dein Rechner | `skill_manage(action='create')` |
| **In-repo** | `<hermes-repo>/skills/<kategorie>/<name>/SKILL.md` | Wird mit Hermes ausgeliefert | `write_file` + Git-Commit |

**Faustregel**: Persönliche Helferlein → user-local. Etwas, das anderen Hermes-Nutzern auch nützt → in-repo (Pull-Request ans [Hermes-Repo](https://github.com/NousResearch/hermes-agent)).

---

## 📄 SKILL.md – Aufbau

Jeder Skill besteht aus zwei Teilen:

### 1. YAML-Frontmatter (zwingend)

Das Frontmatter steht **ganz am Anfang** der Datei – keine Leerzeile davor! – und ist von `---` umschlossen:

```yaml
---
name: mein-skill-name
description: Use when <Auslöser>. <Einzeiler was er macht>.
version: 1.0.0
author: Dein Name
license: MIT
metadata:
  hermes:
    tags: [kurz, treffend, tags]
    related_skills: [anderer-skill, noch-einer]
---
```

| Feld | Pflicht | Max. Länge | Hinweis |
|------|---------|:----------:|---------|
| `name` | ✅ | 64 Zeichen | Kleinbuchstaben, Bindestriche |
| `description` | ✅ | 1024 Zeichen | Beginnt mit „Use when …" |
| `version` | ❌ | – | Empfohlen: `1.0.0` |
| `author` | ❌ | – | „Hermes Agent" oder dein Name |
| `license` | ❌ | – | `MIT` (Open Source) |
| `metadata.hermes.tags` | ❌ | – | 3–5 Schlagwörter |
| `metadata.hermes.related_skills` | ❌ | – | Verweise auf andere Skills |

> ⚠️ **Wichtig**: Der Validator prüft `content.startswith("---")`. Schon ein Leerzeichen oder BOM davor → Fehler!

### 2. Markdown-Body

Nach dem schließenden `---` folgt der eigentliche Inhalt. Empfohlene Struktur:

```markdown
# Skill-Titel

## Overview
1–2 Absätze: Was macht dieser Skill? Warum existiert er?

## When to Use
- Aufzählung der konkreten Auslöser
- „Nicht verwenden für:"-Gegenbeispiele

## (Themenspezifische Abschnitte)
- Schnellreferenz-Tabellen
- Exakte Kommandos in Codeblöcken
- Hermes-spezifische Hinweise

## Common Pitfalls
Nummerierte Liste typischer Fehler und deren Lösungen.

## Verification Checklist
- [ ] Abhakbare Prüfpunkte

## One-Shot Recipes (optional)
Konkrete Szenarien → Kommando-Sequenzen.
```

**Zielgröße: 8.000–15.000 Zeichen.** Alles über 20.000 sollte in `references/*.md` ausgelagert werden.

---

## 🗂️ Kategorien

Skills werden in Kategorien organisiert. Bestehende Kategorien:

| Kategorie | Inhalt |
|-----------|--------|
| `autonomous-ai-agents` | Claude Code, Codex, OpenCode delegieren |
| `creative` | ASCII, Excalidraw, p5.js, Pixel-Art, Design |
| `data-science` | Jupyter, Datenanalyse |
| `devops` | Webhooks, Deployment |
| `email` | IMAP/SMTP |
| `gaming` | Minecraft, OpenSim, Pokémon |
| `github` | PRs, Issues, Repos, CI/CD |
| `mcp` | MCP-Client-Konfiguration |
| `media` | YouTube, Spotify, GIFs |
| `mlops` (+ Subkategorien) | Training, Inference, Evaluation |
| `note-taking` | Obsidian |
| `productivity` | Airtable, Google Workspace, Notion |
| `research` | arXiv, Blogwatcher, Polymarket |
| `smart-home` | Philips Hue |
| `social-media` | X/Twitter |
| `software-development` | Debugging, TDD, Plans, Code-Review |

Neue Kategorien nur mit gutem Grund – an bestehende anhängen ist besser.

---

## 🎮 Skills verwalten (Tool: `skill_manage`)

Hermes hat ein eingebautes Tool zum Anlegen, Bearbeiten und Löschen von **user-localen** Skills:

### Neu anlegen

```
skill_manage(action='create', name='mein-skill', content='...', category='software-development')
```

Das erzeugt `~/.hermes/skills/software-development/mein-skill/SKILL.md`.

### Bearbeiten

Kleine Änderungen mit `patch` (Find-and-Replace):

```
skill_manage(action='patch', name='mein-skill', old_string='alter Text', new_string='neuer Text')
```

Komplette Überschreibung mit `edit`:

```
skill_manage(action='edit', name='mein-skill', content='...')
```

### Löschen

```
skill_manage(action='delete', name='mein-skill')
```

### Zusatzdateien

Skills können Referenzen, Templates und Skripte enthalten:

```
skill_manage(action='write_file', name='mein-skill', file_path='references/api-endpoints.md', file_content='...')
skill_manage(action='remove_file', name='mein-skill', file_path='references/alt.md')
```

Erlaubte Unterverzeichnisse: `references/`, `templates/`, `scripts/`, `assets/`.

> ⚠️ **`skill_manage` erstellt NUR user-locale Skills!** Für in-repo Skills → `write_file` ins Hermes-Repo und Git-Commit.

---

## ✍️ Praxis: Einen guten Skill schreiben

### Beispiel: Minimal-Skill

```yaml
---
name: hallo-welt
description: Use when the user asks for a greeting demo. Prints a hello message.
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [demo, greeting, tutorial]
    related_skills: []
---
```

```markdown
# Hallo Welt Demo

## Overview
Demonstriert den Hermes-Skill-Mechanismus. Lädt und zeigt eine Willkommensnachricht.

## When to Use
- User fragt nach einer Demo oder Einführung in Skills
- Zum Testen, ob der Skill-Loader funktioniert

## Verwendung
Wenn dieser Skill geladen ist, antworte mit einer freundlichen Begrüßung
und erkläre kurz, was Skills sind.

## Common Pitfalls
- Der Skill muss erst mit `/skill hallo-welt` geladen werden
- Nach dem Erstellen wird er erst in der *nächsten* Session sichtbar
```

### Beispiel: Nützlicher Skill (Auszug)

```yaml
---
name: docker-cleanup
description: "Use when cleaning up Docker resources. Removes unused containers, images, volumes, and networks."
version: 1.0.0
author: Hermes Agent
license: MIT
metadata:
  hermes:
    tags: [docker, cleanup, devops]
    related_skills: []
---
```

```markdown
# Docker Cleanup

## Overview
Entfernt ungenutzte Docker-Ressourcen, um Speicher freizugeben.

## When to Use
- User sagt „Docker-Platte voll", „Speicher aufräumen", „Disk cleanup"
- `df -h` zeigt hohe Auslastung unter /var/lib/docker

## Cleanup-Strategien

### 1. Sanft (nur hängengebliebene)
```bash
docker container prune -f
docker image prune -f
docker network prune -f
```

### 2. Gründlich (alles Ungenutzte)
```bash
docker system prune -a -f --volumes
```

### 3. Gezielt nach Alter
```bash
docker image prune -a --filter "until=24h"
```

## Common Pitfalls
1. **`docker system prune -a` löscht ALLE ungenutzten Images** – auch die, die man noch braucht. Vorher mit `docker images` checken.
2. **Volumes werden nur mit `--volumes` gelöscht** – ohne Flag bleiben sie erhalten (Sicherheitsnetz).
3. **`docker container prune` löscht keine laufenden Container** – nur gestoppte.

## Verification Checklist
- [ ] `df -h /var/lib/docker` zeigt freien Speicher
- [ ] `docker ps -a` zeigt nur aktive Container
- [ ] `docker images` enthält keine `<none>`-Einträge
```

---

## 🔍 Validierung

Nach dem Erstellen kannst du den Skill selbst prüfen:

```python
import yaml, re
content = open("SKILL.md").read()
assert content.startswith("---"), "Muss mit --- beginnen"
m = re.search(r'\n---\s*\n', content[3:])
fm = yaml.safe_load(content[3:m.start()+3])
assert "name" in fm and "description" in fm
assert len(fm["description"]) <= 1024, "Beschreibung zu lang"
```

Oder einfach den Skill mit `skill_view(name='dein-skill')` laden – Fehler im Frontmatter zeigen sich sofort.

---

## 🧠 Wann ein Skill sinnvoll ist

**👍 Ja, Skill erstellen wenn:**

- Du eine Aufgabe 2×+ manuell machen musstest
- Der Workflow über 5+ Tool-Aufrufe geht
- Es spezielle Fallstricke gibt, die man sich merken sollte
- Die Lösung nicht trivial ist (API-Endpunkte, Config-Workarounds, OS-Spezifika)
- Du den Agenten korrigiert hast und die gelernte Lektion bewahren willst

**👎 Kein Skill wenn:**

- Es ein One-Liner ist (`df -h` als Skill wäre Overkill)
- Der Workflow nur aus Standard-Tools besteht („Öffne Browser und navigiere zu X")
- Es ein Memory-Fakt ist (Nutzer-Präferenzen gehören ins Memory, nicht in Skills)
- Der Vorgang sich nie wiederholt

---

## ⚠️ Häufige Fehler

| Problem | Lösung |
|---------|--------|
| **Frontmatter beginnt nicht mit `---`** (Leerzeichen/BOM davor) | Datei neu schreiben, kein Leerzeichen vor `---` |
| **`skill_view()` findet den neuen Skill nicht** | Der Loader wird nur beim Session-Start initialisiert. Neu starten oder `skills_list` probieren. |
| **User-local vs. In-repo verwechselt** | `skill_manage(action='create')` → user-local. `write_file` → in-repo. |
| **Skill zu lang (>20k Zeichen)** | In `references/*.md` auslagern und im Body referenzieren |
| **`related_skills` verweist auf user-localen Skill** | Funktioniert nur auf deinem Rechner. Für Public-Skills nur in-repo-Links nutzen. |
| **Skill-Beschreibung zu generisch** | Statt „Debug X" lieber „Use when debugging X. Starts a pdb session with debugpy." |
| **Kein `version`/`author`/`license`** | Vom Validator nicht erzwungen, aber ohne sieht der Skill halbfertig aus |

---

## 📚 Best Practices

1. **Trigger-basierte Beschreibung** – „Use when …" sagt dem Agenten sofort, wann der Skill gehört wird
2. **Exakte Kommandos** – Keine Platzhalter wie `<dein-pfad>`, sondern konkrete Befehle mit Erklärungen
3. **Pitfalls dokumentieren** – Die wertvollsten Skills sind die, die Fehler verhindern
4. **Am Ziel-User orientieren** – Muss ein Anfänger ihn verstehen? Oder reicht Fachjargon?
5. **Nach Benutzung patchen** – Wenn der Skill beim Ausführen Lücken zeigt, sofort `skill_manage(action='patch')`
6. **Referenzen auslagern** – Ab 15k Zeichen: `references/api.md`, `templates/config.yaml`, `scripts/validate.py`
7. **Nach jedem Edit committen** – In-repo Skills sind Quellcode, keine flüchtigen Daten

---

## 🚀 Workflow: Skill erstellen & verbessern

```
1. Problem erkannt
   ↓
2. Skill anlegen → skill_manage(action='create')
   ↓
3. Skill laden → /skill name-oder skills_list
   ↓
4. Ausführen → Agent nutzt den Skill
   ↓
5. Problem gefunden → skill_manage(action='patch')
   ↓
6. Wieder verwenden → Skill wird immer besser
```

---

## 📖 Weiterführendes

- [`hermes-agent-skill-authoring` Skill](/skills) – Noch detailliertere technische Referenz
- [Skills-Übersicht](/skills) – Alle verfügbaren Skills als Inspiration
- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent) – In-repo Skills unter `skills/`
