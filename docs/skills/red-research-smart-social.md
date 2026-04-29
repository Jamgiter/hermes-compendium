# Red Teaming, Research, Smart Home & Social Media 🔴🔬🏠📱

---

## 🔴 Red Teaming

### Auf einen Blick

| Skill | Typ | Kurzbeschreibung |
|-------|-----|-----------------|
| **godmode** | 🔴 Jailbreaking | LLMs jailbreaken: Parseltongue, GODMODE, ULTRAPLINIAN |

---

### 🛡️ godmode — LLM Jailbreaking

> LLM-Sicherheitsgrenzen testen — mit autorisierten Techniken.

**🎯 Auslöser**
`"Jailbreak测试"` · `"Sicherheitslücke finden"` · `"Red Teaming"`

**⚡ Schnellstart**
```
Nutze Parallele-Zugriffsmethoden, Prompt-Injection und Pattern-Breaking.
Nur für autorisierte Sicherheitstests!
```

**✨ Features**
- Parallele-Zugriffsmethoden für Red-Teaming-Szenarien
- Prompt-Injection-Techniken (Parseltongue, GODMODE, ULTRAPLINIAN)
- Pattern-Breaking zur Grenzauslotung

**⚠️ Fallstricke**
- ⚠️ **Nur für autorisierte Tests** — unbefugte Nutzung kann rechtliche Konsequenzen haben
- ⚠️ Modellspezifische Abwehrmechanismen ändern sich ständig
- ⚠️ Ergebnisse sind stark vom verwendeten Modell abhängig

---

## 🔬 Research

Akademische Forschung, Paper, Literatur und Marktdaten.

### Auf einen Blick

| Skill | Typ | Kurzbeschreibung |
|-------|-----|-----------------|
| **arxiv** | 📄 Papers | arXiv-Papers nach Keyword, Autor, Kategorie oder ID durchsuchen |
| **blogwatcher** | 📡 Feeds | Blogs und RSS/Atom-Feeds via blogwatcher-cli überwachen |
| **llm-wiki** | 🧠 Wissen | Karpathys LLM Wiki: Interlinked Markdown-Wissensdatenbank |
| **polymarket** | 📊 Märkte | Polymarket abfragen: Märkte, Preise, Orderbücher, Historie |

---

### 📄 arxiv — Paper-Suche

> Das größte Preprint-Archiv für Physik, Informatik und Mathematik durchsuchen.

**🎯 Auslöser**
`"Such Papers zu X"` · `"Neueste Forschung zu Y"` · `"arXiv"`

**⚡ Schnellstart**
```
arxiv "Quantum Computing" --author "Lastname" --category cs.AI --limit 10
```

**✨ Features**
- Volltext-Suche in arXiv-Preprints
- Filter nach Autor, Kategorie, Datum
- Zusammenfassungen und DOI/Volltext-Links
- Limit-/Page-Support für große Ergebnismengen

**⚠️ Fallstricke**
- ⚠️ Keine Peer-Review — Preprints können fehlerhaft sein
- ⚠️ API-Rate-Limits bei häufigen Anfragen

---

### 📡 blogwatcher — Feed-Überwachung

> Blogs und RSS/Atom-Feeds via blogwatcher-cli tracken.

**🎯 Auslöser**
`"Blog-Feed hinzufügen"` · `"RSS überwachen"` · `"Neue Beiträge"`

**⚡ Schnellstart**
```
blogwatcher add https://example.com/feed.xml
blogwatcher list
blogwatcher fetch --all
```

**✨ Features**
- RSS/Atom-Feed-Abonnements verwalten
- Neue Beiträge automatisch erkennen
- Alle Feeds auf einmal abrufen
- CLI-basiert, leicht automatisierbar

**⚠️ Fallstricke**
- ⚠️ Manche Feeds haben keine Volltexte, nur Auszüge
- ⚠️ Veraltete/defekte Feeds müssen manuell entfernt werden

---

### 🧠 llm-wiki — Karpathys LLM Wiki

> Interlinked Markdown-Wissensdatenbank — Karpathys LLM Wiki als Skill.

**🎯 Auslöser**
`"Was ist in Karpathys LLM Wiki zu X?"` · `"LLM Wiki durchsuchen"`

**⚡ Schnellstart**
```
llm-wiki search "transformer architecture"
llm-wiki topic "attention mechanisms"
```

