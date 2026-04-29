# Autonomous AI Agents 🚀

<div style="display: flex; flex-wrap: wrap; gap: 12px; margin: 1.5rem 0;">

<div style="flex: 1; min-width: 160px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🧑‍💻</div>
<strong>claude-code</strong><br>
<small style="color: var(--vp-c-text-2);">Anthropic Coding Agent</small>
</div>

<div style="flex: 1; min-width: 160px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🤖</div>
<strong>codex</strong><br>
<small style="color: var(--vp-c-text-2);">OpenAI Codex CLI</small>
</div>

<div style="flex: 1; min-width: 160px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🧠</div>
<strong>hermes-agent</strong><br>
<small style="color: var(--vp-c-text-2);">Hermes selbst</small>
</div>

<div style="flex: 1; min-width: 160px; padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
<div style="font-size: 2rem; margin-bottom: 4px;">🔓</div>
<strong>opencode</strong><br>
<small style="color: var(--vp-c-text-2);">Open Source Altern.</small>
</div>

</div>

Skills zum Spawnen und Orchestrieren autonomer KI-Coding-Agenten. Delegiere Coding-Aufgaben an spezialisierte CLI-Tools und hol dir das Ergebnis – ohne den Kontext zu verlassen.

---

## 📋 Auf einen Blick

| Skill | CLI | Stärke | IDE nötig? | Kosten |
|-------|:---:|:------:|:----------:|:------:|
| **claude-code** | `claude` | PRs + Tests + Refactoring | ❌ | Anthropic API |
| **codex** | `codex` | Schnelle Skripte | ❌ | OpenAI API |
| **hermes-agent** | `hermes` | Hermes-Konfiguration | ❌ | Modellabhängig |
| **opencode** | `opencode` | Code-Review + Open Source | ❌ | Nur API-Kosten |

---

## 🧑‍💻 claude-code

> **Auslöser:** „Schreib eine Funktion für X", „Mach ein PR für Feature Y", „Refaktor das hier"

Claude Code ist Anthropics Coding-Agent – spezialisiert auf Softwareentwicklung mit starker Git-Integration.

### ⚡ Schnellstart

```bash
npm install -g @anthropic-ai/claude-code
cd ~/mein-projekt
claude -p "Füge einen Health-Check-Endpoint in Flask hinzu"
```

### 🔑 Features

| Feature | Nutzen |
|---------|--------|
| **Autonomes Editieren** | Liest + schreibt Dateien selbstständig |
| **Git-Integration** | Erstellt Branches, Commits, PRs |
| **Test-Loop** | Führt Tests aus und iteriert bei Fehlschlag |
| **Sub-Agenten** | Kann eigene Unter-Agenten spawnen |
| **Langer Kontext** | Bis zu 200K Token |

### 🤝 Hermes-Integration

Der `claude-code`-Skill delegiert via Sub-Agent:

```
User: "Wir brauchen eine REST-API – nutz Claude Code dafür"
→ Hermes lädt den Skill und spawned Claude Code
→ Claude Code arbeitet autonom
→ Ergebnis kommt zurück
```

> ⚠️ **Fallstricke:**
> 1. Claude Code muss installiert sein (`which claude`)
> 2. Jeder Aufruf kostet Anthropic-Tokens
> 3. Sub-Agent braucht kompletten Kontext (kein Chat-Verlauf)

---

## 🤖 codex

> **Auslöser:** „Lass Codex das machen", „OpenAI Codex CLI"

OpenAIs Coding-Agent – ähnlich wie Claude Code, aber mit OpenAI-Modellen.

### ⚡ Schnellstart

```bash
pip install openai-codex
codex "Erstelle eine Python-Funktion für Fibonacci"
```

### 🔑 Besonderheiten

| Aspekt | Details |
|--------|---------|
| **Modelle** | o3, o4-mini, GPT-4o |
| **Stärke** | Python / JavaScript / TypeScript |
| **Git-Integration** | ❌ Kein integriertes PR-Management |

> ⚠️ **Fallstricke:**
> 1. OpenAI-Account mit Guthaben nötig
> 2. Kein Git/PR-Workflow eingebaut
> 3. Nicht in allen Ländern verfügbar

---

## 🧠 hermes-agent

> **Auslöser:** „Konfigurier Hermes", „Installier einen Skill", „Was kann Hermes?"

Dieser Skill ist besonders: Er beschreibt, wie man **Hermes selbst** konfiguriert, erweitert oder dazu beiträgt.

### 🔧 Verwendung

| Aktion | Befehl |
|--------|--------|
| Modell wechseln | `hermes config set model.default <modell>` |
| Skills browsen | `hermes skills browse` |
| Gateway einrichten | `hermes gateway setup` |
| System-Check | `hermes doctor` |
| Update | `hermes update` |

> 📚 **Mehr dazu:** [Konfiguration](/konfiguration) und [Eigene Skills schreiben](/eigene-skills)

---

## 🔓 opencode

> **Auslöser:** „Nutze OpenCode", „Open-Source-Coding-Agent"

Open-Source-Alternative zu Claude Code / Codex. Starker Fokus auf **Code-Review**.

### ⚡ Schnellstart

```bash
pip install opencode
opencode "Refaktor diese Funktion"
```

### 🔑 Besonderheiten

| Aspekt | Details |
|--------|---------|
| **Open Source** | Vollständig einsehbar |
| **Code-Review** | Automatisierte PR-Reviews |
| **Modell-Freiheit** | OpenRouter, lokal, etc. |
| **Preis** | Keine Lizenzkosten |

---

## 🎯 Entscheidungsmatrix

| Scenario | ➡️ Empfehlung | Warum? |
|----------|:-------------:|--------|
| Große Codebase, PRs, Tests | **claude-code** | Stärkste Git-Integration |
| Schnelle Python/JS-Skripte | **codex** | OpenAI-Modelle |
| Hermes selbst konfigurieren | **hermes-agent** | Built-in |
| Open Source sparen | **opencode** | Modell frei wählbar |

---

## ⚠️ Allgemeine Fallstricke

1. **Sub-Agenten haben keinen Chat-Verlauf** – Alles Nötige in den Kontext packen
2. **API-Kosten summieren sich** – Jeder Sub-Agent-Aufruf kostet extra
3. **Zeitlimit beachten** – Lange Tasks können timeouten (max 600s)

---

## ✅ Checkliste

- [ ] Gewünschtes CLI installiert (`claude`, `codex`, `opencode`)
- [ ] API-Keys in `.env` hinterlegt
- [ ] Skill geladen (`/skill claude-code` o.ä.)
- [ ] Task-Kontext vollständig beschrieben
- [ ] Ergebnis geprüft
