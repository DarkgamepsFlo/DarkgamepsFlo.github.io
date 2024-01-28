// Récupère la collection d'éléments avec la classe "downloadButton"
var downloadButtons = document.getElementsByClassName("downloadButton");

// Ajoute un gestionnaire d'événements à chaque bouton de la collection
for (var i = 0; i < downloadButtons.length; i++) {
    downloadButtons[i].addEventListener("click", function () {
        // Appelle la fonction de téléchargement
        downloadFile();
    });
}

// Fonction de téléchargement
function downloadFile() {
    // Chemin vers le fichier .pdf
    var filePath = "../service/Ogès_Florian_CV.pdf";

    // Crée un élément de lien
    var link = document.createElement("a");

    // Définit l'attribut href du lien avec le chemin du fichier
    link.href = filePath;

    // Définit l'attribut download du lien avec le nom du fichier à télécharger
    link.download = "Ogès_Florian_CV.pdf";

    // Ajoute le lien à la page
    document.body.appendChild(link);

    // Clique automatiquement sur le lien pour déclencher le téléchargement
    link.click();

    // Supprime le lien de la page
    document.body.removeChild(link);
}
