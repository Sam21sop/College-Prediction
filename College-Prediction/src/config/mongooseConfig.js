import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const url = process.env.DB_URL

// function to connect mongodb using mongoose
export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected using Mongoose");
    } 
    catch (error) {
        console.log(error);
    }
};

