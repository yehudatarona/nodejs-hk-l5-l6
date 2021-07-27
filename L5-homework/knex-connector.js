const knex = require('knex')

// knex connector
const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "hk_sqlte.db"
    }
})

module.exports = connectedKnex;