# Quiz F.A.S.T. - AfriVision Studio

Une application web simple pour aider les étudiants à trouver les meilleures bourses adaptées à leur profil.

## 📌 Fonctionnalités
- Quiz interactif avec 3 questions.
- Collecte des emails pour envoyer les résultats.
- Stockage des réponses dans Google Sheets (optionnel).

## 🚀 Installation
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/afrivisionstudio/Teste.git
   ```
2. Ouvrez `index.html` dans un navigateur.

## 🛠 Configuration
### Pour stocker les réponses dans Google Sheets :
1. **Créez une feuille Google Sheets** avec les colonnes : `Niveau`, `Domaine`, `Etranger`, `Email`, `Date`.
2. **Créez un Google Apps Script** :
   - Dans votre Google Sheet, allez dans **Extensions > Apps Script**.
   - Collez ce code dans le fichier `Code.gs` :
     ```javascript
     function doPost(e) {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       const data = JSON.parse(e.postData.contents);
       sheet.appendRow([
         data.q1,
         data.q2,
         data.q3,
         data.email,
         new Date()
       ]);
       return ContentService.createTextOutput(JSON.stringify({ result: "success" }));
     }
     ```
3. **Déployez le script** :
   - Cliquez sur **Déployer > Nouveau déploiement**. 
   - Sélectionnez **Type : Web App**. 
   - Définissez **Exécuter en tant que** : `Moi`. 
   - Définissez **Accès** : `Tous`. 
   - Cliquez sur **Déployer**. 
   - Copiez l'**URL du Web App** (ex: `https://script.google.com/macros/s/ID_DE_SCRIPT/exec`).

4. **Mettez à jour `js/script.js`** :
   - Remplacez `VOTRE_ID_DE_SCRIPT` par l'URL de votre Google Apps Script.

## 📂 Structure du projet
```
Teste/
├── index.html          # Page principale du quiz
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── script.js       # Logique JavaScript
├── assets/             # Images, icônes, etc.
└── README.md           # Documentation
```

## 🤝 Contribution
Les contributions sont les bienvenues ! Ouvrez une issue ou soumettez une pull request.

## 📜 Licence
[MIT](LICENSE)
