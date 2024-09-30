const mongoose = require('mongoose');
// require('dotenv').config(); -->cuando esta env en la raiz
require('dotenv').config({ path: './env/.env' });


const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
        
    } catch (error) {
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};

module.exports = {
    dbConnection,
};