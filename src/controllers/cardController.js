const { selectCards, selectCardById } = require("../models/cardModel");

exports.getCards = (req, res, next) => {
  selectCards().then((cards) => {
    res.status(200).send({ cards: cards });
  });
};

exports.getCardById = async (req, res, next) => {
  const { cardId } = req.params;

  const selectedCard = await selectCardById(cardId);

  res.status(200).send({ card: selectedCard });
};
