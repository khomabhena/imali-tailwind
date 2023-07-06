import typeModel from "../models/type.model.js"

export const createType = async (req, res) => {
    try {
        const { name, allocation, limiter } = req.body
        const data = await typeModel.create({
            name,
            allocation,
            limiter
        })

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getType = async (req, res) => {
    try {
        const { id } = req.params
        const data = await typeModel.findById(id)

        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllTypes = async (req, res) => {
    try {
        const data = await typeModel
            .find({})
            .sort({ dateCreated: -1 })
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}