import express from 'express'
import * as controllers from '../../controllers/web/airtime.controllers.js'
import { Protect } from '../../middleware/auth.js'

const router = express.Router()


export default router