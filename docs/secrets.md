# 🔐 Secrets & Sicherheit

Hermes trennt **Konfiguration** (`config.yaml`) und **Geheimnisse** (`.env`) konsequent. So bleiben API-Keys, Tokens und Credentials sicher – und landen nicht versehentlich in Logs, Sessions oder Git-Repos.

---

## Grundprinzip

```
~/.hermes/
├── config.yaml    ← Einstellungen, Provider, Server (darf ins Backup)
└── .env           ← API-Keys, Secrets (NIEMALS teilen!)
```

Die `.env` wird automatisch von Hermes geladen – du musst sie nie manuell sourced.

---

## API-Keys verwalten

### Alle Keys in einer Datei

```bash
# ~/.hermes/.env
# === Haupt-Provider ===
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
DEEPSEEK_API_KEY=sk-...

# === Zusätzliche Dienste ===
GROQ_API_KEY=gsk-...
ELEVENLABS_API_KEY=...
GITHUB_TOKEN=ghp_...

# === Eigene Services ===
MEIN_API_KEY=...
```

### Pfad prüfen

```bash
hermes config env-path
# → /home/deinuser/.hermes/.env
```

### `.env`-Einträge im Cheatsheet

Die wichtigsten Umgebungsvariablen findest du im **[Cheatsheet](/hermes-compendium/cheatsheet#api-keys-env)**.

---

## Credential Pools (seit v0.7.0)

Mehrere API-Keys für denselben Provider mit automatischer Rotation – ideal für Lastverteilung und Ausfallsicherheit:

```yaml
# config.yaml
providers:
  openrouter:
    api_keys:
      - "sk-or-v1-aaa..."
      - "sk-or-v1-bbb..."
      - "sk-or-v1-ccc..."
```

### Wie es funktioniert

| Feature | Beschreibung |
|---------|-------------|
| **Rotation** | `least_used`-Strategie – der am wenigsten genutzte Key wird als nächster verwendet |
| **Failover** | Bei 401-Fehlern wechselt Hermes automatisch zum nächsten Key |
| **Pool-Erhaltung** | Der Pool-Status bleibt auch bei Fallback-Provider-Wechseln erhalten |
| **429-Handling** | Hermes schaltet **nicht** voreilig auf Fallback-Provider bei Rate-Limits – es wartet ab |

```yaml
# Erweiterte Konfiguration mit Fallback-Provider-Kette
providers:
  main:
    provider: openrouter
    api_keys:
      - "sk-or-v1-aaa..."
      - "sk-or-v1-bbb..."
  fallback:
    provider: anthropic
    api_key: "sk-ant-..."
```

---

## Secret Redaction (seit v0.3.0)

### PII-Redaktion

Wenn aktiviert, werden persönlich identifizierbare Daten automatisch geschwärzt, **bevor** sie an LLM-Provider gesendet werden:

```yaml
# config.yaml
privacy:
  redact_pii: true    # Standard: false
```

Geschwärzt werden:
- E-Mail-Adressen
- Telefonnummern
- Adressen
- Sozialversicherungsnummern
- Kreditkartennummern

### Secret Redaction (seit v0.12.0)

Seit **v0.12.0** ist `security.redact_secrets` standardmäßig **deaktiviert** (war in früheren Versionen der Default). Grund: Es verhinderte legitime Nutzung von API-Keys in Prompts.

```yaml
# config.yaml
security:
  redact_secrets: true    # Seit v0.12 standardmäßig false!
```

**Aktivieren:**
```bash
hermes config set security.redact_secrets true
```

### Secret Exfiltration Blocking (seit v0.7.0)

Hermes scannt **Browser-URLs** und **LLM-Responses** auf Secret-Patterns – und blockiert Exfiltration-Versuche über:

- URL-Encoding
- Base64-Codierung
- Prompt-Injection
- Verdächtige HTTP-Parameter

```yaml
security:
  exfiltration_blocking: true    # Standard: true
```

---

## Credential Pool Failover-Szenarien

### Scenario 1: Ein Key läuft ab

```
OpenRouter Key #1 (abgelaufen: 401)
→ Automatischer Wechsel zu Key #2
→ Key #1 wird als "ungültig" markiert
→ Agent läuft weiter ohne Unterbrechung
```

### Scenario 2: Rate Limit erreicht

```
OpenRouter (429 Too Many Requests)
→ Hermes wartet (kein voreiliger Fallback!)
→ Nach Timeout: erneuter Versuch mit nächstem Key
→ Erst wenn alle Keys 429 geben → Fallback-Provider
```

### Scenario 3: Provider komplett down

```
OpenRouter (keine Response)
→ Alle Keys durchprobiert
→ Automatischer Wechsel zu Anthropic (Fallback)
→ Session läuft auf Anthropic weiter
```

---

## Sicherheit bei MCP-Servern

MCP-Subprozesse bekommen **nicht** deine Shell-Umgebung. Nur explizit via `env:` gesetzte Variablen werden übergeben:

```yaml
mcp_servers:
  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      # Nur dieses Token geht an den Subprozess
      GITHUB_PERSONAL_ACCESS_TOKEN: "ghp_..."
```

Credential-ähnliche Muster in MCP-Fehlermeldungen werden automatisch geschwärzt.

---

## Best Practices

| 👍 Empfohlen | 👎 Nicht empfohlen |
|-------------|-------------------|
| Keys in `.env`, Config in `config.yaml` | Keys hartcodiert in `config.yaml` |
| Credential Pools für wichtige Provider | Einzel-Key ohne Fallback |
| `redact_secrets: true` in geteilten Umgebungen | Secrets in Git-Commits |
| `.env` in `.gitignore` | `.env` im Backup-Repo |
| Regelmäßige Key-Rotation | Keys auf ungesicherten Servern |

### Quick-Check

```bash
# Prüfen ob Secrets in der Config sind
grep -i "sk-\|api_key" ~/.hermes/config.yaml

# Prüfen ob `.env` korrekt geladen wird
hermes config env-path
cat ~/.hermes/.env | cut -d= -f1   # Nur Keys-Namen anzeigen (ohne Werte)
```
