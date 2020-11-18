'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepositoriesSchema extends Schema {
  up() {
    this.create('repositories', (table) => {
      table.increments()
      table.integer("user_id").unsigned().references("id").inTable("users").notNullable()
      table.string("name", 60)
      table.text("description")
      table.boolean("public").default(true)
      table.string("slug")

      table.timestamps()
    })
  }

  down() {
    this.drop('repositories')
  }
}

module.exports = RepositoriesSchema
