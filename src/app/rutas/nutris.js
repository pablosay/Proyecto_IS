const conn = require('../../config/database');
module.exports = (app) => {
    //Datos para el perfil
    app.get('/nutris/perfil/:usuario', (req,res) => {
        let query = `SELECT nombre, telefono, colegiado, descripcion FROM nutris WHERE usuario = '${req.params.usuario}'`;
        conn.query(query, (err, rows, cols) => {
            if(err){
                res.json({status: 0, mensaje: "Error en la base de datos"});
            } else {
                res.json({status: 1, mensaje: "No hay error", nutris:rows.rows});
            }
        });
    });
}