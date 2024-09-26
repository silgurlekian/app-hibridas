import express from 'express';
import autorController from '../controllers/autorController.js';

const router = express.Router();

// Rutas CRUD para autores
router.post('/', autorController.crearAutor); // Crear un nuevo autor
router.get('/', autorController.obtenerAutores); // Obtener todos los autores
router.get('/:id', autorController.obtenerAutor); // Obtener un autor por ID
router.put('/:id', autorController.actualizarAutor); // Actualizar un autor por ID
router.delete('/:id', autorController.eliminarAutor); // Eliminar un autor por ID

export default router;
