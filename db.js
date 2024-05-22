/** Database for lunchly */

const pg = require("pg");
const password = require('./secrets'); // importing password from hidden file

const db = new pg.Client(`postgresql://soucier:${password}@127.0.0.1:5432/lunchly`);

db.connect();

module.exports = db;
