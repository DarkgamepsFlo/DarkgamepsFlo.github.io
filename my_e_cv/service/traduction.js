// Fonction pour changer la langue
function changeLanguage() {
    var currentLanguage = localStorage.getItem("language") || "fr";

    if (currentLanguage === "fr") {
        localStorage.setItem("language", "en");
    } else {
        localStorage.setItem("language", "fr");
    }

    // Met à jour le contenu de la page en fonction de la langue
    updateContent();
    // Change l'image en fonction de la langue
    updateImage();
}

// Fonction pour mettre à jour le contenu de la page en fonction de la langue
function updateContent() {
    var currentLanguage = localStorage.getItem("language") || "fr";

    if (currentLanguage === "fr") {
        if(document.getElementById("welcome_menu"))
            document.getElementById("welcome_menu").innerText = "Bienvenue sur mon portfolio";
        if(document.getElementById("whoami"))
            document.getElementById("whoami").innerText = "Qui suis-je ?";
        if(document.getElementById("projects"))
            document.getElementById("projects").innerText = "Mes projets";
        if(document.getElementById("interests"))
            document.getElementById("interests").innerText = "Mes intérêts";
        if(document.getElementById("experiences"))
            document.getElementById("experiences").innerText = "Mes expériences";

        if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "Mon profil";
    } else {
        if(document.getElementById("welcome_menu"))
            document.getElementById("welcome_menu").innerText = "Welcome to my portfolio";
        if(document.getElementById("whoami"))
            document.getElementById("whoami").innerText = "Who am I ?";
        if(document.getElementById("projects"))
            document.getElementById("projects").innerText = "My project";
        if(document.getElementById("interests"))
            document.getElementById("interests").innerText = "My interest";
        if(document.getElementById("experiences"))
            document.getElementById("experiences").innerText = "My experiences";
        
        if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
    }
}

// Fonction pour mettre à jour l'image en fonction de la langue et du dossier
function updateImage() {
    var currentLanguage = localStorage.getItem("language") || "fr";
    var imgElement = document.getElementById("langImage");

    if (imgElement) {
        // Récupère l'URL de la page actuelle
        var currentURL = window.location.pathname;

        // Utilise une expression régulière pour vérifier si le chemin se termine par '/my_e_cv/index.html'
        var isInMyECVFolder = /\/my_e_cv\/index\.html$/.test(currentURL);

        if (isInMyECVFolder) {
            // Vous êtes dans le dossier 'my_e_cv' ou la page 'index.html' dans un sous-dossier
            if (currentLanguage === "fr") {
                imgElement.src = "./img/fr_flag.png";
                imgElement.alt = "Drapeau français";
            } else {
                imgElement.src = "./img/en_flag.png";
                imgElement.alt = "English flag";
            }
        } else {
            // Vous n'êtes pas dans le dossier 'my_e_cv' ou la page 'index.html'
            if (currentLanguage === "fr") {
                imgElement.src = "../img/fr_flag.png";
                imgElement.alt = "Drapeau français";
            } else {
                imgElement.src = "../img/en_flag.png";
                imgElement.alt = "English flag";
            }
        }
    }
}

// Appelle la fonction pour mettre à jour le contenu lors du chargement de la page
window.onload = function() {
    // Initialise le stockage local à 'fr' s'il n'est pas défini
    if (!localStorage.getItem("language")) {
        localStorage.setItem("language", "fr");
    }

    // Met à jour le contenu de la page en fonction de la langue
    updateContent();
    // Met à jour l'image en fonction de la langue
    updateImage();
};