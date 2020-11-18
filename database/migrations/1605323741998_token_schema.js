'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokenSchema extends Schema {
  up () {
    this.create('tokens', (table) => {
      table.increments()
      table.integer("user_id").unsigned().references("id").inTable("users")
      table.datetime("request_date")
      table.timestamps()
    })
  }

  down () {
    this.drop('tokens')
  }
}

module.exports = TokenSchema
