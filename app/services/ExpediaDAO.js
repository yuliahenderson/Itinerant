const db = require('../config/db');
const sql = require('../config/sqlProvider').expedias;
const Expedia = require('../models/Expedia');

class ExpediaDAO {
  static create({ location, arrival, dateto, user_id}) {
    return db.one(sql.create, [location, arrival, dateto, user_id])
             .then((data) => {
               new Flight(data);
             });
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static searchBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.map(sql.find, [key, value], (row) => new Expedia(row));
  }
}

module.exports = ExpediaDAO;
