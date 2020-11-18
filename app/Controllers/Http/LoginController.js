'use strict'

const Token = use("App/Models/Token")
const Moment = use("moment")

const User = use('App/Models/User')

class LoginController {

    async login({ request, auth }) {

        const { username } = request.all()

        let user = await User.findBy('username', username)

        const dateCurrent = Moment().utc(-3).format("YYYY-MM-DD HH:mm:ss")

        const data = { "user_id": user.id, "request_date": dateCurrent }

        await Token.create(data)

        return await auth.generate(user)

    }

}

module.exports = LoginController
