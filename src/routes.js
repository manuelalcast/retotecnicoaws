const express = require('express');
const peliculaRoute = require('./peliculas/routes');
const personaRoute = require('./personas/routes');

const Routes = (dependencies) => {
    const router = express.Router();

    router.use('/pelicula',peliculaRoute(dependencies));
    router.use('/persona',personaRoute(dependencies));
    
    router.use((req, res) => {
        res.status(404).json({ message: 'End Point - not found' });
    });

    return router;
}

module.exports = Routes;