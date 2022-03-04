// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchISSFlyOverTimes({ latitude: 42.9591, longitude: -81.2323 }, (error, times) => {
  if (error) {
    console.log(`It didn't work!`, error);
    return;
  }
  console.log(`It worked! Returned times:`, times);
});

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