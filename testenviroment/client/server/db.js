const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "uhb,by.r",
    host: "localhost",
    port: 5432,
    database: "BookShop"
});

module.exports = pool;