import mongoose  from "mongoose"

const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log('Connected to mongodb database'))
        .catch((error) => console.log(error))
}

export default connectDB