import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BucketSchema = new Schema({
    type: {
        type: Schema.Types.ObjectId,
        ref: 'Type',
        required: true
    },
    currency: {
        type: Schema.Types.ObjectId,
        ref: 'Currency',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
    },
    withdrawal: {
        type: Boolean,
        required: true
    },
    income: {
        type: Schema.Types.ObjectId,
        ref: "Income",
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const bucketModel = mongoose.model('Bucket', BucketSchema)

export default bucketModel