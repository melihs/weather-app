const request = require("request");
module.exports = function (location) {
    return new Promise(function(resolve,reject){

        let encodedLocationURI = encodeURIComponent(location);
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocationURI + ",tr&APPID=992147213ce1b4c0126caf63f4b9f481&units=metric";

        if(!location) {
            return reject('Location data not found!');
        }

        request({
                url :url,
                json : true
            },
            function (error,response,body) {
                if(error) {
                    reject("weather get data failed!");
                } else {
                    try {
                        resolve(' \n' +
                            body.name + ' : ' +
                            body.main.temp + ' C\n' +
                            'status : ' +
                            body.weather[0].main +
                            ' (' + body.weather[0].description + ')'
                        );
                    } catch(e) {
                        resolve("weather get data failed!");
                    }
                }
            }
        );
    })
}
