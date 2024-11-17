require('dotenv').config();

module.exports = {
    db: {
        user: process.env.DB_USUARIO,
        host: process.env.DB_HOST,
        database: process.env.DB_NOMBRE,
        password: process.env.DB_CONTRASENA,
        port: process.env.DB_PUERTO,
    }
};

