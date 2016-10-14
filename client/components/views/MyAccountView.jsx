import React from 'react';
import FlightSearch from './FlightsSearch.jsx';
import TripList from '../trips/TripList.jsx';
import TripForm from '../trips/TripForm.jsx';
import request from 'superagent';
import SavedFlights from '../users/SavedFlights.jsx';


class MyAccountView extends React.Component {
   constructor(props) {
    super(props);
    this.state ={
      doors: [],
    }
    this.getData = this.getData.bind(this);
   }
  componentDidMount() {
    this.getData();
  }

  httpGetFlights(travelFrom, destinationAirportCode, dateTo) {
      let newData = [];
      let openFlights = [];
      for(let i = 0; i < 30; i++) {
      let randomVariable = Math.floor(Math.random()*519);
      let destinationAirportCode = this.state.airportDestinationArray[randomVariable];
      console.log(destinationAirportCode)
      const url = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${travelFrom}&arrivalAirport=${destinationAirportCode}&departureDate=${dateTo}&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92`;
      request.get(url).then((response) => {
      const budgetData = response.body.offers;
      if (budgetData) {
        let budget = Object.keys(budgetData).map((id) => {
          const individualBudgetData = budgetData[id];
          let RealLegsId = individualBudgetData.legIds[0].toString();
          let totalFare = individualBudgetData.totalFare
          let detailsURL = individualBudgetData.detailsUrl.toString();
          const flightData = response.body.legs;
          let money = this.props.moneyToSpend
          if (flightData) {
          let flights = Object.keys(flightData).map((id) => {
              const individualFlightData = flightData[id];
              let legId=individualFlightData.legId;
              if (individualFlightData.segments.length == 1 &&
                  individualFlightData.segments[0].hasSeatMap === true &&
                  RealLegsId === legId) {
                    if(parseFloat(money) > parseFloat(totalFare)) {
                let airlineName = individualFlightData.segments[0].airlineName;
                let arrivalAirportLocation = individualFlightData.segments[0].arrivalAirportLocation;
                let arrivalAirportCode = individualFlightData.segments[0].arrivalAirportCode;
                let arrivalTime = individualFlightData.segments[0].arrivalTime;
                let departureAirportCode = individualFlightData.segments[0].departureAirportCode;
                let departureAirportLocation = individualFlightData.segments[0].departureAirportLocation;
                let departureTime = individualFlightData.segments[0].departureTime;
                let flightNumber = individualFlightData.segments[0].flightNumber;
                openFlights.push({legId, airlineName, arrivalAirportCode, arrivalAirportLocation, arrivalTime,
                departureAirportCode, departureTime, departureAirportLocation, flightNumber, RealLegsId,
                totalFare, detailsURL, destinationAirportCode})
                openFlights.sort(function(a,b) {
                  if(a.totalFare > b.totalFare) {
                    return 1;
                  }
                  if (a.totalFare < b.totalFare) {
                    return -1
                  } if ( a.totalFare = b.totalFare) {
                  return 0
                  }
                })
                  }
                }
                else if (openFlights.length === 0) {
                  console.log("no flights")
                  }
            });
            this.setState({
              doors: openFlights,
            });
          }
        });
      }
    })
    }
  }
  getData() {
    this.props.flights.map((flight) => {
      console.log(flight.body);
      travelFrom = flight.body.location;
      destinationAirportCode = flight.body.arrival;
      dateTo = flight.body.dateTo;
      httpGetFLights(travelFrom, destinationAirportCode, dateTo);
    });
  }

  render(){
      // <TripForm sendTrip={this.props.sendTrip} />
      // <TripList trips={this.props.trips} />
const value = this.state.doors.map((door) => {
          if (door.legId !== "null" ) {
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
                   RealLegsId = {door.RealLegsId}
                   totalFare = {door.totalFare}
                   detailsURL = {door.detailsURL}
                   returnFlight = {this.httpGetReturnFlights}
                   destinationAirportCode = {door.departureAirportCode}
                   dateTo = {this.props.dateTo}
                />
              )
          } else {
            alert("Your price is way too high")
          }
        });
    return(
      <div>
      <p className="welcomeMessage">My Saved Trips:</p>
      {value}
      </div>
      )
  }
 }

export default MyAccountView;
