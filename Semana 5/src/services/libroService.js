import Libro from '../models/libro.js';

let libros = []; // Array para almacenar libros en memoria

class LibroService {
  static create(libroData) {
    const nuevoLibro = new Libro(libros.length + 1, libroData.titulo, libroData.autorId, libroData.precio);
    libros.push(nuevoLibro);
    return nuevoLibro;
  }

  static getAll() {
    return libros;
  }

  static getById(id) {
    return libros.find(libro => libro.id === id);
  }

  static update(id, libroData) {
    const libroIndex = libros.findIndex(libro => libro.id === id);
    if (libroIndex !== -1) {
      libros[libroIndex] = { ...libros[libroIndex], ...libroData };
      return libros[libroIndex];
    }
    return null;
  }

  static delete(id) {
    const libroIndex = libros.findIndex(libro => libro.id === id);
    if (libroIndex !== -1) {
      libros.splice(libroIndex, 1);
      return true;
    }
    return false;
  }
}

export default LibroService;
