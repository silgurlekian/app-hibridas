import express from 'express';
import jwt from 'jsonwebtoken'; // Necesario para JWT

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta de login
app.post('/login', (req, res) => {
  
  const { username, password } = req.body;

  // Aquí deberías validar las credenciales del usuario
  if (username === 'usuario1' && password === 'contraseña1') {
    // Crear el token
    const token = jwt.sign({ username }, 'mi_clave_secreta', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

export default app;
