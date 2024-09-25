import express from 'express'
import * as controllers from '../../controllers/web/cabletv.controllers.js'
import { Protect, ValidateTransactionPin } from '../../middleware/auth.js'

const router = express.Router()

//POST ROUTES
router.post('/buyCableTvPlan', Protect, ValidateTransactionPin, controllers.buyCableTvPlan )
router.post('/validateCardNumber', Protect, controllers.validateCardNumber)
//*
router.post('/createCableTvPlan',  controllers.createCableTvPlan )
router.post('/deletetvs',  controllers.deletetvs )



//GET ROUTES
router.get('/getAllCableTv', Protect, controllers.getAllCableTv)
router.get('/getAllCableTv/:id', Protect, controllers.getACableTv)

//PUT ROUTES

export default router