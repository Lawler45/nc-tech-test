const { selectCards } = require("../models/cardModel");

exports.getCards = (req, res, next) => {
  selectCards().then(() => {
    res.status(200).send({});
  });
};
