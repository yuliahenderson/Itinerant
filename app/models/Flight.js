class Flight {
  constructor({ id, location, arrival, dateTo, user_id }) {
    this.id = id;
    this.location = location;
    this.arrival = arrival;
    this.dateTo = dateTo;
    this.user_id = user_id;
  }
}

module.exports = Flight;


