// Importar express
import express from "express";

const app = express();
const PORT = 3000;

// Crear los arrays antes de las rutas
const peliculasFavoritas = [
  "Matrix",
  "Inception",
  "Interstellar",
  "Avatar",
  "The Godfather",
];

const peliculas = [
  { id: 1, nombre: "El Señor de los Anillos" },
  { id: 2, nombre: "Volver al Futuro" },
  { id: 3, nombre: "Efecto Mariposa" },
];

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 200 },
  { id: 3, nombre: "Producto 3", precio: 300 },
  { id: 4, nombre: "Producto 4", precio: 400 },
  { id: 5, nombre: "Producto 5", precio: 500 },
  { id: 6, nombre: "Producto 6", precio: 600 },
  { id: 7, nombre: "Producto 7", precio: 700 },
  { id: 8, nombre: "Producto 8", precio: 800 },
  { id: 9, nombre: "Producto 9", precio: 900 },
  { id: 10, nombre: "Producto 10", precio: 1000 },
];

// Ruta "/" - Mostrar nombre y apellido
app.get("/", (req, res) => {
  res.send("Nombre: Silvana Gurlekian");
});

// Ruta "/materia" - Mostrar información de la materia
app.get("/materia", (req, res) => {
  res.send("Materia: Aplicaciones Híbridas");
});

// Ruta "/profesor" - Mostrar información del profesor
app.get("/profesor", (req, res) => {
  res.send("Profesor: Camila Marcos Galban");
});

// Ruta "/peliculas" - Listado de productos y filtros
app.get("/peliculas", (req, res) => {
  const { id } = req.query;

  // Si se pasa un ID, devolver el producto correspondiente
  if (id) {
    const peliculas = peliculas.find((p) => p.id == id);
    if (peliculas) {
      return res.json(peliculas);
    } else {
      return res.status(404).send("peliculas no encontrado");
    }
  }
});

// Ruta "/peliculas" - Recibe una película como parámetro
app.get("/peliculas/:nombre", (req, res) => {
  const pelicula = req.params.nombre;
  if (peliculasFavoritas.includes(pelicula)) {
    res.send(`La película "${pelicula}" ya está en favoritos.`);
  } else {
    res.status(404).send("404 – Película no encontrada");
  }
});

// Ruta "/productos" - Listado de productos y filtros
app.get("/productos", (req, res) => {
  const { id, min, max } = req.query;

  // Si se pasa un ID, devolver el producto correspondiente
  if (id) {
    const producto = productos.find((p) => p.id == id);
    if (producto) {
      return res.json(producto);
    } else {
      return res.status(404).send("Producto no encontrado");
    }
  }

  // Si se pasan min o max, filtrar por rango de precio
  let productosFiltrados = productos;

  if (min) {
    productosFiltrados = productosFiltrados.filter(
      (p) => p.precio >= parseInt(min)
    );
  }

  if (max) {
    productosFiltrados = productosFiltrados.filter(
      (p) => p.precio <= parseInt(max)
    );
  }

  res.json(productosFiltrados);
});

// Ruta para cualquier otra URL - Página no encontrada
app.use((req, res) => {
  res.status(404).send("Página no encontrada");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
