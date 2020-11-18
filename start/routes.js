'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.get('/show', 'UserController.show')*/
Route.resource('users', 'UserController').middleware(['auth'])

Route.post('/login', 'LoginController.login')

Route.post('/followingcreate/:id', 'FollowingController.store').middleware(['auth'])
Route.get('/followings', 'FollowingController.show').middleware(['auth'])
Route.get('/followers', 'FollowerController.show').middleware(['auth'])

Route.post('/repositorycreate', 'RepositoryController.store').middleware(['auth'])
Route.get('/repositorys', 'RepositoryController.show').middleware(['auth'])
Route.get('/indexrepositorys', 'RepositoryController.index').middleware(['auth'])
Route.put('/updaterepositorys/:id', 'RepositoryController.update').middleware(['auth'])
Route.delete('/deleterepositorys/:id', 'RepositoryController.destroy').middleware(['auth'])

Route.post('/starrepositorys/:id', 'RepositoriesStarController.store').middleware(['auth'])
Route.get('/showstars', 'RepositoriesStarController.show').middleware(['auth'])

Route.group(() => {
  
}).prefix('api/v1')
