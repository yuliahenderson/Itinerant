const superRequest = require('superagent');

class Flight {
 constructor() {

 }
 getFlight(date,location,arrival) {
   let flightAPI = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${location}&arrivalAirport=${arrival}&departureDate=${date}&apikey=${process.env.APIKEY}`;
   return superRequest.get(flightAPI)
                      .then((flightData) => {
                        return flightData.body;
                      })
 }
}

module.exports = Flight;
