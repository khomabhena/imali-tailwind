import express from 'express'
import { createType, getAllTypes } from '../controllers/type.controller.js'

const routerType = express.Router()

routerType.route('/').get(getAllTypes)
routerType.route('/').post(createType)

export default routerType