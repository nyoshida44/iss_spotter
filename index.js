const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("99.231.232.87", (error, latLong) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//   }
//   console.log("Your coordinates are", latLong);
// });

fetchISSFlyOverTimes({ latitude: 43.9228, longitude: -78.9412 }, (error, flyoverTime) => {
  if (error) {
    console.log("It didn't work!" , error);
  }
  console.log("ISS will flyover at", flyoverTime);
});