import express from 'express'
import * as controllers from '../../controllers/web/airtimeToCash.controllers.js'
import { Protect } from '../../middleware/auth.js'

const router = express.Router()

router.post('/checkAirtime2CashAvailbe', Protect, controllers.checkAirtime2CashAvailbe)
router.post('/validateAirtimeTransfer', Protect, controllers.validateAirtimeTransfer )




//PUT ROUTES

export default router