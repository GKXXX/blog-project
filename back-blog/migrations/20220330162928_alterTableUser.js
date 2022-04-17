/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) =>  {
  await knex.schema.alterTable("user", (table) => {
    table.renameColumn("password","hashedPassword")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.alterTable("user",(table) => {
    table.renameColumn("hashedPassword","password")
  })
}
