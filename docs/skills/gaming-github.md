# 🎮🐙 Gaming & GitHub

Skill-Übersicht für Spielserver, Gaming-Bots und GitHub-Workflows.

---

## 🎮 Gaming — Skills

> Skills für Spielserver, Modpacks, Emulatoren und Gaming-Infrastruktur.

| # | Skill | Zweck |
|---|-------|-------|
| 1 | **minecraft-modpack-server** | 🧱 Modded Minecraft-Server hosten (CurseForge, Modrinth) |
| 2 | **opensim-bot-client** | 🤖 OpenMetaverse/GridClient Bot für OpenSim |
| 3 | **opensim-ossl-ai-npc** | 🧠 KI-gestützte NPCs via OSSL-Skripte |
| 4 | **opensim-remote-admin** | 🖥️ OpenSimulator via SSH + Screen remote verwalten |
| 5 | **pokemon-player** | 🐉 Pokémon via headless Emulator + RAM-Auslese |

---

### 1️⃣ minecraft-modpack-server

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Richt einen Minecraft-Server ein" · „Modpack installieren" · „Starte Modded Server"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Ein Kommando — Skill wählt Modpack aus (CurseForge/Modrinth), lädt Server-JAR + Mods runter, konfiguriert <code>server.properties</code> und startet.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Automatische Modpack-Installation<br>• Optimierte Server-Config (RAM, View-Distance)<br>• CurseForge- & Modrinth-Support<br>• Ein-Klick-Neustart bei Crashes</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• Manche Modpacks brauchen &gt;4 GB RAM → <code>-Xmx</code> anpassen<br>• Forge-Version muss zum Modpack passen<br>• EULA muss via <code>eula=true</code> akzeptiert werden</td>
</tr>
</table>

---

### 2️⃣ opensim-bot-client

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Bot für OpenSim" · „GridClient starten" · „Autonomer Avatar"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Erzeugt einen OpenMetaverse-GridClient, verbindet sich mit einem Simulator und steuert einen Avatar programmatisch.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Login via GridClient-API<br>• Avatar-Steuerung (Laufen, Teleport, Chat)<br>• Ereignis-basierte Architektur<br>• Mehrere Bot-Instanzen gleichzeitig</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• GridClient erfordert <code>libopenmetaverse</code> installiert<br>• Login-Daten niemals ins Repository committen<br>• Simulator muss externe Verbindungen erlauben</td>
</tr>
</table>

---

### 3️⃣ opensim-ossl-ai-npc

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„KI-NPC in OpenSim" · „OSSL-Skript NPC" · „Intelligenter NPC"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Erzeugt OSSL-Skripte für KI-gestützte NPCs in OpenSimulator. NPCs können auf Chat reagieren, Routen laufen und mit Spielern interagieren.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• OSSL <code>osNpc*</code>-Funktionen für NPCs<br>• KI-Dialog via LLM-Integration<br>• Verhaltensbäume für Entscheidungen<br>• Autonome Navigation im Simulator</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• OSSL muss im Regions-INI aktiviert sein<br>• NPC-Funktionen brauchen <code>AllowOSFunctions</code><br>• LLM-Timeout bei langsamen Modellen</td>
</tr>
</table>

---

### 4️⃣ opensim-remote-admin

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„OpenSim remote verwalten" · „Server via SSH" · „Screen-Session"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Startet per SSH + Screen eine OpenSimulator-Instanz auf einem Remote-Server, mit Log-Monitoring und Wiederherstellung nach Trennungen.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• SSH-basierte Remote-Verwaltung<br>• Screen-Session für persistente Läufe<br>• Log-Tailing & Monitoring<br>• Graceful Shutdown & Restart</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• SSH-Key muss auf Remote autorisiert sein<br>• Screen-Session kann orphaned werden → <code>screen -r</code><br>• Mono/.NET Runtime auf Remote nötig</td>
</tr>
</table>

---

