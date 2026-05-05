# 🧠 Memory & Gedächtnis

Das **Memory** ist Hermes' Langzeitgedächtnis – Fakten, die über Sessions hinweg erhalten bleiben. Sag ihm einmal etwas, und er merkt es sich für immer.

---

## Wie funktioniert Memory?

Memory wird bei **jedem Gesprächsstart** automatisch geladen und in den System-Prompt injiziert. Hermes sieht also sofort, was er über dich und deine Umgebung weiß – ohne dass du dich wiederholen musst.

```yaml
# Beispiel: Was Hermes zu Sessionsbeginn sieht
USER PROFILE:
- Bevorzugt DeepSeek als Modell
- Arbeitet an N-Body-Simulationen (JAS2)
- Kein sudo auf dem System

MEMORY (Agent-Notizen):
- ComfyUI benötigt HSA_OVERRIDE_GFX_VERSION=10.3.0
- Projekte liegen in ~/projects/
```

## Zwei Ziele

| Ziel | Zweck | Beispiel |
|------|-------|---------|
| **🧑 User** | Wer du bist – Name, Rolle, Vorlieben, Kommunikationsstil | `"User bevorzugt kurze, präzise Antworten"` |
| **📝 Memory** | Deine Notizen – Umgebungsfakten, Projekt-Conventions, Tool-Erfahrungen | `"HSA_OVERRIDE_GFX_VERSION=10.3.0 für ROCm nötig"` |

---

## Wann speichert Hermes etwas?

Hermes speichert **proaktiv** – ohne dass du es sagen musst:

### ✅ Speichern (erwünscht)

- **Korrekturen** – "Nein, ich nutze Firefox, nicht Chrome" → merkt er sich
- **Präferenzen** – "Ich mag lieber relative Pfade" → bleibt dauerhaft
- **Umgebungsfakten** – "Dieser Rechner hat eine AMD GPU" → für künftige Sessions
- **Projekt-Conventions** – "Das Repo nutzt pytest" → nie wieder nachfragen
- **Tool-Quirks** – "Hier hilft `--mca btl sm,self` bei MPI" → gleich verfügbar

### ❌ Nicht speichern

- **Task-Fortschritt** – "Ich habe gerade Datei X bearbeitet" → das ist Session-Kontext
- **Session-Outcomes** – "Build war erfolgreich" → gehört in die Session-Historie
- **Temporäre TODOs** – "Als nächstes muss ich Y machen" → vergänglich
- **Offensichtliches** – "Ich bin ein KI-Assistent" → unnötig

> **Faustregel:** Alles, was du beim nächsten Login nicht wiederholen willst → Memory. Alles, was nur für die aktuelle Aufgabe relevant ist → Session-Kontext.

---

## Memory verwalten

### Automatisch (Hermes entscheidet)

Hermes speichert von selbst, wenn er relevante und stabile Fakten entdeckt. Nach Korrekturen, nach komplexen Tasks (5+ Tool-Calls), und wenn du etwas explizit erwähnst ("Denk dran…").

### Manuell (du sagst es)

```
"Denk dran, mein Projekt liegt unter ~/projects/"
"Merke: Ich nutze DeepSeek als Standard-Modell"
"Vergiss das mit dem alten Pfad wieder"
```

Oder per Slash-Befehl:

| Befehl | Wirkung |
|--------|---------|
| `/memory list` | Zeigt alle aktuellen Memory-Einträge |
| `/memory remove "Stichwort"` | Löscht einen Eintrag |
| `/memory clear` | Leert das gesamte Memory (Vorsicht!) |

### Memory-Einträge direkt ansehen

```bash
# Alle Memory-Einträge anzeigen
cat ~/.hermes/state.db | python3 -c "
import sqlite3, json
db = sqlite3.connect('/home/USER/.hermes/state.db')
for row in db.execute('SELECT target, content FROM memory ORDER BY target'):
    print(f'[{row[0]}] {row[1][:120]}')
"
```

> **Hinweis:** Der genaue Pfad der Memory-Datenbank variiert je nach Profil (`~/.hermes/` vs `~/.hermes/profiles/<name>/`).

---

## Memory Provider (Pluggable)

Seit **v0.7.0** ist das Memory-System erweiterbar. Drittanbieter können eigene Memory-Backends als Plugin einbinden:

| Provider | Beschreibung |
|----------|-------------|
| **Standard (SQLite)** | Eingebaut – speichert Memory lokal in `state.db` |
| **Honcho** | KI-gestütztes Memory mit semantischer Suche |
| **Mem0** | Self-Improving Memory mit automatischer Konsolidierung |
| **Supermemory** | Cloud-basiertes Memory für mehrere Geräte |
| **Eigene Provider** | Einfaches ABC-Interface → `~/.hermes/plugins/` |

### Provider wechseln

```yaml
# config.yaml
memory:
  memory_enabled: true
  provider: honcho     # oder: mem0, supermemory, default (SQLite)
  # providerspezifische Config
  honcho_api_key: "sk-..."
```

---

## Best Practices

### 👍 Gut

- **Kompakt halten** – Ein Satz pro Fakt. "Nutzt pytest mit xdist" statt "Wenn ich Tests ausführe, dann mit pytest -n 4"
- **Präferenzen zuerst** – Was du magst/nicht magst, ist das Wertvollste
- **Umgebungsfakten** – OS, Tools, Pfade, Konventionen
- **Nach Korrekturen speichern** – "Eigentlich ist es anders" → wichtigster Lernmoment

### 👎 Schlecht

- **Task-Status** – "Bin bei Schritt 3 von 5" → nächste Session irrelevant
- **Ausführliche Anleitungen** – Gehören in Skills, nicht ins Memory
- **Widersprüchliche Einträge** – "Nutzt Python 3.11" + "Python 3.12" → verwirrt
- **Veraltete Infos** – "Alter Rechner: RX 6600 XT" nach Umstieg → aktiv löschen

---

## Memory vs Skills

| | Memory | Skills |
|---|---|---|
| **Inhalt** | Kurze Fakten, Präferenzen, Conventions | Ausführliche Workflows, Code, Anleitungen |
| **Größe** | Wenige Sätze (max ~4000 Zeichen) | Beliebig (ganze Dateien) |
| **Injektion** | Jeder Turn (im System-Prompt) | Nur bei Bedarf (per `skill_view`) |
| **Lebensdauer** | Dauerhaft, bis gelöscht | Dauerhaft, bis geändert |
| **Wartung** | Automatisch (Hermes) + manuell | Manuell (oder Curator ab v0.12) |

> **Faustregel:** Memory = "Der User mag Python 3.13". Skill = "So richtest du ein Flask-Projekt mit Python 3.13 ein."

---

## Speicherbegrenzung

Das Memory ist auf etwa **4000 Zeichen** (~1000 Tokens) begrenzt. Bei Überlauf wird Hermes ältere/unwichtigere Einträge automatisch zusammenfassen oder entfernen.

**Tipp:** Wenn dein Memory voll ist, prüfe mit `/memory list`, welche Einträge veraltet sind, und lösche sie gezielt.
