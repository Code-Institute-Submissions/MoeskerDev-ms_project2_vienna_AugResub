let btn = document.getElementById("submit-btn");

/**Once the window is loaded a message appears in the console of devTools, which is a check
 * for loading the file properly. Both functions are called on top right after loading the window in case of slowly
 * loading pages.
 */
window.addEventListener('load', () => {
    console.log('page is fully loaded');
    changeColor();
    myModal();
});
/**Function that changes the colour of the button from green to red once clicked. This is related to
 * the markers shown on the map. First the red class is removed from all buttons, then the green class is added to all
 * buttons. Once a button is clicked this changes, the added class to all buttons is removed only from that clicked (green) button 
 * and only that clicked button will get the other class (red). The clicked button returns to the previous colour once another button
 * is clicked.
 */
function changeColor() {
    let buttons = document.getElementsByClassName("buttons");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            $(".buttons").removeClass("btn-danger");
            $(".buttons").addClass("btn-success");
            this.classList.remove("btn-success");
            this.classList.add("btn-danger");
        });
    }
}
/**Modal function that shows a particular modal only after clicking the submit button. The message shown
 * depends on if all fields are not empty anymore = true or if one of the fields is still empty = true. In case 
 * of another error the request will be to try again.
 */
function myModal() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;

    if (name !== "" && email !== "" && question !== "") {
        let messageModal = document.getElementById("message-modal");
        messageModal.innerHTML = 'Thank you for submitting your question(s)!';
        return $("#clickModal");
    } else {
        let messageModal = document.getElementById("message-modal");
        messageModal.innerHTML = 'Please fill out all fields of the form.';
        return $("#clickModal");
    }
}

btn.addEventListener('click', () => {
    myModal().modal("show");
});

/**Refreshes the page to clear filled out information of the form once clicked on OK in the modal message,
 * only after the message that appears when all fields are filled out = true.
 */
function refreshPage() {
    window.location.reload();
}


/*Smooth scroll function that makes the page, when clicking on a link in the navbar referring to another section, 
scroll up and down towards another section instead of jumping to the other section. Copied it from an online source. */
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});