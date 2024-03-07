const { Router } = require('express')
const router = new Router()
const clientsRoutes = require('./clients.routes')

router.use([clientsRoutes])

module.exports = router