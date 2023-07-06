import bucketModel from "../models/bucket.model.js";
import currencyModel from "../models/currency.model.js";
import incomeModel from "../models/income.model.js";
import typeModel from "../models/type.model.js";

export const createIncome = async (req, res) => {
    try {
        const { email, amount,  currency, source } = req.body
        const newCurrency = await currencyModel.findById(currency)
    
        const [newIncome, allocations] = await Promise.all([
            incomeModel.create({
                email,
                amount,
                currency,
                source
            }),
            makeAllocations(email, amount, currency, source)
        ])

        const id = newIncome._id
        newCurrency.income.push(id)
        newCurrency.save()

        res.status(200).json(allocations)
    } catch (error) {
        res.status(500).json({ message: error.message }) 
    }
}

const makeAllocations = async (email, amount,  currency, source) => {
    try {
        const types = await getTypes()
        const typesArray = []

        // Add id and Allocation to an array
        types.map(({ id, allocation }) => {
            typesArray.push({ id, allocation })
        })

        const buckets = [
            { email, type: typesArray[0].id, amount: (amount * typesArray[0].allocation), reason: source, currency, withdrawal: false },
            { email, type: typesArray[1].id, amount: (amount * typesArray[1].allocation), reason: source, currency, withdrawal: false },
            { email, type: typesArray[2].id, amount: (amount * typesArray[2].allocation), reason: source, currency, withdrawal: false },
            { email, type: typesArray[3].id, amount: (amount * typesArray[3].allocation), reason: source, currency, withdrawal: false },
            { email, type: typesArray[4].id, amount: (amount * typesArray[4].allocation), reason: source, currency, withdrawal: false },
        ]

        const data = await bucketModel.create(buckets)

        return data
    } catch (error) {
        return { message: error.message, where: "Allocations" }
    }
}

const getTypes = async () => {
    try {
        const data = await typeModel.find({})
        
        return data
    } catch (error) {
        return error.message
    }
}

export const getIncome = async (req, res) => {
    try {
        const { id } = req.params
        const data = await incomeModel.findOne({ id: id })

        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllIncome = async (req, res) => {
    try {
        const { email, currency } = req.query
        const data = await incomeModel
            .find({ email: email, currency: currency })
            .sort({ dateCreated: -1 })

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateIncome = async (req, res) => {}

export const deleteIncome = async (req, res) => {}