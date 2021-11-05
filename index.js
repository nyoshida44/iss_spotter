const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
