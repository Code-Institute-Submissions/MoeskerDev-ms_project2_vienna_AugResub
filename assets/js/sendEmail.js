/*copied and adapted from the CI tutorial. to send a certain template from EmailJS
and link it to the form names on the website*/
function sendEmail(contact) {
    emailjs.send("service_3821dh8", "template_zqobdjg", {
                "from_name": contact.name.value,
                "from_email": contact.email.value,
                "questions": contact.questions.value,
            },
            ("user_c9Clrkl69n1cSk0s5qSG1")
        )
        .then(
            function (response) {
                console.log("SUCCES", response);
            },
            function (error) {
                console.log("FAILED", error);
            });
}


/*added to remove the unused function sendEmail. it takes the id from
the HTML element that, when it is clicked on, triggers the sendEmail 
function above.*/
let btn = document.getElementById("form-btn");

btn.addEventListener("click", () => {
    sendEmail();
});