const { employees, species } = require('../data/zoo_data');

function getOldest(identifier) {
  const oldest = (acc, resident) => (acc.age > resident.age ? acc : resident);
  const { residents } = species.find((specie) => specie.id === identifier);
  return Object.values(residents.reduce(oldest));
}

function getOldestFromFirstSpecies(identifier) {
  return getOldest(employees.find((employee) => employee.id === identifier).responsibleFor[0]);
}

module.exports = getOldestFromFirstSpecies;
