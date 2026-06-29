document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultSection = document.getElementById('result');

    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Récupérer les réponses
        const q1 = document.getElementById('q1').value;
        const q2 = document.getElementById('q2').value;
        const q3 = document.getElementById('q3').value;
        const email = document.getElementById('email').value;

        // Valider les réponses
        if (!q1 || !q2 || !q3 || !email) {
            alert('Veuillez répondre à toutes les questions et fournir votre email.');
            return;
        }

        // Masquer le formulaire et afficher les résultats
        quizForm.classList.add('hidden');
        resultSection.classList.remove('hidden');

        // Ici, vous pouvez envoyer les données à un serveur
        // Exemple avec Google Sheets (voir documentation)
        sendToGoogleSheets({ q1, q2, q3, email });
    });

    // Fonction pour envoyer les données à Google Sheets
    function sendToGoogleSheets(data) {
        // Remplacez par l'URL de votre Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/VOTRE_ID_DE_SCRIPT/exec';

        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            console.log('Données envoyées avec succès !');
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi des données :', error);
        });
    }
});
