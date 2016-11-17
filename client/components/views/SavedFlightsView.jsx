import React from 'react'

const propTypes = {
  key: React.PropTypes.number,
  id: React.PropTypes.number,
  location: React.PropTypes.string,
  arrival: React.PropTypes.string,
  dateto: React.PropTypes.string,
  user_id: React.PropTypes.number,
}

class SavedFlightsView {
  render() {
    return(
      <div>
      {this.props.key} <br />
      {this.props.id} <br />
      {this.props.arrival} <br />
      {this.props.dateto} <br />
      {this.props.user_id} <br /> <br />

      </div>
    )
  }
}

SavedFlightsView.propTypes = propTypes;

export default SavedFlightsView;
