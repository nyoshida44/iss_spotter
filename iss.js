request = require("request");

const fetchMyIP = function(callback) { 
  request('https://api.ipify.org?format=json', (error, response, data) => {
    if (error) {
      callback(error, null);
      return;
    }
    const objectIP = JSON.parse(data);
  callback(null, objectIP["ip"])
  })
};

module.exports = { fetchMyIP };