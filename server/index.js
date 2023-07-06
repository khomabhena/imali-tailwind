import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import routerCurrency from './routes/currency.route.js'
import routerIncome from './routes/income.route.js'
import routerType from './routes/type.route.js'
import routerBucket from './routes/bucket.route.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.get("/", (req, res) => res.send({ message: 'Hello World iMali' }))

// Routers
app.use('/api/v1/currency', routerCurrency)
app.use('/api/v1/type', routerType)
app.use('/api/v1/bucket', routerBucket)
app.use('/api/v1/income', routerIncome)

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(3030, () => console.log('Server started on port http://localhost:3030'))
    } catch (error) {
        console.log(error)
    }
}
startServer()