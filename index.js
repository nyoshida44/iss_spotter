const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

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

// fetchISSFlyOverTimes({ latitude: 43.9228, longitude: -78.9412 }, (error, flyoverTime) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//   }
//   console.log("ISS will flyover at", flyoverTime);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});