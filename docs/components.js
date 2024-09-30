module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Task identification ID",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:" Title of the task",
                        example:"Finish homework"
                    },
                    completed:{
                        type:'boolean',
                        description:"Task done",
                        example:"False"
                    }
                }
            },   required: ["title", "Completed"],
        },
    },
};

/*
module.exports = {
  components:{
      schemas:{
          TaskBody:{
              type:'object',
              properties:{
                  title:{
                      type:'string',
                      description:"Title task",
                      example:"Aprender a quitar las cosas que no nos hacen falta"
                  }
              }
          },
          Task:{
            type:'object',
            properties:{
                _id:{
                  type:'objectId',
                  description:"Id task",
                  example:"2378468732g23rg34764378g"
              },
              title:{
                    type:'string',
                    description:"Title task",
                    example:"Aprender a quitar las cosas que no nos hacen falta"
              },
              completed:{
                type:'boolean',
                description:"finish task",
                example:"false"
              }
            }
        },
        TaskId: {  
            type:'string',
            description:"Id task",
            example:"66fa5dc6fa51e5fcd426172c"
        }
      }
  }
}

*/