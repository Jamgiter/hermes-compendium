# Multi-Platform Setup 📱

Hermes Agent kann über **19 Messaging-Plattformen** mit dir chatten – genau wie im Terminal, aber von überall. Das Gateway ermöglicht den Zugriff per Telegram, Discord, Signal, WhatsApp, Yuanbao, QQBot, Teams & Co.

---

## 🔧 Gateway Grundlagen

Das Gateway ist der Dienst, der Hermes mit den Plattformen verbindet.

```bash
hermes gateway setup       # Interaktive Plattform-Einrichtung
hermes gateway run         # Gateway starten (Vordergrund)
hermes gateway install     # Als Systemdienst installieren
hermes gateway start       # Starten
hermes gateway stop        # Stoppen
hermes gateway restart     # Neustarten
hermes gateway status      # Status prüfen
```

### Gateway als Systemdienst

Damit Hermes auch läuft, wenn du nicht eingeloggt bist:

```bash
hermes gateway install     # Installiert systemd-Unit
sudo loginctl enable-linger $USER  # Erlaubt User-Services nach Logout
```

> **💡 Tipp:** Auf dem Netcup-Rootserver installiert, kannst du 24/7 mit Hermes chatten!

---

## 📱 Telegram

Telegram ist der einfachste Weg – schnelle Bot-API, unkompliziert.

### Einrichtung

1. **Bot erstellen**  
   Öffne [@BotFather](https://t.me/botfather) in Telegram und sende:
   ```
   /newbot
   ```
   Folge den Anweisungen (Name + Username, muss auf `bot` enden).

2. **Token kopieren**  
   BotFather sendet dir einen HTTP-API-Token – den sicher aufbewahren!

3. **Bot konfigurieren**  
   ```bash
   hermes gateway setup
   ```
   Wähle `Telegram` und füge den Token ein.

4. **Bot starten**  
   ```bash
   hermes gateway run
   ```
   Schreib deinem Bot auf Telegram eine Nachricht – er antwortet!

### User-ID ermitteln

Damit der Bot nur auf deine Nachrichten hört:

- [@userinfobot](https://t.me/userinfobot) – sende `/start`
- Oder [@getmyid_bot](https://t.me/getmyid_bot)

---

## 💬 Discord

Discord eignet sich für Communities + Sprachchat.

### Einrichtung

1. **Developer Portal öffnen**  
   Gehe zu [discord.com/developers/applications](https://discord.com/developers/applications)

2. **Neue Application erstellen**  
   Klick auf **"New Application"** → Name vergeben → **"Create"**

3. **Bot erstellen**  
   Links auf **"Bot"** → **"Add Bot"** → **"Yes, do it!"**

4. **Token kopieren**  
   Unter dem Bot-Namen → **"Copy"** (das ist der Bot-Token)

5. **Intents aktivieren**  
   Unter "Privileged Gateway Intents" alle drei aktivieren:
   - ✅ Presence Intent
   - ✅ Server Members Intent  
   - ✅ **Message Content Intent** ← GANZ WICHTIG!
   - **"Save Changes"** klicken

6. **Bot einladen**  
   Links auf **"OAuth2"** → **"URL Generator"**:
   - Scope: `bot`
   - Berechtigungen: `Nachrichten senden`, `Nachrichtenverlauf lesen`, `Kanäle lesen`
   - URL öffnen → Server auswählen → autorisieren

7. **Discord-Gateway einrichten**  
   ```bash
   hermes gateway setup
   ```
   Wähle `Discord`, füge Bot-Token, Server-ID und Channel-ID ein.

### Benötigte IDs

- **Server-ID**: Rechtsklick auf Server → "Server-ID kopieren"  
  (Entwicklermodus in Discord-Einstellungen aktivieren)
- **Channel-ID**: Rechtsklick auf Channel → "Channel-ID kopieren"

---

## 📧 Andere Plattformen

Hermes unterstützt 19 Plattformen im Gateway (+ via Plugin-System erweiterbar):

| Plattform | Befehl | Besonderheit |
|-----------|--------|-------------|
| **WhatsApp** | `hermes gateway setup` | Business API oder Baileys |
| **Signal** | `hermes gateway setup` | Signal-CLI nötig, native Formatierung |
| **Slack** | `hermes gateway setup` | channel_skill_bindings, strict_mention, native Slash-Commands |
| **Matrix** | `hermes gateway setup` | Eigenes Matrix-Konto |
| **Email** | `hermes gateway setup` | IMAP/SMTP-Zugang |
| **SMS** | `hermes gateway setup` | Twilio-Konto nötig |
| **Mattermost** | `hermes gateway setup` | Eigenes Mattermost |
| **Feishu / Lark** | `hermes gateway setup` | App Credentials |
| **DingTalk** | `hermes gateway setup` | DingTalk Bot |
| **WeChat (WX)** | `hermes gateway setup` | via WeCom-Kanal |
| **iMessage** | `hermes gateway setup` | via BlueBubbles |
| **Home Assistant** | `hermes gateway setup` | HA-Token |
| **QQBot** (17.) | `hermes gateway setup` | QQ Official API v2, QR-Scan-Setup |
| **Yuanbao / 元宝** (18.) | `hermes gateway setup` | Tencent-Platform, Text + Media |
| **Microsoft Teams** (19.) | `hermes gateway setup` | Als Plugin, erste Plugin-Plattform |

---

## 🛡️ Sicherheit im Gateway

### Berechtigungen

Nach der ersten Nachricht von dir musst du Hermes autorisieren:

```
/approve   # Genehmigen
/deny      # Ablehnen
```

### Slash-Commands im Chat

Auch auf Plattformen verfügbar:

| Befehl | Funktion |
|--------|----------|
| `/help` | Alle Befehle anzeigen |
| `/new` | Neue Session starten |
| `/model` | Modell wechseln |
| `/retry` | Letzte Antwort wiederholen |
| `/platforms` | Gateway-Status anzeigen |
| `/restart` | Gateway neustarten |
| `/sethome` | Aktuellen Chat als Home setzen |

---

## 💡 Tipp: Server-Betrieb

Für **24/7-Betrieb** empfiehlt sich ein kleiner Rootserver (z.B. Netcup):

```bash
# Auf dem Server installieren
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# Gateway als Dienst
hermes gateway install
```

Dann kannst du von überall per Handy mit Hermes chatten – egal ob du zu Hause bist, unterwegs oder im Urlaub! 🌍
