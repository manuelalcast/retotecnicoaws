module.exports = (repositoryPersona) => {
    async function execute(params, id){

        params.Key = { id };

        const persona = await repositoryPersona.getPersonaById(params);

        return persona.Item;
    }

    return { execute }
}