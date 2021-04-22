window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    initMap();
    changeColor();
    myModal();
});

function initMap() {
    const myLatLng = {
        lat: 48.2082,
        lng: 16.3738
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
    });
}

//Change colour of button after being clicked and return to previous colour after clicking another button
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

/**Modal function */
let btn = document.getElementById("submit-btn");

btn.addEventListener('click', () => {
    myModal().modal("show");
});

function myModal() {
    console.log('Testing a lot');
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;

    if (name !== "" && email !== "" && question !== "") {
        return $("#clickModal");
    } else if (name == "" || email == "" || question == "") {
        return $("#clickModal2");
    } else
        return $("#clickModal3");
}


/*Refresh page to clear info in form once clicked ok in the modal */
function refreshPage() {
    window.location.reload();
}












//Function that will show an alert depending on if all fields are filled out or not plus in case of another error
/*let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    submitClick();
})

function submitClick(e) {
    console.log("Testing testing 1 2 3");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let question = document.getElementById("question").value;

    if (name !== "" && email !== "" && question !== "") {
        alert("Thank you for submitting your question(s)!");
    } else if (name == "" || email == "" || question == "") {
        alert("Please fill out all fields of the form.");
    } else
        alert("Sorry, something went wrong.. Please try again.");

}*/