const ipInfo = require("ipinfo");

module.exports = function(){
    return new Promise(function(resolve,reject){
        ipInfo((err,response) => {
            if(response) {
                resolve(response);
            }else {
                reject(err);
            }
        });
    });
}


