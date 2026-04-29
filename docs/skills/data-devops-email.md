# Data Science, DevOps & mehr 📊⚙️

Kleinere Kategorien zusammengefasst: Data Science, DevOps, Dogfood und Email.

---

## 📊 Data Science

| Skill | Beschreibung |
|-------|-------------|
| **jupyter-live-kernel** | Iteratives Python via live Jupyter-Kernel |

### jupyter-live-kernel

**Auslöser:** „Analysier die Daten", „Mach ne Visualisierung", „Jupyter"

Startet einen live Jupyter-Kernel (hamelnb), in dem Hermes interaktive Python-Analysen ausführen kann. Besonders nützlich für: Datenexploration, statistische Auswertungen, Plotting.

**Vorteile gegenüber terminal():**
- Zwischenergebnisse bleiben im Kernel erhalten
- Variablen können in späteren Schritten weiterverwendet werden
- Kein wiederholtes Laden großer Datensätze

---

## ⚙️ DevOps

| Skill | Beschreibung |
|-------|-------------|
| **webhook-subscriptions** | Webhook-Abos: ereignisgesteuerte Agenten-Ausführungen |

### webhook-subscriptions

**Auslöser:** „Trigger bei Webhook", „Event-basierte Tasks"

Richtet Webhook-Endpoints ein, die bei bestimmten Ereignissen (Git-Push, CI-Fail, etc.) automatisch eine Hermes-Session starten. Der Agent führt dann eine vordefinierte Aufgabe aus.

**Anwendungen:**
- Automatischer Deployment-Check bei Git-Push
- Fehleranalyse bei CI-Fail
- Tägliche Zusammenfassungen via Webhook-Trigger

---

## 🐶 Dogfood

| Skill | Beschreibung |
|-------|-------------|
| **dogfood** | Explorative QA von Web-Apps: Bugs finden, Belege sammeln, Reports |

**Auslöser:** „Teste die Web-App", „Finde Bugs", „QA-Check"

Der Dogfood-Skill navigiert systematisch durch Web-Apps, sucht nach Bugs, macht Screenshots und erstellt einen QA-Report. Nützt den Browser, um die App wie ein echter User zu erkunden.

---

## 📧 Email

| Skill | Beschreibung |
|-------|-------------|
| **himalaya** | Himalaya CLI: IMAP/SMTP-Email aus dem Terminal |

**Auslöser:** „Lies meine Mails", „Schick ne Email", „Such in Mails"

Himalaya ist ein CLI-Email-Client, den Hermes direkt ansteuern kann: Mails lesen, durchsuchen, senden, Anhänge verwalten – alles aus dem Terminal.

```bash
# Mails lesen
himalaya list -f INBOX -n 10

# Mail senden
himalaya send --to user@example.com --subject "Hallo" --body "Text"
```
