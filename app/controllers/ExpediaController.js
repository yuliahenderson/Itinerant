const ExpediaDAO = require('../services/ExpediaDAO');

class ExpediaController {
  static getAllOfCurrentUser(req, res) {
    ExpediaDAO.searchBy({
      user_id: req.session.currentUser.id }).then((flights) => {
      res.status(200).json(flights);
    });
  }
  static create(req, res) {

    const expediaData = {
      user_id: req.session.currentUser.id,
      location: req.params.location,
      arrival: req.params.arrival,
      dateTo: req.params.dateTo,
    };
    ExpediaDAO.create(expediaData)
           .then((data) => res.status(200).json(data));
  }
  static delete(req, res) {
    ExpediaDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = ExpediaController;
