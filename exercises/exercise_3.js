const characters = require('../data/characters.json');

// TODO: return only characters that
// their height is between 180 and 200

const charactersWithMediumHeight = () => {
  const MIN_HEIGHT = 0;
  const MAX_HEIGHT = 300;
  return characters.filter(({height}) => height > 180 && height < 200);
};

module.exports = charactersWithMediumHeight;
