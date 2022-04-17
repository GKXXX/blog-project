/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("role", (table) => {
    table.increments("id")
    table.text("label").notNullable()
  })
  await knex.schema.alterTable("user", (table) => {
    table.integer("idRole").defaultTo(1)
    table.foreign("idRole").references("id").inTable("role")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("role")
  await knex.schema.alterTable("user",(table) => {
    table.dropForeign("idRole")
    table.dropColumn("idRole")
  })
}
