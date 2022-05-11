const { Router } = require('express');
const paises = require('./paises.js');
const actividades = require('./actividades.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//middlew

router.use('/paises',paises); //api pasies
router.use('/actividades.js',actividades )   //api/actividades;

module.exports = router;
