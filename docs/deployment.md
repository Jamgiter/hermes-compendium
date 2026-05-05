# 🏗️ Deployment & Hosting

Hermes läuft nicht nur interaktiv im Terminal – du kannst ihn als **Dauerläufer** betreiben: als Hintergrunddienst, in Docker, als systemd-Service oder auf deinem Homeserver.

---

## Übersicht

| Methode | Nutzung | Ideal für |
|---------|---------|-----------|
| **Interaktiv (CLI)** | `hermes` / `hermes --tui` | Tägliche Arbeit, Entwicklung |
| **Gateway** | `hermes gateway` | Bot auf Telegram, Discord, Signal etc. |
| **Cron-Jobs** | `hermes cron create` | Automatisierte Aufgaben |
| **systemd** | Service-Definition | Dauerhafter Produktionsbetrieb |
| **Docker** | Container | Isolierte Umgebung, Server-Betrieb |
| **Termux (Android)** | `hermes` auf dem Handy | Unterwegs |
| **ACP Server** | VS Code / Zed / JetBrains | IDE-Integration |

---

## Gateway-Modus (der Dauerläufer)

Der Gateway-Modus ist der häufigste Deployment-Fall: Hermes läuft als Bot und antwortet auf mehreren Plattformen gleichzeitig.

### Starten

```bash
hermes gateway
```

Oder als Hintergrundprozess:

```bash
hermes gateway --daemon
```

### Mit Auto-Restart bei Abstürzen

```bash
while true; do hermes gateway; sleep 5; done
```

Oder besser → **systemd** (siehe unten).

---

## systemd-Service

### Gateway-Service

```ini
# /etc/systemd/system/hermes-gateway.service
[Unit]
Description=Hermes Agent Gateway
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=deinuser
WorkingDirectory=/home/deinuser
ExecStart=/home/deinuser/.local/bin/hermes gateway
Restart=always
RestartSec=10
Environment=HOME=/home/deinuser

[Install]
WantedBy=multi-user.target
```

Aktivieren:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now hermes-gateway
sudo systemctl status hermes-gateway
```

### Cron-Scheduler als Service

Falls du viele Cron-Jobs hast, kannst du auch den Cron-Scheduler als separaten Service laufen lassen:

```ini
[Service]
ExecStart=/home/deinuser/.local/bin/hermes cron run
Restart=always
```

---

## Docker

### Offizielles Docker-Image (seit v0.6.0)

```bash
docker pull nousresearch/hermes-agent
```

### CLI-Modus

```bash
docker run -it --rm \
  -v ~/.hermes:/home/hermes/.hermes \
  nousresearch/hermes-agent
```

### Gateway-Modus

```bash
docker run -d --name hermes-gateway \
  --restart unless-stopped \
  -v ~/.hermes:/home/hermes/.hermes \
  nousresearch/hermes-agent gateway
```

### Mit eigenem Skills-Ordner

```bash
docker run -d --name hermes-gateway \
  --restart unless-stopped \
  -v ~/.hermes:/home/hermes/.hermes \
  -v ~/meine-skills:/home/hermes/.hermes/skills \
  nousresearch/hermes-agent gateway
```

### Docker Compose

```yaml
# docker-compose.yml
services:
  hermes:
    image: nousresearch/hermes-agent
    container_name: hermes-gateway
    restart: unless-stopped
    volumes:
      - ~/.hermes:/home/hermes/.hermes
    command: gateway
```

---

## Profile (Multi-Instance)

Seit **v0.6.0** kannst du mehrere isolierte Hermes-Instanzen betreiben:

```bash
hermes profile create work
hermes profile create private
```

Jedes Profil hat seine eigene:

| Komponente | Pro Profil getrennt |
|-----------|-------------------|
| Config | `~/.hermes/profiles/<name>/config.yaml` |
| API-Keys | `~/.hermes/profiles/<name>/.env` |
| Memory | Eigener SQLite-Speicher |
| Skills | Eigener Skill-Ordner |
| Sessions | Eigene Session-Historie |
| Gateway | Eigener Bot (eigener Token) |

### Nutzung

```bash
hermes --profile work
hermes --profile private gateway --daemon
```

### Gateway mit Profil

```bash
hermes --profile work gateway
```

So kannst du z.B. einen **Arbeits-Bot** auf Slack und einen **Privat-Bot** auf Telegram gleichzeitig laufen lassen.

---

## ACP Server (IDE-Integration)

Für VS Code, Zed und JetBrains:

```bash
hermes acp
```

Startet einen **ACP-Server** (Agent Communication Protocol), den Editoren als Tool-Provider nutzen können.

```bash
# Mit VS Code
hermes acp --transport vs-code

# Mit Zed
hermes acp --transport zed

# Mit JetBrains
hermes acp --transport jetbrains
```

Siehe auch: **[Editor-Integration im Cheatsheet](/hermes-compendium/cheatsheet#editor-integration)**

---

## MCP Server Mode

Seit **v0.6.0** kann Hermes selbst als MCP-Server auftreten:

```bash
hermes mcp serve
```

Damit können **Claude Desktop**, **Cursor**, **VS Code** und andere MCP-Clients auf Hermes' Sessions und Konversationen zugreifen.

---

## Deployment-Checkliste

### Für den Produktionsbetrieb

```bash
# 1. API-Keys prüfen
hermes doctor

# 2. Gateway im Hintergrund starten
hermes gateway --daemon

# 3. Logs im Auge behalten
hermes logs --follow

# 4. Gateway-Status prüfen
hermes gateway status
```

### Logs

```bash
# Alle Logs
hermes logs --follow

# Nur Fehler
hermes logs --level error

# Nur Cron-Jobs
hermes logs --cron
```

Log-Verzeichnis: `~/.hermes/logs/`
- `agent.log` – Normale Agent-Aktivität (INFO+)
- `errors.log` – Nur Warnungen und Fehler (WARNING+)
- `gateway.log` – Gateway-spezifische Logs (im Gateway-Modus)

---

## Autostart (ohne systemd)

Falls du kein sudo/systemd hast – z.B. auf einem reinen User-Setup:

```bash
# In ~/.bashrc, ~/.profile oder ~/.config/autostart/
# Gateway starten (nur wenn nicht bereits laufend)
if ! pgrep -f "hermes gateway" > /dev/null; then
  nohup hermes gateway > ~/.hermes/gateway.log 2>&1 &
fi
```

Oder als **tmux/screen-Session**:

```bash
tmux new-session -d -s hermes 'hermes gateway'
```

---

## Tipps & Fallstricke

| Problem | Lösung |
|---------|--------|
| **Gateway startet nicht** | `hermes doctor` – fehlende Config/Keys? |
| **Keine Verbindung zu Telegram** | Token in `.env` prüfen (`TELEGRAM_BOT_TOKEN`) |
| **Cron-Jobs laufen nicht** | `hermes logs --cron` – Fehler im Prompt? |
| **Docker: Berechtigungen** | Volume-Ordner muss vom Container lesbar sein (`chmod 755 ~/.hermes`) |
| **Profil wird nicht gefunden** | `hermes profile list` – existiert das Profil? |
| **Gateway läuft doppelt** | `pkill -f "hermes gateway"` und neustarten |
