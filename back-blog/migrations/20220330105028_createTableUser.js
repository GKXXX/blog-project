/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("user", (table) =>{
    table.increments("id")
    table.text("username").notNullable()
    table.text("password").notNullable()
    table.text("salt").notNullable()
    table.text("email").notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("user")
}
