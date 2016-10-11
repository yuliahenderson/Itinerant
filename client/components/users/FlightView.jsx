import React from 'react'

class FlightView extends React.Component {
  constructor(props) {
    super(props);
    }
  render() {
    return(
      <div>
        <p> LegId: {this.props.legId} </p>
        <p> airlineName: {this.props.airlineName} </p>
        <p> arrivalAirport: {this.props.arrivalAirport} </p>
        <p> arrivalLocation: {this.props.arrivalLocation} </p>
        <p> arrivalTime: {this.props.arrivalTime}</p>
        <p> departureAirport: {this.props.departureAirport}</p>
        <p> departureTime: {this.props.departureTime}</p>
        <p> departureLocation:{this.props.departureLocation}</p>
        <p> flightNumber: {this.props.flightNumber}</p>
        <p>&nbsp;</p>

      </div>
    )
  }
}
export default FlightView;
