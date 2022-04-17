/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable("post",(table) => {
    table.increments("id")
    table.text("titre")
    table.text("description")
    table.integer("idAuteur")
    table.date("datePublication")
    table.date("dateCreation").defaultTo(knex.fn.now())
    table.foreign("idAuteur").references("id").inTable("user")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.alterTable("post",(table) =>{
    table.dropForeign("idAuteur")
  })
  await knex.schema.dropTable("post")
}
