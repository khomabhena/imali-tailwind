import express from 'express'
import { createCurrency, getAllCurrency, getMyCurrency } from '../controllers/currency.controller.js'

const routerCurrency = express.Router()

routerCurrency.route('/').get(getAllCurrency)
routerCurrency.route('/').post(createCurrency)
routerCurrency.route('/:email').get(getMyCurrency)

export default routerCurrency