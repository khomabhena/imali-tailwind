import bucketModel from "../models/bucket.model.js"
import typeModel from "../models/type.model.js"

export const withdraw = async (req, res) => {
    try {
        const { email, currency, type, amount, reason } = req.body
        const balance = await getBalanceFunction(email, currency, type)
        const limiter = await getLimiter(type)

        if (balance >= amount * limiter) {
            const data = await bucketModel.create({
                email,
                currency,
                type,
                amount,
                reason,
                withdrawal: true
            })

            res.status(200).json(data)
        } else {
            res.status(500).json({ message: 'Not enough funds!' })
            // res.status(500).json({ incomes, withdraws, limiter })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getLimiter = async (id) => {
    try {
        const data = await typeModel.findById(id).select('limiter')
        
        return data.limiter
    } catch (error) {
        return error.message
    }
}

export const getIncome = async (req, res) => {
    try {
        const { email, currency, type } = req.query
        const data = await getIncomeFunction(email, currency, type)
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getIncomeFunction = async (email, currency, type) => {
    try {
        const data = await bucketModel
            .find({ 
                email: email, 
                currency: currency, 
                type: type,
                withdrawal: false
            })
            .sort({ dateCreated: -1 })
    
        return data
    } catch (error) {
        return { message: error.message }
    }
}

export const getWithdrawals = async (req, res) => {
    try {
        const { email, currency, type } = req.query
        const data = await getWithdrawalsFunction(email, currency, type)
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getWithdrawalsFunction = async (email, currency, type) => {
    try {
        const data = await bucketModel
            .find({ 
                email: email, 
                currency: currency, 
                type: type,
                withdrawal: true
            })
            .sort({ dateCreated: -1 })
        
        return data        
    } catch (error) {
        return { message: error.message }
    }
}

export const getBalance = async (req, res) => {
    try {
        const { email, currency, type } = req.query
        const balance = await getBalanceFunction(email, currency, type)

        res.status(200).json({balance})
    } catch (error) {
        res.status(500).json({ message: error.message })        
    }
}

const getBalanceFunction = async (email, currency, type) => {
    try {
        const withdrawsData = await getWithdrawalsFunction(email, currency, type)
        const incomesData = await getIncomeFunction(email, currency, type)

        const withdraws = withdrawsData.map(({ amount }) => amount).reduce((sum, amount) => sum + amount, 0)
        const incomes = incomesData.map(({ amount }) => amount).reduce((sum, amount) => sum + amount, 0)
    
        return (incomes - withdraws)
    } catch (error) {
        return { message: error.message }
    }
}