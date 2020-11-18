'use strict'
const User = use('App/Models/User')
const Token = use("App/Models/Token")


class UserController {
    async index({ }) {
        const user = User.all()

        return user
    }

    async store({ request }) {
        const data = request.only(['name', 'email', 'username', 'location', 'description'])
        const user = await User.create(data)

        return user
    }


    async update({ params, request, response}) {
        const user = await User.find(params.id)
        const data = request.only(['id', 'name', 'email', 'username', 'location', 'description'])

        user.merge(data)
        await user.save()
        return user
    }



    async destroy({ params, response }) {

        const user = await User.find(params.id)

        const token = await Token.findBy('user_id', params.id)
        while (token) {

            const token = await Token.findBy('user_id', params.id)
            if (token) {
                token.delete()
            } else {
                break
            }
        }
        if (user) {
            user.delete()
        }
        return user
    }
    async show({ params, request, response, view }) {
        const user = await User.findBy('id', params.id)
        return user
    }


    //async login({ request, response })

}

module.exports = UserController
