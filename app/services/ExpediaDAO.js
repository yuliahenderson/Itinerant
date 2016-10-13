const db = require('../config/db');
const sql = require('../config/sqlProvider').expedia;
const Flight = require('../models/Flight');

class ExpediaDAO {
  static create({ location, arrival, dateTo, user_id}) {
    return db.one(sql.create, [location, arrival, dateTo, user_id])
             .then((data) => new Flight(data));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static searchBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.map(sql.find, [key, value], (row) => new Flight(row));
  }
}

module.exports = ExpediaDAO;


