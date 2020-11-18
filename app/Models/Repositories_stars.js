'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repositories_stars extends Model {
    static get table() {
        return "repositories_stars"
    }
}

module.exports = Repositories_stars
