const characters = require('../data/characters.json');

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () => {
  const characterWithUnknownBirthDate = characters.find(
    (char) => char.birth_year === 'unknown'
  );
  return characterWithUnknownBirthDate;
};

module.exports = findCharacterUnknownBirthDate;
