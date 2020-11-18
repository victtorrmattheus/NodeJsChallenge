'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repositories extends Model {
    static get table() {
        return "repositories"
    }
}

module.exports = Repositories
