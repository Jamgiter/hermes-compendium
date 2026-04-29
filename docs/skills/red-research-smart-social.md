# Red Teaming, Research, Smart Home & Social Media 🔴🔬🏠📱

---

## 🔴 Red Teaming

| Skill | Beschreibung |
|-------|-------------|
| **godmode** | LLMs jailbreaken: Parseltongue, GODMODE, ULTRAPLINIAN |

**Auslöser:** „Jailbreak測試", „Sicherheitslücke finden", „Red Teaming"

Der Godmode-Skill enthält Techniken zum Testen von LLM-Sicherheitsgrenzen. Nutzt Parallele-Zugriffsmethoden, Prompt-Injection und Pattern-Breaking. Nur für autorisierte Sicherheitstests!

---

## 🔬 Research

Akademische Forschung, Paper, Literatur und Marktdaten.

| Skill | Beschreibung |
|-------|-------------|
| **arxiv** | arXiv-Papers nach Keyword, Autor, Kategorie oder ID durchsuchen |
| **blogwatcher** | Blogs und RSS/Atom-Feeds via blogwatcher-cli überwachen |
| **llm-wiki** | Karpathys LLM Wiki: Interlinked Markdown-Wissensdatenbank |
| **polymarket** | Polymarket abfragen: Märkte, Preise, Orderbücher, Historie |

### arxiv

**Auslöser:** „Such Papers zu X", „Neueste Forschung zu Y", „arXiv"

Durchsucht arXiv – das größte Preprint-Archiv für Physik, Informatik und Mathematik. Filter nach Autor, Kategorie, Datum. Holt Zusammenfassungen und Volltext-Links.

### polymarket

**Auslöser:** „Wie steht der Markt zu X?", „Polymarket-Wette", „Prognosemarkt"

Ruft Echtzeitdaten von Polymarket ab: Marktpreise, Orderbücher, Handelsvolumen, Verlauf. Nützlich für Echtzeit-Meinungsforschung zu aktuellen Ereignissen.

---

## 🏠 Smart Home

| Skill | Beschreibung |
|-------|-------------|
| **openhue** | Philips Hue-Lichter, Szenen, Räume via OpenHue CLI steuern |

**Auslöser:** „Licht an", „Schlafzimmer auf 50%", „Hue-Szene 'Film'"

Steuert Philips Hue-Beleuchtung: Lichter ein-/ausschalten, Helligkeit/Farbe ändern, Szenen aktivieren, Räume gruppiert schalten.

```bash
# Licht im Wohnzimmer auf 80%
hue room "Wohnzimmer" --brightness 80

# Szene aktivieren
hue scene "Entspannen" --group "Wohnzimmer"
```

---

## 📱 Social Media

| Skill | Beschreibung |
|-------|-------------|
| **xurl** | X/Twitter via xurl CLI: Post, Search, DM, Media, v2 API |

**Auslöser:** „Poste auf X", „Such auf Twitter", „X API"

xurl ist das offizielle X-Developer-CLI-Tool für die v2 API. Ermöglicht Posts, Suchen, DMs, Media-Upload und Raw-API-Zugriff.

**Wichtige Kommandos:**
```bash
xurl post "Mein erster Post via xurl!"
xurl search "Hermes Agent" -n 10
xurl read 1234567890
xurl like 1234567890
```

**⚠️ Sicherheitshinweis:** API-Keys nie im Chat teilen! Auth läuft via OAuth 2.0 PKCE und wird lokal in `~/.xurl` gespeichert.
