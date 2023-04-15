const express = require('express')
const router = express.Router()
const routerUsers = require('./users')
const routerItems = require('../router/items')
const routerIngredients = require('../router/inggredients')
const routerCategory = require('../router/category')
const routerCustomer = require('../router/customers')
const { authentication } = require('../middleware/aunth')

router.use('/', routerUsers)
router.use('/pub',routerCustomer)
router.use(authentication)
router.use('/items', routerItems)
router.use('/ingredients', routerIngredients)
router.use('/categories', routerCategory)

module.exports = router