const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config.db);

const agregarUsuario = async (id, nombre) => { 
    try {
        const consulta = {
            text: 'INSERT INTO usuarios (id, nombre) VALUES ($1, $2) RETURNING *',
            values: [id, nombre],
        };
        const response = await pool.query(consulta);
        console.log('Usuario agregado:', response.rows[0]);
        return response.rows[0];
    } catch (error) {
        console.error('Error al agregar usuario:', error);
        throw error;
    } finally {
        if (pool) {
            try {
                await pool.end();
            } catch (err) {
                console.error("Error cerrando la conexión:", err)
            }
        }
    }
};


(async () => {
    try {
        await agregarUsuario(1, 'Nuevo Usuario');
    } catch (error) {
    }

})();
