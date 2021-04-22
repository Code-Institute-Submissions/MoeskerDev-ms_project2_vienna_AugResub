let btn = document.getElementById("submit-btn");

/**Once the window is loaded a message appears in the console of devTools, which is a check
 * for loading the file properly. Both functions are called on top right after loading the window in case of slowly
 * loading pages.
 */
window.addEventListener('load', () => {
    console.log('page is fully loaded');
<<<<<<< HEAD
    initMap();
    colourChange();

=======
    changeColor();
    myModal();
>>>>>>> new_branch
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
<<<<<<< HEAD

//Change colour of button after being clicked and return to previous colour after clicking another button
function colourChange() {
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

//Function that will show an alert depending on if all fields are filled out or not plus in case of another error


let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    submitClick();
})

function submitClick(e) {
    console.log("Testing testing 1 2 3");
=======
/**Modal function that shows a particular modal only after clicking the submit button. The message shown
 * depends on if all fields are not empty anymore = true or if one of the fields is still empty = true. In case 
 * of another error the request will be to try again.
 */
function myModal() {
>>>>>>> new_branch
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;

    if (name !== "" && email !== "" && question !== "") {
        return $("#clickModal");
    } else if (name == "" || email == "" || question == "") {
        return $("#clickModal2");
    } else
<<<<<<< HEAD
        alert("Sorry, something went wrong.. Please try again.")
=======
        return $("#clickModal3");
}

btn.addEventListener('click', () => {
    myModal().modal("show");
});

/**Refreshes the page to clear filled out information of the form once clicked on OK in the modal message,
 * only after the message that appears when all fields are filled out = true.
 */
function refreshPage() {
    window.location.reload();
>>>>>>> new_branch
}