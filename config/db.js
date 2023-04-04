import mongoose, { mongo } from "mongoose";
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB database on ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB${error}`.bgMagenta.white);
    }
}

export default connectDB;