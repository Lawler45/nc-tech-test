const fs = require("fs/promises");
const { getImageUrl, formatCards } = require("../utils");
const { json } = require("express");

exports.selectCards = async () => {
  const readCard = fs.readFile("src/data/cards.json", "utf-8");
  const readTemplate = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([readCard, readTemplate]);

  const formattedUrl = getImageUrl(JSON.parse(templates));
  const formattedCards = formatCards(JSON.parse(cards), formattedUrl);

  return formattedCards;
};

exports.selectCardById = async (cardId) => {
  const readCard = fs.readFile("src/data/cards.json", "utf-8");
  const readTemplate = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([readCard, readTemplate]);

  const formattedUrl = getImageUrl(JSON.parse(templates));
}

