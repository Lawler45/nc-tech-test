const Card = require("./classes/card");

//Extracts the image url and id to be formatted into the cards
exports.getImageUrl = (templates) => {
  return templates.reduce((idUrlObj, template) => {
    const { id, imageUrl } = template;
    idUrlObj[id] = imageUrl;
    return idUrlObj;
  }, {});
};

//Uses the getImageUrl function and cards.json data to format cards

exports.formatCards = (cards, idUrlObj) => {
  const formattedCards = [];
  cards.forEach((card) => {
    const imageUrl = idUrlObj[card.pages[0].templateId];
    const newCard = new Card(card.title, imageUrl, card.id);
    formattedCards.push(newCard);
  });

  return formattedCards;
};

//Extracts sizes
exports.getSizes = (sizes) => {
  const sizeTitles = { sm: "Small", md: "Medium", lg: "Large", gt: "Giant" };

  const mappedSizes = [];

  sizes.forEach((size) => {
    const sizeInfo = {};
    sizeInfo.id = size;
    sizeInfo.title = sizeTitles[size];
    if (sizeInfo.title) {
      mappedSizes.push(sizeInfo);
    }
  });

  return mappedSizes;
};

