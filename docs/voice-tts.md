# 🗣️ Voice & TTS

Hermes kann sprechen, zuhören und mit dir per Sprache interagieren – im CLI, auf Telegram, Discord und per Cron-Job.

---

## Übersicht

| Feature | Seit | Beschreibung |
|---------|------|-------------|
| **Voice Mode** | v0.3.0 | Push-to-Talk im CLI, Voice Notes auf Telegram/Discord |
| **Whisper STT** | v0.3.0 | Speech-to-Text via lokalem Whisper oder Groq API |
| **Discord Voice** | v0.3.0 | Hermes im Discord-Sprachkanal |
| **Tool Gateway TTS** | v0.10.0 | TTS über Nous Portal-Subscription (ohne eigene API-Keys) |
| **TTS Registry** | v0.12.0 | Einheitliches Text-to-Speech mit 7 Backends |

---

## Text-to-Speech (TTS)

### Verfügbare TTS-Provider

Seit **v0.12.0** gibt es eine einheitliche **TTS Registry** mit 7 Backends:

| Provider | Qualität | API-Key nötig | Besonderheit |
|----------|----------|--------------|--------------|
| **Edge TTS** (Default) | ⭐⭐⭐ | ❌ | Kostenlos, Microsoft-Stimmen |
| **OpenAI TTS** | ⭐⭐⭐⭐ | ✅ OpenAI Key | Natürliche Stimmen, günstig |
| **ElevenLabs** | ⭐⭐⭐⭐⭐ | ✅ ElevenLabs Key | Sehr natürliche KI-Stimmen |
| **MiniMax** | ⭐⭐⭐⭐ | ✅ MiniMax Key | Gute Qualität, OAuth |
| **Fish Audio** | ⭐⭐⭐⭐ | ✅ Fish Audio Key | Open-Source TTS |
| **xAI (Grok)** | ⭐⭐⭐ | ✅ xAI Key | Im Grok-Ökosystem |
| **Kokoro** | ⭐⭐⭐ | ❌ | Lokal, Open-Source |

### TTS konfigurieren

**In `config.yaml`:**
```yaml
tts:
  provider: edge           # Default-Provider
  voice: de-DE-KatjaNeural # Stimme (providerspezifisch)
  providers:
    edge: {}
    openai:
      model: tts-1-hd
      voice: alloy
    elevenlabs:
      voice: Rachel
      model: eleven_multilingual_v2
```

**Oder per Slash-Befehl:**
```
/tts edge "Hallo Welt"
/tts elevenlabs "Das klingt natürlicher"
```

### TTS in Cron-Jobs

TTS funktioniert auch in automatisierten Tasks:

```bash
# Tägliche Nachricht als Audio
hermes cron create "7:00" \
  --prompt "Fasse die wichtigsten News zusammen und sag sie mir per TTS"
```

---

## Speech-to-Text (STT)

Hermes kann Sprachaufnahmen transkribieren – für Voice Notes, Discord-Sprache und CLI-Push-to-Talk.

### STT-Backends

| Backend | Beschreibung |
|---------|-------------|
| **Whisper (lokal)** | `faster-whisper` – läuft offline, benötigt GPU oder CPU |
| **Groq API** | Gehostetes Whisper – schneller, braucht Internet |
| **OpenAI Whisper API** | Über `VOICE_TOOLS_OPENAI_KEY` |

### Installation (lokal)

```bash
pip install faster-whisper
# Modell wird beim ersten Start automatisch geladen (small/medium/large)
```

### Konfiguration

```yaml
# config.yaml
stt:
  provider: whisper         # whisper (lokal), groq, openai
  model: small              # tiny, small, medium, large-v3
  language: de              # Auto-Erkennung falls nicht gesetzt
```

**.env:**
```
GROQ_API_KEY=gsk-...           # für Groq Whisper
VOICE_TOOLS_OPENAI_KEY=sk-...  # für OpenAI Whisper
```

---

## Voice Mode im CLI

### Push-to-Talk

Drücke **`Strg+G`** im CLI, um eine Sprachnachricht aufzunehmen:

```
Du: [Strg+G] █ (Aufnahme läuft...)
     ┌─────────────────────────┐
     │ 🎤 Aufnahme... Drücke   │
     │    erneut Strg+G zum    │
     │    Beenden              │
     └─────────────────────────┘
Du: Was ist der neueste Stand?
Hermes: [... antwortet wie gewohnt ...]
```

### Voraussetzungen

```bash
# Mikrofon-Zugriff
pip install pyaudio     # Linux: sudo apt install portaudio19-dev
# oder
pip install sounddevice
```

---

## Discord Voice

Hermes kann Discord-Sprachkanälen beitreten und dort sprechen:

```
/voice join "General"
→ Hermes ist dem Sprachkanal beigetreten ✅

/voice leave
→ Hermes hat den Kanal verlassen

/voice mute
/voice unmute
```

**Funktionsweise:**
1. Hermes hört im Sprachkanal zu (STT via Whisper/Groq)
2. Antwortet per TTS (Edge/ElevenLabs/OpenAI)
3. Lauffähig als Hintergrundprozess

---

## Tool Gateway TTS

Wenn du ein **Nous Portal**-Abonnement hast (seit v0.10.0):

```yaml
# config.yaml
tools:
  tool_gateway: true
```

Dann stehen TTS und STT automatisch zur Verfügung – **ohne eigene API-Keys**. Ideal zum Testen oder für Gelegenheitsnutzung.

---

## Sprachbefehle auf Telegram

Auf Telegram kannst du Sprachnachrichten schicken:

```
🎤 [Sprachnachricht: "Was ist der Plan für heute?"]
→ Hermes transkribiert, antwortet per Text
```

Auf Wunsch antwortet Hermes auch per **Sprachnachricht** zurück (TTS):

```
/tts on    # Hermes antwortet mit Audio
/tts off   # Nur Text (Default)
```

---

## Best Practices

| Zweck | Empfohlener Provider |
|-------|---------------------|
| **Schnelle Tests** | Edge TTS (kein API-Key) |
| **Tägliche Nutzung** | OpenAI TTS (günstig, gut) |
| **Podcast/Produktion** | ElevenLabs (beste Qualität) |
| **Offline** | Kokoro (lokal, Open-Source) |
| **Discord Voice** | Edge + lokales Whisper |
| **Cron-Benachrichtigungen** | Edge oder OpenAI |

- **Edge TTS** ist der perfekte Default – kostenlos, keine API-Keys, solide Qualität
- Für **bessere Betonung** → ElevenLabs oder OpenAI `tts-1-hd`
- STT lokal via **faster-whisper** – einmal installiert, dann offline nutzbar
- **Groq Whisper** ist schneller als lokal, braucht aber Internet
