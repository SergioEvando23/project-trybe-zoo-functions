const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalType = data.species.find((species) => species.name === animal);
  return animalType.residents.every((specie) => specie.age >= age);
}

module.exports = getAnimalsOlderThan;
