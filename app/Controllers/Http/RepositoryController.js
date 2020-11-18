'use strict'
const Repositories = use('App/Models/Repositories')
class RepositoryController {

    async store({ request, auth }) {

        const data = request.only(['name', 'description', 'public'])

        const save = await Repositories.create({ user_id: auth.user.id, ...data, slug: `/${auth.user.name}/${data.name}` })

        return save
    }
    async show({ auth }) {
        const repositories = await Repositories.query().where('user_id', auth.user.id).fetch()

        return repositories
    }
    async index({ }) {
        const repositories = await Repositories.query().where('public', true).fetch()

        return repositories
    }

    async update({ request, params, auth }) {
        const data = request.only(['name', 'description', 'public'])
        const repository = await Repositories.query().where("user_id", auth.user.id).where('id', params.id).first()
        if (repository) {
            repository.merge(data)
            repository.save()
            return repository
        } else {
            return 'error'
        }
    }

    async destroy ({ params, auth }){
        await Repositories.query().where('user_id', auth.user.id).where('id', params.id).delete()
    }

}

module.exports = RepositoryController
