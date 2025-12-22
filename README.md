# BDE Fénelon

> **L'asso qui fait bouger ton campus.**  
> Soirées, voyages, et bons plans dans ta poche.

L'application officielle du BDE Fénelon, conçue pour centraliser tous les événements et services de l'association étudiante.

## 🚀 Fonctionnalités

- **Billetterie** : Achetez vos places pour les soirées et événements directement depuis l'app.
- **Actualités** : Restez informés des dernières nouvelles du campus.
- **Espace Étudiant** : Accédez à vos billets et bons plans (à venir).

## 🛠 Tech Stack

Ce projet suit une architecture moderne et performante, respectant les standards stricts de développement :

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Style** : [Tailwind CSS 4](https://tailwindcss.com/)
- **Composants** : [ShadCN UI](https://ui.shadcn.com/)
- **Animations** : Framer Motion
- **Authentification** : Better Auth (En cours d'intégration)
- **Base de données** : Supabase (PostgreSQL) (En cours d'intégration)
- **Gestionnaire de paquets** : `pnpm`

## 📦 Installation & Démarrage

Assurez-vous d'avoir `pnpm` installé.

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## 🏗 Architecture

Le projet est structuré pour être scalable et maintenable :

- `app/` : Routes et pages (Next.js App Router).
- `components/` : Composants UI (ShadCN) et composants métier.
- `lib/` : Utilitaires et configurations.
- `hooks/` : Hooks React personnalisés.

---

Développé avec ❤️ pour les étudiants de Fénelon.
