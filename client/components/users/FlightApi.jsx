import React from 'react';
import request from 'superagent';
import FlightView from './FlightView.jsx';


class FlightApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doors: [],
      budgets:[],
      newData:[],
    };
  }

  componentDidMount() {
    // this.httpGetFlights();
    this.httpGetBudget();
  }

  httpGetBudget() {
    const url = 'http://terminal2.expedia.com/x/mflights/search?departureAirport=JFK&arrivalAirport=LAX&departureDate=2016-10-22&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92';
    request.get(url)
           .then((response) => {
            const budgetData = response.body.offers;
            let budget: [];
            if (budgetData) {
              budget = Object.keys(budgetData).map((id) => {
                const individualBudgetData = budgetData[id];
                let RealLegsId = individualBudgetData.legIds[0];
                let totalFare = individualBudgetData.totalFare;
                let detailsURL = individualBudgetData.detailsUrl;
              return { RealLegsId, totalFare }
              })
              // console.log(budget)
            }
          // })
//         }

// httpGetFlights() {
//    const url = 'http://terminal2.expedia.com/x/mflights/search?departureAirport=JFK&arrivalAirport=LAX&departureDate=2016-10-22&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92';
//     request.get(url)
           // .then((response) => {
            console.log(RealLegsId)
              const flightData = response.body.legs;
              let flights: [];
              if (flightData) {
                flights = Object.keys(flightData).map((id) => {
                  const individualFlightData = flightData[id];
                    if (flightData[id].segments.length == 1 && flightData[id].segments[0].hasSeatMap === true) {
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
                    departureAirportCode, departureTime, departureAirportLocation, flightNumber}
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
                      departureAirportCode, departureTime, departureAirportLocation, flightNumber}
                    };
                })
              }
              let newData =[];
                for (let i=0 ; i < budget.length; i++) {
                  for (let j=0; j< flights.length; j++) {
                    if (budget[i].RealLegsId === flights[j].legId) {
                      newData.push(flights[j].legId, budget[i].RealLegsId, budget[i].totalFare, flights[j].airlineName,
                        flights[j].arrivalAirportCode, flights[j].arrivalAirportLocation, flights[j].arrivalTime, flights[j].departureAirportCode,
                        flights[j].departureAirportLocation, flights[j].departureTime, flights[j].flightNumber)
                      // newData.push(budget[i].totalFare)
                      // console.log(newData)
                      console.log(budget[i].totalFare)
                      console.log(budget[i].RealLegsId)
                      console.log(flights[j].legId)
                     // console.log(budget[i].RealLegsId)
                     // console.log(flights[j].legId)
                    }
                  }
                }
              console.log(newData)
                  this.setState({
                    doors: newData,
                  });
    })
  }

  render() {
    const value = this.state.doors.map((door) => {
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
