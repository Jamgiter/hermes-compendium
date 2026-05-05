# ⏰ Cron-Jobs

Hermes kann **zeitgesteuerte Aufgaben** ausführen – auch wenn du nicht da bist. Ein Cron-Job startet eine vollständige Hermes-Session zu einem festgelegten Zeitpunkt.

---

## Grundlagen

### Job erstellen

```bash
hermes cron create "30m"                  # Alle 30 Minuten
hermes cron create "0 9 * * *"            # Jeden Tag um 9 Uhr
hermes cron create "2026-05-15T08:00:00"  # Einmalig am 15. Mai
```

### Parameter

| Parameter | Beschreibung |
|-----------|-------------|
| `"30m"` / `"2h"` / `"90m"` | Relativ – alle X Minuten/Stunden |
| `"0 9 * * *"` | **Cron-Expression** – Standard-Syntax |
| `"2026-05-15T08:00:00"` | **ISO-Timestamp** – Einmalig |
| `--name "..."` | Name für den Job |
| `--repeat N` | Auf N Wiederholungen begrenzen |
| `--skill "name"` | Skill(s) laden (mehrere via array) |
| `--workdir /pfad` | Im Projektverzeichnis arbeiten |
| `--context-from JOB_ID` | Output eines anderen Jobs als Kontext nutzen |
| `--model "model" --provider "provider"` | Anderes Modell/Provider für diesen Job |
| `--deliver "telegram"` | Ergebnis an Plattform senden |
| `--no-agent` | Reines Script (ohne LLM, nur stdout) |

### Cron-Expression – Beispiele

```
* * * * *      → Jede Minute
*/5 * * * *    → Alle 5 Minuten
0 * * * *      → Jede Stunde
0 9 * * *      → Täglich um 9:00 Uhr
0 9 * * 1-5    → Mo–Fr um 9:00 Uhr
0 0 1 * *      → Am 1. jedes Monats um 0:00 Uhr
0 */2 * * *    → Alle 2 Stunden
30 8 * * 0     → Sonntags um 8:30 Uhr
```

---

## Job-Verwaltung

```bash
hermes cron list              # Alle Jobs anzeigen
hermes cron info <id>         # Details zu einem Job
hermes cron pause <id>        # Job pausieren (behält Plan bei)
hermes cron resume <id>       # Job fortsetzen
hermes cron remove <id>       # Job löschen
hermes cron run <id>          # Job sofort ausführen (einmalig)
```

### Ausgabe von `hermes cron list`

```
🕐 Aktive Cron-Jobs:

  ⏰ daily-digest       Jeden Tag 09:00  → Telegram  [aktiv]
  ⏰ disk-check         Alle 30 Minuten  → lokal     [pausiert]
  ⏰ weekly-report      Jeden Sonntag 10:00 → Telegram [aktiv, 1× verbleibend]
```

---

## Fortgeschrittene Features

### Skills in Cron-Jobs laden

```bash
hermes cron create "0 9 * * *" \
  --name "BTC-Report" \
  --skill "crypto-trading-dashboard" \
  --deliver "telegram"
```

Der Skill wird vor der Ausführung geladen – perfekt für spezialisierte Aufgaben.

### Workdir (Projekt-Kontext)

```bash
hermes cron create "0 10 * * *" \
  --name "JAS2-Check" \
  --workdir ~/projects/jas2-web \
  --prompt "Prüfe ob der Server läuft"
```

- Setzt das Arbeitsverzeichnis für Terminal/File-Tools
- Lädt `AGENTS.md` / `CLAUDE.md` aus dem Projekt (falls vorhanden)
- Jobs mit `--workdir` laufen sequentiell (isoliert)

### Job-Verkettung (`--context-from`)

```bash
# Job A: Daten sammeln
hermes cron create "*/10 * * * *" \
  --name "data-collector" \
  --prompt "Rufe BTC-Kurs ab und speichere"

# Job B: Aus Job A füttern (läuft 5 Min später)
hermes cron create "5-59/10 * * * *" \
  --name "data-analyzer" \
  --context-from JOB_ID_A \
  --prompt "Analysiere die gesammelten Daten"
```

Der Output von Job A wird als Kontext in den Prompt von Job B injiziert.

### Modell/Provider pro Job

```bash
# Teuren Job mit günstigem Modell
hermes cron create "0 9 * * *" \
  --model "deepseek/deepseek-chat" \
  --provider "openrouter" \
  --prompt "Erstelle täglichen Kurzreport"
```

### One-Shot-Jobs

```bash
# Einmalig (ohne repeat) – löscht sich nach Ausführung selbst
hermes cron create "2026-05-20T12:00:00" \
  --name "release-ticker" \
  --prompt "Erinnere ans Hermes-Release"
```

### Reiner Script-Modus (`--no-agent`)

Ohne LLM – das Script läuft, sein stdout wird direkt ausgeliefert:

```bash
hermes cron create "30m" \
  --name "disk-watchdog" \
  --script ~/.hermes/scripts/disk-check.sh \
  --no-agent \
  --deliver "telegram"
```

Perfekt für:
- Überwachungs-Scripts (Festplatte, CPU, GPU)
- API-Poller mit festem Output-Format
- Heartbeats und Status-Checks

> **Wichtig:** Bei `--no-agent` gibt das Script **nur bei nicht-leerem stdout** eine Nachricht aus. Bei leerem stdout läuft es still – ideal für "nur bei Problem melden"-Watchdogs.

---

## Anwendungsbeispiele

### 📰 Täglicher News-Report

```bash
hermes cron create "0 8 * * *" \
  --name "daily-news" \
  --prompt "Fasse die wichtigsten Tech-News der letzten 24 Stunden zusammen" \
  --deliver "telegram"
```

### 💾 Disk-Space-Watchdog

```bash
cat > ~/.hermes/scripts/disk-check.sh << 'EOF'
#!/bin/bash
used=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
if [ "$used" -gt 90 ]; then
  echo "⚠️ Festplatte zu $used% voll! Bitte aufräumen."
fi
EOF
chmod +x ~/.hermes/scripts/disk-check.sh

hermes cron create "30m" \
  --name "disk-check" \
  --script ~/.hermes/scripts/disk-check.sh \
  --no-agent \
  --deliver "telegram"
```

### 📊 Täglicher JAS2-Simulations-Check

```bash
hermes cron create "0 9 * * *" \
  --name "sim-status" \
  --skill "flask-script-dashboard" \
  --workdir ~/projects/jas2-web \
  --prompt "Prüfe den Status der JAS2-Simulation und ob der Dashboard-Server läuft"
```

---

## Einschränkungen & Tipps

- **Cron-Jobs laufen autonom** – Keine Rückfragen möglich. Der Prompt muss alles enthalten.
- **Keine rekursiven Cron-Jobs** – Ein Cron-Job kann keine weiteren Cron-Jobs erstellen (Sicherheit).
- **Skills werden vorab geladen** – Der Skill muss den Prompt als Task-Instruction verstehen.
- **Modell-Override** – Einmal gesetzt, bleibt der Provider beim Erstellen "eingefroren", damit der Job stabil bleibt.
- **Output-Limit** – Lange Outputs werden gekürzt. Für große Reports lieber eine Datei schreiben.
- **Logs prüfen** – Fehlgeschlagene Cron-Jobs findest du in `~/.hermes/logs/errors.log`.

```bash
# Cron-Logs anzeigen
hermes logs --cron
```
