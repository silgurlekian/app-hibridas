import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const router = express.Router();
const users = [
  {
    id: 1,
    username: 'usuario1',
    password: bcrypt.hashSync('password1', 8), // Contraseña encriptada
  },
];

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  // Generar JWT
  const token = jwt.sign({ id: user.id }, 'mi-secreto', { expiresIn: '1h' });
  res.json({ auth: true, token });
});

export default router;
