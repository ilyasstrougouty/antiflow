const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

async function register(req, res) {
  const { email, password } = req.body;
  try {
    // TODO: [USER] - Hash the plain-text password using bcrypt before saving to the database
    // CONTEXT: Use a salt round of 10; store the hash, never the plain-text password
    const hashedPassword = null;

    const user = await userRepository.create({ email, password: hashedPassword });
    res.status(201).json({ id: user._id, email: user.email });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userRepository.findByEmail(email);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // TODO: [USER] - Compare the plain-text password against the stored hash and return a signed JWT on success
    // CONTEXT: Use bcrypt.compare(); sign with process.env.JWT_SECRET; return 401 on mismatch
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { register, login };
