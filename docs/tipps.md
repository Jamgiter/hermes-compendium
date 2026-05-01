# Tipps & Tricks 🧠

Erfahrungen aus der Praxis mit Hermes Agent – gesammelt aus unzähligen Sessions.

---

## 🎯 Allgemein

### 1. Sei konkret
Hermes arbeitet am besten, wenn du genau sagst, was du willst. Statt "Mach mal" besser: "Erstelle eine VitePress-Seite mit Nav und Sidebar, deploye auf GitHub Pages".

### 2. Memory gezielt nutzen
Sag Hermes Dinge, die er sich merken soll:
> "Denk dran, ich benutze Manjaro und meine Projekte sind in ~/projects/"

Das speichert er als Memory und ruft es in jeder Session ab.

### 3. Skills sind deine Superkraft
Wenn Hermes eine Aufgabe gut gelöst hat (5+ Schritte, kniffliger Bug, spezieller Workflow):
> "Speicher das als Skill"

Dann kann er es beim nächsten Mal sofort abrufen.

### 4. Modell-Wechsel mitten in der Session
> `/model anthropic/claude-sonnet-4`

Wechselt das Modell ohne Session-Neustart. Nützlich wenn ein Modell bei bestimmten Aufgaben besser ist.

---

## ⚡ Hermes beschleunigen

### Session komprimieren
Wenn Hermes anfängt, Kontext zu vergessen:
> `/compress`

Das reduziert den Token-Verbrauch und schafft Platz.

### /fast Modus
> `/fast`

Priorisiert Geschwindigkeit – nützlich für einfache Aufgaben.

### Toolsets begrenzen
Nicht benötigte Tools deaktivieren spart Tokens:
```bash
hermes tools disable browser
hermes tools disable vision
```

---

## 🛠️ Praktische Workflows

### Git + Branch Protection umgehen (wenn nötig)
```bash
# enforce_admins kurz deaktivieren, pushen, reaktivieren
gh api repos/<user>/<repo>/branches/main/protection/enforce_admins -X DELETE
git push
gh api repos/<user>/<repo>/branches/main/protection/enforce_admins -X POST
```

### Schnell neuen Skill laden
> `/skill <name>`

Oder beim Start:
```bash
hermes -s wwm-compendium,flask-script-dashboard
```

### Cron-Job für regelmäßige Aufgaben
```bash
hermes cron create "0 9 * * *"    # Jeden Tag um 9 Uhr
hermes cron create "30m"           # Alle 30 Minuten
```

### Sub-Agenten für parallele Arbeit
```bash
# Im Chat einfach sagen:
"Lass parallel recherchieren: Agent A sucht nach Werten, Agent B nach Mechaniken"
```

### `/steer` – Agenten während der Arbeit lenken
Seit v0.11 kannst du einen laufenden Agenten **während seiner Aktion** umlenken:
```
/steer Vergiss den API-Teil, konzentrier dich aufs Frontend
```
Der Hinweis wird nach dem nächsten Tool-Call sichtbar – ohne die laufende Runde zu unterbrechen. Praktisch wenn der Agent in die falsche Richtung läuft.

---

## 🔌 Shell Hooks & Plugin-System

Seit v0.11 kannst du **Shell-Skripte als Lifecycle-Hooks** einbinden:

```bash
# ~/.hermes/config.yaml
hooks:
  pre_tool_call: ~/scripts/check-before.sh
  post_tool_call: ~/scripts/log-after.sh
  on_session_start: ~/scripts/startup.sh
```

Mögliche Hooks: `pre_tool_call`, `post_tool_call`, `on_session_start`, `on_session_end` uvm.

### Plugin-System (seit v0.11)
Plugins können eigene Slash-Commands, Tools, Dashboard-Tabs und Gateway-Plattformen mitbringen:

```bash
hermes plugins list         # Alle Plugins anzeigen
hermes plugins install <id> # Plugin installieren
```

**Bundled Plugins:** Spotify, Google Meet, Langfuse (Observability), Achievements

---


## 🚨 Fallstricke (aus Erfahrung)

### `&` in Kommandos
Das `&`-Zeichen wird vom Terminal-Tool als Backgrounding interpretiert – selbst in Quotes!
> ❌ `git commit -m "Housing & Bauen"` → Fehler
> ✅ `git commit -m "Housing und Bauen"`

### Server-Änderungen IMMER absprechen
Hermes fragt nicht von allein, ob er einen Server neustarten darf. **Sag explizit "frag mich vorher"** oder setz es in den Memory.

### WWM-Base-Path
Bei VitePress mit Custom Domain: `base` auf `'/'` setzen. Bei GitHub Pages ohne Custom Domain: `base: '/repo-name/'`.
Dieser Fehler hat schon mehrfach zu kaputter Formatierung geführt!

### Provider wechseln
Manchmal ist ein Modell überlastet. Einfach wechseln:
```bash
hermes model
```
Oder den Provider in der Config setzen.

---

## 🔍 Debugging

### Fehlerlogs ansehen
```bash
tail -50 ~/.hermes/logs/gateway.log
cat ~/.hermes/logs/gateway.log | grep -i error
```

### Config prüfen
```bash
hermes doctor         # Alles OK?
hermes config check   # Config-Fehler?
```

### Gateway neustarten
```bash
hermes gateway restart
```

### Session wieder aufnehmen
```bash
hermes --continue     # Letzte Session fortsetzen
hermes -r <id>        # Bestimmte Session
```

---

## 📦 Git & GitHub Pages

### Auto-Deploy bei Push
Jeder Push auf `main` triggert den GitHub Actions Workflow. Nach ~2 Minuten ist die Seite live.

### Build testen vor Push
```bash
npx vitepress build docs 2>&1 | tail -5
```

### gh CLI for Life
```bash
gh pr create --fill           # PR erstellen
gh workflow run deploy.yml    # Workflow manuell triggern
gh run list --limit 3         # Letzte Runs ansehen
```
