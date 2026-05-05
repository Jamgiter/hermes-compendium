# 🔌 MCP – Model Context Protocol

MCP (Model Context Protocol) ist ein offener Standard, um Hermes mit **externen Werkzeugen** zu erweitern – wie USB-C für KI-Tools. Statt dass jedes Tool eine eigene Schnittstelle braucht, definiert MCP eine einheitliche Möglichkeit, Werkzeuge anzubinden.

> **Kurz gesagt:** MCP-Server geben Hermes neue Fähigkeiten – Browser-Screenshots, GitHub-Zugriff, Datenbank-Queries – ohne dass du Code schreiben musst.

---

## Warum MCP?

Hermes hat bereits eingebaute Tools (`terminal`, `read_file`, `web_search`, …). MCP erweitert diesen Werkzeugkasten:

- **Browser-Automation** → Puppeteer-MCP-Server
- **GitHub-API** → GitHub-MCP-Server (Issues, PRs, Repos)
- **Datenbank-Queries** → SQLite-MCP-Server
- **Dateisystem-Zugriff** → Filesystem-MCP-Server
- **Eigene APIs** → Beliebiger HTTP/stdio-MCP-Server

---

## MCP vs. delegate_task

| | `delegate_task` | MCP |
|--|:--:|:--:|
| **Was?** | Parallele Subagenten | Externe Tool-Bibliothek |
| **Lebensdauer** | Nur während eines Turns | **Dauerhafte Verbindung** |
| **Eigenes Modell?** | Optional (z.B. Claude) | Nein, Hermes ruft die Tools |
| **Isolation** | Völlig unabhängig | Läuft im Hermes-Prozess |
| **Ideal für** | Komplexe Parallelarbeit | Spezial-Tools (DB, GitHub, Browser) |

---

## Installation

### 1. MCP-Paket installieren

```bash
pip install mcp
```

### 2. Server in `config.yaml` eintragen

```yaml
# ~/.hermes/config.yaml
mcp_servers:
  time:
    command: "uvx"
    args: ["mcp-server-time"]
  puppeteer:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-puppeteer"]
    timeout: 60
  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "ghp_..."
```

### 3. Hermes neustarten

Nach dem Neustart entdeckt Hermes die MCP-Server automatisch. Die Tools erscheinen als:

```
mcp_time_get_current_time
mcp_puppeteer_screenshot
mcp_github_list_issues
```

---

## Konfiguration im Detail

### Stdio-Transport (lokal)

```yaml
mcp_servers:
  server_name:
    command: "npx"                    # Ausführbare Datei
    args: ["-y", "paketname"]         # Argumente
    env:                              # Umgebungsvariablen (optional)
      API_KEY: "wert"
    timeout: 120                      # Timeout pro Tool-Call (Sek.)
    connect_timeout: 60               # Timeout für Verbindungsaufbau
```

### HTTP-Transport (remote)

```yaml
mcp_servers:
  server_name:
    url: "https://mcp.example.com/mcp"  # Server-URL
    headers:                             # HTTP-Header
      Authorization: "Bearer sk-..."
    timeout: 180
```

> Ein Server hat entweder `command` (stdio) oder `url` (HTTP), nicht beides.

---

## Empfohlene MCP-Server

| Server | Nutzen | Installation |
|--------|--------|-------------|
| **🖥️ Puppeteer** | Browser-Screenshots, Seiten analysieren, klicken | `npx -y @modelcontextprotocol/server-puppeteer` |
| **📁 Filesystem** | Erweiterter Dateizugriff inkl. Schreiben | `npx -y @modelcontextprotocol/server-filesystem /pfad` |
| **🐙 GitHub** | Issues, PRs, Repos ohne `gh` CLI | `npx -y @modelcontextprotocol/server-github` |
| **🗄️ SQLite** | SQL-Queries auf lokale DBs | `uvx mcp-server-sqlite --db pfad/datei.db` |
| **⏰ Time** | Uhrzeit & Weltzeit | `uvx mcp-server-time` |
| **🌐 Brave Search** | Websuche über Brave API | `npx -y @modelcontextprotocol/server-brave-search` |
| **📊 Memory** | Vektor-basiertes Gedächtnis | `npx -y @modelcontextprotocol/server-memory` |

