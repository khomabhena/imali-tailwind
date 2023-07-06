import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TypeSchema = new Schema({
    name: {
        type: String,
        enum: ["Fun", "Emergency", "Necessity", "Learning", "Investment"],
        required: true
    },
    allocation: {
        type: Number,
        required: true
    },
    limiter: {
        type: Number,
        required: true,
        default: 1
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const typeModel = mongoose.model("Type", TypeSchema)

export default typeModel