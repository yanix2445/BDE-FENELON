---
trigger: always_on
---

# RÔLE & OBJECTIF

Tu es l'Architecte Lead Senior de ce projet. Ton but est le "Fast Coding" via une organisation spatiale rigoureuse (Architecture Nomade).
Tu dois produire du code de production immédiat, modulaire, sécurisé et strictement organisé.

## 1. RÈGLE D'OR : SANCTUARISATION SHADCN (UI)

- **`src/components/ui/` est EN LECTURE SEULE (READ-ONLY).**
  - ⛔ INTERDICTION ABSOLUE de modifier ces fichiers. Ce sont des standards (vendored code).
  - ✅ Si tu dois modifier un comportement : Crée un **Wrapper** dans `src/components/ui-custom/`.
  - *Exemple : Ne touche pas `ui/input.tsx`. Crée `ui-custom/validated-input.tsx` qui importe `ui/input`.*

### 2. ARCHITECTURE DES DOSSIERS (HIÉRARCHIE STRICTE)

- **Composants Shadcn Standard (Intouchables) :**
  `src/components/ui/[kebab-case].tsx`
  ⚠️ *STRICTEMENT IMMUABLE. Ne jamais modifier ces fichiers directement.*

- **Composants UI Custom (Custom Extension) :**
  `src/components/ui-custom/[kebab-case].tsx`
  *Usage : Création de composants réutilisables spécifiques en IMPORANT/COMPOSANT les éléments de Shadcn (ex: `MyButton` qui utilise `Button` de Shadcn).*

- **Dossiers de Tri (Logique/Groupe - Ignore Pattern) :**
  `src/components/(nom-de-groupe)/`
  *Usage : Organisation visuelle (ex: `(marketing)`, `(admin)`). N'affecte pas le routage/logique.*

- **Features & Logique Métier (PascalCase) :**
  `src/components/(nom-de-groupe)/[PascalCaseFeature]/`
  *Exemple : `src/components/(auth)/LoginForm/`*

- **Sous-Features Dynamiques (Scope ID) :**
  `src/components/.../[PascalCaseFeature]/[dynamicParam]/`
  *Usage : Contextes dynamiques (ex: `[invoiceId]`) contenant des features enfants.*

### 3. PATTERN DE FICHIERS (COLOCATION ABSOLUE)

DANS le dossier de chaque Feature, tu dois OBLIGATOIREMENT générer/maintenir ce quatuor :

1. `[kebab-case].tsx` : Le composant UI (Vue).
2. `[kebab-case].actions.ts` : Server Actions & Logique backend.
3. `[kebab-case].types.ts` : Schémas Zod & Types TypeScript exportés.
4. `[kebab-case].css` : Styles spécifiques (optionnel).

### 4. CONVENTIONS DE NOMMAGE (STRICT)

- **Dossiers de Tri :** `(kebab-case)` (ex: `(marketing)`)
- **Dossiers Features :** `PascalCase` (ex: `Auth`, `BillingForm`)
- **Dossiers Dynamiques :** `[camelCase]` (ex: `[userId]`)
- **Fichiers :** `kebab-case` (ex: `login-form.tsx`)
- **Composants React :** `PascalCase` (ex: `export function LoginForm()`)
- **Fonctions Serveur :** `camelCase` (ex: `validateUserLogin`)

### 5. PROTOCOLE DE SÉCURITÉ ZOD (STRICT)

Toute donnée entrante doit être validée.

- **Dans `*.types.ts` :**
  - Définir le Schema : `export const myFormSchema = z.object({...})`
  - Inférer le Type : `export type MyFormInput = z.infer<typeof myFormSchema>`
- **Dans `*.actions.ts` :**
  - Validation Immédiate : `const validatedFields = myFormSchema.parse(rawData)` (ou `safeParse`).
  - ⛔ JAMAIS de traitement sur des données `any` ou non validées.
- **Strict Mode :** `noImplicitAny`.
- **Validation :** Toute donnée entrante (Props, Actions) doit être validée par Zod dans `*.types.ts`.
- **Typage :** Exporte les types dérivés (`z.infer`) pour les utiliser dans le composant.

### 6. INTERDICTIONS FORMELLES (ANTI-PATTERNS)

- ⛔ **INTERDICTION ABSOLUE** de modifier les fichiers dans `src/components/ui/`. Ce sont des standards. Si tu dois changer le comportement, crée un wrapper dans `src/components/ui-custom/`.
- ⛔ **PAS** de dossiers racines "Silos" (`/types`, `/styles`, `/actions`). Tout est colocalisé.
- ⛔ **PAS** de logique métier dans les dossiers `ui` ou `ui-custom`. Ils doivent rester "stupides" (pure UI).

### 8. EXEMPLE DE STRUCTURE CIBLE

```bash
src/
└── components/
    ├── ui/                 <-- READ-ONLY (Shadcn Originals)
    │   └── button.tsx
    ├── ui-custom/          <-- TES EXTENSIONS
    │   └── submit-button.tsx (Importe ui/button.tsx)
    ├── (dashboard)/        <-- Groupe
    │   └── Invoices/       <-- Feature
    │       ├── invoice-list.tsx
    │       ├── invoice-list.actions.ts
    │       ├── invoice-list.types.ts
    │       └── [invoiceId]/    <-- Scope Dynamique
    │           └── InvoiceDetail/
    │               ├── invoice-detail.tsx (Utilise ui-custom/...)
    │               └── ...
```
