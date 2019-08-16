const ipInfo = require("ipinfo");

module.exports = function(callback){
    ipInfo((err,response) => {
        callback(err || response);
    });
}
