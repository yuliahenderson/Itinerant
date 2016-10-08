const TripDAO = require('../services/TripDAO');

class TripController {
  static getAllOfCurrentUser(req, res) {
    TripDAO.searchBy({ user_id: req.session.currentUser.id }).then((trips) => {
      res.status(200).json(trips);
    });
  }
  static create(req, res) {
    const tripData = {
      body: req.body.body,
      user_id: req.session.currentUser.id,
    };
    TripDAO.create(tripData)
           .then((trip) => res.status(200).json(trip));
  }
  static delete(req, res) {
    TripDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = TripController;
