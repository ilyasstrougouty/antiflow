const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  // TODO: [USER] - Verify the JWT token and attach the decoded payload to req.user
  // CONTEXT: Secret is in process.env.JWT_SECRET; reject with 403 if invalid or expired
}

module.exports = authMiddleware;
