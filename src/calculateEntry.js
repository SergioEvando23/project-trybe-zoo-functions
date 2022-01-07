const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const persons = { adult: 0, child: 0, senior: 0 };

  if (!Array.isArray(entrants)) return persons;

  entrants.forEach((person) => {
    if (person.age < 18) {
      persons.child += 1;
    } else if (person.age < 50) {
      persons.adult += 1;
    } else {
      persons.senior += 1;
    }
  });
  return persons;
}

function calculateEntry(entrants) {
  const { adult, child, senior } = countEntrants(entrants);
  return adult * prices.adult + child * prices.child + senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
