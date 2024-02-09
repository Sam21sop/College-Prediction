import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const baseURL = process.env.DB_URL

// function to connect mongodb using mongoose
export const connectUsingMongoose = async () => {
    try {
        await mongoose.connect(baseURL);
        console.log("MongoDB Connected using Mongoose");
    } 
    catch (error) {
        console.log(error);
    }
};

