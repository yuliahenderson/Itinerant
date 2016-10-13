import React from 'react'

class FlightView extends React.Component {
  constructor(props) {
    super(props);
    }
  render() {
    return(

      <div>
      <div id="flightDetails" className="clearfix">
        <p className="airlineName"> {this.props.airlineName} </p>
        <p> detailsURL: {this.props.detailsURL}</p>
        <p> totalFare:{this.props.totalFare} </p>
        <p className="tripDate"> {this.props.departureTime} - {this.props.arrivalTime} </p>
        <p className="destination"> {this.props.departureLocation} - {this.props.arrivalLocation} </p>
      </div>
        <img className="heartButton" src="stylesheets/heart.png" />
      </div>
    )
  }
}
export default FlightView;
