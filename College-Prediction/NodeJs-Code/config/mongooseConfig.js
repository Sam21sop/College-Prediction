import mongoose from "mongoose";

// function to connect mongodb using mongoose
const connectToDB = async (BASE_URL, DB_NAME) => {
    try {
        await mongoose.connect(`mongodb://${BASE_URL}/${DB_NAME}`);
        // await mongoose.connect(`mongodb://127.0.0.1:27017/CollegePrediction`);
        console.log("MongoDB Connected using Mongoose");
    } 
    catch (error) {
        console.log(error);
    }
};


export default connectToDB;