import express from 'express'
import * as controllers from '../../controllers/web/data.controllers.js'
import { Protect } from '../../middleware/auth.js'

const router = express.Router()

//POST ROUTES
router.post('/buyData', Protect, controllers.buyData)
router.post('/createDataPlans', controllers.createDataPlans)
router.post('/updateDataPlans', Protect,  controllers.updateDataPlans)
router.post('/deleteDataPlan', Protect,  controllers.deleteDataPlan)



//GET ROUTES
router.post('/fetAllDataPlans', Protect,  controllers.fetAllDataPlans)
router.post('/adminFetAllDataPlans',  controllers.adminFetAllDataPlans)





//PUT ROUTES

export default router