import mongoose from "mongoose";

console.log("MongoDB URI:", process.env.MONGODB_URI);

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("connection established")
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);

}

export default connectDB;