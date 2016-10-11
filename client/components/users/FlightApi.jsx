import React from 'react';
import request from 'superagent';
import FlightView from './FlightView.jsx';


class FlightApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doors: [],
      legId: '',
    };
  }

  componentDidMount() {
    this.httpGetFlights();
  }

  httpGetFlights() {
    const url = 'http://terminal2.expedia.com/x/mflights/search?departureAirport=JFK&arrivalAirport=LAX&departureDate=2016-10-22&apikey=weTYpjosgA8zTs4ZGESO8lB9iwBdMdKF'
    request.get(url)
           .then((response) => {
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
          console.log(this.state.doors);
}
        })
  }
  render() {
    const value = this.state.doors.map((door) => {
          if (door.legId !== "null") {
          console.log(door.legId)

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
