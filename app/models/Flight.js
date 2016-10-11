class Flight {
  constructor({ id, location, arrival, date, user_id }) {
    this.id = id;
    this.location = location;
    this.arrival = arrival;
    this.date = date;
    this.user_id = user_id;
  }
}

module.exports = Flight;


