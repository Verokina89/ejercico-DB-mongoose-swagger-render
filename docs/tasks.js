module.exports = {
    paths: {
      // endpoint que crear una tarea
      "/create": {
        post: {
          tags: ["Task"],
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
  
      // endpoint que obtiene todas las tareas creadas
      "/tasks": {
        get: {
          tags: ["Task"],
          description: "Get all tasks",
          operationId: "getAllTasks",
          parameters: [],
          responses: {
            200: {
              description: "A list of tasks",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/Task",
                    },
                  },
                },
              },
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
  
      // endpoint para obtener una tarea por ID
      "/tasks/{_id}": {
        get: {
          tags: ["Task"],
          description: "Get a task by ID",
          operationId: "getTaskById",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "The ID of the task to retrieve",
            },
          ],
          responses: {
            200: {
              description: "Task found",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            404: {
              description: "Task not found",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
  
      // Ruta para actualizar solo el título de una tarea por ID
      "/tasks/{_id}/title": {
        put: {
          tags: ["Task"],
          description: "Update task title by ID",
          operationId: "updateTaskTitle",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "The ID of the task to update",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      description: "The new title for the task",
                      example: "New task title",
                    },
                  },
                  required: ["title"],
                },
              },
            },
          },
          responses: {
            200: {
              description: "Task title updated successfully",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Task",
                  },
                },
              },
            },
            404: {
              description: "Task not found",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
  
      // endpoint para eliminar una tarea por ID
      "/tasks/{_id}": {
        delete: {
          tags: ["Task"],
          description: "Delete a task by ID",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              required: true,
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "The ID of the task to delete",
            },
          ],
          responses: {
            200: {
              description: "Task deleted successfully",
            },
            404: {
              description: "Task not found",
            },
            500: {
              description: "Server error",
            },
          },
        },
      },
    },
};
  



// module.exports = {
//     paths: {
//     //crea una tarea
//       "/create": {
//         post: {
//           tags: {
//             Task: "Create a Task",
//           },
//           description: "Create Task",
//           operationId: "createTask",
//           parameters: [],
//           requestBody: {
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/Task",
//                 },
//               },
//             },
//           },
//           responses: {
//             201: {
//               description: "Task created successfully",
//             },
//             500: {
//               description: "Server error",
//             },
//           },
//         }
//       },
//     },
// };


  