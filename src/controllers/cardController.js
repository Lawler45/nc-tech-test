const { selectCards } = require("../models/cardModel");

exports.getCards = (req, res, next) => {
  selectCards().then((cards) => {
    res.status(200).send({cards: cards});
  });
};
