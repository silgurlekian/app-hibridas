import express from 'express';
import libroController from '../controllers/libroController.js';

const router = express.Router();

// Rutas CRUD para libros
router.post('/', libroController.crearLibro); // Crear un nuevo libro
router.get('/', libroController.obtenerLibros); // Obtener todos los libros
router.get('/:id', libroController.obtenerLibro); // Obtener un libro por ID
router.put('/:id', libroController.actualizarLibro); // Actualizar un libro por ID
router.delete('/:id', libroController.eliminarLibro); // Eliminar un libro por ID

export default router;
