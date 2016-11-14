import React from 'react';

const propTypes = {
  trips: React.PropTypes.array,
};

class TripList extends React.Component {
  render() {
    return (
      <div>
      {this.props.trips.map((trip) => trip.body).join(` & `)}
      </div>
    );
  }
}

TripList.propTypes = propTypes;

export default TripList;
