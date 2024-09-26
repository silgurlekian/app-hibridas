import express from 'express';
import libroRoutes from './routes/libroRoutes.js';
import autorRoutes from './routes/autorRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Usar rutas
app.use('/libros', libroRoutes);
app.use('/autores', autorRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Exportar la aplicación
export default app;
