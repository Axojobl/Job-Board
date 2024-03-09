const { Pool } = require('pg');

const PG_URI = 'postgres://lfagqcjq:QU1xlwOWQySsqQ4D4uQWyE6kHzT48bux@ziggy.db.elephantsql.com/lfagqcjq';

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
}