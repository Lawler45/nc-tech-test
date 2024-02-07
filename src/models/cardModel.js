const fs = require("fs/promises");

exports.selectCards = async () => {
  const readCard = fs.readFile("src/data/cards.json", "utf-8");
  const readTemplate = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([readCard, readTemplate]);
};
