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
        if(document.getElementById("whoami_texte"))
            document.getElementById("whoami_texte").innerText = "Bonjour, je suis Florian Ogès, 20 ans, j'habite à Isques, à environ 10 km de Boulogne-Sur-Mer. Je suis actuellement étudiant en troisième année de BUT Informatique à l'IUT de l'ULCO de Calais. Depuis deux ans j'ai choisi de m'orienter dans le parcours de développement. Ce parcours me permet d'approfondir mes compétences en web et en développment à travers des projets conçus pour ces domaines. Une fois ma troisième année de BUT terminée, je souhaiterai continuer mes études dans ce même domaine ou m'orienter dans tout ce qui est relié au design.";
            if(document.getElementById("listContainer_competence"))
            document.getElementById("listContainer_competence").innerText = "Mes Compétences";
            if(document.getElementById("listContainer_web"))
            document.getElementById("listContainer_web").innerText = "Langages Web : HTML / CSS / Javascript / PHP";
            if(document.getElementById("listContainer_dev"))
            document.getElementById("listContainer_dev").innerText = "Langages de Dev : Python / JAVA / C++";
            if(document.getElementById("listContainer_fram"))
            document.getElementById("listContainer_fram").innerText = "Framework web : VueJS / NodeJS / Twig / Codigniter";
            if(document.getElementById("listContainer_not"))
            document.getElementById("listContainer_not").innerText = "Notion : Droit / Communication / Gestion de projet";
            if(document.getElementById("listContainer_app"))
            document.getElementById("listContainer_app").innerText = "Application : Figma / Trello / Jira / Inkscape / GIMP / Blender";
            if(document.getElementById("listContainer_crea"))
            document.getElementById("listContainer_crea").innerText = "Créatif, je ne me contente pas du minimum demandé mais je cherche toujours à apporter de nouvelles idées.";
            if(document.getElementById("listContainer_resi"))
            document.getElementById("listContainer_resi").innerText = "Résilient, il est rare de me voir abandonner facilement lorsque des difficultés se présentent.";
            if(document.getElementById("listContainer_orga"))
            document.getElementById("listContainer_orga").innerText = "Organisé, j'aime lorsque l'ensemble des tâches sont calculées afin de minimiser les problèmes éventuels.";
            if(document.getElementById("downloadContainer_youcan"))
            document.getElementById("downloadContainer_youcan").innerText = "Vous pouvez consulter mon CV ici";
            if(document.getElementById("downloadContainer_download"))
            document.getElementById("downloadContainer_download").innerText = "Télécharger mon CV";
        
            if(document.getElementById("contactme"))
            document.getElementById("contactme").innerText = "Me contacter";

            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
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
        if(document.getElementById("whoami_texte"))
            document.getElementById("whoami_texte").innerText = "Hello, I am Florian Ogès, 20 years old, I live in Isques, about 10 km from Boulogne-Sur-Mer. I am currently a third year BUT Informatique student at the IUT of ULCO in Calais. For two years I have chosen to follow the development path. This course allows me to deepen my web and development skills through projects designed for these areas. Once my third year of BUT is over, I would like to continue my studies in this same field or move into everything related to design.";
            if(document.getElementById("listContainer_competence"))
            document.getElementById("listContainer_competence").innerText = "My Skills";
            if(document.getElementById("listContainer_web"))
            document.getElementById("listContainer_web").innerText = "Web languages : HTML / CSS / Javascript / PHP";
            if(document.getElementById("listContainer_dev"))
            document.getElementById("listContainer_dev").innerText = "Development languages: Python / JAVA / C++";
            if(document.getElementById("listContainer_fram"))
            document.getElementById("listContainer_fram").innerText = "Web framework : VueJS / NodeJS / Twig / Codigniter";
            if(document.getElementById("listContainer_not"))
            document.getElementById("listContainer_not").innerText = "Concept: Law / Communication / Project management";
            if(document.getElementById("listContainer_crea"))
            document.getElementById("listContainer_crea").innerText = "Creative, I am not satisfied with the minimum requested but I always seek to bring new ideas.";
            if(document.getElementById("listContainer_resi"))
            document.getElementById("listContainer_resi").innerText = "Resilient, it is rare to see me give up easily when difficulties arise.";
            if(document.getElementById("listContainer_orga"))
            document.getElementById("listContainer_orga").innerText = "Organized, I like when all tasks are calculated in order to minimize possible problems.";
            if(document.getElementById("downloadContainer_youcan"))
            document.getElementById("downloadContainer_youcan").innerText = "You can view my CV here";
            if(document.getElementById("downloadContainer_download"))
            document.getElementById("downloadContainer_download").innerText = "Download my CV";

            if(document.getElementById("contactme"))
            document.getElementById("contactme").innerText = "Contact me";

            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
            if(document.getElementById("welcome_profil"))
            document.getElementById("welcome_profil").innerText = "My profile";
    }
}

// Fonction pour mettre à jour l'image en fonction de la langue et du dossier
function updateImage() {
    var currentLanguage = localStorage.getItem("language") || "fr";
    var imgElement = document.getElementById("langImage");

    if (imgElement) {
        
            // Vous n'êtes pas dans le dossier 'my_e_cv' ou la page 'index.html'
            if (currentLanguage === "fr") {
                imgElement.src = "../img/en_flag.png";
                imgElement.alt = "Drapeau français";
            } else {
                imgElement.src = "../img/fr_flag.png";
                imgElement.alt = "English flag";
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