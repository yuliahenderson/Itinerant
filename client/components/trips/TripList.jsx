import React from 'react';

const propTypes = {
  trips: React.PropTypes.array,
};

class TripList extends React.Component {
  render() {
    return (
      <div>
      <h2>My Trips</h2>
        {this.props.trips.map((trip) => trip.body).join(` & `)}
      </div>
    );
  }
}

TripList.propTypes = propTypes;

export default TripList;
