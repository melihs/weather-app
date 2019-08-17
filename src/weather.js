const request = require("request");


module.exports = function(location,callback){

    let encodedLocationURI = encodeURIComponent(location);
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + encodedLocationURI + ",tr&APPID=992147213ce1b4c0126caf63f4b9f481&units=metric";

    if(!location) {
        return callback('Location data not found!');
    }

    request({
    url :url,
    json : true,
},function (error,response,body) {
    if(error) {
        callback("weather get data failed!");
    } else {
       try {
           callback("\n");
           callback(body.name + ' : ' + body.main.temp + ' C\n');
           callback('status : ' + body.weather[0].main + ' (' + body.weather[0].description + ')');
       } catch(e) {
           callback("weather get data failed!");
       }
    }

});
}
