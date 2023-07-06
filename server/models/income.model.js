import mongoose from 'mongoose'
const Schema = mongoose.Schema

const IncomeSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: Schema.Types.ObjectId,
        ref: 'Currency',
        required: true
    },
    source: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

// IncomeSchema.virtual("url").get(function () {
//     return `/api/income/${this._id}`
// })

const incomeModel = mongoose.model("Income", IncomeSchema)

export default incomeModel