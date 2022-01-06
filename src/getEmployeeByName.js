const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName) {
    const workerFistName = data.employees.find((worker) => worker.firstName === employeeName);
    const workerLastName = data.employees.find((worker) => worker.lastName === employeeName);
    return (workerFistName || workerLastName);
  }
  return {};
}

module.exports = getEmployeeByName;
