'use strict'
const Following = use('App/Models/Followings')
const Follower = use('App/Models/Followers')

const User = use('App/Models/User')
class FollowingController {

    async store({ request, auth, params }) {

        const user_data = auth.user.id

        const user_follow = await User.findBy('id', params.id)

        const follow = request.only(['follow'])

        if (follow.follow == "follow") {
            //const teste = await Following.query().where('user_id', user_follow.id).fetch()
            const user1 = await Following.query().where('following_id', user_follow.id).where('user_id', user_data).fetch()
        
            if(user1.toJSON().length > 0){
                return "Você ja segue este usuário"
            }
            

            const data_following = {
                "user_id": user_data,
                "following_id": user_follow.id
            }
            const data_follower = {
                "user_id": user_follow.id,
                "follower_id": user_data
            }
            Following.create(data_following)
            Follower.create(data_follower)
        } else if (follow.follow == "unfollow") {
            await Following.query().where('following_id', user_follow.id).where('user_id', user_data).delete()
            await Follower.query().where('follower_id', user_data).where('user_id', user_follow.id).delete()
            
        } else {
            console.log('diferente de follow e unfollow')
        }

    }
    async show({ auth }) {
        const user_data = auth.user.id
        const following = await Following.query().where('user_id', user_data).fetch()
        
        const aux = following.toJSON()
        return aux.length
    }



}


module.exports = FollowingController
