const { Router } = require('express')
const router = new Router()
const clientsRoutes = require('./clients.routes')
const addresRoutes = require('./addres.routes')

router.use([clientsRoutes, addresRoutes])

module.exports = router