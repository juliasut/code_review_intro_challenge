const characters = require("../data/characters.json");

// TODO: return all characters with known birth year
const charactersWithKnownBirthDate = () => {
  const characterWithKnownBirthDate = characters.filter(
    (char) => char.birth_year !== 'unknown'
  );
  return characterWithKnownBirthDate;
};

console.log(charactersWithKnownBirthDate())
module.exports = charactersWithKnownBirthDate;
