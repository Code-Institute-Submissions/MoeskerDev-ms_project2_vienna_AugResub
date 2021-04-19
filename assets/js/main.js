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
        zoom: 10,
        center: myLatLng,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
    });
}









$(".buttons").on("click", function () {
    let allButtonsSelector = ".btn";
    let thisButtonsSelector = "." + this.id;
    $(allButtonsSelector).removeClass("btn-succes");
    $(thisButtonsSelector).addClass("btn-danger");
})



function submitClick() {
    if ("name" && "email" && "question" !== null) {
        alert("Thank you for submitting your question(s)!");
    } else if ("name" || "email" || "question" == null) {
        alert("Please fill out all fields on the form.");
    } else
        alert("Sorry, something went wrong.. Please try again.");

}