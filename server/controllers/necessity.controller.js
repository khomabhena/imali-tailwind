import necessityModel from "../models/necessity.model.js";

export const withdrawNecessity = async (req, res) => {
    try {
        const response = await withdrawAmounts(email, currency)
        const withdraws = response.withdrawals.map(({amount}) => amount).reduce((total, num) => num + total, 0)
        const incomes = response.incomes.map(({amount}) => amount).reduce((total, num) => num + total, 0)
        if ((incomes - withdraws) > amount) {
            const data = await necessityModel.create({
                email,
                amount,
                reason,
                currency,
                withdrawal: true
            })
            res.status(200).json(data)
        } else {
            res.status(500).json({ message: 'Not enough funds!'})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const withdrawAmounts = async (email, currency) => {
    try {
        const incomes = await necessityModel.find({ email: email, currency: currency, withdrawal: false})
            .select('amount')
        const withdrawals = await necessityModel.find({ email: email, currency: currency, withdrawal: true})
            .select('amount')

        return { incomes, withdrawals }
        
    } catch (error) {
        return { message: error.message }
    }
}

export const necessityAllocation = async (email, amount, currency) => {
    try {
        const data = await necessityModel.create({
            email,
            amount,
            reason: "Bucket Allocation",
            currency,
            withdrawal: false
        })

        return {message: "Successful"}
    } catch (error) {
        return { message: error.message };
    }
}

export const getNecessity = async (req, res) => {

}

export const getAllNecessity = async (req, res) => {
    try {
        const { email } = req.params
        const data = await necessityModel
            .find({email: email, withdrawal: true })
            .sort({ dateCreated: -1})
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateNecessity = async (req, res) => {}

export const deleteNecessity = async (req, res) => {}