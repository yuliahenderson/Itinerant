import React from 'react';
import request from 'superagent';
import SavedFlightsView from '../views/SavedFlightsView.jsx';


const propTypes = {
  flights: React.PropTypes.array,
};

class SavedFlights extends React.Component {
  constructor(props){
    super(props);
    this.state = ({ showAllSavedFlights: true })
  }
  componentWillMount() {
    this.setState({
      showAllSavedFlights: true,
    });
  }
  render() {
    return (
      <div>
      {
        this.props.flights.map((flights) =>
        <SavedFlightsView
            key = {flights.key}
            id = {flights.id}
            location = {flights.location}
            arrival = {flights.arrival}
            dateto = {flights.dateto}
            user_id = {flights.user_id}
        />
      )}
      </div>
    );
  }
}

SavedFlights.propTypes = propTypes;

export default SavedFlights;
