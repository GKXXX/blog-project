/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.alterTable("post",(table) => {
    table.dropColumn("dateCreation")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  knex.schema.alterTable("post",(table) => {
    table.date("dateCreation")
  })
}
