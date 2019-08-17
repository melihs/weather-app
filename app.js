const weather = require('./src/weather');
const location = require("./src/location");
const yargs = require("yargs");

const argv = yargs
    .options({
        location : {
            demand : false,
            type : 'string',
            alias : 'l',
            description : 'Enter location (example : istanbul)'
        }
    })
    .help()
    .argv;
console.log("*************************************************");
console.log("*                                               *");
console.log("*                WEATHER CONSOLE                *");
console.log("*                  APPLICATION                  *");
console.log("*                                               *");
console.log("*************************************************\n");

if(typeof argv.location == 'string' && argv.location.length > 0) {
    console.log("> Location entered...");
    weather(argv.location,function (currentWeather) {
        console.log(currentWeather);
    })
}else {
    console.log("> Calculating your location...");

    location(function (location) {
        if(!location) {
            console.log("Location not found");
        } else {
            // weather(location.city,function(currentWeather){
            //     console.log(currentWeather);
            // });
        }
    });
}





