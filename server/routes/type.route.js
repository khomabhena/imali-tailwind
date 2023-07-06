import express from 'express'
import { createType, getAllTypes, getType } from '../controllers/type.controller.js'

const routerType = express.Router()

routerType.route('/').get(getAllTypes)
routerType.route('/').post(createType)
routerType.route('/:id').get(getType)

export default routerType