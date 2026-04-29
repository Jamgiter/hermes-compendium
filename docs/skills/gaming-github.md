# Gaming & GitHub 🎮🐙

---

## 🎮 Gaming

Skills für Spielserver, Modpacks und Gaming-Infrastruktur.

| Skill | Beschreibung |
|-------|-------------|
| **minecraft-modpack-server** | Modded Minecraft-Server hosten (CurseForge, Modrinth) |
| **opensim-bot-client** | OpenMetaverse/GridClient Bot für OpenSim |
| **opensim-ossl-ai-npc** | KI-gestützte NPCs in OpenSimulator via OSSL-Skripte |
| **opensim-remote-admin** | OpenSimulator-Server via SSH + Screen remote verwalten |
| **pokemon-player** | Pokémon via headless Emulator + RAM-Auslese spielen |

### minecraft-modpack-server

**Auslöser:** „Richt einen Minecraft-Server ein", „Modpack installieren"

Richtet einen modded Minecraft-Server mit CurseForge- oder Modrinth-Modpacks ein. Inklusive automatischer Installation, Konfiguration und Optimierung.

### pokemon-player

**Auslöser:** „Spiel Pokémon", „Automated Pokémon"

Spielt Pokémon-Spiele via headless Emulator. Liest RAM-Werte aus, um den Spielzustand zu verstehen, und steuert den Charakter autonom. Perfekt für Speedruns oder Grinding-Automation.

---

## 🐙 GitHub

GitHub-Workflows für Repos, PRs, Issues und CI/CD.

| Skill | Beschreibung |
|-------|-------------|
| **codebase-inspection** | Codebasen mit pygount inspizieren: LOC, Sprachen, Anteile |
| **github-auth** | GitHub-Auth: HTTPS-Tokens, SSH-Keys, gh CLI Login |
| **github-code-review** | PRs reviewen: Diffs, Inline-Kommentare via gh oder REST |
| **github-issues** | GitHub Issues erstellen, kategorisieren, labeln, zuweisen |
| **github-pr-workflow** | GitHub PR-Lebenszyklus: Branch, Commit, Open, CI, Merge |
| **github-repo-management** | Repos klonen, erstellen, forken, konfigurieren, verwalten |

### github-pr-workflow

**Auslöser:** „Mach einen PR", „Branch erstellen", „Feature-Branch", „Merge"

Der zentrale Skill für Pull-Requests. Deckt den gesamten Lebenszyklus ab:

1. Branch von `main` erstellen
2. Änderungen committen
3. Branch pushen
4. PR via `gh` CLI öffnen
5. CI-Checks beobachten
6. PR mergen (rebase/squash/merge)
7. Branch aufräumen

```bash
git checkout -b feature/neues-feature
git add -A && git commit -m "feat: neues Feature"
git push origin feature/neues-feature
gh pr create --base main --title "Neues Feature" --body "..."
gh pr merge --squash
git branch -d feature/neues-feature
```

### github-code-review

**Auslöser:** „Review den PR", „Code-Review", „PR #42 checken"

Analysiert PR-Diffs, erkennt Probleme (Sicherheitslücken, Code-Smells, fehlende Tests) und postet Inline-Kommentare.

### github-issues

**Auslöser:** „Erstell ein Issue", „Label das Issue", „Issues verwalten"

Erstellt, listet, filtert und updated Issues – mit Labels, Meilensteinen und Zuweisungen.

### ⚠️ Fallstricke GitHub

1. **Token-Scopes** – Für `.github/workflows/`-Dateien wird `workflow`-Scope benötigt: `gh auth refresh -s workflow`
2. **ssh-askpass** – Auf minimalen Systemen fehlt `ssh-askpass`. Workaround: HTTPS-Remote + `gh auth setup-git`
3. **Branch-Protection** – Wenn aktiv, schlägt Direkt-Push fehl → PR nötig
