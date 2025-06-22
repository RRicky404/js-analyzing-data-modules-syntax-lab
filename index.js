const date = require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through args and merge arrays
  for (const array of args) {
    combinedObject.users = [...combinedObject.users, ...array];
  }

  // Add today's date
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};