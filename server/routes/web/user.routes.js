import express from 'express'
import * as controllers from '../../controllers/web/user.controllers.js'
import { Protect } from '../../middleware/auth.js'

const router = express.Router()

router.post('/createPin', Protect, controllers.createPin )
router.post('/updatePin', Protect, controllers.updatePin )
router.post('/cashoutBonus', Protect, controllers.cashoutBonus)
router.post('/updateUser', Protect, controllers.updateUser)



//PUT ROUTES

export default router