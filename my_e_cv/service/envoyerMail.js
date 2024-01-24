emailjs.init("mX1BcdX9Bjfik8GJ-"); // Remplacez par votre User ID Email.js

document.getElementById('sendButton').addEventListener('click', function() {
    const subject = document.getElementById('subject').value;
    const content = document.getElementById('content').value;

    console.log(subject);
    console.log(content);

    emailjs.send("service_d95qs5s", "template_7d285ec", {
        to_email: 'f.oges.62@gmail.com',
        subject: subject,
        content: content,
    })
    .then(function(response) {
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
        console.log(response);
        console.log('E-mail envoyé avec succès:', response);
    }, function(error) {
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
                window.location.href = "../contacter/index.html";
            }
        });
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    });
});