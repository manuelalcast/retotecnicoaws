const express = require('express');
const PeliculaController = require('./controller');
const peliculaRoutes = () => {
    const router = express.Router();

    const peliculaController = PeliculaController();

    router.route('/').get( peliculaController.getPelicula);

    return router;
}

module.exports = peliculaRoutes;