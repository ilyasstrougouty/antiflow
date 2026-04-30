const User = require('../models/User');

async function create(data) {
  const user = new User(data);
  return user.save();
}

async function findByEmail(email) {
  // TODO: [USER] - Query the database for a user by email; return null if not found
  // CONTEXT: Use User.findOne({ email }); this result is used directly in the login handler
  return null;
}

module.exports = { create, findByEmail };
