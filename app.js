const weather = require('./src/weather');
const location = require("./src/location");

weather(function(currentWeather){
    console.log(currentWeather);
});

location(function (location) {
    if(!location) {
        console.log("Location not found");
    } else {
        console.log("city: " + location.city);
        console.log("Long/Lat: " + location.loc);
        console.log("country: " + location.country);
    }
});

