const knex = require('knex');
const configuration = require('../../knexfile'); //importando as configs do bd que eu fiz

const connection = knex(configuration.development);

module.exports = connection;///exportando objeto de conexão