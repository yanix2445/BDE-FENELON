---
trigger: always_on
---

# ALIASES

```bash
# =============================================================================
# 🛠️ ARCHITECTURE DES ALIASES (EZA + SYSTEM + NEXT.JS)
# =============================================================================

# --- 1. NAVIGATION & SYSTÈME ---

alias cls="clear"
alias grep="grep --color=auto"
alias ..="cd .."
alias ...="cd ../.."

# --- 2. OUTILS & ÉDITEURS ---

alias edit="cursor ~/.zshrc_forge"               # Édition rapide de la config Forge
alias editcc="cursor ~/.claude"                  # Édition config Claude
alias rld="source ~/.zshrc && source ~/.zshrc_forge && echo '✅ Config rechargée!'"
alias cc="claude --dangerously-skip-permissions" # Mode "God Mode" pour Claude

# --- 3. GIT (ESSENTIELS) ---

alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gl="git log --oneline --graph --decorate"  # Log amélioré

# =============================================================================
# 🚀 EZA (REMPLACEMENT MODERNE DE LS)
# =============================================================================

if command -v eza &>/dev/null; then
    _EZA_OPTS="--icons=auto --color=always --group-directories-first --git"

    alias l="eza --icons=auto --color=always -1"           # Simple
    alias ll="eza $_EZA_OPTS -l --header"                  # Détail
    alias la="eza $_EZA_OPTS -la --header"                 # Tout (cachés)
    alias lg="eza $_EZA_OPTS -la --header --git"           # Git focus
    alias ls="eza $_EZA_OPTS -la --header -s size"         # Tri: Taille
    alias ld="eza $_EZA_OPTS -la --header -s new"          # Tri: Date
    alias lt="eza $_EZA_OPTS -T --level=3 -la --git-ignore" # Arbre

    # Recherche fichier rapide
    lf() { eza $_EZA_OPTS -la | grep -i "${1:-*}"; }
    
    # Arbre profondeur variable (ex: ltree 5)
    ltree() { eza $_EZA_OPTS -T --level="${1:-2}" --git-ignore; }

else
    echo "⚠️ eza non trouvé. Fallback sur ls."
    alias ll="ls -la --color=auto"
    alias la="ls -A --color=auto"
    alias l="ls -CF --color=auto"
fi

# =============================================================================
# ⚡ NEXT.JS + PNPM (FAST CODING)
# =============================================================================

# --- GESTION PROJET ---

alias pi="pnpm install"
alias pu="pnpm update"
alias pa="pnpm add"
alias pad="pnpm add -D"
alias pr="pnpm remove"
alias plg="pnpm list --depth=0 --global"

# --- DEV & PROD ---

alias pdev="pnpm dev"           # 🟢 Serveur Dev
alias pbuild="pnpm build"       # 🏗️ Build
alias pstart="pnpm start"       # 🚀 Prod
alias plint="pnpm lint"         # 🧹 Lint
alias plintf="pnpm lint --fix"  # ✨ Lint Fix
alias ptype="pnpm type-check"   # 🛡️ TypeScript Check

# --- UTILITAIRES ---

# Hard Reset: Supprime tout et réinstalle

alias pcl="rm -rf .next node_modules/.cache && pnpm install && echo '♻️ Cache nettoyé & Dépendances réinstallées.'"
alias panalyze="pnpm analyze"
alias ptest="pnpm test"
alias ptestw="pnpm test:watch"

# =============================================================================
# ❓ SYSTÈME D'AIDE
# =============================================================================

nexthelp() {
    echo ""
    echo -e "\033[1;36m╔══════════════════════════════════════════════════════════════╗\033[0m"
    echo -e "\033[1;36m║                🚀 AIDE ALIASES NEXT.JS + PNPM                ║\033[0m"
    echo -e "\033[1;36m╠══════════════════════════════════════════════════════════════╣\033[0m"
    echo "║ 📦 \033[1;33mGESTION:\033[0m    pi (install), pa (add), pad (add -D), pr (rm)  ║"
    echo "║ 🔧 \033[1;33mDEV:\033[0m        pdev, pbuild, pstart                           ║"
    echo "║ 🛡️ \033[1;33mQUALITÉ:\033[0m    plint, plintf (fix), ptype (ts check)          ║"
    echo "║ 🧹 \033[1;33mUTILS:\033[0m      pcl (hard reset), ptest, panalyze              ║"
    echo -e "\033[1;36m╚══════════════════════════════════════════════════════════════╝\033[0m"
    echo ""
}

lhelp() {
    echo ""
    echo -e "\033[1;34m🚀 EZA ALIASES:\033[0m"
    echo "  l/ll/la = Listes (Simple / Détail / Tout)"
    echo "  ls/ld   = Tri (Taille / Date)"
    echo "  lt/lg   = Vues (Arbre / Git)"
    echo "  lf      = 🔍 Chercher: lf 'nom'"
    echo "  ltree   = 🌲 Arbre: ltree <profondeur>"
    echo ""
}

# Alias global pour toutes les aides

alias forgehelp="lhelp && nexthelp"
```
