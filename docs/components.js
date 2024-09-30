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
                    }
                }
            },   required: ["title", "Completed"],
        }
    }
}

