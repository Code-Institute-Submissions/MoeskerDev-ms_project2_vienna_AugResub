$("nav").fadeTo()


$("button-1").mouseenter(function () {
    $("button-1").css("color", "green");
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
        title: "Vienna/Wien",
    });
}



//<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"></script> -->