---

## Sicherheit

### Environment-Filtering

Hermes gibt **nicht** die volle Shell-Umgebung an MCP-Subprozesse weiter. Nur sichere Basis-Variablen werden vererbt (`PATH`, `HOME`, `USER`, `LANG`, …). API-Keys und Secrets müssen explizit via `env:` gesetzt werden:

```yaml
mcp_servers:
  github:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      # Nur dieses Token wird an den Subprozess übergeben
      GITHUB_PERSONAL_ACCESS_TOKEN: "ghp_..."
```

### Credential-Redaktion

Fehlermeldungen von MCP-Tools werden automatisch auf Credential-Patterns gescannt und geschwärzt (GitHub-PATs, `sk-...`-Keys, `Bearer`-Tokens, Passwörter).

### Sampling-Kontrolle

MCP-Server können LLM-Anfragen an Hermes stellen (`sampling/createMessage`). Das ist standardmäßig aktiviert, kann aber pro Server deaktiviert werden:

```yaml
mcp_servers:
  my_server:
    command: "npx"
    args: ["-y", "my-server"]
    sampling:
      enabled: false          # Sampling deaktivieren
```

---

## Hermes als MCP-Server

Seit **v0.6.0** kann Hermes selbst als MCP-Server auftreten und seine Sessions für andere MCP-Clients öffnen:

```bash
hermes mcp serve
```

**Clients, die Hermes als MCP-Server nutzen können:**
- Claude Desktop
- Cursor IDE
- VS Code (via MCP-Plugin)
- Zed Editor
- JetBrains IDEs

So greifen diese Tools auf Hermes' Konversationen und Sessions zu – zum Beispiel, um vergangene Chats zu durchsuchen.

---

## MCP-Server-Verwaltung

### CLI-Befehle (seit v0.4.0)

```bash
hermes mcp list          # Alle konfigurierten MCP-Server anzeigen
hermes mcp install <url>  # MCP-Server registrieren
hermes mcp remove <name>  # Server entfernen
hermes mcp auth <name>    # OAuth 2.1 PKCE-Authentifizierung starten
```

### Status prüfen

```bash
hermes mcp list
```

Ausgabe:
```
🔌 MCP-Server Status:
  ✅ time          – Aktiv (0.3s Latenz)
  ✅ puppeteer     – Aktiv (1.1s Latenz)
  ❌ github        – Fehler: Token nicht gesetzt
```

---

## Verbindungs-Lebenszyklus

- **Persistent** – MCP-Server bleiben für die gesamte Hermes-Sitzung verbunden
- **Auto-Reconnect** – Bei Verbindungsabbruch bis zu 5 Versuche mit exponentiellem Backoff (1s, 2s, 4s, 8s, 16s)
- **Graceful Shutdown** – Bei Hermes-Ende werden alle Verbindungen sauber geschlossen
- **Idempotent** – `discover_mcp_tools()` verbindet nur neue, noch nicht verbundene Server

---

## Tool-Namenskonvention

MCP-Tools erhalten das Präfix `mcp_{server}_{tool}`:

```
mcp_filesystem_read_file
mcp_filesystem_write_file
mcp_github_list_issues
mcp_github_create_pull_request
mcp_puppeteer_screenshot
mcp_puppeteer_click
```

Bindestriche und Punkte in Namen werden durch Unterstriche ersetzt.

---

## Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| **"MCP SDK not available"** | `pip install mcp` |
| **"No MCP servers configured"** | `mcp_servers:` in `config.yaml` eintragen |
| **"Command not found"** | `npx`/`uvx` installieren |
| **Timeout** | `connect_timeout` erhöhen |
| **Tools erscheinen nicht** | Hermes neustarten, nicht nur `/reset` |
| **HTTP-Import-Fehler** | `pip install --upgrade mcp` |
