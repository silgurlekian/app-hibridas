import express from 'express';
import libroController from '../controllers/libroController.js';
import verificarToken from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas CRUD para libros (protegidas)
router.post('/', verificarToken, libroController.crearLibro);
router.get('/', verificarToken, libroController.obtenerLibros);
router.get('/:id', verificarToken, libroController.obtenerLibro);
router.put('/:id', verificarToken, libroController.actualizarLibro);
router.delete('/:id', verificarToken, libroController.eliminarLibro);

export default router;
