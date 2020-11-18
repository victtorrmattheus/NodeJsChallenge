'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Followings extends Model {
    static get table() {
        return "followings"
    }
}

module.exports = Followings
