# CRUD DE TAREAS CON MONGOOSE desplegar en render y documentar

Para este ejercicio se pide documentar la API utilizando swagger y desplegar la misma en render. Debemos utilizar la API de tareas que creamos en la Review 2 de la semana pasada.

La estructura actualizada será la siguiente:
- docs
  - components.js //componentes reutilizables para la documentación
  - basicInfo.js // información básica de la API
  - tasks.js // documentación de los diferentes endpoints
  - index.js // importaremos los diferentes archivos y los exportaremos
- config
  - config.js // Código de la conexión a la base de datos.
- env
  - .env // Aquí debe ir la MONGO_URI que nos da mongoDB Atlas
- models
  - Task.js // Aqui ira el modelo de la tarea con los campos title, completed y los timestamps.
- routes 
  - tasks.js // Aquí estarán todas las rutas
- index.js // Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación

## Endpoints de la API a documentar
- POST /create: Endpoint para crear una tarea.
- GET /: Endpoint para traer todas las tareas.
- PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
- DELETE /id/:_id: Endpoint para eliminar una tarea.

## Desplegar en render
- https://dashboard.render.com/


# PISTAS:
- Ejemplos de como documentar en swagger: https://docs.google.com/presentation/d/13kmc77HqbdCoXCm62nT0CmOw62ryB3LxC6vWJ1mgQdU/edit?usp=sharing


/*
NOTAS:
 Para acceder a Swagger la ruta indicada para acceder es añadir el endpoint de swagger; PORTapi-docs/   endpoint de est ejercicio: http://localhost:8080/api-docs/ */