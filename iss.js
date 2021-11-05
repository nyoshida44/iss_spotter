const request = require("request");

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, data) => {
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
    callback(null, objectIP["ip"]);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.freegeoip.app/json/${ip}?apikey=ff0b86e0-3dd3-11ec-b130-c5c1d00855da`, (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response: ${data}`;
      callback(Error(msg), null);
      return;
    }

    const objectLatLong = JSON.parse(data);
    const latLong = {
      latitude: objectLatLong["latitude"],
      longitude: objectLatLong["longitude"]
    };

    callback(null, latLong);
  });
};

//fetchCoordsByIP();

module.exports = { fetchMyIP, fetchCoordsByIP };