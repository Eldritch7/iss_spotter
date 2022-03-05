const { nextISSTimesForMyLocation, } = require("./iss_promised");

//fetchMyIP().then(fetchCoordsByIP).then(fetchISSFlyOverTimes).then(body => console.log(body));

nextISSTimesForMyLocation().then((times) => {
  printTimes(times);
}).catch((error) => {
  console.log("It didn't work: ", error.message);
});

const printTimes = function(times) {
  //console.log(times);
  for (const time of times) {
    //console.log(time);
    let date = new Date(0);
    date.setUTCSeconds(time.risetime);
    //console.log(date);
    let duration = time.duration;
    console.log(`Next pass will be at ${date} for ${duration}seconds`);
  }
};