import React from 'react';

const propTypes = {
  key: React.PropTypes.number,
  id: React.PropTypes.number,
  location: React.PropTypes.string,
  arrival: React.PropTypes.string,
  dateto: React.PropTypes.string,
  user_id: React.PropTypes.number,
}

class SavedFlightsView extends React.Component {
  render() {
    return(
      <div>
      <p>
      {this.props.location} <br />
      {this.props.arrival} <br />
      {this.props.dateto} <br />
      </p>

      </div>
    )
  }
}

SavedFlightsView.propTypes = propTypes;

export default SavedFlightsView;
