module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification ID",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:" title of the task",
                        example:"finish homework"
                    },
                    completed:{
                        type:'boolean',
                        description:"task done",
                        example:"false"
                    }
                }
            },   required: ["title", "completed"],
        }
    }
}

