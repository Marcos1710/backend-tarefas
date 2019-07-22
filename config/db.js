const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) // migrations de forma automática, se a aplicação for grande, não é interessante fazer isso 
module.exports = knex