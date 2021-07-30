let google = null;
let marker = null;
let infoObj = null;
let map = new google.maps.Map(document.getElementById("map"));


/**Once the window is loaded a message appears in the console of devTools, which is a check
 * for loading the file properly. The map function is called on top right after loading the window in case of slowly
 * loading pages.
 */
window.addEventListener('load', () => {
    findSee();
    findSleep();
    findEat();
    initMap();
});

/**Function to render the map on load of the page. The center focus of the map is Vienna via it's latitude and 
 * longtitude coordinates. The zoom is 12 so that the focus at the start is close enough 
 * zoomed to see the city and a marker is added to show the user straight away, on page load, 
 * where Vienna on the map is located.
 */
function initMap() {
    const myLatLng = {
        lat: 48.2082,
        lng: 16.3738
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
    });
    marker = new google.maps.Marker({
        position: myLatLng,
        map,
    });
}
/**This function renders the map with a focus on the city via the latitude and longtitude coordinates of 
 * the center of Vienna and with a zoom of 12. Linking it to the position where map was placed in the html file.
 */
function renderMap() {
    const myLatLng = {
        lat: 48.2082,
        lng: 16.3738
    };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
    });
    return map;
}
/**This function is looping over myMarks and provides a content string which displays in the infowindow.
 * It references to the information stored in the myMarks variable from all three find functions.
 * Then calling markers to the map with a drop effect and setting up the infowindow with content.
 * Below that, the marker gets a click listener.
 */
function gettingMarks(renderedMap, myMarks) {
    for (let i = 0; i < myMarks.length; i++) {
        let contentString = `<h3>${myMarks[i].name}</h3><p>${myMarks[i].information}</p><a target="_blank" href=${myMarks[i].website}>Find out more!</a>`;

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: renderedMap,
            title: myMarks[i].name,
            animation: google.maps.Animation.DROP,
        });

        let infoWindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });
        marker.addListener("click", function () {
            closeOtherInfo();
            infoWindow.open(renderedMap, marker);
            infoObj = infoWindow;
        });
    }
}
/**This function removes the markers present on the map before clicking on a button, so it 
 * removes old markers not linked to the button clicked
 */
function closeOtherInfo() {
    if (infoObj != null) {
        infoObj.set("marker", null);
        infoObj.close();
    }
}
/**Function to provide the information to the markers for the button Sleep via latitude and longtitude 
 * coordinates. Once clicking on the markers an infowindow will display. The title, text and link to the 
 * website is the content of the infowindow that will be displayed. The function is called at the top.
 */
