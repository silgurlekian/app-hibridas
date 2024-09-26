import Autor from '../models/autor.js';

let autores = []; // Array para almacenar autores en memoria

class AutorService {
  static create(autorData) {
    const nuevoAutor = new Autor(autores.length + 1, autorData.nombre, autorData.nacionalidad);
    autores.push(nuevoAutor);
    return nuevoAutor;
  }

  static getAll() {
    return autores;
  }

  static getById(id) {
    return autores.find(autor => autor.id === id);
  }

  static update(id, autorData) {
    const autorIndex = autores.findIndex(autor => autor.id === id);
    if (autorIndex !== -1) {
      autores[autorIndex] = { ...autores[autorIndex], ...autorData };
      return autores[autorIndex];
    }
    return null;
  }

  static delete(id) {
    const autorIndex = autores.findIndex(autor => autor.id === id);
    if (autorIndex !== -1) {
      autores.splice(autorIndex, 1);
      return true;
    }
    return false;
  }
}

export default AutorService;
