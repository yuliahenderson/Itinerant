import React from 'react';

const propTypes = {
  trips: React.PropTypes.array,
};

class TripList extends React.Component {
  render() {
   // {this.props.trips.map((trip) => trip.body).join(` & `)}
    return (
      <div>
      </div>
    );
  }
}

TripList.propTypes = propTypes;

export default TripList;
