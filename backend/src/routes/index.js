const { Router } = require('express')
const routes = new Router()
const userRoutes = require('./user.routes')

routes.use(userRoutes)

module.exports = routes