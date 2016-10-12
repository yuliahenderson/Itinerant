import React from 'react';
import request from 'superagent';
import FlightView from './FlightView.jsx';


class FlightApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doors: [],
    };
  }

  componentDidMount() {
    this.httpGetFlights();
  }

  httpGetFlights() {
    const url = 'http://terminal2.expedia.com/x/mflights/search?departureAirport=JFK&arrivalAirport=LAX&departureDate=2016-10-22&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92'
    let i = 0;
    request.get(url)
           .then((response) => {
            const budgetData = response.body.offers;
            let legsIdArray = [];
            let budget: [];
            if (budgetData) {
              budget = Object.keys(budgetData).map((id) => {
                const individualBudgetData = budgetData[id];
                let RealLegsId = individualBudgetData.legIds[0];
                let totalFare = individualBudgetData.totalFare;
                let detailsURL = individualBudgetData.detailsUrl;
                let moneyToSpend = 500;
                const newUrl = 'http://terminal2.expedia.com/x/mflights/search?departureAirport=LAX&arrivalAirport=JFK&departureDate=2016-10-28&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92'
                  request.get(newUrl)
                         .then((response) => {
                              const returnBudgetData = response.body.offers;
                              let dummyArray = [];
                              let returnBudget = [];
                              if (returnBudgetData) {
                                returnBudget = Object.keys(returnBudgetData).map((id) => {
                                  const returnIndividualBudgetData = returnBudgetData[id];
                                  let returnLegsId = returnIndividualBudgetData.legIds[0];
                                  let returnTotalFare = returnIndividualBudgetData.totalFare;
                                  let returnDetailsURL = returnIndividualBudgetData.detailsUrl;
                                  if (moneyToSpend > (parseInt(totalFare) + parseInt(returnTotalFare))) {
                                      dummyArray.push(RealLegsId, totalFare, detailsURL);
                                      dummyArray.push(returnLegsId, returnTotalFare, returnDetailsURL);

                                  }
                                })

                              }
                        });
                         console.log(legsIdArray)
                });

              }
                     //dummy component

              const flightData = response.body.legs;
              let flights: [];
              if (flightData) {
                flights = Object.keys(flightData).map((id) => {
                  const individualFlightData = flightData[id];
                  if (flightData[id].segments.length == 1 && flightData[id].segments[0].hasSeatMap === true) {
                    // console.log(flightData[id])
                  let legId=individualFlightData.legId;
                  let airlineName = individualFlightData.segments[0].airlineName;
                  let arrivalAirportCode = individualFlightData.segments[0].arrivalAirportCode;
                  let arrivalAirportLocation = individualFlightData.segments[0].arrivalAirportLocation;
                  let arrivalTime = individualFlightData.segments[0].arrivalTime;
                  let departureAirportCode = individualFlightData.segments[0].departureAirportCode;
                  let departureAirportLocation = individualFlightData.segments[0].departureAirportLocation;
                  let departureTime = individualFlightData.segments[0].departureTime;
                  let flightNumber = individualFlightData.segments[0].flightNumber;
                    return {legId, airlineName, arrivalAirportCode, arrivalAirportLocation, arrivalTime,
                    departureAirportCode, departureTime, departureAirportLocation, flightNumber,
                  }
                  } else {
                    let legId="null";
                    let airlineName="null";
                    let arrivalAirportCode = "null";
                    let arrivalAirportLocation = "null";
                    let arrivalTime = "null";
                    let departureAirportCode = "null";
                    let departureAirportLocation = "null";
                    let departureTime = "null";
                    let flightNumber = "null";
                    return {legId, airlineName, arrivalAirportCode, arrivalAirportLocation, arrivalTime,
                      departureAirportCode, departureTime, departureAirportLocation, flightNumber,
                       }
                    }
                  });
                  this.setState({
                    doors: flights,
                  });
                }
    })
  }

  render() {
    const value = this.state.doors.map((door) => {
          if (door.legId !== "null") {
            return (
                <FlightView
                   legId = {door.legId}
                   airlineName = {door.airlineName}
                   arrivalAirport = {door.arrivalAirportCode}
                   arrivalLocation = {door.arrivalAirportLocation}
                   arrivalTime = {door.arrivalTime}
                   departureAirport = {door.departureAirportCode}
                   departureTime = {door.departureTime}
                   departureLocation = {door.departureAirportLocation}
                   flightNumber = {door.flightNumber}
                />
              )
          }

      });

    return(
        <div>
        Hello
        {value}
        </div>
      )

  }
}

export default FlightApi;
