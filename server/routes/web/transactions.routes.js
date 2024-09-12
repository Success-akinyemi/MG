import express from 'express'
import * as controllers from '../../controllers/web/transactions.controllers.js'
import { Protect } from '../../middleware/auth.js'

const router = express.Router()

router.post('/fetchAllUserTractions', Protect, controllers.fetchAllUserTractions)
router.post('/fetchAUserTraction/:id', Protect, controllers.fetchAUserTraction )




export default router