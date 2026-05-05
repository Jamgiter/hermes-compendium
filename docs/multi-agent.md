# Multi-Agent Orchestrierung 🧠🤖

<div class="badges" style="display:flex;gap:8px;flex-wrap:wrap;margin:1rem 0;">
  <span style="background:#22c55e;color:#fff;padding:2px 10px;border-radius:12px;font-size:0.8rem">✅ Verfügbar</span>
  <span style="background:#6366f1;color:#fff;padding:2px 10px;border-radius:12px;font-size:0.8rem">delegation</span>
  <span style="background:#f59e0b;color:#fff;padding:2px 10px;border-radius:12px;font-size:0.8rem">parallel</span>
</div>

Hermes kann **mehrere Subagenten gleichzeitig starten** – jeder mit eigenem Terminal, eigenem Kontext, völlig isoliert. Perfekt für parallele Recherche, unabhängige Code-Aufgaben oder Multi-Worker-Workflows.

> **Live-Demo:** In dieser Session habe ich erfolgreich **6 parallele Subagenten** in ~9 Sekunden gestartet – alle unabhängig, alle fertig, Ergebnisse eingesammelt.

---

## 📋 Auf einen Blick

| Feature | Status |
|---------|:------:|
|| Parallele Subagenten | ✅ bis 6+ |
| Orchestrator-Rolle | ✅ Agents die spawnen können |
| File-Coordination | ✅ geteilter Zustand ohne Konflikte |
| Isolierter Kontext | ✅ eigenes Terminal |
| Isolierte Tools | ✅ konfigurierbar |
| Batch-Modus | ✅ Tasks-Array |
| Hintergrund-Prozesse | ✅ via `terminal()` / `cronjob` |
| Fremde AI-Agents | ✅ Claude Code, Codex, OpenCode |

---

## 🔧 Grundlagen

### `delegate_task` – Das Herzstück

Das Tool `delegate_task` startet Subagenten in **zwei Modi**:

**1. Single Task** – ein Ziel mit Kontext:
```
delegate_task(goal="Baue eine FastAPI Auth API", context="Projekt in ~/myapp/")
```

**2. Batch (parallel)** – mehrere Tasks gleichzeitig:
```
delegate_task(tasks=[
  {goal: "Recherchiere GRPO Paper", context: "…"},
  {goal: "Schreibe Test für auth.py", context: "…"},
  {goal: "Update README", context: "…"},
])
```

Alle Batch-Tasks laufen **gleichzeitig** – nicht nacheinander. Die Gesamtzeit = Zeit des **langsamsten** Tasks.

### Subagent-Lebenszyklus

```
Du ──> delegate_task ──> Subagent #1 (eigenes Terminal, eigener Kontext)
                       ──> Subagent #2 (eigenes Terminal, eigener Kontext)
                       ──> Subagent #3 (…)
                          ↓
              Alle fertig? → Ergebnisse gesammelt → Zusammenfassung an dich
```

---

## ⚙️ Konfiguration

### `max_concurrent_children`

Legt fest, wie viele Subagenten **gleichzeitig** laufen dürfen.

```bash
# Aktuell gesetzt: 6
hermes config set delegation.max_concurrent_children 6

# Höher? Kein Limit – nur dein RAM/API-Limit zählt
hermes config set delegation.max_concurrent_children 12

# Orchestrator-Tiefe (max_spawn_depth)
hermes config set delegation.max_spawn_depth 2  # 1 = flach (Default), 2+ = verschachtelt

# Timeout pro Subagent
hermes config set delegation.child_timeout_seconds 600  # Default seit v0.12

# ⚠️ Config-Änderung (max_concurrent_children/max_spawn_depth) braucht NEUSTART
# Nicht nur /reset – exit und neu starten!
```

**Standard:** `max_concurrent_children: 3`, `max_spawn_depth: 1`  
**Aktuell (diese Umgebung):** 6 / 2  
**`child_timeout_seconds`:** 600 (Default seit v0.12.0)  
**`max_spawn_depth`:** 1 = nur eine Ebene (Subagenten können nicht weiter delegieren). 2+ = verschachtelte Delegation erlaubt. Default ist flach.

