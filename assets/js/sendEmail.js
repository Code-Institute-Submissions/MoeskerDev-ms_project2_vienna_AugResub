console.log("Hello!")

function sendEmail(contactForm) {
    emailjs.send("service_3821dh8", "template_zqobdjg", {
            "from_name": contactForm.from_name.value,
            "from_email": contactForm.from_email.value,
            "questions": contactForm.questions.value,
        })
        .then(
            function (response) {
                console.log("SUCCES", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
}