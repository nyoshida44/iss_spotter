const {nextISSTimesForMyLocation} = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passtimes) => {
    for (const pass of passtimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  });