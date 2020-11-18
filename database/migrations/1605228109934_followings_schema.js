'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowingsSchema extends Schema {
  up () {
    this.create('followings', (table) => {
      table.increments()
      table.integer("following_id").unsigned().references("id").inTable("users")
      table.integer("user_id").unsigned().references("id").inTable("users")
      table.timestamps()
    })
  }

  down () {
    this.drop('followings')
  }
}

module.exports = FollowingsSchema
