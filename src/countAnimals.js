const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal && animal.specie && animal.sex) {
    return species
      .find((type) => type.name === animal.specie).residents
      .filter((type) => type.sex === animal.sex).length;
  }
  if (animal) {
    return species.find((type) => type.name === animal.specie).residents.length;
  }
  return species.reduce((acc, type) => {
    acc[type.name] = type.residents.length;
    return acc;
  }, {});
}

module.exports = countAnimals;
