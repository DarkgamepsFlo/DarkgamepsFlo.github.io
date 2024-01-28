// Récupère le bouton de téléchargement par son id
var downloadButton = document.getElementById("downloadButton");

// Ajoute un gestionnaire d'événements au clic sur le bouton
downloadButton.addEventListener("click", function () {
    // Appelle la fonction de téléchargement
    downloadFile();
});

// Fonction de téléchargement
function downloadFile() {
    // Chemin vers le fichier .png
    var filePath = "../service/Ogès_Florian_CV.pdf"; // Remplace "ton_fichier.png" par le nom réel de ton fichier

    // Crée un élément de lien
    var link = document.createElement("a");

    // Définit l'attribut href du lien avec le chemin du fichier
    link.href = filePath;

    // Définit l'attribut download du lien avec le nom du fichier à télécharger
    link.download = "Ogès_Florian_CV.png"; // Nom que le fichier aura une fois téléchargé

    // Ajoute le lien à la page
    document.body.appendChild(link);

    // Clique automatiquement sur le lien pour déclencher le téléchargement
    link.click();

    // Supprime le lien de la page
    document.body.removeChild(link);
}