# Architecture du projet

## Structure des dossiers

### `/src`
Contient tout le code source du projet

- **`/assets`** : Images, fonts, fichiers statiques
- **`/components`** : Composants HTML/JS réutilisables
- **`/scripts`** : Modules JavaScript
- **`/styles`** : Fichiers CSS modulaires
- **`main.js`** : Point d'entrée JavaScript
- **`style.css`** : Styles globaux

### `/public`
Fichiers servis tels quels (favicon, robots.txt, etc.)

### Pages HTML
- `index.html` : Page Portfolio (HomePage)
- `contact.html` : Page Contact

## Conventions de code

### CSS
- Utilisation de variables CSS (`:root`)
- Nomenclature BEM pour les classes complexes
- Mobile-first pour le responsive

### JavaScript
- ES6+ (modules, arrow functions, destructuring)
- Imports explicites
- Code modulaire et réutilisable

### Commits
Convention : `type(scope): message`
- **feat**: Nouvelle fonctionnalité
- **fix**: Correction de bug
- **docs**: Documentation
- **style**: Formatage, point-virgules manquants, etc.
- **refactor**: Refactorisation du code
- **test**: Ajout de tests
- **chore**: Tâches de maintenance