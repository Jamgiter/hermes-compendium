# FAQ ❓

Häufig gestellte Fragen zu Hermes Agent.

---

## 🔧 Installation & Setup

### Wie installiere ich Hermes?

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

### Wie starte ich Hermes?

```bash
hermes           # Interaktiver Modus
hermes chat -q "Hallo"   # Einmalige Frage
```

### Welches Modell soll ich nehmen?

Für Einsteiger empfiehlt sich **DeepSeek** (günstig, schnell) oder **OpenRouter** (viele Modelle, ein Key). Für komplexe Aufgaben **Claude Sonnet** (Anthropic).

### Ich habe keinen API-Key – was jetzt?

Ohne API-Key kannst du Hermes nicht nutzen. Einfachsten Einstieg: [OpenRouter](https://openrouter.ai) – registrieren, Guthaben aufladen (schon 5€ reichen), Key in die `.env`.

---

## 🛠️ Nutzung

### Wie merkt sich Hermes Dinge?

Über das **Memory**. Sag einfach:
> "Denk dran, ich nutze Manjaro und mein Projekt ist in ~/projects/"

Hermes speichert das und ruft es in jeder Session ab.

### Wie lade ich einen Skill?

```bash
# Während der Session:
/skill wwm-compendium

# Beim Start:
hermes -s wwm-compendium,flask-script-dashboard
```

### Kann ich das Modell wechseln?

Ja! In der Session einfach:
```
/model deepseek/deepseek-chat
```
Oder dauerhaft:
```bash
hermes config set model.default anthropic/claude-sonnet-4
```

### Was ist der Unterschied zwischen Session und Memory?

Die **Session** ist der aktuelle Chat-Verlauf. Alles in einer Session hat denselben Kontext.
Das **Memory** ist das Langzeitgedächtnis – Fakten, die über Sessions hinweg erhalten bleiben.

### Kann Hermes auch ohne Internet arbeiten?

Nein. Hermes braucht eine Verbindung zu einem LLM-Provider (außer du hostest ein lokales Modell via Ollama/LM Studio).

---

## 📂 Projekte

### Wie packe ich meine Skripte in ein Dashboard?

Mit dem Skill `flask-script-dashboard`. Hermes erstellt ein Flask-Webinterface, das deine Python-Skripte per Klick startet. Die Skripte werden **nie verändert** (1:1 Kopie).

### Wie erstelle ich ein VitePress-Wiki?

```bash
mkdir mein-wiki && cd mein-wiki
# package.json, config.mjs, index.md erstellen
npx vitepress build docs
# Auf GitHub Pages deployen (Skill: vitepress-github-pages)
```

### Wie richte ich eine Custom Domain ein?

1. DNS: CNAME oder A Records auf GitHub Pages setzen
2. GitHub Repo → Settings → Pages → Custom Domain eintragen
3. HTTPS aktivieren

---

## 🖥️ Plattformen

### Kann ich Hermes auf dem Handy nutzen?

Ja! Über das **Gateway**: Hermes auf einem 24/7-Server installieren, Telegram- oder Discord-Bot einrichten – dann von überall chatten.

### Welche Plattform ist am einfachsten?

**Telegram**. Bot in 2 Minuten erstellen, API-Key reicht, keine Webhooks nötig.

### Funktioniert Discord auch?

Ja, aber aufwändiger: Developer Portal, Bot erstellen, Intents aktivieren, Bot einladen.

Siehe: [Multi-Plattform Setup](/multiplattform)

---

## 🚨 Probleme

### Hermes reagiert nicht mehr – was tun?

```bash
# Config prüfen
hermes doctor
hermes config check

# Gateway neustarten
hermes gateway restart

# Logs ansehen
tail -50 ~/.hermes/logs/gateway.log
```

### Der Build schlägt fehl – woran liegt's?

Häufige Ursachen:
- `base:` in config.mjs falsch (Custom Domain → `/` , GitHub Pages → `/repo-name/`)
- Fehlende package-lock.json (für `npm ci`)
- GitHub Actions Sicherheitseinstellungen (SHA-Pinning)
- `&` in Commit-Nachrichten (wird als Backgrounding interpretiert)

### Warum sehe ich keine Formatierung auf der Webseite?

Wahrscheinlich der **base-path**. Wenn du die Domain wechselst, muss `base:` angepasst werden. Bei Custom Domain → `/` , bei username.github.io/repo → `/repo/`.

### Gateway startet nicht?

```bash
# Prüfen ob Port belegt ist
lsof -i :5000

# User-Login-Service aktivieren (für 24/7-Betrieb)
sudo loginctl enable-linger $USER

# Gateway-Logs prüfen
cat ~/.hermes/logs/gateway.log | tail -30
```

---

## 🔒 Sicherheit

### Ist es sicher, Hermes volle Terminal-Kontrolle zu geben?

Hermes fragt vor riskanten Befehlen nach (löschen, neustarten, etc.). Der **YOLO-Modus** deaktiviert diese Abfragen – nur nutzen wenn du vertraust, dass Hermes weiß was er tut.

### Werden meine API-Keys sicher gespeichert?

Keys liegen in `~/.hermes/.env` – getrennt von der Config. Standardmäßig werden sie nicht in Logs oder Sessions angezeigt.

### Kann Hermes meine Daten sehen?

Hermes hat Zugriff auf Dateien und Terminal, die du ihm erlaubst. Er speichert nur das, was du ins Memory schreibst.

---

## 🧪 Fortgeschritten

### Kann ich mehrere Hermes-Instanzen parallel laufen lassen?

Ja, via **Profile**:
```bash
hermes profile create work
hermes profile create gaming
hermes profile use work    # Umschalten
```

### Wie mache ich einen Cron-Job?

```bash
hermes cron create "30m"          # Alle 30 Minuten
hermes cron create "0 9 * * *"    # Täglich um 9 Uhr
```

### Kann ich eigene Skills schreiben?

Ja! Mit dem Skill `hermes-agent-skill-authoring`. Ein Skill ist eine SKILL.md mit YAML-Frontmatter + Markdown-Anleitung.

### Was ist ein Sub-Agent?

Ein von Hermes gestarteter Hilfsprozess für parallele Aufgaben. Z.B.:
> "Lass zwei Agenten parallel recherchieren"

Sub-Agenten haben eigene Sessions und Terminals – super für aufwändige Aufgaben!

---

## 💡 Sonstiges

### Kostet Hermes etwas?

Hermes selbst ist **kostenlos und Open Source** (MIT). Du zahlst nur für die LLM-API-Nutzung (~1-10€/Monat je nach Nutzung).

### Gibt es Hermes auch auf Deutsch?

Hermes spricht Deutsch, wenn du ihn auf Deutsch ansprichst. Die Skills und dieses Compendium sind auf Deutsch verfasst. Die Kernentwicklung ist englisch.

### Wo finde ich Hilfe?

- 📖 **Dieses Compendium**: [jamgiter.github.io/hermes-compendium](https://jamgiter.github.io/hermes-compendium/)
- 🐙 **GitHub**: [github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- 📚 **Offizielle Docs**: [hermes-agent.nousresearch.com/docs](https://hermes-agent.nousresearch.com/docs/)
