const ExpediaDAO = require('../services/ExpediaDAO');

class ExpediaController {
  static getAllOfCurrentUser(req, res) {
    ExpediaDAO.searchBy({
      user_id: req.session.currentUser.id
    }).then((flight) => {
      res.status(200).json(flight);
    });
  }
  static create(req, res) {
    const expediaData = {
      location: req.params.location,
      arrival: req.params.arrival,
      dateto: req.params.dateto,
      user_id: req.session.currentUser.id,
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
