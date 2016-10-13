import React from 'react'

class FlightView extends React.Component {
  constructor(props) {
    super(props);
    }
  render() {
    return(

      <div>
      <div id="flightDetails" className="clearfix">
        <p className="airlineName"><a href={this.props.detailsURL} target="_blank">{this.props.airlineName}</a> </p>
        <p className="ticketPrice"> {this.props.totalFare} </p>
        <p className="tripDate"> {this.props.departureTime} - {this.props.arrivalTime} </p>
        <p className="destination"> {this.props.departureLocation} - {this.props.arrivalLocation} </p>
      </div>
        <img className="heartButton" src="stylesheets/heart.png" />
      </div>
    )
  }
}
export default FlightView;