function findSleep() {
    let map = renderMap();
    let myMarks = [{
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
    gettingMarks(map, myMarks);
}


/**Function to provide the information to the markers for the button Eat via latitude and longtitude 
 * coordinates. Once clicking on the markers an infowindow will display. The title, text and link to the 
 * website is the content of the infowindow that will be displayed. The function is called at the top.
 */
function findEat() {
    let map = renderMap();
    let myMarks = [{
            "lat": 48.209230,
            "lng": 16.375530,
            "name": "Restaurant Figlmüller",
            "information": `At Figlmüller fine dining goes beyond the edge of the plate: The average schnitzel measures roughly thirty centimeters in diameter and is eaten in no time. Why? Because it tastes tender, juicy, and is covered in a crispy coating.`,
            "website": "https://figlmueller.at/en/baeckerstrasse-2/"
        },
        {
            "lat": 48.202100,
            "lng": 16.372190,
            "name": "Restaurant Le Ciel",
            "information": `Le Ciel – in heaven! Our restaurant name reflects our philosophy. It is a place for people who love to enjoy their lifes away from the pulsating city with a splendid view over the rooftops of Vienna. The Le Ciel – awarded with 1 Michelin star as well as with 4 toques and 17.5 scores from Gault Millau – impresses through its innovative and creative Gourmet cuisine at the highest stage and provides an atmosphere of indulgence.`,
            "website": "https://www.grandhotelwien.com/en/dine-with-us/le-ciel-by-toni-moerwald/?utm_source=google&utm_medium=local&utm_campaign=GHW_LeCiel_Local"
        },
        {
            "lat": 48.210150,
            "lng": 16.365380,
            "name": "Café Central",
            "information": `A revolutionary (Trotsky), a psychoanalyst (Freud), several writers and poets (including Polgar, Zweig and Altenberg) and an architect (Loos) walked into a café. What sounds like the start of a joke was an everyday occurrence at Café Central (est. 1876). Over coffee, cake and the odd cigar, some of the greatest poets, philosophers and – it has to be said – storytellers the world has ever seen, got together in Vienna’s most attractive coffeehouse.`,
            "website": "https://www.cafecentral.wien/en/"

        },
        {
            "lat": 48.199940,
            "lng": 16.361310,
            "name": "Café Sperl",
            "information": `The Viennese audience, as well as the tourists from all over the world, are drawn into the spell of Café Sperl. A visit to Café Sperl is like a dive into the history of Vienna, a stage for artists and the public.`,
            "website": "https://www.cafesperl.at/en_home.html"
        }
    ];
    gettingMarks(map, myMarks);
}


/**
 * Function to provide the information to the markers for the button See via latitude and longtitude 
 * coordinates. Once clicking on the markers an infowindow will display. The title, text and link to the 
 * website is the content of the infowindow that will be displayed. The function is called at the top.
 */
function findSee() {
    let map = renderMap();
    let myMarks = [{
            "lat": 48.186580,
            "lng": 16.313160,
            "name": "Schloss Schönbrunn",
            "information": `At the end of the seventeenth century Emperor Leopold I commissioned the Baroque architect Johann Bernhard Fischer von Erlach, who had received his training in Rome, to design an imperial hunting lodge for his son, Crown Prince Joseph, later to become Emperor Joseph I. Replacing the château de plaisance built on this site for the dowager empress Eleonora of Gonzaga in 1642, it was to grow into a palatial imperial residence over the course of the eighteenth century.`,
            "website": "https://www.schoenbrunn.at/en/"
        },
        {
            "lat": 48.192176021331456,
            "lng": 16.382391321695977,
            "name": "Belvedere",
            "information": `The Belvedere in Vienna is one of the leading museums worldwide. Its famous art collection includes works ranging from the Middle Ages to the present day. Austrian art in an international context is presented in three locations.  Highlights include the world's largest collection of Gustav Klimt paintings as well as prominent works from the periods of Viennese Biedermeier, Austrian Baroque, Vienna around 1900, and French Impressionism. `,
            "website": "https://www.belvedere.at/en/museum"
        },
        {
            "lat": 48.19920357359974,
            "lng": 16.373158775663978,
            "name": "Karlskirche",
            "information": `Widely considered the most outstanding baroque church in Vienna, as well as one of the city's greatest buildings. The church contains a dome in the form of an elongated ellipsoid.`,
            "website": "http://www.karlskirche.at/"
        },
        {
            "lat": 48.20815210413958,
            "lng": 16.39661152857596,
            "name": "Hundertwasser Haus",
            "information": `Some people say houses consist of walls. I say houses consist of windows. When different houses stand next to each other in a street, all having different window types, i.e., window races, for example an Art Nouveau house with Art Nouveau windows next to a modern house with unadorned square windows, followed in turn by a Baroque house with Baroque windows, nobody minds. But should the three window types of the three houses belong to one house, it is seen as a violation of the racial segregation of windows. Why?`,
            "website": "http://www.hundertwasser-haus.info/en/"
        },
        {
            "lat": 48.20670173719618,
            "lng": 16.36649691375997,
            "name": "Hofburg",
            "information": `Vienna's Imperial Palace is one of the biggest palace complexes in the world. The oldest parts date to the 13th century, with construction having continued right into the 20th century. The Imperial Palace was the residence and seat of government of the Habsburg emperors until 1918. Today, it is home to numerous museums with outstanding collections, the Spanish Riding School, a congress center, the seat of the Austrian Federal President as well as the historic Heldenplatz.`,
            "website": "https://www.wien.info/en/sightseeing/sights/imperial/hofburg-vienna"
        },
        {
            "lat": 48.20876889591288,
            "lng": 16.37591687460796,
            "name": "St. Stephen’s Cathedral",
            "information": `St. Stephen’s Cathedral is both the spiritual and geographical centre of the city of Vienna. There are many ways to experience the cathedral. Choose from a wide range of guided tours or enjoy a wonderful view over Vienna from the towers.`,
            "website": "https://www.stephanskirche.at/"
        },
        {
            "lat": 48.20324887296936,
            "lng": 16.36997313387192,
            "name": "Wiener Staatsoper",
            "information": `Wiener Staatsoper is one of the leading opera houses in the world. Its past is steeped in tradition. Its present is alive with richly varied performances and events. Each season, the schedule features 350 performances of more than 60 different operas and ballets. Every night, you can witness world-class artists alongside the permanent ensemble members on the stage and at the conductor’s desk, accompanied by a unique orchestra: the orchestra of Wiener Staatsoper, whose members at the same time make up the Vienna Philharmonic Orchestra.`,
            "website": "https://www.wiener-staatsoper.at/en/"
        }
    ];
    gettingMarks(map, myMarks);
}