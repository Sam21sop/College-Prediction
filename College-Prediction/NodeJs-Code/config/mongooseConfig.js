import mongoose from "mongoose";

// function to connect mongodb using mongoose
const connectToDB = async (baseURL) => {
    try {
        await mongoose.connect(baseURL);
        console.log("MongoDB Connected using Mongoose");
    } 
    catch (error) {
        console.log(error);
    }
};


export default connectToDB;