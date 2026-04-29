# Data Science, DevOps & mehr 📊⚙️

Kleinere Kategorien zusammengefasst: Data Science, DevOps, Dogfood und Email.

---

## Skill-Übersicht auf einen Blick

| Icon | Skill | Kategorie | Kurzbeschreibung |
|------|-------|-----------|-----------------|
| 📊 | jupyter-live-kernel | Data Science | Iteratives Python via live Jupyter-Kernel |
| ⚙️ | webhook-subscriptions | DevOps | Webhook-Abos: ereignisgesteuerte Agenten-Ausführungen |
| 🐶 | dogfood | QA / Testing | Explorative QA von Web-Apps: Bugs finden, Belege sammeln, Reports |
| 📧 | himalaya | CLI-Email | Himalaya CLI: IMAP/SMTP-Email aus dem Terminal |

---

## 📊 jupyter-live-kernel

**Kategorie:** Data Science

### Auslöser
„Analysier die Daten", „Mach ne Visualisierung", „Jupyter"

### Schnellstart
Startet einen live Jupyter-Kernel (hamelnb), in dem Hermes interaktive Python-Analysen ausführen kann.

```bash
# Kernel starten (automatisch durch Hermes)
# Dann: Variablen definieren, analysieren, plotten
```

### Features
- Zwischenergebnisse bleiben im Kernel erhalten
- Variablen können in späteren Schritten weiterverwendet werden
- Kein wiederholtes Laden großer Datensätze
- Ideal für Datenexploration, statistische Auswertungen und Plotting

### Fallstricke
- Kernel-Speicher wächst bei langen Sessions – gelegentlicher Neustart empfohlen
- Keine garantierte Persistenz zwischen verschiedenen Agent-Sessions
- Bei sehr großen Datenmengen kann der Kernel instabil werden

---

## ⚙️ webhook-subscriptions

**Kategorie:** DevOps

### Auslöser
„Trigger bei Webhook", „Event-basierte Tasks"

### Schnellstart
Richtet Webhook-Endpoints ein, die bei bestimmten Ereignissen automatisch eine Hermes-Session starten.

```bash
# Webhook registrieren (automatisch durch Hermes)
# Der Agent führt dann eine vordefinierte Aufgabe aus
```

### Features
- Automatischer Deployment-Check bei Git-Push
- Fehleranalyse bei CI-Fail
- Tägliche Zusammenfassungen via Webhook-Trigger
- Volle Hermes-Agent-Logik im event-getriggerten Kontext

### Fallstricke
- Webhook-Endpoints müssen von außen erreichbar sein (kein localhost)
- Keine eingebaute Retry-Logik bei Fehlschlägen
- Secret-Validierung nicht standardmäßig aktiviert

---

## 🐶 dogfood

**Kategorie:** QA / Testing

### Auslöser
„Teste die Web-App", „Finde Bugs", „QA-Check"

### Schnellstart
Der Dogfood-Skill navigiert systematisch durch Web-Apps, sucht nach Bugs, macht Screenshots und erstellt einen QA-Report.

```bash
# Start (automatisch durch Hermes)
# Der Agent: öffnet Browser → navigiert → dokumentiert → reportet
```

### Features
- Systematische Navigation wie ein echter User
- Automatische Screenshots bei jedem Schritt
- Bug-Erkennung und -Dokumentation
- Strukturierter QA-Report als Ausgabe

### Fallstricke
- Funktioniert nur mit Web-Apps (keine nativen Anwendungen)
- Screenshots können je nach Viewport variieren
- Kein integrierter Login-Flow – Sitzung muss vorbereitet sein

---

## 📧 himalaya

**Kategorie:** CLI-Email

### Auslöser
„Lies meine Mails", „Schick ne Email", „Such in Mails"

### Schnellstart
Himalaya ist ein CLI-Email-Client, den Hermes direkt ansteuern kann: Mails lesen, durchsuchen, senden, Anhänge verwalten.

```bash
# Mails lesen
himalaya list -f INBOX -n 10

# Mail senden
himalaya send --to user@example.com --subject "Hallo" --body "Text"
```

### Features
- Vollständiger IMAP/SMTP-Zugriff via CLI
- Mails lesen, durchsuchen, senden
- Anhänge verwalten
- Nachrichten filtern und archivieren

### Fallstricke
- Erfordert konfigurierte IMAP/SMTP-Zugangsdaten
- Kein modernes OAuth – nur Passwort-basierte Anmeldung
- Kein HTML-Rendering – nur Plaintext-Ansicht von E-Mails
