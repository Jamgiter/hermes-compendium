# 📋 Changelog – Hermes Agent Versionshistorie

Alle Releases von Hermes Agent seit der ersten öffentlichen Version – chronologisch absteigend.

> **Aktuelle Version:** v0.12.0 (v2026.4.30) — *The Curator Release*

---

## v0.12.0 — The Curator Release 🧹
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.4.30 · 30. April 2026 · 1.096 Commits · 550 PRs · 213 Contributors</span>

> Hermes Agent kann sich jetzt selbst warten. Ein autonomer **Curator** bewertet, konsolidiert und entfernt Skills im Hintergrund.

- **Autonomous Curator** – `hermes curator` läuft als Hintergrunddienst (7-Tage-Zyklus), bewertet Skill-Bibliotheken, konsolidiert verwandte Skills, entfernt tote Einträge, schreibt Zusammenfassungen
- **Self-Improvement Loop** – Die Hintergrund-Review-Fork (Kern der Selbstverbesserung) ist jetzt eine eigene Klasse mit Config-Unterstützung, besseren Prompts und Fehlerbehandlung
- **ComfyUI v5** – Offizielles CLI + REST, von optional zu **built-in** hochgestuft
- **LM Studio – First-Class Provider** – Eigener Provider mit Auth, `hermes doctor`-Checks, Reasoning Transport, live `/models`-Listing
- **4 neue Provider** – GMI Cloud, Azure AI Foundry, MiniMax OAuth, Arcee AI
- **Microsoft Teams** – Erster Plugin-Plattform-Adapter (Gateway als Plugin-Host)
- **Yuanbao (腾讯元宝)** – 18. Messaging-Plattform
- **Spotify Native Tools** – 7 Tools (play, search, queue, playlists, devices) mit PKCE OAuth, Setup-Wizard, gebündeltem Skill
- **Google Meet Plugin** – Calls beitreten, transkribieren, sprechen
- **`hermes -z` One-Shot Mode** – Nicht-interaktiver Modus für Skripte/Pipelines
- **TTS Registry** – Einheitliches Text-to-Speech mit 7 Backends (Edge, OpenAI, ElevenLabs, MiniMax, Fish Audio, xAI, Kokoro)

---

## v0.11.0 — The Interface Release 🖥️
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.4.23 · 23. April 2026 · 1.556 Commits · 761 PRs · 290 Contributors</span>

> Vollständige React/Ink-Neuentwicklung des TUI, neue Transport-Architektur, 5 neue Inference-Pfade.

- **Neues Ink-basiertes TUI** – React/Ink CLI mit Python JSON-RPC-Backend, Sticky Composer, Live Streaming, OSC-52 Clipboard, `/help` im Chat
- **Transport ABC** – Auslagerung von Format-Konvertierung und HTTP-Transport in pluggbare `agent/transports/`-Schicht (AnthropicTransport, ChatCompletionsTransport, CodexTransport)
- **5 neue Inference-Pfade** – NVIDIA NIM, Arcee AI, Step Plan, Kilo Code, GPT-5.5 über Codex OAuth
- **QQBot** – 17. Plattform (QQ Official API v2)
- **Plugin Surface erweitert** – Plugins können Slash-Befehle registrieren, Tools dispatchen, Tool-Calls blocken, Konfiguration bereitstellen
- **`/steer`** – Mid-Run Agent-Nudges ohne Prompt-Cache-Bruch
- **Shell Hooks** – Shell-Skripte als Lifecycle-Hooks (pre_tool_call, post_tool_call, on_session_start)
- **Webhook Direct-Delivery** – Webhooks können Payloads direkt an Platform-Chats senden (Zero-LLM-Benachrichtigungen)
- **Orchestrator-Rolle** – Subagenten können eigene Worker spawnen, konfigurierbare `max_spawn_depth`

---

## v0.10.0 — The Tool Gateway Release 🌐
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.4.16 · 16. April 2026</span>

> Paid Nous Portal Subscriber erhalten Web Search, Image Generation, TTS und Browser Automation ohne zusätzliche API-Keys.

- **Nous Tool Gateway** – Firecrawl Web Search, FAL Image Generation, TTS, Browser Automation über Portal-Subscription
- Erster Schritt zur Tool-Konsolidierung über Portal