### Toolsets pro Subagent

Jeder Subagent kann eigene Toolsets bekommen – so sparst du Tokens:

```python
delegate_task(
  tasks=[{goal: "…", toolsets: ["terminal", "file"]}]
)
```

Verfügbare Toolsets: `terminal`, `file`, `web`, `browser`, `search`, `vision`, `cronjob`, `skills` u.v.m.

---

## 🆚 Wann was nutzen?

| | `delegate_task` | `cronjob` | `terminal(hermes ...)` | tmux-Spawn |
|--|:--:|:--:|:--:|:--:|
| **Parallelität** | ✅ ja | ❌ einzeln | ✅ ja | ✅ ja |
| **Dauer** | Minuten | Stunden/Tage | Stunden/Tage | unbegrenzt |
| **Isolation** | hoch | komplett | komplett | komplett |
| **Interaktiv** | ❌ | ❌ | ❌ | ✅ |
| **Tool-Zugriff** | Teilmenge | voll | voll | voll |
| **Ergebnis-Rückgabe** | ✅ direkt | ✅ Delivery | per Log | manuell |
| **Ideal für** | schnelle Parallel-Tasks | tägl. Reports | Langzeit-Missionen | interaktive Agenten |

### Faustregel

- **Schnelle, unabhängige Subtasks** → `delegate_task` (weniger Overhead)
- **Regelmäßige Aufgaben** → `cronjob` (automatisch, wiederkehrend)
- **Stundenlange Missionen** → `hermes chat -q "..."` im terminal (Hintergrund)
- **Interaktive Multi-Agent-Swarms** → tmux (volle Kontrolle)

---

## 🎯 Praxisbeispiele

### Beispiel 1: Parallel recherchieren

```python
delegate_task(tasks=[
  {goal: "Finde die 3 besten Open-Source-Tools für N-Body-Simulation", context: "Python-Projekt"},
  {goal: "Recherchiere MPI-Optimierungen für numba", context: ""},
  {goal: "Suche Beispiele für 3D-Visualisierung mit Bevy", context: "Rust-Projekt"},
])
// Alle 3 laufen parallel → Ergebnisse in ~10s statt nacheinander in ~30s
```

### Beispiel 2: Multi-Repo-Wartung

```python
delegate_task(tasks=[
  {goal: "Prüfe ausstehende Updates in ~/projects/jas2-web/", toolsets: ["terminal"]},
  {goal: "Prüfe ausstehende Updates in ~/projects/opensim-npc/", toolsets: ["terminal"]},
  {goal: "Prüfe ausstehende Updates in ~/projects/universum/", toolsets: ["terminal"]},
])
// Drei Projekte gleichzeitig scannen
```

### Beispiel 3: Code + Docs + Tests

```python
delegate_task(tasks=[
  {goal: "Implementiere User-Auth-Endpunkte (Login/Register/Logout)", context: "FastAPI in ~/app/"},
  {goal: "Schreibe API-Dokumentation für die User-Auth-Endpunkte", context: ""},
  {goal: "Schreibe pytest-Tests für die Auth-Routes", context: "~/app/tests/"},
])
// Entwickeln + Dokumentieren + Testen parallel
```

---

## 🚀 Advanced: Vom Subagent zum Swarm

Der @outsource_-Tweet (Hermes-Workspace.com) zeigt, wohin die Reise geht:

```
Conductor-Agent ──> Worker #1 (Feature A)
                ──> Worker #2 (Feature B)
                ──> Worker #3 (Tests)
                ──> Worker #4 (Docs)
                ──> Worker #5 (Review)
                ──> Worker #6–12 (…)
```

Hermes Workspace bietet ein **Web-UI-Dashboard** für diesen Swarm – Conductor orchestriert, Workers arbeiten, du siehst den Status auf einen Blick.

### Was Hermes heute schon kann:

