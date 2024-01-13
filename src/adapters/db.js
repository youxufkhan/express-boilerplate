/* eslint-disable no-unused-vars */
const knex = require("knex");

const knexfile = require("../../knexfile");

// eslint-disable-next-line no-undef
const environment = process.env.NODE_ENV || "development";
const configuration = knexfile[environment];

const db = knex(configuration);

db.client.pool.on("afterCreate", (_connection) => {
  console.log("Knex has connected to the database.");
});

db.client.pool.on("afterDestroy", (_connection) => {
  console.log("Knex has disconnected from the database.");
});

db.client.pool.on("error", (error) => {
  console.error("Knex pool error:", error);
});

module.exports = db;
