const superRequest = require('superagent');

class Flight {
  constructor() {
  }
  getFlight(travelFrom, destinationAirportCode, dateTo) {
    let responseURL = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${travelFrom}&arrivalAirport=${destinationAirportCode}&departureDate=${dateTo}&apikey=${process.env.FLIGHTAPI}`
    return superRequest.get(responseURL)
                       .then((responseResponse) => {
                         return responseResponse.body.offers
                       })
  }
}

module.exports = Flight;
