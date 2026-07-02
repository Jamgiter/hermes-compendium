# 📋 Changelog – Hermes Agent Versionshistorie

Alle Releases von Hermes Agent seit der ersten öffentlichen Version – chronologisch absteigend.

> **Aktuelle Version:** v0.18.0 (v2026.7.1) — *The Pet & Relay Release*

---

## v0.18.0 — The Pet & Relay Release 🐾
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.7.1 · 1. Juli 2026 · 1.892 Commits</span>

> Petdex-Maskottchen, Relay-Architektur, Google Vertex AI, Computer-Use für alle, Cron-Threads, `/learn` für Skills, In-Place-Kompression, `hermes serve` Backend.

### 🐾 Pet-System
- **Petdex** — Animierte TUI-Maskottchen (Pokédex-Stil) mit Schlüpfen, Füttern und Galerie; OpenRouter + Nous Portal Image-Backend
- **`display.pet`-Config** — Pet-Auswahl pro Profil, TUI-Pet-Bereich, Gateway-RPCs

### 🔄 Relay-Architektur
- **Go-Dormant Transport-Modus** — Scale-to-Zero für inaktive Agenten
- **Multi-Platform-Per-Agent** — Ein Relay-Agent pro Plattform-Identität
- **Wake-Primitive** — Gateway-seitiges Aufwecken schlafender Relay-Instanzen
- **Passthrough Forward** — WS-basierte Forwarding-Pipeline

### 🖥️ Desktop & CLI
- **`hermes serve`** — Headless Backend; Desktop startet nicht mehr `dashboard`
- **`/prompt`** — Prompt im `$EDITOR` verfassen (TUI-Parität)
- **`/reasoning full`** — Vollständiges Thinking sichtbar (nicht nur 10 Zeilen)
- **`/timestamps`** — Timestamps in `/history`-Ausgabe
- **Background Subagents in Statusbar** — CLI + TUI zeigen laufende Subagenten
- **Ctrl+G** — Editierten Draft speichern (TUI-Parität)
- **Blank Slate Setup-Modus** — Minimaler Agent, alles Opt-In

### 🛡️ Sicherheit & Agent
- **Verify-on-Stop** — Automatische Verifikation vor Edit-Abschluss (default OFF)
- **Pre-Verify Hook** — Verifikation vor Tool-Ausführung
- **Coding Instructions** — Konfigurierbare Coding-Anweisungen im Agent-Prompt
- **Security Posture Audit** — Startup-Warnung bei Sicherheitslücken

### 🤖 Neue Provider
- **Google Vertex AI (Gemini)** — OAuth2-basierter Vertex-Provider
- **Antigravity OAuth** — Native Antigravity-Unterstützung
- **Ollama Cloud** — `reasoning_effort`-Support

### 💻 Computer-Use
- **Cross-Platform cua-driver** — macOS/Windows/Linux
- **Desktop-Capture** — Ganzer Bildschirm als Ziel
- **macOS Permission Preflight** — Berechtigungsprüfung im Desktop
- **Telemetry Opt-In** — Telemetrie standardmäßig deaktiviert

### ⏰ Cron-Verbesserungen
- **Thread-preferred Delivery** — Cron-Benachrichtigungen in Threads + DM-Fallback
- **Continuable Cron Jobs** — Session fortsetzbar aus Cron-Delivery
- **Gateway-Warnung** — Hinweis wenn Gateway nicht läuft bei Cron-Erstellung

### 🧠 Skills & Lernen
- **`/learn`** — Skill aus Beschreibung destillieren (Reusable Skill Generator)
- **`cloudflare-temporary-deploy`** — Neuer optionaler Skill
- **Projekt-Workspace-Tools** — Strukturierte Projekt-Fakten für den Agenten

### 📱 Plattformen & Tools
- **WhatsApp Media Delivery** — Native Medien via Baileys-Bridge
- **WhatsApp Owner-Tagging** — Eigene Nachrichten als `[owner reply]` markiert
- **Slack Block Kit** — Native Tabellen-Rendering als Block Kit
- **Teams Attachments** — send_video/send_voice/send_document
- **`web_extract`** — Truncate-and-Store statt LLM-Summarisierung (schneller)
- **Browser Auto-Install** — Chromium bei fehlendem lokalen Binary automatisch installieren
- **FAL Video Gen** — Routed durch Managed Nous Gateway

### 🔧 Infrastruktur
- **In-Place Compression** — Kompression behält eine Session-ID (default on)
- **API Server** — Configurable concurrent-run cap (DoS-Schutz)
- **Dashboard** — Auto-SSO-Redirect, Gateway-Busy-Status, Chronos-Metrik-Exposition
- **Plugins** — `tool_override`-Grant mit Consent-Prompt
- **Process SIGTERM→SIGKILL** — Grace-Frist vor hartem Kill

---

## v0.17.0 — The Reach Release 🌊
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.6.19 · 19. Juni 2026 · ~1.475 Commits · ~800 PRs · 300+ Issues closed · 245 Contributors</span>

