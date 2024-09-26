const autorController = {
    crearAutor: (req, res) => {
      // Lógica para crear un autor
      res.send('Crear un autor');
    },
    obtenerAutores: (req, res) => {
      // Lógica para obtener todos los autores
      res.send('Obtener todos los autores');
    },
    obtenerAutor: (req, res) => {
      // Lógica para obtener un autor por ID
      res.send('Obtener un autor por ID');
    },
    actualizarAutor: (req, res) => {
      // Lógica para actualizar un autor por ID
      res.send('Actualizar un autor por ID');
    },
    eliminarAutor: (req, res) => {
      // Lógica para eliminar un autor por ID
      res.send('Eliminar un autor por ID');
    },
  };
  
  export default autorController;
  