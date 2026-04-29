# Note-Taking, NPC-Building & Productivity 📝🤖💼

---

## 📝 Note-Taking

<div class="skill-card">

### 📌 Auf einen Blick

| Skill | Beschreibung |
|-------|-------------|
| **obsidian** | Notizen im Obsidian-Vault lesen, suchen, erstellen |

</div>

<div class="skill-card">

### 🗃️ obsidian

| | |
|---|---|
| **🎯 Auslöser** | `„Such in meinen Notizen"` · `„Erstell ne Notiz"` · `„Obsidian"` |
| **⚡ Features** | Lese-, Such- und Schreibzugriff auf deinen Obsidian-Vault — direkt aus der Session. Ideal für Wissensmanagement, Recherche-Dokumentation und Daily Notes. |
| **⚠️ Fallstricke** | Keine Vault-Strukturänderungen (Ordner anlegen/verschieben). Kein Graph-View oder Tag-Explorer. |

</div>

---

## 🤖 OpenSim NPC Building

KI-gestützte NPCs für OpenSimulator-Welten.

<div class="skill-card">

### 📌 Auf einen Blick

| Skill | Beschreibung |
|-------|-------------|
| **opensim-npc-building** | Bau-Workflows für den OpenSim NPC Bot (Ollama Bot) |
| **opensim-ossl-npc-bridge** | OSSL NPC + Hermes Agent Bridge — Realtime AI NPC |

</div>

<div class="skill-card">

### 🏗️ opensim-npc-building

| | |
|---|---|
| **🎯 Auslöser** | `„NPC bauen für OpenSim"` · `„Ollama Bot"` |
| **⚡ Features** | Bau-Workflows für den OpenSim NPC Bot. Nutzt Ollama für lokale KI und GridClient zur Steuerung in OpenSim. |
| **⚠️ Fallstricke** | Erfordert laufenden Ollama-Dienst. GridClient muss kompatibel zur OpenSim-Version sein. |

</div>

<div class="skill-card">

### 🔗 opensim-ossl-npc-bridge

| | |
|---|---|
| **🎯 Auslöser** | `„Echtzeit-NPC in OpenSim"` · `„OSSL + Hermes"` |
| **⚡ Features** | Brücke zwischen OpenSims OSSL-Skriptsprache und Hermes Agent. NPCs kommunizieren in Echtzeit mit Hermes' KI — für dynamische Dialoge und reaktives Verhalten. |
| **⚠️ Fallstricke** | Latenz bei langsamer Netzwerkanbindung. OSSL-Rechte im OpenSim müssen freigegeben sein. |

</div>

---

## 💼 Productivity

Dokumente, Präsentationen, Termine, E-Mails und mehr.

<div class="skill-card">

### 📌 Auf einen Blick

| Skill | Beschreibung |
|-------|-------------|
| **airtable** | Airtable REST API via curl. CRUD, Filter, Upserts |
| **google-workspace** | Gmail, Kalender, Drive, Docs, Sheets via gws CLI oder Python |
| **linear** | Linear: Issues, Projekte, Teams via GraphQL + curl |
| **maps** | Geocoding, POIs, Routen, Zeitzonen via OpenStreetMap/OSRM |
| **nano-pdf** | PDF-Text/Tippfehler/Titel editieren via nano-pdf CLI |
| **notion** | Notion API via curl: Pages, Databases, Blocks, Search |
| **ocr-and-documents** | Text aus PDFs/Scans extrahieren (pymupdf, marker-pdf) |
| **powerpoint** | .pptx-Präsentationen erstellen, lesen, bearbeiten |

</div>

<div class="skill-card">

### 🧩 google-workspace

| | |
|---|---|
| **🎯 Auslöser** | `„Schreib ne Mail"` · `„Termin im Kalender"` · `„Google Doc lesen"` |
| **⚡ Features** | Vollständige Integration: Mails senden/lesen via Gmail, Termine verwalten im Kalender, Dokumente bearbeiten in Docs/Sheets. |
| **⚠️ Fallstricke** | OAuth-Refresh-Token nötig. Rate-Limits bei vielen API-Calls. Kein Zugriff auf Google Chat/Meet. |

</div>

<div class="skill-card">

### 🧩 notion

| | |
|---|---|
| **🎯 Auslöser** | `„Notion-Seite lesen"` · `„Datenbank in Notion"` · `„Eintrag erstellen"` |
| **⚡ Features** | Steuert Notion via REST API: Pages lesen/schreiben, Datenbanken abfragen, Blöcke manipulieren, suchen. |
| **⚠️ Fallstricke** | Notion-API-Token erforderlich. Kein Zugriff auf geschützte Seiten ohne Integration-Einladung. |

</div>

<div class="skill-card">

### 🧩 ocr-and-documents

| | |
|---|---|
| **🎯 Auslöser** | `„Scan einscannen"` · `„PDF als Text"` · `„Dokument auslesen"` |
| **⚡ Features** | Extrahiert Text aus PDFs und Bildern via pymupdf und marker-pdf. Erkennt Tabellen, Layouts und Strukturen. |
| **⚠️ Fallstricke** | Handschrift wird nicht erkannt. Sehr große PDFs (>100 Seiten) können timeouten. |

</div>

<div class="skill-card">

### 🧩 nano-pdf

| | |
|---|---|
| **🎯 Auslöser** | `„PDF-Tippfehler korrigieren"` · `„PDF-Titel ändern"` |
| **⚡ Features** | Gezielte Text-Änderungen in PDFs — Tippfehler korrigieren, Titel ändern, Texte ersetzen — ohne Neu-Generierung. |
| **⚠️ Fallstricke** | Nur für digitale (nicht gescannte) PDFs. Layout kann bei Ersetzung längerer Texte brechen. |

</div>
