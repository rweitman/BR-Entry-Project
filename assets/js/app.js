$(document).ready(() => {

    //THIS IS HEAVILY BASED ON: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

    var req = "https://s3.amazonaws.com/br-codingexams/restaurants.json";

    var request = new XMLHttpRequest();



    request.open('GET', req);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
        var rests = request.response;
        var rests2 = JSON.parse(rests);
        console.log(rests2);
        populate(rests2);
    }

    function populate(object) {
        var resting = object['restaurants'];
        console.log(resting);
        console.log("YOUR LUCK!")



        for (var i = 0; i < resting.length; i++) {
            var sections = document.getElementById('sections');
            var articles = document.createElement('article');
            var addLink = document.createElement('a');
            var background = document.createElement('img');
            var background2 = document.createElement('img');
            var naming = document.createElement('p');
            var categories = document.createElement('p');

            console.log("Repeat");

            background.src = resting[i].backgroundImageURL;
            background2.src = "web-coding-exam-assets/Cuts/cellGradientBackground@2x.png";
            naming.textContent = resting[i].name;
            categories.textContent = resting[i].category

            var links = "map.html?id=" + i;

            background.setAttribute('class', 'rest-bground');
            background2.setAttribute('class', 'rest-bground2');
            addLink.setAttribute('href', links)
            naming.setAttribute('class', 'rest-name');
            categories.setAttribute('class', 'rest-category');
            articles.setAttribute('class', 'rest-article');

            articles.appendChild(background);
            articles.appendChild(background2);
            articles.appendChild(naming);
            articles.appendChild(categories);

            addLink.appendChild(articles);

            sections.appendChild(addLink);
        }

    }
});








//   $.getJSON( "https://s3.amazonaws.com/br-codingexams/restaurants.json", {
//     // tags: "restaurants",
//     // tagmode: "any",
//     // format: "json"
//   })
//   .done ( function(data) {
//       $.each( data.items, function( i, item ) {
//         $( "<img>" ).attr( "src", item.backgroundImageURL).appendTo( "#ground");
//         $( "<p>" ).attr( "id", item.name).appendTo( "#title");
//         $( "<p>" ).attr( "id", item.category).appendTo( "#category");

//         if ( i === data.length) {
//           return false;
//         }
//       });
//     });
// });



// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyB0D6wsmzqqzh85T5AZuOvGRcP7h-M-HNs",
//   authDomain: "br-entry.firebaseapp.com",
//   databaseURL: "https://br-entry.firebaseio.com",
//   projectId: "br-entry",
//   storageBucket: "",
//   messagingSenderId: "572975134302"
// };


// firebase.initializeApp(config);

// const base =  firebase.database();