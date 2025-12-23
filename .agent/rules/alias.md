---
trigger: always_on
---

# ALIASES

```bash

# =============================================================================
# 🛠️ ARCHITECTURE DES ALIASES (SYSTEM + GIT)
# =============================================================================

# --- 1. NAVIGATION & SYSTÈME ---
alias cls="clear"
alias grep="grep --color=auto"
alias ..="cd .."
alias ...="cd ../.."

# --- 2. OUTILS & ÉDITEURS ---
alias edit="cursor ~/.zshrc_forge"               # Édition rapide config Forge
alias editcc="cursor ~/.claude"                  # Édition config Claude
alias rld="source ~/.zshrc && source ~/.zshrc_forge && echo '✅ Config rechargée!'"
alias cc="claude --dangerously-skip-permissions" # Mode God Mode

# --- 3. GIT (ESSENTIELS) ---
alias gs="git status"
alias ga="git add"
alias gc="git commit"
alias gp="git push"
alias gl="git log --oneline --graph --decorate"

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
    
    # Arbre profondeur variable
    ltree() { eza $_EZA_OPTS -T --level="${1:-2}" --git-ignore; }

    # Aide EZA
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

else
    echo "⚠️ eza non trouvé. Fallback sur ls."
    alias ll="ls -la --color=auto"
    alias la="ls -A --color=auto"
    alias l="ls -CF --color=auto"
    alias ltree="tree"
    lhelp() { echo "Eza non installé."; }
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
alias pcl="rm -rf .next node_modules/.cache && pnpm install && echo '♻️ Cache nettoyé & Dépendances réinstallées.'"
alias panalyze="pnpm analyze"
alias ptest="pnpm test"
alias ptestw="pnpm test:watch"

# =============================================================================
# ❓ SYSTÈME D'AIDE NEXT.JS
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

# Alias global pour toutes les aides
alias forgehelp="lhelp && nexthelp"


# =============================================================================
# 🦇 BAT - CAT MODERNE
# =============================================================================
if command -v bat &>/dev/null; then
  alias cat="bat --style=plain"
fi

# =============================================================================
# FONCTIONS PERSONNALISÉES
# =============================================================================

# 🛤️ SHOWPATH
showpath() {
  local p
  local -A seen=()
  local homebrew=() system=() other=()

  color_path() {
    local p="$1"
    local color icon

    if [[ ! -d "$p" ]]; then
      color="\033[31m"   # rouge
      icon="⚠️"
    elif [[ "$p" == /opt/homebrew* ]]; then
      color="\033[32m"   # vert Homebrew
      icon="🏠"
    elif [[ "$p" == /usr* || "$p" == /System* || "$p" == /Library* ]]; then
      color="\033[34m"   # bleu système
      icon="💻"
    else
      color="\033[33m"   # jaune perso/autres
      icon="🔹"
    fi
    printf "%b  %s\033[0m\n" "$color$icon" "$p"
  }

  IFS=":" read -r -A paths <<< "$PATH"
  for p in "${paths[@]}"; do
    [[ -n "${seen[$p]}" ]] && continue
    seen[$p]=1
    if [[ "$p" == /opt/homebrew* ]]; then
      homebrew+=("$p")
    elif [[ "$p" == /usr* || "$p" == /System* || "$p" == /Library* ]]; then
      system+=("$p")
    else
      other+=("$p")
    fi
  done

  echo -e "\033[1;95m=== PATH ACTUEL (Homebrew) ===\033[0m"
  for p in "${homebrew[@]}"; do color_path "$p"; done
  echo -e "\n\033[1;95m=== PATH ACTUEL (Système) ===\033[0m"
  for p in "${system[@]}"; do color_path "$p"; done
  echo -e "\n\033[1;95m=== PATH ACTUEL (Perso / Autres) ===\033[0m"
  for p in "${other[@]}"; do color_path "$p"; done
  echo -e "\033[1;95m=============================\033[0m\n"
}

# Créer dossier et entrer dedans
mkcd() {
    mkdir -p "$1" && cd "$1"
}

```