---

## v0.9.0 — The Everywhere Release 📱
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.4.13 · 13. April 2026 · 487 Commits · 269 PRs · 24 Contributors</span>

> Hermes geht mobil: Termux/Android, iMessage, WeChat, lokales Web-Dashboard, Fast Mode.

- **Lokales Web-Dashboard** – Browser-basiertes Management: Config, Sessions, Skills, Gateway
- **Fast Mode (`/fast`)** – Priority Processing für OpenAI & Anthropic
- **iMessage via BlueBubbles** – Vollständige Apple-iMessage-Integration
- **WeChat (Weixin) & WeCom Callback Mode** – Native WeChat-Unterstützung
- **Termux / Android Support** – Hermes nativ auf Android
- **Background Process Monitoring (`watch_patterns`)** – Echtzeit-Überwachung von Hintergrundprozessen
- **Native xAI & Xiaomi MiMo Provider** – Grok + MiMo als First-Class Provider
- **Pluggable Context Engine** – Context-Management als Plugin-Slot
- **Unified Proxy Support** – SOCKS, DISCORD_PROXY, systemweite Auto-Erkennung

---

## v0.8.0 — The Intelligence Release 🧠
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.4.8 · 8. April 2026</span>

> Auto-Benachrichtigungen, kostenloses MiMo v2 Pro, Live-Modell-Wechsel, Google AI Studio.

- **Background Auto-Notifications (`notify_on_complete`)** – Automatische Benachrichtigung bei Task-Ende
- **Free MiMo v2 Pro auf Nous Portal** – Kostenloses Hilfsmodell
- **Live Model Switching (`/model`)** – Modell-/Provider-Wechsel mid-session
- **Self-Optimized GPT/Codex** – Automatische Diagnose und Patches für Tool-Calling-Probleme
- **Google AI Studio (Gemini) Provider** – Native Gemini-Integration
- **Inactivity-Based Timeouts** – Aktivitätsbasierte Timeouts statt Wall-Clock
- **Approval Buttons** – Native Buttons auf Slack & Telegram
- **MCP OAuth 2.1 PKCE** – Standards-konformes OAuth für MCP-Server
- **Centralized Logging** – Strukturierte Logs nach `~/.hermes/logs/` + `hermes logs`-Befehl

---

## v0.7.0 — The Resilience Release 🛡️
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.4.3 · 3. April 2026 · 168 PRs</span>

> Memory-Provider, Credential Pools, Camoufox, Diff-Previews, Security-Fixes.

- **Pluggable Memory Provider Interface** – Honcho, Vektor-Stores, benutzerdefinierte DBs als Memory-Backend
- **Credential Pools** – Mehrere API-Keys pro Provider mit automatischer Rotation
- **Camoufox Anti-Detection Browser** – Stealth-Browsing-Backend
- **Inline Diff Previews** – Visuelle Diff-Anzeige bei Datei-Operationen
- **API Server Session Continuity** – Session-Persistenz über `X-Hermes-Session-Id`
- **ACP Client-Provided MCP Servers** – Editor-MCP-Server als Agent-Tools
- **Secret Exfiltration Blocking** – URL- und Response-Scanning auf Secret-Patterns

---

## v0.6.0 — The Multi-Instance Release 👥
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.3.30 · 30. März 2026 · 95 PRs</span>

> Profile, MCP Server Mode, Docker, Fallback-Provider, 2 neue Plattformen.

- **Profile** – Mehrere isolierte Hermes-Instanzen (eigene Config, Memory, Skills)
- **MCP Server Mode** – Hermes als MCP-Server für Claude Desktop, Cursor, VS Code
- **Docker Container** – Offizielles Dockerfile mit CLI + Gateway
- **Ordered Fallback Provider Chain** – Automatischer Failover zwischen Providern
- **Feishu/Lark** – 2 neue Plattform-Adapter
- **Slack Multi-Workspace OAuth** – Mehrere Workspaces mit einem Gateway
- **Exa Search Backend** – Alternative zu Firecrawl und DuckDuckGo

---

## v0.5.0 — The Hardening Release 🔒
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.3.28 · 28. März 2026 · 50+ Security-Fixes</span>