> Hermes reicht weiter — iMessage via Photon, Desktop-App-Reife, Background-Subagents, Image-to-Image, Dashboard-Profil-Builder, Cursor Composer via xAI, Automation Blueprints, Raft-Agent-Netzwerk, Memory-Batch-Operations, Skills Hub-Rehaul.

### ✨ Highlights

- **iMessage via Photon Spectrum** — Neuer Plattform-Plugin, kein Mac-Relay nötig. `hermes photon login` mit Device-Code OAuth, gRPC-native, Markdown, Emoji-Reactions, Outbound-Media. Kostenloser Start, nichts selbst zu hosten ([#32348](https://github.com/NousResearch/hermes-agent/pull/32348), [#42582](https://github.com/NousResearch/hermes-agent/pull/42582), [#44713](https://github.com/NousResearch/hermes-agent/pull/44713) — @teknium1)
- **Raft Agent Network** — Hermes tritt dem Raft-Netzwerk als Gateway-Channel bei. Raft kann Hermes per Wake-Channel aufweben — Privacy-by-Contract: nur Metadaten, keine Nachrichteninhalte ([#48210](https://github.com/NousResearch/hermes-agent/pull/48210) — @xxchan, @teknium1)
- **Desktop-App-Reife** — Neubindbare Tastenkürzel, native OS-Notifikationen, Live-Subagent-Watch-Windows, Composer-Modell-Selektor mit Presets, VS-Code-Theme-Unterstützung, RTL/Bidi, resizable Terminal-Pane, per-Thread-Composer-Drafts, Tool-Backend-Installation aus der GUI ([#45866](https://github.com/NousResearch/hermes-agent/pull/45866), [#40660](https://github.com/NousResearch/hermes-agent/pull/40660), [#47060](https://github.com/NousResearch/hermes-agent/pull/47060), [#46959](https://github.com/NousResearch/hermes-agent/pull/46959), [#43292](https://github.com/NousResearch/hermes-agent/pull/43292), [#44596](https://github.com/NousResearch/hermes-agent/pull/44596) — @OutThisLife, @teknium1)
- **Background/Async Subagents** — `delegate_task(background=true)` startet Subagenten im Hintergrund; du arbeitest weiter, das Ergebnis kommt als neuer Turn ([#40946](https://github.com/NousResearch/hermes-agent/pull/40946), [#46968](https://github.com/NousResearch/hermes-agent/pull/46968) — @teknium1)
- **Image-to-Image / Editing** — `image_generate` kann bestehende Bilder bearbeiten/transformieren, nicht nur neu generieren. Über alle unterstützten Backends ([#48705](https://github.com/NousResearch/hermes-agent/pull/48705) — @teknium1)
- **Automation Blueprints** — Parameterisierte Automations-Vorlagen ohne Cron-Syntax. Einmal definieren, überall nutzbar: Dashboard-Formular, Slash-Befehl, Agent-Gespräch ([#41309](https://github.com/NousResearch/hermes-agent/pull/41309) — @teknium1)
- **Cursor Composer via xAI** — `grok-composer-2.5-fast` im xAI OAuth Model Picker. Dein xAI-Abo + Hermes-Agent-Loop + Composers Coding-Speed ([#47908](https://github.com/NousResearch/hermes-agent/pull/47908) — @teknium1)
- **Dashboard Profil-Builder** — Komplette Profile aus dem Browser erstellen: Modell, Skills, MCPs — ohne config.yaml-Handarbeit. Multi-Profil-Management auf einer Seite ([#39084](https://github.com/NousResearch/hermes-agent/pull/39084), [#44007](https://github.com/NousResearch/hermes-agent/pull/44007) — @teknium1)
- **Skills Hub Browser Rehaul** — Connected Hubs, Featured-Sektion, Skill-Vorschau, Security-Scan. Skills-Browsing als echte Erfahrung ([#40384](https://github.com/NousResearch/hermes-agent/pull/40384), [#43398](https://github.com/NousResearch/hermes-agent/pull/43398) — @teknium1)
- **Memory Batch Operations** — `memory`-Tool mit `operations`-Array: atomares Add/Replace/Remove gegen das Char-Budget in einem Call ([#48507](https://github.com/NousResearch/hermes-agent/pull/48507) — @teknium1)
- **WhatsApp Business Cloud API** — Offizieller Meta-Adapter, kein Bridge-Prozess ([#44331](https://github.com/NousResearch/hermes-agent/pull/44331), [#43921](https://github.com/NousResearch/hermes-agent/pull/43921) — @jquesnelle, @teknium1)
- **Telegram Bot API 10.1** — Rich Messages, besseres Formatting, sauberes Long-Message-Handling ([#44829](https://github.com/NousResearch/hermes-agent/pull/44829), [#45584](https://github.com/NousResearch/hermes-agent/pull/45584), [#45953](https://github.com/NousResearch/hermes-agent/pull/45953) — @teknium1)
- **Dashboard Auth gehärtet** — 401 für Token-Endpoints hinter OAuth, WS-Auth via Dashboard-Token, Warnung bei abgelehntem public_url ([#42578](https://github.com/NousResearch/hermes-agent/pull/42578) — @benbarclay, @teknium1)
- **Curator-Kostenoptimierung** — Konsolidierung jetzt Opt-in (`curator.consolidate: true`); Routine-Runs kosten 0 Tokens ([#47840](https://github.com/NousResearch/hermes-agent/pull/47840) — @teknium1)

### 🖥️ Hermes Desktop App

- Rebindable Keyboard-Shortcuts-Panel; native OS-Notifications mit per-Type-Toggles; Turn-Completion-Cue + Dismissable-Error-Banner ([#40660](https://github.com/NousResearch/hermes-agent/pull/40660), [#45866](https://github.com/NousResearch/hermes-agent/pull/45866), [#42480](https://github.com/NousResearch/hermes-agent/pull/42480), [#47985](https://github.com/NousResearch/hermes-agent/pull/47985) — @OutThisLife, @teknium1)
- Live-Subagent-Watch-Windows; Composer-Status-Stack + Editable Prompts; Chat-in-own-Window; New-Session Compact-Window-Hotkey ([#47060](https://github.com/NousResearch/hermes-agent/pull/47060), [#44630](https://github.com/NousResearch/hermes-agent/pull/44630), [#43219](https://github.com/NousResearch/hermes-agent/pull/43219), [#46951](https://github.com/NousResearch/hermes-agent/pull/46951) — @OutThisLife, @teknium1)
- Composer-Model-Selector + per-Model-Presets; VS-Code-Marketplace-Themes installierbar; Window-Translucency-Slider; Unified-Overlay-Design + BrandMark + Onboarding-Redesign ([#46959](https://github.com/NousResearch/hermes-agent/pull/46959), [#43292](https://github.com/NousResearch/hermes-agent/pull/43292), [#42286](https://github.com/NousResearch/hermes-agent/pull/42286), [#45086](https://github.com/NousResearch/hermes-agent/pull/45086), [#40708](https://github.com/NousResearch/hermes-agent/pull/40708) — @teknium1, @OutThisLife)
- Resizable VS-Code-Themed Terminal-Pane; Auto-RTL/Bidi Text-Direction; Mac-Style Session-Switcher (^Tab / ^1-9); Worktree-Aware Sidebar-Grouping; Hover-Reveal Collapsed Sidebars ([#42521](https://github.com/NousResearch/hermes-agent/pull/42521), [#44596](https://github.com/NousResearch/hermes-agent/pull/44596), [#43111](https://github.com/NousResearch/hermes-agent/pull/43111), [#45273](https://github.com/NousResearch/hermes-agent/pull/45273), [#41670](https://github.com/NousResearch/hermes-agent/pull/41670), [#41751](https://github.com/NousResearch/hermes-agent/pull/41751) — @OutThisLife)
- Arrow-Key History + Queue-Editing im Composer; Full-Command-Inline aus Approval-Bar; Follow-Streaming-at-Bottom + Jump-to-Bottom; Cron-Jobs im Sidebar + Dashboard-Scheduler ([#40234](https://github.com/NousResearch/hermes-agent/pull/40234), [#44864](https://github.com/NousResearch/hermes-agent/pull/44864), [#45263](https://github.com/NousResearch/hermes-agent/pull/45263), [#40684](https://github.com/NousResearch/hermes-agent/pull/40684) — @OutThisLife, @teknium1)
- Desktop Pets — Pop-out Overlay + Notifications ([#47938](https://github.com/NousResearch/hermes-agent/pull/47938) — @teknium1)
- Full Tool-Backend Config in Settings; Tool-Backend GUI-Install; Chat GUI Uninstall; YOLO-Toggle per Shift+Click; /browser connect on local gateway ([#41232](https://github.com/NousResearch/hermes-agent/pull/41232), [#40559](https://github.com/NousResearch/hermes-agent/pull/40559), [#40355](https://github.com/NousResearch/hermes-agent/pull/40355), [#41666](https://github.com/NousResearch/hermes-agent/pull/41666), [#47245](https://github.com/NousResearch/hermes-agent/pull/47245) — @teknium1, @OutThisLife)
- Japanisch + Traditionell Chinesisch Sprachumschaltung ([#40114](https://github.com/NousResearch/hermes-agent/pull/40114))
- "Restart Gateway" (umbenannt aus "Restart Messaging") im Statusbar + Toasts; Logs selectable/copyable ([#49094](https://github.com/NousResearch/hermes-agent/pull/49094) — @OutThisLife)
- Remote Media Relay — Images/PDFs anhängen und Agent-Bilder übers Netzwerk darstellen ([#41336](https://github.com/NousResearch/hermes-agent/pull/41336), [#42634](https://github.com/NousResearch/hermes-agent/pull/42634) — @teknium1)

### 📊 Web Dashboard

- Full-Featured Profil-Builder (Modell + Skills + MCPs); Multi-Profil-Management + Global Profile Switcher; Session Switcher Panel ([#39084](https://github.com/NousResearch/hermes-agent/pull/39084), [#44007](https://github.com/NousResearch/hermes-agent/pull/44007), [#43808](https://github.com/NousResearch/hermes-agent/pull/43808), [#49077](https://github.com/NousResearch/hermes-agent/pull/49077) — @teknium1)
- Skills Hub Browser Rehaul — Connected Hubs, Featured, Preview + Security Scan; SKILL.md Editor; MCP Catalog Detail; Tool-Backend Config in GUI ([#40384](https://github.com/NousResearch/hermes-agent/pull/40384), [#44231](https://github.com/NousResearch/hermes-agent/pull/44231), [#48520](https://github.com/NousResearch/hermes-agent/pull/48520), [#40418](https://github.com/NousResearch/hermes-agent/pull/40418) — @teknium1)
- Webhooks aus Webhooks-Seite aktivierbar; File Browser; UI-Font-Wechsel; Reasoning-Effort Picker ([#44021](https://github.com/NousResearch/hermes-agent/pull/44021), [#43512](https://github.com/NousResearch/hermes-agent/pull/43512), [#41145](https://github.com/NousResearch/hermes-agent/pull/41145), [#49141](https://github.com/NousResearch/hermes-agent/pull/49141) — @teknium1)

### 🏗️ Core Agent & Architecture

- **God-File Refactor Welle** — `cli.py` 3297→954 Zeilen (28 Subcommand-Parser extrahiert); `gateway/run.py` 19157→15870 Zeilen (42 Slash-Command-Handler extrahiert); `run_agent.py` Turn-Loop in TurnContext ausgelagert (@teknium1)
- Memory Batch Operations; search_files lossless densification; send_message Tool entfernt ([#48507](https://github.com/NousResearch/hermes-agent/pull/48507), [#47866](https://github.com/NousResearch/hermes-agent/pull/47866), [#47856](https://github.com/NousResearch/hermes-agent/pull/47856) — @teknium1)
- Context-File Handling: Konfigurierbare Truncation + Warnings; Compression temporal anchoring; Adaptive Middleware ([#47251](https://github.com/NousResearch/hermes-agent/pull/47251), [#41102](https://github.com/NousResearch/hermes-agent/pull/41102), [#29724](https://github.com/NousResearch/hermes-agent/pull/29724) — @teknium1)
- **Neue Modelle** — z-ai/glm-5.2 (1M), anthropic/claude-fable-5, laguna-m.1, nemotron-3-ultra, xAI Composer 2.5 ([#47391](https://github.com/NousResearch/hermes-agent/pull/47391), [#45695](https://github.com/NousResearch/hermes-agent/pull/45695), [#47908](https://github.com/NousResearch/hermes-agent/pull/47908) — @teknium1)
- Model Picker: Refresh-Models Control; Persist Nous Recommended-Models; MiniMax-M3 1M Context ([#48691](https://github.com/NousResearch/hermes-agent/pull/48691), [#42628](https://github.com/NousResearch/hermes-agent/pull/42628) — @teknium1)
- Kanban: Config-gated auto-subscribe; Machine-global singleton lock; Pin assigned profile toolsets ([#48635](https://github.com/NousResearch/hermes-agent/pull/48635), [#49068](https://github.com/NousResearch/hermes-agent/pull/49068) — @teknium1)

### 📱 Messaging Platforms

- **iMessage via Photon Spectrum** — gRPC-native, Markdown, Emoji-Reactions, Outbound-Media ([#32348](https://github.com/NousResearch/hermes-agent/pull/32348), [#42582](https://github.com/NousResearch/hermes-agent/pull/42582), [#44713](https://github.com/NousResearch/hermes-agent/pull/44713) — @teknium1)
- **WhatsApp Business Cloud API** — Offizieller Meta-Adapter ([#44331](https://github.com/NousResearch/hermes-agent/pull/44331), [#43921](https://github.com/NousResearch/hermes-agent/pull/43921) — @jquesnelle, @teknium1)
- **SimpleX** — Groups, native Attachments, Text Batching, Auto-Accept ([#42584](https://github.com/NousResearch/hermes-agent/pull/42584) — @teknium1)
- **Raft** — Bundled Platform Plugin mit Activity Hooks ([#48210](https://github.com/NousResearch/hermes-agent/pull/48210) — @teknium1)
- Telegram: Bot API 10.1 Rich Messages; Online/Offline Bot Status Indicator ([#44829](https://github.com/NousResearch/hermes-agent/pull/44829), [#49134](https://github.com/NousResearch/hermes-agent/pull/49134) — @teknium1)
- Discord: role_authorized propagation; Recover from runtime task exits ([#43327](https://github.com/NousResearch/hermes-agent/pull/43327), [#44383](https://github.com/NousResearch/hermes-agent/pull/44383) — @teknium1)
- Slack: Scope channel messages when reply_in_thread=false; Thread approval UX ([#41703](https://github.com/NousResearch/hermes-agent/pull/41703), [#43444](https://github.com/NousResearch/hermes-agent/pull/43444) — @teknium1)

### 🔧 Tool System, Skills & MCP

- Image-to-Image Editing ([#48705](https://github.com/NousResearch/hermes-agent/pull/48705) — @teknium1)
- MCP: Unreal Engine 5.8 MCP Server; Elicitation Handler für Mid-Tool-Call Confirmations; Late-Connecting MCP Tools; Keepalive Ping ([#48397](https://github.com/NousResearch/hermes-agent/pull/48397), [#49203](https://github.com/NousResearch/hermes-agent/pull/49203), [#49208](https://github.com/NousResearch/hermes-agent/pull/49208) — @teknium1)
- Skills: simplify-code skill (3-Agent-Code-Review); Find & diff user-modified skills; Optional payments skills ([#41691](https://github.com/NousResearch/hermes-agent/pull/41691), [#48286](https://github.com/NousResearch/hermes-agent/pull/48286), [#31343](https://github.com/NousResearch/hermes-agent/pull/31343) — @teknium1)
- Curator-Consolidation opt-in; Plugins: subdirectory install, GitHub-URL paste ([#47840](https://github.com/NousResearch/hermes-agent/pull/47840), [#42963](https://github.com/NousResearch/hermes-agent/pull/42963) — @teknium1)

### 🔒 Security & Reliability

- Fail closed on own-policy gateway adapters; Fail closed für Approval-Button Auth ([#45634](https://github.com/NousResearch/hermes-agent/pull/45634), [#41226](https://github.com/NousResearch/hermes-agent/pull/41226) — @teknium1)
- Shell-escape denylist bypass geschlossen; CUA-Driver env sanitization; Cron env sanitization ([#40591](https://github.com/NousResearch/hermes-agent/pull/40591), [#48423](https://github.com/NousResearch/hermes-agent/pull/48423), [#49207](https://github.com/NousResearch/hermes-agent/pull/49207) — @kshitijk4poor)
- urllib3 + PyJWT CVEs cleared; Langfuse base64 data URI redaction ([#40179](https://github.com/NousResearch/hermes-agent/pull/40179), [#43322](https://github.com/NousResearch/hermes-agent/pull/43322) — @teknium1)

### 🌐 Fleet, Relay & Automation

- **Managed Scope** — Administrator-pinned, user-immutable config & secrets aus `/etc/hermes` ([#49098](https://github.com/NousResearch/hermes-agent/pull/49098) — @teknium1)
- **Gateway Multiplex** — Alle Profile über einen Gateway-Prozess (Opt-in) ([#48273](https://github.com/NousResearch/hermes-agent/pull/48273) — @benbarclay)
- **Pluggable CronScheduler + Chronos** — Scale-to-Zero Managed-Cron-Provider ([#48275](https://github.com/NousResearch/hermes-agent/pull/48275) — @benbarclay)
- **Automation Blueprints** — Parameterisierte Templates ([#41309](https://github.com/NousResearch/hermes-agent/pull/41309) — @teknium1)
- **Gateway-Gateway Relay** (Phasen 0-3) — Relay Adapter + Signed-HTTP + WS-Inbound + Self-Provision ([#48078](https://github.com/NousResearch/hermes-agent/pull/48078), [#48147](https://github.com/NousResearch/hermes-agent/pull/48147), [#48294](https://github.com/NousResearch/hermes-agent/pull/48294), [#48242](https://github.com/NousResearch/hermes-agent/pull/48242) — @teknium1)

---

## v0.16.0 — The Surface Release 🖥️
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.6.5 · 5. Juni 2026 · 874 Commits · 542 PRs · 399 Issues closed · 170 Contributors</span>

> Desktop-App, Web-Dashboard als Admin-Panel, Quick Setup, `/undo`, Fuzzy Model Picker, Simplified Chinese, NVIDIA/skills Tap, schlankeres Skill-Set.

### ✨ Highlights

- **Hermes Desktop — Echte native App, kein Terminal-Wrapper** — Electron-App für macOS, Linux, Windows mit In-App-Update, Chat-Fenster mit Streaming, Session-Liste mit Archivierung, Drag-&-Drop-Dateien, Zwischenablage-Bilder, Cmd+K Palette, Model Picker in der Statusleiste ([#20059](https://github.com/NousResearch/hermes-agent/pull/20059) u.a.)
- **Remote-Gateway-Connect** — Desktop-App kann sich per OAuth oder Username/Password mit einem entfernten Hermes-Gateway verbinden; Multi-Profile-Sessions parallel ([#37888](https://github.com/NousResearch/hermes-agent/pull/37888) u.a.)
- **Web-Dashboard als Admin-Panel** — Channels-Seite (Messaging-Plattformen konfigurieren), MCP-Katalog, Credentials, Webhooks, Memory, Gateway, System-Seite mit Check-before-Update ([#36704](https://github.com/NousResearch/hermes-agent/pull/36704) u.a.)
- **Simplified Chinese (简体中文)** — Vollständige Desktop-Übersetzung über getypte i18n-Schicht ([#38241](https://github.com/NousResearch/hermes-agent/pull/38241) — @JimLiu)
- **`/undo [N]`** — Die letzten N User-Turns rückgängig machen, mit Prefill + Soft-Delete (CLI/TUI/Messaging-Plattformen) ([#36229](https://github.com/NousResearch/hermes-agent/pull/36229))
- **Fuzzy Model Picker** — Überall fuzzy-suchbar (Desktop, Web, TUI, CLI); Multi-Endpoint-Provider gruppiert; stündliche Katalog-Aktualisierung ([#36928](https://github.com/NousResearch/hermes-agent/pull/36928))
- **Quick Setup via Nous Portal** — Zwei Pfade: Quick Setup (Portal-Login → loslegen) oder Full Setup (detaillierter Wizard); `hermes portal` als Alias ([#35723](https://github.com/NousResearch/hermes-agent/pull/35723))
- **Schlankeres Default-Skill-Set** — Redundante/tote Skills entfernt (spotify, linear u.a.), schwere/Nischen-Skills zu optional gemacht; `environments:`-Relevance-Gate ([#39028](https://github.com/NousResearch/hermes-agent/pull/39028))
- **NVIDIA/skills als Trusted Tap** — NVIDIA/Skills als Standard-Tap im Skills Hub ([#34333](https://github.com/NousResearch/hermes-agent/pull/34333))
- **Neue Modelle** — `deepseek-v4-flash`, `MiniMax-M3` (1M Kontext), `qwen3.7-plus`, `gemini-3.5-flash`
- **Dashboard Auth** — Pluggable OIDC, Username/Password-Login, Refresh-Token-Rotation
- **CVE-2026-48710** — Starlette BadHost gepinnt; SSRF-Off-Loop-Hardening; Credential-Stripping ([#35118](https://github.com/NousResearch/hermes-agent/pull/35118))
- **Discord Voice-Channel Mixer** — Ambient Idle Bed + verbale Acks

---

## v0.15.2 — Patch Release 🔧
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.5.29.2 · 29. Mai 2026</span>

- **Bugfix:** Plugin-Manifeste werden jetzt im Wheel und Sdist mitgeliefert ([#827f7f07](https://github.com/NousResearch/hermes-agent/commit/827f7f07))

---

## v0.15.1 — Patch Release 🔧
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.5.29 · 29. Mai 2026</span>

- **Kanban Image Attachments** — Worker Vision kann Bilder aus Task-Bodies sehen
- **Memory Context Exposure** — Abgeschlossene Turns teilen Message-Context mit Memory-Providern
- **Skills Catalog 23× größer** — Vollständiger skills.sh-Sitemap-Import (858 → 19.932 Skills)
- **Model Picker Unified** — `/model` und `hermes model` zeigen identische Listen + Disk-Cache
- **Weitere Fixes** — nix dependency hashes, MCP npx-Auflösung, TUI-Modell-Picker, Dashboard Auth-Race, Kanban SIGTERM

---

## v0.15.0 — The Auth Release 🔐
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.5.28 · 28. Mai 2026 · 1.304 Commits · 500+ PRs</span>

> Dashboard OAuth, s6-Container-Supervision, Bitwarden Secrets Manager, MCP Catalog, Promptware-Abwehr, Docker Node 22 LTS.

- **Dashboard OAuth Gate** — Vollständiges Auth-System: Login-Seite, SPA AuthWidget, WS-Ticket-Auth, PKCE-Cookies, Audit-Log, konfigurierbar über `dashboard.oauth` in config.yaml
- **Nous OAuth Plugin** — Dashboard Auth Provider für Nous Portal (Portal-URL, Token-Validierung, Fail-Closed)
- **s6-overlay als PID 1** — Docker-Image auf s6-overlay migriert (tini ersetzt); S6ServiceManager für Gateway-Supervision; auto-redirect `gateway run` in supervised mode
- **Bitwarden Secrets Manager** — Lazy-install (`bws`) CLI-Integration, Credential-Quellen-Labeling, EU Cloud + Self-Hosted Support
- **MCP Catalog** — Nous-approved MCP-Server-Liste mit interaktivem Picker + `hermes mcp` Management
- **MCP mTLS** — TLS-Client-Zertifikate für HTTP/SSE MCP-Server
- **MCP OAuth Headless** — Stdin-Paste-Back für Browser-lose OAuth-Flows + Skip-Option für nicht benötigte Auths
- **Promptware Defense** — Shared Threat Patterns, Memory-Load-Scan, Tool-Result-Delimiters
- **Supply-Chain Audit** — On-Demand-Sicherheitsprüfung über OSV.dev
- **STT/TTS Plugin Hooks** — `register_transcription_provider()` und `register_tts_provider()` für Community-Provider
- **Skills Hub Watchdog** — Health Checks + Freshness Badges + automatischer Cron-Job für veraltete Skills
- **Claude Opus 4.8** — Neues Top-Modell (`claude-opus-4.8` + `claude-opus-4.8-fast`)
- **Qwen 3.7 Max** — Neues Alibaba-Modell via OpenCode Go + Katalog
- **GPT-5.5 Pro** — OpenAI API Provider Option + Live `/v1/models` Fetch
- **Image Gen Krea Provider** — Krea 2 Medium + Large als Plugin-Provider + FAL-Katalog
- **API Server** — `GET /v1/skills` + `GET /v1/toolsets` Endpunkte, Session-Steuerung
- **Kanban Bulk Promote** — `--ids` Flag für massenhaftes Ready-Promoten + Fortschrittsanzeige
- **TUI Session Orchestrator** — Sitzungsübergreifende Steuerung + Background-Process-Zähler
- **TUI Responsive Banners** — Dynamisch ein-/ausklappbare Banner-Sektionen
- **TUI Mouse Tracking** — DEC-Modus-Presets für Maus-Steuerung
- **Nix Package Variants** — `#messaging` und `#full` für selektive Installation
- **OpenRouter Sticky Routing** — Session-ID in `extra_body` für konsistentes Model-Routing
- **Smart Patches** — Einzugserhaltung, CRLF-Erhaltung, per-File-Fehler-Eskalation
- **Docker Windows Desktop** — Kompatibles `docker-compose.yml` für Windows Docker Desktop
- **Docker Node 22 LTS** — Multi-Stage-Build Upgrade
- **Honcho Runtime Peer Mapping** — Identity-Mapping-Wizard + Runtime-Resolution
- **Configurable Paste Collapse** — Anpassbare Schwellwerte für Paste-Verdichtung in TUI + CLI
- **xAI TTS Speech Tags** — Optionale Pausen via Speech-Tags
- **xAI OAuth Migration CLI** — `hermes migrate xai` mit ruamel round-trip YAML-Rewrite

---

## v0.14.0 — The Foundation Release 🏛️
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.5.16 · 16. Mai 2026 · 808 Commits · 633 PRs · 545 Issues closed (12 P0, 50 P1) · 215 Contributors</span>

> Hermes installs and runs anywhere. SuperGrok OAuth, OpenAI-kompatibler Local Proxy, native `x_search`, 2 neue Plattformen, Windows-Beta, und die größte Debloating-Welle der Projektgeschichte.

- **SuperGrok OAuth Provider** — xAI-Login direkt in Hermes, kein API-Key nötig; grok-4.3 auf 1M Token Kontextfenster hochgestuft
- **OpenAI-kompatibler Local Proxy** — `hermes proxy` verwandelt jeden OAuth-Provider (Claude Pro, ChatGPT Pro, SuperGrok) in einen OpenAI-Endpoint für Codex CLI, Aider, Cline, Continue uvm.
- **`x_search` – natives X/Twitter-Tool** — Timeline durchsuchen, Threads finden, Posts abrufen – direkt aus dem Chat, mit OAuth oder API-Key
- **Microsoft Teams End-to-End** — Graph-Auth + Webhook-Listener + Pipeline-Runtime + Outbound-Delivery vollständig verdrahtet
- **Debloating-Welle** — Heavy Backends jetzt lazy-install (on first use), `[all]`-Extras entfernt, tiered Install mit Fallback bei Plattform-Inkompatibilität
- **`pip install hermes-agent`** — Vollständiger PyPI-Support
- **Cold-Start −19 Sekunden** — Spürbar schnellerer `hermes`-Launch
- **Browser CDP 180× schneller** — Chrome DevTools Protocol massiv optimiert
- **Windows Native Support (Beta)** — Erstmals natives Windows ohne WSL
- **LINE + SimpleX Chat** — 2 neue Plattformen, insgesamt **22 Plattformen**
- **Cross-Session Claude Prompt Caching** — 1-stündiger Cache über Sessions hinweg
- **`/handoff`** — Live-Session-Transfer zwischen Hermes-Instanzen
- **Native Button UI für `clarify`** — Telegram & Discord: Buttons statt Tipparbeit
- **Discord Channel History Backfill** — Nachrichtenhistorie nachholen
- **LSP Semantic Diagnostics** — Automatische Syntax-Checks bei jedem `write_file`/`patch`
- **`video_generate` – Unified Tool** — Pluggables Video-Generation-Tool (ComfyUI, SVD u.a.)
- **`computer_use` cua-driver** — Funktioniert jetzt auch mit Non-Anthropic-Providern
- **Clickable URLs** — Hyperlinks in jedem Terminal (OSC-8)
- **Zed ACP Registry** — Integration via `uvx`
- **9 neue Optional Skills** — Erweiterung des Skill-Ökosystems
- **OpenRouter Pareto Code Router** — Intelligentes Code-Model-Routing
- **huggingface/skills als Trusted Default Tap** — Skills direkt von HuggingFace
- **12 P0 + 50 P1 Security Closures** — Größte Sicherheitswelle seit v0.13.0

---

## v0.13.0 — The Tenacity Release 💪
<span style="color: var(--vp-c-text-2); font-size: 0.9em;">v2026.5.7 · 7. Mai 2026 · 864 Commits · 588 PRs · 295 Contributors</span>

> Hermes beendet, was es beginnt. Multi-Agent-Kanban, persistente Ziele (`/goal`), Session-Durabilität, Video-Analyse, Voice-Cloning, 7 Locales und die 20. Plattform.

- **Multi-Agent Kanban** – Durable Collaboration Board: Heartbeat, Reclaim, Zombie-Erkennung, Halluzinations-Gate, Per-Task-Retries, Dashboard mit Workspace-Steuerung
- **`/goal` – Persistent Cross-Turn Goals** – Der Ralph-Loop: Agent bleibt über mehrere Turns hinweg auf ein Ziel fixiert
- **`video_analyze`** – Native Video-Analyse über Gemini & kompatible Multimodal-Modelle
- **xAI Custom Voices** – Voice-Cloning als TTS-Provider
- **7 i18n Locales** – Statische Nachrichten in Chinesisch, Japanisch, Deutsch, Spanisch, Französisch, Ukrainisch und Türkisch
- **Google Chat** – 20. Messaging-Plattform + generische Platform-Plugin-Hooks
- **Session Auto-Resume** – Gateway überlebt Neustarts; unterbrochene Sessions werden automatisch fortgesetzt
- **Sicherheitswelle – 8 P0-Schließungen** – Redaktion standardmäßig aktiv, Discord Guild-Scoping, WhatsApp strangers default-reject, TOCTOU-Schließungen, Cron-Prompt-Injection-Scan u.a.
- **Checkpoints v2** – State-Persistence mit echtem Pruning, Disk-Guardrails, keine Shadow-Repos mehr
- **Post-Write Delta Lint** – `write_file` + `patch` jetzt mit Syntax-Prüfung (Python, JSON, YAML, TOML)
- **`no_agent` Cron Mode** – Script-only Watchdog: Leeres stdout = still, sonst verbatim delivery
- **Provider als Plugins** – `ProviderProfile` ABC mit `plugins/model-providers/`-Verzeichnis
- **Curator Subcommands** – `hermes curator archive`, `prune`, `list-archived` + synchroner manueller Run
- **ACP `/steer` und `/queue`** – Agent per Slash-Befehl steuern oder Follow-ups von Zed/VS Code/JetBrains aus queue-en
- **TUI-Glow-Up** – `/model`-Picker mit Inline-Auth, kollabierbare Banner-Sektionen, Kompressionszähler
- **Dashboard Plugins & Profiles** – Plugin-Verwaltungsseite, Profile-Management, sortierbare Tabellen, `default-large`-Theme
- **SearXNG + Split Web Tools** – Native Such-Backend + per-capability Backend-Auswahl
- **OpenRouter Response Caching** – Explizite Cache-Steuerung für unterstützte Modelle
- **`[[as_document]]` Directive** – Skills können Gateway-Ausgabe als Dokument erzwingen
- **`transform_llm_output` Plugin Hook** – LLM-Output vor Conversation-Insertion filtern/umformen
- **6 neue Optional Skills** – Shopify, here.now, shop-app, Anthropic Financial-Services, kanban-video-orchestrator, searxng-search
- **Neue Modelle** – `deepseek/deepseek-v4-pro`, `x-ai/grok-4.3`, `openrouter/owl-alpha` (free), `tencent/hy3-preview`
- **100 neue CLI Startup Tips** – Cron, Kanban, Curator, Plugins, lesser-known Flags

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

> *Stand: Juni 2026 (v0.17.0). Dieses Compendium wird mit jedem neuen Release aktualisiert.*

## 🔮 Ausblick (v0.18+)

Was als Nächstes kommt? Hermes erscheint etwa alle 5–7 Tage mit neuen Major-Releases. Aktuelle Entwicklungs-Schwerpunkte:

- **Hermes Gateway Multiplex** — Single-Prozess-Multi-Profil weiter ausbauen
- **Fleet Relay & Managed Deployments** — Scale-to-Zero-Chronos und Gateway-to-Gateway-Relay in Produktion
- **Automation Blueprints** — Parameterisierte Cron-Templates auf allen Oberflächen
- **Desktop-App** — Weiterentwicklung der nativen App als täglicher Daily Driver
- **Neue Plattform-Adapter & Provider** — Laufend neue Kanäle und Inference-Backends

