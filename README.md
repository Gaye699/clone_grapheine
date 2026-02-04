# Grapheine Portfolio Clone

## 📝 Description
Clone du portfolio Grapheine réalisé dans le cadre d'un projet Git Flow et Intégration Continue.
Projet créé avec **Vite** pour une expérience de développement moderne.

## 👥 Membres du binôme
- **[Votre Nom]** - Page Contact, Responsive, Assets, Architecture
- **[Nom Collaborateur]** - Header, Footer, Page Portfolio

## 🎨 Inspiration
- Portfolio : https://grapheine.com/portfolio/
- Contact : https://grapheine.com/contact/

## 🛠️ Technologies
- **Vite** - Build tool et dev server
- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (ES6+, Modules)
- GitHub Actions (CI/CD)

## 📂 Structure du projet
```
grapheine-portfolio-clone/
├── public/              # Fichiers statiques
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/      # Composants réutilisables
│   ├── scripts/         # JavaScript modulaire
│   ├── styles/          # CSS modulaire
│   ├── main.js          # Point d'entrée JS
│   └── style.css        # Styles principaux
├── index.html           # Page Portfolio
├── contact.html         # Page Contact
├── package.json
└── vite.config.js       # Configuration Vite
```

## 🚀 Installation et développement

### Prérequis
- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/VOTRE-USERNAME/grapheine-portfolio-clone.git
cd grapheine-portfolio-clone

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173/`

### Build de production
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

### Prévisualiser le build
```bash
npm run preview
```

## 🔄 Git Workflow
Ce projet suit strictement le modèle **Git Flow** :
- **main** : version stable / production
- **develop** : branche de développement
- **feature/** : développement de fonctionnalités
- **release/** : préparation des versions

### ⚠️ Points importants du projet
✅ **Utilisation de Git Stash** : Sera documenté lors du développement

✅ **Résolution de conflit Git** : Sera documenté lors de la collaboration

✅ **Intégration Continue** : GitHub Actions configuré avec validation et tests

## 📄 Licence
Projet éducatif - Tous droits réservés