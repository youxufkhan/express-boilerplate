/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("users", function(table) {
        table.increments("id").primary();
        table.text("name");
        table.text("email").notNullable().unique();
    
        // You can add any other constraints or indexes here if needed.
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable("users");
};
