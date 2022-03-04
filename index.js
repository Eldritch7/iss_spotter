// index.js
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  //console.log(times);
  PrintTimes(times);
});



const PrintTimes = function(times) {

  for (const time of times.response) {
    //console.log(time);
    let date = new Date(0);
    date.setUTCSeconds(time.risetime);
    //console.log(date);
    let duration = time.duration;
    console.log(`Next pass will be at ${date} for ${duration}seconds`);
  }
};











//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchISSFlyOverTimes({ latitude: 42.9591, longitude: -81.2323 }, (error, times) => {
//   if (error) {
//     console.log(`It didn't work!`, error);
//     return;
//   }
//   console.log(`It worked! Returned times:`, times);
// });

// fetchCoordsByIP('198.2.83.242', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//      return;
    
//   }
//   console.log('It worked! Return coordinates:', coordinates);


// });


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   return ip;
// });