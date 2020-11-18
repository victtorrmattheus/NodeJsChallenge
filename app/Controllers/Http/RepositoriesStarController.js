'use strict'
const Stars = use('App/Models/Repositories_stars')
class RepositoriesStarController {

    async store({ request, params, auth }) {

        const star_received = await request.only(['star'])
        const user = await auth.user.id
        const repository = await params.id
        if (star_received.star) {
            const check = await Stars.query().where('user_id', user).where('repositorie_id', repository).first()
            if (check) {
                return "já tem uma estrela"
            } else {
                await Stars.create({ user_id: user, repositorie_id: repository })
            }
        } else {
            await Stars.query().where('user_id', user).where('repositorie_id', repository).delete()
        }
    }

    async show({ auth }){
        const user = await auth.user.id
        const star = await Stars.query().where('user_id', user).fetch()
        return star
    }

}

module.exports = RepositoriesStarController
