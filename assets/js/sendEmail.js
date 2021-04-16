function sendMail(contactForm) {
    emailjs.send("service_3821dh8", "template_zqobdjg", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
}