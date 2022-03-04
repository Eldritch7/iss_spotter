const request = require("request");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

/* Define the fetchCoordsByIP function in iss.js.

It should take in two arguments: ip (string) and callback
Add the function to the object properties being exported from iss.js
For now, it can have an empty body and do nothing
 */

const fetchCoordsByIP = function(ip, callback) {
  request(`https://api.freegeoip.app/json/${ip}?apikey=e51080d0-9b4c-11ec-afc5-17b624f19684`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates for ${ip}:`, body), null);
      return;
    }
    const {latitude, longitude} = JSON.parse(body);
    console.log(latitude);

    callback(null, {latitude, longitude});
  });

};
const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
      
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    let data = JSON.parse(body);
    //console.log(data);
    let ip = data['ip'];
    //console.log(ip);
    return callback(null, ip);
    
  
  });
  // use request to fetch IP address from JSON API
};

module.exports = { fetchMyIP, fetchCoordsByIP };
