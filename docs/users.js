module.exports = {
    components:{
        schemas:{
            _id:{
                type:'string',
                description:"An id of a user",
                example: "6201064b0028de7866e2b2c4"
            },
            User: { 
                type: 'object',
                properties: {
                    name: { type: 'string', description: "Name of the user" },
                    email: { type: 'string', description: "Email of the user" }
                },
                required: ['name', 'email'] // Campos obligatorios
            }
        }
    },
    paths: {
        "/id/{_id}": {   // middleware que actualizará el usuario
            put: {
                tags: [
                    "Tasks"
                ],
                description: "Update User",
                operationId: "updateUser",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        required: true,
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of User to be updated",
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/User" },
                        },
                    },
                },
                responses: {
                    200: { description: "User updated successfully" },
                    500: { description: "Server error" },
                },
            },
        },

    }
}