'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Followers extends Model {
    static get table() {
        return "followers"
    }
}

module.exports = Followers
