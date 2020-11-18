'use strict'

const Follower = use('App/Models/Followers')
class FollowerController {

    async show({ auth }) {
        const user_data = auth.user.id
        const follower = await Follower.query().where('follower_id', user_data).fetch()
        
        const aux = follower.toJSON()
        return aux.length
    }
}

module.exports = FollowerController
