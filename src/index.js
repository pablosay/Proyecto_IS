const app = require('./config/server');
require('./app/rutas/inicio')(app);
app.listen(app.get('port'),
    () => console.log(`server corriendo en puerto ${app.get('port')}`));