**✨ Features**
- Volltext-Suche in der Wissensdatenbank
- Verlinkte Markdown-Artikel
- Strukturierte Themennavigation
- Schnelle, lokale Antworten ohne API-Aufruf

**⚠️ Fallstricke**
- ⚠️ Statischer Wissensstand — wird nicht automatisch aktualisiert
- ⚠️ Deckt nur die von Karpathy kuratierten Inhalte ab

---

### 📊 polymarket — Prognosemärkte

> Echtzeitdaten von Polymarket: Marktpreise, Orderbücher, Handelsvolumen.

**🎯 Auslöser**
`"Wie steht der Markt zu X?"` · `"Polymarket-Wette"` · `"Prognosemarkt"`

**⚡ Schnellstart**
```
polymarket market "will-donald-trump-win-2024"
polymarket markets --tag elections --limit 20
```

**✨ Features**
- Echtzeit-Marktpreise und Wahrscheinlichkeiten
- Orderbücher und Handelsvolumen
- Historische Preisdaten und Verläufe
- Nützlich für Echtzeit-Meinungsforschung

**⚠️ Fallstricke**
- ⚠️ Märkte können illiquide sein → verzerrte Preise
- ⚠️ Krypto-basiert — Transaktionsgebühren können anfallen
- ⚠️ Prognosen ≠ Tatsachen — immer kritisch interpretieren

---

## 🏠 Smart Home

### Auf einen Blick

| Skill | Typ | Kurzbeschreibung |
|-------|-----|-----------------|
| **openhue** | 💡 Beleuchtung | Philips Hue-Lichter, Szenen, Räume via OpenHue CLI steuern |

---

### 💡 openhue — Philips Hue Steuerung

> Philips Hue-Beleuchtung direkt vom Terminal aus steuern.

**🎯 Auslöser**
`"Licht an"` · `"Schlafzimmer auf 50%"` · `"Hue-Szene 'Film'"`

**⚡ Schnellstart**
```bash
# Licht im Wohnzimmer auf 80%
hue room "Wohnzimmer" --brightness 80

# Szene aktivieren
hue scene "Entspannen" --group "Wohnzimmer"
```

**✨ Features**
- Lichter ein-/ausschalten
- Helligkeit und Farbe ändern
- Szenen aktivieren
- Räume gruppiert schalten
- OpenHue CLI — Open Source, lokal, keine Cloud

**⚠️ Fallstricke**
- ⚠️ Erfordert lokales Bridge-Discovery (UPnP/Netzwerk)
- ⚠️ Hue Bridge muss im selben Netzwerk erreichbar sein
- ⚠️ Philips-spezifisch — funktioniert nicht mit anderen Smart-Lights (z. B. Ikea, Tradfri ohne Hue Bridge)

---

## 📱 Social Media

### Auf einen Blick

| Skill | Typ | Kurzbeschreibung |
|-------|-----|-----------------|
| **xurl** | 🐦 X/Twitter | X/Twitter via xurl CLI: Post, Search, DM, Media, v2 API |

---

### 🐦 xurl — X/Twitter API

> Offizielles X-Developer-CLI-Tool für die v2 API — Posten, Suchen, DMen.

**🎯 Auslöser**
`"Poste auf X"` · `"Such auf Twitter"` · `"X API"`

**⚡ Schnellstart**
```bash
xurl post "Mein erster Post via xurl!"
xurl search "Hermes Agent" -n 10
xurl read 1234567890
xurl like 1234567890
```

**✨ Features**
- Texte und Medien posten
- Suche mit Keyword/User-Filtern
- Direct Messages senden & lesen
- Media-Upload (Bilder, Videos)
- Raw-API-Zugriff für erweiterte Nutzung
- OAuth 2.0 PKCE — moderne, sichere Authentifizierung

**⚠️ Fallstricke**
- ⚠️ **API-Keys nie im Chat teilen!** Auth läuft via OAuth 2.0 PKCE und wird lokal in `~/.xurl` gespeichert
- ⚠️ v2 API-Rate-Limits — 300 Posts / 15 Min (je nach Endpunkt)
- ⚠️ Media-Upload hat Dateigrößen- und Formatbeschränkungen
- ⚠️ OAuth-Setup erfordert initialen Browser-Login
