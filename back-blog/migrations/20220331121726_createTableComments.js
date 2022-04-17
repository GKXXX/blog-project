/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("comment",(table) => {
    table.increments("id")
    table.text("text")
    table.integer("idAuteur")
    table.foreign("idAuteur").references("id").inTable("user")
    table.integer("idPost")
    table.foreign("idPost").references("id").inTable("post")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable("comment")
}
