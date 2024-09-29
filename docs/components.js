module.exports = {
    components:{
        schemas:{
            User:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"user identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    username:{
                        type:'string',
                        description:"username to register",
                        example:"John"
                    },
                    email:{
                        type:'string',
                        description:"email to register",
                        example:"john@gmail.com"
                    },
                    email:{
                        type:'string',
                        description:"user password",
                        example:"123456"
                    },
                }
            }
        }
    }
}
