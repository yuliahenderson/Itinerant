import React from 'react';
import request from 'superagent';
import FlightView from './FlightView.jsx';

const propTypes = {
  handleResultsView: React.PropTypes.func,
  travelFrom: React.PropTypes.string,
  moneyToSpend: React.PropTypes.currency,
  dateTo: React.PropTypes.string,
  dateBack: React.PropTypes.string,
  handleSearch: React.PropTypes.func,
};
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
    const url = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${this.props.travelFrom}&arrivalAirport=LAX&departureDate=${this.props.dateTo}&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92`;
    request.get(url).then((response) => {
      const budgetData = response.body.offers;
      let legsIdArray = [];
      let openFlights = [];
      if (budgetData) {
        let budget = Object.keys(budgetData).map((id) => {
          const individualBudgetData = budgetData[id];
          let RealLegsId = individualBudgetData.legIds[0].toString();
          let totalFare = individualBudgetData.totalFare.toString();
          let detailsURL = individualBudgetData.detailsUrl.toString();
          const flightData = response.body.legs;
          if (flightData) {
          let flights = Object.keys(flightData).map((id) => {
              const individualFlightData = flightData[id];
              let legId=individualFlightData.legId;
              if (individualFlightData.segments.length == 1 &&
                  individualFlightData.segments[0].hasSeatMap === true &&
                  RealLegsId === legId) {
                let airlineName = individualFlightData.segments[0].airlineName;
                let arrivalAirportCode = individualFlightData.segments[0].arrivalAirportCode;
                let arrivalAirportLocation = individualFlightData.segments[0].arrivalAirportLocation;
                let arrivalTime = individualFlightData.segments[0].arrivalTime;
                let departureAirportCode = individualFlightData.segments[0].departureAirportCode;
                let departureAirportLocation = individualFlightData.segments[0].departureAirportLocation;
                let departureTime = individualFlightData.segments[0].departureTime;
                let flightNumber = individualFlightData.segments[0].flightNumber;
                openFlights.push({legId, airlineName, arrivalAirportCode, arrivalAirportLocation, arrivalTime,
                departureAirportCode, departureTime, departureAirportLocation, flightNumber, RealLegsId,
                totalFare, detailsURL});
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
  httpGetReturnFlights() {
    const url = `http://terminal2.expedia.com/x/mflights/search?departureAirport=${this.props.travelFrom}&arrivalAirport=LAX&departureDate=${this.props.dateTo}&apikey=X4ccWU6YHcmRcc8AowPNxAGgVA8QaZ92`;
    request.get(url).then((response) => {
      const budgetData = response.body.offers;
      let legsIdArrayReturn = [];
      let openFlightsReturn = [];
      if (budgetDataReturn) {
        let budgetReturn = Object.keys(budgetData).map((id) => {
          const individualBudgetData = budgetData[id];
          let ReturnRealLegsId = individualBudgetData.legIds[0].toString();
          let ReturnTotalFare = individualBudgetData.totalFare.toString();
          let ReturnDetailsURL = individualBudgetData.detailsUrl.toString();
          const flightData = response.body.legs;
          if (flightData) {
          let flights = Object.keys(flightData).map((id) => {
              const individualFlightDataReturn = flightData[id];
              let legIdReturn=individualFlightData.legId;
              if (individualFlightData.segments.length == 1 &&
                  individualFlightData.segments[0].hasSeatMap === true &&
                  ReturnRealLegsId === legIdReturn) {
                let airlineNameReturn = individualFlightData.segments[0].airlineName;
                let arrivalAirportCodeReturn = individualFlightData.segments[0].arrivalAirportCode;
                let arrivalAirportLocationReturn = individualFlightData.segments[0].arrivalAirportLocation;
                let arrivalTimeReturn = individualFlightData.segments[0].arrivalTime;
                let departureAirportCodeReturn = individualFlightData.segments[0].departureAirportCode;
                let departureAirportLocationReturn = individualFlightData.segments[0].departureAirportLocation;
                let departureTimeReturn = individualFlightData.segments[0].departureTime;
                let flightNumberReturn = individualFlightData.segments[0].flightNumber;
                openFlightsReturn.push({legIdReturn, airlineNameReturn, arrivalAirportCodeReturn, arrivalAirportLocationReturn, arrivalTimeReturn,
                departureAirportCodeReturn, departureTimeReturn, departureAirportLocationReturn, flightNumberReturn, RealLegsIdReturn,
                totalFareReturn, detailsURLReturn});
              }
            });
            console.log(openFlightsReturn);
            this.setState({
              doorsReturn: openFlightsReturn,
            });
          }
        });
      }
    })
  }
  render() {
    // if (this.props.moneyToSpend > (parseInt(totalFare) + parseInt(returnTotalFare))) {

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
                />
              )
          }

      });
    return(
        <div>
          <p className="welcomeMessage"> The trips we found for you: </p>
          {value}
        </div>
      )

  }
}

export default FlightApi;
