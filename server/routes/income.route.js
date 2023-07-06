import express from 'express'
import { createIncome, getAllIncome, getIncome, getTotalIncome } from '../controllers/income.controller.js'

const routerIncome = express.Router()

routerIncome.route('/').get(getAllIncome)
routerIncome.route('/').post(createIncome)
routerIncome.route('/total').get(getTotalIncome)
routerIncome.route('/:id').get(getIncome)

export default routerIncome