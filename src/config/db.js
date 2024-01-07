const knex = require('knex');
const knexfile = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';
const configuration = knexfile[environment];

const db = knex(configuration);

db.client.pool.on('afterCreate', (connection) => {
  console.log('Knex has connected to the database.');
});

db.client.pool.on('afterDestroy', (connection) => {
  console.log('Knex has disconnected from the database.');
});

db.client.pool.on('error', (error) => {
  console.error('Knex pool error:', error);
});

module.exports = db;