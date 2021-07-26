console.log("Hello!")

function sendEmail(contact) {
    emailjs.send("service_3821dh8", "template_zqobdjg", {
            "from_name": contact.name.value,
            "from_email": contact.email.value,
            "questions": contact.questions.value,
        })
        .then(
            function (response) {
                console.log("SUCCES", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
}