> Hugging Face Provider, Telegram Topics, Modal SDK, Plugin Hooks, Nix Flake.

- **Hugging Face als Inference Provider** – 400+ Modelle über Nous Portal
- **Telegram Private Chat Topics** – Projekt-basierte Chats mit Skill-Bindung
- **Native Modal SDK** – Ersetzte swe-rex-Abhängigkeit
- **Plugin Lifecycle Hooks aktiviert** – pre_llm_call, post_llm_call, on_session_start/end
- **Nix Flake** – uv2nix Build, NixOS Module
- **Supply Chain Hardening** – Entfernte litellm-Abhängigkeit, gepinnte Dependencies
- **Anthropic Output Limits** – Native max_tokens (128K Opus, 64K Sonnet)

---

## v0.4.0 — The Platform Expansion Release 🚀
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.3.23 · 23. März 2026</span>

> OpenAI-kompatibler API-Server, 6 neue Plattformen, 4 neue Provider, MCP CLI.

- **OpenAI-kompatibler API Server** – `/v1/chat/completions` Endpunkt + `/api/jobs` REST
- **6 neue Plattformen** – Signal, DingTalk, SMS (Twilio), Mattermost, Matrix, Webhook
- **4 neue Provider** – GitHub Copilot, DashScope, Kilo Code, OpenCode Zen/Go
- **MCP Server Management CLI** – `hermes mcp` für Install/Configure/Auth
- **Gateway Prompt Caching** – Anthropic Prompt Cache über Turns hinweg
- **@-Context-Referenzen** – `@file` und `@url` mit Tab-Completion
- **Streaming als Default** – CLI-Streaming standardmäßig aktiv

---

## v0.3.0 — The Streaming & Plugins Release 🔌
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.3.17 · 17. März 2026</span>

> Echtzeit-Streaming, Plugin-Architektur, Native Anthropic, Voice Mode, ACP.

- **Unified Streaming** – Token-für-Token in CLI + allen Gateway-Plattformen
- **Plugin Architecture** – Drop-in Python-Plugins in `~/.hermes/plugins/`
- **Native Anthropic Provider** – Direct API + Claude Code Credential-Discovery
- **Smart Approvals + /stop** – Lernendes Approval-System + sofortiger Stopp
- **Voice Mode** – Push-to-Talk CLI, Voice Notes, Discord Voice, Whisper-Transkription
- **Concurrent Tool Execution** – Parallele Tool-Calls via ThreadPoolExecutor
- **PII Redaction** – Automatische Schwärzung von PII-Daten
- **`/browser connect` via CDP** – Chrome DevTools Protocol für Live-Browser

---

## v0.2.0 — The Foundation Release 🏗️
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.3.12 · 12. März 2026</span>

> Erster getaggter Release seit v0.1.0. Vom internen Projekt zur vollständigen Plattform.

- **Multi-Platform Gateway** – Telegram, Discord, Slack, WhatsApp, Signal, Email, Home Assistant
- **MCP (Model Context Protocol) Client** – Native MCP-Unterstützung (stdio/HTTP)
- **Skills Ecosystem** – 70+ Skills in 15+ Kategorien
- **Centralized Provider Router** – Einheitliche `call_llm()`/`async_call_llm()`-API
- **ACP Server** – VS Code, Zed, JetBrains Integration
- **CLI Skin/Theme Engine** – 7 Built-in Skins + Custom YAML
- **Git Worktree Isolation** – `hermes -w` für isolierte Sessions in Git-Worktrees
- **Filesystem Checkpoints & Rollback** – Auto-Snapshots + `/rollback`
- **3.289 Tests** – Von null auf eine umfassende Test-Suite

---

## 🔮 Ausblick (v0.13+)

Was als Nächstes kommt? Die Hermes-Entwicklung ist rasant – neue Releases erscheinen etwa alle 5–7 Tage. Aktuelle Entwicklungs-Schwerpunkte:

- Weiterer Ausbau des Curator-Systems
- Plugins & MCP-Integration vertiefen
- Performance-Optimierungen
- Neue Plattform-Adapter

> *Stand: April/Mai 2026. Dieses Compendium wird mit jedem neuen Release aktualisiert.*
