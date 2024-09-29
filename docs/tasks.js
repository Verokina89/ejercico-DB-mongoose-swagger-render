module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Users: "Create a user",
          },
          description: "Create User",
          operationId: "createUser",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          responses: {
            201: {
              description: "User created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },
    },
  };
  