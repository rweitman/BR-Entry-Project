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


        var num = window.location.search.substr(4);

        var ids = Number(num);

        console.log(ids);

        var city = resting[ids].location.city;
        var state = resting[ids].location.state;
        var address = resting[ids].location.address;
        var naming = resting[ids].name;
        var cats = resting[ids].category;
        var zip = resting[ids].location.formattedAddress[1];


        if (resting[ids].contact !== null) {
            var phone = resting[ids].contact.formattedPhone;
            var twitter = resting[ids].contact.twitter;
            if (phone !== undefined) {
                $("#info_phone").text(phone);
            }
            if (twitter !== undefined) {
                $("#info_twitter").text("@" + twitter);
            }
        }


        var mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyB3VS7RgLCswTD02lz2wY26Ish8hNF1-ZQ&zoom=16&q=" + address + "," + city + "+" + state;

        $("#mapps").attr("src", mapURL);

        $("#map_category").text(cats);

        $("#map_name").text(naming);

        $("#info_address").text(address);

        $("#info_zip").text(zip);

    }
});