| Ansatz | Beschreibung |
|--------|-------------|
| **delegate_task** | Bis 6+ parallele Subagenten (diese Session live getestet) |
| **Cron-Swarms** | `cronjob` mit regelmäßigen Batch-Tasks |
| **Worktree-Modus** | `hermes -w` spawnen für parallele Git-Arbeit ohne Konflikte |
| **tmux-Swarms** | Mehrere interaktive Hermes-Sessions in tmux-Panels |

---

## 🔌 MCP – Model Context Protocol

MCP ist ein offener Standard, um Hermes mit **externen Werkzeugen** zu erweitern – wie USB-C für AI-Tools.

📄 **[Ausführlicher MCP-Guide →](/hermes-compendium/mcp)**

| | `delegate_task` | MCP |
|--|:--:|:--:|
| **Was?** | Parallele Subagenten | Externe Tool-Bibliothek |
| **Lebensdauer** | Nur während meines Turns | **Dauerhafte Verbindung** |
| **Eigenes Modell?** | Optional (z.B. Claude) | Nein, ich rufe die Tools |
| **Isolation** | Völlig unabhängig | Läuft in meinem Prozess |
| **Ideal für** | Komplexe Parallelarbeit | Spezial-Tools (DB, GitHub, Browser) |

Mehr zu Installation, Konfiguration und Sicherheit auf der **[MCP-Seite](/hermes-compendium/mcp)**.

### Sicherheit

MCP-Server bekommen **keine** deiner API-Keys – nur explizit via `env:` gesetzte Variablen. Credential-ähnliche Muster in Fehlermeldungen werden automatisch geschwärzt.

### Aktuelle Installation (diese Umgebung)

```yaml
# ~/.hermes/config.yaml
mcp_servers:
  puppeteer:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-puppeteer"]
    timeout: 60
    connect_timeout: 30
```

✅ `mcp`-Paket installiert · Chromium vorhanden · Nach `/reset` aktiv

---

## ⚠️ Wichtige Hinweise

| Problem | Lösung |
|---------|--------|
| Subagent braucht User-Input | Geht nicht – `clarify` ist blockiert. Alle Infos in `context` geben |
| Sprache | Subagenten antworten default Englisch. `context` mit "Antworte auf Deutsch" versehen |
| Subagent lügt | Subagenten berichten selbst. Bei Datei-Operationen: Rückgabewert prüfen |
| RAM-Limit | Zu viele Subagenten → OOM. Bei 12+ RAM im Blick behalten |
| API-Rate-Limits | Viele parallele Calls können Raten-Limits triggern |

### Besonderheiten

- **Orchestrator-Rolle:** Subagenten können per role=orchestrator selbst weiter delegieren -> verschachtelte Worker-Baeume moeglich. Die Tiefe wird via `delegation.max_spawn_depth` gesteuert (Default 1 = keine Verschachtelung)
- **File-Coordination:** Seit v0.11 teilen sich parallele Subagenten einen koordinierten Dateisystem-Zustand - sie ueberschreiben sich nicht gegenseitig. Ideal fuer parallele Edits an verschiedenen Dateien im selben Projekt.
- **ACP-Spawn:** Subagenten koennen als Claude Code / Codex gestartet werden (`acp_command="claude"`)
- **Kein Memory:** Subagenten haben **keinen Zugriff** auf dein Memory - alles via `context` uebergeben
- **Timeout:** Seit v0.12.0 ist `child_timeout_seconds` standardmaessig 600s (vorher kuerzer). Bei Timeout mit 0 API-Calls gibt es einen Diagnose-Dump.

---

## 🔗 Verwandte Seiten

- [Eigene Skills schreiben](/eigene-skills) – Arbeiteffekte als Skills speichern
- [Autonomous AI Agents](/skills/autonomous-ai-agents) – Claude Code, Codex & Co.
- [MCP – Model Context Protocol](#🔌-mcp--model-context-protocol) – Externe Tools anbinden
- [Tipps & Tricks](/tipps) – Mehr Hermes-Praxis
- [Konfiguration](/konfiguration) – Alle Config-Optionen
