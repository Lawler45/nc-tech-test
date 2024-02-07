//Extracts the image url and id to be formatted into the cards
exports.getImageUrl = (templates) => {
  return templates.reduce((idUrlObj, template) => {
    const { id, imageUrl } = template;
    idUrlObj[id] = imageUrl;
    return idUrlObj;
  }, {});
};
