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
        console.log(response);
        console.log('E-mail envoyé avec succès:', response);
    }, function(error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    });
});