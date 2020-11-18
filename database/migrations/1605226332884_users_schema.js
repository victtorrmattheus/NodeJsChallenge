'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string("name", 255)
      table.string("email", 50).unique().notNullable()
      table.string("location", 300)
      table.string("username", 60).unique().notNullable()
      table.text("description")
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
