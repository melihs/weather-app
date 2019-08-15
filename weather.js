const request = require("request");
let url = "http://api.openweathermap.org/data/2.5/weather?q=istanbul,tr&APPID=992147213ce1b4c0126caf63f4b9f481&units=metric";

module.exports = function(callback){

    request({
    url : url,
    json : true,
},function (error,response,body) {
    if(error) {
        callback("weather get data failed!");
    } else {
        callback(body.name +"'da hava sıcaklığı: " + body.main.temp + " derece");
    }
});
}
