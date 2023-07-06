import express from 'express'
import { createCurrency, getAllCurrency, getCurrency, getMyCurrency } from '../controllers/currency.controller.js'

const routerCurrency = express.Router()

routerCurrency.route('/').get(getAllCurrency)
routerCurrency.route('/').post(createCurrency)
routerCurrency.route('/:email').get(getMyCurrency)
routerCurrency.route('/details/:id').get(getCurrency)

export default routerCurrency