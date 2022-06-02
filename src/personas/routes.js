const express = require('express');
const PersonaController = require('./controller');
const PersonaRepository = require('../personas/repository');

const personaRoutes = () => {
    const router = express.Router();

    const repositoryPersona = new PersonaRepository();
    const personaController = PersonaController(repositoryPersona);

    router.route('/swapi/').get( personaController.getPersonaSwapi);
    router.route('/').get(personaController.getPersonas);
    router.route('/').post(personaController.setPersona);
    router.route('/:id').get(personaController.getPersonaById);

    return router;
}

module.exports = personaRoutes;