### 5️⃣ pokemon-player

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Spiel Pokémon" · „Automated Pokémon" · „Pokémon Grinding"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Startet einen headless Emulator, lädt ein Pokémon-ROM, liest RAM-Werte aus und steuert den Charakter autonom.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Headless-Emulation (kein Display nötig)<br>• RAM-Auslese für Spielzustand (Position, HP, Items)<br>• Autonome Navigation & Kämpfe<br>• Grinding- & Speedrun-Automation</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• ROM-Dateien urheberrechtlich geschützt → eigene Dumps nötig<br>• RAM-Offsets variieren je nach ROM-Version<br>• Emulator-Performance auf schwacher Hardware limitiert</td>
</tr>
</table>

---

## 🐙 GitHub — Skills

> Workflows für Repos, PRs, Issues, CI/CD und Code-Review.

| # | Skill | Zweck |
|---|-------|-------|
| 1 | **github-pr-workflow** | 🔀 PR-Lebenszyklus: Branch → Commit → Open → Merge → Cleanup |
| 2 | **github-code-review** | 👁️ PR-Diffs analysieren, Inline-Kommentare, Qualitätssicherung |
| 3 | **github-issues** | 📋 Issues erstellen, labeln, zuweisen, filtern |
| 4 | **github-auth** | 🔐 HTTPS-Tokens, SSH-Keys, gh CLI Login |
| 5 | **codebase-inspection** | 📊 Codebasen analysieren: LOC, Sprachen, Metriken |
| 6 | **github-repo-management** | 📁 Repos klonen, erstellen, forken, konfigurieren |

---

### 1️⃣ github-pr-workflow

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Mach einen PR" · „Branch erstellen" · „Feature-Branch" · „Merge"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Erstellt einen Branch, committed Änderungen, pusht, öffnet einen PR, wartet auf CI und merged.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Vollständiger PR-Lebenszyklus<br>• Branch von <code>main</code>/<code>master</code> abzweigen<br>• PR via <code>gh</code> CLI öffnen<br>• CI-Checks beobachten<br>• Merge-Strategie: Rebase, Squash, Merge<br>• Branch-Aufräumen nach Merge</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• <code>gh</code> CLI muss authentifiziert sein<br>• Branch-Protection kann Direkt-Push verhindern → PR nötig<br>• Merge-Konflikte manuell lösen</td>
</tr>
</table>

```bash
# Schnellstart — PR-Lebenszyklus
git checkout -b feature/neues-feature
git add -A && git commit -m "feat: neues Feature"
git push origin feature/neues-feature
gh pr create --base main --title "Neues Feature" --body "..."
gh pr merge --squash
git branch -d feature/neues-feature
```

---

### 2️⃣ github-code-review

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Review den PR" · „Code-Review" · „PR #42 checken"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Analysiert PR-Diffs, erkennt Probleme und postet Inline-Kommentare via <code>gh</code> oder REST-API.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• PR-Diff-Analyse (geänderte Dateien, Zeilen)<br>• Security-Scan: Hardcodierte Secrets, Injections<br>• Code-Smell-Erkennung (zu lange Methoden, Duplikate)<br>• Inline-Kommentare mit Vorschlägen<br>• Review-Status: Approve / Request Changes</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• Kein Zugriff auf Repo → PAT mit <code>repo</code>-Scope nötig<br>• Große Diffs (&gt;5000 Zeilen) können API-Limits erreichen<br>• Automatische Kommentare können Overhead erzeugen</td>
</tr>
</table>

---

### 3️⃣ github-issues

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Erstell ein Issue" · „Label das Issue" · „Issues verwalten"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Erstellt, filtert und updated Issues mit Labels, Meilensteinen und Zuweisungen.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Issue-Erstellung mit Title, Body, Labels<br>• Zuweisung zu Usern / Teams<br>• Filter- und Such-API (Status, Label, Milestone)<br>• Batch-Updates (z. B. alle Issues eines Meilensteins schließen)<br>• Issue-Templates aus <code>.github/ISSUE_TEMPLATE/</code></td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• Labels müssen vorher im Repo existieren<br>• API-Rate-Limits: 5000 Requests/h (authenticated)<br>• Meilensteine nur pro Repo, nicht pro Organisation</td>
</tr>
</table>

