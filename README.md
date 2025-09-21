# WeekendRealo

Plateforme de mise en avant des jeunes talents et projets innovants.

## 🚀 Déploiement Vercel

### Prérequis

- Compte Vercel
- Repository GitHub/GitLab connecté

### Déploiement automatique

1. Connectez votre repository à Vercel
2. Vercel détectera automatiquement Next.js
3. Le build se lancera automatiquement

### Configuration optimisée

- ✅ ESLint désactivé pendant le build
- ✅ TypeScript strict désactivé
- ✅ Images non optimisées pour Vercel
- ✅ Chunks optimisés
- ✅ Fallbacks webpack configurés

### Scripts disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Lint avec auto-fix
npm run lint:check   # Vérification lint seulement
```

### Structure du projet

```
app/                 # Pages Next.js App Router
components/          # Composants réutilisables
  dashboard/         # Composants dashboard
  ui/               # Composants UI (shadcn/ui)
lib/                # Utilitaires et données
public/             # Assets statiques
```

### Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 Fonctionnalités

### Site vitrine

- Design inspiré de Brut.media
- Sidebar fixe avec navigation
- Sections slider horizontales
- Feed TikTok pour vidéos
- Footer responsive

### Dashboard

- Interface d'administration
- Gestion des contenus
- Analytics et statistiques
- Gestion des utilisateurs
- Sidebar collapsible

## 🎨 Design System

### Couleurs

- **Primary**: Rouge (#ef4444)
- **Secondary**: Noir (#000000)
- **Background**: Blanc (#ffffff)

### Typographie

- **Fonts**: Montserrat, Poppins
- **Responsive**: Mobile-first

## 🔧 Développement

### Installation

```bash
npm install
```

### Démarrage

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 📄 Pages

### Site vitrine

- `/` - Accueil
- `/talents` - Talents
- `/projets` - Projets
- `/contenus` - Contenus
- `/a-propos` - À propos

### Dashboard

- `/dashboard` - Vue d'ensemble
- `/dashboard/contenus` - Gestion contenus
- `/dashboard/talents` - Gestion talents
- `/dashboard/analytics` - Analytics
- `/dashboard/parametres` - Paramètres

## 🚀 Déploiement

Le projet est optimisé pour Vercel avec :

- Build automatique
- Optimisations webpack
- Configuration images
- Headers de sécurité
- Cache optimisé
