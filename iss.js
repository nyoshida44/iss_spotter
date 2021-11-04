request = require("request");

const fetchMyIP = function(callback) { 
  request('https://api.ipify.org?format=json', (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }
  
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }
  
    const objectIP = JSON.parse(data);
    callback(null, objectIP["ip"])
  })
};

const fetchCoordsByIP = function(ip, callback) {

};

module.exports = { fetchMyIP, fetchCoordsByIP };