//The focus of the map is always Vienna via it's lat and lng position

function findSleep() {

    const properties = {
        lat: 48.2082,
        lng: 16.3738
    }
    //The center of the map is Vienna with a zoom according to guidelines for a city
    const mapProp = {

        center: properties,
        zoom: 12,
    };
    //Creates a new map inside the div with id map and it calls the properties to know how to render the map
    const map = new google.maps.Map(document.getElementById("map"), mapProp);

    //Add markers regarding my recommendations for sleeping in Vienna
    //function findSleep() {
    const myMarks = [{
            "lat": 48.196790,
            "lng": 16.360930,
            "name": "Wombat's hostel",
            "information": `Wombat’s The City Hostel Vienna is located right next to the Naschmarkt. Just head out the front door to browse the food stalls and also the flea market on Saturday! We’re easy to reach: the metro station Kettenbrückengasse (U4) is located just a few minutes away. Feel free to join in on different group activities and make new friends in our cheerful WomBar. You can share a room or even stay in a private room.`,
            "website": "https://www.wombats-hostels.com/vienna/the-naschmarkt/"
        },
        {
            "lat": 48.204140,
            "lng": 16.342310,
            "name": "Hotel Sans Souci",
            "information": `The Sans Souci Wien, a boutique hotel, is the answer to every unspoken desire for an urban retreat located right at the heart of Vienna’s cultural and artistic city centre. Directly adjacent to the Museums Quarter Vienna, it is a haven of relaxation with a multitude of delights for the senses, and a place of art.`,
            "website": "https://www.sanssouci-wien.com/en/"
        }
    ];

    var InfoObj = [];

    for (let i = 0; i < myMarks.length; i++) {
        let contentString = `<h3>${myMarks[i].name}</h3><p>${myMarks[i].information}</p>${myMarks[i].website}`

        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name,
            animation: google.maps.Animation.DROP,
        });
        //Set up infowindow
        const infoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });
        //Add a click listener to the marker
        marker.addListener("click", function () {
            //Close other windows
            closeOtherInfo();
            //Create new window
            infoWindow.open(map, marker);
            InfoObj[0] = infowindow;
        });
    }
    //This function clears old information
    function closeOtherInfo() {
        if (InfoObj.length > 0) {
            InfoObj[0].set("marker", null);
            InfoObj[0].close();
            InfoObj[0].length = 0;
        }
    }
}

//Calling the map
findSleep();

//   }






//Create functions for each button
//Add markers
//function findSleep() {
//   const myMarks = [{
//          "lat": 48.196790,
//          "lng": 16.360930,
//          "name": "Wombat's hostel"
//      },
//      {
//          "lat": 48.204140,
//          "lng": 16.342310,
//          "name": "Hotel Sans Souci"
//      }
//  ];
//  for (let i = 0; i < myMarks.length; i++) {
//      const marker = new google.maps.Marker({
//          position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
//          map: map,
//         title: myMarks[i].name
//      });
//marker.setMap(map);
//   }
//}


















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