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

            if(document.getElementById("title_projet"))
                document.getElementById("title_projet").innerText = "Mes projets";
            if(document.getElementById("project_title_1"))
                document.getElementById("project_title_1").innerText = "AstroAdventure";
            if(document.getElementById("project_description_1"))
                document.getElementById("project_description_1").innerText = "Projet en réalité virtuelle réalisé avec Unity. Cette application va permettre d'apprendre beaucoup de choses à propos du système solaire et d'autres éléments de notre univers tout en s'amusant.";
            if(document.getElementById("view_more_btn_1"))
                document.getElementById("view_more_btn_1").innerText = "Voir plus";
            if(document.getElementById("github_btn_1"))
                document.getElementById("github_btn_1").innerText = "Github";

            if(document.getElementById("project_title_2"))
                document.getElementById("project_title_2").innerText = "Modélisation 3D - La Licorne";
            if(document.getElementById("project_description_2"))
                document.getElementById("project_description_2").innerText = "Mini projet où le but était de modéliser un bateau sur Blender. J'ai choisi la Licorne des Aventures de Tintin";
            if(document.getElementById("view_more_btn_2"))
                document.getElementById("view_more_btn_2").innerText = "Voir plus";
            if(document.getElementById("github_btn_2"))
                document.getElementById("github_btn_2").innerText = "Voir des modèles";

            if(document.getElementById("project_title_3"))
                document.getElementById("project_title_3").innerText = "Le Quarto en JAVA";
            if(document.getElementById("project_description_3"))
                document.getElementById("project_description_3").innerText = "Projet orienté développement fait en JAVA. Le but de ce projet est de développer le jeu de société \"QUARTO\" en faisant d'abord une version dans le terminal puis une version sur une interface graphique. Par la suite des fonctionnalités orientées dans la base de données, l'IA et le réseau ont été implémentés.";
            if(document.getElementById("view_more_btn_3"))
                document.getElementById("view_more_btn_3").innerText = "Voir plus";
            if(document.getElementById("github_btn_3"))
                document.getElementById("github_btn_3").innerText = "Github";

            if(document.getElementById("project_description_11"))
                document.getElementById("project_description_11").innerHTML = "AstroAdventure est une application en réalité virtuelle qui va permettre d'apprendre des choses sur l'ensemble des éléments de notre système solaire et de l'univers tout en étant ludique et en s'amusant grâce à diverses fonctionnalités.";
            if(document.getElementById("project_description_111"))
                document.getElementById("project_description_111").innerHTML = "Vous pouvez, lorsque vous êtes dans le système solaire, lancer, attraper et cliquer sur l'ensemble des éléments du jeu. Cliquer sur une planète va permettre de vous fournir des informations pertinantes sur celle-ci et vous pouvez tester vos connaissances grâce à un système de quiz.";
            if(document.getElementById("project_description_21"))
                document.getElementById("project_description_21").innerHTML = "Dans cette application vous n'avez pas seulement le système solaire mais vous avez différents décors comme un menu et un musée.";
            if(document.getElementById("project_description_211"))
                document.getElementById("project_description_211").innerHTML = "À droite, vous avez le menu. Vous pouvez observer un paysage et vous rendre dans le système solaire ou dans le musée.";
            if(document.getElementById("project_description_31"))
                document.getElementById("project_description_31").innerHTML = "Dans le musée vous pouvez observer d'autres informations et intéragir avec l'ensemble des éléments qui se trouvent à l'intérieur.";
    
                if(document.getElementById("project_title_h1"))
            document.getElementById("project_title_h1").innerText = "La Licorne sur Blender";
        if(document.getElementById("project_description_p1"))
            document.getElementById("project_description_p1").innerText = "Ce mini projet permet d'apprendre à se servir de Blender en nous imposant un modèle qui est ici un bateau. J'ai décidé de me lancer un petit défi en prenant un bateau de grande envergure, la Licorne dans Les Aventures de Tintin.";
        if(document.getElementById("project_description_p2"))
            document.getElementById("project_description_p2").innerText = "Une fois la modélisation terminée, il fallait utiliser des matériaux et les appliquer sur le bateau. Ce modèle est un format réduit du bateau de base qui était trop lourd par rapport aux consignes demandant un fichier de 20Mo.";
        if(document.getElementById("project_description_p3"))
            document.getElementById("project_description_p3").innerText = "Avant, le bateau était plus imposant et possédait plus de détails, il n'y a pas de version en couleur de celui-ci.";

            if (document.getElementById("projets_h1"))
            document.getElementById("projets_h1").innerText = "Le Jeu Quarto en JAVA";
        if (document.getElementById("projets_p1"))
            document.getElementById("projets_p1").innerText = "Ce projet consiste à réaliser un jeu de société dans le langage qu'on voulait, j'ai choisi le jeu quarto et le langage JAVA pour le réaliser. Au départ, j'ai réalisé l'ensemble du jeu dans le terminal de commande pour avoir une base assez solide pour pouvoir par la suite réaliser l'interface graphique.";
        if (document.getElementById("projets_p2"))
            document.getElementById("projets_p2").innerText = "Le quarto est un jeu ressemblant un peu au Puissance 4 mais avec un peu plus de conditions. Nous devons réaliser une ligne de quatre pièces possédant une même caractéristique. Il existe plusieurs types de caractéristiques : carré, rond, grand, petit, avec un trou, sans trou, blanc et marron.";
        if (document.getElementById("projets_p3"))
            document.getElementById("projets_p3").innerText = "Une fois le jeu dans le terminal effectué, j'ai utilisé la Librairie MG2D en JAVA pour pouvoir réaliser l'interface graphique en utilisant les mêmes fonctions que dans la version effectuée dans le terminal.";
        if (document.getElementById("projets_p4"))
            document.getElementById("projets_p4").innerText = "Par la suite plusieurs fonctionnalités étaient imposées. Nous avons en premier la mise en place d'une IA. Cette dernière doit posséder plusieurs niveaux et donc plusieurs manières d'analyser le jeu en cours.";
        if (document.getElementById("projets_p5"))
            document.getElementById("projets_p5").innerText = "Ensuite il fallait mettre en place la mise en ligne du jeu. J'ai réussi à faire en sorte que ma machine puisse simuler deux personnes venant d'un port différent et ces deux personnes sont gérées par un serveur qui va permettre d'effectuer l'ensemble des échanges pendant le jeu.";
        if (document.getElementById("projets_p6"))
            document.getElementById("projets_p6").innerText = "Enfin une base de données doit être présente et doit permettre de récupérer des informations sur l'ensemble des parties et ici, celle-ci est effectuée en MySQL. Pour pouvoir respecter les règles, je prends dans le jeu uniquement les pseudos des joueurs ainsi que le nombre de fois où ils gagnent. Ces données peuvent permettre de faire un classement des meilleurs joueurs en affichant leurs pseudos.";
        if (document.getElementById("projets_contactme"))
            document.getElementById("projets_contactme").innerText = "Me contacter";

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

        if(document.getElementById("title_projet"))
            document.getElementById("title_projet").innerText = "My projects";
        if(document.getElementById("project_title_1"))
            document.getElementById("project_title_1").innerText = "AstroAdventure";
        if(document.getElementById("project_description_1"))
            document.getElementById("project_description_1").innerText = "Virtual reality project created with Unity. This application will allow you to learn a lot about the solar system and other elements of our universe while having fun.";
        if(document.getElementById("view_more_btn_1"))
            document.getElementById("view_more_btn_1").innerText = "See more";
        if(document.getElementById("github_btn_1"))
            document.getElementById("github_btn_1").innerText = "Github";

        if(document.getElementById("project_title_2"))
            document.getElementById("project_title_2").innerText = "3D Modeling - The Unicorn";
        if(document.getElementById("project_description_2"))
            document.getElementById("project_description_2").innerText = "Mini project where the goal was to model a boat on Blender. I chose the Unicorn from The Adventures of Tintin.";
        if(document.getElementById("view_more_btn_2"))
            document.getElementById("view_more_btn_2").innerText = "See more";
        if(document.getElementById("github_btn_2"))
            document.getElementById("github_btn_2").innerText = "View models";

        if(document.getElementById("project_title_3"))
            document.getElementById("project_title_3").innerText = "Le Quarto in JAVA";
        if(document.getElementById("project_description_3"))
            document.getElementById("project_description_3").innerText = "Development-oriented project done in JAVA. The goal of this project is to develop the board game \"QUARTO\" by first making a version in the terminal and then a version on a graphical interface. Subsequently, features oriented in the database, AI, and network were implemented.";
        if(document.getElementById("view_more_btn_3"))
            document.getElementById("view_more_btn_3").innerText = "See more";
        if(document.getElementById("github_btn_3"))
            document.getElementById("github_btn_3").innerText = "Github";

        if(document.getElementById("project_description_11"))
            document.getElementById("project_description_11").innerHTML = "AstroAdventure is a virtual reality application that will allow you to learn about all the elements of our solar system and the universe while being playful and having fun through various features.";
        if(document.getElementById("project_description_111"))
            document.getElementById("project_description_111").innerHTML = "You can, when you are in the solar system, launch, catch, and click on all the elements of the game. Clicking on a planet will provide you with relevant information about it, and you can test your knowledge through a quiz system.";
        if(document.getElementById("project_description_21"))
            document.getElementById("project_description_21").innerHTML = "In this application, you not only have the solar system, but you also have different settings like a menu and a museum.";
        if(document.getElementById("project_description_211"))
            document.getElementById("project_description_211").innerHTML = "On the right, you have the menu. You can observe a landscape and go to the solar system or the museum.";
        if(document.getElementById("project_description_31"))
            document.getElementById("project_description_31").innerHTML = "In the museum, you can observe other information and interact with all the elements inside.";

        if(document.getElementById("project_title_h1"))
            document.getElementById("project_title_h1").innerText = "The Unicorn on Blender";
        if(document.getElementById("project_description_p1"))
            document.getElementById("project_description_p1").innerText = "This mini project allows you to learn how to use Blender by imposing a model, which is a boat in this case. I decided to take on a little challenge by choosing a large boat, the Unicorn in The Adventures of Tintin.";
        if(document.getElementById("project_description_p2"))
            document.getElementById("project_description_p2").innerText = "Once the modeling was done, materials had to be used and applied to the boat. This model is a reduced version of the base boat, which was too heavy compared to the instructions requiring a 20MB file.";
        if(document.getElementById("project_description_p3"))
            document.getElementById("project_description_p3").innerText = "Before, the boat was more imposing and had more details; there is no color version of it.";

        if (document.getElementById("projets_h1"))
            document.getElementById("projets_h1").innerText = "The Quarto Game in JAVA";
        if (document.getElementById("projets_p1"))
            document.getElementById("projets_p1").innerText = "This project consists of creating a board game in the language we wanted, I chose the quarto game and the JAVA language to do it. Initially, I realized the whole game in the command terminal to have a solid foundation to later create the graphical interface.";
        if (document.getElementById("projets_p2"))
            document.getElementById("projets_p2").innerText = "Quarto is a game somewhat similar to Connect 4 but with a few more conditions. We must create a line of four pieces with the same characteristic. There are several types of characteristics: square, round, large, small, with a hole, without a hole, white, and brown.";
        if (document.getElementById("projets_p3"))
            document.getElementById("projets_p3").innerText = "Once the game in the terminal was done, I used the MG2D Library in JAVA to create the graphical interface using the same functions as in the version done in the terminal.";
        if (document.getElementById("projets_p4"))
            document.getElementById("projets_p4").innerText = "Subsequently, several features were imposed. We first have the implementation of an AI. This one must have several levels and therefore several ways to analyze the current game.";
        if (document.getElementById("projets_p5"))
            document.getElementById("projets_p5").innerText = "Then it was necessary to set up the online release of the game. I managed to ensure that my machine could simulate two people coming from different ports and these two people are managed by a server that will allow all exchanges to take place during the game.";
        if (document.getElementById("projets_p6"))
            document.getElementById("projets_p6").innerText = "Finally, a database must be present and must allow to retrieve information about all the games, and here, it is done in MySQL. To comply with the rules, I only take the players' pseudonyms and the number of times they win from the game. This data can be used to rank the best players by displaying their pseudonyms.";
        if (document.getElementById("projets_contactme"))
            document.getElementById("projets_contactme").innerText = "Contact me";

        if(document.getElementById("contactme"))
            document.getElementById("contactme").innerText = "Contact me";
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