import currencyModel from "../models/currency.model.js";

export const createCurrency = async (req, res) => {
    try {
        const {code, symbol, email} = req.body
        const doesExist = await currencyModel.findOne({ email: email, code: code, symbol: symbol })

        if (doesExist)
            res.status(300).json({ message: "Exists" })
        else {
            const data = await currencyModel.create({
                code,
                symbol,
                email
            })
            res.status(400).json(data)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getMyCurrency = async (req, res) => {
    try {
        const { email } = req.params
        const data = await currencyModel
            .find({ email: email})
            .sort({ dateCreated: 1})

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllCurrency = async (req, res) => {
    try {
        const data = await currencyModel
            .find({})
            .sort({ code: 1 })

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateCurrency = async (req, res) => {}

export const deleteCurrency = async (req, res) => {}