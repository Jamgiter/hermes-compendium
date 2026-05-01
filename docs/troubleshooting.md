# Troubleshooting 🔧

Häufige Probleme mit Hermes Agent und ihre Lösungen – von API-Fehlern über Verbindungsprobleme bis zu Config-Fallen.

---

## 🔑 API & Authentifizierung

### „No valid credentials found" / Auth-Fehler

**Ursache:** API-Key fehlt oder falsch konfiguriert.

**Lösung:**
```bash
# Prüfen ob .env existiert
hermes config env-path

# .env editieren und Key eintragen
hermes config edit

# System-Check laufen lassen
hermes doctor
```

**Häufige Fehler:**
| .env-Eintrag | Provider |
|-------------|----------|
| `OPENROUTER_API_KEY=sk-...` | OpenRouter |
| `ANTHROPIC_API_KEY=sk-ant-...` | Anthropic |
| `DEEPSEEK_API_KEY=sk-...` | DeepSeek |

### Rate Limit / 429 Too Many Requests

**Ursache:** Zu viele Anfragen in kurzer Zeit.

**Lösung:**
- Warte 30–60 Sekunden
- Wechsle zu einem anderen Provider
- Reduziere die Anzahl paralleler Sub-Agenten

---

## ⚙️ Config & Installation

### „Command not found" nach Installation

**Ursache:** Installationspfad nicht in `$PATH`.

**Lösung:**
```bash
# Prüfen wo Hermes installiert ist
which hermes || echo "Nicht gefunden"

# Standard-Pfad manuell hinzufügen
export PATH=$PATH:~/.local/bin
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
```

### Config-Fehler nach Update

**Ursache:** Config-Format hat sich geändert.

**Lösung:**
```bash
# Config auf Fehler prüfen
hermes config check

# Bei Problemen: Backup + neu generieren
cp ~/.hermes/config.yaml ~/.hermes/config.yaml.bak
hermes setup
```

---

## 🌐 Gateway (Telegram, Discord)

### Gateway startet nicht

**Ursache:** Fehlende Tokens oder Port-Konflikte.

**Lösung:**
```bash
# Status prüfen
hermes gateway status

# Logs ansehen
cat ~/.hermes/logs/gateway.log | tail -50

# Neu einrichten
hermes gateway setup
```

### Bot antwortet nicht auf Telegram/Discord

**Ursache:** Webhook nicht korrekt oder Session-Timeout.

**Lösung:**
1. Prüfe ob der Gateway läuft: `hermes gateway status`
2. Schreib dem Bot direkt eine PM
3. Starte den Gateway neu: `hermes gateway restart`

---

## 💻 Terminal & Tools

### Terminal-Befehl hängt / timeout

**Ursache:** Befehl läuft zu lange oder wartet auf Input.

**Lösung:**
- Timeout erhöhen in config.yaml: `terminal.timeout: 300`
- Bei interaktiven Programmen `pty: true` setzen
- Lange Tasks mit `background: true` starten

### „Tool not found" / Skill nicht verfügbar

**Ursache:** Toolset nicht aktiviert oder Skill nicht geladen.

**Lösung:**
```bash
# Verfügbare Tools anzeigen
hermes tools list

# Toolset aktivieren
hermes tools enable web

# Skill laden
/skill <name>
```

---

## 🧠 Memory & Gedächtnis

### Hermes erinnert sich nicht an frühere Sessions

**Ursache:** Memory deaktiviert oder Datenbank korrupt.

**Lösung:**
```bash
# Prüfen ob Memory aktiv ist
hermes config get memory.memory_enabled

# Memory-Provider prüfen
hermes config get memory.provider  # sollte "built-in" sein

# Datenbank zurücksetzen (falls korrupt)
mv ~/.hermes/state.db ~/.hermes/state.db.bak
# Hermes neu starten → erstellt neue DB
```

---

## ❌ Bekannte Fehler & Workarounds

### `&`-Zeichen in Befehlen wird abgewürgt

**Problem:** Das `&`-Zeichen in Terminal-Kommandos (auch in Strings) wird von Hermes als Backgrounding interpretiert.

**Lösung:** `&` durch „und" oder „u." ersetzen:
```bash
# ❌ Problem
git commit -m "feat: add feature & fix bug"  # wird als Background interpretiert

# ✅ Lösung
git commit -m "feat: add feature und fix bug"
```

### Secret Redaction zerstört Patches (seit v0.12 gefixt)

**Problem (vor v0.12):** Die automatische Secret-Schwärzung hat manchmal harmlose Textstellen (z.B. `sk-...`-ähnliche Muster in Diffs/Patches) zerstört.

**Lösung (seit v0.12):** Secret Redaction ist **standardmäßig AUS**. Falls du sie brauchst:
```bash
hermes config set security.redact_secrets true
```

### Azure Content Filter: `[SYSTEM:` wird geblockt

**Problem:** Bei Azure-gehosteten Modellen wird der Prompt mit `[SYSTEM:`-Markern vom Content Filter abgewürgt.

**Lösung:** Seit v0.12 werden alle `[SYSTEM:` Marker automatisch in `[IMPORTANT:` umbenannt.

### TUI startet langsam

**Problem:** Der TUI braucht sichtbar lange bis zur ersten Eingabe.

**Lösung:** Seit v0.12 ist der TUI-Kaltstart ~57% schneller (lazy agent init, optimierte Imports). Bei älteren Versionen: `hermes update`

### `.env`-Änderungen ohne Neustart übernehmen

Seit v0.12 kannst du in der TUI `/reload` eingeben, um `.env`-Änderungen hot zu reloaden – ohne Session-Neustart.

### VitePress: Found dead link

**Problem:** `npm run build` schlägt fehl mit „Found dead link".

**Lösung:** Interne Links in Markdown **ohne** `base`-Prefix schreiben:
```markdown
# ❌ Falsch (mit base-Prefix)
[Skills](/hermes-compendium/skills)

# ✅ Richtig (ohne base-Prefix)
[Skills](/skills)
```

---

## 🩺 Hermes Doctor

Der eingebaute System-Check findet die meisten Probleme automatisch:

```bash
hermes doctor
```

Das prüft:
- ✓ Config auf Syntax-Fehler
- ✓ API-Keys vorhanden?
- ✓ Provider erreichbar?
- ✓ Toolsets korrekt?
- ✓ Gateway-Status
- ✓ Memory-Datenbank

---

> 💡 **Tipp:** Wenn gar nichts mehr geht → Config + .env backup, dann `hermes setup` für eine frische Installation.
