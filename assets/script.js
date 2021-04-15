$("nav").fadeTo()


$("button-1").mouseenter(function () {
    $("button-1").css("color", "green");
});


//<script>
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 48.2082,
            lng: 16.3738
        }
    });
}
//</script>


//<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"></script> -->