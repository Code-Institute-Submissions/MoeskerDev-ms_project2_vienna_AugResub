//The focus of the map is always Vienna via it's lat and lng position

function initMap() {

    const properties = {
        lat: 48.2082,
        lng: 16.3738
    }
    //The center of the map is Vienna with a zoom according to guidelines for a city
    const mapProp = {

        center: properties,
        zoom: 10,
    };
    //Creates a new map inside the div with id map and it calls the properties to know how to render the map
    const map = new google.maps.Map(document.getElementById("map"), mapProp);
}

//Calling the map
initMap();










/** 
let map;
let infowindow;
let service;
let markers = [];
let autocomplete;

//Starting location of the map on the website is focused on Vienna, Austria diplayed as a marker
function initMap() {
    const Vienna = {
        lat: 48.2082,
        lng: 16.3738
    };
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: Vienna,
    });
    /*new google.maps.Marker({
        position: Vienna,
        map,
        title: 'Vienna/Wien',
    });
    //Creates a specific marker for that place
    const request = {
        query: "Café Central Vienna",
        fields: ["name"],
    }

    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}
document.getElementsByClassName("button-1")[0].addEventListener("click", function () {
    findSleep(type, map);
});
document.getElementsByClassName("button-2")[0].addEventListener("click", function () {
    findEat(type, map);
});
document.getElementsByClassName("button-3")[0].addEventListener("click", function () {
    findSee(type, map);
});



//Displays the map 
function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    })

    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });
}

//Creating autocomplete for a certain area, center Vienna and 6km around
const center = {
    lat: 48.2082,
    lng: 16.3738
};

const defaultBounds = {
    north: center.lat + 0.06,
    south: center.lat - 0.06,
    east: center.lng + 0.06,
    west: center.lng - 0.06,
}

//Links the click event of the specific button to the function
document.getElementsByClassName("button-1").addEventListener("click", function () {
    findSleep(type, map);
});
document.getElementsByClassName("button-2").addEventListener("click", function () {
    findEat(type, map);
});
document.getElementsByClassName("button-3").addEventListener("click", function () {
    findSee(type, map);
});



function findSleep() {
    const sleep = {
        bounds: map.getBounds(),
        types: ["hotel"],
    };
}



"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"*/