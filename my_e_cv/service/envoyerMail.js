emailjs.init("mX1BcdX9Bjfik8GJ-"); // Remplacez par votre User ID Email.js

document.getElementById('sendButton').addEventListener('click', function() {
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;
    const email = document.getElementById('recipient').value;

    console.log(subject);
    console.log(content);
    console.log(email);

    // Vérifier si l'un des champs est vide
    if (!subject || !content) {
        Swal.fire({
            title: 'Erreur',
            text: 'Veuillez remplir les champs du sujet et du contenu avant d\'envoyer l\'e-mail.',
            icon: 'error',
            allowOutsideClick: false,
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigez l'utilisateur vers le menu principal ici
                window.location.href = "../contacter/index.html";
            }
        });
    }
    else {
        // Afficher une alerte indiquant que l'e-mail est en cours d'envoi
        Swal.fire({
            title: 'Envoi en cours',
            text: 'Veuillez patienter...',
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
        });

        emailjs.send("service_d95qs5s", "template_7d285ec", {
            to_email: 'f.oges.62@gmail.com',
            subject: subject,
            content: content,
            email: email
        })
        .then(function(response) {
            console.log(response);
            console.log('E-mail envoyé avec succès:', response);
            // Afficher une SweetAlert
            Swal.fire({
                title: 'E-mail envoyé avec succès!',
                text: 'Cliquez sur OK pour revenir au menu principal.',
                icon: 'success',
                allowOutsideClick: false,
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigez l'utilisateur vers le menu principal ici
                    window.location.href = "../index.html";
                }
            });
        }, function(error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            // Afficher une SweetAlert
            Swal.update({
                title: 'Erreur lors de l\'envoie de l\'E-mail!',
                text: 'Veuillez réessayer ultérieurement. Cliquez sur OK pour recharger la page.',
                icon: 'error',
                allowOutsideClick: false,
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirigez l'utilisateur vers le menu principal ici
                    window.location.href = "../contacter/index.html";
                }
            });
        });
    }
});