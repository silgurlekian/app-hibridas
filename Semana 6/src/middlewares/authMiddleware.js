import jwt from 'jsonwebtoken';

const verificarToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({ auth: false, message: 'No token provided' });
  }

  jwt.verify(token, 'mi-secreto', (err, decoded) => {
    if (err) {
      return res.status(500).json({ auth: false, message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
};

export default verificarToken;
