window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    return initMap();
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

//Change colour of button after being clicked
$(".buttons").on("click", function () {
    let allButtonsSelector = ".btn";
    let thisButtonsSelector = "." + this.id;
    $(allButtonsSelector).removeClass("btn-succes");
    $(thisButtonsSelector).addClass("btn-danger");
})

//Function that will show an alert depending on if all fields are filled out or not plus in case of another error
let submitBtn = document.getElementById('submit-btn');

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

}