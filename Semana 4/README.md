# Ejercicio arrays

## Parte 1

1. Crear un archivo llamado server.js.
2. Importar express en una variable inmutable llamada express.
3. Crear un servidor web que escuche el puerto 3000.
4. El servidor debe disponer de los siguientes recursos:
    - "/" --> Debe mostrar su nombre y apellido.
    - "/materia" --> Debe mostrar la información de la materia.
    - "/profesor" --> Debe mostrar la información del profesor.
    - cualquier otra url --> Debe mostrar un mensaje de página no encontrada.


## Parte 2

1. Armar un array con 5 películas de su preferencia.
2. En "/películas" debe recibir POR PARÁMETRO una película:
    - Si está en su array, se debe enviar como respuesta: “la película seleccionada ya está en favoritos”.
    - Si no se encuentra, se debe enviar como respuesta: “404 – película no encontrada”.

## Parte 3

1. Agregar una URL llamada "/productos" que muestre un listado de 10 productos (id, nombre, precio).
2. Para la misma url, debo tener la posibilidad de recibir un id por parámetro y responder sólo con la información del producto solicitado.
3. También debe estar la posibilidad de recibir en la misma url los query "min" y "max" con un valor numérico.
Utilizando esos query, retornar los productos que entren en ese rango de precios (se podría recibir sólo una de las dos query o ambas).