---

### 4️⃣ github-auth

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„GitHub einrichten" · „Token generieren" · „SSH-Key hinzufügen" · „Login"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Konfiguriert GitHub-Authentifizierung: HTTPS-Token, SSH-Key-Pair oder <code>gh</code> CLI Login.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Personal Access Token (PAT) generieren & konfigurieren<br>• SSH-Key-Pair erstellen & auf GitHub hinterlegen<br>• <code>gh auth login</code> interaktiv & headless<br>• Multi-Faktor-Auth (MFA) Unterstützung<br>• Token-Scopes checken & erweitern</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• <code>workflow</code>-Scope für Workflow-Dateien: <code>gh auth refresh -s workflow</code><br>• <code>ssh-askpass</code> fehlt auf minimalen Systemen → HTTPS + <code>gh auth setup-git</code><br>• Token nie in Skripte hartcodieren → Umgebungsvariablen nutzen</td>
</tr>
</table>

---

### 5️⃣ codebase-inspection

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Analysier die Codebasis" · „LOC zählen" · „Sprachen erkennen"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Durchläuft die Codebasis mit <code>pygount</code> und erstellt eine detaillierte Analyse: Lines of Code, Sprachverteilung, Dateizahlen.</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• LOC-Zählung pro Sprache & Datei<br>• Sprachverteilung in Prozent<br>• Ignoriert <code>node_modules</code>, <code>.git</code>, Build-Ordner<br>• Ausgabe als Tabelle oder JSON<br>• Vergleich zwischen Branches/Versionen</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• <code>pygount</code> muss installiert sein → <code>pip install pygount</code><br>• Große Repos können mehrere Minuten dauern<br>• Binärdateien verfälschen die Statistik → Ausschlussmuster definieren</td>
</tr>
</table>

---

### 6️⃣ github-repo-management

<table>
<tr>
<td><strong>🎯 Auslöser</strong></td>
<td>„Repo klonen" · „Repo erstellen" · „Repo forken" · „Repo konfigurieren"</td>
</tr>
<tr>
<td><strong>⚡ Schnellstart</strong></td>
<td>Klont existierende Repos, erstellt neue auf GitHub, forkt Fremd-Repos und konfiguriert Settings (Visibility, Branches, Webhooks).</td>
</tr>
<tr>
<td><strong>✨ Features</strong></td>
<td>• Repo-Klonen (HTTPS/SSH)<br>• Neues Repo auf GitHub erstellen<br>• Fork eines Fremd-Repos<br>• Visibility umschalten (public/private)<br>• Branch-Protection-Regeln setzen<br>• Webhooks & Secrets für CI konfigurieren</td>
</tr>
<tr>
<td><strong>⚠️ Fallstricke</strong></td>
<td>• Token braucht <code>repo</code>-Scope + ggf. <code>admin:org</code><br>• Forks sind Snapshot-Kopien → eigener Upstream-Sync nötig<br>• Visibility-Wechsel kann CI-Secrets invalidieren</td>
</tr>
</table>

---

## ⚠️ Übergreifende Fallstricke

| Bereich | Problem | Lösung |
|---------|---------|--------|
| 🔐 Auth | Token-Scopes zu restriktiv | `gh auth refresh -s workflow repo ...` |
| 🐚 Shell | `ssh-askpass` fehlt | HTTPS-Remote + `gh auth setup-git` |
| 🛡️ Repo | Branch-Protection aktiv | Immer via PR mergen, nie direkt pushen |
| 📦 Gaming | Mono/.NET fehlt auf Remote | `sudo apt install mono-complete` |
| 🎮 Emu | ROM-Rechte | Nur selbst gedumpte ROMs verwenden |
