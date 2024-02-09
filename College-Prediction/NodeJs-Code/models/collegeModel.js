import mongoose from "mongoose";

const collegeSchema = mongoose.Schema({
    College_Names:{
        type:String
    },
    Cutoff:{
        type:Number
    }
});


const collegeModel = mongoose.model('CollegeData', collegeSchema);
export default collegeModel;
