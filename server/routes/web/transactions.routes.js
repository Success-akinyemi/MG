import express from 'express'
import * as controllers from '../../controllers/web/transactions.controllers.js'
import { Protect } from '../../middleware/auth.js'

const router = express.Router()

router.get('/fetchAllUserTransactions', Protect, controllers.fetchAllUserTransactions)
router.get('/fetchAUserTransaction/:id', Protect, controllers.fetchAUserTransaction )




export default router