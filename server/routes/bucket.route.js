import express from 'express'
import { getBalance, getIncome, getWithdrawals, withdraw } from '../controllers/bucket.controller.js'

const routerBucket = express.Router()

routerBucket.route('/withdraw').post(withdraw)
routerBucket.route('/income').get(getIncome)
routerBucket.route('/withdrawals').get(getWithdrawals)
routerBucket.route('/balance').get(getBalance)

export default routerBucket