import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CurrencySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    income: [{
        type: Schema.Types.ObjectId,
        ref: 'Income' 
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

// CurrencySchema.virtual("url").get(function () {
//     return `/api/currency/${this._id}`
// })

const currencyModel = mongoose.model("Currency", CurrencySchema)

export default currencyModel