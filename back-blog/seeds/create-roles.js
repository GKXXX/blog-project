/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("role").del()
  await knex("role").insert([
    {id: 1, label: "administrateur"},
    {id: 2, label: "auteur"},
    {id: 3, label: "lecteur"}
  ])
}